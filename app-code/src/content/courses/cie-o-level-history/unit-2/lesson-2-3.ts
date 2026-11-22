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
              { id: "b", text: "Academic article" },
              { id: "c", text: "Documentary film" },
              { id: "d", text: "Textbook written later" },
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
        {
          id: "oleh-u2-sa-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a primary source?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An encyclopedia article" },
              { id: "b", text: "A modern history textbook" },
              { id: "c", text: "A soldier's diary written during WWI" },
              { id: "d", text: "A documentary film made in 2020" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary source",
                statement: "Created at the time of events.",
              },
            ],
            steps: [
              {
                reasoning: "Diary written during events = primary.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** A soldier's diary written during WWI",
            commonErrors: ["Choosing later sources."],
          },
        },
        {
          id: "oleh-u2-sa-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is provenance in source analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The language of the source" },
              { id: "b", text: "The origin of the source — who created it, when, why" },
              { id: "c", text: "The spelling of the source" },
              { id: "d", text: "The length of the source" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Provenance",
                statement: "Who created it, when, why.",
              },
            ],
            steps: [
              {
                reasoning: "Provenance = origin details.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** The origin of the source — who created it, when, why",
            commonErrors: ["Confusing with content."],
          },
        },
        {
          id: "oleh-u2-sa-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many main factors should guide the evaluation of a historical source? (provenance, purpose, bias, corroboration)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Evaluation",
                statement: "Provenance+purpose+bias+corroboration.",
              },
            ],
            steps: [
              {
                reasoning: "Four factors guide evaluation.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "oleh-u2-sa-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is corroboration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Corroboration",
                statement: "Cross-checking sources to verify facts.",
              },
            ],
            steps: [
              {
                reasoning: "Cross-checking with other sources.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Verifies whether claims are accurate.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Cross-checking a source against other sources to verify facts.",
            commonErrors: ["Saying it means agreeing with the source."],
          },
        },
        {
          id: "oleh-u2-sa-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main advantage of secondary sources?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They cannot contain errors" },
              { id: "b", text: "They are always primary evidence" },
              { id: "c", text: "They are always unbiased" },
              { id: "d", text: "They are analysed and contextualised" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secondary sources",
                statement: "Analysed and contextualised but may err.",
              },
            ],
            steps: [
              {
                reasoning: "Secondary sources are analysed/contextualised.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** They are analysed and contextualised",
            commonErrors: ["Assuming they are always reliable."],
          },
        },
        {
          id: "oleh-u2-sa-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why might a primary source be unreliable?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Primary reliability",
                statement: "Bias/propaganda/incomplete record.",
              },
            ],
            steps: [
              {
                reasoning: "May be biased or propaganda.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "May be incomplete or one-sided.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Primary sources can be biased, propaganda, or incomplete — created for a purpose, not objective record.",
            commonErrors: ["Assuming primary = reliable."],
          },
        },
        {
          id: "oleh-u2-sa-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many of these are primary sources: a diary, a textbook, a photograph taken at the time, a government speech?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Primary sources",
                statement: "Diary, photo, speech are primary; textbook is secondary.",
              },
            ],
            steps: [
              {
                reasoning: "Three of four are contemporary.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "oleh-u2-sa-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which question best helps evaluate a source's purpose?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What was the source meant to achieve?" },
              { id: "b", text: "What font is it written in?" },
              { id: "c", text: "How many pages does it have?" },
              { id: "d", text: "Where was it sold?" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Purpose",
                statement: "What the source was meant to achieve.",
              },
            ],
            steps: [
              {
                reasoning: "Purpose = intended aim.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** What was the source meant to achieve?",
            commonErrors: ["Focusing on superficial features."],
          },
        },
        {
          id: "oleh-u2-sa-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A source showing prejudice or partiality is said to have what?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Provenance" },
              { id: "b", text: "Corroboration" },
              { id: "c", text: "Interpretation" },
              { id: "d", text: "Bias" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bias",
                statement: "Prejudice/partiality.",
              },
            ],
            steps: [
              {
                reasoning: "Bias = partiality.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Bias",
            commonErrors: ["Confusing terms."],
          },
        },
        {
          id: "oleh-u2-sa-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate a historical source.",
          parts: [
            { label: "a", prompt: "What is provenance?", marks: 1 },
            { label: "b", prompt: "What is purpose?", marks: 1 },
            { label: "c", prompt: "How does bias affect reliability?", marks: 2 },
            { label: "d", prompt: "What is corroboration?", marks: 2 },
          ],
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
                part: "a",
                reasoning: "Origin: who/when/why.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "What it was meant to achieve.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Bias = partiality.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Reduces reliability.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Cross-checking sources.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Verifies facts.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) provenance (b) purpose (c) bias (d) corroboration",
          },
        },
        {
          id: "oleh-u2-sa-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the minimum number of independent sources needed to corroborate a claim?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Corroboration",
                statement: "Need at least two sources to cross-check.",
              },
            ],
            steps: [
              {
                reasoning: "Corroboration requires comparing sources.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "oleh-u2-sa-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Evaluate the reliability of a government propaganda leaflet praising its own policies.",
          parts: [
            { label: "a", prompt: "What type of source is it?", marks: 1 },
            { label: "b", prompt: "What is its likely purpose?", marks: 1 },
            { label: "c", prompt: "How does bias affect it?", marks: 2 },
            { label: "d", prompt: "How could you test its reliability?", marks: 2 },
            { label: "e", prompt: "Overall verdict?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Source evaluation",
                statement: "Type+purpose+bias+corroboration+verdict.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Primary source (created at the time).",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "To promote government/policies.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Clearly biased/one-sided.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Cannot be trusted as objective record.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Corroborate with other sources.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Check against independent evidence.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Limited reliability — useful for government perspective only.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) primary (b) propaganda (c) biased (d) corroborate (e) limited reliability",
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
              { id: "a", text: "Listing facts" },
              { id: "b", text: "Copying sources" },
              { id: "c", text: "Memorising dates" },
              { id: "d", text: "Explanation of events using evidence" },
            ],
            correctChoiceId: "d",
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
        {
          id: "oleh-u2-hs-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a thesis statement in a history essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A quote from a textbook" },
              { id: "b", text: "A summary of all sources" },
              { id: "c", text: "The central argument or answer to the question" },
              { id: "d", text: "A list of dates" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Thesis",
                statement: "Central argument answering the question.",
              },
            ],
            steps: [
              {
                reasoning: "Thesis = main argument.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** The central argument or answer to the question",
            commonErrors: ["Confusing with evidence."],
          },
        },
        {
          id: "oleh-u2-hs-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What should each body paragraph of a history essay contain?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A point, supporting evidence and explanation" },
              { id: "b", text: "Only dates" },
              { id: "c", text: "Only a quotation" },
              { id: "d", text: "A summary of the question" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Paragraph structure",
                statement: "Point+evidence+explanation.",
              },
            ],
            steps: [
              {
                reasoning: "Each paragraph makes and supports a point.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** A point, supporting evidence and explanation",
            commonErrors: ["Listing facts without explanation."],
          },
        },
        {
          id: "oleh-u2-hs-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many main parts does a well-structured history essay have? (introduction, body, conclusion)",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Essay structure",
                statement: "Introduction, body, conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "Three main parts.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "oleh-u2-hs-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is hindsight bias?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hindsight bias",
                statement: "Judging past decisions with later knowledge.",
              },
            ],
            steps: [
              {
                reasoning: "Using later knowledge to judge the past.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Ignores what people knew at the time.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Judging past decisions using knowledge of what happened later, ignoring what was known at the time.",
            commonErrors: ["Confusing with general bias."],
          },
        },
        {
          id: "oleh-u2-hs-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should historians acknowledge alternative interpretations?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It avoids using evidence" },
              { id: "b", text: "It is required by law" },
              { id: "c", text: "It weakens the argument" },
              { id: "d", text: "It shows a balanced, weighed judgement" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Balance",
                statement: "Weighed judgement considers alternatives.",
              },
            ],
            steps: [
              {
                reasoning: "Balance strengthens arguments.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** It shows a balanced, weighed judgement",
            commonErrors: ["Thinking it weakens the answer."],
          },
        },
        {
          id: "oleh-u2-hs-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "How do historians use evidence to build arguments?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Using evidence",
                statement: "Select+weigh+interpret evidence.",
              },
            ],
            steps: [
              {
                reasoning: "Select relevant sources.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Weigh reliability and bias.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Historians select relevant sources, weigh their reliability and bias, then interpret them to support arguments.",
            commonErrors: ["Using all sources equally."],
          },
        },
        {
          id: "oleh-u2-hs-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the minimum number of different viewpoints a strong historical argument should consider?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Weighing",
                statement: "Strong arguments balance multiple perspectives.",
              },
            ],
            steps: [
              {
                reasoning: "Consider at least two perspectives.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "oleh-u2-hs-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "What should a history essay conclusion do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "List all the sources" },
              { id: "b", text: "Summarise the argument and answer the question" },
              { id: "c", text: "Introduce new evidence" },
              { id: "d", text: "Repeat the introduction word for word" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Conclusion",
                statement: "Summarise argument, answer question.",
              },
            ],
            steps: [
              {
                reasoning: "Conclusion wraps up the argument.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Summarise the argument and answer the question",
            commonErrors: ["Adding new points at the end."],
          },
        },
        {
          id: "oleh-u2-hs-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "When is evidence described as 'corroborated'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When it is written in ink" },
              { id: "b", text: "When it is very long" },
              { id: "c", text: "When it is in English" },
              { id: "d", text: "When multiple sources agree with it" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Corroborated",
                statement: "Confirmed by other sources.",
              },
            ],
            steps: [
              {
                reasoning: "Corroboration = agreement between sources.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** When multiple sources agree with it",
            commonErrors: ["Confusing with a single source."],
          },
        },
        {
          id: "oleh-u2-hs-q14",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Historical essay skills.",
          parts: [
            { label: "a", prompt: "What is a thesis statement?", marks: 1 },
            { label: "b", prompt: "Essay structure?", marks: 2 },
            { label: "c", prompt: "How use evidence?", marks: 2 },
            { label: "d", prompt: "Conclusion?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Essay skills",
                statement: "Thesis+structure+evidence+conclusion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Central argument.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Intro-body-conclusion.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Point+evidence+explanation per paragraph.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Select relevant sources.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Weigh reliability/bias.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Summarise argument, answer question.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "(a) thesis (b) structure (c) evidence (d) conclusion",
          },
        },
        {
          id: "oleh-u2-hs-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year was the Universal Declaration of Human Rights adopted?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1948 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "UDHR",
                statement: "Adopted 1948.",
              },
            ],
            steps: [
              { reasoning: "UDHR adopted 1948.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1948",
          },
        },
        {
          id: "oleh-u2-hs-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "How would you answer the essay question 'Was the Cold War inevitable?'",
          parts: [
            { label: "a", prompt: "Thesis statement?", marks: 2 },
            { label: "b", prompt: "Evidence for inevitability?", marks: 2 },
            { label: "c", prompt: "Evidence against inevitability?", marks: 2 },
            { label: "d", prompt: "Conclusion?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Weighed judgement",
                statement: "Thesis+both sides+conclusion.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "E.g. partly — structural factors made conflict likely.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Clear, arguable thesis.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Ideological opposition, power rivalry, spheres of influence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Specific examples/dates.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Specific decisions/events determined timing.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Counter-evidence considered.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Summarise argument.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Answer the question directly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Balanced judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) thesis (b) inevitability evidence (c) counter-evidence (d) conclusion",
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
