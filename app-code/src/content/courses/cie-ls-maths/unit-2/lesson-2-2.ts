import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cilm-u2-lesson-2-2",
  code: "2-2",
  title: "Rates, speed and direct proportion",
  goal: "I CAN calculate speed, rates and direct proportion using unit rates and the multiplier method.",
  standards: ["0862 Ratio and proportion: rates, speed, direct proportion"],
  vocabulary: [
    { term: "Rate", definition: "A quantity per unit of another — km per hour, litres per minute." },
    { term: "Unit rate", definition: "The rate for ONE unit — $120\\ \\text{km}$ in $2$ hours is $60\\ \\text{km/h}$." },
    { term: "Speed", definition: "$\\text{speed} = \\frac{\\text{distance}}{\\text{time}}$, usually in km/h or m/s." },
    { term: "Direct proportion", definition: "$y = kx$ — doubling $x$ doubles $y$." },
    { term: "Constant of proportionality", definition: "The value $k$ in $y=kx$ — the rate of change." },
    { term: "Density", definition: "$\\frac{\\text{mass}}{\\text{volume}}$ — how tightly matter is packed." },
  ],
  concepts: [
    {
      id: "cilm-u2-rates-speed",
      title: "Rates and speed",
      skill: "Calculate unit rates, speed, distance and time in real contexts.",
      lesson: {
        sections: [
          {
            heading: "Unit rates",
            body: "Divide to find the rate for one unit:\n\n- $240\\ \\text{km}$ in $4$ hours → $60\\ \\text{km/h}$\n- $\\pounds18$ for $6$ apples → $\\pounds3$ per apple\n\nUnit rates make comparison easy: which is better value?",
          },
          {
            heading: "Speed triangle",
            body: "$$\\text{speed} = \\frac{\\text{distance}}{\\text{time}}$$\n\nRearrange as needed:\n- distance $=$ speed $\\times$ time\n- time $=$ distance $\\div$ speed\n\nUnits must match: km/h with hours, m/s with seconds.",
          },
          {
            heading: "Other rates",
            body: "- **Density**: mass $\\div$ volume (g/cm³).\n- **Flow rate**: litres per minute.\n- **Wage rate**: money per hour.\n\nAll follow: quantity $\\div$ time or quantity $\\div$ unit.",
          },
        ],
        keyFormulas: [
          { name: "Speed", statement: "$s = \\frac{d}{t}$; $d = s \\times t$; $t = \\frac{d}{s}$." },
          { name: "Unit rate", statement: "$\\text{rate} = \\frac{\\text{quantity}}{\\text{units}}$." },
        ],
        workedExample: {
          problem: "A car travels $180\\ \\text{km}$ in $2.5$ hours. Find its average speed, then the distance covered in $4$ hours at the same speed.",
          solution: "Speed $=180\\div2.5=72\\ \\text{km/h}$. Distance in $4$ h $=72\\times4=288\\ \\text{km}$.",
        },
      },
      questions: [
        {
          id: "cilm-u2-rt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A train travels $240\\ \\text{km}$ in $3$ hours. What is its average speed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$60\\ \\text{km/h}$" },
              { id: "b", text: "$80\\ \\text{km/h}$" },
              { id: "c", text: "$720\\ \\text{km/h}$" },
              { id: "d", text: "$0.8\\ \\text{km/h}$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Speed", statement: "$\\text{speed}=\\text{distance}\\div\\text{time}=240\\div3=80$ km/h." },
            ],
            steps: [
              { reasoning: "$240\\div3=80\\ \\text{km/h}$.", working: "240\\div3=80", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $80\\ \\text{km/h}$",
            commonErrors: ["Choosing (a) — $240\\div4$; time is $3$ hours."],
          },
        },
        {
          id: "cilm-u2-rt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is better value: $6$ eggs for $\\pounds2.40$ or $10$ eggs for $\\pounds3.80$?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Unit rate comparison", statement: "Compare price per egg — the lower unit rate is better value." },
            ],
            steps: [
              { reasoning: "Option 1: $2.40\\div6=\\pounds0.40$ per egg.", working: "2.40\\div6=0.40", marks: 1, markCode: "M" },
              { reasoning: "Option 2: $3.80\\div10=\\pounds0.38$ per egg — cheaper per egg.", working: "3.80\\div10=0.38", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$ eggs for $\\pounds3.80$ is better value ($\\pounds0.38$ vs $\\pounds0.40$ per egg).",
            commonErrors: ["Comparing total prices — $\\pounds2.40 < \\pounds3.80$ but that's fewer eggs."],
          },
        },
        {
          id: "cilm-u2-rt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A cyclist rides $45\\ \\text{km}$ in $3$ hours. How long will it take to ride $75\\ \\text{km}$ at the same speed?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speed problems", statement: "Find speed first, then rearrange for time." },
            ],
            steps: [
              { reasoning: "Speed $=45\\div3=15\\ \\text{km/h}$.", working: "\\text{speed}=15", marks: 1, markCode: "M" },
              { reasoning: "Time $=$ distance $\\div$ speed $=75\\div15$.", working: "75\\div15", marks: 1, markCode: "M" },
              { reasoning: "$=5$ hours.", marks: 1, markCode: "M" },
              { reasoning: "Check: $15\\times5=75$ ✓.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ hours",
            commonErrors: ["$75-45=30$ km ÷ $15$ km/h — scaling works only proportionally, not by difference."],
          },
        },
        {
          id: "cilm-u2-rt-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Two delivery drivers make deliveries.",
          parts: [
            { label: "a", prompt: "Driver A covers $180\\ \\text{km}$ in $3$ hours. Find A's speed.", marks: 2 },
            { label: "b", prompt: "Driver B covers $150\\ \\text{km}$ in $2.5$ hours. Find B's speed and state who is faster.", marks: 3 },
            { label: "c", prompt: "How long does Driver A take to cover $300\\ \\text{km}$?", marks: 2 },
            { label: "d", prompt: "Explain why comparing distances alone would give the wrong answer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speed comparison", statement: "Speed normalises distance by time — the fair comparison." },
            ],
            steps: [
              { part: "a", reasoning: "$180\\div3=60\\ \\text{km/h}$.", working: "\\text{A}=60", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$150\\div2.5=60\\ \\text{km/h}$.", working: "\\text{B}=60", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Same speed — neither faster.", working: "60=60", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Comparison stated correctly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$300\\div60=5$ hours.", working: "300\\div60=5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Different distances and times — $180>150$ but A also took longer; only speed is comparable.", working: "\\text{normalise by time}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $60$ km/h (b) $60$ km/h — equal speed (c) $5$ hours (d) distances/times differ; speed normalises",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "A's speed correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 3", marks: "2-3", descriptor: "B's speed + comparison correct.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Time correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Comparison explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (b) declaring A faster because $180>150$ — ignores different times."],
          },
        },
      ],
    },
    {
      id: "cilm-u2-direct-proportion",
      title: "Direct proportion",
      skill: "Recognise and use direct proportion — find the constant $k$ and apply $y=kx$.",
      lesson: {
        sections: [
          {
            heading: "What direct proportion means",
            body: "Two quantities are in direct proportion when their ratio is constant: $\\frac{y}{x}=k$, so $y=kx$. If $x$ doubles, $y$ doubles; if $x$ triples, $y$ triples.",
          },
          {
            heading: "Finding k",
            body: "Use any known pair: $k=\\frac{y}{x}$.\n\nExample: $4$ painters cover a wall in $6$ hours. Rate $=\\frac{4}{6}=\\frac{2}{3}$ painters per hour... better: work done $=$ rate $\\times$ time. If $4$ painters $\\times 6$ h is the job, one painter needs $24$ h.",
          },
          {
            heading: "Graphical view",
            body: "Direct proportion graphs are straight lines through the origin $(0,0)$. The gradient is $k$. If the line doesn't pass through origin, it's not direct proportion — there's a fixed starting value (e.g. a taxi flagfall).",
          },
        ],
        keyFormulas: [
          { name: "Direct proportion", statement: "$y = kx$ where $k = \\frac{y}{x}$ is constant." },
          { name: "Check", statement: "If $\\frac{y}{x}$ is the same for all pairs, the quantities are proportional." },
        ],
        workedExample: {
          problem: "$y$ is directly proportional to $x$. When $x=5$, $y=12$. Find $y$ when $x=8$.",
          solution: "$k=\\frac{12}{5}=2.4$. When $x=8$: $y=2.4\\times8=19.2$.",
        },
      },
      questions: [
        {
          id: "cilm-u2-dp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If $y$ is directly proportional to $x$ and $y=15$ when $x=3$, what is $k$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$5$" },
              { id: "b", text: "$12$" },
              { id: "c", text: "$45$" },
              { id: "d", text: "$0.2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Constant of proportion", statement: "$k=\\frac{y}{x}=\\frac{15}{3}=5$." },
            ],
            steps: [
              { reasoning: "$k=y/x=15/3=5$.", working: "k=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $5$",
            commonErrors: ["Choosing (c) — $15\\times3$ confuses $k$ with the product."],
          },
        },
        {
          id: "cilm-u2-dp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A recipe uses $200\\ \\text{g}$ of flour for $8$ pancakes. How much flour for $20$ pancakes? (Assume direct proportion.)",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Direct proportion application", statement: "Flour per pancake is constant — scale by ratio." },
            ],
            steps: [
              { reasoning: "Flour per pancake $=200\\div8=25\\text{g}$.", working: "200\\div8=25", marks: 1, markCode: "M" },
              { reasoning: "$20$ pancakes: $25\\times20=500\\text{g}$.", working: "25\\times20=500", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$500\\ \\text{g}$",
            commonErrors: ["$200\\times20=4000$ — must scale proportionally, not multiply by pancake count."],
          },
        },
        {
          id: "cilm-u2-dp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The cost $C$ of apples is directly proportional to weight $w$ in kg. $1.5\\ \\text{kg}$ costs $\\pounds4.50$. Find the cost of $2.4\\ \\text{kg}$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Direct proportion", statement: "Find $k$ (price per kg), then apply." },
            ],
            steps: [
              { reasoning: "$k=4.50\\div1.5=\\pounds3$ per kg.", working: "k=3", marks: 1, markCode: "M" },
              { reasoning: "$C=3\\times2.4=\\pounds7.20$.", working: "3\\times2.4=7.20", marks: 1, markCode: "M" },
              { reasoning: "Or by ratio: $\\frac{2.4}{1.5}=1.6$, so $4.50\\times1.6=7.20$.", working: "1.6\\times4.50=7.20", marks: 1, markCode: "M" },
              { reasoning: "Answer: $\\pounds7.20$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds7.20$",
            commonErrors: ["Forgetting units — answer is a cost, not a weight."],
          },
        },
        {
          id: "cilm-u2-dp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A printing shop charges for posters.",
          parts: [
            { label: "a", prompt: "5 posters cost $\\pounds12$. Assuming direct proportion, find the cost of 8 posters.", marks: 3 },
            { label: "b", prompt: "Write the formula $C = kw$ for this shop.", marks: 2 },
            { label: "c", prompt: "How many posters can be bought for $\\pounds30$?", marks: 2 },
            { label: "d", prompt: "Explain what the graph of $C$ against number of posters would look like and why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Direct proportion", statement: "$y=kx$: find $k$, apply forward and backward." },
            ],
            steps: [
              { part: "a", reasoning: "Cost per poster $=12\\div5=\\pounds2.40$.", working: "12\\div5=2.40", marks: 1, markCode: "M" },
              { part: "a", reasoning: "$8$ posters: $2.40\\times8=\\pounds19.20$.", working: "2.40\\times8=19.20", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$C=2.40n$ where $n$ is number of posters.", working: "C=2.40n", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct form.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$30\\div2.40=12.5$ — not whole; 12 posters cost $\\pounds28.80$, so max $12$.", working: "30\\div2.40=12.5", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Interpretation correct — can't buy half.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Straight line through origin — direct proportion has constant ratio $C/n=2.40$.", working: "\\text{line through (0,0)}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Reasoning correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\pounds19.20$ (b) $C=2.40n$ (c) $12$ posters ($12.5$ not whole) (d) straight line through origin",
            levels: [
              { level: "Level 3", marks: "2-3", descriptor: "Cost correct.", part: "a" },
              { level: "Level 2", marks: "1", descriptor: "Partial.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Formula correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Count interpreted correctly.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Graph described correctly.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (c) answering $12.5$ posters — must interpret in context."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cilm-u2-rates-notes",
      title: "Rates, speed and proportion — revision notes",
      summary: "Unit rates, speed formula, direct proportion and constant k.",
      sections: [
        {
          heading: "Rates and speed",
          body: "Speed $=d/t$; rearrange for distance or time. Unit rate = quantity $\\div$ units — makes comparisons fair.",
        },
        {
          heading: "Direct proportion",
          body: "$y=kx$ — ratio $y/x$ constant. Find $k$ from one pair, apply to others. Graph is a straight line through origin. Non-integer answers need context interpretation.",
        },
      ],
    },
  ],
};
