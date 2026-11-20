import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "aahl-u5-lesson-5-1",
  code: "5-1",
  title: "Limits, Continuity and First Principles",
  goal: "I CAN test continuity and differentiability, evaluate limits including with L'Hopital's rule, and differentiate from first principles.",
  standards: ["AHL 5.12", "AHL 5.13"],
  vocabulary: [
    {
      term: "Limit",
      definition:
        "$\\lim_{x\\to a}f(x)=L$ means $f(x)$ can be made arbitrarily close to $L$ by taking $x$ sufficiently close to $a$.",
    },
    {
      term: "Continuity at a point",
      definition:
        "$f$ is continuous at $x=a$ if $\\lim_{x\\to a}f(x)=f(a)$, so both one-sided limits exist and equal $f(a)$.",
    },
    {
      term: "Differentiable",
      definition:
        "$f$ is differentiable at $a$ if $\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h}$ exists; this requires the left and right gradients to agree.",
    },
    {
      term: "First principles",
      definition:
        "Defining the derivative by $f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$.",
    },
    {
      term: "Indeterminate form",
      definition:
        "A limit of the form $\\frac00$ or $\\frac\\infty\\infty$ whose value cannot be read off directly.",
    },
    {
      term: "L'Hopital's rule",
      definition:
        "If $\\lim\\frac{f}{g}$ is $\\frac00$ or $\\frac\\infty\\infty$, then $\\lim\\frac{f(x)}{g(x)}=\\lim\\frac{f'(x)}{g'(x)}$ provided the latter exists.",
    },
  ],
  concepts: [
    {
      id: "aahl-u5-continuity-lhopital",
      title: "Continuity, differentiability and L'Hopital's rule",
      skill:
        "Determine parameters for continuity and differentiability and evaluate indeterminate limits.",
      lesson: {
        sections: [
          {
            heading: "Continuity and differentiability",
            body: "For a piecewise function to be continuous at the join $x=a$, the two pieces must give the same value there. To be differentiable as well, the derivatives of the two pieces must also agree at $x=a$. Differentiability implies continuity, but not conversely: $|x|$ is continuous at 0 but has a corner.",
          },
          {
            heading: "L'Hopital's rule",
            body: "When substitution gives $\\frac00$ or $\\frac\\infty\\infty$, differentiate numerator and denominator separately (not as a quotient) and take the limit again. The rule may be applied repeatedly. Always confirm the form is indeterminate before using it.",
          },
        ],
        keyFormulas: [
          {
            name: "Continuity",
            statement: "$\\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)=f(a)$",
          },
          {
            name: "L'Hopital's rule",
            statement:
              "$\\lim_{x\\to a}\\dfrac{f(x)}{g(x)}=\\lim_{x\\to a}\\dfrac{f'(x)}{g'(x)}$ when the form is $\\frac00$ or $\\frac\\infty\\infty$",
          },
        ],
        workedExample: {
          problem: "Evaluate $\\lim_{x\\to0}\\dfrac{e^{2x}-1}{x}$.",
          solution:
            "Direct substitution gives $\\frac00$. By L'Hopital, the limit is $\\lim\\frac{2e^{2x}}{1}=2$.",
        },
      },
      questions: [
        {
          id: "aahl-u5-continuity-lhopital-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Evaluate $\\lim_{x\\to0}\\dfrac{\\sin 3x}{x}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$0$" },
              { id: "d", text: "$\\dfrac13$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "L'Hopital's rule",
                statement:
                  "For a $\\frac00$ form, $\\lim\\frac fg=\\lim\\frac{f'}{g'}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Substitution gives $\\frac00$; differentiate top and bottom.",
                working: "\\lim_{x\\to0}\\frac{3\\cos3x}{1}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $x=0$.",
                working: "3\\cos0=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $3$",
            commonErrors: [
              "Forgetting the chain-rule factor 3.",
              "Quoting $\\lim\\frac{\\sin x}{x}=1$ without adjusting for the argument.",
            ],
          },
        },
        {
          id: "aahl-u5-continuity-lhopital-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Use L'Hopital's rule to evaluate $\\lim_{x\\to0}\\dfrac{e^x-1-x}{x^2}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Limit", answer: 0.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "L'Hopital's rule",
                statement:
                  "May be applied repeatedly while the form stays $\\frac00$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Check the form at $x=0$: numerator $1-1-0=0$, denominator $0$.",
                working: "\\frac00",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Differentiate numerator and denominator.",
                working: "\\lim\\frac{e^x-1}{2x}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "This is again $\\frac00$; differentiate again.",
                working: "\\lim\\frac{e^x}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute.",
                working: "\\frac12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac12$",
            commonErrors: [
              "Stopping after one application and claiming the limit is $\\frac00$ or $0$.",
            ],
          },
        },
        {
          id: "aahl-u5-continuity-lhopital-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 5,
          stem: "The function $f$ is defined by $f(x)=\\begin{cases}x^2+ax, & x\\le1\\\\ bx^2+3, & x>1\\end{cases}$. Given that $f$ is continuous and differentiable at $x=1$, find the values of $a$ and $b$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$a$", answer: 6 },
              { label: "$b$", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Continuity",
                statement: "Both pieces give the same value at $x=1$.",
              },
              {
                kind: "definition",
                name: "Differentiability",
                statement: "Both pieces have the same derivative at $x=1$.",
              },
            ],
            steps: [
              {
                reasoning: "Equate the values at $x=1$.",
                working: "1+a=b+3",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Differentiate each piece.",
                working: "f'(x)=2x+a\\ (x<1),\\quad 2bx\\ (x>1)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Equate the derivatives at $x=1$.",
                working: "2+a=2b",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $a=b+2$ into $2+a=2b$: $b+4=2b$.",
                working: "b=4,\\ a=6",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Check: $1+6=7$ and $4+3=7$; $2+6=8=2(4)$.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "$a=6$, $b=4$",
            commonErrors: [
              "Equating only the function values.",
              "Differentiating $bx^2+3$ as $2bx+3$.",
            ],
          },
        },
        {
          id: "aahl-u5-continuity-lhopital-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 12,
          stem: "Consider $g_n(x)=\\dfrac{x^n}{e^x}$ for integer $n\\ge1$, and the function $h(x)=\\dfrac{1-\\cos x}{x^2}$ for $x\\neq0$.",
          parts: [
            { label: "a", prompt: "Evaluate $\\lim_{x\\to0}h(x)$.", marks: 3 },
            {
              label: "b",
              prompt: "Show that $\\lim_{x\\to\\infty}\\dfrac{x}{e^x}=0$.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Show that $\\lim_{x\\to\\infty}\\dfrac{x^2}{e^x}=0$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Conjecture the value of $\\lim_{x\\to\\infty}g_n(x)$ and prove your conjecture by induction on $n$.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "L'Hopital's rule",
                statement:
                  "For $\\frac00$ or $\\frac\\infty\\infty$, $\\lim\\frac fg=\\lim\\frac{f'}{g'}$.",
              },
              {
                kind: "principle",
                name: "Induction",
                statement:
                  "Prove the base case and show that the statement for $n=k$ implies it for $n=k+1$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Substituting gives $\\frac00$; differentiate.",
                working: "\\lim\\frac{\\sin x}{2x}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Still $\\frac00$; differentiate again.",
                working: "\\lim\\frac{\\cos x}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Substitute.",
                working: "\\frac12",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "The form is $\\frac\\infty\\infty$; differentiate.",
                working: "\\lim_{x\\to\\infty}\\frac{1}{e^x}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "As $x\\to\\infty$, $e^x\\to\\infty$.",
                working: "=0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Apply the rule: the form is $\\frac\\infty\\infty$.",
                working: "\\lim\\frac{2x}{e^x}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "This is $2\\times$ the limit in (b).",
                working: "2\\times0=0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Conjecture from (b), (c).",
                working:
                  "\\lim_{x\\to\\infty}\\frac{x^n}{e^x}=0\\ \\text{for all } n\\ge1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Base case $n=1$ is part (b).",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Assume true for $n=k$. For $n=k+1$ the form is $\\frac\\infty\\infty$, so differentiate.",
                working: "\\lim\\frac{x^{k+1}}{e^x}=\\lim\\frac{(k+1)x^k}{e^x}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "By the assumption this equals $(k+1)\\times0$.",
                working: "=0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Conclude: true for $n=1$, and true for $k$ implies true for $k+1$, so true for all integers $n\\ge1$ by induction.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) $\\frac12$. (b), (c) shown. (d) The limit is $0$ for every $n\\ge1$; proved by induction.",
            commonErrors: [
              "Applying L'Hopital without checking the indeterminate form.",
              "Omitting the inductive conclusion statement.",
            ],
            examinerNote: "Exponentials dominate any power of $x$.",
          },
        },
        {
          id: "aahl-u5-continuity-lhopital-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Evaluate $\\lim_{x\\to0}\\dfrac{e^{3x}-1}{x}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3$" },
              { id: "b", text: "$1$" },
              { id: "c", text: "$0$" },
              { id: "d", text: "$\\dfrac13$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "L'Hopital's rule",
                statement:
                  "For a $\\frac00$ form, $\\lim\\frac fg=\\lim\\frac{f'}{g'}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Substitution gives $\\frac00$; differentiate top and bottom.",
                working: "\\lim_{x\\to0}\\frac{3e^{3x}}{1}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $x=0$.",
                working: "3e^0=3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $3$",
            commonErrors: [
              "Forgetting the chain-rule factor 3.",
              "Quoting $\\lim\\frac{e^x-1}{x}=1$ without the factor.",
            ],
          },
        },
        {
          id: "aahl-u5-continuity-lhopital-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Evaluate $\\lim_{x\\to0}\\dfrac{1-\\cos x}{x^2}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Limit", answer: 0.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "L'Hopital's rule",
                statement:
                  "May be applied repeatedly while the form stays $\\frac00$.",
              },
            ],
            steps: [
              {
                reasoning: "Substitution gives $\\frac00$.",
                working: "\\frac00",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Differentiate once.",
                working: "\\lim_{x\\to0}\\frac{\\sin x}{2x}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Still $\\frac00$; apply the rule again and substitute.",
                working: "\\lim_{x\\to0}\\frac{\\cos x}{2}=\\frac12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac12$",
            commonErrors: [
              "Stopping after one application and writing $0$.",
              "Differentiating $\\cos x$ as $\\sin x$.",
            ],
          },
        },
        {
          id: "aahl-u5-continuity-lhopital-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Evaluate $\\lim_{x\\to0}\\dfrac{\\ln(1+x)}{x}$.",
          response: { type: "numeric", parts: [{ label: "Limit", answer: 1 }] },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "L'Hopital's rule",
                statement:
                  "For a $\\frac00$ form, $\\lim\\frac fg=\\lim\\frac{f'}{g'}$.",
              },
            ],
            steps: [
              {
                reasoning: "Substitution gives $\\frac00$.",
                working: "\\frac00",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Differentiate numerator and denominator.",
                working: "\\lim_{x\\to0}\\frac{1/(1+x)}{1}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $x=0$.",
                working: "\\frac{1}{1}=1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1$",
            commonErrors: [
              "Differentiating $\\ln(1+x)$ as $\\frac{1}{x}$ instead of $\\frac{1}{1+x}$.",
            ],
          },
        },
        {
          id: "aahl-u5-continuity-lhopital-q8",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Use L'Hopital's rule to show that $\\lim_{x\\to0}\\dfrac{x-\\sin x}{x^3}=\\dfrac16$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "L'Hopital's rule",
                statement:
                  "May be applied repeatedly while the form stays $\\frac00$.",
              },
              {
                kind: "formula",
                name: "Standard limits",
                statement: "$\\lim_{x\\to0}\\frac{\\sin x}{x}=1$.",
              },
            ],
            steps: [
              {
                reasoning: "Check the form at $x=0$.",
                working: "\\frac00",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Differentiate once.",
                working: "\\lim_{x\\to0}\\frac{1-\\cos x}{3x^2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Still $\\frac00$; differentiate again.",
                working: "\\lim_{x\\to0}\\frac{\\sin x}{6x}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use $\\lim\\frac{\\sin x}{x}=1$.",
                working: "=\\frac16\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shown: $\\frac16$",
            commonErrors: [
              "Differentiating $x-\\sin x$ as $1+\\cos x$ (sign error).",
              "Stopping after two applications.",
            ],
          },
        },
        {
          id: "aahl-u5-continuity-lhopital-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "The function $f$ is defined by $f(x)=\\begin{cases}x^2+1, & x\\le1\\\\ ax+b, & x>1\\end{cases}$. Given that $f$ is continuous and differentiable at $x=1$, find $a$ and $b$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$a$", answer: 2 },
              { label: "$b$", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Continuity",
                statement: "Both pieces give the same value at $x=1$.",
              },
              {
                kind: "definition",
                name: "Differentiability",
                statement: "Both pieces have the same derivative at $x=1$.",
              },
            ],
            steps: [
              {
                reasoning: "Equate the values at $x=1$: $1+1=a+b$.",
                working: "a+b=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Equate the derivatives: left derivative is $2x$, so $2$ at $x=1$; right derivative is $a$.",
                working: "a=2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $a=2$ into $a+b=2$.",
                working: "b=0",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Check: both pieces give $3$ at $x=1$ and both derivatives equal $2$.",
                working: "f(1)=3,\\ f'(1)=2",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "$a=2$, $b=0$",
            commonErrors: [
              "Equating only the function values.",
              "Differentiating $ax+b$ as $ax$.",
            ],
          },
        },
        {
          id: "aahl-u5-continuity-lhopital-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following limits has the indeterminate form $\\frac00$ at $x=0$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\lim_{x\\to0}\\dfrac{x}{x+1}$" },
              { id: "b", text: "$\\lim_{x\\to0}\\dfrac{\\cos x}{x}$" },
              { id: "c", text: "$\\lim_{x\\to0}\\dfrac{\\tan x}{x}$" },
              { id: "d", text: "$\\lim_{x\\to1}\\dfrac{x}{x-1}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Indeterminate form",
                statement:
                  "$\\frac00$ cannot be evaluated by direct substitution.",
              },
            ],
            steps: [
              {
                reasoning: "Check each option by substitution.",
                working:
                  "\\text{(a) }0,\\ (\\text{b) undefined},\\ (\\text{c) }\\tfrac00,\\ (\\text{d) }\\tfrac10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Only (c) gives $\\frac00$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)**",
            commonErrors: [
              "Confusing an infinite limit with an indeterminate form.",
            ],
          },
        },
        {
          id: "aahl-u5-continuity-lhopital-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 5,
          stem: "Evaluate $\\lim_{x\\to0}\\dfrac{x-\\ln(1+x)}{x^2}$.",
          response: {
            type: "numeric",
            parts: [{ label: "Limit", answer: 0.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "L'Hopital's rule",
                statement:
                  "For a $\\frac00$ form, $\\lim\\frac fg=\\lim\\frac{f'}{g'}$.",
              },
            ],
            steps: [
              {
                reasoning: "Check the form at $x=0$.",
                working: "\\frac00",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Differentiate numerator and denominator.",
                working: "\\lim_{x\\to0}\\frac{1-\\frac1{1+x}}{2x}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Simplify the numerator: $1-\\frac1{1+x}=\\frac{x}{1+x}$.",
                working: "\\lim_{x\\to0}\\frac{x}{2x(1+x)}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cancel $x$ and substitute.",
                working: "\\lim_{x\\to0}\\frac{1}{2(1+x)}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate.",
                working: "\\frac12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac12$",
            commonErrors: [
              "Differentiating $\\ln(1+x)$ as $\\frac1x$.",
              "Applying L'Hopital again when the form is no longer indeterminate.",
            ],
          },
        },
        {
          id: "aahl-u5-continuity-lhopital-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Evaluate $\\lim_{x\\to0}\\dfrac{\\arctan x}{x}$.",
          response: { type: "numeric", parts: [{ label: "Limit", answer: 1 }] },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "L'Hopital's rule",
                statement:
                  "For a $\\frac00$ form, $\\lim\\frac fg=\\lim\\frac{f'}{g'}$.",
              },
              {
                kind: "formula",
                name: "Derivative of arctan",
                statement: "$\\frac{d}{dx}\\arctan x=\\frac1{1+x^2}$",
              },
            ],
            steps: [
              {
                reasoning: "Substitution gives $\\frac00$; differentiate.",
                working: "\\lim_{x\\to0}\\frac{1/(1+x^2)}{1}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify.",
                working: "\\lim_{x\\to0}\\frac1{1+x^2}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute $x=0$.",
                working: "1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1$",
            commonErrors: [
              "Writing the derivative of $\\arctan x$ as $\\frac{1}{1-x^2}$.",
            ],
          },
        },
        {
          id: "aahl-u5-continuity-lhopital-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "The function $f$ is defined by $f(x)=\\begin{cases}x^2+ax, & x<1\\\\ bx^3+2, & x\\ge1\\end{cases}$. Given that $f$ is continuous and differentiable at $x=1$, find $a$ and $b$.",
          parts: [
            {
              label: "a",
              prompt:
                "Use continuity at $x=1$ to obtain a relation between $a$ and $b$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Use differentiability at $x=1$ to obtain a second relation.",
              marks: 2,
            },
            { label: "c", prompt: "Solve for $a$ and $b$.", marks: 2 },
            {
              label: "d",
              prompt: "Verify that the two values of $f(1)$ and $f'(1)$ agree.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Continuity",
                statement: "Both pieces give the same value at $x=1$.",
              },
              {
                kind: "definition",
                name: "Differentiability",
                statement: "Both pieces have the same derivative at $x=1$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Equate the two expressions at $x=1$.",
                working: "1+a=b+2",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Rearrange.",
                working: "a-b=1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Differentiate each piece.",
                working: "f'(x)=2x+a\\ (x<1),\\quad 3bx^2\\ (x>1)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Equate at $x=1$.",
                working: "2+a=3b",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Substitute $a=b+1$ into $2+a=3b$: $3+b=3b$.",
                working: "b=\\frac32,\\quad a=\\frac52",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State the values.",
                working: "a=\\frac52,\\ b=\\frac32",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Check the function values.",
                working: "1+\\frac52=\\frac72=\\frac32+2",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Check the derivatives.",
                working: "2+\\frac52=\\frac92=3\\left(\\frac32\\right)",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "$a=\\frac52$, $b=\\frac32$",
            commonErrors: [
              "Differentiating $bx^3+2$ as $3bx^2+2$.",
              "Using only one of the two conditions.",
            ],
          },
        },
        {
          id: "aahl-u5-continuity-lhopital-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Evaluate $\\lim_{x\\to0}\\dfrac{1-\\cos 2x}{x^2}$.",
          response: { type: "numeric", parts: [{ label: "Limit", answer: 2 }] },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "L'Hopital's rule",
                statement:
                  "May be applied repeatedly while the form stays $\\frac00$.",
              },
            ],
            steps: [
              {
                reasoning: "Substitution gives $\\frac00$; differentiate once.",
                working: "\\lim_{x\\to0}\\frac{2\\sin 2x}{2x}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This is still $\\frac00$; use $\\lim\\frac{\\sin u}{u}=1$ with $u=2x$.",
                working:
                  "\\lim_{x\\to0}\\frac{\\sin 2x}{x}=2\\lim\\frac{\\sin2x}{2x}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "2\\times1=2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2$",
            commonErrors: [
              "Writing the answer as $1$ by ignoring the factor 2 inside $\\cos2x$.",
            ],
          },
        },
        {
          id: "aahl-u5-continuity-lhopital-q15",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Evaluate $\\lim_{x\\to0}\\dfrac{x}{e^x-1}$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$" },
              { id: "b", text: "$0$" },
              { id: "c", text: "$-1$" },
              { id: "d", text: "$e$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "L'Hopital's rule",
                statement:
                  "For a $\\frac00$ form, $\\lim\\frac fg=\\lim\\frac{f'}{g'}$.",
              },
            ],
            steps: [
              {
                reasoning: "Substitution gives $\\frac00$; differentiate.",
                working: "\\lim_{x\\to0}\\frac{1}{e^x}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $x=0$.",
                working: "e^0=1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $1$",
            commonErrors: ["Differentiating $e^x-1$ as $e^x-1$."],
          },
        },
        {
          id: "aahl-u5-continuity-lhopital-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 10,
          stem: "Consider the following three limits.",
          parts: [
            {
              label: "a",
              prompt:
                "Evaluate $\\lim_{x\\to0}\\dfrac{\\sin x-x\\cos x}{x^3}$.",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Evaluate $\\lim_{x\\to\\infty}\\dfrac{\\ln x}{x}$.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate $\\lim_{x\\to0}\\dfrac{x^2}{1-\\cos x}$.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "L'Hopital's rule",
                statement:
                  "May be applied repeatedly while the form stays $\\frac00$ or $\\frac\\infty\\infty$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Check the form at $x=0$.",
                working: "\\frac00",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Differentiate once; $\\frac{d}{dx}(\\sin x-x\\cos x)=x\\sin x$.",
                working: "\\lim_{x\\to0}\\frac{x\\sin x}{3x^2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Simplify to a standard limit.",
                working: "\\lim_{x\\to0}\\frac{\\sin x}{3x}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "\\frac13",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "The form is $\\frac\\infty\\infty$; differentiate.",
                working:
                  "\\lim_{x\\to\\infty}\\frac{1/x}{1}=\\lim_{x\\to\\infty}\\frac1x",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "The new form is determinate.",
                working: "\\frac{1/x}{1}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "As $x\\to\\infty$, $\\frac1x\\to0$.",
                working: "0",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Check the form.",
                working: "\\frac00",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Differentiate once.",
                working: "\\lim_{x\\to0}\\frac{2x}{\\sin x}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Differentiate again (or use $\\frac{\\sin x}{x}\\to1$).",
                working: "\\lim_{x\\to0}\\frac{2}{\\cos x}=2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $\\frac13$. (b) $0$. (c) $2$.",
            commonErrors: [
              "Applying L'Hopital to $\\frac{2x}{\\sin x}$ without checking the form is still indeterminate.",
              "Writing $\\frac{d}{dx}\\ln x=\\frac1{x^2}$.",
            ],
            examinerNote:
              "In (b) L'Hopital is justified because $\\ln x\\to\\infty$ and $x\\to\\infty$.",
          },
        },
        {
          id: "aahl-u5-continuity-lhopital-q17",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The function $f$ is defined by $f(x)=\\begin{cases}x^2, & x\\le k\\\\ 2x-1, & x>k\\end{cases}$. Find the value of $k$ for which $f$ is continuous.",
          response: { type: "numeric", parts: [{ label: "$k$", answer: 1 }] },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Continuity",
                statement: "Both pieces give the same value at the join.",
              },
            ],
            steps: [
              {
                reasoning: "Equate the two expressions at $x=k$.",
                working: "k^2=2k-1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rearrange into a quadratic.",
                working: "k^2-2k+1=0\\Rightarrow(k-1)^2=0",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Solve.", working: "k=1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k=1$",
            commonErrors: [
              "Forgetting that continuity is needed but not differentiability.",
            ],
          },
        },
      ],
    },
    {
      id: "aahl-u5-first-principles",
      title: "Differentiation from first principles",
      skill:
        "Use $f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$ to derive derivatives.",
      lesson: {
        sections: [
          {
            heading: "The definition",
            body: "The gradient of the chord from $x$ to $x+h$ is $\\frac{f(x+h)-f(x)}{h}$. As $h\\to0$ the chord becomes the tangent. Expand $f(x+h)$ fully, cancel the terms that do not contain $h$ in the numerator, divide by $h$, and only then let $h\\to0$.",
          },
          {
            heading: "Useful expansions",
            body: "For powers use the binomial expansion: $(x+h)^3=x^3+3x^2h+3xh^2+h^3$. For trigonometric functions use compound angle identities with $\\lim_{h\\to0}\\frac{\\sin h}{h}=1$ and $\\lim_{h\\to0}\\frac{\\cos h-1}{h}=0$. For quotients, combine the fractions over a common denominator first.",
          },
        ],
        keyFormulas: [
          {
            name: "Derivative",
            statement:
              "$f'(x)=\\displaystyle\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$",
          },
          {
            name: "Standard limits",
            statement:
              "$\\displaystyle\\lim_{h\\to0}\\frac{\\sin h}{h}=1,\\quad \\lim_{h\\to0}\\frac{\\cos h-1}{h}=0$",
          },
        ],
        workedExample: {
          problem: "Differentiate $f(x)=x^2$ from first principles.",
          solution: "$\\frac{(x+h)^2-x^2}{h}=\\frac{2xh+h^2}{h}=2x+h\\to2x$.",
        },
      },
      questions: [
        {
          id: "aahl-u5-first-principles-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Using $f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$, find $f'(x)$ for $f(x)=3x^2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6x$" },
              { id: "b", text: "$3x$" },
              { id: "c", text: "$6x+h$" },
              { id: "d", text: "$3x^2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "First principles",
                statement: "$f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$",
              },
            ],
            steps: [
              {
                reasoning: "Expand and simplify the difference quotient.",
                working: "\\frac{3(x+h)^2-3x^2}{h}=\\frac{6xh+3h^2}{h}=6x+3h",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Let $h\\to0$.",
                working: "6x",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $6x$",
            commonErrors: ["Leaving $h$ in the answer (option c) ."],
          },
        },
        {
          id: "aahl-u5-first-principles-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Differentiate $f(x)=x^3$ from first principles, and hence find $f'(2)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$f'(2)$", answer: 12 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "First principles",
                statement: "$f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$",
              },
              {
                kind: "theorem",
                name: "Binomial expansion",
                statement: "$(x+h)^3=x^3+3x^2h+3xh^2+h^3$",
              },
            ],
            steps: [
              {
                reasoning: "Set up the quotient.",
                working: "\\frac{(x+h)^3-x^3}{h}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Expand and cancel $x^3$; divide by $h$.",
                working: "\\frac{3x^2h+3xh^2+h^3}{h}=3x^2+3xh+h^2",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Let $h\\to0$.",
                working: "f'(x)=3x^2",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Evaluate at 2.",
                working: "3(4)=12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$f'(x)=3x^2$; $f'(2)=12$",
            commonErrors: ["Writing $(x+h)^3=x^3+h^3$."],
          },
        },
        {
          id: "aahl-u5-first-principles-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 5,
          stem: "Use differentiation from first principles to show that the derivative of $f(x)=\\dfrac1x$ is $-\\dfrac1{x^2}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "First principles",
                statement: "$f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$",
              },
            ],
            steps: [
              {
                reasoning: "Write the quotient.",
                working: "\\frac{\\frac1{x+h}-\\frac1x}{h}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combine over a common denominator.",
                working: "\\frac{x-(x+h)}{x(x+h)h}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify the numerator.",
                working: "\\frac{-h}{hx(x+h)}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Cancel $h$ (valid since $h\\ne0$ in the limit).",
                working: "\\frac{-1}{x(x+h)}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Let $h\\to0$.",
                working: "f'(x)=-\\frac1{x^2}\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shown: $f'(x)=-\\frac1{x^2}$",
            commonErrors: ["Setting $h=0$ before cancelling."],
          },
        },
        {
          id: "aahl-u5-first-principles-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "Let $f(x)=\\sin x$, with $x$ in radians.",
          parts: [
            {
              label: "a",
              prompt:
                "Show that $\\dfrac{f(x+h)-f(x)}{h}=\\sin x\\left(\\dfrac{\\cos h-1}{h}\\right)+\\cos x\\left(\\dfrac{\\sin h}{h}\\right)$.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Given $\\lim_{h\\to0}\\frac{\\sin h}{h}=1$ and $\\lim_{h\\to0}\\frac{\\cos h-1}{h}=0$, deduce that $f'(x)=\\cos x$.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Evaluate $\\dfrac{\\sin h}{h}$ for $h=0.1$ and $h=0.01$, giving your answers to 6 significant figures, and comment.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Use the result in (b) to find the equation of the tangent to $y=\\sin x$ at $x=\\frac\\pi3$.",
              marks: 3,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              {
                label: "(c) $\\frac{\\sin 0.1}{0.1}$",
                answer: 0.998334,
                tolerance: 0.000001,
              },
              {
                label: "(c) $\\frac{\\sin 0.01}{0.01}$",
                answer: 0.999983,
                tolerance: 0.000001,
              },
              { label: "(d) gradient of tangent", answer: 0.5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Compound angle",
                statement: "$\\sin(x+h)=\\sin x\\cos h+\\cos x\\sin h$",
              },
              {
                kind: "definition",
                name: "First principles",
                statement: "$f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Expand $\\sin(x+h)$.",
                working: "\\frac{\\sin x\\cos h+\\cos x\\sin h-\\sin x}{h}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Group the $\\sin x$ terms.",
                working: "\\frac{\\sin x(\\cos h-1)+\\cos x\\sin h}{h}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Split the fraction.",
                working:
                  "\\sin x\\frac{\\cos h-1}{h}+\\cos x\\frac{\\sin h}{h}\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Take limits term by term.",
                working: "\\sin x(0)+\\cos x(1)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Simplify.",
                working: "f'(x)=\\cos x",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Evaluate with a calculator in radian mode.",
                working:
                  "\\frac{\\sin0.1}{0.1}=0.998334,\\quad\\frac{\\sin0.01}{0.01}=0.999983",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The values approach 1 as $h$ decreases, consistent with the limit.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Gradient at $\\frac\\pi3$.",
                working: "\\cos\\frac\\pi3=\\frac12",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Point on the curve: $y=\\sin\\frac\\pi3=\\frac{\\sqrt3}2$.",
                working: "\\left(\\frac\\pi3,\\frac{\\sqrt3}{2}\\right)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Write the tangent.",
                working:
                  "y-\\frac{\\sqrt3}2=\\frac12\\left(x-\\frac\\pi3\\right)",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) shown. (b) $\\cos x$. (c) $0.998334$, $0.999983$; tends to 1. (d) $y-\\frac{\\sqrt3}2=\\frac12\\left(x-\\frac\\pi3\\right)$.",
            commonErrors: [
              "Using degree mode in (c).",
              "Using the gradient $\\sin\\frac\\pi3$.",
            ],
          },
        },
        {
          id: "aahl-u5-first-principles-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Let $f(x)=4x^2$. Using $f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$, find $f'(x)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8x$" },
              { id: "b", text: "$4x$" },
              { id: "c", text: "$2x$" },
              { id: "d", text: "$8x^2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "First principles",
                statement: "$f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$",
              },
            ],
            steps: [
              {
                reasoning: "Expand and simplify the difference quotient.",
                working: "\\frac{4(x+h)^2-4x^2}{h}=\\frac{8xh+4h^2}{h}=8x+4h",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Let $h\\to0$.",
                working: "8x",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** $8x$",
            commonErrors: [
              "Forgetting to multiply by the coefficient 4.",
              "Leaving $h$ in the answer.",
            ],
          },
        },
        {
          id: "aahl-u5-first-principles-q6",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Use differentiation from first principles to find $f'(0)$ for $f(x)=\\dfrac{1}{x+1}$.",
          response: {
            type: "numeric",
            parts: [{ label: "$f'(0)$", answer: -1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "First principles",
                statement: "$f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$",
              },
            ],
            steps: [
              {
                reasoning: "Write the quotient.",
                working: "\\frac{\\frac1{x+h+1}-\\frac1{x+1}}{h}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combine over a common denominator.",
                working: "\\frac{x+1-(x+h+1)}{(x+1)(x+h+1)h}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify and cancel $h$.",
                working: "\\frac{-1}{(x+1)(x+h+1)}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Let $h\\to0$ and substitute $x=0$.",
                working: "f'(0)=-1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$f'(0)=-1$",
            commonErrors: [
              "Setting $h=0$ before cancelling.",
              "Sign error in the numerator.",
            ],
          },
        },
        {
          id: "aahl-u5-first-principles-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Differentiate $f(x)=x^4$ from first principles.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "First principles",
                statement: "$f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$",
              },
              {
                kind: "theorem",
                name: "Binomial expansion",
                statement: "$(x+h)^4=x^4+4x^3h+6x^2h^2+4xh^3+h^4$",
              },
            ],
            steps: [
              {
                reasoning: "Set up the quotient.",
                working: "\\frac{(x+h)^4-x^4}{h}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Expand and cancel $x^4$.",
                working: "\\frac{4x^3h+6x^2h^2+4xh^3+h^4}{h}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by $h$.",
                working: "4x^3+6x^2h+4xh^2+h^3",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Let $h\\to0$.",
                working: "f'(x)=4x^3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$f'(x)=4x^3$",
            commonErrors: [
              "Writing $(x+h)^4=x^4+h^4$.",
              "Stopping before taking the limit.",
            ],
          },
        },
        {
          id: "aahl-u5-first-principles-q8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Let $f(x)=x^3+2x$. Using the rules of differentiation, find $f'(1)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$f'(1)$", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Power rule",
                statement: "$\\frac{d}{dx}x^n=nx^{n-1}$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate term by term.",
                working: "f'(x)=3x^2+2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $x=1$.",
                working: "f'(1)=3+2",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Evaluate.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Differentiating $2x$ as $2$."],
          },
        },
        {
          id: "aahl-u5-first-principles-q9",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 5,
          stem: "Use differentiation from first principles to show that the derivative of $f(x)=\\dfrac{1}{x^2}$ is $-\\dfrac{2}{x^3}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "First principles",
                statement: "$f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$",
              },
            ],
            steps: [
              {
                reasoning: "Write the quotient.",
                working: "\\frac{\\frac1{(x+h)^2}-\\frac1{x^2}}{h}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combine over a common denominator.",
                working: "\\frac{x^2-(x+h)^2}{x^2(x+h)^2h}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Expand $(x+h)^2$ and simplify the numerator.",
                working: "\\frac{-2xh-h^2}{x^2(x+h)^2h}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Cancel $h$.",
                working: "\\frac{-(2x+h)}{x^2(x+h)^2}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Let $h\\to0$.",
                working:
                  "f'(x)=-\\frac{2x}{x^4}=-\\frac2{x^3}\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Shown: $f'(x)=-\\frac{2}{x^3}$",
            commonErrors: [
              "Sign error when expanding $x^2-(x+h)^2$.",
              "Forgetting the denominator factor $(x+h)^2$.",
            ],
          },
        },
        {
          id: "aahl-u5-first-principles-q10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In the definition $f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$, why must the factor $h$ be cancelled before taking the limit?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Because the quotient is undefined at $h=0$, so the limit cannot be evaluated directly.",
              },
              { id: "b", text: "Because $h$ tends to $1$ as $h\\to0$." },
              { id: "c", text: "Because $f(x+h)$ is undefined when $h=0$." },
              {
                id: "d",
                text: "Because $\\lim_{h\\to0}h=0$ makes every term vanish.",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "First principles",
                statement: "$f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "At $h=0$ the numerator and denominator are both $0$, so direct substitution is impossible.",
                working: "\\frac00\\ \\text{at}\\ h=0",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Hence we simplify algebraically first, then take the limit.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)**",
            commonErrors: [
              "Believing the derivative is obtained by simply putting $h=0$.",
            ],
          },
        },
        {
          id: "aahl-u5-first-principles-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Let $f(x)=\\cos x$ (with $x$ in radians). Use differentiation from first principles to find $f'\\left(\\frac\\pi2\\right)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$f'(\\pi/2)$", answer: -1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "First principles",
                statement: "$f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$",
              },
              {
                kind: "formula",
                name: "Compound angle",
                statement: "$\\cos(x+h)=\\cos x\\cos h-\\sin x\\sin h$",
              },
              {
                kind: "formula",
                name: "Standard limits",
                statement:
                  "$\\lim_{h\\to0}\\frac{\\sin h}{h}=1$, $\\lim_{h\\to0}\\frac{\\cos h-1}{h}=0$",
              },
            ],
            steps: [
              {
                reasoning: "Expand $\\cos(x+h)$ and group terms.",
                working: "\\frac{\\cos x(\\cos h-1)-\\sin x\\sin h}{h}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Split and apply the standard limits to get $f'(x)=-\\sin x$.",
                working: "f'(x)=-\\sin x",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute $x=\\frac\\pi2$.",
                working: "-\\sin\\frac\\pi2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "-1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$f'\\left(\\frac\\pi2\\right)=-1$",
            commonErrors: [
              "Sign error in the compound angle expansion.",
              "Working in degrees for the standard limits.",
            ],
          },
        },
        {
          id: "aahl-u5-first-principles-q12",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 5,
          stem: "Use differentiation from first principles to show that $\\dfrac{d}{dx}\\sqrt{x}=\\dfrac{1}{2\\sqrt{x}}$ for $x>0$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "First principles",
                statement: "$f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$",
              },
              {
                kind: "technique",
                name: "Rationalising",
                statement:
                  "Multiply numerator and denominator by the conjugate $\\sqrt{x+h}+\\sqrt{x}$.",
              },
            ],
            steps: [
              {
                reasoning: "Write the quotient.",
                working: "\\frac{\\sqrt{x+h}-\\sqrt{x}}{h}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply top and bottom by the conjugate.",
                working: "\\frac{(x+h)-x}{h(\\sqrt{x+h}+\\sqrt{x})}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify the numerator.",
                working: "\\frac{h}{h(\\sqrt{x+h}+\\sqrt{x})}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Cancel $h$ (valid since $h\\ne0$ in the limit).",
                working: "\\frac{1}{\\sqrt{x+h}+\\sqrt{x}}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Let $h\\to0$.",
                working: "\\frac{1}{2\\sqrt{x}}\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Shown: $\\frac{d}{dx}\\sqrt{x}=\\frac{1}{2\\sqrt{x}}$",
            commonErrors: [
              "Cancelling $h$ with $\\sqrt{x+h}-\\sqrt{x}$ directly.",
              "Writing the answer as $\\frac{1}{\\sqrt{x}}$.",
            ],
          },
        },
        {
          id: "aahl-u5-first-principles-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Let $f(x)=x^2+bx$.",
          parts: [
            { label: "a", prompt: "Show that $f'(x)=2x+b$.", marks: 3 },
            {
              label: "b",
              prompt:
                "The tangent to the curve at $x=1$ has gradient $5$. Find $b$.",
              marks: 2,
            },
            { label: "c", prompt: "Find $f'(2)$.", marks: 1 },
            {
              label: "d",
              prompt:
                "Find the $x$-coordinate of the point where the tangent is horizontal.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) $b$", answer: 3 },
              { label: "(c) $f'(2)$", answer: 7 },
              { label: "(d) $x$", answer: -1.5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "First principles",
                statement: "$f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$",
              },
              {
                kind: "principle",
                name: "Stationary point",
                statement: "A horizontal tangent has gradient $0$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Form the difference quotient.",
                working: "\\frac{(x+h)^2+b(x+h)-x^2-bx}{h}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Expand and cancel terms not containing $h$.",
                working: "\\frac{2xh+h^2+bh}{h}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Divide by $h$ and let $h\\to0$.",
                working: "2x+b\\quad\\text{(AG)}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Set $f'(1)=5$.",
                working: "2+b=5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Solve.",
                working: "b=3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Substitute $x=2$ and $b=3$.",
                working: "f'(2)=4+3=7",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Set the gradient to zero.",
                working: "2x+3=0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Solve.",
                working: "x=-\\frac32",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) shown. (b) $b=3$. (c) $7$. (d) $x=-\\frac32$.",
            commonErrors: [
              "Differentiating $bx$ as $b$.",
              "Using $f'(x)=0$ without setting the correct gradient.",
            ],
          },
        },
        {
          id: "aahl-u5-first-principles-q14",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Let $f(x)=x^5$. Using $f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$, find $f'(1)$.",
          response: {
            type: "numeric",
            parts: [{ label: "$f'(1)$", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Power rule",
                statement: "$\\frac{d}{dx}x^n=nx^{n-1}$",
              },
            ],
            steps: [
              {
                reasoning: "Differentiate $x^5$.",
                working: "f'(x)=5x^4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Substitute $x=1$.",
                working: "5(1)=5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Writing $f'(x)=5x^5$."],
          },
        },
        {
          id: "aahl-u5-first-principles-q15",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which is the correct first step in finding $f'(x)$ for $f(x)=x^2$ from first principles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\dfrac{(x+h)^2-x^2}{h}$" },
              { id: "b", text: "$\\dfrac{x^2-h^2}{h}$" },
              { id: "c", text: "$2x$" },
              { id: "d", text: "$\\dfrac{(x+h)^2+x^2}{h}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "First principles",
                statement: "$f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$",
              },
            ],
            steps: [
              {
                reasoning: "Substitute $f(x)=x^2$ into the definition.",
                working: "\\frac{(x+h)^2-x^2}{h}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Only option (a) matches.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)**",
            commonErrors: ["Writing $f(x+h)-f(x)$ as $(x+h)^2+x^2$."],
          },
        },
        {
          id: "aahl-u5-first-principles-q16",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 10,
          stem: "Let $f(x)=x^4$.",
          parts: [
            {
              label: "a",
              prompt: "Write down the expansion of $(x+h)^4$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Use differentiation from first principles to show that $f'(x)=4x^3$.",
              marks: 4,
            },
            { label: "c", prompt: "Find $f'(2)$.", marks: 1 },
            {
              label: "d",
              prompt: "Find the gradient of the tangent to $y=x^4$ at $x=1$.",
              marks: 1,
            },
            {
              label: "e",
              prompt:
                "Hence find the equation of the tangent to $y=x^4$ at the point $(1,1)$.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "First principles",
                statement: "$f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$",
              },
              {
                kind: "theorem",
                name: "Binomial expansion",
                statement: "$(x+h)^4=x^4+4x^3h+6x^2h^2+4xh^3+h^4$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Expand by the binomial theorem.",
                working: "(x+h)^4=x^4+4x^3h+6x^2h^2+4xh^3+h^4",
                marks: 2,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Form the difference quotient and cancel $x^4$.",
                working: "\\frac{4x^3h+6x^2h^2+4xh^3+h^4}{h}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Divide by $h$.",
                working: "4x^3+6x^2h+4xh^2+h^3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Take the limit as $h\\to0$.",
                working: "f'(x)=4x^3\\quad\\text{(AG)}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the conclusion.",
                working: "4x^3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Substitute $x=2$.",
                working: "f'(2)=4(8)=32",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "The tangent gradient equals $f'(1)$.",
                working: "f'(1)=4",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning: "Use point-gradient form through $(1,1)$.",
                working: "y-1=4(x-1)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "e",
                reasoning: "Simplify.",
                working: "y=4x-3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) shown. (b) $4x^3$. (c) $32$. (d) $4$. (e) $y=4x-3$.",
            commonErrors: [
              "Forgetting the term $6x^2h^2$ in the expansion.",
              "Using $f(1)=1$ as the gradient.",
            ],
          },
        },
        {
          id: "aahl-u5-first-principles-q17",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Let $f(x)=3x^2-4x+1$. Verify by differentiation from first principles that $f'(2)=8$.",
          response: {
            type: "numeric",
            parts: [{ label: "$f'(2)$", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "First principles",
                statement: "$f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Expand $f(x+h)-f(x)$ and cancel the constant terms.",
                working: "6xh+3h^2-4h",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divide by $h$ and let $h\\to0$ to get $f'(x)=6x-4$.",
                working: "6x-4",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Substitute $x=2$.",
                working: "12-4=8",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$f'(2)=8$",
            commonErrors: ["Differentiating the constant $1$ as $1$."],
          },
        },
      ],
    },
  ],
};
