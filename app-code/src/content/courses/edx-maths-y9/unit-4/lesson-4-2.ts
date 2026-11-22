import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edm9-u4-lesson-4-2",
  code: "4-2",
  title: "Combined Probability",
  goal: "I CAN use tree diagrams, Venn diagrams and two-way tables to find the probabilities of combined events.",
  standards: ["Y9 Statistics and Probability"],
  vocabulary: [
    { term: "Independent events", definition: "Events where the outcome of one does not affect the probability of the other." },
    { term: "Tree diagram", definition: "A diagram whose branches show the possible outcomes of successive events, with probabilities written on the branches." },
    { term: "Outcome", definition: "One possible result of an experiment or combination of events." },
    { term: "Venn diagram", definition: "A diagram using overlapping circles to show how items are shared between sets." },
    { term: "Intersection", definition: "The items that belong to both sets, shown where the circles overlap." },
    { term: "Two-way table", definition: "A table that classifies data by two features, with rows for one feature and columns for the other." },
  ],
  concepts: [
    {
      id: "edm9-u4-tree-diagrams",
      title: "Tree diagrams for independent events",
      skill: "Draw and use tree diagrams to find probabilities of combined independent events.",
      lesson: {
        sections: [
          {
            heading: "Building a tree diagram",
            body: "Draw one set of branches for each event. Write the probability on each branch; the probabilities on branches from the same point must add up to 1. For independent events, the second set of branches has the same probabilities whichever branch you followed first.",
          },
          {
            heading: "Multiply along, add down",
            body: "To find the probability of a particular combined outcome, **multiply** the probabilities along its branches: $P(A\\text{ and }B)=P(A)\\times P(B)$. If an event can happen in more than one way, find each path and **add** the results.",
          },
          {
            heading: "Useful shortcuts",
            body: "For 'at least one', use $P(\\text{at least one})=1-P(\\text{none})$. Check your work: the probabilities of all the final outcomes must add up to 1. For expected numbers, multiply the probability by the number of trials.",
          },
        ],
        keyFormulas: [
          { name: "Independent events", statement: "$P(A\\text{ and }B)=P(A)\\times P(B)$" },
          { name: "Complement", statement: "$P(\\text{not }A)=1-P(A)$" },
        ],
        workedExample: {
          problem: "The probability it rains on any day is 0.3, independently each day. Work out the probability it rains on both of two days.",
          solution: "Multiply along the branches: $0.3\\times0.3=0.09$.",
        },
      },
      questions: [
        {
          id: "edm9-u4-tree-diagrams-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The probability that it rains on Saturday is 0.3. The probability that it rains on Sunday is also 0.3. The two days are independent. What is the probability that it rains on both days?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0.49" },
              { id: "b", text: "0.6" },
              { id: "c", text: "0.3" },
              { id: "d", text: "0.09" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Multiplication rule", statement: "For independent events, $P(A\\text{ and }B)=P(A)\\times P(B)$." },
            ],
            steps: [
              { reasoning: "Multiply the probabilities along the branches.", working: "0.3\\times0.3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.09", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 0.09",
            commonErrors: ["Adding the probabilities to get 0.6.", "Giving 0.3 as if only one event mattered.", "Calculating $0.7\\times0.7=0.49$ (rain on neither day)."],
          },
        },
        {
          id: "edm9-u4-tree-diagrams-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "The probability that a bus is late is 0.2 on any day. The buses on two days are independent. Work out the probability that the bus is late on exactly one of the two days.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.32 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Multiplication rule", statement: "For independent events, $P(A\\text{ and }B)=P(A)\\times P(B)$." },
              { kind: "law", name: "Addition rule", statement: "For mutually exclusive outcomes, add the probabilities." },
            ],
            steps: [
              { reasoning: "Late then on time, and on time then late, are two separate paths.", working: "0.2\\times0.8=0.16\\quad\\text{and}\\quad0.8\\times0.2=0.16", marks: 1, markCode: "M" },
              { reasoning: "Add the two path probabilities.", working: "0.16+0.16", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.32", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.32",
            commonErrors: ["Finding only one of the two paths and giving 0.16.", "Calculating $0.2\\times0.2=0.04$ (late both days)."],
          },
        },
        {
          id: "edm9-u4-tree-diagrams-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Jo takes two shots at a target. Each shot is independent and the probability that Jo hits the target is 0.7. Work out the probability that Jo hits the target at least once.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.91 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Complement", statement: "$P(\\text{at least one})=1-P(\\text{none})$." },
              { kind: "law", name: "Multiplication rule", statement: "For independent events, $P(A\\text{ and }B)=P(A)\\times P(B)$." },
            ],
            steps: [
              { reasoning: "The probability of missing a shot is $1-0.7$.", working: "P(\\text{miss})=0.3", marks: 1, markCode: "B" },
              { reasoning: "Multiply for missing both shots.", working: "0.3\\times0.3=0.09", marks: 1, markCode: "M" },
              { reasoning: "Subtract from 1 to find the probability of at least one hit.", working: "1-0.09", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.91", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.91",
            commonErrors: ["Giving $0.7\\times0.7=0.49$ (both hit).", "Adding 0.7 + 0.7 to get 1.4, which is impossible."],
            examinerNote: "Full marks for the alternative: $0.49+0.21+0.21=0.91$.",
          },
        },
        {
          id: "edm9-u4-tree-diagrams-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Mia travels to school by train and then by bus. The probability that the train is on time is 0.75. The probability that the bus is on time is 0.9. The two journeys are independent.",
          parts: [
            { label: "a", prompt: "Write down the probability that the train is late and the probability that the bus is late.", marks: 1 },
            { label: "b", prompt: "Work out the probability that both the train and the bus are on time.", marks: 2 },
            { label: "c", prompt: "Work out the probability that exactly one of the train and the bus is on time.", marks: 3 },
            { label: "d", prompt: "Work out the probability that at least one of them is late.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) P(train late)", answer: 0.25 },
              { label: "(a) P(bus late)", answer: 0.1 },
              { label: "(b) both on time", answer: 0.675 },
              { label: "(c) exactly one on time", answer: 0.3 },
              { label: "(d) at least one late", answer: 0.325 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Complement", statement: "$P(\\text{not }A)=1-P(A)$." },
              { kind: "law", name: "Multiplication rule", statement: "For independent events, $P(A\\text{ and }B)=P(A)\\times P(B)$." },
              { kind: "law", name: "Addition rule", statement: "Probabilities of mutually exclusive outcomes are added." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract each probability from 1.", working: "1-0.75=0.25,\\quad1-0.9=0.1", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Multiply along the branches for on time and on time.", working: "0.75\\times0.9", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "0.675", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Train on time and bus late.", working: "0.75\\times0.1=0.075", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Train late and bus on time.", working: "0.25\\times0.9=0.225", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Add the two paths.", working: "0.075+0.225=0.3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "'At least one late' is the complement of 'both on time'.", working: "1-0.675", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "0.325", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.25 and 0.1. (b) 0.675. (c) 0.3. (d) 0.325.",
            commonErrors: ["In (c), including the both on time path.", "In (d), calculating $0.25\\times0.1=0.025$ (both late) only."],
            examinerNote: "(d) ft from (b). Check: all four outcomes 0.675 + 0.075 + 0.225 + 0.025 = 1.",
          },
        },
      ],
    },
    {
      id: "edm9-u4-venn-two-way",
      title: "Venn diagrams and two-way tables",
      skill: "Use Venn diagrams and two-way tables to organise data and find probabilities.",
      lesson: {
        sections: [
          {
            heading: "Venn diagrams",
            body: "In a Venn diagram with two sets A and B, the overlap is the number in both, written $A\\cap B$. If you are given the totals for A and B, the number in both is found from $|A|+|B|-|A\\cup B|$, where $|A\\cup B|$ is the number in at least one set. Fill in the overlap first, then the 'only' regions, and finally the number in neither (outside the circles).",
          },
          {
            heading: "Two-way tables",
            body: "A two-way table classifies the same people by two features. Row totals, column totals and the grand total must be consistent: fill in each missing value using a row or column total. Check that the grand total is the same whether you add the row totals or column totals.",
          },
          {
            heading: "Finding probabilities",
            body: "A probability is $\\frac{\\text{number of favourable outcomes}}{\\text{total number of outcomes}}$. Use the grand total (for the whole group) as the denominator. For 'exactly one' add the two 'only' regions; for 'either or both' use the whole union. For expected numbers, multiply the probability by the size of the larger group.",
          },
        ],
        keyFormulas: [
          { name: "Union of two sets", statement: "$|A\\cup B|=|A|+|B|-|A\\cap B|$" },
          { name: "Probability", statement: "$P=\\dfrac{\\text{favourable}}{\\text{total}}$" },
        ],
        workedExample: {
          problem: "Of 20 students, 12 play tennis, 9 play squash and 4 play both. How many play neither?",
          solution: "At least one: $12+9-4=17$. Neither: $20-17=3$.",
        },
      },
      questions: [
        {
          id: "edm9-u4-venn-two-way-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "There are 20 students in a class. 12 play tennis, 9 play squash and 4 play both tennis and squash. How many students play neither sport?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3" },
              { id: "b", text: "5" },
              { id: "c", text: "7" },
              { id: "d", text: "-1" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Union of two sets", statement: "$|A\\cup B|=|A|+|B|-|A\\cap B|$." },
            ],
            steps: [
              { reasoning: "Find the number who play at least one sport, subtracting the overlap once so it is not counted twice.", working: "12+9-4=17", marks: 1, markCode: "M" },
              { reasoning: "Subtract from the total.", working: "20-17=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 3",
            commonErrors: ["Not subtracting the overlap: $20-(12+9)=-1$.", "Using 12 - 4 and 9 - 4 only."],
          },
        },
        {
          id: "edm9-u4-venn-two-way-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "50 people are asked about glasses. 28 of the people are female. 20 of the people wear glasses. 12 of the females wear glasses.\n\nWork out the number of males who do not wear glasses.",
          response: { type: "numeric", parts: [{ label: "Males without glasses", answer: 14 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Two-way table", statement: "Row and column totals are consistent with the grand total." },
            ],
            steps: [
              { reasoning: "The number of males is the total minus the females.", working: "50-28=22", marks: 1, markCode: "B" },
              { reasoning: "Males with glasses = all with glasses minus females with glasses.", working: "20-12=8", marks: 1, markCode: "M" },
              { reasoning: "Males without glasses = males minus males with glasses.", working: "22-8=14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "14",
            commonErrors: ["Giving 8 (males who wear glasses).", "Subtracting 12 from 28 to give 16 (females without glasses)."],
          },
        },
        {
          id: "edm9-u4-venn-two-way-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "40 students were asked about the languages they study. 22 study French, 18 study Spanish and 7 study both. A student is chosen at random.\n\nWork out (i) the probability that the student studies French only, and (ii) the probability that the student studies neither language. Give each as a decimal.",
          response: {
            type: "numeric",
            parts: [
              { label: "(i) French only", answer: 0.375 },
              { label: "(ii) neither", answer: 0.175 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Union of two sets", statement: "$|A\\cup B|=|A|+|B|-|A\\cap B|$." },
              { kind: "formula", name: "Probability", statement: "$P=\\frac{\\text{favourable}}{\\text{total}}$." },
            ],
            steps: [
              { reasoning: "French only = French minus both.", working: "22-7=15", marks: 1, markCode: "M" },
              { reasoning: "Divide by 40.", working: "\\frac{15}{40}=0.375", marks: 1, markCode: "A" },
              { reasoning: "At least one language: $15+7+11=33$ (Spanish only is $18-7=11$). Neither is the remainder.", working: "40-33=7", marks: 1, markCode: "M" },
              { reasoning: "Divide by 40.", working: "\\frac{7}{40}=0.175", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(i) 0.375 (ii) 0.175",
            commonErrors: ["Using 22 as French only (ignoring the overlap).", "Saying neither is $40-22-18=0$."],
          },
        },
        {
          id: "edm9-u4-venn-two-way-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "60 students were asked whether they swim and whether they cycle. 35 students swim, 28 students cycle and 12 students do neither.",
          parts: [
            { label: "a", prompt: "Work out how many students do both swimming and cycling.", marks: 3 },
            { label: "b", prompt: "Work out how many students swim but do not cycle.", marks: 1 },
            { label: "c", prompt: "A student is chosen at random. Work out the probability that the student does exactly one of the two activities. Give your answer as a decimal.", marks: 3 },
            { label: "d", prompt: "The school has 480 students. Assuming the 60 students are representative, estimate how many students in the school do neither activity.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) do both", answer: 15 },
              { label: "(b) swim only", answer: 20 },
              { label: "(c) probability exactly one", answer: 0.55 },
              { label: "(d) estimate for the school", answer: 96 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Union of two sets", statement: "$|A\\cup B|=|A|+|B|-|A\\cap B|$." },
              { kind: "formula", name: "Probability", statement: "$P=\\frac{\\text{favourable}}{\\text{total}}$." },
              { kind: "principle", name: "Expected number", statement: "Expected number = probability × number of trials." },
            ],
            steps: [
              { part: "a", reasoning: "Students doing at least one activity = total minus neither.", working: "60-12=48", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Swimmers plus cyclists counts the overlap twice, so the overlap is the excess over 48.", working: "35+28-48", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "15", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Swimmers minus those who do both.", working: "35-15=20", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Cycle only = cyclists minus both.", working: "28-15=13", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Exactly one activity = swim only plus cycle only. Divide by 60.", working: "\\frac{20+13}{60}=\\frac{33}{60}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate as a decimal.", working: "0.55", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Probability of doing neither.", working: "\\frac{12}{60}=0.2", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Multiply by the number of students in the school.", working: "0.2\\times480", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "96", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 15. (b) 20. (c) 0.55. (d) 96 students.",
            commonErrors: ["In (a), calculating $35+28=63$ and subtracting 12 incorrectly.", "In (c), including the 15 who do both.", "In (d), using 12 instead of 12/60."],
            examinerNote: "Check: 20 + 15 + 13 + 12 = 60.",
          },
        },
      ],
    },
  ],
};
