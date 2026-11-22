import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "aasl-u4-lesson-4-2",
  code: "4-2",
  title: "Probability",
  goal: "I CAN use Venn and tree diagrams, conditional probability and independence, and work with discrete random variables and expected value.",
  standards: ["SL 4.5", "SL 4.6", "SL 4.7"],
  vocabulary: [
    { term: "Conditional probability", definition: "The probability of $A$ given that $B$ has occurred: $\\mathrm{P}(A\\mid B)=\\dfrac{\\mathrm{P}(A\\cap B)}{\\mathrm{P}(B)}$." },
    { term: "Independent events", definition: "Events $A$ and $B$ with $\\mathrm{P}(A\\cap B)=\\mathrm{P}(A)\\mathrm{P}(B)$, equivalently $\\mathrm{P}(A\\mid B)=\\mathrm{P}(A)$." },
    { term: "Mutually exclusive events", definition: "Events that cannot occur together: $\\mathrm{P}(A\\cap B)=0$." },
    { term: "Discrete random variable", definition: "A variable $X$ taking countably many values, each with probability $\\mathrm{P}(X=x)$, where $\\sum \\mathrm{P}(X=x)=1$." },
    { term: "Expected value", definition: "The long-run mean $\\mathrm{E}(X)=\\sum x\\,\\mathrm{P}(X=x)$." },
    { term: "Fair game", definition: "A game in which the expected gain of a player is zero." },
  ],
  concepts: [
    {
      id: "aasl-u4-conditional",
      title: "Conditional probability and independence",
      skill: "Use Venn diagrams, tree diagrams and the conditional probability formula to find probabilities and test independence.",
      lesson: {
        sections: [
          {
            heading: "Combined events",
            body: "For any two events, $\\mathrm{P}(A\\cup B)=\\mathrm{P}(A)+\\mathrm{P}(B)-\\mathrm{P}(A\\cap B)$. A Venn diagram records the number or probability in each region: fill in the intersection first, then the parts of each set outside it, then the region outside both sets.",
          },
          {
            heading: "Conditional probability and trees",
            body: "Given that $B$ has happened, the sample space shrinks to $B$, so $\\mathrm{P}(A\\mid B)=\\dfrac{\\mathrm{P}(A\\cap B)}{\\mathrm{P}(B)}$. On a tree diagram multiply along branches to get $\\mathrm{P}(A\\cap B)$ and add the relevant branch products to get a total probability. Events $A$ and $B$ are **independent** exactly when $\\mathrm{P}(A\\cap B)=\\mathrm{P}(A)\\mathrm{P}(B)$; to show non-independence, compute both sides and show they differ.",
          },
        ],
        keyFormulas: [
          { name: "Union", statement: "$\\mathrm{P}(A\\cup B)=\\mathrm{P}(A)+\\mathrm{P}(B)-\\mathrm{P}(A\\cap B)$" },
          { name: "Conditional probability", statement: "$\\mathrm{P}(A\\mid B)=\\dfrac{\\mathrm{P}(A\\cap B)}{\\mathrm{P}(B)}$" },
          { name: "Independence", statement: "$\\mathrm{P}(A\\cap B)=\\mathrm{P}(A)\\,\\mathrm{P}(B)$" },
        ],
        workedExample: {
          problem: "$\\mathrm{P}(A)=0.5$, $\\mathrm{P}(B)=0.4$ and $\\mathrm{P}(A\\cup B)=0.7$. Find $\\mathrm{P}(A\\mid B)$.",
          solution: "$\\mathrm{P}(A\\cap B)=0.5+0.4-0.7=0.2$. Then $\\mathrm{P}(A\\mid B)=\\dfrac{0.2}{0.4}=0.5$. Since this equals $\\mathrm{P}(A)$, the events are independent.",
        },
      },
      questions: [
        {
          id: "aasl-u4-conditional-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Events $A$ and $B$ are independent with $\\mathrm{P}(A)=0.4$ and $\\mathrm{P}(B)=0.5$. What is $\\mathrm{P}(A\\cap B)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.9$" },
              { id: "b", text: "$0.1$" },
              { id: "c", text: "$0.2$" },
              { id: "d", text: "$0.4$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Independent events", statement: "$\\mathrm{P}(A\\cap B)=\\mathrm{P}(A)\\mathrm{P}(B)$" },
            ],
            steps: [
              { reasoning: "Use the multiplication rule for independent events.", working: "\\mathrm{P}(A\\cap B)=0.4\\times0.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=0.2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $0.2$",
            commonErrors: ["Adding the probabilities ($0.9$), which gives a union for mutually exclusive events.", "Confusing independence with mutual exclusivity (which would give $0$)."],
          },
        },
        {
          id: "aasl-u4-conditional-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For events $A$ and $B$, $\\mathrm{P}(A)=0.6$, $\\mathrm{P}(B)=0.5$ and $\\mathrm{P}(A\\cup B)=0.8$.\n\\nFind $\\mathrm{P}(A\\cap B)$ and hence find $\\mathrm{P}(A\\mid B)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\mathrm{P}(A\\cap B)$", answer: 0.3 },
              { label: "$\\mathrm{P}(A\\mid B)$", answer: 0.6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Union", statement: "$\\mathrm{P}(A\\cup B)=\\mathrm{P}(A)+\\mathrm{P}(B)-\\mathrm{P}(A\\cap B)$" },
              { kind: "formula", name: "Conditional probability", statement: "$\\mathrm{P}(A\\mid B)=\\dfrac{\\mathrm{P}(A\\cap B)}{\\mathrm{P}(B)}$" },
            ],
            steps: [
              { reasoning: "Substitute into the union formula.", working: "0.8=0.6+0.5-\\mathrm{P}(A\\cap B)", marks: 1, markCode: "M" },
              { reasoning: "Solve.", working: "\\mathrm{P}(A\\cap B)=0.3", marks: 1, markCode: "A" },
              { reasoning: "Divide by $\\mathrm{P}(B)$.", working: "\\mathrm{P}(A\\mid B)=\\frac{0.3}{0.5}=0.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathrm{P}(A\\cap B)=0.3$; $\\mathrm{P}(A\\mid B)=0.6$",
            commonErrors: ["Dividing by $\\mathrm{P}(A)$ instead of $\\mathrm{P}(B)$ (which would give $0.5$)."],
            examinerNote: "Since $\\mathrm{P}(A\\mid B)=\\mathrm{P}(A)$, the events are independent. Award A1 for $\\mathrm{P}(A\\mid B)$ by FT from an incorrect $\\mathrm{P}(A\\cap B)$.",
          },
        },
        {
          id: "aasl-u4-conditional-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "The probability that it rains on a given morning is $0.3$. If it rains, the probability that Ravi is late for school is $0.4$. If it does not rain, the probability that he is late is $0.1$.\n\\nFind the probability that Ravi is late, and given that he is late, find the probability that it rained. Give the second answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "P(late)", answer: 0.19 },
              { label: "P(rain given late)", answer: 0.632, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tree diagram", statement: "Multiply probabilities along branches; add the products of all branches ending in the required outcome." },
              { kind: "formula", name: "Conditional probability", statement: "$\\mathrm{P}(R\\mid L)=\\dfrac{\\mathrm{P}(R\\cap L)}{\\mathrm{P}(L)}$" },
            ],
            steps: [
              { reasoning: "Two branches end in 'late': rain then late, and no rain then late.", working: "0.3\\times0.4+0.7\\times0.1=0.12+0.07", marks: 1, markCode: "M" },
              { reasoning: "Add.", working: "\\mathrm{P}(L)=0.19", marks: 1, markCode: "A" },
              { reasoning: "Use the conditional probability formula with $\\mathrm{P}(R\\cap L)=0.12$.", working: "\\mathrm{P}(R\\mid L)=\\frac{0.12}{0.19}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate as an exact fraction then decimal.", working: "=\\frac{12}{19}\\approx0.632", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathrm{P}(L)=0.19$; $\\mathrm{P}(R\\mid L)=\\dfrac{12}{19}\\approx0.632$",
            commonErrors: ["Giving $0.12$ (the joint probability) as the conditional probability.", "Forgetting the 'no rain' branch when finding $\\mathrm{P}(L)$."],
          },
        },
        {
          id: "aasl-u4-conditional-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "In a group of $40$ students, $22$ study Art ($A$), $18$ study Music ($M$) and $6$ study neither subject.",
          parts: [
            { label: "a", prompt: "Find the number of students who study both Art and Music.", marks: 2 },
            { label: "b", prompt: "A student is chosen at random. Given that the student studies Music, find the probability that the student also studies Art.", marks: 2 },
            { label: "c", prompt: "Show that studying Art and studying Music are not independent.", marks: 2 },
            { label: "d", prompt: "Two different students are chosen at random. Find the probability that both study Art. Give your answer to 3 significant figures.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Number studying both", answer: 6 },
              { label: "(b) $\\mathrm{P}(A\\mid M)$", answer: 0.333, tolerance: 0.001 },
              { label: "(d) Probability both study Art", answer: 0.296, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Union (counts)", statement: "$n(A\\cup M)=n(A)+n(M)-n(A\\cap M)$" },
              { kind: "formula", name: "Conditional probability", statement: "$\\mathrm{P}(A\\mid M)=\\dfrac{n(A\\cap M)}{n(M)}$" },
              { kind: "definition", name: "Independence", statement: "$A$ and $M$ are independent only if $\\mathrm{P}(A\\cap M)=\\mathrm{P}(A)\\mathrm{P}(M)$." },
            ],
            steps: [
              { part: "a", reasoning: "$6$ study neither, so $34$ study at least one subject.", working: "n(A\\cup M)=40-6=34", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Rearrange the union formula.", working: "n(A\\cap M)=22+18-34=6", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Restrict to the $18$ music students.", working: "\\mathrm{P}(A\\mid M)=\\frac{6}{18}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "=\\frac13\\approx0.333", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Find the product of the marginal probabilities.", working: "\\mathrm{P}(A)\\mathrm{P}(M)=\\frac{22}{40}\\times\\frac{18}{40}=0.2475", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compare with the actual intersection.", working: "\\mathrm{P}(A\\cap M)=\\frac{6}{40}=0.15\\neq0.2475", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Selection is without replacement, so the second probability uses $21$ of the remaining $39$.", working: "\\frac{22}{40}\\times\\frac{21}{39}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "=\\frac{77}{260}\\approx0.296", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $6$ (b) $\\frac13$ (c) $0.15\\neq0.2475$, so not independent (d) $\\frac{77}{260}\\approx0.296$",
            commonErrors: ["Using $\\frac{22}{40}\\times\\frac{22}{40}$ in (d), treating the choice as with replacement.", "In (b), dividing by $40$ instead of $18$."],
          },
        },
        {
          id: "aasl-u4-conditional-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Events $A$ and $B$ are independent with $\\mathrm{P}(A) = 0.6$ and $\\mathrm{P}(B) = 0.3$. What is $\\mathrm{P}(A \\cap B)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.18$" },
              { id: "b", text: "$0.9$" },
              { id: "c", text: "$0$" },
              { id: "d", text: "$0.3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Independent events", statement: "$\\mathrm{P}(A\\cap B)=\\mathrm{P}(A)\\mathrm{P}(B)$" },
            ],
            steps: [
              { reasoning: "For independent events, multiply the probabilities.", working: "\\mathrm{P}(A\\cap B)=0.6\\times0.3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=0.18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $0.18$",
            commonErrors: ["Adding the probabilities to get $0.9$.", "Assuming independence means the events cannot both occur ($0$)."],
          },
        },
        {
          id: "aasl-u4-conditional-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "For events $A$ and $B$, $\\mathrm{P}(A) = 0.65$, $\\mathrm{P}(B) = 0.4$ and $\\mathrm{P}(A \\cap B) = 0.26$.\n\nFind $\\mathrm{P}(A \\cup B)$ and hence find $\\mathrm{P}(A \\mid B)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\mathrm{P}(A \\cup B)$", answer: 0.79 },
              { label: "$\\mathrm{P}(A \\mid B)$", answer: 0.65 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Union", statement: "$\\mathrm{P}(A\\cup B)=\\mathrm{P}(A)+\\mathrm{P}(B)-\\mathrm{P}(A\\cap B)$" },
              { kind: "formula", name: "Conditional probability", statement: "$\\mathrm{P}(A\\mid B)=\\dfrac{\\mathrm{P}(A\\cap B)}{\\mathrm{P}(B)}$" },
            ],
            steps: [
              { reasoning: "Substitute into the union formula.", working: "\\mathrm{P}(A\\cup B)=0.65+0.4-0.26", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=0.79", marks: 1, markCode: "A" },
              { reasoning: "Divide the intersection by $\\mathrm{P}(B)$. (Note $\\mathrm{P}(A\\mid B)=\\mathrm{P}(A)$, so the events are independent.)", working: "\\mathrm{P}(A\\mid B)=\\frac{0.26}{0.4}=0.65", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathrm{P}(A\\cup B)=0.79$; $\\mathrm{P}(A\\mid B)=0.65$",
            commonErrors: ["Dividing by $\\mathrm{P}(A)$ instead of $\\mathrm{P}(B)$, which would give $0.4$."],
          },
        },
        {
          id: "aasl-u4-conditional-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Events $A$ and $B$ are mutually exclusive with $\\mathrm{P}(A) = 0.35$ and $\\mathrm{P}(B) = 0.45$. What is $\\mathrm{P}(A \\cup B)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.1575$" },
              { id: "b", text: "$0$" },
              { id: "c", text: "$1$" },
              { id: "d", text: "$0.8$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mutually exclusive events", statement: "If $A$ and $B$ cannot occur together then $\\mathrm{P}(A\\cap B)=0$, so $\\mathrm{P}(A\\cup B)=\\mathrm{P}(A)+\\mathrm{P}(B)$." },
            ],
            steps: [
              { reasoning: "Mutually exclusive events have zero intersection, so the union is the sum.", working: "\\mathrm{P}(A\\cup B)=0.35+0.45", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=0.8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $0.8$",
            commonErrors: ["Multiplying the probabilities ($0.1575$), which applies to independent events, not mutually exclusive ones."],
          },
        },
        {
          id: "aasl-u4-conditional-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In a group of $80$ students, $45$ study Science and $30$ study Languages. Of these, $12$ study both subjects.\n\nFind the probability that a randomly chosen student who studies Languages also studies Science, and the probability that a randomly chosen student studies neither subject.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\mathrm{P}(\\text{Science} \\mid \\text{Languages})$", answer: 0.4 },
              { label: "$\\mathrm{P}(\\text{neither})$", answer: 0.2125 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Conditional probability from counts", statement: "$\\mathrm{P}(A\\mid B)=\\dfrac{n(A\\cap B)}{n(B)}$" },
              { kind: "formula", name: "Union (counts)", statement: "$n(A\\cup B)=n(A)+n(M)-n(A\\cap B)$, so $n(\\text{neither})=80-n(A\\cup B)$" },
            ],
            steps: [
              { reasoning: "Find how many study at least one subject.", working: "n(A\\cup B)=45+30-12=63", marks: 1, markCode: "M" },
              { reasoning: "Restrict to the $30$ language students.", working: "\\mathrm{P}(\\text{Science}\\mid\\text{Languages})=\\frac{12}{30}=0.4", marks: 1, markCode: "A" },
              { reasoning: "Find neither and convert to a probability.", working: "80-63=17,\\quad \\mathrm{P}(\\text{neither})=\\frac{17}{80}=0.2125", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathrm{P}(\\text{Science}\\mid\\text{Languages})=0.4$; $\\mathrm{P}(\\text{neither})=0.2125$",
            commonErrors: ["Dividing $12$ by $80$ instead of by $30$ for the conditional probability."],
          },
        },
        {
          id: "aasl-u4-conditional-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "$\\mathrm{P}(A) = 0.5$, $\\mathrm{P}(B) = 0.6$ and $\\mathrm{P}(A \\cap B) = 0.3$. Are events $A$ and $B$ independent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No, because $\\mathrm{P}(A \\cap B) \\neq 0$" },
              { id: "b", text: "Cannot be determined from the information given" },
              { id: "c", text: "Yes, because $\\mathrm{P}(A \\cap B) = \\mathrm{P}(A)\\mathrm{P}(B)$" },
              { id: "d", text: "No, because $\\mathrm{P}(A \\cap B) \\neq \\mathrm{P}(A) + \\mathrm{P}(B)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Independence", statement: "$A$ and $B$ are independent if and only if $\\mathrm{P}(A\\cap B)=\\mathrm{P}(A)\\mathrm{P}(B)$." },
            ],
            steps: [
              { reasoning: "Compute the product of the marginal probabilities.", working: "\\mathrm{P}(A)\\mathrm{P}(B)=0.5\\times0.6=0.3", marks: 1, markCode: "M" },
              { reasoning: "Compare with the actual intersection; they are equal, so the events are independent.", working: "0.3=0.3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Yes, because $\\mathrm{P}(A \\cap B) = \\mathrm{P}(A)\\mathrm{P}(B)$",
            commonErrors: ["Thinking independence requires $\\mathrm{P}(A\\cap B)=0$ (that is mutual exclusivity)."],
          },
        },
        {
          id: "aasl-u4-conditional-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "The probability that it rains on a given morning is $0.2$. If it rains, the probability that Sita is late for school is $0.5$. If it does not rain, the probability that she is late is $0.1$.\n\nFind the probability that Sita is late, and, given that she is late, find the probability that it rained. Give the second answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\mathrm{P}(\\text{late})$", answer: 0.18 },
              { label: "$\\mathrm{P}(\\text{rain} \\mid \\text{late})$", answer: 0.556, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tree diagram", statement: "Multiply probabilities along branches; add the products of all branches ending in the required outcome." },
              { kind: "formula", name: "Conditional probability", statement: "$\\mathrm{P}(R\\mid L)=\\dfrac{\\mathrm{P}(R\\cap L)}{\\mathrm{P}(L)}$" },
            ],
            steps: [
              { reasoning: "Two branches end in 'late': rain then late, and no rain then late.", working: "0.2\\times0.5+0.8\\times0.1=0.1+0.08", marks: 1, markCode: "M" },
              { reasoning: "Add.", working: "\\mathrm{P}(L)=0.18", marks: 1, markCode: "A" },
              { reasoning: "Use the conditional probability formula with $\\mathrm{P}(R\\cap L)=0.1$.", working: "\\mathrm{P}(R\\mid L)=\\frac{0.1}{0.18}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=\\frac{5}{9}\\approx0.556", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathrm{P}(L)=0.18$; $\\mathrm{P}(R\\mid L)=\\dfrac{5}{9}\\approx0.556$",
            commonErrors: ["Giving $0.1$ (the joint probability) as the conditional probability.", "Forgetting the 'no rain' branch when finding $\\mathrm{P}(L)$."],
          },
        },
        {
          id: "aasl-u4-conditional-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "In a survey of $200$ people, $120$ own a car, $90$ own a bicycle and $45$ own both.",
          parts: [
            { label: "a", prompt: "Find the number of people who own neither a car nor a bicycle.", marks: 2 },
            { label: "b", prompt: "A person is chosen at random. Given that the person owns a bicycle, find the probability that the person also owns a car.", marks: 2 },
            { label: "c", prompt: "Show that owning a car and owning a bicycle are not independent events.", marks: 2 },
            { label: "d", prompt: "Find the probability that a randomly chosen person owns a car but not a bicycle.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Union (counts)", statement: "$n(C\\cup B)=n(C)+n(B)-n(C\\cap B)$" },
              { kind: "definition", name: "Independence", statement: "$C$ and $B$ are independent only if $\\mathrm{P}(C\\cap B)=\\mathrm{P}(C)\\mathrm{P}(B)$." },
            ],
            steps: [
              { part: "a", reasoning: "Find how many own at least one of the two.", working: "n(C\\cup B)=120+90-45=165", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Subtract from the total.", working: "200-165=35", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Restrict to the $90$ bicycle owners.", working: "\\mathrm{P}(C\\mid B)=\\frac{45}{90}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "=0.5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Compute the product of the marginal probabilities.", working: "\\mathrm{P}(C)\\mathrm{P}(B)=\\frac{120}{200}\\times\\frac{90}{200}=0.27", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Compare with the actual intersection.", working: "\\mathrm{P}(C\\cap B)=\\frac{45}{200}=0.225\\neq0.27", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Car owners who do not own a bicycle number $120-45=75$.", working: "\\mathrm{P}(C\\cap B')=\\frac{75}{200}=0.375", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $35$ (b) $0.5$ (c) $0.225\\neq0.27$, so not independent (d) $0.375$",
            commonErrors: ["In (c), comparing counts instead of probabilities.", "In (d), forgetting to subtract the $45$ who own both."],
          },
        },
        {
          id: "aasl-u4-conditional-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which expression gives $\\mathrm{P}(A \\mid B)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac{\\mathrm{P}(A\\cup B)}{\\mathrm{P}(B)}$" },
              { id: "b", text: "$\\dfrac{\\mathrm{P}(A\\cap B)}{\\mathrm{P}(A)}$" },
              { id: "c", text: "$\\mathrm{P}(A)\\,\\mathrm{P}(B)$" },
              { id: "d", text: "$\\dfrac{\\mathrm{P}(A\\cap B)}{\\mathrm{P}(B)}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Conditional probability", statement: "$\\mathrm{P}(A\\mid B)=\\dfrac{\\mathrm{P}(A\\cap B)}{\\mathrm{P}(B)}$; the conditioning event is the denominator." },
            ],
            steps: [
              { reasoning: "Given $B$ has occurred, the sample space shrinks to $B$, so divide by $\\mathrm{P}(B)$.", marks: 1, markCode: "M" },
              { reasoning: "The numerator is the joint probability $\\mathrm{P}(A\\cap B)$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $\\dfrac{\\mathrm{P}(A\\cap B)}{\\mathrm{P}(B)}$",
            commonErrors: ["Dividing by $\\mathrm{P}(A)$, which gives $\\mathrm{P}(B\\mid A)$ instead."],
          },
        },
        {
          id: "aasl-u4-conditional-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "$\\mathrm{P}(A \\cap B) = 0.15$, $\\mathrm{P}(A) = 0.5$ and $\\mathrm{P}(B) = 0.3$. What is $\\mathrm{P}(A \\mid B)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.15$" },
              { id: "b", text: "$0.3$" },
              { id: "c", text: "$0.45$" },
              { id: "d", text: "$0.5$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Conditional probability", statement: "$\\mathrm{P}(A\\mid B)=\\dfrac{\\mathrm{P}(A\\cap B)}{\\mathrm{P}(B)}$" },
            ],
            steps: [
              { reasoning: "Divide the intersection by the probability of the conditioning event $B$.", working: "\\mathrm{P}(A\\mid B)=\\frac{0.15}{0.3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $0.5$",
            commonErrors: ["Dividing by $\\mathrm{P}(A)=0.5$ to get $0.3$, which is $\\mathrm{P}(B\\mid A)$."],
          },
        },
        {
          id: "aasl-u4-conditional-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In a group of $60$ students, $25$ play tennis, $20$ play golf and $5$ play both sports.\n\nFind the probability that a randomly chosen student who plays golf also plays tennis, and the probability that a randomly chosen student plays at least one of the two sports.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\mathrm{P}(\\text{tennis} \\mid \\text{golf})$", answer: 0.25 },
              { label: "$\\mathrm{P}(\\text{at least one})$", answer: 0.667, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Conditional probability from counts", statement: "$\\mathrm{P}(A\\mid B)=\\dfrac{n(A\\cap B)}{n(B)}$" },
              { kind: "formula", name: "Union (counts)", statement: "$n(\\text{tennis}\\cup\\text{golf})=25+20-5$" },
            ],
            steps: [
              { reasoning: "Restrict to the $20$ golf players.", working: "\\mathrm{P}(\\text{tennis}\\mid\\text{golf})=\\frac{5}{20}=0.25", marks: 1, markCode: "M" },
              { reasoning: "Find the number playing at least one sport.", working: "n(\\text{tennis}\\cup\\text{golf})=25+20-5=40", marks: 1, markCode: "M" },
              { reasoning: "Convert to a probability.", working: "\\mathrm{P}(\\text{at least one})=\\frac{40}{60}\\approx0.667", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathrm{P}(\\text{tennis}\\mid\\text{golf})=0.25$; $\\mathrm{P}(\\text{at least one})=\\dfrac{2}{3}\\approx0.667$",
            commonErrors: ["Using $\\frac{5}{60}$ for the conditional probability instead of $\\frac{5}{20}$."],
          },
        },
        {
          id: "aasl-u4-conditional-q15",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "$\\mathrm{P}(A) = 0.7$, $\\mathrm{P}(B) = 0.4$ and $\\mathrm{P}(A \\cap B) = 0.28$. What is $\\mathrm{P}(A \\cup B)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.7$" },
              { id: "b", text: "$0.82$" },
              { id: "c", text: "$0.98$" },
              { id: "d", text: "$0.28$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Union", statement: "$\\mathrm{P}(A\\cup B)=\\mathrm{P}(A)+\\mathrm{P}(B)-\\mathrm{P}(A\\cap B)$" },
            ],
            steps: [
              { reasoning: "Substitute into the union formula.", working: "\\mathrm{P}(A\\cup B)=0.7+0.4-0.28", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=0.82", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $0.82$",
            commonErrors: ["Adding without subtracting the intersection ($0.98$)."],
          },
        },
        {
          id: "aasl-u4-conditional-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A bag contains $4$ red balls and $6$ blue balls. Two balls are chosen at random without replacement.",
          parts: [
            { label: "a", prompt: "Find the probability that both balls are red.", marks: 2 },
            { label: "b", prompt: "Given that the first ball chosen is red, find the probability that the second ball is also red.", marks: 2 },
            { label: "c", prompt: "Find the probability that exactly one of the two balls is red.", marks: 2 },
            { label: "d", prompt: "Given that the second ball chosen is red, find the probability that the first ball was also red. Give your answer as an exact fraction.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tree diagram without replacement", statement: "Multiply along branches; after the first draw the totals decrease by one." },
              { kind: "formula", name: "Conditional probability", statement: "$\\mathrm{P}(R_1\\mid R_2)=\\dfrac{\\mathrm{P}(R_1\\cap R_2)}{\\mathrm{P}(R_2)}$" },
            ],
            steps: [
              { part: "a", reasoning: "Multiply along the two red branches.", working: "\\frac{4}{10}\\times\\frac{3}{9}=\\frac{12}{90}=\\frac{2}{15}\\approx0.133", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Given the first ball is red, $9$ balls remain of which $3$ are red.", working: "\\mathrm{P}(R_2\\mid R_1)=\\frac{3}{9}=\\frac13", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Add the red-then-blue and blue-then-red branches.", working: "\\frac{4}{10}\\times\\frac{6}{9}+\\frac{6}{10}\\times\\frac{4}{9}=\\frac{24}{90}+\\frac{24}{90}=\\frac{8}{15}\\approx0.533", marks: 2, markCode: "A" },
              { part: "d", reasoning: "$\\mathrm{P}(R_2)=\\frac{2}{15}+\\frac{8}{15}=\\frac{10}{15}$? No: use $\\mathrm{P}(R_2)=\\mathrm{P}(R_1)=\\frac45$ by symmetry, or sum the two branches ending in red.", working: "\\mathrm{P}(R_1\\mid R_2)=\\frac{2/15}{4/5}=\\frac{2}{15}\\times\\frac{5}{4}=\\frac16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{2}{15}\\approx0.133$ (b) $\\frac13$ (c) $\\frac{8}{15}\\approx0.533$ (d) $\\frac16$",
            commonErrors: ["Using $\\frac{4}{10}\\times\\frac{4}{10}$, treating the draw as with replacement.", "In (d), giving $\\frac{2}{15}$ instead of dividing by $\\mathrm{P}(R_2)$."],
            examinerNote: "For (d), $\\mathrm{P}(R_2)=\\frac{4}{10}$ since the second draw is red with the same probability as the first by symmetry; accept the branch-sum method.",
          },
        },
      ],
    },
    {
      id: "aasl-u4-discrete-rv",
      title: "Discrete random variables and expected value",
      skill: "Use the probabilities of a discrete random variable to find unknown values, E(X) and Var(X), and to analyse fair games.",
      lesson: {
        sections: [
          {
            heading: "Probability distributions",
            body: "A discrete random variable has a distribution listing each value $x$ with $\\mathrm{P}(X=x)$. Every probability lies in $[0,1]$ and all the probabilities add to $1$. This sum condition is the way to find an unknown constant in a distribution.",
          },
          {
            heading: "Expected value and fair games",
            body: "The expected value is $\\mathrm{E}(X)=\\sum x\\,\\mathrm{P}(X=x)$. It is the long-run average, not necessarily a possible outcome. The variance is $\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$. In a game, if $X$ is the player's winnings and $c$ the cost to play, the expected gain is $\\mathrm{E}(X)-c$. The game is **fair** when this is $0$.",
          },
        ],
        keyFormulas: [
          { name: "Total probability", statement: "$\\sum \\mathrm{P}(X=x)=1$" },
          { name: "Expected value", statement: "$\\mathrm{E}(X)=\\sum x\\,\\mathrm{P}(X=x)$" },
          { name: "Variance", statement: "$\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$" },
        ],
        workedExample: {
          problem: "$X$ takes values $0,1,2$ with probabilities $0.5,\\ k,\\ 0.2$. Find $k$ and $\\mathrm{E}(X)$.",
          solution: "$0.5+k+0.2=1$ so $k=0.3$. Then $\\mathrm{E}(X)=0(0.5)+1(0.3)+2(0.2)=0.7$.",
        },
      },
      questions: [
        {
          id: "aasl-u4-discrete-rv-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The random variable $X$ has $\\mathrm{P}(X=x)=kx$ for $x=1,2,3,4$. Find the value of $k$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.1$" },
              { id: "b", text: "$0.4$" },
              { id: "c", text: "$0.01$" },
              { id: "d", text: "$0.25$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sum of probabilities", statement: "$\\sum \\mathrm{P}(X=x)=1$" },
            ],
            steps: [
              { reasoning: "The probabilities are $k,2k,3k,4k$ and must add to $1$.", working: "k+2k+3k+4k=10k=1", marks: 1, markCode: "M" },
              { reasoning: "Solve.", working: "k=0.1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $k=0.1$",
            commonErrors: ["Setting $4k=1$ (using only the last value) giving $0.25$."],
          },
        },
        {
          id: "aasl-u4-discrete-rv-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The random variable $X$ has the following distribution.\n\n| $x$ | 0 | 1 | 2 | 3 |\n|---|---|---|---|---|\n| $\\mathrm{P}(X=x)$ | 0.1 | $k$ | 0.4 | 0.2 |\n\\nFind $k$ and hence find $\\mathrm{E}(X)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$k$", answer: 0.3 },
              { label: "$\\mathrm{E}(X)$", answer: 1.7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sum of probabilities", statement: "$\\sum \\mathrm{P}(X=x)=1$" },
              { kind: "formula", name: "Expected value", statement: "$\\mathrm{E}(X)=\\sum x\\,\\mathrm{P}(X=x)$" },
            ],
            steps: [
              { reasoning: "Probabilities sum to $1$.", working: "0.1+k+0.4+0.2=1\\Rightarrow k=0.3", marks: 1, markCode: "A" },
              { reasoning: "Sum the products $x\\,\\mathrm{P}(X=x)$.", working: "\\mathrm{E}(X)=0(0.1)+1(0.3)+2(0.4)+3(0.2)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=0.3+0.8+0.6=1.7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=0.3$; $\\mathrm{E}(X)=1.7$",
            commonErrors: ["Averaging the $x$ values ($1.5$) rather than weighting by probability."],
          },
        },
        {
          id: "aasl-u4-discrete-rv-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "A game uses a fair six-sided die. The player pays $\\$c$ to play and then rolls the die once. If a $6$ is rolled the player receives $\\$9$; if a $4$ or $5$ is rolled the player receives $\\$3$; otherwise the player receives nothing.\n\\nFind the expected amount received by the player, and hence find the value of $c$ for which the game is fair.",
          response: {
            type: "numeric",
            parts: [
              { label: "Expected amount received ($\\$$)", answer: 2.5 },
              { label: "$c$ ($\\$$)", answer: 2.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected value", statement: "$\\mathrm{E}(X)=\\sum x\\,\\mathrm{P}(X=x)$" },
              { kind: "definition", name: "Fair game", statement: "A game is fair when the expected gain $\\mathrm{E}(X)-c$ equals $0$." },
            ],
            steps: [
              { reasoning: "Let $X$ be the amount received. Then $\\mathrm{P}(X=9)=\\frac16$, $\\mathrm{P}(X=3)=\\frac26$ and $\\mathrm{P}(X=0)=\\frac36$.", marks: 1, markCode: "A" },
              { reasoning: "Apply the expected value formula.", working: "\\mathrm{E}(X)=9\\cdot\\frac16+3\\cdot\\frac26+0", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=\\frac96+\\frac66=\\frac{15}{6}=2.5", marks: 1, markCode: "A" },
              { reasoning: "For a fair game, expected gain is zero, so the cost equals the expected winnings.", working: "c=2.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathrm{E}(X)=\\$2.50$; fair when $c=2.5$",
            commonErrors: ["Using $\\frac13$ for P(4 or 5) as separate values, or forgetting that 4 and 5 both pay $\\$3$.", "Setting $c=0$."],
          },
        },
        {
          id: "aasl-u4-discrete-rv-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A discrete random variable $X$ has probability distribution $\\mathrm{P}(X=x)=k(5-x)$ for $x=1,2,3,4$, where $k$ is a constant.\n\n$X$ is the number of dollars won in a game at a school fair. The organiser charges $\\$2.50$ to play each game.",
          parts: [
            { label: "a", prompt: "Show that $k=0.1$.", marks: 2 },
            { label: "b", prompt: "Find $\\mathrm{E}(X)$.", marks: 2 },
            { label: "c", prompt: "Find $\\mathrm{Var}(X)$.", marks: 2 },
            { label: "d", prompt: "Find the organiser's expected profit over $200$ games, in dollars.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) $\\mathrm{E}(X)$", answer: 2 },
              { label: "(c) $\\mathrm{Var}(X)$", answer: 1 },
              { label: "(d) Expected profit over 200 games ($\\$$)", answer: 100 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sum of probabilities", statement: "$\\sum \\mathrm{P}(X=x)=1$" },
              { kind: "formula", name: "Variance", statement: "$\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$" },
            ],
            steps: [
              { part: "a", reasoning: "List the probabilities: $4k,3k,2k,k$ and set their sum to $1$.", working: "4k+3k+2k+k=10k=1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solve (AG).", working: "k=0.1", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The distribution is $0.4,0.3,0.2,0.1$ for $x=1,2,3,4$.", working: "\\mathrm{E}(X)=1(0.4)+2(0.3)+3(0.2)+4(0.1)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=0.4+0.6+0.6+0.4=2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Find $\\mathrm{E}(X^2)$.", working: "\\mathrm{E}(X^2)=1(0.4)+4(0.3)+9(0.2)+16(0.1)=5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Subtract the square of the mean.", working: "\\mathrm{Var}(X)=5-2^2=1", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Expected profit per game is the fee minus the expected payout.", working: "2.50-2=0.50", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Multiply by $200$ games.", working: "200\\times0.50=100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $10k=1\\Rightarrow k=0.1$ (b) $2$ (c) $1$ (d) $\\$100$",
            commonErrors: ["Using $\\mathrm{E}(X^2)=[\\mathrm{E}(X)]^2$.", "Treating the fee as the player's winnings, which reverses the sign of the profit."],
          },
        },
        {
          id: "aasl-u4-discrete-rv-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The random variable $X$ has $\\mathrm{P}(X=0)=0.2$, $\\mathrm{P}(X=1)=0.5$ and $\\mathrm{P}(X=2)=0.3$. Find $\\mathrm{E}(X)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.9$" },
              { id: "b", text: "$1.3$" },
              { id: "c", text: "$1.1$" },
              { id: "d", text: "$0.7$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected value", statement: "$\\mathrm{E}(X)=\\sum x\\,\\mathrm{P}(X=x)$" },
            ],
            steps: [
              { reasoning: "Multiply each value by its probability and add.", working: "\\mathrm{E}(X)=0(0.2)+1(0.5)+2(0.3)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=0.5+0.6=1.1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $\\mathrm{E}(X)=1.1$",
            commonErrors: ["Adding the probabilities instead of the products ($0.9$).", "Using only $1(0.5)+2(0.3)$ without checking that the probabilities sum to $1$."],
          },
        },
        {
          id: "aasl-u4-discrete-rv-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The random variable $X$ takes the values $1,2,3$ with $\\mathrm{P}(X=1)=0.2$, $\\mathrm{P}(X=2)=0.5$ and $\\mathrm{P}(X=3)=p$. Find the value of $p$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.8$" },
              { id: "b", text: "$0.3$" },
              { id: "c", text: "$0.5$" },
              { id: "d", text: "$0.7$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sum of probabilities", statement: "$\\sum \\mathrm{P}(X=x)=1$" },
            ],
            steps: [
              { reasoning: "The probabilities must add to $1$.", working: "0.2+0.5+p=1", marks: 1, markCode: "M" },
              { reasoning: "Solve for $p$.", working: "p=1-0.7=0.3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $p=0.3$",
            commonErrors: ["Computing $1-0.2-0.5$ incorrectly as $0.7$."],
          },
        },
        {
          id: "aasl-u4-discrete-rv-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The random variable $X$ has the following probability distribution.\n\n| $x$ | 0 | 1 | 2 | 3 |\n|---|---|---|---|---|\n| $\\mathrm{P}(X=x)$ | 0.2 | $k$ | 0.3 | 0.1 |\n\nFind $k$ and hence find $\\mathrm{E}(X)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$k$", answer: 0.4 },
              { label: "$\\mathrm{E}(X)$", answer: 1.3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sum of probabilities", statement: "$\\sum \\mathrm{P}(X=x)=1$" },
              { kind: "formula", name: "Expected value", statement: "$\\mathrm{E}(X)=\\sum x\\,\\mathrm{P}(X=x)$" },
            ],
            steps: [
              { reasoning: "Use the fact that the probabilities sum to $1$.", working: "0.2+k+0.3+0.1=1\\Rightarrow k=0.4", marks: 1, markCode: "A" },
              { reasoning: "Multiply each value by its probability.", working: "\\mathrm{E}(X)=0(0.2)+1(0.4)+2(0.3)+3(0.1)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=0.4+0.6+0.3=1.3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=0.4$; $\\mathrm{E}(X)=1.3$",
            commonErrors: ["Treating $k$ as a probability for $x=1$ and forgetting to include it in the expectation sum."],
          },
        },
        {
          id: "aasl-u4-discrete-rv-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "The random variable $X$ has the following probability distribution.\n\n| $x$ | 0 | 1 | 2 |\n|---|---|---|---|\n| $\\mathrm{P}(X=x)$ | 0.4 | 0.4 | 0.2 |\n\nFind $\\mathrm{E}(X^2)$ and hence find $\\mathrm{Var}(X)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\mathrm{E}(X^2)$", answer: 1.2 },
              { label: "$\\mathrm{Var}(X)$", answer: 0.56 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected value", statement: "$\\mathrm{E}(X^2)=\\sum x^2\\,\\mathrm{P}(X=x)$" },
              { kind: "formula", name: "Variance", statement: "$\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$" },
            ],
            steps: [
              { reasoning: "Find $\\mathrm{E}(X)$ first.", working: "\\mathrm{E}(X)=0(0.4)+1(0.4)+2(0.2)=0.8", marks: 1, markCode: "A" },
              { reasoning: "Square each value before weighting.", working: "\\mathrm{E}(X^2)=0(0.4)+1(0.4)+4(0.2)=1.2", marks: 1, markCode: "M" },
              { reasoning: "Apply the variance formula.", working: "\\mathrm{Var}(X)=1.2-(0.8)^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=1.2-0.64=0.56", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathrm{E}(X^2)=1.2$; $\\mathrm{Var}(X)=0.56$",
            commonErrors: ["Computing $[\\mathrm{E}(X)]^2=0.64$ as $\\mathrm{E}(X^2)$.", "Using $0.4$ and $0.2$ as $x^2$ without squaring $x$ first."],
          },
        },
        {
          id: "aasl-u4-discrete-rv-q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A game uses a fair six-sided die. The player pays $\\$3$ to play and then rolls the die once. If a $6$ is rolled the player receives $\\$12$; if a $5$ is rolled the player receives $\\$4$; otherwise the player receives nothing.",
          parts: [
            { label: "a", prompt: "Find the expected amount received by the player.", marks: 2 },
            { label: "b", prompt: "Find the expected gain per game when the cost is $\\$3$.", marks: 1 },
            { label: "c", prompt: "Find the cost that would make the game fair.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected value", statement: "$\\mathrm{E}(X)=\\sum x\\,\\mathrm{P}(X=x)$" },
              { kind: "definition", name: "Fair game", statement: "A game is fair when the expected gain $\\mathrm{E}(X)-c$ equals $0$." },
            ],
            steps: [
              { part: "a", reasoning: "The amounts $12$, $4$ and $0$ have probabilities $\\frac16$, $\\frac16$ and $\\frac46$.", working: "\\mathrm{E}(X)=12\\times\\frac16+4\\times\\frac16+0", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "=2+\\frac23=\\frac83\\approx2.67", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract the cost from the expected winnings.", working: "\\frac83-3=-\\frac13\\approx-0.33", marks: 1, markCode: "A" },
              { part: "c", reasoning: "For a fair game the cost equals the expected winnings.", working: "c=\\frac83\\approx2.67", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac83\\approx\\$2.67$ (b) $-\\frac13\\approx-\\$0.33$ (c) $c=\\frac83\\approx\\$2.67$",
            commonErrors: ["Treating the $4$ and $0$ outcomes as equally likely.", "Setting the fair cost to $3$ instead of the expected winnings."],
          },
        },
        {
          id: "aasl-u4-discrete-rv-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a valid probability distribution for a discrete random variable $X$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{P}(X=1)=-0.1$, $\\mathrm{P}(X=2)=0.6$, $\\mathrm{P}(X=3)=0.5$" },
              { id: "b", text: "$\\mathrm{P}(X=1)=0.2$, $\\mathrm{P}(X=2)=0.3$, $\\mathrm{P}(X=3)=0.5$" },
              { id: "c", text: "$\\mathrm{P}(X=1)=0.6$, $\\mathrm{P}(X=2)=0.5$, $\\mathrm{P}(X=3)=0.1$" },
              { id: "d", text: "$\\mathrm{P}(X=1)=0.3$, $\\mathrm{P}(X=2)=0.5$, $\\mathrm{P}(X=3)=0.4$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Probability distribution", statement: "Each probability lies in $[0,1]$ and $\\sum \\mathrm{P}(X=x)=1$." },
            ],
            steps: [
              { reasoning: "Check that each probability is non-negative and that the probabilities sum to $1$.", marks: 1, markCode: "M" },
              { reasoning: "Only (b) satisfies both conditions: $0.2+0.3+0.5=1$; (a) and (c) sum to $1.2$ and (d) has a negative probability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $0.2,\\ 0.3,\\ 0.5$",
            commonErrors: ["Only checking that the probabilities sum to $1$ and ignoring the requirement $p\\ge0$."],
          },
        },
        {
          id: "aasl-u4-discrete-rv-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For a random variable $X$, $\\mathrm{E}(X)=2$ and $\\mathrm{E}(X^2)=5$. Find $\\mathrm{Var}(X)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$7$" },
              { id: "c", text: "$-1$" },
              { id: "d", text: "$3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Variance", statement: "$\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$" },
            ],
            steps: [
              { reasoning: "Substitute into the variance formula.", working: "\\mathrm{Var}(X)=5-(2)^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=5-4=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\mathrm{Var}(X)=1$",
            commonErrors: ["Adding $5+4=9$ or subtracting $5-2=3$ instead of subtracting the square of the mean."],
          },
        },
        {
          id: "aasl-u4-discrete-rv-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "The random variable $X$ has probability distribution $\\mathrm{P}(X=x)=k(6-x)$ for $x=1,2,3,4,5$, where $k$ is a constant.",
          response: {
            type: "numeric",
            parts: [
              { label: "$k$", answer: 0.0667, tolerance: 0.0001 },
              { label: "$\\mathrm{E}(X)$", answer: 2.333, tolerance: 0.001 },
              { label: "$\\mathrm{Var}(X)$", answer: 1.556, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Sum of probabilities", statement: "$\\sum \\mathrm{P}(X=x)=1$" },
              { kind: "formula", name: "Variance", statement: "$\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$" },
            ],
            steps: [
              { reasoning: "List the probabilities: $5k,4k,3k,2k,k$ and set their sum to $1$.", working: "5k+4k+3k+2k+k=15k=1", marks: 1, markCode: "M" },
              { reasoning: "Solve.", working: "k=\\frac{1}{15}\\approx0.0667", marks: 1, markCode: "A" },
              { reasoning: "Apply the expected value formula with the distribution $\\frac{5}{15},\\frac{4}{15},\\frac{3}{15},\\frac{2}{15},\\frac{1}{15}$.", working: "\\mathrm{E}(X)=\\frac{5+8+9+8+5}{15}=\\frac{35}{15}=\\frac73", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\mathrm{E}(X)\\approx2.33", marks: 1, markCode: "A" },
              { reasoning: "Find $\\mathrm{E}(X^2)$.", working: "\\mathrm{E}(X^2)=\\frac{5+16+27+32+25}{15}=\\frac{105}{15}=7", marks: 1, markCode: "M" },
              { reasoning: "Apply the variance formula.", working: "\\mathrm{Var}(X)=7-\\left(\\frac73\\right)^2=\\frac{14}{9}\\approx1.56", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=\\frac{1}{15}$; $\\mathrm{E}(X)=\\frac73\\approx2.33$; $\\mathrm{Var}(X)=\\frac{14}{9}\\approx1.56$",
            commonErrors: ["Forgetting the factor $k$ when computing $\\mathrm{E}(X)$.", "Using $\\mathrm{E}(X)^2$ instead of $\\mathrm{E}(X^2)$ in the variance formula."],
          },
        },
        {
          id: "aasl-u4-discrete-rv-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A game costs $\\$2$ to play. A player wins $\\$5$ with probability $0.3$, wins $\\$1$ with probability $0.2$, and wins nothing otherwise. What is the player's expected gain per game?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-\\$0.30$" },
              { id: "b", text: "$-\\$0.70$" },
              { id: "c", text: "$\\$1.70$" },
              { id: "d", text: "$\\$0.30$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected value", statement: "$\\mathrm{E}(X)=\\sum x\\,\\mathrm{P}(X=x)$" },
              { kind: "definition", name: "Expected gain", statement: "Expected gain $=\\mathrm{E}(\\text{winnings})-\\text{cost}$" },
            ],
            steps: [
              { reasoning: "Find the expected winnings.", working: "\\mathrm{E}(X)=5(0.3)+1(0.2)+0(0.5)=1.7", marks: 1, markCode: "M" },
              { reasoning: "Subtract the cost of playing.", working: "1.7-2=-0.3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $-\\$0.30$",
            commonErrors: ["Reporting $1.7$ (the expected winnings) as the gain.", "Adding the cost instead of subtracting it."],
          },
        },
        {
          id: "aasl-u4-discrete-rv-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A discrete random variable $X$ has probability distribution given by the table below.\n\n| $x$ | 0 | 1 | 2 | 3 |\n|---|---|---|---|---|\n| $\\mathrm{P}(X=x)$ | 0.1 | 0.3 | $k$ | 0.2 |",
          parts: [
            { label: "a", prompt: "Find the value of $k$.", marks: 2 },
            { label: "b", prompt: "Find $\\mathrm{E}(X)$.", marks: 2 },
            { label: "c", prompt: "Find $\\mathrm{Var}(X)$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Sum of probabilities", statement: "$\\sum \\mathrm{P}(X=x)=1$" },
              { kind: "formula", name: "Variance", statement: "$\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$" },
            ],
            steps: [
              { part: "a", reasoning: "Set the sum of the probabilities to $1$.", working: "0.1+0.3+k+0.2=1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solve.", working: "k=0.4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Weight each value by its probability.", working: "\\mathrm{E}(X)=1(0.3)+2(0.4)+3(0.2)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=0.3+0.8+0.6=1.7", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Find $\\mathrm{E}(X^2)$.", working: "\\mathrm{E}(X^2)=1(0.3)+4(0.4)+9(0.2)=3.7", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Subtract the square of the mean.", working: "\\mathrm{Var}(X)=3.7-(1.7)^2=3.7-2.89=0.81", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $k=0.4$ (b) $\\mathrm{E}(X)=1.7$ (c) $\\mathrm{Var}(X)=0.81$",
            commonErrors: ["In (c), using $\\mathrm{E}(X)^2$ as $\\mathrm{E}(X^2)$.", "In (b), forgetting the $0(0.1)$ term does not affect the sum."],
          },
        },
        {
          id: "aasl-u4-discrete-rv-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A fair six-sided die is rolled once and $X$ is the number showing on the upper face.",
          parts: [
            { label: "a", prompt: "Find $\\mathrm{E}(X)$.", marks: 2 },
            { label: "b", prompt: "Find $\\mathrm{E}(X^2)$.", marks: 2 },
            { label: "c", prompt: "Find $\\mathrm{Var}(X)$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected value", statement: "$\\mathrm{E}(X)=\\sum x\\,\\mathrm{P}(X=x)$ and $\\mathrm{E}(X^2)=\\sum x^2\\,\\mathrm{P}(X=x)$" },
              { kind: "formula", name: "Variance", statement: "$\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$" },
            ],
            steps: [
              { part: "a", reasoning: "Each face has probability $\\frac16$.", working: "\\mathrm{E}(X)=\\frac{1+2+3+4+5+6}{6}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "=\\frac{21}{6}=3.5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Square each value before averaging.", working: "\\mathrm{E}(X^2)=\\frac{1+4+9+16+25+36}{6}=\\frac{91}{6}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "\\approx15.17", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Apply the variance formula.", working: "\\mathrm{Var}(X)=\\frac{91}{6}-\\left(\\frac{7}{2}\\right)^2=\\frac{35}{12}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "\\approx2.92", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\mathrm{E}(X)=3.5$ (b) $\\mathrm{E}(X^2)=\\frac{91}{6}\\approx15.17$ (c) $\\mathrm{Var}(X)=\\frac{35}{12}\\approx2.92$",
            commonErrors: ["Squaring $\\mathrm{E}(X)=3.5$ to get $12.25$ and calling it $\\mathrm{E}(X^2)$.", "Using $n-1$ style averaging for the variance."],
          },
        },
        {
          id: "aasl-u4-discrete-rv-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For a random variable $X$, $\\mathrm{E}(X)=3$ and $\\mathrm{Var}(X)=1.5$. Find $\\mathrm{E}(X^2)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4.5$" },
              { id: "b", text: "$11$" },
              { id: "c", text: "$10.5$" },
              { id: "d", text: "$7.5$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Variance", statement: "$\\mathrm{Var}(X)=\\mathrm{E}(X^2)-[\\mathrm{E}(X)]^2$, so $\\mathrm{E}(X^2)=\\mathrm{Var}(X)+[\\mathrm{E}(X)]^2$" },
            ],
            steps: [
              { reasoning: "Rearrange the variance formula.", working: "\\mathrm{E}(X^2)=1.5+(3)^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=1.5+9=10.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $\\mathrm{E}(X^2)=10.5$",
            commonErrors: ["Subtracting instead of adding ($4.5$).", "Adding $1.5+3=4.5$ without squaring the mean."],
          },
        },
      ],
    },
  ],
};
