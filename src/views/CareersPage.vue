<template>
    <main class="careers-page">
        <HeaderSection />

        <!-- ==================== HERO ==================== -->
        <section class="careers-hero">
            <div class="hero-background" :style="{ backgroundImage: `url(${careerImage('career-hero.jpg')})` }"></div>

            <div class="hero-overlay"></div>

            <div class="hero-content">
                <span class="hero-kicker">CAREERS AT UNITeCORE</span>

                <h1>
                    Build your career.<br />
                    <em>Build what's next.</em>
                </h1>

                <p>
                    Join a team where technology, ideas and people come together
                    to create meaningful impact.
                </p>

                <a href="#openings" class="hero-btn">
                    Explore Opportunities

                </a>
            </div>

            <div class="hero-scroll">
                <span>SCROLL TO EXPLORE</span>

            </div>
        </section>

        <!-- ==================== LIFE AT UNITeCORE ==================== -->
        <section class="life-section">
            <div class="section-wrap">
                <div class="section-heading">
                    <div class="section-kicker">01 / LIFE AT UNITeCORE</div>

                    <h2>
                        Work with purpose.<br />
                        <em>Grow with people.</em>
                    </h2>

                    <p>
                        At UniteCore, we believe a great workplace is created by people
                        who support one another, share ideas and enjoy building something
                        meaningful together.
                    </p>
                </div>

                <div class="life-gallery">
                    <div class="gallery-item gallery-large">
                        <img :src="careerImage('career-team-1.jpg')" alt="UniteCore team working together" />
                        <span>People first</span>
                    </div>

                    <div class="gallery-item">
                        <img :src="careerImage('career-team-2.jpg')" alt="Indian professionals collaborating" />
                        <span>Collaborate</span>
                    </div>

                    <div class="gallery-item">
                        <img :src="careerImage('career-team-3.jpg')" alt="Professionals working in a modern office" />
                        <span>Create</span>
                    </div>

                    <div class="gallery-item gallery-wide">
                        <img :src="careerImage('career-office.jpg')" alt="Modern workplace" />
                        <span>One team</span>
                    </div>

                    <div class="gallery-item">
                        <img :src="careerImage('career-team-4.jpg')" alt="Team discussion in office" />
                        <span>Connect</span>
                    </div>

                    <div class="gallery-item">
                        <img :src="careerImage('career-team-5.jpg')" alt="Indian colleagues at work" />
                        <span>Grow</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==================== CORE VALUES ==================== -->
        <section class="core-values-section">
            <div class="section-wrap">
                <div class="core-values-intro">
                    <div class="section-kicker">02 / OUR CORE VALUES</div>

                    <h2>
                        What we believe.<br />
                        <em>How we work.</em>
                    </h2>

                    <p>
                        Our values shape the way we work, collaborate and grow. They guide
                        our decisions, strengthen our culture and help us create a workplace
                        where every individual can make a difference.
                    </p>
                </div>

                <div class="core-values-grid">
                    <!-- Value 01 -->
                    <article class="core-value-card">
                        <div class="core-value-image">
                            <img :src="coreValueImages.integrity"
                                alt="Indian professionals discussing work in an office" loading="lazy" />
                            <span class="core-value-number">01</span>
                        </div>

                        <div class="core-value-content">
                            <div class="core-value-icon">
                                <i class="bi bi-shield-check"></i>
                            </div>

                            <h3>Integrity &amp; Trust</h3>

                            <p>
                                We act with honesty, keep our commitments and build relationships
                                based on trust, transparency and respect.
                            </p>
                        </div>
                    </article>

                    <!-- Value 02 -->
                    <article class="core-value-card">
                        <div class="core-value-image">
                            <img :src="coreValueImages.collaboration"
                                alt="Indian colleagues collaborating around a laptop" loading="lazy" />
                            <span class="core-value-number">02</span>
                        </div>

                        <div class="core-value-content">
                            <div class="core-value-icon">
                                <i class="bi bi-people"></i>
                            </div>

                            <h3>Collaboration</h3>

                            <p>
                                We share ideas, listen to different perspectives and work
                                together to achieve better outcomes as one team.
                            </p>
                        </div>
                    </article>

                    <!-- Value 03 -->
                    <article class="core-value-card">
                        <div class="core-value-image">
                            <img :src="coreValueImages.innovation"
                                alt="Diverse professionals brainstorming in a modern workplace" loading="lazy" />
                            <span class="core-value-number">03</span>
                        </div>

                        <div class="core-value-content">
                            <div class="core-value-icon">
                                <i class="bi bi-lightbulb"></i>
                            </div>

                            <h3>Innovation</h3>

                            <p>
                                We stay curious, challenge assumptions and turn better ideas
                                into practical solutions that create real value.
                            </p>
                        </div>
                    </article>

                    <!-- Value 04 -->
                    <article class="core-value-card">
                        <div class="core-value-image">
                            <img :src="coreValueImages.ownership" alt="Indian professionals planning a project together"
                                loading="lazy" />
                            <span class="core-value-number">04</span>
                        </div>

                        <div class="core-value-content">
                            <div class="core-value-icon">
                                <i class="bi bi-person-check"></i>
                            </div>

                            <h3>Ownership</h3>

                            <p>
                                We take responsibility for our work, follow through on our
                                commitments and take pride in the impact we create.
                            </p>
                        </div>
                    </article>

                    <!-- Value 05 -->
                    <article class="core-value-card">
                        <div class="core-value-image">
                            <img :src="coreValueImages.growth" alt="Colleagues learning and working together"
                                loading="lazy" />
                            <span class="core-value-number">05</span>
                        </div>

                        <div class="core-value-content">
                            <div class="core-value-icon">
                                <i class="bi bi-graph-up-arrow"></i>
                            </div>

                            <h3>Growth &amp; Learning</h3>

                            <p>
                                We keep learning, mentor one another and create opportunities
                                for people to develop their skills and careers.
                            </p>
                        </div>
                    </article>

                    <!-- Value 06 -->
                    <article class="core-value-card">
                        <div class="core-value-image">
                            <img :src="coreValueImages.inclusion" alt="Indian workplace colleagues working together"
                                loading="lazy" />
                            <span class="core-value-number">06</span>
                        </div>

                        <div class="core-value-content">
                            <div class="core-value-icon">
                                <i class="bi bi-heart"></i>
                            </div>

                            <h3>Respect &amp; Inclusion</h3>

                            <p>
                                We value every voice and create an environment where people
                                feel respected, supported and confident to contribute.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- ==================== CAREER VIDEO ==================== -->
        <section class="career-video-section">
            <div class="section-wrap">
                <div class="career-video-heading">
                    <div class="section-kicker">03 / OUR CULTURE</div>

                    <h2>
                        More than a workplace.<br />
                        <em>A place to belong.</em>
                    </h2>
                </div>

                <div class="career-video">
                    <video controls playsinline preload="metadata">
                        <source src="../assets/Career-Page.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>

        <!-- ==================== BENEFITS ==================== -->
        <section class="benefits-section">
            <div class="section-wrap">
                <div class="section-heading benefits-heading">
                    <div class="section-kicker">04 / WHY UNITeCORE</div>

                    <h2>
                        Benefits that help<br />
                        <em>you move forward.</em>
                    </h2>

                    <p>
                        We want our people to have the support, flexibility and environment
                        they need to do meaningful work and build a rewarding career.
                    </p>
                </div>

                <div class="benefits-grid">
                    <article class="benefit-card">
                        <span class="benefit-number">01</span>
                        <div class="benefit-icon">
                            <i class="bi bi-graph-up-arrow"></i>
                        </div>
                        <h3>Career Growth</h3>
                        <p>
                            Opportunities to learn, take ownership and grow into bigger
                            responsibilities.
                        </p>
                    </article>

                    <article class="benefit-card">
                        <span class="benefit-number">02</span>
                        <div class="benefit-icon">
                            <i class="bi bi-mortarboard"></i>
                        </div>
                        <h3>Learning &amp; Development</h3>
                        <p>
                            Continuous learning through hands-on experience, knowledge
                            sharing and mentoring.
                        </p>
                    </article>

                    <article class="benefit-card">
                        <span class="benefit-number">03</span>
                        <div class="benefit-icon">
                            <i class="bi bi-people"></i>
                        </div>
                        <h3>Collaborative Culture</h3>
                        <p>
                            Work alongside talented people who believe in teamwork and
                            knowledge sharing.
                        </p>
                    </article>

                    <article class="benefit-card">
                        <span class="benefit-number">04</span>
                        <div class="benefit-icon">
                            <i class="bi bi-lightning-charge"></i>
                        </div>
                        <h3>Meaningful Work</h3>
                        <p>
                            Work on technology solutions that solve real business challenges
                            for customers.
                        </p>
                    </article>

                    <article class="benefit-card">
                        <span class="benefit-number">05</span>
                        <div class="benefit-icon">
                            <i class="bi bi-person-workspace"></i>
                        </div>
                        <h3>Work Environment</h3>
                        <p>
                            A professional and supportive environment where ideas and
                            initiative are encouraged.
                        </p>
                    </article>

                    <article class="benefit-card">
                        <span class="benefit-number">06</span>
                        <div class="benefit-icon">
                            <i class="bi bi-award"></i>
                        </div>
                        <h3>Recognition</h3>
                        <p>
                            We appreciate meaningful contributions and celebrate individual
                            and team achievements.
                        </p>
                    </article>

                    <article class="benefit-card">
                        <span class="benefit-number">07</span>
                        <div class="benefit-icon">
                            <i class="bi bi-chat-square-heart"></i>
                        </div>
                        <h3>Open Communication</h3>
                        <p>
                            An environment where employees can share ideas, feedback and
                            perspectives openly.
                        </p>
                    </article>

                    <article class="benefit-card">
                        <span class="benefit-number">08</span>
                        <div class="benefit-icon">
                            <i class="bi bi-globe2"></i>
                        </div>
                        <h3>Technology Exposure</h3>
                        <p>
                            Exposure to modern technologies, platforms and diverse enterprise
                            requirements.
                        </p>
                    </article>

                    <article class="benefit-card">
                        <span class="benefit-number">09</span>
                        <div class="benefit-icon">
                            <i class="bi bi-stars"></i>
                        </div>
                        <h3>Innovation</h3>
                        <p>
                            Space to experiment, solve problems creatively and contribute
                            new ideas.
                        </p>
                    </article>

                    <article class="benefit-card">
                        <span class="benefit-number">10</span>
                        <div class="benefit-icon">
                            <i class="bi bi-house-heart"></i>
                        </div>
                        <h3>People First</h3>
                        <p>
                            We believe that strong teams are built through respect,
                            inclusion and genuine support.
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <!-- ==================== CURRENT OPENINGS ==================== -->
        <section class="openings-section" id="openings">
            <div class="section-wrap">
                <div class="section-heading openings-heading">
                    <div class="section-kicker">05 / OPEN POSITIONS</div>

                    <h2>
                        Find your next<br />
                        <em>opportunity.</em>
                    </h2>

                    <p>
                        Explore opportunities at UniteCore and take the next step in your
                        professional journey.
                    </p>
                </div>

                <div class="openings-list">
                    <article class="opening-card">
                        <div class="opening-info">
                            <span class="opening-type">FULL TIME</span>
                            <h3>Frontend Developer</h3>
                            <p>
                                Build modern, responsive and high-performance web experiences
                                using contemporary frontend technologies.
                            </p>
                        </div>

                        <div class="opening-meta">
                            <span>
                                <i class="bi bi-geo-alt"></i>
                                Pune
                            </span>

                            <span>
                                <i class="bi bi-briefcase"></i>
                                Engineering
                            </span>
                        </div>

                        <a href="#application" class="opening-btn">
                            Apply Now

                        </a>
                    </article>

                    <article class="opening-card">
                        <div class="opening-info">
                            <span class="opening-type">FULL TIME</span>
                            <h3>Business Development Executive</h3>
                            <p>
                                Build strong customer relationships and identify opportunities
                                to create long-term business value.
                            </p>
                        </div>

                        <div class="opening-meta">
                            <span>
                                <i class="bi bi-geo-alt"></i>
                                Pune
                            </span>

                            <span>
                                <i class="bi bi-briefcase"></i>
                                Business Development
                            </span>
                        </div>

                        <a href="#application" class="opening-btn">
                            Apply Now

                        </a>
                    </article>

                    <article class="opening-card">
                        <div class="opening-info">
                            <span class="opening-type">FULL TIME</span>
                            <h3>IT Support Engineer</h3>
                            <p>
                                Support enterprise technology environments and help customers
                                maintain secure and reliable IT operations.
                            </p>
                        </div>

                        <div class="opening-meta">
                            <span>
                                <i class="bi bi-geo-alt"></i>
                                Pune
                            </span>

                            <span>
                                <i class="bi bi-briefcase"></i>
                                IT Operations
                            </span>
                        </div>

                        <a href="#application" class="opening-btn">
                            Apply Now

                        </a>
                    </article>
                </div>
            </div>
        </section>

        <!-- ==================== EMPLOYEE STORIES ==================== -->
        <section class="testimonials-section">
            <div class="section-wrap">
                <div class="section-heading testimonials-heading">
                    <div class="section-kicker">06 / EMPLOYEE STORIES</div>

                    <h2>
                        Hear it from<br />
                        <em>our people.</em>
                    </h2>

                    <p>
                        Every career journey is different. Here are a few stories from
                        people who are part of the UniteCore journey.
                    </p>
                </div>

                <div class="testimonial-grid">
                    <article class="testimonial-card">
                        <div class="testimonial-top">
                            <div class="testimonial-image">
                                <img :src="poojaImage" alt="Pooja Sanas" />
                            </div>

                            <div>
                                <h3>Pooja Sanas</h3>
                                <span>Account &amp; Finance</span>
                            </div>
                        </div>

                        <div class="quote-icon">
                            <i class="bi bi-quote"></i>
                        </div>

                        <p>
                            UniteCore has given me the opportunity to learn, take
                            responsibility and grow with the organisation.
                        </p>
                    </article>

                    <article class="testimonial-card">
                        <div class="testimonial-top">
                            <div class="testimonial-image">
                                <img :src="girishImage" alt="Girish Rane" />
                            </div>

                            <div>
                                <h3>Girish Rane</h3>
                                <span>Head Of Operational Support</span>
                            </div>
                        </div>

                        <div class="quote-icon">
                            <i class="bi bi-quote"></i>
                        </div>

                        <p>
                            The culture encourages ownership and teamwork. Every challenge
                            becomes an opportunity to learn something new.
                        </p>
                    </article>

                    <article class="testimonial-card">
                        <div class="testimonial-top">
                            <div class="testimonial-image">
                                <img :src="suhasImage" alt="Suhas Kamble" />
                            </div>

                            <div>
                                <h3>Suhas Kamble</h3>
                                <span>Team Member</span>
                            </div>
                        </div>

                        <div class="quote-icon">
                            <i class="bi bi-quote"></i>
                        </div>

                        <p>
                            Working with a supportive team and getting exposure to different
                            technologies has made the journey rewarding.
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <!-- ==================== APPLICATION ==================== -->
        <section class="application-section" id="application">
            <div class="section-wrap">
                <div class="application-card">
                    <div class="application-copy">
                        <div class="section-kicker">07 / JOIN UNITeCORE</div>

                        <h2>
                            Don't see the<br />
                            <em>right role?</em>
                        </h2>

                        <p>
                            We are always interested in meeting talented and motivated
                            people. Share your profile with us and tell us how you can
                            contribute to the UniteCore journey.
                        </p>

                        <div class="application-note">
                            <i class="bi bi-arrow-right"></i>
                            <span>
                                Send us your profile and our team will get in touch when a
                                suitable opportunity becomes available.
                            </span>
                        </div>
                    </div>

                    <form class="career-form">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="career-name">Full Name</label>
                                <input id="career-name" type="text" placeholder="Enter your full name" />
                            </div>

                            <div class="form-group">
                                <label for="career-email">Email Address</label>
                                <input id="career-email" type="email" placeholder="Enter your email address" />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="career-phone">Phone Number</label>
                                <input id="career-phone" type="tel" placeholder="Enter your phone number" />
                            </div>

                            <div class="form-group">
                                <label for="career-role">Interested Role</label>
                                <select id="career-role">
                                    <option value="">Select a role</option>
                                    <option value="frontend-developer">
                                        Frontend Developer
                                    </option>
                                    <option value="business-development">
                                        Business Development Executive
                                    </option>
                                    <option value="it-support">
                                        IT Support Engineer
                                    </option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="career-message">Message</label>
                            <textarea id="career-message" rows="5"
                                placeholder="Tell us a little about yourself..."></textarea>
                        </div>

                        <div class="form-group">
                            <label for="career-resume">Resume</label>

                            <div class="resume-input">
                                <input id="career-resume" type="file" accept=".pdf,.doc,.docx" />

                                <i class="bi bi-cloud-arrow-up"></i>

                                <span>
                                    Upload your resume
                                    <small>PDF, DOC or DOCX</small>
                                </span>
                            </div>
                        </div>

                        <button type="submit" class="career-submit">
                            Submit Application

                        </button>
                    </form>
                </div>
            </div>
        </section>

        <FooterSection />
    </main>
