<template>
  <section class="availability">

    <!-- Background decoration -->
    <div class="bg-glow glow-orange"></div>
    <div class="bg-glow glow-green"></div>

    <div class="wrap">

      <!-- =====================================================
           LEFT VISUAL
      ====================================================== -->

      <div class="visual">

        <div class="image-card">

          <!-- Real technology image -->
          <div class="image"></div>

          <!-- Dark contrast overlay -->
          <div class="image-overlay"></div>

          <!-- Image grid -->
          <div class="image-grid"></div>

          <!-- Top label -->
          <div class="visual-label">
            <span class="pulse"></span>
            DATA INFRASTRUCTURE
          </div>

          <!-- Floating availability card -->
          <div class="availability-badge">

            <div class="badge-icon">
              <i class="bi bi-database-check"></i>
            </div>

            <div class="badge-content">
              <strong>99.9%</strong>
              <small>DATA RESILIENCE</small>
            </div>

          </div>

          <!-- Bottom status -->
          <div class="system-status">

            <div>
              <span>SYSTEM STATUS</span>
              <strong>OPERATIONAL</strong>
            </div>

            <div class="status-bars">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>

          </div>

        </div>

        <!-- Vertical text -->
        <div class="vertical-label">
          DATA / AVAILABILITY
        </div>

      </div>


      <!-- =====================================================
           RIGHT CONTENT
      ====================================================== -->

      <div class="copy">

        <div class="kicker">
          <span></span>
          02 / KEEP BUSINESS MOVING
        </div>

        <div class="giant">01</div>

        <h2>
          When data matters,
          <br>
          <em>availability matters.</em>
        </h2>

        <p>
          We go beyond simply making your data available. Our team understands
          the nuances of data management and can tailor our services to your
          specific needs. We ensure your data is not only accessible but also
          clean, consistent, and ready for insightful analysis.
        </p>


        <!-- =====================================================
             FEATURE CARDS
        ====================================================== -->

        <div class="checks">

          <div class="check-card">

            <div class="check-icon">
              <i class="bi bi-arrow-repeat"></i>
            </div>

            <div>
              <strong>Backup</strong>
              <span>Reliable recovery</span>
            </div>

          </div>


          <div class="check-card">

            <div class="check-icon">
              <i class="bi bi-diagram-3"></i>
            </div>

            <div>
              <strong>Integration</strong>
              <span>Connected systems</span>
            </div>

          </div>


          <div class="check-card">

            <div class="check-icon">
              <i class="bi bi-database-check"></i>
            </div>

            <div>
              <strong>Data Quality</strong>
              <span>Clean & consistent</span>
            </div>

          </div>

        </div>


        <!-- =====================================================
             SERVICE LIST
        ====================================================== -->

        <div class="service-list">

          <div class="service-item">
            <span>01</span>
            <strong>Data Integration</strong>
            <i class="bi bi-arrow-up-right"></i>
          </div>

          <div class="service-item">
            <span>02</span>
            <strong>Data Transformation</strong>
            <i class="bi bi-arrow-up-right"></i>
          </div>

          <div class="service-item">
            <span>03</span>
            <strong>Data Quality Management</strong>
            <i class="bi bi-arrow-up-right"></i>
          </div>

          <div class="service-item">
            <span>04</span>
            <strong>Data Governance</strong>
            <i class="bi bi-arrow-up-right"></i>
          </div>

          <div class="service-item">
            <span>05</span>
            <strong>Data Warehousing & Data Lake Solutions</strong>
            <i class="bi bi-arrow-up-right"></i>
          </div>

        </div>


        <!-- CTA -->

        <router-link to="/solutions" class="link">
          <span>Explore Data Availability</span>
          <i class="bi bi-arrow-right"></i>
        </router-link>

      </div>

    </div>

  </section>
</template>


<script>
export default {
  name: "DataAvailability"
};
</script>


<style scoped>
/* =========================================================
   MAIN SECTION
========================================================= */

.availability {
  position: relative;
  overflow: hidden;

  padding: 70px 0;

  background:
    radial-gradient(circle at 5% 30%,
      rgba(18, 92, 70, 0.12),
      transparent 30%),
    radial-gradient(circle at 95% 80%,
      rgba(245, 130, 11, 0.10),
      transparent 30%),
    #f3f1eb;

  color: #111;
}


