<template lang="pug">
  .home
    h1 Homepage
    v-btn.pink.white--text Click me
    v-btn(depressed, color="pink") Click me
    v-btn(flat, color="pink") Click me

    v-btn.pink.white--text(depressed)
      v-icon(left) email
      span Email me

    v-btn.pink.white--text(depressed, small)
      v-icon(left, small) email
      span Email me
    
    v-btn.pink.white--text(depressed, large)
      span Email me
      v-icon(right, large) email

    v-btn(fab, depressed, small, dark, color="purple")
      v-icon favorite
</template>

<script>
export default {
  
}
</script>
