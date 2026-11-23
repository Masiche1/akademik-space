import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "m8-u2-lesson-2-1",
  code: "2-1",
  title: "Slope and Proportional Relationships",
  goal: "I CAN graph proportional relationships, interpret the unit rate as slope, and write lines in the form y = mx + b.",
  standards: ["8.EE.B.5", "8.EE.B.6"],
  vocabulary: [
    {
      term: "Proportional relationship",
      definition:
        "A relationship in which $y=kx$ for a constant $k$. Its graph is a straight line through the origin.",
    },
    {
      term: "Unit rate",
      definition:
        "The amount of one quantity per one unit of another quantity, such as $\\$4.50$ per pound or $60$ miles per hour.",
    },
    {
      term: "Slope",
      definition:
        "The steepness of a line: $m=\\frac{\\text{rise}}{\\text{run}}=\\frac{y_2-y_1}{x_2-x_1}$. It is the same between any two points on a line.",
    },
    {
      term: "y-intercept",
      definition:
        "The $y$-coordinate of the point where a line crosses the $y$-axis, that is, the value of $y$ when $x=0$.",
    },
    {
      term: "Similar triangles",
      definition:
        "Triangles with the same shape: corresponding angles are equal and corresponding sides are in proportion.",
    },
    {
      term: "Slope-intercept form",
      definition:
        "The equation $y=mx+b$ of a line, where $m$ is the slope and $b$ is the $y$-intercept.",
    },
  ],
  concepts: [
    {
      id: "m8-u2-proportional-unit-rate",
      title: "Proportional relationships and unit rate as slope",
      skill:
        "Graph proportional relationships, interpret the unit rate as the slope, and compare rates given in different representations.",
      lesson: {
        sections: [
          {
            heading: "Proportional relationships are lines through the origin",
            body: "In a proportional relationship, $y=kx$. Every ratio $\\frac{y}{x}$ equals the same constant $k$, the **unit rate**. The graph is a straight line through $(0,0)$, and the point $(1,k)$ is on the line. The unit rate is the **slope** of the line.",
          },
          {
            heading:
              "Reading the rate from tables, graphs, equations and words",
            body: 'From a table, divide $y$ by $x$ for any row (check that every row gives the same value). From a graph, read the $y$-value at $x=1$ or compute rise over run. From an equation $y=kx$, the rate is the coefficient $k$. From words, such as "$60$ miles in $2$ hours," divide: $\\frac{60}{2}=30$ miles per hour.',
          },
          {
            heading: "Comparing two relationships",
            body: "To compare, first find the unit rate of each, written in the same units. The relationship with the greater unit rate has the steeper line. For example, $y=4.5x$ has slope $4.5$, while a line through $(2,11)$ and the origin has slope $5.5$ and is steeper.",
          },
        ],
        keyFormulas: [
          {
            name: "Proportional relationship",
            statement:
              "$y=kx$, where $k=\\frac{y}{x}$ is the unit rate and the slope",
          },
          { name: "Slope", statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$" },
        ],
        workedExample: {
          problem:
            "Machine A packs boxes according to $y=18x$ (boxes $y$ after $x$ minutes). Machine B packs $105$ boxes in $7$ minutes at a constant rate. Which machine is faster, and by how much?",
          solution:
            "Machine A: unit rate $18$ boxes per minute. Machine B: $\\frac{105}{7}=15$ boxes per minute. Machine A is faster by $18-15=3$ boxes per minute.",
        },
      },
      questions: [
        {
          id: "m8-u2-proportional-unit-rate-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which equation represents a proportional relationship between $x$ and $y$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=3x$" },
              { id: "b", text: "$y=3x+1$" },
              { id: "c", text: "$y=x^2$" },
              { id: "d", text: "$y=x+3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Proportional relationship",
                statement:
                  "A proportional relationship has the form $y=kx$; its graph is a line through the origin.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Only $y=3x$ has the form $y=kx$ with no added constant, so $x=0$ gives $y=0$.",
                working: "y=3x",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $y=3x$",
            commonErrors: [
              "Choosing $y=3x+1$ because it is linear; a line that does not pass through the origin is not proportional.",
              "Choosing $y=x^2$, which is not linear.",
            ],
          },
        },
        {
          id: "m8-u2-proportional-unit-rate-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A proportional relationship is shown in the table. Find the unit rate, which is the slope of its graph.\n\n| $x$ | $2$ | $4$ | $6$ |\n|---|---|---|---|\n| $y$ | $5$ | $10$ | $15$ |",
          response: {
            type: "numeric",
            parts: [{ label: "Unit rate (slope)", answer: 2.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Unit rate",
                statement: "In $y=kx$, $k=\\frac{y}{x}$ and equals the slope.",
              },
            ],
            steps: [
              {
                reasoning: "Divide $y$ by $x$ in a row of the table.",
                working: "\\frac{5}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evaluate, and check another row: $\\frac{10}{4}=2.5$ and $\\frac{15}{6}=2.5$.",
                working: "2.5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2.5$",
            commonErrors: [
              "Dividing $x$ by $y$, giving $0.4$.",
              "Subtracting $y-x$ instead of dividing.",
            ],
          },
        },
        {
          id: "m8-u2-proportional-unit-rate-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "At Store A, the cost $y$ in dollars of $x$ pounds of almonds is $y=4.5x$. At Store B, the cost of almonds is a proportional relationship whose graph is a straight line through the origin and the point $(3,15)$. How many more dollars per pound does Store B charge than Store A?",
          response: {
            type: "numeric",
            parts: [
              { label: "Difference per pound", answer: 0.5, unit: "dollars" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unit rate as slope",
                statement:
                  "The slope of a line through the origin is the unit rate $\\frac{y}{x}$.",
              },
            ],
            steps: [
              {
                reasoning: "Store A's unit rate is the coefficient of $x$.",
                working: "4.5",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Store B's unit rate is the slope from $(0,0)$ to $(3,15)$.",
                working: "\\frac{15}{3}=5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract to compare.",
                working: "5-4.5=0.5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Store B charges $\\$0.50$ more per pound.",
            commonErrors: [
              "Using $15$ as the unit rate instead of dividing by $3$.",
              "Subtracting in the wrong order and giving $-0.5$.",
            ],
          },
        },
        {
          id: "m8-u2-proportional-unit-rate-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Two cyclists ride at constant speeds. Cyclist A's distance $d$ in miles after $t$ hours is $d=12t$. For Cyclist B, the table shows distance and time.\n\n| Time $t$ (hours) | $2$ | $3$ | $5$ |\n|---|---|---|---|\n| Distance $d$ (miles) | $22$ | $33$ | $55$ |",
          parts: [
            {
              label: "a",
              prompt: "State Cyclist A's speed in miles per hour.",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Find Cyclist B's speed in miles per hour.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Which cyclist is faster? How many miles per hour faster?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "How far does the faster cyclist travel in $4.5$ hours?",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Cyclist B's graph is a straight line through the origin. Explain what the point $(1,11)$ on the graph means and how it relates to the slope.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Speed of A", answer: 12, unit: "mph" },
              { label: "(b) Speed of B", answer: 11, unit: "mph" },
              { label: "(c) Difference in speed", answer: 1, unit: "mph" },
              { label: "(d) Distance in 4.5 hours", answer: 54, unit: "miles" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unit rate as slope",
                statement:
                  "In $d=kt$, the constant $k$ is the unit rate and the slope of the graph.",
              },
              {
                kind: "formula",
                name: "Unit rate from a table",
                statement:
                  "$k=\\frac{d}{t}$ for any row of a proportional table.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The coefficient of $t$ is the rate.",
                working: "12",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning: "Divide distance by time in one row.",
                working: "\\frac{22}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Evaluate. The other rows also give $11$: $\\frac{33}{3}=11$ and $\\frac{55}{5}=11$.",
                working: "11",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Compare the two unit rates: $12>11$, so Cyclist A is faster.",
                working: "\\text{Cyclist A}",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning: "Subtract the speeds.",
                working: "12-11=1",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Substitute $t=4.5$ into $d=12t$.",
                working: "d=12\\times4.5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Evaluate.",
                working: "54",
                marks: 1,
                markCode: "A",
              },
              {
                part: "e",
                reasoning:
                  "The point $(1,11)$ means that after $1$ hour, Cyclist B has traveled $11$ miles.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "e",
                reasoning:
                  "The $y$-coordinate at $x=1$ equals the unit rate, so it equals the slope $\\frac{\\text{rise}}{\\text{run}}=\\frac{11}{1}$ of the line.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) $12$ mph (b) $11$ mph (c) Cyclist A, by $1$ mph (d) $54$ miles (e) $(1,11)$ means $11$ miles in $1$ hour; the unit rate is the slope.",
            commonErrors: [
              "Comparing the distances $22$ and $12$ instead of the rates.",
              "In (d), using Cyclist B's rate.",
            ],
            examinerNote:
              "In (d) follow through from the faster cyclist identified in (c) only if the rate used is consistent.",
          },
        },
      ],
    },
    {
      id: "m8-u2-slope-similar-triangles",
      title: "Slope and y = mx + b",
      skill:
        "Use similar triangles to explain why slope is constant, and write and use equations in the form y = mx + b.",
      lesson: {
        sections: [
          {
            heading: "Why slope is the same between any two points",
            body: "Pick two points on a line and draw a right triangle with the line as the hypotenuse, a horizontal leg (the run) and a vertical leg (the rise). Any two such triangles on the same line are **similar**, because their angles match. So their sides are in proportion, and $\\frac{\\text{rise}}{\\text{run}}$ is the same for both. That is why a line has just one slope.",
          },
          {
            heading: "The equation y = mx + b",
            body: "A line through the origin has equation $y=mx$. A line with the same slope that crosses the $y$-axis at $(0,b)$ is the vertical shift of that line up by $b$, so its equation is $y=mx+b$. Read $m$ and $b$ directly from the equation, or find $m$ from two points and then solve for $b$ using one point.",
          },
          {
            heading: "Finding b",
            body: "Substitute the slope and the coordinates of a known point into $y=mx+b$ and solve for $b$. For slope $2$ through $(3,10)$: $10=2(3)+b$, so $b=4$ and the equation is $y=2x+4$.",
          },
        ],
        keyFormulas: [
          { name: "Slope-intercept form", statement: "$y=mx+b$" },
          {
            name: "Slope from two points",
            statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$",
          },
        ],
        workedExample: {
          problem:
            "Write the equation of the line through $(1,5)$ and $(3,11)$.",
          solution:
            "Slope: $m=\\frac{11-5}{3-1}=\\frac{6}{2}=3$. Substitute $(1,5)$: $5=3(1)+b$, so $b=2$. The equation is $y=3x+2$. Check with $(3,11)$: $3(3)+2=11$.",
        },
      },
      questions: [
        {
          id: "m8-u2-slope-similar-triangles-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the slope of the line through $(1,2)$ and $(3,8)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{3}$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$6$" },
              { id: "d", text: "$3$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Slope formula",
                statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$",
              },
            ],
            steps: [
              {
                reasoning: "Rise is $8-2=6$ and run is $3-1=2$.",
                working: "m=\\frac{6}{2}=3",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** $3$",
            commonErrors: [
              "Inverting the ratio to run over rise, giving $\\frac{1}{3}$.",
              "Giving only the rise, $6$.",
            ],
          },
        },
        {
          id: "m8-u2-slope-similar-triangles-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the slope of the line that passes through $(-2,5)$ and $(4,-1)$.",
          response: {
            type: "numeric",
            parts: [{ label: "Slope", answer: -1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Slope formula",
                statement:
                  "$m=\\frac{y_2-y_1}{x_2-x_1}$, subtracting coordinates in the same order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Substitute the coordinates, keeping the same order in numerator and denominator.",
                working: "m=\\frac{-1-5}{4-(-2)}=\\frac{-6}{6}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Simplify. The line falls from left to right, so the slope is negative.",
                working: "m=-1",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-1$",
            commonErrors: [
              "Writing $4-2$ instead of $4-(-2)$ in the denominator.",
              "Subtracting in different orders on top and bottom, giving $+1$.",
            ],
          },
        },
        {
          id: "m8-u2-slope-similar-triangles-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A line has slope $\\frac{3}{4}$ and passes through the point $(4,5)$. Its equation is $y=mx+b$. Find the $y$-intercept $b$.",
          response: { type: "numeric", parts: [{ label: "$b$", answer: 2 }] },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Slope-intercept form",
                statement:
                  "$y=mx+b$, where $b$ is the value of $y$ when $x=0$.",
              },
            ],
            steps: [
              {
                reasoning: "Substitute $m=\\frac{3}{4}$, $x=4$ and $y=5$.",
                working: "5=\\frac{3}{4}(4)+b",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate the product.",
                working: "5=3+b",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Subtract $3$ from both sides.",
                working: "b=2",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$b=2$, so $y=\\frac{3}{4}x+2$.",
            commonErrors: [
              "Using $b=5$, the $y$-coordinate of the given point, which is not on the $y$-axis.",
              "Calculating $\\frac{3}{4}\\times4$ as $\\frac{3}{16}$.",
            ],
          },
        },
        {
          id: "m8-u2-slope-similar-triangles-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A line $\\ell$ passes through the points $P(2,1)$, $Q(6,4)$ and $R(10,7)$.",
          parts: [
            {
              label: "a",
              prompt: "Find the slope of $\\ell$ using the points $P$ and $Q$.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Using points $P$ and $R$, you get the same slope. Use similar triangles to explain why.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Write the equation of $\\ell$ in the form $y=mx+b$ and state the value of $b$.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Find the $y$-coordinate of the point on $\\ell$ whose $x$-coordinate is $14$.",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Slope", answer: 0.75 },
              { label: "(c) $b$", answer: -0.5 },
              { label: "(d) $y$ when $x=14$", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Slope formula",
                statement: "$m=\\frac{y_2-y_1}{x_2-x_1}$",
              },
              {
                kind: "theorem",
                name: "Similar triangles and slope",
                statement:
                  "Slope triangles on the same line are similar (AA), so their rise-to-run ratios are equal.",
              },
              {
                kind: "formula",
                name: "Slope-intercept form",
                statement: "$y=mx+b$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Rise from $P$ to $Q$ is $3$ and run is $4$.",
                working: "m=\\frac{4-1}{6-2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate.",
                working: "m=\\frac{3}{4}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The triangle with hypotenuse $PQ$ (rise $3$, run $4$) and the triangle with hypotenuse $PR$ (rise $6$, run $8$) share an angle at $P$ and both have a right angle, so they are similar.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning:
                  "Corresponding sides are in proportion, so rise over run is equal: $\\frac{6}{8}=\\frac{3}{4}$.",
                working: "\\frac{6}{8}=\\frac{3}{4}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Substitute $m=\\frac{3}{4}$ and the point $P(2,1)$ to find $b$.",
                working: "1=\\frac{3}{4}(2)+b \\Rightarrow b=1-1.5=-0.5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Write the equation. Check with $Q$: $\\frac{3}{4}(6)-0.5=4$.",
                working: "y=\\frac{3}{4}x-\\frac{1}{2}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Substitute $x=14$.",
                working: "y=\\frac{3}{4}(14)-0.5=10.5-0.5",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Evaluate.",
                working: "y=10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\frac{3}{4}$ (b) the slope triangles are similar, so the ratios are equal (c) $y=\\frac{3}{4}x-\\frac{1}{2}$, $b=-0.5$ (d) $10$",
            commonErrors: [
              "Using $b=1$ or another point's $y$-value as the intercept.",
              "In (b), saying the slopes are equal only because the arithmetic matches, without mentioning similarity.",
            ],
            examinerNote:
              "In (b) accept AA similarity or a statement that the triangles are scaled copies of each other.",
          },
        },
      ],
    },
  ],
};
