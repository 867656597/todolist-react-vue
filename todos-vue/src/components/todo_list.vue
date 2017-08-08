<template>
	<div>
    <ul id='list_box'>
      <template v-for='(item,key) in list'>
        <li >
          <span>{{key + 1}}.</span>
          <span>{{item}}</span>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'todo_list',
  data () {
    return {
      list: ['这是一条事项1', '这是一条事项2', '这是一条事项3', '这是一条事项4', '这是一条事项5']
    }
  }
}
</script>

<style>
#list_box{
  text-align: left;
  width: 600px;
  margin: 0 auto;
}
</style>