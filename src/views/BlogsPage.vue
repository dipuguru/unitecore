<template>

    <main class="blogs-page">

        <HeaderSection />

        <!-- =====================================================
             HERO
        ====================================================== -->

        <section class="blogs-hero">

            <div class="hero-image"></div>

            <div class="hero-overlay"></div>

            <div class="hero-grid"></div>

            <div class="hero-orb hero-orb-one"></div>
            <div class="hero-orb hero-orb-two"></div>

            <div class="hero-data-line hero-data-line-one"></div>
            <div class="hero-data-line hero-data-line-two"></div>
            <div class="hero-data-line hero-data-line-three"></div>

            <div class="hero-pulse hero-pulse-one"></div>
            <div class="hero-pulse hero-pulse-two"></div>

            <div class="blogs-container hero-container">

                <div class="hero-content">

                    <div class="eyebrow light-eyebrow">
                        <span></span>
                        UNITECORE INSIGHTS
                    </div>

                    <h1>
                        Ideas that
                        <strong>move technology forward.</strong>
                    </h1>

                    <p>
                        Explore technology insights, perspectives and
                        information around data, security, infrastructure,
                        analytics and digital transformation.
                    </p>

                    <div class="hero-actions">

                        <a href="#articles" class="hero-btn">

                            <span>
                                Explore Insights
                            </span>

                            <strong>
                                ↗
                            </strong>

                        </a>

                        <div class="hero-stat">

                            <strong>
                                06
                            </strong>

                            <div>

                                <span>
                                    Technology
                                </span>

                                <small>
                                    Topics
                                </small>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div class="hero-scroll">

                <span class="scroll-line"></span>

                <span>
                    SCROLL TO EXPLORE
                </span>

            </div>

        </section>


        <!-- =====================================================
             FEATURED
        ====================================================== -->

        <section class="featured-section">

            <div class="blogs-container">

                <div class="section-heading">

                    <div class="eyebrow dark-eyebrow">

                        <span></span>

                        FEATURED

                    </div>

                    <h2>
                        Technology
                        <strong>in focus.</strong>
                    </h2>

                </div>


                <article v-if="featuredPost" class="featured-card">

                    <div class="featured-visual">

                        <img :src="featuredPost.image" :alt="featuredPost.title" />

                        <div class="featured-image-overlay"></div>

                        <div class="visual-grid"></div>

                        <span class="visual-number">
                            01
                        </span>

                        <div class="visual-label">

                            <span></span>

                            FEATURED INSIGHT

                        </div>

                        <div class="visual-corner top-left"></div>
                        <div class="visual-corner top-right"></div>
                        <div class="visual-corner bottom-left"></div>
                        <div class="visual-corner bottom-right"></div>

                    </div>


                    <div class="featured-content">

                        <span class="post-category">
                            {{ featuredPost.category }}
                        </span>

                        <h3>
                            {{ featuredPost.title }}
                        </h3>

                        <p>
                            {{ featuredPost.description }}
                        </p>

                        <div class="featured-meta">

                            <span>
                                {{ featuredPost.topic }}
                            </span>

                            <span>
                                INSIGHT 01
                            </span>

                        </div>

                        <a href="#articles" class="read-link">

                            Explore Insights

                            <span>
                                ↗
                            </span>

                        </a>

                    </div>

                </article>

            </div>

        </section>


        <!-- =====================================================
             ARTICLES
        ====================================================== -->

        <section id="articles" class="articles-section">

            <div class="blogs-container">

                <div class="section-heading articles-heading">

                    <div class="eyebrow dark-eyebrow">

                        <span></span>

                        LATEST INSIGHTS

                    </div>

                    <h2>
                        Explore our
                        <strong>knowledge hub.</strong>
                    </h2>

                    <p>
                        Discover perspectives across the technology areas
                        that matter to modern organizations.
                    </p>

                </div>


                <div class="articles-grid">

                    <article v-for="(post, index) in posts" :key="post.title" class="article-card">

                        <div class="article-image">

                            <img :src="post.image" :alt="post.title" loading="lazy" />

                            <div class="article-image-overlay"></div>

                            <div class="article-number">
                                {{ String(index + 1).padStart(2, "0") }}
                            </div>

                            <div class="article-category">
                                {{ post.category }}
                            </div>

                            <div class="article-image-line"></div>

                        </div>


                        <div class="article-body">

                            <div class="article-top">

                                <span>
                                    {{ post.category }}
                                </span>

                                <small>
                                    {{ post.topic }}
                                </small>

                            </div>


                            <h3>
                                {{ post.title }}
                            </h3>


                            <p>
                                {{ post.description }}
                            </p>


                            <div class="article-bottom">

                                <span>
                                    READ INSIGHT
                                </span>

                                <span class="article-arrow">
                                    ↗
                                </span>

                            </div>

                        </div>

                    </article>

                </div>

            </div>

        </section>


        <!-- =====================================================
             TOPICS
        ====================================================== -->

        <section class="topics-section">

            <div class="topics-bg"></div>

            <div class="topics-pattern"></div>

            <div class="topics-orbit"></div>

            <div class="blogs-container">

                <div class="topics-grid">

                    <div class="topics-heading">

                        <div class="eyebrow light-eyebrow">

                            <span></span>

                            EXPLORE TOPICS

                        </div>

                        <h2>
                            Go deeper into
                            <strong>technology.</strong>
                        </h2>

                        <p>
                            Explore the technology capabilities that help
                            organizations build secure, connected and
                            intelligent digital environments.
                        </p>

                    </div>


                    <div class="topic-list">

                        <a href="#articles">

                            <div class="topic-left">

                                <span class="topic-number">
                                    01
                                </span>

                                <span>
                                    Data & Analytics
                                </span>

                            </div>

                            <span class="topic-arrow">
                                ↗
                            </span>

                        </a>


                        <a href="#articles">

                            <div class="topic-left">

                                <span class="topic-number">
                                    02
                                </span>

                                <span>
                                    Cybersecurity
                                </span>

                            </div>

                            <span class="topic-arrow">
                                ↗
                            </span>

                        </a>


                        <a href="#articles">

                            <div class="topic-left">

                                <span class="topic-number">
                                    03
                                </span>

                                <span>
                                    Cloud & Infrastructure
                                </span>

                            </div>

                            <span class="topic-arrow">
                                ↗
                            </span>

                        </a>


                        <a href="#articles">

                            <div class="topic-left">

                                <span class="topic-number">
                                    04
                                </span>

                                <span>
                                    IT Consulting
                                </span>

                            </div>

                            <span class="topic-arrow">
                                ↗
                            </span>

                        </a>


                        <a href="#articles">

                            <div class="topic-left">

                                <span class="topic-number">
                                    05
                                </span>

                                <span>
                                    Digital Transformation
                                </span>

                            </div>

                            <span class="topic-arrow">
                                ↗
                            </span>

                        </a>

                    </div>

                </div>

            </div>

        </section>


        <!-- =====================================================
             CTA
        ====================================================== -->

        <CTASection />


        <!-- =====================================================
             FOOTER
        ====================================================== -->

        <FooterSection />

    </main>

