import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "pypm-u1-lesson-1-2",
  code: "1-2",
  title: "Multiplication, Division and Fractions",
  goal: "I CAN use times tables, share equally, and understand halves, quarters and equal groups as fractions.",
  standards: [
    "PYP Mathematics: Number",
    "PYP transdisciplinary theme: Sharing the Planet",
    "PYP transdisciplinary theme: How We Express Ourselves",
  ],
  vocabulary: [
    { term: "Multiplication", definition: "Repeated addition — $3 \\times 4$ means $4+4+4$ or $3$ groups of $4$; the answer is the product." },
    { term: "Division", definition: "Sharing an amount into equal groups; $12 \\div 3$ means share $12$ into $3$ equal groups." },
    { term: "Times table", definition: "A list of multiplication facts, e.g. the $5$ times table: $5, 10, 15, 20, \\ldots$" },
    { term: "Equal groups", definition: "Groups that all contain the same number of things — $3$ bags with $4$ apples each." },
    { term: "Fraction", definition: "A part of a whole, written like $\\frac{1}{2}$ or $\\frac{1}{4}$." },
    { term: "Half / Quarter", definition: "Half ($\\frac{1}{2}$) is one of two equal parts; a quarter ($\\frac{1}{4}$) is one of four equal parts." },
  ],
  concepts: [
    {
      id: "pypm-u1l2-c1-times-tables",
      title: "Multiplication and division",
      skill: "Recall times tables, use arrays and equal groups, and share equally.",
      lesson: {
        sections: [
          {
            heading: "Multiplication as equal groups",
            body: "Multiplication means **equal groups**. $3 \\times 4 = 12$ can mean $3$ bags with $4$ apples in each, or $4+4+4$. An **array** shows this visually: $3$ rows of $4$ dots make $12$ dots. Times tables are patterns — the $2$ times table counts in $2$s, the $5$s in $5$s — and knowing them makes multiplying fast.",
          },
          {
            heading: "Division as sharing",
            body: "Division is sharing into **equal groups**. $12 \\div 3 = 4$ means share $12$ sweets among $3$ children — each gets $4$. Division and multiplication are **inverse** operations: $3 \\times 4 = 12$ and $12 \\div 3 = 4$ are the same fact family. If you know your tables, you know your division facts too.",
          },
        ],
        keyFormulas: [
          { name: "Fact family", statement: "$3 \\times 4 = 12$, $4 \\times 3 = 12$, $12 \\div 3 = 4$, $12 \\div 4 = 3$" },
          { name: "Array model", statement: "Rows $\\times$ columns = total" },
        ],
        workedExample: {
          problem: "Share $20$ pencils equally among $4$ pots. How many in each pot?",
          solution: "This is $20 \\div 4$. From the $4$ times table, $4 \\times 5 = 20$, so each pot gets $5$ pencils.",
        },
      },
      questions: [
        {
          id: "pypm-q-u1l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $6 \\times 4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10$" },
              { id: "b", text: "$20$" },
              { id: "c", text: "$24$" },
              { id: "d", text: "$64$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Multiplication as repeated addition", statement: "$6 \\times 4 = 4+4+4+4+4+4 = 24$." },
            ],
            steps: [
              { reasoning: "$6$ groups of $4$ equals $24$.", working: "6\\times4=24", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $24$",
            commonErrors: ["Choosing $10$ — that is $6+4$, not $6 \\times 4$."],
          },
        },
        {
          id: "pypm-q-u1l2c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $35 \\div 5$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Division as sharing", statement: "$35 \\div 5$ asks: $5 \\times ? = 35$." },
            ],
            steps: [
              { reasoning: "Use the $5$ times table: $5 \\times 7 = 35$.", working: "5\\times7=35", marks: 1, markCode: "M" },
              { reasoning: "So $35 \\div 5 = 7$.", working: "35\\div5=7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$",
            commonErrors: ["Counting in $5$s incorrectly and giving $6$ or $8$."],
          },
        },
        {
          id: "pypm-q-u1l2c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "There are $24$ children on a trip. They sit in minibus taxis with $4$ children in each taxi. How many taxis are needed?",
          response: { type: "numeric", parts: [{ label: "Taxis", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Division in context", statement: "Number of groups = total $\\div$ size of each group." },
            ],
            steps: [
              { reasoning: "This is sharing $24$ into groups of $4$: $24 \\div 4$.", working: "24\\div4", marks: 1, markCode: "M" },
              { reasoning: "From the $4$ times table, $4 \\times 6 = 24$.", working: "4\\times6=24", marks: 1, markCode: "M" },
              { reasoning: "So $6$ taxis are needed.", working: "24\\div4=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ taxis",
            commonErrors: ["Computing $24 \\times 4$ instead of dividing — sharing into groups of $4$ is division."],
          },
        },
        {
          id: "pypm-q-u1l2c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A teacher has $36$ stickers to share equally among $6$ tables.",
          parts: [
            { label: "a", prompt: "How many stickers does each table get?", marks: 2 },
            { label: "b", prompt: "If the teacher has $18$ more stickers, how many does each table get now?", marks: 2 },
            { label: "c", prompt: "The $36$ stickers are shared among $4$ tables instead. How many stickers does each table get?", marks: 2 },
            { label: "d", prompt: "Using multiplication to check: $6 \\times \\square = 36$. What number goes in the box?", marks: 1 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Stickers per table", answer: 6 },
              { label: "(b) Stickers per table after more", answer: 9 },
              { label: "(c) Stickers per table, 4 tables", answer: 9 },
              { label: "(d) Missing number in $6 \\times \\square = 36$", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Inverse operations", statement: "Division undoes multiplication: if $6 \\times 6 = 36$ then $36 \\div 6 = 6$." },
            ],
            steps: [
              { part: "a", reasoning: "Share $36$ among $6$ tables: $36 \\div 6$.", working: "36\\div6=6", marks: 1, markCode: "M" },
              { part: "a", reasoning: "From the $6$ times table, each table gets $6$ stickers.", working: "6", marks: 1, markCode: "A" },
              { part: "b", reasoning: "New total $36+18=54$; share $54 \\div 6$.", working: "54\\div6=9", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Answer: $9$ stickers per table.", working: "9", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Share $36$ among $4$ tables: $36 \\div 4$.", working: "36\\div4=9", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Answer: $9$ stickers per table.", working: "9", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Multiplication checks division: $6 \\times 6 = 36$, so the missing number is $6$.", working: "6\\times6=36", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $6$ (b) $9$ (c) $9$ (d) $6$",
            commonErrors: ["In (b), sharing only the $18$ extra stickers instead of the new total $54$."],
          },
        },
        {
          id: "pypm-q-u1l2c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $3 \\times 7$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$10$" },
              { id: "b", text: "$21$" },
              { id: "c", text: "$24$" },
              { id: "d", text: "$37$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Times tables", statement: "$3 \\times 7$ is three sevens: $7+7+7=21$." },
            ],
            steps: [
              { reasoning: "Three groups of seven make $21$.", working: "3\\times7=21", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $21$",
            commonErrors: ["Choosing $10$ — that is $3+7$, not $3 \\times 7$."],
          },
        },
        {
          id: "pypm-q-u1l2c1-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $48 \\div 6$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Division as sharing", statement: "$48 \\div 6$ asks: $6 \\times ? = 48$." },
            ],
            steps: [
              { reasoning: "From the $6$ times table, $6 \\times 8 = 48$.", working: "6\\times8=48", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$8$",
            commonErrors: ["Answering $6$ — that confuses the divisor with the quotient."],
          },
        },
        {
          id: "pypm-q-u1l2c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An array has $4$ rows with $5$ dots in each row. How many dots are there altogether?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9$" },
              { id: "b", text: "$20$" },
              { id: "c", text: "$45$" },
              { id: "d", text: "$54$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Array model", statement: "Rows $\\times$ columns = total: $4 \\times 5 = 20$." },
            ],
            steps: [
              { reasoning: "$4$ rows of $5$ dots: $4 \\times 5 = 20$ dots.", working: "4\\times5=20", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $20$",
            commonErrors: ["Choosing $9$ — that is $4+5$, not multiplication."],
          },
        },
        {
          id: "pypm-q-u1l2c1-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work out $7 \\times 8$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 56 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Times tables", statement: "$7 \\times 8$ is seven eights or eight sevens." },
            ],
            steps: [
              { reasoning: "$7 \\times 8 = 56$.", working: "7\\times8=56", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$56$",
            commonErrors: ["Answering $54$ or $63$ — a times-table slip; check by $8 \\times 7$."],
          },
        },
        {
          id: "pypm-q-u1l2c1-9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Work out $63 \\div 9$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Division as sharing", statement: "$63 \\div 9$ asks: $9 \\times ? = 63$." },
            ],
            steps: [
              { reasoning: "Count in $9$s: $9, 18, 27, 36, 45, 54, 63$ — seven nines.", working: "9\\times7=63", marks: 1, markCode: "M" },
              { reasoning: "So $63 \\div 9 = 7$.", working: "63\\div9=7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$",
            commonErrors: ["Answering $9$ — that is the divisor, not the quotient."],
          },
        },
        {
          id: "pypm-q-u1l2c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which division fact belongs to the same fact family as $5 \\times 6 = 30$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$30 \\div 5 = 6$" },
              { id: "b", text: "$30 \\div 5 = 7$" },
              { id: "c", text: "$30 \\div 3 = 10$" },
              { id: "d", text: "$5 + 6 = 11$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Fact families", statement: "If $5 \\times 6 = 30$ then $30 \\div 5 = 6$ and $30 \\div 6 = 5$." },
            ],
            steps: [
              { reasoning: "Division undoes multiplication: $30 \\div 5 = 6$ uses the same three numbers $30$, $5$, $6$.", working: "30\\div5=6", marks: 1, markCode: "M" },
              { reasoning: "Answer: $30 \\div 5 = 6$ is a fact-family member.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $30 \\div 5 = 6$",
            commonErrors: ["Choosing (c) — $30 \\div 3 = 10$ is true but uses different numbers, not this fact family."],
          },
        },
        {
          id: "pypm-q-u1l2c1-11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out $9 \\times 6$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 54 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Times tables", statement: "$9 \\times 6$ is six nines." },
            ],
            steps: [
              { reasoning: "Six nines: $9+9+9+9+9+9 = 54$.", working: "9\\times6=54", marks: 1, markCode: "M" },
              { reasoning: "Answer: $54$.", working: "54", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$54$",
            commonErrors: ["Answering $45$ or $63$ — recalling the wrong table fact."],
          },
        },
        {
          id: "pypm-q-u1l2c1-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what $20 \\div 4 = 5$ means using the idea of sharing into equal groups.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Division as sharing", statement: "Division shares an amount into equal groups." },
            ],
            steps: [
              { reasoning: "$20 \\div 4$ means share $20$ things among $4$ equal groups.", marks: 1, markCode: "M" },
              { reasoning: "Each group gets $5$ — check with multiplication: $4 \\times 5 = 20$.", working: "4\\times5=20", marks: 1, markCode: "M" },
              { reasoning: "So $20 \\div 4 = 5$ means 4 equal groups of 5 make 20.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Share 20 into 4 equal groups — each group has 5.",
            commonErrors: ["Saying '20 minus 4' — division is sharing equally, not subtracting once."],
          },
        },
        {
          id: "pypm-q-u1l2c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how multiplication and division are inverse operations, using $4 \\times 7 = 28$ as your example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Inverse operations", statement: "Division undoes multiplication and vice versa." },
            ],
            steps: [
              { reasoning: "$4 \\times 7 = 28$ means 4 groups of 7 make 28.", marks: 1, markCode: "M" },
              { reasoning: "Sharing 28 into 4 equal groups gives 7 back: $28 \\div 4 = 7$.", working: "28\\div4=7", marks: 1, markCode: "M" },
              { reasoning: "Multiplication and division use the same fact family — they undo each other.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4 \\times 7 = 28$ and $28 \\div 4 = 7$ are the same fact family.",
            commonErrors: ["Saying they are 'opposite' without showing the undoing relationship."],
          },
        },
        {
          id: "pypm-q-u1l2c1-14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A farmer packs eggs into boxes of $6$. Which number sentence shows how many boxes are needed for $30$ eggs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$30 \\times 6 = 180$" },
              { id: "b", text: "$30 \\div 6 = 5$" },
              { id: "c", text: "$30 + 6 = 36$" },
              { id: "d", text: "$6 - 30$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Division in context", statement: "Number of groups = total $\\div$ size of each group." },
            ],
            steps: [
              { reasoning: "Sharing $30$ eggs into groups of $6$ is $30 \\div 6$.", working: "30\\div6", marks: 1, markCode: "M" },
              { reasoning: "$6 \\times 5 = 30$, so $30 \\div 6 = 5$ boxes.", working: "30\\div6=5", marks: 1, markCode: "M" },
              { reasoning: "Answer: $30 \\div 6 = 5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $30 \\div 6 = 5$",
            commonErrors: ["Choosing (a) — multiplying gives the total eggs, not the number of boxes."],
          },
        },
        {
          id: "pypm-q-u1l2c1-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Work out $96 \\div 8$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Division using times tables", statement: "$96 \\div 8$ asks: $8 \\times ? = 96$." },
            ],
            steps: [
              { reasoning: "Count in $8$s: $8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96$ — twelve eights.", working: "8\\times12=96", marks: 1, markCode: "M" },
              { reasoning: "So $96 \\div 8 = 12$.", working: "96\\div8=12", marks: 1, markCode: "M" },
              { reasoning: "Answer: $12$.", working: "12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$",
            commonErrors: ["Answering $11$ or $13$ — miscounting the eights."],
          },
        },
        {
          id: "pypm-q-u1l2c1-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "There are $24$ children on a school trip. Minibus taxis seat $4$ children each. How many taxis are needed? Check your answer using multiplication and explain your thinking.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Division in context", statement: "Number of groups = total $\\div$ group size; check with multiplication." },
            ],
            steps: [
              { reasoning: "This is sharing $24$ into groups of $4$: $24 \\div 4$.", working: "24\\div4", marks: 1, markCode: "M" },
              { reasoning: "From the $4$ times table, $4 \\times 6 = 24$, so $6$ taxis.", working: "4\\times6=24", marks: 1, markCode: "M" },
              { reasoning: "Check: $6 \\times 4 = 24$ children — matches the trip size.", working: "6\\times4=24", marks: 1, markCode: "M" },
              { reasoning: "Answer: $6$ taxis needed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6$ taxis",
            commonErrors: ["Computing $24 \\times 4 = 96$ — sharing into groups of 4 is division."],
          },
        },
      ],
    },
    {
      id: "pypm-u1l2-c2-fractions",
      title: "Fractions: halves and quarters",
      skill: "Share shapes and amounts into equal parts and name halves and quarters.",
      lesson: {
        sections: [
          {
            heading: "Equal parts",
            body: "A **fraction** names part of a whole — but the parts must be **equal**. Cut a pizza into $2$ equal slices: each slice is **one half**, written $\\frac{1}{2}$. Cut it into $4$ equal slices: each slice is **one quarter**, written $\\frac{1}{4}$. The bottom number (denominator) tells how many equal parts; the top number (numerator) tells how many parts you have.",
          },
          {
            heading: "Fractions of amounts",
            body: "To find a half of a number, divide by $2$; a quarter of a number, divide by $4$. Half of $12$ sweets is $6$; a quarter of $12$ is $3$. Fractions also combine: two quarters make a half ($\\frac{2}{4} = \\frac{1}{2}$), and two halves make a whole ($\\frac{2}{2} = 1$).",
          },
        ],
        keyFormulas: [
          { name: "Fraction parts", statement: "Denominator = number of equal parts; numerator = parts taken" },
          { name: "Fraction of an amount", statement: "Half of $n = n \\div 2$; quarter of $n = n \\div 4$" },
        ],
        workedExample: {
          problem: "What is a quarter of $20$?",
          solution: "Divide by $4$: $20 \\div 4 = 5$. A quarter of $20$ is $5$.",
        },
      },
      questions: [
        {
          id: "pypm-q-u1l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pizza is cut into 4 equal slices. What fraction is one slice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{2}$" },
              { id: "b", text: "$\\frac{1}{4}$" },
              { id: "c", text: "$\\frac{1}{3}$" },
              { id: "d", text: "$\\frac{4}{1}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fraction", statement: "One of four equal parts is a quarter, $\\frac{1}{4}$." },
            ],
            steps: [
              { reasoning: "Four equal parts → each part is one quarter.", working: "\\frac{1}{4}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\frac{1}{4}$",
            commonErrors: ["Choosing $\\frac{1}{2}$ — that would be if cut into 2 equal slices."],
          },
        },
        {
          id: "pypm-q-u1l2c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is half of $18$?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 9 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Half of an amount", statement: "Half of $n$ is $n \\div 2$." },
            ],
            steps: [
              { reasoning: "Divide by $2$: $18 \\div 2$.", working: "18\\div2", marks: 1, markCode: "M" },
              { reasoning: "Half of $18$ is $9$.", working: "18\\div2=9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$9$",
            commonErrors: ["Subtracting $2$ instead of dividing by $2$: $18-2=16$."],
          },
        },
        {
          id: "pypm-q-u1l2c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A chocolate bar has 8 equal pieces. Sam eats 3 pieces. What fraction of the bar is left?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{3}{8}$" },
              { id: "b", text: "$\\frac{5}{8}$" },
              { id: "c", text: "$\\frac{8}{5}$" },
              { id: "d", text: "$\\frac{1}{2}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Fractions of a whole", statement: "Parts left = total parts − parts used, over total parts." },
            ],
            steps: [
              { reasoning: "Pieces left: $8-3=5$.", working: "8-3=5", marks: 1, markCode: "M" },
              { reasoning: "The whole is $8$ equal pieces, so $5$ pieces is $\\frac{5}{8}$.", working: "\\frac{5}{8}", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{5}{8}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\frac{5}{8}$",
            commonErrors: ["Choosing $\\frac{3}{8}$ — that is the fraction eaten, not left."],
          },
        },
        {
          id: "pypm-q-u1l2c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A class of 24 pupils shares pizza fairly. The pizza is cut into 8 equal slices.",
          parts: [
            { label: "a", prompt: "What fraction of the pizza is one slice?", marks: 1 },
            { label: "b", prompt: "How many slices does each pupil get if there are exactly enough?", marks: 2 },
            { label: "c", prompt: "If half the class is girls, how many girls are there?", marks: 2 },
            { label: "d", prompt: "Explain why the slices must be equal for the sharing to be fair.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Equal sharing", statement: "Fair sharing needs equal parts; fractions name those parts." },
            ],
            steps: [
              { part: "a", reasoning: "One of $8$ equal slices is $\\frac{1}{8}$ of the pizza.", working: "\\frac{1}{8}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Share $8$ slices among $24$ pupils: each pupil gets $\\frac{8}{24}$ of a slice.", working: "8\\div24=\\frac{1}{3}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify: $\\frac{8}{24} = \\frac{1}{3}$, so each pupil gets a third of a slice.", working: "\\frac{1}{3}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Half of $24$ pupils is $12$.", working: "24\\div2=12", marks: 1, markCode: "M" },
              { part: "c", reasoning: "There are $12$ girls.", working: "12", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Fractions only work fairly when the parts are equal.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Unequal slices mean some pupils get more pizza — that is not fair.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{1}{8}$ (b) $\\frac{1}{3}$ of a slice each (c) $12$ girls (d) Equal parts = fair shares.",
            commonErrors: ["In (b), computing $24 \\div 8 = 3$ and calling it '3 slices' — that confuses pupils with slices."],
          },
        },
        {
          id: "pypm-q-u1l2c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A sandwich is cut into $2$ equal halves. What fraction is one piece?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{4}$" },
              { id: "b", text: "$\\frac{1}{2}$" },
              { id: "c", text: "$\\frac{2}{1}$" },
              { id: "d", text: "$\\frac{1}{3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fraction", statement: "One of two equal parts is one half, $\\frac{1}{2}$." },
            ],
            steps: [
              { reasoning: "Two equal parts → each part is a half.", working: "\\frac{1}{2}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\frac{1}{2}$",
            commonErrors: ["Choosing $\\frac{1}{4}$ — that would be one of four equal parts."],
          },
        },
        {
          id: "pypm-q-u1l2c2-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is half of $20$?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Half of an amount", statement: "Half of $n$ is $n \\div 2$." },
            ],
            steps: [
              { reasoning: "$20 \\div 2 = 10$.", working: "20\\div2=10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$10$",
            commonErrors: ["Answering $18$ or $22$ — halving means dividing by $2$."],
          },
        },
        {
          id: "pypm-q-u1l2c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cake is cut into $4$ equal slices. What fraction of the cake is one slice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{2}$" },
              { id: "b", text: "$\\frac{1}{4}$" },
              { id: "c", text: "$\\frac{1}{3}$" },
              { id: "d", text: "$\\frac{4}{1}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fraction", statement: "One of four equal parts is one quarter, $\\frac{1}{4}$." },
            ],
            steps: [
              { reasoning: "Four equal slices → each slice is $\\frac{1}{4}$ of the cake.", working: "\\frac{1}{4}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\frac{1}{4}$",
            commonErrors: ["Choosing $\\frac{1}{2}$ — that needs only 2 equal parts."],
          },
        },
        {
          id: "pypm-q-u1l2c2-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Is $\\frac{2}{4}$ the same as $\\frac{1}{2}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes — two quarters make a half" },
              { id: "b", text: "No — they are different fractions" },
              { id: "c", text: "Only for pizzas" },
              { id: "d", text: "Cannot tell" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Equivalent fractions", statement: "Two quarters cover the same amount as one half." },
            ],
            steps: [
              { reasoning: "Cut something into 4: 2 pieces = half the whole, same as cutting into 2 and taking 1.", working: "\\frac{2}{4}=\\frac{1}{2}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Yes — $\\frac{2}{4} = \\frac{1}{2}$",
            commonErrors: ["Thinking different denominators always mean different amounts."],
          },
        },
        {
          id: "pypm-q-u1l2c2-9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which fraction is bigger: $\\frac{1}{2}$ or $\\frac{1}{4}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{4}$ — smaller pieces are bigger" },
              { id: "b", text: "$\\frac{1}{2}$ — fewer equal parts means each is bigger" },
              { id: "c", text: "They are the same" },
              { id: "d", text: "Cannot compare" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Comparing fractions", statement: "With the same numerator, more parts means smaller parts." },
            ],
            steps: [
              { reasoning: "Halving makes 2 big parts; quartering makes 4 smaller parts.", marks: 1, markCode: "M" },
              { reasoning: "So $\\frac{1}{2} > \\frac{1}{4}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\frac{1}{2}$",
            commonErrors: ["Choosing $\\frac{1}{4}$ — bigger denominator means smaller pieces."],
          },
        },
        {
          id: "pypm-q-u1l2c2-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A chocolate bar has $8$ equal pieces. Max eats $3$ pieces. What fraction of the bar did Max eat?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{3}{8}$" },
              { id: "b", text: "$\\frac{5}{8}$" },
              { id: "c", text: "$\\frac{3}{5}$" },
              { id: "d", text: "$\\frac{1}{3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Fractions of a whole", statement: "Parts taken over total parts: $3$ of $8$ is $\\frac{3}{8}$." },
            ],
            steps: [
              { reasoning: "Max ate $3$ pieces out of $8$ equal pieces.", working: "\\frac{3}{8}", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{3}{8}$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\frac{3}{8}$",
            commonErrors: ["Choosing $\\frac{5}{8}$ — that is the fraction left, not eaten."],
          },
        },
        {
          id: "pypm-q-u1l2c2-11",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is half of $34$?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 17 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Half of an amount", statement: "Half of $n$ is $n \\div 2$." },
            ],
            steps: [
              { reasoning: "$34 \\div 2 = 17$.", working: "34\\div2=17", marks: 1, markCode: "M" },
              { reasoning: "Answer: $17$.", working: "17", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$17$",
            commonErrors: ["Answering $32$ — subtracting $2$ is not halving."],
          },
        },
        {
          id: "pypm-q-u1l2c2-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Sam cuts a pizza into 4 slices but one slice is much bigger than the others. Can we say each slice is $\\frac{1}{4}$ of the pizza? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fraction parts must be equal", statement: "A fraction only works when the whole is split into equal parts." },
            ],
            steps: [
              { reasoning: "Fractions name equal parts of a whole.", marks: 1, markCode: "R" },
              { reasoning: "The slices are not equal — the big slice is more than a quarter.", marks: 1, markCode: "M" },
              { reasoning: "So we cannot honestly call each slice $\\frac{1}{4}$; only equal slices count.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No — fractions need equal parts; the slices are unequal.",
            commonErrors: ["Counting '4 slices = quarters' without checking they are equal."],
          },
        },
        {
          id: "pypm-q-u1l2c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A bar of chocolate has $8$ equal pieces. Jo eats $3$ pieces and gives $2$ pieces to her friend. What fraction of the bar is left? Explain your steps.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Fractions of a whole", statement: "Parts left = total parts − parts used, over total parts." },
            ],
            steps: [
              { reasoning: "Pieces gone: $3 + 2 = 5$.", working: "3+2=5", marks: 1, markCode: "M" },
              { reasoning: "Pieces left: $8 - 5 = 3$.", working: "8-5=3", marks: 1, markCode: "M" },
              { reasoning: "Left fraction: $\\frac{3}{8}$ of the bar.", working: "\\frac{3}{8}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{3}{8}$",
            commonErrors: ["Computing $\\frac{8-3}{8}=\\frac{5}{8}$ — must subtract ALL pieces eaten including the friend's $2$."],
          },
        },
        {
          id: "pypm-q-u1l2c2-14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two friends each eat half a pizza. Together, what fraction of the pizza have they eaten?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{2}{4}$" },
              { id: "b", text: "$1$ — the whole pizza" },
              { id: "c", text: "$\\frac{1}{4}$" },
              { id: "d", text: "$\\frac{2}{2}$ which is more than 1" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Combining fractions", statement: "Two halves make one whole: $\\frac{1}{2} + \\frac{1}{2} = \\frac{2}{2} = 1$." },
            ],
            steps: [
              { reasoning: "Half plus half covers the whole pizza.", working: "\\frac{1}{2}+\\frac{1}{2}=1", marks: 1, markCode: "M" },
              { reasoning: "Answer: the whole pizza, $1$.", marks: 1, markCode: "M" },
              { reasoning: "Confirm: nothing is left over.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The whole pizza",
            commonErrors: ["Choosing $\\frac{2}{4}$ without simplifying — it equals $\\frac{1}{2}$, not the whole."],
          },
        },
        {
          id: "pypm-q-u1l2c2-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What is a quarter of $40$?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Quarter of an amount", statement: "A quarter of $n$ is $n \\div 4$." },
            ],
            steps: [
              { reasoning: "Divide by $4$: $40 \\div 4$.", working: "40\\div4", marks: 1, markCode: "M" },
              { reasoning: "From the $4$ times table, $4 \\times 10 = 40$.", working: "4\\times10=40", marks: 1, markCode: "M" },
              { reasoning: "A quarter of $40$ is $10$.", working: "40\\div4=10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$",
            commonErrors: ["Answering $8$ — dividing by $5$ or halving twice wrongly ($40\\div2\\div2=10$ is correct, don't stop at 20)."],
          },
        },
        {
          id: "pypm-q-u1l2c2-16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A cake is cut into $4$ equal slices. Three friends each eat one slice. What fraction of the cake is left?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{3}{4}$" },
              { id: "b", text: "$\\frac{1}{4}$" },
              { id: "c", text: "$\\frac{1}{3}$" },
              { id: "d", text: "$0$ — nothing is left" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Fractions of a whole", statement: "Parts left = total parts − parts eaten, over total parts." },
            ],
            steps: [
              { reasoning: "Slices eaten: $3$; slices left: $4 - 3 = 1$.", working: "4-3=1", marks: 1, markCode: "M" },
              { reasoning: "One of four equal slices is $\\frac{1}{4}$.", working: "\\frac{1}{4}", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\frac{1}{4}$ is left.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\frac{1}{4}$",
            commonErrors: ["Choosing $\\frac{3}{4}$ — that is the fraction EATEN, not left."],
          },
        },
      ],
    },
  ],
};
