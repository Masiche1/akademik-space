import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "edpe4-u2-lesson-2-2",
  code: "2-2",
  title: "Predicting and Connecting Ideas",
  goal: "I CAN predict what happens next and connect ideas across a text.",
  standards: ["Year 4 Reading"],
  vocabulary: [
    {
      term: "Prediction",
      definition: "A guess about what happens next based on clues.",
    },
    {
      term: "Connection",
      definition: "Link between ideas, events or characters.",
    },
    { term: "Cause and effect", definition: "One thing leads to another." },
    { term: "Theme", definition: "The main message or idea of a text." },
  ],
  concepts: [
    {
      id: "edpe4-u2-predict",
      title: "Predicting and connecting",
      skill: "Predict events and connect ideas in texts.",
      lesson: {
        sections: [
          {
            heading: "Prediction",
            body: "Use clues to predict: 'Dark clouds gathered' → rain coming. 'She grabbed her coat' → going outside. Predictions should be logical, based on evidence — then check if they come true.",
          },
          {
            heading: "Connections",
            body: "Connect ideas across the text: how does the beginning relate to the end? What caused what? 'He was late because he missed the bus' — cause and effect. Themes like 'friendship' or 'courage' run through stories.",
          },
        ],
        keyFormulas: [
          { name: "Prediction", statement: "Clues → logical guess" },
          { name: "Cause/effect", statement: "What led to what" },
          { name: "Theme", statement: "Main message of text" },
        ],
        workedExample: {
          problem:
            "Text: 'The boy practised his lines all week. On stage, he forgot them.' What might happen next?",
          solution: "He might panic or improvise — prediction based on nerves.",
        },
      },
      questions: [
        {
          id: "edpe4-u2-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Text: 'Dark clouds gathered and thunder rumbled.' What will probably happen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It will rain" },
              { id: "b", text: "It will snow" },
              { id: "c", text: "Nothing" },
              { id: "d", text: "It will be sunny" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prediction",
                statement: "Storm clues → rain.",
              },
            ],
            steps: [
              { reasoning: "Use weather clues.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It will rain",
            commonErrors: ["Ignoring clues."],
          },
        },
        {
          id: "edpe4-u2-pr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Text: 'She had practised every day. On the day, she felt sick.' Why might she perform badly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She didn't practise" },
              { id: "b", text: "She was ill" },
              { id: "c", text: "No reason" },
              { id: "d", text: "She was lazy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cause/effect",
                statement: "Sick → poor performance.",
              },
            ],
            steps: [
              { reasoning: "Link cause to effect.", marks: 1, markCode: "M" },
              { reasoning: "Answer: she was ill.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** She was ill",
            commonErrors: ["Saying 'didn't practise' — text says she did."],
          },
        },
        {
          id: "edpe4-u2-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Text: 'The seeds were planted in spring. By summer, flowers covered the garden.' What connects these events?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Connection",
                statement: "Planting caused flowers to grow.",
              },
            ],
            steps: [
              {
                reasoning: "Identify cause/effect link.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Connection explained.", marks: 1, markCode: "A" },
              { reasoning: "Makes sense.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Planting seeds caused flowers to grow",
            commonErrors: ["No connection identified."],
          },
        },
        {
          id: "edpe4-u2-pr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Story: 'A girl wanted to fly. She built a machine from scraps. It failed, but she tried again. Finally it worked.'",
          parts: [
            { label: "a", prompt: "What's the theme?", marks: 1 },
            { label: "b", prompt: "What caused the failure?", marks: 1 },
            {
              label: "c",
              prompt: "What does the ending suggest about the girl?",
              marks: 1,
            },
            {
              label: "d",
              prompt: "Predict what she'll do with her invention.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Theme and prediction",
                statement:
                  "Persistence; machine imperfect; determined; use it to fly/help.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Theme: persistence/determination.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Failure from imperfect machine.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Determined, inventive.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Logical prediction.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Persistence; imperfect machine; determined; use it to fly",
            commonErrors: ["No theme or weak prediction."],
          },
        },
      ],
    },
    {
      id: "edpe4-u2-structure",
      title: "Text structure and organisation",
      skill:
        "Understand how texts are organised: headings, paragraphs, chronological order.",
      lesson: {
        sections: [
          {
            heading: "How texts are organised",
            body: "Texts use structure to help readers: **headings** divide sections, **paragraphs** group ideas, **chronological order** tells events in time order, **compare/contrast** structures show similarities and differences.",
          },
          {
            heading: "Finding the structure",
            body: "Ask: is this in time order? Is it organised by topic or by comparison? Look at headings, paragraph breaks, and signal words like 'first', 'then', 'however', 'on the other hand'.",
          },
        ],
        keyFormulas: [
          {
            name: "Chronological",
            statement: "Time order: first, then, finally",
          },
          {
            name: "Compare/contrast",
            statement: "Shows similarities and differences",
          },
          { name: "Headings", statement: "Organise sections by topic" },
        ],
        workedExample: {
          problem:
            "A text says 'First we mixed the flour. Then we added eggs. Finally we baked it.' What structure is this?",
          solution:
            "Chronological — time order with 'first', 'then', 'finally'.",
        },
      },
      questions: [
        {
          id: "edpe4-u2-st-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a heading do in a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shows what a section is about" },
              { id: "b", text: "Ends the text" },
              { id: "c", text: "Lists characters" },
              { id: "d", text: "Gives the answer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Headings",
                statement: "Show section topics.",
              },
            ],
            steps: [
              { reasoning: "Headings organise.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Shows what a section is about",
            commonErrors: ["Not understanding purpose."],
          },
        },
        {
          id: "edpe4-u2-st-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A text compares 'Cats vs Dogs' using 'both', 'but', 'whereas'. What structure is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Compare and contrast" },
              { id: "b", text: "Description" },
              { id: "c", text: "Problem/solution" },
              { id: "d", text: "Chronological" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Text structure",
                statement: "Comparison words = compare/contrast.",
              },
            ],
            steps: [
              { reasoning: "Identify signal words.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: compare/contrast.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Compare and contrast",
            commonErrors: ["Not recognising structure."],
          },
        },
        {
          id: "edpe4-u2-st-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What order are events in if a text uses 'first', 'then', 'finally'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Chronological order",
                statement: "Time order.",
              },
            ],
            steps: [
              { reasoning: "Identify time signals.", marks: 1, markCode: "M" },
              { reasoning: "Answer: chronological.", marks: 1, markCode: "A" },
              { reasoning: "Explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Chronological (time) order",
            commonErrors: ["Wrong structure identified."],
          },
        },
        {
          id: "edpe4-u2-st-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A report has headings: 'Introduction', 'Main Features', 'Conclusion'. How does this structure help readers?",
          parts: [
            { label: "a", prompt: "What does each section do?", marks: 1 },
            { label: "b", prompt: "Why are headings useful?", marks: 1 },
            {
              label: "c",
              prompt: "How would you find specific information?",
              marks: 1,
            },
            { label: "d", prompt: "What structure is this?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Text structure",
                statement:
                  "Intro/develop/conclude; headings organise; navigate by headings.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sections explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Headings organise information.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Use headings to find info.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Structured report format.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Intro/develop/conclude; organise; use headings; structured report",
            commonErrors: ["Not understanding structure purpose."],
          },
        },
      ],
    },
  ],
};
