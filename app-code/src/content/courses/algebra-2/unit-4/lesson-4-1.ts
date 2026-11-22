import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "alg2-u4-lesson-4-1",
  code: "4-1",
  title: "Quadratic Functions in Vertex and Standard Form",
  goal: "I CAN interpret and convert quadratic functions in standard and vertex form, and use completing the square and the axis of symmetry to find a vertex and a maximum or minimum.",
  standards: ["HSF-IF.C.7a", "HSF-IF.C.8a"],
  vocabulary: [
    { term: "Quadratic function", definition: "A function that can be written as $f(x)=ax^2+bx+c$, where $a\\ne 0$; its graph is a parabola." },
    { term: "Standard form", definition: "The form $f(x)=ax^2+bx+c$, which makes the coefficients and the $y$-intercept visible." },
    { term: "Vertex form", definition: "The form $f(x)=a(x-h)^2+k$, which identifies the vertex $(h,k)$ directly." },
    { term: "Vertex", definition: "The turning point $(h,k)$ of a parabola; it is a minimum when it opens up and a maximum when it opens down." },
    { term: "Axis of symmetry", definition: "The vertical line through a parabola's vertex that divides its graph into mirror-image halves; in standard form it is $x=-\\frac{b}{2a}$." },
    { term: "Completing the square", definition: "A method for rewriting a quadratic by forming a perfect-square trinomial, allowing it to be expressed in vertex form." },
  ],
  concepts: [
    {
      id: "alg2-u4-vertex-and-features",
      title: "Vertex, symmetry, and extrema",
      skill: "Find a quadratic's vertex and axis of symmetry, then identify its maximum or minimum value from its leading coefficient.",
      lesson: {
        sections: [
          {
            heading: "Read the vertex from vertex form",
            body: "In $f(x)=a(x-h)^2+k$, the vertex is $(h,k)$ and the axis of symmetry is $x=h$. The horizontal coordinate is the value that makes the squared expression zero. The vertical coordinate is therefore the function's output at its turning point. The sign inside the parentheses matters: $x+4=x-(-4)$, so $f(x)=2(x+4)^2-3$ has vertex $(-4,-3)$.",
          },
          {
            heading: "Use the leading coefficient",
            body: "If $a>0$, the parabola opens upward and its vertex is its minimum. If $a<0$, it opens downward and its vertex is its maximum. The extreme **value** is the vertex's $y$-coordinate; the input where it occurs is the vertex's $x$-coordinate. State both clearly when describing an extremum.",
          },
          {
            heading: "Find symmetry from standard form",
            body: "For $f(x)=ax^2+bx+c$, the axis of symmetry is $x=-\\frac{b}{2a}$. Substitute this $x$-value into $f$ to find the vertex's $y$-coordinate. The constant $c$ gives the $y$-intercept, but does not by itself give the vertex. Inputs equally far from the axis have equal outputs.",
          },
        ],
        keyFormulas: [
          { name: "Axis of symmetry", statement: "For $f(x)=ax^2+bx+c$, the axis is $x=-\\frac{b}{2a}$ and the vertex is $\\left(-\\frac{b}{2a},f\\left(-\\frac{b}{2a}\\right)\\right)$." },
          { name: "Vertex form features", statement: "$f(x)=a(x-h)^2+k$ has vertex $(h,k)$ and axis $x=h$; $a>0$ gives a minimum and $a<0$ gives a maximum." },
        ],
        workedExample: {
          problem: "For $f(x)=-2x^2+8x+1$, find the axis, vertex, and maximum value.",
          solution: "Here $a=-2$ and $b=8$, so the axis is $x=-\\frac{8}{2(-2)}=2$. Then $f(2)=-2(2)^2+8(2)+1=9$. The vertex is $(2,9)$. Since $a<0$, the parabola opens downward; its maximum value is $9$, attained at $x=2$.",
        },
      },
      questions: [
        {
          id: "alg2-u4-vf-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The function is $g(x)=3(x-2)^2-5$. Which statement correctly identifies its vertex and minimum value?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Vertex $(2,5)$; maximum value $5$" },
            { id: "b", text: "Vertex $(2,-5)$; minimum value $-5$" },
            { id: "c", text: "Vertex $(-2,-5)$; minimum value $-5$" },
            { id: "d", text: "Vertex $(-5,2)$; minimum value $2$" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vertex form", statement: "$a(x-h)^2+k$ has vertex $(h,k)$." },
              { kind: "property", name: "Opening and extremum", statement: "If $a>0$, the parabola opens upward and its vertex is its minimum." },
            ],
            steps: [
              { reasoning: "Match $3(x-2)^2-5$ to $a(x-h)^2+k$; the vertex coordinates are $h=2$ and $k=-5$.", working: "(h,k)=(2,-5)", marks: 1, markCode: "B" },
              { reasoning: "The coefficient $3$ is positive, so the vertex is a minimum and its value is the $y$-coordinate $-5$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(a)** Vertex $(2,-5)$; minimum value $-5$.",
            commonErrors: ["Reading the sign inside $(x-2)$ as a negative vertex coordinate.", "Calling $x=2$ the minimum value rather than the location of the minimum."],
          },
        },
        {
          id: "alg2-u4-vf-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $f(x)=x^2-6x+4$, enter the axis of symmetry as a number, followed by the vertex's $y$-coordinate.",
          response: { type: "numeric", parts: [{ label: "Axis value $x$", answer: 3 }, { label: "Vertex $y$-coordinate", answer: -5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Axis of symmetry", statement: "For $ax^2+bx+c$, the axis of symmetry is $x=-\\frac{b}{2a}$." },
              { kind: "principle", name: "Vertex on axis", statement: "The vertex lies on the axis; evaluate the function at the axis's $x$-value to find its $y$-coordinate." },
            ],
            steps: [
              { reasoning: "Identify $a=1$ and $b=-6$, then apply the axis formula.", working: "x=-\\frac{-6}{2(1)}=3", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x=3$ into the function to find the vertex output.", working: "f(3)=3^2-6(3)+4=9-18+4=-5", marks: 1, markCode: "M" },
              { reasoning: "The vertex is $(3,-5)$; report the requested axis value and vertex output.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3, -5$; the axis is $x=3$ and the vertex is $(3,-5)$.",
            commonErrors: ["Using $b/(2a)$ instead of $-b/(2a)$.", "Reporting the axis value but not evaluating $f(3)$."],
          },
        },
        {
          id: "alg2-u4-vf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A quadratic has vertex $(4,7)$ and opens downward. Explain why its greatest value is $7$, identify where it occurs, and state its axis of symmetry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vertex", statement: "The vertex $(h,k)$ is the turning point of a parabola, and its axis of symmetry is $x=h$." },
              { kind: "property", name: "Downward-opening parabola", statement: "A quadratic that opens downward has a maximum at its vertex." },
            ],
            steps: [
              { reasoning: "Use the vertex's horizontal coordinate for the axis and the location of the extremum.", working: "x=4", marks: 1, markCode: "B" },
              { reasoning: "The $y$-coordinate of the vertex gives the output at the turning point.", working: "y=7", marks: 1, markCode: "B" },
              { reasoning: "Because the parabola opens downward, the turning point is the greatest output, not the least.", marks: 1, markCode: "R" },
              { reasoning: "State the maximum value and the input at which it occurs distinctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The axis is $x=4$. The maximum value is $7$, and it occurs at $x=4$.",
            commonErrors: ["Calling $4$ the maximum value; it is the input where the maximum occurs."],
            examinerNote: "Award the reasoning mark only when the response connects downward opening to a maximum at the vertex.",
          },
        },
        {
          id: "alg2-u4-vf-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A school club sells T-shirts at a price of $x$ dollars each. After accounting for the cost of printing and the expected number of buyers at each price, the weekly profit in dollars is modeled by\n\n$$P(x) = -5x^2 + 150x - 1000$$",
          parts: [
            { label: "a", prompt: "Find the equation of the axis of symmetry and state the price that maximizes profit.", marks: 2 },
            { label: "b", prompt: "Find the maximum weekly profit and explain how you know the vertex is a maximum.", marks: 2 },
            { label: "c", prompt: "The club breaks even when $P(x) = 0$. Find both break-even prices.", marks: 2 },
            { label: "d", prompt: "The club considers prices of $\\$12$ and $\\$18$. Show that they give the same profit, state that profit, and explain why this happens.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Price for maximum profit", answer: 15, unit: "dollars" },
              { label: "(b) Maximum profit", answer: 125, unit: "dollars" },
              { label: "(c) Lower break-even price", answer: 10, unit: "dollars" },
              { label: "(c) Higher break-even price", answer: 20, unit: "dollars" },
              { label: "(d) Profit at $\\$12$ and $\\$18$", answer: 80, unit: "dollars" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Axis of symmetry", statement: "For $ax^2+bx+c$, the axis of symmetry is $x=-\\dfrac{b}{2a}$ and the vertex lies on it." },
              { kind: "property", name: "Opening and extremum", statement: "If $a<0$ the parabola opens downward and its vertex is the maximum point." },
              { kind: "property", name: "Symmetry", statement: "Inputs equally far from the axis of symmetry give equal outputs." },
            ],
            steps: [
              { part: "a", reasoning: "Identify $a=-5$ and $b=150$, then apply the axis formula.", working: "x=-\\frac{150}{2(-5)}=15", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The vertex lies on the axis, so the profit-maximizing price is $\\$15$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Evaluate the profit at the vertex.", working: "P(15)=-5(225)+150(15)-1000=-1125+2250-1000=125", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Since $a=-5<0$ the parabola opens downward, so the vertex is a maximum: the greatest weekly profit is $\\$125$.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Set the profit to zero and divide by $-5$ to simplify.", working: "-5x^2+150x-1000=0 \\implies x^2-30x+200=0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Factor and apply the zero product property.", working: "(x-10)(x-20)=0 \\implies x=10 \\text{ or } x=20", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Evaluate the profit at $x=12$.", working: "P(12)=-5(144)+150(12)-1000=-720+1800-1000=80", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate the profit at $x=18$.", working: "P(18)=-5(324)+150(18)-1000=-1620+2700-1000=80", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Both prices are $3$ dollars from the axis $x=15$ ($15-3=12$, $15+3=18$), and a parabola gives equal outputs at inputs equally far from its axis.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $x=15$; a price of $\\$15$. (b) Maximum profit $\\$125$ (parabola opens downward). (c) $\\$10$ and $\\$20$. (d) $P(12)=P(18)=\\$80$, because $12$ and $18$ are symmetric about $x=15$.",
            commonErrors: [
              "Using $b/(2a)$ instead of $-b/(2a)$, giving $x=-15$.",
              "Reporting $15$ as the maximum profit rather than the price at which it occurs.",
              "Forgetting to divide the constant $-1000$ by $-5$ when simplifying the break-even equation.",
            ],
          },
        },
      ],
    },
    {
      id: "alg2-u4-converting-forms",
      title: "Converting forms by completing the square",
      skill: "Rewrite a quadratic between standard and vertex forms and explain the role of completing the square.",
      lesson: {
        sections: [
          {
            heading: "Expand vertex form to standard form",
            body: "Use the square of a binomial: $(x-h)^2=x^2-2hx+h^2$. Multiply by $a$, then combine the constant $ah^2+k$. This direction is usually direct and provides a check that the vertex form and standard form describe the same function.",
          },
          {
            heading: "Complete the square",
            body: "To rewrite $ax^2+bx+c$ in vertex form, factor $a$ from the quadratic and linear terms: $a\\left(x^2+\\frac ba x\\right)+c$. Add and subtract the square of half the coefficient of $x$ inside the parentheses, $\\left(\\frac{b}{2a}\\right)^2$. Keep the expression balanced: when this square is added inside parentheses multiplied by $a$, account for the resulting amount outside as well. Then factor the perfect-square trinomial.",
          },
          {
            heading: "Find the vertex and check",
            body: "After completing the square, the result has form $a(x-h)^2+k$. Read the vertex as $(h,k)$, remembering that the sign inside the parentheses is opposite the vertex's $x$-coordinate. Expanding the final form back to $ax^2+bx+c$ is a reliable check, especially for negative leading coefficients.",
          },
        ],
        keyFormulas: [
          { name: "Complete-square identity", statement: "$x^2+px+\\left(\\frac p2\\right)^2=\\left(x+\\frac p2\\right)^2$." },
          { name: "Standard to vertex form", statement: "$ax^2+bx+c=a\\left(x+\\frac{b}{2a}\\right)^2+c-\\frac{b^2}{4a}$." },
        ],
        workedExample: {
          problem: "Write $2x^2+12x+7$ in vertex form and state its vertex.",
          solution: "Factor $2$ from the first two terms: $2(x^2+6x)+7$. Half of $6$ is $3$, and its square is $9$. Add and subtract $9$ inside the parentheses: $2[(x^2+6x+9)-9]+7=2(x+3)^2-18+7=2(x+3)^2-11$. The vertex form is $2(x+3)^2-11$, so the vertex is $(-3,-11)$.",
        },
      },
      questions: [
        {
          id: "alg2-u4-cf-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Expand $f(x)=2(x+3)^2-1$ into standard form. Which answer is correct?",
          response: { type: "mcq", choices: [
            { id: "a", text: "$2x^2+12x+17$" },
            { id: "b", text: "$2x^2-12x+17$" },
            { id: "c", text: "$2x^2+12x+7$" },
            { id: "d", text: "$2x^2+6x+17$" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [
              { kind: "law", name: "Square of a binomial", statement: "$(x+p)^2=x^2+2px+p^2$." },
              { kind: "property", name: "Distributive property", statement: "Multiply each term in a sum by the outside factor, then combine constants." },
            ],
            steps: [
              { reasoning: "Expand the binomial square before multiplying by $2$.", working: "(x+3)^2=x^2+6x+9", marks: 1, markCode: "M" },
              { reasoning: "Distribute the factor and combine the constant terms.", working: "2(x^2+6x+9)-1=2x^2+12x+18-1=2x^2+12x+17", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $2x^2+12x+17$.",
            commonErrors: ["Failing to multiply the middle term by $2$.", "Subtracting $1$ from the wrong term."],
          },
        },
        {
          id: "alg2-u4-cf-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Complete the square to write $x^2+8x+3$ in vertex form. Enter the vertex's coordinates as two numbers in either order.",
          response: { type: "numeric", parts: [{ label: "Vertex coordinate 1", answer: -4 }, { label: "Vertex coordinate 2", answer: -13 }], unordered: true },
          markscheme: {
            principles: [
              { kind: "law", name: "Completing the square", statement: "$x^2+px+\\left(\\frac p2\\right)^2=(x+\\frac p2)^2$." },
              { kind: "definition", name: "Vertex form", statement: "$a(x-h)^2+k$ has vertex $(h,k)$." },
            ],
            steps: [
              { reasoning: "Take half of the coefficient of $x$ and square it.", working: "\\left(\\frac{8}{2}\\right)^2=16", marks: 1, markCode: "M" },
              { reasoning: "Add and subtract $16$ to keep the expression unchanged, then factor the trinomial square.", working: "x^2+8x+3=(x^2+8x+16)-16+3=(x+4)^2-13", marks: 1, markCode: "M" },
              { reasoning: "Read $(x+4)^2$ as $(x-(-4))^2$ and identify the vertical shift.", working: "(h,k)=(-4,-13)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vertex form $(x+4)^2-13$; vertex $(-4,-13)$.",
            commonErrors: ["Using $4$ rather than $-4$ as the vertex's $x$-coordinate.", "Adding $16$ without subtracting it, changing the function."],
          },
        },
        {
          id: "alg2-u4-cf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Rewrite $-2x^2+8x+1$ in vertex form by completing the square. Then state the vertex and maximum value.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "law", name: "Completing the square", statement: "$x^2+px+\\left(\\frac p2\\right)^2=(x+\\frac p2)^2$." },
              { kind: "property", name: "Extremum from leading coefficient", statement: "A quadratic with negative leading coefficient opens downward and has a maximum at its vertex." },
            ],
            steps: [
              { reasoning: "Factor the leading coefficient from the quadratic and linear terms, preserving the constant outside.", working: "-2(x^2-4x)+1", marks: 1, markCode: "M" },
              { reasoning: "Half of $-4$ is $-2$; add and subtract its square inside the parentheses.", working: "-2[(x^2-4x+4)-4]+1", marks: 1, markCode: "M" },
              { reasoning: "Factor the square and simplify the constant term to obtain vertex form.", working: "-2(x-2)^2+8+1=-2(x-2)^2+9", marks: 1, markCode: "A" },
              { reasoning: "Read the vertex and use the negative leading coefficient to identify the maximum.", working: "(h,k)=(2,9)", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Vertex form $-2(x-2)^2+9$; vertex $(2,9)$; maximum value $9$ at $x=2$.",
            commonErrors: ["Forgetting that multiplying the added $4$ by $-2$ contributes $-8$ inside the regrouping, so it must become $+8$ outside.", "Identifying $2$ as the maximum output instead of the input where it occurs."],
            examinerNote: "Equivalent balanced completing-the-square work earns credit if it reaches the stated vertex form.",
          },
        },
        {
          id: "alg2-u4-cf-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A decorative fountain shoots a jet of water from a nozzle. Taking $x$ as the horizontal distance in meters from the nozzle, the height of the water above the pool's surface in meters is\n\n$$h(x) = -0.25x^2 + 2x + 1$$",
          parts: [
            { label: "a", prompt: "Write $h(x)$ in vertex form by completing the square.", marks: 3 },
            { label: "b", prompt: "State the greatest height of the jet and the horizontal distance at which it occurs.", marks: 2 },
            { label: "c", prompt: "Find the horizontal distance from the nozzle at which the water meets the pool's surface ($h=0$). Give the exact positive solution in the form $a+b\\sqrt{5}$, and enter its decimal value to 2 decimal places.", marks: 2 },
            { label: "d", prompt: "A decorative arch is $4$ m high. Use your vertex form to find the horizontal distance over which the jet is at least $4$ m high.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) Greatest height", answer: 5, unit: "m" },
              { label: "(b) Horizontal distance of greatest height", answer: 4, unit: "m" },
              { label: "(c) Landing distance", answer: 8.47, tolerance: 0.01, unit: "m" },
              { label: "(d) Horizontal distance with height at least 4 m", answer: 4, unit: "m" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Completing the square", statement: "$x^2+px+\\left(\\frac p2\\right)^2=\\left(x+\\frac p2\\right)^2$; add and subtract the same quantity to keep the expression equivalent." },
              { kind: "definition", name: "Vertex form", statement: "$a(x-h)^2+k$ has vertex $(h,k)$; if $a<0$ the vertex is the maximum." },
              { kind: "property", name: "Square root property", statement: "If $u^2=k$ with $k>0$, then $u=\\pm\\sqrt{k}$." },
            ],
            steps: [
              { part: "a", reasoning: "Factor $-0.25$ from the $x^2$ and $x$ terms.", working: "h(x)=-0.25(x^2-8x)+1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Add and subtract $\\left(\\tfrac{-8}{2}\\right)^2=16$ inside the bracket, then factor the perfect square.", working: "h(x)=-0.25[(x^2-8x+16)-16]+1=-0.25(x-4)^2+4+1", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify; the $-16$ inside the bracket becomes $+4$ after multiplying by $-0.25$.", working: "h(x)=-0.25(x-4)^2+5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The vertex is $(4,5)$ and $a=-0.25<0$, so it is a maximum.", working: "(h,k)=(4,5)", marks: 1, markCode: "A" },
              { part: "b", reasoning: "State both values clearly: greatest height $5$ m, occurring $4$ m from the nozzle.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Set the vertex form equal to zero and isolate the square.", working: "-0.25(x-4)^2+5=0 \\implies (x-4)^2=20 \\implies x-4=\\pm2\\sqrt{5}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reject the negative solution because the distance must be positive.", working: "x=4+2\\sqrt{5}\\approx 8.47", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Set the height at least $4$ and isolate the square.", working: "-0.25(x-4)^2+5\\ge4 \\implies (x-4)^2\\le4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve the inequality: $|x-4|\\le2$, so $2\\le x\\le6$, a stretch of $4$ m.", working: "6-2=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $h(x)=-0.25(x-4)^2+5$. (b) $5$ m at $x=4$ m. (c) $x=4+2\\sqrt{5}\\approx8.47$ m. (d) From $x=2$ to $x=6$: $4$ m.",
            commonErrors: [
              "Forgetting to multiply the added $16$ by the factored $-0.25$, giving $+16$ instead of $+4$ outside the square.",
              "Reading the vertex's $x$-coordinate as $-4$.",
              "Keeping the negative solution $4-2\\sqrt{5}$, which is a point behind the nozzle.",
            ],
          },
        },
      ],
    },
  ],
};
