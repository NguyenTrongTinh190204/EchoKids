<template>
  <!-- Chỉ render layout -->
  <component :is="layout" />

  <!-- ChatBox chỉ hiện ở Client -->
  <ChatBox v-if="$route.meta.layout === 'client'" />
</template>

<script>
import ChatBox from './modules/child/chatbox/ChatBox.vue';

const default_layout = "client";

export default {
  components: {
    ChatBox
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    },
  },
};
</script>

<style>
</style>