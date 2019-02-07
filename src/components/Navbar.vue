<template lang="pug">
  nav
    v-toolbar(flat, app)
      v-toolbar-side-icon.grey--text(@click="drawer = !drawer")
      v-toolbar-title.text-uppercase.grey--text
        span.font-weight-light Todo
        span Ninja
      v-spacer
      v-btn(flat, color="grey")
        span Sign Out
        v-icon(right) exit_to_app

    v-navigation-drawer.indigo(app v-model="drawer")
      p Test
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  },
}
</script>
