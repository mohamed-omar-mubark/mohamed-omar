<template>
  <aside class='sidebar'>
    <div class="my-image mb-10">
      <img src="@/assets/images/avatar.png" alt="Mohamed Omar" class="rounded-circle" width="150" height="150">
    </div>
    <h1 class="name mb-1">Mohamed Omar</h1>
    <span class="job-title">Frontend developer</span>

    <ul class="main-menu">
      <li>
        <router-link :to="{ name: 'Profile' }" :class="$route.name === 'Profile' ? 'sidebar-link active' : 'sidebar-link'">Profile</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Skills' }" :class="$route.name === 'Skills' ? 'sidebar-link active' : 'sidebar-link'">Skills</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Experience' }" :class="$route.name === 'Experience' ? 'sidebar-link active' : 'sidebar-link'">Experience</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'RecentWork' }" :class="$route.name === 'RecentWork' ? 'sidebar-link active' : 'sidebar-link'">Recent work</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Contact' }" :class="$route.name === 'Contact' ? 'sidebar-link active' : 'sidebar-link'">Contact</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/layouts/_sidebar.scss';
</style>