</template>

<script>
import HeaderSection from "../components/HeaderSection.vue";
import FooterSection from "../components/FooterSection.vue";

import poojaImage from "../assets/pooja.jpeg";
import girishImage from "../assets/girish.jpeg";
import suhasImage from "../assets/suhas.jpg";
import collaborationImage from "../assets/collaboration.jpg";
import growthImage from "../assets/growth.jpg";
import inclusionImage from "../assets/inclusion.jpg";

export default {
    name: "CareersPage",

    components: {
        HeaderSection,
        FooterSection,
    },

    data() {
        return {
            poojaImage,
            girishImage,
            suhasImage,

            /*
             * Core Values imagery
             *
             * These are Pexels images and are intentionally kept as
             * external image URLs, matching the existing careerImage()
             * approach used elsewhere on this page.
             */
            coreValueImages: {
                integrity:
                    "https://images.pexels.com/photos/4308105/pexels-photo-4308105.jpeg?auto=compress&cs=tinysrgb&w=1200",

                collaboration: collaborationImage,

                innovation:
                    "https://images.pexels.com/photos/7793688/pexels-photo-7793688.jpeg?auto=compress&cs=tinysrgb&w=1200",

                ownership:
                    "https://images.pexels.com/photos/31786661/pexels-photo-31786661.jpeg?auto=compress&cs=tinysrgb&w=1200",

                growth: growthImage,

                inclusion: inclusionImage,
            },
        };
    },

    methods: {
        careerImage(fileName) {
            const images = {
                "career-hero.jpg":
                    "https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg?auto=compress&cs=tinysrgb&w=1800",

                "career-team-1.jpg":
                    "https://images.pexels.com/photos/7988742/pexels-photo-7988742.jpeg?auto=compress&cs=tinysrgb&w=1400",

                "career-team-2.jpg":
                    "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1400",

                "career-team-3.jpg":
                    "https://images.pexels.com/photos/6804083/pexels-photo-6804083.jpeg?auto=compress&cs=tinysrgb&w=1400",

                "career-office.jpg":
                    "https://images.pexels.com/photos/12899167/pexels-photo-12899167.jpeg?auto=compress&cs=tinysrgb&w=1600",

                "career-team-4.jpg":
                    "https://images.pexels.com/photos/7988747/pexels-photo-7988747.jpeg?auto=compress&cs=tinysrgb&w=1400",

                "career-team-5.jpg":
                    "https://images.pexels.com/photos/12899153/pexels-photo-12899153.jpeg?auto=compress&cs=tinysrgb&w=1400",
            };

            return images[fileName] || images["career-hero.jpg"];
        },
    },
};
</script>

