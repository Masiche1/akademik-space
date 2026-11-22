import type { Lesson } from "../../../types.ts";

export const lesson72: Lesson = {
  id: "edial-maths-u7-lesson-7-2",
  code: "7-2",
  title: "Linear Programming",
  goal: "I CAN formulate linear programming problems and solve them graphically, interpreting the optimal solution.",
  standards: ["WDM11 D1", "Linear programming"],
  vocabulary: [
    {
      term: "Linear programming",
      definition:
        "Optimising a linear objective function subject to linear constraints and non-negativity conditions.",
    },
    {
      term: "Objective function",
      definition:
        "The linear expression to be maximised or minimised, e.g. $Z=ax+by+c$.",
    },
    {
      term: "Feasible region",
      definition:
        "The set of points satisfying all constraints; the optimum occurs at a vertex of this region.",
    },
    {
      term: "Constraint",
      definition:
        "A linear inequality limiting the decision variables, e.g. $x+y\\le10$.",
    },
    {
      term: "Optimal solution",
      definition:
        "The feasible point giving the maximum or minimum objective value; found at a corner point.",
    },
  ],
  concepts: [
    {
      id: "edial-maths-u7-lp-formulate",
      title: "Formulating LP problems",
      skill:
        "Translate worded optimisation problems into decision variables, an objective function and a system of linear constraints.",
      lesson: {
        sections: [
          {
            heading: "Decision variables",
            body: "Identify what can be chosen — e.g. $x$ = number of product A, $y$ = number of product B. All variables must be non-negative (and often integer, though LP relaxes this).",
          },
          {
            heading: "Objective and constraints",
            body: "The **objective** is the quantity to optimise (profit, cost, output). **Constraints** come from limited resources: each resource use is a linear expression bounded above (or below). Write each as an inequality.",
          },
          {
            heading: "Checking the model",
            body: "Verify every constraint has the correct direction ($\\le$ for 'no more than', $\\ge$ for 'at least') and that units are consistent. Non-negativity $x,y\\ge0$ is always included.",
          },
        ],
        keyFormulas: [
          {
            name: "General LP form",
            statement:
              "Optimise $Z=ax+by$ subject to constraints and $x,y\\ge0$",
          },
        ],
        workedExample: {
          problem:
            "A company makes tables ($x$) and chairs ($y$). Each table needs 4 hours labour and 3 kg wood; each chair needs 3 hours and 2 kg. Available: 120 hours, 70 kg. Profit £30 per table, £20 per chair. Formulate the LP.",
          solution:
            "Maximise $Z=30x+20y$ subject to $4x+3y\\le120$, $3x+2y\\le70$, $x,y\\ge0$.",
        },
      },
      questions: [
        {
          id: "edial-maths-u7-lpf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In an LP problem, where must the optimal solution occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "On the objective function curve" },
              { id: "b", text: "Anywhere inside the feasible region" },
              { id: "c", text: "At a vertex (corner) of the feasible region" },
              { id: "d", text: "At the centroid of the feasible region" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "LP optimum",
                statement:
                  "For a bounded feasible region, the optimum of a linear objective occurs at a vertex.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The optimal solution is at a corner point of the feasible region.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** At a vertex",
            commonErrors: ["Thinking the optimum can be interior."],
          },
        },
        {
          id: "edial-maths-u7-lpf-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A farmer grows wheat ($x$ hectares) and barley ($y$ hectares). Wheat needs 2 workers and 3 tonnes fertiliser per hectare; barley needs 1 worker and 2 tonnes. Limits: 10 workers, 18 tonnes fertiliser. Write the constraints.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Constraints",
                statement: "Each limited resource gives a linear inequality.",
              },
            ],
            steps: [
              {
                reasoning: "Worker constraint: $2x+y\\le10$.",
                working: "2x+y\\le10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fertiliser constraint: $3x+2y\\le18$.",
                working: "3x+2y\\le18",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Include non-negativity $x,y\\ge0$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$2x+y\\le10$, $3x+2y\\le18$, $x,y\\ge0$",
            commonErrors: [
              "Reversing coefficients between crops.",
              "Forgetting non-negativity.",
            ],
          },
        },
        {
          id: "edial-maths-u7-lpf-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Using the farmer problem: profit is £400 per hectare of wheat and £250 per hectare of barley. Write the objective function and state what 'optimal' means here.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Objective function",
                statement: "Linear expression to be maximised.",
              },
            ],
            steps: [
              {
                reasoning: "Objective: maximise $Z=400x+250y$.",
                working: "\\max Z=400x+250y",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the two constraints from before.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "'Optimal' means the feasible $(x,y)$ giving maximum profit.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Conclude the LP formulation is complete.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Maximise $Z=400x+250y$ subject to $2x+y\\le10$, $3x+2y\\le18$, $x,y\\ge0$",
            commonErrors: [
              "Minimising instead of maximising.",
              "Using costs instead of profits.",
            ],
          },
        },
        {
          id: "edial-maths-u7-lpf-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A bakery makes pies ($x$) and tarts ($y$). Each pie uses 3 eggs and 2 hours oven time; each tart uses 1 egg and 3 hours. Daily limits: 18 eggs, 24 oven hours. Profit: £2 per pie, £1.50 per tart.",
          parts: [
            {
              label: "a",
              prompt: "Define variables and write the objective function.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Write the constraint inequalities including non-negativity.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "List all the corner points of the feasible region.",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Evaluate the objective at each corner point and identify the optimum.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "LP formulation",
                statement: "Variables, objective, constraints, non-negativity.",
              },
              {
                kind: "theorem",
                name: "Vertex optimum",
                statement: "Evaluate objective at each feasible vertex.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$x$ = pies, $y$ = tarts; maximise $Z=2x+1.5y$.",
                working: "\\max Z=2x+1.5y",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State variables and objective.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Eggs: $3x+y\\le18$.",
                working: "3x+y\\le18",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Oven: $2x+3y\\le24$; plus $x,y\\ge0$.",
                working: "2x+3y\\le24,\\ x,y\\ge0",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State all constraints.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Vertices: $(0,0)$, $(6,0)$ [$3x=18$], $(0,8)$ [$3y=24$], and intersection of $3x+y=18$ and $2x+3y=24$.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Solve intersection: multiply first by 3: $9x+3y=54$; subtract second: $7x=30$, $x=\\frac{30}{7}$, $y=\\frac{24}{7}$? Check: $3(\\frac{30}{7})+y=18 \\Rightarrow y=18-\\frac{90}{7}=\\frac{36}{7}$. Verify $2(\\frac{30}{7})+3(\\frac{36}{7})=\\frac{60+108}{7}=24$ ✓. So vertex $(\\frac{30}{7},\\frac{36}{7})$.",
                working: "(\\tfrac{30}{7},\\tfrac{36}{7})",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "List all four vertices.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "$Z$ values: $(0,0)\\to0$; $(6,0)\\to12$; $(0,8)\\to12$; $(\\frac{30}{7},\\frac{36}{7})\\to2(\\frac{30}{7})+1.5(\\frac{36}{7})=\\frac{60+54}{7}=\\frac{114}{7}\\approx16.29$.",
                working: "0,12,12,\\approx16.29",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Optimum at $(\\frac{30}{7},\\frac{36}{7})$ with $Z=\\frac{114}{7}\\approx16.29$; if integer required, check nearby integer points.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\max Z=2x+1.5y$ (b) $3x+y\\le18$, $2x+3y\\le24$, $x,y\\ge0$ (c) $(0,0),(6,0),(0,8),(\\frac{30}{7},\\frac{36}{7})$ (d) optimum $Z=\\frac{114}{7}\\approx16.29$",
            commonErrors: [
              "Algebraic slips finding the intersection.",
              "Not checking all vertices.",
            ],
            examinerNote:
              "Integer solution: check $(4,4)$: eggs $16\\le18$, oven $20\\le24$, $Z=14$; $(5,3)$: eggs $18$, oven $19$, $Z=14.5$; $(4,5)$: eggs $17$, oven $23$, $Z=15.5$; $(3,6)$: eggs $15$, oven $24$, $Z=15$; $(5,4)$: eggs $19$ ✗. Best integer near optimum is $(4,5)$ with $Z=15.5$.",
          },
        },
      ],
    },
    {
      id: "edial-maths-u7-lp-solve",
      title: "Solving LP graphically",
      skill:
        "Plot constraint lines, identify the feasible region and use objective function lines to locate the optimum.",
      lesson: {
        sections: [
          {
            heading: "Plotting constraints",
            body: "For each inequality, draw the boundary line (using intercepts), then shade the feasible side. The feasible region is the intersection of all half-planes plus the first quadrant ($x,y\\ge0$).",
          },
          {
            heading: "Objective function lines",
            body: "Rewrite the objective as $y=mx+c$ for several values of $Z$ — these are parallel lines with gradient $-\\frac{a}{b}$. Slide the line in the improving direction until it just touches the feasible region; the contact point is optimal.",
          },
          {
            heading: "Reading the answer",
            body: "The optimum is at a vertex — solve the two constraint equations meeting there simultaneously. State $x$, $y$ and $Z$, and interpret in context.",
          },
        ],
        keyFormulas: [
          {
            name: "Objective as line",
            statement: "$ax+by=Z \\Rightarrow y=-\\frac{a}{b}x+\\frac{Z}{b}$",
          },
        ],
        workedExample: {
          problem:
            "Maximise $Z=x+2y$ subject to $x+y\\le6$, $x+3y\\le9$, $x,y\\ge0$. Find the optimum.",
          solution:
            "Vertices: $(0,0)$, $(6,0)$, $(0,3)$, and intersection of $x+y=6$, $x+3y=9$: subtract gives $2y=3$, $y=1.5$, $x=4.5$. $Z$ values: $0$, $6$, $6$, $4.5+3=7.5$. Optimum $(4.5,1.5)$, $Z=7.5$.",
        },
      },
      questions: [
        {
          id: "edial-maths-u7-lps-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For the LP 'maximise $Z=3x+y$ subject to $x+y\\le4$, $x,y\\ge0$', what are the vertices of the feasible region?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$(0,0)$, $(4,0)$, $(4,4)$, $(0,4)$" },
              { id: "b", text: "$(0,0)$, $(2,2)$, $(0,4)$" },
              { id: "c", text: "$(0,0)$, $(4,0)$, $(0,4)$" },
              { id: "d", text: "$(1,1)$, $(4,0)$, $(0,4)$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Feasible region",
                statement: "Intersection of all constraint half-planes.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The region is the triangle with vertices $(0,0)$, $(4,0)$, $(0,4)$.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** $(0,0)$, $(4,0)$, $(0,4)$",
            commonErrors: ["Including points violating $x+y\\le4$."],
          },
        },
        {
          id: "edial-maths-u7-lps-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Maximise $Z=x+y$ subject to $x+2y\\le8$, $3x+y\\le9$, $x,y\\ge0$. Find the maximum value of $Z$.",
          response: {
            type: "numeric",
            parts: [{ label: "Z max", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "theorem",
                name: "Vertex optimum",
                statement: "Check objective at each vertex.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Vertices: $(0,0)$, $(3,0)$ [$3x=9$], $(0,4)$ [$2y=8$]; intersection: $x=8-2y$ into $3x+y=9$: $24-6y+y=9$, $5y=15$, $y=3$, $x=2$.",
                working: "(2,3)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evaluate $Z=x+y$ at each vertex: $(0,0)\\to0$, $(3,0)\\to3$, $(0,4)\\to4$, $(2,3)\\to5$.",
                working: "0,3,4,5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Maximum $Z=5$ at $(2,3)$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$Z_{\\max}=5$",
            commonErrors: ["Arithmetic slips at the intersection."],
          },
        },
        {
          id: "edial-maths-u7-lps-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "For the LP in Question 2, use objective function lines to explain why the optimum is at $(2,3)$ rather than at $(0,4)$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Objective lines",
                statement:
                  "$x+y=Z$ gives parallel lines of gradient $-1$; slide until last contact.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Lines $x+y=Z$ have gradient $-1$; increasing $Z$ moves the line up-right.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The last feasible contact is the vertex $(2,3)$ where both constraints meet.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "At $(0,4)$, $Z=4<5$, so it is not optimal.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Conclude optimum $Z=5$ at $(2,3)$.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Optimum at $(2,3)$ with $Z=5$",
            commonErrors: [
              "Choosing the vertex with largest coordinate rather than best $Z$.",
            ],
          },
        },
        {
          id: "edial-maths-u7-lps-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A company produces gadgets ($x$) and widgets ($y$). Each gadget needs 2 machine-hours and 1 kg material; each widget needs 1 machine-hour and 3 kg. Limits: 14 machine-hours, 15 kg. Profit: £5 per gadget, £4 per widget.",
          parts: [
            { label: "a", prompt: "Formulate the LP.", marks: 3 },
            {
              label: "b",
              prompt: "Find all vertices of the feasible region.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Determine the optimal production plan and maximum profit.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "LP formulation",
                statement: "Maximise $5x+4y$ subject to resource constraints.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Variables $x$ gadgets, $y$ widgets; objective $\\max Z=5x+4y$.",
                working: "\\max Z=5x+4y",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Constraints: $2x+y\\le14$, $x+3y\\le15$, $x,y\\ge0$.",
                working: "2x+y\\le14,\\ x+3y\\le15",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State full formulation.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Vertices: $(0,0)$, $(7,0)$, $(0,5)$; intersection: $y=14-2x$ into $x+3y=15$: $x+42-6x=15$, $5x=27$, $x=5.4$, $y=3.2$.",
                working: "(5.4,3.2)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Verify: $2(5.4)+3.2=14$ ✓; $5.4+3(3.2)=15$ ✓.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "List vertices.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "$Z$ at vertices: $0$, $35$, $20$, $5(5.4)+4(3.2)=27+12.8=39.8$.",
                working: "39.8",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Optimum at $(5.4,3.2)$, $Z=39.8$.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Interpret: produce $5.4$ gadgets and $3.2$ widgets — fractional, so discuss integer rounding if needed.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Conclude with max profit £39.80 (or £39 if integer required: check $(5,4)$: machine $14$✓, material $17$✗; $(6,2)$: machine $14$✓, material $12$✓, $Z=38$; $(4,4)$: machine $12$, material $16$✗; $(5,3)$: machine $13$, material $14$, $Z=37$; $(6,1)$: $Z=34$. Best integer $(6,2)$, $Z=38$).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\max Z=5x+4y$ s.t. $2x+y\\le14$, $x+3y\\le15$ (b) $(0,0),(7,0),(0,5),(5.4,3.2)$ (c) LP optimum $Z=39.8$; integer optimum $(6,2)$, $Z=38$",
            commonErrors: [
              "Forgetting non-negativity.",
              "Not considering integer solutions for physical products.",
            ],
            examinerNote:
              "Accept fractional LP answer; mention integer refinement for full marks.",
          },
        },
      ],
    },
  ],
};
