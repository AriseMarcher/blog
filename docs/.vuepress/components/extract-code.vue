<template>
  <div class="wrapper">
    My name is components {{ name }}.
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '新的内容'
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper {
  color '#f60'
}
</style>