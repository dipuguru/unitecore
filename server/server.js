require("dotenv").config();

const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const unitecoreContent = require("./knowledge/unitecore-content");


/* ============================================================
   APP
============================================================ */

const app = express();

const PORT = process.env.PORT || 3001;


/* ============================================================
   OPENAI
============================================================ */

if (!process.env.OPENAI_API_KEY) {

    console.error("");
    console.error("========================================");
    console.error("ERROR: OPENAI_API_KEY IS MISSING");
    console.error("========================================");
    console.error("");
    console.error("Create this file:");
    console.error("server/.env");
    console.error("");
    console.error("Add:");
    console.error("OPENAI_API_KEY=your_api_key_here");
    console.error("");

    process.exit(1);
}


const openai = new OpenAI({

    apiKey: process.env.OPENAI_API_KEY

});


/* ============================================================
   CORS
============================================================ */

app.use(
    cors({

        origin: [

            "http://localhost:8080",

            "http://127.0.0.1:8080"

        ],

        methods: [

            "GET",

            "POST",

            "OPTIONS"

        ],

        allowedHeaders: [

            "Content-Type"

        ]

    })
);


/* ============================================================
   BODY PARSER
============================================================ */

app.use(
    express.json({

        limit: "1mb"

    })
);


/* ============================================================
   ROOT
============================================================ */

app.get("/", (req, res) => {

    res.json({

        success: true,

        message:
            "UniteCore AI Chatbot Server is running."

    });

});


/* ============================================================
   HEALTH
============================================================ */

app.get("/api/health", (req, res) => {

    res.json({

        success: true,

        message:
            "UniteCore AI backend is running.",

        model:
            "gpt-5.6-luna",

        chatbot:
            "active"

    });

});


/* ============================================================
   HELPER:
   DETECT LEAD INTENT
============================================================ */

function detectLeadIntent(message) {

    const text =
        String(message || "").toLowerCase();


    const leadKeywords = [

        "expert",

        "quotation",

        "quote",

        "pricing",

        "price",

        "cost",

        "proposal",

        "contact",

        "project",

        "requirement",

        "demo",

        "talk to",

        "talk with",

        "speak to",

        "speak with",

        "sales",

        "buy",

        "purchase"

    ];


    return leadKeywords.some(
        keyword =>
            text.includes(keyword)
    );

}


/* ============================================================
   HELPER:
   CREATE SYSTEM PROMPT
============================================================ */

function createSystemPrompt({

    selectedService,

    selectedChallenge

}) {

    return `
You are the official UniteCore AI Assistant.

Your job is to help visitors understand UniteCore's services
and then help identify their business requirements.

The chatbot has THREE business purposes:

1. ANSWER
2. UNDERSTAND REQUIREMENT
3. GENERATE QUALIFIED LEAD


============================================================
STRICT KNOWLEDGE RULE
============================================================

Use ONLY the UniteCore company information supplied below.

Do NOT invent information.

Do NOT make up:

- Prices
- Project costs
- Timelines
- Customer names
- Certifications
- Locations
- Products
- Services
- Technology partnerships
- Statistics
- Case studies
- Guarantees


If information is not available, say:

"I don't have enough information to answer that accurately."

Then, where appropriate, offer:

"Would you like to talk to a UniteCore expert?"


============================================================
RESPONSE STYLE
============================================================

Be:

- Professional
- Friendly
- Concise
- Business-focused
- Easy to understand

Do not provide unnecessarily long answers.

Answer the visitor's question directly first.


============================================================
QUALIFICATION CONTEXT
============================================================

Selected service:

${selectedService || "Not selected yet"}


Selected challenge:

${selectedChallenge || "Not selected yet"}


Use this information to make the response relevant.

Do not ask the same qualification question again if the visitor
has already answered it.


============================================================
LEAD GENERATION
============================================================

If the visitor wants:

- An expert
- A quotation
- Pricing
- A proposal
- A project discussion
- A customized solution
- A demo
- Sales contact
- To discuss their requirement

tell them that they can use the "Talk to an Expert" option
to submit:

- Name
- Company
- Work email
- Phone number
- Requirement


Do NOT collect passwords, API keys, payment information,
or other sensitive credentials.


============================================================
EXAMPLE
============================================================

Visitor:

"I'm looking for cybersecurity for my company."

Good response:

"UniteCore provides cybersecurity solutions including threat
detection, data security, access control, DLP, SIEM and security
monitoring. These solutions can help identify security risks,
protect critical systems and strengthen your cybersecurity posture.

Would you like us to understand your current security challenge
and recommend a suitable next step?"


============================================================
UNITECORE KNOWLEDGE
============================================================

${unitecoreContent}

============================================================
END KNOWLEDGE
============================================================
`;

}


/* ============================================================
   CHAT ENDPOINT
============================================================ */

