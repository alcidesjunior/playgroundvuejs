<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <Menu></Menu>
    <img src="https://loading.io/spinners/gooeyring/lg.gooey-ring-spinner.gif" v-if="this.results.length == 0">
    <div v-for="photo in results">
      <img :src="photo.thumbnailUrl"><br>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import api from '@/mixins/Api.js'
export default {
  name: 'Photos',
  mixins: [api],
  components:{
    Menu
  },
  data () {
    return {
      msg: 'Bem-vindo a página Fotos',
      // photos: []
    }
  },
  mounted(){
    this.getPhotos();
  }
}
</script>
