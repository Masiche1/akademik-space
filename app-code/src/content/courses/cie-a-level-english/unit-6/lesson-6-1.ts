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
              { id: "a", text: "Paper 2" },
              { id: "b", text: "Paper 4" },
              { id: "c", text: "Paper 1" },
              { id: "d", text: "Paper 3" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cial-e-u6-p3-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does Section A of Paper 3 typically require?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A summary of the syllabus" },
              { id: "b", text: "A letter-writing task" },
              { id: "c", text: "A grammar exercise" },
              { id: "d", text: "A comparative essay on set texts" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Paper 3 Section A",
                statement: "Comparative essay on set texts or text plus unseen.",
              },
            ],
            steps: [
              {
                reasoning: "Section A is the comparative essay.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Comparative essay on set texts",
            commonErrors: ["Confusing with genre study section."],
          },
        },
        {
          id: "cial-e-u6-p3-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which features should be analysed when writing about poetry in Paper 3?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Form, imagery, voice and structure",
              },
              { id: "b", text: "Only the publication date" },
              { id: "c", text: "Only the rhyme scheme" },
              { id: "d", text: "Only the poet's biography" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Poetry analysis",
                statement: "Analyse form, imagery, voice, structure, sound.",
              },
            ],
            steps: [
              {
                reasoning: "Poetry demands close analysis of formal features.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Form, imagery, voice and structure",
            commonErrors: ["Describing subject matter only."],
          },
        },
        {
          id: "cial-e-u6-p3-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does an unseen passage in Paper 3 primarily test?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Ability to apply genre conventions and close reading to new material"
              },
              { id: "b", text: "Memorised knowledge of set texts" },
              { id: "c", text: "Speed of handwriting" },
              { id: "d", text: "Knowledge of grammar rules" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Unseen passage",
                statement: "Tests transferable close-reading and genre skills.",
              },
            ],
            steps: [
              {
                reasoning: "Unseen material rewards analytical method over recall.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** Apply genre conventions and close reading",
            commonErrors: ["Assuming unseen means unprepared."],
          },
        },
        {
          id: "cial-e-u6-p3-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which combination is essential for a strong Paper 3 essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Plot summary of every set text" },
              {
                id: "b",
                text: "Precise textual evidence, analysis of methods, context and comparison where required"
              },
              { id: "c", text: "Long quotations with no analysis" },
              { id: "d", text: "General comments about literature" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Strong essay",
                statement:
                  "Evidence + method analysis + context + comparison.",
              },
            ],
            steps: [
              {
                reasoning: "Examiners reward close, evidenced analysis.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Context and comparison are often required.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** Evidence + methods + context + comparison",
            commonErrors: ["Substituting plot summary for analysis."],
          },
        },
        {
          id: "cial-e-u6-p3-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What does prose fiction analysis in Paper 3 typically include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only dialogue analysis" },
              {
                id: "b",
                text: "Narrative voice, characterisation, setting and themes"
              },
              { id: "c", text: "Only rhyme and metre" },
              { id: "d", text: "Only stage directions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Prose analysis",
                statement: "Narrative voice, characterisation, setting, themes.",
              },
            ],
            steps: [
              {
                reasoning: "Prose conventions differ from poetry and drama.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Narrative technique is central to prose analysis.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Voice, characterisation, setting, themes",
            commonErrors: ["Applying drama or poetry features to prose."],
          },
        },
        {
          id: "cial-e-u6-p3-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What should drama analysis in Paper 3 focus on?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Narrative voice and description" },
              { id: "b", text: "Rhyme scheme and imagery only" },
              { id: "c", text: "Chapter structure and flashbacks" },
              {
                id: "d",
                text: "Stagecraft, dialogue, dramatic irony and themes"
              },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Drama analysis",
                statement: "Stagecraft, dialogue, irony, structure, themes.",
              },
            ],
            steps: [
              {
                reasoning: "Drama is analysed through performance conventions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Dramatic irony and dialogue reveal character.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(c)** Stagecraft, dialogue, irony, themes",
            commonErrors: ["Analysing drama as if it were prose."],
          },
        },
        {
          id: "cial-e-u6-p3-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Paper 3 has 2 sections; Section A contains 3 questions and Section B contains 4 questions. How many questions are there in total?",
          response: {
            type: "numeric",
            parts: [{ label: "questions", answer: 7 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Question count",
                statement: "Total = Section A + Section B questions.",
              },
            ],
            steps: [
              {
                reasoning: "Add questions in both sections.",
                working: "3 + 4 = 7",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "7",
            commonErrors: ["Counting only one section."],
          },
        },
        {
          id: "cial-e-u6-p3-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a 20-mark genre essay, poetry carries 40% of the marks and drama carries 25%. Enter the marks allocated to poetry and to drama.",
          response: {
            type: "numeric",
            parts: [
              { label: "poetry", answer: 8 },
              { label: "drama", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mark percentages",
                statement: "Genre marks = percentage × total marks.",
              },
            ],
            steps: [
              {
                reasoning: "Calculate 40% of 20.",
                working: "0.4 \\times 20 = 8",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Calculate 25% of 20.",
                working: "0.25 \\times 20 = 5",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "poetry = 8, drama = 5",
            commonErrors: ["Using percentages of 100 rather than 20."],
          },
        },
        {
          id: "cial-e-u6-p3-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A syllabus prescribes 3 set texts for each of 3 genres (poetry, prose, drama). How many set texts must a candidate know in total?",
          response: {
            type: "numeric",
            parts: [{ label: "texts", answer: 9 }],
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Set texts",
                statement: "Total texts = texts per genre × genres.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply texts per genre by number of genres.",
                working: "3 \\times 3 = 9",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "9",
            commonErrors: ["Answering 3 (one genre only)."],
          },
        },
        {
          id: "cial-e-u6-p3-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "An essay plan allocates 1 mark to the introduction, 2 marks to each of 4 body paragraphs, and 1 mark to the conclusion. Enter the total marks and the marks carried by the body paragraphs combined.",
          response: {
            type: "numeric",
            parts: [
              { label: "total", answer: 10 },
              { label: "body", answer: 8 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Essay allocation",
                statement: "Total = intro + body + conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "Add introduction, body and conclusion.",
                working: "1 + 4 \\times 2 + 1 = 10",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Sum the four body paragraphs.",
                working: "4 \\times 2 = 8",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "total = 10, body = 8",
            commonErrors: ["Treating each paragraph as 1 mark."],
          },
        },
        {
          id: "cial-e-u6-p3-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Each of 4 body paragraphs in an essay needs 2 integrated quotations and 1 context reference. Enter the total number of quotations, the number of context references, and the number of paragraphs.",
          response: {
            type: "numeric",
            parts: [
              { label: "quotations", answer: 8 },
              { label: "context", answer: 4 },
              { label: "paragraphs", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evidence targets",
                statement: "Quotations = paragraphs × per paragraph.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply paragraphs by quotations each.",
                working: "4 \\times 2 = 8",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "One context reference per paragraph.",
                working: "4",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Count the paragraphs.",
                working: "4",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "quotations = 8, context = 4, paragraphs = 4",
            commonErrors: ["Halving the quotation count."],
          },
        },
        {
          id: "cial-e-u6-p3-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What do examiners look for in a Paper 3 comparative essay?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Examiners' criteria",
                statement: "Evidence, method analysis, comparison, context, judgement.",
              },
            ],
            steps: [
              {
                reasoning: "Precise, integrated textual evidence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Analysis of methods and genre conventions.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Explicit, woven comparison of both texts.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Context and evaluative judgement where relevant.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Evidence, method analysis, genuine comparison, context, judgement.",
            commonErrors: ["Listing criteria without explaining them."],
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
              { id: "b", text: "Unconscious desires" },
              { id: "c", text: "Gender roles" },
              { id: "d", text: "Colonialism" },
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
        {
          id: "cial-e-u6-ca-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a feminist reading of a text focus on?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The author's income" },
              { id: "b", text: "Class and economic power" },
              { id: "c", text: "Colonial history" },
              {
                id: "d",
                text: "Gender roles, patriarchy and female representation",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Feminist criticism",
                statement: "Focuses on gender, patriarchy, representation.",
              },
            ],
            steps: [
              {
                reasoning: "Feminism centres on gender dynamics.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Gender roles and patriarchy",
            commonErrors: ["Confusing with Marxist reading."],
          },
        },
        {
          id: "cial-e-u6-ca-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does postcolonial criticism primarily examine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rhyme and metre" },
              { id: "b", text: "Grammar accuracy" },
              { id: "c", text: "Box office success" },
              {
                id: "d",
                text: "The legacy of colonialism and representation of colonised peoples",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Postcolonial criticism",
                statement: "Examines colonial legacy and representation.",
              },
            ],
            steps: [
              {
                reasoning: "Postcolonial lens centres on colonial power relations.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Colonial legacy and representation",
            commonErrors: ["Confusing with historical context alone."],
          },
        },
        {
          id: "cial-e-u6-ca-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which thinker is most associated with psychoanalytic criticism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sigmund Freud" },
              { id: "b", text: "Jane Austen" },
              { id: "c", text: "Charles Dickens" },
              { id: "d", text: "William Shakespeare" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Psychoanalytic criticism",
                statement: "Draws on Freudian analysis of unconscious desires.",
              },
            ],
            steps: [
              {
                reasoning: "Psychoanalysis derives from Freud.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)** Sigmund Freud",
            commonErrors: ["Confusing critic with author."],
          },
        },
        {
          id: "cial-e-u6-ca-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What does structuralist criticism seek in a text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The author's bank account" },
              {
                id: "b",
                text: "Underlying structures and patterns beneath the surface",
              },
              { id: "c", text: "The longest word used" },
              { id: "d", text: "Spelling mistakes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Structuralism",
                statement: "Reveals underlying structures and patterns in texts.",
              },
            ],
            steps: [
              {
                reasoning: "Structuralists map deep patterns and systems.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "It looks beneath surface narrative to structures.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** Underlying structures and patterns",
            commonErrors: ["Confusing with poststructuralism."],
          },
        },
        {
          id: "cial-e-u6-ca-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What is the correct way to use a critical lens in an essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Apply theory without any textual evidence" },
              {
                id: "b",
                text: "Use the lens to deepen analysis, always grounded in textual evidence",
              },
              { id: "c", text: "Name every critic you can recall" },
              { id: "d", text: "Ignore the text and discuss the theory only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Applying lenses",
                statement: "Approaches deepen analysis; evidence is essential.",
              },
            ],
            steps: [
              {
                reasoning: "Theory must be anchored in the text.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "The lens reveals aspects, not replaces reading.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** Deepen analysis with textual evidence",
            commonErrors: ["Theory without evidence."],
          },
        },
        {
          id: "cial-e-u6-ca-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What does 'intertextuality' refer to?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The way texts reference or echo other texts",
              },
              { id: "b", text: "The publisher of a text" },
              { id: "c", text: "The length of a text" },
              { id: "d", text: "A text's spelling errors" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Intertextuality",
                statement: "Texts referencing or echoing other texts.",
              },
            ],
            steps: [
              {
                reasoning: "Intertextuality = text-to-text relationships.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "It enriches meaning through allusion.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(b)** Texts referencing other texts",
            commonErrors: ["Confusing with context."],
          },
        },
        {
          id: "cial-e-u6-ca-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A course covers 6 critical approaches and a student writes one essay per approach. How many essays does the student write?",
          response: {
            type: "numeric",
            parts: [{ label: "essays", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Approach count",
                statement: "Essays = approaches covered.",
              },
            ],
            steps: [
              {
                reasoning: "One essay per approach.",
                working: "6",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "6",
            commonErrors: ["Doubling the count unnecessarily."],
          },
        },
        {
          id: "cial-e-u6-ca-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "An essay applies 3 critical lenses, using 2 textual examples per lens. How many textual examples are used in total?",
          response: {
            type: "numeric",
            parts: [{ label: "examples", answer: 6 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evidence count",
                statement: "Examples = lenses × examples per lens.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply lenses by examples each.",
                working: "3 \\times 2 = 6",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Each lens needs its own evidence.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "6",
            commonErrors: ["Counting examples once across all lenses."],
          },
        },
        {
          id: "cial-e-u6-ca-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A critical-approach question allocates 4 marks to applying the lens, 3 marks to textual evidence and 3 marks to evaluation. What is the total mark allocation?",
          response: {
            type: "numeric",
            parts: [{ label: "total", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mark allocation",
                statement: "Total = application + evidence + evaluation.",
              },
            ],
            steps: [
              {
                reasoning: "Add the three mark allocations.",
                working: "4 + 3 + 3 = 10",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "10",
            commonErrors: ["Forgetting one component."],
          },
        },
        {
          id: "cial-e-u6-ca-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A feminist essay has 4 paragraphs, and each paragraph uses 2 integrated quotations. How many quotations does the essay contain?",
          response: {
            type: "numeric",
            parts: [{ label: "quotations", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quotation count",
                statement: "Quotations = paragraphs × per paragraph.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply paragraphs by quotations each.",
                working: "4 \\times 2 = 8",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Evidence must be distributed, not clustered.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "8",
            commonErrors: ["Using only one quotation per paragraph."],
          },
        },
        {
          id: "cial-e-u6-ca-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Six critical approaches are ranked; the top 3 are selected, and each selected approach's essay needs 2 textual examples. Enter the number selected, the number excluded, and the total number of examples required.",
          response: {
            type: "numeric",
            parts: [
              { label: "selected", answer: 3 },
              { label: "excluded", answer: 3 },
              { label: "examples", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Selection counts",
                statement:
                  "Excluded = total − selected; examples = selected × per essay.",
              },
            ],
            steps: [
              {
                reasoning: "Read the number selected.",
                working: "3",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Subtract selected from total.",
                working: "6 - 3 = 3",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Multiply selected by examples per essay.",
                working: "3 \\times 2 = 6",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "selected = 3, excluded = 3, examples = 6",
            commonErrors: ["Counting excluded as 6."],
          },
        },
        {
          id: "cial-e-u6-ca-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how historical context shapes interpretation of a literary text, with reference to an example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Historical context",
                statement: "Period events and attitudes shape meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Identify the relevant historical period/events.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Link context to specific textual details.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Show how the reading differs from a context-free one.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear, supported explanation.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Context frames attitudes and events; linking it to textual evidence deepens interpretation.",
            commonErrors: ["Listing historical facts without linking to text."],
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