<style scoped>
/* =========================================================
   ROOT
========================================================= */

.careers-page {
    --green: #102e27;
    --green-dark: #0b2520;
    --green-deep: #071c18;
    --green-light: #edf4f1;
    --green-soft: #f5f8f6;
    --ink: #08090b;
    --dark: #111714;
    --white: #ffffff;
    --muted: #68736d;
    --line: #dce5e1;
    --orange: #f88c18;
    --orange-light: #ffb15a;

    background: var(--white);
    color: var(--ink);
    overflow: hidden;
}

.careers-page *,
.careers-page *::before,
.careers-page *::after {
    box-sizing: border-box;
}

.section-wrap {
    width: min(1180px, calc(100% - 48px));
    margin: 0 auto;
}

.section-kicker {
    display: inline-flex;
    align-items: center;
    gap: 10px;

    color: var(--orange);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
}

.section-heading {
    max-width: 720px;
}

.section-heading h2,
.core-values-intro h2,
.career-video-heading h2,
.application-copy h2 {
    margin: 16px 0 22px;
    font-size: clamp(42px, 5vw, 72px);
    line-height: 0.98;
    letter-spacing: -0.045em;
    font-weight: 800;
}

.section-heading h2 em,
.core-values-intro h2 em,
.career-video-heading h2 em,
.application-copy h2 em {
    color: var(--green);
    font-style: normal;
}

