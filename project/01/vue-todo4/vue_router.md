

# 04-1 뷰 라우터 (Vue-router)

## 1. 라우팅이란?

라우팅이란 웹 페이지 간의 이동 방법을 말합니다. 라우팅은 현대 웹 앱 형태 중 하나인 싱글 페이지 애플리케이션(SPA)에서 주로 사용하고 있습니다.

- 중첩된 라우트/뷰 매핑
- 모듈화된, 컴포넌트 기반의 라우터 설정
- 라우터 파라미터, 쿼리, 와일드카드
- Vue.js의 트랜지션 시스템을 이용한 트랜지션 효과
- 세밀한 네비게이션 컨트롤
- active CSS 클래스를 자동으로 추가해주는 링크
- HTML5 히스토리 모드 또는 해시 모드(IE9에서 자동으로 폴백)
- 사용자 정의 가능한 스크롤 동작

***

웹개발의 세계에서 빠질 수 없는 **URL**

http://champ.hackers.com/?r=champstudy&c=lecture/lec_toeic

[<img src="http://blog.logicalposition.com/hubfs/Imported_Blog_Media/http-2.png">]()

**PHP 라우터**: Back-end에서 해당 **URL**을 분석하여 특정 로직을 수행하는 로직에 넘겨준다.

***

**뷰 라우터** : **URL**을 분석하고 특정 로직(**Component**)에 연결시켜줌

***

**Vue**뿐만 아니라 **React**와 **Angular** 모두 라우팅을 이용하여 화면을 전환하고 있으며, 자바스크립트 라이브러리를 이용하여 라우팅 방식의 페이지 이동을 구현할 수 있습니다.

[<img src="https://cdn-images-1.medium.com/max/1000/1*yhU3xtt7wXBtGNTJbO8G3Q.png">]()

## 2. 뷰 라우터 (vue-router)

뷰 라우터는 뷰에서 라우팅 기능을 구현할 수 있도록 지원하는 공식 라이브러리입니다.

## 예제1

https://jsfiddle.net/sognxue77/1qapLfvb/80/

## HTML

~~~html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<div id="app">
  <h1>Hello App!</h1>
  <p>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>

  <router-view></router-view>
</div>
~~~

Javascript

~~~javascript
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes // routes: routes
})

const app = new Vue({
  router
}).$mount('#app')
~~~

질문? a태그와 router-link태그의 차이는?

## 3. 동적 라우트 매칭

~~~javascript
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}

{ path: '/user/:id', component: User }
~~~

이제 /user/foo와 /user/bar같은 URL은 모두 같은 경로에 매핑됩니다.

주의점 : 동적 라우팅으로 /user/foo에서 /user/bar로 이동할 때 Vue는 Use 인스턴스를 재사용합니다. 두 라우트 모두 동일한 컴포넌트를 렌더링하므로 이전 인스턴스를 삭제한 다음 새 인스턴스를 만드는 것보다 더 효율적이기 때문입니다. 그러나 이는 또한 컴포넌트의 라이프사이클 훅이 호출되지 않음을 의미합니다. 

동일한 컴포넌트의 params 변경 사항에 반응하려면 $route객체를 보시면 됩니다.

~~~javascript
const User = {
  template: '...',
  watch: {
    '$route' (to, from) {
      // 라우팅의 변화를 감지하고 로직 작성
    }
  }
}
~~~

## 4. 프로그래밍 방식 내비게이션

우리는 <router-link>로  사용하여 선언적 네비게이션용 anchor 태그를 만드는 것 외에도 라우터의 인스턴스 메소드를 사용하여 프로그래밍으로 이를 수행 할 수 있습니다.

~~~javascript
router.push(location, onComplete?, onAbort?)
~~~

**Vue인스턴스 내부에서 우리는 $router로 라우터 인스턴스를 가져올 수 있기 때문에 this.$router.push로 호출할 수 있습니다.**

우리가 <router-link>를 클릭할 때 해당 메서드를 호출하게 되기에 <router-link>를 클릭하는 것은 router.push 메서드를 호출하는 것과 같습니다.

~~~javascript
// 리터럴 string
router.push('home')

// object
router.push({ path: 'home' })

// 이름을 가지는 라우터
router.push({ name: 'user', params: { userId: 123 }})

// 쿼리와 함께 사용, 결과는 /register?plan=private 입니다.
router.push({ path: 'register', query: { plan: 'private' }})
~~~

~~~
router.replace(location, onComplete?, onAbort?)
~~~

~~~
router.go(n)
~~~

## 5. 이름을 가지는(Named) 라우터

~~~javascript
const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    }
  ]
})
~~~

~~~html
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
~~~

