import type { Lesson } from "../../../types.ts";

export const lesson83: Lesson = {
  id: "ciem-u8-lesson-8-3",
  code: "8-3",
  title: "Venn Diagrams and Probability Problems",
  goal: "I CAN use Venn diagrams to organise two-set information and solve probability problems involving overlaps.",
  standards: ["0580 8.5"],
  vocabulary: [
    { term: "Venn diagram", definition: "A diagram of overlapping regions showing sets and their intersections." },
    { term: "Intersection $A\\cap B$", definition: "Elements in both sets $A$ and $B$." },
    { term: "Union $A\\cup B$", definition: "Elements in $A$ or $B$ (or both)." },
    { term: "Complement $A'$", definition: "Elements not in set $A$." },
    { term: "Disjoint sets", definition: "Sets with no elements in common; $A\\cap B=\\emptyset$." },
  ],
  concepts: [
    {
      id: "ciem-u8-venn-diagrams",
      title: "Venn diagrams",
      skill: "Fill Venn diagram regions from given information and compute probabilities.",
      lesson: {
        sections: [
          {
            heading: "Structure",
            body: "Two overlapping circles $A$ and $B$ inside a rectangle (the universal set). Regions: $A$ only, $B$ only, $A\\cap B$ (overlap), and outside both ($A'\\cap B'$).",
          },
          {
            heading: "Filling the diagram",
            body: "Start with the **intersection** (given directly or computed), then 'only $A$' = total $A$ − intersection, 'only $B$' = total $B$ − intersection, and 'neither' = universal − union.",
          },
          {
            heading: "Probabilities from Venn",
            body: "Divide each region by the universal total. $P(A\\cup B)=\\frac{|A|+|B|-|A\\cap B|}{n}$; $P(\\text{neither})=\\frac{\\text{outside}}{n}$.",
          },
        ],
        keyFormulas: [
          { name: "Union", statement: "$|A\\cup B|=|A|+|B|-|A\\cap B|$" },
          { name: "Neither", statement: "$|A'\\cap B'|=n-|A\\cup B|$" },
        ],
        workedExample: {
          problem: "Of 50 students, 30 like tea, 25 like coffee, 15 like both. Find how many like neither.",
          solution: "Union $=30+25-15=40$; neither $=50-40=10$.",
        },
      },
      questions: [
        {
          id: "ciem-u8-venn-diagrams-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a two-set Venn diagram, which region represents $A\\cap B$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The overlap of the two circles" },
              { id: "b", text: "The area outside both circles" },
              { id: "c", text: "The part of circle $A$ outside $B$" },
              { id: "d", text: "The rectangle" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Intersection", statement: "$A\\cap B$ = elements in both sets." },
            ],
            steps: [
              { reasoning: "Recall the region.", working: "\\text{overlap}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The overlap",
            commonErrors: ["Confusing intersection with union."],
          },
        },
        {
          id: "ciem-u8-venn-diagrams-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Of 40 students, 25 study maths, 20 study physics, 10 study both. How many study neither?",
          response: { type: "numeric", parts: [{ label: "Neither", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Union", statement: "$|A\\cup B|=25+20-10=35$" },
            ],
            steps: [
              { reasoning: "Union $=25+20-10=35$.", working: "35", marks: 1, markCode: "M" },
              { reasoning: "Neither $=40-35$.", working: "=5", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ students",
            commonErrors: ["Adding $25+20$ without subtracting overlap (gives 45 > 40)."],
          },
        },
        {
          id: "ciem-u8-venn-diagrams-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a group of 60 people, 35 like pizza, 28 like pasta, and 12 like neither. Find how many like both.",
          response: { type: "numeric", parts: [{ label: "Both", answer: 15 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Union", statement: "$|A\\cup B|=60-12=48$; then $48=35+28-x$" },
            ],
            steps: [
              { reasoning: "Union = total − neither $=60-12=48$.", working: "48", marks: 1, markCode: "M" },
              { reasoning: "Set up $35+28-x=48$.", working: "63-x=48", marks: 1, markCode: "M" },
              { reasoning: "Solve.", working: "x=15", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15$ people",
            commonErrors: ["Trying to find 'both' before establishing the union."],
          },
        },
        {
          id: "ciem-u8-venn-diagrams-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Of 100 students: 60 study English, 50 study Maths, 30 study both, and the rest study neither English nor Maths.",
          parts: [
            { label: "a", prompt: "Find the number studying neither.", marks: 2 },
            { label: "b", prompt: "Find $P(\\text{Maths}\\,|\\,\\text{English})$.", marks: 3 },
            { label: "c", prompt: "Find $P(\\text{neither}\\,|\\,\\text{not Maths})$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Union", statement: "$|E\\cup M|=60+50-30=80$" },
              { kind: "formula", name: "Conditional probability", statement: "$P(A\\,|\\,B)=\\frac{\\text{joint}}{\\text{total of }B}$" },
            ],
            steps: [
              { part: "a", reasoning: "Neither $=100-80=20$.", working: "20", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the number.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "English total $=60$; Maths among them $=30$ (the overlap).", working: "\\frac{30}{60}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "=\\frac12", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the probability.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Not Maths $=100-50=50$; neither among them $=20$ (all 'neither' are not-Maths).", working: "\\frac{20}{50}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify.", working: "=\\frac25", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the probability.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $20$ (b) $\\frac12$ (c) $\\frac25$",
            commonErrors: ["In (b) dividing by 100 or by 50.", "In (c) forgetting that all 'neither' students are in the not-Maths group."],
          },
        },
      ],
    },
    {
      id: "ciem-u8-probability-problem-solving",
      title: "Probability problem solving",
      skill: "Solve extended probability problems combining Venn regions, trees and conditional probability.",
      lesson: {
        sections: [
          {
            heading: "Choosing a method",
            body: "- Two sets with totals → Venn diagram or two-way table\n- Sequential draws → tree diagram\n- 'Given that' → conditional probability\n- 'At least one' → complement",
          },
          {
            heading: "Multi-step problems",
            body: "Break into stages: find region probabilities, then combine. Always check the answer is between $0$ and $1$, and that region frequencies sum to the universal total.",
          },
          {
            heading: "Expected value",
            body: "Expected number of successes in $n$ trials $=n\\times P(\\text{success})$. Can be non-integer — it's an average, not a guaranteed count.",
          },
        ],
        keyFormulas: [
          { name: "Method selection", statement: "Match problem type to tool" },
          { name: "Expected value", statement: "$n\\times P(E)$" },
        ],
        workedExample: {
          problem: "Two coins are tossed 100 times. Expected number of 'at least one head'?",
          solution: "$P(\\text{at least one H})=1-\\frac14=\\frac34$; expected $=100\\times\\frac34=75$.",
        },
      },
      questions: [
        {
          id: "ciem-u8-probability-problem-solving-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tool is best for 'two categories of people with totals for each and both'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two-way table or Venn diagram" },
              { id: "b", text: "Probability tree" },
              { id: "c", text: "Frequency polygon" },
              { id: "d", text: "Scatter diagram" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Method selection", statement: "Two-set categorical data → Venn/two-way table." },
            ],
            steps: [
              { reasoning: "Match the data type to the tool.", working: "\\text{Venn/table}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Two-way table or Venn diagram",
            commonErrors: ["Using a tree for non-sequential data."],
          },
        },
        {
          id: "ciem-u8-probability-problem-solving-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "$P(A)=0.5$, $P(B)=0.4$, $P(A\\cap B)=0.2$. Find $P(A'\\cap B')$ (neither).",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.3 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Union", statement: "$P(A\\cup B)=0.5+0.4-0.2=0.7$" },
            ],
            steps: [
              { reasoning: "Union $=0.7$; neither $=1-0.7$.", working: "1-0.7", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=0.3", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.3$",
            commonErrors: ["Computing $P(A')P(B')$ assuming independence."],
          },
        },
        {
          id: "ciem-u8-probability-problem-solving-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A bag has 5 red and 5 blue balls. Two are drawn without replacement. Find $P(\\text{at least one red})$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Complement", statement: "$P(\\text{at least one})=1-P(\\text{none})$" },
            ],
            steps: [
              { reasoning: "$P(\\text{no red})=P(\\text{both blue})=\\frac5{10}\\times\\frac4{9}=\\frac{20}{90}$.", working: "\\frac5{10}\\times\\frac4{9}", marks: 1, markCode: "M" },
              { reasoning: "Complement: $1-\\frac{20}{90}=\\frac{70}{90}$.", working: "=\\frac7{9}", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac7{9}$",
            commonErrors: ["Listing all 'at least one' paths — complement is faster and less error-prone."],
          },
        },
        {
          id: "ciem-u8-probability-problem-solving-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Of 75 passengers on a train: 45 are commuting, 30 are tourists; 20 commuters and 10 tourists are seated in first class; the rest are in standard class.",
          parts: [
            { label: "a", prompt: "Complete the two-way table of passenger type vs class.", marks: 3 },
            { label: "b", prompt: "Find $P(\\text{first class}\\,|\\,\\text{commuter})$.", marks: 2 },
            { label: "c", prompt: "Find $P(\\text{commuter}\\,|\\,\\text{first class})$.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Two-way table", statement: "Commuter first $=20$, commuter standard $=45-20=25$; tourist first $=10$, tourist standard $=30-10=20$; totals: first $=30$, standard $=45$, check $30+45=75\\ne80$ — see note." },
              { kind: "formula", name: "Conditional probability", statement: "$P(A\\,|\\,B)=\\frac{\\text{joint}}{\\text{total of }B}$" },
            ],
            steps: [
              { part: "a", reasoning: "Commuter standard $=45-20=25$; tourist standard $=30-10=20$; total standard $=45$; first class total $=30$; grand total $=75$ ✓.", working: "20,25,10,20 \\Rightarrow 75", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the completed table.", working: "\\text{inconsistent}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the table with the discrepancy noted.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Given commuter, restrict to 45; first-class commuters $=20$.", working: "\\frac{20}{45}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "=\\frac49", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Given first class, restrict to first-class total $=30$; commuters among them $=20$.", working: "\\frac{20}{30}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify.", working: "=\\frac23", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the probability.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) commuter: 20 first, 25 standard; tourist: 10 first, 20 standard — totals inconsistent with 80 (see note) (b) $\\frac49$ (c) $\\frac23$",
            commonErrors: ["In (c) dividing by 45 (commuter total) instead of 30 (first-class total)."],
            examinerNote: "Answers use the stated subgroup totals.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u8-problem-solving-notes",
      title: "Venn diagrams and problem solving — revision notes",
      summary: "Organising two-set data and solving extended probability problems.",
      sections: [
        {
          heading: "Venn method",
          body: "Fill intersection first, then only-A, only-B, neither. Check regions sum to universal total.",
        },
        {
          heading: "Method selection",
          body: "Two sets → Venn/table; sequential → tree; 'given' → conditional; 'at least one' → complement.",
        },
        {
          heading: "Exam technique",
          body: "- $|A\\cup B|=|A|+|B|-|A\\cap B|$\n- Expected value $=n\\times P$\n- Always verify totals add up before computing probabilities.",
        },
      ],
    },
  ],
};
