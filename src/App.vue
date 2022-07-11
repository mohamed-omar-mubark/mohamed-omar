<template>
  <v-app class="pa-10">
    <!-- preLoading -->
    <PreLoading />
    <!-- app views -->
    <router-view />
  </v-app>
</template>

<script>
// PreLoading component
import PreLoading from '@/components/global/PreLoading.vue';

export default {
  name: "App",
  components: {
    PreLoading,
  },
};
</script>
