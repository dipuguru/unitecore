<template>
    <div class="chatbot-wrapper">

        <!-- =====================================================
         FLOATING CHAT BUTTON
    ====================================================== -->
        <button v-if="!isOpen" class="chatbot-floating-button" type="button" aria-label="Open UniteCore AI Assistant"
            @click="openChat">
            <span class="chat-icon">✦</span>
            <span class="online-dot"></span>
        </button>


        <!-- =====================================================
         CHAT WINDOW
    ====================================================== -->
        <transition name="chat-slide">

            <div v-if="isOpen" class="chatbot-window">

                <!-- =================================================
             HEADER
        ================================================== -->
                <header class="chatbot-header">

                    <div class="header-left">

                        <div class="bot-avatar">
                            <span>U</span>
                        </div>

                        <div class="header-info">
                            <strong>UniteCore AI</strong>

                            <span>
                                <i class="status-dot"></i>
                                Online
                            </span>
                        </div>

                    </div>

                    <button type="button" class="close-button" aria-label="Close chatbot" @click="closeChat">
                        ×
                    </button>

                </header>


                <!-- =================================================
             CHAT BODY
        ================================================== -->
                <div ref="messagesContainer" class="chatbot-body">

                    <!-- ===============================================
               WELCOME / QUALIFICATION START
          ================================================ -->
                    <template v-if="messages.length === 0">

                        <div class="welcome-message">

                            <div class="welcome-avatar">
                                ✦
                            </div>

                            <h3>How can we help?</h3>

                            <p>
                                I'm the UniteCore AI assistant. I can answer questions
                                about our solutions and help understand your requirement.
                            </p>

                        </div>


                        <!-- =============================================
                 LOOKING FOR
            ============================================== -->
                        <div class="question-block">

                            <div class="question-label">
                                What are you looking for today?
                            </div>

                            <div class="quick-options">

                                <button v-for="option in serviceOptions" :key="option" type="button"
                                    class="quick-option" @click="selectService(option)">
                                    {{ option }}
                                </button>

                            </div>

                        </div>


                        <!-- =============================================
                 STARTER QUESTIONS
            ============================================== -->
                        <div class="starter-section">

                            <div class="starter-title">
                                Or ask us
                            </div>

                            <button v-for="question in starterQuestions" :key="question" type="button"
                                class="starter-question" @click="askStarterQuestion(question)">
                                {{ question }}
                            </button>

                        </div>

                    </template>


                    <!-- =================================================
               NORMAL MESSAGES
          ================================================== -->
                    <template v-for="(message, index) in messages" :key="index">

                        <div class="message-row" :class="message.role === 'user' ? 'user-row' : 'bot-row'">

                            <div v-if="message.role === 'assistant'" class="small-avatar">
                                U
                            </div>

                            <div class="message-bubble" :class="message.role === 'user'
                                ? 'user-message'
                                : 'bot-message'">
                                {{ message.content }}
                            </div>

                        </div>

                    </template>


                    <!-- =================================================
               LOADING
          ================================================== -->
                    <div v-if="isLoading" class="message-row bot-row">

                        <div class="small-avatar">
                            U
                        </div>

                        <div class="typing-bubble">

                            <span></span>
                            <span></span>
                            <span></span>

                        </div>

                    </div>


                    <!-- =================================================
               QUALIFICATION OPTIONS
          ================================================== -->
                    <div v-if="qualificationStep === 'challenge'" class="qualification-options">

                        <div class="qualification-title">
                            What is the biggest challenge your organization is facing?
                        </div>

                        <button v-for="challenge in challengeOptions" :key="challenge" type="button"
                            class="qualification-button" :disabled="isLoading" @click="selectChallenge(challenge)">
                            {{ challenge }}
                        </button>

                    </div>


                    <!-- =================================================
               EXPERT CTA
          ================================================== -->
                    <div v-if="showExpertCta" class="expert-cta">

                        <div class="expert-cta-title">
                            Would you like to speak with a UniteCore expert?
                        </div>

                        <div class="expert-cta-text">
                            Share your details and our team can understand your
                            requirement and recommend a suitable solution.
                        </div>

                        <button type="button" class="expert-button" @click="openLeadForm">
                            Talk to an Expert
                        </button>

                    </div>


                    <!-- =================================================
               LEAD FORM
          ================================================== -->
                    <div v-if="showLeadForm" class="lead-form-container">

                        <div class="lead-form-title">
                            Let's connect
                        </div>

                        <div class="lead-form-subtitle">
                            Tell us a little about your requirement.
                        </div>


                        <form @submit.prevent="submitLead">

                            <input v-model.trim="lead.name" type="text" placeholder="Name *" autocomplete="name"
                                required />

                            <input v-model.trim="lead.company" type="text" placeholder="Company"
                                autocomplete="organization" />

                            <input v-model.trim="lead.email" type="email" placeholder="Work email *"
                                autocomplete="email" required />

                            <input v-model.trim="lead.phone" type="tel" placeholder="Phone number *" autocomplete="tel"
                                required />

                            <textarea v-model.trim="lead.requirement" rows="3" placeholder="Requirement *"
                                required></textarea>


                            <button type="submit" class="submit-lead-button" :disabled="isSubmittingLead">

                                <span v-if="!isSubmittingLead">
                                    Submit Requirement
                                </span>

                                <span v-else>
                                    Submitting...
                                </span>

                            </button>

                        </form>

                    </div>

                </div>


                <!-- =================================================
             FOOTER / INPUT
        ================================================== -->
                <footer v-if="!showLeadForm" class="chatbot-footer">

                    <div class="input-container">

                        <textarea v-model="inputMessage" rows="1" placeholder="Ask UniteCore..."
                            @keydown.enter.exact.prevent="sendMessage"></textarea>

                        <button type="button" class="send-button" :disabled="isLoading || !inputMessage.trim()"
                            @click="sendMessage">
                            ↑
                        </button>

                    </div>

                    <div class="footer-note">
                        Powered by UniteCore AI
                    </div>

                </footer>


                <!-- =================================================
             LEAD FORM FOOTER
        ================================================== -->
                <footer v-if="showLeadForm" class="chatbot-footer lead-footer">
                    <button type="button" class="back-chat-button" @click="showLeadForm = false">
                        ← Back to chat
                    </button>
                </footer>

            </div>

        </transition>

    </div>
