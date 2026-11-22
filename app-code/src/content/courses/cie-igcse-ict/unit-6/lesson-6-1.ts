import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "cieigcseict-u6-lesson-6-1",
  code: "6-1",
  title: "Data Protection and Privacy",
  goal: "I CAN explain data protection laws, privacy principles and organisational responsibilities.",
  standards: ["Cambridge IGCSE ICT 0417", "Unit 6: ICT in society"],
  vocabulary: [
    {
      term: "Personal data",
      definition: "Information identifying an individual.",
    },
    {
      term: "Data controller",
      definition: "Organisation deciding how data is used.",
    },
    { term: "Data subject", definition: "Person the data is about." },
    { term: "GDPR", definition: "EU General Data Protection Regulation." },
    {
      term: "Data breach",
      definition: "Unauthorized access to personal data.",
    },
    { term: "Consent", definition: "Permission to process personal data." },
  ],
  concepts: [
    {
      id: "cieigcseict-u6l1-c1-laws",
      title: "Data protection laws and principles",
      skill: "Explain data protection legislation and core principles.",
      lesson: {
        sections: [
          {
            heading: "Key legislation",
            body: "**Data Protection Act (DPA)**: UK law governing personal data processing. **GDPR**: EU regulation (2018) — stricter, applies globally to EU data subjects. Key principles: **lawfulness/fairness/transparency**, **purpose limitation** (collect for stated purpose only), **data minimisation** (only what's needed), **accuracy**, **storage limitation**, **integrity/confidentiality** (security), **accountability**.",
          },
          {
            heading: "Individual rights",
            body: "Right to be informed, access own data, rectification (correct errors), erasure ('right to be forgotten'), restrict processing, data portability, object to processing, withdraw consent. Organisations must respond within one month. Penalties: GDPR fines up to €20m or 4% global turnover.",
          },
        ],
        keyFormulas: [
          { name: "GDPR fine", statement: "Up to 4% turnover" },
          { name: "Data minimisation", statement: "Only necessary data" },
          { name: "Right to erasure", statement: "Be forgotten" },
        ],
        workedExample: {
          problem:
            "A shop collects customer phone numbers 'just in case'. Legal?",
          solution:
            "Violates data minimisation — collect only what's necessary for stated purpose; 'just in case' not a valid purpose under GDPR/DPA.",
        },
      },
      questions: [
        {
          id: "cieigcseict-q-u6l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "GDPR stands for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "General Digital Privacy Rights" },
              { id: "b", text: "General Data Protection Regulation" },
              { id: "c", text: "Global Data Privacy Rule" },
              { id: "d", text: "Government Data Protection Act" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "GDPR", statement: "EU regulation." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** General Data Protection Regulation",
            commonErrors: ["Wrong expansion."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'personal data'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Personal data",
                statement: "Identifying info.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Information relating to identified/identifiable person — name, email, IP address, location, health data; anonymised data excluded.",
            commonErrors: ["Any data."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'data minimisation' principle.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data minimisation",
                statement: "Only necessary.",
              },
            ],
            steps: [
              { reasoning: "Principle.", marks: 1, markCode: "M" },
              { reasoning: "Application.", marks: 1, markCode: "M" },
              { reasoning: "Violation example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Collect only data necessary for stated purpose — don't gather 'just in case'; e.g. form asking for ID number when only name/email needed violates minimisation.",
            commonErrors: ["Collect everything."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe three rights individuals have under GDPR.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "GDPR rights",
                statement: "Individual control.",
              },
            ],
            steps: [
              { reasoning: "Three valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 3, markCode: "A" },
            ],
            finalAnswer:
              "e.g. right of access (see own data), right to erasure ('be forgotten'), right to data portability (transfer to another service) — also rectification, restriction, object.",
            commonErrors: ["No rights."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the tension between data collection for personalisation and privacy protection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Privacy vs personalisation",
                statement: "Trade-off.",
              },
            ],
            steps: [
              {
                reasoning: "Personalisation benefit.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Privacy risk.", marks: 1, markCode: "M" },
              { reasoning: "Regulatory response.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Data enables personalised services but creates surveillance risks; GDPR requires consent, transparency, purpose limitation — balance via privacy-by-design, anonymisation, user control; 'free' services often pay with data.",
            commonErrors: ["No tension."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'data controller'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data controller",
                statement: "Decides use.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Responsibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Organisation/person deciding how and why personal data is processed — responsible for GDPR compliance, security, responding to data subject requests.",
            commonErrors: ["Data subject."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Under GDPR, maximum fine is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "€1 million only" },
              { id: "b", text: "€20 million or 4% global turnover" },
              { id: "c", text: "No fines" },
              { id: "d", text: "€1000" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "GDPR fine", statement: "4% turnover." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** €20m or 4%",
            commonErrors: ["Small fine."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of 'special category data' under GDPR.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Special category",
                statement: "Sensitive.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. health data, racial/ethnic origin, religious beliefs, sexual orientation, biometric data — requires higher protection, explicit consent for processing.",
            commonErrors: ["Any data."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'purpose limitation' in data protection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Purpose limitation",
                statement: "Stated use only.",
              },
            ],
            steps: [
              { reasoning: "Principle.", marks: 1, markCode: "M" },
              { reasoning: "Application.", marks: 1, markCode: "M" },
              { reasoning: "Violation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Data collected for one purpose can't be reused for incompatible purpose without new consent — e.g. email collected for order confirmation can't be sold to third parties without permission.",
            commonErrors: ["Any use."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether current data protection laws adequately protect privacy in the age of AI and big data.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Law adequacy", statement: "Gaps." },
            ],
            steps: [
              { reasoning: "Current protections.", marks: 1, markCode: "M" },
              { reasoning: "New challenges.", marks: 1, markCode: "M" },
              { reasoning: "Gaps.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "GDPR strong but designed pre-AI — algorithmic profiling, data brokers, cross-border flows create gaps; needs updates for automated decision-making, AI training data; enforcement challenging at scale.",
            commonErrors: ["Fully adequate."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Under GDPR, the 'data minimisation' principle requires organisations to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Share data freely with partners" },
              { id: "b", text: "Collect only data that is adequate, relevant and necessary" },
              { id: "c", text: "Collect as much data as possible" },
              { id: "d", text: "Keep all data indefinitely" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Minimisation",
                statement: "Only what's needed.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Only necessary data",
            commonErrors: ["More data better."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c1-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain what 'accountability' means under GDPR.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Accountability",
                statement: "Responsibility for compliance.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example/implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Organisations must take responsibility for complying with data protection rules and be able to demonstrate it — e.g. keeping records of processing, appointing a DPO where required, and implementing appropriate security measures.",
            commonErrors: ["Only users responsible."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c1-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A user asks a company to delete all their personal data. This right is commonly called:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The right to erasure ('right to be forgotten')" },
              { id: "b", text: "The right of access" },
              { id: "c", text: "The right to data portability" },
              { id: "d", text: "The right to rectification" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Erasure", statement: "Right to be forgotten." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Right to erasure",
            commonErrors: ["Access confused."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c1-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "A company suffers a data breach affecting 10,000 customers. Describe two obligations the company has under GDPR following the breach.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Breach duties",
                statement: "Notify, document, secure.",
              },
            ],
            steps: [
              { reasoning: "Two valid obligations.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. notify the relevant data protection authority promptly (within 72 hours for serious breaches) and inform affected individuals where there is high risk; also document the breach, investigate the cause and strengthen security to prevent recurrence.",
            commonErrors: ["No obligations."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c1-15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Under GDPR, an organisation must respond to a subject access request within:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Immediately or not at all" },
              { id: "b", text: "One year" },
              { id: "c", text: "One month" },
              { id: "d", text: "One week" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "SAR deadline", statement: "1 month." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** One month",
            commonErrors: ["Wrong timeframe."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether the 'right to be forgotten' can conflict with freedom of expression.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Erasure vs expression",
                statement: "Balancing rights.",
              },
            ],
            steps: [
              { reasoning: "Right to erasure.", marks: 1, markCode: "M" },
              { reasoning: "Freedom of expression.", marks: 1, markCode: "M" },
              { reasoning: "Evidence/conflict.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Erasure protects privacy but removing information others lawfully published can conflict with free expression and public interest (e.g. journalism, historical record); GDPR allows balancing — erasure can be refused where processing is necessary for exercising freedom of expression or public interest.",
            commonErrors: ["No conflict possible."],
          },
        },
      ],
    },
    {
      id: "cieigcseict-u6l1-c2-privacy",
      title: "Privacy threats and protection",
      skill: "Identify privacy threats and apply protective measures.",
      lesson: {
        sections: [
          {
            heading: "Privacy threats",
            body: "**Tracking**: cookies, pixels, fingerprinting track online behaviour. **Data brokers**: collect/sell personal data. **Social media oversharing**: permanent digital footprint. **Phishing**: trick users into revealing data. **Surveillance**: cameras, location tracking, facial recognition. **Metadata**: 'who, when, where' even without content.",
          },
          {
            heading: "Protection measures",
            body: "Individual: strong passwords + 2FA, privacy settings review, VPN for public Wi-Fi, avoid oversharing, regular software updates, encrypted messaging. Organisational: encryption at rest/transit, access controls, security audits, staff training, incident response plans, data retention policies (delete when no longer needed).",
          },
        ],
        keyFormulas: [
          { name: "2FA", statement: "Two-factor auth" },
          { name: "VPN", statement: "Encrypted tunnel" },
          { name: "Metadata", statement: "Who/when/where" },
        ],
        workedExample: {
          problem: "How can an organisation protect customer data?",
          solution:
            "Encryption, access controls (only authorised staff), regular backups, staff training on phishing, incident response plan, data retention/deletion policies, GDPR compliance.",
        },
      },
      questions: [
        {
          id: "cieigcseict-q-u6l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Cookies' are primarily used for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Blocking ads" },
              { id: "b", text: "Tracking user activity and preferences" },
              { id: "c", text: "Storing passwords" },
              { id: "d", text: "Encrypting data" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Cookies", statement: "Tracking." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Tracking",
            commonErrors: ["Security tool."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'two-factor authentication' (2FA)?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "2FA", statement: "Two proofs." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Requires two verification methods — e.g. password + SMS code, or password + authenticator app; adds security layer beyond password alone.",
            commonErrors: ["Password only."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what 'metadata' reveals about communications.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Metadata", statement: "Context data." },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "What it shows.", marks: 1, markCode: "M" },
              { reasoning: "Privacy issue.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Data about communication not content — who called whom, when, duration, location; can reveal relationships, routines, activities even without reading messages.",
            commonErrors: ["Content only."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Give four measures individuals can take to protect their online privacy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Privacy measures",
                statement: "User actions.",
              },
            ],
            steps: [
              { reasoning: "Four valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 3, markCode: "A" },
            ],
            finalAnswer:
              "e.g. use strong unique passwords + 2FA, review privacy settings on social media, use VPN on public Wi-Fi, be cautious about oversharing personal info online.",
            commonErrors: ["No measures."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the effectiveness of 'privacy policies' in protecting users.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Privacy policy eval",
                statement: "Legal vs practical.",
              },
            ],
            steps: [
              { reasoning: "Purpose.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Legally required, inform users — but often long, complex, rarely read; 'consent fatigue'; dark patterns manipulate agreement; meaningful protection needs simplification, defaults, enforcement.",
            commonErrors: ["Perfect protection."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'VPN' and how does it protect privacy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "VPN",
                statement: "Encrypted tunnel.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Privacy benefit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Virtual Private Network — creates encrypted tunnel between device and server; hides IP address and encrypts traffic, protects on public Wi-Fi, prevents ISP/snooping.",
            commonErrors: ["Antivirus."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Browser 'cookies' can be used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speed up internet" },
              { id: "b", text: "Encrypt files" },
              { id: "c", text: "Track user behaviour across sites" },
              { id: "d", text: "Delete viruses" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Cookies", statement: "Tracking." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Track behaviour",
            commonErrors: ["Security tool."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways organisations can protect customer data.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Org protection",
                statement: "Technical + process.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. encryption of data at rest and in transit, and access controls limiting who can view data — also backups, staff training, incident response plans.",
            commonErrors: ["No protection."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the privacy risk of 'oversharing' on social media.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Oversharing",
                statement: "Digital footprint.",
              },
            ],
            steps: [
              { reasoning: "Risk.", marks: 1, markCode: "M" },
              { reasoning: "Consequences.", marks: 1, markCode: "M" },
              { reasoning: "Permanence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Posts create permanent digital footprint — employers, insurers, criminals can access; location info enables stalking; even deleted posts may persist in archives/screenshots.",
            commonErrors: ["No risk."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether 'anonymisation' fully protects personal data.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Anonymisation",
                statement: "Re-identification risk.",
              },
            ],
            steps: [
              { reasoning: "Purpose.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Removes direct identifiers but re-identification possible via data linking (Netflix prize, location data); 'anonymous' data may still be personal under GDPR if identifiable; needs robust techniques + ongoing assessment.",
            commonErrors: ["Fully anonymous."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'data broker' is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A security guard" },
              { id: "b", text: "A type of firewall" },
              { id: "c", text: "A company that collects and sells personal data" },
              { id: "d", text: "A password manager" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data broker",
                statement: "Collects/sells data.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Collects and sells personal data",
            commonErrors: ["Security tool confused."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c2-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is meant by a 'digital footprint'? Give an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digital footprint",
                statement: "Trail of online data.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "The trail of data a person leaves online — e.g. social media posts, search history, online purchases, forum comments; can be used to build a profile and may be permanent.",
            commonErrors: ["Hardware confused."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c2-13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which measure best protects privacy when using public Wi-Fi?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using a VPN" },
              { id: "b", text: "Sharing your location publicly" },
              { id: "c", text: "Reusing the same password everywhere" },
              { id: "d", text: "Disabling antivirus software" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "VPN",
                statement: "Encrypts public Wi-Fi.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** VPN",
            commonErrors: ["Weak option."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c2-14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how 'browser fingerprinting' can track users even when cookies are disabled.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fingerprinting",
                statement: "Device attributes identify.",
              },
            ],
            steps: [
              { reasoning: "Attributes collected.", marks: 1, markCode: "M" },
              { reasoning: "Combined to identify.", marks: 1, markCode: "M" },
              { reasoning: "Privacy implication.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Websites collect unique combinations of browser version, screen resolution, fonts, timezone and plugins; together these form a near-unique 'fingerprint' that identifies the device across sessions — bypassing cookie controls and enabling tracking.",
            commonErrors: ["Needs cookies."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c2-15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two-factor authentication (2FA) improves account security mainly because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Requires a second verification factor beyond the password" },
              { id: "b", text: "Encrypts all files on the device" },
              { id: "c", text: "Makes passwords longer" },
              { id: "d", text: "Blocks all phishing attempts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "2FA", statement: "Two factors." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Second factor required",
            commonErrors: ["Password length."],
          },
        },
        {
          id: "cieigcseict-q-u6l1c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the balance between personalisation services (recommendations, targeted ads) and individual privacy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Personalisation vs privacy",
                statement: "Trade-off.",
              },
            ],
            steps: [
              { reasoning: "Personalisation benefits.", marks: 1, markCode: "M" },
              { reasoning: "Privacy costs.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Personalisation improves relevance and convenience but requires collecting behavioural data, enabling profiling and potential misuse; privacy protections (consent, transparency, opt-outs, minimisation) can balance the trade-off — acceptable when users genuinely consent and control their data.",
            commonErrors: ["No trade-off."],
          },
        },
      ],
    },
  ],
};
