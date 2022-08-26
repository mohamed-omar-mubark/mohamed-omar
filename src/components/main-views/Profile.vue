<template>
  <section class='profile'>
    <div class="view-title">
      <v-icon>badge</v-icon>
      <span>Profile</span>
    </div>

    <p class="parahraph">
      Hi, I am Mohamed Omar, Bachelor's degree in agriculture.
    </p>
    <p class="parahraph">
      Currently, Frontend developer with 3+ years of hands-on experience designing, developing and implementing applications and solutions using a range of technologies, and programming languages.
    </p>
    <p class="parahraph">
      Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Frontend developer.
    </p>

    <div class="view-title">
      <v-icon>school</v-icon>
      <span>Education</span>
    </div>
    
    <div class="education">
      <div class="left">
        <span class="year d-block mb-1">2021</span>
        <span class="country d-block">Ismailia, Egypt</span>
      </div>
      <div class="right">
        <span class="degree d-block mb-1">Bachelor of Agriculture</span>
        <span class="university d-block">Suez Canal University</span>
      </div>
    </div>
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