.section-heading>p,
.core-values-intro>p {
    max-width: 650px;
    margin: 0;
    color: var(--muted);
    font-size: 17px;
    line-height: 1.8;
}

/* =========================================================
   HERO
========================================================= */

.careers-hero {
    position: relative;
    min-height: 720px;
    display: flex;
    align-items: center;
    isolation: isolate;
    background: var(--green-deep);
    overflow: hidden;
}

.hero-background {
    position: absolute;
    inset: 0;
    z-index: -3;

    background-position: center;
    background-size: cover;

    transform: scale(1.02);
}

.hero-overlay {
    position: absolute;
    inset: 0;
    z-index: -2;

    background:
        linear-gradient(90deg,
            rgba(7, 28, 24, 0.94) 0%,
            rgba(7, 28, 24, 0.82) 38%,
            rgba(7, 28, 24, 0.42) 72%,
            rgba(7, 28, 24, 0.2) 100%),
        linear-gradient(180deg,
            rgba(7, 28, 24, 0.2),
            rgba(7, 28, 24, 0.65));
}

.hero-content {
    width: min(1180px, calc(100% - 48px));
    margin: 0 auto;
    color: var(--white);
    padding-top: 60px;
}

.hero-kicker {
    display: inline-block;
    margin-bottom: 20px;

    color: var(--orange-light);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.18em;
}

