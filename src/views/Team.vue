<template lang="pug">
  .team
    h1.subheading.grey--text Team
    v-container.my-5
      v-layout(row, wrap)
        v-flex(xs12, sm6, md4, lg3, v-for="person in team" :key="person.name")
          v-card.text-xs-center.ma-3(flat)
            v-responsive.pt-4
              v-avatar.grey.lighten-2(size="100")
                img(:src="person.avatar")
            v-card-text
              .subheading {{ person.name }}
              .grey--text {{ person.role }}
            v-card-actions
              v-btn(flat, color="grey")
                v-icon(small, left) message
                span Message
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'The Net Ninja', role: 'Web developer', avatar: '/avatar-1.png' },
        { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png' },
        { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png' },
        { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png' },
        { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png'}
      ]
    }
  },
}
</script>