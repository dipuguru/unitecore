<template>
    <main class="about-page">

        <!-- =====================================================
             HEADER
        ====================================================== -->

        <HeaderSection />


        <!-- =====================================================
             HERO
        ====================================================== -->

        <section class="about-hero">

            <div class="hero-image" :style="{
                backgroundImage: `url('${heroImage}')`
            }"></div>

            <div class="hero-overlay"></div>
            <div class="hero-grid"></div>
            <div class="hero-glow"></div>

            <div class="about-container">

                <div class="hero-content">

                    <div class="eyebrow">
                        <span></span>
                        ABOUT UNITECORE
                    </div>

                    <h1>
                        Welcome to
                        <strong>UniteCore.</strong>
                    </h1>

                    <p>
                        We use technology to empower customers by providing
                        them user friendly solutions that enhance their
                        productivity.
                    </p>

                    <div class="hero-line"></div>

                    <div class="hero-mini">

                        <div>
                            <strong>IT</strong>
                            <span>Infrastructure</span>
                        </div>

                        <div>
                            <strong>DATA</strong>
                            <span>Intelligence</span>
                        </div>

                        <div>
                            <strong>SECURITY</strong>
                            <span>Protection</span>
                        </div>

                        <div>
                            <strong>ANALYTICS</strong>
                            <span>Insights</span>
                        </div>

                    </div>

                </div>

            </div>

            <div class="hero-side-text">
                TECHNOLOGY • DATA • SECURITY • ANALYTICS
            </div>

            <div class="hero-bottom">
                <span>01</span>
                <div></div>
                <span>UNITE YOUR IT AT ITS CORE</span>
            </div>

        </section>


        <!-- =====================================================
             WHO WE ARE
        ====================================================== -->

        <section class="about-intro">

            <div class="about-container">

                <div class="intro-grid">

                    <div class="intro-label">
                        <span>01</span>
                        WHO WE ARE
                    </div>

                    <div class="intro-content">

                        <div class="section-image-wrap">

                            <img :src="about6Image" alt="UniteCore team and workplace" class="intro-image"
                                @error="handleImageError" />

                            <div class="image-tag">
                                UNITECORE GROUP
                            </div>

                        </div>

                        <h2>
                            Technology that
                            <em>empowers.</em>
                        </h2>

                        <p>
                            UniteCore is a technology company dedicated to
                            helping organizations unlock the full potential
                            of technology, data, security and analytics.
                        </p>

                        <p>
                            We use technology to empower customers by
                            providing them user friendly solutions that
                            enhance their productivity.
                        </p>

                        <p>
                            Our solutions bring together technology
                            capabilities, expertise and innovation to help
                            organizations simplify complexity and achieve
                            meaningful business outcomes.
                        </p>

                        <router-link to="/contact" class="text-link">
                            Start a conversation
                            <span>↗</span>
                        </router-link>

                    </div>

                </div>

            </div>

        </section>


        <!-- =====================================================
             TEAM GROWTH / 2015 - 2025
        ====================================================== -->

        <section class="growth-section">

            <div class="about-container">

                <div class="growth-heading">

                    <div class="eyebrow">
                        <span></span>
                        OUR GROWTH
                    </div>

                    <h2>
                        A decade of
                        <strong>growth &amp; togetherness.</strong>
                    </h2>

                    <p>
                        From our beginnings in 2015 to the organization we
                        are today, every milestone has been shaped by our
                        people, our customers and our commitment to
                        technology.
                    </p>

                </div>


                <div class="growth-intro">

                    <div class="growth-intro-number">
                        2015
                    </div>

                    <div class="growth-intro-content">

                        <span class="small-label">
                            GLIMPSE OF OUR JOURNEY
                        </span>

                        <h3>
                            From a growing team
                            <strong>to a stronger organization.</strong>
                        </h3>

                        <p>
                            Over the years, our team has continued to expand,
                            evolve and build meaningful relationships with
                            customers and partners. These moments capture
                            the people and culture behind our journey from
                            2015 to 2025.
                        </p>

                    </div>

                    <div class="growth-intro-year">
                        2025
                    </div>

                </div>


                <div class="growth-gallery">

                    <!-- 2015 -->
                    <article class="growth-photo growth-photo-large">

                        <div class="growth-photo-image">

                            <img :src="aboutUsPhoto1" alt="UniteCore team growth and journey from 2015"
                                @error="handleImageError" />

                            <div class="growth-photo-overlay"></div>

                            <div class="growth-photo-number">
                                01
                            </div>

                            <div class="growth-photo-year">
                                2015
                            </div>

                        </div>

                        <div class="growth-photo-content">

                            <span>
                                THE BEGINNING
                            </span>

                            <h3>
                                Where the journey started.
                            </h3>

                            <p>
                                A glimpse into the early years of our
                                organization and the people who helped build
                                the foundation of UniteCore.
                            </p>

                        </div>

                    </article>


                    <!-- 2025 -->
                    <article class="growth-photo growth-photo-large">

                        <div class="growth-photo-image">

                            <img :src="aboutUsPhoto2" alt="UniteCore team growth and journey in 2025"
                                @error="handleImageError" />

                            <div class="growth-photo-overlay"></div>

                            <div class="growth-photo-number">
                                02
                            </div>

                            <div class="growth-photo-year">
                                2025
                            </div>

                        </div>

                        <div class="growth-photo-content">

                            <span>
                                THE NEXT CHAPTER
                            </span>

                            <h3>
                                Growing together.
                            </h3>

                            <p>
                                A decade of collaboration, innovation and
                                shared success that continues to shape the
                                future of UniteCore.
                            </p>

                        </div>

                    </article>

                </div>


                <div class="growth-timeline">

                    <div class="growth-timeline-line"></div>

                    <div class="growth-timeline-item">

                        <span class="growth-timeline-year">
                            2015
                        </span>

                        <span class="growth-timeline-text">
                            THE BEGINNING
                        </span>

                    </div>

                    <div class="growth-timeline-item">

                        <span class="growth-timeline-year">
                            2018
                        </span>

                        <span class="growth-timeline-text">
                            EXPANDING HORIZONS
                        </span>

                    </div>

                    <div class="growth-timeline-item">

                        <span class="growth-timeline-year">
                            2020
                        </span>

                        <span class="growth-timeline-text">
                            BUILDING RESILIENCE
                        </span>

                    </div>

                    <div class="growth-timeline-item">

                        <span class="growth-timeline-year">
                            2023
                        </span>

                        <span class="growth-timeline-text">
                            SCALING TOGETHER
                        </span>

                    </div>

                    <div class="growth-timeline-item">

                        <span class="growth-timeline-year">
                            2025
                        </span>

                        <span class="growth-timeline-text">
                            NEXT GEN
                        </span>

                    </div>

                </div>

            </div>

        </section>


        <!-- =====================================================
             VISION / MISSION / VALUES
        ====================================================== -->

        <section class="vmv-section">

            <div class="about-container">

                <div class="section-heading">

                    <div class="eyebrow">
                        <span></span>
                        OUR FOUNDATION
                    </div>

                    <h2>
                        Built on purpose.
                        <strong>Driven by impact.</strong>
                    </h2>

                    <p>
                        Our vision, mission and values guide the way we
                        build solutions, collaborate with customers and
                        create long-term technology impact.
                    </p>

                </div>


                <!-- =================================================
                     VISION
                ================================================== -->

                <article class="vmv-card vision-card">

                    <div class="vmv-number">
                        01
                    </div>

                    <div class="vmv-image">

                        <img :src="about7Image" alt="UniteCore vision and team" @error="handleImageError" />

                        <div class="image-overlay"></div>

                    </div>

                    <div class="vmv-content">

                        <div class="vmv-icon">
                            <i class="bi bi-eye"></i>
                        </div>

                        <div>

                            <span class="small-label">
                                OUR VISION
                            </span>

                            <h3>
                                A better
                                <strong>digital future.</strong>
                            </h3>

                            <p>
                                To create a sustainable &amp; innovative
                                ecosystem that empowers businesses &amp; lives
                                across the universe.
                            </p>

                        </div>

                    </div>

                </article>


                <!-- =================================================
                     MISSION
                ================================================== -->

                <article class="vmv-card mission-card">

                    <div class="vmv-number">
                        02
                    </div>

                    <div class="vmv-image">

                        <img :src="life6Image" alt="UniteCore employee collaboration" @error="handleImageError" />

                        <div class="image-overlay"></div>

                    </div>

                    <div class="vmv-content">

                        <div class="vmv-icon">
                            <i class="bi bi-rocket-takeoff"></i>
                        </div>

                        <div>

                            <span class="small-label">
                                OUR MISSION
                            </span>

                            <h3>
                                Simplifying
                                <strong>complexity.</strong>
                            </h3>

                            <p>
                                Our mission is to deliver secure, scalable,
                                and innovative IT solutions by simplifying
                                complex technology challenges, enabling
                                seamless integration in data management,
                                and implementing robust cybersecurity
                                measures to ensure organizational growth,
                                resilience, and digital transformation
                                in the NexGen.
                            </p>

                        </div>

                    </div>

                </article>


                <!-- =================================================
                     VALUES
                ================================================== -->

                <article class="values-card">

                    <div class="values-left">

                        <div class="vmv-number">
                            03
                        </div>

                        <span class="small-label">
                            OUR CORE VALUES
                        </span>

                        <h3>
                            What drives
                            <strong>us.</strong>
                        </h3>

                        <p>
                            Our values shape the way we work, innovate,
                            collaborate and create value for our customers.
                        </p>

                    </div>

                    <div class="values-image">

                        <img :src="life4Image" alt="UniteCore team and culture" @error="handleImageError" />

                    </div>

                    <div class="values-list">

                        <div>
                            <span>01</span>
                            <strong>Growth</strong>
                        </div>

                        <div>
                            <span>02</span>
                            <strong>Team Work</strong>
                        </div>

                        <div>
                            <span>03</span>
                            <strong>Innovation</strong>
                        </div>

                        <div>
                            <span>04</span>
                            <strong>Contribution</strong>
                        </div>

                        <div>
                            <span>05</span>
                            <strong>Openness</strong>
                        </div>

                    </div>

                </article>

            </div>

        </section>


        <!-- =====================================================
             JOURNEY
        ====================================================== -->

        <section class="journey-section">

            <div class="journey-video-wrap">

                <video ref="journeyVideo" class="journey-video" autoplay muted loop playsinline preload="auto"
                    @canplay="playJourneyVideo" @error="handleVideoError">

                    <source :src="journeyVideo" type="video/mp4" />

                    Your browser does not support the video tag.

                </video>

                <div class="journey-overlay"></div>
                <div class="journey-grid"></div>

                <div class="journey-content">

                    <div class="eyebrow">
                        <span></span>
                        OUR JOURNEY
                    </div>

                    <h2>
                        From Reborn
                        <strong>to Next Gen.</strong>
                    </h2>

                    <p>
                        A Journey into Rebirth. Revolution. Beyond AI.
                    </p>

                    <div class="journey-line"></div>

                    <div class="journey-meta">
                        <span>REBIRTH</span>
                        <span>REVOLUTION</span>
                        <span>BEYOND AI</span>
                    </div>

                </div>

            </div>

        </section>


        <!-- =====================================================
             TEAM
        ====================================================== -->

        <section class="team-section">

            <div class="about-container">

                <div class="team-heading">

                    <div>

                        <div class="eyebrow">
                            <span></span>
                            OUR TEAM
                        </div>

                        <h2>
                            People behind
                            <strong>the technology.</strong>
                        </h2>

                    </div>

                    <p>
                        Our team brings together technology expertise,
                        innovation and collaboration to help businesses
                        move forward with confidence.
                    </p>

                </div>


                <!-- =================================================
                     TEAM SLIDER
                ================================================== -->

                <div class="team-slider-window" @mouseenter="pauseTeamSlider" @mouseleave="resumeTeamSlider"
                    @focusin="pauseTeamSlider" @focusout="resumeTeamSlider" @touchstart="handleTouchStart"
                    @touchend="handleTouchEnd">

                    <div class="team-slider-track" :style="teamTrackStyle">

                        <article v-for="member in teamMembers" :key="member.name" class="team-card">

                            <div class="team-image-wrap">

                                <img :src="member.image" :alt="member.name" class="team-image"
                                    @error="handleImageError" />

                                <div class="team-image-overlay"></div>

                                <div class="team-number">
                                    {{ member.number }}
                                </div>

                                <div class="team-arrow">
                                    ↗
                                </div>

                            </div>

                            <div class="team-info">

                                <div>

                                    <h3>
                                        {{ member.name }}
                                    </h3>

                                    <p>
                                        {{ member.role }}
                                    </p>

                                </div>

                                <span class="team-index">
                                    {{ member.number }}
                                </span>

                            </div>

                        </article>

                    </div>

                </div>


                <!-- =================================================
                     SLIDER CONTROLS
                ================================================== -->

                <div class="team-controls">

                    <button type="button" class="team-control" aria-label="Previous team members" @click="previousTeam">
                        ←
                    </button>

                    <div class="team-dots">

                        <button v-for="index in teamPageCount" :key="index" type="button" class="team-dot" :class="{
                            active: teamIndex === index - 1
                        }" :aria-label="`Go to team slide ${index}`" @click="goToTeam(index - 1)"></button>

                    </div>

                    <button type="button" class="team-control" aria-label="Next team members" @click="nextTeam">
                        →
                    </button>

                </div>

            </div>

        </section>


        <!-- =====================================================
             CLIENTS
        ====================================================== -->

        <section class="clients-section">

            <div class="about-container">

                <div class="clients-heading">

                    <div class="eyebrow">
                        <span></span>
                        OUR CLIENTS
                    </div>

                    <h2>
                        Trusted by
                        <strong>organizations.</strong>
                    </h2>

                    <p>
                        We work with organizations across industries,
                        helping them solve technology challenges and
                        build stronger digital foundations.
                    </p>

                </div>

                <div class="clients-visual">

                    <img :src="clientsImage" alt="UniteCore team activity" @error="handleImageError" />

                    <div class="clients-overlay"></div>

                    <div class="clients-label">
                        TECHNOLOGY • TRUST • GROWTH
                    </div>

                </div>

            </div>

        </section>


        <!-- =====================================================
             WHY UNITECORE
        ====================================================== -->

        <section class="why-section">

            <div class="about-container">

                <div class="section-top">

                    <div>

                        <div class="eyebrow">
                            <span></span>
                            WHY UNITECORE
                        </div>

                        <h2>
                            Everything connected
                            <strong>at the core.</strong>
                        </h2>

                    </div>

                    <p>
                        At UniteCore, we are passionate about empowering
                        organizations by delivering end-to-end technology
                        solutions from IT infrastructure and cybersecurity
                        to advanced data analytics.
                    </p>

                </div>


                <div class="why-grid">

                    <article class="why-card">

                        <div class="why-card-top">
                            <span>01</span>
                            <i class="bi bi-cpu"></i>
                        </div>

                        <h3>
                            Technology
                            <strong>Expertise.</strong>
                        </h3>

                        <p>
                            Deep technology expertise helps organizations
                            modernize infrastructure, improve productivity
                            and build reliable digital environments.
                        </p>

                        <div class="why-card-line"></div>

                    </article>


                    <article class="why-card featured">

                        <div class="why-card-top">
                            <span>02</span>
                            <i class="bi bi-shield-check"></i>
                        </div>

                        <h3>
                            Security
                            <strong>First.</strong>
                        </h3>

                        <p>
                            We put security at the core of technology,
                            protecting systems, data and digital operations
                            against evolving cyber threats.
                        </p>

                        <div class="why-card-line"></div>

                    </article>


                    <article class="why-card">

                        <div class="why-card-top">
                            <span>03</span>
                            <i class="bi bi-diagram-3"></i>
                        </div>

                        <h3>
                            Connected
                            <strong>Solutions.</strong>
                        </h3>

                        <p>
                            We connect infrastructure, data, security and
                            analytics to create a unified technology
                            ecosystem for sustainable growth.
                        </p>

                        <div class="why-card-line"></div>

                    </article>

                </div>

            </div>

        </section>


        <!-- =====================================================
             DIFFERENCE
        ====================================================== -->

        <section class="why-text">

            <div class="about-container">

                <div class="why-text-grid">

                    <div class="large-number">
                        02
                    </div>

                    <div>

                        <div class="eyebrow">
                            <span></span>
                            OUR DIFFERENCE
                        </div>

                        <h2>
                            Technology,
                            <em>united.</em>
                        </h2>

                        <p>
                            Formerly known as F5 Techno Solutions Pvt. Ltd.,
                            UniteCore is an ISO Certified company. UniteCore
                            helps organizations leverage the power of
                            technology for efficiency, security and
                            insight-driven growth, all under one roof,
                            uniting IT at its core.
                        </p>

                    </div>

                </div>

            </div>

        </section>


        <!-- =====================================================
             EXISTING COMPONENTS
        ====================================================== -->

        <StatisticsSection />

        <VisionMission />

        <CTASection />

        <FooterSection />

    </main>
