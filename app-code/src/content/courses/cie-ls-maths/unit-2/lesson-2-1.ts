import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cilm-u2-lesson-2-1",
  code: "2-1",
  title: "Ratio and proportion",
  goal: "I CAN write and simplify ratios, share quantities in a given ratio, and solve proportion problems.",
  standards: ["0862 Ratio and proportion"],
  vocabulary: [
    { term: "Ratio", definition: "A comparison of two or more quantities, written $a:b$ or $\\frac{a}{b}$." },
    { term: "Equivalent ratios", definition: "Ratios with the same value — $2:3 = 4:6 = 6:9$." },
    { term: "Simplifying a ratio", definition: "Dividing all parts by their HCF — $12:18 = 2:3$." },
    { term: "Proportion", definition: "When two ratios are equal — $\\frac{a}{b}=\\frac{c}{d}$." },
    { term: "Scale factor", definition: "The multiplier linking two proportional quantities — $\\text{new} = \\text{scale factor} \\times \\text{old}$." },
    { term: "Direct proportion", definition: "As one quantity increases, the other increases at a constant rate — $y=kx$." },
  ],
  concepts: [
    {
      id: "cilm-u2-ratio-basics",
      title: "Writing and simplifying ratios",
      skill: "Express relationships as ratios, simplify them, and convert between ratio, fraction and decimal forms.",
      lesson: {
        sections: [
          {
            heading: "What a ratio means",
            body: "A ratio $2:3$ means '2 parts to every 3 parts' — total $5$ parts. Ratios compare **like** quantities or parts of a whole. They have no units and are never written with a colon in a fraction context — $\\frac{2}{3}$ of a quantity means $\\frac{2}{2+3}$.",
          },
          {
            heading: "Simplifying",
            body: "Divide every part by the same number — usually the HCF:\n\n$12:18:24$ → HCF $6$ → $2:3:4$\n\nYou can also multiply parts to scale up: $2:3$ scaled by $5$ gives $10:15$.",
          },
          {
            heading: "Ratio ↔ fraction ↔ decimal",
            body: "$3:5$ means $3$ parts out of $8$ total, so the fraction is $\\frac{3}{8}$ and the decimal $0.375$. Remember: the denominator is the **sum of the parts**, not the second part.",
          },
        ],
        keyFormulas: [
          { name: "Simplify ratio", statement: "Divide all parts by their HCF." },
          { name: "Ratio to fraction", statement: "$a:b$ of total $= \\frac{a}{a+b}$." },
        ],
        workedExample: {
          problem: "A class has 12 boys and 18 girls. Write the ratio of boys to girls in simplest form, and find the fraction of the class that is boys.",
          solution: "$12:18$ → divide by 6 → $2:3$. Total $=30$, boys fraction $=\\frac{12}{30}=\\frac{2}{5}$.",
        },
      },
      questions: [
        {
          id: "cilm-u2-rb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify the ratio $15:25$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5:3$" },
              { id: "b", text: "$3:5$" },
              { id: "c", text: "$15:25$ cannot be simplified" },
              { id: "d", text: "$1:2$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Simplifying ratios", statement: "Divide all parts by the HCF ($5$)." },
            ],
            steps: [
              { reasoning: "HCF of $15$ and $25$ is $5$: $15\\div5=3$, $25\\div5=5$ → $3:5$.", working: "\\frac{15}{5}:\\frac{25}{5}=3:5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $3:5$",
            commonErrors: ["Choosing (d) — any ratio with common factor can be simplified."],
          },
        },
        {
          id: "cilm-u2-rb-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A drink mix uses water and juice in the ratio $4:1$. What fraction of the drink is juice?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Ratio to fraction", statement: "The part's fraction = part ÷ sum of parts." },
            ],
            steps: [
              { reasoning: "Total parts $=4+1=5$; juice is $1$ part.", working: "\\text{total}=5", marks: 1, markCode: "M" },
              { reasoning: "Juice fraction $=\\frac{1}{5}$.", working: "\\frac{1}{5}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\frac{1}{5}$",
            commonErrors: ["$\\frac{1}{4}$ — dividing by the wrong part; denominator is the total $5$."],
          },
        },
        {
          id: "cilm-u2-rb-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The ratio of red to blue marbles in a bag is $5:7$. There are 84 marbles in total. How many are blue?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ratio sharing", statement: "Find total parts, scale each part by the same factor." },
            ],
            steps: [
              { reasoning: "Total parts $=5+7=12$.", working: "\\text{parts}=12", marks: 1, markCode: "M" },
              { reasoning: "One part $=84\\div12=7$ marbles.", working: "84\\div12=7", marks: 1, markCode: "M" },
              { reasoning: "Blue $=7\\times7=49$.", working: "7\\times7=49", marks: 1, markCode: "M" },
              { reasoning: "Check: red $=35$, $35+49=84$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$49$ blue marbles",
            commonErrors: ["$\\frac{7}{12}\\times84$ is correct method; using $\\frac{7}{5}$ or similar fraction errors."],
          },
        },
        {
          id: "cilm-u2-rb-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A recipe for salsa uses tomatoes, onions and peppers in the ratio $6:2:1$.",
          parts: [
            { label: "a", prompt: "Write the ratio in simplest form.", marks: 1 },
            { label: "b", prompt: "What fraction of the salsa is tomatoes?", marks: 2 },
            { label: "c", prompt: "A cook makes $\\frac{3}{4}$ of the recipe. The recipe uses $900\\ \\text{g}$ of tomatoes. How much does the cook use?", marks: 3 },
            { label: "d", prompt: "If the cook uses $450\\ \\text{g}$ of onions, how many grams of peppers does the recipe call for?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ratio problems", statement: "Parts → fractions of whole → scale quantities proportionally." },
            ],
            steps: [
              { part: "a", reasoning: "HCF of $6,2,1$ is $1$ — already simplest: $6:2:1$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Total parts $=9$; tomatoes fraction $=\\frac{6}{9}=\\frac{2}{3}$.", working: "\\frac{6}{9}=\\frac{2}{3}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplified.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\frac{3}{4}\\times900=675\\ \\text{g}$.", working: "\\frac{3}{4}\\times900=675", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct method.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct answer.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Onions are $2$ parts $=450\\text{g}$, so $1$ part $=225\\text{g}$; peppers $=1$ part $=225\\text{g}$.", working: "450\\div2=225", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correctly identifies peppers = 1 part.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $6:2:1$ (b) $\\frac{2}{3}$ (c) $675\\ \\text{g}$ (d) $225\\ \\text{g}$",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Fraction correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 3", marks: "2-3", descriptor: "Scaled quantity correct.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "c" },
              { level: "Level 3", marks: "2-3", descriptor: "Peppers amount correct.", part: "d" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "d" },
            ],
            commonErrors: ["In (d) using the tomato quantity instead of onions to find the scale."],
          },
        },
        {
          id: "cilm-u2-rb-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Simplify the ratio $14:21$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7:10$" },
              { id: "b", text: "$2:3$" },
              { id: "c", text: "$1:2$" },
              { id: "d", text: "$14:21$ cannot be simplified" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Simplifying ratios", statement: "Divide all parts by the HCF ($7$)." },
            ],
            steps: [
              { reasoning: "HCF of $14$ and $21$ is $7$: $14\\div7=2$, $21\\div7=3$ → $2:3$.", working: "\\frac{14}{7}:\\frac{21}{7}=2:3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $2:3$",
            commonErrors: ["Dividing only one part — both parts must be divided by the same number."],
          },
        },
        {
          id: "cilm-u2-rb-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The ratio of tea to coffee is $3:4$. What fraction of the drinks is tea?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{4}{7}$" },
              { id: "b", text: "$\\frac{3}{4}$" },
              { id: "c", text: "$\\frac{3}{7}$" },
              { id: "d", text: "$\\frac{3}{3}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Ratio to fraction", statement: "Fraction = part ÷ sum of parts $=\\frac{3}{3+4}$." },
            ],
            steps: [
              { reasoning: "Total parts $=7$; tea is $3$ parts → $\\frac{3}{7}$.", working: "\\frac{3}{7}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\frac{3}{7}$",
            commonErrors: ["Choosing (a) — $\\frac{3}{4}$ compares tea to coffee, not tea to the whole."],
          },
        },
        {
          id: "cilm-u2-rb-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which ratio is equivalent to $5:8$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$20:32$" },
              { id: "b", text: "$30:45$" },
              { id: "c", text: "$15:25$" },
              { id: "d", text: "$10:20$" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Equivalent ratios", statement: "Multiply or divide both parts by the same number." },
            ],
            steps: [
              { reasoning: "$5:8$ scaled by $4$ gives $20:32$.", working: "5\\times4:8\\times4=20:32", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $20:32$",
            commonErrors: ["Choosing (b) — $15:25=3:5$, which is a different ratio."],
          },
        },
        {
          id: "cilm-u2-rb-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The ratio of cats to dogs in a shelter is $2:5$. What fraction of the animals are dogs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{5}{7}$" },
              { id: "b", text: "$\\frac{5}{2}$" },
              { id: "c", text: "$\\frac{5}{5}$" },
              { id: "d", text: "$\\frac{2}{7}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Ratio to fraction", statement: "Dogs = $5$ parts of $2+5=7$ total." },
            ],
            steps: [
              { reasoning: "Dogs fraction $=\\frac{5}{7}$.", working: "\\frac{5}{7}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\frac{5}{7}$",
            commonErrors: ["Choosing (c) — $\\frac{2}{7}$ is the fraction that are cats, not dogs."],
          },
        },
        {
          id: "cilm-u2-rb-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Simplify the ratio $0.4 : 1.2$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1:3$" },
              { id: "b", text: "$2:5$" },
              { id: "c", text: "$4:6$" },
              { id: "d", text: "$3:4$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Decimal ratios", statement: "Multiply both parts by 10 to remove decimals, then simplify." },
            ],
            steps: [
              { reasoning: "$0.4:1.2 = 4:12 = 1:3$.", working: "4:12=1:3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $1:3$",
            commonErrors: ["Choosing (d) — $4:6=2:3$; the decimal ratio must be scaled correctly first."],
          },
        },
        {
          id: "cilm-u2-rb-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A recipe uses flour and sugar in the ratio $5:2$. How much flour is needed for $350\\ \\text{g}$ of sugar?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 875, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ratio scaling", statement: "Sugar is $2$ parts = $350$ g, so $1$ part $=175$ g; flour $=5$ parts." },
            ],
            steps: [
              { reasoning: "One part $=350\\div2=175$ g; flour $=5\\times175=875$ g.", working: "5\\times175=875", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$875\\ \\text{g}$",
            commonErrors: ["$350\\times\\frac{5}{2}=875$ is right; $350\\times5=1750$ forgets sugar is 2 parts."],
          },
        },
        {
          id: "cilm-u2-rb-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A quantity is shared in the ratio $2:3$. (a) What fraction does the first part get? (b) What fraction does the second part get?",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 0.4, tolerance: 0.0001 }, { label: "(b)", answer: 0.6, tolerance: 0.0001 }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Ratio to fraction", statement: "Denominator is the sum of parts ($5$)." },
            ],
            steps: [
              { reasoning: "(a) First part $=\\frac{2}{5}=0.4$.", working: "\\frac{2}{5}=0.4", marks: 1, markCode: "A" },
              { reasoning: "(b) Second part $=\\frac{3}{5}=0.6$.", working: "\\frac{3}{5}=0.6", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{2}{5}=0.4$ (b) $\\frac{3}{5}=0.6$",
            commonErrors: ["$\\frac{2}{3}$ — dividing by the other part instead of the total."],
          },
        },
        {
          id: "cilm-u2-rb-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "The ages of three siblings are in the ratio $2:3:4$ and their ages sum to $45$. How old is the oldest sibling?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 20, unit: "years" }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ratio of parts", statement: "Total parts $=9$; one part $=5$; oldest $=4$ parts." },
            ],
            steps: [
              { reasoning: "One part $=45\\div9=5$; oldest $=4\\times5=20$.", working: "4\\times5=20", marks: 1, markCode: "M" },
              { reasoning: "Check: ages $10,15,20$ sum to $45$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$ years",
            commonErrors: ["$45\\div4=11.25$ — must find one part first using total parts 9."],
          },
        },
        {
          id: "cilm-u2-rb-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A class has boys and girls in the ratio $3:4$. There are $28$ students in total. How many are girls?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ratio sharing", statement: "Total parts $=7$; one part $=4$ students." },
            ],
            steps: [
              { reasoning: "Total parts $=3+4=7$; one part $=28\\div7=4$.", working: "28\\div7=4", marks: 1, markCode: "M" },
              { reasoning: "Girls $=4$ parts $=4\\times4=16$.", working: "4\\times4=16", marks: 1, markCode: "M" },
              { reasoning: "Check: boys $=12$, $12+16=28$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16$ girls",
            commonErrors: ["$\\frac{4}{7}\\times28$ is correct; forgetting that the ratio already gives the parts."],
          },
        },
        {
          id: "cilm-u2-rb-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Simplify the ratio $2.5 : 0.75$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Decimal ratios", statement: "Remove decimals first by multiplying by 100." },
            ],
            steps: [
              { reasoning: "$2.5:0.75 = 250:75$ (multiply by 100).", working: "250:75", marks: 1, markCode: "M" },
              { reasoning: "HCF of $250$ and $75$ is $25$: $250\\div25=10$, $75\\div25=3$.", working: "10:3", marks: 1, markCode: "M" },
              { reasoning: "Simplest form: $10:3$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10:3$",
            commonErrors: ["$2.5:0.75=10:3$ requires removing decimals first; $25:7.5$ is not simpler."],
          },
        },
        {
          id: "cilm-u2-rb-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Three numbers are in the ratio $3:5:7$. Their sum is $105$. Find the three numbers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ratio sharing", statement: "Total parts $=15$; scale each part." },
            ],
            steps: [
              { reasoning: "Total parts $=3+5+7=15$; one part $=105\\div15=7$.", working: "105\\div15=7", marks: 1, markCode: "M" },
              { reasoning: "Numbers: $3\\times7=21$, $5\\times7=35$, $7\\times7=49$.", working: "21,\\ 35,\\ 49", marks: 1, markCode: "M" },
              { reasoning: "All three values found.", marks: 1, markCode: "M" },
              { reasoning: "Check: $21+35+49=105$ ✓ and ratio $21:35:49=3:5:7$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$21, 35, 49$",
            commonErrors: ["Dividing by each ratio number separately instead of the total parts."],
          },
        },
        {
          id: "cilm-u2-rb-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A fruit basket contains apples, oranges and bananas in the ratio $3:5:2$.",
          parts: [
            { label: "a", prompt: "What fraction of the fruit is oranges?", marks: 2 },
            { label: "b", prompt: "There are $40$ oranges. How many apples are in the basket?", marks: 2 },
            { label: "c", prompt: "If the basket contains $100$ pieces of fruit, how many are bananas?", marks: 2 },
            { label: "d", prompt: "Explain what happens to the ratio if every quantity is doubled.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ratio problems", statement: "Parts → fractions → scale; ratios are unchanged by uniform scaling." },
            ],
            steps: [
              { part: "a", reasoning: "Total parts $=10$; oranges $=\\frac{5}{10}=\\frac{1}{2}$.", working: "\\frac{5}{10}=\\frac{1}{2}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct fraction.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Oranges are $5$ parts $=40$, so one part $=8$; apples $=3$ parts $=24$.", working: "40\\div5=8;\\ 3\\times8=24", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Bananas $=\\frac{2}{10}\\times100=20$.", working: "0.2\\times100=20", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Doubling every quantity multiplies all parts by 2 — ratio unchanged ($6:10:4$ simplifies to $3:5:2$).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\frac{1}{2}$ (b) $24$ apples (c) $20$ bananas (d) ratio unchanged",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Fraction correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Apples correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Bananas correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "d" },
            ],
            commonErrors: ["In (b) using $\\frac{3}{5}\\times40$ — must go through one part, not cross-multiply ratios."],
          },
        },
      ],
    },
    {
      id: "cilm-u2-sharing",
      title: "Sharing in a ratio",
      skill: "Divide a quantity between people or groups in a given ratio, with and without a remainder.",
      lesson: {
        sections: [
          {
            heading: "The method",
            body: "1. Add the ratio parts to get the total number of parts.\n2. Divide the quantity by the total parts to find one part.\n3. Multiply one part by each ratio number.\n\nShare $\\pounds120$ in the ratio $2:3$: total $5$ parts, one part $=\\pounds24$, so $\\pounds48$ and $\\pounds72$.",
          },
          {
            heading: "Checking",
            body: "The parts must add back to the original quantity. $48+72=120$ ✓. If they don't, you've made an arithmetic error.",
          },
          {
            heading: "Ratio problems in context",
            body: "Word problems: identify what's being shared, write the ratio, apply the method. 'A prize of $\\pounds500$ is shared between first, second and third place in the ratio $3:2:1$' — total $6$ parts, one part $=\\pounds83.33$.",
          },
        ],
        keyFormulas: [
          { name: "Sharing in ratio", statement: "One part $= \\frac{\\text{total}}{\\text{sum of ratio parts}}$; multiply by each part." },
        ],
        workedExample: {
          problem: "Share $90\\ \\text{cm}$ of ribbon between two children in the ratio $2:3$.",
          solution: "Total parts $=5$; one part $=18\\text{cm}$; children get $36\\text{cm}$ and $54\\text{cm}$.",
        },
      },
      questions: [
        {
          id: "cilm-u2-sh-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Share $60$ sweets between two children in the ratio $1:2$. How many does each get?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$25$ and $35$" },
              { id: "b", text: "$15$ and $45$" },
              { id: "c", text: "$30$ and $30$" },
              { id: "d", text: "$20$ and $40$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sharing in ratio", statement: "Total parts $=3$; one part $=20$; shares $20$ and $40$." },
            ],
            steps: [
              { reasoning: "$60\\div3=20$ per part; $1$ part $=20$, $2$ parts $=40$.", working: "20,\\ 40", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $20$ and $40$",
            commonErrors: ["Choosing (b) — equal shares ignore the $1:2$ ratio."],
          },
        },
        {
          id: "cilm-u2-sh-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A prize of $\\pounds450$ is shared between three winners in the ratio $4:3:2$. How much does the second-place winner get?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sharing in ratio", statement: "Find one part, then multiply by the relevant ratio number." },
            ],
            steps: [
              { reasoning: "Total parts $=4+3+2=9$; one part $=450\\div9=\\pounds50$.", working: "450\\div9=50", marks: 1, markCode: "M" },
              { reasoning: "Second place $=3$ parts $=3\\times50=\\pounds150$.", working: "3\\times50=150", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds150$",
            commonErrors: ["Giving the first-place amount ($\\pounds200$) — check which ratio position is asked."],
          },
        },
        {
          id: "cilm-u2-sh-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A sum of money is shared between Alice, Bob and Carol in the ratio $2:3:5$. Alice receives $\\pounds140$. How much does Carol receive?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reverse ratio sharing", statement: "Use the known share to find one part, then scale to the target." },
            ],
            steps: [
              { reasoning: "Alice's $2$ parts $=\\pounds140$, so one part $=\\pounds70$.", working: "140\\div2=70", marks: 1, markCode: "M" },
              { reasoning: "Carol's $5$ parts $=5\\times70=\\pounds350$.", working: "5\\times70=350", marks: 1, markCode: "M" },
              { reasoning: "Check: total $=(2+3+5)\\times70=\\pounds700$; shares $140+210+350=700$ ✓.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\pounds350$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds350$",
            commonErrors: ["Using the total $\\pounds140$ as if it were the whole sum — $140$ is Alice's share only."],
          },
        },
        {
          id: "cilm-u2-sh-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A class of $36$ students is divided into three groups for a project in the ratio $2:3:4$.",
          parts: [
            { label: "a", prompt: "How many students are in each group?", marks: 3 },
            { label: "b", prompt: "Two students move from Group 3 to Group 1. Write the new ratio of Group 1 : Group 2 : Group 3.", marks: 3 },
            { label: "c", prompt: "Simplify your answer to (b).", marks: 1 },
            { label: "d", prompt: "Explain why the total number of students doesn't change.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ratio in context", statement: "Share → adjust → re-simplify; total conserved under redistribution." },
            ],
            steps: [
              { part: "a", reasoning: "Total parts $=2+3+4=9$; one part $=36\\div9=4$ students.", working: "36\\div9=4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Groups: $2\\times4=8$, $3\\times4=12$, $4\\times4=16$.", working: "8,\\ 12,\\ 16", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Check: $8+12+16=36$ ✓.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Group 1: $8+2=10$; Group 3: $16-2=14$; Group 2 unchanged at $12$.", working: "10:12:14", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Movement applied correctly.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "New ratio correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$10:12:14$ → divide by 2 → $5:6:7$.", working: "5:6:7", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Moving students between groups redistributes but doesn't create or destroy students — total conserved.", working: "\\text{conserved}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $8, 12, 16$ students (b) $10:12:14$ (c) $5:6:7$ (d) redistribution conserves total",
            levels: [
              { level: "Level 2", marks: "2-3", descriptor: "Divisibility issue identified.", part: "a" },
              { level: "Level 1", marks: "0-1", descriptor: "Forced integer answer without comment.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "New ratio correct.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Conservation explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (a) giving $6.67,10,13.33$ students — student counts must be whole; the problem should have used a divisible total."],
          },
        },
        {
          id: "cilm-u2-sh-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Share $80$ sweets between two children in the ratio $1:3$. How many does each get?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$25$ and $55$" },
              { id: "b", text: "$40$ and $40$" },
              { id: "c", text: "$20$ and $60$" },
              { id: "d", text: "$30$ and $50$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sharing in ratio", statement: "Total parts $=4$; one part $=20$." },
            ],
            steps: [
              { reasoning: "$80\\div4=20$; shares $20$ and $3\\times20=60$.", working: "20,\\ 60", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $20$ and $60$",
            commonErrors: ["Choosing (d) — guessing instead of dividing by total parts."],
          },
        },
        {
          id: "cilm-u2-sh-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Share $48$ counters in the ratio $2:4$. How many are in the larger share?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$12$" },
              { id: "b", text: "$24$" },
              { id: "c", text: "$32$" },
              { id: "d", text: "$16$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sharing in ratio", statement: "Total parts $=6$; one part $=8$; larger share $=4$ parts." },
            ],
            steps: [
              { reasoning: "$48\\div6=8$; larger share $=4\\times8=32$.", working: "4\\times8=32", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $32$",
            commonErrors: ["Choosing (c) — halving ignores the ratio."],
          },
        },
        {
          id: "cilm-u2-sh-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Share $100$ in the ratio $2:3$. What does the first person receive?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\pounds50$" },
              { id: "b", text: "$\\pounds60$" },
              { id: "c", text: "$\\pounds40$" },
              { id: "d", text: "$\\pounds30$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sharing in ratio", statement: "One part $=20$; first share $=2$ parts." },
            ],
            steps: [
              { reasoning: "$100\\div5=20$; first $=2\\times20=\\pounds40$.", working: "2\\times20=40", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\pounds40$",
            commonErrors: ["Choosing (b) — equal shares ignore the $2:3$ ratio."],
          },
        },
        {
          id: "cilm-u2-sh-q8",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A prize is shared in the ratio $2:3:4$. The second-place winner receives $\\pounds90$. How much does the first-place winner receive?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\pounds120$" },
              { id: "b", text: "$\\pounds60$" },
              { id: "c", text: "$\\pounds45$" },
              { id: "d", text: "$\\pounds80$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reverse ratio sharing", statement: "Second place = 3 parts = $\\pounds90$, so one part $=\\pounds30$; first = 2 parts." },
            ],
            steps: [
              { reasoning: "One part $=90\\div3=30$; first place $=2\\times30=\\pounds60$.", working: "2\\times30=60", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\pounds60$",
            commonErrors: ["Choosing (b) — doubling 90 instead of using the ratio positions."],
          },
        },
        {
          id: "cilm-u2-sh-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A sum of money is shared in the ratio $1:2:2$ and totals $\\pounds400$. How much does each of the three people receive?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\pounds80$, $\\pounds160$, $\\pounds160$" },
              { id: "b", text: "$\\pounds80$, $\\pounds80$, $\\pounds240$" },
              { id: "c", text: "$\\pounds100$, $\\pounds150$, $\\pounds150$" },
              { id: "d", text: "$\\pounds133$, $\\pounds133$, $\\pounds134$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sharing in ratio", statement: "Total parts $=5$; one part $=\\pounds80$." },
            ],
            steps: [
              { reasoning: "$400\\div5=80$; shares $80, 160, 160$.", working: "80,\\ 160,\\ 160", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\pounds80$, $\\pounds160$, $\\pounds160$",
            commonErrors: ["Choosing (b) — using parts $1,1.5,1.5$ instead of $1,2,2$."],
          },
        },
        {
          id: "cilm-u2-sh-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Share $90$ sweets between two children in the ratio $4:5$. How many does the first child get?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 40 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sharing in ratio", statement: "Total parts $=9$; one part $=10$; first $=4$ parts." },
            ],
            steps: [
              { reasoning: "$90\\div9=10$; first share $=4\\times10=40$.", working: "4\\times10=40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40$ sweets",
            commonErrors: ["$45$ — equal split ignores the $4:5$ ratio."],
          },
        },
        {
          id: "cilm-u2-sh-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) Share $\\pounds240$ in the ratio $3:5$ — how much does the first person get? (b) Share $144$ counters in the ratio $2:6$ — how many does the second person get?",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 90, unit: "pounds" }, { label: "(b)", answer: 108 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sharing in ratio", statement: "Find one part, multiply by the relevant ratio number." },
            ],
            steps: [
              { reasoning: "(a) One part $=240\\div8=30$; first $=3\\times30=\\pounds90$.", working: "3\\times30=90", marks: 1, markCode: "A" },
              { reasoning: "(b) One part $=144\\div8=18$; second $=6\\times18=108$.", working: "6\\times18=108", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\pounds90$ (b) $108$",
            commonErrors: ["In (b) giving the first person's share ($36$) — check which position is asked."],
          },
        },
        {
          id: "cilm-u2-sh-q12",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Ann receives $\\pounds45$ from a sum shared in the ratio $3:7$, where she is the '3' part. What was the total sum?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 150, unit: "pounds" }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reverse ratio sharing", statement: "3 parts = $\\pounds45$, so 1 part $=\\pounds15$; total $=10$ parts." },
            ],
            steps: [
              { reasoning: "One part $=45\\div3=15$; total parts $=10$ → total $=10\\times15=\\pounds150$.", working: "10\\times15=150", marks: 1, markCode: "M" },
              { reasoning: "Check: shares $45$ and $\\pounds105$; $45+105=150$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds150$",
            commonErrors: ["$45\\times10=450$ — must divide by 3 first to find one part."],
          },
        },
        {
          id: "cilm-u2-sh-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Share $\\pounds180$ between two people in the ratio $5:4$. How much does each receive?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sharing in ratio", statement: "Total parts $=9$; one part $=\\pounds20$." },
            ],
            steps: [
              { reasoning: "One part $=180\\div9=\\pounds20$.", working: "180\\div9=20", marks: 1, markCode: "M" },
              { reasoning: "Shares: $5\\times20=\\pounds100$ and $4\\times20=\\pounds80$.", working: "100,\\ 80", marks: 1, markCode: "M" },
              { reasoning: "Check: $100+80=180$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds100$ and $\\pounds80$",
            commonErrors: ["$\\pounds90$ each — equal shares ignore the ratio."],
          },
        },
        {
          id: "cilm-u2-sh-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "A sum of $\\pounds750$ is shared among three people in the ratio $2:3:5$. How much does the person with the largest share receive?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sharing in ratio", statement: "Total parts $=10$; largest share $=5$ parts." },
            ],
            steps: [
              { reasoning: "Total parts $=2+3+5=10$; one part $=750\\div10=\\pounds75$.", working: "750\\div10=75", marks: 1, markCode: "M" },
              { reasoning: "Largest share $=5\\times75=\\pounds375$.", working: "5\\times75=375", marks: 1, markCode: "M" },
              { reasoning: "Check: shares $150, 225, 375$ sum to $750$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds375$",
            commonErrors: ["$\\pounds250$ — using $\\frac{1}{3}$ instead of the ratio share."],
          },
        },
        {
          id: "cilm-u2-sh-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A sum of money is shared between A and B in the ratio $5:8$. B receives $\\pounds96$. How much does A receive, and what was the total sum?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reverse ratio sharing", statement: "Use the known share to find one part, then scale." },
            ],
            steps: [
              { reasoning: "B's $8$ parts $=\\pounds96$, so one part $=\\pounds12$.", working: "96\\div8=12", marks: 1, markCode: "M" },
              { reasoning: "A's $5$ parts $=5\\times12=\\pounds60$.", working: "5\\times12=60", marks: 1, markCode: "M" },
              { reasoning: "Total $=(5+8)\\times12=\\pounds156$.", working: "13\\times12=156", marks: 1, markCode: "M" },
              { reasoning: "Check: $60+96=156$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A receives $\\pounds60$; total $\\pounds156$",
            commonErrors: ["Treating $\\pounds96$ as the total — it's only B's share."],
          },
        },
        {
          id: "cilm-u2-sh-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A raffle sells 120 tickets at $\\pounds2$ each. The $\\pounds240$ prize fund is shared among four winners in the ratio $1:2:3:4$.",
          parts: [
            { label: "a", prompt: "How much does each winner receive?", marks: 3 },
            { label: "b", prompt: "How much do the top two winners receive together?", marks: 2 },
            { label: "c", prompt: "What fraction of the prize fund does the fourth winner receive?", marks: 1 },
            { label: "d", prompt: "Explain how you would check your answers.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ratio sharing in context", statement: "Total parts $=10$; check shares sum to total." },
            ],
            steps: [
              { part: "a", reasoning: "Total parts $=1+2+3+4=10$; one part $=240\\div10=\\pounds24$.", working: "240\\div10=24", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Shares: $\\pounds24$, $\\pounds48$, $\\pounds72$, $\\pounds96$.", working: "24,48,72,96", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All correct and in order.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Top two $=24+48=\\pounds72$.", working: "24+48=72", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$\\frac{4}{10}=\\frac{2}{5}$ of the fund.", working: "\\frac{4}{10}=\\frac{2}{5}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Add all shares — must equal $\\pounds240$; also check each share matches its ratio multiple of $24$.", working: "24+48+72+96=240", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Valid checking method stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\pounds24, \\pounds48, \\pounds72, \\pounds96$ (b) $\\pounds72$ (c) $\\frac{2}{5}$ (d) shares sum to total",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "All shares correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Top two correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Fraction correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Check described.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "d" },
            ],
            commonErrors: ["In (b) adding all four shares — 'top two' means the two largest."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u2-ratio-notes",
      title: "Ratio and sharing — revision notes",
      summary: "Simplifying ratios, converting to fractions, sharing quantities.",
      sections: [
        {
          heading: "Ratio basics",
          body: "Simplify by dividing all parts by the HCF. A part's share of the whole = part ÷ sum of all parts. $\\frac{3}{8}$ means 3 parts out of 8 total.",
        },
        {
          heading: "Sharing",
          body: "One part = total ÷ sum of ratio parts. Multiply by each part. Check: shares must add back to the total.",
        },
      ],
    },
  ],
};
