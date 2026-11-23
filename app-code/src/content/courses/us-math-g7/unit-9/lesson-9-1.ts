import type { Lesson } from "../../../types.ts";

export const lesson91: Lesson = {
  id: "m7-u9-lesson-9-1",
  code: "9-1",
  title: "Percent Problems: Discounts, Markups, and Tax",
  goal: "I CAN solve percent problems involving discounts, markups, sales tax, and tips.",
  standards: ["7.RP.A.1", "7.RP.A.2", "7.RP.A.3"],
  vocabulary: [
    {
      term: "Percent",
      definition: "A ratio out of 100; $25\\% = \\frac{25}{100} = 0.25$.",
    },
    {
      term: "Discount",
      definition: "A reduction in price, usually expressed as a percent off.",
    },
    {
      term: "Markup",
      definition:
        "An increase in price, usually expressed as a percent over cost.",
    },
    {
      term: "Sales tax",
      definition: "A percent added to the price of goods and services.",
    },
    { term: "Tip", definition: "A percent of the bill added as gratuity." },
    {
      term: "Percent change",
      definition:
        "The percent increase or decrease relative to the original amount.",
    },
  ],
  concepts: [
    {
      id: "m7-u9-discounts-markups",
      title: "Discounts and markups",
      skill: "Calculate sale prices and markups using percent calculations.",
      lesson: {
        sections: [
          {
            heading: "Discounts",
            body: "Discount = percent $\\times$ original price. Sale price = original - discount. For $20\\%$ off $\\$50$: discount = $0.20 \\times 50 = \\$10$; sale price = $50 - 10 = \\$40$. Alternatively: sale price = original $\\times (1 - \\text{discount rate}) = 50 \\times 0.80 = \\$40$.",
          },
          {
            heading: "Markups",
            body: "Markup = percent $\\times$ cost. Selling price = cost + markup. For $30\\%$ markup on $\\$40$ cost: markup = $0.30 \\times 40 = \\$12$; selling price = $40 + 12 = \\$52$. Alternatively: selling price = cost $\\times (1 + \\text{markup rate}) = 40 \\times 1.30 = \\$52$.",
          },
          {
            heading: "Successive changes",
            body: "For multiple percent changes, multiply the factors: $20\\%$ off then $10\\%$ off = $0.80 \\times 0.90 = 0.72$ (28% total discount). For $20\\%$ off then $10\\%$ tax: $0.80 \\times 1.10 = 0.88$ (12% net discount). Order doesn't matter for multiplication.",
          },
        ],
        keyFormulas: [
          {
            name: "Discount",
            statement: "Sale price = original $\\times (1 - \\text{rate})$",
          },
          {
            name: "Markup",
            statement: "Selling price = cost $\\times (1 + \\text{rate})$",
          },
          {
            name: "Successive",
            statement: "Multiply factors: $(1 \\pm r_1)(1 \\pm r_2)$",
          },
        ],
        workedExample: {
          problem:
            "A $\\$80$ jacket is on sale for $25\\%$ off. What is the sale price?",
          solution:
            "Sale price = $80 \\times (1 - 0.25) = 80 \\times 0.75 = \\$60$.",
        },
      },
      questions: [
        {
          id: "m7-u9-discounts-markups-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the sale price of a $\\$40$ item with $15\\%$ off?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\$34$" },
              { id: "b", text: "$\\$25$" },
              { id: "c", text: "$\\$30$" },
              { id: "d", text: "$\\$46$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Discount",
                statement:
                  "Sale price = original $\\times (1 - \\text{rate})$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sale = $40 \\times (1 - 0.15) = 40 \\times 0.85 = \\$34$.",
                working: "\\$34",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $\\$34$",
            commonErrors: [
              "Computing discount and adding instead of subtracting.",
            ],
          },
        },
        {
          id: "m7-u9-discounts-markups-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A store buys a product for $\\$25$ and marks it up $40\\%$. What is the selling price?",
          response: {
            type: "numeric",
            parts: [{ label: "Selling price ($)", answer: 35 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Markup",
                statement: "Selling price = cost $\\times (1 + \\text{rate})$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Selling price = $25 \\times (1 + 0.40) = 25 \\times 1.40 = \\$35$.",
                working: "\\$35",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$35",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\$35$",
            commonErrors: ["Using discount formula instead of markup."],
          },
        },
        {
          id: "m7-u9-discounts-markups-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $\\$60$ item is discounted $20\\%$, then another $10\\%$ is taken off the sale price. What is the final price?",
          response: {
            type: "numeric",
            parts: [{ label: "Final price ($)", answer: 43.2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Successive discounts",
                statement: "Multiply factors: $0.80 \\times 0.90 = 0.72$.",
              },
            ],
            steps: [
              {
                reasoning: "After first discount: $60 \\times 0.80 = \\$48$.",
                working: "48",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "After second discount: $48 \\times 0.90 = \\$43.20$.",
                working: "43.20",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Or directly: $60 \\times 0.72 = \\$43.20$.",
                working: "43.20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\$43.20$",
            commonErrors: [
              "Adding discounts: $20\\% + 10\\% = 30\\%$ off (incorrect).",
            ],
          },
        },
        {
          id: "m7-u9-discounts-markups-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "A $\\$75$ shirt is on sale for $30\\%$ off. What is the sale price?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A store buys shoes for $\\$45$ and marks them up $25\\%$. What is the selling price?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "An item costs $\\$80$, is discounted $15\\%$, then taxed $8\\%$. What is the final price?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "A $\\$50$ item is marked up $20\\%$ then discounted $20\\%$. What is the final price?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Sale price ($)", answer: 52.5 },
              { label: "(b) Selling price ($)", answer: 56.25 },
              { label: "(c) Final price ($)", answer: 73.44 },
              { label: "(d) Final price ($)", answer: 48 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Discount",
                statement: "Sale = original $\\times (1 - \\text{rate})$.",
              },
              {
                kind: "formula",
                name: "Markup",
                statement: "Selling = cost $\\times (1 + \\text{rate})$.",
              },
              {
                kind: "skill",
                name: "Successive changes",
                statement: "Multiply factors.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sale = $75 \\times 0.70 = \\$52.50$.",
                working: "52.50",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Selling = $45 \\times 1.25 = \\$56.25$.",
                working: "56.25",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "After discount: $80 \\times 0.85 = \\$68$; after tax: $68 \\times 1.08 = \\$73.44$.",
                working: "73.44",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "After markup: $50 \\times 1.20 = \\$60$; after discount: $60 \\times 0.80 = \\$48$.",
                working: "48",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $\\$52.50$ (b) $\\$56.25$ (c) $\\$73.44$ (d) $\\$48$",
            commonErrors: [
              "In (d), assuming $20\\%$ markup then $20\\%$ discount returns to original (it doesn't).",
            ],
          },
        },
      ],
    },
    {
      id: "m7-u9-tax-tip",
      title: "Sales tax and tips",
      skill: "Calculate final prices including sales tax and tips.",
      lesson: {
        sections: [
          {
            heading: "Sales tax",
            body: "Sales tax = tax rate $\\times$ price. Total = price + tax. For $7\\%$ tax on $\\$45$: tax = $0.07 \\times 45 = \\$3.15$; total = $45 + 3.15 = \\$48.15$. Alternatively: total = price $\\times (1 + \\text{tax rate}) = 45 \\times 1.07 = \\$48.15$.",
          },
          {
            heading: "Tips",
            body: "Tip = tip rate $\\times$ bill. Total = bill + tip. For $18\\%$ tip on $\\$80$: tip = $0.18 \\times 80 = \\$14.40$; total = $80 + 14.40 = \\$94.40$. For $15\\%$ tip: tip = $12$; total = $92$.",
          },
          {
            heading: "Combined tax and tip",
            body: "For problems with both tax and tip, apply them sequentially or add rates if both are percentages of the same base. For $7\\%$ tax and $15\\%$ tip on $\\$100$: tax = $7$, tip = $15$; total = $100 + 7 + 15 = \\$122$. Or combined rate = $22\\%$: $100 \\times 1.22 = \\$122$.",
          },
        ],
        keyFormulas: [
          {
            name: "Sales tax",
            statement: "Total = price $\\times (1 + \\text{tax rate})$",
          },
          {
            name: "Tip",
            statement: "Total = bill $\\times (1 + \\text{tip rate})$",
          },
          {
            name: "Combined",
            statement:
              "Total = price $\\times (1 + \\text{tax} + \\text{tip})$ if same base",
          },
        ],
        workedExample: {
          problem:
            "A meal costs $\\$60$. The tax is $8\\%$ and tip is $15\\%$. What is the total?",
          solution:
            "Tax = $60 \\times 0.08 = \\$4.80$; tip = $60 \\times 0.15 = \\$9$; total = $60 + 4.80 + 9 = \\$73.80$.",
        },
      },
      questions: [
        {
          id: "m7-u9-tax-tip-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the total cost of a $\\$50$ item with $6\\%$ sales tax?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\$53$" },
              { id: "b", text: "$\\$56$" },
              { id: "c", text: "$\\$50.30$" },
              { id: "d", text: "$\\$44$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Sales tax",
                statement: "Total = price $\\times (1 + \\text{rate})$.",
              },
            ],
            steps: [
              {
                reasoning: "Total = $50 \\times 1.06 = \\$53$.",
                working: "\\$53",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $\\$53$",
            commonErrors: ["Computing tax and forgetting to add to price."],
          },
        },
        {
          id: "m7-u9-tax-tip-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A restaurant bill is $\\$45$. What is the total if you leave a $20\\%$ tip?",
          response: {
            type: "numeric",
            parts: [{ label: "Total ($)", answer: 54 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Tip",
                statement: "Total = bill $\\times (1 + \\text{tip rate})$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tip = $45 \\times 0.20 = \\$9$; total = $45 + 9 = \\$54$.",
                working: "\\$54",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$54",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\$54$",
            commonErrors: ["Computing tip on wrong amount."],
          },
        },
        {
          id: "m7-u9-tax-tip-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $\\$80$ jacket has $7\\%$ sales tax and you want to leave a $18\\%$ tip. What is the total?",
          response: {
            type: "numeric",
            parts: [{ label: "Total ($)", answer: 100 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Combined tax and tip",
                statement: "Apply both percentages to base.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tax = $80 \\times 0.07 = \\$5.60$; tip = $80 \\times 0.18 = \\$14.40$.",
                working: "5.60 + 14.40",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Total = $80 + 5.60 + 14.40 = \\$100$.",
                working: "\\$100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Or combined rate = $25\\%$: $80 \\times 1.25 = \\$100$.",
                working: "\\$100",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\$100$",
            commonErrors: ["Applying tip to price+tax instead of base."],
          },
        },
        {
          id: "m7-u9-tax-tip-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt: "A $\\$120$ laptop has $8\\%$ tax. What is the total?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A $\\$65$ dinner bill has $6\\%$ tax and $20\\%$ tip. What is the total?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "You want to leave a $15\\%$ tip on a $\\$90$ bill. How much should you tip?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "An item costs $\\$45$ after a $10\\%$ discount. What was the original price?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Total ($)", answer: 129.6 },
              { label: "(b) Total ($)", answer: 81.9 },
              { label: "(c) Tip ($)", answer: 13.5 },
              { label: "(d) Original price ($)", answer: 50 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Sales tax",
                statement: "Total = price $\\times (1 + \\text{rate})$.",
              },
              {
                kind: "formula",
                name: "Tip",
                statement: "Tip = bill $\\times$ rate.",
              },
              {
                kind: "skill",
                name: "Reverse percent",
                statement: "Original = sale $\\div (1 - \\text{discount})$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Total = $120 \\times 1.08 = \\$129.60$.",
                working: "129.60",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Tax = $65 \\times 0.06 = \\$3.90$; tip = $65 \\times 0.20 = \\$13$; total = $65 + 3.90 + 13 = \\$81.90$.",
                working: "81.90",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Tip = $90 \\times 0.15 = \\$13.50$.",
                working: "13.50",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Original $\\times 0.90 = 45$ → original = $45 \\div 0.90 = \\$50$.",
                working: "50",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "State answer.",
                working: "\\$50",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $\\$129.60$ (b) $\\$81.90$ (c) $\\$13.50$ (d) $\\$50$",
            commonErrors: [
              "In (d), multiplying by $0.90$ instead of dividing.",
            ],
          },
        },
      ],
    },
    {
      id: "m7-u9-percent-change",
      title: "Percent change and percent of change",
      skill:
        "Calculate percent increase, decrease, and change relative to original values.",
      lesson: {
        sections: [
          {
            heading: "Percent change formula",
            body: "Percent change = $\\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$. For price increase from $\\$50$ to $\\$60$: $\\frac{10}{50} = 20\\%$ increase. For decrease from $80$ to $60$: $\\frac{-20}{80} = -25\\%$ (25% decrease).",
          },
          {
            heading: "Percent of a number",
            body: "$p\\%$ of $n$ = $\\frac{p}{100} \\times n$. $30\\%$ of $200$ = $0.30 \\times 200 = 60$. $15\\%$ of $80$ = $0.15 \\times 80 = 12$. To find what percent one number is of another: $\\frac{\\text{part}}{\\text{whole}} \\times 100\\%$.",
          },
          {
            heading: "Reverse percent problems",
            body: "'After $20\\%$ discount, price is $\\$80$. What was original?' Original $\\times 0.80 = 80$ → original = $80 \\div 0.80 = \\$100$. 'After $15\\%$ raise, salary is $\\$46,000$. What was original?' Original $\\times 1.15 = 46,000$ → original = $46,000 \\div 1.15 \\approx \\$40,000$.",
          },
        ],
        keyFormulas: [
          {
            name: "Percent change",
            statement:
              "$\\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$",
          },
          { name: "Percent of", statement: "$\\frac{p}{100} \\times n$" },
          {
            name: "Reverse percent",
            statement: "Original = final $\\div (1 \\pm \\text{rate})$",
          },
        ],
        workedExample: {
          problem:
            "A population grows from $50,000$ to $55,000$. What is the percent increase?",
          solution:
            "$\\frac{55,000 - 50,000}{50,000} = \\frac{5,000}{50,000} = 10\\%$ increase.",
        },
      },
      questions: [
        {
          id: "m7-u9-percent-change-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the percent increase from $40$ to $50$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$25\\%$" },
              { id: "b", text: "$20\\%$" },
              { id: "c", text: "$10\\%$" },
              { id: "d", text: "$\\frac{1}{5}$" },
            ],
            correctChoiceId: "a",
          },
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
                  "$\\frac{50 - 40}{40} = \\frac{10}{40} = 0.25 = 25\\%$.",
                working: "25\\%",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $25\\%$",
            commonErrors: ["Dividing by new value instead of old."],
          },
        },
        {
          id: "m7-u9-percent-change-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is $35\\%$ of $240$?",
          response: {
            type: "numeric",
            parts: [{ label: "Value", answer: 84 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percent of",
                statement: "$\\frac{p}{100} \\times n$.",
              },
            ],
            steps: [
              {
                reasoning: "$0.35 \\times 240 = 84$.",
                working: "84",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "84",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$84$",
            commonErrors: ["Using $35$ instead of $0.35$."],
          },
        },
        {
          id: "m7-u9-percent-change-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "After a $20\\%$ discount, a jacket costs $\\$64$. What was the original price?",
          response: {
            type: "numeric",
            parts: [{ label: "Original price ($)", answer: 80 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reverse percent",
                statement: "Original = sale $\\div (1 - \\text{discount})$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Original $\\times 0.80 = 64$ → original = $64 \\div 0.80$.",
                working: "64 \\div 0.80",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Original = $\\$80$.",
                working: "\\$80",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check: $80 \\times 0.80 = 64$ ✓.",
                working: "64",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\$80$",
            commonErrors: ["Multiplying by $0.80$ instead of dividing."],
          },
        },
        {
          id: "m7-u9-percent-change-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "A population increases from $80,000$ to $92,000$. What is the percent increase?",
              marks: 2,
            },
            { label: "b", prompt: "What is $18\\%$ of $350$?", marks: 2 },
            {
              label: "c",
              prompt:
                "After a $25\\%$ decrease, a value is $45$. What was the original?",
              marks: 2,
            },
            { label: "d", prompt: "What percent of $250$ is $75$?", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Percent increase", answer: 15 },
              { label: "(b) Value", answer: 63 },
              { label: "(c) Original", answer: 60 },
              { label: "(d) Percent", answer: 30 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percent change",
                statement:
                  "$\\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$.",
              },
              {
                kind: "formula",
                name: "Percent of",
                statement: "$\\frac{p}{100} \\times n$.",
              },
              {
                kind: "skill",
                name: "Reverse percent",
                statement: "Original = final $\\div (1 - \\text{rate})$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$\\frac{92,000 - 80,000}{80,000} = \\frac{12,000}{80,000} = 15\\%$.",
                working: "15\\%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$0.18 \\times 350 = 63$.",
                working: "63",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Original $\\times 0.75 = 45$ → original = $45 \\div 0.75 = 60$.",
                working: "60",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State answer.",
                working: "60",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "$\\frac{75}{250} = 0.30 = 30\\%$.",
                working: "30\\%",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $15\\%$ (b) $63$ (c) $60$ (d) $30\\%$",
            commonErrors: [
              "In (d), computing $\\frac{250}{75}$ instead of $\\frac{75}{250}$.",
            ],
          },
        },
      ],
    },
    {
      id: "m7-u9-percent-applications",
      title: "Percent applications in context",
      skill:
        "Apply percent calculations to real-world problems involving finance, statistics, and comparisons.",
      lesson: {
        sections: [
          {
            heading: "Financial applications",
            body: "Simple interest: $I = P \\times r \\times t$ where $P$ = principal, $r$ = rate, $t$ = time. For $\\$1000$ at $5\\%$ for $2$ years: $I = 1000 \\times 0.05 \\times 2 = \\$100$. Total = $\\$1100$. Percent helps compare financial options.",
          },
          {
            heading: "Statistical applications",
            body: "Percentages describe proportions: '$30\\%$ of students prefer math', '$15\\%$ increase in sales'. To find missing percentage: if $40\\%$ of $150$ = $60$, then $40\\%$ of $x$ = $90$ → $x = 225$. Percentages enable comparison across different-sized groups.",
          },
          {
            heading: "Comparison problems",
            body: "'Which is better: $20\\%$ off $\\$80$ or $\\$15$ off $\\$60$?' First: $80 \\times 0.80 = \\$64$; second: $60 - 15 = \\$45$. Compare final prices or discount amounts. Percent vs flat discounts require conversion to compare.",
          },
        ],
        keyFormulas: [
          { name: "Simple interest", statement: "$I = P \\times r \\times t$" },
          {
            name: "Percent comparison",
            statement: "Convert all to same form before comparing",
          },
          {
            name: "Proportion",
            statement:
              "$\\frac{\\text{part}}{\\text{whole}} = \\frac{\\text{percent}}{100}$",
          },
        ],
        workedExample: {
          problem:
            "Which is a better deal: $25\\%$ off $\\$80$ or $\\$20$ off $\\$70$?",
          solution:
            "First: $80 \\times 0.75 = \\$60$; second: $70 - 20 = \\$50$. Second is better ($\\$50 < \\$60$).",
        },
      },
      questions: [
        {
          id: "m7-u9-percent-applications-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $5\\%$ of $\\$200$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\$10$" },
              { id: "b", text: "$\\$20$" },
              { id: "c", text: "$\\$1$" },
              { id: "d", text: "$\\$100$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percent of",
                statement: "$0.05 \\times 200 = \\$10$.",
              },
            ],
            steps: [
              {
                reasoning: "$5\\%$ of $200$ = $0.05 \\times 200 = 10$.",
                working: "\\$10",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $\\$10$",
            commonErrors: ["Using $5$ instead of $0.05$."],
          },
        },
        {
          id: "m7-u9-percent-applications-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the simple interest on $\\$500$ at $4\\%$ for $3$ years?",
          response: {
            type: "numeric",
            parts: [{ label: "Interest ($)", answer: 60 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Simple interest",
                statement: "$I = P \\times r \\times t$.",
              },
            ],
            steps: [
              {
                reasoning: "$I = 500 \\times 0.04 \\times 3 = \\$60$.",
                working: "\\$60",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$60",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$\\$60$",
            commonErrors: ["Using $4$ instead of $0.04$."],
          },
        },
        {
          id: "m7-u9-percent-applications-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is the better deal: $30\\%$ off $\\$50$ or $\\$12$ off $\\$40$?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Percent comparison",
                statement: "Convert all to final prices.",
              },
            ],
            steps: [
              {
                reasoning:
                  "First: $50 \\times 0.70 = \\$35$; second: $40 - 12 = \\$28$.",
                working: "\\$35 \\text{ vs } \\$28",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Second deal is better (lower price).",
                working: "\\$28 < \\$35",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "\\$12 \\text{ off } \\$40",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$\\$12$ off $\\$40$ is better (saves $\\$12$ vs $\\$15$ but lower final price).",
            commonErrors: [
              "Comparing discount amounts instead of final prices.",
            ],
          },
        },
        {
          id: "m7-u9-percent-applications-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            {
              label: "a",
              prompt:
                "What is the simple interest on $\\$1200$ at $3\\%$ for $4$ years?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "If $30\\%$ of $250$ students play sports, how many students is that?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "A price increases from $\\$80$ to $\\$92$. What is the percent increase?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Which is better: $40\\%$ off $\\$60$ or $25\\%$ off $\\$80$?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Interest ($)", answer: 144 },
              { label: "(b) Students", answer: 75 },
              { label: "(c) Percent increase", answer: 15 },
              { label: "(d) Better deal", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Simple interest",
                statement: "$I = P \\times r \\times t$.",
              },
              {
                kind: "formula",
                name: "Percent of",
                statement: "$\\frac{p}{100} \\times n$.",
              },
              {
                kind: "formula",
                name: "Percent change",
                statement:
                  "$\\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$I = 1200 \\times 0.03 \\times 4 = \\$144$.",
                working: "\\$144",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$0.30 \\times 250 = 75$ students.",
                working: "75",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$\\frac{92 - 80}{80} = \\frac{12}{80} = 15\\%$.",
                working: "15\\%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "First: $60 \\times 0.60 = \\$36$; second: $80 \\times 0.75 = \\$60$; first is better ($\\$36 < \\$60$).",
                working: "first",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $\\$144$ (b) $75$ students (c) $15\\%$ (d) $40\\%$ off $\\$60$",
            commonErrors: [
              "In (d), comparing percent discounts instead of final prices.",
            ],
          },
        },
      ],
    },
    {
      id: "m7-u9-percent-proportions",
      title: "Percent proportions and solving for unknowns",
      skill: "Use proportions to solve percent problems with unknown values.",
      lesson: {
        sections: [
          {
            heading: "Proportion method",
            body: "Set up proportion: $\\frac{\\text{part}}{\\text{whole}} = \\frac{\\text{percent}}{100}$. For 'what is $25\\%$ of $80$?': $\\frac{x}{80} = \\frac{25}{100}$ → $x = 80 \\times 0.25 = 20$. For 'what percent of $50$ is $15$?': $\\frac{15}{50} = \\frac{p}{100}$ → $p = 30$.",
          },
          {
            heading: "Solving for unknowns",
            body: "For 'x is p% of n': $x = \\frac{p}{100} \\times n$. For 'n is p% of x': $n = \\frac{p}{100} \\times x$. For 'what percent is x of n': $p = \\frac{x}{n} \\times 100$. For 'x% of n = m': $x = \\frac{m}{n} \\times 100$.",
          },
          {
            heading: "Multi-step problems",
            body: "For 'after discount and tax, price is $\\$X$': work backwards or forwards. For 'original price with $20\\%$ discount then $10\\%$ tax equals $\\$88$': $original \\times 0.80 \\times 1.10 = 88$ → $original \\times 0.88 = 88$ → original = $\\$100$.",
          },
        ],
        keyFormulas: [
          {
            name: "Proportion",
            statement:
              "$\\frac{\\text{part}}{\\text{whole}} = \\frac{\\text{percent}}{100}$",
          },
          {
            name: "Percent of",
            statement: "$\\text{part} = \\frac{p}{100} \\times \\text{whole}$",
          },
          {
            name: "Percent change",
            statement:
              "$p = \\frac{\\text{change}}{\\text{original}} \\times 100$",
          },
        ],
        workedExample: {
          problem: "What percent of $60$ is $9$?",
          solution:
            "$\\frac{9}{60} = \\frac{p}{100}$ → $p = \\frac{9}{60} \\times 100 = 15$.",
        },
      },
      questions: [
        {
          id: "m7-u9-percent-proportions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is $45\\%$ of $80$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$36$" },
              { id: "b", text: "$45$" },
              { id: "c", text: "$64$" },
              { id: "d", text: "$0.45$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percent of",
                statement: "$0.45 \\times 80 = 36$.",
              },
            ],
            steps: [
              {
                reasoning: "$45\\%$ of $80$ = $0.45 \\times 80 = 36$.",
                working: "36",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** $36$",
            commonErrors: ["Using $45$ instead of $0.45$."],
          },
        },
        {
          id: "m7-u9-percent-proportions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What percent of $75$ is $15$?",
          response: {
            type: "numeric",
            parts: [{ label: "Percent", answer: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percent of",
                statement: "$\\frac{15}{75} = \\frac{p}{100}$.",
              },
            ],
            steps: [
              {
                reasoning: "$p = \\frac{15}{75} \\times 100 = 20$.",
                working: "20",
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
            finalAnswer: "$20\\%$",
            commonErrors: [
              "Computing $\\frac{75}{15}$ instead of $\\frac{15}{75}$.",
            ],
          },
        },
        {
          id: "m7-u9-percent-proportions-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "If $18$ is $30\\%$ of a number, what is the number?",
          response: {
            type: "numeric",
            parts: [{ label: "Number", answer: 60 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percent of",
                statement: "$0.30 \\times x = 18$.",
              },
            ],
            steps: [
              {
                reasoning: "$0.30x = 18$ → $x = 18 \\div 0.30 = 60$.",
                working: "60",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Check: $0.30 \\times 60 = 18$ ✓.",
                working: "18",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "60",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$60$",
            commonErrors: ["Multiplying instead of dividing."],
          },
        },
        {
          id: "m7-u9-percent-proportions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Solve each problem.",
          parts: [
            { label: "a", prompt: "What is $62\\%$ of $150$?", marks: 2 },
            { label: "b", prompt: "What percent of $200$ is $45$?", marks: 2 },
            {
              label: "c",
              prompt: "If $35$ is $70\\%$ of a number, what is the number?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "After a $15\\%$ discount and $10\\%$ tax, an item costs $\\$93.50$. What was the original price?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a)", answer: 93 },
              { label: "(b) Percent", answer: 22.5 },
              { label: "(c) Number", answer: 50 },
              { label: "(d) Original price ($)", answer: 100 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percent of",
                statement: "$\\frac{p}{100} \\times n$.",
              },
              {
                kind: "skill",
                name: "Reverse percent",
                statement: "Work backwards through successive changes.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "$0.62 \\times 150 = 93$.",
                working: "93",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$\\frac{45}{200} = 0.225 = 22.5\\%$.",
                working: "22.5\\%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "$0.70x = 35$ → $x = 35 \\div 0.70 = 50$.",
                working: "50",
                marks: 2,
                markCode: "M",
              },
              {
                part: "d",
                reasoning:
                  "Original $\\times 0.85 \\times 1.10 = 93.50$ → original $\\times 0.935 = 93.50$ → original = $93.50 \\div 0.935 = \\$100$.",
                working: "100",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) $93$ (b) $22.5\\%$ (c) $50$ (d) $\\$100$",
            commonErrors: ["In (d), not accounting for both changes."],
          },
        },
      ],
    },
    {
      id: "m7-u9-percent-comparison",
      title: "Comparing percent changes",
      skill:
        "Compare different percent changes and determine which is greater or more beneficial.",
      lesson: {
        sections: [
          {
            heading: "Comparing percent increases",
            body: "To compare two percent increases, calculate the actual increase for each. '$30\\%$ increase on $\\$80$' = $\\$24$ increase; '$25\\%$ increase on $\\$100$' = $\\$25$ increase. The second is larger in absolute terms but smaller in percent. Context determines which is 'better'.",
          },
          {
            heading: "Comparing discounts",
            body: "'$20\\%$ off $\\$100$' = $\\$20$ discount; '$15\\%$ off $\\$150$' = $\\$22.50$ discount. Percent and flat discounts must be converted to compare. Always compute final price for fair comparison.",
          },
          {
            heading: "Percent change chains",
            body: "For multiple percent changes, use multiplicative factors: $10\\%$ increase then $10\\%$ decrease = $1.10 \\times 0.90 = 0.99$ (net $1\\%$ decrease). The order doesn't matter for multiplication. '$20\\%$ off then $20\\%$ tax' = $0.80 \\times 1.20 = 0.96$ (net $4\\%$ discount).",
          },
        ],
        keyFormulas: [
          {
            name: "Percent increase",
            statement:
              "$\\text{increase} = \\text{rate} \\times \\text{original}$",
          },
          {
            name: "Percent decrease",
            statement:
              "$\\text{decrease} = \\text{rate} \\times \\text{original}$",
          },
          {
            name: "Successive changes",
            statement: "Multiply factors, not add percents",
          },
        ],
        workedExample: {
          problem:
            "Which is a better deal: $30\\%$ off $\\$80$ or $40\\%$ off $\\$60$?",
          solution:
            "First: $80 \\times 0.70 = \\$56$; second: $60 \\times 0.60 = \\$36$. Second is better ($\\$36 < \\$56$).",
        },
      },
      questions: [
        {
          id: "m7-u9-percent-comparison-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a larger increase: $20\\%$ of $50$ or $15\\%$ of $80$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$20\\%$ of $50$" },
              { id: "b", text: "$15\\%$ of $80$" },
              { id: "c", text: "Equal" },
              { id: "d", text: "Cannot determine" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Percent comparison",
                statement: "Compute actual values.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$20\\%$ of $50$ = $10$; $15\\%$ of $80$ = $12$; $12 > 10$.",
                working: "12 > 10",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** $15\\%$ of $80$",
            commonErrors: ["Comparing percents without computing values."],
          },
        },
        {
          id: "m7-u9-percent-comparison-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $20\\%$ increase followed by a $20\\%$ decrease results in what net change?",
          response: {
            type: "numeric",
            parts: [{ label: "Net change (%)", answer: -4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Successive changes",
                statement: "Multiply factors: $1.20 \\times 0.80 = 0.96$.",
              },
            ],
            steps: [
              {
                reasoning: "$1.20 \\times 0.80 = 0.96$; net change = $-4\\%$.",
                working: "-4\\%",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "-4\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$-4\\%$ (4% decrease)",
            commonErrors: [
              "Assuming $20\\%$ increase then $20\\%$ decrease returns to original.",
            ],
          },
        },
        {
          id: "m7-u9-percent-comparison-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is the better discount: $25\\%$ off $\\$100$ or $30\\%$ off $\\$80$?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Percent comparison",
                statement: "Compute final prices.",
              },
            ],
            steps: [
              {
                reasoning:
                  "First: $100 \\times 0.75 = \\$75$; second: $80 \\times 0.70 = \\$56$.",
                working: "\\$75 \\text{ vs } \\$56",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Second is better ($\\$56 < \\$75$).",
                working: "\\$56",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State answer.",
                working: "30\\% \\text{ off } \\$80",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$30\\%$ off $\\$80$ is better.",
            commonErrors: ["Comparing percent discounts only."],
          },
        },
        {
          id: "m7-u9-percent-comparison-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Analyze each comparison.",
          parts: [
            {
              label: "a",
              prompt: "Which is larger: $30\\%$ of $150$ or $40\\%$ of $100$?",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A $10\\%$ increase then $10\\%$ decrease results in what net change?",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Which is better: $50\\%$ off $\\$40$ or $25\\%$ off $\\$70$?",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "If prices increase $5\\%$ per year for 2 years, what is total percent increase?",
              marks: 2,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Larger value", answer: 1 },
              { label: "(b) Net change (%)", answer: -1 },
              { label: "(c) Better deal", answer: 0 },
              { label: "(d) Total increase (%)", answer: 10.25 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Percent comparison",
                statement: "Compute actual values or use factors.",
              },
              {
                kind: "skill",
                name: "Successive changes",
                statement: "Multiply factors.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "$30\\%$ of $150$ = $45$; $40\\%$ of $100$ = $40$; $45 > 40$.",
                working: "45 > 40",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "$1.10 \\times 0.90 = 0.99$; net = $-1\\%$.",
                working: "-1\\%",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "First: $40 \\times 0.50 = \\$20$; second: $70 \\times 0.75 = \\$52.50$; first is better.",
                working: "first",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "State answer.",
                working: "50\\% \\text{ off } \\$40",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "$1.05 \\times 1.05 = 1.1025$; net increase = $10.25\\%$.",
                working: "10.25\\%",
                marks: 2,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) $30\\%$ of $150$ (b) $-1\\%$ (c) $50\\%$ off $\\$40$ (d) $10.25\\%$",
            commonErrors: [
              "In (d), adding $5\\% + 5\\% = 10\\%$ instead of compounding.",
            ],
          },
        },
      ],
    },
  ],
};
