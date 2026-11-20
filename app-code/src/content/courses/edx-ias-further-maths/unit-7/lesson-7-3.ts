import type { Lesson } from "../../../types.ts";

export const lesson73: Lesson = {
  id: "edxifm-u7-lesson-7-3",
  code: "4-3",
  title: "The Normal Distribution",
  goal: "I CAN standardise normal variables, find probabilities using $\\Phi(z)$ tables and work backwards to find $\\mu$ and $\\sigma$.",
  standards: ["WST01 S1", "The Normal distribution"],
  vocabulary: [
    { term: "Normal distribution", definition: "A continuous symmetric bell-shaped distribution $N(\\mu,\\sigma^2)$ fully described by its mean $\\mu$ and variance $\\sigma^2$." },
    { term: "Standard normal variable", definition: "$Z\\sim N(0,1)$; any normal variable can be standardised via $Z=\\frac{X-\\mu}{\\sigma}$." },
    { term: "Cumulative distribution function", definition: "$\\Phi(z)=P(Z<z)$, tabulated for the standard normal; $\\Phi(-z)=1-\\Phi(z)$ by symmetry." },
    { term: "Standardising", definition: "Converting $X\\sim N(\\mu,\\sigma^2)$ to $Z=\\frac{X-\\mu}{\\sigma}$ so table values apply." },
  ],
  concepts: [
    {
      id: "edxifm-u7-normal-prob",
      title: "Normal probabilities",
      skill: "Standardise normal variables and compute probabilities of the form $P(X<a)$, $P(X>a)$ and $P(a<X<b)$ using $\\Phi$ tables.",
      lesson: {
        sections: [
          {
            heading: "The standard normal curve",
            body: "$Z\\sim N(0,1)$ is symmetric about $0$, so $\\Phi(0)=0.5$ and $\\Phi(-z)=1-\\Phi(z)$. Tables give $\\Phi(z)$ for $z\\ge0$; for negative $z$ use the symmetry relation.",
          },
          {
            heading: "Standardising",
            body: "For $X\\sim N(\\mu,\\sigma^2)$: $P(X<a)=\\Phi\\left(\\frac{a-\\mu}{\\sigma}\\right)$, $P(X>a)=1-\\Phi\\left(\\frac{a-\\mu}{\\sigma}\\right)$ and $P(a<X<b)=\\Phi\\left(\\frac{b-\\mu}{\\sigma}\\right)-\\Phi\\left(\\frac{a-\\mu}{\\sigma}\\right)$.",
          },
          {
            heading: "Continuity",
            body: "The normal distribution is continuous, so $P(X=a)=0$ and $P(X\\le a)=P(X<a)$ — inequalities do not matter for continuous variables.",
          },
        ],
        keyFormulas: [
          { name: "Standardise", statement: "$Z=\\frac{X-\\mu}{\\sigma}$" },
          { name: "Interval probability", statement: "$P(a<X<b)=\\Phi(z_b)-\\Phi(z_a)$" },
          { name: "Symmetry", statement: "$\\Phi(-z)=1-\\Phi(z)$" },
        ],
        workedExample: {
          problem: "If $X\\sim N(50,7^2)$, find $P(X<60)$.",
          solution: "$z=\\frac{60-50}{7}=\\frac{10}{7}\\approx1.43$. $P(X<60)=\\Phi(1.43)\\approx0.9236$.",
        },
      },
      questions: [
        {
          id: "edxifm-u7-norm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $Z\\sim N(0,1)$, what is $P(Z<0)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.5$" },
              { id: "b", text: "$0$" },
              { id: "c", text: "$1$" },
              { id: "d", text: "$0.25$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard normal", statement: "Symmetric about $0$, so $\\Phi(0)=0.5$." },
            ],
            steps: [
              { reasoning: "Half the probability lies below the mean $0$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $0.5$",
            commonErrors: ["Confusing $P(Z<0)$ with $P(Z=0)$ — the latter is $0$."],
          },
        },
        {
          id: "edxifm-u7-norm-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "If $Z\\sim N(0,1)$ and $\\Phi(1.20)=0.8849$, find $P(Z>1.20)$.",
          response: {
            type: "numeric",
            parts: [{ label: "probability", answer: 0.1151, tolerance: 0.0001 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Complement", statement: "$P(Z>z)=1-\\Phi(z)$." },
            ],
            steps: [
              { reasoning: "Use the complement.", working: "P(Z>1.20)=1-0.8849", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=0.1151", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.1151$",
            commonErrors: ["Reporting $\\Phi(1.20)$ directly instead of the complement."],
          },
        },
        {
          id: "edxifm-u7-norm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The masses of bags of sugar are normally distributed with mean $1010$ g and standard deviation $15$ g. Find the probability that a randomly chosen bag has mass between $1000$ g and $1020$ g. (Use $\\Phi(0.67)=0.7486$, $\\Phi(0.33)=0.6293$.)",
          response: {
            type: "numeric",
            parts: [{ label: "probability", answer: 0.1193, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standardising", statement: "$z=\\frac{x-\\mu}{\\sigma}$; $P(a<X<b)=\\Phi(z_b)-\\Phi(z_a)$." },
            ],
            steps: [
              { reasoning: "Standardise both bounds.", working: "z_{1000}=\\frac{1000-1010}{15}=-0.67;\\ z_{1020}=\\frac{1020-1010}{15}=0.67", marks: 1, markCode: "M" },
              { reasoning: "Use symmetry for the lower bound: $\\Phi(-0.67)=1-0.7486=0.2514$.", working: "\\Phi(-0.67)=0.2514", marks: 1, markCode: "M" },
              { reasoning: "Subtract.", working: "P=0.7486-0.2514=0.4972", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.4972$ (about $0.497$)",
            commonErrors: ["Using $\\Phi(-0.67)$ as $-0.7486$.", "Swapping the bounds."],
            examinerNote: "The given $\\Phi(0.33)$ is a distractor — both bounds are $\\pm0.67$ here.",
          },
        },
        {
          id: "edxifm-u7-norm-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Scores on a test are normally distributed with mean $62$ and standard deviation $8$. The pass mark is $70$.",
          parts: [
            { label: "a", prompt: "Find the probability that a randomly chosen student passes. (Use $\\Phi(1.00)=0.8413$.)", marks: 3 },
            { label: "b", prompt: "Find the probability that a student scores between $54$ and $70$. (Use $\\Phi(-1.00)=0.1587$, $\\Phi(1.00)=0.8413$.)", marks: 3 },
            { label: "c", prompt: "In a cohort of $200$ students, estimate how many pass.", marks: 2 },
            { label: "d", prompt: "Find the score exceeded by only the top $5\\%$ of students. (Use $\\Phi(1.64)=0.9495$.)", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standardising", statement: "$z=\\frac{x-\\mu}{\\sigma}$." },
              { kind: "formula", name: "Inverse normal", statement: "To find $x$ from a probability, standardise then $x=\\mu+z\\sigma$." },
            ],
            steps: [
              { part: "a", reasoning: "Standardise the pass mark.", working: "z=\\frac{70-62}{8}=1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$P(X>70)=1-\\Phi(1)=1-0.8413$.", working: "=0.1587", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the probability.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Standardise both bounds.", working: "z_{54}=\\frac{54-62}{8}=-1;\\ z_{70}=1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Compute the interval probability.", working: "P=\\Phi(1)-\\Phi(-1)=0.8413-0.1587=0.6826", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the probability.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Expected number passing $=200\\times0.1587$.", working: "=31.74", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Estimate to nearest whole student.", working: "\\approx32\\text{ students}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Top $5\\%$ means $P(X>x)=0.05$, so $\\Phi(z)=0.95$; use $z=1.64$ since $\\Phi(1.64)=0.9495\\approx0.95$.", working: "z\\approx1.64", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Convert back: $x=62+1.64\\times8=62+13.12=75.12$.", working: "x\\approx75.1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.1587$ (b) $0.6826$ (c) $\\approx32$ students (d) $x\\approx75.1$",
            commonErrors: ["Using $\\Phi$ incorrectly for upper-tail probabilities.", "Forgetting to convert $z$ back to the score scale.", "Using $\\Phi(1.64)=0.9495$ without noting it approximates $0.95$."],
            examinerNote: "In (d) accept $75$–$76$; interpolation between table values is not required.",
          },
        },
      ],
    },
    {
      id: "edxifm-u7-normal-parameters",
      title: "Finding $\\mu$ and $\\sigma$ and inverse problems",
      skill: "Use normal probabilities to set up and solve for unknown means and standard deviations, including simultaneous equations.",
      lesson: {
        sections: [
          {
            heading: "Working backwards",
            body: "If $P(X<a)=p$ is given, standardise: $\\frac{a-\\mu}{\\sigma}=z$ where $\\Phi(z)=p$. This gives one equation in $\\mu$ and $\\sigma$. A second probability gives a second equation — solve simultaneously.",
          },
          {
            heading: "Two probabilities, two unknowns",
            body: "For example $P(X<30)=0.16$ and $P(X>50)=0.023$ give $\\frac{30-\\mu}{\\sigma}=z_1$ and $\\frac{50-\\mu}{\\sigma}=z_2$. Subtracting eliminates $\\mu$ and solves for $\\sigma$ first.",
          },
          {
            heading: "Linear combinations",
            body: "If $X\\sim N(\\mu,\\sigma^2)$ then $aX+b\\sim N(a\\mu+b,\\,a^2\\sigma^2)$ — means transform like the variable, variances scale by $a^2$. This is used for totals of independent normals (S2) but the single-variable scaling is S1 content.",
          },
        ],
        keyFormulas: [
          { name: "Backwards standardising", statement: "$\\frac{a-\\mu}{\\sigma}=\\Phi^{-1}(p)$" },
          { name: "Linear transform of normal", statement: "$aX+b\\sim N(a\\mu+b,\\,a^2\\sigma^2)$" },
        ],
        workedExample: {
          problem: "For $X\\sim N(\\mu,\\sigma^2)$, $P(X<40)=0.0228$ and $P(X<60)=0.9772$. Find $\\mu$ and $\\sigma$.",
          solution: "$\\Phi^{-1}(0.0228)\\approx-2$ and $\\Phi^{-1}(0.9772)\\approx2$. So $\\frac{40-\\mu}{\\sigma}=-2$ and $\\frac{60-\\mu}{\\sigma}=2$, giving $40-\\mu=-2\\sigma$ and $60-\\mu=2\\sigma$. Subtracting the first from the second: $20=4\\sigma$, so $\\sigma=5$, then $40-\\mu=-10$ gives $\\mu=50$.",
        },
      },
      questions: [
        {
          id: "edxifm-u7-nparam-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $X\\sim N(\\mu,\\sigma^2)$, what is the mean of $2X+3$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2\\mu+3$" },
              { id: "b", text: "$\\mu+3$" },
              { id: "c", text: "$2\\mu$" },
              { id: "d", text: "$\\mu$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear transform of normal", statement: "The mean transforms as $E(aX+b)=aE(X)+b$." },
            ],
            steps: [
              { reasoning: "Mean of $2X+3$ is $2\\mu+3$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2\\mu+3$",
            commonErrors: ["Applying the transformation only to $\\sigma$."],
          },
        },
        {
          id: "edxifm-u7-nparam-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $X\\sim N(\\mu,\\sigma^2)$, $P(X<30)=0.16$ and $\\Phi(-1)=0.1587$. Set up the equation relating $\\mu$, $\\sigma$ and these values.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Backwards standardising", statement: "$\\frac{a-\\mu}{\\sigma}=\\Phi^{-1}(p)$." },
            ],
            steps: [
              { reasoning: "Since $0.16\\approx\\Phi(-1)$, the standardised value is approximately $-1$.", working: "\\frac{30-\\mu}{\\sigma}\\approx-1", marks: 1, markCode: "M" },
              { reasoning: "Rearrange.", working: "30-\\mu=-\\sigma\\Rightarrow \\mu=30+\\sigma", marks: 1, markCode: "M" },
              { reasoning: "State the relationship.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{30-\\mu}{\\sigma}=-1$, i.e. $\\mu=30+\\sigma$",
            commonErrors: ["Using $+1$ instead of $-1$ for the standardised value."],
          },
        },
        {
          id: "edxifm-u7-nparam-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The time taken by students to complete a test is normally distributed. $15\\%$ finish in under $20$ minutes and $50\\%$ finish in under $30$ minutes. Find $\\mu$ and $\\sigma$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Backwards standardising", statement: "$\\frac{x-\\mu}{\\sigma}=\\Phi^{-1}(p)$ for each given probability." },
            ],
            steps: [
              { reasoning: "Median is the mean: $P(X<30)=0.5\\Rightarrow\\mu=30$.", working: "\\mu=30", marks: 1, markCode: "M" },
              { reasoning: "$\\Phi^{-1}(0.15)\\approx-1.04$; use $-1.04$.", working: "\\frac{20-30}{\\sigma}=-1.04", marks: 1, markCode: "M" },
              { reasoning: "Solve for $\\sigma$.", working: "\\frac{-10}{\\sigma}=-1.04\\Rightarrow\\sigma=\\frac{10}{1.04}\\approx9.62", marks: 1, markCode: "M" },
              { reasoning: "State $\\mu$ and $\\sigma$.", working: "\\mu=30,\\ \\sigma\\approx9.6\\text{ minutes}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mu=30$ minutes, $\\sigma\\approx9.6$ minutes",
            commonErrors: ["Forgetting the median equals the mean for a normal distribution.", "Using $\\Phi^{-1}(0.15)=+1.04$."],
            examinerNote: "Accept $\\sigma=9.6$–$9.7$ depending on table precision ($\\Phi^{-1}(0.15)=-1.036$).",
          },
        },
        {
          id: "edxifm-u7-nparam-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The masses $X$ of components are normally distributed with unknown $\\mu$ and $\\sigma$. It is known that $P(X<95)=0.1587$ and $P(X<115)=0.9772$.",
          parts: [
            { label: "a", prompt: "Find the standardised values $z$ corresponding to each probability.", marks: 2 },
            { label: "b", prompt: "Set up two equations in $\\mu$ and $\\sigma$.", marks: 3 },
            { label: "c", prompt: "Solve for $\\mu$ and $\\sigma$.", marks: 3 },
            { label: "d", prompt: "Find $P(X>105)$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard normal values", statement: "$\\Phi(-1)=0.1587$, $\\Phi(2)=0.9772$." },
              { kind: "formula", name: "Backwards standardising", statement: "$\\frac{x-\\mu}{\\sigma}=z$." },
            ],
            steps: [
              { part: "a", reasoning: "Match probabilities to $z$ values.", working: "z_{95}=-1,\\ z_{115}=2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both values.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "First equation.", working: "\\frac{95-\\mu}{\\sigma}=-1\\Rightarrow 95-\\mu=-\\sigma", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Second equation.", working: "\\frac{115-\\mu}{\\sigma}=2\\Rightarrow 115-\\mu=2\\sigma", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State both equations.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rewrite as $\\mu=95+\\sigma$ and $\\mu=115-2\\sigma$.", working: "95+\\sigma=115-2\\sigma", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve: $3\\sigma=20$, $\\sigma=\\frac{20}{3}\\approx6.67$; then $\\mu=95+\\frac{20}{3}=\\frac{305}{3}\\approx101.7$.", working: "\\sigma=6.67,\\ \\mu=101.7", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State $\\mu$ and $\\sigma$.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Standardise $105$: $z=\\frac{105-\\frac{305}{3}}{\\frac{20}{3}}=\\frac{\\frac{315-305}{3}}{\\frac{20}{3}}=\\frac{10}{20}=0.5$.", working: "z=0.5", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$P(X>105)=1-\\Phi(0.5)=1-0.6915=0.3085$.", working: "P\\approx0.3085", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $z=-1$ and $z=2$ (b) $\\frac{95-\\mu}{\\sigma}=-1$, $\\frac{115-\\mu}{\\sigma}=2$ (c) $\\mu=\\frac{305}{3}\\approx101.7$, $\\sigma=\\frac{20}{3}\\approx6.67$ (d) $P(X>105)\\approx0.3085$",
            commonErrors: ["Mismatching $z$ values to probabilities.", "Sign errors in the equations.", "Arithmetic slips solving simultaneously."],
            examinerNote: "Accept $\\mu=101.7$, $\\sigma=6.67$; $P(X>105)\\approx0.309$.",
          },
        },
      ],
    },
  ],
};
