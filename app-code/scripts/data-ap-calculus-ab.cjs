// AP Calculus AB — limits, differentiation, applications. Spec for scripts/gen-us-elementary.cjs.
const P = (kind, name, statement) => [kind, name, statement];
const S = (reasoning, marks, markCode = "A", working) => ({ reasoning, marks, markCode, ...(working ? { working } : {}) });
const mcq = (difficulty, totalMarks, stem, choices, correct, principles, steps, finalAnswer, commonErrors) => ({
  difficulty, totalMarks, stem, choices, correct, principles, steps, finalAnswer, ...(commonErrors ? { commonErrors } : {}),
});
const num = (difficulty, totalMarks, stem, numeric, principles, steps, finalAnswer, commonErrors) => ({
  difficulty, totalMarks, stem, numeric, principles, steps, finalAnswer, ...(commonErrors ? { commonErrors } : {}),
});
const op = (difficulty, totalMarks, stem, principles, steps, finalAnswer, commonErrors) => ({
  difficulty, totalMarks, stem, principles, steps, finalAnswer, ...(commonErrors ? { commonErrors } : {}),
});
const lesson = (slug, title, goal, standards, vocab, concept) => ({ slug, title, goal, standards, vocab, concept });

const apCalcAb = {
  id: "ap-calculus-ab",
  exportName: "apCalculusAb",
  prefix: "apcab",
  title: "AP Calculus AB",
  shortTitle: "AP Calc AB",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description:
    "Limits and continuity, differentiation and its applications, and an introduction to integration — the full AP Calculus AB course in exam-style questions.",
  ap: { exam: "calculus-ab" },
  units: [
    {
      id: "apcab-u1",
      title: "Limits and Continuity",
      description: "Evaluate limits algebraically and graphically, apply limit laws, and test functions for continuity.",
      lessons: [
        lesson("limits-intro", "Introducing Limits", "I CAN evaluate limits using graphs, tables, and direct substitution.", ["LIM-1"],
          [["Limit", "The value a function approaches as $x$ approaches a target value from both sides."], ["One-sided limit", "The value approached from only the left ($x \\to a^-$) or right ($x \\to a^+$)."], ["Indeterminate form", "An expression like $\\frac{0}{0}$ whose limit needs further analysis."], ["Removable discontinuity", "A hole in the graph where the limit exists but the function value does not."], ["Asymptote", "A line the graph approaches but never reaches."]],
          {
            title: "Limits",
            skill: "Estimate and evaluate limits from graphs, tables, and algebra.",
            sections: [
              ["What a limit means", "The limit of $f(x)$ as $x$ approaches $a$ is the single value the outputs settle toward. It does not require $f(a)$ to exist. If left and right limits agree, the two-sided limit exists; if they differ, the limit does not exist (a jump discontinuity)."],
              ["Algebraic evaluation", "For continuous functions, try direct substitution first. When substitution gives $\\frac{0}{0}$, factor and cancel, rationalize, or simplify first — the limit often exists even though the function is undefined at the point."],
            ],
            formulas: [
              ["Direct substitution", "$\\lim_{x \\to a} f(x) = f(a)$ when $f$ is continuous at $a$"],
              ["Factor and cancel", "$\\lim_{x \\to a} \\frac{x^2 - a^2}{x - a} = \\lim_{x \\to a} (x + a) = 2a$"],
            ],
            worked: {
              problem: "Evaluate $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$.",
              solution: "Substitution gives $\\frac{0}{0}$, an indeterminate form. Factor: $\\frac{(x-3)(x+3)}{x-3} = x + 3$ for $x \\ne 3$. The limit is $3 + 3 = 6$ — a removable discontinuity (hole) at $x = 3$.",
            },
            questions: [
              mcq("foundation", 1, "As $x$ approaches $2$ from both sides, $f(x)$ approaches $5$. What is $\\lim_{x \\to 2} f(x)$?", [["a", "$5$"], ["b", "$f(2)$"], ["c", "Does not exist"], ["d", "$0$"]], "a",
                [P("definition", "Limit", "The limit is the approached value, independent of $f(2)$.")],
                [S("Both sides approach $5$, so the two-sided limit is $5$ — even if $f(2)$ is undefined.", 1, "B")], "$5$", ["Answering $f(2)$ — the limit need not equal the function value."]),
              mcq("core", 1, "Evaluate $\\lim_{x \\to 4} \\frac{x^2 - 16}{x - 4}$.", [["a", "$0$"], ["b", "$4$"], ["c", "$8$"], ["d", "Does not exist"]], "c",
                [P("method", "Factor and cancel", "$\\frac{(x-4)(x+4)}{x-4} = x + 4$.")],
                [S("After canceling, the limit is $4 + 4 = 8$.", 1, "M")], "$8$", ["Canceling incorrectly or substituting before simplifying."]),
              num("core", 2, "Evaluate $\\lim_{x \\to 1} \\frac{\\sqrt{x} - 1}{x - 1}$. Enter the limit value.", [{ label: "Limit", answer: 0.5 }],
                [P("method", "Rationalize", "Multiply by $\\frac{\\sqrt{x}+1}{\\sqrt{x}+1}$.")],
                [S("$\\frac{(\\sqrt{x}-1)(\\sqrt{x}+1)}{(x-1)(\\sqrt{x}+1)} = \\frac{x-1}{(x-1)(\\sqrt{x}+1)} = \\frac{1}{\\sqrt{x}+1} \\to \\frac{1}{2}$.", 1, "M"), S("Limit value $0.5$.", 1, "B")], "$0.5$", ["Rationalizing the wrong expression or arithmetic slips."]),
              op("challenge", 3, "A function $g$ satisfies $\\lim_{x \\to 2^-} g(x) = 7$ and $\\lim_{x \\to 2^+} g(x) = -1$. (a) Does $\\lim_{x \\to 2} g(x)$ exist? (b) If $g(2) = 7$, is $g$ continuous at $x = 2$? Explain.",
                [P("concept", "Two-sided limit", "Both one-sided limits must agree."), P("definition", "Continuity", "Function value must equal the limit.")],
                [S("(a) No — left limit $7 \\ne$ right limit $-1$, so the two-sided limit does not exist (jump discontinuity).", 1, "B"), S("(b) No — continuity requires the two-sided limit to exist and equal $g(2)$; here it does not exist.", 1, "B"), S("Clear explanation of both parts.", 1, "R")], "(a) No; (b) No — jump discontinuity at $x=2$", ["Checking only one side for continuity."]),
            ],
          }),
        lesson("limit-laws", "Limit Laws and Algebraic Techniques", "I CAN apply limit laws and evaluate limits algebraically.", ["LIM-2"],
          [["Sum law", "$\\lim(f + g) = \\lim f + \\lim g$ when both limits exist."], ["Product law", "$\\lim(f \\cdot g) = \\lim f \\cdot \\lim g$."], ["Quotient law", "$\\lim\\frac{f}{g} = \\frac{\\lim f}{\\lim g}$ provided $\\lim g \\ne 0$."], ["Squeeze theorem", "If $h(x) \\le f(x) \\le k(x)$ and $\\lim h = \\lim k = L$, then $\\lim f = L$."], ["Standard trig limit", "$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$."]],
          {
            title: "Evaluating limits algebraically",
            skill: "Use limit laws and algebraic manipulation to find limits that substitution cannot.",
            sections: [
              ["Limit laws", "When the individual limits exist, limits respect sums, differences, products, quotients (with nonzero denominator) and constant multiples. These laws justify splitting complicated expressions into simpler pieces."],
              ["Beyond $\\frac{0}{0}$", "For $\\frac{0}{0}$ forms: factor polynomials, cancel common factors, rationalize with conjugates, or combine fractions over a common denominator. For $\\frac{\\sin x}{x}$ as $x \\to 0$, the standard limit is $1$."],
            ],
            formulas: [
              ["Standard limit", "$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$"],
              ["Squeeze example", "$-x^2 \\le x\\sin\\frac{1}{x} \\le x^2 \\Rightarrow \\lim_{x \\to 0} x\\sin\\frac{1}{x} = 0$"],
            ],
            worked: {
              problem: "Evaluate $\\lim_{x \\to 0} \\frac{\\sin 3x}{x}$.",
              solution: "Rewrite as $3 \\cdot \\frac{\\sin 3x}{3x}$. As $x \\to 0$, $3x \\to 0$ and $\\frac{\\sin 3x}{3x} \\to 1$, so the limit is $3 \\cdot 1 = 3$.",
            },
            questions: [
              mcq("foundation", 1, "Evaluate $\\lim_{x \\to 5} (3x + 2)$.", [["a", "$17$"], ["b", "$2$"], ["c", "$15$"], ["d", "Does not exist"]], "a",
                [P("method", "Direct substitution", "The function is continuous, so substitute $x = 5$.")],
                [S("$3(5) + 2 = 17$.", 1, "M")], "$17$", ["Adding instead of substituting into the whole expression."]),
              mcq("core", 1, "Evaluate $\\lim_{x \\to 0} \\frac{\\sin 5x}{x}$.", [["a", "$1$"], ["b", "$5$"], ["c", "$0$"], ["d", "Does not exist"]], "b",
                [P("method", "Standard limit", "$\\frac{\\sin 5x}{x} = 5 \\cdot \\frac{\\sin 5x}{5x} \\to 5 \\cdot 1$.")],
                [S("The limit is $5$.", 1, "M")], "$5$", ["Forgetting the factor of $5$ from the coefficient."]),
              num("core", 2, "Evaluate $\\lim_{x \\to \\infty} \\frac{4x^2 + x}{2x^2 - 3}$. Enter the limit value.", [{ label: "Limit", answer: 2 }],
                [P("method", "Highest-degree terms", "Divide numerator and denominator by $x^2$.")],
                [S("$\\frac{4 + \\frac{1}{x}}{2 - \\frac{3}{x^2}} \\to \\frac{4}{2} = 2$.", 1, "M"), S("Limit value $2$.", 1, "B")], "$2$", ["Comparing wrong-degree terms or mishandling signs."]),
              op("challenge", 3, "Use the squeeze theorem to evaluate $\\lim_{x \\to 0} x^2 \\sin\\frac{1}{x}$. State the bounding functions and the limit.",
                [P("theorem", "Squeeze theorem", "Bound $f$ between two functions with the same limit."), P("concept", "Bound on sine", "$-1 \\le \\sin\\theta \\le 1$.")],
                [S("Since $-1 \\le \\sin\\frac{1}{x} \\le 1$, multiply by $x^2 \\ge 0$: $-x^2 \\le x^2\\sin\\frac{1}{x} \\le x^2$.", 1, "M"), S("Both bounds $\\to 0$, so by the squeeze theorem the limit is $0$.", 1, "M"), S("Correct bounding functions and conclusion stated.", 1, "B")], "$0$", ["Bounding with functions whose limits differ."]),
            ],
          }),
        lesson("continuity", "Continuity and the Intermediate Value Theorem", "I CAN determine where a function is continuous and apply the IVT.", ["LIM-3", "CONT-1"],
          [["Continuous at a point", "$\\lim_{x \\to a} f(x) = f(a)$ — the graph has no break there."], ["Continuity conditions", "Three requirements: $f(a)$ defined, the two-sided limit exists, and they are equal."], ["Infinite discontinuity", "A vertical asymptote where the function grows without bound."], ["Intermediate Value Theorem", "If $f$ is continuous on $[a,b]$, it takes every value between $f(a)$ and $f(b)$."], ["Intermediate value", "A value $k$ strictly between $f(a)$ and $f(b)$ guaranteed to be attained."]],
          {
            title: "Continuity",
            skill: "Check the three continuity conditions and use the IVT to guarantee roots.",
            sections: [
              ["Three conditions", "A function is continuous at $x = a$ only if: (1) $f(a)$ is defined, (2) $\\lim_{x \\to a} f(x)$ exists (left and right agree), and (3) the limit equals $f(a)$. A removable discontinuity fails (3); a jump fails (2); an asymptote fails (1) and (2)."],
              ["Intermediate Value Theorem", "If $f$ is continuous on a closed interval $[a, b]$, then for any value $k$ between $f(a)$ and $f(b)$ there is at least one $c \\in [a,b]$ with $f(c) = k$. This guarantees roots without solving — used constantly in existence proofs."],
            ],
            formulas: [
              ["Continuity test", "$f(a)$ defined \\;\\&\\; \\lim_{x\\to a}f(x) \\text{ exists} \\;\\&\\; \\lim_{x\\to a}f(x) = f(a)$"],
              ["IVT", "$f$ continuous on $[a,b]$, $k$ between $f(a)$ and $f(b)$ $\\Rightarrow \\exists\\, c \\in [a,b]: f(c) = k$"],
            ],
            worked: {
              problem: "Show $f(x) = x^3 - x - 2$ has a root in $[1, 2]$.",
              solution: "$f(1) = 1 - 1 - 2 = -2$ and $f(2) = 8 - 2 - 2 = 4$. Since $f$ is a polynomial, it is continuous everywhere, and $0$ lies between $-2$ and $4$. By the IVT, some $c \\in (1,2)$ has $f(c) = 0$.",
            },
            questions: [
              mcq("foundation", 1, "Which condition failing makes $f(x) = \\frac{1}{x-2}$ discontinuous at $x = 2$?", [["a", "$f(2)$ is not defined"], ["b", "The limit does not exist"], ["c", "Both (a) and (b)"], ["d", "Neither — it is continuous"]], "c",
                [P("definition", "Continuity", "Requires defined value, existing limit, and equality.")],
                [S("$f(2)$ is undefined and the one-sided limits are $+\\infty$ and $-\\infty$ — an infinite discontinuity fails multiple conditions.", 1, "B")], "(c) Both", ["Thinking a function can be discontinuous for only one reason."]),
              mcq("core", 1, "Is $f(x) = \\frac{x^2 - 1}{x - 1}$ continuous at $x = 1$?", [["a", "No — $f(1)$ is undefined (removable discontinuity)"], ["b", "Yes — the limit exists"], ["c", "No — the limit does not exist"], ["d", "Cannot be determined"]], "a",
                [P("definition", "Continuity", "Requires $f(a)$ defined AND limit equal to $f(a)$.")],
                [S("The limit is $2$ (removable), but $f(1)$ is undefined, so $f$ fails the first continuity condition — it is discontinuous as written.", 1, "B")], "(a) No — $f(1)$ undefined", ["Thinking an existing limit alone makes the function continuous."]),
              num("core", 2, "For $f(x) = x^2 - 4x + 3$ on $[0, 4]$, verify the IVT applies to $k = 0$. Enter the number of guaranteed roots in the interval (minimum).", [{ label: "Roots", answer: 2 }],
                [P("theorem", "IVT", "$f(0) = 3$, $f(4) = 3$; $f(2) = -1$ dips below $0$.")],
                [S("$f(0) = 3 > 0$ and $f(2) = -1 < 0$: IVT guarantees a root in $(0,2)$.", 1, "M"), S("$f(2) = -1 < 0$ and $f(4) = 3 > 0$: another root in $(2,4)$ — minimum $2$ roots.", 1, "B")], "$2$ guaranteed roots", ["Only checking endpoints and missing the interior dip."]),
              op("challenge", 3, "Define $f(x) = \\frac{x^2 - x - 6}{x - 3}$. (a) Find $\\lim_{x \\to 3} f(x)$. (b) Is $f$ continuous at $x = 3$? (c) What single value could be assigned to $f(3)$ to make it continuous?",
                [P("method", "Factor", "$x^2 - x - 6 = (x-3)(x+2)$."), P("definition", "Continuity", "Define $f(3)$ equal to the limit.")],
                [S("(a) $\\lim_{x \\to 3} \\frac{(x-3)(x+2)}{x-3} = \\lim (x+2) = 5$.", 1, "M"), S("(b) No — $f(3)$ is undefined, so continuity fails.", 1, "B"), S("(c) Assign $f(3) = 5$; then limit $=$ value and $f$ becomes continuous (removable discontinuity filled).", 1, "R")], "(a) $5$; (b) No; (c) $f(3) = 5$", ["Forgetting that defining the value is what repairs the discontinuity."]),
            ],
          }),
      ],
    },
    {
      id: "apcab-u2",
      title: "Differentiation",
      description: "Compute derivatives from definitions and rules, apply the chain rule, and differentiate implicit and inverse functions.",
      lessons: [
        lesson("derivative-definition", "The Derivative", "I CAN compute derivatives from the limit definition and interpret them as rates of change.", ["DER-1"],
          [["Derivative", "$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$ — the instantaneous rate of change."], ["Tangent line", "The line touching a curve at a point with slope $f'(a)$."], ["Secant line", "A line through two points on a curve; its slope approximates the derivative."], ["Velocity", "The derivative of position; $v = s'(t)$."], ["Differentiable", "A function whose derivative exists at a point — must be continuous and have no corner or cusp there."]],
          {
            title: "The derivative as a limit",
            skill: "Apply the limit definition and interpret derivatives as slopes and rates.",
            sections: [
              ["Definition", "The derivative of $f$ at $x$ is $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$. Geometrically it is the slope of the tangent line — the limit of secant slopes as the second point slides toward the first."],
              ["Computing from the definition", "Expand $f(x+h)$, subtract $f(x)$, divide by $h$, then take the limit. For $f(x) = x^2$: $\\frac{(x+h)^2 - x^2}{h} = \\frac{2xh + h^2}{h} = 2x + h \\to 2x$. The derivative of $x^2$ is $2x$."],
            ],
            formulas: [
              ["Definition", "$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h}$"],
              ["Power rule preview", "$\\frac{d}{dx} x^n = nx^{n-1}$"],
            ],
            worked: {
              problem: "Use the definition to find $f'(x)$ for $f(x) = 3x - 5$.",
              solution: "$\\frac{[3(x+h) - 5] - (3x - 5)}{h} = \\frac{3h}{h} = 3$ for all $h \\ne 0$. So $f'(x) = 3$ — a constant slope, matching the line's steepness.",
            },
            questions: [
              mcq("foundation", 1, "The derivative $f'(x)$ gives the slope of ___.", [["a", "the secant line"], ["b", "the tangent line"], ["c", "the $x$-axis"], ["d", "the normal line only"]], "b",
                [P("definition", "Derivative", "Instantaneous rate of change = tangent slope.")],
                [S("$f'(x)$ is the limit of secant slopes, i.e., the tangent line's slope at $x$.", 1, "B")], "(b) tangent line", ["Confusing the secant (two points) with the tangent (limit)."]),
              mcq("core", 1, "If position is $s(t) = t^2$ meters, what is the velocity at $t = 3$?", [["a", "$3$ m/s"], ["b", "$6$ m/s"], ["c", "$9$ m/s"], ["d", "$2$ m/s"]], "b",
                [P("concept", "Velocity = derivative", "$v = s'(t) = 2t$.")],
                [S("$v(3) = 2(3) = 6$ m/s.", 1, "M")], "$6$ m/s", ["Differentiating to $2t^2$ or forgetting to evaluate at $t=3$."]),
              num("core", 2, "Use the limit definition to find $f'(2)$ for $f(x) = x^2$. Enter the value.", [{ label: "$f'(2)$", answer: 4 }],
                [P("method", "Definition", "$f'(x) = \\lim_{h\\to0}\\frac{(x+h)^2-x^2}{h} = 2x$.")],
                [S("$f'(x) = 2x$, so $f'(2) = 4$.", 1, "M"), S("Correct value $4$.", 1, "B")], "$4$", ["Sign errors when expanding $(x+h)^2$."]),
              op("challenge", 3, "Let $f(x) = |x|$. (a) Is $f$ differentiable at $x = 0$? (b) Explain using one-sided derivatives or the graph.",
                [P("concept", "Differentiability", "Requires a single tangent slope — no corners."), P("concept", "Corner", "$|x|$ has slopes $-1$ and $+1$ meeting at the origin.")],
                [S("(a) No, $f$ is not differentiable at $0$.", 1, "B"), S("Left derivative is $-1$, right derivative is $+1$; they disagree, so no single tangent slope exists — a corner.", 1, "M"), S("Graph shows a sharp point at the origin confirming the corner.", 1, "R")], "Not differentiable at $x=0$ (corner)", ["Saying $|x|$ has derivative $0$ or undefined everywhere."]),
            ],
          }),
        lesson("derivative-rules", "Basic Differentiation Rules", "I CAN differentiate polynomial, product, quotient, and trigonometric functions.", ["DER-2"],
          [["Constant rule", "$\\frac{d}{dx}(c) = 0$."], ["Power rule", "$\\frac{d}{dx} x^n = nx^{n-1}$."], ["Sum/difference rule", "Derivatives add and subtract term by term."], ["Product rule", "$(fg)' = f'g + fg'$."], ["Quotient rule", "$\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$."], ["Trig derivatives", "$\\frac{d}{dx}\\sin x = \\cos x$, $\\frac{d}{dx}\\cos x = -\\sin x$, $\\frac{d}{dx}\\tan x = \\sec^2 x$."]],
          {
            title: "Differentiation rules",
            skill: "Apply power, product, quotient and trig rules fluently.",
            sections: [
              ["Core rules", "The power rule handles $x^n$; the constant rule kills standalone constants; sums differentiate termwise. Combine them for any polynomial: $\\frac{d}{dx}(3x^4 - 2x^2 + 7) = 12x^3 - 4x$."],
              ["Product and quotient", "When two functions multiply, use $(fg)' = f'g + fg'$ — not $f'g'$. For quotients, $\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$ — the order matters: numerator's derivative times denominator MINUS function times denominator's derivative, all over $g^2$."],
            ],
            formulas: [
              ["Product rule", "$(fg)' = f'g + fg'$"],
              ["Quotient rule", "$\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$"],
            ],
            worked: {
              problem: "Find $\\frac{d}{dx}\\left(x^3 \\sin x\\right)$.",
              solution: "Product rule with $f = x^3$, $g = \\sin x$: $f' = 3x^2$, $g' = \\cos x$. Result: $3x^2 \\sin x + x^3 \\cos x$.",
            },
            questions: [
              mcq("foundation", 1, "What is $\\frac{d}{dx}(5x^3 - 2x + 9)$?", [["a", "$15x^2 - 2$"], ["b", "$15x^2 + 9$"], ["c", "$5x^2 - 2$"], ["d", "$15x^3 - 2$"]], "a",
                [P("method", "Power rule", "Term-by-term: $15x^2 - 2 + 0$.")],
                [S("$\\frac{d}{dx}(5x^3) = 15x^2$, $\\frac{d}{dx}(-2x) = -2$, $\\frac{d}{dx}(9) = 0$.", 1, "M")], "$15x^2 - 2$", ["Keeping the constant $9$ or misapplying the power rule."]),
              mcq("core", 1, "What is $\\frac{d}{dx}(x \\cos x)$?", [["a", "$\\cos x - x\\sin x$"], ["b", "$-\\sin x$"], ["c", "$\\cos x + x \\sin x$"], ["d", "$x\\sin x$"]], "a",
                [P("method", "Product rule", "$f=x$, $g=\\cos x$: $f'=1$, $g'=-\\sin x$.")],
                [S("$(x)'\\cos x + x(\\cos x)' = \\cos x - x\\sin x$.", 1, "M")], "$\\cos x - x\\sin x$", ["Sign error on the $\\cos x$ derivative."]),
              num("core", 2, "Find $\\frac{d}{dx}\\frac{x}{x+1}$ at $x = 0$. Enter the derivative value.", [{ label: "Derivative", answer: 1 }],
                [P("method", "Quotient rule", "$\\frac{(1)(x+1) - x(1)}{(x+1)^2} = \\frac{1}{(x+1)^2}$.")],
                [S("Quotient gives $\\frac{1}{(x+1)^2}$; at $x=0$ this is $1$.", 1, "M"), S("Value $1$.", 1, "B")], "$1$", ["Reversing the subtraction order in the quotient rule."]),
              op("challenge", 3, "Find $\\frac{d}{dx}\\left(\\frac{\\sin x}{x^2}\\right)$ and simplify.",
                [P("method", "Quotient rule", "$f=\\sin x$, $g=x^2$: $f'=\\cos x$, $g'=2x$.")],
                [S("$\\frac{\\cos x \\cdot x^2 - \\sin x \\cdot 2x}{x^4} = \\frac{x\\cos x - 2\\sin x}{x^3}$.", 1, "M"), S("Factor $x$ from numerator and cancel one power of $x$.", 1, "M"), S("Simplified: $\\frac{x\\cos x - 2\\sin x}{x^3}$.", 1, "B")], "$\\frac{x\\cos x - 2\\sin x}{x^3}$", ["Not canceling common factors or misplacing the $g^2$ denominator."]),
            ],
          }),
        lesson("chain-implicit", "Chain Rule and Implicit Differentiation", "I CAN apply the chain rule and differentiate implicitly defined relations.", ["DER-3", "DER-4"],
          [["Chain rule", "$\\frac{d}{dx} f(g(x)) = f'(g(x)) \\cdot g'(x)$ — derivative of outside times derivative of inside."], ["Nested chain", "Apply repeatedly: $\\frac{d}{dx}\\sin(x^2) = \\cos(x^2) \\cdot 2x$."], ["Implicit function", "A relation like $x^2 + y^2 = 25$ where $y$ is not isolated."], ["Implicit differentiation", "Differentiate both sides with respect to $x$, treating $y$ as a function of $x$ and multiplying $y$-terms by $\\frac{dy}{dx}$."], ["$\\frac{dy}{dx}$", "The derivative of an implicitly defined $y$ with respect to $x$."]],
          {
            title: "Chain rule and implicit differentiation",
            skill: "Differentiate composite functions and relations defined implicitly.",
            sections: [
              ["Chain rule", "For a composite $f(g(x))$, differentiate the outer function, keep the inner function unchanged, then multiply by the inner derivative: $\\frac{d}{dx}\\sin(x^2) = \\cos(x^2) \\cdot 2x$. Every 'inside' function — parentheses, powers of expressions — triggers another factor."],
              ["Implicit differentiation", "When $y$ is defined by an equation like $x^2 + y^2 = 25$, differentiate both sides w.r.t. $x$. Every $y$-term picks up a factor of $\\frac{dy}{dx}$ (since $\\frac{d}{dx}y^2 = 2y\\frac{dy}{dx}$), then solve for $\\frac{dy}{dx}$."],
            ],
            formulas: [
              ["Chain rule", "$\\frac{d}{dx}f(g(x)) = f'(g(x))\\,g'(x)$"],
              ["Implicit", "$\\frac{d}{dx}y^n = ny^{n-1}\\frac{dy}{dx}$; solve for $\\frac{dy}{dx}$"],
            ],
            worked: {
              problem: "Find $\\frac{dy}{dx}$ for $x^2 + y^2 = 25$.",
              solution: "Differentiate: $2x + 2y\\frac{dy}{dx} = 0$. Solve: $\\frac{dy}{dx} = -\\frac{x}{y}$. At $(3,4)$ the slope is $-\\frac{3}{4}$.",
            },
            questions: [
              mcq("foundation", 1, "What is $\\frac{d}{dx}\\sin(3x)$?", [["a", "$\\cos(3x)$"], ["b", "$3\\cos(3x)$"], ["c", "$-3\\cos(3x)$"], ["d", "$3\\sin(3x)$"]], "b",
                [P("method", "Chain rule", "Outer derivative $\\cos(3x)$ times inner derivative $3$.")],
                [S("$\\cos(3x) \\cdot 3 = 3\\cos(3x)$.", 1, "M")], "$3\\cos(3x)$", ["Dropping the inner derivative factor of $3$."]),
              mcq("core", 1, "For $y^2 = x^3 + 1$, what is $\\frac{dy}{dx}$?", [["a", "$\\frac{3x^2}{2y}$"], ["b", "$\\frac{2y}{3x^2}$"], ["c", "$3x^2$"], ["d", "$\\frac{3x^2}{y}$"]], "a",
                [P("method", "Implicit differentiation", "$2y\\frac{dy}{dx} = 3x^2$.")],
                [S("Solve: $\\frac{dy}{dx} = \\frac{3x^2}{2y}$.", 1, "M")], "$\\frac{3x^2}{2y}$", ["Forgetting the factor $2y$ on the left side."]),
              num("core", 2, "Find $\\frac{dy}{dx}$ for $xy + y^2 = 6$ at the point $(2, 1)$. Enter the slope value.", [{ label: "Slope", answer: -0.8 }],
                [P("method", "Implicit + product", "$y + x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0$.")],
                [S("Differentiate: $y + x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0$, so $(x + 2y)\\frac{dy}{dx} = -y$.", 1, "M"), S("At $(2,1)$: $(2 + 2)\\frac{dy}{dx} = -1$, giving slope $-0.25$.", 1, "B")], "$-0.25$", ["Sign error collecting $y'$ terms."]),
              op("challenge", 3, "Find $\\frac{dy}{dx}$ for $\\sin y = x^2 + y$ using implicit differentiation.",
                [P("method", "Implicit differentiation", "Left side: $\\cos y \\cdot \\frac{dy}{dx}$.")],
                [S("Differentiate: $\\cos y \\cdot y' = 2x + y'$. Group $y'$ terms: $y'(\\cos y - 1) = 2x$.", 1, "M"), S("Solve: $\\frac{dy}{dx} = \\frac{2x}{\\cos y - 1}$.", 1, "M"), S("Correct expression stated.", 1, "B")], "$\\frac{dy}{dx} = \\frac{2x}{\\cos y - 1}$", ["Treating $\\sin y$ derivative as $\\cos y$ without the $y'$ factor."]),
            ],
          }),
      ],
    },
    {
      id: "apcab-u3",
      title: "Applications of Derivatives and Intro to Integration",
      description: "Apply the Mean Value Theorem, find extrema, sketch curves, optimize, and connect derivatives to accumulation.",
      lessons: [
        lesson("mvt-extrema", "Mean Value Theorem and Extrema", "I CAN apply the MVT and locate local extrema using first and second derivatives.", ["MVT-1", "EXT-1"],
          [["Rolle's theorem", "If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a)=f(b)$, then $f'(c)=0$ for some $c$."], ["Mean Value Theorem", "Under the same conditions (without equal endpoints), $f'(c) = \\frac{f(b)-f(a)}{b-a}$ for some $c \\in (a,b)$."], ["Critical point", "Where $f'(x) = 0$ or $f'(x)$ is undefined — candidates for extrema."], ["First derivative test", "$f'$ changes $-$ to $+$ at $c$ $\\Rightarrow$ local min; $+$ to $-$ $\\Rightarrow$ local max."], ["Second derivative test", "$f''(c) > 0$ $\\Rightarrow$ local min; $f''(c) < 0$ $\\Rightarrow$ local max at critical point $c$."]],
          {
            title: "MVT and extrema",
            skill: "Use derivative tests to find and classify critical points.",
            sections: [
              ["Mean Value Theorem", "If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, some interior point $c$ has tangent parallel to the secant: $f'(c) = \\frac{f(b) - f(a)}{b - a}$. It guarantees a 'parallel tangent' exists — the analytical backbone of calculus."],
              ["Finding extrema", "Candidates for local extrema are critical points where $f' = 0$ or $f'$ is undefined. Classify with the first derivative test (sign change of $f'$) or second derivative test (sign of $f''$). For $f(x) = x^3 - 3x$: $f' = 3x^2 - 3 = 0$ at $x = \\pm 1$; $f'' = 6x$ gives $f''(-1) < 0$ (max) and $f''(1) > 0$ (min)."],
            ],
            formulas: [
              ["MVT", "$f'(c) = \\frac{f(b)-f(a)}{b-a}$ for some $c \\in (a,b)$"],
              ["Second derivative test", "$f'(c)=0$: $f''(c)>0$ min, $f''(c)<0$ max, $f''(c)=0$ inconclusive"],
            ],
            worked: {
              problem: "Find and classify the critical points of $f(x) = x^3 - 3x^2$.",
              solution: "$f' = 3x^2 - 6x = 3x(x-2)$, so $x = 0$ and $x = 2$. $f'' = 6x - 6$: $f''(0) = -6 < 0$ (local max), $f''(2) = 6 > 0$ (local min).",
            },
            questions: [
              mcq("foundation", 1, "Critical points of $f$ occur where ___.", [["a", "$f(x) = 0$"], ["b", "$f'(x) = 0$ or $f'(x)$ undefined"], ["c", "$f''(x) = 0$"], ["d", "$f$ is continuous"]], "b",
                [P("definition", "Critical point", "Where the derivative is zero or undefined.")],
                [S("Extrema candidates are found from $f'$, not $f$ or $f''$.", 1, "B")], "(b)", ["Confusing critical points with roots of $f$."]),
              mcq("core", 1, "For $f(x) = x^2 - 4x + 1$, the vertex is at $x = $. What is it?", [["a", "$-2$"], ["b", "$2$"], ["c", "$4$"], ["d", "$0$"]], "b",
                [P("method", "Solve $f'=0$", "$f' = 2x - 4 = 0 \\Rightarrow x = 2$.")],
                [S("$x = 2$; since $f'' = 2 > 0$ it is a minimum.", 1, "M")], "$2$", ["Sign error solving $2x - 4 = 0$."]),
              num("core", 2, "For $f(x) = x^3 - 12x$, find the $x$-value of the local maximum. Enter the value.", [{ label: "$x$", answer: -2 }],
                [P("method", "Critical points + test", "$f' = 3x^2 - 12 = 0 \\Rightarrow x = \\pm 2$.")],
                [S("$f'' = 6x$: $f''(-2) = -12 < 0$ so $x = -2$ is the local max; $f''(2) > 0$ is the min.", 1, "M"), S("Local max at $x = -2$.", 1, "B")], "$-2$", ["Picking the minimum instead of the maximum."]),
              op("challenge", 3, "Verify the MVT for $f(x) = x^2$ on $[1, 3]$: find $c$ where $f'(c)$ equals the secant slope.",
                [P("theorem", "MVT", "$f'(c) = \\frac{f(3)-f(1)}{3-1} = \\frac{9-1}{2} = 4$.")],
                [S("Secant slope $= 4$; $f'(x) = 2x$, so $2c = 4 \\Rightarrow c = 2$.", 1, "M"), S("Check $c = 2 \\in (1,3)$ — MVT satisfied.", 1, "M"), S("Correct $c$ with verification stated.", 1, "B")], "$c = 2$", ["Using endpoints instead of the open interval, or solving $f'=4$ incorrectly."]),
            ],
          }),
        lesson("curve-sketching", "Curve Sketching and Optimization", "I CAN use derivatives to sketch curves and solve optimization problems.", ["SK-1", "OPT-1"],
          [["Increasing/decreasing", "$f' > 0$ on an interval $\\Rightarrow f$ increasing there; $f' < 0 \\Rightarrow$ decreasing."], ["Concavity", "$f'' > 0 \\Rightarrow$ concave up; $f'' < 0 \\Rightarrow$ concave down."], ["Inflection point", "Where concavity changes — typically where $f'' = 0$ and changes sign."], ["Optimization", "Translate a word problem into a function, find critical points, and justify the optimum."], ["Closed interval extrema", "Always check endpoints when optimizing on a closed interval."]],
          {
            title: "Applications of the derivative",
            skill: "Analyze function behavior and solve max/min word problems.",
            sections: [
              ["Sketching with derivatives", "Use $f'$ for increasing/decreasing intervals and critical points, $f''$ for concavity and inflection points, and evaluate key points. The sign chart of $f'$ and $f''$ across critical values gives the complete shape."],
              ["Optimization", "Model the quantity to optimize as a function of one variable (use constraints to eliminate others), differentiate, find critical points, and compare with endpoints if the domain is closed. Justify that your answer is a max or min using the second derivative test or endpoint comparison."],
            ],
            formulas: [
              ["Monotonicity", "$f'>0$ increasing, $f'<0$ decreasing"],
              ["Concavity", "$f''>0$ concave up, $f''<0$ concave down"],
            ],
            worked: {
              problem: "A rectangle has perimeter $100$. Maximize its area.",
              solution: "$2l + 2w = 100 \\Rightarrow w = 50 - l$. Area $A = l(50 - l) = 50l - l^2$. $A' = 50 - 2l = 0 \\Rightarrow l = 25$, $w = 25$. $A'' = -2 < 0$ confirms a maximum: a $25 \\times 25$ square, area $625$.",
            },
            questions: [
              mcq("foundation", 1, "If $f'(x) > 0$ on $(0, 4)$, then $f$ is ___.", [["a", "decreasing"], ["b", "increasing"], ["c", "concave up"], ["d", "constant"]], "b",
                [P("concept", "Sign of $f'$", "Positive derivative means rising graph.")],
                [S("$f' > 0$ means the function increases on the interval.", 1, "B")], "(b) increasing", ["Confusing $f'$ sign with $f''$ concavity."]),
              mcq("core", 1, "Where is $f(x) = x^3 - 3x$ concave up?", [["a", "$x < 0$"], ["b", "$x > 0$"], ["c", "All $x$"], ["d", "Nowhere"]], "b",
                [P("method", "Second derivative", "$f'' = 6x$; concave up when $f'' > 0$.")],
                [S("$6x > 0$ when $x > 0$.", 1, "M")], "$x > 0$", ["Using $f'$ instead of $f''$ for concavity."]),
              num("core", 2, "A box with a square base and no top has volume $32\\text{ ft}^3$. What base side length minimizes surface area? Enter the side length.", [{ label: "Side", answer: 4, unit: "ft" }],
                [P("model", "Optimize", "$V = x^2 h = 32 \\Rightarrow h = 32/x^2$; $S = x^2 + 4xh = x^2 + 128/x$.")],
                [S("$S' = 2x - 128/x^2 = 0 \\Rightarrow 2x^3 = 128 \\Rightarrow x = 4$.", 1, "M"), S("Side length $4$ ft (min since $S \\to \\infty$ at boundaries).", 1, "B")], "$4$ ft", ["Including a top face or mishandling the constraint."]),
              op("challenge", 3, "Find the absolute maximum and minimum of $f(x) = x^3 - 3x$ on $[-2, 2]$.",
                [P("method", "Closed interval method", "Check critical points and endpoints."), P("concept", "Critical points", "$f' = 3x^2 - 3 = 0 \\Rightarrow x = \\pm 1$.")],
                [S("Values: $f(-2) = -2$, $f(-1) = 2$, $f(1) = -2$, $f(2) = 2$.", 1, "M"), S("Absolute max $= 2$ (at $x = -1$ and $x = 2$); absolute min $= -2$ (at $x = -2$ and $x = 1$).", 1, "M"), S("Both extrema correctly identified.", 1, "B")], "Max $2$, min $-2$", ["Forgetting to check endpoints."]),
            ],
          }),
        lesson("integral-intro", "Introduction to Integration", "I CAN interpret the definite integral as accumulation and apply the Fundamental Theorem.", ["INT-1"],
          [["Antiderivative", "A function $F$ with $F' = f$; the general antiderivative is $F + C$."], ["Definite integral", "$\\int_a^b f(x)\\,dx$ — signed area under $f$ from $a$ to $b$."], ["Riemann sum", "Approximation of area by rectangles; the integral is the limit as widths shrink."], ["Fundamental Theorem of Calculus", "$\\int_a^b f(x)\\,dx = F(b) - F(a)$ where $F' = f$."], ["Accumulation", "The integral sums up a rate of change to give total change."]],
          {
            title: "Integrals as accumulation",
            skill: "Connect the definite integral to area and net change.",
            sections: [
              ["From derivative to integral", "Integration reverses differentiation. The definite integral $\\int_a^b f(x)\\,dx$ measures the net signed area between $f$ and the $x$-axis — positive where $f > 0$, negative where $f < 0$. It also answers 'total change': if $v(t)$ is velocity, $\\int_a^b v(t)\\,dt$ is displacement."],
              ["Fundamental Theorem", "Part 1: $\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$. Part 2: $\\int_a^b f(x)\\,dx = F(b) - F(a)$ for any antiderivative $F$. This turns area problems into antidifferentiation — the computational heart of integral calculus."],
            ],
            formulas: [
              ["FTC Part 2", "$\\int_a^b f(x)\\,dx = F(b) - F(a)$"],
              ["FTC Part 1", "$\\frac{d}{dx}\\int_a^x f(t)\\,dt = f(x)$"],
            ],
            worked: {
              problem: "Evaluate $\\int_0^2 3x^2\\,dx$.",
              solution: "An antiderivative of $3x^2$ is $x^3$. So $\\int_0^2 3x^2\\,dx = 2^3 - 0^3 = 8$ — the net area under $y = 3x^2$ from $0$ to $2$.",
            },
            questions: [
              mcq("foundation", 1, "$\\int_a^b f(x)\\,dx$ represents ___.", [["a", "the slope of $f$"], ["b", "the net signed area under $f$ from $a$ to $b$"], ["c", "$f(b) - f(a)$ always"], ["d", "the maximum of $f$"]], "b",
                [P("definition", "Definite integral", "Accumulated signed area / net change.")],
                [S("The integral sums $f$ over $[a,b]$ — area above the axis minus area below.", 1, "B")], "(b)", ["Confusing the integral with a derivative or endpoint difference."]),
              mcq("core", 1, "What is $\\frac{d}{dx}\\int_3^x (t^2 + 1)\\,dt$?", [["a", "$x^2 + 1$"], ["b", "$\\frac{x^3}{3} + x$"], ["c", "$x^2$"], ["d", "$2x$"]], "a",
                [P("theorem", "FTC Part 1", "Derivative of integral with variable upper limit is the integrand.")],
                [S("$\\frac{d}{dx}\\int_3^x f(t)\\,dt = f(x) = x^2 + 1$.", 1, "M")], "$x^2 + 1$", ["Differentiating the antiderivative instead of reading off the integrand."]),
              num("core", 2, "Evaluate $\\int_1^3 (2x + 1)\\,dx$. Enter the value.", [{ label: "Integral", answer: 14 }],
                [P("method", "FTC Part 2", "Antiderivative $x^2 + x$; evaluate $F(3) - F(1)$.")],
                [S("Antiderivative is $x^2 + x$; $F(3) = 12$ and $F(1) = 2$, so $12 - 2 = 10$.", 1, "M"), S("Value $10$.", 1, "B")], "$10$", ["Arithmetic error in $F(b) - F(a)$."]),
              op("challenge", 3, "A particle moves with velocity $v(t) = 6t$ m/s for $0 \\le t \\le 4$. (a) Write the integral for displacement. (b) Evaluate it. (c) Interpret the result.",
                [P("concept", "Integral as accumulation", "Displacement = $\\int v\\,dt$.")],
                [S("(a) Displacement $= \\int_0^4 6t\\,dt$.", 1, "M"), S("(b) Antiderivative $3t^2$; $3(16) - 0 = 48$ m.", 1, "M"), S("(c) The particle travels $48$ meters in $4$ seconds; since $v \\ge 0$ throughout, distance equals displacement.", 1, "R")], "$48$ m", ["Using $v^2$ or forgetting units."]),
            ],
          }),
      ],
    },
  ],
};

module.exports = { courses: [apCalcAb] };
