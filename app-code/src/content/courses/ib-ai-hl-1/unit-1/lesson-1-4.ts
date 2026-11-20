import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "aihl-u1-lesson-1-4",
  code: "1-4",
  title: "Rational Exponents and Infinite Geometric Series",
  goal: "I CAN simplify expressions with rational exponents, solve equations involving them, and find sums of infinite geometric series.",
  standards: ["AHL 1.10", "AHL 1.11"],
  vocabulary: [
    {
      term: "Rational exponent",
      definition:
        "$a^{m/n}=(\\sqrt[n]{a})^m=\\sqrt[n]{a^m}$ for $a>0$ — e.g. $8^{2/3}=(\\sqrt[3]{8})^2=4$.",
    },
    {
      term: "Laws of exponents",
      definition:
        "$a^p\\cdot a^q=a^{p+q}$, $(a^p)^q=a^{pq}$, $a^{-p}=\\frac{1}{a^p}$ — they hold for rational $p,q$ as well as integers.",
    },
    {
      term: "Infinite geometric series",
      definition:
        "The sum $S_\\infty=a+ar+ar^2+\\cdots=\\frac{a}{1-r}$, which converges only when $|r|<1$.",
    },
    {
      term: "Convergence",
      definition:
        "A series converges if its partial sums approach a finite limit; for geometric series this requires $|r|<1$.",
    },
    {
      term: "Recurring decimal",
      definition:
        "A decimal with a repeating block, expressible as a fraction via an infinite geometric series, e.g. $0.\\dot{3}=\\frac13$.",
    },
    {
      term: "Substitution",
      definition:
        "Replacing a repeated expression like $x^{2/3}$ with a single variable $u$ to turn an equation into a quadratic.",
    },
  ],
  concepts: [
    {
      id: "aihl-u1-rational-exponents",
      title: "Rational exponents",
      skill:
        "Evaluate and simplify expressions with fractional and negative exponents, and solve equations containing them.",
      lesson: {
        sections: [
          {
            heading: "Meaning of rational exponents",
            body: "The denominator of the exponent gives the root and the numerator gives the power: $a^{m/n}=\\sqrt[n]{a^m}=(\\sqrt[n]{a})^m$. So $16^{3/4}=(\\sqrt[4]{16})^3=2^3=8$. Negative rational exponents combine the reciprocal and the root: $27^{-2/3}=\\frac{1}{27^{2/3}}=\\frac{1}{(\\sqrt[3]{27})^2}=\\frac19$.",
          },
          {
            heading: "Laws still apply",
            body: "All the laws of exponents work with rational exponents: $a^p\\cdot a^q=a^{p+q}$, $\\frac{a^p}{a^q}=a^{p-q}$, $(a^p)^q=a^{pq}$, $(ab)^p=a^pb^p$. Use them to simplify products and quotients before evaluating.",
          },
          {
            heading: "Equations with rational exponents",
            body: "Isolate the power term, then raise both sides to the reciprocal exponent: $x^{3/2}=8 \\Rightarrow x=8^{2/3}=4$. When the exponent is a fraction with even denominator, check for extraneous or negative solutions — for real-valued expressions take $a>0$.",
          },
        ],
        keyFormulas: [
          {
            name: "Definition",
            statement: "$a^{m/n}=(\\sqrt[n]{a})^m=\\sqrt[n]{a^m}$, $a>0$",
          },
          {
            name: "Negative exponent",
            statement: "$a^{-m/n}=\\frac{1}{a^{m/n}}$",
          },
          { name: "Solving", statement: "$x^{p/q}=k \\Rightarrow x=k^{q/p}$" },
        ],
        workedExample: {
          problem: "Simplify $\\frac{(8x^6)^{1/3}}{x^{1/2}}$ for $x>0$.",
          solution:
            "$(8x^6)^{1/3}=8^{1/3}x^{6/3}=2x^2$. Then $\\frac{2x^2}{x^{1/2}}=2x^{3/2}$.",
        },
      },
      questions: [
        {
          id: "aihl-u1-rat-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The value of $8^{2/3}$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$16$" },
              { id: "c", text: "$\\frac{16}{3}$" },
              { id: "d", text: "$\\frac43$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rational exponents",
                statement: "$a^{m/n}=(\\sqrt[n]{a})^m$.",
              },
            ],
            steps: [
              {
                reasoning: "$8^{2/3}=(\\sqrt[3]{8})^2=2^2=4$.",
                working: "2^2=4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $4$",
            commonErrors: [
              "Computing $8^2/3=64/3$ — the exponent applies to the whole expression, not just the 8.",
            ],
          },
        },
        {
          id: "aihl-u1-rat-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Evaluate $27^{-2/3}\\times 81^{3/4}$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 3 }] },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rational exponents",
                statement:
                  "$a^{-m/n}=1/a^{m/n}$ and $a^{m/n}=(\\sqrt[n]{a})^m$.",
              },
            ],
            steps: [
              {
                reasoning: "$27^{-2/3}=\\frac{1}{(\\sqrt[3]{27})^2}=\\frac19$.",
                working: "\\frac19",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$81^{3/4}=(\\sqrt[4]{81})^3=3^3=27$.",
                working: "27",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Product: $\\frac19\\times27=3$.",
                working: "\\frac19\\times27=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$3$",
            commonErrors: [
              "Treating $27^{-2/3}$ as $-18$ or forgetting the reciprocal.",
            ],
          },
        },
        {
          id: "aihl-u1-rat-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Given that $a^{1/3}=2$, find the value of $a^{2/3}+a^{-1/3}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Power of a power",
                statement:
                  "$(a^{1/3})^2=a^{2/3}$ and $(a^{1/3})^{-1}=a^{-1/3}$.",
              },
            ],
            steps: [
              {
                reasoning: "$a^{2/3}=(a^{1/3})^2=2^2=4$.",
                working: "4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$a^{-1/3}=\\frac{1}{a^{1/3}}=\\frac12$.",
                working: "\\frac12",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add the two terms.",
                working: "4+\\frac12",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$=\\frac92=4.5$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4.5$",
            commonErrors: [
              "Computing $a^{2/3}$ as $2/3$ instead of $(a^{1/3})^2$.",
            ],
          },
        },
        {
          id: "aihl-u1-rat-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 9,
          stem: "Consider the equation $x^{4/3}-5x^{2/3}+6=0$ for $x>0$.",
          parts: [
            {
              label: "a",
              prompt:
                "Use the substitution $u=x^{2/3}$ to write a quadratic equation in $u$.",
              marks: 2,
            },
            { label: "b", prompt: "Solve the quadratic for $u$.", marks: 2 },
            { label: "c", prompt: "Hence find all values of $x$.", marks: 3 },
            {
              label: "d",
              prompt: "Verify that each value satisfies the original equation.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Substitution",
                statement:
                  "Replacing $x^{2/3}$ with $u$ turns the equation into $u^2-5u+6=0$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$x^{4/3}=(x^{2/3})^2=u^2$ and $x^{2/3}=u$.",
                working: "u^2-5u+6=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State the quadratic clearly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Factorise: $(u-2)(u-3)=0$.",
                working: "u=2\\ \\text{or}\\ u=3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Both roots found.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "For $u=2$: $x^{2/3}=2$, so $x=2^{3/2}=2\\sqrt2$.",
                working: "x=2\\sqrt2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "For $u=3$: $x^{2/3}=3$, so $x=3^{3/2}=3\\sqrt3$.",
                working: "x=3\\sqrt3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Both positive solutions stated.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Check $x=2\\sqrt2$: $x^{2/3}=2$, $x^{4/3}=4$, so $4-10+6=0$ ✓.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Check $x=3\\sqrt3$: $x^{2/3}=3$, $x^{4/3}=9$, so $9-15+6=0$ ✓.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x=2\\sqrt2$ or $x=3\\sqrt3$",
            commonErrors: [
              "Forgetting to take the $3/2$ power when back-substituting.",
              "Missing that $x^{4/3}=(x^{2/3})^2$.",
            ],
          },
        },
        {
          id: "aihl-u1-rat-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The value of $27^{-2/3}$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{9}$" },
              { id: "b", text: "$9$" },
              { id: "c", text: "$-9$" },
              { id: "d", text: "$\\frac{1}{3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rational exponent",
                statement:
                  "$a^{-m/n}=\\frac{1}{a^{m/n}}=\\frac{1}{(\\sqrt[n]{a})^m}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Take the reciprocal first, then evaluate $27^{2/3}$.",
                working: "27^{-2/3}=\\frac{1}{27^{2/3}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$27^{2/3}=(\\sqrt[3]{27})^2=3^2=9$.",
                working: "\\frac{1}{9}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac{1}{9}$",
            commonErrors: ["Dropping the negative sign and answering $9$."],
          },
        },
        {
          id: "aihl-u1-rat-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "For $x>0$, the expression $x^{1/2}\\cdot x^{1/3}$ simplifies to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^{1/6}$" },
              { id: "b", text: "$x^{5/6}$" },
              { id: "c", text: "$x^{2/3}$" },
              { id: "d", text: "$x^{3/2}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Product of powers",
                statement: "$a^p\\cdot a^q=a^{p+q}$ for rational $p,q$",
              },
            ],
            steps: [
              {
                reasoning: "Add the exponents.",
                working: "\\frac12+\\frac13=\\frac{3+2}{6}=\\frac56",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the simplified power.",
                working: "x^{5/6}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $x^{5/6}$",
            commonErrors: ["Multiplying the exponents instead of adding them."],
          },
        },
        {
          id: "aihl-u1-rat-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Solve $x^{2/3}=4$ for $x>0$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 8 }] },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Solving power equations",
                statement: "$x^{p/q}=k \\Rightarrow x=k^{q/p}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Raise both sides to the reciprocal power $\\frac32$.",
                working: "x=4^{3/2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate $4^{3/2}=(\\sqrt4)^3=2^3$.",
                working: "4^{3/2}=8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the solution.",
                working: "x=8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x=8$",
            commonErrors: [
              "Taking the cube root instead of the $\\frac32$ power, giving $x=\\sqrt[3]{16}.",
            ],
          },
        },
        {
          id: "aihl-u1-rat-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Evaluate $32^{3/5}$.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 8 }] },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rational exponent",
                statement: "$a^{m/n}=(\\sqrt[n]{a})^m$",
              },
            ],
            steps: [
              {
                reasoning: "Write 32 as a power of 2: $32=2^5$.",
                working: "32^{3/5}=(2^5)^{3/5}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply the exponents.",
                working: "=2^{5\\times3/5}=2^3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "=8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$8$",
            commonErrors: ["Taking the fifth root of 3 instead of of 32."],
          },
        },
        {
          id: "aihl-u1-rat-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "For $x>0$, $(x^{2/3})^3$ simplifies to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x^2$" },
              { id: "b", text: "$x^{8/9}$" },
              { id: "c", text: "$x^3$" },
              { id: "d", text: "$x^{1/2}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Power of a power",
                statement: "$(a^p)^q=a^{pq}$",
              },
            ],
            steps: [
              {
                reasoning: "Multiply the exponents: $\\frac23\\times3$.",
                working: "\\frac23\\times3=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the result.",
                working: "x^2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $x^2$",
            commonErrors: ["Adding the exponents instead of multiplying them."],
          },
        },
        {
          id: "aihl-u1-rat-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Solve $\\sqrt{x}=x-2$ for $x\\ge0$.",
          parts: [
            {
              label: "a",
              prompt: "Rearrange to form a quadratic in $x$.",
              marks: 2,
            },
            { label: "b", prompt: "Solve the quadratic.", marks: 2 },
            {
              label: "c",
              prompt: "Check which solution is valid and explain.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Squaring",
                statement:
                  "Squaring both sides may introduce extraneous solutions, so check each candidate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Let $u=\\sqrt{x}$, so $x=u^2$; or square directly: $x=(x-2)^2$.",
                working: "x=x^2-4x+4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Rearrange.",
                working: "x^2-5x+4=0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Factorise.",
                working: "(x-1)(x-4)=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State both candidates.",
                working: "x=1\\ \\text{or}\\ x=4",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Check $x=1$: $\\sqrt1=1$ but $x-2=-1$ — fails.",
                working: "x=1\\ \\text{rejected}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Check $x=4$: $\\sqrt4=2$ and $4-2=2$ — valid.",
                working: "x=4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x=4$",
            commonErrors: ["Accepting $x=1$ without substituting back."],
          },
        },
        {
          id: "aihl-u1-rat-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 6,
          stem: "Simplify $\\dfrac{(16x^8)^{1/4}}{x^{1/2}}$ for $x>0$, giving your answer in the form $kx^n$.",
          parts: [
            { label: "a", prompt: "Evaluate $(16x^8)^{1/4}$.", marks: 2 },
            {
              label: "b",
              prompt: "Divide by $x^{1/2}$ using the laws of exponents.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "State the simplified expression.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Power of a product",
                statement: "$(ab)^p=a^pb^p$ and $(a^p)^q=a^{pq}$",
              },
              {
                kind: "law",
                name: "Quotient of powers",
                statement: "$\\frac{a^p}{a^q}=a^{p-q}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Apply the power to each factor.",
                working: "(16x^8)^{1/4}=16^{1/4}x^{8/4}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate: $16^{1/4}=2$ and $x^{8/4}=x^2$.",
                working: "=2x^2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Subtract the exponents.",
                working: "\\frac{2x^2}{x^{1/2}}=2x^{2-1/2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Simplify the exponent.",
                working: "2-\\frac12=\\frac32",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "State the result.",
                working: "2x^{3/2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Confirm $k=2$, $n=\\frac32$.",
                working: "k=2,\\ n=3/2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2x^{3/2}$",
            commonErrors: [
              "Writing $x^{2-1/2}=x^{3/4}$ by mishandling the subtraction.",
            ],
          },
        },
        {
          id: "aihl-u1-rat-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Solve $x^{5/2}=32$ for $x>0$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 4 }] },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Solving power equations",
                statement: "$x^{p/q}=k \\Rightarrow x=k^{q/p}$",
              },
            ],
            steps: [
              {
                reasoning: "Raise both sides to the power $\\frac25$.",
                working: "x=32^{2/5}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Write $32=2^5$ and multiply exponents.",
                working: "32^{2/5}=(2^5)^{2/5}=2^2=4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the solution.",
                working: "x=4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x=4$",
            commonErrors: [
              "Taking the reciprocal exponent $\\frac52$ instead of $\\frac25$.",
            ],
          },
        },
        {
          id: "aihl-u1-rat-q13",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "If $16^x=8$, then $x=$",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{3}{4}$" },
              { id: "b", text: "$\\frac{4}{3}$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$\\frac{3}{2}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Power of a power",
                statement: "$(a^p)^q=a^{pq}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Write both sides as powers of 2: $16^x=2^{4x}$ and $8=2^3$.",
                working: "2^{4x}=2^3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Equate exponents.",
                working: "4x=3\\Rightarrow x=\\frac34",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $x=\\frac{3}{4}$",
            commonErrors: [
              "Equating bases instead of exponents, or inverting the fraction.",
            ],
          },
        },
        {
          id: "aihl-u1-rat-q14",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Let $a>0$.",
          parts: [
            {
              label: "a",
              prompt: "Expand $\\left(a^{1/2}+a^{-1/2}\\right)^2$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Simplify the middle term and the two outer terms using the laws of exponents.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Hence show that $\\left(a^{1/2}+a^{-1/2}\\right)^2=a+2+a^{-1}$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Hence write $\\left(a^{1/4}+a^{-1/4}\\right)^2$ in terms of $a^{1/2}$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Laws of exponents",
                statement:
                  "$a^p\\cdot a^q=a^{p+q}$ and $a^{-p}=\\frac{1}{a^p}$ hold for rational $p,q$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Use $(u+v)^2=u^2+2uv+v^2$.",
                working: "a+2a^{1/2}a^{-1/2}+a^{-1}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State the three terms.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "The middle term: $a^{1/2}\\cdot a^{-1/2}=a^0=1$.",
                working: "2a^0=2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "The outer terms are $a$ and $a^{-1}$.",
                working: "a\\ \\text{and}\\ a^{-1}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Combine (AG).",
                working: "a+2+a^{-1}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State the required identity.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Apply the identity with $a$ replaced by $a^{1/2}$.",
                working: "a^{1/2}+2+a^{-1/2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "State the result in terms of $a^{1/2}$.",
                working: "\\left(a^{1/4}+a^{-1/4}\\right)^2=a^{1/2}+2+a^{-1/2}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $a+2a^{1/2}a^{-1/2}+a^{-1}$ (b) middle term 2 (c) shown (d) $a^{1/2}+2+a^{-1/2}$",
            commonErrors: [
              "Treating $a^{1/2}a^{-1/2}$ as $a^{1/2-1/2}=a^0=1$ incorrectly as 0.",
            ],
          },
        },
      ],
    },
    {
      id: "aihl-u1-infinite-series",
      title: "Infinite geometric series",
      skill:
        "Determine convergence of geometric series, compute $S_\\infty=\\frac{a}{1-r}$, and apply it to recurring decimals and repeated processes.",
      lesson: {
        sections: [
          {
            heading: "When the sum exists",
            body: "For $S=a+ar+ar^2+\\cdots$, the infinite sum $S_\\infty=\\frac{a}{1-r}$ exists only when $|r|<1$. If $|r|\\ge1$ the terms do not shrink to zero and the sum diverges. Always state the condition on $r$.",
          },
          {
            heading: "Recurring decimals",
            body: "A recurring decimal is a geometric series in disguise: $0.\\dot{3}=0.3+0.03+0.003+\\cdots=\\frac{0.3}{1-0.1}=\\frac13$. For a two-digit repeat like $0.\\dot{4}\\dot{5}=0.454545\\ldots$, use $a=0.45$ and $r=0.01$: $S=\\frac{0.45}{0.99}=\\frac{5}{11}$.",
          },
          {
            heading: "Repeated processes",
            body: "Bouncing balls, repeated percentage changes, and perpetuities all produce geometric series. Identify the first term and the common ratio from the context, apply the convergence condition, then sum.",
          },
        ],
        keyFormulas: [
          {
            name: "Infinite sum",
            statement: "$S_\\infty=\\frac{a}{1-r}$, valid for $|r|<1$",
          },
          { name: "Convergence test", statement: "Converges iff $|r|<1$" },
          {
            name: "Recurring decimal",
            statement:
              "$0.\\dot{a}\\dot{b}\\ldots=\\frac{\\text{repeating block}}{10^k-1}$",
          },
        ],
        workedExample: {
          problem: "Find the sum of $3+1+\\frac13+\\frac19+\\cdots$.",
          solution:
            "$a=3$, $r=\\frac13$ and $|r|<1$, so $S_\\infty=\\frac{3}{1-\\frac13}=\\frac{3}{\\frac23}=\\frac92=4.5$.",
        },
      },
      questions: [
        {
          id: "aihl-u1-inf-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The sum of the infinite series $1+\\frac12+\\frac14+\\frac18+\\cdots$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$4$" },
              { id: "d", text: "Does not exist" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Infinite geometric sum",
                statement: "$S_\\infty=\\frac{a}{1-r}$ for $|r|<1$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$a=1$, $r=\\frac12$, so $S=\\frac{1}{1-\\frac12}=2$.",
                working: "\\frac{1}{1/2}=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $2$",
            commonErrors: ["Using $r=\\frac12$ as $a$ — the first term is 1."],
          },
        },
        {
          id: "aihl-u1-inf-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the sum of $3+1+\\frac13+\\frac19+\\cdots$.",
          response: {
            type: "numeric",
            parts: [{ label: "$S_\\infty$", answer: 4.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Infinite geometric sum",
                statement: "$S_\\infty=\\frac{a}{1-r}$, $|r|<1$.",
              },
            ],
            steps: [
              {
                reasoning: "Identify $a=3$ and $r=\\frac13$; check $|r|<1$ ✓.",
                working: "r=\\frac13",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the formula.",
                working: "S=\\frac{3}{1-1/3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$S=\\frac{3}{2/3}=\\frac92=4.5$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$S_\\infty=4.5$",
            commonErrors: ["Forgetting to check $|r|<1$ before summing."],
          },
        },
        {
          id: "aihl-u1-inf-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Express the recurring decimal $0.\\dot{4}\\dot{5}=0.454545\\ldots$ as a fraction in its simplest form.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Recurring decimals as series",
                statement:
                  "$0.\\dot{4}\\dot{5}=0.45+0.0045+0.000045+\\cdots$ with $a=0.45$, $r=0.01$.",
              },
            ],
            steps: [
              {
                reasoning: "Write the decimal as a geometric series.",
                working: "0.45+0.0045+\\cdots",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Identify $a=0.45$ and $r=0.01$; $|r|<1$ ✓.",
                working: "a=0.45,\\ r=0.01",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Sum: $S=\\frac{0.45}{1-0.01}=\\frac{0.45}{0.99}$.",
                working: "\\frac{0.45}{0.99}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify: $\\frac{45}{99}=\\frac{5}{11}$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{5}{11}$",
            commonErrors: [
              "Using $r=0.1$ instead of $0.01$ for a two-digit repeat.",
            ],
          },
        },
        {
          id: "aihl-u1-inf-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A ball is dropped from a height of $2$ m. Each time it hits the ground it rebounds to $\\frac34$ of its previous height. Let $d_n$ be the total distance travelled during the first $n$ flights (down and up).",
          parts: [
            {
              label: "a",
              prompt:
                "Write down the distance travelled in the first descent and in each subsequent up-and-down pair.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Show that the total distance after infinitely many bounces is $14$ m.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Find the smallest $n$ for which the total distance is within $0.5$ m of $14$ m.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Model as geometric series",
                statement:
                  "Each rebound height is $\\frac34$ of the last, so distances form a geometric series with $r=\\frac34$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "First descent: $2$ m. First rebound pair: up $1.5$ m and down $1.5$ m, total $3$ m.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Each later pair is $\\frac34$ of the previous pair.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "After the first descent, pairs form $3+\\frac94+\\frac{27}{16}+\\cdots$ with $a=3$, $r=\\frac34$.",
                working: "S_{pairs}=\\frac{3}{1-3/4}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$S_{pairs}=\\frac{3}{1/4}=12$ m; total $=2+12=14$ m.",
                working: "2+12=14",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Since $|r|=\\frac34<1$ the series converges.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Total after $n$ pairs: $D_n=2+3\\cdot\\frac{1-(3/4)^n}{1-3/4}=2+12\\left(1-(3/4)^n\\right)$.",
                working: "D_n=14-12(3/4)^n",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Need $12(3/4)^n<0.5$, i.e. $(3/4)^n<\\frac{1}{24}$.",
                working: "(3/4)^n<1/24",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$n>\\frac{\\ln(1/24)}{\\ln(3/4)}\\approx 11.1$, so $n=12$ pairs.",
                working: "n=12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $2$ m then pairs $3, \\frac94, \\ldots$ (b) $14$ m (c) $n=12$ pairs.",
            commonErrors: [
              "Forgetting the initial $2$ m descent when summing.",
            ],
          },
        },
        {
          id: "aihl-u1-inf-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The sum of $6+3+1.5+0.75+\\cdots$ is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12$" },
              { id: "b", text: "$9$" },
              { id: "c", text: "$6$" },
              { id: "d", text: "Does not exist" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Infinite geometric sum",
                statement: "$S_\\infty=\\frac{a}{1-r}$ for $|r|<1$",
              },
            ],
            steps: [
              {
                reasoning:
                  "$a=6$ and $r=\\frac12$, so $|r|<1$ and the series converges.",
                working: "r=\\frac{3}{6}=\\frac12",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the formula.",
                working: "S=\\frac{6}{1-1/2}=12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $12$",
            commonErrors: [
              "Using $a=3$ (the second term) instead of the first term 6.",
            ],
          },
        },
        {
          id: "aihl-u1-inf-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following infinite geometric series converges?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$r=0.9$" },
              { id: "b", text: "$r=1$" },
              { id: "c", text: "$r=-1.5$" },
              { id: "d", text: "$r=2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Convergence",
                statement: "A geometric series converges iff $|r|<1$",
              },
            ],
            steps: [
              {
                reasoning: "Check each modulus against 1.",
                working: "|0.9|<1;\\ |1|=1;\\ |-1.5|>1;\\ |2|>1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Only $r=0.9$ satisfies $|r|<1$.",
                working: "r=0.9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $r=0.9$",
            commonErrors: [
              "Thinking $r=1$ converges because the ratio is constant.",
            ],
          },
        },
        {
          id: "aihl-u1-inf-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The recurring decimal $0.\\dot{4}=0.444\\ldots$ is equal to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{4}{9}$" },
              { id: "b", text: "$\\frac{4}{11}$" },
              { id: "c", text: "$\\frac{9}{44}$" },
              { id: "d", text: "$\\frac{44}{9}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Recurring decimals as series",
                statement:
                  "$0.\\dot{4}=0.4+0.04+0.004+\\cdots$ with $a=0.4$, $r=0.1$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sum the series: $S=\\frac{0.4}{1-0.1}=\\frac{0.4}{0.9}$.",
                working: "\\frac{0.4}{0.9}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify.",
                working: "\\frac{4}{9}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac{4}{9}$",
            commonErrors: ["Using $r=0.01$ as for a two-digit repeat."],
          },
        },
        {
          id: "aihl-u1-inf-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the sum of $10-2+0.4-0.08+\\cdots$.",
          response: {
            type: "numeric",
            parts: [{ label: "$S_\\infty$", answer: 8.33, tolerance: 0.005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Infinite geometric sum",
                statement: "$S_\\infty=\\frac{a}{1-r}$ for $|r|<1$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identify $a=10$ and $r=-0.2$ (each term is $-0.2$ times the previous); $|r|<1$ ✓.",
                working: "r=-0.2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the formula: $1-r=1.2$.",
                working: "S=\\frac{10}{1-(-0.2)}=\\frac{10}{1.2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "S=\\frac{25}{3}\\approx8.33",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$S_\\infty\\approx8.33$",
            commonErrors: [
              "Taking $r=0.2$ and ignoring the alternating signs.",
            ],
          },
        },
        {
          id: "aihl-u1-inf-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "An infinite geometric series with common ratio $r=\\frac13$ has sum $9$. Find the first term $a$.",
          response: { type: "numeric", parts: [{ label: "$a$", answer: 6 }] },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Infinite geometric sum",
                statement: "$S_\\infty=\\frac{a}{1-r}$ for $|r|<1$",
              },
            ],
            steps: [
              {
                reasoning: "Set up the equation with $r=\\frac13$.",
                working: "\\frac{a}{1-1/3}=9",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify $1-r=\\frac23$.",
                working: "\\frac{a}{2/3}=9",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve for $a$.",
                working: "a=9\\times\\frac23=6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$a=6$",
            commonErrors: [
              "Multiplying by $1-\\frac13$ instead of by $\\frac23$ when solving for $a$.",
            ],
          },
        },
        {
          id: "aihl-u1-inf-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Express $0.7\\dot{2}=0.7222\\ldots$ as a fraction in its simplest form.",
          parts: [
            {
              label: "a",
              prompt: "Write the decimal as an infinite geometric series.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Identify $a$ and $r$ and check convergence.",
              marks: 1,
            },
            {
              label: "c",
              prompt: "Sum the series and simplify to a fraction.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Recurring decimals as series",
                statement:
                  "Split into a terminating part plus a recurring geometric tail.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$0.7222\\ldots=0.7+0.02+0.002+\\cdots$ — a terminating part plus a geometric tail with first term $0.02$.",
                working: "0.7+0.02+0.002+\\cdots",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State the series clearly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "For the tail, $a=0.02$ and $r=0.1$; $|r|<1$ ✓.",
                working: "a=0.02,\\ r=0.1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Tail sum: $\\frac{0.02}{0.9}=\\frac{2}{90}=\\frac{1}{45}$; add $0.7=\\frac{7}{10}$.",
                working: "\\frac{7}{10}+\\frac{1}{45}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Common denominator 90: $\\frac{63}{90}+\\frac{2}{90}=\\frac{65}{90}=\\frac{13}{18}$.",
                working: "\\frac{13}{18}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{13}{18}$",
            commonErrors: [
              "Treating the whole decimal as one recurring block with $r=0.1$ and $a=0.72$.",
            ],
          },
        },
        {
          id: "aihl-u1-inf-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "A ball is dropped from a height of $5$ m. Each rebound reaches $\\frac25$ of the height from which it fell. Let $h_n$ be the height of the $n$th rebound.",
          parts: [
            {
              label: "a",
              prompt: "Write down the first three rebound heights.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Find the total distance travelled by the ball from release until it touches the ground for the second time.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Show that the total distance travelled over infinitely many bounces is $\\frac{35}{3}$ m.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Model as geometric series",
                statement:
                  "Each rebound height is $\\frac25$ of the last; distances travelled form a geometric series with $r=\\frac25$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$h_1=5\\times\\frac25=2$ m.",
                working: "h_1=2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "$h_2=2\\times\\frac25=0.8$ m and $h_3=0.8\\times\\frac25=0.32$ m.",
                working: "h_2=0.8,\\ h_3=0.32",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The ball travels down 5 m, then up 2 m and down 2 m.",
                working: "5+2+2=9",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "State the distance until the second impact: $5+2+2=9$ m.",
                working: "9\\ \\text{m}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "After the first drop, each up-and-down pair has length $2h_n$; the pairs form $4+1.6+0.64+\\cdots$ with $a=4$, $r=\\frac25$.",
                working: "S_{pairs}=\\frac{4}{1-2/5}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$S_{pairs}=\\frac{4}{3/5}=\\frac{20}{3}$ m.",
                working: "\\frac{20}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Total distance $=5+\\frac{20}{3}=\\frac{15+20}{3}=\\frac{35}{3}$ m, and $|r|<1$ so it converges.",
                working: "\\frac{35}{3}\\ \\text{m}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $2, 0.8, 0.32$ m (b) $9$ m (c) $\\frac{35}{3}$ m shown",
            commonErrors: [
              "Summing only the up-and-down pairs and forgetting the initial $5$ m drop.",
            ],
          },
        },
        {
          id: "aihl-u1-inf-q12",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 9,
          stem: "Consider the series $S=(x-1)+(x-1)^2+(x-1)^3+\\cdots$, where $x$ is a real constant.",
          parts: [
            {
              label: "a",
              prompt:
                "Write down the first term $a$ and the common ratio $r$ of this geometric series.",
              marks: 1,
            },
            {
              label: "b",
              prompt:
                "Find the set of values of $x$ for which the series converges.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "For these values of $x$, find an expression for $S_\\infty$ in terms of $x$.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Find the value of $x$ for which $S_\\infty=4$.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Verify that your value of $x$ lies in the convergence set found in (b).",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [{ label: "(d) $x$", answer: 1.8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Convergence",
                statement: "A geometric series converges iff $|r|<1$.",
              },
              {
                kind: "formula",
                name: "Infinite geometric sum",
                statement: "$S_\\infty=\\frac{a}{1-r}$ for $|r|<1$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "First term is $x-1$ and each term is multiplied by $x-1$.",
                working: "a=x-1,\\ r=x-1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Convergence requires $|x-1|<1$.",
                working: "|x-1|<1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Solve the inequality.",
                working: "0<x<2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Apply the sum formula.",
                working: "S_\\infty=\\frac{x-1}{1-(x-1)}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Simplify.",
                working: "S_\\infty=\\frac{x-1}{2-x}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Set $\\frac{x-1}{2-x}=4$.",
                working: "x-1=4(2-x)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Solve: $x-1=8-4x$, so $5x=9$.",
                working: "x=\\frac95",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning: "Check $|x-1|=|\\frac95-1|=\\frac45<1$.",
                working: "|4/5|<1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning:
                  "Since $0<\\frac95<2$, the series converges and the value is valid.",
                working: "0<9/5<2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $a=r=x-1$ (b) $0<x<2$ (c) $\\frac{x-1}{2-x}$ (d) $x=\\frac95$ (e) verified",
            commonErrors: [
              "Forgetting to check that the solution lies inside the convergence interval.",
            ],
          },
        },
        {
          id: "aihl-u1-inf-q13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The infinite series $1-1+1-1+\\cdots$ has sum:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0$" },
              { id: "b", text: "$\\frac12$" },
              { id: "c", text: "Does not exist" },
              { id: "d", text: "$2$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Convergence",
                statement:
                  "A geometric series converges iff $|r|<1$; here $r=-1$ so $|r|=1$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identify $a=1$ and $r=-1$; $|r|=1$ is not less than 1.",
                working: "|r|=1\\not<1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The partial sums alternate between 0 and 1, so no limit exists.",
                working: "\\text{diverges}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Does not exist",
            commonErrors: [
              "Pairing terms to get $0$ or $\\frac12$ — the series is not convergent in the required sense.",
            ],
          },
        },
        {
          id: "aihl-u1-inf-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Express $0.1\\dot{6}=0.16666\\ldots$ as a fraction in its simplest form.",
          parts: [
            {
              label: "a",
              prompt:
                "Write the decimal as $0.1$ plus an infinite geometric series.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Identify $a$ and $r$ for the series part.",
              marks: 1,
            },
            {
              label: "c",
              prompt: "Sum the series and simplify the resulting fraction.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Recurring decimals as series",
                statement:
                  "$0.1\\dot{6}=0.1+0.06+0.006+\\cdots$ with $a=0.06$, $r=0.1$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Separate the non-recurring digit from the recurring tail.",
                working: "0.1+0.06+0.006+\\cdots",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State the decomposition clearly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "For the tail, $a=0.06$ and $r=0.1$; $|r|<1$ ✓.",
                working: "a=0.06,\\ r=0.1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Tail sum $=\\frac{0.06}{0.9}=\\frac{6}{90}=\\frac{1}{15}$; total $=\\frac{1}{10}+\\frac{1}{15}$.",
                working: "\\frac{1}{10}+\\frac{1}{15}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Common denominator 30: $\\frac{3}{30}+\\frac{2}{30}=\\frac{5}{30}=\\frac16$.",
                working: "\\frac16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac16$",
            commonErrors: ["Using $a=0.6$ for the tail instead of $0.06$."],
          },
        },
      ],
    },
  ],
};
