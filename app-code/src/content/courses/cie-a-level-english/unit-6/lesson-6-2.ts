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
              { id: "a", text: "Reading quickly for plot" },
              { id: "b", text: "Detailed analysis of a specific passage" },
              { id: "c", text: "Reading for entertainment" },
              { id: "d", text: "Summarising the whole text" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cial-e-u6-pp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do first when beginning a close reading of an unseen extract?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Memorise the whole text" },
              { id: "b", text: "Count the number of pages" },
              {
                id: "c",
                text: "Select a short, significant passage to analyse"
              },
              { id: "d", text: "Write the conclusion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Close reading",
                statement: "Select a short passage, then analyse closely.",
              },
            ],
            steps: [
              {
                reasoning: "Close reading begins with passage selection.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Select a short passage",
            commonErrors: ["Trying to analyse the whole text at once."],
          },
        },
        {
          id: "cial-e-u6-pp-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does imagery in poetry create for the reader?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Grammatical errors" },
              { id: "b", text: "The poet's signature" },
              { id: "c", text: "Sensory pictures and associations" },
              { id: "d", text: "Page numbers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Imagery",
                statement: "Language creating sensory pictures.",
              },
            ],
            steps: [
              {
                reasoning: "Imagery appeals to the senses.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Sensory pictures and associations",
            commonErrors: ["Confusing imagery with rhyme."],
          },
        },
        {
          id: "cial-e-u6-pp-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'symbolism' mean in literary analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The poem's title only" },
              { id: "b", text: "Objects or ideas representing deeper meaning" },
              { id: "c", text: "A list of characters" },
              { id: "d", text: "The printing font" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Symbolism",
                statement: "Objects/ideas representing deeper meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Symbols carry layered significance.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Objects representing deeper meaning",
            commonErrors: ["Treating symbols as literal objects."],
          },
        },
        {
          id: "cial-e-u6-pp-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why should plot summary be avoided in a close-reading essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It uses too many quotations" },
              { id: "b", text: "It is too short" },
              { id: "c", text: "It is required by examiners" },
              {
                id: "d",
                text: "It retells events rather than analysing how meaning is created"
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Avoid summary",
                statement: "Analyse meaning creation, not events.",
              },
            ],
            steps: [
              {
                reasoning: "Summary describes; analysis explains methods.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Examiners reward interpretive work.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** Retells rather than analyses",
            commonErrors: ["Narrating the passage back."],
          },
        },
        {
          id: "cial-e-u6-pp-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What does an 'unreliable narrator' mean in prose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A narrator who cannot be trusted to tell the whole truth" },
              { id: "b", text: "A narrator who appears only once" },
              { id: "c", text: "A narrator with poor grammar" },
              { id: "d", text: "A narrator who speaks in rhyme" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unreliable narrator",
                statement: "Narrator whose account cannot be fully trusted.",
              },
            ],
            steps: [
              {
                reasoning: "Unreliability creates interpretive gaps.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Readers must question the narration.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Cannot be fully trusted",
            commonErrors: ["Assuming all narrators are truthful."],
          },
        },
        {
          id: "cial-e-u6-pp-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What is 'enjambment' in poetry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A repeated first word" },
              { id: "b", text: "A silent letter" },
              { id: "c", text: "A rhyme at line endings" },
              {
                id: "d",
                text: "A sentence continuing across a line break without pause"
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enjambment",
                statement: "Sentence runs over the line break.",
              },
            ],
            steps: [
              {
                reasoning: "Enjambment creates flow and tension.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "It contrasts with end-stopped lines.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** Sentence continuing across a line break",
            commonErrors: ["Confusing with rhyme."],
          },
        },
        {
          id: "cial-e-u6-pp-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A poem has 4 stanzas of 4 lines each. How many lines does the poem contain in total?",
          response: {
            type: "numeric",
            parts: [{ label: "lines", answer: 16 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stanza count",
                statement: "Total lines = stanzas × lines per stanza.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply stanzas by lines each.",
                working: "4 \\times 4 = 16",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "16",
            commonErrors: ["Answering 4 (stanzas only)."],
          },
        },
        {
          id: "cial-e-u6-pp-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A close-reading response has steps worth 1, 2 and 1 marks for selecting, analysing and linking. Enter the total marks and the marks for the analysis step.",
          response: {
            type: "numeric",
            parts: [
              { label: "total", answer: 4 },
              { label: "analysis", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Close-reading steps",
                statement: "Analysis carries the most marks.",
              },
            ],
            steps: [
              {
                reasoning: "Sum the three steps.",
                working: "1 + 2 + 1 = 4",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Read the analysis step value.",
                working: "2",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "total = 4, analysis = 2",
            commonErrors: ["Giving selection the most marks."],
          },
        },
        {
          id: "cial-e-u6-pp-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "An essay compares 3 poems, using 2 integrated quotations from each. How many quotations are used in total?",
          response: {
            type: "numeric",
            parts: [{ label: "quotations", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quotation count",
                statement: "Quotations = poems × per poem.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply poems by quotations each.",
                working: "3 \\times 2 = 6",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "6",
            commonErrors: ["Quoting only the first poem."],
          },
        },
        {
          id: "cial-e-u6-pp-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A novel has 12 chapters. A student analyses 3 chapters in detail. Enter the number of chapters analysed and the number not analysed.",
          response: {
            type: "numeric",
            parts: [
              { label: "analysed", answer: 3 },
              { label: "remaining", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Coverage",
                statement: "Remaining = total − analysed.",
              },
            ],
            steps: [
              {
                reasoning: "Read the analysed count.",
                working: "3",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Subtract analysed from total.",
                working: "12 - 3 = 9",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "analysed = 3, remaining = 9",
            commonErrors: ["Subtracting from 10 instead of 12."],
          },
        },
        {
          id: "cial-e-u6-pp-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A poetry-analysis question has four features — form, imagery, voice and theme — each worth 2 marks. Enter the total marks, the number of features, and the marks per feature.",
          response: {
            type: "numeric",
            parts: [
              { label: "total", answer: 8 },
              { label: "features", answer: 4 },
              { label: "per_feature", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Feature marks",
                statement: "Total = features × marks each.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply features by marks each.",
                working: "4 \\times 2 = 8",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Count the features.",
                working: "4",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Read marks per feature.",
                working: "2",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "total = 8, features = 4, per feature = 2",
            commonErrors: ["Counting theme twice."],
          },
        },
        {
          id: "cial-e-u6-pp-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe the close-reading process for analysing a poetry extract.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Close reading process",
                statement: "Select → analyse → link to theme → support elsewhere.",
              },
            ],
            steps: [
              {
                reasoning: "Select a short, significant passage.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Analyse word choice, imagery and structure closely.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Link local detail to whole-text themes.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Support with other quotations where needed.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Select passage → close analysis → link to theme → wider support.",
            commonErrors: ["Stopping at paraphrase of the lines."],
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
              { id: "a", text: "Characters know everything" },
              { id: "b", text: "Humorous dialogue" },
              { id: "c", text: "Audience knows what characters don't" },
              { id: "d", text: "Sad ending" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cial-e-u6-dr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a soliloquy in drama?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A speech delivered to the audience by one character alone" },
              { id: "b", text: "A stage direction" },
              { id: "c", text: "A song sung by the chorus" },
              { id: "d", text: "A conversation between two characters" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Soliloquy",
                statement: "Character speaks alone, revealing inner thoughts.",
              },
            ],
            steps: [
              {
                reasoning: "Soliloquy exposes the character's mind.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Character speaking alone to audience",
            commonErrors: ["Confusing with dialogue."],
          },
        },
        {
          id: "cial-e-u6-dr-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is an 'aside' in a play?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A written stage direction" },
              { id: "b", text: "The play's opening speech" },
              { id: "c", text: "A character's exit from the stage" },
              { id: "d", text: "A remark heard by the audience but not by other characters" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Aside",
                statement: "Remark to audience unheard by other characters.",
              },
            ],
            steps: [
              {
                reasoning: "Asides create dramatic irony and intimacy.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Audience-only remark",
            commonErrors: ["Confusing with soliloquy."],
          },
        },
        {
          id: "cial-e-u6-dr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'subtext' in dialogue reveal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The plot summary" },
              {
                id: "b",
                text: "Hidden meanings, motives and relationships beneath the words"
              },
              { id: "c", text: "The stage lighting" },
              { id: "d", text: "The literal meaning only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subtext",
                statement: "Hidden meanings beneath spoken words.",
              },
            ],
            steps: [
              {
                reasoning: "Subtext carries what is unsaid.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Hidden meanings beneath the words",
            commonErrors: ["Reading dialogue at face value."],
          },
        },
        {
          id: "cial-e-u6-dr-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why are stage directions valuable evidence in drama analysis?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "They show how the play is performed and reveal characterisation"
              },
              { id: "b", text: "They are optional decoration" },
              { id: "c", text: "They only list the cast" },
              { id: "d", text: "They replace dialogue entirely" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stage directions",
                statement: "Reveal performance, mood, characterisation.",
              },
            ],
            steps: [
              {
                reasoning: "Directions encode performance intent.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "They can characterise without dialogue.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** Show performance and characterisation",
            commonErrors: ["Ignoring directions in analysis."],
          },
        },
        {
          id: "cial-e-u6-dr-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How does experiencing drama differ from reading prose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Prose is always performed" },
              {
                id: "b",
                text: "Drama is performed live, so staging, timing and delivery shape meaning"
              },
              { id: "c", text: "Drama has no characters" },
              { id: "d", text: "There is no difference at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Performance",
                statement: "Drama is written for live performance.",
              },
            ],
            steps: [
              {
                reasoning: "Performance adds a dimension prose lacks.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Timing and delivery affect interpretation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** Performance shapes meaning",
            commonErrors: ["Reading plays like novels."],
          },
        },
        {
          id: "cial-e-u6-dr-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What effect does dramatic irony create for the audience?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Complete confusion" },
              { id: "b", text: "Laughter only" },
              {
                id: "c",
                text: "Tension and a sense of superiority over the characters"
              },
              { id: "d", text: "Loss of interest" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Dramatic irony",
                statement: "Audience knowledge creates tension and insight.",
              },
            ],
            steps: [
              {
                reasoning: "Knowing more than characters builds suspense.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "It can heighten tragedy or comedy.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** Tension and audience superiority",
            commonErrors: ["Confusing dramatic with verbal irony."],
          },
        },
        {
          id: "cial-e-u6-dr-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A play has 5 acts, with the climax occurring in Act 3. How many acts come after the climax?",
          response: {
            type: "numeric",
            parts: [{ label: "acts", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Act position",
                statement: "Acts after climax = total − climax act.",
              },
            ],
            steps: [
              {
                reasoning: "Subtract the climax act from the total.",
                working: "5 - 3 = 2",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting Act 3 itself."],
          },
        },
        {
          id: "cial-e-u6-dr-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "A scene begins with 6 characters on stage; 2 exit during the scene. How many characters remain on stage at the end?",
          response: {
            type: "numeric",
            parts: [{ label: "remaining", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Staging count",
                statement: "Remaining = initial − exits.",
              },
            ],
            steps: [
              {
                reasoning: "Subtract exits from the starting number.",
                working: "6 - 2 = 4",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "4",
            commonErrors: ["Forgetting characters may enter later."],
          },
        },
        {
          id: "cial-e-u6-dr-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "A drama-analysis question allocates 3 marks to dialogue, 2 to stagecraft, 2 to dramatic irony and 2 to theme. Enter the total marks and the marks for the largest component.",
          response: {
            type: "numeric",
            parts: [
              { label: "total", answer: 9 },
              { label: "largest", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mark allocation",
                statement: "Total = sum of components; identify maximum.",
              },
            ],
            steps: [
              {
                reasoning: "Sum all components.",
                working: "3 + 2 + 2 + 2 = 9",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Largest component is dialogue at 3.",
                working: "\\max(3, 2, 2, 2) = 3",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "total = 9, largest = 3",
            commonErrors: ["Miscounting the components."],
          },
        },
        {
          id: "cial-e-u6-dr-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Two plays are compared across 3 shared themes (power, betrayal, fate). How many theme-comparisons are required, and how many plays are involved?",
          response: {
            type: "numeric",
            parts: [
              { label: "comparisons", answer: 3 },
              { label: "plays", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Theme comparison",
                statement: "Each shared theme = one comparison across both plays.",
              },
            ],
            steps: [
              {
                reasoning: "One comparison per shared theme.",
                working: "3",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Comparison involves two plays.",
                working: "2",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "comparisons = 3, plays = 2",
            commonErrors: ["Counting each play as a separate comparison."],
          },
        },
        {
          id: "cial-e-u6-dr-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A drama markscheme has four steps worth 2, 1, 3 and 1 marks. Enter the total marks, the largest single step, and the number of steps.",
          response: {
            type: "numeric",
            parts: [
              { label: "total", answer: 7 },
              { label: "largest", answer: 3 },
              { label: "steps", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Markscheme totals",
                statement: "Step marks sum to total; find max and count.",
              },
            ],
            steps: [
              {
                reasoning: "Sum the steps.",
                working: "2 + 1 + 3 + 1 = 7",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Largest step is 3.",
                working: "\\max(2, 1, 3, 1) = 3",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Count the steps.",
                working: "4",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "total = 7, largest = 3, steps = 4",
            commonErrors: ["Counting marks instead of steps."],
          },
        },
        {
          id: "cial-e-u6-dr-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how a soliloquy functions as a dramatic device and why it matters in analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Soliloquy",
                statement: "Reveals inner thought; creates intimacy and tension.",
              },
            ],
            steps: [
              {
                reasoning: "It exposes the character's private thoughts.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "It creates intimacy between character and audience.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "It can build tension or dramatic irony.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear analytical explanation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Soliloquy reveals inner conflict, deepens characterisation and controls audience sympathy.",
            commonErrors: ["Treating it as ordinary dialogue."],
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
