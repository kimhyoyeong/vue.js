<template>
    <section>
      <div class="buttons">
            <span>sort</span>
            <button type="button" @click="toggleList(1)">우선순위로 정렬</button>
            <button type="button" @click="toggleList(2)">날짜로 정렬</button>
        </div>
      <router-link to="/TodoInput" class="addContainer">
        <i class="addBtn fa fa-plus" aria-hidden="true"></i> 일정 등록하기
      </router-link>
        <transition-group name="list" tag="ul">
            <li class="shadow" v-for="(todoItem, index) in propsdata" v-bind:dataIndex="index" v-bind:key="todoItem.id" v-touch:swipe="sideSwipe" v-bind:class="[{on:index==activeIndex}]">
              <span class="content" @click="selTodo(todoItem, index)">
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                    {{ todoItem.title }} - {{ todoItem.id }} - {{ todoItem.date }} - {{ todoItem.priority }}
              </span>
              <button type="button" v-on:click="removeTodo(todoItem,index)" class="removeBtn"><i aria-hidden="true" class="far fa-trash-alt"></i></button>
            </li>
        </transition-group>
        <div class="clearAllContainer">
          <span class="clearAllBtn" @click="clearTodo">Clear All</span>
        </div>
    </section>
</template>

<script>
export default {
  props: ['propsdata'],
  data(){
  	return{
  		activeIndex:null,
  		targetIndex:null
  	}
  },
  methods: {
      removeTodo(todoItem, index) {
          this.$emit('removeTodo', todoItem, index);
	        this.activeIndex=null;
      },
  		item(todoItem,index){
  			this.targetIndex=index;
  		},
      selTodo(todoItem, index){
          this.$emit('selTodo',  todoItem, index);
      },
      toggleList(n){
          this.$emit('toggleList',  n);
      },
      clearTodo() {
        this.$emit('removeAll');
      },
      sideSwipe(e,el){
        if(e.direction=="2"){
            this.activeIndex = e.target.attributes.dataIndex.nodeValue;//swipe된 li index값
          }else if(e.direction=="4"){
            this.activeIndex=null;
          }
      }
  }
}
</script>

<style scoped>
  section{
    overflow:hidden;
    width:100%;
  }
  ul{
      padding-left:0;
      margin:0;
      text-align:left;
      list-style-type:none;
  }
  li{
    display: flex;
    position: relative;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: .5rem 0;
    padding: 0 0 0 .9rem;
    background: #fff;
    border-radius: 5px;
    transition-duration:.2s;
  }
  button{border:0}
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .removeBtn{
    position: absolute;top:0;right:-54px;
    height:100%;
    padding:0 20px;
    color: #fff;
    background: #e91e63;
    border-radius: 0 5px 5px 0;
  }
  li.on{
    transform: translateX(-50px);
    border-radius: 5px 0 0 5px;
    background: #f9f9f9;
    color: #999;
    transition: all .2s;
  }
  li.on .removeBtn{
    right:-50px;
    transition: all .2s;
  }
  .list-item{
    display: inline-block;
    margin-right:10px;
  }
  .list-move{
    transition: transform 1s;
  }
  .list-enter-active,
  .list-leave-active{
    transition:all .5s;
  }
  .list-enter,
  .list-leave-to{
      opacity: 0;
      transform:translateY(30px);
  }
  .buttons{text-align:right;}
  .buttons button{padding:0 8px;border-radius: 5px;
      background: linear-gradient(90deg,#82eebe,#41b883);
      border:0;height:25px;line-height:25px;color:#fff;
      }
  .addContainer{
      display: block;
      width: 100%;
      height:100%;
      margin:20px 0 10px;
      border-radius: 5px;
      background: linear-gradient(90deg,#6478fb,#35495e);
      line-height:50px;
      color: #fff;
    }

     .clearAllContainer {
      width: 8.5rem;
      height: 50px;
      line-height: 50px;
      background-color: white;
      border-radius: 5px;
      margin: 0 auto;
    }
    .clearAllBtn {
      color: #e20303;
      display: block;
    }
</style>
