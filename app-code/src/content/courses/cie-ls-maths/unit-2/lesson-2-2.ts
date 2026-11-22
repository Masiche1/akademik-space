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
              { id: "a", text: "$0.8\\ \\text{km/h}$" },
              { id: "b", text: "$720\\ \\text{km/h}$" },
              { id: "c", text: "$80\\ \\text{km/h}$" },
              { id: "d", text: "$60\\ \\text{km/h}$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Speed", statement: "$\\text{speed}=\\text{distance}\\div\\text{time}=240\\div3=80$ km/h." },
            ],
            steps: [
              { reasoning: "$240\\div3=80\\ \\text{km/h}$.", working: "240\\div3=80", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $80\\ \\text{km/h}$",
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
        {
          id: "cilm-u2-rt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A car travels $150\\ \\text{km}$ in $2.5$ hours. What is its average speed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$60\\ \\text{km/h}$" },
              { id: "b", text: "$55\\ \\text{km/h}$" },
              { id: "c", text: "$62.5\\ \\text{km/h}$" },
              { id: "d", text: "$375\\ \\text{km/h}$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Speed", statement: "$150\\div2.5=60$ km/h." },
            ],
            steps: [
              { reasoning: "$150\\div2.5=60\\ \\text{km/h}$.", working: "150\\div2.5=60", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $60\\ \\text{km/h}$",
            commonErrors: ["Choosing (b) — multiplying distance by time instead of dividing."],
          },
        },
        {
          id: "cilm-u2-rt-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A cyclist travels $90\\ \\text{km}$ at $45\\ \\text{km/h}$. How long does the journey take?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4$ hours" },
              { id: "b", text: "$2$ hours" },
              { id: "c", text: "$1.5$ hours" },
              { id: "d", text: "$45$ minutes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Speed triangle", statement: "Time $=$ distance $\\div$ speed $=90\\div45$." },
            ],
            steps: [
              { reasoning: "$90\\div45=2$ hours.", working: "90\\div45=2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $2$ hours",
            commonErrors: ["Choosing (c) — dividing 90 by 60 instead of by the speed."],
          },
        },
        {
          id: "cilm-u2-rt-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is better value: $4$ bags of crisps for $\\pounds6$ or $7$ bags for $\\pounds10$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cannot tell" },
              { id: "b", text: "The $4$-bag pack" },
              { id: "c", text: "The $7$-bag pack" },
              { id: "d", text: "They are equal value" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Unit rate comparison", statement: "Per bag: $\\pounds1.50$ vs $\\pounds1.43$ — the 7-bag pack is cheaper." },
            ],
            steps: [
              { reasoning: "$6\\div4=1.50$; $10\\div7\\approx1.43$ — lower unit rate wins.", working: "1.50 \\text{ vs } 1.43", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The $7$-bag pack ($\\approx\\pounds1.43$ vs $\\pounds1.50$ per bag)",
            commonErrors: ["Choosing (a) — lower total price does not mean lower unit price."],
          },
        },
        {
          id: "cilm-u2-rt-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A metal block has mass $240\\ \\text{g}$ and volume $60\\ \\text{cm}^3$. Find its density in $\\text{g/cm}^3$.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$14\\,400\\ \\text{g/cm}^3$" },
              { id: "b", text: "$180\\ \\text{g/cm}^3$" },
              { id: "c", text: "$4\\ \\text{g/cm}^3$" },
              { id: "d", text: "$0.25\\ \\text{g/cm}^3$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Density", statement: "Density $=$ mass $\\div$ volume $=240\\div60$." },
            ],
            steps: [
              { reasoning: "$240\\div60=4\\ \\text{g/cm}^3$.", working: "240\\div60=4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $4\\ \\text{g/cm}^3$",
            commonErrors: ["Choosing (b) — dividing volume by mass instead of mass by volume."],
          },
        },
        {
          id: "cilm-u2-rt-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A delivery van travels $200\\ \\text{km}$ in $2$ hours, then $100\\ \\text{km}$ in $1$ hour. What is its average speed for the whole journey?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$150\\ \\text{km/h}$" },
              { id: "b", text: "$75\\ \\text{km/h}$" },
              { id: "c", text: "$125\\ \\text{km/h}$" },
              { id: "d", text: "$100\\ \\text{km/h}$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Average speed", statement: "Total distance $\\div$ total time $=300\\div3$." },
            ],
            steps: [
              { reasoning: "Total distance $300$ km, total time $3$ h → $300\\div3=100$ km/h.", working: "300\\div3=100", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** $100\\ \\text{km/h}$",
            commonErrors: ["Choosing (d) — averaging the two speeds is wrong; use total distance and total time."],
          },
        },
        {
          id: "cilm-u2-rt-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A car travels at a steady $55\\ \\text{km/h}$ for $3.5$ hours. How far does it travel?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 192.5, unit: "km" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Distance", statement: "Distance $=$ speed $\\times$ time." },
            ],
            steps: [
              { reasoning: "$55\\times3.5=192.5$ km.", working: "55\\times3.5=192.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$192.5\\ \\text{km}$",
            commonErrors: ["$55+3.5$ or $55\\div3.5$ — distance needs multiplication."],
          },
        },
        {
          id: "cilm-u2-rt-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) Find the speed of a train that travels $240\\ \\text{km}$ in $3$ hours. (b) How long does it take to travel $350\\ \\text{km}$ at $70\\ \\text{km/h}$?",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 80, unit: "km/h" }, { label: "(b)", answer: 5, unit: "hours" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Speed", statement: "$s=d/t$; $t=d/s$." },
            ],
            steps: [
              { reasoning: "(a) $240\\div3=80$ km/h.", working: "240\\div3=80", marks: 1, markCode: "A" },
              { reasoning: "(b) $350\\div70=5$ hours.", working: "350\\div70=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $80$ km/h (b) $5$ hours",
            commonErrors: ["In (b) multiplying $350\\times70$ — time is distance divided by speed."],
          },
        },
        {
          id: "cilm-u2-rt-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A tap fills a tank with $45$ litres of water in $6$ minutes. What is the flow rate in litres per minute?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 7.5, unit: "litres/min" }] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Rate", statement: "Rate $=$ quantity $\\div$ units." },
            ],
            steps: [
              { reasoning: "$45\\div6=7.5$ litres per minute.", working: "45\\div6=7.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7.5$ litres/min",
            commonErrors: ["$0.133$ — dividing minutes by litres inverts the rate."],
          },
        },
        {
          id: "cilm-u2-rt-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "A cyclist covers $40\\ \\text{km}$ in $2.5$ hours. (a) Find her average speed. (b) How long would $64\\ \\text{km}$ take at the same speed?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speed problems", statement: "Find speed, then rearrange for time." },
            ],
            steps: [
              { reasoning: "Speed $=40\\div2.5=16$ km/h.", working: "40\\div2.5=16", marks: 1, markCode: "M" },
              { reasoning: "Time $=64\\div16=4$ hours.", working: "64\\div16=4", marks: 1, markCode: "M" },
              { reasoning: "Answers: $16$ km/h; $4$ hours.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$16\\ \\text{km/h}$; $4$ hours",
            commonErrors: ["$64-40=24$ km ÷ $16$ — difference is not proportional; use the speed."],
          },
        },
        {
          id: "cilm-u2-rt-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is better value: $500\\ \\text{g}$ of rice for $\\pounds2.40$ or $750\\ \\text{g}$ for $\\pounds3.90$? Justify your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Unit rate comparison", statement: "Compare price per 100 g." },
            ],
            steps: [
              { reasoning: "Deal 1: $2.40\\div5=\\pounds0.48$ per 100 g.", working: "2.40\\div5=0.48", marks: 1, markCode: "M" },
              { reasoning: "Deal 2: $3.90\\div7.5=\\pounds0.52$ per 100 g.", working: "3.90\\div7.5=0.52", marks: 1, markCode: "M" },
              { reasoning: "Deal 1 is cheaper per 100 g — better value despite smaller pack.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$500\\ \\text{g}$ for $\\pounds2.40$ is better value ($\\pounds0.48$ vs $\\pounds0.52$ per 100 g)",
            commonErrors: ["Choosing the larger pack because it 'looks' better value — unit price decides."],
          },
        },
        {
          id: "cilm-u2-rt-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A bus journey has two parts: $120\\ \\text{km}$ in $1.5$ hours, then $80\\ \\text{km}$ in $1$ hour. Find the average speed for the whole journey.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Average speed", statement: "Total distance $\\div$ total time — not the average of the two speeds." },
            ],
            steps: [
              { reasoning: "Total distance $=120+80=200$ km; total time $=1.5+1=2.5$ h.", working: "200 \\text{ km},\\ 2.5\\text{ h}", marks: 1, markCode: "M" },
              { reasoning: "Average speed $=200\\div2.5$.", working: "200\\div2.5", marks: 1, markCode: "M" },
              { reasoning: "$=80$ km/h.", marks: 1, markCode: "M" },
              { reasoning: "Check: speeds were $80$ and $80$ km/h — consistent.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80\\ \\text{km/h}$",
            commonErrors: ["Averaging $80$ and $80$ works here only coincidentally; method must be total $\\div$ total."],
          },
        },
        {
          id: "cilm-u2-rt-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A train travels between two cities.",
          parts: [
            { label: "a", prompt: "It covers $180\\ \\text{km}$ in $2$ hours. Find its speed.", marks: 2 },
            { label: "b", prompt: "How long would $270\\ \\text{km}$ take at this speed?", marks: 2 },
            { label: "c", prompt: "The return journey is $240\\ \\text{km}$ and takes $3$ hours. Find the average speed for the return.", marks: 2 },
            { label: "d", prompt: "Explain why 'average speed' is not simply the speed at every moment.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Speed in context", statement: "$s=d/t$; rearrange for time; average = total/total." },
            ],
            steps: [
              { part: "a", reasoning: "$180\\div2=90$ km/h.", working: "180\\div2=90", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$270\\div90=3$ hours.", working: "270\\div90=3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$240\\div3=80$ km/h.", working: "240\\div3=80", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Speed varies during the journey (stops, traffic); average = total distance $\\div$ total time.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $90$ km/h (b) $3$ hours (c) $80$ km/h (d) speed varies; average uses totals",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Speed correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Time correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1-2", descriptor: "Return speed correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1", descriptor: "Explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Missing.", part: "d" },
            ],
            commonErrors: ["In (b) computing $270-180=90$ km then dividing — scale by speed, not difference."],
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
              { id: "a", text: "$0.2$" },
              { id: "b", text: "$12$" },
              { id: "c", text: "$5$" },
              { id: "d", text: "$45$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Constant of proportion", statement: "$k=\\frac{y}{x}=\\frac{15}{3}=5$." },
            ],
            steps: [
              { reasoning: "$k=y/x=15/3=5$.", working: "k=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $5$",
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
        {
          id: "cilm-u2-dp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$y$ is directly proportional to $x$. When $x=4$, $y=20$. What is the value of $k$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$0.2$" },
              { id: "b", text: "$5$" },
              { id: "c", text: "$80$" },
              { id: "d", text: "$16$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Constant of proportion", statement: "$k=\\frac{y}{x}=\\frac{20}{4}=5$." },
            ],
            steps: [
              { reasoning: "$k=20\\div4=5$.", working: "k=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $5$",
            commonErrors: ["Choosing (b) — $20\\times4$ confuses $k$ with the product."],
          },
        },
        {
          id: "cilm-u2-dp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$y$ is directly proportional to $x$. When $x=6$, $y=9$. What is $y$ when $x=10$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$15$" },
              { id: "b", text: "$13.5$" },
              { id: "c", text: "$54$" },
              { id: "d", text: "$10$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Direct proportion", statement: "$k=\\frac{9}{6}=1.5$; $y=1.5\\times10=15$." },
            ],
            steps: [
              { reasoning: "$k=1.5$; $y=1.5\\times10=15$.", working: "1.5\\times10=15", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $15$",
            commonErrors: ["Choosing (b) — $9\\times10$ forgets to normalise by $x=6$ first."],
          },
        },
        {
          id: "cilm-u2-dp-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is NOT an example of direct proportion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$y=\\frac{x}{3}$" },
              { id: "b", text: "$y=2x+5$" },
              { id: "c", text: "$y=0.5x$" },
              { id: "d", text: "$y=4x$" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Direct proportion", statement: "$y=kx$ only — no added constant." },
            ],
            steps: [
              { reasoning: "$y=2x+5$ has a fixed $+5$ — the graph misses the origin, so not direct proportion.", working: "y=2x+5 \\text{ has intercept}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $y=2x+5$",
            commonErrors: ["Choosing (b) — $y=\\frac{x}{3}$ is $y=kx$ with $k=\\frac{1}{3}$."],
          },
        },
        {
          id: "cilm-u2-dp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Fabric costs $\\pounds4$ per metre. How much does $5$ metres cost?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\pounds24$" },
              { id: "b", text: "$\\pounds1.25$" },
              { id: "c", text: "$\\pounds20$" },
              { id: "d", text: "$\\pounds9$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Direct proportion application", statement: "Cost $=4\\times5=\\pounds20$." },
            ],
            steps: [
              { reasoning: "$4\\times5=\\pounds20$.", working: "4\\times5=20", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** $\\pounds20$",
            commonErrors: ["Choosing (b) — adding instead of multiplying the rate."],
          },
        },
        {
          id: "cilm-u2-dp-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "$3\\ \\text{kg}$ of apples costs $\\pounds4.80$. Assuming direct proportion, what does $7\\ \\text{kg}$ cost?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$\\pounds11.20$" },
              { id: "b", text: "$\\pounds8.40$" },
              { id: "c", text: "$\\pounds7.20$" },
              { id: "d", text: "$\\pounds33.60$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Direct proportion", statement: "Price per kg $=1.60$; $7\\times1.60=11.20$." },
            ],
            steps: [
              { reasoning: "$k=4.80\\div3=1.60$; $C=1.60\\times7=\\pounds11.20$.", working: "1.60\\times7=11.20", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** $\\pounds11.20$",
            commonErrors: ["Choosing (b) — scaling by $\\frac{7}{3}$ incorrectly applied."],
          },
        },
        {
          id: "cilm-u2-dp-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "$y$ is directly proportional to $x$. When $x=6$, $y=24$. Find $y$ when $x=10$.",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 40 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Direct proportion", statement: "$k=4$; $y=4\\times10=40$." },
            ],
            steps: [
              { reasoning: "$k=24\\div6=4$; $y=4\\times10=40$.", working: "4\\times10=40", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40$",
            commonErrors: ["$24+4\\times4$ — proportional means multiply by ratio $\\frac{10}{6}$."],
          },
        },
        {
          id: "cilm-u2-dp-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "$y$ is directly proportional to $x$. When $x=2$, $y=14$. (a) Find $y$ when $x=7$. (b) Find $x$ when $y=35$.",
          response: { type: "numeric", parts: [{ label: "(a)", answer: 49 }, { label: "(b)", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Direct proportion", statement: "$k=7$; use $y=kx$ forward and backward." },
            ],
            steps: [
              { reasoning: "(a) $k=14\\div2=7$; $y=7\\times7=49$.", working: "7\\times7=49", marks: 1, markCode: "A" },
              { reasoning: "(b) $35=7x$ → $x=5$.", working: "35\\div7=5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $49$ (b) $x=5$",
            commonErrors: ["In (b) answering $y=35$ — the question asks for $x$."],
          },
        },
        {
          id: "cilm-u2-dp-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A car uses $8$ litres of fuel for every $100\\ \\text{km}$. Assuming direct proportion, how much fuel does it use for $250\\ \\text{km}$?",
          response: { type: "numeric", parts: [{ label: "Answer", answer: 20, unit: "litres" }] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Direct proportion application", statement: "Fuel per km is constant: $8\\times2.5=20$ litres." },
            ],
            steps: [
              { reasoning: "$250\\div100=2.5$; $8\\times2.5=20$ litres.", working: "8\\times2.5=20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$ litres",
            commonErrors: ["$8\\times250$ — must scale by the ratio of distances, not multiply directly."],
          },
        },
        {
          id: "cilm-u2-dp-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "The cost $C$ of printing $n$ posters is $C = 2.5n$ pounds.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Formula in context", statement: "Substitute for cost; rearrange to find quantity." },
            ],
            steps: [
              { reasoning: "Cost of $12$ posters: $C=2.5\\times12=\\pounds30$.", working: "2.5\\times12=30", marks: 1, markCode: "M" },
              { reasoning: "Posters for $\\pounds60$: $60=2.5n$ → $n=24$.", working: "60\\div2.5=24", marks: 1, markCode: "M" },
              { reasoning: "Answers: $\\pounds30$; $24$ posters.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\pounds30$; $24$ posters",
            commonErrors: ["In part (b) dividing by 2.5 incorrectly or forgetting $n$ must be whole."],
          },
        },
        {
          id: "cilm-u2-dp-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "A printer uses $3$ sheets of paper for each booklet. How many sheets are needed for $25$ booklets? Explain why this is direct proportion.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Direct proportion", statement: "Sheets per booklet constant → sheets $=3\\times25$; ratio sheets/booklets $=3$ always." },
            ],
            steps: [
              { reasoning: "Sheets $=3\\times25=75$.", working: "3\\times25=75", marks: 1, markCode: "M" },
              { reasoning: "Sheets $=3n$ where $n$ is booklets — of form $y=kx$ with $k=3$ constant.", working: "sheets=3n", marks: 1, markCode: "M" },
              { reasoning: "Answer: $75$ sheets; direct proportion because the ratio is constant.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$75$ sheets; $y=kx$ form with constant $k=3$",
            commonErrors: ["Adding $3+25$ — proportion requires multiplication by the constant rate."],
          },
        },
        {
          id: "cilm-u2-dp-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Paint coverage is directly proportional to area. $2$ litres of paint cover $10\\ \\text{m}^2$.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Direct proportion", statement: "Coverage rate $=5\\text{ m}^2$ per litre; scale for target area." },
            ],
            steps: [
              { reasoning: "Coverage per litre $=10\\div2=5\\text{ m}^2$/litre.", working: "10\\div2=5", marks: 1, markCode: "M" },
              { reasoning: "For $35\\text{ m}^2$: litres $=35\\div5=7$.", working: "35\\div5=7", marks: 1, markCode: "M" },
              { reasoning: "Paint comes in $5$-litre cans — need $2$ cans ($10$ litres).", working: "2 \\text{ cans}", marks: 1, markCode: "M" },
              { reasoning: "Answers: $7$ litres needed; buy $2$ cans.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$ litres; $2$ cans of $5$ litres",
            commonErrors: ["Answering $7$ litres as the purchase — paint is sold in cans, must round up."],
          },
        },
        {
          id: "cilm-u2-dp-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A courier charges $\\pounds4$ per parcel delivered.",
          parts: [
            { label: "a", prompt: "Find the cost of delivering $15$ parcels.", marks: 2 },
            { label: "b", prompt: "How many parcels can be delivered for $\\pounds100$?", marks: 2 },
            { label: "c", prompt: "Write a formula connecting cost $C$ and number of parcels $n$.", marks: 1 },
            { label: "d", prompt: "Explain why the graph of $C$ against $n$ is a straight line through the origin.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Direct proportion", statement: "$C=4n$ — constant ratio $C/n=4$ gives a line through origin." },
            ],
            steps: [
              { part: "a", reasoning: "$C=4\\times15=\\pounds60$.", working: "4\\times15=60", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$100=4n$ → $n=25$ parcels.", working: "100\\div4=25", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$C=4n$.", working: "C=4n", marks: 1, markCode: "A" },
              { part: "d", reasoning: "$C=4n$ is $y=kx$ with $k=4$; when $n=0$, $C=0$ — passes through origin.", working: "y=kx,\\ k=4", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Correct explanation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $\\pounds60$ (b) $25$ parcels (c) $C=4n$ (d) $y=kx$ through origin",
            levels: [
              { level: "Level 2", marks: "1-2", descriptor: "Cost correct.", part: "a" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              { level: "Level 2", marks: "1-2", descriptor: "Count correct.", part: "b" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "b" },
              { level: "Level 2", marks: "1", descriptor: "Formula correct.", part: "c" },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "c" },
              { level: "Level 2", marks: "1-2", descriptor: "Graph explained.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "Vague.", part: "d" },
            ],
            commonErrors: ["In (d) saying 'straight line' without mentioning it must pass through the origin."],
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
