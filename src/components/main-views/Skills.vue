<template>
  <section class='profile'>
    <div class="view-title">
      <i class="far fa-address-card"></i>
      <span>Skills</span>
    </div>

    <div class="view-subtitle">
      <span class="d-block">Technologies and programming languages</span>
    </div>

    <p class="skill">
      HTML, CSS, JavaScript,
      <br>
      CSS reprocessors (SCSS),
      <br>
      JavaScript frameworks & libraries (Vue.js - Jquery - React.js),
      <br>
      State management for vue app (Vuex - Pinia),
      <br>
      Vue-i18n,
      <br>
      Vue UI libraries (vuetify)
      <br>
      Version control system (Git),
      <br>
      Repo hosting services (Github),
      <br>
      Git workflow (Centralized workflow),
      <br>
      Package managers (npm - yarn),
      <br>
      JavaScript testing (Jest - Vue test utils),
      <br>
      Rest api (fetch - axios),
      <br>
      AJAX,
      <br>
      Build tools (Linters formatters (Prettier - ESLint)),
      <br>
      Desktop applications (Electron)
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