</template>


<script>

import HeaderSection from "../components/HeaderSection.vue";
import StatisticsSection from "../components/StatisticsSection.vue";
import VisionMission from "../components/VisionMission.vue";
import CTASection from "../components/CTASection.vue";
import FooterSection from "../components/FooterSection.vue";

import heroImageFile from "../assets/2024-6.jpg";
import about6ImageFile from "../assets/about6.jpeg";
import about7ImageFile from "../assets/about7.jpeg";
import life6ImageFile from "../assets/life6.jpeg";
import life4ImageFile from "../assets/life4.png";

import clientsImageFile from "../assets/2022(8).jpeg";

/* =========================================================
   NEW ABOUT US GROWTH IMAGES
========================================================= */

import aboutUsPhoto1File from "../assets/about-us-photo1.jpeg";
import aboutUsPhoto2File from "../assets/about-us-photo2.jpg";


import shrikantImage from "../assets/shrikant.jpeg";
import dineshImage from "../assets/dinesh.jpeg";
import girishImage from "../assets/girish.jpeg";
import aartiImage from "../assets/aarati.jpeg";
import bhaveshImage from "../assets/bhavesh.jpeg";
import poojaImage from "../assets/pooja.jpeg";
import mamataImage from "../assets/mamata.jpeg";
import smitaImage from "../assets/smita.jpeg";
import imranImage from "../assets/imran.jpeg";
import snehaImage from "../assets/sneha.jpeg";


