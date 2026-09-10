<template>
    <section class="consulting">
        <div class="wrap">
            <div class="intro">
                <div class="kicker">05 / IT • IoT • OT</div>
                <h2>From technology<br><em>to transformation.</em></h2>
                <p>Advice is only useful when it can be implemented. UniteCore combines strategy, architecture and
                    hands-on delivery across complex environments.</p><router-link to="/solutions" class="button">View
                    consulting services <i class="bi bi-arrow-up-right"></i></router-link>
            </div>
            <div class="roadmap">
                <div v-for="(x, i) in areas" :key="x.name" class="road-item"><span>0{{ i + 1 }}</span>
                    <div class="road-icon"><i :class="x.icon"></i></div>
                    <div><b>{{ x.name }}</b><small>{{ x.text }}</small></div><i class="bi bi-arrow-right"></i>
                </div>
            </div>
        </div>
    </section>
</template>
<script>export default { name: 'ITConsulting', data() { return { areas: [{ name: 'IT Strategy', icon: 'bi bi-compass', text: 'Roadmaps & architecture' }, { name: 'Cloud & Infrastructure', icon: 'bi bi-cloud-arrow-up', text: 'Modern platforms' }, { name: 'IoT / OT', icon: 'bi bi-cpu', text: 'Connected operations' }, { name: 'Integration', icon: 'bi bi-bezier2', text: 'Systems that connect' }] } } }</script>
<style scoped>
.consulting {
    background: #f5820b;
    padding: 70px 0;
    position: relative;
    overflow: hidden
}

.consulting:after {
    content: 'CORE';
    position: absolute;
    font: 700 260px 'Space Grotesk';
    color: rgba(255, 255, 255, .09);
    right: -20px;
    bottom: -90px
}

.wrap {
    width: min(1220px, calc(100% - 42px));
    margin: auto;
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    gap: 100px;
    position: relative;
    z-index: 1
}

.kicker {
    font-size: 11px;
    font-weight: 800;
    letter-spacing: .15em;
    color: #111
}

.intro h2 {
    font: 700 clamp(44px, 5vw, 70px)/.95 'Space Grotesk';
    letter-spacing: -.055em;
    margin: 22px 0
}

.intro h2 em {
    font-style: normal;
    color: #fff
}

.intro p {
    max-width: 500px;
    line-height: 1.85;
    color: #3f2d1c
}

.button {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    background: #111;
    color: #fff;
    text-decoration: none;
    padding: 15px 18px;
    font-size: 11px;
    font-weight: 800
}

.button i {
    color: #f5820b
}

.roadmap {
    border-top: 1px solid rgba(17, 17, 17, .3)
}

.road-item {
    display: grid;
    grid-template-columns: 35px 52px 1fr 30px;
    align-items: center;
    gap: 18px;
    min-height: 120px;
    border-bottom: 1px solid rgba(17, 17, 17, .3);
    transition: .25s
}

.road-item:hover {
    padding-left: 14px;
    background: rgba(255, 255, 255, .12)
}

.road-item>span {
    font: 700 10px 'Space Grotesk'
}

.road-icon {
    width: 48px;
    height: 48px;
    border: 1px solid #111;
    border-radius: 50%;
    display: grid;
    place-items: center
}

.road-icon i {
    font-size: 19px
}

.road-item b,
.road-item small {
    display: block
}

.road-item b {
    font: 600 18px 'Space Grotesk'
}

.road-item small {
    font-size: 10px;
    margin-top: 5px;
    color: #4c3827
}

.road-item>i {
    font-size: 14px
}

@media(max-width:850px) {
    .wrap {
        grid-template-columns: 1fr;
        gap: 55px
    }

    .consulting:after {
        font-size: 150px
    }
}

@media(max-width:520px) {
    .consulting {
        padding: 90px 0
    }

    .road-item {
        grid-template-columns: 25px 45px 1fr 20px;
        gap: 10px
    }

    .road-item b {
        font-size: 15px
    }
}
</style>
