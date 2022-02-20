<template>
  <AppHeader></AppHeader>
  <div class="ui container">
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AppHeader from "./components/AppHeader.vue";

export default defineComponent({
  name: "App",
  components: {
    AppHeader,
  },
});
</script>
