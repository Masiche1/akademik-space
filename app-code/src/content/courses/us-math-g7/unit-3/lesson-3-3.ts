import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "m7-u3-lesson-3-3",
  code: "3-3",
  title: "Statistics and Probability",
  goal: "I CAN use random samples to make inferences, compare two data sets using mean and MAD, and find probabilities of simple and compound events.",
  standards: ["7.SP.A.1", "7.SP.B.3", "7.SP.B.4", "7.SP.C.5", "7.SP.C.6", "7.SP.C.7", "7.SP.C.8"],
  vocabulary: [
    { term: "Population", definition: "The entire group you want to learn about." },
    { term: "Random sample", definition: "A sample in which every member of the population has an equal chance of being chosen, so it is likely to be representative." },
    { term: "Mean absolute deviation (MAD)", definition: "The mean of the distances between each data value and the mean of the data. It measures how spread out the data are." },
    { term: "Sample space", definition: "The set of all possible outcomes of a probability experiment." },
    { term: "Compound event", definition: "An event made up of two or more simple events, such as flipping a coin and rolling a number cube." },
    { term: "Tree diagram", definition: "A diagram whose branches show each stage of a compound event and the probability of each outcome." },
    { term: "Probability", definition: "A number from $0$ to $1$ that measures how likely an event is. For equally likely outcomes, $P = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$." },
  ],
  concepts: [
    {
      id: "m7-u3-sampling-mad",
      title: "Random sampling, inferences and comparing data",
      skill: "Use random samples to make predictions and compare two data sets using the mean and the mean absolute deviation.",
      lesson: {
        sections: [
          {
            heading: "Random samples and inferences",
            body: "A sample can tell us about a population only if it is **random** and large enough to be representative. Asking only the members of the school band about favorite music is a biased sample. To make an inference, find the proportion in the sample and apply it to the population: if $35\\%$ of a random sample prefer pizza, expect about $35\\%$ of the whole population to prefer it.",
          },
          {
            heading: "Mean and MAD",
            body: "The mean is the center of a data set. The **mean absolute deviation (MAD)** measures spread. To find it: (1) find the mean, (2) find how far each value is from the mean, ignoring signs, (3) find the mean of those distances. A small MAD means the data are close together.",
          },
          {
            heading: "Comparing two populations",
            body: "To compare two data sets, compare their centers (means) and their spreads (MADs). Then express the difference in means as a multiple of the MAD to judge whether the difference is large or small. If the means differ by about twice the MAD, the two groups show a clear difference.",
          },
        ],
        keyFormulas: [
          { name: "Mean", statement: "$\\bar{x} = \\frac{\\text{sum of values}}{\\text{number of values}}$" },
          { name: "MAD", statement: "$\\text{MAD} = \\frac{\\sum |x - \\bar{x}|}{n}$" },
          { name: "Inference from a sample", statement: "Population estimate $=$ sample proportion $\\times$ population size" },
        ],
        workedExample: {
          problem: "Find the MAD of $2,\\ 4,\\ 6,\\ 8,\\ 10$.",
          solution: "The mean is $\\frac{30}{5} = 6$. The distances from $6$ are $4, 2, 0, 2, 4$. Their sum is $12$, so $\\text{MAD} = \\frac{12}{5} = 2.4$.",
        },
      },
      questions: [
        {
          id: "m7-u3-sampling-mad-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A school has $800$ students. The principal wants to know which lunch option students prefer. Which method gives the most representative sample?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ask $30$ students chosen at random from the school roster" },
              { id: "b", text: "Ask the first $30$ students who arrive at school" },
              { id: "c", text: "Ask the $30$ students in the cafeteria line" },
              { id: "d", text: "Ask the $30$ members of the cooking club" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Random sampling", statement: "A random sample gives every member of the population an equal chance of selection, so it is likely to be representative." },
            ],
            steps: [
              { reasoning: "Choosing from the whole roster at random avoids bias. The other groups over-represent certain students.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Ask $30$ students chosen at random from the school roster",
            commonErrors: ["Choosing a convenient sample (first arrivals or cafeteria line) that may not represent all students.", "Choosing a group with a built-in interest, such as the cooking club."],
          },
        },
        {
          id: "m7-u3-sampling-mad-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the mean absolute deviation (MAD) of the data set $5,\\ 7,\\ 8,\\ 10,\\ 10$.",
          response: { type: "numeric", parts: [{ label: "MAD", answer: 1.6, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "MAD", statement: "The mean of the absolute distances of the values from the mean." },
            ],
            steps: [
              { reasoning: "Find the mean.", working: "\\bar{x} = \\frac{5 + 7 + 8 + 10 + 10}{5} = \\frac{40}{5} = 8", marks: 1, markCode: "M" },
              { reasoning: "Find each distance from the mean.", working: "3,\\ 1,\\ 0,\\ 2,\\ 2", marks: 1, markCode: "M" },
              { reasoning: "Average the distances.", working: "\\text{MAD} = \\frac{3 + 1 + 0 + 2 + 2}{5} = \\frac{8}{5} = 1.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.6$",
            commonErrors: ["Not taking absolute values, so the deviations sum to $0$.", "Dividing the sum of distances by the mean instead of by the number of values."],
            examinerNote: "M1 for mean $8$. M1 for the five correct distances. A1 cao.",
          },
        },
        {
          id: "m7-u3-sampling-mad-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A middle school has $1{,}200$ students. A random sample of $60$ students is surveyed and $21$ say that pizza is their favorite lunch. Use the sample to predict how many students in the whole school prefer pizza.",
          response: { type: "numeric", parts: [{ label: "Predicted number of students", answer: 420 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Inference from a random sample", statement: "The sample proportion estimates the population proportion." },
            ],
            steps: [
              { reasoning: "Find the proportion in the sample.", working: "\\frac{21}{60} = 0.35", marks: 1, markCode: "M" },
              { reasoning: "Apply the proportion to the population.", working: "0.35 \\times 1200", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "420", marks: 1, markCode: "A" },
            ],
            finalAnswer: "About $420$ students",
            commonErrors: ["Giving $21$, the sample count.", "Multiplying $21 \\times 1200$."],
            examinerNote: "Accept the equivalent proportion $\\frac{21}{60} = \\frac{x}{1200}$.",
          },
        },
        {
          id: "m7-u3-sampling-mad-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Two basketball teams recorded the number of points scored in five games.\n\n- Team A: $8,\\ 10,\\ 12,\\ 14,\\ 16$\n- Team B: $13,\\ 15,\\ 17,\\ 19,\\ 21$",
          parts: [
            { label: "a", prompt: "Find the mean number of points for Team A.", marks: 1 },
            { label: "b", prompt: "Find the MAD for Team A.", marks: 3 },
            { label: "c", prompt: "The MAD for Team B is also $2.4$. Find the mean for Team B and the difference between the two means.", marks: 2 },
            { label: "d", prompt: "Express the difference in the means as a multiple of the MAD, rounded to the nearest whole number, and write a conclusion comparing the two teams.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Mean of Team A", answer: 12 },
              { label: "(b) MAD of Team A", answer: 2.4, tolerance: 0.01 },
              { label: "(c) Difference between the means", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "MAD", statement: "The mean of the absolute distances of the values from the mean." },
              { kind: "principle", name: "Comparing populations", statement: "Compare centers using the mean and variability using the MAD. Express the difference of the means as a multiple of the MAD." },
            ],
            steps: [
              { part: "a", reasoning: "Add the scores and divide by $5$.", working: "\\frac{8 + 10 + 12 + 14 + 16}{5} = \\frac{60}{5} = 12", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Find the distance of each value from $12$.", working: "4,\\ 2,\\ 0,\\ 2,\\ 4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Add the distances.", working: "4 + 2 + 0 + 2 + 4 = 12", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by the number of values.", working: "\\frac{12}{5} = 2.4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Team B total is $85$, so the mean is $\\frac{85}{5} = 17$.", working: "\\bar{x}_B = 17", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Subtract the means.", working: "17 - 12 = 5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Divide the difference in means by the common MAD.", working: "\\frac{5}{2.4} \\approx 2.08 \\approx 2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Both teams have the same MAD, so their scores are equally spread out.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The difference in means is about twice the MAD, so Team B typically scores noticeably more points than Team A.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $12$ (b) $2.4$ (c) Team B mean $17$, difference $5$ (d) about $2$ MADs; the spreads are equal and Team B scores clearly higher",
            commonErrors: ["Leaving out the absolute value when finding deviations.", "Comparing only the means and ignoring variability.", "Dividing the difference of means by the mean instead of by the MAD."],
            examinerNote: "In (d) accept a conclusion that Team B's scores are higher by about two MADs, with a comment that the variability is similar.",
          },
        },
      ],
    },
    {
      id: "m7-u3-probability-events",
      title: "Probability of simple and compound events",
      skill: "Find probabilities of simple and compound events using sample spaces, tree diagrams and the multiplication of probabilities.",
      lesson: {
        sections: [
          {
            heading: "Simple events",
            body: "A probability is a number from $0$ (impossible) to $1$ (certain). When outcomes are equally likely, $P(\\text{event}) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$. If you repeat an experiment many times, the relative frequency of an event gets close to its theoretical probability, so you can predict: expected count $= P \\times \\text{number of trials}$.",
          },
          {
            heading: "Compound events",
            body: "A compound event has more than one stage. List the **sample space** with an organized list, a table or a **tree diagram**. Each branch of a tree diagram shows the probability of one stage. Multiply along the branches to find the probability of a complete path. Add the probabilities of the paths that make up the event you want.",
          },
          {
            heading: "With and without replacement",
            body: "When you draw an item and put it back, the second draw has the same probabilities as the first. If you do **not** put it back, the total number of items drops by one and the probabilities of the second draw change.",
          },
        ],
        keyFormulas: [
          { name: "Theoretical probability", statement: "$P(E) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$" },
          { name: "Compound event (multiplication)", statement: "$P(A \\text{ then } B) = P(A) \\times P(B \\text{ after } A)$" },
        ],
        workedExample: {
          problem: "A fair coin is flipped and a fair number cube is rolled. What is the probability of getting heads and a $6$?",
          solution: "The sample space has $2 \\times 6 = 12$ equally likely outcomes. Exactly one outcome is heads and $6$. So $P = \\frac{1}{12}$. Check with multiplication: $\\frac{1}{2} \\times \\frac{1}{6} = \\frac{1}{12}$.",
        },
      },
      questions: [
        {
          id: "m7-u3-probability-events-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bag contains $3$ red marbles, $5$ blue marbles and $2$ green marbles. One marble is picked at random. What is the probability that it is blue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{5}$" },
              { id: "b", text: "$\\frac{1}{2}$" },
              { id: "c", text: "$\\frac{5}{8}$" },
              { id: "d", text: "$\\frac{3}{10}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Theoretical probability", statement: "$P(E) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$" },
            ],
            steps: [
              { reasoning: "There are $3 + 5 + 2 = 10$ marbles in total and $5$ are blue.", working: "P(\\text{blue}) = \\frac{5}{10} = \\frac{1}{2}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\frac{1}{2}$",
            commonErrors: ["Dividing by $8$ (red and blue only) to get $\\frac{5}{8}$.", "Giving $\\frac{3}{10}$, the probability of red."],
          },
        },
        {
          id: "m7-u3-probability-events-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A fair number cube (numbered $1$ to $6$) is rolled $120$ times. Predict how many times a number greater than $4$ will be rolled.",
          response: { type: "numeric", parts: [{ label: "Predicted number of rolls", answer: 40 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Expected count", statement: "Expected count $= P(E) \\times \\text{number of trials}$." },
            ],
            steps: [
              { reasoning: "Numbers greater than $4$ are $5$ and $6$, so $P = \\frac{2}{6} = \\frac{1}{3}$.", working: "P = \\frac{1}{3}", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the number of rolls.", working: "\\frac{1}{3} \\times 120 = 40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "About $40$ times",
            commonErrors: ["Counting $4$ as greater than $4$, giving $\\frac{3}{6}$.", "Giving the probability instead of the predicted count."],
          },
        },
        {
          id: "m7-u3-probability-events-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A fair coin is flipped and a fair number cube (numbered $1$ to $6$) is rolled. Find the probability of getting tails and an even number. Give your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.25, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Independent events", statement: "For independent stages, multiply the probabilities of each stage." },
            ],
            steps: [
              { reasoning: "Probability of tails.", working: "P(\\text{tails}) = \\frac{1}{2}", marks: 1, markCode: "B" },
              { reasoning: "Even numbers are $2, 4, 6$, so three of the six outcomes.", working: "P(\\text{even}) = \\frac{3}{6} = \\frac{1}{2}", marks: 1, markCode: "B" },
              { reasoning: "Multiply.", working: "\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4} = 0.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{4} = 0.25$",
            commonErrors: ["Adding the probabilities instead of multiplying.", "Using $\\frac{1}{6}$ for the number cube."],
            examinerNote: "Accept $3$ favorable outcomes out of $12$ in the sample space.",
          },
        },
        {
          id: "m7-u3-probability-events-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A bag contains $4$ red marbles and $6$ blue marbles. Two marbles are picked at random, one after the other, **without replacement**. Give decimal answers rounded to three decimal places.",
          parts: [
            { label: "a", prompt: "Find the probability that the first marble is red.", marks: 1 },
            { label: "b", prompt: "Find the probability that both marbles are red. Explain why the second probability is not the same as the first.", marks: 3 },
            { label: "c", prompt: "Find the probability that both marbles are blue.", marks: 2 },
            { label: "d", prompt: "Find the probability that the two marbles are different colors.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) P(first red)", answer: 0.4, tolerance: 0.001 },
              { label: "(b) P(both red)", answer: 0.133, tolerance: 0.001 },
              { label: "(c) P(both blue)", answer: 0.333, tolerance: 0.001 },
              { label: "(d) P(different colors)", answer: 0.533, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Theoretical probability", statement: "$P(E) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$" },
              { kind: "principle", name: "Tree diagram", statement: "Multiply the probabilities along a path. Add the probabilities of the paths that make up the event." },
              { kind: "principle", name: "Complement", statement: "The probabilities of all outcomes add to $1$, so $P(E) = 1 - P(\\text{not } E)$." },
            ],
            steps: [
              { part: "a", reasoning: "There are $4$ red marbles out of $10$.", working: "P = \\frac{4}{10} = 0.4", marks: 1, markCode: "B" },
              { part: "b", reasoning: "After one red marble is removed, there are $3$ red marbles among $9$ left, so the second probability changes.", working: "P(\\text{second red}) = \\frac{3}{9}", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Multiply along the red-red branch.", working: "\\frac{4}{10} \\times \\frac{3}{9} = \\frac{12}{90}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Convert to a decimal.", working: "\\frac{2}{15} \\approx 0.133", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Multiply along the blue-blue branch: $5$ blue marbles remain out of $9$.", working: "\\frac{6}{10} \\times \\frac{5}{9} = \\frac{30}{90}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify and convert.", working: "\\frac{1}{3} \\approx 0.333", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Different colors is the complement of both the same color. Add the two same-color probabilities.", working: "\\frac{12}{90} + \\frac{30}{90} = \\frac{42}{90}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Subtract from $1$.", working: "1 - \\frac{42}{90} = \\frac{48}{90}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Simplify and convert.", working: "\\frac{8}{15} \\approx 0.533", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.4$ (b) $\\frac{2}{15} \\approx 0.133$ (c) $\\frac{1}{3} \\approx 0.333$ (d) $\\frac{8}{15} \\approx 0.533$",
            commonErrors: ["Using $\\frac{4}{10}$ for the second marble as if the first was replaced.", "Using denominator $10$ for the second draw.", "Adding the branch probabilities instead of multiplying."],
            examinerNote: "In (d) accept $\\frac{4}{10} \\times \\frac{6}{9} + \\frac{6}{10} \\times \\frac{4}{9} = \\frac{48}{90}$ (oe).",
          },
        },
      ],
    },
  ],
};
