import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "olbus-u4-lesson-4-1",
  code: "4-1",
  title: "Motivation",
  goal: "I CAN explain motivation theories and apply them to workplace situations.",
  standards: ["7100 4.1"],
  vocabulary: [
    { term: "Motivation", definition: "The drive to achieve goals and perform well." },
    { term: "Intrinsic motivation", definition: "Motivation from internal satisfaction." },
    { term: "Extrinsic motivation", definition: "Motivation from external rewards." },
    { term: "Maslow's hierarchy", definition: "Theory that people satisfy needs in order of priority." },
    { term: "Herzberg's theory", definition: "Hygiene factors prevent dissatisfaction; motivators create satisfaction." },
    { term: "Financial rewards", definition: "Pay, bonuses, benefits used to motivate." },
  ],
  concepts: [
    {
      id: "olbus-u4-motivation",
      title: "Motivation theories",
      skill: "Explain Maslow and Herzberg theories and their application.",
      lesson: {
        sections: [
          { heading: "Maslow's hierarchy", body: "People satisfy needs in order: physiological → safety → social → esteem → self-actualisation. Lower needs must be met before higher ones motivate." },
          { heading: "Herzberg's theory", body: "Two factors: **hygiene factors** (pay, conditions, job security) prevent dissatisfaction but don't motivate; **motivators** (achievement, recognition, responsibility, growth) create satisfaction and motivation." },
          { heading: "Application", body: "Managers use financial rewards (extrinsic) and job design, recognition, autonomy (intrinsic) to motivate employees." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "An employee has good pay but feels unfulfilled. Which Herzberg factor is missing?",
          solution: "A motivator — e.g. lack of recognition, responsibility or growth opportunities.",
        },
      },
      questions: [
        {
          id: "olbus-u4-mo-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Maslow's hierarchy orders needs from…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Basic to advanced" }, { id: "b", text: "Advanced to basic" }, { id: "c", text: "Random order" }, { id: "d", text: "Financial to social" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Maslow", statement: "Basic→advanced." }], steps: [{ reasoning: "Physiological first.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-mo-q2", difficulty: "core", totalMarks: 2,
          stem: "Distinguish hygiene factors from motivators (Herzberg).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Herzberg", statement: "Two factor types." }], steps: [
            { reasoning: "Hygiene prevent dissatisfaction; motivators create satisfaction.", marks: 1, markCode: "AO1" },
            { reasoning: "Correct distinction.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Hygiene = prevent dissatisfaction; motivators = create satisfaction." },
        },
        {
          id: "olbus-u4-mo-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a manager might apply Maslow's theory to motivate staff.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Maslow application", statement: "Need-based motivation." }], steps: [
            { reasoning: "Meet basic needs first (pay, security).", marks: 1, markCode: "AO2" },
            { reasoning: "Then address social, esteem, self-actualisation needs.", marks: 1, markCode: "AO2" },
            { reasoning: "E.g. team building, recognition, training.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Satisfy lower needs first, then build belonging, esteem and growth." },
        },
        {
          id: "olbus-u4-mo-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Motivation review.",
          parts: [
            { label: "a", prompt: "Define motivation.", marks: 1 },
            { label: "b", prompt: "Name Maslow's five needs in order.", marks: 2 },
            { label: "c", prompt: "Hygiene vs motivators?", marks: 2 },
            { label: "d", prompt: "Two financial motivators?", marks: 1 },
            { label: "e", prompt: "Two non-financial motivators?", marks: 1 },
            { label: "f", prompt: "Which theory would explain why a raise doesn't motivate an unhappy employee?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Motivation", statement: "Theories and application." },
          ], steps: [
            { part: "a", reasoning: "Drive to perform well.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Physiological, safety, social, esteem, self-actualisation.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct order.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Hygiene prevent dissatisfaction; motivators create satisfaction.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Correct distinction.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Pay, bonuses, benefits.", marks: 1, markCode: "AO1" },
            { part: "e", reasoning: "Recognition, responsibility, growth, autonomy.", marks: 1, markCode: "AO1" },
            { part: "f", reasoning: "Herzberg — pay is hygiene, not motivator.", marks: 1, markCode: "AO2" },
            { part: "f", reasoning: "Clear link.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) 5 needs (c) hygiene/motivators (d) pay/bonus (e) recognition/growth (f) Herzberg" },
        },
      ],
    },
    {
      id: "olbus-u4-rewards",
      title: "Financial and Non-Financial Rewards",
      skill: "Compare financial and non-financial methods of motivation.",
      lesson: {
        sections: [
          { heading: "Financial rewards", body: "Salary, wages, bonuses, commission, profit sharing, pension, health benefits. Directly linked to performance in some schemes." },
          { heading: "Non-financial rewards", body: "Job security, recognition, promotion, training, flexible hours, better working conditions, autonomy. Often more sustainable motivators." },
          { heading: "Choosing", body: "Best results often combine both — financial rewards attract and retain; non-financial rewards motivate and satisfy." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "A company offers flexible working hours and training opportunities. Which reward type?",
          solution: "Non-financial rewards — they motivate through job satisfaction rather than money.",
        },
      },
      questions: [
        {
          id: "olbus-u4-rw-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Non-financial rewards include…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Recognition and flexible hours" }, { id: "b", text: "Salary and bonuses" }, { id: "c", text: "Commission" }, { id: "d", text: "Pension" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Non-financial rewards", statement: "Non-monetary." }], steps: [{ reasoning: "Recognition/flexibility/training.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u4-rw-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two financial rewards.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "definition", name: "Financial rewards", statement: "Monetary." }], steps: [
            { reasoning: "Salary, bonuses, commission, profit sharing, pension — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: salary, bonuses, commission, profit sharing, pension." },
        },
        {
          id: "olbus-u4-rw-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why non-financial rewards can be more effective than financial ones.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Non-financial rewards", statement: "Sustainable motivation." }], steps: [
            { reasoning: "Address higher-level needs (esteem, growth).", marks: 1, markCode: "AO2" },
            { reasoning: "Create lasting satisfaction, not just short-term boost.", marks: 1, markCode: "AO2" },
            { reasoning: "Lower cost to business.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "They satisfy deeper needs and create lasting motivation at lower cost." },
        },
        {
          id: "olbus-u4-rw-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Rewards review.",
          parts: [
            { label: "a", prompt: "Name two financial rewards.", marks: 2 },
            { label: "b", prompt: "Name two non-financial rewards.", marks: 2 },
            { label: "c", prompt: "When is financial reward most effective?", marks: 2 },
            { label: "d", prompt: "When is non-financial most effective?", marks: 2 },
            { label: "e", prompt: "Ideal approach?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Rewards", statement: "Types and application." },
          ], steps: [
            { part: "a", reasoning: "Two financial rewards.", marks: 1, markCode: "AO1" },
            { part: "a", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "b", reasoning: "Two non-financial rewards.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Correct list.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Performance-linked pay for sales/production roles.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Clear context.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Knowledge workers valuing autonomy/growth.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear context.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Combine both.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "(a) 2 financial (b) 2 non-financial (c) performance roles (d) knowledge work (e) combine" },
        },
      ],
    },
  ],
  notes: [
    { id: "olbus-u4-4-1-notes", title: "Motivation — notes", summary: "Maslow, Herzberg and reward systems.",
      sections: [
        { heading: "Theories", body: "Maslow: needs hierarchy. Herzberg: hygiene prevents dissatisfaction, motivators create satisfaction." },
        { heading: "Rewards", body: "Financial (pay, bonuses) + non-financial (recognition, flexibility, growth) — combine for best results." },
      ] },
  ],
};
