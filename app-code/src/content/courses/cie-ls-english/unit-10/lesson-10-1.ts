import type { Lesson } from "../../../types.ts";

const checkpointExtract = {
  title: "The Last Ferry",
  author: "Written for Akademik Space",
  source: "Original text",
  text: "The harbour at dusk smelled of salt and diesel. Tomas counted the remaining crates for the third time, though he knew the manifest by heart: forty-two cases of tea, eleven of coffee, and a single cello wrapped in blankets that had belonged to his grandmother.\n\nThe ferry's horn sounded twice across the water, low and patient. On the far jetty, a girl in a yellow raincoat was already waving, her dog straining at its lead. Tomas had carried that cello across three oceans and he was not about to leave it behind for want of a signature.\n\nHe signed the last form, stamped it twice, and climbed aboard as the gangway lifted. Behind him the crates rattled like dice in a cup. Ahead, the open sea stretched dark and glittering, and for the first time in nine days Tomas allowed himself to think about sleep.",
};

export const lesson1011: Lesson = {
  id: "cile-u10-lesson-10-1",
  code: "10-1",
  title: "Stage 7 Checkpoint — Reading for Meaning",
  goal: "I CAN answer literal and inference questions at Stage 7 checkpoint standard.",
  standards: ["0861 Checkpoint Stage 7: reading comprehension"],
  stage: 7,
  vocabulary: [
    {
      term: "Literal question",
      definition: "Asks what the text states directly.",
    },
    {
      term: "Inference",
      definition: "A conclusion supported by evidence but not stated.",
    },
    {
      term: "Evidence",
      definition: "A quotation or detail supporting an answer.",
    },
    {
      term: "Summary",
      definition: "The main points in your own words, leaving out detail.",
    },
  ],
  concepts: [
    {
      id: "cile-u10-s7-literal",
      title: "Stage 7 literal comprehension",
      skill: "Retrieve stated information accurately with evidence.",
      lesson: {
        sections: [
          {
            heading: "Checkpoint approach",
            body: "Stage 7 reading questions are mostly literal: who, what, when, where. Find the exact detail, then answer in your own words. Quote evidence in your head to check you are right.",
          },
        ],
        keyFormulas: [
          {
            name: "Answer rule",
            statement: "Stated detail + your own words = full mark",
          },
        ],
        workedExample: {
          problem:
            "Question: How many cases of tea are on the manifest? Extract: 'forty-two cases of tea'.",
          solution: "Literal answer: forty-two (42) cases.",
        },
      },
      questions: [
        {
          id: "cile-u10-s7-lit-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: checkpointExtract,
          stem: "What time of day is described at the start of the extract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Morning" },
              { id: "b", text: "Dusk" },
              { id: "c", text: "Midnight" },
              { id: "d", text: "Noon" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Literal",
                statement: "Answer stated directly in text.",
              },
            ],
            steps: [
              {
                reasoning: "'The harbour at dusk' states the time.",
                working: "\\text{at dusk}",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Dusk",
          },
        },
        {
          id: "cile-u10-s7-lit-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: checkpointExtract,
          stem: "State two items Tomas is transporting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Retrieval",
                statement: "Literal answers restate stated details.",
              },
            ],
            steps: [
              {
                reasoning: "Tea and coffee crates are stated.",
                working: "\\text{tea; coffee}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "The cello is also stated.",
                working: "\\text{a cello}",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Any two: cases of tea, cases of coffee, a cello.",
          },
        },
        {
          id: "cile-u10-s7-lit-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: checkpointExtract,
          stem: "How many days has Tomas been working before this journey? Use evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence",
                statement: "Quote the detail that contains the answer.",
              },
            ],
            steps: [
              {
                reasoning: "Find the number in the text: 'nine days'.",
                working: "\\text{nine days}",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Link to context: he counted crates for the third time.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Conclude: nine days of work before the trip.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Nine days — 'for the first time in nine days'.",
          },
        },
        {
          id: "cile-u10-s7-lit-q4",
          difficulty: "challenge",
          totalMarks: 4,
          extract: checkpointExtract,
          stem: "Describe what Tomas does in the final paragraph, in your own words.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paraphrase",
                statement: "Restate events concisely without copying.",
              },
            ],
            steps: [
              {
                reasoning: "He signs and stamps the last form.",
                working: "\\text{signed; stamped}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "He boards the ferry as the gangway lifts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "He thinks about sleep for the first time in nine days.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Clear sequence in own words.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "Signs the final form, boards the ferry, and allows himself to think about sleep after nine days.",
          },
        },
      ],
    },
    {
      id: "cile-u10-s7-inference",
      title: "Stage 7 inference checkpoint",
      skill: "Make supported inferences from evidence.",
      lesson: {
        sections: [
          {
            heading: "Inference",
            body: "Inference questions ask what is suggested, not stated. Always anchor your answer to a quotation or detail. 'Suggest' and 'imply' are inference signals.",
          },
        ],
        keyFormulas: [
          {
            name: "Inference",
            statement: "Evidence + 'this suggests...' = inference answer",
          },
        ],
        workedExample: {
          problem:
            "Question: What does the cello's wrapping suggest? Extract: 'wrapped in blankets that had belonged to his grandmother'.",
          solution:
            "Inference: the cello is precious to him — linked to family memory.",
        },
      },
      questions: [
        {
          id: "cile-u10-s7-inf-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: checkpointExtract,
          stem: "What does the cello being wrapped in his grandmother's blankets suggest about it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is valuable to him personally" },
              { id: "b", text: "It is badly damaged" },
              { id: "c", text: "It belongs to the ferry company" },
              { id: "d", text: "It is made of blankets" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inference",
                statement: "Drawn from evidence, not stated.",
              },
            ],
            steps: [
              {
                reasoning: "Grandmother's blankets → personal/family value.",
                working: "\\text{belonged to his grandmother}",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(a)** It is valuable to him personally",
          },
        },
        {
          id: "cile-u10-s7-inf-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: checkpointExtract,
          stem: "Suggest why Tomas 'counted the remaining crates for the third time'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inference",
                statement: "Link behaviour to motive.",
              },
            ],
            steps: [
              {
                reasoning: "He is careful/responsible — checking twice more.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "He does not trust memory alone for cargo.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "He is being thorough and careful — he does not want to lose or miscount the cargo.",
          },
        },
        {
          id: "cile-u10-s7-inf-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: checkpointExtract,
          stem: "What does the girl waving from the jetty suggest about her relationship to Tomas?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inference",
                statement: "Use detail (wave, dog, arrival time) as evidence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "She waits on the far jetty with a dog — she came to meet him.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "She waves before he boards — familiar, not formal.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Suggests she is someone close — family or friend.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "She is likely a close friend or relative waiting to greet him — the wave and early arrival show familiarity.",
          },
        },
        {
          id: "cile-u10-s7-inf-q4",
          difficulty: "challenge",
          totalMarks: 4,
          extract: checkpointExtract,
          stem: "Explain what Tomas's final thought about sleep suggests about his state before boarding.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inference",
                statement: "Connect a small detail to a bigger idea.",
              },
            ],
            steps: [
              {
                reasoning:
                  "He thinks about sleep 'for the first time in nine days' — he has been exhausted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "'Allowed himself' suggests he has been too busy to rest.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning:
                  "Boarding the ferry signals the work is done — relief.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Overall: weary but relieved; journey ahead.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "He has been working without rest for nine days; finally boarding means he can relax — weary but relieved.",
          },
        },
      ],
    },
    {
      id: "cile-u10-s7-mx",
      title: "Stage 7 mixed checkpoint",
      skill: "Combine literal retrieval, inference and vocabulary skills.",
      lesson: {
        sections: [
          {
            heading: "Mixed reading",
            body: "Final checkpoint questions mix literal detail, inference, vocabulary in context and summary. Answer from the text, support with evidence, and write in your own words.",
          },
        ],
        keyFormulas: [
          {
            name: "Evidence chain",
            statement:
              "Detail from text → your own words → supported conclusion",
          },
        ],
        workedExample: {
          problem:
            "Question: What does 'wrapped in blankets that had belonged to his grandmother' suggest?",
          solution:
            "The cello is precious and sentimental — Tomas handles it with care because it carries family history.",
        },
      },
      questions: [
        {
          id: "cile-u10-s7-mx-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: checkpointExtract,
          stem: "How many cases of coffee are on the manifest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Eleven" },
              { id: "b", text: "Forty-two" },
              { id: "c", text: "Twelve" },
              { id: "d", text: "Ten" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Literal",
                statement: "Answer stated directly in text.",
              },
            ],
            steps: [
              {
                reasoning: "'eleven of coffee' states the number.",
                working: "\\text{eleven of coffee}",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Eleven",
          },
        },
        {
          id: "cile-u10-s7-mx-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: checkpointExtract,
          stem: "What does the detail 'wrapped in blankets that had belonged to his grandmother' suggest about the cello?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inference",
                statement:
                  "Conclusion supported by, but not stated in, the text.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The blankets are old and personal — they belonged to his grandmother.",
                working: "\\text{grandmother's blankets}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "So the cello is precious and sentimental, handled with care.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "It is precious and sentimental — it carries family history.",
          },
        },
        {
          id: "cile-u10-s7-mx-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: checkpointExtract,
          stem: "Summarise what Tomas does in the final paragraph, in no more than two sentences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Summary",
                statement:
                  "Main events in your own words, leaving out minor detail.",
              },
            ],
            steps: [
              {
                reasoning: "He signs and stamps the last form.",
                working: "\\text{signed; stamped}",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "He boards the ferry as the gangway lifts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "For the first time in nine days he thinks about sleep.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Tomas signs the final form and boards the ferry; for the first time in nine days he allows himself to think about sleep.",
          },
        },
        {
          id: "cile-u10-s7-mx-q4",
          difficulty: "challenge",
          totalMarks: 4,
          extract: checkpointExtract,
          stem: "In your own words, explain how the writer creates a sense of relief at the end of the extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mood",
                statement: "Explain how details create an emotional effect.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'the gangway lifted' and boarding signal the work is finished.",
                working: "\\text{gangway lifted}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "'the open sea stretched dark and glittering' creates freedom and possibility.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "'for the first time in nine days' shows exhaustion lifting into relief.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning:
                  "Clear explanation linking details to the feeling of relief.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "The finished paperwork, the lifting gangway and the glittering sea show work ending; thinking about sleep for the first time in nine days signals relief.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cile-u10-stage7-reading-notes",
      title: "Stage 7 checkpoint reading — revision notes",
      summary: "Literal retrieval and supported inference.",
      sections: [
        {
          heading: "Skills",
          body: "Literal: find the stated detail, answer in own words. Inference: quote evidence, then explain what it suggests.",
        },
        {
          heading: "Exam tips",
          body: "Underline key words in questions; 'suggest'/'imply' means inference; never invent details not in the text.",
        },
      ],
    },
  ],
};
