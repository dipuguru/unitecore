<template>

    <main class="contact-page">

        <HeaderSection />

        <!-- =====================================================
             HERO
        ====================================================== -->

        <section class="contact-hero">

            <div class="hero-grid"></div>
            <div class="hero-glow"></div>

            <div class="contact-container">

                <div class="hero-content">

                    <div class="eyebrow">
                        <span></span>
                        CONTACT UNITECORE
                    </div>

                    <h1>
                        Let's connect
                        <strong>for business.</strong>
                    </h1>

                    <p>
                        Reach out to us for assistance or to learn
                        more about what we offer.
                    </p>

                </div>

                <div class="hero-decoration">
                    <div class="hero-circle"></div>
                    <div class="hero-line"></div>
                </div>

            </div>

        </section>


        <!-- =====================================================
             CONTACT AREA
        ====================================================== -->

        <section class="contact-section">

            <div class="contact-container">

                <div class="contact-grid">

                    <!-- =================================================
                         LEFT CONTACT INFORMATION
                    ================================================== -->

                    <div class="contact-info">

                        <div class="eyebrow dark-eyebrow">
                            <span></span>
                            GET IN TOUCH
                        </div>

                        <h2>
                            Let's start a
                            <strong>conversation.</strong>
                        </h2>

                        <p class="contact-description">
                            Reach out to us for assistance or to learn
                            more about what we offer. Our team is ready
                            to understand your requirement and connect
                            you with the right technology expertise.
                        </p>


                        <!-- CONTACT DETAILS -->

                        <div class="contact-details">

                            <div class="contact-detail">

                                <span class="detail-number">
                                    01
                                </span>

                                <div class="detail-content">

                                    <small>
                                        PHONE
                                    </small>

                                    <a href="tel:8433909001">
                                        8433909001
                                    </a>

                                </div>

                            </div>


                            <div class="contact-detail">

                                <span class="detail-number">
                                    02
                                </span>

                                <div class="detail-content">

                                    <small>
                                        EMAIL
                                    </small>

                                    <a href="mailto:support@unitecore.in">
                                        support@unitecore.in
                                    </a>

                                </div>

                            </div>


                            <div class="contact-detail">

                                <span class="detail-number">
                                    03
                                </span>

                                <div class="detail-content">

                                    <small>
                                        BUSINESS ENQUIRIES
                                    </small>

                                    <span>
                                        Technology &amp;
                                        Enterprise Solutions
                                    </span>

                                </div>

                            </div>

                        </div>


                        <!-- SOCIAL LINKS -->

                        <div class="social-area">

                            <span class="social-title">
                                FOLLOW US ON
                            </span>

                            <div class="social-links">

                                <a href="https://www.facebook.com/home.php" target="_blank" rel="noopener noreferrer">
                                    Facebook
                                    <span>↗</span>
                                </a>

                                <a href="https://www.instagram.com/unitecoregroup/reels/?hl=en" target="_blank"
                                    rel="noopener noreferrer">
                                    Instagram
                                    <span>↗</span>
                                </a>

                                <a href="https://www.linkedin.com/company/14630086/admin/dashboard/" target="_blank"
                                    rel="noopener noreferrer">
                                    LinkedIn
                                    <span>↗</span>
                                </a>

                            </div>

                        </div>

                    </div>


                    <!-- =================================================
                         CONTACT FORM
                    ================================================== -->

                    <div class="contact-form-wrapper">

                        <form class="contact-form" @submit.prevent="submitForm">

                            <div class="form-heading">

                                <span>
                                    WE'D LOVE TO HEAR FROM YOU
                                </span>

                                <h3>
                                    Tell us how we can help.
                                </h3>

                                <p>
                                    Fill in the form and our team
                                    will get back to you.
                                </p>

                            </div>


                            <!-- FIRST / LAST NAME -->

                            <div class="form-row">

                                <div class="form-group">

                                    <label>
                                        FIRST NAME
                                    </label>

                                    <input v-model="form.name" type="text" placeholder="Your first name" required />

                                </div>


                                <div class="form-group">

                                    <label>
                                        LAST NAME
                                    </label>

                                    <input v-model="form.lastName" type="text" placeholder="Your last name" />

                                </div>

                            </div>


                            <!-- EMAIL / PHONE -->

                            <div class="form-row">

                                <div class="form-group">

                                    <label>
                                        EMAIL ADDRESS
                                    </label>

                                    <input v-model="form.email" type="email" placeholder="you@example.com" required />

                                </div>


                                <div class="form-group">

                                    <label>
                                        PHONE
                                    </label>

                                    <input v-model="form.phone" type="tel" placeholder="Your phone number" />

                                </div>

                            </div>


                            <!-- COMPANY -->

                            <div class="form-group">

                                <label>
                                    COMPANY
                                </label>

                                <input v-model="form.company" type="text" placeholder="Company name" />

                            </div>


                            <!-- AREA OF INTEREST -->

                            <div class="form-group">

                                <label>
                                    AREA OF INTEREST
                                </label>

                                <select v-model="form.service">

                                    <option value="" disabled>
                                        Select an area
                                    </option>

                                    <option>
                                        IT Consultancy
                                    </option>

                                    <option>
                                        Data Storage &amp; Backup
                                    </option>

                                    <option>
                                        Data &amp; Network Security
                                    </option>

                                    <option>
                                        Network/System Integration
                                    </option>

                                    <option>
                                        Cloud Solution and Data Center
                                    </option>

                                    <option>
                                        Office Automation
                                    </option>

                                    <option>
                                        Enterprise Technology
                                    </option>

                                    <option>
                                        Other
                                    </option>

                                </select>

                            </div>


                            <!-- MESSAGE -->

                            <div class="form-group">

                                <label>
                                    MESSAGE
                                </label>

                                <textarea v-model="form.message" rows="5"
                                    placeholder="Tell us about your requirement..." required></textarea>

                            </div>


                            <!-- SUBMIT -->

                            <button type="submit" class="submit-button">

                                <span>
                                    GET IN TOUCH
                                </span>

                                <strong>
                                    ↗
                                </strong>

                            </button>


                            <p v-if="submitted" class="success-message">
                                Thank you. Your enquiry has been
                                received. Our team will contact you soon.
                            </p>

                        </form>

                    </div>

                </div>

            </div>

        </section>


        <!-- =====================================================
             OFFICE LOCATIONS
        ====================================================== -->

        <section class="offices-section">

            <div class="contact-container">

                <div class="offices-header">

                    <div>

                        <div class="eyebrow dark-eyebrow">

                            <span></span>

                            OUR OFFICES

                        </div>

                        <h2>
                            We're closer
                            <strong>than you think.</strong>
                        </h2>

                    </div>

                    <p>
                        Connect with UniteCore across our
                        office locations in India.
                    </p>

                </div>


                <div class="offices-grid">

                    <!-- MUMBAI -->

                    <article class="office-card">

                        <div class="office-number">
                            01
                        </div>

                        <div class="office-content">

                            <span>
                                MUMBAI
                            </span>

                            <h3>
                                Juinagar
                            </h3>

                            <p>
                                406, 4th Floor, Ellora Fiesta,
                                Opp. Juinagar Railway Station,
                                Sector 11, Sanpada,
                                Navi Mumbai.
                            </p>

                        </div>

                        <div class="office-arrow">
                            ↗
                        </div>

                    </article>


                    <!-- PUNE -->

                    <article class="office-card">

                        <div class="office-number">
                            02
                        </div>

                        <div class="office-content">

                            <span>
                                PUNE
                            </span>

                            <h3>
                                Bavdhan
                            </h3>

                            <p>
                                Office No. 305, 3rd Floor,
                                Bramha Vantage Tower C,
                                Police Chowk, NDA Pashan Road,
                                Opp. Eeshdan, Ram Nagar,
                                Bavdhan, Pune,
                                Maharashtra 411021.
                            </p>

                        </div>

                        <div class="office-arrow">
                            ↗
                        </div>

                    </article>


                    <!-- BANGALORE -->

                    <article class="office-card">

                        <div class="office-number">
                            03
                        </div>

                        <div class="office-content">

                            <span>
                                BANGALORE
                            </span>

                            <h3>
                                Mahatma Gandhi Road
                            </h3>

                            <p>
                                BHIVE, Mahalakshmi Chambers,
                                29, Mahatma Gandhi Road,
                                Next to Trinity Metro Station,
                                Opp. Kotak Bank,
                                Yellappa Garden,
                                Bengaluru, Karnataka 560001.
                            </p>

                        </div>

                        <div class="office-arrow">
                            ↗
                        </div>

                    </article>

                </div>

            </div>

        </section>


        <!-- =====================================================
             BUSINESS CONNECT
        ====================================================== -->

        <section class="business-section">

            <div class="contact-container">

                <div class="business-card">

                    <div class="business-content">

                        <div class="eyebrow">
                            <span></span>
                            BUSINESS CONNECT
                        </div>

                        <h2>
                            Let's connect
                            <strong>for business.</strong>
                        </h2>

                        <p>
                            Reach out to us for assistance or
                            to learn more about what we offer.
                        </p>

                        <a href="tel:8433909001" class="phone-button">
                            <span>
                                CALL US
                            </span>

                            <strong>
                                8433909001
                            </strong>

                            <b>
                                ↗
                            </b>
                        </a>

                    </div>


                    <div class="business-image">

                        <img src="/images/partnerslogo/Partnership-pana%201.png" alt="UniteCore Business Connect" />

                    </div>

                </div>

            </div>

        </section>


        <!-- =====================================================
             FINAL CTA
        ====================================================== -->

        <section class="contact-bottom">

            <div class="contact-container">

                <div class="bottom-content">

                    <div>

                        <span>
                            UNITECORE PRIVATE LIMITED
                        </span>

                        <h2>
                            Technology starts
                            <strong>
                                with a conversation.
                            </strong>
                        </h2>

                    </div>

                    <a href="mailto:support@unitecore.in" class="email-button">
                        Email Us
                        <span>↗</span>
                    </a>

                </div>

            </div>

        </section>


        <FooterSection />

    </main>

