<template>
    <div class="unitecore-chatbot">

        <!-- =====================================================
         CHAT BUTTON
    ====================================================== -->

        <button v-if="!isOpen" class="chatbot-button" @click="openChat" aria-label="Open UniteCore AI">
            <span class="chatbot-icon">✦</span>

            <span class="chatbot-button-text">
                Ask UniteCore AI
            </span>
        </button>


        <!-- =====================================================
         CHAT WINDOW
    ====================================================== -->

        <div v-if="isOpen" class="chatbot-window">

            <!-- HEADER -->

            <div class="chatbot-header">

                <div class="chatbot-brand">

                    <div class="brand-icon">
                        ✦
                    </div>

                    <div>
                        <div class="brand-title">
                            UniteCore AI
                        </div>

                        <div class="brand-status">
                            <span></span>
                            Online
                        </div>
                    </div>

                </div>

                <button class="close-button" @click="closeChat">
                    ×
                </button>

            </div>


            <!-- =================================================
           BODY
      ================================================== -->

            <div ref="messagesContainer" class="chatbot-messages">

                <!-- WELCOME -->

                <div class="message assistant-message">

                    <div class="message-avatar">
                        ✦
                    </div>

                    <div class="message-content">

                        <div class="message-bubble">

                            Hi! I'm the UniteCore AI assistant.

                            <br />
                            <br />

                            I can help you learn about our
                            <strong>
                                data, security, analytics and technology solutions.
                            </strong>

                            <br />
                            <br />

                            How can I help you today?

                        </div>

                    </div>

                </div>


                <!-- SUGGESTIONS -->

                <div v-if="messages.length === 0" class="suggestions">

                    <button v-for="suggestion in suggestions" :key="suggestion" @click="sendSuggestion(suggestion)">
                        {{ suggestion }}
                    </button>

                    <button class="expert-suggestion" @click="openLeadForm">
                        Talk to an Expert
                    </button>

                </div>


                <!-- CHAT MESSAGES -->

                <div v-for="(message, index) in messages" :key="index" :class="[
                    'message',
                    message.role === 'user'
                        ? 'user-message'
                        : 'assistant-message'
                ]">

                    <div v-if="message.role === 'assistant'" class="message-avatar">
                        ✦
                    </div>

                    <div class="message-content">

                        <div class="message-bubble">
                            {{ message.content }}
                        </div>

                    </div>

                </div>


                <!-- TYPING -->

                <div v-if="isTyping" class="message assistant-message">

                    <div class="message-avatar">
                        ✦
                    </div>

                    <div class="typing-indicator">

                        <span></span>
                        <span></span>
                        <span></span>

                    </div>

                </div>


                <!-- ERROR -->

                <div v-if="errorMessage" class="chat-error">
                    {{ errorMessage }}
                </div>


                <!-- =================================================
             LEAD FORM
        ================================================== -->

                <div v-if="showLeadForm" class="lead-form-card">

                    <div class="lead-form-header">

                        <div class="lead-form-icon">
                            ✓
                        </div>

                        <div>

                            <h3>
                                Talk to an Expert
                            </h3>

                            <p>
                                Tell us a little about your requirement.
                            </p>

                        </div>

                    </div>


                    <form @submit.prevent="submitLead" class="lead-form">

                        <div class="form-group">

                            <label>
                                Name *
                            </label>

                            <input v-model="lead.name" type="text" placeholder="Your name" required />

                        </div>


                        <div class="form-group">

                            <label>
                                Company
                            </label>

                            <input v-model="lead.company" type="text" placeholder="Company name" />

                        </div>


                        <div class="form-group">

                            <label>
                                Email *
                            </label>

                            <input v-model="lead.email" type="email" placeholder="you@company.com" required />

                        </div>


                        <div class="form-group">

                            <label>
                                Phone *
                            </label>

                            <input v-model="lead.phone" type="tel" placeholder="+91 XXXXX XXXXX" required />

                        </div>


                        <div class="form-group">

                            <label>
                                Requirement *
                            </label>

                            <textarea v-model="lead.requirement" rows="4"
                                placeholder="Tell us what you need help with..." required></textarea>

                        </div>


                        <button type="submit" class="lead-submit" :disabled="isSubmitting">

                            <span v-if="!isSubmitting">
                                Send Request →
                            </span>

                            <span v-else>
                                Sending...
                            </span>

                        </button>


                        <button type="button" class="cancel-lead" @click="closeLeadForm">
                            Back to chat
                        </button>

                    </form>

                </div>


                <!-- =================================================
             LEAD SUCCESS
        ================================================== -->

                <div v-if="leadSubmitted" class="lead-success">

                    <div class="success-icon">
                        ✓
                    </div>

                    <h3>
                        Thank you!
                    </h3>

                    <p>
                        Your request has been received.
                        The UniteCore team will contact you shortly.
                    </p>

                    <button @click="startNewConversation">
                        Continue Chat
                    </button>

                </div>

            </div>


            <!-- =================================================
           INPUT
      ================================================== -->

            <div v-if="!showLeadForm && !leadSubmitted" class="chatbot-input-area">

                <input v-model="userInput" type="text" placeholder="Ask about UniteCore..." @keyup.enter="sendMessage"
                    :disabled="isTyping" />

                <button @click="sendMessage" :disabled="!userInput.trim() || isTyping" aria-label="Send">
                    →
                </button>

            </div>

        </div>

    </div>
