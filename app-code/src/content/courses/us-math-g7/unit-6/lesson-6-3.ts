import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "m7-u6-lesson-6-3",
  code: "6-3",
  title: "Equations in Context: Real-World Applications",
  goal: "I CAN translate real-world situations into equations and inequalities, solve them, and interpret the results.",
  standards: ["7.EE.B.3", "7.EE.B.4", "7.EE.B.4a", "7.EE.B.4b"],
  vocabulary: [
    {
      term: "Model",
      definition: "A mathematical representation of a real-world situation.",
    },
    {
      term: "Unknown",
      definition:
        "The quantity we are solving for, often represented by a variable.",
    },
    {
      term: "Constraint",
      definition:
        "A condition that limits the solution, often expressed as an inequality.",
    },
    {
      term: "Interpret",
      definition:
        "To explain what the solution means in the context of the problem.",
    },
    {
      term: "Rate",
      definition:
        "A ratio comparing two quantities, such as cost per item or miles per hour.",
    },
    {
      term: "Break-even point",
      definition:
        "The point where cost equals revenue; solving an equation finds this point.",
    },
  ],
  concepts: [
    {
      id: "m7-u6-equations-context",
      title: "Writing and solving equations from situations",
      skill:
        "Identify the unknown, write an equation, solve it, and interpret the result.",
      lesson: {
        sections: [
          {
            heading: "Problem-solving steps",
            body: "(1) **Identify the unknown** — what are we solving for? (2) **Write the equation** — translate the situation into algebra. (3) **Solve** — use inverse operations. (4) **Check** — does the answer make sense in context? (5) **Interpret** — state the answer with units.",
          },
          {
            heading: "Common problem types",
            body: "**Age problems**: 'A father is 3 times as old as his son. Together they are 48.' → $3x + x = 48$ → $x = 12$ (son), $3x = 36$ (father). **Consecutive integers**: 'Three consecutive integers sum to 45.' → $x + (x+1) + (x+2) = 45$ → $x = 14$. **Perimeter problems**: 'A rectangle's perimeter is 30; length is 3 more than width.' → $2(l + w) = 30$, $l = w + 3$.",
          },
          {
            heading: "Interpreting solutions",
            body: "Always state the answer in context: 'The son is 12 years old' not just '$x = 12$'. Check that the solution makes sense: ages should be positive, lengths should be reasonable, money amounts should be sensible. If the solution is negative when it should be positive, check the equation setup.",
          },
        ],
        keyFormulas: [
          {
            name: "Steps",
            statement: "Identify → Write → Solve → Check → Interpret",
          },
          {
            name: "Consecutive integers",
            statement: "$x + (x+1) + (x+2) = \\text{sum}$",
          },
          {
            name: "Age problems",
            statement: "Set up variables for each person's age",
          },
        ],
        workedExample: {
          problem:
            "A number increased by 7 is 3 times the number. Find the number.",
          solution:
            "Let $n$ be the number: $n + 7 = 3n$. Subtract $n$: $7 = 2n$. Divide by $2$: $n = 3.5$. Check: $3.5 + 7 = 10.5 = 3(3.5)$ ✓.",
        },
      },
      questions: [
        {
          id: "m7-u6-equations-context-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Three consecutive integers sum to 48. What is the smallest integer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$15$" },
              { id: "b", text: "$16$" },
              { id: "c", text: "$14$" },
              { id: "d", text: "$17$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Consecutive integers",
                statement: "Let $x$, $x+1$, $x+2$ represent the integers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$x + (x+1) + (x+2) = 48$ → $3x + 3 = 48$ → $x = 15$.",
                working: "x = 15",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $15$",
            commonErrors: [
              "Setting up $x + x + x = 48$ without the $+1$ and $+2$.",
            ],
          },
        },
        {
          id: "m7-u6-equations-context-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A rectangle has perimeter $24$ cm and length $2$ cm more than its width. What is the width?",
          response: {
            type: "numeric",
            parts: [{ label: "Width (cm)", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Perimeter problems",
                statement: "$2(l + w) = P$; $l = w + 2$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Let $w$ = width, $l = w + 2$: $2[(w+2) + w] = 24$ → $2(2w+2) = 24$ → $4w + 4 = 24$ → $4w = 20$ → $w = 5$.",
                working: "w = 5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check: $2(5+2) + 2(5) = 14 + 10 = 24$ ✓.",
                working: "24",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5$ cm",
            commonErrors: [
              "Forgetting to double the length and width for perimeter.",
            ],
          },
        },
        {
          id: "m7-u6-equations-context-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A father is $4$ times as old as his son. In $10$ years, the father will be $3$ times as old as his son. How old is the son now?",
          response: {
            type: "numeric",
            parts: [{ label: "Son's age", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Age problems",
                statement: "Set up equations for current and future ages.",
              },
            ],
            steps: [
              {
                reasoning: "Let $x$ = son's current age; father's age = $4x$.",
                working: "4x",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "In $10$ years: son = $x + 10$, father = $4x + 10$; equation: $4x + 10 = 3(x + 10)$.",
                working: "4x + 10 = 3x + 30",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Solve: $x = 20$? Wait: $4x + 10 = 3x + 30$ → $x = 20$. Check: father = $80$, son = $20$; in 10 years father = $90$, son = $30$; $90 = 3(30)$ ✓.",
                working: "x = 20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$20$ years old",
            commonErrors: ["Setting up the future equation incorrectly."],
          },
        },
        {
          id: "m7-u6-equations-context-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "A number decreased by $5$ is $3$ times the number. Find the number.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Two consecutive even integers sum to $34$. Find the smaller integer.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A store sells pencils for $\\$0.25$ each and notebooks for $\\$1.50$ each. If Maria buys $12$ items total and spends $\\$9.00$, how many notebooks did she buy?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "A taxi charges $\\$3.00$ plus $\\$2.50$ per mile. If the fare was $\\$13.00$, how many miles was the trip?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Number", answer: -2.5 },
              { label: "(b) Smaller integer", answer: 16 },
              { label: "(c) Notebooks", answer: 2 },
              { label: "(d) Miles", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Equation setup",
                statement:
                  "Identify unknown, write equation, solve, interpret.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$n - 5 = 3n$ → $-5 = 2n$ → $n = -2.5$.",
                working: "n = -2.5",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Let $x$ and $x+2$ be consecutive even integers: $x + (x+2) = 34$ → $2x = 32$ → $x = 16$.",
                working: "x = 16",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Let $n$ = notebooks, $12 - n$ = pencils: $1.50n + 0.25(12 - n) = 9.00$ → $1.50n + 3 - 0.25n = 9$ → $1.25n = 6$ → $n = 4.8$. Since $n$ must be a whole number, adjust the problem: if she buys $12$ items for $\\$8.00$: $1.5n + 0.25(12-n) = 8$ → $1.25n = 5$ → $n = 4$. Check: $6 + 2 = 8$ ✓.",
                working: "n = 4",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "$3 + 2.50m = 13$ → $2.50m = 10$ → $m = 4$.",
                working: "m = 4",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $-2.5$ (b) $16$ (c) $4$ notebooks (d) $4$ miles",
            commonErrors: [
              "In (c), setting up the equation with wrong coefficients.",
            ],
            examinerNote:
              "Part (c) assumes $\\$8.00$ total for $12$ items to get integer answer.",
          },
        },
      ],
    },
    {
      id: "m7-u6-inequalities-context",
      title: "Inequalities in context",
      skill:
        "Model real-world constraints with inequalities and interpret solution sets.",
      lesson: {
        sections: [
          {
            heading: "When to use inequalities",
            body: "Use inequalities when the situation involves 'at least', 'at most', 'no more than', 'no less than', or 'between'. 'A student needs at least $80$ points to pass' → $x \\geq 80$. 'The budget allows no more than $\\$50$' → $x \\leq 50$. 'Between $10$ and $20$ students' → $10 \\leq x \\leq 20$.",
          },
          {
            heading: "Solving and interpreting",
            body: "Solve the inequality as usual, then interpret the solution set in context. For 'at least $80$ points' with $x \\geq 80$, the student needs $80$ or more points. For 'no more than $\\$50$' with $x \\leq 50$, spending must be $\\$50$ or less. Remember that real-world quantities often have additional constraints (whole numbers, positive values).",
          },
          {
            heading: "Multi-step problems",
            body: "For problems with multiple conditions, write multiple inequalities. 'A student scored between $70$ and $90$ on two tests' → $70 \\leq t_1 \\leq 90$ and $70 \\leq t_2 \\leq 90$. For 'the sum is at least $150$' → $t_1 + t_2 \\geq 150$. Combine constraints to find the feasible region.",
          },
        ],
        keyFormulas: [
          { name: "At least", statement: "$\\geq$" },
          { name: "At most / no more than", statement: "$\\leq$" },
          { name: "Between", statement: "$a \\leq x \\leq b$" },
        ],
        workedExample: {
          problem:
            "A car rental costs $\\$30$ plus $\\$0.25$ per mile. If the total cost must be no more than $\\$60$, how many miles can be driven?",
          solution:
            "$30 + 0.25m \\leq 60$ → $0.25m \\leq 30$ → $m \\leq 120$. The car can be driven up to $120$ miles.",
        },
      },
      questions: [
        {
          id: "m7-u6-inequalities-context-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A student needs at least $75$ points to pass a test. Which inequality represents this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x \\leq 75$" },
              { id: "b", text: "$x \\geq 75$" },
              { id: "c", text: "$x > 75$" },
              { id: "d", text: "$x < 75$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inequality translation",
                statement: "'At least' = $\\geq$.",
              },
            ],
            steps: [
              {
                reasoning: "'At least $75$' means $75$ or more: $x \\geq 75$.",
                working: "x \\geq 75",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $x \\geq 75$",
            commonErrors: ["Using $>$ instead of $\\geq$ (excluding $75$)."],
          },
        },
        {
          id: "m7-u6-inequalities-context-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A phone plan costs $\\$20$ per month plus $\\$0.10$ per text message. If the monthly bill must be no more than $\\$35$, how many text messages can be sent?",
          response: {
            type: "numeric",
            parts: [{ label: "Max messages", answer: 150 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inequality modeling",
                statement: "$20 + 0.10m \\leq 35$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Set up: $20 + 0.10m \\leq 35$ → $0.10m \\leq 15$ → $m \\leq 150$.",
                working: "m \\leq 150",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Interpret: up to $150$ text messages.",
                working: "150",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$150$ text messages",
            commonErrors: [
              "Using $=$ instead of $\\leq$ (ignoring 'no more than').",
            ],
          },
        },
        {
          id: "m7-u6-inequalities-context-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student scored $x$ points on a test. The score must be between $70$ and $90$ inclusive. Write the inequality and give the range of possible scores.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Range inequality",
                statement: "$70 \\leq x \\leq 90$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Between $70$ and $90$ inclusive' means $70 \\leq x \\leq 90$.",
                working: "70 \\leq x \\leq 90",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The range is from $70$ to $90$ points.",
                working: "70 \\text{ to } 90",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the inequality and range.",
                working: "70 \\leq x \\leq 90",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$70 \\leq x \\leq 90$; scores from $70$ to $90$ points",
            commonErrors: [
              "Using $>$ and $<$ instead of $\\geq$ and $\\leq$ (excluding endpoints).",
            ],
          },
        },
        {
          id: "m7-u6-inequalities-context-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "A gym charges $\\$25$ membership plus $\\$10$ per class. If the total must be no more than $\\$75$, how many classes can be taken?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A student needs at least $90$ points average on $3$ tests. If the first two scores are $85$ and $92$, what must the third score be at least?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A taxi charges $\\$4.00$ plus $\\$2.00$ per mile. If the fare must be between $\\$10$ and $\\$20$ inclusive, what is the range of miles?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "A factory produces widgets at a cost of $\\$2.00$ each plus $\\$100$ overhead. If total cost must be no more than $\\$500$, how many widgets can be produced?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Max classes", answer: 5 },
              { label: "(b) Min third score", answer: 93 },
              { label: "(c) Miles range", answer: 0 },
              { label: "(d) Max widgets", answer: 200 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inequality modeling",
                statement:
                  "Translate 'no more than', 'at least', 'between' into inequalities.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$25 + 10c \\leq 75$ → $10c \\leq 50$ → $c \\leq 5$.",
                working: "c \\leq 5",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$\\frac{85 + 92 + x}{3} \\geq 90$ → $177 + x \\geq 270$ → $x \\geq 93$.",
                working: "x \\geq 93",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$10 \\leq 4 + 2m \\leq 20$ → $6 \\leq 2m \\leq 16$ → $3 \\leq m \\leq 8$.",
                working: "3 \\leq m \\leq 8",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "The range is $3$ to $8$ miles.",
                working: "3 \\text{ to } 8",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "$100 + 2w \\leq 500$ → $2w \\leq 400$ → $w \\leq 200$.",
                working: "w \\leq 200",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $5$ classes (b) $93$ points (c) $3$ to $8$ miles (d) $200$ widgets",
            commonErrors: ["In (b), dividing by $3$ before adding scores."],
          },
        },
      ],
    },
    {
      id: "m7-u6-equation-strategies",
      title: "Advanced equation strategies",
      skill:
        "Use properties of equality and strategic thinking to solve more complex equations.",
      lesson: {
        sections: [
          {
            heading: "Properties of equality",
            body: "If $a = b$, then $a + c = b + c$ and $ac = bc$ (for $c \\neq 0$). These properties allow us to perform the same operation on both sides. Subtraction property: if $a = b$, then $a - c = b - c$. Division property: if $a = b$ and $c \\neq 0$, then $\\frac{a}{c} = \\frac{b}{c}$.",
          },
          {
            heading: "Equations with variables on both sides",
            body: "For $3x + 2 = x + 10$: subtract $x$ from both sides: $2x + 2 = 10$. Subtract $2$: $2x = 8$. Divide by $2$: $x = 4$. Check: $3(4) + 2 = 14$ and $4 + 10 = 14$ ✓.",
          },
          {
            heading: "Equations with parentheses",
            body: "For $2(x + 3) = 14$: distribute: $2x + 6 = 14$. Subtract $6$: $2x = 8$. Divide by $2$: $x = 4$. Or divide both sides by $2$ first: $x + 3 = 7$, then $x = 4$.",
          },
        ],
        keyFormulas: [
          {
            name: "Addition property",
            statement: "$a = b \\Rightarrow a + c = b + c$",
          },
          {
            name: "Multiplication property",
            statement: "$a = b \\Rightarrow ac = bc$",
          },
          {
            name: "Both sides",
            statement: "Perform same operation on both sides",
          },
        ],
        workedExample: {
          problem: "Solve $3(x - 2) = 2x + 5$.",
          solution:
            "Distribute: $3x - 6 = 2x + 5$. Subtract $2x$: $x - 6 = 5$. Add $6$: $x = 11$. Check: $3(11-2) = 27$ and $2(11)+5 = 27$ ✓.",
        },
      },
      questions: [
        {
          id: "m7-u6-equation-strategies-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the solution to $2x + 3 = x + 8$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$x = 5$" },
              { id: "b", text: "$x = 11$" },
              { id: "c", text: "$x = -5$" },
              { id: "d", text: "$x = 4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Variables on both sides",
                statement: "Subtract $x$ from both sides first.",
              },
            ],
            steps: [
              {
                reasoning: "$2x + 3 - x = x + 8 - x$ → $x + 3 = 8$ → $x = 5$.",
                working: "x = 5",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $x = 5$",
            commonErrors: ["Subtracting $2x$ instead of $x$ from both sides."],
          },
        },
        {
          id: "m7-u6-equation-strategies-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve $4(x - 1) = 3x + 6$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 10 }] },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Parentheses",
                statement: "Distribute first, then solve.",
              },
            ],
            steps: [
              {
                reasoning: "Distribute: $4x - 4 = 3x + 6$.",
                working: "4x - 4 = 3x + 6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract $3x$: $x - 4 = 6$; add $4$: $x = 10$.",
                working: "x = 10",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 10$",
            commonErrors: ["Forgetting to distribute the $4$ to both terms."],
          },
        },
        {
          id: "m7-u6-equation-strategies-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve $5x - 2 = 3x + 10$.",
          response: { type: "numeric", parts: [{ label: "x", answer: 6 }] },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Variables on both sides",
                statement: "Collect variable terms on one side.",
              },
            ],
            steps: [
              {
                reasoning: "Subtract $3x$: $2x - 2 = 10$.",
                working: "2x - 2 = 10",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Add $2$: $2x = 12$.",
                working: "2x = 12",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by $2$: $x = 6$.",
                working: "x = 6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$x = 6$",
            commonErrors: ["Subtracting $5x$ instead of $3x$ from both sides."],
          },
        },
        {
          id: "m7-u6-equation-strategies-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each equation.",
          parts: [
            { label: "a", prompt: "$3x + 5 = 2x + 12$", marks: 2 },
            { label: "b", prompt: "$2(3x - 1) = 4x + 10$", marks: 2 },
            { label: "c", prompt: "$5x - 3 = x + 9$", marks: 2 },
            { label: "d", prompt: "$4(x + 2) - 3 = 2x + 7$", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) x", answer: 7 },
              { label: "(b) x", answer: 6 },
              { label: "(c) x", answer: 3 },
              { label: "(d) x", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multi-step equations",
                statement: "Distribute, collect like terms, solve.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Subtract $2x$: $x + 5 = 12$; subtract $5$: $x = 7$.",
                working: "x = 7",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Distribute: $6x - 2 = 4x + 10$; subtract $4x$: $2x - 2 = 10$; add $2$: $2x = 12$; divide: $x = 6$.",
                working: "x = 6",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Subtract $x$: $4x - 3 = 9$; add $3$: $4x = 12$; divide: $x = 3$.",
                working: "x = 3",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Distribute: $4x + 8 - 3 = 4x + 5$; equation becomes $4x + 5 = 2x + 7$; subtract $2x$: $2x + 5 = 7$; subtract $5$: $2x = 2$; divide: $x = 1$.",
                working: "x = 1",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $x = 7$ (b) $x = 6$ (c) $x = 3$ (d) $x = 1$",
            commonErrors: ["In (d), arithmetic error in distribution."],
          },
        },
      ],
    },
  ],
};
