<template>
  <section>
      <h2>새 일정등록하기</h2>
  

    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" placeholder="Type what you have to do">        
    </div>
    <ul class="inputList">
        <li><label for="date" class="">Date  </label> <input type="date" v-model="itemDate" placeholder="Type the date" id="date"></li>
        <li>
            <label for="priority">Priority  </label>
            <select v-model="itemPriority" id="priority">
                <option value="">중요도 선택</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </li>
        <li class="inputChkType">
            <input type="radio" id="one" value="One" v-model="itemPrivate"><label for="one">공개</label>
            <input type="radio" id="two" value="Two" v-model="itemPrivate"><label for="two">비공개</label>
        </li>
    </ul>
    <span class="addContainer" v-on:click="addTodo">
        일정등록하기 <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>

    <modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">경고</h3>
        <span slot="footer" @click="showModal = false">할 일을 입력하세요.
            <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
        </span>
    </modal>

    <modal v-if="showModal1" @close="showModal1 = false">
        <h3 slot="header">경고</h3>
        <span slot="footer" @click="showModal1 = false">날짜를 입력하세요.
            <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
        </span>
    </modal>

    <modal v-if="showModal2" @close="showModal2 = false">
        <h3 slot="header">경고</h3>
        <span slot="footer" @click="showModal2 = false">중요도를 선택하세요.
            <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
        </span>
    </modal>

    <modal v-if="showModal3" @close="showModal3 = false">
        <h3 slot="header">경고</h3>
        <span slot="footer" @click="showModal3 = false">공개여부를 선택하세요.
            <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
        </span>
    </modal>

    <router-link to="/" class="addContainer list">리스트보기</router-link>
    </section>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
  data() {
      return {
          newTodoItem: '',
          itemDate: '',
          itemPriority: '',
          itemPrivate: '',
          showModal: false,
          showModal1: false,
          showModal2: false,
          showModal3: false
      }
  },
  methods: {
      addTodo() {
          if (this.newTodoItem == "") {
              this.showModal = !this.showModal;
              return;
          }
          if (this.itemDate == "") {
              this.showModal1 = !this.showModal1;
              return;
          }
          if (this.itemPriority == "") {
              this.showModal2 = !this.showModal2;
              return;
          }
          if (this.itemPrivate == "") {
              this.showModal3 = !this.showModal3;
              return;
          }

          //var value = this.newTodoItem && this.newTodoItem.trim();

          /*console.log(this.newTodoItem);
          console.log(this.itemDate);
          console.log(this.itemPriority);
          console.log(this.itemPrivate);
          return;*/

          this.$emit('addTodo', this.newTodoItem, this.itemDate, this.itemPriority, this.itemPrivate);

          this.clearInput();
      },
      clearInput() {
          this.newTodoItem = '';
          this.itemDate = '';
          this.itemPriority = '';
          this.itemPrivate = '';
      }
  },
  components: {
      Modal: Modal
  }
}
</script>

<style scoped>

h2{font-size:16px;color:#35495e;text-align:left;}
h2:before{display:inline-block;content:'';width:5px;height:5px;margin-right:5px;border-radius:100%;background:#0f7a4a;vertical-align:middle;}
.inputList{padding-left:0;list-style:none;text-align:left;}
.inputList li{margin-bottom:10px;}
.inputList li:before{display:inline-block;content:'-';margin-right:8px;vertical-align:middle;}
.inputList li label{display:inline-block;width:20%;}
.inputList li input[type='date'], .inputList li select{display:inline-block;border:1px solid #a5b3c1;width:70%;line-height:20px;height:20px;}
.inputChkType input{width:auto;margin-right:10px;}
.inputList li.inputChkType label{width:auto;}
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  display: inline-block;
    width: 45%;
    height:100%;
    margin:20px 0 10px;
    border-radius: 5px;
    background: linear-gradient(90deg,#6478fb,#35495e);
    line-height:50px;
    color: #fff;
}
.list{background:linear-gradient(90deg,#41b883,#0c3121);}
.addBtn {
  color: white;
  vertical-align: middle;
}

.title-button{}
</style>