</template>


<script>
export default {

    name: "Chat-bot",

    data() {
        return {

            /* =====================================================
               CHAT STATE
            ====================================================== */

            isOpen: false,

            isLoading: false,

            isSubmittingLead: false,

            inputMessage: "",


            /* =====================================================
               CHAT API
            ====================================================== */

            apiUrl:
                process.env.VUE_APP_CHATBOT_API ||
                "http://localhost:3001",


            /* =====================================================
               MESSAGES
            ====================================================== */

            messages: [],


            /* =====================================================
               QUALIFICATION
            ====================================================== */

            qualificationStep: null,

            selectedService: "",

            selectedChallenge: "",


            /* =====================================================
               CTA
            ====================================================== */

            showExpertCta: false,

            showLeadForm: false,


            /* =====================================================
               LEAD
            ====================================================== */

            lead: {

                name: "",

                company: "",

                email: "",

                phone: "",

                requirement: ""

            },


            /* =====================================================
               SERVICE OPTIONS
            ====================================================== */

            serviceOptions: [

                "Cybersecurity",

                "Data Management",

                "Data Analytics",

                "Cloud Solutions",

                "IT Consulting",

                "IoT / OT Solutions",

                "Something else"

            ],


            /* =====================================================
               CHALLENGE OPTIONS
            ====================================================== */

            challengeOptions: [

                "Data security",

                "Data integration",

                "Poor data quality",

                "Cybersecurity threats",

                "IT infrastructure",

                "Business reporting/analytics",

                "Cloud migration",

                "Other"

            ],


            /* =====================================================
               STARTER QUESTIONS
            ====================================================== */

            starterQuestions: [

                "What does UniteCore do?",

                "What cybersecurity solutions do you provide?",

                "How can you help with Data Analytics?",

                "What Data Management solutions do you offer?",

                "Do you provide Cloud Solutions?",

                "Can you help improve our IT infrastructure?",

                "Can you help us with Data Security?",

                "Which solution is right for my business?",

                "I want to speak with an expert",

                "I want to request a quotation"

            ]

        };
    },


    methods: {

        /* =======================================================
           OPEN CHAT
        ======================================================== */

        openChat() {

            this.isOpen = true;

        },


        /* =======================================================
           CLOSE CHAT
        ======================================================== */

        closeChat() {

            this.isOpen = false;

        },


        /* =======================================================
           ADD BOT MESSAGE
        ======================================================== */

        addBotMessage(content) {

            this.messages.push({

                role: "assistant",

                content

            });

            this.scrollToBottom();

        },


        /* =======================================================
           ADD USER MESSAGE
        ======================================================== */

        addUserMessage(content) {

            this.messages.push({

                role: "user",

                content

            });

            this.scrollToBottom();

        },


        /* =======================================================
           SERVICE SELECTION
        ======================================================== */

        selectService(service) {

            this.selectedService = service;

            this.addUserMessage(service);


            if (service === "Something else") {

                this.qualificationStep = "challenge";

                this.addBotMessage(
                    "Sure. What is the biggest challenge your organization is facing?"
                );

                return;

            }


            this.qualificationStep = "challenge";

            this.addBotMessage(
                `Thanks. I can help with ${service}. What is the biggest challenge your organization is facing?`
            );

        },


        /* =======================================================
           CHALLENGE SELECTION
        ======================================================== */

        async selectChallenge(challenge) {

            this.selectedChallenge = challenge;

            this.qualificationStep = null;

            this.addUserMessage(challenge);


            const qualificationMessage =
                `We are interested in ${this.selectedService || "a UniteCore solution"}. ` +
                `Our biggest challenge is ${challenge}. ` +
                `Please explain how UniteCore can help and recommend the appropriate next step.`;


            await this.sendToAI(qualificationMessage, true);

        },


        /* =======================================================
           STARTER QUESTION
        ======================================================== */

        async askStarterQuestion(question) {

            this.addUserMessage(question);

            await this.sendToAI(question, true);

        },


        /* =======================================================
           SEND NORMAL MESSAGE
        ======================================================== */

        async sendMessage() {

            const message = this.inputMessage.trim();

            if (!message || this.isLoading) {
                return;
            }

            this.inputMessage = "";

            this.addUserMessage(message);

            await this.sendToAI(message, true);

        },


        /* =======================================================
           SEND TO AI
        ======================================================== */

        async sendToAI(message, showLeadOption = true) {

            this.isLoading = true;

            this.showExpertCta = false;


            try {

                const conversation = this.messages
                    .slice(-12)
                    .map(item => ({

                        role: item.role,

                        content: item.content

                    }));


                const response = await fetch(
                    `${this.apiUrl}/api/chat`,
                    {

                        method: "POST",

                        headers: {

                            "Content-Type": "application/json"

                        },

                        body: JSON.stringify({

                            message,

                            conversation,

                            selectedService: this.selectedService,

                            selectedChallenge: this.selectedChallenge

                        })

                    }
                );


                const data = await response.json();


                if (!response.ok || !data.success) {

                    throw new Error(
                        data.error ||
                        "Unable to get a response."
                    );

                }


                this.addBotMessage(data.reply);


                if (
                    showLeadOption &&
                    (
                        data.shouldOfferExpert === true ||
                        this.isLeadIntent(message)
                    )
                ) {

                    this.showExpertCta = true;

                }

            } catch (error) {

                console.error("Chatbot error:", error);

                this.addBotMessage(
                    "I'm sorry, I couldn't process that right now. Please try again or use Talk to an Expert."
                );

                this.showExpertCta = true;

            } finally {

                this.isLoading = false;

                this.scrollToBottom();

            }

        },


        /* =======================================================
           DETECT LEAD INTENT
        ======================================================== */

        isLeadIntent(message) {

            const text = message.toLowerCase();

            const keywords = [

                "expert",

                "quotation",

                "quote",

                "pricing",

                "price",

                "proposal",

                "contact",

                "project",

                "requirement",

                "demo",

                "talk to",

                "speak with",

                "speak to"

            ];


            return keywords.some(
                keyword => text.includes(keyword)
            );

        },


        /* =======================================================
           OPEN LEAD FORM
        ======================================================== */

        openLeadForm() {

            this.showLeadForm = true;

            this.showExpertCta = false;


            if (!this.lead.requirement) {

                const requirementParts = [];

                if (this.selectedService) {

                    requirementParts.push(
                        `Interested in: ${this.selectedService}`
                    );

                }

                if (this.selectedChallenge) {

                    requirementParts.push(
                        `Challenge: ${this.selectedChallenge}`
                    );

                }

                this.lead.requirement =
                    requirementParts.join("\n");

            }


            this.scrollToBottom();

        },


        /* =======================================================
           SUBMIT LEAD
        ======================================================== */

        async submitLead() {

            if (this.isSubmittingLead) {

                return;

            }


            this.isSubmittingLead = true;


            try {

                const response = await fetch(
                    `${this.apiUrl}/api/leads`,
                    {

                        method: "POST",

                        headers: {

                            "Content-Type": "application/json"

                        },

                        body: JSON.stringify({

                            ...this.lead,

                            selectedService:
                                this.selectedService,

                            selectedChallenge:
                                this.selectedChallenge

                        })

                    }
                );


                const data = await response.json();


                if (!response.ok || !data.success) {

                    throw new Error(
                        data.error ||
                        "Unable to submit your request."
                    );

                }


                this.showLeadForm = false;


                this.addBotMessage(
                    "Thank you! Your requirement has been received. The UniteCore team will contact you shortly."
                );


                this.resetLead();


            } catch (error) {

                console.error("Lead submission error:", error);

                alert(
                    error.message ||
                    "Unable to submit your request. Please try again."
                );

            } finally {

                this.isSubmittingLead = false;

            }

        },


        /* =======================================================
           RESET LEAD
        ======================================================== */

        resetLead() {

            this.lead = {

                name: "",

                company: "",

                email: "",

                phone: "",

                requirement: ""

            };

        },


        /* =======================================================
           SCROLL
        ======================================================== */

        scrollToBottom() {

            this.$nextTick(() => {

                const container =
                    this.$refs.messagesContainer;

                if (container) {

                    container.scrollTop =
                        container.scrollHeight;

                }

            });

        }

    }

};
</script>