.hero-content h1 {
    max-width: 820px;
    margin: 0;

    font-size: clamp(54px, 7vw, 96px);
    line-height: 0.94;
    letter-spacing: -0.055em;
    font-weight: 800;
}

.hero-content h1 em {
    color: var(--orange);
    font-style: normal;
}

.hero-content p {
    max-width: 600px;
    margin: 30px 0 34px;

    color: rgba(255, 255, 255, 0.78);
    font-size: 18px;
    line-height: 1.7;
}

.hero-btn,
.opening-btn,
.career-submit {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    border: 0;
    text-decoration: none;

    background: var(--orange);
    color: var(--white);

    padding: 15px 22px;

    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.02em;

    cursor: pointer;

    transition:
        transform 0.25s ease,
        background 0.25s ease,
        box-shadow 0.25s ease;
}

.hero-btn:hover,
.opening-btn:hover,
.career-submit:hover {
    transform: translateY(-3px);
    background: #ff9e2e;
    box-shadow: 0 14px 30px rgba(248, 140, 24, 0.25);
}

.hero-scroll {
    position: absolute;
    right: 40px;
    bottom: 32px;

    display: flex;
    align-items: center;
    gap: 12px;

    color: rgba(255, 255, 255, 0.7);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.16em;
}

.hero-scroll i {
    color: var(--orange);
    font-size: 17px;
}

