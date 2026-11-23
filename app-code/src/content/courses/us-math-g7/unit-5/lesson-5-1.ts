import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "m7-u5-lesson-5-1",
  code: "5-1",
  title: "Rational Numbers: Adding and Subtracting in Depth",
  goal: "I CAN add and subtract rational numbers fluently — integers, fractions and decimals — including multi-step problems and real-world contexts.",
  standards: ["7.NS.A.1", "7.NS.A.2"],
  vocabulary: [
    {
      term: "Rational number",
      definition:
        "Any number that can be written as a fraction $\\frac{a}{b}$ where $b \\neq 0$, including integers, fractions, terminating and repeating decimals.",
    },
    {
      term: "Additive inverse",
      definition:
        "Two numbers that sum to zero, such as $3$ and $-3$ or $\\frac{2}{5}$ and $-\\frac{2}{5}$.",
    },
    {
      term: "Absolute value",
      definition:
        "The distance from zero on the number line, written $|x|$. It is always nonnegative.",
    },
    {
      term: "Number line",
      definition:
        "A line on which numbers are placed in order; negative numbers are to the left of zero and positive numbers to the right.",
    },
    {
      term: "Like terms",
      definition:
        "Numbers or fractions with a common denominator that can be combined directly, such as $\\frac{1}{4}$ and $\\frac{3}{4}$.",
    },
    {
      term: "Difference",
      definition:
        "The result of subtracting one rational number from another; $a - b$ can be negative, zero, or positive.",
    },
  ],
  concepts: [
    {
      id: "m7-u5-add-sub-integers",
      title: "Adding and subtracting integers with number-line reasoning",
      skill:
        "Add and subtract integers using direction and magnitude reasoning.",
      lesson: {
        sections: [
          {
            heading: "Addition as movement",
            body: "Think of the number line: positive numbers move right, negative numbers move left. To add integers, move in the direction of the second number by its magnitude. $-3 + 5 = 2$: start at $-3$, move $5$ units right, ending at $2$. To subtract, add the opposite: $-3 - (-5) = -3 + 5 = 2$.",
          },
          {
            heading: "Rules for signs",
            body: "Same signs: add the magnitudes and keep the sign. $-4 + (-7) = -11$. Different signs: subtract the smaller magnitude from the larger and keep the sign of the larger magnitude. $-4 + 7 = 3$. For subtraction, rewrite as addition of the opposite: $7 - (-4) = 7 + 4 = 11$ and $-7 - 4 = -11$.",
          },
          {
            heading: "Why subtracting a negative adds",
            body: "$a - (-b) = a + b$ because subtracting a negative is the same as removing a debt. If you owe $\\$8$ ($-8$) and someone cancels $\\$5$ of it, your balance is $-8 + 5 = -3$, not $-13$. Subtraction moves left only when subtracting a positive number.",
          },
        ],
        keyFormulas: [
          {
            name: "Add integers",
            statement:
              "$(-a) + (-b) = -(a+b)$; different signs: subtract magnitudes, keep larger sign",
          },
          { name: "Subtract integers", statement: "$a - b = a + (-b)$" },
          { name: "Subtracting negative", statement: "$a - (-b) = a + b$" },
        ],
        workedExample: {
          problem: "Evaluate $-12 - (-5) + (-3)$.",
          solution:
            "Rewrite as addition of opposites: $-12 + 5 + (-3)$. Group same signs: $-12 + (-3) = -15$, then $-15 + 5 = -10$.",
        },
      },
      questions: [
        {
          id: "m7-u5-add-sub-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the value of $-9 + 14$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-23$" },
              { id: "b", text: "$5$" },
              { id: "c", text: "$-5$" },
              { id: "d", text: "$23$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Integer addition",
                statement:
                  "Different signs: subtract magnitudes, keep the sign of the larger magnitude.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$|{-9}| = 9$ and $|14| = 14$; $14 - 9 = 5$ and $14$ is positive, so the result is positive.",
                working: "-9 + 14 = 5",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $5$",
            commonErrors: [
              "Adding the magnitudes to get $-23$.",
              "Getting the sign wrong: $-5$ instead of $5$.",
            ],
          },
        },
        {
          id: "m7-u5-add-sub-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $-8 - (-13)$. Show your steps.",
          response: { type: "numeric", parts: [{ label: "Value", answer: 5 }] },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Subtracting a negative",
                statement: "$a - (-b) = a + b$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rewrite subtraction as adding the opposite of $-13$, which is $+13$.",
                working: "-8 - (-13) = -8 + 13",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Different signs: subtract magnitudes, keep the sign of the larger.",
                working: "-8 + 13 = 5",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5$",
            commonErrors: [
              "Writing $-8 - 13 = -21$, forgetting to flip the sign of $-13$.",
              "Computing $8 - 13 = -5$ and forgetting the rule gives $+5$.",
            ],
          },
        },
        {
          id: "m7-u5-add-sub-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A submarine is at a depth of $-120$ meters below sea level. It rises $45$ meters, then dives $30$ meters, then rises $15$ meters. What is its final depth? Express your answer as a signed number of meters.",
          response: {
            type: "numeric",
            parts: [{ label: "Final depth (m)", answer: -90 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Real-world signed numbers",
                statement:
                  "Depth below sea level is negative; rising increases the value.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rising $45$ meters means adding $+45$ to the depth.",
                working: "-120 + 45 = -75",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Diving $30$ meters means adding $-30$.",
                working: "-75 + (-30) = -105",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Rising $15$ meters means adding $+15$.",
                working: "-105 + 15 = -90",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-90$ meters (still $90$ meters below sea level)",
            commonErrors: [
              "Treating all movements as positive.",
              "Computing $-120 + 45 - 30 + 15 = -90$ but reporting $90$ without the negative sign.",
            ],
          },
        },
        {
          id: "m7-u5-add-sub-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate each expression.",
          parts: [
            { label: "a", prompt: "$-15 + 22 - (-8)$", marks: 2 },
            { label: "b", prompt: "$7 - (-9) + (-12)$", marks: 2 },
            { label: "c", prompt: "$-20 - (-5) - 8$", marks: 2 },
            {
              label: "d",
              prompt:
                "The temperature at midnight was $-6^\\circ$C. By 6 a.m. it had risen $14^\\circ$C, then by noon it had fallen $9^\\circ$C. What was the temperature at noon?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a)", answer: 15 },
              { label: "(b)", answer: 4 },
              { label: "(c)", answer: -23 },
              { label: "(d) Temperature at noon ($^\\circ$C)", answer: -1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Subtracting a negative",
                statement: "$a - (-b) = a + b$",
              },
              {
                kind: "skill",
                name: "Order of operations",
                statement:
                  "Evaluate left to right for same-precedence operations.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Rewrite $-(-8)$ as $+8$.",
                working: "-15 + 22 + 8",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Combine positives then add the negative.",
                working: "22 + 8 = 30;\\ 30 - 15 = 15",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Rewrite $-(-9)$ as $+9$.",
                working: "7 + 9 - 12",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate left to right.",
                working: "16 - 12 = 4",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Rewrite both subtractions as additions of opposites.",
                working: "-20 + 5 - 8",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Combine.",
                working: "-15 - 8 = -23",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Rising $14^\\circ$C means $+14$; falling $9^\\circ$C means $-9$.",
                working: "-6 + 14 - 9",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Evaluate.",
                working: "8 - 9 = -1^\\circ\\text{C}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) $15$ (b) $4$ (c) $-23$ (d) $-1^\\circ\\text{C}$",
            commonErrors: [
              "In (d), computing $-6 + 14 = 8$ then reporting $8$ instead of continuing to noon.",
            ],
            examinerNote:
              "Accept any equivalent order of operations as long as the sign handling is correct.",
          },
        },
      ],
    },
    {
      id: "m7-u5-add-sub-fractions",
      title:
        "Adding and subtracting rational numbers with fractions and decimals",
      skill:
        "Combine fractions and decimals on a number line using common denominators and place value.",
      lesson: {
        sections: [
          {
            heading: "Fractions on the number line",
            body: "Fractions and decimals are just rational numbers placed on the same number line. $\\frac{1}{2} = 0.5$, $-\\frac{3}{4} = -0.75$, $2 = 2.0$. To add or subtract, rewrite everything with a common denominator (for fractions) or convert to decimals.",
          },
          {
            heading: "Finding common denominators",
            body: "To add $\\frac{1}{3} + \\frac{1}{4}$, the least common denominator is $12$: $\\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$. For mixed signs, apply the same integer rules: $-\\frac{1}{2} + \\frac{1}{4} = -\\frac{2}{4} + \\frac{1}{4} = -\\frac{1}{4}$. Subtracting a fraction means adding its opposite: $\\frac{2}{3} - \\frac{5}{6} = \\frac{2}{3} + \\left(-\\frac{5}{6}\\right) = \\frac{4}{6} - \\frac{5}{6} = -\\frac{1}{6}$.",
          },
          {
            heading: "Decimals are easier",
            body: "Decimally, $-1.25 + 0.5 = -0.75$ — just align decimal points and apply integer rules to the digits. Decimals avoid common-denominator work, which is why real-world measurement problems often use them.",
          },
        ],
        keyFormulas: [
          {
            name: "Common denominator",
            statement:
              "Rewrite fractions with the same denominator before adding or subtracting.",
          },
          {
            name: "Mixed signs",
            statement:
              "Apply integer sign rules after finding the common denominator.",
          },
          {
            name: "Decimal shortcut",
            statement:
              "Align decimal points; add or subtract as integers, then place the point.",
          },
        ],
        workedExample: {
          problem: "Evaluate $-1\\frac{1}{4} + \\frac{2}{3}$.",
          solution:
            "Convert to improper fractions with denominator $12$: $-\\frac{5}{4} = -\\frac{15}{12}$ and $\\frac{2}{3} = \\frac{8}{12}$. Then $-\\frac{15}{12} + \\frac{8}{12} = -\\frac{7}{12}$.",
        },
      },
      questions: [
        {
          id: "m7-u5-add-sub-fractions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the sum $\\frac{1}{6} + \\frac{1}{3}$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{2}{9}$" },
              { id: "b", text: "$\\frac{1}{2}$" },
              { id: "c", text: "$\\frac{2}{6}$" },
              { id: "d", text: "$\\frac{1}{9}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Common denominators",
                statement: "Rewrite with a common denominator before adding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Common denominator is $6$: $\\frac{1}{6} + \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}$.",
                working:
                  "\\frac{1}{6} + \\frac{1}{3} = \\frac{1}{6} + \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $\\frac{1}{2}$",
            commonErrors: [
              "Adding numerators and denominators: $\\frac{2}{9}$.",
              "Not converting $\\frac{1}{3}$ correctly to sixths.",
            ],
          },
        },
        {
          id: "m7-u5-add-sub-fractions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Evaluate $\\frac{5}{6} - \\frac{1}{4}$. Give your answer as a simplified fraction.",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 0.5833, tolerance: 0.001 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Common denominators",
                statement: "Least common denominator of $6$ and $4$ is $12$.",
              },
            ],
            steps: [
              {
                reasoning: "Rewrite with denominator $12$.",
                working:
                  "\\frac{5}{6} = \\frac{10}{12};\\ \\frac{1}{4} = \\frac{3}{12}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract.",
                working: "\\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\frac{7}{12}$",
            commonErrors: [
              "Subtracting denominators: $\\frac{4}{2} = 2$.",
              "Using denominator $24$ unnecessarily and making arithmetic errors.",
            ],
            examinerNote:
              "Accept the decimal $0.58\\overline{3}$ or the fraction $\\frac{7}{12}$; the fraction is preferred.",
          },
        },
        {
          id: "m7-u5-add-sub-fractions-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A hiker's elevation changes are recorded relative to a starting point: $-2.5$ miles (downhill), $+1.75$ miles (uphill), and $-0.5$ miles (downhill). What is the net elevation change? Give your answer in miles as a signed decimal.",
          response: {
            type: "numeric",
            parts: [{ label: "Net change (miles)", answer: -1.25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Decimal addition",
                statement: "Align decimal points and apply integer sign rules.",
              },
            ],
            steps: [
              {
                reasoning: "Write all values with sign and add them.",
                working: "-2.5 + 1.75 - 0.5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combine the positive and negative values.",
                working: "1.75 - 2.5 = -0.75;\\ -0.75 - 0.5 = -1.25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the result with units and sign.",
                working: "-1.25\\text{ miles}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-1.25$ miles (a net descent of $1.25$ miles)",
            commonErrors: [
              "Adding magnitudes: $4.75$ miles.",
              "Losing the negative sign on the final answer.",
            ],
          },
        },
        {
          id: "m7-u5-add-sub-fractions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Evaluate each expression and give your answer as a simplified fraction or mixed number.",
          parts: [
            { label: "a", prompt: "$-\\frac{3}{4} + \\frac{1}{2}$", marks: 2 },
            { label: "b", prompt: "$2\\frac{1}{3} - \\frac{5}{6}$", marks: 2 },
            {
              label: "c",
              prompt: "$-1\\frac{1}{8} - (-\\frac{3}{4})$",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "A recipe calls for $1\\frac{1}{2}$ cups of flour, but a baker only has $\\frac{3}{4}$ cup. How many more cups of flour are needed?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a)", answer: -0.25 },
              { label: "(b)", answer: 1.5 },
              { label: "(c)", answer: -0.375 },
              { label: "(d) Cups needed", answer: 0.75 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Common denominators",
                statement:
                  "Rewrite mixed numbers and fractions with common denominators.",
              },
              {
                kind: "property",
                name: "Subtracting a negative",
                statement: "$a - (-b) = a + b$",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Convert to eighths or quarters: $-\\frac{3}{4} + \\frac{2}{4} = -\\frac{1}{4}$.",
                working:
                  "-\\frac{3}{4} + \\frac{1}{2} = -\\frac{3}{4} + \\frac{2}{4} = -\\frac{1}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Simplify and state.",
                working: "-\\frac{1}{4}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Convert to sixths: $2\\frac{1}{3} = \\frac{14}{6}$ and $\\frac{5}{6}$.",
                working: "\\frac{14}{6} - \\frac{5}{6} = \\frac{9}{6}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Simplify to mixed number.",
                working: "\\frac{9}{6} = 1\\frac{1}{2}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Rewrite subtraction as addition of the opposite: $-1\\frac{1}{8} + \\frac{3}{4} = -\\frac{9}{8} + \\frac{6}{8} = -\\frac{3}{8}$.",
                working: "-\\frac{9}{8} + \\frac{6}{8} = -\\frac{3}{8}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State the simplified result.",
                working: "-\\frac{3}{8}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Find the difference between what is needed and what is available.",
                working:
                  "1\\frac{1}{2} - \\frac{3}{4} = \\frac{3}{2} - \\frac{3}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Compute with common denominator $4$.",
                working: "\\frac{6}{4} - \\frac{3}{4} = \\frac{3}{4}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $-\\frac{1}{4}$ (b) $1\\frac{1}{2}$ (c) $-\\frac{3}{8}$ (d) $\\frac{3}{4}$ cup",
            commonErrors: [
              "In (c), computing $-1\\frac{1}{8} - \\frac{3}{4}$ instead of adding $\\frac{3}{4}$.",
              "In (d), subtracting in the wrong order.",
            ],
          },
        },
      ],
    },
    {
      id: "m7-u5-add-sub-contexts",
      title: "Multi-step rational number problems",
      skill:
        "Solve real-world problems requiring multiple additions and subtractions of rational numbers.",
      lesson: {
        sections: [
          {
            heading: "Reading the situation",
            body: "Real-world problems combine gains and losses: temperature changes, bank balances, elevation, stock prices. Assign a sign to each change first — increases are positive, decreases are negative — then add them all. $-12 + (-8) + 25 = 5$ means a net gain of $5$.",
          },
          {
            heading: "Multi-step reasoning",
            body: "Some problems require intermediate values. Track each quantity separately or combine into one expression. For temperature: $-8 + 5 = -3$, then $-3 - 12 = -15$ is the same as $-8 + 5 - 12 = -15$. For money: a balance of $\\$120$ with a $\\$45$ withdrawal ($-45$) and a $\\$80$ deposit ($+80$) is $120 - 45 + 80 = 155$.",
          },
          {
            heading: "Interpreting the answer",
            body: "The sign of the final answer tells the direction: positive = net increase/gain, negative = net decrease/loss, zero = no net change. State units and interpret: $-1.25$ miles means a descent of $1.25$ miles, not a negative distance.",
          },
        ],
        keyFormulas: [
          {
            name: "Sign assignment",
            statement: "Increase = $+$; decrease = $-$",
          },
          { name: "Net change", statement: "Sum all signed changes" },
          {
            name: "Interpretation",
            statement: "Sign of result gives direction of change",
          },
        ],
        workedExample: {
          problem:
            "A bank account starts at $\\$200$. On Monday $\\$75$ is deposited, Tuesday $\\$120$ is withdrawn, and Wednesday $\\$30$ is deposited. What is the final balance?",
          solution:
            "Deposits are positive, withdrawals negative: $200 + 75 - 120 + 30 = 185$. The final balance is $\\$185$.",
        },
      },
      questions: [
        {
          id: "m7-u5-add-sub-contexts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A stock price changes by $-\\$2.50$ on Monday and $+\\$4.00$ on Tuesday. What is the net change after two days?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$-\\$6.50$" },
              { id: "b", text: "$+\\$1.50$" },
              { id: "c", text: "$+\\$6.50$" },
              { id: "d", text: "$-\\$1.50$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Net change",
                statement: "Add all signed changes.",
              },
            ],
            steps: [
              {
                reasoning: "Add the two changes: $-2.50 + 4.00 = 1.50$.",
                working: "-2.50 + 4.00 = 1.50",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $+\\$1.50$",
            commonErrors: [
              "Adding magnitudes: $6.50$.",
              "Keeping the negative sign: $-1.50$.",
            ],
          },
        },
        {
          id: "m7-u5-add-sub-contexts-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The temperature at 8 a.m. is $-3^\\circ$C. It rises $7^\\circ$C by noon, then falls $11^\\circ$C by 6 p.m. What is the temperature at 6 p.m.?",
          response: {
            type: "numeric",
            parts: [{ label: "Temperature ($^\\circ$C)", answer: -7 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multi-step signed numbers",
                statement: "Apply each change in sequence.",
              },
            ],
            steps: [
              {
                reasoning: "Rising $7^\\circ$C means $+7$: $-3 + 7 = 4$.",
                working: "-3 + 7 = 4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Falling $11^\\circ$C means $-11$: $4 - 11 = -7$.",
                working: "4 - 11 = -7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-7^\\circ\\text{C}$",
            commonErrors: [
              "Computing $-3 + 7 - 11 = -7$ correctly but reporting $7^\\circ$C.",
              "Treating the fall as $+11$.",
            ],
          },
        },
        {
          id: "m7-u5-add-sub-contexts-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A checking account has a balance of $-\\$25.50$ (overdrawn). The account holder deposits $\\$100$, then a check for $\\$60$ clears, then a fee of $\\$3.25$ is charged. What is the final balance?",
          response: {
            type: "numeric",
            parts: [{ label: "Final balance ($)", answer: 11.25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Real-world signed numbers",
                statement: "Deposits positive, withdrawals and fees negative.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Deposit $+100$ and check $-60$: $-25.50 + 100 - 60 = 14.50$.",
                working: "-25.50 + 100 - 60 = 14.50",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fee of $3.25$ is a withdrawal: $14.50 - 3.25 = 11.25$.",
                working: "14.50 - 3.25 = 11.25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the balance with the dollar sign.",
                working: "\\$11.25",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\$11.25$ (a positive balance)",
            commonErrors: [
              "Treating the fee as a deposit.",
              "Forgetting the account started negative.",
            ],
          },
        },
        {
          id: "m7-u5-add-sub-contexts-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "A football team gains $15$ yards on first down, loses $8$ yards on second down, and gains $4$ yards on third down. What is the net yardage for the three plays?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A diver is at $-12$ meters. She ascends $5$ meters, descends $9$ meters, then ascends $3$ meters. What is her final depth?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A company's profit was $-\\$4{,}000$ in January. It earned $\\$7{,}500$ in February and lost $\\$2{,}000$ in March. What was the total profit over the three months?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "The high temperature on Monday was $8^\\circ$C and the low was $-3^\\circ$C. On Tuesday the high was $5^\\circ$C less than Monday's high and the low was $2^\\circ$C higher than Monday's low. What was Tuesday's temperature range (high minus low)?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Net yards", answer: 11 },
              { label: "(b) Final depth (m)", answer: -13 },
              { label: "(c) Total profit ($)", answer: 1500 },
              { label: "(d) Tuesday's range ($^\\circ$C)", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multi-step signed numbers",
                statement: "Assign signs to gains/losses and sum.",
              },
              {
                kind: "skill",
                name: "Range",
                statement: "Range = maximum minus minimum.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Gains positive, losses negative: $15 - 8 + 4$.",
                working: "15 - 8 + 4 = 11",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "State the net yardage.",
                working: "11\\text{ yards}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Ascending adds, descending subtracts: $-12 + 5 - 9 + 3$.",
                working: "-12 + 5 - 9 + 3 = -13",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "State the final depth.",
                working: "-13\\text{ meters}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Sum the three monthly profits: $-4000 + 7500 - 2000$.",
                working: "-4000 + 7500 - 2000 = 1500",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State the total.",
                working: "\\$1{,}500",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Tuesday's high is $8 - 5 = 3^\\circ$C and Tuesday's low is $-3 + 2 = -1^\\circ$C.",
                working: "3\\text{ and }-1",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Range is high minus low: $3 - (-1) = 4$.",
                working: "3 - (-1) = 4",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $11$ yards (b) $-13$ meters (c) $\\$1{,}500$ (d) $4^\\circ\\text{C}$",
            commonErrors: [
              "In (d), subtracting the lows instead of computing the range, or forgetting that subtracting a negative adds.",
            ],
            examinerNote:
              "In (d) accept $4^\\circ$C; follow through from incorrect intermediate values.",
          },
        },
      ],
    },
  ],
};