/* =========================================================
   BACKGROUND GLOWS
========================================================= */

.bg-glow {
  position: absolute;

  border-radius: 50%;

  filter: blur(100px);

  pointer-events: none;
}

.glow-orange {
  width: 350px;
  height: 350px;

  right: -150px;
  top: 15%;

  background:
    rgba(245, 130, 11, 0.10);
}

.glow-green {
  width: 300px;
  height: 300px;

  left: -150px;
  bottom: 5%;

  background:
    rgba(15, 95, 72, 0.12);
}


/* =========================================================
   WRAPPER
========================================================= */

.wrap {
  position: relative;
  z-index: 5;

  width:
    min(1240px,
      calc(100% - 42px));

  margin: auto;

  display: grid;

  grid-template-columns:
    minmax(0, 1fr) minmax(0, 1fr);

  gap: 90px;

  align-items: center;
}


/* =========================================================
   VISUAL
========================================================= */

.visual {
  display: flex;

  gap: 18px;

  min-height: 600px;

  align-items: stretch;
}


.image-card {
  position: relative;

  flex: 1;

  overflow: hidden;

  min-height: 600px;

  background:
    #07110d;

  border-radius: 4px;

  box-shadow:
    25px 25px 0 #f5820b;
}


/* =========================================================
   ACTUAL IMAGE
========================================================= */

.image {
  position: absolute;

  inset: 0;

  background-image:
    url("https://nudsowxnijbygcmlcoyv.supabase.co/storage/v1/object/public/content-assets/feed/bb209daf-0f9f-4899-846c-535d8d90d65f/1779203340203.webp");

  background-size: cover;

  background-position: center;

  transform:
    scale(1.03);

  transition:
    transform 1s ease;
}


.image-card:hover .image {
  transform:
    scale(1.09);
}


/* =========================================================
   IMAGE OVERLAY
========================================================= */

.image-overlay {
  position: absolute;

  inset: 0;

  background:
    linear-gradient(180deg,
      rgba(4, 15, 10, 0.15),
      rgba(4, 13, 9, 0.25) 35%,
      rgba(4, 13, 9, 0.88) 100%);

  z-index: 2;
}


/* Orange glow */

.image-overlay::after {
  content: "";

  position: absolute;

  width: 300px;
  height: 300px;

  right: -100px;
  top: 25%;

  border-radius: 50%;

  background:
    rgba(245, 130, 11, 0.20);

  filter: blur(80px);
}


/* =========================================================
   GRID OVER IMAGE
========================================================= */

.image-grid {
  position: absolute;

  inset: 0;

  z-index: 3;

  opacity: 0.14;

  background-image:
    linear-gradient(rgba(255, 255, 255, .3) 1px,
      transparent 1px),
    linear-gradient(90deg,
      rgba(255, 255, 255, .3) 1px,
      transparent 1px);

  background-size:
    50px 50px;

  mask-image:
    linear-gradient(to bottom,
      transparent,
      black 30%,
      black 70%,
      transparent);
}


/* =========================================================
   TOP VISUAL LABEL
========================================================= */

.visual-label {
  position: absolute;

  z-index: 10;

  top: 25px;
  left: 25px;

  display: flex;

  align-items: center;

  gap: 9px;

  padding:
    10px 13px;

  color: #fff;

  background:
    rgba(4, 14, 10, 0.78);

  border:
    1px solid rgba(255, 255, 255, .18);

  backdrop-filter:
    blur(10px);

  font-family:
    "JetBrains Mono",
    monospace;

  font-size: 8px;

  letter-spacing: .13em;
}


.pulse {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background:
    #f5820b;

  box-shadow:
    0 0 8px #f5820b,
    0 0 20px rgba(245, 130, 11, .6);

  animation:
    pulse 1.6s infinite;
}


/* =========================================================
   AVAILABILITY BADGE
========================================================= */

.availability-badge {
  position: absolute;

  z-index: 10;

  left: 30px;
  bottom: 35px;

  display: flex;

  align-items: center;

  gap: 14px;

  padding:
    16px 20px;

  background:
    rgba(255, 255, 255, .96);

  box-shadow:
    0 20px 50px rgba(0, 0, 0, .3);

  backdrop-filter:
    blur(15px);
}


