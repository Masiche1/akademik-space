import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "pypm-u3-lesson-3-1",
  code: "3-1",
  title: "Collecting and Showing Data",
  goal: "I CAN ask a survey question, collect data, and show it in a pictograph or bar graph.",
  standards: [
    "PYP Mathematics: Statistics",
    "PYP transdisciplinary theme: How the World Works",
    "PYP transdisciplinary theme: Sharing the Planet",
  ],
  vocabulary: [
    { term: "Data", definition: "Information we collect, like how many pupils like each fruit." },
    { term: "Survey", definition: "Asking lots of people the same question to collect data." },
    { term: "Tally", definition: "Marks used to count quickly — four vertical strokes and a diagonal make five." },
    { term: "Pictograph", definition: "A graph that uses pictures or symbols to show data." },
    { term: "Bar graph", definition: "A graph with bars of different heights showing how many of each thing." },
    { term: "Key", definition: "A note on a graph explaining what each picture or symbol stands for." },
  ],
  concepts: [
    {
      id: "pypm-u3l1-c1-collecting-data",
      title: "Asking questions and collecting data",
      skill: "Design a fair survey question and collect data using tally marks.",
      lesson: {
        sections: [
          {
            heading: "Good survey questions",
            body: "A survey asks the **same question** to many people so we can collect data. A good question is clear and has answer choices: 'What is your favourite fruit?' with choices apple, banana, orange. A bad question is leading or confusing: 'Don't you love bananas?' asks for an opinion, not data. Ask everyone — asking only friends makes the data unfair (**biased**).",
          },
          {
            heading: "Tally marks",
            body: "**Tally marks** count quickly: one stroke for each answer, and every fifth answer is a diagonal stroke across the four — so five looks like a gate: $\\vert\\ \\vert\\ \\vert\\ \\vert\\ \\vert$ with a slash. After collecting, count the groups of five and add the extra strokes to get each total.",
          },
        ],
        keyFormulas: [
          { name: "Tally groups", statement: "Four strokes $+$ diagonal = five; count groups of five, then extras" },
          { name: "Fair survey", statement: "Same question, clear choices, ask everyone" },
        ],
        workedExample: {
          problem: "Pupils vote for lunch: apple $\\vert\\ \\vert\\ \\vert\\ \\vert\\ \\vert$, banana $\\vert\\ \\vert\\ \\vert$, orange $\\vert\\ \\vert\\ \\vert\\ \\vert\\ \\vert\\ \\vert$. How many voted for apple?",
          solution: "Apple has one group of five plus two extra strokes: $5+2=7$ votes.",
        },
      },
      questions: [
        {
          id: "pypm-q-u3l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the BEST survey question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How old are you?" },
              { id: "b", text: "Ice cream is great, right?" },
              { id: "c", text: "Do you like ice cream?" },
              { id: "d", text: "What is your favourite fruit — apple, banana or orange?" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair survey design", statement: "A good survey question is clear, has answer choices, and does not lead the answer." },
            ],
            steps: [
              { reasoning: "Option (b) is clear with defined choices; (c) leads, (a) is yes/no without categories, (d) is not about the topic.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** What is your favourite fruit — apple, banana or orange?",
            commonErrors: ["Choosing (c) — 'right?' pushes people to agree, which is unfair."],
          },
        },
        {
          id: "pypm-q-u3l1c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Tally marks for a favourite colour: red has $\\vert\\ \\vert\\ \\vert\\ \\vert\\ \\vert$ plus $\\vert\\ \\vert$. How many pupils chose red?",
          response: { type: "numeric", parts: [{ label: "Red votes", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reading tally marks", statement: "Four strokes plus diagonal = five; add extra strokes." },
            ],
            steps: [
              { reasoning: "The gate shape is five; two extra strokes add $2$.", working: "5+2", marks: 1, markCode: "M" },
              { reasoning: "$7$ pupils chose red.", working: "5+2=7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7$",
            commonErrors: ["Counting the diagonal as a sixth stroke — it is part of the five."],
          },
        },
        {
          id: "pypm-q-u3l1c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A class asks 'What is your favourite season?' but only asks the football team. Explain why this survey is unfair and how to fix it.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Biased sampling", statement: "Asking only one group gives biased data that does not represent everyone." },
            ],
            steps: [
              { reasoning: "Only footballers are asked — their answers may differ from other pupils.", marks: 1, markCode: "M" },
              { reasoning: "The data would not represent the whole class — it is biased.", marks: 1, markCode: "R" },
              { reasoning: "Fix: ask every pupil in the class the same question.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It is biased — only footballers answered; ask the whole class for fair data.",
            commonErrors: ["Saying the question itself is bad — the question is fine; the sample is unfair."],
          },
        },
        {
          id: "pypm-q-u3l1c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Your class surveys favourite pets. Results: dog $\\vert\\ \\vert\\ \\vert\\ \\vert\\ \\vert\\ \\vert$ (6), cat $\\vert\\ \\vert\\ \\vert\\ \\vert\\ \\vert\\ \\vert\\ \\vert\\ \\vert$ (8), fish $\\vert\\ \\vert\\ \\vert$ (3), none $\\vert\\ \\vert$ (2).",
          parts: [
            { label: "a", prompt: "How many pupils chose cat?", marks: 1 },
            { label: "b", prompt: "How many pupils were surveyed in total?", marks: 2 },
            { label: "c", prompt: "How many more pupils chose dog than fish?", marks: 2 },
            { label: "d", prompt: "Explain why asking 'Everyone loves dogs, right?' would ruin the survey.", marks: 2 },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "(a) Pupils who chose cat", answer: 8 },
              { label: "(b) Total pupils surveyed", answer: 19 },
              { label: "(c) Dog minus fish", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Survey fairness", statement: "Leading questions push answers; neutral questions collect honest data." },
            ],
            steps: [
              { part: "a", reasoning: "Cat tally is $8$.", working: "8", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Total $= 6 + 8 + 3 + 2 = 19$.", working: "6+8+3+2=19", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Answer $19$ pupils.", working: "19", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Dog minus fish $= 6 - 3 = 3$.", working: "6-3=3", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Answer $3$ more pupils.", working: "3", marks: 1, markCode: "A" },
              { part: "d", reasoning: "'Everyone loves dogs, right?' suggests the expected answer — people may agree to please the asker.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "This makes the data dishonest; a neutral question gives true results.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $8$ (b) $19$ (c) $3$ (d) leading question = dishonest data",
            commonErrors: ["In (b), forgetting the 'none' category."],
          },
        },
        {
          id: "pypm-q-u3l1c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the BEST survey question for finding favourite colours?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What is your favourite colour — red, blue, green or yellow?" },
              { id: "b", text: "Do you like colours?" },
              { id: "c", text: "Blue is the best colour, right?" },
              { id: "d", text: "Colours are pretty, aren't they?" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair survey design", statement: "A good question is clear, has answer choices, and does not lead." },
            ],
            steps: [
              { reasoning: "(b) is clear with defined choices; (d) leads, (a) and (c) are yes/no.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** What is your favourite colour — red, blue, green or yellow?",
            commonErrors: ["Choosing (d) — 'right?' pushes people toward one answer."],
          },
        },
        {
          id: "pypm-q-u3l1c1-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Tally marks show one group of five plus $3$ extra strokes. How many is that?",
          response: { type: "numeric", parts: [{ label: "Total", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reading tally marks", statement: "Four strokes + diagonal = five; add extra strokes." },
            ],
            steps: [
              { reasoning: "$5 + 3 = 8$.", working: "5+3=8", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$8$",
            commonErrors: ["Answering $7$ — forgetting the diagonal is part of the five, or miscounting extras."],
          },
        },
        {
          id: "pypm-q-u3l1c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In tally marks, what does the 'gate' shape (four vertical strokes with a diagonal across) represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Four" },
              { id: "b", text: "Ten" },
              { id: "c", text: "Five" },
              { id: "d", text: "One" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tally marks", statement: "Every fifth count is a diagonal across four strokes — the gate means five." },
            ],
            steps: [
              { reasoning: "The gate shape counts five.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Five",
            commonErrors: ["Choosing 'four' — the diagonal is the fifth stroke."],
          },
        },
        {
          id: "pypm-q-u3l1c1-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Favourite pet tally: rabbit has $\\vert\\ \\vert\\ \\vert$. How many pupils chose rabbit?",
          response: { type: "numeric", parts: [{ label: "Rabbit votes", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reading tally marks", statement: "Each vertical stroke is one vote." },
            ],
            steps: [
              { reasoning: "Three strokes = $3$ votes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$3$",
            commonErrors: ["Miscounting the strokes."],
          },
        },
        {
          id: "pypm-q-u3l1c1-9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A survey of favourite fruits gives: apple $4$, banana $6$, orange $2$. How many pupils were surveyed in total?",
          response: { type: "numeric", parts: [{ label: "Total", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Total data", statement: "Total = sum of all categories." },
            ],
            steps: [
              { reasoning: "Add all categories: $4 + 6 + 2$.", working: "4+6+2", marks: 1, markCode: "M" },
              { reasoning: "Total: $12$ pupils.", working: "4+6+2=12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$",
            commonErrors: ["Adding only two categories — include every choice."],
          },
        },
        {
          id: "pypm-q-u3l1c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A survey asks only the teacher's favourite students about homework. Why is this unfair, and how could it be fixed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Use tally marks instead" },
              { id: "b", text: "Biased sample — ask all pupils the same question" },
              { id: "c", text: "The question is too long" },
              { id: "d", text: "It is fine — teachers know best" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Biased sampling", statement: "Asking only one group gives biased data." },
            ],
            steps: [
              { reasoning: "Only favourite students answer — their views may differ from others.", marks: 1, markCode: "M" },
              { reasoning: "Fix: ask every pupil the same question for fair data.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Biased — ask everyone",
            commonErrors: ["Thinking the question wording is the problem — the sample is the problem."],
          },
        },
        {
          id: "pypm-q-u3l1c1-11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a survey, $9$ pupils chose soccer and $5$ chose swimming. How many more chose soccer than swimming?",
          response: { type: "numeric", parts: [{ label: "Difference", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "property", name: "Comparing data", statement: "Difference = larger count − smaller count." },
            ],
            steps: [
              { reasoning: "$9 - 5 = 4$.", working: "9-5=4", marks: 1, markCode: "M" },
              { reasoning: "Answer: $4$ more pupils.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$",
            commonErrors: ["Adding: $9+5=14$ — 'how many more' needs subtraction."],
          },
        },
        {
          id: "pypm-q-u3l1c1-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is it important that every person in a survey is asked the SAME question?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair survey design", statement: "Same question for everyone makes answers comparable and data fair." },
            ],
            steps: [
              { reasoning: "If different people hear different questions, answers cannot be compared.", marks: 1, markCode: "R" },
              { reasoning: "The same question with the same choices gives fair, honest data.", marks: 1, markCode: "M" },
              { reasoning: "This is what makes a survey result trustworthy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Same question = fair, comparable data.",
            commonErrors: ["Saying it does not matter — it changes the data completely."],
          },
        },
        {
          id: "pypm-q-u3l1c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to count tally marks that show two 'gates' (groups of five) plus two extra strokes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reading tally marks", statement: "Each gate = five; count gates then add extras." },
            ],
            steps: [
              { reasoning: "Each gate shape counts as $5$.", marks: 1, markCode: "M" },
              { reasoning: "Two gates $= 10$; two extra strokes add $2$.", working: "10+2", marks: 1, markCode: "M" },
              { reasoning: "Total: $12$.", working: "10+2=12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$",
            commonErrors: ["Counting each gate as $4$ — the diagonal is the fifth mark."],
          },
        },
        {
          id: "pypm-q-u3l1c1-14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which way of collecting data about 'favourite lunch' would give the most FAIR results?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ask every pupil in the class the same question" },
              { id: "b", text: "Ask only your friends at lunch" },
              { id: "c", text: "Count only the pupils who say pizza" },
              { id: "d", text: "Ask the teacher to guess" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Fair sampling", statement: "Asking everyone the same question gives representative data." },
            ],
            steps: [
              { reasoning: "Friends-only and pizza-only samples are biased; guessing is not data.", marks: 1, markCode: "M" },
              { reasoning: "Asking every pupil the same question covers the whole group.", marks: 1, markCode: "M" },
              { reasoning: "Answer: ask the whole class.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Ask every pupil the same question",
            commonErrors: ["Choosing (a) — friends may all like the same food; biased."],
          },
        },
        {
          id: "pypm-q-u3l1c1-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Favourite sports tally: soccer $\\vert\\ \\vert\\ \\vert\\ \\vert\\ \\vert$ plus $\\vert\\ \\vert\\ \\vert$ (a gate and three), netball $\\vert\\ \\vert\\ \\vert\\ \\vert$ (four). How many pupils were surveyed in total?",
          response: { type: "numeric", parts: [{ label: "Total", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reading tally marks", statement: "Gate $= 5$; add extras and other categories." },
            ],
            steps: [
              { reasoning: "Soccer: $5 + 3 = 8$; netball: $4$.", working: "5+3=8", marks: 1, markCode: "M" },
              { reasoning: "Total: $8 + 4 = 12$.", working: "8+4=12", marks: 1, markCode: "M" },
              { reasoning: "Answer: $12$ pupils.", working: "12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$",
            commonErrors: ["Counting the gate as $4$ — it represents $5$."],
          },
        },
        {
          id: "pypm-q-u3l1c1-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You want to find out the favourite storybook character in your class. Describe the steps you would take to collect the data fairly, including how you would record the answers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "method", name: "Survey method", statement: "Design a clear question, ask everyone, record with tally marks." },
            ],
            steps: [
              { reasoning: "Write one clear question with choices, e.g. 'What is your favourite character — Pippi, Harry or Winnie?'.", marks: 1, markCode: "M" },
              { reasoning: "Ask every pupil in the class — not just friends.", marks: 1, markCode: "M" },
              { reasoning: "Record each answer with tally marks next to its category.", marks: 1, markCode: "M" },
              { reasoning: "Count the tallies (gates of five plus extras) to get the totals.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Clear question → ask everyone → tally marks → count totals.",
            commonErrors: ["Skipping the 'ask everyone' step or using different questions."],
          },
        },
      ],
    },
    {
      id: "pypm-u3l1-c2-graphs",
      title: "Pictographs and bar graphs",
      skill: "Read and draw simple pictographs and bar graphs to show data.",
      lesson: {
        sections: [
          {
            heading: "Pictographs",
            body: "A **pictograph** shows data with pictures. Each picture stands for a number — the **key** tells you how many. If the key says $\\text{picture} = 2$ pupils and the apple row has $3$ pictures, then $3 \\times 2 = 6$ pupils chose apple. Always check the key first — a picture might stand for $1$, $2$ or $5$.",
          },
          {
            heading: "Bar graphs",
            body: "A **bar graph** uses bars of different heights — taller bar means more. The bottom axis lists the categories, the side axis shows the numbers. To read it, find the category, go up to the top of its bar, and read across to the number. Bar graphs make it easy to see which is most popular and which is least.",
          },
        ],
        keyFormulas: [
          { name: "Pictograph rule", statement: "Count $\\times$ key value $=$ total for that category" },
          { name: "Bar graph reading", statement: "Category $\\to$ bar height $\\to$ number on side axis" },
        ],
        workedExample: {
          problem: "A pictograph shows pets: dog $3$ pictures, cat $4$ pictures; key $\\text{picture} = 5$ pupils. How many chose cat?",
          solution: "$4 \\times 5 = 20$ pupils chose cat.",
        },
      },
      questions: [
        {
          id: "pypm-q-u3l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a bar graph of favourite sports, the football bar is the tallest. What does this tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The graph is broken" },
              { id: "b", text: "Football is the least popular" },
              { id: "c", text: "Football is the most popular" },
              { id: "d", text: "Nobody chose football" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bar graph", statement: "Taller bar = more; the tallest bar shows the most popular choice." },
            ],
            steps: [
              { reasoning: "Tallest bar means the highest number — most popular.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Football is the most popular",
            commonErrors: ["Reading the graph upside down — taller always means more."],
          },
        },
        {
          id: "pypm-q-u3l1c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pictograph shows weather: sunny $4$ pictures, cloudy $2$ pictures, rainy $1$ picture. The key says each picture $= 3$ days. How many rainy days?",
          response: { type: "numeric", parts: [{ label: "Rainy days", answer: 3 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pictograph key", statement: "Total = number of pictures $\\times$ key value." },
            ],
            steps: [
              { reasoning: "Rainy has $1$ picture; each picture $= 3$ days.", working: "1\\times3", marks: 1, markCode: "M" },
              { reasoning: "$3$ rainy days.", working: "1\\times3=3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3$ days",
            commonErrors: ["Answering $1$ — forgetting to multiply by the key value."],
          },
        },
        {
          id: "pypm-q-u3l1c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A bar graph shows favourite drinks: water $12$, juice $8$, milk $6$, squash $10$. Which drink is least popular, and how many more pupils chose water than milk?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reading bar graphs", statement: "Compare bar heights to find most and least; subtract to compare." },
            ],
            steps: [
              { reasoning: "Least popular = lowest bar: milk at $6$.", marks: 1, markCode: "M" },
              { reasoning: "Water minus milk: $12 - 6 = 6$.", working: "12-6=6", marks: 1, markCode: "M" },
              { reasoning: "Milk is least popular; $6$ more pupils chose water.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Milk is least popular; $6$ more chose water than milk.",
            commonErrors: ["Reading the highest bar as least popular — tallest means most."],
          },
        },
        {
          id: "pypm-q-u3l1c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A class surveyed favourite subjects: maths $10$, English $8$, science $12$, art $6$. Total pupils $= 36$.",
          parts: [
            { label: "a", prompt: "Which subject is most popular?", marks: 1 },
            { label: "b", prompt: "Which subject is least popular?", marks: 1 },
            { label: "c", prompt: "How many more pupils chose science than art?", marks: 2 },
            { label: "d", prompt: "What fraction of the class chose maths? Give it as a fraction.", marks: 1 },
            { label: "e", prompt: "Explain why a bar graph is a good way to show this data.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Interpreting bar graphs", statement: "Compare bar heights; fractions use part/whole of the total." },
            ],
            steps: [
              { part: "a", reasoning: "Science has the highest bar ($12$) — most popular.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Art has the lowest bar ($6$) — least popular.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "$12 - 6 = 6$ more pupils chose science.", working: "12-6=6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Answer $6$.", working: "6", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Maths fraction: $\\frac{10}{36} = \\frac{5}{18}$.", working: "\\frac{10}{36}", marks: 1, markCode: "M" },
              { part: "e", reasoning: "Bar heights make comparisons instant — you can see most/least at a glance.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Exact numbers can still be read from the axis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) science (b) art (c) $6$ (d) $\\frac{10}{36}$ or $\\frac{5}{18}$ (e) easy visual comparison",
            commonErrors: ["In (d), writing $\\frac{10}{26}$ — denominator must be the total $36$, not the other subjects."],
          },
        },
        {
          id: "pypm-q-u3l1c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a bar graph, what does the TALLEST bar tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing useful" },
              { id: "b", text: "The category with zero votes" },
              { id: "c", text: "The most popular choice" },
              { id: "d", text: "The least popular choice" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bar graph", statement: "Taller bar = more; tallest = most popular." },
            ],
            steps: [
              { reasoning: "Bar height shows the count — tallest means most votes.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The most popular choice",
            commonErrors: ["Reading it backwards — taller is more, not less."],
          },
        },
        {
          id: "pypm-q-u3l1c2-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pictograph shows pets with the key: each picture $= 2$ pupils. The cat row has $3$ pictures. How many pupils chose cat?",
          response: { type: "numeric", parts: [{ label: "Cat votes", answer: 6 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pictograph key", statement: "Total = pictures $\\times$ key value." },
            ],
            steps: [
              { reasoning: "$3 \\times 2 = 6$ pupils.", working: "3\\times2=6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "$6$",
            commonErrors: ["Answering $3$ — forgetting to multiply by the key value."],
          },
        },
        {
          id: "pypm-q-u3l1c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the 'key' on a pictograph tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How many each picture or symbol stands for" },
              { id: "b", text: "The colours to use" },
              { id: "c", text: "The title of the graph" },
              { id: "d", text: "The total number of people surveyed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pictograph key", statement: "The key explains what each picture stands for — e.g. 1 picture $= 5$ pupils." },
            ],
            steps: [
              { reasoning: "The key gives the value of each symbol.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** What each picture stands for",
            commonErrors: ["Thinking the key is just decoration — it is essential for reading the graph."],
          },
        },
        {
          id: "pypm-q-u3l1c2-8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main job of a bar graph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To compare amounts using bars of different heights" },
              { id: "b", text: "To measure length" },
              { id: "c", text: "To tell the time" },
              { id: "d", text: "To show pictures of the data" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bar graph", statement: "Bar graphs compare categories by bar height." },
            ],
            steps: [
              { reasoning: "Bars of different heights show how many of each category.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Compare amounts using bar heights",
            commonErrors: ["Choosing (a) — that describes a pictograph."],
          },
        },
        {
          id: "pypm-q-u3l1c2-9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "On a pictograph, how do we find the total for one category?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Count the categories" },
              { id: "b", text: "Count the pictures and multiply by the key value" },
              { id: "c", text: "Read the tallest bar" },
              { id: "d", text: "Add up all the pictures on the graph" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pictograph rule", statement: "Category total = number of pictures $\\times$ key value." },
            ],
            steps: [
              { reasoning: "Count that row's pictures, then multiply by what each picture stands for.", marks: 1, markCode: "M" },
              { reasoning: "Answer: pictures $\\times$ key value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Pictures $\\times$ key value",
            commonErrors: ["Choosing (b) — that gives the grand total, not one category."],
          },
        },
        {
          id: "pypm-q-u3l1c2-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Your class surveyed 'favourite fruit'. Which graph type is BEST for showing the results clearly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No graph needed" },
              { id: "b", text: "A bar graph or pictograph — categories compared by height/pictures" },
              { id: "c", text: "A line graph" },
              { id: "d", text: "A pie chart with 100 slices" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Choosing a graph", statement: "Category data is best shown by bar graphs or pictographs." },
            ],
            steps: [
              { reasoning: "Favourite fruit is category data — compare counts per category.", marks: 1, markCode: "M" },
              { reasoning: "Bar graphs and pictographs show this clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Bar graph or pictograph",
            commonErrors: ["Choosing a line graph — that is for changes over time, not categories."],
          },
        },
        {
          id: "pypm-q-u3l1c2-11",
          difficulty: "core",
          totalMarks: 2,
          stem: "A pictograph has the key: each picture $= 4$ pupils. The dog row shows $5$ pictures. How many pupils chose dog?",
          response: { type: "numeric", parts: [{ label: "Dog votes", answer: 20 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pictograph key", statement: "Total = pictures $\\times$ key value: $5 \\times 4$." },
            ],
            steps: [
              { reasoning: "$5 \\times 4 = 20$ pupils.", working: "5\\times4=20", marks: 1, markCode: "M" },
              { reasoning: "Answer: $20$.", working: "20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$20$",
            commonErrors: ["Answering $5$ — the key says each picture stands for $4$."],
          },
        },
        {
          id: "pypm-q-u3l1c2-12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is it important to read the key of a pictograph BEFORE reading the data?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pictograph key", statement: "Without the key you cannot convert pictures to real numbers." },
            ],
            steps: [
              { reasoning: "A picture might stand for $1$, $2$ or $5$ — the key tells you which.", marks: 1, markCode: "R" },
              { reasoning: "Reading without the key could give answers that are far too small.", marks: 1, markCode: "M" },
              { reasoning: "So always check the key first, then multiply pictures by its value.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The key tells what each picture stands for — check it first.",
            commonErrors: ["Assuming one picture always means one — it can mean any number."],
          },
        },
        {
          id: "pypm-q-u3l1c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain step by step how to read a value from a bar graph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Reading bar graphs", statement: "Find the category, go up to the bar top, read across to the number axis." },
            ],
            steps: [
              { reasoning: "Find the category label on the bottom axis.", marks: 1, markCode: "M" },
              { reasoning: "Go straight up to the top of its bar.", marks: 1, markCode: "M" },
              { reasoning: "Read across to the side axis to get the number.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Category → up to bar top → across to the number.",
            commonErrors: ["Reading the bar's width instead of its height."],
          },
        },
        {
          id: "pypm-q-u3l1c2-14",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A bar graph of favourite subjects shows: maths $10$, English $8$, science $12$, art $6$. What is the TOTAL number of pupils surveyed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "$24$" },
              { id: "b", text: "$30$" },
              { id: "c", text: "$26$" },
              { id: "d", text: "$36$" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Total data", statement: "Total = sum of all bar values." },
            ],
            steps: [
              { reasoning: "Add all bars: $10+8+12+6$.", working: "10+8+12+6", marks: 1, markCode: "M" },
              { reasoning: "$10+8=18$; $18+12=30$; $30+6=36$.", working: "36", marks: 1, markCode: "M" },
              { reasoning: "Answer: $36$ pupils.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** $36$",
            commonErrors: ["Adding only some bars — include every category."],
          },
        },
        {
          id: "pypm-q-u3l1c2-15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A pictograph shows pets: cat row has $4$ pictures and dog row has $2$ pictures. The key says each picture $= 5$ pupils. How many MORE pupils chose cat than dog?",
          response: { type: "numeric", parts: [{ label: "Difference", answer: 10 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pictograph comparison", statement: "Find each total first: cat $= 4 \\times 5 = 20$, dog $= 2 \\times 5 = 10$." },
            ],
            steps: [
              { reasoning: "Cat: $4 \\times 5 = 20$; dog: $2 \\times 5 = 10$.", working: "20-10", marks: 1, markCode: "M" },
              { reasoning: "Difference: $20 - 10 = 10$ more pupils chose cat.", working: "20-10=10", marks: 1, markCode: "M" },
              { reasoning: "Answer: $10$.", working: "10", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$10$",
            commonErrors: ["Subtracting pictures ($4-2=2$) without multiplying by the key — gives $2$, not $10$."],
          },
        },
        {
          id: "pypm-q-u3l1c2-16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "When would a bar graph be better than a pictograph for showing survey data? Give one reason.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bar graphs are never better" },
              { id: "b", text: "When you want pictures instead of bars" },
              { id: "c", text: "When there are only two categories" },
              { id: "d", text: "When the numbers are very large — bars can be drawn to any height" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Choosing a graph", statement: "Bar graphs handle large numbers easily; pictographs need many symbols." },
            ],
            steps: [
              { reasoning: "Large counts need many pictures in a pictograph — bars scale more easily.", marks: 1, markCode: "M" },
              { reasoning: "Bar graphs also show exact values on the axis.", marks: 1, markCode: "M" },
              { reasoning: "Answer: for large numbers, bars are clearer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** When numbers are large",
            commonErrors: ["Thinking pictographs are always better — they get crowded with big numbers."],
          },
        },
      ],
    },
  ],
};
