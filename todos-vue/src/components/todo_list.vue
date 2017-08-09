<template>
	<div style="height: calc(100% - 320px)">
    <span style="padding: 15px;font-size: 15px;width: 15px;height: 15px;display: inline-block;background: rgba(0,0,0,.5);border-radius: 50%;cursor: pointer;position: absolute;right: 15px;top: 15px;color: #fff;" @click="addList">+</span>
    <ul id='list_box'>
      <template v-for='(item,key) in list'>
        <li >
          <TodoItem :item="item"></TodoItem>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
const colorList = ['#7b98b5', '#88a87d', '#e3bd2d', '#d6922c', '#a77ea9', '#4295e0', '#45a120', '#a078e3']
import TodoItem from './todo_item'
export default {
  name: 'todo_list',
  data () {
    return {
      list: [{'contentext': '这是一条事项1', css: {'background': 'red'}}]
    }
  },
  methods: {
    addList: function () {
      const colorLength = colorList.length
      const listLength = this.list.length
      const left = parseInt((Math.random() * 900) - 100, 10)
      const top = parseInt((Math.random() * 400) + 100, 10)
      const color = listLength < colorLength ? listLength : listLength % colorLength
      this.list.push({'contentext': '模拟创建待办事项' + (this.list.length + 1), css: {'background': colorList[color], 'left': left + 'px', 'top': top + 'px'}})
    }
  },
  components: {
    TodoItem
  }
}
</script>

<style>
#list_box{
  text-align: left;
  width: 800px;
  height: 100%;
  overflow-y: hidden;
  margin: 0 auto;
  position: relative;
}
</style>