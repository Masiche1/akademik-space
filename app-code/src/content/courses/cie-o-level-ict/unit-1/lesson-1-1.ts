import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "olict-u1-lesson-1-1",
  code: "1-1",
  title: "What is ICT?",
  goal: "I CAN define ICT and describe the components of an ICT system.",
  standards: ["7014 1.1"],
  vocabulary: [
    { term: "ICT", definition: "Information and Communication Technology — hardware, software and systems for handling information." },
    { term: "ICT system", definition: "Hardware, software, data, people and procedures working together." },
    { term: "Hardware", definition: "Physical parts of a computer system." },
    { term: "Software", definition: "Programs and data that run on hardware." },
    { term: "Data", definition: "Raw facts and figures entered into or produced by a system." },
    { term: "Procedure", definition: "Set of instructions describing how a task is done." },
  ],
  concepts: [
    {
      id: "olict-u1-whatict",
      title: "ICT systems and their components",
      skill: "Define ICT and identify the five components of an ICT system.",
      lesson: {
        sections: [
          { heading: "What ICT means", body: "ICT = Information and Communication Technology. It covers computers plus all the technology used to create, store, exchange and use information — from mobile phones to satellite systems." },
          { heading: "Five components", body: "An ICT system has five parts working together:\n- **Hardware**: physical devices (computer, phone, printer).\n- **Software**: programs that process data.\n- **Data**: the raw facts being handled.\n- **People**: users who input, process and use the output.\n- **Procedures**: instructions for how tasks are carried out." },
          { heading: "Example", body: "A school attendance system: hardware = server + tablets; software = attendance program; data = student names/attendance; people = teachers/admin staff; procedures = how registers are taken and reports run." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Identify the components in an online banking system.",
          solution: "Hardware: servers, customers' phones. Software: banking app/website. Data: account balances, transactions. People: customers, bank staff. Procedures: login steps, transfer rules.",
        },
      },
      questions: [
        {
          id: "olict-u1-ic-q1", difficulty: "foundation", totalMarks: 1,
          stem: "ICT stands for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Information and Communication Technology" }, { id: "b", text: "International Computer Trade" }, { id: "c", text: "Input and Control Technology" }, { id: "d", text: "Integrated Circuit Technology" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "ICT", statement: "Information and Communication Technology." }], steps: [{ reasoning: "Correct expansion.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Information and Communication Technology" },
        },
        {
          id: "olict-u1-ic-q2", difficulty: "core", totalMarks: 2,
          stem: "Name the five components of an ICT system.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "ICT components", statement: "Hardware, software, data, people, procedures." }], steps: [
            { reasoning: "Hardware, software, data named.", marks: 1, markCode: "M" },
            { reasoning: "People and procedures named.", marks: 1, markCode: "A" },
          ], finalAnswer: "Hardware, software, data, people, procedures." },
        },
        {
          id: "olict-u1-ic-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain the difference between hardware and software, giving one example of each.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Hardware vs software", statement: "Physical vs programs." }], steps: [
            { reasoning: "Hardware is physical.", marks: 1, markCode: "M" },
            { reasoning: "Software is programs/data.", marks: 1, markCode: "M" },
            { reasoning: "Example of each.", marks: 1, markCode: "M" },
            { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
          ], finalAnswer: "Hardware = physical parts (e.g. keyboard); software = programs (e.g. word processor)." },
        },
        {
          id: "olict-u1-ic-q4", difficulty: "challenge", totalMarks: 9,
          stem: "ICT systems review.",
          parts: [
            { label: "a", prompt: "Define ICT.", marks: 2 },
            { label: "b", prompt: "List the five components of an ICT system.", marks: 5 },
            { label: "c", prompt: "Give one example of 'data' in a school system.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "ICT system", statement: "Five interacting components." },
          ], steps: [
            { part: "a", reasoning: "Technology for handling information.", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Correct definition.", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Hardware.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Software.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Data.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "People.", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Procedures.", marks: 1, markCode: "A" },
            { part: "c", reasoning: "e.g. student names/attendance records.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Valid example.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) info+comm tech (b) hardware/software/data/people/procedures (c) student records" },
        },
      ],
    },
  ],
  notes: [
    { id: "olict-u1-1-1-notes", title: "What is ICT — notes", summary: "ICT definition and the five system components.",
      sections: [
        { heading: "ICT", body: "Technology for creating, storing, exchanging and using information." },
        { heading: "Components", body: "Hardware + software + data + people + procedures = complete ICT system." },
      ] },
  ],
};
