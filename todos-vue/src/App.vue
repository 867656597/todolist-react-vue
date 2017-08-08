<template>
  <div id="app">
    <div id="top" @click="titleShow = !titleShow">
      <transition name='slide-fade'>
        <h4 v-if='titleShow'>Todos - vue</h4>
      </transition>
      <TodoInput :titleShow='titleShow'></TodoInput>
    </div>
    <TodoList></TodoList>
    <router-view></router-view>
  </div>
</template>

<script>
import TodoInput from './components/todo_input.vue'
import TodoList from './components/todo_list.vue'
export default {
  name: 'app',
  data () {
    return {
      titleShow: false
    }
  },
  components: {
    TodoInput,
    TodoList
  },
  mounted () {
    var self = this
    setTimeout(function () {
      self.titleShow = true
    }, 300)
  }
}
</script>

<style>
body,*{
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#top{
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 320px;
  background: #323232 no-repeat center center scroll;
  background-image: url('./../static/post.jpg')
}
#top h4{
  color: #fff;
  padding-top: 80px;
  font-size: 36px;
  display: inline-block;
  /*transform: translateX(50%);*/
}

.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(80px);
  opacity: 0;
}



.slide-fade1-enter-active {
  transition: all .8s ease;
  transition-delay: .7s;
}
.slide-fade1-leave-active {
  transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  transition-delay: .5s;
}
.slide-fade1-enter, .slide-fade1-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(40px);
  opacity: 0;
}
</style>