export default {

    name: "AboutPage",


    components: {
        HeaderSection,
        StatisticsSection,
        VisionMission,
        CTASection,
        FooterSection
    },


    data() {

        return {

            /* =================================================
               BASE URL
            ================================================== */

            baseUrl:
                typeof process !== "undefined" &&
                    process.env &&
                    process.env.BASE_URL
                    ? process.env.BASE_URL
                    : "/",


            /* =================================================
               ABOUT PAGE IMAGES / VIDEO
            ================================================== */

            heroImage: heroImageFile,

            about6Image: about6ImageFile,

            about7Image: about7ImageFile,

            life6Image: life6ImageFile,

            life4Image: life4ImageFile,

            clientsImage: clientsImageFile,


            /* =================================================
               NEW GROWTH IMAGES
            ================================================== */

            aboutUsPhoto1: aboutUsPhoto1File,

            aboutUsPhoto2: aboutUsPhoto2File,


            /* =================================================
               TEAM DATA
            ================================================== */

            teamMembers: [

                {
                    name: "Mr. Shrikant Kadam",
                    role: "Managing Director",
                    image: shrikantImage,
                    number: "01"
                },

                {
                    name: "Mr. Dinesh Bharne",
                    role: "Chief Executive Officer",
                    image: dineshImage,
                    number: "02"
                },

                {
                    name: "Mr. Girish Rane",
                    role: "Head Of Operational Support",
                    image: girishImage,
                    number: "03"
                },

                {
                    name: "Ms. Aarti Sharma",
                    role: "Inside Sales Head",
                    image: aartiImage,
                    number: "04"
                },

                {
                    name: "Mr. Bhavesh Rajdev",
                    role: "Head Of Marketing",
                    image: bhaveshImage,
                    number: "05"
                },

                {
                    name: "Mrs. Pooja Sanas",
                    role: "Head of Account & Finance",
                    image: poojaImage,
                    number: "06"
                },

                {
                    name: "Mrs. Mamata Kurale",
                    role: "Head of Purchase",
                    image: mamataImage,
                    number: "07"
                },

                {
                    name: "Mrs. Smita Mandhare",
                    role: "Human Resource Manager",
                    image: smitaImage,
                    number: "08"
                },

                {
                    name: "Imran Khan",
                    role: "Business Development Manager",
                    image: imranImage,
                    number: "09"
                },

                {
                    name: "Sneha Varma",
                    role: "General Manager - Business Development",
                    image: snehaImage,
                    number: "10"
                }

            ],


            /* =================================================
               TEAM SLIDER
            ================================================== */

            teamIndex: 0,

            teamInterval: null,

            teamTouchStartX: 0,

            teamTouchEndX: 0,

            teamWindowWidth:
                typeof window !== "undefined"
                    ? window.innerWidth
                    : 1200,

            teamContainerWidth: 1180

        };

    },


    computed: {

        /* =================================================
           VISIBLE TEAM MEMBERS
        ================================================== */

        teamVisibleCount() {

            if (this.teamWindowWidth <= 700) {
                return 1;
            }

            if (this.teamWindowWidth <= 1050) {
                return 3;
            }

            if (this.teamWindowWidth < 1200) {
                return 4;
            }

            return 5;

        },


        /* =================================================
           MAX SLIDER INDEX
        ================================================== */

        teamMaxIndex() {

            return Math.max(
                0,
                this.teamMembers.length -
                this.teamVisibleCount
            );

        },


        /* =================================================
           NUMBER OF SLIDER PAGES
        ================================================== */

        teamPageCount() {

            return this.teamMaxIndex + 1;

        },


        /* =================================================
           SLIDER TRACK STYLE
        ================================================== */

        teamTrackStyle() {

            const visible =
                this.teamVisibleCount;

            const gap =
                this.teamWindowWidth <= 700
                    ? 15
                    : this.teamWindowWidth <= 1050
                        ? 18
                        : 20;

            const width =
                this.teamContainerWidth ||
                1180;

            const cardWidth =
                (
                    width -
                    gap * (visible - 1)
                ) / visible;

            const move =
                this.teamIndex *
                (
                    cardWidth +
                    gap
                );

            return {

                "--team-gap":
                    `${gap}px`,

                "--team-card-width":
                    `${cardWidth}px`,

                transform:
                    `translate3d(-${move}px, 0, 0)`

            };

        }

    },


    /* =====================================================
       MOUNTED
    ====================================================== */

    mounted() {

        this.teamWindowWidth =
            window.innerWidth;


        this.$nextTick(() => {

            this.updateTeamSliderWidth();

            this.playJourneyVideo();

            this.startTeamSlider();

        });


        window.addEventListener(
            "resize",
            this.handleResize
        );

    },


    /* =====================================================
       BEFORE UNMOUNT
    ====================================================== */

    beforeUnmount() {

        window.removeEventListener(
            "resize",
            this.handleResize
        );

        this.stopTeamSlider();

    },


    methods: {

        /* =====================================================
           UPDATE TEAM SLIDER WIDTH
        ====================================================== */

        updateTeamSliderWidth() {

            const slider =
                this.$el.querySelector(
                    ".team-slider-window"
                );


            if (!slider) {
                return;
            }


            const width =
                slider.clientWidth;


            if (width > 0) {

                this.teamContainerWidth =
                    width;

            }

        },


        /* =====================================================
           RESIZE
        ====================================================== */

        handleResize() {

            this.teamWindowWidth =
                window.innerWidth;


            this.$nextTick(() => {

                this.updateTeamSliderWidth();

            });


            if (this.teamIndex > this.teamMaxIndex) {

                this.teamIndex =
                    this.teamMaxIndex;

            }

        },


        /* =====================================================
           NEXT TEAM
        ====================================================== */

        nextTeam() {

            if (this.teamIndex < this.teamMaxIndex) {

                this.teamIndex++;

            } else {

                this.teamIndex = 0;

            }

        },


        /* =====================================================
           PREVIOUS TEAM
        ====================================================== */

        previousTeam() {

            if (this.teamIndex > 0) {

                this.teamIndex--;

            } else {

                this.teamIndex =
                    this.teamMaxIndex;

            }


            this.restartTeamSlider();

        },


        /* =====================================================
           GO TO TEAM
        ====================================================== */

        goToTeam(index) {

            this.teamIndex =
                Math.min(
                    Math.max(index, 0),
                    this.teamMaxIndex
                );


            this.restartTeamSlider();

        },


        /* =====================================================
           START TEAM AUTOPLAY
        ====================================================== */

        startTeamSlider() {

            this.stopTeamSlider();


            this.teamInterval =
                setInterval(() => {

                    this.nextTeam();

                }, 3500);

        },


        /* =====================================================
           STOP TEAM AUTOPLAY
        ====================================================== */

        stopTeamSlider() {

            if (this.teamInterval) {

                clearInterval(
                    this.teamInterval
                );

                this.teamInterval =
                    null;

            }

        },


        /* =====================================================
           RESTART TEAM AUTOPLAY
        ====================================================== */

        restartTeamSlider() {

            this.stopTeamSlider();

            this.startTeamSlider();

        },


        /* =====================================================
           PAUSE TEAM SLIDER
        ====================================================== */

        pauseTeamSlider() {

            this.stopTeamSlider();

        },


        /* =====================================================
           RESUME TEAM SLIDER
        ====================================================== */

        resumeTeamSlider() {

            this.startTeamSlider();

        },


        /* =====================================================
           TOUCH START
        ====================================================== */

        handleTouchStart(event) {

            if (
                !event.changedTouches ||
                !event.changedTouches.length
            ) {

                return;

            }


            this.pauseTeamSlider();


            this.teamTouchStartX =
                event.changedTouches[0].clientX;


            this.teamTouchEndX =
                this.teamTouchStartX;

        },


        /* =====================================================
           TOUCH END
        ====================================================== */

        handleTouchEnd(event) {

            if (
                !event.changedTouches ||
                !event.changedTouches.length
            ) {

                this.restartTeamSlider();

                return;

            }


            this.teamTouchEndX =
                event.changedTouches[0].clientX;


            const distance =
                this.teamTouchStartX -
                this.teamTouchEndX;


            const minimumSwipe =
                50;


            if (
                Math.abs(distance) <
                minimumSwipe
            ) {

                this.restartTeamSlider();

                return;

            }


            if (distance > 0) {

                this.nextTeam();

            } else {

                this.previousTeam();

            }


            this.restartTeamSlider();

        },


        /* =====================================================
           PLAY JOURNEY VIDEO
        ====================================================== */

        playJourneyVideo() {

            const video =
                this.$refs.journeyVideo;


            if (!video) {
                return;
            }


            const promise =
                video.play();


            if (
                promise &&
                typeof promise.catch === "function"
            ) {

                promise.catch(() => { });

            }

        },


        /* =====================================================
           IMAGE ERROR
        ====================================================== */

        handleImageError(event) {

            console.error(
                "UniteCore image failed to load:",
                event.target.src
            );


            event.target.style.display =
                "none";


            const parent =
                event.target.parentElement;


            if (parent) {

                parent.classList.add(
                    "image-missing"
                );

            }

        },


        /* =====================================================
           VIDEO ERROR
        ====================================================== */

        handleVideoError(event) {

            console.error(
                "UniteCore video failed to load:",
                event.target.currentSrc ||
                "journey_video.mp4"
            );


            const videoEl =
                event.target.closest(
                    ".journey-video"
                );


            if (videoEl) {

                videoEl.style.display =
                    "none";

            }

        }

    }

};

