<template>
  <ul>
    <li v-for="p in pages">
      <a :href="p.path">{{p.page}}</a>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Menu',
  data () {
    return {
      pages:[
        {
          page: 'Home',
          path: '/'
        },
        {
          page: 'Fotos',
          path: '/photos'
        }
      ]
    }
  }
}
</script>
