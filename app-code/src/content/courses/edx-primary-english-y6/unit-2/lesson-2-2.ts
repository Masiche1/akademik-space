import type { Lesson } from "../../../types.ts";

export const lesson112: Lesson = {
  id: "edpe6-u2-lesson-2-2",
  code: "2-2",
  title: "Inference and Implied Meaning",
  goal: "I CAN make complex inferences about unstated meaning and character motivation.",
  standards: ["Year 6 Reading"],
  vocabulary: [
    {
      term: "Implied meaning",
      definition: "What is suggested but not stated.",
    },
    { term: "Motivation", definition: "Why a character acts as they do." },
    { term: "Subtext", definition: "Underlying meaning beneath surface text." },
    { term: "Irony", definition: "Contrast between expectation and reality." },
  ],
  concepts: [
    {
      id: "edpe6-u2-implied",
      title: "Implied meaning and subtext",
      skill: "Infer unstated meanings and character motivations.",
      lesson: {
        sections: [
          {
            heading: "Reading between lines",
            body: "Characters rarely say what they mean. 'I'm fine' while crying → she's not fine. Actions contradict words → look for what they're really feeling or hiding.",
          },
          {
            heading: "Motivation inference",
            body: "Why does a character act this way? Backstory, relationships, fears all drive behaviour. Infer motivation from actions, dialogue and context.",
          },
        ],
        keyFormulas: [
          { name: "Subtext", statement: "Underlying meaning" },
          { name: "Motivation", statement: "Why characters act" },
          { name: "Irony", statement: "Expectation vs reality" },
        ],
        workedExample: {
          problem:
            "Text: 'She smiled and said she was delighted, but her hands were shaking.' What does this reveal?",
          solution:
            "She's hiding nervousness — words contradict body language.",
        },
      },
      questions: [
        {
          id: "edpe6-u2-im-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is subtext?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Underlying meaning beneath surface" },
              { id: "b", text: "The setting" },
              { id: "c", text: "The plot" },
              { id: "d", text: "The title" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subtext",
                statement: "Underlying meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Subtext = beneath surface.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Underlying meaning beneath surface",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edpe6-u2-im-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Text: 'He said he didn't care, but he watched her every move.' What does this suggest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He's honest" },
              { id: "b", text: "He's angry" },
              { id: "c", text: "He cares deeply" },
              { id: "d", text: "He's bored" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Implied meaning",
                statement: "Actions contradict words = cares.",
              },
            ],
            steps: [
              { reasoning: "Contradiction spotted.", marks: 1, markCode: "M" },
              { reasoning: "Answer: cares deeply.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** He cares deeply",
            commonErrors: ["Surface reading only."],
          },
        },
        {
          id: "edpe6-u2-im-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Infer why a character might say 'I'm fine' while crying.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Motivation",
                statement:
                  "Hiding emotions; protecting others; pride; fear of vulnerability.",
              },
            ],
            steps: [
              { reasoning: "Contradiction noted.", marks: 1, markCode: "M" },
              { reasoning: "Possible motivations.", marks: 1, markCode: "A" },
              { reasoning: "Reasonable inference.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Hiding emotions, protecting others, pride, or fear of showing vulnerability",
            commonErrors: ["No inference or weak."],
          },
        },
        {
          id: "edpe6-u2-im-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse: 'The fire station was burning down — ironic, isn't it?'",
          parts: [
            { label: "a", prompt: "What is ironic here?", marks: 1 },
            {
              label: "b",
              prompt: "What does this suggest about situation?",
              marks: 1,
            },
            { label: "c", prompt: "What might this symbolise?", marks: 1 },
            { label: "d", prompt: "Why use irony here?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Irony",
                statement:
                  "Fire station should be safe but burns = unexpected; chaos/irony of fate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Irony identified.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Situation described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Symbolism suggested.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Effect explained.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Fire station burns = ironic; chaos; symbolises vulnerability; emphasises unpredictability",
            commonErrors: ["Not recognising irony."],
          },
        },
      ],
    },
    {
      id: "edpe6-u2-poetry",
      title: "Poetry and dramatic analysis",
      skill: "Analyse poetry and drama for meaning, structure and technique.",
      lesson: {
        sections: [
          {
            heading: "Poetry depth",
            body: "Look for: imagery (sensory language), sound devices (alliteration, rhyme, rhythm), structure (form, line breaks), and emotional journey. What is the poet really saying?",
          },
          {
            heading: "Drama analysis",
            body: "In plays: stage directions reveal character/action; dialogue carries subtext; dramatic irony (audience knows what characters don't); soliloquies reveal inner thoughts.",
          },
        ],
        keyFormulas: [
          { name: "Imagery", statement: "Sensory language" },
          {
            name: "Dramatic irony",
            statement: "Audience knows more than characters",
          },
          { name: "Stage directions", statement: "Reveal action/character" },
        ],
        workedExample: {
          problem: "Poem: 'The moon wept silver tears.' What device and mood?",
          solution: "Personification (moon weeping) + melancholy mood.",
        },
      },
      questions: [
        {
          id: "edpe6-u2-pd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is dramatic irony?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A joke" },
              { id: "b", text: "A sad scene" },
              { id: "c", text: "Audience knows what characters don't" },
              { id: "d", text: "Characters lie" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dramatic irony",
                statement: "Audience knows more.",
              },
            ],
            steps: [
              {
                reasoning: "Dramatic irony = audience knowledge.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(c)** Audience knows what characters don't",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edpe6-u2-pd-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 'The moon wept silver tears' use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Simile" },
              { id: "b", text: "Alliteration" },
              { id: "c", text: "Hyperbole" },
              { id: "d", text: "Personification" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Personification",
                statement: "Moon 'weeps' = human action.",
              },
            ],
            steps: [
              {
                reasoning: "Human action = personification.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: personification.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Personification",
            commonErrors: ["Wrong device."],
          },
        },
        {
          id: "edpe6-u2-pd-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do stage directions help understand a play?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stage directions",
                statement: "Reveal action, character, setting.",
              },
            ],
            steps: [
              { reasoning: "Function identified.", marks: 1, markCode: "M" },
              { reasoning: "Explained.", marks: 1, markCode: "A" },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Reveal character actions, emotions, setting and atmosphere",
            commonErrors: ["Vague or wrong."],
          },
        },
        {
          id: "edpe6-u2-pd-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyse: 'Enter HAMLET, looking troubled. (He sighs deeply.)' — what do we learn?",
          parts: [
            {
              label: "a",
              prompt: "What does 'looking troubled' show?",
              marks: 1,
            },
            { label: "b", prompt: "What does the sigh reveal?", marks: 1 },
            { label: "c", prompt: "What mood is created?", marks: 1 },
            {
              label: "d",
              prompt: "Why are stage directions important?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stage direction analysis",
                statement: "Troubled + sigh = inner conflict; tense mood.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Trouble shown.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Sigh = sadness.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Mood identified.",
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
              "Troubled appearance; sigh = sadness; tense mood; reveals inner state",
            commonErrors: ["Missing directions or no analysis."],
          },
        },
      ],
    },
  ],
};