</script>


<style scoped>
/* =========================================================
   GLOBAL
========================================================= */

.about-page {

    --orange: #f5820b;
    --orange-light: #ff9f2f;

    --green: #123c2b;
    --green-dark: #071c13;

    --cream: #f5f3ed;
    --white: #ffffff;

    --ink: #08090b;
    --muted: #74787e;

    --line: #e5e5e1;

    width: 100%;

    overflow: hidden;

    background: var(--cream);

    color: var(--ink);

    font-family:
        "Inter",
        Arial,
        sans-serif;
}


/* =========================================================
   CONTAINER
========================================================= */

.about-container {

    width:
        min(1180px,
            calc(100% - 48px));

    margin: 0 auto;
}


/* =========================================================
   COMMON EYEBROW
========================================================= */

.eyebrow {

    display: flex;

    align-items: center;

    gap: 10px;

    color: var(--orange);

    font-size: 10px;

    font-weight: 800;

    letter-spacing: 2px;

    text-transform: uppercase;
}

.eyebrow span {

    width: 32px;

    height: 2px;

    display: block;

    background: var(--orange);
}


/* =========================================================
   HERO
========================================================= */

.about-hero {

    position: relative;

    min-height: 720px;

    display: flex;

    align-items: center;

    overflow: hidden;

    background: var(--green-dark);
}

