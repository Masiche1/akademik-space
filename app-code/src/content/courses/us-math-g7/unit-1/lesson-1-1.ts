import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "m7-u1-lesson-1-1",
  code: "1-1",
  title: "Unit Rates and Proportional Relationships",
  goal: "I CAN compute unit rates with fractions and decide whether a relationship is proportional by finding the constant of proportionality in tables, graphs and equations.",
  standards: ["7.RP.A.1", "7.RP.A.2"],
  vocabulary: [
    { term: "Rate", definition: "A ratio that compares two quantities with different units, such as $60$ miles per $2$ hours." },
    { term: "Unit rate", definition: "A rate in which the second quantity is $1$, such as $30$ miles per $1$ hour." },
    { term: "Complex fraction", definition: "A fraction whose numerator, denominator or both contain fractions, such as $\\frac{\\frac{1}{2}}{\\frac{1}{4}}$." },
    { term: "Proportional relationship", definition: "A relationship in which the ratio of $y$ to $x$ is always the same. Its graph is a straight line through the origin $(0, 0)$." },
    { term: "Constant of proportionality", definition: "The constant ratio $k = \\frac{y}{x}$ in a proportional relationship. It is the unit rate, and the equation is $y = kx$." },
    { term: "Origin", definition: "The point $(0, 0)$ where the $x$-axis and $y$-axis cross." },
  ],
  concepts: [
    {
      id: "m7-u1-unit-rates",
      title: "Unit rates with fractions",
      skill: "Compute unit rates when the quantities are fractions, using complex fractions.",
      lesson: {
        sections: [
          {
            heading: "What is a unit rate?",
            body: "A **rate** compares two quantities measured in different units. A **unit rate** tells you how much of the first quantity there is for **one** unit of the second. If a car travels $150$ miles in $3$ hours, the unit rate is $\\frac{150}{3} = 50$ miles per hour.",
          },
          {
            heading: "Rates with fractions",
            body: "The quantities in a rate can be fractions or mixed numbers. Write the rate as a **complex fraction**, then divide: dividing by a fraction is the same as multiplying by its reciprocal. If a hiker walks $\\frac{1}{2}$ mile in $\\frac{1}{4}$ hour, the rate is $\\frac{\\frac{1}{2}}{\\frac{1}{4}} = \\frac{1}{2} \\div \\frac{1}{4} = \\frac{1}{2} \\times 4 = 2$ miles per hour.",
          },
          {
            heading: "Order matters",
            body: "The unit named after the word \"per\" goes in the **denominator**. Miles per hour means miles $\\div$ hours. Convert mixed numbers to improper fractions (or decimals) before dividing: $2\\frac{1}{4} = \\frac{9}{4}$.",
          },
        ],
        keyFormulas: [
          { name: "Unit rate", statement: "$\\text{unit rate} = \\frac{\\text{amount of first quantity}}{\\text{amount of second quantity}}$" },
          { name: "Dividing fractions", statement: "$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$" },
        ],
        workedExample: {
          problem: "A baker uses $1\\frac{1}{2}$ cups of sugar to make $\\frac{3}{4}$ of a batch of cookies. How many cups of sugar are needed per whole batch?",
          solution: "Cups per batch $= \\frac{1\\frac{1}{2}}{\\frac{3}{4}} = \\frac{3}{2} \\div \\frac{3}{4} = \\frac{3}{2} \\times \\frac{4}{3} = \\frac{12}{6} = 2$. The baker needs $2$ cups of sugar per batch.",
        },
      },
      questions: [
        {
          id: "m7-u1-unit-rates-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A runner jogs $\\frac{1}{2}$ mile in $\\frac{1}{4}$ hour. What is the runner's speed in miles per hour?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\frac{1}{8}$ mile per hour" },
              { id: "b", text: "$\\frac{1}{2}$ mile per hour" },
              { id: "c", text: "$2$ miles per hour" },
              { id: "d", text: "$4$ miles per hour" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Unit rate", statement: "Miles per hour $= \\text{miles} \\div \\text{hours}$." },
            ],
            steps: [
              { reasoning: "Divide the distance by the time. Dividing by $\\frac{1}{4}$ is multiplying by $4$.", working: "\\frac{1}{2} \\div \\frac{1}{4} = \\frac{1}{2} \\times 4 = 2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $2$ miles per hour",
            commonErrors: ["Multiplying $\\frac{1}{2} \\times \\frac{1}{4}$ to get $\\frac{1}{8}$.", "Dividing time by distance, which gives hours per mile $= \\frac{1}{2}$."],
          },
        },
        {
          id: "m7-u1-unit-rates-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A painter paints $\\frac{3}{4}$ of a wall in $\\frac{1}{2}$ hour. At this rate, how many walls does the painter paint per hour? Give your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Walls per hour", answer: 1.5 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Unit rate", statement: "Walls per hour $= \\text{walls} \\div \\text{hours}$." },
              { kind: "property", name: "Dividing by a fraction", statement: "Dividing by a fraction is multiplying by its reciprocal." },
            ],
            steps: [
              { reasoning: "Write the rate as walls divided by hours and multiply by the reciprocal.", working: "\\frac{3}{4} \\div \\frac{1}{2} = \\frac{3}{4} \\times 2", marks: 1, markCode: "M" },
              { reasoning: "Simplify.", working: "\\frac{6}{4} = \\frac{3}{2} = 1.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.5$ walls per hour",
            commonErrors: ["Dividing $\\frac{1}{2} \\div \\frac{3}{4}$ and getting $\\frac{2}{3}$, which is hours per wall.", "Forgetting to flip the second fraction."],
            examinerNote: "Accept $\\frac{3}{2}$ or $1\\frac{1}{2}$ as equivalent forms in written work.",
          },
        },
        {
          id: "m7-u1-unit-rates-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A printer prints $3\\frac{1}{2}$ pages in $1\\frac{1}{4}$ minutes. How many pages does it print per minute? Give your answer as a decimal.",
          response: { type: "numeric", parts: [{ label: "Pages per minute", answer: 2.8, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Unit rate", statement: "Pages per minute $= \\text{pages} \\div \\text{minutes}$." },
              { kind: "skill", name: "Mixed numbers", statement: "Convert mixed numbers to improper fractions before dividing." },
            ],
            steps: [
              { reasoning: "Convert the mixed numbers and write the rate as a division.", working: "\\frac{7}{2} \\div \\frac{5}{4}", marks: 1, markCode: "M" },
              { reasoning: "Multiply by the reciprocal of the divisor.", working: "\\frac{7}{2} \\times \\frac{4}{5} = \\frac{28}{10}", marks: 1, markCode: "M" },
              { reasoning: "Convert to a decimal.", working: "\\frac{28}{10} = 2.8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2.8$ pages per minute",
            commonErrors: ["Dividing the whole numbers and fractions separately.", "Dividing minutes by pages, giving about $0.36$."],
          },
        },
        {
          id: "m7-u1-unit-rates-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Dana and Eli ride bikes along a trail. Dana rides $4\\frac{1}{2}$ miles in $\\frac{3}{4}$ hour. Eli rides $3\\frac{1}{3}$ miles in $\\frac{1}{2}$ hour. Both ride at a constant speed.",
          parts: [
            { label: "a", prompt: "Find Dana's speed in miles per hour.", marks: 2 },
            { label: "b", prompt: "Find Eli's speed in miles per hour. Round to the nearest hundredth.", marks: 2 },
            { label: "c", prompt: "Who rides faster, and by how many miles per hour? Round to the nearest hundredth.", marks: 2 },
            { label: "d", prompt: "At Dana's speed, how many hours would it take Dana to ride $9$ miles?", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Dana's speed (mph)", answer: 6, tolerance: 0.01 },
              { label: "(b) Eli's speed (mph)", answer: 6.67, tolerance: 0.01 },
              { label: "(c) Difference in speed (mph)", answer: 0.67, tolerance: 0.01 },
              { label: "(d) Time for 9 miles (hours)", answer: 1.5, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Unit rate", statement: "Speed $= \\text{distance} \\div \\text{time}$." },
              { kind: "property", name: "Dividing fractions", statement: "$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$" },
            ],
            steps: [
              { part: "a", reasoning: "Convert $4\\frac{1}{2}$ to $\\frac{9}{2}$ and divide by the time.", working: "\\frac{9}{2} \\div \\frac{3}{4} = \\frac{9}{2} \\times \\frac{4}{3}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Simplify.", working: "\\frac{36}{6} = 6", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Convert $3\\frac{1}{3}$ to $\\frac{10}{3}$ and divide by the time.", working: "\\frac{10}{3} \\div \\frac{1}{2} = \\frac{10}{3} \\times 2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Simplify and round.", working: "\\frac{20}{3} \\approx 6.67", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Compare the two speeds: Eli's $6.67$ is greater than Dana's $6$, so Eli is faster. Subtract.", working: "\\frac{20}{3} - 6 = \\frac{2}{3}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State who is faster and by how much.", working: "\\text{Eli, by about } 0.67 \\text{ mph}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Time is distance divided by speed.", working: "9 \\div 6", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "1.5 \\text{ hours}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $6$ mph (b) $\\approx 6.67$ mph (c) Eli, by about $0.67$ mph (d) $1.5$ hours",
            commonErrors: ["Dividing time by distance.", "Using $4\\frac{1}{2} = \\frac{4}{2}$ when converting the mixed number.", "In (d), multiplying $9 \\times 6$."],
            examinerNote: "In (c) follow through from incorrect speeds in (a) and (b).",
          },
        },
      ],
    },
    {
      id: "m7-u1-proportional-relationships",
      title: "Proportional relationships and the constant of proportionality",
      skill: "Decide whether a relationship is proportional and find k in tables, graphs and equations of the form y = kx.",
      lesson: {
        sections: [
          {
            heading: "Recognizing proportional relationships",
            body: "Two quantities are **proportional** when the ratio $\\frac{y}{x}$ is the same for every pair of values. In a table, divide each $y$ by its $x$: if all the ratios match, the relationship is proportional. On a graph, a proportional relationship is a **straight line that passes through the origin** $(0, 0)$. A line that misses the origin, or a curve, is not proportional.",
          },
          {
            heading: "The constant of proportionality",
            body: "The common ratio is the **constant of proportionality**, $k = \\frac{y}{x}$. It is the unit rate: the value of $y$ when $x = 1$. The equation of a proportional relationship is $y = kx$. Compare $y = 3x$ (proportional) with $y = 3x + 2$ (not proportional, because $x = 0$ gives $y = 2$, not $0$).",
          },
          {
            heading: "Reading k from a graph",
            body: "Pick any point $(x, y)$ on the line, other than the origin, and compute $k = \\frac{y}{x}$. The point $(1, r)$, when visible, gives $k = r$ directly. Then use $y = kx$ to find other values.",
          },
        ],
        keyFormulas: [
          { name: "Constant of proportionality", statement: "$k = \\frac{y}{x}$" },
          { name: "Proportional equation", statement: "$y = kx$" },
        ],
        workedExample: {
          problem: "The table shows the cost $y$ (in dollars) of $x$ pounds of nuts: $(2, 7)$, $(4, 14)$, $(6, 21)$. Is the relationship proportional? If so, write the equation.",
          solution: "Ratios: $\\frac{7}{2} = 3.5$, $\\frac{14}{4} = 3.5$, $\\frac{21}{6} = 3.5$. The ratios are all equal, so the relationship is proportional with $k = 3.5$. The equation is $y = 3.5x$.",
        },
      },
      questions: [
        {
          id: "m7-u1-proportional-relationships-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which equation represents a proportional relationship between $x$ and $y$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y = x + 3$" },
              { id: "b", text: "$y = 3x + 2$" },
              { id: "c", text: "$y = 3x$" },
              { id: "d", text: "$y = \\frac{3}{x}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Proportional relationship", statement: "A proportional relationship has the form $y = kx$ for a constant $k$." },
            ],
            steps: [
              { reasoning: "Only $y = 3x$ has the form $y = kx$, with $k = 3$. The others have an added constant or have $x$ in the denominator.", working: "y = 3x", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $y = 3x$",
            commonErrors: ["Choosing $y = 3x + 2$ because it is a straight line, without noticing it does not pass through the origin.", "Choosing $y = \\frac{3}{x}$, an inverse relationship where $xy$ (not $\\frac{y}{x}$) is constant."],
          },
        },
        {
          id: "m7-u1-proportional-relationships-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The table shows the cost $y$ of $x$ pounds of apples.\n\n- $x = 2$ pounds: $y = \\$5$\n- $x = 4$ pounds: $y = \\$10$\n- $x = 6$ pounds: $y = \\$15$\n\nThe relationship is proportional. What is the constant of proportionality $k$, in dollars per pound?",
          response: { type: "numeric", parts: [{ label: "k", answer: 2.5, unit: "dollars per pound" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Constant of proportionality", statement: "$k = \\frac{y}{x}$" },
            ],
            steps: [
              { reasoning: "Divide any $y$ by its $x$.", working: "k = \\frac{5}{2}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate and check with another pair: $\\frac{10}{4} = 2.5$.", working: "k = 2.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$k = 2.5$ dollars per pound",
            commonErrors: ["Computing $\\frac{x}{y} = 0.4$.", "Subtracting $y - x$ instead of dividing."],
          },
        },
        {
          id: "m7-u1-proportional-relationships-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The graph of a proportional relationship is a straight line that passes through the origin and through the point $(8, 6)$. Find the value of $y$ when $x = 20$.",
          response: { type: "numeric", parts: [{ label: "y when x = 20", answer: 15 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Constant of proportionality", statement: "$k = \\frac{y}{x}$" },
              { kind: "formula", name: "Proportional equation", statement: "$y = kx$" },
            ],
            steps: [
              { reasoning: "Use the point $(8, 6)$ to find the constant of proportionality.", working: "k = \\frac{6}{8} = 0.75", marks: 1, markCode: "M" },
              { reasoning: "Write the equation of the line.", working: "y = 0.75x", marks: 1, markCode: "M" },
              { reasoning: "Substitute $x = 20$.", working: "y = 0.75 \\times 20 = 15", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$y = 15$",
            commonErrors: ["Using $k = \\frac{8}{6}$, the reciprocal.", "Adding $12$ to $6$ because $x$ increased by $12$ (additive instead of multiplicative reasoning)."],
          },
        },
        {
          id: "m7-u1-proportional-relationships-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Two gyms charge for memberships. Gym A charges a total of $y = 12x$ dollars for $x$ months. Gym B charges a joining fee of $\\$20$ plus $\\$10$ per month, so its total cost is $y = 10x + 20$ dollars.",
          parts: [
            { label: "a", prompt: "Gym A's relationship is proportional. State the constant of proportionality and what it means in this situation.", marks: 2 },
            { label: "b", prompt: "Explain why Gym B's relationship is not proportional.", marks: 2 },
            { label: "c", prompt: "Find the total cost at Gym A for $7$ months, in dollars.", marks: 1 },
            { label: "d", prompt: "After how many months do the two gyms cost the same total amount?", marks: 3 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Constant of proportionality k", answer: 12 },
              { label: "(c) Cost at Gym A for 7 months (dollars)", answer: 84 },
              { label: "(d) Months until costs are equal", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Proportional relationship", statement: "A proportional relationship has the form $y = kx$ and passes through the origin." },
              { kind: "principle", name: "Equal costs", statement: "The costs are equal where the two expressions for $y$ are equal." },
            ],
            steps: [
              { part: "a", reasoning: "Compare $y = 12x$ with $y = kx$.", working: "k = 12", marks: 1, markCode: "B" },
              { part: "a", reasoning: "$k$ is the unit rate: the cost per month at Gym A is $\\$12$.", marks: 1, markCode: "R" },
              { part: "b", reasoning: "When $x = 0$, Gym B's cost is $\\$20$, not $\\$0$, so its graph does not pass through the origin.", working: "y = 10(0) + 20 = 20", marks: 1, markCode: "R" },
              { part: "b", reasoning: "The ratios are not constant: for $x = 1$, $y = 30$ and $\\frac{y}{x} = 30$; for $x = 2$, $y = 40$ and $\\frac{y}{x} = 20$.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Substitute $x = 7$ into $y = 12x$.", working: "12 \\times 7 = 84", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Set the two costs equal.", working: "12x = 10x + 20", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Subtract $10x$ from both sides.", working: "2x = 20", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Divide by $2$. Check: $12(10) = 120$ and $10(10) + 20 = 120$.", working: "x = 10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $k = 12$: Gym A costs $\\$12$ per month (b) The cost is $\\$20$ when $x = 0$ and $\\frac{y}{x}$ is not constant (c) $\\$84$ (d) $10$ months",
            commonErrors: ["Claiming Gym B is proportional because its graph is a straight line.", "Solving $12x = 10x + 20$ incorrectly as $x = 20 \\div 22$."],
            examinerNote: "In (b) accept any correct test: nonzero value at $x = 0$, unequal ratios, or a graph that misses the origin.",
          },
        },
      ],
    },
  ],
};
