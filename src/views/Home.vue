<template>
  <main class='home'>
    <div class="main-content">
      <div class="container-fluid pa-0">
        <div class="row">
          <div class="col-xl-4 col-lg-4">
            <!-- Sidebar -->
            <Sidebar />
          </div>
          <div class="col-xl-8 col-lg-8">
            <!-- Views -->
            <router-view /> 
          </div>
        </div>
      </div>
    </div>
    <div class="circle1"></div>
    <div class="circle2"></div>
  </main>
</template>

<script>
// import sidebar component
import Sidebar from '@/layouts/Sidebar.vue'
export default {
  name: 'Home',
  components: {
    Sidebar
  },
  created() {
    // redirect to profile view;
    this.$router.push('Profile');
  }
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/pages/home/_home.scss';
</style>