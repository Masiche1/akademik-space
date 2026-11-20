import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edm10-u4-lesson-4-2",
  code: "4-2",
  title: "Probability",
  goal: "I CAN use tree diagrams for combined events and work out probabilities when items are selected without replacement.",
  standards: ["4MA1 8.5", "4MA1 8.6", "4MA1 8.7H"],
  vocabulary: [
    { term: "Independent events", definition: "Events where the outcome of one does not change the probability of the other." },
    { term: "Mutually exclusive", definition: "Events that cannot happen at the same time, so $P(A\\text{ or }B)=P(A)+P(B)$." },
    { term: "Tree diagram", definition: "A diagram whose branches show the outcomes and probabilities of successive events." },
    { term: "Conditional probability", definition: "The probability of an event given that another event has already happened." },
    { term: "Without replacement", definition: "Items are not put back after being chosen, so the probabilities change for the next choice." },
    { term: "Complement", definition: "The event that $A$ does not happen, with probability $1-P(A)$." },
  ],
  concepts: [
    {
      id: "edm10-u4-tree-diagrams",
      title: "Combined events and tree diagrams",
      skill: "Use the multiplication and addition rules with tree diagrams for independent events.",
      lesson: {
        sections: [
          {
            heading: "Multiply along, add down",
            body: "For independent events, $P(A\\text{ and }B)=P(A)\\times P(B)$. On a tree diagram, multiply the probabilities along the branches to get the probability of one outcome. Add the probabilities of the different outcomes that give the event you want. The probabilities on the branches from each point must add up to 1.",
          },
          {
            heading: "Using the complement",
            body: "'At least one' problems are usually quicker as $1-P(\\text{none})$. For example, $P(\\text{at least one head in 3 tosses})=1-\\left(\\frac12\\right)^3$.",
          },
          {
            heading: "Presenting answers",
            body: "Show the probability for each branch, list the outcomes you need, and write the calculation. Give answers as fractions, decimals or percentages, with decimals to 3 significant figures unless told otherwise.",
          },
        ],
        keyFormulas: [
          { name: "Independent events", statement: "$P(A\\text{ and }B)=P(A)\\times P(B)$" },
          { name: "Mutually exclusive events", statement: "$P(A\\text{ or }B)=P(A)+P(B)$" },
          { name: "Complement", statement: "$P(\\text{not }A)=1-P(A)$" },
        ],
        workedExample: {
          problem: "The probability that it rains on a day is $0.3$. Work out the probability it rains on both of two days, independently.",
          solution: "$0.3\\times0.3=0.09$.",
        },
      },
      questions: [
        {
          id: "edm10-u4-tree-diagrams-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "A fair coin is thrown twice. What is the probability of getting two heads?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac12$" },
              { id: "b", text: "$\\frac14$" },
              { id: "c", text: "$\\frac13$" },
              { id: "d", text: "$\\frac18$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Multiplication rule", statement: "For independent events, $P(A\\text{ and }B)=P(A)\\times P(B)$." }],
            steps: [
              { reasoning: "The throws are independent.", working: "\\frac12\\times\\frac12", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\frac14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\frac14$",
            commonErrors: ["Adding the probabilities to get 1.", "Thinking there are three outcomes."],
          },
        },
        {
          id: "edm10-u4-tree-diagrams-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "The probability that Tom is late for school on any day is $0.1$, independently of other days. Work out the probability that he is late on exactly one of two days.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.18, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Multiplication rule", statement: "Multiply along the branches of a tree." },
              { kind: "law", name: "Addition rule", statement: "Add the probabilities of mutually exclusive outcomes." },
            ],
            steps: [
              { reasoning: "Late then not late: $0.1\\times0.9$. Not late then late: $0.9\\times0.1$.", working: "0.1\\times0.9=0.09", marks: 1, markCode: "M" },
              { reasoning: "Add the two outcomes.", working: "0.09+0.09", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.18$",
            commonErrors: ["Only counting one order, giving 0.09.", "Adding 0.1 and 0.9 along a branch."],
          },
        },
        {
          id: "edm10-u4-tree-diagrams-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "A biased spinner lands on red with probability $\\frac25$, otherwise on blue. It is spun three times.\n\nWork out the probability that it lands on red at least once. Give your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.784, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Complement", statement: "$P(\\text{at least one})=1-P(\\text{none})$." }],
            steps: [
              { reasoning: "$P(\\text{blue})=1-\\frac25=\\frac35$.", working: "\\frac35", marks: 1, markCode: "B" },
              { reasoning: "All three blue, spins independent.", working: "\\left(\\frac35\\right)^3=\\frac{27}{125}", marks: 1, markCode: "M" },
              { reasoning: "Subtract from 1.", working: "1-\\frac{27}{125}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\frac{98}{125}=0.784", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.784$",
            commonErrors: ["Computing $3\\times\\frac25$.", "Using $\\left(\\frac25\\right)^3$ only."],
          },
        },
        {
          id: "edm10-u4-tree-diagrams-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "Amy plays a game on two days. On each day, independently, the probability that she wins is $0.6$ if the weather is dry and $0.4$ if it is wet. The probability that a day is dry is $0.7$, and weather on the two days is independent.\n\nGive answers as decimals to 3 significant figures where needed.",
          parts: [
            { label: "a", prompt: "Work out the probability that Amy wins on a day.", marks: 3 },
            { label: "b", prompt: "Work out the probability that Amy wins on both days.", marks: 2 },
            { label: "c", prompt: "Work out the probability that Amy wins on exactly one of the two days.", marks: 2 },
            { label: "d", prompt: "Work out the probability that Amy wins on at least one of the two days.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) P(win on a day)", answer: 0.54, tolerance: 0.001 },
              { label: "(b) P(win both days)", answer: 0.2916, tolerance: 0.001 },
              { label: "(c) P(exactly one win)", answer: 0.4968, tolerance: 0.001 },
              { label: "(d) P(at least one win)", answer: 0.7884, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Tree diagram rules", statement: "Multiply along branches, add between outcomes." },
              { kind: "law", name: "Complement", statement: "$P(\\text{at least one})=1-P(\\text{none})$." },
            ],
            steps: [
              { part: "a", reasoning: "Dry and win: $0.7\\times0.6=0.42$.", working: "0.7\\times0.6", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Wet and win: $0.3\\times0.4=0.12$.", working: "0.3\\times0.4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Add.", working: "0.42+0.12=0.54", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Independent days, so square the probability.", working: "0.54\\times0.54", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "0.2916", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Win-lose or lose-win, with $P(\\text{lose})=0.46$.", working: "2\\times0.54\\times0.46", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "0.4968", marks: 1, markCode: "A" },
              { part: "d", reasoning: "One minus the probability of losing both days.", working: "1-0.46^2=1-0.2116", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "0.7884", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.54$ (b) $0.2916$ (c) $0.4968$ (d) $0.7884$",
            commonErrors: ["Using only the dry-weather win probability.", "Counting only one order in part (c)."],
            examinerNote: "Check: (b) + (c) = 0.7884, equal to (d). Accept 0.292, 0.497, 0.788.",
          },
        },
      ],
    },
    {
      id: "edm10-u4-conditional",
      title: "Conditional probability and selection without replacement",
      skill: "Use changing probabilities on tree diagrams and calculate conditional probabilities.",
      lesson: {
        sections: [
          {
            heading: "Without replacement",
            body: "When items are not replaced, the second probability depends on the first choice. If a bag has 5 red and 3 blue counters, then after taking a red the bag has 7 counters, 4 of which are red. The denominators decrease by 1 on the second set of branches.",
          },
          {
            heading: "Conditional probability",
            body: "$P(B\\mid A)=\\frac{P(A\\text{ and }B)}{P(A)}$. In a tree diagram, find the probabilities of the relevant complete outcomes and divide the one you want by the total of those that satisfy the condition. 'Given that' signals a conditional question.",
          },
          {
            heading: "Checking",
            body: "The probabilities of all outcomes of a tree must total 1. Use this to check your fractions before answering the question.",
          },
        ],
        keyFormulas: [
          { name: "Conditional probability", statement: "$P(B\\mid A)=\\frac{P(A\\cap B)}{P(A)}$" },
          { name: "Without replacement", statement: "Second-stage denominators reduce by 1" },
        ],
        workedExample: {
          problem: "A bag has 5 red and 3 blue counters. Two counters are taken without replacement. Work out $P(\\text{both red})$.",
          solution: "$\\frac58\\times\\frac47=\\frac{20}{56}=\\frac{5}{14}$.",
        },
      },
      questions: [
        {
          id: "edm10-u4-conditional-q1",
          difficulty: "foundation",
          tier: "higher",
          totalMarks: 2,
          stem: "A bag contains 4 red and 6 blue counters. One counter is taken at random and not replaced. A second counter is taken. What is the probability that both are red?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{4}{25}$" },
              { id: "b", text: "$\\frac{2}{15}$" },
              { id: "c", text: "$\\frac{4}{10}$" },
              { id: "d", text: "$\\frac{1}{5}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "law", name: "Without replacement", statement: "After one red is removed there are 3 red among 9 counters." }],
            steps: [
              { reasoning: "Multiply the probabilities of the two draws.", working: "\\frac{4}{10}\\times\\frac{3}{9}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $\\frac{12}{90}$.", working: "\\frac{2}{15}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\frac{2}{15}$",
            commonErrors: ["Using $\\frac4{10}\\times\\frac4{10}=\\frac{4}{25}$, treating the draws as with replacement."],
          },
        },
        {
          id: "edm10-u4-conditional-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "A box contains 6 yellow and 4 green sweets. Two sweets are taken at random without replacement. Work out the probability that the sweets are different colours. Give your answer as a decimal correct to 3 significant figures.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.5333, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "law", name: "Tree diagram rules", statement: "Multiply along branches, add the outcomes." }],
            steps: [
              { reasoning: "Yellow then green and green then yellow.", working: "\\frac{6}{10}\\times\\frac49+\\frac4{10}\\times\\frac69", marks: 2, markCode: "M" },
              { reasoning: "Evaluate: $\\frac{24}{90}+\\frac{24}{90}=\\frac{48}{90}=\\frac{8}{15}$.", working: "\\frac{8}{15}=0.533", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{8}{15}$ (0.533)",
            commonErrors: ["Only one order, giving $\\frac{4}{15}$.", "Using denominator 10 in the second draw."],
            examinerNote: "Enter the decimal 0.5333 or 0.533 in the numeric answer.",
          },
        },
        {
          id: "edm10-u4-conditional-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "A bag contains 5 red and 3 blue counters. Two counters are taken at random without replacement.\n\nGiven that at least one of the counters is red, work out the probability that both are red. Give your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.4, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Conditional probability", statement: "$P(B\\mid A)=\\frac{P(A\\cap B)}{P(A)}$." }],
            steps: [
              { reasoning: "Both red: $\\frac58\\times\\frac47=\\frac{20}{56}$.", working: "\\frac{20}{56}", marks: 1, markCode: "B" },
              { reasoning: "Both blue: $\\frac38\\times\\frac27=\\frac{6}{56}$, so at least one red is $1-\\frac{6}{56}=\\frac{50}{56}$.", working: "\\frac{50}{56}", marks: 1, markCode: "M" },
              { reasoning: "Divide.", working: "\\frac{20/56}{50/56}=\\frac{20}{50}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.4$",
            commonErrors: ["Giving the unconditional $\\frac{5}{14}$."],
            examinerNote: "Accept 2/5 oe. Award M1 for a ratio of two probabilities with the correct denominator 50/56 oe.",
          },
        },
        {
          id: "edm10-u4-conditional-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 9,
          stem: "A drawer contains 5 black socks and 4 white socks. Two socks are taken at random without replacement.",
          parts: [
            { label: "a", prompt: "Work out the probability that both socks are black.", marks: 2 },
            { label: "b", prompt: "Work out the probability that the two socks are the same colour.", marks: 3 },
            { label: "c", prompt: "Given that the two socks are the same colour, work out the probability that they are both black.", marks: 2 },
            { label: "d", prompt: "A third sock is now taken without replacement. Work out the probability that all three socks are black.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) P(both black)", answer: 0.2778, tolerance: 0.001 },
              { label: "(b) P(same colour)", answer: 0.4444, tolerance: 0.001 },
              { label: "(c) P(both black | same)", answer: 0.625, tolerance: 0.001 },
              { label: "(d) P(three black)", answer: 0.119, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Without replacement", statement: "Denominators reduce by 1 for each sock removed." },
              { kind: "formula", name: "Conditional probability", statement: "$P(B\\mid A)=\\frac{P(A\\cap B)}{P(A)}$." },
            ],
            steps: [
              { part: "a", reasoning: "Black then black.", working: "\\frac59\\times\\frac48", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate: $\\frac{20}{72}$.", working: "\\frac{5}{18}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Both white: $\\frac49\\times\\frac38=\\frac{12}{72}$.", working: "\\frac{12}{72}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Add to the both-black probability.", working: "\\frac{20}{72}+\\frac{12}{72}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "\\frac{32}{72}=\\frac49", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Divide both black by same colour.", working: "\\frac{20/72}{32/72}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "\\frac{20}{32}=\\frac58", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Three black without replacement.", working: "\\frac59\\times\\frac48\\times\\frac37", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate: $\\frac{60}{504}$.", working: "\\frac{5}{42}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{5}{18}$ (b) $\\frac49$ (c) $\\frac58$ (d) $\\frac5{42}$",
            commonErrors: ["Treating the draws as with replacement.", "Not dividing by the probability of the condition in (c)."],
          },
        },
      ],
    },
  ],
};
