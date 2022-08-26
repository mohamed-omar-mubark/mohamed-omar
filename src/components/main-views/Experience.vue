<template>
  <section class='profile'>
    <div class="view-title">
      <v-icon>business_center</v-icon>
      <span>Professional Experience</span>
    </div>
    
    <div class="education mb-10">
      <div class="left">
        <span class="year d-block mb-1">2020 - 11/2021</span>
        <span class="country d-block">Remotely</span>
      </div>
      <div class="right">
        <span class="degree d-block mb-1">Frontend developer</span>
        <span class="university d-block">Freelancer - Upwork</span>
      </div>
    </div>

    <div class="education">
      <div class="left">
        <span class="year d-block mb-1">11/2021 - present</span>
        <span class="country d-block">Ismailia, Egypt</span>
      </div>
      <div class="right">
        <span class="degree d-block mb-1">Frontend developer</span>
        <span class="university d-block">Global Directions</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Experience',
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/pages/profile/_profile.scss';
</style>