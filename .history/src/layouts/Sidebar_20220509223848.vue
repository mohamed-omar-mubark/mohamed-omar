<template>
    <section class="sidebar">
        <div class="my-image">
            <img src="../assets/avatar.png" alt="Mohamed Omar">
        </div>
        <h1 class="name">Mohamed Omar</h1>
        <span class="title">Web developer</span>

        <ul class="main-menu">
            <li>
                <router-link :to="{ name: 'AboutMe' }" class="active">About me</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Skills' }">Skills</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'RecentWork' }">Recent work</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Experience' }">Experience</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Contact' }">Contact</router-link>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'Sidebar',
    mounted() {

    }
};
</script>

<style lang='scss' scoped>
@import "../scss/layouts/_sidebar.scss";
</style>