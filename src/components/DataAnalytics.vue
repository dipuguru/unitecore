<template>
    <section class="analytics">

        <!-- Background decoration -->
        <div class="bg-orb orb-orange"></div>
        <div class="bg-orb orb-green"></div>

        <div class="wrap">

            <!-- =====================================================
           LEFT IMAGE / ANALYTICS VISUAL
      ====================================================== -->

            <div class="visual">

                <div class="visual-card">

                    <!-- REAL ANALYTICS IMAGE -->
                    <div class="analytics-image"></div>

                    <!-- Dark / green contrast -->
                    <div class="image-overlay"></div>

                    <!-- Grid -->
                    <div class="data-grid"></div>

                    <!-- Top floating label -->
                    <div class="live-label">
                        <span class="live-dot"></span>
                        UNITECORE / LIVE ANALYTICS
                    </div>


                    <!-- =================================================
               FLOATING KPI
          ================================================== -->

                    <div class="kpi-card kpi-main">

                        <div class="kpi-icon">
                            <i class="bi bi-graph-up-arrow"></i>
                        </div>

                        <div>
                            <small>DECISION VELOCITY</small>

                            <strong>
                                +38.4%
                            </strong>

                            <span>
                                <i class="bi bi-arrow-up"></i>
                                Improving visibility
                            </span>
                        </div>

                    </div>


                    <!-- =================================================
               SMALL DATA CARD
          ================================================== -->

                    <div class="mini-card mini-top">

                        <div class="mini-icon">
                            <i class="bi bi-cpu"></i>
                        </div>

                        <div>
                            <small>AI SIGNALS</small>
                            <strong>2,847</strong>
                        </div>

                    </div>


                    <!-- =================================================
               SMALL DATA CARD
          ================================================== -->

                    <div class="mini-card mini-right">

                        <div class="mini-icon">
                            <i class="bi bi-bar-chart-line"></i>
                        </div>

                        <div>
                            <small>INSIGHTS</small>
                            <strong>94.8%</strong>
                        </div>

                    </div>


                    <!-- =================================================
               BOTTOM STATUS
          ================================================== -->

                    <div class="bottom-status">

                        <div class="status-item">
                            <span class="status-dot"></span>
                            MONITORING
                        </div>

                        <div class="status-item">
                            <i class="bi bi-lightning-charge"></i>
                            REAL TIME
                        </div>

                        <div class="status-item">
                            <i class="bi bi-shield-check"></i>
                            SECURE
                        </div>

                    </div>


                    <!-- Decorative data line -->
                    <div class="data-line line-one"></div>
                    <div class="data-line line-two"></div>
                    <div class="data-line line-three"></div>


                    <!-- Floating data nodes -->
                    <div class="node node-one"></div>
                    <div class="node node-two"></div>
                    <div class="node node-three"></div>
                    <div class="node node-four"></div>

                </div>


                <!-- Vertical label -->

                <div class="vertical-label">
                    DATA / ANALYTICS / INSIGHTS
                </div>

            </div>


            <!-- =====================================================
           RIGHT CONTENT
      ====================================================== -->

            <div class="copy">

                <div class="kicker">
                    <span></span>
                    04 / ANALYTICS & MONITORING
                </div>


                <h2>
                    Turn complex data
                    <br>
                    into <em>clear decisions.</em>
                </h2>


                <p>
                    Our team of data scientists and engineers transforms complex data
                    into actionable insights, tailoring analytics solutions to your
                    business needs. Using advanced data visualization, we empower you
                    to make and communicate data-driven decisions effectively across
                    your organization.
                </p>


                <!-- =================================================
             ANALYTICS STEPS
        ================================================== -->

                <div class="steps">

                    <div class="step">

                        <div class="step-number">
                            01
                        </div>

                        <div class="step-icon">
                            <i class="bi bi-database"></i>
                        </div>

                        <div class="step-content">

                            <strong>
                                COLLECT
                            </strong>

                            <small>
                                Bring signals together
                            </small>

                        </div>

                    </div>


                    <div class="step">

                        <div class="step-number">
                            02
                        </div>

                        <div class="step-icon">
                            <i class="bi bi-search"></i>
                        </div>

                        <div class="step-content">

                            <strong>
                                UNDERSTAND
                            </strong>

                            <small>
                                Spot patterns and risk
                            </small>

                        </div>

                    </div>


                    <div class="step">

                        <div class="step-number">
                            03
                        </div>

                        <div class="step-icon">
                            <i class="bi bi-lightning-charge"></i>
                        </div>

                        <div class="step-content">

                            <strong>
                                ACT
                            </strong>

                            <small>
                                Turn insight into action
                            </small>

                        </div>

                    </div>

                </div>


                <!-- =================================================
             ANALYTICS SERVICES
        ================================================== -->

                <div class="analytics-services">

                    <div class="service">
                        <span>01</span>
                        <strong>Descriptive Analysis</strong>
                        <i class="bi bi-arrow-up-right"></i>
                    </div>

                    <div class="service">
                        <span>02</span>
                        <strong>Diagnostic Analytics</strong>
                        <i class="bi bi-arrow-up-right"></i>
                    </div>

                    <div class="service">
                        <span>03</span>
                        <strong>Predictive Analytics</strong>
                        <i class="bi bi-arrow-up-right"></i>
                    </div>

                    <div class="service">
                        <span>04</span>
                        <strong>Prescriptive Analytics</strong>
                        <i class="bi bi-arrow-up-right"></i>
                    </div>

                </div>


                <!-- CTA -->

                <router-link to="/solutions" class="link">
                    <span>Discover Data Analytics</span>
                    <i class="bi bi-arrow-right"></i>
                </router-link>

            </div>

        </div>

    </section>
