import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "olm-u7-lesson-7-3",
  code: "7-3",
  title: "Venn Diagrams and Two-Way Tables",
  goal: "I CAN represent and interpret data using Venn diagrams and two-way tables.",
  standards: ["4024: statistics"],
  vocabulary: [
    { term: "Venn diagram", definition: "Overlapping circles showing set relationships." },
    { term: "Two-way table", definition: "Table showing two variables with marginal totals." },
    { term: "Intersection", definition: "Elements in both sets ($A\\cap B$)." },
    { term: "Union", definition: "Elements in either set ($A\\cup B$)." },
  ],
  concepts: [
    {
      id: "olm-u7-s3-venn",
      title: "Venn diagrams",
      skill: "Use Venn diagrams for probability at O Level.",
      lesson: {
        sections: [
          { heading: "Reading Venn diagrams", body: "Venn diagrams show set relationships visually. For two sets A and B: the overlap region is $A\\cap B$ (both), regions outside both circles are neither. The universal set $\\xi$ contains everything. To find probabilities, count elements in the relevant region and divide by total. 'Or' probabilities include the overlap — don't double-count it." },
          { heading: "Building them", body: "Start with the intersection count, then fill the 'only A' and 'only B' regions, then 'neither'. Check that all regions sum to the total. For probability questions, convert counts to probabilities by dividing by total — the diagram structure stays the same, just the numbers change." },
        ],
        keyFormulas: [
          { name: "Union", statement: "$n(A\\cup B)=n(A)+n(B)-n(A\\cap B)$" },
        ],
        workedExample: { problem: "Of 40 students, 25 study maths, 20 study physics, 12 study both. How many study neither?", solution: "$n(M\\cup P)=25+20-12=33$; neither $=40-33=7$." },
      },
      questions: [
        {
          id: "olm-u7-s3-ve-q1", difficulty: "foundation", totalMarks: 1,
          stem: "In a Venn diagram, the overlapping region represents…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Elements in both sets" }, { id: "b", text: "Elements in neither" }, { id: "c", text: "Elements in one set only" }, { id: "d", text: "The universal set" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Intersection", statement: "Both sets." }], steps: [{ reasoning: "Overlap = A∩B.", marks: 1, markCode: "A" }], finalAnswer: "Elements in both sets" },
        },
        {
          id: "olm-u7-s3-ve-q2", difficulty: "foundation", totalMarks: 2,
          stem: "30 students: 18 like tea, 15 like coffee, 8 like both. How many like neither?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Union", statement: "$n(A\\cup B)=n(A)+n(B)-n(A\\cap B)$." }], steps: [
            { reasoning: "$n(T\\cup C)=18+15-8=25$; neither $=30-25=5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "olm-u7-s3-ve-q3", difficulty: "core", totalMarks: 3,
          stem: "In a Venn diagram with sets A (40 elements) and B (30 elements), the intersection has 15 elements. Find n(A∪B).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Union", statement: "Add minus intersection." }], steps: [
            { reasoning: "$n(A\\cup B)=40+30-15=55$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 55.", marks: 1, markCode: "M" },
            { reasoning: "Only A = 25, only B = 15, neither = depends on universal set.", marks: 1, markCode: "A" },
          ], finalAnswer: "55" },
        },
        {
          id: "olm-u7-s3-ve-q4", difficulty: "core", totalMarks: 4,
          stem: "A class of 50: 30 play football, 25 play basketball, 15 play both. Find P(plays football or basketball).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Probability from Venn", statement: "Union count / total." }], steps: [
            { reasoning: "$n(F\\cup B)=30+25-15=40$.", marks: 1, markCode: "M" },
            { reasoning: "$P=\\frac{40}{50}=0.8$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.8 (or 80%).", marks: 1, markCode: "M" },
            { reasoning: "Or: $P(F)+P(B)-P(F\\cap B)=0.6+0.5-0.3=0.8$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.8" },
        },
      ],
    },
    {
      id: "olm-u7-s3-twoway",
      title: "Two-way tables",
      skill: "Interpret and use two-way tables at O Level.",
      lesson: {
        sections: [
          { heading: "Structure", body: "A two-way table shows counts for two variables simultaneously — e.g. gender vs subject choice, or pass/fail vs revision. Rows represent one variable, columns the other, with marginal totals on the edges. All entries must sum to the grand total — check this as a verification." },
          { heading: "Conditional probability", body: "Two-way tables give conditional probabilities directly: P(A|B) = (count in cell) ÷ (row or column total for B). For example, 'probability a student who revised passed' = (revised & passed) ÷ (total revised). Always identify which total is the condition — the denominator changes based on what you're conditioning on." },
        ],
        keyFormulas: [
          { name: "Conditional", statement: "$P(A|B)=\\frac{n(A\\cap B)}{n(B)}$" },
        ],
        workedExample: { problem: "Table: 60 students — 30 boys (18 pass, 12 fail), 30 girls (24 pass, 6 fail). Find P(pass|girl).", solution: "$P(\\text{pass}|\\text{girl})=\\frac{24}{30}=0.8$." },
      },
      questions: [
        {
          id: "olm-u7-s3-tw-q1", difficulty: "foundation", totalMarks: 1,
          stem: "In a two-way table, the marginal totals represent…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Row and column totals" }, { id: "b", text: "Individual cell values" }, { id: "c", text: "Percentages" }, { id: "d", text: "Averages" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Marginal", statement: "Edge totals." }], steps: [{ reasoning: "Standard term.", marks: 1, markCode: "A" }], finalAnswer: "Row and column totals" },
        },
        {
          id: "olm-u7-s3-tw-q2", difficulty: "foundation", totalMarks: 2,
          stem: "A table shows 40 students: 25 pass, 15 fail. What is the grand total?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Grand total", statement: "Sum of all." }], steps: [
            { reasoning: "$25+15=40$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 40.", marks: 1, markCode: "A" },
          ], finalAnswer: "40" },
        },
        {
          id: "olm-u7-s3-tw-q3", difficulty: "core", totalMarks: 3,
          stem: "Two-way table: 80 people — 45 men (30 employed, 15 unemployed), 35 women (20 employed, 15 unemployed). Find P(employed|woman).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Conditional probability", statement: "Cell ÷ condition total." }], steps: [
            { reasoning: "Condition: women (35); employed women: 20.", marks: 1, markCode: "M" },
            { reasoning: "$P=\\frac{20}{35}=\\frac47\\approx0.571$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac47$ or ≈0.57.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac47$" },
        },
        {
          id: "olm-u7-s3-tw-q4", difficulty: "core", totalMarks: 4,
          stem: "Using the same table, find P(unemployed|man).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Conditional", statement: "Different condition." }], steps: [
            { reasoning: "Condition: men (45); unemployed men: 15.", marks: 1, markCode: "M" },
            { reasoning: "$P=\\frac{15}{45}=\\frac13\\approx0.333$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $\\frac13$ or ≈0.33.", marks: 1, markCode: "M" },
            { reasoning: "Different from P(unemployed|woman)=$\\frac{15}{35}=\\frac37$ — condition matters.", marks: 1, markCode: "A" },
          ], finalAnswer: "$\\frac13$" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u7-s3-diag-notes", title: "Venn & two-way tables — notes", summary: "Set representations and conditional probability.",
      sections: [
        { heading: "Venn", body: "Overlap = both; union = either; $n(A\\cup B)=n(A)+n(B)-n(A\\cap B)$." },
        { heading: "Two-way", body: "Marginal totals on edges; $P(A|B)=$ cell ÷ condition total." },
      ] },
  ],
};
