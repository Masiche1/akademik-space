import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "m7-u5-lesson-5-2",
  code: "5-2",
  title: "Rational Numbers: Multiplying and Dividing in Depth",
  goal: "I CAN multiply and divide rational numbers — fractions, decimals and integers — using sign rules and efficient computation.",
  standards: ["7.NS.A.1", "7.NS.A.2"],
  vocabulary: [
    { term: "Product", definition: "The result of multiplying two numbers." },
    {
      term: "Quotient",
      definition: "The result of dividing one number by another.",
    },
    {
      term: "Reciprocal",
      definition:
        "Two numbers whose product is $1$, such as $\\frac{3}{4}$ and $\\frac{4}{3}$, or $-5$ and $-\\frac{1}{5}$.",
    },
    {
      term: "Sign rules for multiplication",
      definition:
        "Same signs give a positive product; different signs give a negative product.",
    },
    {
      term: "Rate",
      definition:
        "A ratio comparing two quantities with different units, such as miles per hour.",
    },
    {
      term: "Scale factor",
      definition:
        "The constant ratio used to enlarge or reduce a figure; multiplying lengths by the scale factor.",
    },
  ],
  concepts: [
    {
      id: "m7-u5-multiply-divide",
      title: "Multiplying and dividing fractions, decimals and integers",
      skill:
        "Apply sign rules and efficient methods for rational number multiplication and division.",
      lesson: {
        sections: [
          {
            heading: "Sign rules",
            body: "Multiplication and division follow the same sign rules: **same signs give a positive result, different signs give a negative result.** $(-3) \\times (-4) = 12$ and $(-3) \\times 4 = -12$. For division: $(-12) \\div (-3) = 4$ and $12 \\div (-3) = -4$. Count the negative signs first, then work with the magnitudes.",
          },
          {
            heading: "Fractions",
            body: "Multiply fractions straight across: $\\frac{2}{3} \\times \\frac{5}{8} = \\frac{10}{24} = \\frac{5}{12}$. Cancel common factors before multiplying to simplify early: $\\frac{2}{3} \\times \\frac{5}{8} = \\frac{1}{3} \\times \\frac{5}{4} = \\frac{5}{12}$. Divide fractions by multiplying by the reciprocal: $\\frac{2}{3} \\div \\frac{4}{5} = \\frac{2}{3} \\times \\frac{5}{4} = \\frac{10}{12} = \\frac{5}{6}$.",
          },
          {
            heading: "Mixed numbers and decimals",
            body: "Convert mixed numbers to improper fractions first: $1\\frac{1}{2} \\times \\frac{2}{5} = \\frac{3}{2} \\times \\frac{2}{5} = \\frac{6}{10} = \\frac{3}{5}$. For decimals, multiply as whole numbers then place the decimal point: $-1.5 \\times 0.4 = -0.6$ (three decimal places total). Division by a fraction is multiplication by its reciprocal: $2 \\div \\frac{1}{4} = 2 \\times 4 = 8$.",
          },
        ],
        keyFormulas: [
          {
            name: "Sign rules",
            statement:
              "Same signs $\\rightarrow$ positive; different signs $\\rightarrow$ negative",
          },
          {
            name: "Fraction multiplication",
            statement: "$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{ac}{bd}$",
          },
          {
            name: "Fraction division",
            statement:
              "$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$",
          },
        ],
        workedExample: {
          problem:
            "Evaluate $-2\\frac{1}{4} \\div \\left(-\\frac{3}{8}\\right)$.",
          solution:
            "Convert to improper fractions: $-\\frac{9}{4} \\div \\left(-\\frac{3}{8}\\right) = -\\frac{9}{4} \\times \\left(-\\frac{8}{3}\\right) = \\frac{72}{12} = 6$. Same signs give a positive result.",
        },
      },
      questions: [
        {
          id: "m7-u5-mul-div-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of $(-6) \\times (-\\frac{1}{3})$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-2$" },
              { id: "b", text: "$2$" },
              { id: "c", text: "$-18$" },
              { id: "d", text: "$\\frac{1}{2}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Sign rules",
                statement: "Same signs give a positive product.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both factors are negative, so the product is positive: $6 \\times \\frac{1}{3} = 2$.",
                working:
                  "(-6) \\times \\left(-\\frac{1}{3}\\right) = 6 \\times \\frac{1}{3} = 2",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $2$",
            commonErrors: [
              "Making the product negative: $-2$.",
              "Computing $6 \\times 3 = 18$.",
            ],
          },
        },
        {
          id: "m7-u5-mul-div-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\frac{3}{4} \\div \\left(-\\frac{9}{8}\\right)$. Give your answer as a simplified fraction.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: -0.6667, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fraction division",
                statement: "Multiply by the reciprocal of the divisor.",
              },
              {
                kind: "property",
                name: "Sign rules",
                statement: "Different signs give a negative quotient.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply by the reciprocal of $-\\frac{9}{8}$, which is $-\\frac{8}{9}$.",
                working: "\\frac{3}{4} \\times \\left(-\\frac{8}{9}\\right)",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Different signs give a negative result; simplify.",
                working: "-\\frac{24}{36} = -\\frac{2}{3}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-\\frac{2}{3}$",
            commonErrors: [
              "Multiplying by $\\frac{9}{8}$ instead of its reciprocal.",
              "Losing the negative sign.",
            ],
            examinerNote:
              "Accept $-0.6\\overline{6}$ or the fraction $-\\frac{2}{3}$.",
          },
        },
        {
          id: "m7-u5-mul-div-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A recipe uses $\\frac{3}{4}$ cup of sugar per batch. A baker wants to make $2\\frac{1}{3}$ batches. How many cups of sugar are needed?",
          response: {
            type: "numeric",
            parts: [{ label: "Cups of sugar", answer: 1.75 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mixed numbers",
                statement:
                  "Convert mixed numbers to improper fractions before multiplying.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convert $2\\frac{1}{3}$ to $\\frac{7}{3}$ and multiply by the amount per batch.",
                working: "\\frac{3}{4} \\times \\frac{7}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cancel the common factor $3$ before multiplying.",
                working: "\\frac{1}{4} \\times 7 = \\frac{7}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to a decimal or mixed number.",
                working: "\\frac{7}{4} = 1.75 = 1\\frac{3}{4}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$1.75$ cups ($1\\frac{3}{4}$ cups)",
            commonErrors: [
              "Computing $\\frac{3}{4} \\times 2\\frac{1}{3}$ by multiplying whole parts and fractions separately.",
              "Forgetting to convert the mixed number.",
            ],
          },
        },
        {
          id: "m7-u5-mul-div-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate each expression.",
          parts: [
            {
              label: "a",
              prompt: "$(-\\frac{2}{5}) \\times \\frac{15}{8}$",
              marks: 2,
            },
            { label: "b", prompt: "$-1.6 \\div 0.4$", marks: 2 },
            {
              label: "c",
              prompt: "$3\\frac{1}{3} \\times (-\\frac{9}{10})$",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "A car travels $-240$ miles relative to its starting point after driving west for $3$ hours at a constant speed. What is its velocity in miles per hour? (West is negative.)",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a)", answer: -0.75 },
              { label: "(b)", answer: -4 },
              { label: "(c)", answer: -3 },
              { label: "(d) Velocity (mph)", answer: -80 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Sign rules",
                statement:
                  "Same signs $\\rightarrow$ positive; different signs $\\rightarrow$ negative.",
              },
              {
                kind: "skill",
                name: "Mixed numbers",
                statement: "Convert before multiplying.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Different signs give a negative product; simplify before multiplying.",
                working:
                  "-\\frac{2}{5} \\times \\frac{15}{8} = -\\frac{2}{5} \\times \\frac{15}{8}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Cancel $5$ and $15$, then $2$ and $8$.",
                working: "-\\frac{1}{1} \\times \\frac{3}{4} = -\\frac{3}{4}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Different signs give a negative quotient; divide decimals.",
                working: "-1.6 \\div 0.4 = -16 \\div 4 = -4",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the result.",
                working: "-4",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Convert $3\\frac{1}{3}$ to $\\frac{10}{3}$ and multiply by $-\\frac{9}{10}$.",
                working: "\\frac{10}{3} \\times \\left(-\\frac{9}{10}\\right)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Different signs give a negative result; simplify.",
                working: "-\\frac{90}{30} = -3",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Velocity is displacement divided by time: $-240 \\div 3$.",
                working: "-240 \\div 3",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "West is negative, so a westward velocity is negative: $-80$ mph. The question asks for velocity; answer $-80$ mph (or $80$ mph west).",
                working: "-80\\text{ mph}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $-\\frac{3}{4}$ (b) $-4$ (c) $-3$ (d) $-80$ mph (westward)",
            commonErrors: [
              "In (d), reporting $80$ mph without the negative sign, or computing $240 \\div 3$ without the sign.",
            ],
            examinerNote:
              "In (d) accept $-80$ mph or '80 mph west' with correct interpretation.",
          },
        },
      ],
    },
    {
      id: "m7-u5-mul-div-reciprocals",
      title: "Reciprocals and multiplicative relationships",
      skill:
        "Use reciprocals to understand division and solve problems involving unit rates and scale.",
      lesson: {
        sections: [
          {
            heading: "Reciprocals",
            body: "The **reciprocal** of a nonzero number $a$ is $\\frac{1}{a}$. The reciprocal of a fraction $\\frac{a}{b}$ is $\\frac{b}{a}$. Two numbers are reciprocals when their product is $1$: $\\frac{3}{4} \\times \\frac{4}{3} = 1$ and $(-5) \\times \\left(-\\frac{1}{5}\\right) = 1$. The reciprocal of a negative number is negative.",
          },
          {
            heading: "Division as multiplication by reciprocal",
            body: "Dividing by a number is the same as multiplying by its reciprocal. This is why $x \\div \\frac{1}{2} = x \\times 2$ — dividing by $\\frac{1}{2}$ doubles the value. $12 \\div \\frac{1}{3} = 12 \\times 3 = 36$. This relationship is fundamental to unit rates: if $y = kx$, then $x = \\frac{y}{k}$, and the reciprocal $\\frac{1}{k}$ converts the other direction.",
          },
          {
            heading: "Reciprocals in real problems",
            body: "If a car travels $60$ miles in $1.5$ hours, its speed is $\\frac{60}{1.5} = 40$ mph. The reciprocal relationship gives time per mile: $\\frac{1.5}{60} = 0.025$ hours per mile, or $1.5$ minutes per mile. Both rates describe the same relationship from different directions.",
          },
        ],
        keyFormulas: [
          {
            name: "Reciprocal",
            statement: "$a \\times \\frac{1}{a} = 1$ for $a \\neq 0$",
          },
          {
            name: "Fraction reciprocal",
            statement: "$\\frac{a}{b} \\leftrightarrow \\frac{b}{a}$",
          },
          {
            name: "Division as multiplication",
            statement: "$a \\div b = a \\times \\frac{1}{b}$",
          },
        ],
        workedExample: {
          problem:
            "A train travels $180$ miles in $2\\frac{1}{2}$ hours. What is its speed in miles per hour?",
          solution:
            "Speed $= \\frac{180}{2\\frac{1}{2}} = \\frac{180}{\\frac{5}{2}} = 180 \\times \\frac{2}{5} = 72$ mph.",
        },
      },
      questions: [
        {
          id: "m7-u5-mul-div-reciprocals-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the reciprocal of $-\\frac{4}{7}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{7}{4}$" },
              { id: "b", text: "$-\\frac{7}{4}$" },
              { id: "c", text: "$-\\frac{4}{7}$" },
              { id: "d", text: "$\\frac{4}{7}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Reciprocal",
                statement: "Flip the fraction and keep the sign.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The reciprocal of $-\\frac{4}{7}$ is $-\\frac{7}{4}$; the sign is preserved.",
                working: "\\frac{1}{-\\frac{4}{7}} = -\\frac{7}{4}",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $-\\frac{7}{4}$",
            commonErrors: [
              "Forgetting the negative sign: $\\frac{7}{4}$.",
              "Reciprocating only the numerator or denominator.",
            ],
          },
        },
        {
          id: "m7-u5-mul-div-reciprocals-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $15 \\div \\frac{3}{5}$. Give your answer as a whole number.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Division by fraction",
                statement: "Multiply by the reciprocal of the divisor.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply by the reciprocal of $\\frac{3}{5}$, which is $\\frac{5}{3}$.",
                working: "15 \\times \\frac{5}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify.",
                working: "5 \\times 5 = 25",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$25$",
            commonErrors: [
              "Computing $15 \\times \\frac{3}{5} = 9$, using the fraction instead of its reciprocal.",
              "Dividing $15 \\div 3 = 5$ and forgetting to multiply by $5$.",
            ],
          },
        },
        {
          id: "m7-u5-mul-div-reciprocals-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A faucet fills a pool at a rate of $\\frac{3}{4}$ gallon per minute. How many minutes does it take to fill a $12$-gallon pool?",
          response: {
            type: "numeric",
            parts: [{ label: "Minutes", answer: 16 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Unit rate",
                statement: "Time = total amount $\\div$ rate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Time is total gallons divided by gallons per minute.",
                working: "12 \\div \\frac{3}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by the reciprocal of $\\frac{3}{4}$.",
                working: "12 \\times \\frac{4}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify.",
                working: "4 \\times 4 = 16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$16$ minutes",
            commonErrors: [
              "Computing $12 \\times \\frac{3}{4} = 9$ minutes, multiplying instead of dividing.",
              "Using the rate as gallons per minute in the numerator incorrectly.",
            ],
          },
        },
        {
          id: "m7-u5-mul-div-reciprocals-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "A car travels $180$ miles in $2\\frac{1}{4}$ hours. What is its average speed in miles per hour?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A printer prints $\\frac{3}{8}$ page per second. How many seconds does it take to print $6$ pages?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A map uses a scale where $1$ inch represents $\\frac{5}{2}$ miles. Two cities are $8$ inches apart on the map. How many miles apart are they in reality?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "The product of a number and $-\\frac{2}{3}$ is $8$. What is the number?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Speed (mph)", answer: 80 },
              { label: "(b) Seconds", answer: 16 },
              { label: "(c) Real distance (miles)", answer: 20 },
              { label: "(d) Number", answer: -12 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Unit rate",
                statement:
                  "Rate = quantity $\\div$ time or quantity $\\div$ rate for time.",
              },
              {
                kind: "skill",
                name: "Scale factor",
                statement: "Real distance = map distance $\\times$ scale.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Speed = distance $\\div$ time: $180 \\div 2\\frac{1}{4}$.",
                working: "180 \\div \\frac{9}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Multiply by the reciprocal.",
                working: "180 \\times \\frac{4}{9} = 80",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Time = pages $\\div$ pages per second: $6 \\div \\frac{3}{8}$.",
                working: "6 \\times \\frac{8}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Simplify.",
                working: "2 \\times 8 = 16",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Real distance = map distance $\\times$ scale factor: $8 \\times \\frac{5}{2}$.",
                working: "8 \\times \\frac{5}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Simplify.",
                working: "4 \\times 5 = 20",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Let the number be $x$: $x \\times \\left(-\\frac{2}{3}\\right) = 8$.",
                working: "x = 8 \\div \\left(-\\frac{2}{3}\\right)",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Multiply by the reciprocal; different signs give a negative result.",
                working: "8 \\times \\left(-\\frac{3}{2}\\right) = -12",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $80$ mph (b) $16$ seconds (c) $20$ miles (d) $-12$",
            commonErrors: [
              "In (d), computing $8 \\times \\frac{2}{3}$ instead of dividing by $-\\frac{2}{3}$.",
            ],
          },
        },
      ],
    },
    {
      id: "m7-u5-mul-div-contexts",
      title: "Multi-step multiplication and division problems",
      skill:
        "Solve real-world problems combining multiplication and division of rational numbers.",
      lesson: {
        sections: [
          {
            heading: "Reading the situation",
            body: "Real-world problems combine rates, scale factors, and proportional relationships. Identify what is being multiplied or divided: total = rate $\\times$ time, distance = speed $\\times$ time, amount = rate $\\times$ quantity. Assign signs to quantities that can be negative (direction, temperature change, debt).",
          },
          {
            heading: "Efficiency with fractions",
            body: "Cancel common factors before multiplying to keep numbers small: $\\frac{5}{6} \\times \\frac{9}{10} = \\frac{1}{2} \\times \\frac{3}{2} = \\frac{3}{4}$. For mixed problems, convert all quantities to fractions or decimals first, then compute. $2\\frac{1}{2} \\times 1\\frac{1}{5} = \\frac{5}{2} \\times \\frac{6}{5} = 3$.",
          },
          {
            heading: "Interpreting results",
            body: "The sign of the product or quotient indicates direction: positive = same direction, negative = opposite directions. Units matter: miles per hour $\\times$ hours = miles. Always state units and check whether the answer makes sense in context.",
          },
        ],
        keyFormulas: [
          {
            name: "Total = rate $\\times$ time",
            statement: "Distance, cost, or amount formulas",
          },
          {
            name: "Cancel first",
            statement: "Simplify fractions before multiplying",
          },
          {
            name: "Units check",
            statement: "Verify the answer has the right units",
          },
        ],
        workedExample: {
          problem:
            "A painter covers $\\frac{2}{3}$ of a wall per hour. How many walls can the painter complete in $4\\frac{1}{2}$ hours?",
          solution:
            "Walls = rate $\\times$ time $= \\frac{2}{3} \\times \\frac{9}{2} = \\frac{18}{6} = 3$ walls.",
        },
      },
      questions: [
        {
          id: "m7-u5-mul-div-contexts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A car travels at $-60$ miles per hour (westward) for $2.5$ hours. How far west does it travel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$150$ miles" },
              { id: "b", text: "$-150$ miles" },
              { id: "c", text: "$-24$ miles" },
              { id: "d", text: "$240$ miles" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Signed quantities",
                statement:
                  "Distance = speed $\\times$ time; westward is negative.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Distance = $-60 \\times 2.5 = -150$ miles (negative because westward).",
                working: "-60 \\times 2.5 = -150",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $-150$ miles (150 miles west)",
            commonErrors: [
              "Forgetting the negative sign.",
              "Dividing instead of multiplying.",
            ],
          },
        },
        {
          id: "m7-u5-mul-div-contexts-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A recipe uses $\\frac{2}{3}$ cup of rice per serving. How many cups of rice are needed for $4\\frac{1}{2}$ servings?",
          response: {
            type: "numeric",
            parts: [{ label: "Cups of rice", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Fraction multiplication",
                statement: "Amount = rate $\\times$ quantity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convert $4\\frac{1}{2}$ to $\\frac{9}{2}$ and multiply by $\\frac{2}{3}$.",
                working: "\\frac{2}{3} \\times \\frac{9}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cancel common factors and simplify.",
                working: "\\frac{1}{1} \\times 3 = 3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$3$ cups",
            commonErrors: [
              "Multiplying $\\frac{2}{3} \\times 4\\frac{1}{2}$ without converting the mixed number.",
            ],
          },
        },
        {
          id: "m7-u5-mul-div-contexts-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A construction crew lays $\\frac{5}{8}$ mile of sidewalk per day. At this rate, how many days will it take to lay $3\\frac{3}{4}$ miles of sidewalk?",
          response: { type: "numeric", parts: [{ label: "Days", answer: 6 }] },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Unit rate division",
                statement: "Days = total distance $\\div$ rate per day.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Convert $3\\frac{3}{4}$ to $\\frac{15}{4}$ and divide by $\\frac{5}{8}$.",
                working: "\\frac{15}{4} \\div \\frac{5}{8}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by the reciprocal of the divisor.",
                working: "\\frac{15}{4} \\times \\frac{8}{5}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Simplify.",
                working: "\\frac{3}{1} \\times 2 = 6",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$6$ days",
            commonErrors: [
              "Multiplying $\\frac{15}{4} \\times \\frac{5}{8}$ instead of dividing.",
            ],
          },
        },
        {
          id: "m7-u5-mul-div-contexts-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "A car travels $2\\frac{1}{2}$ hours at $48$ miles per hour. How far does it travel?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A pump fills a tank at $\\frac{3}{4}$ gallon per minute. How many gallons are in the tank after $5\\frac{1}{3}$ minutes?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A hiker walks $-4\\frac{1}{2}$ miles (downhill) and then $2\\frac{1}{4}$ miles (uphill) in one hour. What is the net distance traveled in that hour?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "A machine produces $\\frac{5}{6}$ part per minute. How many parts does it produce in $3\\frac{1}{5}$ minutes?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Distance (miles)", answer: 120 },
              { label: "(b) Gallons", answer: 4 },
              { label: "(c) Net distance (miles)", answer: -2.25 },
              { label: "(d) Parts", answer: 2.6667 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rate formulas",
                statement:
                  "Distance = speed $\\times$ time; amount = rate $\\times$ time.",
              },
              {
                kind: "skill",
                name: "Signed quantities",
                statement: "Downhill negative, uphill positive.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Distance = speed $\\times$ time: $48 \\times 2\\frac{1}{2}$.",
                working: "48 \\times \\frac{5}{2}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Simplify.",
                working: "24 \\times 5 = 120",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Amount = rate $\\times$ time: $\\frac{3}{4} \\times 5\\frac{1}{3}$.",
                working: "\\frac{3}{4} \\times \\frac{16}{3}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Cancel and simplify.",
                working: "\\frac{1}{1} \\times 4 = 4",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Downhill is negative, uphill positive: $-4\\frac{1}{2} + 2\\frac{1}{4}$.",
                working: "-\\frac{9}{2} + \\frac{9}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Combine with common denominator.",
                working:
                  "-\\frac{18}{4} + \\frac{9}{4} = -\\frac{9}{4} = -2\\frac{1}{4}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Parts = rate $\\times$ time: $\\frac{5}{6} \\times 3\\frac{1}{5}$.",
                working: "\\frac{5}{6} \\times \\frac{16}{5}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Cancel and simplify.",
                working:
                  "\\frac{1}{1} \\times \\frac{16}{6} = \\frac{8}{3} \\approx 2.67",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $120$ miles (b) $4$ gallons (c) $-2\\frac{1}{4}$ miles (d) $\\frac{8}{3} \\approx 2.67$ parts",
            commonErrors: [
              "In (c), adding both distances as positive instead of recognizing downhill is negative.",
            ],
            examinerNote: "Accept $2.67$ or $\\frac{8}{3}$ for (d).",
          },
        },
      ],
    },
  ],
};