</template>


<script>

import HeaderSection from "../components/HeaderSection.vue";
import FooterSection from "../components/FooterSection.vue";


export default {

    name: "ContactPage",

    components: {

        HeaderSection,
        FooterSection

    },


    data() {

        return {

            submitted: false,

            form: {

                name: "",
                lastName: "",
                email: "",
                phone: "",
                company: "",
                service: "",
                message: ""

            }

        };

    },


    methods: {

        submitForm() {

            this.submitted = true;

            console.log(
                "UniteCore enquiry:",
                this.form
            );

        }

    }

};

</script>


<style scoped>
/* ============================================================
   PAGE
============================================================ */

.contact-page {

    width: 100%;
    min-height: 100vh;

    margin: 0;
    padding: 0;

    background: #ffffff;
    color: #202323;

    overflow-x: hidden;

}


.contact-container {

    width: min(1240px, calc(100% - 70px));

    margin: 0 auto;

}


/* ============================================================
   HERO
============================================================ */

.contact-hero {

    position: relative;

    min-height: 470px;

    display: flex;
    align-items: center;

    overflow: hidden;

    background:
        radial-gradient(circle at 78% 40%,
            rgba(245, 130, 11, .18),
            transparent 32%),
        linear-gradient(120deg,
            #111315 0%,
            #111315 58%,
            #17362f 100%);

}


.hero-grid {

    position: absolute;

    inset: 0;

    opacity: .045;

    background-image:
        linear-gradient(rgba(255, 255, 255, .25) 1px,
            transparent 1px),
        linear-gradient(90deg,
            rgba(255, 255, 255, .25) 1px,
            transparent 1px);

    background-size: 70px 70px;

}


.hero-glow {

    position: absolute;

    width: 600px;
    height: 600px;

    right: -230px;
    top: 50%;

    transform: translateY(-50%);

    border-radius: 50%;

    background:
        radial-gradient(circle,
            rgba(245, 130, 11, .24),
            rgba(245, 130, 11, .06) 35%,
            transparent 70%);

    filter: blur(15px);

}


.hero-content {

    position: relative;

    z-index: 3;

    max-width: 850px;

    padding: 100px 0;

}


.eyebrow {

    display: flex;

    align-items: center;

    gap: 12px;

    margin-bottom: 22px;

    color: #f5820b;

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 2.5px;

}


.eyebrow span {

    width: 38px;
    height: 1px;

    background: #f5820b;

    box-shadow:
        0 0 12px rgba(245, 130, 11, .6);

}


.hero-content h1 {

    margin: 0;

    max-width: 900px;

    font-size:
        clamp(56px, 7vw, 96px);

    line-height: .95;

    letter-spacing: -5px;

    font-weight: 600;

    color: #ffffff;

}


.hero-content h1 strong {

    display: block;

    color: #f5820b;

}


.hero-content p {

    max-width: 580px;

    margin: 28px 0 0;

    color: #a4a7a5;

    font-size: 15px;

    line-height: 1.8;

}


.hero-decoration {

    position: absolute;

    z-index: 1;

    right: 4%;

    top: 50%;

    width: 330px;
    height: 330px;

    transform: translateY(-50%);

}


.hero-circle {

    width: 100%;
    height: 100%;

    border: 1px solid rgba(245, 130, 11, .28);

    border-radius: 50%;

}


.hero-circle::before {

    content: "";

    position: absolute;

    inset: 35px;

    border: 1px solid rgba(255, 255, 255, .08);

    border-radius: 50%;

}


.hero-line {

    position: absolute;

    top: 50%;
    left: -70px;

    width: 470px;
    height: 1px;

    background:
        linear-gradient(90deg,
            transparent,
            rgba(245, 130, 11, .6),
            transparent);

    transform: rotate(-25deg);

}


/* ============================================================
   CONTACT SECTION
============================================================ */

.contact-section {

    padding: 80px 0;

    background: #f7f7f4;

}


.contact-grid {

    display: grid;

    grid-template-columns:
        minmax(0, .85fr) minmax(0, 1.15fr);

    gap: 70px;

    align-items: start;

}


/* ============================================================
   CONTACT INFORMATION
============================================================ */

.contact-info {

    padding-top: 10px;

}


.dark-eyebrow {

    color: #f5820b;

}


.contact-info h2 {

    margin: 0;

    font-size:
        clamp(42px, 5vw, 64px);

    line-height: .98;

    letter-spacing: -4px;

    font-weight: 600;

    color: #111315;

}


.contact-info h2 strong {

    display: block;

    color: #f5820b;

}


.contact-description {

    max-width: 500px;

    margin: 25px 0 38px;

    color: #737875;

    font-size: 14px;

    line-height: 1.8;

}


/* ============================================================
   CONTACT DETAILS
============================================================ */

.contact-details {

    border-top:
        1px solid #dedfdb;

}


.contact-detail {

    display: grid;

    grid-template-columns:
        40px 1fr;

    gap: 18px;

    padding: 19px 0;

    border-bottom:
        1px solid #dedfdb;

}


.detail-number {

    padding-top: 2px;

    color: #f5820b;

    font-size: 9px;

    font-weight: 700;

    letter-spacing: 2px;

}


.detail-content small {

    display: block;

    margin-bottom: 6px;

    color: #8b8e8b;

    font-size: 8px;

    font-weight: 700;

    letter-spacing: 2px;

}


.detail-content a,
.detail-content span {

    color: #202323;

    font-size: 13px;

    line-height: 1.5;

    text-decoration: none;

}


.detail-content a:hover {

    color: #f5820b;

}


/* ============================================================
   SOCIAL
============================================================ */

.social-area {

    margin-top: 35px;

}


.social-title {

    display: block;

    margin-bottom: 14px;

    color: #8b8e8b;

    font-size: 8px;

    font-weight: 700;

    letter-spacing: 2px;

}


.social-links {

    display: flex;

    flex-wrap: wrap;

    gap: 9px;

}


.social-links a {

    display: inline-flex;

    align-items: center;

    gap: 9px;

    padding: 9px 13px;

    border: 1px solid #dedfdb;

    border-radius: 5px;

    color: #333735;

    background: #ffffff;

    text-decoration: none;

    font-size: 10px;

    transition:
        background .25s ease,
        color .25s ease,
        border-color .25s ease;

}


.social-links a span {

    color: #f5820b;

}


.social-links a:hover {

    border-color: #f5820b;

    color: #f5820b;

}


/* ============================================================
   FORM
============================================================ */

.contact-form-wrapper {

    position: relative;

}


.contact-form {

    padding: 38px;

    border:
        1px solid #dedfdb;

    border-top:
        4px solid #f5820b;

    border-radius: 10px;

    background: #ffffff;

    box-shadow:
        18px 18px 0 #111315;

}


.form-heading {

    margin-bottom: 27px;

}


.form-heading>span {

    color: #f5820b;

    font-size: 8px;

    font-weight: 700;

    letter-spacing: 2px;

}


.form-heading h3 {

    margin: 9px 0 7px;

    color: #111315;

    font-size: 27px;

    font-weight: 600;

    letter-spacing: -1px;

}


.form-heading p {

    margin: 0;

    color: #858985;

    font-size: 12px;

    line-height: 1.6;

}


.form-row {

    display: grid;

    grid-template-columns:
        repeat(2, minmax(0, 1fr));

    gap: 17px;

}


.form-group {

    margin-bottom: 19px;

}


.form-group label {

    display: block;

    margin-bottom: 7px;

    color: #686d69;

    font-size: 8px;

    font-weight: 700;

    letter-spacing: 1.5px;

}


.form-group input,
.form-group select,
.form-group textarea {

    width: 100%;

    box-sizing: border-box;

    padding: 13px 14px;

    border:
        1px solid #dfe1dd;

    border-radius: 5px;

    outline: none;

    color: #202323;

    background: #fafaf8;

    font-family: inherit;

    font-size: 12px;

    transition:
        border-color .25s ease,
        background .25s ease,
        box-shadow .25s ease;

}


.form-group input::placeholder,
.form-group textarea::placeholder {

    color: #a4a7a4;

}


.form-group select {

    color: #656a66;

}


.form-group textarea {

    resize: vertical;

    min-height: 120px;

}


.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {

    border-color: #f5820b;

    background: #ffffff;

    box-shadow:
        0 0 0 3px rgba(245, 130, 11, .08);

}


/* ============================================================
   SUBMIT
============================================================ */

.submit-button {

    width: 100%;

    min-height: 50px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 0 17px;

    border: 0;

    border-radius: 5px;

    cursor: pointer;

    color: #ffffff;

    background: #f5820b;

    font-family: inherit;

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 1.5px;

    transition:
        background .25s ease,
        transform .25s ease;

}


.submit-button strong {

    font-size: 18px;

    font-weight: 400;

}


.submit-button:hover {

    transform: translateY(-2px);

    background: #102e27;

}


.success-message {

    margin: 15px 0 0;

    color: #102e27;

    font-size: 11px;

    line-height: 1.6;

}


/* ============================================================
   OFFICES
============================================================ */

.offices-section {

    padding: 80px 0;

    background: #ffffff;

}


.offices-header {

    display: flex;

    align-items: flex-end;

    justify-content: space-between;

    gap: 50px;

    margin-bottom: 42px;

}


.offices-header h2 {

    margin: 0;

    color: #111315;

    font-size:
        clamp(40px, 5vw, 62px);

    line-height: .98;

    letter-spacing: -4px;

    font-weight: 600;

}


.offices-header h2 strong {

    display: block;

    color: #f5820b;

}


.offices-header>p {

    max-width: 330px;

    margin: 0 0 4px;

    color: #777c78;

    font-size: 13px;

    line-height: 1.7;

}


.offices-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 18px;

}


