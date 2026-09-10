<template>
    <main class="services-page">

        <HeaderSection />

        <!-- ================= HERO ================= -->
        <section class="services-hero">

            <div class="hero-bg"></div>
            <div class="hero-grid"></div>
            <div class="hero-overlay"></div>

            <div class="hero-orb orb-one"></div>
            <div class="hero-orb orb-two"></div>

            <div class="services-container hero-inner">

                <div class="hero-content">

                    <div class="eyebrow">
                        <span></span>
                        UNITECORE SERVICES
                    </div>

                    <h1>
                        Unite Your IT
                        <strong>At Its Core.</strong>
                    </h1>

                    <p>
                        Introducing UniteCore, a leading technology company dedicated
                        to helping organizations unlock the full potential of their data.
                        We specialize in data availability, data security, and data
                        analytics, providing the tools and expertise you need to make
                        informed decisions, boost efficiency, and drive meaningful impact.
                    </p>

                    <div class="hero-actions">
                        <a href="#solutions" class="primary-button">
                            Explore Services
                            <span>↗</span>
                        </a>

                        <router-link to="/contact" class="secondary-button">
                            Talk With Us
                        </router-link>
                    </div>

                    <div class="hero-stats">

                        <div>
                            <strong>250<span>+</span></strong>
                            <small>Customers</small>
                        </div>

                        <div>
                            <strong>750<span>+</span></strong>
                            <small>Projects</small>
                        </div>

                        <div>
                            <strong>75<span>+</span></strong>
                            <small>Technology Experts</small>
                        </div>

                    </div>

                </div>

                <!-- HERO VISUAL -->
                <div class="hero-visual">

                    <div class="visual-ring ring-one"></div>
                    <div class="visual-ring ring-two"></div>
                    <div class="visual-ring ring-three"></div>

                    <div class="core-circle">

                        <div class="core-inner">
                            <span>UC</span>
                            <small>UNITECORE</small>
                        </div>

                    </div>

                    <div class="floating-card card-data">
                        <span class="icon">
                            <i class="bi bi-database-check"></i>
                        </span>
                        <div>
                            <strong>DATA</strong>
                            <small>Availability</small>
                        </div>
                    </div>

                    <div class="floating-card card-security">
                        <span class="icon">
                            <i class="bi bi-shield-lock"></i>
                        </span>
                        <div>
                            <strong>SECURITY</strong>
                            <small>Protection</small>
                        </div>
                    </div>

                    <div class="floating-card card-analytics">
                        <span class="icon">
                            <i class="bi bi-bar-chart-line"></i>
                        </span>
                        <div>
                            <strong>ANALYTICS</strong>
                            <small>Intelligence</small>
                        </div>
                    </div>

                    <div class="connection-dot dot-one"></div>
                    <div class="connection-dot dot-two"></div>
                    <div class="connection-dot dot-three"></div>

                </div>

            </div>
        </section>


        <!-- ================= INTRO ================= -->
        <section class="services-intro">

            <div class="services-container">

                <div class="intro-grid">

                    <div class="intro-label">
                        <span>01</span>
                        OUR CAPABILITIES
                    </div>

                    <div class="intro-content">

                        <h2>
                            Technology that works
                            <em>at your core.</em>
                        </h2>

                        <p>
                            UniteCore brings together specialized technology
                            capabilities designed to help organizations manage,
                            protect and unlock the value of their critical data
                            and IT environments.
                        </p>

                    </div>

                </div>

            </div>
        </section>


        <!-- ================= SERVICES ================= -->
        <section id="solutions" class="service-section">

            <div class="services-container">

                <div class="section-top">

                    <div>
                        <div class="eyebrow dark-eyebrow">
                            <span></span>
                            WHAT WE DO
                        </div>

                        <h2>
                            Our core
                            <strong>technology services.</strong>
                        </h2>
                    </div>

                    <p>
                        From resilient data environments to cybersecurity,
                        analytics and technology consulting, UniteCore helps
                        organizations build secure and intelligent digital
                        foundations.
                    </p>

                </div>


                <!-- DATA AVAILABILITY -->
                <article class="service-card">

                    <div class="service-image availability-image">

                        <div class="image-overlay"></div>

                        <div class="service-number">01</div>

                        <div class="service-image-content">
                            <span>DATA</span>
                            <strong>AVAILABILITY</strong>
                        </div>

                        <div class="image-status">
                            <i class="bi bi-circle-fill"></i>
                            SYSTEMS AVAILABLE
                        </div>

                    </div>

                    <div class="service-info">

                        <div class="service-tag">
                            DATA AVAILABILITY
                        </div>

                        <h3>Data Availability</h3>

                        <p>
                            We go beyond simply making your data available.
                            Our team understands the nuances of data management
                            and can tailor our services to your specific needs.
                            We ensure your data is not only accessible but also
                            clean, consistent, and ready for insightful analysis.
                        </p>

                        <div class="service-features">

                            <div>
                                <i class="bi bi-check2"></i>
                                <span>Data Integration</span>
                            </div>

                            <div>
                                <i class="bi bi-check2"></i>
                                <span>Data Transformation</span>
                            </div>

                            <div>
                                <i class="bi bi-check2"></i>
                                <span>Data Quality Management</span>
                            </div>

                            <div>
                                <i class="bi bi-check2"></i>
                                <span>Data Governance</span>
                            </div>

                            <div>
                                <i class="bi bi-check2"></i>
                                <span>Data Warehousing &amp; Data Lake Solutions</span>
                            </div>

                        </div>

                        <router-link to="/solutions" class="service-link">
                            Explore Data Availability
                            <span>↗</span>
                        </router-link>

                    </div>

                </article>


                <!-- DATA SECURITY -->
                <article class="service-card reverse">

                    <div class="service-image security-image">

                        <div class="image-overlay"></div>

                        <div class="service-number">02</div>

                        <div class="security-shield">
                            <i class="bi bi-shield-check"></i>
                        </div>

                        <div class="service-image-content">
                            <span>DATA</span>
                            <strong>SECURITY</strong>
                        </div>

                        <div class="security-status">
                            <span></span>
                            SECURITY ACTIVE
                        </div>

                    </div>

                    <div class="service-info">

                        <div class="service-tag">
                            DATA SECURITY
                        </div>

                        <h3>Data Security</h3>

                        <p>
                            Our data security services are not a one-size fits-all
                            solution. We work closely with you to understand your
                            specific security needs and develop a comprehensive
                            security strategy. We continuously monitor and update
                            our security measures to stay ahead of evolving threats.
                        </p>

                        <div class="service-features">

                            <div>
                                <i class="bi bi-check2"></i>
                                <span>Threat Detection &amp; Prevention</span>
                            </div>

                            <div>
                                <i class="bi bi-check2"></i>
                                <span>Data Encryption</span>
                            </div>

                            <div>
                                <i class="bi bi-check2"></i>
                                <span>Access Control</span>
                            </div>

                            <div>
                                <i class="bi bi-check2"></i>
                                <span>Data Loss Prevention (DLP)</span>
                            </div>

                            <div>
                                <i class="bi bi-check2"></i>
                                <span>Security Incident &amp; Event Management (SIEM)</span>
                            </div>

                        </div>

                        <router-link to="/solutions" class="service-link">
                            Explore Data Security
                            <span>↗</span>
                        </router-link>

                    </div>

                </article>


                <!-- DATA ANALYTICS -->
                <article class="service-card">

                    <div class="service-image analytics-image">

                        <div class="image-overlay"></div>

                        <div class="service-number">03</div>

                        <div class="analytics-chart">

                            <div class="chart-bar bar-one"></div>
                            <div class="chart-bar bar-two"></div>
                            <div class="chart-bar bar-three"></div>
                            <div class="chart-bar bar-four"></div>
                            <div class="chart-bar bar-five"></div>
                            <div class="chart-bar bar-six"></div>

                        </div>

                        <div class="service-image-content">
                            <span>DATA</span>
                            <strong>ANALYTICS</strong>
                        </div>

                        <div class="analytics-status">
                            <i class="bi bi-activity"></i>
                            LIVE MONITORING
                        </div>

                    </div>

                    <div class="service-info">

                        <div class="service-tag">
                            DATA ANALYTICS &amp; MONITORING
                        </div>

                        <h3>Data Analytics &amp; Monitoring</h3>

                        <p>
                            Our team of data scientists and engineers transforms
                            complex data into actionable insights, tailoring
                            analytics solutions to your business needs. Using
                            advanced data visualization, we empower you to make
                            and communicate data-driven decisions effectively
                            across your organization.
                        </p>

                        <div class="service-features">

                            <div>
                                <i class="bi bi-check2"></i>
                                <span>Descriptive Analysis</span>
                            </div>

                            <div>
                                <i class="bi bi-check2"></i>
                                <span>Diagnostic Analytics</span>
                            </div>

                            <div>
                                <i class="bi bi-check2"></i>
                                <span>Predictive Analytics</span>
                            </div>

                            <div>
                                <i class="bi bi-check2"></i>
                                <span>Prescriptive Analytics</span>
                            </div>

                        </div>

                        <router-link to="/solutions" class="service-link">
                            Discover Analytics
                            <span>↗</span>
                        </router-link>

                    </div>

                </article>


                <!-- IT CONSULTING -->
                <article class="service-card reverse">

                    <div class="service-image consulting-image">

                        <div class="image-overlay"></div>

                        <div class="service-number">04</div>

                        <div class="consulting-network">

                            <div class="network-node node-center">
                                <i class="bi bi-cpu"></i>
                            </div>

                            <div class="network-node node-top">
                                <i class="bi bi-cloud"></i>
                            </div>

                            <div class="network-node node-left">
                                <i class="bi bi-shield-check"></i>
                            </div>

                            <div class="network-node node-right">
                                <i class="bi bi-diagram-3"></i>
                            </div>

                            <div class="network-line line-top"></div>
                            <div class="network-line line-left"></div>
                            <div class="network-line line-right"></div>

                        </div>

                        <div class="service-image-content">
                            <span>IT • IoT • OT</span>
                            <strong>CONSULTING</strong>
                        </div>

                        <div class="consulting-status">
                            TECHNOLOGY • STRATEGY • GROWTH
                        </div>

                    </div>

                    <div class="service-info">

                        <div class="service-tag">
                            IT, IoT, &amp; OT CONSULTING
                        </div>

                        <h3>IT, IoT, &amp; OT Consulting</h3>

                        <p>
                            UniteCore is your trusted IT partner, committed to
                            long-term relationships built on trust and transparency.
                            We deliver innovative solutions that harness technology,
                            driving business success with exceptional service.
                        </p>

                        <div class="service-features consulting-features">

                            <div>
                                <i class="bi bi-check2"></i>
                                <span>IT Audit and Assessment</span>
                            </div>

                            <div>
                                <i class="bi bi-check2"></i>
                                <span>IT Strategy</span>
                            </div>

                            <div>
                                <i class="bi bi-check2"></i>
                                <span>Data Management</span>
                            </div>

                            <div>
                                <i class="bi bi-check2"></i>
                                <span>Business Process Improvement</span>
                            </div>

                            <div>
                                <i class="bi bi-check2"></i>
                                <span>Cybersecurity</span>
                            </div>

                            <div>
                                <i class="bi bi-check2"></i>
                                <span>Cloud Solutions</span>
                            </div>

                        </div>

                        <router-link to="/contact" class="service-link">
                            Talk With Our Experts
                            <span>↗</span>
                        </router-link>

                    </div>

                </article>

            </div>
        </section>


        <!-- ================= JOURNEY ================= -->
        <section class="journey-section">

            <div class="journey-grid"></div>

            <div class="services-container">

                <div class="journey-content">

                    <div class="eyebrow">
                        <span></span>
                        THE NEXT GENERATION
                    </div>

                    <h2>
                        From Reborn to
                        <strong>Next Gen.</strong>
                    </h2>

                    <p>
                        A Journey into Rebirth. Revolution.
                        <em>Beyond AI.</em>
                    </p>

                    <router-link to="/about" class="journey-button">
                        Discover UniteCore
                        <span>↗</span>
                    </router-link>

                </div>

            </div>

        </section>


        <CTASection />

        <FooterSection />

    </main>