/* =========================================================
   LIFE
========================================================= */

.life-section {
    padding: 120px 0;
    background: var(--white);
}

.life-gallery {
    display: grid;
    grid-template-columns: 1.3fr 0.7fr 0.7fr;
    grid-auto-rows: 260px;
    gap: 16px;

    margin-top: 70px;
}

.gallery-item {
    position: relative;
    min-height: 260px;
    overflow: hidden;
    background: var(--green);
}

.gallery-item.gallery-large {
    grid-row: span 2;
}

.gallery-item.gallery-wide {
    grid-column: span 2;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    display: block;

    object-fit: cover;

    transition:
        transform 0.6s ease,
        filter 0.6s ease;
}

.gallery-item::after {
    content: "";

    position: absolute;
    inset: 0;

    background: linear-gradient(180deg,
            transparent 40%,
            rgba(7, 28, 24, 0.8) 100%);
}

.gallery-item:hover img {
    transform: scale(1.06);
    filter: saturate(1.08);
}

.gallery-item span {
    position: absolute;
    z-index: 2;
    left: 20px;
    bottom: 18px;

    color: var(--white);

    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.04em;
}

/* =========================================================
   CORE VALUES
========================================================= */

.core-values-section {
    position: relative;
    padding: 125px 0;

    background:
        radial-gradient(circle at 90% 10%,
            rgba(248, 140, 24, 0.08),
            transparent 28%),
        var(--green-soft);
}

.core-values-intro {
    max-width: 760px;
}

.core-values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;

    margin-top: 65px;
}

.core-value-card {
    position: relative;

    overflow: hidden;

    background: var(--white);
    border: 1px solid var(--line);

    transition:
        transform 0.35s ease,
        box-shadow 0.35s ease,
        border-color 0.35s ease;
}

.core-value-card:hover {
    transform: translateY(-8px);

    border-color: rgba(248, 140, 24, 0.3);

    box-shadow: 0 24px 55px rgba(7, 28, 24, 0.12);
}

.core-value-image {
    position: relative;
    height: 245px;
    overflow: hidden;
    background: var(--green-dark);
}

.core-value-image::after {
    content: "";

    position: absolute;
    inset: 0;

    background:
        linear-gradient(180deg,
            rgba(7, 28, 24, 0.02) 20%,
            rgba(7, 28, 24, 0.55) 100%);
}

.core-value-image img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;

    transition:
        transform 0.6s ease,
        filter 0.6s ease;
}

.core-value-card:hover .core-value-image img {
    transform: scale(1.06);
    filter: saturate(1.08);
}

.core-value-number {
    position: absolute;
    z-index: 3;

    top: 18px;
    right: 18px;

    width: 42px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--orange);
    color: var(--white);

    font-size: 12px;
    font-weight: 800;
}

.core-value-content {
    position: relative;

    padding: 28px 28px 32px;
}

.core-value-icon {
    width: 46px;
    height: 46px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 18px;

    background: var(--green-light);
    color: var(--green);

    font-size: 20px;

    transition:
        background 0.25s ease,
        color 0.25s ease;
}

.core-value-card:hover .core-value-icon {
    background: var(--orange);
    color: var(--white);
}

.core-value-content h3 {
    margin: 0 0 12px;

    color: var(--green-dark);

    font-size: 24px;
    line-height: 1.15;
    letter-spacing: -0.02em;
}

.core-value-content p {
    margin: 0;

    color: var(--muted);

    font-size: 14px;
    line-height: 1.75;
}

/* =========================================================
   CAREER VIDEO
========================================================= */

.career-video-section {
    padding: 125px 0;
    background: var(--white);
}

.career-video-heading {
    margin-bottom: 55px;
}

.career-video {
    position: relative;

    width: 100%;

    overflow: hidden;

    background: var(--green-deep);

    box-shadow: 0 30px 70px rgba(7, 28, 24, 0.18);
}

.career-video video {
    display: block;

    width: 100%;
    max-height: 680px;

    object-fit: cover;
}

/* =========================================================
   BENEFITS
========================================================= */

.benefits-section {
    padding: 125px 0;
    background: var(--green-soft);
}

.benefits-heading {
    margin-bottom: 60px;
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
}

.benefit-card {
    position: relative;

    min-height: 280px;

    padding: 28px 24px;

    background: var(--white);
    border: 1px solid var(--line);

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease,
        border-color 0.3s ease;
}

