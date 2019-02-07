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

    v-navigation-drawer.primary(app v-model="drawer")
      v-list
        v-list-tile(v-for="link in links" :key="link.text" router :to="link.route")
          v-list-tile-action
            v-icon.white--text {{ link.icon }}
          v-list-tile-content
            v-list-tile-title.white--text {{ link.text }}
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'dashboard', text: 'Dashboard', route: '/'},
        { icon: 'folder', text: 'My Projects', route: '/projects'},
        { icon: 'person', text: 'Team', route: '/team'}
      ]
    }
  },
}
</script>
