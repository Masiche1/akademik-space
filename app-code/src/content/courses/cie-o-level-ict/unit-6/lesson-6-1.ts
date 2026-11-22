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
            { id: "a", text: "Paper filing" },
            { id: "b", text: "Manual work" },
            { id: "c", text: "Tasks done without human intervention" },
            { id: "d", text: "Slow processing" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Automation", statement: "No human needed." }], steps: [{ reasoning: "Automation = automatic.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Without human intervention" },
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
        {
          id: "olict-u6-bn-q5", difficulty: "foundation", totalMarks: 1,
          stem: "E-learning means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Printing notes" },
            { id: "b", text: "Learning delivered through electronic or online resources" },
            { id: "c", text: "Learning only in classrooms" },
            { id: "d", text: "A type of virus" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "E-learning", statement: "Online learning." }], steps: [{ reasoning: "E-learning uses electronic resources.", marks: 1, markCode: "B" }], finalAnswer: "**(b)** Electronic/online learning" },
        },
        {
          id: "olict-u6-bn-q6", difficulty: "core", totalMarks: 2,
          stem: "A business processes 500 orders per day manually. With ICT it processes 2000. By how many orders does ICT increase daily processing?",
          response: { type: "numeric", parts: [{ label: "orders", answer: 1500 }] },
          markscheme: { principles: [{ kind: "principle", name: "Efficiency gain", statement: "New − old." }], steps: [
            { reasoning: "2000 − 500 = 1500.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 1500 orders.", marks: 1, markCode: "A" },
          ], finalAnswer: "1500 orders" },
        },
        {
          id: "olict-u6-bn-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Telemedicine is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A network cable" },
            { id: "b", text: "A type of software" },
            { id: "c", text: "Healthcare delivered remotely using ICT" },
            { id: "d", text: "Online shopping" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Telemedicine", statement: "Remote healthcare." }], steps: [{ reasoning: "Telemedicine = remote healthcare.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Remote healthcare" },
        },
        {
          id: "olict-u6-bn-q8", difficulty: "core", totalMarks: 1,
          stem: "Which of these is a benefit of ICT in business?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Faster processing and automation" },
            { id: "b", text: "More paperwork" },
            { id: "c", text: "Less reach" },
            { id: "d", text: "Slower data entry" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Business benefits", statement: "Speed + automation." }], steps: [{ reasoning: "ICT speeds processing and automates tasks.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Faster processing" },
        },
        {
          id: "olict-u6-bn-q9", difficulty: "core", totalMarks: 2,
          stem: "An online shop operates 24 hours a day while a physical shop opens 10 hours. How many extra hours per day does the online shop trade?",
          response: { type: "numeric", parts: [{ label: "hours", answer: 14, unit: "hours" }] },
          markscheme: { principles: [{ kind: "principle", name: "Trading hours", statement: "24 − 10." }], steps: [
            { reasoning: "24 − 10 = 14 hours.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 14 hours.", marks: 1, markCode: "A" },
          ], finalAnswer: "14 hours" },
        },
        {
          id: "olict-u6-bn-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how ICT helps education in remote or rural areas.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Education access", statement: "E-learning + resources." }], steps: [
            { reasoning: "E-learning lets students access courses online.", marks: 1, markCode: "M" },
            { reasoning: "Vast online resources provide information beyond textbooks.", marks: 1, markCode: "M" },
            { reasoning: "Distance learning removes the need to travel.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation of the benefit.", marks: 1, markCode: "A" },
          ], finalAnswer: "ICT gives remote students online courses, resources and distance learning access." },
        },
        {
          id: "olict-u6-bn-q11", difficulty: "core", totalMarks: 1,
          stem: "Productivity measures…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The size of the screen" },
            { id: "b", text: "The speed of the internet" },
            { id: "c", text: "The amount of work done in a given time" },
            { id: "d", text: "The number of cables" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Productivity", statement: "Work per time." }], steps: [{ reasoning: "Productivity = output over time.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Work done in a given time" },
        },
        {
          id: "olict-u6-bn-q12", difficulty: "core", totalMarks: 2,
          stem: "A factory with robots produces 1200 units per day; manual production makes 400. What is the difference?",
          response: { type: "numeric", parts: [{ label: "units", answer: 800 }] },
          markscheme: { principles: [{ kind: "principle", name: "Output gain", statement: "Automated − manual." }], steps: [
            { reasoning: "1200 − 400 = 800 units.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 800 units.", marks: 1, markCode: "A" },
          ], finalAnswer: "800 units" },
        },
        {
          id: "olict-u6-bn-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Discuss two benefits of ICT for global communication.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Global communication", statement: "Instant + collaboration." }], steps: [
            { reasoning: "Instant communication with anyone worldwide.", marks: 1, markCode: "M" },
            { reasoning: "Families and friends stay connected across distances.", marks: 1, markCode: "M" },
            { reasoning: "Businesses collaborate across countries and time zones.", marks: 1, markCode: "M" },
            { reasoning: "Both benefits discussed.", marks: 1, markCode: "A" },
          ], finalAnswer: "Instant global contact and international collaboration." },
        },
        {
          id: "olict-u6-bn-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Globalisation through ICT refers to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Slow internet" },
            { id: "b", text: "A type of cable" },
            { id: "c", text: "Local file storage" },
            { id: "d", text: "Increased worldwide interconnectedness" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Globalisation", statement: "Worldwide connection." }], steps: [{ reasoning: "ICT links the world.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Worldwide interconnectedness" },
        },
        {
          id: "olict-u6-bn-q15", difficulty: "core", totalMarks: 2,
          stem: "A company saves $50 per employee per month. With 20 employees, how much does it save per month?",
          response: { type: "numeric", parts: [{ label: "USD", answer: 1000, unit: "USD" }] },
          markscheme: { principles: [{ kind: "principle", name: "Savings", statement: "Per employee × count." }], steps: [
            { reasoning: "20 × $50 = $1000.", marks: 1, markCode: "M" },
            { reasoning: "Answer = $1000 per month.", marks: 1, markCode: "A" },
          ], finalAnswer: "$1000 per month" },
        },
        {
          id: "olict-u6-bn-q16", difficulty: "challenge", totalMarks: 4,
          stem: "A small business wants to grow. Suggest two ICT benefits and explain how each helps.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Business growth", statement: "Reach + data." }], steps: [
            { reasoning: "E-commerce lets it sell online 24/7 to a wider market.", marks: 1, markCode: "M" },
            { reasoning: "Social media marketing reaches customers cheaply.", marks: 1, markCode: "M" },
            { reasoning: "Data analysis informs better business decisions.", marks: 1, markCode: "M" },
            { reasoning: "Two benefits explained clearly.", marks: 1, markCode: "A" },
          ], finalAnswer: "Online selling reaches more customers; data analysis improves decisions." },
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
            { id: "a", text: "A storage device" },
            { id: "b", text: "A software bug" },
            { id: "c", text: "Gap between those with and without ICT access" },
            { id: "d", text: "A type of network" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Digital divide", statement: "Access gap." }], steps: [{ reasoning: "Divide = access gap.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Access gap" },
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
        {
          id: "olict-u6-db-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Automation can be a drawback because it may cause…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Job losses" },
            { id: "b", text: "Higher wages always" },
            { id: "c", text: "More leisure time for all" },
            { id: "d", text: "Faster work" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Job losses", statement: "Machines replace jobs." }], steps: [{ reasoning: "Automation replaces human jobs.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Job losses" },
        },
        {
          id: "olict-u6-db-q6", difficulty: "core", totalMarks: 2,
          stem: "A factory replaces 50 workers with robots. Retraining each worker costs $200. What is the total retraining cost?",
          response: { type: "numeric", parts: [{ label: "USD", answer: 10000, unit: "USD" }] },
          markscheme: { principles: [{ kind: "principle", name: "Retraining cost", statement: "Workers × cost." }], steps: [
            { reasoning: "50 × $200 = $10 000.", marks: 1, markCode: "M" },
            { reasoning: "Answer = $10 000.", marks: 1, markCode: "A" },
          ], finalAnswer: "$10 000" },
        },
        {
          id: "olict-u6-db-q7", difficulty: "foundation", totalMarks: 1,
          stem: "RSI stands for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Repetitive strain injury" },
            { id: "b", text: "Random signal interference" },
            { id: "c", text: "Remote system interface" },
            { id: "d", text: "Rapid storage insert" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "RSI", statement: "Strain injury." }], steps: [{ reasoning: "RSI = repetitive strain injury.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Repetitive strain injury" },
        },
        {
          id: "olict-u6-db-q8", difficulty: "foundation", totalMarks: 1,
          stem: "Which health problem can result from poor computer setup?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Faster typing" },
            { id: "b", text: "Improved eyesight" },
            { id: "c", text: "Back, neck and eye strain" },
            { id: "d", text: "Better posture" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Health drawbacks", statement: "Strain and posture." }], steps: [{ reasoning: "Poor setup causes strain.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Back, neck and eye strain" },
        },
        {
          id: "olict-u6-db-q9", difficulty: "core", totalMarks: 2,
          stem: "A student spends 8 hours a day on screens; doctors recommend a maximum of 2 hours. By how many hours does the student exceed the recommendation?",
          response: { type: "numeric", parts: [{ label: "hours", answer: 6, unit: "hours" }] },
          markscheme: { principles: [{ kind: "principle", name: "Screen time", statement: "Actual − limit." }], steps: [
            { reasoning: "8 − 2 = 6 hours.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 6 hours.", marks: 1, markCode: "A" },
          ], finalAnswer: "6 hours" },
        },
        {
          id: "olict-u6-db-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how the digital divide can affect a student's education.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Digital divide", statement: "Access gap in education." }], steps: [
            { reasoning: "Students without internet/devices cannot access online resources.", marks: 1, markCode: "M" },
            { reasoning: "They miss e-learning and digital assignments.", marks: 1, markCode: "M" },
            { reasoning: "This widens the achievement gap between students.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Students without ICT access miss online learning, widening inequality in education." },
        },
        {
          id: "olict-u6-db-q11", difficulty: "core", totalMarks: 1,
          stem: "Dependence on ICT is risky because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "It needs no maintenance" },
            { id: "b", text: "Computers never break" },
            { id: "c", text: "It saves money always" },
            { id: "d", text: "Systems fail or crash and work stops" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Dependence", statement: "Fails when systems fail." }], steps: [{ reasoning: "Over-reliance fails on outages.", marks: 1, markCode: "B" }], finalAnswer: "**(d)** Systems fail and work stops" },
        },
        {
          id: "olict-u6-db-q12", difficulty: "core", totalMarks: 2,
          stem: "In a town of 1000 people, 250 have no internet access. What percentage lack access?",
          response: { type: "numeric", parts: [{ label: "percent", answer: 25, unit: "%" }] },
          markscheme: { principles: [{ kind: "principle", name: "Access gap", statement: "Without / total × 100." }], steps: [
            { reasoning: "250 / 1000 × 100 = 25%.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 25%.", marks: 1, markCode: "A" },
          ], finalAnswer: "25%" },
        },
        {
          id: "olict-u6-db-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Discuss two social drawbacks of excessive screen time.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Screen time", statement: "Social skills + isolation." }], steps: [
            { reasoning: "Reduced face-to-face social skills and communication.", marks: 1, markCode: "M" },
            { reasoning: "Social isolation from spending hours online.", marks: 1, markCode: "M" },
            { reasoning: "Screen addiction can affect mental wellbeing.", marks: 1, markCode: "M" },
            { reasoning: "Two drawbacks discussed.", marks: 1, markCode: "A" },
          ], finalAnswer: "Weaker social skills and isolation/mental health effects." },
        },
        {
          id: "olict-u6-db-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Misinformation spreads quickly online because…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Websites cannot share content" },
            { id: "b", text: "The internet is slow" },
            { id: "c", text: "False information is shared without verification" },
            { id: "d", text: "All online information is checked" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Misinformation", statement: "Unverified sharing." }], steps: [{ reasoning: "Unverified content spreads fast.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Shared without verification" },
        },
        {
          id: "olict-u6-db-q15", difficulty: "core", totalMarks: 2,
          stem: "A company has 60 employees; automation makes 15 redundant. What percentage of staff is affected?",
          response: { type: "numeric", parts: [{ label: "percent", answer: 25, unit: "%" }] },
          markscheme: { principles: [{ kind: "principle", name: "Redundancy rate", statement: "Affected / total × 100." }], steps: [
            { reasoning: "15 / 60 × 100 = 25%.", marks: 1, markCode: "M" },
            { reasoning: "Answer = 25%.", marks: 1, markCode: "A" },
          ], finalAnswer: "25%" },
        },
        {
          id: "olict-u6-db-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Suggest two ways an organisation can reduce the negative effects of automation on its workers.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Mitigating job loss", statement: "Training + planning." }], steps: [
            { reasoning: "Provide retraining for new technology-based roles.", marks: 1, markCode: "M" },
            { reasoning: "Plan ahead and redeploy workers to other tasks.", marks: 1, markCode: "M" },
            { reasoning: "Offer redundancy packages or early notice.", marks: 1, markCode: "M" },
            { reasoning: "Two valid mitigation strategies.", marks: 1, markCode: "A" },
          ], finalAnswer: "Retrain staff for new roles and plan redeployment/notice." },
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
