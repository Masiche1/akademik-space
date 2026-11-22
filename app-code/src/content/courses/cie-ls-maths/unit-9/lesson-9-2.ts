import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "cilm-u9-lesson-9-2",
  code: "9-2",
  title: "Ratio and percentage problems",
  goal: "I CAN solve complex ratio and percentage problems in context.",
  standards: ["0862 Number: ratio and percentages"],
  vocabulary: [
    { term: "Ratio", definition: "Comparison of quantities — $3:2$ means 3 parts to 2 parts." },
    { term: "Share", definition: "Dividing a total according to a ratio." },
    { term: "Percentage change", definition: "Increase or decrease as a percentage of original." },
    { term: "Reverse percentage", definition: "Finding original value from a percentage result." },
    { term: "Successive percentage", definition: "Applying percentages one after another — not additive." },
    { term: "Ratio simplification", definition: "Dividing all parts by common factor." },
  ],
  concepts: [
    {
      id: "cilm-u9-ratio-pct",
      title: "Advanced ratio and percentages",
      skill: "Share quantities by ratio, handle percentage change, and solve reverse percentage problems.",
      lesson: {
        sections: [
          {
            heading: "Sharing by ratio",
            body: "$\\pounds120$ shared $3:5$: total parts $=8$; each part $=15$; shares $=45$ and $75$. Check: $45+75=120$ ✓.",
          },
          {
            heading: "Percentage change",
            body: "Increase $15\\%$ of $80 = 12$; new value $=92$. Decrease similar. Change $= \\frac{\\text{difference}}{\\text{original}} \\times 100$.",
          },
          {
            heading: "Reverse percentages",
            body: "If $120$ is $80\\%$ of original: original $= \\frac{120}{0.8} = 150$. Divide by percentage as decimal.",
          },
          {
            heading: "Successive percentages",
            body: "$+10\\%$ then $+10\\%$ is NOT $+20\\%$: $1.1 \\times 1.1 = 1.21$ → $+21\\%$.",
          },
        ],
        keyFormulas: [
          { name: "Ratio share", statement: "Part value $= \\frac{\\text{ratio part}}{\\text{total parts}} \\times \\text{total}$." },
          { name: "Percentage change", statement: "$\\text{change}\\% = \\frac{\\text{new}-\\text{old}}{\\text{old}} \\times 100$." },
        ],
        workedExample: {
          problem: "Price rises $20\\%$ to $\\pounds60$. Find original price.",
          solution: "$60 = 1.2 \\times \\text{original}$ → original $= \\frac{60}{1.2} = \\pounds50$.",
        },
      },
      questions: [
        {
          id: "cilm-u9-rp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify the ratio $12:18$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4:6$" },
              { id: "b", text: "$3:4$" },
              { id: "c", text: "$2:3$" },
              { id: "d", text: "$6:9$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Simplify ratio", statement: "Divide both by $6$: $2:3$." },
            ],
            steps: [
              { reasoning: "$12\\div6=2$; $18\\div6=3$ → $2:3$.", working: "2:3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2:3$",
            commonErrors: ["Choosing (c)/(d) — not fully simplified."],
          },
        },
        {
          id: "cilm-u9-rp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "$\\pounds200$ is shared in ratio $2:3$. Find each share.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Ratio share", statement: "Total parts $=5$; each $=40$; shares $80, 120$." },
            ],
            steps: [
              { reasoning: "$200\\div5=40$ per part; shares $2\\times40=80$ and $3\\times40=120$.", working: "80, 120", marks: 1, markCode: "M" },
              { reasoning: "$\\pounds80$ and $\\pounds120$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds80$ and $\\pounds120$",
            commonErrors: ["Dividing by $2+3=5$ then stopping — must multiply by ratio parts."],
          },
        },
        {
          id: "cilm-u9-rp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A price increases by $15\\%$ then decreases by $15\\%$. Is the final price higher, lower or equal? Show why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Successive percentages", statement: "$1.15 \\times 0.85 = 0.9775$ → $2.25\\%$ decrease." },
            ],
            steps: [
              { reasoning: "Start at $100$: $+15\\%$ → $115$; $-15\\%$ of $115$ → $115 \\times 0.85 = 97.75$.", working: "97.75", marks: 1, markCode: "M" },
              { reasoning: "Final $97.75$ — lower than original $100$.", marks: 1, markCode: "M" },
              { reasoning: "Lower by $2.25\\%$.", working: "2.25%", marks: 1, markCode: "M" },
              { reasoning: "Explained correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Lower — final is $97.75\\%$ of original ($2.25\\%$ decrease)",
            commonErrors: ["Saying 'equal' — successive percentages don't cancel."],
          },
        },
        {
          id: "cilm-u9-rp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A recipe for $6$ people uses $300$ g flour. You need to serve $10$ people.",
          parts: [
            { label: "a", prompt: "Find the scaling factor.", marks: 1 },
            { label: "b", prompt: "Find flour needed.", marks: 2 },
            { label: "c", prompt: "If original recipe costs $\\pounds12$, find cost for $10$ people (ingredients scale, but you pay $\\pounds2$ delivery either way).", marks: 3 },
            { label: "d", prompt: "Find cost per person for both versions.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ratio in context", statement: "Scale factor $=10/6$; costs scale except fixed delivery." },
            ],
            steps: [
              { part: "a", reasoning: "SF $= \\frac{10}{6} = \\frac{5}{3}$.", working: "5/3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "$300 \\times \\frac{5}{3} = 500$ g.", working: "500\\text{ g}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Ingredients: $12-2=10$ scales to $10 \\times \\frac{5}{3}=16.67$; total $=16.67+2=18.67$ (or $\\pounds18.67$).", working: "18.67", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Fixed cost handled.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct total.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Original: $12/6=\\pounds2$ per person; new: $18.67/10=\\pounds1.87$ per person.", working: "2 vs 1.87", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Both computed.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Comparison correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{5}{3}$ (b) $500$ g (c) $\\approx\\pounds18.67$ (d) $\\pounds2$ vs $\\pounds1.87$ per person",
            levels: [
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Cost correct.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Per-person correct.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (c) scaling the delivery fee too — it's fixed."],
          },
        },
        {
          id: "cilm-u9-rp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify the ratio $18:24$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$6:8$" },
              { id: "b", text: "$3:4$" },
              { id: "c", text: "$2:3$" },
              { id: "d", text: "$9:12$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Simplify ratio", statement: "Divide every part by the highest common factor." },
            ],
            steps: [
              { reasoning: "Divide both parts by $6$ to obtain $3:4$.", working: "3:4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $3:4$",
          },
        },
        {
          id: "cilm-u9-rp-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "$\\pounds150$ is shared in the ratio $2:3$. Find the larger share.",
          response: { type: "numeric", parts: [{ label: "Larger share", answer: 90, unit: "pounds" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Ratio share", statement: "Total parts $=5$; one part $=30$." },
            ],
            steps: [
              { reasoning: "One part is $150\\div5=30$.", working: "30", marks: 1, markCode: "M" },
              { reasoning: "The larger share is $3\\times30=90$.", working: "90", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds90$",
          },
        },
        {
          id: "cilm-u9-rp-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "To increase a quantity by $12\\%$, which multiplier should be used?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.88$" },
              { id: "b", text: "$1.12$" },
              { id: "c", text: "$12$" },
              { id: "d", text: "$1.2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Percentage multiplier", statement: "Increase multiplier is $1+\\text{rate}$." },
            ],
            steps: [
              { reasoning: "$1+0.12=1.12$.", working: "1.12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $1.12$",
          },
        },
        {
          id: "cilm-u9-rp-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "After a $20\\%$ increase, a jacket costs $\\pounds72$. Find the original price.",
          response: { type: "numeric", parts: [{ label: "Original price", answer: 60, unit: "pounds" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reverse percentage", statement: "Divide the new value by the multiplier $1.20$." },
            ],
            steps: [
              { reasoning: "$72=1.20\\times\\text{original}$.", working: "72=1.20x", marks: 1, markCode: "M" },
              { reasoning: "Original price is $72\\div1.20=60$.", working: "60", marks: 1, markCode: "M" },
              { reasoning: "The original price was $\\pounds60$.", working: "60", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds60$",
          },
        },
        {
          id: "cilm-u9-rp-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A price rises by $10\\%$ and then by another $10\\%$. What is the total percentage increase?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$20\\%$" },
              { id: "b", text: "$21\\%$" },
              { id: "c", text: "$22\\%$" },
              { id: "d", text: "$10\\%$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "law", name: "Successive percentages", statement: "$1.10\\times1.10=1.21$, a $21\\%$ increase." },
            ],
            steps: [
              { reasoning: "Multiply the successive multipliers rather than adding percentages.", working: "1.21", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $21\\%$",
          },
        },
        {
          id: "cilm-u9-rp-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the sale price after a $15\\%$ discount on a $\\pounds80$ coat.",
          response: { type: "numeric", parts: [{ label: "Sale price", answer: 68, unit: "pounds" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Discount", statement: "Sale multiplier is $1-0.15=0.85$." },
            ],
            steps: [
              { reasoning: "$80\\times0.85=68$.", working: "68", marks: 1, markCode: "M" },
              { reasoning: "The sale price is $\\pounds68$.", working: "68", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds68$",
          },
        },
        {
          id: "cilm-u9-rp-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The ratio of cats to dogs is $2:5$ and there are $35$ animals. How many dogs are there?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$14$" },
              { id: "b", text: "$7$" },
              { id: "c", text: "$25$" },
              { id: "d", text: "$10$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Ratio share", statement: "One part is $35\\div7=5$; dogs are $5\\times5$." },
            ],
            steps: [
              { reasoning: "Dogs correspond to $5$ parts, giving $25$ animals.", working: "25", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $25$",
          },
        },
        {
          id: "cilm-u9-rp-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A phone's price falls from $\\pounds240$ to $\\pounds180$. Find the percentage decrease.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Percentage change", statement: "Change $=\\frac{\\text{difference}}{\\text{original}}\\times100$." },
            ],
            steps: [
              { reasoning: "The decrease is $240-180=60$.", working: "60", marks: 1, markCode: "M" },
              { reasoning: "Percentage decrease is $\\frac{60}{240}\\times100=25\\%$.", working: "25\\%", marks: 1, markCode: "M" },
              { reasoning: "The decrease is $25\\%$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25\\%$",
            commonErrors: ["Dividing by the new price instead of the original price."],
          },
        },
        {
          id: "cilm-u9-rp-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A salary of $\\pounds1800$ is shared between rent, food and savings in the ratio $5:3:2$. After a $10\\%$ pay rise, the new salary is shared in the same ratio. Find the new savings amount.",
          response: { type: "numeric", parts: [{ label: "Savings", answer: 396, unit: "pounds" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Ratio and percentage", statement: "Find the new salary first, then share by ratio." },
            ],
            steps: [
              { reasoning: "New salary is $1800\\times1.10=1980$.", working: "1980", marks: 1, markCode: "M" },
              { reasoning: "Savings correspond to $2$ of $10$ parts: $\\frac{2}{10}\\times1980=396$.", working: "396", marks: 1, markCode: "M" },
              { reasoning: "New savings are $\\pounds396$.", working: "396", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds396$",
          },
        },
        {
          id: "cilm-u9-rp-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $45$ is $60\\%$ of a number, what is the number?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$270$" },
              { id: "b", text: "$27$" },
              { id: "c", text: "$108$" },
              { id: "d", text: "$75$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reverse percentage", statement: "Divide by $0.60$." },
            ],
            steps: [
              { reasoning: "$45\\div0.60=75$.", working: "75", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $75$",
          },
        },
        {
          id: "cilm-u9-rp-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A paint mix uses blue and white paint in the ratio $2:7$. You need $36$ litres of mixture and want to find how much blue paint is required, then the cost if blue paint costs $\\pounds4$ per litre.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ratio in context", statement: "Share the total by ratio parts, then apply unit cost." },
            ],
            steps: [
              { reasoning: "Total parts are $2+7=9$, so one part is $36\\div9=4$ litres.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Blue paint is $2\\times4=8$ litres.", working: "8", marks: 1, markCode: "M" },
              { reasoning: "Cost is $8\\times4=32$.", working: "32", marks: 1, markCode: "M" },
              { reasoning: "$8$ litres costing $\\pounds32$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$ litres; $\\pounds32$",
            commonErrors: ["Using $\\frac{2}{9}$ of $36$ incorrectly or forgetting units."],
          },
        },
        {
          id: "cilm-u9-rp-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "A value decreases by $8\\%$ and then increases by $8\\%$. Starting from $50$, find the final value.",
          response: { type: "numeric", parts: [{ label: "Final value", answer: 49.68 }] },
          markscheme: {
            principles: [
              { kind: "law", name: "Successive percentages", statement: "Apply each multiplier to the current value." },
            ],
            steps: [
              { reasoning: "The final value is $50\\times0.92\\times1.08=49.68$.", working: "49.68", marks: 1, markCode: "M" },
              { reasoning: "The final value is $49.68$.", working: "49.68", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$49.68$",
          },
        },
      ],
    },
    {
      id: "cilm-u9-finance",
      title: "Financial maths",
      skill: "Calculate simple interest, discounts and best buys.",
      lesson: {
        sections: [
          {
            heading: "Simple interest",
            body: "$I = P \\times r \\times t$ where $P$=principal, $r$=rate (decimal), $t$=time in years.\n\n$\\pounds500$ at $4\\%$ for $3$ years: $I = 500 \\times 0.04 \\times 3 = \\pounds60$.",
          },
          {
            heading: "Discounts",
            body: "$25\\%$ off $\\pounds80$: discount $=20$, sale price $=60$. Or multiply by $0.75$ directly.",
          },
          {
            heading: "Best buy",
            body: "Compare unit prices: $\\pounds2.40$ for $6$ vs $\\pounds3.00$ for $8$. Unit prices: $0.40$ vs $0.375$ — second is better value.",
          },
        ],
        keyFormulas: [
          { name: "Simple interest", statement: "$I = Prt$; total $= P + I$." },
          { name: "Unit price", statement: "$\\text{unit price} = \\frac{\\text{cost}}{\\text{quantity}}$." },
        ],
        workedExample: {
          problem: "Which is better value: $\\pounds3.60$ for $12$ eggs or $\\pounds2.80$ for $8$ eggs?",
          solution: "Unit prices: $3.60/12=\\pounds0.30$; $2.80/8=\\pounds0.35$. First is cheaper per egg.",
        },
      },
      questions: [
        {
          id: "cilm-u9-fin-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simple interest formula is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$I = P \\div r \\div t$" },
              { id: "b", text: "$I = P + r + t$" },
              { id: "c", text: "$I = P \\times r \\times t$" },
              { id: "d", text: "$I = r \\times t$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Simple interest", statement: "$I=Prt$ — principal × rate × time." },
            ],
            steps: [
              { reasoning: "Interest $=$ principal × rate × time.", working: "Prt", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $I = P \\times r \\times t$",
            commonErrors: ["Using percentage as whole number — rate must be decimal."],
          },
        },
        {
          id: "cilm-u9-fin-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the interest on $\\pounds800$ at $5\\%$ for $2$ years.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Simple interest", statement: "$I = 800 \\times 0.05 \\times 2 = \\pounds80$." },
            ],
            steps: [
              { reasoning: "$I = 800 \\times 0.05 \\times 2 = 80$.", working: "80", marks: 1, markCode: "M" },
              { reasoning: "$\\pounds80$ interest.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds80$",
            commonErrors: ["Using $5$ not $0.05$ — percentage to decimal."],
          },
        },
        {
          id: "cilm-u9-fin-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A jacket costs $\\pounds120$ with $25\\%$ discount. A coat costs $\\pounds100$ with $30\\%$ discount. Which is cheaper?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Discounts", statement: "Jacket: $120 \\times 0.75 = 90$; coat: $100 \\times 0.70 = 70$." },
            ],
            steps: [
              { reasoning: "Jacket: $\\pounds90$; coat: $\\pounds70$.", working: "90 vs 70", marks: 1, markCode: "M" },
              { reasoning: "Both calculated.", marks: 1, markCode: "M" },
              { reasoning: "Coat cheaper by $\\pounds20$.", marks: 1, markCode: "M" },
              { reasoning: "Correct comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Coat — $\\pounds70$ vs $\\pounds90$",
            commonErrors: ["Comparing discount percentages — must compare final prices."],
          },
        },
        {
          id: "cilm-u9-fin-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "You invest $\\pounds1000$ at $4\\%$ simple interest per year.",
          parts: [
            { label: "a", prompt: "Find interest after $3$ years.", marks: 2 },
            { label: "b", prompt: "Find total amount after $3$ years.", marks: 1 },
            { label: "c", prompt: "Find total after $5$ years.", marks: 2 },
            { label: "d", prompt: "If interest were compounded annually instead, would total be higher or lower? Explain.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Interest", statement: "Simple: $I=Prt$ linear; compound grows exponentially." },
            ],
            steps: [
              { part: "a", reasoning: "$I = 1000 \\times 0.04 \\times 3 = \\pounds120$.", working: "120", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$1000 + 120 = \\pounds1120$.", working: "1120", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$I = 1000 \\times 0.04 \\times 5 = \\pounds200$; total $=\\pounds1200$.", working: "1200", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Compound interest earns interest on previous interest → higher.", working: "\\text{higher}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Explanation correct.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Contrast with simple explained.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\pounds120$ (b) $\\pounds1120$ (c) $\\pounds1200$ (d) higher — interest earns interest",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 3", marks: "3-4", descriptor: "Explained.", part: "d" },
              { level: "Level 2", marks: "1-2", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) saying equal — compounding always beats simple for same rate/time."],
          },
        },
        {
          id: "cilm-u9-fin-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which quantity is the principal in $I=Prt$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of years" },
              { id: "b", text: "The final amount" },
              { id: "c", text: "The interest earned" },
              { id: "d", text: "The amount originally invested or borrowed" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Principal", statement: "$P$ is the original amount." },
            ],
            steps: [
              { reasoning: "Principal is the starting amount before interest.", working: "P", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The original amount",
          },
        },
        {
          id: "cilm-u9-fin-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the simple interest on $\\pounds600$ at $3\\%$ per year for $4$ years.",
          response: { type: "numeric", parts: [{ label: "Interest", answer: 72, unit: "pounds" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Simple interest", statement: "$I=Prt$ with $r=0.03$." },
            ],
            steps: [
              { reasoning: "$I=600\\times0.03\\times4=72$.", working: "72", marks: 1, markCode: "M" },
              { reasoning: "Interest is $\\pounds72$.", working: "72", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds72$",
          },
        },
        {
          id: "cilm-u9-fin-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Compare the value of $\\pounds2.40$ for $6$ rolls and $\\pounds3.20$ for $8$ rolls. Which statement is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The second pack" },
              { id: "b", text: "They are equal" },
              { id: "c", text: "Cannot compare" },
              { id: "d", text: "The first pack" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Unit price", statement: "Compare cost per roll." },
            ],
            steps: [
              { reasoning: "Unit prices are $2.40\\div6=0.40$ and $3.20\\div8=0.40$.", working: "0.40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** They are equal",
            commonErrors: ["Comparing total prices without dividing by quantity."],
          },
        },
        {
          id: "cilm-u9-fin-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $\\pounds90$ pair of shoes is reduced by $15\\%$. Find the sale price.",
          response: { type: "numeric", parts: [{ label: "Sale price", answer: 76.5, unit: "pounds" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Discount", statement: "Multiply by $0.85$." },
            ],
            steps: [
              { reasoning: "$90\\times0.85=76.5$.", working: "76.5", marks: 1, markCode: "M" },
              { reasoning: "Sale price is $\\pounds76.50$.", working: "76.50", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds76.50$",
          },
        },
        {
          id: "cilm-u9-fin-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What decimal should be used for $7.5\\%$ in the simple interest formula?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.075$" },
              { id: "b", text: "$75$" },
              { id: "c", text: "$7.5$" },
              { id: "d", text: "$0.75$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Percentage conversion", statement: "Divide a percentage by $100$." },
            ],
            steps: [
              { reasoning: "$7.5\\div100=0.075$.", working: "0.075", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $0.075$",
          },
        },
        {
          id: "cilm-u9-fin-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "A $2$ litre bottle of juice costs $\\pounds3.60$ and a $1.5$ litre bottle costs $\\pounds2.70$. Which is better value per litre?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Unit price", statement: "Cost per litre determines value." },
            ],
            steps: [
              { reasoning: "Unit prices are $3.60\\div2=1.80$ and $2.70\\div1.5=1.80$.", working: "1.80", marks: 1, markCode: "M" },
              { reasoning: "Both cost the same per litre.", marks: 1, markCode: "M" },
              { reasoning: "Neither is better value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Equal value: $\\pounds1.80$ per litre",
          },
        },
        {
          id: "cilm-u9-fin-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Under simple interest, interest is calculated on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The principal plus previous interest" },
              { id: "b", text: "The original principal only" },
              { id: "c", text: "A random amount" },
              { id: "d", text: "The final amount" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Simple interest", statement: "Interest does not compound." },
            ],
            steps: [
              { reasoning: "Simple interest is always based on the original principal.", working: "P", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The original principal",
          },
        },
        {
          id: "cilm-u9-fin-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You deposit $\\pounds1200$ at $5\\%$ simple interest per year. Find the interest and total amount after $3$ years.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Simple interest", statement: "$I=Prt$; total $=P+I$." },
            ],
            steps: [
              { reasoning: "Interest is $1200\\times0.05\\times3=180$.", working: "180", marks: 1, markCode: "M" },
              { reasoning: "Total amount is $1200+180=1380$.", working: "1380", marks: 1, markCode: "M" },
              { reasoning: "Both values are correct.", marks: 1, markCode: "M" },
              { reasoning: "Interest $\\pounds180$, total $\\pounds1380$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds180$ interest; $\\pounds1380$ total",
          },
        },
        {
          id: "cilm-u9-fin-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Find the total amount after $2$ years if $\\pounds500$ earns $4\\%$ simple interest per year.",
          response: { type: "numeric", parts: [{ label: "Total", answer: 540, unit: "pounds" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Simple interest", statement: "$I=500\\times0.04\\times2=40$." },
            ],
            steps: [
              { reasoning: "Interest is $40$, so total is $500+40=540$.", working: "540", marks: 1, markCode: "M" },
              { reasoning: "Total amount is $\\pounds540$.", working: "540", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds540$",
          },
        },
        {
          id: "cilm-u9-fin-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the discount on a $\\pounds140$ item reduced by $20\\%$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\pounds20$" },
              { id: "b", text: "$\\pounds28$" },
              { id: "c", text: "$\\pounds112$" },
              { id: "d", text: "$\\pounds14$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Discount", statement: "Discount $=0.20\\times140=28$." },
            ],
            steps: [
              { reasoning: "$20\\%$ of $140$ is $28$.", working: "28", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $\\pounds28$",
          },
        },
        {
          id: "cilm-u9-fin-q15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A shop offers $10\\%$ off all items. You buy a $\\pounds65$ bag and a $\\pounds35$ wallet. Find the total paid and the amount saved.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Discounts", statement: "Apply discount to the combined bill or each item." },
            ],
            steps: [
              { reasoning: "Original total is $65+35=100$.", working: "100", marks: 1, markCode: "M" },
              { reasoning: "Discount is $0.10\\times100=10$.", working: "10", marks: 1, markCode: "M" },
              { reasoning: "Total paid is $100-10=90$.", working: "90", marks: 1, markCode: "M" },
              { reasoning: "Saved $\\pounds10$.", marks: 1, markCode: "M" },
              { reasoning: "Paid $\\pounds90$; saved $\\pounds10$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds90$ paid; $\\pounds10$ saved",
          },
        },
        {
          id: "cilm-u9-fin-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Find the simple interest on $\\pounds750$ at $6\\%$ per year for $18$ months.",
          response: { type: "numeric", parts: [{ label: "Interest", answer: 67.5, unit: "pounds" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Simple interest", statement: "Convert $18$ months to $1.5$ years before using $I=Prt$." },
            ],
            steps: [
              { reasoning: "$18$ months is $1.5$ years.", working: "1.5", marks: 1, markCode: "M" },
              { reasoning: "$I=750\\times0.06\\times1.5=67.5$.", working: "67.5", marks: 1, markCode: "M" },
              { reasoning: "Interest is $\\pounds67.50$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds67.50$",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u9-ratio-finance-notes",
      title: "Ratio and finance — revision notes",
      summary: "Ratio shares, percentage change, interest and discounts.",
      sections: [
        {
          heading: "Ratio & percentages",
          body: "Share: total ÷ parts × ratio. Reverse %: divide by decimal. Successive % multiply, don't add.",
        },
        {
          heading: "Finance",
          body: "$I=Prt$ (rate as decimal). Discounts: multiply by $(1-\\text{rate})$. Unit price = cost ÷ quantity for best buys.",
        },
      ],
    },
  ],
};
