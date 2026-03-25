<template>
  <div v-if="show" class="feedback-box text-center">

    <!-- biểu cảm -->
    <div class="emoji">
      {{ emoji }}
    </div>

    <!-- thông điệp -->
    <div class="message">
      {{ message }}
    </div>

  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "success" // success | retry | normal
    },
    message: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    emoji() {
      if (this.type === "success") return "🎉";
      if (this.type === "retry") return "🙂";
      return "😊";
    }
  }
};
</script>

<style scoped>
.feedback-box {
  padding: 16px;
}

/* biểu cảm */
.emoji {
  font-size: 48px;
}

/* thông điệp */
.message {
  font-size: 18px;
  font-weight: 600;
  margin-top: 8px;
}
</style>