<template>
  <transition
    name="animate__animated animate__bounce"
    enter-active-class="animate__bounceInLeft"
    leave-active-class="animate__bounceOutRight"
    :appear="true"
  >
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @click="handleCheck(todo.id)"
        />
        <!-- <input type="checkbox" :v-model="todo.done"> -->
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          type="text"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="handleBlur(todo, $event)"
          ref="inputTitle"
        />
      </label>
      <button
        class="btn btn-danger"
        @click="handleDelete(todo.id)"
        key="delete"
      >
        删除
      </button>
      <transition-group
        name="animate__animated animate__bounce"
        enter-active-class="animate__fadeIn"
        leave-active-class="animate__fadeOut"
      >
        <button
          v-show="!todo.isEdit"
          class="btn btn-edit"
          @click="handleEdit(todo)"
          key="edit"
        >
          编辑
        </button>
      </transition-group>
    </li>
  </transition>
</template>

<script>
import PubSub from "pubsub-js";
import "animate.css";
export default {
  name: "TodoItem",
  // 声明接收todo对象
  props: ["todo", "checkTodo", "deleteTodo"],
  methods: {
    // 勾选或取消勾选

    handleCheck(id) {
      // this.checkTodo(id);
      this.$bus.$emit("checkTodo", id);
    },
    // 删除
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        // this.deleteTodo(id);
        // this.$bus.$emit("deleteTodo", id);
        PubSub.publish("deleteTodo", id);
      }
    },
    // 编辑
    handleEdit(todo) {
      if (todo.isEdit !== undefined) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert("输入不能为空！");
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
};
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>