</template>


<script>
export default {

    name: "DataAnalytics",

    data() {

        return {

            bars: [
                35,
                52,
                42,
                68,
                57,
                76,
                64,
                90,
                73,
                96,
                82,
                100
            ]

        };

    }

};
</script>


<style scoped>
/* =========================================================
   MAIN
========================================================= */

.analytics {
    position: relative;

    overflow: hidden;

    padding: 140px 0;

    background:
        #f3f1eb;

    color: #111;
}


/* =========================================================
   BACKGROUND ORBS
========================================================= */

.bg-orb {
    position: absolute;

    border-radius: 50%;

    filter: blur(100px);

    pointer-events: none;
}


.orb-orange {

    width: 400px;
    height: 400px;

    right: -180px;
    top: 15%;

    background:
        rgba(245, 130, 11, .10);
}


.orb-green {

    width: 350px;
    height: 350px;

    left: -170px;
    bottom: 0;

    background:
        rgba(15, 92, 70, .12);
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
        1.08fr .92fr;

    gap: 90px;

    align-items: center;

}


/* =========================================================
   VISUAL
========================================================= */

.visual {

    display: flex;

    gap: 18px;

    min-height: 610px;

}


.visual-card {

    position: relative;

    flex: 1;

    min-height: 610px;

    overflow: hidden;

    background:
        #07120d;

    box-shadow:
        24px 24px 0 #f5820b;

    border-radius: 5px;

}


/* =========================================================
   REAL IMAGE
========================================================= */

.analytics-image {

    position: absolute;

    inset: 0;

    background-image:
        url("https://www.abconsultingai.com/ai-data-analytics-dashboard-with-charts-and-graphs.jpg");

    background-size:
        cover;

    background-position:
        center;

    transform:
        scale(1.03);

    transition:
        transform 1s ease;

}


.visual-card:hover .analytics-image {

    transform:
        scale(1.09);

}


/* =========================================================
   IMAGE OVERLAY
========================================================= */

.image-overlay {

    position: absolute;

    inset: 0;

    z-index: 2;

    background:
        linear-gradient(180deg,
            rgba(4, 16, 11, .10),
            rgba(4, 16, 11, .15) 35%,
            rgba(4, 16, 11, .90) 100%);

}


/* Orange glow */

.image-overlay::after {

    content: "";

    position: absolute;

    width: 380px;
    height: 380px;

    right: -160px;
    top: 20%;

    border-radius: 50%;

    background:
        rgba(245, 130, 11, .20);

    filter:
        blur(90px);

}


/* =========================================================
   DATA GRID
========================================================= */

