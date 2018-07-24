<https://jsfiddle.net/sognxue77/tfdyxbpa/18/>


# 1. Component 등록

## component이름

```Javascript
Vue.component('my-component-name', { /* ... */ })
```

W3C 표준 : 소문자&'-'

## Component 대소문자 구분

kebab-case :

```javascript
Vue.component('my-component-name', { /* ... */ })
```

PascalCase :

```javascript
Vue.component('MyComponentName', { /* ... */ })
```

사용 시:

~~~html
<my-component-name></my-component-name>
~~~

# 2. Props

## Props 대소문자 (camelCase vs kebab-case)

```javascript
Vue.component('blog-post', {
  // JavaScript 에서 camelCase
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})
```

```html
<!-- HTML 에서는 kebab-case -->
<blog-post post-title="hello!"></blog-post>
```

## Props로 데이터 전달하기

모든 컴포넌트 인스턴스에는 자체 격리 된 범위가 있습니다. 데이터는 Props 옵션을  사용하여 하위 컴포넌트로 전달 될 수 있습니다.

~~~javascript
Vue.component('child', {
    // props 정의
    props: ['message'],
    template: '<span>{{ message }}</span>'
})
~~~

다음 일반 문자열을 다음과 같이 전달할 수 있습니다.

~~~html
<child message="안녕하세요!"></child>
~~~

## Prop 검증

컴포넌트가 받는 중인 prop에 대한 요구사항을 지정할 수 있습니다. 요구사항이 충족 되지 않으면 Vue에서 경고를 내보냅니다. 

```JavaScript
Vue.component('example', {
  props: {
    // 기본 타입 확인 (`null` 은 어떤 타입이든 가능하다는 뜻입니다)
    propA: Number,
    // 여러개의 가능한 타입
    propB: [String, Number],
    // 문자열이며 꼭 필요합니다
    propC: {
      type: String,
      required: true
    },
    // 숫자이며 기본 값을 가집니다
    propD: {
      type: Number,
      default: 100
    },
    // 객체/배열의 기본값은 팩토리 함수에서 반환 되어야 합니다.
    propE: {
      type: Object,
      default: function () {
        return { message: 'hello' }
      }
    },
    // 사용자 정의 유효성 검사 가능
    propF: {
      validator: function (value) {
        return value > 10
      }
    }
  }
})
```

## Props가 아닌 속성

Props가 아닌 속성은 컴포넌트로 전달되지만 해당 props는 정의되지 않은 속성입니다. 

```html
<custome-input data-date-picker="activated"></custom-input>
```

# 3. 사용자 지정 이벤트

## 트리거 이름

자동으로 kebab-case로 변환해주지 않습니다.

```javascript
this.$emit('myEvent')
```

를 아무리 호출해도

```html
<my-component v-on:my-event="doSomething"></my-component>
```

해당 doSomething 함수는 실행되지 않습니다.

kebab-case를 쓰는 것을 권장합니다.

## component밖의 v-model

```html
<div>
  <input v-model="parentMsg">
  <br>
  <child v-bind:my-message="parentMsg"></child>
</div>
```

~~~html
<input v-model="parentMsg"> <!-- 아래 구문이랑 같음 -->

<input v-bind:value="parentMsg" v-on:input="parentMsg = $event.target.value" />
~~~

## component의 v-model 사용자 정의

기본적으로 컴포넌트의 `v-model`은 `value` prop를 보조 변수로 사용하고 `input`을 이벤트로 사용하지만 체크 박스와 라디오 버튼과 같은 일부 입력 타입은 다른 목적으로 `value` 속성을 사용할 수 있습니다.  `model` 옵션을 사용하면 다음 경우에 충돌을 피할 수 있습니다: 

```javascript
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})
```

해당 component의 사용

```html
<base-checkbox v-model="lovingVue"></base-checkbox>
```

## v-on을 이용한 사용자 지정 이벤트

부모 컴포넌트는 자식 컴포넌트가 사용되는 템플릿에서 직접 `v-on` 을 사용하여 자식 컴포넌트에서 보내진 이벤트를 청취할 수 있습니다. 

~~~HTML
<div id="counter-event-example">
  <p>{{ total }}</p>
  <button-counter v-on:increment="incrementTotal"></button-counter>
  <button-counter v-on:increment="incrementTotal"></button-counter>
</div>
~~~

~~~javascript
Vue.component('button-counter', {
  template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1
      this.$emit('increment')
    }
  },
})

new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
})
~~~

## .sync수식어 (2.3.0+ )

일부 경우에 속성에 “양방향 바인딩”이 필요할 수 있습니다. Vue 1버전에 있던 `.sync` 수식어와 동일합니다. 자식 컴포넌트가 `.sync`를 가지는 속성을 변경하면 값의 변경이 부모에 반영됩니다.  

