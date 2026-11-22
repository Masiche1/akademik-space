import type { Lesson } from "../../../types.ts";

export const lesson313: Lesson = {
  id: "ecs11-u5-lesson-5-3",
  code: "5-3",
  title: "Data Security and Privacy",
  goal: "I CAN explain data protection laws and privacy issues.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Online Safety"],
  vocabulary: [
    {
      term: "GDPR",
      definition: "General Data Protection Regulation — EU law.",
    },
    { term: "Data subject", definition: "Person whose data is collected." },
    { term: "Consent", definition: "Permission to collect/use data." },
    { term: "Data breach", definition: "Unauthorised access to data." },
    {
      term: "Right to be forgotten",
      definition: "Request deletion of personal data.",
    },
  ],
  concepts: [
    {
      id: "ecs11-u5-privacy",
      title: "Data Protection and Privacy",
      skill: "Explain privacy laws, rights and responsibilities.",
      lesson: {
        sections: [
          {
            heading: "Data protection laws",
            body: "**GDPR** (EU): lawful basis for processing, consent required, right to access/delete data, data breach notification within 72 hours, fines for violations. **Similar laws worldwide**: CCPA (California), UK GDPR post-Brexit.\n\n**Key principles**: lawfulness, fairness, transparency; purpose limitation; data minimisation; accuracy; storage limitation; integrity/confidentiality.",
          },
          {
            heading: "Privacy issues",
            body: "**Tracking**: cookies, analytics, ad networks — online behaviour tracked. **Data brokers**: companies buying/selling personal data. **Profiling**: algorithms categorising individuals. **Surveillance**: CCTV, facial recognition, location tracking.\n\n**Balancing act**: security vs privacy; convenience vs control; innovation vs protection.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Website uses cookies without asking. GDPR issue?",
          solution: "Yes — consent required for non-essential cookies.",
        },
      },
      questions: [
        {
          id: "ecs11-u5-privacy-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does GDPR stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Global Digital Privacy Rules" },
              { id: "b", text: "General Data Protection Regulation" },
              { id: "c", text: "Government Data Policy Regulation" },
              { id: "d", text: "General Data Processing Rules" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GDPR",
                statement: "EU data protection law.",
              },
            ],
            steps: [
              { reasoning: "GDPR = EU data law.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(b)** General Data Protection Regulation",
            commonErrors: ["Wrong expansion."],
          },
        },
        {
          id: "ecs11-u5-privacy-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two rights under GDPR.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GDPR rights",
                statement: "Access, delete, portability.",
              },
            ],
            steps: [
              {
                reasoning: "Right to access — see what data held.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Right to be forgotten — request deletion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Right to data portability — transfer data.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Access, deletion, portability, consent.",
            commonErrors: ["Only one.", "No rights."],
          },
        },
        {
          id: "ecs11-u5-privacy-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain what a data breach is and why it's serious.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data breach",
                statement: "Unauthorised access.",
              },
            ],
            steps: [
              {
                reasoning: "Unauthorised access to personal/confidential data.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Can lead to identity theft, fraud.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "GDPR requires notification within 72 hours.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Damages reputation, legal penalties.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Unauthorised access → fraud risk + legal consequences.",
            commonErrors: ["No consequences.", "Vague."],
          },
        },
        {
          id: "ecs11-u5-privacy-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company collects customer data for marketing.",
          parts: [
            { label: "a", prompt: "List three GDPR requirements.", marks: 4 },
            { label: "b", prompt: "Explain two privacy risks.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data compliance",
                statement: "Lawful + secure + rights.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Obtain explicit consent before collecting.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Only collect necessary data (minimisation).",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Allow access/deletion requests; secure storage.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Data breach → identity theft risk.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Data misuse/selling without consent — trust loss.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) consent+minimise+rights (b) breach+misuse",
            commonErrors: ["No requirements.", "No risks."],
          },
        },
      ],
    },
    {
      id: "ecs11-u5-ethics2",
      title: "Ethical and Legal Issues",
      skill: "Evaluate ethical dilemmas in computing.",
      lesson: {
        sections: [
          {
            heading: "Ethical issues",
            body: "**Copyright**: software piracy, unauthorised copying. **Plagiarism**: using others' code/work without credit. **Hacking**: unauthorised access — illegal. **Privacy vs security**: surveillance, encryption debates. **AI bias**: algorithms discriminating.\n\n**Computer misuse act**: UK law criminalising unauthorised access/modification. **Intellectual property**: patents, trademarks, licenses.",
          },
          {
            heading: "Professional ethics",
            body: "**Codes of conduct**: BCS, ACM — honesty, competence, public interest. **Whistleblowing**: exposing wrongdoing — protected but risky. **Responsibility**: developers accountable for harmful software.\n\n**Dilemmas**: military AI, social media moderation, data monopolies, automation job losses.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Developer finds security flaw in their app. What should they do?",
          solution: "Report/fix responsibly — disclosure ethics.",
        },
      },
      questions: [
        {
          id: "ecs11-u5-ethics2-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is computer misuse?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Buying hardware" },
              { id: "b", text: "Programming software" },
              {
                id: "c",
                text: "Unauthorised access or modification of systems",
              },
              { id: "d", text: "Using computer legally" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Computer misuse",
                statement: "Unauthorised access.",
              },
            ],
            steps: [
              {
                reasoning: "Misuse = unauthorised.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Unauthorised access",
            commonErrors: ["Legal use confused."],
          },
        },
        {
          id: "ecs11-u5-ethics2-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ethical issues in computing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethical issues",
                statement: "Copyright, privacy, bias.",
              },
            ],
            steps: [
              {
                reasoning: "Software piracy — unauthorised copying.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Privacy violations — data collection without consent.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "AI bias — algorithms discriminating.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Piracy, privacy, bias, hacking.",
            commonErrors: ["Only one.", "Legal issues only."],
          },
        },
        {
          id: "ecs11-u5-ethics2-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the ethical dilemma of facial recognition technology.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Facial recognition ethics",
                statement: "Security vs privacy.",
              },
            ],
            steps: [
              {
                reasoning: "Benefits: security, convenience, crime prevention.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Concerns: mass surveillance, privacy invasion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Bias: less accurate for some ethnic groups.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Dilemma: safety vs civil liberties.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Security benefits vs privacy/bias concerns.",
            commonErrors: ["One side only.", "No dilemma."],
          },
        },
        {
          id: "ecs11-u5-ethics2-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A social media company uses algorithms to maximise engagement.",
          parts: [
            { label: "a", prompt: "Identify two ethical concerns.", marks: 4 },
            {
              label: "b",
              prompt: "Suggest two responsible practices.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Algorithm ethics",
                statement: "Engagement vs wellbeing.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Addiction — designed to keep users scrolling.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Misinformation amplification — engagement over truth.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Transparency — explain how algorithm works.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Wellbeing features — usage limits, content controls.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) addiction+misinformation (b) transparency+wellbeing",
            commonErrors: ["No concerns.", "No practices."],
          },
        },
      ],
    },
  ],
};
