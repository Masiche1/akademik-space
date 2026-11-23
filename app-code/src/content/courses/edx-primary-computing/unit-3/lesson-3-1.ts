import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "edxpc-u3-lesson-3-1",
  code: "3-1",
  title: "What is Data?",
  goal: "I CAN explain what data is and how computers store it.",
  standards: ["Y3-Y5 Data and information", "Data representation"],
  vocabulary: [
    {
      term: "Data",
      definition: "Facts and information collected for a purpose.",
    },
    {
      term: "Information",
      definition: "Data that has been processed to be useful.",
    },
    { term: "Input", definition: "Data that goes into a computer." },
    { term: "Output", definition: "The result a computer produces." },
  ],
  concepts: [
    {
      id: "edxpc-u3-data",
      title: "Data and Information",
      skill: "Distinguish data from information and give examples.",
      lesson: {
        sections: [
          {
            heading: "What is data?",
            body: "Data is raw facts — numbers, words, pictures or sounds. A list of scores (12, 8, 15, 7) is data. A photo of your class is data. A recording of birdsong is data. Data by itself is just facts — it does not tell a story yet.",
          },
          {
            heading: "Data becomes information",
            body: "When we process data — sort it, count it, compare it — it becomes useful information. The scores 12, 8, 15, 7 become information when we say 'the highest score was 15 and the average was 10.5'. A weather app turns temperature data into 'It will rain tomorrow' — that is information.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Is '12, 8, 15, 7' data or information?",
          solution:
            "Data — it is raw numbers. 'Highest score 15' would be information.",
        },
      },
      questions: [
        {
          id: "edxpc-u3-data-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A processed answer" },
              { id: "b", text: "Raw facts and information" },
              { id: "c", text: "A computer" },
              { id: "d", text: "A program" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Data",
                statement: "Raw facts collected for a purpose.",
              },
            ],
            steps: [
              { reasoning: "Data = raw facts.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Raw facts",
            commonErrors: ["Confusing data with information."],
          },
        },
        {
          id: "edxpc-u3-data-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of these is data?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'The tallest tree is 20m'" },
              { id: "b", text: "A list of tree heights: 15, 20, 18" },
              { id: "c", text: "A story about trees" },
              { id: "d", text: "A drawing of a tree" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data vs information",
                statement:
                  "Raw numbers are data; processed answers are information.",
              },
            ],
            steps: [
              {
                reasoning: "A list of numbers is raw data.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** List of tree heights",
            commonErrors: ["Choosing processed answers as data."],
          },
        },
        {
          id: "edxpc-u3-data-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how data becomes information, using an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data to information",
                statement: "Processing data makes it useful.",
              },
            ],
            steps: [
              {
                reasoning: "States data is raw facts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "States processing (sorting/counting/comparing) makes it information.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Clear example, e.g. scores → 'highest was 15'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Raw data + processing = useful information",
            commonErrors: ["No example given."],
          },
        },
        {
          id: "edxpc-u3-data-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A class collects data on favourite fruits: apple, banana, apple, orange, banana, apple. What information can we get from this data?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Extracting information",
                statement: "Counting and comparing data reveals patterns.",
              },
            ],
            steps: [
              {
                reasoning: "Counts correctly — apple 3, banana 2, orange 1.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "States apple is most popular.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Gives further insight, e.g. total 6 children surveyed.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Apple most popular (3), banana 2, orange 1",
            commonErrors: ["Not counting correctly."],
          },
        },
      ],
    },
    {
      id: "edxpc-u3-input",
      title: "Input and Output",
      skill: "Explain how data goes into and comes out of computers.",
      lesson: {
        sections: [
          {
            heading: "Input devices",
            body: "Input is data going INTO a computer. Input devices include: keyboard (types text), mouse (clicks and selects), touchscreen (taps), microphone (records sound), camera (takes photos), scanner (copies paper into the computer).",
          },
          {
            heading: "Output devices",
            body: "Output is what comes OUT of a computer. Output devices include: screen/monitor (shows pictures and words), printer (prints on paper), speakers (play sound), projector (shows on a big screen). The computer processes input data and produces output for us to use.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Is a printer an input or output device?",
          solution: "Output — it produces paper copies from the computer.",
        },
      },
      questions: [
        {
          id: "edxpc-u3-io-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is input?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Data coming out of a computer" },
              { id: "b", text: "Data going into a computer" },
              { id: "c", text: "A program" },
              { id: "d", text: "A file" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Input",
                statement: "Data going into a computer.",
              },
            ],
            steps: [
              { reasoning: "Input = into computer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Data going in",
            commonErrors: ["Reversing input and output."],
          },
        },
        {
          id: "edxpc-u3-io-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which device is an output device?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Keyboard" },
              { id: "b", text: "Mouse" },
              { id: "c", text: "Printer" },
              { id: "d", text: "Microphone" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Output devices",
                statement: "Outputs produce results we can see or hear.",
              },
            ],
            steps: [
              {
                reasoning: "Printer produces paper output.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Printer",
            commonErrors: ["Choosing input devices like keyboard."],
          },
        },
        {
          id: "edxpc-u3-io-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two input devices and two output devices.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Input/output devices",
                statement: "Input sends data in; output sends results out.",
              },
            ],
            steps: [
              {
                reasoning: "Two correct input devices, e.g. keyboard, mouse.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Two correct output devices, e.g. screen, printer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "All four named correctly.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. keyboard+mouse (in); screen+printer (out)",
            commonErrors: ["Mixing up input and output."],
          },
        },
        {
          id: "edxpc-u3-io-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe what happens when you take a photo with a tablet, using the words input and output.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Input-output cycle",
                statement: "Input → process → output.",
              },
            ],
            steps: [
              {
                reasoning: "Input: the camera captures light/image data.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Processing: the tablet processes the image.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Output: the photo appears on the screen / can be saved or printed.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Camera input → process → photo on screen (output)",
            commonErrors: ["Skipping the processing step."],
          },
        },
      ],
    },
    {
      id: "edxpc-u3-presenting",
      title: "Presenting Data",
      skill: "Choose simple ways to present data clearly.",
      lesson: {
        sections: [
          {
            heading: "Ways to present data",
            body: "Data can be shown as: lists (names and numbers), tables (rows and columns), pictograms (pictures represent numbers), bar charts (bars show amounts), tally charts (marks counted in groups of 5). The best way depends on the data — small amounts in a list, comparisons in a bar chart.",
          },
          {
            heading: "Making it clear",
            body: "Good data presentation has a title, clear labels and the right scale. A bar chart needs numbered axes so people can read the values. Always check your chart makes sense — do the bars match the numbers? Is it easy to compare?",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem:
            "Which is best for comparing 5 children's heights: list or bar chart?",
          solution: "Bar chart — easy to see which is tallest at a glance.",
        },
      },
      questions: [
        {
          id: "edxpc-u3-pres-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a pictogram?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of computer" },
              { id: "b", text: "A chart using pictures to show data" },
              { id: "c", text: "A program" },
              { id: "d", text: "A file" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pictogram",
                statement: "Pictures used to represent data.",
              },
            ],
            steps: [
              {
                reasoning: "Pictogram = picture chart.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Chart with pictures",
            commonErrors: ["Thinking pictogram means photograph."],
          },
        },
        {
          id: "edxpc-u3-pres-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is best for comparing favourite colours of 30 children?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A long list" },
              { id: "b", text: "A bar chart" },
              { id: "c", text: "A story" },
              { id: "d", text: "A single number" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Choosing presentation",
                statement: "Bar charts are best for comparing groups.",
              },
            ],
            steps: [
              {
                reasoning: "Bar chart shows comparisons clearly.",
                marks: 2,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** A bar chart",
            commonErrors: ["Choosing a list for large data."],
          },
        },
        {
          id: "edxpc-u3-pres-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two things a good chart or table needs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Good presentation",
                statement: "Title, labels, correct scale.",
              },
            ],
            steps: [
              { reasoning: "A clear title.", marks: 1, markCode: "M" },
              {
                reasoning: "Labels on axes / column headings.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct scale or numbers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Title, labels, correct scale",
            commonErrors: ["Missing basic elements."],
          },
        },
        {
          id: "edxpc-u3-pres-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You surveyed pets: 8 dogs, 5 cats, 3 fish. Describe how you would show this data and why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Presenting survey data",
                statement: "Choose the right display for the data.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Chooses a suitable display, e.g. bar chart or pictogram.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Explains why — easy to compare the three pet types.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Mentions needed labels/title/numbers.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "e.g. bar chart — easy to compare dogs/cats/fish",
            commonErrors: ["Choosing without justification."],
          },
        },
      ],
    },
  ],
};