</template>


<script>
import HeaderSection from "../components/HeaderSection.vue";
import CTASection from "../components/CTASection.vue";
import FooterSection from "../components/FooterSection.vue";

export default {
    name: "ServicesPage",

    components: {
        HeaderSection,
        CTASection,
        FooterSection
    }
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');


/* =========================================================
   GLOBAL
========================================================= */

.services-page {
    --green: #0b3329;
    --green-dark: #061e18;
    --green-deep: #041612;
    --orange: #f5820b;
    --orange-light: #ff9d32;
    --cream: #f4f1e9;
    --gray: #a9b1ad;
    --dark-gray: #151b19;
    --border: rgba(255, 255, 255, .12);

    background: var(--green-deep);
    color: #fff;
    font-family: "Inter", sans-serif;
    overflow: hidden;
}

.services-container {
    width: min(1240px, calc(100% - 60px));
    margin: auto;
}


/* =========================================================
   HERO
========================================================= */

.services-hero {
    position: relative;
    min-height: 760px;
    display: flex;
    align-items: center;
    overflow: hidden;
    background:
        radial-gradient(circle at 75% 50%, rgba(245, 130, 11, .14), transparent 25%),
        var(--green-deep);
}

.hero-bg {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(90deg,
            rgba(4, 22, 18, .98) 0%,
            rgba(4, 22, 18, .90) 45%,
            rgba(4, 22, 18, .48) 100%),
        url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=85") center / cover no-repeat;

    opacity: .8;
}

.hero-grid {
    position: absolute;
    inset: 0;

    background-image:
        linear-gradient(rgba(255, 255, 255, .035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, .035) 1px, transparent 1px);

    background-size: 70px 70px;

    mask-image: linear-gradient(to right,
            transparent,
            black 30%,
            black 80%,
            transparent);
}

.hero-overlay {
    position: absolute;
    width: 650px;
    height: 650px;
    right: -180px;
    top: 40px;

    border-radius: 50%;

    background:
        radial-gradient(circle,
            rgba(245, 130, 11, .24) 0,
            rgba(245, 130, 11, .09) 30%,
            transparent 65%);

    filter: blur(5px);
}

.hero-inner {
    position: relative;
    z-index: 3;
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    align-items: center;
    gap: 40px;
}

.hero-content {
    padding: 80px 0;
}

.eyebrow {
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--orange);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 3px;
}

