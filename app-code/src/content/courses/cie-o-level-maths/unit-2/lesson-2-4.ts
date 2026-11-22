import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "olm-u2-lesson-2-4",
  code: "2-4",
  title: "Inequalities and Sequences",
  goal: "I CAN solve inequalities and work with arithmetic sequences.",
  standards: ["4024: algebra"],
  vocabulary: [
    { term: "Inequality", definition: "Relation like $x>3$ or $2\\leq x<5$." },
    { term: "Number line", definition: "Visual representation of inequalities." },
    { term: "Arithmetic sequence", definition: "Sequence with constant difference $d$." },
    { term: "nth term", definition: "$u_n=a+(n-1)d$." },
  ],
  concepts: [
    {
      id: "olm-u2-s4-inequalities",
      title: "Solving inequalities",
      skill: "Solve linear inequalities at O Level.",
      lesson: {
        sections: [
          { heading: "Same as equations — almost", body: "Linear inequalities solve exactly like equations using inverse operations, with one crucial exception: when you multiply or divide by a negative number, you must reverse the inequality sign. $-2x>6$ becomes $x<-3$, not $x>-3$. This flip is the single most-tested point in this topic." },
          { heading: "Representing solutions", body: "Solutions can be shown on a number line: open circle for strict ($>$, $<$), filled for inclusive ($\\geq$, $\\leq$). Compound inequalities like $2<x\\leq5$ describe intervals. For 'between' problems involving two inequalities, find where both conditions hold simultaneously — the overlap on the number line." },
        ],
        keyFormulas: [
          { name: "Sign flip", statement: "Multiply/divide by negative → reverse inequality" },
        ],
        workedExample: { problem: "Solve $3-2x\\geq7$.", solution: "$-2x\\geq4$ → divide by $-2$ (flip!): $x\\leq-2$. Check: $x=-2$ gives $3+4=7$ ✓ (boundary included since $\\geq$)." },
      },
      questions: [
        {
          id: "olm-u2-s4-in-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Solve $x+5>12$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x<7$" },
            { id: "b", text: "$x>7$" },
            { id: "c", text: "$x>17$" },
            { id: "d", text: "$x>-7$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Linear inequality", statement: "Inverse ops." }], steps: [{ reasoning: "$x>7$.", marks: 1, markCode: "A" }], finalAnswer: "$x>7$" },
        },
        {
          id: "olm-u2-s4-in-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $2x-3\\leq7$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Linear inequality", statement: "No flip needed." }], steps: [
            { reasoning: "$2x\\leq10$ → $x\\leq5$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x\\leq5$" },
        },
        {
          id: "olm-u2-s4-in-q3", difficulty: "core", totalMarks: 3,
          stem: "Solve $-3x+2>11$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Sign flip", statement: "Divide by negative." }], steps: [
            { reasoning: "$-3x>9$ → $x<-3$ (flip inequality).", marks: 1, markCode: "M" },
            { reasoning: "Check: $x=-4$: $12+2=14>11$ ✓; $x=-2$: $6+2=8\\not>11$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x<-3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x<-3$" },
        },
        {
          id: "olm-u2-s4-in-q4", difficulty: "core", totalMarks: 4,
          stem: "Find all integers satisfying $-4\\leq2x+1<7$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Compound inequality", statement: "Solve both parts." }], steps: [
            { reasoning: "$-4\\leq2x+1$ → $-5\\leq2x$ → $x\\geq-2.5$; $2x+1<7$ → $x<3$.", marks: 1, markCode: "M" },
            { reasoning: "Combined: $-2.5\\leq x<3$.", marks: 1, markCode: "M" },
            { reasoning: "Integers: $-2,-1,0,1,2$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=-2,-1,0,1,2$" },
        },
        {
          id: "olm-u2-s4-in-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Solve $3x+2>14$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x>4$" },
            { id: "b", text: "$x>16$" },
            { id: "c", text: "$x<4$" },
            { id: "d", text: "$x<-4$" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Linear inequality", statement: "Inverse ops." }], steps: [{ reasoning: "$3x>12$ → $x>4$.", marks: 1, markCode: "A" }], finalAnswer: "$x>4$" },
        },
        {
          id: "olm-u2-s4-in-q6", difficulty: "foundation", totalMarks: 1,
          stem: "Solve $x-4\\leq3$.",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x\\geq1$" },
            { id: "b", text: "$x\\leq-1$" },
            { id: "c", text: "$x\\geq7$" },
            { id: "d", text: "$x\\leq7$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Linear inequality", statement: "Inverse ops." }], steps: [{ reasoning: "$x\\leq7$.", marks: 1, markCode: "A" }], finalAnswer: "$x\\leq7$" },
        },
        {
          id: "olm-u2-s4-in-q7", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $4x+3\\geq19$. Write down the smallest integer value of $x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Linear inequality", statement: "Solve then read off." }], steps: [
            { reasoning: "$4x\\geq16$ → $x\\geq4$.", marks: 1, markCode: "M" },
            { reasoning: "Smallest integer value is 4.", marks: 1, markCode: "A" },
          ], finalAnswer: "4" },
        },
        {
          id: "olm-u2-s4-in-q8", difficulty: "foundation", totalMarks: 2,
          stem: "Solve $7-2x>1$. Write down the largest integer value of $x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Sign flip", statement: "Divide by negative." }], steps: [
            { reasoning: "$-2x>-6$ → divide by $-2$, flip: $x<3$.", marks: 1, markCode: "M" },
            { reasoning: "Largest integer value is 2.", marks: 1, markCode: "A" },
          ], finalAnswer: "2" },
        },
        {
          id: "olm-u2-s4-in-q9", difficulty: "core", totalMarks: 1,
          stem: "The solution of $-5x<20$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x<4$" },
            { id: "b", text: "$x>-4$" },
            { id: "c", text: "$x>-20$" },
            { id: "d", text: "$x<-4$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Sign flip", statement: "Divide by negative." }], steps: [{ reasoning: "$x>-4$ (sign flipped).", marks: 1, markCode: "A" }], finalAnswer: "$x>-4$" },
        },
        {
          id: "olm-u2-s4-in-q10", difficulty: "core", totalMarks: 2,
          stem: "Solve $3(x-2)\\leq9$. Write down the largest integer value of $x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Linear inequality", statement: "Expand then solve." }], steps: [
            { reasoning: "$x-2\\leq3$ → $x\\leq5$.", marks: 1, markCode: "M" },
            { reasoning: "Largest integer value is 5.", marks: 1, markCode: "A" },
          ], finalAnswer: "5" },
        },
        {
          id: "olm-u2-s4-in-q11", difficulty: "core", totalMarks: 1,
          stem: "The solution of $2x+1>5x-8$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x<-3$" },
            { id: "b", text: "$x>9$" },
            { id: "c", text: "$x>3$" },
            { id: "d", text: "$x<3$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Collect terms", statement: "x terms one side." }], steps: [{ reasoning: "$9>3x$ → $x<3$.", marks: 1, markCode: "A" }], finalAnswer: "$x<3$" },
        },
        {
          id: "olm-u2-s4-in-q12", difficulty: "challenge", totalMarks: 1,
          stem: "If $-2(x+3)\\geq8$, then…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$x\\leq-1$" },
            { id: "b", text: "$x\\geq1$" },
            { id: "c", text: "$x\\leq-7$" },
            { id: "d", text: "$x\\geq-7$" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Sign flip", statement: "Divide by negative." }], steps: [{ reasoning: "$x+3\\leq-4$ → $x\\leq-7$ (flipped).", marks: 1, markCode: "A" }], finalAnswer: "$x\\leq-7$" },
        },
        {
          id: "olm-u2-s4-in-q13", difficulty: "challenge", totalMarks: 2,
          stem: "Solve $\\frac{x}{3}-2>1$. Write down the smallest integer value of $x$.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10 }] },
          markscheme: { principles: [{ kind: "technique", name: "Linear inequality", statement: "Fraction coefficient." }], steps: [
            { reasoning: "$\\frac{x}{3}>3$ → $x>9$.", marks: 1, markCode: "M" },
            { reasoning: "Smallest integer value is 10.", marks: 1, markCode: "A" },
          ], finalAnswer: "10" },
        },
        {
          id: "olm-u2-s4-in-q14", difficulty: "challenge", totalMarks: 3,
          stem: "Find all integers satisfying $1\\leq3x-2<10$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Compound inequality", statement: "Solve both parts." }], steps: [
            { reasoning: "$1\\leq3x-2$ → $x\\geq1$; $3x-2<10$ → $x<4$.", marks: 1, markCode: "M" },
            { reasoning: "Combined: $1\\leq x<4$.", marks: 1, markCode: "M" },
            { reasoning: "Integers: $1,2,3$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=1,2,3$" },
        },
        {
          id: "olm-u2-s4-in-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Solve $\\frac{2x-1}{3}\\geq2$ and $x<5$ simultaneously, giving integer solutions.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Compound inequality", statement: "Intersect solutions." }], steps: [
            { reasoning: "$2x-1\\geq6$ → $x\\geq3.5$.", marks: 1, markCode: "M" },
            { reasoning: "With $x<5$: $3.5\\leq x<5$.", marks: 1, markCode: "M" },
            { reasoning: "Only integer in range: $4$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $x=4$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$x=4$" },
        },
        {
          id: "olm-u2-s4-in-q16", difficulty: "core", totalMarks: 3,
          stem: "A number $n$ satisfies $-4<2n+3\\leq9$. Find the range of values of $n$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Compound inequality", statement: "Mixed endpoints." }], steps: [
            { reasoning: "$-4<2n+3$ → $-7<2n$ → $n>-3.5$; $2n+3\\leq9$ → $n\\leq3$.", marks: 1, markCode: "M" },
            { reasoning: "Combined: $-3.5<n\\leq3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer shown.", marks: 1, markCode: "A" },
          ], finalAnswer: "$-3.5<n\\leq3$" },
        },
      ],
    },
    {
      id: "olm-u2-s4-sequences",
      title: "Arithmetic sequences",
      skill: "Work with arithmetic sequences at O Level.",
      lesson: {
        sections: [
          { heading: "Constant difference", body: "An arithmetic sequence adds the same amount $d$ each term: 4, 7, 10, 13, … The nth term is $u_n=a+(n-1)d$ where $a$ is the first term and the $(n-1)$ counts the gaps between terms. To find $d$, subtract consecutive terms: $d=u_2-u_1$. Real contexts: monthly savings, seat rows, simple interest payments." },
          { heading: "Finding terms and sums", body: "Given any two terms you can find $a$ and $d$ by setting up two equations. The sum of the first $n$ terms is $S_n=\\frac{n}{2}(a+l)=\\frac{n}{2}[2a+(n-1)d]$ — think of it as 'number of terms × average of first and last'. For 'how many terms' questions, set up the equation and solve — you may get a quadratic requiring rejection of negative solutions." },
        ],
        keyFormulas: [
          { name: "nth term", statement: "$u_n=a+(n-1)d$" },
          { name: "Sum", statement: "$S_n=\\frac{n}{2}[2a+(n-1)d]$" },
        ],
        workedExample: { problem: "Find the 15th term of 3, 8, 13, …", solution: "$a=3$, $d=5$; $u_{15}=3+14\\times5=73$." },
      },
      questions: [
        {
          id: "olm-u2-s4-se-q1", difficulty: "foundation", totalMarks: 1,
          stem: "The common difference of 5, 9, 13, 17, … is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "4" },
            { id: "b", text: "9" },
            { id: "c", text: "2" },
            { id: "d", text: "5" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Common difference", statement: "Subtract consecutive." }], steps: [{ reasoning: "$d=9-5=4$.", marks: 1, markCode: "A" }], finalAnswer: "4" },
        },
        {
          id: "olm-u2-s4-se-q2", difficulty: "foundation", totalMarks: 2,
          stem: "Find the 10th term of 2, 5, 8, …",
          response: { type: "numeric", parts: [{ label: "a", answer: 29 }] },
          markscheme: { principles: [{ kind: "formula", name: "nth term", statement: "$a+(n-1)d$." }], steps: [
            { reasoning: "$u_{10}=2+9\\times3=29$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 29.", marks: 1, markCode: "A" },
          ], finalAnswer: "29" },
        },
        {
          id: "olm-u2-s4-se-q3", difficulty: "core", totalMarks: 3,
          stem: "Find the sum of the first 20 terms of 4, 7, 10, …",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Sum", statement: "$S_n$ formula." }], steps: [
            { reasoning: "$a=4$, $d=3$; $S_{20}=\\frac{20}{2}[8+19\\times3]=10\\times65=650$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 650.", marks: 1, markCode: "M" },
            { reasoning: "Alternative: $l=4+19\\times3=61$; $S=\\frac{20}{2}(4+61)=650$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "650" },
        },
        {
          id: "olm-u2-s4-se-q4", difficulty: "core", totalMarks: 4,
          stem: "The 4th term of an arithmetic sequence is 15 and the 9th term is 30. Find the first term.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Simultaneous", statement: "Two equations." }], steps: [
            { reasoning: "$a+3d=15$; $a+8d=30$.", marks: 1, markCode: "M" },
            { reasoning: "Subtract: $5d=15$ → $d=3$; $a=15-9=6$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $u_9=6+24=30$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "Answer: $a=6$.", marks: 1, markCode: "A" },
          ], finalAnswer: "$a=6$" },
        },
        {
          id: "olm-u2-s4-se-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The 5th term of 7, 11, 15, … is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "19" },
            { id: "b", text: "27" },
            { id: "c", text: "23" },
            { id: "d", text: "22" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "formula", name: "nth term", statement: "$a+(n-1)d$." }], steps: [{ reasoning: "$u_5=7+4\\times4=23$.", marks: 1, markCode: "A" }], finalAnswer: "23" },
        },
        {
          id: "olm-u2-s4-se-q6", difficulty: "foundation", totalMarks: 2,
          stem: "Find the 8th term of 1, 4, 7, …",
          response: { type: "numeric", parts: [{ label: "a", answer: 22 }] },
          markscheme: { principles: [{ kind: "formula", name: "nth term", statement: "$a+(n-1)d$." }], steps: [
            { reasoning: "$a=1$, $d=3$; $u_8=1+7\\times3=22$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 22.", marks: 1, markCode: "A" },
          ], finalAnswer: "22" },
        },
        {
          id: "olm-u2-s4-se-q7", difficulty: "foundation", totalMarks: 2,
          stem: "In an arithmetic sequence, $u_3=11$ and $u_7=23$. Find the common difference.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "property", name: "Common difference", statement: "Difference of terms." }], steps: [
            { reasoning: "$u_7-u_3=4d=23-11=12$ → $d=3$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 3.", marks: 1, markCode: "A" },
          ], finalAnswer: "3" },
        },
        {
          id: "olm-u2-s4-se-q8", difficulty: "foundation", totalMarks: 1,
          stem: "The next term of 5, 8, 11, 14, … is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "17" },
            { id: "b", text: "18" },
            { id: "c", text: "15" },
            { id: "d", text: "16" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Common difference", statement: "Add $d=3$." }], steps: [{ reasoning: "$14+3=17$.", marks: 1, markCode: "A" }], finalAnswer: "17" },
        },
        {
          id: "olm-u2-s4-se-q9", difficulty: "core", totalMarks: 1,
          stem: "The nth term of 4, 7, 10, … is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$n+3$" },
            { id: "b", text: "$3n+4$" },
            { id: "c", text: "$4n-1$" },
            { id: "d", text: "$3n+1$" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "formula", name: "nth term", statement: "$a+(n-1)d=4+3(n-1)=3n+1$." }], steps: [{ reasoning: "$3n+1$; check $n=1$ gives 4.", marks: 1, markCode: "A" }], finalAnswer: "$3n+1$" },
        },
        {
          id: "olm-u2-s4-se-q10", difficulty: "core", totalMarks: 3,
          stem: "Find the sum of the first 15 terms of 5, 9, 13, …",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "formula", name: "Sum", statement: "$S_n$ formula." }], steps: [
            { reasoning: "$a=5$, $d=4$; $S_{15}=\\frac{15}{2}[10+14\\times4]=\\frac{15}{2}\\times66=495$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 495.", marks: 1, markCode: "M" },
            { reasoning: "Check via $l=5+14\\times4=61$: $S=\\frac{15}{2}(5+61)=495$ ✓.", marks: 1, markCode: "A" },
          ], finalAnswer: "495" },
        },
        {
          id: "olm-u2-s4-se-q11", difficulty: "core", totalMarks: 2,
          stem: "An arithmetic sequence has first term 3 and common difference 5. Find the 20th term.",
          response: { type: "numeric", parts: [{ label: "a", answer: 98 }] },
          markscheme: { principles: [{ kind: "formula", name: "nth term", statement: "$a+(n-1)d$." }], steps: [
            { reasoning: "$u_{20}=3+19\\times5=98$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 98.", marks: 1, markCode: "A" },
          ], finalAnswer: "98" },
        },
        {
          id: "olm-u2-s4-se-q12", difficulty: "core", totalMarks: 1,
          stem: "For the sequence 10, 7, 4, 1, …, the nth term is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "$3n-13$" },
            { id: "b", text: "$-3n+13$" },
            { id: "c", text: "$-3n+10$" },
            { id: "d", text: "$3n+13$" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "formula", name: "nth term", statement: "$10-3(n-1)=-3n+13$." }], steps: [{ reasoning: "$-3n+13$; check $n=1$ gives 10.", marks: 1, markCode: "A" }], finalAnswer: "$-3n+13$" },
        },
        {
          id: "olm-u2-s4-se-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Find the number of terms in the arithmetic series $8+11+14+\\cdots+62$.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Number of terms", statement: "Set $u_n=62$." }], steps: [
            { reasoning: "$a=8$, $d=3$; $62=8+(n-1)3$.", marks: 1, markCode: "M" },
            { reasoning: "$54=3(n-1)$ → $n-1=18$.", marks: 1, markCode: "M" },
            { reasoning: "$n=19$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 19 terms.", marks: 1, markCode: "A" },
          ], finalAnswer: "19" },
        },
        {
          id: "olm-u2-s4-se-q14", difficulty: "challenge", totalMarks: 4,
          stem: "The 3rd term of an arithmetic sequence is 14 and the 8th term is 29. Find the sum of the first 10 terms.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Simultaneous", statement: "Find $a$ and $d$ first." }], steps: [
            { reasoning: "$a+2d=14$; $a+7d=29$ → $5d=15$ → $d=3$, $a=8$.", marks: 1, markCode: "M" },
            { reasoning: "Verify: $u_8=8+21=29$ ✓.", marks: 1, markCode: "M" },
            { reasoning: "$S_{10}=\\frac{10}{2}[16+9\\times3]=5\\times43=215$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 215.", marks: 1, markCode: "A" },
          ], finalAnswer: "215" },
        },
        {
          id: "olm-u2-s4-se-q15", difficulty: "challenge", totalMarks: 2,
          stem: "In the sequence 2, 6, 10, …, which term is 86?",
          response: { type: "numeric", parts: [{ label: "a", answer: 22 }] },
          markscheme: { principles: [{ kind: "technique", name: "Find $n$", statement: "Set $u_n=86$." }], steps: [
            { reasoning: "$86=2+(n-1)4$ → $n-1=21$ → $n=22$.", marks: 1, markCode: "M" },
            { reasoning: "Answer: 22nd term.", marks: 1, markCode: "A" },
          ], finalAnswer: "22" },
        },
        {
          id: "olm-u2-s4-se-q16", difficulty: "challenge", totalMarks: 1,
          stem: "The sum of the first $n$ terms of 3, 7, 11, … is 406. The value of $n$ is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "14" },
            { id: "b", text: "13" },
            { id: "c", text: "12" },
            { id: "d", text: "15" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "formula", name: "Sum", statement: "$S_n=n(2n+1)$." }], steps: [{ reasoning: "$n(2n+1)=406$ → $2n^2+n-406=0$ → $n=14$ (reject negative).", marks: 1, markCode: "A" }], finalAnswer: "14" },
        },
      ],
    },
  ],
  notes: [
    { id: "olm-u2-s4-ineq-notes", title: "Inequalities and sequences — notes", summary: "Sign flips and arithmetic series.",
      sections: [
        { heading: "Inequalities", body: "Same as equations but flip sign when multiplying/dividing by negative; number line shows open/filled circles." },
        { heading: "Sequences", body: "$u_n=a+(n-1)d$; $S_n=\\frac{n}{2}[2a+(n-1)d]$; find $a,d$ from two terms." },
      ] },
  ],
};
