import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "aasl-u4-lesson-4-3",
  code: "4-3",
  title: "Probability Distributions",
  goal: "I CAN model situations with binomial and normal distributions, calculate probabilities and use inverse normal to find unknown values.",
  standards: ["SL 4.8", "SL 4.9"],
  vocabulary: [
    { term: "Binomial distribution", definition: "The distribution of the number of successes $X\\sim\\mathrm{B}(n,p)$ in $n$ independent trials, each with the same success probability $p$." },
    { term: "Bernoulli trial", definition: "A single trial with exactly two outcomes, success or failure." },
    { term: "Normal distribution", definition: "A symmetric, bell-shaped continuous distribution $X\\sim\\mathrm{N}(\\mu,\\sigma^2)$ with mean $\\mu$ and standard deviation $\\sigma$." },
    { term: "Standardization", definition: "Converting $X$ to $Z=\\dfrac{X-\\mu}{\\sigma}$, so that $Z\\sim\\mathrm{N}(0,1)$." },
    { term: "Inverse normal", definition: "Finding the value $x$ for which $\\mathrm{P}(X<x)$ equals a given probability." },
    { term: "$z$-value", definition: "The number of standard deviations a value lies above (positive) or below (negative) the mean." },
  ],
  concepts: [
    {
      id: "aasl-u4-binomial",
      title: "The binomial distribution",
      skill: "Identify when a binomial model applies and calculate probabilities, mean and variance for X ~ B(n, p).",
      lesson: {
        sections: [
          {
            heading: "When the model applies",
            body: "Use $X\\sim\\mathrm{B}(n,p)$ when there is a fixed number $n$ of independent trials, each with two outcomes and a constant probability $p$ of success. $X$ counts the successes. The probability formula is $\\mathrm{P}(X=r)=\\binom{n}{r}p^r(1-p)^{n-r}$.",
          },
          {
            heading: "Mean, variance and cumulative probabilities",
            body: "For $X\\sim\\mathrm{B}(n,p)$: $\\mathrm{E}(X)=np$ and $\\mathrm{Var}(X)=np(1-p)$. For 'at least' probabilities use the complement, for example $\\mathrm{P}(X\\ge1)=1-\\mathrm{P}(X=0)$ and $\\mathrm{P}(X\\ge4)=1-\\mathrm{P}(X\\le3)$. On a GDC use binomial pdf for $\\mathrm{P}(X=r)$ and binomial cdf for $\\mathrm{P}(X\\le r)$.",
          },
        ],
        keyFormulas: [
          { name: "Binomial probability", statement: "$\\mathrm{P}(X=r)=\\binom{n}{r}p^r(1-p)^{n-r}$" },
          { name: "Mean", statement: "$\\mathrm{E}(X)=np$" },
          { name: "Variance", statement: "$\\mathrm{Var}(X)=np(1-p)$" },
        ],
        workedExample: {
          problem: "$X\\sim\\mathrm{B}(3,0.5)$. Find $\\mathrm{P}(X=2)$.",
          solution: "$\\mathrm{P}(X=2)=\\binom32(0.5)^2(0.5)^1=3\\times0.125=0.375$.",
        },
      },
      questions: [
        {
          id: "aasl-u4-binomial-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "$X\\sim\\mathrm{B}(10,0.3)$. Find $\\mathrm{E}(X)$ and $\\mathrm{Var}(X)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{E}(X)=3$, $\\mathrm{Var}(X)=0.21$" },
              { id: "b", text: "$\\mathrm{E}(X)=3$, $\\mathrm{Var}(X)=2.1$" },
              { id: "c", text: "$\\mathrm{E}(X)=3$, $\\mathrm{Var}(X)=3$" },
              { id: "d", text: "$\\mathrm{E}(X)=2.1$, $\\mathrm{Var}(X)=3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean and variance of a binomial", statement: "$\\mathrm{E}(X)=np$, $\\mathrm{Var}(X)=np(1-p)$" },
            ],
            steps: [
              { reasoning: "Multiply $n$ by $p$.", working: "\\mathrm{E}(X)=10\\times0.3=3", marks: 1, markCode: "A" },
              { reasoning: "Multiply the mean by $1-p=0.7$.", working: "\\mathrm{Var}(X)=3\\times0.7=2.1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\mathrm{E}(X)=3$, $\\mathrm{Var}(X)=2.1$",
            commonErrors: ["Using $np$ for the variance.", "Swapping mean and variance."],
          },
        },
        {
          id: "aasl-u4-binomial-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A fair coin is tossed $4$ times. Let $X$ be the number of heads.\n\\nFind $\\mathrm{P}(X=3)$ and $\\mathrm{P}(X\\ge1)$, giving exact answers as fractions.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\mathrm{P}(X=3)$", answer: 0.25 },
              { label: "$\\mathrm{P}(X\\ge1)$", answer: 0.9375 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial probability", statement: "$\\mathrm{P}(X=r)=\\binom nr p^r(1-p)^{n-r}$ with $X\\sim\\mathrm{B}(4,\\tfrac12)$." },
              { kind: "principle", name: "Complement", statement: "$\\mathrm{P}(X\\ge1)=1-\\mathrm{P}(X=0)$" },
            ],
            steps: [
              { reasoning: "Substitute $n=4$, $p=\\frac12$, $r=3$.", working: "\\mathrm{P}(X=3)=\\binom43\\left(\\tfrac12\\right)^4=\\frac{4}{16}=\\frac14", marks: 1, markCode: "A" },
              { reasoning: "Use the complement of no heads.", working: "\\mathrm{P}(X\\ge1)=1-\\left(\\tfrac12\\right)^4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=\\frac{15}{16}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathrm{P}(X=3)=\\dfrac14$; $\\mathrm{P}(X\\ge1)=\\dfrac{15}{16}$",
            commonErrors: ["Forgetting the factor $\\binom43=4$.", "Computing $\\mathrm{P}(X\\ge1)$ as $\\mathrm{P}(X=1)$."],
          },
        },
        {
          id: "aasl-u4-binomial-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "$X\\sim\\mathrm{B}(12,0.2)$. Find $\\mathrm{P}(X=3)$ and $\\mathrm{P}(X\\ge4)$. Give your answers to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\mathrm{P}(X=3)$", answer: 0.236, tolerance: 0.001 },
              { label: "$\\mathrm{P}(X\\ge4)$", answer: 0.205, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial probability", statement: "$\\mathrm{P}(X=r)=\\binom nr p^r(1-p)^{n-r}$" },
              { kind: "principle", name: "Complement", statement: "$\\mathrm{P}(X\\ge4)=1-\\mathrm{P}(X\\le3)$" },
            ],
            steps: [
              { reasoning: "Substitute into the formula (or use binomial pdf).", working: "\\mathrm{P}(X=3)=\\binom{12}{3}(0.2)^3(0.8)^9=220\\times0.008\\times0.134218", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=0.236", marks: 1, markCode: "A" },
              { reasoning: "Use the complement with the cumulative probability (binomial cdf).", working: "\\mathrm{P}(X\\le3)=0.7946", marks: 1, markCode: "M" },
              { reasoning: "Subtract from $1$.", working: "\\mathrm{P}(X\\ge4)=1-0.7946=0.205", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathrm{P}(X=3)\\approx0.236$; $\\mathrm{P}(X\\ge4)\\approx0.205$",
            commonErrors: ["Using $1-\\mathrm{P}(X\\le4)$ for $\\mathrm{P}(X\\ge4)$.", "Using $0.2$ in place of $0.8$ for the failure probability."],
          },
        },
        {
          id: "aasl-u4-binomial-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "A factory produces light bulbs. Each bulb is independently defective with probability $0.05$. A quality inspector selects a random sample of $20$ bulbs. Let $X$ be the number of defective bulbs in the sample.",
          parts: [
            { label: "a", prompt: "Write down the distribution of $X$ and find $\\mathrm{E}(X)$ and $\\mathrm{Var}(X)$.", marks: 2 },
            { label: "b", prompt: "Find the probability that the sample contains no defective bulbs. Give your answer to 3 significant figures.", marks: 2 },
            { label: "c", prompt: "Find the probability that the sample contains at least two defective bulbs. Give your answer to 3 significant figures.", marks: 3 },
            { label: "d", prompt: "The inspector now takes a sample of $n$ bulbs. Find the smallest value of $n$ such that the probability of finding at least one defective bulb exceeds $0.9$.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\mathrm{E}(X)$", answer: 1 },
              { label: "(a) $\\mathrm{Var}(X)$", answer: 0.95 },
              { label: "(b) $\\mathrm{P}(X=0)$", answer: 0.358, tolerance: 0.001 },
              { label: "(c) $\\mathrm{P}(X\\ge2)$", answer: 0.264, tolerance: 0.001 },
              { label: "(d) smallest $n$", answer: 45 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial model", statement: "$X\\sim\\mathrm{B}(n,p)$: $\\mathrm{P}(X=r)=\\binom nr p^r(1-p)^{n-r}$, $\\mathrm{E}(X)=np$, $\\mathrm{Var}(X)=np(1-p)$." },
              { kind: "principle", name: "Complement", statement: "$\\mathrm{P}(\\text{at least one})=1-\\mathrm{P}(\\text{none})$" },
            ],
            steps: [
              { part: "a", reasoning: "Fixed number of independent trials with constant $p$.", working: "X\\sim\\mathrm{B}(20,0.05)", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Apply the formulas.", working: "\\mathrm{E}(X)=1,\\quad \\mathrm{Var}(X)=20(0.05)(0.95)=0.95", marks: 1, markCode: "A" },
              { part: "b", reasoning: "All $20$ bulbs must be non-defective.", working: "\\mathrm{P}(X=0)=0.95^{20}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=0.358", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use the complement of $0$ or $1$ defective bulbs.", working: "\\mathrm{P}(X\\ge2)=1-\\mathrm{P}(X=0)-\\mathrm{P}(X=1)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Find $\\mathrm{P}(X=1)$.", working: "\\mathrm{P}(X=1)=20(0.05)(0.95)^{19}=0.3774", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Subtract.", working: "1-0.3585-0.3774=0.264", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Set up the inequality for at least one defective bulb.", working: "1-0.95^n>0.9\\Rightarrow 0.95^n<0.1", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Take logarithms; dividing by $\\ln0.95<0$ reverses the inequality.", working: "n>\\frac{\\ln0.1}{\\ln0.95}=44.9", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$n$ must be an integer.", working: "n=45", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\mathrm{B}(20,0.05)$, mean $1$, variance $0.95$ (b) $0.358$ (c) $0.264$ (d) $n=45$",
            commonErrors: ["Not reversing the inequality when dividing by $\\ln0.95$.", "Computing $\\mathrm{P}(X\\ge2)=1-\\mathrm{P}(X=0)$ only."],
            examinerNote: "In (d) a table of values on the GDC is also accepted: $0.95^{44}=0.105>0.1$ and $0.95^{45}=0.0994<0.1$.",
          },
        },
        {
          id: "aasl-u4-binomial-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "$X\\sim\\mathrm{B}(8,0.25)$. Find $\\mathrm{E}(X)$ and $\\mathrm{Var}(X)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mathrm{E}(X)=2$, $\\mathrm{Var}(X)=0.375$" },
              { id: "b", text: "$\\mathrm{E}(X)=0.25$, $\\mathrm{Var}(X)=1.5$" },
              { id: "c", text: "$\\mathrm{E}(X)=2$, $\\mathrm{Var}(X)=1.5$" },
              { id: "d", text: "$\\mathrm{E}(X)=2$, $\\mathrm{Var}(X)=2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Mean and variance of a binomial", statement: "$\\mathrm{E}(X)=np$, $\\mathrm{Var}(X)=np(1-p)$" },
            ],
            steps: [
              { reasoning: "Multiply $n$ by $p$.", working: "\\mathrm{E}(X)=8\\times0.25=2", marks: 1, markCode: "A" },
              { reasoning: "Multiply the mean by $1-p=0.75$.", working: "\\mathrm{Var}(X)=2\\times0.75=1.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\mathrm{E}(X)=2$, $\\mathrm{Var}(X)=1.5$",
            commonErrors: ["Using $np^2$ or $p(1-p)$ alone for the variance.", "Swapping the mean and variance."],
          },
        },
        {
          id: "aasl-u4-binomial-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "$X\\sim\\mathrm{B}(5,0.4)$. Find $\\mathrm{P}(X=0)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.4$" },
              { id: "b", text: "$0.6$" },
              { id: "c", text: "$0.0102$" },
              { id: "d", text: "$0.0778$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial probability", statement: "$\\mathrm{P}(X=0)=(1-p)^n$" },
            ],
            steps: [
              { reasoning: "No successes means every trial is a failure.", working: "\\mathrm{P}(X=0)=0.6^5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=0.07776\\approx0.0778", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\mathrm{P}(X=0)\\approx0.0778$",
            commonErrors: ["Using $0.4^5=0.0102$ (the probability of five successes).", "Using $1-0.4$ incorrectly as $0.4$."],
          },
        },
        {
          id: "aasl-u4-binomial-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "$X\\sim\\mathrm{B}(6,0.5)$. Find $\\mathrm{P}(X=2)$ and $\\mathrm{P}(X\\ge5)$, giving exact fractions or decimals to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\mathrm{P}(X=2)$", answer: 0.234 },
              { label: "$\\mathrm{P}(X\\ge5)$", answer: 0.109 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial probability", statement: "$\\mathrm{P}(X=r)=\\binom nr p^r(1-p)^{n-r}$" },
              { kind: "principle", name: "Complement", statement: "$\\mathrm{P}(X\\ge5)=\\mathrm{P}(X=5)+\\mathrm{P}(X=6)$" },
            ],
            steps: [
              { reasoning: "Substitute $n=6$, $p=\\frac12$, $r=2$.", working: "\\mathrm{P}(X=2)=\\binom62\\left(\\tfrac12\\right)^6=\\frac{15}{64}", marks: 1, markCode: "A" },
              { reasoning: "Evaluate.", working: "\\approx0.234", marks: 1, markCode: "A" },
              { reasoning: "Add the probabilities for $5$ and $6$ successes.", working: "\\mathrm{P}(X\\ge5)=\\frac{6+1}{64}=\\frac{7}{64}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\approx0.109", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathrm{P}(X=2)=\\dfrac{15}{64}\\approx0.234$; $\\mathrm{P}(X\\ge5)=\\dfrac{7}{64}\\approx0.109$",
            commonErrors: ["Forgetting the binomial coefficient $\\binom62=15$.", "Computing $\\mathrm{P}(X\\ge5)$ as $1-\\mathrm{P}(X\\le4)$, which includes all lower values."],
          },
        },
        {
          id: "aasl-u4-binomial-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following situations can be modelled by a binomial distribution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of heads when a fair coin is tossed $10$ times." },
              { id: "b", text: "The heights of $20$ students in a class." },
              { id: "c", text: "The number of goals scored in a football match." },
              { id: "d", text: "The number of pages in a book." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Binomial model", statement: "$X\\sim\\mathrm{B}(n,p)$ requires a fixed number of independent trials, each with two outcomes and constant success probability $p$." },
            ],
            steps: [
              { reasoning: "Check each option for fixed $n$, independence, two outcomes and constant $p$.", marks: 1, markCode: "M" },
              { reasoning: "Only (a) satisfies all four conditions; goals are not independent trials with constant probability, heights and page counts are not counts of successes in Bernoulli trials.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Tossing a fair coin $10$ times",
            commonErrors: ["Thinking any count of events is binomial without checking independence and constant $p$."],
          },
        },
        {
          id: "aasl-u4-binomial-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "$X\\sim\\mathrm{B}(10,0.3)$. Find $\\mathrm{P}(X=4)$ and $\\mathrm{P}(X\\le2)$, giving your answers to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\mathrm{P}(X=4)$", answer: 0.2, tolerance: 0.001 },
              { label: "$\\mathrm{P}(X\\le2)$", answer: 0.383, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial probability", statement: "$\\mathrm{P}(X=r)=\\binom{10}{r}(0.3)^r(0.7)^{10-r}$" },
              { kind: "principle", name: "Cumulative probability", statement: "Use binomial cdf for $\\mathrm{P}(X\\le r)$, or sum the individual terms." },
            ],
            steps: [
              { reasoning: "Substitute into the formula (or use binomial pdf).", working: "\\mathrm{P}(X=4)=\\binom{10}{4}(0.3)^4(0.7)^6=210\\times0.0081\\times0.117649", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=0.200", marks: 1, markCode: "A" },
              { reasoning: "Sum the probabilities for $0$, $1$ and $2$ successes (or use binomial cdf).", working: "\\mathrm{P}(X\\le2)=0.0282+0.1211+0.2335", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=0.383", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathrm{P}(X=4)\\approx0.200$; $\\mathrm{P}(X\\le2)\\approx0.383$",
            commonErrors: ["Using $0.3$ instead of $0.7$ for the failure probability.", "Computing $\\mathrm{P}(X\\le2)$ as $1-\\mathrm{P}(X\\ge3)$ without summing all lower terms correctly."],
          },
        },
        {
          id: "aasl-u4-binomial-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "$X\\sim\\mathrm{B}(4,0.2)$. Find $\\mathrm{P}(X\\ge1)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.8$" },
              { id: "b", text: "$0.4096$" },
              { id: "c", text: "$0.0016$" },
              { id: "d", text: "$0.5904$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Complement", statement: "$\\mathrm{P}(X\\ge1)=1-\\mathrm{P}(X=0)$" },
            ],
            steps: [
              { reasoning: "Use the complement of no successes.", working: "\\mathrm{P}(X\\ge1)=1-0.8^4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=1-0.4096=0.5904", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\mathrm{P}(X\\ge1)=0.5904$",
            commonErrors: ["Giving $0.8^4=0.4096$, which is $\\mathrm{P}(X=0)$."],
          },
        },
        {
          id: "aasl-u4-binomial-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "$X\\sim\\mathrm{B}(20,0.1)$.",
          parts: [
            { label: "a", prompt: "Write down the distribution of $X$, and find $\\mathrm{E}(X)$ and $\\mathrm{Var}(X)$.", marks: 2 },
            { label: "b", prompt: "Find the probability that $X=0$. Give your answer to 3 significant figures.", marks: 2 },
            { label: "c", prompt: "Find the probability that $X\\ge3$. Give your answer to 3 significant figures.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial model", statement: "$X\\sim\\mathrm{B}(n,p)$: $\\mathrm{P}(X=r)=\\binom nr p^r(1-p)^{n-r}$, $\\mathrm{E}(X)=np$, $\\mathrm{Var}(X)=np(1-p)$." },
              { kind: "principle", name: "Complement", statement: "$\\mathrm{P}(X\\ge3)=1-\\mathrm{P}(X\\le2)$" },
            ],
            steps: [
              { part: "a", reasoning: "There are $20$ independent trials with constant success probability $0.1$.", working: "X\\sim\\mathrm{B}(20,0.1)", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Apply the mean and variance formulas.", working: "\\mathrm{E}(X)=2,\\quad \\mathrm{Var}(X)=20(0.1)(0.9)=1.8", marks: 1, markCode: "A" },
              { part: "b", reasoning: "All $20$ trials must be failures.", working: "\\mathrm{P}(X=0)=0.9^{20}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=0.122", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use the complement with the cumulative probability (binomial cdf).", working: "\\mathrm{P}(X\\le2)=0.6769", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Subtract from $1$.", working: "\\mathrm{P}(X\\ge3)=1-0.6769", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluate.", working: "=0.323", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\mathrm{B}(20,0.1)$, mean $2$, variance $1.8$ (b) $0.122$ (c) $0.323$",
            commonErrors: ["Using $\\mathrm{P}(X\\ge3)=1-\\mathrm{P}(X\\le3)$, which removes one term too many.", "Reporting the variance as $2$ instead of $1.8$."],
          },
        },
        {
          id: "aasl-u4-binomial-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "$X\\sim\\mathrm{B}(n,0.5)$ and $\\mathrm{P}(X=0)=0.03125$. Find the value of $n$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$5$" },
              { id: "d", text: "$10$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial probability", statement: "$\\mathrm{P}(X=0)=(1-p)^n=0.5^n$" },
            ],
            steps: [
              { reasoning: "Set the no-success probability equal to the given value.", working: "0.5^n=0.03125=\\frac{1}{32}", marks: 1, markCode: "M" },
              { reasoning: "Recognize $\\frac{1}{32}=\\left(\\frac12\\right)^5$.", working: "n=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $n=5$",
            commonErrors: ["Taking $\\log_{0.5}$ incorrectly or guessing $n$ without checking $0.5^n$."],
          },
        },
        {
          id: "aasl-u4-binomial-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "$X\\sim\\mathrm{B}(5,0.5)$. Find $\\mathrm{P}(X=0)+\\mathrm{P}(X=5)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.5$" },
              { id: "b", text: "$0.03125$" },
              { id: "c", text: "$0.125$" },
              { id: "d", text: "$0.0625$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial probability", statement: "$\\mathrm{P}(X=r)=\\binom nr p^r(1-p)^{n-r}$ with $p=\\frac12$, so $\\mathrm{P}(X=r)=\\binom nr\\left(\\frac12\\right)^5$" },
            ],
            steps: [
              { reasoning: "The extreme outcomes each have only one arrangement.", working: "\\mathrm{P}(X=0)=\\mathrm{P}(X=5)=\\frac{1}{32}", marks: 1, markCode: "M" },
              { reasoning: "Add the two probabilities.", working: "\\frac{1}{32}+\\frac{1}{32}=\\frac{2}{32}=0.0625", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $0.0625$",
            commonErrors: ["Giving only one of the two probabilities ($0.03125$).", "Using $\\binom51=5$ for $\\mathrm{P}(X=5)$."],
          },
        },
        {
          id: "aasl-u4-binomial-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A biased coin has probability $0.3$ of landing heads. The coin is tossed $5$ times and $X$ is the number of heads.",
          parts: [
            { label: "a", prompt: "Write down the distribution of $X$, and find $\\mathrm{E}(X)$ and $\\mathrm{Var}(X)$.", marks: 2 },
            { label: "b", prompt: "Find $\\mathrm{P}(X=2)$. Give your answer to 3 significant figures.", marks: 2 },
            { label: "c", prompt: "Find $\\mathrm{P}(X\\le1)$. Give your answer to 3 significant figures.", marks: 2 },
            { label: "d", prompt: "Hence find $\\mathrm{P}(X\\ge2)$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial model", statement: "$X\\sim\\mathrm{B}(n,p)$: $\\mathrm{P}(X=r)=\\binom nr p^r(1-p)^{n-r}$, $\\mathrm{E}(X)=np$, $\\mathrm{Var}(X)=np(1-p)$." },
              { kind: "principle", name: "Complement", statement: "$\\mathrm{P}(X\\ge2)=1-\\mathrm{P}(X\\le1)$" },
            ],
            steps: [
              { part: "a", reasoning: "Fixed number of independent trials with constant success probability.", working: "X\\sim\\mathrm{B}(5,0.3)", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Apply the mean and variance formulas.", working: "\\mathrm{E}(X)=1.5,\\quad \\mathrm{Var}(X)=5(0.3)(0.7)=1.05", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute into the binomial probability formula.", working: "\\mathrm{P}(X=2)=\\binom52(0.3)^2(0.7)^3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=10\\times0.09\\times0.343=0.309", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Sum the probabilities for $0$ and $1$ heads.", working: "\\mathrm{P}(X\\le1)=0.7^5+5(0.3)(0.7)^4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "=0.1681+0.3601=0.528", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Use the complement.", working: "\\mathrm{P}(X\\ge2)=1-0.528=0.472", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\mathrm{B}(5,0.3)$, mean $1.5$, variance $1.05$ (b) $0.309$ (c) $0.528$ (d) $0.472$",
            commonErrors: ["Using $0.3$ as the failure probability in (b) and (c).", "In (d), computing $1-\\mathrm{P}(X=2)$ instead of $1-\\mathrm{P}(X\\le1)$."],
          },
        },
        {
          id: "aasl-u4-binomial-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "A machine produces widgets. Each widget is independently defective with probability $0.08$. A random sample of $50$ widgets is taken and $X$ is the number of defective widgets in the sample.",
          parts: [
            { label: "a", prompt: "Write down the distribution of $X$, and find $\\mathrm{E}(X)$ and $\\mathrm{Var}(X)$.", marks: 2 },
            { label: "b", prompt: "Find the probability that the sample contains no defective widgets. Give your answer to 3 significant figures.", marks: 2 },
            { label: "c", prompt: "Find the probability that the sample contains at least two defective widgets. Give your answer to 3 significant figures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial model", statement: "$X\\sim\\mathrm{B}(n,p)$: $\\mathrm{E}(X)=np$, $\\mathrm{Var}(X)=np(1-p)$, $\\mathrm{P}(X=r)=\\binom nr p^r(1-p)^{n-r}$." },
              { kind: "principle", name: "Complement", statement: "$\\mathrm{P}(X\\ge2)=1-\\mathrm{P}(X=0)-\\mathrm{P}(X=1)$" },
            ],
            steps: [
              { part: "a", reasoning: "Fixed number of independent trials with constant defect probability.", working: "X\\sim\\mathrm{B}(50,0.08)", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Apply the mean and variance formulas.", working: "\\mathrm{E}(X)=4,\\quad \\mathrm{Var}(X)=50(0.08)(0.92)=3.68", marks: 1, markCode: "A" },
              { part: "b", reasoning: "All $50$ widgets must be non-defective.", working: "\\mathrm{P}(X=0)=0.92^{50}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=0.0155", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use the complement of $0$ or $1$ defective widgets; find $\\mathrm{P}(X=1)$.", working: "\\mathrm{P}(X=1)=50(0.08)(0.92)^{49}=0.0673", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Subtract from $1$ and evaluate.", working: "1-0.0155-0.0673=0.917", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\mathrm{B}(50,0.08)$, mean $4$, variance $3.68$ (b) $0.0155$ (c) $0.917$",
            commonErrors: ["Computing $\\mathrm{P}(X\\ge2)=1-\\mathrm{P}(X=0)$ only, which includes the single-defect case.", "Rounding $0.92^{50}$ too early in part (c)."],
          },
        },
        {
          id: "aasl-u4-binomial-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "$X\\sim\\mathrm{B}(15,0.2)$. Find $\\mathrm{P}(X=2)$ and $\\mathrm{P}(X>2)$, giving your answers to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\mathrm{P}(X=2)$", answer: 0.231, tolerance: 0.001 },
              { label: "$\\mathrm{P}(X>2)$", answer: 0.602, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial probability", statement: "$\\mathrm{P}(X=r)=\\binom{15}{r}(0.2)^r(0.8)^{15-r}$" },
              { kind: "principle", name: "Complement", statement: "$\\mathrm{P}(X>2)=1-\\mathrm{P}(X\\le2)$" },
            ],
            steps: [
              { reasoning: "Substitute into the formula (or use binomial pdf).", working: "\\mathrm{P}(X=2)=\\binom{15}{2}(0.2)^2(0.8)^{13}=105\\times0.04\\times0.0550", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=0.231", marks: 1, markCode: "A" },
              { reasoning: "Use the complement with the cumulative probability.", working: "\\mathrm{P}(X\\le2)=0.398 \\Rightarrow \\mathrm{P}(X>2)=1-0.398", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=0.602", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathrm{P}(X=2)\\approx0.231$; $\\mathrm{P}(X>2)\\approx0.602$",
            commonErrors: ["Using $1-\\mathrm{P}(X=2)$ instead of $1-\\mathrm{P}(X\\le2)$.", "Mixing up $p=0.2$ and $1-p=0.8$."],
          },
        },
      ],
    },
    {
      id: "aasl-u4-normal",
      title: "The normal distribution",
      skill: "Standardize, find normal probabilities with a GDC or symmetry, and use inverse normal to find unknown values or parameters.",
      lesson: {
        sections: [
          {
            heading: "Probabilities and standardization",
            body: "For $X\\sim\\mathrm{N}(\\mu,\\sigma^2)$ the curve is symmetric about $\\mu$, with total area $1$. About $68\\%$ of values lie within $1$ standard deviation of the mean, $95\\%$ within $2$ and $99.7\\%$ within $3$. Standardizing with $Z=\\dfrac{X-\\mu}{\\sigma}$ lets you use the standard normal $Z\\sim\\mathrm{N}(0,1)$. Sketching the curve and shading the required area makes symmetry arguments clear: for example $\\mathrm{P}(X<\\mu-a)=\\mathrm{P}(X>\\mu+a)$.",
          },
          {
            heading: "Inverse normal",
            body: "When a probability is given and a value of $X$ is required, use the inverse normal function: $\\mathrm{P}(X<k)=p$ gives $k=\\mu+z\\sigma$ where $z$ is the value with $\\mathrm{P}(Z<z)=p$. For 'upper tail' probabilities, convert to a lower-tail probability first: $\\mathrm{P}(X>k)=0.1$ means $\\mathrm{P}(X<k)=0.9$. If $\\mu$ and $\\sigma$ are unknown, two probability conditions give two equations $\\mu+z_1\\sigma=x_1$ and $\\mu+z_2\\sigma=x_2$.",
          },
        ],
        keyFormulas: [
          { name: "Standardization", statement: "$z=\\dfrac{x-\\mu}{\\sigma}$" },
          { name: "Inverse standardization", statement: "$x=\\mu+z\\sigma$" },
          { name: "Symmetry", statement: "$\\mathrm{P}(X<\\mu-a)=\\mathrm{P}(X>\\mu+a)$" },
        ],
        workedExample: {
          problem: "$X\\sim\\mathrm{N}(60,\\,5^2)$. Find the $z$-value for $x=70$ and state $\\mathrm{P}(X<60)$.",
          solution: "$z=\\dfrac{70-60}{5}=2$, so $70$ is two standard deviations above the mean. By symmetry $\\mathrm{P}(X<60)=0.5$.",
        },
      },
      questions: [
        {
          id: "aasl-u4-normal-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "$X\\sim\\mathrm{N}(50,\\,4^2)$. What is the standardized value $z$ corresponding to $x=58$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.5$" },
              { id: "b", text: "$4$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$8$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standardization", statement: "$z=\\dfrac{x-\\mu}{\\sigma}$" },
            ],
            steps: [
              { reasoning: "Here $\\sigma=4$, not $16$.", working: "z=\\frac{58-50}{4}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "z=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $z=2$",
            commonErrors: ["Dividing by the variance $16$ ($z=0.5$).", "Forgetting to divide by $\\sigma$ ($z=8$)."],
          },
        },
        {
          id: "aasl-u4-normal-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The random variable $X\\sim\\mathrm{N}(\\mu,\\sigma^2)$ satisfies $\\mathrm{P}(X<20)=0.2$ and $\\mathrm{P}(X>40)=0.2$.\n\\nFind the value of $\\mu$, and hence find $\\mathrm{P}(20<X<40)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\mu$", answer: 30 },
              { label: "$\\mathrm{P}(20<X<40)$", answer: 0.6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Symmetry of the normal curve", statement: "The mean lies midway between two values with equal tail probabilities in opposite tails." },
              { kind: "principle", name: "Total probability", statement: "The probabilities of the three regions add to $1$." },
            ],
            steps: [
              { reasoning: "The tails below $20$ and above $40$ are equal, so by symmetry $\\mu$ is the midpoint.", working: "\\mu=\\frac{20+40}{2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\mu=30", marks: 1, markCode: "A" },
              { reasoning: "Subtract the two tails from $1$.", working: "\\mathrm{P}(20<X<40)=1-0.2-0.2=0.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mu=30$; $\\mathrm{P}(20<X<40)=0.6$",
            commonErrors: ["Taking $\\mu$ as $20$ or $40$.", "Giving $0.4$ by subtracting only one tail."],
          },
        },
        {
          id: "aasl-u4-normal-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The scores on a test are modelled by $X\\sim\\mathrm{N}(70,\\,10^2)$.\n\\nFind $\\mathrm{P}(X>85)$. The top $10\\%$ of students receive a distinction. Find the lowest score needed for a distinction. Give both answers to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\mathrm{P}(X>85)$", answer: 0.0668, tolerance: 0.0005 },
              { label: "Lowest distinction score", answer: 82.8, tolerance: 0.05 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standardization", statement: "$z=\\dfrac{x-\\mu}{\\sigma}$ and $x=\\mu+z\\sigma$" },
              { kind: "principle", name: "Inverse normal", statement: "$\\mathrm{P}(X>k)=0.1\\iff\\mathrm{P}(X<k)=0.9$" },
            ],
            steps: [
              { reasoning: "Use the GDC normal cdf with lower bound $85$ (or $z=1.5$).", working: "\\mathrm{P}(X>85)=\\mathrm{P}(Z>1.5)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=0.0668", marks: 1, markCode: "A" },
              { reasoning: "The top $10\\%$ means a lower-tail probability of $0.9$; use inverse normal.", working: "\\mathrm{P}(X<k)=0.9,\\quad z=1.2816", marks: 1, markCode: "M" },
              { reasoning: "Convert back to a score.", working: "k=70+10(1.2816)=82.8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathrm{P}(X>85)\\approx0.0668$; lowest score $\\approx82.8$",
            commonErrors: ["Using inverse normal with probability $0.1$, which gives the bottom $10\\%$ ($57.2$).", "Forgetting to convert $z$ back to a score."],
          },
        },
        {
          id: "aasl-u4-normal-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "The masses of apples from an orchard are normally distributed with mean $150$ g and standard deviation $12$ g.",
          parts: [
            { label: "a", prompt: "Find the probability that a randomly chosen apple has mass less than $130$ g. Give your answer to 3 significant figures.", marks: 2 },
            { label: "b", prompt: "Find the probability that a randomly chosen apple has mass between $140$ g and $165$ g. Give your answer to 3 significant figures.", marks: 2 },
            { label: "c", prompt: "The heaviest $10\\%$ of apples are classed as 'large'. Find the minimum mass of a large apple, to the nearest gram.", marks: 2 },
            { label: "d", prompt: "A box contains $10$ randomly chosen apples. Find the probability that at least one of them has mass less than $130$ g. Give your answer to 3 significant figures.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) P(mass < 130)", answer: 0.0478, tolerance: 0.0005 },
              { label: "(b) P(140 < mass < 165)", answer: 0.692, tolerance: 0.001 },
              { label: "(c) Minimum mass of a large apple (g)", answer: 165, tolerance: 0.5 },
              { label: "(d) P(at least one < 130 g)", answer: 0.387, tolerance: 0.002 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Normal model", statement: "$X\\sim\\mathrm{N}(150,\\,12^2)$; use the normal cdf and inverse normal on the GDC." },
              { kind: "principle", name: "Binomial from a repeated trial", statement: "Choosing $10$ apples independently, the number below $130$ g is $\\mathrm{B}(10,p)$ with $p=\\mathrm{P}(X<130)$." },
            ],
            steps: [
              { part: "a", reasoning: "Use normal cdf with upper bound $130$ (equivalent to $z=-1.667$).", working: "\\mathrm{P}(X<130)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "=0.0478", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use normal cdf with lower bound $140$ and upper bound $165$.", working: "\\mathrm{P}(140<X<165)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=0.692", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The heaviest $10\\%$ corresponds to $\\mathrm{P}(X<k)=0.9$; use inverse normal.", working: "k=150+12(1.2816)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate and round to the nearest gram.", working: "k=165.4\\approx165", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Use the complement: none of the $10$ apples is below $130$ g.", working: "1-(1-0.04779)^{10}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Compute $(0.95221)^{10}$.", working: "(0.95221)^{10}=0.6128", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Subtract.", working: "1-0.6128=0.387", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.0478$ (b) $0.692$ (c) $165$ g (d) $0.387$",
            commonErrors: ["In (d), multiplying $0.0478$ by $10$.", "In (c), using the probability $0.1$ rather than $0.9$ for inverse normal."],
            examinerNote: "Do not round the probability from (a) too early in (d); use the unrounded GDC value. Accept $165.4$ for (c) before rounding.",
          },
        },
        {
          id: "aasl-u4-normal-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "$X\\sim\\mathrm{N}(100,\\,10^2)$. What is the standardized value $z$ corresponding to $x=115$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.5$" },
              { id: "b", text: "$0.15$" },
              { id: "c", text: "$15$" },
              { id: "d", text: "$2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standardization", statement: "$z=\\dfrac{x-\\mu}{\\sigma}$" },
            ],
            steps: [
              { reasoning: "Here $\\sigma=10$.", working: "z=\\frac{115-100}{10}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "z=1.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $z=1.5$",
            commonErrors: ["Dividing by the variance $100$ ($z=0.15$).", "Subtracting without dividing ($z=15$)."],
          },
        },
        {
          id: "aasl-u4-normal-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "$X\\sim\\mathrm{N}(50,\\,4^2)$. What is $\\mathrm{P}(X<50)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0$" },
              { id: "b", text: "$0.75$" },
              { id: "c", text: "$0.25$" },
              { id: "d", text: "$0.5$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Symmetry of the normal curve", statement: "The curve is symmetric about the mean, so half the area lies on each side of $\\mu$." },
            ],
            steps: [
              { reasoning: "$50$ is the mean $\\mu$, so the value lies at the centre of the distribution.", marks: 1, markCode: "M" },
              { reasoning: "By symmetry exactly half the total area is below the mean.", working: "\\mathrm{P}(X<50)=0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\mathrm{P}(X<50)=0.5$",
            commonErrors: ["Thinking the probability depends on $\\sigma$; it does not when $x=\\mu$."],
          },
        },
        {
          id: "aasl-u4-normal-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "$X\\sim\\mathrm{N}(30,\\,5^2)$. Find $\\mathrm{P}(X<20)$ and $\\mathrm{P}(30<X<40)$, giving your answers to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\mathrm{P}(X<20)$", answer: 0.0228, tolerance: 0.0005 },
              { label: "$\\mathrm{P}(30<X<40)$", answer: 0.477, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standardization", statement: "$z=\\dfrac{x-\\mu}{\\sigma}$ and use the normal cdf" },
              { kind: "property", name: "Symmetry of the normal curve", statement: "$\\mathrm{P}(X<\\mu)=0.5$" },
            ],
            steps: [
              { reasoning: "Standardize $x=20$.", working: "z=\\frac{20-30}{5}=-2", marks: 1, markCode: "M" },
              { reasoning: "Find the lower-tail probability.", working: "\\mathrm{P}(X<20)=\\mathrm{P}(Z<-2)=0.0228", marks: 1, markCode: "A" },
              { reasoning: "The interval $30<X<40$ corresponds to $0<Z<2$; use symmetry about the mean.", working: "\\mathrm{P}(30<X<40)=\\mathrm{P}(Z<2)-0.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=0.9772-0.5=0.477", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathrm{P}(X<20)\\approx0.0228$; $\\mathrm{P}(30<X<40)\\approx0.477$",
            commonErrors: ["Dividing by the variance $25$ instead of $\\sigma=5$.", "Computing $\\mathrm{P}(30<X<40)$ as $0.9772$ without subtracting $0.5$."],
          },
        },
        {
          id: "aasl-u4-normal-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "$X\\sim\\mathrm{N}(40,\\,3^2)$. Which value of $x$ has standardized value $z=2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$40$" },
              { id: "b", text: "$46$" },
              { id: "c", text: "$49$" },
              { id: "d", text: "$43$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Inverse standardization", statement: "$x=\\mu+z\\sigma$" },
            ],
            steps: [
              { reasoning: "Rearrange the standardization formula.", working: "x=40+2\\times3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "x=46", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $x=46$",
            commonErrors: ["Adding $2\\times9$ (using the variance).", "Computing $40+2=42$ (forgetting to multiply by $\\sigma$)."],
          },
        },
        {
          id: "aasl-u4-normal-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "The random variable $X\\sim\\mathrm{N}(\\mu,\\sigma^2)$ satisfies $\\mathrm{P}(X<60)=0.9$ and $\\mathrm{P}(X>40)=0.8$. Find the values of $\\mu$ and $\\sigma$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\mu$", answer: 47.9, tolerance: 0.05 },
              { label: "$\\sigma$", answer: 9.42, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse normal", statement: "Convert each probability to a $z$-value, giving equations $x=\\mu+z\\sigma$." },
              { kind: "formula", name: "Standardization", statement: "$z=\\dfrac{x-\\mu}{\\sigma}$" },
            ],
            steps: [
              { reasoning: "Convert the probabilities to $z$-values: $\\mathrm{P}(X<60)=0.9$ gives $z=1.2816$, and $\\mathrm{P}(X>40)=0.8$ means $\\mathrm{P}(X<40)=0.2$, giving $z=-0.8416$.", working: "60=\\mu+1.2816\\sigma,\\quad 40=\\mu-0.8416\\sigma", marks: 1, markCode: "M" },
              { reasoning: "Subtract the equations to eliminate $\\mu$.", working: "20=2.1232\\sigma\\Rightarrow\\sigma=9.42", marks: 1, markCode: "M" },
              { reasoning: "Substitute back to find $\\mu$.", working: "\\mu=60-1.2816(9.42)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\mu\\approx47.9,\\quad \\sigma\\approx9.42", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mu\\approx47.9$, $\\sigma\\approx9.42$",
            commonErrors: ["Using $z=0.8$ directly instead of converting to the lower-tail probability $0.2$.", "Swapping $\\mu$ and $\\sigma$ in the equations."],
          },
        },
        {
          id: "aasl-u4-normal-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "If $Z\\sim\\mathrm{N}(0,1)$, what is $\\mathrm{P}(Z<1.96)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.5$" },
              { id: "b", text: "$0.025$" },
              { id: "c", text: "$0.975$" },
              { id: "d", text: "$0.95$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard normal table", statement: "$\\mathrm{P}(Z<1.96)\\approx0.975$ (from the GDC or $z$-tables)." },
            ],
            steps: [
              { reasoning: "Use the normal cdf with upper bound $1.96$ (or read the $z$-table).", marks: 1, markCode: "M" },
              { reasoning: "Read off the cumulative probability.", working: "\\mathrm{P}(Z<1.96)\\approx0.975", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $0.975$",
            commonErrors: ["Reading the upper tail $0.025$ instead of the lower tail."],
          },
        },
        {
          id: "aasl-u4-normal-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "$X\\sim\\mathrm{N}(50,\\,8^2)$.",
          parts: [
            { label: "a", prompt: "Find $\\mathrm{P}(X<42)$. Give your answer to 3 significant figures.", marks: 2 },
            { label: "b", prompt: "Find $\\mathrm{P}(X>58)$. Give your answer to 3 significant figures.", marks: 2 },
            { label: "c", prompt: "Hence find $\\mathrm{P}(42<X<58)$.", marks: 1 },
            { label: "d", prompt: "Find the value of $k$ such that $\\mathrm{P}(X>k)=0.05$. Give your answer to 3 significant figures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standardization", statement: "$z=\\dfrac{x-\\mu}{\\sigma}$ and $x=\\mu+z\\sigma$" },
              { kind: "property", name: "Symmetry of the normal curve", statement: "Equal distances from the mean give equal tail probabilities." },
            ],
            steps: [
              { part: "a", reasoning: "Use normal cdf with upper bound $42$ (equivalently $z=-1$).", working: "\\mathrm{P}(X<42)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "=0.1587\\approx0.159", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use normal cdf; $z=(58-50)/8=1$.", working: "\\mathrm{P}(X>58)=1-\\mathrm{P}(X<58)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate (equal to part (a) by symmetry).", working: "=0.1587\\approx0.159", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Subtract the two tails from $1$.", working: "\\mathrm{P}(42<X<58)=1-2(0.1587)=0.6826\\approx0.683", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$\\mathrm{P}(X>k)=0.05$ means $\\mathrm{P}(X<k)=0.95$; use inverse normal.", working: "z=1.6449", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Convert back to a value of $X$.", working: "k=50+8(1.6449)=63.2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.159$ (b) $0.159$ (c) $0.683$ (d) $k\\approx63.2$",
            commonErrors: ["In (d), using inverse normal with $0.05$ instead of $0.95$, giving $k\\approx36.8$.", "In (c), adding the two tails instead of subtracting them from $1$."],
          },
        },
        {
          id: "aasl-u4-normal-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "$X\\sim\\mathrm{N}(20,\\,\\sigma^2)$ and $\\mathrm{P}(X>26)=0.15$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\sigma$", answer: 5.79, tolerance: 0.01 },
              { label: "$\\mathrm{P}(X<14)$", answer: 0.15, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse normal", statement: "$\\mathrm{P}(X>26)=0.15\\iff\\mathrm{P}(X<26)=0.85$" },
              { kind: "formula", name: "Standardization", statement: "$z=\\dfrac{x-\\mu}{\\sigma}$ and $x=\\mu+z\\sigma$" },
            ],
            steps: [
              { reasoning: "Convert the upper-tail probability to a lower-tail probability and find the corresponding $z$-value.", working: "\\mathrm{P}(X<26)=0.85,\\quad z=1.0364", marks: 1, markCode: "M" },
              { reasoning: "Solve for $\\sigma$.", working: "26=20+1.0364\\sigma\\Rightarrow\\sigma=5.79", marks: 1, markCode: "M" },
              { reasoning: "Standardize $x=14$; it is the same distance below the mean as $26$ is above it.", working: "z=\\frac{14-20}{5.79}=-1.036", marks: 1, markCode: "M" },
              { reasoning: "Use symmetry: $\\mathrm{P}(X<14)=\\mathrm{P}(X>26)=0.15$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\sigma\\approx5.79$; $\\mathrm{P}(X<14)=0.15$",
            commonErrors: ["Using inverse normal with $0.15$ instead of $0.85$ for the upper-tail condition.", "Forgetting that $14$ and $26$ are symmetric about the mean $20$."],
          },
        },
        {
          id: "aasl-u4-normal-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "$X\\sim\\mathrm{N}(\\mu,\\sigma^2)$. What is $\\mathrm{P}(X<\\mu-2\\sigma)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.0228$" },
              { id: "b", text: "$0.9772$" },
              { id: "c", text: "$0.05$" },
              { id: "d", text: "$0.5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standardization", statement: "$z=\\dfrac{x-\\mu}{\\sigma}$; here $x=\\mu-2\\sigma$ gives $z=-2$" },
            ],
            steps: [
              { reasoning: "The value $\\mu-2\\sigma$ is two standard deviations below the mean, so $z=-2$.", working: "z=\\frac{(\\mu-2\\sigma)-\\mu}{\\sigma}=-2", marks: 1, markCode: "M" },
              { reasoning: "Find the lower-tail probability for $z=-2$.", working: "\\mathrm{P}(Z<-2)\\approx0.0228", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $0.0228$",
            commonErrors: ["Giving the upper-tail probability $0.9772$ or confusing with the $95\\%$ interval value $0.025$."],
          },
        },
        {
          id: "aasl-u4-normal-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "The heights of students in a school are modelled by $X\\sim\\mathrm{N}(170,\\,10^2)$, where $X$ is measured in centimetres.",
          parts: [
            { label: "a", prompt: "Find the probability that a randomly chosen student has height less than $160$ cm. Give your answer to 3 significant figures.", marks: 2 },
            { label: "b", prompt: "Find the probability that a randomly chosen student has height greater than $185$ cm. Give your answer to 3 significant figures.", marks: 2 },
            { label: "c", prompt: "Four students are chosen at random. Find the probability that at least one of them has height greater than $185$ cm. Give your answer to 3 significant figures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standardization", statement: "$z=\\dfrac{x-\\mu}{\\sigma}$ and use the normal cdf" },
              { kind: "principle", name: "Binomial from a repeated trial", statement: "The number of the four students taller than $185$ cm is $\\mathrm{B}(4,p)$ with $p=\\mathrm{P}(X>185)$; use the complement." },
            ],
            steps: [
              { part: "a", reasoning: "Use normal cdf with upper bound $160$ (equivalently $z=-1$).", working: "\\mathrm{P}(X<160)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "=0.1587\\approx0.159", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use normal cdf; $z=(185-170)/10=1.5$.", working: "\\mathrm{P}(X>185)=1-\\mathrm{P}(X<185)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=0.0668", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Use the complement: none of the four students exceeds $185$ cm.", working: "1-(1-0.0668)^4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "=1-0.7584=0.242", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.159$ (b) $0.0668$ (c) $0.242$",
            commonErrors: ["In (c), multiplying $0.0668$ by $4$ instead of using the complement.", "Using the unrounded value of $p$ too early in (c)."],
          },
        },
        {
          id: "aasl-u4-normal-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "$X\\sim\\mathrm{N}(50,\\,10^2)$.",
          parts: [
            { label: "a", prompt: "Find the value of $k$ such that $\\mathrm{P}(X<k)=0.05$. Give your answer to 3 significant figures.", marks: 2 },
            { label: "b", prompt: "Find $\\mathrm{P}(X<40)$. Give your answer to 3 significant figures.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inverse normal", statement: "$\\mathrm{P}(X<k)=0.05$ gives $k=\\mu+z\\sigma$ where $z$ satisfies $\\mathrm{P}(Z<z)=0.05$." },
              { kind: "formula", name: "Standardization", statement: "$z=\\dfrac{x-\\mu}{\\sigma}$" },
            ],
            steps: [
              { part: "a", reasoning: "Use inverse normal to find the $z$-value for lower-tail probability $0.05$.", working: "z=-1.6449", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Convert back to a value of $X$.", working: "k=50+10(-1.6449)=33.6", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Standardize $x=40$; $z=-1$.", working: "\\mathrm{P}(X<40)=\\mathrm{P}(Z<-1)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=0.1587\\approx0.159", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $k\\approx33.6$ (b) $\\mathrm{P}(X<40)\\approx0.159$",
            commonErrors: ["In (a), using $z=1.6449$ (positive) and getting $k\\approx66.4$.", "In (b), dividing by $100$ instead of $10$."],
          },
        },
        {
          id: "aasl-u4-normal-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "$X\\sim\\mathrm{N}(200,\\,15^2)$. What is $\\mathrm{P}(X<185)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.1587$" },
              { id: "b", text: "$0.5$" },
              { id: "c", text: "$0.0228$" },
              { id: "d", text: "$0.8413$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standardization", statement: "$z=\\dfrac{x-\\mu}{\\sigma}$" },
            ],
            steps: [
              { reasoning: "Standardize $x=185$.", working: "z=\\frac{185-200}{15}=-1", marks: 1, markCode: "M" },
              { reasoning: "Find the lower-tail probability.", working: "\\mathrm{P}(Z<-1)\\approx0.1587", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\mathrm{P}(X<185)\\approx0.1587$",
            commonErrors: ["Giving the upper-tail probability $0.8413$.", "Using $z=-15$ by forgetting to divide by $\\sigma=15$ correctly."],
          },
        },
      ],
    },
  ],
};
