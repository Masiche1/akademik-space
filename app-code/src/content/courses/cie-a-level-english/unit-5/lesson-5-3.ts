import type { Lesson } from "../../../types.ts";

export const lesson513: Lesson = {
  id: "cial-e-u5-lesson-5-3",
  code: "5-3",
  title: "Drama essay technique",
  goal: "I CAN write analytical essays on plays using drama-specific techniques.",
  standards: ["9093: drama essay"],
  vocabulary: [
    { term: "Thesis", definition: "Arguable claim guiding the essay." },
    {
      term: "Integrated quotation",
      definition: "Short quote woven into analysis.",
    },
    {
      term: "Stage direction",
      definition: "Instructions for performance in brackets.",
    },
    {
      term: "Characterisation",
      definition: "How playwright creates and develops characters.",
    },
    {
      term: "Dramatic tension",
      definition:
        "Suspense and anticipation created through structure and language.",
    },
    {
      term: "Evaluative judgement",
      definition: "Assessment of the play's effectiveness.",
    },
  ],
  concepts: [
    {
      id: "cial-e-u5-drama-essay",
      title: "Writing drama essays",
      skill:
        "Structure analytical essays on plays with drama-specific techniques.",
      lesson: {
        sections: [
          {
            heading: "Drama essay structure",
            body: "Thesis: arguable claim about the play. Paragraphs: PEE with integrated quotations and stage directions. Conclusion: evaluative judgement. Address performance as well as text.",
          },
          {
            heading: "Using stage directions",
            body: "Stage directions reveal characterisation, mood, relationships. '[He moves away]' shows emotion. '[They embrace]' shows reconciliation. Quote them as evidence.",
          },
          {
            heading: "Addressing performance",
            body: "Consider how the play works in performance: pacing, delivery, staging choices. 'In performance, this moment...' shows awareness of drama as theatre, not just text.",
          },
        ],
        keyFormulas: [
          {
            name: "Drama essay",
            statement:
              "Thesis+PEE+stage directions+performance awareness=effective essay.",
          },
        ],
        workedExample: {
          problem: "Write a thesis for a tragedy about ambition.",
          solution:
            "'The play exposes the destructive power of unchecked ambition through [Character]'s gradual moral collapse.'",
        },
      },
      questions: [
        {
          id: "cial-e-u5-de-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a drama essay thesis do?",
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
          id: "cial-e-u5-de-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why are stage directions important in drama essays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stage directions",
                statement: "Reveal characterisation, mood, relationships.",
              },
            ],
            steps: [
              {
                reasoning: "Show characterisation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reveal relationships/mood.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Evidence of characterisation and relationships.",
            commonErrors: ["Ignoring them entirely."],
          },
        },
        {
          id: "cial-e-u5-de-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does addressing performance enhance a drama essay?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Performance",
                statement:
                  "Shows awareness of drama as theatre, not just text.",
              },
            ],
            steps: [
              {
                reasoning: "Considers staging/delivery.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Shows theatrical awareness.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Adds interpretive depth.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Performance awareness shows theatrical understanding.",
            commonErrors: ["Treating play as prose only."],
          },
        },
        {
          id: "cial-e-u5-de-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Drama essay technique.",
          parts: [
            { label: "a", prompt: "Thesis purpose?", marks: 1 },
            { label: "b", prompt: "Why stage directions?", marks: 2 },
            { label: "c", prompt: "Performance awareness?", marks: 3 },
            {
              label: "d",
              prompt: "Write a thesis for a play about revenge.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Drama essay",
                statement:
                  "Thesis+stage directions+performance+thesis writing.",
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
                reasoning: "Characterisation evidence.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Relationships/mood.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Staging/delivery considered.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Theatrical awareness.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Interpretive depth.",
                marks: 1,
                markCode: "AO3",
              },
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
                reasoning: "Revenge theme addressed.",
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
              "(a) arguable claim (b) evidence (c) performance awareness (d) revenge thesis",
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
                descriptor: "Directions explained.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Performance explained.",
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
            commonErrors: ["Ignoring stage directions."],
          },
        },
      ],
    },
    {
      id: "cial-e-u5-comparative-drama",
      title: "Comparative drama analysis",
      skill: "Construct comparative analyses of two plays.",
      lesson: {
        sections: [
          {
            heading: "Comparative structure",
            body: "Weave comparison throughout — don't write two separate essays. Compare: themes, characterisation, dramatic techniques, genre, context. Reach a judgement on which is more effective.",
          },
          {
            heading: "Points of comparison",
            body: "Shared themes (revenge, ambition, love, power). Different approaches (tragedy vs comedy). Dramatic conventions used differently. Context shaping each play.",
          },
          {
            heading: "Evaluative comparison",
            body: "Don't just describe differences — evaluate which play handles its theme more effectively. 'While Play A..., Play B...' structure. Final judgement on overall achievement.",
          },
        ],
        keyFormulas: [
          {
            name: "Comparative drama",
            statement:
              "Weave comparison+evaluate effectiveness+reach judgement.",
          },
        ],
        workedExample: {
          problem: "Compare two revenge plays.",
          solution:
            "Both explore revenge; one through tragic flaw, other through moral choice. Compare characterisation and dramatic irony.",
        },
      },
      questions: [
        {
          id: "cial-e-u5-cd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main danger in comparative drama essays?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Writing two separate analyses instead of comparing",
              },
              { id: "b", text: "Using too many quotations" },
              { id: "c", text: "Ignoring genre" },
              { id: "d", text: "Missing context" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Comparison",
                statement: "Separate analyses = main pitfall.",
              },
            ],
            steps: [
              {
                reasoning: "Two essays ≠ comparison.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(a)** Two separate analyses",
            commonErrors: ["Thinking description = comparison."],
          },
        },
        {
          id: "cial-e-u5-cd-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should be compared in drama essays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Comparison points",
                statement:
                  "Themes, characterisation, techniques, genre, context.",
              },
            ],
            steps: [
              {
                reasoning: "Multiple comparison points.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Integrated throughout.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Themes+characterisation+techniques+genre+context.",
            commonErrors: ["Only comparing plots."],
          },
        },
        {
          id: "cial-e-u5-cd-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is evaluative judgement important in comparative drama?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluation",
                statement:
                  "Comparison should reach a judgement on effectiveness.",
              },
            ],
            steps: [
              {
                reasoning: "Goes beyond description.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Assesses effectiveness.",
                marks: 1,
                markCode: "AO3",
              },
              { reasoning: "Reaches conclusion.", marks: 1, markCode: "AO3" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Evaluation moves beyond description to judgement.",
            commonErrors: ["Only describing differences."],
          },
        },
        {
          id: "cial-e-u5-cd-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Comparative drama.",
          parts: [
            { label: "a", prompt: "Main danger in comparison?", marks: 1 },
            { label: "b", prompt: "What to compare?", marks: 2 },
            { label: "c", prompt: "Why evaluative judgement?", marks: 3 },
            {
              label: "d",
              prompt: "Compare two plays on a shared theme.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Comparative drama",
                statement: "Danger+points+judgement+comparison.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Separate analyses.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "b",
                reasoning: "Themes/techniques/genre.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Integrated.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Beyond description.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Assesses effectiveness.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Conclusion reached.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Theme identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Both plays addressed.",
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
              "(a) separate analyses (b) themes/techniques (c) evaluation (d) comparative drama",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u5-essay-notes",
      title: "Drama essay technique — revision notes",
      summary:
        "Essay structure, stage directions, performance awareness and comparison.",
      sections: [
        {
          heading: "Essay technique",
          body: "Thesis+PEE+stage directions+performance awareness. Address drama as theatre, not just text.",
        },
        {
          heading: "Comparison",
          body: "Weave comparison throughout — themes, characterisation, techniques, genre. Reach evaluative judgement.",
        },
        {
          heading: "Exam checklist",
          body: "Is there a clear thesis? Are stage directions used? Is performance addressed? Is comparison integrated?",
        },
      ],
    },
  ],
};
