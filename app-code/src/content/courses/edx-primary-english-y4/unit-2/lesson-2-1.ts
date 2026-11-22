import type { Lesson } from "../../../types.ts";

export const lesson111: Lesson = {
  id: "edpe4-u2-lesson-2-1",
  code: "2-1",
  title: "Retrieval and Inference in Longer Texts",
  goal: "I CAN answer questions using evidence from longer texts.",
  standards: ["Year 4 Reading"],
  vocabulary: [
    {
      term: "Retrieval",
      definition: "Finding information directly stated in text.",
    },
    {
      term: "Inference",
      definition: "Working out unstated meaning from clues.",
    },
    {
      term: "Evidence",
      definition: "Words/phrases from text supporting an answer.",
    },
    { term: "Summarising", definition: "Main points in brief form." },
  ],
  concepts: [
    {
      id: "edpe4-u2-retrieval",
      title: "Finding and using evidence",
      skill: "Answer questions using evidence from the text.",
      lesson: {
        sections: [
          {
            heading: "Two question types",
            body: "**Retrieval**: answer is directly in the text — find the words. **Inference**: answer isn't stated — work it out from clues. Always check which type the question is.",
          },
          {
            heading: "Using evidence",
            body: "For both types, point to the text: 'The text says X, so...' This proves your answer. Don't just give opinions — support with evidence.",
          },
        ],
        keyFormulas: [
          { name: "Retrieval", statement: "Answer directly in text" },
          { name: "Inference", statement: "Work out from clues" },
          { name: "Evidence", statement: "Quote the supporting words" },
        ],
        workedExample: {
          problem:
            "Text: 'The old bridge was covered in moss and looked ready to fall.' Question: What condition is the bridge in?",
          solution: "Poor/dangerous — moss and 'ready to fall' show decay.",
        },
      },
      questions: [
        {
          id: "edpe4-u2-re-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Text: 'The museum was built in 1850.' When was the museum built?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1900" },
              { id: "b", text: "1850" },
              { id: "c", text: "1950" },
              { id: "d", text: "1800" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Retrieval",
                statement: "Directly stated.",
              },
            ],
            steps: [
              { reasoning: "Find date in text.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 1850",
            commonErrors: ["Not reading carefully."],
          },
        },
        {
          id: "edpe4-u2-re-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Text: 'She clenched her fists and turned away.' How does she feel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tired" },
              { id: "b", text: "Angry" },
              { id: "c", text: "Happy" },
              { id: "d", text: "Calm" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inference",
                statement: "Clenched fists = anger.",
              },
            ],
            steps: [
              {
                reasoning: "Use body language clues.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Answer: angry.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Angry",
            commonErrors: ["No inference."],
          },
        },
        {
          id: "edpe4-u2-re-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Text: 'The children built a den in the woods. They made it from branches and leaves. Inside they kept their snacks.' Write two facts about the den.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Retrieval",
                statement: "Made of branches/leaves; in woods; held snacks.",
              },
            ],
            steps: [
              { reasoning: "Fact 1 found.", marks: 1, markCode: "A" },
              { reasoning: "Fact 2 found.", marks: 1, markCode: "A" },
              { reasoning: "Both from text.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'Made from branches and leaves; in the woods'",
            commonErrors: ["Not from text."],
          },
        },
        {
          id: "edpe4-u2-re-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Text: 'Tom's hands were shaking as he opened the letter. His eyes widened when he read it.'",
          parts: [
            {
              label: "a",
              prompt: "What emotion is Tom feeling? Give evidence.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What might the letter contain? Infer.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Inference",
                statement: "Nervous/excited; good or surprising news.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Nervous/excited inferred.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evidence: shaking hands, widened eyes.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Good/surprising news inferred.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Reasonable inference.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "Nervous/excited; good or surprising news",
            commonErrors: ["No evidence used."],
          },
        },
      ],
    },
    {
      id: "edpe4-u2-summarising",
      title: "Summarising and author's viewpoint",
      skill: "Summarise texts and identify the author's viewpoint.",
      lesson: {
        sections: [
          {
            heading: "Better summaries",
            body: "A good summary: main idea + key events only. 'The Romans invaded Britain. They built roads and towns. Their influence lasted for centuries.' No minor details.",
          },
          {
            heading: "Author's viewpoint",
            body: "Authors have opinions. 'School uniforms are a waste of money' — the author thinks uniforms are bad. Look for opinion words: 'should', 'must', 'best', 'worst', 'amazing', 'terrible'.",
          },
        ],
        keyFormulas: [
          { name: "Summary", statement: "Main idea + key events" },
          {
            name: "Viewpoint",
            statement: "Author's opinion — look for opinion words",
          },
        ],
        workedExample: {
          problem:
            "Text: 'Homework is pointless and should be banned!' What's the author's view?",
          solution:
            "They think homework is pointless and should be banned — negative.",
        },
      },
      questions: [
        {
          id: "edpe4-u2-su-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the best summary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Everything in detail" },
              { id: "b", text: "Your opinion" },
              { id: "c", text: "The title" },
              { id: "d", text: "Main idea and key events only" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Summary",
                statement: "Main points only.",
              },
            ],
            steps: [
              { reasoning: "Summaries are concise.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Main idea and key events only",
            commonErrors: ["Including all details."],
          },
        },
        {
          id: "edpe4-u2-su-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Text: 'Bikes are the best way to travel! They're cheap, healthy and fun.' What does the author think of bikes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They're good" },
              { id: "b", text: "They're expensive" },
              { id: "c", text: "They're boring" },
              { id: "d", text: "They're bad" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Viewpoint",
                statement: "Positive — 'best', 'cheap', 'fun'.",
              },
            ],
            steps: [
              { reasoning: "Identify opinion words.", marks: 1, markCode: "M" },
              { reasoning: "Answer: positive.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** They're good",
            commonErrors: ["Missing positive viewpoint."],
          },
        },
        {
          id: "edpe4-u2-su-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write a two-sentence summary of: 'The school held a charity day. Students sold cakes and ran races. They raised £500 for the animal shelter.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Summary",
                statement: "Charity day raised £500.",
              },
            ],
            steps: [
              { reasoning: "Main event identified.", marks: 1, markCode: "M" },
              { reasoning: "Two sentences written.", marks: 1, markCode: "A" },
              { reasoning: "Accurate summary.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. 'The school held a charity day. Students raised £500 for the animal shelter.'",
            commonErrors: ["Too much detail."],
          },
        },
        {
          id: "edpe4-u2-su-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare two texts about homework: 'Homework helps learning' vs 'Homework is a waste of time'.",
          parts: [
            { label: "a", prompt: "What viewpoint does each show?", marks: 1 },
            {
              label: "b",
              prompt: "Which opinion words give it away?",
              marks: 1,
            },
            {
              label: "c",
              prompt: "How might the same facts be presented differently?",
              marks: 1,
            },
            {
              label: "d",
              prompt: "Why is it important to spot viewpoints?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Viewpoint",
                statement: "Positive vs negative; opinion words.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Both viewpoints identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Opinion words quoted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Different framing explained.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Importance explained.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Positive vs negative; opinion words; framing; spotting bias",
            commonErrors: ["Not recognising viewpoints."],
          },
        },
      ],
    },
  ],
};