<style scoped>
/* ==========================================================
   WRAPPER
========================================================== */

.chatbot-wrapper {

    position: fixed;

    right: 18px;

    bottom: 18px;

    z-index: 9999;

    font-family:
        Inter,
        Arial,
        sans-serif;

}


/* ==========================================================
   FLOATING BUTTON
========================================================== */

.chatbot-floating-button {

    width: 48px;

    height: 48px;

    border: 0;

    border-radius: 50%;

    background:
        linear-gradient(135deg,
            #f5820b,
            #ff9f2f);

    color: #ffffff;

    display: flex;

    align-items: center;

    justify-content: center;

    cursor: pointer;

    box-shadow:
        0 8px 25px rgba(0, 0, 0, 0.22);

    position: relative;

    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;

}


.chatbot-floating-button:hover {

    transform: translateY(-2px);

    box-shadow:
        0 12px 30px rgba(0, 0, 0, 0.28);

}


.chat-icon {

    font-size: 21px;

}


.online-dot {

    position: absolute;

    right: 2px;

    bottom: 2px;

    width: 10px;

    height: 10px;

    border-radius: 50%;

    background: #23c55e;

    border: 2px solid #ffffff;

}


/* ==========================================================
   CHAT WINDOW
========================================================== */

.chatbot-window {

    width: 330px;

    height: 500px;

    max-height:
        calc(100vh - 35px);

    background: #ffffff;

    border:
        1px solid #e5e5e1;

    border-radius: 17px;

    overflow: hidden;

    display: flex;

    flex-direction: column;

    box-shadow:
        0 20px 60px rgba(0, 0, 0, 0.20);

}


/* ==========================================================
   HEADER
========================================================== */

.chatbot-header {

    min-height: 58px;

    padding:
        9px 12px;

    background: #08090b;

    color: #ffffff;

    display: flex;

    align-items: center;

    justify-content: space-between;

}


.header-left {

    display: flex;

    align-items: center;

    gap: 9px;

}


.bot-avatar {

    width: 34px;

    height: 34px;

    border-radius: 10px;

    background:
        linear-gradient(135deg,
            #f5820b,
            #ff9f2f);

    display: flex;

    align-items: center;

    justify-content: center;

    font-weight: 800;

    font-size: 15px;

}


.header-info {

    display: flex;

    flex-direction: column;

    gap: 2px;

}


.header-info strong {

    font-size: 13px;

}


.header-info span {

    color: #aeb2b8;

    font-size: 9px;

}


.status-dot {

    display: inline-block;

    width: 6px;

    height: 6px;

    border-radius: 50%;

    background: #27c56b;

    margin-right: 3px;

}


.close-button {

    width: 28px;

    height: 28px;

    border: 0;

    border-radius: 7px;

    background: rgba(255, 255, 255, 0.08);

    color: #ffffff;

    font-size: 20px;

    line-height: 1;

    cursor: pointer;

}


/* ==========================================================
   BODY
========================================================== */

.chatbot-body {

    flex: 1;

    overflow-y: auto;

    padding: 12px;

    background:
        #fafafa;

    scrollbar-width: thin;

}


.chatbot-body::-webkit-scrollbar {

    width: 4px;

}


.chatbot-body::-webkit-scrollbar-thumb {

    background: #d2d2d2;

    border-radius: 10px;

}


/* ==========================================================
   WELCOME
========================================================== */

.welcome-message {

    text-align: center;

    padding:
        8px 5px 12px;

}


.welcome-avatar {

    width: 40px;

    height: 40px;

    margin:
        0 auto 7px;

    border-radius: 12px;

    background:
        #fff0df;

    color: #f5820b;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 19px;

    font-weight: 800;

}


.welcome-message h3 {

    margin:
        0 0 4px;

    color: #08090b;

    font-size: 15px;

}


.welcome-message p {

    margin: 0;

    color: #74787e;

    font-size: 10.5px;

    line-height: 1.5;

}


/* ==========================================================
   QUESTION BLOCK
========================================================== */

.question-block {

    margin-top: 4px;

}


.question-label {

    margin-bottom: 7px;

    color: #08090b;

    font-size: 11px;

    font-weight: 700;

}


.quick-options {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 5px;

}


.quick-option {

    border:
        1px solid #e5e5e1;

    background: #ffffff;

    color: #242629;

    border-radius: 7px;

    padding:
        7px 6px;

    font-size: 10px;

    text-align: left;

    cursor: pointer;

    transition: all 0.15s ease;

}


.quick-option:hover {

    border-color: #f5820b;

    color: #f5820b;

    background: #fff8ef;

}


/* ==========================================================
   STARTER QUESTIONS
========================================================== */

.starter-section {

    margin-top: 13px;

}


.starter-title {

    color: #74787e;

    font-size: 9px;

    font-weight: 700;

    text-transform: uppercase;

    letter-spacing: 0.06em;

    margin-bottom: 5px;

}


.starter-question {

    display: block;

    width: 100%;

    padding:
        6px 8px;

    margin-bottom: 4px;

    border: 0;

    background: transparent;

    color: #33363a;

    text-align: left;

    font-size: 10px;

    cursor: pointer;

    border-radius: 6px;

}


.starter-question:hover {

    background: #fff0df;

    color: #f5820b;

}


/* ==========================================================
   MESSAGE ROW
========================================================== */

.message-row {

    display: flex;

    gap: 6px;

    margin-bottom: 9px;

}


.bot-row {

    align-items: flex-start;

}


.user-row {

    justify-content: flex-end;

}


.small-avatar {

    flex: 0 0 24px;

    width: 24px;

    height: 24px;

    border-radius: 7px;

    background: #08090b;

    color: #ffffff;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 9px;

    font-weight: 700;

}


.message-bubble {

    max-width: 80%;

    padding:
        8px 10px;

    border-radius: 10px;

    font-size: 10.5px;

    line-height: 1.5;

    white-space: pre-wrap;

}


.bot-message {

    background: #ffffff;

    border:
        1px solid #e8e8e5;

    color: #303236;

    border-top-left-radius: 3px;

}


.user-message {

    background: #f5820b;

    color: #ffffff;

    border-top-right-radius: 3px;

}


/* ==========================================================
   TYPING
========================================================== */

.typing-bubble {

    display: flex;

    align-items: center;

    gap: 3px;

    padding:
        10px 11px;

    background: #ffffff;

    border:
        1px solid #e8e8e5;

    border-radius: 10px;

}


.typing-bubble span {

    width: 5px;

    height: 5px;

    background: #a4a4a4;

    border-radius: 50%;

    animation:
        typing 1.2s infinite;

}


.typing-bubble span:nth-child(2) {

    animation-delay: 0.15s;

}


.typing-bubble span:nth-child(3) {

    animation-delay: 0.3s;

}


@keyframes typing {

    0%,
    60%,
    100% {

        opacity: 0.3;

        transform: translateY(0);

    }

    30% {

        opacity: 1;

        transform: translateY(-2px);

    }

}


/* ==========================================================
   QUALIFICATION
========================================================== */

.qualification-options {

    margin:
        6px 0 10px 30px;

}


.qualification-title {

    font-size: 10px;

    line-height: 1.4;

    color: #08090b;

    font-weight: 700;

    margin-bottom: 6px;

}


.qualification-button {

    width: 100%;

    padding:
        6px 8px;

    margin-bottom: 4px;

    border:
        1px solid #e5e5e1;

    border-radius: 6px;

    background: #ffffff;

    color: #33363a;

    text-align: left;

    font-size: 9.5px;

    cursor: pointer;

}


.qualification-button:hover {

    border-color: #f5820b;

    color: #f5820b;

    background: #fff8ef;

}


/* ==========================================================
   EXPERT CTA
========================================================== */

.expert-cta {

    margin:
        8px 0 10px 30px;

    padding: 10px;

    border-radius: 9px;

    background: #fff6ea;

    border:
        1px solid #ffd9ad;

}


.expert-cta-title {

    font-size: 10px;

    font-weight: 700;

    color: #08090b;

}


.expert-cta-text {

    margin-top: 3px;

    color: #74787e;

    font-size: 9px;

    line-height: 1.4;

}


.expert-button {

    width: 100%;

    margin-top: 7px;

    padding: 7px;

    border: 0;

    border-radius: 6px;

    background: #f5820b;

    color: #ffffff;

    font-size: 10px;

    font-weight: 700;

    cursor: pointer;

}


/* ==========================================================
   LEAD FORM
========================================================== */

.lead-form-container {

    margin-top: 4px;

    padding: 2px;

}


.lead-form-title {

    color: #08090b;

    font-size: 14px;

    font-weight: 800;

}


.lead-form-subtitle {

    color: #74787e;

    font-size: 9.5px;

    line-height: 1.4;

    margin:
        3px 0 9px;

}


.lead-form-container input,
.lead-form-container textarea {

    width: 100%;

    box-sizing: border-box;

    margin-bottom: 6px;

    padding:
        7px 8px;

    border:
        1px solid #dededb;

    border-radius: 6px;

    outline: none;

    background: #ffffff;

    color: #222;

    font-family: inherit;

    font-size: 10px;

}


.lead-form-container input:focus,
.lead-form-container textarea:focus {

    border-color: #f5820b;

}


.lead-form-container textarea {

    resize: none;

}


.submit-lead-button {

    width: 100%;

    padding: 8px;

    border: 0;

    border-radius: 7px;

    background: #f5820b;

    color: #ffffff;

    font-size: 10px;

    font-weight: 700;

    cursor: pointer;

}


.submit-lead-button:disabled {

    opacity: 0.6;

    cursor: not-allowed;

}


/* ==========================================================
   FOOTER
========================================================== */

.chatbot-footer {

    padding:
        8px 10px 7px;

    background: #ffffff;

    border-top:
        1px solid #e9e9e6;

}


.input-container {

    display: flex;

    align-items: flex-end;

    gap: 5px;

}


.input-container textarea {

    flex: 1;

    min-height: 30px;

    max-height: 65px;

    resize: none;

    border:
        1px solid #dededb;

    border-radius: 8px;

    padding:
        7px 8px;

    outline: none;

    font-family: inherit;

    font-size: 10px;

}


.input-container textarea:focus {

    border-color: #f5820b;

}


.send-button {

    width: 30px;

    height: 30px;

    flex: 0 0 30px;

    border: 0;

    border-radius: 8px;

    background: #f5820b;

    color: #ffffff;

    font-size: 16px;

    cursor: pointer;

}


.send-button:disabled {

    opacity: 0.4;

    cursor: not-allowed;

}


.footer-note {

    margin-top: 4px;

    color: #a0a0a0;

    text-align: center;

    font-size: 8px;

}


.lead-footer {

    text-align: center;

}


.back-chat-button {

    border: 0;

    background: transparent;

    color: #f5820b;

    font-size: 9px;

    cursor: pointer;

}


/* ==========================================================
   ANIMATION
========================================================== */

.chat-slide-enter-active,
.chat-slide-leave-active {

    transition:
        opacity 0.2s ease,
        transform 0.2s ease;

}


.chat-slide-enter-from,
.chat-slide-leave-to {

    opacity: 0;

    transform:
        translateY(10px) scale(0.98);

}


/* ==========================================================
   MOBILE
========================================================== */

@media (max-width: 480px) {

    .chatbot-wrapper {

        right: 12px;

        bottom: 12px;

    }


    .chatbot-window {

        width:
            calc(100vw - 24px);

        height: 450px;

        max-height:
            calc(100vh - 75px);

    }


    .chatbot-floating-button {

        width: 45px;

        height: 45px;

    }

}
</style>