import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "alg2-3a-3-3",
  code: "3-3",
  title: "Transforming Linear Functions",
  goal: "I CAN transform linear functions.",
  standards: ["HSF-BF.B.3", "HSF-IF.C.7", "HSF-IF.B.4"],
  vocabulary: [
    { term: "Transformation", definition: "A change to a function's graph that moves, reflects, or changes its scale while preserving a relationship to the original graph." },
    { term: "Translation", definition: "A shift of a graph without changing its shape or size." },
    { term: "Vertical translation", definition: "A shift up or down; adding $k$ outside a function moves its graph by $k$ units vertically." },
    { term: "Horizontal translation", definition: "A shift left or right; replacing $x$ by $x-h$ moves a graph right $h$ units." },
    { term: "Reflection", definition: "A flip of a graph across an axis; $-f(x)$ reflects across the $x$-axis and $f(-x)$ across the $y$-axis." },
    { term: "Dilation", definition: "A transformation that scales vertical or horizontal distances from an axis, changing the graph's steepness or width." },
    { term: "Scale factor", definition: "The multiplier that determines how distances from an axis change in a dilation." },
    { term: "Vertical stretch or compression", definition: "Multiplication by $a$ outside a function scales outputs by $|a|$; $|a|>1$ stretches and $0<|a|<1$ compresses." },
    { term: "Horizontal stretch or compression", definition: "Replacing $x$ by $bx$ scales horizontal distances by $\\frac{1}{|b|}$; $|b|>1$ compresses and $0<|b|<1$ stretches." },
  ],
  concepts: [
    {
      id: "alg2-3a-translations",
      title: "Translations of linear functions",
      skill: "Describe and represent vertical and horizontal translations using function notation and point mappings.",
      lesson: {
        sections: [
          {
            heading: "Vertical translations happen outside the function",
            body: "For $g(x)=f(x)+k$, every output increases by $k$ when $k>0$, so the graph shifts up $k$ units. If $k<0$, it shifts down $|k|$ units. Each original point $(x,y)$ maps to $(x,y+k)$, so the slope remains unchanged and the $y$-intercept changes by $k$.",
          },
          {
            heading: "Horizontal translations happen inside the input",
            body: "For $g(x)=f(x-h)$, the graph of $f$ shifts right by $h$ units when $h>0$. The input value needed to produce each original output has increased by $h$, so $(x,y)$ maps to $(x+h,y)$. The minus sign inside the function corresponds to a shift right; $f(x+h)$ instead shifts left by $h$ units.",
          },
          {
            heading: "Track points to avoid sign errors",
            body: "A reliable check is to track a known point or landmark. If $f(2)=5$, then $f(x-3)$ takes the value 5 at $x=5$, so the point moves from $(2,5)$ to $(5,5)$. For $f(x)+3$, that same point becomes $(2,8)$. A translation changes position, not the line's slope.",
          },
        ],
        keyFormulas: [
          { name: "Vertical translation", statement: "$g(x)=f(x)+k$: $(x,y)\\mapsto(x,y+k)$" },
          { name: "Horizontal translation", statement: "$g(x)=f(x-h)$: $(x,y)\\mapsto(x+h,y)$" },
        ],
        workedExample: {
          problem: "The graph of $f(x)=2x+1$ is translated 4 units right and 3 units down. Write the new function and identify its slope and $y$-intercept.",
          solution: "Shift right 4 by replacing $x$ with $x-4$, and shift down 3 by subtracting 3 outside: $g(x)=f(x-4)-3=2(x-4)+1-3=2x-10$. The slope is $2$ and the $y$-intercept is $-10$.",
        },
      },
      questions: [
        {
          id: "alg2-3a-trans-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The graph of $f(x)=2x+1$ is shifted up 4 units. Which is the equation of the new function?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$g(x)=2x-3$" },
              { id: "b", text: "$g(x)=2(x-4)+1$" },
              { id: "c", text: "$g(x)=2x+5$" },
              { id: "d", text: "$g(x)=2x+1+4x$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vertical translation", statement: "$f(x)+k$ shifts the graph of $f$ up $k$ units when $k>0$." },
              { kind: "property", name: "Output change", statement: "Adding a constant outside the function increases every output by that constant." },
            ],
            steps: [
              { reasoning: "Represent an upward shift of 4 by adding 4 to the function output.", working: "g(x)=f(x)+4", marks: 1, markCode: "M" },
              { reasoning: "Substitute the original rule and combine constants.", working: "g(x)=2x+1+4=2x+5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** $g(x)=2x+5$",
            commonErrors: ["Subtracting 4, which shifts the graph down.", "Using $x-4$ inside the function, which is a horizontal shift."],
          },
        },
        {
          id: "alg2-3a-trans-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Let $f(x)=3x-2$ and $g(x)=f(x+5)$. State the horizontal translation from $f$ to $g$, then find $g(1)$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5 units right; $g(1)=16$" },
              { id: "b", text: "5 units left; $g(1)=16$" },
              { id: "c", text: "5 units left; $g(1)=1$" },
              { id: "d", text: "5 units right; $g(1)=1$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Horizontal translation", statement: "$f(x+h)$ shifts the graph left $h$ units for $h>0$; equivalently, $(x,y)\\mapsto(x-h,y)$." },
              { kind: "property", name: "Function evaluation", statement: "Evaluate the complete input expression before applying the function rule." },
            ],
            steps: [
              { reasoning: "Interpret the positive 5 added inside the input as a shift left by 5 units.", working: "g(x)=f(x+5)\\quad\\Rightarrow\\quad 5\\text{ units left}", marks: 1, markCode: "R" },
              { reasoning: "Substitute $x=1$ into the transformed function and then use $f(u)=3u-2$.", working: "g(1)=f(1+5)=f(6)", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the output.", working: "f(6)=3(6)-2=16", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The graph shifts 5 units left, and $g(1)=16$.",
            commonErrors: ["Reading the inside plus sign as a shift right.", "Evaluating $f(1)$ instead of $f(1+5)$."],
          },
        },
        {
          id: "alg2-3a-trans-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A line $f$ passes through $(2, -1)$ and has slope $3$. The graph is translated 4 units left and 2 units up. Write the transformed function in slope-intercept form and give the image of the point $(2,-1)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Point-slope form", statement: "$y-y_1=m(x-x_1)$ for a line with slope $m$ through $(x_1,y_1)$." },
              { kind: "definition", name: "Horizontal translation", statement: "A shift right 1 maps $(x,y)$ to $(x+1,y)$." },
              { kind: "definition", name: "Vertical translation", statement: "A shift up 2 maps $(x,y)$ to $(x,y+2)$." },
            ],
            steps: [
              { reasoning: "Write the original line using its known point and slope, then simplify.", working: "f(x)+1=3(x-2)\\implies f(x)=3x-7", marks: 1, markCode: "M" },
              { reasoning: "A shift left 4 uses input $x+4$; a shift up 2 adds 2 to the output.", working: "g(x)=f(x+4)+2", marks: 1, markCode: "M" },
              { reasoning: "Substitute the original rule and simplify to slope-intercept form.", working: "g(x)=3(x+4)-7+2=3x+7", marks: 1, markCode: "A" },
              { reasoning: "Apply both point mappings to the original point.", working: "(2,-1)\\mapsto(2-4,-1+2)=(-2,1)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$g(x)=3x+7$; the image of $(2,-1)$ is $(-2,1)$.",
            commonErrors: ["Using $f(x-4)$ for a shift left 4.", "Applying the vertical translation to the input rather than the output."],
            examinerNote: "Equivalent point-slope work earns credit if the final function and transformed point are correct.",
          },
        },
        {
          id: "alg2-3a-trans-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A taxi company charges a $\\$4$ booking fee plus $\\$2.50$ per mile. The fare for a trip of $d$ miles is $f(d) = 2.5d + 4$ dollars. The company is considering two changes to its pricing:\n\n- **Plan G:** add a flat $\\$3$ fuel surcharge to every fare, giving $g(d) = f(d) + 3$.\n- **Plan H:** the first $2$ miles of every trip (with $d \\ge 2$) are not charged by the mile, so a trip of $d$ miles is charged as if it were $d - 2$ miles, giving $h(d) = f(d - 2)$.",
          parts: [
            { label: "a", prompt: "Write $g(d)$ in slope-intercept form and state the translation from $f$ to $g$.", marks: 2 },
            { label: "b", prompt: "Write $h(d)$ in slope-intercept form and state the translation from $f$ to $h$.", marks: 2 },
            { label: "c", prompt: "Find the fare for a $10$-mile trip under Plan G and under Plan H.", marks: 2 },
            { label: "d", prompt: "Show that for every trip with $d \\ge 2$, Plan G costs a constant amount more than Plan H, and explain geometrically why this happens.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Intercept of $g$", answer: 7, unit: "dollars" },
              { label: "(b) Intercept of $h$", answer: -1, unit: "dollars" },
              { label: "(c) Plan G fare for 10 miles", answer: 32, unit: "dollars" },
              { label: "(c) Plan H fare for 10 miles", answer: 24, unit: "dollars" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vertical translation", statement: "$f(d) + k$ shifts the graph of $f$ up $k$ units; $(d, y) \\mapsto (d, y + k)$." },
              { kind: "definition", name: "Horizontal translation", statement: "$f(d - c)$ shifts the graph of $f$ right $c$ units; $(d, y) \\mapsto (d + c, y)$." },
              { kind: "property", name: "Translations preserve slope", statement: "A translation changes position but not steepness, so a translated line is parallel to the original." },
            ],
            steps: [
              { part: "a", reasoning: "Add $3$ to the output and combine constants.", working: "g(d) = 2.5d + 4 + 3 = 2.5d + 7", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Adding outside the function is a vertical translation up $3$ units.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "Replace $d$ by $d - 2$ inside $f$ and simplify.", working: "h(d) = 2.5(d - 2) + 4 = 2.5d - 5 + 4 = 2.5d - 1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Subtracting $2$ inside the function is a horizontal translation right $2$ units.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Evaluate Plan G at $d = 10$.", working: "g(10) = 2.5(10) + 7 = 32", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Evaluate Plan H at $d = 10$ (equivalently $f(8) = 24$).", working: "h(10) = 2.5(10) - 1 = 24", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Subtract the two rules.", working: "g(d) - h(d) = (2.5d + 7) - (2.5d - 1)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The $d$ terms cancel, leaving a constant.", working: "g(d) - h(d) = 8", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Both lines have slope $2.5$ because translations preserve slope, so they are parallel and the vertical gap between them stays at $\\$8$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $g(d) = 2.5d + 7$; up $3$. (b) $h(d) = 2.5d - 1$; right $2$. (c) $\\$32$ and $\\$24$. (d) $g(d) - h(d) = 8$ for all $d \\ge 2$; the lines are parallel.",
            commonErrors: [
              "Using $f(d + 2)$ for a shift right, which gives $2.5d + 9$.",
              "Forgetting to distribute $2.5$ across $(d - 2)$.",
              "Assuming a horizontal shift leaves the $y$-intercept unchanged.",
            ],
          },
        },
      ],
    },
    {
      id: "alg2-3a-reflections",
      title: "Reflections of linear functions",
      skill: "Identify reflections across the coordinate axes and determine their effects on points and equations.",
      lesson: {
        sections: [
          {
            heading: "Reflect across the x-axis",
            body: "For $g(x)=-f(x)$, every output changes sign, so each point $(x,y)$ maps to $(x,-y)$. This is a reflection across the $x$-axis. If $f(x)=mx+b$, then $g(x)=-mx-b$: both slope and $y$-intercept change sign.",
          },
          {
            heading: "Reflect across the y-axis",
            body: "For $g(x)=f(-x)$, every input changes sign, so $(x,y)$ maps to $(-x,y)$. This is a reflection across the $y$-axis. For a line $f(x)=mx+b$, substituting $-x$ gives $g(x)=-mx+b$: the slope changes sign, while the $y$-intercept stays the same.",
          },
          {
            heading: "Use points and equations as checks",
            body: "A point on the $x$-axis or $y$-axis stays on that axis under reflection; other points move to the opposite side. If both reflections are applied, $(x,y)$ maps to $(-x,-y)$, a half-turn about the origin. For a linear graph, check both its slope and intercept after substitution to catch a sign error.",
          },
        ],
        keyFormulas: [
          { name: "Reflection across the x-axis", statement: "$g(x)=-f(x)$; $(x,y)\\mapsto(x,-y)$" },
          { name: "Reflection across the y-axis", statement: "$g(x)=f(-x)$; $(x,y)\\mapsto(-x,y)$" },
        ],
        workedExample: {
          problem: "For $f(x)=2x-3$, write the equations after reflection across the $x$-axis and across the $y$-axis.",
          solution: "Across the $x$-axis: $-f(x)=-(2x-3)=-2x+3$. Across the $y$-axis: $f(-x)=2(-x)-3=-2x-3$. Both reflected lines have slope $-2$, but their intercepts differ: $3$ and $-3$.",
        },
      },
      questions: [
        {
          id: "alg2-3a-ref-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The point $(3,-2)$ is reflected across the $x$-axis. What are its new coordinates?",
          response: { type: "numeric", parts: [{ label: "New $x$-coordinate", answer: 3 }, { label: "New $y$-coordinate", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reflection across the x-axis", statement: "A reflection across the $x$-axis preserves $x$ and changes the sign of $y$: $(x,y)\\mapsto(x,-y)$." },
              { kind: "property", name: "Opposites", statement: "The opposite of $-2$ is $2$." },
            ],
            steps: [
              { reasoning: "Keep the horizontal coordinate unchanged.", working: "x'=3", marks: 1, markCode: "B" },
              { reasoning: "Reverse the sign of the vertical coordinate.", working: "y'=-(-2)=2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$(3,2)$",
            commonErrors: ["Changing the $x$-coordinate instead, which would be a reflection across the $y$-axis."],
          },
        },
        {
          id: "alg2-3a-ref-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "If $f(x)=3x+4$, which equation represents the reflection of its graph across the $y$-axis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$g(x)=-3x-4$" },
              { id: "b", text: "$g(x)=3x-4$" },
              { id: "c", text: "$g(x)=-3x+4$" },
              { id: "d", text: "$g(x)=3x+4$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reflection across the y-axis", statement: "Replace the input $x$ by $-x$: $g(x)=f(-x)$." },
              { kind: "property", name: "Substitution in a linear rule", statement: "For $f(x)=mx+b$, $f(-x)=-mx+b$." },
            ],
            steps: [
              { reasoning: "Replace the input by its opposite to reflect the graph across the $y$-axis.", working: "g(x)=f(-x)=3(-x)+4", marks: 1, markCode: "M" },
              { reasoning: "Simplify the expression; the constant term is unchanged.", working: "g(x)=-3x+4", marks: 1, markCode: "A" },
              { reasoning: "Identify the option with the reflected equation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $g(x)=-3x+4$",
            commonErrors: ["Negating the whole function, which reflects across the $x$-axis.", "Changing the sign of the constant term when reflecting across the $y$-axis."],
          },
        },
        {
          id: "alg2-3a-ref-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Let $f(x)=2x-5$. Reflect its graph first across the $x$-axis and then across the $y$-axis. Write the final function and state the image of the point $(3,1)$ on the original graph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reflection across the x-axis", statement: "$y$-values change sign: $(x,y)\\mapsto(x,-y)$, equivalently $f(x)\\mapsto-f(x)$." },
              { kind: "definition", name: "Reflection across the y-axis", statement: "$x$-values change sign: $(x,y)\\mapsto(-x,y)$, equivalently $f(x)\\mapsto f(-x)$." },
              { kind: "property", name: "Composition of transformations", statement: "When transformations are applied in sequence, apply each coordinate mapping in the stated order." },
            ],
            steps: [
              { reasoning: "Reflect across the $x$-axis by negating the full function.", working: "f_1(x)=-f(x)=-(2x-5)=-2x+5", marks: 1, markCode: "M" },
              { reasoning: "Reflect the result across the $y$-axis by substituting $-x$.", working: "f_2(x)=f_1(-x)=-2(-x)+5=2x+5", marks: 1, markCode: "M" },
              { reasoning: "Apply the first point mapping to $(3,1)$.", working: "(3,1)\\mapsto(3,-1)", marks: 1, markCode: "A" },
              { reasoning: "Apply the second point mapping to the reflected point.", working: "(3,-1)\\mapsto(-3,-1)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$f_2(x)=2x+5$; $(3,1)$ maps to $(-3,-1)$.",
            commonErrors: ["Applying only one of the two reflections.", "Negating the constant term on the $y$-axis reflection."],
            examinerNote: "The given point lies on the original line since $f(3)=1$; both transformation steps must be shown for the final point.",
          },
        },
        {
          id: "alg2-3a-ref-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A laser beam travels along the line $f(x) = 2x - 6$ in a coordinate grid where both axes are in meters. A mirror system reflects the beam across the $x$-axis to give the path $g$, and separately across the $y$-axis to give the path $h$. The point $P(5, 4)$ lies on the original beam.",
          parts: [
            { label: "a", prompt: "Write $g(x)$ in slope-intercept form and state its $y$-intercept.", marks: 2 },
            { label: "b", prompt: "Write $h(x)$ in slope-intercept form and state its $y$-intercept.", marks: 2 },
            { label: "c", prompt: "Find the $x$-intercepts of $f$, $g$ and $h$. Explain which reflected path shares its $x$-intercept with $f$ and why.", marks: 3 },
            { label: "d", prompt: "Find the images of $P$ under each reflection and verify each image lies on the correct reflected path.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $y$-intercept of $g$", answer: 6 },
              { label: "(b) $y$-intercept of $h$", answer: -6 },
              { label: "(c) $x$-intercept of $g$", answer: 3 },
              { label: "(c) $x$-intercept of $h$", answer: -3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reflection across the x-axis", statement: "$g(x) = -f(x)$; $(x, y) \\mapsto (x, -y)$." },
              { kind: "definition", name: "Reflection across the y-axis", statement: "$h(x) = f(-x)$; $(x, y) \\mapsto (-x, y)$." },
              { kind: "property", name: "Invariant points", statement: "A point on the mirror line is unchanged by the reflection, so $x$-intercepts are fixed by a reflection across the $x$-axis and $y$-intercepts by a reflection across the $y$-axis." },
            ],
            steps: [
              { part: "a", reasoning: "Negate the whole function.", working: "g(x) = -(2x - 6) = -2x + 6", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Read the intercept.", working: "y\\text{-intercept } 6", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Replace $x$ by $-x$.", working: "h(x) = 2(-x) - 6 = -2x - 6", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Read the intercept; it equals that of $f$ because the $y$-axis reflection fixes it.", working: "y\\text{-intercept } -6", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Set each function equal to zero.", working: "f: 2x - 6 = 0 \\Rightarrow x = 3; \\quad g: -2x + 6 = 0 \\Rightarrow x = 3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Solve for $h$.", working: "h: -2x - 6 = 0 \\Rightarrow x = -3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The $x$-intercept $(3, 0)$ lies on the $x$-axis, the mirror for $g$, so it does not move. A reflection across the $y$-axis moves it to $(-3, 0)$.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Apply the coordinate mappings.", working: "(5, 4) \\mapsto (5, -4) \\text{ for } g; \\quad (5, 4) \\mapsto (-5, 4) \\text{ for } h", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Verify by substitution.", working: "g(5) = -10 + 6 = -4; \\quad h(-5) = -2(-5) - 6 = 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $g(x) = -2x + 6$, intercept $6$. (b) $h(x) = -2x - 6$, intercept $-6$. (c) $x$-intercepts $3$, $3$, $-3$; $g$ shares $(3,0)$ with $f$ because it lies on the $x$-axis mirror. (d) $(5,-4)$ on $g$ and $(-5,4)$ on $h$.",
            commonErrors: [
              "Negating only the $x$ term when reflecting across the $x$-axis.",
              "Negating the constant when reflecting across the $y$-axis.",
              "Believing both reflected paths keep the original $x$-intercept.",
            ],
          },
        },
      ],
    },
    {
      id: "alg2-3a-dilations",
      title: "Stretches, compressions, and combined transformations",
      skill: "Determine how output and input multipliers change a linear graph, including when transformations are combined.",
      lesson: {
        sections: [
          {
            heading: "Vertical scaling multiplies outputs",
            body: "For $g(x)=af(x)$, every output is multiplied by $a$. If $|a|>1$, the graph is vertically stretched away from the $x$-axis; if $0<|a|<1$, it is vertically compressed toward the $x$-axis. A negative $a$ also reflects across the $x$-axis. For a line $f(x)=mx+b$, the new slope and intercept are $am$ and $ab$.",
          },
          {
            heading: "Horizontal scaling multiplies inputs",
            body: "For $g(x)=f(bx)$, an output that originally occurred at input $x$ now occurs when $bx_{new}=x$, so the horizontal scale factor is $\\frac{1}{|b|}$. Thus $|b|>1$ compresses horizontally, and $0<|b|<1$ stretches horizontally. For a linear function $f(x)=mx+c$, substitution gives $g(x)=mbx+c$, so the slope is multiplied by $b$ while the intercept stays fixed. A negative $b$ also reflects across the $y$-axis.",
          },
          {
            heading: "Combine changes in a deliberate order",
            body: "In an expression such as $g(x)=a f(b(x-h))+k$, the input adjustments occur inside $f$ and the output adjustments outside. The factor $a$ scales or reflects vertically, $b$ scales or reflects horizontally, $h$ produces a horizontal translation right by $h$, and $k$ translates vertically. For a reliable result, substitute the original rule and simplify; test a known point against the transformed coordinates to verify the direction and scale.",
          },
        ],
        keyFormulas: [
          { name: "Vertical scale", statement: "$g(x)=af(x)$; $(x,y)\\mapsto(x,ay)$" },
          { name: "Horizontal scale", statement: "$g(x)=f(bx)$; $(x,y)\\mapsto(\\frac{x}{b},y)$ for $b\\ne0$" },
          { name: "Combined transformation form", statement: "$g(x)=a f(b(x-h))+k$" },
        ],
        workedExample: {
          problem: "Let $f(x)=2x+3$ and $g(x)=\\frac{1}{2}f(3x)-4$. Describe the scaling and translation, then write $g$ in slope-intercept form.",
          solution: "The factor $\\frac{1}{2}$ outside is a vertical compression by $\\frac{1}{2}$. The factor 3 on the input is a horizontal compression by $\\frac{1}{3}$. Subtracting 4 shifts down 4. Algebraically, $g(x)=\\frac{1}{2}(2(3x)+3)-4=3x+\\frac{3}{2}-4=3x-\\frac{5}{2}$.",
        },
      },
      questions: [
        {
          id: "alg2-3a-dil-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The graph of $f$ is transformed to $g(x)=3f(x)$. What happens to each point $(x,y)$ on the graph of $f$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(3x,y)$; a horizontal stretch by 3" },
              { id: "b", text: "$(x,3y)$; a vertical stretch by 3" },
              { id: "c", text: "$(x,\\frac{y}{3})$; a vertical compression by 3" },
              { id: "d", text: "$(-x,3y)$; a reflection across the $y$-axis and vertical stretch" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vertical scaling", statement: "$g(x)=af(x)$ multiplies every output by $a$, so $(x,y)\\mapsto(x,ay)$." },
              { kind: "property", name: "Vertical stretch", statement: "When $|a|>1$, vertical distances from the $x$-axis are multiplied by $|a|$." },
            ],
            steps: [
              { reasoning: "The input is unchanged, so the $x$-coordinate stays the same.", working: "x'=x", marks: 1, markCode: "B" },
              { reasoning: "Multiply the output by 3; because 3 is greater than 1, this is a vertical stretch.", working: "y'=3y\\quad\\Rightarrow\\quad(x,y)\\mapsto(x,3y)", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $(x,y)\\mapsto(x,3y)$; a vertical stretch by a factor of 3.",
            commonErrors: ["Multiplying the $x$-coordinate, which would change the input rather than the output."],
          },
        },
        {
          id: "alg2-3a-dil-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "For $f(x)=2x-1$, let $g(x)=f(4x)$. Find the slope of $g$ and state the horizontal scale factor from the graph of $f$ to the graph of $g$.",
          response: { type: "numeric", parts: [{ label: "Slope of $g$", answer: 8 }, { label: "Horizontal scale factor", answer: 0.25 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Horizontal scaling", statement: "$f(bx)$ scales horizontal coordinates by $\\frac{1}{|b|}$; a point $(x,y)$ maps to $(\\frac{x}{b},y)$." },
              { kind: "property", name: "Substitution", statement: "Substitute the entire input $4x$ into the original function rule." },
              { kind: "definition", name: "Slope-intercept form", statement: "In $y=mx+b$, the slope is the coefficient of $x$." },
            ],
            steps: [
              { reasoning: "Substitute $4x$ for the input and simplify the transformed function.", working: "g(x)=f(4x)=2(4x)-1=8x-1", marks: 1, markCode: "M" },
              { reasoning: "Read the slope from the coefficient of $x$.", working: "m_g=8", marks: 1, markCode: "A" },
              { reasoning: "The input factor 4 makes the horizontal scale factor its reciprocal.", working: "\\text{Horizontal scale factor}=\\frac{1}{4}=0.25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Slope $8$; horizontal scale factor $0.25$ (a compression to one-fourth the original width).",
            commonErrors: ["Giving 4 as the horizontal scale factor instead of its reciprocal.", "Changing the $y$-intercept when only the input is scaled."],
          },
        },
        {
          id: "alg2-3a-dil-q3",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Let $f(x)=x+2$ and define $g(x)=-2f(3(x-1))+4$. Describe every transformation from the graph of $f$ to the graph of $g$, write $g$ in slope-intercept form, and find the image of the point $(-2,0)$ on $f$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Horizontal scaling", statement: "An input factor $b$ scales horizontal distances by $\\frac{1}{|b|}$; $b>1$ is a compression." },
              { kind: "definition", name: "Horizontal translation", statement: "$f(x-h)$ shifts right $h$ units." },
              { kind: "definition", name: "Vertical scaling and reflection", statement: "$af(x)$ scales outputs by $|a|$; a negative $a$ also reflects across the $x$-axis." },
              { kind: "definition", name: "Vertical translation", statement: "Adding $k$ outside a function shifts it up $k$ units when $k>0$." },
            ],
            steps: [
              { reasoning: "Interpret $3(x-1)$: factor 3 compresses horizontally by $\\frac{1}{3}$, and $x-1$ shifts right 1 unit.", working: "x\\mapsto \\frac{x}{3}+1\\quad\\Rightarrow\\quad\\text{horizontal compression by }\\frac{1}{3},\\text{ then right }1", marks: 1, markCode: "R" },
              { reasoning: "Interpret the outside factor $-2$ as a vertical stretch by 2 and reflection across the $x$-axis; $+4$ shifts up 4.", working: "y\\mapsto -2y+4", marks: 1, markCode: "R" },
              { reasoning: "Substitute the rule for $f$ into the transformed expression and simplify.", working: "g(x)=-2(3(x-1)+2)+4=-6x+6", marks: 1, markCode: "M" },
              { reasoning: "The original point $(-2,0)$ maps horizontally to $x'=\\frac{-2}{3}+1=\\frac{1}{3}$; the original output 0 then maps to $y'=-2(0)+4=4$.", working: "(-2,0)\\mapsto(\\frac{1}{3},4)", marks: 1, markCode: "M" },
              { reasoning: "State the transformed point and confirm it lies on the simplified function.", working: "g(\\frac{1}{3})=-6(\\frac{1}{3})+6=4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Horizontal compression by $\\frac{1}{3}$ and shift right 1; vertical stretch by 2, reflection across the $x$-axis, then shift up 4. $g(x)=-6x+6$. The image of $(-2,0)$ is $(\\frac{1}{3},4)$.",
            commonErrors: ["Reading $-2$ as only a reflection and omitting the vertical stretch.", "Calling the horizontal scale factor 3 instead of $\\frac{1}{3}$.", "Applying the horizontal transformation to the point as $x'=3(x-1)$ rather than solving $3(x'-1)=x$."],
            examinerNote: "Verify the transformed point by substituting its new input into the simplified rule: $g(\\frac{1}{3})=4$.",
          },
        },
        {
          id: "alg2-3a-dil-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A recording studio charges $C(h) = 20h + 30$ dollars for $h$ hours of booking. The studio considers three new pricing schemes:\n\n- **Premium:** $P(h) = 1.5\\,C(h)$.\n- **Rush:** $R(h) = C(2h)$, charging as if twice the time had passed.\n- **Rush Premium with discount:** $S(h) = 1.5\\,C(2h) - 10$.",
          parts: [
            { label: "a", prompt: "Write $P(h)$ in slope-intercept form and give its slope.", marks: 2 },
            { label: "b", prompt: "Write $R(h)$ in slope-intercept form and give its slope. State the horizontal scale factor from $C$ to $R$.", marks: 2 },
            { label: "c", prompt: "Write $S(h)$ in slope-intercept form and give its $y$-intercept. Describe every transformation applied to $C$.", marks: 3 },
            { label: "d", prompt: "The point $(3, 90)$ lies on $C$. Find its image on $S$ and verify that it lies on your function from part (c).", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Slope of $P$", answer: 30 },
              { label: "(b) Slope of $R$", answer: 40 },
              { label: "(c) $y$-intercept of $S$", answer: 35, unit: "dollars" },
              { label: "(d) $y$-coordinate of the image point", answer: 125, unit: "dollars" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vertical scaling", statement: "$af(x)$ multiplies every output by $a$: $(x, y) \\mapsto (x, ay)$. Both the slope and intercept of a line are multiplied by $a$." },
              { kind: "definition", name: "Horizontal scaling", statement: "$f(bx)$ scales horizontal distances by $\\frac{1}{|b|}$: $(x, y) \\mapsto (\\frac{x}{b}, y)$. For a line, the slope is multiplied by $b$ and the intercept is unchanged." },
              { kind: "property", name: "Order of operations in transformations", statement: "Input changes act inside the function and output changes outside; substitute the rule and simplify to check." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply the whole rule by $1.5$.", working: "P(h) = 1.5(20h + 30) = 30h + 45", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Read the slope.", working: "\\text{slope } 30", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Replace $h$ by $2h$.", working: "R(h) = 20(2h) + 30 = 40h + 30", marks: 1, markCode: "M" },
              { part: "b", reasoning: "The slope is $40$; the input factor $2$ gives the reciprocal horizontal scale factor $\\frac{1}{2}$ (a compression).", working: "\\text{scale factor } \\frac{1}{2}", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Substitute $C(2h) = 40h + 30$ and apply the multiplier and the shift.", working: "S(h) = 1.5(40h + 30) - 10 = 60h + 45 - 10", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Simplify.", working: "S(h) = 60h + 35", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Description: horizontal compression by $\\frac{1}{2}$, vertical stretch by $1.5$, vertical translation down $10$.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Map the point: the input is halved, the output is multiplied by $1.5$ and then decreased by $10$.", working: "(3, 90) \\mapsto \\left(\\frac{3}{2},\\; 1.5(90) - 10\\right) = (1.5, 125)", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Verify by substitution into $S$.", working: "S(1.5) = 60(1.5) + 35 = 125", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $P(h) = 30h + 45$, slope $30$. (b) $R(h) = 40h + 30$, slope $40$, scale factor $\\frac{1}{2}$. (c) $S(h) = 60h + 35$, intercept $35$; compress horizontally by $\\frac{1}{2}$, stretch vertically by $1.5$, shift down $10$. (d) $(1.5, 125)$.",
            commonErrors: [
              "Giving the horizontal scale factor as $2$ rather than $\\frac{1}{2}$.",
              "Multiplying only the $h$ term by $1.5$ and not the constant.",
              "Doubling the input of the image point instead of halving it.",
            ],
          },
        },
      ],
    },
  ],
};
