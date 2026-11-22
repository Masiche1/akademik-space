import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "aahl-u1-lesson-1-1",
  code: "1-1",
  title: "Counting and Binomial Extension",
  goal: "I CAN count arrangements and selections, split rational expressions into partial fractions, and expand $(1+x)^n$ for fractional and negative $n$.",
  standards: ["AHL 1.10", "AHL 1.11"],
  vocabulary: [
    { term: "Permutation", definition: "An ordered arrangement of objects. The number of ordered selections of $r$ from $n$ distinct objects is ${}^nP_r=\\frac{n!}{(n-r)!}$." },
    { term: "Combination", definition: "An unordered selection of objects. The number of ways to choose $r$ from $n$ is $\\binom{n}{r}=\\frac{n!}{r!(n-r)!}$." },
    { term: "Complementary counting", definition: "Counting the outcomes that do not satisfy a condition and subtracting from the total." },
    { term: "Partial fractions", definition: "Writing a proper rational expression as a sum of simpler fractions whose denominators are the factors of the original denominator." },
    { term: "Binomial series", definition: "For any rational $n$, $(1+x)^n=1+nx+\\frac{n(n-1)}{2!}x^2+\\frac{n(n-1)(n-2)}{3!}x^3+\\cdots$, valid for $|x|<1$." },
    { term: "Region of validity", definition: "The set of $x$ for which an infinite series converges to the function; for $(1+ax)^n$ with $n\\notin\\mathbb{N}$ it is $|ax|<1$." },
  ],
  concepts: [
    {
      id: "aahl-u1-counting-principles",
      title: "Permutations, combinations and counting principles",
      skill: "Choose between permutations and combinations and use restrictions, repeated objects and complementary counting.",
      lesson: {
        sections: [
          {
            heading: "Order matters, or it does not",
            body: "If the order of selection matters, count permutations: ${}^nP_r=\\frac{n!}{(n-r)!}$. If only the chosen group matters, count combinations: $\\binom{n}{r}$. When $k$ objects are identical in an arrangement, divide by $k!$: the letters of LEVEL can be arranged in $\\frac{5!}{2!\\,2!}=30$ ways, since both L and E appear twice.",
          },
          {
            heading: "Restrictions and complements",
            body: "For 'at least' conditions it is usually quicker to subtract the cases that fail from the total. For 'must be together', glue the objects into one block, count arrangements of the blocks, then multiply by the internal arrangements of the block. For 'must not be together', subtract the 'together' count from the total. Around a circular table, fix one person to remove rotations: $(n-1)!$ arrangements.",
          },
        ],
        keyFormulas: [
          { name: "Permutations", statement: "${}^nP_r=\\frac{n!}{(n-r)!}$" },
          { name: "Combinations", statement: "$\\binom{n}{r}=\\frac{n!}{r!(n-r)!}$" },
          { name: "Repeated objects", statement: "$\\frac{n!}{a!\\,b!\\cdots}$ arrangements of $n$ objects with repeats $a,b,\\ldots$" },
        ],
        workedExample: {
          problem: "A team of 3 is chosen from 4 girls and 5 boys with at least one girl. How many teams are possible?",
          solution: "Total teams: $\\binom{9}{3}=84$. Teams with no girls: $\\binom{5}{3}=10$. So the number with at least one girl is $84-10=74$.",
        },
      },
      questions: [
        {
          id: "aahl-u1-counting-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In how many different ways can the letters of the word LEVEL be arranged?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$30$" },
              { id: "b", text: "$10$" },
              { id: "c", text: "$120$" },
              { id: "d", text: "$60$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arrangements with repeats", statement: "$n$ objects with repeated groups of sizes $a$ and $b$ can be arranged in $\\frac{n!}{a!\\,b!}$ ways." },
            ],
            steps: [
              { reasoning: "There are 5 letters; L appears twice and E appears twice, so divide $5!$ by $2!$ twice.", working: "\\frac{5!}{2!\\,2!}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\frac{120}{4}=30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $30$",
            commonErrors: ["Using $5!$ and ignoring the repeats.", "Dividing by only one factor of $2!$, giving 60."],
          },
        },
        {
          id: "aahl-u1-counting-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A committee of 4 people is chosen from 5 men and 4 women. Find the number of possible committees that contain at least 2 women.",
          response: { type: "numeric", parts: [{ label: "Number of committees", answer: 81 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Complementary counting", statement: "Number satisfying a condition = total $-$ number failing it." },
              { kind: "formula", name: "Combinations", statement: "$\\binom{n}{r}=\\frac{n!}{r!(n-r)!}$" },
            ],
            steps: [
              { reasoning: "Count all committees, then those with 0 or 1 woman, which fail 'at least 2 women'.", working: "\\binom{9}{4}=126,\\quad \\binom{5}{4}=5,\\quad \\binom{4}{1}\\binom{5}{3}=40", marks: 2, markCode: "M" },
              { reasoning: "Subtract the failing cases from the total.", working: "126-5-40=81", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$81$",
            commonErrors: ["Forgetting the one-woman case.", "Multiplying $\\binom{4}{1}$ by $\\binom{5}{3}$ incorrectly as $\\binom{9}{4}$."],
            examinerNote: "Direct counting also works: $60+20+1=81$ for 2, 3 and 4 women.",
          },
        },
        {
          id: "aahl-u1-counting-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Six people, including Anna and Ben, sit at a circular table. Find the number of seating arrangements in which Anna and Ben are not next to each other. Rotations of the same arrangement are considered identical.",
          response: { type: "numeric", parts: [{ label: "Number of arrangements" , answer: 72 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Circular arrangements", statement: "$n$ objects around a circle can be arranged in $(n-1)!$ ways." },
              { kind: "principle", name: "Block method", statement: "Treat objects that must be adjacent as one block, then multiply by the block's internal orderings." },
            ],
            steps: [
              { reasoning: "Total circular arrangements of 6 people.", working: "(6-1)!=120", marks: 1, markCode: "A" },
              { reasoning: "Anna and Ben together form a block: 5 units around the table, with 2 internal orders.", working: "(5-1)!\\times 2=48", marks: 2, markCode: "M" },
              { reasoning: "Subtract the arrangements where they are adjacent.", working: "120-48=72", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$72$",
            commonErrors: ["Using $6!$ for the total (counting rotations separately).", "Forgetting the factor 2 for the order within the block."],
          },
        },
        {
          id: "aahl-u1-counting-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "Four-digit numbers are formed using four different digits chosen from $\\{1,2,3,4,5,6,7\\}$.",
          parts: [
            { label: "a", prompt: "Find the total number of such four-digit numbers.", marks: 2 },
            { label: "b", prompt: "Find how many of these numbers are even.", marks: 2 },
            { label: "c", prompt: "Find how many of these numbers are greater than $5000$.", marks: 2 },
            { label: "d", prompt: "Find how many of these numbers are both even and greater than $5000$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multiplication principle", statement: "If a task has stages with $m_1, m_2, \\ldots$ choices, the total is $m_1m_2\\cdots$." },
              { kind: "principle", name: "Restricted position first", statement: "Fill the most restricted positions first to avoid overcounting." },
            ],
            steps: [
              { part: "a", reasoning: "Choose the digits in order without repetition.", working: "7\\times6\\times5\\times4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "840", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The last digit must be 2, 4 or 6; then fill the other three places from the remaining 6 digits.", working: "3\\times6\\times5\\times4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "360", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The first digit must be 5, 6 or 7; the other three places follow.", working: "3\\times6\\times5\\times4", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "360", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Split by the first digit. If it is 6 (even), the last digit is 2 or 4.", working: "1\\times 2\\times 5\\times 4=40", marks: 1, markCode: "M" },
              { part: "d", reasoning: "If the first digit is 5 or 7 (odd), the last digit is one of 2, 4, 6.", working: "2\\times 3\\times 5\\times 4=120", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Add the disjoint cases.", working: "40+120=160", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $840$ (b) $360$ (c) $360$ (d) $160$",
            commonErrors: ["In (d), multiplying $3\\times3\\times\\ldots$ and double counting digit 6 as both first and last.", "Allowing repeated digits."],
            examinerNote: "Part (d) is the discriminating part: the overlap in the digit 6 forces a case split.",
          },
        },
        {
          id: "aahl-u1-counting-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In how many different ways can the letters of the word BANANA be arranged?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$120$" },
              { id: "b", text: "$720$" },
              { id: "c", text: "$60$" },
              { id: "d", text: "$360$" },
            ],
            correctChoiceIc: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arrangements with repeats", statement: "$n$ objects with repeated groups of sizes $a$ and $b$ can be arranged in $\\frac{n!}{a!\\,b!}$ ways." },
            ],
            steps: [
              { reasoning: "BANANA has 6 letters; A appears 3 times and N appears 2 times.", working: "\\frac{6!}{3!\\,2!}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "\\frac{720}{12}=60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $60$",
            commonErrors: ["Using $6!=720$ and ignoring the repeats.", "Dividing by $3!$ only, giving $120$."],
          },
        },
        {
          id: "aahl-u1-counting-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A committee of 5 is chosen from 6 men and 4 women. Find the number of committees that contain exactly 2 women.",
          response: { type: "numeric", parts: [{ label: "Number of committees", answer: 120 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Combinations", statement: "$\\binom{n}{r}=\\frac{n!}{r!(n-r)!}$ counts unordered selections." },
            ],
            steps: [
              { reasoning: "Choose the 2 women from 4 and the 3 men from 6 independently.", working: "\\binom{4}{2}\\binom{6}{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate each combination.", working: "6\\times20", marks: 1, markCode: "M" },
              { reasoning: "Multiply.", working: "6\\times20=120", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$120$",
            commonErrors: ["Choosing 3 women and 2 men instead.", "Adding the two combinations instead of multiplying."],
          },
        },
        {
          id: "aahl-u1-counting-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Evaluate ${}^7P_3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$210$" },
              { id: "b", text: "$120$" },
              { id: "c", text: "$343$" },
              { id: "d", text: "$35$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Permutations", statement: "${}^nP_r=\\frac{n!}{(n-r)!}=n(n-1)\\cdots(n-r+1)$." },
            ],
            steps: [
              { reasoning: "Write out the falling product of 3 terms.", working: "7\\times6\\times5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "210", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $210$",
            commonErrors: ["Computing $7^3=343$.", "Using $\\binom{7}{3}=35$, which counts unordered selections."],
          },
        },
        {
          id: "aahl-u1-counting-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "How many distinct arrangements are there of the letters in the word STATS?",
          response: { type: "numeric", parts: [{ label: "Number of arrangements", answer: 30 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arrangements with repeats", statement: "$\\frac{n!}{a!\\,b!}$ for $n$ objects with repeat groups $a$ and $b$." },
            ],
            steps: [
              { reasoning: "STATS has 5 letters; S appears twice and T appears twice.", working: "\\frac{5!}{2!\\,2!}", marks: 1, markCode: "M" },
              { reasoning: "Substitute $5!=120$ and $2!\\,2!=4$.", working: "\\frac{120}{4}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30$",
            commonErrors: ["Counting as $5!=120$.", "Dividing by only one factor of $2!$, giving $60$."],
          },
        },
        {
          id: "aahl-u1-counting-q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "Four-digit codes are formed using four different digits chosen from $\\{1,2,3,4,5,6,7,8,9\\}$.",
          parts: [
            { label: "a", prompt: "Find the total number of codes.", marks: 2 },
            { label: "b", prompt: "Find how many codes are even.", marks: 2 },
            { label: "c", prompt: "Find how many codes are greater than $6000$.", marks: 2 },
            { label: "d", prompt: "Find how many codes are both even and greater than $6000$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multiplication principle", statement: "Fill positions in order; each position has a number of choices equal to the remaining digits." },
              { kind: "principle", name: "Restricted position first", statement: "Fix the most restricted digit (the last for even codes, the first for large codes) before filling the rest." },
            ],
            steps: [
              { part: "a", reasoning: "Choose each of the four digits in turn without repetition.", working: "9\\times8\\times7\\times6", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "3024", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The last digit must be one of 2, 4, 6, 8; then the other three positions use 8, 7, 6 remaining digits.", working: "4\\times8\\times7\\times6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "1344", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The first digit must be 7, 8 or 9; the remaining positions follow.", working: "3\\times8\\times7\\times6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "1008", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Case first digit 8: the last digit is one of the 3 remaining even digits, then 7 and 6 choices for the middle.", working: "1\\times3\\times7\\times6=126", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Cases first digit 7 or 9 (each odd): the last digit is one of 4 even digits, then 7 and 6 choices for the middle.", working: "2\\times4\\times7\\times6=336", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Add the disjoint cases.", working: "126+336=462", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3024$ (b) $1344$ (c) $1008$ (d) $462$",
            commonErrors: ["In (d), choosing the first digit and last digit independently and double counting digit 8.", "Using 9 choices for every position, which allows repeated digits."],
            examinerNote: "In (d) the digit 8 can serve as either the first or the last digit, so a case split on the first digit is required.",
          },
        },
        {
          id: "aahl-u1-counting-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 3,
          stem: "In how many ways can 8 people be divided into two groups of 4, where the groups are not labelled?",
          response: { type: "numeric", parts: [{ label: "Number of divisions", answer: 35 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Combinations", statement: "$\\binom{8}{4}=70$ chooses one group; the remaining 4 people form the other group." },
            ],
            steps: [
              { reasoning: "Choose the members of one group; the other group is then determined.", working: "\\binom{8}{4}=70", marks: 1, markCode: "M" },
              { reasoning: "Each division is counted twice — once for each choice of 'first' group — because the groups are unlabelled.", working: "\\frac{70}{2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "35", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$35$",
            commonErrors: ["Answering $70$ and forgetting the double count.", "Dividing by $4!$ as well, which would be wrong here."],
          },
        },
        {
          id: "aahl-u1-counting-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Six people sit in a row of six chairs. How many arrangements have two particular people NOT sitting next to each other?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$720$" },
              { id: "b", text: "$240$" },
              { id: "c", text: "$360$" },
              { id: "d", text: "$480$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Complementary counting", statement: "Arrangements with the pair apart = total $-$ arrangements with the pair together." },
            ],
            steps: [
              { reasoning: "Together: treat the pair as one block — 5 units with 2 internal orders, giving $5!\\times2=240$; the total is $6!=720$.", working: "720-240", marks: 1, markCode: "M" },
              { reasoning: "Subtract.", working: "480", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $480$",
            commonErrors: ["Giving $240$, which counts the arrangements where they ARE together.", "Using $(6-1)!$ for the total, as if the seating were circular."],
          },
        },
        {
          id: "aahl-u1-counting-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "How many distinct arrangements of the letters of the word TOMATO are possible?",
          response: { type: "numeric", parts: [{ label: "Number of arrangements", answer: 180 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arrangements with repeats", statement: "$\\frac{n!}{a!\\,b!}$ for $n$ objects with repeat groups $a$ and $b$." },
            ],
            steps: [
              { reasoning: "TOMATO has 6 letters; T and O each appear twice.", working: "\\frac{6!}{2!\\,2!}", marks: 1, markCode: "M" },
              { reasoning: "Substitute $6!=720$ and $2!\\,2!=4$.", working: "\\frac{720}{4}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "180", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$180$",
            commonErrors: ["Using $6!=720$.", "Dividing by $3!$ as if three letters repeated."],
          },
        },
        {
          id: "aahl-u1-counting-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Five people $A$, $B$, $C$, $D$ and $E$ are to be seated in a row of five chairs.",
          parts: [
            { label: "a", prompt: "Find the number of arrangements in which $A$ and $B$ sit together.", marks: 3 },
            { label: "b", prompt: "Find the number of arrangements in which $A$ and $B$ sit together AND $C$ and $D$ sit together.", marks: 2 },
            { label: "c", prompt: "Find the number of arrangements in which $A$ and $B$ sit together but $C$ and $D$ do NOT sit together.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Block method", statement: "Glue objects that must be adjacent into one block, arrange the blocks, then multiply by the block's internal orders." },
              { kind: "principle", name: "Complementary counting", statement: "Subtract the unwanted sub-case from the larger count." },
            ],
            steps: [
              { part: "a", reasoning: "Treat $AB$ as a single block, giving 4 units to arrange.", working: "4!", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The block itself can be ordered as $AB$ or $BA$.", working: "\\times\\,2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Total.", working: "4!\\times2=48", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two blocks $AB$ and $CD$ plus $E$ give 3 units; each block has 2 internal orders.", working: "3!\\times2\\times2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "24", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Start from the 48 arrangements of (a) and subtract those where $CD$ is also together, which is the count of (b).", working: "48-24", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $48$ (b) $24$ (c) $24$",
            commonErrors: ["Forgetting the factor $2$ for the order inside each block.", "In (c), subtracting from $5!$ instead of from the $AB$-together count."],
            examinerNote: "Half of the $AB$-together arrangements also have $CD$ together, which is why (b) is exactly half of (a).",
          },
        },
      ],
    },
    {
      id: "aahl-u1-partial-fractions-binomial",
      title: "Partial fractions and the extended binomial theorem",
      skill: "Decompose rational expressions into partial fractions and expand $(1+x)^n$ for rational $n$ with a region of validity.",
      lesson: {
        sections: [
          {
            heading: "Partial fractions",
            body: "A proper fraction with distinct linear factors in the denominator splits as $\\frac{px+q}{(x-a)(x-b)}=\\frac{A}{x-a}+\\frac{B}{x-b}$. Multiply through by the denominator and substitute $x=a$ and $x=b$ to read off $A$ and $B$ immediately. Always check by recombining.",
          },
          {
            heading: "Binomial series for any index",
            body: "For rational $n$, $(1+x)^n=1+nx+\\frac{n(n-1)}{2!}x^2+\\frac{n(n-1)(n-2)}{3!}x^3+\\cdots$. This series is infinite unless $n$ is a non-negative integer, and it converges only for $|x|<1$. To expand $(1+ax)^n$, replace $x$ by $ax$; the condition becomes $|ax|<1$. For $(a+bx)^n$, first factor out $a^n$ to leave $(1+\\frac{b}{a}x)^n$.",
          },
          {
            heading: "Combining the two",
            body: "Partial fractions turn a hard product such as $\\frac{1}{(1-x)(1-2x)}$ into two terms whose expansions are standard. The combined series is valid only where both expansions are valid, so the more restrictive condition is taken.",
          },
        ],
        keyFormulas: [
          { name: "Binomial series", statement: "$(1+x)^n=1+nx+\\frac{n(n-1)}{2!}x^2+\\frac{n(n-1)(n-2)}{3!}x^3+\\cdots,\\ |x|<1$" },
          { name: "Factoring out a constant", statement: "$(a+bx)^n=a^n\\left(1+\\frac{b}{a}x\\right)^n,\\ \\left|\\frac{bx}{a}\\right|<1$" },
        ],
        workedExample: {
          problem: "Expand $(1+3x)^{-1}$ up to and including the term in $x^2$.",
          solution: "Use $n=-1$ with $x$ replaced by $3x$: $1+(-1)(3x)+\\frac{(-1)(-2)}{2}(3x)^2=1-3x+9x^2$. It is valid for $|3x|<1$, that is $|x|<\\frac13$.",
        },
      },
      questions: [
        {
          id: "aahl-u1-partial-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which is the expansion of $(1+2x)^{-1}$ up to the term in $x^2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1-2x+2x^2$" },
              { id: "b", text: "$1-2x-4x^2$" },
              { id: "c", text: "$1-2x+4x^2$" },
              { id: "d", text: "$1+2x+4x^2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial series", statement: "$(1+u)^{-1}=1-u+u^2-\\cdots$ for $|u|<1$." },
            ],
            steps: [
              { reasoning: "Substitute $u=2x$ into the series for $(1+u)^{-1}$.", working: "1-(2x)+(2x)^2", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "1-2x+4x^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $1-2x+4x^2$",
            commonErrors: ["Writing $(2x)^2$ as $2x^2$.", "Alternating signs incorrectly."],
          },
        },
        {
          id: "aahl-u1-partial-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Express $\\frac{3x+5}{(x+1)(x+3)}$ in the form $\\frac{A}{x+1}+\\frac{B}{x+3}$, where $A$ and $B$ are constants. Find $A$ and $B$.",
          response: { type: "numeric", parts: [{ label: "$A$", answer: 1 }, { label: "$B$", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Partial fractions", statement: "Equate numerators: $3x+5=A(x+3)+B(x+1)$ for all $x$." },
            ],
            steps: [
              { reasoning: "Clear the denominators to form an identity in $x$.", working: "3x+5\\equiv A(x+3)+B(x+1)", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x=-1$: $2=2A$.", working: "A=1", marks: 1, markCode: "A" },
              { reasoning: "Substitute $x=-3$: $-4=-2B$.", working: "B=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A=1$, $B=2$",
            commonErrors: ["Substituting the wrong value of $x$ for each constant.", "Arithmetic error: $3(-3)+5=-4$, not $-14$."],
            examinerNote: "Check: $\\frac{1}{x+1}+\\frac{2}{x+3}=\\frac{(x+3)+2(x+1)}{(x+1)(x+3)}=\\frac{3x+5}{(x+1)(x+3)}$.",
          },
        },
        {
          id: "aahl-u1-partial-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 5,
          stem: "Expand $\\sqrt{1+4x}$ in ascending powers of $x$ up to and including the term in $x^3$. Enter the coefficient of $x^3$, and the value $L$ such that the expansion is valid for $|x|<L$.",
          response: { type: "numeric", parts: [{ label: "Coefficient of $x^3$", answer: 4 }, { label: "Upper limit for $|x|$", answer: 0.25 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial series", statement: "$(1+u)^{1/2}=1+\\frac12u+\\frac{\\frac12\\left(-\\frac12\\right)}{2!}u^2+\\frac{\\frac12\\left(-\\frac12\\right)\\left(-\\frac32\\right)}{3!}u^3+\\cdots,\\ |u|<1$." },
            ],
            steps: [
              { reasoning: "Apply the binomial series with $n=\\frac12$ and $u=4x$.", working: "1+\\tfrac12(4x)+\\frac{\\frac12\\left(-\\frac12\\right)}{2}(4x)^2+\\frac{\\frac12\\left(-\\frac12\\right)\\left(-\\frac32\\right)}{6}(4x)^3", marks: 1, markCode: "M" },
              { reasoning: "Linear term.", working: "2x", marks: 1, markCode: "A" },
              { reasoning: "Quadratic term: $-\\frac18\\times16x^2$.", working: "-2x^2", marks: 1, markCode: "A" },
              { reasoning: "Cubic term: $\\frac{1}{16}\\times 64x^3$.", working: "4x^3", marks: 1, markCode: "A" },
              { reasoning: "The series requires $|4x|<1$.", working: "|x|<\\tfrac14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1+2x-2x^2+4x^3+\\cdots$; coefficient of $x^3$ is $4$; valid for $|x|<\\frac14$.",
            commonErrors: ["Forgetting to raise $4$ to the power in $(4x)^2$ and $(4x)^3$.", "Stating the validity as $|x|<1$."],
          },
        },
        {
          id: "aahl-u1-partial-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "Let $f(x)=\\frac{1}{(1-x)(1-2x)}$. Write the expansion of $f(x)$ as $f(x)=a_0+a_1x+a_2x^2+\\cdots$. This question investigates the sequence $a_n$.",
          parts: [
            { label: "a", prompt: "Find constants $A$ and $B$ such that $f(x)=\\frac{A}{1-x}+\\frac{B}{1-2x}$.", marks: 3 },
            { label: "b", prompt: "Hence find the expansion of $f(x)$ up to and including the term in $x^3$.", marks: 3 },
            { label: "c", prompt: "Show that $a_n=2^{n+1}-1$ for all $n\\ge0$.", marks: 2 },
            { label: "d", prompt: "State the set of values of $x$ for which the expansion of $f(x)$ is valid.", marks: 1 },
            { label: "e", prompt: "By considering the product $(1-3x+2x^2)f(x)$, prove that $a_{n+2}-3a_{n+1}+2a_n=0$ for $n\\ge0$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Partial fractions", statement: "Clear denominators to give an identity, then substitute convenient values of $x$." },
              { kind: "formula", name: "Geometric/binomial series", statement: "$\\frac{1}{1-u}=1+u+u^2+\\cdots$ for $|u|<1$." },
              { kind: "principle", name: "Equating coefficients", statement: "Two power series are equal exactly when the coefficients of each power of $x$ are equal." },
            ],
            steps: [
              { part: "a", reasoning: "Form the identity from the common denominator.", working: "1\\equiv A(1-2x)+B(1-x)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Put $x=1$: $1=-A$.", working: "A=-1", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Put $x=\\tfrac12$: $1=\\tfrac12B$.", working: "B=2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Expand each fraction using the standard series.", working: "-(1+x+x^2+x^3)+2(1+2x+4x^2+8x^3)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Combine like terms.", working: "1+3x+7x^2+15x^3", marks: 2, markCode: "A" },
              { part: "c", reasoning: "The coefficient of $x^n$ in $-\\frac{1}{1-x}$ is $-1$ and in $\\frac{2}{1-2x}$ is $2\\cdot2^n$.", working: "a_n=2\\cdot2^n-1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify using index laws.", working: "a_n=2^{n+1}-1", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Both $|x|<1$ and $|2x|<1$ are needed, so the more restrictive condition applies.", working: "|x|<\\tfrac12", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Since $(1-x)(1-2x)=1-3x+2x^2$, the product equals $1$ for all valid $x$.", working: "(1-3x+2x^2)(a_0+a_1x+a_2x^2+\\cdots)=1", marks: 1, markCode: "M" },
              { part: "e", reasoning: "The coefficient of $x^{n+2}$ on the left is $a_{n+2}-3a_{n+1}+2a_n$.", working: "a_{n+2}-3a_{n+1}+2a_n", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The right-hand side $1$ has no $x^{n+2}$ term for $n\\ge0$, so the coefficient is zero.", working: "a_{n+2}-3a_{n+1}+2a_n=0", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $A=-1$, $B=2$ (b) $1+3x+7x^2+15x^3$ (c) $a_n=2^{n+1}-1$ (d) $|x|<\\frac12$ (e) proved by equating coefficients.",
            commonErrors: ["Giving the validity as $|x|<1$ rather than the stricter $|x|<\\frac12$.", "Forgetting the factor $2$ in $\\frac{2}{1-2x}$ when finding the general coefficient."],
            examinerNote: "Check of (e): $7-3(3)+2(1)=0$ and $15-3(7)+2(3)=0$.",
          },
        },
        {
          id: "aahl-u1-partial-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which is the expansion of $(1-3x)^{-1}$ up to and including the term in $x^2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1-3x-9x^2$" },
              { id: "b", text: "$1+3x+9x^2$" },
              { id: "c", text: "$1+3x-9x^2$" },
              { id: "d", text: "$1-3x+9x^2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial series", statement: "$(1+u)^{-1}=1-u+u^2-\\cdots$ for $|u|<1$." },
            ],
            steps: [
              { reasoning: "Substitute $u=-3x$ into the series for $(1+u)^{-1}$.", working: "1-(-3x)+(-3x)^2", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "1+3x+9x^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $1+3x+9x^2$",
            commonErrors: ["Forgetting to square $-3x$, giving $-9x^2$.", "Keeping the signs of $-3x$ instead of flipping them."],
          },
        },
        {
          id: "aahl-u1-partial-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Express $\\frac{5x+7}{(x-1)(x+2)}$ in the form $\\frac{A}{x-1}+\\frac{B}{x+2}$, where $A$ and $B$ are constants. Find $A$ and $B$.",
          response: { type: "numeric", parts: [{ label: "$A$", answer: 4 }, { label: "$B$", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Partial fractions", statement: "Equate numerators: $5x+7\\equiv A(x+2)+B(x-1)$ for all $x$." },
            ],
            steps: [
              { reasoning: "Clear the denominators to form an identity in $x$.", working: "5x+7\\equiv A(x+2)+B(x-1)", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x=1$: $12=3A$.", working: "A=4", marks: 1, markCode: "A" },
              { reasoning: "Substitute $x=-2$: $-3=-3B$.", working: "B=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A=4$, $B=1$",
            commonErrors: ["Substituting the wrong value of $x$ for each constant.", "Sign error: $5(-2)+7=-3$, not $-13$."],
            examinerNote: "Check: $\\frac{4}{x-1}+\\frac{1}{x+2}=\\frac{4(x+2)+(x-1)}{(x-1)(x+2)}=\\frac{5x+7}{(x-1)(x+2)}$.",
          },
        },
        {
          id: "aahl-u1-partial-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The coefficient of $x^2$ in the expansion of $(1+2x)^4$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6$" },
              { id: "b", text: "$16$" },
              { id: "c", text: "$24$" },
              { id: "d", text: "$12$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial coefficient", statement: "The coefficient of $x^r$ in $(1+x)^n$ is $\\binom{n}{r}$." },
            ],
            steps: [
              { reasoning: "Choose which 2 of the 4 factors contribute $2x$, then multiply by $2^2$.", working: "\\binom{4}{2}\\times4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "6\\times4=24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $24$",
            commonErrors: ["Using $\\binom{4}{2}=6$ and forgetting the factor $2^2$.", "Computing $\\binom{4}{2}\\times2=12$."],
          },
        },
        {
          id: "aahl-u1-partial-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Expand $(1-2x)^{-2}$ in ascending powers of $x$ up to and including the term in $x^2$. Enter the coefficient of $x^2$.",
          response: { type: "numeric", parts: [{ label: "Coefficient of $x^2$", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial series", statement: "$(1+u)^n=1+nu+\\frac{n(n-1)}{2!}u^2+\\cdots$ for $|u|<1$." },
            ],
            steps: [
              { reasoning: "Apply the binomial series with $n=-2$ and $u=-2x$.", working: "1+(-2)(-2x)+\\frac{(-2)(-3)}{2}(-2x)^2", marks: 1, markCode: "M" },
              { reasoning: "The quadratic coefficient is $3\\times4$.", working: "3\\times(-2)^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1+4x+12x^2+\\cdots$; coefficient of $x^2$ is $12$.",
            commonErrors: ["Using $(-2x)^2=-4x^2$.", "Forgetting that $(-2)(-3)=6$, not $-6$."],
          },
        },
        {
          id: "aahl-u1-partial-q9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Let $f(x)=\\frac{1}{(1-x)(1-3x)}$.",
          parts: [
            { label: "a", prompt: "Find constants $A$ and $B$ such that $f(x)=\\frac{A}{1-x}+\\frac{B}{1-3x}$.", marks: 3 },
            { label: "b", prompt: "Hence find the expansion of $f(x)$ up to and including the term in $x^2$.", marks: 3 },
            { label: "c", prompt: "State the set of values of $x$ for which the expansion is valid.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Partial fractions", statement: "Clear denominators to get an identity, then substitute convenient values of $x$." },
              { kind: "formula", name: "Binomial series", statement: "$\\frac{1}{1-u}=1+u+u^2+\\cdots$ for $|u|<1$." },
            ],
            steps: [
              { part: "a", reasoning: "Form the identity from the common denominator.", working: "1\\equiv A(1-3x)+B(1-x)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Put $x=1$: $1=-2A$.", working: "A=-\\tfrac12", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Put $x=\\tfrac13$: $1=\\tfrac23B$.", working: "B=\\tfrac32", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Expand each fraction using the geometric series.", working: "-\\tfrac12(1+x+x^2)+\\tfrac32(1+3x+9x^2)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Combine like terms: constant $-\\frac12+\\frac32=1$, $x$ term $-\\frac12+\\frac92=4$, $x^2$ term $-\\frac12+\\frac{27}{2}=13$.", working: "1+4x+13x^2", marks: 2, markCode: "A" },
              { part: "c", reasoning: "The stricter condition $|3x|<1$ dominates $|x|<1$.", working: "|x|<\\tfrac13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $A=-\\frac12$, $B=\\frac32$ (b) $1+4x+13x^2$ (c) $|x|<\\frac13$",
            commonErrors: ["Stating the validity as $|x|<1$ instead of $|x|<\\frac13$.", "Sign error in $A$: $1=-2A$ gives $A=-\\frac12$, not $\\frac12$."],
          },
        },
        {
          id: "aahl-u1-partial-q10",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "The coefficient of $x^2$ in the expansion of $\\sqrt{1+x}$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-\\frac1{16}$" },
              { id: "b", text: "$\\frac18$" },
              { id: "c", text: "$-\\frac18$" },
              { id: "d", text: "$-\\frac14$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial coefficient", statement: "The coefficient of $x^2$ in $(1+x)^n$ is $\\frac{n(n-1)}{2!}$." },
            ],
            steps: [
              { reasoning: "Set $n=\\frac12$: $\\frac{\\frac12\\left(-\\frac12\\right)}{2}=\\frac{-\\frac14}{2}$.", working: "-\\tfrac18", marks: 1, markCode: "M" },
              { reasoning: "State the coefficient.", working: "-\\tfrac18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $-\\frac18$",
            commonErrors: ["Using $n=2$ instead of $n=\\frac12$.", "Forgetting the division by $2!$, giving $-\\frac14$."],
          },
        },
        {
          id: "aahl-u1-partial-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which is the correct partial fraction decomposition of $\\frac{3x-1}{(x-1)(x+1)}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{2}{x-1}+\\frac{1}{x+1}$" },
              { id: "b", text: "$\\frac{1}{x-1}-\\frac{2}{x+1}$" },
              { id: "c", text: "$\\frac{3}{x-1}-\\frac{2}{x+1}$" },
              { id: "d", text: "$\\frac{1}{x-1}+\\frac{2}{x+1}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Partial fractions", statement: "If $\\frac{3x-1}{(x-1)(x+1)}=\\frac{A}{x-1}+\\frac{B}{x+1}$ then $3x-1\\equiv A(x+1)+B(x-1)$." },
            ],
            steps: [
              { reasoning: "Substitute $x=1$ and $x=-1$ into the identity.", working: "x=1:\\ 2=2A;\\quad x=-1:\\ -4=-2B", marks: 1, markCode: "M" },
              { reasoning: "$A=1$ and $B=2$.", working: "A=1,\\ B=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\frac{1}{x-1}+\\frac{2}{x+1}$",
            commonErrors: ["Swapping $A$ and $B$.", "Sign error in $B$: $-4=-2B$ gives $B=2$, not $-2$."],
          },
        },
        {
          id: "aahl-u1-partial-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the coefficient of $x^3$ in the expansion of $(1-2x)^5$.",
          response: { type: "numeric", parts: [{ label: "Coefficient of $x^3$", answer: -80 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Binomial coefficient", statement: "The coefficient of $x^r$ in $(a+bx)^n$ is $\\binom{n}{r}a^{n-r}b^r$." },
            ],
            steps: [
              { reasoning: "Take $n=5$, $r=3$, $a=1$, $b=-2$.", working: "\\binom{5}{3}\\times1^2\\times(-2)^3", marks: 1, markCode: "M" },
              { reasoning: "$\\binom{5}{3}=10$ and $(-2)^3=-8$.", working: "10\\times(-8)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "-80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-80$",
            commonErrors: ["Dropping the negative sign from $(-2)^3$.", "Using $\\binom{5}{3}=10$ but forgetting it multiplies $(-2)^3$."],
          },
        },
        {
          id: "aahl-u1-partial-q13",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Let $g(x)=\\frac{1}{(1-x)(1+x)}$.",
          parts: [
            { label: "a", prompt: "Find constants $A$ and $B$ such that $g(x)=\\frac{A}{1-x}+\\frac{B}{1+x}$.", marks: 2 },
            { label: "b", prompt: "Hence write down the expansion of $g(x)$ up to and including the term in $x^4$.", marks: 2 },
            { label: "c", prompt: "Prove that the coefficient of $x^{2k+1}$ in the expansion of $g(x)$ is zero for every integer $k\\ge0$.", marks: 2 },
            { label: "d", prompt: "State the coefficient of $x^{20}$ and the coefficient of $x^{21}$ in the expansion of $g(x)$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Partial fractions", statement: "Clear denominators to get an identity, then substitute convenient values of $x$." },
              { kind: "formula", name: "Geometric series", statement: "$\\frac{1}{1-u}=1+u+u^2+\\cdots$ and $\\frac{1}{1+u}=1-u+u^2-\\cdots$ for $|u|<1$." },
              { kind: "principle", name: "Equating coefficients", statement: "Two power series are equal exactly when the coefficients of each power of $x$ are equal." },
            ],
            steps: [
              { part: "a", reasoning: "Form the identity.", working: "1\\equiv A(1+x)+B(1-x)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Put $x=1$: $A=\\frac12$; put $x=-1$: $B=\\frac12$.", working: "A=B=\\tfrac12", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Add the two series: $\\frac12(1+x+x^2+x^3+x^4)+\\frac12(1-x+x^2-x^3+x^4)$.", working: "1+x^2+x^4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Odd powers cancel; even powers have coefficient $\\frac12+\\frac12=1$.", working: "1+x^2+x^4\\quad\\text{(AG)}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The coefficient of $x^{2k+1}$ in $\\frac{1}{1-x}$ is $1$ and in $\\frac{1}{1+x}$ is $-1$; multiplied by $\\frac12$ they sum to zero.", working: "\\tfrac12(1)+\\tfrac12(-1)=0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Hence every odd coefficient is zero for all $k\\ge0$.", working: "0", marks: 1, markCode: "A" },
              { part: "d", reasoning: "20 is even, so its coefficient is 1 by part (c) applied to odd powers only.", working: "x^{20}:\\ 1", marks: 1, markCode: "M" },
              { part: "d", reasoning: "21 is odd, so its coefficient is 0.", working: "x^{21}:\\ 0", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $A=B=\\frac12$ (b) $1+x^2+x^4$ (c) proved — odd coefficients vanish (d) coefficient of $x^{20}$ is $1$; of $x^{21}$ is $0$.",
            commonErrors: ["Claiming the coefficient of every $x^n$ is 1 without restricting to even $n$.", "Forgetting that $\\frac{1}{1+x}$ alternates signs."],
            examinerNote: "In full, $g(x)=1+x^2+x^4+\\cdots$ — the series of even powers only, valid for $|x|<1$.",
          },
        },
      ],
    },
  ],
};
