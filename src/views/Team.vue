<template lang="pug">
  .team
    h1.subheading.grey--text Team
    v-container.my-5
      v-layout(row, wrap)
        v-flex(xs12, sm6, md4, lg3, v-for="person in team" :key="person.name")
          v-card.text-xs-center.ma-3(flat)
            v-responsive.pt-4
              | image goes here
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
        { name: 'The Net Ninja', role: 'Web developer' },
        { name: 'Ryu', role: 'Graphic designer' },
        { name: 'Chun Li', role: 'Web developer' },
        { name: 'Gouken', role: 'Social media maverick' },
        { name: 'Yoshi', role: 'Sales guru'}
      ]
    }
  },
}
</script>