.badge-icon {
  width: 45px;
  height: 45px;

  display: grid;

  place-items: center;

  color: #f5820b;

  background:
    rgba(245, 130, 11, .10);

  border:
    1px solid rgba(245, 130, 11, .25);

  font-size: 20px;
}


.badge-content strong {
  display: block;

  font-family:
    "Space Grotesk",
    sans-serif;

  font-size: 27px;

  line-height: 1;
}


.badge-content small {
  display: block;

  margin-top: 5px;

  color: #747974;

  font-family:
    "Inter",
    sans-serif;

  font-size: 8px;

  font-weight: 800;

  letter-spacing: .14em;
}


/* =========================================================
   SYSTEM STATUS
========================================================= */

.system-status {
  position: absolute;

  z-index: 10;

  right: 25px;
  bottom: 30px;

  display: flex;

  align-items: center;

  gap: 25px;

  padding:
    10px 13px;

  color: #fff;

  background:
    rgba(5, 15, 11, .82);

  border:
    1px solid rgba(255, 255, 255, .12);

  backdrop-filter:
    blur(12px);
}


.system-status span {
  display: block;

  color: #7c8781;

  font-family:
    "JetBrains Mono",
    monospace;

  font-size: 7px;

  letter-spacing: .1em;
}


.system-status strong {
  display: block;

  margin-top: 4px;

  color: #f5820b;

  font-size: 8px;

  letter-spacing: .08em;
}


/* =========================================================
   STATUS BARS
========================================================= */

.status-bars {
  display: flex;

  align-items: flex-end;

  gap: 3px;

  height: 24px;
}


.status-bars i {
  display: block;

  width: 3px;

  background:
    #f5820b;

  box-shadow:
    0 0 7px rgba(245, 130, 11, .6);
}


.status-bars i:nth-child(1) {
  height: 8px;
}

.status-bars i:nth-child(2) {
  height: 13px;
}

.status-bars i:nth-child(3) {
  height: 17px;
}

.status-bars i:nth-child(4) {
  height: 21px;
}

.status-bars i:nth-child(5) {
  height: 15px;
}


/* =========================================================
   VERTICAL LABEL
========================================================= */

.vertical-label {
  writing-mode: vertical-rl;

  transform:
    rotate(180deg);

  display: flex;

  align-items: center;

  justify-content: center;

  color: #858981;

  font-family:
    "JetBrains Mono",
    monospace;

  font-size: 9px;

  font-weight: 700;

  letter-spacing: .2em;
}


/* =========================================================
   CONTENT
========================================================= */

.copy {
  position: relative;

  z-index: 10;
}


.kicker {
  display: flex;

  align-items: center;

  gap: 10px;

  color: #f5820b;

  font-size: 11px;

  font-weight: 800;

  letter-spacing: .16em;
}


.kicker span {
  width: 35px;
  height: 2px;

  background:
    #f5820b;

  box-shadow:
    0 0 12px rgba(245, 130, 11, .5);
}


/* =========================================================
   NUMBER
========================================================= */

.giant {
  margin:
    35px 0 4px;

  color: #ddd8ce;

  font-family:
    "Space Grotesk",
    sans-serif;

  font-size:
    110px;

  font-weight: 700;

  line-height: .8;

  letter-spacing:
    -.08em;
}


/* =========================================================
   HEADING
========================================================= */

.copy h2 {
  margin:
    0 0 25px;

  color: #111;

  font-family:
    "Space Grotesk",
    sans-serif;

  font-size:
    clamp(40px,
      4.5vw,
      61px);

  font-weight: 700;

  line-height: .98;

  letter-spacing: -.055em;
}


.copy h2 em {
  color: #f5820b;

  font-style: normal;
}


/* =========================================================
   DESCRIPTION
========================================================= */

.copy>p {
  max-width: 560px;

  margin: 0;

  color: #676b70;

  font-size: 14px;

  line-height: 1.9;
}


/* =========================================================
   FEATURE CARDS
========================================================= */

.checks {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 10px;

  margin:
    35px 0 30px;
}


.check-card {
  min-height: 105px;

  display: flex;

  flex-direction: column;

  justify-content: space-between;

  padding:
    15px;

  background:
    rgba(255, 255, 255, .7);

  border-top:
    2px solid #111;

  transition:
    .35s ease;
}


.check-card:hover {
  transform:
    translateY(-7px);

  background:
    #fff;

  box-shadow:
    0 15px 35px rgba(0, 0, 0, .08);
}


