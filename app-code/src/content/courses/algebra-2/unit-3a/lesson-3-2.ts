import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "alg2-3a-3-2",
  code: "3-2",
  title: "Linear Functions",
  goal: "I CAN identify, evaluate, graph, and write linear equations in function notation.",
  standards: ["HSF-IF.A.2", "HSF-IF.B.4", "HSF-IF.B.6", "HSF-LE.A.2"],
  vocabulary: [
    { term: "Function notation", definition: "A way to name a function and its output; $f(x)$ means the value of function $f$ at input $x$." },
    { term: "Linear function", definition: "A function whose graph is a line and whose rate of change is constant; it can be written $f(x)=mx+b$." },
    { term: "Slope", definition: "The ratio of vertical change to horizontal change between two points on a line, $m=\\frac{y_2-y_1}{x_2-x_1}$." },
    { term: "Rate of change", definition: "The change in output divided by the corresponding change in input; for a linear function it is constant and equals the slope." },
    { term: "Y-intercept", definition: "The point where a graph crosses the $y$-axis; its coordinates are $(0,b)$ for $y=mx+b$." },
    { term: "Slope-intercept form", definition: "The linear equation form $y=mx+b$, which shows slope $m$ and $y$-intercept $b$." },
    { term: "Point-slope form", definition: "The form $y-y_1=m(x-x_1)$, which uses a known point $(x_1,y_1)$ and slope $m$." },
    { term: "Standard form", definition: "A linear equation written $Ax+By=C$, commonly with integer coefficients and $A\\ge0$." },
  ],
  concepts: [
    {
      id: "alg2-3a-function-notation",
      title: "Evaluating functions in notation",
      skill: "Evaluate function values by substituting inputs, including expressions such as $a$ and $x+h$.",
      lesson: {
        sections: [
          {
            heading: "Function notation names an input-output rule",
            body: "In $f(x)$, the letter $f$ names the function and $x$ is its input. The expression $f(3)$ means **the output when the input is 3**; it does not mean $f$ multiplied by 3. If $f(x)=2x-5$, then $f(3)=2(3)-5=1$. Replace every occurrence of the input variable, and use parentheses when substituting a negative number or an expression.",
          },
          {
            heading: "Substitute expressions carefully",
            body: "To find $f(a)$, replace each $x$ by $a$. To find $f(x+h)$, replace each $x$ by the entire expression $x+h$, using parentheses before simplifying. For example, if $f(x)=x^2+3x$, then $f(x+h)=(x+h)^2+3(x+h)$, which expands to $x^2+2xh+h^2+3x+3h$. The square applies to the whole binomial, not just its first term.",
          },
          {
            heading: "Use function values to describe change",
            body: "The difference $f(x+h)-f(x)$ compares the output at $x+h$ with the output at $x$. When $h\\ne0$, dividing that difference by $h$ gives the average rate of change over the interval. For a linear function, this quotient is always the slope, no matter which starting input is chosen.",
          },
        ],
        keyFormulas: [
          { name: "Evaluate at an input", statement: "$f(a)$ is the result of replacing every input variable in $f(x)$ with $a$." },
          { name: "Difference quotient", statement: "$\\dfrac{f(x+h)-f(x)}{h}$, where $h\\ne0$" },
        ],
        workedExample: {
          problem: "Let $f(x)=3x^2-2x+4$. Find $f(-1)$ and simplify $f(x+h)$.",
          solution: "$f(-1)=3(-1)^2-2(-1)+4=3+2+4=9$.\n\nFor the expression input, substitute $x+h$ for every $x$: $f(x+h)=3(x+h)^2-2(x+h)+4=3x^2+6xh+3h^2-2x-2h+4$.",
        },
      },
      questions: [
        {
          id: "alg2-3a-fn-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "If $f(x)=4x-7$, what is $f(3)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12$" },
              { id: "b", text: "$-3$" },
              { id: "c", text: "$-19$" },
              { id: "d", text: "$5$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function notation", statement: "$f(3)$ is the output of $f$ when the input $x$ is replaced by $3$." },
              { kind: "property", name: "Order of operations", statement: "Multiply before adding or subtracting." },
            ],
            steps: [
              { reasoning: "Substitute 3 for the input variable.", working: "f(3)=4(3)-7", marks: 1, markCode: "M" },
              { reasoning: "Multiply, then subtract.", working: "12-7=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $5$",
            commonErrors: ["Choosing $-19$ by substituting $-7$ as the input instead of using it as the constant term."],
          },
        },
        {
          id: "alg2-3a-fn-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Let $g(x)=x^2-3x+2$. Find $g(-2)$ and $g(4)$.",
          response: { type: "numeric", parts: [{ label: "$g(-2)$", answer: 12 }, { label: "$g(4)$", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function evaluation", statement: "Replace each occurrence of the variable with the stated input, keeping substituted negative values in parentheses." },
              { kind: "property", name: "Exponent and multiplication rules", statement: "Evaluate powers before multiplication and addition or subtraction." },
            ],
            steps: [
              { reasoning: "Substitute $-2$ for every occurrence of $x$; parentheses preserve the negative input when squaring.", working: "g(-2)=(-2)^2-3(-2)+2=4+6+2=12", marks: 2, markCode: "M" },
              { reasoning: "Substitute 4 and simplify in order.", working: "g(4)=4^2-3(4)+2=16-12+2=6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$g(-2)=12$ and $g(4)=6$.",
            commonErrors: ["Calculating $(-2)^2$ as $-4$ instead of $4$.", "Using $-3$ as the input rather than as the coefficient of $x$."],
          },
        },
        {
          id: "alg2-3a-fn-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For $f(x)=2x^2-x$, simplify $f(x+h)-f(x)$. Show the substitution and expansion that support your result.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function notation", statement: "$f(x+h)$ is found by replacing every input variable with the entire expression $x+h$." },
              { kind: "property", name: "Square of a binomial", statement: "$(x+h)^2=x^2+2xh+h^2$." },
              { kind: "property", name: "Like terms", statement: "Only terms with identical variable parts may be combined." },
            ],
            steps: [
              { reasoning: "Substitute $x+h$ for every input variable in the rule.", working: "f(x+h)=2(x+h)^2-(x+h)", marks: 1, markCode: "M" },
              { reasoning: "Expand the square and distribute the negative sign.", working: "f(x+h)=2x^2+4xh+2h^2-x-h", marks: 1, markCode: "M" },
              { reasoning: "Subtract the original function value, using parentheses around all of $f(x)$.", working: "f(x+h)-f(x)=2x^2+4xh+2h^2-x-h-(2x^2-x)", marks: 1, markCode: "M" },
              { reasoning: "Cancel the matching $2x^2$ and $-x$ terms; the difference is $4xh+2h^2-h$.", working: "f(x+h)-f(x)=4xh+2h^2-h", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f(x+h)-f(x)=4xh+2h^2-h$.",
            commonErrors: ["Forgetting to subtract the entire expression $f(x)$.", "Expanding $(x+h)^2$ as $x^2+h^2$."],
            examinerNote: "Award the final accuracy mark only when the subtraction of $f(x)$ is handled with correct signs.",
          },
        },
        {
          id: "alg2-3a-fn-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A ball is thrown upward from a balcony. Its height in feet after $t$ seconds is given by\n\n$$h(t) = -16t^2 + 48t + 5$$",
          parts: [
            { label: "a", prompt: "Find $h(0)$ and $h(2)$, and state what $h(0)$ represents.", marks: 2 },
            { label: "b", prompt: "Find the average rate of change of the height between $t = 1$ and $t = 3$.", marks: 2 },
            { label: "c", prompt: "Simplify $h(t + k) - h(t)$ in terms of $t$ and $k$.", marks: 3 },
            { label: "d", prompt: "Use your result from part (c) with $t = 1$ and $k = 2$ to confirm your answer to part (b), and interpret the sign of the rate.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $h(0)$", answer: 5, unit: "ft" },
              { label: "(a) $h(2)$", answer: 37, unit: "ft" },
              { label: "(b) Average rate of change", answer: -16, unit: "ft/s" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Function notation", statement: "$h(a)$ is the output of $h$ when every $t$ is replaced by the input $a$; an expression input such as $t + k$ is substituted in full, in parentheses." },
              { kind: "formula", name: "Average rate of change", statement: "Over $[t_1, t_2]$: $\\dfrac{h(t_2) - h(t_1)}{t_2 - t_1}$." },
              { kind: "property", name: "Square of a binomial", statement: "$(t + k)^2 = t^2 + 2tk + k^2$." },
            ],
            steps: [
              { part: "a", reasoning: "Substitute $t = 0$ and $t = 2$.", working: "h(0) = 5, \\quad h(2) = -16(4) + 48(2) + 5 = -64 + 96 + 5 = 37", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$h(0)$ is the height at the moment of the throw: the ball starts $5$ ft above the ground.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Evaluate the height at both ends of the interval.", working: "h(1) = -16 + 48 + 5 = 37, \\quad h(3) = -144 + 144 + 5 = 5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide the change in height by the change in time.", working: "\\frac{5 - 37}{3 - 1} = \\frac{-32}{2} = -16", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $t + k$ for every $t$ and expand the square.", working: "h(t+k) = -16(t^2 + 2tk + k^2) + 48(t + k) + 5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Subtract the whole of $h(t)$, keeping the brackets.", working: "h(t+k) - h(t) = -16t^2 - 32tk - 16k^2 + 48t + 48k + 5 - (-16t^2 + 48t + 5)", marks: 1, markCode: "M" },
              { part: "c", reasoning: "The $t^2$, $t$ and constant terms cancel.", working: "h(t+k) - h(t) = -32tk - 16k^2 + 48k", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute $t = 1$, $k = 2$ and divide by $k = 2$.", working: "\\frac{-32(1)(2) - 16(4) + 48(2)}{2} = \\frac{-64 - 64 + 96}{2} = \\frac{-32}{2} = -16", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The rate is negative, so on average the ball loses $16$ ft of height each second between $t = 1$ and $t = 3$: it is, overall, falling in that interval.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $h(0) = 5$ ft (starting height), $h(2) = 37$ ft. (b) $-16$ ft/s. (c) $-32tk - 16k^2 + 48k$. (d) $-16$ ft/s, confirming (b); the height decreases on average.",
            commonErrors: [
              "Expanding $(t+k)^2$ as $t^2 + k^2$.",
              "Subtracting only the first term of $h(t)$ rather than the whole expression.",
              "Dividing by $3$ instead of the time change $2$ in part (b).",
            ],
          },
        },
      ],
    },
    {
      id: "alg2-3a-slope-rate-change",
      title: "Slope and constant rate of change",
      skill: "Find and interpret a linear function's slope from points, tables, graphs, and real-world situations.",
      lesson: {
        sections: [
          {
            heading: "Slope measures vertical change per horizontal change",
            body: "For two points $(x_1,y_1)$ and $(x_2,y_2)$, the slope is $m=\\frac{y_2-y_1}{x_2-x_1}=\\frac{\\Delta y}{\\Delta x}$. Subtract in the same order in the numerator and denominator. A positive slope rises from left to right, a negative slope falls, and a zero slope is horizontal. A vertical line has undefined slope because its horizontal change is zero.",
          },
          {
            heading: "Read slope from a table",
            body: "For equally spaced inputs, compare the change in output with the change in input. If each increase of 2 in $x$ corresponds to an increase of 6 in $y$, then $m=\\frac{6}{2}=3$, not 6. A linear relationship has a constant ratio $\\frac{\\Delta y}{\\Delta x}$ across every pair of rows; changing ratios indicate that the data are not linear.",
          },
          {
            heading: "Interpret slope with units",
            body: "In context, slope is the amount the output changes for one unit of input. If distance is measured in miles and time in hours, the slope is measured in miles per hour. Include its sign and units, and distinguish the rate of change from a starting amount such as the $y$-intercept.",
          },
        ],
        keyFormulas: [
          { name: "Slope between two points", statement: "$m=\\dfrac{y_2-y_1}{x_2-x_1}$, provided $x_2\\ne x_1$" },
          { name: "Average rate of change", statement: "$\\dfrac{\\text{change in output}}{\\text{change in input}}=\\dfrac{\\Delta y}{\\Delta x}$" },
        ],
        workedExample: {
          problem: "A linear function contains the points $(-1, 8)$ and $(3, -4)$. Find and interpret its slope as the change in $y$ for each 1-unit increase in $x$.",
          solution: "Let $(x_1,y_1)=(-1,8)$ and $(x_2,y_2)=(3,-4)$. Then $m=\\frac{-4-8}{3-(-1)}=\\frac{-12}{4}=-3$. For every increase of 1 in $x$, $y$ decreases by 3 units.",
        },
      },
      questions: [
        {
          id: "alg2-3a-slope-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Find the slope of the line through $(2, 1)$ and $(6, 9)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$-2$" },
              { id: "d", text: "$\\frac{1}{2}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Slope formula", statement: "$m=\\dfrac{y_2-y_1}{x_2-x_1}$; subtract the coordinates in corresponding order." },
              { kind: "definition", name: "Rate of change", statement: "Slope is the change in $y$ divided by the change in $x$." },
            ],
            steps: [
              { reasoning: "Substitute both ordered pairs into the slope formula.", working: "m=\\frac{9-1}{6-2}=\\frac{8}{4}", marks: 1, markCode: "M" },
              { reasoning: "Simplify the ratio of vertical to horizontal change.", working: "m=2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $2$",
            commonErrors: ["Choosing $8$, the change in $y$, without dividing by the change in $x$.", "Reversing only one subtraction, which changes the sign."],
          },
        },
        {
          id: "alg2-3a-slope-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A linear function has the table below. Find its slope (rate of change).\n\n$x$: $0, 2, 5$\n\n$y$: $7, 13, 22$",
          response: { type: "numeric", parts: [{ label: "Slope", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate of change", statement: "$m=\\dfrac{\\Delta y}{\\Delta x}$ for any two points on a linear function." },
              { kind: "property", name: "Constant rate", statement: "A linear function has the same rate of change for every interval." },
            ],
            steps: [
              { reasoning: "Use two entries and calculate the output change and input change together.", working: "m=\\frac{13-7}{2-0}=\\frac{6}{2}=3", marks: 1, markCode: "M" },
              { reasoning: "Check the remaining interval to confirm the table is consistent with a linear function.", working: "\\frac{22-13}{5-2}=\\frac{9}{3}=3", marks: 1, markCode: "A" },
              { reasoning: "State the constant rate of change.", working: "m=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The slope and rate of change are $3$ units of $y$ per 1 unit of $x$.",
            commonErrors: ["Dividing by the output change instead of the input change.", "Using the change in $y$ alone when the change in $x$ is not 1."],
          },
        },
        {
          id: "alg2-3a-slope-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A bicycle rental shop charges a fixed fee plus the same amount per hour. A 2-hour rental costs $\\$19$, and a 5-hour rental costs $\\$40$. Find the hourly rate and explain what the rate means in this context.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Slope", statement: "$m=\\dfrac{\\Delta y}{\\Delta x}$, where $y$ is cost and $x$ is rental time." },
              { kind: "definition", name: "Rate of change", statement: "The slope gives the change in cost for each one-hour increase in rental time." },
              { kind: "principle", name: "Units", statement: "When cost is in dollars and time is in hours, the slope is in dollars per hour." },
            ],
            steps: [
              { reasoning: "Identify time as input and cost as output, then calculate the differences in corresponding order.", working: "m=\\frac{40-19}{5-2}", marks: 1, markCode: "M" },
              { reasoning: "Simplify the cost change per hour.", working: "m=\\frac{21}{3}=7", marks: 1, markCode: "A" },
              { reasoning: "Attach units to the rate.", working: "m=7\\text{ dollars per hour}", marks: 1, markCode: "A" },
              { reasoning: "Interpret the positive rate: each additional hour adds $\\$7$ to the rental cost; this is not the fixed starting fee.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The hourly rate is $\\$7$ per hour; each additional rental hour increases the cost by $\\$7$.",
            commonErrors: ["Reporting $\\$21$ as the hourly rate without dividing by 3 hours.", "Confusing the hourly rate with the fixed fee."],
            examinerNote: "The interpretation must state the change per one hour, not merely repeat the slope calculation.",
          },
        },
        {
          id: "alg2-3a-slope-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Pool A is being filled at a constant rate. A technician records that it holds $130$ gallons after $4$ minutes and $310$ gallons after $10$ minutes. Pool B already holds $400$ gallons and is being filled at a constant $15$ gallons per minute. Both start filling at $t = 0$.",
          parts: [
            { label: "a", prompt: "Find the rate at which Pool A is filling, in gallons per minute.", marks: 2 },
            { label: "b", prompt: "Write a function $V_A(t)$ for the volume in Pool A and interpret its constant term.", marks: 2 },
            { label: "c", prompt: "Pool A has capacity $1000$ gallons. After how many minutes is it full?", marks: 2 },
            { label: "d", prompt: "At what time do the two pools hold the same volume, and what is that volume? State which pool holds more afterwards and why.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Rate of Pool A", answer: 30, unit: "gal/min" },
              { label: "(c) Time to fill Pool A", answer: 33, unit: "min" },
              { label: "(d) Time pools are equal", answer: 26, unit: "min" },
              { label: "(d) Common volume", answer: 790, unit: "gal" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Slope as rate of change", statement: "$m = \\dfrac{\\Delta V}{\\Delta t} = \\dfrac{V_2 - V_1}{t_2 - t_1}$, in gallons per minute." },
              { kind: "formula", name: "Slope-intercept form", statement: "$V = mt + b$, where $b$ is the volume at $t = 0$." },
              { kind: "principle", name: "Equal outputs", statement: "Two linear models give equal outputs at the input where their rules are set equal." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the change in volume by the change in time.", working: "m = \\frac{310 - 130}{10 - 4} = \\frac{180}{6}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify and attach units.", working: "m = 30 \\text{ gallons per minute}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Substitute the slope and the point $(4, 130)$ into $V = 30t + b$ to find $b$.", working: "130 = 30(4) + b \\implies b = 10, \\quad V_A(t) = 30t + 10", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The constant term is the volume at $t = 0$: Pool A already held $10$ gallons when filling began.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Set the volume equal to the capacity.", working: "30t + 10 = 1000", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve for $t$.", working: "30t = 990 \\implies t = 33", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Write Pool B's function and set the two functions equal.", working: "V_B(t) = 15t + 400, \\quad 30t + 10 = 15t + 400", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve, then substitute back to find the volume (check in both rules).", working: "15t = 390 \\implies t = 26, \\quad V_A(26) = 790 = V_B(26)", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Pool A fills at $30$ gal/min versus $15$ gal/min, so after $t = 26$ it holds more, since its rate of change is greater.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $30$ gal/min. (b) $V_A(t) = 30t + 10$; Pool A started with $10$ gallons. (c) $33$ minutes. (d) At $t = 26$ min both hold $790$ gallons; afterwards Pool A holds more because it fills faster.",
            commonErrors: [
              "Dividing by the change in volume instead of the change in time.",
              "Using $130$ as the intercept; it is the volume at $t = 4$, not $t = 0$.",
              "Setting the volumes equal to the capacity instead of to each other in part (d).",
            ],
          },
        },
      ],
    },
    {
      id: "alg2-3a-write-linear-functions",
      title: "Writing linear functions",
      skill: "Write a linear function in a useful form from points, equations, or a real-world context.",
      lesson: {
        sections: [
          {
            heading: "Choose the form that shows what you know",
            body: "Slope-intercept form, $y=mx+b$, displays the slope $m$ and vertical intercept $b$. Point-slope form, $y-y_1=m(x-x_1)$, is efficient when a point and slope are known. Standard form, $Ax+By=C$, can be useful for comparing linear equations or integer-coefficient relationships. These forms describe the same line when correctly rearranged.",
          },
          {
            heading: "Build a line from two points",
            body: "First calculate the slope using the two points. Then substitute that slope and either point into point-slope form. Simplify to the requested form and check by substituting both original points. If the slope is $m$ and the line includes $(x_1,y_1)$, use $y-y_1=m(x-x_1)$; signs inside the parentheses come from subtraction of the point coordinates.",
          },
          {
            heading: "Model a context",
            body: "Let $x$ represent the independent quantity and $y$ the dependent quantity. Identify the constant rate as slope and the initial amount at $x=0$ as the intercept. Write $y=mx+b$, state what each parameter and its units mean, and restrict the domain when the context requires it. To graph the line, plot the $y$-intercept $(0,b)$, then use slope $m=\\frac{\\text{rise}}{\\text{run}}$ to locate another point; draw the line through them. For example, a starting balance that decreases by a fixed amount per month has positive initial value and negative slope.",
          },
        ],
        keyFormulas: [
          { name: "Slope-intercept form", statement: "$y=mx+b$" },
          { name: "Point-slope form", statement: "$y-y_1=m(x-x_1)$" },
          { name: "Standard form", statement: "$Ax+By=C$" },
          { name: "Slope from two points", statement: "$m=\\dfrac{y_2-y_1}{x_2-x_1}$" },
        ],
        workedExample: {
          problem: "Write the equation of the line through $(1, 5)$ and $(4, -1)$ in slope-intercept and standard form.",
          solution: "First find $m=\\frac{-1-5}{4-1}=\\frac{-6}{3}=-2$. Using $(1,5)$ in point-slope form gives $y-5=-2(x-1)$. Expand and solve for $y$: $y-5=-2x+2$, so $y=-2x+7$. Rearranging gives standard form $2x+y=7$. Both given points satisfy the equations.",
        },
      },
      questions: [
        {
          id: "alg2-3a-write-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which equation is in standard form and has slope $-3$ and $y$-intercept $5$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3x+y=5$" },
              { id: "b", text: "$x-3y=5$" },
              { id: "c", text: "$3x-y=5$" },
              { id: "d", text: "$y=-3x+5$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Slope-intercept form", statement: "$y=mx+b$ has slope $m$ and $y$-intercept $b$." },
              { kind: "definition", name: "Standard form", statement: "Standard form is $Ax+By=C$." },
            ],
            steps: [
              { reasoning: "Use the specified slope and intercept to write the line in slope-intercept form.", working: "y=-3x+5", marks: 1, markCode: "M" },
              { reasoning: "Rearrange to put both variable terms on the left and the constant on the right.", working: "3x+y=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $3x+y=5$",
            commonErrors: ["Choosing (a), which is correct but is slope-intercept form rather than standard form.", "Changing the sign of the $y$ term when rearranging."],
          },
        },
        {
          id: "alg2-3a-write-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Find the slope and $y$-intercept of the line through $(-2, 1)$ and $(4, 10)$. Give the slope and the intercept value.",
          response: { type: "numeric", parts: [{ label: "Slope", answer: 1.5 }, { label: "$y$-intercept", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Slope formula", statement: "$m=\\dfrac{y_2-y_1}{x_2-x_1}$." },
              { kind: "formula", name: "Slope-intercept form", statement: "$y=mx+b$, where $b$ is the output at $x=0$." },
              { kind: "property", name: "Substitution", statement: "Every point on the line satisfies its equation." },
            ],
            steps: [
              { reasoning: "Calculate the slope from the two ordered pairs.", working: "m=\\frac{10-1}{4-(-2)}=\\frac{9}{6}=\\frac{3}{2}", marks: 1, markCode: "M" },
              { reasoning: "Substitute the slope and one known point into $y=mx+b$.", working: "1=\\frac{3}{2}(-2)+b", marks: 1, markCode: "M" },
              { reasoning: "Solve for the intercept.", working: "1=-3+b \\implies b=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Slope $m=\\frac{3}{2}=1.5$; $y$-intercept $b=4$.",
            commonErrors: ["Using $\\frac{6}{9}$ instead of rise over run.", "Reporting the $y$-coordinate of a given point as the intercept without checking whether its $x$-coordinate is 0."],
          },
        },
        {
          id: "alg2-3a-write-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A music-streaming plan costs $\\$12$ per month plus $\\$0.08$ for each downloaded song. Let $n$ be the number of songs and $C(n)$ the monthly cost in dollars. Write the function in slope-intercept form, explain the meaning of its slope and intercept, and state a sensible domain for $n$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Linear model", statement: "A constant rate $m$ and initial amount $b$ give the model $C(n)=mn+b$." },
              { kind: "principle", name: "Contextual variables", statement: "The input is the number of songs; the output is the total monthly cost." },
              { kind: "property", name: "Discrete contextual domain", statement: "A number of downloaded songs is a nonnegative whole number." },
            ],
            steps: [
              { reasoning: "Identify the per-song charge as the rate and the monthly fee as the initial value.", working: "m=0.08,\\quad b=12", marks: 1, markCode: "M" },
              { reasoning: "Write the cost function with songs as input.", working: "C(n)=0.08n+12", marks: 1, markCode: "A" },
              { reasoning: "Interpret the coefficient and constant with units.", working: "0.08\\text{ dollars per song};\\quad 12\\text{ dollars per month at }n=0", marks: 1, markCode: "R" },
              { reasoning: "Restrict the input to values that make sense for counting songs.", working: "n\\in\\{0,1,2,3,\\ldots\\}", marks: 1, markCode: "R" },
            ],
            finalAnswer: "$C(n)=0.08n+12$, where $0.08$ is the cost in dollars per song and $12$ is the monthly fee; $n$ is a nonnegative integer.",
            commonErrors: ["Using $12$ as the slope and $0.08$ as the intercept.", "Allowing negative or fractional song counts in the contextual domain."],
            examinerNote: "For full credit, the equation, both parameter interpretations, and the contextual domain must all be included.",
          },
        },
        {
          id: "alg2-3a-write-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "On a mountain, the air temperature falls at a constant rate as altitude increases. A hiker measures $70^\\circ\\text{F}$ at an altitude of $1000$ ft and $52^\\circ\\text{F}$ at $4000$ ft. Let $a$ be the altitude in feet and $T(a)$ the temperature in degrees Fahrenheit.",
          parts: [
            { label: "a", prompt: "Find the slope of the line in degrees per foot.", marks: 2 },
            { label: "b", prompt: "Write $T(a)$ in slope-intercept form and interpret the intercept.", marks: 3 },
            { label: "c", prompt: "At what altitude is the temperature $40^\\circ\\text{F}$?", marks: 2 },
            { label: "d", prompt: "Write the equation in standard form $Aa + BT = C$ with integer coefficients and smallest positive integer $A$ possible. Enter $B$, and verify using the point $(4000, 52)$.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Slope", answer: -0.006, unit: "$^\\circ$F/ft" },
              { label: "(b) Intercept", answer: 76, unit: "$^\\circ$F" },
              { label: "(c) Altitude", answer: 6000, unit: "ft" },
              { label: "(d) Coefficient $B$", answer: 500 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Slope formula", statement: "$m = \\dfrac{T_2 - T_1}{a_2 - a_1}$." },
              { kind: "formula", name: "Point-slope form", statement: "$T - T_1 = m(a - a_1)$, which rearranges to $T = ma + b$." },
              { kind: "definition", name: "Standard form", statement: "$Aa + BT = C$ with integer coefficients and $A \\ge 0$." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the change in temperature by the change in altitude, subtracting in the same order.", working: "m = \\frac{52 - 70}{4000 - 1000} = \\frac{-18}{3000}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify.", working: "m = -0.006", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use point-slope form with $(1000, 70)$.", working: "T - 70 = -0.006(a - 1000)", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Expand and solve for $T$.", working: "T = -0.006a + 6 + 70 = -0.006a + 76", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The intercept is the temperature at altitude $0$: a modeled sea-level temperature of $76^\\circ\\text{F}$.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Set $T(a) = 40$.", working: "-0.006a + 76 = 40", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve for $a$.", working: "-0.006a = -36 \\implies a = 6000", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Move the $a$ term to the left, then multiply by $500$ to clear the decimal ($0.006 \\times 500 = 3$).", working: "0.006a + T = 76 \\implies 3a + 500T = 38000", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Check with $(4000, 52)$.", working: "3(4000) + 500(52) = 12000 + 26000 = 38000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $-0.006$ $^\\circ$F per ft. (b) $T(a) = -0.006a + 76$; $76^\\circ$F is the modeled temperature at altitude $0$. (c) $6000$ ft. (d) $3a + 500T = 38000$, so $B = 500$.",
            commonErrors: [
              "Reversing the order of subtraction in only the numerator or denominator, giving a positive slope.",
              "Using $70$ as the intercept; it is the temperature at $1000$ ft.",
              "Leaving a decimal coefficient in standard form.",
            ],
          },
        },
      ],
    },
  ],
};
