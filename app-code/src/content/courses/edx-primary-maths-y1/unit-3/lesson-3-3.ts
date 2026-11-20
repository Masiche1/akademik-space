import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "edpm1-u3-lesson-3-3",
  code: "3-3",
  title: "Data Handling: Pictograms and Tally Charts",
  goal: "I CAN read and make simple pictograms and tally charts to organise data.",
  standards: ["Year 1 Statistics"],
  vocabulary: [
    {
      term: "Data",
      definition: "Information we collect, like favourite colours or pets.",
    },
    {
      term: "Pictogram",
      definition: "A chart that uses pictures or symbols to show data.",
    },
    {
      term: "Tally chart",
      definition:
        "A chart that counts using tally marks: |, ||, |||, ||||, and ||||| for five.",
    },
    {
      term: "Key",
      definition:
        "The part of a chart that explains what each symbol stands for.",
    },
    {
      term: "Most",
      definition: "The largest amount; 'fewest' is the smallest.",
    },
  ],
  concepts: [
    {
      id: "edpm1-u3-pictograms",
      title: "Reading pictograms",
      skill:
        "Read a pictogram using its key and answer questions about the data.",
      lesson: {
        sections: [
          {
            heading: "What is a pictogram?",
            body: "A **pictogram** shows data using pictures or symbols. Each symbol stands for a number — check the **key** to see what one symbol means. If the key says '1 star = 2 children', then 3 stars = 6 children.",
          },
          {
            heading: "Reading a pictogram",
            body: "To read a pictogram: 1) find the row or column for your category, 2) count the symbols, 3) multiply by the key value. For 'favourite fruit' with key '1 apple = 3 votes': 4 apple symbols = 4 × 3 = 12 votes.",
          },
          {
            heading: "Comparing data",
            body: "Pictograms let you compare: which has most? Which has fewest? How many more? To find 'how many more', subtract the smaller from the larger. 'How many altogether' means add all the values.",
          },
        ],
        keyFormulas: [
          {
            name: "Pictogram value",
            statement: "symbols × key value = data amount",
          },
          {
            name: "Compare",
            statement: "most = largest; fewest = smallest; more = difference",
          },
        ],
        workedExample: {
          problem:
            "A pictogram shows favourite pets. Key: 1 paw = 2 children. Cats have 5 paws, Dogs have 3 paws. How many children chose cats?",
          solution: "5 paws × 2 = 10 children chose cats.",
        },
      },
      questions: [
        {
          id: "edpm1-u3-pic-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A pictogram uses stars. The key says 1 star = 4 children. A row shows 3 stars. How many children is that?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7" },
              { id: "b", text: "12" },
              { id: "c", text: "34" },
              { id: "d", text: "1" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pictogram key",
                statement: "3 stars × 4 = 12.",
              },
            ],
            steps: [
              { reasoning: "3 × 4 = 12 children.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 12",
            commonErrors: ["Adding 3 + 4 = 7 instead of multiplying."],
          },
        },
        {
          id: "edpm1-u3-pic-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A pictogram shows favourite colours. Key: 1 circle = 3 children. Red has 4 circles, Blue has 2 circles. How many children chose Red?",
          response: {
            type: "numeric",
            parts: [
              { label: "Children choosing red", answer: 12, tolerance: 0 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reading pictogram",
                statement: "4 circles × 3 = 12.",
              },
            ],
            steps: [
              { reasoning: "Red has 4 circles.", marks: 1, markCode: "M" },
              { reasoning: "4 × 3 = 12.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12 children.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12 children",
            commonErrors: ["Reading Blue's row instead of Red's."],
          },
        },
        {
          id: "edpm1-u3-pic-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Using the same pictogram (key: 1 circle = 3 children): Red has 4 circles, Blue has 2 circles. How many more children chose Red than Blue?",
          response: {
            type: "numeric",
            parts: [{ label: "Difference", answer: 6, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparing data",
                statement: "Red 12, Blue 6, difference 6.",
              },
            ],
            steps: [
              { reasoning: "Red = 4 × 3 = 12.", marks: 1, markCode: "M" },
              { reasoning: "Blue = 2 × 3 = 6.", marks: 1, markCode: "M" },
              { reasoning: "12 − 6 = 6.", marks: 1, markCode: "A" },
              { reasoning: "Answer: 6 more.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6 children",
            commonErrors: [
              "Subtracting circles (4−2=2) without using the key.",
            ],
          },
        },
        {
          id: "edpm1-u3-pic-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A pictogram shows favourite fruit. Key: 1 apple = 2 children. Apple: 5 apples, Banana: 3 apples, Orange: 4 apples.",
          parts: [
            {
              label: "a",
              prompt: "How many children chose each fruit?",
              marks: 4,
            },
            {
              label: "b",
              prompt: "Which fruit is most popular? Which is least?",
              marks: 2,
            },
            {
              label: "c",
              prompt: "How many children chose fruit altogether?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Pictogram analysis",
                statement: "Multiply each row by key; compare and total.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Apple = 5 × 2 = 10.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Banana = 3 × 2 = 6.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Orange = 4 × 2 = 8.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "All three correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Most = Apple (10), least = Banana (6).",
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
                reasoning: "Total = 10 + 6 + 8 = 24.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Or 12 apples × 2 = 24.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 24 children.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reasoning clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "10, 6, 8; Apple most, Banana least; 24 altogether",
            commonErrors: ["Forgetting to use the key when finding the total."],
          },
        },
      ],
    },
    {
      id: "edpm1-u3-tally",
      title: "Tally charts",
      skill: "Count and record data using tally marks and read tally charts.",
      lesson: {
        sections: [
          {
            heading: "Tally marks",
            body: "Tally marks count quickly: | = 1, || = 2, ||| = 3, |||| = 4, and a group of five is written ||||| with a line through it. The fifth mark crosses the four — this makes counting groups of 5 easy. To count a tally chart, count the complete groups of 5 first, then add the extra marks.",
          },
          {
            heading: "Making a tally chart",
            body: "To record data: ask a question (e.g. 'What is your favourite colour?'), list the choices, then make a tally mark each time someone chooses that option. Count the totals at the end by counting groups of 5.",
          },
          {
            heading: "Reading a tally chart",
            body: "A tally chart shows categories with tally marks. To find the total for a category, count the groups of 5 (×5) plus the leftover marks. To compare, look at which category has the most tallies. To find 'how many more', subtract the totals.",
          },
        ],
        keyFormulas: [
          {
            name: "Tally marks",
            statement: "|, ||, |||, ||||, ||||| = 1, 2, 3, 4, 5",
          },
          {
            name: "Counting tallies",
            statement: "(groups of 5 × 5) + leftover marks",
          },
        ],
        workedExample: {
          problem:
            "A tally chart shows ||||| ||| for 'Red'. How many chose Red?",
          solution: "One group of 5 plus 3 more = 5 + 3 = 8.",
        },
      },
      questions: [
        {
          id: "edpm1-u3-tally-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many does the tally ||||| || represent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5" },
              { id: "b", text: "6" },
              { id: "c", text: "7" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tally counting",
                statement: "Group of 5 plus 2 = 7.",
              },
            ],
            steps: [{ reasoning: "5 + 2 = 7.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** 7",
            commonErrors: ["Counting the crossing mark separately."],
          },
        },
        {
          id: "edpm1-u3-tally-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A tally chart shows ||||| ||||| || for 'Blue'. How many chose Blue?",
          response: {
            type: "numeric",
            parts: [{ label: "Chose blue", answer: 12, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tally groups",
                statement: "Two groups of 5 = 10, plus 2 = 12.",
              },
            ],
            steps: [
              { reasoning: "Two groups of 5 = 10.", marks: 1, markCode: "M" },
              { reasoning: "10 + 2 = 12.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 12.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "12",
            commonErrors: [
              "Counting each tally mark individually and making an error.",
            ],
          },
        },
        {
          id: "edpm1-u3-tally-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "In a tally chart, 'Cats' has ||||| |||| | and 'Dogs' has ||||| ||||| ||||| . How many more chose Dogs than Cats?",
          response: {
            type: "numeric",
            parts: [{ label: "Difference", answer: 4, tolerance: 0 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparing tallies",
                statement: "Cats = 11, Dogs = 15, difference = 4.",
              },
            ],
            steps: [
              { reasoning: "Cats: 10 + 1 = 11.", marks: 1, markCode: "M" },
              { reasoning: "Dogs: 15.", marks: 1, markCode: "M" },
              { reasoning: "15 − 11 = 4.", marks: 1, markCode: "A" },
              { reasoning: "Answer: 4 more.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4",
            commonErrors: ["Subtracting tally groups instead of totals."],
          },
        },
        {
          id: "edpm1-u3-tally-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "You ask your class: 'What is your favourite fruit?' You record: ||||| ||||| || for Apple, ||||| ||||| ||||| ||| for Banana, ||||| |||| for Orange.",
          parts: [
            { label: "a", prompt: "How many chose each fruit?", marks: 4 },
            { label: "b", prompt: "Which fruit is most popular?", marks: 2 },
            {
              label: "c",
              prompt: "How many children did you ask altogether?",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Tally chart analysis",
                statement:
                  "Count groups of 5 plus leftovers; compare and total.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Apple = 10 + 2 = 12.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Banana = 15 + 3 = 18.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Orange = 10 + 4 = 14.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "All three correct.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Most = Banana (18).",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Correct fruit named.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Total = 12 + 18 + 14 = 44.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Or count all tallies.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Answer: 44 children.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Reasoning clear.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "12, 18, 14; Banana; 44 children",
            commonErrors: ["Miscounting the groups of five."],
          },
        },
      ],
    },
  ],
};
