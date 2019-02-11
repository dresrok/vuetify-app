<template lang="pug">
  .dashboard
    h1.subheading.grey--text Dashboard
    v-container.my-5
      v-layout.mb-3(row, justify-start)
        v-tooltip(top)
          v-btn(small, flat, color="grey", @click="sortBy('title')", slot="activator")
            v-icon(left, small) folder
            span.caption.text-lowercase By project name
          span Sort projects by project name
        v-tooltip(top)
          v-btn(small, flat, color="grey", @click="sortBy('person')", slot="activator")
            v-icon(left, small) person
            span.caption.text-lowercase By person
          span Sort projects by person
      v-card(flat, v-for="project in projects" :key="project.id")
        v-layout(row, wrap, :class="`pa-3 project ${project.status}`")
          v-flex(xs12, md6)
            .caption.grey--text Project Title
            div {{ project.title }}
          v-flex(xs6, sm4, md2)
            .caption.grey--text Person
            div {{ project.person }}
          v-flex(xs6, sm4, md2)
            .caption.grey--text Due by
            div {{ project.due }}
          v-flex(xs12, sm4, md2)
            div.text-sm-right
              v-chip(small, :class="`${project.status} white--text caption my-2`") {{ project.status }}
        v-divider
</template>

<script>
import db from '@/fb'

export default {
  data() {
    return {
      projects: []
    }
  },
  created () {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges()
      changes.forEach(change => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  },
  methods: {
    sortBy (prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
}
</script>

<style lang="stylus">
.project
  &.complete
    border-left 4px solid #3CD1C2
  &.ongoing
    border-left: 4px solid orange
  &.overdue
    border-left 4px solid tomato
.v-chip
  &.complete
    background #3cd1c2
  &.ongoing
    background #ffaa2c
  &.overdue
    background #f83e70
</style>

