import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "aahl-u4-lesson-4-4",
  code: "4-4",
  title: "Conditional Probability and Standardisation",
  goal: "I CAN use conditional probability formulae, test whether events are independent, and standardise normal variables when the mean or standard deviation is unknown.",
  standards: ["AHL 4.11", "AHL 4.12"],
  vocabulary: [
    {
      term: "Conditional probability",
      definition:
        "$\\mathrm{P}(A\\mid B)=\\frac{\\mathrm{P}(A\\cap B)}{\\mathrm{P}(B)}$ — the probability of $A$ given that $B$ has occurred.",
    },
    {
      term: "Independent events",
      definition:
        "Events where $\\mathrm{P}(A\\cap B)=\\mathrm{P}(A)\\mathrm{P}(B)$, equivalently $\\mathrm{P}(A\\mid B)=\\mathrm{P}(A)$.",
    },
    {
      term: "Mutually exclusive",
      definition:
        "Events that cannot both occur: $\\mathrm{P}(A\\cap B)=0$. Independent events can both occur.",
    },
    {
      term: "Standardisation",
      definition:
        "Transforming $X\\sim\\mathrm{N}(\\mu,\\sigma^2)$ to $Z=\\frac{X-\\mu}{\\sigma}\\sim\\mathrm{N}(0,1)$ so standard normal tables apply.",
    },
    {
      term: "Inverse normal",
      definition:
        "Finding the $x$-value corresponding to a given cumulative probability, used to set up equations for unknown $\\mu$ or $\\sigma$.",
    },
    {
      term: "z-score",
      definition:
        "The number of standard deviations a value lies from the mean: $z=\\frac{x-\\mu}{\\sigma}$.",
    },
  ],
  concepts: [
    {
      id: "aahl-u4-conditional-independence",
      title: "Conditional probability and testing for independence",
      skill:
        "Apply $\\mathrm{P}(A\\mid B)=\\mathrm{P}(A\\cap B)/\\mathrm{P}(B)$ in multi-stage problems and test independence using the product rule.",
      lesson: {
        sections: [
          {
            heading: "Conditional probability formulae",
            body: "The definition $\\mathrm{P}(A\\mid B)=\\frac{\\mathrm{P}(A\\cap B)}{\\mathrm{P}(B)}$ rearranges to $\\mathrm{P}(A\\cap B)=\\mathrm{P}(A\\mid B)\\mathrm{P}(B)$. Combined with $\\mathrm{P}(A\\cup B)=\\mathrm{P}(A)+\\mathrm{P}(B)-\\mathrm{P}(A\\cap B)$, these formulae connect every probability in a two-event problem. Conditioning on the complement: $\\mathrm{P}(A\\mid B')=\\frac{\\mathrm{P}(A\\cap B')}{\\mathrm{P}(B')}$.",
          },
          {
            heading: "Testing for independence",
            body: "Events are independent when knowing one occurred does not change the probability of the other. Test by checking $\\mathrm{P}(A\\mid B)=\\mathrm{P}(A)$, or equivalently $\\mathrm{P}(A\\cap B)=\\mathrm{P}(A)\\mathrm{P}(B)$. Do NOT confuse independence with mutual exclusivity: mutually exclusive events are dependent (unless one has probability zero).",
          },
          {
            heading: "Multi-stage problems",
            body: "Split the sample space by a first event, then condition within each branch: $\\mathrm{P}(A)=\\mathrm{P}(A\\mid B)\\mathrm{P}(B)+\\mathrm{P}(A\\mid B')\\mathrm{P}(B')$. This 'law of total probability' form is the key tool for chained conditional information.",
          },
        ],
        keyFormulas: [
          {
            name: "Conditional probability",
            statement:
              "$\\mathrm{P}(A\\mid B)=\\frac{\\mathrm{P}(A\\cap B)}{\\mathrm{P}(B)}$",
          },
          {
            name: "Independence test",
            statement: "$\\mathrm{P}(A\\cap B)=\\mathrm{P}(A)\\mathrm{P}(B)$",
          },
          {
            name: "Total probability",
            statement:
              "$\\mathrm{P}(A)=\\mathrm{P}(A\\mid B)\\mathrm{P}(B)+\\mathrm{P}(A\\mid B')\\mathrm{P}(B')$",
          },
        ],
        workedExample: {
          problem:
            "$\\mathrm{P}(A)=0.5$, $\\mathrm{P}(B)=0.4$, $\\mathrm{P}(A\\cap B)=0.25$. Find $\\mathrm{P}(A\\cup B)$ and $\\mathrm{P}(A\\mid B)$, and test independence.",
          solution:
            "$\\mathrm{P}(A\\cup B)=0.5+0.4-0.25=0.65$. $\\mathrm{P}(A\\mid B)=0.25/0.4=0.625$. Independence test: $\\mathrm{P}(A)\\mathrm{P}(B)=0.5\\times0.4=0.20\\neq0.25$, so $A$ and $B$ are NOT independent.",
        },
      },
      questions: [
        {
          id: "aahl-u4-cond-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "$\\mathrm{P}(A)=0.4$, $\\mathrm{P}(B)=0.5$ and $\\mathrm{P}(A\\cap B)=0.2$. Are $A$ and $B$ independent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cannot be determined" },
              { id: "b", text: "No — $\\mathrm{P}(A\\cup B)=0.7$" },
              { id: "c", text: "No — they are mutually exclusive" },
              {
                id: "d",
                text: "Yes — $\\mathrm{P}(A\\cap B)=\\mathrm{P}(A)\\mathrm{P}(B)$",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Independence",
                statement:
                  "Independent iff $\\mathrm{P}(A\\cap B)=\\mathrm{P}(A)\\mathrm{P}(B)$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Compute the product: $\\mathrm{P}(A)\\mathrm{P}(B)=0.4\\times0.5=0.20$.",
                working: "0.4\\times0.5=0.20",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This equals $\\mathrm{P}(A\\cap B)=0.20$, so the events are independent.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Yes, independent",
            commonErrors: [
              "Confusing independence with mutual exclusivity — $\\mathrm{P}(A\\cap B)=0.2\\neq0$ so they are not mutually exclusive, yet they ARE independent.",
            ],
          },
        },
        {
          id: "aahl-u4-cond-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "$\\mathrm{P}(A)=0.5$, $\\mathrm{P}(B)=0.4$ and $\\mathrm{P}(A\\cup B)=0.7$. Find $\\mathrm{P}(A\\cap B)$, $\\mathrm{P}(A\\mid B)$ and state whether $A$ and $B$ are independent.",
          response: {
            type: "numeric",
            parts: [
              { label: "$\\mathrm{P}(A\\cap B)$", answer: 0.2 },
              { label: "$\\mathrm{P}(A\\mid B)$", answer: 0.5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Addition rule",
                statement:
                  "$\\mathrm{P}(A\\cup B)=\\mathrm{P}(A)+\\mathrm{P}(B)-\\mathrm{P}(A\\cap B)$",
              },
              {
                kind: "formula",
                name: "Conditional probability",
                statement:
                  "$\\mathrm{P}(A\\mid B)=\\mathrm{P}(A\\cap B)/\\mathrm{P}(B)$",
              },
            ],
            steps: [
              {
                reasoning: "Rearrange the addition rule.",
                working: "\\mathrm{P}(A\\cap B)=0.5+0.4-0.7=0.2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the conditional formula.",
                working: "\\mathrm{P}(A\\mid B)=0.2/0.4=0.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\mathrm{P}(A)\\mathrm{P}(B)=0.20=\\mathrm{P}(A\\cap B)$, so independent; also $\\mathrm{P}(A\\mid B)=0.5=\\mathrm{P}(A)$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$\\mathrm{P}(A\\cap B)=0.2$, $\\mathrm{P}(A\\mid B)=0.5$, independent",
            commonErrors: [
              "Adding instead of subtracting $\\mathrm{P}(A\\cap B)$ in the union formula.",
            ],
          },
        },
        {
          id: "aahl-u4-cond-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Given $\\mathrm{P}(B)=0.3$, $\\mathrm{P}(A\\mid B)=0.6$, $\\mathrm{P}(B')=0.7$ and $\\mathrm{P}(A'\\mid B')=0.9$, find $\\mathrm{P}(A)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Total probability",
                statement:
                  "$\\mathrm{P}(A)=\\mathrm{P}(A\\mid B)\\mathrm{P}(B)+\\mathrm{P}(A\\mid B')\\mathrm{P}(B')$",
              },
            ],
            steps: [
              {
                reasoning:
                  "First branch: $\\mathrm{P}(A\\mid B)\\mathrm{P}(B)=0.6\\times0.3=0.18$.",
                working: "0.18",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\mathrm{P}(A\\mid B')=1-\\mathrm{P}(A'\\mid B')=0.1$.",
                working: "\\mathrm{P}(A\\mid B')=0.1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Second branch: $\\mathrm{P}(A\\mid B')\\mathrm{P}(B')=0.1\\times0.7=0.07$.",
                working: "0.07",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add the branches.",
                working: "0.18+0.07=0.25",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "$\\mathrm{P}(A)=0.25$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mathrm{P}(A)=0.25$",
            commonErrors: [
              "Using $\\mathrm{P}(A'\\mid B')$ directly instead of its complement.",
              "Multiplying by $\\mathrm{P}(B)$ instead of $\\mathrm{P}(B')$ in the second branch.",
            ],
          },
        },
        {
          id: "aahl-u4-cond-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Events $A$ and $B$ satisfy $\\mathrm{P}(A)=0.5$, $\\mathrm{P}(B)=0.4$ and $\\mathrm{P}(A\\cap B)=0.25$.",
          parts: [
            {
              label: "a",
              prompt:
                "Find $\\mathrm{P}(A\\cup B)$, $\\mathrm{P}(A\\mid B)$ and $\\mathrm{P}(B\\mid A)$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Determine whether $A$ and $B$ are independent, justifying your answer.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A third event $C$ satisfies $\\mathrm{P}(C\\mid A)=0.6$ and $\\mathrm{P}(C\\mid A')=0.2$. Use the law of total probability over the partition $A$, $A'$ to find $\\mathrm{P}(C)$.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Probability formulae",
                statement:
                  "Union, conditional and independence rules as in the key formulas.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\mathrm{P}(A\\cup B)=0.5+0.4-0.25=0.65$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\mathrm{P}(A\\mid B)=0.25/0.4=0.625$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\mathrm{P}(B\\mid A)=0.25/0.5=0.5$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "$\\mathrm{P}(A)\\mathrm{P}(B)=0.20\\neq0.25=\\mathrm{P}(A\\cap B)$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Therefore $A$ and $B$ are not independent.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Apply total probability over the partition $A$ and $A': $\\mathrm{P}(C)=\\mathrm{P}(C\\mid A)\\mathrm{P}(A)+\\mathrm{P}(C\\mid A')\\mathrm{P}(A')}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Substitute the given values.",
                working: "0.6\\times0.5+0.2\\times0.5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\mathrm{P}(C)=0.4$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $0.65$, $0.625$, $0.5$ (b) not independent (c) $\\mathrm{P}(C)=0.4$.",
            commonErrors: [
              "Using $\\mathrm{P}(A\\cup B)$ or $\\mathrm{P}(B)$ instead of the partition probabilities $\\mathrm{P}(A)$ and $\\mathrm{P}(A')$ which must sum to 1.",
            ],
          },
        },
        {
          id: "aahl-u4-cond-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "$\\mathrm{P}(A)=0.3$, $\\mathrm{P}(B)=0.5$ and $\\mathrm{P}(A\\cap B)=0.15$. Find $\\mathrm{P}(A\\mid B)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.15$" },
              { id: "b", text: "$0.45$" },
              { id: "c", text: "$0.5$" },
              { id: "d", text: "$0.3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Conditional probability",
                statement:
                  "$\\mathrm{P}(A\\mid B)=\\frac{\\mathrm{P}(A\\cap B)}{\\mathrm{P}(B)}$",
              },
            ],
            steps: [
              {
                reasoning: "Divide the intersection by $\\mathrm{P}(B)$.",
                working: "\\mathrm{P}(A\\mid B)=\\frac{0.15}{0.5}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "=0.3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $0.3$",
            commonErrors: [
              "Reporting $\\mathrm{P}(A\\cap B)=0.15$ as the conditional probability.",
              "Dividing by $\\mathrm{P}(A)$ instead of $\\mathrm{P}(B)$.",
            ],
          },
        },
        {
          id: "aahl-u4-cond-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "$\\mathrm{P}(A)=0.6$, $\\mathrm{P}(B)=0.4$ and $\\mathrm{P}(A\\cap B)=0.24$. Are $A$ and $B$ independent?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Cannot be determined from the given information",
              },
              { id: "b", text: "No — $\\mathrm{P}(A\\cup B)=0.76$" },
              {
                id: "c",
                text: "Yes — $\\mathrm{P}(A\\cap B)=\\mathrm{P}(A)\\mathrm{P}(B)$",
              },
              { id: "d", text: "No — they are mutually exclusive" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Independence",
                statement:
                  "Independent iff $\\mathrm{P}(A\\cap B)=\\mathrm{P}(A)\\mathrm{P}(B)$.",
              },
            ],
            steps: [
              {
                reasoning: "Compute the product.",
                working: "\\mathrm{P}(A)\\mathrm{P}(B)=0.6\\times0.4=0.24",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It equals $\\mathrm{P}(A\\cap B)$, so the events are independent.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Yes, independent",
            commonErrors: [
              "Confusing independence with mutual exclusivity: $\\mathrm{P}(A\\cap B)=0.24\\neq0$.",
            ],
          },
        },
        {
          id: "aahl-u4-cond-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "$\\mathrm{P}(A)=0.5$, $\\mathrm{P}(B)=0.4$ and $\\mathrm{P}(A\\cup B)=0.8$. Find $\\mathrm{P}(A\\cap B)$, $\\mathrm{P}(A\\mid B)$ and $\\mathrm{P}(B\\mid A)$.",
          parts: [
            { label: "a", prompt: "$\\mathrm{P}(A\\cap B)$", marks: 1 },
            { label: "b", prompt: "$\\mathrm{P}(A\\mid B)$", marks: 1 },
            { label: "c", prompt: "$\\mathrm{P}(B\\mid A)$", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\mathrm{P}(A\\cap B)$", answer: 0.1 },
              { label: "(b) $\\mathrm{P}(A\\mid B)$", answer: 0.25 },
              { label: "(c) $\\mathrm{P}(B\\mid A)$", answer: 0.2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Addition rule",
                statement:
                  "$\\mathrm{P}(A\\cup B)=\\mathrm{P}(A)+\\mathrm{P}(B)-\\mathrm{P}(A\\cap B)$",
              },
              {
                kind: "formula",
                name: "Conditional probability",
                statement:
                  "$\\mathrm{P}(A\\mid B)=\\frac{\\mathrm{P}(A\\cap B)}{\\mathrm{P}(B)}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Rearrange the addition rule.",
                working: "\\mathrm{P}(A\\cap B)=0.5+0.4-0.8=0.1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Divide by $\\mathrm{P}(B)$.",
                working: "\\mathrm{P}(A\\mid B)=\\frac{0.1}{0.4}=0.25",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Divide by $\\mathrm{P}(A)$.",
                working: "\\mathrm{P}(B\\mid A)=\\frac{0.1}{0.5}=0.2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.1$, $0.25$, $0.2$.",
            commonErrors: [
              "Adding $\\mathrm{P}(A)+\\mathrm{P}(B)+\\mathrm{P}(A\\cup B)$ instead of subtracting the intersection.",
              "Swapping the denominators in the two conditional probabilities.",
            ],
          },
        },
        {
          id: "aahl-u4-cond-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "$\\mathrm{P}(B)=0.4$, $\\mathrm{P}(A\\mid B)=0.7$ and $\\mathrm{P}(A\\mid B')=0.2$. Find $\\mathrm{P}(A)$ and $\\mathrm{P}(B\\mid A)$.",
          parts: [
            { label: "a", prompt: "$\\mathrm{P}(A)$", marks: 2 },
            { label: "b", prompt: "$\\mathrm{P}(B\\mid A)$", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $\\mathrm{P}(A)$", answer: 0.4 },
              { label: "(b) $\\mathrm{P}(B\\mid A)$", answer: 0.7 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Total probability",
                statement:
                  "$\\mathrm{P}(A)=\\mathrm{P}(A\\mid B)\\mathrm{P}(B)+\\mathrm{P}(A\\mid B')\\mathrm{P}(B')$",
              },
              {
                kind: "theorem",
                name: "Bayes' theorem",
                statement:
                  "$\\mathrm{P}(B\\mid A)=\\frac{\\mathrm{P}(A\\mid B)\\mathrm{P}(B)}{\\mathrm{P}(A)}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Apply total probability over the partition $B,B'$.",
                working: "\\mathrm{P}(A)=0.7(0.4)+0.2(0.6)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "=0.28+0.12=0.4",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Form the joint probability for the numerator.",
                working: "\\mathrm{P}(A\\cap B)=0.7(0.4)=0.28",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Divide by $\\mathrm{P}(A)$.",
                working: "\\mathrm{P}(B\\mid A)=\\frac{0.28}{0.4}=0.7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\mathrm{P}(A)=0.4$, $\\mathrm{P}(B\\mid A)=0.7$.",
            commonErrors: [
              "Using $\\mathrm{P}(B)=0.4$ as the weight in both branches.",
              "Reporting $\\mathrm{P}(A\\mid B)=0.7$ as $\\mathrm{P}(B\\mid A)$ without checking whether the conditioning reverses.",
            ],
          },
        },
        {
          id: "aahl-u4-cond-q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "$\\mathrm{P}(B)=0.6$, $\\mathrm{P}(A\\mid B)=0.4$ and $\\mathrm{P}(A\\mid B')=0.3$.",
          parts: [
            { label: "a", prompt: "Find $\\mathrm{P}(A)$.", marks: 2 },
            { label: "b", prompt: "Find $\\mathrm{P}(B\\mid A)$.", marks: 2 },
            {
              label: "c",
              prompt: "Determine whether $A$ and $B$ are independent.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Total probability",
                statement:
                  "$\\mathrm{P}(A)=\\mathrm{P}(A\\mid B)\\mathrm{P}(B)+\\mathrm{P}(A\\mid B')\\mathrm{P}(B')$",
              },
              {
                kind: "theorem",
                name: "Bayes' theorem",
                statement:
                  "$\\mathrm{P}(B\\mid A)=\\frac{\\mathrm{P}(A\\mid B)\\mathrm{P}(B)}{\\mathrm{P}(A)}$",
              },
              {
                kind: "definition",
                name: "Independence",
                statement:
                  "Independent iff $\\mathrm{P}(A\\mid B)=\\mathrm{P}(A)$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Apply total probability over $B$ and $B'$.",
                working: "\\mathrm{P}(A)=0.4(0.6)+0.3(0.4)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "=0.24+0.12=0.36",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The numerator is $\\mathrm{P}(A\\cap B)=0.4(0.6)=0.24$.",
                working: "\\mathrm{P}(B\\mid A)=\\frac{0.24}{0.36}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Simplify.",
                working: "=\\frac23\\approx0.667",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "$\\mathrm{P}(B\\mid A)=\\frac23\\neq0.6=\\mathrm{P}(B)$, so $A$ and $B$ are not independent.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $0.36$. (b) $\\frac23$. (c) Not independent.",
            commonErrors: [
              "Using $\\mathrm{P}(A\\mid B)=0.4$ as the answer to (b).",
              "Declaring independence because the conditional probabilities are close in value.",
            ],
          },
        },
        {
          id: "aahl-u4-cond-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "$\\mathrm{P}(A)=0.5$, $\\mathrm{P}(B)=0.3$ and $\\mathrm{P}(A\\cap B)=0$. Which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$A$ and $B$ are mutually exclusive but not independent",
              },
              {
                id: "b",
                text: "$A$ and $B$ are mutually exclusive and independent",
              },
              { id: "c", text: "$\\mathrm{P}(A\\cup B)=0$" },
              { id: "d", text: "$A$ and $B$ are independent" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mutually exclusive",
                statement:
                  "$\\mathrm{P}(A\\cap B)=0$ means the events cannot both occur.",
              },
              {
                kind: "definition",
                name: "Independence",
                statement:
                  "Independent iff $\\mathrm{P}(A\\cap B)=\\mathrm{P}(A)\\mathrm{P}(B)$; here the product is $0.15\\neq0$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Since $\\mathrm{P}(A\\cap B)=0$, the events are mutually exclusive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Since $\\mathrm{P}(A)\\mathrm{P}(B)=0.15\\neq0=\\mathrm{P}(A\\cap B)$, they are not independent.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Mutually exclusive but not independent",
            commonErrors: [
              "Believing mutually exclusive events are automatically independent.",
              "Computing $\\mathrm{P}(A\\cup B)=\\mathrm{P}(A)+\\mathrm{P}(B)=0.8$ but then misreading the choices.",
            ],
          },
        },
      ],
    },
    {
      id: "aahl-u4-standardisation",
      title: "Standardisation with unknown parameters",
      skill:
        "Standardise normal variables, use inverse normal values to find unknown means or standard deviations, and solve for both simultaneously.",
      lesson: {
        sections: [
          {
            heading: "Standardising with known parameters",
            body: "For $X\\sim\\mathrm{N}(\\mu,\\sigma^2)$, probabilities are found by computing $z=\\frac{x-\\mu}{\\sigma}$ and reading $\\mathrm{P}(Z<z)$ from the standard normal table (or GDC). Remember $\\sigma$ is the square root of the variance: $\\mathrm{N}(50,64)$ means $\\sigma=8$, not 64.",
          },
          {
            heading: "Unknown mean or standard deviation",
            body: "When one parameter is unknown, a single probability gives one equation: e.g. $\\mathrm{P}(X<40)=0.1587$ with $\\sigma=5$ gives $\\frac{40-\\mu}{5}=-1$, so $\\mu=45$. When BOTH are unknown, two probabilities give two equations in $\\mu$ and $\\sigma$ — subtract them to eliminate $\\mu$ and solve for $\\sigma$ first.",
          },
          {
            heading: "Useful standard normal values",
            body: "$\\mathrm{P}(Z<-1)=0.1587$, $\\mathrm{P}(Z<-2)=0.0228$, $\\mathrm{P}(Z>1)=0.1587$, $\\mathrm{P}(Z>2)=0.0228$, $\\mathrm{P}(Z>0)=0.5$. Symmetry: $\\mathrm{P}(Z<-a)=\\mathrm{P}(Z>a)$.",
          },
        ],
        keyFormulas: [
          {
            name: "Standardisation",
            statement: "$z=\\frac{x-\\mu}{\\sigma}$, $Z\\sim\\mathrm{N}(0,1)$",
          },
          {
            name: "One unknown",
            statement:
              "One probability $\\Rightarrow$ one equation in $\\mu$ or $\\sigma$",
          },
          {
            name: "Two unknowns",
            statement:
              "Two probabilities $\\Rightarrow$ two equations; subtract to eliminate $\\mu$",
          },
        ],
        workedExample: {
          problem:
            "$X\\sim\\mathrm{N}(\\mu,\\sigma^2)$ with $\\mathrm{P}(X<30)=0.1587$ and $\\mathrm{P}(X>60)=0.0228$. Find $\\mu$ and $\\sigma$.",
          solution:
            "Standardise: $\\frac{30-\\mu}{\\sigma}=-1$ and $\\frac{60-\\mu}{\\sigma}=2$. Subtracting: $\\frac{30}{\\sigma}=3$, so $\\sigma=10$; then $30-\\mu=-10$, so $\\mu=40$.",
        },
      },
      questions: [
        {
          id: "aahl-u4-std-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "$X\\sim\\mathrm{N}(50,64)$. Find $\\mathrm{P}(X<42)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.3413$" },
              { id: "b", text: "$0.1587$" },
              { id: "c", text: "$0.0228$" },
              { id: "d", text: "$0.8413$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Standardisation",
                statement:
                  "$z=\\frac{x-\\mu}{\\sigma}$ with $\\sigma=\\sqrt{64}=8$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$z=\\frac{42-50}{8}=-1$, and $\\mathrm{P}(Z<-1)=0.1587$.",
                working: "z=-1 \\Rightarrow 0.1587",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $0.1587$",
            commonErrors: ["Using $\\sigma=64$ instead of $\\sigma=8$."],
          },
        },
        {
          id: "aahl-u4-std-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "$X\\sim\\mathrm{N}(\\mu,25)$ and $\\mathrm{P}(X<40)=0.1587$. Find $\\mu$.",
          response: {
            type: "numeric",
            parts: [{ label: "$\\mu$", answer: 45 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Standardisation",
                statement:
                  "$\\frac{x-\\mu}{\\sigma}=z$ where $z$ comes from the inverse normal.",
              },
            ],
            steps: [
              {
                reasoning: "$\\mathrm{P}(X<40)=0.1587$ corresponds to $z=-1$.",
                working: "z=-1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Set up $\\frac{40-\\mu}{5}=-1$.",
                working: "40-\\mu=-5",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\mu=45$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\mu=45$",
            commonErrors: [
              "Sign error: $\\frac{40-\\mu}{5}=-1$ gives $\\mu=45$, not 35.",
            ],
          },
        },
        {
          id: "aahl-u4-std-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "$X\\sim\\mathrm{N}(\\mu,\\sigma^2)$ where $\\mathrm{P}(X<30)=0.1587$ and $\\mathrm{P}(X>60)=0.0228$. Find $\\mu$ and $\\sigma$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Standardisation",
                statement:
                  "Each probability produces one linear equation in $\\mu$ and $\\sigma$.",
              },
            ],
            steps: [
              {
                reasoning: "Convert both probabilities to $z$-values.",
                working: "z_1=-1,\\quad z_2=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Write the two equations.",
                working:
                  "\\frac{30-\\mu}{\\sigma}=-1,\\quad \\frac{60-\\mu}{\\sigma}=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract the equations to eliminate $\\mu$.",
                working: "\\frac{30}{\\sigma}=3",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\sigma=10$.", marks: 1, markCode: "A" },
              {
                reasoning: "Back-substitute: $30-\\mu=-10$, so $\\mu=40$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\mu=40$, $\\sigma=10$",
            commonErrors: [
              "Using $\\sigma^2$ as $\\sigma$ in the equations.",
              "Sign error on the second $z$-value: $\\mathrm{P}(X>60)=0.0228$ gives $z=+2$, not $-2$.",
            ],
          },
        },
        {
          id: "aahl-u4-std-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 10,
          stem: "$X\\sim\\mathrm{N}(\\mu,\\sigma^2)$. It is given that $\\mathrm{P}(X<20)=0.0228$ and $\\mathrm{P}(X>50)=0.1587$.",
          parts: [
            {
              label: "a",
              prompt:
                "Write down the two standardised equations involving $\\mu$ and $\\sigma$.",
              marks: 2,
            },
            { label: "b", prompt: "Find $\\mu$ and $\\sigma$.", marks: 3 },
            { label: "c", prompt: "Find $\\mathrm{P}(30<X<50)$.", marks: 3 },
            {
              label: "d",
              prompt:
                "Show that $\\mathrm{P}(X<\\mu-\\sigma)=\\mathrm{P}(X>\\mu+\\sigma)$ and state its value.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Standardisation",
                statement:
                  "$z=\\frac{x-\\mu}{\\sigma}$ converts any normal probability to a standard normal one.",
              },
              {
                kind: "principle",
                name: "Symmetry",
                statement:
                  "The standard normal curve is symmetric about 0, so $\\mathrm{P}(Z<-a)=\\mathrm{P}(Z>a)$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$\\mathrm{P}(X<20)=0.0228$ gives $z=-2$.",
                working: "\\frac{20-\\mu}{\\sigma}=-2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "$\\mathrm{P}(X>50)=0.1587$ gives $z=1$.",
                working: "\\frac{50-\\mu}{\\sigma}=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Subtract: $\\frac{30}{\\sigma}=3$.",
                working: "\\sigma=10",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$20-\\mu=-20$, so $\\mu=40$.",
                working: "\\mu=40",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Both values verified by substitution.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Standardise the bounds: $z=\\frac{30-40}{10}=-1$ and $z=\\frac{50-40}{10}=1$.",
                working: "z=-1\\ \\text{and}\\ z=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$\\mathrm{P}(-1<Z<1)=\\mathrm{P}(Z<1)-\\mathrm{P}(Z<-1)=0.8413-0.1587$.",
                working: "0.8413-0.1587",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$=0.6826$ (accept $0.683$).",
                working: "0.6826",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "$\\frac{(\\mu-\\sigma)-\\mu}{\\sigma}=-1$ and $\\frac{(\\mu+\\sigma)-\\mu}{\\sigma}=1$; by symmetry $\\mathrm{P}(Z<-1)=\\mathrm{P}(Z>1)=0.1587$.",
                working: "0.1587",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Both tails equal by the symmetry of the normal curve about $\\mu$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\frac{20-\\mu}{\\sigma}=-2$, $\\frac{50-\\mu}{\\sigma}=1$ (b) $\\mu=40$, $\\sigma=10$ (c) $0.6826$ (d) both $=0.1587$.",
            commonErrors: [
              "Mixing up which tail gives which $z$-sign.",
              "Using $\\sigma^2$ instead of $\\sigma$.",
            ],
          },
        },
      ],
    },
  ],
};
