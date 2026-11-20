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
              { id: "b", text: "X follows binomial distribution" },
              { id: "c", text: "X is uniformly distributed" },
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
              { id: "b", text: "$0$" },
              { id: "c", text: "$1$" },
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