</template>


<script>
export default {

    name: "UniteCoreChatbot",

    data() {
        return {

            isOpen: false,

            userInput: "",

            isTyping: false,

            errorMessage: "",

            messages: [],

            showLeadForm: false,

            leadSubmitted: false,

            isSubmitting: false,

            suggestions: [
                "What services does UniteCore provide?",
                "What is Data Security?",
                "Tell me about Data Analytics",
                "What is IT / IoT / OT Consulting?"
            ],

            lead: {
                name: "",
                company: "",
                email: "",
                phone: "",
                requirement: ""
            }

        };
    },


    methods: {

        /* =====================================================
           OPEN / CLOSE
        ====================================================== */

        openChat() {

            this.isOpen = true;

            this.$nextTick(() => {
                this.scrollToBottom();
            });

        },


        closeChat() {

            this.isOpen = false;

        },


        /* =====================================================
           SUGGESTION
        ====================================================== */

        sendSuggestion(text) {

            this.userInput = text;

            this.sendMessage();

        },


        /* =====================================================
           SEND MESSAGE
        ====================================================== */

        async sendMessage() {

            const message = this.userInput.trim();

            if (!message || this.isTyping) {
                return;
            }

            this.errorMessage = "";

            this.messages.push({
                role: "user",
                content: message
            });

            this.userInput = "";

            this.isTyping = true;

            await this.$nextTick();

            this.scrollToBottom();


            try {

                const response = await fetch("/api/chat", {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({

                        message,

                        conversation: this.messages

                    })

                });


                const data = await response.json();


                if (!response.ok || !data.success) {
                    throw new Error(
                        data.error || "Unable to contact UniteCore AI."
                    );
                }


                this.messages.push({

                    role: "assistant",

                    content: data.reply

                });


            } catch (error) {

                console.error(error);

                this.errorMessage =
                    "Unable to connect to UniteCore AI. Please try again.";

            } finally {

                this.isTyping = false;

                await this.$nextTick();

                this.scrollToBottom();

            }

        },


        /* =====================================================
           TALK TO EXPERT
        ====================================================== */

        openLeadForm() {

            this.showLeadForm = true;

            this.errorMessage = "";

            this.$nextTick(() => {
                this.scrollToBottom();
            });

        },


        closeLeadForm() {

            this.showLeadForm = false;

        },


        /* =====================================================
           SUBMIT LEAD
        ====================================================== */

        async submitLead() {

            if (this.isSubmitting) {
                return;
            }

            this.errorMessage = "";

            this.isSubmitting = true;


            try {

                const response = await fetch("/api/leads", {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({

                        name: this.lead.name,

                        company: this.lead.company,

                        email: this.lead.email,

                        phone: this.lead.phone,

                        requirement: this.lead.requirement,

                        source: "UniteCore AI Chatbot"

                    })

                });


                const data = await response.json();


                if (!response.ok || !data.success) {

                    throw new Error(
                        data.error || "Unable to submit request."
                    );

                }


                this.showLeadForm = false;

                this.leadSubmitted = true;


            } catch (error) {

                console.error(error);

                this.errorMessage =
                    "We could not submit your request. Please try again.";

            } finally {

                this.isSubmitting = false;

            }

        },


        /* =====================================================
           NEW CHAT
        ====================================================== */

        startNewConversation() {

            this.messages = [];

            this.leadSubmitted = false;

            this.lead = {

                name: "",
                company: "",
                email: "",
                phone: "",
                requirement: ""

            };

            this.errorMessage = "";

        },


        /* =====================================================
           SCROLL
        ====================================================== */

        scrollToBottom() {

            const container =
                this.$refs.messagesContainer;

            if (!container) {
                return;
            }

            container.scrollTop =
                container.scrollHeight;

        }

    }

};
</script>


