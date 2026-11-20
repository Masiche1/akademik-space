import type { Lesson } from "../../../types.ts";

export const lesson611: Lesson = {
  id: "cial-m-u6-lesson-6-1",
  code: "6-1",
  title: "Probability",
  goal: "I CAN apply probability rules including conditional probability and Bayes' theorem.",
  standards: ["9709: probability"],
  vocabulary: [
    {
      term: "Probability",
      definition: "Measure of likelihood of an event occurring.",
    },
    { term: "Sample space", definition: "Set of all possible outcomes." },
    {
      term: "Conditional probability",
      definition: "Probability of an event given another has occurred.",
    },
    {
      term: "Mutually exclusive",
      definition: "Events that cannot occur simultaneously.",
    },
    {
      term: "Independent events",
      definition: "Events where one does not affect the other's probability.",
    },
    {
      term: "Bayes' theorem",
      definition: "Formula for updating probability based on new evidence.",
    },
  ],
  concepts: [
    {
      id: "cial-m-u6-probability-rules",
      title: "Probability rules",
      skill:
        "Apply addition, multiplication and conditional probability rules.",
      lesson: {
        sections: [
          {
            heading: "Basic rules",
            body: "$0 \\leq P(A) \\leq 1$; $P(A') = 1 - P(A)$. Addition: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. For mutually exclusive: $P(A \\cup B) = P(A) + P(B)$.",
          },
          {
            heading: "Multiplication and independence",
            body: "Multiplication: $P(A \\cap B) = P(A) \\times P(B|A)$. Independent events: $P(A \\cap B) = P(A)P(B)$. Conditional: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$.",
          },
          {
            heading: "Bayes' theorem",
            body: "$P(A|B) = \\frac{P(B|A)P(A)}{P(B|A)P(A) + P(B|A')P(A')}$ — updates probability of A given evidence B.",
          },
        ],
        keyFormulas: [
          {
            name: "Probability rules",
            statement:
              "$P(A|B)=\\frac{P(A\\cap B)}{P(B)}$; Bayes: $P(A|B)=\\frac{P(B|A)P(A)}{P(B)}$",
          },
        ],
        workedExample: {
          problem: "P(A)=0.3, P(B)=0.5, P(A∩B)=0.15. Find P(A|B).",
          solution: "$P(A|B) = \\frac{0.15}{0.5} = 0.3$.",
        },
      },
      questions: [
        {
          id: "cial-m-u6-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If P(A) = 0.4, what is P(A')?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.6$" },
              { id: "b", text: "$0.4$" },
              { id: "c", text: "$1.4$" },
              { id: "d", text: "$0$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Complement",
                statement: "P(A') = 1 - P(A).",
              },
            ],
            steps: [
              { reasoning: "P(A') = 1 - 0.4 = 0.6.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $0.6$",
            commonErrors: ["Subtracting from 0."],
          },
        },
        {
          id: "cial-m-u6-pr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "P(A)=0.5, P(B)=0.4, P(A∩B)=0.2. Find P(A|B).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conditional probability",
                statement: "$P(A|B) = \\frac{P(A\\cap B)}{P(B)}$",
              },
            ],
            steps: [
              {
                reasoning: "$P(A|B) = \\frac{0.2}{0.4}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 0.5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.5$",
            commonErrors: ["Dividing by P(A) instead."],
          },
        },
        {
          id: "cial-m-u6-pr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A disease affects 1% of population. Test detects 99% of cases (sensitivity) and 95% of non-cases are correctly identified (specificity). Find P(disease|positive test).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bayes",
                statement: "Update prior probability with test evidence.",
              },
            ],
            steps: [
              {
                reasoning: "P(D)=0.01, P(+|D)=0.99, P(+|D')=0.05.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "P(+)=0.99×0.01+0.05×0.99=0.0594.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "P(D|+)=0.0099/0.0594≈0.167.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "~16.7% — surprisingly low.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\approx 0.167$ (16.7%)",
            commonErrors: ["Ignoring base rate."],
          },
        },
        {
          id: "cial-m-u6-pr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Probability rules.",
          parts: [
            { label: "a", prompt: "P(A)=0.4, find P(A')", marks: 1 },
            {
              label: "b",
              prompt: "P(A)=0.5, P(B)=0.4, P(A∩B)=0.2, find P(A|B)",
              marks: 2,
            },
            { label: "c", prompt: "State Bayes' theorem", marks: 2 },
            { label: "d", prompt: "Two events independent if...", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Probability",
                statement: "Complement+conditional+Bayes+independence.",
              },
            ],
            steps: [
              { part: "a", reasoning: "$1-0.4=0.6$.", marks: 1, markCode: "M" },
              {
                part: "b",
                reasoning: "$\\frac{0.2}{0.4}$.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "$=0.5$.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Formula stated.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct terms.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$P(A\\cap B)=P(A)P(B)$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "One doesn't affect other.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Example given.",
                marks: 1,
                markCode: "M",
              },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) 0.6 (b) 0.5 (c) Bayes formula (d) $P(A\\cap B)=P(A)P(B)$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-m-u6-probability-notes",
      title: "Probability and statistics — revision notes",
      summary:
        "Probability rules, random variables, binomial and normal distributions.",
      sections: [
        {
          heading: "Probability",
          body: "$P(A|B)=\\frac{P(A\\cap B)}{P(B)}$. Bayes for updating. Independence: $P(A\\cap B)=P(A)P(B)$.",
        },
        {
          heading: "Distributions",
          body: "$E(X)=\\sum xP(X=x)$; Var $=E(X^2)-[E(X)]^2$. Binomial: $P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$.",
        },
        {
          heading: "Normal",
          body: "$Z=\\frac{X-\\mu}{\\sigma}$; use Z-tables. Empirical rule: 68/95/99.7%.",
        },
        {
          heading: "Exam checklist",
          body: "Can you apply Bayes? Find E and Var? Use binomial formula? Standardise normal?",
        },
      ],
    },
  ],
};
