<template>
    <section class="vm">

        <div class="wrap">

            <!-- =====================================================
                 HEADING
            ====================================================== -->

            <div class="heading">

                <div class="kicker">
                    10 / WHAT DRIVES US
                </div>

                <h2>
                    A clear direction.<br>
                    <em>A practical purpose.</em>
                </h2>

                <p class="heading-intro">
                    Our vision, mission and core values guide how we work,
                    how we innovate and how we create meaningful value for
                    our customers, people and communities.
                </p>

            </div>


            <!-- =====================================================
                 VISION + MISSION
            ====================================================== -->

            <div class="cards">

                <!-- VISION -->

                <article class="vision">

                    <span class="number">
                        01
                    </span>

                    <i class="bi bi-eye"></i>

                    <div class="card-label">
                        OUR VISION
                    </div>

                    <h3>
                        Vision
                    </h3>

                    <p>
                        To create a sustainable &amp; innovative ecosystem
                        that empowers businesses &amp; lives across the
                        universe.
                    </p>

                    <div class="corner"></div>

                </article>


                <!-- MISSION -->

                <article class="mission">

                    <span class="number">
                        02
                    </span>

                    <i class="bi bi-bullseye"></i>

                    <div class="card-label">
                        OUR MISSION
                    </div>

                    <h3>
                        Mission
                    </h3>

                    <p>
                        Our mission is to deliver secure, scalable, and
                        innovative IT solutions by simplifying complex
                        technology challenges, enabling seamless integration
                        in data management, and implementing robust
                        cybersecurity measures to ensure organizational
                        growth, resilience, and digital transformation in
                        the NexGen.
                    </p>

                    <div class="corner"></div>

                </article>

            </div>


            <!-- =====================================================
                 CORE VALUES
            ====================================================== -->

            <div class="values-section">

                <div class="values-heading">

                    <div class="values-kicker">
                        03 / CORE VALUES
                    </div>

                    <h3>
                        What we
                        <em>stand for.</em>
                    </h3>

                    <p>
                        Our values define the way we collaborate, innovate,
                        serve our customers and build a stronger future
                        together.
                    </p>

                </div>


                <div class="values-grid">

                    <!-- =================================================
                         GROWTH
                    ================================================== -->

                    <article class="value-card">

                        <div class="value-top">

                            <span>
                                01
                            </span>

                            <i class="bi bi-graph-up-arrow"></i>

                        </div>

                        <div class="value-content">

                            <h4>
                                Growth
                            </h4>

                            <p>
                                Delivering value to all stakeholders through
                                customer-centric innovation, employee growth
                                and sustainable business success.
                            </p>

                        </div>

                        <div class="value-line"></div>

                    </article>


                    <!-- =================================================
                         TEAM WORK
                    ================================================== -->

                    <article class="value-card">

                        <div class="value-top">

                            <span>
                                02
                            </span>

                            <i class="bi bi-people"></i>

                        </div>

                        <div class="value-content">

                            <h4>
                                Team Work
                            </h4>

                            <p>
                                We emphasize collaboration, respect and
                                shared responsibilities to achieve common
                                goals.
                            </p>

                        </div>

                        <div class="value-line"></div>

                    </article>


                    <!-- =================================================
                         INNOVATION
                    ================================================== -->

                    <article class="value-card">

                        <div class="value-top">

                            <span>
                                03
                            </span>

                            <i class="bi bi-lightbulb"></i>

                        </div>

                        <div class="value-content">

                            <h4>
                                Innovation
                            </h4>

                            <p>
                                A process for creating innovative solutions
                                to challenges, and a valuable asset for
                                businesses and organizations.
                            </p>

                        </div>

                        <div class="value-line"></div>

                    </article>


                    <!-- =================================================
                         CONTRIBUTION
                    ================================================== -->

                    <article class="value-card">

                        <div class="value-top">

                            <span>
                                04
                            </span>

                            <i class="bi bi-hand-thumbs-up"></i>

                        </div>

                        <div class="value-content">

                            <h4>
                                Contribution
                            </h4>

                            <p>
                                Make a positive impact through our work and
                                actions, taking ownership &amp; contributing
                                towards society.
                            </p>

                        </div>

                        <div class="value-line"></div>

                    </article>


                    <!-- =================================================
                         OPENNESS
                    ================================================== -->

                    <article class="value-card">

                        <div class="value-top">

                            <span>
                                05
                            </span>

                            <i class="bi bi-chat-square-text"></i>

                        </div>

                        <div class="value-content">

                            <h4>
                                Openness
                            </h4>

                            <p>
                                Foster a culture of transparency, honesty,
                                open communication &amp; also be open to
                                grab new opportunities for future business
                                prospects.
                            </p>

                        </div>

                        <div class="value-line"></div>

                    </article>

                </div>

            </div>

        </div>

    </section>
