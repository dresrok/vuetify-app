<template lang="pug">
  .projects
    h1.subheading.grey--text Projects
    v-container.my-5
      v-expansion-panel
        v-expansion-panel-content(v-for="project in myProjects" :key="project.title")
          div.py-1(slot="header") {{ project.title }}
          v-card
            v-card-text.px-4.grey--text
              div.font-weight-bold {{ project.due }}
              div {{ project.content }}
</template>

<script>
import db from '@/fb'

export default {
  data () {
    return {
      projects: [
      ]
    }
  },
  computed: {
    myProjects () {
      return this.projects.filter(project => {
        return project.person === 'The Net Ninja' && project.status != 'complete'
      })
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
  }
}
</script>