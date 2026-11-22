import type { Lesson } from "../../../types.ts";

export const lesson81: Lesson = {
  id: "alg2-u8-8-1",
  code: "8-1",
  title: "Probability Rules",
  goal: "I CAN use probability rules, conditional probability, and independence to analyze events and data.",
  standards: ["HSS-CP.A.1", "HSS-CP.A.2", "HSS-CP.A.3", "HSS-CP.A.4", "HSS-CP.A.5", "HSS-CP.B.6", "HSS-CP.B.7"],
  vocabulary: [
    { term: "Sample space", definition: "The set of all possible outcomes of a chance process." },
    { term: "Complement", definition: "The event consisting of all outcomes in the sample space that are not in a specified event." },
    { term: "Mutually exclusive events", definition: "Events that cannot occur together; their intersection is empty." },
    { term: "Conditional probability", definition: "The probability that event B occurs when it is known that event A has occurred, written $P(B\\mid A)$." },
    { term: "Independent events", definition: "Events for which knowing that one occurred does not change the probability of the other." },
    { term: "Two-way table", definition: "A table that organizes counts for two categorical variables and their combinations." },
    { term: "Tree diagram", definition: "A branching diagram that shows successive outcomes and their probabilities." },
  ],
  concepts: [
    {
      id: "alg2-u8-probability-rules",
      title: "Sample spaces and probability rules",
      skill: "Represent chance outcomes and use addition, complement, and mutually exclusive-event rules.",
      lesson: {
        sections: [
          {
            heading: "Sample spaces and event probabilities",
            body: "A **sample space** $S$ lists every possible outcome of a chance process. For equally likely outcomes, $P(A)=\\dfrac{\\text{number of outcomes in }A}{\\text{number of outcomes in }S}$. Probabilities range from 0 (impossible) to 1 (certain). For a fair six-sided die, $S=\\{1,2,3,4,5,6\\}$.",
          },
          {
            heading: "Addition rule and complements",
            body: "To find the probability that $A$ **or** $B$ occurs, account for any outcomes counted in both events: $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$. If events are mutually exclusive, $P(A\\cap B)=0$, so their probabilities add directly. The complement $A^c$ contains outcomes outside $A$, and $P(A^c)=1-P(A)$.",
          },
        ],
        keyFormulas: [
          { name: "Addition rule", statement: "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$" },
          { name: "Mutually exclusive addition rule", statement: "If $A\\cap B=\\varnothing$, then $P(A\\cup B)=P(A)+P(B)$." },
          { name: "Complement rule", statement: "$P(A^c)=1-P(A)$" },
        ],
        workedExample: {
          problem: "A number is selected uniformly from $1$ through $10$. Let $A$ be the event that it is even and $B$ the event that it is greater than $7$. Find $P(A\\cup B)$ and $P((A\\cup B)^c)$.",
          solution: "$A=\\{2,4,6,8,10\\}$ and $B=\\{8,9,10\\}$. Their intersection is $\\{8,10\\}$, so $P(A)=\\frac{5}{10}$, $P(B)=\\frac{3}{10}$, and $P(A\\cap B)=\\frac{2}{10}$. Thus $P(A\\cup B)=\\frac{5}{10}+\\frac{3}{10}-\\frac{2}{10}=\\frac{6}{10}=0.6$. Its complement has probability $1-0.6=0.4$.",
        },
      },
      questions: [
        {
          id: "alg2-u8-probability-rules-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A fair six-sided number cube is rolled once. What is the probability of rolling an even number?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{5}{6}$" },
              { id: "b", text: "$\\frac{2}{3}$" },
              { id: "c", text: "$\\frac{1}{3}$" },
              { id: "d", text: "$\\frac{1}{2}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Equally likely outcomes", statement: "For equally likely outcomes, probability is favorable outcomes divided by total outcomes." },
              { kind: "definition", name: "Sample space", statement: "The die sample space is $\\{1,2,3,4,5,6\\}$." },
            ],
            steps: [
              { reasoning: "The even outcomes are $2,4,6$, so there are three favorable outcomes out of six equally likely outcomes.", working: "P(\\text{even})=\\frac{3}{6}=\\frac{1}{2}", marks: 2, markCode: "A" },
            ],
            finalAnswer: "**(d)** $\\frac{1}{2}$",
            commonErrors: ["Counting only the even outcomes and reporting 3 instead of dividing by all 6 outcomes."],
          },
        },
        {
          id: "alg2-u8-probability-rules-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Events $A$ and $B$ have $P(A)=0.42$, $P(B)=0.31$, and $P(A\\cap B)=0.13$. Find $P(A\\cup B)$.",
          response: { type: "numeric", parts: [{ label: "$P(A\\cup B)$", answer: 0.6, tolerance: 0.0001 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Addition rule", statement: "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$." },
            ],
            steps: [
              { reasoning: "Use the addition rule and subtract the overlap because it was counted in both event probabilities.", working: "P(A\\cup B)=0.42+0.31-0.13", marks: 2, markCode: "M" },
              { reasoning: "Evaluate the expression to obtain the probability of at least one event.", working: "P(A\\cup B)=0.60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.60$",
            commonErrors: ["Adding $0.42+0.31$ without subtracting the overlap."],
          },
        },
        {
          id: "alg2-u8-probability-rules-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "One integer is selected uniformly from $1$ through $10$. Let $A$ be the event that the integer is odd and $B$ the event that it is prime. Find $P(A\\cup B)$ and decide whether $A$ and $B$ are mutually exclusive. Justify your decision.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Addition rule", statement: "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$." },
              { kind: "definition", name: "Mutually exclusive", statement: "Events are mutually exclusive exactly when their intersection is empty." },
            ],
            steps: [
              { reasoning: "List the event outcomes in the stated sample space.", working: "A=\\{1,3,5,7,9\\},\\quad B=\\{2,3,5,7\\}", marks: 1, markCode: "M" },
              { reasoning: "Identify the shared outcomes to avoid double-counting them.", working: "A\\cap B=\\{3,5,7\\},\\quad P(A\\cap B)=\\frac{3}{10}", marks: 1, markCode: "M" },
              { reasoning: "Apply the addition rule to find the probability of either event.", working: "P(A\\cup B)=\\frac{5}{10}+\\frac{4}{10}-\\frac{3}{10}=\\frac{6}{10}=0.6", marks: 1, markCode: "A" },
              { reasoning: "The intersection contains outcomes, so the events can occur together and are not mutually exclusive.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$P(A\\cup B)=0.6$; the events are **not mutually exclusive** because $A\\cap B=\\{3,5,7\\}$. ",
            commonErrors: ["Assuming odd and prime are mutually exclusive because 2 is the only even prime."],
          },
        },
        {
          id: "alg2-u8-probability-rules-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An integer is selected at random from $1$ through $12$, with each integer equally likely. Let $A$ be the event that the integer is a multiple of $3$, and let $B$ be the event that the integer is greater than $8$.",
          parts: [
            { label: "a", prompt: "List the sample space and the outcomes in $A$. Find $P(A)$.", marks: 2 },
            { label: "b", prompt: "List the outcomes in $B$ and find $P(B)$.", marks: 2 },
            { label: "c", prompt: "Find $P(A\\cup B)$ using the addition rule.", marks: 2 },
            { label: "d", prompt: "Find the probability that neither event occurs, and explain why $A$ and $B$ are not mutually exclusive.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Equally likely probability", statement: "$P(E)=\\frac{|E|}{|S|}$ for a finite equally likely sample space $S$." },
              { kind: "law", name: "Addition rule", statement: "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$." },
              { kind: "law", name: "Complement rule", statement: "$P((A\\cup B)^c)=1-P(A\\cup B)$." },
            ],
            steps: [
              { part: "a", reasoning: "There are twelve equally likely outcomes; the multiples of 3 are 3, 6, 9, and 12.", working: "S=\\{1,2,3,4,5,6,7,8,9,10,11,12\\},\\quad A=\\{3,6,9,12\\},\\quad P(A)=\\frac{4}{12}=\\frac{1}{3}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "The integers greater than 8 are 9, 10, 11, and 12.", working: "B=\\{9,10,11,12\\},\\quad P(B)=\\frac{4}{12}=\\frac{1}{3}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "The intersection consists of 9 and 12, so subtract its probability once when adding the event probabilities.", working: "A\\cap B=\\{9,12\\},\\quad P(A\\cup B)=\\frac{4}{12}+\\frac{4}{12}-\\frac{2}{12}=\\frac{6}{12}=\\frac{1}{2}", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Use the complement rule for neither event. Since the intersection is nonempty, the events are not mutually exclusive.", working: "P((A\\cup B)^c)=1-\\frac{1}{2}=\\frac{1}{2}", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) $S=\\{1,\\ldots,12\\}$, $A=\\{3,6,9,12\\}$, $P(A)=\\frac{1}{3}$. (b) $B=\\{9,10,11,12\\}$, $P(B)=\\frac{1}{3}$. (c) $P(A\\cup B)=\\frac{1}{2}$. (d) Neither: $\\frac{1}{2}$; not mutually exclusive because $A\\cap B=\\{9,12\\}$. ",
            commonErrors: ["Double-counting 9 and 12 when adding $P(A)$ and $P(B)$."],
          },
        },
      ],
    },
    {
      id: "alg2-u8-conditional-independence",
      title: "Conditional probability and independence",
      skill: "Calculate conditional probabilities from tables and trees, and test for independence.",
      lesson: {
        sections: [
          {
            heading: "Conditioning changes the reference group",
            body: "Conditional probability asks for the chance of $B$ **among outcomes where $A$ is already known to have occurred**. Thus $P(B\\mid A)=\\dfrac{P(A\\cap B)}{P(A)}$ when $P(A)>0$. In a two-way table, restrict attention to the row or column named after the conditioning bar, then divide the relevant intersection count by that row or column total.",
          },
          {
            heading: "Trees and independence",
            body: "A tree diagram displays successive stages. Multiply probabilities along one path to find the probability of all outcomes on that path, and add probabilities of different paths that meet the event. Events $A$ and $B$ are independent when $P(B\\mid A)=P(B)$; equivalently, $P(A\\cap B)=P(A)P(B)$. With dependent draws, update the branch probabilities after the first outcome.",
          },
        ],
        keyFormulas: [
          { name: "Conditional probability", statement: "$P(B\\mid A)=\\dfrac{P(A\\cap B)}{P(A)}$ for $P(A)>0$." },
          { name: "Independence test", statement: "$A$ and $B$ are independent if and only if $P(A\\cap B)=P(A)P(B)$." },
          { name: "Tree path rule", statement: "Multiply probabilities along a path; add probabilities for disjoint paths in the event." },
        ],
        workedExample: {
          problem: "A club has 30 students. Of 18 students who ride the bus, 6 are late; of 12 students who do not ride the bus, 2 are late. Find $P(\\text{late}\\mid\\text{bus})$ and determine whether being late and riding the bus are independent.",
          solution: "Among bus riders, $6$ of $18$ are late, so $P(\\text{late}\\mid\\text{bus})=\\frac{6}{18}=\\frac{1}{3}$. Overall, $8$ of $30$ are late, so $P(\\text{late})=\\frac{8}{30}=\\frac{4}{15}$. Since $\\frac{1}{3}\\ne\\frac{4}{15}$, the events are not independent.",
        },
      },
      questions: [
        {
          id: "alg2-u8-conditional-independence-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The two-way table shows students' transportation and tardiness. What is the probability that a student is late, given that the student rides the bus?\n\n| | Late | Not late | Total |\n|---|---:|---:|---:|\n| Bus | 6 | 12 | 18 |\n| Not bus | 2 | 10 | 12 |\n| Total | 8 | 22 | 30 |",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{6}{8}=\\frac{3}{4}$" },
              { id: "b", text: "$\\frac{6}{30}$" },
              { id: "c", text: "$\\frac{6}{18}=\\frac{1}{3}$" },
              { id: "d", text: "$\\frac{8}{30}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Conditional probability", statement: "$P(B\\mid A)$ uses the outcomes in $A$ as its reference group." },
            ],
            steps: [
              { reasoning: "The condition is that the student rides the bus, so use the bus-row total, 18, as the denominator.", working: "P(\\text{late}\\mid\\text{bus})=\\frac{6}{18}=\\frac{1}{3}", marks: 2, markCode: "A" },
            ],
            finalAnswer: "**(c)** $\\frac{1}{3}$",
            commonErrors: ["Using the total number of students, 30, instead of the number of bus riders, 18."],
          },
        },
        {
          id: "alg2-u8-conditional-independence-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Events $A$ and $B$ satisfy $P(A)=0.60$ and $P(B\\mid A)=0.25$. Find $P(A\\cap B)$. ",
          response: { type: "numeric", parts: [{ label: "$P(A\\cap B)$", answer: 0.15, tolerance: 0.0001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Conditional probability", statement: "$P(B\\mid A)=\\frac{P(A\\cap B)}{P(A)}$, so $P(A\\cap B)=P(A)P(B\\mid A)$." },
            ],
            steps: [
              { reasoning: "Rearrange the conditional probability relationship to find the joint probability.", working: "P(A\\cap B)=P(A)P(B\\mid A)", marks: 1, markCode: "M" },
              { reasoning: "Substitute the given probabilities.", working: "P(A\\cap B)=0.60(0.25)", marks: 1, markCode: "M" },
              { reasoning: "Multiply to obtain the probability that both events occur.", working: "P(A\\cap B)=0.15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.15$",
            commonErrors: ["Adding the two probabilities instead of multiplying the conditional probability by $P(A)$."],
          },
        },
        {
          id: "alg2-u8-conditional-independence-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Events $A$ and $B$ have $P(A)=0.40$, $P(B)=0.50$, and $P(A\\cap B)=0.18$. Are the events independent? Show a valid test and explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Independent events", statement: "$A$ and $B$ are independent if and only if $P(A\\cap B)=P(A)P(B)$." },
            ],
            steps: [
              { reasoning: "Calculate the product required by the independence condition.", working: "P(A)P(B)=0.40(0.50)=0.20", marks: 2, markCode: "M" },
              { reasoning: "Compare the product with the supplied intersection probability.", working: "0.20\\ne 0.18=P(A\\cap B)", marks: 1, markCode: "A" },
              { reasoning: "The equality fails, so the events are not independent.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "No. $P(A)P(B)=0.20$, which is not $P(A\\cap B)=0.18$; therefore $A$ and $B$ are not independent.",
            commonErrors: ["Calling the events independent because their probabilities are close; the equality must be exact."],
          },
        },
        {
          id: "alg2-u8-conditional-independence-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A school records whether 100 students play a school sport and whether they passed a mathematics assessment. The results are shown below.\n\n| | Passed | Not passed | Total |\n|---|---:|---:|---:|\n| Plays a sport | 32 | 8 | 40 |\n| Does not play | 36 | 24 | 60 |\n| Total | 68 | 32 | 100 |",
          parts: [
            { label: "a", prompt: "Find the probability that a randomly selected student passed.", marks: 2 },
            { label: "b", prompt: "Find the probability of passing given that the student plays a sport.", marks: 2 },
            { label: "c", prompt: "Use the independence test to decide whether passing and playing a sport are independent.", marks: 2 },
            { label: "d", prompt: "Describe a tree-diagram path representing a student who plays a sport and passes, and state the probability along that path.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Probability from a table", statement: "A probability from counts is the relevant count divided by the reference-group count." },
              { kind: "formula", name: "Conditional probability", statement: "$P(B\\mid A)=\\frac{P(A\\cap B)}{P(A)}$." },
              { kind: "law", name: "Independence", statement: "$A$ and $B$ are independent if $P(A\\cap B)=P(A)P(B)$." },
              { kind: "property", name: "Tree path rule", statement: "Multiply conditional branch probabilities along a path to obtain its joint probability." },
            ],
            steps: [
              { part: "a", reasoning: "Use all 100 students as the reference group; 68 passed.", working: "P(\\text{pass})=\\frac{68}{100}=0.68", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Restrict the reference group to the 40 students who play a sport; 32 of them passed.", working: "P(\\text{pass}\\mid\\text{sport})=\\frac{32}{40}=0.80", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Compare the joint probability with the product of the two marginal probabilities.", working: "P(\\text{sport}\\cap\\text{pass})=\\frac{32}{100}=0.32,\\quad P(\\text{sport})P(\\text{pass})=0.40(0.68)=0.272", marks: 2, markCode: "R" },
              { part: "d", reasoning: "The branch probabilities are the sport probability followed by the conditional pass probability among sport players; their product equals the joint probability.", working: "P(\\text{sport})P(\\text{pass}\\mid\\text{sport})=0.40(0.80)=0.32", marks: 3, markCode: "M" },
            ],
            finalAnswer: "(a) $0.68$. (b) $0.80$. (c) Not independent: $0.32\\ne0.272$. (d) Sport then pass: $0.40\\times0.80=0.32$. ",
            commonErrors: ["Using the total of 100 rather than 40 for the conditional probability in part (b).", "Multiplying marginal probabilities to find a tree path without using the conditional branch probability."],
          },
        },
      ],
    },
  ],
};
