<template>
    <section class="cta">
        <div class="shape s1"></div>
        <div class="shape s2"></div>
        <div class="wrap">
            <div class="kicker">LET'S BUILD WHAT'S NEXT</div>
            <h2>One challenge.<br><em>One connected answer.</em></h2>
            <p>Tell us what you are trying to solve. UniteCore can help you find a practical technology path forward.
            </p><router-link to="/contact" class="cta-btn">Start a conversation <i
                    class="bi bi-arrow-up-right"></i></router-link>
        </div>
    </section>
</template>
<script>export default { name: 'CTASection' }</script>
<style scoped>
.cta {
    background: #f5820b;
    color: #111;
    padding: 70px 0;
    position: relative;
    overflow: hidden
}

.wrap {
    width: min(1220px, calc(100% - 42px));
    margin: auto;
    position: relative;
    z-index: 2
}

.kicker {
    font-size: 11px;
    font-weight: 900;
    letter-spacing: .16em
}

.cta h2 {
    font: 700 clamp(52px, 7vw, 92px)/.88 'Space Grotesk';
    letter-spacing: -.065em;
    margin: 25px 0
}

.cta h2 em {
    font-style: normal;
    color: #fff
}

.cta p {
    max-width: 500px;
    line-height: 1.8;
    color: #4a3421
}

.cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: #111315;
    color: #fff;
    text-decoration: none;
    padding: 16px 20px;
    font-size: 11px;
    font-weight: 800;
    margin-top: 20px
}

.cta-btn i {
    color: #f5820b
}

.shape {
    position: absolute;
    border: 1px solid rgba(17, 17, 17, .18);
    border-radius: 50%
}

.s1 {
    width: 600px;
    height: 600px;
    right: -170px;
    top: -180px
}

.s2 {
    width: 360px;
    height: 360px;
    right: -40px;
    top: -60px
}

@media(max-width:600px) {
    .cta {
        padding: 90px 0
    }

    .cta h2 {
        font-size: 50px
    }

    .s1 {
        width: 350px;
        height: 350px;
        right: -180px
    }
}
</style>
