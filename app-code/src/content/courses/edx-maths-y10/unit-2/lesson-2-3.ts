import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "edm10-u2-lesson-2-3",
  code: "2-3",
  title: "Inequalities",
  goal: "I CAN solve linear and quadratic inequalities, list integer solutions and define regions using inequalities.",
  standards: ["4MA1 2.11", "4MA1 2.12", "4MA1 2.13H"],
  vocabulary: [
    { term: "Inequality", definition: "A statement comparing two expressions using $<$, $>$, $\\le$ or $\\ge$." },
    { term: "Integer", definition: "A whole number, positive, negative or zero." },
    { term: "Solution set", definition: "All values of the variable that make the inequality true." },
    { term: "Quadratic inequality", definition: "An inequality containing an $x^2$ term, such as $x^2-5x+6<0$." },
    { term: "Region", definition: "The set of points on a graph that satisfy one or more inequalities." },
    { term: "Boundary line", definition: "The line or curve where the inequality becomes an equality. It is solid for $\\le,\\ge$ and dashed for $<,>$." },
  ],
  concepts: [
    {
      id: "edm10-u2-linear-inequalities",
      title: "Linear inequalities and integer solutions",
      skill: "Solve linear inequalities and list the integers that satisfy them.",
      lesson: {
        sections: [
          {
            heading: "Solving",
            body: "Solve as you would an equation, but **reverse the inequality sign** when you multiply or divide by a negative number. For $5-2x\\le 9$: $-2x\\le4$, so $x\\ge-2$.",
          },
          {
            heading: "Double inequalities",
            body: "Apply every operation to all three parts. $-3\\le2x+1<9$ becomes $-4\\le2x<8$, then $-2\\le x<4$.",
          },
          {
            heading: "Integer solutions",
            body: "List whole numbers in the range, paying attention to which ends are included. For $-2\\le x<4$ the integers are $-2,-1,0,1,2,3$.",
          },
        ],
        keyFormulas: [
          { name: "Negative multiplier", statement: "Multiplying or dividing by a negative reverses the inequality." },
        ],
        workedExample: {
          problem: "Solve $3(2x-1)>4x+7$.",
          solution: "$6x-3>4x+7$, so $2x>10$ and $x>5$. The smallest integer solution is $6$.",
        },
      },
      questions: [
        {
          id: "edm10-u2-linear-inequalities-q1",
          difficulty: "foundation",
          tier: "foundation",
          totalMarks: 2,
          stem: "Solve $3x-5>10$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x>5$" },
              { id: "b", text: "$x>\\frac{5}{3}$" },
              { id: "c", text: "$x<5$" },
              { id: "d", text: "$x>15$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Apply inverse operations to both sides, keeping the sign unless multiplying or dividing by a negative." },
            ],
            steps: [
              { reasoning: "Add 5 to both sides.", working: "3x>15", marks: 1, markCode: "M" },
              { reasoning: "Divide by 3.", working: "x>5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $x>5$",
            commonErrors: ["Subtracting 5 instead of adding to get $\\frac53$.", "Reversing the sign without dividing by a negative."],
          },
        },
        {
          id: "edm10-u2-linear-inequalities-q2",
          difficulty: "core",
          tier: "foundation",
          totalMarks: 3,
          stem: "$n$ is an integer such that $-3\\le2n+1<9$. Write down the smallest and the largest possible value of $n$.",
          response: {
            type: "numeric",
            parts: [
              { label: "Smallest n", answer: -2 },
              { label: "Largest n", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Double inequalities", statement: "Apply each operation to all three parts." },
            ],
            steps: [
              { reasoning: "Subtract 1 from each part.", working: "-4\\le2n<8", marks: 1, markCode: "M" },
              { reasoning: "Divide each part by 2.", working: "-2\\le n<4", marks: 1, markCode: "A" },
              { reasoning: "4 is not included, so the largest integer is 3.", working: "-2,\\ 3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Smallest $-2$, largest $3$",
            commonErrors: ["Giving 4 as the largest value.", "Giving $-4$ as the smallest by not dividing by 2."],
          },
        },
        {
          id: "edm10-u2-linear-inequalities-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "Solve $5-3x\\ge2x-10$. Hence write down the largest integer that satisfies the inequality.",
          response: { type: "numeric", parts: [{ label: "Largest integer", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Solving inequalities", statement: "Collect $x$ terms on one side, and avoid dividing by a negative where possible." },
            ],
            steps: [
              { reasoning: "Add $3x$ to both sides and add 10 to both sides.", working: "15\\ge5x", marks: 1, markCode: "M" },
              { reasoning: "Divide by 5.", working: "3\\ge x", marks: 1, markCode: "A" },
              { reasoning: "Write in the usual form.", working: "x\\le3", marks: 1, markCode: "A" },
              { reasoning: "The largest integer satisfying this is 3 (3 is included).", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$x\\le3$; largest integer $3$",
            commonErrors: ["Dividing by $-5$ and not reversing the sign.", "Giving 2 as the largest integer."],
          },
        },
        {
          id: "edm10-u2-linear-inequalities-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 8,
          stem: "A rectangle has length $(3x-2)$ cm and width $(x+4)$ cm. The perimeter of the rectangle is less than 60 cm. The length is greater than the width.",
          parts: [
            { label: "a", prompt: "Show that the perimeter of the rectangle is $(8x+4)$ cm.", marks: 2 },
            { label: "b", prompt: "Solve $8x+4<60$.", marks: 2 },
            { label: "c", prompt: "Solve $3x-2>x+4$.", marks: 2 },
            { label: "d", prompt: "$x$ is an integer. Work out the largest possible perimeter of the rectangle.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(b) x <", answer: 7 },
              { label: "(c) x >", answer: 3 },
              { label: "(d) perimeter (cm)", answer: 52, unit: "cm" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Perimeter", statement: "Perimeter of a rectangle $=2(\\text{length}+\\text{width})$." },
              { kind: "principle", name: "Solving inequalities", statement: "Inverse operations on both sides." },
            ],
            steps: [
              { part: "a", reasoning: "Add length and width.", working: "(3x-2)+(x+4)=4x+2", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Double.", working: "2(4x+2)=8x+4", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract 4.", working: "8x<56", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Divide by 8.", working: "x<7", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Subtract $x$ and add 2.", working: "2x>6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Divide by 2.", working: "x>3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Both conditions give $3<x<7$, so the integers are 4, 5, 6 and the largest is 6.", working: "x=6", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Substitute into the perimeter: $8(6)+4$.", working: "52", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) shown (b) $x<7$ (c) $x>3$ (d) $52$ cm",
            commonErrors: ["Using $x=7$, which is not allowed since the inequality is strict.", "Forgetting to double in the perimeter."],
          },
        },
      ],
    },
    {
      id: "edm10-u2-quadratic-inequalities",
      title: "Quadratic inequalities and regions",
      skill: "Solve quadratic inequalities using a sketch and define regions on a graph with inequalities.",
      lesson: {
        sections: [
          {
            heading: "Quadratic inequalities",
            body: "Solve the related equation to find the critical values, sketch the parabola, and read off where it is above or below the $x$-axis. For $x^2-5x+6<0$ the roots are 2 and 3, and the curve is below the axis between them, so $2<x<3$.",
          },
          {
            heading: "Two-part answers",
            body: "If the parabola opens upwards and you need $>0$, the solution is outside the roots, e.g. $x<a$ or $x>b$. Never join these into a single inequality like $b<x<a$.",
          },
          {
            heading: "Regions",
            body: "To define a region, write an inequality for each boundary. A point is in the region if its coordinates satisfy all the inequalities. Test a point to decide which side to use.",
          },
        ],
        keyFormulas: [
          { name: "Upwards parabola", statement: "$(x-a)(x-b)<0$ between the roots; $>0$ outside them." },
        ],
        workedExample: {
          problem: "Solve $x^2-5x+6<0$.",
          solution: "$(x-2)(x-3)<0$. Roots 2 and 3; the curve is below the axis between them. $2<x<3$.",
        },
      },
      questions: [
        {
          id: "edm10-u2-quadratic-inequalities-q1",
          difficulty: "foundation",
          tier: "higher",
          totalMarks: 2,
          stem: "Solve $x^2-5x+6<0$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$2<x<3$" },
              { id: "b", text: "$x<2$ or $x>3$" },
              { id: "c", text: "$-3<x<-2$" },
              { id: "d", text: "$x<3$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quadratic inequality", statement: "An upward parabola is below the $x$-axis between its roots." },
            ],
            steps: [
              { reasoning: "Factorise to find the critical values.", working: "(x-2)(x-3)<0", marks: 1, markCode: "M" },
              { reasoning: "The curve is negative between the roots.", working: "2<x<3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $2<x<3$",
            commonErrors: ["Choosing the outside region for $<0$.", "Using the roots with the wrong signs."],
          },
        },
        {
          id: "edm10-u2-quadratic-inequalities-q2",
          difficulty: "core",
          tier: "higher",
          totalMarks: 3,
          stem: "Solve $x^2+2x-8\\le0$. Enter the lower and upper limits of the solution set.",
          response: {
            type: "numeric",
            parts: [
              { label: "Lower limit", answer: -4 },
              { label: "Upper limit", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quadratic inequality", statement: "An upward parabola is on or below the $x$-axis between and including its roots." },
            ],
            steps: [
              { reasoning: "Factorise.", working: "(x+4)(x-2)\\le0", marks: 1, markCode: "M" },
              { reasoning: "Critical values.", working: "x=-4,\\ x=2", marks: 1, markCode: "A" },
              { reasoning: "The curve is at or below zero between the roots.", working: "-4\\le x\\le2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$-4\\le x\\le2$",
            commonErrors: ["Giving $x\\le-4$ or $x\\ge2$.", "Using strict inequalities."],
          },
        },
        {
          id: "edm10-u2-quadratic-inequalities-q3",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 4,
          stem: "Solve $2x^2-5x-3>0$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Quadratic inequality", statement: "An upward parabola is above the $x$-axis outside its roots." },
            ],
            steps: [
              { reasoning: "Factorise: $ac=-6$, numbers $-6$ and $1$.", working: "2x^2-6x+x-3=2x(x-3)+1(x-3)", marks: 1, markCode: "M" },
              { reasoning: "Take out the common bracket.", working: "(2x+1)(x-3)>0", marks: 1, markCode: "A" },
              { reasoning: "Critical values.", working: "x=-\\tfrac12,\\ x=3", marks: 1, markCode: "A" },
              { reasoning: "The curve is above the axis outside the roots.", working: "x<-\\tfrac12\\ \\text{or}\\ x>3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x<-\\frac12$ or $x>3$",
            commonErrors: ["Writing $-\\frac12>x>3$.", "Using $x=\\frac12$ as a root."],
          },
        },
        {
          id: "edm10-u2-quadratic-inequalities-q4",
          difficulty: "challenge",
          tier: "higher",
          totalMarks: 10,
          stem: "On a grid, the curve $y=x^2$ and the straight line $y=6-x$ intersect. The region $R$ lies on or above the curve and on or below the line.",
          parts: [
            { label: "a", prompt: "Show that the $x$-coordinates of the points of intersection satisfy $x^2+x-6=0$, and solve this equation.", marks: 3 },
            { label: "b", prompt: "Write down two inequalities that define the region $R$.", marks: 2 },
            { label: "c", prompt: "Show that the point $(1,4)$ lies in $R$.", marks: 2 },
            { label: "d", prompt: "Solve $x^2+x-6<0$ and explain how your answer relates to the region $R$.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Intersections", statement: "At an intersection the $y$-values are equal, so set the equations equal." },
              { kind: "principle", name: "Regions", statement: "A point is in the region if its coordinates satisfy every defining inequality." },
            ],
            steps: [
              { part: "a", reasoning: "Set the two $y$-values equal.", working: "x^2=6-x", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Rearrange.", working: "x^2+x-6=0", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Factorise and solve.", working: "(x+3)(x-2)=0\\Rightarrow x=-3,\\ x=2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "On or above the curve.", working: "y\\ge x^2", marks: 1, markCode: "B" },
              { part: "b", reasoning: "On or below the line.", working: "y\\le6-x", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Substitute $(1,4)$ into the first inequality.", working: "4\\ge1^2=1", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Substitute into the second inequality and conclude that both are true.", working: "4\\le6-1=5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Factorise using part (a); the curve is below the axis between the roots.", working: "(x+3)(x-2)<0", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Write the solution.", working: "-3<x<2", marks: 1, markCode: "A" },
              { part: "d", reasoning: "In this interval the line is above the curve (since $6-x>x^2$), so the region $R$ exists only for these values of $x$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $x=-3$, $x=2$ (b) $y\\ge x^2$, $y\\le6-x$ (c) $4\\ge1$ and $4\\le5$ (d) $-3<x<2$",
            commonErrors: ["Reversing the inequality for the line.", "Leaving the answer to (d) as $x<-3$ or $x>2$."],
          },
        },
      ],
    },
  ],
};
