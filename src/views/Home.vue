<template>
  <main class='home'>
    <div class="main-content">
      <v-container fluid class=" pa-0">
        <v-row>
          <div class="col-xl-4 col-lg-4">
            <!-- Sidebar -->
            <Sidebar />
          </div>
          <div class="col-xl-8 col-lg-8">
            <!-- Views -->
            <router-view /> 
          </div>
        </v-row>
      </v-container>
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
    // if route name Home and path is / then redirect to /profile
    if (this.$route.name === 'Home' && this.$route.path === '/') {
      // redirect to profile view;
      this.$router.push('Profile');
    }
  }
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/pages/home/_home.scss';
</style>