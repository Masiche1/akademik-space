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
              { id: "a", text: "The part of circle $A$ outside $B$" },
              { id: "b", text: "The area outside both circles" },
              { id: "c", text: "The overlap of the two circles" },
              { id: "d", text: "The rectangle" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Intersection", statement: "$A\\cap B$ = elements in both sets." },
            ],
            steps: [
              { reasoning: "Recall the region.", working: "\\text{overlap}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The overlap",
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
        {
          id: "ciem-u8-venn-diagrams-q5", difficulty: "foundation", totalMarks: 1,
          stem: "On a two-set Venn diagram, what does the region $A\\cap B'$ represent?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Elements in $B$ only" },
            { id: "b", text: "Elements in both" },
            { id: "c", text: "Elements in $A$ only" },
            { id: "d", text: "Elements outside both" }
 ],
            correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "definition", name: "Set regions", statement: "$A\\cap B'$ = in $A$ but not $B$." } ],
            steps: [ { reasoning: "Recall the region notation.", working: "A\\text{ only}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(c)** Elements in $A$ only", commonErrors: ["Confusing with $A\\cap B$."] },
        },
        {
          id: "ciem-u8-venn-diagrams-q6", difficulty: "core", totalMarks: 1,
          stem: "Of $50$ people, $30$ are in set $A$, $25$ are in set $B$ and $10$ are in both. How many are in $A$ only?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$30$" },
            { id: "b", text: "$15$" },
            { id: "c", text: "$25$" },
            { id: "d", text: "$20$" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "formula", name: "Region count", statement: "$|A\\text{ only}|=|A|-|A\\cap B|$" } ],
            steps: [ { reasoning: "Subtract the overlap from $A$.", working: "30-10=20", marks: 1, markCode: "M" } ],
            finalAnswer: "**(d)** $20$", commonErrors: ["Not subtracting the overlap."] },
        },
        {
          id: "ciem-u8-venn-diagrams-q7", difficulty: "core", totalMarks: 3,
          stem: "Of $45$ students, $28$ study art and $18$ study music, with $8$ studying both. How many study neither?",
          response: { type: "numeric", parts: [ { label: "Neither", answer: 7 }] },
          markscheme: { principles: [ { kind: "formula", name: "Union", statement: "$|A\\cup B|=28+18-8=38$." } ],
            steps: [
              { reasoning: "Find the union.", working: "28+18-8=38", marks: 1, markCode: "M" },
              { reasoning: "Neither $=45-38$.", working: "=7", marks: 1, markCode: "M" },
              { reasoning: "State the number.", marks: 1, markCode: "A" } ],
            finalAnswer: "$7$ students", commonErrors: ["Adding $28+18$ without subtracting overlap."] },
        },
        {
          id: "ciem-u8-venn-diagrams-q8", difficulty: "challenge", totalMarks: 4,
          stem: "In a group of $70$ people, $40$ like tea and $30$ like coffee. $15$ like neither. Find how many like both.",
          response: { type: "numeric", parts: [ { label: "Both", answer: 15 }] },
          markscheme: { principles: [ { kind: "formula", name: "Union", statement: "$|T\\cup C|=70-15=55$; $40+30-x=55$." } ],
            steps: [
              { reasoning: "Union $=70-15=55$.", working: "55", marks: 1, markCode: "M" },
              { reasoning: "Set up $70-x=55$.", working: "70-x=55", marks: 1, markCode: "M" },
              { reasoning: "Solve for the overlap.", working: "x=15", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", marks: 1, markCode: "A" } ],
            finalAnswer: "$15$ people", commonErrors: ["Assuming both $=15$ before checking totals."] },
        },
        {
          id: "ciem-u8-venn-diagrams-q9", difficulty: "core", totalMarks: 1,
          stem: "Which region of a two-set Venn diagram represents $A\\cup B$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Only $B$" },
            { id: "b", text: "Everything inside either circle" },
            { id: "c", text: "Only $A$" },
            { id: "d", text: "Everything except the overlap" }
 ],
            correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "definition", name: "Union", statement: "$A\\cup B$ = in $A$, in $B$, or both." } ],
            steps: [ { reasoning: "Recall union includes the overlap.", working: "\\text{either circle}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(b)** Everything inside either circle", commonErrors: ["Excluding the overlap."] },
        },
        {
          id: "ciem-u8-venn-diagrams-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Of $80$ people, $50$ are in set $A$ and $20$ are in both $A$ and $B$. Find $P(A\\text{ only})$.",
          response: { type: "numeric", parts: [ { label: "Probability", answer: 0.375 }] },
          markscheme: { principles: [ { kind: "formula", name: "Region count", statement: "$A$ only $=50-20=30$." } ],
            steps: [
              { reasoning: "Find the $A$-only count.", working: "50-20=30", marks: 1, markCode: "M" },
              { reasoning: "Divide by the total.", marks: 1, markCode: "A" } ],
            finalAnswer: "$\\frac{30}{80}=0.375$", commonErrors: ["Using $50$ instead of $30$."] },
        },
        {
          id: "ciem-u8-venn-diagrams-q11", difficulty: "core", totalMarks: 4,
          stem: "Describe the order in which the regions of a two-set Venn diagram should be filled from given totals.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "technique", name: "Venn method", statement: "Intersection first, then the only-regions, then neither." } ],
            steps: [
              { reasoning: "Start with the overlap.", working: "A\\cap B", marks: 1, markCode: "M" },
              { reasoning: "Subtract overlap from each set for the only-regions.", working: "|A|-|A\\cap B|", marks: 1, markCode: "M" },
              { reasoning: "Find neither as total minus union.", working: "n-|A\\cup B|", marks: 1, markCode: "M" },
              { reasoning: "Check all regions sum to $n$.", marks: 1, markCode: "A" } ],
            finalAnswer: "Fill $A\\cap B$ first, then $A$ only and $B$ only, then neither; check the sum.", commonErrors: ["Starting with the only-regions."] },
        },
        {
          id: "ciem-u8-venn-diagrams-q12", difficulty: "challenge", totalMarks: 3,
          stem: "Of $60$ people, $36$ like football and $24$ like rugby, with $12$ liking both. Find $P(\\text{rugby}\\,|\\,\\text{football})$.",
          response: { type: "numeric", parts: [ { label: "Probability", answer: 0.333, tolerance: 0.001 }] },
          markscheme: { principles: [ { kind: "formula", name: "Conditional probability", statement: "$P(R\\,|\\,F)=\\frac{\\text{both}}{\\text{football total}}$" } ],
            steps: [
              { reasoning: "Given football, restrict to $36$; both $=12$.", working: "\\frac{12}{36}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "=\\frac13", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" } ],
            finalAnswer: "$\\frac13\\approx0.333$", commonErrors: ["Dividing by $60$."] },
        },
        {
          id: "ciem-u8-venn-diagrams-q13", difficulty: "core", totalMarks: 1,
          stem: "On a two-set Venn diagram, which region represents 'in neither set'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The overlap" },
            { id: "b", text: "Outside both circles" },
            { id: "c", text: "$B$ only" },
            { id: "d", text: "$A$ only" }
 ],
            correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "definition", name: "Neither", statement: "Neither = outside the union." } ],
            steps: [ { reasoning: "Recall the outside region.", working: "\\text{outside both}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(b)** Outside both circles", commonErrors: ["Confusing with the union."] },
        },
        {
          id: "ciem-u8-venn-diagrams-q14", difficulty: "foundation", totalMarks: 3,
          stem: "Explain why $|A\\cup B|=|A|+|B|-|A\\cap B|$.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Union", statement: "Adding $|A|$ and $|B|$ counts the overlap twice." } ],
            steps: [
              { reasoning: "State that the overlap is counted twice.", working: "2\\times|A\\cap B|", marks: 1, markCode: "M" },
              { reasoning: "Subtract it once to count it once.", working: "-|A\\cap B|", marks: 1, markCode: "M" },
              { reasoning: "Give the formula.", marks: 1, markCode: "A" } ],
            finalAnswer: "The overlap is counted twice, so subtract it once.", commonErrors: ["Adding instead of subtracting."] },
        },
        {
          id: "ciem-u8-venn-diagrams-q15", difficulty: "challenge", totalMarks: 3,
          stem: "Of $200$ people, $90$ own a phone and $130$ own a laptop, with $70$ owning both. How many own neither?",
          response: { type: "numeric", parts: [ { label: "Neither", answer: 50 }] },
          markscheme: { principles: [ { kind: "formula", name: "Union", statement: "$|P\\cup L|=90+130-70=150$." } ],
            steps: [
              { reasoning: "Union $=90+130-70=150$.", working: "150", marks: 1, markCode: "M" },
              { reasoning: "Neither $=200-150=50$.", working: "=50", marks: 1, markCode: "M" },
              { reasoning: "State the number.", marks: 1, markCode: "A" } ],
            finalAnswer: "$50$ people", commonErrors: ["Forgetting to subtract overlap."] },
        },
        {
          id: "ciem-u8-venn-diagrams-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Of $120$ students, $70$ play football, $50$ play rugby and $40$ play both.",
          parts: [
            { label: "a", prompt: "Find how many play neither sport.", marks: 3 },
            { label: "b", prompt: "Find $P(\\text{rugby}\\,|\\,\\text{football})$.", marks: 3 },
            { label: "c", prompt: "Find $P(\\text{football only})$.", marks: 3 } ],
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Union", statement: "$|F\\cup R|=70+50-40=80$." }, { kind: "formula", name: "Conditional probability", statement: "$P(R\\,|\\,F)=\\frac{40}{70}$" } ],
            steps: [
              { part: "a", reasoning: "Union $=70+50-40=80$.", working: "80", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Neither $=120-80=40$.", working: "=40", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the number.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Given football, restrict to $70$; both $=40$.", working: "\\frac{40}{70}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "=\\frac47", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the probability.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Football only $=70-40=30$.", working: "30", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide by total.", working: "\\frac{30}{120}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the probability.", marks: 1, markCode: "A" } ],
            finalAnswer: "(a) $40$ (b) $\\frac47$ (c) $\\frac14$",
            commonErrors: ["In (c) using $70$ instead of $30$ for football only."] },
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
              { id: "a", text: "Probability tree" },
              { id: "b", text: "Two-way table or Venn diagram" },
              { id: "c", text: "Frequency polygon" },
              { id: "d", text: "Scatter diagram" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Method selection", statement: "Two-set categorical data → Venn/two-way table." },
            ],
            steps: [
              { reasoning: "Match the data type to the tool.", working: "\\text{Venn/table}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Two-way table or Venn diagram",
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
        {
          id: "ciem-u8-probability-problem-solving-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which is the quickest way to find $P(\\text{at least one success})$ in independent trials?",
          response: { type: "mcq", choices: [
            { id: "a", text: "List every success case" },
            { id: "b", text: "Add all probabilities" },
            { id: "c", text: "Use $1-P(\\text{none})$" },
            { id: "d", text: "Multiply all probabilities" }
 ],
            correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "technique", name: "Complement", statement: "$P(\\text{at least one})=1-P(\\text{none})$." } ],
            steps: [ { reasoning: "Recall the complement method.", working: "1-P(\\text{none})", marks: 1, markCode: "B" } ],
            finalAnswer: "**(c)** Use $1-P(\\text{none})$", commonErrors: ["Listing cases instead of complement."] },
        },
        {
          id: "ciem-u8-probability-problem-solving-q6", difficulty: "core", totalMarks: 1,
          stem: "A spinner lands on red with probability $0.35$. It is spun $200$ times. What is the expected number of reds?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$35$" },
            { id: "b", text: "$70$" },
            { id: "c", text: "$7$" },
            { id: "d", text: "$200$" }
 ],
            correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "formula", name: "Expected value", statement: "$n\\times P(E)$" } ],
            steps: [ { reasoning: "Multiply trials by probability.", working: "200\\times0.35=70", marks: 1, markCode: "M" } ],
            finalAnswer: "**(b)** $70$", commonErrors: ["Using $n=100$."] },
        },
        {
          id: "ciem-u8-probability-problem-solving-q7", difficulty: "core", totalMarks: 3,
          stem: "A fair coin is tossed three times. Find $P(\\text{at least one head})$.",
          response: { type: "numeric", parts: [ { label: "Probability", answer: 0.875 }] },
          markscheme: { principles: [ { kind: "formula", name: "Complement", statement: "$P(\\text{at least one H})=1-P(\\text{HHH})$" } ],
            steps: [
              { reasoning: "All tails $=\\left(\\frac12\\right)^3=\\frac18$.", working: "\\frac18", marks: 1, markCode: "M" },
              { reasoning: "Complement $=1-\\frac18=\\frac78$.", working: "=\\frac78", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" } ],
            finalAnswer: "$\\frac78=0.875$", commonErrors: ["Adding single-toss probabilities."] },
        },
        {
          id: "ciem-u8-probability-problem-solving-q8", difficulty: "challenge", totalMarks: 4,
          stem: "A bag has $6$ red and $4$ blue balls. Two are drawn without replacement. Find $P(\\text{at least one red})$.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Complement", statement: "$P(\\text{at least one red})=1-P(\\text{both blue})$" } ],
            steps: [
              { reasoning: "Both blue $=\\frac{4}{10}\\times\\frac{3}{9}=\\frac{12}{90}=\\frac{2}{15}$.", working: "\\frac{4}{10}\\times\\frac{3}{9}", marks: 1, markCode: "M" },
              { reasoning: "Complement $=1-\\frac{2}{15}=\\frac{13}{15}$.", working: "=\\frac{13}{15}", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" } ],
            finalAnswer: "$\\frac{13}{15}$", commonErrors: ["Forgetting the second draw changes the total."] },
        },
        {
          id: "ciem-u8-probability-problem-solving-q9", difficulty: "challenge", totalMarks: 1,
          stem: "A question says 'Find $P(A\\,|\\,B)$'. Which method is most appropriate?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Expected value" },
            { id: "b", text: "Frequency table" },
            { id: "c", text: "Venn diagram only" },
            { id: "d", text: "Conditional probability" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "technique", name: "Method selection", statement: "'Given that' signals conditional probability." } ],
            steps: [ { reasoning: "Recognise the 'given' condition.", working: "P(A|B)", marks: 1, markCode: "B" } ],
            finalAnswer: "**(d)** Conditional probability", commonErrors: ["Using a tree without conditions."] },
        },
        {
          id: "ciem-u8-probability-problem-solving-q10", difficulty: "foundation", totalMarks: 2,
          stem: "A biased die shows a six with probability $0.2$. It is rolled $50$ times. Find the expected number of sixes.",
          response: { type: "numeric", parts: [ { label: "Expected", answer: 10 }] },
          markscheme: { principles: [ { kind: "formula", name: "Expected value", statement: "$E=50\\times0.2$" } ],
            steps: [
              { reasoning: "Multiply trials by probability.", working: "50\\times0.2=10", marks: 1, markCode: "M" },
              { reasoning: "State the expected value.", marks: 1, markCode: "A" } ],
            finalAnswer: "$10$", commonErrors: ["Using $\\frac16$ for a biased die."] },
        },
        {
          id: "ciem-u8-probability-problem-solving-q11", difficulty: "core", totalMarks: 4,
          stem: "A coin is tossed twice. Find $P(\\text{at least one head})$ using the complement.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Complement", statement: "$P(\\text{at least one H})=1-P(\\text{TT})$" } ],
            steps: [
              { reasoning: "Both tails $=\\frac14$.", working: "\\frac14", marks: 1, markCode: "M" },
              { reasoning: "Complement $=1-\\frac14=\\frac34$.", working: "=\\frac34", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" } ],
            finalAnswer: "$\\frac34$", commonErrors: ["Computing $P(HH)$ only."] },
        },
        {
          id: "ciem-u8-probability-problem-solving-q12", difficulty: "challenge", totalMarks: 3,
          stem: "Of $100$ people, $55$ own a car and $40$ own a bike, with $25$ owning both. Find $P(\\text{car}\\,|\\,\\text{bike})$.",
          response: { type: "numeric", parts: [ { label: "Probability", answer: 0.625 }] },
          markscheme: { principles: [ { kind: "formula", name: "Conditional probability", statement: "$P(C\\,|\\,B)=\\frac{\\text{both}}{\\text{bike total}}$" } ],
            steps: [
              { reasoning: "Given bike owner, restrict to $40$; both $=25$.", working: "\\frac{25}{40}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "=0.625", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" } ],
            finalAnswer: "$0.625$", commonErrors: ["Dividing by $55$ or $100$."] },
        },
        {
          id: "ciem-u8-probability-problem-solving-q13", difficulty: "core", totalMarks: 1,
          stem: "Which expression gives the probability of 'neither $A$ nor $B$'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$1-P(A\\cup B)$" },
            { id: "b", text: "$P(A')+P(B')$" },
            { id: "c", text: "$P(A\\cup B)$" },
            { id: "d", text: "$P(A\\cap B')$" }
 ],
            correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "formula", name: "Complement of union", statement: "$P(A'\\cap B')=1-P(A\\cup B)$" } ],
            steps: [ { reasoning: "Neither is the complement of the union.", working: "1-P(A\\cup B)", marks: 1, markCode: "B" } ],
            finalAnswer: "**(a)** $1-P(A\\cup B)$", commonErrors: ["Adding complements without subtracting overlap."] },
        },
        {
          id: "ciem-u8-probability-problem-solving-q14", difficulty: "foundation", totalMarks: 3,
          stem: "A bag contains $5$ red and $5$ blue counters. One is drawn and replaced, then another is drawn. Which diagram best models this?",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "technique", name: "Method selection", statement: "Sequential draws → tree diagram; replacement keeps probabilities constant." } ],
            steps: [
              { reasoning: "Two stages are sequential.", working: "\\text{tree}", marks: 1, markCode: "M" },
              { reasoning: "Replacement means second-stage probabilities equal first-stage.", working: "\\text{same }P", marks: 1, markCode: "M" },
              { reasoning: "State the method.", marks: 1, markCode: "A" } ],
            finalAnswer: "A probability tree with identical branches at each stage.", commonErrors: ["Changing probabilities for the second draw."] },
        },
        {
          id: "ciem-u8-probability-problem-solving-q15", difficulty: "challenge", totalMarks: 3,
          stem: "$P(A)=0.6$, $P(B)=0.5$ and $P(A\\cap B)=0.3$. Find $P(\\text{at least one of }A,B)$.",
          response: { type: "numeric", parts: [ { label: "Probability", answer: 0.8 }] },
          markscheme: { principles: [ { kind: "formula", name: "Union", statement: "$P(A\\cup B)=0.6+0.5-0.3=0.8$" } ],
            steps: [
              { reasoning: "Union $=0.6+0.5-0.3$.", working: "=0.8", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" } ],
            finalAnswer: "$0.8$", commonErrors: ["Adding $0.6+0.5$ without subtracting overlap."] },
        },
        {
          id: "ciem-u8-probability-problem-solving-q16", difficulty: "challenge", totalMarks: 9,
          stem: "A box has $8$ pens: $5$ black and $3$ red. Two pens are drawn without replacement.",
          parts: [
            { label: "a", prompt: "Find $P(\\text{both black})$.", marks: 3 },
            { label: "b", prompt: "Find $P(\\text{at least one red})$.", marks: 3 },
            { label: "c", prompt: "Find $P(\\text{second is black}\\,|\\,\\text{first is red})$.", marks: 3 } ],
          response: { type: "open" },
          markscheme: { principles: [ { kind: "technique", name: "Without replacement", statement: "Second draw probabilities depend on the first." }, { kind: "formula", name: "Conditional probability", statement: "$P(B_2\\,|\\,R_1)=\\frac{5}{7}$" } ],
            steps: [
              { part: "a", reasoning: "Both black $=\\frac58\\times\\frac47=\\frac{20}{56}=\\frac{5}{14}$.", working: "\\frac58\\times\\frac47", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify.", working: "=\\frac{5}{14}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the probability.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "At least one red $=1-P(\\text{both black})=1-\\frac{5}{14}=\\frac{9}{14}$.", working: "1-\\frac{5}{14}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "=\\frac{9}{14}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the probability.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Given first red, remaining are $5$ black and $2$ red out of $7$.", working: "\\frac57", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the probability.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Complete.", marks: 1, markCode: "A" } ],
            finalAnswer: "(a) $\\frac{5}{14}$ (b) $\\frac{9}{14}$ (c) $\\frac57$",
            commonErrors: ["In (c) using $\\frac58$ instead of adjusting for the removed red pen."] },
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