.benefit-card:hover {
    transform: translateY(-6px);

    border-color: rgba(248, 140, 24, 0.3);

    box-shadow: 0 20px 40px rgba(7, 28, 24, 0.1);
}

.benefit-number {
    position: absolute;
    top: 18px;
    right: 18px;

    color: #bdc9c4;

    font-size: 11px;
    font-weight: 800;
}

.benefit-icon {
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 28px;

    background: var(--green-light);
    color: var(--green);

    font-size: 20px;
}

.benefit-card h3 {
    margin: 0 0 12px;

    color: var(--green-dark);

    font-size: 18px;
    line-height: 1.2;
}

.benefit-card p {
    margin: 0;

    color: var(--muted);

    font-size: 13px;
    line-height: 1.7;
}

/* =========================================================
   OPENINGS
========================================================= */

.openings-section {
    padding: 125px 0;
    background: var(--white);
}

.openings-heading {
    margin-bottom: 60px;
}

.openings-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.opening-card {
    display: grid;
    grid-template-columns: minmax(0, 1.7fr) minmax(200px, 0.8fr) auto;
    align-items: center;
    gap: 35px;

    padding: 32px;

    border: 1px solid var(--line);
    background: var(--white);

    transition:
        transform 0.3s ease,
        border-color 0.3s ease,
        box-shadow 0.3s ease;
}

.opening-card:hover {
    transform: translateX(5px);

    border-color: rgba(248, 140, 24, 0.4);

    box-shadow: 0 18px 40px rgba(7, 28, 24, 0.08);
}

.opening-type {
    display: inline-block;
    margin-bottom: 12px;

    color: var(--orange);

    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.14em;
}

.opening-info h3 {
    margin: 0 0 10px;

    color: var(--green-dark);

    font-size: 24px;
    letter-spacing: -0.02em;
}

.opening-info p {
    max-width: 620px;
    margin: 0;

    color: var(--muted);

    font-size: 14px;
    line-height: 1.65;
}

.opening-meta {
    display: flex;
    flex-direction: column;
    gap: 12px;

    color: var(--muted);

    font-size: 13px;
}

.opening-meta span {
    display: flex;
    align-items: center;
    gap: 9px;
}

.opening-meta i {
    color: var(--orange);
}

/* =========================================================
   TESTIMONIALS
========================================================= */

.testimonials-section {
    padding: 125px 0;
    background: var(--green-soft);
}

.testimonials-heading {
    margin-bottom: 60px;
}

.testimonial-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.testimonial-card {
    position: relative;

    padding: 30px;

    background: var(--white);
    border: 1px solid var(--line);

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
}

.testimonial-card:hover {
    transform: translateY(-7px);
    box-shadow: 0 22px 45px rgba(7, 28, 24, 0.1);
}

.testimonial-top {
    display: flex;
    align-items: center;
    gap: 15px;
}

.testimonial-image {
    width: 62px;
    height: 62px;

    overflow: hidden;

    border-radius: 50%;

    background: var(--green-light);
}

.testimonial-image img {
    width: 100%;
    height: 100%;

    object-fit: cover;
}

.testimonial-top h3 {
    margin: 0 0 4px;

    color: var(--green-dark);

    font-size: 17px;
}

.testimonial-top span {
    color: var(--muted);

    font-size: 11px;
    line-height: 1.4;
}

.quote-icon {
    margin-top: 28px;

    color: var(--orange);

    font-size: 38px;
    line-height: 1;
}

.testimonial-card p {
    margin: 8px 0 0;

    color: var(--muted);

    font-size: 14px;
    line-height: 1.8;
}

/* =========================================================
   APPLICATION
========================================================= */

.application-section {
    padding: 125px 0;

    background:
        radial-gradient(circle at 85% 20%,
            rgba(248, 140, 24, 0.12),
            transparent 30%),
        var(--green-deep);
}

.application-card {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 80px;

    padding: 70px;

    background: var(--white);
}

.application-copy h2 {
    font-size: clamp(44px, 5vw, 68px);
}

.application-copy h2 em {
    color: var(--orange);
}

.application-copy>p {
    max-width: 470px;

    color: var(--muted);

    font-size: 15px;
    line-height: 1.8;
}

.application-note {
    display: flex;
    align-items: flex-start;
    gap: 13px;

    max-width: 470px;

    margin-top: 35px;
    padding-top: 25px;

    border-top: 1px solid var(--line);

    color: var(--muted);

    font-size: 13px;
    line-height: 1.6;
}

.application-note i {
    flex-shrink: 0;

    color: var(--orange);

    font-size: 20px;
}

