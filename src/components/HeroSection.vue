<template>
  <section class="hero">

    <!-- =========================================
         BACKGROUND VIDEO
    ========================================== -->

    <video class="hero-video" autoplay muted loop playsinline poster="/assets/hero-poster.svg">
      <source src="/videos/unitecore-hero.mp4" type="video/mp4" />
    </video>

    <!-- Dark video overlay -->
    <div class="hero-overlay"></div>

    <!-- Grid -->
    <div class="hero-grid"></div>

    <!-- Decorative glow -->
    <div class="hero-orb hero-orb-one"></div>
    <div class="hero-orb hero-orb-two"></div>


    <!-- =========================================
         MAIN CONTAINER
    ========================================== -->

    <div class="hero-container">

      <!-- =======================================
           LEFT CONTENT
      ======================================== -->

      <div class="hero-content">

        <!-- TAG -->
        <div class="hero-tag">
          <span class="tag-line"></span>

          DATA • SECURITY • ANALYTICS • TECHNOLOGY
        </div>


        <!-- HEADING -->
        <h1>
          Unite Your IT
          <br />

          <span>At Its Core.</span>
        </h1>


        <!-- DESCRIPTION -->
        <p class="hero-description">
          Introducing UniteCore, a leading technology company dedicated
          to helping organizations unlock the full potential of their data.
          We specialize in data availability, data security, and data
          analytics, providing the tools and expertise you need to make
          informed decisions, boost efficiency, and drive meaningful impact.
        </p>


        <!-- ACTIONS -->
        <div class="hero-actions">

          <a href="/assets/UniteCore-Brochure.pdf" target="_blank" rel="noopener noreferrer" class="primary-btn">
            Download Brochure

            <i class="bi bi-arrow-up-right"></i>
          </a>


          <router-link to="/contact" class="secondary-btn">
            Talk With Us

            <i class="bi bi-arrow-right"></i>
          </router-link>

        </div>


        <!-- =====================================
             STATS
        ====================================== -->

        <div class="hero-stats">

          <!-- STAT 1 -->
          <div class="stat">

            <strong>
              250<span>+</span>
            </strong>

            <small>
              Delighted Customers
            </small>

          </div>


          <div class="stat-divider"></div>


          <!-- STAT 2 -->
          <div class="stat">

            <strong>
              750<span>+</span>
            </strong>

            <small>
              Successful Projects
            </small>

          </div>


          <div class="stat-divider"></div>


          <!-- STAT 3 -->
          <div class="stat">

            <strong>
              140<span>+</span>
            </strong>

            <small>
              Support Hours
            </small>

          </div>


          <div class="stat-divider"></div>


          <!-- STAT 4 -->
          <div class="stat">

            <strong>
              75<span>+</span>
            </strong>

            <small>
              Technology Experts
            </small>

          </div>

        </div>

      </div>


      <!-- =========================================
           RIGHT VISUAL
      ========================================== -->

      <div class="hero-visual">

        <!-- Background glow -->
        <div class="visual-glow"></div>


        <!-- =====================================
             MAIN HERO IMAGE
        ====================================== -->

        <div class="hero-main-image">

          <img src="../assets/hero-image.png" alt="UniteCore Technology" />

        </div>


        <!-- =====================================
             ORBITS
        ====================================== -->

        <div class="orbit orbit-one"></div>

        <div class="orbit orbit-two"></div>

        <div class="orbit orbit-three"></div>


        <!-- =====================================
             TECHNOLOGY CARDS
        ====================================== -->

        <!-- DATA AVAILABILITY -->
        <div class="tech-card card-data">

          <div class="tech-icon">
            <i class="bi bi-database-check"></i>
          </div>

          <div>
            <small>DATA</small>

            <strong>
              AVAILABILITY
            </strong>
          </div>

        </div>


        <!-- DATA SECURITY -->
        <div class="tech-card card-security">

          <div class="tech-icon">
            <i class="bi bi-shield-check"></i>
          </div>

          <div>
            <small>DATA</small>

            <strong>
              SECURITY
            </strong>
          </div>

        </div>


        <!-- DATA ANALYTICS -->
        <div class="tech-card card-analytics">

          <div class="tech-icon">
            <i class="bi bi-bar-chart-line"></i>
          </div>

          <div>
            <small>DATA</small>

            <strong>
              ANALYTICS
            </strong>
          </div>

        </div>


        <!-- IT / IOT / OT CONSULTING -->
        <div class="tech-card card-consulting">

          <div class="tech-icon">
            <i class="bi bi-cpu"></i>
          </div>

          <div>
            <small>IT / IoT / OT</small>

            <strong>
              CONSULTING
            </strong>
          </div>

        </div>

      </div>

    </div>


    <!-- =========================================
         SCROLL
    ========================================== -->

    <div class="hero-scroll">

      <span>
        SCROLL TO DISCOVER
      </span>

      <i class="bi bi-arrow-down"></i>

    </div>

  </section>
