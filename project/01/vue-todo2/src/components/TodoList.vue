<template>
  <section>
    <router-link to="/TodoView" class="title-button">
      <i class="addBtn fa fa-plus" aria-hidden="true"></i> 일정 등록하기
    </router-link>

    <transition-group name="list" tag="ul">
      <li class="shadow" v-for="(todoItem,index) in propsdate" v-bind:dataIndex="index" v-bind:key="todoItem" v-touch:swipe="sideSwipe" v-bind:class="[{on:index==activeIndex}]" v-on:click="item(todoItem,index)">
        <button aria-hidden="true" class="checkBtn far fa-star"></button>
        {{todoItem}}
        <button type="button" v-on:click="removeTodo(todoItem,index)" class="removeBtn"><i aria-hidden="true" class="far fa-trash-alt"></i></button>
      </li>
    </transition-group>
  </section>
</template>

<script>
  export default{
    props:['propsdate'],
    data(){
      return{
        activeIndex:null,
        targetIndex:null
      }
    },
    methods:{
      removeTodo(todoItem,index){
        this.$emit('removeTodo',todoItem,index);
        this.activeIndex=null;
      },
      item(todoItem,index){
        this.targetIndex=index;
      },
      sideSwipe(e,el){
        if(e.direction=="2"){
          this.activeIndex = e.target.attributes.dataIndex.value;//swipe된 li index값

        }else if(e.direction=="4"){
          this.activeIndex=null;
        }
      }
    }
  }
</script>

<style>
  section{
    overflow:hidden;
    width:100%;
  }
  ul{
      padding-left:0;
      margin-top:0;
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
  .checkBtn{
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
  .title-button{
    display: block;
    width: 100%;
    height:100%;
    border-radius: 5px;
    background: linear-gradient(90deg,#6478fb,#8763fb);
    line-height:50px;
    color: #fff;
    text-decoration: none;
  }
</style>
