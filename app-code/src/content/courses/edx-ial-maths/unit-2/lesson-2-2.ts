import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "edial-maths-u2-lesson-2-2",
  code: "2-2",
  title: "Sequences, Series and Exponentials",
  goal: "I CAN work with arithmetic and geometric sequences and series, and manipulate exponential and logarithmic expressions.",
  standards: ["WMA12 P2", "Sequences and series", "Exponentials and logarithms"],
  vocabulary: [
    { term: "Arithmetic sequence", definition: "A sequence with a constant difference $d$ between consecutive terms; $u_n=a+(n-1)d$." },
    { term: "Geometric sequence", definition: "A sequence with a constant ratio $r$ between consecutive terms; $u_n=ar^{n-1}$." },
    { term: "Arithmetic series", definition: "The sum of an arithmetic sequence; $S_n=\\frac{n}{2}(2a+(n-1)d)$ or $\\frac{n}{2}(a+l)$." },
    { term: "Geometric series", definition: "The sum of a geometric sequence; $S_n=\\frac{a(1-r^n)}{1-r}$ for $r\\neq1$." },
    { term: "Laws of logarithms", definition: "$\\log(ab)=\\log a+\\log b$, $\\log\\frac{a}{b}=\\log a-\\log b$, $\\log a^n=n\\log a$, $\\log_a a=1$." },
    { term: "Exponential equation", definition: "An equation involving $a^x$ or $e^x$, solved using logarithms or by matching bases." },
  ],
  concepts: [
    {
      id: "edial-maths-u2-sequences",
      title: "Arithmetic and geometric sequences",
      skill: "Find terms and sums of arithmetic and geometric sequences and solve problems involving them.",
      lesson: {
        sections: [
          {
            heading: "Arithmetic sequences and series",
            body: "With first term $a$ and common difference $d$: $u_n=a+(n-1)d$. The sum of the first $n$ terms is $S_n=\\frac{n}{2}\\left[2a+(n-1)d\\right]=\\frac{n}{2}(a+l)$ where $l$ is the last term. An arithmetic series grows linearly; a finite arithmetic series has a 'middle' term equal to the mean of the first and last.",
          },
          {
            heading: "Geometric sequences and series",
            body: "With first term $a$ and common ratio $r$: $u_n=ar^{n-1}$ and $S_n=\\frac{a(1-r^n)}{1-r}$ for $r\\neq1$. For an **infinite** geometric series to converge we need $|r|<1$, and then $S_\\infty=\\frac{a}{1-r}$. If $|r|\\ge1$ the sum diverges.",
          },
          {
            heading: "Choosing between AP and GP",
            body: "Constant **difference** → arithmetic; constant **ratio** → geometric. In problems, identify which by checking consecutive terms. Loan repayments and depreciation are geometric; saving a fixed amount monthly is arithmetic.",
          },
        ],
        keyFormulas: [
          { name: "AP nth term", statement: "$u_n=a+(n-1)d$" },
          { name: "AP sum", statement: "$S_n=\\frac{n}{2}\\left[2a+(n-1)d\\right]$" },
          { name: "GP nth term", statement: "$u_n=ar^{n-1}$" },
          { name: "GP sum / infinite sum", statement: "$S_n=\\frac{a(1-r^n)}{1-r}$; $S_\\infty=\\frac{a}{1-r}$ for $|r|<1$" },
        ],
        workedExample: {
          problem: "A savings plan pays £100 at the end of each month for 12 months, with interest at 3% per month compounded monthly. Find the total amount in the account at the end of the twelfth month.",
          solution: "The first payment earns interest for 11 months and the last for none, so the total is a geometric series with first term $100(1.03)^{11}$? No — summing each payment with its interest: total $=100\\left(1.03^{11}+1.03^{10}+\\cdots+1.03^0\\right)=100\\times\\frac{1.03^{12}-1}{0.03}$. Since $1.03^{12}\\approx1.42576$, total $\\approx100\\times\\frac{0.42576}{0.03}\\approx1419$.",
        },
      },
      questions: [
        {
          id: "edial-maths-u2-seq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An arithmetic sequence has first term $5$ and common difference $4$. What is the $10$th term?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$36$" },
              { id: "b", text: "$40$" },
              { id: "c", text: "$41$" },
              { id: "d", text: "$45$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "AP nth term", statement: "$u_n=a+(n-1)d$." },
            ],
            steps: [
              { reasoning: "$u_{10}=5+9\\times4=41$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $41$",
            commonErrors: ["Using $n$ instead of $n-1$ in the formula."],
          },
        },
        {
          id: "edial-maths-u2-seq-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the sum of the first $20$ terms of the arithmetic series $3+7+11+15+\\ldots$",
          response: {
            type: "numeric",
            parts: [{ label: "S_20", answer: 820 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "AP sum", statement: "$S_n=\\frac{n}{2}\\left[2a+(n-1)d\\right]$." },
            ],
            steps: [
              { reasoning: "Identify $a=3$, $d=4$, $n=20$.", marks: 1, markCode: "M" },
              { reasoning: "Substitute into the sum formula.", working: "S_{20}=\\frac{20}{2}\\left[2(3)+19(4)\\right]=10(6+76)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "S_{20}=10\\times82=820", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$S_{20}=820$",
            commonErrors: ["Using $n=20$ terms as $n=21$.", "Confusing $d$ with the first term."],
          },
        },
        {
          id: "edial-maths-u2-seq-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A geometric sequence has first term $81$ and common ratio $-\\frac{1}{3}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "GP nth term and sum", statement: "$u_n=ar^{n-1}$; $S_n=\\frac{a(1-r^n)}{1-r}$; $S_\\infty=\\frac{a}{1-r}$ for $|r|<1$." },
            ],
            steps: [
              { reasoning: "Write the nth-term expression.", working: "u_n=81\\left(-\\frac13\\right)^{n-1}", marks: 1, markCode: "M" },
              { reasoning: "Since $|r|=\\frac13<1$, the infinite sum converges; apply $S_\\infty=\\frac{a}{1-r}$.", working: "S_\\infty=\\frac{81}{1-(-\\frac13)}=\\frac{81}{\\frac43}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "S_\\infty=\\frac{243}{4}=60.75", marks: 1, markCode: "A" },
              { reasoning: "State the sum to infinity.", working: "S_\\infty=60.75", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$u_n=81\\left(-\\frac13\\right)^{n-1}$; $S_\\infty=\\frac{243}{4}=60.75$",
            commonErrors: ["Forgetting the sign of $r$ in $1-r$.", "Claiming divergence because $r$ is negative — only $|r|$ matters."],
            examinerNote: "Watch for the stray brace typo pattern — all braces must balance.",
          },
        },
        {
          id: "edial-maths-u2-seq-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A ball is dropped from a height of $2$ metres. Each bounce it reaches $80\\%$ of its previous height.",
          parts: [
            { label: "a", prompt: "Find the height reached after the first and second bounces.", marks: 2 },
            { label: "b", prompt: "Show that the heights form a geometric sequence and state its common ratio.", marks: 2 },
            { label: "c", prompt: "Find the total distance travelled by the ball until it comes to rest, including the initial drop.", marks: 4 },
            { label: "d", prompt: "A different ball rebounds to $75\\%$ of its previous height. Find the least number of bounces needed for the height after a bounce to be less than $1$ cm, given a drop from $2$ m.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "GP", statement: "$u_n=ar^{n-1}$; $S_\\infty=\\frac{a}{1-r}$ for $|r|<1$." },
            ],
            steps: [
              { part: "a", reasoning: "Each bounce is $0.8$ times the previous height.", working: "h_1=2\\times0.8=1.6\\text{ m};\\ h_2=1.6\\times0.8=1.28\\text{ m}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both heights.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Consecutive heights have ratio $0.8$, constant — geometric.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "State the common ratio.", working: "r=0.8=\\frac45", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Total distance = drop + $2\\times$ sum of bounce heights (up and down).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Bounce heights form a GP with $a=1.6$, $r=0.8$; sum to infinity.", working: "S=\\frac{1.6}{1-0.8}=8\\text{ m (upward bounces)}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Total $=2+2\\times8=18$ m.", working: "D=2+16=18\\text{ m}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the total distance.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Height after $n$ bounces is $200\\times0.75^n$ cm; require this to be less than $1$ cm.", working: "200(0.75)^n<1\\Rightarrow0.75^n<0.005", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Take logs: $n\\ln0.75<\\ln0.005$. Since $\\ln0.75<0$, dividing reverses the inequality: $n>\\frac{\\ln0.005}{\\ln0.75}\\approx18.4$, so the least integer is $n=19$.", working: "n>18.4\\Rightarrow n=19", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $1.6$ m and $1.28$ m (b) geometric, $r=0.8$ (c) $18$ m (d) $19$ bounces",
            commonErrors: ["Counting each bounce once instead of up and down in (c).", "Forgetting the initial $2$ m drop.", "Off-by-one in (d) — verify $n=18$ gives $200\\times0.75^{18}\\approx1.13$ cm $>1$."],
            examinerNote: "In (d) accept logarithmic or iterative solution; $0.75^{19}\\approx0.00423 gives \\approx0.85 cm.",
          },
        },
      ],
    },
    {
      id: "edial-maths-u2-exponentials",
      title: "Exponentials and logarithms",
      skill: "Apply the laws of indices and logarithms and solve exponential and logarithmic equations.",
      lesson: {
        sections: [
          {
            heading: "Laws of indices and logarithms",
            body: "Indices: $a^m\\times a^n=a^{m+n}$, $a^m\\div a^n=a^{m-n}$, $(a^m)^n=a^{mn}$, $a^0=1$, $a^{-n}=\\frac{1}{a^n}$. Logarithms (any base $a>0$, $a\\neq1$): $\\log_a(ab)=\\log_a a+\\log_a b$, $\\log_a\\frac{a}{b}=\\log_a a-\\log_a b$, $\\log_a a^n=n$, and $\\log_a a=1$. When the base is $e$ we write $\\ln$.",
          },
          {
            heading: "Solving exponential equations",
            body: "To solve $a^{f(x)}=b$, take logarithms: $f(x)\\ln a=\\ln b$. To solve $a^{f(x)}=a^{g(x)}$, match exponents. For equations like $3^{x+1}=5^x$, take $\\ln$ of both sides and collect terms in $x$.",
          },
          {
            heading: "Logarithmic equations",
            body: "Use the laws to combine logs into a single logarithm, then exponentiate. Always check solutions — logarithms of negative numbers are undefined, and extraneous roots can appear when squaring.",
          },
        ],
        keyFormulas: [
          { name: "Log laws", statement: "$\\log(ab)=\\log a+\\log b$; $\\log a^n=n\\log a$" },
          { name: "Change of base", statement: "$\\log_a b=\\frac{\\ln b}{\\ln a}$" },
          { name: "Exponential solve", statement: "$a^x=b\\Rightarrow x=\\frac{\\ln b}{\\ln a}$" },
        ],
        workedExample: {
          problem: "Solve $2^{x+1}=5^x$.",
          solution: "Take $\\ln$: $(x+1)\\ln2=x\\ln5$, so $x\\ln2+\\ln2=x\\ln5$, giving $\\ln2=x(\\ln5-\\ln2)=x\\ln\\frac52$. Hence $x=\\frac{\\ln2}{\\ln(5/2)}=\\frac{\\ln2}{\\ln2.5}\\approx0.756$.",
        },
      },
      questions: [
        {
          id: "edial-maths-u2-exp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify $\\log_2 8+\\log_2 4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$12$" },
              { id: "d", text: "$\\log_2 12$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Log laws", statement: "$\\log a+\\log b=\\log(ab)$." },
            ],
            steps: [
              { reasoning: "$\\log_2 8=3$ and $\\log_2 4=2$, so the sum is $5$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $5$",
            commonErrors: ["Multiplying the logs instead of adding.", "Writing $\\log_2 12$ without evaluating."],
          },
        },
        {
          id: "edial-maths-u2-exp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $3^{x}=40$, giving your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "x", answer: 3.3577, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Exponential solve", statement: "$a^x=b\\Rightarrow x=\\frac{\\ln b}{\\ln a}$." },
            ],
            steps: [
              { reasoning: "Take natural logarithms of both sides.", working: "x\\ln3=\\ln40", marks: 1, markCode: "M" },
              { reasoning: "Divide.", working: "x=\\frac{\\ln40}{\\ln3}=\\frac{3.6889}{1.0986}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate to 3 s.f.", working: "x\\approx3.36", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\approx3.36$",
            commonErrors: ["Dividing $\\ln3$ by $\\ln40$.", "Rounding too early."],
            examinerNote: "Accept $3.36$; $\\frac{\\ln40}{\\ln3}$ is exact.",
          },
        },
        {
          id: "edial-maths-u2-exp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $\\ln(x+1)+\\ln(x-1)=\\ln8$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Log laws", statement: "$\\ln A+\\ln B=\\ln(AB)$; logs require positive arguments." },
            ],
            steps: [
              { reasoning: "Combine the left side into a single logarithm.", working: "\\ln[(x+1)(x-1)]=\\ln8", marks: 1, markCode: "M" },
              { reasoning: "Exponentiate both sides.", working: "(x+1)(x-1)=8\\Rightarrow x^2-1=8", marks: 1, markCode: "M" },
              { reasoning: "Solve the quadratic.", working: "x^2=9\\Rightarrow x=\\pm3", marks: 1, markCode: "M" },
              { reasoning: "Reject $x=-3$: $\\ln(x-1)=\\ln(-4)$ is undefined.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=3$",
            commonErrors: ["Accepting $x=-3$ without checking the domain.", "Expanding $(x+1)(x-1)$ as $x^2+1$."],
          },
        },
        {
          id: "edial-maths-u2-exp-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The population of a town is modelled by $P=12000e^{0.03t}$, where $P$ is the population and $t$ is the time in years.",
          parts: [
            { label: "a", prompt: "State the initial population and the annual percentage growth rate.", marks: 2 },
            { label: "b", prompt: "Find the population after $10$ years, to the nearest whole number.", marks: 3 },
            { label: "c", prompt: "Find the value of $t$ for which the population reaches $20000$.", marks: 3 },
            { label: "d", prompt: "The population doubles at time $t=d$. Find $d$ to 2 decimal places.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) population", answer: 16198 },
              { label: "(c) t", answer: 17.0288, tolerance: 0.01, unit: "years" },
              { label: "(d) d", answer: 23.1, tolerance: 0.05, unit: "years" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Exponential model", statement: "$P=P_0e^{kt}$; $k$ is the continuous growth rate." },
              { kind: "formula", name: "Solve exponential", statement: "$t=\\frac{1}{k}\\ln\\frac{P}{P_0}$." },
            ],
            steps: [
              { part: "a", reasoning: "At $t=0$, $P=12000e^0=12000$.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "The rate is $k=0.03$, i.e. $3\\%$ per year (continuous compounding).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $t=10$.", working: "P=12000e^{0.3}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate $e^{0.3}\\approx1.3499$.", working: "P\\approx12000\\times1.3499=16198.4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Round to nearest whole number.", working: "P\\approx16198", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set $P=20000$ and solve for $t$.", working: "20000=12000e^{0.03t}\\Rightarrow e^{0.03t}=\\frac53", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Take logs and divide.", working: "t=\\frac{\\ln(5/3)}{0.03}=\\frac{0.5108}{0.03}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "t\\approx17.03\\text{ years}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Doubling means $e^{0.03d}=2$.", working: "d=\\frac{\\ln2}{0.03}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "d=\\frac{0.6931}{0.03}\\approx23.10\\text{ years}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) initial $12000$, growth $3\\%$ per year (b) $16198$ (c) $t\\approx17.03$ years (d) $d\\approx23.10$ years",
            commonErrors: ["Using $0.03$ as a percentage directly in $e^{0.03t}$ without understanding it is the continuous rate.", "Solving $12000e^{0.03t}=20000$ by dividing incorrectly.", "Rounding $e^{0.3}$ too early."],
            examinerNote: "In (a) accept '3% per year' with the note that it is continuous growth; in (d) $23.10$ to 2 d.p.",
          },
        },
      ],
    },
  ],
};
