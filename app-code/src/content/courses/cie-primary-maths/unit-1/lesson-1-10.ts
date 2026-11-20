import type { Lesson } from "../../../types.ts";

export const lesson110: Lesson = {
  id: "cipm-u1-lesson-1-10",
  code: "1-10",
  title: "Stage 2 — Multiplication, Division and Simple Fractions",
  goal: "I CAN multiply, divide and recognise simple fractions.",
  standards: ["Cambridge Primary Mathematics 0096 Stage 2: multiplication, division and fractions",
  "Cambridge Primary Mathematics 0096 framework substrands: 2Ni, 2Nf"],
  stage: 2,
  vocabulary: [
    { term: "Multiply", definition: "Fast way of adding equal groups." },
    { term: "Divide", definition: "Share into equal groups or find how many groups." },
    { term: "Array", definition: "Objects arranged in rows and columns." },
    { term: "Half", definition: "One of two equal parts of a whole." },
    { term: "Quarter", definition: "One of four equal parts of a whole." },
  ],
  concepts: [
    {
      id: "cipm-u1-s10-mult-div-frac",
      title: "Multiplication, division and fraction names",
      skill: "Use × and ÷ facts, arrays and name halves/quarters at Stage 2 level.",
      lesson: {
        sections: [
          {
            heading: "Multiplication and division",
            body: "Multiplication adds equal groups quickly — 4 bags of 5 apples = 4 × 5 = 20. Division shares equally or groups: 20 ÷ 5 = 4 groups of 5. Multiplication and division are opposites — 5 × 4 = 20 so 20 ÷ 5 = 4. Arrays (rows × columns) show this clearly.",
          },
          {
            heading: "Simple fractions",
            body: "A fraction names equal parts of a whole. Half = 1 of 2 equal parts; quarter = 1 of 4. Cut a pizza into 2 equal slices — each is a half; into 4 — each is a quarter. The bottom number tells how many equal parts; the top tells how many you have.",
          },
        ],
        keyFormulas: [
          { name: "Multiplication", statement: "equal groups: 4 × 5 = 20" },
          { name: "Division", statement: "share/group: 20 ÷ 5 = 4" },
          { name: "Fractions", statement: "half = 1/2; quarter = 1/4" },
        ],
        workedExample: {
          problem: "Share 12 biscuits equally between 3 children. How many each?",
          solution: "12 ÷ 3 = 4 biscuits each.",
        },
      },
      questions: [
        {
          id: "cipm-u1-mf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 6 × 4?",
          response: { type: "mcq", choices: [
            { id: "a", text: "10" }, { id: "b", text: "24" }, { id: "c", text: "64" }, { id: "d", text: "18" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Multiplication", statement: "Equal groups added." }],
            steps: [{ reasoning: "6 × 4 = 24.", marks: 1, markCode: "A" }],
            finalAnswer: "24",
          },
        },
        {
          id: "cipm-u1-mf-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 15 ÷ 3?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Division", statement: "Share into equal groups." }],
            steps: [
              { reasoning: "15 ÷ 3 = 5 (since 3 × 5 = 15).", marks: 1, markCode: "M" },
              { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5",
          },
        },
        {
          id: "cipm-u1-mf-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A pizza is cut into 4 equal slices. You eat 1 slice. What fraction did you eat?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fraction", statement: "Parts of a whole; bottom = total parts." }],
            steps: [
              { reasoning: "4 equal parts total.", marks: 1, markCode: "M" },
              { reasoning: "1 part eaten = one quarter.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 1/4 (one quarter).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1/4",
          },
        },
        {
          id: "cipm-u1-mf-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "A class has 24 children. They sit in rows of 6. (a) How many rows? (b) If 5 children leave, how many children remain and how many full rows of 6 can they make? Show all working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Division in context", statement: "24 ÷ 6 for rows; 24−5 then ÷ 6." }],
            steps: [
              { reasoning: "(a) Rows = 24 ÷ 6.", marks: 1, markCode: "M" },
              { reasoning: "24 ÷ 6 = 4 rows.", marks: 1, markCode: "M" },
              { reasoning: "(b) Children left = 24 − 5 = 19.", marks: 1, markCode: "M" },
              { reasoning: "Full rows of 6 from 19.", marks: 1, markCode: "M" },
              { reasoning: "19 ÷ 6 = 3 remainder 1.", marks: 1, markCode: "M" },
              { reasoning: "3 full rows with 1 child left over.", marks: 1, markCode: "M" },
              { reasoning: "Check: 3 × 6 = 18, +1 = 19. ✓", marks: 1, markCode: "M" },
              { reasoning: "Answers: 4 rows; 19 children, 3 full rows.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4 rows; (b) 19 children, 3 full rows (1 left over)",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipm-u1-mf-notes",
      title: "Multiplication, division, fractions — notes",
      summary: "× = equal groups; ÷ = share; half=1/2, quarter=1/4.",
      sections: [
        { heading: "Operations", body: "Multiplication and division are inverses — use one to check the other." },
        { heading: "Fractions", body: "Bottom number = total equal parts; top = parts you have." },
      ],
    },
  ],
};
