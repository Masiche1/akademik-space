import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edpm2-u4-lesson-4-1",
  code: "4-1",
  title: "Properties of Shapes",
  goal: "I CAN describe and sort shapes by their properties.",
  standards: ["Year 2 Properties of shape"],
  vocabulary: [
    {
      term: "Property",
      definition:
        "Something you can say about a shape — sides, corners, symmetry.",
    },
    {
      term: "Symmetry",
      definition: "When one half of a shape matches the other half.",
    },
    { term: "Right angle", definition: "A square corner, 90 degrees." },
    { term: "Vertex", definition: "A corner point where two sides meet." },
  ],
  concepts: [
    {
      id: "edpm2-u4-shape",
      title: "Describing Shapes",
      skill: "Describe shapes using sides, corners and symmetry.",
      lesson: {
        sections: [
          {
            heading: "Sides and corners",
            body: "Every shape has sides and corners (vertices). A triangle has 3 sides and 3 corners. A square has 4 equal sides and 4 corners. A rectangle has 2 long sides and 2 short sides. A pentagon has 5 sides; a hexagon has 6.",
          },
          {
            heading: "Symmetry",
            body: "A shape has symmetry if a line splits it into two matching halves. A square has 4 lines of symmetry; a rectangle has 2; a triangle may have 0, 1 or 3 depending on the type. Circles have infinite lines of symmetry — any line through the centre works.",
          },
        ],
        keyFormulas: [
          { name: "Triangle", statement: "3 sides, 3 corners" },
          { name: "Square", statement: "4 equal sides, 4 right angles" },
        ],
        workedExample: {
          problem: "How many sides and corners does a pentagon have?",
          solution: "5 sides, 5 corners.",
        },
      },
      questions: [
        {
          id: "edpm2-u4-sh-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many sides does a hexagon have?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "4" },
              { id: "b", text: "5" },
              { id: "c", text: "6" },
              { id: "d", text: "8" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Shapes", statement: "Hexagon = 6." },
            ],
            steps: [
              { reasoning: "Hexagon = 6 sides.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 6",
            commonErrors: ["Wrong count."],
          },
        },
        {
          id: "edpm2-u4-sh-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a right angle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A wide angle" },
              { id: "b", text: "A square corner (90°)" },
              { id: "c", text: "A pointy angle" },
              { id: "d", text: "A straight line" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Right angle",
                statement: "90 degrees.",
              },
            ],
            steps: [
              { reasoning: "Right angle = 90°.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(b)** 90°",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edpm2-u4-sh-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Sort these shapes by number of sides: triangle, square, pentagon, hexagon.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Shape sorting",
                statement: "Count sides.",
              },
            ],
            steps: [
              {
                reasoning: "Triangle = 3, square = 4.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Pentagon = 5, hexagon = 6.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Correct order given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3,4,5,6",
            commonErrors: ["Wrong counts."],
          },
        },
        {
          id: "edpm2-u4-sh-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A shape has 4 sides, 4 right angles, but only 2 pairs of equal sides. What shape is it? Explain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Shape identification",
                statement: "Rectangle.",
              },
            ],
            steps: [
              {
                reasoning: "4 sides + 4 right angles = quadrilateral.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Only 2 pairs equal = not square.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: rectangle.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Rectangle",
            commonErrors: ["Wrong shape."],
          },
        },
      ],
    },
    {
      id: "edpm2-u4-position",
      title: "Position and Direction",
      skill: "Use position words and follow directions.",
      lesson: {
        sections: [
          {
            heading: "Position words",
            body: "Position words tell where things are: above, below, next to, between, left, right, in front of, behind, inside, outside. On a grid, position is given by coordinates — column (across) then row (up/down).",
          },
          {
            heading: "Directions",
            body: "The four main directions are North, South, East, West. Turn instructions: left, right, straight on, quarter turn, half turn. A quarter turn is 90°, a half turn is 180°, a full turn is 360°. Compass directions help navigate.",
          },
        ],
        keyFormulas: [
          { name: "Quarter turn", statement: "90°" },
          { name: "Half turn", statement: "180°" },
        ],
        workedExample: {
          problem:
            "A shape is facing North. After a quarter turn clockwise, which way does it face?",
          solution: "East.",
        },
      },
      questions: [
        {
          id: "edpm2-u4-pos-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which direction is opposite to North?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "East" },
              { id: "b", text: "South" },
              { id: "c", text: "West" },
              { id: "d", text: "North" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Directions",
                statement: "South = opposite North.",
              },
            ],
            steps: [
              { reasoning: "South = opposite.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** South",
            commonErrors: ["Wrong direction."],
          },
        },
        {
          id: "edpm2-u4-pos-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a quarter turn?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "90°" },
              { id: "b", text: "45°" },
              { id: "c", text: "180°" },
              { id: "d", text: "360°" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Turns",
                statement: "Quarter = 90°.",
              },
            ],
            steps: [
              { reasoning: "Quarter turn = 90°.", marks: 2, markCode: "B" },
            ],
            finalAnswer: "**(a)** 90°",
            commonErrors: ["Wrong angle."],
          },
        },
        {
          id: "edpm2-u4-pos-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "On a grid, point A is at (3, 2). What does the '3' mean?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Coordinates",
                statement: "First number = column.",
              },
            ],
            steps: [
              {
                reasoning: "First number = column across.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "3 means 3rd column.", marks: 1, markCode: "M" },
              { reasoning: "Answer stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3rd column",
            commonErrors: ["Reversed order."],
          },
        },
        {
          id: "edpm2-u4-pos-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A robot faces East. It makes a half turn clockwise then a quarter turn anticlockwise. Which way does it face now?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Turns",
                statement: "Half=180°, quarter=90°.",
              },
            ],
            steps: [
              {
                reasoning: "East + half turn = West.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "West + quarter anticlockwise = South.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: South.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "South",
            commonErrors: ["Wrong direction math."],
          },
        },
      ],
    },
    {
      id: "edpm2-u4-problems",
      title: "Multi-Step Problems",
      skill: "Solve problems needing two or more steps.",
      lesson: {
        sections: [
          {
            heading: "Two-step problems",
            body: "Some problems need more than one calculation. 'A shop has 24 pencils. It sells 8 in the morning and 6 in the afternoon. How many are left?' Step 1: 8 + 6 = 14 sold. Step 2: 24 - 14 = 10 left. Always do the steps in a sensible order.",
          },
          {
            heading: "Choosing operations",
            body: "Decide which operation: 'total' or 'altogether' usually means add; 'left' or 'remaining' means subtract; 'equal groups' means multiply; 'share' means divide. Read the question carefully to spot the keywords.",
          },
        ],
        keyFormulas: [
          { name: "Keywords", statement: "total=+, left=-, groups=×, share=÷" },
        ],
        workedExample: {
          problem:
            "There are 15 red and 12 blue balloons. 9 pop. How many are left?",
          solution: "15 + 12 = 27. 27 - 9 = 18 left.",
        },
      },
      questions: [
        {
          id: "edpm2-u4-mp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A box has 20 pencils. 5 are taken out. How many are left?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "15" },
              { id: "b", text: "25" },
              { id: "c", text: "20" },
              { id: "d", text: "5" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Subtraction", statement: "20 - 5 = 15." },
            ],
            steps: [{ reasoning: "20 - 5 = 15.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 15",
            commonErrors: ["Wrong operation."],
          },
        },
        {
          id: "edpm2-u4-mp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "There are 3 bags with 4 apples each. How many apples altogether?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "7" },
              { id: "b", text: "12" },
              { id: "c", text: "10" },
              { id: "d", text: "15" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multiplication",
                statement: "3 × 4 = 12.",
              },
            ],
            steps: [{ reasoning: "3 × 4 = 12.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** 12",
            commonErrors: ["Added instead of multiplied."],
          },
        },
        {
          id: "edpm2-u4-mp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "There are 18 children. 7 leave. Then 5 more arrive. How many children are there now?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Two-step problems",
                statement: "18 - 7 + 5 = 16.",
              },
            ],
            steps: [
              { reasoning: "18 - 7 = 11.", marks: 1, markCode: "M" },
              { reasoning: "11 + 5 = 16.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 16.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "16",
            commonErrors: ["Wrong order."],
          },
        },
        {
          id: "edpm2-u4-mp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A shop sells 6 pencils in the morning and 4 in the afternoon. It started with 20 pencils. How many are left? Show both steps.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Two-step problems",
                statement: "6+4=10 sold; 20-10=10 left.",
              },
            ],
            steps: [
              { reasoning: "Sold: 6 + 4 = 10.", marks: 1, markCode: "M" },
              { reasoning: "Left: 20 - 10 = 10.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 10 pencils.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "10 pencils",
            commonErrors: ["Only one step."],
          },
        },
      ],
    },
    {
      id: "edpm2-u4-data",
      title: "Data Handling",
      skill: "Collect, record and interpret data using charts.",
      lesson: {
        sections: [
          {
            heading: "Charts and graphs",
            body: "Data can be shown in different ways: tally charts (marks for counting), pictograms (pictures), block graphs (columns), and tables. Each has a purpose — tally is quick for counting, pictograms are visual, block graphs compare easily.",
          },
          {
            heading: "Interpreting data",
            body: "To read data: check the scale/key first, find the category, read the value. Questions to ask: which is most/least? How many more? What is the total? Always look at the chart carefully before answering.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "A pictogram shows 5 stars for apples (each star = 2). How many apples?",
          solution: "5 × 2 = 10 apples.",
        },
      },
      questions: [
        {
          id: "edpm2-u4-dh-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a tally chart use to count?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pictures" },
              { id: "b", text: "Marks" },
              { id: "c", text: "Numbers" },
              { id: "d", text: "Letters" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tally chart",
                statement: "Uses marks.",
              },
            ],
            steps: [{ reasoning: "Tally = marks.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Marks",
            commonErrors: ["Wrong answer."],
          },
        },
        {
          id: "edpm2-u4-dh-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a pictogram, what does the key tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The colours" },
              { id: "b", text: "What each symbol represents" },
              { id: "c", text: "The title" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Pictograms",
                statement: "Key = symbol value.",
              },
            ],
            steps: [{ reasoning: "Key = value.", marks: 2, markCode: "B" }],
            finalAnswer: "**(b)** Symbol value",
            commonErrors: ["Wrong answer."],
          },
        },
        {
          id: "edpm2-u4-dh-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A block graph shows: Monday = 4, Tuesday = 6, Wednesday = 5. Which day had the most? How many more than Monday?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Graph reading",
                statement: "Compare + difference.",
              },
            ],
            steps: [
              { reasoning: "Tuesday = 6 is most.", marks: 1, markCode: "M" },
              {
                reasoning: "6 - 4 = 2 more than Monday.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Both answers given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tuesday; 2 more",
            commonErrors: ["Wrong day."],
          },
        },
        {
          id: "edpm2-u4-dh-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Design a survey question and explain how you would record and display the results.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data collection",
                statement: "Question+method+display.",
              },
            ],
            steps: [
              {
                reasoning: "Clear survey question, e.g. favourite fruit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Record method — tally chart or table.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Display — pictogram or block graph with key.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Question+record+display",
            commonErrors: ["Incomplete."],
          },
        },
      ],
    },
  ],
};
