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

        <!-- AI VIDEO -->
        <section class="ai-video-section">

            <div class="ai-video-container">

                <div class="ai-video-heading">

                    <span class="ai-video-kicker">
                        AI-POWERED TECHNOLOGY
                    </span>

                    <h2>
                        Intelligent Solutions.
                        <span>Smarter Future.</span>
                    </h2>

                    <p>
                        Discover how artificial intelligence is transforming
                        modern IT operations, security, analytics and business
                        intelligence.
                    </p>

                </div>

                <div class="ai-video-wrapper">

                    <video class="ai-video" autoplay muted loop playsinline preload="metadata">
                        <source src="../assets/AI_Video_2025.mp4" type="video/mp4" />

                        Your browser does not support the video tag.

                    </video>

                    <div class="ai-video-overlay"></div>

                </div>

            </div>

        </section>

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


/* =========================================
   AI VIDEO SECTION
========================================= */

.ai-video-section {

    position: relative;

    width: 100%;

    padding: 100px 20px;

    background:
        radial-gradient(circle at 50% 0%,
            rgba(245, 130, 11, 0.10),
            transparent 45%),
        linear-gradient(180deg,
            #ffffff 0%,
            #F3F4F2 100%);

    overflow: hidden;

}


.ai-video-container {

    width: 100%;

    max-width: 1200px;

    margin: 0 auto;

}


/* VIDEO HEADING */

.ai-video-heading {

    max-width: 760px;

    margin: 0 auto 45px;

    text-align: center;

}


.ai-video-kicker {

    display: inline-block;

    margin-bottom: 14px;

    font-size: 13px;

    font-weight: 700;

    letter-spacing: 2px;

    color: #F5820B;

}


.ai-video-heading h2 {

    margin: 0;

    font-size: clamp(32px, 5vw, 52px);

    line-height: 1.1;

    font-weight: 800;

    color: #202323;

}


.ai-video-heading h2 span {

    color: #F5820B;

}


.ai-video-heading p {

    max-width: 680px;

    margin: 20px auto 0;

    font-size: 17px;

    line-height: 1.7;

    color: #626765;

}


/* VIDEO BOX */

.ai-video-wrapper {

    position: relative;

    width: 100%;

    overflow: hidden;

    border-radius: 24px;

    background: #101412;

    border: 1px solid rgba(245, 130, 11, 0.30);

    box-shadow:
        0 30px 80px rgba(0, 0, 0, 0.16),
        0 0 60px rgba(245, 130, 11, 0.08);

}


/* VIDEO */

.ai-video {

    display: block;

    width: 100%;

    height: auto;

    min-height: 420px;

    max-height: 680px;

    object-fit: cover;

    background: #101412;

}


/* SUBTLE OVERLAY */

.ai-video-overlay {

    position: absolute;

    inset: 0;

    pointer-events: none;

    background:
        linear-gradient(180deg,
            rgba(18, 60, 53, 0.08),
            transparent 35%,
            rgba(0, 0, 0, 0.12));

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


    /* AI VIDEO MOBILE */

    .ai-video-section {

        padding: 70px 16px;

    }


    .ai-video-heading {

        margin-bottom: 30px;

    }


    .ai-video-heading p {

        font-size: 15px;

        line-height: 1.6;

    }


    .ai-video-wrapper {

        border-radius: 16px;

    }


    .ai-video {

        min-height: 220px;

        max-height: none;

        object-fit: cover;

    }

}
</style>
