// Grade 9 Math — Algebra I (Common Core). Spec for scripts/gen-us-elementary.cjs.
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

const mathG9 = {
  id: "us-math-g9",
  exportName: "usMathG9",
  prefix: "m9",
  title: "Grade 9 Math",
  shortTitle: "Math G9",
  grade: "Grade 9",
  framework: "Common Core State Standards for Mathematics",
  description:
    "Solve multi-step linear equations and inequalities, analyze functions and linear graphs, work with systems of equations, and apply exponent laws and exponential growth.",
  us: { subject: "math", grade: 9 },
  units: [
    {
      id: "m9-u1",
      title: "Linear Equations and Inequalities",
      description: "Solve multi-step equations, rewrite formulas, and solve and graph linear inequalities.",
      lessons: [
        lesson("multi-step-equations", "Solving Multi-Step Linear Equations", "I CAN solve multi-step linear equations and check my solutions.", ["A-REI.3", "8.EE.C.7"],
          [["Variable", "A letter that stands for an unknown number, such as $x$."], ["Coefficient", "The number multiplied by a variable, such as the $3$ in $3x$."], ["Inverse operations", "Operations that undo each other: addition and subtraction, multiplication and division."], ["Solution", "A value of the variable that makes the equation true."], ["Distributive property", "$a(b + c) = ab + ac$ — used to remove parentheses."]],
          {
            title: "Multi-step equations",
            skill: "Isolate the variable using inverse operations in the correct order.",
            sections: [
              ["The solving strategy", "To solve an equation, undo operations in reverse order of how they were applied to the variable. First simplify each side — distribute, combine like terms — then use inverse operations to isolate the variable, and always check by substituting back."],
              ["Equations with variables on both sides", "When variables appear on both sides, collect variable terms on one side first by adding or subtracting. For $3x + 4 = 2x + 10$, subtract $2x$ from both sides to get $x + 4 = 10$, then $x = 6$. Check: $3(6)+4 = 22$ and $2(6)+10 = 22$."],
            ],
            formulas: [
              ["Inverse operations", "Add $\\leftrightarrow$ subtract, multiply $\\leftrightarrow$ divide"],
              ["Check a solution", "Substitute the value back into the original equation"],
            ],
            worked: {
              problem: "Solve $5x - 7 = 2x + 11$.",
              solution: "Subtract $2x$ from both sides: $3x - 7 = 11$. Add $7$: $3x = 18$. Divide by $3$: $x = 6$. Check: $5(6) - 7 = 23$ and $2(6) + 11 = 23$.",
            },
            questions: [
              mcq("foundation", 1, "To solve $4x + 9 = 25$, the first step is to ___.", [["a", "add $9$ to both sides"], ["b", "subtract $9$ from both sides"], ["c", "divide both sides by $4$"], ["d", "multiply both sides by $4$"]], "b",
                [P("definition", "Inverse operations", "Undo addition with subtraction first.")],
                [S("$9$ is added to $4x$, so subtract $9$ from both sides to isolate the term with $x$.", 1, "B")], "**(b)** subtract $9$ from both sides", ["Dividing first leaves $x + \\frac{9}{4} = \\frac{25}{4}$ — harder to finish."]),
              mcq("core", 2, "Solve $3(x - 2) = 2x + 5$. What is $x$?", [["a", "$x = 5$"], ["b", "$x = 11$"], ["c", "$x = -1$"], ["d", "$x = 1$"]], "b",
                [P("method", "Distribute then isolate", "Expand $3(x-2) = 3x - 6$, then collect terms.")],
                [S("Distribute: $3x - 6 = 2x + 5$. Subtract $2x$: $x - 6 = 5$. Add $6$: $x = 11$.", 1, "M"), S("Correct solution $x = 11$.", 1, "B")], "**(b)** $x = 11$", ["Forgetting to distribute to both terms."]),
              num("core", 2, "Solve $\\frac{x}{3} + 4 = 10$. Enter the value of $x$.", [{ label: "$x$", answer: 18 }],
                [P("method", "Clear the fraction", "Subtract $4$ first, then multiply by $3$.")],
                [S("$\\frac{x}{3} = 6$, so $x = 18$.", 1, "M"), S("Correct value.", 1, "B")], "$x = 18$", ["Adding $4$ instead of subtracting, or forgetting to multiply by $3$."]),
              op("challenge", 3, "Solve $2(3x - 1) - 4 = 5x + 7$ and check your answer.",
                [P("method", "Order of operations", "Simplify both sides before collecting variable terms."), P("skill", "Check", "Substitute the solution back.")],
                [S("Distribute: $6x - 2 - 4 = 5x + 7$, so $6x - 6 = 5x + 7$.", 1, "M"), S("Subtract $5x$ and add $6$: $x = 13$.", 1, "M"), S("Check: $2(3 \\cdot 13 - 1) - 4 = 72$ and $5 \\cdot 13 + 7 = 72$ — solution verified.", 1, "B")], "$x = 13$ (verified by substitution)", ["Sign error when distributing $-1$ inside parentheses."]),
            ],
          }),
        lesson("literal-equations", "Literal Equations and Formulas", "I CAN solve a literal equation for a specified variable.", ["A-REI.3", "A-CED.4"],
          [["Literal equation", "An equation that contains two or more variables, such as $A = \\frac{1}{2}bh$."], ["Formula", "A literal equation that expresses a real-world relationship, such as distance $= rt$."], ["Isolate", "Rearrange so the target variable stands alone on one side."], ["Substitute", "Replace a variable with a known value to evaluate the formula."]],
          {
            title: "Rearranging formulas",
            skill: "Treat other variables as constants and isolate the requested variable.",
            sections: [
              ["Same rules as numbers", "Solving $A = \\frac{1}{2}bh$ for $h$ uses exactly the same inverse operations as solving a numerical equation — the only difference is that $b$ and $A$ are treated as known constants. Multiply both sides by $2$, then divide by $b$: $h = \\frac{2A}{b}$."],
              ["Using formulas", "Once a formula is rearranged, substitute known values to find an unknown. For example, in $d = rt$, solving for $t$ gives $t = \\frac{d}{r}$; with $d = 150$ miles and $r = 50$ mph, $t = 3$ hours."],
            ],
            formulas: [
              ["Area of triangle", "$A = \\frac{1}{2}bh \\Rightarrow h = \\frac{2A}{b}$"],
              ["Distance", "$d = rt \\Rightarrow t = \\frac{d}{r}$"],
            ],
            worked: {
              problem: "The formula $v = u + at$ relates final velocity, initial velocity, acceleration and time. Solve for $t$.",
              solution: "Subtract $u$: $v - u = at$. Divide by $a$: $t = \\frac{v - u}{a}$.",
            },
            questions: [
              mcq("foundation", 1, "Solve $P = 2l + 2w$ for $w$.", [["a", "$w = \\frac{P - 2l}{2}$"], ["b", "$w = \\frac{P}{2} - l$"], ["c", "$w = P - 2l$"], ["d", "$w = \\frac{P + 2l}{2}$"]], "a",
                [P("method", "Inverse operations", "Subtract $2l$ first, then divide by $2$.")],
                [S("$2w = P - 2l$, so $w = \\frac{P - 2l}{2}$. (Note $\\frac{P}{2} - l$ is equivalent but $\\frac{P-2l}{2}$ is the direct result.)", 1, "M")], "**(a)** $w = \\frac{P - 2l}{2}$", ["Forgetting to subtract $2l$ before dividing."]),
              mcq("core", 2, "Solve $y = mx + b$ for $m$.", [["a", "$m = \\frac{y + b}{x}$"], ["b", "$m = \\frac{y - b}{x}$"], ["c", "$m = y - bx$"], ["d", "$m = \\frac{y}{x} + b$"]], "b",
                [P("method", "Isolate $m$", "Subtract $b$, then divide by $x$.")],
                [S("$y - b = mx$, so $m = \\frac{y - b}{x}$.", 1, "M"), S("Correct rearrangement.", 1, "B")], "**(b)** $m = \\frac{y - b}{x}$", ["Adding $b$ instead of subtracting."]),
              num("core", 2, "Use $A = \\frac{1}{2}bh$ with $A = 24$ and $b = 8$ to find $h$. Enter the value of $h$.", [{ label: "$h$", answer: 6 }],
                [P("method", "Substitute and solve", "$24 = \\frac{1}{2}(8)h = 4h$.")],
                [S("$4h = 24$ gives $h = 6$.", 1, "M"), S("Correct value.", 1, "B")], "$h = 6$", ["Multiplying by $\\frac{1}{2}$ instead of dividing."]),
              op("challenge", 3, "The formula for the volume of a cylinder is $V = \\pi r^2 h$. Solve for $r$, then find $r$ when $V = 36\\pi$ and $h = 4$.",
                [P("method", "Isolate then substitute", "Divide by $\\pi h$, take the square root."), P("skill", "Substitute", "Use the rearranged formula.")],
                [S("$r^2 = \\frac{V}{\\pi h}$, so $r = \\sqrt{\\frac{V}{\\pi h}}$.", 1, "M"), S("Substitute: $r = \\sqrt{\\frac{36\\pi}{4\\pi}} = \\sqrt{9} = 3$.", 1, "M"), S("Correct formula and value $r = 3$.", 1, "B")], "$r = \\sqrt{\\frac{V}{\\pi h}}$; $r = 3$", ["Dividing by $\\pi$ only and forgetting $h$."]),
            ],
          }),
        lesson("linear-inequalities", "Solving and Graphing Linear Inequalities", "I CAN solve linear inequalities and graph their solutions on a number line.", ["A-REI.3", "A-CED.1"],
          [["Inequality", "A statement that two expressions are not equal, using $<$, $>$, $\\le$, or $\\ge$."], ["Solution set", "All values of the variable that make the inequality true."], ["Flip the sign", "When multiplying or dividing both sides by a negative number, reverse the inequality symbol."], ["Boundary point", "The value where the two sides are equal; the inequality is strict if it is not included."]],
          {
            title: "Inequalities",
            skill: "Solve like equations, remembering to flip the sign when multiplying or dividing by a negative.",
            sections: [
              ["Solving inequalities", "Linear inequalities are solved with the same inverse operations as equations, but the answer is a range of values, not a single number. The critical rule: multiplying or dividing both sides by a **negative** number reverses the inequality symbol — $-2x < 8$ becomes $x > -4$, not $x < -4$."],
              ["Graphing on a number line", "Use an **open circle** for $<$ or $>$ (boundary not included) and a **closed circle** for $\\le$ or $\\ge$ (boundary included), then shade the ray in the direction of the solutions. For $x \\le 3$, shade left from a closed circle at $3$; for $x > -1$, shade right from an open circle at $-1$."],
            ],
            formulas: [
              ["Sign flip rule", "Multiply or divide by a negative $\\Rightarrow$ reverse $<$ and $>$"],
              ["Boundary", "Closed circle for $\\le, \\ge$; open circle for $<, >$"],
            ],
            worked: {
              problem: "Solve $-3x + 6 \\ge 15$ and describe its graph.",
              solution: "Subtract $6$: $-3x \\ge 9$. Divide by $-3$ and flip: $x \\le -3$. Graph: closed circle at $-3$, shaded left.",
            },
            questions: [
              mcq("foundation", 1, "Solve $x - 5 < 8$.", [["a", "$x < 13$"], ["b", "$x > 13$"], ["c", "$x < 3$"], ["d", "$x > 3$"]], "a",
                [P("method", "Inverse operations", "Add $5$ to both sides.")],
                [S("$x < 8 + 5 = 13$.", 1, "M")], "**(a)** $x < 13$", ["Subtracting instead of adding $5$."]),
              mcq("core", 2, "Solve $-2x + 4 \\le 10$.", [["a", "$x \\le -3$"], ["b", "$x \\ge -3$"], ["c", "$x \\le 3$"], ["d", "$x \\ge 3$"]], "b",
                [P("rule", "Sign flip", "Dividing by $-2$ reverses $\\le$ to $\\ge$.")],
                [S("Subtract $4$: $-2x \\le 6$. Divide by $-2$ and flip: $x \\ge -3$.", 1, "M"), S("Correct flipped inequality.", 1, "B")], "**(b)** $x \\ge -3$", ["Forgetting to flip the sign after dividing by $-2$."]),
              num("core", 2, "For the inequality $3x - 7 > 8$, what is the smallest integer value of $x$ that works?", [{ label: "Smallest $x$", answer: 6 }],
                [P("method", "Solve then test integers", "$3x > 15$, so $x > 5$.")],
                [S("$x > 5$ means the smallest integer is $6$.", 1, "M"), S("Correct integer.", 1, "B")], "$x = 6$", ["Answering $5$, which does not satisfy the strict inequality."]),
              op("challenge", 3, "A phone plan costs $\\$20$ plus $\\$0.10$ per text. You can spend at most $\\$35$. Write and solve an inequality for the number of texts $t$, then state whether $t = 160$ is allowed.",
                [P("model", "Write the inequality", "$20 + 0.10t \\le 35$."), P("skill", "Interpret", "Check the boundary case.")],
                [S("$0.10t \\le 15$, so $t \\le 150$.", 1, "M"), S("The plan allows at most $150$ texts.", 1, "M"), S("$t = 160$ gives cost $20 + 16 = \\$36 > \\$35$ — not allowed.", 1, "B")], "$t \\le 150$; $160$ texts is not allowed", ["Using $<$ instead of $\\le$ and excluding exactly $150$."]),
            ],
          }),
      ],
    },
    {
      id: "m9-u2",
      title: "Functions and Linear Graphs",
      description: "Identify functions, find domain and range, compute slope, and write equations of lines.",
      lessons: [
        lesson("functions-domain-range", "Functions, Domain and Range", "I CAN identify functions and state their domain and range.", ["F-IF.1", "F-IF.3"],
          [["Relation", "Any set of ordered pairs $(x, y)$."], ["Function", "A relation where each input $x$ has exactly one output $y$."], ["Domain", "The set of all input values $x$."], ["Range", "The set of all output values $y$."], ["Vertical line test", "A graph represents a function if no vertical line crosses it more than once."]],
          {
            title: "Functions",
            skill: "Test whether a relation is a function and identify domain and range.",
            sections: [
              ["What makes a function", "A **function** assigns exactly one output to each input. In ordered pairs, no two pairs may share the same $x$ with different $y$ values. On a graph, the **vertical line test** checks this: if any vertical line hits the graph twice, it is not a function. A circle fails the test; a parabola $y = x^2$ passes."],
              ["Domain and range", "The **domain** is every $x$-value that appears (or is allowed), and the **range** is every $y$-value produced. For $y = x^2$ with no restrictions, the domain is all real numbers and the range is $y \\ge 0$. For a table of pairs, list the $x$-values for domain and $y$-values for range, removing duplicates."],
            ],
            formulas: [
              ["Function test", "Each input $x$ has exactly one output $y$"],
              ["Domain / range", "Domain = set of inputs; range = set of outputs"],
            ],
            worked: {
              problem: "Is $\\{(1, 3), (2, 5), (3, 3), (4, 7)\\}$ a function? State its domain and range.",
              solution: "Yes — each $x$ appears once. Domain: $\\{1, 2, 3, 4\\}$. Range: $\\{3, 5, 7\\}$ ($3$ repeats, so it is listed once).",
            },
            questions: [
              mcq("foundation", 1, "Which relation is a function?", [["a", "$\\{(1,2),(1,3)\\}$"], ["b", "$\\{(1,2),(2,3),(3,2)\\}$"], ["c", "$x^2 + y^2 = 25$"], ["d", "A vertical line"]], "b",
                [P("definition", "Function", "Each input has exactly one output.")],
                [S("Option (b) has distinct $x$-values. (a) repeats $x=1$; (c) fails the vertical line test; (d) is not a function.", 1, "A")], "**(b)** $\\{(1,2),(2,3),(3,2)\\}$", ["Thinking repeated $y$-values break the function rule — repeated $x$-values do."]),
              mcq("core", 1, "What is the domain of $y = \\sqrt{x - 2}$?", [["a", "$x \\ge 0$"], ["b", "$x \\ge 2$"], ["c", "$x \\le 2$"], ["d", "All real numbers"]], "b",
                [P("rule", "Square roots", "The radicand must be non-negative.")],
                [S("$x - 2 \\ge 0$ requires $x \\ge 2$.", 1, "B")], "**(b)** $x \\ge 2$", ["Ignoring the restriction inside the radical."]),
              op("core", 2, "A function has ordered pairs $(2, 5), (4, 9), (6, 13)$. State its domain and range.",
                [P("definition", "Domain and range", "Domain = inputs $x$; range = outputs $y$. ")],
                [S("Domain is $\\{2, 4, 6\\}$ — the $x$-values.", 1, "M"), S("Range is $\\{5, 9, 13\\}$ — the $y$-values.", 1, "B")], "Domain $\\{2,4,6\\}$, range $\\{5,9,13\\}$", ["Listing the $x$-values as the range."]),
              op("challenge", 3, "A parking garage charges $\\$3$ for the first hour and $\\$2$ for each additional hour. Write the cost $C$ as a function of hours $h$ for $h \\ge 1$, state its domain and range, and find the cost of $4.5$ hours.",
                [P("model", "Piecewise/linear model", "$C = 3 + 2(h-1) = 2h + 1$ for $h \\ge 1$."), P("skill", "Domain and range", "Domain $h \\ge 1$; range $C \\ge 3$.")],
                [S("Cost function: $C = 2h + 1$ for $h \\ge 1$.", 1, "M"), S("Domain: $h \\ge 1$; range: $C \\ge 3$ (cost never below $\\$3$).", 1, "M"), S("$C(4.5) = 2(4.5) + 1 = \\$10$.", 1, "B")], "$C = 2h+1$, domain $h\\ge1$, range $C\\ge3$, cost \\$10", ["Charging $\\$2 \\times 4.5$ and forgetting the first-hour premium."]),
            ],
          }),
        lesson("slope-rate-of-change", "Slope and Rate of Change", "I CAN calculate and interpret slope as a rate of change.", ["F-IF.6", "8.EE.B.5"],
          [["Slope", "The rate of change of a linear function: rise over run, $m = \\frac{y_2 - y_1}{x_2 - x_1}$."], ["Rate of change", "How quickly one quantity changes relative to another, such as miles per hour."], ["Positive slope", "Line rises left to right."], ["Negative slope", "Line falls left to right."], ["Zero slope", "Horizontal line; constant output."]],
          {
            title: "Slope",
            skill: "Compute slope from two points, a graph, or a table and interpret it as a rate.",
            sections: [
              ["The slope formula", "Slope measures steepness: $m = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$. From points $(1, 3)$ and $(4, 9)$: $m = \\frac{9-3}{4-1} = \\frac{6}{3} = 2$. The order of subtraction must be consistent — swapping both pairs gives the same answer."],
              ["Slope as rate of change", "In a real context, slope is a unit rate with meaning. A line showing distance vs time with slope $60$ means $60$ miles per hour. A negative slope means the quantity decreases; zero slope means it stays constant."],
            ],
            formulas: [
              ["Slope", "$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{rise}}{\\text{run}}$"],
              ["From equation", "$y = mx + b$ has slope $m$"],
            ],
            worked: {
              problem: "Find the slope of the line through $(-2, 5)$ and $(3, -5)$ and interpret it.",
              solution: "$m = \\frac{-5 - 5}{3 - (-2)} = \\frac{-10}{5} = -2$. The line falls $2$ units for every $1$ unit it moves right.",
            },
            questions: [
              mcq("foundation", 1, "What is the slope of the line through $(0, 1)$ and $(3, 7)$?", [["a", "$2$"], ["b", "$3$"], ["c", "$6$"], ["d", "$\\frac{1}{2}$"]], "a",
                [P("formula", "Slope", "$m = \\frac{7-1}{3-0} = \\frac{6}{3} = 2$.")],
                [S("Rise $6$, run $3$, slope $= 2$.", 1, "M")], "**(a)** $2$", ["Subtracting in mismatched order gives $-2$ — keep pairs consistent."]),
              mcq("core", 1, "A line has equation $y = -4x + 9$. What is its slope?", [["a", "$9$"], ["b", "$-4$"], ["c", "$4$"], ["d", "$0$"]], "b",
                [P("definition", "Slope-intercept form", "$y = mx + b$, slope is $m$.")],
                [S("Slope is the coefficient of $x$: $-4$.", 1, "A")], "**(b)** $-4$", ["Picking the $y$-intercept $9$."]),
              num("core", 2, "A table shows $(1, 8), (3, 14), (5, 20)$. What is the slope?", [{ label: "Slope", answer: 3 }],
                [P("formula", "Slope from table", "$m = \\frac{14-8}{3-1} = \\frac{6}{2} = 3$.")],
                [S("Using any two rows: $\\frac{6}{2} = 3$ (constant across the table).", 1, "M"), S("Correct slope.", 1, "B")], "$m = 3$", ["Using values that are not aligned by row."]),
              op("challenge", 3, "A bike courier's distance from the depot is modeled by $d = 5 - 0.5t$ where $t$ is hours and $d$ is miles. Interpret the slope, find when the courier reaches the depot, and explain what a steeper negative slope would mean.",
                [P("interpret", "Slope meaning", "Slope $-0.5$ means distance decreases $0.5$ mile per hour — speed toward depot."), P("skill", "Solve", "Set $d = 0$.")],
                [S("Slope $-0.5$: the courier approaches the depot at $0.5$ mph.", 1, "M"), S("$0 = 5 - 0.5t$ gives $t = 10$ hours.", 1, "M"), S("A steeper negative slope means a faster approach — greater speed toward the depot.", 1, "B")], "Slope $-0.5$ mph toward depot; arrives at $t=10$ h; steeper = faster", ["Interpreting the slope as total distance rather than rate."]),
            ],
          }),
        lesson("equations-of-lines", "Writing Equations of Lines", "I CAN write the equation of a line in slope-intercept and point-slope form.", ["F-LE.2", "F-IF.7"],
          [["Slope-intercept form", "$y = mx + b$ where $m$ is slope and $b$ is the $y$-intercept."], ["Point-slope form", "$y - y_1 = m(x - x_1)$ using any point $(x_1, y_1)$ on the line."], ["$y$-intercept", "The point where the line crosses the $y$-axis, $(0, b)$."], ["Parallel lines", "Lines with equal slopes that never intersect."], ["Perpendicular lines", "Lines whose slopes are negative reciprocals, $m_1 m_2 = -1$."]],
          {
            title: "Equations of lines",
            skill: "Build a line's equation from slope and a point, or from two points.",
            sections: [
              ["Slope-intercept form", "With slope $m$ and $y$-intercept $b$, the equation is $y = mx + b$. Given slope $3$ and intercept $-2$: $y = 3x - 2$. If you know slope and a different point, substitute the point to solve for $b$."],
              ["Point-slope form and two points", "$y - y_1 = m(x - x_1)$ works with any point on the line. Given two points, first compute $m = \\frac{y_2-y_1}{x_2-x_1}$, then substitute one point into point-slope form and simplify. Parallel lines share the same slope; perpendicular slopes multiply to $-1$."],
            ],
            formulas: [
              ["Slope-intercept", "$y = mx + b$"],
              ["Point-slope", "$y - y_1 = m(x - x_1)$"],
              ["Perpendicular slopes", "$m_1 m_2 = -1$"],
            ],
            worked: {
              problem: "Write the equation of the line through $(2, 5)$ and $(6, 13)$.",
              solution: "$m = \\frac{13-5}{6-2} = 2$. Using $(2,5)$: $y - 5 = 2(x - 2)$, so $y = 2x + 1$.",
            },
            questions: [
              mcq("foundation", 1, "What is the equation of a line with slope $4$ and $y$-intercept $-1$?", [["a", "$y = 4x - 1$"], ["b", "$y = -x + 4$"], ["c", "$y = x + 4$"], ["d", "$y = 4x + 1$"]], "a",
                [P("formula", "Slope-intercept", "$y = mx + b$.")],
                [S("$m = 4$, $b = -1$: $y = 4x - 1$.", 1, "A")], "**(a)** $y = 4x - 1$", ["Swapping slope and intercept."]),
              mcq("core", 2, "A line passes through $(1, 2)$ with slope $3$. Which equation represents it?", [["a", "$y = 3x - 1$"], ["b", "$y = 3x + 2$"], ["c", "$y = 2x + 3$"], ["d", "$y = 3x + 5$"]], "a",
                [P("method", "Solve for $b$", "$2 = 3(1) + b$ gives $b = -1$.")],
                [S("Point-slope: $y - 2 = 3(x - 1)$ gives $y = 3x - 1$.", 1, "M"), S("Correct equation.", 1, "B")], "**(a)** $y = 3x - 1$", ["Using the point's $y$-value as $b$ without checking."]),
              num("core", 2, "Find the slope of the line perpendicular to $y = \\frac{2}{3}x + 5$.", [{ label: "Slope", answer: -1.5 }],
                [P("rule", "Perpendicular slopes", "Negative reciprocal: $-\\frac{3}{2}$.")],
                [S("Negative reciprocal of $\\frac{2}{3}$ is $-\\frac{3}{2} = -1.5$.", 1, "M"), S("Correct value.", 1, "B")], "$m = -\\frac{3}{2}$", ["Using the same slope or forgetting to flip the sign."]),
              op("challenge", 3, "Line $A$ passes through $(0, 1)$ and $(3, 7)$. Line $B$ is parallel to $A$ and passes through $(2, 0)$. Write both equations and find where they would intersect if extended — explain why they don't actually intersect.",
                [P("method", "Build equations", "Slope of $A$: $m = \\frac{7-1}{3-0} = 2$, so $A: y = 2x + 1$."), P("skill", "Parallel reasoning", "Parallel lines share slope but different intercepts.")],
                [S("Line $A$: $y = 2x + 1$.", 1, "M"), S("Line $B$: slope $2$ through $(2,0)$ gives $y = 2x - 4$.", 1, "M"), S("They never intersect: same slope means the lines stay $5$ units apart vertically — parallel lines have no solution to $2x+1 = 2x-4$.", 1, "B")], "$A: y=2x+1$, $B: y=2x-4$; parallel, no intersection", ["Thinking parallel lines intersect at one point."]),
            ],
          }),
      ],
    },
    {
      id: "m9-u3",
      title: "Systems of Equations and Exponents",
      description: "Solve systems by substitution and elimination, and apply exponent laws to simplify expressions and model exponential growth.",
      lessons: [
        lesson("systems-substitution", "Systems of Equations: Substitution", "I CAN solve a system of two linear equations by substitution.", ["A-REI.11", "A-REI.6"],
          [["System of equations", "Two or more equations with the same variables; a solution satisfies all of them."], ["Substitution", "Solve one equation for a variable, then substitute into the other."], ["Consistent system", "A system with exactly one solution."], ["Inconsistent system", "A system with no solution — parallel lines."], ["Dependent system", "A system with infinitely many solutions — same line."]],
          {
            title: "Substitution method",
            skill: "Isolate a variable, substitute, solve, then back-substitute.",
            sections: [
              ["When substitution works best", "Substitution is easiest when one equation already isolates a variable or has a coefficient of $1$. Solve that equation for the variable, substitute the expression into the other equation, solve for the remaining variable, then back-substitute to find the first."],
              ["Checking the solution", "A system's solution is an ordered pair $(x, y)$ that makes **both** equations true. Always verify in both original equations — an algebra slip can produce a pair that satisfies only one."],
            ],
            formulas: [
              ["Substitution", "Solve for one variable, plug into the other equation"],
              ["Solution check", "The pair must satisfy every equation in the system"],
            ],
            worked: {
              problem: "Solve $y = 2x + 1$ and $3x + y = 11$.",
              solution: "Substitute: $3x + (2x + 1) = 11$, so $5x + 1 = 11$, $x = 2$. Then $y = 2(2) + 1 = 5$. Solution: $(2, 5)$. Check: $3(2)+5 = 11$. ✓",
            },
            questions: [
              mcq("foundation", 1, "The system $y = x + 2$ and $y = 2x - 1$ has solution ___.", [["a", "$(5, 3)$"], ["b", "$(3, 5)$"], ["c", "$(1, 3)$"], ["d", "$(3, 1)$"]], "b",
                [P("method", "Substitute", "Set the two expressions for $y$ equal and solve.")],
                [S("$x + 2 = 2x - 1$ gives $x = 3$, then $y = 3 + 2 = 5$. Check: $2(3) - 1 = 5$ ✓.", 1, "M")], "**(b)** $(3, 5)$", ["Not checking the pair in both equations."]),
              mcq("core", 2, "Solve $x + y = 7$ and $x - y = 1$.", [["a", "$(3, 4)$"], ["b", "$(4, 3)$"], ["c", "$(2, 5)$"], ["d", "$(5, 2)$"]], "b",
                [P("method", "Add equations", "Adding eliminates $y$: $2x = 8$.")],
                [S("$2x = 8$, $x = 4$; then $y = 7 - 4 = 3$. Solution $(4, 3)$.", 1, "M"), S("Verified: $4 + 3 = 7$ and $4 - 3 = 1$.", 1, "B")], "**(b)** $(4, 3)$", ["Substituting incorrectly after finding $x$."]),
              num("core", 2, "Solve $2x + y = 10$ and $x = y - 1$. Enter $x$ and $y$.", [{ label: "$x$", answer: 3 }, { label: "$y$", answer: 4 }],
                [P("method", "Substitute", "$2(y-1) + y = 10$ gives $3y = 12$.")],
                [S("Substitute $x = y - 1$: $2(y-1) + y = 10$, so $3y = 12$ and $y = 4$, giving $x = 3$. Check: $2(3) + 4 = 10$ ✓.", 1, "M"), S("Correct pair $(3,4)$.", 1, "B")], "$(3, 4)$", ["Arithmetic slip when combining like terms."]),
              op("challenge", 3, "A theater sells adult tickets for $\\$12$ and child tickets for $\\$7$. One night $240$ tickets sold for $\\$2{,}310$. How many of each were sold? Set up and solve a system.",
                [P("model", "Define variables", "$a$ = adult tickets, $c$ = child tickets."), P("method", "System", "$a + c = 240$; $12a + 7c = 2310$.")],
                [S("From first equation $a = 240 - c$; substitute: $12(240 - c) + 7c = 2310$.", 1, "M"), S("$2880 - 5c = 2310 \\Rightarrow c = 114$, so $a = 126$.", 1, "M"), S("Check: $126 + 114 = 240$ and $12(126) + 7(114) = 1512 + 798 = 2310$ ✓.", 1, "B")], "126 adult, 114 child tickets", ["Swapping the two ticket prices in the revenue equation."]),
            ],
          }),
        lesson("systems-elimination", "Systems of Equations: Elimination", "I CAN solve systems by eliminating a variable through adding or subtracting equations.", ["A-REI.11"],
          [["Elimination", "Adding or subtracting equations to cancel one variable."], ["Coefficient matching", "Multiplying an equation by a constant so a variable's coefficients are opposites or equal."], ["No solution", "The result $0 = \\text{nonzero}$ means the lines are parallel."], ["Infinitely many", "The result $0 = 0$ means the equations describe the same line."]],
          {
            title: "Elimination method",
            skill: "Multiply equations to align coefficients, then add or subtract to eliminate.",
            sections: [
              ["Aligning coefficients", "If coefficients of a variable are already opposites (e.g., $y$ and $-y$), just add the equations. Otherwise multiply one or both equations by constants so the coefficients become opposites, then add. For $2x + 3y = 12$ and $4x - 3y = 6$, adding eliminates $y$ directly: $6x = 18$."],
              ["Special cases", "If elimination produces $0 = \\text{nonzero}$ (like $0 = 5$), the system is **inconsistent** — parallel lines, no solution. If it produces $0 = 0$, the equations are **dependent** — the same line, infinitely many solutions."],
            ],
            formulas: [
              ["Elimination", "Multiply to match coefficients, then add or subtract"],
              ["$0 = \\text{nonzero}$", "Inconsistent — no solution; $0 = 0$ — dependent, infinite solutions"],
            ],
            worked: {
              problem: "Solve $3x + 2y = 16$ and $5x - 2y = 8$.",
              solution: "Add the equations: $8x = 24$, so $x = 3$. Substitute: $3(3) + 2y = 16 \\Rightarrow 2y = 7 \\Rightarrow y = 3.5$. Solution $(3, 3.5)$.",
            },
            questions: [
              mcq("foundation", 1, "To eliminate $y$ in $2x + 5y = 9$ and $4x - 5y = 3$, you should ___.", [["a", "add the equations"], ["b", "subtract the second from the first"], ["c", "multiply the first by $2$"], ["d", "divide both by $5$"]], "a",
                [P("rule", "Opposite coefficients", "$+5y$ and $-5y$ cancel when added.")],
                [S("The $y$-coefficients are already opposites, so adding eliminates $y$.", 1, "A")], "**(a)** add the equations", ["Multiplying when coefficients already match."]),
              mcq("core", 2, "Solve $x + y = 10$ and $2x - y = 5$.", [["a", "$(3, 7)$"], ["b", "$(5, 5)$"], ["c", "$(4, 6)$"], ["d", "$(6, 4)$"]], "b",
                [P("method", "Add to eliminate", "$3x = 15$.")],
                [S("$3x = 15 \\Rightarrow x = 5$; $y = 10 - 5 = 5$. Solution $(5, 5)$.", 1, "M"), S("Verified in both equations.", 1, "B")], "**(b)** $(5, 5)$", ["Adding $y$-terms with the same sign instead of cancelling."]),
              num("core", 2, "Solve $4x + 3y = 18$ and $2x + 3y = 10$. Enter $x$.", [{ label: "$x$", answer: 4 }],
                [P("method", "Subtract equations", "Subtracting eliminates $y$.")],
                [S("$(4x+3y)-(2x+3y) = 18-10 \\Rightarrow 2x = 8 \\Rightarrow x = 4$.", 1, "M"), S("Correct value; $y = 2$.", 1, "B")], "$x = 4$", ["Subtracting only part of the second equation."]),
              op("challenge", 3, "Solve $2x + 3y = 7$ and $4x + 6y = 14$. How many solutions does the system have and why?",
                [P("method", "Compare equations", "Second equation is exactly $2 \\times$ the first."), P("concept", "Dependent system", "Same line — infinitely many solutions.")],
                [S("The second equation equals twice the first, so both describe the same line.", 1, "M"), S("Elimination gives $0 = 0$, confirming dependence.", 1, "M"), S("Infinitely many solutions — every point on the line works.", 1, "B")], "Infinitely many solutions (dependent system)", ["Reporting one solution without checking the equations' relationship."]),
            ],
          }),
        lesson("exponent-laws", "Exponent Laws and Exponential Functions", "I CAN apply exponent laws and interpret exponential growth and decay.", ["8.EE.A.1", "F-LE.1", "F-IF.8"],
          [["Exponent", "The number of times a base is multiplied by itself: $a^n$ means $n$ factors of $a$."], ["Product rule", "$a^m \\cdot a^n = a^{m+n}$."], ["Power rule", "$(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$."], ["Quotient rule", "$\\frac{a^m}{a^n} = a^{m-n}$."], ["Exponential function", "A function of the form $f(x) = ab^x$ where $b > 0$, $b \\ne 1$."]],
          {
            title: "Exponents and exponential growth",
            skill: "Simplify expressions using exponent laws and interpret $ab^x$ models.",
            sections: [
              ["The laws", "When multiplying like bases, **add** exponents: $x^3 \\cdot x^4 = x^7$. When raising a power to a power, **multiply**: $(x^2)^5 = x^{10}$. For a quotient, **subtract**: $\\frac{x^8}{x^3} = x^5$. Any nonzero base to the $0$ power equals $1$, and $a^{-n} = \\frac{1}{a^n}$."],
              ["Exponential functions", "$f(x) = ab^x$ models growth when $b > 1$ and decay when $0 < b < 1$. Each step multiplies by $b$ — a $10\\%$ decay is $b = 0.9$, a tripling is $b = 3$. After $x$ periods the amount is $a \\cdot b^x$; e.g., $\\$100$ at $4\\%$ annual growth becomes $100(1.04)^x$ after $x$ years."],
            ],
            formulas: [
              ["Product / quotient", "$a^m a^n = a^{m+n}$; $\\frac{a^m}{a^n} = a^{m-n}$"],
              ["Power of a power", "$(a^m)^n = a^{mn}$; $(ab)^n = a^n b^n$"],
              ["Exponential model", "$f(x) = ab^x$; $b>1$ growth, $0<b<1$ decay"],
            ],
            worked: {
              problem: "Simplify $\\frac{(3x^2)^3 \\cdot x^4}{9x^8}$.",
              solution: "$(3x^2)^3 = 27x^6$. Then $27x^6 \\cdot x^4 = 27x^{10}$. Divide by $9x^8$: $\\frac{27}{9} x^{10-8} = 3x^2$.",
            },
            questions: [
              mcq("foundation", 1, "Simplify $x^5 \\cdot x^3$.", [["a", "$x^8$"], ["b", "$x^{15}$"], ["c", "$2x^8$"], ["d", "$x^2$"]], "a",
                [P("rule", "Product rule", "Add exponents for like bases.")],
                [S("$x^5 \\cdot x^3 = x^{5+3} = x^8$.", 1, "A")], "**(a)** $x^8$", ["Multiplying the exponents instead of adding."]),
              mcq("core", 2, "Simplify $(2x^3)^2 \\cdot x^4$.", [["a", "$4x^{10}$"], ["b", "$4x^{24}$"], ["c", "$8x^{10}$"], ["d", "$2x^{10}$"]], "a",
                [P("rules", "Power and product", "$(2x^3)^2 = 4x^6$; then $4x^6 \\cdot x^4 = 4x^{10}$.")],
                [S("Power rule gives $4x^6$; product rule gives $4x^{10}$.", 1, "M"), S("Correct simplification.", 1, "B")], "**(a)** $4x^{10}$", ["Squaring the exponent instead of multiplying by $2$."]),
              num("core", 2, "A population of $500$ bacteria triples every hour. How many bacteria after $4$ hours?", [{ label: "Population", answer: 40500 }],
                [P("model", "Exponential growth", "$P = 500 \\cdot 3^4$.")],
                [S("$3^4 = 81$; $500 \\times 81 = 40{,}500$.", 1, "M"), S("Correct value.", 1, "B")], "$40{,}500$ bacteria", ["Adding $4 \\times 3$ growth instead of compounding."]),
              op("challenge", 3, "A car worth $\\$18{,}000$ loses $15\\%$ of its value each year. Write an exponential model for its value $V$ after $t$ years, then find its value after $3$ years.",
                [P("model", "Decay factor", "$b = 1 - 0.15 = 0.85$."), P("method", "Evaluate", "$V = 18000(0.85)^t$.")],
                [S("Model: $V(t) = 18{,}000(0.85)^t$ — decay because $0 < 0.85 < 1$.", 1, "M"), S("After $3$ years: $V = 18{,}000 \\times 0.85^3$.", 1, "M"), S("$0.85^3 \\approx 0.614$; $18{,}000 \\times 0.614 \\approx \\$11{,}054$.", 1, "B")], "$V = 18000(0.85)^t$; $\\approx \\$11{,}054$ after $3$ years", ["Using $b = 0.15$ (the loss rate) instead of $0.85$ (what remains)."]),
            ],
          }),
      ],
    },
  ],
};

module.exports = { courses: [mathG9] };
