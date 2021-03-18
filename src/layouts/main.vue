<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
  name: "MainLayout",
})
export default class MainLayout extends Vue {
  created() {
    console.log("메인 레이아웃 찎힘")
  }
}
</script>

<style scoped></style>
