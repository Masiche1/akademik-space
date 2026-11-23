import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "m7-u9-lesson-9-3",
  code: "9-3",
  title: "Percent Problem Solving Strategies",
  goal: "I CAN identify the right approach for different percent problems and solve them efficiently.",
  standards: ["7.RP.A.1", "7.RP.A.2", "7.RP.A.3"],
  vocabulary: [
    {
      term: "Base",
      definition:
        "The whole amount that the percent refers to; the denominator in percent problems.",
    },
    { term: "Part", definition: "The result of taking a percent of the base." },
    {
      term: "Rate",
      definition: "The percent expressed as a decimal (e.g., $25\\% = 0.25$).",
    },
    {
      term: "Percent equation",
      definition: "$\\text{part} = \\text{rate} \\times \\text{base}$.",
    },
    {
      term: "Unit rate",
      definition: "The amount per one unit; useful for percent problems.",
    },
    {
      term: "Proportion",
      definition: "An equation stating two ratios are equal.",
    },
  ],
  concepts: [
    {
      id: "m7-u9-percent-equation",
      title: "The percent equation",
      skill: "Use the percent equation to solve for part, base, or rate.",
      lesson: {
        sections: [
          {
            heading: "Percent equation",
            body: "The percent equation: $\\text{part} = \\text{rate} \\times \\text{base}$. For 'what is $20\\%$ of $80$?': part = $0.20 \\times 80 = 16$. For 'what percent of $50$ is $15$?': $15 = p \\times 50$ → $p = 0.30 = 30\\%$. For '$18$ is $30\\%$ of what number?': $18 = 0.30 \\times b$ → $b = 60$.",
          },
          {
            heading: "Identifying unknowns",
            body: "Determine which variable is unknown: part (result), base (whole), or rate (percent). If part is unknown, multiply rate × base. If base is unknown, divide part by rate. If rate is unknown, divide part by base.",
          },
          {
            heading: "Real-world applications",
            body: "Discounts: sale price = base × (1 - rate). Tips: tip = base × rate. Tax: tax = base × rate. Interest: interest = principal × rate × time. Always identify base correctly — usually the original price or principal.",
          },
        ],
        keyFormulas: [
          {
            name: "Percent equation",
            statement: "$\\text{part} = \\text{rate} \\times \\text{base}$",
          },
          {
            name: "Solve for base",
            statement: "$\\text{base} = \\frac{\\text{part}}{\\text{rate}}$",
          },
          {
            name: "Solve for rate",
            statement: "$\\text{rate} = \\frac{\\text{part}}{\\text{base}}$",
          },
        ],
        workedExample: {
          problem: "What is $15\\%$ of $60$?",
          solution: "Part = rate × base = $0.15 \\times 60 = 9$.",
        },
      },
      questions: [
        {
          id: "m7-u9-percent-equation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the percent equation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$\\text{part} = \\text{rate} \\times \\text{base}$",
              },
              { id: "b", text: "$\\text{part} = \\text{rate} + \\text{base}$" },
              { id: "c", text: "$\\text{part} = \\text{base} - \\text{rate}$" },
              {
                id: "d",
                text: "$\\text{part} = \\text{rate} \\div \\text{base}$",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percent equation",
                statement:
                  "$\\text{part} = \\text{rate} \\times \\text{base}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Percent equation uses multiplication: part = rate × base.",
                working: "part = rate \\times base",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(a)** $\\text{part} = \\text{rate} \\times \\text{base}$",
            commonErrors: [
              "Using addition or subtraction instead of multiplication.",
            ],
          },
        },
        {
          id: "m7-u9-percent-equation-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is $35\\%$ of $80$?",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 28 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percent equation",
                statement:
                  "$\\text{part} = \\text{rate} \\times \\text{base}$.",
              },
            ],
            steps: [
              {
                reasoning: "Part = $0.35 \\times 80 = 28$.",
                working: "28",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "28",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$28$",
            commonErrors: ["Using $35$ instead of $0.35$."],
          },
        },
        {
          id: "m7-u9-percent-equation-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is $45$ as a percent of $60$?",
          response: {
            type: "numeric",
            parts: [{ label: "Percent", answer: 75 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percent equation",
                statement:
                  "$\\text{rate} = \\frac{\\text{part}}{\\text{base}}$.",
              },
            ],
            steps: [
              {
                reasoning: "Rate = $\\frac{45}{60} = 0.75$.",
                working: "0.75",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to percent: $0.75 = 75\\%$.",
                working: "75\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "75\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$75\\%$",
            commonErrors: [
              "Computing $\\frac{60}{45}$ instead of $\\frac{45}{60}$.",
            ],
          },
        },
        {
          id: "m7-u9-percent-equation-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            { label: "a", prompt: "What is $18\\%$ of $250$?", marks: 2 },
            {
              label: "b",
              prompt: "What is $72$ as a percent of $90$?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "If $54$ is $45\\%$ of a number, what is the number?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "A $30\\%$ tip on a $\\$65$ bill is how much?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a)", answer: 45 },
              { label: "(b) Percent", answer: 80 },
              { label: "(c) Number", answer: 120 },
              { label: "(d) Tip ($)", answer: 19.5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percent equation",
                statement:
                  "$\\text{part} = \\text{rate} \\times \\text{base}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Part = $0.18 \\times 250 = 45$.",
                working: "45",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Rate = $\\frac{72}{90} = 0.80 = 80\\%$.",
                working: "80\\%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$0.45b = 54$ → $b = 54 \\div 0.45 = 120$.",
                working: "120",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Tip = $0.30 \\times 65 = \\$19.50$.",
                working: "\\$19.50",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $45$ (b) $80\\%$ (c) $120$ (d) $\\$19.50$",
            commonErrors: ["In (c), multiplying instead of dividing."],
          },
        },
      ],
    },
    {
      id: "m7-u9-percent-proportion-method",
      title: "Percent proportion method",
      skill:
        "Use proportions to solve percent problems with different approaches.",
      lesson: {
        sections: [
          {
            heading: "Proportion setup",
            body: "Set up proportion: $\\frac{\\text{part}}{\\text{base}} = \\frac{\\text{percent}}{100}$. For 'what is $25\\%$ of $80$?': $\\frac{x}{80} = \\frac{25}{100}$ → cross-multiply: $100x = 2000$ → $x = 20$. For 'what percent of $50$ is $15$?': $\\frac{15}{50} = \\frac{p}{100}$ → $p = 30$.",
          },
          {
            heading: "Cross-multiplication",
            body: "To solve proportions, cross-multiply: $\\frac{a}{b} = \\frac{c}{d}$ → $ad = bc$. For $\\frac{x}{80} = \\frac{25}{100}$: $100x = 80 \\times 25 = 2000$ → $x = 20$. This method works for all percent proportion problems.",
          },
          {
            heading: "When to use proportions",
            body: "Proportions are useful when you prefer fraction equations over decimals, or when solving for unknowns in percent problems. For simple 'what is p% of n', decimal method ($0.25 \\times 80$) is faster. For complex problems, proportions provide clear structure.",
          },
        ],
        keyFormulas: [
          {
            name: "Proportion",
            statement:
              "$\\frac{\\text{part}}{\\text{base}} = \\frac{\\text{percent}}{100}$",
          },
          {
            name: "Cross-multiply",
            statement: "$\\frac{a}{b} = \\frac{c}{d}$ → $ad = bc$",
          },
          { name: "Solve", statement: "Isolate unknown variable" },
        ],
        workedExample: {
          problem: "What is $40\\%$ of $75$ using proportion method?",
          solution:
            "$\\frac{x}{75} = \\frac{40}{100}$ → $100x = 3000$ → $x = 30$.",
        },
      },
      questions: [
        {
          id: "m7-u9-percent-proportion-method-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the proportion for percent problems?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "$\\frac{\\text{part}}{\\text{base}} = \\frac{\\text{percent}}{100}$",
              },
              {
                id: "b",
                text: "$\\frac{\\text{base}}{\\text{part}} = \\frac{\\text{percent}}{100}$",
              },
              {
                id: "c",
                text: "$\\frac{\\text{part}}{100} = \\frac{\\text{percent}}{\\text{base}}$",
              },
              {
                id: "d",
                text: "$\\frac{\\text{percent}}{100} = \\frac{\\text{base}}{\\text{part}}$",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Proportion",
                statement:
                  "$\\frac{\\text{part}}{\\text{base}} = \\frac{\\text{percent}}{100}$.",
              },
            ],
            steps: [
              {
                reasoning: "Proportion sets part/base equal to percent/100.",
                working: "part/base = percent/100",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "**(a)** $\\frac{\\text{part}}{\\text{base}} = \\frac{\\text{percent}}{100}$",
            commonErrors: ["Reversing numerator and denominator."],
          },
        },
        {
          id: "m7-u9-percent-proportion-method-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Solve using proportion: What is $30\\%$ of $60$?",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 18 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Proportion",
                statement: "$\\frac{x}{60} = \\frac{30}{100}$.",
              },
            ],
            steps: [
              {
                reasoning: "$100x = 60 \\times 30 = 1800$ → $x = 18$.",
                working: "18",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "18",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$18$",
            commonErrors: ["Cross-multiplying incorrectly."],
          },
        },
        {
          id: "m7-u9-percent-proportion-method-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Solve using proportion: What percent of $80$ is $20$?",
          response: {
            type: "numeric",
            parts: [{ label: "Percent", answer: 25 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Proportion",
                statement: "$\\frac{20}{80} = \\frac{p}{100}$.",
              },
            ],
            steps: [
              {
                reasoning: "$80p = 20 \\times 100 = 2000$ → $p = 25$.",
                working: "25",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "25\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Verify: $25\\%$ of $80$ = $20$ ✓.",
                working: "20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$25\\%$",
            commonErrors: ["Setting up proportion incorrectly."],
          },
        },
        {
          id: "m7-u9-percent-proportion-method-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem using proportion method.",
          parts: [
            { label: "a", prompt: "What is $55\\%$ of $120$?", marks: 2 },
            { label: "b", prompt: "What percent of $64$ is $16$?", marks: 2 },
            {
              label: "c",
              prompt: "If $42$ is $35\\%$ of a number, what is the number?",
              marks: 2,
            },
            {
              label: "d",
              prompt: "A $15\\%$ tip on a $\\$45$ bill is how much?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a)", answer: 66 },
              { label: "(b) Percent", answer: 25 },
              { label: "(c) Number", answer: 120 },
              { label: "(d) Tip ($)", answer: 6.75 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Proportion",
                statement:
                  "$\\frac{\\text{part}}{\\text{base}} = \\frac{\\text{percent}}{100}$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$\\frac{x}{120} = \\frac{55}{100}$ → $100x = 6600$ → $x = 66$.",
                working: "66",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$\\frac{16}{64} = \\frac{p}{100}$ → $64p = 1600$ → $p = 25$.",
                working: "25\\%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "$\\frac{42}{b} = \\frac{35}{100}$ → $35b = 4200$ → $b = 120$.",
                working: "120",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "$\\frac{x}{45} = \\frac{15}{100}$ → $100x = 675$ → $x = 6.75$.",
                working: "\\$6.75",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $66$ (b) $25\\%$ (c) $120$ (d) $\\$6.75$",
            commonErrors: [
              "In (c), setting up proportion with wrong placement.",
            ],
          },
        },
      ],
    },
    {
      id: "m7-u9-percent-error-analysis",
      title: "Percent error analysis",
      skill: "Identify and correct common errors in percent problems.",
      lesson: {
        sections: [
          {
            heading: "Common errors",
            body: "**Using percent as decimal incorrectly**: $25\\%$ = $0.25$, not $25$ or $0.025$. **Wrong base**: percent change should use original value as denominator, not new value. **Adding instead of multiplying**: successive percent changes multiply factors, not add percents. **Confusing percent with percentage points**: $50\\%$ to $60\\%$ is $10$ percentage points but $20\\%$ increase.",
          },
          {
            heading: "Checking answers",
            body: "Always verify percent answers make sense: discounts should reduce price, markups should increase it, percent changes should match direction. For 'what percent is X of Y', answer should be $X/Y \\times 100$. For 'what is p% of n', answer should be approximately $p \\times n / 100$.",
          },
          {
            heading: "Real-world sanity checks",
            body: "A $20\\%$ discount on $\\$100$ should give $\\$80$, not $\\$20$ or $\\$120$. A $15\\%$ tip on $\\$50$ should be $\\$7.50$, not $\\$50.15$ or $\\$57.50$. If answer seems unreasonable, recheck setup.",
          },
        ],
        keyFormulas: [
          { name: "Percent as decimal", statement: "$25\\% = 0.25$" },
          { name: "Percent change base", statement: "Use original value" },
          { name: "Successive changes", statement: "Multiply factors" },
          { name: "Sanity check", statement: "Does answer make sense?" },
        ],
        workedExample: {
          problem:
            "A student calculates $20\\%$ of $50$ as $10$. Is this correct?",
          solution: "Yes: $0.20 \\times 50 = 10$. Correct.",
        },
      },
      questions: [
        {
          id: "m7-u9-percent-error-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the most common error in percent problems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using percent as decimal incorrectly" },
              { id: "b", text: "Not using a calculator" },
              { id: "c", text: "Writing percent sign" },
              { id: "d", text: "Rounding too early" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Error analysis",
                statement: "Common errors include decimal conversion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Most common error is using $25$ instead of $0.25$ or vice versa.",
                working: "decimal conversion",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Using percent as decimal incorrectly",
            commonErrors: ["Thinking other errors are more common."],
          },
        },
        {
          id: "m7-u9-percent-error-analysis-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student says $30\\%$ of $40$ is $12$. Is this correct? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percent of",
                statement: "$0.30 \\times 40 = 12$.",
              },
            ],
            steps: [
              {
                reasoning: "$30\\%$ of $40$ = $0.30 \\times 40 = 12$.",
                working: "12",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Yes, correct.",
                working: "correct",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Yes, $30\\%$ of $40$ = $12$.",
            commonErrors: ["Second-guessing correct answers."],
          },
        },
        {
          id: "m7-u9-percent-error-analysis-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A price increases from $\\$80$ to $\\$96$. A student says the increase is $20\\%$. Is this correct? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percent change",
                statement:
                  "$\\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Increase = $96 - 80 = \\$16$; percent = $\\frac{16}{80} = 20\\%$.",
                working: "20\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Yes, correct — used original value as base.",
                working: "correct",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "20\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Yes, $20\\%$ increase is correct.",
            commonErrors: [
              "Thinking percent change should use new value as base.",
            ],
          },
        },
        {
          id: "m7-u9-percent-error-analysis-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Identify and correct each error.",
          parts: [
            {
              label: "a",
              prompt:
                "Student calculates $25\\%$ of $80$ as $20$. Is this correct?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Student says $50\\%$ off then $50\\%$ off returns to original. Is this correct?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Student calculates $10\\%$ increase then $10\\%$ decrease as no change. Is this correct?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Student says $15\\%$ tip on $\\$100$ is $\\$15$. Is this correct?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Error analysis",
                statement: "Identify common percent errors.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$0.25 \\times 80 = 20$; correct.",
                working: "correct",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "$0.50 \\times 0.50 = 0.25$; 75% total discount, not original. Incorrect.",
                working: "incorrect",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Correct answer: $25\\%$ of original remains.",
                working: "25\\%",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "$1.10 \\times 0.90 = 0.99$; 1% decrease, not no change. Incorrect.",
                working: "incorrect",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct answer: 1% net decrease.",
                working: "-1\\%",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$0.15 \\times 100 = \\$15$; correct.",
                working: "correct",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Correct (b) Incorrect — 75% total discount (c) Incorrect — 1% net decrease (d) Correct",
            commonErrors: [
              "Not recognizing successive percent changes multiply.",
            ],
          },
        },
      ],
    },
  ],
};