.office-card {

    position: relative;

    min-height: 270px;

    padding: 25px;

    border:
        1px solid #e0e2de;

    border-radius: 8px;

    background: #f7f7f4;

    transition:
        transform .3s ease,
        border-color .3s ease,
        box-shadow .3s ease;

}


.office-card:hover {

    transform: translateY(-5px);

    border-color: #f5820b;

    box-shadow:
        0 15px 35px rgba(0, 0, 0, .07);

}


.office-number {

    color: #f5820b;

    font-size: 9px;

    font-weight: 700;

    letter-spacing: 2px;

}


.office-content {

    margin-top: 60px;

}


.office-content>span {

    color: #8a8e8a;

    font-size: 8px;

    font-weight: 700;

    letter-spacing: 2px;

}


.office-content h3 {

    margin: 7px 0 13px;

    color: #171918;

    font-size: 22px;

    letter-spacing: -.7px;

}


.office-content p {

    max-width: 300px;

    margin: 0;

    color: #747976;

    font-size: 11px;

    line-height: 1.7;

}


.office-arrow {

    position: absolute;

    right: 22px;

    top: 22px;

    color: #f5820b;

    font-size: 20px;

}


/* ============================================================
   BUSINESS CONNECT
============================================================ */

.business-section {

    padding: 75px 0;

    background: #edf4f1;

}