.hero-image {

    position: absolute;

    inset: 0;

    background-size: cover;

    background-position: center;

    background-repeat: no-repeat;

    opacity: .55;

    transform: scale(1.02);
}

.hero-overlay {

    position: absolute;

    inset: 0;

    background:
        linear-gradient(90deg,
            rgba(7, 28, 19, .98) 0%,
            rgba(7, 28, 19, .82) 40%,
            rgba(7, 28, 19, .25) 100%);
}

.hero-grid {

    position: absolute;

    inset: 0;

    opacity: .1;

    background-image:
        linear-gradient(rgba(255, 255, 255, .2) 1px,
            transparent 1px),
        linear-gradient(90deg,
            rgba(255, 255, 255, .2) 1px,
            transparent 1px);

    background-size: 70px 70px;
}

.hero-glow {

    position: absolute;

    width: 500px;

    height: 500px;

    right: -180px;

    top: 80px;

    border-radius: 50%;

    background:
        radial-gradient(circle,
            rgba(245, 130, 11, .32),
            transparent 70%);

    filter: blur(15px);
}

.hero-content {

    position: relative;

    z-index: 5;

    max-width: 850px;

    padding-top: 90px;
}

.hero-content h1 {

    margin: 20px 0;

    color: var(--white);

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size:
        clamp(54px, 8vw, 105px);

    line-height: .92;

    letter-spacing: -5px;
}

.hero-content h1 strong {

    display: block;

    color: var(--orange);
}

.hero-content p {

    max-width: 600px;

    margin: 30px 0;

    color: rgba(255, 255, 255, .72);

    font-size: 16px;

    line-height: 1.8;
}

.hero-line {

    width: 80px;

    height: 3px;

    margin: 30px 0;

    background: var(--orange);
}

.hero-mini {

    display: flex;

    flex-wrap: wrap;

    gap: 35px;
}

.hero-mini div {

    display: flex;

    flex-direction: column;

    gap: 5px;
}

.hero-mini strong {

    color: var(--white);

    font-size: 13px;

    letter-spacing: 1px;
}

.hero-mini span {

    color: rgba(255, 255, 255, .45);

    font-size: 10px;
}

.hero-side-text {

    position: absolute;

    right: 28px;

    top: 50%;

    z-index: 5;

    transform:
        translateY(-50%) rotate(90deg);

    color: rgba(255, 255, 255, .28);

    font-size: 9px;

    letter-spacing: 4px;
}

.hero-bottom {

    position: absolute;

    left: 50%;

    bottom: 30px;

    z-index: 5;

    transform: translateX(-50%);

    width:
        min(1180px,
            calc(100% - 48px));

    display: flex;

    align-items: center;

    gap: 15px;

    color: rgba(255, 255, 255, .45);

    font-size: 9px;

    letter-spacing: 2px;
}

.hero-bottom div {

    width: 60px;

    height: 1px;

    background:
        rgba(255, 255, 255, .25);
}


/* =========================================================
   ABOUT INTRO
========================================================= */

.about-intro {

    padding: 110px 0;

    background: var(--white);
}

.intro-grid {

    display: grid;

    grid-template-columns: 160px 1fr;

    gap: 60px;
}

.intro-label {

    color: var(--orange);

    font-size: 10px;

    font-weight: 800;

    letter-spacing: 2px;
}

.intro-label span {

    display: block;

    margin-bottom: 8px;

    font-size: 40px;

    font-family:
        "Space Grotesk",
        sans-serif;

    color: var(--green);
}

.section-image-wrap {

    position: relative;

    height: 430px;

    overflow: hidden;

    margin-bottom: 55px;
}

.intro-image {

    width: 100%;

    height: 100%;

    object-fit: cover;

    object-position: center;

    display: block;

    transition: transform .6s ease;
}

.section-image-wrap:hover .intro-image {

    transform: scale(1.04);
}

.image-tag {

    position: absolute;

    left: 20px;

    bottom: 20px;

    padding: 10px 14px;

    background: var(--orange);

    color: var(--white);

    font-size: 9px;

    font-weight: 800;

    letter-spacing: 1.5px;
}

.intro-content h2 {

    margin: 0 0 25px;

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size:
        clamp(42px, 6vw, 75px);

    line-height: .95;

    letter-spacing: -3px;

    color: var(--green);
}

.intro-content h2 em {

    color: var(--orange);

    font-style: normal;
}

.intro-content p {

    max-width: 800px;

    color: var(--muted);

    font-size: 14px;

    line-height: 1.9;
}

.text-link {

    display: inline-flex;

    align-items: center;

    gap: 12px;

    margin-top: 20px;

    color: var(--green);

    font-size: 12px;

    font-weight: 800;

    text-decoration: none;
}

.text-link span {

    color: var(--orange);

    font-size: 20px;
}


/* =========================================================
   TEAM GROWTH / 2015 - 2025
========================================================= */

.growth-section {

    position: relative;

    padding: 110px 0;

    background: var(--cream);

    overflow: hidden;
}

.growth-section::before {

    content: "";

    position: absolute;

    top: 0;

    right: -180px;

    width: 500px;

    height: 500px;

    border-radius: 50%;

    background:
        radial-gradient(circle,
            rgba(245, 130, 11, .10),
            transparent 70%);

    pointer-events: none;
}

.growth-heading {

    position: relative;

    z-index: 2;

    max-width: 820px;

    margin-bottom: 55px;
}

.growth-heading h2 {

    margin: 20px 0;

    color: var(--green);

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size:
        clamp(42px, 6vw, 76px);

    line-height: .94;

    letter-spacing: -4px;
}

.growth-heading h2 strong {

    display: block;

    color: var(--orange);
}

.growth-heading p {

    max-width: 650px;

    margin: 0;

    color: var(--muted);

    font-size: 14px;

    line-height: 1.9;
}


/* =========================================================
   GROWTH INTRO
========================================================= */

.growth-intro {

    position: relative;

    z-index: 2;

    display: grid;

    grid-template-columns: 130px 1fr 130px;

    align-items: center;

    gap: 35px;

    margin-bottom: 35px;

    padding: 35px 0;

    border-top: 1px solid var(--line);

    border-bottom: 1px solid var(--line);
}

.growth-intro-number,
.growth-intro-year {

    color: rgba(18, 60, 43, .12);

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 64px;

    font-weight: 700;

    line-height: 1;

    letter-spacing: -4px;
}

.growth-intro-year {

    text-align: right;

    color: rgba(245, 130, 11, .35);
}

.growth-intro-content {

    max-width: 700px;

    margin: 0 auto;

    text-align: center;
}

.growth-intro-content .small-label {

    margin-bottom: 10px;
}

.growth-intro-content h3 {

    margin: 0 0 12px;

    color: var(--green);

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 27px;

    line-height: 1.1;
}

.growth-intro-content h3 strong {

    color: var(--orange);
}

.growth-intro-content p {

    max-width: 650px;

    margin: 0 auto;

    color: var(--muted);

    font-size: 12px;

    line-height: 1.8;
}


/* =========================================================
   GROWTH GALLERY
========================================================= */

.growth-gallery {

    position: relative;

    z-index: 2;

    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 22px;
}

