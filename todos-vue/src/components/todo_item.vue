<template>
	<div class="todo_item" :style="item.css" style={}>
    {{item.contentext}}
  </div>
</template>

<script>
export default {
  name: 'todo_item',
  data () {
    return {
    }
  },
  computed: {
    item_css: function () {
      const self = this
      console.log(self.props)
      var itemCss = {
        'background': self.props ? self.props.item.background : '#000'
      }
      return itemCss
    }
  },
  props: ['item']
}
</script>

<style>
.todo_item{
  color: #fff;
  white-space:nowrap;
  display: inline-block;
  padding: 6px 20px;
  position: absolute;
  top: 20px;
}
</style>