<template>
  <section>
  <router-link to="/" class="title-button">리스트보기</router-link>

    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" placeholder="Type what you have to do">
        <input type="date" v-model="itemDate" placeholder="Type the date">
        <select v-model="itemPriority">
            <option value="">중요도 선택</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <input type="radio" id="one" value="One" v-model="itemPrivate"><label for="one">공개</label>
        <input type="radio" id="two" value="Two" v-model="itemPrivate"><label for="two">비공개</label>

        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
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
    </div>
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
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: inline-block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
