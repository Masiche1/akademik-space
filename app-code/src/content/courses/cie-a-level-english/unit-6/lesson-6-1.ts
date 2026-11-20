import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "cial-e-u6-lesson-6-1",
  code: "6-1",
  title: "Literature in English: Overview",
  goal: "I CAN describe the structure of Paper 3 Literature in English and genre requirements.",
  standards: ["9093: Literature in English"],
  vocabulary: [
    { term: "Set text", definition: "Prescribed text studied for the exam." },
    {
      term: "Genre study",
      definition: "Focus on one genre: poetry, prose fiction or drama.",
    },
    {
      term: "Comparative essay",
      definition: "Essay comparing two texts or aspects.",
    },
    {
      term: "Context",
      definition: "Historical, social, cultural background of a text.",
    },
    { term: "Unseen passage", definition: "Extract not studied in advance." },
    {
      term: "Critical approaches",
      definition: "Lenses for analysing texts (feminist, Marxist, etc.).",
    },
  ],
  concepts: [
    {
      id: "cial-e-u6-paper3",
      title: "Paper 3 Structure and Genres",
      skill: "Describe Paper 3 requirements and genre study expectations.",
      lesson: {
        sections: [
          {
            heading: "Paper structure",
            body: "Paper 3 Literature in English: candidates study set texts across genres. Section A: comparative essay on two set texts (or one text + unseen). Section B: genre study — detailed analysis of prescribed texts. Questions demand close reading, context and critical evaluation.",
          },
          {
            heading: "Genre requirements",
            body: "Poetry: analyse form, imagery, voice, structure — compare poems from anthology. Prose fiction: narrative voice, characterisation, setting, themes — compare novels/short stories. Drama: stagecraft, dialogue, dramatic irony, themes — compare plays.",
          },
          {
            heading: "Text knowledge",
            body: "Know texts thoroughly — quotations, key scenes, structural features, contexts (author, period, movement). Be ready for unseen passages linked to genre conventions. Practice timed essays on set themes.",
          },
        ],
        keyFormulas: [
          {
            name: "Paper 3",
            statement:
              "Comparative essay+genre study; poetry/prose/drama conventions; context+close reading.",
          },
        ],
        workedExample: {
          problem: "What does a strong Paper 3 essay require?",
          solution:
            "Precise textual evidence (quotations), analysis of methods (form, structure, voice), context where relevant, and comparison where required.",
        },
      },
      questions: [
        {
          id: "cial-e-u6-p3-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which paper assesses Literature in English?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Paper 3" },
              { id: "b", text: "Paper 1" },
              { id: "c", text: "Paper 2" },
              { id: "d", text: "Paper 4" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Paper 3",
                statement: "Literature in English.",
              },
            ],
            steps: [
              { reasoning: "Paper 3 = literature.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Paper 3",
            commonErrors: ["Confusing papers."],
          },
        },
        {
          id: "cial-e-u6-p3-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the three genres studied in Paper 3.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Genres",
                statement: "Poetry, prose fiction, drama.",
              },
            ],
            steps: [
              { reasoning: "Any two genres.", marks: 1, markCode: "AO1" },
              { reasoning: "All three named.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Poetry, prose fiction, drama.",
            commonErrors: ["Missing one."],
          },
        },
        {
          id: "cial-e-u6-p3-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What does a comparative essay in Paper 3 require?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparative essay",
                statement: "Both texts analysed+compared.",
              },
            ],
            steps: [
              { reasoning: "Analyse both texts.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Make explicit comparisons.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Weave comparison throughout.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear description.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Both texts must be analysed and compared throughout — not treated separately then compared briefly at the end.",
            commonErrors: ["Two separate essays."],
          },
        },
        {
          id: "cial-e-u6-p3-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Paper 3 overview.",
          parts: [
            { label: "a", prompt: "Paper 3 structure?", marks: 3 },
            { label: "b", prompt: "Genres?", marks: 2 },
            { label: "c", prompt: "Genre conventions?", marks: 2 },
            { label: "d", prompt: "Text knowledge?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Paper 3",
                statement: "Structure+genres+conventions+knowledge.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Comparative+genre study.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Set texts required.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Unseen passages possible.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Poetry/prose/drama.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "All three.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Form/structure/voice.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Genre-specific.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Quotations/scenes/contexts.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Thorough preparation.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) structure (b) genres (c) conventions (d) knowledge",
          },
        },
      ],
    },
    {
      id: "cial-e-u6-critical",
      title: "Critical Approaches",
      skill:
        "Describe feminist, Marxist, postcolonial and other critical lenses.",
      lesson: {
        sections: [
          {
            heading: "Key approaches",
            body: "Feminist: gender roles, patriarchy, female representation. Marxist: class, power, economic structures. Postcolonial: colonialism's legacy, representation of colonised peoples. Structuralist: underlying structures/patterns. Poststructuralist: language, deconstruction, multiple meanings. Psychoanalytic: unconscious desires, Freudian analysis.",
          },
          {
            heading: "Applying approaches",
            body: "Each lens highlights different aspects — feminist reveals gender dynamics, Marxist class conflict, postcolonial power relations. Strong essays use approaches to deepen analysis, not replace close reading. Always ground interpretation in textual evidence.",
          },
          {
            heading: "Context and interpretation",
            body: "Historical context shapes meaning — Victorian attitudes vs modern readings. Author's biography and intentions debated (intentional fallacy). Multiple valid interpretations possible — support yours with evidence. Intertextuality: texts reference other texts.",
          },
        ],
        keyFormulas: [
          {
            name: "Critical approaches",
            statement:
              "Feminist=gender; Marxist=class; postcolonial=colonialism; psychoanalytic=unconscious.",
          },
        ],
        workedExample: {
          problem:
            "How would a feminist reading differ from a Marxist reading?",
          solution:
            "Feminist focuses on gender/patriarchy; Marxist on class/economic power — same text, different lens reveals different themes.",
        },
      },
      questions: [
        {
          id: "cial-e-u6-ca-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a Marxist reading focus on?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Class and economic power" },
              { id: "b", text: "Gender roles" },
              { id: "c", text: "Colonialism" },
              { id: "d", text: "Unconscious desires" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Marxist",
                statement: "Class/economic focus.",
              },
            ],
            steps: [{ reasoning: "Class focus.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(a)** Class and economic power",
            commonErrors: ["Confusing approaches."],
          },
        },
        {
          id: "cial-e-u6-ca-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two critical approaches to literature.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Critical approaches",
                statement: "Feminist, Marxist, postcolonial etc.",
              },
            ],
            steps: [
              { reasoning: "Any two approaches.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Feminist, Marxist, postcolonial, structuralist, poststructuralist, psychoanalytic.",
            commonErrors: ["Only one approach."],
          },
        },
        {
          id: "cial-e-u6-ca-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How should critical approaches be used in essays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Using approaches",
                statement: "Deepen analysis, not replace close reading.",
              },
            ],
            steps: [
              {
                reasoning: "Ground in textual evidence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Reveal different aspects.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Don't replace close reading.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Use approaches to deepen analysis — always support interpretation with textual evidence, don't let theory replace close reading.",
            commonErrors: ["Theory without evidence."],
          },
        },
        {
          id: "cial-e-u6-ca-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Critical approaches.",
          parts: [
            { label: "a", prompt: "Feminist?", marks: 2 },
            { label: "b", prompt: "Marxist?", marks: 2 },
            { label: "c", prompt: "Postcolonial?", marks: 2 },
            { label: "d", prompt: "Application?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Approaches",
                statement: "Feminist+Marxist+postcolonial+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Gender/patriarchy focus.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Female representation.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Class/economic focus.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Power structures.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Colonialism legacy.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Representation of colonised.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Evidence-based.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Deepens analysis.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Not replacing close reading.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) feminist (b) Marxist (c) postcolonial (d) application",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u6-6-1-notes",
      title: "Literature overview and approaches — notes",
      summary: "Paper 3 structure, genres, critical approaches, context.",
      sections: [
        {
          heading: "Paper 3",
          body: "Comparative essay+genre study; poetry/prose/drama; set texts+unseen.",
        },
        {
          heading: "Approaches",
          body: "Feminist/Marxist/postcolonial/psychoanalytic; ground in evidence; context matters.",
        },
      ],
    },
  ],
};
