import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "alg2-u6-6-3",
  code: "6-3",
  title: "Exponential and Logarithmic Equations",
  goal: "I CAN solve exponential and logarithmic equations, check logarithm domains, and interpret exponential models in context.",
  standards: ["HSF-LE.A.4"],
  vocabulary: [
    { term: "Common base", definition: "A shared exponential base that allows equal powers of the base to be equated by setting exponents equal." },
    { term: "Inverse property", definition: "The identities $\\log_b(b^x)=x$ and $b^{\\log_b x}=x$ for valid bases and arguments." },
    { term: "Extraneous solution", definition: "A value produced during equation solving that does not satisfy the original equation or its domain restrictions." },
    { term: "Half-life", definition: "The time required for an exponentially decaying quantity to decrease to half its value." },
    { term: "Newton's law of cooling", definition: "A model in which an object's temperature difference from its surroundings decays exponentially over time." },
    { term: "pH", definition: "A logarithmic measure of hydrogen-ion concentration, defined by $\\text{pH}=-\\log_{10}[H^+]$." },
    { term: "Decibel", definition: "A logarithmic sound-level measure; for intensity $I$ relative to $I_0$, $\\beta=10\\log_{10}(I/I_0)$." },
  ],
  concepts: [
    {
      id: "alg2-u6-solving-equations",
      title: "Solving exponential and logarithmic equations",
      skill: "Solve exponential and logarithmic equations using common bases or logarithms, and reject solutions outside the original logarithm domain.",
      lesson: {
        sections: [
          {
            heading: "Exponential equations",
            body: "When both sides can be expressed as powers of the same positive base (not 1), set their exponents equal: $5^{x-1}=125=5^3$ gives $x-1=3$. If the sides cannot be rewritten with a common base, take a logarithm of both sides and use $\\log(a^x)=x\\log a$ to bring down the exponent.",
          },
          {
            heading: "Logarithmic equations",
            body: "First state the domain restrictions: every logarithm argument must be positive. Then use logarithm laws or convert to exponential form. After solving, substitute every candidate into the **original** equation and discard any value that makes a log argument nonpositive. For example, $\\log_2(x-1)=3$ requires $x>1$ and gives $x-1=8$, so $x=9$ is valid.",
          },
          {
            heading: "Check solutions, not just algebra",
            body: "Combining logarithms can create an equation whose algebraic roots include values outside the original domain. If $\\log_b u=\\log_b v$, then $u=v$ only when both arguments are positive. Keep those inequalities visible through the solution and verify the surviving value in the starting equation.",
          },
        ],
        keyFormulas: [
          { name: "Equal bases", statement: "$b^u=b^v \\iff u=v$ for $b>0$, $b\\ne1$." },
          { name: "Logarithm as exponent", statement: "$\\log_b x=y \\iff b^y=x$, with $x>0$." },
          { name: "Exponent rule for logs", statement: "$\\log_b(a^x)=x\\log_b a$ for $a>0$." },
        ],
        workedExample: {
          problem: "Solve $\\log_2(x-1)+\\log_2(x+1)=3$ and check the domain.",
          solution: "The original logarithms require $x-1>0$ and $x+1>0$, so $x>1$. Combine the logs: $\\log_2((x-1)(x+1))=3$. Convert to exponential form: $x^2-1=8$, so $x^2=9$ and $x=\\pm3$. The domain condition rejects $-3$; checking $x=3$ gives $\\log_2 2+\\log_2 4=1+2=3$. Thus $x=3$.",
        },
      },
      questions: [
        {
          id: "alg2-u6-solving-equations-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Solve $\\log_3 x=2$. Which value of $x$ is the solution?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$9$" },
              { id: "b", text: "$6$" },
              { id: "c", text: "$5$" },
              { id: "d", text: "$8$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Logarithm definition", statement: "$\\log_b x=y$ if and only if $b^y=x$." },
              { kind: "property", name: "Logarithm domain", statement: "The argument of a real logarithm must be positive." },
            ],
            steps: [
              { reasoning: "Convert the equation to exponential form, using 3 as base and 2 as exponent.", working: "\\log_3 x=2 \\iff x=3^2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the power; the result is positive and satisfies the original logarithm domain.", working: "x=9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x=9$.",
            commonErrors: ["Adding the base and exponent to get 5.", "Multiplying the base by the exponent to get 6."],
          },
        },
        {
          id: "alg2-u6-solving-equations-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $5^{x-1}=125$. Enter the value of $x$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Common base property", statement: "If $b^u=b^v$ for $b>0$, $b\\ne1$, then $u=v$." },
              { kind: "definition", name: "Integer powers", statement: "$125=5^3$." },
            ],
            steps: [
              { reasoning: "Rewrite 125 as a power of 5 so the equation has equal bases.", working: "5^{x-1}=5^3", marks: 1, markCode: "M" },
              { reasoning: "Equal powers of the same valid base have equal exponents.", working: "x-1=3", marks: 1, markCode: "M" },
              { reasoning: "Solve the resulting linear equation.", working: "x=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=4$.",
            commonErrors: ["Setting $x-1=125$ rather than rewriting 125 as $5^3$.", "Stopping at $x-1=3$ without solving for $x$."],
          },
        },
        {
          id: "alg2-u6-solving-equations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Solve $\\log_2(x-1)+\\log_2(x+1)=3$. Give all valid real solutions and show how the logarithm domains affect the answer.",
          response: { type: "numeric", parts: [{ label: "Valid solution", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Logarithm domain", statement: "Each logarithm argument must be strictly positive." },
              { kind: "law", name: "Product law", statement: "$\\log_b M+\\log_b N=\\log_b(MN)$ for $M,N>0$." },
              { kind: "definition", name: "Logarithmic form", statement: "$\\log_b A=c$ if and only if $A=b^c$, with $A>0$." },
            ],
            steps: [
              { reasoning: "Require each original argument to be positive; the combined restriction is $x>1$.", working: "x-1>0,\\quad x+1>0\\implies x>1", marks: 1, markCode: "R" },
              { reasoning: "Combine the sum with the product law, then convert from logarithmic to exponential form.", working: "\\log_2((x-1)(x+1))=3\\implies x^2-1=8", marks: 1, markCode: "M" },
              { reasoning: "Solve the resulting quadratic to find both algebraic candidates.", working: "x^2=9\\implies x=3\\text{ or }x=-3", marks: 1, markCode: "M" },
              { reasoning: "The domain $x>1$ rejects $-3$; the remaining value satisfies the original equation.", working: "\\log_2 2+\\log_2 4=1+2=3\\implies x=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The only valid real solution is $x=3$; $x=-3$ is excluded because the original log arguments are not positive.",
            commonErrors: ["Keeping both quadratic roots without checking the logarithm domains.", "Combining the logs by adding their arguments."],
          },
        },
        {
          id: "alg2-u6-solving-equations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each equation over the real numbers. Give decimal answers to the nearest hundredth when needed, and check logarithm domains.",
          parts: [
            { label: "a", prompt: "Solve $2^{x+1}=16$. (2 marks)", marks: 2 },
            { label: "b", prompt: "Solve $3^x=7$. (2 marks)", marks: 2 },
            { label: "c", prompt: "Solve $\\log_3(x-2)=2$ and state the domain restriction. (2 marks)", marks: 2 },
            { label: "d", prompt: "Solve $\\log_2(x-1)+\\log_2(x+1)=3$, explaining why any rejected root is invalid. (2 marks)", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Common base property", statement: "$b^u=b^v$ implies $u=v$ for a valid base $b$." },
              { kind: "formula", name: "Change of base", statement: "$a^x=c$ implies $x=\\frac{\\ln c}{\\ln a}$ for positive $a,c$, with $a\\ne1$." },
              { kind: "definition", name: "Logarithm domain", statement: "Every logarithm argument in the original equation must be positive." },
            ],
            steps: [
              { part: "a", reasoning: "Rewrite 16 as $2^4$ and equate exponents.", working: "2^{x+1}=2^4\\implies x+1=4\\implies x=3", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Take natural logarithms and divide by $\\ln 3$.", working: "x\\ln3=\\ln7\\implies x=\\frac{\\ln7}{\\ln3}\\approx1.77", marks: 2, markCode: "A" },
              { part: "c", reasoning: "The argument requires $x-2>0$; convert the equation to exponential form and solve.", working: "x>2;\\quad x-2=3^2=9\\implies x=11", marks: 2, markCode: "M" },
              { part: "d", reasoning: "The arguments require $x>1$. Combining logs gives $x^2-1=8$, whose candidates are $3$ and $-3$.", working: "x>1;\\quad x^2=9\\implies x=\\pm3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Only 3 satisfies the domain; $-3$ makes the log arguments negative.", working: "x=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $x=3$; (b) $x\\approx1.77$; (c) $x=11$ with $x>2$; (d) $x=3$ only, since the domain is $x>1$.",
            commonErrors: ["Rounding the answer to part (b) before dividing logarithms.", "Accepting $-3$ in part (d) without checking the original domain."],
            examinerNote: "For part (b), equivalent logarithm bases are acceptable if the final answer is correctly rounded.",
          },
        },
      ],
    },
    {
      id: "alg2-u6-exponential-models",
      title: "Exponential models in context",
      skill: "Interpret and solve exponential models for half-life, doubling time, Newton's cooling, pH, and decibels.",
      lesson: {
        sections: [
          {
            heading: "Growth and decay times",
            body: "A continuous growth model is $A(t)=A_0e^{rt}$. For growth, $r>0$, and doubling time is $t=\\frac{\\ln2}{r}$. For decay, $r<0$; a half-life $T$ satisfies $e^{rT}=\\frac12$, so $r=\\frac{\\ln(1/2)}{T}$. In discrete half-life form, $A(t)=A_0(1/2)^{t/T}$.",
          },
          {
            heading: "Temperature approaches the surroundings",
            body: "Newton's law of cooling is $T(t)=T_a+(T_0-T_a)e^{-kt}$, where $T_a$ is the constant ambient temperature, $T_0$ is the initial object temperature, and $k>0$. It is the **temperature difference** from ambient that decays exponentially. If the difference is halved in a known time, solve $e^{-kt}=1/2$ to determine $k$.",
          },
          {
            heading: "Logarithmic measurements",
            body: "The pH scale is $\\text{pH}=-\\log_{10}[H^+]$, so a change of one pH unit represents a factor of 10 in hydrogen-ion concentration. Sound level is $\\beta=10\\log_{10}(I/I_0)$ decibels. A level difference $\\Delta\\beta$ corresponds to an intensity factor $10^{\\Delta\\beta/10}$. These logarithmic scales turn multiplicative ratios into additive differences.",
          },
        ],
        keyFormulas: [
          { name: "Half-life model", statement: "$A(t)=A_0\\left(\\frac12\\right)^{t/T}$, where $T$ is the half-life." },
          { name: "Continuous doubling time", statement: "$t_{\\mathrm{double}}=\\frac{\\ln2}{r}$ for $A=A_0e^{rt}$ and $r>0$." },
          { name: "Newton's law of cooling", statement: "$T(t)=T_a+(T_0-T_a)e^{-kt}$, $k>0$." },
          { name: "pH and decibels", statement: "$\\text{pH}=-\\log_{10}[H^+]$; $\\beta=10\\log_{10}(I/I_0)$." },
        ],
        workedExample: {
          problem: "A sample has half-life 6 hours. What fraction remains after 18 hours?",
          solution: "Use $A(t)/A_0=(1/2)^{t/T}$. Here $t/T=18/6=3$, so the remaining fraction is $(1/2)^3=1/8$. One eighth of the original sample remains.",
        },
      },
      questions: [
        {
          id: "alg2-u6-exponential-models-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A substance has a half-life of 5 days. What fraction of its initial amount remains after 10 days?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac15$" },
              { id: "b", text: "$\\frac18$" },
              { id: "c", text: "$\\frac14$" },
              { id: "d", text: "$\\frac12$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Half-life", statement: "A half-life is the time for the amount to be multiplied by $1/2$." },
              { kind: "formula", name: "Half-life model", statement: "$A(t)/A_0=(1/2)^{t/T}$." },
            ],
            steps: [
              { reasoning: "Ten days contains two half-life intervals of five days each.", working: "10/5=2", marks: 1, markCode: "M" },
              { reasoning: "The fraction remaining is one-half multiplied by itself twice.", working: "(1/2)^2=1/4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $\\frac14$ of the initial amount.",
            commonErrors: ["Using $1/5$ as the fraction because the half-life is 5 days.", "Subtracting two halves instead of multiplying by the decay factor twice."],
          },
        },
        {
          id: "alg2-u6-exponential-models-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A population follows $P(t)=P_0e^{0.035t}$, with $t$ in years. Find its doubling time to the nearest tenth of a year.",
          response: { type: "numeric", parts: [{ label: "Doubling time", answer: Math.log(2) / 0.035, tolerance: 0.1, unit: "years" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Doubling time", statement: "For $P=P_0e^{rt}$, the doubling time is $t=\\ln2/r$." },
              { kind: "principle", name: "Rounding", statement: "Round only the final time to the requested nearest tenth." },
            ],
            steps: [
              { reasoning: "At the doubling time, the population is twice its initial value, so the growth factor is 2.", working: "e^{0.035t}=2", marks: 1, markCode: "M" },
              { reasoning: "Take natural logarithms and isolate time.", working: "0.035t=\\ln2\\implies t=\\frac{\\ln2}{0.035}\\approx19.8042", marks: 1, markCode: "M" },
              { reasoning: "Round to the nearest tenth of a year.", working: "t\\approx19.8\\text{ years}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The doubling time is approximately $19.8$ years.",
            commonErrors: ["Multiplying $\\ln2$ by the growth rate instead of dividing.", "Using 3.5 rather than 0.035 for a 3.5 percent rate."],
          },
        },
        {
          id: "alg2-u6-exponential-models-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Coffee cools according to $T(t)=20+60e^{-kt}$, where $T$ is in degrees Celsius and $t$ is in minutes. After 10 minutes, its temperature is $50^\\circ\\text{C}$. Find $k$ to the nearest thousandth per minute.",
          response: { type: "numeric", parts: [{ label: "Cooling constant $k$", answer: Math.log(2) / 10, tolerance: 0.001, unit: "per minute" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Newton's law of cooling", statement: "$T(t)=T_a+(T_0-T_a)e^{-kt}$, where $k>0$." },
              { kind: "law", name: "Natural logarithm inverse", statement: "$\\ln(e^u)=u$ for real $u$." },
              { kind: "principle", name: "Rounding", statement: "Round the value of $k$ to the stated decimal place." },
            ],
            steps: [
              { reasoning: "Substitute the measured temperature and time into the given model.", working: "50=20+60e^{-10k}", marks: 1, markCode: "M" },
              { reasoning: "Isolate the exponential; the temperature difference has fallen from 60 to 30, exactly one half.", working: "30=60e^{-10k}\\implies e^{-10k}=\\frac12", marks: 1, markCode: "M" },
              { reasoning: "Take natural logarithms and solve for the positive cooling constant.", working: "-10k=\\ln(1/2)\\implies k=\\frac{\\ln2}{10}\\approx0.0693147", marks: 1, markCode: "A" },
              { reasoning: "Round to the nearest thousandth per minute.", working: "k\\approx0.069\\text{ per minute}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k\\approx0.069$ per minute.",
            commonErrors: ["Using the object's temperature 50 instead of its temperature difference from ambient, 30.", "Reporting a negative value for $k$ even though the model already uses $-kt$."],
          },
        },
        {
          id: "alg2-u6-exponential-models-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Use the logarithmic measurement models $\\text{pH}=-\\log_{10}[H^+]$ and $\\beta=10\\log_{10}(I/I_0)$, where $[H^+]$ is in moles per liter and $I_0$ is the reference sound intensity.",
          parts: [
            { label: "a", prompt: "Find the hydrogen-ion concentration of a solution with pH 4. (2 marks)", marks: 2 },
            { label: "b", prompt: "How many times greater is the hydrogen-ion concentration at pH 2 than at pH 5? (2 marks)", marks: 2 },
            { label: "c", prompt: "Express the intensity ratio $I/I_0$ for a sound level of 60 decibels. (2 marks)", marks: 2 },
            { label: "d", prompt: "A sound becomes 30 decibels louder. By what factor does its intensity increase? (2 marks)", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "pH", statement: "$\\text{pH}=-\\log_{10}[H^+]$, so $[H^+]=10^{-\\text{pH}}$." },
              { kind: "formula", name: "Decibel intensity", statement: "$\\beta=10\\log_{10}(I/I_0)$; therefore an increase $\\Delta\\beta$ gives intensity factor $10^{\\Delta\\beta/10}$." },
              { kind: "property", name: "Logarithmic scale", statement: "Differences in logarithmic measurements correspond to ratios of the measured quantities." },
            ],
            steps: [
              { part: "a", reasoning: "Rearrange the pH definition to recover hydrogen-ion concentration.", working: "[H^+]=10^{-4}=0.0001\\text{ mol/L}", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Convert both pH levels to concentrations and compare their ratio.", working: "\\frac{10^{-2}}{10^{-5}}=10^3=1000", marks: 2, markCode: "A" },
              { part: "c", reasoning: "Divide the decibel level by 10 to find the logarithm of the intensity ratio, then exponentiate base 10.", working: "60=10\\log_{10}(I/I_0)\\implies I/I_0=10^6", marks: 2, markCode: "M" },
              { part: "d", reasoning: "A 30-decibel increase gives an intensity factor of $10^{30/10}$.", working: "10^3=1000", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) $[H^+]=10^{-4}$ mol/L; (b) 1000 times; (c) $I/I_0=10^6$; (d) 1000 times the intensity.",
            commonErrors: ["Treating a pH difference of 3 as a factor of 3 instead of $10^3$.", "Forgetting the factor of 10 in the decibel formula.", "Interpreting 60 decibels as an intensity ratio of 60."],
            examinerNote: "Part (b) asks for a ratio; the higher-concentration solution is the one with the lower pH.",
          },
        },
      ],
    },
  ],
};
