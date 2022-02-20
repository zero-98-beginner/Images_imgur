<template>
  <div>Please wait ...</div>
</template>

<script >
import { defineComponent } from "vue";
import { mapActions } from "vuex";
export default defineComponent({
  name: "AuthHandler",
  methods: mapActions(["finalizeLogin"]),
  created() {
    this.finalizeLogin(window.location.hash);
  },
});
</script>
