<template>
  <section class="solutions-section">

    <div class="solutions-container">

      <!-- LEFT -->
      <div class="solutions-intro">

        <div class="eyebrow">
          OUR CAPABILITIES
        </div>

        <h2>
          Four capabilities.
          <br>
          <span>One connected core.</span>
        </h2>

        <p>
          UniteCore brings together data availability, security,
          analytics and technology consulting into one connected
          ecosystem designed to help organizations move forward.
        </p>

        <router-link to="/services" class="text-link">
          Explore our capabilities
          <i class="bi bi-arrow-up-right"></i>
        </router-link>

      </div>


      <!-- RIGHT -->
      <div class="solution-list">

        <div class="solution-item">

          <div class="solution-image">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=90"
              alt="Data availability" />
          </div>

          <div class="solution-content">
            <span>01</span>
            <h3>Data Availability</h3>
            <p>
              Keep critical business data available,
              reliable and ready when you need it.
            </p>
          </div>

          <i class="bi bi-arrow-up-right solution-arrow"></i>

        </div>


        <div class="solution-item">

          <div class="solution-image">
            <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=90"
              alt="Data security" />
          </div>

          <div class="solution-content">
            <span>02</span>
            <h3>Data Security</h3>
            <p>
              Protect your infrastructure, applications
              and sensitive information.
            </p>
          </div>

          <i class="bi bi-arrow-up-right solution-arrow"></i>

        </div>


        <div class="solution-item">

          <div class="solution-image">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=90"
              alt="Data analytics" />
          </div>

          <div class="solution-content">
            <span>03</span>
            <h3>Data Analytics</h3>
            <p>
              Transform complex information into
              insights that drive smarter decisions.
            </p>
          </div>

          <i class="bi bi-arrow-up-right solution-arrow"></i>

        </div>


        <div class="solution-item">

          <div class="solution-image">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=90"
              alt="Technology consulting" />
          </div>

          <div class="solution-content">
            <span>04</span>
            <h3>IT / IoT / OT Consulting</h3>
            <p>
              Connect technology, operations and
              infrastructure for measurable transformation.
            </p>
          </div>

          <i class="bi bi-arrow-up-right solution-arrow"></i>

        </div>

      </div>

    </div>

  </section>
</template>


<script>
export default {
  name: "CoreSolutions"
};
</script>


<style scoped>
.solutions-section {
  padding: 110px 0;

  background: #f5f5f1;

  color: #17362e;
}

.solutions-container {
  width: min(1200px,
      calc(100% - 40px));

  margin: auto;

  display: grid;

  grid-template-columns:
    .8fr 1.2fr;

  gap: 90px;
}


/* INTRO */

.eyebrow {
  color: #f5820b;

  font-size: 9px;
  font-weight: 800;

  letter-spacing: .16em;

  margin-bottom: 18px;
}

.solutions-intro h2 {
  margin: 0;

  font-family:
    "Space Grotesk",
    sans-serif;

  font-size: 48px;

  line-height: 1;

  letter-spacing: -.045em;

  color: #17362e !important;
}

.solutions-intro h2 span {
  color: #f5820b !important;
}

.solutions-intro p {
  max-width: 430px;

  margin:
    25px 0;

  color: #68756f;

  line-height: 1.8;

  font-size: 14px;
}

.text-link {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  color: #17362e;

  font-size: 11px;
  font-weight: 800;

  text-decoration: none;

  border-bottom:
    1px solid #f5820b;

  padding-bottom: 5px;
}


/* ITEMS */

.solution-list {
  display: flex;
  flex-direction: column;
}

.solution-item {
  position: relative;

  display: grid;

  grid-template-columns:
    125px 1fr 30px;

  align-items: center;

  gap: 20px;

  padding:
    20px 0;

  border-bottom:
    1px solid #dfe3df;
}

.solution-image {
  width: 125px;
  height: 85px;

  overflow: hidden;

  border-radius: 5px;

  position: relative;
}

.solution-image::after {
  content: "";

  position: absolute;
  inset: 0;

  background:
    linear-gradient(135deg,
      rgba(245, 130, 11, .35),
      transparent);
}

.solution-image img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  transition: .5s;
}

.solution-item:hover img {
  transform: scale(1.12);
}

.solution-content span {
  color: #f5820b;

  font-size: 9px;

  font-weight: 800;
}

.solution-content h3 {
  margin: 5px 0;

  font-size: 18px;

  color: #17362e !important;
}

.solution-content p {
  margin: 0;

  color: #7a8580;

  font-size: 11px;

  line-height: 1.6;
}

.solution-arrow {
  color: #f5820b;
}


/* MOBILE */

@media(max-width:800px) {

  .solutions-container {
    grid-template-columns: 1fr;

    gap: 50px;
  }

}

@media(max-width:550px) {

  .solution-item {
    grid-template-columns:
      90px 1fr 20px;

    gap: 12px;
  }

  .solution-image {
    width: 90px;
    height: 75px;
  }

  .solution-content h3 {
    font-size: 14px;
  }

  .solution-content p {
    font-size: 9px;
  }

  .solutions-intro h2 {
    font-size: 38px;
  }

}
</style>