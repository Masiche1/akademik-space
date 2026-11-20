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
            { id: "a", text: "Makes decisions alone with little input" }, { id: "b", text: "Consults everyone" }, { id: "c", text: "Gives complete freedom" }, { id: "d", text: "Avoids decisions" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "Planning, organising, leading, controlling" }, { id: "b", text: "Hiring, firing, paying, training" }, { id: "c", text: "Selling, buying, storing, shipping" }, { id: "d", text: "Design, production, marketing, finance" },
          ], correctChoiceId: "a" },
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
