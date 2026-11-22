import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "alg1-u3-3-3",
  code: "3-3",
  title: "Arithmetic and Geometric Sequences",
  goal: "I CAN identify arithmetic and geometric sequences and represent them explicitly and recursively.",
  standards: ["HSF-BF.A.2", "HSF-IF.A.3"],
  vocabulary: [
    { term: "Sequence", definition: "An ordered list of numbers generated according to a rule." },
    { term: "Term", definition: "A number in a sequence; $a_n$ denotes the term in position $n$." },
    { term: "Arithmetic sequence", definition: "A sequence in which the difference between consecutive terms is constant." },
    { term: "Common difference", definition: "The constant amount added to each term of an arithmetic sequence; commonly denoted $d$." },
    { term: "Geometric sequence", definition: "A sequence in which the ratio of consecutive terms is constant." },
    { term: "Common ratio", definition: "The constant multiplier between consecutive terms of a geometric sequence; commonly denoted $r$." },
    { term: "Recursive rule", definition: "A rule that specifies an initial term and defines each later term using one or more previous terms." },
  ],
  concepts: [
    {
      id: "alg1-u3-arithmetic-sequences",
      title: "Arithmetic sequences",
      skill: "Identify a common difference and write arithmetic sequences in explicit and recursive form.",
      lesson: {
        sections: [
          {
            heading: "Recognize a constant difference",
            body: "A sequence is arithmetic when subtracting consecutive terms gives the same number each time. That constant difference is $d=a_{n+1}-a_n$. For example, $4, 9, 14, 19,\\ldots$ is arithmetic because each term is 5 greater than the previous term.",
          },
          {
            heading: "Explicit rule",
            body: "An explicit rule gives any term directly from its position: $a_n=a_1+(n-1)d$. The factor $n-1$ counts the number of steps from the first term to position $n$. If $a_1=4$ and $d=5$, then $a_n=4+5(n-1)$, so $a_{10}=49$.",
          },
          {
            heading: "Recursive rule",
            body: "A recursive rule states the initial value and how to get each new term from the previous one: $a_1=4$ and $a_n=a_{n-1}+5$ for $n\\ge2$. The initial term is essential; without it the recursive rule does not determine one unique sequence. A negative common difference describes a sequence that decreases by a fixed amount.",
          },
        ],
        keyFormulas: [
          { name: "Common difference", statement: "$d=a_{n+1}-a_n$" },
          { name: "Explicit arithmetic rule", statement: "$a_n=a_1+(n-1)d$" },
          { name: "Recursive arithmetic rule", statement: "$a_1$ is given; $a_n=a_{n-1}+d$ for $n\\ge2$" },
        ],
        workedExample: {
          problem: "For the sequence $12, 7, 2, -3,\\ldots$, find the common difference, write explicit and recursive rules, and find $a_{11}$.",
          solution: "Consecutive terms differ by $-5$, so $d=-5$. The explicit rule is $a_n=12+(n-1)(-5)=17-5n$. A recursive rule is $a_1=12$ and $a_n=a_{n-1}-5$ for $n\\ge2$. Then $a_{11}=12+10(-5)=-38$.",
        },
      },
      questions: [
        {
          id: "alg1-u3-arithmetic-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The sequence is $4, 9, 14, 19,\\ldots$. What is its sixth term?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$29$" },
              { id: "b", text: "$24$" },
              { id: "c", text: "$30$" },
              { id: "d", text: "$34$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Arithmetic sequence", statement: "An arithmetic sequence changes by the same common difference at every step." },
            ],
            steps: [
              { reasoning: "Find the constant difference between terms.", working: "9-4=5", marks: 1, markCode: "M" },
              { reasoning: "Advance two additional steps from the fourth term to the sixth term.", working: "a_6=19+2(5)=29", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $29$",
            commonErrors: ["Returning the fifth term, 24, after adding only once to the fourth term.", "Multiplying the position by the common difference without using the first term correctly."],
          },
        },
        {
          id: "alg1-u3-arithmetic-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "An arithmetic sequence has $a_1=-3$ and common difference $d=4$. Find $a_{10}$.",
          response: { type: "numeric", parts: [{ label: "$a_{10}$", answer: 33 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Explicit arithmetic rule", statement: "$a_n=a_1+(n-1)d$." },
            ],
            steps: [
              { reasoning: "Substitute the given initial term and common difference into the explicit formula.", working: "a_{10}=-3+(10-1)(4)", marks: 1, markCode: "M" },
              { reasoning: "There are nine steps from the first term to the tenth term.", working: "a_{10}=-3+36", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the expression.", working: "a_{10}=33", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a_{10}=33$",
            commonErrors: ["Using ten increments instead of nine.", "Adding 3 instead of using the initial term $-3$."],
          },
        },
        {
          id: "alg1-u3-arithmetic-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "An arithmetic sequence begins $18, 13, 8, 3,\\ldots$. Write an explicit rule for $a_n$ and find $a_{12}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Common difference", statement: "$d=a_{n+1}-a_n$." },
              { kind: "formula", name: "Explicit arithmetic rule", statement: "$a_n=a_1+(n-1)d$." },
            ],
            steps: [
              { reasoning: "Subtract consecutive terms to find the constant difference.", working: "d=13-18=-5", marks: 1, markCode: "M" },
              { reasoning: "Use $a_1=18$ and $d=-5$ in the explicit rule.", working: "a_n=18-5(n-1)", marks: 1, markCode: "M" },
              { reasoning: "Simplify the explicit expression.", working: "a_n=23-5n", marks: 1, markCode: "A" },
              { reasoning: "Substitute $n=12$ to find the requested term.", working: "a_{12}=23-5(12)=-37", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a_n=18-5(n-1)=23-5n$; $a_{12}=-37$.",
            commonErrors: ["Using $d=5$ and making the sequence increase.", "Using $n$ steps rather than $n-1$ in the explicit formula."],
          },
        },
        {
          id: "alg1-u3-arithmetic-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An arithmetic sequence begins with $a_1=7$ and has common difference $d=-3$.",
          parts: [
            { label: "a", prompt: "Write a recursive rule, including the initial term and the valid indices.", marks: 2 },
            { label: "b", prompt: "Write an explicit rule for $a_n$ and simplify it.", marks: 2 },
            { label: "c", prompt: "Find $a_{15}$.", marks: 2 },
            { label: "d", prompt: "Find the term number $n$ for which $a_n=-50$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Recursive arithmetic rule", statement: "$a_1$ is specified and $a_n=a_{n-1}+d$ for $n\\ge2$." },
              { kind: "formula", name: "Explicit arithmetic rule", statement: "$a_n=a_1+(n-1)d$." },
            ],
            steps: [
              { part: "a", reasoning: "State the supplied initial value and subtract 3 from each preceding term.", working: "a_1=7;\\quad a_n=a_{n-1}-3,\\ n\\ge2", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Substitute the first term and difference into the explicit formula, then simplify.", working: "a_n=7-3(n-1)=10-3n", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Substitute position 15 into the explicit formula.", working: "a_{15}=10-3(15)=10-45=-35", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Set the explicit formula equal to the target term and solve for the position.", working: "10-3n=-50\\implies -3n=-60\\implies n=20", marks: 2, markCode: "M" },
            ],
            finalAnswer: "(a) $a_1=7$, $a_n=a_{n-1}-3$ for $n\\ge2$; (b) $a_n=10-3n$; (c) $a_{15}=-35$; (d) $n=20$.",
            commonErrors: ["Omitting the initial term in the recursive rule.", "Using $a_n=7-3n$ and losing the $n-1$ step count.", "Solving part (d) with an arithmetic sign error."],
          },
        },
      ],
    },
    {
      id: "alg1-u3-geometric-sequences",
      title: "Geometric sequences",
      skill: "Identify a common ratio and write geometric sequences in explicit and recursive form.",
      lesson: {
        sections: [
          {
            heading: "Recognize a constant ratio",
            body: "A sequence is geometric when each term is obtained by multiplying the previous term by the same nonzero factor. That common ratio is $r=\\frac{a_{n+1}}{a_n}$ when the denominator is nonzero. For example, $3, 6, 12, 24,\\ldots$ has common ratio 2.",
          },
          {
            heading: "Explicit rule",
            body: "An explicit rule gives a term directly: $a_n=a_1r^{n-1}$. The exponent counts the number of multiplications after the first term. If $a_1=3$ and $r=2$, then $a_6=3(2)^5=96$.",
          },
          {
            heading: "Recursive rule and signed ratios",
            body: "A recursive rule gives the initial term and multiplies by the common ratio: $a_1=3$ and $a_n=2a_{n-1}$ for $n\\ge2$. A negative ratio makes signs alternate; for example, with $a_1=5$ and $r=-2$, terms are $5,-10,20,-40,\\ldots$. Always count term positions carefully when using either form.",
          },
        ],
        keyFormulas: [
          { name: "Common ratio", statement: "$r=\\frac{a_{n+1}}{a_n}$ when $a_n\\ne0$" },
          { name: "Explicit geometric rule", statement: "$a_n=a_1r^{n-1}$" },
          { name: "Recursive geometric rule", statement: "$a_1$ is given; $a_n=ra_{n-1}$ for $n\\ge2$" },
        ],
        workedExample: {
          problem: "For the sequence $81, 27, 9, 3,\\ldots$, find the common ratio, write explicit and recursive rules, and find $a_6$.",
          solution: "Each term is one-third of the previous term, so $r=\\frac13$. The explicit rule is $a_n=81(\\frac13)^{n-1}$. A recursive rule is $a_1=81$ and $a_n=\\frac13a_{n-1}$ for $n\\ge2$. Then $a_6=81(\\frac13)^5=\\frac{81}{243}=\\frac13$.",
        },
      },
      questions: [
        {
          id: "alg1-u3-geometric-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The sequence is $3, 6, 12, 24,\\ldots$. What is its sixth term?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$96$" },
              { id: "b", text: "$72$" },
              { id: "c", text: "$192$" },
              { id: "d", text: "$48$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Geometric sequence", statement: "A geometric sequence is formed by multiplying each term by the same common ratio." },
            ],
            steps: [
              { reasoning: "Find the multiplier between consecutive terms.", working: "\\frac{6}{3}=2", marks: 1, markCode: "M" },
              { reasoning: "Multiply the fourth term by the ratio twice to reach the sixth term.", working: "a_6=24(2)^2=96", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $96$",
            commonErrors: ["Returning the fifth term, 48, instead of the sixth.", "Using a constant difference instead of the common ratio."],
          },
        },
        {
          id: "alg1-u3-geometric-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A geometric sequence has $a_1=5$ and common ratio $r=-2$. Find $a_5$.",
          response: { type: "numeric", parts: [{ label: "$a_5$", answer: 80 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Explicit geometric rule", statement: "$a_n=a_1r^{n-1}$." },
            ],
            steps: [
              { reasoning: "Substitute the initial term, ratio, and requested position.", working: "a_5=5(-2)^{5-1}", marks: 1, markCode: "M" },
              { reasoning: "There are four multiplications, and the even power makes the product positive.", working: "(-2)^4=16", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the first term.", working: "a_5=5(16)=80", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$a_5=80$",
            commonErrors: ["Using exponent 5 rather than 4.", "Keeping the fifth term negative despite the even power."],
          },
        },
        {
          id: "alg1-u3-geometric-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A geometric sequence begins $81, 27, 9, 3,\\ldots$. Write both an explicit and a recursive rule, then find $a_6$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Common ratio", statement: "$r=a_{n+1}/a_n$ for nonzero $a_n$." },
              { kind: "formula", name: "Explicit geometric rule", statement: "$a_n=a_1r^{n-1}$." },
              { kind: "formula", name: "Recursive geometric rule", statement: "$a_1$ is specified and $a_n=ra_{n-1}$ for $n\\ge2$." },
            ],
            steps: [
              { reasoning: "Divide consecutive terms to find the common ratio.", working: "r=\\frac{27}{81}=\\frac13", marks: 1, markCode: "M" },
              { reasoning: "Use the initial term and common ratio in the direct formula.", working: "a_n=81(\\frac13)^{n-1}", marks: 1, markCode: "A" },
              { reasoning: "State the recursive rule with its initial term.", working: "a_1=81;\\quad a_n=\\frac13a_{n-1},\\ n\\ge2", marks: 1, markCode: "A" },
              { reasoning: "Use five ratio steps to find the sixth term.", working: "a_6=81(\\frac13)^5=\\frac{81}{243}=\\frac13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Explicit: $a_n=81(\\frac13)^{n-1}$. Recursive: $a_1=81$, $a_n=\\frac13a_{n-1}$ for $n\\ge2$. $a_6=\\frac13$.",
            commonErrors: ["Writing a common difference of $-54$ instead of the ratio.", "Using exponent 6 rather than 5 in the explicit rule."],
          },
        },
        {
          id: "alg1-u3-geometric-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A geometric sequence begins with $a_1=3$ and common ratio $r=2$.",
          parts: [
            { label: "a", prompt: "Write a recursive rule, including the initial term and valid indices.", marks: 2 },
            { label: "b", prompt: "Write an explicit rule for $a_n$.", marks: 2 },
            { label: "c", prompt: "Find $a_8$.", marks: 2 },
            { label: "d", prompt: "Find the first term of the sequence that is greater than 500, and give its term number.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Recursive geometric rule", statement: "$a_1$ is given and $a_n=ra_{n-1}$ for $n\\ge2$." },
              { kind: "formula", name: "Explicit geometric rule", statement: "$a_n=a_1r^{n-1}$." },
              { kind: "property", name: "Increasing geometric sequence", statement: "When $a_1>0$ and $r>1$, each term is greater than the preceding term." },
            ],
            steps: [
              { part: "a", reasoning: "State the first term and multiply each subsequent term by the ratio 2.", working: "a_1=3;\\quad a_n=2a_{n-1},\\ n\\ge2", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Use the initial term and ratio in the explicit rule.", working: "a_n=3(2)^{n-1}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Substitute 8; the exponent counts seven steps after the first term.", working: "a_8=3(2)^7=3(128)=384", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Check the terms around the threshold because the sequence increases.", working: "a_8=384<500;\\quad a_9=3(2)^8=768>500", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Since the eighth term is below 500 and the ninth exceeds it, the ninth term is the first one greater than 500.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $a_1=3$, $a_n=2a_{n-1}$ for $n\\ge2$; (b) $a_n=3(2)^{n-1}$; (c) $a_8=384$; (d) first term greater than 500 is $a_9=768$.",
            commonErrors: ["Using exponent 8 rather than 7 to find $a_8$.", "Claiming $a_8$ exceeds 500; its value is 384.", "Omitting the initial term from the recursive description."],
          },
        },
      ],
    },
  ],
};
