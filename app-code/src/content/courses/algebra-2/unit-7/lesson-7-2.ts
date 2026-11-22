import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "alg2-u7-lesson-7-2",
  code: "7-2",
  title: "Sequences and Sigma Notation",
  goal: "I CAN represent arithmetic and geometric sequences explicitly and recursively, and use sigma notation and formulas to evaluate arithmetic series.",
  standards: ["HSF-BF.A.2", "HSF-IF.A.3"],
  vocabulary: [
    { term: "Sequence", definition: "An ordered list of numbers, called terms, generated according to a rule." },
    { term: "Explicit formula", definition: "A rule that determines a sequence term directly from its term number $n$." },
    { term: "Recursive formula", definition: "A rule that gives an initial term and determines each later term from one or more earlier terms." },
    { term: "Arithmetic sequence", definition: "A sequence in which the difference between consecutive terms is constant." },
    { term: "Geometric sequence", definition: "A sequence in which the ratio of consecutive terms is constant." },
    { term: "Common difference", definition: "The constant amount added to each term of an arithmetic sequence to obtain the next term." },
    { term: "Common ratio", definition: "The constant factor by which each term of a geometric sequence is multiplied to obtain the next term." },
  ],
  concepts: [
    {
      id: "alg2-u7-sequence-formulas",
      title: "Explicit and recursive sequence formulas",
      skill: "Write, interpret, and convert explicit and recursive rules for arithmetic and geometric sequences.",
      lesson: {
        sections: [
          {
            heading: "Arithmetic sequences",
            body: "An arithmetic sequence has a constant difference $d$. If its first term is $a_1$, then each term is found by adding $d$. The explicit rule $a_n=a_1+(n-1)d$ jumps directly to term $n$; the recursive rule states $a_1$ and $a_n=a_{n-1}+d$ for $n\\ge2$. The factor $n-1$ counts the steps from the first term to the $n$th term.",
          },
          {
            heading: "Geometric sequences",
            body: "A geometric sequence has a constant ratio $r$. Its explicit rule is $a_n=a_1r^{n-1}$, while its recursive rule is $a_1$ together with $a_n=r a_{n-1}$ for $n\\ge2$. Check successive ratios (not differences) to identify a geometric sequence; a zero term may make ratios undefined, so use the given pattern with care.",
          },
          {
            heading: "Converting between forms",
            body: "To convert an explicit rule, identify $a_1$ and the constant difference or ratio, then state the corresponding recursive step. To convert a recursive rule into an explicit one, iterate the rule to identify $a_1$, $d$ or $r$, and the number of changes from term 1 to term $n$. Always check the first term: it is a common source of off-by-one errors.",
          },
        ],
        keyFormulas: [
          { name: "Arithmetic sequence", statement: "$a_n=a_1+(n-1)d$; recursively, $a_1$ is given and $a_n=a_{n-1}+d$." },
          { name: "Geometric sequence", statement: "$a_n=a_1r^{n-1}$; recursively, $a_1$ is given and $a_n=r a_{n-1}$." },
        ],
        workedExample: {
          problem: "A geometric sequence has $a_1=3$ and common ratio $r=2$. Write explicit and recursive rules, then find $a_5$.",
          solution: "The explicit rule is $a_n=3\\cdot2^{n-1}$. The recursive rule is $a_1=3$ and $a_n=2a_{n-1}$ for $n\\ge2$. Then $a_5=3\\cdot2^4=48$.",
        },
      },
      questions: [
        {
          id: "alg2-u7-sequences-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "An arithmetic sequence has first term $8$ and common difference $-3$. Which is its explicit formula?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$a_n=8-3n$" },
              { id: "b", text: "$a_n=-3+8(n-1)$" },
              { id: "c", text: "$a_n=8(-3)^{n-1}$" },
              { id: "d", text: "$a_n=8-3(n-1)$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arithmetic explicit rule", statement: "$a_n=a_1+(n-1)d$, where $a_1$ is the first term and $d$ is the common difference." },
            ],
            steps: [
              { reasoning: "Identify the first term and common difference in the explicit sequence rule.", working: "a_1=8,\\quad d=-3", marks: 1, markCode: "B" },
              { reasoning: "Substitute these values into the arithmetic formula; the first term occurs when $n=1$.", working: "a_n=8-3(n-1)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $a_n=8-3(n-1)$",
            commonErrors: ["Using $8-3n$, which gives the wrong first term.", "Using a power of $-3$, which would describe a geometric pattern."],
          },
        },
        {
          id: "alg2-u7-sequences-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A geometric sequence is defined recursively by $a_1=5$ and $a_n=-2a_{n-1}$ for $n\\ge2$. Find $a_5$.",
          response: { type: "numeric", parts: [{ label: "$a_5$", answer: 80 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Recursive geometric sequence", statement: "Each term after the first is the previous term multiplied by the common ratio." },
            ],
            steps: [
              { reasoning: "Read the common ratio from the factor multiplying the previous term.", working: "r=-2", marks: 1, markCode: "B" },
              { reasoning: "Apply the recurrence successively from the first term through the fifth.", working: "a_2=-10,\\quad a_3=20,\\quad a_4=-40,\\quad a_5=80", marks: 1, markCode: "M" },
              { reasoning: "Confirm the sign alternates with each multiplication by a negative ratio.", working: "a_5=80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a_5=80$.",
            commonErrors: ["Using the common ratio as $2$ and losing the alternating signs.", "Multiplying the first term by $r^5$ instead of $r^4$."],
          },
        },
        {
          id: "alg2-u7-sequences-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The sequence is defined explicitly by $a_n=14+5(n-1)$. Write a recursive definition and find $a_8$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arithmetic sequence", statement: "$a_n=a_1+(n-1)d$ corresponds to $a_1$ and recurrence $a_n=a_{n-1}+d$." },
            ],
            steps: [
              { reasoning: "Read the first term and common difference from the explicit rule.", working: "a_1=14,\\quad d=5", marks: 1, markCode: "B" },
              { reasoning: "Use the first term and the fixed increment to state a complete recursive definition.", working: "a_1=14,\\quad a_n=a_{n-1}+5\\quad(n\\ge2)", marks: 1, markCode: "M" },
              { reasoning: "Substitute $n=8$ into the explicit rule; there are seven increments after the first term.", working: "a_8=14+5(8-1)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to obtain the eighth term.", working: "a_8=49", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a_1=14$, $a_n=a_{n-1}+5$ for $n\\ge2$, and $a_8=49$.",
            commonErrors: ["Using $n$ increments rather than $n-1$.", "Giving a recurrence without specifying its first term."],
          },
        },
        {
          id: "alg2-u7-sequences-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A theater tracks the number of tickets sold in two online campaigns. Campaign A begins with 128 tickets sold and adds 35 tickets each day. Campaign B begins with 128 tickets sold, and each day its total is 1.25 times the previous day's total. Let $A_n$ and $B_n$ be the totals on day $n$, with day 1 as the starting day.",
          parts: [
            { label: "a", prompt: "Write an explicit formula for $A_n$.", marks: 2 },
            { label: "b", prompt: "Write a recursive formula for $A_n$, including its initial term.", marks: 2 },
            { label: "c", prompt: "Write an explicit formula for $B_n$ and find $B_4$.", marks: 3 },
            { label: "d", prompt: "Which campaign has more tickets by day 3? Show the two totals.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arithmetic sequence", statement: "$a_n=a_1+(n-1)d$ and $a_n=a_{n-1}+d$." },
              { kind: "formula", name: "Geometric sequence", statement: "$a_n=a_1r^{n-1}$ and $a_n=ra_{n-1}$." },
            ],
            steps: [
              { part: "a", reasoning: "The starting total is the first term and the daily increase is the common difference.", working: "A_n=128+35(n-1)", marks: 2, markCode: "M" },
              { part: "b", reasoning: "State the initial total and add the fixed daily increase to the previous term.", working: "A_1=128,\\quad A_n=A_{n-1}+35\\quad(n\\ge2)", marks: 2, markCode: "M" },
              { part: "c", reasoning: "The repeated multiplier is the common ratio; use the geometric explicit formula and substitute day 4.", working: "B_n=128(1.25)^{n-1};\\quad B_4=128(1.25)^3=250", marks: 3, markCode: "M" },
              { part: "d", reasoning: "Evaluate the arithmetic and geometric rules on day 3 and compare their totals.", working: "A_3=128+2(35)=198;\\quad B_3=128(1.25)^2=200;\\quad 200>198", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $A_n=128+35(n-1)$. (b) $A_1=128$, $A_n=A_{n-1}+35$. (c) $B_n=128(1.25)^{n-1}$ and $B_4=250$. (d) Campaign B has more by day 3: 200 tickets versus 198 in the model.",
            commonErrors: ["Using $n$ instead of $n-1$ in an explicit rule when the starting day is day 1.", "Treating the geometric growth factor 1.25 as an added amount.", "Comparing the totals on different days."],
            examinerNote: "The model can produce a noninteger prediction; do not round unless a question requests a whole-ticket estimate.",
          },
        },
      ],
    },
    {
      id: "alg2-u7-sigma-arithmetic-series",
      title: "Sigma notation and arithmetic series",
      skill: "Translate sigma notation into sums, evaluate arithmetic series, and express a sum using sigma notation.",
      lesson: {
        sections: [
          {
            heading: "Reading sigma notation",
            body: "The Greek letter sigma, $\\sum$, means to add. In $\\sum_{k=1}^{n} a_k$, the expression $a_k$ is the general term, $k=1$ is the starting index, and $n$ is the ending index. Substitute each integer index from the lower limit through the upper limit, including both endpoints.",
          },
          {
            heading: "Arithmetic series",
            body: "An arithmetic series is the sum of consecutive terms of an arithmetic sequence. Pairing the first and last terms, second and next-to-last, and so on shows that the sum is the number of terms multiplied by the average of the first and last terms. Use this formula only after identifying the first term, last term, and number of terms correctly.",
          },
          {
            heading: "Writing a sum in sigma form",
            body: "To represent a finite pattern with sigma notation, identify the index values and write a rule for the term at index $k$. For an arithmetic list, the term changes by a constant amount each time. Check the first and last generated terms against the original list to avoid shifting the index or using the wrong number of terms.",
          },
        ],
        keyFormulas: [
          { name: "Arithmetic series sum", statement: "$S_n=\\dfrac{n}{2}(a_1+a_n)=\\dfrac{n}{2}(2a_1+(n-1)d)$." },
          { name: "Sigma expansion", statement: "$\\sum_{k=m}^{n}a_k=a_m+a_{m+1}+\\cdots+a_n$." },
        ],
        workedExample: {
          problem: "Evaluate $\\sum_{k=1}^{6}(2k+1)$.",
          solution: "The terms are $3,5,7,9,11,13$. They form an arithmetic series with six terms, first term 3, and last term 13. Thus $S_6=\\frac{6}{2}(3+13)=3(16)=48$.",
        },
      },
      questions: [
        {
          id: "alg2-u7-sigma-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Evaluate $\\sum_{k=1}^{4} k$.",
          response: { type: "numeric", parts: [{ label: "Sum", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sigma notation", statement: "$\\sum_{k=m}^{n}a_k$ means add the values of $a_k$ for every integer $k$ from $m$ through $n$." },
            ],
            steps: [
              { reasoning: "List the terms for every integer index from 1 through 4.", working: "1+2+3+4", marks: 1, markCode: "M" },
              { reasoning: "Add the four terms.", working: "1+2+3+4=10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$",
            commonErrors: ["Stopping before the upper index, which is included.", "Reading the index letter as a multiplier rather than a changing input."],
          },
        },
        {
          id: "alg2-u7-sigma-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the sum of the first 10 terms of the arithmetic sequence $5,8,11,14,\\ldots$.",
          response: { type: "numeric", parts: [{ label: "$S_{10}$", answer: 185 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arithmetic series sum", statement: "$S_n=\\dfrac{n}{2}(a_1+a_n)$, where $a_n$ is the final included term." },
              { kind: "formula", name: "Arithmetic term", statement: "$a_n=a_1+(n-1)d$." },
            ],
            steps: [
              { reasoning: "Identify the first term and constant difference, then find the tenth term.", working: "a_1=5,\\quad d=3,\\quad a_{10}=5+9(3)=32", marks: 1, markCode: "M" },
              { reasoning: "Use the number of terms and the average of the first and last terms.", working: "S_{10}=\\frac{10}{2}(5+32)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the product.", working: "S_{10}=5(37)=185", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$S_{10}=185$",
            commonErrors: ["Using 10 as the tenth term rather than finding $a_{10}$.", "Using $d=8$ by subtracting nonconsecutive terms incorrectly."],
          },
        },
        {
          id: "alg2-u7-sigma-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate $\\sum_{j=0}^{5}(2j+1)$. Show the expanded terms and the arithmetic-series calculation.",
          response: { type: "numeric", parts: [{ label: "Sum", answer: 36 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Finite sum", statement: "The index takes every integer value from the lower sigma limit through the upper limit, inclusive." },
              { kind: "formula", name: "Arithmetic series sum", statement: "$S_n=\\dfrac{n}{2}(a_1+a_n)$." },
            ],
            steps: [
              { reasoning: "Substitute each index from 0 through 5 into the summand.", working: "1+3+5+7+9+11", marks: 1, markCode: "M" },
              { reasoning: "Count the included terms and identify the first and last terms.", working: "n=6,\\quad a_1=1,\\quad a_6=11", marks: 1, markCode: "B" },
              { reasoning: "Apply the arithmetic series formula to the six listed terms.", working: "S_6=\\frac{6}{2}(1+11)", marks: 1, markCode: "M" },
              { reasoning: "Simplify to obtain the sum.", working: "S_6=3(12)=36", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$36$",
            commonErrors: ["Counting five terms because $5-0=5$, rather than including both endpoints to get six terms.", "Starting at $j=1$ instead of the specified lower limit $j=0$."],
          },
        },
        {
          id: "alg2-u7-sigma-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A science club records a weekly savings total. The amount added each week forms the arithmetic sequence $12,17,22,27,\\ldots$ dollars. The club makes these deposits for 12 weeks.",
          parts: [
            { label: "a", prompt: "Write the amount deposited in week $k$ as a formula in $k$.", marks: 2 },
            { label: "b", prompt: "Write the total deposited over 12 weeks using sigma notation.", marks: 2 },
            { label: "c", prompt: "Find the amount deposited in week 12.", marks: 2 },
            { label: "d", prompt: "Calculate the total amount deposited over the 12 weeks.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arithmetic term", statement: "$a_k=a_1+(k-1)d$." },
              { kind: "formula", name: "Arithmetic series sum", statement: "$S_n=\\dfrac{n}{2}(a_1+a_n)$." },
              { kind: "definition", name: "Sigma notation", statement: "$\\sum_{k=1}^{12}a_k$ adds the terms for integer indices from 1 through 12, including both endpoints." },
            ],
            steps: [
              { part: "a", reasoning: "The first deposit is 12 and the common difference is 5 dollars per week.", working: "a_k=12+5(k-1)=5k+7", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Sum the general deposit term over the 12 week indices.", working: "\\sum_{k=1}^{12}(5k+7)", marks: 2, markCode: "B" },
              { part: "c", reasoning: "Substitute week 12 into the term rule.", working: "a_{12}=12+11(5)=67", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Use the first and twelfth deposits in the arithmetic series formula.", working: "S_{12}=\\frac{12}{2}(12+67)=6(79)=474", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $a_k=12+5(k-1)=5k+7$. (b) $\\sum_{k=1}^{12}(5k+7)$. (c) Week 12 deposit: $67$ dollars. (d) Total: $474$ dollars.",
            commonErrors: ["Writing a term formula with $5k+12$ instead of accounting for the first term at $k=1$.", "Using the common difference as the final term.", "Using 12 as the final deposit rather than the number of deposits."],
          },
        },
      ],
    },
  ],
};