.business-card {

    min-height: 350px;

    display: grid;

    grid-template-columns:
        1fr .75fr;

    align-items: center;

    overflow: hidden;

    border-radius: 10px;

    background: #102e27;

}


.business-content {

    padding: 55px;

}


.business-content .eyebrow {

    margin-bottom: 20px;

}


.business-content h2 {

    margin: 0;

    color: #ffffff;

    font-size:
        clamp(40px, 5vw, 62px);

    line-height: .98;

    letter-spacing: -4px;

}


.business-content h2 strong {

    display: block;

    color: #f5820b;

}


.business-content p {

    max-width: 420px;

    margin: 22px 0 28px;

    color: rgba(255, 255, 255, .62);

    font-size: 13px;

    line-height: 1.7;

}


.phone-button {

    display: inline-flex;

    align-items: center;

    gap: 14px;

    padding: 13px 16px;

    border:
        1px solid rgba(255, 255, 255, .15);

    border-radius: 5px;

    color: #ffffff;

    background: rgba(255, 255, 255, .05);

    text-decoration: none;

    font-size: 9px;

    letter-spacing: 1px;

}


.phone-button strong {

    color: #f5820b;

    font-size: 12px;

}


.phone-button b {

    color: #f5820b;

    font-size: 15px;

    font-weight: 400;

}


