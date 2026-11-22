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
              { id: "a", text: "Noon" },
              { id: "b", text: "Morning" },
              { id: "c", text: "Midnight" },
              { id: "d", text: "Dusk" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cile-u10-s7-lit-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: checkpointExtract,
          stem: "What does the harbour at dusk smell of?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Salt and diesel" },
              { id: "b", text: "Petrol and smoke" },
              { id: "c", text: "Rain and mud" },
              { id: "d", text: "Fresh fish" },
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
                reasoning: "'smelled of salt and diesel' is stated directly.",
                working: "\\text{salt and diesel}",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Salt and diesel",
          },
        },
        {
          id: "cile-u10-s7-lit-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: checkpointExtract,
          stem: "How many times has Tomas counted the remaining crates when this scene begins?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Once" },
              { id: "b", text: "Three times" },
              { id: "c", text: "Nine times" },
              { id: "d", text: "Twice" },
            ],
            borrectChoiceId: "c",
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
                reasoning: "'counted the remaining crates for the third time' — this is the third count.",
                working: "\\text{third time}",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Three times",
          },
        },
        {
          id: "cile-u10-s7-lit-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: checkpointExtract,
          stem: "What is wrapped in blankets in the extract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The manifest" },
              { id: "b", text: "The ferry's horn" },
              { id: "c", text: "A crate of tea" },
              { id: "d", text: "A cello" },
            ],
            correctChoiceId: "d",
          },
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
                reasoning: "'a single cello wrapped in blankets' — the cello is wrapped.",
                working: "\\text{a cello}",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** A cello",
          },
        },
        {
          id: "cile-u10-s7-lit-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: checkpointExtract,
          stem: "Where is the girl in the yellow raincoat when Tomas looks across the water?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "On the open sea" },
              { id: "b", text: "On the far jetty" },
              { id: "c", text: "Inside the crates" },
              { id: "d", text: "On the ferry" },
            ],
            correctChoiceId: "b",
          },
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
                reasoning: "'On the far jetty, a girl in a yellow raincoat was already waving.'",
                working: "\\text{far jetty}",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** On the far jetty",
          },
        },
        {
          id: "cile-u10-s7-lit-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: checkpointExtract,
          stem: "What does Tomas do first in the final paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Signs the last form" },
              { id: "b", text: "Climbs aboard the ferry" },
              { id: "c", text: "Counts the crates again" },
              { id: "d", text: "Waves to the girl" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sequence",
                statement: "Order of events: signs, stamps, boards.",
              },
            ],
            steps: [
              {
                reasoning: "'He signed the last form' comes before stamping and boarding.",
                working: "\\text{signed}",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** Signs the last form",
          },
        },
        {
          id: "cile-u10-s7-lit-q10",
          difficulty: "foundation",
          totalMarks: 2,
          extract: checkpointExtract,
          stem: "How many cases of tea are listed on the manifest?",
          response: {
            type: "numeric",
            parts: [{ label: "tea", answer: 42, unit: "cases" }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Retrieval",
                statement: "Find the stated number in the text.",
              },
            ],
            steps: [
              {
                reasoning: "'forty-two cases of tea' states the number.",
                working: "\\text{forty-two}",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Forty-two = 42.",
                working: "42",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "42 cases",
          },
        },
        {
          id: "cile-u10-s7-lit-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: checkpointExtract,
          stem: "Give: (a) the number of cases of coffee on the manifest; (b) the number of cellos Tomas is transporting.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 11, unit: "cases" },
              { label: "b", answer: 1, unit: "cellos" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Retrieval",
                statement: "Find each stated number in the manifest.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "'eleven of coffee' — 11 cases.",
                working: "\\text{eleven}",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "'a single cello' — 1 cello.",
                working: "\\text{single}",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both details come from the same manifest sentence.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) 11 (b) 1",
          },
        },
        {
          id: "cile-u10-s7-lit-q12",
          difficulty: "core",
          totalMarks: 2,
          extract: checkpointExtract,
          stem: "How many times does the ferry's horn sound in the extract?",
          response: {
            type: "numeric",
            parts: [{ label: "horn", answer: 2, unit: "times" }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Retrieval",
                statement: "Count events stated in the text.",
              },
            ],
            steps: [
              {
                reasoning: "'The ferry's horn sounded twice' — two sounds.",
                working: "\\text{twice}",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Twice = 2 times.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "2 times",
          },
        },
        {
          id: "cile-u10-s7-lit-q13",
          difficulty: "challenge",
          totalMarks: 4,
          extract: checkpointExtract,
          stem: "Give four numbers from the extract: (a) the number of oceans the cello has crossed; (b) the number of days Tomas has worked; (c) the number of times he stamps the form; (d) the number of paragraphs in the extract.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3, unit: "oceans" },
              { label: "b", answer: 9, unit: "days" },
              { label: "c", answer: 2, unit: "times" },
              { label: "d", answer: 3, unit: "paragraphs" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Multiple retrieval",
                statement: "Locate each detail in the text before answering.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "'carried that cello across three oceans' — 3.",
                working: "\\text{three oceans}",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "'for the first time in nine days' — 9 days.",
                working: "\\text{nine days}",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "'stamped it twice' — 2 times.",
                working: "\\text{twice}",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "The extract has 3 paragraphs.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) 3 (b) 9 (c) 2 (d) 3",
          },
        },
        {
          id: "cile-u10-s7-lit-q14",
          difficulty: "core",
          totalMarks: 2,
          extract: checkpointExtract,
          stem: "State where the extract is set and at what time of day.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Setting retrieval",
                statement: "Setting = place + time, both stated in the text.",
              },
            ],
            steps: [
              {
                reasoning: "Place: a harbour.",
                working: "\\text{harbour}",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Time: dusk — 'The harbour at dusk'.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "A harbour, at dusk.",
          },
        },
        {
          id: "cile-u10-s7-lit-q15",
          difficulty: "core",
          totalMarks: 3,
          extract: checkpointExtract,
          stem: "Describe the girl waiting on the jetty, using details from the text.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Detail retrieval",
                statement: "Answer from stated details: raincoat, waving, dog.",
              },
            ],
            steps: [
              {
                reasoning: "She wears a yellow raincoat.",
                working: "\\text{yellow raincoat}",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "She is already waving before the ferry leaves.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "She has a dog straining at its lead.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "A girl in a yellow raincoat, already waving on the far jetty with her dog straining at its lead.",
          },
        },
        {
          id: "cile-u10-s7-lit-q16",
          difficulty: "challenge",
          totalMarks: 4,
          extract: checkpointExtract,
          stem: "List, in order, the actions Tomas performs in the final paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sequence",
                statement: "Order matters — follow the text's sequence of events.",
              },
            ],
            steps: [
              {
                reasoning: "First: he signs the last form.",
                working: "\\text{signs}",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Second: he stamps it twice.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Third: he climbs aboard as the gangway lifts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Correct sequence with clear ordering.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Signs the last form → stamps it twice → climbs aboard the ferry as the gangway lifts.",
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
              { id: "b", text: "It is made of blankets" },
              { id: "c", text: "It is badly damaged" },
              { id: "d", text: "It belongs to the ferry company" },
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
        {
          id: "cile-u10-s7-inf-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: checkpointExtract,
          stem: "What does Tomas counting the crates 'for the third time' suggest about him?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He is thorough and careful with the cargo" },
              { id: "b", text: "He is careless and keeps forgetting" },
              { id: "c", text: "He is counting for fun" },
              { id: "d", text: "He cannot read the manifest" },
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
                reasoning: "Repeated counting shows care — he does not trust one check.",
                working: "\\text{careful}",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** He is thorough and careful with the cargo",
          },
        },
        {
          id: "cile-u10-s7-inf-q6",
          difficulty: "core",
          totalMarks: 1,
          extract: checkpointExtract,
          stem: "What mood does 'the ferry's horn sounded twice, low and patient' create?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sadness and loss" },
              { id: "b", text: "Calm and unhurried" },
              { id: "c", text: "Urgency and panic" },
              { id: "d", text: "Anger and conflict" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tone inference",
                statement: "'Low and patient' suggests a calm, waiting mood.",
              },
            ],
            steps: [
              {
                reasoning: "'Patient' personifies the horn as unhurried — nothing is rushed.",
                working: "\\text{patient}",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** Calm and unhurried",
          },
        },
        {
          id: "cile-u10-s7-inf-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: checkpointExtract,
          stem: "Why might the writer tell us the cello was carried 'across three oceans'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To emphasise the cello's value and history" },
              { id: "b", text: "To show the journey was easy" },
              { id: "c", text: "To explain how Tomas got his job" },
              { id: "d", text: "To describe the weather" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Purpose of detail",
                statement: "Details are chosen to build meaning — three oceans signals significance.",
              },
            ],
            steps: [
              {
                reasoning: "Three oceans of travel makes the cello precious — it is not ordinary cargo.",
                working: "\\text{value}",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** To emphasise the cello's value and history",
          },
        },
        {
          id: "cile-u10-s7-inf-q8",
          difficulty: "foundation",
          totalMarks: 1,
          extract: checkpointExtract,
          stem: "What does 'he was not about to leave it behind for want of a signature' suggest about Tomas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He will do whatever is needed to take the cello with him" },
              { id: "b", text: "He will abandon the cello if paperwork is difficult" },
              { id: "c", text: "He forgot about the cello" },
              { id: "d", text: "He dislikes signatures" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inference",
                statement: "'Not about to' signals determination despite obstacles.",
              },
            ],
            steps: [
              {
                reasoning: "The idiom means he refuses to leave the cello behind over a mere formality.",
                working: "\\text{determined}",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** He will do whatever is needed to take the cello with him",
          },
        },
        {
          id: "cile-u10-s7-inf-q9",
          difficulty: "challenge",
          totalMarks: 1,
          extract: checkpointExtract,
          stem: "The sea is described as 'dark and glittering'. What does this combination suggest about the journey ahead?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It will be quick and easy" },
              { id: "b", text: "It is purely dangerous and frightening" },
              { id: "c", text: "It is calm and boring" },
              { id: "d", text: "It holds both risk and beauty — daunting but exciting" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Contrast inference",
                statement: "'Dark' suggests danger; 'glittering' suggests beauty — together, ambivalence.",
              },
            ],
            steps: [
              {
                reasoning: "The two adjectives create mixed feelings — the unknown ahead is both risky and wonderful.",
                working: "\\text{ambivalent}",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** It holds both risk and beauty — daunting but exciting",
          },
        },
        {
          id: "cile-u10-s7-inf-q10",
          difficulty: "foundation",
          totalMarks: 2,
          extract: checkpointExtract,
          stem: "How many times in total has Tomas counted the crates, including the count described in the text?",
          response: {
            type: "numeric",
            parts: [{ label: "counts", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inference from wording",
                statement: "'For the third time' means this is the third counting.",
              },
            ],
            steps: [
              {
                reasoning: "'Counted ... for the third time' — the current count is number three.",
                working: "\\text{third}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Total countings = 3.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cile-u10-s7-inf-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: checkpointExtract,
          stem: "Use these details as evidence for your inferences. Give: (a) the number of oceans the cello has crossed; (b) the number of times the ferry's horn sounds; (c) the number of days Tomas has gone without thinking of sleep.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3, unit: "oceans" },
              { label: "b", answer: 2, unit: "times" },
              { label: "c", answer: 9, unit: "days" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence retrieval",
                statement: "Inferences must be anchored to quoted details.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Evidence: 'across three oceans' — 3.",
                working: "\\text{three oceans}",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Evidence: 'sounded twice' — 2.",
                working: "\\text{twice}",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Evidence: 'first time in nine days' — 9.",
                working: "\\text{nine days}",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) 3 (b) 2 (c) 9",
          },
        },
        {
          id: "cile-u10-s7-inf-q12",
          difficulty: "challenge",
          totalMarks: 4,
          extract: checkpointExtract,
          stem: "Give two counts as evidence of the scene's emotional weight: (a) the number of cargo items listed on the manifest; (b) the number of living creatures (people and animals) mentioned on the jetty side of the scene.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3, unit: "items" },
              { label: "b", answer: 2, unit: "creatures" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evidence counting",
                statement: "Count carefully — distinguish people from animals and items.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Manifest items: tea, coffee, cello = 3.",
                working: "\\text{tea; coffee; cello}",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Jetty side: the girl and her dog = 2 creatures.",
                working: "\\text{girl + dog}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Tomas is on the harbour side, not the jetty side.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Careful reading distinguishes the two sides of the water.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer: "(a) 3 (b) 2",
          },
        },
        {
          id: "cile-u10-s7-inf-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: checkpointExtract,
          stem: "How many documents does Tomas sign or stamp in the extract?",
          response: {
            type: "numeric",
            parts: [{ label: "forms", answer: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Detail inference",
                statement: "'The last form' — one document, signed and stamped.",
              },
            ],
            steps: [
              {
                reasoning: "He 'signed the last form' and 'stamped it twice' — one form total.",
                working: "\\text{last form}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Stamping the same form twice does not make two forms.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "cile-u10-s7-inf-q14",
          difficulty: "core",
          totalMarks: 2,
          extract: checkpointExtract,
          stem: "Explain why Tomas only 'allowed himself' to think about sleep now, as he boards.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inference",
                statement: "'Allowed himself' implies he has been too busy to rest.",
              },
            ],
            steps: [
              {
                reasoning: "'Allowed himself' suggests rest was a luxury he denied himself during work.",
                working: "\\text{denied}",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Boarding signals the work is done — he can finally relax.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "He has been too busy for nine days to even consider sleep; finishing the paperwork and boarding means he can finally rest.",
          },
        },
        {
          id: "cile-u10-s7-inf-q15",
          difficulty: "core",
          totalMarks: 3,
          extract: checkpointExtract,
          stem: "What does the girl's early arrival and waving suggest about her relationship to Tomas?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inference",
                statement: "Behaviour details reveal relationships.",
              },
            ],
            steps: [
              {
                reasoning: "She waits on the far jetty 'already waving' — she came early to greet him.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Waving before he boards is familiar, not formal — she knows him well.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "With her dog, she is likely family or a close friend.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "She is likely a close friend or relative — her early arrival and eager wave show she came specifically to greet him.",
          },
        },
        {
          id: "cile-u10-s7-inf-q16",
          difficulty: "challenge",
          totalMarks: 4,
          extract: checkpointExtract,
          stem: "Explain how the writer creates a sense of relief at the end of the extract, using two details.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mood inference",
                statement: "Relief is signalled by completion and physical release.",
              },
            ],
            steps: [
              {
                reasoning: "Detail 1: 'the gangway lifted' — the physical act of boarding ends the departure tension.",
                working: "\\text{gangway}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Detail 2: 'for the first time in nine days' thinking of sleep — exhaustion finally lifting.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "The glittering sea adds freedom and possibility rather than threat.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Together the details move the reader from tension to calm resolution.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "Boarding the ferry ends the tense departure and, after nine days of work, Tomas finally thinks of sleep — signalling deep relief.",
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
              { id: "a", text: "Forty-two" },
              { id: "b", text: "Ten" },
              { id: "c", text: "Twelve" },
              { id: "d", text: "Eleven" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cile-u10-s7-mx-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: checkpointExtract,
          stem: "In the extract, what does 'manifest' refer to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tomas's shopping list" },
              { id: "b", text: "The ferry's timetable" },
              { id: "c", text: "A map of the harbour" },
              { id: "d", text: "The list of cargo being transported" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vocabulary in context",
                statement: "'Manifest' = the official list of cargo.",
              },
            ],
            steps: [
              {
                reasoning: "The manifest lists 'forty-two cases of tea, eleven of coffee, and a single cello' — it is the cargo list.",
                working: "\\text{cargo list}",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** The list of cargo being transported",
          },
        },
        {
          id: "cile-u10-s7-mx-q6",
          difficulty: "core",
          totalMarks: 1,
          extract: checkpointExtract,
          stem: "What does 'her dog straining at its lead' suggest about the dog?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is eager to reach the ferry or Tomas" },
              { id: "b", text: "It wants to stay exactly where it is" },
              { id: "c", text: "It is injured" },
              { id: "d", text: "It is asleep" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Inference",
                statement: "'Straining at its lead' implies eager forward movement.",
              },
            ],
            steps: [
              {
                reasoning: "Straining against the lead shows excitement — it wants to get to them.",
                working: "\\text{eager}",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** It is eager to reach the ferry or Tomas",
          },
        },
        {
          id: "cile-u10-s7-mx-q7",
          difficulty: "foundation",
          totalMarks: 1,
          extract: checkpointExtract,
          stem: "Which statement best describes the setting of the extract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A harbour at dusk" },
              { id: "b", text: "A busy city market at noon" },
              { id: "c", text: "A farmhouse in the mountains" },
              { id: "d", text: "An airport terminal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Setting",
                statement: "Place and time stated in the opening line.",
              },
            ],
            steps: [
              {
                reasoning: "'The harbour at dusk' states both place and time.",
                working: "\\text{harbour at dusk}",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** A harbour at dusk",
          },
        },
        {
          id: "cile-u10-s7-mx-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: checkpointExtract,
          stem: "What feeling does 'the open sea stretched dark and glittering' create?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Awe — vastness that is both beautiful and slightly frightening" },
              { id: "b", text: "Confusion and chaos" },
              { id: "c", text: "Boredom and routine" },
              { id: "d", text: "Anger and frustration" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mood",
                statement: "Imagery of vast dark glittering water creates awe.",
              },
            ],
            steps: [
              {
                reasoning: "'Stretched' and 'glittering' make the sea seem immense and beautiful, yet 'dark' hints at the unknown.",
                working: "\\text{awe}",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** Awe — vastness that is both beautiful and slightly frightening",
          },
        },
        {
          id: "cile-u10-s7-mx-q9",
          difficulty: "challenge",
          totalMarks: 1,
          extract: checkpointExtract,
          stem: "Which statement best summarises the whole extract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tomas counts crates for nine days without sleeping" },
              { id: "b", text: "Tomas loses the cello during a storm at sea" },
              { id: "c", text: "Tomas finishes his paperwork and boards the ferry with precious cargo, greeted by someone waiting" },
              { id: "d", text: "The girl sails the ferry across the ocean" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Summary",
                statement: "A summary captures the main events: paperwork done, boarding, precious cello, waiting girl.",
              },
            ],
            steps: [
              {
                reasoning: "The extract covers signing, boarding, the cargo (incl. cello) and the girl waving — option (b) captures all.",
                working: "\\text{main events}",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** Tomas finishes his paperwork and boards the ferry with precious cargo, greeted by someone waiting",
          },
        },
        {
          id: "cile-u10-s7-mx-q10",
          difficulty: "foundation",
          totalMarks: 2,
          extract: checkpointExtract,
          stem: "How many cases of tea does the manifest list?",
          response: {
            type: "numeric",
            parts: [{ label: "tea", answer: 42, unit: "cases" }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Retrieval",
                statement: "Find the stated number: 'forty-two cases of tea'.",
              },
            ],
            steps: [
              {
                reasoning: "Locate 'forty-two cases of tea' in the manifest.",
                working: "\\text{forty-two}",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Forty-two = 42.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "42",
          },
        },
        {
          id: "cile-u10-s7-mx-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: checkpointExtract,
          stem: "Give: (a) the number of cases of coffee; (b) the number of cellos; (c) the number of times Tomas has counted the crates.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 11, unit: "cases" },
              { label: "b", answer: 1, unit: "cellos" },
              { label: "c", answer: 3, unit: "times" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mixed retrieval",
                statement: "Retrieve literal details from different parts of the text.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "'eleven of coffee' — 11.",
                working: "\\text{eleven}",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "'a single cello' — 1.",
                working: "\\text{single}",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "'for the third time' — 3 counts.",
                working: "\\text{third}",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) 11 (b) 1 (c) 3",
          },
        },
        {
          id: "cile-u10-s7-mx-q12",
          difficulty: "core",
          totalMarks: 2,
          extract: checkpointExtract,
          stem: "How many paragraphs does the extract contain?",
          response: {
            type: "numeric",
            parts: [{ label: "paragraphs", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Structure",
                statement: "Count paragraph breaks (blank lines) in the text.",
              },
            ],
            steps: [
              {
                reasoning: "The extract has three blocks of text separated by blank lines.",
                working: "\\text{3}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Each block develops one stage: harbour, jetty, boarding.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "cile-u10-s7-mx-q13",
          difficulty: "challenge",
          totalMarks: 4,
          extract: checkpointExtract,
          stem: "Calculate from the manifest: (a) the total number of cargo items listed (tea, coffee and cello); (b) the total number of individual pieces if each case counts as one piece; (c) the number of oceans the cello crossed.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3, unit: "items" },
              { label: "b", answer: 54, unit: "pieces" },
              { label: "c", answer: 3, unit: "oceans" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Calculation from text",
                statement: "Add stated quantities carefully: 42 + 11 + 1.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Item types: tea, coffee, cello = 3.",
                working: "\\text{3 types}",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Pieces = 42 + 11 + 1 = 54.",
                working: "42+11+1=54",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "'across three oceans' — 3.",
                working: "\\text{three}",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Check the addition before answering.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "(a) 3 (b) 54 (c) 3",
          },
        },
        {
          id: "cile-u10-s7-mx-q14",
          difficulty: "core",
          totalMarks: 2,
          extract: checkpointExtract,
          stem: "Explain what the detail 'as the gangway lifted' tells the reader about Tomas's departure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Detail analysis",
                statement: "Small physical details signal transition — departure is final.",
              },
            ],
            steps: [
              {
                reasoning: "The gangway lifting is the moment of no return — the ferry is leaving.",
                working: "\\text{departure}",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "It marks the end of his nine days of work — transition to the journey.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "It is the final irreversible moment — once the gangway lifts, Tomas cannot return, marking the end of his work period.",
          },
        },
        {
          id: "cile-u10-s7-mx-q15",
          difficulty: "core",
          totalMarks: 3,
          extract: checkpointExtract,
          stem: "In your own words, describe the atmosphere as Tomas boards the ferry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Atmosphere",
                statement: "Combine details: glittering sea, lifting gangway, thought of sleep.",
              },
            ],
            steps: [
              {
                reasoning: "The 'dark and glittering' sea creates a mood of awe and possibility.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "The lifting gangway and finished paperwork give a sense of completion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Thinking of sleep for the first time in nine days adds calm relief.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Awe and quiet relief — the vast glittering sea ahead, the work finally finished, and Tomas allowing himself to rest.",
          },
        },
        {
          id: "cile-u10-s7-mx-q16",
          difficulty: "challenge",
          totalMarks: 4,
          extract: checkpointExtract,
          stem: "Write a four-sentence summary of the extract covering: the setting, the cargo, the girl on the jetty, and Tomas's final state.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Summary",
                statement: "Cover all four required elements in your own words, one per sentence.",
              },
            ],
            steps: [
              {
                reasoning: "Sentence 1: setting — a harbour at dusk.",
                working: "\\text{setting}",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sentence 2: cargo — tea, coffee and a precious cello.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sentence 3: girl waving on the far jetty with her dog.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Sentence 4: Tomas boards exhausted but relieved, thinking of sleep.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Any four accurate sentences covering setting, cargo, the girl and Tomas's state — e.g. 'At dusk in a harbour, Tomas checks his cargo: tea, coffee and a cello wrapped in his grandmother's blankets. A girl in a yellow raincoat waves from the far jetty with her dog. Tomas signs the last form and boards the ferry as the gangway lifts. After nine days of work, he allows himself to think about sleep.'",
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
