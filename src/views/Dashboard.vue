<template lang="pug">
  .dashboard
    h1.subheading.grey--text Dashboard
    v-container.my-5
      v-card.pa-3(flat)
        v-layout(row, wrap)
          v-flex(xs12, md6)
            .caption.grey--text Project Title
            div Create a new website
          v-flex(xs6, sm4, md2)
            .caption.grey--text Person
            div The Net Ninja
          v-flex(xs6, sm4, md2)
            .caption.grey--text Due by
            div 1st Jan 2019
          v-flex(xs2, sm4, md2)
            .caption.grey--text Status
            div ongoing
</template>

<script>
export default {
  
}
</script>
