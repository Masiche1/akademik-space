import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "edpe2-u2-lesson-2-3",
  code: "2-3",
  title: "Summarising and Answering Questions",
  goal: "I CAN summarise a text and answer questions about it.",
  standards: ["Year 2 Reading"],
  vocabulary: [
    {
      term: "Summary",
      definition: "The main points of a text in a few sentences.",
    },
    {
      term: "Main idea",
      definition: "The most important thing the text is about.",
    },
    {
      term: "Key detail",
      definition: "Important information that supports the main idea.",
    },
    {
      term: "Question type",
      definition: "Literal (in text), inference (between lines), or opinion.",
    },
  ],
  concepts: [
    {
      id: "edpe2-u2-summary",
      title: "Summarising texts",
      skill: "Identify the main idea and key details to summarise.",
      lesson: {
        sections: [
          {
            heading: "What's it mainly about?",
            body: "Every text has a main idea. 'The Very Hungry Caterpillar eats lots of food and becomes a butterfly' — main idea is the caterpillar's transformation. Details support it: what he eats, how he changes.",
          },
          {
            heading: "Writing a summary",
            body: "A summary is short — just the main points. Ask: who? what? where? why? Keep it to 1-3 sentences. Leave out small details.",
          },
        ],
        keyFormulas: [
          { name: "Main idea", statement: "The most important point" },
          { name: "Summary", statement: "Main idea + key details, briefly" },
        ],
        workedExample: {
          problem:
            "Summarise: 'Tom lost his dog at the park. He searched everywhere and finally found him behind the bushes.'",
          solution: "Tom lost his dog but found him.",
        },
      },
      questions: [
        {
          id: "edpe2-u2-su-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main idea of a story about a girl who learns to ride a bike?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The park is nice" },
              { id: "b", text: "Bikes are fun" },
              { id: "c", text: "A girl learns to ride a bike" },
              { id: "d", text: "She has a dog" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Main idea",
                statement: "Girl learns to ride bike.",
              },
            ],
            steps: [
              { reasoning: "Main event of story.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** A girl learns to ride a bike",
            commonErrors: ["Choosing a detail not main idea."],
          },
        },
        {
          id: "edpe2-u2-su-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence best summarises: 'The class planted seeds. They watered them every day. Soon flowers grew.'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The class likes flowers" },
              { id: "b", text: "Seeds need sun" },
              { id: "c", text: "The class planted seeds and flowers grew" },
              { id: "d", text: "Watering plants is fun" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Summary",
                statement: "Planting → flowers grew.",
              },
            ],
            steps: [
              { reasoning: "Capture main events.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: planted seeds, flowers grew.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** The class planted seeds and flowers grew",
            commonErrors: ["Choosing detail not summary."],
          },
        },
        {
          id: "edpe2-u2-su-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a one-sentence summary of: 'Ben built a sandcastle at the beach. The tide came in and washed it away. He was sad but then built a new one.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Summary",
                statement: "Ben's sandcastle washed away but he built another.",
              },
            ],
            steps: [
              { reasoning: "Identify main events.", marks: 1, markCode: "M" },
              {
                reasoning: "Condense to one sentence.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Captures beginning and end.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Ben built a sandcastle that washed away, but he built a new one.",
            commonErrors: ["Too much detail — not a summary."],
          },
        },
        {
          id: "edpe2-u2-su-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Read: 'The school had a pet rabbit called Snowball. The children fed him carrots every day. One day Snowball had babies! Everyone was excited.'",
          parts: [
            { label: "a", prompt: "What is the main idea?", marks: 1 },
            { label: "b", prompt: "Name two key details.", marks: 1 },
            { label: "c", prompt: "Write a two-sentence summary.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Summarising",
                statement:
                  "School rabbit had babies; carrots daily, babies exciting.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Main idea identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Two details given.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Two-sentence summary written.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Accurate and concise.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Rabbit had babies; carrots/babies; e.g. 'The school had a pet rabbit. One day Snowball had babies!'",
            commonErrors: ["Including every detail — not summarising."],
          },
        },
      ],
    },
    {
      id: "edpe2-u2-questions",
      title: "Answering comprehension questions",
      skill: "Answer literal, inference and opinion questions about texts.",
      lesson: {
        sections: [
          {
            heading: "Types of questions",
            body: "**Literal**: answer is in the text ('What colour was the ball?'). **Inference**: work it out ('Why was she happy?'). **Opinion**: your thoughts ('Do you like this story?'). Know what type the question asks.",
          },
          {
            heading: "Answering technique",
            body: "Read the question twice. Find the relevant part of the text. Answer in a full sentence. For inference, explain your thinking: 'I think X because the text says Y.'",
          },
        ],
        keyFormulas: [
          { name: "Literal", statement: "Answer directly in text" },
          { name: "Inference", statement: "Work out from clues" },
          { name: "Opinion", statement: "Your own view with reasons" },
        ],
        workedExample: {
          problem:
            "Text: 'The boy dropped his ice cream and cried.' Question: How did the boy feel? Type?",
          solution: "Inference — work out from 'cried' that he's sad.",
        },
      },
      questions: [
        {
          id: "edpe2-u2-qu-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Text: 'The sun was shining and the birds were singing.' What was the weather like?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sunny" },
              { id: "b", text: "Snowy" },
              { id: "c", text: "Windy" },
              { id: "d", text: "Rainy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Literal question",
                statement: "Sun shining = sunny.",
              },
            ],
            steps: [
              { reasoning: "Find weather clue.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Sunny",
            commonErrors: ["Not reading carefully."],
          },
        },
        {
          id: "edpe2-u2-qu-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Text: 'Mum put on her coat and grabbed her keys.' Why is Mum going out?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She lost something" },
              { id: "b", text: "She wants to go out" },
              { id: "c", text: "It's cold" },
              { id: "d", text: "It's raining" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inference",
                statement: "Coat + keys = going out.",
              },
            ],
            steps: [
              { reasoning: "Use action clues.", marks: 1, markCode: "M" },
              { reasoning: "Answer: going out.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** She wants to go out",
            commonErrors: ["Over-inferring — can't know exactly why."],
          },
        },
        {
          id: "edpe2-u2-qu-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Text: 'The cake looked delicious but Sam couldn't eat it — he was allergic to nuts.' What type of question would 'Why couldn't Sam eat the cake?' be?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Question types",
                statement:
                  "Inference — answer requires working out from context.",
              },
            ],
            steps: [
              { reasoning: "Identify question type.", marks: 1, markCode: "M" },
              { reasoning: "Answer: inference.", marks: 1, markCode: "A" },
              { reasoning: "Reasoning shown.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Inference",
            commonErrors: [
              "Calling it literal — answer isn't directly stated.",
            ],
          },
        },
        {
          id: "edpe2-u2-qu-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Text: 'The children built a snowman. It had a carrot nose and coal eyes. They gave it a scarf and hat.'",
          parts: [
            {
              label: "a",
              prompt: "Literal question: What did they use for the nose?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Inference question: What season is it? How do you know?",
              marks: 1,
            },
            {
              label: "c",
              prompt:
                "Opinion question: Would you like to build a snowman? Why?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Question types",
                statement: "Carrot; winter/snow; opinion with reason.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Carrot.", marks: 1, markCode: "A" },
              {
                part: "b",
                reasoning: "Winter — snowman needs snow.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning: "Opinion given with reason.",
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
            finalAnswer: "Carrot; winter (snow); e.g. 'Yes, because it's fun.'",
            commonErrors: ["For (b): saying 'summer' — snowman = winter."],
          },
        },
      ],
    },
  ],
};