.data-grid {

    position: absolute;

    inset: 0;

    z-index: 3;

    opacity: .12;

    background-image:

        linear-gradient(rgba(255, 255, 255, .4) 1px,
            transparent 1px),

        linear-gradient(90deg,
            rgba(255, 255, 255, .4) 1px,
            transparent 1px);

    background-size:
        55px 55px;

}


/* =========================================================
   LIVE LABEL
========================================================= */

.live-label {

    position: absolute;

    z-index: 15;

    top: 25px;
    left: 25px;

    display: flex;

    align-items: center;

    gap: 9px;

    padding:
        10px 13px;

    color: #dbe4df;

    background:
        rgba(5, 17, 12, .82);

    border:
        1px solid rgba(255, 255, 255, .15);

    backdrop-filter:
        blur(14px);

    font-family:
        "JetBrains Mono",
        monospace;

    font-size: 8px;

    letter-spacing: .12em;

}


.live-dot {

    width: 7px;
    height: 7px;

    border-radius: 50%;

    background:
        #f5820b;

    box-shadow:
        0 0 10px #f5820b;

    animation:
        livePulse 1.5s infinite;

}


/* =========================================================
   MAIN KPI
========================================================= */

.kpi-card {

    position: absolute;

    z-index: 15;

    display: flex;

    align-items: center;

    gap: 13px;

    background:
        rgba(255, 255, 255, .96);

    box-shadow:
        0 20px 50px rgba(0, 0, 0, .30);

    backdrop-filter:
        blur(15px);

}


.kpi-main {

    left: 25px;

    bottom: 75px;

    padding:
        16px 20px;

}


.kpi-icon {

    width: 45px;
    height: 45px;

    display: grid;

    place-items: center;

    color:
        #f5820b;

    background:
        rgba(245, 130, 11, .10);

    border:
        1px solid rgba(245, 130, 11, .25);

    font-size:
        19px;

}


.kpi-card small {

    display: block;

    color:
        #777;

    font-family:
        "JetBrains Mono",
        monospace;

    font-size:
        7px;

    letter-spacing:
        .11em;

}


.kpi-card strong {

    display: block;

    margin:
        4px 0;

    color:
        #111;

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size:
        27px;

    line-height:
        1;

}


.kpi-card span {

    color:
        #16815f;

    font-size:
        8px;

    font-weight:
        700;

}


.kpi-card span i {

    margin-right:
        3px;

}


/* =========================================================
   MINI CARDS
========================================================= */

.mini-card {

    position: absolute;

    z-index: 15;

    display: flex;

    align-items: center;

    gap: 9px;

    padding:
        10px 12px;

    color:
        #fff;

    background:
        rgba(5, 18, 12, .86);

    border:
        1px solid rgba(255, 255, 255, .14);

    backdrop-filter:
        blur(12px);

}


.mini-top {

    right: 25px;

    top: 105px;

}


.mini-right {

    right: 25px;

    top: 190px;

}


.mini-icon {

    width: 31px;
    height: 31px;

    display: grid;

    place-items: center;

    color:
        #f5820b;

    background:
        rgba(245, 130, 11, .10);

    border:
        1px solid rgba(245, 130, 11, .25);

    font-size:
        13px;

}


.mini-card small {

    display: block;

    color:
        #77827b;

    font-family:
        "JetBrains Mono",
        monospace;

    font-size:
        6px;

    letter-spacing:
        .1em;

}


.mini-card strong {

    display: block;

    margin-top:
        3px;

    font-family:
        "Space Grotesk";

    font-size:
        15px;

}


/* =========================================================
   BOTTOM STATUS
========================================================= */

.bottom-status {

    position: absolute;

    z-index: 15;

    left: 25px;
    right: 25px;

    bottom: 25px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding:
        10px 13px;

    color:
        #aeb9b3;

    background:
        rgba(5, 16, 11, .86);

    border:
        1px solid rgba(255, 255, 255, .11);

    backdrop-filter:
        blur(10px);

    font-family:
        "JetBrains Mono",
        monospace;

    font-size:
        7px;

    letter-spacing:
        .08em;

}


