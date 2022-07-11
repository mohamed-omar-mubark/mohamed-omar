<template>
  <transition>
    <div class="preloading" v-if="show">
      <v-sheet
        :color="`white ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        class="pa-3"
      >
        <v-skeleton-loader
          width="300"
          max-width="300"
          type="article, actions"
        ></v-skeleton-loader>
      </v-sheet>
    </div>
  </transition>
</template>

<script>
export default {
  name: "PreLoading",
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    this.toggleLoading();
  },
  methods: {
    // toggleLoading
    toggleLoading() {
      setTimeout(() => {
        this.show = false;
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.preloading {
  display: flex;
  justify-content: center;
  align-items: center;
  
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 99999;
}
</style>