import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "edpm4-u3-lesson-3-3",
  code: "3-3",
  title: "Statistics: Line Graphs and Data",
  goal: "I CAN interpret and create line graphs and answer questions from data.",
  standards: ["Year 4 Statistics"],
  vocabulary: [
    {
      term: "Line graph",
      definition:
        "A graph showing data points connected by lines, usually over time.",
    },
    { term: "Data point", definition: "A single value plotted on a graph." },
    {
      term: "Trend",
      definition:
        "The pattern or direction of the line — rising, falling, steady.",
    },
    {
      term: "Continuous data",
      definition: "Data that changes smoothly, like temperature over time.",
    },
    {
      term: "Discrete data",
      definition: "Data in separate categories, like favourite colours.",
    },
  ],
  concepts: [
    {
      id: "edpm4-u3-line-graphs",
      title: "Reading line graphs",
      skill: "Interpret line graphs showing change over time.",
      lesson: {
        sections: [
          {
            heading: "Parts of a line graph",
            body: "**X-axis** (horizontal): usually time — days, months, hours. **Y-axis** (vertical): the measurement — temperature, distance, rainfall. Each point shows the value at that time; lines connect them to show the trend.",
          },
          {
            heading: "Interpreting trends",
            body: "A rising line means the value is increasing; falling means decreasing; flat means steady. Find highest/lowest points, compare values between times, and calculate change (difference between two points). Read the scale carefully.",
          },
        ],
        keyFormulas: [
          { name: "Axes", statement: "x = time, y = measurement" },
          {
            name: "Trend",
            statement:
              "Rising = increasing; falling = decreasing; flat = steady",
          },
        ],
        workedExample: {
          problem:
            "A line graph shows temperature rising from 10°C at 9am to 18°C at 1pm. What is the change?",
          solution: "18 − 10 = 8°C increase.",
        },
      },
      questions: [
        {
          id: "edpm4-u3-lg-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "On a line graph, what does the x-axis usually show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The scale" },
              { id: "b", text: "The measurement" },
              { id: "c", text: "The title" },
              { id: "d", text: "Time" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Line graph",
                statement: "X-axis = time, Y-axis = measurement.",
              },
            ],
            steps: [
              {
                reasoning: "X-axis shows time progression.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Time",
            commonErrors: ["Confusing x and y axes."],
          },
        },
        {
          id: "edpm4-u3-lg-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A line graph shows values rising from 20 to 35 over 4 hours. What is the increase?",
          response: {
            type: "numeric",
            parts: [{ label: "Increase", answer: 15, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reading trends",
                statement: "35 − 20 = 15.",
              },
            ],
            steps: [
              {
                reasoning: "Final value 35, initial 20.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "35 − 20 = 15.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 15.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15",
            commonErrors: ["Dividing by time instead of subtracting values."],
          },
        },
        {
          id: "edpm4-u3-lg-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A line graph of rainfall shows: Mon 4mm, Tue 8mm, Wed 6mm, Thu 10mm. On which day did rainfall decrease?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Trend analysis",
                statement: "Tue 8 → Wed 6 is a decrease.",
              },
            ],
            steps: [
              {
                reasoning: "Compare consecutive days.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "8 → 6 is the only decrease.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: Wednesday.", marks: 1, markCode: "A" },
              { reasoning: "Reasoning shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Wednesday",
            commonErrors: [
              "Picking Thursday because 10 is highest — highest isn't a decrease.",
            ],
          },
        },
        {
          id: "edpm4-u3-lg-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A line graph shows a plant's height: Week 1 = 5cm, Week 2 = 9cm, Week 3 = 15cm, Week 4 = 16cm.",
          parts: [
            { label: "a", prompt: "What was the height in Week 3?", marks: 2 },
            {
              label: "b",
              prompt: "Between which weeks did the plant grow the most?",
              marks: 4,
            },
            {
              label: "c",
              prompt: "What is the total growth over 4 weeks?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interpreting line graphs",
                statement:
                  "Read values; compare differences; total = final − initial.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Week 3 = 15 cm.",
                marks: 1,
                markCode: "A",
              },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Week 1→2: +4; Week 2→3: +6; Week 3→4: +1.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Biggest growth: Week 2 to 3.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Comparisons shown.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "16 − 5 = 11 cm total growth.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 11 cm.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reasoning shown.",
                marks: 1,
                markCode: "R",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15 cm; Week 2→3 (+6cm); 11 cm",
            commonErrors: [
              "Adding all weekly values instead of subtracting initial from final.",
            ],
          },
        },
      ],
    },
    {
      id: "edpm4-u3-data",
      title: "Collecting and presenting data",
      skill: "Choose appropriate charts and interpret data displays.",
      lesson: {
        sections: [
          {
            heading: "Choosing a chart",
            body: "**Bar charts** for comparing categories (favourite sports). **Pictograms** for simple counts with pictures. **Line graphs** for change over time (temperature). **Pie charts** show parts of a whole (introduced later). Match the chart to the data type.",
          },
          {
            heading: "Asking good questions",
            body: "Decide what you want to find out first. 'How many children in each class like apples?' → bar chart. 'How has temperature changed today?' → line graph. Collect data carefully — tally marks or a table first, then draw the chart.",
          },
        ],
        keyFormulas: [
          { name: "Bar chart", statement: "Categories compared side by side" },
          { name: "Line graph", statement: "Change over continuous time" },
        ],
        workedExample: {
          problem:
            "You want to show how temperature changed from 6am to 6pm. Which chart?",
          solution: "Line graph — it shows continuous change over time.",
        },
      },
      questions: [
        {
          id: "edpm4-u3-da-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which chart is best for showing change in temperature over a day?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tally chart" },
              { id: "b", text: "Pictogram" },
              { id: "c", text: "Bar chart" },
              { id: "d", text: "Line graph" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chart choice",
                statement: "Continuous change over time → line graph.",
              },
            ],
            steps: [
              {
                reasoning: "Temperature changes continuously → line graph.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Line graph",
            commonErrors: [
              "Choosing bar chart — better for categories not continuous data.",
            ],
          },
        },
        {
          id: "edpm4-u3-da-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A class surveys favourite colours: red 8, blue 12, green 6, yellow 4. Which colour is most popular?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reading data",
                statement: "Blue has highest count: 12.",
              },
            ],
            steps: [
              {
                reasoning: "Compare counts: 8, 12, 6, 4.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Highest is 12 (blue).", marks: 1, markCode: "A" },
              { reasoning: "Answer: blue.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Blue",
            commonErrors: ["Picking red because listed first."],
          },
        },
        {
          id: "edpm4-u3-da-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A bar chart shows book sales: Mon 15, Tue 20, Wed 18, Thu 25, Fri 30. What is the total for the week?",
          response: {
            type: "numeric",
            parts: [{ label: "Total", answer: 108, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Totals from data",
                statement: "15+20+18+25+30 = 108.",
              },
            ],
            steps: [
              { reasoning: "Add all five values.", marks: 1, markCode: "M" },
              {
                reasoning: "15+20=35, +18=53, +25=78, +30=108.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: 108.", marks: 1, markCode: "A" },
              { reasoning: "Method shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "108",
            commonErrors: ["Adding incorrectly or missing a day."],
          },
        },
        {
          id: "edpm4-u3-da-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "You survey 30 children about their favourite fruit: apple 10, banana 8, orange 6, grape 6.",
          parts: [
            { label: "a", prompt: "Which fruit is most popular?", marks: 2 },
            {
              label: "b",
              prompt: "How many more children like apple than grape?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "What fraction of children like banana? Simplify.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data questions",
                statement: "Compare counts; difference; fraction of total.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Apple highest with 10.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Answer: apple.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Apple 10 − grape 6 = 4.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 4 more.",
                marks: 1,
                markCode: "A",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Banana fraction = 8/30.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Simplify: HCF 2 → 4/15.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Answer: 4/15.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Total 30 used correctly.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Simplification shown.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Apple; 4 more; 4/15",
            commonErrors: [
              "Using 8/30 unsimplified or dividing by wrong total.",
            ],
          },
        },
      ],
    },
  ],
};
