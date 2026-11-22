import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "aahl-u5-lesson-5-2",
  code: "5-2",
  title: "Further Derivatives",
  goal: "I CAN differentiate reciprocal and inverse trigonometric, exponential and logarithmic functions, and use implicit differentiation.",
  standards: ["AHL 5.15", "AHL 5.14"],
  vocabulary: [
    {
      term: "Chain rule",
      definition: "$\\frac{d}{dx}f(g(x))=f'(g(x))\\,g'(x)$.",
    },
    { term: "Product rule", definition: "$\\frac{d}{dx}(uv)=u'v+uv'$." },
    {
      term: "Quotient rule",
      definition:
        "$\\frac{d}{dx}\\left(\\frac uv\\right)=\\frac{u'v-uv'}{v^2}$.",
    },
    {
      term: "Inverse trigonometric function",
      definition:
        "A function such as $\\arcsin x$, $\\arccos x$ or $\\arctan x$ that reverses a restricted trigonometric function.",
    },
    {
      term: "Implicit differentiation",
      definition:
        "Differentiating both sides of a relation in $x$ and $y$ with respect to $x$, treating $y$ as a function of $x$ and using the chain rule on $y$ terms.",
    },
    {
      term: "Normal",
      definition:
        "The line perpendicular to the tangent at a point of a curve.",
    },
  ],
  concepts: [
    {
      id: "aahl-u5-standard-derivatives",
      title: "Derivatives of further standard functions",
      skill:
        "Differentiate $\\tan$, $\\sec$, $\\csc$, $\\cot$, $a^x$, $\\log_a x$, $\\arcsin$, $\\arccos$ and $\\arctan$.",
      lesson: {
        sections: [
          {
            heading: "The new standard derivatives",
            body: "These derivatives are in the formula booklet, but you should recognise them. Notice the pattern: every `co' function has a negative derivative: $\\frac{d}{dx}\\csc x=-\\csc x\\cot x$, $\\frac{d}{dx}\\cot x=-\\csc^2x$, $\\frac{d}{dx}\\arccos x=-\\frac1{\\sqrt{1-x^2}}$.",
          },
          {
            heading: "Combining with the chain, product and quotient rules",
            body: "For $a^x=e^{x\\ln a}$ the derivative is $a^x\\ln a$, and $\\log_ax=\\frac{\\ln x}{\\ln a}$ gives $\\frac1{x\\ln a}$. For a composite such as $\\arctan(3x)$ multiply by the derivative of the inside: $\\frac{3}{1+9x^2}$. Simplify only after applying all rules.",
          },
        ],
        keyFormulas: [
          {
            name: "Trigonometric",
            statement:
              "$(\\tan x)'=\\sec^2x,\\ (\\sec x)'=\\sec x\\tan x,\\ (\\csc x)'=-\\csc x\\cot x,\\ (\\cot x)'=-\\csc^2x$",
          },
          {
            name: "Exponential and log",
            statement:
              "$(a^x)'=a^x\\ln a,\\quad (\\log_ax)'=\\dfrac{1}{x\\ln a}$",
          },
          {
            name: "Inverse trigonometric",
            statement:
              "$(\\arcsin x)'=\\dfrac1{\\sqrt{1-x^2}},\\ (\\arccos x)'=-\\dfrac1{\\sqrt{1-x^2}},\\ (\\arctan x)'=\\dfrac1{1+x^2}$",
          },
        ],
        workedExample: {
          problem: "Differentiate $y=\\arcsin(2x)$.",
          solution:
            "By the chain rule, $\\frac{dy}{dx}=\\frac{1}{\\sqrt{1-(2x)^2}}\\times2=\\frac{2}{\\sqrt{1-4x^2}}$.",
        },
      },
      questions: [
        {
          id: "aahl-u5-standard-derivatives-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Differentiate $f(x)=\\tan 2x$ with respect to $x$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2\\sec^2 2x$" },
              { id: "b", text: "$\\sec^2 2x$" },
              { id: "c", text: "$-2\\csc^2 2x$" },
              { id: "d", text: "$2\\sec 2x\\tan 2x$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Derivative of tan",
                statement: "$(\\tan u)'=\\sec^2u\\cdot u'$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Differentiate $\\tan$ then multiply by the derivative of $2x$.",
                working: "\\sec^2(2x)\\times2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Write the result.",
                working: "2\\sec^22x",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $2\\sec^22x$",
            commonErrors: [
              "Omitting the chain-rule factor 2.",
              "Confusing with the derivative of $\\sec$ or $\\cot$.",
            ],
          },
        },
        {
          id: "aahl-u5-standard-derivatives-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Let $f(x)=x\\arctan x$. Find $f'(1)$, giving your answer in exact form and to 3 significant figures in the box.",
          response: {
            type: "numeric",
            parts: [
              { label: "$f'(1)$ (3 s.f.)", answer: 1.29, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Product rule",
                statement: "$(uv)'=u'v+uv'$",
              },
              {
                kind: "formula",
                name: "Derivative of arctan",
                statement: "$(\\arctan x)'=\\frac1{1+x^2}$",
              },
            ],
            steps: [
              {
                reasoning: "Product rule with $u=x$, $v=\\arctan x$.",
                working: "f'(x)=\\arctan x+\\frac{x}{1+x^2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $x=1$, using $\\arctan1=\\frac\\pi4$.",
                working: "f'(1)=\\frac\\pi4+\\frac12",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate.",
                working: "\\approx1.29",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac\\pi4+\\frac12\\approx1.29$",
            commonErrors: [
              "Differentiating each factor and multiplying.",
              "Using $\\arctan1=1$.",
            ],
          },
        },
        {
          id: "aahl-u5-standard-derivatives-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Given $y=\\ln(\\sec x+\\tan x)$ for $0<x<\\frac\\pi2$, show that $\\dfrac{dy}{dx}=\\sec x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Chain rule for ln",
                statement: "$\\frac{d}{dx}\\ln u=\\frac{u'}{u}$",
              },
              {
                kind: "formula",
                name: "Standard derivatives",
                statement: "$(\\sec x)'=\\sec x\\tan x,\\ (\\tan x)'=\\sec^2x$",
              },
            ],
            steps: [
              {
                reasoning: "Apply the chain rule for the natural logarithm.",
                working:
                  "\\frac{dy}{dx}=\\frac{(\\sec x)'+(\\tan x)'}{\\sec x+\\tan x}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute the standard derivatives.",
                working: "=\\frac{\\sec x\\tan x+\\sec^2x}{\\sec x+\\tan x}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Factorise the numerator by $\\sec x$.",
                working: "=\\frac{\\sec x(\\tan x+\\sec x)}{\\sec x+\\tan x}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cancel the common factor (non-zero for $0<x<\\frac\\pi2$).",
                working: "=\\sec x\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shown: $\\frac{dy}{dx}=\\sec x$",
            commonErrors: [
              "Forgetting the denominator $u$ in the log derivative.",
              "Failing to factorise before cancelling.",
            ],
          },
        },
        {
          id: "aahl-u5-standard-derivatives-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "Let $f(x)=x\\,2^x$ for $x\\in\\mathbb{R}$, and $g(x)=\\log_2(x^2+1)$.",
          parts: [
            { label: "a", prompt: "Find $f'(x)$.", marks: 2 },
            {
              label: "b",
              prompt:
                "Find the $x$-coordinate of the stationary point of $f$, to 3 significant figures.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Show that this stationary point is a minimum and find its $y$-coordinate to 3 significant figures.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Find $g'(1)$ to 3 significant figures.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) $x$", answer: -1.44, tolerance: 0.005 },
              { label: "(c) $y$", answer: -0.531, tolerance: 0.0005 },
              { label: "(d) $g'(1)$", answer: 1.44, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Product rule",
                statement: "$(uv)'=u'v+uv'$",
              },
              {
                kind: "formula",
                name: "Exponential and log",
                statement:
                  "$(a^x)'=a^x\\ln a,\\ (\\log_a u)'=\\frac{u'}{u\\ln a}$",
              },
              {
                kind: "principle",
                name: "Second derivative test",
                statement:
                  "A stationary point with $f''>0$ is a local minimum.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Product rule.",
                working: "f'(x)=2^x+x\\,2^x\\ln2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Factorise.",
                working: "f'(x)=2^x(1+x\\ln2)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Since $2^x>0$, set the bracket to zero.",
                working: "1+x\\ln2=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Solve.",
                working: "x=-\\frac1{\\ln2}\\approx-1.44",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Differentiate $f'$ again.",
                working:
                  "f''(x)=2^x\\ln2\\,(1+x\\ln2)+2^x\\ln2=2^x\\ln2\\,(2+x\\ln2)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "At the stationary point $x\\ln2=-1$, so $f''=2^x\\ln2>0$: a minimum.",
                working: "f''>0",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "$2^{-1/\\ln2}=e^{-1}$, so $y=-\\frac{1}{e\\ln2}$.",
                working: "y\\approx-0.531",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Chain rule with the log derivative.",
                working: "g'(x)=\\frac{2x}{(x^2+1)\\ln2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Substitute $x=1$.",
                working: "g'(1)=\\frac{2}{2\\ln2}=\\frac1{\\ln2}\\approx1.44",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $2^x(1+x\\ln2)$. (b) $-1.44$. (c) minimum at $y=-0.531$. (d) $1.44$.",
            commonErrors: [
              "Writing $(2^x)'=x2^{x-1}$.",
              "Omitting the $\\ln2$ in the log derivative.",
            ],
          },
        },
        {
          id: "aahl-u5-standard-derivatives-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Differentiate $f(x)=\\sec x$ with respect to $x$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sec x\\tan x$" },
              { id: "b", text: "$\\csc x\\cot x$" },
              { id: "c", text: "$\\sec^2 x$" },
              { id: "d", text: "$-\\sec x\\tan x$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Standard derivatives",
                statement: "$(\\sec x)'=\\sec x\\tan x$",
              },
            ],
            steps: [
              {
                reasoning: "Recall the standard derivative of $\\sec x$.",
                working: "\\sec x\\tan x",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Only option (a) matches; the negative sign belongs to $\\csc$ and $\\cot$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $\\sec x\\tan x$",
            commonErrors: [
              "Applying the negative sign that belongs to $\\csc$ and $\\cot$.",
            ],
          },
        },
        {
          id: "aahl-u5-standard-derivatives-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Let $f(x)=e^{3x}$. Find $f'(0)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$f'(0)$", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Chain rule",
                statement: "$\\frac{d}{dx}e^{u}=e^{u}u'$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate using the chain rule.",
                working: "f'(x)=3e^{3x}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $x=0$.",
                working: "f'(0)=3e^0",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Evaluate.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
            commonErrors: ["Writing $f'(x)=e^{3x}$ (omitting the factor 3)."],
          },
        },
        {
          id: "aahl-u5-standard-derivatives-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Let $f(x)=\\ln(x^2+1)$. Find $f'(1)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$f'(1)$", answer: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Chain rule for ln",
                statement: "$\\frac{d}{dx}\\ln u=\\frac{u'}{u}$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate with the chain rule.",
                working: "f'(x)=\\frac{2x}{x^2+1}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $x=1$.",
                working: "f'(1)=\\frac{2}{2}",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Evaluate.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1$",
            commonErrors: [
              "Writing $\\frac{d}{dx}\\ln(x^2+1)=\\frac{2x}{x^2+1}$ incorrectly as $\\frac{1}{x^2+1}$.",
            ],
          },
        },
        {
          id: "aahl-u5-standard-derivatives-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Differentiate $y=\\arcsin(3x)$ with respect to $x$, stating the domain on which your answer is valid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Derivative of arcsin",
                statement:
                  "$\\frac{d}{dx}\\arcsin u=\\frac{u'}{\\sqrt{1-u^2}}$",
              },
            ],
            steps: [
              {
                reasoning: "Apply the chain rule with $u=3x$.",
                working: "\\frac{dy}{dx}=\\frac{1}{\\sqrt{1-(3x)^2}}\\times3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify.",
                working: "\\frac{3}{\\sqrt{1-9x^2}}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the domain from $|3x|<1$.",
                working: "-\\frac13<x<\\frac13",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Write the final answer.",
                working:
                  "\\frac{dy}{dx}=\\frac{3}{\\sqrt{1-9x^2}},\\quad |x|<\\frac13",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$\\frac{dy}{dx}=\\frac{3}{\\sqrt{1-9x^2}}$ for $|x|<\\frac13$",
            commonErrors: [
              "Writing $\\sqrt{1-3x^2}$ instead of $\\sqrt{1-9x^2}$.",
              "Omitting the domain restriction.",
            ],
          },
        },
        {
          id: "aahl-u5-standard-derivatives-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Let $f(x)=x\\arccos x$. Find $f'(0)$, giving the exact value.",
          response: {
            type: "numeric",
            parts: [{ label: "$f'(0)$", answer: 1.57, tolerance: 0.005 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Product rule",
                statement: "$(uv)'=u'v+uv'$",
              },
              {
                kind: "formula",
                name: "Derivative of arccos",
                statement: "$(\\arccos x)'=-\\frac1{\\sqrt{1-x^2}}$",
              },
            ],
            steps: [
              {
                reasoning: "Apply the product rule.",
                working: "f'(x)=\\arccos x-\\frac{x}{\\sqrt{1-x^2}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $x=0$.",
                working: "f'(0)=\\arccos 0-0",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate $\\arccos 0$.",
                working: "\\frac\\pi2",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the decimal value.",
                working: "\\approx1.57",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$f'(0)=\\frac\\pi2\\approx1.57$",
            commonErrors: [
              "Dropping the negative sign in the derivative of $\\arccos x$.",
              "Treating $\\arccos 0$ as $0$.",
            ],
          },
        },
        {
          id: "aahl-u5-standard-derivatives-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Differentiate $f(x)=\\cot x$ with respect to $x$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\tan^2 x$" },
              { id: "b", text: "$-\\sec^2 x$" },
              { id: "c", text: "$-\\csc^2 x$" },
              { id: "d", text: "$\\csc^2 x$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Standard derivatives",
                statement: "$(\\cot x)'=-\\csc^2x$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Recall the standard derivative of $\\cot x$; it is negative.",
                working: "-\\csc^2x",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Select the matching option.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $-\\csc^2x$",
            commonErrors: [
              "Confusing $(\\cot x)'$ with $(\\tan x)'=\\sec^2x$.",
            ],
          },
        },
        {
          id: "aahl-u5-standard-derivatives-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 5,
          stem: "Differentiate $y=e^x\\sin x$ with respect to $x$, leaving your answer in terms of $e^x$, $\\sin x$ and $\\cos x$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Product rule",
                statement: "$(uv)'=u'v+uv'$",
              },
              {
                kind: "formula",
                name: "Standard derivatives",
                statement: "$(\\sin x)'=\\cos x$, $(e^x)'=e^x$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identify $u=e^x$, $v=\\sin x$ and apply the product rule.",
                working: "\\frac{dy}{dx}=e^x\\sin x+e^x\\cos x",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Factor out $e^x$.",
                working: "e^x(\\sin x+\\cos x)",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Write the final answer.",
                working: "\\frac{dy}{dx}=e^x(\\sin x+\\cos x)",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "State the result in unsimplified checkable form.",
                working: "e^x\\sin x+e^x\\cos x",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{dy}{dx}=e^x(\\sin x+\\cos x)$",
            commonErrors: [
              "Differentiating the product as $e^x\\cos x$ only.",
              "Differentiating $\\sin x$ as $-\\cos x$.",
            ],
          },
        },
        {
          id: "aahl-u5-standard-derivatives-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Let $f(x)=\\arctan(2x)$. Find $f'(1)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$f'(1)$", answer: 0.4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Chain rule",
                statement: "$\\frac{d}{dx}\\arctan u=\\frac{u'}{1+u^2}$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate with the chain rule.",
                working: "f'(x)=\\frac{2}{1+4x^2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $x=1$.",
                working: "f'(1)=\\frac{2}{5}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate.",
                working: "0.4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.4$",
            commonErrors: ["Writing $\\frac{2}{1+2x^2}$ instead of $1+4x^2$."],
          },
        },
        {
          id: "aahl-u5-standard-derivatives-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "Let $f(x)=x\\,3^x$ and $g(x)=\\log_3(x^2)$ for $x>0$.",
          parts: [
            { label: "a", prompt: "Find $f'(x)$.", marks: 3 },
            { label: "b", prompt: "Find $f'(0)$.", marks: 2 },
            { label: "c", prompt: "Find $g'(x)$.", marks: 2 },
            {
              label: "d",
              prompt: "Find $g'(3)$ to 3 significant figures.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) $f'(0)$", answer: 1 },
              { label: "(d) $g'(3)$", answer: 0.607, tolerance: 0.0005 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Product rule",
                statement: "$(uv)'=u'v+uv'$",
              },
              {
                kind: "formula",
                name: "Exponential and log",
                statement:
                  "$(a^x)'=a^x\\ln a$, $(\\log_a u)'=\\frac{u'}{u\\ln a}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Product rule with $u=x$, $v=3^x$.",
                working: "f'(x)=3^x+x\\,3^x\\ln3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Factorise.",
                working: "f'(x)=3^x(1+x\\ln3)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Write the final form.",
                working: "3^x(1+x\\ln3)",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Substitute $x=0$.",
                working: "f'(0)=3^0(1+0)=1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Chain rule for $\\log_3(x^2)$.",
                working: "g'(x)=\\frac{2x}{x^2\\ln3}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Simplify.",
                working: "g'(x)=\\frac{2}{x\\ln3}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Substitute $x=3$.",
                working: "g'(3)=\\frac{2}{3\\ln3}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Evaluate to 3 s.f.",
                working: "\\approx0.607",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $3^x(1+x\\ln3)$. (b) $1$. (c) $\\frac{2}{x\\ln3}$. (d) $0.607$.",
            commonErrors: [
              "Writing $(3^x)'=x3^{x-1}$.",
              "Omitting $\\ln3$ in the log derivative.",
            ],
          },
        },
        {
          id: "aahl-u5-standard-derivatives-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Differentiate $f(x)=\\csc x$ with respect to $x$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\sec x\\tan x$" },
              { id: "b", text: "$\\csc x\\cot x$" },
              { id: "c", text: "$-\\csc^2 x$" },
              { id: "d", text: "$-\\csc x\\cot x$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Standard derivatives",
                statement: "$(\\csc x)'=-\\csc x\\cot x$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Recall the standard derivative of $\\csc x$; it is negative.",
                working: "-\\csc x\\cot x",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Select the matching option.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $-\\csc x\\cot x$",
            commonErrors: [
              "Confusing $(\\csc x)'$ with $(\\sec x)'=\\sec x\\tan x$.",
            ],
          },
        },
        {
          id: "aahl-u5-standard-derivatives-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Show that $\\dfrac{d}{dx}\\ln(\\sec x)=\\tan x$ for $0<x<\\dfrac\\pi2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Chain rule for ln",
                statement: "$\\frac{d}{dx}\\ln u=\\frac{u'}{u}$",
              },
              {
                kind: "formula",
                name: "Standard derivatives",
                statement: "$(\\sec x)'=\\sec x\\tan x$",
              },
            ],
            steps: [
              {
                reasoning: "Apply the log derivative rule.",
                working:
                  "\\frac{d}{dx}\\ln(\\sec x)=\\frac{(\\sec x)'}{\\sec x}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $(\\sec x)'=\\sec x\\tan x$.",
                working: "=\\frac{\\sec x\\tan x}{\\sec x}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Cancel $\\sec x$ (non-zero for $0<x<\\frac\\pi2$).",
                working: "=\\tan x",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the conclusion.",
                working: "\\frac{d}{dx}\\ln(\\sec x)=\\tan x\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shown: $\\tan x$",
            commonErrors: [
              "Differentiating $\\sec x$ as $\\sec x\\tan x$ but forgetting it appears in the denominator of the log rule.",
              "Cancelling $\\sec x$ without noting it is non-zero.",
            ],
          },
        },
        {
          id: "aahl-u5-standard-derivatives-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 10,
          stem: "Let $a>0$ with $a\\ne1$.",
          parts: [
            {
              label: "a",
              prompt: "Show that $\\dfrac{d}{dx}a^x=a^x\\ln a$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Hence find $\\dfrac{d}{dx}2^x$ and evaluate it at $x=1$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Show that $\\dfrac{d}{dx}\\log_a x=\\dfrac{1}{x\\ln a}$, and deduce that $\\dfrac{d}{dx}\\ln x=\\dfrac1x$.",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Find $\\dfrac{d}{dx}(\\ln x)^2$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Exponential rewrite",
                statement: "$a^x=e^{x\\ln a}$",
              },
              {
                kind: "law",
                name: "Chain rule",
                statement: "$\\frac{d}{dx}e^{u}=e^{u}u'$",
              },
              {
                kind: "formula",
                name: "Log change of base",
                statement: "$\\log_a x=\\frac{\\ln x}{\\ln a}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Write $a^x=e^{x\\ln a}$.",
                working: "a^x=e^{x\\ln a}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Differentiate using the chain rule.",
                working: "\\frac{d}{dx}e^{x\\ln a}=e^{x\\ln a}\\ln a",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Convert back.",
                working: "=a^x\\ln a\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Apply the result with $a=2$.",
                working: "\\frac{d}{dx}2^x=2^x\\ln2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Evaluate at $x=1$.",
                working: "2\\ln2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Write $\\log_a x=\\frac{\\ln x}{\\ln a}$ and differentiate.",
                working: "\\frac{d}{dx}\\log_a x=\\frac{1}{x\\ln a}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Deduce the natural log case by setting $a=e$ (so $\\ln e=1$).",
                working: "\\frac{d}{dx}\\ln x=\\frac1x",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State both results.",
                working: "\\frac{1}{x\\ln a}\\ \\text{and}\\ \\frac1x",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Chain rule with $u=\\ln x$.",
                working: "\\frac{d}{dx}(\\ln x)^2=2\\ln x\\cdot\\frac1x",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Simplify.",
                working: "\\frac{2\\ln x}{x}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) shown. (b) $2^x\\ln2$; at $x=1$ gives $2\\ln2$. (c) shown. (d) $\\frac{2\\ln x}{x}$.",
            commonErrors: [
              "Writing $(a^x)'=ax^{a-1}$.",
              "Forgetting the $\\ln a$ in the log derivative.",
            ],
          },
        },
        {
          id: "aahl-u5-standard-derivatives-q17",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Let $f(x)=\\arctan(e^x)$. Find $f'(0)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$f'(0)$", answer: 0.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Chain rule",
                statement: "$\\frac{d}{dx}\\arctan u=\\frac{u'}{1+u^2}$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate the composite.",
                working: "f'(x)=\\frac{e^x}{1+e^{2x}}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $x=0$.",
                working: "f'(0)=\\frac{e^0}{1+e^0}=\\frac{1}{2}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate.",
                working: "0.5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$0.5$",
            commonErrors: [
              "Writing $e^{2x}$ as $2e^x$.",
              "Differentiating $e^x$ inside $\\arctan$ as $1$.",
            ],
          },
        },
      ],
    },
    {
      id: "aahl-u5-implicit",
      title: "Implicit differentiation",
      skill:
        "Differentiate implicitly to find gradients, tangents and normals, and second derivatives.",
      lesson: {
        sections: [
          {
            heading: "Differentiating relations",
            body: "When $y$ is not given explicitly, differentiate every term with respect to $x$. Terms in $y$ pick up a factor $\\frac{dy}{dx}$ by the chain rule: $\\frac{d}{dx}(y^3)=3y^2\\frac{dy}{dx}$. Terms like $xy$ need the product rule: $y+x\\frac{dy}{dx}$. Collect the $\\frac{dy}{dx}$ terms on one side and factorise.",
          },
          {
            heading: "Tangents, normals and second derivatives",
            body: "Substitute the point into $\\frac{dy}{dx}$ for the tangent gradient; the normal has gradient $-\\frac{1}{m}$. To find $\\frac{d^2y}{dx^2}$, differentiate $\\frac{dy}{dx}$ again, still treating $y$ as a function of $x$, then substitute $\\frac{dy}{dx}$ back in.",
          },
        ],
        keyFormulas: [
          {
            name: "Chain rule on y",
            statement: "$\\dfrac{d}{dx}f(y)=f'(y)\\dfrac{dy}{dx}$",
          },
          {
            name: "Normal gradient",
            statement: "$m_{\\text{normal}}=-\\dfrac1{m_{\\text{tangent}}}$",
          },
        ],
        workedExample: {
          problem: "Find $\\frac{dy}{dx}$ for $x^2+y^2=25$ at $(3,4)$.",
          solution:
            "$2x+2y\\frac{dy}{dx}=0$, so $\\frac{dy}{dx}=-\\frac xy=-\\frac34$.",
        },
      },
      questions: [
        {
          id: "aahl-u5-implicit-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A curve has equation $x^2+y^2=25$. Find the gradient of the curve at the point $(3,4)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac43$" },
              { id: "b", text: "$-\\dfrac43$" },
              { id: "c", text: "$\\dfrac34$" },
              { id: "d", text: "$-\\dfrac34$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Implicit differentiation",
                statement: "$\\frac{d}{dx}(y^2)=2y\\frac{dy}{dx}$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate both sides with respect to $x$.",
                working: "2x+2y\\frac{dy}{dx}=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Make $\\frac{dy}{dx}$ the subject and substitute.",
                working: "\\frac{dy}{dx}=-\\frac xy=-\\frac34",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $-\\frac34$",
            commonErrors: [
              "Inverting the ratio, giving $-\\frac43$.",
              "Missing the negative sign.",
            ],
          },
        },
        {
          id: "aahl-u5-implicit-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The curve $x^2+xy+y^2=7$ passes through the point $(1,2)$. Find the gradient of the curve at this point.",
          response: {
            type: "numeric",
            parts: [{ label: "Gradient", answer: -0.8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Product rule",
                statement: "$\\frac{d}{dx}(xy)=y+x\\frac{dy}{dx}$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate each term implicitly.",
                working: "2x+y+x\\frac{dy}{dx}+2y\\frac{dy}{dx}=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Collect $\\frac{dy}{dx}$ terms.",
                working: "\\frac{dy}{dx}(x+2y)=-(2x+y)",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute $(1,2)$.",
                working: "\\frac{dy}{dx}=-\\frac{4}{5}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-\\frac45$",
            commonErrors: [
              "Differentiating $xy$ as $y$ or as $x\\frac{dy}{dx}$ only.",
            ],
          },
        },
        {
          id: "aahl-u5-implicit-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "The point $(1,2)$ lies on the curve $x^2y+y^3=10$. The normal to the curve at this point has equation $y=mx+c$. Find $m$ and $c$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$m$", answer: 3.25 },
              { label: "$c$", answer: -1.25 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Implicit differentiation",
                statement:
                  "Differentiate each term using the product and chain rules.",
              },
              {
                kind: "property",
                name: "Normal",
                statement: "Gradients of perpendicular lines multiply to $-1$.",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate implicitly.",
                working: "2xy+x^2\\frac{dy}{dx}+3y^2\\frac{dy}{dx}=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At $(1,2)$: $4+\\frac{dy}{dx}+12\\frac{dy}{dx}=0$.",
                working: "\\frac{dy}{dx}=-\\frac4{13}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "The normal gradient is the negative reciprocal.",
                working: "m=\\frac{13}{4}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Use the point to find $c$: $2=\\frac{13}{4}+c$.",
                working: "c=-\\frac54",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$m=\\frac{13}4$, $c=-\\frac54$",
            commonErrors: [
              "Giving the tangent rather than the normal.",
              "Missing the term $2xy$ from the product rule.",
            ],
          },
        },
        {
          id: "aahl-u5-implicit-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "For each integer $n\\ge1$, consider the curve $C_n$ with equation $x^n+y^n=2$ for $x,y>0$. Every curve $C_n$ passes through the point $P(1,1)$.",
          parts: [
            {
              label: "a",
              prompt:
                "Show that $\\dfrac{dy}{dx}=-\\left(\\dfrac xy\\right)^{n-1}$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Hence show that the tangent to $C_n$ at $P$ is the same line for every $n$, and state its equation.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Show that at $P$, $\\dfrac{d^2y}{dx^2}=-2(n-1)$.",
              marks: 4,
            },
            {
              label: "d",
              prompt:
                "Find the value of $n$ for which $\\dfrac{d^2y}{dx^2}=-10$ at $P$, and interpret the sign of $\\dfrac{d^2y}{dx^2}$ for $n>1$ in terms of the position of $C_n$ relative to the tangent near $P$.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Implicit differentiation",
                statement: "$\\frac{d}{dx}y^n=ny^{n-1}\\frac{dy}{dx}$",
              },
              {
                kind: "law",
                name: "Product and chain rules",
                statement: "Differentiate $x^{n-1}y^{-(n-1)}$ as a product.",
              },
              {
                kind: "principle",
                name: "Concavity",
                statement:
                  "$f''<0$ means the graph is concave down and lies below its tangents locally.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Differentiate both sides implicitly.",
                working: "nx^{n-1}+ny^{n-1}\\frac{dy}{dx}=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Rearrange for the derivative.",
                working: "\\frac{dy}{dx}=-\\frac{x^{n-1}}{y^{n-1}}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Write as a power of a quotient.",
                working: "=-\\left(\\frac xy\\right)^{n-1}\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "At $(1,1)$ the ratio $\\frac xy=1$ so the gradient is $-1$ for every $n$.",
                working: "\\frac{dy}{dx}=-1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Tangent through $(1,1)$ with gradient $-1$.",
                working: "y-1=-(x-1)\\iff x+y=2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Write $\\frac{dy}{dx}=-x^{n-1}y^{-(n-1)}$ and differentiate with the product rule.",
                working:
                  "\\frac{d^2y}{dx^2}=-\\left[(n-1)x^{n-2}y^{-(n-1)}-(n-1)x^{n-1}y^{-n}\\frac{dy}{dx}\\right]",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Substitute $x=y=1$ and $\\frac{dy}{dx}=-1$.",
                working: "-\\left[(n-1)+(n-1)\\right]",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Simplify.",
                working: "-2(n-1)\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Solve $-2(n-1)=-10$.",
                working: "n=6",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "For $n>1$, $\\frac{d^2y}{dx^2}<0$, so the curve is concave down at $P$.",
                working: "-2(n-1)<0",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Therefore near $P$ the curve lies below the tangent line $x+y=2$; for $n=1$ the curve is the line itself.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) shown. (b) $x+y=2$. (c) shown. (d) $n=6$; curves are concave down and lie below the tangent near $P$.",
            commonErrors: [
              "Dropping the factor $\\frac{dy}{dx}$ on the second differentiation.",
              "Substituting $x=y=1$ before differentiating.",
            ],
            examinerNote:
              "Check with $n=2$: the circle $x^2+y^2=2$ gives $\\frac{d^2y}{dx^2}=-\\frac{x^2+y^2}{y^3}=-2$ at $P$, agreeing with $-2(n-1)$.",
          },
        },
        {
          id: "aahl-u5-implicit-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The curve $x^2+y^2=1$ passes through $(0,1)$. Find the gradient of the curve at this point.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "undefined" },
              { id: "b", text: "$0$" },
              { id: "c", text: "$-1$" },
              { id: "d", text: "$1$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Implicit differentiation",
                statement: "$\\frac{d}{dx}(y^2)=2y\\frac{dy}{dx}$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate both sides.",
                working: "2x+2y\\frac{dy}{dx}=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At $(0,1)$: $0+2\\frac{dy}{dx}=0$.",
                working: "\\frac{dy}{dx}=0",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $0$",
            commonErrors: [
              "Writing $\\frac{dy}{dx}=-\\frac{x}{y}$ and then evaluating $-\\frac01$ incorrectly.",
            ],
          },
        },
        {
          id: "aahl-u5-implicit-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The curve $xy=12$ passes through $(2,6)$. Find the gradient of the curve at this point.",
          response: {
            type: "numeric",
            parts: [{ label: "Gradient", answer: -3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Product rule",
                statement: "$\\frac{d}{dx}(xy)=y+x\\frac{dy}{dx}$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate implicitly.",
                working: "y+x\\frac{dy}{dx}=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Make $\\frac{dy}{dx}$ the subject.",
                working: "\\frac{dy}{dx}=-\\frac yx",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute $(2,6)$.",
                working: "-\\frac62=-3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-3$",
            commonErrors: ["Differentiating $xy$ as $x$ or as $y$ only."],
          },
        },
        {
          id: "aahl-u5-implicit-q7",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "The curve $x^3+y^3=2xy$ passes through $(1,1)$. Find the gradient of the curve at this point.",
          response: {
            type: "numeric",
            parts: [{ label: "Gradient", answer: -1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Implicit differentiation",
                statement: "$\\frac{d}{dx}y^3=3y^2\\frac{dy}{dx}$",
              },
              {
                kind: "law",
                name: "Product rule",
                statement: "$\\frac{d}{dx}(xy)=y+x\\frac{dy}{dx}$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate both sides implicitly.",
                working: "3x^2+3y^2\\frac{dy}{dx}=2y+2x\\frac{dy}{dx}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Collect $\\frac{dy}{dx}$ terms.",
                working: "\\frac{dy}{dx}(3y^2-2x)=2y-3x^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $(1,1)$.",
                working: "\\frac{dy}{dx}(3-2)=2-3",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Solve.",
                working: "\\frac{dy}{dx}=-1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-1$",
            commonErrors: [
              "Differentiating $2xy$ as $2x$ or $2y$ only.",
              "Sign error when collecting terms.",
            ],
          },
        },
        {
          id: "aahl-u5-implicit-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Find $\\dfrac{dy}{dx}$ for the curve $y^2=x^3+1$, and hence find the gradient of the curve at the point $(2,3)$.",
          response: {
            type: "numeric",
            parts: [{ label: "Gradient at $(2,3)$", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Implicit differentiation",
                statement: "$\\frac{d}{dx}y^2=2y\\frac{dy}{dx}$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate both sides.",
                working: "2y\\frac{dy}{dx}=3x^2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Make $\\frac{dy}{dx}$ the subject.",
                working: "\\frac{dy}{dx}=\\frac{3x^2}{2y}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute $(2,3)$: check $y^2=9=8+1$.",
                working: "\\frac{3(4)}{2(3)}",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Evaluate.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "$\\frac{dy}{dx}=\\frac{3x^2}{2y}$; gradient at $(2,3)$ is $2$",
            commonErrors: [
              "Writing $\\frac{dy}{dx}=\\frac{3x^2}{2}$ (forgetting the $y$).",
              "Differentiating $y^2$ as $2y$.",
            ],
          },
        },
        {
          id: "aahl-u5-implicit-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "The curve $x^2+xy+y^2=7$ passes through $(1,2)$. Find the $y$-intercept of the tangent to the curve at this point.",
          response: {
            type: "numeric",
            parts: [{ label: "$y$-intercept", answer: 2.8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Product rule",
                statement: "$\\frac{d}{dx}(xy)=y+x\\frac{dy}{dx}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Differentiate implicitly and collect $\\frac{dy}{dx}$ terms.",
                working: "\\frac{dy}{dx}(x+2y)=-(2x+y)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $(1,2)$.",
                working: "\\frac{dy}{dx}=-\\frac45",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Write the tangent: $y-2=-\\frac45(x-1)$, so $y=-\\frac45x+\\frac{14}{5}$.",
                working: "y=-\\frac45x+\\frac{14}{5}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Read off the intercept.",
                working: "\\frac{14}{5}=2.8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2.8$",
            commonErrors: [
              "Finding the tangent gradient but not the intercept.",
              "Arithmetic slip in $2+\\frac45$.",
            ],
          },
        },
        {
          id: "aahl-u5-implicit-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "When differentiating $y^3$ implicitly with respect to $x$, what is $\\dfrac{d}{dx}(y^3)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3y^2\\dfrac{dy}{dx}$" },
              { id: "b", text: "$3x^2$" },
              { id: "c", text: "$y^3\\dfrac{dy}{dx}$" },
              { id: "d", text: "$3y^2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Chain rule on y",
                statement: "$\\frac{d}{dx}f(y)=f'(y)\\frac{dy}{dx}$",
              },
            ],
            steps: [
              {
                reasoning: "Apply the chain rule to $y^3$.",
                working: "3y^2\\frac{dy}{dx}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The factor $\\frac{dy}{dx}$ must be present.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)**",
            commonErrors: ["Dropping the $\\frac{dy}{dx}$ factor."],
          },
        },
        {
          id: "aahl-u5-implicit-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 5,
          stem: "For the circle $x^2+y^2=25$, show that $\\dfrac{d^2y}{dx^2}=-\\dfrac{25}{y^3}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Implicit differentiation",
                statement: "$\\frac{d}{dx}(y^2)=2y\\frac{dy}{dx}$",
              },
              {
                kind: "law",
                name: "Product rule",
                statement:
                  "Differentiate $2y\\frac{dy}{dx}$ again using the product rule.",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate once.",
                working: "2x+2y\\frac{dy}{dx}=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve for $\\frac{dy}{dx}$.",
                working: "\\frac{dy}{dx}=-\\frac xy",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Differentiate $2x+2y\\frac{dy}{dx}=0$ again.",
                working:
                  "2+2\\left(\\frac{dy}{dx}\\right)^2+2y\\frac{d^2y}{dx^2}=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Substitute $\\left(\\frac{dy}{dx}\\right)^2=\\frac{x^2}{y^2}$ and use $x^2+y^2=25$.",
                working:
                  "\\frac{d^2y}{dx^2}=-\\frac{1+x^2/y^2}{y}=-\\frac{x^2+y^2}{y^3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify.",
                working: "=-\\frac{25}{y^3}\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shown: $\\frac{d^2y}{dx^2}=-\\frac{25}{y^3}$",
            commonErrors: [
              "Forgetting the $\\left(\\frac{dy}{dx}\\right)^2$ term when differentiating $2y\\frac{dy}{dx}$.",
              "Differentiating $\\frac{dy}{dx}$ as if it were a constant.",
            ],
          },
        },
        {
          id: "aahl-u5-implicit-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The curve $x^2-y^2=1$ passes through $(\\sqrt2,1)$. Find the gradient of the curve at this point.",
          response: {
            type: "numeric",
            parts: [{ label: "Gradient", answer: 1.414, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Implicit differentiation",
                statement: "$\\frac{d}{dx}(y^2)=2y\\frac{dy}{dx}$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate both sides.",
                working: "2x-2y\\frac{dy}{dx}=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve for $\\frac{dy}{dx}$.",
                working: "\\frac{dy}{dx}=\\frac xy",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute $(\\sqrt2,1)$.",
                working: "\\frac{\\sqrt2}{1}=\\sqrt2\\approx1.414",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\sqrt2\\approx1.414$",
            commonErrors: [
              "Sign error: writing $-\\frac xy$.",
              "Using $y=\\sqrt2$ instead of $x=\\sqrt2$.",
            ],
          },
        },
        {
          id: "aahl-u5-implicit-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "The ellipse $E$ has equation $\\frac{x^2}{4}+y^2=1$.",
          parts: [
            {
              label: "a",
              prompt: "Show that $\\dfrac{dy}{dx}=-\\dfrac{x}{4y}$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Find the gradient of $E$ at the point $(\\sqrt2,\\tfrac{1}{\\sqrt2})$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Find the $y$-intercept of the tangent to $E$ at this point.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Find the gradient of the normal to $E$ at this point.",
              marks: 1,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) gradient", answer: -0.5 },
              { label: "(c) $y$-intercept", answer: 1.414, tolerance: 0.001 },
              { label: "(d) normal gradient", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Implicit differentiation",
                statement: "$\\frac{d}{dx}y^2=2y\\frac{dy}{dx}$",
              },
              {
                kind: "property",
                name: "Normal",
                statement:
                  "Normal gradient is the negative reciprocal of the tangent gradient.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Differentiate both sides implicitly.",
                working: "\\frac{2x}{4}+2y\\frac{dy}{dx}=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Simplify.",
                working: "\\frac{x}{2}+2y\\frac{dy}{dx}=0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Solve for $\\frac{dy}{dx}$.",
                working: "\\frac{dy}{dx}=-\\frac{x}{4y}\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Substitute $x=\\sqrt2$, $y=\\frac1{\\sqrt2}$.",
                working:
                  "-\\frac{\\sqrt2}{4/\\sqrt2}=-\\frac{\\sqrt2\\cdot\\sqrt2}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "-\\frac12",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Tangent: $y-\\frac1{\\sqrt2}=-\\frac12\\left(x-\\sqrt2\\right)$; set $x=0$.",
                working: "y=\\frac1{\\sqrt2}+\\frac{\\sqrt2}{2}=\\sqrt2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State the intercept.",
                working: "\\sqrt2\\approx1.414",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Negative reciprocal of $-\\frac12$.",
                working: "2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) shown. (b) $-\\frac12$. (c) $\\sqrt2$. (d) $2$.",
            commonErrors: [
              "Writing $\\frac{dy}{dx}=-\\frac{x}{2y}$ (forgetting the factor 4).",
              "Giving the tangent gradient for the normal.",
            ],
          },
        },
        {
          id: "aahl-u5-implicit-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The curve $x^2+2y^2=6$ passes through $(2,1)$. Find the gradient of the curve at this point.",
          response: {
            type: "numeric",
            parts: [{ label: "Gradient", answer: -1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Implicit differentiation",
                statement: "$\\frac{d}{dx}(y^2)=2y\\frac{dy}{dx}$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate both sides.",
                working: "2x+4y\\frac{dy}{dx}=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve for $\\frac{dy}{dx}$.",
                working: "\\frac{dy}{dx}=-\\frac{x}{2y}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute $(2,1)$.",
                working: "-\\frac{2}{2}=-1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-1$",
            commonErrors: [
              "Writing $\\frac{dy}{dx}=-\\frac{x}{4y}$ (treating $2y^2$ as $4y^2$).",
            ],
          },
        },
        {
          id: "aahl-u5-implicit-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Show that the tangent to the circle $x^2+y^2=25$ at the point $(4,3)$ has equation $4x+3y=25$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Implicit differentiation",
                statement: "$\\frac{d}{dx}(y^2)=2y\\frac{dy}{dx}$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate implicitly.",
                working: "2x+2y\\frac{dy}{dx}=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solve for $\\frac{dy}{dx}$ and substitute $(4,3)$.",
                working: "\\frac{dy}{dx}=-\\frac xy=-\\frac43",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Write the tangent in point-gradient form.",
                working: "y-3=-\\frac43(x-4)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rearrange.",
                working: "3y-9=-4x+16\\Rightarrow4x+3y=25\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shown: $4x+3y=25$",
            commonErrors: [
              "Using gradient $-\\frac34$ instead of $-\\frac43$.",
              "Arithmetic error when clearing fractions.",
            ],
          },
        },
        {
          id: "aahl-u5-implicit-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 10,
          stem: "The rectangular hyperbola $H$ has equation $xy=1$.",
          parts: [
            {
              label: "a",
              prompt: "Show that $\\dfrac{dy}{dx}=-\\dfrac{y}{x}$.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Show that $\\dfrac{d^2y}{dx^2}=\\dfrac{2y}{x^2}$.",
              marks: 4,
            },
            {
              label: "c",
              prompt:
                "Find the gradient of the tangent to $H$ at the point $(2,\\tfrac12)$.",
              marks: 1,
            },
            {
              label: "d",
              prompt:
                "Show that no tangent to $H$ is parallel to the line $y=x$.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Find the points on $H$ where the tangent is perpendicular to the line $y=x$.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Product rule",
                statement: "$\\frac{d}{dx}(xy)=y+x\\frac{dy}{dx}$",
              },
              {
                kind: "law",
                name: "Quotient rule",
                statement:
                  "$\\frac{d}{dx}\\left(-\\frac yx\\right)=\\frac{xy'-y}{x^2}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Differentiate both sides.",
                working: "y+x\\frac{dy}{dx}=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Solve.",
                working: "\\frac{dy}{dx}=-\\frac yx\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Write $\\frac{dy}{dx}=-yx^{-1}$ and differentiate using the product rule.",
                working:
                  "\\frac{d^2y}{dx^2}=-\\left(\\frac{dy}{dx}x^{-1}-yx^{-2}\\right)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Substitute $\\frac{dy}{dx}=-\\frac yx$.",
                working:
                  "=-\\left(-\\frac{y}{x^2}-\\frac{y}{x^2}\\right)=\\frac{2y}{x^2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the result.",
                working: "\\frac{2y}{x^2}\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Conclude with the final form.",
                working: "\\frac{d^2y}{dx^2}=\\frac{2y}{x^2}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Substitute $(2,\\frac12)$ into $-\\frac yx$.",
                working: "-\\frac{1/2}{2}=-\\frac14",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Parallel to $y=x$ requires gradient $1$; solve $-\\frac yx=1$.",
                working: "-y=x\\Rightarrow xy=-x^2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "But $xy=1>0$ while $-x^2\\le0$, contradiction.",
                working: "1=-x^2\\ \\text{has no real solution}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "e",
                reasoning:
                  "Perpendicular to $y=x$ requires gradient $-1$: $-\\frac yx=-1\\Rightarrow y=x$, and $xy=1$ gives $x=\\pm1$.",
                working: "(1,1)\\ \\text{and}\\ (-1,-1)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a), (b) shown. (c) $-\\frac14$. (d) shown. (e) $(1,1)$ and $(-1,-1)$.",
            commonErrors: [
              "Differentiating $-\\frac yx$ as $\\frac{-y'}{x}$ only.",
              "Claiming $xy=-x^2$ can equal 1 for real $x$.",
            ],
          },
        },
        {
          id: "aahl-u5-implicit-q17",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "The curve $e^x+y=xy$ passes through the point $(0,-1)$. Find the gradient of the curve at this point.",
          response: {
            type: "numeric",
            parts: [{ label: "Gradient", answer: -2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Product rule",
                statement: "$\\frac{d}{dx}(xy)=y+x\\frac{dy}{dx}$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate both sides with respect to $x$.",
                working: "e^x+\\frac{dy}{dx}=y+x\\frac{dy}{dx}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Collect $\\frac{dy}{dx}$ terms.",
                working: "\\frac{dy}{dx}(1-x)=y-e^x",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $(0,-1)$.",
                working: "\\frac{dy}{dx}=\\frac{-1-1}{1-0}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate.",
                working: "-2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-2$",
            commonErrors: [
              "Differentiating $e^x+y$ as $e^x+y'$ only on one side.",
              "Sign error in $y-e^x$.",
            ],
          },
        },
      ],
    },
  ],
};
