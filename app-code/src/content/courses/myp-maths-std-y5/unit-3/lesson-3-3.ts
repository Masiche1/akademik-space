import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "mypms5-u3-lesson-3-3",
  code: "3-3",
  title: "Further Statistics and Probability",
  goal: "I CAN calculate expected values, interpret regression lines, use probability trees for multi-stage experiments, and solve conditional probability problems.",
  standards: [
    "MYP Maths: Statistics & Probability",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Expected value", definition: "Long-run average outcome: $E(X)=\\sum x_i\\times P(x_i)$; used to assess fairness and make decisions." },
    { term: "Regression line", definition: "Line of best fit for bivariate data; used to predict one variable from another (interpolation only, not extrapolation)." },
    { term: "Conditional probability", definition: "Probability of an event given another has occurred: $P(A|B)=\\frac{P(A\\cap B)}{P(B)}$." },
    { term: "Tree diagram", definition: "Diagram showing all outcomes of sequential events with probabilities on branches; multiply along branches, add across." },
    { term: "Correlation vs causation", definition: "Correlation shows association; it does not prove one variable causes the other." },
  ],
  concepts: [
    {
      id: "mypms5-u3-expected",
      title: "Expected value and regression",
      skill: "Calculate expected values for games and decisions, and interpret regression lines for prediction.",
      lesson: {
        sections: [
          {
            heading: "Expected value",
            body: "$E(X)=\\sum x_iP(x_i)$. For a fair game, $E(X)=0$ (or equals the stake). Positive expected value favours the player; negative favours the house. Use to decide whether to play.",
          },
          {
            heading: "Worked example — fair game",
            body: "Game: roll die; win 10 if 6, lose 2 otherwise. $E=10(\\frac{1}{6})+(-2)(\\frac{5}{6})=\\frac{10}{6}-\\frac{10}{6}=0$ — fair. If win 15 instead: $E=15(\\frac{1}{6})-2(\\frac{5}{6})=\\frac{15-10}{6}=\\frac{5}{6}$ — favourable.",
          },
          {
            heading: "Regression interpretation",
            body: "Line of best fit: $y=mx+c$. For prediction: substitute known $x$ to estimate $y$. **Interpolation** (within data range) is reliable; **extrapolation** (outside range) is unreliable. Correlation coefficient $r$: $-1\\le r\\le1$; $|r|$ close to 1 = strong correlation.",
          },
        ],
        keyFormulas: [
          { name: "Expected value", statement: "$E(X)=\\sum x_iP(x_i)$" },
          { name: "Regression", statement: "$\\hat{y}=mx+c$" },
          { name: "Correlation", statement: "$r\\in[-1,1]$; strong if $|r|>0.8$" },
        ],
        workedExample: {
          problem: "A spinner has P(win)=0.4 paying 5, P(lose)=0.6 paying -3. Find expected value per play.",
          solution: "$E=5(0.4)+(-3)(0.6)=2-1.8=0.2$ — favourable by 0.2 per play.",
        },
      },
      questions: [
        {
          id: "mypms5-u3-exp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A game pays 8 with probability 0.25 and -2 with probability 0.75. Find the expected value.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "-0.5" },
              { id: "b", text: "1.0" },
              { id: "c", text: "0.5" },
              { id: "d", text: "-1.0" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected value", statement: "$E=8(0.25)+(-2)(0.75)=2-1.5=0.5$." },
            ],
            steps: [
              { reasoning: "$E=8(0.25)+(-2)(0.75)=2-1.5=0.5$.", working: "0.5", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** 0.5",
            commonErrors: ["Adding probabilities instead of multiplying by outcomes."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypms5-u3-exp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A regression line is $y=2.5x+10$. Predict $y$ when $x=8$, and state whether this is interpolation or extrapolation if data ranges from $x=2$ to $x=12$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "50; interpolation" },
              { id: "b", text: "30; interpolation" },
              { id: "c", text: "30; extrapolation" },
              { id: "d", text: "20; extrapolation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Regression", statement: "$y=2.5(8)+10=30$; $x=8$ is within $[2,12]$ → interpolation." },
            ],
            steps: [
              { reasoning: "$y=2.5(8)+10=30$.", working: "30", marks: 1, markCode: "M" },
              { reasoning: "$x=8\\in[2,12]$ → interpolation.", working: "\\text{interpolation}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30; interpolation",
            commonErrors: ["Using $x=8$ as extrapolation because it's 'in the middle'."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms5-u3-exp-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A lottery ticket costs 2. It wins 50 with probability 0.01, 10 with probability 0.05, and 0 otherwise. Find the expected profit per ticket.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1.25" },
              { id: "b", text: "-1" },
              { id: "c", text: "-0.75" },
              { id: "d", text: "0.75" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected value", statement: "Expected winnings $=50(0.01)+10(0.05)+0(0.94)=0.5+0.5=1$; profit $=1-2=-1$." },
            ],
            steps: [
              { reasoning: "Expected winnings $=50(0.01)+10(0.05)=0.5+0.5=1$.", working: "1", marks: 1, markCode: "M" },
              { reasoning: "Profit = winnings - cost = $1-2=-1$.", working: "-1", marks: 1, markCode: "M" },
              { reasoning: "Expected profit per ticket = -1.", working: "-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "-1 per ticket",
            commonErrors: ["Forgetting to subtract the ticket cost."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms5-u3-exp-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two events A and B: $P(A)=0.6$, $P(B)=0.4$, $P(A\\cap B)=0.2$.",
          parts: [
            { label: "a", prompt: "Find $P(A\\cup B)$.", marks: 1 },
            { label: "b", prompt: "Find $P(A|B)$.", marks: 2 },
            { label: "c", prompt: "Are A and B independent? Justify.", marks: 2 },
            { label: "d", prompt: "Find $P(A\\cap B')$ where $B'$ is 'not B'.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Probability rules", statement: "Addition, conditional, independence." },
            ],
            steps: [
              { part: "a", reasoning: "$P(A\\cup B)=0.6+0.4-0.2=0.8$.", working: "0.8", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$P(A|B)=\\frac{P(A\\cap B)}{P(B)}=\\frac{0.2}{0.4}=0.5$.", working: "0.5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the conditional probability.", working: "0.5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Check independence: $P(A)P(B)=0.6\\times0.4=0.24\\ne0.2=P(A\\cap B)$ → not independent.", working: "0.24\\ne0.2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State conclusion.", working: "\\text{not independent}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$P(A\\cap B')=P(A)-P(A\\cap B)=0.6-0.2=0.4$.", working: "0.4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Verify: $P(A)=P(A\\cap B)+P(A\\cap B')$ → $0.6=0.2+0.4$ ✓.", working: "0.4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the probability.", working: "0.4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.8 (b) 0.5 (c) not independent (d) 0.4",
            commonErrors: ["In (b), using $P(A\\cap B)/P(A)$ instead of $/P(B)$."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        { id: "mypms5-u3-exp-q5", difficulty: "foundation", totalMarks: 1, stem: "A game pays 5 with probability 0.2 and loses 1 with probability 0.8. Find the expected value.", response: { type: "mcq", choices: [ { id: "a", text: "0.2" }, { id: "b", text: "1" }, { id: "c", text: "0" }, { id: "d", text: "-0.2" } ], correctChoiceId: "a" }, markscheme: { principles: [{ kind: "formula", name: "Expected value", statement: "$E=5(0.2)+(-1)(0.8)=1-0.8=0.2$." }], steps: [{ reasoning: "Compute $1-0.8$.", working: "0.2", marks: 1, markCode: "B" }], finalAnswer: "$0.2$" } },
        { id: "mypms5-u3-exp-q6", difficulty: "foundation", totalMarks: 1, stem: "A regression line is $y=3x-2$. Predict $y$ when $x=4$.", response: { type: "numeric", parts: [{ label: "$y$", answer: 10 }] }, markscheme: { principles: [{ kind: "formula", name: "Regression", statement: "Substitute $x=4$." }], steps: [{ reasoning: "$y=3(4)-2=10$.", working: "10", marks: 1, markCode: "B" }], finalAnswer: "$10$" } },
        { id: "mypms5-u3-exp-q7", difficulty: "core", totalMarks: 1, stem: "For a fair game, the expected value is usually:", response: { type: "mcq", choices: [ { id: "a", text: "Positive" }, { id: "b", text: "Undefined" }, { id: "c", text: "Negative" }, { id: "d", text: "0" } ], correctChoiceId: "d" }, markscheme: { principles: [{ kind: "definition", name: "Fair game", statement: "Expected profit is zero over many plays." }], steps: [{ reasoning: "Fair games have $E=0$.", working: "0", marks: 1, markCode: "B" }], finalAnswer: "$0$" } },
        { id: "mypms5-u3-exp-q8", difficulty: "core", totalMarks: 2, stem: "Roll a die: win 10 if a 6 appears, lose 2 otherwise. Find the expected value.", response: { type: "numeric", parts: [{ label: "$E$", answer: 0 }] }, markscheme: { principles: [{ kind: "formula", name: "Expected value", statement: "$E=10(\\frac16)+(-2)(\\frac56)=0$." }], steps: [ { reasoning: "Compute $\\frac{10}{6}-\\frac{10}{6}$.", working: "0", marks: 1, markCode: "M" }, { reasoning: "State the expected value.", working: "0", marks: 1, markCode: "A" } ], finalAnswer: "$0$" } },
        { id: "mypms5-u3-exp-q9", difficulty: "core", totalMarks: 2, stem: "A regression line is fitted for data with $x$ from 5 to 15. Predicting at $x=20$ is called:", response: { type: "mcq", choices: [ { id: "a", text: "Interpolation" }, { id: "b", text: "Correlation" }, { id: "c", text: "Causation" }, { id: "d", text: "Extrapolation" } ], correctChoiceId: "d" }, markscheme: { principles: [{ kind: "definition", name: "Extrapolation", statement: "Prediction outside the data range." }], steps: [ { reasoning: "$20>15$, outside range.", working: "\\text{outside}", marks: 1, markCode: "M" }, { reasoning: "Name it extrapolation.", working: "\\text{extrapolation}", marks: 1, markCode: "A" } ], finalAnswer: "Extrapolation" } },
        { id: "mypms5-u3-exp-q10", difficulty: "core", totalMarks: 2, stem: "Given $P(A)=0.5$, $P(B)=0.4$, and $P(A\\cap B)=0.2$, find $P(A\\cup B)$.", response: { type: "numeric", parts: [{ label: "$P(A\\cup B)$", answer: 0.7 }] }, markscheme: { principles: [{ kind: "formula", name: "Addition rule", statement: "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$." }], steps: [ { reasoning: "Compute $0.5+0.4-0.2$.", working: "0.7", marks: 1, markCode: "M" }, { reasoning: "State the probability.", working: "0.7", marks: 1, markCode: "A" } ], finalAnswer: "$0.7$" } },
        { id: "mypms5-u3-exp-q11", difficulty: "challenge", totalMarks: 2, stem: "Given $P(B)=0.6$ and $P(A\\cap B)=0.3$, find $P(A|B)$.", response: { type: "numeric", parts: [{ label: "$P(A|B)$", answer: 0.5 }] }, markscheme: { principles: [{ kind: "formula", name: "Conditional probability", statement: "$P(A|B)=P(A\\cap B)/P(B)$." }], steps: [ { reasoning: "Compute $0.3/0.6$.", working: "0.5", marks: 1, markCode: "M" }, { reasoning: "State the probability.", working: "0.5", marks: 1, markCode: "A" } ], finalAnswer: "$0.5$" } },
        { id: "mypms5-u3-exp-q12", difficulty: "challenge", totalMarks: 2, stem: "Events A and B are independent when:", response: { type: "mcq", choices: [ { id: "a", text: "$P(A)=P(B)$" }, { id: "b", text: "$P(A\\cap B)=P(A)+P(B)$" }, { id: "c", text: "$P(A|B)=P(A\\cup B)$" }, { id: "d", text: "$P(A\\cap B)=P(A)P(B)$" } ], correctChoiceId: "d" }, markscheme: { principles: [{ kind: "definition", name: "Independence", statement: "Joint probability equals product of marginals." }], steps: [ { reasoning: "Recall independence condition.", working: "P(A\\cap B)=P(A)P(B)", marks: 1, markCode: "M" }, { reasoning: "State the condition.", working: "independent", marks: 1, markCode: "A" } ], finalAnswer: "$P(A\\cap B)=P(A)P(B)$" } },
        { id: "mypms5-u3-exp-q13", difficulty: "core", totalMarks: 5, stem: "Use expected value and regression.", parts: [ { label: "a", prompt: "Find $E$ for pay 10 with probability 0.1 and pay -2 with probability 0.9.", marks: 2 }, { label: "b", prompt: "Use $y=4x+1$ to predict $y$ at $x=3$.", marks: 1 }, { label: "c", prompt: "State whether $x=20$ is interpolation for data from 1 to 10.", marks: 2 } ], response: { type: "open" }, markscheme: { principles: [{ kind: "formula", name: "Expected value and regression", statement: "Use $\\sum xP(x)$ and substitution." }], steps: [ { part: "a", reasoning: "$E=10(0.1)+(-2)(0.9)=1-1.8=-0.8$.", working: "-0.8", marks: 1, markCode: "M" }, { part: "a", reasoning: "State the expected value.", working: "-0.8", marks: 1, markCode: "A" }, { part: "b", reasoning: "$y=4(3)+1=13$.", working: "13", marks: 1, markCode: "A" }, { part: "c", reasoning: "$20>10$ is outside range.", working: "\\text{outside}", marks: 1, markCode: "M" }, { part: "c", reasoning: "It is extrapolation.", working: "\\text{extrapolation}", marks: 1, markCode: "A" } ], finalAnswer: "(a) -0.8 (b) 13 (c) extrapolation" } },
        { id: "mypms5-u3-exp-q14", difficulty: "foundation", totalMarks: 1, stem: "In a regression line $y=mx+c$, what does $m$ represent?", response: { type: "mcq", choices: [ { id: "a", text: "The mean of $y$" }, { id: "b", text: "The y-intercept" }, { id: "c", text: "The correlation coefficient" }, { id: "d", text: "The slope (rate of change)" } ], correctChoiceId: "d" }, markscheme: { principles: [{ kind: "definition", name: "Slope", statement: "$m$ is the change in $y$ per unit change in $x$." }], steps: [{ reasoning: "Slope measures rate of change.", working: "\\text{slope}", marks: 1, markCode: "B" }], finalAnswer: "The slope" } },
        { id: "mypms5-u3-exp-q15", difficulty: "challenge", totalMarks: 2, stem: "A ticket costs 3. It wins 20 with probability 0.1 and 0 otherwise. Find the expected profit per ticket.", response: { type: "numeric", parts: [{ label: "profit", answer: -1 }] }, markscheme: { principles: [{ kind: "formula", name: "Expected profit", statement: "$E=20(0.1)-3=2-3=-1$." }], steps: [ { reasoning: "Expected winnings $=2$.", working: "2", marks: 1, markCode: "M" }, { reasoning: "Profit $=2-3=-1$.", working: "-1", marks: 1, markCode: "A" } ], finalAnswer: "$-1$" } },
        { id: "mypms5-u3-exp-q16", difficulty: "challenge", totalMarks: 3, stem: "Explain why a strong positive correlation does not prove causation, and why extrapolation is unreliable.", response: { type: "open" }, markscheme: { principles: [{ kind: "definition", name: "Correlation vs causation", statement: "Association is not proof of cause; outside-range predictions are unreliable." }], steps: [ { reasoning: "Other variables may explain the relationship.", working: "\\text{confounding}", marks: 1, markCode: "M" }, { reasoning: "Extrapolation assumes the trend continues unchanged.", working: "\\text{assumption}", marks: 1, markCode: "M" }, { reasoning: "State both cautions clearly.", working: "\\text{caution}", marks: 1, markCode: "A" } ], finalAnswer: "Correlation is not causation; extrapolation assumes trend continues" } },
      ],
    },
    {
      id: "mypms5-u3-trees",
      title: "Probability Trees and Multi-stage Events",
      skill: "Construct and interpret probability trees for sequential experiments, including with/without replacement.",
      lesson: {
        sections: [
          {
            heading: "Tree diagram rules",
            body: "Multiply probabilities **along** branches to get joint probabilities; add **across** branches for total probability of an outcome type. Ensure all branches from each node sum to 1.",
          },
          {
            heading: "With and without replacement",
            body: "**With replacement**: probabilities stay the same each stage. **Without replacement**: probabilities change (denominator decreases). For two balls from a bag of 5 (3 red, 2 blue): P(RR) with replacement $=\\frac{3}{5}\\times\\frac{3}{5}=\\frac{9}{25}$; without $=\\frac{3}{5}\\times\\frac{2}{4}=\\frac{3}{10}$.",
          },
          {
            heading: "Expected frequency",
            body: "Multiply probability by number of trials for expected frequency. Compare with observed frequency to assess whether results are unusual (e.g. outside expected ± 2 SD range).",
          },
        ],
        keyFormulas: [
          { name: "Along branches", statement: "Multiply" },
          { name: "Across outcomes", statement: "Add" },
          { name: "Without replacement", statement: "Denominator decreases by 1 each stage" },
        ],
        workedExample: {
          problem: "Bag: 4 red, 6 blue. Two drawn without replacement. Find P(both red).",
          solution: "$P(RR)=\\frac{4}{10}\\times\\frac{3}{9}=\\frac{12}{90}=\\frac{2}{15}$.",
        },
      },
      questions: [
        {
          id: "mypms5-u3-tree-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A coin is tossed twice. What is P(HT or TH)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{4}$" },
              { id: "b", text: "$\\frac{3}{4}$" },
              { id: "c", text: "$\\frac{1}{8}$" },
              { id: "d", text: "$\\frac{1}{2}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tree diagram", statement: "P(HT)+P(TH)=$\\frac{1}{4}+\\frac{1}{4}=\\frac{1}{2}$." },
            ],
            steps: [
              { reasoning: "$P(HT)=\\frac{1}{4}$, $P(TH)=\\frac{1}{4}$; sum $=\\frac{1}{2}$.", working: "\\frac{1}{2}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac{1}{2}$",
            commonErrors: ["Computing P(exactly one head) incorrectly."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypms5-u3-tree-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Bag has 5 red, 5 blue. Two drawn WITH replacement. Find P(both same colour).",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{4}$" },
              { id: "b", text: "$\\frac{1}{2}$" },
              { id: "c", text: "$\\frac{3}{5}$" },
              { id: "d", text: "$\\frac{2}{5}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "With replacement", statement: "P(RR)+P(BB)=$\\frac{5}{10}\\times\\frac{5}{10}+\\frac{5}{10}\\times\\frac{5}{10}=\\frac{25}{100}+\\frac{25}{100}=\\frac{1}{2}$." },
            ],
            steps: [
              { reasoning: "$P(RR)=\\frac{1}{4}$, $P(BB)=\\frac{1}{4}$; sum $=\\frac{1}{2}$.", working: "\\frac{1}{2}", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", working: "\\frac{1}{2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{2}$",
            commonErrors: ["Using without-replacement probabilities."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypms5-u3-tree-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A fair die is rolled twice. Find P(sum is 7).",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{12}$" },
              { id: "b", text: "$\\frac{1}{36}$" },
              { id: "c", text: "$\\frac{5}{36}$" },
              { id: "d", text: "$\\frac{1}{6}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Counting outcomes", statement: "Sum 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 outcomes out of 36." },
            ],
            steps: [
              { reasoning: "6 favourable outcomes / 36 total = $\\frac{6}{36}=\\frac{1}{6}$.", working: "\\frac{6}{36}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "\\frac{1}{6}", marks: 1, markCode: "M" },
              { reasoning: "State the probability.", working: "\\frac{1}{6}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{6}$",
            commonErrors: ["Counting (6,1) and (1,6) as one outcome."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypms5-u3-tree-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A bag has 3 red and 2 blue balls. Two balls are drawn without replacement.",
          parts: [
            { label: "a", prompt: "Draw a tree diagram for the two draws.", marks: 2 },
            { label: "b", prompt: "Find P(both red).", marks: 1 },
            { label: "c", prompt: "Find P(different colours).", marks: 2 },
            { label: "d", prompt: "Given the first ball is red, find P(second is blue).", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Without replacement", statement: "Probabilities change after first draw." },
            ],
            steps: [
              { part: "a", reasoning: "Tree: R(3/5)→R(2/4),R(3/4)→B(2/4); B(2/5)→R(3/4),B(1/4). All four terminal probabilities sum to 1.", working: "\\text{tree diagram}", marks: 1, markCode: "A" },
              { part: "a", reasoning: "All branches and probabilities correct.", working: "\\text{correct tree}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$P(RR)=\\frac{3}{5}\\times\\frac{2}{4}=\\frac{6}{20}=\\frac{3}{10}$.", working: "\\frac{3}{10}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$P(RB)+P(BR)=\\frac{3}{5}\\times\\frac{2}{4}+\\frac{2}{5}\\times\\frac{3}{4}=\\frac{6}{20}+\\frac{6}{20}=\\frac{12}{20}=\\frac{3}{5}$.", working: "\\frac{3}{5}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the probability.", working: "\\frac{3}{5}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Given first red, 4 balls remain (2R,2B); P(second blue) $=\\frac{2}{4}=\\frac{1}{2}$.", working: "\\frac{1}{2}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Apply conditional probability.", working: "\\frac{2}{4}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the probability.", working: "\\frac{1}{2}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) tree (b) $\\frac{3}{10}$ (c) $\\frac{3}{5}$ (d) $\\frac{1}{2}$",
            commonErrors: ["In (c), computing P(RB) only instead of RB+BR."],
            examinerNote: "A1 A1 for (a), A1 for (b), M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        { id: "mypms5-u3-tree-q5", difficulty: "foundation", totalMarks: 1, stem: "A fair coin is tossed twice. What is P(both heads)?", response: { type: "mcq", choices: [ { id: "a", text: "$\\frac18$" }, { id: "b", text: "$\\frac14$" }, { id: "c", text: "$\\frac34$" }, { id: "d", text: "$\\frac12$" } ], correctChoiceId: "b" }, markscheme: { principles: [{ kind: "principle", name: "Tree diagram", statement: "$P(HH)=\\frac12\\times\\frac12=\\frac14$." }], steps: [{ reasoning: "Multiply along branches.", working: "\\frac14", marks: 1, markCode: "B" }], finalAnswer: "$\\frac14$" } },
        { id: "mypms5-u3-tree-q6", difficulty: "foundation", totalMarks: 1, stem: "Two fair coins are tossed. Find P(at least one head).", response: { type: "numeric", parts: [{ label: "P", answer: 0.75 }] }, markscheme: { principles: [{ kind: "principle", name: "Complement", statement: "P(at least one head) $=1-P(TT)=1-\\frac14=\\frac34$." }], steps: [{ reasoning: "$1-0.25=0.75$.", working: "0.75", marks: 1, markCode: "B" }], finalAnswer: "$0.75$" } },
        { id: "mypms5-u3-tree-q7", difficulty: "core", totalMarks: 1, stem: "A bag has 2 red and 2 blue balls. Two are drawn WITH replacement. Find P(both red).", response: { type: "mcq", choices: [ { id: "a", text: "$\\frac12$" }, { id: "b", text: "$\\frac14$" }, { id: "c", text: "$\\frac{3}{16}$" }, { id: "d", text: "$\\frac38$" } ], correctChoiceId: "b" }, markscheme: { principles: [{ kind: "formula", name: "With replacement", statement: "$P(RR)=\\frac24\\times\\frac24=\\frac14$." }], steps: [{ reasoning: "Probabilities stay the same.", working: "\\frac14", marks: 1, markCode: "B" }], finalAnswer: "$\\frac14$" } },
        { id: "mypms5-u3-tree-q8", difficulty: "core", totalMarks: 2, stem: "A bag has 4 red and 6 blue balls. Two are drawn WITHOUT replacement. Find P(both red).", response: { type: "numeric", parts: [{ label: "P(RR)", answer: 0.1333, tolerance: 0.001 }] }, markscheme: { principles: [{ kind: "formula", name: "Without replacement", statement: "$P(RR)=\\frac{4}{10}\\times\\frac{3}{9}=\\frac{2}{15}\\approx0.1333$." }], steps: [ { reasoning: "Multiply along branches.", working: "\\frac{4}{10}\\times\\frac{3}{9}", marks: 1, markCode: "M" }, { reasoning: "State the decimal.", working: "0.1333", marks: 1, markCode: "A" } ], finalAnswer: "$\\approx0.1333$" } },
        { id: "mypms5-u3-tree-q9", difficulty: "core", totalMarks: 2, stem: "In a probability tree, the probabilities on all branches leaving one node should:", response: { type: "mcq", choices: [ { id: "a", text: "Be greater than 1" }, { id: "b", text: "Sum to 0" }, { id: "c", text: "Be equal" }, { id: "d", text: "Sum to 1" } ], correctChoiceId: "d" }, markscheme: { principles: [{ kind: "principle", name: "Tree rule", statement: "Branches from a node are exhaustive outcomes." }], steps: [ { reasoning: "All possible next outcomes are covered.", working: "\\text{exhaustive}", marks: 1, markCode: "M" }, { reasoning: "Their probabilities sum to 1.", working: "1", marks: 1, markCode: "A" } ], finalAnswer: "Sum to 1" } },
        { id: "mypms5-u3-tree-q10", difficulty: "foundation", totalMarks: 1, stem: "A fair die is rolled once. Find P(even).", response: { type: "numeric", parts: [{ label: "P(even)", answer: 0.5 }] }, markscheme: { principles: [{ kind: "definition", name: "Probability", statement: "3 even outcomes out of 6." }], steps: [{ reasoning: "$3/6=0.5$.", working: "0.5", marks: 1, markCode: "B" }], finalAnswer: "$0.5$" } },
        { id: "mypms5-u3-tree-q11", difficulty: "challenge", totalMarks: 2, stem: "From 3 red and 2 blue balls, two are drawn WITHOUT replacement. Find P(at least one blue).", response: { type: "numeric", parts: [{ label: "P", answer: 0.7 }] }, markscheme: { principles: [{ kind: "formula", name: "Complement", statement: "P(at least one blue) $=1-P(RR)=1-\\frac{3}{10}=0.7$." }], steps: [ { reasoning: "Compute $1-0.3$.", working: "0.7", marks: 1, markCode: "M" }, { reasoning: "State the probability.", working: "0.7", marks: 1, markCode: "A" } ], finalAnswer: "$0.7$" } },
        { id: "mypms5-u3-tree-q12", difficulty: "challenge", totalMarks: 2, stem: "An event has probability 0.3. In 200 trials, what is the expected frequency?", response: { type: "numeric", parts: [{ label: "expected", answer: 60 }] }, markscheme: { principles: [{ kind: "formula", name: "Expected frequency", statement: "$0.3\\times200=60$." }], steps: [ { reasoning: "Multiply probability by trials.", working: "0.3\\times200", marks: 1, markCode: "M" }, { reasoning: "Expected frequency is 60.", working: "60", marks: 1, markCode: "A" } ], finalAnswer: "60" } },
        { id: "mypms5-u3-tree-q13", difficulty: "core", totalMarks: 5, stem: "Analyse multi-stage probability.", parts: [ { label: "a", prompt: "For two coin tosses, find P(exactly one head).", marks: 2 }, { label: "b", prompt: "For two fair dice, find P(sum is 4).", marks: 2 }, { label: "c", prompt: "State the rule for combining probabilities along branches.", marks: 1 } ], response: { type: "open" }, markscheme: { principles: [{ kind: "principle", name: "Tree diagrams", statement: "Multiply along branches and add across outcomes." }], steps: [ { part: "a", reasoning: "$P(HT)+P(TH)=\\frac14+\\frac14=\\frac12$.", working: "\\frac12", marks: 1, markCode: "M" }, { part: "a", reasoning: "State the probability.", working: "0.5", marks: 1, markCode: "A" }, { part: "b", reasoning: "Sum 4 outcomes: (1,3),(2,2),(3,1); $P=\\frac{3}{36}=\\frac1{12}$.", working: "\\frac1{12}", marks: 1, markCode: "M" }, { part: "b", reasoning: "State the probability.", working: "0.0833", marks: 1, markCode: "A" }, { part: "c", reasoning: "Multiply probabilities along branches.", working: "\\text{multiply}", marks: 1, markCode: "A" } ], finalAnswer: "(a) 0.5 (b) $\\frac1{12}$ (c) multiply along branches" } },
        { id: "mypms5-u3-tree-q14", difficulty: "foundation", totalMarks: 1, stem: "Two fair coins are tossed. Find P(two heads).", response: { type: "numeric", parts: [{ label: "P(HH)", answer: 0.25 }] }, markscheme: { principles: [{ kind: "principle", name: "Tree diagram", statement: "$\\frac12\\times\\frac12=0.25$." }], steps: [{ reasoning: "Multiply the branch probabilities.", working: "0.25", marks: 1, markCode: "B" }], finalAnswer: "$0.25$" } },
        { id: "mypms5-u3-tree-q15", difficulty: "challenge", totalMarks: 2, stem: "From 3 red and 2 blue balls, two are drawn without replacement. Given the first is red, find P(second is blue).", response: { type: "numeric", parts: [{ label: "P", answer: 0.5 }] }, markscheme: { principles: [{ kind: "formula", name: "Conditional probability", statement: "After one red, 2 blue remain out of 4." }], steps: [ { reasoning: "Remaining balls: 2 red, 2 blue.", working: "2/4", marks: 1, markCode: "M" }, { reasoning: "Probability is 0.5.", working: "0.5", marks: 1, markCode: "A" } ], finalAnswer: "$0.5$" } },
        { id: "mypms5-u3-tree-q16", difficulty: "challenge", totalMarks: 3, stem: "Explain the difference between drawing with replacement and without replacement in a probability tree.", response: { type: "open" }, markscheme: { principles: [{ kind: "principle", name: "Replacement", statement: "With replacement keeps probabilities constant; without changes them." }], steps: [ { reasoning: "With replacement: same total each stage.", working: "\\text{constant}", marks: 1, markCode: "M" }, { reasoning: "Without replacement: total decreases by one each draw.", working: "\\text{decreases}", marks: 1, markCode: "M" }, { reasoning: "State the practical difference.", working: "\\text{difference}", marks: 1, markCode: "A" } ], finalAnswer: "With replacement probabilities stay constant; without they change" } },
      ],
    },
  ],
};