.growth-photo {

    overflow: hidden;

    background: var(--white);

    border: 1px solid var(--line);

    transition:
        transform .4s ease,
        box-shadow .4s ease;
}

.growth-photo:hover {

    transform: translateY(-7px);

    box-shadow:
        0 22px 50px rgba(18, 60, 43, .14);
}

.growth-photo-image {

    position: relative;

    height: 430px;

    overflow: hidden;

    background:
        linear-gradient(135deg,
            #e9e8e2,
            #d5d3cb);
}

.growth-photo-image img {

    width: 100%;

    height: 100%;

    display: block;

    object-fit: cover;

    object-position: center;

    transition:
        transform .7s cubic-bezier(.22, .61, .36, 1);
}

.growth-photo:hover .growth-photo-image img {

    transform: scale(1.05);
}

.growth-photo-overlay {

    position: absolute;

    inset: 0;

    background:
        linear-gradient(180deg,
            rgba(7, 28, 19, .08) 20%,
            rgba(7, 28, 19, .68) 100%);

    pointer-events: none;
}

.growth-photo-number {

    position: absolute;

    top: 18px;

    left: 18px;

    width: 42px;

    height: 42px;

    display: flex;

    align-items: center;

    justify-content: center;

    background: var(--orange);

    color: var(--white);

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 11px;

    font-weight: 800;
}

.growth-photo-year {

    position: absolute;

    right: 25px;

    bottom: 22px;

    color: var(--white);

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 48px;

    font-weight: 700;

    line-height: 1;

    letter-spacing: -2px;
}

.growth-photo-content {

    padding: 28px 30px 32px;
}

.growth-photo-content>span {

    display: block;

    margin-bottom: 10px;

    color: var(--orange);

    font-size: 9px;

    font-weight: 800;

    letter-spacing: 2px;
}

.growth-photo-content h3 {

    margin: 0 0 10px;

    color: var(--green);

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 25px;
}

.growth-photo-content p {

    max-width: 520px;

    margin: 0;

    color: var(--muted);

    font-size: 12px;

    line-height: 1.8;
}


/* =========================================================
   GROWTH TIMELINE
========================================================= */

.growth-timeline {

    position: relative;

    z-index: 2;

    display: grid;

    grid-template-columns:
        repeat(5, 1fr);

    gap: 20px;

    margin-top: 55px;

    padding-top: 35px;
}

.growth-timeline-line {

    position: absolute;

    top: 0;

    left: 0;

    right: 0;

    height: 1px;

    background: var(--line);
}

.growth-timeline-item {

    position: relative;

    display: flex;

    flex-direction: column;

    gap: 8px;
}

.growth-timeline-item::before {

    content: "";

    position: absolute;

    top: -40px;

    left: 0;

    width: 9px;

    height: 9px;

    border-radius: 50%;

    background: var(--orange);

    box-shadow:
        0 0 0 5px var(--cream);
}

.growth-timeline-year {

    color: var(--green);

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 22px;

    font-weight: 700;
}

.growth-timeline-text {

    color: var(--muted);

    font-size: 8px;

    font-weight: 800;

    letter-spacing: 1.5px;
}


/* =========================================================
   VMV
========================================================= */

.vmv-section {

    padding: 100px 0;

    background: var(--cream);
}

.section-heading {

    max-width: 800px;

    margin-bottom: 60px;
}

.section-heading h2 {

    margin: 20px 0;

    color: var(--green);

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size:
        clamp(40px, 6vw, 72px);

    line-height: .95;

    letter-spacing: -3px;
}

.section-heading h2 strong {

    color: var(--orange);
}

.section-heading p {

    max-width: 650px;

    color: var(--muted);

    font-size: 14px;

    line-height: 1.8;
}

.vmv-card {

    position: relative;

    display: grid;

    grid-template-columns: 1fr 1fr;

    margin-bottom: 20px;

    overflow: hidden;

    background: var(--white);

    border: 1px solid var(--line);
}

.vmv-number {

    position: absolute;

    top: 18px;

    left: 20px;

    z-index: 5;

    color: var(--orange);

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 15px;

    font-weight: 800;
}

.vmv-image {

    position: relative;

    min-height: 370px;

    overflow: hidden;
}

.vmv-image img {

    width: 100%;

    height: 100%;

    object-fit: cover;

    object-position: center;

    display: block;

    transition: transform .6s ease;
}

.vmv-card:hover .vmv-image img {

    transform: scale(1.04);
}

.image-overlay {

    position: absolute;

    inset: 0;

    background:
        linear-gradient(180deg,
            rgba(7, 28, 19, .1),
            rgba(7, 28, 19, .55));
}

.vmv-content {

    display: flex;

    align-items: center;

    gap: 30px;

    padding: 60px;
}

.vmv-icon {

    width: 58px;

    height: 58px;

    flex: 0 0 58px;

    display: flex;

    align-items: center;

    justify-content: center;

    background: var(--orange);

    color: var(--white);

    font-size: 22px;
}

.small-label {

    display: block;

    margin-bottom: 12px;

    color: var(--orange);

    font-size: 9px;

    font-weight: 800;

    letter-spacing: 2px;
}

.vmv-content h3 {

    margin: 0 0 15px;

    color: var(--green);

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 34px;
}

.vmv-content h3 strong {

    color: var(--orange);
}

.vmv-content p {

    margin: 0;

    color: var(--muted);

    font-size: 13px;

    line-height: 1.8;
}

.values-card {

    display: grid;

    grid-template-columns: 1fr 1fr 1fr;

    overflow: hidden;

    background: var(--green-dark);
}

.values-left {

    position: relative;

    padding: 60px;
}

.values-left .vmv-number {

    position: static;

    margin-bottom: 40px;
}

.values-left h3 {

    margin: 0 0 20px;

    color: var(--white);

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 38px;
}

.values-left h3 strong {

    color: var(--orange);
}

.values-left p {

    color: rgba(255, 255, 255, .55);

    font-size: 13px;

    line-height: 1.8;
}

.values-image {

    min-height: 350px;

    overflow: hidden;
}

.values-image img {

    width: 100%;

    height: 100%;

    object-fit: cover;

    display: block;

    transition: transform .6s ease;
}

.values-card:hover .values-image img {

    transform: scale(1.04);
}

.values-list {

    display: flex;

    flex-direction: column;

    justify-content: center;

    padding: 40px;
}

.values-list div {

    display: flex;

    justify-content: space-between;

    padding: 18px 0;

    border-bottom:
        1px solid rgba(255, 255, 255, .12);
}

.values-list span {

    color: var(--orange);

    font-size: 10px;
}

.values-list strong {

    color: rgba(255, 255, 255, .9);

    font-size: 12px;
}


/* =========================================================
   JOURNEY
========================================================= */

.journey-section {

    background: var(--green-dark);
}

.journey-video-wrap {

    position: relative;

    min-height: 430px;

    overflow: hidden;
}

.journey-video {

    position: absolute;

    inset: 0;

    width: 100%;

    height: 100%;

    object-fit: cover;
}

.journey-overlay {

    position: absolute;

    inset: 0;

    background:
        linear-gradient(90deg,
            rgba(7, 28, 19, .94),
            rgba(7, 28, 19, .45));
}

.journey-grid {

    position: absolute;

    inset: 0;

    opacity: .1;

    background-image:
        linear-gradient(rgba(255, 255, 255, .18) 1px,
            transparent 1px),
        linear-gradient(90deg,
            rgba(255, 255, 255, .18) 1px,
            transparent 1px);

    background-size: 60px 60px;
}

.journey-content {

    position: relative;

    z-index: 3;

    width:
        min(1180px,
            calc(100% - 48px));

    margin: 0 auto;

    padding: 90px 0;
}

.journey-content h2 {

    margin: 15px 0;

    color: var(--white);

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size:
        clamp(40px, 6vw, 72px);

    line-height: .95;

    letter-spacing: -3px;
}

.journey-content h2 strong {

    color: var(--orange-light);
}

.journey-content p {

    color: rgba(255, 255, 255, .68);

    font-size: 14px;
}

.journey-line {

    width: 75px;

    height: 3px;

    margin: 28px 0;

    background: var(--orange);
}

.journey-meta {

    display: flex;

    flex-wrap: wrap;

    gap: 25px;
}

.journey-meta span {

    color: rgba(255, 255, 255, .5);

    font-size: 9px;

    letter-spacing: 2px;
}


/* =========================================================
   TEAM
========================================================= */

.team-section {

    padding: 90px 0;

    background: var(--cream);
}

.team-heading {

    display: grid;

    grid-template-columns: 1fr 380px;

    gap: 50px;

    align-items: end;

    margin-bottom: 40px;
}

.team-heading h2 {

    margin: 15px 0 0;

    color: var(--green);

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size:
        clamp(40px, 6vw, 70px);

    line-height: .95;

    letter-spacing: -3px;
}

.team-heading h2 strong {

    display: block;

    color: var(--orange);
}

.team-heading p {

    max-width: 380px;

    margin: 0;

    color: var(--muted);

    font-size: 13px;

    line-height: 1.8;
}


/* =========================================================
   TEAM SLIDER
========================================================= */

.team-slider-window {

    position: relative;

    width: 100%;

    max-width: 100%;

    overflow: hidden;

    touch-action: pan-y;

    user-select: none;

    box-sizing: border-box;
}

.team-slider-track {

    display: flex;

    gap: var(--team-gap);

    width: max-content;

    margin: 0;

    padding: 0;

    will-change: transform;

    transition:
        transform .65s cubic-bezier(.22, .61, .36, 1);
}

.team-card {

    position: relative;

    flex:
        0 0 var(--team-card-width);

    width:
        var(--team-card-width);

    min-width:
        var(--team-card-width);

    max-width:
        var(--team-card-width);

    box-sizing: border-box;

    overflow: hidden;

    background: var(--white);

    border: 1px solid var(--line);

    transition:
        box-shadow .35s ease,
        transform .35s ease;
}

.team-card:hover {

    transform: translateY(-6px);

    box-shadow:
        0 20px 45px rgba(20, 45, 32, .14);
}


/* =========================================================
   TEAM IMAGE
========================================================= */

.team-image-wrap {

    position: relative;

    display: block;

    width: 100%;

    height: 300px;

    min-height: 300px;

    overflow: hidden;

    box-sizing: border-box;

    background:
        linear-gradient(135deg,
            #e9e8e2,
            #d5d3cb);
}

.team-image {

    display: block;

    width: 100%;

    height: 100%;

    min-width: 100%;

    min-height: 100%;

    object-fit: cover;

    object-position: center top;

    opacity: 1;

    visibility: visible;

    transition:
        transform .6s cubic-bezier(.22, .61, .36, 1);
}

.team-card:hover .team-image {

    transform: scale(1.06);
}

.team-image-overlay {

    position: absolute;

    inset: 0;

    background:
        linear-gradient(180deg,
            transparent 55%,
            rgba(7, 28, 19, .45));

    pointer-events: none;
}

.team-number {

    position: absolute;

    left: 16px;

    top: 16px;

    width: 38px;

    height: 38px;

    display: flex;

    align-items: center;

    justify-content: center;

    background: var(--orange);

    color: var(--white);

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 11px;

    font-weight: 800;
}

.team-arrow {

    position: absolute;

    right: 15px;

    bottom: 15px;

    width: 38px;

    height: 38px;

    display: flex;

    align-items: center;

    justify-content: center;

    background:
        rgba(255, 255, 255, .94);

    color: var(--green);

    font-size: 18px;

    transition:
        transform .3s ease,
        background .3s ease;
}

.team-card:hover .team-arrow {

    transform:
        translate(3px, -3px);

    background: var(--orange);

    color: var(--white);
}


/* =========================================================
   TEAM INFO
========================================================= */

.team-info {

    min-height: 95px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 15px;

    padding: 20px;

    box-sizing: border-box;
}

.team-info h3 {

    margin: 0 0 5px;

    color: var(--green);

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 19px;
}

.team-info p {

    margin: 0;

    color: var(--muted);

    font-size: 10px;

    line-height: 1.5;
}

.team-index {

    flex: 0 0 auto;

    color: var(--orange);

    font-size: 10px;

    font-weight: 800;
}


/* =========================================================
   IMAGE FALLBACK
========================================================= */

.team-image-wrap.image-missing {

    display: flex;

    align-items: center;

    justify-content: center;
}

.team-image-wrap.image-missing::after {

    content: "UNITECORE";

    color:
        rgba(18, 60, 43, .35);

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 16px;

    font-weight: 800;

    letter-spacing: 3px;
}


/* =========================================================
   TEAM CONTROLS
========================================================= */

.team-controls {

    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-top: 28px;
}

.team-control {

    width: 48px;

    height: 48px;

    border: 1px solid var(--green);

    background: transparent;

    color: var(--green);

    cursor: pointer;

    font-size: 20px;

    transition:
        background .25s ease,
        color .25s ease,
        transform .25s ease;
}

.team-control:hover {

    background: var(--green);

    color: var(--white);

    transform: translateY(-2px);
}

.team-dots {

    width: 100%;

    max-width: 100%;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 8px;

    flex-wrap: wrap;

    padding: 10px 15px;

    box-sizing: border-box;
}

.team-dot {

    flex: 0 0 20px;

    width: 20px;

    height: 20px;

    min-width: 20px;

    max-width: 20px;

    padding: 0;

    margin: 0;

    border: 0;

    border-radius: 999px;

    background:
        rgba(18, 60, 43, 0.2);

    cursor: pointer;

    transition:
        width 0.3s ease,
        min-width 0.3s ease,
        max-width 0.3s ease,
        background 0.3s ease,
        transform 0.3s ease;

    box-sizing: border-box;
}

.team-dot:hover {

    transform: scale(1.1);
}

.team-dot.active {

    flex-basis: 48px;

    width: 48px;

    min-width: 48px;

    max-width: 48px;

    background: var(--orange);
}


/* =========================================
   TABLET
========================================= */

@media (max-width: 1050px) {

    .team-heading {

        grid-template-columns:
            1fr 300px;

        gap: 30px;
    }

    .vmv-content {

        padding: 40px;
    }

    .values-card {

        grid-template-columns:
            1fr 1fr;
    }

    .values-list {

        grid-column: 1 / -1;

        display: grid;

        grid-template-columns:
            repeat(5, 1fr);

        gap: 15px;

        padding: 25px;
    }

    .values-list div {

        flex-direction: column;

        gap: 7px;

        border-bottom: 0;
    }

    .why-grid {

        grid-template-columns:
            1fr 1fr;
    }

    .why-card:last-child {

        grid-column: 1 / -1;
    }


    /* GROWTH */

    .growth-intro {

        grid-template-columns: 90px 1fr 90px;

        gap: 20px;
    }

    .growth-intro-number,
    .growth-intro-year {

        font-size: 48px;
    }

    .growth-photo-image {

        height: 360px;
    }

}


/* =========================================
   TABLET TEAM DOTS
========================================= */

@media (max-width: 768px) {

    .team-dots {

        gap: 7px;

        padding: 10px 12px;
    }

    .team-dot {

        flex-basis: 16px;

        width: 16px;

        min-width: 16px;

        max-width: 16px;

        height: 16px;
    }

    .team-dot.active {

        flex-basis: 38px;

        width: 38px;

        min-width: 38px;

        max-width: 38px;
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 700px) {

    .about-container {

        width:
            calc(100% - 30px);
    }


    /* HERO */

    .about-hero {

        min-height: 650px;
    }

    .hero-content {

        padding-top: 60px;
    }

    .hero-content h1 {

        font-size: 55px;

        letter-spacing: -3px;
    }

    .hero-content p {

        font-size: 13px;
    }

    .hero-mini {

        gap: 20px;
    }

    .hero-side-text {

        display: none;
    }

    .hero-bottom {

        width:
            calc(100% - 30px);
    }


    /* INTRO */

    .about-intro {

        padding: 70px 0;
    }

    .intro-grid {

        grid-template-columns: 1fr;

        gap: 25px;
    }

    .intro-label {

        display: flex;

        align-items: center;

        gap: 10px;
    }

    .intro-label span {

        margin: 0;

        font-size: 25px;
    }

    .section-image-wrap {

        height: 280px;

        margin-bottom: 35px;
    }


    /* =====================================================
       GROWTH
    ====================================================== */

    .growth-section {

        padding: 75px 0;
    }

    .growth-heading {

        margin-bottom: 40px;
    }

    .growth-heading h2 {

        font-size: 48px;

        letter-spacing: -3px;
    }

    .growth-intro {

        grid-template-columns: 1fr;

        gap: 15px;

        padding: 25px 0;

        text-align: left;
    }

    .growth-intro-number,
    .growth-intro-year {

        font-size: 38px;

        text-align: left;
    }

    .growth-intro-number {

        color: rgba(18, 60, 43, .16);
    }

    .growth-intro-year {

        position: absolute;

        right: 0;

        top: 25px;

        color: rgba(245, 130, 11, .28);
    }

    .growth-intro-content {

        max-width: 100%;

        margin: 0;

        text-align: left;
    }

    .growth-intro-content h3 {

        font-size: 24px;
    }

    .growth-gallery {

        grid-template-columns: 1fr;

        gap: 18px;
    }

    .growth-photo-image {

        height: 310px;
    }

    .growth-photo-year {

        font-size: 42px;
    }

    .growth-photo-content {

        padding: 24px;
    }

    .growth-photo-content h3 {

        font-size: 23px;
    }

    .growth-timeline {

        grid-template-columns: 1fr;

        gap: 28px;

        margin-top: 45px;

        padding-top: 25px;

        padding-left: 20px;
    }

    .growth-timeline-line {

        top: 0;

        bottom: 0;

        left: 4px;

        width: 1px;

        height: auto;
    }

    .growth-timeline-item {

        padding-left: 15px;
    }

    .growth-timeline-item::before {

        top: 5px;

        left: -20px;

        width: 8px;

        height: 8px;

        box-shadow:
            0 0 0 5px var(--cream);
    }


    /* VMV */

    .vmv-section {

        padding: 70px 0;
    }

    .vmv-card {

        grid-template-columns: 1fr;
    }

    .vmv-image {

        min-height: 260px;

        order: 1;
    }

    .vmv-content {

        order: 2;

        padding:
            35px 25px;
    }

    .values-card {

        grid-template-columns: 1fr;
    }

    .values-left {

        padding:
            40px 25px;
    }

    .values-image {

        min-height: 250px;
    }

    .values-list {

        grid-template-columns: 1fr;

        padding: 25px;
    }

    .values-list div {

        flex-direction: row;

        padding: 12px 0;

        border-bottom:
            1px solid rgba(255, 255, 255, .12);
    }


    /* JOURNEY */

    .journey-content {

        padding: 70px 0;
    }


    /* TEAM */

    .team-section {

        padding: 70px 0;
    }

    .team-heading {

        grid-template-columns: 1fr;

        gap: 20px;

        margin-bottom: 30px;
    }

    .team-heading p {

        max-width: 100%;
    }

    .team-slider-window {

        width: 100%;

        max-width: 100%;

        overflow: hidden;

        margin: 0;

        padding: 0;
    }

    .team-slider-track {

        gap: 15px;

        width: max-content;
    }

    .team-card {

        flex:
            0 0 var(--team-card-width);

        width:
            var(--team-card-width);

        min-width:
            var(--team-card-width);

        max-width:
            var(--team-card-width);
    }

    .team-image-wrap {

        width: 100%;

        height: 330px;

        min-height: 330px;

        max-height: 330px;
    }

    .team-image {

        width: 100% !important;

        height: 100% !important;

        min-width: 100%;

        min-height: 100%;

        object-fit: cover;

        object-position: center top;
    }

    .team-controls {

        margin-top: 22px;
    }


    /* CLIENTS */

    .clients-section {

        padding: 70px 0;
    }

    .clients-visual {

        height: 350px;
    }


    /* WHY */

    .why-section {

        padding: 70px 0;
    }

    .section-top {

        grid-template-columns: 1fr;

        gap: 20px;
    }

    .why-grid {

        grid-template-columns: 1fr;
    }

    .why-card:last-child {

        grid-column: auto;
    }

    .why-card p {

        min-height: auto;
    }


    /* DIFFERENCE */

    .why-text {

        padding: 70px 0;
    }

    .why-text-grid {

        grid-template-columns: 1fr;

        gap: 20px;
    }

    .large-number {

        font-size: 70px;
    }

}


/* =========================================
   MOBILE TEAM DOTS
========================================= */

@media (max-width: 480px) {

    .team-dots {

        gap: 6px;

        padding: 8px 10px;
    }

    .team-dot {

        flex-basis: 13px;

        width: 13px;

        min-width: 13px;

        max-width: 13px;

        height: 13px;
    }

    .team-dot.active {

        flex-basis: 30px;

        width: 30px;

        min-width: 30px;

        max-width: 30px;
    }

}


/* =========================================
   SMALL MOBILE
========================================= */

@media (max-width: 420px) {

    .hero-content h1 {

        font-size: 47px;
    }

    .hero-mini {

        gap: 15px;
    }

    .hero-mini strong {

        font-size: 11px;
    }

    .hero-mini span {

        font-size: 9px;
    }

    .team-image-wrap {

        height: 300px;

        min-height: 300px;

        max-height: 300px;
    }

    .team-info {

        min-height: 90px;

        padding: 17px;
    }

}


/* =========================================
   VERY SMALL MOBILE
========================================= */

@media (max-width: 360px) {

    .team-dots {

        gap: 5px;

        padding: 8px;
    }

    .team-dot {

        flex-basis: 11px;

        width: 11px;

        min-width: 11px;

        max-width: 11px;

        height: 11px;
    }

    .team-dot.active {

        flex-basis: 26px;

        width: 26px;

        min-width: 26px;

        max-width: 26px;
    }

}
</style>
