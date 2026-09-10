<template>
    <section class="security">

        <!-- BACKGROUND -->
        <div class="security-grid"></div>
        <div class="security-glow glow-one"></div>
        <div class="security-glow glow-two"></div>

        <div class="wrap">

            <!-- =================================================
                 LEFT CONTENT
            ================================================= -->

            <div class="copy">

                <div class="kicker">
                    <span class="kicker-line"></span>
                    03 / DATA SECURITY
                </div>

                <h2>
                    Secure your data.
                    <br>
                    <em>Stay ahead.</em>
                </h2>

                <p>
                    Our data security services are not a one-size fits-all solution.
                    We work closely with you to understand your specific security needs
                    and develop a comprehensive security strategy. We continuously
                    monitor and update our security measures to stay ahead of evolving
                    threats.
                </p>


                <!-- SECURITY FEATURES -->

                <div class="security-points">

                    <div class="security-point">

                        <div class="icon-box">
                            <i class="bi bi-shield-exclamation"></i>
                        </div>

                        <div>
                            <b>THREAT DETECTION</b>
                            <span>Threat Detection & Prevention</span>
                        </div>

                    </div>


                    <div class="security-point">

                        <div class="icon-box">
                            <i class="bi bi-lock"></i>
                        </div>

                        <div>
                            <b>ENCRYPTION</b>
                            <span>Data Encryption</span>
                        </div>

                    </div>


                    <div class="security-point">

                        <div class="icon-box">
                            <i class="bi bi-person-check"></i>
                        </div>

                        <div>
                            <b>ACCESS CONTROL</b>
                            <span>Identity & Access</span>
                        </div>

                    </div>

                </div>


                <!-- SERVICES -->

                <div class="service-list">

                    <div class="service-item">
                        <span class="service-number">01</span>

                        <span class="service-name">
                            Data Loss Prevention (DLP)
                        </span>

                        <i class="bi bi-arrow-up-right"></i>
                    </div>


                    <div class="service-item">
                        <span class="service-number">02</span>

                        <span class="service-name">
                            Security Incident & Event Management (SIEM)
                        </span>

                        <i class="bi bi-arrow-up-right"></i>
                    </div>

                </div>


                <router-link to="/solutions" class="security-link">
                    <span>Explore Data Security</span>
                    <i class="bi bi-arrow-up-right"></i>
                </router-link>

            </div>


            <!-- =================================================
                 RIGHT CYBER VISUAL
            ================================================= -->

            <div class="cyber-stage">

                <!-- SYSTEM LABEL -->

                <div class="system-label">
                    <span class="live"></span>
                    SECURITY SYSTEM
                    <strong>ACTIVE</strong>
                </div>


                <!-- OUTER ROTATING RING -->

                <div class="outer-ring ring-a"></div>
                <div class="outer-ring ring-b"></div>
                <div class="outer-ring ring-c"></div>


                <!-- CIRCUIT LINES -->

                <div class="circuit circuit-one">
                    <span></span>
                    <i></i>
                </div>

                <div class="circuit circuit-two">
                    <span></span>
                    <i></i>
                </div>

                <div class="circuit circuit-three">
                    <span></span>
                    <i></i>
                </div>

                <div class="circuit circuit-four">
                    <span></span>
                    <i></i>
                </div>


                <!-- DATA NODES -->

                <div class="node node-one"></div>
                <div class="node node-two"></div>
                <div class="node node-three"></div>
                <div class="node node-four"></div>
                <div class="node node-five"></div>
                <div class="node node-six"></div>


                <!-- =================================================
                     CENTRAL SECURITY CORE
                ================================================= -->

                <div class="security-core">

                    <div class="core-glow"></div>

                    <div class="shield-back">

                        <div class="shield-shape">

                            <div class="shield-inner">

                                <i class="bi bi-shield-fill-check"></i>

                            </div>

                        </div>

                    </div>


                    <!-- CORE DATA -->

                    <div class="core-data">

                        <span class="core-status">
                            <i></i>
                            PROTECTED
                        </span>

                        <strong>
                            99.9%
                        </strong>

                        <small>
                            SECURITY STATUS
                        </small>

                    </div>

                </div>


                <!-- =================================================
                     TOP DATA CARD
                ================================================= -->

                <div class="hud-card hud-top">

                    <div class="hud-icon">
                        <i class="bi bi-radar"></i>
                    </div>

                    <div>
                        <span>THREAT MONITORING</span>
                        <strong>ACTIVE</strong>
                    </div>

                    <div class="signal">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>

                </div>


                <!-- =================================================
                     LEFT DATA CARD
                ================================================= -->

                <div class="hud-card hud-left">

                    <div class="hud-icon">
                        <i class="bi bi-fingerprint"></i>
                    </div>

                    <div>
                        <span>IDENTITY</span>
                        <strong>VERIFIED</strong>
                    </div>

                </div>


                <!-- =================================================
                     RIGHT DATA CARD
                ================================================= -->

                <div class="hud-card hud-right">

                    <div class="hud-icon">
                        <i class="bi bi-database-lock"></i>
                    </div>

                    <div>
                        <span>DATA ENCRYPTION</span>
                        <strong>256-BIT</strong>
                    </div>

                </div>


                <!-- =================================================
                     BOTTOM CARD
                ================================================= -->

                <div class="hud-card hud-bottom">

                    <div class="hud-icon">
                        <i class="bi bi-check2-circle"></i>
                    </div>

                    <div>
                        <span>NETWORK STATUS</span>
                        <strong>SECURE</strong>
                    </div>

                    <div class="network-bars">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>

                </div>


                <!-- SCANNER -->

                <div class="scanner"></div>


                <!-- HORIZONTAL HUD LINES -->

                <div class="hud-line line-top"></div>
                <div class="hud-line line-bottom"></div>

            </div>

        </div>

    </section>
