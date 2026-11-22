import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "alg2-u6-6-1",
  code: "6-1",
  title: "Exponential Functions and Models",
  goal: "I CAN analyze exponential graphs and use exponential models for growth and compound interest.",
  standards: ["HSF-IF.C.7e", "HSF-BF.B.3", "HSF-IF.C.8b", "HSA-SSE.B.3c"],
  vocabulary: [
    { term: "Exponential function", definition: "A function of the form $f(x)=ab^x$, where $a\\ne0$, $b>0$, and $b\\ne1$." },
    { term: "Asymptote", definition: "A line that a graph approaches arbitrarily closely; an exponential graph has a horizontal asymptote." },
    { term: "Growth factor", definition: "The multiplicative factor applied for each unit increase in the input; for $ab^x$, it is $b$." },
    { term: "Continuous growth", definition: "Growth modeled by $A=Pe^{rt}$, with rate $r$ per unit time and continuous compounding." },
    { term: "Nominal annual rate", definition: "The stated yearly interest rate before accounting for how often interest is compounded." },
    { term: "Effective annual rate", definition: "The actual proportional increase in a balance over one year after compounding." },
  ],
  concepts: [
    {
      id: "alg2-u6-exponential-graphs",
      title: "Exponential graphs and transformations",
      skill: "Describe and sketch exponential functions using transformations, asymptotes, domain, and range.",
      lesson: {
        sections: [
          {
            heading: "The parent graph",
            body: "For $f(x)=b^x$ with $b>1$, the graph increases, passes through $(0,1)$, and approaches (but never reaches) the horizontal asymptote $y=0$ as $x$ decreases. For $0<b<1$, it decreases and still approaches $y=0$ to the right. Both have domain $(-\\infty,\\infty)$ and range $(0,\\infty)$.",
          },
          {
            heading: "Transformations move the asymptote",
            body: "In $g(x)=a b^{x-h}+k$, $h$ shifts the graph horizontally and $k$ shifts it vertically; $a$ stretches or reflects it across the horizontal line $y=k$. The horizontal asymptote is $y=k$. If $a>0$, the range is $(k,\\infty)$; if $a<0$, it is $(-\\infty,k)$. A negative $a$ also reverses the graph's vertical orientation.",
          },
          {
            heading: "Sketch with anchor points",
            body: "Mark the asymptote first, then evaluate a few convenient inputs around $x=h$. The point at $x=h$ is $(h,a+k)$. The graph approaches the asymptote but does not intersect it, and its domain remains all real numbers.",
          },
        ],
        keyFormulas: [
          { name: "Transformed exponential", statement: "$g(x)=a b^{x-h}+k$ has horizontal asymptote $y=k$." },
          { name: "Domain and range", statement: "$\\operatorname{Dom}(g)=\\mathbb{R}$; if $a>0$, $\\operatorname{Range}(g)=(k,\\infty)$, and if $a<0$, $\\operatorname{Range}(g)=(-\\infty,k)$." },
        ],
        workedExample: {
          problem: "For $g(x)=2^{x-1}+3$, state the transformations, asymptote, domain, and range.",
          solution: "The graph of $2^x$ shifts right 1 and up 3. Its horizontal asymptote moves from $y=0$ to $y=3$. The domain is $(-\\infty,\\infty)$ and, since $2^{x-1}>0$, the range is $(3,\\infty)$. For a check, $g(1)=4$, one unit above the asymptote.",
        },
      },
      questions: [
        {
          id: "alg2-u6-exponential-graphs-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which statement describes $f(x)=3^x$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Domain $x>0$, range all real numbers, vertical asymptote $x=0$" },
              { id: "b", text: "Domain all real numbers, range $y>0$, horizontal asymptote $y=0$" },
              { id: "c", text: "Domain all real numbers, range all real numbers, no asymptote" },
              { id: "d", text: "Domain all real numbers, range $y\\ge0$, horizontal asymptote $y=0$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Exponential domain", statement: "$b^x$ is defined for every real $x$ when $b>0$." },
              { kind: "property", name: "Positive outputs", statement: "$b^x>0$ for every real $x$, and for $b>1$ it approaches 0 as $x\\to-\\infty$." },
            ],
            steps: [
              { reasoning: "The exponent may be any real number, so the domain is all real numbers.", working: "\\operatorname{Dom}(f)=(-\\infty,\\infty)", marks: 1, markCode: "B" },
              { reasoning: "Powers of 3 are positive and approach, but never equal, zero; hence the range is positive and the asymptote is horizontal.", working: "\\operatorname{Range}(f)=(0,\\infty),\\quad y=0", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(b)** Domain $(-\\infty,\\infty)$, range $(0,\\infty)$, horizontal asymptote $y=0$.",
            commonErrors: ["Including 0 in the range because the graph gets close to the asymptote.", "Treating $x=0$ as a vertical asymptote."],
          },
        },
        {
          id: "alg2-u6-exponential-graphs-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $g(x)=3^{x-2}+1$, find $g(0)$. Give your answer as a simplified fraction.",
          response: { type: "numeric", parts: [{ label: "$g(0)$", answer: 10 / 9, tolerance: 0.001 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Substitution", statement: "To evaluate $g(c)$, substitute $x=c$ into the function rule." },
              { kind: "law", name: "Negative exponent", statement: "$b^{-n}=1/b^n$ for $b\\ne0$." },
            ],
            steps: [
              { reasoning: "Substitute zero for the input, preserving the exponent grouping.", working: "g(0)=3^{0-2}+1", marks: 1, markCode: "M" },
              { reasoning: "A negative exponent gives the reciprocal, and $3^2=9$.", working: "3^{-2}+1=\\frac{1}{9}+1", marks: 1, markCode: "A" },
              { reasoning: "Write the sum as one fraction.", working: "g(0)=\\frac{10}{9}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$g(0)=\\frac{10}{9}$.",
            commonErrors: ["Calculating $3^0-2+1$ instead of using $3^{0-2}+1$.", "Changing $3^{-2}$ to $-9$."],
          },
        },
        {
          id: "alg2-u6-exponential-graphs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The function is $h(x)=-2^{x+1}+3$. Find its $x$-intercept to the nearest hundredth. State the horizontal asymptote and range as part of your reasoning.",
          response: { type: "numeric", parts: [{ label: "$x$-intercept", answer: Math.log2(3) - 1, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Intercept", statement: "An $x$-intercept occurs where the output equals zero." },
              { kind: "property", name: "Transformed range", statement: "For $a b^{x-h}+k$ with $a<0$, the range is $(-\\infty,k)$ and the horizontal asymptote is $y=k$." },
            ],
            steps: [
              { reasoning: "Set the function equal to zero to locate where the graph crosses the $x$-axis.", working: "0=-2^{x+1}+3", marks: 1, markCode: "M" },
              { reasoning: "Isolate the positive exponential, then use logarithms base 2.", working: "2^{x+1}=3 \\implies x+1=\\log_2 3", marks: 1, markCode: "M" },
              { reasoning: "Subtract 1 and round the resulting intercept to the hundredth.", working: "x=\\log_2 3-1\\approx0.58", marks: 1, markCode: "A" },
              { reasoning: "The vertical shift is 3, and the negative coefficient places all outputs below that asymptote.", working: "y=3;\\quad \\operatorname{Range}=(-\\infty,3)", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$x$-intercept $x\\approx0.58$; asymptote $y=3$; range $(-\\infty,3)$.",
            commonErrors: ["Solving $2^{x+1}=-3$, ignoring the negative sign outside the exponential.", "Including 3 in the range."],
          },
        },
        {
          id: "alg2-u6-exponential-graphs-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A transformed exponential function is $f(x)=2^{x-1}+3$.",
          parts: [
            { label: "a", prompt: "Evaluate $f(1)$. (1 mark)", marks: 1 },
            { label: "b", prompt: "State the horizontal asymptote and explain why the graph does not cross it. (2 marks)", marks: 2 },
            { label: "c", prompt: "Solve $f(x)=11$. (2 marks)", marks: 2 },
            { label: "d", prompt: "State the domain and range, and describe the transformations from $y=2^x$. (3 marks)", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Exponential positivity", statement: "$2^u>0$ for every real $u$." },
              { kind: "property", name: "Horizontal translation", statement: "$b^{x-h}+k$ has horizontal asymptote $y=k$." },
              { kind: "definition", name: "Domain and range", statement: "The domain lists permitted inputs; the range lists outputs attained by the function." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $x=1$; the exponent becomes zero.", working: "f(1)=2^0+3=4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The exponential term approaches zero but remains positive, so the graph approaches the shifted baseline without reaching it.", working: "y=3", marks: 2, markCode: "R" },
              { part: "c", reasoning: "Isolate the exponential term before matching powers of 2.", working: "2^{x-1}+3=11 \\implies 2^{x-1}=8=2^3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Equal bases give equal exponents.", working: "x-1=3 \\implies x=4", marks: 1, markCode: "A" },
              { part: "d", reasoning: "An exponential is defined for every real input, and its positive output shifted up 3 stays strictly above 3.", working: "\\operatorname{Dom}(f)=(-\\infty,\\infty),\\quad \\operatorname{Range}(f)=(3,\\infty)", marks: 2, markCode: "A" },
              { part: "d", reasoning: "The exponent shift moves the graph right 1, and the outside constant moves it up 3.", working: "\\text{Right 1 unit; up 3 units}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $4$; (b) asymptote $y=3$; (c) $x=4$; (d) domain $\\mathbb{R}$, range $(3,\\infty)$, shift right 1 and up 3.",
            commonErrors: ["Describing $x-1$ as a shift left 1.", "Including the horizontal asymptote in the range."],
            examinerNote: "For part (b), both the asymptote and the positivity-based explanation are required for full credit.",
          },
        },
      ],
    },
    {
      id: "alg2-u6-continuous-growth",
      title: "The number $e$ and compound interest",
      skill: "Model continuous growth and compound interest, including converting a nominal annual rate to a compounding-period rate.",
      lesson: {
        sections: [
          {
            heading: "The special base $e$",
            body: "The irrational number $e\\approx2.71828$ is the natural exponential base. A continuous growth model has the form $A=Pe^{rt}$, where $P$ is the initial amount, $r$ is the decimal rate per time unit, and $t$ is elapsed time in those units. Positive $r$ models growth; negative $r$ models decay.",
          },
          {
            heading: "Compounding at regular intervals",
            body: "If a nominal annual rate $r$ is compounded $n$ times per year, each period uses rate $r/n$ and $nt$ periods occur in $t$ years. The balance is $A=P(1+r/n)^{nt}$. For monthly compounding, divide the annual rate by 12 and multiply the number of years by 12. Use decimal rates: $4.8\\%=0.048$.",
          },
          {
            heading: "Compare equivalent growth rates",
            body: "For a one-year growth factor $b$, the equivalent continuous rate is $r=\\ln b$. A nominal annual rate compounded $n$ times has effective annual rate $(1+r/n)^n-1$. More frequent compounding increases the effective yield for a positive nominal rate, approaching continuous compounding as $n$ grows.",
          },
        ],
        keyFormulas: [
          { name: "Continuous growth", statement: "$A=Pe^{rt}$" },
          { name: "Periodic compounding", statement: "$A=P\\left(1+\\frac{r}{n}\\right)^{nt}$" },
          { name: "Equivalent continuous rate", statement: "$b^t=e^{t\\ln b}$, so the continuous rate equivalent to growth factor $b$ is $\\ln b$." },
        ],
        workedExample: {
          problem: "An account starts with $\\$500$ and grows continuously at $6\\%$ per year. Find its balance after 4 years to the nearest cent.",
          solution: "Use $P=500$, $r=0.06$, and $t=4$. Then $A=500e^{0.06(4)}=500e^{0.24}\\approx635.618$. Rounded to the nearest cent, the balance is $\\$635.62$.",
        },
      },
      questions: [
        {
          id: "alg2-u6-continuous-growth-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which expression gives the amount $A$ after $t$ years for an initial deposit $P$ growing continuously at a constant annual rate $r$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$A=P+ert$" },
              { id: "b", text: "$A=P(1+r)^t$" },
              { id: "c", text: "$A=Pe^{rt}$" },
              { id: "d", text: "$A=Pe^r+t$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Continuous growth model", statement: "$A=Pe^{rt}$, where $r$ is the continuous rate and $t$ is elapsed time." },
            ],
            steps: [
              { reasoning: "Continuous growth uses the natural exponential base and multiplies the rate by elapsed time in the exponent.", working: "A=Pe^{rt}", marks: 1, markCode: "B" },
              { reasoning: "The matching expression is choice (c); the other expressions either describe periodic compounding or place the exponent incorrectly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $A=Pe^{rt}$.",
            commonErrors: ["Using the periodic-compounding formula for continuous growth.", "Writing $e^r+t$ instead of $e^{rt}$."],
          },
        },
        {
          id: "alg2-u6-continuous-growth-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A nominal annual rate is $6\\%$, compounded monthly. What decimal interest rate is applied each month? Enter the rate as a decimal.",
          response: { type: "numeric", parts: [{ label: "Monthly rate", answer: 0.005, tolerance: 0.0001 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Rate per compounding period", statement: "For a nominal annual rate $r$ compounded $n$ times per year, the rate per period is $r/n$." },
              { kind: "property", name: "Percent conversion", statement: "$p\\%=p/100$ as a decimal." },
            ],
            steps: [
              { reasoning: "Convert the stated annual percent to a decimal rate.", working: "6\\%=0.06", marks: 1, markCode: "M" },
              { reasoning: "Monthly compounding divides the annual nominal rate into 12 equal period rates.", working: "0.06/12=0.005", marks: 1, markCode: "M" },
              { reasoning: "State the rate in the requested decimal form, not as a percent.", working: "0.005", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The monthly decimal rate is $0.005$ (equivalently, $0.5\\%$).",
            commonErrors: ["Entering $0.5$ for $0.5\\%$ instead of converting the percent to a decimal.", "Dividing by 12 twice."],
          },
        },
        {
          id: "alg2-u6-continuous-growth-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A culture has population $P(t)=500e^{0.08t}$, where $t$ is measured in hours. Find the population after 5 hours, rounded to the nearest whole organism.",
          response: { type: "numeric", parts: [{ label: "Population after 5 hours", answer: 500 * Math.exp(0.4), tolerance: 1, unit: "organisms" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Continuous growth", statement: "$P(t)=P_0e^{rt}$, with rate and time measured in compatible units." },
              { kind: "property", name: "Rounding", statement: "A rounded numerical estimate is accepted within one unit of the stated rounding place." },
            ],
            steps: [
              { reasoning: "Substitute 5 hours into the model, so the exponent is the hourly rate times five hours.", working: "P(5)=500e^{0.08(5)}=500e^{0.4}", marks: 2, markCode: "M" },
              { reasoning: "Evaluate the exponential expression.", working: "500e^{0.4}\\approx745.912", marks: 1, markCode: "A" },
              { reasoning: "Round to the nearest whole organism as requested.", working: "P(5)\\approx746", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Approximately $746$ organisms.",
            commonErrors: ["Using $0.08+5$ instead of multiplying rate by time in the exponent.", "Entering 8 rather than 0.08 as the decimal rate."],
          },
        },
        {
          id: "alg2-u6-continuous-growth-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A savings account begins with $\\$1{,}200$ and earns a nominal annual rate of $4.8\\%$, compounded monthly for one year. Round monetary answers to the nearest cent.",
          parts: [
            { label: "a", prompt: "Find the monthly decimal rate. (2 marks)", marks: 2 },
            { label: "b", prompt: "Write an expression for the balance after one year. (2 marks)", marks: 2 },
            { label: "c", prompt: "Calculate the balance after one year. (2 marks)", marks: 2 },
            { label: "d", prompt: "Explain why the effective annual rate is greater than the nominal rate of $4.8\\%$. (2 marks)", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Periodic rate", statement: "The monthly rate for a nominal annual rate $r$ compounded monthly is $r/12$." },
              { kind: "formula", name: "Compound interest", statement: "$A=P(1+r/n)^{nt}$." },
              { kind: "definition", name: "Effective annual rate", statement: "The effective annual rate is the actual one-year proportional increase in the balance." },
            ],
            steps: [
              { part: "a", reasoning: "Convert 4.8 percent to decimal form and divide by 12 monthly periods.", working: "0.048/12=0.004", marks: 2, markCode: "M" },
              { part: "b", reasoning: "There are 12 monthly periods in one year, each multiplying the balance by $1+0.004$.", working: "A=1200(1.004)^{12}", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Evaluate the monthly compounding expression and round to the nearest cent.", working: "1200(1.004)^{12}\\approx1258.8842\\implies \\$1{,}258.88", marks: 2, markCode: "A" },
              { part: "d", reasoning: "Each month, interest is added to the balance and earns interest in later months; this compounding makes the actual annual increase exceed the stated nominal rate.", marks: 2, markCode: "R" },
            ],
            finalAnswer: "(a) $0.004$ monthly; (b) $1200(1.004)^{12}$; (c) $\\$1{,}258.88$; (d) monthly interest is itself compounded, so the effective annual rate is greater than $4.8\\%$.",
            commonErrors: ["Using $0.048$ as the monthly rate instead of dividing by 12.", "Using exponent 1 instead of 12 for one year of monthly compounding."],
            examinerNote: "The effective rate is $(1.004)^{12}-1\\approx0.04907$, or about $4.91\\%$.",
          },
        },
      ],
    },
  ],
};
