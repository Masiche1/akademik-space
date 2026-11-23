import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "edps3-u4-lesson-4-2",
  code: "4-2",
  title: "Presenting Scientific Data",
  goal: "I CAN choose and create appropriate displays for scientific data.",
  standards: ["Working Scientifically"],
  vocabulary: [
    { term: "Bar chart", definition: "Bars showing amounts for categories." },
    {
      term: "Line graph",
      definition: "Points connected to show change over time.",
    },
    { term: "Pictogram", definition: "Pictures representing quantities." },
    { term: "Axis", definition: "The labelled lines on a graph." },
  ],
  concepts: [
    {
      id: "edps3-u4-displays",
      title: "Choosing displays",
      skill: "Select the right chart for the data type.",
      lesson: {
        sections: [
          {
            heading: "Matching display to data",
            body: "Bar charts: comparing categories (which material absorbs most). Line graphs: change over time (temperature vs melting time). Pictograms: simple counts. Tables: exact numbers. Scatter graphs: relationships between two variables. Choose based on what story the data tells.",
          },
          {
            heading: "Labelling correctly",
            body: "Every display needs: title, labelled axes with units, clear scale, legend if multiple series. A graph without labels is useless — 'Time (minutes)' not just 'x-axis'. Check your display tells the story clearly.",
          },
        ],
        keyFormulas: [
          {
            name: "Displays",
            statement:
              "Bar=compare; Line=change; Table=exact; Pictogram=simple",
          },
        ],
        workedExample: {
          problem:
            "Which display for 'How many birds seen each day for a week'?",
          solution: "Line graph or bar chart — shows daily counts over time.",
        },
      },
      questions: [
        {
          id: "edps3-u4-dp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which display shows change over time best?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pictogram" },
              { id: "b", text: "Line graph" },
              { id: "c", text: "Table" },
              { id: "d", text: "Pie chart" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data display",
                statement: "Line = time.",
              },
            ],
            steps: [
              {
                reasoning: "Line graphs show trends over time.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Line graph",
            commonErrors: ["Wrong display."],
          },
        },
        {
          id: "edps3-u4-dp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What must every graph have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only a title" },
              { id: "b", text: "Title, axes labels and units" },
              { id: "c", text: "Colours" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Graph labelling",
                statement: "Complete labels.",
              },
            ],
            steps: [
              {
                reasoning: "Labels make graphs understandable.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Title + axes + units",
            commonErrors: ["Incomplete."],
          },
        },
        {
          id: "edps3-u4-dp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Choose the best display for 'Which fruit is most popular?' with data: apples 30, pears 20, bananas 45.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Display choice",
                statement: "Bar chart for comparison.",
              },
            ],
            steps: [
              {
                reasoning: "Bar chart shows comparison clearly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Or pictogram for simple counts.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Justified choice.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bar chart or pictogram",
            commonErrors: ["Wrong display type."],
          },
        },
        {
          id: "edps3-u4-dp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why might a line graph be misleading if the x-axis isn't evenly spaced? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Graph integrity",
                statement: "Scale affects perception.",
              },
            ],
            steps: [
              {
                reasoning: "Uneven spacing distorts trends.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Makes changes look bigger/smaller than they are.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Honest graphs need fair scales.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Uneven axis distorts data",
            commonErrors: ["Not explaining distortion."],
          },
        },
      ],
    },
    {
      id: "edps3-u4-evaluate",
      title: "Evaluating Scientific Work",
      skill: "Critically assess investigations and results.",
      lesson: {
        sections: [
          {
            heading: "Critical evaluation",
            body: "Evaluate: Was the test fair? Were variables controlled? Were measurements accurate? Were tests repeated? Could results be affected by other factors? Strong evaluations identify both strengths AND weaknesses, not just 'it was good'.",
          },
          {
            heading: "Limitations and improvements",
            body: "Every investigation has limitations: time constraints, equipment precision, sample size. Good scientists acknowledge these and suggest improvements: 'More repeats would make results more reliable; a digital timer would be more precise.'",
          },
        ],
        keyFormulas: [
          {
            name: "Evaluation",
            statement: "Fairness + reliability + limitations + improvements",
          },
        ],
        workedExample: {
          problem:
            "Evaluate: 'I tested which material insulates best but only tried each once.'",
          solution:
            "Weakness: single tests may be unreliable. Improvement: repeat each test 3 times and average.",
        },
      },
      questions: [
        {
          id: "edps3-u4-ev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes an investigation unreliable?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Changing one variable" },
              { id: "b", text: "Only testing once" },
              { id: "c", text: "Recording results" },
              { id: "d", text: "Making predictions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reliability",
                statement: "Repeats needed.",
              },
            ],
            steps: [
              {
                reasoning: "Single test = unreliable.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Only testing once",
            commonErrors: ["Wrong cause."],
          },
        },
        {
          id: "edps3-u4-ev-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'limitation' of an investigation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A strength" },
              { id: "b", text: "A weakness or constraint" },
              { id: "c", text: "The question" },
              { id: "d", text: "The equipment" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Limitation",
                statement: "Constraint/weakness.",
              },
            ],
            steps: [
              {
                reasoning: "Limitation = what limited the study.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Weakness/constraint",
            commonErrors: ["Confusing with strength."],
          },
        },
        {
          id: "edps3-u4-ev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Evaluate this investigation: 'Tested which paper airplane flies furthest. Used same paper, same throw.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation",
                statement: "Strengths + weaknesses.",
              },
            ],
            steps: [
              {
                reasoning: "Strength: controlled variables (same paper/throw).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weakness: only tested once, wind may affect.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Balanced evaluation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Controlled but needs repeats",
            commonErrors: ["One-sided evaluation."],
          },
        },
        {
          id: "edps3-u4-ev-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Suggest two improvements to an investigation and explain how each would make results more reliable.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Improvement",
                statement: "Improvements + reasons.",
              },
            ],
            steps: [
              {
                reasoning: "Repeat tests — confirms consistency.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Use precise tools — reduces measurement error.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reasons linked to reliability.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Two improvements with reliability reasons",
            commonErrors: ["No reasons."],
          },
        },
      ],
    },
    {
      id: "edps3-u4-science",
      title: "Science in the Real World",
      skill: "Connect scientific enquiry to real-world applications.",
      lesson: {
        sections: [
          {
            heading: "Science everywhere",
            body: "Scientific enquiry isn't just in labs — it's in cooking (why does bread rise?), sport (why do balls bounce?), weather forecasts, medicine, engineering. The same skills apply: ask questions, test ideas, measure, analyse, conclude.",
          },
          {
            heading: "Careers using science",
            body: "Doctors, engineers, farmers, chefs, sports scientists, weather forecasters, forensic scientists — all use scientific thinking. Understanding enquiry helps you see the science behind everyday things and opens many career paths.",
          },
        ],
        keyFormulas: [
          {
            name: "Real-world science",
            statement: "Enquiry skills apply everywhere",
          },
        ],
        workedExample: {
          problem: "How is baking bread a scientific investigation?",
          solution:
            "Testing variables (yeast, temperature, time) and measuring outcomes (rise, texture).",
        },
      },
      questions: [
        {
          id: "edps3-u4-rw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is an everyday example of scientific enquiry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only in laboratories" },
              { id: "b", text: "Cooking and testing recipes" },
              { id: "c", text: "Only in textbooks" },
              { id: "d", text: "Only in space" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Everyday science",
                statement: "Science is everywhere.",
              },
            ],
            steps: [
              {
                reasoning: "Cooking involves testing and measurement.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Cooking/recipes",
            commonErrors: ["Only lab thinking."],
          },
        },
        {
          id: "edps3-u4-rw-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which career uses scientific enquiry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only scientists" },
              { id: "b", text: "Doctors, engineers, chefs" },
              { id: "c", text: "Only teachers" },
              { id: "d", text: "Only writers" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Science careers",
                statement: "Many fields.",
              },
            ],
            steps: [
              {
                reasoning: "Many careers use enquiry skills.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Many careers",
            commonErrors: ["Only scientists."],
          },
        },
        {
          id: "edps3-u4-rw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How is weather forecasting an example of scientific enquiry?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Real-world enquiry",
                statement: "Data + prediction.",
              },
            ],
            steps: [
              {
                reasoning: "Collects data (temperature, pressure, humidity).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Analyses patterns to predict.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Uses scientific method.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Data collection + prediction",
            commonErrors: ["No enquiry link."],
          },
        },
        {
          id: "edps3-u4-rw-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how scientific enquiry skills help in everyday problem-solving. Give two examples.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Enquiry skills",
                statement: "Question + test + analyse.",
              },
            ],
            steps: [
              {
                reasoning: "Example: fixing a bike — test what works.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example: choosing a phone — compare features/data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Enquiry skills apply broadly.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Two everyday enquiry examples",
            commonErrors: ["Only one example."],
          },
        },
      ],
    },
  ],
};