.status-item {

    display:
        flex;

    align-items:
        center;

    gap:
        6px;

}


.status-item i {

    color:
        #f5820b;

}


.status-dot {

    width: 5px;
    height: 5px;

    border-radius: 50%;

    background:
        #f5820b;

    box-shadow:
        0 0 7px #f5820b;

}


/* =========================================================
   DECORATIVE DATA LINES
========================================================= */

.data-line {

    position: absolute;

    z-index: 5;

    height: 1px;

    background:
        linear-gradient(90deg,
            transparent,
            rgba(245, 130, 11, .8),
            transparent);

}


.line-one {

    width: 180px;

    top: 42%;

    left: 5%;

    transform:
        rotate(-20deg);

}


.line-two {

    width: 140px;

    right: 5%;

    top: 45%;

    transform:
        rotate(20deg);

}


.line-three {

    width: 200px;

    left: 25%;

    bottom: 32%;

}


/* =========================================================
   NODES
========================================================= */

.node {

    position: absolute;

    z-index: 10;

    width: 7px;
    height: 7px;

    border-radius: 50%;

    background:
        #f5820b;

    box-shadow:
        0 0 12px #f5820b,
        0 0 25px rgba(245, 130, 11, .5);

    animation:
        nodePulse 2s infinite;

}


.node-one {

    left: 17%;
    top: 30%;

}


.node-two {

    right: 17%;
    top: 33%;

    animation-delay:
        .4s;

}


.node-three {

    left: 29%;
    bottom: 25%;

    animation-delay:
        .8s;

}


.node-four {

    right: 29%;
    bottom: 29%;

    animation-delay:
        1.2s;

}


/* =========================================================
   VERTICAL LABEL
========================================================= */

.vertical-label {

    writing-mode:
        vertical-rl;

    transform:
        rotate(180deg);

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    color:
        #858982;

    font-family:
        "JetBrains Mono",
        monospace;

    font-size:
        8px;

    font-weight:
        700;

    letter-spacing:
        .18em;

}


/* =========================================================
   CONTENT
========================================================= */

.copy {

    position:
        relative;

    z-index:
        10;

}


.kicker {

    display:
        flex;

    align-items:
        center;

    gap:
        10px;

    color:
        #f5820b;

    font-size:
        11px;

    font-weight:
        800;

    letter-spacing:
        .15em;

}


.kicker span {

    width:
        35px;

    height:
        2px;

    background:
        #f5820b;

    box-shadow:
        0 0 12px rgba(245, 130, 11, .5);

}


/* =========================================================
   HEADING
========================================================= */

.copy h2 {

    margin:
        22px 0 25px;

    color:
        #111;

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size:
        clamp(42px,
            4.5vw,
            62px);

    line-height:
        .98;

    font-weight:
        700;

    letter-spacing:
        -.055em;

}


.copy h2 em {

    color:
        #f5820b;

    font-style:
        normal;

}


/* =========================================================
   DESCRIPTION
========================================================= */

.copy>p {

    max-width:
        560px;

    margin:
        0;

    color:
        #676c70;

    font-size:
        14px;

    line-height:
        1.9;

}


/* =========================================================
   STEPS
========================================================= */

.steps {

    margin:
        38px 0 30px;

    border-left:
        2px solid #f5820b;

}


.step {

    display:
        grid;

    grid-template-columns:
        38px 42px 1fr;

    align-items:
        center;

    gap:
        10px;

    padding:
        13px 15px;

    border-bottom:
        1px solid rgba(0, 0, 0, .09);

    transition:
        .3s ease;

}


.step:hover {

    padding-left:
        22px;

    background:
        rgba(255, 255, 255, .5);

}


.step-number {

    color:
        #f5820b;

    font-family:
        "JetBrains Mono",
        monospace;

    font-size:
        9px;

}


.step-icon {

    width:
        32px;

    height:
        32px;

    display:
        grid;

    place-items:
        center;

    color:
        #f5820b;

    background:
        rgba(245, 130, 11, .08);

    border:
        1px solid rgba(245, 130, 11, .22);

}


.step-content strong {

    display:
        block;

    color:
        #222;

    font-size:
        10px;

    letter-spacing:
        .08em;

}


