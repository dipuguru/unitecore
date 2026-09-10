<template>
    <section class="faq-section" id="faq">

        <div class="faq-container">

            <!-- HEADER -->
            <div class="faq-header">

                <div class="faq-label">
                    FREQUENTLY ASKED QUESTIONS
                </div>

                <h2>
                    Answers to your
                    <span>technology questions.</span>
                </h2>

                <p>
                    Find answers to common questions about UniteCore's
                    IT consulting, cybersecurity, data management,
                    analytics, cloud and infrastructure solutions.
                </p>

            </div>


            <!-- SEARCH -->
            <div class="faq-search-wrapper">

                <div class="faq-search">

                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="11" cy="11" r="7" />
                        <path d="M20 20l-4-4" />
                    </svg>

                    <input v-model="searchQuery" type="text" placeholder="Search your question..."
                        aria-label="Search FAQs" />

                    <button v-if="searchQuery" class="clear-search" type="button" @click="searchQuery = ''">
                        ×
                    </button>

                </div>

            </div>


            <!-- FAQ LIST -->
            <div class="faq-list">

                <div v-for="(faq, index) in filteredFaqs" :key="faq.id" class="faq-item"
                    :class="{ active: activeFaq === faq.id }">

                    <button type="button" class="faq-question" @click="toggleFaq(faq.id)">

                        <div class="faq-question-left">

                            <span class="faq-number">
                                {{ String(index + 1).padStart(2, "0") }}
                            </span>

                            <span class="faq-question-text">
                                {{ faq.question }}
                            </span>

                        </div>

                        <span class="faq-icon">
                            <span></span>
                            <span></span>
                        </span>

                    </button>


                    <transition name="faq" @enter="faqEnter" @after-enter="faqAfterEnter" @leave="faqLeave">

                        <div v-if="activeFaq === faq.id" class="faq-answer-wrapper">

                            <div class="faq-answer">

                                <div class="answer-line"></div>

                                <p>
                                    {{ faq.answer }}
                                </p>

                            </div>

                        </div>

                    </transition>

                </div>


                <!-- NO RESULTS -->
                <div v-if="filteredFaqs.length === 0" class="faq-empty">

                    <div class="empty-icon">
                        ?
                    </div>

                    <h3>
                        No matching questions
                    </h3>

                    <p>
                        Try searching for cybersecurity, cloud,
                        analytics, data management or IT consulting.
                    </p>

                    <button type="button" @click="searchQuery = ''">
                        View all FAQs
                    </button>

                </div>

            </div>


            <!-- BOTTOM CTA -->
            <div class="faq-bottom">

                <div class="faq-bottom-content">

                    <div class="faq-bottom-icon">
                        ?
                    </div>

                    <div>
                        <strong>
                            Still have questions?
                        </strong>

                        <span>
                            Our technology experts are ready to help.
                        </span>
                    </div>

                </div>

                <a href="#contact" class="faq-contact-btn">
                    Talk to an Expert

                    <span>
                        →
                    </span>
                </a>

            </div>

        </div>

    </section>
</template>


