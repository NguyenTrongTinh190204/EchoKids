<template>
  <div class="image-choice">

    <!-- TIÊU ĐỀ -->
    <div class="text-center mb-4">
      <h5 class="fw-bold mb-2">
        {{ title }}
      </h5>

      <small class="text-muted">
        {{ subtitle }}
      </small>
    </div>

    <!-- DANH SÁCH HÌNH ẢNH -->
    <div class="row g-3">

      <div
        v-for="item in options"
        :key="item.id"
        class="col-6 col-md-4"
      >
        <div
          class="choice-card bg-light rounded-4 border p-3 text-center h-100"
          :class="{
            selected: selectedOption === item.id,
            correct: showResult && item.isCorrect,
            wrong: showResult && selectedOption === item.id && !item.isCorrect
          }"
          @click="selectOption(item)"
        >
          <img
            :src="item.image"
            :alt="item.label"
            class="img-fluid rounded-4 mb-3 choice-image"
          >

          <div class="fw-bold">
            {{ item.label }}
          </div>
        </div>
      </div>

    </div>

    <!-- NÚT XÁC NHẬN -->
    <div class="text-center mt-4">
      <button
        class="btn btn-primary rounded-pill px-4"
        :disabled="!selectedOption"
        @click="confirmChoice"
      >
        Xác nhận
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: "ImageChoice",

  props: {
    title: {
      type: String,
      default: "Chọn hình đúng"
    },

    subtitle: {
      type: String,
      default: "Nghe âm thanh và chọn hình phù hợp"
    },

    options: {
      type: Array,
      default() {
        return [];
      }
    }
  },

  data() {
    return {
      selectedOption: null,
      showResult: false
    };
  },

  methods: {
    selectOption(item) {
      if (this.showResult) {
        return;
      }

      this.selectedOption = item.id;
    },

    confirmChoice() {
      this.showResult = true;

      const selectedItem = this.options.find(
        item => item.id === this.selectedOption
      );

      this.$emit("selected", {
        selected: selectedItem,
        isCorrect: selectedItem ? selectedItem.isCorrect : false
      });
    }
  }
};
</script>

<style scoped>
.choice-card {
  cursor: pointer;
  transition: all 0.25s ease;
}

.choice-card:hover {
  transform: translateY(-4px);
}

.choice-card.selected {
  border: 2px solid #0d6efd !important;
  background: #eef5ff !important;
}

.choice-card.correct {
  border: 2px solid #198754 !important;
  background: #eaf7ef !important;
}

.choice-card.wrong {
  border: 2px solid #dc3545 !important;
  background: #fff1f1 !important;
}

.choice-image {
  width: 100%;
  height: 140px;
  object-fit: cover;
}
</style>