import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "olbus-u4-lesson-4-2",
  code: "4-2",
  title: "Leadership and Management",
  goal: "I CAN distinguish between leadership and management and describe leadership styles.",
  standards: ["7100 4.2"],
  vocabulary: [
    { term: "Leadership", definition: "Influencing and guiding people towards a goal." },
    { term: "Management", definition: "Planning, organising, leading and controlling resources." },
    { term: "Autocratic leader", definition: "Leader who makes decisions alone with little input." },
    { term: "Democratic leader", definition: "Leader who involves others in decisions." },
    { term: "Laissez-faire leader", definition: "Leader who gives team members freedom to decide." },
    { term: "Delegation", definition: "Assigning responsibility and authority to subordinates." },
  ],
  concepts: [
    {
      id: "olbus-u4-leadership",
      title: "Leadership styles",
      skill: "Compare autocratic, democratic and laissez-faire leadership.",
      lesson: {
        sections: [
          { heading: "Autocratic", body: "Leader decides alone, gives orders, expects obedience. Fast decisions but can demotivate skilled staff. Suitable for crises or unskilled tasks." },
          { heading: "Democratic", body: "Leader consults team before deciding. Higher morale and better decisions but slower. Suitable for skilled, motivated teams." },
          { heading: "Laissez-faire", body: "Leader gives freedom, minimal direction. Works with highly experienced, self-motivated teams; risks lack of direction." },
          { heading: "Situational", body: "Effective leaders adapt style to the situation — crisis may need autocratic; creative work needs democratic or laissez-faire." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A software team of experienced developers needs to innovate. Which style fits?",
          solution: "Democratic or laissez-faire — skilled teams benefit from input and freedom.",
        },
      },
      questions: [
        {
          id: "olbus-u4-ld-q1", difficulty: "foundation", totalMarks: 1,
          stem: "An autocratic leader…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Consults everyone" },
            { id: "b", text: "Avoids decisions" },
            { id: "c", text: "Makes decisions alone with little input" },
            { id: "d", text: "Gives complete freedom" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Autocratic", statement: "Decides alone." }], steps: [{ reasoning: "Top-down decisions.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-ld-q2", difficulty: "core", totalMarks: 2,
          stem: "Name three leadership styles.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Leadership styles", statement: "Three types." }], steps: [
            { reasoning: "Autocratic, democratic, laissez-faire.", marks: 1, markCode: "AO1" },
            { reasoning: "All three.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Autocratic, democratic, laissez-faire." },
        },
        {
          id: "olbus-u4-ld-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain when autocratic leadership might be appropriate.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Autocratic", statement: "Appropriate contexts." }], steps: [
            { reasoning: "Crisis situations needing quick decisions.", marks: 1, markCode: "AO2" },
            { reasoning: "Unskilled tasks requiring close supervision.", marks: 1, markCode: "AO2" },
            { reasoning: "Time-critical situations.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Crises, unskilled tasks, time pressure — situations needing fast decisive action." },
        },
        {
          id: "olbus-u4-ld-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Leadership review.",
          parts: [
            { label: "a", prompt: "Define leadership.", marks: 1 },
            { label: "b", prompt: "Name three styles.", marks: 2 },
            { label: "c", prompt: "Advantage and disadvantage of democratic?", marks: 2 },
            { label: "d", prompt: "When is laissez-faire appropriate?", marks: 2 },
            { label: "e", prompt: "Why should leaders adapt their style?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Leadership", statement: "Styles and application." },
          ], steps: [
            { part: "a", reasoning: "Influencing people towards goals.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Three styles.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Adv: morale/better decisions. Disadv: slower.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Both stated.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Experienced, self-motivated teams.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear context.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Different situations need different approaches.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) 3 styles (c) adv/disadv (d) skilled teams (e) situational" },
        },
        {
          id: "olbus-u4-ld-q5", difficulty: "foundation", totalMarks: 1,
          stem: "A democratic leader…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Avoids responsibility" },
            { id: "b", text: "Decides alone" },
            { id: "c", text: "Consults the team before making decisions" },
            { id: "d", text: "Gives complete freedom" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Democratic", statement: "Consults team." }], steps: [{ reasoning: "Democratic = consults before deciding.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-ld-q6", difficulty: "core", totalMarks: 1,
          stem: "Laissez-faire leadership is most appropriate for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Crisis situations" },
            { id: "b", text: "Tight deadlines with novices" },
            { id: "c", text: "Untrained staff" },
            { id: "d", text: "Experienced, self-motivated teams" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Laissez-faire", statement: "Skilled teams." }], steps: [{ reasoning: "Laissez-faire suits experienced, self-motivated teams.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-ld-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Autocratic leadership is most suitable when…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Staff are highly skilled" },
            { id: "b", text: "Quick decisions are needed in a crisis" },
            { id: "c", text: "Creativity is the priority" },
            { id: "d", text: "Team morale is the priority" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Autocratic", statement: "Crisis use." }], steps: [{ reasoning: "Autocratic suits crises needing fast decisions.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-ld-q8", difficulty: "core", totalMarks: 2,
          stem: "A leader delegates 3 tasks to each of 4 team members. How many tasks are delegated in total?",
          response: { type: "numeric", parts: [{ label: "a", answer: 12, unit: "tasks" }] },
          markscheme: { principles: [{ kind: "principle", name: "Delegation", statement: "Tasks × members." }], steps: [
            { part: "a", reasoning: "3 × 4 = 12.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "12 tasks delegated.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 12 tasks" },
        },
        {
          id: "olbus-u4-ld-q9", difficulty: "challenge", totalMarks: 3,
          stem: "A team of 6 members is assigned tasks requiring 4, 6, 5, 7, 3 and 5 hours respectively. (a) What is the total workload? (b) What is the average workload per member?",
          response: { type: "numeric", parts: [
            { label: "a", answer: 30, unit: "hours" },
            { label: "b", answer: 5, unit: "hours" },
          ] },
          markscheme: { principles: [{ kind: "principle", name: "Workload", statement: "Sum and average." }], steps: [
            { part: "a", reasoning: "4 + 6 + 5 + 7 + 3 + 5 = 30.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "30 ÷ 6 = 5.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Average = 5 hours.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 30 hours; **(b)** 5 hours" },
        },
        {
          id: "olbus-u4-ld-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain one advantage of democratic leadership.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Democratic", statement: "Advantages." }], steps: [
            { reasoning: "Involving staff improves morale and motivation.", marks: 1, markCode: "AO2" },
            { reasoning: "Team input can lead to better decisions.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Higher morale and better-informed decisions." },
        },
        {
          id: "olbus-u4-ld-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why situational leadership is considered an effective approach.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Situational leadership", statement: "Adaptability." }], steps: [
            { reasoning: "Different situations require different leadership styles.", marks: 1, markCode: "AO2" },
            { reasoning: "A crisis may need autocratic speed.", marks: 1, markCode: "AO2" },
            { reasoning: "Creative work benefits from democratic input.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Adapting style to the situation and team produces better outcomes." },
        },
        {
          id: "olbus-u4-ld-q12", difficulty: "challenge", totalMarks: 1,
          stem: "A leader who gives staff freedom to organise their own work with minimal direction is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Laissez-faire" },
            { id: "b", text: "Bureaucratic" },
            { id: "c", text: "Autocratic" },
            { id: "d", text: "Democratic" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Laissez-faire", statement: "Hands-off." }], steps: [{ reasoning: "Minimal direction + freedom = laissez-faire.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Laissez-faire" },
        },
        {
          id: "olbus-u4-ld-q13", difficulty: "core", totalMarks: 2,
          stem: "A manager oversees a span of control of 8 staff members. If 3 more staff are hired under the same manager, what is the new span of control?",
          response: { type: "numeric", parts: [{ label: "a", answer: 11, unit: "staff" }] },
          markscheme: { principles: [{ kind: "principle", name: "Span of control", statement: "Number of subordinates." }], steps: [
            { part: "a", reasoning: "8 + 3 = 11.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "New span = 11 staff.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 11 staff" },
        },
        {
          id: "olbus-u4-ld-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Which leadership style risks a lack of direction when staff are inexperienced?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Transformational" },
            { id: "b", text: "Autocratic" },
            { id: "c", text: "Democratic" },
            { id: "d", text: "Laissez-faire" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Laissez-faire", statement: "Risk of drift." }], steps: [{ reasoning: "Hands-off style fails with inexperienced staff.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Laissez-faire" },
        },
        {
          id: "olbus-u4-ld-q15", difficulty: "core", totalMarks: 2,
          stem: "A democratic decision takes 3 meetings of 45 minutes each, while an autocratic decision takes a single 20-minute meeting. How many minutes are saved by deciding autocratically?",
          response: { type: "numeric", parts: [{ label: "a", answer: 115, unit: "minutes" }] },
          markscheme: { principles: [{ kind: "principle", name: "Time saving", statement: "Democratic - autocratic." }], steps: [
            { part: "a", reasoning: "3 × 45 = 135; 135 - 20 = 115.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "115 minutes saved.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 115 minutes" },
        },
        {
          id: "olbus-u4-ld-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Leadership extended review.",
          parts: [
            { label: "a", prompt: "Define leadership.", marks: 1 },
            { label: "b", prompt: "Name three leadership styles.", marks: 2 },
            { label: "c", prompt: "Give one advantage and one disadvantage of democratic leadership.", marks: 2 },
            { label: "d", prompt: "When is laissez-faire leadership appropriate?", marks: 2 },
            { label: "e", prompt: "Why should leaders adapt their style to the situation?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Leadership", statement: "Styles and application." },
          ], steps: [
            { part: "a", reasoning: "Influencing people towards goals.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Three styles.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Adv: morale/better decisions. Disadv: slower.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Both stated.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Experienced, self-motivated teams.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear context.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Different situations need different approaches.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) 3 styles (c) adv/disadv (d) skilled teams (e) situational" },
        },
      ],
    },
    {
      id: "olbus-u4-management",
      title: "Management Functions",
      skill: "Explain the four functions of management.",
      lesson: {
        sections: [
          { heading: "Four functions", body: "1. **Planning**: setting objectives and deciding how to achieve them.\n2. **Organising**: allocating resources and structuring work.\n3. **Leading**: motivating and directing people.\n4. **Controlling**: monitoring performance and taking corrective action." },
          { heading: "Delegation", body: "Managers delegate tasks to subordinates — assigns responsibility and authority. Frees managers for strategic work but requires trust and monitoring." },
          { heading: "Management vs leadership", body: "Management focuses on systems and processes; leadership focuses on vision and inspiring people. Effective managers are also leaders." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A manager sets targets, allocates staff, motivates the team and reviews results monthly. Which functions?",
          solution: "All four: planning (targets), organising (staff), leading (motivation), controlling (reviews).",
        },
      },
      questions: [
        {
          id: "olbus-u4-mg-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The four functions of management are…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Selling, buying, storing, shipping" },
            { id: "b", text: "Hiring, firing, paying, training" },
            { id: "c", text: "Planning, organising, leading, controlling" },
            { id: "d", text: "Design, production, marketing, finance" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Management functions", statement: "4 functions." }], steps: [{ reasoning: "Correct four.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-mg-q2", difficulty: "core", totalMarks: 2,
          stem: "Define delegation.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Delegation", statement: "Assigning authority." }], steps: [
            { reasoning: "Assigning responsibility and authority to subordinates.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Assigning tasks, responsibility and authority to others." },
        },
        {
          id: "olbus-u4-mg-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between management and leadership.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Management vs leadership", statement: "Systems vs vision." }], steps: [
            { reasoning: "Management = systems, processes, control.", marks: 1, markCode: "AO2" },
            { reasoning: "Leadership = vision, inspiration, direction.", marks: 1, markCode: "AO2" },
            { reasoning: "Both needed for effectiveness.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Management maintains systems; leadership inspires people toward vision." },
        },
        {
          id: "olbus-u4-mg-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Management review.",
          parts: [
            { label: "a", prompt: "Name the four functions.", marks: 2 },
            { label: "b", prompt: "Define delegation.", marks: 1 },
            { label: "c", prompt: "Advantage and disadvantage of delegation?", marks: 2 },
            { label: "d", prompt: "Management vs leadership?", marks: 2 },
            { label: "e", prompt: "Why is controlling important?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Management", statement: "Functions and concepts." },
          ], steps: [
            { part: "a", reasoning: "Planning, organising, leading, controlling.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "All four.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Assigning authority/responsibility.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Adv: frees manager, develops staff. Disadv: loss of control.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Both stated.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Management=systems; leadership=vision/inspiration.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear distinction.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Monitors performance, enables corrective action.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) 4 functions (b) delegation def (c) adv/disadv (d) systems vs vision (e) monitoring" },
        },
        {
          id: "olbus-u4-mg-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Planning as a management function involves…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Setting objectives and deciding how to achieve them" },
            { id: "b", text: "Designing products" },
            { id: "c", text: "Paying wages" },
            { id: "d", text: "Hiring staff only" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Planning", statement: "Objectives + methods." }], steps: [{ reasoning: "Planning = setting objectives and methods.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-mg-q6", difficulty: "core", totalMarks: 1,
          stem: "Controlling as a management function means…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Delegating everything" },
            { id: "b", text: "Avoiding decisions" },
            { id: "c", text: "Increasing costs" },
            { id: "d", text: "Monitoring performance and taking corrective action" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Controlling", statement: "Monitor + correct." }], steps: [{ reasoning: "Controlling = monitor performance and correct.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-mg-q7", difficulty: "foundation", totalMarks: 1,
          stem: "Organising as a management function involves…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Meeting customers" },
            { id: "b", text: "Writing advertisements" },
            { id: "c", text: "Setting salaries only" },
            { id: "d", text: "Allocating resources and structuring work" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Organising", statement: "Resources + structure." }], steps: [{ reasoning: "Organising = allocating resources and structuring work.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-mg-q8", difficulty: "core", totalMarks: 2,
          stem: "A manager delegates tasks to 5 subordinates and each subordinate handles 6 tasks. How many tasks are delegated in total?",
          response: { type: "numeric", parts: [{ label: "a", answer: 30, unit: "tasks" }] },
          markscheme: { principles: [{ kind: "principle", name: "Delegation", statement: "Subordinates × tasks." }], steps: [
            { part: "a", reasoning: "5 × 6 = 30.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "30 tasks.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 30 tasks" },
        },
        {
          id: "olbus-u4-mg-q9", difficulty: "challenge", totalMarks: 3,
          stem: "A department budget of $45,000 is split equally among 3 teams, and each team's budget is then split equally among 3 projects. What is the budget per project?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5000, unit: "$" }] },
          markscheme: { principles: [{ kind: "principle", name: "Budget allocation", statement: "Sequential splitting." }], steps: [
            { part: "a", reasoning: "45000 ÷ 3 = 15000 per team.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "15000 ÷ 3 = 5000 per project.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "$5,000 per project.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** $5,000" },
        },
        {
          id: "olbus-u4-mg-q10", difficulty: "core", totalMarks: 2,
          stem: "Explain one advantage of delegation for a manager.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Delegation", statement: "Advantages." }], steps: [
            { reasoning: "Frees the manager for strategic work.", marks: 1, markCode: "AO2" },
            { reasoning: "Develops subordinates' skills and responsibility.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Frees managers for higher-level work and develops staff." },
        },
        {
          id: "olbus-u4-mg-q11", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why controlling is essential even when tasks are delegated.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Controlling", statement: "Delegation check." }], steps: [
            { reasoning: "Delegation transfers responsibility but not accountability.", marks: 1, markCode: "AO2" },
            { reasoning: "Monitoring ensures delegated work meets standards.", marks: 1, markCode: "AO2" },
            { reasoning: "Enables corrective action when problems arise.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Controlling verifies delegated work and allows correction." },
        },
        {
          id: "olbus-u4-mg-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Which management function ensures work is monitored against set objectives?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Leading" },
            { id: "b", text: "Controlling" },
            { id: "c", text: "Planning" },
            { id: "d", text: "Organising" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Controlling", statement: "Monitor vs objectives." }], steps: [{ reasoning: "Controlling monitors performance against objectives.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Controlling" },
        },
        {
          id: "olbus-u4-mg-q13", difficulty: "core", totalMarks: 2,
          stem: "A team of 12 staff is divided into 3 equal project groups. How many staff are in each group?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4, unit: "staff" }] },
          markscheme: { principles: [{ kind: "principle", name: "Group size", statement: "Total / groups." }], steps: [
            { part: "a", reasoning: "12 ÷ 3 = 4.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "4 staff per group.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 4 staff" },
        },
        {
          id: "olbus-u4-mg-q14", difficulty: "foundation", totalMarks: 1,
          stem: "Delegation assigns to subordinates…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only responsibility, no authority" },
            { id: "b", text: "Both responsibility and authority" },
            { id: "c", text: "Only authority, no responsibility" },
            { id: "d", text: "Nothing — it is a punishment" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Delegation", statement: "Responsibility + authority." }], steps: [{ reasoning: "Delegation transfers both responsibility and authority.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-mg-q15", difficulty: "core", totalMarks: 2,
          stem: "A manager spends 30% of an 8-hour working day on controlling tasks. How many hours per day does the manager spend controlling?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2.4, unit: "hours" }] },
          markscheme: { principles: [{ kind: "principle", name: "Time allocation", statement: "% of day." }], steps: [
            { part: "a", reasoning: "30% × 8 = 2.4.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "2.4 hours.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 2.4 hours" },
        },
        {
          id: "olbus-u4-mg-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Management extended review.",
          parts: [
            { label: "a", prompt: "Name the four functions of management.", marks: 2 },
            { label: "b", prompt: "Define delegation.", marks: 1 },
            { label: "c", prompt: "Give one advantage and one disadvantage of delegation.", marks: 2 },
            { label: "d", prompt: "Distinguish management from leadership.", marks: 2 },
            { label: "e", prompt: "Why is controlling important?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Management", statement: "Functions and concepts." },
          ], steps: [
            { part: "a", reasoning: "Planning, organising, leading, controlling.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "All four.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Assigning authority/responsibility.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Adv: frees manager, develops staff. Disadv: loss of control.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Both stated.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Management=systems; leadership=vision/inspiration.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear distinction.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Monitors performance, enables corrective action.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) 4 functions (b) delegation def (c) adv/disadv (d) systems vs vision (e) monitoring" },
        },
      ],
    },
  ],
  notes: [
    { id: "olbus-u4-4-2-notes", title: "Leadership and management — notes", summary: "Leadership styles and management functions.",
      sections: [
        { heading: "Leadership", body: "Autocratic, democratic, laissez-faire — adapt to situation and team skill." },
        { heading: "Management", body: "Planning, organising, leading, controlling; delegation frees managers but needs monitoring." },
      ] },
  ],
};
