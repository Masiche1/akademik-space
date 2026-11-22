import type { Lesson } from "../../../types.ts";

export const lesson113: Lesson = {
  id: "edpe6-u2-lesson-2-3",
  code: "2-3",
  title: "Comparative and Thematic Reading",
  goal: "I CAN compare texts and analyse themes across different works.",
  standards: ["Year 6 Reading"],
  vocabulary: [
    { term: "Theme", definition: "The central message or idea of a text." },
    {
      term: "Motif",
      definition: "Recurring element with symbolic significance.",
    },
    {
      term: "Comparative analysis",
      definition: "Examining similarities and differences between texts.",
    },
    {
      term: "Intertextuality",
      definition: "How texts reference or relate to each other.",
    },
  ],
  concepts: [
    {
      id: "edpe6-u2-comparison",
      title: "Comparing texts",
      skill: "Compare texts on theme, structure, character and style.",
      lesson: {
        sections: [
          {
            heading: "What to compare",
            body: "Theme (same/different message?), characters (similar/different types?), structure (how organised?), language (style, tone?), purpose (same goal?). Look for both similarities and differences.",
          },
          {
            heading: "Thematic analysis",
            body: "Identify the theme: 'friendship', 'good vs evil', 'growing up'. How is it explored? What does the text suggest about it? Compare how different texts treat the same theme.",
          },
        ],
        keyFormulas: [
          { name: "Theme", statement: "Central message" },
          { name: "Motif", statement: "Recurring symbolic element" },
          { name: "Comparison", statement: "Similarities + differences" },
        ],
        workedExample: {
          problem: "Compare themes of 'The Lion King' and 'Hamlet'.",
          solution:
            "Both explore revenge and family betrayal, but different genres and outcomes.",
        },
      },
      questions: [
        {
          id: "edpe6-u2-cp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a theme in a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The central message/idea" },
              { id: "b", text: "The setting" },
              { id: "c", text: "The title" },
              { id: "d", text: "The genre" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Theme",
                statement: "Central message.",
              },
            ],
            steps: [{ reasoning: "Theme = message.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** The central message/idea",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edpe6-u2-cp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a motif?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A one-off detail" },
              { id: "b", text: "The ending" },
              { id: "c", text: "Recurring element with significance" },
              { id: "d", text: "The plot" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Motif",
                statement: "Recurring symbolic element.",
              },
            ],
            steps: [
              { reasoning: "Motif = recurring.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: recurring element.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Recurring element with significance",
            commonErrors: ["Wrong definition."],
          },
        },
        {
          id: "edpe6-u2-cp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare the theme of 'friendship' in two stories you know.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Thematic comparison",
                statement:
                  "Both explore friendship differently; similarities/differences.",
              },
            ],
            steps: [
              {
                reasoning: "Story 1 theme identified.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Story 2 theme identified.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Comparison made.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. Both explore friendship but one shows loyalty tested, other shows friendship healing",
            commonErrors: ["No comparison or vague."],
          },
        },
        {
          id: "edpe6-u2-cp-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare how two texts explore 'good vs evil': one fairy tale, one modern novel.",
          parts: [
            { label: "a", prompt: "How does each treat the theme?", marks: 1 },
            { label: "b", prompt: "What similarities exist?", marks: 1 },
            { label: "c", prompt: "What differences exist?", marks: 1 },
            {
              label: "d",
              prompt: "What does this reveal about the theme?",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparative analysis",
                statement:
                  "Different treatments; similarities; differences; theme is universal but context-dependent.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Treatments described.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Similarities noted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Differences noted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Insight given.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Fairy tale=clear good/evil; novel=moral ambiguity; similarities; differences; theme universal but context-dependent",
            commonErrors: ["No comparison or weak analysis."],
          },
        },
      ],
    },
    {
      id: "edpe6-u2-critical",
      title: "Critical analysis and synthesis",
      skill:
        "Synthesise information from multiple texts and form critical opinions.",
      lesson: {
        sections: [
          {
            heading: "Synthesis",
            body: "Combine ideas from multiple texts: what do they agree on? Where do they differ? What's the bigger picture? Don't just list — integrate and evaluate.",
          },
          {
            heading: "Critical opinion",
            body: "Form a supported judgement: 'I think X is more effective because...' Support with evidence from texts. Acknowledge counterarguments. Original thinking.",
          },
        ],
        keyFormulas: [
          { name: "Synthesis", statement: "Combine ideas from texts" },
          { name: "Critical opinion", statement: "Supported judgement" },
          { name: "Counterargument", statement: "Acknowledge opposing view" },
        ],
        workedExample: {
          problem:
            "Two texts about homework: one positive, one negative. What's your view?",
          solution:
            "Balanced view: homework can help if purposeful, but excessive homework is counterproductive.",
        },
      },
      questions: [
        {
          id: "edpe6-u2-sa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is synthesis in reading?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Summarising one text" },
              { id: "b", text: "Reading quickly" },
              { id: "c", text: "Copying text" },
              { id: "d", text: "Combining ideas from texts" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Synthesis",
                statement: "Combining ideas.",
              },
            ],
            steps: [
              { reasoning: "Synthesis = combine.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Combining ideas from texts",
            commonErrors: ["Wrong meaning."],
          },
        },
        {
          id: "edpe6-u2-sa-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What's a critical opinion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A fact" },
              { id: "b", text: "A guess" },
              { id: "c", text: "An emotion" },
              { id: "d", text: "A supported judgement" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Critical opinion",
                statement: "Supported judgement.",
              },
            ],
            steps: [
              { reasoning: "Opinion needs support.", marks: 1, markCode: "M" },
              {
                reasoning: "Answer: supported judgement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** A supported judgement",
            commonErrors: ["Unsupported opinion."],
          },
        },
        {
          id: "edpe6-u2-sa-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give a critical opinion on whether school uniforms should be compulsory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Critical opinion",
                statement: "Clear position + reasons + evidence.",
              },
            ],
            steps: [
              { reasoning: "Position stated.", marks: 1, markCode: "A" },
              { reasoning: "Reasons given.", marks: 1, markCode: "A" },
              { reasoning: "Supported.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. 'I believe uniforms should be optional because they restrict self-expression, though they do promote equality.'",
            commonErrors: ["No opinion or no support."],
          },
        },
        {
          id: "edpe6-u2-sa-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Synthesise two texts: Text A says 'social media connects people'; Text B says 'social media isolates people'. Form a critical view.",
          parts: [
            { label: "a", prompt: "What do both texts agree on?", marks: 1 },
            { label: "b", prompt: "Where do they differ?", marks: 1 },
            { label: "c", prompt: "Your critical view", marks: 1 },
            { label: "d", prompt: "Support with evidence", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Synthesis",
                statement: "Agreement; differences; balanced critical view.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Agreement noted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Differences noted.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Critical view formed.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning: "Evidence cited.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Both discuss social media's impact; A=connects, B=isolates; balanced view: depends on usage; evidence from both",
            commonErrors: ["No synthesis or unsupported view."],
          },
        },
      ],
    },
  ],
};
