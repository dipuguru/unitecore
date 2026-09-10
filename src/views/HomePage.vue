<template>

    <main class="home-page">

        <HeaderSection />

        <HeroSection />

        <CoreSolutions />

        <DataAvailability />

        <DataSecurity />

        <DataAnalytics />

        <ITConsulting />

        <StatisticsSection />

        <TechnologyPartners />

        <!-- FAQ -->
        <FAQSection />

        <AboutSection />

        <VisionMission />

        <CTASection />

        <FooterSection />

    </main>

</template>


<script>

import HeaderSection from "../components/HeaderSection.vue";

import HeroSection from "../components/HeroSection.vue";

import CoreSolutions from "../components/CoreSolutions.vue";

import DataAvailability from "../components/DataAvailability.vue";

import DataSecurity from "../components/DataSecurity.vue";

import DataAnalytics from "../components/DataAnalytics.vue";

import ITConsulting from "../components/ITConsulting.vue";

import StatisticsSection from "../components/StatisticsSection.vue";

import TechnologyPartners from "../components/TechnologyPartners.vue";

import FAQSection from "../components/FAQSection.vue";

import AboutSection from "../components/AboutSection.vue";

import VisionMission from "../components/VisionMission.vue";

import CTASection from "../components/CTASection.vue";

import FooterSection from "../components/FooterSection.vue";


export default {

    name: "HomePage",


    components: {

        HeaderSection,

        HeroSection,

        CoreSolutions,

        DataAvailability,

        DataSecurity,

        DataAnalytics,

        ITConsulting,

        StatisticsSection,

        TechnologyPartners,

        FAQSection,

        AboutSection,

        VisionMission,

        CTASection,

        FooterSection

    }

};

</script>


<style scoped>
.home-page {

    width: 100%;

    min-height: 100vh;

    background: #ffffff;

    color: #202323;

    overflow-x: hidden;

}


/* GLOBAL */

.home-page :deep(section) {

    width: 100%;

}


.home-page :deep(.orange) {

    color: #F5820B !important;

}


.home-page :deep(.dark-green) {

    background: #123C35 !important;

}


.home-page :deep(.gray-section) {

    background: #F3F4F2 !important;

}


/* SECTION RHYTHM */

.home-page :deep(.solutions),
.home-page :deep(.industries) {

    background: #F3F4F2;

}


.home-page :deep(.data-availability),
.home-page :deep(.data-analytics),
.home-page :deep(.about) {

    background: #ffffff;

}


.home-page :deep(.data-security) {

    background: #202323;

    color: #ffffff;

}


.home-page :deep(.it-consulting) {

    background: #F5820B;

    color: #ffffff;

}


.home-page :deep(.statistics) {

    background: #202323;

    color: #ffffff;

}


.home-page :deep(.technology) {

    background: #F3F4F2;

}


/* FAQ */

.home-page :deep(.faq-section) {

    background:
        linear-gradient(180deg,
            #F3F4F2 0%,
            #ffffff 100%);

}


.home-page :deep(.vision-mission) {

    background: #F3F4F2;

}


.home-page :deep(.cta) {

    background: #F5820B;

    color: #ffffff;

}


/* HEADINGS */

.home-page :deep(h1),
.home-page :deep(h2),
.home-page :deep(h3) {

    color: #202323;

}


.home-page :deep(.data-security h1),
.home-page :deep(.data-security h2),
.home-page :deep(.data-security h3),
.home-page :deep(.statistics h1),
.home-page :deep(.statistics h2),
.home-page :deep(.statistics h3) {

    color: #ffffff;

}


/* ORANGE ACCENT */

.home-page :deep(.accent),
.home-page :deep(.highlight),
.home-page :deep(.orange-text) {

    color: #F5820B !important;

}


/* BUTTONS */

.home-page :deep(.primary),
.home-page :deep(.primary-btn),
.home-page :deep(.btn-primary) {

    background: #F5820B;

    color: #ffffff;

    border-color: #F5820B;

}


.home-page :deep(.primary:hover),
.home-page :deep(.primary-btn:hover),
.home-page :deep(.btn-primary:hover) {

    background: #123C35;

    border-color: #123C35;

}


/* CARDS */

.home-page :deep(.card) {

    background: #ffffff;

    border: 1px solid #e4e5e3;

    border-radius: 14px;

    transition: all .3s ease;

}


.home-page :deep(.card:hover) {

    transform: translateY(-6px);

    border-color: #F5820B;

    box-shadow:
        0 18px 40px rgba(0, 0, 0, .08);

}


/* ICONS */

.home-page :deep(.icon),
.home-page :deep(.service-icon) {

    color: #F5820B;

}


/* MOBILE */

@media(max-width:768px) {

    .home-page {

        overflow-x: hidden;

    }


    .home-page :deep(h1) {

        font-size: 36px;

        line-height: 1.15;

    }


    .home-page :deep(h2) {

        font-size: 28px;

    }


    .home-page :deep(.container) {

        width: 100%;

        padding-left: 20px;

        padding-right: 20px;

    }

}
</style>