</template>


<script>
export default {
    name: "DataSecurity"
};
</script>


<style scoped>
/* =========================================================
   MAIN
========================================================= */

.security {
    position: relative;
    overflow: hidden;

    min-height: 820px;

    padding: 70px 0;

    background:
        radial-gradient(circle at 75% 50%,
            rgba(245, 130, 11, 0.10),
            transparent 28%),
        radial-gradient(circle at 10% 80%,
            rgba(16, 100, 76, 0.16),
            transparent 32%),
        #070c0a;

    color: #fff;
}


/* =========================================================
   GRID
========================================================= */

.security-grid {
    position: absolute;

    inset: 0;

    opacity: .12;

    background-image:
        linear-gradient(rgba(255, 255, 255, .04) 1px,
            transparent 1px),
        linear-gradient(90deg,
            rgba(255, 255, 255, .04) 1px,
            transparent 1px);

    background-size: 55px 55px;

    pointer-events: none;
}


/* =========================================================
   GLOWS
========================================================= */

.security-glow {
    position: absolute;

    border-radius: 50%;

    filter: blur(110px);

    pointer-events: none;
}


.glow-one {
    width: 450px;
    height: 450px;

    right: 8%;
    top: 20%;

    background:
        rgba(245, 130, 11, .09);
}


.glow-two {
    width: 350px;
    height: 350px;

    left: -120px;
    bottom: -100px;

    background:
        rgba(15, 100, 76, .14);
}


/* =========================================================
   WRAPPER
========================================================= */

.wrap {
    position: relative;

    z-index: 10;

    width:
        min(1240px,
            calc(100% - 42px));

    margin: auto;

    display: grid;

    grid-template-columns:
        minmax(0, .95fr) minmax(0, 1.05fr);

    gap: 70px;

    align-items: center;
}


/* =========================================================
   CONTENT
========================================================= */

.copy {
    position: relative;

    z-index: 20;
}


.kicker {
    display: flex;

    align-items: center;

    gap: 12px;

    color: #f5820b;

    font-size: 11px;

    font-weight: 800;

    letter-spacing: .18em;
}


.kicker-line {
    width: 35px;
    height: 2px;

    background: #f5820b;

    box-shadow:
        0 0 15px rgba(245, 130, 11, .7);
}


/* =========================================================
   HEADING
========================================================= */

.copy h2 {
    position: relative;

    z-index: 30;

    margin:
        22px 0 28px;

    color: #fff !important;

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size:
        clamp(48px,
            5vw,
            76px);

    line-height: .97;

    font-weight: 700;

    letter-spacing: -.055em;

    text-shadow:
        0 4px 25px rgba(0, 0, 0, .7);
}


.copy h2 em {
    color: #f5820b !important;

    font-style: normal;

    text-shadow:
        0 0 30px rgba(245, 130, 11, .35);
}


