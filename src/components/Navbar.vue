<template lang="pug">
  nav
    v-snackbar(v-model="snackbar", :timeout="4000", top, color="success")
      span Awesome! You added a new project.
      v-btn(flat, color="white", @click="snackbar = false") Close
    v-toolbar(flat, app)
      v-toolbar-side-icon.grey--text(@click="drawer = !drawer")
      v-toolbar-title.text-uppercase.grey--text
        span.font-weight-light Todo
        span Ninja
      v-spacer
      v-menu(offset-y)
        v-btn(flat, slot="activator", color="grey")
          v-icon(left) expand_more
          span Menu
        v-list
          v-list-tile(v-for="link in links" :key="link.text" router :to="link.route")
            v-list-tile-title {{ link.text }}
      v-btn(flat, color="grey")
        span Sign Out
        v-icon(right) exit_to_app

    v-navigation-drawer.primary(app v-model="drawer")
      v-layout(column, align-center)
        v-flex.mt-5
          v-avatar(size="100")
            img.text-lg-center(src="/avatar-1.png")
          p.white--text.subheading.mt-1 The Net Ninja
        v-flex.mt-4.mb-3
          popup(@projectAdded="snackbar = true")
      v-list
        v-list-tile(v-for="link in links" :key="link.text" router :to="link.route")
          v-list-tile-action
            v-icon.white--text {{ link.icon }}
          v-list-tile-content
            v-list-tile-title.white--text {{ link.text }}
</template>

<script>
import Popup from './Popup.vue'

export default {
  components: { Popup },
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'dashboard', text: 'Dashboard', route: '/'},
        { icon: 'folder', text: 'My Projects', route: '/projects'},
        { icon: 'person', text: 'Team', route: '/team'}
      ],
      snackbar: false
    }
  },
}
</script>
