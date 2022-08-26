<template>
  <section class='profile'>
    <div class="view-title">
      <v-icon>military_tech</v-icon>
      <span>Skills</span>
    </div>

    <div class="view-subtitle">
      <span class="d-block">Technologies and programming languages</span>
    </div>

    <p class="skill">
      HTML, CSS, JavaScript,
      <br>
      CSS reprocessors ( SCSS ),
      <br>
      Frontend toolkit ( Bootstrap ),
      <br>
      JavaScript frameworks ( Vue.js ),
      <br>
      Vue app state management ( Vuex - Pinia ),
      <br>
      Vue-i18n,
      <br>
      Vue frameworks ( Nuxt - Quasar - VuePress ),
      <br>
      Vue UI libraries ( Vuetify ),
      <br>
      Version control system ( Git ),
      <br>
      Repo hosting services ( Github ),
      <br>
      Git workflow ( Centralized workflow ),
      <br>
      Package managers ( npm - yarn ),
      <br>
      JavaScript testing ( Jest - Vue test utils ),
      <br>
      HTTP client ( Axios ),
      <br>
      Desktop applications ( Electron )
    </p>
  </section>
</template>

<script>
export default {
  name: 'Profile',
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/pages/profile/_profile.scss';
</style>