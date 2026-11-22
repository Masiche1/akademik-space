import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "aihl-u1-lesson-1-1",
  code: "1-1",
  title: "Logarithms and Complex Numbers",
  goal: "I CAN use the laws of logarithms, calculate with complex numbers in Cartesian form, and use modulus-argument and exponential forms to describe and combine sinusoidal signals.",
  standards: ["AHL 1.9", "AHL 1.12", "AHL 1.13"],
  vocabulary: [
    {
      term: "Imaginary unit",
      definition: "The number $i$ defined by $i^2=-1$.",
    },
    {
      term: "Complex conjugate",
      definition:
        "For $z=a+bi$, the conjugate is $z^*=a-bi$. The product $zz^*=a^2+b^2$ is real.",
    },
    {
      term: "Modulus",
      definition:
        "The distance of $z=a+bi$ from the origin on the Argand diagram: $|z|=\\sqrt{a^2+b^2}$.",
    },
    {
      term: "Argument",
      definition:
        "The angle $\\theta$ measured anticlockwise from the positive real axis to the line from the origin to $z$.",
    },
    {
      term: "Euler form",
      definition:
        "The representation $z=re^{i\\theta}$, where $e^{i\\theta}=\\cos\\theta+i\\sin\\theta$.",
    },
    {
      term: "Argand diagram",
      definition: "A plane on which $a+bi$ is plotted at the point $(a,b)$.",
    },
  ],
  concepts: [
    {
      id: "aihl-u1-complex-cartesian",
      title: "Logarithm laws and Cartesian complex numbers",
      skill:
        "Apply the laws of logarithms, and add, multiply and divide complex numbers in the form $a+bi$.",
      lesson: {
        sections: [
          {
            heading: "Laws of logarithms",
            body: "For positive $x$ and $y$: $\\log_a(xy)=\\log_a x+\\log_a y$, $\\log_a\\left(\\frac{x}{y}\\right)=\\log_a x-\\log_a y$ and $\\log_a(x^m)=m\\log_a x$. When a logarithmic equation is solved, always check that every logarithm is of a positive number, because a solution can be spurious. In IB notation $\\log x$ means $\\log_{10}x$.",
          },
          {
            heading: "Arithmetic with $a+bi$",
            body: "Add and subtract the real and imaginary parts separately. Multiply by expanding brackets and replacing $i^2$ with $-1$. To divide, multiply numerator and denominator by the conjugate of the denominator, so that the denominator becomes the real number $c^2+d^2$. Complex numbers appear in engineering: the impedance of an electrical circuit is $Z=R+iX$ ohms, where $R$ is resistance and $X$ is reactance.",
          },
        ],
        keyFormulas: [
          {
            name: "Product law",
            statement: "$\\log_a(xy)=\\log_a x+\\log_a y$",
          },
          { name: "Power law", statement: "$\\log_a(x^m)=m\\log_a x$" },
          {
            name: "Division",
            statement: "$\\dfrac{a+bi}{c+di}=\\dfrac{(a+bi)(c-di)}{c^2+d^2}$",
          },
        ],
        workedExample: {
          problem: "Find $\\dfrac{4+3i}{1+2i}$ in the form $a+bi$.",
          solution:
            "Multiply top and bottom by $1-2i$. The denominator becomes $1^2+2^2=5$. The numerator is $(4+3i)(1-2i)=4-8i+3i-6i^2=10-5i$. So the quotient is $\\frac{10-5i}{5}=2-i$.",
        },
      },
      questions: [
        {
          id: "aihl-u1-complex-cartesian-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Simplify $\\log 5+\\log 20$, where $\\log$ denotes $\\log_{10}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$100$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$\\log 25$" },
              { id: "d", text: "$\\log 15$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Product law",
                statement: "$\\log_a x+\\log_a y=\\log_a(xy)$",
              },
            ],
            steps: [
              {
                reasoning: "Add logarithms by multiplying the arguments.",
                working: "\\log 5+\\log 20=\\log 100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Since $10^2=100$, the logarithm is 2.",
                working: "\\log 100=2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $2$",
            commonErrors: [
              "Adding the arguments to get $\\log 25$.",
              "Giving the argument $100$ instead of its logarithm.",
            ],
          },
        },
        {
          id: "aihl-u1-complex-cartesian-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Solve $\\log_2 x+\\log_2(x-2)=3$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 4 }] },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Product law",
                statement: "$\\log_a x+\\log_a y=\\log_a(xy)$",
              },
              {
                kind: "definition",
                name: "Logarithm",
                statement:
                  "$\\log_a b=c \\iff a^c=b$, and $b$ must be positive.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Combine the logarithms and rewrite in exponential form.",
                working:
                  "\\log_2\\big(x(x-2)\\big)=3 \\Rightarrow x(x-2)=2^3=8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Form and factorise a quadratic.",
                working: "x^2-2x-8=0 \\Rightarrow (x-4)(x+2)=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reject $x=-2$ because $\\log_2 x$ is undefined for negative $x$.",
                working: "x=4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x=4$",
            commonErrors: [
              "Keeping the spurious root $x=-2$.",
              "Writing $\\log_2 x\\times\\log_2(x-2)$ instead of using the product law.",
            ],
          },
        },
        {
          id: "aihl-u1-complex-cartesian-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Find $\\dfrac{7+i}{2-i}$ in the form $a+bi$, giving $a$ and $b$ as decimals.",
          response: {
            type: "numeric",
            parts: [
              { label: "Real part $a$", answer: 2.6 },
              { label: "Imaginary part $b$", answer: 1.8 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Conjugate product",
                statement: "$(c+di)(c-di)=c^2+d^2$, which is real.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply numerator and denominator by the conjugate of the denominator.",
                working: "\\frac{(7+i)(2+i)}{(2-i)(2+i)}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The denominator becomes real.",
                working: "(2-i)(2+i)=4+1=5",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Expand the numerator, using $i^2=-1$.",
                working: "(7+i)(2+i)=14+7i+2i+i^2=13+9i",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Divide each part by 5.",
                working: "\\frac{13+9i}{5}=2.6+1.8i",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2.6+1.8i$",
            commonErrors: [
              "Multiplying by $2-i$ instead of its conjugate $2+i$.",
              "Forgetting $i^2=-1$ in the numerator.",
            ],
          },
        },
        {
          id: "aihl-u1-complex-cartesian-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "In an alternating-current circuit, two components have impedances $Z_1=3+4i$ ohms and $Z_2=5-2i$ ohms.",
          parts: [
            {
              label: "a",
              prompt:
                "Write down the total impedance $Z_1+Z_2$ when the components are connected in series.",
              marks: 2,
            },
            { label: "b", prompt: "Show that $Z_1Z_2=23+14i$.", marks: 2 },
            {
              label: "c",
              prompt:
                "When connected in parallel, the total impedance is $Z=\\dfrac{Z_1Z_2}{Z_1+Z_2}$. Find $Z$ in the form $a+bi$, giving $a$ and $b$ to 3 significant figures.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Find $|Z|$ to 3 significant figures and state what it represents.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) real part of series impedance", answer: 8 },
              { label: "(a) imaginary part of series impedance", answer: 2 },
              { label: "(c) real part of $Z$", answer: 3.12, tolerance: 0.005 },
              {
                label: "(c) imaginary part of $Z$",
                answer: 0.971,
                tolerance: 0.0005,
              },
              { label: "(d) $|Z|$", answer: 3.27, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Impedance",
                statement:
                  "Impedance $Z=R+iX$ combines resistance $R$ and reactance $X$; series impedances add.",
              },
              {
                kind: "property",
                name: "Modulus",
                statement: "$|a+bi|=\\sqrt{a^2+b^2}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Series impedances add, so add real and imaginary parts.",
                working: "(3+4i)+(5-2i)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Collect terms.",
                working: "8+2i",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Expand the product.",
                working: "(3+4i)(5-2i)=15-6i+20i-8i^2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Use $i^2=-1$ to reach the given answer (AG).",
                working: "=15+8+14i=23+14i",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Divide, multiplying by the conjugate of $8+2i$.",
                working: "Z=\\frac{(23+14i)(8-2i)}{(8+2i)(8-2i)}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Numerator is $184-46i+112i+28=212+66i$ and denominator is $64+4=68$.",
                working: "Z=\\frac{212+66i}{68}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Evaluate each part to 3 significant figures.",
                working: "Z\\approx 3.12+0.971i",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Use the modulus formula on the unrounded values.",
                working: "|Z|=\\sqrt{3.1176^2+0.9706^2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$|Z|\\approx 3.27$ ohms is the magnitude of the parallel impedance, the ratio of voltage amplitude to current amplitude.",
                working: "|Z|\\approx 3.27",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $8+2i$. (b) shown. (c) $Z\\approx3.12+0.971i$. (d) $|Z|\\approx3.27$ ohms.",
            commonErrors: [
              "Dividing by $8+2i$ without multiplying by the conjugate.",
              "Rounding before dividing, which changes the third significant figure.",
            ],
            examinerNote:
              "Follow-through (FT) is awarded in (d) from an incorrect $Z$ in (c).",
          },
        },
        {
          id: "aihl-u1-complex-cartesian-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Simplify $\\log_3 12-\\log_3 4$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$\\log_3 16$" },
              { id: "d", text: "$\\log_3 8$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Quotient law",
                statement:
                  "$\\log_a x-\\log_a y=\\log_a\\left(\\frac{x}{y}\\right)$",
              },
            ],
            steps: [
              {
                reasoning: "Combine the logarithms using the quotient law.",
                working: "\\log_3 12-\\log_3 4=\\log_3\\frac{12}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate $\\log_3 3$.",
                working: "\\log_3 3=1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $1$",
            commonErrors: ["Subtracting the arguments to get $\\log_3 8$."],
          },
        },
        {
          id: "aihl-u1-complex-cartesian-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The value of $\\log_5 75-\\log_5 3$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$5$" },
              { id: "c", text: "$25$" },
              { id: "d", text: "$\\log_5 72$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Quotient law",
                statement:
                  "$\\log_a x-\\log_a y=\\log_a\\left(\\frac{x}{y}\\right)$",
              },
            ],
            steps: [
              {
                reasoning: "Apply the quotient law.",
                working: "\\log_5 75-\\log_5 3=\\log_5\\frac{75}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate $\\log_5 25$.",
                working: "\\log_5 25=2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** $2$",
            commonErrors: [
              "Giving the argument $25$ instead of its logarithm.",
            ],
          },
        },
        {
          id: "aihl-u1-complex-cartesian-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Solve $\\log_2 x=5$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=10$" },
              { id: "b", text: "$x=7$" },
              { id: "c", text: "$x=32$" },
              { id: "d", text: "$x=25$" },
            ],
            correctChoiceIc: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Logarithm",
                statement: "$\\log_a b=c \\iff a^c=b$",
              },
            ],
            steps: [
              {
                reasoning: "Rewrite in exponential form.",
                working: "x=2^5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "x=32",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** $x=32$",
            commonErrors: [
              "Adding 5 to 2 instead of raising 2 to the power 5.",
            ],
          },
        },
        {
          id: "aihl-u1-complex-cartesian-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Write $(3+4i)(2-i)$ in the form $a+bi$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Real part $a$", answer: 10 },
              { label: "Imaginary part $b$", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Imaginary unit",
                statement: "$i^2=-1$",
              },
            ],
            steps: [
              {
                reasoning: "Expand the brackets.",
                working: "(3+4i)(2-i)=6-3i+8i-4i^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Replace $i^2$ by $-1$ and collect like terms.",
                working: "=6+4+5i",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the Cartesian form.",
                working: "10+5i",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$10+5i$",
            commonErrors: ["Forgetting that $-4i^2=+4$."],
          },
        },
        {
          id: "aihl-u1-complex-cartesian-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find $(1-2i)+(4+5i)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Real part", answer: 5 },
              { label: "Imaginary part", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cartesian form",
                statement:
                  "Add real parts to real parts and imaginary parts to imaginary parts.",
              },
            ],
            steps: [
              {
                reasoning: "Add the real parts.",
                working: "1+4=5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add the imaginary parts and state the sum.",
                working: "-2+5=3\\Rightarrow 5+3i",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5+3i$",
            commonErrors: [
              "Adding $-2i$ and $5i$ as $-2+5i$ instead of collecting the coefficient of $i$.",
            ],
          },
        },
        {
          id: "aihl-u1-complex-cartesian-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Find $\\dfrac{2+3i}{1-i}$ in the form $a+bi$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Real part $a$", answer: -0.5 },
              { label: "Imaginary part $b$", answer: 2.5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Conjugate product",
                statement: "$(c+di)(c-di)=c^2+d^2$ is real.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply numerator and denominator by the conjugate $1+i$ of the denominator.",
                working: "\\frac{(2+3i)(1+i)}{(1-i)(1+i)}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The denominator becomes real.",
                working: "(1-i)(1+i)=1+1=2",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Expand the numerator using $i^2=-1$.",
                working: "(2+3i)(1+i)=2+2i+3i+3i^2=-1+5i",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Divide each part by 2.",
                working: "\\frac{-1+5i}{2}=-0.5+2.5i",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-0.5+2.5i$",
            commonErrors: [
              "Multiplying by $1-i$ (the denominator itself) instead of its conjugate.",
            ],
          },
        },
        {
          id: "aihl-u1-complex-cartesian-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Let $z=1+2i$.",
          parts: [
            { label: "a", prompt: "Find $z^2$.", marks: 2 },
            {
              label: "b",
              prompt:
                "Find $zz^*$, where $z^*$ is the complex conjugate of $z$.",
              marks: 2,
            },
            { label: "c", prompt: "Hence find $|z|$.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Conjugate product",
                statement: "$zz^*=a^2+b^2=|z|^2$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Expand the square.",
                working: "(1+2i)^2=1+4i+4i^2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Use $i^2=-1$.",
                working: "=-3+4i",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "The conjugate is $1-2i$; multiply.",
                working: "(1+2i)(1-2i)=1-4i^2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "=1+4=5",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$|z|^2=zz^*=5$, so take the positive square root.",
                working: "|z|=\\sqrt5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State the modulus.",
                working: "|z|=\\sqrt5\\approx2.24",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $-3+4i$ (b) $5$ (c) $\\sqrt5$",
            commonErrors: [
              "Writing $zz^*=-3$ by carrying over the $i$ terms — the product is real.",
            ],
          },
        },
        {
          id: "aihl-u1-complex-cartesian-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Solve $\\log_2 x+\\log_2(x+7)=3$ for $x>0$.",
          parts: [
            {
              label: "a",
              prompt: "Use the product law to write a single logarithm.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Form and solve the resulting quadratic equation.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "State the valid solution and explain why the other root is rejected.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Product law",
                statement: "$\\log_a x+\\log_a y=\\log_a(xy)$",
              },
              {
                kind: "definition",
                name: "Logarithm domain",
                statement:
                  "Logarithms are defined only for positive arguments.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Combine the two logarithms.",
                working: "\\log_2\\big(x(x+7)\\big)=3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Rewrite in exponential form.",
                working: "x(x+7)=2^3=8",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Expand into a quadratic.",
                working: "x^2+7x-8=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Factorise.",
                working: "(x+8)(x-1)=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State both roots.",
                working: "x=1\\ \\text{or}\\ x=-8",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "The valid solution.",
                working: "x=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$x=-8$ makes $\\log_2 x$ undefined (and $x<0$), so it is rejected.",
                working: "x=-8\\ \\text{rejected}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x=1$",
            commonErrors: ["Keeping $x=-8$ without checking the domain."],
          },
        },
        {
          id: "aihl-u1-complex-cartesian-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is a solution of $\\log_3(x-1)+\\log_3(x+1)=1$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x=2$" },
              { id: "b", text: "$x=-2$" },
              { id: "c", text: "$x=1$" },
              { id: "d", text: "Both $x=2$ and $x=-2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Product law",
                statement: "$\\log_a x+\\log_a y=\\log_a(xy)$",
              },
              {
                kind: "definition",
                name: "Logarithm domain",
                statement: "Both $x-1$ and $x+1$ must be positive.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Combine and solve: $(x-1)(x+1)=3$ gives $x^2=4$, so $x=\\pm2$.",
                working: "x^2-1=3\\Rightarrow x=\\pm2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$x=-2$ makes $x-1$ negative, so only $x=2$ is valid.",
                working: "x=2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $x=2$",
            commonErrors: [
              "Choosing (d) without checking that $\\log_3(x-1)$ requires $x>1$.",
            ],
          },
        },
        {
          id: "aihl-u1-complex-cartesian-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Find $\\dfrac{5-i}{2+3i}$, giving the real and imaginary parts as decimals to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "Real part $a$", answer: 0.538, tolerance: 0.0005 },
              { label: "Imaginary part $b$", answer: -1.31, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Conjugate product",
                statement: "$(c+di)(c-di)=c^2+d^2$",
              },
            ],
            steps: [
              {
                reasoning: "Multiply top and bottom by the conjugate $2-3i$.",
                working: "\\frac{(5-i)(2-3i)}{(2+3i)(2-3i)}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The denominator is real.",
                working: "4+9=13",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Expand the numerator using $i^2=-1$.",
                working: "(5-i)(2-3i)=10-15i-2i+3i^2=7-17i",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Divide and round to 3 significant figures.",
                working: "\\frac{7-17i}{13}\\approx0.538-1.31i",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.538-1.31i$",
            commonErrors: [
              "A sign error in the numerator when expanding $(-i)(-3i)$.",
            ],
          },
        },
      ],
    },
    {
      id: "aihl-u1-polar-exponential",
      title: "Modulus-argument and exponential forms",
      skill:
        "Convert between Cartesian, modulus-argument and exponential forms and use them to add sinusoids.",
      lesson: {
        sections: [
          {
            heading: "Polar and Euler forms",
            body: "A complex number $z=a+bi$ has modulus $r=\\sqrt{a^2+b^2}$ and argument $\\theta$ with $\\tan\\theta=\\frac{b}{a}$, chosen in the correct quadrant. Then $z=r(\\cos\\theta+i\\sin\\theta)=re^{i\\theta}$. To convert back use $a=r\\cos\\theta$ and $b=r\\sin\\theta$. The GDC works in radians for the argument unless stated otherwise.",
          },
          {
            heading: "Adding sinusoids",
            body: "A signal $A\\cos(\\omega t+\\phi)$ is the real part of $Ae^{i\\phi}e^{i\\omega t}$. Signals with the same frequency are added by adding their complex amplitudes $Ae^{i\\phi}$. The modulus of the sum is the new amplitude and the argument is the new phase. This is how two waves interfere in sound, light or electrical circuits.",
          },
        ],
        keyFormulas: [
          {
            name: "Euler's formula",
            statement: "$e^{i\\theta}=\\cos\\theta+i\\sin\\theta$",
          },
          { name: "Modulus", statement: "$r=\\sqrt{a^2+b^2}$" },
          {
            name: "Cosine from exponentials",
            statement: "$e^{i\\theta}+e^{-i\\theta}=2\\cos\\theta$",
          },
        ],
        workedExample: {
          problem: "Write $1+i$ in the form $re^{i\\theta}$.",
          solution:
            "The modulus is $r=\\sqrt{1^2+1^2}=\\sqrt2$. The point $(1,1)$ lies in the first quadrant with $\\tan\\theta=1$, so $\\theta=\\frac{\\pi}{4}$. Hence $1+i=\\sqrt2\\,e^{i\\pi/4}$.",
        },
      },
      questions: [
        {
          id: "aihl-u1-polar-exponential-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the argument of $z=-1+i$, where $-\\pi<\\theta\\le\\pi$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-\\frac{\\pi}{4}$" },
              { id: "b", text: "$\\frac{\\pi}{4}$" },
              { id: "c", text: "$\\frac{3\\pi}{4}$" },
              { id: "d", text: "$-\\frac{3\\pi}{4}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Argument",
                statement:
                  "The argument is the angle from the positive real axis to the point, found in the correct quadrant.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The point $(-1,1)$ is in the second quadrant, so the angle is more than $\\frac{\\pi}{2}$.",
                working: "\\arctan|1/(-1)|=\\frac{\\pi}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract the reference angle from $\\pi$.",
                working: "\\theta=\\pi-\\frac{\\pi}{4}=\\frac{3\\pi}{4}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $\\frac{3\\pi}{4}$",
            commonErrors: [
              "Using $\\arctan(-1)=-\\frac{\\pi}{4}$ without checking the quadrant.",
            ],
          },
        },
        {
          id: "aihl-u1-polar-exponential-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Write $z=2e^{i\\pi/3}$ in the form $a+bi$, giving $a$ and $b$ to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "Real part $a$", answer: 1 },
              { label: "Imaginary part $b$", answer: 1.73, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Euler's formula",
                statement: "$re^{i\\theta}=r\\cos\\theta+ir\\sin\\theta$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Apply Euler's formula with $r=2$, $\\theta=\\frac{\\pi}{3}$.",
                working: "z=2\\cos\\frac{\\pi}{3}+2i\\sin\\frac{\\pi}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\cos\\frac{\\pi}{3}=\\frac12$.",
                working: "a=2\\times\\frac12=1",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "$\\sin\\frac{\\pi}{3}=\\frac{\\sqrt3}{2}$.",
                working: "b=\\sqrt3\\approx1.73",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$z=1+1.73i$",
            commonErrors: [
              "Using degrees mode on the GDC.",
              "Swapping sine and cosine.",
            ],
          },
        },
        {
          id: "aihl-u1-polar-exponential-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Write $z=-3+3\\sqrt3\\,i$ in the form $re^{i\\theta}$, where $r>0$ and $0<\\theta<\\pi$. Give $\\theta$ to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$r$", answer: 6 },
              { label: "$\\theta$ (radians)", answer: 2.09, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Modulus and argument",
                statement:
                  "$r=\\sqrt{a^2+b^2}$ and $\\tan\\theta=\\frac{b}{a}$ with $\\theta$ in the correct quadrant.",
              },
            ],
            steps: [
              {
                reasoning: "Calculate the modulus.",
                working: "r=\\sqrt{9+27}=\\sqrt{36}",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$r=6$.", working: "r=6", marks: 1, markCode: "A" },
              {
                reasoning:
                  "The point $(-3,3\\sqrt3)$ is in quadrant 2. The reference angle is $\\arctan\\sqrt3=\\frac{\\pi}{3}$.",
                working: "\\theta=\\pi-\\frac{\\pi}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "\\theta=\\frac{2\\pi}{3}\\approx2.09",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$z=6e^{2.09i}$ (exactly $6e^{2\\pi i/3}$)",
            commonErrors: [
              "Giving the first-quadrant angle $\\frac{\\pi}{3}$ instead of $\\frac{2\\pi}{3}$.",
            ],
          },
        },
        {
          id: "aihl-u1-polar-exponential-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 11,
          stem: "Two alternating currents in the same wire are $I_1=3\\cos(100\\pi t)$ and $I_2=4\\cos\\left(100\\pi t+\\frac{\\pi}{2}\\right)$ amperes, where $t$ is in seconds. A signal $A\\cos(\\omega t+\\phi)$ is represented by its complex amplitude $Ae^{i\\phi}$, and the total current is represented by the sum of the complex amplitudes. Throughout, angles are in radians.",
          parts: [
            {
              label: "a",
              prompt:
                "Write down the complex amplitudes $w_1$ and $w_2$ of $I_1$ and $I_2$ in Cartesian form.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Hence express $I_1+I_2$ in the form $R\\cos(100\\pi t+\\alpha)$, giving $\\alpha$ to 3 significant figures.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Now consider $3\\cos(100\\pi t)+3\\cos(100\\pi t+\\varphi)$ with $0\\le\\varphi<\\pi$. Show that the amplitude of the sum is $6\\cos\\frac{\\varphi}{2}$.",
              marks: 4,
            },
            {
              label: "d",
              prompt:
                "Hence find the value of $\\varphi$ for which the amplitude of the sum is $4.5$ amperes, to 3 significant figures.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) amplitude $R$", answer: 5 },
              {
                label: "(b) phase $\\alpha$",
                answer: 0.927,
                tolerance: 0.0005,
              },
              { label: "(d) $\\varphi$", answer: 1.45, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Euler's formula",
                statement:
                  "$e^{i\\theta}=\\cos\\theta+i\\sin\\theta$, so $e^{i\\theta}+e^{-i\\theta}=2\\cos\\theta$.",
              },
              {
                kind: "principle",
                name: "Phasor addition",
                statement:
                  "Sinusoids of equal frequency add by adding their complex amplitudes; modulus gives amplitude and argument gives phase.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The first current has amplitude 3 and phase 0.",
                working: "w_1=3",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning:
                  "$4e^{i\\pi/2}=4(\\cos\\frac{\\pi}{2}+i\\sin\\frac{\\pi}{2})$.",
                working: "w_2=4i",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Add the complex amplitudes.",
                working: "w_1+w_2=3+4i",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "The modulus is the new amplitude.",
                working: "R=\\sqrt{3^2+4^2}=5",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "The argument is the phase (first quadrant).",
                working:
                  "\\alpha=\\arctan\\frac43\\approx0.927,\\quad I=5\\cos(100\\pi t+0.927)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Add the complex amplitudes.",
                working: "w=3+3e^{i\\varphi}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Factor out $e^{i\\varphi/2}$ so that a symmetric pair of exponentials appears.",
                working:
                  "w=3e^{i\\varphi/2}\\left(e^{-i\\varphi/2}+e^{i\\varphi/2}\\right)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Use $e^{i\\theta}+e^{-i\\theta}=2\\cos\\theta$.",
                working: "w=6\\cos\\frac{\\varphi}{2}\\,e^{i\\varphi/2}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "For $0\\le\\varphi<\\pi$, $\\cos\\frac{\\varphi}{2}>0$, so the modulus is $6\\cos\\frac{\\varphi}{2}$ (AG), and the phase is $\\frac{\\varphi}{2}$.",
                working: "|w|=6\\cos\\frac{\\varphi}{2}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Set the amplitude equal to 4.5.",
                working:
                  "6\\cos\\frac{\\varphi}{2}=4.5\\Rightarrow\\cos\\frac{\\varphi}{2}=0.75",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Solve in radians: $\\arccos0.75=0.7227$.",
                working: "\\varphi=2(0.7227)\\approx1.45",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $w_1=3$, $w_2=4i$. (b) $I=5\\cos(100\\pi t+0.927)$. (c) shown. (d) $\\varphi\\approx1.45$.",
            commonErrors: [
              "Adding amplitudes $3+4=7$ instead of adding complex amplitudes.",
              "Using degrees when solving for $\\varphi$.",
            ],
            examinerNote:
              "Follow-through (FT) from an incorrect $w_2$ in (a) into (b).",
          },
        },
        {
          id: "aihl-u1-polar-exponential-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the modulus of $z=3+4i$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12$" },
              { id: "b", text: "$5$" },
              { id: "c", text: "$25$" },
              { id: "d", text: "$7$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Modulus",
                statement: "$|a+bi|=\\sqrt{a^2+b^2}$",
              },
            ],
            steps: [
              {
                reasoning: "Apply the modulus formula.",
                working: "|z|=\\sqrt{3^2+4^2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "|z|=\\sqrt{25}=5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $5$",
            commonErrors: [
              "Adding $3+4=7$ instead of using the Pythagorean formula.",
            ],
          },
        },
        {
          id: "aihl-u1-polar-exponential-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The argument of $z=1-i$, where $-\\pi<\\theta\\le\\pi$, is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-\\frac{3\\pi}{4}$" },
              { id: "b", text: "$\\frac{3\\pi}{4}$" },
              { id: "c", text: "$-\\frac{\\pi}{4}$" },
              { id: "d", text: "$\\frac{\\pi}{4}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Argument",
                statement:
                  "The argument is measured from the positive real axis in the correct quadrant.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The point $(1,-1)$ is in the fourth quadrant, so the angle is negative.",
                working: "\\theta=-\\arctan\\frac{1}{1}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "\\theta=-\\frac{\\pi}{4}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $-\\frac{\\pi}{4}$",
            commonErrors: [
              "Giving $+\\frac{\\pi}{4}$ without checking the quadrant.",
            ],
          },
        },
        {
          id: "aihl-u1-polar-exponential-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The real part of $2e^{i\\pi/3}$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$\\frac{\\sqrt3}{2}$" },
              { id: "c", text: "$\\sqrt3$" },
              { id: "d", text: "$2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Euler's formula",
                statement: "$re^{i\\theta}=r\\cos\\theta+ir\\sin\\theta$",
              },
            ],
            steps: [
              {
                reasoning: "The real part is $r\\cos\\theta$.",
                working: "2\\cos\\frac{\\pi}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$\\cos\\frac{\\pi}{3}=\\frac12$, so the real part is 1.",
                working: "2\\times\\frac12=1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $1$",
            commonErrors: [
              "Using $\\sin\\frac{\\pi}{3}$ and getting $\\sqrt3$ — that is the imaginary part.",
            ],
          },
        },
        {
          id: "aihl-u1-polar-exponential-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Write $z=-2-2i$ in the form $re^{i\\theta}$, where $r>0$ and $-\\pi<\\theta\\le\\pi$. Give $r$ and $\\theta$ to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$r$", answer: 2.83, tolerance: 0.005 },
              { label: "$\\theta$ (radians)", answer: -2.36, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Modulus and argument",
                statement:
                  "$r=\\sqrt{a^2+b^2}$, $\\theta$ in the correct quadrant.",
              },
            ],
            steps: [
              {
                reasoning: "Compute the modulus.",
                working: "r=\\sqrt{(-2)^2+(-2)^2}=\\sqrt8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$r=2\\sqrt2\\approx2.83$.",
                working: "r\\approx2.83",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The point $(-2,-2)$ is in quadrant III; the reference angle is $\\frac{\\pi}{4}$, so $\\theta=-\\pi+\\frac{\\pi}{4}=-\\frac{3\\pi}{4}$.",
                working: "\\theta=-\\frac{3\\pi}{4}\\approx-2.36",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$z=2.83e^{-2.36i}$ (exactly $2\\sqrt2\\,e^{-3\\pi i/4}$)",
            commonErrors: [
              "Giving $\\theta=\\frac{5\\pi}{4}$ which is outside the required range, or $\\frac{\\pi}{4}$ ignoring the quadrant.",
            ],
          },
        },
        {
          id: "aihl-u1-polar-exponential-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Write $z=\\sqrt3+i$ in the form $re^{i\\theta}$, giving $\\theta$ in radians to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "$r$", answer: 2 },
              {
                label: "$\\theta$ (radians)",
                answer: 0.524,
                tolerance: 0.0005,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Modulus and argument",
                statement:
                  "$r=\\sqrt{a^2+b^2}$ and $\\tan\\theta=\\frac{b}{a}$.",
              },
            ],
            steps: [
              {
                reasoning: "Compute the modulus.",
                working: "r=\\sqrt{3+1}=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Find the reference angle: $\\arctan\\frac{1}{\\sqrt3}=\\frac{\\pi}{6}$, first quadrant.",
                working: "\\theta=\\frac{\\pi}{6}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate $\\theta$ in radians.",
                working: "\\theta\\approx0.524",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$z=2e^{0.524i}$ (exactly $2e^{\\pi i/6}$)",
            commonErrors: [
              "Using degrees on the GDC and getting $30$ instead of $0.524$.",
            ],
          },
        },
        {
          id: "aihl-u1-polar-exponential-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Express $z=6e^{5\\pi i/6}$ in the form $a+bi$, giving $a$ and $b$ to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [
              { label: "Real part $a$", answer: -5.2, tolerance: 0.005 },
              { label: "Imaginary part $b$", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Euler's formula",
                statement: "$re^{i\\theta}=r\\cos\\theta+ir\\sin\\theta$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Apply Euler's formula with $r=6$, $\\theta=\\frac{5\\pi}{6}$.",
                working: "z=6\\cos\\frac{5\\pi}{6}+6i\\sin\\frac{5\\pi}{6}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$\\cos\\frac{5\\pi}{6}=-\\frac{\\sqrt3}{2}$.",
                working:
                  "a=6\\times\\left(-\\frac{\\sqrt3}{2}\\right)=-3\\sqrt3\\approx-5.20",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "$\\sin\\frac{5\\pi}{6}=\\frac12$.",
                working: "b=6\\times\\frac12=3",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the Cartesian form.",
                working: "z\\approx-5.20+3i",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$z=-3\\sqrt3+3i\\approx-5.20+3i$",
            commonErrors: [
              "Using $\\cos\\frac{5\\pi}{6}=+\\frac{\\sqrt3}{2}$ — the angle is in quadrant II so cosine is negative.",
            ],
          },
        },
        {
          id: "aihl-u1-polar-exponential-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Using Euler's formula, $e^{i\\theta}+e^{-i\\theta}=$",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2i\\sin\\theta$" },
              { id: "b", text: "$2\\sin\\theta$" },
              { id: "c", text: "$2\\cos\\theta$" },
              { id: "d", text: "$0$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Euler's formula",
                statement: "$e^{i\\theta}=\\cos\\theta+i\\sin\\theta$",
              },
            ],
            steps: [
              {
                reasoning: "Write both exponentials in trigonometric form.",
                working:
                  "e^{i\\theta}+e^{-i\\theta}=(\\cos\\theta+i\\sin\\theta)+(\\cos\\theta-i\\sin\\theta)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The sine terms cancel, leaving twice the cosine.",
                working: "=2\\cos\\theta",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $2\\cos\\theta$",
            commonErrors: [
              "Mixing up the plus and minus identities: $e^{i\\theta}-e^{-i\\theta}=2i\\sin\\theta$.",
            ],
          },
        },
        {
          id: "aihl-u1-polar-exponential-q12",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Two currents are $I_1=2\\cos(50\\pi t)$ and $I_2=2\\cos\\left(50\\pi t+\\frac{\\pi}{3}\\right)$ amperes, where $t$ is in seconds. A signal $A\\cos(\\omega t+\\phi)$ has complex amplitude $Ae^{i\\phi}$. Throughout, angles are in radians.",
          parts: [
            {
              label: "a",
              prompt:
                "Write down the complex amplitudes $w_1$ and $w_2$ of $I_1$ and $I_2$ in Cartesian form.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Find the modulus and argument of $w_1+w_2$.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Hence write $I_1+I_2$ in the form $R\\cos(50\\pi t+\\alpha)$, giving $\\alpha$ in radians to 3 significant figures.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Euler's formula",
                statement: "$e^{i\\theta}=\\cos\\theta+i\\sin\\theta$",
              },
              {
                kind: "principle",
                name: "Phasor addition",
                statement:
                  "The modulus of the sum of complex amplitudes gives the amplitude and the argument gives the phase.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The first signal has amplitude 2 and phase 0.",
                working: "w_1=2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Convert $2e^{i\\pi/3}$ using Euler's formula.",
                working:
                  "w_2=2\\cos\\frac{\\pi}{3}+2i\\sin\\frac{\\pi}{3}=1+\\sqrt3\\,i",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Add the complex amplitudes.",
                working: "w_1+w_2=3+\\sqrt3\\,i",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Compute the modulus.",
                working: "R=\\sqrt{9+3}=2\\sqrt3\\approx3.46",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Compute the argument (first quadrant).",
                working:
                  "\\alpha=\\arctan\\frac{\\sqrt3}{3}=\\frac{\\pi}{6}\\approx0.524",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Combine modulus and phase.",
                working:
                  "I_1+I_2=2\\sqrt3\\cos\\left(50\\pi t+\\frac{\\pi}{6}\\right)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $w_1=2$, $w_2=1+\\sqrt3\\,i$ (b) $R=2\\sqrt3\\approx3.46$, $\\alpha\\approx0.524$ (c) $I_1+I_2=2\\sqrt3\\cos(50\\pi t+0.524)$",
            commonErrors: [
              "Adding amplitudes $2+2=4$ instead of adding complex amplitudes.",
            ],
          },
        },
      ],
    },
  ],
};
