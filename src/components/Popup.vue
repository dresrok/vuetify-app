<template lang="pug">
  v-dialog(max-width="600px")
    v-btn.success(flat, slot="activator") Add new project
    v-card
      v-card-title
        h2 Add a New Project
      v-card-text
        v-form.px-3
          v-text-field(label="Title", v-model="title", prepend-icon="folder")
          v-textarea(label="Information", v-model="content", prepend-icon="edit")
          v-btn.success.mx-0(flat, @click="submit") Add project
</template>

<script>
export default {
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    submit () {
      console.log(this.title, this.content)
    }
  }
}
</script>