<style scoped>
/* =========================================================
   MAIN
========================================================= */

.unitecore-chatbot {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 99999;
    font-family: Inter, Arial, sans-serif;
}


/* =========================================================
   CHAT BUTTON
========================================================= */

.chatbot-button {
    display: flex;
    align-items: center;
    gap: 10px;

    border: none;

    background:
        linear-gradient(135deg,
            #f5820b,
            #ff9f2f);

    color: #ffffff;

    padding: 14px 20px;

    border-radius: 50px;

    font-weight: 700;

    font-size: 14px;

    cursor: pointer;

    box-shadow:
        0 15px 40px rgba(0, 0, 0, 0.25);

    transition: all 0.25s ease;
}


.chatbot-button:hover {

    transform: translateY(-3px);

    box-shadow:
        0 20px 45px rgba(0, 0, 0, 0.3);

}


.chatbot-icon {

    font-size: 20px;

}


/* =========================================================
   WINDOW
========================================================= */

.chatbot-window {

    width: 390px;

    height: 620px;

    background: #ffffff;

    border-radius: 22px;

    overflow: hidden;

    box-shadow:
        0 25px 80px rgba(0, 0, 0, 0.3);

    border: 1px solid #e5e5e1;

    display: flex;

    flex-direction: column;

}


/* =========================================================
   HEADER
========================================================= */

.chatbot-header {

    background:
        linear-gradient(135deg,
            #102e27,
            #183e34);

    color: #ffffff;

    padding: 18px;

    display: flex;

    align-items: center;

    justify-content: space-between;

}


.chatbot-brand {

    display: flex;

    align-items: center;

    gap: 12px;

}


.brand-icon {

    width: 42px;

    height: 42px;

    border-radius: 50%;

    background: #f5820b;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 21px;

}


.brand-title {

    font-weight: 800;

    font-size: 15px;

}


.brand-status {

    font-size: 11px;

    opacity: 0.8;

    margin-top: 3px;

}


.brand-status span {

    width: 7px;

    height: 7px;

    background: #58d68d;

    display: inline-block;

    border-radius: 50%;

    margin-right: 5px;

}


.close-button {

    background: transparent;

    color: #ffffff;

    border: none;

    font-size: 28px;

    cursor: pointer;

}


/* =========================================================
   MESSAGES
========================================================= */

.chatbot-messages {

    flex: 1;

    overflow-y: auto;

    padding: 18px;

    background: #f7f7f4;

}


.message {

    display: flex;

    gap: 9px;

    margin-bottom: 14px;

}


.user-message {

    justify-content: flex-end;

}


.message-avatar {

    min-width: 30px;

    height: 30px;

    border-radius: 50%;

    background: #f5820b;

    color: #ffffff;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 14px;

}


.message-content {

    max-width: 80%;

}


.message-bubble {

    background: #ffffff;

    color: #202522;

    padding: 12px 14px;

    border-radius: 14px;

    font-size: 13px;

    line-height: 1.6;

    box-shadow:
        0 2px 8px rgba(0, 0, 0, 0.04);

}


.user-message .message-bubble {

    background: #102e27;

    color: #ffffff;

    border-bottom-right-radius: 4px;

}


/* =========================================================
   SUGGESTIONS
========================================================= */

.suggestions {

    display: flex;

    flex-direction: column;

    gap: 8px;

    margin: 8px 0 20px 39px;

}


.suggestions button {

    text-align: left;

    background: #ffffff;

    border: 1px solid #deded8;

    border-radius: 10px;

    padding: 10px 12px;

    font-size: 12px;

    cursor: pointer;

    color: #102e27;

    transition: 0.2s ease;

}


.suggestions button:hover {

    border-color: #f5820b;

    color: #f5820b;

}


.suggestions .expert-suggestion {

    background: #f5820b;

    color: #ffffff;

    border-color: #f5820b;

    font-weight: 700;

}


/* =========================================================
   TYPING
========================================================= */

.typing-indicator {

    background: #ffffff;

    padding: 12px 15px;

    border-radius: 14px;

    display: flex;

    gap: 4px;

}


.typing-indicator span {

    width: 6px;

    height: 6px;

    background: #74787e;

    border-radius: 50%;

    animation: typing 1.2s infinite;

}


.typing-indicator span:nth-child(2) {

    animation-delay: 0.15s;

}


.typing-indicator span:nth-child(3) {

    animation-delay: 0.3s;

}


@keyframes typing {

    0%,
    60%,
    100% {

        transform: translateY(0);

    }

    30% {

        transform: translateY(-5px);

    }

}


/* =========================================================
   ERROR
========================================================= */

.chat-error {

    background: #fff0ec;

    color: #b42318;

    padding: 10px;

    border-radius: 10px;

    font-size: 12px;

    margin-top: 10px;

}


/* =========================================================
   LEAD FORM
========================================================= */

.lead-form-card {

    background: #ffffff;

    border-radius: 16px;

    padding: 18px;

    margin-top: 10px;

    border: 1px solid #e5e5e1;

}


.lead-form-header {

    display: flex;

    gap: 10px;

    align-items: center;

    margin-bottom: 15px;

}


.lead-form-icon {

    width: 38px;

    height: 38px;

    border-radius: 50%;

    background: #f5820b;

    color: #ffffff;

    display: flex;

    align-items: center;

    justify-content: center;

}


.lead-form-header h3 {

    margin: 0;

    font-size: 16px;

    color: #102e27;

}


.lead-form-header p {

    margin: 3px 0 0;

    font-size: 11px;

    color: #74787e;

}


.lead-form {

    display: flex;

    flex-direction: column;

    gap: 11px;

}


.form-group {

    display: flex;

    flex-direction: column;

    gap: 5px;

}


.form-group label {

    font-size: 11px;

    font-weight: 700;

    color: #102e27;

}


.form-group input,
.form-group textarea {

    width: 100%;

    box-sizing: border-box;

    border: 1px solid #dcdcd6;

    border-radius: 8px;

    padding: 9px 10px;

    font-size: 12px;

    outline: none;

    font-family: inherit;

}


.form-group input:focus,
.form-group textarea:focus {

    border-color: #f5820b;

}


.form-group textarea {

    resize: vertical;

}


.lead-submit {

    border: none;

    background: #f5820b;

    color: #ffffff;

    padding: 11px;

    border-radius: 9px;

    font-weight: 700;

    cursor: pointer;

}


.lead-submit:disabled {

    opacity: 0.6;

    cursor: not-allowed;

}


.cancel-lead {

    background: transparent;

    border: none;

    color: #74787e;

    font-size: 11px;

    cursor: pointer;

}


/* =========================================================
   SUCCESS
========================================================= */

.lead-success {

    background: #ffffff;

    border-radius: 16px;

    padding: 25px;

    text-align: center;

    margin-top: 20px;

}


.success-icon {

    width: 55px;

    height: 55px;

    border-radius: 50%;

    background: #f5820b;

    color: #ffffff;

    margin: auto;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 24px;

}


.lead-success h3 {

    color: #102e27;

    margin: 14px 0 7px;

}


.lead-success p {

    color: #74787e;

    font-size: 13px;

    line-height: 1.5;

}


.lead-success button {

    border: none;

    background: #102e27;

    color: #ffffff;

    padding: 10px 18px;

    border-radius: 8px;

    cursor: pointer;

}


/* =========================================================
   INPUT
========================================================= */

.chatbot-input-area {

    display: flex;

    gap: 8px;

    padding: 12px;

    border-top: 1px solid #e5e5e1;

    background: #ffffff;

}


.chatbot-input-area input {

    flex: 1;

    border: 1px solid #deded8;

    border-radius: 10px;

    padding: 10px 12px;

    outline: none;

    font-size: 13px;

}


.chatbot-input-area input:focus {

    border-color: #f5820b;

}


.chatbot-input-area button {

    width: 40px;

    border: none;

    border-radius: 10px;

    background: #f5820b;

    color: #ffffff;

    font-size: 18px;

    cursor: pointer;

}


.chatbot-input-area button:disabled {

    opacity: 0.5;

    cursor: not-allowed;

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

    .unitecore-chatbot {

        right: 12px;

        bottom: 12px;

        left: 12px;

    }


    .chatbot-button {

        margin-left: auto;

    }


    .chatbot-window {

        width: 100%;

        height: min(680px, calc(100vh - 30px));

        border-radius: 18px;

    }

}
</style>