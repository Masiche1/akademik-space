// Grade 11 Math — Algebra II (Common Core). Spec for scripts/gen-us-elementary.cjs.
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

const mathG11 = {
  id: "us-math-g11",
  exportName: "usMathG11",
  prefix: "m11",
  title: "Grade 11 Math",
  shortTitle: "Math G11",
  grade: "Grade 11",
  framework: "Common Core State Standards for Mathematics",
  description:
    "Operate on and factor polynomials, analyze quadratic functions, and work with exponential, logarithmic and rational functions.",
  us: { subject: "math", grade: 11 },
  units: [
    {
      id: "m11-u1",
      title: "Polynomial Operations",
      description: "Add, subtract, multiply and factor polynomials, and apply the remainder and factor theorems.",
      lessons: [
        lesson("polynomial-operations", "Adding, Subtracting and Multiplying Polynomials", "I CAN perform arithmetic on polynomials and multiply binomials and trinomials.", ["A-APR.1", "A-SSE.3"],
          [["Polynomial", "An expression of terms $ax^n$ with whole-number exponents, such as $3x^2 - 5x + 7$."], ["Degree", "The highest exponent in the polynomial."], ["Leading coefficient", "The coefficient of the highest-degree term."], ["Like terms", "Terms with the same variable and exponent; they combine by adding coefficients."], ["FOIL", "First, Outer, Inner, Last — the order for multiplying two binomials."]],
          {
            title: "Polynomial arithmetic",
            skill: "Combine like terms and expand products using distribution.",
            sections: [
              ["Add and subtract", "Only **like terms** combine — same variable, same exponent. $(3x^2 - 5x + 7) + (2x^2 + x - 4) = 5x^2 - 4x + 3$. Subtraction requires distributing the negative sign to **every** term of the second polynomial first."],
              ["Multiply", "Use the distributive property: each term of the first polynomial multiplies each term of the second. For binomials, FOIL orders the work: $(x+3)(x+5) = x^2 + 5x + 3x + 15 = x^2 + 8x + 15$. Exponents add when multiplying like bases: $x^a \\cdot x^b = x^{a+b}$."],
            ],
            formulas: [
              ["Combine", "Add/subtract coefficients of like terms only"],
              ["Multiply", "Distribute each term; exponents add"],
            ],
            worked: {
              problem: "Multiply $(2x - 3)(x + 4)$.",
              solution: "FOIL: $2x \\cdot x = 2x^2$; $2x \\cdot 4 = 8x$; $-3 \\cdot x = -3x$; $-3 \\cdot 4 = -12$. Sum: $2x^2 + 5x - 12$.",
            },
            questions: [
              mcq("foundation", 1, "Simplify $(4x^2 + 3x - 2) + (x^2 - 5x + 7)$.", [["a", "$5x^2 - 2x + 5$"], ["b", "$5x^2 + 8x + 5$"], ["c", "$4x^2 - 2x + 5$"], ["d", "$5x^4 - 2x + 5$"]], "a",
                [P("method", "Combine like terms", "$4x^2+x^2=5x^2$; $3x-5x=-2x$; $-2+7=5$.")],
                [S("$5x^2 - 2x + 5$.", 1, "M")], "**(a)** $5x^2 - 2x + 5$", ["Adding exponents instead of coefficients."]),
              mcq("core", 2, "Multiply $(x - 5)(x + 2)$.", [["a", "$x^2 - 3x - 10$"], ["b", "$x^2 - 7x - 10$"], ["c", "$x^2 + 7x - 10$"], ["d", "$x^2 - 3x + 10$"]], "a",
                [P("method", "FOIL", "$x^2 + 2x - 5x - 10 = x^2 - 3x - 10$.")],
                [S("Middle terms $2x - 5x = -3x$; constant $-10$.", 1, "M"), S("Correct product.", 1, "B")], "**(a)** $x^2 - 3x - 10$", ["Sign error on the constant term."]),
              num("core", 2, "Expand $(x + 2)^2$. Enter the coefficient of $x$.", [{ label: "Coefficient of $x$", answer: 4 }],
                [P("method", "Square the binomial", "$(x+2)(x+2) = x^2 + 4x + 4$.")],
                [S("Middle term coefficient is $4$.", 1, "M"), S("Correct coefficient.", 1, "B")], "$4$", ["Writing $x^2 + 2x + 4$ — forgetting to double the middle term."]),
              op("challenge", 3, "Multiply $(x^2 - 3x + 1)(x + 2)$ and state the degree of the product.",
                [P("method", "Distribute", "Multiply each term of the trinomial by $(x+2)$."), P("concept", "Degree", "Degree of product = sum of degrees.")],
                [S("$x^2(x+2) - 3x(x+2) + 1(x+2) = x^3 + 2x^2 - 3x^2 - 6x + x + 2$.", 1, "M"), S("Combine: $x^3 - x^2 - 5x + 2$.", 1, "M"), S("Degree $= 2 + 1 = 3$.", 1, "B")], "$x^3 - x^2 - 5x + 2$; degree $3$", ["Distributing only to the first term of the trinomial."]),
            ],
          }),
        lesson("factoring-polynomials", "Factoring Polynomials", "I CAN factor by grouping, by trinomial patterns and by special products.", ["A-SSE.3", "A-APR.4"],
          [["Factor", "Write a polynomial as a product of simpler polynomials."], ["Greatest common factor", "The largest expression dividing every term, e.g., $3x$ from $6x^2 + 9x$."], ["Grouping", "Factor pairs of terms, then factor the common binomial."], ["Trinomial", "$ax^2 + bx + c$ factored into $(px + q)(rx + s)$."], ["Difference of squares", "$a^2 - b^2 = (a+b)(a-b)$."], ["Perfect square", "$a^2 \\pm 2ab + b^2 = (a \\pm b)^2$."]],
          {
            title: "Factoring strategies",
            skill: "Choose and apply the right factoring method.",
            sections: [
              ["Always start with GCF", "Factor out the greatest common factor first — $6x^2 + 9x = 3x(2x + 3)$. For four terms, try **grouping**: $x^3 + 2x^2 + 3x + 6 = x^2(x+2) + 3(x+2) = (x+2)(x^2+3)$."],
              ["Trinomials and specials", "For $x^2 + bx + c$, find two numbers multiplying to $c$ and adding to $b$. For $ax^2$ with $a \\ne 1$, use the AC method: multiply $a \\cdot c$, split the middle term, group. Recognize **difference of squares** $a^2 - b^2$ and **perfect squares** $a^2 \\pm 2ab + b^2$ instantly."],
            ],
            formulas: [
              ["GCF first", "Factor out the greatest common factor"],
              ["Trinomial", "Find $p, q$ with $pq = c$, $p + q = b$"],
              ["Special products", "$a^2 - b^2 = (a+b)(a-b)$; $(a \\pm b)^2 = a^2 \\pm 2ab + b^2$"],
            ],
            worked: {
              problem: "Factor $x^2 - 5x + 6$.",
              solution: "Need two numbers multiplying to $6$ and adding to $-5$: $-2$ and $-3$. So $x^2 - 5x + 6 = (x - 2)(x - 3)$.",
            },
            questions: [
              mcq("foundation", 1, "Factor $x^2 - 9$.", [["a", "$(x-3)(x+3)$"], ["b", "$(x-3)^2$"], ["c", "$(x+3)^2$"], ["d", "$(x-9)(x+1)$"]], "a",
                [P("pattern", "Difference of squares", "$a^2 - b^2 = (a+b)(a-b)$ with $a=x$, $b=3$.")],
                [S("$(x-3)(x+3)$.", 1, "M")], "**(a)** $(x-3)(x+3)$", ["Writing $(x-3)^2$ — that expands to $x^2 - 6x + 9$."]),
              mcq("core", 2, "Factor $x^2 + 7x + 12$.", [["a", "$(x+3)(x+4)$"], ["b", "$(x+2)(x+6)$"], ["c", "$(x+1)(x+12)$"], ["d", "$(x-3)(x-4)$"]], "a",
                [P("method", "Trinomial", "Numbers multiplying to $12$, adding to $7$: $3$ and $4$.")],
                [S("$(x+3)(x+4) = x^2 + 7x + 12$ ✓.", 1, "M"), S("Correct factors.", 1, "B")], "**(a)** $(x+3)(x+4)$", ["Checking only the product, not the sum."]),
              op("core", 2, "Factor out the GCF of $8x^3 - 12x^2 + 4x$, then state the remaining factor.",
                [P("method", "Greatest common factor", "Common factor of $8, 12, 4$ is $4$; lowest $x$ power is $x$.")],
                [S("GCF $= 4x$; factored form $4x(2x^2 - 3x + 1)$.", 1, "M"), S("Correct GCF and remaining factor.", 1, "B")], "$4x(2x^2 - 3x + 1)$", ["Missing the coefficient GCF or taking $x^2$ when $4x$ has only $x^1$."]),
              op("challenge", 3, "Factor $2x^2 + 7x + 3$ completely.",
                [P("method", "AC method", "$ac = 6$; find two numbers multiplying to $6$ adding to $7$: $1$ and $6$."), P("method", "Group", "Split $7x = x + 6x$, group, factor.")],
                [S("$2x^2 + x + 6x + 3 = x(2x+1) + 3(2x+1) = (2x+1)(x+3)$.", 1, "M"), S("Check: $(2x+1)(x+3) = 2x^2 + 7x + 3$ ✓.", 1, "M"), S("Complete factorization.", 1, "B")], "$(2x+1)(x+3)$", ["Forcing monic-trinomial habit on $a \\ne 1$."]),
            ],
          }),
        lesson("remainder-factor-theorems", "Remainder and Factor Theorems", "I CAN use synthetic division and the factor theorem to analyze polynomials.", ["A-APR.6", "A-APR.7"],
          [["Remainder theorem", "The remainder of $f(x) \\div (x - c)$ equals $f(c)$."], ["Factor theorem", "$f(c) = 0$ if and only if $(x - c)$ is a factor of $f(x)$."], ["Synthetic division", "A shortcut for dividing a polynomial by $(x - c)$ using only coefficients."], ["Root / zero", "A value $c$ where $f(c) = 0$; also an $x$-intercept of the graph."], ["Rational root theorem", "Possible rational roots are $\\pm\\frac{\\text{factors of constant}}{\\text{factors of leading coefficient}}$."]],
          {
            title: "Remainder and factor theorems",
            skill: "Evaluate polynomials efficiently and test for factors.",
            sections: [
              ["The theorems", "Dividing $f(x)$ by $(x - c)$ leaves remainder $f(c)$ — the **remainder theorem**. If that remainder is $0$, then $(x - c)$ is a factor — the **factor theorem**. Together they link evaluation, roots and factors."],
              ["Synthetic division", "For divisor $(x - c)$, write coefficients in order (include zeros), bring down the first, multiply by $c$, add, repeat. The last number is the remainder; the rest is the quotient's coefficients. It is far faster than long division."],
            ],
            formulas: [
              ["Remainder", "$f(x) \\div (x-c)$ has remainder $f(c)$"],
              ["Factor", "$(x - c)$ is a factor $\\iff f(c) = 0$"],
              ["Synthetic division", "Coefficients only; last entry = remainder"],
            ],
            worked: {
              problem: "Is $(x - 2)$ a factor of $f(x) = x^3 - 4x^2 + x + 6$?",
              solution: "$f(2) = 8 - 16 + 2 + 6 = 0$. Yes — $(x - 2)$ is a factor.",
            },
            questions: [
              mcq("foundation", 1, "The remainder when $f(x)$ is divided by $(x - 3)$ is ___.", [["a", "$f(3)$"], ["b", "$f(-3)$"], ["c", "$3$"], ["d", "$f(0)$"]], "a",
                [P("theorem", "Remainder", "Remainder equals $f(c)$ for divisor $(x-c)$.")],
                [S("$c = 3$, so remainder $= f(3)$.", 1, "M")], "**(a)** $f(3)$", ["Using $f(-3)$ — the divisor is $(x - 3)$, so $c = 3$."]),
              mcq("core", 2, "If $f(4) = 0$, which is true?", [["a", "$(x-4)$ is a factor of $f$"], ["b", "$(x+4)$ is a factor"], ["c", "$4$ is the degree"], ["d", "Nothing can be concluded"]], "a",
                [P("theorem", "Factor", "$f(c) = 0 \\iff (x-c)$ factor.")],
                [S("$f(4) = 0$ means $(x - 4)$ divides $f$.", 1, "M"), S("Correct conclusion.", 1, "B")], "**(a)** $(x-4)$ is a factor", ["Sign slip: $f(4)=0$ gives $(x-4)$, not $(x+4)$."]),
              num("core", 2, "Use the remainder theorem: what is the remainder when $x^3 - 2x^2 + 5x - 1$ is divided by $(x - 1)$?", [{ label: "Remainder", answer: 3 }],
                [P("method", "Evaluate", "$f(1) = 1 - 2 + 5 - 1 = 3$.")],
                [S("$f(1) = 3$.", 1, "M"), S("Correct remainder.", 1, "B")], "$3$", ["Evaluating $f(-1)$ instead."]),
              op("challenge", 3, "Use synthetic division to divide $x^3 - 4x^2 + x + 6$ by $(x - 2)$. State the quotient and remainder.",
                [P("method", "Synthetic division", "Coefficients $1, -4, 1, 6$ with $c = 2$."), P("theorem", "Remainder", "Last entry is $f(2)$.")],
                [S("Bring down $1$; $\\times 2 = 2$, add to $-4$ gives $-2$; $\\times 2 = -4$, add to $1$ gives $-3$; $\\times 2 = -6$, add to $6$ gives $0$.", 1, "M"), S("Quotient coefficients $1, -2, -3$ → $x^2 - 2x - 3$; remainder $0$.", 1, "M"), S("Check: $(x-2)(x^2-2x-3) = x^3 -4x^2 +x +6$ ✓.", 1, "B")], "Quotient $x^2 - 2x - 3$, remainder $0$", ["Writing quotient degree equal to dividend degree — drop the last entry."]),
            ],
          }),
        ],
    },
    {
      id: "m11-u2",
      title: "Quadratic Functions",
      description: "Graph and analyze quadratics in standard, vertex and factored form using completing the square and the quadratic formula.",
      lessons: [
        lesson("quadratic-forms", "Forms of Quadratic Functions", "I CAN identify vertex, axis of symmetry, roots and direction from each form.", ["A-SSE.1", "F-IF.7", "F-LE.1"],
          [["Standard form", "$f(x) = ax^2 + bx + c$; $a$ controls width/direction, $c$ is the $y$-intercept."], ["Vertex form", "$f(x) = a(x - h)^2 + k$; vertex at $(h, k)$ — the most useful form for graphing."], ["Factored form", "$f(x) = a(x - r_1)(x - r_2)$; roots at $r_1, r_2$ — the $x$-intercepts."], ["Axis of symmetry", "The vertical line $x = h$ through the vertex."], ["Leading coefficient", "$a > 0$ opens up (minimum), $a < 0$ opens down (maximum)."]],
          {
            title: "Three forms, three views",
            skill: "Extract key features from standard, vertex and factored forms.",
            sections: [
              ["Vertex form", "$f(x) = a(x - h)^2 + k$ shows everything at a glance: vertex $(h, k)$, axis $x = h$, and since the squared term is never negative, $k$ is the **minimum** when $a > 0$ or **maximum** when $a < 0$. The vertex is found by **completing the square** from standard form."],
              ["Factored and standard", "$f(x) = a(x - r_1)(x - r_2)$ gives roots directly — set each factor to zero. Standard form $ax^2 + bx + c$ gives the $y$-intercept $c$ immediately but hides the vertex. Converting between forms is a core Algebra 2 skill."],
            ],
            formulas: [
              ["Vertex form", "$f(x) = a(x-h)^2 + k$; vertex $(h,k)$"],
              ["Factored form", "$f(x) = a(x-r_1)(x-r_2)$; roots $r_1, r_2$"],
              ["Axis", "$x = \\frac{-b}{2a}$ from standard form"],
            ],
            worked: {
              problem: "Find the vertex of $f(x) = 2(x - 3)^2 - 8$ and state whether it is a max or min.",
              solution: "Vertex $(3, -8)$. Since $a = 2 > 0$, the parabola opens up and the vertex is a **minimum**.",
            },
            questions: [
              mcq("foundation", 1, "The vertex of $f(x) = (x + 4)^2 - 7$ is ___.", [["a", "$(-4, -7)$"], ["b", "$(4, -7)$"], ["c", "$(-4, 7)$"], ["d", "$(4, 7)$"]], "a",
                [P("definition", "Vertex form", "$(x - h)^2 + k$ has vertex $(h, k)$; here $h = -4$.")],
                [S("$x + 4 = x - (-4)$, so $h = -4$, $k = -7$: vertex $(-4, -7)$.", 1, "M")], "**(a)** $(-4, -7)$", ["Reading $h$ as $+4$ — watch the sign."]),
              mcq("core", 2, "What are the roots of $f(x) = (x - 2)(x + 5)$?", [["a", "$x = 2$ and $x = -5$"], ["b", "$x = -2$ and $x = 5$"], ["c", "$x = 2$ and $x = 5$"], ["d", "$x = -2$ and $x = -5$"]], "a",
                [P("method", "Zero product", "Set each factor equal to zero.")],
                [S("$x - 2 = 0 \\Rightarrow x = 2$; $x + 5 = 0 \\Rightarrow x = -5$.", 1, "M"), S("Correct roots.", 1, "B")], "**(a)** $x = 2, -5$", ["Keeping the sign inside the factor instead of solving."]),
              num("core", 2, "For $f(x) = x^2 - 6x + 5$, what is the axis of symmetry?", [{ label: "$x$", answer: 3 }],
                [P("formula", "Axis", "$x = \\frac{-b}{2a} = \\frac{6}{2} = 3$.")],
                [S("$x = 3$.", 1, "M"), S("Correct value.", 1, "B")], "$x = 3$", ["Using $\\frac{b}{2a}$ without the negative sign."]),
              op("challenge", 3, "Convert $f(x) = x^2 - 4x - 5$ to vertex form and state the vertex and whether it opens up or down.",
                [P("method", "Complete the square", "$x^2 - 4x = (x-2)^2 - 4$."), P("concept", "Vertex form", "$(x-h)^2 + k$ reveals the vertex.")],
                [S("$f(x) = (x^2 - 4x + 4) - 4 - 5 = (x - 2)^2 - 9$.", 1, "M"), S("Vertex $(2, -9)$; $a = 1 > 0$ so it opens up — vertex is a minimum.", 1, "M"), S("Correct form and features.", 1, "B")], "$f(x) = (x-2)^2 - 9$; vertex $(2,-9)$, opens up", ["Adding $4$ without subtracting it back."]),
            ],
          }),
        lesson("completing-the-square", "Completing the Square", "I CAN rewrite quadratics in vertex form and solve equations by completing the square.", ["A-REI.4", "A-SSE.3"],
          [["Completing the square", "Adding $(\\frac{b}{2})^2$ to both sides to form a perfect square."], ["Half the coefficient", "Take half of $b$, square it — the number to add."], ["Vertex form result", "$ax^2 + bx + c \\rightarrow a(x + \\frac{b}{2a})^2 + (c - \\frac{b^2}{4a})$."], ["Solving", "Complete the square, then take square roots of both sides."]],
          {
            title: "Completing the square",
            skill: "Transform $ax^2 + bx + c$ into vertex form and solve quadratics.",
            sections: [
              ["The technique", "For $x^2 + bx$, add $(\\frac{b}{2})^2$ to complete $(x + \\frac{b}{2})^2$. For $ax^2 + bx + c$ with $a \\ne 1$, first divide through by $a$ or factor it out. Example: $x^2 - 6x + 2 = (x - 3)^2 - 7$ — half of $-6$ is $-3$, squared is $9$, and $2 - 9 = -7$."],
              ["Solving equations", "To solve $x^2 + bx + c = 0$ by completing the square: move $c$, add $(b/2)^2$ to both sides, factor the left as a square, take square roots, solve for $x$. This derives the quadratic formula and handles equations the factoring method cannot."],
            ],
            formulas: [
              ["Key step", "Add $\\left(\\frac{b}{2}\\right)^2$ to complete the square"],
              ["Vertex form", "$a\\left(x + \\frac{b}{2a}\\right)^2 + \\left(c - \\frac{b^2}{4a}\\right)$"],
            ],
            worked: {
              problem: "Solve $x^2 + 6x - 7 = 0$ by completing the square.",
              solution: "$x^2 + 6x = 7$; add $9$: $x^2 + 6x + 9 = 16$; $(x+3)^2 = 16$; $x + 3 = \\pm 4$; $x = 1$ or $x = -7$.",
            },
            questions: [
              mcq("foundation", 1, "To complete the square for $x^2 + 8x$, you add ___.", [["a", "$16$"], ["b", "$8$"], ["c", "$4$"], ["d", "$64$"]], "a",
                [P("method", "Half then square", "Half of $8$ is $4$; $4^2 = 16$.")],
                [S("Add $16$ to get $(x+4)^2$.", 1, "M")], "**(a)** $16$", ["Adding $8$ or $4$ instead of $4^2$."]),
              mcq("core", 2, "Write $x^2 - 10x + 21$ in vertex form.", [["a", "$(x-5)^2 - 4$"], ["b", "$(x-5)^2 + 4$"], ["c", "$(x+5)^2 - 4$"], ["d", "$(x-5)^2 - 25$"]], "a",
                [P("method", "Complete the square", "$x^2 - 10x + 25 - 25 + 21 = (x-5)^2 - 4$.")],
                [S("Add and subtract $25$: $(x-5)^2 - 4$.", 1, "M"), S("Correct form.", 1, "B")], "**(a)** $(x-5)^2 - 4$", ["Forgetting to subtract the added $25$."]),
              num("core", 2, "Solve $x^2 - 4x - 5 = 0$ by completing the square. Enter the larger solution.", [{ label: "Larger $x$", answer: 5 }],
                [P("method", "Complete and solve", "$(x-2)^2 = 9$, so $x - 2 = \\pm 3$.")],
                [S("$x = 5$ or $x = -1$; larger is $5$.", 1, "M"), S("Correct value.", 1, "B")], "$x = 5$", ["Dropping the $\\pm$ and losing a solution."]),
              op("challenge", 3, "Solve $2x^2 + 8x - 10 = 0$ by completing the square.",
                [P("method", "Normalize first", "Divide by $2$: $x^2 + 4x - 5 = 0$."), P("method", "Complete the square", "$(x+2)^2 = 9$.")],
                [S("$x^2 + 4x = 5$; add $4$: $(x+2)^2 = 9$; $x + 2 = \\pm 3$.", 1, "M"), S("$x = 1$ or $x = -5$.", 1, "M"), S("Both solutions verified.", 1, "B")], "$x = 1$ or $x = -5$", ["Completing the square before dividing by $a = 2$."]),
            ],
          }),
        lesson("quadratic-formula", "The Quadratic Formula and Discriminant", "I CAN solve any quadratic with the formula and use the discriminant to classify roots.", ["A-REI.4", "A-SSE.1"],
          [["Quadratic formula", "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ — solves any $ax^2 + bx + c = 0$."], ["Discriminant", "$D = b^2 - 4ac$; determines the number and type of roots."], ["Two real roots", "$D > 0$: two distinct real solutions."], ["One real root", "$D = 0$: a repeated root (vertex touches the axis)."], ["Complex roots", "$D < 0$: no real solutions; two complex conjugate roots."]],
          {
            title: "Formula and discriminant",
            skill: "Apply the formula accurately and interpret $D$ before solving.",
            sections: [
              ["Using the formula", "Identify $a$, $b$, $c$ **with signs**, substitute carefully, simplify the radical, then divide by $2a$ last. The $\\pm$ produces both solutions — never drop it. Estimate first: the formula always works when factoring fails."],
              ["The discriminant", "$D = b^2 - 4ac$ tells you the story before you compute: $D > 0$ two real roots, $D = 0$ one repeated real root, $D < 0$ two complex roots (no $x$-intercepts). It is the fastest way to classify a quadratic's solutions."],
            ],
            formulas: [
              ["Quadratic formula", "$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$"],
              ["Discriminant", "$D = b^2 - 4ac$: $>0$ two real, $=0$ one, $<0$ complex"],
            ],
            worked: {
              problem: "Solve $2x^2 - 4x - 3 = 0$ and classify the roots.",
              solution: "$D = 16 - 4(2)(-3) = 40 > 0$ — two real roots. $x = \\frac{4 \\pm \\sqrt{40}}{4} = \\frac{4 \\pm 2\\sqrt{10}}{4} = \\frac{2 \\pm \\sqrt{10}}{2}$.",
            },
            questions: [
              mcq("foundation", 1, "For $3x^2 - 5x + 2 = 0$, what is the discriminant?", [["a", "$1$"], ["b", "$-1$"], ["c", "$49$"], ["d", "$17$"]], "a",
                [P("formula", "Discriminant", "$D = (-5)^2 - 4(3)(2) = 25 - 24 = 1$.")],
                [S("$D = 1 > 0$ — two real roots.", 1, "M")], "**(a)** $1$", ["Using $b$ without its sign: $25$ either way here, but $4ac$ sign errors are common."]),
              mcq("core", 2, "How many real solutions does $x^2 + 4x + 4 = 0$ have?", [["a", "Two distinct"], ["b", "One repeated"], ["c", "None (complex)"], ["d", "Infinitely many"]], "b",
                [P("method", "Discriminant", "$D = 16 - 16 = 0$.")],
                [S("$D = 0$ means one repeated real root $x = -2$.", 1, "M"), S("Correct classification.", 1, "B")], "**(b)** One repeated", ["Saying two roots because degree is $2$."]),
              num("core", 2, "Solve $x^2 - 5x + 6 = 0$ using the quadratic formula. Enter the larger root.", [{ label: "Larger root", answer: 3 }],
                [P("formula", "Quadratic formula", "$x = \\frac{5 \\pm \\sqrt{25-24}}{2} = \\frac{5 \\pm 1}{2}$.")],
                [S("Roots $3$ and $2$; larger is $3$.", 1, "M"), S("Correct value.", 1, "B")], "$x = 3$", ["Forgetting the $\\pm$ and reporting only one root."]),
              op("challenge", 3, "A ball's height is $h(t) = -16t^2 + 48t + 4$ feet. Find when it hits the ground ($h = 0$) using the quadratic formula, rounding to the nearest tenth.",
                [P("model", "Set $h = 0$", "$-16t^2 + 48t + 4 = 0$."), P("method", "Quadratic formula", "$a=-16, b=48, c=4$; $t = \\frac{-48 \\pm \\sqrt{2304 + 256}}{-32}$.")],
                [S("$D = 2304 - 4(-16)(4) = 2560$; $\\sqrt{2560} \\approx 50.6$.", 1, "M"), S("$t = \\frac{-48 \\pm 50.6}{-32}$ gives $t \\approx 3.1$ or $t \\approx -0.08$.", 1, "M"), S("Negative time is rejected: hits ground at $t \\approx 3.1$ s.", 1, "B")], "$t \\approx 3.1$ seconds", ["Keeping the negative-time solution as physical."]),
            ],
          }),
        ],
    },
    {
      id: "m11-u3",
      title: "Exponential, Logarithmic and Rational Functions",
      description: "Analyze exponential growth and decay, evaluate logarithms and graph rational functions with asymptotes.",
      lessons: [
        lesson("exponential-functions", "Exponential Functions", "I CAN analyze $f(x) = ab^x$ and model growth and decay.", ["F-LE.1", "F-IF.8", "F-BF.1"],
          [["Exponential function", "$f(x) = ab^x$ with $b > 0$, $b \\ne 1$; $a$ is the initial value."], ["Growth vs decay", "$b > 1$ grows; $0 < b < 1$ decays."], ["Asymptote", "The horizontal line $y = 0$ (the $x$-axis) that the graph approaches but never reaches."], ["Growth factor", "$b = 1 + r$ for growth rate $r$; $b = 1 - r$ for decay rate $r$."], ["Doubling time", "Time for the quantity to double: $t = \\frac{\\ln 2}{\\ln b}$."]],
          {
            title: "Exponential models",
            skill: "Interpret parameters and apply growth/decay factors.",
            sections: [
              ["Reading the model", "In $f(x) = ab^x$: $a$ is the value at $x = 0$ (initial amount), $b$ is the growth factor per unit of $x$. Growth: $b > 1$ (e.g., $b = 1.05$ = $5\\%$ growth). Decay: $b < 1$ (e.g., $b = 0.9$ = $10\\%$ decay). The graph has a horizontal asymptote at $y = 0$ — it never quite reaches zero."],
              ["Compound changes", "Repeated percent change compounds: after $n$ periods, multiply by $b^n$. A $20\\%$ annual decay gives $V = V_0(0.8)^t$; after $5$ years the factor is $0.8^5 \\approx 0.328$, not $1 - 5(0.2) = 0$."],
            ],
            formulas: [
              ["Model", "$f(x) = ab^x$; $a$ = initial, $b$ = factor"],
              ["Factor", "$b = 1 + r$ growth, $b = 1 - r$ decay"],
              ["Asymptote", "$y = 0$ horizontal asymptote"],
            ],
            worked: {
              problem: "A $\\$1{,}000$ investment grows at $6\\%$ compounded annually. Write the model and find the value after $10$ years.",
              solution: "$V(t) = 1000(1.06)^t$. After $10$ years: $V = 1000(1.06)^{10} \\approx 1000 \\times 1.791 \\approx \\$1{,}791$.",
            },
            questions: [
              mcq("foundation", 1, "For $f(x) = 5(0.5)^x$, the function ___.", [["a", "grows without bound"], ["b", "decays toward $0$"], ["c", "is constant"], ["d", "oscillates"]], "b",
                [P("definition", "Decay", "$0 < b < 1$ means decay toward the asymptote $y=0$.")],
                [S("$b = 0.5 < 1$: halves each step, approaching $0$.", 1, "M")], "**(b)** decays toward $0$", ["Thinking $0.5^x$ grows because the base is positive."]),
              mcq("core", 2, "A population of $200$ grows by $3\\%$ per year. What is the growth factor $b$?", [["a", "$0.03$"], ["b", "$1.03$"], ["c", "$3$"], ["d", "$0.97$"]], "b",
                [P("formula", "Growth factor", "$b = 1 + r = 1 + 0.03 = 1.03$.")],
                [S("$b = 1.03$.", 1, "M"), S("Correct factor.", 1, "B")], "**(b)** $1.03$", ["Using the rate $0.03$ as the factor directly."]),
              num("core", 2, "A car worth $\\$20{,}000$ depreciates $10\\%$ per year. What is its value after $2$ years?", [{ label: "Value", answer: 16200, unit: "dollars" }],
                [P("model", "Decay", "$V = 20000(0.9)^2$.")],
                [S("$0.9^2 = 0.81$; $20000 \\times 0.81 = \\$16{,}200$.", 1, "M"), S("Correct value.", 1, "B")], "$\\$16{,}200$", ["Subtracting $10\\%$ twice linearly: $20000 - 4000 = \\$16{,}000$."]),
              op("challenge", 3, "Bacteria double every $3$ hours. Starting from $500$, write an exponential model $P(t)$ and find the population after $12$ hours.",
                [P("model", "Exponential", "$P = 500 \\cdot 2^{t/3}$ — doubling every $3$ hours."), P("method", "Evaluate", "$t = 12$: $2^{12/3} = 2^4 = 16$.")],
                [S("Model: $P(t) = 500 \\cdot 2^{t/3}$.", 1, "M"), S("After $12$ h: $500 \\times 2^4 = 500 \\times 16$.", 1, "M"), S("$P = 8{,}000$ bacteria.", 1, "B")], "$P(t) = 500 \\cdot 2^{t/3}$; $8{,}000$ after $12$ h", ["Using $2^t$ instead of $2^{t/3}$ for the $3$-hour period."]),
            ],
          }),
        lesson("logarithms", "Logarithms", "I CAN evaluate logarithms and use log properties to solve exponential equations.", ["F-LE.4", "F-IF.8", "A-SSE.6"],
          [["Logarithm", "$\\log_b a = x$ means $b^x = a$ — the inverse of exponentiation."], ["Common log", "$\\log$ (base $10$) and $\\ln$ (base $e$)."], ["Product rule", "$\\log_b(MN) = \\log_b M + \\log_b N$."], ["Power rule", "$\\log_b(M^n) = n \\log_b M$."], ["Change of base", "$\\log_b a = \\frac{\\log a}{\\log b}$."]],
          {
            title: "Logarithms as inverses",
            skill: "Convert between exponential and logarithmic form and apply log rules.",
            sections: [
              ["Definition", "$\\log_b a = x \\iff b^x = a$. So $\\log_2 8 = 3$ because $2^3 = 8$, and $\\ln e = 1$ because $e^1 = e$. Logs answer the question 'what exponent?' — they undo exponentials, which is why they solve equations like $2^x = 10$."],
              ["Properties and solving", "Logs turn multiplication into addition, division into subtraction, and powers into multiplication: $\\log_b(MN) = \\log_b M + \\log_b N$, $\\log_b\\frac{M}{N} = \\log_b M - \\log_b N$, $\\log_b M^n = n\\log_b M$. To solve $b^x = a$, take $\\log$ of both sides: $x = \\frac{\\log a}{\\log b}$ (change of base)."],
            ],
            formulas: [
              ["Definition", "$\\log_b a = x \\iff b^x = a$"],
              ["Properties", "$\\log(MN) = \\log M + \\log N$; $\\log M^n = n\\log M$"],
              ["Solve", "$x = \\frac{\\log a}{\\log b}$ for $b^x = a$"],
            ],
            worked: {
              problem: "Solve $5^x = 100$.",
              solution: "$x = \\log_5 100 = \\frac{\\log 100}{\\log 5} = \\frac{2}{0.699} \\approx 2.86$.",
            },
            questions: [
              mcq("foundation", 1, "$\\log_3 27$ equals ___.", [["a", "$3$"], ["b", "$9$"], ["c", "$81$"], ["d", "$\\frac{1}{3}$"]], "a",
                [P("definition", "Logarithm", "$\\log_3 27 = x$ means $3^x = 27 = 3^3$.")],
                [S("$x = 3$.", 1, "M")], "**(a)** $3$", ["Confusing $\\log_3 27$ with $3^{27}$."]),
              mcq("core", 2, "Which expression equals $\\log_2(x^3 y)$?", [["a", "$3\\log_2 x + \\log_2 y$"], ["b", "$3\\log_2 x \\cdot \\log_2 y$"], ["c", "$\\log_2 x + \\log_2 y$"], ["d", "$3\\log_2(xy)$"]], "a",
                [P("properties", "Log rules", "$\\log(x^3 y) = \\log x^3 + \\log y = 3\\log x + \\log y$.")],
                [S("Power rule then product rule: $3\\log_2 x + \\log_2 y$.", 1, "M"), S("Correct expansion.", 1, "B")], "**(a)** $3\\log_2 x + \\log_2 y$", ["Bringing the $3$ inside the log incorrectly."]),
              num("core", 2, "Solve $2^x = 32$. Enter $x$.", [{ label: "$x$", answer: 5 }],
                [P("definition", "Log", "$x = \\log_2 32 = 5$ since $2^5 = 32$.")],
                [S("$x = 5$.", 1, "M"), S("Correct value.", 1, "B")], "$x = 5$", ["Dividing $32/2$ instead of recognizing powers."]),
              op("challenge", 3, "Solve $3^{2x} = 81$ and explain two different methods.",
                [P("method", "Match bases", "$81 = 3^4$, so $2x = 4$."), P("method", "Log method", "$2x = \\log_3 81 = \\frac{\\log 81}{\\log 3}$.")],
                [S("Method 1: $81 = 3^4$ gives $3^{2x} = 3^4$, so $2x = 4$.", 1, "M"), S("Method 2: $2x = \\log_3 81 = 4$ by change of base.", 1, "M"), S("$x = 2$ either way.", 1, "B")], "$x = 2$", ["Writing $2x = 81$ by dropping the exponential."]),
            ],
          }),
        lesson("rational-functions", "Rational Functions and Asymptotes", "I CAN graph rational functions and identify their asymptotes and discontinuities.", ["F-IF.7", "F-BF.3", "A-APR.6"],
          [["Rational function", "A ratio of polynomials $f(x) = \\frac{P(x)}{Q(x)}$ with $Q(x) \\ne 0$."], ["Vertical asymptote", "A vertical line $x = c$ where the denominator is zero (and numerator isn't)."], ["Horizontal asymptote", "The end behavior line: compare degrees of numerator and denominator."], ["Hole / removable discontinuity", "A missing point where numerator and denominator share a factor."], ["Degree comparison", "$\\deg P < \\deg Q$: asymptote $y=0$; equal: ratio of leading coefficients; $\\deg P > \\deg Q$: no horizontal asymptote."]],
          {
            title: "Rational functions",
            skill: "Find asymptotes, holes and end behavior of $\\frac{P(x)}{Q(x)}$.",
            sections: [
              ["Vertical asymptotes and holes", "Factor numerator and denominator. Zeros of the denominator that do **not** cancel give **vertical asymptotes**. Zeros that cancel with numerator factors give **holes** — removable points, not asymptotes. For $\\frac{x^2-4}{x-2}$, the $(x-2)$ cancels leaving $x+2$ with a hole at $x = 2$."],
              ["Horizontal asymptotes", "Compare degrees: numerator degree **less** → $y = 0$; **equal** → $y = \\frac{\\text{leading coeff of } P}{\\text{leading coeff of } Q}$; **greater** → no horizontal asymptote (end behavior follows a polynomial/oblique trend)."],
            ],
            formulas: [
              ["Vertical asymptote", "Uncancelled denominator zeros"],
              ["Horizontal asymptote", "$\\deg P < \\deg Q$: $y=0$; equal: ratio of leading coefficients"],
              ["Hole", "Cancelled common factor — point removed"],
            ],
            worked: {
              problem: "Find the asymptotes of $f(x) = \\frac{3x^2 + 1}{x^2 - 9}$.",
              solution: "Vertical: $x = \\pm 3$ (denominator zeros, no cancellation). Horizontal: equal degrees, so $y = \\frac{3}{1} = 3$.",
            },
            questions: [
              mcq("foundation", 1, "The function $f(x) = \\frac{5}{x - 2}$ has a vertical asymptote at ___.", [["a", "$x = 2$"], ["b", "$x = -2$"], ["c", "$y = 2$"], ["d", "$x = 0$"]], "a",
                [P("definition", "Vertical asymptote", "Denominator zero with no cancellation.")],
                [S("$x - 2 = 0$ gives $x = 2$.", 1, "M")], "**(a)** $x = 2$", ["Reporting $y = 2$ — asymptotes are named by their line."]),
              mcq("core", 2, "What is the horizontal asymptote of $f(x) = \\frac{2x^2 - 1}{x^2 + 5}$?", [["a", "$y = 0$"], ["b", "$y = 2$"], ["c", "$y = \\frac{2}{5}$"], ["d", "$y = x$"]], "b",
                [P("rule", "Equal degrees", "Asymptote = ratio of leading coefficients $= \\frac{2}{1} = 2$.")],
                [S("Degrees both $2$: $y = 2$.", 1, "M"), S("Correct asymptote.", 1, "B")], "**(b)** $y = 2$", ["Using constant terms instead of leading coefficients."]),
              num("core", 2, "Does $f(x) = \\frac{x^2 - 9}{x - 3}$ have a vertical asymptote? If it has a hole, at what $x$-value? Enter the $x$-value of the hole, or $0$ if there is an asymptote instead.", [{ label: "$x$-value", answer: 3 }],
                [P("method", "Cancel factors", "$x^2 - 9 = (x-3)(x+3)$ cancels with denominator — hole at $x = 3$.")],
                [S("Hole at $x = 3$; simplified function is $x + 3$.", 1, "M"), S("Correct value.", 1, "B")], "$x = 3$ (hole)", ["Calling $x = 3$ a vertical asymptote — it cancels."]),
              op("challenge", 3, "Analyze $f(x) = \\frac{x + 1}{x^2 - 4}$. State all vertical asymptotes, the horizontal asymptote, and the $x$-intercept.",
                [P("method", "Factor denominator", "$x^2 - 4 = (x-2)(x+2)$ → asymptotes at $x = \\pm 2$."), P("rule", "Degrees", "Numerator degree $1 <$ denominator $2$ → $y = 0$."), P("method", "Intercept", "$x$-intercept where numerator $= 0$.")],
                [S("Vertical asymptotes: $x = 2$ and $x = -2$ (no cancellation).", 1, "M"), S("Horizontal asymptote $y = 0$ since $\\deg P < \\deg Q$.", 1, "M"), S("$x$-intercept at $x = -1$ (numerator zero, denominator nonzero).", 1, "B")], "VA: $x=\\pm2$; HA: $y=0$; $x$-intercept $-1$", ["Missing that numerator degree $1$ still gives $y=0$ asymptote."]),
            ],
          }),
        ],
    },
  ],
};

module.exports = { courses: [mathG11] };