.business-image {

    height: 100%;

    min-height: 350px;

    display: flex;

    align-items: center;

    justify-content: center;

    padding: 30px;

}


.business-image img {

    width: 100%;

    max-width: 360px;

    height: auto;

    display: block;

    object-fit: contain;

}


/* ============================================================
   FINAL CTA
============================================================ */

.contact-bottom {

    padding: 70px 0;

    background: #111315;

}


.bottom-content {

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 40px;

    padding: 48px;

    border:
        1px solid rgba(245, 130, 11, .22);

    border-radius: 9px;

    background:
        radial-gradient(circle at 80% 50%,
            rgba(245, 130, 11, .09),
            transparent 40%),
        #080909;

}


.bottom-content>div>span {

    color: #f5820b;

    font-size: 8px;

    font-weight: 700;

    letter-spacing: 2px;

}


.bottom-content h2 {

    margin: 13px 0 0;

    color: #ffffff;

    font-size:
        clamp(30px, 4vw, 50px);

    line-height: 1;

    letter-spacing: -3px;

    font-weight: 500;

}


.bottom-content h2 strong {

    display: block;

    color: #f5820b;

}


.email-button {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 12px;

    min-width: 135px;

    min-height: 46px;

    padding: 0 20px;

    border-radius: 5px;

    color: #111315;

    background: #f5820b;

    text-decoration: none;

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 1px;

    transition:
        transform .25s ease,
        background .25s ease;

}


