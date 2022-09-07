<template>
  <div class="wrapper">
    My name is components {{ name }}.
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'arisemarcher'
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper {
  color '#f60'
}
</style>