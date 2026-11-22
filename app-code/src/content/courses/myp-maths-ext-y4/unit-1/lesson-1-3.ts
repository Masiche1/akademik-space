import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "mypme4-u1-lesson-1-3",
  code: "1-3",
  title: "Absolute Value, Inequalities and Standard Form",
  goal: "I CAN solve equations and inequalities involving absolute value, manipulate expressions in standard form, and extend index work to negative and fractional powers.",
  standards: [
    "MYP Maths: Number",
    "MYP Maths: Algebra",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
  ],
  vocabulary: [
    { term: "Absolute value", definition: "The distance from zero on a number line, written $|x|$; always non-negative." },
    { term: "Absolute value equation", definition: "An equation containing $|x|$, e.g. $|x-3|=5$, which typically has two solutions." },
    { term: "Standard form", definition: "$a\\times10^n$ with $1\\le a<10$ and $n$ an integer." },
    { term: "Orders of magnitude", definition: "The power of 10 in standard form; each step is a factor of 10." },
    { term: "Modulus", definition: "Another name for absolute value; $|x|$ is the modulus of $x$." },
  ],
  concepts: [
    {
      id: "mypme4-u1-abs",
      title: "Absolute value equations and inequalities",
      skill: "Solve equations and inequalities involving absolute value by considering both cases.",
      lesson: {
        sections: [
          {
            heading: "Absolute value equations",
            body: "Since $|x|$ is the distance from zero, $|x-3|=5$ means $x-3=5$ or $x-3=-5$, giving $x=8$ or $x=-2$. Always check both solutions in the original equation.",
          },
          {
            heading: "Absolute value inequalities",
            body: "$|x|<a$ means $-a<x<a$ (between the bounds). $|x|>a$ means $x<-a$ or $x>a$ (outside the bounds). For $|x-2|\\le3$: $-3\\le x-2\\le3$, so $-1\\le x\\le5$.",
          },
          {
            heading: "Graphical interpretation",
            body: "On a graph, $y=|x|$ is a V-shape. $|f(x)|<k$ selects regions where the graph is within $k$ of the x-axis. This helps visualise solutions to absolute value inequalities.",
          },
        ],
        keyFormulas: [
          { name: "Definition", statement: "$|x|=x$ if $x\\ge0$; $|x|=-x$ if $x<0$" },
          { name: "Less than", statement: "$|x-a|<b \\Rightarrow a-b<x<a+b$" },
          { name: "Greater than", statement: "$|x-a|>b \\Rightarrow x<a-b$ or $x>a+b$" },
        ],
        workedExample: {
          problem: "Solve $|2x+1|=7$.",
          solution: "$2x+1=7 \\Rightarrow x=3$; or $2x+1=-7 \\Rightarrow x=-4$. Both check: $|2(3)+1|=7$ and $|2(-4)+1|=|-7|=7$. ✓",
        },
      },
      questions: [
        {
          id: "mypme4-u1-abs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $|-9|+|4|$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "-13" },
              { id: "b", text: "5" },
              { id: "c", text: "-5" },
              { id: "d", text: "13" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absolute value", statement: "$|x|$ is always non-negative." },
            ],
            steps: [
              { reasoning: "$|-9|=9$, $|4|=4$, sum = 13.", working: "9+4=13", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 13",
            commonErrors: ["Keeping the negative sign."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u1-abs-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $|x-4|=3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=7$ or $x=1$" },
              { id: "b", text: "$x=7$ only" },
              { id: "c", text: "$x=-1$ or $x=7$" },
              { id: "d", text: "$x=1$ only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Absolute value equation", statement: "Two cases: $x-4=3$ or $x-4=-3$." },
            ],
            steps: [
              { reasoning: "$x-4=3 \\Rightarrow x=7$; $x-4=-3 \\Rightarrow x=1$.", working: "x=7\\text{ or }x=1", marks: 1, markCode: "M" },
              { reasoning: "Check both: $|7-4|=3$ and $|1-4|=|-3|=3$. ✓", working: "\\text{both check}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=7$ or $x=1$",
            commonErrors: ["Finding only one solution."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u1-abs-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $|x+2|<5$, giving your answer as an inequality.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-3<x<7$" },
              { id: "b", text: "$x<-7$ or $x>3$" },
              { id: "c", text: "$-7<x<3$" },
              { id: "d", text: "$-7\\le x\\le3$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Absolute value inequality", statement: "$|x-a|<b \\Rightarrow a-b<x<a+b$." },
            ],
            steps: [
              { reasoning: "$-5<x+2<5$.", working: "-5<x+2<5", marks: 1, markCode: "M" },
              { reasoning: "Subtract 2: $-7<x<3$.", working: "-7<x<3", marks: 1, markCode: "M" },
              { reasoning: "Strict inequalities since original is $<$." , working: "-7<x<3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-7<x<3$",
            commonErrors: ["Reversing to $>$ form, or including endpoints."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u1-abs-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve the following.",
          parts: [
            { label: "a", prompt: "Solve $|3x-6|=9$.", marks: 3 },
            { label: "b", prompt: "Solve $|x-1|\\ge4$.", marks: 3 },
            { label: "c", prompt: "Find the number of integer solutions to $|x|<3.5$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Absolute value", statement: "Equations give two cases; inequalities give ranges." },
            ],
            steps: [
              { part: "a", reasoning: "$3x-6=9 \\Rightarrow x=5$; $3x-6=-9 \\Rightarrow x=-1$.", working: "x=5\\text{ or }x=-1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solve first case.", working: "x=5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solve second case and state both.", working: "x=-1", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$|x-1|\\ge4 \\Rightarrow x-1\\ge4$ or $x-1\\le-4$.", working: "x\\ge5\\text{ or }x\\le-3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve both inequalities.", working: "x\\ge5,\\ x\\le-3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the solution set.", working: "x\\le-3\\text{ or }x\\ge5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$|x|<3.5 \\Rightarrow -3.5<x<3.5$; integers: $-3,-2,-1,0,1,2,3$.", working: "7\\text{ integers}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Count them.", working: "7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x=5$ or $x=-1$ (b) $x\\le-3$ or $x\\ge5$ (c) 7 integers",
            commonErrors: ["In (b), writing $-3<x<5$ — that's the $<$ case."],
            examinerNote: "M1 M1 A1 for (a), M1 M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypme4-u1-abs-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $|{-6}|-|3|$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9" },
              { id: "b", text: "-9" },
              { id: "c", text: "-3" },
              { id: "d", text: "3" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Absolute value", statement: "$|x|$ is always non-negative." },
            ],
            steps: [
              { reasoning: "$|{-6}|=6$, $|3|=3$, so $6-3=3$.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** 3",
            commonErrors: ["Computing $|{-6}|-|3|=|-9|$ incorrectly or keeping signs."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u1-abs-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $|x|=9$.",
          response: { type: "numeric", parts: [
            { label: "$x$ (positive)", answer: 9 },
            { label: "$x$ (negative)", answer: -9 },
          ], unordered: true },
          markscheme: {
            principles: [
              { kind: "principle", name: "Absolute value equation", statement: "$|x|=a$ gives $x=a$ or $x=-a$." },
            ],
            steps: [
              { reasoning: "$x=9$ or $x=-9$; both check: $|9|=9$ and $|{-9}|=9$.", working: "x=\\pm9", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$x=9$ or $x=-9$",
            commonErrors: ["Giving only $x=9$."],
          },
        },
        {
          id: "mypme4-u1-abs-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $|x+1|=4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=5$ or $x=-3$" },
              { id: "b", text: "$x=3$ or $x=-5$" },
              { id: "c", text: "$x=3$ only" },
              { id: "d", text: "$-5<x<3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Absolute value equation", statement: "Two cases: $x+1=4$ or $x+1=-4$." },
            ],
            steps: [
              { reasoning: "$x+1=4 \\Rightarrow x=3$; $x+1=-4 \\Rightarrow x=-5$.", working: "x=3\\text{ or }x=-5", marks: 1, markCode: "M" },
              { reasoning: "Check: $|3+1|=4$ and $|{-5}+1|=|{-4}|=4$. ✓", working: "\\text{both check}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3$ or $x=-5$",
            commonErrors: ["Sign error in the second case."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u1-abs-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $|2x|=10$.",
          response: { type: "numeric", parts: [
            { label: "$x$ (positive)", answer: 5 },
            { label: "$x$ (negative)", answer: -5 },
          ], unordered: true },
          markscheme: {
            principles: [
              { kind: "principle", name: "Absolute value equation", statement: "Two cases: $2x=10$ or $2x=-10$." },
            ],
            steps: [
              { reasoning: "$2x=10 \\Rightarrow x=5$; $2x=-10 \\Rightarrow x=-5$.", working: "x=\\pm5", marks: 1, markCode: "M" },
              { reasoning: "Both check: $|2(5)|=10$ and $|2(-5)|=10$. ✓", working: "x=5\\text{ or }x=-5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=5$ or $x=-5$",
            commonErrors: ["Dividing only the positive case."],
          },
        },
        {
          id: "mypme4-u1-abs-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $|x-3|\\le2$, giving your answer as an inequality.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x\\le1$ or $x\\ge5$" },
              { id: "b", text: "$1\\le x\\le5$" },
              { id: "c", text: "$-1\\le x\\le5$" },
              { id: "d", text: "$1<x<5$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Absolute value inequality", statement: "$|x-a|\\le b \\Rightarrow a-b\\le x\\le a+b$." },
            ],
            steps: [
              { reasoning: "$-2\\le x-3\\le2$; add 3: $1\\le x\\le5$.", working: "1\\le x\\le5", marks: 1, markCode: "M" },
              { reasoning: "Endpoints included since $\\le$. ✓", working: "\\le", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1\\le x\\le5$",
            commonErrors: ["Reversing to the $>$ case, or excluding endpoints."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u1-abs-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $|x+2|\\ge3$.",
          response: { type: "numeric", parts: [
            { label: "Lower boundary of $x$", answer: -5 },
            { label: "Upper boundary of $x$", answer: 1 },
          ] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Absolute value inequality", statement: "$|x-a|\\ge b \\Rightarrow x\\le a-b$ or $x\\ge a+b$." },
            ],
            steps: [
              { reasoning: "$x+2\\ge3 \\Rightarrow x\\ge1$; $x+2\\le-3 \\Rightarrow x\\le-5$.", working: "x\\le-5\\text{ or }x\\ge1", marks: 1, markCode: "M" },
              { reasoning: "Boundaries are $-5$ and $1$.", working: "-5\\text{ and }1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\le-5$ or $x\\ge1$ (boundaries $-5$, $1$)",
            commonErrors: ["Writing $-5<x<1$ — that's the $<$ case."],
          },
        },
        {
          id: "mypme4-u1-abs-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $|3x-2|=7$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=\\frac{5}{3}$ or $x=-3$" },
              { id: "b", text: "$x=3$ only" },
              { id: "c", text: "$x=3$ or $x=-\\frac{5}{3}$" },
              { id: "d", text: "$x=3$ or $x=\\frac{5}{3}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Absolute value equation", statement: "Two cases: $3x-2=7$ or $3x-2=-7$." },
            ],
            steps: [
              { reasoning: "$3x-2=7 \\Rightarrow 3x=9 \\Rightarrow x=3$.", working: "x=3", marks: 1, markCode: "M" },
              { reasoning: "$3x-2=-7 \\Rightarrow 3x=-5 \\Rightarrow x=-\\frac{5}{3}$.", working: "x=-\\frac{5}{3}", marks: 1, markCode: "M" },
              { reasoning: "Both check: $|3(3)-2|=7$ and $|3(-\\frac{5}{3})-2|=|-7|=7$. ✓", working: "\\text{both check}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3$ or $x=-\\frac{5}{3}$",
            commonErrors: ["Sign error solving $3x=-5$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u1-abs-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Solve $|x+5|=8$.",
          response: { type: "numeric", parts: [
            { label: "$x$ (larger)", answer: 3 },
            { label: "$x$ (smaller)", answer: -13 },
          ], unordered: true },
          markscheme: {
            principles: [
              { kind: "principle", name: "Absolute value equation", statement: "Two cases: $x+5=8$ or $x+5=-8$." },
            ],
            steps: [
              { reasoning: "$x+5=8 \\Rightarrow x=3$; $x+5=-8 \\Rightarrow x=-13$.", working: "x=3\\text{ or }x=-13", marks: 1, markCode: "M" },
              { reasoning: "Both check: $|3+5|=8$ and $|{-13}+5|=|{-8}|=8$. ✓", working: "\\text{both check}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3$ or $x=-13$",
            commonErrors: ["Writing $x=13$ for the negative case."],
          },
        },
        {
          id: "mypme4-u1-abs-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Absolute value equations and inequalities.",
          parts: [
            { label: "a", prompt: "Solve $|x-5|=2$.", marks: 2 },
            { label: "b", prompt: "Solve $|x+1|\\le3$, giving an inequality.", marks: 2 },
            { label: "c", prompt: "Find the number of integer solutions to $|x-2|<3$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Absolute value", statement: "Equations give two cases; inequalities give ranges." },
            ],
            steps: [
              { part: "a", reasoning: "$x-5=2 \\Rightarrow x=7$; $x-5=-2 \\Rightarrow x=3$.", working: "x=7\\text{ or }x=3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both solutions.", working: "x=3\\text{ or }x=7", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$-3\\le x+1\\le3$; subtract 1: $-4\\le x\\le2$.", working: "-4\\le x\\le2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the inequality.", working: "-4\\le x\\le2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$|x-2|<3 \\Rightarrow -1<x<5$; integers $0,1,2,3,4$ → 5 integers.", working: "5\\text{ integers}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the count.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x=3$ or $x=7$ (b) $-4\\le x\\le2$ (c) 5 integers",
            commonErrors: ["In (c), including endpoints or miscounting integers."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypme4-u1-abs-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Mixed absolute value problems.",
          parts: [
            { label: "a", prompt: "Solve $|4x+1|=9$.", marks: 3 },
            { label: "b", prompt: "Solve $|x-2|>4$.", marks: 2 },
            { label: "c", prompt: "Explain why $|x-3|=|3-x|$ for all real $x$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Absolute value", statement: "Distance is symmetric: $|a|=|-a|$." },
            ],
            steps: [
              { part: "a", reasoning: "$4x+1=9 \\Rightarrow x=2$; $4x+1=-9 \\Rightarrow x=-\\frac{5}{2}$.", working: "x=2\\text{ or }x=-\\frac{5}{2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solve first case.", working: "x=2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Solve second case and state both.", working: "x=-\\frac{5}{2}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$x-2>4 \\Rightarrow x>6$; $x-2<-4 \\Rightarrow x<-2$.", working: "x>6\\text{ or }x<-2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the solution set.", working: "x<-2\\text{ or }x>6", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$x-3$ and $3-x$ are negatives of each other, and $|a|=|-a|$.", working: "|a|=|-a|", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Conclude equality holds for all $x$.", working: "\\text{always equal}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x=2$ or $x=-\\frac{5}{2}$ (b) $x<-2$ or $x>6$ (c) $3-x=-(x-3)$ and $|a|=|-a|$",
            commonErrors: ["In (a), sign error giving $x=\\frac{5}{2}$ for the negative case."],
            examinerNote: "M1 M1 A1 for (a), M1 A1 for (b), R1 A1 for (c).",
          },
        },
        {
          id: "mypme4-u1-abs-q15",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A set of absolute value problems.",
          parts: [
            { label: "a", prompt: "Solve $|2x-1|=5$.", marks: 2 },
            { label: "b", prompt: "Solve $|x+4|\\ge2$.", marks: 2 },
            { label: "c", prompt: "List all integers $x$ with $|x-1|\\le2$.", marks: 2 },
            { label: "d", prompt: "Solve $|3-x|=1$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Absolute value", statement: "Equations: two cases; inequalities: ranges or outside regions." },
            ],
            steps: [
              { part: "a", reasoning: "$2x-1=5 \\Rightarrow x=3$; $2x-1=-5 \\Rightarrow x=-2$.", working: "x=3\\text{ or }x=-2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both solutions.", working: "x=-2\\text{ or }x=3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$x+4\\ge2 \\Rightarrow x\\ge-2$; $x+4\\le-2 \\Rightarrow x\\le-6$.", working: "x\\le-6\\text{ or }x\\ge-2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the solution set.", working: "x\\le-6\\text{ or }x\\ge-2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$-2\\le x-1\\le2 \\Rightarrow -1\\le x\\le3$; integers $-1,0,1,2,3$.", working: "-1,0,1,2,3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State all five integers.", working: "5\\text{ integers}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$3-x=1 \\Rightarrow x=2$; $3-x=-1 \\Rightarrow x=4$.", working: "x=2\\text{ or }x=4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State both solutions.", working: "x=2\\text{ or }x=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x=-2$ or $x=3$ (b) $x\\le-6$ or $x\\ge-2$ (c) $-1,0,1,2,3$ (d) $x=2$ or $x=4$",
            commonErrors: ["In (d), mishandling the negative sign inside the modulus."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme4-u1-abs-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $|x+3|>5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x<-2$ or $x>8$" },
              { id: "b", text: "$x<-8$ or $x>2$" },
              { id: "c", text: "$x\\le-8$ or $x\\ge2$" },
              { id: "d", text: "$-8<x<2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Absolute value inequality", statement: "$|x-a|>b \\Rightarrow x<a-b$ or $x>a+b$." },
            ],
            steps: [
              { reasoning: "$x+3>5 \\Rightarrow x>2$; $x+3<-5 \\Rightarrow x<-8$.", working: "x>2\\text{ or }x<-8", marks: 1, markCode: "M" },
              { reasoning: "Outside the bounds since the inequality is strict $>$." , working: "x<-8\\text{ or }x>2", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "x<-8\\text{ or }x>2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x<-8$ or $x>2$",
            commonErrors: ["Reversing to the between-the-bounds answer."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
    {
      id: "mypme4-u1-standard",
      title: "Standard form extended",
      skill: "Perform calculations in standard form including addition, subtraction, and multi-step problems.",
      lesson: {
        sections: [
          {
            heading: "Operations in standard form",
            body: "Multiplication and division are straightforward: multiply/divide the mantissas and add/subtract the powers of 10. For **addition and subtraction**, rewrite both numbers with the same power of 10 first.",
          },
          {
            heading: "Adding and subtracting",
            body: "$3\\times10^4+5\\times10^3$: rewrite as $30\\times10^3+5\\times10^3=35\\times10^3=3.5\\times10^4$. For subtraction: $8\\times10^5-3\\times10^4=80\\times10^4-3\\times10^4=77\\times10^4=7.7\\times10^5$.",
          },
          {
            heading: "Multi-step problems",
            body: "Real problems often combine operations: speed of light calculations, population growth, atomic scales. Always convert back to standard form ($1\\le a<10$) at the end and check the order of magnitude is sensible.",
          },
        ],
        keyFormulas: [
          { name: "Same power", statement: "Rewrite both numbers with the same power of 10 before adding/subtracting" },
          { name: "Final form", statement: "$1\\le a<10$" },
        ],
        workedExample: {
          problem: "Calculate $4.2\\times10^6-1.5\\times10^5$.",
          solution: "$42\\times10^5-1.5\\times10^5=40.5\\times10^5=4.05\\times10^6$.",
        },
      },
      questions: [
        {
          id: "mypme4-u1-sfext-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $7.3\\times10^5$ as an ordinary number.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "730000" },
              { id: "b", text: "0.0000073" },
              { id: "c", text: "7300000" },
              { id: "d", text: "73000" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "Move decimal point $n$ places for $10^n$." },
            ],
            steps: [
              { reasoning: "$7.3\\times10^5=730000$.", working: "730000", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 730000",
            commonErrors: ["Miscounting decimal places."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u1-sfext-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $6\\times10^4+3\\times10^3$, giving your answer in standard form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9\\times10^4$" },
              { id: "b", text: "$6.3\\times10^4$" },
              { id: "c", text: "$6.3\\times10^3$" },
              { id: "d", text: "$9\\times10^7$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Same power", statement: "Rewrite as $60\\times10^3+3\\times10^3=63\\times10^3=6.3\\times10^4$." },
            ],
            steps: [
              { reasoning: "$60\\times10^3+3\\times10^3=63\\times10^3$.", working: "63\\times10^3", marks: 1, markCode: "M" },
              { reasoning: "Renormalise: $6.3\\times10^4$.", working: "6.3\\times10^4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6.3\\times10^4$",
            commonErrors: ["Adding powers of 10: $10^4+10^3=10^7$ — wrong."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u1-sfext-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Calculate $\\frac{3.6\\times10^8}{1.2\\times10^4}$, giving your answer in standard form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2.4\\times10^4$" },
              { id: "b", text: "$3\\times10^3$" },
              { id: "c", text: "$3\\times10^{12}$" },
              { id: "d", text: "$3\\times10^4$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard form divide", statement: "Divide mantissas, subtract powers." },
            ],
            steps: [
              { reasoning: "$\\frac{3.6}{1.2}=3$; $10^{8-4}=10^4$.", working: "3\\times10^4", marks: 1, markCode: "M" },
              { reasoning: "Check $1\\le a<10$: correct.", working: "3\\times10^4", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "3\\times10^4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3\\times10^4$",
            commonErrors: ["Adding powers instead of subtracting."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u1-sfext-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "The mass of the Earth is $5.97\\times10^{24}$ kg and the mass of the Moon is $7.35\\times10^{22}$ kg.",
          parts: [
            { label: "a", prompt: "Calculate the total mass of Earth and Moon.", marks: 3 },
            { label: "b", prompt: "Calculate how many times heavier the Earth is than the Moon.", marks: 3 },
            { label: "c", prompt: "Express the Moon's mass as a percentage of Earth's mass.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Standard form", statement: "Same power of 10 for addition; divide mantissas for ratio." },
            ],
            steps: [
              { part: "a", reasoning: "Rewrite Moon: $0.735\\times10^{23}$ or $7.35\\times10^{22}=0.0735\\times10^{24}$.", working: "0.0735\\times10^{24}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Add: $(5.97+0.0735)\\times10^{24}=6.0435\\times10^{24}$ kg.", working: "6.0435\\times10^{24}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the total (≈$6.04\\times10^{24}$ kg).", working: "6.04\\times10^{24}\\text{ kg}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$\\frac{5.97\\times10^{24}}{7.35\\times10^{22}}=\\frac{5.97}{7.35}\\times10^{2}=0.812\\times100=81.2$.", working: "81.2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide correctly.", working: "10^{24-22}=10^2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the ratio.", working: "81.2\\text{ times}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\frac{7.35\\times10^{22}}{5.97\\times10^{24}}=\\frac{7.35}{5.97}\\times10^{-2}=1.231\\times0.01=0.01231$; as a percentage: $1.23\\%$.", working: "1.23\\%", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the percentage.", working: "1.23\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $6.04\\times10^{24}$ kg (b) 81.2 times (c) 1.23%",
            commonErrors: ["In (c), dividing in the wrong direction."],
            examinerNote: "M1 M1 A1 for (a), M1 M1 A1 for (b), M1 A1 for (c).",
          },
        },
        {
          id: "mypme4-u1-sfext-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $4.5\\times10^{-3}$ as an ordinary number.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "0.045" },
              { id: "b", text: "0.0045" },
              { id: "c", text: "0.00045" },
              { id: "d", text: "4500" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "Negative power → decimal moves left." },
            ],
            steps: [
              { reasoning: "$4.5\\times10^{-3}=0.0045$.", working: "0.0045", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 0.0045",
            commonErrors: ["Moving the decimal the wrong direction."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme4-u1-sfext-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write $3.2\\times10^4$ as an ordinary number.",
          response: { type: "numeric", parts: [{ label: "Ordinary number", answer: 32000 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "Move the decimal point 4 places right." },
            ],
            steps: [
              { reasoning: "$3.2\\times10^4=32000$.", working: "32000", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$32000$",
            commonErrors: ["Writing 3200 — one place short."],
          },
        },
        {
          id: "mypme4-u1-sfext-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $7\\times10^5+2\\times10^4$, giving your answer in standard form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7.2\\times10^4$" },
              { id: "b", text: "$9\\times10^5$" },
              { id: "c", text: "$7.2\\times10^5$" },
              { id: "d", text: "$9\\times10^9$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Same power", statement: "Rewrite as $70\\times10^4+2\\times10^4=72\\times10^4=7.2\\times10^5$." },
            ],
            steps: [
              { reasoning: "$70\\times10^4+2\\times10^4=72\\times10^4$.", working: "72\\times10^4", marks: 1, markCode: "M" },
              { reasoning: "Renormalise to $7.2\\times10^5$.", working: "7.2\\times10^5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7.2\\times10^5$",
            commonErrors: ["Adding the powers of 10."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u1-sfext-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $8\\times10^6-3\\times10^5$. Give your answer as an ordinary number.",
          response: { type: "numeric", parts: [{ label: "Ordinary number", answer: 7700000 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Same power", statement: "Rewrite as $80\\times10^5-3\\times10^5=77\\times10^5$." },
            ],
            steps: [
              { reasoning: "$80\\times10^5-3\\times10^5=77\\times10^5=7.7\\times10^6$.", working: "7.7\\times10^6", marks: 1, markCode: "M" },
              { reasoning: "Convert to ordinary number: 7700000.", working: "7700000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7700000$",
            commonErrors: ["Computing $8-3=5$ and keeping $10^6$."],
          },
        },
        {
          id: "mypme4-u1-sfext-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $\\frac{5.6\\times10^3}{1.4\\times10^{-1}}$, giving your answer in standard form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4\\times10^5$" },
              { id: "b", text: "$4\\times10^{-4}$" },
              { id: "c", text: "$4\\times10^2$" },
              { id: "d", text: "$4\\times10^4$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard form divide", statement: "Divide mantissas, subtract powers: $10^{3-(-1)}=10^4$." },
            ],
            steps: [
              { reasoning: "$\\frac{5.6}{1.4}=4$; $10^{3-(-1)}=10^4$.", working: "4\\times10^4", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "4\\times10^4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4\\times10^4$",
            commonErrors: ["Subtracting exponents as $3-1=2$ instead of $3-(-1)=4$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme4-u1-sfext-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Calculate $2.5\\times10^3\\times4\\times10^2$, giving your answer in standard form.",
          response: { type: "numeric", parts: [{ label: "Mantissa × power of 10", answer: 1000000 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard form multiply", statement: "Multiply mantissas, add powers." },
            ],
            steps: [
              { reasoning: "$2.5\\times4=10$; $10^3\\times10^2=10^5$; $10\\times10^5=1\\times10^6$.", working: "1\\times10^6", marks: 1, markCode: "M" },
              { reasoning: "Renormalise: $1\\times10^6=1000000$.", working: "1000000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1\\times10^6$ (1000000)",
            commonErrors: ["Leaving the answer as $10\\times10^5$ without renormalising."],
          },
        },
        {
          id: "mypme4-u1-sfext-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Calculate $\\frac{3\\times10^7+2\\times10^6}{5\\times10^3}$, giving your answer in standard form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1.6\\times10^6$" },
              { id: "b", text: "$6.4\\times10^4$" },
              { id: "c", text: "$6.4\\times10^3$" },
              { id: "d", text: "$6.4\\times10^2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Standard form", statement: "Add first (same power), then divide." },
            ],
            steps: [
              { reasoning: "Numerator: $30\\times10^6+2\\times10^6=32\\times10^6=3.2\\times10^7$.", working: "3.2\\times10^7", marks: 1, markCode: "M" },
              { reasoning: "$\\frac{3.2\\times10^7}{5\\times10^3}=0.64\\times10^4=6.4\\times10^3$.", working: "6.4\\times10^3", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "6.4\\times10^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$6.4\\times10^3$",
            commonErrors: ["Dividing each term separately and forgetting to add first."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u1-sfext-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "City A has population $2.4\\times10^6$ and city B has $8\\times10^5$. Find the difference in populations as an ordinary number.",
          response: { type: "numeric", parts: [{ label: "Difference", answer: 1600000 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Same power", statement: "Rewrite $8\\times10^5=0.8\\times10^6$ before subtracting." },
            ],
            steps: [
              { reasoning: "$2.4\\times10^6-0.8\\times10^6=1.6\\times10^6$.", working: "1.6\\times10^6", marks: 1, markCode: "M" },
              { reasoning: "Convert: 1600000.", working: "1600000", marks: 1, markCode: "M" },
              { reasoning: "State the difference.", working: "1600000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1600000$",
            commonErrors: ["Computing $2.4-8=-5.6$ — must match powers of 10 first."],
          },
        },
        {
          id: "mypme4-u1-sfext-q13",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Calculations in standard form.",
          parts: [
            { label: "a", prompt: "Calculate $5\\times10^4+6\\times10^3$ in standard form.", marks: 2 },
            { label: "b", prompt: "Calculate $9\\times10^3-4\\times10^2$ in standard form.", marks: 2 },
            { label: "c", prompt: "Calculate $\\frac{8\\times10^9}{4\\times10^{-2}}$ in standard form.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Standard form", statement: "Same power for addition/subtraction; divide mantissas and subtract powers." },
            ],
            steps: [
              { part: "a", reasoning: "$50\\times10^3+6\\times10^3=56\\times10^3=5.6\\times10^4$.", working: "5.6\\times10^4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the answer.", working: "5.6\\times10^4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$90\\times10^2-4\\times10^2=86\\times10^2=8.6\\times10^3$.", working: "8.6\\times10^3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the answer.", working: "8.6\\times10^3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\frac{8}{4}=2$; $10^{9-(-2)}=10^{11}$.", working: "2\\times10^{11}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the answer.", working: "2\\times10^{11}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $5.6\\times10^4$ (b) $8.6\\times10^3$ (c) $2\\times10^{11}$",
            commonErrors: ["In (c), computing $10^{9-2}=10^7$ instead of $10^{9-(-2)}$."],
            examinerNote: "M1 A1 for each part.",
          },
        },
        {
          id: "mypme4-u1-sfext-q14",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "The speed of light is $3\\times10^8$ m/s. The Moon is about $1.28$ s of light-travel away.",
          parts: [
            { label: "a", prompt: "Calculate the Earth–Moon distance in metres.", marks: 2 },
            { label: "b", prompt: "Express this distance in kilometres, in standard form.", marks: 2 },
            { label: "c", prompt: "A star is $1.5\\times10^8$ km away. Find the time light takes to reach it, in seconds.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Standard form", statement: "Multiply mantissas, add powers; convert units carefully." },
            ],
            steps: [
              { part: "a", reasoning: "Distance $=3\\times10^8\\times1.28=3.84\\times10^8$ m.", working: "3.84\\times10^8\\text{ m}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the distance.", working: "3.84\\times10^8\\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$3.84\\times10^8$ m $=3.84\\times10^5$ km.", working: "3.84\\times10^5\\text{ km}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State in standard form.", working: "3.84\\times10^5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Speed in km/s: $3\\times10^8$ m/s $=3\\times10^5$ km/s.", working: "3\\times10^5\\text{ km/s}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Time $=\\frac{1.5\\times10^8}{3\\times10^5}=\\frac{1.5}{3}\\times10^3=500$ s.", working: "500\\text{ s}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the time.", working: "500\\text{ s}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3.84\\times10^8$ m (b) $3.84\\times10^5$ km (c) 500 s",
            commonErrors: ["In (c), forgetting to convert m/s to km/s before dividing."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 M1 A1 for (c).",
          },
        },
        {
          id: "mypme4-u1-sfext-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Calculate $7.5\\times10^{-3}\\times2\\times10^{2}$, giving your answer in standard form.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.15$" },
              { id: "b", text: "$1.5\\times10^{-5}$" },
              { id: "c", text: "$15$" },
              { id: "d", text: "$1.5$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Standard form multiply", statement: "Multiply mantissas, add powers: $10^{-3}\\times10^2=10^{-1}$." },
            ],
            steps: [
              { reasoning: "$7.5\\times2=15$; $10^{-3+2}=10^{-1}$.", working: "15\\times10^{-1}", marks: 1, markCode: "M" },
              { reasoning: "Renormalise: $15\\times10^{-1}=1.5$.", working: "1.5", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "1.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.5$",
            commonErrors: ["Leaving $15\\times10^{-1}$ unrenormalised or miscounting powers."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme4-u1-sfext-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which of the following is NOT written in standard form?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5\\times10^3$" },
              { id: "b", text: "$1.2\\times10^{-4}$" },
              { id: "c", text: "$9.9\\times10^{10}$" },
              { id: "d", text: "$0.8\\times10^2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Standard form", statement: "$a\\times10^n$ requires $1\\le a<10$." },
            ],
            steps: [
              { reasoning: "Check each mantissa: 5, 0.8, 1.2, 9.9.", working: "0.8<1", marks: 1, markCode: "M" },
              { reasoning: "$0.8<1$ violates $1\\le a<10$ (it equals $8\\times10^1$).", working: "8\\times10^1", marks: 1, markCode: "M" },
              { reasoning: "Select the invalid form.", working: "0.8\\times10^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $0.8\\times10^2$",
            commonErrors: ["Thinking any number times a power of 10 is standard form."],
            examinerNote: "M1 M1 A1.",
          },
        },
      ],
    },
  ],
};
