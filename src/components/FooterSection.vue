<template>

    <footer class="footer">

        <div class="wrap">

            <!-- =================================================
                 BRAND
            ================================================== -->

            <div class="brand-col">

                <router-link to="/" class="logo-link">

                    <img :src="logo" alt="UniteCore">

                </router-link>

                <p>
                    Data. Security. Analytics. Technology.
                    <br>
                    Connected at the core.
                </p>


                <!-- SOCIAL -->

                <div class="social">

                    <a href="#" aria-label="LinkedIn">
                        <i class="bi bi-linkedin"></i>
                    </a>

                    <a href="#" aria-label="Facebook">
                        <i class="bi bi-facebook"></i>
                    </a>

                    <a href="#" aria-label="Instagram">
                        <i class="bi bi-instagram"></i>
                    </a>

                </div>

            </div>


            <!-- =================================================
                 LINKS
            ================================================== -->

            <div class="links">

                <!-- EXPLORE -->

                <div>

                    <b>Explore</b>

                    <router-link to="/about">
                        About
                    </router-link>

                    <a href="#solutions">
                        Solutions
                    </a>

                    <a href="#industries">
                        Industries
                    </a>

                    <a href="#insights">
                        Insights
                    </a>

                </div>


                <!-- CONNECT -->

                <div>

                    <b>Connect</b>

                    <router-link to="/contact">
                        Contact
                    </router-link>

                    <a href="mailto:info@unitecore.in">
                        info@unitecore.in
                    </a>

                    <a href="tel:+912040000000">
                        +91 20 4000 0000
                    </a>

                </div>

            </div>

        </div>


        <!-- =====================================================
             BOTTOM
        ====================================================== -->

        <div class="bottom">

            <span>
                © {{ year }} UniteCore. All rights reserved.
            </span>

            <span>
                Technology at the core.
            </span>

        </div>

    </footer>

</template>


<script>

import logo from "../assets/logo.png";

export default {

    name: "FooterSection",

    data() {

        return {

            logo

        };

    },

    computed: {

        year() {

            return new Date().getFullYear();

        }

    }

};

</script>


<style scoped>
/* ============================================================
   FOOTER
============================================================ */

.footer {

    width: 100%;

    background: #08090b;

    color: #ffffff;

    padding: 65px 0 20px;

    overflow: hidden;

}


/* ============================================================
   MAIN WRAPPER
============================================================ */

.wrap {

    width: min(1180px, calc(100% - 42px));

    margin: auto;

    display: grid;

    grid-template-columns: 1.2fr .8fr;

    gap: 90px;

}


/* ============================================================
   BRAND
============================================================ */

.brand-col {

    min-width: 0;

}


.logo-link {

    display: inline-flex;

    align-items: center;

    text-decoration: none;

}


.brand-col img {

    display: block;

    width: 165px;

    max-width: 100%;

    height: auto;

}


.brand-col p {

    margin: 20px 0 22px;

    max-width: 330px;

    color: #74787e;

    font-size: 12px;

    line-height: 1.8;

}


/* ============================================================
   SOCIAL
============================================================ */

.social {

    display: flex;

    align-items: center;

    gap: 9px;

}


.social a {

    width: 36px;

    height: 36px;

    display: grid;

    place-items: center;

    border: 1px solid rgba(255, 255, 255, .12);

    border-radius: 50%;

    color: #8b8f94;

    text-decoration: none;

    transition:

        color .25s ease,

        border-color .25s ease,

        background .25s ease,

        transform .25s ease;

}


.social a:hover {

    color: #ffffff;

    background: #f5820b;

    border-color: #f5820b;

    transform: translateY(-2px);

}


.social i {

    font-size: 14px;

}


/* ============================================================
   LINKS
============================================================ */

.links {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 45px;

}


.links div {

    display: flex;

    flex-direction: column;

    align-items: flex-start;

    gap: 13px;

}


/* ============================================================
   LINK HEADINGS
============================================================ */

.links b {

    margin-bottom: 7px;

    color: #f5820b;

    font-size: 10px;

    font-weight: 800;

    letter-spacing: .15em;

    text-transform: uppercase;

}


/* ============================================================
   LINKS
============================================================ */

.links a {

    color: #85898f;

    font-size: 12px;

    line-height: 1.4;

    text-decoration: none;

    transition:

        color .25s ease,

        transform .25s ease;

}


.links a:hover {

    color: #ffffff;

    transform: translateX(3px);

}


/* ============================================================
   BOTTOM BAR
============================================================ */

.bottom {

    width: min(1180px, calc(100% - 42px));

    margin: 60px auto 0;

    padding-top: 18px;

    border-top: 1px solid rgba(255, 255, 255, .08);

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 20px;

    color: #55595f;

    font-size: 10px;

}


.bottom span:last-child {

    color: #f5820b;

    font-weight: 700;

    letter-spacing: .05em;

}


/* ============================================================
   TABLET
============================================================ */

@media (max-width: 900px) {

    .wrap {

        gap: 55px;

    }

}


/* ============================================================
   MOBILE
============================================================ */

@media (max-width: 700px) {

    .footer {

        padding: 50px 0 18px;

    }


    .wrap {

        width: calc(100% - 32px);

        grid-template-columns: 1fr;

        gap: 42px;

    }


    .brand-col img {

        width: 150px;

    }


    .brand-col p {

        margin-top: 16px;

        font-size: 12px;

    }


    .links {

        grid-template-columns: 1fr 1fr;

        gap: 30px;

    }


    .bottom {

        width: calc(100% - 32px);

        margin-top: 45px;

        flex-direction: column;

        align-items: flex-start;

        gap: 10px;

        line-height: 1.5;

    }

}


/* ============================================================
   SMALL MOBILE
============================================================ */

@media (max-width: 400px) {

    .wrap {

        width: calc(100% - 26px);

    }


    .links {

        grid-template-columns: 1fr;

        gap: 30px;

    }


    .bottom {

        width: calc(100% - 26px);

    }

}
</style>
