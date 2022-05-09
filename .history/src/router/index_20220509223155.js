import { createRouter, createWebHistory } from "vue-router";

// Main view
import MainView from "../views/MainView.vue";
    // Main view childrens
    // About me
    import AboutMe from "../components/about-me/AboutMe.vue";
    // Skills
    import Skills from "../components/skills/Skills.vue";
    // Recent work
    import RecentWork from "../components/recent-work/RecentWork.vue";
    // Experience
    import Experience from "../components/experience/Experience.vue";
    // Contact
    import Contact from "../components/contact/Contact.vue";

const routes = [
    // Main view
    {
        path: "/",
        name: "MainView",
        component: MainView,
        children: [
            // About me
            {
                path: "/about-me",
                name: "AboutMe",
                component: AboutMe,
            },
            // Skills
            {
                path: "/my-skills",
                name: "Skills",
                component: Skills,
            },
            // Recent work
            {
                path: "/recent-work",
                name: "RecentWork",
                component: RecentWork,
            },
            // Experience
            {
                path: "/experience",
                name: "Experience",
                component: Experience,
            },
            // Contact
            {
                path: "/contact",
                name: "Contact",
                component: Contact,
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