</template>


<script>
export default {
  name: "HeroSection"
};
</script>


<style scoped>
/* =================================================
   HERO
================================================= */

.hero {
  position: relative;
  min-height: 850px;
  height: 100vh;
  max-height: 980px;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: #102e27;
  color: #ffffff;
}


/* =================================================
   VIDEO
================================================= */

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.65;
  filter: brightness(0.65) contrast(1.15) saturate(0.9);
}


/* =================================================
   VIDEO OVERLAY
================================================= */

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

.hero-overlay::after {
  content: "";
  position: absolute;
  inset: 0;

  background:
    linear-gradient(180deg,
      rgba(0, 0, 0, 0.15),
      transparent 40%,
      rgba(0, 0, 0, 0.35));
}


/* =================================================
   GRID
================================================= */

.hero-grid {
  position: absolute;
  inset: 0;
  z-index: 2;
  opacity: 0.07;

  background-image:
    linear-gradient(rgba(255, 255, 255, 0.4) 1px,
      transparent 1px),
    linear-gradient(90deg,
      rgba(255, 255, 255, 0.4) 1px,
      transparent 1px);

  background-size: 70px 70px;
  pointer-events: none;
}


/* =================================================
   ORBS
================================================= */

.hero-orb {
  position: absolute;
  z-index: 2;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
}

.hero-orb-one {
  width: 450px;
  height: 450px;
  right: 3%;
  top: 5%;
  background: rgba(245, 130, 11, 0.17);
}

.hero-orb-two {
  width: 350px;
  height: 350px;
  left: 30%;
  bottom: -180px;
  background: rgba(76, 130, 108, 0.18);
}


/* =================================================
   CONTAINER
================================================= */

.hero-container {
  position: relative;
  z-index: 5;

  width: min(1240px,
      calc(100% - 40px));

  margin: auto;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 50px;

  align-items: center;
}


/* =================================================
   CONTENT
================================================= */

.hero-content {
  max-width: 680px;
}


/* =================================================
   TAG
================================================= */

.hero-tag {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;

  color: #ffb566;

  font:
    800 10px Inter,
    sans-serif;

  letter-spacing: 0.15em;
}

.tag-line {
  width: 35px;
  height: 2px;
  flex-shrink: 0;
  background: #f5820b;
}


/* =================================================
   HEADING
================================================= */

.hero h1 {
  margin: 0;

  color: #ffffff !important;

  font:
    700 clamp(55px, 6.5vw, 90px) / 0.96 "Space Grotesk",
    sans-serif;

  letter-spacing: -0.06em;
}

.hero h1 span {
  color: #f5820b !important;
}


/* =================================================
   DESCRIPTION
================================================= */

.hero-description {
  max-width: 650px;
  margin: 30px 0;

  color: #e0e9e5;

  font:
    400 15px / 1.8 Inter,
    sans-serif;
}


/* =================================================
   BUTTONS
================================================= */

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.primary-btn,
.secondary-btn {
  min-height: 52px;
  padding: 0 22px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 12px;

  border-radius: 4px;

  font:
    800 12px Inter,
    sans-serif;

  text-decoration: none;

  transition: all 0.3s ease;
}


/* Primary */

.primary-btn {
  color: #ffffff;

  background: #f5820b;

  border: 1px solid #f5820b;

  box-shadow:
    0 10px 30px rgba(245, 130, 11, 0.2);
}

.primary-btn:hover {
  color: #102e27;
  background: #ffffff;
  border-color: #ffffff;
  transform: translateY(-3px);
}


/* Secondary */

