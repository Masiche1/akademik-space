import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "edpe1-u2-lesson-2-2",
  code: "2-2",
  title: "Sequencing and Story Order",
  goal: "I CAN put events in order and retell a story.",
  standards: ["Year 1 Reading"],
  vocabulary: [
    { term: "Sequence", definition: "The order events happen in a story." },
    {
      term: "Beginning, middle, end",
      definition: "The three parts of a story.",
    },
    { term: "Retell", definition: "Tell the story again in your own words." },
    {
      term: "First, next, then, finally",
      definition: "Sequencing words that show order.",
    },
  ],
  concepts: [
    {
      id: "edpe1-u2-sequence",
      title: "Story order",
      skill: "Identify beginning, middle and end; order events.",
      lesson: {
        sections: [
          {
            heading: "Beginning, middle, end",
            body: "Every story has a beginning (start), middle (what happens), and end (finish). 'The Three Little Pigs': beginning = pigs leave home; middle = build houses and wolf comes; end = wolf falls in pot.",
          },
          {
            heading: "Sequencing words",
            body: "Words like first, next, then, after that, finally help show order. Use them to retell stories step by step.",
          },
        ],
        keyFormulas: [
          { name: "Story structure", statement: "Beginning → middle → end" },
          { name: "Sequencing words", statement: "first, next, then, finally" },
        ],
        workedExample: {
          problem: "What happens first in 'The Very Hungry Caterpillar'?",
          solution: "The egg hatches into a caterpillar.",
        },
      },
      questions: [
        {
          id: "edpe1-u2-sq-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which part of a story tells us how it ends?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Middle" },
              { id: "b", text: "Beginning" },
              { id: "c", text: "Title" },
              { id: "d", text: "End" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Story parts",
                statement: "End = how story finishes.",
              },
            ],
            steps: [
              {
                reasoning: "End tells the resolution.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(d)** End",
            commonErrors: ["Choosing beginning — that's the start."],
          },
        },
        {
          id: "edpe1-u2-sq-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Put these in order: 1. Wolf blows house down 2. Pigs build houses 3. Pigs leave home",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1, 2, 3" },
              { id: "b", text: "3, 1, 2" },
              { id: "c", text: "3, 2, 1" },
              { id: "d", text: "2, 3, 1" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sequencing",
                statement: "Leave home → build → wolf blows.",
              },
            ],
            steps: [
              { reasoning: "Recall story order.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 3,2,1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 3, 2, 1",
            commonErrors: ["Reversing order."],
          },
        },
        {
          id: "edpe1-u2-sq-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Retell the story of 'The Three Little Pigs' in three sentences using first, next, then.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Retelling",
                statement:
                  "Three sentences covering beginning/middle/end with sequencing words.",
              },
            ],
            steps: [
              {
                reasoning: "Beginning event included.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Middle event included.", marks: 1, markCode: "A" },
              {
                reasoning: "End included with sequencing words.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. 'First the pigs left home. Next they built houses. Then the wolf huffed and puffed.'",
            commonErrors: ["Missing events or no sequencing words."],
          },
        },
        {
          id: "edpe1-u2-sq-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Read these mixed-up events from 'Goldilocks': A. Goldilocks falls asleep B. Goldilocks tries the porridge C. The bears come home",
          parts: [
            { label: "a", prompt: "Which event happens first?", marks: 1 },
            { label: "b", prompt: "Which happens second?", marks: 1 },
            { label: "c", prompt: "Which happens last?", marks: 1 },
            {
              label: "d",
              prompt: "What word could you use to start the retelling?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sequencing",
                statement: "Porridge → sleep → bears home; 'first'.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "B — tries porridge first.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "A — falls asleep second.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "C — bears come home last.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "'First' or 'Once upon a time'.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "B, A, C; 'First'",
            commonErrors: ["Ordering by letter not story logic."],
          },
        },
      ],
    },
    {
      id: "edpe1-u2-predict",
      title: "Predicting what happens next",
      skill: "Use story clues to predict what happens next.",
      lesson: {
        sections: [
          {
            heading: "Guessing what comes next",
            body: "Good readers predict! Use clues: if dark clouds gather, it might rain. If a character looks scared, something scary might happen. Predictions are guesses — check if they come true.",
          },
          {
            heading: "Clues in stories",
            body: "Look for warning signs: 'The sky turned black', 'She heard a noise', 'He opened the door slowly'. These tell us something is about to happen.",
          },
        ],
        keyFormulas: [
          { name: "Prediction", statement: "A guess about what happens next" },
          { name: "Clues", statement: "Details that hint at future events" },
        ],
        workedExample: {
          problem:
            "Story: 'Tom put on his coat and grabbed his umbrella.' What might happen next?",
          solution: "It might rain — Tom is preparing for rain.",
        },
      },
      questions: [
        {
          id: "edpe1-u2-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Story: 'The little girl was very hungry.' What might she do next?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Read a book" },
              { id: "b", text: "Go to sleep" },
              { id: "c", text: "Play outside" },
              { id: "d", text: "Eat some food" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prediction",
                statement: "Hungry → eat food.",
              },
            ],
            steps: [
              { reasoning: "Use clue 'hungry'.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Eat some food",
            commonErrors: ["Unrelated prediction."],
          },
        },
        {
          id: "edpe1-u2-pr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Story: 'The sky went very dark and thunder rumbled.' What might happen next?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It will snow" },
              { id: "b", text: "It will rain" },
              { id: "c", text: "It will be windy only" },
              { id: "d", text: "It will be sunny" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prediction",
                statement: "Dark sky + thunder → rain.",
              },
            ],
            steps: [
              { reasoning: "Identify weather clues.", marks: 1, markCode: "M" },
              { reasoning: "Answer: rain.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** It will rain",
            commonErrors: ["Ignoring clues — choosing sunny."],
          },
        },
        {
          id: "edpe1-u2-pr-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Story: 'Ben put on his wellies and grabbed his raincoat.' Predict what Ben is going to do.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prediction",
                statement: "Ben is going outside in wet weather.",
              },
            ],
            steps: [
              {
                reasoning: "Identify clothing clues (wellies, raincoat).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Prediction about going outside/rain.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Logical connection.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Ben is going outside in the rain.",
            commonErrors: ["Prediction unrelated to clothing clues."],
          },
        },
        {
          id: "edpe1-u2-pr-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Story: 'Emma heard a strange noise behind the door. She tiptoed closer.'",
          parts: [
            {
              label: "a",
              prompt: "What clue suggests something might happen?",
              marks: 1,
            },
            { label: "b", prompt: "Predict what Emma might find.", marks: 1 },
            {
              label: "c",
              prompt: "How do you know she's being careful?",
              marks: 1,
            },
            {
              label: "d",
              prompt: "Write the next sentence of the story.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prediction and inference",
                statement:
                  "Noise behind door; something/someone there; tiptoeing = careful; plausible next event.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Strange noise behind door.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Something or someone behind door.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Tiptoeing shows caution.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Plausible continuation matching clues.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Noise; something behind door; tiptoeing = careful; e.g. 'She opened the door slowly.'",
            commonErrors: ["For (d): unrelated event ignoring clues."],
          },
        },
      ],
    },
  ],
};