.check-icon {
  width: 32px;
  height: 32px;

  display: grid;

  place-items: center;

  color: #f5820b;

  font-size: 17px;
}


.check-card strong {
  display: block;

  margin-top: 12px;

  color: #111;

  font-size: 11px;
}


.check-card span {
  display: block;

  margin-top: 4px;

  color: #888;

  font-size: 9px;
}


/* =========================================================
   SERVICE LIST
========================================================= */

.service-list {
  margin-top: 10px;

  border-top:
    1px solid rgba(0, 0, 0, .12);

  border-bottom:
    1px solid rgba(0, 0, 0, .12);
}


.service-item {
  display: grid;

  grid-template-columns:
    35px 1fr 20px;

  align-items: center;

  gap: 10px;

  padding:
    11px 0;

  border-top:
    1px solid rgba(0, 0, 0, .08);

  transition:
    .3s ease;
}


.service-item:first-child {
  border-top: 0;
}


.service-item:hover {
  padding-left: 7px;
}


.service-item span {
  color: #f5820b;

  font-family:
    "JetBrains Mono",
    monospace;

  font-size: 9px;
}


.service-item strong {
  color: #444;

  font-size: 10px;

  font-weight: 700;
}


.service-item i {
  color: #f5820b;

  font-size: 12px;

  transition:
    .3s ease;
}


.service-item:hover i {
  transform:
    translate(3px, -3px);
}


/* =========================================================
   CTA
========================================================= */

.link {
  display: inline-flex;

  align-items: center;

  gap: 10px;

  margin-top: 30px;

  padding-bottom: 9px;

  color: #111;

  text-decoration: none;

  border-bottom:
    1px solid #f5820b;

  font-size: 12px;

  font-weight: 800;

  transition:
    .3s ease;
}


.link i {
  color: #f5820b;

  transition:
    .3s ease;
}


.link:hover {
  color: #f5820b;
}


.link:hover i {
  transform:
    translateX(5px);
}


/* =========================================================
   ANIMATION
========================================================= */

@keyframes pulse {

  0%,
  100% {
    transform: scale(1);

    opacity: 1;
  }

  50% {
    transform: scale(.65);

    opacity: .45;
  }

}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 950px) {

  .availability {
    padding:
      100px 0;
  }

  .wrap {
    grid-template-columns: 1fr;

    gap: 70px;
  }

  .visual {
    min-height: 500px;
  }

  .image-card {
    min-height: 500px;
  }

  .copy {
    max-width: 760px;

    margin: auto;
  }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

  .availability {
    padding:
      80px 0;
  }

  .wrap {
    width:
      calc(100% - 30px);

    gap: 55px;
  }

  .visual {
    min-height: 390px;

    gap: 10px;
  }

  .image-card {
    min-height: 390px;

    box-shadow:
      12px 12px 0 #f5820b;
  }

  .vertical-label {
    font-size: 7px;
  }

  .visual-label {
    top: 15px;
    left: 15px;

    padding:
      8px 10px;

    font-size: 6px;
  }

  .availability-badge {
    left: 15px;
    bottom: 18px;

    padding:
      11px 13px;

    gap: 9px;
  }

  .badge-icon {
    width: 35px;
    height: 35px;

    font-size: 16px;
  }

  .badge-content strong {
    font-size: 21px;
  }

  .badge-content small {
    font-size: 6px;
  }

  .system-status {
    right: 15px;
    bottom: 18px;

    padding:
      8px 9px;

    gap: 12px;
  }

  .system-status span {
    font-size: 5px;
  }

  .system-status strong {
    font-size: 6px;
  }

  .giant {
    font-size: 75px;
  }

  .copy h2 {
    font-size:
      clamp(40px,
        12vw,
        55px);
  }

  .copy>p {
    font-size: 13px;
  }

  .checks {
    grid-template-columns: 1fr;
  }

  .check-card {
    min-height: auto;

    display: grid;

    grid-template-columns:
      42px 1fr;

    align-items: center;
  }

  .check-card strong {
    margin-top: 0;
  }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 400px) {

  .visual {
    min-height: 330px;
  }

  .image-card {
    min-height: 330px;
  }

  .system-status {
    display: none;
  }

  .availability-badge {
    right: 15px;
  }

  .giant {
    font-size: 65px;
  }

}
</style>