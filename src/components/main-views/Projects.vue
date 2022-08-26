<template>
  <section class='profile'>
    <div class="view-title">
      <v-icon>folder_copy</v-icon>
      <span>Projects</span>
    </div>

      <v-timeline align-top dense class="project-timeline">
        <v-timeline-item color="teal lighten-3" small>
          <v-row class="pt-1">
            <v-col>
              <span class="project-name d-block mb-1">360 Clinics</span>
              <p class="project-caption">
                Multi tenant clinics management system built with Vue2, Vuetify and laravel backend.
              </p>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="teal lighten-3" small>
          <v-row class="pt-1">
            <v-col>
              <span class="project-name d-block mb-1">Vue shopping cart</span>
              <p class="project-caption">
                Shopping cart feature for ecommerce web apps, built with Vue2 and Bootstrap depends on browser localStorage.
              </p>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="teal lighten-3" small>
          <v-row class="pt-1">
            <v-col>
              <span class="project-name d-block mb-1">Nafees</span>
              <p class="project-caption">
                Saudi ecoomerce web app you can buy luxurious watches, jewelry and antiques, built with Vue2, Vuex and laravel backend.
              <br>
              </p>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="teal lighten-3" small>
          <v-row class="pt-1">
            <v-col>
              <span class="project-name d-block mb-1">Quasar todo</span>
              <p class="project-caption">
                Todo List App working on five different platforms ( Android, iOS, Mac, Windows & Web Browser ).
              </p>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="teal lighten-3" small>
          <v-row class="pt-1">
            <v-col>
              <span class="project-name d-block mb-1">Blue</span>
              <p class="project-caption">
                Real estate web app built with Vue 2, Vuetify.
              </p>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="teal lighten-3" small>
          <v-row class="pt-1">
            <v-col>
              <span class="project-name d-block mb-1">Mo panel</span>
              <p class="project-caption">
                Admin dashboard template built with Vue 2, Vuetify.
              </p>
            </v-col>
          </v-row>
        </v-timeline-item>
        
        <v-timeline-item color="teal lighten-3" small>
          <v-row class="pt-1">
            <v-col>
              <span class="project-name d-block mb-1">Node.js rest api with authentication</span>
              <p class="project-caption">
                Node.js rest api with authentication with mongodb.
              </p>
            </v-col>
          </v-row>
        </v-timeline-item>
        
        <v-timeline-item color="teal lighten-3" small>
          <v-row class="pt-1">
            <v-col>
              <span class="project-name d-block mb-1">Seddeq</span>
              <p class="project-caption">
                Ecommerce website built with Vue2, Vuex and Vuetify.
              </p>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="teal lighten-3" small>
          <v-row class="pt-1">
            <v-col>
              <span class="project-name d-block mb-1">Albeshary</span>
              <p class="project-caption">
                Website of a leading company in the field of exporting and importing fruits and vegetables, built with Vue2 and Bootstrap.
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