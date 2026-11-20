import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "m7-u1-lesson-1-3",
  code: "1-3",
  title: "Applying Proportions",
  goal: "I CAN use proportions to solve problems with scale drawings, simple interest and commission.",
  standards: ["7.G.A.1", "7.RP.A.3"],
  vocabulary: [
    { term: "Scale drawing", definition: "A drawing that shows a real object or place with all lengths in proportion to the actual lengths." },
    { term: "Scale factor", definition: "The number that every actual length is multiplied by to get the matching length in the drawing (or the reverse). It is a ratio of two lengths in the same units." },
    { term: "Principal", definition: "The amount of money originally deposited or borrowed." },
    { term: "Simple interest", definition: "Interest calculated only on the principal: $I = Prt$, where $r$ is the yearly rate as a decimal and $t$ is the time in years." },
    { term: "Commission", definition: "Pay for a salesperson that is a percent of the amount sold." },
    { term: "Annual rate", definition: "The percent of the principal charged or earned in one year." },
  ],
  concepts: [
    {
      id: "m7-u1-scale-drawings",
      title: "Scale drawings and scale factor",
      skill: "Use a scale to find actual lengths and areas from a scale drawing, and compute scale factors.",
      lesson: {
        sections: [
          {
            heading: "Reading a scale",
            body: "A scale such as $1 \\text{ inch} = 4 \\text{ feet}$ tells you that every inch on the drawing stands for $4$ feet of the real object. This is a proportional relationship, so the constant of proportionality is $4$ feet per inch. To find an actual length, multiply the drawing length by the scale. To find a drawing length, divide the actual length by the scale.",
          },
          {
            heading: "Scale factor",
            body: "A **scale factor** compares two lengths in the **same unit**. Since $1 \\text{ ft} = 12 \\text{ in}$, the scale $1 \\text{ in} = 4 \\text{ ft}$ means $1 \\text{ in}$ stands for $48 \\text{ in}$, so the scale factor from drawing to actual is $48$. The drawing is $\\frac{1}{48}$ the size of the real object.",
          },
          {
            heading: "Lengths and areas",
            body: "Lengths grow by the scale factor, but **areas grow by the square of the scale factor**. If every length is $4$ times as long, the area is $4^2 = 16$ times as large. So with a scale of $1 \\text{ in} = 4 \\text{ ft}$, $1 \\text{ in}^2$ on the drawing stands for $16 \\text{ ft}^2$.",
          },
        ],
        keyFormulas: [
          { name: "Actual length", statement: "$\\text{actual} = \\text{drawing length} \\times \\text{scale}$" },
          { name: "Area and scale", statement: "$\\text{area scale factor} = (\\text{length scale factor})^2$" },
        ],
        workedExample: {
          problem: "On a map, $1$ inch represents $25$ miles. Two towns are $3\\frac{1}{2}$ inches apart on the map. How far apart are they in real life?",
          solution: "Actual distance $= 3.5 \\times 25 = 87.5$ miles.",
        },
      },
      questions: [
        {
          id: "m7-u1-scale-drawings-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a map, $1$ inch represents $25$ miles. Two cities are $3$ inches apart on the map. What is the actual distance between them?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8\\frac{1}{3}$ miles" },
              { id: "b", text: "$28$ miles" },
              { id: "c", text: "$75$ miles" },
              { id: "d", text: "$125$ miles" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scale", statement: "Actual length = drawing length $\\times$ scale." },
            ],
            steps: [
              { reasoning: "Each map inch stands for $25$ miles, so multiply.", working: "3 \\times 25 = 75", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $75$ miles",
            commonErrors: ["Dividing $25 \\div 3$ and getting $8\\frac{1}{3}$.", "Adding $3 + 25$ to get $28$."],
          },
        },
        {
          id: "m7-u1-scale-drawings-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A scale drawing of a garden uses the scale $1 \\text{ cm} = 2.5 \\text{ m}$. On the drawing the garden is $6 \\text{ cm}$ long. What is the actual length of the garden, in meters?",
          response: { type: "numeric", parts: [{ label: "Actual length", answer: 15, unit: "meters" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scale", statement: "Actual length = drawing length $\\times$ scale." },
            ],
            steps: [
              { reasoning: "Every centimeter on the drawing represents $2.5$ m.", working: "6 \\times 2.5", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$15$ meters",
            commonErrors: ["Dividing $6 \\div 2.5 = 2.4$.", "Giving the answer in centimeters."],
          },
        },
        {
          id: "m7-u1-scale-drawings-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A rectangular room is actually $15$ feet long and $12$ feet wide. A scale drawing of the room uses the scale $1 \\text{ inch} = 6 \\text{ feet}$. What is the area of the room on the drawing, in square inches?",
          response: { type: "numeric", parts: [{ label: "Area on drawing", answer: 5, unit: "square inches" }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scale", statement: "Drawing length = actual length $\\div$ scale." },
              { kind: "formula", name: "Area of a rectangle", statement: "$A = \\ell w$" },
            ],
            steps: [
              { reasoning: "Divide each actual length by $6$ feet per inch.", working: "15 \\div 6 = 2.5, \\quad 12 \\div 6 = 2", marks: 1, markCode: "M" },
              { reasoning: "Multiply the drawing dimensions.", working: "2.5 \\times 2", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ square inches",
            commonErrors: ["Dividing the actual area $180$ by $6$ instead of by $6^2 = 36$.", "Multiplying by $6$ instead of dividing."],
            examinerNote: "Check: actual area $180 \\text{ ft}^2 \\div 36 = 5 \\text{ in}^2$.",
          },
        },
        {
          id: "m7-u1-scale-drawings-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "An architect draws a living room using the scale $1 \\text{ inch} = 4 \\text{ feet}$. On the drawing, the living room is a rectangle $4\\frac{1}{2}$ inches long and $3$ inches wide.",
          parts: [
            { label: "a", prompt: "Find the actual length of the living room, in feet.", marks: 2 },
            { label: "b", prompt: "Find the actual area of the living room, in square feet.", marks: 2 },
            { label: "c", prompt: "Write the scale factor from the drawing to the actual room as a number with no units. (Use $1 \\text{ ft} = 12 \\text{ in}$.)", marks: 2 },
            { label: "d", prompt: "A student says, \"The scale is $1 : 4$, so the actual area is $4$ times the area on the drawing.\" Find how many square feet each square inch of the drawing represents, and explain the student's mistake.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Actual length (feet)", answer: 18 },
              { label: "(b) Actual area (square feet)", answer: 216 },
              { label: "(c) Scale factor", answer: 48 },
              { label: "(d) Square feet per square inch", answer: 16 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Scale", statement: "Actual length = drawing length $\\times$ scale." },
              { kind: "property", name: "Scale and area", statement: "Area scale factor $=$ (length scale factor)$^2$." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply the drawing length by $4$ feet per inch.", working: "4.5 \\times 4", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "18", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The actual width is $3 \\times 4 = 12$ feet. Multiply length by width.", working: "18 \\times 12", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "216", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Convert $4$ feet to inches so both lengths use the same unit.", working: "4 \\times 12 = 48 \\text{ in}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "$1$ inch on the drawing stands for $48$ inches in real life.", working: "48", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Lengths are multiplied by $4$ in each direction, so each square inch represents $4 \\times 4$ square feet.", working: "4^2 = 16", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The student scaled only one dimension. Area depends on two lengths, so it is multiplied by the square of the scale. Check: drawing area $13.5 \\times 16 = 216$.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) $18$ ft (b) $216$ ft$^2$ (c) $48$ (d) $16$ ft$^2$ per in$^2$; area scales by the square of the length scale.",
            commonErrors: ["Dividing by the scale instead of multiplying.", "Giving a scale factor of $4$ without converting feet to inches.", "Multiplying the drawing area $13.5$ by $4$ to get $54$."],
            examinerNote: "In (b) follow through from an incorrect length in (a).",
          },
        },
      ],
    },
    {
      id: "m7-u1-interest-commission",
      title: "Simple interest and commission",
      skill: "Use I = Prt for simple interest and percent of sales for commission in real-world problems.",
      lesson: {
        sections: [
          {
            heading: "Simple interest",
            body: "When you deposit or borrow money, the **principal** $P$ earns or costs **interest** at an annual rate $r$ for $t$ years. Simple interest is $I = Prt$, with $r$ written as a decimal. If you deposit $\\$800$ at $3\\%$ for $2$ years, $I = 800 \\times 0.03 \\times 2 = \\$48$. The total amount is $P + I = \\$848$.",
          },
          {
            heading: "Time must be in years",
            body: "The rate is per **year**, so time must be in years. $6$ months is $0.5$ years and $18$ months is $1.5$ years. Interest grows proportionally with time: doubling the time doubles the interest. Here $I$ is proportional to $t$ with constant of proportionality $Pr$.",
          },
          {
            heading: "Commission",
            body: "A salesperson earns **commission**, a percent of what they sell. Commission $=$ rate $\\times$ sales. Some jobs pay a base salary plus commission, so total earnings $=$ base $+$ commission.",
          },
        ],
        keyFormulas: [
          { name: "Simple interest", statement: "$I = Prt$" },
          { name: "Commission", statement: "$\\text{commission} = \\text{rate} \\times \\text{sales}$" },
        ],
        workedExample: {
          problem: "A salesperson earns a $5\\%$ commission. In one week she sells $\\$3{,}200$ of goods. How much commission does she earn?",
          solution: "Commission $= 0.05 \\times 3200 = \\$160$.",
        },
      },
      questions: [
        {
          id: "m7-u1-interest-commission-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You deposit $\\$500$ in an account that pays $4\\%$ simple interest per year. How much interest is earned in $3$ years?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\$20$" },
              { id: "b", text: "$\\$60$" },
              { id: "c", text: "$\\$560$" },
              { id: "d", text: "$\\$6{,}000$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Simple interest", statement: "$I = Prt$" },
            ],
            steps: [
              { reasoning: "Substitute $P = 500$, $r = 0.04$, $t = 3$.", working: "I = 500 \\times 0.04 \\times 3 = 60", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $\\$60$",
            commonErrors: ["Choosing $\\$20$, the interest for one year only.", "Choosing $\\$560$, the total amount instead of the interest.", "Using $r = 4$ instead of $0.04$."],
          },
        },
        {
          id: "m7-u1-interest-commission-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A real estate agent earns a $6\\%$ commission on a sale. The agent sells a house for $\\$250{,}000$. How much commission does the agent earn, in dollars?",
          response: { type: "numeric", parts: [{ label: "Commission", answer: 15000, unit: "dollars" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Commission", statement: "$\\text{commission} = \\text{rate} \\times \\text{sales}$" },
            ],
            steps: [
              { reasoning: "Write $6\\%$ as a decimal and multiply by the sale price.", working: "0.06 \\times 250000", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "15000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$15{,}000$",
            commonErrors: ["Using $0.6$ instead of $0.06$.", "Adding the commission to the sale price."],
          },
        },
        {
          id: "m7-u1-interest-commission-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student borrows $\\$1{,}200$ at $3.5\\%$ simple interest per year for $4$ years. How much must the student pay back in total, in dollars?",
          response: { type: "numeric", parts: [{ label: "Total to repay", answer: 1368, unit: "dollars" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Simple interest", statement: "$I = Prt$" },
              { kind: "definition", name: "Total amount", statement: "Total amount $= P + I$." },
            ],
            steps: [
              { reasoning: "Substitute into $I = Prt$ with $r = 0.035$.", working: "I = 1200 \\times 0.035 \\times 4", marks: 1, markCode: "M" },
              { reasoning: "Evaluate the interest.", working: "I = 168", marks: 1, markCode: "A" },
              { reasoning: "Add the interest to the principal.", working: "1200 + 168 = 1368", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$1{,}368$",
            commonErrors: ["Stopping at the interest, $\\$168$.", "Using $r = 3.5$ as a decimal, giving a huge value."],
          },
        },
        {
          id: "m7-u1-interest-commission-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Maya sells cars. She earns a base pay of $\\$1{,}500$ per month plus a $4\\%$ commission on her sales. In March she sells $\\$60{,}000$ worth of cars. She deposits $\\$3{,}000$ of her earnings into a savings account that pays $2.5\\%$ simple interest per year.",
          parts: [
            { label: "a", prompt: "Find Maya's commission for March, in dollars.", marks: 2 },
            { label: "b", prompt: "Find Maya's total earnings for March, in dollars.", marks: 1 },
            { label: "c", prompt: "Find the simple interest earned on the $\\$3{,}000$ in $3$ years, in dollars.", marks: 2 },
            { label: "d", prompt: "For how many years must the $\\$3{,}000$ stay in the account to earn $\\$300$ in simple interest?", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Commission (dollars)", answer: 2400 },
              { label: "(b) Total earnings (dollars)", answer: 3900 },
              { label: "(c) Interest in 3 years (dollars)", answer: 225 },
              { label: "(d) Time to earn 300 dollars (years)", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Commission", statement: "$\\text{commission} = \\text{rate} \\times \\text{sales}$" },
              { kind: "formula", name: "Simple interest", statement: "$I = Prt$" },
            ],
            steps: [
              { part: "a", reasoning: "Multiply the commission rate by the sales.", working: "0.04 \\times 60000", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "2400", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Add the base pay to the commission.", working: "1500 + 2400 = 3900", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Substitute $P = 3000$, $r = 0.025$, $t = 3$.", working: "3000 \\times 0.025 \\times 3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "225", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Substitute $I = 300$ into $I = Prt$.", working: "300 = 3000 \\times 0.025 \\times t", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Simplify the right side: $3000 \\times 0.025 = 75$ dollars per year.", working: "300 = 75t", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Divide both sides by $75$.", working: "t = 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\$2{,}400$ (b) $\\$3{,}900$ (c) $\\$225$ (d) $4$ years",
            commonErrors: ["Forgetting to add the base pay in (b).", "Using $2.5$ instead of $0.025$ for the rate.", "In (d), dividing $300$ by $3000$ and stopping at $0.1$."],
            examinerNote: "In (b) follow through from an incorrect commission in (a). In (d) accept the method of dividing $300$ by the yearly interest of $\\$75$.",
          },
        },
      ],
    },
  ],
};
