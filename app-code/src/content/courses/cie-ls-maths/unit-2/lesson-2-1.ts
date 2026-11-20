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
              { id: "a", text: "$3:5$" },
              { id: "b", text: "$5:3$" },
              { id: "c", text: "$1:2$" },
              { id: "d", text: "$15:25$ cannot be simplified" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "$20$ and $40$" },
              { id: "b", text: "$30$ and $30$" },
              { id: "c", text: "$15$ and $45$" },
              { id: "d", text: "$25$ and $35$" },
            ],
            correctChoiceId: "a",
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