.secondary-btn {
  color: #ffffff;

  background: rgba(255, 255, 255, 0.06);

  border: 1px solid rgba(255, 255, 255, 0.3);

  backdrop-filter: blur(12px);
}

.secondary-btn:hover {
  color: #f5820b;

  border-color: #f5820b;

  background: rgba(245, 130, 11, 0.08);

  transform: translateY(-3px);
}


/* =================================================
   STATS
================================================= */

.hero-stats {
  display: flex;
  align-items: center;

  gap: 20px;

  margin-top: 40px;

  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat strong {
  color: #ffffff;

  font:
    700 24px / 1 "Space Grotesk",
    sans-serif;
}

.stat strong span {
  color: #f5820b;
}

.stat small {
  margin-top: 6px;

  color: #aebdb7;

  font:
    700 8px Inter,
    sans-serif;

  text-transform: uppercase;

  letter-spacing: 0.1em;
}

.stat-divider {
  width: 1px;
  height: 35px;

  background: rgba(255, 255, 255, 0.2);
}


/* =================================================
   RIGHT VISUAL
================================================= */

.hero-visual {
  position: relative;

  width: 100%;
  height: 610px;

  display: flex;

  align-items: center;
  justify-content: center;
}


/* =================================================
   VISUAL GLOW
================================================= */

.visual-glow {
  position: absolute;

  width: 460px;
  height: 460px;

  border-radius: 50%;

  background:
    radial-gradient(circle,
      rgba(245, 130, 11, 0.24),
      rgba(245, 130, 11, 0.08) 40%,
      transparent 70%);

  filter: blur(15px);

  z-index: 3;

  animation:
    glowPulse 4s ease-in-out infinite;
}

@keyframes glowPulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.75;
  }

  50% {
    transform: scale(1.08);
    opacity: 1;
  }

}


/* =================================================
   MAIN HERO IMAGE
================================================= */

.hero-main-image {
  position: relative;

  z-index: 8;

  width: 440px;
  height: 440px;

  display: flex;

  align-items: center;
  justify-content: center;

  animation:
    heroImageFloat 5s ease-in-out infinite;
}

.hero-main-image img {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: contain;

  filter:
    drop-shadow(0 0 25px rgba(245, 130, 11, 0.28)) drop-shadow(0 25px 50px rgba(0, 0, 0, 0.35));

  transition:
    transform 0.4s ease,
    filter 0.4s ease;
}

.hero-main-image:hover img {
  transform: scale(1.04);

  filter:
    drop-shadow(0 0 35px rgba(245, 130, 11, 0.45)) drop-shadow(0 30px 60px rgba(0, 0, 0, 0.4));
}

@keyframes heroImageFloat {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

}


/* =================================================
   ORBITS
================================================= */

.orbit {
  position: absolute;

  left: 50%;
  top: 50%;

  border-radius: 50%;

  pointer-events: none;

  z-index: 4;

  animation:
    orbitRotate 20s linear infinite;
}

.orbit-one {
  width: 480px;
  height: 480px;

  border:
    1px solid rgba(245, 130, 11, 0.35);

  transform:
    translate(-50%, -50%) rotate(25deg);
}

.orbit-two {
  width: 340px;
  height: 540px;

  border:
    1px solid rgba(255, 255, 255, 0.13);

  transform:
    translate(-50%, -50%) rotate(60deg);

  animation-duration: 25s;
  animation-direction: reverse;
}

.orbit-three {
  width: 530px;
  height: 260px;

  border:
    1px solid rgba(105, 170, 145, 0.3);

  transform:
    translate(-50%, -50%) rotate(-20deg);

  animation-duration: 30s;
}

@keyframes orbitRotate {

  from {
    transform:
      translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform:
      translate(-50%, -50%) rotate(360deg);
  }

}


/* =================================================
   TECH CARDS
================================================= */

.tech-card {
  position: absolute;

  z-index: 10;

  min-width: 175px;

  padding: 12px 14px;

  display: flex;

  align-items: center;

  gap: 10px;

  background:
    rgba(16, 46, 39, 0.88);

  border:
    1px solid rgba(255, 255, 255, 0.15);

  border-radius: 8px;

  backdrop-filter: blur(15px);

  box-shadow:
    0 20px 45px rgba(0, 0, 0, 0.3);

  transition: all 0.3s ease;
}

