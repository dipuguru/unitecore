import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../views/HomePage.vue";
import ServicesPage from "../views/ServicesPage.vue";
import AboutPage from "../views/AboutPage.vue";
import CareersPage from "../views/CareersPage.vue";
import BlogsPage from "../views/BlogsPage.vue";
import ContactPage from "../views/ContactPage.vue";
import WhyUniteCore from "../views/WhyUniteCore.vue"

const routes = [

    {
        path: "/",
        name: "Home",
        component: HomePage,
    },

    {
        path: "/services",
        name: "Services",
        component: ServicesPage,
    },

    {
        path: "/about",
        name: "About",
        component: AboutPage,
    },
    {
        path: "/WhyUniteCore",
        name: "WhyUniteCore",
        component: WhyUniteCore,
    },

    {
        path: "/careers",
        name: "Careers",
        component: CareersPage,
    },

    {
        path: "/blogs",
        name: "Blogs",
        component: BlogsPage,
    },

    {
        path: "/contact",
        name: "Contact",
        component: ContactPage,
    },

];

const router = createRouter({

    history: createWebHistory(),

    routes,

    scrollBehavior() {

        return {
            top: 0,
            behavior: "smooth",
        };

    },

});

export default router;