.career-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-group label {
    color: var(--green-dark);

    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.05em;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;

    border: 1px solid var(--line);

    background: #fbfcfb;
    color: var(--ink);

    padding: 14px 15px;

    outline: none;

    font-family: inherit;
    font-size: 14px;

    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: var(--orange);

    box-shadow: 0 0 0 3px rgba(248, 140, 24, 0.1);
}

.resume-input {
    position: relative;

    display: flex;
    align-items: center;
    gap: 14px;

    min-height: 76px;

    padding: 15px;

    border: 1px dashed #cbd7d2;

    background: #fbfcfb;

    cursor: pointer;
}

.resume-input input {
    position: absolute;
    inset: 0;

    width: 100%;
    height: 100%;

    opacity: 0;

    cursor: pointer;
}

.resume-input>i {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 42px;
    height: 42px;

    background: var(--green-light);
    color: var(--green);

    font-size: 20px;
}

.resume-input span {
    display: flex;
    flex-direction: column;
    gap: 4px;

    color: var(--green-dark);

    font-size: 13px;
    font-weight: 700;
}

.resume-input small {
    color: var(--muted);

    font-size: 11px;
    font-weight: 400;
}

.career-submit {
    width: fit-content;
    margin-top: 4px;
}

/* =========================================================
   RESPONSIVE - 1100
========================================================= */

@media (max-width: 1100px) {
    .benefits-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .core-values-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .opening-card {
        grid-template-columns: 1fr auto;
    }

    .opening-meta {
        grid-column: 1;
        flex-direction: row;
    }

    .opening-btn {
        grid-column: 2;
        grid-row: 1 / span 2;
    }

    .application-card {
        gap: 50px;
        padding: 50px;
    }
}

/* =========================================================
   RESPONSIVE - 950
========================================================= */

@media (max-width: 950px) {
    .careers-hero {
        min-height: 650px;
    }

    .life-section,
    .core-values-section,
    .career-video-section,
    .benefits-section,
    .openings-section,
    .testimonials-section,
    .application-section {
        padding: 95px 0;
    }

    .life-gallery {
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 240px;
    }

    .gallery-item.gallery-large {
        grid-row: span 1;
    }

    .gallery-item.gallery-wide {
        grid-column: span 2;
    }

    .benefits-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .testimonial-grid {
        grid-template-columns: 1fr;
    }

    .application-card {
        grid-template-columns: 1fr;
    }
}

/* =========================================================
   RESPONSIVE - 700
========================================================= */

@media (max-width: 700px) {

    .section-wrap,
    .hero-content {
        width: min(100% - 32px, 1180px);
    }

    .careers-hero {
        min-height: 620px;
    }

    .hero-content h1 {
        font-size: clamp(48px, 14vw, 70px);
    }

    .hero-content p {
        font-size: 16px;
    }

    .hero-scroll {
        display: none;
    }

    .life-section,
    .core-values-section,
    .career-video-section,
    .benefits-section,
    .openings-section,
    .testimonials-section,
    .application-section {
        padding: 75px 0;
    }

    .section-heading h2,
    .core-values-intro h2,
    .career-video-heading h2,
    .application-copy h2 {
        font-size: clamp(40px, 12vw, 58px);
    }

    .life-gallery {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: 240px;
        margin-top: 45px;
    }

    .gallery-item.gallery-wide {
        grid-column: span 1;
    }

    .core-values-grid {
        grid-template-columns: 1fr;
        margin-top: 45px;
    }

    .core-value-image {
        height: 260px;
    }

    .benefits-grid {
        grid-template-columns: 1fr 1fr;
    }

    .opening-card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 22px;
    }

    .opening-meta {
        width: 100%;
        flex-direction: column;
    }

    .opening-btn {
        width: 100%;
    }

    .application-card {
        padding: 32px 24px;
        gap: 45px;
    }

    .form-row {
        grid-template-columns: 1fr;
    }
}

/* =========================================================
   RESPONSIVE - 600
========================================================= */

@media (max-width: 600px) {
    .benefits-grid {
        grid-template-columns: 1fr;
    }

    .benefit-card {
        min-height: auto;
    }

    .core-value-content {
        padding: 24px;
    }

    .career-video video {
        min-height: 260px;
        object-fit: cover;
    }
}

/* =========================================================
   RESPONSIVE - 400
========================================================= */

@media (max-width: 400px) {

    .section-wrap,
    .hero-content {
        width: calc(100% - 28px);
    }

    .careers-hero {
        min-height: 570px;
    }

    .hero-content h1 {
        font-size: 46px;
    }

    .hero-content p {
        font-size: 15px;
    }

    .hero-btn,
    .career-submit {
        width: 100%;
    }

    .application-card {
        padding: 28px 18px;
    }

    .testimonial-card {
        padding: 24px;
    }

    .core-value-image {
        height: 220px;
    }
}
</style>