</template>


<script>

import HeaderSection from "../components/HeaderSection.vue";
import CTASection from "../components/CTASection.vue";
import FooterSection from "../components/FooterSection.vue";


export default {

    name: "BlogsPage",

    components: {

        HeaderSection,
        CTASection,
        FooterSection

    },


    data() {

        return {

            /* =================================================
               FEATURED ARTICLE
            ================================================= */

            featuredPost: {

                category: "TECHNOLOGY",

                title:
                    "Technology at the core of connected business.",

                description:
                    "Explore the role of connected technology, data and infrastructure in building modern digital environments.",

                topic:
                    "Digital Transformation",

                image:
                    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=90"

            },


            /* =================================================
               BLOG ARTICLES
            ================================================= */

            posts: [

                {

                    category: "DATA",

                    title:
                        "Making data more available across the enterprise.",

                    description:
                        "A look at the importance of data availability in connected technology environments.",

                    topic:
                        "Data Availability",

                    image:
                        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=90"

                },


                {

                    category: "SECURITY",

                    title:
                        "Building security into the technology core.",

                    description:
                        "Understanding the importance of protecting information, infrastructure and digital environments.",

                    topic:
                        "Data Security",

                    image:
                        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=90"

                },


                {

                    category: "ANALYTICS",

                    title:
                        "Turning enterprise data into useful insight.",

                    description:
                        "How analytics can help organizations understand information and support better decisions.",

                    topic:
                        "Data Analytics",

                    image:
                        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=90"

                },


                {

                    category: "INFRASTRUCTURE",

                    title:
                        "Connecting technology infrastructure.",

                    description:
                        "The role of reliable infrastructure in supporting connected enterprise environments.",

                    topic:
                        "IT Infrastructure",

                    image:
                        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=90"

                },


                {

                    category: "CONSULTING",

                    title:
                        "Technology aligned with business needs.",

                    description:
                        "Why understanding business requirements is important when designing technology solutions.",

                    topic:
                        "IT Consulting",

                    image:
                        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=90"

                },


                {

                    category: "DIGITAL",

                    title:
                        "Creating a connected technology environment.",

                    description:
                        "Exploring how different technology capabilities can work together to support organizations.",

                    topic:
                        "Digital Transformation",

                    image:
                        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=90"

                }

            ]

        };

    }

};

</script>


<style scoped>
/* =========================================================
   ROOT
========================================================= */

.blogs-page {

    --green-dark: #102e27;
    --green-deep: #071b16;
    --green: #4c826c;
    --green-mid: #4c826c;
    --green-light: #ffb566;
    --green-soft: #e0e9e5;
    --orange: #f5820b;
    --orange-light: #ffb566;

    --white: #ffffff;

    --text: #17211e;
    --muted: #aebdb7;

    --border: rgba(16, 46, 39, 0.11);

    width: 100%;


    background:
        linear-gradient(90deg,
            rgba(16, 46, 39, 0.98) 0%,
            rgba(16, 46, 39, 0.92) 30%,
            rgba(16, 46, 39, 0.72) 58%,
            rgba(16, 46, 39, 0.55) 100%);

    color: var(--text);

    overflow: hidden;

}


