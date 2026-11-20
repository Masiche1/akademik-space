import type { Lesson } from "../../../types.ts";

export const lesson232: Lesson = {
  id: "cial-e-u3-lesson-3-2",
  code: "3-2",
  title: "Poetry: context, criticism and comparison",
  goal: "I CAN place poems in context and construct comparative critical arguments.",
  standards: ["9093: poetry analysis"],
  vocabulary: [
    {
      term: "Context",
      definition:
        "The historical, social, cultural and biographical circumstances surrounding a poem.",
    },
    {
      term: "Critical perspective",
      definition:
        "A lens for interpretation: feminist, Marxist, psychoanalytic, postcolonial.",
    },
    {
      term: "Comparative analysis",
      definition: "Examining similarities and differences between two poems.",
    },
    {
      term: "Intertextuality",
      definition: "References to other texts or traditions within a poem.",
    },
    {
      term: "Ambiguity",
      definition: "Multiple valid interpretations of a text.",
    },
    {
      term: "Paradox",
      definition: "A statement that seems contradictory but reveals truth.",
    },
  ],
  concepts: [
    {
      id: "cial-e-u3-poetry-context",
      title: "Context and critical perspectives",
      skill: "Use context and critical theory to deepen poetry analysis.",
      lesson: {
        sections: [
          {
            heading: "Historical and social context",
            body: "Poems respond to their times: war, industrialisation, colonialism, gender roles. Context illuminates allusions and explains attitudes. But the poem is the primary evidence — context should illuminate, not replace analysis.",
          },
          {
            heading: "Critical perspectives",
            body: "Feminist criticism examines gender and power. Marxist criticism examines class and economics. Psychoanalytic criticism explores unconscious desires. Postcolonial criticism examines imperialism and identity. Each offers a lens, not a definitive reading.",
          },
          {
            heading: "Ambiguity and paradox",
            body: "Great poetry resists single interpretations. Paradox — 'less is more' — reveals complexity. Ambiguity invites multiple readings; acknowledging this demonstrates sophisticated critical engagement.",
          },
        ],
        keyFormulas: [
          {
            name: "Poetry context",
            statement:
              "Context+critical lens+ambiguity=depth of interpretation.",
          },
        ],
        workedExample: {
          problem:
            "How might a feminist reading differ from a Marxist reading of the same poem?",
          solution:
            "Feminist focuses on gender dynamics and patriarchy; Marxist on class struggle and economic conditions. Same text, different emphasis.",
        },
      },
      questions: [
        {
          id: "cial-e-u3-pc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'context' in poetry analysis?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The historical and social circumstances surrounding the poem",
              },
              { id: "b", text: "The poem's rhyme scheme" },
              { id: "c", text: "The poet's name" },
              { id: "d", text: "The poem's length" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Context",
                statement: "Historical, social, cultural circumstances.",
              },
            ],
            steps: [
              {
                reasoning: "Context = circumstances, not form.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Historical/social circumstances",
            commonErrors: ["Confusing with form or structure."],
          },
        },
        {
          id: "cial-e-u3-pc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'critical perspective' in poetry analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Critical perspective",
                statement:
                  "A lens (feminist, Marxist, etc.) for interpretation.",
              },
            ],
            steps: [
              {
                reasoning: "A critical perspective is a lens/theory.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "It shapes which aspects are emphasised.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "A lens for interpretation — e.g. feminist, Marxist.",
            commonErrors: ["Thinking it's just personal opinion."],
          },
        },
        {
          id: "cial-e-u3-pc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does acknowledging ambiguity strengthen a poetry analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ambiguity",
                statement:
                  "Multiple valid readings demonstrate sophistication.",
              },
            ],
            steps: [
              {
                reasoning: "Shows awareness of complexity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Avoids reductive single reading.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Invites deeper engagement.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Acknowledging ambiguity shows sophistication and avoids oversimplification.",
            commonErrors: ["Forcing a single 'correct' interpretation."],
          },
        },
        {
          id: "cial-e-u3-pc-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Context and criticism.",
          parts: [
            { label: "a", prompt: "Define context in poetry.", marks: 1 },
            { label: "b", prompt: "What is a critical perspective?", marks: 2 },
            { label: "c", prompt: "Why acknowledge ambiguity?", marks: 3 },
            {
              label: "d",
              prompt: "Explain how context illuminates a poem.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Poetry criticism",
                statement: "Context+perspective+ambiguity+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Historical/social circumstances.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "A lens for interpretation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Shapes emphasis.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Shows complexity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Avoids oversimplification.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Deeper engagement.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Context identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Allusion explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Attitude clarified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Link to text clear.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) circumstances (b) lens (c) sophistication (d) context application",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Perspective explained.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Ambiguity explained.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 4",
                marks: "3-4",
                descriptor: "Context applied.",
                part: "d",
              },
              {
                level: "Level 3",
                marks: "2",
                descriptor: "Partial.",
                part: "d",
              },
              { level: "Level 2", marks: "1", descriptor: "Vague.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Context bolted on without textual evidence."],
          },
        },
      ],
    },
    {
      id: "cial-e-u3-comparison",
      title: "Comparative poetry analysis",
      skill: "Construct comparative arguments linking two poems.",
      lesson: {
        sections: [
          {
            heading: "The comparative method",
            body: "Identify shared themes, then compare how each poet treats them. Use connective phrases: 'similarly', 'by contrast', 'whereas'. Avoid writing two separate analyses — weave comparison throughout.",
          },
          {
            heading: "Points of comparison",
            body: "Compare: subject/theme, tone, form, imagery, voice, attitude to subject. For each point, discuss both poems before evaluating which is more effective or how they differ.",
          },
          {
            heading: "Critical judgement",
            body: "The strongest comparative essays reach a judgement: which poem is more powerful and why? Support with textual evidence. Acknowledging both strengths shows balanced critical thinking.",
          },
        ],
        keyFormulas: [
          {
            name: "Comparison",
            statement:
              "Shared theme+point-by-point+judgement=comparative essay.",
          },
        ],
        workedExample: {
          problem: "Compare how two war poems treat loss.",
          solution:
            "Poem A uses graphic imagery; Poem B uses irony. Both convey loss but through different means — evaluate which is more effective.",
        },
      },
      questions: [
        {
          id: "cial-e-u3-cp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main danger in comparative poetry essays?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Writing two separate analyses without linking them",
              },
              { id: "b", text: "Using too much evidence" },
              { id: "c", text: "Comparing too many poems" },
              { id: "d", text: "Including context" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Comparison",
                statement:
                  "Weave comparison throughout, not separate analyses.",
              },
            ],
            steps: [
              {
                reasoning: "Main pitfall = disjointed separate analyses.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Two separate analyses",
            commonErrors: ["Treating comparison as two essays."],
          },
        },
        {
          id: "cial-e-u3-cp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should you compare in a comparative poetry essay?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Comparison points",
                statement: "Theme, tone, form, imagery, voice, attitude.",
              },
            ],
            steps: [
              {
                reasoning: "Any two of theme/tone/form/imagery/voice.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Discuss both poems for each point.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Theme, tone, form, imagery, voice — discussed for both poems.",
            commonErrors: ["Comparing only one aspect."],
          },
        },
        {
          id: "cial-e-u3-cp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is reaching a critical judgement important in comparative essays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Judgement",
                statement:
                  "Evaluating which is more effective demonstrates critical engagement.",
              },
            ],
            steps: [
              {
                reasoning: "Shows evaluation, not just description.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Demonstrates critical thinking.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Supported by evidence.",
                marks: 1,
                markCode: "AO3",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Judgement shows evaluation and critical engagement.",
            commonErrors: ["Avoiding any evaluative conclusion."],
          },
        },
        {
          id: "cial-e-u3-cp-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Comparative poetry.",
          parts: [
            { label: "a", prompt: "Main danger in comparison?", marks: 1 },
            { label: "b", prompt: "What to compare?", marks: 2 },
            { label: "c", prompt: "Why reach a judgement?", marks: 3 },
            {
              label: "d",
              prompt: "Outline a comparative paragraph on two poems.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Comparison",
                statement: "Pitfall+points+judgement+paragraph.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Separate analyses.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Theme/tone/form/imagery/voice.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Discuss both poems.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Evaluation not description.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Critical thinking.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Evidence-supported.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Point identified for both poems.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Comparison woven.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Evidence used.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Link to meaning clear.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) separate analyses (b) theme/tone/form/imagery (c) evaluation (d) comparative paragraph",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 2",
                marks: "1-2",
                descriptor: "Points listed.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Judgement explained.",
                part: "c",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "c",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "c" },
              {
                level: "Level 4",
                marks: "3-4",
                descriptor: "Effective paragraph.",
                part: "d",
              },
              {
                level: "Level 3",
                marks: "2",
                descriptor: "Partial.",
                part: "d",
              },
              { level: "Level 2", marks: "1", descriptor: "Vague.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Two separate analyses."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u3-poetry-criticism-notes",
      title: "Poetry context and comparison — revision notes",
      summary:
        "Context, critical perspectives, ambiguity and comparative analysis.",
      sections: [
        {
          heading: "Context and criticism",
          body: "Context illuminates allusions and attitudes. Critical lenses: feminist, Marxist, psychoanalytic, postcolonial. Acknowledge ambiguity — avoid single readings.",
        },
        {
          heading: "Comparison",
          body: "Weave comparison throughout — don't write two separate analyses. Compare theme, tone, form, imagery, voice. Reach a judgement supported by evidence.",
        },
        {
          heading: "Exam checklist",
          body: "Is context textually grounded? Is comparison integrated? Is there a clear evaluative conclusion?",
        },
      ],
    },
  ],
};
