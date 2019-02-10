<template lang="pug">
  v-dialog(max-width="600px")
    v-btn.success(flat, slot="activator") Add new project
    v-card
      v-card-title
        h2 Add a New Project
      v-card-text
        v-form.px-3(ref="form")
          v-text-field(label="Title", v-model="title", prepend-icon="folder", :rules="inputRules")
          v-textarea(label="Information", v-model="content", prepend-icon="edit", :rules="inputRules")
          v-menu(v-model="menu" :close-on-content-click="false")
            v-text-field(slot="activator", clearable, label="Due date", prepend-icon="date_range", :rules="inputRules", :value="fomattedDate")
            v-date-picker(v-model="due" @change="menu = false")
          v-spacer
          v-btn.success.mx-0.mt-3(flat, @click="submit") Add project
</template>

<script>
import format from 'date-fns/format'

export default {
  data () {
    return {
      title: '',
      content: '',
      due: null,
      menu: false,
      inputRules: [
        v => !!v || 'This field is required',
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ]
    }
  },
  computed: {
    fomattedDate () {
      return this.due ? format(this.due, 'Do MMM YYYY') : ''
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        console.log(this.title, this.content)
      }
    }
  }
}
</script>