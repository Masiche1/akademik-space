import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "pypm-u3-lesson-3-2",
  code: "3-2",
  title: "Chance and Probability",
  goal: "I CAN describe how likely events are — certain, likely, unlikely, impossible — and use spinners and experiments.",
  standards: [
    "PYP Mathematics: Probability",
    "PYP transdisciplinary theme: How the World Works",
    "PYP transdisciplinary theme: Sharing the Planet",
  ],
  vocabulary: [
    { term: "Chance", definition: "How likely something is to happen — from impossible to certain." },
    { term: "Certain", definition: "Will definitely happen — $100\\%$ chance." },
    { term: "Impossible", definition: "Can never happen — $0\\%$ chance." },
    { term: "Likely / Unlikely", definition: "Probably will / probably will not happen." },
    { term: "Even chance", definition: "Exactly half and half — like flipping a coin." },
    { term: "Experiment", definition: "Trying something many times to see how often an event happens." },
  ],
  concepts: [
    {
      id: "pypm-u3l2-c1-likelihood",
      title: "How likely? Describing chance",
      skill: "Order events from impossible to certain and describe likelihood.",
      lesson: {
        sections: [
          {
            heading: "The chance scale",
            body: "We can order events by how likely they are. **Impossible** ($0\\%$): the sun will rise tomorrow at midnight — cannot happen. **Unlikely**: it will snow in the desert — possible but rare. **Even chance**: a coin lands heads — half and half. **Likely**: it will rain this week — probably happens. **Certain** ($100\\%$): you will breathe today — definitely happens.",
          },
          {
            heading: "Predicting with likelihood",
            body: "Likelihood uses what we know. A bag with $9$ red counters and $1$ blue: picking blue is **unlikely** but possible. Picking red is **likely**. An empty bag of counters: picking one is **impossible**. Events that depend on chance — dice, coins, spinners — can be described but not predicted exactly.",
          },
        ],
        keyFormulas: [
          { name: "Likelihood scale", statement: "Impossible → Unlikely → Even chance → Likely → Certain" },
          { name: "Chance percent", statement: "Certain $= 100\\%$, Impossible $= 0\\%$, Even chance $= 50\\%$" },
        ],
        workedExample: {
          problem: "A bag has only blue balls. Is picking a red ball possible?",
          solution: "Impossible — there are no red balls in the bag, so a red ball can never be picked.",
        },
      },
      questions: [
        {
          id: "pypm-q-u3l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which event is IMPOSSIBLE?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It will rain tomorrow" },
              { id: "b", text: "A dog will fly to the moon by itself" },
              { id: "c", text: "You will eat lunch today" },
              { id: "d", text: "You might win a prize" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Impossible", statement: "Impossible events cannot happen — $0\\%$ chance." },
            ],
            steps: [
              { reasoning: "A dog flying to the moon by itself cannot happen.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A dog will fly to the moon by itself",
            commonErrors: ["Choosing 'rain tomorrow' — rain is possible, just not certain."],
          },
        },
        {
          id: "pypm-q-u3l2c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A spinner has 4 equal sections: 3 red and 1 blue. Is landing on blue likely or unlikely?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Certain" },
              { id: "b", text: "Impossible" },
              { id: "c", text: "Likely" },
              { id: "d", text: "Unlikely" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Likelihood from parts", statement: "Fewer equal parts = less likely; blue is $1$ of $4$ parts." },
            ],
            steps: [
              { reasoning: "Blue is only $1$ of $4$ equal sections — a small chance.", marks: 1, markCode: "M" },
              { reasoning: "Small chance but possible = unlikely.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Unlikely",
            commonErrors: ["Choosing 'impossible' — blue can land, it is just rare."],
          },
        },
        {
          id: "pypm-q-u3l2c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Put these events in order from MOST likely to LEAST likely: (1) a coin lands heads, (2) it snows in the Sahara, (3) the sun rises tomorrow, (4) you get an A on a test you studied hard for.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Likelihood ordering", statement: "Order from certain/likely to unlikely/impossible." },
            ],
            steps: [
              { reasoning: "Sun rising tomorrow is certain — it always happens.", marks: 1, markCode: "M" },
              { reasoning: "Getting an A after hard study is likely; coin heads is even chance.", marks: 1, markCode: "M" },
              { reasoning: "Snow in the Sahara is very unlikely — cold desert, almost impossible.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(3) certain → (4) likely → (1) even chance → (2) very unlikely",
            commonErrors: ["Ranking coin heads above studying — even chance is $50\\%$, studying makes A more likely."],
          },
        },
        {
          id: "pypm-q-u3l2c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A bag contains counters: $8$ red, $4$ blue, $2$ green, $6$ yellow.",
          parts: [
            { label: "a", prompt: "Is picking a green counter likely or unlikely? Explain.", marks: 2 },
            { label: "b", prompt: "Is picking a yellow counter more or less likely than green? Explain.", marks: 2 },
            { label: "c", prompt: "Could you pick a purple counter? What is this called?", marks: 1 },
            { label: "d", prompt: "If you pick one counter without looking, which colour are you MOST likely to get? Explain.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Likelihood and parts", statement: "More counters of a colour = more likely; zero counters = impossible." },
            ],
            steps: [
              { part: "a", reasoning: "Green has only $2$ of $20$ counters — a small share.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "So picking green is unlikely.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Yellow has $6$ counters vs green's $2$ — more yellow means more likely.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Yellow is more likely than green.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "No — impossible, since there are no purple counters.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Red has the most counters ($8$ of $20$).", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Most counters = biggest chance, so red is most likely.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) unlikely — only 2 of 20 (b) yellow more likely — 6 vs 2 (c) impossible (d) red — most counters",
            commonErrors: ["In (d), picking the colour you like — likelihood depends on count, not preference."],
          },
        },
        {
          id: "pypm-q-u3l2c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which event is IMPOSSIBLE?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "You will have lunch today" },
              { id: "b", text: "It will rain this afternoon" },
              { id: "c", text: "You might get a new pencil" },
              { id: "d", text: "A fish will fly out of the water by itself" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Impossible", statement: "Impossible events cannot happen — $0\\%$ chance." },
            ],
            steps: [
              { reasoning: "A fish flying out of water by itself cannot happen.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** A fish will fly out of the water by itself",
            commonErrors: ["Choosing 'rain this afternoon' — rain is possible."],
          },
        },
        {
          id: "pypm-q-u3l2c1-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A bag has $4$ counters: $2$ red and $2$ blue. How many counters are red?",
          response: { type: "numeric", parts: [{ label: "Red counters", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Counting counters", statement: "The count of each colour decides its likelihood." },
            ],
            steps: [
              { reasoning: "There are $2$ red counters.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$2$",
            commonErrors: ["Answering $4$ — that is the total, not just red."],
          },
        },
        {
          id: "pypm-q-u3l2c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which event is CERTAIN to happen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A monkey might fly past the window" },
              { id: "b", text: "It will snow tomorrow" },
              { id: "c", text: "You will sleep tonight" },
              { id: "d", text: "You might win a lottery" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Certain", statement: "Certain events will definitely happen — $100\\%$ chance." },
            ],
            steps: [
              { reasoning: "Everyone sleeps at night — it is certain (barring illness).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** You will sleep tonight",
            commonErrors: ["Choosing 'snow tomorrow' — possible but not certain."],
          },
        },
        {
          id: "pypm-q-u3l2c1-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A spinner has $8$ equal sections but only $1$ is gold. Landing on gold is most likely...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Likely" },
              { id: "b", text: "Certain" },
              { id: "c", text: "Unlikely" },
              { id: "d", text: "Impossible" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Likelihood from parts", statement: "One of eight equal sections is a small chance — unlikely." },
            ],
            steps: [
              { reasoning: "Gold is $1$ of $8$ sections — possible but rare = unlikely.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Unlikely",
            commonErrors: ["Choosing 'impossible' — gold CAN land, it is just rare."],
          },
        },
        {
          id: "pypm-q-u3l2c1-9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A bag has $9$ red counters and $1$ blue counter. Is picking the blue counter likely or unlikely?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Impossible" },
              { id: "b", text: "Likely" },
              { id: "c", text: "Unlikely" },
              { id: "d", text: "Even chance" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Likelihood and counts", statement: "Blue is only $1$ of $10$ counters — a small chance." },
            ],
            steps: [
              { reasoning: "Blue is $1$ out of $10$ counters — possible but rare.", marks: 1, markCode: "M" },
              { reasoning: "Answer: unlikely.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Unlikely",
            commonErrors: ["Choosing 'impossible' — there IS a blue counter, so it can be picked."],
          },
        },
        {
          id: "pypm-q-u3l2c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Put these in order from MOST likely to LEAST likely: (1) flipping a coin lands heads, (2) it snows in the desert, (3) the sun rises tomorrow.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$3, 1, 2$" },
              { id: "b", text: "$2, 1, 3$" },
              { id: "c", text: "$3, 2, 1$" },
              { id: "d", text: "$1, 3, 2$" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Likelihood ordering", statement: "Certain > even chance > unlikely." },
            ],
            steps: [
              { reasoning: "Sun rising is certain ($3$ first); coin heads is even chance ($1$ second); desert snow is very unlikely ($2$ last).", marks: 1, markCode: "M" },
              { reasoning: "Order: $3, 1, 2$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $3, 1, 2$",
            commonErrors: ["Putting coin heads first — even chance is less than certain."],
          },
        },
        {
          id: "pypm-q-u3l2c1-11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A spinner has $6$ equal sections: $4$ green and $2$ yellow. How many sections are green?",
          response: { type: "numeric", parts: [{ label: "Green sections", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Spinner sections", statement: "More sections of a colour = more likely that colour." },
            ],
            steps: [
              { reasoning: "There are $4$ green sections.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
            commonErrors: ["Answering $6$ — that is all sections, not just green."],
          },
        },
        {
          id: "pypm-q-u3l2c1-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between 'likely' and 'unlikely' events, giving one example of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Likely vs unlikely", statement: "Likely = probably happens; unlikely = probably does not but still possible." },
            ],
            steps: [
              { reasoning: "Likely: a big share of the chance — e.g. picking red from a bag with mostly red counters.", marks: 1, markCode: "M" },
              { reasoning: "Unlikely: a small share but possible — e.g. picking blue from $9$ red $+ 1$ blue.", marks: 1, markCode: "M" },
              { reasoning: "Neither is certain or impossible — both can happen, just with different chances.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Likely = big chance; unlikely = small chance but possible.",
            commonErrors: ["Calling unlikely events impossible — they can still happen."],
          },
        },
        {
          id: "pypm-q-u3l2c1-13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A bag has $3$ blue counters and $1$ red counter. How many counters are in the bag altogether?",
          response: { type: "numeric", parts: [{ label: "Total counters", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Total counters", statement: "Total = sum of all colours." },
            ],
            steps: [
              { reasoning: "$3 + 1 = 4$ counters.", working: "3+1=4", marks: 1, markCode: "M" },
              { reasoning: "Answer: $4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
            commonErrors: ["Answering $3$ — forgetting the red counter."],
          },
        },
        {
          id: "pypm-q-u3l2c1-14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A bag has counters: $5$ yellow, $2$ green, $1$ purple, $8$ red. Which colour are you MOST likely to pick?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Green" },
              { id: "b", text: "Yellow" },
              { id: "c", text: "Red" },
              { id: "d", text: "Purple" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Likelihood and counts", statement: "Most counters = most likely." },
            ],
            steps: [
              { reasoning: "Red has $8$ counters — the most of any colour.", marks: 1, markCode: "M" },
              { reasoning: "More counters = bigger chance, so red is most likely.", marks: 1, markCode: "M" },
              { reasoning: "Answer: red.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Red",
            commonErrors: ["Picking purple — only $1$ counter, very unlikely."],
          },
        },
        {
          id: "pypm-q-u3l2c1-15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A spinner has $8$ equal sections: $3$ yellow, $2$ blue, $2$ green, $1$ red. How many sections are NOT yellow?",
          response: { type: "numeric", parts: [{ label: "Non-yellow sections", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Spinner sections", statement: "Non-yellow sections $= 8 - 3 = 5$." },
            ],
            steps: [
              { reasoning: "Total sections $= 8$; yellow $= 3$.", marks: 1, markCode: "M" },
              { reasoning: "Non-yellow $= 8 - 3 = 5$.", working: "8-3=5", marks: 1, markCode: "M" },
              { reasoning: "Check: $3+2+2+1=8$ — all sections accounted for.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $5$ sections.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Answering $3$ — that counts only yellow, not 'not yellow'."],
          },
        },
        {
          id: "pypm-q-u3l2c1-16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A bag has $5$ red, $3$ blue and $2$ green counters. Which colour is most likely and which is least likely? Explain.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "All equally likely" },
              { id: "b", text: "Most likely red ($5$); least likely green ($2$)" },
              { id: "c", text: "Cannot tell" },
              { id: "d", text: "Most likely green; least likely red" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Likelihood and counts", statement: "More counters = more likely; fewer = less likely." },
            ],
            steps: [
              { reasoning: "Red has $5$ (most) and green has $2$ (fewest).", marks: 1, markCode: "M" },
              { reasoning: "Most counters = biggest chance; fewest = smallest chance.", marks: 1, markCode: "M" },
              { reasoning: "Answer: red most likely, green least likely.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Red most, green least",
            commonErrors: ["Choosing (c) — counts differ, so chances differ."],
          },
        },
      ],
    },
    {
      id: "pypm-u3l2-c2-spinners-experiments",
      title: "Spinners and chance experiments",
      skill: "Use spinners and repeated trials to explore chance and record results.",
      lesson: {
        sections: [
          {
            heading: "Spinners",
            body: "A **spinner** is divided into equal sections of different colours. The chance of landing on a colour depends on how many sections have that colour: a spinner with $2$ red and $2$ blue sections gives **even chance** for each. $3$ red and $1$ blue makes red **likely**. Spin it many times and record results — real experiments often do not match expectations exactly, because chance varies.",
          },
          {
            heading: "Experiments and prediction",
            body: "A **chance experiment** repeats an event many times to see the pattern. Flip a coin $20$ times and tally heads/tails — you will probably get close to $10$ each, but not exactly. The more trials, the closer results usually get to the expected chance. Always record results in a table so you can compare them.",
          },
        ],
        keyFormulas: [
          { name: "Spinner chance", statement: "Equal sections: more sections of a colour = more likely that colour" },
          { name: "Trials rule", statement: "More trials → results closer to expected chance" },
        ],
        workedExample: {
          problem: "A spinner has 6 equal sections: 4 green, 2 yellow. Is green or yellow more likely?",
          solution: "Green has $4$ sections vs yellow's $2$ — green is more likely (likely, not certain).",
        },
      },
      questions: [
        {
          id: "pypm-q-u3l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A spinner has 4 equal sections: 2 red, 1 blue, 1 green. What is the chance of landing on red?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unlikely" },
              { id: "b", text: "Likely" },
              { id: "c", text: "Certain" },
              { id: "d", text: "Impossible" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Spinner sections", statement: "Red covers $2$ of $4$ sections — half, the biggest share." },
            ],
            steps: [
              { reasoning: "Red is $2$ of $4$ sections — the largest single colour share, so likely (but not certain).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Likely",
            commonErrors: ["Choosing 'certain' — blue and green can still land."],
          },
        },
        {
          id: "pypm-q-u3l2c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "You flip a coin $10$ times and get $7$ heads and $3$ tails. Is this surprising?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Chance variation", statement: "Chance experiments vary; $7$-$3$ in $10$ flips is a normal result." },
            ],
            steps: [
              { reasoning: "Coin flips are even chance — $5$-$5$ is expected but not guaranteed.", marks: 1, markCode: "M" },
              { reasoning: "$7$-$3$ is within normal variation for only $10$ trials — not surprising.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "No — small experiments vary; $7$-$3$ is a normal result.",
            commonErrors: ["Saying the coin is 'unfair' — $10$ flips is too few to tell."],
          },
        },
        {
          id: "pypm-q-u3l2c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A class spins a 4-colour spinner $20$ times: red $9$, blue $4$, green $5$, yellow $2$. Which colour did they expect most, and did the results match?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Expected vs actual", statement: "Expect the colour with the most spinner sections; results vary but should be close over many trials." },
            ],
            steps: [
              { reasoning: "Without section info, the most-spun colour (red $9$) suggests red has the most sections or luck.", marks: 1, markCode: "M" },
              { reasoning: "Red got the most spins ($9$), so results roughly match a red-heavy spinner.", marks: 1, markCode: "M" },
              { reasoning: "Blue got fewest ($4$) vs yellow ($2$) — yellow underperformed; $20$ trials still vary.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Red was spun most ($9$) — consistent with red being most likely; results roughly match expectations.",
            commonErrors: ["Demanding exact proportions — $20$ spins cannot give exact fractions."],
          },
        },
        {
          id: "pypm-q-u3l2c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A dice has 6 faces numbered 1-6. You roll it 30 times and record: 1 appears $4$ times, 6 appears $9$ times.",
          parts: [
            { label: "a", prompt: "Is rolling a $6$ likely, unlikely or even chance? Explain.", marks: 2 },
            { label: "b", prompt: "If the dice is fair, roughly how many times would you expect each number in 30 rolls?", marks: 2 },
            { label: "c", prompt: "The dice showed $6$ nine times out of 30. Is this suspicious? Explain.", marks: 2 },
            { label: "d", prompt: "Suggest one way to test whether the dice is fair.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair dice chance", statement: "A fair dice gives each face $1$ of $6$ — even chance per number." },
            ],
            steps: [
              { part: "a", reasoning: "Each number has $1$ of $6$ faces — even chance, not likely or unlikely.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Answer: even chance.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$30 \\div 6 = 5$ times expected for each number.", working: "30\\div6=5", marks: 1, markCode: "M" },
              { part: "b", reasoning: "About $5$ times each.", working: "5", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$9$ vs expected $5$ — higher but within normal variation for $30$ rolls? $9$ is nearly double; could be chance or a biased dice.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Not conclusive — need more rolls; $30$ is a small sample.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Roll many more times and compare frequencies to $\\frac{1}{6}$ each.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) even chance (b) about $5$ each (c) $9$ is high but not conclusive (d) more rolls",
            commonErrors: ["In (c), declaring the dice unfair from $30$ rolls — small samples vary."],
          },
        },
        {
          id: "pypm-q-u3l2c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A spinner has $4$ equal sections: $2$ red, $1$ blue, $1$ green. What is the chance of landing on red?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Even chance" },
              { id: "b", text: "Unlikely" },
              { id: "c", text: "Certain" },
              { id: "d", text: "Impossible" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Spinner sections", statement: "Red is $2$ of $4$ sections — half, the largest share." },
            ],
            steps: [
              { reasoning: "Red covers half the spinner — even chance (half and half with not-red).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Even chance",
            commonErrors: ["Choosing 'likely' — red is exactly half, not more than half."],
          },
        },
        {
          id: "pypm-q-u3l2c2-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If you flip a fair coin $20$ times, about how many heads would you EXPECT?",
          response: { type: "numeric", parts: [{ label: "Expected heads", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Expected chance", statement: "A fair coin gives even chance — half heads, half tails." },
            ],
            steps: [
              { reasoning: "$20 \\div 2 = 10$ expected heads.", working: "20\\div2=10", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$10$",
            commonErrors: ["Answering $20$ — that would be all heads, not the expectation."],
          },
        },
        {
          id: "pypm-q-u3l2c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to experiment results as you do MORE trials (spins or flips)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They usually get closer to the expected chance" },
              { id: "b", text: "They get wilder and less predictable" },
              { id: "c", text: "They stop working" },
              { id: "d", text: "They stay exactly the same" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Trials rule", statement: "More trials → results closer to the expected chance." },
            ],
            steps: [
              { reasoning: "Small samples vary; large samples settle near expectation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Closer to expected chance",
            commonErrors: ["Thinking one lucky streak proves the spinner is biased."],
          },
        },
        {
          id: "pypm-q-u3l2c2-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You roll a fair dice $30$ times. About how many times would you expect EACH number (1-6) to appear?",
          response: { type: "numeric", parts: [{ label: "Expected per number", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Expected chance", statement: "Each face has $\\frac{1}{6}$ chance: $30 \\div 6 = 5$." },
            ],
            steps: [
              { reasoning: "$30 \\div 6 = 5$ times each.", working: "30\\div6=5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$5$",
            commonErrors: ["Answering $30$ — that is total rolls, not per number."],
          },
        },
        {
          id: "pypm-q-u3l2c2-9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A spinner is spun $12$ times and lands on red $6$ times. What fraction of the spins were red?",
          response: { type: "numeric", parts: [{ label: "Fraction", answer: 0.5 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Fractions of trials", statement: "Fraction = red spins $\\div$ total spins: $6 \\div 12$." },
            ],
            steps: [
              { reasoning: "$6 \\div 12 = 0.5$ — half the spins.", working: "6\\div12=0.5", marks: 1, markCode: "M" },
              { reasoning: "Answer: $0.5$ (or $\\frac{1}{2}$).", working: "0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.5$",
            commonErrors: ["Answering $6$ — that is the count, not the fraction."],
          },
        },
        {
          id: "pypm-q-u3l2c2-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "You flip a coin $10$ times and get $7$ heads and $3$ tails. Is this result surprising?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes — the coin must be unfair" },
              { id: "b", text: "Yes — you should get exactly $5$-$5$" },
              { id: "c", text: "No — small experiments vary; $7$-$3$ is normal" },
              { id: "d", text: "Cannot tell" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Chance variation", statement: "Chance experiments vary; $10$ flips is a small sample." },
            ],
            steps: [
              { reasoning: "Even chance means $5$-$5$ is expected but not guaranteed.", marks: 1, markCode: "M" },
              { reasoning: "$7$-$3$ is within normal variation for $10$ flips — not surprising.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** No — normal variation",
            commonErrors: ["Declaring the coin unfair from just $10$ flips."],
          },
        },
        {
          id: "pypm-q-u3l2c2-11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A spinner is spun $60$ times. About how many times would you expect EACH of its $6$ colours to appear?",
          response: { type: "numeric", parts: [{ label: "Expected per colour", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Expected chance", statement: "If all $6$ colours are equal, each gets $\\frac{1}{6}$: $60 \\div 6$." },
            ],
            steps: [
              { reasoning: "$60 \\div 6 = 10$ times each.", working: "60\\div6=10", marks: 1, markCode: "M" },
              { reasoning: "Answer: $10$.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$",
            commonErrors: ["Answering $60$ — divide by the number of colours."],
          },
        },
        {
          id: "pypm-q-u3l2c2-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the results of a chance experiment might NOT exactly match what you expect, even with a fair spinner.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Chance variation", statement: "Chance is unpredictable — results vary around the expected value." },
            ],
            steps: [
              { reasoning: "Each spin is independent — past spins do not affect the next.", marks: 1, markCode: "R" },
              { reasoning: "Small numbers of trials can give lopsided results by luck.", marks: 1, markCode: "M" },
              { reasoning: "Over MANY trials, results usually settle closer to the expected chance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Chance varies; small samples can be lopsided, large samples settle near expectation.",
            commonErrors: ["Thinking the spinner 'remembers' past results."],
          },
        },
        {
          id: "pypm-q-u3l2c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why it is important to RECORD the results of a chance experiment in a table.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Recording experiments", statement: "A table keeps every trial organised for counting and comparison." },
            ],
            steps: [
              { reasoning: "Without records, spins or flips get lost or miscounted.", marks: 1, markCode: "R" },
              { reasoning: "A table lets you add up totals per outcome easily.", marks: 1, markCode: "M" },
              { reasoning: "It also lets you compare actual results with expected chance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Recording keeps results accurate and comparable.",
            commonErrors: ["Relying on memory — tallies get mixed up."],
          },
        },
        {
          id: "pypm-q-u3l2c2-14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A fair dice has $6$ faces numbered $1$-$6$. What is the chance of rolling a $4$?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Certain" },
              { id: "b", text: "Impossible" },
              { id: "c", text: "Even chance — $1$ of $6$ faces" },
              { id: "d", text: "Likely" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair dice chance", statement: "Each face has $1$ of $6$ — equal chance for every number." },
            ],
            steps: [
              { reasoning: "A $4$ is $1$ of $6$ equal faces — same chance as any other number.", marks: 1, markCode: "M" },
              { reasoning: "This is 'even chance' across all six outcomes.", marks: 1, markCode: "M" },
              { reasoning: "Answer: even chance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Even chance",
            commonErrors: ["Choosing 'likely' — one face out of six is not a big share."],
          },
        },
        {
          id: "pypm-q-u3l2c2-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "You flip a fair coin $90$ times. About how many heads would you EXPECT?",
          response: { type: "numeric", parts: [{ label: "Expected heads", answer: 45 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Expected chance", statement: "Half of $90$ flips should be heads: $90 \\div 2$." },
            ],
            steps: [
              { reasoning: "$90 \\div 2 = 45$ expected heads.", working: "90\\div2=45", marks: 1, markCode: "M" },
              { reasoning: "Answer: $45$.", working: "45", marks: 1, markCode: "M" },
              { reasoning: "Actual results may differ slightly — that is normal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$45$",
            commonErrors: ["Answering $90$ — expectation is half, not all."],
          },
        },
        {
          id: "pypm-q-u3l2c2-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a chance experiment to test whether a coin is fair. Describe what you would do, what you would record, and what result would suggest the coin IS fair.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Chance experiment", statement: "Repeat trials many times, record outcomes, compare with expected chance." },
            ],
            steps: [
              { reasoning: "Flip the coin many times (e.g. $50$ or $100$) and record heads/tails in a table.", marks: 1, markCode: "M" },
              { reasoning: "Expected: about half heads, half tails.", marks: 1, markCode: "M" },
              { reasoning: "If results are close to half-and-half, the coin is probably fair.", marks: 1, markCode: "M" },
              { reasoning: "A big imbalance over MANY flips would suggest the coin might be biased.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Many flips → record → compare to 50/50 → close means fair.",
            commonErrors: ["Using only a few flips — too few to tell."],
          },
        },
      ],
    },
  ],
};
