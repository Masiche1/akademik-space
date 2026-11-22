import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "edm10-u4-lesson-4-3",
  code: "4-3",
  title: "Sets",
  goal: "I CAN use set notation and Venn diagrams to organise information and work out probabilities.",
  standards: ["4MA1 8.8", "4MA1 8.9", "4MA1 8.10"],
  vocabulary: [
    { term: "Universal set", definition: "The set $\\xi$ containing every element being considered." },
    { term: "Union", definition: "$A\\cup B$ is the set of elements in $A$ or $B$ or both." },
    { term: "Intersection", definition: "$A\\cap B$ is the set of elements in both $A$ and $B$." },
    { term: "Complement", definition: "$A'$ is the set of elements in $\\xi$ that are not in $A$." },
    { term: "Subset", definition: "$A\\subset B$ means every element of $A$ is also in $B$." },
    { term: "Empty set", definition: "The set $\\varnothing$ with no elements." },
    { term: "n(A)", definition: "The number of elements in set $A$." },
  ],
  concepts: [
    {
      id: "edm10-u4-set-notation",
      title: "Set notation and Venn diagrams",
      skill: "Use set notation, list sets and complete Venn diagrams from given information.",
      lesson: {
        sections: [
          {
            heading: "Notation",
            body: "A set is written in curly brackets, for example $A=\\{2,3,5,7\\}$. $x\\in A$ means '$x$ is an element of $A$'. $\\cup$ means union (or), $\\cap$ means intersection (and) and $A'$ means not $A$. Every element in the problem belongs to exactly one region of the Venn diagram.",
          },
          {
            heading: "Filling in a Venn diagram",
            body: "Start with the intersection $A\\cap B$ first, then subtract it from each set to get 'only $A$' and 'only $B$'. Finally put the elements that are in neither set outside the circles, but inside the universal set.",
          },
          {
            heading: "Counting",
            body: "$n(A\\cup B)=n(A)+n(B)-n(A\\cap B)$. Also $n(A')=n(\\xi)-n(A)$. Always check that the regions add up to $n(\\xi)$.",
          },
        ],
        keyFormulas: [
          { name: "Union count", statement: "$n(A\\cup B)=n(A)+n(B)-n(A\\cap B)$" },
          { name: "Complement count", statement: "$n(A')=n(\\xi)-n(A)$" },
        ],
        workedExample: {
          problem: "$n(\\xi)=30$, $n(A)=12$, $n(B)=15$, $n(A\\cap B)=4$. Work out $n((A\\cup B)')$.",
          solution: "$n(A\\cup B)=12+15-4=23$. $n((A\\cup B)')=30-23=7$.",
        },
      },
      questions: [
        {
          id: "edm10-u4-set-notation-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 1,
          stem: "What does $A\\cap B$ mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The elements in $A$ or $B$ or both" },
              { id: "b", text: "The elements in $A$ only" },
              { id: "c", text: "The elements in both $A$ and $B$" },
              { id: "d", text: "The elements not in $A$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Intersection", statement: "$A\\cap B$ is the set of elements in both $A$ and $B$." }],
            steps: [{ reasoning: "The symbol $\\cap$ means intersection (and).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** The elements in both $A$ and $B$",
            commonErrors: ["Confusing $\\cap$ with the union symbol $\\cup$."],
          },
        },
        {
          id: "edm10-u4-set-notation-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "$\\xi=\\{1,2,3,4,5,6,7,8,9,10\\}$\n\n$A=\\{2,3,5,7\\}$ (prime numbers)\n\n$B=\\{1,3,5,7,9\\}$ (odd numbers)\n\nWork out $n(A\\cap B)$.",
          response: { type: "numeric", parts: [{ label: "n(A ∩ B)", answer: 3 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Intersection", statement: "$A\\cap B$ contains the elements in both sets." }],
            steps: [
              { reasoning: "Find the elements in both sets by comparing the lists: 2 is not odd, but 3, 5 and 7 are in both.", working: "A\\cap B=\\{3,5,7\\}", marks: 2, markCode: "M" },
              { reasoning: "Count the elements.", working: "n(A\\cap B)=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
            commonErrors: ["Counting the union, which has 6 elements.", "Including 2 or 9."],
          },
        },
        {
          id: "edm10-u4-set-notation-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "There are 40 students in a class. 25 study French, 18 study Spanish and 8 study neither language.\n\nWork out the number of students who study both French and Spanish.",
          response: { type: "numeric", parts: [{ label: "Students studying both", answer: 11 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Union count", statement: "$n(F\\cup S)=n(F)+n(S)-n(F\\cap S)$." }],
            steps: [
              { reasoning: "Students studying at least one language.", working: "40-8=32", marks: 1, markCode: "M" },
              { reasoning: "Write the union formula.", working: "32=25+18-n(F\\cap S)", marks: 1, markCode: "M" },
              { reasoning: "Rearrange.", working: "n(F\\cap S)=43-32", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11$",
            commonErrors: ["Giving $25+18=43$.", "Forgetting the students who study neither."],
          },
        },
        {
          id: "edm10-u4-set-notation-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 8,
          stem: "$\\xi=\\{1,2,3,\\ldots,20\\}$\n\n$A=\\{\\text{multiples of }3\\}$\n\n$B=\\{\\text{even numbers}\\}$\n\nThe Venn diagram has two overlapping circles, $A$ and $B$, inside a rectangle for $\\xi$.",
          parts: [
            { label: "a", prompt: "Work out $n(A\\cap B)$. List the elements of $A\\cap B$ in your working.", marks: 2 },
            { label: "b", prompt: "Work out $n(A\\cup B)$.", marks: 2 },
            { label: "c", prompt: "Work out $n((A\\cup B)')$.", marks: 2 },
            { label: "d", prompt: "A number is chosen at random from $\\xi$. Given that it is even, work out the probability that it is a multiple of 3. Give your answer as a decimal.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) n(A ∩ B)", answer: 3 },
              { label: "(b) n(A ∪ B)", answer: 13 },
              { label: "(c) n((A ∪ B)')", answer: 7 },
              { label: "(d) Probability", answer: 0.3, tolerance: 0.001 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Union count", statement: "$n(A\\cup B)=n(A)+n(B)-n(A\\cap B)$." },
              { kind: "formula", name: "Conditional probability", statement: "$P(A\\mid B)=\\frac{n(A\\cap B)}{n(B)}$." },
            ],
            steps: [
              { part: "a", reasoning: "$A=\\{3,6,9,12,15,18\\}$ and $B=\\{2,4,\\ldots,20\\}$; common elements are even multiples of 3.", working: "A\\cap B=\\{6,12,18\\}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Count.", working: "3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$n(A)=6$, $n(B)=10$.", working: "6+10-3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "13", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Subtract from the universal set.", working: "20-13", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "7", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The sample space is the 10 even numbers, of which 3 are multiples of 3.", working: "\\frac{3}{10}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Convert to a decimal.", working: "0.3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3$ (b) $13$ (c) $7$ (d) $0.3$",
            commonErrors: ["Adding $6+10=16$ without subtracting the overlap.", "Using 20 as the denominator in (d)."],
          },
        },
      ],
    },
    {
      id: "edm10-u4-venn-probability",
      title: "Venn diagrams with probability",
      skill: "Use Venn diagrams to work out probabilities, including conditional probabilities.",
      lesson: {
        sections: [
          {
            heading: "Probability from a Venn diagram",
            body: "If each element is equally likely, $P(A)=\\frac{n(A)}{n(\\xi)}$. For a combined event such as $A\\cap B'$, add up the numbers in the matching regions and divide by the total. Check that all regions add up to the total.",
          },
          {
            heading: "Conditional probability",
            body: "'Given that' reduces the sample space. $P(A\\mid B)=\\frac{n(A\\cap B)}{n(B)}$: the denominator is the number in $B$, not the whole total.",
          },
          {
            heading: "Probabilities in the regions",
            body: "A Venn diagram can contain probabilities instead of numbers. Then $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$, and the four regions always add up to 1.",
          },
        ],
        keyFormulas: [
          { name: "Probability from counts", statement: "$P(A)=\\frac{n(A)}{n(\\xi)}$" },
          { name: "Addition rule", statement: "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$" },
          { name: "Conditional", statement: "$P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)}$" },
        ],
        workedExample: {
          problem: "$P(A)=0.6$, $P(B)=0.5$, $P(A\\cap B)=0.3$. Work out $P(A\\cup B)$.",
          solution: "$0.6+0.5-0.3=0.8$.",
        },
      },
      questions: [
        {
          id: "edm10-u4-venn-probability-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "There are 40 people in a club. 12 of them play tennis. One person is chosen at random. What is the probability that this person plays tennis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{28}{40}$" },
              { id: "b", text: "$\\frac{1}{12}$" },
              { id: "c", text: "$\\frac{12}{28}$" },
              { id: "d", text: "$\\frac{3}{10}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "formula", name: "Probability", statement: "$P(A)=\\frac{n(A)}{n(\\xi)}$" }],
            steps: [
              { reasoning: "Divide the number playing tennis by the total.", working: "\\frac{12}{40}", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "\\frac{3}{10}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\frac{3}{10}$",
            commonErrors: ["Dividing by the number not playing tennis.", "Giving the complement."],
          },
        },
        {
          id: "edm10-u4-venn-probability-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "A Venn diagram for 30 students shows: 7 study history only, 5 study both history and geography, 8 study geography only, and 10 study neither.\n\nA student is chosen at random. Work out the probability that the student studies exactly one of the two subjects. Give your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Probability", answer: 0.5, tolerance: 0.001 }] },
          markscheme: {
            principles: [{ kind: "formula", name: "Probability", statement: "$P=\\frac{\\text{number in region}}{\\text{total}}$" }],
            steps: [
              { reasoning: "Check the total: $7+5+8+10=30$. Exactly one subject means history only or geography only.", working: "7+8=15", marks: 1, markCode: "M" },
              { reasoning: "Divide by the total.", working: "\\frac{15}{30}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac12$ or $0.5$",
            commonErrors: ["Including the 5 who study both.", "Using 20 as the total."],
          },
        },
        {
          id: "edm10-u4-venn-probability-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "For two events $A$ and $B$: $P(A)=0.5$, $P(B)=0.4$ and $P(A\\cap B)=0.15$.\n\nWork out the probability that neither $A$ nor $B$ happens.",
          response: { type: "numeric", parts: [{ label: "P(neither)", answer: 0.25, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Addition rule", statement: "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$." },
              { kind: "law", name: "Complement", statement: "$P((A\\cup B)')=1-P(A\\cup B)$." },
            ],
            steps: [
              { reasoning: "Substitute into the addition rule.", working: "P(A\\cup B)=0.5+0.4-0.15", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.75", marks: 1, markCode: "A" },
              { reasoning: "Subtract from 1.", working: "1-0.75", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "0.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.25$",
            commonErrors: ["Adding without subtracting the overlap, giving $0.1$.", "Giving $P(A\\cup B)=0.75$."],
          },
        },
        {
          id: "edm10-u4-venn-probability-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 8,
          stem: "100 students were asked whether they study Maths (M) and Physics (P). 60 study Maths, 45 study Physics and 20 study neither subject.",
          parts: [
            { label: "a", prompt: "Work out the number of students who study both subjects.", marks: 2 },
            { label: "b", prompt: "A student is chosen at random. Work out the probability that the student studies Maths only.", marks: 2 },
            { label: "c", prompt: "A student who studies Maths is chosen at random. Work out the probability that this student also studies Physics. Give your answer as a decimal to 3 decimal places.", marks: 2 },
            { label: "d", prompt: "Two students are chosen at random without replacement. Work out the probability that neither studies Maths or Physics. Give your answer to 3 significant figures.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Number studying both", answer: 25 },
              { label: "(b) P(Maths only)", answer: 0.35, tolerance: 0.001 },
              { label: "(c) P(Physics | Maths)", answer: 0.417, tolerance: 0.001 },
              { label: "(d) P(both study neither)", answer: 0.0384, tolerance: 0.0002 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Union count", statement: "$n(M\\cup P)=n(M)+n(P)-n(M\\cap P)$." },
              { kind: "formula", name: "Conditional probability", statement: "$P(P\\mid M)=\\frac{n(M\\cap P)}{n(M)}$." },
              { kind: "law", name: "Without replacement", statement: "The second probability has one fewer in the numerator and denominator." },
            ],
            steps: [
              { part: "a", reasoning: "At least one subject: $100-20=80$. Then use the union formula.", working: "80=60+45-n(M\\cap P)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "105-80=25", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Maths only is $60-25=35$.", working: "\\frac{35}{100}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "0.35", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The sample space is the 60 who study Maths.", working: "\\frac{25}{60}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "0.417", marks: 1, markCode: "A" },
              { part: "d", reasoning: "20 study neither; after one is chosen, 19 of 99 remain.", working: "\\frac{20}{100}\\times\\frac{19}{99}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate: $\\frac{380}{9900}=\\frac{19}{495}$.", working: "0.0384", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $25$ (b) $0.35$ (c) $\\frac{5}{12}=0.417$ (d) $\\frac{19}{495}=0.0384$",
            commonErrors: ["Giving 85 for those studying both by adding 60 and 45 and subtracting nothing.", "Dividing by 100 in (c).", "Treating the choices as with replacement in (d)."],
          },
        },
      ],
    },
  ],
};
