<template>
    <section class="sidebar">
        <div class="my-image">
            <img src="../assets/avatar.png" alt="Mohamed Omar">
        </div>
        <h1 class="name">Mohamed Omar</h1>
        <span class="title">Web developer</span>

        <ul class="main-menu">
            <li>
                <router-link :to="{ name: 'AboutMe' }" class="active" id="about-me">About me</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Skills' }" id="my-skills">Skills</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'RecentWork' }" id="recent-work">Recent work</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Experience' }" id="experience">Experience</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'Contact' }" id="contact">Contact</router-link>
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