<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from './Menu'
export default {
  name: 'Home',
  components:{
    Menu
  },
  data () {
    return {
      msg: 'Bem-vindo a página Home'
    }
  }
}
</script>
