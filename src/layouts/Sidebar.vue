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
        <router-link :to="{ name: 'Skills' }" class="sidebar-link" id="my-skills">Skills</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'RecentWork' }" class="sidebar-link" id="recent-work">Recent work</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Experience' }" class="sidebar-link" id="experience">Experience</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Contact' }" class="sidebar-link" id="contact">Contact</router-link>
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