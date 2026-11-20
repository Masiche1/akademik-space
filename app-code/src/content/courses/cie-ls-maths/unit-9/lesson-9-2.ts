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
              { id: "a", text: "$2:3$" },
              { id: "b", text: "$3:4$" },
              { id: "c", text: "$4:6$" },
              { id: "d", text: "$6:9$" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "$I = P \\times r \\times t$" },
              { id: "b", text: "$I = P + r + t$" },
              { id: "c", text: "$I = P \\div r \\div t$" },
              { id: "d", text: "$I = r \\times t$" },
            ],
            correctChoiceId: "a",
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
