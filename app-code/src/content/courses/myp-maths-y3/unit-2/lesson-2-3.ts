import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "mypm3-u2-lesson-2-3",
  code: "2-3",
  title: "Sequences and Patterns",
  goal: "I CAN find the nth term of linear and simple quadratic sequences and justify rules for patterns.",
  standards: [
    "MYP Maths: Algebra",
    "Criterion B: Investigating patterns",
    "Criterion A: Knowing and understanding",
  ],
  vocabulary: [
    { term: "Sequence", definition: "An ordered list of numbers following a rule, e.g. 3, 5, 7, 9, ..." },
    { term: "nth term", definition: "A formula that gives the $n$th term of a sequence as a function of $n$." },
    { term: "Term-to-term rule", definition: "A rule describing how to get from one term to the next, e.g. \"add 4\"." },
    { term: "Position-to-term rule", definition: "The $n$th term formula, which gives any term directly from its position." },
    { term: "Quadratic sequence", definition: "A sequence whose $n$th term is a quadratic in $n$, e.g. $n^2+1$; its second differences are constant." },
  ],
  concepts: [
    {
      id: "mypm3-u2-nth-term",
      title: "Finding the nth term",
      skill: "Find the nth term of linear and simple quadratic sequences from tables and patterns of shapes.",
      lesson: {
        sections: [
          {
            heading: "Linear sequences",
            body: `For a linear sequence, the term-to-term difference is constant. If the common difference is $d$ and the first term is $a_1$, the nth term is:

$$a_n=a_1+(n-1)d$$

For 5, 8, 11, 14, ...: $d=3$, $a_1=5$, so $a_n=5+(n-1)3=3n+2$.`,
          },
          {
            heading: "From a table",
            body: "Given a table of $n$ and $a_n$, find $d$ from consecutive differences, then use any row to find the constant. For $n=1,2,3$ giving $a_n=7,10,13$: $d=3$, and $a_1=7$, so $a_n=3n+4$.",
          },
          {
            heading: "Quadratic sequences",
            body: "If first differences are not constant but **second differences** are, the sequence is quadratic. For 2, 5, 10, 17, 26: first differences 3, 5, 7, 9; second differences all 2. A second difference of 2 suggests $n^2$ (since $n^2$ has second difference 2). Subtract $n^2$ from each term: 1, 1, 1, 1, 1 — all 1s, so $a_n=n^2+1$.",
          },
        ],
        keyFormulas: [
          { name: "Linear nth term", statement: "$a_n=a_1+(n-1)d$" },
          { name: "Second difference test", statement: "Constant second differences indicate a quadratic nth term" },
        ],
        workedExample: {
          problem: "Find the nth term of 4, 7, 10, 13, ...",
          solution: "Common difference $d=3$, first term $a_1=4$. So $a_n=4+(n-1)3=3n+1$. Check: $n=1$ gives 4, $n=2$ gives 7.",
        },
      },
      questions: [
        {
          id: "mypm3-u2-nth-term-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 10th term of the sequence 2, 5, 8, 11, ...?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "29" },
              { id: "b", text: "30" },
              { id: "c", text: "31" },
              { id: "d", text: "32" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear nth term", statement: "$a_n=a_1+(n-1)d$" },
            ],
            steps: [
              { reasoning: "$d=3$, $a_1=2$, so $a_{10}=2+9\\times3=29$.", working: "2+9(3)=29", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 29",
            commonErrors: ["Using $n$ instead of $n-1$: $2+10\\times3=32$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u2-nth-term-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the nth term of the sequence 1, 4, 7, 10, ...",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear nth term", statement: "$a_n=a_1+(n-1)d$" },
            ],
            steps: [
              { reasoning: "Common difference $d=3$, first term $a_1=1$.", working: "d=3,\\ a_1=1", marks: 1, markCode: "M" },
              { reasoning: "Write the formula.", working: "a_n=1+(n-1)3=3n-2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a_n=3n-2$",
            commonErrors: ["Writing $3n+1$ (using $a_1$ as the constant instead of $a_1-d$).", "Writing $3n-2$ but not simplifying."],
            examinerNote: "M1 for correct $d$ and $a_1$, A1 for simplified formula.",
          },
        },
        {
          id: "mypm3-u2-nth-term-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A sequence has nth term $a_n=5n-3$. Find the 20th term and determine which term equals 87.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear nth term", statement: "$a_n=a_1+(n-1)d$" },
            ],
            steps: [
              { reasoning: "Substitute $n=20$.", working: "a_{20}=5(20)-3=97", marks: 1, markCode: "M" },
              { reasoning: "Set $a_n=87$ and solve.", working: "5n-3=87\\Rightarrow5n=90\\Rightarrow n=18", marks: 1, markCode: "M" },
              { reasoning: "State both answers.", working: "a_{20}=97,\\ n=18", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20th term $=97$; 87 is the 18th term",
            commonErrors: ["Solving $5n-3=87$ as $5n=84$.", "Not checking that $n=18$ gives $a_{18}=87$."],
            examinerNote: "M1 for substitution, M1 for equation, A1 for both answers.",
          },
        },
        {
          id: "mypm3-u2-nth-term-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A pattern of squares is made from matchsticks. Figure 1 uses 4 matchsticks, Figure 2 uses 7, Figure 3 uses 10, and Figure 4 uses 13.",
          parts: [
            { label: "a", prompt: "Write down the term-to-term rule for the number of matchsticks.", marks: 1 },
            { label: "b", prompt: "Find the nth term for the number of matchsticks in Figure $n$.", marks: 2 },
            { label: "c", prompt: "How many matchsticks are needed for Figure 25?", marks: 2 },
            { label: "d", prompt: "A student claims Figure 100 needs 301 matchsticks. Verify this claim using the nth term formula.", marks: 2 },
            { label: "e", prompt: "Explain why the nth term formula is more useful than listing all figures.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear nth term", statement: "$a_n=a_1+(n-1)d$" },
              { kind: "principle", name: "Pattern generalisation", statement: "A rule that works for all $n$ is more powerful than checking individual cases." },
            ],
            steps: [
              { part: "a", reasoning: "Each figure adds 3 matchsticks.", working: "add 3 each time", marks: 1, markCode: "B" },
              { part: "b", reasoning: "$d=3$, $a_1=4$, so $a_n=4+(n-1)3$.", working: "a_n=4+3(n-1)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify.", working: "a_n=3n+1", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $n=25$.", working: "a_{25}=3(25)+1=76", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the answer.", working: "76\\text{ matchsticks}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute $n=100$ into the nth term.", working: "a_{100}=3(100)+1=301", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Compare with the claim.", working: "301=301\\checkmark", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The formula gives any figure directly without needing to draw or count all previous figures.", working: "\\text{direct calculation for any }n", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) add 3 each time (b) $a_n=3n+1$ (c) 76 matchsticks (d) claim verified: $a_{100}=301$ (e) the formula gives any term directly",
            commonErrors: ["In (b), writing $3n+4$ instead of $3n+1$.", "In (d), checking only Figure 4 and assuming the pattern continues."],
            examinerNote: "B1 for term-to-term, M1 A1 for nth term, M1 A1 for (c), M1 A1 for (d), R1 for (e).",
          },
        },
        {
          id: "mypm3-u2-nth-term-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the nth term of 7, 11, 15, 19, ...?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4n+3$" },
              { id: "b", text: "$4n+7$" },
              { id: "c", text: "$3n+4$" },
              { id: "d", text: "$4n-1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear nth term", statement: "$a_n=a_1+(n-1)d$; here $a_1=7$, $d=4$." },
            ],
            steps: [
              { reasoning: "$a_n=7+(n-1)4=4n+3$.", working: "4n+3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $4n+3$",
            commonErrors: ["Using $4n+7$ by treating the first term as the constant."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u2-nth-term-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 20th term of 3, 7, 11, 15, ...?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$76$" },
              { id: "b", text: "$79$" },
              { id: "c", text: "$80$" },
              { id: "d", text: "$83$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear nth term", statement: "$a_n=3+(n-1)4$; use $n=20$." },
            ],
            steps: [
              { reasoning: "$a_{20}=3+19 \\times 4=79$.", working: "79", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $79$",
            commonErrors: ["Using $n=20$ as the number of steps after the first term."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u2-nth-term-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A sequence has nth term $a_n=5n-2$. What is the 8th term?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$38$" },
              { id: "b", text: "$40$" },
              { id: "c", text: "$42$" },
              { id: "d", text: "$36$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear nth term", statement: "Substitute $n=8$ into $a_n=5n-2$." },
            ],
            steps: [
              { reasoning: "$a_8=5(8)-2=38$.", working: "38", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $38$",
            commonErrors: ["Substituting $n=7$ or forgetting to subtract 2."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u2-nth-term-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A sequence has nth term $a_n=2n+5$. What is the first term?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$7$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$10$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear nth term", statement: "The first term uses $n=1$." },
            ],
            steps: [
              { reasoning: "$a_1=2(1)+5=7$.", working: "7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $7$",
            commonErrors: ["Reading the constant 5 as the first term."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u2-nth-term-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the nth term of 6, 10, 14, 18, ...",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear nth term", statement: "$a_n=a_1+(n-1)d$ with $a_1=6$, $d=4$." },
            ],
            steps: [
              { reasoning: "Identify common difference and first term.", working: "d=4,\\ a_1=6", marks: 1, markCode: "M" },
              { reasoning: "Write and simplify the formula.", working: "a_n=6+(n-1)4=4n+2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a_n=4n+2$",
            commonErrors: ["Writing $4n+6$ by using the first term as the constant."],
            examinerNote: "M1 for d and a1, A1 for simplified formula.",
          },
        },
        {
          id: "mypm3-u2-nth-term-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the 15th term of the sequence with nth term $a_n=7n-4$.",
          response: { type: "numeric", parts: [{ label: "15th term", answer: 101 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear nth term", statement: "Substitute $n=15$." },
            ],
            steps: [
              { reasoning: "Substitute into the formula.", working: "a_{15}=7(15)-4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "101", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$101$",
            commonErrors: ["Subtracting 4 before multiplying by 7."],
            examinerNote: "M1 for substitution, A1 for 101.",
          },
        },
        {
          id: "mypm3-u2-nth-term-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A sequence has nth term $a_n=5n-3$. Which term is equal to 92?",
          response: { type: "numeric", parts: [{ label: "n", answer: 19 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear nth term", statement: "Set $a_n=92$ and solve for $n$." },
            ],
            steps: [
              { reasoning: "Set up the equation.", working: "5n-3=92", marks: 1, markCode: "M" },
              { reasoning: "Solve: $5n=95$, so $n=19$.", working: "n=19", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n=19$",
            commonErrors: ["Solving $5n=89$ by subtracting incorrectly."],
            examinerNote: "M1 for equation, A1 for 19.",
          },
        },
        {
          id: "mypm3-u2-nth-term-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which sequence is quadratic rather than linear?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2, 4, 6, 8, ..." },
              { id: "b", text: "1, 4, 9, 16, ..." },
              { id: "c", text: "5, 5, 5, 5, ..." },
              { id: "d", text: "1, 2, 4, 8, ..." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Second difference test", statement: "A quadratic sequence has constant second differences." },
            ],
            steps: [
              { reasoning: "For 1,4,9,16 the first differences are 3,5,7 and second differences are 2,2,2.", working: "second differences constant", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 1, 4, 9, 16, ...",
            commonErrors: ["Choosing a geometric sequence such as 1,2,4,8."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u2-nth-term-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A table gives $n=1,2,3$ and $a_n=4,7,10$. What is the nth term?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3n+1$" },
              { id: "b", text: "$3n+4$" },
              { id: "c", text: "$4n+3$" },
              { id: "d", text: "$7n-3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear nth term", statement: "$d=3$, $a_1=4$, so $a_n=4+(n-1)3=3n+1$." },
            ],
            steps: [
              { reasoning: "Check $n=1$: $3(1)+1=4$; $n=2$: $7$; $n=3$: $10$.", working: "3n+1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3n+1$",
            commonErrors: ["Writing $3n+4$ by using the first term as the constant."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u2-nth-term-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A pattern of matchsticks uses 5 in Figure 1, 8 in Figure 2 and 11 in Figure 3. Find the number of matchsticks in Figure 30.",
          response: { type: "numeric", parts: [{ label: "Matchsticks", answer: 92 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear nth term", statement: "$a_n=5+(n-1)3=3n+2$." },
            ],
            steps: [
              { reasoning: "Common difference is 3, so nth term is $3n+2$.", working: "a_n=3n+2", marks: 1, markCode: "M" },
              { reasoning: "Substitute $n=30$.", working: "3(30)+2=92", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$92$ matchsticks",
            commonErrors: ["Using $3n+5$ and getting 95."],
            examinerNote: "M1 for nth term, A1 for 92.",
          },
        },
        {
          id: "mypm3-u2-nth-term-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why the nth term formula is more useful than a term-to-term rule when finding the 100th term of a sequence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Position-to-term rule", statement: "The nth term gives any term directly from its position." },
            ],
            steps: [
              { reasoning: "A term-to-term rule requires starting at the first term and repeating the step many times.", working: "repeated steps needed", marks: 1, markCode: "R" },
              { reasoning: "The nth term formula substitutes $n=100$ directly.", working: "direct substitution", marks: 1, markCode: "M" },
              { reasoning: "Conclude it is faster and less error-prone for large n.", working: "more efficient", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The nth term formula gives the 100th term directly, avoiding 99 repeated steps.",
            commonErrors: ["Saying both methods are equally easy for large n."],
            examinerNote: "R1 for comparison, M1 for substitution idea, R1 for conclusion.",
          },
        },
        {
          id: "mypm3-u2-nth-term-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A theatre has 20 seats in row 1, 24 in row 2 and 28 in row 3, increasing by 4 each row. Find the number of seats in row 12 and write the nth term for row $n$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Linear nth term", statement: "$a_n=20+(n-1)4=4n+16$." },
            ],
            steps: [
              { reasoning: "Identify $a_1=20$ and $d=4$.", working: "a_1=20,\\ d=4", marks: 1, markCode: "M" },
              { reasoning: "Write the nth term.", working: "a_n=4n+16", marks: 1, markCode: "A" },
              { reasoning: "Substitute $n=12$.", working: "4(12)+16=64 seats", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a_n=4n+16$; row 12 has $64$ seats.",
            commonErrors: ["Using $4n+20$ as the nth term."],
            examinerNote: "M1 for parameters, A1 for formula, A1 for 64.",
          },
        },
      ],
    },
    {
      id: "mypm3-u2-quadratic-sequences",
      title: "Quadratic sequences",
      skill: "Identify quadratic sequences using second differences and find their nth term.",
      lesson: {
        sections: [
          {
            heading: "Second differences",
            body: "For a quadratic sequence, the **first differences** are not constant but the **second differences** are. The constant second difference tells you the coefficient of $n^2$.",
          },
          {
            heading: "Finding the nth term",
            body: "Method: (1) find first and second differences; (2) the second difference divided by 2 is the coefficient of $n^2$; (3) subtract $an^2$ from each term; (4) the remaining sequence is linear — find its nth term; (5) add the two parts.",
          },
          {
            heading: "Example",
            body: "Sequence: 3, 6, 11, 18, 27. First differences: 3, 5, 7, 9. Second differences: 2, 2, 2 — constant. So coefficient of $n^2$ is $2\\div2=1$. Subtract $n^2$: 2, 5, 10, 17, 26 minus 1, 4, 9, 16, 25 = 2, 2, 2, 2, 2 — all 2s. So $a_n=n^2+2$.",
          },
        ],
        keyFormulas: [
          { name: "Second difference test", statement: "Constant second differences → quadratic nth term" },
          { name: "Quadratic nth term", statement: "$a_n=an^2+bn+c$ where $2a$ is the constant second difference" },
        ],
        workedExample: {
          problem: "Find the nth term of 5, 10, 17, 26, 37.",
          solution: "First differences: 5, 7, 9, 11. Second differences: 2, 2, 2. Coefficient of $n^2$ is 1. Subtract $n^2$: 4, 6, 8, 10, 12 — this is $2n+2$. So $a_n=n^2+2n+2$.",
        },
      },
      questions: [
        {
          id: "mypm3-u2-quadratic-sequences-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The sequence 2, 5, 10, 17, 26 has constant second differences. What is the second difference?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2" },
              { id: "b", text: "3" },
              { id: "c", text: "4" },
              { id: "d", text: "5" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Second difference test", statement: "Second differences of a quadratic sequence are constant." },
            ],
            steps: [
              { reasoning: "First differences: 3, 5, 7, 9. Second differences: 2, 2, 2.", working: "3-2=2,\\ 5-3=2,\\ 7-5=2,\\ 9-7=2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 2",
            commonErrors: ["Computing first differences instead of second."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u2-quadratic-sequences-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the nth term of the sequence 1, 3, 7, 13, 21, ...",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Second difference test", statement: "Constant second differences indicate a quadratic sequence." },
            ],
            steps: [
              { reasoning: "First differences: 2, 4, 6, 8. Second differences: 2, 2, 2. So coefficient of $n^2$ is $2\\div2=1$.", working: "d_2=2\\Rightarrow a=1", marks: 1, markCode: "M" },
              { reasoning: "Subtract $n^2$ from each term: $1-1=0, 3-4=-1, 7-9=-2, 13-16=-3, 21-25=-4$, giving $0,-1,-2,-3,-4$ which is $1-n$.", working: "a_n=n^2+(1-n)=n^2-n+1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a_n=n^2-n+1$",
            commonErrors: ["Subtracting $n^2$ incorrectly.", "Forgetting to check the formula against the first few terms."],
            examinerNote: "Check: $n=1$: $1-1+1=1$; $n=2$: $4-2+1=3$; $n=3$: $9-3+1=7$; $n=4$: $16-4+1=13$; $n=5$: $25-5+1=21$.",
          },
        },
        {
          id: "mypm3-u2-quadratic-sequences-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The nth term of a sequence is $a_n=2n^2+3n+1$. Find the first five terms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quadratic nth term", statement: "$a_n=an^2+bn+c$" },
            ],
            steps: [
              { reasoning: "Substitute $n=1,2,3,4,5$.", working: "a_1=2+3+1=6,\\ a_2=8+6+1=15,\\ a_3=18+9+1=28", marks: 1, markCode: "M" },
              { reasoning: "Continue for $n=4,5$.", working: "a_4=32+12+1=45,\\ a_5=50+15+1=66", marks: 1, markCode: "M" },
              { reasoning: "State all five terms.", working: "6, 15, 28, 45, 66", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6, 15, 28, 45, 66",
            commonErrors: ["Substituting $n=0,1,2,3,4$ instead of $n=1,2,3,4,5$.", "Arithmetic slips in evaluation."],
            examinerNote: "M1 for three correct terms, M1 for all five, A1 for correct sequence.",
          },
        },
        {
          id: "mypm3-u2-quadratic-sequences-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A pattern of dots is arranged in rows. Row 1 has 1 dot, Row 2 has 3 dots, Row 3 has 6 dots, Row 4 has 10 dots, and Row 5 has 15 dots.",
          parts: [
            { label: "a", prompt: "Find the first differences and second differences of the sequence 1, 3, 6, 10, 15.", marks: 2 },
            { label: "b", prompt: "Determine whether this is a linear or quadratic sequence, giving a reason.", marks: 1 },
            { label: "c", prompt: "Find the nth term for the number of dots in Row $n$.", marks: 3 },
            { label: "d", prompt: "How many dots are in Row 20?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Second difference test", statement: "Constant second differences indicate a quadratic sequence." },
              { kind: "formula", name: "Quadratic nth term", statement: "$a_n=an^2+bn+c$" },
            ],
            steps: [
              { part: "a", reasoning: "First differences: $3-1=2, 6-3=3, 10-6=4, 15-10=5$.", working: "2, 3, 4, 5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Second differences: $3-2=1, 4-3=1, 5-4=1$.", working: "1, 1, 1", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Second differences are constant at 1, so the sequence is quadratic.", working: "\\text{quadratic}", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Second difference is 1, so $2a=1$, $a=\\frac{1}{2}$.", working: "a=\\frac{1}{2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Subtract $\\frac{1}{2}n^2$ from each term and find the remaining linear nth term.", working: "1-\\frac{1}{2}=\\frac{1}{2},\\ 3-2=1,\\ 6-\\frac{9}{2}=\\frac{3}{2},\\ 10-8=2,\\ 15-\\frac{25}{2}=\\frac{5}{2}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Remaining sequence $\\frac{1}{2},1,\\frac{3}{2},2,\\frac{5}{2}$ has nth term $\\frac{n}{2}$.", working: "\\frac{n}{2}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute $n=20$.", working: "a_{20}=\\frac{1}{2}(400)+\\frac{20}{2}=200+10=210", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the answer.", working: "210\\text{ dots}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) first differences 2, 3, 4, 5; second differences 1, 1, 1 (b) quadratic (c) $a_n=\\frac{1}{2}n^2+\\frac{n}{2}=\\frac{n(n+1)}{2}$ (d) 210 dots",
            commonErrors: ["In (c), using second difference 1 as the coefficient of $n^2$ instead of $\\frac{1}{2}$.", "In (d), substituting $n=20$ into the wrong formula."],
            examinerNote: "M1 A1 for differences, R1 for classification, M1 M1 A1 for nth term, M1 A1 for (d).",
          },
        },
        {
          id: "mypm3-u2-quadratic-sequences-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The sequence 1, 4, 9, 16, 25 has constant second differences. What is the second difference?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$3$" },
              { id: "d", text: "$4$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Second difference test", statement: "For $n^2$, the second difference is 2." },
            ],
            steps: [
              { reasoning: "First differences: 3,5,7,9; second differences: 2,2,2.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $2$",
            commonErrors: ["Stopping at first differences."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u2-quadratic-sequences-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which nth term gives the sequence 3, 6, 11, 18, ...?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n^2+2$" },
              { id: "b", text: "$n^2+n$" },
              { id: "c", text: "$2n+1$" },
              { id: "d", text: "$n^2-2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quadratic nth term", statement: "$a_n=n^2+2$ gives 3, 6, 11, 18." },
            ],
            steps: [
              { reasoning: "Check $n=1$: $1+2=3$; $n=2$: $4+2=6$; $n=3$: $9+2=11$.", working: "n^2+2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $n^2+2$",
            commonErrors: ["Choosing a linear formula that fails later terms."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u2-quadratic-sequences-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A quadratic sequence has constant second difference 6. What is the coefficient of $n^2$ in its nth term?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$6$" },
              { id: "d", text: "$12$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quadratic nth term", statement: "If $a_n=an^2+bn+c$, the second difference is $2a$." },
            ],
            steps: [
              { reasoning: "$2a=6$, so $a=3$.", working: "a=3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $3$",
            commonErrors: ["Using the second difference 6 as the coefficient."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u2-quadratic-sequences-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which nth term produces 2, 5, 10, 17, 26, ...?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n^2$" },
              { id: "b", text: "$n^2+1$" },
              { id: "c", text: "$2n+1$" },
              { id: "d", text: "$n^2-n+2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quadratic nth term", statement: "$n^2+1$ gives 2, 5, 10, 17, 26." },
            ],
            steps: [
              { reasoning: "Check $n=1$: $1+1=2$; $n=2$: $4+1=5$; $n=3$: $9+1=10$.", working: "n^2+1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $n^2+1$",
            commonErrors: ["Choosing $n^2-n+2$, which gives 2,4,8,14."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mypm3-u2-quadratic-sequences-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What are the first five terms of $a_n=n^2-n+2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2, 4, 8, 14, 22" },
              { id: "b", text: "2, 4, 6, 8, 10" },
              { id: "c", text: "3, 6, 11, 18, 27" },
              { id: "d", text: "1, 2, 3, 4, 5" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quadratic nth term", statement: "Substitute $n=1,2,3,4,5$." },
            ],
            steps: [
              { reasoning: "Terms are $1-1+2=2$, $4-2+2=4$, $9-3+2=8$, $16-4+2=14$, $25-5+2=22$.", working: "2,4,8,14,22", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 2, 4, 8, 14, 22",
            commonErrors: ["Substituting $n=0,1,2,3,4$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypm3-u2-quadratic-sequences-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the second difference of 2, 5, 10, 17, 26.",
          response: { type: "numeric", parts: [{ label: "Second difference", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Second difference test", statement: "Subtract consecutive first differences." },
            ],
            steps: [
              { reasoning: "First differences: 3, 5, 7, 9.", working: "3,5,7,9", marks: 1, markCode: "M" },
              { reasoning: "Second differences: 2, 2, 2.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$",
            commonErrors: ["Reporting first differences instead of second."],
            examinerNote: "M1 for first differences, A1 for second difference 2.",
          },
        },
        {
          id: "mypm3-u2-quadratic-sequences-q11",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Find the nth term of 4, 10, 18, 28, ... and hence find the 6th term.",
          response: { type: "numeric", parts: [{ label: "6th term", answer: 54 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quadratic nth term", statement: "Constant second difference 2 suggests $n^2$; the remaining linear part is $3n$." },
            ],
            steps: [
              { reasoning: "Second differences are 2, so coefficient of $n^2$ is 1; subtracting $n^2$ leaves 3, 6, 9, 12 = $3n$.", working: "a_n=n^2+3n", marks: 1, markCode: "M" },
              { reasoning: "6th term: $36+18=54$.", working: "54", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a_n=n^2+3n$; 6th term $=54$",
            commonErrors: ["Forgetting to check the nth term against the first terms."],
            examinerNote: "M1 for nth term, A1 for 54.",
          },
        },
        {
          id: "mypm3-u2-quadratic-sequences-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "For $a_n=2n^2+1$, find the 10th term.",
          response: { type: "numeric", parts: [{ label: "10th term", answer: 201 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quadratic nth term", statement: "$a_n=an^2+bn+c$; substitute $n=10$." },
            ],
            steps: [
              { reasoning: "Substitute $n=10$: $2(100)+1$.", working: "201", marks: 1, markCode: "M" },
              { reasoning: "State the term.", working: "201", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$201$",
            commonErrors: ["Computing $2n+1$ instead of $2n^2+1$."],
            examinerNote: "M1 for substitution, A1 for 201.",
          },
        },
        {
          id: "mypm3-u2-quadratic-sequences-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "For $a_n=n^2+1$, find the value of $n$ for which $a_n=50$.",
          response: { type: "numeric", parts: [{ label: "n", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Quadratic nth term", statement: "Set $n^2+1=50$ and solve for positive integer n." },
            ],
            steps: [
              { reasoning: "Solve $n^2=49$.", working: "n=\\pm7", marks: 1, markCode: "M" },
              { reasoning: "Term position must be positive, so $n=7$.", working: "n=7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n=7$",
            commonErrors: ["Giving $n=-7$ as a term position."],
            examinerNote: "M1 for equation, A1 for 7.",
          },
        },
        {
          id: "mypm3-u2-quadratic-sequences-q14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the steps used to find the nth term of a quadratic sequence from its first few terms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Second difference test", statement: "Constant second differences indicate a quadratic sequence." },
              { kind: "formula", name: "Quadratic nth term", statement: "$a_n=an^2+bn+c$ where $2a$ is the second difference." },
            ],
            steps: [
              { reasoning: "Find first and second differences to confirm they are constant.", working: "constant second difference", marks: 1, markCode: "R" },
              { reasoning: "Divide the second difference by 2 to get the coefficient of $n^2$.", working: "a=\\frac{\\text{second difference}}{2}", marks: 1, markCode: "M" },
              { reasoning: "Subtract $an^2$ from each term and find the remaining linear nth term, then add the parts.", working: "remaining sequence is linear", marks: 1, markCode: "M" },
            ],
            finalAnswer: "Use second differences to find the $n^2$ coefficient, subtract $an^2$, then fit a linear nth term to the remainder.",
            commonErrors: ["Using the second difference directly as the coefficient of $n^2$."],
            examinerNote: "R1 for method overview, M1 for coefficient, M1 for remainder step.",
          },
        },
        {
          id: "mypm3-u2-quadratic-sequences-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A dot pattern has 2 dots in Figure 1, 6 in Figure 2, 12 in Figure 3, 20 in Figure 4 and 30 in Figure 5. Find the nth term and the number of dots in Figure 10.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Second difference test", statement: "First differences 4,6,8,10; second differences 2,2,2." },
            ],
            steps: [
              { reasoning: "Second difference 2 means coefficient of $n^2$ is 1; subtract $n^2$ to get 1,2,3,4,5 = n.", working: "a_n=n^2+n", marks: 1, markCode: "M" },
              { reasoning: "State the nth term.", working: "a_n=n^2+n", marks: 1, markCode: "A" },
              { reasoning: "Figure 10: $100+10=110$ dots.", working: "110 dots", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a_n=n^2+n$; Figure 10 has $110$ dots.",
            commonErrors: ["Using coefficient 2 for $n^2$ instead of 1."],
            examinerNote: "M1 for derivation, A1 for formula, A1 for 110.",
          },
        },
        {
          id: "mypm3-u2-quadratic-sequences-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For the sequence 5, 10, 17, 26, 37, decide whether it is linear or quadratic and find its nth term.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Second difference test", statement: "First differences 5,7,9,11 are not constant; second differences 2,2,2 are constant." },
            ],
            steps: [
              { reasoning: "Classify using differences.", working: "quadratic", marks: 1, markCode: "R" },
              { reasoning: "Coefficient of $n^2$ is $2\\div2=1$; subtract $n^2$ to leave 4,6,8,10,12 = $2n+2$.", working: "a_n=n^2+2n+2", marks: 1, markCode: "M" },
              { reasoning: "Verify $n=1$: $1+2+2=5$.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Quadratic; $a_n=n^2+2n+2$.",
            commonErrors: ["Calling it linear because the first differences increase steadily."],
            examinerNote: "R1 for classification, M1 for derivation, A1 for check.",
          },
        },
      ],
    },
  ],
};
