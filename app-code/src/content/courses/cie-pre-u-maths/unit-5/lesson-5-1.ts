import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "cipum-u5-lesson-5-1",
  code: "5-1",
  title: "Probability: Conditional Probability and Distributions",
  goal: "I CAN calculate conditional probabilities, apply Bayes' theorem and work with discrete and continuous distributions.",
  standards: [
    "Cambridge Pre-U Mathematics 9794",
    "Applications of Mathematics: probability",
  ],
  vocabulary: [
    {
      term: "Conditional probability",
      definition: "P(A|B) = P(A∩B)/P(B) — probability given B occurred.",
    },
    {
      term: "Bayes' theorem",
      definition:
        "P(A|B) = P(B|A)P(A)/P(B) — updating probabilities with evidence.",
    },
    {
      term: "Probability density function",
      definition:
        "f(x) for continuous variables — probability is area under curve.",
    },
    {
      term: "Expected value",
      definition: "E(X) = Σx·P(X=x) — long-run average outcome.",
    },
    {
      term: "Variance",
      definition: "Var(X) = E(X²) − E(X)² — measure of spread.",
    },
    {
      term: "Mutually exclusive",
      definition: "Events that cannot both occur — P(A∩B) = 0.",
    },
  ],
  concepts: [
    {
      id: "cipum-u5-s1-probability",
      title: "Advanced probability",
      skill:
        "Apply conditional probability, Bayes' theorem and work with distributions.",
      lesson: {
        sections: [
          {
            heading: "Conditional probability and Bayes",
            body: "P(A|B) = P(A∩B)/P(B). For independent events, P(A|B) = P(A). Bayes' theorem reverses conditioning: P(A|B) = P(B|A)P(A)/P(B). Use a tree diagram or table to organise multi-stage probabilities — always check that probabilities sum to 1.",
          },
          {
            heading: "Discrete distributions",
            body: "For discrete random variable X with P(X = x): E(X) = Σx·P(x); Var(X) = Σx²·P(x) − E(X)²; E(aX + b) = aE(X) + b; Var(aX + b) = a²Var(X). Check that ΣP(x) = 1 before computing — an invalid distribution is a common error.",
          },
          {
            heading: "Continuous distributions",
            body: "For continuous X with pdf f(x): P(a < X < b) = ∫ₐᵇ f(x)dx; ∫₋∞^∞ f(x)dx = 1; E(X) = ∫x·f(x)dx; Var(X) = ∫x²f(x)dx − E(X)². The pdf can exceed 1 — it is a density, not a probability. Normal distribution N(μ,σ²) is the most important continuous distribution.",
          },
        ],
        keyFormulas: [
          {
            name: "Conditional probability",
            statement:
              "$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$; Bayes: $P(A|B) = \\frac{P(B|A)P(A)}{P(B)}$",
          },
          {
            name: "Expectation and variance",
            statement: "$E(X) = \\sum xP(x)$; $Var(X) = E(X^2) - [E(X)]^2$",
          },
        ],
        workedExample: {
          problem:
            "A factory produces 60% good, 40% defective items. A test detects defects with 90% accuracy but gives 5% false positives on good items. What is P(defective | test positive)?",
          solution:
            "$P(D|+) = \\frac{0.9 \\times 0.4}{0.9 \\times 0.4 + 0.05 \\times 0.6} = \\frac{0.36}{0.39} \\approx 0.923$.",
        },
      },
      questions: [
        {
          id: "cipum-u5-prb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "P(A) = 0.4, P(B) = 0.5, P(A∩B) = 0.2. Are A and B independent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cannot determine" },
              { id: "b", text: "No" },
              { id: "c", text: "Yes — P(A∩B) = P(A)P(B)" },
              { id: "d", text: "Yes — they are mutually exclusive" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Independence",
                statement: "A and B independent iff P(A∩B) = P(A)·P(B).",
              },
            ],
            steps: [
              {
                reasoning:
                  "$P(A)P(B) = 0.4 \\times 0.5 = 0.2 = P(A \\cap B)$ — independent.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Yes, independent",
          },
        },
        {
          id: "cipum-u5-prb-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A discrete random variable X has P(X=0) = 0.3, P(X=1) = 0.5, P(X=2) = 0.2. Find E(X).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Expected value",
                statement: "$E(X) = \\sum xP(x)$.",
              },
            ],
            steps: [
              {
                reasoning: "$E(X) = 0(0.3) + 1(0.5) + 2(0.2) = 0.9$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$E(X) = 0.9$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$E(X) = 0.9$",
          },
        },
        {
          id: "cipum-u5-prb-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A disease affects 1% of a population. A test is 99% accurate (sensitivity and specificity). Find P(disease | positive test).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Bayes' theorem",
                statement: "$P(D|+) = P(+|D)P(D)/P(+)$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$P(+) = P(+|D)P(D) + P(+|\\neg D)P(\\neg D) = 0.99 \\times 0.01 + 0.01 \\times 0.99 = 0.0198$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$P(D|+) = \\frac{0.99 \\times 0.01}{0.0198} = \\frac{0.0099}{0.0198} = 0.5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Despite 99% accuracy, only 50% of positives are true cases — base rate matters.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$P(D|+) = 0.5$",
          },
        },
        {
          id: "cipum-u5-prb-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For a continuous random variable with pdf $f(x) = kx$ for $0 \\leq x \\leq 2$ and 0 elsewhere, find k and E(X).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PDF conditions",
                statement: "$\\int f(x)dx = 1$ and $f(x) \\geq 0$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\int_0^2 kx\\,dx = \\frac{kx^2}{2}\\Big|_0^2 = 2k = 1 \\Rightarrow k = 0.5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$E(X) = \\int_0^2 x \\cdot 0.5x\\,dx = 0.5\\int_0^2 x^2 dx = 0.5 \\cdot \\frac{8}{3} = \\frac{4}{3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$k = 0.5$, $E(X) = \\frac{4}{3} \\approx 1.33$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Verify: $\\int_0^2 0.5x\\,dx = 1$ — valid pdf.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$k = 0.5$, $E(X) = \\frac{4}{3}$",
          },
        },
        {
          id: "cipum-u5-prb-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$P(A) = 0.3$, $P(B) = 0.6$ and $A$ and $B$ are independent. Find $P(A \\cup B)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.90$" },
              { id: "b", text: "$0.18$" },
              { id: "c", text: "$0.72$" },
              { id: "d", text: "$0.48$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Addition rule",
                statement:
                  "$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$P(A \\cap B) = 0.3 \\times 0.6 = 0.18$; $P(A \\cup B) = 0.3 + 0.6 - 0.18 = 0.72$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $P(A \\cup B) = 0.72$",
          },
        },
        {
          id: "cipum-u5-prb-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Given $P(A \\cap B) = 0.15$, $P(B) = 0.3$ and $P(A) = 0.5$, find $P(A|B)$ and $P(B|A)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Conditional probability",
                statement: "$P(A|B) = P(A \\cap B)/P(B)$.",
              },
            ],
            steps: [
              {
                reasoning: "$P(A|B) = 0.15/0.3 = 0.5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P(B|A) = 0.15/0.5 = 0.3$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$P(A|B) = 0.5$, $P(B|A) = 0.3$",
          },
        },
        {
          id: "cipum-u5-prb-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A discrete random variable $X$ takes values $1, 2, 3$ with probabilities $0.2, 0.5, 0.3$ respectively. Find $Var(X)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Variance",
                statement: "$Var(X) = E(X^2) - [E(X)]^2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$E(X^2) = 1(0.2) + 4(0.5) + 9(0.3) = 4.9$ and $E(X) = 2.1$, so $[E(X)]^2 = 4.41$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$Var(X) = 4.9 - 4.41 = 0.49$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$Var(X) = 0.49$",
          },
        },
        {
          id: "cipum-u5-prb-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Two balls are drawn without replacement from a bag containing $3$ red and $2$ blue balls. What is the probability that both balls are the same colour?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.3$" },
              { id: "b", text: "$0.4$" },
              { id: "c", text: "$0.5$" },
              { id: "d", text: "$0.6$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Without replacement",
                statement:
                  "Probabilities change after each draw: $P(RR) = \\frac{3}{5} \\times \\frac{2}{4}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$P(RR) + P(BB) = \\frac{3}{5} \\times \\frac{2}{4} + \\frac{2}{5} \\times \\frac{1}{4} = 0.3 + 0.1 = 0.4$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $0.4$",
          },
        },
        {
          id: "cipum-u5-prb-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "For a random variable $X$, $E(X) = 4$ and $Var(X) = 9$. Find $E(2X - 1)$ and $Var(2X - 1)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Linear transformation",
                statement:
                  "$E(aX + b) = aE(X) + b$; $Var(aX + b) = a^2 Var(X)$.",
              },
            ],
            steps: [
              {
                reasoning: "$E(2X - 1) = 2(4) - 1 = 7$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$Var(2X - 1) = 4 \\times 9 = 36$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$E(2X - 1) = 7$, $Var(2X - 1) = 36$",
          },
        },
        {
          id: "cipum-u5-prb-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A continuous random variable has pdf $f(x) = c(3 - x)$ for $0 \\leq x \\leq 3$ and $0$ elsewhere. Find $c$ and $P(1 < X < 2)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PDF conditions",
                statement: "$\\int f(x)\\,dx = 1$ over the support.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\int_0^3 c(3 - x)\\,dx = c\\left[3x - \\frac{x^2}{2}\\right]_0^3 = \\frac{9c}{2}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\frac{9c}{2} = 1 \\Rightarrow c = \\frac{2}{9}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$P(1 < X < 2) = \\frac{2}{9}\\left[3x - \\frac{x^2}{2}\\right]_1^2 = \\frac{2}{9}(4 - 2.5) = \\frac{1}{3}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$c = \\frac{2}{9}$, $P(1 < X < 2) \\approx 0.333$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$c = \\frac{2}{9}$, $P(1 < X < 2) = \\frac{1}{3}$",
          },
        },
        {
          id: "cipum-u5-prb-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Machines $A$, $B$ and $C$ produce $50\\%$, $30\\%$ and $20\\%$ of a factory's output. Their defect rates are $2\\%$, $5\\%$ and $1\\%$ respectively. Find the probability that a randomly chosen item is defective, and the probability that a defective item came from machine $C$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Bayes' theorem",
                statement:
                  "Combine the law of total probability with Bayes' theorem.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$P(D) = 0.5(0.02) + 0.3(0.05) + 0.2(0.01) = 0.01 + 0.015 + 0.002 = 0.027$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$P(C|D) = \\frac{0.2 \\times 0.01}{0.027} = \\frac{0.002}{0.027} \\approx 0.074$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Despite producing only $20\\%$ of output, machine $C$ contributes only about $7.4\\%$ of defects because of its low defect rate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$P(D) = 0.027$, $P(C|D) \\approx 0.074$",
          },
        },
        {
          id: "cipum-u5-prb-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of the following is NOT a requirement for a valid probability density function $f(x)$ of a continuous random variable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$f(x) \\leq 1$ for all $x$" },
              { id: "b", text: "$\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1$" },
              { id: "c", text: "$f(x) = 0$ outside its support" },
              { id: "d", text: "$f(x) \\geq 0$ for all $x$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PDF conditions",
                statement:
                  "A pdf must be non-negative and integrate to $1$; it may exceed $1$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A density is not a probability — it can exceed $1$, so $f(x) \\leq 1$ is not required.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $f(x) \\leq 1$ is not required",
          },
        },
        {
          id: "cipum-u5-prb-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A discrete random variable $X$ has $P(X = x) = \\frac{c}{x}$ for $x = 1, 2, 3, 4$. Find $c$, $E(X)$, $Var(X)$ and $P(X \\geq 3)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Discrete distribution",
                statement:
                  "$\\sum P(x) = 1$; $E(X) = \\sum xP(x)$; $Var(X) = E(X^2) - [E(X)]^2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\sum P(x) = c\\left(1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4}\\right) = \\frac{25c}{12} = 1 \\Rightarrow c = \\frac{12}{25} = 0.48$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$E(X) = \\sum x \\cdot \\frac{c}{x} = 4c = 1.92$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$E(X^2) = \\sum x^2 \\cdot \\frac{c}{x} = c(1 + 2 + 3 + 4) = 10c = 4.8$; $Var(X) = 4.8 - 1.92^2 \\approx 1.11$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$P(X \\geq 3) = c\\left(\\frac{1}{3} + \\frac{1}{4}\\right) = 0.48 \\times \\frac{7}{12} = 0.28$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$c = 0.48$, $E(X) = 1.92$, $Var(X) \\approx 1.11$, $P(X \\geq 3) = 0.28$",
          },
        },
        {
          id: "cipum-u5-prb-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a group of students, $P(M) = 0.6$ study mathematics, $P(P) = 0.5$ study physics and $P(M \\cap P) = 0.3$. Find $P(M|P)$ and $P(P|\\neg M)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Conditional probability",
                statement: "$P(A|B) = P(A \\cap B)/P(B)$.",
              },
            ],
            steps: [
              {
                reasoning: "$P(M|P) = 0.3/0.5 = 0.6$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$P(P \\cap \\neg M) = 0.5 - 0.3 = 0.2$; $P(P|\\neg M) = 0.2/0.4 = 0.5$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$P(M|P) = 0.6$, $P(P|\\neg M) = 0.5$",
          },
        },
        {
          id: "cipum-u5-prb-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A continuous random variable has pdf $f(x) = kx(4 - x)$ for $0 \\leq x \\leq 4$ and $0$ elsewhere. Find $k$, $E(X)$ and $P(1 < X < 3)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PDF conditions",
                statement: "$\\int f(x)\\,dx = 1$ over the support.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\int_0^4 kx(4 - x)\\,dx = k\\left[2x^2 - \\frac{x^3}{3}\\right]_0^4 = \\frac{32k}{3} = 1 \\Rightarrow k = \\frac{3}{32}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$E(X) = \\frac{3}{32}\\int_0^4 x^2(4 - x)\\,dx = \\frac{3}{32}\\left[\\frac{4x^3}{3} - \\frac{x^4}{4}\\right]_0^4 = \\frac{3}{32} \\times \\frac{64}{3} = 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$P(1 < X < 3) = \\frac{3}{32}\\left[2x^2 - \\frac{x^3}{3}\\right]_1^3 = \\frac{3}{32}\\left(9 - \\frac{5}{3}\\right) = \\frac{11}{16}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$k = \\frac{3}{32}$, $E(X) = 2$, $P(1 < X < 3) = 0.6875$ — the distribution is symmetric about $x = 2$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$k = \\frac{3}{32}$, $E(X) = 2$, $P(1 < X < 3) = \\frac{11}{16}$",
          },
        },
        {
          id: "cipum-u5-prb-q16",
          difficulty: "core",
          totalMarks: 3,
          stem: "$P(A) = 0.4$, $P(B) = 0.3$ and $P(A \\cap B) = 0$. Find $P(A \\cup B)$, state whether $A$ and $B$ are independent, and find $P(A|B)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Independence and addition rule",
                statement:
                  "Independent iff $P(A \\cap B) = P(A)P(B)$; $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.",
              },
            ],
            steps: [
              {
                reasoning: "$P(A \\cup B) = 0.4 + 0.3 - 0 = 0.7$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$P(A)P(B) = 0.12 \\neq 0 = P(A \\cap B)$ — not independent (mutually exclusive but dependent).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P(A|B) = 0/0.3 = 0$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$P(A \\cup B) = 0.7$; not independent; $P(A|B) = 0$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipum-u5-probability-notes",
      title: "Probability — revision notes",
      summary:
        "Conditional probability, Bayes' theorem, expectation, variance, pdfs.",
      sections: [
        {
          heading: "Key skills",
          body: "For Bayes problems, draw a tree diagram first — it prevents numerator/denominator errors. Always verify ΣP(x) = 1 for discrete distributions and ∫f(x)dx = 1 for continuous ones.",
        },
        {
          heading: "Exam tips",
          body: "The pdf can exceed 1 — do not confuse it with probability. For variance, use Var = E(X²) − E(X)² rather than Σ(x−μ)²P(x) unless specifically asked. Check whether the question wants exact fractions or decimals.",
        },
      ],
    },
  ],
};