재사용 가능한 컴포넌트를 만들 때 유용할 수 있다는 점을 알게 되었습니다. **부모 상태에 영향을 미치는 코드를 더욱 일관적이고 명백하게 만들어야합니다.** 

`title`이라는 prop 가 있는 component에서 우리는 아래의 코드로 해당 값을 새로운 값으로 업데이트한다는 것을 정의합니다.

```javascript
this.$emit('update:title', newTitle)
```

부모 component는 해당 이벤트를 전달 받으면 데이터를 업데이트 합니다.

```html
<text-document
  v-bind:title="doc.title"
  v-on:update:title="doc.title = $event"
></text-document>
```

해당 코드를 더 간단하게 쓰기 위해  `.sync`를 사용하면

```html
<text-document v-bind:title.sync="doc.title"></text-document>
```

# 4. 슬롯(slot)을 사용한 컨텐츠 배포

## 단일슬롯

하위 컴포넌트 템플릿에 최소한 하나의 `<slot>` 콘텐츠가 포함되어 있지 않으면 부모 콘텐츠가 **삭제** 됩니다. 속성이 없는 슬롯이 하나 뿐인 경우 전체 내용 조각이 DOM의 해당 위치에 삽입되어 슬롯 자체를 대체합니다. 

Html에서 navigation-link라는 Component 를 이렇게 사용하고 있고

```html
<div>
  <h1>나는 부모 컴포넌트의 제목입니다</h1>
  <my-component>
    <p>이것은 원본 컨텐츠 입니다.</p>
    <p>이것은 원본 중 추가 컨텐츠 입니다</p>
  </my-component>
</div>
```

Component Template는 이렇게 정의하였다면

```
<div>
  <h2>나는 자식 컴포넌트의 제목입니다</h2>
  <slot>
    제공된 컨텐츠가 없는 경우에만 보실 수 있습니다.
  </slot>
</div>
```

아래처럼 렌더링 됩니다. 

```
<div>
  <h1>나는 부모 컴포넌트의 제목입니다</h1>
  <div>
    <h2>나는 자식 컴포넌트의 제목 입니다</h2>
    <p>이것은 원본 컨텐츠 입니다.</p>
    <p>이것은 원본 중 추가 컨텐츠 입니다</p>
  </div>
</div>
```

# 5. 동적 컴포넌트

같은 마운트 포인트를 사용하고 예약된 `<component>` 엘리먼트를 사용하여 여러 컴포넌트 간에 동적으로 트랜지션하고 `is` 속성에 동적으로 바인드 할 수 있습니다. 


```javascript
var vm = new Vue({
  el: '#example',
  data: {
    currentView: 'home'
  },
  components: {
    home: { /* ... */ },
    posts: { /* ... */ },
    archive: { /* ... */ }
  }
})
```

```
<component v-bind:is="currentView">
  <!-- vm.currentView가 변경되면 컴포넌트가 변경됩니다! -->
</component>
```
# 6. 기타

## 자식 컴포넌트 참조

props나 이벤트가 있었음에도 불구하고 때때로 JavaScript로 하위 컴포넌트에 직접 액세스 해야 할 수도 있습니다. 이를 위해 `ref` 를 이용하여 참조 컴포넌트 ID를 자식 컴포넌트에 할당해야 합니다. 예: 

```html
<div id="parent">
  <user-profile ref="profile"></user-profile>
</div>
```

```javascript
var parent = new Vue({ el: '#parent' })
// 자식 컴포넌트 인스턴스에 접근합니다.
var child = parent.$refs.profile
```

## 루트 인스턴스 접근

```javascript
// Vue 루트 인스턴스
new Vue({
  data: {
    foo: 1
  },
  computed: {
    bar: function () { /* ... */ }
  },
  methods: {
    baz: function () { /* ... */ }
  }
})
```

```javascript
// 루트 컴포넌트의 값 가져오기
this.$root.foo

// 루트 컴포넌트 값 엎어쓰기
this.$root.foo = 2

// 루트 컴포넌트 계산 된 값 가져오기
this.$root.bar

// 루트 컴포넌트 함수 실행
this.$root.baz()
```

## parent 컴포넌트 접근

~~~ 
$parent
~~~

## child 컴포넌트 인스턴스 혹은 속성 접근

ref 특성으로 component에 이름을 지어줍니다.

```html
<base-input ref="usernameInput"></base-input>
```

다음 코드로 인스턴스를 접근할 수 있습니다.

```javascript
this.$refs.usernameInput
```

부모 컴포넌트에서 자식 컴포넌트의 input을 focus하려고 한다면

```html
<input ref="input">
```

로 정의한 다음, 부모 컴포넌트에서 메소드를 정의하여 

```
methods: {
  focus: function () {
    this.$refs.input.focus()
  }
}
```

해당 기능을 구현할 수 있습니다.

```
this.$refs.usernameInput.focus()
```
