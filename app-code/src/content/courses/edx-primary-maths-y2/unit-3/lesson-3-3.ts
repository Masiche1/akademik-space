import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "edpm2-u3-lesson-3-3",
  code: "3-3",
  title: "Measuring and Handling Data",
  goal: "I CAN compare and measure lengths using standard units and collect, organise and present simple data.",
  standards: ["Year 2 Measure", "Year 2 Statistics"],
  vocabulary: [
    { term: "Length", definition: "How long something is." },
    {
      term: "Centimetre (cm)",
      definition:
        "A standard unit for measuring length — about the width of a finger.",
    },
    {
      term: "Metre (m)",
      definition:
        "A standard unit for measuring longer lengths — about a big step.",
    },
    {
      term: "Ruler",
      definition: "A tool marked in centimetres for measuring length.",
    },
    {
      term: "Data",
      definition: "Information collected by asking questions or counting.",
    },
    {
      term: "Tally chart",
      definition: "A chart using tally marks to record counts.",
    },
  ],
  concepts: [
    {
      id: "edpm2-u3-measure",
      title: "Measuring length",
      skill: "Measure and compare lengths using centimetres and metres.",
      lesson: {
        sections: [
          {
            heading: "Centimetres and metres",
            body: "Use a **ruler** to measure in centimetres (cm). Line up the zero end of the ruler with the start of the object — don't start from the edge! For longer distances, use **metres** (m): 1 metre = 100 centimetres. A door is about 2 metres tall; a pencil is about 15 cm long.",
          },
          {
            heading: "Comparing lengths",
            body: "Compare lengths by measuring both with the same unit. A pencil at 14 cm is shorter than a crayon at 18 cm. To find 'how much longer', subtract: 18 − 14 = 4 cm longer. Always include the unit in your answer.",
          },
          {
            heading: "Estimating",
            body: "Before measuring, estimate: 'about 10 cm', 'about 1 metre'. After measuring, check if the actual length is close to your estimate. This builds number sense for measure.",
          },
        ],
        keyFormulas: [
          { name: "Units", statement: "1 m = 100 cm; ruler measures in cm" },
          {
            name: "Compare",
            statement: "Difference = longer − shorter (same unit)",
          },
        ],
        workedExample: {
          problem:
            "A ribbon is 25 cm long. A string is 18 cm long. How much longer is the ribbon?",
          solution: "25 − 18 = 7 cm longer.",
        },
      },
      questions: [
        {
          id: "edpm2-u3-meas-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which unit would you use to measure a pencil?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Metres" },
              { id: "b", text: "Kilometres" },
              { id: "c", text: "Centimetres" },
              { id: "d", text: "Millilitres" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Units",
                statement: "Pencil is short → centimetres.",
              },
            ],
            steps: [
              {
                reasoning: "Pencil length fits cm scale.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Centimetres",
            commonErrors: ["Choosing metres — too big a unit."],
          },
        },
        {
          id: "edpm2-u3-meas-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A pencil is 12 cm long and a crayon is 9 cm long. How much longer is the pencil?",
          response: {
            type: "numeric",
            parts: [
              { label: "Difference", answer: 3, tolerance: 0, unit: "cm" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparing",
                statement: "12 − 9 = 3 cm.",
              },
            ],
            steps: [
              {
                reasoning: "Same unit (cm) → subtract.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "12 − 9 = 3.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3 cm longer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3 cm",
            commonErrors: ["Answering 21 — adding instead of subtracting."],
          },
        },
        {
          id: "edpm2-u3-meas-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Tom measures his book but starts the ruler at the 1 cm mark instead of 0. He reads 15 cm. Is his measurement correct? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Using a ruler",
                statement: "Must align zero with the start.",
              },
            ],
            steps: [
              {
                reasoning: "Identify error: started at 1 not 0.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Measurement is 1 cm too long.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Actual length = 15 − 1 = 14 cm.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "No — actual length is 14 cm (he measured 1 cm extra)",
            commonErrors: ["Saying it's fine because he used a ruler."],
          },
        },
        {
          id: "edpm2-u3-meas-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "You measure three ribbons: red = 20 cm, blue = 35 cm, green = 28 cm.",
          parts: [
            {
              label: "a",
              prompt: "Which ribbon is longest? Which is shortest?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "How much longer is the blue ribbon than the red?",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "If you join the red and green ribbons end to end, how long is the total?",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Measure problems",
                statement: "Compare and add lengths in cm.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Longest = blue (35), shortest = red (20).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Both correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "35 − 20 = 15 cm.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Answer: 15 cm longer.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Unit included.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "20 + 28 = 48 cm.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Tens: 20 + 20 = 40, 8 more = 48.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 48 cm.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Unit included.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reasoning about joining lengths.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Blue longest, red shortest; 15 cm; 48 cm",
            commonErrors: ["Adding all three ribbons for part (c)."],
          },
        },
      ],
    },
    {
      id: "edpm2-u3-data",
      title: "Collecting and showing data",
      skill:
        "Collect data using tally charts and pictograms and answer questions.",
      lesson: {
        sections: [
          {
            heading: "Collecting data",
            body: "Ask a question with clear choices: 'What is your favourite fruit?' Options: apple, banana, orange. Record each answer with a **tally mark**. Count in groups of 5: ||||| = 5.",
          },
          {
            heading: "Tally charts",
            body: "A tally chart lists choices with tally marks. Count each row: groups of 5 × 5 + leftover marks. To find 'how many more', subtract the smaller total from the larger. 'Altogether' means add all totals.",
          },
          {
            heading: "Pictograms",
            body: "A pictogram uses pictures instead of tallies. Check the **key** — it tells you what each symbol represents. If 1 star = 2 children, 5 stars = 10 children. Always use the key before answering.",
          },
        ],
        keyFormulas: [
          { name: "Tally", statement: "Groups of 5: ||||| ||| = 8" },
          { name: "Pictogram", statement: "symbols × key value = total" },
        ],
        workedExample: {
          problem:
            "A pictogram shows pets. Key: 1 paw = 3 children. Dogs have 4 paws. How many chose dogs?",
          solution: "4 × 3 = 12 children chose dogs.",
        },
      },
      questions: [
        {
          id: "edpm2-u3-data-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does ||||| ||| represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "8" },
              { id: "b", text: "7" },
              { id: "c", text: "10" },
              { id: "d", text: "9" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tally counting",
                statement: "5 + 3 = 8.",
              },
            ],
            steps: [
              { reasoning: "Group of 5 plus 3 = 8.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 8",
            commonErrors: ["Counting 10 — miscounting the group."],
          },
        },
        {
          id: "edpm2-u3-data-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A pictogram key says 1 star = 4 votes. A candidate has 3 stars. How many votes?",
          response: {
            type: "numeric",
            parts: [{ label: "Votes", answer: 12, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pictogram",
                statement: "3 × 4 = 12.",
              },
            ],
            steps: [
              { reasoning: "3 stars × 4 votes = 12.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12 votes.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
            commonErrors: ["Adding 3 + 4 = 7 instead of multiplying."],
          },
        },
        {
          id: "edpm2-u3-data-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a tally chart, 'Red' has ||||| |||| and 'Blue' has ||||| |||. How many more chose Red?",
          response: {
            type: "numeric",
            parts: [{ label: "Difference", answer: 1, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparing data",
                statement: "Red = 9, Blue = 8, difference = 1.",
              },
            ],
            steps: [
              { reasoning: "Red: 5 + 4 = 9.", marks: 1, markCode: "M" },
              { reasoning: "Blue: 5 + 3 = 8.", marks: 1, markCode: "M" },
              { reasoning: "9 − 8 = 1.", marks: 1, markCode: "A" },
              { reasoning: "Answer: 1 more.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1",
            commonErrors: [
              "Subtracting tally marks without counting totals first.",
            ],
          },
        },
        {
          id: "edpm2-u3-data-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "You survey your class: favourite season. Winter: ||||| || = 7, Spring: ||||| ||||| = 10, Summer: ||||| = 5, Autumn: |||| = 4.",
          parts: [
            {
              label: "a",
              prompt: "How many children chose each season?",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Which season is most popular? Which is least?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "How many children did you survey altogether?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data analysis",
                statement: "Count tallies; compare and total.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Winter = 7, Spring = 10, Summer = 5, Autumn = 4.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "All four correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Tally counting accurate.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Reasoning clear.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "Most = Spring (10), least = Autumn (4).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Both correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Total = 7 + 10 + 5 + 4 = 26.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 26 children.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Addition correct.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Reasoning clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "7, 10, 5, 4; Spring most, Autumn least; 26",
            commonErrors: ["Miscounting the groups of five in the tallies."],
          },
        },
      ],
    },
  ],
};
