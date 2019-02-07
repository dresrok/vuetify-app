<template lang="pug">
  .dashboard
    h1.subheading.grey--text Dashboard
    v-container.my-5
      v-card(flat, v-for="project in projects" :key="project.title")
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
          v-flex(xs2, sm4, md2)
            div.right
              v-chip(small, :class="`${project.status} white--text caption my-2`") {{ project.status }}
        v-divider
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
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

