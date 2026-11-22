import type { Lesson } from "../../../types.ts";

export const lesson82: Lesson = {
  id: "alg2-u8-8-2",
  code: "8-2",
  title: "Counting and Normal Distributions",
  goal: "I CAN count arrangements and selections to find probabilities and interpret normal-model scores and percentiles.",
  standards: ["HSS-CP.B.9", "HSS-ID.A.4"],
  vocabulary: [
    { term: "Permutation", definition: "An arrangement of selected objects in which order matters." },
    { term: "Combination", definition: "A selection of objects in which order does not matter." },
    { term: "Normal distribution", definition: "A symmetric, bell-shaped probability distribution determined by its mean and standard deviation." },
    { term: "Standard deviation", definition: "A measure of the typical distance of data values from the mean." },
    { term: "z-score", definition: "The number of standard deviations a value lies above or below the mean." },
    { term: "Percentile", definition: "The percent of observations at or below a given value." },
    { term: "Empirical rule", definition: "For an approximately normal distribution, about 68%, 95%, and 99.7% of values lie within 1, 2, and 3 standard deviations of the mean, respectively." },
  ],
  concepts: [
    {
      id: "alg2-u8-counting-probability",
      title: "Permutations and combinations in probability",
      skill: "Choose an appropriate counting method and use counts of favorable and total outcomes to calculate probability.",
      lesson: {
        sections: [
          {
            heading: "Does order matter?",
            body: "Use a **permutation** when the same objects in a different order count as a different outcome, such as assigning first, second, and third place. Use a **combination** when only the selected group matters, such as choosing a committee. For $n$ distinct objects taken $r$ at a time, $nP_r=\\dfrac{n!}{(n-r)!}$ and $nC_r=\\dfrac{n!}{r!(n-r)!}$.",
          },
          {
            heading: "Counting probabilities",
            body: "When outcomes are equally likely, $P(E)=\\dfrac{\\text{favorable outcomes}}{\\text{total outcomes}}$. Count both quantities in the same way and under the same conditions. For example, a random unordered group of four from fourteen people has $\\binom{14}{4}$ possible groups; the number with two people from each of two groups is the product of the corresponding combinations.",
          },
        ],
        keyFormulas: [
          { name: "Permutations", statement: "$nP_r=\\dfrac{n!}{(n-r)!}$ when order matters." },
          { name: "Combinations", statement: "$nC_r=\\dfrac{n!}{r!(n-r)!}$ when order does not matter." },
          { name: "Classical probability", statement: "$P(E)=\\dfrac{\\text{number of favorable outcomes}}{\\text{number of equally likely outcomes}}$." },
        ],
        workedExample: {
          problem: "A five-person committee is selected uniformly from 12 students, 7 seniors and 5 juniors. Find the probability that the committee has exactly 3 seniors.",
          solution: "There are $\\binom{12}{5}=792$ equally likely committees. Favorable committees choose 3 of the 7 seniors and 2 of the 5 juniors: $\\binom{7}{3}\\binom{5}{2}=35\\cdot10=350$. Therefore, $P=\\frac{350}{792}=\\frac{175}{396}\\approx0.442$. The selection is unordered, so combinations are appropriate.",
        },
      },
      questions: [
        {
          id: "alg2-u8-counting-probability-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A club has 5 candidates for president and vice president. No person may hold both offices. How many different ordered assignments of the two offices are possible?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$20$" },
              { id: "b", text: "$10$" },
              { id: "c", text: "$25$" },
              { id: "d", text: "$120$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Permutation", statement: "An assignment to distinct positions is an ordered arrangement; $nP_r=\\frac{n!}{(n-r)!}$." },
            ],
            steps: [
              { reasoning: "The president and vice president positions are distinct, so order matters: there are 5 choices for president and 4 remaining choices for vice president.", working: "5P_2=5\\cdot4=20", marks: 2, markCode: "M" },
            ],
            finalAnswer: "**(a)** $20$ assignments",
            commonErrors: ["Using $\\binom{5}{2}=10$ and overlooking that swapping the two officeholders makes a different assignment."],
          },
        },
        {
          id: "alg2-u8-counting-probability-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A teacher chooses 3 students from a class of 7 to form a committee. How many different committees are possible?",
          response: { type: "numeric", parts: [{ label: "Number of committees", answer: 35 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Combination", statement: "A combination counts selections in which order does not matter: $nC_r=\\frac{n!}{r!(n-r)!}$." },
            ],
            steps: [
              { reasoning: "Committee membership has no ordering, so use a combination.", working: "\\binom{7}{3}=\\frac{7!}{3!4!}", marks: 1, markCode: "M" },
              { reasoning: "Simplify the factorial expression.", working: "\\binom{7}{3}=\\frac{7\\cdot6\\cdot5}{3\\cdot2\\cdot1}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to obtain the number of distinct committees.", working: "\\binom{7}{3}=35", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$35$ committees",
            commonErrors: ["Counting different orders of the same three committee members as separate committees."],
          },
        },
        {
          id: "alg2-u8-counting-probability-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A four-digit security code is formed by selecting digits from 0 through 9, with no digit repeated. Leading zero is allowed. If one code is selected uniformly from all possible codes, find the probability that all four digits are odd. Give your answer as a decimal rounded to three decimal places.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.024, tolerance: 0.0005 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Permutation", statement: "Ordered selections of distinct objects are counted by $nP_r=\\frac{n!}{(n-r)!}$." },
              { kind: "law", name: "Classical probability", statement: "For equally likely outcomes, probability equals favorable count divided by total count." },
            ],
            steps: [
              { reasoning: "The code positions are ordered, and there are ten available distinct digits.", working: "10P_4=10\\cdot9\\cdot8\\cdot7=5040", marks: 1, markCode: "M" },
              { reasoning: "There are five odd digits, and four ordered positions must use distinct odd digits.", working: "5P_4=5\\cdot4\\cdot3\\cdot2=120", marks: 1, markCode: "M" },
              { reasoning: "Divide the favorable ordered codes by all ordered codes.", working: "P(\\text{all odd})=\\frac{120}{5040}=\\frac{1}{42}\\approx0.0238095", marks: 1, markCode: "A" },
              { reasoning: "Round to three decimal places as requested.", working: "0.024", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.024$",
            commonErrors: ["Using $5^4$ for favorable outcomes even though digits cannot repeat.", "Treating the code as a four-digit number and excluding leading zero, despite the stated code rule."],
          },
        },
        {
          id: "alg2-u8-counting-probability-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A 4-person delegation is selected uniformly at random from 8 students in the robotics club and 6 students in the art club. Assume each possible 4-person group is equally likely.",
          parts: [
            { label: "a", prompt: "Find the total number of possible delegations.", marks: 2 },
            { label: "b", prompt: "Find the number of delegations with exactly 2 robotics students and 2 art students.", marks: 2 },
            { label: "c", prompt: "Find the probability of exactly 2 students from each club. Give a decimal rounded to four decimal places.", marks: 2 },
            { label: "d", prompt: "Explain why a permutation count would be inappropriate for this selection.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Combination", statement: "Unordered selections of $r$ objects from $n$ are counted by $\\binom{n}{r}$." },
              { kind: "law", name: "Classical probability", statement: "Probability is favorable equally likely outcomes divided by all equally likely outcomes." },
            ],
            steps: [
              { part: "a", reasoning: "A delegation is an unordered selection of four from fourteen students.", working: "\\binom{14}{4}=1001", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Choose two members from each club independently; multiply the counts of the two choices.", working: "\\binom{8}{2}\\binom{6}{2}=28\\cdot15=420", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Use the favorable group count over the total group count and round to four decimals.", working: "P=\\frac{420}{1001}\\approx0.4195804\\approx0.4196", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Changing the order of the same four chosen students does not change who is on the delegation; permutations would count each group repeatedly.", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) $1001$. (b) $420$. (c) $0.4196$. (d) Order does not matter, so use combinations rather than permutations.",
            commonErrors: ["Using $8P_2\\cdot6P_2$ for unordered club selections.", "Adding instead of multiplying the independent club selection counts."],
          },
        },
      ],
    },
    {
      id: "alg2-u8-normal-distributions",
      title: "Normal distributions, z-scores, and percentiles",
      skill: "Use the empirical rule and z-scores to describe positions and probabilities in an approximately normal distribution.",
      lesson: {
        sections: [
          {
            heading: "Normal models and the empirical rule",
            body: "A normal distribution is symmetric about its mean $\\mu$; its standard deviation $\\sigma$ determines its spread. The empirical rule estimates that about 68% of values lie from $\\mu-\\sigma$ to $\\mu+\\sigma$, 95% from $\\mu-2\\sigma$ to $\\mu+2\\sigma$, and 99.7% from $\\mu-3\\sigma$ to $\\mu+3\\sigma$. Symmetry splits each central interval evenly around the mean.",
          },
          {
            heading: "Standardizing and interpreting percentiles",
            body: "A **z-score** converts a value $x$ into standard-deviation units: $z=\\dfrac{x-\\mu}{\\sigma}$. A positive z-score is above the mean; a negative one is below. A percentile describes the proportion at or below a value. For probabilities beyond the empirical-rule estimates, use a supplied standard normal table value; do not guess a table lookup.",
          },
        ],
        keyFormulas: [
          { name: "z-score", statement: "$z=\\dfrac{x-\\mu}{\\sigma}$" },
          { name: "Empirical rule", statement: "About 68%, 95%, and 99.7% lie within $1$, $2$, and $3$ standard deviations of the mean, respectively." },
          { name: "Percentile", statement: "The percentile of $x$ is $100\\times P(X\\le x)$ percent." },
        ],
        workedExample: {
          problem: "A measurement is approximately normal with mean $50$ and standard deviation $4$. Find the z-score of $58$ and estimate the percent of measurements between $46$ and $54$.",
          solution: "$z=\\frac{58-50}{4}=2$, so 58 is two standard deviations above the mean. The interval from 46 to 54 is $50\\pm4$, one standard deviation on either side of the mean; by the empirical rule, about 68% of measurements lie in this interval.",
        },
      },
      questions: [
        {
          id: "alg2-u8-normal-distributions-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A distribution is approximately normal with mean $100$ and standard deviation $15$. According to the empirical rule, approximately what percent of values lie between $85$ and $115$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$68\\%$" },
              { id: "b", text: "$95\\%$" },
              { id: "c", text: "$34\\%$" },
              { id: "d", text: "$99.7\\%$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Empirical rule", statement: "About 68% of normally distributed values lie within one standard deviation of the mean." },
            ],
            steps: [
              { reasoning: "The interval is $100\\pm15$, exactly one standard deviation below and above the mean.", working: "100-15=85,\\quad 100+15=115", marks: 1, markCode: "M" },
              { reasoning: "Apply the one-standard-deviation empirical-rule estimate.", working: "P(85\\le X\\le115)\\approx68\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Approximately $68\\%$",
            commonErrors: ["Selecting 95%, which corresponds to about two standard deviations from the mean."],
          },
        },
        {
          id: "alg2-u8-normal-distributions-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Adult heights in a population are approximately normal with mean $170$ cm and standard deviation $8$ cm. Find the z-score for a height of $186$ cm.",
          response: { type: "numeric", parts: [{ label: "z-score", answer: 2, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard score", statement: "$z=\\frac{x-\\mu}{\\sigma}$." },
            ],
            steps: [
              { reasoning: "Identify the value, mean, and standard deviation in the z-score formula.", working: "x=186,\\quad\\mu=170,\\quad\\sigma=8", marks: 1, markCode: "M" },
              { reasoning: "Subtract the mean to find how far the value lies above it.", working: "186-170=16", marks: 1, markCode: "M" },
              { reasoning: "Divide by the standard deviation; the value is two standard deviations above the mean.", working: "z=\\frac{16}{8}=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$z=2$",
            commonErrors: ["Dividing the mean by the value, rather than standardizing the difference from the mean."],
          },
        },
        {
          id: "alg2-u8-normal-distributions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A variable $X$ is approximately normal with mean $60$ and standard deviation $5$. A standard normal table gives $P(Z\\le1.25)=0.8944$. Find the percent of observations with $X>66.25$. Round to the nearest tenth of a percent.",
          response: { type: "numeric", parts: [{ label: "Percent above 66.25", answer: 10.56, tolerance: 0.05, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "z-score", statement: "$z=\\frac{x-\\mu}{\\sigma}$." },
              { kind: "law", name: "Complement rule", statement: "$P(Z>z)=1-P(Z\\le z)$." },
            ],
            steps: [
              { reasoning: "Standardize the cutoff to determine its location on the standard normal scale.", working: "z=\\frac{66.25-60}{5}=1.25", marks: 2, markCode: "M" },
              { reasoning: "The supplied table value is the area to the left, so subtract from 1 to get the right tail.", working: "P(X>66.25)=1-0.8944=0.1056", marks: 1, markCode: "A" },
              { reasoning: "Convert the probability to a percent and round to the requested tenth of a percent.", working: "0.1056\\times100\\%=10.56\\%\\approx10.6\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Approximately $10.6\\%$",
            commonErrors: ["Reporting the table's left-tail area as the percent above the cutoff."],
          },
        },
        {
          id: "alg2-u8-normal-distributions-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Scores on a placement assessment are approximately normal with mean $70$ points and standard deviation $8$ points. A standard normal table gives $P(Z\\le1.5)=0.9332$.",
          parts: [
            { label: "a", prompt: "Find the z-score for a score of 82 points.", marks: 2 },
            { label: "b", prompt: "Use the empirical rule to estimate the percent of scores between 62 and 78 points.", marks: 2 },
            { label: "c", prompt: "Use the supplied table value to find the percent of students scoring above 82 points. Give the percent to two decimal places.", marks: 3 },
            { label: "d", prompt: "Interpret the table value $P(Z\\le1.5)=0.9332$ as a percentile in this context.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "z-score", statement: "$z=\\frac{x-\\mu}{\\sigma}$." },
              { kind: "law", name: "Empirical rule", statement: "About 68% of values in a normal distribution lie within one standard deviation of the mean." },
              { kind: "law", name: "Complement rule", statement: "$P(Z>z)=1-P(Z\\le z)$." },
              { kind: "definition", name: "Percentile", statement: "The $k$th percentile is a value with approximately $k$ percent of observations at or below it." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract the mean and divide by the standard deviation to express the score in standard-deviation units.", working: "z=\\frac{82-70}{8}=\\frac{12}{8}=1.5", marks: 2, markCode: "M" },
              { part: "b", reasoning: "The endpoints are one standard deviation below and above the mean.", working: "70-8=62,\\quad70+8=78\\quad\\Rightarrow\\quad approximately\\ 68\\%", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Use the provided cumulative probability and take its complement for scores above 82.", working: "P(X>82)=1-0.9332=0.0668=6.68\\%", marks: 3, markCode: "M" },
              { part: "d", reasoning: "A cumulative probability of 0.9332 means 93.32% lie at or below the corresponding score, so 82 is about the 93.32nd percentile.", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) $z=1.5$. (b) Approximately $68\\%$. (c) $6.68\\%$ above 82. (d) A score of 82 is about the 93.32nd percentile; about 93.32% score at or below it.",
            commonErrors: ["Using 0.9332 as the percent above 82 instead of taking its complement.", "Calling the 0.9332 cumulative probability a z-score rather than a percentile proportion."],
          },
        },
      ],
    },
  ],
};
