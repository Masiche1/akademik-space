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
              { id: "a", text: "$1.4$" },
              { id: "b", text: "$0.4$" },
              { id: "c", text: "$0$" },
              { id: "d", text: "$0.6$" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cial-m-u6-pr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For mutually exclusive events A and B, $P(A \\cup B) = $",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$P(A)P(B)$" },
              { id: "b", text: "$P(A) + P(B)$" },
              { id: "c", text: "$1 - P(A)P(B)$" },
              { id: "d", text: "$P(A) + P(B) - P(A \\cap B)$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mutually exclusive",
                statement: "$P(A \\cap B) = 0$, so $P(A \\cup B) = P(A)+P(B)$.",
              },
            ],
            steps: [
              {
                reasoning: "No overlap, so probabilities simply add.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** $P(A) + P(B)$",
            commonErrors: ["Using the general addition formula."],
          },
        },
        {
          id: "cial-m-u6-pr-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Events A and B are independent with $P(A) = 0.3$ and $P(B) = 0.5$. Find $P(A \\cap B)$.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.15 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Independence",
                statement: "$P(A \\cap B) = P(A)P(B)$.",
              },
            ],
            steps: [
              {
                reasoning: "$P(A \\cap B) = 0.3 \\times 0.5$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 0.15$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.15$",
            commonErrors: ["Adding instead of multiplying."],
          },
        },
        {
          id: "cial-m-u6-pr-q7",
          difficulty: "core",
          totalMarks: 3,
          stem: "Given $P(A) = 0.6$ and $P(B|A) = 0.3$, find $P(A \\cap B)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Multiplication rule",
                statement: "$P(A \\cap B) = P(A) \\times P(B|A)$.",
              },
            ],
            steps: [
              {
                reasoning: "$P(A \\cap B) = P(A) \\times P(B|A)$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 0.6 \\times 0.3 = 0.18$.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.18$",
            commonErrors: ["Dividing instead of multiplying."],
          },
        },
        {
          id: "cial-m-u6-pr-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Bayes' theorem is used to...",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Update a probability when new evidence is obtained",
              },
              { id: "b", text: "Calculate a variance" },
              { id: "c", text: "Find the mean of a distribution" },
              { id: "d", text: "Plot a normal curve" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bayes",
                statement: "Revises probabilities using evidence.",
              },
            ],
            steps: [
              {
                reasoning: "Bayes updates prior probability with new information.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Update probability with new evidence",
            commonErrors: ["Confusing with conditional probability alone."],
          },
        },
        {
          id: "cial-m-u6-pr-q9",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A bag contains 4 red and 6 blue balls. Two balls are drawn without replacement. Find the probability that both are red.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.1333, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Multiplication rule",
                statement: "Without replacement: adjust second probability.",
              },
            ],
            steps: [
              {
                reasoning: "First red: $\\frac{4}{10}$; second red: $\\frac{3}{9}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P = \\frac{4}{10} \\times \\frac{3}{9} = \\frac{12}{90}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{2}{15}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$\\approx 0.133$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{2}{15} \\approx 0.133$",
            commonErrors: ["Using $\\frac{4}{10}$ twice (with replacement)."],
          },
        },
        {
          id: "cial-m-u6-pr-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Given $P(A) = 0.5$, $P(B) = 0.4$ and $P(A \\cap B) = 0.2$, find $P(A \\cup B)$ and $P(A' \\cap B')$.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.7 },
              { label: "b", answer: 0.3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Addition rule",
                statement: "$P(A \\cup B) = P(A)+P(B)-P(A \\cap B)$; neither = $1 - P(A \\cup B)$.",
              },
            ],
            steps: [
              {
                reasoning: "$P(A \\cup B) = 0.5 + 0.4 - 0.2 = 0.7$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P(A' \\cap B') = 1 - 0.7 = 0.3$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Union correct.", marks: 1, markCode: "A" },
              { reasoning: "Neither correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$P(A \\cup B)=0.7$, $P(A' \\cap B')=0.3$",
            commonErrors: ["Forgetting to subtract the intersection."],
          },
        },
        {
          id: "cial-m-u6-pr-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The formula for conditional probability $P(A|B)$ is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$P(A) + P(B)$" },
              { id: "b", text: "$\\frac{P(A)}{P(A \\cap B)}$" },
              {
                id: "c",
                text: "$\\frac{P(A \\cap B)}{P(B)}$",
              },
              {
                id: "d",
                text: "$\\frac{P(A)P(B)}{P(B)}$",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conditional probability",
                statement: "$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$.",
              },
            ],
            steps: [
              { reasoning: "Intersection over the conditioning event.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $\\frac{P(A \\cap B)}{P(B)}$",
            commonErrors: ["Dividing by $P(A)$ instead of $P(B)$."],
          },
        },
        {
          id: "cial-m-u6-pr-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Two fair dice are rolled. Find the probability that the sum is 7.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.1667, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Sample space",
                statement: "36 equally likely outcomes; 6 give sum 7.",
              },
            ],
            steps: [
              {
                reasoning: "Favourable: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) — 6 outcomes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P = \\frac{6}{36}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= \\frac{1}{6} \\approx 0.167$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{6} \\approx 0.167$",
            commonErrors: ["Counting (3,4) only once or missing orderings."],
          },
        },
        {
          id: "cial-m-u6-pr-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Given $P(A) = 0.4$, $P(B) = 0.5$ and $P(A \\cup B) = 0.7$, find $P(A \\cap B)$ and $P(A|B)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Addition + conditional",
                statement: "Rearrange addition rule, then apply conditional formula.",
              },
            ],
            steps: [
              {
                reasoning: "$P(A \\cap B) = P(A)+P(B)-P(A \\cup B) = 0.4+0.5-0.7$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 0.2$.", marks: 1, markCode: "M" },
              {
                reasoning: "$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.2}{0.5}$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$= 0.4$.", marks: 1, markCode: "M" },
              { reasoning: "Both answers correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$P(A \\cap B)=0.2$, $P(A|B)=0.4$",
            commonErrors: ["Using $P(A \\cup B)$ in place of $P(A \\cap B)$."],
          },
        },
        {
          id: "cial-m-u6-pr-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Given $P(A) = 0.6$, $P(B) = 0.3$ and $P(A \\cap B) = 0.18$, are A and B independent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes, since $P(A \\cup B) = 0.72$" },
              { id: "b", text: "No, since $P(A \\cap B) \\ne P(A)P(B)$" },
              { id: "c", text: "Yes, since $P(A \\cap B) = P(A)P(B)$" },
              { id: "d", text: "Cannot be determined" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Independence test",
                statement: "Independent iff $P(A \\cap B) = P(A)P(B)$.",
              },
            ],
            steps: [
              {
                reasoning: "$0.6 \\times 0.3 = 0.18 = P(A \\cap B)$ → independent.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Yes, independent",
            commonErrors: ["Comparing $P(A \\cap B)$ with $P(A)+P(B)$."],
          },
        },
        {
          id: "cial-m-u6-pr-q15",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Machine A produces 70% of items and machine B produces 30%. The defect rate is 1% for A and 4% for B. Find the probability that a defective item came from machine A.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Bayes",
                statement: "$P(A|D) = \\frac{P(D|A)P(A)}{P(D)}$ with $P(D)$ from both machines.",
              },
            ],
            steps: [
              {
                reasoning: "$P(D) = 0.01 \\times 0.7 + 0.04 \\times 0.3 = 0.007 + 0.012 = 0.019$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P(D \\cap A) = 0.007$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$P(A|D) = \\frac{0.007}{0.019}$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$= \\frac{7}{19} \\approx 0.368$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "≈ 36.8%.", marks: 1, markCode: "A" },
              { reasoning: "Correct interpretation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 0.368$",
            commonErrors: ["Ignoring machine B's contribution to defects."],
          },
        },
        {
          id: "cial-m-u6-pr-q16",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Probability rules.",
          parts: [
            { label: "a", prompt: "State the complement rule.", marks: 1 },
            {
              label: "b",
              prompt: "State the addition rule for mutually exclusive events.",
              marks: 1,
            },
            {
              label: "c",
              prompt: "Given $P(A \\cap B) = 0.15$ and $P(B) = 0.5$, find $P(A|B)$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "State the condition for A and B to be independent.",
              marks: 2,
            },
            {
              label: "e",
              prompt: "State Bayes' theorem for $P(A|B)$ in words or symbols.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Probability rules",
                statement: "Complement+addition+conditional+independence+Bayes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$P(A') = 1 - P(A)$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$P(A \\cup B) = P(A) + P(B)$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$= \\frac{0.15}{0.5} = 0.3$.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "$P(A \\cap B) = P(A)P(B)$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "One event does not affect the other.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "$P(A|B) = \\frac{P(B|A)P(A)}{P(B|A)P(A)+P(B|A')P(A')}$ or equivalent.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning: "Updates probability of A given evidence B.",
                marks: 1,
                markCode: "M",
              },
              { part: "e", reasoning: "Correctly stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "(a) 1−P(A) (b) P(A)+P(B) (c) 0.3 (d) P(A∩B)=P(A)P(B) (e) Bayes formula",
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