.tech-card:hover {
  transform: translateY(-6px);

  border-color: #f5820b;

  box-shadow:
    0 20px 45px rgba(245, 130, 11, 0.18);
}


/* =================================================
   TECH ICON
================================================= */

.tech-icon {
  width: 38px;
  height: 38px;

  flex-shrink: 0;

  display: grid;

  place-items: center;

  border-radius: 7px;

  background:
    rgba(245, 130, 11, 0.12);
}

.tech-icon i {
  color: #f5820b;
  font-size: 17px;
}


/* =================================================
   TECH TEXT
================================================= */

.tech-card small {
  display: block;

  color: #8da29a;

  font:
    700 7px Inter,
    sans-serif;

  letter-spacing: 0.12em;
}

.tech-card strong {
  display: block;

  margin-top: 3px;

  color: #ffffff;

  font:
    800 10px Inter,
    sans-serif;

  letter-spacing: 0.04em;
}


/* =================================================
   CARD POSITIONS
================================================= */

.card-data {
  top: 65px;
  left: 0;

  animation:
    floatCard 4s ease-in-out infinite;
}

.card-security {
  top: 145px;
  right: -5px;

  animation:
    floatCard 4.5s ease-in-out infinite;
}

.card-analytics {
  bottom: 105px;
  left: 20px;

  animation:
    floatCard 5s ease-in-out infinite;
}

.card-consulting {
  bottom: 35px;
  right: 5px;

  animation:
    floatCard 4.2s ease-in-out infinite;
}

@keyframes floatCard {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }

}


/* =================================================
   SCROLL
================================================= */

.hero-scroll {
  position: absolute;

  left: 50%;
  bottom: 25px;

  transform: translateX(-50%);

  z-index: 10;

  display: flex;

  align-items: center;

  gap: 12px;

  color: #899a94;

  font:
    700 8px Inter,
    sans-serif;

  letter-spacing: 0.18em;
}

.hero-scroll i {
  color: #f5820b;

  animation:
    scrollArrow 1.5s ease-in-out infinite;
}

@keyframes scrollArrow {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(5px);
  }

}


/* =================================================
   TABLET
================================================= */

