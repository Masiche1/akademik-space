import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "aahl-u6-lesson-6-1",
  code: "6-1",
  title: "Integration Techniques",
  goal: "I CAN integrate using substitution, standard inverse-trigonometric forms and integration by parts, including repeated and cyclic cases.",
  standards: ["AHL 5.15", "AHL 5.16"],
  vocabulary: [
    {
      term: "Integration by substitution",
      definition:
        "Replacing $u=g(x)$ so that $\\int f(g(x))g'(x)\\,dx=\\int f(u)\\,du$; for definite integrals the limits must be converted to $u$-values.",
    },
    {
      term: "Integration by parts",
      definition:
        "$\\int u\\,\\frac{dv}{dx}\\,dx=uv-\\int v\\,\\frac{du}{dx}\\,dx$.",
    },
    {
      term: "Completing the square",
      definition:
        "Rewriting $x^2+bx+c$ as $(x+\\frac b2)^2+c-\\frac{b^2}4$ to reveal a standard form.",
    },
    {
      term: "Cyclic integral",
      definition:
        "An integral that returns to itself after two applications of parts, so it can be solved algebraically.",
    },
    {
      term: "Reduction formula",
      definition:
        "A recurrence relating an integral $I_n$ to one with a smaller index.",
    },
    {
      term: "Definite integral",
      definition: "$\\int_a^b f(x)\\,dx=F(b)-F(a)$ where $F'=f$.",
    },
  ],
  concepts: [
    {
      id: "aahl-u6-substitution",
      title: "Substitution and inverse trigonometric integrals",
      skill:
        "Use substitution and the forms $\\frac1{a^2+x^2}$ and $\\frac1{\\sqrt{a^2-x^2}}$.",
      lesson: {
        sections: [
          {
            heading: "Standard forms",
            body: "From the formula booklet: $\\int\\frac{1}{a^2+x^2}dx=\\frac1a\\arctan\\frac xa+C$ and $\\int\\frac{1}{\\sqrt{a^2-x^2}}dx=\\arcsin\\frac xa+C$ for $|x|<a$. When a quadratic does not match directly, complete the square first, or factor out a constant: $\\frac{1}{9-4x^2}$-type roots need $4x^2=(2x)^2$.",
          },
          {
            heading: "Substitution",
            body: "Choose $u$ so that its derivative appears (up to a constant) in the integrand. Replace $dx$ using $du=g'(x)\\,dx$, and change the limits of a definite integral at the same time. Check that no $x$ remains.",
          },
        ],
        keyFormulas: [
          {
            name: "Arctan form",
            statement:
              "$\\displaystyle\\int\\frac{1}{a^2+x^2}\\,dx=\\frac1a\\arctan\\frac xa+C$",
          },
          {
            name: "Arcsin form",
            statement:
              "$\\displaystyle\\int\\frac{1}{\\sqrt{a^2-x^2}}\\,dx=\\arcsin\\frac xa+C$",
          },
        ],
        workedExample: {
          problem: "Find $\\int\\frac{1}{4+x^2}dx$.",
          solution: "With $a=2$: $\\frac12\\arctan\\frac x2+C$.",
        },
      },
      questions: [
        {
          id: "aahl-u6-substitution-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\displaystyle\\int\\frac{1}{9+x^2}\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac13\\arctan\\dfrac x3+C$" },
              { id: "b", text: "$\\arctan\\dfrac x3+C$" },
              { id: "c", text: "$\\dfrac19\\arctan\\dfrac x3+C$" },
              { id: "d", text: "$3\\arctan\\dfrac x3+C$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Arctan integral",
                statement:
                  "$\\int\\frac1{a^2+x^2}dx=\\frac1a\\arctan\\frac xa+C$",
              },
            ],
            steps: [
              {
                reasoning: "Identify $a^2=9$, so $a=3$.",
                working: "a=3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the standard form.",
                working: "\\frac13\\arctan\\frac x3+C",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)**",
            commonErrors: [
              "Omitting the factor $\\frac1a$.",
              "Using $\\frac1{a^2}$.",
            ],
          },
        },
        {
          id: "aahl-u6-substitution-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Use the substitution $u=x^2$ to find the exact value of $\\displaystyle\\int_0^1\\frac{x}{x^4+1}\\,dx$. Enter its decimal value to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 0.393, tolerance: 0.0005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Substitution",
                statement: "Convert integrand, differential and limits to $u$.",
              },
              {
                kind: "formula",
                name: "Arctan integral",
                statement: "$\\int\\frac{1}{1+u^2}du=\\arctan u$",
              },
            ],
            steps: [
              {
                reasoning: "$du=2x\\,dx$; limits $x=0,1$ become $u=0,1$.",
                working: "\\frac12\\int_0^1\\frac{1}{u^2+1}\\,du",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate.",
                working: "\\frac12\\left[\\arctan u\\right]_0^1",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate.",
                working: "\\frac12\\cdot\\frac\\pi4=\\frac\\pi8\\approx0.393",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac\\pi8\\approx0.393$",
            commonErrors: [
              "Not halving for $du=2x\\,dx$.",
              "Forgetting to change the limits.",
            ],
          },
        },
        {
          id: "aahl-u6-substitution-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Find the value of $\\displaystyle\\int_0^1\\frac{1}{x^2+2x+2}\\,dx$, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 0.322, tolerance: 0.0005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Completing the square",
                statement: "$x^2+2x+2=(x+1)^2+1$",
              },
              {
                kind: "formula",
                name: "Arctan integral",
                statement: "$\\int\\frac1{1+(x+1)^2}dx=\\arctan(x+1)+C$",
              },
            ],
            steps: [
              {
                reasoning: "Complete the square.",
                working: "x^2+2x+2=(x+1)^2+1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate using the arctan form.",
                working: "\\left[\\arctan(x+1)\\right]_0^1",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute limits.",
                working: "\\arctan2-\\arctan1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate in radians.",
                working: "1.10715-0.78540\\approx0.322",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\arctan2-\\frac\\pi4\\approx0.322$",
            commonErrors: [
              "Calculator in degree mode.",
              "Attempting partial fractions on an irreducible quadratic.",
            ],
          },
        },
        {
          id: "aahl-u6-substitution-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "Let $f(x)=\\dfrac{1}{\\sqrt{9-4x^2}}$ for $0\\le x\\le1$.",
          parts: [
            {
              label: "a",
              prompt:
                "Show that $\\displaystyle\\int f(x)\\,dx=\\frac12\\arcsin\\frac{2x}3+C$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Find $\\displaystyle\\int_0^1f(x)\\,dx$, giving your answer in exact form.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Use the substitution $u=9-4x^2$ to show that $\\displaystyle\\int_0^1xf(x)\\,dx=\\frac{3-\\sqrt5}{4}$.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Hence find $\\displaystyle\\int_0^1(1+x)f(x)\\,dx$, to 3 significant figures.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) decimal value", answer: 0.365, tolerance: 0.0005 },
              { label: "(d) value", answer: 0.556, tolerance: 0.0005 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Arcsin integral",
                statement:
                  "$\\int\\frac{1}{\\sqrt{a^2-x^2}}dx=\\arcsin\\frac xa$",
              },
              {
                kind: "theorem",
                name: "Substitution",
                statement: "Change limits with the variable.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Factor: $9-4x^2=4\\left(\\frac94-x^2\\right)$ so $f=\\frac12\\cdot\\frac{1}{\\sqrt{(3/2)^2-x^2}}$.",
                working: "f(x)=\\frac{1}{2\\sqrt{(3/2)^2-x^2}}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Apply the arcsin form with $a=\\frac32$.",
                working:
                  "\\frac12\\arcsin\\frac{x}{3/2}=\\frac12\\arcsin\\frac{2x}{3}+C\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Substitute the limits.",
                working:
                  "\\frac12\\left[\\arcsin\\frac{2x}3\\right]_0^1=\\frac12\\arcsin\\frac23-0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the value.",
                working: "\\frac12\\arcsin\\frac23\\approx0.365",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "$du=-8x\\,dx$; limits $x=0,1$ give $u=9,5$.",
                working:
                  "\\int_0^1\\frac{x}{\\sqrt{9-4x^2}}dx=-\\frac18\\int_9^5u^{-1/2}\\,du",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Integrate.",
                working: "-\\frac18\\left[2\\sqrt u\\right]_9^5",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working:
                  "-\\frac14(\\sqrt5-3)=\\frac{3-\\sqrt5}{4}\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Split the integral and add the results of (b) and (c).",
                working: "\\frac12\\arcsin\\frac23+\\frac{3-\\sqrt5}4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Evaluate: $0.36486+0.19098$.",
                working: "\\approx0.556",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) shown. (b) $\\frac12\\arcsin\\frac23\\approx0.365$. (c) shown. (d) $0.556$.",
            commonErrors: [
              "Omitting the factor $\\frac12$ in (a).",
              "Not reversing the limits (or sign) in (c).",
            ],
          },
        },
        {
          id: "aahl-u6-substitution-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\displaystyle\\int\\frac{1}{16+x^2}\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac14\\arctan\\dfrac x4+C$" },
              { id: "b", text: "$4\\arctan\\dfrac x4+C$" },
              { id: "c", text: "$\\dfrac1{16}\\arctan\\dfrac x4+C$" },
              { id: "d", text: "$\\arctan 4x+C$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Arctan integral",
                statement:
                  "$\\int\\frac1{a^2+x^2}dx=\\frac1a\\arctan\\frac xa+C$",
              },
            ],
            steps: [
              {
                reasoning: "Identify $a^2=16$, so $a=4$.",
                working: "a=4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the standard form.",
                working: "\\frac14\\arctan\\frac x4+C",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac14\\arctan\\frac x4+C$",
            commonErrors: [
              "Multiplying by $a$ instead of dividing by $a$.",
              "Using $\\frac1{a^2}$ as the factor.",
            ],
          },
        },
        {
          id: "aahl-u6-substitution-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\displaystyle\\int\\frac{1}{\\sqrt{25-x^2}}\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\arcsin\\dfrac x5+C$" },
              { id: "b", text: "$\\dfrac15\\arcsin 5x+C$" },
              { id: "c", text: "$\\arcsin 5x+C$" },
              { id: "d", text: "$5\\arcsin\\dfrac x5+C$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Arcsin integral",
                statement:
                  "$\\int\\frac1{\\sqrt{a^2-x^2}}dx=\\arcsin\\frac xa+C$",
              },
            ],
            steps: [
              {
                reasoning: "Identify $a^2=25$, so $a=5$.",
                working: "a=5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the standard form.",
                working: "\\arcsin\\frac x5+C",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\arcsin\\frac x5+C$",
            commonErrors: [
              "Multiplying the argument by $a$ instead of dividing.",
              "Adding a spurious factor $\\frac1a$.",
            ],
          },
        },
        {
          id: "aahl-u6-substitution-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\displaystyle\\int x^3\\sqrt{x^4+1}\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac16(x^4+1)^{3/2}+C$" },
              { id: "b", text: "$\\dfrac14(x^4+1)^{3/2}+C$" },
              { id: "c", text: "$\\dfrac16(x^4+1)^{1/2}+C$" },
              { id: "d", text: "$\\dfrac12(x^4+1)^{3/2}+C$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Substitution",
                statement: "With $u=x^4+1$, $du=4x^3\\,dx$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Let $u=x^4+1$, so $\\frac14du=x^3dx$ and the integral becomes $\\frac14\\int u^{1/2}du$.",
                working: "\\frac14\\int u^{1/2}\\,du",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate and substitute back.",
                working:
                  "\\frac14\\cdot\\frac23u^{3/2}=\\frac16(x^4+1)^{3/2}+C",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac16(x^4+1)^{3/2}+C$",
            commonErrors: [
              "Forgetting the factor $\\frac14$ from $du=4x^3dx$.",
              "Integrating $u^{1/2}$ as $u^{-1/2}$.",
            ],
          },
        },
        {
          id: "aahl-u6-substitution-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the exact value of $\\displaystyle\\int_0^1\\frac{1}{x^2+4x+8}\\,dx$. Enter its decimal value to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 0.0987, tolerance: 0.0005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Completing the square",
                statement: "$x^2+4x+8=(x+2)^2+4$",
              },
              {
                kind: "formula",
                name: "Arctan integral",
                statement:
                  "$\\int\\frac1{a^2+u^2}du=\\frac1a\\arctan\\frac ua$",
              },
            ],
            steps: [
              {
                reasoning: "Complete the square in the denominator.",
                working: "x^2+4x+8=(x+2)^2+4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate using the arctan form with $a=2$.",
                working: "\\left[\\frac12\\arctan\\frac{x+2}{2}\\right]_0^1",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Evaluate: $\\frac12\\arctan\\frac32-\\frac12\\arctan1=\\frac12(0.98279-0.78540)\\approx0.0987$.",
                working: "0.0987",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.0987$",
            commonErrors: [
              "Completing the square incorrectly as $(x+4)^2+8$.",
              "Forgetting the factor $\\frac12$.",
            ],
          },
        },
        {
          id: "aahl-u6-substitution-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the exact value of $\\displaystyle\\int_0^1\\frac{x}{x^2+1}\\,dx$. Enter its decimal value to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 0.347, tolerance: 0.0005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Substitution",
                statement: "Let $u=x^2+1$, so $du=2x\\,dx$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The numerator is a constant multiple of the derivative of the denominator.",
                working: "\\frac12\\int_1^2\\frac{1}{u}\\,du",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate.",
                working: "\\frac12\\left[\\ln u\\right]_1^2",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate: $\\frac12\\ln2\\approx0.347$.",
                working: "\\frac12\\ln2\\approx0.3466",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac12\\ln2\\approx0.347$",
            commonErrors: [
              "Using $du=(2x+1)dx$ incorrectly.",
              "Forgetting to halve for $du=2xdx$.",
            ],
          },
        },
        {
          id: "aahl-u6-substitution-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Find the exact value of $\\displaystyle\\int_1^2\\frac{1}{\\sqrt{2x-x^2}}\\,dx$. Give your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 1.57, tolerance: 0.005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Completing the square",
                statement: "$2x-x^2=1-(x-1)^2$",
              },
              {
                kind: "formula",
                name: "Arcsin integral",
                statement:
                  "$\\int\\frac1{\\sqrt{a^2-u^2}}du=\\arcsin\\frac ua$",
              },
            ],
            steps: [
              {
                reasoning: "Rewrite the radicand by completing the square.",
                working: "2x-x^2=-(x^2-2x)=1-(x-1)^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Recognise the arcsin form with $u=x-1$, $a=1$.",
                working: "\\int\\frac{dx}{\\sqrt{1-(x-1)^2}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate.",
                working: "\\left[\\arcsin(x-1)\\right]_1^2",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Evaluate: $\\arcsin1-\\arcsin0=\\frac\\pi2\\approx1.57$.",
                working: "\\frac\\pi2\\approx1.5708",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac\\pi2\\approx1.57$",
            commonErrors: [
              "Writing $2x-x^2$ as $(x-1)^2-1$ (wrong sign).",
              "Using $\\arccos$ instead of $\\arcsin$.",
            ],
          },
        },
        {
          id: "aahl-u6-substitution-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\displaystyle\\int\\frac{1}{9x^2+4}\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac16\\arctan\\dfrac{3x}{2}+C$" },
              { id: "b", text: "$\\dfrac14\\arctan\\dfrac{3x}{2}+C$" },
              { id: "c", text: "$\\dfrac16\\arctan\\dfrac{2x}{3}+C$" },
              { id: "d", text: "$6\\arctan\\dfrac{3x}{2}+C$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Arctan integral",
                statement:
                  "$\\int\\frac{dx}{a^2+b^2x^2}=\\frac1{ab}\\arctan\\frac{bx}{a}$",
              },
            ],
            steps: [
              {
                reasoning: "Write $9x^2+4=4+(3x)^2$, so $a=2$, $b=3$.",
                working: "4+(3x)^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Apply the standard form.",
                working:
                  "\\frac1{2\\cdot3}\\arctan\\frac{3x}{2}+C=\\frac16\\arctan\\frac{3x}{2}+C",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac16\\arctan\\frac{3x}{2}+C$",
            commonErrors: [
              "Using $a=4$ instead of $a=2$.",
              "Swapping the coefficient inside $\\arctan$.",
            ],
          },
        },
        {
          id: "aahl-u6-substitution-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the exact value of $\\displaystyle\\int_0^1\\frac{1}{1+x^2}\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac\\pi4$" },
              { id: "b", text: "$\\dfrac\\pi2$" },
              { id: "c", text: "$1$" },
              { id: "d", text: "$\\dfrac\\pi8$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Arctan integral",
                statement: "$\\int\\frac1{1+x^2}dx=\\arctan x+C$",
              },
            ],
            steps: [
              {
                reasoning: "Integrate.",
                working: "\\left[\\arctan x\\right]_0^1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate: $\\arctan1-\\arctan0=\\frac\\pi4$.",
                working: "\\arctan1=\\frac\\pi4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac\\pi4$",
            commonErrors: [
              "Evaluating $\\arctan0$ as $1$ instead of $0$.",
              "Forgetting to subtract the lower limit.",
            ],
          },
        },
        {
          id: "aahl-u6-substitution-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "Consider $\\displaystyle\\int\\frac{2x+3}{x^2+3x+1}\\,dx$.",
          parts: [
            {
              label: "a",
              prompt: "Show that $\\dfrac{d}{dx}(x^2+3x+1)=2x+3$.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Hence find the indefinite integral.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Hence find $\\displaystyle\\int_0^1\\frac{2x+3}{x^2+3x+1}\\,dx$, giving an exact answer and its value to 3 significant figures.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Substitution",
                statement: "With $u=x^2+3x+1$, $du=(2x+3)dx$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Differentiate term by term.",
                working: "\\frac{d}{dx}(x^2+3x+1)=2x+3\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The integrand is $\\frac{u'}{u}$, which integrates to $\\ln|u|$.",
                working: "\\int\\frac{2x+3}{x^2+3x+1}dx=\\ln|x^2+3x+1|+C",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the constant of integration.",
                working: "+C",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Substitute the limits into $\\ln(x^2+3x+1)$.",
                working: "\\left[\\ln(x^2+3x+1)\\right]_0^1=\\ln5-\\ln1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Simplify using $\\ln1=0$.",
                working: "=\\ln5",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Evaluate.",
                working: "\\ln5\\approx1.61",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) shown. (b) $\\ln|x^2+3x+1|+C$. (c) $\\ln5\\approx1.61$.",
            commonErrors: [
              "Writing $\\ln(x^2+3x+1)$ without checking the denominator stays positive.",
              "Forgetting the lower-limit value $\\ln1=0$.",
            ],
          },
        },
        {
          id: "aahl-u6-substitution-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Let $I=\\displaystyle\\int_0^1\\frac{x+1}{x^2+2x+2}\\,dx$.",
          parts: [
            { label: "a", prompt: "Show that $x^2+2x+2=(x+1)^2+1$.", marks: 1 },
            {
              label: "b",
              prompt:
                "By writing the numerator as a constant multiple of the derivative of the denominator, show that $I=\\dfrac12\\left[\\arctan(x+1)\\right]_0^1$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Hence find the exact value of $I$.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Give $I$ to 3 significant figures.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Completing the square",
                statement: "$x^2+2x+2=(x+1)^2+1$",
              },
              {
                kind: "theorem",
                name: "Substitution",
                statement: "$u=x+1$ gives the arctan form.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Expand $(x+1)^2+1$.",
                working: "(x+1)^2+1=x^2+2x+2\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The derivative of the denominator is $2x+2=2(x+1)$, so the numerator is half of it.",
                working:
                  "\\frac{x+1}{x^2+2x+2}=\\frac12\\cdot\\frac{2x+2}{(x+1)^2+1}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Integrate using the arctan form with $u=x+1$.",
                working:
                  "\\frac12\\int\\frac{2x+2}{(x+1)^2+1}dx=\\frac12\\arctan(x+1)+C",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Apply the limits.",
                working:
                  "I=\\frac12\\left[\\arctan(x+1)\\right]_0^1\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Substitute the limits.",
                working:
                  "\\frac12(\\arctan2-\\arctan1)=\\frac12\\arctan2-\\frac\\pi8",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Simplify using $\\arctan1=\\frac\\pi4$.",
                working: "I=\\frac12\\arctan2-\\frac\\pi8",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Evaluate with $\\arctan2\\approx1.10715$.",
                working: "0.55358-0.39270\\approx0.161.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a)-(b) shown. (c) $\\frac12\\arctan2-\\frac\\pi8$. (d) $0.161$.",
            commonErrors: [
              "Using $\\frac12\\arctan(2x+2)$ instead of $\\frac12\\arctan(x+1)$.",
              "Forgetting the factor $\\frac12$.",
            ],
          },
        },
        {
          id: "aahl-u6-substitution-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Find the exact value of $\\displaystyle\\int_0^1\\frac{1}{x^2+x+1}\\,dx$, giving your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 0.605, tolerance: 0.0005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Completing the square",
                statement: "$x^2+x+1=(x+\\frac12)^2+\\frac34$",
              },
              {
                kind: "formula",
                name: "Arctan integral",
                statement:
                  "$\\int\\frac{dx}{a^2+u^2}=\\frac1a\\arctan\\frac ua$",
              },
            ],
            steps: [
              {
                reasoning: "Complete the square.",
                working: "x^2+x+1=(x+\\tfrac12)^2+\\tfrac34",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate with $a=\\frac{\\sqrt3}{2}$.",
                working:
                  "\\left[\\frac{2}{\\sqrt3}\\arctan\\frac{2x+1}{\\sqrt3}\\right]_0^1",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Evaluate the limits: $\\arctan\\sqrt3=\\frac\\pi3$ and $\\arctan\\frac1{\\sqrt3}=\\frac\\pi6$.",
                working:
                  "\\frac{2}{\\sqrt3}\\left(\\frac\\pi3-\\frac\\pi6\\right)=\\frac{\\pi}{3\\sqrt3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Simplify and evaluate: $\\frac{\\pi\\sqrt3}{9}\\approx0.605$.",
                working: "0.60460",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{\\pi}{3\\sqrt3}\\approx0.605$",
            commonErrors: [
              "Using $\\frac{\\sqrt3}{2}$ as $a$ incorrectly in the prefactor.",
              "Not recognising $\\arctan\\sqrt3=\\frac\\pi3$.",
            ],
          },
        },
        {
          id: "aahl-u6-substitution-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "This question uses the substitution $t=\\tan\\dfrac{x}{2}$ to evaluate $\\displaystyle\\int_0^{\\pi/3}\\frac{dx}{1+\\cos x}$.",
          parts: [
            {
              label: "a",
              prompt: "Show that $\\cos x=\\dfrac{1-t^2}{1+t^2}$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Show that $\\dfrac{dx}{dt}=\\dfrac{2}{1+t^2}$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Hence show that $\\dfrac{1}{1+\\cos x}\\,dx$ simplifies to $dt$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Write down the limits for $t$ when $x=0$ and $x=\\frac\\pi3$.",
              marks: 1,
            },
            {
              label: "e",
              prompt:
                "Hence evaluate $\\displaystyle\\int_0^{\\pi/3}\\frac{dx}{1+\\cos x}$, giving an exact answer.",
              marks: 2,
            },
            {
              label: "f",
              prompt:
                "Use the same substitution to find $\\displaystyle\\int_0^{\\pi/3}\\frac{dx}{(1+\\cos x)^2}$, to 3 significant figures.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Double angle",
                statement: "$\\cos x=\\frac{1-\\tan^2(x/2)}{1+\\tan^2(x/2)}$",
              },
              {
                kind: "formula",
                name: "Derivative of arctan",
                statement: "$\\frac{d}{dt}(2\\arctan t)=\\frac{2}{1+t^2}$",
              },
              {
                kind: "theorem",
                name: "Substitution",
                statement: "Replace integrand, differential and limits by $t$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Use the double-angle formulae for cosine in terms of $\\tan\\frac x2$.",
                working: "\\cos x=\\frac{1-\\tan^2(x/2)}{1+\\tan^2(x/2)}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Substitute $t=\\tan\\frac x2$.",
                working: "\\cos x=\\frac{1-t^2}{1+t^2}\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Since $x=2\\arctan t$, differentiate.",
                working: "\\frac{dx}{dt}=2\\cdot\\frac{1}{1+t^2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Simplify.",
                working: "\\frac{dx}{dt}=\\frac{2}{1+t^2}\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Compute $1+\\cos x=\\frac{2}{1+t^2}$.",
                working:
                  "1+\\cos x=\\frac{(1+t^2)+(1-t^2)}{1+t^2}=\\frac{2}{1+t^2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Divide by $1+\\cos x$ and multiply by $dx/dt$: the integrand becomes $dt$.",
                working:
                  "\\frac{1}{1+\\cos x}\\cdot\\frac{dx}{dt}=\\frac{1+t^2}{2}\\cdot\\frac{2}{1+t^2}=1\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Evaluate $\\tan\\frac x2$ at each endpoint.",
                working:
                  "t=0\\ \\text{and}\\ t=\\tan\\frac\\pi6=\\frac{1}{\\sqrt3}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "The integral is now $\\int_0^{1/\\sqrt3}dt$.",
                working: "\\left[t\\right]_0^{1/\\sqrt3}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning: "Evaluate and rationalise.",
                working: "\\frac{1}{\\sqrt3}=\\frac{\\sqrt3}{3}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "f",
                reasoning:
                  "Similarly $\\frac{1}{(1+\\cos x)^2}\\,dx=\\frac{(1+t^2)^2}{4}\\cdot\\frac{2}{1+t^2}dt=\\frac{1+t^2}{2}dt$.",
                working: "\\int_0^{1/\\sqrt3}\\frac{1+t^2}{2}dt",
                marks: 1,
                markCode: "M",
              },
              {
                part: "f",
                reasoning: "Integrate.",
                working:
                  "\\left[\\frac{t}{2}+\\frac{t^3}{6}\\right]_0^{1/\\sqrt3}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "f",
                reasoning:
                  "Evaluate: $\\frac{1}{2\\sqrt3}+\\frac{1}{18\\sqrt3}=\\frac{5}{9\\sqrt3}\\approx0.320$.",
                working: "0.320",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a)-(d) shown. (e) $\\frac{\\sqrt3}{3}$. (f) $0.320$.",
            commonErrors: [
              "Forgetting to change the limits.",
              "Using $\\cos x=\\frac{1-t^2}{1+t^2}$ without squaring $t$.",
            ],
          },
        },
      ],
    },
    {
      id: "aahl-u6-parts",
      title: "Integration by parts",
      skill:
        "Integrate products using parts, repeated parts and cyclic integrals; derive reduction formulas.",
      lesson: {
        sections: [
          {
            heading: "Choosing u and dv",
            body: "Use $\\int u\\,dv=uv-\\int v\\,du$. Choose $u$ as the factor that simplifies on differentiation (a power of $x$, or $\\ln x$) and $dv$ as the factor you can integrate. For $\\int\\ln x\\,dx$ take $u=\\ln x$, $dv=1\\,dx$.",
          },
          {
            heading: "Repeated and cyclic parts",
            body: "A power $x^n$ times $e^x$, $\\sin x$ or $\\cos x$ needs $n$ applications. For $e^x\\sin x$ two applications return the original integral, so write $I=\\dots-I$ and solve for $I$. A reduction formula comes from one application of parts that links $I_n$ to $I_{n-1}$.",
          },
        ],
        keyFormulas: [
          {
            name: "Integration by parts",
            statement:
              "$\\displaystyle\\int u\\frac{dv}{dx}\\,dx=uv-\\int v\\frac{du}{dx}\\,dx$",
          },
        ],
        workedExample: {
          problem: "Find $\\int xe^x\\,dx$.",
          solution:
            "$u=x$, $\\frac{dv}{dx}=e^x$: $xe^x-\\int e^x\\,dx=(x-1)e^x+C$.",
        },
      },
      questions: [
        {
          id: "aahl-u6-parts-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\displaystyle\\int xe^x\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(x-1)e^x+C$" },
              { id: "b", text: "$(x+1)e^x+C$" },
              { id: "c", text: "$\\dfrac{x^2}{2}e^x+C$" },
              { id: "d", text: "$xe^x-e^x-x+C$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Integration by parts",
                statement: "$\\int u\\,v'\\,dx=uv-\\int u'v\\,dx$",
              },
            ],
            steps: [
              {
                reasoning: "Take $u=x$, $v'=e^x$.",
                working: "xe^x-\\int e^x\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate and factorise.",
                working: "xe^x-e^x+C=(x-1)e^x+C",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)**",
            commonErrors: [
              "Sign error giving $(x+1)e^x$.",
              "Integrating each factor separately.",
            ],
          },
        },
        {
          id: "aahl-u6-parts-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the exact value of $\\displaystyle\\int_1^e x\\ln x\\,dx$. Enter its decimal value to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 2.1, tolerance: 0.005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Integration by parts",
                statement: "Take $u=\\ln x$, $v'=x$.",
              },
            ],
            steps: [
              {
                reasoning: "Apply parts with $u=\\ln x$, $v=\\frac{x^2}2$.",
                working:
                  "\\left[\\frac{x^2}{2}\\ln x\\right]_1^e-\\int_1^e\\frac x2\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate each part.",
                working:
                  "\\frac{e^2}{2}-\\left[\\frac{x^2}{4}\\right]_1^e=\\frac{e^2}2-\\frac{e^2-1}{4}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Simplify.",
                working: "\\frac{e^2+1}{4}\\approx2.10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{e^2+1}{4}\\approx2.10$",
            commonErrors: [
              "Choosing $u=x$ (then $\\int\\ln x$ appears).",
              "Forgetting the lower-limit contribution $\\frac14$.",
            ],
          },
        },
        {
          id: "aahl-u6-parts-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Find $\\displaystyle\\int_0^{\\pi/2}e^x\\cos x\\,dx$, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 1.91, tolerance: 0.005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Integration by parts",
                statement: "Apply twice to obtain a cyclic equation in $I$.",
              },
            ],
            steps: [
              {
                reasoning: "First application.",
                working:
                  "I=\\left[e^x\\sin x\\right]_0^{\\pi/2}-\\int_0^{\\pi/2}e^x\\sin x\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Second application on the remaining integral.",
                working:
                  "\\int_0^{\\pi/2}e^x\\sin x\\,dx=\\left[-e^x\\cos x\\right]_0^{\\pi/2}+I=1+I",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute: $I=e^{\\pi/2}-(1+I)$.",
                working: "2I=e^{\\pi/2}-1",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Solve.",
                working: "I=\\frac{e^{\\pi/2}-1}{2}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate with $e^{\\pi/2}\\approx4.8105$.",
                working: "\\approx1.91",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{e^{\\pi/2}-1}{2}\\approx1.91$",
            commonErrors: [
              "Sign error in the second application.",
              "Forgetting the boundary term $1$.",
            ],
          },
        },
        {
          id: "aahl-u6-parts-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "For integers $n\\ge0$ let $I_n=\\displaystyle\\int_0^1x^ne^x\\,dx$.",
          parts: [
            {
              label: "a",
              prompt:
                "Find $I_0$, and use integration by parts to show that $I_1=1$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Show that $I_n=e-nI_{n-1}$ for $n\\ge1$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Hence find $I_2$, $I_3$ and $I_4$ in exact form.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "By considering the range of $e^x$ on $[0,1]$, show that $\\dfrac1{n+1}<I_n<\\dfrac e{n+1}$.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Hence show that $I_n\\to0$ as $n\\to\\infty$, and deduce that $nI_{n-1}\\to e$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Integration by parts",
                statement: "$\\int uv'=uv-\\int u'v$",
              },
              {
                kind: "property",
                name: "Bounds on integrals",
                statement: "If $g(x)<h(x)$ on $[a,b]$ then $\\int g<\\int h$.",
              },
              {
                kind: "theorem",
                name: "Squeeze theorem",
                statement:
                  "If $a_n<I_n<b_n$ and $a_n,b_n\\to0$ then $I_n\\to0$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Direct integration.",
                working: "I_0=\\int_0^1e^x\\,dx=e-1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Parts with $u=x$: $I_1=[xe^x]_0^1-I_0=e-(e-1)=1$.",
                working: "I_1=1\\ \\text{(AG)}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Parts with $u=x^n$, $v'=e^x$.",
                working:
                  "I_n=\\left[x^ne^x\\right]_0^1-\\int_0^1nx^{n-1}e^x\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Evaluate the boundary term (the lower value is $0$ for $n\\ge1$).",
                working: "\\left[x^ne^x\\right]_0^1=e",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Identify the remaining integral as $nI_{n-1}$.",
                working: "I_n=e-nI_{n-1}\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Apply the recurrence with $I_1=1$.",
                working: "I_2=e-2(1)=e-2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Next.",
                working: "I_3=e-3(e-2)=6-2e",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Next.",
                working: "I_4=e-4(6-2e)=9e-24",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "On $(0,1]$, $1<e^x<e$ for $x>0$, so $x^n<x^ne^x<ex^n$ for $0<x\\le1$.",
                working: "\\int_0^1x^n<I_n<e\\int_0^1x^n",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Evaluate $\\int_0^1x^n\\,dx=\\frac1{n+1}$.",
                working: "\\frac1{n+1}<I_n<\\frac e{n+1}\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "Both bounds tend to $0$, so by the squeeze theorem $I_n\\to0$.",
                working: "I_n\\to0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "From (b), $nI_{n-1}=e-I_n\\to e-0$.",
                working: "nI_{n-1}\\to e",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $I_0=e-1$, $I_1=1$. (c) $e-2$, $6-2e$, $9e-24$. (e) $I_n\\to0$, $nI_{n-1}\\to e$.",
            commonErrors: [
              "Writing the boundary term as $e-1$.",
              "Applying the recurrence at $n=0$.",
            ],
            examinerNote:
              "Check: $I_4=9e-24\\approx0.4645$, which lies between $0.2$ and $0.544$.",
          },
        },
        {
          id: "aahl-u6-parts-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\displaystyle\\int x\\cos x\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x\\sin x+\\cos x+C$" },
              { id: "b", text: "$x\\sin x-\\cos x+C$" },
              { id: "c", text: "$-x\\cos x+\\sin x+C$" },
              { id: "d", text: "$x\\cos x-\\sin x+C$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Integration by parts",
                statement: "$\\int u\\,v'\\,dx=uv-\\int u'v\\,dx$",
              },
            ],
            steps: [
              {
                reasoning: "Take $u=x$, $v'=\\cos x$, so $v=\\sin x$.",
                working: "x\\sin x-\\int\\sin x\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate $-\\int\\sin x\\,dx=\\cos x$.",
                working: "x\\sin x+\\cos x+C",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $x\\sin x+\\cos x+C$",
            commonErrors: [
              "Sign error giving $x\\sin x-\\cos x$.",
              "Choosing $u=\\cos x$ (which makes the integral harder).",
            ],
          },
        },
        {
          id: "aahl-u6-parts-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\displaystyle\\int\\ln x\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x\\ln x-x+C$" },
              { id: "b", text: "$x\\ln x+x+C$" },
              { id: "c", text: "$\\frac{(\\ln x)^2}{2}+C$" },
              { id: "d", text: "$x\\ln x-1+C$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Integration by parts",
                statement: "Take $u=\\ln x$, $dv=dx$.",
              },
            ],
            steps: [
              {
                reasoning: "Apply parts with $u=\\ln x$, $v=x$.",
                working: "x\\ln x-\\int x\\cdot\\frac1x\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify the remaining integral.",
                working: "x\\ln x-\\int1\\,dx=x\\ln x-x+C",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $x\\ln x-x+C$",
            commonErrors: [
              "Writing $\\int\\ln x\\,dx$ as $\\ln x$ times $x$ without subtracting the second term.",
              "Sign error on the $-x$.",
            ],
          },
        },
        {
          id: "aahl-u6-parts-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the exact value of $\\displaystyle\\int_0^1 xe^{2x}\\,dx$. Enter its decimal value to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 2.1, tolerance: 0.005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Integration by parts",
                statement: "Take $u=x$, $v'=e^{2x}$.",
              },
            ],
            steps: [
              {
                reasoning: "Apply parts.",
                working:
                  "\\left[\\frac{x e^{2x}}{2}\\right]_0^1-\\int_0^1\\frac{e^{2x}}{2}\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate the remaining term and evaluate.",
                working:
                  "\\frac{e^2}{2}-\\frac14\\left[e^{2x}\\right]_0^1=\\frac{e^2}{2}-\\frac{e^2-1}{4}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Simplify.",
                working: "\\frac{e^2+1}{4}\\approx2.10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{e^2+1}{4}\\approx2.10$",
            commonErrors: [
              "Using $v=e^{2x}$ instead of $v=\\frac12e^{2x}$.",
              "Losing the lower-limit contribution.",
            ],
          },
        },
        {
          id: "aahl-u6-parts-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the exact value of $\\displaystyle\\int_0^\\pi x\\sin x\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\pi$" },
              { id: "b", text: "$0$" },
              { id: "c", text: "$2\\pi$" },
              { id: "d", text: "$\\frac{\\pi}{2}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Integration by parts",
                statement: "Take $u=x$, $v'=\\sin x$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Apply parts: $\\left[-x\\cos x\\right]_0^\\pi+\\int_0^\\pi\\cos x\\,dx$.",
                working: "-x\\cos x\\Big|_0^\\pi+[\\sin x]_0^\\pi",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate: $\\pi+0-0=\\pi$.",
                working: "\\pi",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\pi$",
            commonErrors: [
              "Evaluating $-x\\cos x$ at $x=\\pi$ as $+\\pi$ then subtracting incorrectly.",
              "Forgetting the $+\\int\\cos x$ term (which vanishes anyway).",
            ],
          },
        },
        {
          id: "aahl-u6-parts-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the exact value of $\\displaystyle\\int_0^{\\pi/2}x\\cos x\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{\\pi}{2}-1$" },
              { id: "b", text: "$1-\\frac{\\pi}{2}$" },
              { id: "c", text: "$\\frac{\\pi}{2}+1$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Integration by parts",
                statement: "Take $u=x$, $v'=\\cos x$.",
              },
            ],
            steps: [
              {
                reasoning: "Apply parts: antiderivative $x\\sin x+\\cos x$.",
                working: "\\left[x\\sin x+\\cos x\\right]_0^{\\pi/2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evaluate: $\\left(\\frac\\pi2+0\\right)-\\left(0+1\\right)=\\frac\\pi2-1$.",
                working: "\\frac\\pi2-1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac{\\pi}{2}-1$",
            commonErrors: [
              "Sign error on the lower limit $\\cos0=1$.",
              "Writing $\\frac\\pi2+1$.",
            ],
          },
        },
        {
          id: "aahl-u6-parts-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the exact value of $\\displaystyle\\int_1^e\\frac{\\ln x}{x^2}\\,dx$. Enter its decimal value to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 0.264, tolerance: 0.0005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Integration by parts",
                statement: "Take $u=\\ln x$, $v'=-x^{-2}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Apply parts with $u=\\ln x$, $dv=x^{-2}dx$, $v=-x^{-1}$.",
                working:
                  "\\left[-\\frac{\\ln x}{x}\\right]_1^e+\\int_1^e\\frac{1}{x^2}\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate both terms.",
                working: "-\\frac1e-\\left(-\\frac{1}{e}+1\\right)",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Simplify: $1-\\frac2e\\approx0.264$.",
                working: "1-\\frac2e\\approx0.2642",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1-\\frac2e\\approx0.264$",
            commonErrors: [
              "Wrong sign on the boundary term.",
              "Forgetting the contribution from the lower limit $x=1$.",
            ],
          },
        },
        {
          id: "aahl-u6-parts-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find $\\displaystyle\\int e^x\\sin x\\,dx$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{e^x}{2}(\\sin x-\\cos x)+C$" },
              { id: "b", text: "$\\frac{e^x}{2}(\\sin x+\\cos x)+C$" },
              { id: "c", text: "$e^x(\\sin x-\\cos x)+C$" },
              { id: "d", text: "$\\frac{e^x}{2}(\\cos x-\\sin x)+C$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Integration by parts",
                statement: "Two applications produce a cyclic integral.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Apply parts twice; the integral reappears with a minus sign.",
                working: "I=e^x\\sin x-e^x\\cos x-I+2C",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve for $I$.",
                working:
                  "2I=e^x(\\sin x-\\cos x)\\Rightarrow I=\\frac{e^x}{2}(\\sin x-\\cos x)+C",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac{e^x}{2}(\\sin x-\\cos x)+C$",
            commonErrors: [
              "Sign error producing $\\sin x+\\cos x$.",
              "Forgetting to halve after solving the cyclic equation.",
            ],
          },
        },
        {
          id: "aahl-u6-parts-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Find the exact value of $\\displaystyle\\int_0^\\pi e^x\\sin x\\,dx$. Give your answer to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 12.1, tolerance: 0.05 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Integration by parts",
                statement: "Apply twice to obtain a cyclic equation in $I$.",
              },
            ],
            steps: [
              {
                reasoning: "First application with $u=\\sin x$.",
                working:
                  "I=\\left[-e^x\\cos x\\right]_0^\\pi+\\int_0^\\pi e^x\\cos x\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Second application on the remaining integral.",
                working:
                  "\\int_0^\\pi e^x\\cos x\\,dx=\\left[e^x\\sin x\\right]_0^\\pi-I=-I",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combine: $I=e^\\pi+1-I$.",
                working: "2I=e^\\pi+1",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Solve.",
                working: "I=\\frac{e^\\pi+1}{2}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate with $e^\\pi\\approx23.1407$.",
                working: "\\approx12.1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{e^\\pi+1}{2}\\approx12.1$",
            commonErrors: [
              "Sign error in the cyclic step.",
              "Evaluating $\\left[-e^x\\cos x\\right]_0^\\pi$ as $e^\\pi-1$ instead of $e^\\pi+1$.",
            ],
          },
        },
        {
          id: "aahl-u6-parts-q13",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Find the exact value of $\\displaystyle\\int_1^e(\\ln x)^2\\,dx$. Enter its decimal value to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 0.718, tolerance: 0.0005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Integration by parts",
                statement: "Take $u=(\\ln x)^2$, $dv=dx$.",
              },
            ],
            steps: [
              {
                reasoning: "First application.",
                working: "\\left[x(\\ln x)^2\\right]_1^e-2\\int_1^e\\ln x\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Boundary term: $e\\cdot1-1\\cdot0=e$.",
                working: "e-2\\int_1^e\\ln x\\,dx",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Integrate $\\ln x$ by parts: $[x\\ln x-x]_1^e=1$.",
                working: "e-2(1)=e-2",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate.",
                working: "e-2\\approx0.718",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$e-2\\approx0.718$",
            commonErrors: [
              "Differentiating $(\\ln x)^2$ as $2\\ln x$ instead of $\\frac{2\\ln x}{x}$.",
              "Forgetting the $-x$ inside $\\int\\ln x\\,dx$.",
            ],
          },
        },
        {
          id: "aahl-u6-parts-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Consider $\\displaystyle\\int_0^1x^2e^{-x}\\,dx$.",
          parts: [
            {
              label: "a",
              prompt:
                "Use integration by parts to show that $\\displaystyle\\int x^2e^{-x}\\,dx=-x^2e^{-x}+2\\int xe^{-x}\\,dx$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Apply integration by parts again to find an antiderivative of $x^2e^{-x}$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Hence find the exact value of the definite integral.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Give the value to 3 significant figures.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Integration by parts",
                statement: "$\\int u\\,v'\\,dx=uv-\\int u'v\\,dx$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Take $u=x^2$, $v'=-e^{-x}$, so $v=-e^{-x}$.",
                working: "\\int x^2e^{-x}dx=-x^2e^{-x}+2\\int xe^{-x}dx",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State the result.",
                working: "\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Apply parts to $\\int xe^{-x}dx$: $-xe^{-x}+\\int e^{-x}dx$.",
                working: "\\int xe^{-x}dx=-xe^{-x}-e^{-x}+C",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Combine and simplify.",
                working: "-x^2e^{-x}-2xe^{-x}-2e^{-x}+C",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Factorise.",
                working: "-e^{-x}(x^2+2x+2)+C",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Evaluate at the limits $0$ and $1$.",
                working: "\\left[-e^{-x}(x^2+2x+2)\\right]_0^1=-\\frac{5}{e}+2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Simplify.",
                working: "2-\\frac5e",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Evaluate.",
                working: "2-1.83940\\approx0.161",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a)-(b) shown. (c) $2-\\frac5e$. (d) $0.161$.",
            commonErrors: [
              "Losing a factor of $2$ in the second application.",
              "Sign error in the antiderivative of $e^{-x}$.",
            ],
          },
        },
        {
          id: "aahl-u6-parts-q15",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "For integers $n\\ge0$ let $I_n=\\displaystyle\\int_0^1\\frac{x^n}{1+x}\\,dx$.",
          parts: [
            { label: "a", prompt: "Find $I_0$ and $I_1$.", marks: 2 },
            {
              label: "b",
              prompt: "Show that $I_n+I_{n-1}=\\dfrac1n$ for $n\\ge1$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Hence find $I_2$ and $I_3$ in exact form.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "By considering the range of $\\frac1{1+x}$ on $[0,1]$, show that $\\dfrac{1}{2(n+1)}<I_n<\\dfrac1{n+1}$.",
              marks: 3,
            },
            {
              label: "e",
              prompt:
                "Deduce that $I_n\\to0$ as $n\\to\\infty$, and hence show that $nI_{n-1}\\to1$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Partial fractions style split",
                statement: "$\\frac{x^n}{1+x}=x^{n-1}-\\frac{x^{n-1}}{1+x}$",
              },
              {
                kind: "property",
                name: "Bounds on integrals",
                statement: "If $g<h$ on $[a,b]$ then $\\int g<\\int h$.",
              },
              {
                kind: "theorem",
                name: "Squeeze theorem",
                statement:
                  "If $a_n<I_n<b_n$ and both bounds tend to $0$ then $I_n\\to0$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Direct integration.",
                working: "I_0=\\int_0^1\\frac{dx}{1+x}=\\ln2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "Write $\\frac{x}{1+x}=1-\\frac1{1+x}$ and integrate.",
                working: "I_1=\\left[x-\\ln(1+x)\\right]_0^1=1-\\ln2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Split $\\frac{x^n}{1+x}=x^{n-1}-\\frac{x^{n-1}}{1+x}$ and integrate both sides.",
                working: "I_n=\\int_0^1x^{n-1}dx-I_{n-1}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate $\\int_0^1x^{n-1}dx=\\frac1n$.",
                working: "I_n=\\frac1n-I_{n-1}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Rearrange.",
                working: "I_n+I_{n-1}=\\frac1n\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Apply the recurrence with $I_1=1-\\ln2$.",
                working: "I_2=\\frac12-(1-\\ln2)=\\ln2-\\frac12",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Apply again.",
                working: "I_3=\\frac13-I_2=\\frac56-\\ln2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "On $[0,1]$, $\\frac12\\le\\frac1{1+x}\\le1$, so $\\frac{x^n}{2}\\le\\frac{x^n}{1+x}\\le x^n$.",
                working: "\\frac12\\int_0^1x^n<I_n<\\int_0^1x^n",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Evaluate $\\int_0^1x^n dx=\\frac1{n+1}$.",
                working: "\\frac{1}{2(n+1)}<I_n<\\frac1{n+1}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "State both bounds tend to $0$.",
                working: "\\text{both bounds}\\to0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "By the squeeze theorem $I_n\\to0$.",
                working: "I_n\\to0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "From (b), $nI_{n-1}=1-nI_n\\to1-0$.",
                working: "nI_{n-1}\\to1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\ln2$, $1-\\ln2$. (c) $\\ln2-\\frac12$, $\\frac56-\\ln2$. (e) $I_n\\to0$, $nI_{n-1}\\to1$.",
            commonErrors: [
              "Splitting $\\frac{x^n}{1+x}$ incorrectly.",
              "Claiming $\\frac1{1+x}\\ge1$ on $[0,1]$.",
            ],
            examinerNote:
              "Check: $I_2=\\ln2-0.5\\approx0.193$ and $I_3=0.5+0.1667-0.6931\\approx-0.026$? No: $\\frac56-\\ln2\\approx0.140$.",
          },
        },
        {
          id: "aahl-u6-parts-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 10,
          stem: "For integers $n\\ge0$ let $L_n=\\displaystyle\\int_0^1x^n\\ln x\\,dx$.",
          parts: [
            {
              label: "a",
              prompt: "Evaluate $L_0$ and $L_1$ directly.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Use integration by parts to show that $L_n=-\\dfrac{1}{(n+1)^2}$ for all $n\\ge0$.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Hence find $\\displaystyle\\int_0^1x^2\\ln x\\,dx$ and $\\displaystyle\\int_0^1x^3\\ln x\\,dx$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Find the exact value of $\\displaystyle\\int_0^1x^2(1+x)\\ln x\\,dx$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Integration by parts",
                statement: "$\\int u\\,v'\\,dx=uv-\\int u'v\\,dx$",
              },
              {
                kind: "property",
                name: "Limit at 0",
                statement: "$\\lim_{x\\to0^+}x^a\\ln x=0$ for $a>0$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Integrate directly: $\\int_0^1\\ln x\\,dx=[x\\ln x-x]_0^1$.",
                working: "L_0=-1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "Similarly $\\int_0^1x\\ln x\\,dx=[\\frac{x^2}{2}\\ln x]_0^1-\\frac12\\int_0^1x\\,dx$.",
                working: "L_1=-\\frac14",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Take $u=\\ln x$, $dv=x^n dx$, so $v=\\frac{x^{n+1}}{n+1}$.",
                working:
                  "L_n=\\left[\\frac{x^{n+1}}{n+1}\\ln x\\right]_0^1-\\frac1{n+1}\\int_0^1x^n\\,dx",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The boundary term at $x=1$ is $0$ and at $x=0$ tends to $0$.",
                working: "\\left[\\frac{x^{n+1}}{n+1}\\ln x\\right]_0^1=0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Evaluate $\\int_0^1x^n dx=\\frac1{n+1}$.",
                working: "L_n=-\\frac{1}{(n+1)^2}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "State the result.",
                working: "L_n=-\\frac{1}{(n+1)^2}\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Apply the formula with $n=2$.",
                working: "L_2=-\\frac19",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Apply with $n=3$.",
                working: "L_3=-\\frac1{16}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Split: $L_2+L_3$.",
                working: "-\\frac19-\\frac1{16}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Combine over a common denominator $144$.",
                working: "-\\frac{16+9}{144}=-\\frac{25}{144}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $-1$, $-\\frac14$. (c) $-\\frac19$, $-\\frac1{16}$. (d) $-\\frac{25}{144}$.",
            commonErrors: [
              "Evaluating $x^{n+1}\\ln x$ at $x=0$ as $0$ without justification.",
              "Forgetting that $\\frac{d}{dx}\\ln x=\\frac1x$.",
            ],
          },
        },
      ],
    },
  ],
};
