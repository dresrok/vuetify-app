<template lang="pug">
  .dashboard
    h1.subheading.grey--text Dashboard
    v-container.my-5
      v-layout(row, wrap)
        v-flex(xs12, md6)
          v-btn.primary(outline, block) 1
        v-flex(xs4, md2)
          v-btn.primary(outline, block) 2
        v-flex(xs4, md2)
          v-btn.primary(outline, block) 2
        v-flex(xs4, md2)
          v-btn.primary(outline, block) 2
      v-layout(row, wrap, justify-space-around)
        v-flex(xs4, md3)
          v-btn.success(outline, block) 1
        v-flex(xs4, md3)
          v-btn.success(outline, block) 2
</template>

<script>
export default {
  
}
</script>
