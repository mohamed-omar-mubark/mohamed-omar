<template>
  <section class='profile'>
    <div class="view-title">
      <i class="fas fa-folder-open"></i>
      <span>Projects</span>
    </div>

      <v-timeline align-top dense class="project-timeline">
        <v-timeline-item color="teal lighten-3" small>
          <v-row class="pt-1">
            <v-col>
              <span class="project-name d-block mb-1">Mo Panel</span>
              <p class="project-caption">
                Mo Panel is an admin dashboard template built with Vue 2, vuetify v2.6.7, Vue-i18n, Bootstrap v5.1.3.
              </p>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="teal lighten-3" small>
          <v-row class="pt-1">
            <v-col>
              <span class="project-name d-block mb-1">Shopping cart with vue</span>
              <p class="project-caption">
                Shopping cart with vue built with Vue 2, vuetify v2.6.7, Bootstrap v5.1.3,
                <br>
                Depend on localStorage to store, update quantity and delete item from cart.
              </p>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="teal lighten-3" small>
          <v-row class="pt-1">
            <v-col>
              <span class="project-name d-block mb-1">360 Clinics</span>
              <p class="project-caption">
                360 Clinics is an online clinics management system built with Vue 2 Bootstrap v5.1.3.
              </p>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="teal lighten-3" small>
          <v-row class="pt-1">
            <v-col>
              <span class="project-name d-block mb-1">Nafees</span>
              <p class="project-caption">
                Nafees is an Ecommerce website to sell and buy watches, accessories and jewelry, with smart auction, shopping cart and wishlist.
                <br>
              </p>
            </v-col>
          </v-row>
        </v-timeline-item>
        
        <v-timeline-item color="teal lighten-3" small>
          <v-row class="pt-1">
            <v-col>
              <span class="project-name d-block mb-1">Seddeq</span>
              <p class="project-caption">
                Seddeq is an Ecommerce website built with Vue 2, vuetify v2.6.7, Bootstrap v5.1.3,
                <br>
                You can buy and sell products with Seddeq.
              </p>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="teal lighten-3" small>
          <v-row class="pt-1">
            <v-col>
              <span class="project-name d-block mb-1">Albeshary</span>
              <p class="project-caption">
                Albeshary is website of a leading company in the field of exporting and importing fruits and vegetables.
              </p>
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>
  </section>
</template>

<script>
export default {
  name: 'Projects',
};
</script>

<style lang='scss' scoped>
@import '@/assets/scss/pages/profile/_profile.scss';
</style>