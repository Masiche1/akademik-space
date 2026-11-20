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
            { id: "a", text: "$x>7$" }, { id: "b", text: "$x<7$" }, { id: "c", text: "$x>17$" }, { id: "d", text: "$x>-7$" },
          ], correctChoiceId: "a" },
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
            { id: "a", text: "4" }, { id: "b", text: "5" }, { id: "c", text: "2" }, { id: "d", text: "9" },
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
