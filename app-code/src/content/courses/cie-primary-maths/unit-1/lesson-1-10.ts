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
            { id: "a", text: "18" },
            { id: "b", text: "64" },
            { id: "c", text: "10" },
            { id: "d", text: "24" },
          ], correctChoiceId: "d" },
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
        {
          id: "cipm-u1-mf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 7 × 3?",
          response: { type: "mcq", choices: [
            { id: "a", text: "18" },
            { id: "b", text: "10" },
            { id: "c", text: "73" },
            { id: "d", text: "21" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Multiplication", statement: "Equal groups added." }],
            steps: [{ reasoning: "7 × 3 = 21.", marks: 1, markCode: "A" }],
            finalAnswer: "21",
          },
        },
        {
          id: "cipm-u1-mf-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 12 ÷ 4?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Division", statement: "Share into equal groups." }],
            steps: [
              { reasoning: "12 ÷ 4 = 3 (since 4 × 3 = 12).", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cipm-u1-mf-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "3 rows of 5 counters make which multiplication?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$3 + 5 = 8$" },
            { id: "b", text: "$3 \\times 3 = 9$" },
            { id: "c", text: "$5 - 3 = 2$" },
            { id: "d", text: "$3 \\times 5 = 15$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Arrays", statement: "Rows × columns = total." }],
            steps: [{ reasoning: "3 rows of 5 is $3 \\times 5 = 15$.", marks: 1, markCode: "A" }],
            finalAnswer: "$3 \\times 5 = 15$",
          },
        },
        {
          id: "cipm-u1-mf-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A ribbon 20 cm long is cut into 4 equal pieces. How long is each piece?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Division", statement: "Share equally." }],
            steps: [
              { reasoning: "Each piece = $20 ÷ 4$.", marks: 1, markCode: "M" },
              { reasoning: "$20 ÷ 4 = 5$ cm each.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5 cm",
          },
        },
        {
          id: "cipm-u1-mf-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which fraction names one half of a whole?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{1}{4}$" },
            { id: "b", text: "$\\frac{3}{4}$" },
            { id: "c", text: "$\\frac{1}{3}$" },
            { id: "d", text: "$\\frac{1}{2}$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fraction", statement: "Half = 1 of 2 equal parts." }],
            steps: [{ reasoning: "One half is written $\\frac{1}{2}$.", marks: 1, markCode: "A" }],
            finalAnswer: "$\\frac{1}{2}$",
          },
        },
        {
          id: "cipm-u1-mf-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 8 × 6?",
          response: { type: "numeric", parts: [{ label: "a", answer: 48 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Multiplication", statement: "Equal groups added." }],
            steps: [
              { reasoning: "8 × 6 = 48 (8 × 5 = 40, plus 8 = 48).", marks: 1, markCode: "M" },
              { reasoning: "Answer: 48.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "48",
          },
        },
        {
          id: "cipm-u1-mf-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "18 sweets are shared equally among 6 children. How many sweets does each child get?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Division", statement: "Share into equal groups." }],
            steps: [
              { reasoning: "Each child gets $18 ÷ 6$.", marks: 1, markCode: "M" },
              { reasoning: "$18 ÷ 6 = 3$ sweets each (since $6 \\times 3 = 18$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 sweets",
          },
        },
        {
          id: "cipm-u1-mf-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A cake is cut into 8 equal slices. Sam eats 3 slices. What fraction of the cake is left?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Fraction", statement: "Parts left over total parts." }],
            steps: [
              { reasoning: "There are 8 equal slices in total.", marks: 1, markCode: "M" },
              { reasoning: "Slices left = $8 - 3 = 5$.", marks: 1, markCode: "M" },
              { reasoning: "Fraction left = $\\frac{5}{8}$ (five eighths).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{5}{8}$",
          },
        },
        {
          id: "cipm-u1-mf-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 30 ÷ 5?",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Division", statement: "Share into equal groups." }],
            steps: [
              { reasoning: "30 ÷ 5 = 6 (since 5 × 6 = 30).", marks: 1, markCode: "M" },
              { reasoning: "Answer: 6.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6",
          },
        },
        {
          id: "cipm-u1-mf-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the same as 4 × 6?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$6 - 4$" },
            { id: "b", text: "$4 \\times 4$" },
            { id: "c", text: "$4 + 6$" },
            { id: "d", text: "$6 + 6 + 6 + 6$" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "technique", name: "Multiplication as repeated addition", statement: "4 × 6 means four lots of 6." }],
            steps: [{ reasoning: "4 × 6 is four 6s added: $6 + 6 + 6 + 6 = 24$.", marks: 1, markCode: "A" }],
            finalAnswer: "$6 + 6 + 6 + 6$",
          },
        },
        {
          id: "cipm-u1-mf-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 56 ÷ 8?",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: {
            principles: [{ kind: "technique", name: "Division", statement: "Share into equal groups." }],
            steps: [
              { reasoning: "56 ÷ 8 = 7 (since 8 × 7 = 56).", marks: 1, markCode: "M" },
              { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7",
          },
        },
        {
          id: "cipm-u1-mf-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Tom has 36 stickers. He puts them equally into 4 albums. (a) How many stickers go in each album? (b) If Tom gives one album away, how many stickers does he still have? Show your working.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Division in context", statement: "Share equally; subtract for part (b)." }],
            steps: [
              { reasoning: "(a) Each album gets $36 ÷ 4$.", marks: 1, markCode: "M" },
              { reasoning: "$36 ÷ 4 = 9$ stickers each (since $4 \\times 9 = 36$).", marks: 1, markCode: "M" },
              { reasoning: "(b) One album has 9 stickers, so $36 - 9 = 27$ remain.", marks: 1, markCode: "M" },
              { reasoning: "Answers: 9 per album; 27 stickers left.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 9 stickers; (b) 27 stickers",
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
