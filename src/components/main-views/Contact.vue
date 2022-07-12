<template>
  <section class='profile'>
    <div class="view-title">
      <i class="fas fa-headset"></i>
      <span>Contact</span>
    </div>

    <div class="contact-box">
      <div class="label">
        <i class="fas fa-envelope"></i>
        <span>Email: </span>
      </div>
      <div class="value">
        <a href="mailto:mohamed.omar.mubark@gmail.com">mohamed.omar.mubark@gmail.com</a>
      </div>
    </div>

    <div class="contact-box">
      <div class="label">
        <i class="fas fa-phone"></i>
        <span>Phone: </span>
      </div>
      <div class="value">
        <a href="tel:+201201456635">+20 120 145 6635</a>
      </div>
    </div>

    <div class="contact-box">
      <div class="label">
        <i class="fab fa-github"></i>
        <span>Github: </span>
      </div>
      <div class="value">
        <a href="https://github.com/mohamed-omar-mubark" target="_blank">github.com/mohamed-omar-mubark</a>
      </div>
    </div>

    <div class="contact-box">
      <div class="label">
        <i class="fab fa-linkedin"></i>
        <span>Linkedin: </span>
      </div>
      <div class="value">
        <a href="https://www.linkedin.com/in/mohamed-omar-mubark/" target="_blank">linkedin.com/in/mohamed-omar-mubark</a>
      </div>
    </div>

    <div class="contact-box">
      <div class="label">
        <i class="fas fa-globe"></i>
        <span>Website: </span>
      </div>
      <div class="value">
        <a href="https://mohamed-omar.online/" target="_blank">mohamed-omar.online</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/pages/profile/_profile.scss';
</style>