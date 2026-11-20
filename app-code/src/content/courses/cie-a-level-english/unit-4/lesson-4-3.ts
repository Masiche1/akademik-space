import type { Lesson } from "../../../types.ts";

export const lesson243: Lesson = {
  id: "cial-e-u4-lesson-4-3",
  code: "4-3",
  title: "Prose essay technique and context",
  goal: "I CAN construct analytical essays on prose and use context effectively.",
  standards: ["9093: prose essay technique"],
  vocabulary: [
    {
      term: "Context",
      definition:
        "Historical, social, cultural circumstances shaping the text.",
    },
    {
      term: "Authorial intent",
      definition: "What the author aims to achieve or communicate.",
    },
    {
      term: "Close reading",
      definition: "Detailed analysis of specific passages.",
    },
    {
      term: "Evaluative judgement",
      definition: "Assessment of the text's effectiveness or achievement.",
    },
    {
      term: "Comparative prose",
      definition: "Analysis linking two prose texts.",
    },
    {
      term: "Intertextuality",
      definition: "References to other texts or traditions.",
    },
  ],
  concepts: [
    {
      id: "cial-e-u4-prose-essay",
      title: "Prose essay technique",
      skill: "Structure analytical prose essays with evidence and evaluation.",
      lesson: {
        sections: [
          {
            heading: "Essay structure",
            body: "Thesis: arguable claim about the prose. Paragraphs: PEE (Point, Evidence, Explanation) with integrated quotations. Conclusion: evaluative judgement. Weave analysis throughout — don't separate description from evaluation.",
          },
          {
            heading: "Using context",
            body: "Context illuminates: historical events, social attitudes, cultural references. But the text is primary evidence — context should explain, not replace analysis. 'In the context of...' introduces relevant background.",
          },
          {
            heading: "Close reading passages",
            body: "Select key passages for detailed analysis: a turning point, a revealing dialogue, a symbolic moment. Zoom in on word choice, imagery, structure. Short, integrated quotes are more effective than long extracts.",
          },
        ],
        keyFormulas: [
          {
            name: "Prose essay",
            statement:
              "Thesis+PEE+context+close reading+evaluation=effective essay.",
          },
        ],
        workedExample: {
          problem: "Write a thesis for a novel about class.",
          solution:
            "'The novel exposes the brutal economics of class through the protagonist's gradual disillusionment — money corrupts relationships and self-worth.'",
        },
      },
      questions: [
        {
          id: "cial-e-u4-pe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a prose essay thesis do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Make an arguable claim guiding the essay" },
              { id: "b", text: "Summarise the plot" },
              { id: "c", text: "List characters" },
              { id: "d", text: "Describe the setting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Thesis",
                statement: "Arguable claim guiding essay.",
              },
            ],
            steps: [
              {
                reasoning: "Thesis = arguable interpretation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Arguable claim",
            commonErrors: ["Confusing with plot summary."],
          },
        },
        {
          id: "cial-e-u4-pe-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How should context be used in a prose essay?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Context",
                statement: "Illuminates but doesn't replace textual analysis.",
              },
            ],
            steps: [
              {
                reasoning: "Explains historical/social background.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Text remains primary evidence.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Context illuminates; text is primary evidence.",
            commonErrors: ["Context bolted on without analysis."],
          },
        },
        {
          id: "cial-e-u4-pe-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why are short integrated quotations more effective than long extracts?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Quotation",
                statement: "Integrated quotes show control and force analysis.",
              },
            ],
            steps: [
              {
                reasoning: "Shows control of language.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Avoids disjointed reading.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Forces word-level analysis.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Integrated quotes show control and force analysis.",
            commonErrors: ["Long block quotes without analysis."],
          },
        },
        {
          id: "cial-e-u4-pe-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Prose essay technique.",
          parts: [
            { label: "a", prompt: "Thesis purpose?", marks: 1 },
            { label: "b", prompt: "How to use context?", marks: 2 },
            { label: "c", prompt: "Why integrated quotations?", marks: 3 },
            {
              label: "d",
              prompt: "Write a thesis for a novel about war.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Essay",
                statement: "Thesis+context+quotation+thesis writing.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Arguable claim.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Illuminates background.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Text primary.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Shows control.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Forces analysis.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              {
                part: "d",
                reasoning: "Thesis attempted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Arguable claim.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "War theme addressed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Effective thesis.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) arguable claim (b) illuminates (c) control+analysis (d) war thesis",
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
                descriptor: "Context explained.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Quotation explained.",
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
                descriptor: "Strong thesis.",
                part: "d",
              },
              {
                level: "Level 3",
                marks: "2",
                descriptor: "Attempted.",
                part: "d",
              },
              { level: "Level 2", marks: "1", descriptor: "Vague.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Summary instead of argument."],
          },
        },
      ],
    },
    {
      id: "cial-e-u4-prose-context",
      title: "Context and comparative prose",
      skill: "Use context and construct comparative analyses of prose texts.",
      lesson: {
        sections: [
          {
            heading: "Contextual analysis",
            body: "Historical context: wars, movements, events shaping attitudes. Social context: class, gender, race, power. Cultural context: traditions, values, references. Biographical: author's life experiences.",
          },
          {
            heading: "Comparative prose",
            body: "Weave comparison throughout — don't write two separate essays. Compare: themes, characterisation, narrative voice, structure, context. Reach a judgement on which is more effective.",
          },
          {
            heading: "Critical perspectives",
            body: "Feminist, Marxist, postcolonial readings offer lenses. Apply consistently but acknowledge the text's primary evidence. Different perspectives reveal different aspects.",
          },
        ],
        keyFormulas: [
          {
            name: "Prose context",
            statement: "Context+comparison+perspective=depth of analysis.",
          },
        ],
        workedExample: {
          problem: "Compare two novels about colonialism.",
          solution:
            "Both explore power dynamics; one through indigenous voice, other through coloniser's guilt. Compare narrative perspective and historical context.",
        },
      },
      questions: [
        {
          id: "cial-e-u4-pc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'context' in prose analysis?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Historical, social and cultural circumstances",
              },
              { id: "b", text: "The plot" },
              { id: "c", text: "The characters" },
              { id: "d", text: "The genre" },
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
                reasoning: "Context = circumstances.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Historical/social/cultural circumstances",
            commonErrors: ["Confusing with plot."],
          },
        },
        {
          id: "cial-e-u4-pc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the main danger in comparative prose essays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Comparison",
                statement: "Weave throughout; don't write two separate essays.",
              },
            ],
            steps: [
              {
                reasoning: "Separate analyses = main pitfall.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Comparison should be integrated.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Writing two separate analyses instead of comparing.",
            commonErrors: ["Treating comparison as two essays."],
          },
        },
        {
          id: "cial-e-u4-pc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do critical perspectives enhance prose analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Critical perspectives",
                statement: "Lenses reveal different aspects of text.",
              },
            ],
            steps: [
              {
                reasoning: "Feminist/Marxist etc. offer lenses.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reveal different aspects.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Text remains primary evidence.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Perspectives offer lenses revealing different aspects.",
            commonErrors: ["Applying theory without textual evidence."],
          },
        },
        {
          id: "cial-e-u4-pc-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Context and comparison.",
          parts: [
            { label: "a", prompt: "Define context.", marks: 1 },
            { label: "b", prompt: "Main danger in comparison?", marks: 2 },
            {
              label: "c",
              prompt: "How do perspectives enhance analysis?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Compare two prose texts on a theme.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Context/comparison",
                statement: "Context+comparison+perspective+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Historical/social/cultural.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Separate analyses.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Should be integrated.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Lenses reveal aspects.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Text primary.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              {
                part: "d",
                reasoning: "Theme identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Both texts addressed.",
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
                reasoning: "Judgement reached.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) circumstances (b) separate analyses (c) lenses (d) comparative prose",
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
                descriptor: "Danger identified.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Perspectives explained.",
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
                descriptor: "Effective comparison.",
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
      id: "cial-e-u4-prose-context-notes",
      title: "Prose context and comparison — revision notes",
      summary:
        "Contextual analysis, comparative prose and critical perspectives.",
      sections: [
        {
          heading: "Context",
          body: "Historical, social, cultural, biographical. Illuminates but text is primary evidence. Use 'in the context of...' carefully.",
        },
        {
          heading: "Comparison",
          body: "Weave throughout — compare theme, characterisation, voice, structure, context. Reach evaluative judgement.",
        },
        {
          heading: "Exam checklist",
          body: "Is context textually grounded? Is comparison integrated? Is there a clear judgement?",
        },
      ],
    },
  ],
};
