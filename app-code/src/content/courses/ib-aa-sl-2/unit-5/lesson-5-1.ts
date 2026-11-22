import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "aasl-u5-lesson-5-1",
  code: "5-1",
  title: "Introduction to Differentiation",
  goal: "I CAN differentiate polynomial functions, interpret the derivative as a gradient, and find equations of tangents and normals.",
  standards: ["SL 5.1", "SL 5.2", "SL 5.3", "SL 5.4"],
  vocabulary: [
    { term: "Limit", definition: "The value that an expression approaches as a variable approaches a given value, for example $\\lim_{h\\to0}(2x+h)=2x$." },
    { term: "Derivative", definition: "The gradient function $f'(x)=\\lim_{h\\to0}\\dfrac{f(x+h)-f(x)}{h}$, giving the gradient of the tangent at each point of the curve." },
    { term: "Tangent", definition: "A straight line that touches a curve at a point and has the same gradient as the curve at that point." },
    { term: "Normal", definition: "The straight line perpendicular to the tangent at the point of contact." },
    { term: "Increasing function", definition: "A function is increasing on an interval where $f'(x)>0$ and decreasing where $f'(x)<0$." },
    { term: "Stationary point", definition: "A point on a curve where $f'(x)=0$." },
  ],
  concepts: [
    {
      id: "aasl-u5-derivative-basics",
      title: "The derivative and increasing or decreasing functions",
      skill: "Use limits and the power rule to differentiate, and use the sign of the derivative to find where a function increases or decreases.",
      lesson: {
        sections: [
          {
            heading: "The derivative as a limit",
            body: "The gradient of a chord from $(x,f(x))$ to $(x+h,f(x+h))$ is $\\dfrac{f(x+h)-f(x)}{h}$. As $h\\to0$ the chord approaches the tangent, so $f'(x)=\\lim_{h\\to0}\\dfrac{f(x+h)-f(x)}{h}$. To apply this, expand $f(x+h)$, simplify the numerator so that every term has a factor $h$, cancel, and only then let $h\\to0$.",
          },
          {
            heading: "Power rule and monotonicity",
            body: "For $f(x)=ax^n$, $f'(x)=anx^{n-1}$, and the derivative of a sum is the sum of derivatives. Rewrite roots and reciprocals as powers first, for example $\\frac1{x^2}=x^{-2}$. The function is **increasing** where $f'(x)>0$ and **decreasing** where $f'(x)<0$. Solve $f'(x)=0$ to find the boundaries, then test the sign of $f'$ in each interval.",
          },
        ],
        keyFormulas: [
          { name: "First principles", statement: "$f'(x)=\\lim_{h\\to0}\\dfrac{f(x+h)-f(x)}{h}$" },
          { name: "Power rule", statement: "$f(x)=ax^n\\Rightarrow f'(x)=anx^{n-1}$" },
        ],
        workedExample: {
          problem: "Find the values of $x$ for which $f(x)=x^3-3x$ is decreasing.",
          solution: "$f'(x)=3x^2-3=3(x-1)(x+1)$. This is negative between its roots, so $f$ is decreasing for $-1<x<1$.",
        },
      },
      questions: [
        {
          id: "aasl-u5-derivative-basics-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Differentiate $f(x)=3x^4-2x+5$ with respect to $x$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3x^3-2$" },
              { id: "b", text: "$12x^3-2x$" },
              { id: "c", text: "$12x^3-2$" },
              { id: "d", text: "$12x^3-2+5$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule", statement: "$\\dfrac{d}{dx}(ax^n)=anx^{n-1}$; the derivative of a constant is $0$." },
            ],
            steps: [
              { reasoning: "Differentiate $3x^4$ and $-2x$ term by term.", working: "12x^3-2", marks: 1, markCode: "M" },
              { reasoning: "The constant $5$ differentiates to $0$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $f'(x)=12x^3-2$",
            commonErrors: ["Not reducing the power of $x$ in $-2x$ to give a constant.", "Keeping the constant term $5$."],
          },
        },
        {
          id: "aasl-u5-derivative-basics-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The function $f$ is defined by $f(x)=x^3-6x^2+5$.\n\nFind the two values of $x$ at which the graph of $f$ changes from increasing to decreasing or from decreasing to increasing. Hence state the interval on which $f$ is decreasing.",
          response: {
            type: "numeric",
            parts: [
              { label: "Smaller value of $x$", answer: 0 },
              { label: "Larger value of $x$", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Monotonicity", statement: "$f$ is decreasing where $f'(x)<0$ and increasing where $f'(x)>0$." },
            ],
            steps: [
              { reasoning: "Differentiate term by term.", working: "f'(x)=3x^2-12x", marks: 1, markCode: "A" },
              { reasoning: "The behaviour changes where $f'(x)=0$.", working: "3x(x-4)=0\\Rightarrow x=0,\\ 4", marks: 1, markCode: "M" },
              { reasoning: "The quadratic $f'$ has positive leading coefficient, so it is negative between its roots.", working: "f\\text{ is decreasing for }0<x<4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=0$ and $x=4$; $f$ is decreasing for $0<x<4$",
            commonErrors: ["Solving $f(x)=0$ instead of $f'(x)=0$.", "Stating the interval where $f'>0$."],
          },
        },
        {
          id: "aasl-u5-derivative-basics-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Let $f(x)=x^2+3x$. Use differentiation from first principles to show that $f'(x)=2x+3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Derivative from first principles", statement: "$f'(x)=\\lim_{h\\to0}\\dfrac{f(x+h)-f(x)}{h}$" },
            ],
            steps: [
              { reasoning: "Write the difference quotient with $f(x+h)=(x+h)^2+3(x+h)$.", working: "\\frac{(x+h)^2+3(x+h)-(x^2+3x)}{h}", marks: 1, markCode: "M" },
              { reasoning: "Expand and cancel the terms $x^2$ and $3x$.", working: "\\frac{x^2+2xh+h^2+3x+3h-x^2-3x}{h}=\\frac{2xh+h^2+3h}{h}", marks: 1, markCode: "A" },
              { reasoning: "Divide every term by $h$ (valid since $h\\ne0$ in the limit process).", working: "2x+h+3", marks: 1, markCode: "M" },
              { reasoning: "Let $h\\to0$. (AG)", working: "f'(x)=\\lim_{h\\to0}(2x+3+h)=2x+3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f'(x)=2x+3$",
            commonErrors: ["Letting $h=0$ before cancelling the factor $h$, giving $\\frac00$.", "Expanding $(x+h)^2$ as $x^2+h^2$."],
            examinerNote: "The answer is given, so every line of working must be shown for full marks. Notation $\\lim_{h\\to0}$ must be present for the final A mark.",
          },
        },
        {
          id: "aasl-u5-derivative-basics-q4",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 10,
          stem: "The function $f$ is defined by $f(x)=2x^3-9x^2+12x+1$.",
          parts: [
            { label: "a", prompt: "Find $f'(x)$.", marks: 2 },
            { label: "b", prompt: "Solve $f'(x)=0$.", marks: 3 },
            { label: "c", prompt: "Hence find the values of $x$ for which $f$ is increasing. Justify your answer.", marks: 3 },
            { label: "d", prompt: "Find $f'\\left(\\tfrac32\\right)$ and interpret its sign.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Smaller solution", answer: 1 },
              { label: "(b) Larger solution", answer: 2 },
              { label: "(d) $f'\\left(\\tfrac32\\right)$", answer: -1.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule", statement: "$\\dfrac{d}{dx}(ax^n)=anx^{n-1}$" },
              { kind: "property", name: "Monotonicity", statement: "$f'(x)>0$ means $f$ is increasing; $f'(x)<0$ means $f$ is decreasing." },
            ],
            steps: [
              { part: "a", reasoning: "Differentiate each term.", working: "f'(x)=6x^2-18x+12", marks: 2, markCode: "A" },
              { part: "b", reasoning: "Set the derivative to zero and take out the common factor $6$.", working: "6(x^2-3x+2)=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Factorise the quadratic.", working: "6(x-1)(x-2)=0", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Read off the solutions.", working: "x=1\\ \\text{or}\\ x=2", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$f'$ is an upward-opening parabola with roots at $1$ and $2$; it is positive outside the roots.", working: "f'(x)>0 \\iff x<1\\ \\text{or}\\ x>2", marks: 2, markCode: "A" },
              { part: "c", reasoning: "State the conclusion using the sign of the derivative.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Substitute into $f'$.", working: "f'\\left(\\tfrac32\\right)=6\\left(\\tfrac94\\right)-27+12=-1.5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Negative gradient means $f$ is decreasing at $x=\\frac32$, consistent with $1<x<2$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $6x^2-18x+12$ (b) $x=1,2$ (c) increasing for $x<1$ and $x>2$ (d) $-1.5$, so $f$ is decreasing there",
            commonErrors: ["Choosing the interval between the roots for increasing.", "Dropping the factor $6$ when factorising, giving wrong roots."],
          },
        },
        {
          id: "aasl-u5-derivative-basics-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Differentiate $f(x)=5x^3-4x^2+x-7$ with respect to $x$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$15x^2-8x-7$" },
              { id: "b", text: "$15x^2-8x$" },
              { id: "c", text: "$5x^2-8x+1$" },
              { id: "d", text: "$15x^2-8x+1$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule", statement: "$\\dfrac{d}{dx}(ax^n)=anx^{n-1}$; the derivative of a constant is $0$." },
            ],
            steps: [
              { reasoning: "Differentiate each power term, including $x$ which gives $1$.", working: "15x^2-8x+1", marks: 1, markCode: "M" },
              { reasoning: "The constant term $-7$ differentiates to $0$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $f'(x)=15x^2-8x+1$",
            commonErrors: ["Keeping the constant term $-7$.", "Reducing the power of $x$ incorrectly in $x$."],
          },
        },
        {
          id: "aasl-u5-derivative-basics-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Let $f(x)=\\dfrac{3}{x^2}$. Find $f'(x)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-\\dfrac{6}{x}$" },
              { id: "b", text: "$-\\dfrac{6}{x^3}$" },
              { id: "c", text: "$-\\dfrac{3}{x^3}$" },
              { id: "d", text: "$\\dfrac{6}{x^3}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule with negative powers", statement: "$\\dfrac{d}{dx}(ax^n)=anx^{n-1}$, valid for negative $n$." },
            ],
            steps: [
              { reasoning: "Rewrite the function as a power of $x$.", working: "f(x)=3x^{-2}", marks: 1, markCode: "M" },
              { reasoning: "Apply the power rule: $3\\times(-2)x^{-3}=-6x^{-3}$.", working: "f'(x)=-6x^{-3}=-\\frac{6}{x^3}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $f'(x)=-\\dfrac{6}{x^3}$",
            commonErrors: ["Losing the negative sign from the power $-2$.", "Differentiating $x^{-2}$ to $-2x^{-1}$ instead of $-2x^{-3}$."],
          },
        },
        {
          id: "aasl-u5-derivative-basics-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The function $f$ is defined by $f(x)=x^3-3x^2-9x+2$. On which interval is $f$ decreasing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1<x<3$" },
              { id: "b", text: "$-1<x<3$" },
              { id: "c", text: "$x<3$" },
              { id: "d", text: "$x<-1$ or $x>3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Monotonicity", statement: "$f$ is decreasing where $f'(x)<0$." },
            ],
            steps: [
              { reasoning: "Differentiate and factorise.", working: "f'(x)=3x^2-6x-9=3(x-3)(x+1)", marks: 1, markCode: "M" },
              { reasoning: "The parabola opens upwards, so $f'<0$ between its roots $-1$ and $3$.", working: "f'(x)<0 \\iff -1<x<3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $f$ is decreasing for $-1<x<3$",
            commonErrors: ["Choosing the interval where $f'>0$.", "Solving $f(x)=0$ instead of $f'(x)=0$."],
          },
        },
        {
          id: "aasl-u5-derivative-basics-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Let $f(x)=x^3+2x^2-5x$. Find the value of $f'(2)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$15$" },
              { id: "b", text: "$-3$" },
              { id: "c", text: "$7$" },
              { id: "d", text: "$19$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule", statement: "$\\dfrac{d}{dx}(ax^n)=anx^{n-1}$" },
            ],
            steps: [
              { reasoning: "Differentiate term by term.", working: "f'(x)=3x^2+4x-5", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x=2$.", working: "f'(2)=12+8-5=15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $f'(2)=15$",
            commonErrors: ["Substituting into $f$ instead of $f'$.", "Arithmetic slip when evaluating $3(2^2)+4(2)-5$."],
          },
        },
        {
          id: "aasl-u5-derivative-basics-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The function $f$ is defined by $f(x)=x^3-6x^2+9x+1$.\n\nFind the two values of $x$ at which $f'(x)=0$. Enter the smaller value first.",
          response: {
            type: "numeric",
            parts: [
              { label: "Smaller value of $x$", answer: 1 },
              { label: "Larger value of $x$", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule", statement: "$\\dfrac{d}{dx}(ax^n)=anx^{n-1}$" },
            ],
            steps: [
              { reasoning: "Differentiate term by term.", working: "f'(x)=3x^2-12x+9", marks: 1, markCode: "A" },
              { reasoning: "Factorise the derivative.", working: "f'(x)=3(x-1)(x-3)", marks: 1, markCode: "M" },
              { reasoning: "Set each factor to zero.", working: "x=1\\ \\text{or}\\ x=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=1$ and $x=3$",
            commonErrors: ["Setting $f(x)=0$ rather than $f'(x)=0$.", "Forgetting the common factor $3$ does not change the roots, but mishandling it leads to sign errors later."],
          },
        },
        {
          id: "aasl-u5-derivative-basics-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The function $f$ is defined by $f(x)=x^3-3x^2-9x+4$.\n\nFind the smaller value of $x$ for which $f'(x)=0$, and find the value of $f$ at this point.",
          response: {
            type: "numeric",
            parts: [
              { label: "Smaller value of $x$", answer: -1 },
              { label: "$f$ at this point", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule", statement: "$\\dfrac{d}{dx}(ax^n)=anx^{n-1}$" },
            ],
            steps: [
              { reasoning: "Differentiate and solve $f'(x)=0$.", working: "f'(x)=3x^2-6x-9=3(x+1)(x-3)=0", marks: 1, markCode: "M" },
              { reasoning: "The smaller solution is $x=-1$.", working: "x=-1", marks: 1, markCode: "A" },
              { reasoning: "Substitute into $f$, not $f'$.", working: "f(-1)=-1-3+9+4=9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=-1$; $f(-1)=9$",
            commonErrors: ["Evaluating $f'$ at $x=-1$ instead of $f$.", "Sign error when substituting $(-1)^3=-1$."],
          },
        },
        {
          id: "aasl-u5-derivative-basics-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Let $f(x)=3x^2+2x$. Use differentiation from first principles to show that $f'(x)=6x+2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Derivative from first principles", statement: "$f'(x)=\\lim_{h\\to0}\\dfrac{f(x+h)-f(x)}{h}$" },
            ],
            steps: [
              { reasoning: "Write the difference quotient with $f(x+h)=3(x+h)^2+2(x+h)$.", working: "\\frac{3(x+h)^2+2(x+h)-(3x^2+2x)}{h}", marks: 1, markCode: "M" },
              { reasoning: "Expand and cancel the terms $3x^2$ and $2x$.", working: "\\frac{3x^2+6xh+3h^2+2x+2h-3x^2-2x}{h}=\\frac{6xh+3h^2+2h}{h}", marks: 1, markCode: "A" },
              { reasoning: "Divide every term by $h$.", working: "6x+3h+2", marks: 1, markCode: "M" },
              { reasoning: "Let $h\\to0$. (AG)", working: "f'(x)=\\lim_{h\\to0}(6x+3h+2)=6x+2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f'(x)=6x+2$",
            commonErrors: ["Letting $h=0$ before cancelling the factor $h$.", "Expanding $(x+h)^2$ as $x^2+h^2$."],
            examinerNote: "The answer is given, so every line of working must be shown for full marks.",
          },
        },
        {
          id: "aasl-u5-derivative-basics-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Let $f(x)=x^2-3x$. Use differentiation from first principles to show that $f'(x)=2x-3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Derivative from first principles", statement: "$f'(x)=\\lim_{h\\to0}\\dfrac{f(x+h)-f(x)}{h}$" },
            ],
            steps: [
              { reasoning: "Form the difference quotient and expand $(x+h)^2$.", working: "\\frac{(x+h)^2-3(x+h)-(x^2-3x)}{h}=\\frac{x^2+2xh+h^2-3x-3h-x^2+3x}{h}", marks: 1, markCode: "M" },
              { reasoning: "Cancel and divide by $h$.", working: "\\frac{2xh+h^2-3h}{h}=2x+h-3", marks: 1, markCode: "A" },
              { reasoning: "Let $h\\to0$. (AG)", working: "f'(x)=2x-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f'(x)=2x-3$",
            commonErrors: ["Forgetting that $-3(x+h)=-3x-3h$.", "Dropping the limit notation in the final line."],
          },
        },
        {
          id: "aasl-u5-derivative-basics-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 9,
          stem: "The function $f$ is defined by $f(x)=x^3-3x^2-9x+5$.",
          parts: [
            { label: "a", prompt: "Find $f'(x)$.", marks: 2 },
            { label: "b", prompt: "Solve $f'(x)=0$.", marks: 3 },
            { label: "c", prompt: "Hence state the interval on which $f$ is decreasing.", marks: 2 },
            { label: "d", prompt: "Find $f(-1)$ and explain, using the sign of $f'$ either side of $x=-1$, why this is a local maximum.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Smaller solution", answer: -1 },
              { label: "(b) Larger solution", answer: 3 },
              { label: "(d) $f(-1)$", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule", statement: "$\\dfrac{d}{dx}(ax^n)=anx^{n-1}$" },
              { kind: "property", name: "Monotonicity", statement: "$f'(x)<0$ means $f$ is decreasing; a change of $f'$ from positive to negative indicates a local maximum." },
            ],
            steps: [
              { part: "a", reasoning: "Differentiate each term.", working: "f'(x)=3x^2-6x-9", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All coefficients and signs are correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Factorise out the common factor $3$.", working: "3(x^2-2x-3)=0", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Factorise the quadratic.", working: "3(x-3)(x+1)=0", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Read off both solutions.", working: "x=-1\\ \\text{or}\\ x=3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$f'$ is an upward parabola, negative between its roots.", working: "f'(x)<0 \\iff -1<x<3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State the interval.", working: "f\\text{ is decreasing for }-1<x<3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute $x=-1$ into $f$.", working: "f(-1)=-1-3+9+5=10", marks: 1, markCode: "A" },
              { part: "d", reasoning: "For $x<-1$, $f'>0$; for $-1<x<3$, $f'<0$. The gradient changes from positive to negative, so $f$ has a local maximum at $x=-1$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3x^2-6x-9$ (b) $x=-1,\\ 3$ (c) $-1<x<3$ (d) $f(-1)=10$, local maximum",
            commonErrors: ["Choosing the interval where $f'>0$ for part (c).", "Evaluating $f'$ instead of $f$ in part (d)."],
          },
        },
        {
          id: "aasl-u5-derivative-basics-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Let $f(x)=x^3-\\dfrac{4}{x}$ for $x>0$. Find $f'(x)$ and the value of $f'(2)$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$f'(2)$", answer: 13 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule", statement: "$\\dfrac{d}{dx}(ax^n)=anx^{n-1}$ with $\\frac1x=x^{-1}$." },
            ],
            steps: [
              { reasoning: "Rewrite $\\frac4x=4x^{-1}$ before differentiating.", working: "f(x)=x^3-4x^{-1}", marks: 1, markCode: "M" },
              { reasoning: "Differentiate term by term.", working: "f'(x)=3x^2+4x^{-2}=3x^2+\\frac{4}{x^2}", marks: 1, markCode: "A" },
              { reasoning: "Substitute $x=2$.", working: "f'(2)=12+1=13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f'(x)=3x^2+\\dfrac{4}{x^2}$; $f'(2)=13$",
            commonErrors: ["Writing the derivative of $-4x^{-1}$ as $-4x^{-2}$ (the coefficient also changes).", "Forgetting that the power reduces by one."],
          },
        },
        {
          id: "aasl-u5-derivative-basics-q15",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "Let $f(x)=x+\\dfrac{4}{x}$ for $x>0$. On which interval is $f$ decreasing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x<2$" },
              { id: "b", text: "$0<x<4$" },
              { id: "c", text: "$x>2$" },
              { id: "d", text: "$0<x<2$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Monotonicity", statement: "$f$ is decreasing where $f'(x)<0$." },
            ],
            steps: [
              { reasoning: "Differentiate using the power rule on $4x^{-1}$.", working: "f'(x)=1-4x^{-2}=1-\\frac{4}{x^2}", marks: 1, markCode: "M" },
              { reasoning: "$f'<0$ when $x^2<4$, and since $x>0$ this gives $0<x<2$.", working: "1-\\frac{4}{x^2}<0 \\iff x^2<4 \\iff 0<x<2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $f$ is decreasing for $0<x<2$",
            commonErrors: ["Ignoring the domain $x>0$ and giving $-2<x<2$.", "Reversing the inequality when multiplying by $x^2$."],
          },
        },
        {
          id: "aasl-u5-derivative-basics-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Use differentiation from first principles to show that the derivative of $f(x)=x^3$ is $f'(x)=3x^2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Derivative from first principles", statement: "$f'(x)=\\lim_{h\\to0}\\dfrac{f(x+h)-f(x)}{h}$" },
            ],
            steps: [
              { reasoning: "Expand $(x+h)^3$ in the numerator.", working: "\\frac{(x+h)^3-x^3}{h}=\\frac{x^3+3x^2h+3xh^2+h^3-x^3}{h}", marks: 1, markCode: "M" },
              { reasoning: "Cancel $x^3$.", working: "\\frac{3x^2h+3xh^2+h^3}{h}", marks: 1, markCode: "A" },
              { reasoning: "Divide every term by $h$.", working: "3x^2+3xh+h^2", marks: 1, markCode: "M" },
              { reasoning: "Let $h\\to0$. (AG)", working: "f'(x)=\\lim_{h\\to0}(3x^2+3xh+h^2)=3x^2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f'(x)=3x^2$",
            commonErrors: ["Expanding $(x+h)^3$ incorrectly, e.g. $x^3+h^3$.", "Cancelling $h$ before expanding, which is invalid."],
          },
        },
      ],
    },
    {
      id: "aasl-u5-tangents-normals",
      title: "Tangents and normals",
      skill: "Find equations of tangents and normals to a curve at a given point.",
      lesson: {
        sections: [
          {
            heading: "Tangent at a point",
            body: "To find the tangent to $y=f(x)$ at $x=a$: (1) find the point $(a,f(a))$; (2) find the gradient $m=f'(a)$; (3) write $y-f(a)=m(x-a)$. The tangent line shares the point and the gradient of the curve there.",
          },
          {
            heading: "The normal",
            body: "The normal is perpendicular to the tangent, so its gradient is the negative reciprocal $-\\dfrac1{m}$ (when $m\\ne0$). It passes through the same point. If the tangent is horizontal ($m=0$) the normal is vertical. To find where a tangent meets the curve again, equate the line to the curve and solve; a repeated root occurs at the point of tangency.",
          },
        ],
        keyFormulas: [
          { name: "Tangent", statement: "$y-f(a)=f'(a)(x-a)$" },
          { name: "Normal", statement: "$y-f(a)=-\\dfrac{1}{f'(a)}(x-a)$" },
          { name: "Perpendicular gradients", statement: "$m_1m_2=-1$" },
        ],
        workedExample: {
          problem: "Find the equation of the tangent to $y=x^2$ at $x=3$.",
          solution: "The point is $(3,9)$ and $\\frac{dy}{dx}=2x=6$. Tangent: $y-9=6(x-3)$, so $y=6x-9$.",
        },
      },
      questions: [
        {
          id: "aasl-u5-tangents-normals-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 1,
          stem: "The tangent to a curve at a point $P$ has gradient $4$. What is the gradient of the normal to the curve at $P$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$" },
              { id: "b", text: "$-\\dfrac14$" },
              { id: "c", text: "$-4$" },
              { id: "d", text: "$\\dfrac14$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Perpendicular lines", statement: "Two lines are perpendicular when the product of their gradients is $-1$." },
            ],
            steps: [
              { reasoning: "Take the negative reciprocal of $4$.", working: "-\\frac14", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $-\\dfrac14$",
            commonErrors: ["Taking only the reciprocal or only the negative."],
          },
        },
        {
          id: "aasl-u5-tangents-normals-q2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The curve $C$ has equation $y=x^2-3x$.\n\nFind the equation of the tangent to $C$ at the point where $x=2$, in the form $y=mx+c$. Enter $m$ and $c$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$m$", answer: 1 },
              { label: "$c$", answer: -4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent", statement: "$y-y_1=f'(x_1)(x-x_1)$" },
            ],
            steps: [
              { reasoning: "Differentiate and evaluate at $x=2$ to get the gradient; the point has $y=4-6=-2$.", working: "\\frac{dy}{dx}=2x-3=1\\ \\text{at}\\ x=2;\\quad (2,-2)", marks: 1, markCode: "A" },
              { reasoning: "Use the point-gradient form.", working: "y-(-2)=1(x-2)", marks: 1, markCode: "M" },
              { reasoning: "Rearrange.", working: "y=x-4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=x-4$, so $m=1$ and $c=-4$",
            commonErrors: ["Using $y=0$ or $x=2$ in place of the correct $y$-coordinate.", "Using the value of $y$ rather than $\\frac{dy}{dx}$ as the gradient."],
          },
        },
        {
          id: "aasl-u5-tangents-normals-q3",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "The curve $C$ has equation $y=x^3+x$. The normal to $C$ at the point where $x=1$ meets the $x$-axis at the point $Q$.\n\nFind the gradient of the normal at $x=1$ and the $x$-coordinate of $Q$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Gradient of the normal", answer: -0.25 },
              { label: "$x$-coordinate of $Q$", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Perpendicular lines", statement: "Gradient of normal $=-\\dfrac{1}{f'(a)}$." },
              { kind: "formula", name: "Line through a point", statement: "$y-y_1=m(x-x_1)$" },
            ],
            steps: [
              { reasoning: "The point on the curve is $(1,2)$ and the tangent gradient is $3x^2+1=4$.", working: "\\frac{dy}{dx}=3x^2+1=4", marks: 1, markCode: "A" },
              { reasoning: "Negative reciprocal gives the normal gradient.", working: "m_N=-\\frac14", marks: 1, markCode: "A" },
              { reasoning: "Equation of the normal.", working: "y-2=-\\frac14(x-1)", marks: 1, markCode: "M" },
              { reasoning: "Set $y=0$ for the $x$-axis intersection.", working: "-2=-\\frac14(x-1)\\Rightarrow x-1=8\\Rightarrow x=9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Gradient $-\\dfrac14$; $Q=(9,0)$",
            commonErrors: ["Using the tangent gradient $4$ for the normal line.", "Sign error when solving $-2=-\\frac14(x-1)$."],
          },
        },
        {
          id: "aasl-u5-tangents-normals-q4",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 10,
          stem: "The curve $C$ has equation $y=f(x)$ where $f(x)=x^3-4x^2+3x$.",
          parts: [
            { label: "a", prompt: "Find the equation of the tangent to $C$ at the point where $x=2$.", marks: 3 },
            { label: "b", prompt: "Find the equation of the normal to $C$ at the point where $x=2$.", marks: 2 },
            { label: "c", prompt: "Show that this tangent meets $C$ again at the origin.", marks: 3 },
            { label: "d", prompt: "Find the $x$-coordinates of the points on $C$ at which the tangent is parallel to the line $y=3x$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Gradient of the tangent", answer: -1 },
              { label: "(b) $y$-intercept of the normal", answer: -4 },
              { label: "(d) Smaller $x$-coordinate", answer: 0 },
              { label: "(d) Larger $x$-coordinate (3 d.p.)", answer: 2.667, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent and normal", statement: "Tangent: $y-f(a)=f'(a)(x-a)$; normal gradient $=-1/f'(a)$." },
              { kind: "property", name: "Parallel lines", statement: "Parallel lines have equal gradients." },
            ],
            steps: [
              { part: "a", reasoning: "Differentiate.", working: "f'(x)=3x^2-8x+3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate the gradient and $y$-coordinate at $x=2$.", working: "f'(2)=12-16+3=-1,\\quad f(2)=8-16+6=-2", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Substitute into the tangent formula.", working: "y+2=-(x-2)\\Rightarrow y=-x", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Normal gradient is the negative reciprocal of $-1$, which is $1$.", working: "y+2=1(x-2)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rearrange.", working: "y=x-4", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Equate the curve and the tangent $y=-x$.", working: "x^3-4x^2+3x=-x", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Rearrange and factorise.", working: "x^3-4x^2+4x=0\\Rightarrow x(x-2)^2=0", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The repeated root $x=2$ is the point of tangency; the other root is $x=0$, where $y=-0=0$, so the tangent meets $C$ again at $(0,0)$. (AG)", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Set the gradient of the tangent equal to $3$.", working: "3x^2-8x+3=3\\Rightarrow x(3x-8)=0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve.", working: "x=0\\ \\text{or}\\ x=\\frac83", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $y=-x$ (b) $y=x-4$ (c) $x(x-2)^2=0$ gives $(0,0)$ (d) $x=0$ and $x=\\frac83$",
            commonErrors: ["Using the tangent gradient for the normal.", "Cancelling a factor of $x$ in part (c), losing the root $x=0$."],
          },
        },
        {
          id: "aasl-u5-tangents-normals-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Find the gradient of the tangent to the curve $y=x^2-4x$ at the point where $x=3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-4$" },
              { id: "b", text: "$8$" },
              { id: "c", text: "$2$" },
              { id: "d", text: "$6$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent", statement: "The gradient of the tangent at $x=a$ is $f'(a)$." },
            ],
            steps: [
              { reasoning: "Differentiate.", working: "\\frac{dy}{dx}=2x-4", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x=3$.", working: "\\frac{dy}{dx}=2(3)-4=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Gradient $=2$",
            commonErrors: ["Substituting into $y$ instead of $\\frac{dy}{dx}$.", "Forgetting the $-4$ term."],
          },
        },
        {
          id: "aasl-u5-tangents-normals-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "At a point $P$ on a curve, the tangent has gradient $-3$. What is the gradient of the normal at $P$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-\\dfrac13$" },
              { id: "b", text: "$\\dfrac13$" },
              { id: "c", text: "$3$" },
              { id: "d", text: "$-3$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Perpendicular lines", statement: "The product of the gradients of perpendicular lines is $-1$." },
            ],
            steps: [
              { reasoning: "Change the sign of the tangent gradient.", working: "-(-3)=3", marks: 1, markCode: "M" },
              { reasoning: "Take the reciprocal.", working: "\\frac13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $\\dfrac13$",
            commonErrors: ["Keeping the negative sign, giving $-\\frac13$.", "Reciprocating without changing the sign."],
          },
        },
        {
          id: "aasl-u5-tangents-normals-q7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which is the equation of the tangent to the curve $y=x^2+1$ at the point where $x=2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=4x-3$" },
              { id: "b", text: "$y=4x+5$" },
              { id: "c", text: "$y=4x-11$" },
              { id: "d", text: "$y=2x+1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent", statement: "$y-y_1=f'(x_1)(x-x_1)$" },
            ],
            steps: [
              { reasoning: "The point is $(2,5)$ and $\\frac{dy}{dx}=2x=4$ at $x=2$.", working: "(2,5),\\quad m=4", marks: 1, markCode: "M" },
              { reasoning: "Write $y-5=4(x-2)$ and rearrange.", working: "y=4x-3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $y=4x-3$",
            commonErrors: ["Using the $y$-coordinate $5$ as the gradient.", "Sign error when rearranging $y-5=4x-8$."],
          },
        },
        {
          id: "aasl-u5-tangents-normals-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the equation of the tangent to the curve $y=x^3$ at the point where $x=-1$, giving your answer in the form $y=mx+c$. Enter $m$ and $c$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$m$", answer: 3 },
              { label: "$c$", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent", statement: "$y-y_1=f'(x_1)(x-x_1)$" },
            ],
            steps: [
              { reasoning: "Differentiate and evaluate at $x=-1$; the point is $(-1,-1)$.", working: "\\frac{dy}{dx}=3x^2=3\\ \\text{at}\\ x=-1;\\quad (-1,-1)", marks: 1, markCode: "A" },
              { reasoning: "Use the point-gradient form.", working: "y-(-1)=3(x-(-1))", marks: 1, markCode: "M" },
              { reasoning: "Rearrange.", working: "y+1=3x+3\\Rightarrow y=3x+2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=3x+2$, so $m=3$ and $c=2$",
            commonErrors: ["Using $x=1$ values by accident: the point is $(-1,-1)$.", "Sign error with the negative coordinates."],
          },
        },
        {
          id: "aasl-u5-tangents-normals-q9",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the gradient of the normal to the curve $y=x^2$ at the point where $x=2$, and the $y$-intercept of this normal.",
          response: {
            type: "numeric",
            parts: [
              { label: "Gradient of the normal", answer: -0.25 },
              { label: "$y$-intercept of the normal", answer: 4.5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Perpendicular lines", statement: "Gradient of normal $=-\\dfrac{1}{f'(a)}$." },
              { kind: "formula", name: "Line through a point", statement: "$y-y_1=m(x-x_1)$" },
            ],
            steps: [
              { reasoning: "The point is $(2,4)$ and the tangent gradient is $2x=4$, so the normal gradient is $-\\frac14$.", working: "m_N=-\\frac{1}{4}=-0.25", marks: 1, markCode: "A" },
              { reasoning: "Write the equation of the normal.", working: "y-4=-\\frac14(x-2)", marks: 1, markCode: "M" },
              { reasoning: "Rearrange to find the $y$-intercept.", working: "y=-\\frac14x+\\frac92", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Normal gradient $-\\dfrac14$; $y$-intercept $\\dfrac92$",
            commonErrors: ["Using the tangent gradient $4$ for the normal.", "Arithmetic slip expanding $-\\frac14(x-2)$."],
          },
        },
        {
          id: "aasl-u5-tangents-normals-q10",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The tangent to the curve $y=x^2-2x$ at the point where $x=3$ meets the axes at $A$ and $B$. Find the coordinates of the $x$-intercept $A$ and the $y$-intercept $B$.",
          response: {
            type: "numeric",
            parts: [
              { label: "$x$-coordinate of $A$", answer: 2.25 },
              { label: "$y$-coordinate of $B$", answer: -9 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent", statement: "$y-y_1=f'(x_1)(x-x_1)$" },
            ],
            steps: [
              { reasoning: "The point on the curve is $(3,3)$ and $f'(x)=2x-2=4$ at $x=3$.", working: "(3,3),\\quad m=4", marks: 1, markCode: "A" },
              { reasoning: "Equation of the tangent.", working: "y-3=4(x-3)\\Rightarrow y=4x-9", marks: 1, markCode: "M" },
              { reasoning: "Set $y=0$ and $x=0$ respectively.", working: "0=4x-9\\Rightarrow x=\\frac94;\\quad y=-9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$A=\\left(\\frac94,0\\right)$, $B=(0,-9)$",
            commonErrors: ["Finding where the curve meets the axes instead of the tangent.", "Sign error when solving $4x-9=0$."],
          },
        },
        {
          id: "aasl-u5-tangents-normals-q11",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 4,
          stem: "Show that the equation of the tangent to the curve $y=x^3-3x$ at the point where $x=2$ is $y=9x-16$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent", statement: "$y-y_1=f'(x_1)(x-x_1)$" },
            ],
            steps: [
              { reasoning: "Differentiate.", working: "\\frac{dy}{dx}=3x^2-3", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the gradient and the $y$-coordinate at $x=2$.", working: "f'(2)=12-3=9,\\quad f(2)=8-6=2", marks: 1, markCode: "A" },
              { reasoning: "Write the tangent through $(2,2)$ with gradient $9$.", working: "y-2=9(x-2)", marks: 1, markCode: "M" },
              { reasoning: "Rearrange. (AG)", working: "y=9x-16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=9x-16$",
            commonErrors: ["Using $f(2)=2$ as the gradient.", "Sign error rearranging $y-2=9x-18$."],
          },
        },
        {
          id: "aasl-u5-tangents-normals-q12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the equation of the tangent to the curve $y=\\dfrac{1}{x}$ at the point where $x=2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Power rule", statement: "$\\dfrac{d}{dx}(x^{-1})=-x^{-2}$" },
              { kind: "formula", name: "Tangent", statement: "$y-y_1=f'(x_1)(x-x_1)$" },
            ],
            steps: [
              { reasoning: "Write $y=x^{-1}$ and differentiate; the point is $\\left(2,\\frac12\\right)$.", working: "\\frac{dy}{dx}=-x^{-2}=-\\frac{1}{4}\\ \\text{at}\\ x=2", marks: 1, markCode: "M" },
              { reasoning: "Use the point-gradient form.", working: "y-\\frac12=-\\frac14(x-2)", marks: 1, markCode: "A" },
              { reasoning: "Rearrange.", working: "y=-\\frac14x+1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y=-\\dfrac14x+1$",
            commonErrors: ["Differentiating $\\frac1x$ to $+\\frac{1}{x^2}$ (missing the negative).", "Using $x=2$ as the $y$-coordinate."],
          },
        },
        {
          id: "aasl-u5-tangents-normals-q13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 10,
          stem: "The curve $C$ has equation $y=x^3-3x$.",
          parts: [
            { label: "a", prompt: "Find the equation of the tangent to $C$ at the point where $x=2$.", marks: 3 },
            { label: "b", prompt: "Find the equation of the normal to $C$ at the point where $x=2$.", marks: 2 },
            { label: "c", prompt: "Find the coordinates of the other point where this tangent meets $C$.", marks: 3 },
            { label: "d", prompt: "Find the $x$-coordinates of the points on $C$ at which the tangent is parallel to the line $y=5x$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(d) Smaller $x$-coordinate (3 d.p.)", answer: -1.633, tolerance: 0.005 },
              { label: "(d) Larger $x$-coordinate (3 d.p.)", answer: 1.633, tolerance: 0.005 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent and normal", statement: "Tangent: $y-f(a)=f'(a)(x-a)$; normal gradient $=-1/f'(a)$." },
              { kind: "property", name: "Parallel lines", statement: "Parallel lines have equal gradients." },
            ],
            steps: [
              { part: "a", reasoning: "Differentiate.", working: "\\frac{dy}{dx}=3x^2-3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate gradient and $y$-coordinate at $x=2$.", working: "f'(2)=9,\\quad f(2)=2", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Substitute into the tangent formula.", working: "y-2=9(x-2)\\Rightarrow y=9x-16", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Normal gradient is the negative reciprocal of $9$.", working: "m_N=-\\frac19", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Equation of the normal through $(2,2)$.", working: "y-2=-\\frac19(x-2)\\Rightarrow y=-\\frac19x+\\frac{20}{9}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Equate the curve and the tangent $y=9x-16$.", working: "x^3-3x=9x-16", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Rearrange.", working: "x^3-12x+16=0", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Factorise, noting $x=2$ is a repeated root.", working: "(x-2)^2(x+4)=0", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Set the curve gradient equal to $5$.", working: "3x^2-3=5\\Rightarrow 3x^2=8", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve for both values.", working: "x=\\pm\\sqrt{\\frac83}=\\pm1.633", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $y=9x-16$ (b) $y=-\\frac19x+\\frac{20}{9}$ (c) $(-4,-52)$ (d) $x=\\pm\\sqrt{\\frac83}$",
            commonErrors: ["Forgetting the repeated root $x=2$ in part (c) and reporting it as the 'other' point.", "Dividing by $x$ when solving $3x^2=8$ type equations incorrectly."],
          },
        },
        {
          id: "aasl-u5-tangents-normals-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Find the $x$-coordinates of the points on the curve $y=x^3-4x$ at which the tangent has gradient $8$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Smaller $x$-coordinate", answer: -2 },
              { label: "Larger $x$-coordinate", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Tangent gradient", statement: "The gradient of the tangent at $x=a$ equals $f'(a)$." },
            ],
            steps: [
              { reasoning: "Differentiate.", working: "\\frac{dy}{dx}=3x^2-4", marks: 1, markCode: "M" },
              { reasoning: "Set the gradient equal to $8$ and solve.", working: "3x^2-4=8\\Rightarrow x^2=4", marks: 1, markCode: "M" },
              { reasoning: "Both square roots are required.", working: "x=-2\\ \\text{or}\\ x=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x=-2$ and $x=2$",
            commonErrors: ["Giving only the positive root $x=2$."],
          },
        },
        {
          id: "aasl-u5-tangents-normals-q15",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The tangent to a curve at the point $(1,2)$ has gradient $5$. Which is the equation of the normal at this point?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=\\dfrac15x+\\dfrac95$" },
              { id: "b", text: "$y=-\\dfrac15x+\\dfrac{11}{5}$" },
              { id: "c", text: "$y=-\\dfrac15x+\\dfrac95$" },
              { id: "d", text: "$y=-5x+7$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Perpendicular lines", statement: "Normal gradient $=-\\dfrac{1}{5}$; the normal passes through $(1,2)$." },
              { kind: "formula", name: "Line through a point", statement: "$y-y_1=m(x-x_1)$" },
            ],
            steps: [
              { reasoning: "Negative reciprocal of $5$.", working: "m_N=-\\frac15", marks: 1, markCode: "M" },
              { reasoning: "Write $y-2=-\\frac15(x-1)$ and rearrange.", working: "y=-\\frac15x+\\frac{11}{5}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $y=-\\dfrac15x+\\dfrac{11}{5}$",
            commonErrors: ["Using $5$ or $-5$ as the normal gradient.", "Arithmetic slip in $2+\\frac15=\\frac{11}{5}$."],
          },
        },
        {
          id: "aasl-u5-tangents-normals-q16",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The tangent to the curve $y=x^2-6x+5$ at the point where $x=4$ meets the $y$-axis. Find the $y$-coordinate of this point of intersection, and the gradient of the tangent there.",
          response: {
            type: "numeric",
            parts: [
              { label: "$y$-coordinate of intersection", answer: -11 },
              { label: "Gradient of the tangent", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tangent", statement: "$y-y_1=f'(x_1)(x-x_1)$" },
            ],
            steps: [
              { reasoning: "Find the point and gradient: $f(4)=-3$ and $f'(x)=2x-6=2$.", working: "(4,-3),\\quad m=2", marks: 1, markCode: "A" },
              { reasoning: "Write the tangent equation.", working: "y+3=2(x-4)", marks: 1, markCode: "M" },
              { reasoning: "Set $x=0$ for the $y$-axis intersection.", working: "y=2x-11\\Rightarrow y=-11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Intersection $(0,-11)$; tangent gradient $2$",
            commonErrors: ["Substituting $x=4$ into the tangent when finding the $y$-intercept.", "Sign error expanding $y+3=2x-8$."],
          },
        },
      ],
    },
  ],
};
