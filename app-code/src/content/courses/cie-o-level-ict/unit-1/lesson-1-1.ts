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
            { id: "a", text: "International Computer Trade" },
            { id: "b", text: "Information and Communication Technology" },
            { id: "c", text: "Integrated Circuit Technology" },
            { id: "d", text: "Input and Control Technology" },
          ], correctChoiceId: "b" },
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
        {
          id: "olict-u1-ic-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which of these is NOT one of the five components of an ICT system?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Procedures" },
            { id: "b", text: "Data" },
            { id: "c", text: "Electricity supply" },
            { id: "d", text: "Hardware" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "ICT components", statement: "Hardware, software, data, people, procedures." }], steps: [{ reasoning: "Electricity is not one of the five components.", marks: 1, markCode: "B" }], finalAnswer: "**(c)** Electricity supply" },
        },
        {
          id: "olict-u1-ic-q6", difficulty: "core", totalMarks: 1,
          stem: "In a school attendance system, student names and attendance records are examples of…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Procedures" },
            { id: "b", text: "Software" },
            { id: "c", text: "Data" },
            { id: "d", text: "Hardware" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Data", statement: "Raw facts handled by the system." }], steps: [{ reasoning: "Names/records are raw facts = data.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Data" },
        },
        {
          id: "olict-u1-ic-q7", difficulty: "core", totalMarks: 2,
          stem: "Give one example of a 'procedure' in an ICT system.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Procedure", statement: "Instructions for carrying out a task." }], steps: [
            { reasoning: "e.g. login steps for online banking.", marks: 1, markCode: "M" },
            { reasoning: "Valid procedure example.", marks: 1, markCode: "A" },
          ], finalAnswer: "e.g. the steps for taking a register or processing a bank transfer." },
        },
        {
          id: "olict-u1-ic-q8", difficulty: "foundation", totalMarks: 2,
          stem: "Name two examples of hardware in a computer system.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Hardware", statement: "Physical parts." }], steps: [
            { reasoning: "e.g. keyboard.", marks: 1, markCode: "M" },
            { reasoning: "e.g. monitor/CPU.", marks: 1, markCode: "A" },
          ], finalAnswer: "e.g. keyboard, monitor, CPU, printer." },
        },
        {
          id: "olict-u1-ic-q9", difficulty: "foundation", totalMarks: 1,
          stem: "Software is best described as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Raw facts and figures" },
            { id: "b", text: "Physical parts of a computer" },
            { id: "c", text: "Connecting cables" },
            { id: "d", text: "Programs that run on hardware" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Software", statement: "Programs and data." }], steps: [{ reasoning: "Software = programs.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Programs that run on hardware" },
        },
        {
          id: "olict-u1-ic-q10", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why 'people' are considered a component of an ICT system.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "People component", statement: "Users operate the system." }], steps: [
            { reasoning: "People input data into the system.", marks: 1, markCode: "M" },
            { reasoning: "People process and interpret output.", marks: 1, markCode: "M" },
            { reasoning: "Without users the system cannot function.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "People operate the system — entering data, using output and making decisions — so they are essential." },
        },
        {
          id: "olict-u1-ic-q11", difficulty: "core", totalMarks: 1,
          stem: "Which of these is an example of an ICT system?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A paper notebook" },
            { id: "b", text: "A light bulb" },
            { id: "c", text: "A bicycle" },
            { id: "d", text: "An online banking system" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "ICT system", statement: "Integrated components working together." }], steps: [{ reasoning: "Only online banking combines all components.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Online banking system" },
        },
        {
          id: "olict-u1-ic-q12", difficulty: "core", totalMarks: 2,
          stem: "What is 'data' in an ICT system? Give one example.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Data", statement: "Raw facts and figures." }], steps: [
            { reasoning: "Raw facts entered or produced.", marks: 1, markCode: "M" },
            { reasoning: "e.g. student names, sales figures.", marks: 1, markCode: "A" },
          ], finalAnswer: "Raw facts and figures, e.g. student names or sales figures." },
        },
        {
          id: "olict-u1-ic-q13", difficulty: "core", totalMarks: 1,
          stem: "A word-processing program belongs to which component of an ICT system?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Data" },
            { id: "b", text: "People" },
            { id: "c", text: "Software" },
            { id: "d", text: "Hardware" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Software", statement: "Programs." }], steps: [{ reasoning: "A program is software.", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Software" },
        },
        {
          id: "olict-u1-ic-q14", difficulty: "challenge", totalMarks: 4,
          stem: "Describe the five components of an ICT system using a library system as your example.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "ICT system", statement: "Five components." }], steps: [
            { reasoning: "Hardware: library computers/servers.", marks: 1, markCode: "M" },
            { reasoning: "Software: catalogue program.", marks: 1, markCode: "M" },
            { reasoning: "Data: book records/member details.", marks: 1, markCode: "M" },
            { reasoning: "People + procedures identified.", marks: 1, markCode: "A" },
          ], finalAnswer: "Hardware = library PCs; software = catalogue system; data = book/member records; people = librarians/members; procedures = borrowing rules." },
        },
        {
          id: "olict-u1-ic-q15", difficulty: "challenge", totalMarks: 9,
          stem: "ICT systems extended review.",
          parts: [
            { label: "a", prompt: "Define ICT.", marks: 2 },
            { label: "b", prompt: "List the five components of an ICT system.", marks: 5 },
            { label: "c", prompt: "For an online shop, identify the software and the data.", marks: 2 },
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
            { part: "c", reasoning: "Software: shop website/app.", marks: 1, markCode: "M" },
            { part: "c", reasoning: "Data: orders, prices, stock.", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) info+comm tech (b) hardware/software/data/people/procedures (c) website=software, orders=data" },
        },
        {
          id: "olict-u1-ic-q16", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how the five components of an ICT system work together.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "System integration", statement: "Components interact." }], steps: [
            { reasoning: "Hardware runs the software.", marks: 1, markCode: "M" },
            { reasoning: "People input and use data via procedures.", marks: 1, markCode: "M" },
            { reasoning: "Data flows through all components.", marks: 1, markCode: "M" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "A" },
          ], finalAnswer: "Hardware runs software; people follow procedures to input/process data — all five work together." },
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
