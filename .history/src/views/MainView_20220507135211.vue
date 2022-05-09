<template>
    <div class="main-view">
        <div class="glass">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-4">
                        <Sidebar />
                    </div>
                    <div class="col-xl-8 col-lg-8">
                        test
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="circle1"></div>
    <div class="circle2"></div>
</template>

<script>
// import sidebar
import Sidebar from "../layouts/Sidebar.vue";

export default {
    name: "MainView",
    components: {
        Sidebar,
    }
};
</script>

<style lang="scss" scoped>
@import "../scss/pages/_main-view.scss";
</style>