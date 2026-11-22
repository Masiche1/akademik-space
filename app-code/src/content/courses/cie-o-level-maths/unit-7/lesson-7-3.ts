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
            { id: "a", text: "Elements in one set only" },
            { id: "b", text: "The universal set" },
            { id: "c", text: "Elements in both sets" },
            { id: "d", text: "Elements in neither" },
          ], correctChoiceId: "c" },
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
        {
          id: "olm-u7-s3-ve-q5", difficulty: "foundation", totalMarks: 1,
          stem: "n(A∪B) = …",
          response: { type: "mcq", choices: [
            { id: "a", text: "$n(A)+n(B)-n(A\\cap B)$" },
            { id: "b", text: "$n(A)-n(B)$" },
            { id: "c", text: "$n(A)+n(B)+n(A\\cap B)$" },
            { id: "d", text: "$n(A)\\times n(B)$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Union", statement: "Add minus overlap." }], steps: [{ reasoning: "Standard inclusion-exclusion.", marks: 1, markCode: "A" }], finalAnswer: "$n(A)+n(B)-n(A\\cap B)$" },
        },
        {
          id: "olm-u7-s3-ve-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Of 40 students, 25 study maths, 20 study physics and 12 study both. How many study neither subject?",
          response: { type: "numeric", parts: [{ label: "a", answer: 7 }] },
          markscheme: { principles: [{ kind: "formula", name: "Union", statement: "$n(A\\cup B)=n(A)+n(B)-n(A\\cap B)$." }], steps: [
            { reasoning: "$n(M\\cup P)=25+20-12=33$; neither $=40-33=7$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 7.", marks: 1, markCode: "A" },
          ], finalAnswer: "7" },
        },
        {
          id: "olm-u7-s3-ve-q7", difficulty: "core", totalMarks: 1,
          stem: "n(A∩B) represents…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Elements in A only" }, { id: "b", text: "Elements in B only" }, { id: "c", text: "Elements in both A and B" }, { id: "d", text: "Elements in neither" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Intersection", statement: "Both sets." }], steps: [{ reasoning: "Overlap region.", marks: 1, markCode: "A" }], finalAnswer: "Elements in both A and B" },
        },
        {
          id: "olm-u7-s3-ve-q8", difficulty: "core", totalMarks: 3,
          stem: "Of 60 students, 35 passed English and 30 passed Maths; 20 passed both. How many passed neither?",
          response: { type: "numeric", parts: [{ label: "a", answer: 15 }] },
          markscheme: { principles: [{ kind: "formula", name: "Union", statement: "Add minus overlap." }], steps: [
            { reasoning: "$n(E\\cup M)=35+30-20=45$ passed at least one.", marks: 1, markCode: "M" },
            { reasoning: "Neither $=60-45=15$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 15.", marks: 1, markCode: "A" },
          ], finalAnswer: "15" },
        },
        {
          id: "olm-u7-s3-ve-q9", difficulty: "core", totalMarks: 3,
          stem: "A class of 40 students: 24 like pop music, 18 like rock music and 10 like both. Find the probability that a student likes neither.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Probability from Venn", statement: "Union count / total." }], steps: [
            { reasoning: "$n(P\\cup R)=24+18-10=32$ like at least one.", marks: 1, markCode: "M" },
            { reasoning: "Neither $=40-32=8$ → $P=\\frac8{40}=0.2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.2.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.2" },
        },
        {
          id: "olm-u7-s3-ve-q10", difficulty: "core", totalMarks: 2,
          stem: "In a Venn diagram, n(A)=50, n(B)=40 and n(A∩B)=15. The universal set has 80 elements. Find n(neither).",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "formula", name: "Union", statement: "Add minus overlap." }], steps: [
            { reasoning: "$n(A\\cup B)=50+40-15=75$; neither $=80-75=5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "olm-u7-s3-ve-q11", difficulty: "core", totalMarks: 1,
          stem: "In a Venn diagram, the region outside both circles represents…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Neither A nor B" },
            { id: "b", text: "A∩B" },
            { id: "c", text: "The universal set" },
            { id: "d", text: "A∪B" },
          ], aorrectChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Outside both", statement: "Complement of union." }], steps: [{ reasoning: "Outside both circles = neither.", marks: 1, markCode: "A" }], finalAnswer: "Neither A nor B" },
        },
        {
          id: "olm-u7-s3-ve-q12", difficulty: "challenge", totalMarks: 4,
          stem: "Of 100 people surveyed, 60 own a car, 45 own a bicycle and 25 own both. Find the probability that a person owns neither.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Probability from Venn", statement: "Union count / total." }], steps: [
            { reasoning: "$n(C\\cup B)=60+45-25=80$ own at least one.", marks: 1, markCode: "M" },
            { reasoning: "Neither $=100-80=20$ → $P=\\frac{20}{100}=0.2$.", marks: 1, markCode: "M" },
            { reasoning: "Check regions: car only 35, bike only 20, both 25, neither 20 → total 100 ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.2.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.2" },
        },
        {
          id: "olm-u7-s3-ve-q13", difficulty: "foundation", totalMarks: 2,
          stem: "Of 50 students, 30 study science and 25 study art; 10 study both. How many study science only?",
          response: { type: "numeric", parts: [{ label: "a", answer: 20 }] },
          markscheme: { principles: [{ kind: "technique", name: "Only one set", statement: "n(A) − n(A∩B)." }], steps: [
            { reasoning: "Science only $=30-10=20$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 20.", marks: 1, markCode: "A" },
          ], finalAnswer: "20" },
        },
        {
          id: "olm-u7-s3-ve-q14", difficulty: "core", totalMarks: 3,
          stem: "Of 80 people, 50 like tea, 40 like coffee and 20 like neither. Find the probability that a person likes both tea and coffee.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Intersection via union", statement: "n(A)+n(B)−n(∪)=n(∩)." }], steps: [
            { reasoning: "$n(T\\cup C)=80-20=60$ like at least one.", marks: 1, markCode: "M" },
            { reasoning: "$n(T\\cap C)=50+40-60=30$ → $P=\\frac{30}{80}=0.375$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.375.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.375" },
        },
        {
          id: "olm-u7-s3-ve-q15", difficulty: "core", totalMarks: 1,
          stem: "If n(A∩B) = 0, the sets A and B are said to be…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Subsets" },
            { id: "b", text: "Mutually exclusive (disjoint)" },
            { id: "c", text: "Identical" },
            { id: "d", text: "Infinite" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Disjoint", statement: "No common elements." }], steps: [{ reasoning: "Empty intersection → disjoint.", marks: 1, markCode: "A" }], finalAnswer: "Mutually exclusive (disjoint)" },
        },
        {
          id: "olm-u7-s3-ve-q16", difficulty: "challenge", totalMarks: 4,
          stem: "In a Venn diagram with universal set 200, P(A)=0.4, P(B)=0.3 and P(A∩B)=0.1. Find the probability that an element is in neither set.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Union probability", statement: "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$." }], steps: [
            { reasoning: "$P(A\\cup B)=0.4+0.3-0.1=0.6$.", marks: 1, markCode: "M" },
            { reasoning: "$P(\\text{neither})=1-0.6=0.4$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $P(A\\text{ only})=0.3$, $P(B\\text{ only})=0.2$, $P(\\text{both})=0.1$ → sum $0.6$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.4.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.4" },
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
            { id: "a", text: "Individual cell values" },
            { id: "b", text: "Row and column totals" },
            { id: "c", text: "Percentages" },
            { id: "d", text: "Averages" },
          ], correctChoiceId: "b" },
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
        {
          id: "olm-u7-s3-tw-q5", difficulty: "foundation", totalMarks: 1,
          stem: "In a two-way table, each individual cell represents…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The grand total" },
            { id: "b", text: "The row total" },
            { id: "c", text: "The count for one combination of the two variables" },
            { id: "d", text: "The column total" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Cell", statement: "One combination." }], steps: [{ reasoning: "Cells show joint counts.", marks: 1, markCode: "A" }], finalAnswer: "The count for one combination of the two variables" },
        },
        {
          id: "olm-u7-s3-tw-q6", difficulty: "foundation", totalMarks: 2,
          stem: "A survey of 50 students: 30 study art (18 pass, 12 fail) and 20 study music (10 pass, 10 fail). Find the total number who pass.",
          response: { type: "numeric", parts: [{ label: "a", answer: 28 }] },
          markscheme: { principles: [{ kind: "property", name: "Column total", statement: "Sum down a column." }], steps: [
            { reasoning: "Pass total $=18+10=28$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 28.", marks: 1, markCode: "A" },
          ], finalAnswer: "28" },
        },
        {
          id: "olm-u7-s3-tw-q7", difficulty: "core", totalMarks: 3,
          stem: "Using the table of 60 students — 30 boys (18 pass, 12 fail) and 30 girls (24 pass, 6 fail) — find P(fail | boy).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Conditional probability", statement: "Cell ÷ condition total." }], steps: [
            { reasoning: "Condition: boys (30); boys who fail: 12.", marks: 1, markCode: "M" },
            { reasoning: "$P(\\text{fail}|\\text{boy})=\\frac{12}{30}=0.4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.4.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.4" },
        },
        {
          id: "olm-u7-s3-tw-q8", difficulty: "core", totalMarks: 1,
          stem: "To find P(pass | revised) from a two-way table, the denominator is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "The total number who revised" },
            { id: "b", text: "The grand total" },
            { id: "c", text: "The total number who passed" },
            { id: "d", text: "The total number who failed" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Conditional", statement: "Condition sets the denominator." }], steps: [{ reasoning: "Condition is 'revised'.", marks: 1, markCode: "A" }], finalAnswer: "The total number who revised" },
        },
        {
          id: "olm-u7-s3-tw-q9", difficulty: "core", totalMarks: 3,
          stem: "A two-way table shows 100 people: 60 left-handed (30 wear glasses, 30 do not) and 40 right-handed (10 wear glasses, 30 do not). Find P(wear glasses | right-handed).",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.25 }] },
          markscheme: { principles: [{ kind: "technique", name: "Conditional probability", statement: "Cell ÷ condition total." }], steps: [
            { reasoning: "Condition: right-handed (40); glasses wearers: 10.", marks: 1, markCode: "M" },
            { reasoning: "$P=\\frac{10}{40}=0.25$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.25.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.25" },
        },
        {
          id: "olm-u7-s3-tw-q10", difficulty: "challenge", totalMarks: 4,
          stem: "A company has 200 employees: 120 in department A (72 work from home, 48 in the office) and 80 in department B (40 work from home, 40 in the office). Find P(work from home | department B) and P(work from home).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Conditional probability", statement: "Cell ÷ condition total." }], steps: [
            { reasoning: "Condition: department B has 80; home workers in B: 40.", marks: 1, markCode: "M" },
            { reasoning: "$P(\\text{home}|B)=\\frac{40}{80}=0.5$.", marks: 1, markCode: "M" },
            { reasoning: "Total home workers: $72+40=112$ → $P(\\text{home})=\\frac{112}{200}=0.56$.", marks: 1, markCode: "M" },
            { reasoning: "Answers: 0.5 and 0.56.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.5 and 0.56" },
        },
        {
          id: "olm-u7-s3-tw-q11", difficulty: "foundation", totalMarks: 1,
          stem: "The grand total in a two-way table is found by…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Adding all the cell entries" },
            { id: "b", text: "Subtracting the column totals from the row totals" },
            { id: "c", text: "Multiplying the row and column totals" },
            { id: "d", text: "Adding all the row and column totals" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Grand total", statement: "Sum of all cells." }], steps: [{ reasoning: "Cells sum to the grand total.", marks: 1, markCode: "A" }], finalAnswer: "Adding all the cell entries" },
        },
        {
          id: "olm-u7-s3-tw-q12", difficulty: "core", totalMarks: 3,
          stem: "A two-way table for 120 students crosses revision (yes/no) with result (pass/fail): 50 revised and passed, 20 revised and failed and 30 did not revise and passed. How many did not revise and failed?",
          response: { type: "numeric", parts: [{ label: "a", answer: 20 }] },
          markscheme: { principles: [{ kind: "property", name: "Grand total", statement: "All cells sum to total." }], steps: [
            { reasoning: "Known cells: $50+20+30=100$.", marks: 1, markCode: "M" },
            { reasoning: "Missing cell $=120-100=20$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 20.", marks: 1, markCode: "A" },
          ], finalAnswer: "20" },
        },
        {
          id: "olm-u7-s3-tw-q13", difficulty: "core", totalMarks: 1,
          stem: "P(A|B) from a two-way table is calculated as…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{\\text{cell for }A\\cap B}{\\text{grand total}}$" },
            { id: "b", text: "$\\frac{\\text{cell for }A\\cap B}{\\text{marginal total for }B}$" },
            { id: "c", text: "$\\frac{\\text{cell for }A\\cap B}{\\text{marginal total for }A}$" },
            { id: "d", text: "$\\frac{\\text{marginal total for }A}{\\text{marginal total for }B}$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "Conditional", statement: "$P(A|B)=\\frac{n(A\\cap B)}{n(B)}$." }], steps: [{ reasoning: "Cell over condition total.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{\\text{cell for }A\\cap B}{\\text{marginal total for }B}$" },
        },
        {
          id: "olm-u7-s3-tw-q14", difficulty: "core", totalMarks: 1,
          stem: "A table shows 150 customers: 90 female (55 buy, 35 do not) and 60 male (30 buy, 30 do not). Which expression gives P(buy | male)?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{30}{150}$" },
            { id: "b", text: "$\\frac{60}{150}$" },
            { id: "c", text: "$\\frac{30}{60}$" },
            { id: "d", text: "$\\frac{30}{90}$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Conditional", statement: "Cell ÷ condition total." }], steps: [{ reasoning: "Buy & male cell is 30; male total is 60.", marks: 1, markCode: "A" }], finalAnswer: "$\\frac{30}{60}$" },
        },
        {
          id: "olm-u7-s3-tw-q15", difficulty: "challenge", totalMarks: 4,
          stem: "A two-way table shows 200 students: 110 study biology (66 pass, 44 fail) and 90 study chemistry (54 pass, 36 fail). Find P(pass | chemistry).",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.6 }] },
          markscheme: { principles: [{ kind: "technique", name: "Conditional probability", statement: "Cell ÷ condition total." }], steps: [
            { reasoning: "Condition: chemistry students total 90; those who pass: 54.", marks: 1, markCode: "M" },
            { reasoning: "$P=\\frac{54}{90}=\\frac35=0.6$.", marks: 1, markCode: "M" },
            { reasoning: "Check: $\\frac{54}{90}=0.6$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 0.6.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.6" },
        },
        {
          id: "olm-u7-s3-tw-q16", difficulty: "challenge", totalMarks: 5,
          stem: "A survey of 250 students: 140 girls (90 pass, 50 fail) and 110 boys (66 pass, 44 fail). Find P(pass), P(pass | girl) and P(fail | boy).",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Conditional probability", statement: "Cell ÷ condition total." }], steps: [
            { reasoning: "Pass total: $90+66=156$ → $P(\\text{pass})=\\frac{156}{250}=0.624$.", marks: 1, markCode: "M" },
            { reasoning: "$P(\\text{pass}|\\text{girl})=\\frac{90}{140}\\approx0.643$.", marks: 1, markCode: "M" },
            { reasoning: "$P(\\text{fail}|\\text{boy})=\\frac{44}{110}=0.4$.", marks: 1, markCode: "M" },
            { reasoning: "Check: pass $156$ + fail $94$ $=250$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answers: 0.624, ≈0.643 and 0.4.", marks: 1, markCode: "A" },
          ], finalAnswer: "0.624, 0.643 and 0.4" },
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
