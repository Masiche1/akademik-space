// AP Calculus BC — sequences/series, parametric/polar, advanced integration. Spec for scripts/gen-us-elementary.cjs.
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

const apCalcBc = {
  id: "ap-calculus-bc",
  exportName: "apCalculusBc",
  prefix: "apcbc",
  title: "AP Calculus BC",
  shortTitle: "AP Calc BC",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description:
    "The BC extension of Calculus AB: infinite sequences and series, parametric and polar functions, vector-valued functions, and advanced integration techniques.",
  ap: { exam: "calculus-bc" },
  units: [
    {
      id: "apcbc-u1",
      title: "Infinite Sequences and Series",
      description: "Analyze convergence of sequences and series, apply convergence tests, and work with Taylor and power series.",
      lessons: [
        lesson("sequences-series", "Sequences and Series Fundamentals", "I CAN determine convergence of sequences and evaluate geometric series.", ["SER-1"],
          [["Sequence", "An ordered list of terms $a_1, a_2, a_3, \\ldots$ defined by a rule."], ["Series", "The sum of the terms of a sequence: $S = a_1 + a_2 + \\cdots$."], ["Convergent sequence", "Terms approach a finite limit $L$ as $n \\to \\infty$."], ["Geometric series", "A series with constant ratio $r$ between terms."], ["Partial sum", "$S_n = a_1 + \\cdots + a_n$ — the sum of the first $n$ terms."]],
          {
            title: "Sequences and series",
            skill: "Find limits of sequences and sums of convergent geometric series.",
            sections: [
              ["Sequences", "A sequence converges if $\\lim_{n \\to \\infty} a_n$ exists and is finite. For $a_n = \\frac{3n+1}{n}$, divide: $a_n \\to 3$, so it converges to $3$. The terms must settle, not just be bounded."],
              ["Geometric series", "With first term $a$ and ratio $r$, the infinite sum converges iff $|r| < 1$, giving $S = \\frac{a}{1-r}$. Partial sums follow $S_n = a\\frac{1-r^n}{1-r}$. If $|r| \\ge 1$ the series diverges."],
            ],
            formulas: [
              ["Geometric sum", "$S = \\frac{a}{1-r}$ for $|r| < 1$"],
              ["Partial sum", "$S_n = a\\,\\frac{1 - r^n}{1 - r}$"],
            ],
            worked: {
              problem: "Find the sum of $3 + 1 + \\frac{1}{3} + \\frac{1}{9} + \\cdots$.",
              solution: "First term $a = 3$, ratio $r = \\frac{1}{3}$. Since $|r| < 1$, $S = \\frac{3}{1 - \\frac{1}{3}} = \\frac{3}{\\frac{2}{3}} = \\frac{9}{2} = 4.5$.",
            },
            questions: [
              mcq("foundation", 1, "The sequence $a_n = \\frac{5n}{n+1}$ converges to ___.", [["a", "$0$"], ["b", "$5$"], ["c", "$\\infty$"], ["d", "Does not converge"]], "b",
                [P("method", "Limit of sequence", "$\\frac{5n}{n+1} \\to 5$ as $n \\to \\infty$.")],
                [S("Divide numerator and denominator by $n$: $\\frac{5}{1 + \\frac{1}{n}} \\to 5$.", 1, "M")], "$5$", ["Comparing degrees incorrectly or treating $\\frac{n}{n+1}$ as $0$."]),
              mcq("core", 1, "What is the sum of $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$?", [["a", "$2$"], ["b", "$1$"], ["c", "$\\infty$"], ["d", "$\\frac{1}{2}$"]], "a",
                [P("method", "Geometric sum", "$a=1$, $r=\\frac{1}{2}$, $S = \\frac{1}{1-\\frac{1}{2}}$.")],
                [S("$S = \\frac{1}{1/2} = 2$.", 1, "M")], "$2$", ["Using $r=2$ or misidentifying the first term."]),
              num("core", 2, "Find the sum of $\\sum_{n=1}^{\\infty} 4 \\left(\\frac{1}{3}\\right)^{n-1}$. Enter the value.", [{ label: "Sum", answer: 6 }],
                [P("method", "Geometric series", "$a = 4$, $r = \\frac{1}{3}$; $S = \\frac{a}{1-r}$.")],
                [S("$S = \\frac{4}{1 - \\frac{1}{3}} = \\frac{4}{\\frac{2}{3}} = 6$.", 1, "M"), S("Sum $= 6$.", 1, "B")], "$6$", ["Off-by-one in the exponent shifting the first term."]),
              op("challenge", 3, "Determine whether $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n}$ converges, and if so whether absolutely or conditionally.",
                [P("theorem", "Alternating series test", "Terms decrease in absolute value to $0$ — converges."), P("concept", "Absolute convergence", "Check $\\sum |a_n| = \\sum \\frac{1}{n}$ which diverges (harmonic).")],
                [S("$|a_n| = \\frac{1}{n}$ decreases to $0$, so the alternating series converges by AST.", 1, "M"), S("But $\\sum \\frac{1}{n}$ is the harmonic series, which diverges — so convergence is conditional, not absolute.", 1, "M"), S("Conclusion: converges conditionally.", 1, "B")], "Converges conditionally", ["Claiming absolute convergence without checking $\\sum|a_n|$."]),
            ],
          }),
        lesson("convergence-tests", "Convergence Tests for Series", "I CAN apply the integral, comparison, ratio, and alternating series tests.", ["SER-2"],
          [["Divergence test", "If $\\lim a_n \\ne 0$, the series diverges."], ["Integral test", "If $f$ is positive, decreasing, continuous and $a_n = f(n)$, then $\\sum a_n$ and $\\int_1^\\infty f$ share convergence."], ["Comparison test", "If $0 \\le a_n \\le b_n$ and $\\sum b_n$ converges, then $\\sum a_n$ converges."], ["Limit comparison", "If $\\lim \\frac{a_n}{b_n} = c > 0$, both series share behavior."], ["Ratio test", "Compute $L = \\lim \\left|\\frac{a_{n+1}}{a_n}\\right|$: $L<1$ converges, $L>1$ diverges, $L=1$ inconclusive."]],
          {
            title: "Series convergence tests",
            skill: "Choose and apply the right convergence test.",
            sections: [
              ["Choosing a test", "Start with the divergence test (cheap to check), then match the series type: $p$-series $\\sum \\frac{1}{n^p}$ converges iff $p > 1$; geometric converges iff $|r|<1$; factorials and exponentials suit the ratio test; alternating series suits AST. When unsure, comparison or limit comparison against a known $p$-series works."],
              ["The ratio test", "For $\\sum a_n$, compute $L = \\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right|$. Factorials collapse beautifully: $\\frac{(n+1)!}{n!} = n+1$. If $L < 1$ the series converges absolutely; $L > 1$ diverges; $L = 1$ tells nothing."],
            ],
            formulas: [
              ["$p$-series", "$\\sum \\frac{1}{n^p}$ converges iff $p > 1$"],
              ["Ratio test", "$L = \\lim \\left|\\frac{a_{n+1}}{a_n}\\right|$: $<1$ converge, $>1$ diverge, $=1$ inconclusive"],
            ],
            worked: {
              problem: "Does $\\sum_{n=1}^{\\infty} \\frac{n}{2^n}$ converge?",
              solution: "Ratio test: $\\frac{a_{n+1}}{a_n} = \\frac{n+1}{2^{n+1}} \\cdot \\frac{2^n}{n} = \\frac{n+1}{2n} \\to \\frac{1}{2} < 1$. The series converges.",
            },
            questions: [
              mcq("foundation", 1, "Does $\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$ converge?", [["a", "Yes — $p$-series with $p = 2 > 1$"], ["b", "No — terms go to $0$"], ["c", "No — harmonic series"], ["d", "Cannot tell"]], "a",
                [P("theorem", "$p$-series", "Converges iff $p > 1$.")],
                [S("$\\frac{1}{n^2}$ is a $p$-series with $p=2 > 1$ — converges (to $\\frac{\\pi^2}{6}$).", 1, "M")], "Converges", ["Confusing $\\sum \\frac{1}{n^2}$ with the harmonic $\\sum \\frac{1}{n}$."]),
              mcq("core", 1, "For $\\sum \\frac{n!}{10^n}$, the ratio test gives $L = $. What is it?", [["a", "$0$"], ["b", "$\\frac{1}{10}$"], ["c", "$\\infty$"], ["d", "$1$"]], "c",
                [P("method", "Ratio test", "$\\frac{(n+1)!}{10^{n+1}} \\cdot \\frac{10^n}{n!} = \\frac{n+1}{10} \\to \\infty$.")],
                [S("$L = \\infty > 1$, so the series diverges.", 1, "M")], "$\\infty$ (diverges)", ["Thinking factorials are beaten by exponentials — they are not."]),
              num("core", 2, "Does $\\sum_{n=1}^{\\infty} \\frac{1}{n^{1.5}}$ converge? Answer 1 for yes, 0 for no.", [{ label: "Converges?", answer: 1 }],
                [P("theorem", "$p$-series", "$p = 1.5 > 1$.")],
                [S("$\\sum n^{-1.5}$ is a $p$-series with $p = 1.5 > 1$, so it converges.", 1, "M"), S("Answer: converges (1).", 1, "B")], "Converges", ["Comparing $1.5$ to $1$ incorrectly."]),
              op("challenge", 3, "Classify $\\sum_{n=2}^{\\infty} \\frac{1}{n \\ln n}$ as convergent or divergent, justifying with the integral test.",
                [P("theorem", "Integral test", "$f(x) = \\frac{1}{x \\ln x}$ is positive, decreasing, continuous for $x \\ge 2$."), P("method", "Evaluate integral", "$\\int \\frac{dx}{x \\ln x} = \\ln(\\ln x)$.")],
                [S("$\\int_2^\\infty \\frac{dx}{x\\ln x} = \\lim_{b\\to\\infty} [\\ln(\\ln x)]_2^b = \\infty$ — the integral diverges.", 1, "M"), S("By the integral test, $\\sum \\frac{1}{n \\ln n}$ diverges.", 1, "M"), S("Conditions for the test verified and conclusion stated.", 1, "B")], "Diverges", ["Ignoring the $\\ln x$ factor or mis-evaluating the antiderivative."]),
            ],
          }),
        lesson("taylor-series", "Taylor and Power Series", "I CAN construct Taylor polynomials and determine intervals of convergence.", ["SER-3"],
          [["Taylor polynomial", "$T_n(x) = \\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k$ — approximates $f$ near $x = a$."], ["Maclaurin series", "Taylor series centered at $a = 0$."], ["Radius of convergence", "$R$ such that the series converges for $|x - a| < R$."], ["Interval of convergence", "The actual $x$-values where the series converges, including endpoint checks."], ["Known series", "$e^x = \\sum \\frac{x^n}{n!}$, $\\sin x = \\sum \\frac{(-1)^n x^{2n+1}}{(2n+1)!}$, $\\cos x = \\sum \\frac{(-1)^n x^{2n}}{(2n)!}$, $\\frac{1}{1-x} = \\sum x^n$ for $|x|<1$."]],
          {
            title: "Power series",
            skill: "Build Taylor polynomials and find intervals of convergence.",
            sections: [
              ["Taylor polynomials", "$T_n(x) = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\cdots$ matches $f$ and its derivatives at $a$. Higher $n$ means better approximation near $a$. For $e^x$ at $0$: $1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots$."],
              ["Intervals of convergence", "Use the ratio test on the general term to get the radius $R$, then test the endpoints $x = a \\pm R$ separately — endpoints may converge or diverge independently. For $\\sum x^n$, $R = 1$ and the interval is $(-1, 1)$ since both endpoints diverge."],
            ],
            formulas: [
              ["Taylor polynomial", "$T_n(x) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!}(x-a)^k$"],
              ["Radius via ratio", "$R = \\lim \\left|\\frac{a_n}{a_{n+1}}\\right|$ or from ratio test on terms"],
            ],
            worked: {
              problem: "Find the third-degree Maclaurin polynomial for $\\sin x$.",
              solution: "$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$. Third degree: $T_3(x) = x - \\frac{x^3}{6}$ (only odd powers appear).",
            },
            questions: [
              mcq("foundation", 1, "The Maclaurin series for $e^x$ begins ___.", [["a", "$1 - x + \\frac{x^2}{2} - \\cdots$"], ["b", "$1 + x + \\frac{x^2}{2} + \\cdots$"], ["c", "$x + \\frac{x^2}{2} + \\cdots$"], ["d", "$1 + x + x^2 + \\cdots$"]], "b",
                [P("definition", "Maclaurin", "$e^x = \\sum \\frac{x^n}{n!}$ at $a=0$.")],
                [S("All signs positive: $1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$.", 1, "M")], "$1 + x + \\frac{x^2}{2} + \\cdots$", ["Alternating signs — that is $\\sin x$ or $\\cos x$."]),
              mcq("core", 1, "What is the interval of convergence of $\\sum_{n=0}^{\\infty} x^n$?", [["a", "$[-1, 1]$"], ["b", "$(-1, 1)$"], ["c", "$(-\\infty, \\infty)$"], ["d", "$[0, 1)$"]], "b",
                [P("method", "Geometric ratio", "$|x| < 1$ converges; endpoints $x=\\pm1$ give $\\sum(\\pm1)^n$ which diverges.")],
                [S("Radius $R=1$; endpoints fail, so interval is $(-1,1)$.", 1, "M")], "$(-1, 1)$", ["Including endpoints without testing them."]),
              num("core", 2, "Approximate $e^{0.1}$ using the first three nonzero Maclaurin terms. Enter the value rounded to 4 decimals.", [{ label: "Approx", answer: 1.105, tolerance: 0.001 }],
                [P("method", "Maclaurin", "$e^x \\approx 1 + x + \\frac{x^2}{2}$.")],
                [S("$1 + 0.1 + \\frac{0.01}{2} = 1.105$.", 1, "M"), S("Approximation $1.105$ (true value $1.10517$).", 1, "B")], "$1.105$", ["Using $x^2$ coefficient $\\frac{1}{2!}=\\frac12$ incorrectly."]),
              op("challenge", 3, "Find the radius and interval of convergence of $\\sum_{n=1}^{\\infty} \\frac{(x-2)^n}{n \\cdot 3^n}$.",
                [P("method", "Ratio test", "$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{n}{n+1}\\cdot\\frac{|x-2|}{3} \\to \\frac{|x-2|}{3}$.")],
                [S("Converges when $\\frac{|x-2|}{3} < 1$, i.e., $|x-2| < 3$, so $R = 3$.", 1, "M"), S("Endpoints $x = -1$ and $x = 5$: series becomes $\\sum \\frac{(\\pm3)^n}{n\\,3^n} = \\sum \\frac{(\\pm1)^n}{n}$, which converges conditionally at both ends (alternating harmonic).", 1, "M"), S("Interval of convergence: $[-1, 5]$.", 1, "B")], "$R=3$, interval $[-1,5]$", ["Stopping at the radius without endpoint checks."]),
            ],
          }),
      ],
    },
    {
      id: "apcbc-u2",
      title: "Parametric, Polar, and Vector Functions",
      description: "Work with parametric equations, polar coordinates, vector-valued functions, and motion in the plane.",
      lessons: [
        lesson("parametric", "Parametric Equations and Motion", "I CAN eliminate the parameter, find derivatives, and analyze parametric motion.", ["PAR-1"],
          [["Parametric equations", "$x = x(t)$, $y = y(t)$ — both coordinates functions of a parameter $t$."], ["Eliminating the parameter", "Solve one equation for $t$ and substitute into the other to get $y(x)$."], ["Parametric derivative", "$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$ — the chain rule in parametric form."], ["Speed", "$\\sqrt{(dx/dt)^2 + (dy/dt)^2}$ — magnitude of the velocity vector."], ["Particle motion", "Position $(x(t), y(t))$ traces a path; velocity is $(x'(t), y'(t))$."]],
          {
            title: "Parametric equations",
            skill: "Convert between parametric and Cartesian forms and compute motion quantities.",
            sections: [
              ["Eliminating $t$", "From $x = t^2$ and $y = t^3$, solve $t = \\sqrt{x}$ (for $t \\ge 0$) and substitute: $y = x^{3/2}$. Not every parametrization eliminates cleanly — try solving the simpler equation for $t$."],
              ["Derivatives and motion", "$\\frac{dy}{dx} = \\frac{y'(t)}{x'(t)}$ gives the slope of the path. Speed is $\\sqrt{x'(t)^2 + y'(t)^2}$, and acceleration is $(x''(t), y''(t))$. For $x = \\cos t$, $y = \\sin t$ (the unit circle), $\\frac{dy}{dx} = \\frac{\\cos t}{-\\sin t} = -\\cot t$."],
            ],
            formulas: [
              ["Parametric derivative", "$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt}$"],
              ["Speed", "$v = \\sqrt{\\left(\\frac{dx}{dt}\\right)^2 + \\left(\\frac{dy}{dt}\\right)^2}$"],
            ],
            worked: {
              problem: "For $x = t^2$, $y = t^3 - t$, find $\\frac{dy}{dx}$ at $t = 1$.",
              solution: "$\\frac{dx}{dt} = 2t$, $\\frac{dy}{dt} = 3t^2 - 1$. At $t=1$: $\\frac{dy}{dx} = \\frac{3 - 1}{2} = 1$.",
            },
            questions: [
              mcq("foundation", 1, "For $x = t$, $y = t^2$, eliminating $t$ gives ___.", [["a", "$y = x$"], ["b", "$y = x^2$"], ["c", "$y = x^3$"], ["d", "$x = y^2$"]], "b",
                [P("method", "Substitute", "$t = x$, so $y = x^2$.")],
                [S("Direct substitution since $x = t$.", 1, "M")], "$y = x^2$", ["Squaring the wrong variable or keeping $t$."]),
              mcq("core", 1, "For $x = \\cos t$, $y = \\sin t$, what is $\\frac{dy}{dx}$?", [["a", "$\\tan t$"], ["b", "$-\\cot t$"], ["c", "$-\\tan t$"], ["d", "$\\cot t$"]], "b",
                [P("method", "Parametric derivative", "$\\frac{\\cos t}{-\\sin t} = -\\cot t$.")],
                [S("$\\frac{dy/dt}{dx/dt} = \\frac{\\cos t}{-\\sin t} = -\\cot t$.", 1, "M")], "$-\\cot t$", ["Sign error from $\\frac{d}{dt}\\cos t = -\\sin t$."]),
              num("core", 2, "A particle has $x(t) = t^2$, $y(t) = 2t$. Find its speed at $t = 3$. Enter the value.", [{ label: "Speed", answer: 6.325, tolerance: 0.01 }],
                [P("method", "Speed formula", "$x'=2t$, $y'=2$; $v = \\sqrt{(2t)^2 + 4}$.")],
                [S("At $t=3$: $v = \\sqrt{36 + 4} = \\sqrt{40} \\approx 6.32$.", 1, "M"), S("Speed $\\approx 6.32$.", 1, "B")], "$6.32$", ["Adding components instead of using the Pythagorean form."]),
              op("challenge", 3, "For the curve $x = e^t \\cos t$, $y = e^t \\sin t$ (a spiral), find $\\frac{dy}{dx}$ in terms of $t$.",
                [P("method", "Parametric derivative", "Compute $x'(t)$ and $y'(t)$ via product rule.")],
                [S("$x' = e^t(\\cos t - \\sin t)$, $y' = e^t(\\sin t + \\cos t)$.", 1, "M"), S("$\\frac{dy}{dx} = \\frac{\\sin t + \\cos t}{\\cos t - \\sin t}$ — the $e^t$ factors cancel.", 1, "M"), S("Correct simplified expression.", 1, "B")], "$\\frac{\\sin t + \\cos t}{\\cos t - \\sin t}$", ["Not canceling the common $e^t$ factor."]),
            ],
          }),
        lesson("polar", "Polar Coordinates and Curves", "I CAN convert between polar and rectangular forms and find polar derivatives.", ["POL-1"],
          [["Polar coordinates", "Point given by $(r, \\theta)$ — distance from origin and angle from positive $x$-axis."], ["Conversion", "$x = r\\cos\\theta$, $y = r\\sin\\theta$, $r = \\sqrt{x^2+y^2}$, $\\tan\\theta = \\frac{y}{x}$."], ["Polar curve", "Graph of $r = f(\\theta)$ — e.g., $r = 2$ is a circle, $r = 1 + \\cos\\theta$ a cardioid."], ["Polar derivative", "$\\frac{dy}{dx} = \\frac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}$."]],
          {
            title: "Polar coordinates",
            skill: "Convert representations and analyze polar curves.",
            sections: [
              ["Polar vs rectangular", "Polar $(r,\\theta)$ describes a point by distance and angle; rectangular $(x,y)$ by horizontal and vertical position. Convert with $x = r\\cos\\theta$ and $y = r\\sin\\theta$; the inverse uses $r = \\sqrt{x^2+y^2}$. A full circle is simply $r = \\text{constant}$."],
              ["Slopes in polar", "Treat $x(\\theta) = r(\\theta)\\cos\\theta$ and $y(\\theta) = r(\\theta)\\sin\\theta$ as parametric equations in $\\theta$. Then $\\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta}$, computed with the product rule — messier than Cartesian but mechanical."],
            ],
            formulas: [
              ["Conversion", "$x = r\\cos\\theta$, $y = r\\sin\\theta$"],
              ["Polar slope", "$\\frac{dy}{dx} = \\frac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}$"],
            ],
            worked: {
              problem: "Convert the polar point $(2, \\frac{\\pi}{3})$ to rectangular.",
              solution: "$x = 2\\cos\\frac{\\pi}{3} = 2 \\cdot \\frac{1}{2} = 1$; $y = 2\\sin\\frac{\\pi}{3} = 2 \\cdot \\frac{\\sqrt{3}}{2} = \\sqrt{3}$. Point: $(1, \\sqrt{3})$.",
            },
            questions: [
              mcq("foundation", 1, "The polar point $(3, 0)$ in rectangular coordinates is ___.", [["a", "$(0, 3)$"], ["b", "$(3, 0)$"], ["c", "$(3, 3)$"], ["d", "$(0, 0)$"]], "b",
                [P("method", "Conversion", "$x = 3\\cos 0 = 3$, $y = 3\\sin 0 = 0$.")],
                [S("$(3,0)$ — on the positive $x$-axis at distance $3$.", 1, "M")], "$(3, 0)$", ["Swapping $r$ and $\\theta$ roles."]),
              mcq("core", 1, "The curve $r = 2$ is ___.", [["a", "a line"], ["b", "a circle of radius $2$"], ["c", "a cardioid"], ["d", "a spiral"]], "b",
                [P("concept", "Polar curves", "Constant $r$ means constant distance from origin.")],
                [S("Every point is distance $2$ from the origin — a circle of radius $2$.", 1, "M")], "Circle radius $2$", ["Thinking $r$ is like $y$ in Cartesian."]),
              num("core", 2, "Convert rectangular point $(0, 4)$ to polar $(r, \\theta)$. Enter $r$.", [{ label: "$r$", answer: 4 }],
                [P("method", "Conversion", "$r = \\sqrt{0^2 + 4^2}$.")],
                [S("$r = 4$ (and $\\theta = \\frac{\\pi}{2}$).", 1, "M"), S("$r = 4$.", 1, "B")], "$4$", ["Forgetting $r$ is always non-negative distance."]),
              op("challenge", 3, "For the circle $r = 2\\cos\\theta$, find $\\frac{dy}{dx}$ at $\\theta = \\frac{\\pi}{4}$.",
                [P("method", "Polar slope", "$r = 2\\cos\\theta$, $r' = -2\\sin\\theta$.")],
                [S("$\\frac{dy}{dx} = \\frac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}$.", 1, "M"), S("At $\\theta = \\frac{\\pi}{4}$: numerator $= -2(\\frac{\\sqrt2}{2})(\\frac{\\sqrt2}{2}) + 2(\\frac{\\sqrt2}{2})(\\frac{\\sqrt2}{2}) = 0$; denominator $= -2(\\frac{\\sqrt2}{2})(\\frac{\\sqrt2}{2}) - 2(\\frac{\\sqrt2}{2})(\\frac{\\sqrt2}{2}) = -2$. So $\\frac{dy}{dx} = \\frac{0}{-2} = 0$ — horizontal tangent at the top of the circle.", 1, "M"), S("Slope $0$ with correct substitution.", 1, "B")], "$0$ (horizontal tangent)", ["Arithmetic slips with $\\frac{\\sqrt2}{2}$ values."]),
            ],
          }),
        lesson("vectors", "Vector-Valued Functions", "I CAN differentiate and integrate vector functions and interpret them as motion.", ["VEC-1"],
          [["Vector function", "$\\vec{r}(t) = \\langle x(t), y(t) \\rangle$ — position as a vector."], ["Velocity vector", "$\\vec{v}(t) = \\vec{r}'(t)$ — derivative of position."], ["Acceleration", "$\\vec{a}(t) = \\vec{v}'(t) = \\vec{r}''(t)$."], ["Speed", "$|\\vec{v}(t)| = \\sqrt{v_x^2 + v_y^2}$ — scalar magnitude."], ["Component-wise calculus", "Derivatives and integrals of vectors act on each component independently."]],
          {
            title: "Vector functions",
            skill: "Differentiate and integrate vector-valued functions componentwise.",
            sections: [
              ["Component-wise operations", "A vector function $\\vec{r}(t) = \\langle x(t), y(t)\\rangle$ differentiates component by component: $\\vec{r}'(t) = \\langle x'(t), y'(t)\\rangle$. Integration adds a constant vector: $\\int \\langle f, g \\rangle dt = \\langle \\int f\\,dt, \\int g\\,dt \\rangle + \\vec{C}$."],
              ["Motion interpretation", "Position $\\vec{r}$, velocity $\\vec{v} = \\vec{r}'$, acceleration $\\vec{a} = \\vec{v}'$. Speed is the magnitude $|\\vec{v}|$, always non-negative. For $\\vec{r}(t) = \\langle t^2, 3t \\rangle$: $\\vec{v} = \\langle 2t, 3 \\rangle$, $\\vec{a} = \\langle 2, 0 \\rangle$ — constant horizontal acceleration."],
            ],
            formulas: [
              ["Velocity", "$\\vec{v}(t) = \\vec{r}'(t) = \\langle x'(t), y'(t) \\rangle$"],
              ["Speed", "$|\\vec{v}| = \\sqrt{(x')^2 + (y')^2}$"],
            ],
            worked: {
              problem: "Given $\\vec{r}(t) = \\langle t^3, t^2 - t \\rangle$, find velocity and acceleration at $t = 1$.",
              solution: "$\\vec{v} = \\langle 3t^2, 2t - 1 \\rangle$, so $\\vec{v}(1) = \\langle 3, 1 \\rangle$. $\\vec{a} = \\langle 6t, 2 \\rangle$, so $\\vec{a}(1) = \\langle 6, 2 \\rangle$.",
            },
            questions: [
              mcq("foundation", 1, "If $\\vec{r}(t) = \\langle t^2, 5t \\rangle$, then $\\vec{v}(t) = $." , [["a", "$\\langle 2t, 5 \\rangle$"], ["b", "$\\langle t, 5 \\rangle$"], ["c", "$\\langle 2t, t \\rangle$"], ["d", "$\\langle t^2, 5t \\rangle$"]], "a",
                [P("method", "Component derivative", "Differentiate each component.")],
                [S("$\\frac{d}{dt}t^2 = 2t$ and $\\frac{d}{dt}5t = 5$.", 1, "M")], "$\\langle 2t, 5 \\rangle$", ["Differentiating only one component."]),
              mcq("core", 1, "For $\\vec{v}(t) = \\langle 3, 4 \\rangle$, the speed is ___.", [["a", "$7$"], ["b", "$5$"], ["c", "$12$"], ["d", "$\\sqrt{7}$"]], "b",
                [P("method", "Speed = magnitude", "$\\sqrt{3^2 + 4^2} = \\sqrt{25}$.")],
                [S("$|\\vec{v}| = 5$ — the classic 3-4-5 triangle.", 1, "M")], "$5$", ["Adding components $3+4$ instead of the Pythagorean magnitude."]),
              num("core", 2, "Given $\\vec{a}(t) = \\langle 0, -9.8 \\rangle$ and $\\vec{v}(0) = \\langle 2, 10 \\rangle$, find $\\vec{v}(2)$. Enter the $y$-component.", [{ label: "$v_y(2)$", answer: -9.6 }],
                [P("method", "Integrate acceleration", "$\\vec{v}(t) = \\vec{v}(0) + \\int_0^t \\vec{a}\\,ds$.")],
                [S("$v_y(t) = 10 - 9.8t$; at $t=2$: $10 - 19.6 = -9.6$ m/s.", 1, "M"), S("$v_y(2) = -9.6$ (object falling back down).", 1, "B")], "$-9.6$ m/s", ["Sign error on gravitational acceleration."]),
              op("challenge", 3, "For $\\vec{r}(t) = \\langle \\cos t, \\sin t \\rangle$, verify that the speed is constant and find its value.",
                [P("method", "Velocity and magnitude", "$\\vec{v} = \\langle -\\sin t, \\cos t \\rangle$.")],
                [S("$\\vec{v}(t) = \\langle -\\sin t, \\cos t \\rangle$ — unit circle traversed counterclockwise.", 1, "M"), S("Speed $= \\sqrt{\\sin^2 t + \\cos^2 t} = \\sqrt{1} = 1$ for all $t$ — constant.", 1, "M"), S("Speed $1$ verified as constant.", 1, "B")], "$1$ (constant)", ["Differentiating $\\cos$/$\\sin$ with wrong signs."]),
            ],
          }),
      ],
    },
    {
      id: "apcbc-u3",
      title: "Advanced Integration and Applications",
      description: "Integration by parts, partial fractions, improper integrals, and arc length.",
      lessons: [
        lesson("integration-techniques", "Integration Techniques", "I CAN integrate using substitution, parts, and partial fractions.", ["INT-2"],
          [["Integration by substitution", "Reverse chain rule: $\\int f(g(x))g'(x)\\,dx = \\int f(u)\\,du$ with $u = g(x)$."], ["Integration by parts", "$\\int u\\,dv = uv - \\int v\\,du$ — the product rule in reverse."], ["LIATE", "Choosing $u$ in parts: Log, Inverse trig, Algebraic, Trig, Exponential (earlier = $u$)."], ["Partial fractions", "Decompose $\\frac{P(x)}{(x-a)(x-b)}$ into simpler fractions to integrate."], ["Trigonometric integrals", "Use identities like $\\sin^2 x = \\frac{1-\\cos 2x}{2}$ to simplify powers."]],
          {
            title: "Advanced integration",
            skill: "Select and apply substitution, parts, and partial fractions.",
            sections: [
              ["Integration by parts", "From the product rule: $\\int u\\,dv = uv - \\int v\\,du$. Choose $u$ by LIATE (Log before Inverse trig before Algebraic before Trig before Exponential). For $\\int x e^x\\,dx$: $u = x$, $dv = e^x dx$, giving $xe^x - e^x + C$."],
              ["Partial fractions", "For rational functions with factorable denominators, split $\\frac{1}{(x-1)(x+2)} = \\frac{A}{x-1} + \\frac{B}{x+2}$ and solve for $A, B$. Each piece integrates to a logarithm. Improper integrals with infinite bounds are evaluated as limits."],
            ],
            formulas: [
              ["By parts", "$\\int u\\,dv = uv - \\int v\\,du$"],
              ["Partial fractions", "$\\frac{1}{(x-a)(x-b)} = \\frac{A}{x-a} + \\frac{B}{x-b}$"],
            ],
            worked: {
              problem: "Evaluate $\\int x \\cos x\\,dx$.",
              solution: "Parts with $u = x$, $dv = \\cos x\\,dx$: $du = dx$, $v = \\sin x$. Result: $x\\sin x - \\int \\sin x\\,dx = x\\sin x + \\cos x + C$.",
            },
            questions: [
              mcq("foundation", 1, "In $\\int x e^x\\,dx$ by parts, the better choice for $u$ is ___.", [["a", "$e^x$"], ["b", "$x$"], ["c", "either works equally"], ["d", "neither — use substitution"]], "b",
                [P("method", "LIATE", "Algebraic ($x$) comes before Exponential ($e^x$) — $u = x$.")],
                [S("LIATE picks $u = x$ since algebraic precedes exponential.", 1, "M")], "$u = x$", ["Choosing $u = e^x$ leads to a circular integral."]),
              mcq("core", 1, "$\\int \\frac{dx}{x^2 - 1}$ equals ___.", [["a", "$\\ln|x-1| - \\ln|x+1| + C$"], ["b", "$\\ln|x^2 - 1| + C$"], ["c", "$-\\frac{1}{x} + C$"], ["d", "$\\arctan x + C$"]], "a",
                [P("method", "Partial fractions", "$\\frac{1}{(x-1)(x+1)} = \\frac{1/2}{x-1} - \\frac{1/2}{x+1}$.")],
                [S("Integrates to $\\frac{1}{2}\\ln|x-1| - \\frac{1}{2}\\ln|x+1| + C$ — equivalent to (a) up to constant.", 1, "M")], "$\\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C$", ["Forgetting partial fractions and trying $u$-substitution directly."]),
              num("core", 2, "Evaluate $\\int_0^1 x e^x\\,dx$. Enter the value.", [{ label: "Integral", answer: 1 }],
                [P("method", "Parts + evaluate", "$\\int x e^x = xe^x - e^x = e^x(x-1)$; evaluate $0$ to $1$.")],
                [S("$F(1) = e(0) = 0$; $F(0) = 1(-1) = -1$; $0 - (-1) = 1$.", 1, "M"), S("Value $1$.", 1, "B")], "$1$", ["Sign error in $F(b) - F(a)$."]),
              op("challenge", 3, "Determine whether $\\int_1^\\infty \\frac{dx}{x^2}$ converges, and if so find its value.",
                [P("concept", "Improper integral", "Evaluate as $\\lim_{b\\to\\infty}\\int_1^b$.")],
                [S("$\\int_1^b x^{-2}\\,dx = [-x^{-1}]_1^b = -\\frac{1}{b} + 1$.", 1, "M"), S("$\\lim_{b\\to\\infty}(1 - \\frac{1}{b}) = 1$ — converges to $1$.", 1, "M"), S("Convergent with value $1$.", 1, "B")], "$1$ (converges)", ["Treating the infinite bound as a regular number."]),
            ],
          }),
        lesson("improper-arc", "Improper Integrals and Arc Length", "I CAN evaluate improper integrals and compute arc length.", ["INT-3"],
          [["Type I improper", "Infinite limit of integration: $\\int_a^\\infty f\\,dx = \\lim_{b\\to\\infty}\\int_a^b f\\,dx$."], ["Type II improper", "Unbounded integrand near a point: $\\int_a^b \\frac{dx}{x}$ type singularities."], ["Convergence", "Improper integral converges if the limit is finite; diverges if infinite or undefined."], ["Arc length", "$L = \\int_a^b \\sqrt{1 + (f'(x))^2}\\,dx$ for $y = f(x)$."], ["Arc length parametric", "$L = \\int_a^b \\sqrt{(dx/dt)^2 + (dy/dt)^2}\\,dt$."]],
          {
            title: "Improper integrals and arc length",
            skill: "Handle infinite/singular integrals and compute curve lengths.",
            sections: [
              ["Improper integrals", "Replace the problematic bound with a variable limit and take the limit. $\\int_1^\\infty \\frac{dx}{x^p}$ converges iff $p > 1$ (same as $p$-series). $\\int_0^1 \\frac{dx}{x^p}$ converges iff $p < 1$ — the inequality flips because the singularity is at the lower end."],
              ["Arc length", "The length of $y = f(x)$ from $a$ to $b$ is $L = \\int_a^b \\sqrt{1 + [f'(x)]^2}\\,dx$ — each tiny segment is the hypotenuse of a right triangle with legs $dx$ and $dy = f'dx$. For parametric curves use $\\sqrt{x'^2 + y'^2}\\,dt$ instead."],
            ],
            formulas: [
              ["Improper (infinite)", "$\\int_a^\\infty f\\,dx = \\lim_{b\\to\\infty} \\int_a^b f\\,dx$"],
              ["Arc length", "$L = \\int_a^b \\sqrt{1 + (f')^2}\\,dx$"],
            ],
            worked: {
              problem: "Find the length of $y = \\frac{2}{3}x^{3/2}$ from $x = 0$ to $x = 3$.",
              solution: "$y' = x^{1/2}$, so $\\sqrt{1 + x}$. $L = \\int_0^3 \\sqrt{1+x}\\,dx = \\left[\\frac{2}{3}(1+x)^{3/2}\\right]_0^3 = \\frac{2}{3}(8 - 1) = \\frac{14}{3}$.",
            },
            questions: [
              mcq("foundation", 1, "$\\int_0^1 \\frac{dx}{\\sqrt{x}}$ is ___.", [["a", "divergent"], ["b", "convergent, value $2$"], ["c", "convergent, value $1$"], ["d", "undefined"]], "b",
                [P("method", "Type II improper", "$\\int_0^1 x^{-1/2}dx = [2x^{1/2}]_0^1 = 2$.")],
                [S("Antiderivative $2\\sqrt{x}$; $2(1) - 2(0) = 2$ — converges to $2$.", 1, "M")], "Converges to $2$", ["Thinking $x^{-1/2}$ diverges like $1/x$ — the exponent $-\\frac12 > -1$ saves it."]),
              mcq("core", 1, "The arc length integrand for $y = f(x)$ is ___.", [["a", "$\\sqrt{1 + (f')^2}$"], ["b", "$\\sqrt{1 + f^2}$"], ["c", "$1 + f'$"], ["d", "$\\sqrt{(f')^2}$"]], "a",
                [P("theorem", "Arc length", "Hypotenuse of $dx$-$dy$ triangle: $\\sqrt{dx^2 + dy^2} = \\sqrt{1 + (dy/dx)^2}\\,dx$.")],
                [S("$L = \\int \\sqrt{1 + (f')^2}\\,dx$.", 1, "M")], "$\\sqrt{1 + (f')^2}$", ["Using $f$ instead of $f'$ inside the radical."]),
              num("core", 2, "Evaluate $\\int_1^\\infty \\frac{dx}{x^3}$. Enter the value.", [{ label: "Integral", answer: 0.5 }],
                [P("method", "Improper integral", "$\\int_1^b x^{-3}dx = \\left[-\\frac{1}{2}x^{-2}\\right]_1^b$.")],
                [S("$= -\\frac{1}{2b^2} + \\frac{1}{2} \\to \\frac{1}{2}$ as $b \\to \\infty$.", 1, "M"), S("Value $0.5$.", 1, "B")], "$0.5$", ["Sign error in the antiderivative of $x^{-3}$."]),
              op("challenge", 3, "Set up and evaluate the arc length of $y = x^2$ from $x = 0$ to $x = 1$.",
                [P("theorem", "Arc length", "$y' = 2x$, so integrand $\\sqrt{1 + 4x^2}$.")],
                [S("$L = \\int_0^1 \\sqrt{1 + 4x^2}\\,dx$.", 1, "M"), S("Using $u = 2x$: $L = \\frac{1}{2}\\int_0^2 \\sqrt{1+u^2}\\,du = \\frac{1}{2}\\left[\\frac{u}{2}\\sqrt{1+u^2} + \\frac{1}{2}\\ln|u + \\sqrt{1+u^2}|\\right]_0^2 \\approx \\frac{1}{2}(\\sqrt{5} + \\frac{1}{2}\\ln(2+\\sqrt{5})) \\approx 1.479$.", 1, "M"), S("Arc length $\\approx 1.479$.", 1, "B")], "$L \\approx 1.479$", ["Forgetting the $\\frac12$ from the $u$-substitution."]),
            ],
          }),
      ],
    },
  ],
};

module.exports = { courses: [apCalcBc] };
