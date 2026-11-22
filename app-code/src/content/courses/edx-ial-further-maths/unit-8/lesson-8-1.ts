import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "edialfm-u8-lesson-8-1",
  code: "8-1",
  title: "Discrete Probability Distributions",
  goal: "I CAN use the binomial and Poisson distributions, including conditions for their use and probability calculations.",
  standards: ["WST02 S2", "Probability distributions"],
  vocabulary: [
    { term: "Binomial distribution", definition: "$X\\sim B(n,p)$: number of successes in $n$ independent trials each with probability $p$; $P(X=r)=\\binom nr p^r(1-p)^{n-r}$." },
    { term: "Poisson distribution", definition: "$X\\sim\\text{Po}(\\lambda)$: events in fixed interval with mean rate $\\lambda$; $P(X=r)=\\frac{e^{-\\lambda}\\lambda^r}{r!}$." },
    { term: "Expected value", definition: "$E(X)=\\sum xr(x)$; for $B(n,p)$: $np$; for Poisson: $\\lambda$." },
    { term: "Variance", definition: "$\\text{Var}(X)=E(X^2)-[E(X)]^2$; for $B(n,p)$: $np(1-p)$; for Poisson: $\\lambda$." },
  ],
  concepts: [
    {
      id: "edialfm-u8-binomial",
      title: "The binomial distribution",
      skill: "Identify binomial situations and compute probabilities, mean and variance.",
      lesson: {
        sections: [
          {
            heading: "Conditions",
            body: "Binomial applies when: fixed number $n$ of trials, each independent, two outcomes (success/failure), constant probability $p$. Violations (e.g. sampling without replacement from small population) may need hypergeometric instead.",
          },
          {
            heading: "Calculations",
            body: "$P(X=r)=\\binom nr p^r q^{n-r}$ with $q=1-p$. Cumulative probabilities use $P(X\\le r)=\\sum_{k=0}^r$. Mean $np$, variance $npq$.",
          },
          {
            heading: "Normal approximation",
            body: "For large $n$ with $np>5$ and $nq>5$, $B(n,p)\\approx N(np,npq)$ — used in S2 for approximation problems.",
          },
        ],
        keyFormulas: [
          { name: "PMF", statement: "$P(X=r)=\\binom nr p^r(1-p)^{n-r}$" },
          { name: "Mean/variance", statement: "$E(X)=np$, $\\text{Var}=np(1-p)$" },
        ],
        workedExample: {
          problem: "A biased coin ($p=0.3$) is tossed $10$ times. Find $P(X=4)$ and $E(X)$.",
          solution: "$P(X=4)=\\binom{10}{4}(0.3)^4(0.7)^6=210\\times0.0081\\times0.117649\\approx0.200$. $E(X)=3$.",
        },
      },
      questions: [
        {
          id: "edialfm-bin-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT a condition for a binomial distribution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Two outcomes per trial" },
              { id: "b", text: "Fixed number of trials" },
              { id: "c", text: "Constant probability" },
              { id: "d", text: "Trials must be dependent" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Binomial conditions", statement: "Independence required." }],
            steps: [{ reasoning: "Trials must be independent, not dependent.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** dependent trials",
          },
        },
        {
          id: "edialfm-bin-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $X\\sim B(8,0.25)$, find $P(X=3)$.",
          response: {
            type: "numeric",
            parts: [{ label: "prob", answer: 0.2076, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [{ kind: "formula", name: "PMF", statement: "$\\binom83(0.25)^3(0.75)^5$." }],
            steps: [
              { reasoning: "$\\binom83=56$; $56\\times0.015625\\times0.237305=0.2076$.", working: "0.2076", marks: 1, markCode: "M" },
              { reasoning: "State value.", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx0.208$",
            commonErrors: ["Combinatorial coefficient errors."],
          },
        },
        {
          id: "edialfm-bin-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $X\\sim B(20,0.4)$, find $E(X)$, $\\text{Var}(X)$ and $P(X\\ge18)$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "formula", name: "Moments", statement: "$np$, $npq$." }],
            steps: [
              { reasoning: "$E(X)=20\\times0.4=8$; $\\text{Var}=20\\times0.4\\times0.6=4.8$.", working: "8,4.8", marks: 1, markCode: "M" },
              { reasoning: "$P(X\\ge18)=P(18)+P(19)+P(20)=\\binom{20}{18}0.4^{18}0.6^2+\\ldots$ compute: $P(18)=190\\times0.4^{18}\\times0.36$; $0.4^{18}\\approx6.87\\times10^{-8}$; $P(18)\\approx190\\times6.87e-8\\times0.36\\approx4.7e-6$; $P(19)=20\\times0.4^{19}\\times0.6\\approx20\\times2.75e-8\\times0.6\\approx3.3e-7$; $P(20)=0.4^{20}\\approx1.1e-8$; total $\\approx5.0\\times10^{-6}$.", working: "5e-6", marks: 1, markCode: "M" },
              { reasoning: "State moments and probability.", marks: 1, markCode: "A" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$E=8$, $\\text{Var}=4.8$, $P(X\\ge18)\\approx5\\times10^{-6}$",
            commonErrors: ["Cumulative probability setup."],
          },
        },
        {
          id: "edialfm-bin-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A machine produces components with defect rate $p=0.05$. A sample of $n=50$ is taken.",
          parts: [
            { label: "a", prompt: "State the distribution of the number of defectives $D$.", marks: 2 },
            { label: "b", prompt: "Find $P(D=0)$ and $P(D=2)$.", marks: 4 },
            { label: "c", prompt: "Find the probability of at least one defective and comment on whether normal approximation is appropriate.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Binomial application", statement: "$D\\sim B(50,0.05)$." }],
            steps: [
              { part: "a", reasoning: "$D\\sim B(50,0.05)$ — fixed trials, independence, constant $p$.", working: "B(50,0.05)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State distribution.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$P(D=0)=0.95^{50}=0.0769$.", working: "0.0769", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$P(D=2)=\\binom{50}{2}0.05^2\\times0.95^{48}=1225\\times0.0025\\times0.0853=0.261$? Compute: $0.95^{48}=e^{48\\ln0.95}=e^{-2.462}=0.0853$; $1225\\times0.0025=3.0625$; $3.0625\\times0.0853=0.261$.", working: "0.261", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State probabilities.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Check $P(D=2)$ value.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$P(D\\ge1)=1-P(D=0)=1-0.0769=0.923$.", working: "0.923", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State probability.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Normal approx: $np=2.5<5$ — NOT appropriate (also $nq=47.5>5$ fails one condition).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $B(50,0.05)$ (b) $0.0769$, $0.261$ (c) $0.923$; normal approx inappropriate",
            commonErrors: ["Normal approx conditions ignored."],
          },
        },
      ],
    },
    {
      id: "edialfm-u8-poisson",
      title: "The Poisson distribution",
      skill: "Model rare events with the Poisson distribution and compute probabilities.",
      lesson: {
        sections: [
          {
            heading: "When Poisson applies",
            body: "Events occurring randomly in time/space at constant average rate $\\lambda$ per unit: calls per hour, defects per metre, accidents per week. Conditions: events independent, rate constant, two outcomes per small interval.",
          },
          {
            heading: "Calculations",
            body: "$P(X=r)=\\frac{e^{-\\lambda}\\lambda^r}{r!}$; $P(X\\le r)$ cumulative; $E(X)=\\text{Var}(X)=\\lambda$. For interval of length $t$ with rate $\\lambda$ per unit time, use mean $\\lambda t$.",
          },
          {
            heading: "Poisson vs binomial",
            body: "Binomial: fixed $n$ trials. Poisson: events in continuous interval — limit of binomial as $n\\to\\infty$, $p\\to0$ with $np=\\lambda$.",
          },
        ],
        keyFormulas: [
          { name: "PMF", statement: "$P(X=r)=\\frac{e^{-\\lambda}\\lambda^r}{r!}$" },
          { name: "Mean/variance", statement: "$E=\\text{Var}=\\lambda$" },
        ],
        workedExample: {
          problem: "Calls arrive at a call centre at rate $4$ per hour. Find $P(\\text{exactly 2 calls in 30 min})$.",
          solution: "Mean in 30 min $=2$; $P(X=2)=\\frac{e^{-2}2^2}{2!}=\\frac{4e^{-2}}{2}=2e^{-2}\\approx0.271$.",
        },
      },
      questions: [
        {
          id: "edialfm-poi-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $X\\sim\\text{Po}(\\lambda)$, the variance equals:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\lambda^2$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$\\sqrt{\\lambda}$" },
              { id: "d", text: "$\\lambda$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Poisson moments", statement: "$E=\\text{Var}=\\lambda$." }],
            steps: [{ reasoning: "Standard result.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** $\\lambda$",
          },
        },
        {
          id: "edialfm-poi-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Accidents occur at rate $0.1$ per day on a road. Find probability of exactly $1$ accident in a week.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Rate scaling", statement: "Mean for week $=0.7$." }],
            steps: [
              { reasoning: "$\\lambda=0.1\\times7=0.7$; $P(X=1)=0.7e^{-0.7}=0.7\\times0.4966=0.348$.", working: "0.348", marks: 1, markCode: "M" },
              { reasoning: "State value.", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx0.348$",
            commonErrors: ["Not scaling $\\lambda$ for time period."],
          },
        },
        {
          id: "edialfm-poi-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A shop has average $6$ customers per hour. Find $P(\\text{at least 8 customers in the next hour})$.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Cumulative", statement: "$P(X\\ge8)=1-P(X\\le7)$." }],
            steps: [
              { reasoning: "$P(X\\le7)=\\sum_{r=0}^7\\frac{e^{-6}6^r}{r!}\\approx0.744$ (standard table value).", working: "0.744", marks: 1, markCode: "M" },
              { reasoning: "$P(X\\ge8)=1-0.744=0.256$.", working: "0.256", marks: 1, markCode: "M" },
              { reasoning: "State probability.", marks: 1, markCode: "A" },
              { reasoning: "Conclude.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx0.256$",
            commonErrors: ["Wrong tail direction."],
          },
        },
        {
          id: "edialfm-poi-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Flaws occur in a cable at rate $0.02$ per metre. A $100$ m cable is inspected.",
          parts: [
            { label: "a", prompt: "State the distribution of flaws $F$.", marks: 2 },
            { label: "b", prompt: "Find $P(F=0)$ and $P(F=3)$.", marks: 4 },
            { label: "c", prompt: "Find $P(F\\le2)$ and the expected number of flaws.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Poisson application", statement: "$F\\sim\\text{Po}(2)$." }],
            steps: [
              { part: "a", reasoning: "Rate $0.02$/m $\\times100$ m $=2$; $F\\sim\\text{Po}(2)$.", working: "Po(2)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State distribution.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$P(F=0)=e^{-2}=0.135$.", working: "0.135", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$P(F=3)=\\frac{e^{-2}8}{6}=\\frac{4e^{-2}}{3}=0.180$.", working: "0.180", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State values.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Check calculations.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$P(F\\le2)=e^{-2}(1+2+2)=5e^{-2}=0.677$.", working: "0.677", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State probability.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$E(F)=2$.", working: "2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Conclude.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\text{Po}(2)$ (b) $0.135$, $0.180$ (c) $0.677$, $E=2$",
            commonErrors: ["Rate per metre vs total."],
          },
        },
      ],
    },
  ],
};
