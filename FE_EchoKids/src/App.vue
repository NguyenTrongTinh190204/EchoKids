<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
  
  <ChatBox />
</template>

<script>
import ChatBox from './components/Client/ChatBox/index.vue';

const default_layout = "default";

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
