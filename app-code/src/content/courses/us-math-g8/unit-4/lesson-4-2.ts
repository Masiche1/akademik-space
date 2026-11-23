import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "m8-u4-lesson-4-2",
  code: "4-2",
  title: "Capstone: Systems of Equations and Real Models",
  goal: "I CAN solve systems of equations and use linear models to analyze real situations.",
  standards: ["8.EE.C.8", "8.F.B.4", "8.F.B.5", "8.SP.A.1"],
  vocabulary: [
    {
      term: "System of equations",
      definition:
        "Two or more equations with the same variables that must be solved together.",
    },
    {
      term: "Substitution",
      definition:
        "Solving a system by replacing one variable with an expression from another equation.",
    },
    {
      term: "Elimination",
      definition:
        "Solving a system by adding or subtracting equations to eliminate a variable.",
    },
    {
      term: "Break-even point",
      definition: "The point where revenue equals cost — no profit or loss.",
    },
    {
      term: "Slope-intercept form",
      definition: "$y = mx + b$ where $m$ is slope and $b$ is y-intercept.",
    },
    {
      term: "Parallel lines",
      definition: "Lines with the same slope that never intersect.",
    },
    {
      term: "Perpendicular lines",
      definition: "Lines whose slopes multiply to $-1$.",
    },
    {
      term: "Point of intersection",
      definition: "Where two lines cross — the solution to the system.",
    },
  ],
  concepts: [
    {
      id: "m8-u4-systems",
      title: "Solving systems of equations",
      skill:
        "Solve systems using substitution or elimination and interpret solutions.",
      lesson: {
        sections: [
          {
            heading: "Substitution method",
            body: "Solve one equation for one variable, substitute into the other equation, solve for remaining variable, back-substitute. Best when a variable has coefficient 1 or -1.",
          },
          {
            heading: "Elimination method",
            body: "Multiply equations to make coefficients match, add or subtract to eliminate one variable, solve, back-substitute. Best when coefficients are already similar.",
          },
          {
            heading: "Interpreting solutions",
            body: "One solution: lines intersect once. No solution: parallel lines. Infinite solutions: same line. In context: the intersection point often represents break-even or optimal balance.",
          },
        ],
        keyFormulas: [
          {
            name: "Substitution",
            statement: "Solve for one var, plug into other",
          },
          {
            name: "Elimination",
            statement: "Add/subtract equations to cancel variable",
          },
        ],
        workedExample: {
          problem: "Solve $x + y = 10$ and $x - y = 4$.",
          solution:
            "Add equations: $2x = 14$ → $x = 7$; then $7 + y = 10$ → $y = 3$.",
        },
      },
      questions: [
        {
          id: "m8-u4-systems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the solution to a system of equations represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The x-intercept" },
              { id: "b", text: "The point where lines intersect" },
              { id: "c", text: "The slope" },
              { id: "d", text: "The y-intercept" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "System solution",
                statement:
                  "Values satisfying both equations — intersection point.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Solution is where both equations are true — the intersection point.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Intersection point",
            commonErrors: ["Confusing with single equation solution."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "m8-u4-systems-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $x + y = 8$ and $2x - y = 7$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Elimination",
                statement: "Add equations to eliminate y.",
              },
            ],
            steps: [
              {
                reasoning: "Add: $3x = 15$ → $x = 5$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$5 + y = 8$ → $y = 3$.", marks: 1, markCode: "M" },
              {
                reasoning: "Solution: $(5, 3)$. Check: $10 - 3 = 7$ ✓.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(5, 3)$",
            commonErrors: ["Arithmetic errors; not checking solution."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "m8-u4-systems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A movie theater sells adult tickets for $\\$12$ and child tickets for $\\$8$. They sold 200 tickets for $\\$2100$. How many of each?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "System setup",
                statement: "$a + c = 200$, $12a + 8c = 2100$.",
              },
              {
                kind: "principle",
                name: "Interpretation",
                statement: "Solution gives ticket counts.",
              },
            ],
            steps: [
              {
                reasoning: "From first equation: $c = 200 - a$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "$12a + 8(200-a) = 2100$ → $12a + 1600 - 8a = 2100$ → $4a = 500$ → $a = 125$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$c = 200 - 125 = 75$.", marks: 1, markCode: "M" },
              {
                reasoning: "Check: $125(12) + 75(8) = 1500 + 600 = 2100$ ✓.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "125 adult, 75 child tickets",
            commonErrors: ["Wrong equation setup; forgetting units."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "m8-u4-systems-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Company A charges $\\$200$ setup + $\\$0.10$/unit. Company B charges $\\$500$ setup + $\\$0.05$/unit.",
          parts: [
            {
              label: "a",
              prompt: "Write cost equations for each company (u = units).",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Find break-even point (where costs equal).",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Which is cheaper for 5000 units?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "For what range of units is Company B cheaper?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Linear cost",
                statement: "Cost = fixed + rate $\\times$ quantity.",
              },
              {
                kind: "principle",
                name: "Break-even",
                statement: "Set costs equal and solve.",
              },
            ],
            steps: [
              {
                reasoning: "A: $C = 200 + 0.10u$; B: $C = 500 + 0.05u$.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "$200 + 0.10u = 500 + 0.05u$ → $0.05u = 300$ → $u = 6000$.",
                working: "0.05u=300",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Break-even at $6000$ units.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "At 5000: A = $200 + 500 = 700$; B = $500 + 250 = 750$. A cheaper.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning:
                  "B is cheaper when $500 + 0.05u < 200 + 0.10u$ → $300 < 0.05u$ → $u > 6000$.",
                marks: 2,
                markCode: "R",
                part: "d",
              },
              {
                reasoning: "So for more than $6000$ units.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) A: 200+0.1u, B: 500+0.05u (b) 6000 units (c) A (d) u > 6000.",
            commonErrors: [
              "Not checking which company is cheaper in each range.",
            ],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "m8-u4-functions",
      title: "Functions and linear models",
      skill:
        "Interpret functions and use linear models to represent relationships.",
      lesson: {
        sections: [
          {
            heading: "Function notation",
            body: "$f(x) = 3x + 2$ means 'output when input is x'. $f(5) = 17$. Functions model relationships: input → output. Every input has exactly one output.",
          },
          {
            heading: "Linear models",
            body: "$y = mx + b$ models constant rate of change. $m$ = rate (slope), $b$ = starting value (y-intercept). Examples: cost = rate × quantity + fixed fee; distance = speed × time.",
          },
          {
            heading: "Interpreting in context",
            body: "In $C = 0.10u + 200$: $0.10$ = cost per unit, $200$ = fixed fee. In $d = 60t$: $60$ = speed, $0$ = starting distance. Slope and intercept have real meanings.",
          },
        ],
        keyFormulas: [
          { name: "Function", statement: "$f(x) = mx + b$" },
          { name: "Evaluation", statement: "Replace x with value" },
        ],
        workedExample: {
          problem:
            "For $f(x) = -2x + 10$, find $f(3)$ and interpret the slope.",
          solution:
            "$f(3) = -6 + 10 = 4$; slope $-2$ means output decreases by 2 for each unit increase in input.",
        },
      },
      questions: [
        {
          id: "m8-u4-functions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For $f(x) = 4x - 3$, what is $f(2)$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$8$" },
              { id: "c", text: "$11$" },
              { id: "d", text: "$-1$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Function evaluation",
                statement: "$f(2) = 4(2) - 3 = 5$.",
              },
            ],
            steps: [{ reasoning: "$f(2) = 5$.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 5",
            commonErrors: ["Arithmetic errors."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "m8-u4-functions-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A gym charges $\\$30$/month plus $\\$5$/class. Write a function for monthly cost $C$ after $n$ classes, then find $C(8)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Linear model",
                statement: "$C = 5n + 30$.",
              },
              {
                kind: "principle",
                name: "Evaluation",
                statement: "$C(8) = 5(8) + 30$.",
              },
            ],
            steps: [
              { reasoning: "$C(n) = 5n + 30$.", marks: 1, markCode: "M" },
              { reasoning: "$C(8) = 40 + 30 = 70$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\$70$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$C(n) = 5n + 30$; $C(8) = \\text{\\$}70$",
            commonErrors: ["Swapping rate and fixed fee."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "m8-u4-functions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The function $T = 0.5x + 20$ gives temperature (°C) at depth x (km) in a mine. Interpret the slope and intercept, then find temperature at 100 m depth.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Slope interpretation",
                statement: "0.5 = temperature increase per km.",
              },
              {
                kind: "principle",
                name: "Intercept interpretation",
                statement: "20 = surface temperature.",
              },
            ],
            steps: [
              {
                reasoning: "Slope 0.5: temperature rises 0.5°C per km depth.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Intercept 20: surface temperature is 20°C.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "At 100 m = 0.1 km: $T = 0.5(0.1) + 20 = 20.05$°C.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: $20.05$°C.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Slope=0.5°C/km, intercept=20°C surface; at 100m: 20.05°C",
            commonErrors: ["Not converting meters to km."],
            examinerNote: "B2, M1, A1.",
          },
        },
        {
          id: "m8-u4-functions-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Two cars leave the same point. Car A: $d = 60t$ (mph). Car B: $d = 45t + 30$ (mph, head start of 30 miles).",
          parts: [
            { label: "a", prompt: "When does Car A catch Car B?", marks: 3 },
            {
              label: "b",
              prompt: "How far have they traveled then?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Before that point, which car is ahead?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "If Car A's speed were 50 mph instead, when would it catch B?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "System solution",
                statement: "Set distances equal.",
              },
              {
                kind: "principle",
                name: "Interpretation",
                statement: "Before intersection, leader has advantage.",
              },
            ],
            steps: [
              {
                reasoning: "$60t = 45t + 30$ → $15t = 30$ → $t = 2$ hours.",
                working: "60t=45t+30",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Car A catches at $t = 2$ hours.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "$d = 60(2) = 120$ miles.",
                marks: 1,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: $120$ miles.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Before $t = 2$, Car B is ahead (has 30-mile head start).",
                marks: 1,
                markCode: "B",
                part: "c",
              },
              {
                reasoning: "Check at t=1: A=60, B=75 — B ahead ✓.",
                marks: 1,
                markCode: "A",
                part: "c",
              },
              {
                reasoning: "$50t = 45t + 30$ → $5t = 30$ → $t = 6$ hours.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Car A catches at $t = 6$ hours (300 miles).",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) t=2h (b) 120 mi (c) B before t=2 (d) t=6h.",
            commonErrors: ["Not setting distances equal; ignoring head start."],
            examinerNote: "3+2+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "m8-u4-review",
      title: "Course review and synthesis",
      skill:
        "Integrate all grade 8 concepts for comprehensive problem-solving.",
      lesson: {
        sections: [
          {
            heading: "Complete concept map",
            body: "- **Number system**: rationals vs irrationals, exponents, scientific notation\n- **Expressions**: linear equations, slope, functions\n- **Systems**: solving simultaneously, interpreting solutions\n- **Geometry**: Pythagorean Theorem, volume, surface area, transformations\n- **Statistics**: scatter plots, correlations, bivariate data",
          },
          {
            heading: "Problem-solving strategy",
            body: "Read carefully. Identify the math concept. Choose method (substitution, elimination, graphing). Solve systematically. Check reasonableness. Interpret in context.",
          },
          {
            heading: "Real-world connections",
            body: "Systems model business decisions (cost comparison). Functions model rates and relationships. Geometry models construction and design. Data analysis models trends and predictions. Everything connects.",
          },
        ],
        keyFormulas: [
          {
            name: "System solution",
            statement: "Values satisfying all equations",
          },
          { name: "Linear model", statement: "$y = mx + b$" },
        ],
        workedExample: {
          problem: "Review: Solve $2x + y = 7$ and $x - y = 2$.",
          solution:
            "Add: $3x = 9$ → $x = 3$; $3 - y = 2$ → $y = 1$. Solution: $(3, 1)$.",
        },
      },
      questions: [
        {
          id: "m8-u4-review-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which equation represents a line with slope 3 and y-intercept -2?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y = -2x + 3$" },
              { id: "b", text: "$y = 3x - 2$" },
              { id: "c", text: "$y = 3x + 2$" },
              { id: "d", text: "$y = -3x - 2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Slope-intercept",
                statement: "$y = mx + b$, $m$=slope, $b$=intercept.",
              },
            ],
            steps: [
              {
                reasoning: "$y = 3x - 2$ has slope 3 and intercept -2.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $y = 3x - 2$",
            commonErrors: ["Swapping slope and intercept."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "m8-u4-review-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve the system: $x + 2y = 11$ and $3x - y = 3$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Substitution",
                statement: "Solve for y, substitute.",
              },
            ],
            steps: [
              {
                reasoning:
                  "From first: $x = 11 - 2y$. Substitute: $3(11-2y) - y = 3$ → $33 - 6y - y = 3$ → $-7y = -30$ → $y = 30/7$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$x = 11 - 2(30/7) = 11 - 60/7 = 17/7$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Solution: $(17/7, 30/7)$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$(17/7, 30/7)$",
            commonErrors: ["Arithmetic errors; not simplifying."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "m8-u4-review-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A right triangle has hypotenuse 13 and one leg 5. Find the other leg.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Pythagorean",
                statement: "$a^2 + b^2 = c^2$.",
              },
            ],
            steps: [
              {
                reasoning: "$5^2 + b^2 = 13^2$ → $25 + b^2 = 169$.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "$b^2 = 144$ → $b = 12$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $12$.", marks: 1, markCode: "A" },
              {
                reasoning: "Check: $25 + 144 = 169$ ✓.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$12$",
            commonErrors: ["Subtracting instead of using squares."],
            examinerNote: "M2, A2.",
          },
        },
        {
          id: "m8-u4-review-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A streaming service offers two plans: Basic $\\$8$/month (1 screen, SD) and Premium $\\$15$/month (4 screens, 4K). You watch 2 hours/day on 2 screens.",
          parts: [
            {
              label: "a",
              prompt: "Which plan better fits your usage? Justify.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Calculate annual cost difference.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "If Premium adds a $\\$2$/month family member fee for 2 extra members, recalculate.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "At what monthly usage would Premium be worth it? Explain your reasoning.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cost-benefit",
                statement: "Evaluate features vs price.",
              },
              {
                kind: "principle",
                name: "Break-even thinking",
                statement: "When does extra cost pay off?",
              },
            ],
            steps: [
              {
                reasoning:
                  "Premium fits better: 2 screens needs Premium (Basic only 1), 4K quality preferred.",
                marks: 1,
                markCode: "R",
                part: "a",
              },
              {
                reasoning:
                  "Basic cannot support 2 simultaneous screens — a hard requirement fails.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "4K quality and family sharing add value beyond price alone.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "Cost difference: $(15 - 8) \\times 12 = \\text{\\$}84$/year.",
                working: "7*12",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning:
                  "New cost: $15 + 4 = \\text{\\$}19$/month; annual = $228$.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning:
                  "Premium worth it if you value 4K quality, multiple screens, or family sharing enough to pay extra $7-11/month.",
                marks: 2,
                markCode: "R",
                part: "d",
              },
              {
                reasoning:
                  "For heavy users or families, Premium's features justify cost; for light single-screen users, Basic suffices.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) Premium for 2 screens/4K (b) $84/year (c) $19/month (d) depends on usage value.",
            commonErrors: ["Choosing based only on price, not needs."],
            examinerNote: "3+2+2+3 = 10.",
          },
        },
      ],
    },
  ],
};
