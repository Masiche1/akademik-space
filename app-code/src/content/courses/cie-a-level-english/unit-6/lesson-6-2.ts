import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "cial-e-u6-lesson-6-2",
  code: "6-2",
  title: "Set Text Study: Poetry and Prose",
  goal: "I CAN analyse poetry and prose set texts using close reading and comparison.",
  standards: ["9093: Literature in English"],
  vocabulary: [
    {
      term: "Close reading",
      definition: "Detailed analysis of a specific passage.",
    },
    {
      term: "Form",
      definition: "Structure/type of text (sonnet, novel, play).",
    },
    { term: "Voice", definition: "Narrator's perspective and tone." },
    { term: "Imagery", definition: "Language creating sensory pictures." },
    {
      term: "Symbolism",
      definition: "Objects/ideas representing deeper meaning.",
    },
    { term: "Theme", definition: "Central idea explored in text." },
  ],
  concepts: [
    {
      id: "cial-e-u6-poetry-prose",
      title: "Analysing Poetry and Prose",
      skill: "Apply close reading techniques to poetry and prose set texts.",
      lesson: {
        sections: [
          {
            heading: "Poetry analysis",
            body: "Analyse: form (sonnet, free verse), structure (stanzas, rhyme, enjambment), imagery (metaphor, simile, symbolism), voice (speaker, tone), sound (alliteration, assonance), context. Compare poems on shared themes — link specific lines to broader ideas.",
          },
          {
            heading: "Prose analysis",
            body: "Analyse: narrative voice (first/third person, unreliable narrator), characterisation (direct/indirect, development), setting (place, time, atmosphere), structure (chapters, flashbacks), themes, context. Track character development and how techniques serve themes.",
          },
          {
            heading: "Close reading technique",
            body: "Select short passage → analyse word choice, imagery, structure → link to whole text themes → support with other quotations. Avoid plot summary — analyse how meaning is created. Compare across texts on same theme.",
          },
        ],
        keyFormulas: [
          {
            name: "Poetry/prose",
            statement:
              "Form+voice+imagery+structure+theme; close reading→link to whole text.",
          },
        ],
        workedExample: {
          problem: "How to analyse a poem effectively?",
          solution:
            "Identify form/structure, analyse key imagery and voice, link to theme, compare with other poems — support with specific lines.",
        },
      },
      questions: [
        {
          id: "cial-e-u6-pp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is close reading?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Detailed analysis of a specific passage" },
              { id: "b", text: "Reading quickly for plot" },
              { id: "c", text: "Summarising the whole text" },
              { id: "d", text: "Reading for entertainment" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Close reading",
                statement: "Detailed passage analysis.",
              },
            ],
            steps: [
              { reasoning: "Detailed analysis.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Detailed analysis of a specific passage",
            commonErrors: ["Confusing with skimming."],
          },
        },
        {
          id: "cial-e-u6-pp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two features to analyse in a poem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Poetry features",
                statement: "Form, imagery, voice, structure.",
              },
            ],
            steps: [
              { reasoning: "Any two features.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Form, structure, imagery, voice, sound, rhyme, rhythm, context.",
            commonErrors: ["Only one feature."],
          },
        },
        {
          id: "cial-e-u6-pp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How should narrative voice be analysed in prose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Narrative voice",
                statement: "Perspective+reliability+tone.",
              },
            ],
            steps: [
              {
                reasoning: "First/third person perspective.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Reliable/unreliable narrator.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Tone and distance.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Identify perspective (first/third person), reliability (unreliable narrators), tone, and how voice shapes reader's view of events.",
            commonErrors: ["Only identifying POV."],
          },
        },
        {
          id: "cial-e-u6-pp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Poetry and prose analysis.",
          parts: [
            { label: "a", prompt: "Poetry features?", marks: 3 },
            { label: "b", prompt: "Prose features?", marks: 3 },
            { label: "c", prompt: "Close reading?", marks: 2 },
            { label: "d", prompt: "Comparison?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Analysis",
                statement: "Poetry+prose+close reading+comparison.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Form/imagery/voice.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Structure/sound.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Theme link.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Narrative voice.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Characterisation/setting.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Structure/themes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Passage→theme link.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Evidence-based.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Compare across texts.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) poetry (b) prose (c) close reading (d) comparison",
          },
        },
      ],
    },
    {
      id: "cial-e-u6-drama",
      title: "Drama Analysis",
      skill:
        "Analyse dramatic texts — stagecraft, dialogue, themes and structure.",
      lesson: {
        sections: [
          {
            heading: "Drama conventions",
            body: "Plays are written for performance — stage directions, dialogue, entrances/exits, soliloquies, asides. Dramatic irony: audience knows what characters don't. Tragedy vs comedy conventions. Structure: acts/scenes, rising/falling action, climax.",
          },
          {
            heading: "Analysing drama",
            body: "Focus on: dialogue (subtext, character revelation), stagecraft (how staging affects meaning), dramatic irony (audience perspective), character development through action/dialogue, themes, context (Shakespearean vs modern drama). Consider performance — how would this scene play?",
          },
          {
            heading: "Key plays and themes",
            body: "Common set texts explore: power and authority, love and betrayal, appearance vs reality, fate vs free will, social class, mortality. Know specific scenes, quotations, structural turning points. Compare plays on shared themes — e.g., Macbeth vs Othello (ambition, manipulation).",
          },
        ],
        keyFormulas: [
          {
            name: "Drama",
            statement:
              "Stagecraft+dialogue+irony+structure+themes; performance matters.",
          },
        ],
        workedExample: {
          problem: "Why is dramatic irony powerful in analysis?",
          solution:
            "Audience knows what characters don't — creates tension, reveals character flaws, highlights themes (e.g., Oedipus searching for killer who is himself).",
        },
      },
      questions: [
        {
          id: "cial-e-u6-dr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is dramatic irony?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Audience knows what characters don't" },
              { id: "b", text: "Characters know everything" },
              { id: "c", text: "Humorous dialogue" },
              { id: "d", text: "Sad ending" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Dramatic irony",
                statement: "Audience knowledge gap.",
              },
            ],
            steps: [
              { reasoning: "Audience knows more.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Audience knows what characters don't",
            commonErrors: ["Confusing with verbal irony."],
          },
        },
        {
          id: "cial-e-u6-dr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two features of drama to analyse.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Drama features",
                statement: "Dialogue, stagecraft, irony, structure.",
              },
            ],
            steps: [
              { reasoning: "Any two features.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Dialogue/subtext, stagecraft, dramatic irony, structure, character development, themes.",
            commonErrors: ["Only one feature."],
          },
        },
        {
          id: "cial-e-u6-dr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How should a drama essay differ from a prose essay?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Drama vs prose",
                statement: "Performance+dialogue vs narrative.",
              },
            ],
            steps: [
              {
                reasoning: "Drama: performance/stagecraft.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Drama: dialogue/irony.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Prose: narrative voice.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Drama essays focus on performance, dialogue, dramatic irony and stagecraft; prose essays focus on narrative voice, characterisation and setting.",
            commonErrors: ["Treating drama as prose."],
          },
        },
        {
          id: "cial-e-u6-dr-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Drama analysis.",
          parts: [
            { label: "a", prompt: "Drama conventions?", marks: 2 },
            { label: "b", prompt: "Dramatic irony?", marks: 2 },
            { label: "c", prompt: "Analysis focus?", marks: 3 },
            { label: "d", prompt: "Comparison?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Drama",
                statement: "Conventions+irony+analysis+comparison.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Acts/scenes/dialogue.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Performance nature.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Audience knows more.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Creates tension/themes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Dialogue/subtext.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Stagecraft/structure.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Themes/character.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Compare plays on theme.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Weave comparison.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) conventions (b) irony (c) analysis (d) comparison",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u6-6-2-notes",
      title: "Set texts — notes",
      summary:
        "Poetry/prose close reading; drama conventions, dramatic irony, performance.",
      sections: [
        {
          heading: "Poetry/prose",
          body: "Form/voice/imagery/structure; narrative voice; close reading→theme.",
        },
        {
          heading: "Drama",
          body: "Stagecraft/dialogue/irony; performance matters; compare plays on themes.",
        },
      ],
    },
  ],
};