app.post("/api/chat", async (req, res) => {

    try {

        const {

            message,

            conversation = [],

            selectedService = "",

            selectedChallenge = ""

        } = req.body;


        /* --------------------------------------------------------
           VALIDATE MESSAGE
        -------------------------------------------------------- */

        if (
            !message ||
            typeof message !== "string"
        ) {

            return res.status(400).json({

                success: false,

                error:
                    "Message is required."

            });

        }


        const cleanMessage =
            message.trim();


        if (!cleanMessage) {

            return res.status(400).json({

                success: false,

                error:
                    "Message cannot be empty."

            });

        }


        /* --------------------------------------------------------
           SYSTEM PROMPT
        -------------------------------------------------------- */

        const systemPrompt =
            createSystemPrompt({

                selectedService,

                selectedChallenge

            });


        /* --------------------------------------------------------
           BUILD MESSAGES
        -------------------------------------------------------- */

        const messages = [

            {

                role: "system",

                content: systemPrompt

            }

        ];


        /* --------------------------------------------------------
           ADD CONVERSATION HISTORY
        -------------------------------------------------------- */

        if (
            Array.isArray(conversation)
        ) {

            conversation
                .slice(-10)
                .forEach(item => {

                    if (

                        item &&

                        (
                            item.role === "user" ||
                            item.role === "assistant"
                        ) &&

                        typeof item.content === "string"

                    ) {

                        messages.push({

                            role: item.role,

                            content:
                                item.content
                                    .slice(0, 4000)

                        });

                    }

                });

        }


        /* --------------------------------------------------------
           ADD CURRENT MESSAGE
        -------------------------------------------------------- */

        messages.push({

            role: "user",

            content: cleanMessage

        });


        /* --------------------------------------------------------
           OPENAI
        -------------------------------------------------------- */

        const response =
            await openai.chat.completions.create({

                model:
                    "gpt-5.6-luna",

                messages,

                temperature: 0.3,

                max_tokens: 600

            });


        /* --------------------------------------------------------
           RESPONSE
        -------------------------------------------------------- */

        const reply =
            response
                ?.choices?.[0]
                ?.message
                ?.content
                ?.trim();


        if (!reply) {

            return res.status(500).json({

                success: false,

                error:
                    "No response was generated."

            });

        }


        /* --------------------------------------------------------
           LEAD INTENT
        -------------------------------------------------------- */

        const shouldOfferExpert =
            detectLeadIntent(cleanMessage);


        /* --------------------------------------------------------
           SEND RESPONSE
        -------------------------------------------------------- */

        return res.json({

            success: true,

            reply,

            shouldOfferExpert

        });


    } catch (error) {

        console.error("");
        console.error("========================================");
        console.error("UNITECORE CHATBOT ERROR");
        console.error("========================================");
        console.error(error);
        console.error("");


        return res.status(500).json({

            success: false,

            error:
                "Unable to process your request right now."

        });

    }

});


/* ============================================================
   LEAD ENDPOINT
============================================================ */

app.post("/api/leads", async (req, res) => {

    try {

        const {

            name,

            company,

            email,

            phone,

            requirement,

            selectedService,

            selectedChallenge

        } = req.body;


        /* --------------------------------------------------------
           VALIDATION
        -------------------------------------------------------- */

        if (
            !name ||
            !email ||
            !phone ||
            !requirement
        ) {

            return res.status(400).json({

                success: false,

                error:
                    "Name, email, phone and requirement are required."

            });

        }


        /* --------------------------------------------------------
           BASIC EMAIL VALIDATION
        -------------------------------------------------------- */

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (
            !emailRegex.test(
                String(email).trim()
            )
        ) {

            return res.status(400).json({

                success: false,

                error:
                    "Please enter a valid work email."

            });

        }


        /* --------------------------------------------------------
           LEAD OBJECT
        -------------------------------------------------------- */

        const lead = {

            name:
                String(name).trim(),

            company:
                company
                    ? String(company).trim()
                    : "",

            email:
                String(email).trim(),

            phone:
                String(phone).trim(),

            requirement:
                String(requirement).trim(),

            selectedService:
                selectedService
                    ? String(selectedService).trim()
                    : "",

            selectedChallenge:
                selectedChallenge
                    ? String(selectedChallenge).trim()
                    : "",

            source:
                "UniteCore AI Chatbot",

            createdAt:
                new Date().toISOString()

        };


        /* --------------------------------------------------------
           CURRENTLY LOG TO SERVER
           --------------------------------
           Later this can be connected to:
           Google Sheets / CRM / Email / Database
        -------------------------------------------------------- */

        console.log("");

        console.log(
            "========================================"
        );

        console.log(
            "NEW UNITECORE QUALIFIED LEAD"
        );

        console.log(
            "========================================"
        );

        console.log(
            JSON.stringify(
                lead,
                null,
                2
            )
        );

        console.log(
            "========================================"
        );

        console.log("");


        /* --------------------------------------------------------
           RESPONSE
        -------------------------------------------------------- */

        return res.json({

            success: true,

            message:
                "Thank you. Your requirement has been received. The UniteCore team will contact you shortly."

        });


    } catch (error) {

        console.error(
            "LEAD SUBMISSION ERROR:",
            error
        );


        return res.status(500).json({

            success: false,

            error:
                "Unable to submit your request."

        });

    }

});


/* ============================================================
   START SERVER
============================================================ */

app.listen(
    PORT,
    () => {

        console.log("");

        console.log(
            "========================================"
        );

        console.log(
            "       UNITECORE AI CHATBOT SERVER"
        );

        console.log(
            "========================================"
        );

        console.log(
            `Server : http://localhost:${PORT}`
        );

        console.log(
            `Health : http://localhost:${PORT}/api/health`
        );

        console.log(
            "Chat   : POST /api/chat"
        );

        console.log(
            "Leads  : POST /api/leads"
        );

        console.log(
            "Model  : gpt-5.6-luna"
        );

        console.log(
            "Status : READY"
        );

        console.log(
            "========================================"
        );

        console.log("");

    }
);