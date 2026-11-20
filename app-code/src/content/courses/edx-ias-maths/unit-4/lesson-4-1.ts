import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edias-maths-u4-lesson-4-1",
  code: "4-1",
  title: "Summarising Data and Probability",
  goal: "I CAN summarise data using mean, variance and cumulative frequency, and apply probability rules including conditional probability.",
  standards: ["WST01 S1", "Representation and summary of data", "Probability"],
  vocabulary: [
    { term: "Mean", definition: "$\\bar{x}=\\frac{\\sum x}{n}$ for raw data; for frequency tables $\\bar{x}=\\frac{\\sum fx}{\\sum f}$." },
    { term: "Variance", definition: "$\\text{Var}(X)=\\frac{\\sum(x-\\bar{x})^2}{n}$ or $\\frac{\\sum x^2}{n}-\\bar{x}^2$; standard deviation is its square root." },
    { term: "Cumulative frequency", definition: "A running total of frequencies up to each class boundary, used to find medians and quartiles graphically." },
    { term: "Mutually exclusive events", definition: "Events that cannot both occur; $P(A\\cup B)=P(A)+P(B)$." },
    { term: "Conditional probability", definition: "$P(A|B)=\\frac{P(A\\cap B)}{P(B)}$ — the probability of $A$ given that $B$ has occurred." },
  ],
  concepts: [
    {
      id: "edias-maths-u4-data-summary",
      title: "Mean, variance and cumulative frequency",
      skill: "Calculate the mean and variance of data sets and frequency tables, and use cumulative frequency graphs to estimate medians and quartiles.",
      lesson: {
        sections: [
          {
            heading: "Mean and variance",
            body: "For raw data $\\bar{x}=\\frac{\\sum x}{n}$ and $\\text{Var}(X)=\\frac{\\sum x^2}{n}-\\bar{x}^2$ (the 'calculator formula'). For a frequency table use $\\sum fx$ and $\\sum fx^2$ divided by $\\sum f$. Variance measures spread; standard deviation $\\sigma=\\sqrt{\\text{Var}}$.",
          },
          {
            heading: "Cumulative frequency graphs",
            body: "Plot cumulative frequency against the upper class boundary and join with a smooth curve (or straight lines for grouped data). Read off: median at $\\frac{n}{2}$, lower quartile at $\\frac{n}{4}$, upper quartile at $\\frac{3n}{4}$; the interquartile range is $Q_3-Q_1$.",
          },
          {
            heading: "Choosing a measure",
            body: "The mean uses every value but is sensitive to outliers; the median is robust; the mode is simplest. For skewed data report the median and interquartile range.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "$\\bar{x}=\\frac{\\sum x}{n}$" },
          { name: "Variance", statement: "$\\text{Var}(X)=\\frac{\\sum x^2}{n}-\\bar{x}^2$" },
          { name: "Quartiles", statement: "Read at $\\frac{n}{4}$, $\\frac{n}{2}$, $\\frac{3n}{4}$ on the cumulative frequency curve" },
        ],
        workedExample: {
          problem: "Find the mean and variance of $2,4,4,5,10$.",
          solution: "$\\bar{x}=\\frac{25}{5}=5$. $\\sum x^2=4+16+16+25+100=161$. $\\text{Var}=\\frac{161}{5}-25=32.2-25=7.2$.",
        },
      },
      questions: [
        {
          id: "edias-maths-u4-data-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the mean of $3, 7, 8, 10, 12$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$" },
              { id: "b", text: "$40$" },
              { id: "c", text: "$10$" },
              { id: "d", text: "$6$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "$\\bar{x}=\\frac{\\sum x}{n}$." },
            ],
            steps: [
              { reasoning: "$\\frac{3+7+8+10+12}{5}=\\frac{40}{5}=8$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $8$",
            commonErrors: ["Forgetting to divide by $n$."],
          },
        },
        {
          id: "edias-maths-u4-data-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the variance of $1, 2, 3, 4, 5$.",
          response: {
            type: "numeric",
            parts: [{ label: "variance", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Variance", statement: "$\\text{Var}(X)=\\frac{\\sum x^2}{n}-\\bar{x}^2$." },
            ],
            steps: [
              { reasoning: "$\\bar{x}=3$ and $\\sum x^2=1+4+9+16+25=55$.", working: "\\bar{x}=3,\\ \\sum x^2=55", marks: 1, markCode: "M" },
              { reasoning: "Apply the formula.", working: "\\text{Var}=\\frac{55}{5}-9=11-9=2", marks: 1, markCode: "M" },
              { reasoning: "State the variance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\text{Var}=2$",
            commonErrors: ["Using $\\frac{\\sum(x-\\bar{x})^2}{n}$ incorrectly — both forms are valid but arithmetic must be right."],
          },
        },
        {
          id: "edias-maths-u4-data-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The mean of five numbers is $8$. When a sixth number is added, the mean of all six numbers becomes $9$. Find the sixth number.",
          response: {
            type: "numeric",
            parts: [{ label: "sixth number", answer: 14 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean", statement: "$\\bar{x}=\\frac{\\sum x}{n}$, so $\\sum x=n\\bar{x}$." },
            ],
            steps: [
              { reasoning: "Sum of the first five: $5\\times8=40$.", marks: 1, markCode: "M" },
              { reasoning: "Sum of all six: $6\\times9=54$.", working: "\\sum x=6\\times9=54", marks: 1, markCode: "M" },
              { reasoning: "Subtract.", working: "x_6=54-40=14", marks: 1, markCode: "M" },
              { reasoning: "State the sixth number.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$14$",
            commonErrors: ["Adding $9$ to the mean of five instead of using sums.", "Using $n=5$ for the six-number mean."],
          },
        },
        {
          id: "edias-maths-u4-data-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A frequency table records the times (in minutes) taken by 30 students to complete a puzzle.",
          parts: [
            { label: "a", prompt: "Given $\\sum fx=645$ and $\\sum fx^2=14820$, find the mean and variance of the times.", marks: 4 },
            { label: "b", prompt: "State one advantage and one disadvantage of using the mean to summarise this data.", marks: 2 },
            { label: "c", prompt: "Events $A$ and $B$ satisfy $P(A)=0.4$, $P(B)=0.3$ and $P(A\\cap B)=0.1$. Find $P(A\\cup B)$ and state whether $A$ and $B$ are mutually exclusive.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean and variance from frequency table", statement: "$\\bar{x}=\\frac{\\sum fx}{\\sum f}$; $\\text{Var}=\\frac{\\sum fx^2}{\\sum f}-\\bar{x}^2$." },
              { kind: "formula", name: "Addition rule", statement: "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$." },
            ],
            steps: [
              { part: "a", reasoning: "Mean: $\\bar{x}=\\frac{645}{30}=21.5$.", working: "\\bar{x}=21.5\\text{ min}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Second moment: $\\frac{14820}{30}=494$.", working: "\\frac{\\sum fx^2}{\\sum f}=494", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Variance: $494-21.5^2=494-462.25=31.75$.", working: "\\text{Var}=31.75", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State mean and variance.", working: "\\bar{x}=21.5,\\ \\text{Var}=31.75", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Advantage: uses all the data.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Disadvantage: sensitive to outliers / can be distorted by extreme values.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Apply the addition rule.", working: "P(A\\cup B)=0.4+0.3-0.1=0.6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State $P(A\\cup B)$.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Since $P(A\\cap B)=0.1\\neq0$, the events are not mutually exclusive.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) mean $21.5$ min, variance $31.75$ (b) uses all data but sensitive to outliers (c) $P(A\\cup B)=0.6$; not mutually exclusive",
            commonErrors: ["Using $\\sum fx^2$ without dividing by $n$.", "Forgetting to subtract $\\bar{x}^2$.", "Claiming mutual exclusivity despite $P(A\\cap B)>0$."],
            examinerNote: "In (a) accept variance $31.75$ min$^2$; standard deviation $\\approx5.64$ min if asked.",
          },
        },
      ],
    },
    {
      id: "edias-maths-u4-probability",
      title: "Probability rules and conditional probability",
      skill: "Apply the addition and multiplication rules, use Venn diagrams and compute conditional probabilities.",
      lesson: {
        sections: [
          {
            heading: "Addition and multiplication rules",
            body: "For any two events: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. For independent events $P(A\\cap B)=P(A)P(B)$. For conditional probability $P(A|B)=\\frac{P(A\\cap B)}{P(B)}$, which rearranges to $P(A\\cap B)=P(A|B)P(B)$ — the multiplication rule.",
          },
          {
            heading: "Tree diagrams",
            body: "For sequential events, multiply along branches and add across outcomes. Conditional probabilities go on the second set of branches. Check that the final probabilities sum to $1$.",
          },
          {
            heading: "Venn diagrams",
            body: "Two-set Venn diagrams show $A$, $B$ and $A\\cap B$ inside the universal set. Fill in known regions from the outside in: start with $P(A\\cap B)$, then $P(A\\cap B')$ and $P(A'\\cap B)$, then the outside.",
          },
        ],
        keyFormulas: [
          { name: "Addition rule", statement: "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$" },
          { name: "Multiplication rule", statement: "$P(A\\cap B)=P(A|B)P(B)$" },
          { name: "Conditional probability", statement: "$P(A|B)=\\frac{P(A\\cap B)}{P(B)}$" },
        ],
        workedExample: {
          problem: "In a class, $P(\\text{art})=0.4$, $P(\\text{music})=0.3$ and $P(\\text{both})=0.1$. Find $P(\\text{art}|\\text{music})$.",
          solution: "$P(A|M)=\\frac{P(A\\cap M)}{P(M)}=\\frac{0.1}{0.3}=\\frac13$.",
        },
      },
      questions: [
        {
          id: "edias-maths-u4-prob-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Events $A$ and $B$ are independent with $P(A)=0.5$ and $P(B)=0.4$. What is $P(A\\cap B)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.2$" },
              { id: "b", text: "$0.9$" },
              { id: "c", text: "$0.1$" },
              { id: "d", text: "$0.45$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Independent events", statement: "$P(A\\cap B)=P(A)P(B)$." },
            ],
            steps: [
              { reasoning: "$P(A\\cap B)=0.5\\times0.4=0.2$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $0.2$",
            commonErrors: ["Adding probabilities instead of multiplying for independent events."],
          },
        },
        {
          id: "edias-maths-u4-prob-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A bag contains $5$ red and $3$ blue counters. Two counters are drawn at random without replacement. Find the probability that both are red.",
          response: {
            type: "numeric",
            parts: [{ label: "probability", answer: 0.35714, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Multiplication rule", statement: "$P(A\\cap B)=P(A)P(B|A)$ for dependent events." },
            ],
            steps: [
              { reasoning: "First red: $\\frac{5}{8}$; then second red from $7$ remaining: $\\frac{4}{7}$.", working: "\\frac57\\times\\frac47", marks: 1, markCode: "M" },
              { reasoning: "Multiply.", working: "\\frac{20}{56}=\\frac{5}{14}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\frac{5}{14}\\approx0.357", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{5}{14}\\approx0.357$",
            commonErrors: ["Using $\\frac{5}{8}\\times\\frac{5}{8}$ (with replacement).", "Numerator/denominator mismatch."],
            examinerNote: "Accept $0.357$; exact $\\frac{5}{14}$ preferred.",
          },
        },
        {
          id: "edias-maths-u4-prob-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a school, $40\\%$ of students play football, $30\\%$ play cricket and $10\\%$ play both. A student is chosen at random.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Conditional probability", statement: "$P(A|B)=\\frac{P(A\\cap B)}{P(B)}$." },
            ],
            steps: [
              { reasoning: "Identify the required probability: football given cricket, $P(F|C)$.", marks: 1, markCode: "M" },
              { reasoning: "Use $P(F\\cap C)=0.1$ (the 'both' group) and $P(C)=0.3$.", working: "P(F\\cap C)=0.1,\\ P(C)=0.3", marks: 1, markCode: "M" },
              { reasoning: "Apply the conditional probability formula.", working: "P(F|C)=\\frac{0.1}{0.3}=\\frac13", marks: 1, markCode: "M" },
              { reasoning: "State the probability and interpret it.", working: "P(F|C)=\\frac13\\approx0.333", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$P(F|C)=\\frac13\\approx0.333$",
            commonErrors: ["Dividing by $P(F)$ instead of $P(C)$.", "Using $P(F\\cap C)$ alone as the answer."],
          },
        },
        {
          id: "edias-maths-u4-prob-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A factory produces components on two machines. Machine A produces $60\\%$ of output with $2\\%$ defective; Machine B produces $40\\%$ with $5\\%$ defective.",
          parts: [
            { label: "a", prompt: "Draw a tree diagram for the process.", marks: 2 },
            { label: "b", prompt: "Find the probability that a randomly chosen component is defective.", marks: 3 },
            { label: "c", prompt: "Given that a component is defective, find the probability it came from Machine A.", marks: 5 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tree diagram", statement: "Multiply along branches, add across outcomes." },
              { kind: "formula", name: "Conditional probability / Bayes", statement: "$P(A|D)=\\frac{P(D|A)P(A)}{P(D)}$." },
            ],
            steps: [
              { part: "a", reasoning: "First branches: A $0.6$, B $0.4$; second branches: defective $0.02$/$0.05$, good $0.98$/$0.95$.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete the tree with all four outcomes.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Defective paths: $0.6\\times0.02=0.012$ and $0.4\\times0.05=0.02$.", working: "0.012+0.02", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Add.", working: "P(D)=0.032", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the probability.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Apply Bayes: $P(A|D)=\\frac{0.012}{0.032}$.", working: "\\frac{0.012}{0.032}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify.", working: "=\\frac{12}{32}=\\frac38=0.375", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the probability.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Interpret: although A makes most components, B contributes more defectives proportionally.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) tree with A/B then defective/good (b) $P(D)=0.032$ (c) $P(A|D)=\\frac38=0.375$",
            commonErrors: ["Forgetting to multiply along branches.", "Using $P(A)$ instead of $P(D)$ in the denominator of Bayes.", "Rounding intermediate probabilities."],
            examinerNote: "Accept $0.375$ or $\\frac38$; the tree in (a) can be described in words if not drawn.",
          },
        },
      ],
    },
  ],
};
