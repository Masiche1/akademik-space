import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "olict-u6-lesson-6-1",
  code: "6-1",
  title: "Benefits of ICT",
  goal: "I CAN describe the benefits of ICT in society, business and education.",
  standards: ["7014 9.1"],
  vocabulary: [
    { term: "Automation", definition: "Using technology to perform tasks without human intervention." },
    { term: "Productivity", definition: "Amount of work done in a given time." },
    { term: "E-learning", definition: "Learning delivered through electronic/online resources." },
    { term: "Telemedicine", definition: "Healthcare delivered remotely using ICT." },
    { term: "Digital divide", definition: "Gap between those with and without ICT access." },
    { term: "Globalisation", definition: "Increased worldwide interconnectedness through technology." },
  ],
  concepts: [
    {
      id: "olict-u6-benefits",
      title: "Advantages of ICT",
      skill: "Describe benefits in society, business and education.",
      lesson: {
        sections: [
          { heading: "In business", body: "- **Efficiency**: faster processing, less paperwork.\n- **Automation**: robots/CPM handle repetitive tasks.\n- **Reach**: e-commerce sells globally 24/7.\n- **Decision-making**: data analysis informs choices." },
          { heading: "In education", body: "- **E-learning**: courses accessible anywhere.\n- **Resources**: vast online information.\n- **Personalisation**: software adapts to learning pace.\n- **Collaboration**: shared documents and online tools." },
          { heading: "In society", body: "- **Communication**: instant global contact.\n- **Healthcare**: telemedicine, digital records.\n- **Access to information**: research, news, government services online." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "How does ICT help a small business reach more customers?",
          solution: "E-commerce website sells 24/7 globally; social media marketing reaches wide audiences cheaply; online payments simplify buying.",
        },
      },
      questions: [
        {
          id: "olict-u6-bn-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Automation means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Tasks done without human intervention" }, { id: "b", text: "Manual work" }, { id: "c", text: "Paper filing" }, { id: "d", text: "Slow processing" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Automation", statement: "No human needed." }], steps: [{ reasoning: "Automation = automatic.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Without human intervention" },
        },
        {
          id: "olict-u6-bn-q2", difficulty: "core", totalMarks: 2,
          stem: "Give two benefits of ICT in education.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "EdTech benefits", statement: "Access + resources." }], steps: [
            { reasoning: "Online resources/e-learning access.", marks: 1, markCode: "M" },
            { reasoning: "Personalisation/collaboration.", marks: 1, markCode: "A" },
          ], finalAnswer: "Access to online resources/e-learning and personalised learning tools." },
        },
        {
          id: "olict-u6-bn-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain two ways ICT improves business efficiency.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Business benefits", statement: "Speed + automation." }], steps: [
            { reasoning: "Faster data processing, less paperwork.", marks: 1, markCode: "M" },
            { reasoning: "Automation of repetitive tasks.", marks: 1, markCode: "M" },
            { reasoning: "Better decisions via data analysis.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Faster processing, automation and data-driven decisions improve efficiency." },
        },
        {
          id: "olict-u6-bn-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Benefits of ICT review.",
          parts: [
            { label: "a", prompt: "Define automation.", marks: 2 },
            { label: "b", prompt: "Give two business benefits.", marks: 2 },
            { label: "c", prompt: "Give two education benefits.", marks: 2 },
            { label: "d", prompt: "Give two social benefits.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "ICT benefits", statement: "Business, education, society." },
          ], steps: [
            { part: "a", reasoning: "Tasks without human intervention.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Efficiency/automation.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "E-commerce reach.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "E-learning/resources.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Personalisation/collab.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Communication/telemedicine.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Information access.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Clear benefits.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) auto tasks (b) eff+reach (c) e-learn+personal (d) comms+health+info" },
        },
      ],
    },
    {
      id: "olict-u6-drawbacks",
      title: "Drawbacks of ICT",
      skill: "Describe disadvantages of ICT: job losses, health issues, digital divide and dependence.",
      lesson: {
        sections: [
          { heading: "Employment", body: "Automation replaces routine jobs — typists, assembly workers, data entry. Requires reskilling; may widen inequality." },
          { heading: "Health and wellbeing", body: "Repetitive strain injury, eye strain, poor posture; screen addiction and reduced face-to-face social skills; isolation." },
          { heading: "Other drawbacks", body: "- **Digital divide**: those without access/skills fall behind.\n- **Dependence**: over-reliance on technology fails when systems crash.\n- **Security/privacy risks**: data breaches, surveillance.\n- **Misinformation**: false information spreads fast online." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A factory replaces 50 assembly workers with robots. Give one benefit and one drawback.",
          solution: "Benefit: higher output/lower costs. Drawback: 50 job losses requiring retraining.",
        },
      },
      questions: [
        {
          id: "olict-u6-db-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The digital divide refers to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Gap between those with and without ICT access" }, { id: "b", text: "A type of network" }, { id: "c", text: "A software bug" }, { id: "d", text: "A storage device" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Digital divide", statement: "Access gap." }], steps: [{ reasoning: "Divide = access gap.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Access gap" },
        },
        {
          id: "olict-u6-db-q2", difficulty: "core", totalMarks: 2,
          stem: "Give two health drawbacks of heavy computer use.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Health", statement: "RSI, eye strain." }], steps: [
            { reasoning: "Repetitive strain injury.", marks: 1, markCode: "M" },
            { reasoning: "Eye strain / poor posture.", marks: 1, markCode: "A" },
          ], finalAnswer: "Repetitive strain injury and eye strain/posture problems." },
        },
        {
          id: "olict-u6-db-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why automation can be a drawback for workers.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Job losses", statement: "Automation replaces jobs." }], steps: [
            { reasoning: "Machines perform tasks humans did.", marks: 1, markCode: "M" },
            { reasoning: "Routine jobs are first replaced.", marks: 1, markCode: "M" },
            { reasoning: "Workers need retraining for new roles.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Automation replaces routine jobs, forcing workers to retrain for new roles." },
        },
        {
          id: "olict-u6-db-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Drawbacks of ICT review.",
          parts: [
            { label: "a", prompt: "Define digital divide.", marks: 2 },
            { label: "b", prompt: "Give two health drawbacks.", marks: 2 },
            { label: "c", prompt: "Why can automation cause job losses?", marks: 2 },
            { label: "d", prompt: "Give two other ICT drawbacks.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Drawbacks", statement: "Divide, health, jobs, dependence." },
          ], steps: [
            { part: "a", reasoning: "Gap in ICT access/skills.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "RSI.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Eye strain.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Machines replace routine tasks.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Jobs eliminated.", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Dependence on tech.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Misinformation/privacy.", marks: 1, markCode: "M" },
            { part: "d", reasoning: "Valid drawbacks.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) access gap (b) RSI+eyes (c) machines replace jobs (d) dependence+misinfo" },
        },
      ],
    },
  ],
  notes: [
    { id: "olict-u6-6-1-notes", title: "Effects of ICT — notes", summary: "Benefits (efficiency, access) vs drawbacks (jobs, health, divide).",
      sections: [
        { heading: "Benefits", body: "Faster processing, automation, e-learning, global communication, telemedicine." },
        { heading: "Drawbacks", body: "Job losses, RSI/eye strain, digital divide, dependence, misinformation." },
      ] },
  ],
};
