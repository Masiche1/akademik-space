import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "m8-u1-lesson-1-3",
  code: "1-3",
  title: "Roots and Linear Equations",
  goal: "I CAN solve equations of the form $x^2 = p$ and $x^3 = p$, and solve linear equations with variables on both sides, including those with no or infinitely many solutions.",
  standards: ["8.EE.A.2", "8.EE.C.7"],
  vocabulary: [
    { term: "Square root", definition: "A number whose square is the given number. The positive square root of $p$ is written $\\sqrt{p}$, and $x^2 = p$ has solutions $x = \\pm\\sqrt{p}$." },
    { term: "Cube root", definition: "The number whose cube is the given number, written $\\sqrt[3]{p}$. Every real number has exactly one cube root." },
    { term: "Perfect cube", definition: "A number that is the cube of an integer, such as $1, 8, 27, 64, 125$." },
    { term: "Linear equation", definition: "An equation in which the variable appears only to the first power, such as $3x + 5 = 2x + 9$." },
    { term: "No solution", definition: "An equation that is false for every value of the variable, such as $x + 1 = x + 2$." },
    { term: "Infinitely many solutions", definition: "An equation that is true for every value of the variable, such as $2(x + 1) = 2x + 2$." },
  ],
  concepts: [
    {
      id: "m8-u1-square-cube-roots",
      title: "Square roots and cube roots in equations",
      skill: "Solve equations of the form $x^2 = p$ and $x^3 = p$ for positive rational $p$.",
      lesson: {
        sections: [
          {
            heading: "Undoing a square or a cube",
            body: "Taking a square root undoes squaring, and taking a cube root undoes cubing. $\\sqrt{49} = 7$ and $\\sqrt[3]{64} = 4$ because $7^2 = 49$ and $4^3 = 64$. Know the perfect squares to $15^2 = 225$ and the perfect cubes $1, 8, 27, 64, 125, 216, 343, 512, 729, 1000$.",
          },
          {
            heading: "Two solutions or one",
            body: "The equation $x^2 = p$ with $p > 0$ has **two** solutions, $x = \\sqrt{p}$ and $x = -\\sqrt{p}$, because both $5^2$ and $(-5)^2$ equal $25$. The equation $x^3 = p$ has only **one** real solution, $x = \\sqrt[3]{p}$, because the cube of a negative number is negative. A negative number has no real square root, so $x^2 = -4$ has no real solution.",
          },
          {
            heading: "Real-world side lengths",
            body: "A square with area $A$ has side $s = \\sqrt{A}$ and a cube with volume $V$ has edge $e = \\sqrt[3]{V}$. In a measurement context, keep only the positive solution because a length cannot be negative.",
          },
        ],
        keyFormulas: [
          { name: "Square equation", statement: "$x^2 = p \\Rightarrow x = \\pm\\sqrt{p}$ (for $p > 0$)" },
          { name: "Cube equation", statement: "$x^3 = p \\Rightarrow x = \\sqrt[3]{p}$" },
        ],
        workedExample: {
          problem: "Solve $x^2 = \\frac{9}{25}$ and $x^3 = \\frac{8}{27}$.",
          solution: "$x = \\pm\\sqrt{\\frac{9}{25}} = \\pm\\frac{3}{5}$. For the cube: $x = \\sqrt[3]{\\frac{8}{27}} = \\frac{2}{3}$.",
        },
      },
      questions: [
        {
          id: "m8-u1-square-cube-roots-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the solution of $x^3 = 64$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 4$" },
              { id: "b", text: "$x = \\frac{64}{3}$" },
              { id: "c", text: "$x = 4$ or $x = -4$" },
              { id: "d", text: "$x = 8$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cube root", statement: "$x^3 = p$ has the single real solution $x = \\sqrt[3]{p}$." },
            ],
            steps: [
              { reasoning: "$4 \\times 4 \\times 4 = 64$, and a cube equation has only one real solution.", working: "x = \\sqrt[3]{64} = 4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x = 4$",
            commonErrors: ["Giving $\\pm 4$, as for a square equation. Note $(-4)^3 = -64$.", "Confusing the cube root with the square root, giving $8$."],
          },
        },
        {
          id: "m8-u1-square-cube-roots-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $x^2 = \\frac{169}{25}$ for the positive solution. Give your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Positive solution", answer: 2.6 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Root of a fraction", statement: "$\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}$" },
            ],
            steps: [
              { reasoning: "Take the square root of numerator and denominator.", working: "x = \\sqrt{\\frac{169}{25}} = \\frac{13}{5}", marks: 1, markCode: "M" },
              { reasoning: "Convert to a decimal.", working: "\\frac{13}{5} = 2.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 2.6$ (the other solution is $-2.6$)",
            commonErrors: ["Dividing $169$ by $2$ instead of taking the square root.", "Taking the square root of only one part of the fraction."],
          },
        },
        {
          id: "m8-u1-square-cube-roots-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Solve $2x^2 - 8 = 42$. Enter both solutions.",
          response: {
            type: "numeric",
            unordered: true,
            parts: [
              { label: "Solution 1", answer: 5 },
              { label: "Solution 2", answer: -5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Inverse operations", statement: "Isolate the squared term first, then take the square root." },
              { kind: "definition", name: "Square root", statement: "$x^2 = p$ has solutions $x = \\pm\\sqrt{p}$." },
            ],
            steps: [
              { reasoning: "Add $8$ to both sides.", working: "2x^2 = 50", marks: 1, markCode: "M" },
              { reasoning: "Divide both sides by $2$.", working: "x^2 = 25", marks: 1, markCode: "M" },
              { reasoning: "Take the square root, giving both signs.", working: "x = 5 \\text{ or } x = -5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 5$ or $x = -5$",
            commonErrors: ["Taking the square root before isolating $x^2$.", "Giving only $x = 5$."],
          },
        },
        {
          id: "m8-u1-square-cube-roots-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A square garden has an area of $196$ square feet. A cube-shaped water tank holds $1{,}728$ cubic inches of water when full.",
          parts: [
            { label: "a", prompt: "Find the side length of the garden in feet.", marks: 2 },
            { label: "b", prompt: "Find the edge length of the tank in inches.", marks: 2 },
            { label: "c", prompt: "Find the total surface area of the tank in square inches.", marks: 2 },
            { label: "d", prompt: "A student claims $x^2 = -4$ has the solution $x = -2$. Explain why this is incorrect and how many real solutions the equation has.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Side length", answer: 14, unit: "ft" },
              { label: "(b) Edge length", answer: 12, unit: "in" },
              { label: "(c) Surface area", answer: 864, unit: "in²" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Square area", statement: "$A = s^2$, so $s = \\sqrt{A}$." },
              { kind: "formula", name: "Cube volume and surface area", statement: "$V = e^3$ and $SA = 6e^2$." },
              { kind: "definition", name: "Square root", statement: "The square of a real number is never negative." },
            ],
            steps: [
              { part: "a", reasoning: "Solve $s^2 = 196$ and keep the positive value, since a length is positive.", working: "s = \\sqrt{196}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$14^2 = 196$.", working: "s = 14", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Solve $e^3 = 1728$ with a cube root.", working: "e = \\sqrt[3]{1728}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$12^3 = 1728$.", working: "e = 12", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A cube has six equal square faces.", working: "SA = 6 \\times 12^2 = 6 \\times 144", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "SA = 864", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Check: $(-2)^2 = 4$, not $-4$. The square of any real number is zero or positive.", working: "(-2)^2 = 4 \\ne -4", marks: 1, markCode: "R" },
              { part: "d", reasoning: "No real number squared gives a negative number, so the equation has no real solutions.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $14$ ft (b) $12$ in (c) $864$ in$^2$ (d) $(-2)^2 = 4$, and a square cannot be negative, so there are no real solutions.",
            commonErrors: ["Using $\\sqrt{1728} \\approx 41.6$ instead of the cube root.", "Using only one face area for the surface area."],
            examinerNote: "In (c) follow through from the edge length in (b) (ft).",
          },
        },
      ],
    },
    {
      id: "m8-u1-linear-equations-solutions",
      title: "Linear equations with one, no or infinitely many solutions",
      skill: "Solve linear equations with variables on both sides and decide how many solutions they have.",
      lesson: {
        sections: [
          {
            heading: "Solving with variables on both sides",
            body: "Expand brackets with the distributive property and combine like terms on each side. Then move the variable terms to one side and the constants to the other using inverse operations. For $3x + 5 = 2x + 9$: subtract $2x$ to get $x + 5 = 9$, then subtract $5$ to get $x = 4$. Check by substituting: $3(4) + 5 = 17$ and $2(4) + 9 = 17$.",
          },
          {
            heading: "How many solutions?",
            body: "After simplifying, one of three things happens:\n\n- **One solution:** $x = a$ number, such as $x = 4$.\n- **No solution:** a false statement such as $5 = 7$, because the variable terms cancel but the constants differ.\n- **Infinitely many solutions:** a true statement such as $8 = 8$, because both sides are identical.\n\nThe variable terms cancel exactly when both sides have the same coefficient of $x$.",
          },
        ],
        keyFormulas: [
          { name: "Distributive property", statement: "$a(b + c) = ab + ac$" },
          { name: "Number of solutions", statement: "$x = a$ (one), false statement (none), true statement (infinitely many)" },
        ],
        workedExample: {
          problem: "Solve $4(x - 3) = 2x + 6$.",
          solution: "Distribute: $4x - 12 = 2x + 6$. Subtract $2x$: $2x - 12 = 6$. Add $12$: $2x = 18$. Divide by $2$: $x = 9$. Check: $4(9 - 3) = 24$ and $2(9) + 6 = 24$.",
        },
      },
      questions: [
        {
          id: "m8-u1-linear-equations-solutions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Solve $3x + 5 = 2x + 9$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 14$" },
              { id: "b", text: "$x = \\frac{14}{5}$" },
              { id: "c", text: "$x = -4$" },
              { id: "d", text: "$x = 4$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Inverse operations", statement: "Do the same operation to both sides to keep the equation balanced." },
            ],
            steps: [
              { reasoning: "Subtract $2x$ from both sides, then subtract $5$.", working: "3x - 2x = 9 - 5 \\Rightarrow x = 4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $x = 4$",
            commonErrors: ["Adding $2x$ to both sides: $5x = 14$, giving $\\frac{14}{5}$.", "Subtracting $9$ and $5$ in the wrong direction to get $-4$."],
          },
        },
        {
          id: "m8-u1-linear-equations-solutions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $4(x - 3) = 2x + 6$.",
          response: { type: "numeric", parts: [{ label: "$x$", answer: 9 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Distributive property", statement: "$a(b + c) = ab + ac$" },
            ],
            steps: [
              { reasoning: "Expand the bracket and collect the $x$ terms on one side.", working: "4x - 12 = 2x + 6 \\Rightarrow 2x = 18", marks: 1, markCode: "M" },
              { reasoning: "Divide by $2$.", working: "x = 9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$x = 9$",
            commonErrors: ["Distributing only to the $x$ and writing $4x - 3$.", "Adding $12$ when it should be added to the other side only after collecting terms correctly."],
          },
        },
        {
          id: "m8-u1-linear-equations-solutions-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "For what value of $k$ does the equation $3(2x + 4) = 6x + k$ have infinitely many solutions?",
          response: { type: "numeric", parts: [{ label: "$k$", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Infinitely many solutions", statement: "An equation has infinitely many solutions when both sides simplify to identical expressions." },
            ],
            steps: [
              { reasoning: "Expand the left side.", working: "6x + 12 = 6x + k", marks: 1, markCode: "M" },
              { reasoning: "The $x$ terms already match, so the equation is true for every $x$ exactly when the constants match.", working: "12 = k", marks: 1, markCode: "R" },
              { reasoning: "State the value. For any other $k$ the equation would have no solution.", working: "k = 12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k = 12$",
            commonErrors: ["Solving for $x$ and giving $k = 0$.", "Not distributing the $3$ over the $4$, giving $k = 4$."],
          },
        },
        {
          id: "m8-u1-linear-equations-solutions-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Consider these equations: **(A)** $2(x + 4) = 2x + 8$, **(B)** $3x - 5 = 3x + 1$, **(C)** $5x - 3 = 2x + 12$. Two gyms also compete. Gym P charges a $\\$15$ sign-up fee plus $\\$4$ per visit. Gym Q has no fee and charges $\\$7$ per visit.",
          parts: [
            { label: "a", prompt: "Solve equation (C).", marks: 2 },
            { label: "b", prompt: "Solve equation (B). State how many solutions it has and explain.", marks: 2 },
            { label: "c", prompt: "Solve equation (A). State how many solutions it has and explain.", marks: 2 },
            { label: "d", prompt: "After $n$ visits, the gyms cost the same. Find $n$ and that cost in dollars.", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) $x$", answer: 5 },
              { label: "(d) Number of visits $n$", answer: 5 },
              { label: "(d) Cost", answer: 35, unit: "dollars" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Inverse operations", statement: "Do the same operation to both sides to keep the equation balanced." },
              { kind: "principle", name: "Number of solutions", statement: "A false statement means no solution; a true statement means infinitely many solutions." },
              { kind: "principle", name: "Modeling cost", statement: "Total cost $=$ fixed fee $+$ rate $\\times$ number of visits." },
            ],
            steps: [
              { part: "a", reasoning: "Subtract $2x$ and add $3$ to collect terms.", working: "5x - 2x = 12 + 3 \\Rightarrow 3x = 15", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Divide by $3$.", working: "x = 5", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Subtract $3x$ from both sides. The variable terms cancel and leave a false statement.", working: "-5 = 1", marks: 1, markCode: "M" },
              { part: "b", reasoning: "A false statement means that no value of $x$ works: **no solution**.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Expand the bracket. Both sides are then identical.", working: "2x + 8 = 2x + 8 \\Rightarrow 8 = 8", marks: 1, markCode: "M" },
              { part: "c", reasoning: "A true statement for every $x$ means **infinitely many solutions**.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Set the two costs equal.", working: "15 + 4n = 7n", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Solve for $n$.", working: "15 = 3n \\Rightarrow n = 5", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute into either cost, such as Gym Q: $7 \\times 5$ dollars. Check Gym P: $15 + 20 = 35$.", working: "7 \\times 5 = 35", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $x = 5$ (b) no solution ($-5 = 1$ is false) (c) infinitely many solutions ($8 = 8$ is true) (d) $n = 5$ visits, cost $\\$35$.",
            commonErrors: ["Declaring (B) has solution $x = 0$.", "Setting up Gym P as $4(n + 15)$."],
            examinerNote: "In (d) accept a correct table or trial-and-improvement method that reaches $n = 5$ and $\\$35$.",
          },
        },
      ],
    },
  ],
};
