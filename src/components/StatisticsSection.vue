<template>
    <section class="stats">
        <div class="wrap">
            <div class="side">
                <div class="kicker">06 / PROVEN AT SCALE</div>
                <h2>Proof in<br><em>the numbers.</em></h2>
                <p>Experience, delivery and specialist expertise supporting technology environments across industries.
                </p>
            </div>
            <div class="numbers">
                <div v-for="(s, i) in stats" :key="s.label" class="number">
                    <span>0{{ i + 1 }}</span><strong>{{ s.value }}<em>+</em></strong><b>{{ s.label }}</b><small>{{ s.text }}</small>
                </div>
            </div>
        </div>
    </section>
</template>
<script>export default { name: 'StatisticsSection', data() { return { stats: [{ value: 250, label: 'Customers', text: 'Organizations supported' }, { value: 750, label: 'Projects', text: 'Technology initiatives delivered' }, { value: 140, label: 'Support hours', text: 'Dedicated service capability' }, { value: 75, label: 'Experts', text: 'Technology specialists' }] } } }</script>
<style scoped>
.stats {
    background: #111315;
    color: #fff;
    padding: 70px 0;
    position: relative;
    overflow: hidden
}

.stats:before {
    content: '';
    position: absolute;
    width: 420px;
    height: 420px;
    background: #f5820b;
    border-radius: 50%;
    filter: blur(120px);
    opacity: .16;
    right: -100px;
    top: -120px
}

.wrap {
    width: min(1220px, calc(100% - 42px));
    margin: auto;
    display: grid;
    grid-template-columns: .65fr 1.35fr;
    gap: 80px;
    position: relative
}

.kicker {
    color: #f5820b;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: .15em
}

.side h2 {
    font: 700 clamp(45px, 5vw, 68px)/.95 'Space Grotesk';
    margin: 22px 0;
    letter-spacing: -.05em
}

.side h2 em {
    font-style: normal;
    color: #777
}

.side p {
    color: #858a90;
    line-height: 1.8;
    max-width: 340px
}

.numbers {
    display: grid;
    grid-template-columns: 1fr 1fr
}

.number {
    padding: 28px 28px 34px;
    border-top: 1px solid #303338;
    border-left: 1px solid #303338;
    min-height: 230px
}

.number:nth-child(-n+2) {
    border-top: 0
}

.number span {
    font-size: 10px;
    color: #666b71
}

.number strong {
    display: block;
    font: 700 clamp(52px, 5vw, 78px)/1 'Space Grotesk';
    margin: 35px 0 8px
}

.number strong em {
    font-style: normal;
    color: #f5820b
}

.number b {
    display: block;
    font-size: 13px
}

.number small {
    display: block;
    color: #747980;
    font-size: 10px;
    margin-top: 7px
}

@media(max-width:850px) {
    .wrap {
        grid-template-columns: 1fr
    }

    .numbers {
        max-width: 700px
    }
}

@media(max-width:520px) {
    .stats {
        padding: 90px 0
    }

    .numbers {
        grid-template-columns: 1fr
    }

    .number:nth-child(2) {
        border-top: 1px solid #303338
    }

    .number {
        border-left: 0
    }

    .number strong {
        margin-top: 22px
    }
}
</style>