.eyebrow span {
    width: 38px;
    height: 2px;
    background: var(--orange);
    display: inline-block;
}

.hero-content h1 {
    margin: 25px 0;

    font-family: "Space Grotesk", sans-serif;
    font-size: clamp(58px, 7vw, 98px);
    line-height: .92;
    letter-spacing: -5px;
    font-weight: 500;
    color: #fff;
}

.hero-content h1 strong {
    display: block;

    color: var(--orange);
    font-weight: 700;
}

.hero-content>p {
    max-width: 680px;

    color: #d5ddda;
    font-size: 17px;
    line-height: 1.85;
}

.hero-actions {
    display: flex;
    gap: 14px;
    margin-top: 38px;
}

.primary-button,
.secondary-button {
    min-height: 54px;
    padding: 0 25px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    text-decoration: none;

    font-size: 13px;
    font-weight: 800;
    letter-spacing: .5px;

    transition: .3s ease;
}

.primary-button {
    background: var(--orange);
    color: #111;
}

.primary-button:hover {
    background: #fff;
    color: #111;
    transform: translateY(-3px);
}

.secondary-button {
    border: 1px solid rgba(255, 255, 255, .3);
    color: #fff;
}

.secondary-button:hover {
    border-color: var(--orange);
    color: var(--orange);
}

