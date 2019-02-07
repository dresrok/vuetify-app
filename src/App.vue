<template lang="pug">
  v-app.gray.lighten-4
    navbar
    v-content.mx-4.mb-4
      router-view
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar },
  data () {
    return {
      //
    }
  }
}
</script>
