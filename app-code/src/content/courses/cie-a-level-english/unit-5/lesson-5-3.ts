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
              { id: "a", text: "List characters" },
              { id: "b", text: "Summarise the plot" },
              { id: "c", text: "Describe the setting" },
              { id: "d", text: "Make an arguable claim guiding the essay" },
            ],
            correctChoiceId: "d",
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
            finalAnswer: "**(d)** Arguable claim",
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
        {
          id: "cial-e-u5-de-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does PEE stand for in a drama essay paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Performance, Entry, Exit" },
              { id: "b", text: "Poem, Extract, Evaluation" },
              { id: "c", text: "Point, Evidence, Explanation" },
              { id: "d", text: "Plot, Essay, Ending" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "PEE",
                statement: "Point, Evidence, Explanation paragraph structure.",
              },
            ],
            steps: [
              {
                reasoning: "PEE = Point, Evidence, Explanation.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Point, Evidence, Explanation",
            commonErrors: ["Confusing with other acronyms."],
          },
        },
        {
          id: "cial-e-u5-de-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What do stage directions in brackets primarily reveal?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Characterisation, mood and relationships",
              },
              { id: "b", text: "The audience's reaction" },
              { id: "c", text: "The playwright's biography" },
              { id: "d", text: "The cost of the production" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Stage directions",
                statement: "Reveal characterisation, mood and relationships.",
              },
            ],
            steps: [
              {
                reasoning: "Directions show action, emotion and relationships.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Characterisation, mood and relationships",
            commonErrors: ["Treating them as irrelevant stage business."],
          },
        },
        {
          id: "cial-e-u5-de-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is an 'integrated quotation'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A paraphrase of the text" },
              { id: "b", text: "A quotation longer than five lines" },
              {
                id: "c",
                text: "A short quotation woven naturally into your own sentence",
              },
              { id: "d", text: "A quotation dropped in without comment" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Integrated quotation",
                statement: "Quote woven into the sentence and analysed.",
              },
            ],
            steps: [
              {
                reasoning: "Integration embeds the quote in your analysis.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(c)** Quote woven into your sentence",
            commonErrors: ["Quoting at length without analysis."],
          },
        },
        {
          id: "cial-e-u5-de-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which is the strongest thesis for an essay on a tragedy about ambition?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Ambition is an important theme in many plays.",
              },
              {
                id: "b",
                text: "The play exposes how unchecked ambition destroys the protagonist's moral judgement",
              },
              { id: "c",
                text: "The protagonist is ambitious and this causes problems.",
              },
              {
                id: "d",
                text: "This essay will discuss ambition in the play.",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Thesis",
                statement: "Arguable, specific claim guiding the whole essay.",
              },
            ],
            steps: [
              {
                reasoning: "A thesis must be arguable and specific, not a topic statement.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Only (c) makes a focused, defensible interpretive claim.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** Specific arguable claim about ambition",
            commonErrors: ["Writing a topic sentence instead of a thesis."],
          },
        },
        {
          id: "cial-e-u5-de-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why should a drama essay consider performance as well as text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because performance replaces textual analysis" },
              { id: "b", text: "Because plays are only ever read silently" },
              { id: "c", text: "Because directors always change the play" },
              {
                id: "d",
                text: "Because staging, delivery and pacing shape meaning on stage",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Performance awareness",
                statement: "Drama is written for performance; staging shapes meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Plays exist to be performed, not just read.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Staging, delivery and pacing add an interpretive layer.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(d)** Staging and delivery shape meaning",
            commonErrors: ["Treating the play as prose only."],
          },
        },
        {
          id: "cial-e-u5-de-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What should the conclusion of a drama essay do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeat the introduction word for word" },
              { id: "b", text: "Introduce a new character" },
              { id: "c", text: "List all the quotations used" },
              {
                id: "d",
                text: "Summarise the plot and offer an evaluative judgement on the play's achievement",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Conclusion",
                statement: "Summarise argument and reach evaluative judgement.",
              },
            ],
            steps: [
              {
                reasoning: "Conclusions synthesise rather than introduce new material.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "A judgement on effectiveness is required at the top level.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(d)** Summarise argument + evaluative judgement",
            commonErrors: ["Ending without a judgement."],
          },
        },
        {
          id: "cial-e-u5-de-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A drama essay has 3 PEE paragraphs worth 5 marks each, an introduction worth 2 marks and a conclusion worth 3 marks. What is the total mark allocation?",
          response: {
            type: "numeric",
            parts: [{ label: "total", answer: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Essay allocation",
                statement: "Total = paragraphs + introduction + conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "Add all essay components.",
                working: "3 \\times 5 + 2 + 3 = 20",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "20",
            commonErrors: ["Omitting the conclusion marks."],
          },
        },
        {
          id: "cial-e-u5-de-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A PEE paragraph has parts worth 1, 2 and 3 marks for Point, Evidence and Explanation. Enter the total marks for the paragraph and the marks for the Explanation.",
          response: {
            type: "numeric",
            parts: [
              { label: "total", answer: 6 },
              { label: "explanation", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "PEE marks",
                statement: "Explanation typically carries the most marks.",
              },
            ],
            steps: [
              {
                reasoning: "Sum the three PEE parts.",
                working: "1 + 2 + 3 = 6",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Read the Explanation mark value.",
                working: "3",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "total = 6, explanation = 3",
            commonErrors: ["Swapping evidence and explanation marks."],
          },
        },
        {
          id: "cial-e-u5-de-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 10-mark drama question has parts worth 2, 3 and 5 marks. What is the total mark allocation?",
          response: {
            type: "numeric",
            parts: [{ label: "total", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Part marks",
                statement: "Part marks sum to the question total.",
              },
            ],
            steps: [
              {
                reasoning: "Add the three parts.",
                working: "2 + 3 + 5 = 10",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "10",
            commonErrors: ["Stopping before the last part."],
          },
        },
        {
          id: "cial-e-u5-de-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A timed drama essay allows 60 minutes: 10 minutes for planning, 45 minutes for writing and 5 minutes for checking. Enter the writing time and the total time spent on planning and checking combined.",
          response: {
            type: "numeric",
            parts: [
              { label: "writing", answer: 45 },
              { label: "plan_check", answer: 15 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Time management",
                statement: "Budget time across plan, write and check.",
              },
            ],
            steps: [
              {
                reasoning: "Read the writing allocation directly.",
                working: "45",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Add planning and checking time.",
                working: "10 + 5 = 15",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "writing = 45, plan+check = 15",
            commonErrors: ["Subtracting incorrectly."],
          },
        },
        {
          id: "cial-e-u5-de-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An essay quotes 4 stage directions across 3 paragraphs, and each paragraph also needs 1 linking phrase. Enter the number of stage-direction quotations, the number of paragraphs, and the number of linking phrases required.",
          response: {
            type: "numeric",
            parts: [
              { label: "directions", answer: 4 },
              { label: "paragraphs", answer: 3 },
              { label: "links", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Essay evidence",
                statement: "Stage directions and linking phrases support analysis.",
              },
            ],
            steps: [
              {
                reasoning: "Count the stage-direction quotations.",
                working: "4",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Count the paragraphs.",
                working: "3",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "One linking phrase per paragraph.",
                working: "1 \\times 3 = 3",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "directions = 4, paragraphs = 3, links = 3",
            commonErrors: ["Assuming one direction per paragraph."],
          },
        },
        {
          id: "cial-e-u5-de-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How should a drama essay paragraph integrate stage directions and integrated quotation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evidence integration",
                statement:
                  "Weave stage directions and speech into the analysis sentence.",
              },
            ],
            steps: [
              {
                reasoning: "Introduce the point with a topic sentence.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Embed the stage direction or speech naturally in a sentence.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Analyse what the evidence reveals about character/mood.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Link back to the thesis or paragraph point.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Point → integrated evidence → analysis of effect → link to thesis.",
            commonErrors: ["Quoting directions without analysing them."],
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
              { id: "a", text: "Missing context" },
              {
                id: "b",
                text: "Writing two separate analyses instead of comparing",
              },
              { id: "c", text: "Using too many quotations" },
              { id: "d", text: "Ignoring genre" },
            ],
            correctChoiceId: "b",
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
            finalAnswer: "**(b)** Two separate analyses",
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
        {
          id: "cial-e-u5-cd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the strongest way to structure a comparative drama essay?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Weave comparison of both plays throughout each paragraph",
              },
              { id: "b", text: "Analyse Play A fully, then Play B fully" },
              { id: "c", text: "Write about the more famous play only" },
              { id: "d", text: "Compare only in the conclusion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Weaving comparison",
                statement: "Comparison must be integrated throughout.",
              },
            ],
            steps: [
              {
                reasoning: "Integrated comparison shows analytical depth.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(a)** Weave comparison throughout",
            commonErrors: ["Writing two separate essays."],
          },
        },
        {
          id: "cial-e-u5-cd-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which set best represents valid points of comparison between two plays?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the settings" },
              { id: "b", text: "Only the plots" },
              { id: "c", text: "Only the number of characters" },
              {
                id: "d",
                text: "Themes, characterisation, techniques, genre and context",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Comparison points",
                statement:
                  "Compare themes, characterisation, techniques, genre, context.",
              },
            ],
            steps: [
              {
                reasoning: "Multiple aspects yield a rich comparison.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "**(d)** Themes, characterisation, techniques, genre, context",
            commonErrors: ["Comparing plot only."],
          },
        },
        {
          id: "cial-e-u5-cd-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What must a comparative essay reach by its conclusion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A list of differences" },
              { id: "b", text: "A summary of both plots" },
              {
                id: "c",
                text: "An evaluative judgement on which is more effective",
              },
              { id: "d", text: "A new question for the reader" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluative judgement",
                statement: "Comparison should judge effectiveness.",
              },
            ],
            steps: [
              {
                reasoning: "A judgement moves beyond description.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(c)** Evaluative judgement on effectiveness",
            commonErrors: ["Stopping at description."],
          },
        },
        {
          id: "cial-e-u5-cd-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why is writing about Play A and then Play B separately a weakness in a comparative essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It ignores the plays' contexts" },
              {
                id: "b",
                text: "It produces two separate analyses rather than genuine comparison",
              },
              { id: "c", text: "It is always under the word limit" },
              { id: "d", text: "It uses too many quotations" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Separate analysis",
                statement: "Sequential treatment is not comparison.",
              },
            ],
            steps: [
              {
                reasoning: "Separate halves never directly compare.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "This fails the comparative requirement of the task.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** Two separate analyses, not comparison",
            commonErrors: ["Thinking thorough coverage equals comparison."],
          },
        },
        {
          id: "cial-e-u5-cd-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Two plays share a theme but come from different historical contexts. How should the essay handle this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Assume the contexts are identical" },
              { id: "b", text: "Ignore context entirely" },
              {
                id: "c",
                text: "Treat context as a point of comparison shaping each play's treatment of the theme",
              },
              { id: "d", text: "Compare only the contexts, not the texts" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Contextual comparison",
                statement:
                  "Context differences shape interpretation and can be compared.",
              },
            ],
            steps: [
              {
                reasoning: "Context is itself a legitimate comparison point.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "It deepens rather than replaces textual comparison.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(c)** Use context differences as comparison",
            commonErrors: ["Forcing identical contexts."],
          },
        },
        {
          id: "cial-e-u5-cd-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "When comparing a tragedy and a comedy on a shared theme, what should the comparison focus on?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The playwrights' ages" },
              {
                id: "b",
                text: "Genre conventions and how each produces different effects",
              },
              { id: "c", text: "Only the endings" },
              { id: "d", text: "Only the number of acts" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Genre comparison",
                statement: "Compare how genre conventions shape effects.",
              },
            ],
            steps: [
              {
                reasoning: "Genre conventions determine treatment of theme.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Effects differ between tragic and comic handling.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(b)** Genre conventions and effects",
            commonErrors: ["Comparing surface features only."],
          },
        },
        {
          id: "cial-e-u5-cd-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An essay compares 2 plays across 4 aspects (theme, character, technique, genre). How many play-aspect pairings are analysed?",
          response: {
            type: "numeric",
            parts: [{ label: "pairings", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparison grid",
                statement: "Pairings = plays × aspects.",
              },
            ],
            steps: [
              {
                reasoning: "Multiply plays by aspects.",
                working: "2 \\times 4 = 8",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "8",
            commonErrors: ["Adding instead of multiplying."],
          },
        },
        {
          id: "cial-e-u5-cd-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A comparative essay has 4 paragraphs, each covering both plays on one aspect. Enter the number of paragraphs and the number of plays covered.",
          response: {
            type: "numeric",
            parts: [
              { label: "paragraphs", answer: 4 },
              { label: "plays", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Comparative structure",
                statement: "Each paragraph compares both texts on one aspect.",
              },
            ],
            steps: [
              {
                reasoning: "Count paragraphs from the stem.",
                working: "4",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "A comparative essay requires two plays.",
                working: "2",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "paragraphs = 4, plays = 2",
            commonErrors: ["Counting only one play."],
          },
        },
        {
          id: "cial-e-u5-cd-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "An essay plan allocates 2 marks to the introduction, 3 marks to each of 3 body paragraphs, and 1 mark to the conclusion. What is the total mark allocation?",
          response: {
            type: "numeric",
            parts: [{ label: "total", answer: 12 }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Essay allocation",
                statement:
                  "Total = introduction + body paragraphs + conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "Add all components.",
                working: "2 + 3 \\times 3 + 1 = 12",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "12",
            commonErrors: ["Multiplying the introduction by 3."],
          },
        },
        {
          id: "cial-e-u5-cd-q14",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Two plays share 3 themes. If each theme must be compared between both plays, how many theme-comparisons are required, and how many plays are involved?",
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
                statement:
                  "Each shared theme generates one comparison across both plays.",
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
                reasoning: "Comparison requires two plays.",
                working: "2",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "comparisons = 3, plays = 2",
            commonErrors: ["Counting each play separately as a comparison."],
          },
        },
        {
          id: "cial-e-u5-cd-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A 5-paragraph comparative essay covers 2 plays in every paragraph. Enter the number of paragraphs, the number of plays, and the total number of play-references across the essay.",
          response: {
            type: "numeric",
            parts: [
              { label: "paragraphs", answer: 5 },
              { label: "plays", answer: 2 },
              { label: "references", answer: 10 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Play references",
                statement: "References = paragraphs × plays per paragraph.",
              },
            ],
            steps: [
              {
                reasoning: "Count paragraphs.",
                working: "5",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Count plays compared.",
                working: "2",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Multiply paragraphs by plays.",
                working: "5 \\times 2 = 10",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "paragraphs = 5, plays = 2, references = 10",
            commonErrors: ["Counting plays once overall."],
          },
        },
        {
          id: "cial-e-u5-cd-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How should a comparative drama essay reach an evaluative judgement?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Evaluative comparison",
                statement: "Weigh both plays and judge overall effectiveness.",
              },
            ],
            steps: [
              {
                reasoning: "Compare effectiveness on shared criteria.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Acknowledge strengths of both plays fairly.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Reach a justified overall judgement.",
                marks: 1,
                markCode: "AO3",
              },
              {
                reasoning: "Clear, supported conclusion.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Compare each play's handling of the theme, weigh the evidence, then justify which achieves more.",
            commonErrors: ["Declaring a winner without evidence."],
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
