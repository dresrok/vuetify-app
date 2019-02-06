<template lang="pug">
  nav
    v-toolbar(flat, app)
      v-toolbar-title.text-uppercase.grey--text
        span.font-weight-light Todo
        span Ninja
      v-spacer
      v-btn(flat, color="grey")
        span Sign Out
        v-icon(right) exit_to_app
</template>

<script>
export default {
  
}
</script>
