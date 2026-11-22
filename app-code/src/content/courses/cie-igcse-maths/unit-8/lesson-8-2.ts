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
              { id: "b", text: "The grand total" },
              { id: "c", text: "The total for one category" },
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
        {
          id: "ciem-u8-two-way-tables-q5", difficulty: "foundation", totalMarks: 1,
          stem: "In a two-way table, what does an interior cell represent?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The frequency with both attributes" },
            { id: "b", text: "The column total" },
            { id: "c", text: "The row total" },
            { id: "d", text: "The grand total" }
 ],
            correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "definition", name: "Joint frequency", statement: "Interior cells count items with both attributes." } ],
            steps: [ { reasoning: "Recall the table structure.", working: "\\text{joint frequency}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(a)** Frequency with both attributes", commonErrors: ["Confusing with totals."] },
        },
        {
          id: "ciem-u8-two-way-tables-q6", difficulty: "core", totalMarks: 1,
          stem: "Of $80$ students, $45$ study maths and $30$ study science. What is $P(\\text{maths})$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$\\frac{45}{80}$" },
            { id: "b", text: "$\\frac{30}{80}$" },
            { id: "c", text: "$\\frac{80}{45}$" },
            { id: "d", text: "$\\frac{45}{30}$" }
 ],
            correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "formula", name: "Marginal probability", statement: "$P=\\frac{\\text{category frequency}}{\\text{grand total}}$" } ],
            steps: [ { reasoning: "Use the maths total over the grand total.", working: "\\frac{45}{80}", marks: 1, markCode: "M" } ],
            finalAnswer: "**(a)** $\\frac{45}{80}$", commonErrors: ["Using the wrong denominator."] },
        },
        {
          id: "ciem-u8-two-way-tables-q7", difficulty: "core", totalMarks: 3,
          stem: "In a survey of $80$ students, $45$ study maths and $15$ study both maths and science. Find $P(\\text{science}\\,|\\,\\text{maths})$.",
          response: { type: "numeric", parts: [ { label: "Probability", answer: 0.333, tolerance: 0.001 }] },
          markscheme: { principles: [ { kind: "formula", name: "Conditional probability", statement: "$P(A\\,|\\,B)=\\frac{\\text{joint}}{\\text{total of }B}$" } ],
            steps: [
              { reasoning: "Given maths, restrict to the $45$ maths students; $15$ also study science.", working: "\\frac{15}{45}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "=\\frac13", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and state.", marks: 1, markCode: "A" } ],
            finalAnswer: "$\\frac13\\approx0.333$", commonErrors: ["Dividing by $80$."] },
        },
        {
          id: "ciem-u8-two-way-tables-q8", difficulty: "challenge", totalMarks: 1,
          stem: "In a two-way table, a row total is $70$ and the grand total is $200$. What is the probability of that row category?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$70$" },
            { id: "b", text: "$\\frac{200}{70}$" },
            { id: "c", text: "$0.35$" },
            { id: "d", text: "$0.7$" }
 ],
            correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "formula", name: "Marginal probability", statement: "$P=\\frac{\\text{row total}}{\\text{grand total}}$" } ],
            steps: [ { reasoning: "Divide the row total by the grand total.", working: "\\frac{70}{200}=0.35", marks: 1, markCode: "M" } ],
            finalAnswer: "**(c)** $0.35$", commonErrors: ["Giving the frequency not the probability."] },
        },
        {
          id: "ciem-u8-two-way-tables-q9", difficulty: "core", totalMarks: 3,
          stem: "Of $120$ people, $70$ drink tea, $50$ drink coffee and $20$ drink both. Find $P(\\text{tea or coffee})$.",
          response: { type: "numeric", parts: [ { label: "Probability", answer: 0.833, tolerance: 0.001 }] },
          markscheme: { principles: [ { kind: "formula", name: "Union", statement: "$|T\\cup C|=70+50-20=100$." } ],
            steps: [
              { reasoning: "Use inclusion–exclusion for the union.", working: "70+50-20=100", marks: 1, markCode: "M" },
              { reasoning: "Form the probability.", working: "\\frac{100}{120}", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" } ],
            finalAnswer: "$\\frac56\\approx0.833$", commonErrors: ["Adding $70+50$ without subtracting overlap."] },
        },
        {
          id: "ciem-u8-two-way-tables-q10", difficulty: "foundation", totalMarks: 2,
          stem: "Of $50$ students, $30$ study maths and $20$ study science, with $10$ studying both. How many study neither?",
          response: { type: "numeric", parts: [ { label: "Neither", answer: 10 }] },
          markscheme: { principles: [ { kind: "formula", name: "Union", statement: "$|M\\cup S|=30+20-10=40$." } ],
            steps: [
              { reasoning: "Union $=40$; neither $=50-40$.", working: "=10", marks: 1, markCode: "M" },
              { reasoning: "State the number.", marks: 1, markCode: "A" } ],
            finalAnswer: "$10$ students", commonErrors: ["Adding $30+20$ without subtracting overlap."] },
        },
        {
          id: "ciem-u8-two-way-tables-q11", difficulty: "challenge", totalMarks: 1,
          stem: "To calculate $P(A\\,|\\,B)$ from a two-way table, which total should be used as the denominator?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The total for $B$" },
            { id: "b", text: "The total for $A$" },
            { id: "c", text: "The grand total" },
            { id: "d", text: "The joint cell" }
 ],
            correctChoiceIa: "d" },
          markscheme: { principles: [ { kind: "formula", name: "Conditional probability", statement: "$P(A\\,|\\,B)=\\frac{\\text{joint}}{\\text{total of }B}$" } ],
            steps: [ { reasoning: "Condition on $B$'s row or column total.", working: "\\text{total of }B", marks: 1, markCode: "B" } ],
            finalAnswer: "**(d)** The total for $B$", commonErrors: ["Using the grand total."] },
        },
        {
          id: "ciem-u8-two-way-tables-q12", difficulty: "core", totalMarks: 4,
          stem: "Of $60$ students, $35$ play hockey, $25$ play cricket and $10$ play both.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Union", statement: "$|H\\cup C|=35+25-10=50$." }, { kind: "formula", name: "Conditional probability", statement: "$P(C\\,|\\,H)=\\frac{10}{35}$." } ],
            steps: [
              { reasoning: "Find the union and neither.", working: "60-50=10", marks: 1, markCode: "M" },
              { reasoning: "State the neither count.", marks: 1, markCode: "A" },
              { reasoning: "Find $P(H)$.", working: "\\frac{35}{60}=\\frac7{12}", marks: 1, markCode: "M" },
              { reasoning: "Find $P(C\\,|\\,H)=\\frac{10}{35}=\\frac27$.", marks: 1, markCode: "A" } ],
            finalAnswer: "Neither $=10$, $P(H)=\\frac7{12}$, $P(C\\,|\\,H)=\\frac27$",
            commonErrors: ["Using $60$ as denominator for the conditional probability."] },
        },
        {
          id: "ciem-u8-two-way-tables-q13", difficulty: "challenge", totalMarks: 3,
          stem: "In a group of $90$ people, $50$ are club members, $30$ are volunteers and $20$ are both. Find $P(\\text{volunteer}\\,|\\,\\text{member})$.",
          response: { type: "numeric", parts: [ { label: "Probability", answer: 0.4 }] },
          markscheme: { principles: [ { kind: "formula", name: "Conditional probability", statement: "$P(V\\,|\\,M)=\\frac{\\text{both}}{\\text{members}}$" } ],
            steps: [
              { reasoning: "Given member, restrict to $50$; both $=20$.", working: "\\frac{20}{50}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "=0.4", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" } ],
            finalAnswer: "$0.4$", commonErrors: ["Dividing by $90$."] },
        },
        {
          id: "ciem-u8-two-way-tables-q14", difficulty: "foundation", totalMarks: 3,
          stem: "Explain the difference between a marginal probability and a joint probability using $P(\\text{maths})$ and $P(\\text{maths and science})$.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "definition", name: "Marginal vs joint", statement: "Marginal uses one total; joint uses the both-cell." } ],
            steps: [
              { reasoning: "Marginal uses the category total.", working: "P(\\text{maths})=\\frac{\\text{maths total}}{n}", marks: 1, markCode: "M" },
              { reasoning: "Joint uses the overlap cell.", working: "P(\\text{both})=\\frac{\\text{joint cell}}{n}", marks: 1, markCode: "M" },
              { reasoning: "State the distinction.", marks: 1, markCode: "A" } ],
            finalAnswer: "Marginal is one attribute's total over $n$; joint is the both-cell over $n$.", commonErrors: ["Using the same numerator for both."] },
        },
        {
          id: "ciem-u8-two-way-tables-q15", difficulty: "core", totalMarks: 1,
          stem: "Which event does $P(A\\,|\\,B)$ condition on?",
          response: { type: "mcq", choices: [
            { id: "a", text: "The complement of $B$" },
            { id: "b", text: "$A\\cap B$" },
            { id: "c", text: "$B$" },
            { id: "d", text: "$A$" }
 ],
            correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "definition", name: "Conditional probability", statement: "The condition is the event after the bar." } ],
            steps: [ { reasoning: "Read $P(A\\,|\\,B)$ as probability of $A$ given $B$.", working: "\\text{given }B", marks: 1, markCode: "B" } ],
            finalAnswer: "**(b)** $B$", commonErrors: ["Reversing the condition."] },
        },
        {
          id: "ciem-u8-two-way-tables-q16", difficulty: "challenge", totalMarks: 8,
          stem: "A survey of $150$ people found that $80$ own a car, $60$ own a bike and $40$ own both.",
          parts: [
            { label: "a", prompt: "Find how many own neither.", marks: 3 },
            { label: "b", prompt: "Find $P(\\text{car or bike})$.", marks: 2 },
            { label: "c", prompt: "Find $P(\\text{bike}\\,|\\,\\text{car})$.", marks: 3 } ],
          response: { type: "open" },
          markscheme: { principles: [ { kind: "formula", name: "Union", statement: "$|C\\cup B|=80+60-40=100$." }, { kind: "formula", name: "Conditional probability", statement: "$P(B\\,|\\,C)=\\frac{40}{80}$." } ],
            steps: [
              { part: "a", reasoning: "Only-car $=40$, only-bike $=20$, both $=40$; union $=100$.", working: "150-100=50", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the neither count.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Give the number.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Car or bike $=100$.", working: "\\frac{100}{150}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the probability.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Given car owner, restrict to $80$; both $=40$.", working: "\\frac{40}{80}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify.", working: "=0.5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the probability.", marks: 1, markCode: "A" } ],
            finalAnswer: "(a) $50$ (b) $\\frac23$ (c) $0.5$",
            commonErrors: ["In (c) dividing by $150$ or $60$."] },
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
              { id: "a", text: "Probability of $B$ given that $A$ has occurred" },
              { id: "b", text: "Probability of $A$ given that $B$ has occurred" },
              { id: "c", text: "Probability of $A$ or $B$" },
              { id: "d", text: "Probability of both $A$ and $B$" },
            ],
            correctChoiceId: "b",
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
        {
          id: "ciem-u8-conditional-probability-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which formula gives $P(A\\,|\\,B)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$P(A)P(B)$" },
            { id: "b", text: "$\\frac{P(A\\cap B)}{P(A)}$" },
            { id: "c", text: "$\\frac{P(A\\cap B)}{P(B)}$" },
            { id: "d", text: "$P(A\\cup B)$" }
 ],
            correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "formula", name: "Conditional probability", statement: "$P(A\\,|\\,B)=\\frac{P(A\\cap B)}{P(B)}$" } ],
            steps: [ { reasoning: "Recall the formula.", working: "\\frac{P(A\\cap B)}{P(B)}", marks: 1, markCode: "B" } ],
            finalAnswer: "**(a)** $\\frac{P(A\\cap B)}{P(B)}$", commonErrors: ["Dividing by $P(A)$."] },
        },
        {
          id: "ciem-u8-conditional-probability-q6", difficulty: "core", totalMarks: 1,
          stem: "$P(A)=0.4$, $P(B)=0.5$ and $P(A\\cap B)=0.2$. Are $A$ and $B$ independent?",
          response: { type: "mcq", choices: [
            { id: "a", text: "No, because $P(A\\,|\\,B)\\neq P(A)$" },
            { id: "b", text: "No, because $P(A\\cap B)$ is too small" },
            { id: "c", text: "Yes, because $P(A)P(B)=0.2=P(A\\cap B)$" },
            { id: "d", text: "Yes, because $P(A)+P(B)=0.9$" }
 ],
            correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "property", name: "Independence", statement: "$A,B$ independent if $P(A\\cap B)=P(A)P(B)$." } ],
            steps: [ { reasoning: "Compare $0.4\\times0.5=0.2$ with $P(A\\cap B)=0.2$.", working: "0.2=0.2", marks: 1, markCode: "M" } ],
            finalAnswer: "**(b)** Yes, they are independent", commonErrors: ["Using addition instead of multiplication."] },
        },
        {
          id: "ciem-u8-conditional-probability-q7", difficulty: "core", totalMarks: 3,
          stem: "$P(A\\cap B)=0.18$ and $P(B)=0.45$. Find $P(A\\,|\\,B)$.",
          response: { type: "numeric", parts: [ { label: "Probability", answer: 0.4 }] },
          markscheme: { principles: [ { kind: "formula", name: "Conditional probability", statement: "$P(A\\,|\\,B)=\\frac{P(A\\cap B)}{P(B)}$" } ],
            steps: [
              { reasoning: "Substitute into the formula.", working: "\\frac{0.18}{0.45}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=0.4", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" } ],
            finalAnswer: "$0.4$", commonErrors: ["Dividing by $P(A)$."] },
        },
        {
          id: "ciem-u8-conditional-probability-q8", difficulty: "challenge", totalMarks: 1,
          stem: "$P(A)=0.5$, $P(B)=0.6$ and $P(A\\cap B)=0.2$. Which statement is correct?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Independent, since $0.5\\times0.6=0.3$" },
            { id: "b", text: "Independent, since $0.5+0.6\\neq0.2$" },
            { id: "c", text: "Dependent, since $P(A\\cap B)=0.2\\neq0.3$" },
            { id: "d", text: "Dependent, since $P(A)+P(B)>1$" }
 ],
            correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "property", name: "Independence", statement: "If $P(A\\cap B)\\neq P(A)P(B)$ the events are dependent." } ],
            steps: [ { reasoning: "Compare $0.5\\times0.6=0.3$ with $0.2$.", working: "0.2\\neq0.3", marks: 1, markCode: "M" } ],
            finalAnswer: "**(c)** Dependent", commonErrors: ["Thinking equal marginals imply independence."] },
        },
        {
          id: "ciem-u8-conditional-probability-q9", difficulty: "core", totalMarks: 3,
          stem: "$P(A\\,|\\,B)=0.3$ and $P(B)=0.5$. Find $P(A\\cap B)$.",
          response: { type: "numeric", parts: [ { label: "Probability", answer: 0.15 }] },
          markscheme: { principles: [ { kind: "formula", name: "Conditional probability", statement: "$P(A\\cap B)=P(A\\,|\\,B)P(B)$" } ],
            steps: [
              { reasoning: "Rearrange the conditional formula.", working: "P(A\\cap B)=0.3\\times0.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=0.15", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" } ],
            finalAnswer: "$0.15$", commonErrors: ["Dividing instead of multiplying."] },
        },
        {
          id: "ciem-u8-conditional-probability-q10", difficulty: "foundation", totalMarks: 2,
          stem: "$P(A\\cap B)=0.24$ and $P(A)=0.6$. Find $P(B\\,|\\,A)$.",
          response: { type: "numeric", parts: [ { label: "Probability", answer: 0.4 }] },
          markscheme: { principles: [ { kind: "formula", name: "Conditional probability", statement: "$P(B\\,|\\,A)=\\frac{P(A\\cap B)}{P(A)}$" } ],
            steps: [
              { reasoning: "Divide the joint probability by $P(A)$.", working: "\\frac{0.24}{0.6}", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" } ],
            finalAnswer: "$0.4$", commonErrors: ["Dividing by $P(B)$."] },
        },
        {
          id: "ciem-u8-conditional-probability-q11", difficulty: "challenge", totalMarks: 1,
          stem: "If $A$ and $B$ are independent, what does $P(A\\,|\\,B)$ equal?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$1-P(A)$" },
            { id: "b", text: "$P(A)$" },
            { id: "c", text: "$P(A\\cap B)$" },
            { id: "d", text: "$P(B)$" }
 ],
            correctChoiceIb: "d" },
          markscheme: { principles: [ { kind: "property", name: "Independence", statement: "For independent events, $P(A\\,|\\,B)=P(A)$." } ],
            steps: [ { reasoning: "Recall the independence property.", working: "P(A|B)=P(A)", marks: 1, markCode: "B" } ],
            finalAnswer: "**(d)** $P(A)$", commonErrors: ["Thinking it equals $P(B)$."] },
        },
        {
          id: "ciem-u8-conditional-probability-q12", difficulty: "core", totalMarks: 4,
          stem: "A bag contains $4$ red and $5$ blue counters. Two counters are drawn without replacement. Find $P(\\text{second is red}\\,|\\,\\text{first is blue})$.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "technique", name: "Without replacement", statement: "After a blue is drawn, $4$ red remain out of $8$." } ],
            steps: [
              { reasoning: "Given first blue, remaining counters are $4$ red and $4$ blue.", working: "4\\text{ red},\\ 8\\text{ total}", marks: 1, markCode: "M" },
              { reasoning: "Form the conditional probability.", working: "\\frac48", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "=\\frac12", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" } ],
            finalAnswer: "$\\frac12=0.5$", commonErrors: ["Keeping $5$ blue counters or dividing by $9$."] },
        },
        {
          id: "ciem-u8-conditional-probability-q13", difficulty: "challenge", totalMarks: 3,
          stem: "$P(A)=0.7$, $P(B)=0.2$ and $P(A\\cap B)=0.14$. Find $P(A\\,|\\,B)$.",
          response: { type: "numeric", parts: [ { label: "Probability", answer: 0.7 }] },
          markscheme: { principles: [ { kind: "formula", name: "Conditional probability", statement: "$P(A\\,|\\,B)=\\frac{P(A\\cap B)}{P(B)}$" }, { kind: "property", name: "Independence", statement: "$0.7\\times0.2=0.14$, so independent." } ],
            steps: [
              { reasoning: "Check independence: $0.7\\times0.2=0.14=P(A\\cap B)$.", working: "0.14=0.14", marks: 1, markCode: "M" },
              { reasoning: "For independent events $P(A\\,|\\,B)=P(A)$.", working: "=0.7", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" } ],
            finalAnswer: "$0.7$", commonErrors: ["Not noticing independence."] },
        },
        {
          id: "ciem-u8-conditional-probability-q14", difficulty: "foundation", totalMarks: 3,
          stem: "Explain why $P(A\\,|\\,B)$ is called a conditional probability.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "definition", name: "Conditional probability", statement: "The sample space is restricted to outcomes where $B$ occurs." } ],
            steps: [
              { reasoning: "State that $B$ is given.", working: "\\text{given }B", marks: 1, markCode: "M" },
              { reasoning: "Explain the restricted sample space.", working: "\\text{only }B\\text{ outcomes}", marks: 1, markCode: "M" },
              { reasoning: "Link to the formula.", marks: 1, markCode: "A" } ],
            finalAnswer: "It is the probability of $A$ when the sample space is restricted to $B$.", commonErrors: ["Defining it as joint probability."] },
        },
        {
          id: "ciem-u8-conditional-probability-q15", difficulty: "core", totalMarks: 1,
          stem: "Which expression equals $P(A\\cap B)$?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$P(A)+P(B)$" },
            { id: "b", text: "$P(A\\,|\\,B)$" },
            { id: "c", text: "$P(B\\,|\\,A)$" },
            { id: "d", text: "$P(A\\,|\\,B)P(B)$" }
 ],
            correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "formula", name: "Joint from conditional", statement: "$P(A\\cap B)=P(A\\,|\\,B)P(B)$" } ],
            steps: [ { reasoning: "Rearrange the conditional formula.", working: "P(A|B)P(B)", marks: 1, markCode: "M" } ],
            finalAnswer: "**(b)** $P(A\\,|\\,B)P(B)$", commonErrors: ["Dividing by $P(B)$."] },
        },
        {
          id: "ciem-u8-conditional-probability-q16", difficulty: "challenge", totalMarks: 8,
          stem: "$P(A)=0.5$, $P(B)=0.4$ and $P(A\\cap B)=0.2$.",
          parts: [
            { label: "a", prompt: "Test whether $A$ and $B$ are independent.", marks: 3 },
            { label: "b", prompt: "Find $P(A\\,|\\,B)$.", marks: 2 },
            { label: "c", prompt: "Find $P(A'\\cap B)$.", marks: 3 } ],
          response: { type: "open" },
          markscheme: { principles: [ { kind: "property", name: "Independence", statement: "$P(A)P(B)=0.2=P(A\\cap B)$." }, { kind: "formula", name: "Conditional probability", statement: "$P(A\\,|\\,B)=\\frac{P(A\\cap B)}{P(B)}$" } ],
            steps: [
              { part: "a", reasoning: "Compute $P(A)P(B)$.", working: "0.5\\times0.4=0.2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Compare with $P(A\\cap B)=0.2$.", working: "0.2=0.2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State independent.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use the conditional formula.", working: "\\frac{0.2}{0.4}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the probability.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use $P(A'\\cap B)=P(B)-P(A\\cap B)$.", working: "0.4-0.2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "=0.2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the probability.", marks: 1, markCode: "A" } ],
            finalAnswer: "(a) independent (b) $0.5$ (c) $0.2$",
            commonErrors: ["In (c) using $P(A')P(B)$ assuming independence incorrectly."] },
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
