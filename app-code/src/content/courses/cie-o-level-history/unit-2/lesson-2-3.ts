import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "oleh-u2-lesson-2-3",
  code: "2-3",
  title: "Historical Skills and Source Analysis",
  goal: "I CAN apply historical skills including source evaluation and interpretation.",
  standards: ["2130: Historical skills"],
  vocabulary: [
    {
      term: "Primary source",
      definition: "Source created at the time of events.",
    },
    {
      term: "Secondary source",
      definition: "Source created later analysing events.",
    },
    {
      term: "Bias",
      definition: "Prejudice or partiality affecting reliability.",
    },
    {
      term: "Provenance",
      definition: "Origin of source — who created it, when, why.",
    },
    {
      term: "Corroboration",
      definition: "Cross-checking sources to verify facts.",
    },
    {
      term: "Interpretation",
      definition: "Explanation of historical events using evidence.",
    },
  ],
  concepts: [
    {
      id: "oleh-u2-source-analysis",
      title: "Source analysis",
      skill: "Evaluate primary and secondary sources for reliability and bias.",
      lesson: {
        sections: [
          {
            heading: "Primary sources",
            body: "Created at the time: letters, diaries, photographs, speeches, government documents. Advantage: direct evidence. Disadvantage: may be biased, incomplete, or propaganda.",
          },
          {
            heading: "Secondary sources",
            body: "Created later: textbooks, documentaries, academic articles. Advantage: analysed, contextualised. Disadvantage: may contain errors, interpretations, hindsight bias.",
          },
          {
            heading: "Evaluating sources",
            body: "Provenance: who/when/why created. Purpose: what was it meant to achieve? Bias: what perspective? Corroboration: do other sources agree? Content: what does it actually say?",
          },
        ],
        keyFormulas: [
          {
            name: "Source analysis",
            statement: "Provenance+purpose+bias+corroboration=evaluation.",
          },
        ],
        workedExample: {
          problem: "A government leaflet praising its own policies — reliable?",
          solution:
            "Primary source but biased — created to promote government, not objective record.",
        },
      },
      questions: [
        {
          id: "oleh-u2-sa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a primary source?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Source created at the time of events" },
              { id: "b", text: "Textbook written later" },
              { id: "c", text: "Documentary film" },
              { id: "d", text: "Academic article" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary source",
                statement: "Created at the time.",
              },
            ],
            steps: [
              {
                reasoning: "Primary = contemporary.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Created at the time",
            commonErrors: ["Confusing with secondary."],
          },
        },
        {
          id: "oleh-u2-sa-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is bias in historical sources?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bias",
                statement: "Prejudice/partiality affecting reliability.",
              },
            ],
            steps: [
              { reasoning: "Partiality/prejudice.", marks: 1, markCode: "AO1" },
              { reasoning: "Affects reliability.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Prejudice/partiality affecting reliability.",
            commonErrors: ["Saying it's always wrong."],
          },
        },
        {
          id: "oleh-u2-sa-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do you evaluate a historical source?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evaluation",
                statement: "Provenance+purpose+bias+corroboration.",
              },
            ],
            steps: [
              {
                reasoning: "Provenance: who/when/why.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Purpose and bias.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Corroboration with other sources.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear method.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Provenance+purpose+bias+corroboration.",
            commonErrors: ["Only content analysis."],
          },
        },
        {
          id: "oleh-u2-sa-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Source analysis.",
          parts: [
            { label: "a", prompt: "Primary vs secondary?", marks: 2 },
            { label: "b", prompt: "Define bias.", marks: 1 },
            { label: "c", prompt: "What is provenance?", marks: 2 },
            { label: "d", prompt: "What is corroboration?", marks: 2 },
            {
              label: "e",
              prompt: "Evaluate a government propaganda leaflet.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Source analysis",
                statement: "Types+definitions+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Primary=contemporary; secondary=later.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Correct distinction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Partiality.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Origin of source.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Who/when/why.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Cross-checking.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Verifies facts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Biased/purposeful.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Limited reliability.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) types (b) bias (c) provenance (d) corroboration (e) evaluation",
          },
        },
      ],
    },
    {
      id: "oleh-u2-historical-skills",
      title: "Historical interpretation and essay skills",
      skill:
        "Construct historical arguments using evidence and interpretation.",
      lesson: {
        sections: [
          {
            heading: "Historical interpretation",
            body: "Historians interpret evidence to explain events. Different interpretations possible — e.g. was the Cold War inevitable? Use evidence to support arguments, acknowledge alternative views.",
          },
          {
            heading: "Essay structure",
            body: "Introduction: thesis statement + outline. Body: paragraphs each with point, evidence, explanation. Conclusion: summarise argument, answer question. Use specific examples and dates.",
          },
          {
            heading: "Weighing evidence",
            body: "Not all sources equal — consider reliability, bias, corroboration. Balance different viewpoints. Acknowledge limitations of evidence. Strong arguments consider multiple perspectives.",
          },
        ],
        keyFormulas: [
          {
            name: "Historical skills",
            statement: "Thesis+evidence+interpretation+evaluation=argument.",
          },
        ],
        workedExample: {
          problem: "How to answer 'Was the Cold War inevitable?'",
          solution:
            "Thesis: partly — structural factors made conflict likely but specific decisions determined timing/intensity.",
        },
      },
      questions: [
        {
          id: "oleh-u2-hs-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is historical interpretation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Explanation of events using evidence" },
              { id: "b", text: "Memorising dates" },
              { id: "c", text: "Listing facts" },
              { id: "d", text: "Copying sources" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interpretation",
                statement: "Explaining events with evidence.",
              },
            ],
            steps: [
              {
                reasoning: "Interpretation = explanation.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Explaining events with evidence",
            commonErrors: ["Confusing with chronology."],
          },
        },
        {
          id: "oleh-u2-hs-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should a history essay introduction contain?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Essay intro",
                statement: "Thesis+outline.",
              },
            ],
            steps: [
              { reasoning: "Thesis statement.", marks: 1, markCode: "AO1" },
              { reasoning: "Outline of argument.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Thesis statement + outline.",
            commonErrors: ["Starting with details."],
          },
        },
        {
          id: "oleh-u2-hs-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is weighing evidence important in history?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Weighing evidence",
                statement: "Not all sources equal.",
              },
            ],
            steps: [
              {
                reasoning: "Sources vary in reliability.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Bias affects interpretation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Strong arguments balance views.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Sources vary; strong arguments balance evidence.",
            commonErrors: ["Treating all sources equally."],
          },
        },
        {
          id: "oleh-u2-hs-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Historical skills.",
          parts: [
            { label: "a", prompt: "Define interpretation.", marks: 1 },
            { label: "b", prompt: "Essay introduction?", marks: 2 },
            { label: "c", prompt: "Why weigh evidence?", marks: 3 },
            {
              label: "d",
              prompt: "How to structure a history essay?",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Skills",
                statement: "Interpretation+structure+weighing.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Explaining events.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Thesis+outline.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Clear.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Sources vary.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Bias matters.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Balance views.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Intro-body-conclusion.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Point+evidence+explanation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Clear structure.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) interpretation (b) intro (c) weighing (d) structure",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleh-u2-2-3-notes",
      title: "Historical skills — notes",
      summary:
        "Source analysis, provenance, corroboration, interpretation, essay skills.",
      sections: [
        {
          heading: "Sources",
          body: "Primary=contemporary; secondary=later. Evaluate: provenance, purpose, bias, corroboration.",
        },
        {
          heading: "Essays",
          body: "Thesis+evidence+interpretation+evaluation. Weigh evidence, balance viewpoints.",
        },
      ],
    },
  ],
};