/* =========================================================
   DESCRIPTION
========================================================= */

.copy>p {
    max-width: 570px;

    margin: 0;

    color: #d2d9d5 !important;

    font-size: 15px;

    line-height: 1.85;
}


/* =========================================================
   FEATURES
========================================================= */

.security-points {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    margin:
        40px 0 25px;

    border-top:
        1px solid rgba(255, 255, 255, .12);

    border-bottom:
        1px solid rgba(255, 255, 255, .12);
}


.security-point {
    display: flex;

    align-items: center;

    gap: 12px;

    padding:
        20px 10px;

    border-right:
        1px solid rgba(255, 255, 255, .09);

    transition:
        .3s ease;
}


.security-point:last-child {
    border-right: 0;
}


.security-point:hover {
    background:
        rgba(245, 130, 11, .035);
}


/* =========================================================
   ICON
========================================================= */

.icon-box {
    width: 43px;
    height: 43px;

    flex-shrink: 0;

    display: grid;

    place-items: center;

    color: #f5820b;

    background:
        rgba(245, 130, 11, .08);

    border:
        1px solid rgba(245, 130, 11, .3);

    font-size: 18px;

    transition: .3s ease;
}


.security-point:hover .icon-box {
    color: #07100c;

    background: #f5820b;

    transform:
        translateY(-3px);

    box-shadow:
        0 10px 30px rgba(245, 130, 11, .3);
}


.security-point b {
    display: block;

    color: #fff;

    font-size: 9px;

    letter-spacing: .08em;
}


.security-point span {
    display: block;

    margin-top: 5px;

    color: #8e9892;

    font-size: 9px;

    line-height: 1.35;
}


/* =========================================================
   SERVICES
========================================================= */

.service-list {
    margin-bottom: 30px;

    border-bottom:
        1px solid rgba(255, 255, 255, .08);
}


.service-item {
    display: grid;

    grid-template-columns:
        40px 1fr 20px;

    align-items: center;

    gap: 12px;

    padding: 13px 0;

    border-top:
        1px solid rgba(255, 255, 255, .08);

    color: #aab2ad;

    font-size: 11px;

    transition: .3s ease;
}


.service-item:hover {
    padding-left: 6px;

    color: #fff;
}


.service-number {
    color: #f5820b;

    font-family:
        "JetBrains Mono",
        monospace;

    font-size: 9px;
}


.service-item i {
    color: #f5820b;
}


/* =========================================================
   CTA
========================================================= */

.security-link {
    display: inline-flex;

    align-items: center;

    gap: 12px;

    padding-bottom: 9px;

    color: #fff;

    text-decoration: none;

    border-bottom:
        1px solid #f5820b;

    font-size: 12px;

    font-weight: 800;
}


.security-link i {
    color: #f5820b;

    transition: .3s ease;
}


.security-link:hover {
    color: #f5820b;
}


.security-link:hover i {
    transform:
        translate(4px, -4px);
}


/* =========================================================
   CYBER STAGE
========================================================= */

.cyber-stage {
    position: relative;

    height: 610px;

    display: grid;

    place-items: center;
}


/* =========================================================
   SYSTEM LABEL
========================================================= */

.system-label {
    position: absolute;

    top: 20px;
    right: 5px;

    z-index: 40;

    display: flex;

    align-items: center;

    gap: 8px;

    padding:
        9px 13px;

    color: #8c9791;

    background:
        rgba(6, 12, 9, .9);

    border:
        1px solid rgba(255, 255, 255, .1);

    font-family:
        "JetBrains Mono",
        monospace;

    font-size: 8px;

    letter-spacing: .1em;
}


.system-label strong {
    color: #f5820b;

    font-weight: 800;
}


.live {
    width: 6px;
    height: 6px;

    border-radius: 50%;

    background: #f5820b;

    box-shadow:
        0 0 8px #f5820b,
        0 0 18px rgba(245, 130, 11, .6);

    animation:
        livePulse 1.5s infinite;
}


/* =========================================================
   ROTATING RINGS
========================================================= */

.outer-ring {
    position: absolute;

    border-radius: 50%;

    border:
        1px solid rgba(245, 130, 11, .18);
}


.ring-a {
    width: 350px;
    height: 350px;

    animation:
        rotateRing 20s linear infinite;
}