/* =========================================================
   CONTAINER
========================================================= */

.blogs-container {

    width: min(1200px, calc(100% - 48px));

    margin: 0 auto;

}


/* =========================================================
   EYEBROW
========================================================= */

.eyebrow {

    display: inline-flex;

    align-items: center;

    gap: 12px;

    font-size: 11px;

    font-weight: 800;

    line-height: 1;

    letter-spacing: 2.8px;

    text-transform: uppercase;

}


.eyebrow span {

    display: inline-block;

    width: 34px;

    height: 2px;

}


.light-eyebrow {

    color: rgba(255, 255, 255, 0.82);

}


.light-eyebrow span {

    background: rgba(255, 255, 255, 0.75);

}


.dark-eyebrow {

    color: var(--green);

}


.dark-eyebrow span {

    background: var(--green);

}


/* =========================================================
   HERO
========================================================= */

.blogs-hero {

    position: relative;

    min-height: 720px;

    display: flex;

    align-items: center;

    overflow: hidden;

    background:
        linear-gradient(90deg,
            rgba(16, 46, 39, 0.98) 0%,
            rgba(16, 46, 39, 0.92) 30%,
            rgba(16, 46, 39, 0.72) 58%,
            rgba(16, 46, 39, 0.55) 100%);

}


/* =========================================================
   HERO IMAGE
========================================================= */

.hero-image {

    position: absolute;

    inset: 0;

    z-index: 0;

    background-image:
        url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=90");

    background-size: cover;

    background-position: center right;

    background-repeat: no-repeat;

    opacity: 0.32;

    transform: scale(1.04);

    filter:
        saturate(0.65) contrast(1.08) brightness(0.68);

    animation:
        heroImageZoom 14s ease-in-out infinite alternate;

}


/* =========================================================
   HERO OVERLAY
========================================================= */

.hero-overlay {

    position: absolute;

    inset: 0;

    z-index: 1;

    background:
        linear-gradient(90deg,
            rgba(16, 46, 39, 0.98) 0%,
            rgba(16, 46, 39, 0.92) 30%,
            rgba(16, 46, 39, 0.72) 58%,
            rgba(16, 46, 39, 0.55) 100%);

}


/* =========================================================
   HERO GRID
========================================================= */

.hero-grid {

    position: absolute;

    inset: 0;

    z-index: 2;

    opacity: 0.65;

    background-image:

        linear-gradient(rgba(255, 255, 255, 0.045) 1px,
            transparent 1px),

        linear-gradient(90deg,
            rgba(255, 255, 255, 0.045) 1px,
            transparent 1px);

    background-size: 70px 70px;

    mask-image:
        linear-gradient(90deg,
            black 0%,
            rgba(0, 0, 0, 0.75) 45%,
            transparent 100%);

    pointer-events: none;

}


/* =========================================================
   HERO ORB
========================================================= */

.hero-orb-one {

    position: absolute;

    width: 560px;

    height: 560px;

    right: -130px;

    top: 50%;

    z-index: 3;

    border-radius: 50%;

    transform: translateY(-50%);

    background:
        radial-gradient(circle,
            rgba(255, 181, 102, 0.18) 0%,
            rgba(76, 130, 108, 0.09) 30%,
            rgba(16, 46, 39, 0.02) 62%,
            transparent 72%);

    box-shadow:
        inset 0 0 100px rgba(255, 181, 102, 0.06),
        0 0 100px rgba(76, 130, 108, 0.08);

    animation:
        orbFloat 8s ease-in-out infinite;

}


/* =========================================================
   SECOND ORB
========================================================= */

.hero-orb-two {

    position: absolute;

    width: 400px;

    height: 400px;

    right: -38px;

    top: 50%;

    z-index: 4;

    border-radius: 50%;

    transform: translateY(-50%);

    border:
        1px solid rgba(255, 255, 255, 0.14);

    box-shadow:
        0 0 70px rgba(76, 130, 108, 0.10),
        inset 0 0 60px rgba(76, 130, 108, 0.07);

    animation:
        ringRotate 20s linear infinite;

}


.hero-orb-two::before {

    content: "";

    position: absolute;

    inset: 50px;

    border-radius: 50%;

    border:
        1px solid rgba(255, 255, 255, 0.12);

}


.hero-orb-two::after {

    content: "";

    position: absolute;

    width: 9px;

    height: 9px;

    top: 19px;

    left: 50%;

    transform: translateX(-50%);

    border-radius: 50%;

    background: #ffffff;

    box-shadow:
        0 0 20px rgba(255, 255, 255, 0.8);

}


/* =========================================================
   DATA LINES
========================================================= */

.hero-data-line {

    position: absolute;

    z-index: 5;

    height: 1px;

    background:
        linear-gradient(90deg,
            transparent,
            rgba(255, 181, 102, 0.6),
            transparent);

    opacity: 0.65;

}


.hero-data-line-one {

    width: 350px;

    right: 4%;

    top: 34%;

    transform: rotate(-18deg);

    animation:
        lineMoveOne 5s ease-in-out infinite;

}


.hero-data-line-two {

    width: 260px;

    right: 10%;

    top: 67%;

    transform: rotate(22deg);

    animation:
        lineMoveTwo 6s ease-in-out infinite;

}