<script>
export default {

    name: "FAQSection",

    data() {

        return {

            searchQuery: "",

            activeFaq: 1,

            faqs: [

                {
                    id: 1,

                    question:
                        "What IT services does UniteCore provide for businesses?",

                    answer:
                        "UniteCore provides IT consulting, cybersecurity, data management, analytics, cloud, infrastructure, backup, and network security solutions for businesses."
                },

                {
                    id: 2,

                    question:
                        "What cybersecurity services does UniteCore offer in India?",

                    answer:
                        "UniteCore offers threat detection, data security, access control, DLP, SIEM, and security monitoring solutions to protect businesses from cyber threats."
                },

                {
                    id: 3,

                    question:
                        "How can UniteCore help businesses improve their cybersecurity?",

                    answer:
                        "UniteCore helps businesses identify security risks, protect critical systems and data, and strengthen their overall cybersecurity posture."
                },

                {
                    id: 4,

                    question:
                        "What data security solutions does UniteCore provide?",

                    answer:
                        "UniteCore provides data encryption, access control, data loss prevention, threat detection, and security monitoring solutions."
                },

                {
                    id: 5,

                    question:
                        "What are data management services and how can they benefit businesses?",

                    answer:
                        "Data management services help businesses integrate, organize, govern, and maintain reliable data for better operations and decision-making."
                },

                {
                    id: 6,

                    question:
                        "Does UniteCore provide data integration and data transformation services?",

                    answer:
                        "Yes, UniteCore provides data integration and transformation solutions to connect different data sources and create consistent, usable business data."
                },

                {
                    id: 7,

                    question:
                        "What is data governance and why is it important for businesses?",

                    answer:
                        "Data governance helps businesses maintain accurate, secure, consistent, and well-managed data through defined policies and processes."
                },

                {
                    id: 8,

                    question:
                        "What data analytics services does UniteCore provide?",

                    answer:
                        "UniteCore provides descriptive, diagnostic, predictive, and prescriptive analytics to help businesses turn data into actionable insights."
                },

                {
                    id: 9,

                    question:
                        "How can data analytics help businesses make data-driven decisions?",

                    answer:
                        "Data analytics helps businesses identify trends, understand performance, predict outcomes, and make informed decisions using their data."
                },

                {
                    id: 10,

                    question:
                        "Does UniteCore provide cloud solutions and cloud consulting services?",

                    answer:
                        "Yes, UniteCore provides cloud solutions and consulting services aligned with business, infrastructure, security, and scalability requirements."
                },

                {
                    id: 11,

                    question:
                        "What data storage, backup and disaster recovery solutions does UniteCore offer?",

                    answer:
                        "UniteCore provides data storage, backup, and disaster recovery solutions to protect critical data and support business continuity."
                },

                {
                    id: 12,

                    question:
                        "What is SIEM and how can SIEM services improve business security?",

                    answer:
                        "SIEM collects and analyzes security events to help businesses detect threats, monitor activity, and respond to potential security incidents."
                },

                {
                    id: 13,

                    question:
                        "Does UniteCore provide IT audit and IT infrastructure assessment services?",

                    answer:
                        "Yes, UniteCore provides IT audits and infrastructure assessments to identify technology gaps, risks, vulnerabilities, and improvement opportunities."
                },

                {
                    id: 14,

                    question:
                        "Can UniteCore provide customized IT and cybersecurity solutions for businesses?",

                    answer:
                        "Yes, UniteCore delivers customized IT, cybersecurity, data, analytics, and infrastructure solutions based on specific business requirements."
                },

                {
                    id: 15,

                    question:
                        "How can I get started with UniteCore's IT and technology consulting services?",

                    answer:
                        "Contact UniteCore to discuss your IT, cybersecurity, data, cloud, analytics, or infrastructure requirements and explore the right solution for your business."
                }

            ]

        };

    },


    computed: {

        filteredFaqs() {

            const query =
                this.searchQuery
                    .trim()
                    .toLowerCase();

            if (!query) {

                return this.faqs;

            }

            return this.faqs.filter((faq) => {

                return (
                    faq.question
                        .toLowerCase()
                        .includes(query)
                    ||
                    faq.answer
                        .toLowerCase()
                        .includes(query)
                );

            });

        }

    },


    methods: {

        toggleFaq(id) {

            if (this.activeFaq === id) {

                this.activeFaq = null;

            } else {

                this.activeFaq = id;

            }

        },


        faqEnter(element) {

            element.style.height = "0";

            element.offsetHeight;

            element.style.height =
                element.scrollHeight + "px";

        },


        faqAfterEnter(element) {

            element.style.height = "auto";

        },


        faqLeave(element) {

            element.style.height =
                element.scrollHeight + "px";

            element.offsetHeight;

            element.style.height = "0";

        }

    }

};
</script>


