// Grade 12 Math — Precalculus. Spec for scripts/gen-us-elementary.cjs.
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

const mathG12 = {
  id: "us-math-g12",
  exportName: "usMathG12",
  prefix: "m12",
  title: "Grade 12 Math",
  shortTitle: "Math G12",
  grade: "Grade 12",
  framework: "Common Core State Standards for Mathematics + Precalculus",
  description:
    "Analyze function transformations, inverses and composition, work with trigonometric functions and identities, explore sequences and series, and introduce limits and rates of change.",
  us: { subject: "math", grade: 12 },
  units: [
    {
      id: "m12-u1",
      title: "Advanced Function Analysis",
      description: "Transform parent functions, find inverses and compositions, and analyze piecewise and absolute value functions.",
      lessons: [
        lesson("function-transformations", "Transformations of Functions", "I CAN describe how shifts, stretches and reflections transform a parent function's graph.", ["F-BF.3", "F-IF.7"],
          [["Parent function", "A basic function like $f(x) = x^2$, $\\sqrt{x}$, $\\frac{1}{x}$ or $|x|$ used as a template."], ["Vertical shift", "$f(x) + k$ moves the graph $k$ units up ($k>0$) or down ($k<0$)."], ["Horizontal shift", "$f(x - h)$ moves the graph $h$ units right — the shift is opposite the sign inside."], ["Vertical stretch", "$a \\cdot f(x)$ with $|a|>1$ stretches; $|a|<1$ compresses; negative $a$ reflects."], ["Horizontal stretch", "$f(bx)$ with $|b|>1$ compresses horizontally by factor $b$."]],
          {
            title: "Transformations",
            skill: "Read $a \\cdot f(b(x - h)) + k$ and predict the transformed graph.",
            sections: [
              ["The master form", "$g(x) = a \\cdot f(b(x - h)) + k$ encodes everything: $h$ shifts horizontally (right if positive), $k$ shifts vertically (up if positive), $a$ scales vertically and reflects across the $x$-axis if negative, $b$ scales horizontally. The **inside** change acts opposite to intuition: $f(x - h)$ shifts **right** by $h$."],
              ["Order matters", "Apply transformations in a consistent order — typically horizontal shift, horizontal scale, vertical scale, vertical shift — and track key points (vertex, intercepts) rather than the whole curve. For $f(x) = x^2$, the vertex $(0,0)$ of $2(x-3)^2 + 1$ lands at $(3, 1)$."],
            ],
            formulas: [
              ["Master form", "$g(x) = a f(b(x-h)) + k$"],
              ["Inside vs outside", "$f(x-h)$ shifts right; $f(x)+k$ shifts up"],
            ],
            worked: {
              problem: "Describe the transformations from $f(x) = x^2$ to $g(x) = -2(x + 1)^2 + 3$.",
              solution: "Shift left $1$, reflect across $x$-axis, vertical stretch by $2$, shift up $3$. Vertex moves from $(0,0)$ to $(-1, 3)$ and opens downward.",
            },
            questions: [
              mcq("foundation", 1, "The graph of $y = (x - 4)^2$ is the graph of $y = x^2$ shifted ___.", [["a", "left $4$"], ["b", "right $4$"], ["c", "up $4$"], ["d", "down $4$"]], "b",
                [P("rule", "Inside shift", "$f(x - h)$ shifts right by $h$ — opposite the sign.")],
                [S("$h = 4$: shift right $4$ units.", 1, "M")], "**(b)** right $4$", ["Shifting left because the $4$ looks negative — it is $x - 4$."]),
              mcq("core", 2, "For $g(x) = 3f(x - 2) + 1$, the graph of $f$ is ___.", [["a", "stretched by $3$, shifted right $2$, up $1$"], ["b", "compressed by $3$, shifted left $2$, down $1$"], ["c", "stretched by $3$, shifted left $2$, up $1$"], ["d", "reflected, shifted right $2$, up $1$"]], "a",
                [P("method", "Decode master form", "$a=3$ stretch, $h=2$ right, $k=1$ up.")],
                [S("Vertical stretch by $3$, horizontal shift right $2$, vertical shift up $1$.", 1, "M"), S("Correct description.", 1, "B")], "**(a)** stretched $3$, right $2$, up $1$", ["Reversing the horizontal shift direction."]),
              op("core", 2, "The point $(1, 5)$ is on $f(x) = x^2 - x$. Find the corresponding point on $g(x) = f(x - 2) + 3$.",
                [P("method", "Inverse transform", "Input $x = 3$ gives $f(1) = 5$; output $5 + 3 = 8$.")],
                [S("$g(3) = f(3-2) + 3 = f(1) + 3 = 8$; point $(3, 8)$.", 1, "M"), S("Correct point.", 1, "B")], "$(3, 8)$", ["Adding the shift to the input instead of the output."]),
              op("challenge", 3, "Starting from $f(x) = \\sqrt{x}$, write the equation of the graph shifted left $4$, stretched vertically by $2$, and shifted down $1$. Then find the domain of the new function.",
                [P("method", "Build transformation", "$g(x) = 2f(x + 4) - 1 = 2\\sqrt{x+4} - 1$."), P("concept", "Domain", "Radicand must stay non-negative.")],
                [S("$g(x) = 2\\sqrt{x + 4} - 1$.", 1, "M"), S("Domain: $x + 4 \\ge 0 \\Rightarrow x \\ge -4$.", 1, "M"), S("The left shift moves the domain endpoint from $0$ to $-4$.", 1, "B")], "$g(x) = 2\\sqrt{x+4} - 1$; domain $x \\ge -4$", ["Writing $\\sqrt{x} + 4$ inside the radical — the shift is outside the radicand argument but inside the function input."]),
            ],
          }),
        lesson("inverse-composition", "Inverse Functions and Composition", "I CAN find inverses, verify them, and evaluate composite functions.", ["F-BF.3", "F-BF.1"],
          [["Inverse function", "$f^{-1}$ undoes $f$: $f^{-1}(f(x)) = x$; found by swapping $x$ and $y$ and solving for $y$."], ["One-to-one", "A function has an inverse only if each output comes from exactly one input (passes the horizontal line test)."], ["Composition", "$(f \\circ g)(x) = f(g(x))$ — apply $g$ first, then $f$."], ["Domain of composite", "$g(x)$ must land inside the domain of $f$."], ["Graph of inverse", "The inverse's graph is the reflection of $f$'s graph across $y = x$."]],
          {
            title: "Inverses and composition",
            skill: "Find and verify inverses; evaluate $f(g(x))$ in the correct order.",
            sections: [
              ["Finding inverses", "Only **one-to-one** functions have inverses. To find $f^{-1}$: write $y = f(x)$, swap $x \\leftrightarrow y$, solve for $y$. Verify by composing: $f(f^{-1}(x)) = x$. For $f(x) = 2x + 3$: swap to $x = 2y + 3$, solve $y = \\frac{x-3}{2}$."],
              ["Composition", "$(f \\circ g)(x) = f(g(x))$ reads right-to-left: innermost function first. Unlike multiplication, composition is **not** commutative — $f(g(x)) \\ne g(f(x))$ in general. The domain of $f \\circ g$ requires $g(x)$ to be in $f$'s domain."],
            ],
            formulas: [
              ["Inverse", "Swap $x,y$ and solve; verify $f(f^{-1}(x)) = x$"],
              ["Composition", "$(f \\circ g)(x) = f(g(x))$ — rightmost first"],
            ],
            worked: {
              problem: "Find $f^{-1}$ for $f(x) = \\frac{x}{x-2}$ and verify.",
              solution: "$x = \\frac{y}{y-2} \\Rightarrow x(y-2) = y \\Rightarrow xy - 2x = y \\Rightarrow y(x-1) = 2x \\Rightarrow f^{-1}(x) = \\frac{2x}{x-1}$.",
            },
            questions: [
              mcq("foundation", 1, "The inverse of $f(x) = x^3$ is ___.", [["a", "$f^{-1}(x) = \\sqrt[3]{x}$"], ["b", "$f^{-1}(x) = \\frac{1}{x^3}$"], ["c", "$f^{-1}(x) = x^{-3}$"], ["d", "It does not exist"]], "a",
                [P("method", "Undo the operation", "Cube root undoes cubing; $f$ is one-to-one.")],
                [S("$f^{-1}(x) = \\sqrt[3]{x}$.", 1, "M")], "**(a)** $\\sqrt[3]{x}$", ["Reciprocating instead of taking the inverse operation."]),
              mcq("core", 2, "If $f(x) = 2x - 1$ and $g(x) = x^2$, then $(f \\circ g)(3)$ equals ___.", [["a", "$17$"], ["b", "$11$"], ["c", "$35$"], ["d", "$7$"]], "a",
                [P("method", "Rightmost first", "$g(3) = 9$; $f(9) = 17$.")],
                [S("$f(g(3)) = f(9) = 2(9) - 1 = 17$.", 1, "M"), S("Correct value.", 1, "B")], "**(a)** $17$", ["Computing $g(f(3))$ instead — composition order matters."]),
              num("core", 2, "Find $f^{-1}(7)$ for $f(x) = 3x + 4$.", [{ label: "$f^{-1}(7)$", answer: 1 }],
                [P("method", "Solve $f(x) = 7$", "$3x + 4 = 7 \\Rightarrow x = 1$.")],
                [S("$f^{-1}(7) = 1$.", 1, "M"), S("Correct value.", 1, "B")], "$1$", ["Applying $f$ to $7$ instead of solving."]),
              op("challenge", 3, "Let $f(x) = x^2 - 4$ for $x \\ge 0$ and $g(x) = \\sqrt{x}$. Find $(f \\circ g)(x)$, simplify, and state its domain.",
                [P("method", "Compose", "$f(g(x)) = (\\sqrt{x})^2 - 4 = x - 4$."), P("concept", "Domain", "$g(x) = \\sqrt{x}$ needs $x \\ge 0$; $f$'s restricted domain is satisfied since $\\sqrt{x} \\ge 0$.")],
                [S("$(f \\circ g)(x) = (\\sqrt{x})^2 - 4 = x - 4$ for $x \\ge 0$.", 1, "M"), S("Simplification valid because $\\sqrt{x} \\ge 0$ keeps $g(x)$ in $f$'s domain $x \\ge 0$.", 1, "M"), S("Domain of composite: $x \\ge 0$.", 1, "B")], "$x - 4$ for $x \\ge 0$", ["Claiming domain is all reals — the inner square root restricts it."]),
            ],
          }),
        lesson("piecewise-functions", "Piecewise and Absolute Value Functions", "I CAN evaluate and graph piecewise-defined functions and absolute value functions.", ["F-IF.7", "F-BF.3"],
          [["Piecewise function", "A function defined by different rules on different intervals, e.g., $f(x) = \\begin{cases} x+1 & x<0 \\\\ -x & x \\ge 0 \\end{cases}$."], ["Domain interval", "The set of $x$-values where each rule applies."], ["Continuity at the join", "A piecewise function is continuous where the pieces meet if their values agree."], ["Absolute value", "$|x|$ equals $x$ when $x \\ge 0$ and $-x$ when $x < 0$ — a V-shaped piecewise function."], ["Endpoint inclusion", "Closed dot = endpoint included; open dot = excluded."]],
          {
            title: "Piecewise functions",
            skill: "Choose the correct rule for each input and analyze the graph.",
            sections: [
              ["Reading piecewise notation", "Each rule applies only on its stated interval — check which interval the input falls in, including boundary conventions ($<$ vs $\\le$). At the boundary itself, the rule with $\\le$ or $\\ge$ wins; a closed dot on the graph marks an included endpoint."],
              ["Absolute value", "$|x - h|$ is the distance from $x$ to $h$, so its graph is a V with vertex at $(h, 0)$. $|x| + k$ shifts up $k$; $a|x - h| + k$ stretches by $a$. Piecewise thinking — right side slope $+a$, left side slope $-a$ — explains every absolute value graph."],
            ],
            formulas: [
              ["Piecewise", "Apply the rule whose interval contains $x$"],
              ["Absolute value", "$|x - h|$: V-shape, vertex $(h,0)$, slopes $\\pm a$"],
              ["Continuity", "Pieces must agree at shared endpoints"],
            ],
            worked: {
              problem: "Evaluate $f(2)$ and $f(-3)$ for $f(x) = \\begin{cases} x^2 & x < 0 \\\\ 2x + 1 & x \\ge 0 \\end{cases}$.",
              solution: "$f(2) = 2(2) + 1 = 5$ (second rule, since $2 \\ge 0$). $f(-3) = (-3)^2 = 9$ (first rule, since $-3 < 0$).",
            },
            questions: [
              mcq("foundation", 1, "For $f(x) = \\begin{cases} 5 & x < 0 \\\\ x + 2 & x \\ge 0 \\end{cases}$, $f(0)$ equals ___.", [["a", "$5$"], ["b", "$2$"], ["c", "$0$"], ["d", "undefined"]], "b",
                [P("rule", "Boundary", "$x = 0$ satisfies $x \\ge 0$, so use $x + 2$.")],
                [S("$f(0) = 0 + 2 = 2$.", 1, "M")], "**(b)** $2$", ["Using the first rule — check the inequality at the boundary."]),
              mcq("core", 2, "What is the vertex of $g(x) = |x + 3| - 2$?", [["a", "$(-3, -2)$"], ["b", "$(3, -2)$"], ["c", "$(-3, 2)$"], ["d", "$(3, 2)$"]], "a",
                [P("formula", "Absolute value", "$|x - h| + k$ has vertex $(h, k)$; here $h = -3$, $k = -2$.")],
                [S("Vertex $(-3, -2)$.", 1, "M"), S("Correct vertex.", 1, "B")], "**(a)** $(-3, -2)$", ["Sign error on $h$."]),
              num("core", 2, "Evaluate $f(4)$ for $f(x) = \\begin{cases} x - 1 & x \\le 3 \\\\ x^2 - 10 & x > 3 \\end{cases}$.", [{ label: "$f(4)$", answer: 6 }],
                [P("method", "Select rule", "$4 > 3$, so use $x^2 - 10$.")],
                [S("$f(4) = 16 - 10 = 6$.", 1, "M"), S("Correct value.", 1, "B")], "$6$", ["Using the wrong interval's rule."]),
              op("challenge", 3, "Graph $f(x) = |x - 1| + 2$ by describing its vertex, slopes on each side, and $y$-intercept. Then find all $x$ where $f(x) = 5$.",
                [P("concept", "Absolute value graph", "Vertex at $(1, 2)$; slopes $-1$ left, $+1$ right."), P("method", "Solve", "$|x-1| + 2 = 5 \\Rightarrow |x-1| = 3$.")],
                [S("Vertex $(1, 2)$; slope $-1$ for $x < 1$, $+1$ for $x > 1$; $y$-intercept $f(0) = 3$.", 1, "M"), S("$|x - 1| = 3$ gives $x - 1 = \\pm 3$, so $x = 4$ or $x = -2$.", 1, "M"), S("Both solutions verified: $f(4) = f(-2) = 5$.", 1, "B")], "Vertex $(1,2)$; $y$-int $3$; $x = -2$ or $4$", ["Solving $|x-1| = 5$ instead of $|x-1| = 3$."]),
            ],
          }),
        ],
    },
    {
      id: "m12-u2",
      title: "Trigonometric Functions",
      description: "Use the unit circle, graph sine and cosine transformations, and apply trigonometric identities and equations.",
      lessons: [
        lesson("unit-circle", "The Unit Circle", "I CAN evaluate sine, cosine and tangent for standard and related angles.", ["F-TF.1", "F-TF.2"],
          [["Unit circle", "Circle of radius $1$ centered at origin; angle $\\theta$ measured counterclockwise from positive $x$-axis."], ["Coordinates", "Point on circle: $(\\cos\\theta, \\sin\\theta)$ — $x$ is cosine, $y$ is sine."], ["Reference angle", "The acute angle to the nearest $x$-axis; determines the magnitude of trig values."], ["Quadrant signs", "ASTC: All, Sine, Tangent, Cosine positive in quadrants I, II, III, IV respectively."], ["Special angles", "$0, 30, 45, 60, 90$ degrees and their radian equivalents $0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$."]],
          {
            title: "Unit circle values",
            skill: "Find trig values for any standard angle using reference angles and quadrant signs.",
            sections: [
              ["Coordinates as trig", "For angle $\\theta$ on the unit circle, the point is $(\\cos\\theta, \\sin\\theta)$. At $\\theta = 0$: $(1, 0)$, so $\\cos 0 = 1$, $\\sin 0 = 0$, $\\tan 0 = 0$. At $\\frac{\\pi}{2}$: $(0,1)$."],
              ["Reference angles and signs", "For angles beyond Quadrant I, find the **reference angle** (acute, to the $x$-axis) to get the magnitude from the standard table, then apply the quadrant sign. ASTC remembers which ratios stay positive: Quadrant II → sine positive, Quadrant III → tangent, Quadrant IV → cosine. So $\\sin \\frac{5\\pi}{6} = \\sin \\frac{\\pi}{6} = \\frac{1}{2}$ (QII, sine positive)."],
            ],
            formulas: [
              ["Point", "$(\\cos\\theta, \\sin\\theta)$ on unit circle"],
              ["ASTC", "Q1: all; Q2: sin; Q3: tan; Q4: cos"],
              ["Reference angle", "Acute angle to nearest axis gives magnitude"],
            ],
            worked: {
              problem: "Find $\\cos\\frac{2\\pi}{3}$.",
              solution: "Reference angle $= \\pi - \\frac{2\\pi}{3} = \\frac{\\pi}{3}$. In QII, cosine is negative: $\\cos\\frac{2\\pi}{3} = -\\cos\\frac{\\pi}{3} = -\\frac{1}{2}$.",
            },
            questions: [
              mcq("foundation", 1, "$\\sin 0$ equals ___.", [["a", "$0$"], ["b", "$1$"], ["c", "$\\frac{1}{2}$"], ["d", "undefined"]], "a",
                [P("unit circle", "At $\\theta = 0$ the point is $(1, 0)$, so $\\sin = y = 0$.")],
                [S("$\\sin 0 = 0$.", 1, "M")], "**(a)** $0$", ["Confusing $\\sin 0$ with $\\sin \\frac{\\pi}{2} = 1$."]),
              mcq("core", 2, "$\\cos\\frac{\\pi}{4}$ equals ___.", [["a", "$\\frac{\\sqrt{2}}{2}$"], ["b", "$\\frac{1}{2}$"], ["c", "$\\frac{\\sqrt{3}}{2}$"], ["d", "$1$"]], "a",
                [P("special angle", "45° reference: legs equal, hypotenuse $\\sqrt{2}$ → $\\frac{\\sqrt{2}}{2}$.")],
                [S("$\\cos 45^\\circ = \\frac{\\sqrt{2}}{2} \\approx 0.707$.", 1, "M"), S("Correct value.", 1, "B")], "**(a)** $\\frac{\\sqrt{2}}{2}$", ["Mixing up $\\frac{\\pi}{4}$ and $\\frac{\\pi}{3}$ values."]),
              num("core", 2, "Find $\\sin\\frac{5\\pi}{6}$. Enter the exact value.", [{ label: "Value", answer: 0.5 }],
                [P("method", "Reference + sign", "Ref angle $\\frac{\\pi}{6}$; QII sine positive: $\\frac{1}{2}$.")],
                [S("$\\sin\\frac{5\\pi}{6} = \\frac{1}{2}$.", 1, "M"), S("Correct value.", 1, "B")], "$\\frac{1}{2}$", ["Applying QI sign or wrong reference angle."]),
              op("challenge", 3, "Find $\\tan\\frac{4\\pi}{3}$ exactly, showing reference angle and quadrant reasoning.",
                [P("method", "Reference angle", "$\\frac{4\\pi}{3}$ is in QIII; reference angle $= \\frac{4\\pi}{3} - \\pi = \\frac{\\pi}{3}$."), P("rule", "ASTC", "QIII: tangent positive.")],
                [S("Reference angle $\\frac{\\pi}{3}$ gives $\\tan = \\sqrt{3}$.", 1, "M"), S("QIII tangent is positive, so $\\tan\\frac{4\\pi}{3} = +\\sqrt{3}$.", 1, "M"), S("Exact value $\\sqrt{3}$.", 1, "B")], "$\\tan\\frac{4\\pi}{3} = \\sqrt{3}$", ["Making tangent negative — in QIII both sine and cosine are negative, so their ratio is positive."]),
            ],
          }),
        lesson("trig-graphs", "Graphs of Sine and Cosine", "I CAN graph $y = a\\sin(b(x - h)) + k$ and identify amplitude, period, phase shift and midline.", ["F-TF.3", "F-TF.7", "F-TF.8"],
          [["Amplitude", "$|a|$ — half the distance from peak to trough; vertical stretch."], ["Period", "$\\frac{2\\pi}{|b|}$ for sine/cosine — horizontal compression/stretch."], ["Phase shift", "$h$ — horizontal shift; $\\sin(b(x-h))$ shifts right by $h$ when $b=1$."], ["Midline", "$y = k$ — the horizontal centerline of the wave."], ["Five key points", "One period of sine uses $x = 0, \\frac{\\pi}{2}, \\pi, \\frac{3\\pi}{2}, 2\\pi$ mapped through the transformations."]],
          {
            title: "Transforming trig graphs",
            skill: "Decode $y = a\\sin(b(x-h)) + k$ into graph features.",
            sections: [
              ["Parameters", "In $y = a\\sin(b(x - h)) + k$: **amplitude** $|a|$, **period** $\\frac{2\\pi}{|b|}$, **phase shift** $h$ (right if positive), **midline** $y = k$, and **vertical shift** $k$. Negative $a$ reflects across the midline. For cosine the same rules apply — only the starting point differs."],
              ["Graphing strategy", "Find the period $T = \\frac{2\\pi}{b}$, divide into four equal parts for key points, apply amplitude around the midline, and shift horizontally by $h$. For $y = 2\\sin(3x) + 1$: amplitude $2$, period $\\frac{2\\pi}{3}$, midline $y = 1$, no shift."],
            ],
            formulas: [
              ["Amplitude", "$|a|$"],
              ["Period", "$T = \\frac{2\\pi}{|b|}$ for sine/cosine"],
              ["Features", "Midline $y = k$; phase shift $h$"],
            ],
            worked: {
              problem: "State amplitude, period and midline of $y = -3\\cos(2x) + 4$.",
              solution: "Amplitude $3$, period $\\frac{2\\pi}{2} = \\pi$, midline $y = 4$; negative sign reflects the cosine across the midline.",
            },
            questions: [
              mcq("foundation", 1, "The amplitude of $y = 5\\sin(x)$ is ___.", [["a", "$5$"], ["b", "$10$"], ["c", "$2\\pi$"], ["d", "$1$"]], "a",
                [P("definition", "Amplitude", "Amplitude = $|a|$, half peak-to-trough.")],
                [S("$a = 5$: amplitude $5$.", 1, "M")], "**(a)** $5$", ["Reporting the full peak-to-trough distance $10$."]),
              mcq("core", 2, "What is the period of $y = \\sin(4x)$?", [["a", "$8\\pi$"], ["b", "$\\frac{\\pi}{2}$"], ["c", "$4\\pi$"], ["d", "$\\frac{\\pi}{4}$"]], "b",
                [P("formula", "Period", "$T = \\frac{2\\pi}{|b|} = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$.")],
                [S("Period $= \\frac{\\pi}{2}$ — the graph oscillates faster.", 1, "M"), S("Correct period.", 1, "B")], "**(b)** $\\frac{\\pi}{2}$", ["Multiplying by $b$ instead of dividing $2\\pi$ by it."]),
              op("core", 2, "For $y = 2\\sin(x - \\frac{\\pi}{3})$, state the phase shift and its direction.",
                [P("definition", "Phase shift", "$h = \\frac{\\pi}{3}$ to the right.")],
                [S("Shift right by $\\frac{\\pi}{3}$.", 1, "M"), S("Correct shift.", 1, "B")], "Right $\\frac{\\pi}{3}$", ["Reporting $-\\frac{\\pi}{3}$ — inside form shifts right for positive $h$."]),
              op("challenge", 3, "Describe the graph of $y = -2\\sin(\\frac{1}{2}(x - \\pi)) + 3$: amplitude, period, midline, reflection, and phase shift.",
                [P("method", "Decode parameters", "$a=-2$, $b=\\frac{1}{2}$, $h=\\pi$, $k=3$."), P("concept", "All features", "Combine amplitude, period, reflection, midline, shift.")],
                [S("Amplitude $2$; period $\\frac{2\\pi}{1/2} = 4\\pi$.", 1, "M"), S("Midline $y = 3$; negative amplitude reflects across midline (starts at minimum).", 1, "M"), S("Phase shift right $\\pi$.", 1, "B")], "Amp $2$, period $4\\pi$, midline $y=3$, reflected, shift $\\pi$ right", ["Missing the reflection from the negative amplitude."]),
            ],
          }),
        lesson("trig-identities-equations", "Trig Identities and Equations", "I CAN apply the Pythagorean and sum identities and solve basic trig equations.", ["F-TF.8", "F-TF.9"],
          [["Pythagorean identity", "$\\sin^2\\theta + \\cos^2\\theta = 1$; also $1 + \\tan^2\\theta = \\sec^2\\theta$."], ["Even/odd", "$\\cos(-\\theta) = \\cos\\theta$ (even); $\\sin(-\\theta) = -\\sin\\theta$ and $\\tan(-\\theta) = -\\tan\\theta$ (odd)."], ["Sum identity", "$\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B$."], ["Solving equations", "Isolate the trig function, then use unit-circle values or inverse trig on $[0, 2\\pi)$."], ["Periodicity", "Solutions repeat every $2\\pi$ (or $\\pi$ for tangent)."]],
          {
            title: "Identities and equations",
            skill: "Use identities to rewrite expressions and find all solutions in a given interval.",
            sections: [
              ["Core identities", "$\\sin^2\\theta + \\cos^2\\theta = 1$ comes straight from the unit circle ($x^2 + y^2 = 1$). Dividing by $\\cos^2$ gives $\\tan^2 + 1 = \\sec^2$. Even/odd rules simplify negative angles: $\\sin(-\\theta) = -\\sin\\theta$."],
              ["Solving trig equations", "Isolate the function first: $2\\sin x = 1 \\Rightarrow \\sin x = \\frac{1}{2}$, then find all angles in the interval with that value — sine is $\\frac{1}{2}$ at $\\frac{\\pi}{6}$ and $\\frac{5\\pi}{6}$ in $[0, 2\\pi)$. Always check whether the interval demands all branches or just the principal value."],
            ],
            formulas: [
              ["Pythagorean", "$\\sin^2\\theta + \\cos^2\\theta = 1$"],
              ["Sum", "$\\sin(A+B) = \\sin A\\cos B + \\cos A\\sin B$"],
              ["Solve", "Isolate function, list all solutions in interval"],
            ],
            worked: {
              problem: "Solve $2\\sin x = 1$ for $x \\in [0, 2\\pi)$.",
              solution: "$\\sin x = \\frac{1}{2}$. Sine equals $\\frac{1}{2}$ at $x = \\frac{\\pi}{6}$ and $x = \\frac{5\\pi}{6}$.",
            },
            questions: [
              mcq("foundation", 1, "Which is equivalent to $\\sin^2\\theta + \\cos^2\\theta$?", [["a", "$0$"], ["b", "$1$"], ["c", "$2$"], ["d", "$\\sin 2\\theta$"]], "b",
                [P("identity", "Pythagorean", "The fundamental identity equals $1$.")],
                [S("$\\sin^2 + \\cos^2 = 1$ for all $\\theta$.", 1, "M")], "**(b)** $1$", ["Confusing with $\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$."]),
              mcq("core", 2, "$\\cos(-\\frac{\\pi}{3})$ equals ___.", [["a", "$\\frac{1}{2}$"], ["b", "$-\\frac{1}{2}$"], ["c", "$\\frac{\\sqrt{3}}{2}$"], ["d", "$-\\frac{\\sqrt{3}}{2}$"]], "a",
                [P("rule", "Cosine is even", "$\\cos(-\\theta) = \\cos\\theta$.")],
                [S("$\\cos(-\\frac{\\pi}{3}) = \\cos\\frac{\\pi}{3} = \\frac{1}{2}$.", 1, "M"), S("Correct value.", 1, "B")], "**(a)** $\\frac{1}{2}$", ["Applying odd-function rule to cosine."]),
              num("core", 2, "Solve $\\cos x = -\\frac{1}{2}$ for $x \\in [0, 2\\pi)$. Enter the number of solutions.", [{ label: "Count", answer: 2 }],
                [P("method", "Unit circle", "$\\cos x = -\\frac{1}{2}$ at $\\frac{2\\pi}{3}$ and $\\frac{4\\pi}{3}$ — two solutions.")],
                [S("Two solutions in $[0, 2\\pi)$.", 1, "M"), S("Correct count.", 1, "B")], "$2$ solutions", ["Reporting only the QII solution."]),
              op("challenge", 3, "Verify the identity $\\sin(A + B) = \\sin A \\cos B + \\cos A \\sin B$ for $A = \\frac{\\pi}{6}$, $B = \\frac{\\pi}{3}$ by computing both sides.",
                [P("method", "Left side", "$\\sin(\\frac{\\pi}{6} + \\frac{\\pi}{3}) = \\sin\\frac{\\pi}{2} = 1$."), P("method", "Right side", "$\\sin\\frac{\\pi}{6}\\cos\\frac{\\pi}{3} + \\cos\\frac{\\pi}{6}\\sin\\frac{\\pi}{3} = \\frac{1}{2}\\cdot\\frac{1}{2} + \\frac{\\sqrt{3}}{2}\\cdot\\frac{\\sqrt{3}}{2}$.")],
                [S("Left side: $\\sin\\frac{\\pi}{2} = 1$.", 1, "M"), S("Right side: $\\frac{1}{4} + \\frac{3}{4} = 1$.", 1, "M"), S("Both sides equal $1$ — identity verified for these values.", 1, "B")], "Both sides $= 1$; identity confirmed", ["Adding the angles incorrectly: $\\frac{\\pi}{6} + \\frac{\\pi}{3} = \\frac{\\pi}{2}$, not $\\frac{\\pi}{9}$."]),
            ],
          }),
        ],
    },
    {
      id: "m12-u3",
      title: "Sequences, Series and Limits",
      description: "Work with arithmetic and geometric sequences and series, infinite series, and introductory limits and rates of change.",
      lessons: [
        lesson("sequences-series", "Sequences and Series", "I CAN find terms and sums of arithmetic and geometric sequences.", ["F-BF.2", "A-SSE.4"],
          [["Sequence", "An ordered list of numbers $a_1, a_2, a_3, \\ldots$ generated by a rule."], ["Arithmetic sequence", "Constant difference $d$ between terms: $a_n = a_1 + (n-1)d$."], ["Geometric sequence", "Constant ratio $r$ between terms: $a_n = a_1 r^{n-1}$."], ["Series", "The sum of sequence terms: $S_n = a_1 + a_2 + \\cdots + a_n$."], ["Sum formulas", "Arithmetic: $S_n = \\frac{n}{2}(a_1 + a_n)$. Geometric: $S_n = \\frac{a_1(1 - r^n)}{1 - r}$."]],
          {
            title: "Sequences and series",
            skill: "Identify the type, find the $n$th term, and compute partial sums.",
            sections: [
              ["Arithmetic", "Constant **difference** $d$: each term adds $d$. The $n$th term is $a_n = a_1 + (n-1)d$ and the sum is $S_n = \\frac{n}{2}(a_1 + a_n)$ — average of first and last times count. For $3, 7, 11, \\ldots$: $d = 4$, $a_n = 4n - 1$."],
              ["Geometric", "Constant **ratio** $r$: each term multiplies by $r$. $a_n = a_1 r^{n-1}$, sum $S_n = \\frac{a_1(1-r^n)}{1-r}$. For $2, 6, 18, \\ldots$: $r = 3$, $a_n = 2 \\cdot 3^{n-1}$. Identify the type first: subtract consecutive terms to test arithmetic, divide to test geometric."],
            ],
            formulas: [
              ["Arithmetic", "$a_n = a_1 + (n-1)d$; $S_n = \\frac{n}{2}(a_1+a_n)$"],
              ["Geometric", "$a_n = a_1 r^{n-1}$; $S_n = \\frac{a_1(1-r^n)}{1-r}$"],
            ],
            worked: {
              problem: "Find the 10th term and sum of the first 10 terms of $5, 9, 13, \\ldots$.",
              solution: "Arithmetic, $d = 4$. $a_{10} = 5 + 9(4) = 41$. $S_{10} = \\frac{10}{2}(5 + 41) = 5 \\times 46 = 230$.",
            },
            questions: [
              mcq("foundation", 1, "The sequence $4, 9, 14, 19, \\ldots$ is ___.", [["a", "geometric with $r = 5$"], ["b", "arithmetic with $d = 5$"], ["c", "arithmetic with $d = 4$"], ["d", "geometric with $r = \\frac{9}{4}$"]], "b",
                [P("method", "Test differences", "Common difference $9 - 4 = 5$.")],
                [S("Arithmetic with $d = 5$.", 1, "M")], "**(b)** arithmetic, $d = 5$", ["Using the first term as the difference."]),
              mcq("core", 2, "What is the 6th term of the geometric sequence $3, 6, 12, \\ldots$?", [["a", "$48$"], ["b", "$96$"], ["c", "$24$"], ["d", "$36$"]], "b",
                [P("formula", "Geometric term", "$a_n = 3 \\cdot 2^{n-1}$; $a_6 = 3 \\cdot 32 = 96$.")],
                [S("$r = 2$; $a_6 = 3 \\times 2^5 = 96$.", 1, "M"), S("Correct term.", 1, "B")], "**(b)** $96$", ["Using $2^6$ instead of $2^{6-1}$."]),
              num("core", 2, "Find the sum of the first $5$ terms of $2, 5, 8, 11, 14$.", [{ label: "$S_5$", answer: 40 }],
                [P("formula", "Arithmetic sum", "$S_5 = \\frac{5}{2}(2 + 14) = \\frac{5}{2} \\times 16 = 40$.")],
                [S("$S_5 = 40$.", 1, "M"), S("Correct sum.", 1, "B")], "$40$", ["Adding only four terms or miscounting $n$."]),
              op("challenge", 3, "A ball rolls $10$ m in the first second, $8$ m in the second, $6.4$ m in the third, and so on. Find the total distance traveled after infinitely many seconds.",
                [P("model", "Infinite geometric", "$a_1 = 10$, $r = 0.8$; sum $= \\frac{a_1}{1-r}$ when $|r|<1$."), P("method", "Convergence", "$|0.8| < 1$ so the series converges.")],
                [S("Each term is $0.8$ times the previous: $r = 0.8$.", 1, "M"), S("Total $= \\frac{10}{1 - 0.8} = \\frac{10}{0.2} = 50$ m.", 1, "M"), S("The ball travels a finite total distance of $50$ m.", 1, "B")], "$50$ m", ["Summing a fixed number of terms instead of the infinite series."]),
            ],
          }),
        lesson("infinite-series", "Infinite Geometric Series", "I CAN determine convergence and sum infinite geometric series.", ["F-BF.2", "F-LE.2"],
          [["Infinite series", "The sum of infinitely many terms $a_1 + a_2 + a_3 + \\cdots$."], ["Convergent", "The partial sums approach a finite limit."], ["Divergent", "The partial sums grow without bound or fail to settle."], ["Convergence condition", "Infinite geometric series converges iff $|r| < 1$."], ["Sum formula", "$S_\\infty = \\frac{a_1}{1 - r}$ for $|r| < 1$."]],
          {
            title: "Infinite sums",
            skill: "Test convergence and compute $S_\\infty$ for geometric series.",
            sections: [
              ["When does it converge?", "An infinite geometric series $\\sum a_1 r^{n-1}$ converges **only** when $|r| < 1$ — the terms must shrink toward zero. If $|r| \\ge 1$, terms don't vanish and the sum diverges (or is undefined). This is why $0.999\\ldots = 1$: it is $\\frac{9}{10} + \\frac{9}{100} + \\cdots$ with $r = 0.1$, summing to $\\frac{0.9}{0.9} = 1$."],
              ["Computing the sum", "For convergent series, $S_\\infty = \\frac{a_1}{1 - r}$. Always verify $|r| < 1$ first. For $3 + 1 + \\frac{1}{3} + \\cdots$: $r = \\frac{1}{3}$, so $S = \\frac{3}{1 - 1/3} = \\frac{3}{2/3} = 4.5$."],
            ],
            formulas: [
              ["Converges", "$|r| < 1$"],
              ["Infinite sum", "$S_\\infty = \\frac{a_1}{1 - r}$"],
            ],
            worked: {
              problem: "Does $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\cdots$ converge? Find its sum.",
              solution: "$r = \\frac{1}{2}$, $|r| < 1$ — converges. $S_\\infty = \\frac{1}{1 - 1/2} = 2$.",
            },
            questions: [
              mcq("foundation", 1, "An infinite geometric series converges when ___.", [["a", "$r > 1$"], ["b", "$|r| < 1$"], ["c", "$r = 1$"], ["d", "always"]], "b",
                [P("theorem", "Convergence", "Terms must shrink: $|r| < 1$.")],
                [S("Converges iff $|r| < 1$.", 1, "M")], "**(b)** $|r| < 1$", ["Thinking any geometric series has a finite sum."]),
              mcq("core", 2, "Find the sum of $4 + 2 + 1 + \\frac{1}{2} + \\cdots$.", [["a", "$8$"], ["b", "$6$"], ["c", "$4$"], ["d", "diverges"]], "a",
                [P("formula", "Infinite sum", "$r = \\frac{1}{2}$; $S = \\frac{4}{1/2} = 8$.")],
                [S("$S_\\infty = \\frac{4}{0.5} = 8$.", 1, "M"), S("Correct sum.", 1, "B")], "**(a)** $8$", ["Using $a_1 \\cdot r$ as first term."]),
              num("core", 2, "Does the series $1 + \\frac{3}{2} + \\frac{9}{4} + \\cdots$ converge? Enter $1$ for yes, $0$ for no.", [{ label: "Converges?", answer: 0 }],
                [P("test", "Ratio", "$r = \\frac{3}{2}$; $|r| > 1$ — diverges.")],
                [S("$r = 1.5 > 1$: terms grow, series diverges.", 1, "M"), S("Correct answer.", 1, "B")], "No — diverges", ["Applying the sum formula without checking $|r|$."]),
              op("challenge", 3, "A ball dropped from $81$ cm rebounds to $\\frac{2}{3}$ of its previous height each bounce. Find the total distance traveled (up and down) until it stops.",
                [P("model", "Two series", "Fall $81$ once; each subsequent up+down pair is $2 \\cdot 81(\\frac{2}{3})^n$."), P("method", "Sum", "Total $= 81 + 2 \\cdot \\frac{81 \\cdot \\frac{2}{3}}{1 - \\frac{2}{3}}$.")],
                [S("First fall: $81$ cm. Bounce heights form geometric series with $a = 54$, $r = \\frac{2}{3}$; each bounce contributes up $+$ down $= 2 \\times$ height.", 1, "M"), S("Total bounce travel $= 2 \\times \\frac{54}{1 - 2/3} = 2 \\times 162 = 324$ cm.", 1, "M"), S("Grand total $= 81 + 324 = 405$ cm.", 1, "B")], "$405$ cm", ["Counting only upward travel or forgetting the initial drop."]),
            ],
          }),
        lesson("limits-rates", "Introduction to Limits and Rates of Change", "I CAN estimate limits and compute average rates of change leading to instantaneous rates.", ["F-IF.3", "F-LE.3", "Calculus preview"],
          [["Limit", "The value a function approaches as $x$ gets close to a point — may differ from the function's value there."], ["One-sided limit", "$\\lim_{x \\to a^-} f(x)$ approaches from the left; $\\lim_{x \\to a^+}$ from the right."], ["Limit exists", "Both one-sided limits exist and are equal."], ["Average rate of change", "$\\frac{f(b) - f(a)}{b - a}$ — slope of the secant line."], ["Instantaneous rate", "The limit of average rates as the interval shrinks to zero — the derivative."]],
          {
            title: "Limits and rates of change",
            skill: "Estimate limits from tables/graphs and connect secant slopes to tangent slopes.",
            sections: [
              ["Limits", "$\\lim_{x \\to a} f(x) = L$ means $f(x)$ gets arbitrarily close to $L$ as $x$ approaches $a$ — regardless of $f(a)$ itself. If left and right limits disagree, the limit **does not exist**. For $f(x) = \\frac{x^2 - 1}{x - 1}$, the limit as $x \\to 1$ is $2$ even though $f(1)$ is undefined (removable discontinuity)."],
              ["Rates of change", "The **average rate of change** of $f$ on $[a, b]$ is $\\frac{f(b) - f(a)}{b - a}$ — the slope of the secant line. The **instantaneous rate** at $a$ is the limit of these averages as $b \\to a$: $f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}$. For $f(x) = x^2$, this limit gives $f'(a) = 2a$ — the tangent slope."],
            ],
            formulas: [
              ["Limit", "$\\lim_{x \\to a} f(x) = L$ — value approached, not necessarily $f(a)$"],
              ["Average rate", "$\\frac{f(b)-f(a)}{b-a}$"],
              ["Derivative", "$f'(a) = \\lim_{h \\to 0} \\frac{f(a+h)-f(a)}{h}$"],
            ],
            worked: {
              problem: "Find the average rate of change of $f(x) = x^2$ on $[1, 3]$.",
              solution: "$\\frac{f(3) - f(1)}{3 - 1} = \\frac{9 - 1}{2} = 4$. The instantaneous rate at $x = 2$ is also $4$ — the secant from $1$ to $3$ happens to match the tangent at the midpoint.",
            },
            questions: [
              mcq("foundation", 1, "The average rate of change of $f(x) = 2x + 1$ on $[0, 4]$ is ___.", [["a", "$2$"], ["b", "$9$"], ["c", "$8$"], ["d", "$4$"]], "a",
                [P("formula", "Average rate", "$\\frac{f(4)-f(0)}{4} = \\frac{9-1}{4} = 2$.")],
                [S("Rate $= 2$ — the slope of the linear function.", 1, "M")], "**(a)** $2$", ["Reporting $f(4) = 9$ instead of the rate."]),
              mcq("core", 2, "$\\lim_{x \\to 2} (3x - 1)$ equals ___.", [["a", "$5$"], ["b", "$6$"], ["c", "undefined"], ["d", "$0$"]], "a",
                [P("method", "Direct substitution", "Continuous function: substitute $x = 2$: $3(2) - 1 = 5$.")],
                [S("Limit $= 5$.", 1, "M"), S("Correct value.", 1, "B")], "**(a)** $5$", ["Thinking limits always require special techniques."]),
              num("core", 2, "For $f(x) = x^2$, the instantaneous rate of change at $x = 3$ is $2(3)$. What is it?", [{ label: "Rate", answer: 6 }],
                [P("formula", "Derivative of $x^2$", "$f'(x) = 2x$; at $x=3$: $6$.")],
                [S("$f'(3) = 6$.", 1, "M"), S("Correct value.", 1, "B")], "$6$", ["Using $x^2$ instead of $2x$."]),
              op("challenge", 3, "Estimate $\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1}$ using a table of values $x = 0.9, 0.99, 1.01, 1.1$ (compute $f(x)$ for each), then explain the result algebraically.",
                [P("method", "Table approach", "Compute $f$ near $x = 1$ (avoiding $x = 1$ itself)."), P("method", "Algebraic", "Factor: $\\frac{(x-1)(x+1)}{x-1} = x + 1$ for $x \\ne 1$.")],
                [S("Values: $f(0.9) = 1.9$, $f(0.99) = 1.99$, $f(1.01) = 2.01$, $f(1.1) = 2.1$ — approaching $2$.", 1, "M"), S("Algebra: for $x \\ne 1$, $f(x) = x + 1$, so the limit is $1 + 1 = 2$.", 1, "M"), S("Limit $= 2$ even though $f(1)$ is undefined — removable discontinuity.", 1, "B")], "$2$", ["Plugging in $x = 1$ and reporting undefined instead of the limit."]),
            ],
          }),
        ],
    },
  ],
};

module.exports = { courses: [mathG12] };
