import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "aahl-u6-lesson-6-3",
  code: "6-3",
  title: "Maclaurin Series",
  goal: "I CAN build Maclaurin series from the definition and from standard series, and use them for approximations, limits and series solutions of differential equations.",
  standards: ["AHL 5.19"],
  vocabulary: [
    {
      term: "Maclaurin series",
      definition:
        "$f(x)=f(0)+f'(0)x+\\frac{f''(0)}{2!}x^2+\\frac{f'''(0)}{3!}x^3+\\cdots$",
    },
    {
      term: "Standard series",
      definition:
        "Known Maclaurin series such as $e^x$, $\\sin x$, $\\cos x$, $\\ln(1+x)$ and $(1+x)^n$, usable by substitution.",
    },
    {
      term: "Radius of convergence",
      definition:
        "The range of $x$ for which the series converges to the function; for $\\ln(1+x)$ it is $-1<x\\le1$.",
    },
    {
      term: "Truncation",
      definition:
        "Using only the first few terms of a series to approximate a function near $x=0$.",
    },
    {
      term: "Series solution",
      definition:
        "A solution of a differential equation written as a power series whose coefficients come from successive derivatives at the initial point.",
    },
    {
      term: "Alternating series",
      definition:
        "A series whose terms alternate in sign; the error after truncation is smaller than the first omitted term when terms decrease.",
    },
  ],
  concepts: [
    {
      id: "aahl-u6-maclaurin-construction",
      title: "Constructing Maclaurin series",
      skill:
        "Find Maclaurin series from the definition, and from standard series using substitution, products and integration.",
      lesson: {
        sections: [
          {
            heading: "From the definition",
            body: "Compute $f(0)$, $f'(0)$, $f''(0),\\dots$ and divide each by the factorial of the order. This always works but gets long, so use known series wherever possible.",
          },
          {
            heading: "Building new series",
            body: "Standard series: $e^x=1+x+\\frac{x^2}{2!}+\\cdots$, $\\sin x=x-\\frac{x^3}{3!}+\\frac{x^5}{5!}-\\cdots$, $\\cos x=1-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\cdots$, $\\ln(1+x)=x-\\frac{x^2}2+\\frac{x^3}3-\\cdots$. Substitute for $x$ (for example $e^{-x^2}$), multiply two series and collect powers up to the required order, or integrate a series term by term.",
          },
        ],
        keyFormulas: [
          {
            name: "Maclaurin series",
            statement:
              "$f(x)=\\displaystyle\\sum_{r=0}^\\infty\\frac{f^{(r)}(0)}{r!}x^r$",
          },
          {
            name: "Standard series",
            statement:
              "$e^x=\\sum\\frac{x^r}{r!},\\quad \\sin x=\\sum\\frac{(-1)^rx^{2r+1}}{(2r+1)!},\\quad \\cos x=\\sum\\frac{(-1)^rx^{2r}}{(2r)!}$",
          },
        ],
        workedExample: {
          problem: "Find the Maclaurin series of $e^{2x}$ up to $x^3$.",
          solution:
            "Replace $x$ by $2x$: $1+2x+\\frac{(2x)^2}{2}+\\frac{(2x)^3}{6}=1+2x+2x^2+\\frac43x^3$.",
        },
      },
      questions: [
        {
          id: "aahl-u6-maclaurin-construction-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Write down the Maclaurin series for $e^{2x}$ up to and including the term in $x^2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1+2x+2x^2$" },
              { id: "b", text: "$1+2x+x^2$" },
              { id: "c", text: "$1+2x+4x^2$" },
              { id: "d", text: "$2+2x+2x^2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Series for e^x",
                statement: "$e^u=1+u+\\frac{u^2}{2!}+\\cdots$",
              },
            ],
            steps: [
              {
                reasoning: "Substitute $u=2x$.",
                working: "1+2x+\\frac{(2x)^2}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify.",
                working: "1+2x+2x^2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $1+2x+2x^2$",
            commonErrors: [
              "Forgetting to divide by $2!$ (option c).",
              "Forgetting to square the 2 (option b).",
            ],
          },
        },
        {
          id: "aahl-u6-maclaurin-construction-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "By multiplying the Maclaurin series for $e^x$ and $\\sin x$, find the coefficient of $x^3$ in the series for $e^x\\sin x$.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Coefficient of $x^3$",
                answer: 0.3333,
                tolerance: 0.001,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Standard series",
                statement:
                  "$e^x=1+x+\\frac{x^2}2+\\frac{x^3}6$, $\\sin x=x-\\frac{x^3}6$",
              },
            ],
            steps: [
              {
                reasoning: "Write both series to the needed order.",
                working:
                  "\\left(1+x+\\frac{x^2}2+\\cdots\\right)\\left(x-\\frac{x^3}6+\\cdots\\right)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$x^3$ arises from $1\\cdot\\left(-\\frac{x^3}6\\right)$ and $\\frac{x^2}{2}\\cdot x$.",
                working: "-\\frac16+\\frac12",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "\\frac13",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac13$",
            commonErrors: ["Missing the cross term $\\frac{x^2}2\\cdot x$."],
          },
        },
        {
          id: "aahl-u6-maclaurin-construction-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 5,
          stem: "Let $f(x)=e^{\\sin x}$. Use the definition of the Maclaurin series to find the coefficients of $x^2$ and $x^3$ in its expansion.",
          response: {
            type: "numeric",
            parts: [
              { label: "Coefficient of $x^2$", answer: 0.5 },
              { label: "Coefficient of $x^3$", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Maclaurin coefficient",
                statement: "Coefficient of $x^r$ is $\\frac{f^{(r)}(0)}{r!}$.",
              },
            ],
            steps: [
              {
                reasoning: "First derivative by the chain rule.",
                working: "f'(x)=\\cos x\\,e^{\\sin x},\\quad f'(0)=1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Second derivative by the product rule.",
                working: "f''(x)=(\\cos^2x-\\sin x)e^{\\sin x},\\quad f''(0)=1",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Coefficient of $x^2$.",
                working: "\\frac{1}{2!}=\\frac12",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Third derivative.",
                working:
                  "f'''(x)=\\left(-2\\cos x\\sin x-\\cos x+(\\cos^2x-\\sin x)\\cos x\\right)e^{\\sin x}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Substitute $x=0$: $-0-1+1=0$, so the coefficient of $x^3$ is $0$.",
                working: "f'''(0)=0",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac12$ and $0$",
            commonErrors: [
              "Omitting a term when differentiating the product in $f'''$.",
            ],
            examinerNote:
              "The series is $1+x+\\frac{x^2}2-\\frac{x^4}8+\\cdots$.",
          },
        },
        {
          id: "aahl-u6-maclaurin-construction-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "Let $f(x)=\\arctan x$. This question investigates how a Maclaurin series can be used to approximate $\\pi$.",
          parts: [
            {
              label: "a",
              prompt:
                "Given $f'(x)=\\dfrac1{1+x^2}$, find $f''(0)$ and $f'''(0)$, and hence show that the Maclaurin series of $f$ begins $x-\\dfrac{x^3}{3}+\\cdots$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "By expanding $\\dfrac{1}{1+x^2}$ as a series in powers of $x^2$ and integrating term by term, show that $\\arctan x=x-\\dfrac{x^3}3+\\dfrac{x^5}5-\\dfrac{x^7}7+\\cdots$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Write down the general term of the series in (b), and deduce a series for $\\pi$ using $x=1$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Show that $\\arctan\\frac12+\\arctan\\frac13=\\frac\\pi4$.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Use the first three non-zero terms of the series in (b) for each of $\\arctan\\frac12$ and $\\arctan\\frac13$ to estimate $\\pi$, to 3 significant figures.",
              marks: 2,
            },
            {
              label: "f",
              prompt:
                "Use the first three non-zero terms of the series in (c) to estimate $\\pi$, to 3 significant figures, and comment on the accuracy compared with (e).",
              marks: 1,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              {
                label: "(e) estimate of $\\pi$",
                answer: 3.15,
                tolerance: 0.005,
              },
              {
                label: "(f) estimate of $\\pi$",
                answer: 3.47,
                tolerance: 0.005,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Maclaurin series",
                statement: "Coefficient of $x^r$ is $\\frac{f^{(r)}(0)}{r!}$.",
              },
              {
                kind: "formula",
                name: "Geometric series",
                statement: "$\\frac{1}{1+u}=1-u+u^2-u^3+\\cdots$",
              },
              {
                kind: "formula",
                name: "Tangent addition",
                statement:
                  "$\\tan(A+B)=\\frac{\\tan A+\\tan B}{1-\\tan A\\tan B}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Differentiate $f'=(1+x^2)^{-1}$.",
                working: "f''(x)=-2x(1+x^2)^{-2}\\Rightarrow f''(0)=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Differentiate again with the product rule; at $x=0$ only $-2(1+x^2)^{-2}$ survives.",
                working: "f'''(0)=-2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "With $f(0)=0$, $f'(0)=1$: coefficient of $x^3$ is $\\frac{-2}{6}$.",
                working: "x-\\frac{x^3}3+\\cdots\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Substitute $u=x^2$.",
                working: "\\frac1{1+x^2}=1-x^2+x^4-x^6+\\cdots",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Integrate term by term, with $\\arctan0=0$.",
                working:
                  "\\arctan x=x-\\frac{x^3}3+\\frac{x^5}5-\\frac{x^7}7+\\cdots\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Identify the pattern: odd powers with alternating signs.",
                working: "\\frac{(-1)^rx^{2r+1}}{2r+1},\\ r=0,1,2,\\dots",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Put $x=1$ using $\\arctan1=\\frac\\pi4$.",
                working:
                  "\\pi=4\\left(1-\\frac13+\\frac15-\\frac17+\\cdots\\right)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Take the tangent of the sum with $\\tan A=\\frac12$, $\\tan B=\\frac13$.",
                working:
                  "\\tan(A+B)=\\frac{\\frac12+\\frac13}{1-\\frac16}=\\frac{5/6}{5/6}=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Both angles are acute and the sum is less than $\\frac\\pi2$, so $A+B=\\arctan1=\\frac\\pi4$.",
                working: "A+B=\\frac\\pi4",
                marks: 1,
                markCode: "R",
              },
              {
                part: "e",
                reasoning: "Evaluate each arctan with three terms.",
                working:
                  "\\arctan\\tfrac12\\approx\\tfrac12-\\tfrac1{24}+\\tfrac1{160}=0.46458,\\quad \\arctan\\tfrac13\\approx\\tfrac13-\\tfrac1{81}+\\tfrac1{1215}=0.32181",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning: "Sum and multiply by 4.",
                working: "\\pi\\approx4(0.78639)\\approx3.15",
                marks: 1,
                markCode: "A",
              },
              {
                part: "f",
                reasoning:
                  "$4\\left(1-\\frac13+\\frac15\\right)=3.47$, much further from $\\pi\\approx3.14$; the terms for $x=1$ decrease slowly, whereas for $\\frac12$ and $\\frac13$ they shrink rapidly.",
                working: "3.47",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a)-(d) shown. (e) $3.15$. (f) $3.47$, less accurate.",
            commonErrors: [
              "Using degrees for arctan.",
              "Forgetting to multiply by 4 for $\\pi$.",
            ],
            examinerNote:
              "The three-term estimate in (e) is $3.1456$, which rounds to $3.15$; the true value is $3.1416$.",
          },
        },
        {
          id: "aahl-u6-maclaurin-construction-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Write down the Maclaurin series for $\\cos 2x$ up to and including the term in $x^2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1-2x^2$" },
              { id: "b", text: "$1-\\frac{x^2}{2}$" },
              { id: "c", text: "$1-4x^2$" },
              { id: "d", text: "$1-2x^2+\\frac{2x^4}{3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Series for cos u",
                statement:
                  "$\\cos u=1-\\frac{u^2}{2!}+\\frac{u^4}{4!}-\\cdots$",
              },
            ],
            steps: [
              {
                reasoning: "Substitute $u=2x$.",
                working: "1-\\frac{(2x)^2}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify.",
                working: "1-2x^2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $1-2x^2$",
            commonErrors: [
              "Forgetting to square the $2$ (option c).",
              "Keeping $\\frac{(2x)^2}{2}$ unsimplified (option b).",
            ],
          },
        },
        {
          id: "aahl-u6-maclaurin-construction-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Write down the Maclaurin series for $\\ln(1+x)$ up to and including the term in $x^3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x-\\frac{x^2}{2}+\\frac{x^3}{3}$" },
              { id: "b", text: "$x+\\frac{x^2}{2}+\\frac{x^3}{3}$" },
              { id: "c", text: "$x-\\frac{x^2}{2}-\\frac{x^3}{3}$" },
              { id: "d", text: "$1+x-\\frac{x^2}{2}+\\frac{x^3}{3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Series for ln(1+x)",
                statement:
                  "$\\ln(1+x)=x-\\frac{x^2}{2}+\\frac{x^3}{3}-\\cdots$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Recall the standard series; signs alternate starting positive.",
                working: "x-\\frac{x^2}{2}+\\frac{x^3}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check denominators increase by $1$.",
                working: "x-\\frac{x^2}{2}+\\frac{x^3}{3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $x-\\frac{x^2}{2}+\\frac{x^3}{3}$",
            commonErrors: [
              "All-positive signs (option b).",
              "Including a constant term $1$.",
            ],
          },
        },
        {
          id: "aahl-u6-maclaurin-construction-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the coefficient of $x^2$ in the Maclaurin series for $e^{3x}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Coefficient", answer: 4.5, tolerance: 0.0005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Series for e^u",
                statement: "$e^u=1+u+\\frac{u^2}{2!}+\\cdots$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Substitute $u=3x$: the $x^2$ term is $\\frac{(3x)^2}{2!}$.",
                working: "\\frac{9x^2}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Read off the coefficient.",
                working: "\\frac92=4.5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac92=4.5$",
            commonErrors: [
              "Writing $3x^2$ instead of $\\frac{(3x)^2}{2}$.",
              "Forgetting to divide by $2!$.",
            ],
          },
        },
        {
          id: "aahl-u6-maclaurin-construction-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the coefficient of $x^2$ in the Maclaurin series for $e^x\\sin x$, by multiplying the series for $e^x$ and $\\sin x$.",
          response: {
            type: "numeric",
            parts: [{ label: "Coefficient", answer: 1, tolerance: 0.0005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Standard series",
                statement:
                  "$e^x=1+x+\\frac{x^2}{2}+\\cdots$, $\\sin x=x-\\frac{x^3}{6}+\\cdots$",
              },
            ],
            steps: [
              {
                reasoning: "Write both series to the required order.",
                working:
                  "\\left(1+x+\\frac{x^2}{2}+\\cdots\\right)\\left(x-\\frac{x^3}{6}+\\cdots\\right)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The only contribution to $x^2$ is $x\\cdot x$ (the $\\frac{x^2}{2}$ term needs a constant term from $\\sin x$, which is $0$).",
                working: "x\\cdot x=x^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Coefficient is $1$.",
                working: "1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1$",
            commonErrors: [
              "Including $\\frac{x^2}{2}\\cdot0$ incorrectly or missing the $x\\cdot x$ term.",
            ],
          },
        },
        {
          id: "aahl-u6-maclaurin-construction-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Write down the Maclaurin series for $\\dfrac{1}{1-x}$ up to and including the term in $x^3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1+x+x^2+x^3$" },
              { id: "b", text: "$1-x+x^2-x^3$" },
              { id: "c", text: "$1+x+2x^2+3x^3$" },
              { id: "d", text: "$x+x^2+x^3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Geometric series",
                statement: "$\\frac{1}{1-x}=1+x+x^2+x^3+\\cdots$ for $|x|<1$",
              },
            ],
            steps: [
              {
                reasoning: "Recall the geometric series.",
                working: "1+x+x^2+x^3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All coefficients are $1$ with positive signs.",
                working: "1+x+x^2+x^3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $1+x+x^2+x^3$",
            commonErrors: [
              "Alternating signs (option b).",
              "Omitting the constant term (option d).",
            ],
          },
        },
        {
          id: "aahl-u6-maclaurin-construction-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Find the coefficient of $x^4$ in the Maclaurin series for $\\ln(1+x^2)$.",
          response: {
            type: "numeric",
            parts: [{ label: "Coefficient", answer: -0.5, tolerance: 0.0005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Series for ln(1+u)",
                statement:
                  "$\\ln(1+u)=u-\\frac{u^2}{2}+\\frac{u^3}{3}-\\cdots$ with $u=x^2$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Substitute $u=x^2$: $\\ln(1+x^2)=x^2-\\frac{x^4}{2}+\\frac{x^6}{3}-\\cdots$.",
                working: "x^2-\\frac{x^4}{2}+\\frac{x^6}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Read off the coefficient of $x^4$.",
                working: "-\\frac12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-\\frac12$",
            commonErrors: [
              "Forgetting that odd powers of $x$ are absent.",
              "Using $-\\frac14$ (squaring the denominator wrongly).",
            ],
          },
        },
        {
          id: "aahl-u6-maclaurin-construction-q11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Write down the Maclaurin series for $e^{-x}$ up to and including the term in $x^3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1-x+\\frac{x^2}{2}-\\frac{x^3}{6}$" },
              { id: "b", text: "$1+x+\\frac{x^2}{2}+\\frac{x^3}{6}$" },
              { id: "c", text: "$1-x-\\frac{x^2}{2}-\\frac{x^3}{6}$" },
              { id: "d", text: "$-1+x-\\frac{x^2}{2}+\\frac{x^3}{6}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Series for e^u",
                statement:
                  "$e^u=1+u+\\frac{u^2}{2!}+\\frac{u^3}{3!}+\\cdots$ with $u=-x$",
              },
            ],
            steps: [
              {
                reasoning: "Substitute $u=-x$.",
                working: "1-x+\\frac{x^2}{2}-\\frac{x^3}{6}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check the alternating signs.",
                working: "1-x+\\frac{x^2}{2}-\\frac{x^3}{6}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $1-x+\\frac{x^2}{2}-\\frac{x^3}{6}$",
            commonErrors: [
              "All-positive signs (option b).",
              "Wrong sign on the constant term (option d).",
            ],
          },
        },
        {
          id: "aahl-u6-maclaurin-construction-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Find the coefficient of $x^3$ in the Maclaurin series for $\\sin x\\cos x$, by using the identity $\\sin x\\cos x=\\frac12\\sin 2x$ or by multiplying series.",
          response: {
            type: "numeric",
            parts: [{ label: "Coefficient", answer: -0.667, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Series for sin u",
                statement: "$\\sin u=u-\\frac{u^3}{6}+\\cdots$",
              },
            ],
            steps: [
              {
                reasoning: "Use $\\sin x\\cos x=\\frac12\\sin2x$.",
                working: "\\frac12\\sin2x",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Substitute $u=2x$: $\\frac12\\left(2x-\\frac{(2x)^3}{6}+\\cdots\\right)$.",
                working: "x-\\frac{8x^3}{12}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Simplify the $x^3$ coefficient.",
                working: "-\\frac{8}{12}=-\\frac23",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Give the decimal value.",
                working: "-\\frac23\\approx-0.667",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-\\frac23\\approx-0.667$",
            commonErrors: [
              "Forgetting the factor $\\frac12$ from the identity.",
              "Computing $\\frac{(2x)^3}{6}$ as $\\frac{2x^3}{6}$.",
            ],
          },
        },
        {
          id: "aahl-u6-maclaurin-construction-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 6,
          stem: "This question derives the Maclaurin series for $\\ln(1+x)$ from a geometric series.",
          parts: [
            {
              label: "a",
              prompt:
                "Write down the Maclaurin series for $\\dfrac{1}{1+x}$, valid for $|x|<1$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Integrate the series term by term, using $\\ln(1+0)=0$, to obtain a series for $\\ln(1+x)$.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "State the values of $x$ for which the resulting series is valid.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Geometric series",
                statement: "$\\frac{1}{1+x}=1-x+x^2-x^3+\\cdots$",
              },
              {
                kind: "theorem",
                name: "Term-by-term integration",
                statement:
                  "Power series may be integrated within their radius of convergence.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Use the geometric series with ratio $-x$.",
                working: "\\frac{1}{1+x}=1-x+x^2-x^3+\\cdots",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State the validity condition.",
                working: "|x|<1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Integrate each term.",
                working:
                  "x-\\frac{x^2}{2}+\\frac{x^3}{3}-\\frac{x^4}{4}+\\cdots",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Include the constant: since $\\ln(1+0)=0$ the constant is $0$.",
                working: "+C=0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "State the series.",
                working: "\\ln(1+x)=x-\\frac{x^2}{2}+\\frac{x^3}{3}-\\cdots",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The series converges for $-1<x\\le1$ (at $x=1$ it is the alternating harmonic series).",
                working: "-1<x\\le1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $1-x+x^2-x^3+\\cdots$. (b) $\\ln(1+x)=x-\\frac{x^2}{2}+\\frac{x^3}{3}-\\cdots$. (c) $-1<x\\le1$.",
            commonErrors: [
              "Wrong signs after integration.",
              "Forgetting the constant of integration is $0$.",
            ],
          },
        },
        {
          id: "aahl-u6-maclaurin-construction-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Write down the Maclaurin series for $e^x\\cos x$ up to and including the term in $x^3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1+x-\\frac{x^3}{3}$" },
              { id: "b", text: "$1+x+\\frac{x^3}{3}$" },
              { id: "c", text: "$1+x+x^2-\\frac{x^3}{3}$" },
              { id: "d", text: "$1-x-\\frac{x^3}{3}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Standard series",
                statement:
                  "$e^x=1+x+\\frac{x^2}{2}+\\frac{x^3}{6}$, $\\cos x=1-\\frac{x^2}{2}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply and collect powers: $x^2$ coefficient is $\\frac12-\\frac12=0$; $x^3$ coefficient is $\\frac16-\\frac12=-\\frac13$.",
                working: "1+x+0x^2-\\frac{x^3}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the series.",
                working: "1+x-\\frac{x^3}{3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $1+x-\\frac{x^3}{3}$",
            commonErrors: [
              "Including an $x^2$ term.",
              "Sign error on the $x^3$ coefficient.",
            ],
          },
        },
        {
          id: "aahl-u6-maclaurin-construction-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "This question finds the Maclaurin series for $\\ln(1+x^2)$ using a geometric series and term-by-term integration.",
          parts: [
            {
              label: "a",
              prompt:
                "Write down the Maclaurin series for $\\dfrac{1}{1+x^2}$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Multiply your answer by $2x$ and integrate term by term to obtain a series for $\\ln(1+x^2)$.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Write down the first three non-zero terms of the series.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Geometric series",
                statement: "$\\frac{1}{1+x^2}=1-x^2+x^4-x^6+\\cdots$",
              },
              {
                kind: "theorem",
                name: "Term-by-term integration",
                statement:
                  "Power series may be integrated within their radius of convergence.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Use the geometric series with ratio $-x^2$.",
                working: "\\frac{1}{1+x^2}=1-x^2+x^4-x^6+\\cdots",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State validity.",
                working: "|x|<1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Multiply by $2x$: $\\frac{2x}{1+x^2}=2x-2x^3+2x^5-\\cdots$.",
                working: "2x-2x^3+2x^5-2x^7+\\cdots",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Note $\\frac{d}{dx}\\ln(1+x^2)=\\frac{2x}{1+x^2}$.",
                working: "\\frac{d}{dx}\\ln(1+x^2)=\\frac{2x}{1+x^2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Integrate term by term; constant is $0$ since $\\ln(1+0)=0$.",
                working:
                  "\\ln(1+x^2)=x^2-\\frac{x^4}{2}+\\frac{x^6}{3}-\\cdots",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "State the general term pattern.",
                working: "\\frac{(-1)^{r+1}x^{2r}}{r}\\ (r\\ge1)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "List the first three terms.",
                working: "x^2-\\frac{x^4}{2}+\\frac{x^6}{3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $1-x^2+x^4-x^6+\\cdots$. (b) $\\ln(1+x^2)=x^2-\\frac{x^4}{2}+\\frac{x^6}{3}-\\cdots$. (c) $x^2-\\frac{x^4}{2}+\\frac{x^6}{3}$.",
            commonErrors: [
              "Multiplying by $x$ instead of $2x$.",
              "Forgetting the factor $2$ in $\\frac{2x}{1+x^2}$.",
            ],
          },
        },
        {
          id: "aahl-u6-maclaurin-construction-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "This question builds the Maclaurin series for $f(x)=\\sqrt{1+x}$ and uses it to approximate $\\sqrt{1.1}$.",
          parts: [
            {
              label: "a",
              prompt: "Find $f(0)$, $f'(0)$, $f''(0)$ and $f'''(0)$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Hence write down the Maclaurin series of $f$ up to and including the term in $x^3$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Use the first four terms of your series to estimate $\\sqrt{1.1}$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Find the coefficient of $x^4$ and use the five-term series to re-estimate $\\sqrt{1.1}$.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "The exact value is $\\sqrt{1.1}\\approx1.04881$. Comment on the accuracy of your estimates.",
              marks: 1,
            },
            {
              label: "f",
              prompt: "State the range of $x$ for which the series converges.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(c) estimate", answer: 1.0488, tolerance: 0.0001 },
              { label: "(d) estimate", answer: 1.0488, tolerance: 0.0001 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Maclaurin series",
                statement: "$f(x)=\\sum\\frac{f^{(r)}(0)}{r!}x^r$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Compute derivatives of $(1+x)^{1/2}$.",
                working:
                  "f'(x)=\\frac12(1+x)^{-1/2},\\ f''(x)=-\\frac14(1+x)^{-3/2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Differentiate again.",
                working: "f'''(x)=\\frac38(1+x)^{-5/2}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "Evaluate at $x=0$: $f(0)=1$, $f'(0)=\\frac12$, $f''(0)=-\\frac14$, $f'''(0)=\\frac38$.",
                working: "1,\\ \\tfrac12,\\ -\\tfrac14,\\ \\tfrac38",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Divide by factorials: $1+\\frac12x-\\frac18x^2+\\frac1{16}x^3$.",
                working: "1+\\frac{x}{2}-\\frac{x^2}{8}+\\frac{x^3}{16}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the series.",
                working:
                  "1+\\frac{x}{2}-\\frac{x^2}{8}+\\frac{x^3}{16}+\\cdots",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Substitute $x=0.1$.",
                working: "1+0.05-0.00125+0.0000625",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Sum.",
                working: "\\approx1.04881",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Differentiate once more: $f^{(4)}(x)=-\\frac{15}{16}(1+x)^{-7/2}$, so $f^{(4)}(0)=-\\frac{15}{16}$ and the coefficient is $-\\frac{15}{384}=-\\frac5{128}$.",
                working: "-\\frac{5}{128}x^4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Add $-\\frac5{128}(0.1)^4=-3.9\\times10^{-6}$; the estimate barely changes.",
                working: "1.0488125-0.0000039\\approx1.04881",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "Both estimates agree with $\\sqrt{1.1}\\approx1.04881$ to 5 s.f.; the series converges quickly for small $x$.",
                working: "\\text{error}\\approx10^{-6}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "f",
                reasoning:
                  "The binomial series for $(1+x)^{1/2}$ converges for $-1<x\\le1$ (absolutely for $|x|<1$).",
                working: "-1<x\\le1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "f",
                reasoning: "State the radius/interval.",
                working: "|x|<1\\ \\text{(and converges at }x=1\\text{)}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(b) $1+\\frac{x}{2}-\\frac{x^2}{8}+\\frac{x^3}{16}$. (c), (d) $\\approx1.04881$. (f) $-1<x\\le1$.",
            commonErrors: [
              "Forgetting factorials when converting derivatives to coefficients.",
              "Using $x=1.1$ instead of $x=0.1$.",
            ],
          },
        },
      ],
    },
    {
      id: "aahl-u6-series-applications",
      title: "Series for limits, approximations and differential equations",
      skill:
        "Use Maclaurin series to evaluate limits, approximate integrals and solve differential equations as series.",
      lesson: {
        sections: [
          {
            heading: "Limits and approximations",
            body: "For a $\\frac00$ limit as $x\\to0$, replace each function by its series, cancel the common power of $x$, then let $x\\to0$. To approximate a definite integral that has no elementary antiderivative, integrate the truncated series term by term. For alternating series the error is smaller than the first omitted term.",
          },
          {
            heading: "Series solutions of differential equations",
            body: "Given $y'=g(x,y)$ and $y(0)=y_0$, differentiate the equation repeatedly and evaluate at $x=0$ to obtain $y(0),y'(0),y''(0),\\dots$, then write the Maclaurin series. The result should match the analytic solution when one exists.",
          },
        ],
        keyFormulas: [
          {
            name: "Limits via series",
            statement:
              "$\\lim_{x\\to0}\\frac{f(x)}{x^k}=$ coefficient of $x^k$ in the series of $f$ when lower coefficients vanish",
          },
        ],
        workedExample: {
          problem: "Find $\\lim_{x\\to0}\\frac{1-\\cos x}{x^2}$.",
          solution:
            "$1-\\cos x=\\frac{x^2}2-\\frac{x^4}{24}+\\cdots$. Dividing by $x^2$ gives $\\frac12-\\frac{x^2}{24}+\\cdots\\to\\frac12$.",
        },
      },
      questions: [
        {
          id: "aahl-u6-series-applications-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Use the Maclaurin series for $\\cos x$ to evaluate $\\displaystyle\\lim_{x\\to0}\\frac{1-\\cos x}{x^2}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac12$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$0$" },
              { id: "d", text: "$2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Series for cos x",
                statement: "$\\cos x=1-\\frac{x^2}{2}+\\frac{x^4}{24}-\\cdots$",
              },
            ],
            steps: [
              {
                reasoning: "Substitute the series.",
                working:
                  "\\frac{x^2/2-x^4/24+\\cdots}{x^2}=\\frac12-\\frac{x^2}{24}+\\cdots",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Let $x\\to0$.",
                working: "\\frac12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac12$",
            commonErrors: ["Dropping the factor $\\frac1{2!}$."],
          },
        },
        {
          id: "aahl-u6-series-applications-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Use Maclaurin series to evaluate $\\displaystyle\\lim_{x\\to0}\\frac{\\sin x-x}{x^3}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Limit", answer: -0.1667, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Series for sin x",
                statement: "$\\sin x=x-\\frac{x^3}6+\\frac{x^5}{120}-\\cdots$",
              },
            ],
            steps: [
              {
                reasoning: "Subtract $x$ from the series.",
                working: "\\sin x-x=-\\frac{x^3}6+\\frac{x^5}{120}-\\cdots",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by $x^3$.",
                working: "-\\frac16+\\frac{x^2}{120}-\\cdots",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Let $x\\to0$.",
                working: "-\\frac16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-\\frac16$",
            commonErrors: [
              "Sign error: the $x^3$ term in $\\sin x$ is negative.",
            ],
          },
        },
        {
          id: "aahl-u6-series-applications-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Use the first three non-zero terms of the Maclaurin series for $e^{-x^2}$ to estimate $\\displaystyle\\int_0^{0.5}e^{-x^2}\\,dx$, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Estimate", answer: 0.461, tolerance: 0.0005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Series for e^u",
                statement: "$e^u=1+u+\\frac{u^2}2+\\cdots$ with $u=-x^2$.",
              },
            ],
            steps: [
              {
                reasoning: "Substitute $u=-x^2$.",
                working: "e^{-x^2}\\approx1-x^2+\\frac{x^4}2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate term by term.",
                working:
                  "\\left[x-\\frac{x^3}3+\\frac{x^5}{10}\\right]_0^{0.5}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute $0.5$.",
                working: "0.5-\\frac{0.125}{3}+\\frac{0.03125}{10}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "0.5-0.041667+0.003125\\approx0.461",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.461$",
            commonErrors: ["Integrating $\\frac{x^4}{2}$ as $\\frac{x^5}{2}$."],
          },
        },
        {
          id: "aahl-u6-series-applications-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "Consider the differential equation $\\dfrac{dy}{dx}=x+y$ with $y(0)=1$.",
          parts: [
            {
              label: "a",
              prompt:
                "By differentiating the equation, find the values of $y'(0)$, $y''(0)$ and $y'''(0)$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Hence find the Maclaurin series for $y$ up to and including the term in $x^4$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Use your series to estimate $y(0.2)$, to 3 significant figures.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "The exact solution is $y=2e^x-x-1$. Show that its Maclaurin series agrees with your answer to (b).",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [{ label: "(c) $y(0.2)$", answer: 1.24, tolerance: 0.005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Maclaurin series",
                statement: "$y=\\sum\\frac{y^{(r)}(0)}{r!}x^r$",
              },
              {
                kind: "formula",
                name: "Series for e^x",
                statement: "$e^x=1+x+\\frac{x^2}2+\\cdots$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Evaluate the equation at $x=0$.",
                working: "y'(0)=0+1=1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Differentiate the equation: $y''=1+y'$.",
                working: "y''(0)=1+1=2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Differentiate again: $y'''=y''$.",
                working: "y'''(0)=2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Also $y^{(4)}=y'''$, so $y^{(4)}(0)=2$. Divide by factorials.",
                working:
                  "y=1+x+\\frac{2x^2}{2}+\\frac{2x^3}{6}+\\frac{2x^4}{24}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Simplify.",
                working: "1+x+x^2+\\frac{x^3}3+\\frac{x^4}{12}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Substitute $x=0.2$.",
                working: "1+0.2+0.04+0.002667+0.000133",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Sum.",
                working: "\\approx1.2428\\approx1.24",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Expand $2e^x$.",
                working: "2e^x=2+2x+x^2+\\frac{x^3}3+\\frac{x^4}{12}+\\cdots",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Subtract $x+1$.",
                working:
                  "2e^x-x-1=1+x+x^2+\\frac{x^3}3+\\frac{x^4}{12}+\\cdots",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "This matches (b) term by term.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $1,2,2$. (b) $1+x+x^2+\\frac{x^3}3+\\frac{x^4}{12}$. (c) $1.24$. (d) shown.",
            commonErrors: [
              "Using $y''(0)=1$ by forgetting to include $y'$.",
              "Forgetting to divide by factorials.",
            ],
            examinerNote: "The exact value $2e^{0.2}-1.2=1.24281$.",
          },
        },
        {
          id: "aahl-u6-series-applications-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Use the Maclaurin series for $e^x$ to evaluate $\\displaystyle\\lim_{x\\to0}\\frac{e^x-1}{x}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$0$" },
              { id: "c", text: "$e$" },
              { id: "d", text: "$\\infty$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Series for e^x",
                statement: "$e^x=1+x+\\frac{x^2}{2}+\\cdots$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subtract $1$ and divide by $x$: $\\frac{x+\\frac{x^2}{2}+\\cdots}{x}=1+\\frac{x}{2}+\\cdots$.",
                working: "1+\\frac{x}{2}+\\frac{x^2}{6}+\\cdots",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Let $x\\to0$.",
                working: "1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $1$",
            commonErrors: ["Including the constant term $1$ in the numerator."],
          },
        },
        {
          id: "aahl-u6-series-applications-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Use the Maclaurin series for $e^x$ to evaluate $\\displaystyle\\lim_{x\\to0}\\frac{e^{3x}-1}{x}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$3$" },
              { id: "c", text: "$\\frac13$" },
              { id: "d", text: "$0$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Series for e^u",
                statement: "$e^{3x}=1+3x+\\frac{(3x)^2}{2}+\\cdots$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subtract $1$ and divide by $x$: $\\frac{3x+\\frac{9x^2}{2}+\\cdots}{x}=3+\\frac{9x}{2}+\\cdots$.",
                working: "3+\\frac{9x}{2}+\\cdots",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Let $x\\to0$.",
                working: "3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $3$",
            commonErrors: [
              "Using the series for $e^x$ without substituting $3x$ (answer $1$).",
            ],
          },
        },
        {
          id: "aahl-u6-series-applications-q7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Use the Maclaurin series for $\\ln(1+x)$ to evaluate $\\displaystyle\\lim_{x\\to0}\\frac{\\ln(1+x)}{x}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Limit", answer: 1, tolerance: 0.0005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Series for ln(1+x)",
                statement: "$\\ln(1+x)=x-\\frac{x^2}{2}+\\cdots$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Divide the series by $x$: $1-\\frac{x}{2}+\\cdots$.",
                working: "1-\\frac{x}{2}+\\frac{x^2}{3}-\\cdots",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Let $x\\to0$.",
                working: "1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1$",
            commonErrors: ["Using $\\ln x$ instead of $\\ln(1+x)$."],
          },
        },
        {
          id: "aahl-u6-series-applications-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Use the Maclaurin series for $\\sqrt{1+x}$ to evaluate $\\displaystyle\\lim_{x\\to0}\\frac{\\sqrt{1+x}-1}{x}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac12$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$0$" },
              { id: "d", text: "$2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Series for sqrt(1+x)",
                statement:
                  "$\\sqrt{1+x}=1+\\frac{x}{2}-\\frac{x^2}{8}+\\cdots$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subtract $1$ and divide by $x$: $\\frac{\\frac{x}{2}-\\frac{x^2}{8}+\\cdots}{x}=\\frac12-\\frac{x}{8}+\\cdots$.",
                working: "\\frac12-\\frac{x}{8}+\\cdots",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Let $x\\to0$.",
                working: "\\frac12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\frac12$",
            commonErrors: ["Forgetting the $-1$ in the numerator."],
          },
        },
        {
          id: "aahl-u6-series-applications-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Use the Maclaurin series for $e^x$ to evaluate $\\displaystyle\\lim_{x\\to0}\\frac{e^{2x}-1-2x}{x^2}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$\\frac12$" },
              { id: "d", text: "$4$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Series for e^u",
                statement: "$e^{2x}=1+2x+\\frac{(2x)^2}{2}+\\cdots$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Subtract $1+2x$ and divide by $x^2$: $\\frac{\\frac{(2x)^2}{2}+\\cdots}{x^2}=2+\\cdots$.",
                working: "2+\\frac{4x}{3}+\\cdots",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Let $x\\to0$.",
                working: "2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** $2$",
            commonErrors: [
              "Stopping after the linear term and getting $\\frac00$.",
            ],
          },
        },
        {
          id: "aahl-u6-series-applications-q10",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Use the first three non-zero terms of the Maclaurin series for $\\cos(x^2)$ to estimate $\\displaystyle\\int_0^{0.5}\\cos(x^2)\\,dx$, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Estimate", answer: 0.497, tolerance: 0.0005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Series for cos u",
                statement:
                  "$\\cos u=1-\\frac{u^2}{2}+\\frac{u^4}{24}-\\cdots$ with $u=x^2$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Substitute $u=x^2$: $\\cos(x^2)=1-\\frac{x^4}{2}+\\frac{x^8}{24}-\\cdots$.",
                working: "1-\\frac{x^4}{2}+\\frac{x^8}{24}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate term by term.",
                working:
                  "\\left[x-\\frac{x^5}{10}+\\frac{x^9}{216}\\right]_0^{0.5}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute $0.5$.",
                working: "0.5-\\frac{0.03125}{10}+\\frac{0.001953}{216}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate: $0.5-0.003125+0.000009\\approx0.497$.",
                working: "0.49688\\approx0.497",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.497$",
            commonErrors: [
              "Writing $\\cos(x^2)=1-\\frac{x^2}{2}$ (not squaring $x$).",
              "Integrating $\\frac{x^4}{2}$ as $\\frac{x^5}{2}$.",
            ],
          },
        },
        {
          id: "aahl-u6-series-applications-q11",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Use the first four terms of the Maclaurin series for $e^{-x^2}$ (i.e. up to the term in $x^6$) to estimate $\\displaystyle\\int_0^1e^{-x^2}\\,dx$, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Estimate", answer: 0.743, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Series for e^u",
                statement:
                  "$e^{-x^2}=1-x^2+\\frac{x^4}{2}-\\frac{x^6}{6}+\\cdots$",
              },
            ],
            steps: [
              {
                reasoning: "Substitute $u=-x^2$ in the exponential series.",
                working: "1-x^2+\\frac{x^4}{2}-\\frac{x^6}{6}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate term by term from $0$ to $1$.",
                working:
                  "\\left[x-\\frac{x^3}{3}+\\frac{x^5}{10}-\\frac{x^7}{42}\\right]_0^1",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate: $1-\\frac13+\\frac1{10}-\\frac1{42}$.",
                working: "\\frac{156}{210}\\approx0.7429",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "State the estimate (note the true value $\\approx0.7468$; the error comes from truncation).",
                working: "0.743",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.743$",
            commonErrors: [
              "Wrong signs in $e^{-x^2}$.",
              "Integrating $\\frac{x^6}{6}$ as $\\frac{x^7}{6}$.",
            ],
          },
        },
        {
          id: "aahl-u6-series-applications-q12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "The alternating harmonic series $\\ln 2=1-\\frac12+\\frac13-\\frac14+\\cdots$ is truncated after the term $\\frac{(-1)^{n+1}}{n}$. Which statement about the error is correct?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The error has magnitude less than $\\frac{1}{n+1}$.",
              },
              {
                id: "b",
                text: "The error has magnitude less than $\\frac{1}{n}$.",
              },
              {
                id: "c",
                text: "The error has magnitude less than $\\frac{2}{n+1}$.",
              },
              {
                id: "d",
                text: "The error cannot be bounded without more terms.",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Alternating series error",
                statement:
                  "For a decreasing alternating series, the error is smaller than the first omitted term.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The first omitted term is $\\frac{(-1)^{n+2}}{n+1}$, with magnitude $\\frac1{n+1}$; the error is smaller than this.",
                working: "|\\text{error}|<\\frac1{n+1}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Select the correct bound.",
                working: "\\frac1{n+1}",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "**(a)** error $<\\frac1{n+1}$",
            commonErrors: [
              "Using $\\frac1n$ (the last included term) as the bound.",
            ],
          },
        },
        {
          id: "aahl-u6-series-applications-q13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Use the first three non-zero terms of the Maclaurin series for $\\sin x$ to estimate $\\displaystyle\\int_0^{0.5}\\sin x\\,dx$, to 3 significant figures.",
          response: {
            type: "numeric",
            parts: [{ label: "Estimate", answer: 0.122, tolerance: 0.0005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Series for sin x",
                statement:
                  "$\\sin x=x-\\frac{x^3}{6}+\\frac{x^5}{120}-\\cdots$",
              },
            ],
            steps: [
              {
                reasoning: "Write the truncated series.",
                working: "x-\\frac{x^3}{6}+\\frac{x^5}{120}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Integrate term by term.",
                working:
                  "\\left[\\frac{x^2}{2}-\\frac{x^4}{24}+\\frac{x^6}{720}\\right]_0^{0.5}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute $0.5$: $0.125-0.0026042+0.0000217$.",
                working: "0.12242",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "\\approx0.122",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.122$",
            commonErrors: [
              "Integrating $\\frac{x^3}{6}$ as $\\frac{x^3}{6}$ (forgetting the power rule).",
              "Using the exact $1-\\cos0.5$ instead of the series estimate.",
            ],
          },
        },
        {
          id: "aahl-u6-series-applications-q14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Consider the differential equation $\\dfrac{dy}{dx}=y+x^2$ with $y(0)=0$.",
          parts: [
            {
              label: "a",
              prompt:
                "By repeatedly differentiating the equation, find $y'(0)$, $y''(0)$ and $y'''(0)$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Hence find the Maclaurin series for $y$ up to and including the term in $x^4$.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Use your series to estimate $y(0.2)$, to 3 significant figures.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Maclaurin series",
                statement: "$y=\\sum\\frac{y^{(r)}(0)}{r!}x^r$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Evaluate the equation at $x=0$: $y'(0)=0+0=0$.",
                working: "y'(0)=0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Differentiate: $y''=y'+2x$, so $y''(0)=0$.",
                working: "y''(0)=0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Differentiate again: $y'''=y''+2$, so $y'''(0)=2$.",
                working: "y'''(0)=2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Also $y^{(4)}=y'''$, so $y^{(4)}(0)=2$. Divide by factorials.",
                working: "y=\\frac{2x^3}{6}+\\frac{2x^4}{24}+\\cdots",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Simplify (lower-order terms vanish).",
                working: "y=\\frac{x^3}{3}+\\frac{x^4}{12}+\\cdots",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "State the series including the zero terms.",
                working: "y=\\frac{x^3}{3}+\\frac{x^4}{12}+\\cdots",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Substitute $x=0.2$.",
                working: "\\frac{0.008}{3}+\\frac{0.0016}{12}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Sum: $0.002667+0.000133\\approx0.00280$.",
                working: "0.00280",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $0,0,2$. (b) $\\frac{x^3}{3}+\\frac{x^4}{12}+\\cdots$. (c) $0.00280$.",
            commonErrors: [
              "Writing $y'(0)=0$ but then using $y'(0)=x$ incorrectly.",
              "Forgetting factorials in the coefficients.",
            ],
            examinerNote:
              "The exact solution is $y=2e^x-x^2-2x-2$; its series begins $\\frac{x^3}{3}+\\frac{x^4}{12}+\\cdots$.",
          },
        },
        {
          id: "aahl-u6-series-applications-q15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "This question uses Maclaurin series to evaluate two limits.",
          parts: [
            {
              label: "a",
              prompt:
                "Use the series for $e^x$ to show that $\\displaystyle\\lim_{x\\to0}\\frac{e^x-1-x}{x^2}=\\frac12$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Use the series for $e^x$ and $\\cos x$ to show that $\\displaystyle\\lim_{x\\to0}\\frac{1-\\cos x-\\frac{x^2}{2}}{x^4}=-\\frac1{24}$.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Hence find $\\displaystyle\\lim_{x\\to0}\\frac{e^{x^2}-1-x^2}{x^4}$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Series for e^x",
                statement:
                  "$e^x=1+x+\\frac{x^2}{2}+\\frac{x^3}{6}+\\frac{x^4}{24}+\\cdots$",
              },
              {
                kind: "formula",
                name: "Series for cos x",
                statement: "$\\cos x=1-\\frac{x^2}{2}+\\frac{x^4}{24}-\\cdots$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Subtract $1+x$ from the series.",
                working: "e^x-1-x=\\frac{x^2}{2}+\\frac{x^3}{6}+\\cdots",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Divide by $x^2$.",
                working: "\\frac12+\\frac{x}{6}+\\cdots",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Let $x\\to0$.",
                working: "\\frac12\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Subtract $\\frac{x^2}{2}$ from $1-\\cos x$: the $x^2$ terms cancel, leaving $-\\frac{x^4}{24}+\\cdots$.",
                working: "1-\\cos x-\\frac{x^2}{2}=-\\frac{x^4}{24}+\\cdots",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Write the full expansion.",
                working:
                  "\\left(\\frac{x^2}{2}-\\frac{x^4}{24}\\right)-\\frac{x^2}{2}=-\\frac{x^4}{24}+\\frac{x^6}{720}-\\cdots",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Divide by $x^4$.",
                working: "-\\frac1{24}+\\frac{x^2}{720}-\\cdots",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Let $x\\to0$.",
                working: "-\\frac1{24}\\ \\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Set $u=x^2$ in the result of (a): $\\frac{e^{x^2}-1-x^2}{x^4}=\\frac{e^u-1-u}{u^2}$.",
                working: "\\frac{e^u-1-u}{u^2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "As $x\\to0$, $u\\to0$, so the limit is $\\frac12$.",
                working: "\\frac12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $\\frac12$. (b) $-\\frac1{24}$. (c) $\\frac12$.",
            commonErrors: [
              "Stopping the series too early (getting $\\frac00$).",
              "Sign error in the $x^4$ coefficient of $\\cos x$.",
            ],
          },
        },
        {
          id: "aahl-u6-series-applications-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "Consider the differential equation $\\dfrac{dy}{dx}=x+y^2$ with $y(0)=0$.",
          parts: [
            {
              label: "a",
              prompt:
                "By repeatedly differentiating the equation, find the values of $y'(0)$, $y''(0)$, $y'''(0)$, $y^{(4)}(0)$ and $y^{(5)}(0)$.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Hence find the Maclaurin series for $y$ up to and including the term in $x^5$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Use your series to estimate $y(0.2)$, to 4 significant figures.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Use Euler's method with step $h=0.1$ to estimate $y(0.2)$, and compare it with your answer to (c).",
              marks: 3,
            },
            {
              label: "e",
              prompt:
                "State, with a reason, whether the Euler estimate is an over- or under-estimate.",
              marks: 1,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(c) series estimate", answer: 0.02, tolerance: 0.0001 },
              { label: "(d) Euler estimate", answer: 0.02, tolerance: 0.0001 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Maclaurin series",
                statement: "$y=\\sum\\frac{y^{(r)}(0)}{r!}x^r$",
              },
              {
                kind: "formula",
                name: "Euler's method",
                statement: "$y_{n+1}=y_n+h\\,f(x_n,y_n)$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Evaluate the equation at $x=0$: $y'(0)=0$.",
                working: "y'(0)=0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Differentiate: $y''=1+2yy'$, so $y''(0)=1$.",
                working: "y''(0)=1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "Differentiate: $y'''=2(y')^2+2yy''$, so $y'''(0)=0$.",
                working: "y'''(0)=0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning:
                  "Differentiate twice more: $y^{(4)}=6y'y''+2yy'''$ gives $y^{(4)}(0)=0$; $y^{(5)}=6(y'')^2+8y'y'''+2yy^{(4)}$ gives $y^{(5)}(0)=6$.",
                working: "y^{(4)}(0)=0,\\ y^{(5)}(0)=6",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Divide by factorials: only $x^2$ and $x^5$ terms survive.",
                working: "y=\\frac{x^2}{2}+\\frac{6x^5}{120}+\\cdots",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Simplify.",
                working: "y=\\frac{x^2}{2}+\\frac{x^5}{20}+\\cdots",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Substitute $x=0.2$: $\\frac{0.04}{2}+\\frac{0.00032}{20}$.",
                working: "0.02+0.000016",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Sum.",
                working: "0.020016\\approx0.02002",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Euler steps: $y_1=0+0.1(0+0)=0$; $y_2=0+0.1(0.1+0)=0.01$; $y_3=0.01+0.1(0.1+0.0001)=0.01+0.01001=0.02001$.",
                working: "y_3=0.02001",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Compare with (c): $0.02001$ vs $0.02002$; the two estimates agree to 4 s.f.",
                working: "0.02001\\ \\text{vs}\\ 0.02002",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "State both values.",
                working: "0.02001\\ \\text{and}\\ 0.02002",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "The Euler value $0.02001$ is slightly below the series value $0.02002$: an underestimate of about $10^{-5}$ for this step size.",
                working: "\\text{underestimate}",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(b) $\\frac{x^2}{2}+\\frac{x^5}{20}+\\cdots$. (c) $0.02002$. (d) Euler $\\approx0.02001$. (e) slight underestimate.",
            commonErrors: ["Differentiating $y^2$ as $2y$ instead of $2yy'$."],
            examinerNote:
              "Series gives $y(0.2)\\approx0.020016$; Euler with $h=0.1$ gives $0.02001$, agreeing to 4 s.f.",
          },
        },
      ],
    },
  ],
};