<style scoped>
.faq-section {

    position: relative;

    width: 100%;

    padding: 110px 24px;

    background:
        linear-gradient(180deg,
            #f3f4f2 0%,
            #ffffff 100%);

    color: #202323;

    overflow: hidden;

}


/* BACKGROUND */

.faq-section::before {

    content: "";

    position: absolute;

    width: 420px;
    height: 420px;

    top: -220px;
    right: -150px;

    border-radius: 50%;

    background:
        rgba(245, 130, 11, .08);

    pointer-events: none;

}


.faq-section::after {

    content: "";

    position: absolute;

    width: 300px;
    height: 300px;

    bottom: -180px;
    left: -120px;

    border-radius: 50%;

    background:
        rgba(18, 60, 53, .06);

    pointer-events: none;

}


/* CONTAINER */

.faq-container {

    position: relative;

    z-index: 2;

    width: 100%;

    max-width: 1120px;

    margin: 0 auto;

}


/* HEADER */

.faq-header {

    max-width: 760px;

    margin-bottom: 42px;

}


.faq-label {

    display: inline-flex;

    align-items: center;

    gap: 10px;

    margin-bottom: 18px;

    color: #f5820b;

    font-size: 12px;

    font-weight: 800;

    letter-spacing: 2px;

}


.faq-label::before {

    content: "";

    width: 34px;
    height: 2px;

    background: #f5820b;

}


.faq-header h2 {

    margin: 0;

    font-size: clamp(38px, 5vw, 64px);

    line-height: 1.04;

    letter-spacing: -2px;

    font-weight: 800;

    color: #202323;

}


.faq-header h2 span {

    display: block;

    color: #f5820b;

}


.faq-header p {

    max-width: 650px;

    margin: 22px 0 0;

    color: #74787e;

    font-size: 16px;

    line-height: 1.8;

}


/* SEARCH */

.faq-search-wrapper {

    display: flex;

    justify-content: flex-end;

    margin-bottom: 24px;

}


.faq-search {

    position: relative;

    width: 100%;

    max-width: 420px;

    display: flex;

    align-items: center;

}


.faq-search svg {

    position: absolute;

    left: 18px;

    width: 19px;
    height: 19px;

    fill: none;

    stroke: #74787e;

    stroke-width: 2;

    stroke-linecap: round;

    stroke-linejoin: round;

}


.faq-search input {

    width: 100%;

    height: 52px;

    padding:
        0 48px 0 52px;

    border:
        1px solid #dedfdd;

    border-radius: 100px;

    outline: none;

    background: #ffffff;

    color: #202323;

    font-size: 14px;

    transition:
        border-color .25s ease,
        box-shadow .25s ease;

}


.faq-search input:focus {

    border-color: #f5820b;

    box-shadow:
        0 0 0 4px rgba(245, 130, 11, .10);

}


.faq-search input::placeholder {

    color: #999d9f;

}


.clear-search {

    position: absolute;

    right: 14px;

    width: 30px;
    height: 30px;

    border: 0;

    border-radius: 50%;

    background: #f3f4f2;

    color: #555;

    font-size: 20px;

    line-height: 1;

    cursor: pointer;

}


/* FAQ LIST */

.faq-list {

    border-top:
        1px solid #dfe1df;

}


.faq-item {

    border-bottom:
        1px solid #dfe1df;

    background: transparent;

    transition:
        background .3s ease;

}


.faq-item.active {

    background: #ffffff;

}


/* QUESTION */

.faq-question {

    width: 100%;

    min-height: 88px;

    padding:
        18px 26px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 20px;

    border: 0;

    background: transparent;

    color: #202323;

    text-align: left;

    cursor: pointer;

}


.faq-question-left {

    display: flex;

    align-items: center;

    gap: 22px;

    min-width: 0;

}


.faq-number {

    flex: 0 0 auto;

    color: #f5820b;

    font-size: 12px;

    font-weight: 800;

    letter-spacing: 1px;

}


.faq-question-text {

    font-size: 17px;

    font-weight: 700;

    line-height: 1.45;

    color: #202323;

    transition:
        color .25s ease;

}


.faq-item.active .faq-question-text {

    color: #123c35;

}


.faq-icon {

    position: relative;

    flex: 0 0 auto;

    width: 38px;
    height: 38px;

    border-radius: 50%;

    background: #f3f4f2;

    transition:
        background .3s ease,
        transform .3s ease;

}


.faq-item.active .faq-icon {

    background: #f5820b;

    transform: rotate(180deg);

}


.faq-icon span {

    position: absolute;

    top: 50%;
    left: 50%;

    width: 13px;
    height: 2px;

    background: #202323;

    transform:
        translate(-50%, -50%);

}


.faq-icon span:last-child {

    transform:
        translate(-50%, -50%) rotate(90deg);

    transition:
        transform .3s ease;

}


.faq-item.active .faq-icon span:last-child {

    transform:
        translate(-50%, -50%) rotate(0deg);

}


.faq-item.active .faq-icon span {

    background: #ffffff;

}


/* ANSWER */

.faq-answer-wrapper {

    overflow: hidden;

}


.faq-answer {

    display: flex;

    gap: 24px;

    padding:
        0 90px 30px 90px;

}


.answer-line {

    flex: 0 0 auto;

    width: 3px;

    border-radius: 4px;

    background: #f5820b;

}


.faq-answer p {

    max-width: 820px;

    margin: 0;

    color: #74787e;

    font-size: 15px;

    line-height: 1.85;

}


/* TRANSITION */

.faq-enter-active,
.faq-leave-active {

    transition:
        height .35s ease;

}


.faq-enter-from,
.faq-leave-to {

    height: 0;

}


/* EMPTY */

.faq-empty {

    padding: 70px 20px;

    text-align: center;

}


.empty-icon {

    width: 58px;
    height: 58px;

    display: flex;

    align-items: center;
    justify-content: center;

    margin: 0 auto 18px;

    border-radius: 50%;

    background: #123c35;

    color: #ffffff;

    font-size: 24px;

    font-weight: 800;

}


.faq-empty h3 {

    margin: 0 0 8px;

    color: #202323;

    font-size: 22px;

}


.faq-empty p {

    margin: 0 0 22px;

    color: #74787e;

}


.faq-empty button {

    padding: 12px 20px;

    border: 0;

    border-radius: 100px;

    background: #f5820b;

    color: #ffffff;

    font-weight: 700;

    cursor: pointer;

}


/* BOTTOM CTA */

.faq-bottom {

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 30px;

    margin-top: 42px;

    padding: 28px 30px;

    border-radius: 18px;

    background: #123c35;

    box-shadow:
        0 20px 50px rgba(18, 60, 53, .12);

}


.faq-bottom-content {

    display: flex;

    align-items: center;

    gap: 16px;

}


.faq-bottom-icon {

    width: 44px;
    height: 44px;

    flex: 0 0 auto;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: #f5820b;

    color: #ffffff;

    font-size: 20px;

    font-weight: 800;

}


.faq-bottom-content strong {

    display: block;

    margin-bottom: 4px;

    color: #ffffff;

    font-size: 16px;

}


.faq-bottom-content span {

    display: block;

    color: rgba(255, 255, 255, .68);

    font-size: 13px;

}


.faq-contact-btn {

    display: inline-flex;

    align-items: center;

    gap: 14px;

    padding: 14px 22px;

    border-radius: 100px;

    background: #f5820b;

    color: #ffffff;

    text-decoration: none;

    font-size: 14px;

    font-weight: 800;

    transition:
        background .25s ease,
        transform .25s ease;

}


.faq-contact-btn span {

    font-size: 20px;

    line-height: 1;

}


.faq-contact-btn:hover {

    background: #ffffff;

    color: #123c35;

    transform: translateY(-2px);

}


/* TABLET */

@media (max-width: 900px) {

    .faq-section {

        padding:
            80px 20px;

    }


    .faq-question {

        padding:
            18px 20px;

    }


    .faq-answer {

        padding:
            0 70px 28px 70px;

    }

}


/* MOBILE */

@media (max-width: 700px) {

    .faq-section {

        padding:
            70px 18px;

    }


    .faq-header h2 {

        font-size: 38px;

        letter-spacing: -1.5px;

    }


    .faq-header p {

        font-size: 14px;

    }


    .faq-search-wrapper {

        justify-content: stretch;

    }


    .faq-search {

        max-width: none;

    }


    .faq-question {

        min-height: 78px;

        padding:
            16px 12px;

        gap: 12px;

    }


    .faq-question-left {

        gap: 12px;

    }


    .faq-number {

        font-size: 10px;

    }


    .faq-question-text {

        font-size: 14px;

    }


    .faq-icon {

        width: 32px;
        height: 32px;

    }


    .faq-answer {

        gap: 14px;

        padding:
            0 20px 24px 38px;

    }


    .faq-answer p {

        font-size: 13px;

        line-height: 1.7;

    }


    .faq-bottom {

        flex-direction: column;

        align-items: flex-start;

        padding: 24px;

    }


    .faq-contact-btn {

        width: 100%;

        justify-content: center;

    }

}
</style>