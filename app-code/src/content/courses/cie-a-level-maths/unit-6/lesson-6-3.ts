import type { Lesson } from "../../../types.ts";

export const lesson613: Lesson = {
  id: "cial-m-u6-lesson-6-3",
  code: "6-3",
  title: "Normal distribution",
  goal: "I CAN standardise normal variables and find probabilities.",
  standards: ["9709: normal distribution"],
  vocabulary: [
    {
      term: "Normal distribution",
      definition: "Bell-shaped symmetric continuous distribution.",
    },
    { term: "Mean μ", definition: "Centre of the normal distribution." },
    {
      term: "Variance σ²",
      definition: "Measure of spread of the normal distribution.",
    },
    {
      term: "Standard normal",
      definition: "Normal distribution with μ=0, σ=1.",
    },
    { term: "Standardisation", definition: "Converting X to Z = (X-μ)/σ." },
    {
      term: "Z-score",
      definition: "Number of standard deviations from the mean.",
    },
  ],
  concepts: [
    {
      id: "cial-m-u6-normal",
      title: "Normal distribution properties",
      skill: "Use normal distribution properties and standardisation.",
      lesson: {
        sections: [
          {
            heading: "Normal distribution",
            body: "$X \\sim N(\\mu, \\sigma^2)$: bell-shaped, symmetric about $\\mu$, spread $\\sigma$. $P(a < X < b)$ found using standard normal tables.",
          },
          {
            heading: "Standardisation",
            body: "$Z = \\frac{X - \\mu}{\\sigma} \\sim N(0,1)$. Convert any normal to standard normal, use $Z$-tables for probabilities.",
          },
          {
            heading: "Properties",
            body: "Symmetric: $P(X < \\mu) = 0.5$. Empirical rule: ~68% within $\\mu \\pm \\sigma$, ~95% within $\\mu \\pm 2\\sigma$, ~99.7% within $\\mu \\pm 3\\sigma$.",
          },
        ],
        keyFormulas: [
          {
            name: "Standardisation",
            statement: "$Z=\\frac{X-\\mu}{\\sigma}\\sim N(0,1)$",
          },
          {
            name: "Empirical rule",
            statement: "68-95-99.7 within 1, 2, 3 sigma",
          },
        ],
        workedExample: {
          problem: "X~N(50, 25). Find P(X>60).",
          solution: "$Z = \\frac{60-50}{5} = 2$; $P(Z>2) \\approx 0.0228$.",
        },
      },
      questions: [
        {
          id: "cial-m-u6-nd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does $X \\sim N(\\mu, \\sigma^2)$ mean?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "X follows normal distribution with mean μ and variance σ²",
              },
              { id: "b", text: "X is uniformly distributed" },
              { id: "c", text: "X follows binomial distribution" },
              { id: "d", text: "X is exponentially distributed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Normal notation",
                statement: "$N(\\mu,\\sigma^2)$ = mean μ, variance σ².",
              },
            ],
            steps: [
              { reasoning: "μ=mean, σ²=variance.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Normal with mean μ, variance σ²",
            commonErrors: ["Confusing σ and σ²."],
          },
        },
        {
          id: "cial-m-u6-nd-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "X~N(50, 16). Find P(X>54).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Standardisation",
                statement: "$Z=\\frac{X-\\mu}{\\sigma}$",
              },
            ],
            steps: [
              {
                reasoning: "$\\sigma=4$; $Z=\\frac{54-50}{4}=1$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$P(Z>1)\\approx0.1587$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx0.1587$",
            commonErrors: ["Using σ² instead of σ."],
          },
        },
        {
          id: "cial-m-u6-nd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "X~N(100, 400). Find P(90 < X < 110).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Normal probability",
                statement: "Standardise bounds then use Z-tables.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$\\sigma=20$; $Z_1=\\frac{90-100}{20}=-0.5$, $Z_2=\\frac{110-100}{20}=0.5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P(-0.5<Z<0.5)=P(Z<0.5)-P(Z<-0.5)$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$=0.6915-0.3085=0.383$.", marks: 1, markCode: "M" },
              { reasoning: "$\\approx0.383$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx0.383$",
            commonErrors: ["Not standardising correctly."],
          },
        },
        {
          id: "cial-m-u6-nd-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Normal distribution.",
          parts: [
            { label: "a", prompt: "Meaning of $N(\\mu,\\sigma^2)$?", marks: 1 },
            { label: "b", prompt: "Standardisation formula?", marks: 2 },
            { label: "c", prompt: "X~N(50,16): P(X>54)?", marks: 2 },
            { label: "d", prompt: "Empirical rule percentages?", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Normal",
                statement:
                  "Notation+standardisation+calculation+empirical rule.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Mean μ, variance σ².",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "$Z=\\frac{X-\\mu}{\\sigma}$.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Z~N(0,1).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$Z=1$.", marks: 1, markCode: "M" },
              {
                part: "c",
                reasoning: "$P\\approx0.1587$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "68% within 1σ.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "95% within 2σ.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "99.7% within 3σ.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "All correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) $N(\\mu,\\sigma^2)$ (b) $Z$ formula (c) 0.1587 (d) 68/95/99.7",
          },
        },
        {
          id: "cial-m-u6-nd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The standard normal distribution $Z$ has mean and variance...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\mu = 0$, $\\sigma^2 = 1$" },
              { id: "b", text: "$\\mu = 0$, $\\sigma^2 = 0$" },
              { id: "c", text: "Any mean and variance" },
              { id: "d", text: "$\\mu = 1$, $\\sigma^2 = 0$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Standard normal",
                statement: "$Z \\sim N(0,1)$.",
              },
            ],
            steps: [
              { reasoning: "Mean 0, variance 1.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $\\mu=0$, $\\sigma^2=1$",
            commonErrors: ["Confusing variance with standard deviation."],
          },
        },
        {
          id: "cial-m-u6-nd-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "X ~ N(20, 9). Find $P(X < 23)$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.8413 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Standardisation",
                statement: "$Z = \\frac{X-\\mu}{\\sigma}$, $\\sigma = 3$.",
              },
            ],
            steps: [
              {
                reasoning: "$Z = \\frac{23-20}{3} = 1$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$P(Z<1) \\approx 0.8413$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 0.8413$",
            commonErrors: ["Using $\\sigma^2 = 9$ as $\\sigma$."],
          },
        },
        {
          id: "cial-m-u6-nd-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "X ~ N(50, 100). Find $P(40 < X < 60)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Normal probability",
                statement: "Standardise both bounds, use Z-tables.",
              },
            ],
            steps: [
              {
                reasoning: "$\\sigma = 10$; $Z_1 = -1$, $Z_2 = 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P(-1 < Z < 1) = P(Z<1) - P(Z<-1)$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\approx 0.8413 - 0.1587 = 0.6827$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 0.6827$",
            commonErrors: ["Using 100 as standard deviation."],
          },
        },
        {
          id: "cial-m-u6-nd-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Approximately what percentage of values lie within $\\mu \\pm 2\\sigma$ for a normal distribution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$95\\%$" },
              { id: "b", text: "$99.7\\%$" },
              { id: "c", text: "$68\\%$" },
              { id: "d", text: "$50\\%$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Empirical rule",
                statement: "95% within $\\mu \\pm 2\\sigma$.",
              },
            ],
            steps: [
              { reasoning: "68/95/99.7 for 1/2/3 sigma.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $95\\%$",
            commonErrors: ["Confusing 1σ and 2σ percentages."],
          },
        },
        {
          id: "cial-m-u6-nd-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "X ~ N(200, 25). Find $P(X > 205)$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.1587 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Standardisation",
                statement: "$Z = \\frac{X-\\mu}{\\sigma}$, then use upper tail.",
              },
            ],
            steps: [
              {
                reasoning: "$\\sigma = 5$; $Z = \\frac{205-200}{5} = 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P(Z > 1) = 1 - P(Z<1) = 1 - 0.8413$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 0.1587$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 0.1587$",
            commonErrors: ["Reading the wrong tail from tables."],
          },
        },
        {
          id: "cial-m-u6-nd-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "X ~ N(0, 4). Find $P(-4 < X < 4)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Standardisation",
                statement: "$\\sigma = 2$; standardise bounds.",
              },
            ],
            steps: [
              {
                reasoning: "$Z_1 = \\frac{-4}{2} = -2$, $Z_2 = \\frac{4}{2} = 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P(-2 < Z < 2) = P(Z<2) - P(Z<-2)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 0.9772 - 0.0228 = 0.9545$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 0.9545$",
            commonErrors: ["Using $\\sigma = 4$ instead of $\\sigma = 2$."],
          },
        },
        {
          id: "cial-m-u6-nd-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $X \\sim N(\\mu, \\sigma^2)$, $P(X > \\mu) = $",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$0$" },
              { id: "c", text: "Depends on $\\sigma$" },
              { id: "d", text: "$0.5$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Symmetry",
                statement: "Mean splits normal distribution in half.",
              },
            ],
            steps: [
              {
                reasoning: "By symmetry $P(X>\\mu) = 0.5$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $0.5$",
            commonErrors: ["Thinking it depends on parameters."],
          },
        },
        {
          id: "cial-m-u6-nd-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "X ~ N(50, 100). Find the z-score of $x = 75$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Standardisation",
                statement: "$Z = \\frac{X-\\mu}{\\sigma}$, $\\sigma = 10$.",
              },
            ],
            steps: [
              {
                reasoning: "$Z = \\frac{75-50}{10} = 2.5$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.5$",
            commonErrors: ["Dividing by 100 instead of 10."],
          },
        },
        {
          id: "cial-m-u6-nd-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "X ~ N(100, 64). Find $P(96 < X < 104)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Standardisation",
                statement: "$\\sigma = 8$; standardise both bounds.",
              },
            ],
            steps: [
              {
                reasoning: "$Z_1 = \\frac{96-100}{8} = -0.5$, $Z_2 = \\frac{104-100}{8} = 0.5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P(-0.5 < Z < 0.5) = P(Z<0.5) - P(Z<-0.5)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 0.6915 - 0.3085 = 0.383$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\approx 0.383$.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 0.383$",
            commonErrors: ["Using variance 64 as $\\sigma$."],
          },
        },
        {
          id: "cial-m-u6-nd-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "For $X \\sim N(50, 16)$, which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mean 4, variance 50" },
              { id: "b", text: "Mean 16, variance 50" },
              { id: "c", text: "Mean 50, $\\sigma = 16$" },
              { id: "d", text: "Mean 50, variance 16, $\\sigma = 4$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Normal notation",
                statement: "$N(\\mu,\\sigma^2)$: second parameter is variance.",
              },
            ],
            steps: [
              {
                reasoning: "$\\sigma^2=16 \\Rightarrow \\sigma=4$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Mean 50, variance 16",
            commonErrors: ["Treating 16 as $\\sigma$ not $\\sigma^2$."],
          },
        },
        {
          id: "cial-m-u6-nd-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "X ~ N(30, 25). Find $P(X > 40)$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.0228 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Standardisation",
                statement: "$\\sigma = 5$; standardise and use upper tail.",
              },
            ],
            steps: [
              {
                reasoning: "$Z = \\frac{40-30}{5} = 2$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P(Z > 2) = 1 - 0.9772$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 0.0228$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 0.0228$",
            commonErrors: ["Reading $P(Z<2)$ instead of the tail."],
          },
        },
        {
          id: "cial-m-u6-nd-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Normal distribution.",
          parts: [
            { label: "a", prompt: "What does $N(\\mu, \\sigma^2)$ mean?", marks: 1 },
            {
              label: "b",
              prompt: "State the standardisation formula.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "X ~ N(60, 16): find $P(56 < X < 64)$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "State the empirical rule percentages.",
              marks: 3,
            },
            {
              label: "e",
              prompt: "Explain why $P(X < \\mu) = 0.5$.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Normal",
                statement: "Notation+standardisation+calculation+empirical+symmetry.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Mean $\\mu$, variance $\\sigma^2$.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "$Z = \\frac{X-\\mu}{\\sigma}$.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "$Z \\sim N(0,1)$.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "$\\sigma=4$; $Z_1=-1$, $Z_2=1$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$P(-1<Z<1) = 0.8413 - 0.1587$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\approx 0.6827$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "68% within $\\mu \\pm \\sigma$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "95% within $\\mu \\pm 2\\sigma$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "99.7% within $\\mu \\pm 3\\sigma$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "Symmetry about the mean.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) mean μ var σ² (b) Z formula (c) 0.6827 (d) 68/95/99.7 (e) symmetry",
          },
        },
      ],
    },
    {
      id: "cial-m-u6-normal-applications",
      title: "Normal distribution applications",
      skill: "Apply normal distribution to find probabilities and values.",
      lesson: {
        sections: [
          {
            heading: "Finding probabilities",
            body: "Standardise bounds: $P(a<X<b) = P(\\frac{a-\\mu}{\\sigma} < Z < \\frac{b-\\mu}{\\sigma})$. Use symmetry for complements.",
          },
          {
            heading: "Finding values from probabilities",
            body: "Reverse process: given $P(X < x) = p$, find $z$ from tables, then $x = \\mu + z\\sigma$. For $P(X > x) = p$, use $z$ for $1-p$.",
          },
          {
            heading: "Combined with binomial",
            body: "Binomial approximates normal when $np > 5$ and $n(1-p) > 5$: $X \\sim B(n,p) \\approx N(np, np(1-p))$.",
          },
        ],
        keyFormulas: [
          {
            name: "Inverse normal",
            statement: "$x=\\mu+z\\sigma$ where $z=\\Phi^{-1}(p)$",
          },
          {
            name: "Binomial approximation",
            statement: "$B(n,p)\\approx N(np,np(1-p))$ when $np>5$",
          },
        ],
        workedExample: {
          problem: "X~N(100,400). Find x such that P(X<x)=0.95.",
          solution: "$z=\\Phi^{-1}(0.95)=1.645$; $x=100+1.645\\times20=132.9$.",
        },
      },
      questions: [
        {
          id: "cial-m-u6-na-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "X~N(μ,σ²). What is P(X < μ)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.5$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$0$" },
              { id: "d", text: "$\\mu$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Symmetry",
                statement: "P(X<μ)=0.5 by symmetry.",
              },
            ],
            steps: [
              {
                reasoning: "Mean splits distribution evenly.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $0.5$",
            commonErrors: ["Thinking it depends on parameters."],
          },
        },
        {
          id: "cial-m-u6-na-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "X~N(50,16). Find P(46<X<54).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Normal probability",
                statement: "Standardise then use Z-tables.",
              },
            ],
            steps: [
              {
                reasoning: "$\\sigma=4$; $Z_1=-1$, $Z_2=1$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$P(-1<Z<1)=0.6827$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx0.6827$",
            commonErrors: ["Not standardising."],
          },
        },
        {
          id: "cial-m-u6-na-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "X~N(100,400). Find x such that P(X<x)=0.95.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inverse normal",
                statement: "Find z from tables then x=μ+zσ.",
              },
            ],
            steps: [
              {
                reasoning: "$z=\\Phi^{-1}(0.95)=1.645$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\sigma=20$.", marks: 1, markCode: "M" },
              { reasoning: "$x=100+1.645\\times20$.", marks: 1, markCode: "M" },
              { reasoning: "$x=132.9$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=132.9$",
            commonErrors: ["Using σ² instead of σ."],
          },
        },
        {
          id: "cial-m-u6-na-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Normal applications.",
          parts: [
            { label: "a", prompt: "P(X<μ)?", marks: 1 },
            { label: "b", prompt: "X~N(50,16): P(46<X<54)?", marks: 2 },
            { label: "c", prompt: "Inverse normal process?", marks: 3 },
            {
              label: "d",
              prompt: "When can binomial approximate normal?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Normal apps",
                statement:
                  "Symmetry+probability+inverse+binomial approximation.",
              },
            ],
            steps: [
              { part: "a", reasoning: "$0.5$.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "$Z=\\pm1$.", marks: 1, markCode: "M" },
              {
                part: "b",
                reasoning: "$P\\approx0.6827$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Find z from p.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$x=\\mu+z\\sigma$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct process.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "$np>5$.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "$n(1-p)>5$.", marks: 1, markCode: "M" },
              {
                part: "d",
                reasoning: "Both conditions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 0.5 (b) 0.6827 (c) z→x (d) np>5 and n(1-p)>5",
          },
        },
        {
          id: "cial-m-u6-na-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To find $x$ such that $P(X < x) = p$ for $X \\sim N(\\mu, \\sigma^2)$, you should...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Look up $p$ in the Z-table as a probability" },
              {
                id: "b",
                text: "Find $z = \\Phi^{-1}(p)$ then $x = \\mu + z\\sigma$",
              },
              { id: "c", text: "Compute $\\mu + p\\sigma$ directly" },
              { id: "d", text: "Use $x = \\frac{p-\\mu}{\\sigma}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Inverse normal",
                statement: "$z = \\Phi^{-1}(p)$; $x = \\mu + z\\sigma$.",
              },
            ],
            steps: [
              {
                reasoning: "Inverse process: probability → z → x.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $z=\\Phi^{-1}(p)$, $x=\\mu+z\\sigma$",
            commonErrors: ["Using the wrong tail probability."],
          },
        },
        {
          id: "cial-m-u6-na-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "X ~ N(40, 9). Find $P(X < 43)$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.8413 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Standardisation",
                statement: "$Z = \\frac{X-\\mu}{\\sigma}$, $\\sigma = 3$.",
              },
            ],
            steps: [
              {
                reasoning: "$Z = \\frac{43-40}{3} = 1$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$P(Z<1) \\approx 0.8413$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 0.8413$",
            commonErrors: ["Using $\\sigma^2=9$ as $\\sigma$."],
          },
        },
        {
          id: "cial-m-u6-na-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "X ~ N(100, 400). Find the value of x such that $P(X < x) = 0.5$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Symmetry",
                statement: "Median = mean for normal distribution.",
              },
            ],
            steps: [
              {
                reasoning: "$z = \\Phi^{-1}(0.5) = 0$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x = \\mu + 0\\sigma = \\mu = 100$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$x = 100$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$100$",
            commonErrors: ["Computing an unnecessary standard deviation step with errors."],
          },
        },
        {
          id: "cial-m-u6-na-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A binomial distribution $B(n,p)$ can be approximated by a normal distribution when...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Always, for any n and p" },
              {
                id: "b",
                text: "$np > 5$ and $n(1-p) > 5$",
              },
              { id: "c", text: "$p > 0.5$" },
              { id: "d", text: "$n > 5$ only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binomial approximation",
                statement: "Both $np>5$ and $n(1-p)>5$ required.",
              },
            ],
            steps: [
              {
                reasoning: "Both conditions must hold.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $np>5$ and $n(1-p)>5$",
            commonErrors: ["Checking only $np>5$."],
          },
        },
        {
          id: "cial-m-u6-na-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "X ~ N(60, 25). Find the value of x such that $P(X > x) = 0.05$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 68.225, tolerance: 0.01 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Inverse normal",
                statement: "$P(X>x)=0.05 \\Rightarrow P(X<x)=0.95$; $z=1.645$.",
              },
            ],
            steps: [
              {
                reasoning: "$P(X<x) = 0.95$, so $z = \\Phi^{-1}(0.95) = 1.645$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\sigma = 5$; $x = 60 + 1.645 \\times 5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x = 68.225 \\approx 68.2$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x \\approx 68.2$",
            commonErrors: ["Using $z$ for 0.05 instead of 0.95."],
          },
        },
        {
          id: "cial-m-u6-na-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "X ~ N(50, 16). Find $P(48 < X < 56)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Standardisation",
                statement: "$\\sigma = 4$; standardise bounds.",
              },
            ],
            steps: [
              {
                reasoning: "$Z_1 = \\frac{48-50}{4} = -0.5$, $Z_2 = \\frac{56-50}{4} = 1.5$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P(-0.5 < Z < 1.5) = P(Z<1.5) - P(Z<-0.5)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= 0.9332 - 0.3085 = 0.6247$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\approx 0.625$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 0.625$",
            commonErrors: ["Assuming bounds are symmetric about the mean."],
          },
        },
        {
          id: "cial-m-u6-na-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "When approximating $X \\sim B(n, p)$ by a normal distribution, the normal parameters are...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$N(n, p)$" },
              { id: "b", text: "$N(np, np(1-p))$" },
              { id: "c", text: "$N(p, np)$" },
              { id: "d", text: "$N(np, p)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Binomial approx",
                statement: "$B(n,p) \\approx N(np, np(1-p))$.",
              },
            ],
            steps: [
              {
                reasoning: "Mean $np$, variance $np(1-p)$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $N(np, np(1-p))$",
            commonErrors: ["Using $np$ as variance."],
          },
        },
        {
          id: "cial-m-u6-na-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "X ~ B(100, 0.5) is approximated by N(50, 25). Use this to estimate $P(X < 55)$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.8413 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Normal approx",
                statement: "Standardise using $\\mu=50$, $\\sigma=5$.",
              },
            ],
            steps: [
              {
                reasoning: "$Z = \\frac{55-50}{5} = 1$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P(Z<1) \\approx 0.8413$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct estimate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 0.8413$",
            commonErrors: ["Using 25 as $\\sigma$ instead of $\\sigma=5$."],
          },
        },
        {
          id: "cial-m-u6-na-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "X ~ N(200, 64). Find the 90th percentile of X (the value x such that $P(X < x) = 0.9$).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Inverse normal",
                statement: "$z = \\Phi^{-1}(0.9) \\approx 1.282$; $x = \\mu + z\\sigma$.",
              },
            ],
            steps: [
              {
                reasoning: "$z = \\Phi^{-1}(0.9) \\approx 1.282$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\sigma = \\sqrt{64} = 8$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x = 200 + 1.282 \\times 8$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x \\approx 210.3$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x \\approx 210.3$",
            commonErrors: ["Using $\\sigma^2 = 64$ in place of $\\sigma = 8$."],
          },
        },
        {
          id: "cial-m-u6-na-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $X \\sim N(\\mu, \\sigma^2)$, the value $P(X < x) = 0.025$ corresponds to a z-score of approximately...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-1.96$" },
              { id: "b", text: "$0.025$" },
              { id: "c", text: "$-1.645$" },
              { id: "d", text: "$1.96$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Inverse normal",
                statement: "$\\Phi^{-1}(0.025) \\approx -1.96$.",
              },
            ],
            steps: [
              {
                reasoning: "Lower 2.5% tail → $z \\approx -1.96$.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $-1.96$",
            commonErrors: ["Giving the positive value."],
          },
        },
        {
          id: "cial-m-u6-na-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "X ~ N(70, 16). Find the value of x such that $P(X < x) = 0.975$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Inverse normal",
                statement: "$z = \\Phi^{-1}(0.975) \\approx 1.96$; $x = \\mu + z\\sigma$.",
              },
            ],
            steps: [
              {
                reasoning: "$z \\approx 1.96$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\sigma = 4$; $x = 70 + 1.96 \\times 4$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x = 77.84$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 77.84$",
            commonErrors: ["Using 16 as $\\sigma$."],
          },
        },
        {
          id: "cial-m-u6-na-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Normal distribution applications.",
          parts: [
            {
              label: "a",
              prompt: "Describe the process for finding x when $P(X<x)=p$ is given.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "X ~ N(80, 36): find $P(74 < X < 86)$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Find the value of x such that $P(X > x) = 0.01$ for X ~ N(50, 100).",
              marks: 3,
            },
            {
              label: "d",
              prompt: "State the conditions for approximating a binomial by a normal.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Normal apps",
                statement: "Inverse+probability+tail+conditions.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Find $z=\\Phi^{-1}(p)$ from tables.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Then $x = \\mu + z\\sigma$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "$\\sigma=6$; $Z_1=-1$, $Z_2=1$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$P(-1<Z<1) = 0.8413 - 0.1587$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\approx 0.6827$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$P(X<x)=0.99$; $z \\approx 2.326$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\sigma=10$; $x = 50 + 2.326 \\times 10$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$x \\approx 73.3$.",
                marks: 1,
                markCode: "A",
              },
              { part: "d", reasoning: "$np > 5$.", marks: 1, markCode: "M" },
              {
                part: "d",
                reasoning: "$n(1-p) > 5$ as well.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) z→x (b) 0.6827 (c) ~73.3 (d) np>5 and n(1−p)>5",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u6-normal-notes",
      title: "Normal distribution — revision notes",
      summary:
        "Standardisation, probabilities, inverse normal and binomial approximation.",
      sections: [
        {
          heading: "Standardisation",
          body: "$Z=\\frac{X-\\mu}{\\sigma}\\sim N(0,1)$. Use Z-tables for $P(a<Z<b)$.",
        },
        {
          heading: "Inverse",
          body: "Given p, find z=Φ⁻¹(p), then x=μ+zσ.",
        },
        {
          heading: "Binomial approx",
          body: "$B(n,p)\\approx N(np,np(1-p))$ when $np>5$ and $n(1-p)>5$.",
        },
        {
          heading: "Exam checklist",
          body: "Can you standardise? Find probabilities? Use inverse normal? Check binomial conditions?",
        },
      ],
    },
  ],
};