.hero-stats {
    display: flex;
    gap: 45px;
    margin-top: 65px;
}

.hero-stats div {
    position: relative;
}

.hero-stats div:not(:last-child)::after {
    content: "";
    position: absolute;

    width: 1px;
    height: 40px;

    right: -23px;
    top: 5px;

    background: rgba(255, 255, 255, .18);
}

.hero-stats strong {
    display: block;

    font-family: "Space Grotesk", sans-serif;
    font-size: 32px;
    color: #fff;
}

.hero-stats strong span {
    color: var(--orange);
}

.hero-stats small {
    color: #8f9d98;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
}


/* =========================================================
   HERO VISUAL
========================================================= */

.hero-visual {
    position: relative;

    width: 560px;
    height: 560px;

    margin-left: auto;
}

.core-circle {
    position: absolute;

    width: 220px;
    height: 220px;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background:
        radial-gradient(circle at 35% 30%, #ffae4c, #d96700 45%, #062219 72%);

    box-shadow:
        0 0 80px rgba(245, 130, 11, .3),
        inset 0 0 50px rgba(255, 255, 255, .15);
}

.core-inner {
    width: 145px;
    height: 145px;

    border-radius: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #08271e;

    border: 1px solid rgba(255, 255, 255, .15);

    box-shadow:
        inset 0 0 40px rgba(0, 0, 0, .6),
        0 0 30px rgba(0, 0, 0, .4);
}

.core-inner span {
    font-family: "Space Grotesk";
    font-size: 55px;
    font-weight: 700;
    color: #fff;
}

.core-inner small {
    color: var(--orange);
    font-size: 9px;
    letter-spacing: 3px;
}

.visual-ring {
    position: absolute;

    left: 50%;
    top: 50%;

    border: 1px solid rgba(245, 130, 11, .25);
    border-radius: 50%;
}

.ring-one {
    width: 330px;
    height: 330px;

    transform: translate(-50%, -50%) rotate(25deg);
    border-top-color: var(--orange);

    animation: rotateRing 14s linear infinite;
}

.ring-two {
    width: 430px;
    height: 430px;

    transform: translate(-50%, -50%) rotate(-20deg);
    border-right-color: rgba(255, 255, 255, .4);

    animation: rotateRingReverse 20s linear infinite;
}

.ring-three {
    width: 530px;
    height: 530px;

    transform: translate(-50%, -50%);

    border-style: dashed;
    opacity: .35;

    animation: rotateRing 28s linear infinite;
}

@keyframes rotateRing {
    from {
        transform: translate(-50%, -50%) rotate(0);
    }

    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

@keyframes rotateRingReverse {
    from {
        transform: translate(-50%, -50%) rotate(360deg);
    }

    to {
        transform: translate(-50%, -50%) rotate(0);
    }
}

.floating-card {
    position: absolute;

    z-index: 4;

    display: flex;
    align-items: center;
    gap: 12px;

    padding: 14px 18px;

    background: rgba(9, 31, 25, .88);
    border: 1px solid rgba(255, 255, 255, .15);

    backdrop-filter: blur(15px);

    box-shadow: 0 20px 50px rgba(0, 0, 0, .35);

    animation: floating 4s ease-in-out infinite;
}

.floating-card .icon {
    width: 38px;
    height: 38px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(245, 130, 11, .12);
    color: var(--orange);

    font-size: 18px;
}

.floating-card strong {
    display: block;
    color: #fff;
    font-size: 11px;
    letter-spacing: 1px;
}

.floating-card small {
    display: block;
    margin-top: 3px;
    color: #84918d;
    font-size: 10px;
}

.card-data {
    left: 0;
    top: 100px;
}

.card-security {
    right: 0;
    top: 190px;
    animation-delay: 1s;
}

.card-analytics {
    left: 35px;
    bottom: 70px;
    animation-delay: 2s;
}

@keyframes floating {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.connection-dot {
    position: absolute;

    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: var(--orange);

    box-shadow: 0 0 20px var(--orange);

    animation: pulse 2s infinite;
}

.dot-one {
    left: 22%;
    top: 27%;
}

.dot-two {
    right: 16%;
    top: 35%;
    animation-delay: .6s;
}

.dot-three {
    right: 27%;
    bottom: 18%;
    animation-delay: 1.2s;
}

@keyframes pulse {

    0%,
    100% {
        opacity: .4;
        transform: scale(.8);
    }

    50% {
        opacity: 1;
        transform: scale(1.4);
    }
}


/* =========================================================
   INTRO
========================================================= */

.services-intro {
    background: var(--cream);
    color: #14231e;
    padding: 50px 0;
}

.intro-grid {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 70px;
}

.intro-label {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 2px;
    color: #66716d;
}

.intro-label span {
    display: block;

    margin-bottom: 25px;

    font-family: "Space Grotesk";
    font-size: 65px;
    line-height: .8;

    color: var(--orange);
}

.intro-content {
    max-width: 800px;
}

.intro-content h2 {
    margin: 0 0 25px;

    font-family: "Space Grotesk";
    font-size: clamp(42px, 5vw, 72px);
    line-height: 1;
    letter-spacing: -3px;
}

.intro-content h2 em {
    color: var(--orange);
    font-style: normal;
}

.intro-content p {
    max-width: 700px;

    color: #68736e;
    font-size: 17px;
    line-height: 1.8;
}


/* =========================================================
   SERVICE SECTION
========================================================= */

.service-section {
    background: var(--green);
    padding: 75px 0 140px;
}

.section-top {
    display: grid;
    grid-template-columns: 1fr 450px;
    gap: 80px;

    align-items: end;

    margin-bottom: 80px;
}

.dark-eyebrow {
    color: var(--orange);
}

.section-top h2 {
    margin: 20px 0 0;

    font-family: "Space Grotesk";
    font-size: clamp(42px, 5vw, 68px);
    line-height: 1;
    letter-spacing: -3px;
}

.section-top h2 strong {
    display: block;
    color: var(--orange);
}

.section-top>p {
    color: #aab8b2;
    line-height: 1.8;
    margin: 0;
}


/* =========================================================
   SERVICE CARD
========================================================= */

.service-card {
    display: grid;
    grid-template-columns: 46% 54%;

    min-height: 590px;

    margin-bottom: 35px;

    background: #09271f;

    border: 1px solid rgba(255, 255, 255, .1);

    overflow: hidden;

    transition: .4s ease;
}

.service-card:hover {
    border-color: rgba(245, 130, 11, .6);

    transform: translateY(-5px);

    box-shadow:
        0 30px 80px rgba(0, 0, 0, .25);
}

.service-card.reverse {
    grid-template-columns: 54% 46%;
}

.service-card.reverse .service-image {
    order: 2;
}

.service-card.reverse .service-info {
    order: 1;
}

.service-image {
    position: relative;
    min-height: 590px;

    overflow: hidden;

    background-position: center;
    background-size: cover;
}

.service-image::before {
    content: "";

    position: absolute;
    inset: 0;

    z-index: 1;

    background:
        linear-gradient(135deg,
            rgba(4, 22, 18, .85),
            rgba(4, 22, 18, .18),
            rgba(245, 130, 11, .15));
}

.image-overlay {
    position: absolute;
    inset: 0;

    z-index: 2;

    background:
        linear-gradient(to top,
            rgba(3, 17, 13, .95),
            transparent 60%);
}

.availability-image {
    background-image:
        url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=85");
}

.security-image {
    background-image:
        url("https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=85");
}

.analytics-image {
    background-image:
        url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85");
}

.consulting-image {
    background-image:
        url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85");
}

.service-number {
    position: absolute;

    z-index: 5;

    top: 30px;
    left: 32px;

    font-family: "Space Grotesk";
    font-size: 18px;
    font-weight: 700;

    color: var(--orange);
}

.service-image-content {
    position: absolute;

    z-index: 5;

    left: 38px;
    bottom: 40px;
}

.service-image-content span {
    display: block;

    margin-bottom: 6px;

    color: var(--orange);

    font-size: 11px;
    font-weight: 800;
    letter-spacing: 3px;
}

.service-image-content strong {
    display: block;

    font-family: "Space Grotesk";
    font-size: clamp(35px, 4vw, 58px);
    line-height: .95;

    color: #fff;
}

.image-status,
.security-status,
.analytics-status,
.consulting-status {
    position: absolute;

    z-index: 6;

    top: 28px;
    right: 28px;

    padding: 9px 13px;

    background: rgba(4, 22, 18, .75);
    border: 1px solid rgba(255, 255, 255, .16);

    color: #c7d2ce;

    font-size: 9px;
    letter-spacing: 1.5px;
}

.image-status i {
    color: #54d27b;
    font-size: 7px;
    margin-right: 7px;
}


/* =========================================================
   SECURITY VISUAL
========================================================= */

.security-shield {
    position: absolute;

    z-index: 4;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -55%);

    width: 180px;
    height: 210px;

    display: flex;
    align-items: center;
    justify-content: center;

    clip-path: polygon(50% 0,
            92% 15%,
            84% 70%,
            50% 100%,
            16% 70%,
            8% 15%);

    background:
        linear-gradient(135deg,
            rgba(245, 130, 11, .95),
            rgba(9, 48, 37, .9));

    box-shadow: 0 0 70px rgba(245, 130, 11, .25);
}

.security-shield::after {
    content: "";

    position: absolute;

    inset: 12px;

    clip-path: inherit;

    background: var(--green-dark);
}

.security-shield i {
    position: relative;
    z-index: 2;

    font-size: 70px;
    color: var(--orange);
}

.security-status {
    color: #75df95;
}


/* =========================================================
   ANALYTICS VISUAL
========================================================= */

.analytics-chart {
    position: absolute;

    z-index: 4;

    left: 50%;
    top: 47%;

    transform: translate(-50%, -50%);

    width: 270px;
    height: 190px;

    display: flex;
    align-items: end;
    gap: 12px;

    padding: 20px;

    background: rgba(5, 27, 21, .8);

    border: 1px solid rgba(255, 255, 255, .13);

    box-shadow: 0 30px 70px rgba(0, 0, 0, .3);
}

.chart-bar {
    flex: 1;

    background:
        linear-gradient(to top,
            var(--orange),
            #ffbd70);

    box-shadow: 0 0 20px rgba(245, 130, 11, .2);

    animation: chartPulse 3s ease-in-out infinite;
}

.bar-one {
    height: 35%;
}

.bar-two {
    height: 52%;
    animation-delay: .2s;
}

.bar-three {
    height: 42%;
    animation-delay: .4s;
}

.bar-four {
    height: 70%;
    animation-delay: .6s;
}

.bar-five {
    height: 60%;
    animation-delay: .8s;
}

.bar-six {
    height: 90%;
    animation-delay: 1s;
}

@keyframes chartPulse {

    0%,
    100% {
        opacity: .65;
    }

    50% {
        opacity: 1;
    }
}

.analytics-status i {
    color: var(--orange);
    margin-right: 7px;
}


/* =========================================================
   CONSULTING VISUAL
========================================================= */

.consulting-network {
    position: absolute;

    z-index: 4;

    left: 50%;
    top: 45%;

    width: 280px;
    height: 230px;

    transform: translate(-50%, -50%);
}

.network-node {
    position: absolute;

    width: 58px;
    height: 58px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: #092b21;

    border: 1px solid var(--orange);

    color: var(--orange);

    box-shadow: 0 0 25px rgba(245, 130, 11, .18);

    z-index: 3;
}

.node-center {
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    width: 75px;
    height: 75px;

    background: var(--orange);
    color: #092b21;
}

.node-top {
    left: 50%;
    top: 0;

    transform: translateX(-50%);
}

.node-left {
    left: 0;
    top: 58%;

    transform: translateY(-50%);
}

.node-right {
    right: 0;
    top: 58%;

    transform: translateY(-50%);
}

.network-line {
    position: absolute;

    height: 1px;

    background: var(--orange);

    opacity: .5;

    transform-origin: left center;
}

.line-top {
    width: 100px;
    left: 50%;
    top: 32%;

    transform: rotate(90deg);
}

.line-left {
    width: 120px;
    left: 28%;
    top: 65%;

    transform: rotate(20deg);
}

.line-right {
    width: 120px;
    left: 48%;
    top: 65%;

    transform: rotate(-20deg);
}

.consulting-status {
    color: var(--orange);
}


/* =========================================================
   SERVICE INFO
========================================================= */

.service-info {
    padding: 65px 60px;

    display: flex;
    flex-direction: column;
    justify-content: center;
}

.service-tag {
    color: var(--orange);

    font-size: 10px;
    font-weight: 800;

    letter-spacing: 2.5px;
}

.service-info h3 {
    margin: 15px 0 20px;

    color: #fff;

    font-family: "Space Grotesk";
    font-size: clamp(36px, 4vw, 58px);
    line-height: 1;

    letter-spacing: -2px;
}

.service-info>p {
    margin: 0 0 30px;

    color: #aebbb6;

    font-size: 15px;
    line-height: 1.85;
}

.service-features {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 12px 20px;

    margin-bottom: 35px;
}

.service-features div {
    display: flex;
    align-items: flex-start;
    gap: 10px;

    color: #e2e9e6;

    font-size: 12px;
    line-height: 1.5;
}

.service-features i {
    flex-shrink: 0;

    color: var(--orange);

    font-size: 17px;
}

.service-link {
    align-self: flex-start;

    display: inline-flex;
    align-items: center;
    gap: 15px;

    color: #fff;

    font-size: 12px;
    font-weight: 800;
    letter-spacing: .7px;

    text-decoration: none;

    border-bottom: 1px solid rgba(255, 255, 255, .25);

    padding-bottom: 10px;

    transition: .3s ease;
}

.service-link span {
    color: var(--orange);
    font-size: 20px;
}

.service-link:hover {
    color: var(--orange);
    border-color: var(--orange);
}


/* =========================================================
   JOURNEY
========================================================= */

.journey-section {
    position: relative;

    padding: 70px 0;

    overflow: hidden;

    background:
        radial-gradient(circle at 70% 50%,
            rgba(245, 130, 11, .18),
            transparent 35%),
        #061d17;
}

.journey-grid {
    position: absolute;
    inset: 0;

    background-image:
        linear-gradient(rgba(255, 255, 255, .035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, .035) 1px, transparent 1px);

    background-size: 65px 65px;

    opacity: .6;
}

.journey-content {
    position: relative;
    z-index: 2;

    max-width: 800px;
}

.journey-content h2 {
    margin: 25px 0 20px;

    font-family: "Space Grotesk";
    font-size: clamp(50px, 7vw, 92px);
    line-height: .9;
    letter-spacing: -5px;
}

.journey-content h2 strong {
    display: block;
    color: var(--orange);
}

.journey-content p {
    color: #b7c3be;
    font-size: 20px;
}

.journey-content p em {
    color: #fff;
    font-style: normal;
}

.journey-button {
    display: inline-flex;
    align-items: center;
    gap: 18px;

    margin-top: 25px;

    padding: 16px 25px;

    background: var(--orange);
    color: #111;

    text-decoration: none;

    font-size: 12px;
    font-weight: 800;

    transition: .3s ease;
}

.journey-button:hover {
    background: #fff;
    transform: translateY(-3px);
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 1100px) {

    .hero-inner {
        grid-template-columns: 1fr;
    }

    .hero-content {
        padding: 100px 0 30px;
    }

    .hero-visual {
        width: 480px;
        height: 480px;

        margin: 0 auto 70px;
    }

    .service-card,
    .service-card.reverse {
        grid-template-columns: 1fr;
    }

    .service-card.reverse .service-image,
    .service-card.reverse .service-info {
        order: initial;
    }

    .service-image {
        min-height: 500px;
    }

    .section-top {
        grid-template-columns: 1fr;
        gap: 25px;
    }
}


@media (max-width: 700px) {

    .services-container {
        width: min(100% - 32px, 1240px);
    }

    .services-hero {
        min-height: auto;
    }

    .hero-content {
        padding: 75px 0 20px;
    }

    .hero-content h1 {
        font-size: 55px;
        letter-spacing: -3px;
    }

    .hero-content>p {
        font-size: 14px;
        line-height: 1.7;
    }

    .hero-actions {
        flex-direction: column;
        align-items: stretch;
    }

    .primary-button,
    .secondary-button {
        width: 100%;
    }

    .hero-stats {
        gap: 25px;
        margin-top: 45px;
    }

    .hero-stats strong {
        font-size: 25px;
    }

    .hero-stats small {
        font-size: 8px;
    }

    .hero-stats div:not(:last-child)::after {
        right: -13px;
    }

    .hero-visual {
        width: 330px;
        height: 330px;

        margin-top: 30px;
    }

    .core-circle {
        width: 135px;
        height: 135px;
    }

    .core-inner {
        width: 90px;
        height: 90px;
    }

    .core-inner span {
        font-size: 32px;
    }

    .core-inner small {
        font-size: 6px;
    }

    .ring-one {
        width: 200px;
        height: 200px;
    }

    .ring-two {
        width: 270px;
        height: 270px;
    }

    .ring-three {
        width: 325px;
        height: 325px;
    }

    .floating-card {
        padding: 9px 11px;
    }

    .floating-card .icon {
        width: 30px;
        height: 30px;
        font-size: 14px;
    }

    .floating-card strong {
        font-size: 8px;
    }

    .floating-card small {
        font-size: 8px;
    }

    .card-data {
        left: -5px;
        top: 45px;
    }

    .card-security {
        right: -5px;
        top: 110px;
    }

    .card-analytics {
        left: 0;
        bottom: 20px;
    }

    .services-intro {
        padding: 75px 0;
    }

    .intro-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .intro-label span {
        font-size: 45px;
    }

    .intro-content h2 {
        font-size: 43px;
        letter-spacing: -2px;
    }

    .intro-content p {
        font-size: 14px;
    }

    .service-section {
        padding: 80px 0;
    }

    .section-top {
        margin-bottom: 50px;
    }

    .section-top h2 {
        font-size: 43px;
        letter-spacing: -2px;
    }

    .service-card {
        margin-bottom: 22px;
    }

    .service-image {
        min-height: 390px;
    }

    .service-info {
        padding: 38px 25px 45px;
    }

    .service-info h3 {
        font-size: 38px;
    }

    .service-info>p {
        font-size: 13px;
    }

    .service-features {
        grid-template-columns: 1fr;
    }

    .service-image-content {
        left: 25px;
        bottom: 28px;
    }

    .service-image-content strong {
        font-size: 38px;
    }

    .analytics-chart {
        width: 220px;
        height: 160px;
    }

    .security-shield {
        width: 135px;
        height: 165px;
    }

    .security-shield i {
        font-size: 52px;
    }

    .consulting-network {
        transform: translate(-50%, -50%) scale(.8);
    }

    .journey-section {
        padding: 100px 0;
    }

    .journey-content h2 {
        font-size: 55px;
        letter-spacing: -3px;
    }

}
</style>