</template>


<script>

export default {

    name: "VisionMission"

};

</script>


<style scoped>
/* =========================================================
   MAIN SECTION
========================================================= */

.vm {

    background: #fff;

    padding: 120px 0;

    overflow: hidden;
}


/* =========================================================
   CONTAINER
========================================================= */

.wrap {

    width:
        min(1220px,
            calc(100% - 42px));

    margin: auto;
}


/* =========================================================
   HEADING
========================================================= */

.kicker {

    color: #f5820b;

    font-size: 11px;

    font-weight: 800;

    letter-spacing: .15em;
}


.heading h2 {

    font:
        700 clamp(44px, 5vw, 68px) / .95 "Space Grotesk";

    letter-spacing: -.055em;

    margin: 20px 0 22px;

    color: #111315;
}


.heading h2 em {

    font-style: normal;

    color: #f5820b;
}


.heading-intro {

    max-width: 680px;

    margin: 0 0 55px;

    color: #70747a;

    font-size: 14px;

    line-height: 1.85;
}


/* =========================================================
   VISION / MISSION CARDS
========================================================= */

.cards {

    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 18px;
}


.cards article {

    min-height: 390px;

    padding: 38px;

    position: relative;

    overflow: hidden;

    box-sizing: border-box;
}


.vision {

    background: #f2f1ec;

    color: #111315;
}


.mission {

    background: #111315;

    color: #fff;
}


/* =========================================================
   CARD NUMBER
========================================================= */

.cards .number {

    position: relative;

    z-index: 2;

    display: block;

    font:
        700 10px "Space Grotesk";

    color: #8d9195;

    letter-spacing: .1em;
}


/* =========================================================
   ICON
========================================================= */

.cards i {

    position: relative;

    z-index: 2;

    display: block;

    color: #f5820b;

    font-size: 32px;

    margin: 48px 0 18px;
}


/* =========================================================
   CARD LABEL
========================================================= */

.card-label {

    position: relative;

    z-index: 2;

    margin-bottom: 7px;

    color: #f5820b;

    font-size: 9px;

    font-weight: 800;

    letter-spacing: .18em;

    text-transform: uppercase;
}


/* =========================================================
   CARD HEADING
========================================================= */

.cards h3 {

    position: relative;

    z-index: 2;

    font:
        700 31px "Space Grotesk";

    margin: 0 0 14px;
}


/* =========================================================
   CARD DESCRIPTION
========================================================= */

.cards p {

    position: relative;

    z-index: 2;

    font-size: 13px;

    line-height: 1.85;

    max-width: 550px;

    color: #70747a;

    margin: 0;
}


.mission p {

    color: #96999e;
}


/* =========================================================
   DECORATIVE CORNER
========================================================= */

.corner {

    position: absolute;

    width: 120px;

    height: 120px;

    border:
        1px solid rgba(245, 130, 11, .8);

    right: -60px;

    bottom: -60px;

    transform:
        rotate(45deg);

    transition:
        transform .5s ease;
}


.cards article:hover .corner {

    transform:
        rotate(45deg) scale(1.2);
}


/* =========================================================
   CORE VALUES SECTION
========================================================= */

.values-section {

    margin-top: 100px;

    padding-top: 85px;

    border-top:
        1px solid #e5e5e1;
}


/* =========================================================
   VALUES HEADING
========================================================= */

.values-heading {

    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 60px;

    align-items: end;

    margin-bottom: 45px;
}


.values-kicker {

    color: #f5820b;

    font-size: 11px;

    font-weight: 800;

    letter-spacing: .15em;

    margin-bottom: 15px;
}


.values-heading h3 {

    margin: 0;

    color: #111315;

    font:
        700 clamp(40px, 5vw, 62px) / .95 "Space Grotesk";

    letter-spacing: -.05em;
}


.values-heading h3 em {

    color: #f5820b;

    font-style: normal;
}


.values-heading p {

    max-width: 500px;

    margin: 0;

    color: #70747a;

    font-size: 13px;

    line-height: 1.85;
}


/* =========================================================
   VALUES GRID
========================================================= */

.values-grid {

    display: grid;

    grid-template-columns:
        repeat(5, 1fr);

    gap: 14px;
}


/* =========================================================
   VALUE CARD
========================================================= */

