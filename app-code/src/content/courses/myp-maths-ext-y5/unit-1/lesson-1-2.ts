import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "mypme5-u1-lesson-1-2",
  code: "1-2",
  title: "Sequences, Series and Financial Mathematics",
  goal: "I CAN work with sigma notation and infinite series, and apply compound interest, depreciation, and annuity concepts to financial problems.",
  standards: [
    "MYP Maths: Number",
    "Criterion A: Knowing and understanding",
    "Criterion D: Applying mathematics in real-life contexts",
  ],
  vocabulary: [
    { term: "Sigma notation", definition: "$\\sum_{i=1}^{n} u_i$ denotes the sum of terms $u_1$ to $u_n$." },
    { term: "Infinite series", definition: "A series with infinitely many terms; converges if $|r|<1$ for geometric, sum $=\\frac{a}{1-r}$." },
    { term: "Compound interest", definition: "Interest earned on both principal and accumulated interest; $A=P(1+r)^n$ or $Pe^{rt}$." },
    { term: "Depreciation", definition: "Reduction in asset value over time; often exponential: $V=V_0(1-d)^n$." },
    { term: "Annuity", definition: "Regular fixed payments; present value $PV=PMT\\times\\frac{1-(1+r)^{-n}}{r}$." },
  ],
  concepts: [
    {
      id: "mypme5-u1-series",
      title: "Sequences, sigma notation and infinite series",
      skill: "Evaluate sums using sigma notation, determine convergence, and apply geometric series to real problems.",
      lesson: {
        sections: [
          {
            heading: "Sigma notation",
            body: "$\\sum_{i=1}^{n} i=\\frac{n(n+1)}{2}$; $\\sum_{i=1}^{n} i^2=\\frac{n(n+1)(2n+1)}{6}$; $\\sum_{i=1}^{n} r^{i-1}=\\frac{r^n-1}{r-1}$. These formulas evaluate sums without listing every term.",
          },
          {
            heading: "Infinite geometric series",
            body: "Converges only when $|r|<1$; sum $=\\frac{a}{1-r}$. For $|r|\\ge1$ the series diverges. Test convergence first — never apply the formula blindly.",
          },
          {
            heading: "Applications",
            body: "Bouncing balls, drug decay, loan balances, and repeated percentage changes all produce geometric series. Model the first term $a$ and ratio $r$ carefully, then choose finite or infinite sum.",
          },
        ],
        keyFormulas: [
          { name: "Sum of integers", statement: "$\\sum_{i=1}^n i=\\frac{n(n+1)}{2}$" },
          { name: "Sum of squares", statement: "$\\sum_{i=1}^n i^2=\\frac{n(n+1)(2n+1)}{6}$" },
          { name: "Infinite geometric", statement: "$S_\\infty=\\frac{a}{1-r}$ for $|r|<1$" },
        ],
        workedExample: {
          problem: "Find $\\sum_{i=1}^{10} i^2$.",
          solution: "$\\frac{10(11)(21)}{6}=\\frac{2310}{6}=385$.",
        },
      },
      questions: [
        {
          id: "mypme5-u1-series-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $\\sum_{i=1}^{5} i$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "20" },
              { id: "b", text: "10" },
              { id: "c", text: "25" },
              { id: "d", text: "15" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sigma", statement: "$\\sum_{i=1}^5 i=\\frac{5(6)}{2}=15$." },
            ],
            steps: [
              { reasoning: "$1+2+3+4+5=15$.", working: "15", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 15",
            commonErrors: ["Using $n^2$ formula instead of $n(n+1)/2$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u1-series-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Does $3+1+\\frac{1}{3}+\\frac{1}{9}+...$ converge? If so, find its sum.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diverges" },
              { id: "b", text: "Converges to 9" },
              { id: "c", text: "Converges to 3.5" },
              { id: "d", text: "Converges to 4.5" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Infinite sum", statement: "$r=\\frac{1}{3}$, $|r|<1$; $S_\\infty=\\frac{3}{1-1/3}=\\frac{3}{2/3}=4.5$." },
            ],
            steps: [
              { reasoning: "$r=\\frac{1}{3}$; converges; $S_\\infty=\\frac{3}{2/3}=4.5$.", working: "4.5", marks: 1, markCode: "M" },
              { reasoning: "State the sum.", working: "4.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Converges to 4.5",
            commonErrors: ["Using $\\frac{a}{1+r}$ instead of $\\frac{a}{1-r}$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-series-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the smallest $n$ such that $S_n>1000$ for the arithmetic series 5+9+13+17+...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$n=20$" },
              { id: "b", text: "$n=25$" },
              { id: "c", text: "$n=18$" },
              { id: "d", text: "$n=22$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Arithmetic sum", statement: "$S_n=\\frac{n}{2}(2a+(n-1)d)=\\frac{n}{2}(10+4(n-1))=2n^2+3n$." },
            ],
            steps: [
              { reasoning: "$S_n=2n^2+3n$; need $>1000$.", working: "2n^2+3n>1000", marks: 1, markCode: "M" },
              { reasoning: "$n=22$: $2(484)+66=1034>1000$; $n=21$: $945<1000$.", working: "n=22", marks: 1, markCode: "M" },
              { reasoning: "State the smallest $n$.", working: "n=22", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$n=22$",
            commonErrors: ["Using $S_n=\\frac{n}{2}(a+l)$ without finding last term."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u1-series-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A ball is dropped and rebounds to 75% of previous height each bounce. Initial height 2 m.",
          parts: [
            { label: "a", prompt: "Find the height after 4 bounces.", marks: 1 },
            { label: "b", prompt: "Find the total distance travelled during all bounces (up and down).", marks: 3 },
            { label: "c", prompt: "Find the sum to infinity of the bounce heights.", marks: 2 },
            { label: "d", prompt: "A second ball rebounds to 60%. Compare total bounce distances.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Geometric series", statement: "Bounce heights: $2(0.75)^n$; total distance $=2\\times$ sum of heights." },
            ],
            steps: [
              { part: "a", reasoning: "$h_4=2(0.75)^4=2(0.3164)=0.633$ m.", working: "0.633\\text{ m}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Bounce heights start at 1.5 m; $S_\\infty=\\frac{1.5}{0.25}=6$ m; total distance $=2\\times6=12$ m.", working: "12\\text{ m}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Apply geometric sum correctly.", working: "S_\\infty=6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the total.", working: "12\\text{ m}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$S_\\infty=\\frac{1.5}{0.25}=6$ m.", working: "6\\text{ m}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the sum.", working: "6\\text{ m}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "For $r=0.6$: $S_\\infty=\\frac{1.2}{0.4}=3$ m; total $=2\\times3=6$ m vs 12 m for 75% ball.", working: "6\\text{ vs }12", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State comparison.", working: "\\text{60\\% ball travels less}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 0.633 m (b) 12 m (c) 6 m (d) 6 m vs 12 m",
            commonErrors: ["Including initial 2 m drop in bounce distance sum."],
            examinerNote: "A1 for (a), M1 M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme5-u1-series-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "Evaluate $\\sum_{i=1}^{5} i$.",
      response: { type: "numeric", parts: [{ label: "Sum", answer: 15 }] },
      markscheme: {
        principles: [
          { kind: "formula", name: "Sum of integers", statement: "$\\sum_{i=1}^{n}i=\\frac{n(n+1)}{2}$; for $n=5$: $\\frac{5\\times6}{2}=15$." },
        ],
        steps: [
          { reasoning: "$1+2+3+4+5=15$.", working: "15", marks: 1, markCode: "B" },
        ],
        finalAnswer: "15",
        commonErrors: ["Computing $5^2=25$ instead of the sum."],
      },
    },
    {
      id: "mypme5-u1-series-q6",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "Evaluate $\\sum_{k=1}^{4} k^2$.",
      response: { type: "numeric", parts: [{ label: "Sum", answer: 30 }] },
      markscheme: {
        principles: [
          { kind: "formula", name: "Sum of squares", statement: "$\\sum_{k=1}^{n}k^2=\\frac{n(n+1)(2n+1)}{6}$; for $n=4$: $\\frac{4\\times5\\times9}{6}=30$." },
        ],
        steps: [
          { reasoning: "$1+4+9+16=30$.", working: "30", marks: 1, markCode: "B" },
        ],
        finalAnswer: "30",
        commonErrors: ["Summing $k$ instead of $k^2$."],
      },
    },
    {
      id: "mypme5-u1-series-q7",
      difficulty: "core",
      totalMarks: 2,
      stem: "Evaluate $\\sum_{i=11}^{20} i$.",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "145" },
          { id: "b", text: "155" },
          { id: "c", text: "165" },
          { id: "d", text: "210" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "technique", name: "Difference of sums", statement: "$\\sum_{i=11}^{20}i=\\sum_{i=1}^{20}i-\\sum_{i=1}^{10}i=210-55=155$." },
        ],
        steps: [
          { reasoning: "$\\sum_{1}^{20}=210$ and $\\sum_{1}^{10}=55$.", working: "210-55", marks: 1, markCode: "M" },
          { reasoning: "Subtract: $155$.", working: "155", marks: 1, markCode: "A" },
        ],
        finalAnswer: "**(a)** 155",
        commonErrors: ["Summing 1 to 20 only, forgetting to subtract 1 to 10."],
        examinerNote: "M1 A1.",
      },
    },
    {
      id: "mypme5-u1-series-q8",
      difficulty: "core",
      totalMarks: 2,
      stem: "Find the sum of the first 8 terms of the geometric series $3+6+12+24+\\dots$.",
      response: { type: "numeric", parts: [{ label: "$S_8$", answer: 765 }] },
      markscheme: {
        principles: [
          { kind: "formula", name: "Geometric series", statement: "$S_n=\\frac{a(r^n-1)}{r-1}$ with $a=3$, $r=2$, $n=8$." },
        ],
        steps: [
          { reasoning: "$S_8=\\frac{3(2^8-1)}{2-1}=3(255)=765$.", working: "765", marks: 1, markCode: "M" },
          { reasoning: "State the sum.", working: "S_8=765", marks: 1, markCode: "A" },
        ],
        finalAnswer: "765",
        commonErrors: ["Using $n=8$ as the last term index incorrectly or $r=3$."],
        examinerNote: "M1 A1.",
      },
    },
    {
      id: "mypme5-u1-series-q9",
      difficulty: "core",
      totalMarks: 3,
      stem: "Find the sum to infinity of $5+2.5+1.25+0.625+\\dots$",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "10" },
          { id: "b", text: "5" },
          { id: "c", text: "20" },
          { id: "d", text: "7.5" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "formula", name: "Infinite geometric series", statement: "$S_\\infty=\\frac{a}{1-r}=\\frac{5}{1-0.5}=10$ since $|r|=0.5<1$." },
        ],
        steps: [
          { reasoning: "Identify $a=5$, $r=\\frac{2.5}{5}=0.5$; $|r|<1$ so it converges.", working: "a=5,r=0.5", marks: 1, markCode: "M" },
          { reasoning: "$S_\\infty=\\frac{5}{0.5}=10$.", working: "10", marks: 1, markCode: "M" },
          { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
        ],
        finalAnswer: "**(a)** 10",
        commonErrors: ["Using $S_\\infty=\\frac{a}{r}$ or forgetting the convergence condition."],
        examinerNote: "M1 M1 A1.",
      },
    },
    {
      id: "mypme5-u1-series-q10",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "Evaluate $\\sum_{i=3}^{7}(2i+1)$.",
      response: { type: "numeric", parts: [{ label: "Sum", answer: 55 }] },
      markscheme: {
        principles: [
          { kind: "technique", name: "Sigma evaluation", statement: "Terms for $i=3,\\dots,7$ are $7,9,11,13,15$; sum $=55$." },
        ],
        steps: [
          { reasoning: "$7+9+11+13+15=55$.", working: "55", marks: 1, markCode: "B" },
        ],
        finalAnswer: "55",
        commonErrors: ["Including $i=2$ or $i=8$ in the sum."],
      },
    },
    {
      id: "mypme5-u1-series-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "Find the sum to infinity of the geometric series with first term $9$ and common ratio $\\frac13$.",
      response: { type: "numeric", parts: [{ label: "$S_\\infty$", answer: 13.5 }] },
      markscheme: {
        principles: [
          { kind: "formula", name: "Infinite geometric series", statement: "$S_\\infty=\\frac{9}{1-\\frac13}=\\frac{9}{\\frac23}=13.5$." },
        ],
        steps: [
          { reasoning: "$S_\\infty=\\frac{a}{1-r}=\\frac{9}{2/3}=13.5$.", working: "13.5", marks: 1, markCode: "M" },
          { reasoning: "State the sum.", working: "13.5", marks: 1, markCode: "A" },
        ],
        finalAnswer: "13.5",
        commonErrors: ["Computing $\\frac{9}{1/3}=27$ instead of $\\frac{9}{2/3}$."],
        examinerNote: "M1 A1.",
      },
    },
    {
      id: "mypme5-u1-series-q12",
      difficulty: "challenge",
      totalMarks: 3,
      stem: "Find the value of $n$ for which $\\sum_{i=1}^{n} i = 210$.",
      response: { type: "numeric", parts: [{ label: "$n$", answer: 20 }] },
      markscheme: {
        principles: [
          { kind: "formula", name: "Sum of integers", statement: "$\\frac{n(n+1)}{2}=210$ → $n(n+1)=420$ → $n=20$." },
        ],
        steps: [
          { reasoning: "Set up $\\frac{n(n+1)}{2}=210$ → $n^2+n-420=0$.", working: "n^2+n-420=0", marks: 1, markCode: "M" },
          { reasoning: "Factor: $(n-20)(n+21)=0$ → $n=20$ (positive).", working: "n=20", marks: 1, markCode: "M" },
          { reasoning: "State $n=20$.", working: "20", marks: 1, markCode: "A" },
        ],
        finalAnswer: "$n=20$",
        commonErrors: ["Forgetting the factor of 2 in the denominator."],
        examinerNote: "M1 M1 A1.",
      },
    },
    {
      id: "mypme5-u1-series-q13",
      difficulty: "challenge",
      totalMarks: 6,
      stem: "A ball is dropped from 10 m. Each rebound reaches 75% of the previous height.",
      parts: [
        { label: "a", prompt: "Find the height of the second rebound.", marks: 1 },
        { label: "b", prompt: "Find the total distance travelled by the ball until it comes to rest.", marks: 3 },
        { label: "c", prompt: "Find the number of the first rebound whose height is less than 0.1 m.", marks: 1 },
        { label: "d", prompt: "What total distance would be travelled if the rebound ratio were 80% instead?", marks: 1 },
      ],
      response: { type: "open" },
      markscheme: {
        principles: [
          { kind: "formula", name: "Infinite geometric series", statement: "Heights form a geometric sequence with $r=0.75$; total distance $=10+2\\sum_{n=1}^{\\infty}10(0.75)^n$." },
        ],
        steps: [
          { part: "a", reasoning: "First rebound $10(0.75)=7.5$; second $=10(0.75)^2=5.625$ m.", working: "5.625\\text{ m}", marks: 1, markCode: "B" },
          { part: "b", reasoning: "Up-and-down sum after first drop: $2\\times\\frac{7.5}{1-0.75}=2\\times30=60$; total $=10+60=70$ m.", working: "70\\text{ m}", marks: 1, markCode: "M" },
          { part: "b", reasoning: "Include the initial 10 m drop.", working: "10+60", marks: 1, markCode: "M" },
          { part: "b", reasoning: "State the total distance.", working: "70\\text{ m}", marks: 1, markCode: "A" },
          { part: "c", reasoning: "Solve $10(0.75)^n<0.1$ → $0.75^n<0.01$ → $n>\\frac{\\ln0.01}{\\ln0.75}=16.01$, so $n=17$.", working: "n=17", marks: 1, markCode: "M" },
          { part: "d", reasoning: "With $r=0.8$: total $=10+2\\times\\frac{8}{1-0.8}=10+2\\times40=90$ m.", working: "90\\text{ m}", marks: 1, markCode: "M" },
        ],
        finalAnswer: "(a) 5.625 m (b) 70 m (c) 17th rebound (d) 90 m",
        commonErrors: ["Counting only upward journeys or forgetting the initial drop."],
        examinerNote: "B1 for (a), M1 M1 A1 for (b), M1 for (c), M1 for (d).",
      },
    },
    {
      id: "mypme5-u1-series-q14",
      difficulty: "core",
      totalMarks: 2,
      stem: "Which of the following series converges?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "$\\sum_{n=1}^{\\infty}\\frac1n$" },
          { id: "b", text: "$\\sum_{n=1}^{\\infty}1$" },
          { id: "c", text: "$\\sum_{n=1}^{\\infty}\\left(\\frac23\\right)^n$" },
          { id: "d", text: "$\\sum_{n=1}^{\\infty}\\frac{n}{n+1}$" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "theorem", name: "Convergence condition", statement: "Geometric series converges iff $|r|<1$; harmonic-type series $\\sum\\frac1n$ diverges." },
        ],
        steps: [
          { reasoning: "Only (a) is geometric with $r=\\frac23<1$; the others diverge.", working: "r=\\frac23<1", marks: 1, markCode: "M" },
          { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
        ],
        finalAnswer: "**(a)** $\\sum(\\frac23)^n$",
        commonErrors: ["Thinking $\\sum\\frac1n$ converges because terms get small."],
        examinerNote: "M1 A1.",
      },
    },
    {
      id: "mypme5-u1-series-q15",
      difficulty: "challenge",
      totalMarks: 3,
      stem: "Find the sum to infinity of $\\sum_{n=1}^{\\infty}3(0.4)^n$.",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "2" },
          { id: "b", text: "$\\frac{10}{3}$" },
          { id: "c", text: "3" },
          { id: "d", text: "5" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          { kind: "formula", name: "Infinite geometric series", statement: "First term $a=3(0.4)=1.2$, $r=0.4$; $S_\\infty=\\frac{1.2}{1-0.4}=\\frac{1.2}{0.6}=2$." },
        ],
        steps: [
          { reasoning: "Identify $a=1.2$ (the $n=1$ term) and $r=0.4$; $|r|<1$ so it converges.", working: "a=1.2,r=0.4", marks: 1, markCode: "M" },
          { reasoning: "$S_\\infty=\\frac{1.2}{0.6}=2$.", working: "2", marks: 1, markCode: "M" },
          { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
        ],
        finalAnswer: "**(a)** 2",
        commonErrors: ["Taking $a=3$ instead of $a=1.2$ (the $n=1$ term)."],
        examinerNote: "M1 M1 A1.",
      },
    },
    {
      id: "mypme5-u1-series-q16",
      difficulty: "challenge",
      totalMarks: 5,
      stem: "A theatre has 20 rows of seats. The first row has 15 seats and each row has 3 more seats than the row in front.",
      parts: [
        { label: "a", prompt: "Find the number of seats in row 20.", marks: 1 },
        { label: "b", prompt: "Find the total number of seats.", marks: 2 },
        { label: "c", prompt: "Find the number of complete rows needed to seat at least 1500 people.", marks: 2 },
      ],
      response: { type: "open" },
      markscheme: {
        principles: [
          { kind: "formula", name: "Arithmetic series", statement: "$a=15$, $d=3$; row $n$ has $15+3(n-1)$ seats; total $S_n=\\frac{n}{2}(30+3(n-1))$." },
        ],
        steps: [
          { part: "a", reasoning: "Row 20: $15+3(19)=72$ seats.", working: "72", marks: 1, markCode: "B" },
          { part: "b", reasoning: "$S_{20}=\\frac{20}{2}(15+72)=10(87)=870$ seats.", working: "870", marks: 1, markCode: "M" },
          { part: "b", reasoning: "State the total.", working: "870", marks: 1, markCode: "A" },
          { part: "c", reasoning: "Need smallest $n$ with $S_n\\ge1500$: $\\frac{n}{2}(27+3n)\\ge1500$ → $3n^2+27n-3000\\ge0$ → $n\\ge27.4$ → $n=28$ rows.", working: "n=28", marks: 1, markCode: "M" },
          { part: "c", reasoning: "Check $S_{27}=\\frac{27}{2}(27+81)=27\\times54=1458<1500$; $S_{28}=\\frac{28}{2}(27+84)=14\\times111=1554\\ge1500$.", working: "1554\\ge1500", marks: 1, markCode: "A" },
        ],
        finalAnswer: "(a) 72 (b) 870 (c) 28 rows",
        commonErrors: ["Using $d=15$ or forgetting the $-1$ in the $n$th term."],
        examinerNote: "B1 for (a), M1 A1 for (b), M1 A1 for (c).",
      },
    },
      ],
    },
    {
      id: "mypme5-u1-finance",
      title: "Financial Mathematics",
      skill: "Apply compound interest, depreciation, and annuity formulas to loans, savings, and asset valuation problems.",
      lesson: {
        sections: [
          {
            heading: "Compound interest",
            body: "Discrete: $A=P(1+r)^n$ where $r$ is rate per period. Continuous: $A=Pe^{rt}$. For monthly compounding, divide annual rate by 12 and multiply periods by 12.",
          },
          {
            heading: "Depreciation and loans",
            body: "Depreciation: $V=V_0(1-d)^n$ or straight-line $V=V_0-dn$. Loan repayments use annuity: payment $=\\frac{PV\\times r}{1-(1+r)^{-n}}$. Always identify the rate per period first.",
          },
          {
            heading: "Comparing options",
            body: "To compare savings accounts or loans, compute total amount after the period or total repayments. Effective annual rate accounts for compounding frequency — useful for fair comparison.",
          },
        ],
        keyFormulas: [
          { name: "Compound interest", statement: "$A=P(1+r)^n$" },
          { name: "Depreciation", statement: "$V=V_0(1-d)^n$" },
          { name: "Annuity payment", statement: "$PMT=\\frac{PV\\cdot r}{1-(1+r)^{-n}}$" },
        ],
        workedExample: {
          problem: "Invest 5000 at 4% compounded monthly for 3 years. Find final amount.",
          solution: "$A=5000(1+\\frac{0.04}{12})^{36}=5000(1.00333)^{36}=5000(1.1273)=5636$.",
        },
      },
      questions: [
        {
          id: "mypme5-u1-fin-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "5000 invested at 6% per annum compound interest for 4 years. Find the amount.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6312.13" },
              { id: "b", text: "6000" },
              { id: "c", text: "6200" },
              { id: "d", text: "6800" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound interest", statement: "$A=5000(1.06)^4=5000(1.26248)=6312.13$." },
            ],
            steps: [
              { reasoning: "$1.06^4=1.26248$; $A=6312.13$.", working: "6312.13", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 6312.13",
            commonErrors: ["Using simple interest $5000(1+0.06\\times4)=6200$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u1-fin-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car worth 20000 depreciates at 20% per year. Find its value after 3 years.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6400" },
              { id: "b", text: "12000" },
              { id: "c", text: "8000" },
              { id: "d", text: "10240" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Depreciation", statement: "$V=20000(0.8)^3=20000(0.512)=10240$." },
            ],
            steps: [
              { reasoning: "$0.8^3=0.512$; $V=10240$.", working: "10240", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "10240", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10240",
            commonErrors: ["Subtracting 20% each year linearly."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-fin-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A loan of 10000 is repaid in 60 monthly instalments at 0.5% per month. Find the monthly payment.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\approx166.67$" },
              { id: "b", text: "$\\approx150" },
              { id: "c", text: "$\\approx200" },
              { id: "d", text: "$\\approx193.35$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Annuity", statement: "$PMT=\\frac{PV\\cdot r}{1-(1+r)^{-n}}$ with $r=0.005$, $n=60$." },
            ],
            steps: [
              { reasoning: "Denominator: $1-(1.005)^{-60}=1-0.74137=0.25863$.", working: "0.25863", marks: 1, markCode: "M" },
              { reasoning: "$PMT=\\frac{10000(0.005)}{1-(1.005)^{-60}}=\\frac{50}{0.25863}\\approx193.35$.", working: "193.35", marks: 1, markCode: "M" },
              { reasoning: "State the payment.", working: "193.35", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx193.35$ per month",
            commonErrors: ["Using annual rate instead of monthly rate."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u1-fin-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two savings accounts: A pays 5% p.a. compounded annually; B pays 4.9% p.a. compounded monthly.",
          parts: [
            { label: "a", prompt: "Find the effective annual rate for account B.", marks: 2 },
            { label: "b", prompt: "Which account gives better return on 10000 after 1 year?", marks: 2 },
            { label: "c", prompt: "Find the amount in each after 5 years.", marks: 2 },
            { label: "d", prompt: "After how many years does account B overtake account A?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Effective rate", statement: "EAR $=(1+\\frac{r}{m})^m-1$ where $m$ = compounding periods." },
            ],
            steps: [
              { part: "a", reasoning: "EAR $=(1+\\frac{0.049}{12})^{12}-1=(1.004083)^{12}-1=0.05017$ or 5.01%.", working: "5.01\\%", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the EAR.", working: "5.01\\%", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A: $10000(1.05)=10500$; B: $10000(1.004083)^{12}=10000(1.05011)=10501$; B slightly better.", working: "B \\approx10501", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the better account.", working: "B", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A: $10000(1.05)^5=12763$; B: $10000(1.004083)^{60}=10000(1.2766)=12769$.", working: "12763\\text{ vs }12769", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State both amounts.", working: "12763\\text{ and }12769", marks: 1, markCode: "A" },
              { part: "d", reasoning: "B already overtakes A after year 1 because EAR 5.01% > 5%; B is always better.", working: "\\text{already better}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State conclusion.", working: "\\text{B always better}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 5.01% (b) B (c) A: 12763, B: 12769 (d) B always better",
            commonErrors: ["Comparing nominal rates without computing effective rates."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme5-u1-fin-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the simple interest earned on $\\$1000$ at $5\\%$ per year for 2 years.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\$110$" },
              { id: "b", text: "$\\$1100$" },
              { id: "c", text: "$\\$1050$" },
              { id: "d", text: "$\\$1200$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Simple interest", statement: "$I=Prt=1000(0.05)(2)=100$; total $=1100$." },
            ],
            steps: [
              { reasoning: "Interest $=1000\\times0.05\\times2=100$; total $=1100$.", working: "1100", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\$1100$",
            commonErrors: ["Forgetting to add the principal back."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u1-fin-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the value of $\\$500$ invested at $6\\%$ per year compounded annually for 4 years.",
          response: { type: "numeric", parts: [{ label: "Final value ($)", answer: 631.24, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound interest", statement: "$A=P(1+r)^n=500(1.06)^4=631.24$." },
            ],
            steps: [
              { reasoning: "$1.06^4=1.262477$; $A=500\\times1.262477=631.24$.", working: "631.24", marks: 1, markCode: "M" },
              { reasoning: "State the final value.", working: "631.24", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$631.24$",
            commonErrors: ["Using simple interest $500+500(0.06)(4)=620$."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-fin-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A car worth $\\$20\\,000$ depreciates at $15\\%$ per year. Find its value after 3 years.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\$11\\,500$" },
              { id: "b", text: "$\\$14\\,450$" },
              { id: "c", text: "$\\$12\\,282.50$" },
              { id: "d", text: "$\\$12\\,000$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Depreciation", statement: "$V=20000(1-0.15)^3=20000(0.85)^3=12282.50$." },
            ],
            steps: [
              { reasoning: "$0.85^3=0.614125$; $V=20000\\times0.614125=12282.50$.", working: "12282.50", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\$12\\,282.50$",
            commonErrors: ["Subtracting $15\\%$ of the original each year (linear depreciation)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-fin-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the value of $\\$3000$ invested at $4\\%$ per year compounded monthly for 2 years.",
          response: { type: "numeric", parts: [{ label: "Final value ($)", answer: 3249.4, tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound interest", statement: "$A=3000\\left(1+\\frac{0.04}{12}\\right)^{24}=3249.4$." },
            ],
            steps: [
              { reasoning: "Monthly rate $=0.003333$, periods $=24$: $3000(1.003333)^{24}$.", working: "3000(1.003333)^{24}", marks: 1, markCode: "M" },
              { reasoning: "Compute: $(1.003333)^{24}\\approx1.08314$ → $A\\approx3249.4$.", working: "3249.4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$3249.4$",
            commonErrors: ["Using $n=2$ (years) instead of $n=24$ (months)."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-fin-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A savings account pays a nominal rate of $8\\%$ per year compounded quarterly. Find the effective annual rate.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$32\\%$" },
              { id: "b", text: "$8.24\\%$" },
              { id: "c", text: "$8\\%$" },
              { id: "d", text: "$8.30\\%$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Effective rate", statement: "$\\text{EAR}=(1+\\frac{r}{m})^m-1=(1.02)^4-1=0.08243=8.24\\%$." },
            ],
            steps: [
              { reasoning: "Quarterly rate $=0.08/4=0.02$; $(1.02)^4=1.082432$.", working: "1.082432", marks: 1, markCode: "M" },
              { reasoning: "Subtract 1 and convert: $0.08243\\to8.24\\%$.", working: "8.24\\%", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $8.24\\%$",
            commonErrors: ["Multiplying $8\\%$ by 4 to get $32\\%$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u1-fin-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Find the simple interest earned on $\\$800$ at $3.5\\%$ per year for 3 years.",
          response: { type: "numeric", parts: [{ label: "Interest ($)", answer: 84 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Simple interest", statement: "$I=Prt=800(0.035)(3)=84$." },
            ],
            steps: [
              { reasoning: "$I=800\\times0.035\\times3=84$.", working: "84", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$\\$84$",
            commonErrors: ["Using $r=3.5$ instead of $0.035$."],
          },
        },
        {
          id: "mypme5-u1-fin-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "An asset worth $\\$10\\,000$ depreciates at $10\\%$ per year. After how many complete years is it worth less than $\\$5000$?",
          response: { type: "numeric", parts: [{ label: "Years", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Depreciation", statement: "$10000(0.9)^n<5000$ → $0.9^n<0.5$ → $n>\\frac{\\ln0.5}{\\ln0.9}=6.58$ → $n=7$." },
            ],
            steps: [
              { reasoning: "Solve $0.9^n<0.5$: $n>6.58$, so the first complete year is $n=7$.", working: "n=7", marks: 1, markCode: "M" },
              { reasoning: "Check: $0.9^6=0.531>0.5$; $0.9^7=0.478<0.5$.", working: "0.478<0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7 years",
            commonErrors: ["Rounding 6.58 down to 6 instead of up to 7."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-fin-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the future value of an annuity paying $\\$200$ at the end of each month for 10 years, with interest at $6\\%$ per year compounded monthly.",
          response: { type: "numeric", parts: [{ label: "Future value ($)", answer: 32776, tolerance: 5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Future value of annuity", statement: "$FV=PMT\\cdot\\frac{(1+i)^n-1}{i}$ with $i=0.005$, $n=120$, $PMT=200$." },
            ],
            steps: [
              { reasoning: "$(1.005)^{120}\\approx1.81940$; factor $=\\frac{0.81940}{0.005}=163.879$.", working: "163.879", marks: 1, markCode: "M" },
              { reasoning: "$FV=200\\times163.879=32775.9\\approx32776$.", working: "32776", marks: 1, markCode: "M" },
              { reasoning: "State the future value.", working: "32\\,776", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$32\\,776$",
            commonErrors: ["Using $i=0.06$ monthly instead of $0.005$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u1-fin-q13",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Two loan offers for $\\$10\\,000$ over 5 years: Loan A charges $8\\%$ per year compounded annually; Loan B charges $7.8\\%$ per year compounded monthly.",
          parts: [
            { label: "a", prompt: "Find the amount owed after 5 years on Loan A.", marks: 2 },
            { label: "b", prompt: "Find the amount owed after 5 years on Loan B.", marks: 3 },
            { label: "c", prompt: "Which loan has the lower effective annual rate? Justify.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound interest", statement: "Loan A: $10000(1.08)^5$; Loan B: $10000(1+0.078/12)^{60}$." },
            ],
            steps: [
              { part: "a", reasoning: "$A=10000(1.08)^5=10000(1.46933)=14693$.", working: "14693", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the amount.", working: "14\\,693", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Monthly rate $=0.0065$, $n=60$: $(1.0065)^{60}\\approx1.47509$.", working: "1.47509", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$B=10000(1.47509)=14751$.", working: "14751", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the amount.", working: "14\\,751", marks: 1, markCode: "A" },
              { part: "c", reasoning: "EAR for A $=8\\%$; EAR for B $=(1.0065)^{12}-1\\approx8.08\\%$.", working: "8.08\\%", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Loan A has the lower effective rate even though B's nominal rate is lower.", working: "\\text{Loan A}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $\\$14\\,693$ (b) $\\$14\\,751$ (c) Loan A — lower effective rate",
            commonErrors: ["Comparing nominal rates $8\\%$ vs $7.8\\%$ without computing effective rates."],
            examinerNote: "M1 A1 for (a), M1 M1 A1 for (b), M1 R1 for (c).",
          },
        },
        {
          id: "mypme5-u1-fin-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which investment gives the higher return: $5\\%$ per year compounded quarterly, or $5\\%$ per year compounded annually?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cannot be determined" },
              { id: "b", text: "Compounded quarterly" },
              { id: "c", text: "Compounded annually" },
              { id: "d", text: "They are equal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Effective rate", statement: "Quarterly: $(1.0125)^4-1=5.09\\%$; annual: $5\\%$. More frequent compounding gives higher effective rate." },
            ],
            steps: [
              { reasoning: "$(1+0.05/4)^4-1=(1.0125)^4-1=0.0509>0.05$.", working: "5.09\\%>5\\%", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Compounded quarterly",
            commonErrors: ["Assuming equal nominal rates give equal returns."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-fin-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A price of $\\$50$ increases by $3\\%$ per year. After how many complete years does it first exceed $\\$70$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "12 years" },
              { id: "b", text: "13 years" },
              { id: "c", text: "10 years" },
              { id: "d", text: "11 years" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound growth", statement: "$50(1.03)^n>70$ → $1.03^n>1.4$ → $n>\\frac{\\ln1.4}{\\ln1.03}=11.36$ → $n=12$." },
            ],
            steps: [
              { reasoning: "Solve $1.03^n>1.4$ → $n>11.36$.", working: "n>11.36", marks: 1, markCode: "M" },
              { reasoning: "Check: $1.03^{11}=1.384<1.4$; $1.03^{12}=1.426>1.4$.", working: "1.426>1.4", marks: 1, markCode: "M" },
              { reasoning: "Match option (a): 12 years.", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 12 years",
            commonErrors: ["Rounding 11.36 down to 11."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u1-fin-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A company needs $\\$15\\,000$ in 8 years and invests in a fund earning $5\\%$ per year compounded annually, paying $PMT$ at the end of each year.",
          parts: [
            { label: "a", prompt: "Find the future value factor $\\frac{(1.05)^8-1}{0.05}$.", marks: 2 },
            { label: "b", prompt: "Find the required annual payment $PMT$.", marks: 2 },
            { label: "c", prompt: "Find the total amount paid in and state how it compares with $\\$15\\,000$.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Future value of annuity", statement: "$FV=PMT\\cdot\\frac{(1.05)^8-1}{0.05}$; solve for $PMT$ when $FV=15000$." },
            ],
            steps: [
              { part: "a", reasoning: "$(1.05)^8=1.477455$; factor $=\\frac{0.477455}{0.05}=9.549$.", working: "9.549", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the factor.", working: "9.549", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$PMT=\\frac{15000}{9.549}=1570.7$.", working: "1570.7", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the payment.", working: "1570.7\\text{ per year}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Total paid $=8\\times1570.7=12565.6<15000$ — interest makes up the difference.", working: "12565.6<15000", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 9.549 (b) $\\$1570.7$ per year (c) $\\$12\\,565.6$ paid in — less than target thanks to interest",
            commonErrors: ["Dividing by 8 instead of using the annuity factor."],
            examinerNote: "M1 A1 for (a), M1 A1 for (b), R1 for (c).",
          },
        },
      ],
    },
  ],
};
