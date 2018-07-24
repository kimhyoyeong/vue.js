<template>
    <section>
      <router-link to="/TodoInput" class="addContainer">
        <i class="addBtn fa fa-plus" aria-hidden="true"></i> 일정 등록하기
      </router-link>
        <transition-group name="list" tag="ul">
            <li v-for="(todoItem, index) in propsdata" :key="todoItem.id" class="shadow">
              <router-link to="/TodoFooter">
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                    {{ todoItem.title }} - {{ todoItem.id }} - {{ todoItem.date }} - {{ todoItem.priority }}
                <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
                  </router-link>
            </li>
        </transition-group>
    </section>
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        removeTodo(todoItem, index) {
            this.$emit('removeTodo', todoItem, index);
        }
    }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>

<style scoped>

.addContainer{
    display: block;
    width: 100%;
    height:100%;
    border-radius: 5px;
    background: linear-gradient(90deg,#6478fb,#8763fb);
    line-height:50px;
    color: #fff;
  }
</style>