.value-card {

    position: relative;

    min-height: 360px;

    display: flex;

    flex-direction: column;

    justify-content: space-between;

    padding: 28px;

    overflow: hidden;

    background: #f2f1ec;

    border:
        1px solid #e5e5e1;

    box-sizing: border-box;

    transition:
        transform .35s ease,
        background .35s ease,
        box-shadow .35s ease;
}


.value-card:hover {

    transform:
        translateY(-7px);

    background: #111315;

    border-color: #111315;

    box-shadow:
        0 20px 45px rgba(0, 0, 0, .12);
}


/* =========================================================
   VALUE TOP
========================================================= */

.value-top {

    display: flex;

    align-items: center;

    justify-content: space-between;
}


.value-top span {

    color: #8d9195;

    font:
        700 10px "Space Grotesk";

    letter-spacing: .08em;

    transition:
        color .3s ease;
}


.value-top i {

    color: #f5820b;

    font-size: 25px;

    transition:
        transform .35s ease;
}


.value-card:hover .value-top i {

    transform:
        scale(1.12) rotate(-5deg);
}


.value-card:hover .value-top span {

    color: #f5820b;
}


/* =========================================================
   VALUE CONTENT
========================================================= */

.value-content {

    margin-top: 50px;
}


.value-content h4 {

    margin: 0 0 15px;

    color: #111315;

    font:
        700 25px "Space Grotesk";

    transition:
        color .3s ease;
}


.value-content p {

    margin: 0;

    color: #70747a;

    font-size: 12px;

    line-height: 1.8;

    transition:
        color .3s ease;
}


.value-card:hover .value-content h4 {

    color: #fff;
}


.value-card:hover .value-content p {

    color: #96999e;
}


/* =========================================================
   VALUE BOTTOM LINE
========================================================= */

.value-line {

    width: 32px;

    height: 2px;

    background: #f5820b;

    transition:
        width .35s ease;
}


.value-card:hover .value-line {

    width: 65px;
}


/* =========================================================
   VALUE CARD DECORATION
========================================================= */

.value-card::after {

    content: "";

    position: absolute;

    right: -45px;

    bottom: -45px;

    width: 90px;

    height: 90px;

    border:
        1px solid rgba(245, 130, 11, .5);

    transform:
        rotate(45deg);

    transition:
        transform .45s ease;
}


.value-card:hover::after {

    transform:
        rotate(45deg) scale(1.25);
}


/* =========================================================
   LARGE TABLET
========================================================= */

@media (max-width: 1100px) {

    .values-grid {

        grid-template-columns:
            repeat(3, 1fr);
    }

    .value-card {

        min-height: 330px;
    }

}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 850px) {

    .vm {

        padding: 100px 0;
    }


    .cards {

        grid-template-columns:
            1fr;
    }


    .cards article {

        min-height: 350px;
    }


    .values-heading {

        grid-template-columns:
            1fr;

        gap: 20px;
    }


    .values-grid {

        grid-template-columns:
            repeat(2, 1fr);
    }


    .value-card {

        min-height: 320px;
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 650px) {

    .vm {

        padding: 80px 0;
    }


    .wrap {

        width:
            calc(100% - 30px);
    }


    .heading h2 {

        font-size: 45px;

        letter-spacing: -.045em;

        margin-bottom: 20px;
    }


    .heading-intro {

        font-size: 13px;

        margin-bottom: 40px;
    }


    .cards {

        grid-template-columns:
            1fr;

        gap: 14px;
    }


    .cards article {

        min-height: 330px;

        padding: 28px;
    }


    .cards i {

        margin:
            40px 0 18px;
    }


    .cards h3 {

        font-size: 28px;
    }


    .cards p {

        font-size: 12px;

        line-height: 1.8;
    }


    /* VALUES */

    .values-section {

        margin-top: 70px;

        padding-top: 60px;
    }


    .values-heading {

        margin-bottom: 35px;
    }


    .values-heading h3 {

        font-size: 42px;
    }


    .values-heading p {

        font-size: 12px;
    }


    .values-grid {

        grid-template-columns:
            1fr;

        gap: 12px;
    }


    .value-card {

        min-height: 280px;

        padding: 25px;
    }


    .value-content {

        margin-top: 35px;
    }


    .value-content h4 {

        font-size: 24px;
    }


    .value-content p {

        font-size: 12px;

        max-width: 500px;
    }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 400px) {

    .heading h2 {

        font-size: 40px;
    }


    .cards article {

        min-height: 315px;

        padding: 24px;
    }


    .values-heading h3 {

        font-size: 38px;
    }


    .value-card {

        min-height: 270px;
    }

}


.home-page[data-v-c6bdc170] h3 {
    color: #f5820b;
}
</style>