.email-button:hover {

    transform: translateY(-3px);

    color: #ffffff;

    background: #102e27;

}


.email-button span {

    font-size: 16px;

}


/* ============================================================
   RESPONSIVE
============================================================ */

@media (max-width: 1050px) {

    .hero-decoration {

        right: -90px;

        opacity: .55;

    }


    .contact-grid {

        gap: 50px;

    }

}


@media (max-width: 900px) {

    .contact-container {

        width:
            calc(100% - 45px);

    }


    .contact-grid {

        grid-template-columns: 1fr;

        gap: 55px;

    }


    .contact-info {

        max-width: 700px;

    }


    .offices-header {

        align-items: flex-start;

        flex-direction: column;

        gap: 20px;

    }


    .offices-grid {

        grid-template-columns:
            repeat(2, 1fr);

    }


    .business-card {

        grid-template-columns: 1fr;

    }


    .business-image {

        min-height: 260px;

    }

}


@media (max-width: 650px) {

    .contact-container {

        width:
            calc(100% - 32px);

    }


    /* HERO */

    .contact-hero {

        min-height: 420px;

    }


    .hero-content {

        padding: 75px 0;

    }


    .hero-content h1 {

        font-size: 51px;

        letter-spacing: -3px;

    }


    .hero-content p {

        max-width: 100%;

        font-size: 13px;

    }


    .hero-decoration {

        right: -180px;

        opacity: .35;

    }


    /* CONTACT */

    .contact-section {

        padding: 55px 0;

    }


    .contact-info h2 {

        font-size: 43px;

        letter-spacing: -2.5px;

    }


    .contact-form {

        padding: 25px 20px;

        box-shadow:
            10px 10px 0 #111315;

    }


    .form-row {

        grid-template-columns: 1fr;

        gap: 0;

    }


    /* OFFICES */

    .offices-section {

        padding: 55px 0;

    }


    .offices-header h2 {

        font-size: 43px;

        letter-spacing: -2.5px;

    }


    .offices-grid {

        grid-template-columns: 1fr;

    }


    .office-card {

        min-height: 230px;

    }


    .office-content {

        margin-top: 45px;

    }


    /* BUSINESS */

    .business-section {

        padding: 50px 0;

    }


    .business-content {

        padding: 35px 25px;

    }


    .business-content h2 {

        font-size: 43px;

        letter-spacing: -2.5px;

    }


    .business-image {

        min-height: 230px;

        padding: 20px;

    }


    /* CTA */

    .contact-bottom {

        padding: 50px 0;

    }


    .bottom-content {

        flex-direction: column;

        align-items: flex-start;

        padding: 32px 24px;

    }


    .bottom-content h2 {

        font-size: 34px;

        letter-spacing: -2px;

    }


    .email-button {

        width: 100%;

    }

}


@media (max-width: 420px) {

    .hero-content h1 {

        font-size: 45px;

    }


    .contact-info h2,
    .offices-header h2,
    .business-content h2 {

        font-size: 38px;

    }


    .social-links {

        flex-direction: column;

        align-items: stretch;

    }


    .social-links a {

        justify-content: space-between;

    }

}
</style>
