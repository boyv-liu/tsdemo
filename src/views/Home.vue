<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {},
  mounted() {
    console.table(1)
  }
})
export default class Home extends Vue {
  // data
  // methods
}
</script>

<style scoped lang="less"></style>