.hero-data-line-three {

    width: 190px;

    right: 28%;

    top: 24%;

    transform: rotate(12deg);

    opacity: 0.35;

}


/* =========================================================
   PULSE DOTS
========================================================= */

.hero-pulse {

    position: absolute;

    z-index: 6;

    width: 7px;

    height: 7px;

    border-radius: 50%;

    background: var(--orange);

    box-shadow:
        0 0 10px #ffb566,
        0 0 25px rgba(255, 181, 102, 0.7);

    animation:
        pulseGlow 2.5s ease-in-out infinite;

}


.hero-pulse-one {

    right: 28%;

    top: 32%;

}


.hero-pulse-two {

    right: 14%;

    bottom: 25%;

    animation-delay: 1s;

}


/* =========================================================
   HERO CONTENT
========================================================= */

.hero-container {

    position: relative;

    z-index: 10;

}


.hero-content {

    max-width: 790px;

    padding: 145px 0 120px;

}


.hero-content h1 {

    margin: 30px 0 0;

    max-width: 850px;

    color: #ffffff;

    font-size:
        clamp(56px, 7vw, 94px);

    line-height: 0.98;

    letter-spacing: -4px;

    font-weight: 800;

    text-shadow:
        0 12px 40px rgba(0, 0, 0, 0.24);

}


