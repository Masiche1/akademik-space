import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "pc-u2-lesson-2-1",
  code: "2-1",
  title: "Exponential and Logarithmic Functions",
  goal: "I CAN model exponential growth and decay, apply logarithm properties, and solve exponential and logarithmic equations while checking for extraneous solutions.",
  standards: ["HSF-LE.A.4", "HSF-BF.B.5"],
  vocabulary: [
    { term: "Exponential function", definition: "A function of the form $f(x)=ab^x$, where $a$ is the initial value, $b>0$, and $b\\ne1$ is the constant multiplicative factor for each unit increase in $x$." },
    { term: "Growth factor", definition: "The multiplier $1+r$ in an exponential growth model with rate $r$ per time period." },
    { term: "Decay factor", definition: "The multiplier $1-r$ in an exponential decay model with rate $r$ per time period, where $0<r<1$." },
    { term: "Logarithm", definition: "The exponent required to produce a given positive number: $\\log_b(x)=y$ means $b^y=x$, with $b>0$, $b\\ne1$, and $x>0$." },
    { term: "Common logarithm", definition: "A logarithm with base $10$, written $\\log(x)$; when the base is omitted, it is understood to be $10$." },
    { term: "Natural logarithm", definition: "A logarithm with base $e$, written $\\ln(x)$, where $e\\approx2.71828$." },
  ],
  concepts: [
    {
      id: "pc-u2-exponential-models",
      title: "Exponential growth, decay, and interest",
      skill: "Choose and evaluate exponential models for repeated percent change and interest over time.",
      lesson: {
        sections: [
          {
            heading: "Recognizing growth and decay",
            body: "An exponential model changes by a constant **factor**, not a constant amount, over equal time intervals. In $A(t)=A_0b^t$, $A_0$ is the starting amount and $b$ is the multiplier per interval. If a quantity grows by $r$ each interval, use $b=1+r$; if it decays by $r$, use $b=1-r$. Write a percent as a decimal before substituting. For example, a $6\\%$ decrease uses the factor $0.94$, not $0.06$.",
          },
          {
            heading: "Compound and continuous interest",
            body: "For principal $P$, annual rate $r$ as a decimal, compounded $n$ times per year for $t$ years, use $A=P\\left(1+\\frac{r}{n}\\right)^{nt}$. More frequent compounding means a smaller period rate and a larger number of periods. For interest compounded continuously, use $A=Pe^{rt}$. Keep full precision in intermediate calculations, then round the final amount as requested. These models also illustrate the inverse relationship between exponentials and logarithms: a logarithm can solve for an unknown time or exponent.",
          },
        ],
        keyFormulas: [
          { name: "Exponential growth or decay", statement: "$A(t)=A_0(1+r)^t$ for growth and $A(t)=A_0(1-r)^t$ for decay" },
          { name: "Periodic compound interest", statement: "$A=P\\left(1+\\frac{r}{n}\\right)^{nt}$" },
          { name: "Continuous compound interest", statement: "$A=Pe^{rt}$" },
        ],
        workedExample: {
          problem: "A $\\$1{,}200$ deposit earns $4\\%$ annual interest compounded semiannually. Find the balance after $3$ years, to the nearest cent.",
          solution: "Here $P=1200$, $r=0.04$, $n=2$, and $t=3$. Substitute into the compound-interest model: $A=1200\\left(1+\\frac{0.04}{2}\\right)^{2(3)}=1200(1.02)^6\\approx1351.3929$. The balance is **$\\$1{,}351.39$**.",
        },
      },
      questions: [
        {
          id: "pc-u2-exp-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A town's population is $18{,}000$ and increases by $3\\%$ each year. Which model gives its population $t$ years from now?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$P(t)=18{,}000(0.97)^t$" },
              { id: "b", text: "$P(t)=18{,}000(0.03)^t$" },
              { id: "c", text: "$P(t)=18{,}000+0.03t$" },
              { id: "d", text: "$P(t)=18{,}000(1.03)^t$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Exponential growth model", statement: "For an initial amount $A_0$ growing by rate $r$ per time interval, $A(t)=A_0(1+r)^t$." },
              { kind: "property", name: "Percent as a decimal", statement: "$3\\%=0.03$, so the growth factor is $1+0.03=1.03$." },
            ],
            steps: [
              { reasoning: "Identify the initial population and convert the percent increase to a multiplicative growth factor.", working: "A_0=18{,}000,\\qquad b=1+0.03=1.03", marks: 1, markCode: "M" },
              { reasoning: "Use the initial amount times the growth factor raised to the number of years.", working: "P(t)=18{,}000(1.03)^t", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $P(t)=18{,}000(1.03)^t$",
            commonErrors: ["Using $0.03$ itself as the multiplier instead of $1.03$.", "Treating a percent increase as a constant additive amount."],
          },
        },
        {
          id: "pc-u2-exp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $\\$2{,}500$ investment earns $5\\%$ annual interest compounded quarterly. Find its value after $4$ years, to the nearest cent. Enter the dollar amount without a currency symbol.",
          response: { type: "numeric", parts: [{ label: "Investment value", answer: 3049.72, tolerance: 0.01, unit: "dollars" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound-interest formula", statement: "$A=P\\left(1+\\frac{r}{n}\\right)^{nt}$, where $r$ is the annual rate as a decimal, $n$ is compounds per year, and $t$ is years." },
              { kind: "principle", name: "Rounding", statement: "Keep unrounded values during calculation and round the final amount to the nearest cent." },
            ],
            steps: [
              { reasoning: "Identify the model parameters, including the quarterly rate and total number of periods.", working: "P=2500,\\quad r=0.05,\\quad n=4,\\quad t=4,\\quad nt=16", marks: 1, markCode: "M" },
              { reasoning: "Substitute all parameters into the periodic compound-interest formula.", working: "A=2500\\left(1+\\frac{0.05}{4}\\right)^{16}=2500(1.0125)^{16}\\approx3049.72", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and round to the nearest cent.", working: "A\\approx3049.72", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3{,}049.72$ dollars",
            commonErrors: ["Using $4$ rather than $16$ as the exponent.", "Using $0.05$ as the quarterly rate instead of $0.05/4$."],
          },
        },
        {
          id: "pc-u2-exp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A laboratory sample begins with $500$ bacteria and grows according to $N(t)=500e^{0.12t}$, where $t$ is measured in hours. After how many hours will the sample reach $900$ bacteria? Give your answer to the nearest hundredth of an hour.",
          response: { type: "numeric", parts: [{ label: "Time", answer: 4.90, tolerance: 0.01, unit: "hours" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Continuous exponential model", statement: "$N(t)=N_0e^{kt}$." },
              { kind: "law", name: "Inverse property of natural logarithms", statement: "$\\ln(e^x)=x$ for every real $x$." },
              { kind: "property", name: "Logarithm domain", statement: "$\\ln(x)$ is defined for $x>0$." },
            ],
            steps: [
              { reasoning: "Set the model equal to the target population and isolate the exponential factor.", working: "900=500e^{0.12t}\\implies1.8=e^{0.12t}", marks: 1, markCode: "M" },
              { reasoning: "Take the natural logarithm of each positive side to bring down the exponent.", working: "\\ln(1.8)=0.12t", marks: 1, markCode: "M" },
              { reasoning: "Solve for time using the logarithmic quotient.", working: "t=\\frac{\\ln(1.8)}{0.12}\\approx4.8986", marks: 1, markCode: "A" },
              { reasoning: "Round to the requested precision and state the nonnegative time in context.", working: "t\\approx4.90", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The sample reaches $900$ bacteria after approximately **$4.90$ hours**.",
            commonErrors: ["Using common logarithm but not applying it consistently to both sides.", "Dividing by $0.12$ before taking the logarithm, or reporting an unrounded value contrary to the prompt."],
          },
        },
        {
          id: "pc-u2-exp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A client invests $\\$8{,}000$ at an annual rate of $6\\%$. Compare two accounts: Account A compounds interest monthly, and Account B compounds continuously. Round money to the nearest cent.",
          parts: [
            { label: "a", prompt: "Write the value of Account A after $t$ years and find its value after $5$ years. (2 marks)", marks: 2 },
            { label: "b", prompt: "Find the value of Account B after $5$ years. (2 marks)", marks: 2 },
            { label: "c", prompt: "Find how much more Account B is worth after $5$ years, and explain why continuous compounding gives the larger value. (2 marks)", marks: 2 },
            { label: "d", prompt: "Find the number of whole months after which Account A first exceeds $\\$16{,}000$. (3 marks)", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Compound interest", statement: "$A=P\\left(1+\\frac{r}{n}\\right)^{nt}$." },
              { kind: "formula", name: "Continuous compounding", statement: "$A=Pe^{rt}$." },
              { kind: "law", name: "Power law of logarithms", statement: "$\\log_b(M^p)=p\\log_b M$, so $b^n=c\\implies n=\\frac{\\ln c}{\\ln b}$." },
            ],
            steps: [
              { part: "a", reasoning: "Monthly rate is $0.06/12=0.005$ with $12t$ periods.", working: "A(t)=8000(1.005)^{12t}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Substitute $t=5$, so 60 periods.", working: "8000(1.005)^{60}\\approx8000(1.348850)\\approx10790.80", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use $A=Pe^{rt}$ with $r=0.06$, $t=5$.", working: "8000e^{0.06\\cdot5}=8000e^{0.3}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate and round.", working: "8000(1.349859)\\approx10798.87", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Subtract the two balances.", working: "10798.87-10790.80=8.07", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Continuous compounding is the limit of ever more frequent compounding, so interest earns interest at every instant; the factor $e^{0.06}$ exceeds $(1.005)^{12}$.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Set up the equation and isolate the power.", working: "8000(1.005)^n=16000\\implies(1.005)^n=2", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Take logarithms of both sides.", working: "n=\\frac{\\ln2}{\\ln1.005}\\approx\\frac{0.693147}{0.004988}\\approx138.98", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Interest is credited monthly, so after 138 months the balance is still below the target ($138.98>138$); the first whole month at which it exceeds $\\$16{,}000$ is 139.", working: "n=139\\text{ months (about 11.6 years)}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $A(t)=8000(1.005)^{12t}$; $\\$10{,}790.80$. (b) $\\$10{,}798.87$. (c) Account B is worth $\\$8.07$ more. (d) 139 months.",
            commonErrors: ["Using $0.06$ per month instead of $0.005$.", "Rounding $138.98$ down to 138 months, when the balance at 138 months is still below $\\$16{,}000$.", "Using the exponent $5$ rather than $60$ for monthly compounding."],
            examinerNote: "Allow answers within $\\$0.02$ for rounding differences in parts (a) and (b).",
          },
        },
      ],
    },
    {
      id: "pc-u2-logarithm-laws-equations",
      title: "Logarithm laws and equations",
      skill: "Apply logarithm properties and change of base to rewrite and solve equations, then verify domain restrictions.",
      lesson: {
        sections: [
          {
            heading: "Logarithms as inverse functions",
            body: "The statement $\\log_b(x)=y$ is equivalent to $b^y=x$. The base must satisfy $b>0$ and $b\\ne1$, and the argument must be positive: $x>0$. This domain restriction is essential when solving equations. Exponential equations with the same base can be solved by equating exponents; otherwise, take logarithms of both sides. The change-of-base formula lets a calculator evaluate a logarithm in any valid base.",
          },
          {
            heading: "Laws and checking solutions",
            body: "For positive $M$ and $N$, $\\log_b(MN)=\\log_b M+\\log_b N$, $\\log_b(M/N)=\\log_b M-\\log_b N$, and $\\log_b(M^p)=p\\log_b M$. These laws combine or expand expressions; they do not allow a logarithm of a sum to split. When solving a logarithmic equation, first record conditions that make every argument positive. Solve the resulting equation, then substitute candidates into the original equation. Any candidate that violates an original argument restriction is extraneous and must be rejected.",
          },
        ],
        keyFormulas: [
          { name: "Product, quotient, and power laws", statement: "$\\log_b(MN)=\\log_b M+\\log_b N$, $\\log_b(M/N)=\\log_b M-\\log_b N$, $\\log_b(M^p)=p\\log_b M$ for $M,N>0$" },
          { name: "Change of base", statement: "$\\log_b(x)=\\frac{\\ln x}{\\ln b}=\\frac{\\log x}{\\log b}$" },
          { name: "Logarithm-exponential equivalence", statement: "$\\log_b(x)=y\\iff b^y=x$" },
        ],
        workedExample: {
          problem: "Solve $\\log_2(x-1)+\\log_2(x-3)=3$ and check for extraneous solutions.",
          solution: "The original logarithms require $x-1>0$ and $x-3>0$, so $x>3$. Combine the logarithms using the product law: $\\log_2((x-1)(x-3))=3$. Convert to exponential form: $(x-1)(x-3)=2^3=8$. Expanding gives $x^2-4x-5=0$, so $(x-5)(x+1)=0$ and the candidates are $x=5,-1$. Only $x=5$ satisfies $x>3$; $x=-1$ is extraneous. The solution is **$x=5$**.",
        },
      },
      questions: [
        {
          id: "pc-u2-log-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which expression is equivalent to $\\log_3(27x^2)$ for $x>0$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$27+2\\log_3 x$" },
              { id: "b", text: "$3\\log_3 x$" },
              { id: "c", text: "$3+\\log_3(2x)$" },
              { id: "d", text: "$3+2\\log_3 x$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Product law", statement: "$\\log_b(MN)=\\log_b M+\\log_b N$ for positive $M,N$." },
              { kind: "law", name: "Power law", statement: "$\\log_b(M^p)=p\\log_b M$ for $M>0$." },
              { kind: "definition", name: "Logarithm", statement: "$\\log_3(27)=3$ because $3^3=27$." },
            ],
            steps: [
              { reasoning: "Separate the product and apply the power law to $x^2$.", working: "\\log_3(27x^2)=\\log_3 27+\\log_3(x^2)=3+2\\log_3x", marks: 1, markCode: "M" },
              { reasoning: "Match the simplified expression to the choices; the coefficient $27$ does not remain inside the logarithm as an additive term.", working: "3+2\\log_3x", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $3+2\\log_3x$",
            commonErrors: ["Writing $\\log_3(27)=27$ instead of $3$.", "Applying the power law as multiplication by $x$ rather than multiplying the logarithm by $2$."],
          },
        },
        {
          id: "pc-u2-log-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $5^{2x-1}=17$. Give $x$ to the nearest thousandth.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 1.380, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Taking logarithms of equal positive quantities", statement: "If $a^u=c$ with $a>0$, $a\\ne1$, and $c>0$, then $u\\ln a=\\ln c$." },
              { kind: "formula", name: "Change of base", statement: "$\\log_a c=\\frac{\\ln c}{\\ln a}$." },
            ],
            steps: [
              { reasoning: "Take natural logarithms of both positive sides.", working: "(2x-1)\\ln5=\\ln17", marks: 1, markCode: "M" },
              { reasoning: "Isolate $x$ by dividing by $\\ln5$ and then solving the linear equation.", working: "2x-1=\\frac{\\ln17}{\\ln5}\\implies x=\\frac{1+\\frac{\\ln17}{\\ln5}}{2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and round to the nearest thousandth.", working: "x\\approx1.380", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x\\approx1.380$",
            commonErrors: ["Taking a logarithm of only one side.", "Forgetting to divide the logarithmic quotient by $2$ after isolating $2x-1$."],
          },
        },
        {
          id: "pc-u2-log-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $\\log_2(x-1)+\\log_2(x-3)=3$. Show the domain restriction and explain whether any algebraic candidates are extraneous.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Product law", statement: "$\\log_b M+\\log_b N=\\log_b(MN)$ for $M,N>0$." },
              { kind: "definition", name: "Logarithm domain", statement: "Every logarithm argument must be strictly positive." },
              { kind: "definition", name: "Logarithm-exponential equivalence", statement: "$\\log_b y=c$ if and only if $y=b^c$." },
            ],
            steps: [
              { reasoning: "Establish the domain from both original logarithm arguments.", working: "x-1>0,\\quad x-3>0\\implies x>3", marks: 1, markCode: "R" },
              { reasoning: "Combine the logarithms using the product law and rewrite in exponential form.", working: "\\log_2((x-1)(x-3))=3\\implies(x-1)(x-3)=8", marks: 1, markCode: "M" },
              { reasoning: "Solve the quadratic equation for all algebraic candidates.", working: "x^2-4x+3=8\\implies x^2-4x-5=0\\implies(x-5)(x+1)=0\\implies x=5\\text{ or }x=-1", marks: 1, markCode: "A" },
              { reasoning: "Check each candidate against the original domain; $-1$ makes both arguments negative and is extraneous, while $5$ is valid.", working: "x>3\\implies x=5\\text{ only}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The domain is $x>3$. The only solution is $x=5$; $x=-1$ is extraneous.",
            commonErrors: ["Combining the logarithms as a sum inside a single logarithm.", "Keeping $x=-1$ without checking the original logarithm domains."],
            examinerNote: "Full credit requires the original domain restriction and explicit rejection of the extraneous candidate, not just the valid root.",
          },
        },
        {
          id: "pc-u2-log-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "The sound level $L$, in decibels (dB), of a sound of intensity $I$ watts per square meter is $L=10\\log\\left(\\frac{I}{10^{-12}}\\right)$, where $\\log$ is base 10.",
          parts: [
            { label: "a", prompt: "Find the sound level of a sound of intensity $10^{-5}$ W/m$^2$. (1 mark)", marks: 1 },
            { label: "b", prompt: "A concert is measured at $95$ dB. Find its intensity in W/m$^2$, giving the exact power of $10$ and a decimal to three significant figures. (2 marks)", marks: 2 },
            { label: "c", prompt: "Prove that doubling the intensity of any sound increases its level by the same number of decibels, and find that increase to two decimal places. (3 marks)", marks: 3 },
            { label: "d", prompt: "Two speakers each produce $70$ dB at a listener. Their intensities add. Find the combined level to two decimal places and explain why it is not $140$ dB. (3 marks)", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Logarithm definition", statement: "$\\log y=c$ if and only if $y=10^c$." },
              { kind: "law", name: "Quotient law", statement: "$\\log M-\\log N=\\log\\frac{M}{N}$ for $M,N>0$." },
              { kind: "law", name: "Product law", statement: "$\\log(MN)=\\log M+\\log N$ for $M,N>0$." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute and simplify the quotient of powers of ten.", working: "L=10\\log(10^{-5}/10^{-12})=10\\log(10^{7})=70\\text{ dB}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide by 10 and rewrite in exponential form.", working: "9.5=\\log\\frac{I}{10^{-12}}\\implies\\frac{I}{10^{-12}}=10^{9.5}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Solve for $I$ and evaluate.", working: "I=10^{-2.5}\\approx3.16\\times10^{-3}\\text{ W/m}^2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Write the new level and subtract the old level.", working: "L_2-L_1=10\\log\\frac{2I}{10^{-12}}-10\\log\\frac{I}{10^{-12}}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Quotient law: the intensity ratio $I/10^{-12}$ cancels, so the change is independent of $I$.", working: "=10\\log\\frac{2I}{I}=10\\log2", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Evaluate.", working: "10\\log2\\approx3.01\\text{ dB}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Each 70 dB sound has intensity $10^{-5}$; add the intensities.", working: "I=2\\times10^{-5}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Compute the combined level.", working: "L=10\\log(2\\times10^{7})=10(7+0.30103)\\approx73.01\\text{ dB}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Decibels are logarithmic: it is the intensities that add, and doubling intensity adds only about $3$ dB.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $70$ dB. (b) $I=10^{-2.5}\\approx3.16\\times10^{-3}$ W/m$^2$. (c) Increase $=10\\log2\\approx3.01$ dB for any $I$. (d) About $73.01$ dB, since intensities, not decibel levels, add.",
            commonErrors: ["Adding decibel levels directly to get 140 dB.", "Forgetting the factor 10 when converting $L$ to $\\log(I/10^{-12})$.", "Writing $\\log(2I)-\\log(I)=\\log I$."],
          },
        },
      ],
    },
  ],
};
