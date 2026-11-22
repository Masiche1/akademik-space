import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "el7-u1-lesson-1-1",
  code: "1-1",
  title: "Comprehension and Inference",
  goal: "I CAN retrieve information, make inferences and support answers with evidence from texts.",
  standards: ["Edexcel KS3 English Language — Reading"],
  vocabulary: [
    {
      term: "Inference",
      definition:
        "A conclusion drawn from evidence in the text plus what you already know.",
    },
    {
      term: "Evidence",
      definition:
        "A quotation or reference from the text supporting an answer.",
    },
    { term: "Literal", definition: "Information stated directly in the text." },
    {
      term: "Implicit",
      definition: "Information suggested but not directly stated.",
    },
  ],
  concepts: [
    {
      id: "el7-u1-retrieval",
      title: "Retrieving and Inferring",
      skill: "Answer literal and inference questions using textual evidence.",
      lesson: {
        sections: [
          {
            heading: "Literal vs inference questions",
            body: "**Literal** questions ask what the text says directly — answers can be found word-for-word or nearly so. **Inference** questions ask what the text suggests — you combine clues with reasoning. 'The character clenched her fists' suggests anger — the text never says 'she was angry'.\n\n**Evidence is essential**: every answer should quote or closely reference the text. An inference without evidence is just an opinion.",
          },
          {
            heading: "Building strong answers",
            body: "Structure inference answers as: **point + evidence + explanation**. Point: what you think. Evidence: the quote/clue. Explanation: how the evidence supports the point.\n\nExample: 'Maya was nervous (point). She kept checking her phone and jumping at every sound (evidence). These actions show anxiety about something she is waiting for (explanation).'",
          },
        ],
        keyFormulas: [
          {
            name: "Inference formula",
            statement: "Point + evidence + explanation.",
          },
          {
            name: "Literal vs inference",
            statement: "Literal = stated; inference = suggested.",
          },
        ],
        workedExample: {
          problem:
            "Text: 'Tom slumped into his chair, staring at the blank page.' What can you infer about Tom?",
          solution:
            "Tom is struggling or lacks motivation — 'slumped' and 'blank page' suggest defeat or writer's block.",
        },
      },
      questions: [
        {
          id: "el7-u1-retrieval-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a literal and an inference question?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Literal is easier; inference is harder" },
              { id: "b", text: "They are the same" },
              {
                id: "c",
                text: "Literal asks what's stated; inference asks what's suggested",
              },
              {
                id: "d",
                text: "Literal asks for opinion; inference asks for facts",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Literal vs inference",
                statement: "Literal = stated directly; inference = implied.",
              },
            ],
            steps: [
              {
                reasoning: "Literal retrieves stated info; inference deduces.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Stated vs suggested",
            commonErrors: ["Confusing the terms."],
          },
        },
        {
          id: "el7-u1-retrieval-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Text: 'Amara's hands trembled as she opened the envelope.' What does this suggest about Amara? Support with evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Inference with evidence",
                statement: "Combine textual clues with reasoning.",
              },
            ],
            steps: [
              {
                reasoning: "Inference: Amara is nervous or anxious.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Evidence: 'hands trembled'.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Explanation: trembling suggests nervousness about contents.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Amara is nervous/anxious — 'hands trembled' shows physical anxiety.",
            commonErrors: ["No evidence quoted.", "Over-interpreting."],
          },
        },
        {
          id: "el7-u1-retrieval-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is evidence essential in comprehension answers?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Textual evidence",
                statement:
                  "Evidence proves answers come from the text, not opinion.",
              },
            ],
            steps: [
              {
                reasoning: "Distinguishes text-based from opinion.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Allows verification of interpretation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Shows close reading skill.",
                marks: 1,
                markCode: "AO4",
              },
              { reasoning: "Strengthens argument.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Evidence grounds answers in the text — separating interpretation from unsupported opinion.",
            commonErrors: [
              "Generic 'it's important'.",
              "No analytical reasoning.",
            ],
          },
        },
        {
          id: "el7-u1-retrieval-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Text: 'The old house groaned in the wind. Dust motes danced in the single beam of light.'",
          parts: [
            { label: "a", prompt: "Identify one literal detail.", marks: 2 },
            {
              label: "b",
              prompt: "Infer the mood of the passage with evidence.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest what 'groaned' suggests about the house.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Close reading",
                statement: "Literal detail + inference + word analysis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) Literal: dust motes in light beam / house in wind.",
                marks: 2,
                markCode: "AO1",
                part: "a",
              },
              {
                reasoning:
                  "(b) Mood: eerie/neglected — 'groaned', 'dust motes', 'single beam'.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Evidence identified.",
                marks: 1,
                markCode: "AO1",
                part: "b",
              },
              {
                reasoning:
                  "(c) 'Groaned' personifies house — sounds like pain/moaning.",
                marks: 2,
                markCode: "AO2",
                part: "c",
              },
              {
                reasoning: "(c) Suggests age, decay, unease.",
                marks: 1,
                markCode: "AO3",
                part: "c",
              },
            ],
                        levels: [
                          { level: "Level 2", marks: "1-2", descriptor: "Accurate response earning full credit for this part.", part: "a" },
                          { level: "Level 1", marks: "0", descriptor: "Partial or no credit.", part: "a" },
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "b" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "b" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "b" },
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "c" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "c" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "c" },
                        ],
            finalAnswer:
              "(a) dust motes/house in wind (b) eerie, neglected (c) personification suggesting decay",
            commonErrors: ["No evidence.", "Missing personification."],
          },
        },
      ],
    },
    {
      id: "el7-u1-author",
      title: "Authorial Choices and Figurative Language",
      skill:
        "Analyse how writers use language and structure to create effects.",
      lesson: {
        sections: [
          {
            heading: "Figurative language",
            body: "**Simile**: comparison using 'like/as' — 'brave as a lion'. **Metaphor**: direct comparison — 'he is a rock'. **Personification**: giving human traits to objects — 'the wind whispered'. **Hyperbole**: deliberate exaggeration — 'I've told you a million times'. **Alliteration**: repeated initial sounds — 'silent, solemn, still'. **Onomatopoeia**: sound words — 'buzz', 'crash'.",
          },
          {
            heading: "Analysing effect",
            body: "Don't just identify devices — explain the **effect**: what does it make the reader feel/think? 'The simile 'brave as a lion' makes the character seem courageous and noble.'\n\n**Structural choices**: sentence length (short = punchy, long = flowing), paragraph breaks (create pauses/suspense), narrative voice (first/third person affects intimacy).",
          },
        ],
        keyFormulas: [
          {
            name: "Analytical formula",
            statement: "Device + example + effect on reader.",
          },
          {
            name: "Common devices",
            statement:
              "Simile, metaphor, personification, hyperbole, alliteration, onomatopoeia.",
          },
        ],
        workedExample: {
          problem: "Analyse: 'The moon was a silver coin tossed into the sky.'",
          solution:
            "Metaphor — moon compared directly to coin; suggests brightness, fragility, poetic beauty.",
        },
      },
      questions: [
        {
          id: "el7-u1-author-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between a simile and a metaphor?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Simile is longer; metaphor is shorter" },
              { id: "b", text: "Metaphor is always better" },
              {
                id: "c",
                text: "Simile uses 'like/as'; metaphor is direct comparison",
              },
              { id: "d", text: "They are identical" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Simile vs metaphor",
                statement: "Simile uses like/as; metaphor is direct.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Simile compares with like/as; metaphor states equality.",
                marks: 2,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(c)** Simile uses 'like/as'; metaphor is direct",
            commonErrors: ["Confusing the devices."],
          },
        },
        {
          id: "el7-u1-author-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Analyse the effect of personification in: 'The old house groaned in the wind.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Personification",
                statement: "Giving human trait (groaning) to house.",
              },
            ],
            steps: [
              {
                reasoning: "Identify: personification.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "House 'groans' like a person in pain.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Effect: suggests age, decay, unease.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Personification makes house seem alive and suffering — evokes decay and eeriness.",
            commonErrors: ["Identifying without effect.", "Wrong device."],
          },
        },
        {
          id: "el7-u1-author-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why do writers use figurative language?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Purpose of figurative language",
                statement:
                  "Creates vivid images, conveys emotion, makes abstract ideas concrete.",
              },
            ],
            steps: [
              {
                reasoning: "Makes descriptions vivid/memorable.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Conveys emotion/atmosphere.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Simplifies complex ideas.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Engages reader imaginatively.",
                marks: 1,
                markCode: "AO4",
              },
            ],
            finalAnswer:
              "Figurative language creates vivid images, conveys emotion and makes abstract ideas accessible.",
            commonErrors: [
              "Only 'makes it interesting'.",
              "No specific purposes.",
            ],
          },
        },
        {
          id: "el7-u1-author-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Analyse this sentence: 'The wind howled through the trees like a hungry wolf.'",
          parts: [
            {
              label: "a",
              prompt: "Identify the figurative language used.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain what the comparison suggests.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Suggest the overall effect on the reader.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Figurative analysis",
                statement: "Device → comparison meaning → reader effect.",
              },
            ],
            steps: [
              {
                reasoning: "Simile ('like') + onomatopoeia ('howled').",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "Wolf comparison suggests danger/predation.",
                marks: 1,
                markCode: "AO3",
                part: "a",
              },
              {
                reasoning: "'Howled' adds sound — wild, threatening.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "Comparison makes wind seem predatory/alive.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "Wolf = danger; howling = unsettling.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
              {
                reasoning: "Effect: tension, fear, wildness.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
                        levels: [
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "a" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "a" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "a" },
                          { level: "Level 3", marks: "2-3", descriptor: "Secure, accurate and well-explained response for this part.", part: "b" },
                          { level: "Level 2", marks: "1", descriptor: "Partial credit — incomplete or loosely explained.", part: "b" },
                          { level: "Level 1", marks: "0", descriptor: "No creditable response.", part: "b" },
                          { level: "Level 2", marks: "1-2", descriptor: "Accurate response earning full credit for this part.", part: "c" },
                          { level: "Level 1", marks: "0", descriptor: "Partial or no credit.", part: "c" },
                        ],
            finalAnswer:
              "(a) simile + onomatopoeia (b) predatory danger (c) tension/unease",
            commonErrors: ["Missing devices.", "No effect analysis."],
          },
        },
      ],
    },
  ],
};