.hero-content h1 strong {

    display: block;

    color: #ffffff;

    font-weight: 800;

    background:
        linear-gradient(90deg,
            #ffffff 0%,
            #e0e9e5 40%,
            #ffb566 60%,
            #ffffff 80%);

    background-size: 250% auto;

    -webkit-background-clip: text;

    background-clip: text;

    -webkit-text-fill-color: transparent;

    animation:
        headingShine 6s linear infinite;

}


.hero-content p {

    max-width: 650px;

    margin: 34px 0 38px;

    color:
        rgba(255, 255, 255, 0.76);

    font-size: 18px;

    line-height: 1.8;

}


/* =========================================================
   HERO ACTIONS
========================================================= */

.hero-actions {

    display: flex;

    align-items: center;

    gap: 34px;

    flex-wrap: wrap;

}


/* =========================================================
   HERO BUTTON
========================================================= */

.hero-btn {

    position: relative;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 22px;

    min-height: 58px;

    padding: 0 27px;

    color: var(--green-dark);

    background: #ffffff;

    text-decoration: none;

    font-size: 13px;

    font-weight: 800;

    letter-spacing: 0.6px;

    overflow: hidden;

    border-radius: 4px;

    box-shadow:
        0 14px 35px rgba(0, 0, 0, 0.18);

    transition:
        transform 0.3s ease,
        background 0.3s ease,
        box-shadow 0.3s ease;

}


.hero-btn::before {

    content: "";

    position: absolute;

    top: 0;

    left: -120%;

    width: 80%;

    height: 100%;

    background:
        linear-gradient(90deg,
            transparent,
            rgba(255, 255, 255, 0.9),
            transparent);

    transform: skewX(-20deg);

    transition:
        left 0.7s ease;

}


.hero-btn:hover::before {

    left: 150%;

}


.hero-btn:hover {

    transform: translateY(-5px);

    background: var(--green-soft);

    box-shadow:
        0 20px 45px rgba(0, 0, 0, 0.24);

}


.hero-btn strong {

    font-size: 20px;

    line-height: 1;

}


/* =========================================================
   HERO STAT
========================================================= */

.hero-stat {

    display: flex;

    align-items: center;

    gap: 14px;

    color: #ffffff;

}


.hero-stat>strong {

    font-size: 42px;

    line-height: 1;

    font-weight: 700;

    letter-spacing: -2px;

}


.hero-stat div {

    display: flex;

    flex-direction: column;

    gap: 3px;

}


.hero-stat span {

    color:
        rgba(255, 255, 255, 0.8);

    font-size: 12px;

    font-weight: 700;

    letter-spacing: 1px;

    text-transform: uppercase;

}


.hero-stat small {

    color:
        rgba(255, 255, 255, 0.45);

    font-size: 11px;

    text-transform: uppercase;

    letter-spacing: 1px;

}


/* =========================================================
   HERO SCROLL
========================================================= */

.hero-scroll {

    position: absolute;

    left: 50%;

    bottom: 28px;

    z-index: 10;

    transform: translateX(-50%);

    display: flex;

    align-items: center;

    gap: 12px;

    color:
        rgba(255, 255, 255, 0.45);

    font-size: 9px;

    font-weight: 700;

    letter-spacing: 2px;

}


.scroll-line {

    width: 34px;

    height: 1px;

    background:
        rgba(255, 255, 255, 0.45);

}


/* =========================================================
   FEATURED SECTION
========================================================= */

.featured-section {

    position: relative;

    padding: 125px 0;

    background:
        radial-gradient(circle at 8% 10%,
            rgba(76, 130, 108, 0.08),
            transparent 28%),
        #ffffff;

}


/* =========================================================
   SECTION HEADING
========================================================= */

.section-heading {

    max-width: 760px;

    margin-bottom: 58px;

}


.section-heading h2 {

    margin: 24px 0 0;

    color: var(--green-dark);

    font-size:
        clamp(44px, 5vw, 70px);

    line-height: 1;

    letter-spacing: -3px;

    font-weight: 800;

}


.section-heading h2 strong {

    color: var(--orange);

    font-weight: 800;

}


/* =========================================================
   FEATURED CARD
========================================================= */

.featured-card {

    display: grid;

    grid-template-columns: 1.05fr 0.95fr;

    min-height: 560px;

    background: #ffffff;

    border:
        1px solid var(--border);

    box-shadow:
        0 35px 90px rgba(16, 46, 39, 0.10);

    overflow: hidden;

}


/* =========================================================
   FEATURED IMAGE
========================================================= */

.featured-visual {

    position: relative;

    min-height: 560px;

    overflow: hidden;

    background: var(--green-dark);

}


.featured-visual img {

    position: absolute;

    inset: 0;

    width: 100%;

    height: 100%;

    object-fit: cover;

    transition:
        transform 0.8s ease;

}


.featured-card:hover .featured-visual img {

    transform: scale(1.06);

}


.featured-image-overlay {

    position: absolute;

    inset: 0;

    background:
        linear-gradient(135deg,
            rgba(16, 46, 39, 0.04),
            rgba(16, 46, 39, 0.40));

}


.visual-grid {

    position: absolute;

    inset: 0;

    background-image:

        linear-gradient(rgba(255, 255, 255, 0.07) 1px,
            transparent 1px),

        linear-gradient(90deg,
            rgba(255, 255, 255, 0.07) 1px,
            transparent 1px);

    background-size: 55px 55px;

    opacity: 0.45;

}


.visual-number {

    position: absolute;

    left: 32px;

    top: 30px;

    color:
        rgba(255, 255, 255, 0.7);

    font-size: 12px;

    font-weight: 800;

    letter-spacing: 2px;

}


.visual-label {

    position: absolute;

    left: 32px;

    bottom: 30px;

    display: flex;

    align-items: center;

    gap: 10px;

    color: #ffffff;

    font-size: 10px;

    font-weight: 800;

    letter-spacing: 2px;

}


.visual-label span {

    width: 28px;

    height: 2px;

    background: #ffffff;

}


/* =========================================================
   CORNERS
========================================================= */

.visual-corner {

    position: absolute;

    width: 35px;

    height: 35px;

}


.top-left {

    top: 25px;

    right: 25px;

    border-top:
        1px solid rgba(255, 255, 255, 0.5);

    border-right:
        1px solid rgba(255, 255, 255, 0.5);

}


.bottom-right {

    bottom: 25px;

    right: 25px;

    border-bottom:
        1px solid rgba(255, 255, 255, 0.5);

    border-right:
        1px solid rgba(255, 255, 255, 0.5);

}


.top-right,
.bottom-left {

    display: none;

}


/* =========================================================
   FEATURED CONTENT
========================================================= */

.featured-content {

    display: flex;

    flex-direction: column;

    justify-content: center;

    padding: 65px;

}


.post-category {

    display: inline-block;

    margin-bottom: 24px;

    color: var(--green);

    font-size: 11px;

    font-weight: 800;

    letter-spacing: 2px;

}


.featured-content h3 {

    margin: 0 0 25px;

    color: var(--green-dark);

    font-size:
        clamp(34px, 4vw, 54px);

    line-height: 1.06;

    letter-spacing: -2px;

    font-weight: 800;

}


.featured-content p {

    max-width: 540px;

    margin: 0 0 35px;

    color: var(--muted);

    font-size: 16px;

    line-height: 1.8;

}


.featured-meta {

    display: flex;

    gap: 15px;

    padding-top: 22px;

    margin-bottom: 30px;

    border-top:
        1px solid var(--border);

}


.featured-meta span {

    color: #7a8580;

    font-size: 10px;

    font-weight: 800;

    letter-spacing: 1.5px;

    text-transform: uppercase;

}


.featured-meta span+span {

    padding-left: 15px;

    border-left:
        1px solid var(--border);

}


.read-link {

    display: inline-flex;

    align-items: center;

    gap: 14px;

    width: fit-content;

    color: var(--green-dark);

    text-decoration: none;

    font-size: 13px;

    font-weight: 800;

    letter-spacing: 0.4px;

    transition:
        gap 0.3s ease,
        color 0.3s ease;

}


.read-link span {

    font-size: 20px;

}


.read-link:hover {

    gap: 21px;

    color: var(--orange);

}


/* =========================================================
   ARTICLES
========================================================= */

.articles-section {

    position: relative;

    padding: 125px 0;

    background:
        linear-gradient(180deg,
            #f4f8f6 0%,
            #ffffff 100%);

}


.articles-heading {

    margin-bottom: 65px;

}


.articles-heading p {

    max-width: 600px;

    margin: 25px 0 0;

    color: var(--muted);

    font-size: 17px;

    line-height: 1.75;

}


.articles-grid {

    display: grid;

    grid-template-columns:
        repeat(3, minmax(0, 1fr));

    gap: 28px;

}


/* =========================================================
   ARTICLE CARD
========================================================= */

.article-card {

    position: relative;

    background: #ffffff;

    border:
        1px solid rgba(16, 46, 39, 0.09);

    overflow: hidden;

    box-shadow:
        0 18px 55px rgba(16, 46, 39, 0.06);

    transition:
        transform 0.4s ease,
        box-shadow 0.4s ease,
        border-color 0.4s ease;

}


.article-card:hover {

    transform: translateY(-9px);

    border-color:
        rgba(76, 130, 108, 0.35);

    box-shadow:
        0 30px 75px rgba(16, 46, 39, 0.13);

}


/* =========================================================
   ARTICLE IMAGE
========================================================= */

.article-image {

    position: relative;

    height: 260px;

    overflow: hidden;

    background: var(--green-dark);

}


.article-image img {

    width: 100%;

    height: 100%;

    display: block;

    object-fit: cover;

    transition:
        transform 0.7s ease,
        filter 0.7s ease;

}


.article-card:hover .article-image img {

    transform: scale(1.08);

    filter:
        saturate(1.08) contrast(1.05);

}


.article-image-overlay {

    position: absolute;

    inset: 0;

    background:
        linear-gradient(to bottom,
            rgba(16, 46, 39, 0.04),
            rgba(16, 46, 39, 0.48));

}


.article-number {

    position: absolute;

    top: 22px;

    left: 22px;

    color:
        rgba(255, 255, 255, 0.75);

    font-size: 11px;

    font-weight: 800;

    letter-spacing: 1.8px;

}


.article-category {

    position: absolute;

    bottom: 22px;

    left: 22px;

    color: #ffffff;

    font-size: 10px;

    font-weight: 800;

    letter-spacing: 1.8px;

}


.article-image-line {

    position: absolute;

    left: 22px;

    right: 22px;

    bottom: 48px;

    height: 1px;

    background:
        rgba(255, 255, 255, 0.25);

}


/* =========================================================
   ARTICLE BODY
========================================================= */

.article-body {

    padding: 30px;

}


.article-top {

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 15px;

    margin-bottom: 20px;

}


.article-top span {

    color: var(--green);

    font-size: 10px;

    font-weight: 800;

    letter-spacing: 1.7px;

}


.article-top small {

    color: #929b97;

    font-size: 9px;

    font-weight: 700;

    letter-spacing: 1px;

    text-transform: uppercase;

}


.article-body h3 {

    margin: 0 0 17px;

    color: var(--green-dark);

    font-size: 23px;

    line-height: 1.28;

    letter-spacing: -0.7px;

    font-weight: 800;

}


.article-body p {

    min-height: 76px;

    margin: 0 0 27px;

    color: var(--muted);

    font-size: 14px;

    line-height: 1.75;

}


.article-bottom {

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding-top: 20px;

    border-top:
        1px solid var(--border);

}


.article-bottom>span:first-child {

    color: var(--green-dark);

    font-size: 9px;

    font-weight: 800;

    letter-spacing: 1.7px;

}


.article-arrow {

    display: flex;

    align-items: center;

    justify-content: center;

    width: 34px;

    height: 34px;

    border:
        1px solid var(--border);

    color: var(--green-dark);

    font-size: 16px;

    transition:
        transform 0.3s ease,
        background 0.3s ease,
        color 0.3s ease;

}


.article-card:hover .article-arrow {

    transform: rotate(45deg);

    background: var(--green-dark);

    color: #ffffff;

}


/* =========================================================
   TOPICS
========================================================= */

.topics-section {

    position: relative;

    padding: 130px 0;

    overflow: hidden;

    background: var(--green-dark);

}


.topics-bg {

    position: absolute;

    width: 700px;

    height: 700px;

    top: -380px;

    right: -220px;

    border-radius: 50%;

    background:
        radial-gradient(circle,
            rgba(76, 130, 108, 0.18),
            transparent 68%);

    filter: blur(10px);

}


.topics-pattern {

    position: absolute;

    inset: 0;

    background-image:

        linear-gradient(rgba(255, 255, 255, 0.025) 1px,
            transparent 1px),

        linear-gradient(90deg,
            rgba(255, 255, 255, 0.025) 1px,
            transparent 1px);

    background-size: 80px 80px;

    opacity: 0.65;

}


/* =========================================================
   TOPIC ORBIT
========================================================= */

.topics-orbit {

    position: absolute;

    width: 520px;

    height: 520px;

    right: -260px;

    bottom: -300px;

    border:
        1px solid rgba(255, 181, 102, 0.18);

    border-radius: 50%;

}


.topics-orbit::before {

    content: "";

    position: absolute;

    inset: 70px;

    border:
        1px solid rgba(255, 181, 102, 0.12);

    border-radius: 50%;

}


/* =========================================================
   TOPICS GRID
========================================================= */

.topics-grid {

    position: relative;

    z-index: 2;

    display: grid;

    grid-template-columns:
        0.9fr 1.1fr;

    gap: 100px;

    align-items: start;

}


/* =========================================================
   TOPICS HEADING
========================================================= */

.topics-heading {

    padding-top: 10px;

}


.topics-heading h2 {

    margin: 28px 0 25px;

    color: #ffffff;

    font-size:
        clamp(43px, 5vw, 70px);

    line-height: 1;

    letter-spacing: -3px;

    font-weight: 800;

}


.topics-heading h2 strong {

    display: block;

    color: var(--orange);

}


.topics-heading p {

    max-width: 470px;

    margin: 0;

    color:
        rgba(255, 255, 255, 0.58);

    font-size: 15px;

    line-height: 1.8;

}


/* =========================================================
   TOPIC LIST
========================================================= */

.topic-list {

    border-top:
        1px solid rgba(255, 255, 255, 0.13);

}


.topic-list a {

    position: relative;

    display: flex;

    align-items: center;

    justify-content: space-between;

    min-height: 94px;

    padding: 0 8px;

    color: #ffffff;

    text-decoration: none;

    border-bottom:
        1px solid rgba(255, 255, 255, 0.13);

    transition:
        padding 0.35s ease,
        background 0.35s ease;

}


.topic-list a::before {

    content: "";

    position: absolute;

    left: 0;

    bottom: -1px;

    width: 0;

    height: 2px;

    background: var(--orange);

    transition:
        width 0.4s ease;

}


.topic-list a:hover {

    padding-left: 18px;

    background:
        rgba(255, 255, 255, 0.035);

}


.topic-list a:hover::before {

    width: 100%;

}


.topic-left {

    display: flex;

    align-items: center;

    gap: 28px;

}


.topic-number {

    color:
        rgba(255, 255, 255, 0.32);

    font-size: 10px;

    font-weight: 800;

    letter-spacing: 1.5px;

}


.topic-left>span:last-child {

    color: #ffffff;

    font-size: 18px;

    font-weight: 700;

}


.topic-arrow {

    display: flex;

    align-items: center;

    justify-content: center;

    width: 42px;

    height: 42px;

    border:
        1px solid rgba(255, 255, 255, 0.15);

    color:
        rgba(255, 255, 255, 0.75);

    font-size: 18px;

    transition:
        transform 0.35s ease,
        background 0.35s ease;

}


.topic-list a:hover .topic-arrow {

    transform: rotate(45deg);

    background: var(--orange);

    border-color: var(--orange);

    color: var(--green-dark);

}


/* =========================================================
   CTA
========================================================= */

.blogs-page :deep(.cta-section) {

    position: relative;

    z-index: 5;

}


/* =========================================================
   ANIMATIONS
========================================================= */

@keyframes heroImageZoom {

    from {

        transform: scale(1.04);

    }

    to {

        transform: scale(1.09);

    }

}


@keyframes orbFloat {

    0%,
    100% {

        transform:
            translateY(-50%) translateX(0);

    }

    50% {

        transform:
            translateY(-50%) translateX(-20px);

    }

}


@keyframes ringRotate {

    from {

        transform:
            translateY(-50%) rotate(0deg);

    }

    to {

        transform:
            translateY(-50%) rotate(360deg);

    }

}


@keyframes headingShine {

    0% {

        background-position:
            200% center;

    }

    100% {

        background-position:
            -200% center;

    }

}


@keyframes lineMoveOne {

    0%,
    100% {

        opacity: 0.25;

        transform:
            translateX(0) rotate(-18deg);

    }

    50% {

        opacity: 0.7;

        transform:
            translateX(-18px) rotate(-18deg);

    }

}


@keyframes lineMoveTwo {

    0%,
    100% {

        opacity: 0.25;

        transform:
            translateX(0) rotate(22deg);

    }

    50% {

        opacity: 0.7;

        transform:
            translateX(18px) rotate(22deg);

    }

}


@keyframes pulseGlow {

    0%,
    100% {

        opacity: 0.35;

        transform: scale(0.8);

    }

    50% {

        opacity: 1;

        transform: scale(1.25);

    }

}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1100px) {

    .blogs-container {

        width:
            min(100% - 40px, 1100px);

    }


    .blogs-hero {

        min-height: 650px;

    }


    .hero-content {

        max-width: 680px;

    }


    .hero-orb-one {

        right: -220px;

    }


    .hero-orb-two {

        right: -150px;

    }


    .featured-card {

        grid-template-columns:
            1fr 1fr;

    }


    .featured-content {

        padding: 45px;

    }


    .topics-grid {

        gap: 55px;

    }

}


/* =========================================================
   TABLET SMALL
========================================================= */

@media (max-width: 900px) {

    .blogs-hero {

        min-height: 650px;

    }


    .hero-content h1 {

        font-size: 66px;

    }


    .hero-orb-one {

        width: 420px;

        height: 420px;

        right: -220px;

    }


    .hero-orb-two {

        width: 310px;

        height: 310px;

        right: -160px;

    }


    .featured-card {

        grid-template-columns: 1fr;

    }


    .featured-visual {

        min-height: 430px;

    }


    .featured-content {

        min-height: 420px;

    }


    .articles-grid {

        grid-template-columns:
            repeat(2, minmax(0, 1fr));

    }


    .topics-grid {

        grid-template-columns: 1fr;

        gap: 60px;

    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 767px) {

    .blogs-container {

        width:
            calc(100% - 30px);

    }


    .blogs-hero {

        min-height: 690px;

        background:
            linear-gradient(90deg,
                rgba(16, 46, 39, 0.99) 0%,
                rgba(16, 46, 39, 0.96) 50%,
                rgba(16, 46, 39, 0.86) 100%);

    }


    .hero-image {

        opacity: 0.18;

        background-position:
            center right;

    }


    .hero-overlay {

        background:
            linear-gradient(90deg,
                rgba(16, 46, 39, 0.99) 0%,
                rgba(16, 46, 39, 0.96) 50%,
                rgba(16, 46, 39, 0.86) 100%);

    }


    .hero-grid {

        background-size: 45px 45px;

        opacity: 0.45;

    }


    .hero-content {

        padding:
            115px 0 90px;

    }


    .eyebrow {

        font-size: 9px;

        letter-spacing: 2px;

    }


    .eyebrow span {

        width: 24px;

    }


    .hero-content h1 {

        margin-top: 25px;

        font-size:
            clamp(45px, 13vw, 64px);

        line-height: 1;

        letter-spacing: -2.5px;

    }


    .hero-content p {

        margin:
            27px 0 32px;

        font-size: 15px;

        line-height: 1.75;

    }


    .hero-actions {

        align-items: flex-start;

        flex-direction: column;

        gap: 25px;

    }


    .hero-btn {

        min-height: 54px;

        padding: 0 23px;

    }


    .hero-stat>strong {

        font-size: 35px;

    }


    .hero-orb-one {

        width: 320px;

        height: 320px;

        right: -190px;

        opacity: 0.7;

    }


    .hero-orb-two {

        width: 240px;

        height: 240px;

        right: -140px;

        opacity: 0.65;

    }


    .hero-data-line,
    .hero-pulse {

        display: none;

    }


    .hero-scroll {

        bottom: 20px;

        font-size: 7px;

        letter-spacing: 1.5px;

    }


    /* FEATURED */

    .featured-section {

        padding: 80px 0;

    }


    .section-heading {

        margin-bottom: 40px;

    }


    .section-heading h2 {

        margin-top: 20px;

        font-size: 43px;

        letter-spacing: -2px;

    }


    .featured-card {

        display: block;

    }


    .featured-visual {

        min-height: 330px;

    }


    .featured-content {

        min-height: auto;

        padding:
            35px 28px 40px;

    }


    .featured-content h3 {

        font-size: 34px;

        letter-spacing: -1.4px;

    }


    .featured-content p {

        font-size: 15px;

    }


    /* ARTICLES */

    .articles-section {

        padding: 80px 0;

    }


    .articles-heading {

        margin-bottom: 45px;

    }


    .articles-heading h2 {

        font-size: 40px;

    }


    .articles-heading p {

        font-size: 15px;

    }


    .articles-grid {

        grid-template-columns: 1fr;

        gap: 22px;

    }


    .article-image {

        height: 235px;

    }


    .article-body {

        padding: 26px;

    }


    .article-body h3 {

        font-size: 22px;

    }


    .article-body p {

        min-height: auto;

    }


    /* TOPICS */

    .topics-section {

        padding: 85px 0;

    }


    .topics-heading h2 {

        font-size: 43px;

        letter-spacing: -2px;

    }


    .topics-heading p {

        font-size: 14px;

    }


    .topic-list a {

        min-height: 82px;

    }


    .topic-left {

        gap: 17px;

    }


    .topic-left>span:last-child {

        font-size: 15px;

    }


    .topic-arrow {

        width: 35px;

        height: 35px;

        font-size: 15px;

    }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 480px) {

    .blogs-container {

        width:
            calc(100% - 24px);

    }


    .blogs-hero {

        min-height: 650px;

    }


    .hero-content {

        padding-top: 95px;

    }


    .hero-content h1 {

        font-size: 43px;

        letter-spacing: -2px;

    }


    .hero-content p {

        font-size: 14px;

    }


    .hero-btn {

        width: auto;

    }


    .hero-stat {

        margin-top: 4px;

    }


    .featured-section,
    .articles-section,
    .topics-section {

        padding:
            70px 0;

    }


    .section-heading h2 {

        font-size: 37px;

    }


    .featured-visual {

        min-height: 275px;

    }


    .featured-content {

        padding:
            30px 22px 35px;

    }


    .featured-content h3 {

        font-size: 30px;

    }


    .featured-content p {

        font-size: 14px;

    }


    .featured-meta {

        flex-direction: column;

        gap: 9px;

    }


    .featured-meta span+span {

        padding-left: 0;

        border-left: none;

    }


    .article-image {

        height: 210px;

    }


    .article-body {

        padding: 23px;

    }


    .article-body h3 {

        font-size: 21px;

    }


    .topics-heading h2 {

        font-size: 37px;

    }


    .topic-left>span:last-child {

        max-width: 190px;

    }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

    .hero-image,
    .hero-orb-one,
    .hero-orb-two,
    .hero-content h1 strong,
    .hero-data-line,
    .hero-pulse {

        animation: none;

    }


    .article-card,
    .article-image img,
    .featured-visual img,
    .hero-btn,
    .read-link,
    .topic-list a,
    .topic-arrow {

        transition: none;

    }

}
</style>
