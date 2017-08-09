<template>
	<transition name='slide-fade1'>
      <input v-if='titleShow' id='todo_input' placeholder="input and enter" @click.stop='' v-model='todoValue' />
    </transition>
    
</template>

<script>
export default {
  name: 'todo_input',
  data () {
    return {
      todoValue: ''
    }
  },
  props: {
    titleShow: {
      default: true
    }
  }
}
</script>

<style>
#todo_input{
  position: absolute;
  top: 180px;
  width: 500px;
  left: 50%;
  margin-left: -250px;
  border: none;
  background: rgba(255,255,255,.8);
  height: 35px;
  border-radius: 7px;
  outline: none;
  padding: 0 20px;
  color: #595959;
  font-size: 16px;
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