/user/123으로 랜딩됩니다.

## 6. 중첩된(Nested) 라우터

네스티드 라우터는 라우터로 페이지를 이동할 때 최소 2개 이상의 컴포넌트를 화면에 나타낼 수 있습니다.
[<img src="https://joshua1988.github.io/images/posts/web/vuejs/namedview-nestedroutes.png">]()

URL에 따라서 컴포넌트의 하위 컴포넌트가 다르게 표시됩니다.

## 예제2

https://jsfiddle.net/6b5hmcsj/2/

주의점 : 최상위 컴포넌트에도 <router-view>가 있고, 최상위 컴포넌트의 하위 컴포넌트에도 <router-view>가 있습니다.

중첩된 라우팅이 중첩된 화면을 구성하는데 적합하다는 것을 알 수 있습니다.

## 7. 네임드 뷰(Named View)

네임드 뷰는 특정 페이지로 이동했을 때 여러 개의 컴포넌트를 동시에 표시하는 라우팅 방식입니다.

[<img src="https://joshua1988.github.io/images/posts/web/vuejs/namedview-nestedroutes.png">]()

## 예제3

https://jsfiddle.net/sognxue77/53umnkqf/2/

이렇게 네임드 뷰를 활용하면 특정 페이지로 이동했을 때 해당 URL에 맞추어 여러개의 컴포넌트를 한 번에 표시할 수 있습니다.

## 8. vue-router의 원리

브라우저의 URL을 변경하고 브라우저가 서버에 요청을 보내지 않게 하는 방법 두가지가 있습니다.

1) **hash모드** : URL에 #을 추가하여 브라우저를 속인다.

http://www.xxx.com/#/login

#뒤에 값의 변화는 **hashchange**이벤트를 실행시키며 우리는 해당 이벤트를 listening하여 특정 로직을 작성할 수 있습니다.

~~~javascript
function matchAndUpdate () {
   // 특정 로직 작성
}

window.addEventListener('hashchange', matchAndUpdate)
~~~

2) **history 모드** : HTML5의 window.history속성을 사용

2014년, HTML5표준에는 **pushState**와 **replaceState**라는 두개의 API가 추가됩니다. 해당 API는 url을 변경할 수 있으며 서버에 요청을 보내지 않게 할 수 있습니다. 또하나의 **popState**라는 API와 같이 라우터를 구현할 수 있었습니다. 당연히 원리는 hash모드와 같습니다. 유일한 다른 점은 url에 #이 없어서 보기에 더 깔끔하다는 것입니다.

~~~javascript
function matchAndUpdate () {
   // 특정 로직 작성
}

window.addEventListener('popstate', matchAndUpdate)
~~~

# 04-2 뷰 HTTP 통신

## 1.웹 앱의 HTTP 통신 방법 

HTTP요청 : 서버에 데이터 요청

웹 앱 HTTP통신의 대표적이 사례로는 JQuery의 ajax가 있습니다. ajax는 서버에서 받아온 데이터를 표시할 때 화면 전체를 갱신하지 않고도 화면의 일부분만 변경할 수 있게 하는 자바스크립트 기법입니다.

뷰에서도 ajax를 지원하기 위한 라이브러리를 제공합니다. 대표적인 것이 뷰 **리소스**와 **액시오스(axios)**입니다.

## 2. 뷰 리소스

뷰 리소스(resource)는 초기에 코어 팀에서 공식적으로 권하는 라이브러리였으나 2016년 말에 에반이 공식적인 지원을 중단하기로 했습니다. 그 이유는 HTTP 통신 관련 라이브러리는 뷰 라우팅, 상태 관리와 같은 라이브러리와는 다르게 프레임워크에 필수적인 기능이 아니라고 판단했기 때문입니다.

## 예제4

https://jsfiddle.net/sognxue77/68xLeodm/

첫 번쨰 로그는 response의 내용입니다. 두 번째 로그는 응답 데이터의 body값이 문자열이기 때문에 JSON.parse() 자바스크립트 API를 이용하여 자바스크립트 객체로 보기 쉽게 변환하였습니다.

**왜 vue-resource를 사용하지 않나요?**

2016년 9월 이후 업데이트가 되지 않고 있고 해결되지 않은 이슈가 100개나 넘습니다. 결정적으로는 에반이 공식적으로 추천하는 프로젝트가 아니라고 말한 것이 원인인 것 같습니다.

## 3. 액시오스(Axios)

액시오스는 현재 뷰 커뮤니티에서 가장 많이 사용되는 HTTP 통신 라이브러리입니다.

## 예제5

https://jsfiddle.net/sognxue77/vh691rwf/1/

