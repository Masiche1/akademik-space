import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edm8-u4-lesson-4-3",
  code: "4-3",
  title: "Probability",
  goal: "I CAN use the probability scale, list outcomes systematically, use relative frequency and work out expected outcomes.",
  standards: ["Y8 Statistics and Probability"],
  vocabulary: [
    { term: "Probability", definition: "A number from $0$ to $1$ that measures how likely an event is to happen." },
    { term: "Outcome", definition: "One possible result of an experiment, such as rolling a $4$." },
    { term: "Mutually exclusive", definition: "Events that cannot happen at the same time." },
    { term: "Sample space", definition: "A list or table of all the possible outcomes of an experiment." },
    { term: "Relative frequency", definition: "The number of times an event happens divided by the total number of trials; used to estimate probability." },
    { term: "Expected number", definition: "An estimate of how many times an event will happen: probability $\\times$ number of trials." },
    { term: "Fair", definition: "Describes a game or object where every outcome is equally likely." },
  ],
  concepts: [
    {
      id: "edm8-u4-probability-scale",
      title: "The probability scale and probabilities summing to 1",
      skill: "Calculate probabilities of single events and use the fact that the probabilities of all outcomes add up to 1.",
      lesson: {
        sections: [
          {
            heading: "The probability scale",
            body: "Probabilities are written as fractions, decimals or percentages between $0$ (impossible) and $1$ (certain). For equally likely outcomes, $P(\\text{event})=\\dfrac{\\text{number of favourable outcomes}}{\\text{total number of outcomes}}$.",
          },
          {
            heading: "Probabilities add to 1",
            body: "The probabilities of all the possible mutually exclusive outcomes add up to $1$. So $P(\\text{not }A)=1-P(A)$. If a probability table has one missing value, subtract the others from $1$.",
          },
          {
            heading: "Writing answers",
            body: "Give probabilities as fractions in simplest form unless asked otherwise. Never write a probability greater than $1$ or negative. Use 'unlikely', 'even chance' or 'likely' only when asked for words.",
          },
        ],
        keyFormulas: [
          { name: "Probability of an event", statement: "$P(A)=\\dfrac{\\text{favourable outcomes}}{\\text{total outcomes}}$" },
          { name: "Complement", statement: "$P(\\text{not }A)=1-P(A)$" },
        ],
        workedExample: {
          problem: "A bag has $3$ red, $5$ blue and $2$ green counters. A counter is taken at random. Work out the probability it is not blue.",
          solution: "There are $10$ counters. $P(\\text{blue})=\\frac{5}{10}=\\frac12$, so $P(\\text{not blue})=1-\\frac12=\\frac12$.",
        },
      },
      questions: [
        {
          id: "edm8-u4-probability-scale-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A fair six-sided dice is rolled once. What is the probability of getting a number greater than $4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{6}$" },
              { id: "b", text: "$\\frac{1}{2}$" },
              { id: "c", text: "$\\frac{2}{3}$" },
              { id: "d", text: "$\\frac{1}{3}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Probability", statement: "$P=\\frac{\\text{favourable}}{\\text{total}}$" }],
            steps: [{ reasoning: "The numbers greater than $4$ are $5$ and $6$: $2$ out of $6$.", working: "\\tfrac26=\\tfrac13", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** $\\frac13$",
            commonErrors: ["Including $4$ and getting $\\frac12$.", "Counting only one outcome."],
          },
        },
        {
          id: "edm8-u4-probability-scale-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The probability that a bus is late is $0.15$. The probability that it is early is $0.25$. Work out the probability that the bus is on time.",
          response: { type: "numeric", parts: [{ label: "Probability on time", answer: 0.6, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "principle", name: "Sum of probabilities", statement: "The probabilities of all mutually exclusive outcomes add up to $1$." }],
            steps: [
              { reasoning: "Subtract the other probabilities from $1$.", working: "1-0.15-0.25", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.6$",
            commonErrors: ["Adding the two probabilities: $0.4$.", "Subtracting only one of them."],
          },
        },
        {
          id: "edm8-u4-probability-scale-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A bag contains red, blue and green counters only. The probability of taking a red counter is $0.3$. The probability of taking a blue counter is $2x$. The probability of taking a green counter is $x$. Work out the value of $x$ and the probability that a counter is green.",
          response: {
            type: "numeric",
            parts: [
              { label: "Value of $x$", answer: 0.233, tolerance: 0.001 },
              { label: "P(green)", answer: 0.233, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Sum of probabilities", statement: "All the probabilities add up to $1$." }],
            steps: [
              { reasoning: "Form an equation.", working: "0.3+2x+x=1", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "3x=0.7", marks: 1, markCode: "M" },
              { reasoning: "Divide by $3$.", working: "x=\\tfrac{7}{30}=0.233\\ldots", marks: 1, markCode: "A" },
              { reasoning: "P(green) equals $x$.", working: "\\tfrac{7}{30}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=\\frac{7}{30}\\approx0.233$; P(green) $=\\frac{7}{30}$",
            commonErrors: ["Forgetting that blue is $2x$.", "Writing $0.3+3x=0.7$."],
            examinerNote: "Accept $0.23$ or $\\frac{7}{30}$ (oe).",
          },
        },
        {
          id: "edm8-u4-probability-scale-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A bag contains $20$ counters. There are $8$ red counters, $6$ blue counters and the rest are yellow. One counter is taken at random.",
          parts: [
            { label: "a", prompt: "Work out the probability that the counter is yellow.", marks: 2 },
            { label: "b", prompt: "Work out the probability that the counter is not red.", marks: 2 },
            { label: "c", prompt: "Three more yellow counters are added to the bag. Work out the new probability that a counter taken at random is yellow.", marks: 2 },
            { label: "d", prompt: "Jo says 'There are three colours so the probability of yellow is $\\frac13$.' Explain why Jo is wrong.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Probability", statement: "$P=\\frac{\\text{favourable}}{\\text{total}}$" },
              { kind: "principle", name: "Complement", statement: "$P(\\text{not }A)=1-P(A)$" },
            ],
            steps: [
              { part: "a", reasoning: "Yellow counters $=20-8-6=6$.", working: "\\tfrac{6}{20}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify.", working: "\\tfrac{3}{10}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Not red $=6+6=12$ counters.", working: "\\tfrac{12}{20}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "\\tfrac{3}{5}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Now $9$ yellow counters in a total of $23$.", working: "\\tfrac{9}{23}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the probability (cannot simplify).", working: "\\tfrac{9}{23}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Jo assumed the outcomes are equally likely.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The numbers of each colour are different ($8$, $6$, $6$).", working: "\\tfrac{6}{20}\\ne\\tfrac13", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Probability depends on the number of counters of each colour, so yellow is $\\frac{3}{10}$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\frac{3}{10}$ (b) $\\frac35$ (c) $\\frac{9}{23}$ (d) the colours are not equally likely",
            commonErrors: ["Using the number of colours as the denominator.", "Forgetting to increase the total in part (c)."],
          },
        },
      ],
    },
    {
      id: "edm8-u4-sample-space-relative-frequency",
      title: "Sample spaces, relative frequency and expected outcomes",
      skill: "List outcomes systematically, estimate probabilities from experiments and work out expected numbers.",
      lesson: {
        sections: [
          {
            heading: "Sample spaces",
            body: "A sample space lists all possible outcomes. For two events, use a table or an organised list. Rolling two fair dice and adding gives $36$ equally likely outcomes. Count favourable outcomes from the table, then divide by the total.",
          },
          {
            heading: "Relative frequency",
            body: "If you cannot work out a probability by symmetry (for example a biased spinner), carry out an experiment. Relative frequency $=\\dfrac{\\text{number of times the event happens}}{\\text{total number of trials}}$. More trials give a more reliable estimate.",
          },
          {
            heading: "Expected outcomes",
            body: "The expected number of times an event happens is $P(\\text{event})\\times\\text{number of trials}$. It is an estimate of what should happen on average, not a guarantee of the actual result.",
          },
        ],
        keyFormulas: [
          { name: "Relative frequency", statement: "$\\dfrac{\\text{frequency of event}}{\\text{total trials}}$" },
          { name: "Expected number", statement: "$P\\times n$" },
        ],
        workedExample: {
          problem: "A spinner lands on blue $18$ times in $60$ spins. Estimate the probability of blue and the number of blues in $200$ spins.",
          solution: "Relative frequency $=\\frac{18}{60}=0.3$. Expected blues $=0.3\\times200=60$.",
        },
      },
      questions: [
        {
          id: "edm8-u4-sample-space-relative-frequency-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A coin is flipped and a fair six-sided dice is rolled. How many possible outcomes are there altogether?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$36$" },
              { id: "b", text: "$18$" },
              { id: "c", text: "$8$" },
              { id: "d", text: "$12$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Counting outcomes", statement: "Multiply the number of outcomes of each event." }],
            steps: [{ reasoning: "$2$ coin outcomes $\\times$ $6$ dice outcomes.", working: "2\\times6=12", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** $12$",
            commonErrors: ["Adding: $2+6=8$."],
          },
        },
        {
          id: "edm8-u4-sample-space-relative-frequency-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A biased coin is flipped $80$ times and lands on heads $52$ times. Estimate the probability that it lands on heads on the next flip. Give your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Relative frequency", answer: 0.65, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Relative frequency", statement: "$\\frac{\\text{frequency}}{\\text{total trials}}$" }],
            steps: [
              { reasoning: "Divide heads by total flips.", working: "\\tfrac{52}{80}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.65", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.65$",
            commonErrors: ["Using $0.5$ because a coin has two sides.", "Dividing $80$ by $52$."],
          },
        },
        {
          id: "edm8-u4-sample-space-relative-frequency-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two fair six-sided dice are rolled and their scores are added.\n\nWork out the probability that the total is $8$, and the probability that the total is greater than $9$. Give each answer as a fraction in its simplest form, then enter the decimal value correct to 3 decimal places.",
          response: {
            type: "numeric",
            parts: [
              { label: "P(total is 8) as a decimal", answer: 0.139, tolerance: 0.001 },
              { label: "P(total greater than 9) as a decimal", answer: 0.167, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Sample space", statement: "There are $36$ equally likely outcomes when two dice are rolled." }],
            steps: [
              { reasoning: "Total $8$ comes from $(2,6),(3,5),(4,4),(5,3),(6,2)$: $5$ outcomes.", working: "\\tfrac{5}{36}", marks: 1, markCode: "M" },
              { reasoning: "As a decimal.", working: "0.139", marks: 1, markCode: "A" },
              { reasoning: "Totals of $10$, $11$, $12$ have $3+2+1=6$ outcomes.", working: "\\tfrac{6}{36}=\\tfrac16", marks: 1, markCode: "M" },
              { reasoning: "As a decimal.", working: "0.167", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{5}{36}\\approx0.139$ and $\\frac16\\approx0.167$",
            commonErrors: ["Using $11$ outcomes (the possible totals $2$ to $12$) as the denominator.", "Including a total of $9$ in 'greater than 9'."],
          },
        },
        {
          id: "edm8-u4-sample-space-relative-frequency-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Mia has a spinner with colours red, blue and green. She spins it $120$ times. The results are: red $48$, blue $30$, green $42$.",
          parts: [
            { label: "a", prompt: "Write down the relative frequency of blue as a fraction in simplest form.", marks: 2 },
            { label: "b", prompt: "Work out an estimate for the probability of green, as a decimal.", marks: 2 },
            { label: "c", prompt: "Mia spins the spinner $300$ more times. Work out the expected number of times it lands on red.", marks: 2 },
            { label: "d", prompt: "Mia says the spinner is fair because every colour has a relative frequency close to one third. Use the results to comment on her claim.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Relative frequency", statement: "$\\frac{\\text{frequency}}{\\text{total trials}}$" },
              { kind: "formula", name: "Expected number", statement: "$P\\times n$" },
            ],
            steps: [
              { part: "a", reasoning: "Blue frequency over total.", working: "\\tfrac{30}{120}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify.", working: "\\tfrac14", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Green frequency over total.", working: "\\tfrac{42}{120}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "0.35", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Relative frequency of red is $\\frac{48}{120}=0.4$; multiply by $300$.", working: "0.4\\times300", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "120", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Relative frequencies are $0.4$, $0.25$ and $0.35$.", working: "0.4,\\;0.25,\\;0.35", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A fair spinner would give about $\\frac13=0.333$ each, so red is higher and blue lower than expected.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Conclusion: the spinner may be biased; more spins would give a more reliable estimate.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\frac14$ (b) $0.35$ (c) $120$ (d) the values are not all close to $\\frac13$, so the spinner may be biased; more trials needed",
            commonErrors: ["Dividing by the number of colours rather than the number of spins.", "Treating the expected number as an exact result."],
          },
        },
      ],
    },
  ],
};
