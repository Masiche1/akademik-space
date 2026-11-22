import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "cieigcseict-u6-lesson-6-3",
  code: "6-3",
  title: "E-commerce and ICT Exam Technique",
  goal: "I CAN evaluate e-commerce models and apply exam strategies to ICT questions.",
  standards: ["Cambridge IGCSE ICT 0417", "Unit 6: ICT in society"],
  vocabulary: [
    { term: "E-commerce", definition: "Buying/selling goods/services online." },
    { term: "B2C", definition: "Business to consumer." },
    { term: "B2B", definition: "Business to business." },
    { term: "C2C", definition: "Consumer to consumer (e.g. eBay)." },
    {
      term: "Payment gateway",
      definition: "Service processing online payments.",
    },
    {
      term: "SSL/TLS",
      definition: "Encryption protocol securing web connections.",
    },
  ],
  concepts: [
    {
      id: "cieigcseict-u6l3-c1-ecommerce",
      title: "E-commerce models and payment security",
      skill: "Evaluate e-commerce business models and payment security.",
      lesson: {
        sections: [
          {
            heading: "E-commerce models",
            body: "**B2C**: business sells to consumers (Amazon, online shops) — largest segment. **B2B**: business sells to business (wholesale, supply chains) — larger volume. **C2C**: consumers trade (eBay, Airbnb). **C2B**: consumers offer services to businesses (freelance platforms). Each has different trust, payment, logistics needs.",
          },
          {
            heading: "Payment security",
            body: "**SSL/TLS**: encrypts connection between browser and server — padlock icon. **Payment gateway**: processes card payments securely (Stripe, PayPal). **3D Secure**: extra verification step for card payments. **PCI DSS**: security standard for handling card data. Never store card details unencrypted — major breach risk.",
          },
        ],
        keyFormulas: [
          { name: "B2C", statement: "Business → consumer" },
          { name: "B2B", statement: "Business → business" },
          { name: "SSL", statement: "HTTPS encryption" },
        ],
        workedExample: {
          problem: "Why must e-commerce sites use HTTPS?",
          solution:
            "Encrypts data between customer and server — prevents interception of passwords/card details; SSL certificate shows padlock, builds trust, required for PCI compliance.",
        },
      },
      questions: [
        {
          id: "cieigcseict-q-u6l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "B2C e-commerce means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Consumers sell to business" },
              { id: "b", text: "Business sells to consumers" },
              { id: "c", text: "Business sells to business" },
              { id: "d", text: "Consumers trade" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "B2C", statement: "Business-consumer." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** B→C",
            commonErrors: ["B2B."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'SSL/TLS' in e-commerce?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "SSL/TLS", statement: "Encryption." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Security protocol encrypting connection between browser and server — HTTPS indicates SSL; protects passwords/card details from interception; padlock icon shows secure connection.",
            commonErrors: ["Payment processor."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between B2B and C2C e-commerce.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "B2B vs C2C", statement: "Who trades." },
            ],
            steps: [
              { reasoning: "B2B.", marks: 1, markCode: "M" },
              { reasoning: "C2C.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "B2B: businesses trade with businesses — wholesale, supply chains, bulk orders (larger volumes). C2C: individuals trade — eBay, Airbnb, classifieds (peer-to-peer, needs trust mechanisms).",
            commonErrors: ["Same model."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give three advantages of e-commerce over traditional retail.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "E-comm advantages",
                statement: "Reach + convenience.",
              },
            ],
            steps: [
              { reasoning: "Three valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 3, markCode: "A" },
            ],
            finalAnswer:
              "e.g. global reach (24/7 anywhere), lower overhead costs (no physical store), personalised recommendations/data collection — also price comparison, wider selection.",
            commonErrors: ["No advantages."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the security risks of online payment systems and how they are mitigated.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Payment security",
                statement: "Risks + defences.",
              },
            ],
            steps: [
              { reasoning: "Risks.", marks: 1, markCode: "M" },
              { reasoning: "Defences.", marks: 1, markCode: "M" },
              { reasoning: "Residual risk.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Risks: interception, phishing, card fraud. Defences: SSL encryption, tokenisation (don't store card numbers), 3D Secure, PCI DSS, fraud monitoring — secure but not risk-free; consumer vigilance still needed.",
            commonErrors: ["Completely safe."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'payment gateway'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Payment gateway",
                statement: "Processor.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Function.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Service that securely processes online payments — encrypts card data, communicates with bank, confirms/declines transaction; e.g. Stripe, PayPal, Square.",
            commonErrors: ["Bank account."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "HTTPS indicates:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Faster loading" },
              { id: "b", text: "Mobile site" },
              { id: "c", text: "Encrypted connection" },
              { id: "d", text: "Free website" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "HTTPS", statement: "Encryption." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Encrypted",
            commonErrors: ["Speed."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two disadvantages of e-commerce for consumers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "E-comm disadvantages",
                statement: "Risks.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. can't inspect goods before buying (returns hassle), and security/privacy risks (card fraud, data theft) — also delivery delays, no immediate possession.",
            commonErrors: ["No disadvantages."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'tokenisation' in payment processing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tokenisation",
                statement: "Replace card data.",
              },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Benefit.", marks: 1, markCode: "M" },
              { reasoning: "vs storage.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Replaces sensitive card data with non-sensitive 'token' — merchant stores token not actual card number; breach exposes useless tokens; reduces PCI compliance scope and fraud risk.",
            commonErrors: ["Store card numbers."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether 'cash on delivery' is more secure than online payment for consumers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "COD vs online",
                statement: "Trade-offs.",
              },
            ],
            steps: [
              { reasoning: "COD benefits.", marks: 1, markCode: "M" },
              { reasoning: "COD risks.", marks: 1, markCode: "M" },
              { reasoning: "Online security.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "COD avoids card fraud but has own risks (no payment until delivery, seller risk, inconvenience); online payments with SSL/tokenisation are secure when used correctly — neither risk-free; depends on trust and protection level.",
            commonErrors: ["COD always safer."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "C2C e-commerce involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Business selling to consumers" },
              { id: "b", text: "Business selling to business" },
              { id: "c", text: "Consumers offering services to businesses" },
              { id: "d", text: "Consumers selling to other consumers" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "C2C",
                statement: "Consumer to consumer.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Consumers to consumers",
            commonErrors: ["B2C confused."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c1-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'payment gateway' in e-commerce? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Payment gateway",
                statement: "Secure card processing.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "A service that securely processes card payments between the merchant's website and the customer's bank — e.g. Stripe, PayPal; encrypts card data and checks for fraud/authorisation.",
            commonErrors: ["Delivery service confused."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "3D Secure adds to online card payments:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Free next-day delivery" },
              { id: "b", text: "Product review features" },
              { id: "c", text: "A second website" },
              { id: "d", text: "An extra verification step with the card issuer" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "3D Secure",
                statement: "Extra verification.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Extra verification step",
            commonErrors: ["Delivery confused."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c1-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why an e-commerce site must never store customers' card details unencrypted.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Card data",
                statement: "Breach + PCI DSS.",
              },
            ],
            steps: [
              { reasoning: "Breach risk.", marks: 1, markCode: "M" },
              { reasoning: "Legal/standard.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Unencrypted card data can be stolen in a breach and used for fraud; PCI DSS forbids storing card details insecurely — violations bring heavy fines and loss of customer trust; encryption/tokenisation limits exposure.",
            commonErrors: ["Encryption optional."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c1-15",
          difficulty: "core",
          totalMarks: 1,
          stem: "PCI DSS is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of delivery service" },
              { id: "b", text: "An e-commerce platform" },
              { id: "c", text: "A security standard for handling card payment data" },
              { id: "d", text: "A tax regulation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PCI DSS",
                statement: "Card security standard.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Card data security standard",
            commonErrors: ["Delivery confused."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the growth of mobile commerce (m-commerce) and the security challenges it creates.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "M-commerce",
                statement: "Convenience vs risk.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Security challenges.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "M-commerce offers convenience and reach but relies on public Wi-Fi, small screens and app permissions — increasing phishing, fake apps and data-theft risks; mitigated by HTTPS, app store vetting, 2FA and tokenisation, but users must stay vigilant.",
            commonErrors: ["No new risks."],
          },
        },
      ],
    },
    {
      id: "cieigcseict-u6l3-c2-exam",
      title: "ICT exam technique and evaluation",
      skill:
        "Apply exam strategies to ICT questions and evaluate case studies.",
      lesson: {
        sections: [
          {
            heading: "Exam strategy",
            body: "Read questions carefully — command words (describe, explain, evaluate, compare). Allocate time per mark (roughly 1-1.5 min per mark). Answer all parts — even if unsure, attempt. Use technical vocabulary precisely (encryption, firewall, DNS). Show working for calculations. For 'evaluate' questions, must give both strengths AND weaknesses plus judgement.",
          },
          {
            heading: "Case study analysis",
            body: "ICT Paper 2/4 often presents scenarios — identify stakeholders, technologies mentioned, problems/opportunities. Structure answers: identify issue → explain technology → evaluate impact → justify recommendation. Link theory to scenario explicitly — don't just define terms, apply them to given context.",
          },
        ],
        keyFormulas: [
          { name: "Command words", statement: "Describe vs evaluate" },
          { name: "Time allocation", statement: "~1 min per mark" },
          { name: "Evaluate", statement: "Both sides + judgement" },
        ],
        workedExample: {
          problem:
            "A question asks 'Evaluate the use of cloud storage for a school.' How to structure?",
          solution:
            "Strengths (access anywhere, backup, cost) + weaknesses (security, dependency, internet needed) + judgement (suitable if proper security/backup policies in place) — balanced evaluation.",
        },
      },
      questions: [
        {
          id: "cieigcseict-q-u6l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The command word 'evaluate' requires:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only definition" },
              { id: "b", text: "Both strengths and weaknesses plus judgement" },
              { id: "c", text: "Yes/no answer" },
              { id: "d", text: "Only strengths" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Evaluate",
                statement: "Balanced judgement.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Both sides",
            commonErrors: ["One side."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why is time allocation important in exams?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Time management",
                statement: "Per mark.",
              },
            ],
            steps: [
              { reasoning: "Reason.", marks: 1, markCode: "M" },
              { reasoning: "Strategy.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ensures all questions answered — spending too long on one leaves others blank; allocate ~1-1.5 min per mark, review at end.",
            commonErrors: ["No need."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between 'describe' and 'explain' command words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Command words",
                statement: "What vs why.",
              },
            ],
            steps: [
              { reasoning: "Describe.", marks: 1, markCode: "M" },
              { reasoning: "Explain.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Describe: state what it is/does (facts). Explain: give reasons why/how it works (causes, mechanisms) — 'explain' needs deeper understanding than 'describe'.",
            commonErrors: ["Same."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "How should you approach a case study question in ICT?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Case study approach",
                statement: "Apply theory.",
              },
            ],
            steps: [
              { reasoning: "Identify.", marks: 1, markCode: "M" },
              { reasoning: "Apply.", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", marks: 1, markCode: "M" },
              { reasoning: "Justify.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Read scenario carefully, identify technologies/issues mentioned, apply relevant theory explicitly (don't just define), evaluate pros/cons, justify recommendation with reasoning linked to context.",
            commonErrors: ["Generic answer."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse common mistakes students make in ICT exam answers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Exam mistakes",
                statement: "Common errors.",
              },
            ],
            steps: [
              { reasoning: "Mistake 1.", marks: 1, markCode: "M" },
              { reasoning: "Mistake 2.", marks: 1, markCode: "M" },
              { reasoning: "Mistake 3.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. defining terms without applying to scenario, one-sided 'evaluate' answers (no judgement), vague statements without technical vocabulary — fix by practising application, balanced arguments, precise terminology.",
            commonErrors: ["No mistakes."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 'command word' mean in exam questions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Command word",
                statement: "Instruction.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Word indicating required answer type — describe, explain, compare, evaluate, calculate; determines depth and structure needed; ignoring it loses marks.",
            commonErrors: ["Topic word."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For an 'evaluate' question, you should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Say 'it depends'" },
              { id: "b", text: "Define the term" },
              {
                id: "c",
                text: "Give strengths, weaknesses and a justified conclusion",
              },
              { id: "d", text: "List only advantages" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Evaluate", statement: "Balanced." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Balanced",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons why using precise technical vocabulary matters in ICT exams.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Vocabulary", statement: "Precision." },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. shows understanding (encryption vs 'scrambling'), and examiners award marks for correct terminology — vague answers lose marks even if idea correct.",
            commonErrors: ["Any words fine."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'linking theory to scenario' is crucial in case study questions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Theory-scenario link",
                statement: "Application.",
              },
            ],
            steps: [
              { reasoning: "Why.", marks: 1, markCode: "M" },
              { reasoning: "How.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Demonstrates understanding not just memorisation — e.g. 'The school's use of unencrypted Wi-Fi (scenario) creates risk of data interception, mitigated by WPA3 encryption (theory)' — shows applied knowledge earns more marks.",
            commonErrors: ["Generic answers."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the effectiveness of past paper practice for ICT exam preparation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Past papers",
                statement: "Preparation.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Familiarises format, command words, timing — but questions may differ yearly; best combined with syllabus review, practice of all question types, and feedback on weak areas.",
            commonErrors: ["Sufficient alone."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The exam command word 'describe' requires you to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Give your personal opinion only" },
              { id: "b", text: "Perform a calculation" },
              { id: "c", text: "Compare two items" },
              { id: "d", text: "Give a full account of the features or characteristics" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Describe",
                statement: "Full account.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Full account of features",
            commonErrors: ["Opinion only."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c2-12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Allocating exam time 'per mark' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Spending roughly equal time for each mark available" },
              { id: "b", text: "Spending all time on part (a)" },
              { id: "c", text: "Ignoring the clock entirely" },
              { id: "d", text: "Answering only the highest-mark questions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Time per mark",
                statement: "Even allocation.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Time per mark",
            commonErrors: ["Ignore marks."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In an ICT case study question, the best first step is to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Start writing immediately without planning" },
              { id: "b", text: "Identify the stakeholders and technologies mentioned in the scenario" },
              { id: "c", text: "Define every ICT term you know" },
              { id: "d", text: "Write a general essay unrelated to the scenario" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Case study",
                statement: "Read scenario first.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Identify stakeholders/technologies",
            commonErrors: ["Generic answer."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why 'showing working' matters in ICT exam questions even when the final answer is wrong.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Show working",
                statement: "Method marks.",
              },
            ],
            steps: [
              { reasoning: "Method marks.", marks: 1, markCode: "M" },
              { reasoning: "Shows understanding.", marks: 1, markCode: "M" },
              { reasoning: "Partial credit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Markschemes award marks for correct method, not just the final answer; showing working demonstrates understanding and can earn method/accuracy marks even if a calculation slips — especially in spreadsheet, storage and data calculations.",
            commonErrors: ["Only final answer counts."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c2-15",
          difficulty: "core",
          totalMarks: 1,
          stem: "The command word 'compare' in an exam question requires you to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "List only the differences" },
              { id: "b", text: "Summarise a single item" },
              { id: "c", text: "Give your personal opinion" },
              { id: "d", text: "Identify both similarities AND differences" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Compare",
                statement: "Similarities + differences.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Similarities and differences",
            commonErrors: ["Differences only."],
          },
        },
        {
          id: "cieigcseict-q-u6l3c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the statement: 'Answering past papers is the most effective way to prepare for the ICT exam.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Past papers",
                statement: "Preparation value.",
              },
            ],
            steps: [
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Past papers familiarise students with format, command words and timing — highly effective practice; but 'most effective' overstates it: syllabus knowledge, weak-area revision and feedback on mistakes are also essential; best used alongside full topic review.",
            commonErrors: ["Sufficient alone."],
          },
        },
      ],
    },
  ],
};