.ring-b {
    width: 470px;
    height: 470px;

    border:
        1px dashed rgba(245, 130, 11, .13);

    animation:
        rotateRingReverse 28s linear infinite;
}


.ring-c {
    width: 570px;
    height: 570px;

    border:
        1px solid rgba(255, 255, 255, .045);

    animation:
        rotateRing 40s linear infinite;
}


/* =========================================================
   CENTRAL CORE
========================================================= */

.security-core {
    position: relative;

    z-index: 15;

    width: 280px;
    height: 320px;

    display: grid;

    place-items: center;
}


/* =========================================================
   CORE GLOW
========================================================= */

.core-glow {
    position: absolute;

    width: 250px;
    height: 250px;

    border-radius: 50%;

    background:
        radial-gradient(circle,
            rgba(245, 130, 11, .35),
            rgba(17, 92, 70, .16),
            transparent 70%);

    filter: blur(25px);

    animation:
        corePulse 4s ease-in-out infinite;
}


/* =========================================================
   SHIELD
========================================================= */

.shield-back {
    position: relative;

    width: 190px;
    height: 220px;

    display: grid;

    place-items: center;

    filter:
        drop-shadow(0 0 30px rgba(245, 130, 11, .4));
}


.shield-shape {
    width: 100%;
    height: 100%;

    padding: 3px;

    background:
        linear-gradient(145deg,
            #ffbe70,
            #f5820b 45%,
            #a94600 70%,
            #164e3d);

    clip-path:
        polygon(50% 0%,
            91% 15%,
            85% 68%,
            50% 100%,
            15% 68%,
            9% 15%);

    animation:
        shieldFloat 4s ease-in-out infinite;
}


.shield-inner {
    width: 100%;
    height: 100%;

    display: grid;

    place-items: center;

    color: #f5820b;

    background:
        linear-gradient(145deg,
            #16231d,
            #07100c 60%,
            #101a15);

    clip-path:
        polygon(50% 2%,
            88% 16%,
            82% 66%,
            50% 96%,
            18% 66%,
            12% 16%);

    font-size: 66px;

    text-shadow:
        0 0 25px rgba(245, 130, 11, .7);
}


/* =========================================================
   CORE DATA
========================================================= */

.core-data {
    position: absolute;

    bottom: -5px;

    display: flex;

    flex-direction: column;

    align-items: center;

    z-index: 20;
}


.core-status {
    display: flex;

    align-items: center;

    gap: 7px;

    padding:
        6px 10px;

    color: #a1aaa5;

    background:
        rgba(8, 15, 11, .9);

    border:
        1px solid rgba(245, 130, 11, .22);

    font-family:
        "JetBrains Mono",
        monospace;

    font-size: 7px;

    letter-spacing: .12em;
}


.core-status i {
    width: 5px;
    height: 5px;

    border-radius: 50%;

    background: #f5820b;

    box-shadow:
        0 0 8px #f5820b;
}


.core-data strong {
    margin-top: 12px;

    color: #fff;

    font-family:
        "Space Grotesk",
        sans-serif;

    font-size: 26px;

    line-height: 1;
}


.core-data small {
    margin-top: 5px;

    color: #68736c;

    font-family:
        "JetBrains Mono",
        monospace;

    font-size: 7px;

    letter-spacing: .15em;
}


/* =========================================================
   HUD CARDS
========================================================= */

.hud-card {
    position: absolute;

    z-index: 35;

    display: flex;

    align-items: center;

    gap: 10px;

    min-width: 190px;

    padding:
        11px 13px;

    background:
        linear-gradient(135deg,
            rgba(17, 27, 22, .96),
            rgba(7, 13, 10, .92));

    border:
        1px solid rgba(255, 255, 255, .11);

    box-shadow:
        0 18px 45px rgba(0, 0, 0, .45);

    backdrop-filter:
        blur(14px);

    animation:
        hudFloat 5s ease-in-out infinite;
}


/* =========================================================
   HUD ICON
========================================================= */

.hud-icon {
    width: 34px;
    height: 34px;

    flex-shrink: 0;

    display: grid;

    place-items: center;

    color: #f5820b;

    background:
        rgba(245, 130, 11, .08);

    border:
        1px solid rgba(245, 130, 11, .25);

    font-size: 14px;
}


.hud-card span {
    display: block;

    color: #737d77;

    font-family:
        "JetBrains Mono",
        monospace;

    font-size: 7px;

    letter-spacing: .09em;
}


.hud-card strong {
    display: block;

    margin-top: 4px;

    color: #e6ebe7;

    font-size: 9px;

    letter-spacing: .05em;
}


/* =========================================================
   HUD POSITIONS
========================================================= */

.hud-top {
    top: 95px;
    left: 3%;
}


.hud-left {
    top: 45%;
    left: -2%;

    animation-delay:
        1s;
}


.hud-right {
    top: 48%;
    right: -2%;

    animation-delay:
        1.8s;
}


.hud-bottom {
    bottom: 65px;
    right: 10%;

    animation-delay:
        2.5s;
}


/* =========================================================
   SIGNAL
========================================================= */

.signal {
    display: flex;

    align-items: flex-end;

    gap: 3px;

    margin-left: auto;

    height: 20px;
}


.signal i {
    display: block;

    width: 3px;

    background: #f5820b;

    box-shadow:
        0 0 7px rgba(245, 130, 11, .5);
}


.signal i:nth-child(1) {
    height: 6px;
}


.signal i:nth-child(2) {
    height: 10px;
}


.signal i:nth-child(3) {
    height: 14px;
}


.signal i:nth-child(4) {
    height: 18px;
}


/* =========================================================
   NETWORK BARS
========================================================= */

.network-bars {
    display: flex;

    align-items: flex-end;

    gap: 3px;

    margin-left: auto;

    height: 20px;
}


.network-bars i {
    width: 3px;

    background: #f5820b;

    box-shadow:
        0 0 6px rgba(245, 130, 11, .5);
}


.network-bars i:nth-child(1) {
    height: 7px;
}


.network-bars i:nth-child(2) {
    height: 11px;
}


.network-bars i:nth-child(3) {
    height: 15px;
}


.network-bars i:nth-child(4) {
    height: 18px;
}


.network-bars i:nth-child(5) {
    height: 13px;
}


/* =========================================================
   CIRCUIT LINES
========================================================= */

.circuit {
    position: absolute;

    z-index: 4;

    width: 90px;
    height: 2px;

    background:
        linear-gradient(90deg,
            transparent,
            rgba(245, 130, 11, .8));
}


.circuit span {
    position: absolute;

    right: -4px;
    top: -3px;

    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: #f5820b;

    box-shadow:
        0 0 15px #f5820b;
}


.circuit i {
    position: absolute;

    right: 15px;
    top: -25px;

    width: 1px;
    height: 25px;

    background:
        rgba(245, 130, 11, .4);
}


.circuit-one {
    top: 35%;
    left: 9%;

    transform: rotate(-25deg);
}


.circuit-two {
    top: 35%;
    right: 9%;

    transform:
        rotate(25deg) scaleX(-1);
}


.circuit-three {
    bottom: 30%;
    left: 14%;

    transform:
        rotate(25deg);
}


.circuit-four {
    bottom: 30%;
    right: 14%;

    transform:
        rotate(-25deg) scaleX(-1);
}


/* =========================================================
   DATA NODES
========================================================= */

.node {
    position: absolute;

    z-index: 8;

    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: #f5820b;

    box-shadow:
        0 0 10px #f5820b,
        0 0 25px rgba(245, 130, 11, .5);

    animation:
        nodePulse 2s infinite;
}


.node-one {
    top: 25%;
    left: 18%;
}


.node-two {
    top: 25%;
    right: 17%;

    animation-delay:
        .4s;
}


.node-three {
    top: 52%;
    left: 5%;

    animation-delay:
        .8s;
}


.node-four {
    top: 55%;
    right: 5%;

    animation-delay:
        1.2s;
}


.node-five {
    bottom: 20%;
    left: 24%;

    animation-delay:
        1.6s;
}


.node-six {
    bottom: 18%;
    right: 24%;

    animation-delay:
        2s;
}


/* =========================================================
   SCANNER
========================================================= */

.scanner {
    position: absolute;

    z-index: 25;

    width: 270px;
    height: 2px;

    background:
        linear-gradient(90deg,
            transparent,
            #f5820b,
            #fff,
            #f5820b,
            transparent);

    box-shadow:
        0 0 15px rgba(245, 130, 11, .8);

    opacity: .75;

    animation:
        scan 4s ease-in-out infinite;
}


/* =========================================================
   HUD LINES
========================================================= */

.hud-line {
    position: absolute;

    z-index: 2;

    width: 180px;

    height: 1px;

    background:
        linear-gradient(90deg,
            transparent,
            rgba(245, 130, 11, .35),
            transparent);
}


.line-top {
    top: 20%;

    left: 30%;
}


.line-bottom {
    bottom: 18%;

    right: 28%;
}


/* =========================================================
   ANIMATIONS
========================================================= */

@keyframes rotateRing {

    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}


@keyframes rotateRingReverse {

    from {
        transform: rotate(360deg);
    }

    to {
        transform: rotate(0deg);
    }
}


@keyframes corePulse {

    0%,
    100% {
        transform: scale(.92);

        opacity: .65;
    }

    50% {
        transform: scale(1.08);

        opacity: 1;
    }
}


@keyframes shieldFloat {

    0%,
    100% {
        transform:
            translateY(0);
    }

    50% {
        transform:
            translateY(-9px);
    }
}


@keyframes hudFloat {

    0%,
    100% {
        transform:
            translateY(0);
    }

    50% {
        transform:
            translateY(-8px);
    }
}


@keyframes nodePulse {

    0%,
    100% {
        transform: scale(1);

        opacity: .55;
    }

    50% {
        transform: scale(1.7);

        opacity: 1;
    }
}


@keyframes scan {

    0% {
        transform:
            translateY(-160px);

        opacity: 0;
    }

    20% {
        opacity: .8;
    }

    50% {
        opacity: 1;
    }

    80% {
        opacity: .8;
    }

    100% {
        transform:
            translateY(160px);

        opacity: 0;
    }
}


@keyframes livePulse {

    0%,
    100% {
        opacity: 1;

        transform:
            scale(1);
    }

    50% {
        opacity: .3;

        transform:
            scale(.7);
    }
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1050px) {

    .security {
        padding:
            110px 0;
    }


    .wrap {
        grid-template-columns: 1fr;

        gap: 60px;
    }


    .copy {
        max-width: 780px;

        margin: auto;
    }


    .cyber-stage {
        max-width: 700px;

        width: 100%;

        margin: auto;
    }


    .hud-left {
        left: 3%;
    }


    .hud-right {
        right: 3%;
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 650px) {

    .security {
        min-height: auto;

        padding:
            85px 0;
    }


    .wrap {
        width:
            calc(100% - 30px);

        gap: 45px;
    }


    .copy h2 {
        font-size:
            clamp(42px,
                12vw,
                58px);
    }


    .copy>p {
        font-size: 14px;

        line-height: 1.75;
    }


    /* FEATURES */

    .security-points {
        grid-template-columns: 1fr;
    }


    .security-point {
        border-right: 0;

        border-bottom:
            1px solid rgba(255, 255, 255, .09);

        padding:
            16px 8px;
    }


    .security-point:last-child {
        border-bottom: 0;
    }


    /* CYBER VISUAL */

    .cyber-stage {
        height: 470px;

        transform:
            scale(.86);

        width: 116%;

        margin-left: -8%;
    }


    .system-label {
        top: 0;
        right: 0;
    }


    .ring-a {
        width: 290px;
        height: 290px;
    }


    .ring-b {
        width: 390px;
        height: 390px;
    }


    .ring-c {
        width: 470px;
        height: 470px;
    }


    .security-core {
        transform:
            scale(.85);
    }


    .hud-card {
        min-width: 155px;

        padding:
            9px 10px;
    }


    .hud-icon {
        width: 29px;
        height: 29px;

        font-size: 12px;
    }


    .hud-card span {
        font-size: 6px;
    }


    .hud-card strong {
        font-size: 8px;
    }


    .hud-top {
        top: 55px;
        left: 2%;
    }


    .hud-left {
        top: 44%;
        left: 0;
    }


    .hud-right {
        top: 48%;
        right: 0;
    }


    .hud-bottom {
        bottom: 30px;
        right: 7%;
    }


    .circuit {
        width: 65px;
    }


    .scanner {
        width: 220px;
    }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 420px) {

    .security {
        padding:
            70px 0;
    }


    .cyber-stage {
        height: 420px;

        transform:
            scale(.72);

        width: 138%;

        margin-left: -19%;
    }


    .copy h2 {
        font-size:
            43px;
    }


    .service-item {
        font-size: 10px;
    }


    .security-link {
        font-size: 11px;
    }

}
</style>
