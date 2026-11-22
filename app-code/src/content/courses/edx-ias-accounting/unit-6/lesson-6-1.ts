import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "eiasacct-u6-lesson-6-1",
  code: "6-1",
  title: "Accounting Ethics",
  goal: "I CAN apply ethical principles to accounting.",
  standards: ["Edexcel IAS Accounting 9AC01 Unit 6 — Professional Context"],
  vocabulary: [
    {
      term: "Ethics",
      definition: "Morally right conduct — principles guiding behaviour.",
    },
    {
      term: "Professional standards",
      definition: "Rules governing accountants' conduct.",
    },
    { term: "Fraud", definition: "Deliberate deception for financial gain." },
    {
      term: "Whistleblowing",
      definition: "Reporting wrongdoing to authorities.",
    },
    {
      term: "Confidentiality",
      definition: "Keeping client information private.",
    },
    {
      term: "Independence",
      definition: "Being unbiased — no conflicts of interest.",
    },
  ],
  concepts: [
    {
      id: "eiasacct-u6-ethics",
      title: "Ethical Principles",
      skill: "Apply ethical principles in accounting.",
      lesson: {
        sections: [
          {
            heading: "Fundamental principles",
            body: "**Integrity**: honest, fair — no deception. **Objectivity**: unbiased — no conflicts. **Professional competence**: skilled, up-to-date. **Confidentiality**: keep information private. **Professional behaviour**: obey laws, respect profession.\n\n**Application**: these guide every accounting decision — from recording to reporting.",
          },
          {
            heading: "Common ethical issues",
            body: "**Window dressing**: manipulating accounts to look better. **Creative accounting**: exploiting rules for favourable results. **Fraud**: deliberate deception — embezzlement, false records. **Conflicts**: personal interests vs professional duty.\n\n**Response**: refuse unethical requests, report concerns, maintain standards.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Manager asks to inflate profits. What to do?",
          solution: "Refuse — violates integrity and objectivity.",
        },
      },
      questions: [
        {
          id: "eiasacct-u6-eth-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is accounting ethics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Morally right conduct" },
              { id: "b", text: "Making money" },
              { id: "c", text: "Following rules only" },
              { id: "d", text: "Speed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ethics",
                statement: "Morally right.",
              },
            ],
            steps: [
              {
                reasoning: "Ethics = morally right.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Morally right",
            commonErrors: ["Money confused."],
          },
        },
        {
          id: "eiasacct-u6-eth-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ethical principles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethical principles",
                statement: "Integrity+objectivity.",
              },
            ],
            steps: [
              {
                reasoning: "Integrity — honest, fair.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Objectivity — unbiased.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Confidentiality — keep private.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Integrity, objectivity, confidentiality, competence.",
            commonErrors: ["Only one.", "Wrong principle."],
          },
        },
        {
          id: "eiasacct-u6-eth-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain window dressing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Window dressing",
                statement: "Manipulation.",
              },
            ],
            steps: [
              {
                reasoning: "Manipulating accounts to look better.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Examples: delaying expenses, accelerating sales.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Violates integrity — misleading.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Unethical — deceives stakeholders.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Manipulation+misleading+unethical.",
            commonErrors: ["Legitimate.", "No manipulation."],
          },
        },
        {
          id: "eiasacct-u6-eth-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Accountant discovers colleague inflating expenses.",
          parts: [
            { label: "a", prompt: "What ethical issues?", marks: 4 },
            { label: "b", prompt: "What to do?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethical response",
                statement: "Integrity+report.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Fraud — deliberate deception.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Violates integrity and objectivity.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Report to supervisor/management.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) If ignored, whistleblow to authorities.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) fraud+integrity (b) report+whistleblow",
            commonErrors: ["Ignore.", "No action."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u6-professional",
      title: "Professional Standards",
      skill: "Understand professional accounting standards.",
      lesson: {
        sections: [
          {
            heading: "Regulatory bodies",
            body: "**IFRS**: International Financial Reporting Standards — global accounting rules. **GAAP**: Generally Accepted Accounting Principles — national standards. **FRC**: Financial Reporting Council — UK regulator.\n\n**Purpose**: ensure consistency, comparability, reliability — users can trust accounts.",
          },
          {
            heading: "Key standards",
            body: "**Accruals basis**: record when earned/incurred, not when paid. **Going concern**: assume business continues. **Materiality**: only significant items need adjustment. **Consistency**: same methods year to year.\n\n**Compliance**: accountants must follow standards — or face penalties.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What does going concern mean?",
          solution: "Assume business will continue operating.",
        },
      },
      questions: [
        {
          id: "eiasacct-u6-std-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are IFRS?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "International accounting standards" },
              { id: "b", text: "Tax rules" },
              { id: "c", text: "Banking rules" },
              { id: "d", text: "Employment law" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "IFRS",
                statement: "International standards.",
              },
            ],
            steps: [
              {
                reasoning: "IFRS = international standards.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** International standards",
            commonErrors: ["Tax confused."],
          },
        },
        {
          id: "eiasacct-u6-std-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two accounting standards.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Accounting standards",
                statement: "Accruals+going concern.",
              },
            ],
            steps: [
              {
                reasoning: "Accruals basis — record when earned.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Going concern — business continues.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Materiality — only significant items.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Accruals, going concern, materiality, consistency.",
            commonErrors: ["Only one.", "Wrong standard."],
          },
        },
        {
          id: "eiasacct-u6-std-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why standards matter.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Standards purpose",
                statement: "Consistency+trust.",
              },
            ],
            steps: [
              {
                reasoning: "Consistency — same rules for all.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Comparability — compare companies.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reliability — users can trust.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Without standards — chaos, manipulation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Consistency+comparability+reliability.",
            commonErrors: ["Not needed.", "One reason."],
          },
        },
        {
          id: "eiasacct-u6-std-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Business faces going concern doubt.",
          parts: [
            { label: "a", prompt: "What does going concern mean?", marks: 4 },
            { label: "b", prompt: "What if doubt exists?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Going concern",
                statement: "Assumption+disclosure.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Assume business will continue operating.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Basis for accounts — not liquidation values.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Disclose doubt — warn users.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) May need to use alternative basis — liquidation.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) continue assumption (b) disclose+alternative",
            commonErrors: ["Ignore doubt.", "No disclosure."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u6-sustainability",
      title: "Sustainability and Social Responsibility",
      skill: "Understand sustainability reporting in accounting.",
      lesson: {
        sections: [
          {
            heading: "ESG reporting",
            body: "**Environmental**: carbon emissions, waste, resource use. **Social**: employee welfare, community impact, diversity. **Governance**: board structure, ethics, transparency.\n\n**Purpose**: show stakeholders business impact beyond profit — sustainability matters.",
          },
          {
            heading: "Integrated reporting",
            body: "**Financial + non-financial**: profit + ESG together. **Long-term view**: sustainability affects future performance. **Stakeholder needs**: investors, customers, employees want ESG info.\n\n**Example**: company reports profit AND carbon reduction — shows holistic performance.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why report ESG?",
          solution: "Show stakeholders sustainability impact.",
        },
      },
      questions: [
        {
          id: "eiasacct-u6-esg-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is ESG?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Environmental, Social, Governance" },
              { id: "b", text: "Tax reporting" },
              { id: "c", text: "Cash flow" },
              { id: "d", text: "Profit only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "ESG", statement: "Env+Social+Gov." },
            ],
            steps: [
              { reasoning: "ESG = three pillars.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** ESG",
            commonErrors: ["Profit only."],
          },
        },
        {
          id: "eiasacct-u6-esg-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ESG components.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "ESG components",
                statement: "Environmental+social.",
              },
            ],
            steps: [
              {
                reasoning: "Environmental — carbon, waste, resources.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Social — employees, community, diversity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Governance — board, ethics, transparency.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Environmental, Social, Governance.",
            commonErrors: ["Only one.", "Wrong component."],
          },
        },
        {
          id: "eiasacct-u6-esg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why sustainability reporting matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sustainability reporting",
                statement: "Holistic view.",
              },
            ],
            steps: [
              {
                reasoning: "Stakeholders want ESG info — investors, customers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Long-term impact — sustainability affects future.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Risk management — ESG risks matter.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Competitive advantage — ESG leaders attract talent/investment.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Stakeholders+long-term+risk+advantage.",
            commonErrors: ["Not needed.", "One reason."],
          },
        },
        {
          id: "eiasacct-u6-esg-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Company reports high profit but poor ESG.",
          parts: [
            { label: "a", prompt: "How to evaluate?", marks: 4 },
            { label: "b", prompt: "What to consider?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "ESG evaluation",
                statement: "Holistic view.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Profit alone insufficient — need ESG.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) ESG affects long-term sustainability.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Environmental impact — carbon, waste.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Social impact — employees, community.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) insufficient+long-term (b) env+social",
            commonErrors: ["Profit enough.", "No ESG."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u6-technology",
      title: "Technology in Accounting",
      skill: "Understand technology's role in accounting.",
      lesson: {
        sections: [
          {
            heading: "Accounting software",
            body: "**Bookkeeping software**: automate recording — Xero, QuickBooks, Sage. **Benefits**: speed, accuracy, real-time data. **Features**: invoicing, bank feeds, reports.\n\n**Cloud accounting**: access anywhere, automatic backups, collaboration.",
          },
          {
            heading: "Emerging tech",
            body: "**AI/ML**: automate data entry, detect anomalies, predict trends. **Blockchain**: secure, transparent transactions — reduce fraud. **RPA**: automate repetitive tasks — reconciliations.\n\n**Impact**: accountants shift from recording to analysis — higher-value work.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How does AI help accounting?",
          solution: "Automate data entry, detect anomalies, predict trends.",
        },
      },
      questions: [
        {
          id: "eiasacct-u6-tech-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is cloud accounting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Manual books" },
              { id: "b", text: "Paper records" },
              { id: "c", text: "Local software" },
              { id: "d", text: "Online accounting software" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cloud accounting",
                statement: "Online software.",
              },
            ],
            steps: [
              { reasoning: "Cloud = online.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(d)** Online",
            commonErrors: ["Local confused."],
          },
        },
        {
          id: "eiasacct-u6-tech-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two benefits of accounting software.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Software benefits",
                statement: "Speed+accuracy.",
              },
            ],
            steps: [
              {
                reasoning: "Speed — automate recording.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Accuracy — reduce errors.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Real-time data — instant reports.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Speed, accuracy, real-time, automation.",
            commonErrors: ["Only one.", "Wrong benefit."],
          },
        },
        {
          id: "eiasacct-u6-tech-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how AI impacts accounting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "AI impact",
                statement: "Automation+analysis.",
              },
            ],
            steps: [
              {
                reasoning: "Automate data entry — less manual work.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Detect anomalies — fraud prevention.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Predict trends — better forecasting.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Accountants shift to analysis — higher value.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Automate+detect+predict+shift.",
            commonErrors: ["No impact.", "One impact."],
          },
        },
        {
          id: "eiasacct-u6-tech-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate technology in accounting.",
          parts: [
            { label: "a", prompt: "Benefits.", marks: 4 },
            { label: "b", prompt: "Risks.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tech evaluation",
                statement: "Pros+cons.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Speed — faster processing.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Accuracy — fewer errors.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Real-time — instant data.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Analysis — better insights.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Security — data breaches.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Job displacement — automation.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) speed+accuracy+real-time+analysis (b) security+jobs",
            commonErrors: ["Only benefits.", "No risks."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u6-summary",
      title: "Professional Context Summary",
      skill: "Summarise professional accounting context.",
      lesson: {
        sections: [
          {
            heading: "Summary",
            body: "**Ethics**: integrity, objectivity, confidentiality — guide conduct. **Standards**: IFRS, GAAP — ensure consistency. **ESG**: environmental, social, governance — sustainability. **Technology**: software, AI, cloud — transform accounting.\n\n**Key idea**: accounting is professional practice — ethics, standards, technology shape it.",
          },
          {
            heading: "Exam preparation",
            body: "**Apply**: ethical dilemmas, standards compliance, ESG reporting. **Evaluate**: technology impact, sustainability importance. **Analyse**: trends, implications, recommendations.\n\n**Key concepts**: ethics, standards, ESG, technology, professional conduct.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "All professional topics covered. Result?",
          solution: "Ready for professional accounting.",
        },
      },
      questions: [
        {
          id: "eiasacct-u6-sum-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main purpose of accounting ethics?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Guide conduct" },
              { id: "b", text: "Speed" },
              { id: "c", text: "Follow rules" },
              { id: "d", text: "Make money" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ethics purpose",
                statement: "Guide conduct.",
              },
            ],
            steps: [
              { reasoning: "Ethics = guide.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Guide conduct",
            commonErrors: ["Money confused."],
          },
        },
        {
          id: "eiasacct-u6-sum-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two professional topics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Professional topics",
                statement: "Ethics+standards+ESG.",
              },
            ],
            steps: [
              {
                reasoning: "Ethics — integrity, objectivity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Standards — IFRS, GAAP.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "ESG — sustainability.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Ethics, standards, ESG, technology.",
            commonErrors: ["Only one.", "Wrong topic."],
          },
        },
        {
          id: "eiasacct-u6-sum-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why professional context matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Professional context",
                statement: "Trust+quality.",
              },
            ],
            steps: [
              {
                reasoning: "Ethics — trust in profession.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Standards — consistency, comparability.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "ESG — sustainability matters.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Technology — transforms practice.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Trust+consistency+sustainability+tech.",
            commonErrors: ["Not needed.", "One reason."],
          },
        },
        {
          id: "eiasacct-u6-sum-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate the future of accounting.",
          parts: [
            { label: "a", prompt: "Technology impact.", marks: 4 },
            { label: "b", prompt: "Professional evolution.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Future of accounting",
                statement: "Change+adaptation.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Automation — less manual work.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) AI — better analysis, fraud detection.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Shift to advisory — higher value work.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) ESG focus — sustainability reporting.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) automation+AI (b) advisory+ESG",
            commonErrors: ["No change.", "No evolution."],
          },
        },
      ],
    },
  ],
};
