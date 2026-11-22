import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "edpe2-u2-lesson-2-1",
  code: "2-1",
  title: "Inference: Reading Between the Lines",
  goal: "I CAN infer information that isn't directly stated in a text.",
  standards: ["Year 2 Reading"],
  vocabulary: [
    {
      term: "Inference",
      definition: "Working out what the author means using clues.",
    },
    { term: "Clue", definition: "A detail that hints at something." },
    {
      term: "Retrieval",
      definition: "Finding information directly in the text.",
    },
    {
      term: "Evidence",
      definition: "Words from the text that support your answer.",
    },
  ],
  concepts: [
    {
      id: "edpe2-u2-inference",
      title: "Inferring from clues",
      skill: "Use text clues to infer unstated information.",
      lesson: {
        sections: [
          {
            heading: "What's not said?",
            body: "Sometimes texts don't say everything. 'Tom grabbed his coat and umbrella' — we can infer it's raining, even though it never says 'rain'. Good readers use clues to work it out.",
          },
          {
            heading: "Finding evidence",
            body: "When you infer, point to the clue: 'The text says X, so I think Y.' This shows your thinking and proves your answer.",
          },
        ],
        keyFormulas: [
          {
            name: "Inference",
            statement: "Clue + thinking = unstated meaning",
          },
          {
            name: "Evidence",
            statement: "Quote the clue that supports your answer",
          },
        ],
        workedExample: {
          problem:
            "Text: 'Sara put on her sun hat and sunglasses.' What can you infer?",
          solution:
            "It's probably sunny — she's protecting herself from the sun.",
        },
      },
      questions: [
        {
          id: "edpe2-u2-in-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Text: 'Ben was shivering and pulling on his jumper.' What can you infer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ben is cold" },
              { id: "b", text: "Ben is tired" },
              { id: "c", text: "Ben is happy" },
              { id: "d", text: "Ben is hot" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inference",
                statement: "Shivering + jumper = cold.",
              },
            ],
            steps: [
              { reasoning: "Use clues to infer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Ben is cold",
            commonErrors: ["Ignoring clues."],
          },
        },
        {
          id: "edpe2-u2-in-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Text: 'The children ran inside, slamming the door behind them.' What happened outside?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It got dark" },
              { id: "b", text: "It started raining" },
              { id: "c", text: "Someone called them" },
              { id: "d", text: "Nothing special" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inference",
                statement: "Running inside = escaping rain.",
              },
            ],
            steps: [
              { reasoning: "Infer from action.", marks: 1, markCode: "M" },
              { reasoning: "Answer: raining.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It started raining",
            commonErrors: ["Not using action clues."],
          },
        },
        {
          id: "edpe2-u2-in-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Text: 'Grandma smiled as she opened the letter. She wiped her eyes.' What do you think happened?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inference",
                statement: "Good news — she's happy/crying with joy.",
              },
            ],
            steps: [
              {
                reasoning: "Identify emotional clues.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Inference about letter content.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Reasonable interpretation.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Good news — she's happy/crying with joy.",
            commonErrors: ["Inference not supported by clues."],
          },
        },
        {
          id: "edpe2-u2-in-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Text: 'Jack tiptoed past the sleeping dog and grabbed the biscuit tin.'",
          parts: [
            { label: "a", prompt: "Why did Jack tiptoe?", marks: 2 },
            {
              label: "b",
              prompt: "What does grabbing the biscuit tin suggest?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inference",
                statement: "Avoid waking dog; wants biscuits secretly.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Tiptoeing = being quiet to not wake dog.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Inference explained.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "Wants biscuits without dog knowing.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Reasoning shown.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "To not wake dog; wants biscuits secretly",
            commonErrors: ["Literal answers only — need inference."],
          },
        },
      ],
    },
    {
      id: "edpe2-u2-evidence",
      title: "Using evidence from the text",
      skill: "Find and quote evidence to support answers.",
      lesson: {
        sections: [
          {
            heading: "Show your evidence",
            body: "When you answer a question, prove it with words from the text. 'Why do you think Tom is happy?' — don't just say 'he's happy', quote: 'Tom grinned and jumped for joy.' Evidence makes answers stronger.",
          },
          {
            heading: "Finding the clue",
            body: "Scan the text for the word or phrase that answers the question. Underline it, then explain what it means. This is called retrieval — getting information straight from the text.",
          },
        ],
        keyFormulas: [
          {
            name: "Evidence",
            statement: "Quote the exact words that prove your answer",
          },
          { name: "Retrieval", statement: "Find information directly stated" },
        ],
        workedExample: {
          problem:
            "Text: 'The storm was loud and the wind howled.' Find evidence it's stormy.",
          solution: "'loud' and 'wind howled' — shows storm.",
        },
      },
      questions: [
        {
          id: "edpe2-u2-ev-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Text: 'Emma wore her red coat.' What colour was Emma's coat?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Red" },
              { id: "b", text: "Green" },
              { id: "c", text: "Yellow" },
              { id: "d", text: "Blue" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Retrieval",
                statement: "Text says 'red coat'.",
              },
            ],
            steps: [
              { reasoning: "Find colour in text.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Red",
            commonErrors: ["Not reading carefully."],
          },
        },
        {
          id: "edpe2-u2-ev-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Text: 'The baby cried because she was hungry.' Why did the baby cry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She was hungry" },
              { id: "b", text: "She was scared" },
              { id: "c", text: "She was cold" },
              { id: "d", text: "She was tired" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Retrieval",
                statement: "Text says 'because she was hungry'.",
              },
            ],
            steps: [
              { reasoning: "Find 'because' clause.", marks: 1, markCode: "M" },
              { reasoning: "Answer: hungry.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** She was hungry",
            commonErrors: ["Guessing other reasons."],
          },
        },
        {
          id: "edpe2-u2-ev-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Text: 'The robot beeped loudly and its eyes flashed red.' Find two pieces of evidence it's a robot.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evidence",
                statement: "'beeped loudly' and 'eyes flashed red'.",
              },
            ],
            steps: [
              {
                reasoning: "Identify robot-like details.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Two pieces quoted.", marks: 1, markCode: "A" },
              { reasoning: "Both from text.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'beeped loudly', 'eyes flashed red'",
            commonErrors: ["Evidence not from text."],
          },
        },
        {
          id: "edpe2-u2-ev-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Text: 'The old man walked slowly with his stick. He stopped to rest on every bench.'",
          parts: [
            { label: "a", prompt: "Quote evidence the man is old.", marks: 2 },
            {
              label: "b",
              prompt: "Quote evidence he needs to rest.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evidence retrieval",
                statement: "'old man', 'walked slowly', 'stopped to rest'.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "'old man' or 'walked slowly' quoted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "a",
                reasoning: "Exact quote from text.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "b",
                reasoning: "'stopped to rest on every bench' quoted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Evidence supports inference.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "'old man', 'walked slowly'; 'stopped to rest on every bench'",
            commonErrors: ["Paraphrasing instead of quoting."],
          },
        },
      ],
    },
  ],
};
