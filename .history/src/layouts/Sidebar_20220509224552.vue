<template>
    <section class="sidebar">
        <div class="my-image">
            <img src="../assets/avatar.png" alt="Mohamed Omar">
        </div>
        <h1 class="name">Mohamed Omar</h1>
        <span class="title">Web developer</span>

        <ul class="main-menu">
            <li>
                <router-link :to="{ name: 'AboutMe' }" class="active sidebar-link" id="about-me">About me</router-link>
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
    </section>
</template>

<script>
export default {
    name: 'Sidebar',
    mounted() {
        // add active class on active link
        let sidebarLinks = document.querySelectorAll(".sidebar-link");
        sidebarLinks.forEach((link) => {
            link.classList.remove("active");
            if (this.$route.fullPath.endsWith(link.id)) {
                link.classList.add("active");
            }
            link.addEventListener("click", () => {
                let sidebarLinks = document.querySelectorAll(".sidebar-link");
                sidebarLinks.forEach((link) => {
                    link.classList.remove("active");
                });
                link.classList.add("active");
            });
        });
    }
};
</script>

<style lang='scss' scoped>
@import "../scss/layouts/_sidebar.scss";
</style>