@media (max-width: 1100px) {

  .hero {
    min-height: 1050px;
    height: auto;
    max-height: none;

    padding:
      100px 0 70px;
  }

  .hero-container {
    grid-template-columns: 1fr;

    text-align: center;

    gap: 20px;
  }

  .hero-content {
    margin: 0 auto;
  }

  .hero-tag {
    justify-content: center;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-stats {
    justify-content: center;
  }

  /*
    IMPORTANT:
    No scale transform here.
    The visual gets smaller naturally.
  */

  .hero-visual {
    width: min(100%, 560px);

    height: 540px;

    margin:
      10px auto 0;
  }

  .hero-scroll {
    display: none;
  }

}


/* =================================================
   MOBILE
================================================= */

@media (max-width: 650px) {

  .hero {
    min-height: auto;

    height: auto;

    max-height: none;

    padding:
      95px 0 55px;

    display: block;
  }


  /* -----------------------------------------------
     VIDEO
  ------------------------------------------------ */

  .hero-video {
    opacity: 0.45;

    object-position: center;
  }


  /* -----------------------------------------------
     OVERLAY
  ------------------------------------------------ */

  .hero-overlay {
    background:
      linear-gradient(180deg,
        rgba(16, 46, 39, 0.98) 0%,
        rgba(16, 46, 39, 0.91) 45%,
        rgba(16, 46, 39, 0.97) 100%);
  }


  /* -----------------------------------------------
     GRID
  ------------------------------------------------ */

  .hero-grid {
    opacity: 0.045;

    background-size:
      45px 45px;
  }


  /* -----------------------------------------------
     ORBS
  ------------------------------------------------ */

  .hero-orb-one {
    width: 260px;
    height: 260px;

    right: -120px;
    top: 20%;

    filter: blur(75px);
  }

  .hero-orb-two {
    width: 220px;
    height: 220px;

    left: -100px;
    bottom: 5%;

    filter: blur(75px);
  }


  /* -----------------------------------------------
     CONTAINER
  ------------------------------------------------ */

  .hero-container {

    width:
      calc(100% - 30px);

    display: flex;

    flex-direction: column;

    gap: 0;

    text-align: center;
  }


  /* -----------------------------------------------
     CONTENT
  ------------------------------------------------ */

  .hero-content {
    width: 100%;

    max-width: 100%;

    margin: 0 auto;
  }


  /* -----------------------------------------------
     TAG
  ------------------------------------------------ */

  .hero-tag {

    justify-content: center;

    margin-bottom: 18px;

    font-size: 9px;

    letter-spacing: 0.14em;
  }

  .tag-line {
    width: 25px;
  }


  /* -----------------------------------------------
     HEADING
  ------------------------------------------------ */

  .hero h1 {

    width: 100%;

    font-size:
      clamp(39px, 11vw, 52px);

    line-height:
      0.95;

    letter-spacing:
      -0.055em;

    word-break: normal;
  }


  /* -----------------------------------------------
     DESCRIPTION
  ------------------------------------------------ */

  .hero-description {

    width: 100%;

    max-width: 480px;

    margin:
      22px auto 25px;

    padding:
      0 5px;

    font-size: 13px;

    line-height: 1.75;

    color:
      rgba(224, 233, 229, 0.82);
  }


  /* -----------------------------------------------
     BUTTONS
  ------------------------------------------------ */

  .hero-actions {

    width: 100%;

    display: flex;

    flex-direction: column;

    align-items: stretch;

    gap: 10px;

    margin-top: 5px;
  }


  .primary-btn,
  .secondary-btn {

    width: 100%;

    min-height: 50px;

    padding:
      0 18px;

    font-size: 11px;
  }


  /* -----------------------------------------------
     STATS
  ------------------------------------------------ */

  .hero-stats {

    width: 100%;

    display: grid;

    grid-template-columns:
      repeat(3, 1fr);

    gap: 8px;

    margin-top: 30px;

    justify-content: initial;
  }


  .stat {

    min-width: 0;

    align-items: center;

    text-align: center;
  }


  .stat strong {

    font-size: 20px;
  }


  .stat small {

    max-width: 90px;

    margin-top: 5px;

    font-size: 7px;

    line-height: 1.35;

    text-align: center;
  }


  .stat-divider {
    display: none;
  }


  /* =================================================
     MOBILE VISUAL

     IMPORTANT:
     No transform: scale()
     Everything is resized directly.
  ================================================= */

  .hero-visual {

    width: 100%;

    max-width: 390px;

    height: 390px;

    margin:
      15px auto 0;

    flex-shrink: 0;

    overflow: visible;
  }


  /* -----------------------------------------------
     GLOW
  ------------------------------------------------ */

  .visual-glow {

    width: 280px;

    height: 280px;

    left: 50%;

    top: 50%;

    transform:
      translate(-50%, -50%);

    filter: blur(18px);
  }


  /* -----------------------------------------------
     MAIN IMAGE
  ------------------------------------------------ */

  .hero-main-image {

    position: absolute;

    left: 50%;

    top: 50%;

    width: 250px;

    height: 250px;

    transform:
      translate(-50%, -50%);

    animation:
      mobileHeroFloat 5s ease-in-out infinite;
  }


  .hero-main-image img {

    width: 100%;

    height: 100%;

    object-fit: contain;
  }


  .hero-main-image:hover img {

    transform: none;
  }


  @keyframes mobileHeroFloat {

    0%,
    100% {
      transform:
        translate(-50%, -50%) translateY(0);
    }

    50% {
      transform:
        translate(-50%, -50%) translateY(-7px);
    }

  }


  /* -----------------------------------------------
     ORBITS
  ------------------------------------------------ */

  .orbit-one {

    width: 300px;

    height: 300px;

    left: 50%;

    top: 50%;

    transform:
      translate(-50%, -50%) rotate(25deg);
  }


  .orbit-two {

    width: 220px;

    height: 320px;

    left: 50%;

    top: 50%;

    transform:
      translate(-50%, -50%) rotate(60deg);

    animation-duration:
      25s;
  }


  .orbit-three {

    width: 330px;

    height: 170px;

    left: 50%;

    top: 50%;

    transform:
      translate(-50%, -50%) rotate(-20deg);

    animation-duration:
      30s;
  }


  /* -----------------------------------------------
     TECH CARDS
  ------------------------------------------------ */

  .tech-card {

    min-width: 0;

    width: 130px;

    padding:
      9px 10px;

    gap: 8px;

    border-radius: 7px;

    backdrop-filter:
      blur(12px);
  }


  .tech-icon {

    width: 30px;

    height: 30px;

    border-radius: 6px;
  }


  .tech-icon i {

    font-size: 13px;
  }


  .tech-card small {

    font-size: 6px;

    line-height: 1.2;
  }


  .tech-card strong {

    font-size: 8px;

    line-height: 1.2;
  }


  /* -----------------------------------------------
     MOBILE CARD POSITIONS

     Cards stay completely inside visual.
  ------------------------------------------------ */

  .card-data {

    top: 22px;

    left: 0;

    animation:
      floatCardMobile 4s ease-in-out infinite;
  }


  .card-security {

    top: 80px;

    right: 0;

    animation:
      floatCardMobile 4.5s ease-in-out infinite;
  }


  .card-analytics {

    bottom: 75px;

    left: 0;

    animation:
      floatCardMobile 5s ease-in-out infinite;
  }


  .card-consulting {

    bottom: 18px;

    right: 0;

    animation:
      floatCardMobile 4.2s ease-in-out infinite;
  }


  @keyframes floatCardMobile {

    0%,
    100% {
      transform:
        translateY(0);
    }

    50% {
      transform:
        translateY(-5px);
    }

  }


  /* -----------------------------------------------
     SCROLL
  ------------------------------------------------ */

  .hero-scroll {
    display: none;
  }

}


/* =================================================
   SMALL MOBILE
================================================= */

@media (max-width: 420px) {

  .hero {

    padding:
      88px 0 45px;
  }


  .hero-container {

    width:
      calc(100% - 24px);
  }


  .hero h1 {

    font-size:
      clamp(36px, 11vw, 45px);
  }


  .hero-description {

    font-size: 12px;

    line-height: 1.7;
  }


  .hero-stats {

    grid-template-columns:
      repeat(3, 1fr);

    gap: 5px;

    margin-top: 25px;
  }


  .stat strong {

    font-size: 18px;
  }


  .stat small {

    font-size: 6px;
  }


  /* -----------------------------------------------
     SMALL MOBILE VISUAL
  ------------------------------------------------ */

  .hero-visual {

    width: 100%;

    max-width: 340px;

    height: 345px;

    margin-top: 10px;
  }


  .hero-main-image {

    width: 215px;

    height: 215px;
  }


  .visual-glow {

    width: 240px;

    height: 240px;
  }


  .orbit-one {

    width: 270px;

    height: 270px;
  }


  .orbit-two {

    width: 195px;

    height: 285px;
  }


  .orbit-three {

    width: 295px;

    height: 150px;
  }


  .tech-card {

    width: 112px;

    padding:
      8px 8px;

    gap: 6px;
  }


  .tech-icon {

    width: 27px;

    height: 27px;
  }


  .tech-icon i {

    font-size: 12px;
  }


  .tech-card strong {

    font-size: 7px;
  }


  .tech-card small {

    font-size: 5.5px;
  }


  .card-data {

    top: 18px;

    left: 0;
  }


  .card-security {

    top: 65px;

    right: 0;
  }


  .card-analytics {

    bottom: 65px;

    left: 0;
  }


  .card-consulting {

    bottom: 12px;

    right: 0;
  }

}


/* =================================================
   EXTRA SMALL DEVICES
================================================= */

@media (max-width: 360px) {

  .hero-container {

    width:
      calc(100% - 20px);
  }


  .hero h1 {

    font-size: 35px;
  }


  .hero-main-image {

    width: 195px;

    height: 195px;
  }


  .hero-visual {

    max-width: 315px;

    height: 320px;
  }


  .orbit-one {

    width: 245px;

    height: 245px;
  }


  .orbit-two {

    width: 175px;

    height: 255px;
  }


  .orbit-three {

    width: 270px;

    height: 140px;
  }


  .tech-card {

    width: 104px;

    padding:
      7px;
  }


  .tech-icon {

    width: 25px;

    height: 25px;
  }


  .tech-card strong {

    font-size: 6.5px;
  }


  .tech-card small {

    font-size: 5px;
  }


  .card-data {

    left: -2px;
  }


  .card-security {

    right: -2px;
  }


  .card-analytics {

    left: -2px;
  }


  .card-consulting {

    right: -2px;
  }

}
</style>
