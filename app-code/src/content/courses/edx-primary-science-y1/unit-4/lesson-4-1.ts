import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "edps1-u4-lesson-4-1",
  code: "4-1",
  title: "Observing and Comparing",
  goal: "I CAN observe carefully and compare objects and living things.",
  standards: ["Working Scientifically"],
  vocabulary: [
    { term: "Observation", definition: "Noticing details using your senses." },
    {
      term: "Compare",
      definition: "Find ways things are the same or different.",
    },
    { term: "Similar", definition: "Alike in some ways." },
    { term: "Different", definition: "Not alike in some ways." },
  ],
  concepts: [
    {
      id: "edps1-u4-observe",
      title: "Careful observation",
      skill: "Observe using senses and describe what you see.",
      lesson: {
        sections: [
          {
            heading: "Observing carefully",
            body: "Observation means using your eyes, ears, nose, hands and sometimes taste to notice things. Scientists look closely for details: colour, size, shape, texture, pattern, movement. Write or draw what you notice — good observations include lots of detail.",
          },
          {
            heading: "Describing observations",
            body: "Describe what you see using clear words: 'The leaf is green, pointy and has lines running through it.' Don't guess — describe what you actually observe. 'I think it might be...' is a prediction, not an observation.",
          },
        ],
        keyFormulas: [
          { name: "Observation", statement: "Use senses + describe details" },
        ],
        workedExample: {
          problem: "Observe a feather. What details would you note?",
          solution: "Colour, texture, length, shape of tip, any pattern.",
        },
      },
      questions: [
        {
          id: "edps1-u4-obs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sense do you use to observe a flower's smell?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sight" },
              { id: "b", text: "Smell" },
              { id: "c", text: "Touch" },
              { id: "d", text: "Hearing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Observation",
                statement: "Use senses.",
              },
            ],
            steps: [
              { reasoning: "Smell detects odours.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Smell",
            commonErrors: ["Wrong sense."],
          },
        },
        {
          id: "edps1-u4-obs-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is an observation, not a guess?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I think the rock is heavy" },
              { id: "b", text: "The rock is grey and has bumps" },
              { id: "c", text: "The rock might be old" },
              { id: "d", text: "The rock could be from a volcano" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Observation vs guess",
                statement: "Describe, don't speculate.",
              },
            ],
            steps: [
              {
                reasoning: "Only (b) describes what is actually seen.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Grey with bumps",
            commonErrors: ["Choosing a guess."],
          },
        },
        {
          id: "edps1-u4-obs-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write three observations about a leaf you can see.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Observation",
                statement: "Three detailed observations.",
              },
            ],
            steps: [
              { reasoning: "Colour described.", marks: 1, markCode: "M" },
              {
                reasoning: "Shape/texture described.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All are observations, not guesses.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Three detailed leaf observations",
            commonErrors: ["Guesses instead of observations."],
          },
        },
        {
          id: "edps1-u4-obs-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is it important for scientists to observe carefully? Give two reasons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Why observe",
                statement: "Accurate data + fair tests.",
              },
            ],
            steps: [
              {
                reasoning: "Good observations = accurate information.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Helps compare and find patterns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Prevents wrong conclusions.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Accuracy + finding patterns",
            commonErrors: ["Vague reasons."],
          },
        },
      ],
    },
    {
      id: "edps1-u4-compare",
      title: "Comparing and Sorting",
      skill: "Compare objects and sort them into groups.",
      lesson: {
        sections: [
          {
            heading: "Comparing",
            body: "Comparing means finding similarities AND differences. Look at two things and ask: What is the same? What is different? Use words like 'both', 'same', 'different', 'whereas', 'but'. 'Both are animals, but the cat has fur and the fish has scales.'",
          },
          {
            heading: "Sorting and classifying",
            body: "Sorting means grouping things by a feature: colour, size, shape, material, living or non-living. You can sort the same objects different ways — buttons by colour OR by size. A good classification uses ONE clear rule.",
          },
        ],
        keyFormulas: [
          { name: "Compare", statement: "Same + different" },
          { name: "Sort", statement: "Group by one clear rule" },
        ],
        workedExample: {
          problem: "Sort these: apple, banana, carrot, grape. How?",
          solution:
            "By type: fruits (apple, banana, grape) vs vegetable (carrot). Or by colour.",
        },
      },
      questions: [
        {
          id: "edps1-u4-cmp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'compare' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Find only differences" },
              { id: "b", text: "Find similarities and differences" },
              { id: "c", text: "Put things in order" },
              { id: "d", text: "Count things" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Compare",
                statement: "Same + different.",
              },
            ],
            steps: [
              {
                reasoning: "Compare = both similarities and differences.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Similarities and differences",
            commonErrors: ["Only differences."],
          },
        },
        {
          id: "edps1-u4-cmp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Sort these animals: lion, goldfish, eagle, hamster. What is the rule?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "By colour" },
              { id: "b", text: "By where they live" },
              { id: "c", text: "By size" },
              { id: "d", text: "By name" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Classifying",
                statement: "Group by clear rule.",
              },
            ],
            steps: [
              {
                reasoning: "Land animals vs water/bird — habitat rule.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Where they live",
            commonErrors: ["No clear rule."],
          },
        },
        {
          id: "edps1-u4-cmp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare a cat and a dog. Give one similarity and one difference.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparing",
                statement: "Same + different.",
              },
            ],
            steps: [
              {
                reasoning: "Similarity: both pets/mammals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Difference: cat is independent, dog is loyal.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Both pets; cat independent, dog loyal",
            commonErrors: ["Only one aspect."],
          },
        },
        {
          id: "edps1-u4-cmp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Sort these objects two different ways: red ball, blue ball, red block, blue block.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multiple sorting",
                statement: "Two valid rules.",
              },
            ],
            steps: [
              {
                reasoning: "By colour: red (ball+block) vs blue (ball+block).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "By shape: balls vs blocks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both rules are clear and consistent.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "By colour OR by shape",
            commonErrors: ["Mixed-up rules."],
          },
        },
      ],
    },
    {
      id: "edps1-u4-measure",
      title: "Measuring and Recording",
      skill: "Measure length, mass and capacity simply.",
      lesson: {
        sections: [
          {
            heading: "Simple measuring",
            body: "Scientists measure to compare: length (how long), mass (how heavy), capacity (how much liquid it holds), temperature (how hot/cold). Use non-standard units first: blocks, hand spans, cups. Then standard units: centimetres, grams, millilitres.",
          },
          {
            heading: "Recording results",
            body: "Record measurements clearly: what you measured, the tool used, and the result. 'The pencil was 12 cm long.' Drawings, charts and tables help organise results so patterns are easy to see.",
          },
        ],
        keyFormulas: [
          {
            name: "Measures",
            statement: "Length + mass + capacity + temperature",
          },
        ],
        workedExample: {
          problem: "How would you measure how much water a bottle holds?",
          solution:
            "Pour into a measuring jug and read the scale, or fill cups and count.",
        },
      },
      questions: [
        {
          id: "edps1-u4-me-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do we measure to find how heavy something is?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Length" },
              { id: "b", text: "Mass" },
              { id: "c", text: "Capacity" },
              { id: "d", text: "Temperature" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mass", statement: "How heavy." },
            ],
            steps: [
              { reasoning: "Mass = heaviness.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Mass",
            commonErrors: ["Confusing measures."],
          },
        },
        {
          id: "edps1-u4-me-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a standard unit of length?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hand span" },
              { id: "b", text: "Centimetre" },
              { id: "c", text: "Footstep" },
              { id: "d", text: "Book" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Units",
                statement: "cm is standard.",
              },
            ],
            steps: [
              {
                reasoning: "Centimetre is a standard unit.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Centimetre",
            commonErrors: ["Non-standard unit."],
          },
        },
        {
          id: "edps1-u4-me-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe how you would measure the capacity of a cup.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Capacity",
                statement: "Fill and measure.",
              },
            ],
            steps: [
              { reasoning: "Fill cup with water.", marks: 1, markCode: "M" },
              {
                reasoning: "Pour into measuring jug or count cups.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Record result clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fill and measure method",
            commonErrors: ["No method."],
          },
        },
        {
          id: "edps1-u4-me-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do scientists use standard units instead of hand spans? Give two reasons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Standard units",
                statement: "Fair + repeatable.",
              },
            ],
            steps: [
              {
                reasoning: "Hand spans differ between people.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Standard units are the same everywhere.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Allows fair comparison and repeatability.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Fair + repeatable measurements",
            commonErrors: ["Vague reasons."],
          },
        },
      ],
    },
    {
      id: "edps1-u4-record",
      title: "Recording and Presenting Data",
      skill: "Draw and complete simple charts and tables.",
      lesson: {
        sections: [
          {
            heading: "Tables and charts",
            body: "Data can be shown in tables (rows and columns), pictograms (pictures for counts), bar charts (bars for amounts) and tally charts (marks for counting). Label everything clearly: what is being counted, the categories, and the units.",
          },
          {
            heading: "Finding patterns",
            body: "Once data is recorded, look for patterns: Which is most common? Which is least? Are there differences between groups? Patterns in data help scientists answer questions and spot interesting results.",
          },
        ],
        keyFormulas: [
          {
            name: "Data display",
            statement: "Table + pictogram + bar chart + tally",
          },
        ],
        workedExample: {
          problem:
            "You counted 5 red, 3 blue, 8 green beads. How would you show this?",
          solution:
            "Bar chart or table: Red 5, Blue 3, Green 8 — green is most common.",
        },
      },
      questions: [
        {
          id: "edps1-u4-rec-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a tally chart used for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Drawing pictures" },
              { id: "b", text: "Counting quickly with marks" },
              { id: "c", text: "Measuring length" },
              { id: "d", text: "Writing sentences" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tally",
                statement: "Marks for counting.",
              },
            ],
            steps: [
              {
                reasoning: "Tally = quick counting marks.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Counting with marks",
            commonErrors: ["Wrong purpose."],
          },
        },
        {
          id: "edps1-u4-rec-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a bar chart, what does a taller bar show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Something smaller" },
              { id: "b", text: "A bigger amount" },
              { id: "c", text: "A different colour" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Bar charts",
                statement: "Height = amount.",
              },
            ],
            steps: [
              {
                reasoning: "Taller bar = larger value.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Bigger amount",
            commonErrors: ["Inverted understanding."],
          },
        },
        {
          id: "edps1-u4-rec-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "You counted: apples 7, pears 4, bananas 9. Which fruit is most common? How do you know?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Data patterns",
                statement: "Compare values.",
              },
            ],
            steps: [
              {
                reasoning: "Bananas have highest count (9).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "9 > 7 > 4.", marks: 1, markCode: "M" },
              { reasoning: "Clear comparison shown.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bananas — highest count",
            commonErrors: ["No comparison."],
          },
        },
        {
          id: "edps1-u4-rec-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is it important to label a chart? Give two reasons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Labelling",
                statement: "Clarity + communication.",
              },
            ],
            steps: [
              {
                reasoning: "Labels explain what data shows.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Others can understand without asking.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Prevents misreading.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Clarity + prevents misreading",
            commonErrors: ["Vague reasons."],
          },
        },
      ],
    },
  ],
};
