import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "pc-u1-lesson-1-1",
  code: "1-1",
  title: "Polynomial Functions and End Behavior",
  goal: "I CAN use a polynomial's degree, leading coefficient, zeros, and multiplicities to describe its graph and end behavior.",
  standards: ["HSF-IF.C.7c", "HSA-APR.B.3"],
  vocabulary: [
    { term: "Polynomial function", definition: "A function expressible as a finite sum of terms $a_nx^n$, where each exponent $n$ is a nonnegative integer and each coefficient $a_n$ is real." },
    { term: "Degree", definition: "The greatest exponent with a nonzero coefficient in a nonzero polynomial, after like terms are combined." },
    { term: "Leading coefficient", definition: "The coefficient of the term with the greatest exponent in a polynomial written in standard form." },
    { term: "Zero (root)", definition: "An input $r$ for which $f(r)=0$; on the graph, it is the $x$-coordinate of an $x$-intercept." },
    { term: "Multiplicity", definition: "The number of times a factor $(x-r)$ occurs in a polynomial's factorization; it determines how the graph behaves at the zero $r$." },
    { term: "Turning point", definition: "A point where a graph changes from increasing to decreasing or from decreasing to increasing." },
  ],
  concepts: [
    {
      id: "pc-u1-polynomial-end-behavior",
      title: "Degree, leading coefficient, and end behavior",
      skill: "Predict the two ends of a polynomial graph and bound its number of turning points.",
      lesson: {
        sections: [
          {
            heading: "Read degree and leading coefficient",
            body: "Write a polynomial in **standard form**, with powers in descending order. Its degree is the greatest exponent whose coefficient is not zero, and its leading coefficient is the coefficient of that term. These two values determine the graph's behavior far to the left and far to the right: for large $|x|$, the leading term dominates all lower-degree terms.",
          },
          {
            heading: "Use the leading-term test",
            body: "An even degree gives ends that point in the same direction; an odd degree gives ends that point in opposite directions. A positive leading coefficient makes the right end rise, while a negative leading coefficient makes the right end fall. Combine these facts to state both ends. A degree-$n$ polynomial has at most $n-1$ turning points; this is an upper bound, not a guarantee that all those turns occur.",
          },
        ],
        keyFormulas: [
          { name: "Leading-term model", statement: "For large $|x|$, $f(x)$ has the same end behavior as its leading term $a_nx^n$." },
          { name: "Turning-point bound", statement: "A degree-$n$ polynomial has at most $n-1$ turning points." },
        ],
        workedExample: {
          problem: "Describe the end behavior and maximum number of turning points of $f(x)=-3x^4+2x^3-x+8$.",
          solution: "The degree is $4$ and the leading coefficient is $-3$. The degree is even, so both ends point the same way; the negative leading coefficient makes both ends fall. Thus $f(x)\\to -\\infty$ as $x\\to -\\infty$ and as $x\\to \\infty$. The graph has at most $4-1=3$ turning points.",
        },
      },
      questions: [
        {
          id: "pc-u1-1-1-end-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which statement gives the end behavior of $f(x)=-2x^5+7x^2-1$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "As $x\\to-\\infty$, $f(x)\\to-\\infty$; as $x\\to\\infty$, $f(x)\\to\\infty$." },
              { id: "b", text: "As $x\\to-\\infty$, $f(x)\\to\\infty$; as $x\\to\\infty$, $f(x)\\to-\\infty$." },
              { id: "c", text: "Both ends rise to $\\infty$." },
              { id: "d", text: "Both ends fall to $-\\infty$." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Polynomial leading-term test", statement: "For sufficiently large $|x|$, the leading term determines a polynomial's end behavior." },
              { kind: "property", name: "Odd powers", statement: "For odd $n$, $x^n$ has opposite signs as $x\\to-\\infty$ and $x\\to\\infty$." },
            ],
            steps: [
              { reasoning: "The leading term is $-2x^5$: the degree is odd and its coefficient is negative.", working: "-2x^5", marks: 1, markCode: "M" },
              { reasoning: "The left end rises and the right end falls, which is choice (b).", working: "x\\to-\\infty\\implies f(x)\\to\\infty,\\qquad x\\to\\infty\\implies f(x)\\to-\\infty", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Left end rises; right end falls.",
            commonErrors: ["Treating the sign of the leading coefficient as the complete answer without accounting for the odd degree."],
          },
        },
        {
          id: "pc-u1-1-1-end-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $p(x)=5x^6-x^3+4$, enter the degree, leading coefficient, and greatest possible number of turning points.",
          response: {
            type: "numeric",
            parts: [
              { label: "Degree", answer: 6 },
              { label: "Leading coefficient", answer: 5 },
              { label: "Maximum number of turning points", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Degree", statement: "The degree is the greatest exponent with a nonzero coefficient." },
              { kind: "theorem", name: "Leading-term test", statement: "A positive leading coefficient and even degree make both polynomial ends rise." },
              { kind: "property", name: "Turning-point bound", statement: "A degree-$n$ polynomial has at most $n-1$ turning points." },
            ],
            steps: [
              { reasoning: "The greatest exponent is 6.", working: "\\deg(p)=6", marks: 1, markCode: "A" },
              { reasoning: "The leading coefficient is 5, and because the degree is even and the coefficient is positive, the right end rises.", working: "a_6=5", marks: 1, markCode: "M" },
              { reasoning: "Apply the degree-minus-one upper bound.", working: "6-1=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Degree $6$; right-end limit $+\\infty$; at most $5$ turning points.",
            commonErrors: ["Using the second term to identify the degree.", "Reporting exactly 5 turning points instead of at most 5."],
          },
        },
        {
          id: "pc-u1-1-1-end-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A polynomial $q$ has degree $7$, positive leading coefficient, and exactly four turning points. State its two end behaviors and explain whether the number of turning points is possible.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Odd-degree end behavior", statement: "An odd-degree polynomial has opposite end behaviors." },
              { kind: "property", name: "Leading-coefficient sign", statement: "A positive leading coefficient makes the right end rise." },
              { kind: "theorem", name: "Turning-point bound", statement: "A degree-$n$ polynomial has at most $n-1$ turning points." },
            ],
            steps: [
              { reasoning: "The degree is odd, so the ends point in opposite directions.", working: "7\\text{ is odd}", marks: 1, markCode: "R" },
              { reasoning: "The positive leading coefficient means the right end rises; therefore the left end falls.", working: "x\\to-\\infty\\implies q(x)\\to-\\infty,\\qquad x\\to\\infty\\implies q(x)\\to\\infty", marks: 1, markCode: "A" },
              { reasoning: "A degree-7 polynomial can have at most 6 turning points.", working: "7-1=6", marks: 1, markCode: "M" },
              { reasoning: "Four is below the maximum of six, so this number of turning points is possible.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The left end falls and the right end rises. Four turning points are possible because a degree-7 polynomial may have up to 6.",
            commonErrors: ["Claiming that every degree-7 polynomial must have exactly 6 turning points."],
            examinerNote: "Award the final reasoning mark only when the response distinguishes an upper bound from an exact count.",
          },
        },
        {
          id: "pc-u1-1-1-end-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A packaging company makes an open-top box from a rectangular sheet of cardboard $20$ in by $30$ in by cutting a square of side $x$ inches from each corner and folding up the sides. The volume of the box, in cubic inches, is $V(x)=x(30-2x)(20-2x)$.",
          parts: [
            { label: "a", prompt: "Expand $V(x)$ and state its degree, its leading coefficient, and the end behavior of the polynomial $V$ on all real numbers. (2 marks)", marks: 2 },
            { label: "b", prompt: "State the zeros of $V$ and the interval of $x$-values that makes sense for the box. (2 marks)", marks: 2 },
            { label: "c", prompt: "Evaluate $V(3)$, $V(4)$, and $V(5)$, and state which of these cut sizes gives the greatest volume. (3 marks)", marks: 3 },
            { label: "d", prompt: "Justify, using the zeros and the sign of $V$, that $V$ must have a turning point (a local maximum) for $0<x<10$, and state the greatest possible number of turning points of $V$. (2 marks)", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "theorem", name: "Leading-term test", statement: "An odd-degree polynomial with positive leading coefficient falls on the far left and rises on the far right." },
              { kind: "property", name: "Zeros from factors", statement: "A factor $(x-r)$ gives a zero $r$; between consecutive zeros a polynomial keeps one sign." },
              { kind: "theorem", name: "Turning-point bound", statement: "A degree-$n$ polynomial has at most $n-1$ turning points." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply the two binomials, then multiply by $x$. The leading term $4x^3$ shows the degree is 3 (odd) with a positive coefficient, so the left end falls and the right end rises.", working: "(30-2x)(20-2x)=600-100x+4x^2\\\\V(x)=4x^3-100x^2+600x", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State degree, leading coefficient and the ends.", working: "\\deg V=3,\\; a=4;\\quad x\\to-\\infty\\Rightarrow V\\to-\\infty,\\; x\\to\\infty\\Rightarrow V\\to\\infty", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Set each factor to zero; the factored form is $V=4x(x-10)(x-15)$.", working: "x=0,\\; x=10,\\; x=15", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Side lengths $30-2x$ and $20-2x$ must be positive, so $x<10$, and the cut must be positive.", working: "0<x<10", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Substitute each value into the expanded or factored form.", working: "V(3)=3(24)(14)=1008\\\\V(4)=4(22)(12)=1056", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Evaluate $V(5)$ and compare the three volumes.", working: "V(5)=5(20)(10)=1000;\\quad \\text{greatest is }V(4)=1056\\text{ in}^3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$V(0)=V(10)=0$ and $V(4)=1056>0$, so $V$ is positive between the zeros. A continuous graph that starts at 0, becomes positive and returns to 0 must rise then fall, so it has a local maximum there.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Apply the turning-point bound to a cubic.", working: "3-1=2\\text{ turning points at most}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $V=4x^3-100x^2+600x$; degree 3, leading coefficient 4; left end falls, right end rises. (b) Zeros $0,10,15$; domain $0<x<10$. (c) $V(3)=1008$, $V(4)=1056$, $V(5)=1000$; $x=4$ is best of the three. (d) A local maximum must occur between $0$ and $10$; at most 2 turning points.",
            commonErrors: ["Using the end behavior of the polynomial to claim the box volume is unbounded; the physical domain is only $0<x<10$.", "Listing $x=15$ as a sensible cut size.", "Claiming $x=4$ is the exact maximum; only the best of the three tested values is established."],
            examinerNote: "Part (c) does not require the exact maximizing cut; accept any correct comparison of the three values.",
          },
        },
      ],
    },
    {
      id: "pc-u1-zeros-multiplicity",
      title: "Zeros, multiplicities, and graph behavior",
      skill: "Connect a polynomial's factors and zeros to intercepts and the graph's behavior at each zero.",
      lesson: {
        sections: [
          {
            heading: "Factors identify zeros",
            body: "If $(x-r)^m$ is a factor of $f(x)$, then $r$ is a zero of multiplicity $m$. Every real zero gives an $x$-intercept $(r,0)$. To find the $y$-intercept, evaluate $f(0)$. The Fundamental Theorem of Algebra says that a degree-$n$ polynomial has exactly $n$ complex zeros when multiplicity is counted, so repeated zeros still use up their full multiplicities.",
          },
          {
            heading: "Multiplicity predicts crossing or touching",
            body: "At a zero of **odd** multiplicity, the graph crosses the $x$-axis. At a zero of **even** multiplicity, it touches the axis and turns back. A higher multiplicity generally makes the graph flatter near the intercept: multiplicity 3, for example, crosses with a flattening. Multiplicities add to the degree when the polynomial is fully factored, and the graph cannot have more turning points than degree minus one.",
          },
        ],
        keyFormulas: [
          { name: "Factor-zero relationship", statement: "$(x-r)^m\\text{ divides }f(x)\\iff f(r)=0\\text{ with multiplicity }m$" },
          { name: "Multiplicity behavior", statement: "$\\text{Odd multiplicity: crosses; even multiplicity: touches and turns.}$" },
        ],
        workedExample: {
          problem: "For $g(x)=2(x+1)^2(x-3)^3$, identify the real zeros and describe the graph at each one.",
          solution: "The zeros are $x=-1$ with multiplicity 2 and $x=3$ with multiplicity 3. At $x=-1$, the even multiplicity means the graph touches the axis and turns. At $x=3$, the odd multiplicity means it crosses the axis (with a flatter shape than a simple crossing). The multiplicities sum to $2+3=5$, matching the degree.",
        },
      },
      questions: [
        {
          id: "pc-u1-1-1-zeros-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For $f(x)=(x-2)^4(x+1)$, what happens at the zero $x=2$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The graph crosses the $x$-axis because the multiplicity is 4." },
              { id: "b", text: "The graph touches the $x$-axis and turns because the multiplicity is even." },
              { id: "c", text: "The graph has a vertical asymptote because the multiplicity is 4." },
              { id: "d", text: "The graph does not meet the $x$-axis at $x=2$." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Multiplicity", statement: "The multiplicity of a zero is the exponent on its corresponding linear factor." },
              { kind: "property", name: "Even-multiplicity zero", statement: "At an even-multiplicity zero, a polynomial graph touches the axis and turns rather than crossing it." },
            ],
            steps: [
              { reasoning: "The factor $(x-2)^4$ gives zero $x=2$ with multiplicity 4.", working: "x-2=0\\implies x=2", marks: 1, markCode: "M" },
              { reasoning: "Four is even, so the graph touches the axis and turns; this is choice (b).", working: "4\\text{ is even}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "**(b)** It touches the $x$-axis and turns at $x=2$.",
            commonErrors: ["Assuming every zero creates a crossing, regardless of multiplicity."],
          },
        },
        {
          id: "pc-u1-1-1-zeros-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $p(x)=(x+2)^2(x-1)^3$, enter the $y$-intercept and the number of real $x$-intercepts.",
          response: {
            type: "numeric",
            parts: [
              { label: "$y$-intercept", answer: -4 },
              { label: "Number of distinct real $x$-intercepts", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Y-intercept", statement: "The $y$-intercept is the function value at $x=0$." },
              { kind: "property", name: "Factor and zero", statement: "A factor $(x-r)^m$ gives the zero $r$; repeated factors do not create additional distinct intercepts." },
            ],
            steps: [
              { reasoning: "Evaluate the function at zero to obtain the $y$-intercept.", working: "p(0)=(0+2)^2(0-1)^3=4(-1)=-4", marks: 1, markCode: "M" },
              { reasoning: "The factors give zeros $-2$ and $1$.", working: "x+2=0\\implies x=-2,\\qquad x-1=0\\implies x=1", marks: 1, markCode: "A" },
              { reasoning: "There are two distinct real zeros and therefore two distinct $x$-intercepts.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y$-intercept $=-4$; 2 distinct real $x$-intercepts.",
            commonErrors: ["Counting the multiplicities as separate intercepts.", "Dropping the negative sign from $(0-1)^3$."],
          },
        },
        {
          id: "pc-u1-1-1-zeros-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A degree-6 polynomial has real zeros $-2$ with multiplicity 2, $1$ with multiplicity 1, and $4$ with multiplicity 3, with no other zeros. Describe the graph's behavior at each $x$-intercept and state the end behavior if the leading coefficient is negative.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Multiplicity behavior", statement: "Odd multiplicity gives a crossing; even multiplicity gives a touch-and-turn." },
              { kind: "theorem", name: "Leading-term test", statement: "An even-degree polynomial with negative leading coefficient falls at both ends." },
              { kind: "property", name: "Degree and multiplicity", statement: "The multiplicities of all zeros, including complex zeros, sum to the degree." },
            ],
            steps: [
              { reasoning: "The zero $-2$ has even multiplicity 2, so the graph touches and turns.", working: "x=-2:\\;m=2", marks: 1, markCode: "A" },
              { reasoning: "The zero $1$ has odd multiplicity 1, so the graph crosses.", working: "x=1:\\;m=1", marks: 1, markCode: "A" },
              { reasoning: "The zero $4$ has odd multiplicity 3, so the graph crosses, with a flatter crossing than at a simple zero.", working: "x=4:\\;m=3", marks: 1, markCode: "A" },
              { reasoning: "Degree 6 is even, and the leading coefficient is negative, so both ends fall.", working: "x\\to\\pm\\infty\\implies f(x)\\to-\\infty", marks: 1, markCode: "R" },
            ],
            finalAnswer: "At $x=-2$ the graph touches and turns; at $x=1$ and $x=4$ it crosses (flattening at $x=4$). Both ends fall.",
            commonErrors: ["Saying multiplicity 3 touches the axis; odd multiplicity crosses.", "Treating the sign of the leading coefficient as changing only one end for an even degree."],
          },
        },
        {
          id: "pc-u1-1-1-zeros-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A model roller-coaster track has height $h(x)=-0.5\\,x\\,(x-4)^2\\,(x-8)$ meters above the ground, where $x$ is the horizontal distance in meters and $0\\le x\\le 8$.",
          parts: [
            { label: "a", prompt: "State each zero of $h$ with its multiplicity, and give the degree and leading coefficient. (2 marks)", marks: 2 },
            { label: "b", prompt: "Find $h(2)$ and $h(6)$. (2 marks)", marks: 2 },
            { label: "c", prompt: "Describe the behavior of the graph at each zero, and explain why $h(x)\\ge0$ for all $0\\le x\\le8$. (3 marks)", marks: 3 },
            { label: "d", prompt: "A designer replaces the factor $(x-4)^2$ by $(x-4)$. Explain what goes wrong for the track, and state the number of turning points of the original $h$ with justification. (3 marks)", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Multiplicity behavior", statement: "Odd multiplicity: the graph crosses the axis. Even multiplicity: it touches the axis and turns." },
              { kind: "property", name: "Sign on an interval", statement: "A polynomial can change sign only at a zero of odd multiplicity." },
              { kind: "theorem", name: "Turning-point bound", statement: "A degree-$n$ polynomial has at most $n-1$ turning points." },
            ],
            steps: [
              { part: "a", reasoning: "Read the zeros and exponents directly from the factored form.", working: "x=0\\,(m=1),\\; x=4\\,(m=2),\\; x=8\\,(m=1)", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Multiplicities sum to the degree; the leading coefficient is the constant factor.", working: "1+2+1=4,\\quad a=-0.5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $x=2$.", working: "h(2)=-0.5(2)(-2)^2(-6)=24", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute $x=6$.", working: "h(6)=-0.5(6)(2)^2(-2)=24", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Odd multiplicity at $x=0$ and $x=8$ means crossing; even multiplicity at $x=4$ means the graph touches the ground and turns.", working: "x=0,8:\\text{ cross};\\quad x=4:\\text{ touch and turn}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "For $0<x<8$: $x>0$, $(x-4)^2\\ge0$, and $x-8<0$, so $x(x-4)^2(x-8)\\le0$.", working: "-0.5\\cdot(\\le0)\\ge0", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Multiplying by $-0.5$ reverses the sign, so $h\\ge0$ with equality only at the zeros.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "With $(x-4)$ to the first power, the zero at 4 has odd multiplicity, so the graph would cross below the ground there, which is impossible for a track.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The degree is 4, so at most 3 turning points.", working: "4-1=3", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The track rises to a maximum, falls to touch the ground at 4 (a minimum), rises to a second maximum and falls to 0 at 8: three turns.", working: "\\text{3 turning points}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Zeros $0$ (1), $4$ (2), $8$ (1); degree 4; leading coefficient $-0.5$. (b) $h(2)=24$, $h(6)=24$. (c) Crosses at $0$ and $8$, touches at $4$; $h\\ge0$ because $x(x-4)^2(x-8)\\le0$ on $[0,8]$. (d) The track would dip below ground at $x=4$; the original has 3 turning points.",
            commonErrors: ["Forgetting that multiplying by the negative leading coefficient reverses the sign.", "Saying a double zero crosses the axis.", "Stating exactly 3 turning points only because of the bound, without describing the graph."],
          },
        },
      ],
    },
  ],
};
