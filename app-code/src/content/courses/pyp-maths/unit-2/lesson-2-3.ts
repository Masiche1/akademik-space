import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "pypm-u2-lesson-2-3",
  code: "2-3",
  title: "Time, Mass and Capacity",
  goal: "I CAN tell the time, compare mass and capacity, and solve simple measurement problems.",
  standards: [
    "PYP Mathematics: Geometry and measurement",
    "PYP transdisciplinary theme: Where We Are in Place and Time",
    "PYP transdisciplinary theme: How the World Works",
  ],
  vocabulary: [
    { term: "O'clock", definition: "When the minute hand points to $12$: '3 o'clock' means $3$ o'clock exactly." },
    { term: "Half past", definition: "When the minute hand points to $6$: 'half past $4$' means $4{:}30$." },
    { term: "Quarter past / to", definition: "Minute hand at $3$ = quarter past; at $9$ = quarter to the next hour." },
    { term: "Mass", definition: "How heavy something is, measured in grams (g) and kilograms (kg); $1000$ g $= 1$ kg." },
    { term: "Capacity", definition: "How much a container can hold, measured in litres (L) and millilitres (mL); $1000$ mL $= 1$ L." },
    { term: "Heavier / Lighter", definition: "Comparing mass — a brick is heavier than a feather; a bucket holds more than a cup." },
  ],
  concepts: [
    {
      id: "pypm-u2l3-c1-telling-time",
      title: "Telling the time",
      skill: "Read o'clock, half past, quarter past and quarter to on analogue and digital clocks.",
      lesson: {
        sections: [
          {
            heading: "Reading a clock",
            body: "A clock has a **short hour hand** and a **long minute hand**. When the minute hand points to $12$, it is **o'clock** — the hour hand tells the hour. When the minute hand points to $6$, it is **half past**. When it points to $3$, it is **quarter past**; to $9$, **quarter to** the next hour. Digital clocks show the same time as numbers: $4{:}30$ is half past $4$.",
          },
          {
            heading: "Calculating time",
            body: "Time problems use addition and subtraction. 'The film starts at $2{:}30$ and lasts $1$ hour — when does it end?' $2{:}30 + 1$ hour $= 3{:}30$. 'School starts at $9$ o'clock and lunch is at $12{:}30$ — how long?' Count on: $3$ hours $30$ minutes $= 3$ hours $30$ minutes.",
          },
        ],
        keyFormulas: [
          { name: "Clock positions", statement: "Minute hand at $12$ = o'clock; at $6$ = half past; at $3$ = quarter past; at $9$ = quarter to" },
          { name: "Time addition", statement: "Add hours and minutes separately; $60$ minutes $= 1$ hour" },
        ],
        workedExample: {
          problem: "It is half past $3$. What time will it be in $45$ minutes?",
          solution: "Half past $3$ is $3{:}30$. Add $45$ minutes: $30+45=75$ minutes $= 1$ hour $15$ minutes. So $3{:}30 + 0{:}45 = 4{:}15$.",
        },
      },
      questions: [
        {
          id: "pypm-q-u2l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When the minute hand points to $6$ and the hour hand is between $4$ and $5$, what time is it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quarter to 5" },
              { id: "b", text: "Half past 4" },
              { id: "c", text: "4 o'clock" },
              { id: "d", text: "Quarter past 4" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Half past", statement: "Minute hand at $6$ means half past the hour." },
            ],
            steps: [
              { reasoning: "Minute hand at $6$ = half past; hour hand between $4$ and $5$ = hour $4$.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Half past 4",
            commonErrors: ["Choosing '4 o'clock' — that needs the minute hand at $12$."],
          },
        },
        {
          id: "pypm-q-u2l3c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A film starts at $2{:}30$ and lasts $1$ hour. At what time does it end?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4{:}30$" },
              { id: "b", text: "$3{:}00$" },
              { id: "c", text: "$3{:}30$" },
              { id: "d", text: "$2{:}30$" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Adding time", statement: "Add the duration to the start time." },
            ],
            steps: [
              { reasoning: "$2{:}30 + 1$ hour $= 3{:}30$.", working: "2{:}30+1\\text{hr}=3{:}30", marks: 1, markCode: "M" },
              { reasoning: "Answer: $3{:}30$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $3{:}30$",
            commonErrors: ["Choosing $3{:}00$ — that adds only $30$ minutes, not a full hour."],
          },
        },
        {
          id: "pypm-q-u2l3c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "School starts at $8$ o'clock and finishes at $3{:}15$. How long is the school day?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Elapsed time", statement: "Time between two clock times = finish − start." },
            ],
            steps: [
              { reasoning: "From $8{:}00$ to $3{:}00$ is $7$ hours; add the extra $15$ minutes.", marks: 1, markCode: "M" },
              { reasoning: "$7$ hours $+ 15$ minutes.", working: "7\\text{ hr }15\\text{ min}", marks: 1, markCode: "M" },
              { reasoning: "School day is $7$ hours $15$ minutes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$ hours $15$ minutes",
            commonErrors: ["Computing $15 - 8$ or similar — elapsed time needs counting forward through the day."],
          },
        },
        {
          id: "pypm-q-u2l3c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A bus leaves the station at $9{:}15$ and arrives at the zoo at $10{:}45$.",
          parts: [
            { label: "a", prompt: "How many minutes does the journey take?", marks: 2 },
            { label: "b", prompt: "The bus returns at $2{:}20$ PM. How many minutes was the visit at the zoo?", marks: 2 },
            { label: "c", prompt: "If the return bus leaves $30$ minutes late, how many minutes after $2$ o'clock PM does it leave?", marks: 1 },
            { label: "d", prompt: "Explain why $60$ minutes make $1$ hour when adding time.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Journey time in minutes", answer: 90 },
              { label: "(b) Visit duration in minutes", answer: 215 },
              { label: "(c) Minutes after 2 PM the late bus leaves", answer: 50 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Elapsed time", statement: "Time between events = later time − earlier time; $60$ min $= 1$ hr." },
            ],
            steps: [
              { part: "a", reasoning: "$9{:}15$ to $10{:}15$ is $60$ min; $10{:}15$ to $10{:}45$ is $30$ min; total $90$ min.", working: "60+30=90", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Journey takes $90$ minutes ($1$ hr $30$ min).", working: "90", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$10{:}45$ AM to $2{:}20$ PM: $10{:}45$ to $1{:}45$ is $3$ hr, then $1{:}45$ to $2{:}20$ is $35$ min — total $3$ hr $35$ min.", working: "3\\times60+35=215", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Visit lasted $215$ minutes.", working: "215", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$2{:}20 + 30$ min $= 2{:}50$ PM, which is $50$ minutes after $2$ o'clock.", working: "20+30=50", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Time uses base $60$: $60$ minutes fill one hour, like $60$ seconds fill one minute.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "So $60$ min carries into the hours column as $1$ hour.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $90$ min (b) $215$ min ($3$ hr $35$ min) (c) $50$ min after $2$ PM, i.e. $2{:}50$ PM (d) $60$ min $= 1$ hr",
            commonErrors: ["In (a), computing $45-15=30$ only — must count through the hour change."],
          },
        },
        {
          id: "pypm-q-u2l3c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When the minute hand points to $12$ on a clock, what time is it called?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Half past" },
              { id: "b", text: "Quarter to" },
              { id: "c", text: "Quarter past" },
              { id: "d", text: "O'clock" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "O'clock", statement: "Minute hand at $12$ means o'clock — the hour hand tells the hour." },
            ],
            steps: [
              { reasoning: "Minute hand at $12$ = o'clock.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** O'clock",
            commonErrors: ["Choosing 'half past' — that needs the minute hand at $6$."],
          },
        },
        {
          id: "pypm-q-u2l3c1-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "At quarter past the hour, how many minutes past the hour is it?",
          response: { type: "numeric", parts: [{ label: "Minutes", answer: 15, unit: "min" }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quarter past", statement: "A quarter of an hour is $15$ minutes." },
            ],
            steps: [
              { reasoning: "$60 \\div 4 = 15$ minutes.", working: "60\\div4=15", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$15$ minutes",
            commonErrors: ["Answering $30$ — that is half past, not quarter past."],
          },
        },
        {
          id: "pypm-q-u2l3c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When the minute hand points to $6$, what do we call the time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quarter past" },
              { id: "b", text: "Half past" },
              { id: "c", text: "O'clock" },
              { id: "d", text: "Quarter to" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Half past", statement: "Minute hand at $6$ means half past the hour ($30$ minutes)." },
            ],
            steps: [
              { reasoning: "Minute hand at $6$ = half way round = half past.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Half past",
            commonErrors: ["Choosing 'quarter past' — that is the minute hand at $3$."],
          },
        },
        {
          id: "pypm-q-u2l3c1-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When the minute hand points to $3$, what do we call the time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quarter to" },
              { id: "b", text: "Half past" },
              { id: "c", text: "Quarter past" },
              { id: "d", text: "O'clock" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quarter past", statement: "Minute hand at $3$ means quarter past the hour ($15$ minutes)." },
            ],
            steps: [
              { reasoning: "Minute hand at $3$ = quarter of the way round = quarter past.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Quarter past",
            commonErrors: ["Confusing $3$ and $9$ — $3$ is quarter PAST, $9$ is quarter TO."],
          },
        },
        {
          id: "pypm-q-u2l3c1-9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A digital clock shows $4{:}30$. How do we say this time in words?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4 o'clock" },
              { id: "b", text: "Quarter to 5" },
              { id: "c", text: "Quarter past 4" },
              { id: "d", text: "Half past 4" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Digital time", statement: "$4{:}30$ means half past $4$ — $30$ minutes past the hour." },
            ],
            steps: [
              { reasoning: "$30$ minutes past $4$ is half an hour past — half past $4$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: half past $4$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Half past 4",
            commonErrors: ["Choosing 'quarter to 5' — that would be $4{:}45$."],
          },
        },
        {
          id: "pypm-q-u2l3c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Lunch starts at $2{:}30$ and lasts $1$ hour. At what time does lunch end?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$4{:}30$" },
              { id: "b", text: "$3{:}00$" },
              { id: "c", text: "$2{:}30$" },
              { id: "d", text: "$3{:}30$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Adding time", statement: "Add the duration to the start time: $2{:}30 + 1$ hour." },
            ],
            steps: [
              { reasoning: "$2{:}30 + 1$ hour $= 3{:}30$.", working: "2{:}30+1\\text{ hr}=3{:}30", marks: 1, markCode: "M" },
              { reasoning: "Answer: $3{:}30$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $3{:}30$",
            commonErrors: ["Choosing $3{:}00$ — that adds only $30$ minutes."],
          },
        },
        {
          id: "pypm-q-u2l3c1-11",
          difficulty: "core",
          totalMarks: 2,
          stem: "How many minutes are there between $10{:}30$ and $11{:}00$?",
          response: { type: "numeric", parts: [{ label: "Minutes", answer: 30, unit: "min" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Elapsed time", statement: "Time between two clock times = later − earlier." },
            ],
            steps: [
              { reasoning: "From $10{:}30$ to $11{:}00$ is half an hour.", working: "60-30=30", marks: 1, markCode: "M" },
              { reasoning: "Answer: $30$ minutes.", working: "30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30$ minutes",
            commonErrors: ["Answering $60$ — that is a full hour; only half an hour passed."],
          },
        },
        {
          id: "pypm-q-u2l3c1-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to find the time between $9{:}00$ AM and $11{:}30$ AM, step by step.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Elapsed time", statement: "Count hours first, then add the extra minutes." },
            ],
            steps: [
              { reasoning: "From $9{:}00$ to $11{:}00$ is $2$ whole hours.", marks: 1, markCode: "M" },
              { reasoning: "Add the extra $30$ minutes from $11{:}00$ to $11{:}30$.", marks: 1, markCode: "M" },
              { reasoning: "Total elapsed time: $2$ hours $30$ minutes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$ hours $30$ minutes",
            commonErrors: ["Computing $11.5 - 9$ style subtraction — count hours then minutes."],
          },
        },
        {
          id: "pypm-q-u2l3c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many minutes are there in $1$ hour $30$ minutes? Explain how you know.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Time units", statement: "$1$ hour $= 60$ minutes." },
            ],
            steps: [
              { reasoning: "One hour is $60$ minutes.", marks: 1, markCode: "R" },
              { reasoning: "Add the extra $30$: $60 + 30 = 90$ minutes.", working: "60+30=90", marks: 1, markCode: "M" },
              { reasoning: "Answer: $90$ minutes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$90$ minutes",
            commonErrors: ["Answering $130$ — adding $60+30+40$ or similar; just add the extra minutes."],
          },
        },
        {
          id: "pypm-q-u2l3c1-14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A pizza delivery arrives at $8{:}45$ PM. It was ordered $30$ minutes earlier. At what time was it ordered?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$8{:}30$ PM" },
              { id: "b", text: "$8{:}45$ PM" },
              { id: "c", text: "$8{:}15$ PM" },
              { id: "d", text: "$9{:}15$ PM" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Subtracting time", statement: "Earlier time = later time − duration." },
            ],
            steps: [
              { reasoning: "$8{:}45 - 30$ minutes $= 8{:}15$ PM.", working: "45-30=15", marks: 1, markCode: "M" },
              { reasoning: "Answer: $8{:}15$ PM.", marks: 1, markCode: "M" },
              { reasoning: "Confirm: $8{:}15 + 30$ min $= 8{:}45$ — matches.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $8{:}15$ PM",
            commonErrors: ["Choosing $9{:}15$ — adding instead of subtracting."],
          },
        },
        {
          id: "pypm-q-u2l3c1-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A film starts at $2{:}40$ and lasts $40$ minutes. At what HOUR does it end? (Give just the hour number.)",
          response: { type: "numeric", parts: [{ label: "Hour", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Adding time", statement: "$2{:}40 + 40$ min $= 3{:}20$ — the hour changes." },
            ],
            steps: [
              { reasoning: "$40 + 40 = 80$ minutes past $2$ — that is $1$ hour $20$ minutes past, i.e. $3{:}20$.", working: "80=60+20", marks: 1, markCode: "M" },
              { reasoning: "The film ends at $3{:}20$, so the hour is $3$.", marks: 1, markCode: "M" },
              { reasoning: "Answer: hour $3$.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$",
            commonErrors: ["Answering $2$ — forgetting the $80$ minutes carry into the next hour."],
          },
        },
        {
          id: "pypm-q-u2l3c1-16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "It is quarter to $7$. What time is it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$7{:}15$" },
              { id: "b", text: "$6{:}15$" },
              { id: "c", text: "$7{:}45$" },
              { id: "d", text: "$6{:}45$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quarter to", statement: "Quarter to the next hour means $15$ minutes before it: $6{:}45$." },
            ],
            steps: [
              { reasoning: "Quarter to $7$ is $15$ minutes before $7{:}00$.", working: "7{:}00-0{:}15=6{:}45", marks: 1, markCode: "M" },
              { reasoning: "Answer: $6{:}45$.", marks: 1, markCode: "M" },
              { reasoning: "Check: $6{:}45 + 15$ min $= 7{:}00$ — correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $6{:}45$",
            commonErrors: ["Choosing $7{:}15$ — that is quarter PAST 7, the opposite."],
          },
        },
      ],
    },
    {
      id: "pypm-u2l3-c2-mass-capacity",
      title: "Mass and capacity",
      skill: "Compare mass and capacity and convert between grams/kilograms and millilitres/litres.",
      lesson: {
        sections: [
          {
            heading: "Mass — how heavy",
            body: "**Mass** tells how heavy something is. Small masses use **grams (g)** — a paperclip is about $1$ g. Large masses use **kilograms (kg)** — a bag of sugar is about $1$ kg. $1000$ g $= 1$ kg. Compare mass by feeling or using a balance scale — the side that goes down is heavier.",
          },
          {
            heading: "Capacity — how much it holds",
            body: "**Capacity** tells how much a container holds. Small amounts use **millilitres (mL)** — a teaspoon holds about $5$ mL. Large amounts use **litres (L)** — a water bottle holds about $1$ L. $1000$ mL $= 1$ L. To compare, pour into the same container or read the scale — the higher level means greater capacity used.",
          },
        ],
        keyFormulas: [
          { name: "Mass units", statement: "$1000\\ \\text{g} = 1\\ \\text{kg}$" },
          { name: "Capacity units", statement: "$1000\\ \\text{mL} = 1\\ \\text{L}$" },
        ],
        workedExample: {
          problem: "Which is heavier: $500$ g of flour or $1$ kg of sugar?",
          solution: "Convert: $1$ kg $= 1000$ g. $1000$ g $> 500$ g, so the sugar is heavier.",
        },
      },
      questions: [
        {
          id: "pypm-q-u2l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which holds more: a cup or a bucket?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cannot tell" },
              { id: "b", text: "They hold the same" },
              { id: "c", text: "Bucket" },
              { id: "d", text: "Cup" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Capacity", statement: "Capacity is how much a container holds; bigger containers hold more." },
            ],
            steps: [
              { reasoning: "A bucket is much bigger than a cup, so it holds more.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Bucket",
            commonErrors: ["Choosing 'cannot tell' — real containers can be compared by size and by pouring."],
          },
        },
        {
          id: "pypm-q-u2l3c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is heavier: $750$ g or $1$ kg?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$ kg" },
              { id: "b", text: "$750$ g" },
              { id: "c", text: "Cannot compare" },
              { id: "d", text: "They are equal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Mass conversion", statement: "$1$ kg $= 1000$ g, so $1$ kg is more than $750$ g." },
            ],
            steps: [
              { reasoning: "Convert $1$ kg to grams: $1000$ g.", working: "1\\text{ kg}=1000\\text{ g}", marks: 1, markCode: "M" },
              { reasoning: "$1000 > 750$, so $1$ kg is heavier.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** $1$ kg",
            commonErrors: ["Comparing $750$ and $1$ directly without converting units."],
          },
        },
        {
          id: "pypm-q-u2l3c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A recipe needs $500$ mL of milk. A jug contains $1.5$ L of milk. How much milk is left after using the recipe amount?",
          response: { type: "numeric", parts: [{ label: "Milk left", answer: 1000, unit: "mL" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Capacity calculation", statement: "Convert to the same unit first: $1.5$ L $= 1500$ mL." },
            ],
            steps: [
              { reasoning: "Convert $1.5$ L to mL: $1.5 \\times 1000 = 1500$ mL.", working: "1.5\\times1000=1500", marks: 1, markCode: "M" },
              { reasoning: "Subtract the used amount: $1500 - 500$.", working: "1500-500", marks: 1, markCode: "M" },
              { reasoning: "$1000$ mL left (which is $1$ L).", working: "1500-500=1000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1000$ mL ($1$ L)",
            commonErrors: ["Subtracting $1.5 - 500$ without converting — units must match."],
          },
        },
        {
          id: "pypm-q-u2l3c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "At the market: apples cost $2$ per kg, oranges cost $3$ per kg. A shopper buys $2$ kg of apples and $1$ kg of oranges.",
          parts: [
            { label: "a", prompt: "What is the cost of the apples?", marks: 1 },
            { label: "b", prompt: "What is the total cost of all the fruit?", marks: 2 },
            { label: "c", prompt: "The shopper pays with a $10$ note. How much change?", marks: 2 },
            { label: "d", prompt: "A watermelon has a mass of $3$ kg. Is it heavier or lighter than the fruit the shopper bought? Explain.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Cost of apples", answer: 4, unit: "$" },
              { label: "(b) Total cost", answer: 7, unit: "$" },
              { label: "(c) Change from $10", answer: 3, unit: "$" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Money and mass", statement: "Cost = price per kg $\\times$ kg; change = paid − cost." },
            ],
            steps: [
              { part: "a", reasoning: "Apples: $2 \\times 2 = 4$.", working: "2\\times2=4", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Oranges cost $3$; total $= 4 + 3 = 7$.", working: "4+3=7", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Total cost $7$.", working: "7", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Change $= 10 - 7 = 3$.", working: "10-7=3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Change is $3$.", working: "3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Fruit bought: $2 + 1 = 3$ kg; watermelon is $3$ kg — equal mass.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Same mass ($3$ kg each), so neither is heavier.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $4$ (b) $7$ (c) $3$ change (d) equal mass — both $3$ kg",
            commonErrors: ["In (d), comparing prices instead of mass — the question asks about mass."],
          },
        },
        {
          id: "pypm-q-u2l3c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is heavier: a brick or a feather?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They weigh the same" },
              { id: "b", text: "Feather" },
              { id: "c", text: "Cannot tell without scales" },
              { id: "d", text: "Brick" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mass", statement: "Mass is how heavy something is; a brick is much heavier than a feather." },
            ],
            steps: [
              { reasoning: "A brick has far more mass than a feather.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Brick",
            commonErrors: ["Choosing 'cannot tell' — everyday objects can be compared by mass."],
          },
        },
        {
          id: "pypm-q-u2l3c2-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many grams are in $2$ kilograms?",
          response: { type: "numeric", parts: [{ label: "Grams", answer: 2000, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Mass units", statement: "$1000$ g $= 1$ kg, so $2$ kg $= 2000$ g." },
            ],
            steps: [
              { reasoning: "$2 \\times 1000 = 2000$ g.", working: "2\\times1000=2000", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$2000$ g",
            commonErrors: ["Answering $200$ — multiplying by $100$ instead of $1000$."],
          },
        },
        {
          id: "pypm-q-u2l3c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which holds more: $500$ mL or $1$ L?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$ L" },
              { id: "b", text: "Cannot compare" },
              { id: "c", text: "$500$ mL" },
              { id: "d", text: "They hold the same" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Capacity units", statement: "$1000$ mL $= 1$ L, so $1$ L $= 1000$ mL $> 500$ mL." },
            ],
            steps: [
              { reasoning: "Convert: $1$ L $= 1000$ mL, which is more than $500$ mL.", working: "1000>500", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** $1$ L",
            commonErrors: ["Comparing $500$ and $1$ directly without converting units."],
          },
        },
        {
          id: "pypm-q-u2l3c2-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many millilitres are in $2$ litres?",
          response: { type: "numeric", parts: [{ label: "Millilitres", answer: 2000, unit: "mL" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Capacity units", statement: "$1000$ mL $= 1$ L." },
            ],
            steps: [
              { reasoning: "$2 \\times 1000 = 2000$ mL.", working: "2\\times1000=2000", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$2000$ mL",
            commonErrors: ["Answering $20$ — off by a factor of $100$."],
          },
        },
        {
          id: "pypm-q-u2l3c2-9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How many grams are in $1.5$ kg?",
          response: { type: "numeric", parts: [{ label: "Grams", answer: 1500, unit: "g" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Mass units", statement: "$1$ kg $= 1000$ g, so $1.5$ kg $= 1500$ g." },
            ],
            steps: [
              { reasoning: "$1 \\times 1000 = 1000$ g plus $0.5 \\times 1000 = 500$ g.", working: "1000+500", marks: 1, markCode: "M" },
              { reasoning: "Total: $1500$ g.", working: "1.5\\times1000=1500", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1500$ g",
            commonErrors: ["Answering $1050$ — adding instead of multiplying by $1000$."],
          },
        },
        {
          id: "pypm-q-u2l3c2-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is lighter: $750$ g of cheese or $1$ kg of butter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$1$ kg of butter" },
              { id: "b", text: "Cannot compare" },
              { id: "c", text: "$750$ g of cheese" },
              { id: "d", text: "They weigh the same" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Mass conversion", statement: "$1$ kg $= 1000$ g $> 750$ g." },
            ],
            steps: [
              { reasoning: "Convert: $1$ kg $= 1000$ g; $750 < 1000$, so $750$ g is lighter.", working: "750<1000", marks: 1, markCode: "M" },
              { reasoning: "Answer: the cheese is lighter.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** $750$ g of cheese",
            commonErrors: ["Choosing (b) — $1$ kg is heavier, not lighter."],
          },
        },
        {
          id: "pypm-q-u2l3c2-11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A jug holds $2$ L of juice. You pour out $750$ mL. How much juice is left?",
          response: { type: "numeric", parts: [{ label: "Juice left", answer: 1250, unit: "mL" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Capacity calculation", statement: "Convert first: $2$ L $= 2000$ mL, then subtract." },
            ],
            steps: [
              { reasoning: "$2$ L $= 2000$ mL; $2000 - 750 = 1250$ mL.", working: "2000-750=1250", marks: 1, markCode: "M" },
              { reasoning: "Answer: $1250$ mL ($1.25$ L).", working: "1250", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1250$ mL",
            commonErrors: ["Subtracting $2 - 750$ — units must match before subtracting."],
          },
        },
        {
          id: "pypm-q-u2l3c2-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain when you would use grams and when you would use kilograms to measure mass.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Choosing mass units", statement: "Grams for light objects; kilograms for heavy ones." },
            ],
            steps: [
              { reasoning: "Grams: paperclips, pencils, small packets — light things.", marks: 1, markCode: "M" },
              { reasoning: "Kilograms: bags of sugar, people, big boxes — heavy things.", marks: 1, markCode: "M" },
              { reasoning: "Rule of thumb: $1000$ g $= 1$ kg; if the gram number is huge, use kg.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "g for light objects, kg for heavy ones.",
            commonErrors: ["Using kg for a paperclip — $0.001$ kg is awkward; $1$ g is clearer."],
          },
        },
        {
          id: "pypm-q-u2l3c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain when you would use millilitres and when you would use litres to measure capacity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Choosing capacity units", statement: "Millilitres for small amounts; litres for large amounts." },
            ],
            steps: [
              { reasoning: "Millilitres: a teaspoon ($5$ mL), medicine dose, small cup.", marks: 1, markCode: "M" },
              { reasoning: "Litres: water bottles, buckets, fish tanks — large amounts.", marks: 1, markCode: "M" },
              { reasoning: "Rule of thumb: $1000$ mL $= 1$ L; if the mL number is huge, use L.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "mL for small amounts, L for large amounts.",
            commonErrors: ["Using litres for a teaspoon — $0.005$ L is awkward; $5$ mL is clearer."],
          },
        },
        {
          id: "pypm-q-u2l3c2-14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A bottle holds $1.2$ L and a jug holds $1200$ mL. Do they hold the same amount?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No — the jug holds more" },
              { id: "b", text: "Cannot compare" },
              { id: "c", text: "Yes — both are $1200$ mL" },
              { id: "d", text: "No — the bottle holds more" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Capacity conversion", statement: "$1.2$ L $= 1.2 \\times 1000 = 1200$ mL." },
            ],
            steps: [
              { reasoning: "Convert the bottle: $1.2 \\times 1000 = 1200$ mL.", working: "1.2\\times1000=1200", marks: 1, markCode: "M" },
              { reasoning: "Both hold $1200$ mL — they are equal.", marks: 1, markCode: "M" },
              { reasoning: "Answer: yes, same capacity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Yes — both $1200$ mL",
            commonErrors: ["Comparing $1.2$ and $1200$ directly without converting."],
          },
        },
        {
          id: "pypm-q-u2l3c2-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A water bottle holds $1.5$ L. You drink $600$ mL at breakfast and $400$ mL at lunch. How much is left?",
          response: { type: "numeric", parts: [{ label: "Left", answer: 500, unit: "mL" }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Capacity calculation", statement: "Convert to mL: $1.5$ L $= 1500$ mL; subtract both drinks." },
            ],
            steps: [
              { reasoning: "Total drunk: $600 + 400 = 1000$ mL.", working: "600+400=1000", marks: 1, markCode: "M" },
              { reasoning: "$1500 - 1000 = 500$ mL left.", working: "1500-1000=500", marks: 1, markCode: "M" },
              { reasoning: "Answer: $500$ mL ($0.5$ L).", working: "500", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$500$ mL",
            commonErrors: ["Subtracting only one drink — must subtract both amounts."],
          },
        },
        {
          id: "pypm-q-u2l3c2-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A recipe needs $250$ g of flour. You have a $1$ kg bag of flour. After baking, how much flour is left? Explain each step and check your answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Mass calculation", statement: "Convert to the same unit: $1$ kg $= 1000$ g; remaining $=$ total $-$ used." },
            ],
            steps: [
              { reasoning: "Convert the bag: $1$ kg $= 1000$ g.", working: "1\\times1000=1000", marks: 1, markCode: "M" },
              { reasoning: "Subtract the recipe amount: $1000 - 250 = 750$ g.", working: "1000-250=750", marks: 1, markCode: "M" },
              { reasoning: "Check by adding back: $750 + 250 = 1000$ g — matches the bag.", working: "750+250=1000", marks: 1, markCode: "M" },
              { reasoning: "Answer: $750$ g of flour left ($0.75$ kg).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$750$ g",
            commonErrors: ["Subtracting $1 - 250$ — convert kg to g first."],
          },
        },
      ],
    },
  ],
};