.step-content small {

    display:
        block;

    margin-top:
        4px;

    color:
        #85898d;

    font-size:
        9px;

}


/* =========================================================
   SERVICES
========================================================= */

.analytics-services {

    border-top:
        1px solid rgba(0, 0, 0, .12);

    border-bottom:
        1px solid rgba(0, 0, 0, .12);

}


.service {

    display:
        grid;

    grid-template-columns:
        35px 1fr 20px;

    align-items:
        center;

    gap:
        10px;

    padding:
        10px 0;

    border-top:
        1px solid rgba(0, 0, 0, .07);

}


.service:first-child {

    border-top:
        0;

}


.service span {

    color:
        #f5820b;

    font-family:
        "JetBrains Mono",
        monospace;

    font-size:
        8px;

}


.service strong {

    color:
        #555;

    font-size:
        10px;

}


.service i {

    color:
        #f5820b;

    font-size:
        11px;

}


/* =========================================================
   CTA
========================================================= */

.link {

    display:
        inline-flex;

    align-items:
        center;

    gap:
        10px;

    margin-top:
        28px;

    padding-bottom:
        9px;

    color:
        #111;

    text-decoration:
        none;

    border-bottom:
        1px solid #f5820b;

    font-size:
        12px;

    font-weight:
        800;

}


.link i {

    color:
        #f5820b;

    transition:
        .3s ease;

}


.link:hover {

    color:
        #f5820b;

}


.link:hover i {

    transform:
        translateX(5px);

}


/* =========================================================
   ANIMATIONS
========================================================= */

@keyframes livePulse {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: .35;
        transform: scale(.65);
    }

}


@keyframes nodePulse {

    0%,
    100% {
        opacity: .55;
        transform: scale(1);
    }

    50% {
        opacity: 1;
        transform: scale(1.7);
    }

}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 950px) {

    .analytics {
        padding:
            105px 0;
    }

    .wrap {

        grid-template-columns:
            1fr;

        gap:
            70px;

    }

    .visual {

        max-width:
            800px;

        width:
            100%;

        margin:
            auto;

    }

    .copy {

        max-width:
            760px;

        margin:
            auto;

    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

    .analytics {

        padding:
            80px 0;

    }

    .wrap {

        width:
            calc(100% - 30px);

        gap:
            55px;

    }

    .visual {

        min-height:
            390px;

        gap:
            10px;

    }

    .visual-card {

        min-height:
            390px;

        box-shadow:
            12px 12px 0 #f5820b;

    }

    .vertical-label {

        font-size:
            6px;

    }

    .live-label {

        top:
            15px;

        left:
            15px;

        padding:
            8px 10px;

        font-size:
            6px;

    }

    .kpi-main {

        left:
            15px;

        bottom:
            55px;

        padding:
            11px 13px;

    }

    .kpi-icon {

        width:
            35px;

        height:
            35px;

        font-size:
            15px;

    }

    .kpi-card strong {

        font-size:
            21px;

    }

    .kpi-card small {

        font-size:
            6px;

    }

    .kpi-card span {

        font-size:
            6px;

    }

    .mini-top {

        top:
            70px;

        right:
            15px;

    }

    .mini-right {

        top:
            135px;

        right:
            15px;

    }

    .mini-card {

        padding:
            7px 9px;

    }

    .mini-icon {

        width:
            27px;

        height:
            27px;

    }

    .mini-card strong {

        font-size:
            12px;

    }

    .bottom-status {

        left:
            15px;

        right:
            15px;

        bottom:
            15px;

        padding:
            8px;

        font-size:
            5px;

    }

    .copy h2 {

        font-size:
            clamp(40px,
                12vw,
                55px);

    }

    .copy>p {

        font-size:
            13px;

        line-height:
            1.8;

    }

    .step {

        grid-template-columns:
            30px 36px 1fr;

        padding:
            11px 10px;

    }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 400px) {

    .visual {

        min-height:
            330px;

    }

    .visual-card {

        min-height:
            330px;

    }

    .mini-right {

        display:
            none;

    }

    .bottom-status .status-item:nth-child(2) {

        display:
            none;

    }

}
</style>