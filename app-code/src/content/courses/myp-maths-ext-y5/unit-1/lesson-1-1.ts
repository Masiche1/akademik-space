import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "mypme5-u1-lesson-1-1",
  code: "1-1",
  title: "Logarithms Extended",
  goal: "I CAN apply logarithm laws, solve exponential and logarithmic equations, and use logarithms to model real phenomena.",
  standards: [
    "MYP Maths: Number",
    "MYP Maths: Algebra",
    "Criterion A: Knowing and understanding",
    "Criterion C: Communicating",
  ],
  vocabulary: [
    { term: "Logarithm", definition: "$\\log_b a = x$ means $b^x=a$; the exponent needed to produce $a$ from base $b$." },
    { term: "Natural logarithm", definition: "$\\ln a = \\log_e a$ where $e\\approx2.718$; used in continuous growth models." },
    { term: "Change of base", definition: "$\\log_b a=\\frac{\\ln a}{\\ln b}=\\frac{\\log a}{\\log b}$ for any convenient base." },
    { term: "Log laws", definition: "$\\log(xy)=\\log x+\\log y$; $\\log\\frac{x}{y}=\\log x-\\log y$; $\\log x^n=n\\log x$; $\\log_b b=1$; $\\log_b 1=0$." },
    { term: "Exponential equation", definition: "Equation of form $a\\cdot b^x=c$; solved by taking logarithms of both sides." },
  ],
  concepts: [
    {
      id: "mypme5-u1-loglaws",
      title: "Logarithm laws and equations",
      skill: "Apply log laws to simplify expressions and solve exponential equations using logarithms.",
      lesson: {
        sections: [
          {
            heading: "The three laws",
            body: "Product: $\\log(xy)=\\log x+\\log y$. Quotient: $\\log\\frac{x}{y}=\\log x-\\log y$. Power: $\\log x^n=n\\log x$. These hold for any base. Also $\\log_b b=1$ and $\\log_b 1=0$.",
          },
          {
            heading: "Solving exponential equations",
            body: "For $a\\cdot b^x=c$: isolate $b^x$, then $x=\\frac{\\ln(c/a)}{\\ln b}$. For $b^x=d$ where both expressible as powers of same base, equate exponents. For mixed bases, logarithms are essential.",
          },
          {
            heading: "Compound interest and half-life",
            body: "Continuous growth: $A=Pe^{rt}$. Doubling time: $t=\\frac{\\ln2}{r}$. Half-life: $t=\\frac{\\ln2}{k}$ where decay rate $k$. These appear in finance, population, and radioactivity.",
          },
        ],
        keyFormulas: [
          { name: "Product law", statement: "$\\log(xy)=\\log x+\\log y$" },
          { name: "Power law", statement: "$\\log x^n=n\\log x$" },
          { name: "Exponential solve", statement: "$x=\\frac{\\ln(c/a)}{\\ln b}$" },
          { name: "Change of base", statement: "$\\log_b a=\\frac{\\ln a}{\\ln b}$" },
        ],
        workedExample: {
          problem: "Solve $5\\cdot3^x=200$.",
          solution: "$3^x=40$; $x=\\frac{\\ln40}{\\ln3}=\\frac{3.689}{1.099}=3.36$.",
        },
      },
      questions: [
        {
          id: "mypme5-u1-log-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Evaluate $\\log_2 32$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "6" },
              { id: "b", text: "16" },
              { id: "c", text: "10" },
              { id: "d", text: "5" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Logarithm", statement: "$\\log_2 32=5$ since $2^5=32$." },
            ],
            steps: [
              { reasoning: "$2^5=32$ → $\\log_2 32=5$.", working: "5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 5",
            commonErrors: ["Computing $32/2=16$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u1-log-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Simplify $\\log 15+\\log 4-\\log 6$ (base 10).",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\log 60$" },
              { id: "b", text: "$\\log 23$" },
              { id: "c", text: "1.778" },
              { id: "d", text: "$\\log 10=1$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Log laws", statement: "$\\log15+\\log4-\\log6=\\log\\frac{15\\times4}{6}=\\log10=1$." },
            ],
            steps: [
              { reasoning: "$\\log(\\frac{60}{6})=\\log10=1$.", working: "\\log 10=1", marks: 1, markCode: "M" },
              { reasoning: "State the value.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$",
            commonErrors: ["Adding instead of subtracting the log terms."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-log-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $4^{x}=7$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=\\frac{\\ln4}{\\ln7}\\approx0.712$" },
              { id: "b", text: "$x=\\frac{\\ln7}{\\ln4}=\\frac{\\log7}{\\log4}\\approx1.404$" },
              { id: "c", text: "$x=\\frac{7}{4}=1.75$" },
              { id: "d", text: "$x=\\log_4 7\\approx0.85$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Logarithmic solution", statement: "$x=\\log_4 7=\\frac{\\ln7}{\\ln4}=\\frac{1.946}{1.386}=1.404$." },
            ],
            steps: [
              { reasoning: "Take logs: $x\\ln4=\\ln7$ → $x=\\frac{\\ln7}{\\ln4}$.", working: "x=\\frac{\\ln7}{\\ln4}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate: $\\frac{1.9459}{1.3863}=1.4037\\approx1.404$.", working: "1.404", marks: 1, markCode: "M" },
              { reasoning: "State the solution.", working: "x\\approx1.404", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=\\frac{\\ln7}{\\ln4}\\approx1.404$",
            commonErrors: ["Inverting the fraction."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u1-log-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A population grows continuously at rate $r=0.08$ per year from 2000.",
          parts: [
            { label: "a", prompt: "Write the growth model $P(t)$.", marks: 1 },
            { label: "b", prompt: "Find the population after 10 years.", marks: 2 },
            { label: "c", prompt: "Find the doubling time.", marks: 2 },
            { label: "d", prompt: "A different model uses discrete annual growth of 8%. Compare the two models after 20 years.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Continuous growth", statement: "$P(t)=P_0e^{rt}$; doubling time $=\\frac{\\ln2}{r}$." },
            ],
            steps: [
              { part: "a", reasoning: "$P(t)=2000e^{0.08t}$.", working: "P(t)=2000e^{0.08t}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$P(10)=2000e^{0.8}=2000(2.2255)=4451$.", working: "4451", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the population.", working: "4451", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$t=\\frac{\\ln2}{0.08}=\\frac{0.6931}{0.08}=8.66$ years.", working: "8.66\\text{ years}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the doubling time.", working: "8.66\\text{ years}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Discrete: $2000(1.08)^{20}=2000(4.661)=9322$; continuous: $2000e^{1.6}=2000(4.953)=9906$.", working: "9322\\text{ vs }9906", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Continuous gives higher population because $e^{0.08}>1.08$.", working: "e^{0.08}\\approx1.0833>1.08", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State comparison.", working: "\\text{continuous slightly higher}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $P(t)=2000e^{0.08t}$ (b) 4451 (c) 8.66 years (d) continuous ≈9906 vs discrete ≈9322",
            commonErrors: ["Using $r=8$ instead of $r=0.08$ in the exponential."],
            examinerNote: "A1 for (a), M1 A1 for (b), M1 A1 for (c), M1 M1 A1 for (d).",
          },
        },
        {
          id: "mypme5-u1-log-q5",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "Evaluate $\\log_5 25$.",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "25" },
          { id: "b", text: "125" },
          { id: "c", text: "5" },
          { id: "d", text: "2" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Logarithm", statement: "$\\log_5 25=2$ since $5^2=25$." },
        ],
        steps: [
          { reasoning: "$5^2=25$ → $\\log_5 25=2$.", working: "2", marks: 1, markCode: "B" },
        ],
        finalAnswer: "**(a)** 2",
        commonErrors: ["Answering the base or the argument."],
        examinerNote: "B1 for (a).",
      },
    },
    {
      id: "mypme5-u1-log-q6",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "Solve $3^x=27$. Enter the value of $x$.",
      response: { type: "numeric", parts: [{ label: "$x$", answer: 3 }] },
      markscheme: {
        principles: [
          { kind: "definition", name: "Logarithm", statement: "$3^3=27$ so $x=3$." },
        ],
        steps: [
          { reasoning: "Write 27 as a power of 3: $27=3^3$, so $x=3$.", working: "x=3", marks: 1, markCode: "B" },
        ],
        finalAnswer: "$x=3$",
        commonErrors: ["Using $\\log_3 27$ on a calculator incorrectly."],
      },
    },
    {
      id: "mypme5-u1-log-q7",
      difficulty: "core",
      totalMarks: 2,
      stem: "Simplify $\\log 50+\\log 2-\\log 10$ (base 10).",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "2" },
          { id: "b", text: "1" },
          { id: "c", text: "$\\log 42$" },
          { id: "d", text: "0" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "formula", name: "Log laws", statement: "$\\log50+\\log2-\\log10=\\log\\frac{100}{10}=\\log10=1$." },
        ],
        steps: [
          { reasoning: "Combine: $\\log(\\frac{50\\times2}{10})=\\log10$.", working: "\\log 10", marks: 1, markCode: "M" },
          { reasoning: "Evaluate: $\\log10=1$.", working: "1", marks: 1, markCode: "A" },
        ],
        finalAnswer: "1",
        commonErrors: ["Subtracting the arguments instead of the logs."],
        examinerNote: "M1 A1.",
      },
    },
    {
      id: "mypme5-u1-log-q8",
      difficulty: "core",
      totalMarks: 2,
      stem: "Solve $5^x=18$. Give $x$ correct to 3 s.f.",
      response: { type: "numeric", parts: [{ label: "$x$", answer: 1.796, tolerance: 0.001 }] },
      markscheme: {
        principles: [
          { kind: "formula", name: "Logarithmic solution", statement: "$x=\\log_5 18=\\frac{\\ln18}{\\ln5}=\\frac{2.8904}{1.6094}=1.796$." },
        ],
        steps: [
          { reasoning: "Take logs: $x=\\frac{\\ln18}{\\ln5}$.", working: "x=\\frac{\\ln18}{\\ln5}", marks: 1, markCode: "M" },
          { reasoning: "Evaluate to 3 s.f.: $1.796$.", working: "1.796", marks: 1, markCode: "A" },
        ],
        finalAnswer: "$x\\approx1.796$",
        commonErrors: ["Inverting the fraction to get $0.557$."],
        examinerNote: "M1 A1.",
      },
    },
    {
      id: "mypme5-u1-log-q9",
      difficulty: "core",
      totalMarks: 2,
      stem: "Use the change of base formula to evaluate $\\log_3 10$ correct to 3 s.f.",
      response: { type: "numeric", parts: [{ label: "$\\log_3 10$", answer: 2.096, tolerance: 0.001 }] },
      markscheme: {
        principles: [
          { kind: "formula", name: "Change of base", statement: "$\\log_3 10=\\frac{\\ln10}{\\ln3}=\\frac{2.3026}{1.0986}=2.096$." },
        ],
        steps: [
          { reasoning: "Apply change of base: $\\frac{\\ln10}{\\ln3}$.", working: "\\frac{2.3026}{1.0986}", marks: 1, markCode: "M" },
          { reasoning: "Evaluate: $2.096$.", working: "2.096", marks: 1, markCode: "A" },
        ],
        finalAnswer: "$2.096$",
        commonErrors: ["Using $\\frac{\\ln3}{\\ln10}$ instead."],
        examinerNote: "M1 A1.",
      },
    },
    {
      id: "mypme5-u1-log-q10",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "Solve $\\log_2 x=6$ for $x$.",
      response: { type: "numeric", parts: [{ label: "$x$", answer: 64 }] },
      markscheme: {
        principles: [
          { kind: "definition", name: "Logarithm", statement: "$\\log_2 x=6$ means $2^6=x$." },
        ],
        steps: [
          { reasoning: "Convert to exponential form: $x=2^6=64$.", working: "x=64", marks: 1, markCode: "B" },
        ],
        finalAnswer: "$x=64$",
        commonErrors: ["Computing $6^2=36$ instead of $2^6$."],
      },
    },
    {
      id: "mypme5-u1-log-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "Solve $\\log_7 x+\\log_7 4=2$.",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "$x=11$" },
          { id: "b", text: "$x=45$" },
          { id: "c", text: "$x=49$" },
          { id: "d", text: "$x=12.25$" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          { kind: "formula", name: "Log laws", statement: "$\\log_7(4x)=2$ → $4x=7^2=49$ → $x=12.25$." },
        ],
        steps: [
          { reasoning: "Combine logs: $\\log_7(4x)=2$ → $4x=49$.", working: "4x=49", marks: 1, markCode: "M" },
          { reasoning: "Divide: $x=12.25$.", working: "x=12.25", marks: 1, markCode: "A" },
        ],
        finalAnswer: "$x=12.25$",
        commonErrors: ["Writing $x+4=49$ instead of $4x=49$."],
        examinerNote: "M1 A1.",
      },
    },
    {
      id: "mypme5-u1-log-q12",
      difficulty: "challenge",
      totalMarks: 3,
      stem: "Solve $\\log_2 x+\\log_2(x-2)=3$.",
      response: { type: "numeric", parts: [{ label: "$x$", answer: 4 }] },
      markscheme: {
        principles: [
          { kind: "formula", name: "Log laws", statement: "$\\log_2(x(x-2))=3$ → $x(x-2)=8$ → $x^2-2x-8=0$ → $(x-4)(x+2)=0$; reject $x=-2$ since $x>2$." },
        ],
        steps: [
          { reasoning: "Combine and exponentiate: $x(x-2)=8$.", working: "x^2-2x-8=0", marks: 1, markCode: "M" },
          { reasoning: "Factor: $(x-4)(x+2)=0$ → $x=4$ or $x=-2$.", working: "x=4\\text{ or }-2", marks: 1, markCode: "M" },
          { reasoning: "Reject $x=-2$ (log argument must be positive) and state $x=4$.", working: "x=4", marks: 1, markCode: "A" },
        ],
        finalAnswer: "$x=4$",
        commonErrors: ["Accepting $x=-2$, which makes $\\log_2(x-2)$ undefined."],
        examinerNote: "M1 M1 A1.",
      },
    },
    {
      id: "mypme5-u1-log-q13",
      difficulty: "challenge",
      totalMarks: 7,
      stem: "A radioactive sample initially has mass 800 g and decays according to $M(t)=800\\left(\\tfrac12\\right)^{t/5}$, where $t$ is in days.",
      parts: [
        { label: "a", prompt: "State the half-life of the sample.", marks: 1 },
        { label: "b", prompt: "Find the mass remaining after 12.5 days.", marks: 2 },
        { label: "c", prompt: "Find the time taken for the mass to fall to 50 g.", marks: 2 },
        { label: "d", prompt: "Rewrite the model using continuous decay $M(t)=800e^{-kt}$ and find $k$.", marks: 2 },
      ],
      response: { type: "open" },
      markscheme: {
        principles: [
          { kind: "formula", name: "Exponential decay", statement: "$M(t)=800(\\frac12)^{t/5}=800e^{-kt}$ with $k=\\frac{\\ln2}{5}$." },
        ],
        steps: [
          { part: "a", reasoning: "The mass halves every 5 days → half-life 5 days.", working: "5\\text{ days}", marks: 1, markCode: "B" },
          { part: "b", reasoning: "$M(12.5)=800(\\frac12)^{12.5/5}=800(\\frac12)^{2.5}=800(0.17678)=141.4$ g.", working: "141.4\\text{ g}", marks: 1, markCode: "M" },
          { part: "b", reasoning: "State the mass.", working: "141.4\\text{ g}", marks: 1, markCode: "A" },
          { part: "c", reasoning: "$800(\\frac12)^{t/5}=50$ → $(\\frac12)^{t/5}=\\frac1{16}$ → $\\frac{t}{5}=4$ → $t=20$ days.", working: "t=20", marks: 1, markCode: "M" },
          { part: "c", reasoning: "State the time.", working: "20\\text{ days}", marks: 1, markCode: "A" },
          { part: "d", reasoning: "Match bases: $e^{-kt}=(\\frac12)^{t/5}=e^{-\\frac{\\ln2}{5}t}$ → $k=\\frac{\\ln2}{5}=0.1386$ per day.", working: "k=0.1386", marks: 1, markCode: "M" },
          { part: "d", reasoning: "State the model and $k$.", working: "M(t)=800e^{-0.1386t}", marks: 1, markCode: "A" },
        ],
        finalAnswer: "(a) 5 days (b) 141.4 g (c) 20 days (d) $M(t)=800e^{-0.1386t}$",
        commonErrors: ["Using $t=12.5$ directly in the exponent instead of $t/5$."],
        examinerNote: "B1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
      },
    },
    {
      id: "mypme5-u1-log-q14",
      difficulty: "core",
      totalMarks: 2,
      stem: "Which expression is equivalent to $\\log_a\\frac{b^2}{c}$?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "$\\log_a(2b-c)$" },
          { id: "b", text: "$\\frac{2\\log_a b}{\\log_a c}$" },
          { id: "c", text: "$2\\log_a b-\\log_a c$" },
          { id: "d", text: "$2\\log_a b+\\log_a c$" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "formula", name: "Log laws", statement: "$\\log_a\\frac{b^2}{c}=\\log_a b^2-\\log_a c=2\\log_a b-\\log_a c$." },
        ],
        steps: [
          { reasoning: "Quotient law then power law.", working: "2\\log_a b-\\log_a c", marks: 1, markCode: "M" },
          { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
        ],
        finalAnswer: "**(a)** $2\\log_a b-\\log_a c$",
        commonErrors: ["Dividing the logs instead of subtracting."],
        examinerNote: "M1 A1.",
      },
    },
    {
      id: "mypme5-u1-log-q15",
      difficulty: "challenge",
      totalMarks: 3,
      stem: "Solve $5\\cdot2^x=3\\cdot4^x$.",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "$x=\\log_5 3\\approx0.683$" },
          { id: "b", text: "$x=\\frac53\\approx1.667$" },
          { id: "c", text: "$x=\\log_2\\frac53\\approx0.737$" },
          { id: "d", text: "$x=\\log_2\\frac32\\approx0.585$" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          { kind: "formula", name: "Substitution", statement: "Let $y=2^x$: $5y=3y^2$ → $y=\\frac53$ (reject $y=0$) → $x=\\log_2\\frac53=0.737$." },
        ],
        steps: [
          { reasoning: "Write $4^x=(2^x)^2$ and divide by $2^x$: $5=3\\cdot2^x$.", working: "2^x=\\frac53", marks: 1, markCode: "M" },
          { reasoning: "Take logs: $x=\\log_2\\frac53=\\frac{\\ln(5/3)}{\\ln2}=\\frac{0.5108}{0.6931}=0.737$.", working: "x=0.737", marks: 1, markCode: "M" },
          { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
        ],
        finalAnswer: "$x=\\log_2\\frac53\\approx0.737$",
        commonErrors: ["Dividing by $2^x$ incorrectly or keeping $4^x$ unsplit."],
        examinerNote: "M1 M1 A1.",
      },
    },
    {
      id: "mypme5-u1-log-q16",
      difficulty: "challenge",
      totalMarks: 5,
      stem: "An investment of $\\$10\\,000$ grows continuously at rate $r=0.05$ per year: $A(t)=10000e^{0.05t}$.",
      parts: [
        { label: "a", prompt: "Write down the value of $A(0)$ and explain its meaning.", marks: 1 },
        { label: "b", prompt: "Find the value after 12 years.", marks: 2 },
        { label: "c", prompt: "Find the doubling time.", marks: 1 },
        { label: "d", prompt: "Find the time for the investment to reach $\\$20\\,000$. Compare with the doubling time.", marks: 1 },
      ],
      response: { type: "open" },
      markscheme: {
        principles: [
          { kind: "formula", name: "Continuous growth", statement: "$A(t)=Pe^{rt}$; doubling time $t=\\frac{\\ln2}{r}$." },
        ],
        steps: [
          { part: "a", reasoning: "$A(0)=10000$ — the initial investment.", working: "10\\,000", marks: 1, markCode: "B" },
          { part: "b", reasoning: "$A(12)=10000e^{0.6}=10000(1.8221)=18221$.", working: "18221", marks: 1, markCode: "M" },
          { part: "b", reasoning: "State the value.", working: "18\\,221", marks: 1, markCode: "A" },
          { part: "c", reasoning: "$t=\\frac{\\ln2}{0.05}=\\frac{0.6931}{0.05}=13.86$ years.", working: "13.86\\text{ years}", marks: 1, markCode: "M" },
          { part: "d", reasoning: "$20000$ is exactly double $10000$, so the time equals the doubling time, $13.86$ years.", working: "13.86\\text{ years}", marks: 1, markCode: "R" },
        ],
        finalAnswer: "(a) $\\$10\\,000$ (b) $\\$18\\,221$ (c) 13.86 years (d) 13.86 years — same as doubling time",
        commonErrors: ["Solving $e^{0.05t}=2$ with $\\ln$ but then dividing by 0.5 instead of 0.05."],
        examinerNote: "B1 for (a), M1 A1 for (b), M1 for (c), R1 for (d).",
      },
    },
      ],
    },
    {
      id: "mypme5-u1-bounds",
      title: "Upper and Lower Bounds",
      skill: "Determine bounds for measurements, calculate error intervals, and use bounds in multi-step problems.",
      lesson: {
        sections: [
          {
            heading: "Measurement bounds",
            body: "A measurement rounded to nearest unit has bounds $\\pm0.5$. To 2 s.f.: bounds depend on place value. E.g. 3.6 s.f. → bounds 3.55 to 3.65. Always round to the stated precision.",
          },
          {
            heading: "Error intervals",
            body: "For $x$ measured with bounds $a\\le x\\le b$: upper bound of result uses upper bounds of all quantities (for increasing functions), lower uses lower bounds. For division/multiplication, determine which combination gives max/min.",
          },
          {
            heading: "Multi-step bounds",
            body: "For $A=\\pi r^2$ with $r$ bounded, $A$ increases with $r$ so use max $r$ for upper bound. For $V=\\frac{4}{3}\\pi r^3$, same logic. For speed = distance/time: max speed = max distance / min time.",
          },
        ],
        keyFormulas: [
          { name: "Bounds", statement: "$\\text{value}\\pm\\frac{\\text{unit}}{2}$" },
          { name: "Max speed", statement: "$\\frac{\\text{max distance}}{\\text{min time}}$" },
          { name: "Min speed", statement: "$\\frac{\\text{min distance}}{\\text{max time}}$" },
        ],
        workedExample: {
          problem: "A rectangle has length 12.4±0.05 cm and width 7.6±0.05 cm. Find bounds for area.",
          solution: "Max area $=12.45\\times7.65=95.24$; min $=12.35\\times7.55=93.24$.",
        },
      },
      questions: [
        {
          id: "mypme5-u1-bounds-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A length is recorded as 8.3 cm (2 s.f.). What are its bounds?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8.25 to 8.35 cm" },
              { id: "b", text: "8.0 to 8.5 cm" },
              { id: "c", text: "8.25 to 8.30 cm" },
              { id: "d", text: "8.3 to 8.4 cm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bounds", statement: "2 s.f. → nearest 0.1 → bounds $\\pm0.05$." },
            ],
            steps: [
              { reasoning: "$8.3\\pm0.05$ → 8.25 to 8.35 cm.", working: "8.25\\text{ to }8.35", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 8.25 to 8.35 cm",
            commonErrors: ["Using $\\pm0.5$ instead of $\\pm0.05$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u1-bounds-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Speed = distance/time. Distance = 150±2 km, time = 2.0±0.1 h. Find upper bound for speed.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "75 km/h" },
              { id: "b", text: "80 km/h" },
              { id: "c", text: "72.7 km/h" },
              { id: "d", text: "85.7 km/h" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Max speed", statement: "Max speed = max distance / min time = $\\frac{152}{1.9}=80$ km/h." },
            ],
            steps: [
              { reasoning: "$\\frac{150+2}{2.0-0.1}=\\frac{152}{1.9}=80$ km/h.", working: "80", marks: 1, markCode: "M" },
              { reasoning: "State the upper bound.", working: "80\\text{ km/h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "80 km/h",
            commonErrors: ["Using max distance / max time instead of min time."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-bounds-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A cube has side $s=5.0\\pm0.1$ cm. Find bounds for its volume.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "110 to 140 cm³" },
              { id: "b", text: "120 to 130 cm³" },
              { id: "c", text: "117.649 to 132.651 cm³" },
              { id: "d", text: "125 cm³ exactly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Volume bounds", statement: "Max volume = $(5.1)^3=132.651$; min = $(4.9)^3=117.649$." },
            ],
            steps: [
              { reasoning: "Min: $4.9^3=117.649$; max: $5.1^3=132.651$.", working: "117.649\\text{ to }132.651", marks: 1, markCode: "M" },
              { reasoning: "Verify: $4.9^3=4.9\\times4.9\\times4.9=117.649$ ✓; $5.1^3=132.651$ ✓.", working: "4.9^3=117.649", marks: 1, markCode: "M" },
              { reasoning: "State the bounds.", working: "117.649\\text{ to }132.651\\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "117.649 to 132.651 cm³",
            commonErrors: ["Applying $\\pm0.1$ to the volume instead of the side."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u1-bounds-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A cylindrical tank has radius $r=2.0\\pm0.05$ m and height $h=5.0\\pm0.1$ m.",
          parts: [
            { label: "a", prompt: "Find bounds for the volume.", marks: 3 },
            { label: "b", prompt: "Find bounds for the curved surface area.", marks: 2 },
            { label: "c", prompt: "The tank is filled at 0.5 m³/min. Find bounds for time to fill completely.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Multi-step bounds", statement: "Apply bounds to each formula carefully." },
            ],
            steps: [
              { part: "a", reasoning: "$V=\\pi r^2 h$; min $=\\pi(1.95)^2(4.9)=\\pi(3.8025)(4.9)=58.53$ m³; max $=\\pi(2.05)^2(5.1)=\\pi(4.2025)(5.1)=67.34$ m³.", working: "58.53\\text{ to }67.34", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Compute min and max.", working: "58.53,67.34", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State the bounds.", working: "58.53\\text{ to }67.34\\text{ m}^3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Curved SA $=2\\pi rh$; min $=2\\pi(1.95)(4.9)=60.02$; max $=2\\pi(2.05)(5.1)=65.69$ m².", working: "60.02\\text{ to }65.69", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the bounds.", working: "60.02\\text{ to }65.69\\text{ m}^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Time = volume/rate; min time = min volume / rate = $58.53/0.5=117.1$ min; max = $67.34/0.5=134.7$ min.", working: "117.1\\text{ to }134.7", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Use min volume for min time (faster fill).", working: "58.53/0.5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the bounds.", working: "117.1\\text{ to }134.7\\text{ min}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 58.53 to 67.34 m³ (b) 60.02 to 65.69 m² (c) 117.1 to 134.7 min",
            commonErrors: ["Using max volume for min time — faster fill uses smaller volume."],
            examinerNote: "M1 M1 A1 for (a), M1 A1 for (b), M1 M1 A1 for (c).",
          },
        },
        {
          id: "mypme5-u1-bounds-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A length is recorded as 7.6 cm (2 d.p.). What are its bounds?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7.0 to 8.0 cm" },
              { id: "b", text: "7.5 to 7.7 cm" },
              { id: "c", text: "7.55 to 7.60 cm" },
              { id: "d", text: "7.55 to 7.65 cm" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bounds", statement: "2 d.p. → nearest 0.01 → bounds $\\pm0.05$." },
            ],
            steps: [
              { reasoning: "$7.6\\pm0.05$ → 7.55 to 7.65 cm.", working: "7.55\\text{ to }7.65", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 7.55 to 7.65 cm",
            commonErrors: ["Using $\\pm0.5$ instead of $\\pm0.05$."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mypme5-u1-bounds-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A time is recorded as 3.2 s (2 s.f.). Give the upper bound.",
          response: { type: "numeric", parts: [{ label: "Upper bound (s)", answer: 3.25 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bounds", statement: "2 s.f. → nearest 0.1 → upper bound $=3.2+0.05=3.25$." },
            ],
            steps: [
              { reasoning: "Upper bound $=3.2+0.05=3.25$ s.", working: "3.25", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3.25 s",
            commonErrors: ["Giving 3.3 instead of 3.25."],
          },
        },
        {
          id: "mypme5-u1-bounds-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A rectangle has length $10.0\\pm0.05$ cm and width $5.0\\pm0.05$ cm. Find bounds for its area.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "49.2525 to 50.7525 cm²" },
              { id: "b", text: "50 cm² exactly" },
              { id: "c", text: "49.5 to 50.5 cm²" },
              { id: "d", text: "49.75 to 50.25 cm²" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Area bounds", statement: "Min area $=9.95\\times4.95=49.2525$; max $=10.05\\times5.05=50.7525$." },
            ],
            steps: [
              { reasoning: "Min: $9.95\\times4.95=49.2525$; max: $10.05\\times5.05=50.7525$.", working: "49.2525\\text{ to }50.7525", marks: 1, markCode: "M" },
              { reasoning: "State the bounds.", working: "49.2525\\text{ to }50.7525\\text{ cm}^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "49.2525 to 50.7525 cm²",
            commonErrors: ["Applying $\\pm0.05$ to the area instead of each side."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-bounds-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Speed = distance/time. Distance = $80\\pm1$ km, time = $1.5\\pm0.1$ h. Find the lower bound for speed.",
          response: { type: "numeric", parts: [{ label: "Lower bound (km/h)", answer: 49.375, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Min speed", statement: "Min speed = min distance / max time = $\\frac{79}{1.6}=49.375$ km/h." },
            ],
            steps: [
              { reasoning: "$\\frac{80-1}{1.5+0.1}=\\frac{79}{1.6}=49.375$ km/h.", working: "49.375", marks: 1, markCode: "M" },
              { reasoning: "State the lower bound.", working: "49.375\\text{ km/h}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "49.375 km/h",
            commonErrors: ["Using max time for the numerator incorrectly — min distance goes with max time."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-bounds-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Density = mass/volume. Which combination gives the upper bound for density?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "max mass and max volume" },
              { id: "b", text: "min mass and max volume" },
              { id: "c", text: "max mass and min volume" },
              { id: "d", text: "min mass and min volume" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Bounds in division", statement: "Largest quotient = largest numerator / smallest denominator." },
            ],
            steps: [
              { reasoning: "Density increases with mass and decreases with volume, so max density uses max mass and min volume.", working: "\\max m\\,/\\,\\min V", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** max mass and min volume",
            commonErrors: ["Choosing max volume, which minimises density."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-bounds-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A measurement is recorded as 12.7 (1 d.p.). Give the lower bound.",
          response: { type: "numeric", parts: [{ label: "Lower bound", answer: 12.65 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bounds", statement: "1 d.p. → nearest 0.1 → lower bound $=12.7-0.05=12.65$." },
            ],
            steps: [
              { reasoning: "Lower bound $=12.7-0.05=12.65$.", working: "12.65", marks: 1, markCode: "B" },
            ],
            finalAnswer: "12.65",
            commonErrors: ["Giving 12.6 instead of 12.65."],
          },
        },
        {
          id: "mypme5-u1-bounds-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two lengths are $a=20\\pm0.5$ cm and $b=15\\pm0.5$ cm. Find the upper bound of $a-b$.",
          response: { type: "numeric", parts: [{ label: "Upper bound (cm)", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Subtraction bounds", statement: "Max difference = max $a$ − min $b$ = $20.5-14.5=6$." },
            ],
            steps: [
              { reasoning: "Max $a-b$ uses largest $a$ and smallest $b$.", working: "20.5-14.5", marks: 1, markCode: "M" },
              { reasoning: "Compute: $20.5-14.5=6$ cm.", working: "6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 cm",
            commonErrors: ["Adding the bounds instead of subtracting them."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-bounds-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A cylinder has radius $r=3.0\\pm0.1$ cm and height $h=10.0\\pm0.2$ cm. Find the upper bound for its volume.",
          response: { type: "numeric", parts: [{ label: "Upper bound (cm³)", answer: 307.9, tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cylinder volume bounds", statement: "Max $V=\\pi(3.1)^2(10.2)=\\pi(98.022)\\approx307.9$ cm³." },
            ],
            steps: [
              { reasoning: "Use max $r$ and max $h$: $V=\\pi(3.1)^2(10.2)$.", working: "\\pi(3.1)^2(10.2)", marks: 1, markCode: "M" },
              { reasoning: "Compute: $3.1^2=9.61$; $9.61\\times10.2=98.022$; $\\times\\pi=307.88$.", working: "307.88", marks: 1, markCode: "M" },
              { reasoning: "State the upper bound to 1 d.p.", working: "307.9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "307.9 cm³",
            commonErrors: ["Using $h=10.0+0.1$ instead of $+0.2$."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u1-bounds-q13",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A solid sphere has radius $r=6.0\\pm0.1$ cm.",
          parts: [
            { label: "a", prompt: "Find the bounds for $r$.", marks: 1 },
            { label: "b", prompt: "Find bounds for the volume $V=\\frac43\\pi r^3$.", marks: 2 },
            { label: "c", prompt: "Find bounds for the surface area $S=4\\pi r^2$.", marks: 2 },
            { label: "d", prompt: "The sphere is painted at $\\$2$ per cm². Find bounds for the cost of painting one sphere.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sphere bounds", statement: "$V$ and $S$ increase with $r$, so use $r=5.9$ for min and $r=6.1$ for max." },
            ],
            steps: [
              { part: "a", reasoning: "$r=6.0\\pm0.1$ → 5.9 to 6.1 cm.", working: "5.9\\text{ to }6.1", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Min $V=\\frac43\\pi(5.9)^3=\\frac43\\pi(205.379)=859.0$; max $=\\frac43\\pi(6.1)^3=\\frac43\\pi(226.981)=949.3$ cm³.", working: "859.0\\text{ to }949.3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the bounds.", working: "859.0\\text{ to }949.3\\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Min $S=4\\pi(5.9)^2=4\\pi(34.81)=437.7$; max $=4\\pi(6.1)^2=4\\pi(37.21)=467.6$ m².", working: "437.7\\text{ to }467.6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the bounds.", working: "437.7\\text{ to }467.6\\text{ cm}^2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Cost $=2\\times$ surface area: min $=2(437.7)=875.4$; max $=2(467.6)=935.2$.", working: "875.4\\text{ to }935.2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State the bounds.", working: "875.4\\text{ to }935.2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 5.9–6.1 cm (b) 859.0–949.3 cm³ (c) 437.7–467.6 cm² (d) $\\$875.4–$\\$935.2",
            commonErrors: ["Applying $\\pm0.1$ to $r^3$ or $r^2$ instead of cubing/squaring the bounds."],
            examinerNote: "B1 for (a), M1 A1 for (b), M1 A1 for (c), M1 A1 for (d).",
          },
        },
        {
          id: "mypme5-u1-bounds-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "An athlete runs 5 laps in $100\\pm2$ s. What are the bounds for the time per lap?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "19.6 s to 20.4 s" },
              { id: "b", text: "19 s to 21 s" },
              { id: "c", text: "18 s to 22 s" },
              { id: "d", text: "20 s exactly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Division bounds", statement: "Per-lap time $=\\frac{\\text{total}}{5}$: min $=\\frac{98}{5}=19.6$, max $=\\frac{102}{5}=20.4$." },
            ],
            steps: [
              { reasoning: "Min per lap $=98/5=19.6$; max $=102/5=20.4$ s.", working: "19.6\\text{ to }20.4", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 19.6 s to 20.4 s",
            commonErrors: ["Dividing only one bound by 5."],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "mypme5-u1-bounds-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A block has mass $500\\pm5$ g and volume $100\\pm2$ cm³. Find bounds for its density.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5.0 g/cm³ exactly" },
              { id: "b", text: "4.85 to 5.15 g/cm³" },
              { id: "c", text: "4.90 to 5.10 g/cm³" },
              { id: "d", text: "4.75 to 5.25 g/cm³" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Density bounds", statement: "Min density $=\\frac{495}{102}=4.853$; max $=\\frac{505}{98}=5.153$ g/cm³." },
            ],
            steps: [
              { reasoning: "Min uses min mass / max volume: $495/102=4.853$; max uses $505/98=5.153$.", working: "4.853\\text{ to }5.153", marks: 1, markCode: "M" },
              { reasoning: "Round to 2 d.p.: 4.85 to 5.15.", working: "4.85\\text{ to }5.15", marks: 1, markCode: "M" },
              { reasoning: "Match option (a).", working: "a", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 4.85 to 5.15 g/cm³",
            commonErrors: ["Pairing max mass with max volume."],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "mypme5-u1-bounds-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A ball bearing has diameter $10.0\\pm0.1$ mm.",
          parts: [
            { label: "a", prompt: "Find the bounds for the radius.", marks: 1 },
            { label: "b", prompt: "Find bounds for the volume of one bearing, $V=\\frac43\\pi r^3$ (mm³).", marks: 2 },
            { label: "c", prompt: "Find bounds for the surface area $S=4\\pi r^2$ (mm²).", marks: 2 },
            { label: "d", prompt: "Find the upper bound for the total volume of 1000 bearings, in cm³.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Sphere bounds", statement: "Radius bounds 4.95–5.05 mm; $V$ and $S$ increase with $r$." },
            ],
            steps: [
              { part: "a", reasoning: "$r=5.0\\pm0.05$ → 4.95 to 5.05 mm.", working: "4.95\\text{ to }5.05", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Min $V=\\frac43\\pi(4.95)^3=\\frac43\\pi(121.287)=508.4$; max $=\\frac43\\pi(5.05)^3=\\frac43\\pi(128.788)=539.5$ mm³.", working: "508.4\\text{ to }539.5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "State the bounds.", working: "508.4\\text{ to }539.5\\text{ mm}^3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Min $S=4\\pi(4.95)^2=4\\pi(24.5025)=307.9$; max $=4\\pi(5.05)^2=4\\pi(25.5025)=320.5$ mm².", working: "307.9\\text{ to }320.5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the bounds.", working: "307.9\\text{ to }320.5\\text{ mm}^2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Max total $=1000\\times539.5=539500$ mm³ $=539.5$ cm³.", working: "539.5\\text{ cm}^3", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) 4.95–5.05 mm (b) 508.4–539.5 mm³ (c) 307.9–320.5 mm² (d) 539.5 cm³",
            commonErrors: ["Using diameter bounds directly as radius bounds."],
            examinerNote: "B1 for (a), M1 A1 for (b), M1 A1 for (c), M1 for (d).",
          },
        },
      ],
    },

  ],
};
