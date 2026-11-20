import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "ciem-u8-lesson-8-2",
  code: "8-2",
  title: "Two-Way Tables and Conditional Probability",
  goal: "I CAN extract probabilities from two-way tables and calculate conditional probabilities $P(A\\,|\\,B)$.",
  standards: ["0580 8.3", "0580 8.4"],
  vocabulary: [
    { term: "Two-way table", definition: "A table displaying frequencies for two categorical variables with row, column and total totals." },
    { term: "Conditional probability", definition: "$P(A\\,|\\,B)=\\frac{P(A\\cap B)}{P(B)}$ — probability of $A$ given $B$ has occurred." },
    { term: "Marginal total", definition: "The row or column totals in a two-way table." },
    { term: "Joint frequency", definition: "The count in an interior cell — the number with both attributes." },
    { term: "Independent events", definition: "Events where $P(A\\,|\\,B)=P(A)$; knowing $B$ does not change $A$'s probability." },
  ],
  concepts: [
    {
      id: "ciem-u8-two-way-tables",
      title: "Two-way tables",
      skill: "Read probabilities from two-way tables including marginal, joint and conditional probabilities.",
      lesson: {
        sections: [
          {
            heading: "Reading the table",
            body: "Interior cells are **joint** frequencies (both attributes). Row/column totals are **marginal** frequencies. The grand total is the bottom-right cell.\n\nExample:\n\n| | Maths | Not Maths | Total |\n|---|---|---|---|\n| Science | 30 | 20 | 50 |\n| Not Science | 10 | 40 | 50 |\n| Total | 40 | 60 | 100 |",
          },
          {
            heading: "Probability types",
            body: "- $P(\\text{Maths})=\\frac{40}{100}$ (marginal)\n- $P(\\text{Maths and Science})=\\frac{30}{100}$ (joint)\n- $P(\\text{Maths}\\,|\\,\\text{Science})=\\frac{30}{50}$ (conditional — restrict to the Science row)",
          },
          {
            heading: "Conditional probability",
            body: "Given $B$ occurred, restrict the sample space to $B$'s total: $P(A\\,|\\,B)=\\frac{\\text{joint cell}}{\\text{row/column total of }B}$.",
          },
        ],
        keyFormulas: [
          { name: "Conditional probability", statement: "$P(A\\,|\\,B)=\\frac{P(A\\cap B)}{P(B)}$" },
          { name: "From table", statement: "$P(A\\,|\\,B)=\\frac{\\text{joint frequency}}{\\text{total of }B}$" },
        ],
        workedExample: {
          problem: "Using the table above, find $P(\\text{Science}\\,|\\,\\text{Maths})$.",
          solution: "Restrict to Maths column: $\\frac{30}{40}=\\frac34$.",
        },
      },
      questions: [
        {
          id: "ciem-u8-two-way-tables-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a two-way table, what does an interior cell represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number with both attributes" },
              { id: "b", text: "The total for one category" },
              { id: "c", text: "The grand total" },
              { id: "d", text: "The average of the row and column" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Joint frequency", statement: "Interior cells count items with both attributes." },
            ],
            steps: [
              { reasoning: "Recall the table structure.", working: "\\text{joint frequency}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Number with both attributes",
            commonErrors: ["Confusing interior cells with totals."],
          },
        },
        {
          id: "ciem-u8-two-way-tables-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A class of 30 students: 18 play football, 12 play basketball, 7 play both. Find $P(\\text{plays football})$.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.6 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Probability", statement: "$P=\\frac{\\text{favourable}}{\\text{total}}$" },
            ],
            steps: [
              { reasoning: "Favourable = football players $=18$.", working: "\\frac{18}{30}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "=0.6", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.6$",
            commonErrors: ["Using $18+7$ or $18-7$ — the 'both' figure is already inside the 18 and 12."],
          },
        },
        {
          id: "ciem-u8-two-way-tables-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Using the class data (30 students, 18 football, 12 basketball, 7 both), find $P(\\text{football}\\,|\\,\\text{basketball})$.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.5833, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Conditional probability", statement: "$P(A\\,|\\,B)=\\frac{P(A\\cap B)}{P(B)}$" },
            ],
            steps: [
              { reasoning: "Given basketball, restrict to the 12 basketball players; 7 of them also play football.", working: "\\frac{7}{12}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\approx0.5833", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "$\\frac7{12}\\approx0.583$",
            commonErrors: ["Using $\\frac7{30}$ (joint over grand total) instead of conditioning on basketball."],
          },
        },
        {
          id: "ciem-u8-two-way-tables-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "In a survey of 200 people: 120 own a phone, 80 own a laptop, 50 own both.",
          parts: [
            { label: "a", prompt: "Draw/describe the two-way table (or Venn regions) with all frequencies.", marks: 3 },
            { label: "b", prompt: "Find $P(\\text{owns a phone or a laptop})$.", marks: 2 },
            { label: "c", prompt: "Find $P(\\text{owns a laptop}\\,|\\,\\text{owns a phone})$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Two-way table", statement: "Joint = both; only-phone = 120-50=70; only-laptop=80-50=30; neither=200-150=50." },
              { kind: "formula", name: "Conditional probability", statement: "$P(A\\,|\\,B)=\\frac{\\text{joint}}{\\text{total of }B}$" },
            ],
            steps: [
              { part: "a", reasoning: "Both $=50$; phone only $=120-50=70$; laptop only $=80-50=30$; neither $=200-(50+70+30)=50$.", working: "50,70,30,50", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the completed table/regions.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Verify totals: phone $50+70=120$ ✓, laptop $50+30=80$ ✓, grand $200$ ✓.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Phone or laptop $=200-50=150$ (complement of neither).", working: "150", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the probability.", working: "\\frac{150}{200}=0.75", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Given phone owner, restrict to 120; laptop owners among them = both $=50$.", working: "\\frac{50}{120}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify.", working: "=\\frac5{12}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "\\approx0.417", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the probability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) both 50, phone-only 70, laptop-only 30, neither 50 (b) $0.75$ (c) $\\frac5{12}\\approx0.417$",
            commonErrors: ["In (b) adding $120+80$ without subtracting overlap.", "In (c) dividing by 80 (laptop total) instead of 120 (phone total)."],
          },
        },
      ],
    },
    {
      id: "ciem-u8-conditional-probability",
      title: "Conditional probability",
      skill: "Calculate $P(A\\,|\\,B)$ and use it to test independence and solve probability problems.",
      lesson: {
        sections: [
          {
            heading: "The formula",
            body: "$$P(A\\,|\\,B)=\\frac{P(A\\cap B)}{P(B)}$$\n\nRead as 'probability of $A$ given $B$'. The condition $B$ restricts the sample space to $B$'s outcomes.",
          },
          {
            heading: "Independence",
            body: "Events are **independent** if $P(A\\,|\\,B)=P(A)$ (equivalently $P(A\\cap B)=P(A)P(B)$). For independent events, knowing $B$ occurred tells you nothing about $A$.",
          },
          {
            heading: "Tree diagrams with conditions",
            body: "Second-stage branch probabilities are conditional probabilities — they reflect what is known after the first event.",
          },
        ],
        keyFormulas: [
          { name: "Conditional probability", statement: "$P(A\\,|\\,B)=\\frac{P(A\\cap B)}{P(B)}$" },
          { name: "Independence test", statement: "$P(A\\cap B)=P(A)P(B)$" },
        ],
        workedExample: {
          problem: "$P(A)=0.5$, $P(B)=0.4$, $P(A\\cap B)=0.2$. Are $A$ and $B$ independent?",
          solution: "$P(A)P(B)=0.5\\times0.4=0.2=P(A\\cap B)$ — yes, independent.",
        },
      },
      questions: [
        {
          id: "ciem-u8-conditional-probability-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does $P(A\\,|\\,B)$ mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Probability of $A$ given that $B$ has occurred" },
              { id: "b", text: "Probability of $B$ given that $A$ has occurred" },
              { id: "c", text: "Probability of both $A$ and $B$" },
              { id: "d", text: "Probability of $A$ or $B$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conditional probability", statement: "Probability of $A$ given $B$." },
            ],
            steps: [
              { reasoning: "Recall the notation.", working: "P(A|B)", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $P(A\\,|\\,B)$ = probability of $A$ given $B$",
            commonErrors: ["Reversing the condition."],
          },
        },
        {
          id: "ciem-u8-conditional-probability-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "$P(A)=0.6$, $P(B)=0.5$, $P(A\\cap B)=0.3$. Find $P(A\\,|\\,B)$.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.6 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Conditional probability", statement: "$P(A\\,|\\,B)=\\frac{P(A\\cap B)}{P(B)}$" },
            ],
            steps: [
              { reasoning: "Substitute.", working: "\\frac{0.3}{0.5}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=0.6", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.6$",
            commonErrors: ["Dividing by $P(A)$ instead of $P(B)$."],
          },
        },
        {
          id: "ciem-u8-conditional-probability-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "$P(A)=0.5$, $P(B)=0.6$, $P(A\\cap B)=0.3$. Determine whether $A$ and $B$ are independent.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Independence test", statement: "Independent iff $P(A\\cap B)=P(A)P(B)$." },
            ],
            steps: [
              { reasoning: "Compute $P(A)P(B)$.", working: "0.5\\times0.6=0.3", marks: 1, markCode: "M" },
              { reasoning: "Compare with $P(A\\cap B)=0.3$.", working: "0.3=0.3", marks: 1, markCode: "M" },
              { reasoning: "Conclude.", working: "\\text{independent}", marks: 1, markCode: "M" },
              { reasoning: "State the conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yes, $A$ and $B$ are independent",
            commonErrors: ["Comparing $P(A\\cap B)$ with $P(A)+P(B)$."],
          },
        },
        {
          id: "ciem-u8-conditional-probability-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A factory produces components on two machines. Machine $A$ produces $60\\%$ of output with $2\\%$ defect rate; Machine $B$ produces $40\\%$ with $5\\%$ defect rate.",
          parts: [
            { label: "a", prompt: "Find $P(\\text{defective})$.", marks: 3 },
            { label: "b", prompt: "Find $P(\\text{from machine }A\\,|\\,\\text{defective})$.", marks: 4 },
            { label: "c", prompt: "Are 'from machine $A$' and 'defective' independent? Justify.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Total probability", statement: "$P(D)=P(A)P(D\\,|\\,A)+P(B)P(D\\,|\\,B)$" },
              { kind: "formula", name: "Bayes-style conditional", statement: "$P(A\\,|\\,D)=\\frac{P(A\\cap D)}{P(D)}$" },
            ],
            steps: [
              { part: "a", reasoning: "$P(D)=0.6\\times0.02+0.4\\times0.05$.", working: "=0.012+0.020", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Add.", working: "=0.032", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the probability.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$P(A\\cap D)=0.6\\times0.02=0.012$.", working: "0.012", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Apply conditional formula.", working: "P(A\\,|\\,D)=\\frac{0.012}{0.032}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=0.375", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the probability.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Check independence: $P(A)P(D)=0.6\\times0.032=0.0192\\ne P(A\\cap D)=0.012$.", working: "0.0192\\ne0.012", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Conclude they are dependent.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.032$ (b) $0.375$ (c) No — not independent",
            commonErrors: ["In (b) using $P(D\\,|\\,A)$ instead of $P(A\\,|\\,D)$.", "In (c) assuming machine and defect are independent."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u8-conditional-notes",
      title: "Two-way tables and conditional probability — revision notes",
      summary: "Reading frequencies, computing $P(A\\,|\\,B)$, and testing independence.",
      sections: [
        {
          heading: "Two-way tables",
          body: "Interior = joint; margins = single-attribute totals. Conditional probability restricts to the given row/column: $P(A\\,|\\,B)=\\frac{\\text{joint}}{\\text{total of }B}$.",
        },
        {
          heading: "Conditional probability",
          body: "$P(A\\,|\\,B)=\\frac{P(A\\cap B)}{P(B)}$. Independent iff $P(A\\cap B)=P(A)P(B)$.",
        },
        {
          heading: "Exam technique",
          body: "- Draw the table first, fill 'both' then subtract for 'only' cells.\n- 'Given B' means divide by B's total, not the grand total.\n- For 'defective given machine' type questions, use total probability then conditional formula.",
        },
      ],
    },
  ],
};
