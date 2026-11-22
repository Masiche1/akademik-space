import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "eiasacct-u6-lesson-6-3",
  code: "6-3",
  title: "Accounting Career and Skills",
  goal: "I CAN understand accounting careers and required skills.",
  standards: ["Edexcel IAS Accounting 9AC01 Unit 6 — Professional Context"],
  vocabulary: [
    {
      term: "Accountant",
      definition: "Professional who maintains/analyses financial records.",
    },
    {
      term: "Chartered accountant",
      definition: "Qualified accountant with professional designation.",
    },
    { term: "Bookkeeper", definition: "Records day-to-day transactions." },
    {
      term: "Audit",
      definition: "Independent examination of financial records.",
    },
    {
      term: "Tax advisor",
      definition: "Specialist in tax planning and compliance.",
    },
    {
      term: "Management accountant",
      definition: "Provides financial info for internal decisions.",
    },
  ],
  concepts: [
    {
      id: "eiasacct-u6-career",
      title: "Accounting Careers",
      skill: "Understand accounting career paths.",
      lesson: {
        sections: [
          {
            heading: "Career types",
            body: "**Bookkeeper**: records transactions — entry level. **Accountant**: prepares statements, analyses — qualified. **Chartered accountant**: highest qualification — ACA/ACCA. **Auditor**: independent examination — assurance. **Tax advisor**: tax planning, compliance. **Management accountant**: internal decision support.\n\n**Progression**: bookkeeper → accountant → chartered → partner/director.",
          },
          {
            heading: "Skills needed",
            body: "**Technical**: accounting knowledge, software proficiency, tax rules. **Analytical**: data analysis, problem-solving, attention to detail. **Soft skills**: communication, teamwork, ethical judgement.\n\n**Education**: degree in accounting/finance, professional qualifications (ACCA, ACA, CIMA).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What qualifications for chartered accountant?",
          solution: "Degree + ACCA/ACA exams + work experience.",
        },
      },
      questions: [
        {
          id: "eiasacct-u6-career-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an accountant?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tax collector" },
              { id: "b", text: "Bookkeeper" },
              { id: "c", text: "Financial professional" },
              { id: "d", text: "Banker" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Accountant",
                statement: "Financial professional.",
              },
            ],
            steps: [
              {
                reasoning: "Accountant = financial professional.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Financial professional",
            commonErrors: ["Bookkeeper confused."],
          },
        },
        {
          id: "eiasacct-u6-career-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two accounting careers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Accounting careers",
                statement: "Bookkeeper+auditor+tax.",
              },
            ],
            steps: [
              {
                reasoning: "Bookkeeper — records transactions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Auditor — independent examination.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Tax advisor — tax planning.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Bookkeeper, accountant, auditor, tax advisor, management accountant.",
            commonErrors: ["Only one.", "Wrong career."],
          },
        },
        {
          id: "eiasacct-u6-career-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain difference between bookkeeper and accountant.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "Bookkeeper vs accountant",
                statement: "Recording vs analysis.",
              },
            ],
            steps: [
              {
                reasoning: "Bookkeeper — records day-to-day transactions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Accountant — prepares statements, analyses.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Bookkeeper — clerical; accountant — professional.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Accountant — higher qualification, judgement.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Recording vs analysis+qualification.",
            commonErrors: ["Same.", "No difference."],
          },
        },
        {
          id: "eiasacct-u6-career-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Student considering accounting career.",
          parts: [
            { label: "a", prompt: "What skills needed?", marks: 4 },
            { label: "b", prompt: "Career path?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Accounting career",
                statement: "Skills+path.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Technical — accounting knowledge, software.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Soft skills — communication, ethics.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Degree → professional qualification → experience.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Progression — bookkeeper → accountant → partner.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) technical+soft (b) degree→qualification→experience",
            commonErrors: ["No skills.", "No path."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u6-skills",
      title: "Accounting Skills",
      skill: "Identify skills needed for accounting.",
      lesson: {
        sections: [
          {
            heading: "Technical skills",
            body: "**Accounting knowledge**: principles, standards, tax rules. **Software**: bookkeeping, spreadsheet, ERP systems. **Data analysis**: statistics, trends, forecasting.\n\n**Application**: prepare statements, analyse performance, advise on decisions.",
          },
          {
            heading: "Professional skills",
            body: "**Communication**: explain complex info clearly. **Ethics**: integrity, objectivity, confidentiality. **Problem-solving**: identify issues, find solutions. **Teamwork**: collaborate with colleagues, clients.\n\n**Development**: continuous learning — standards change, technology evolves.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "What skills for management accountant?",
          solution: "Technical + communication + analysis + ethics.",
        },
      },
      questions: [
        {
          id: "eiasacct-u6-skill-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a technical skill in accounting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Teamwork" },
              { id: "b", text: "Accounting knowledge" },
              { id: "c", text: "Ethics" },
              { id: "d", text: "Communication" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Technical skill",
                statement: "Accounting knowledge.",
              },
            ],
            steps: [
              {
                reasoning: "Technical = accounting knowledge.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Accounting knowledge",
            commonErrors: ["Soft confused."],
          },
        },
        {
          id: "eiasacct-u6-skill-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two accounting skills.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Accounting skills",
                statement: "Technical+soft.",
              },
            ],
            steps: [
              {
                reasoning: "Technical — accounting knowledge, software.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Analytical — data analysis, problem-solving.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Communication — explain clearly.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Technical, analytical, communication, ethics.",
            commonErrors: ["Only one.", "Wrong skill."],
          },
        },
        {
          id: "eiasacct-u6-skill-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why communication matters in accounting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Communication",
                statement: "Explain complex.",
              },
            ],
            steps: [
              {
                reasoning: "Explain complex info — make accessible.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Advise stakeholders — help decisions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Present findings — reports, presentations.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Build trust — clear communication.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Accessible+advise+present+trust.",
            commonErrors: ["Not needed.", "One reason."],
          },
        },
        {
          id: "eiasacct-u6-skill-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate accounting skills development.",
          parts: [
            { label: "a", prompt: "What skills to develop?", marks: 4 },
            { label: "b", prompt: "How to develop?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Skills development",
                statement: "Technical+soft.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Technical — accounting, software, analysis.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Soft — communication, ethics, teamwork.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Education — degree, qualifications.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Experience — practical work, mentoring.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) technical+soft (b) education+experience",
            commonErrors: ["Only technical.", "No development."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u6-future",
      title: "Future of Accounting",
      skill: "Understand future trends in accounting.",
      lesson: {
        sections: [
          {
            heading: "Technology trends",
            body: "**Automation**: routine tasks automated — bookkeeping, reconciliations. **AI**: anomaly detection, predictive analytics, fraud prevention. **Blockchain**: secure transactions, smart contracts. **Cloud**: real-time access, collaboration.\n\n**Impact**: accountants shift from recording to analysis — higher-value advisory work.",
          },
          {
            heading: "Professional evolution",
            body: "**ESG focus**: sustainability reporting — environmental, social, governance. **Advisory role**: strategic advice, business partnering. **Data analytics**: insights from big data. **Globalisation**: IFRS adoption, cross-border work.\n\n**Preparation**: develop analytical, communication, technology skills.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How will accounting change?",
          solution: "Automation + AI + ESG + advisory.",
        },
      },
      questions: [
        {
          id: "eiasacct-u6-future-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main future trend in accounting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Automation and AI" },
              { id: "b", text: "Paper records" },
              { id: "c", text: "No change" },
              { id: "d", text: "More manual work" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Future trend",
                statement: "Automation+AI.",
              },
            ],
            steps: [
              {
                reasoning: "Trend = automation+AI.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Automation+AI",
            commonErrors: ["Manual confused."],
          },
        },
        {
          id: "eiasacct-u6-future-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two future accounting trends.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Future trends",
                statement: "Automation+ESG+advisory.",
              },
            ],
            steps: [
              {
                reasoning: "Automation — routine tasks automated.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "AI — analytics, fraud detection.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "ESG — sustainability reporting.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Automation, AI, ESG, advisory, blockchain.",
            commonErrors: ["Only one.", "Wrong trend."],
          },
        },
        {
          id: "eiasacct-u6-future-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how AI will change accounting.",
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
          id: "eiasacct-u6-future-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Prepare for future accounting career.",
          parts: [
            { label: "a", prompt: "What skills to develop?", marks: 4 },
            { label: "b", prompt: "How to prepare?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Future preparation",
                statement: "Skills+adaptation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Technical — accounting, software, data analysis.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Soft — communication, ethics, adaptability.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Continuous learning — stay updated.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Embrace technology — learn AI, cloud.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) technical+soft (b) learning+technology",
            commonErrors: ["No skills.", "No preparation."],
          },
        },
      ],
    },
    {
      id: "eiasacct-u6-final",
      title: "Accounting Course Summary",
      skill: "Summarise entire accounting course.",
      lesson: {
        sections: [
          {
            heading: "Course overview",
            body: "**Fundamentals**: principles, double-entry, bookkeeping. **Recording**: ledgers, journals, adjustments. **Financial statements**: income statement, balance sheet, cash flow. **Business types**: sole trader, partnership, company, non-profit. **Analysis**: ratios, interpretation, stakeholder perspectives. **Professional**: ethics, standards, technology, careers.\n\n**Key skills**: recording, preparing, analysing, interpreting, advising.",
          },
          {
            heading: "Exam preparation",
            body: "**Apply**: prepare accounts, calculate ratios, interpret results. **Evaluate**: business performance, ethical issues, professional standards. **Analyse**: trends, stakeholders, recommendations.\n\n**Key concepts**: double-entry, financial statements, ratio analysis, business structures, professional practice.",
          },
        ],
        keyFormulas: [
          { name: "Net profit", statement: "Revenue - COS - Expenses" },
          { name: "Balance sheet", statement: "Assets = Liabilities + Equity" },
          { name: "Gross margin", statement: "GP / Revenue" },
        ],
        workedExample: {
          problem: "All accounting topics covered. Result?",
          solution: "Complete accounting foundation.",
        },
      },
      questions: [
        {
          id: "eiasacct-u6-final-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the main purpose of accounting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inform decisions" },
              { id: "b", text: "Calculate tax" },
              { id: "c", text: "Prepare statements" },
              { id: "d", text: "Record transactions" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Accounting purpose",
                statement: "Inform decisions.",
              },
            ],
            steps: [
              { reasoning: "Accounting = inform.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Inform decisions",
            commonErrors: ["Recording confused."],
          },
        },
        {
          id: "eiasacct-u6-final-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give three business structures covered.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Business structures",
                statement: "Sole+partnership+company.",
              },
            ],
            steps: [
              {
                reasoning: "Sole trader — one owner.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Partnership — multiple owners.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Company — shareholders, limited liability.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Sole trader, partnership, company, non-profit.",
            commonErrors: ["Only one.", "Wrong structure."],
          },
        },
        {
          id: "eiasacct-u6-final-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why accounting is a profession.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Accounting profession",
                statement: "Ethics+standards+qualification.",
              },
            ],
            steps: [
              {
                reasoning: "Ethical standards — integrity, objectivity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Professional qualifications — ACCA, ACA.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Public trust — users rely on accounts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Regulation — standards, oversight.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Ethics+qualification+trust+regulation.",
            commonErrors: ["Not profession.", "One reason."],
          },
        },
        {
          id: "eiasacct-u6-final-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate your accounting knowledge.",
          parts: [
            { label: "a", prompt: "What have you learned?", marks: 4 },
            { label: "b", prompt: "What next?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Course evaluation",
                statement: "Learning+application.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Fundamentals — double-entry, bookkeeping.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Financial statements — IS, BS, CF.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Analysis — ratios, interpretation.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Professional — ethics, standards, careers.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) Apply — prepare accounts, analyse.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) Continue learning — qualifications, experience.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) fundamentals+statements+analysis+professional (b) apply+learn",
            commonErrors: ["Nothing learned.", "No next steps."],
          },
        },
      ],
    },
  ],
};
