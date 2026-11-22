import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "ciem-u2-lesson-2-3",
  code: "2-3",
  title: "Sequences, Functions and Graphs",
  goal: "I CAN find nth terms of arithmetic and geometric sequences, use function notation, and sketch and interpret graphs of linear and quadratic functions.",
  standards: ["0580 2.5", "0580 2.6", "0580 2.7"],
  vocabulary: [
    { term: "Sequence", definition: "An ordered list of numbers following a rule, e.g. 4, 7, 10, 13, ..." },
    { term: "Arithmetic sequence", definition: "A sequence with a constant difference $d$ between consecutive terms; nth term $=a+(n-1)d$." },
    { term: "Geometric sequence", definition: "A sequence with a constant ratio $r$ between consecutive terms; nth term $=ar^{n-1}$." },
    { term: "Function", definition: "A rule that assigns exactly one output to each input, written $f(x)$ or $y=f(x)$." },
    { term: "Composite function", definition: "A function formed by applying one function then another, written $g(f(x))$ — apply $f$ first." },
    { term: "Gradient", definition: "The steepness of a line, equal to change in $y$ divided by change in $x$ between two points." },
    { term: "Intercept", definition: "Where a graph crosses an axis; the $y$-intercept is the value of $c$ in $y=mx+c$." },
  ],
  concepts: [
    {
      id: "ciem-u2-sequences",
      title: "Arithmetic and geometric sequences",
      skill: "Find nth terms, specific terms and which term a value occurs at in arithmetic and geometric sequences.",
      lesson: {
        sections: [
          {
            heading: "Arithmetic sequences",
            body: "Constant difference $d$ between terms. The nth term is $a+(n-1)d$ where $a$ is the first term.\n\nFor 4, 7, 10, 13, ...: $a=4$, $d=3$, nth term $=3n+1$. The 10th term is $3(10)+1=31$.",
          },
          {
            heading: "Geometric sequences",
            body: "Constant ratio $r$ between terms. The nth term is $ar^{n-1}$.\n\nFor 2, 6, 18, 54, ...: $a=2$, $r=3$, nth term $=2\\times3^{n-1}$. The 5th term is $2\\times3^4=162$.",
          },
          {
            heading: "Finding which term",
            body: "Set the nth term formula equal to the target value and solve for $n$. For the arithmetic sequence with nth term $4n+3$, the term 127 occurs when $4n+3=127$, so $n=31$ — the 31st term.",
          },
        ],
        keyFormulas: [
          { name: "Arithmetic nth term", statement: "$a+(n-1)d$" },
          { name: "Geometric nth term", statement: "$ar^{n-1}$" },
          { name: "Sum of arithmetic series", statement: "$S_n=\\frac{n}{2}\\left[2a+(n-1)d\\right]$" },
        ],
        workedExample: {
          problem: "An arithmetic sequence has first term 7 and common difference 4. Find the 20th term and the sum of the first 10 terms.",
          solution: "nth term $=7+(n-1)4=4n+3$. 20th term $=4(20)+3=83$. Sum of first 10: $S_{10}=\\frac{10}{2}[2(7)+9(4)]=5(14+36)=250$.",
        },
      },
      questions: [
        {
          id: "ciem-u2-sequences-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Write down the nth term of the sequence 5, 8, 11, 14, ...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3n+5$" },
              { id: "b", text: "$3n+2$" },
              { id: "c", text: "$5n+3$" },
              { id: "d", text: "$2n+3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Arithmetic nth term", statement: "$a+(n-1)d$; here $a=5$, $d=3$." },
            ],
            steps: [
              { reasoning: "nth term $=5+(n-1)3=5+3n-3=3n+2$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $3n+2$",
            commonErrors: ["Writing $3n+5$ by forgetting to subtract $d$ in $(n-1)d$."],
          },
        },
        {
          id: "ciem-u2-sequences-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the 10th term of the arithmetic sequence 4, 7, 10, 13, ...",
          response: { type: "numeric", parts: [{ label: "10th term", answer: 31 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Arithmetic nth term", statement: "$a+(n-1)d$ with $a=4$, $d=3$." },
            ],
            steps: [
              { reasoning: "nth term $=4+(n-1)3=3n+1$; substitute $n=10$.", working: "3(10)+1=31", marks: 1, markCode: "M" },
              { reasoning: "State the term.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$31$",
            commonErrors: ["Using $3n+4$ instead of $3n+1$, giving 34."],
          },
        },
        {
          id: "ciem-u2-sequences-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The geometric sequence 2, 6, 18, 54, ... continues in the same pattern. Find its 5th term.",
          response: { type: "numeric", parts: [{ label: "5th term", answer: 162 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Geometric nth term", statement: "$ar^{n-1}$ with $a=2$, $r=3$." },
            ],
            steps: [
              { reasoning: "Identify the common ratio.", working: "r=3", marks: 1, markCode: "M" },
              { reasoning: "Apply the nth term formula.", working: "2\\times3^{5-1}=2\\times3^4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "2\\times81=162", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$162$",
            commonErrors: ["Using $2\\times3^5$ (off by one power)."],
          },
        },
        {
          id: "ciem-u2-sequences-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "An arithmetic sequence has first term 7 and common difference 4.",
          parts: [
            { label: "a", prompt: "Write down the nth term of the sequence.", marks: 2 },
            { label: "b", prompt: "Find the 20th term.", marks: 2 },
            { label: "c", prompt: "Find which term of the sequence has value 127.", marks: 3 },
            { label: "d", prompt: "Find the sum of the first 10 terms.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b)", answer: 83 },
              { label: "(c) n", answer: 31 },
              { label: "(d)", answer: 250 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Arithmetic nth term", statement: "$a+(n-1)d$ with $a=7$, $d=4$." },
              { kind: "formula", name: "Sum of arithmetic series", statement: "$S_n=\\frac{n}{2}[2a+(n-1)d]$" },
            ],
            steps: [
              { part: "a", reasoning: "Apply the nth term formula.", working: "7+(n-1)4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify.", working: "=4n+3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $n=20$.", working: "4(20)+3=83", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the term.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set the nth term equal to 127.", working: "4n+3=127", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve for $n$.", working: "4n=124\\Rightarrow n=31", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State which term.", working: "31st\\text{ term}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Apply the sum formula with $n=10$.", working: "S_{10}=\\frac{10}{2}[2(7)+9(4)]", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "=5(14+36)=250", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4n+3$ (b) $83$ (c) 31st term (d) $250$",
            commonErrors: ["In (c) answering 127 instead of the term position.", "In (d) using $\\frac{n}{2}[a+l]$ incorrectly or forgetting the brackets."],
            examinerNote: "Part (d) also accepts $S_{10}=\\frac{10}{2}(7+83)=250$ using first and last term.",
          },
        },
        {
          id: "ciem-u2-sequences-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the common difference of the sequence $7, 11, 15, 19, \\ldots$",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "11" },
              { id: "b", text: "3" },
              { id: "c", text: "7" },
              { id: "d", text: "4" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Common difference", statement: "In an arithmetic sequence each term increases by the same amount $d$." },
            ],
            steps: [
              { reasoning: "Subtract consecutive terms: $11-7=4$ (and $15-11=4$, consistent).", working: "d=4", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** $d=4$",
            commonErrors: ["Dividing consecutive terms instead of subtracting."],
          },
        },
        {
          id: "ciem-u2-sequences-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Write down the nth term of the sequence $3, 6, 9, 12, \\ldots$",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3n$" },
              { id: "b", text: "$3^n$" },
              { id: "c", text: "$n+3$" },
              { id: "d", text: "$3n+3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "nth term of an arithmetic sequence", statement: "$u_n=a+(n-1)d$; here $a=3$, $d=3$." },
            ],
            steps: [
              { reasoning: "Each term is 3 times its position: $u_n=3n$.", working: "u_n=3+(n-1)\\times3=3n", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $u_n=3n$",
            commonErrors: ["Writing $3n+3$, which gives 6 for $n=1$.", "Confusing the pattern with a geometric sequence $3^n$."],
          },
        },
        {
          id: "ciem-u2-sequences-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Write down the nth term of the geometric sequence $2, 6, 18, 54, \\ldots$",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6n-4$" },
              { id: "b", text: "$3^n+2$" },
              { id: "c", text: "$2\\times3^n$" },
              { id: "d", text: "$2\\times3^{n-1}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "nth term of a geometric sequence", statement: "$u_n=ar^{n-1}$ where $a$ is the first term and $r$ the common ratio." },
            ],
            steps: [
              { reasoning: "First term $a=2$, common ratio $r=\\frac{6}{2}=3$; check $u_3=2\\times3^2=18$.", working: "u_n=2\\times3^{n-1}", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(d)** $u_n=2\\times3^{n-1}$",
            commonErrors: ["Writing $2\\times3^n$, which gives $u_1=6$ instead of 2.", "Treating it as arithmetic with difference 4."],
          },
        },
        {
          id: "ciem-u2-sequences-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the 20th term of the arithmetic sequence $5, 9, 13, 17, \\ldots$ Enter the value.",
          response: { type: "numeric", parts: [{ label: "20th term", answer: 81 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "nth term of an arithmetic sequence", statement: "$u_n=a+(n-1)d$; here $a=5$, $d=4$." },
            ],
            steps: [
              { reasoning: "Substitute $n=20$, $a=5$, $d=4$.", working: "u_{20}=5+19\\times4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=5+76=81", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$81$",
            commonErrors: ["Using $n=20$ instead of $n-1=19$ steps from the first term."],
          },
        },
        {
          id: "ciem-u2-sequences-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the 20th term of the arithmetic sequence $-2, 1, 4, 7, \\ldots$ Enter the value.",
          response: { type: "numeric", parts: [{ label: "20th term", answer: 55 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "nth term of an arithmetic sequence", statement: "$u_n=a+(n-1)d$; here $a=-2$, $d=3$." },
            ],
            steps: [
              { reasoning: "Identify $a$ and $d$.", working: "a=-2,\\ d=1-(-2)=3", marks: 1, markCode: "M" },
              { reasoning: "Substitute $n=20$.", working: "u_{20}=-2+19\\times3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate, taking care with the negative first term.", working: "=-2+57=55", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$55$",
            commonErrors: ["Writing $a=1$ (the second term) instead of $a=-2$."],
          },
        },
        {
          id: "ciem-u2-sequences-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The geometric sequence $5, 10, 20, 40, \\ldots$ continues in the same pattern. Find its 6th term. Enter the value.",
          response: { type: "numeric", parts: [{ label: "6th term", answer: 160 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "nth term of a geometric sequence", statement: "$u_n=ar^{n-1}$; here $a=5$, $r=2$." },
            ],
            steps: [
              { reasoning: "Common ratio $r=2$; $u_6=5\\times2^5$.", working: "5\\times2^5=5\\times32", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=160", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$160$",
            commonErrors: ["Using $2^6$ instead of $2^{6-1}=2^5$.", "Treating the sequence as arithmetic with $d=5$."],
          },
        },
        {
          id: "ciem-u2-sequences-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A geometric sequence has first term $3$ and common ratio $2$.",
          parts: [
            { label: "a", prompt: "Find the 5th term.", marks: 2 },
            { label: "b", prompt: "Find the 10th term.", marks: 2 },
            { label: "c", prompt: "Find which term in the sequence is equal to $384$.", marks: 2 },
            { label: "d", prompt: "A different geometric sequence has common ratio $2$ and 6th term $96$. Find its first term.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) 5th term", answer: 48 },
              { label: "(b) 10th term", answer: 1536 },
              { label: "(c) term number", answer: 8 },
              { label: "(d) first term", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "nth term of a geometric sequence", statement: "$u_n=ar^{n-1}$; rearrange to find $a$ or $n$ when needed." },
            ],
            steps: [
              { part: "a", reasoning: "$u_5=3\\times2^{5-1}=3\\times16$.", working: "=48", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the term.", working: "48", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$u_{10}=3\\times2^{10-1}=3\\times2^9$.", working: "=3\\times512", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=1536", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set $3\\times2^{n-1}=384$, so $2^{n-1}=128=2^7$.", working: "n-1=7", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve for $n$.", working: "n=8", marks: 1, markCode: "A" },
              { part: "d", reasoning: "6th term: $a\\times2^5=96$, so $a\\times32=96$.", working: "a=96\\div32", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Divide.", working: "=3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the first term.", working: "a=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $48$ (b) $1536$ (c) $8$th term (d) $3$",
            commonErrors: ["In (c) solving $2^{n-1}=384$ without dividing by the first term 3 first.", "In (d) using $2^6$ instead of $2^5$ for the 6th term."],
          },
        },
        {
          id: "ciem-u2-sequences-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how you would find the nth term of an arithmetic sequence, using the sequence $4, 9, 14, 19, \\ldots$ as an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "nth term of an arithmetic sequence", statement: "$u_n=a+(n-1)d$ where $a$ is the first term and $d$ the common difference." },
            ],
            steps: [
              { reasoning: "Find the first term and common difference.", working: "a=4,\\ d=9-4=5", marks: 1, markCode: "M" },
              { reasoning: "Substitute into $u_n=a+(n-1)d$.", working: "u_n=4+(n-1)\\times5", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "u_n=5n-1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$u_n=5n-1$",
            commonErrors: ["Writing $u_n=4+5n$, which gives $u_1=9$.", "Finding $d$ by dividing terms instead of subtracting."],
          },
        },
        {
          id: "ciem-u2-sequences-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "The nth term of an arithmetic sequence is $u_n=3n+1$. Show that $112$ is a term of the sequence and find its position.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Finding a term's position", statement: "Set $u_n$ equal to the target value and solve for $n$; $n$ must be a positive integer." },
            ],
            steps: [
              { reasoning: "Set $3n+1=112$.", working: "3n+1=112", marks: 1, markCode: "M" },
              { reasoning: "Subtract 1 and divide by 3.", working: "3n=111\\Rightarrow n=37", marks: 1, markCode: "M" },
              { reasoning: "Check that $n=37$ is a positive integer.", working: "u_{37}=3(37)+1=112", marks: 1, markCode: "M" },
              { reasoning: "Conclude $112$ is the 37th term.", working: "37\\text{th term}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$112$ is the $37$th term",
            commonErrors: ["Solving $3n+1=112$ as $n=\\frac{112}{3}+1$.", "Not checking that $n$ is an integer."],
          },
        },
        {
          id: "ciem-u2-sequences-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A ball is dropped and rebounds to a height that is half the previous height each time. The first rebound reaches $80$ cm.",
          parts: [
            { label: "a", prompt: "Find the height of the 5th rebound.", marks: 2 },
            { label: "b", prompt: "Find the first rebound whose height is less than $1$ cm.", marks: 2 },
            { label: "c", prompt: "State the common ratio of the sequence of rebound heights.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "nth term of a geometric sequence", statement: "$u_n=ar^{n-1}$ with $a=80$, $r=\\frac{1}{2}$." },
            ],
            steps: [
              { part: "a", reasoning: "$u_5=80\\times(\\frac{1}{2})^4=80\\times\\frac{1}{16}$.", working: "=5\\text{ cm}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the height.", working: "5\\text{ cm}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Need $80\\times(\\frac{1}{2})^{n-1}<1$, i.e. $(\\frac{1}{2})^{n-1}<\\frac{1}{80}$, i.e. $2^{n-1}>80$.", working: "2^6=64<80,\\ 2^7=128>80", marks: 1, markCode: "M" },
              { part: "b", reasoning: "So $n-1=7$, giving $n=8$; check $u_8=80/128=0.625<1$ and $u_7=1.25>1$.", working: "n=8", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Each height is half the previous, so $r=\\frac{1}{2}$.", working: "r=0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $5$ cm (b) 8th rebound (c) $r=\\frac{1}{2}$",
            commonErrors: ["In (b) using $2^6=64$ and concluding $n=7$ — must check the strict inequality."],
          },
        },
        {
          id: "ciem-u2-sequences-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these sequences is geometric?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3, 6, 12, 24, \\ldots$" },
              { id: "b", text: "$5, 10, 15, 20, \\ldots$" },
              { id: "c", text: "$1, 2, 4, 7, \\ldots$" },
              { id: "d", text: "$2, 4, 6, 8, \\ldots$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Geometric sequence", statement: "Each term is multiplied by a constant common ratio $r$." },
            ],
            steps: [
              { reasoning: "Only (b) has a constant ratio: $\\frac{6}{3}=\\frac{12}{6}=\\frac{24}{12}=2$.", working: "r=2", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $3, 6, 12, 24, \\ldots$",
            commonErrors: ["Choosing (a) or (d), which are arithmetic with constant difference."],
          },
        },
        {
          id: "ciem-u2-sequences-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The nth term of a sequence is $u_n=5n-2$. Which term is equal to $93$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the 19th term" },
              { id: "b", text: "the 20th term" },
              { id: "c", text: "the 18th term" },
              { id: "d", text: "the 17th term" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Finding a term's position", statement: "Set $u_n$ equal to the target value and solve for $n$." },
            ],
            steps: [
              { reasoning: "$5n-2=93 \\Rightarrow 5n=95 \\Rightarrow n=19$.", working: "n=19", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** the 19th term",
            commonErrors: ["Writing $5n-2=93$ as $5n=91$."],
          },
        },
      ],
    },
    {
      id: "ciem-u2-functions-graphs",
      title: "Functions and graphs",
      skill: "Use function notation, find composite functions, and interpret linear and quadratic graphs.",
      lesson: {
        sections: [
          {
            heading: "Function notation",
            body: "$f(x)=2x+1$ means 'the function $f$ applied to $x$'. To evaluate, substitute: $f(3)=2(3)+1=7$. For $f(x)=x^2-3$, $f(-2)=(-2)^2-3=1$ — bracket the input before squaring.",
          },
          {
            heading: "Composite functions",
            body: "$g(f(x))$ means apply $f$ **first**, then $g$ to the result. With $f(x)=2x-1$ and $g(x)=x^2+3$: $g(f(2))=g(3)=3^2+3=12$. The order matters — $f(g(x))$ is generally different.",
          },
          {
            heading: "Graphs of functions",
            body: "For $y=mx+c$, $m$ is the gradient and $c$ the $y$-intercept. To sketch a quadratic $y=ax^2+bx+c$, find where it crosses the axes: set $x=0$ for the $y$-intercept and solve $y=0$ for the $x$-intercepts. A positive $a$ gives a U-shape; negative gives an upside-down U.",
          },
        ],
        keyFormulas: [
          { name: "Linear function", statement: "$f(x)=mx+c$: gradient $m$, $y$-intercept $c$." },
          { name: "Composite", statement: "$g(f(x))$: evaluate $f$ first, then $g$." },
        ],
        workedExample: {
          problem: "Given $f(x)=3x-2$ and $g(x)=x^2$, find $g(f(2))$.",
          solution: "$f(2)=3(2)-2=4$. Then $g(f(2))=g(4)=4^2=16$.",
        },
      },
      questions: [
        {
          id: "ciem-u2-functions-graphs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Given $f(x)=2x+1$, find $f(3)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6$" },
              { id: "b", text: "$9$" },
              { id: "c", text: "$7$" },
              { id: "d", text: "$8$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function evaluation", statement: "Substitute the input into every $x$ in the rule." },
            ],
            steps: [
              { reasoning: "Substitute $x=3$.", working: "f(3)=2(3)+1=7", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $7$",
            commonErrors: ["Computing $2\\times3+1$ as $2\\times(3+1)=8$."],
          },
        },
        {
          id: "ciem-u2-functions-graphs-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Given $f(x)=x^2-3$, find $f(-2)$.",
          response: { type: "numeric", parts: [{ label: "f(-2)", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function evaluation", statement: "Bracket negative inputs before squaring." },
            ],
            steps: [
              { reasoning: "Substitute $x=-2$ with brackets.", working: "f(-2)=(-2)^2-3=4-3", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$",
            commonErrors: ["Computing $-2^2=-4$ instead of $(-2)^2=4$, giving $-7$."],
          },
        },
        {
          id: "ciem-u2-functions-graphs-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Given $f(x)=2x-1$ and $g(x)=x^2+3$, find $g(f(2))$.",
          response: { type: "numeric", parts: [{ label: "g(f(2))", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composite function", statement: "$g(f(x))$ means evaluate $f$ first, then apply $g$ to the result." },
            ],
            steps: [
              { reasoning: "Evaluate the inner function first.", working: "f(2)=2(2)-1=3", marks: 1, markCode: "M" },
              { reasoning: "Apply $g$ to that result.", working: "g(3)=3^2+3=12", marks: 1, markCode: "M" },
              { reasoning: "State the value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$",
            commonErrors: ["Computing $f(g(2))$ instead — order matters.", "Evaluating $g(2)$ first and then applying $f$."],
          },
        },
        {
          id: "ciem-u2-functions-graphs-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Let $f(x)=3x-2$ and $g(x)=x^2$.",
          parts: [
            { label: "a", prompt: "Find $f(5)$.", marks: 1 },
            { label: "b", prompt: "Find $g(f(2))$.", marks: 3 },
            { label: "c", prompt: "Solve $f(x)=g(x)$.", marks: 3 },
            { label: "d", prompt: "The point $(k, 10)$ lies on the graph of $y=f(x)$. Find $k$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a)", answer: 13 },
              { label: "(b)", answer: 16 },
              { label: "(c) x smaller", answer: 1 },
              { label: "(c) x larger", answer: 2 },
              { label: "(d) k", answer: 4 },
            ],
            unordered: true,
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composite function", statement: "$g(f(x))$: evaluate $f$ first, then $g$." },
              { kind: "principle", name: "Intersection of graphs", statement: "$f(x)=g(x)$ gives the $x$-coordinates where the two graphs meet." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $x=5$.", working: "f(5)=3(5)-2=13", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Evaluate $f(2)$ first.", working: "f(2)=3(2)-2=4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Apply $g$ to the result.", working: "g(4)=4^2=16", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the value.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set the functions equal.", working: "3x-2=x^2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Rearrange into standard quadratic form.", working: "x^2-3x+2=0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Factorise and solve.", working: "(x-1)(x-2)=0\\Rightarrow x=1,\\ x=2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The point lies on $y=f(x)$, so $f(k)=10$.", working: "3k-2=10", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve for $k$.", working: "k=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $13$ (b) $16$ (c) $x=1$ or $x=2$ (d) $k=4$",
            commonErrors: ["In (b) computing $g(f(x))$ as $f(g(x))$.", "In (c) sign error rearranging to $x^2+3x+2=0$."],
            examinerNote: "Part (c) requires both solutions; part (d) must use $f$, not $g$.",
          },
        },
        {
          id: "ciem-u2-functions-graphs-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Given $f(x)=x+4$, find $f(5)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "20" },
              { id: "b", text: "9" },
              { id: "c", text: "54" },
              { id: "d", text: "1" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function notation", statement: "$f(x)$ means 'the output when the input is $x$'; substitute the value into the rule." },
            ],
            steps: [
              { reasoning: "Substitute $x=5$: $f(5)=5+4=9$.", working: "f(5)=9", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** $f(5)=9$",
            commonErrors: ["Multiplying instead of adding to get 20.", "Reading $f(5)$ as $5+f(x)$."],
          },
        },
        {
          id: "ciem-u2-functions-graphs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Given $f(x)=3x-2$, find $f(4)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10" },
              { id: "b", text: "14" },
              { id: "c", text: "-10" },
              { id: "d", text: "12" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function notation", statement: "$f(x)$ means 'the output when the input is $x$'." },
            ],
            steps: [
              { reasoning: "Substitute $x=4$: $f(4)=3\\times4-2=12-2=10$.", working: "f(4)=10", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $f(4)=10$",
            commonErrors: ["Computing $3\\times4+2=14$ — sign error on $-2$.", "Computing $3\\times(4-2)=6$ — subtracting before multiplying."],
          },
        },
        {
          id: "ciem-u2-functions-graphs-q7",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Given $f(x)=x^2$ and $g(x)=x+1$, find $f(g(3))$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "16" },
              { id: "b", text: "12" },
              { id: "c", text: "7" },
              { id: "d", text: "10" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composite functions", statement: "$f(g(x))$ means apply $g$ first, then apply $f$ to the result." },
            ],
            steps: [
              { reasoning: "$g(3)=3+1=4$, then $f(4)=4^2=16$.", working: "f(g(3))=f(4)=16", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $f(g(3))=16$",
            commonErrors: ["Computing $g(f(3))$ instead — order matters.", "Writing $f(g(3))=(3+1)^2$ correctly but evaluating as $3+1^2=4$."],
          },
        },
        {
          id: "ciem-u2-functions-graphs-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Given $f(x)=2x^2-1$, find $f(3)$. Enter the value.",
          response: { type: "numeric", parts: [{ label: "f(3)", answer: 17 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function notation", statement: "$f(x)$ means 'the output when the input is $x$'." },
            ],
            steps: [
              { reasoning: "Substitute $x=3$: $f(3)=2\\times3^2-1$.", working: "2\\times9-1", marks: 1, markCode: "M" },
              { reasoning: "Evaluate, squaring before multiplying.", working: "=18-1=17", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f(3)=17$",
            commonErrors: ["Computing $2\\times3^2$ as $(2\\times3)^2=36$.", "Writing $2\\times3-1=5$ — forgetting to square first."],
          },
        },
        {
          id: "ciem-u2-functions-graphs-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Given $f(x)=x^2-x$, find $f(4)-f(2)$. Enter the value.",
          response: { type: "numeric", parts: [{ label: "f(4) - f(2)", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function notation", statement: "Evaluate $f$ at each input separately before combining." },
            ],
            steps: [
              { reasoning: "Evaluate $f(4)$.", working: "f(4)=4^2-4=12", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $f(2)$.", working: "f(2)=2^2-2=2", marks: 1, markCode: "M" },
              { reasoning: "Subtract.", working: "12-2=10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$",
            commonErrors: ["Computing $f(4-2)=f(2)=2$ instead of $f(4)-f(2)$."],
          },
        },
        {
          id: "ciem-u2-functions-graphs-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Given $f(x)=2x+3$, solve $f(x)=11$. Enter the value of $x$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Functions as equations", statement: "Set the function rule equal to the target output and solve for $x$." },
            ],
            steps: [
              { reasoning: "Write $2x+3=11$ and solve.", working: "2x=8\\Rightarrow x=4", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "x=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=4$",
            commonErrors: ["Writing $f(11)=2(11)+3$ instead of solving for the input."],
          },
        },
        {
          id: "ciem-u2-functions-graphs-q11",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Let $f(x)=x^2+1$ and $g(x)=2x-3$.",
          parts: [
            { label: "a", prompt: "Find $f(2)$.", marks: 2 },
            { label: "b", prompt: "Find $g(5)$.", marks: 2 },
            { label: "c", prompt: "Find $f(g(2))$.", marks: 2 },
            { label: "d", prompt: "Solve $f(x)=10$.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) f(2)", answer: 5 },
              { label: "(b) g(5)", answer: 7 },
              { label: "(c) f(g(2))", answer: 2 },
              { label: "(d) positive x", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function notation", statement: "$f(x)$ substitutes $x$ into the rule; $f(g(x))$ applies $g$ first." },
            ],
            steps: [
              { part: "a", reasoning: "$f(2)=2^2+1$.", working: "=5", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the value.", working: "5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$g(5)=2(5)-3$.", working: "=7", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the value.", working: "7", marks: 1, markCode: "A" },
              { part: "c", reasoning: "First $g(2)=2(2)-3=1$, then $f(1)=1^2+1$.", working: "f(1)=2", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the composite value.", working: "2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Set $x^2+1=10$.", working: "x^2=9", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Take square roots — both signs.", working: "x=\\pm3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State both solutions; enter the positive root.", working: "x=3\\ \\text{or}\\ x=-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $5$ (b) $7$ (c) $2$ (d) $x=\\pm3$",
            commonErrors: ["In (c) computing $g(f(2))$ instead of $f(g(2))$.", "In (d) giving only $x=3$ and missing $x=-3$."],
          },
        },
        {
          id: "ciem-u2-functions-graphs-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what the notation $f(4)=9$ tells you about the function $f$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function notation", statement: "$f(a)=b$ means the input $a$ produces the output $b$." },
            ],
            steps: [
              { reasoning: "$f(4)=9$ means when the input is 4, the output is 9.", marks: 1, markCode: "M" },
              { reasoning: "Equivalently, the point $(4,9)$ lies on the graph of $y=f(x)$.", marks: 1, markCode: "M" },
              { reasoning: "It does NOT mean $f(9)=4$ — the input and output are not interchangeable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Input 4 gives output 9; the point $(4,9)$ is on the graph.",
            commonErrors: ["Interpreting it as $f(9)=4$."],
          },
        },
        {
          id: "ciem-u2-functions-graphs-q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Let $f(x)=x^2+2x$ and $g(x)=3x-4$. Show that $f(2)=g(4)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function notation", statement: "Evaluate each function at the stated input." },
            ],
            steps: [
              { reasoning: "Evaluate $f(2)$.", working: "f(2)=2^2+2(2)=4+4=8", marks: 1, markCode: "M" },
              { reasoning: "Evaluate $g(4)$.", working: "g(4)=3(4)-4=12-4=8", marks: 1, markCode: "M" },
              { reasoning: "Both equal 8.", working: "f(2)=8=g(4)", marks: 1, markCode: "M" },
              { reasoning: "Conclude the equality holds.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f(2)=8=g(4)$, so $f(2)=g(4)$",
            commonErrors: ["Evaluating $g(2)$ instead of $g(4)$.", "Computing $f(2)=2^2+2=6$ — forgetting to multiply the second term by 2."],
          },
        },
        {
          id: "ciem-u2-functions-graphs-q14",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "The function $f$ maps $x$ to $3x-2$ and the function $g$ maps $x$ to $x^2$.",
          parts: [
            { label: "a", prompt: "Find $fg(2)$.", marks: 2 },
            { label: "b", prompt: "Find $gf(2)$.", marks: 2 },
            { label: "c", prompt: "Explain why $fg(2)$ and $gf(2)$ are different.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composite functions", statement: "$fg(x)$ means apply $g$ first, then $f$; order matters." },
            ],
            steps: [
              { part: "a", reasoning: "$g(2)=2^2=4$, then $f(4)=3(4)-2$.", working: "fg(2)=10", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the value.", working: "10", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$f(2)=3(2)-2=4$, then $g(4)=4^2$.", working: "gf(2)=16", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the value.", working: "16", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The functions are applied in different orders, producing different intermediate values ($4$ vs $4$ here by coincidence of numbers but different rules).", working: "10\\ne16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $fg(2)=10$ (b) $gf(2)=16$ (c) order of composition matters",
            commonErrors: ["Computing $fg(2)$ as $f(2)g(2)$ — multiplication, not composition."],
          },
        },
        {
          id: "ciem-u2-functions-graphs-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "If $f(x)=4-x$, what is $f(f(1))$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1" },
              { id: "b", text: "4" },
              { id: "c", text: "3" },
              { id: "d", text: "-1" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Composite functions", statement: "$f(f(x))$ applies $f$ twice." },
            ],
            steps: [
              { reasoning: "$f(1)=4-1=3$, then $f(3)=4-3=1$.", working: "f(f(1))=1", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $f(f(1))=1$",
            commonErrors: ["Computing $f(1)=3$ and stopping, or computing $4-f(1)=1$ incorrectly as $-1$."],
          },
        },
        {
          id: "ciem-u2-functions-graphs-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "For $f(x)=x^2$, which value of $x$ gives $f(x)=f(-3)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "3 or $-3$" },
              { id: "b", text: "3 only" },
              { id: "c", text: "-3 only" },
              { id: "d", text: "9 or $-9$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Even functions", statement: "$f(-x)=f(x)$ for $f(x)=x^2$, so both signs give the same output." },
            ],
            steps: [
              { reasoning: "$f(-3)=9$; solve $x^2=9$ to get $x=\\pm3$.", working: "x^2=9\\Rightarrow x=3\\ \\text{or}\\ x=-3", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** $x=3$ or $x=-3$",
            commonErrors: ["Giving only $x=3$ and missing the negative solution."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciem-u2-sequences-functions-notes",
      title: "Sequences, functions and graphs — revision notes",
      summary: "Arithmetic and geometric sequences, function notation, composite functions and graph interpretation.",
      sections: [
        {
          heading: "Arithmetic sequences",
          body: "Constant difference $d$. nth term $=a+(n-1)d$.\n\nFor 4, 7, 10, 13, ...: $a=4$, $d=3$, nth term $=3n+1$.\n\nSum of first $n$ terms: $S_n=\\frac{n}{2}[2a+(n-1)d]$, equivalently $\\frac{n}{2}(\\text{first}+\\text{last})$.",
        },
        {
          heading: "Geometric sequences",
          body: "Constant ratio $r$. nth term $=ar^{n-1}$.\n\nFor 2, 6, 18, 54, ...: $a=2$, $r=3$, nth term $=2\\times3^{n-1}$. 5th term $=2\\times3^4=162$.",
        },
        {
          heading: "Which term?",
          body: "Set nth term $=$ target and solve for $n$. The answer is the **position**, not the value.\n\n**Worked example.** nth term $4n+3=127 \\Rightarrow n=31$, so 127 is the 31st term.",
        },
        {
          heading: "Functions",
          body: "$f(x)=2x+1$: substitute the input everywhere $x$ appears. $f(-2)=(-2)^2-3=1$ for $f(x)=x^2-3$ — always bracket negatives.\n\nComposite $g(f(x))$: apply $f$ **first**. $g(f(2))$ with $f(x)=2x-1$, $g(x)=x^2+3$: $f(2)=3$, $g(3)=12$.",
        },
        {
          heading: "Graphs",
          body: "$y=mx+c$: gradient $m=\\frac{\\Delta y}{\\Delta x}$, $y$-intercept $c$. For quadratics, find axis crossings: $y$-intercept at $x=0$, $x$-intercepts where $y=0$. $f(x)=g(x)$ locates intersection points — solve the resulting equation.",
        },
        {
          heading: "Exam technique",
          body: "- Sequence questions: identify $a$, $d$ or $r$ explicitly before substituting — method marks depend on it.\n- Composite functions: the inner function is evaluated first; writing the correct order earns the M mark.\n- 'Which term' answers need the position $n$, not the value.",
        },
      ],
    },
  ],
};
