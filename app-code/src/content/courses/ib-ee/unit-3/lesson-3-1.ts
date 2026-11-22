import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "ee-u3-lesson-3-1",
  code: "3-1",
  title: "Structuring the Essay",
  goal: "I CAN structure an Extended Essay with a clear introduction, developed body and conclusion.",
  standards: ["EE", "Essay Structure", "Academic Writing"],
  vocabulary: [
    {
      term: "Introduction",
      definition:
        "The opening section that introduces the research question, context and argument.",
    },
    {
      term: "Body",
      definition:
        "The main sections developing the argument with evidence and analysis.",
    },
    {
      term: "Conclusion",
      definition:
        "The final section answering the research question and summarising findings.",
    },
    {
      term: "Thesis statement",
      definition: "The central claim or position the essay will defend.",
    },
    {
      term: "Topic sentence",
      definition: "The first sentence of a paragraph stating its main point.",
    },
    {
      term: "Flow",
      definition:
        "The logical progression of ideas from paragraph to paragraph.",
    },
  ],
  concepts: [
    {
      id: "ee-u3-essay-structure",
      title: "Overall essay structure",
      skill:
        "Organise an EE into introduction, body and conclusion that serve the research question.",
      lesson: {
        sections: [
          {
            heading: "Introduction",
            body: "The introduction (roughly 10% of the essay) should: state the research question; provide context; explain why the question matters; and present your **thesis** — the position you will argue. It should not contain evidence or detailed analysis — just orient the reader.",
          },
          {
            heading: "Body",
            body: "The body (roughly 80%) develops the argument. Each paragraph should have a clear topic sentence, supporting evidence, analysis, and connection to the research question. Organise by themes, arguments or chronological periods — whichever serves the question best. Every paragraph must advance the argument.",
          },
          {
            heading: "Conclusion",
            body: "The conclusion (roughly 10%) should: answer the research question directly; summarise key findings; acknowledge limitations; and suggest implications or further research. It should not introduce new evidence — only synthesise what has been argued.",
          },
        ],
        keyFormulas: [
          {
            name: "Structure proportions",
            statement: "Introduction ~10%, body ~80%, conclusion ~10%",
          },
          {
            name: "Paragraph rule",
            statement: "Topic sentence + evidence + analysis + link to RQ",
          },
        ],
        workedExample: {
          problem: "Where should the thesis statement appear?",
          solution:
            "In the introduction — it states your central argument upfront. The body then defends it with evidence; the conclusion confirms it. The thesis should be specific and arguable, not a vague statement of intent.",
        },
      },
      questions: [
        {
          id: "ee-u3-l31c1q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The introduction of an EE should primarily:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "List all sources" },
              { id: "b", text: "Present all the evidence" },
              { id: "c", text: "State the RQ, context and thesis" },
              { id: "d", text: "Summarise the conclusion" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Introduction function",
                statement: "Introduction states RQ, context and thesis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Introduction orients the reader: RQ, context, thesis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** State the RQ, context and thesis",
            commonErrors: ["Putting evidence or analysis in the introduction."],
          },
        },
        {
          id: "ee-u3-l31c1q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the role of a topic sentence in essay structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Topic sentence",
                statement:
                  "States the paragraph's main point and connects to the overall argument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Topic sentence announces what the paragraph will argue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It connects the paragraph to the research question and thesis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It guides the reader through the argument's structure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Topic sentences state each paragraph's point and maintain logical flow of the argument.",
            commonErrors: ["Writing paragraphs without clear topic sentences."],
          },
        },
        {
          id: "ee-u3-l31c1q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that the conclusion should introduce new evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Conclusion function",
                statement:
                  "Conclusion synthesises and answers — it does not introduce new evidence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Against: new evidence in conclusion is unfocused and suggests poor planning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "For limited exception: brief mention of implications or further research questions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The conclusion's job is synthesis, not new argument.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Judgement: conclusions answer the RQ using existing evidence; new evidence belongs in the body.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Conclusions should synthesise existing evidence, not introduce new evidence — that belongs in the body.",
            commonErrors: [
              "Introducing major new arguments in the conclusion.",
            ],
          },
        },
        {
          id: "ee-u3-l31c1q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to structure an EE effectively.",
          parts: [
            {
              label: "a",
              prompt: "Describe the function of the introduction.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain how to organise the body paragraphs.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate what makes a strong conclusion.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Essay structure",
                statement:
                  "Introduction orients, body argues, conclusion synthesises.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "States RQ, context, thesis — orients reader.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Does not contain evidence or analysis.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Each paragraph has topic sentence, evidence, analysis.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Organise by theme, argument or chronology.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Every paragraph must advance the argument.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Answers RQ directly using existing evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Acknowledges limitations and suggests implications.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: strong conclusion synthesises without new evidence.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Orient reader. (b) Themed paragraphs advancing argument. (c) Synthesise, answer RQ, no new evidence.",
            commonErrors: ["Treating conclusion as an afterthought."],
          },
        },
        {
          id: "ee-u3-l31c1q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Approximately what share of the EE should the body occupy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "About 80%" },
              { id: "b", text: "About 50%" },
              { id: "c", text: "About 95%" },
              { id: "d", text: "About 10%" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Structure proportions",
                statement: "Introduction ~10%, body ~80%, conclusion ~10%.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The body carries the argument and should occupy roughly 80%.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** About 80%",
            commonErrors: ["Writing a very long introduction or conclusion."],
          },
        },
        {
          id: "ee-u3-l31c1q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A strong thesis statement is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A vague statement of intent" },
              { id: "b", text: "The research question repeated verbatim" },
              { id: "c", text: "A specific, arguable position" },
              { id: "d", text: "A summary of all sources used" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis statement",
                statement:
                  "The thesis is a specific, arguable claim the essay defends.",
              },
            ],
            steps: [
              {
                reasoning: "A thesis states a position the essay will defend.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** A specific, arguable position",
            commonErrors: ["Writing a thesis that merely announces the topic."],
          },
        },
        {
          id: "ee-u3-l31c1q7",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Outline the three main components of an Extended Essay and state the function of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Essay structure",
                statement:
                  "Introduction orients, body argues, conclusion synthesises.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Introduction states the RQ, context and thesis — it orients the reader.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Body develops the argument with evidence and analysis (~80%).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion answers the RQ and synthesises findings (~10%).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The proportions are approximately 10/80/10.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Introduction orients (RQ, context, thesis), body argues (~80%), conclusion synthesises and answers (~10%).",
            commonErrors: ["Putting evidence or analysis in the introduction."],
          },
        },
        {
          id: "ee-u3-l31c1q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which of the following is inappropriate in an EE introduction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Extended statistical analysis and quotations" },
              { id: "b", text: "The research question" },
              { id: "c", text: "A thesis statement" },
              { id: "d", text: "Brief context for the topic" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Introduction function",
                statement:
                  "Introduction orients only — evidence and analysis belong in the body.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evidence and detailed analysis do not belong in the introduction.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Extended statistical analysis and quotations",
            commonErrors: ["Front-loading evidence into the introduction."],
          },
        },
        {
          id: "ee-u3-l31c1q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is the most defensible way to organise the body of an EE?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Strictly chronologically regardless of the question",
              },
              { id: "b", text: "One paragraph per source consulted" },
              {
                id: "c",
                text: "By themes or arguments that serve the research question",
              },
              { id: "d", text: "Alphabetically by source author" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Body organisation",
                statement:
                  "Organise by themes, arguments or periods — whichever serves the RQ best.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The body should be organised around the argument, not sources.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** By themes or arguments that serve the research question",
            commonErrors: [
              "Organising the essay source-by-source instead of argument-by-argument.",
            ],
          },
        },
        {
          id: "ee-u3-l31c1q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A conclusion that introduces a major new argument is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Inappropriate — conclusions synthesise rather than argue new ground",
              },
              { id: "b", text: "Acceptable if it is well evidenced" },
              { id: "c", text: "Required for the highest marks" },
              { id: "d", text: "Only a problem in scientific essays" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Conclusion function",
                statement:
                  "The conclusion answers the RQ and synthesises — new arguments belong in the body.",
              },
            ],
            steps: [
              {
                reasoning:
                  "New evidence or arguments in the conclusion indicate poor planning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Inappropriate — conclusions synthesise rather than argue new ground",
            commonErrors: ["Saving the strongest argument for the conclusion."],
          },
        },
        {
          id: "ee-u3-l31c1q11",
          difficulty: "core",
          totalMarks: 5,
          stem: "A student writes a paragraph containing three quotations and one sentence saying 'this is important'. Identify two weaknesses and explain how to fix them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph formula",
                statement:
                  "Topic sentence + evidence + analysis + link — evidence alone is only reporting.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Weakness: quotations are presented without analysis of their significance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Weakness: 'this is important' asserts rather than explains importance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fix: explain what each quotation shows and why it matters.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fix: connect the evidence explicitly to the research question.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: evidence plus analysis plus link transforms reporting into argument.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The paragraph lacks analysis and a link to the RQ; each quotation needs its significance explained and connected to the argument.",
            commonErrors: [
              "Assuming that presenting evidence automatically constitutes argument.",
            ],
          },
        },
        {
          id: "ee-u3-l31c1q12",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how the overall structure of an essay supports achievement.",
          parts: [
            {
              label: "a",
              prompt:
                "Assess whether the 10-80-10 proportions should be treated as rigid rules.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain how a chronological structure might suit some research questions.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Judge whether an essay must visibly label its three sections.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Essay structure",
                statement:
                  "Structure proportions guide proportion, not a mechanical formula.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The proportions are guidelines, not strict quotas.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Content should determine length — a complex argument may need more body.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Treating them rigidly produces padding or truncation.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Chronology suits questions about change over time or development.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "It shows sequence and causation clearly for historical or process questions.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "But it must still advance the argument, not just narrate events.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Labels are unnecessary; the functions must be present.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: readers need orientation, argument and synthesis — headings optional.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Guidelines not rigid rules. (b) Chronology suits change-over-time questions. (c) Functions matter, labels optional.",
            commonErrors: [
              "Forcing content into fixed proportions regardless of argument needs.",
            ],
          },
        },
        {
          id: "ee-u3-l31c1q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that the conclusion is the easiest section of the essay to write.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Conclusion function",
                statement:
                  "The conclusion requires judgement — selecting and synthesising, not just repeating.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For: it draws on material already written, so drafting is familiar.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Against: it requires direct answers to the RQ and honest limitations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A weak conclusion exposes a weak argument — it cannot be bolted on.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "It demands synthesis and judgement about what matters most.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Judgement: easiest to draft, hardest to do well — it tests understanding of the whole essay.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The conclusion is quick to draft but demanding to do well — it requires synthesis and direct answers to the RQ.",
            commonErrors: [
              "Writing a conclusion that merely repeats the introduction.",
            ],
          },
        },
        {
          id: "ee-u3-l31c1q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Suggest four features that make an introduction effective.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Introduction function",
                statement:
                  "Introduction states RQ, context, significance and thesis without evidence.",
              },
            ],
            steps: [
              {
                reasoning: "It states the research question clearly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It provides context and explains why the question matters.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "It presents a specific, arguable thesis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It contains no evidence or detailed analysis — it only orients.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Clear RQ, context and significance, specific arguable thesis, and no evidence or analysis.",
            commonErrors: [
              "Including detailed analysis or evidence in the introduction.",
            ],
          },
        },
        {
          id: "ee-u3-l31c1q15",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Examine how essay structure relates to Criterion A — A framework for the essay.",
          parts: [
            {
              label: "a",
              prompt: "Explain what Criterion A rewards in terms of framing.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Describe how the introduction and conclusion each contribute to the framework.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether perfect structure can compensate for weak analysis.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Criterion A — Framework",
                statement:
                  "Criterion A rewards a focused, arguable RQ and an essay that delivers what it promises.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "A rewards a clear, focused and arguable research question.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It rewards an introduction that delivers what the essay promises.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It rewards a conclusion that answers the RQ directly.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "It rewards coherent structure where each section serves the question.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The introduction frames the argument: RQ, context, thesis.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The conclusion closes the frame by answering the RQ.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Together they bookend an essay that delivers its promise.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Structure is necessary but not sufficient for high marks.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Weak analysis still scores poorly under B, C and D.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: strong framing enables achievement but cannot substitute for depth.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Clear RQ, delivering intro, answering conclusion, coherent structure. (b) Intro frames, conclusion closes. (c) Necessary but not sufficient.",
            commonErrors: [
              "Believing structural polish alone earns top marks.",
            ],
          },
        },
        {
          id: "ee-u3-l31c1q16",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Explain why every paragraph in the EE should connect back to the research question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Argument unity",
                statement:
                  "Every paragraph must advance the argument and serve the RQ.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It keeps the essay unified around a single argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "It prevents tangents and irrelevant material.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It guides the reader through the logical progression.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "It improves coherence, which examiners reward.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Connecting paragraphs to the RQ maintains unity, prevents digression and demonstrates coherent argument.",
            commonErrors: ["Writing interesting but irrelevant paragraphs."],
          },
        },
      ],
    },
    {
      id: "ee-u3-paragraph-writing",
      title: "Writing effective paragraphs",
      skill:
        "Write paragraphs that develop arguments with evidence and analysis.",
      lesson: {
        sections: [
          {
            heading: "Paragraph anatomy",
            body: "A strong paragraph: topic sentence → evidence (quotes, data, examples) → analysis (explain significance) → link (connect to argument). The analysis is where marks are won — evidence without analysis is just reporting; analysis transforms evidence into argument.",
          },
          {
            heading: "Evidence and analysis balance",
            body: "A common mistake is too much evidence and too little analysis, or vice versa. The ratio depends on the subject: sciences may need more data presentation; humanities may need more interpretive analysis. Aim for roughly equal weight — enough evidence to support, enough analysis to explain.",
          },
          {
            heading: "Transitions and flow",
            body: "Paragraphs should connect: use transition words ('however', 'furthermore', 'consequently'), repeated key terms, and logical progression. The reader should always know how each paragraph relates to the last and to the overall argument.",
          },
        ],
        keyFormulas: [
          {
            name: "Paragraph formula",
            statement: "Topic sentence + evidence + analysis + link",
          },
          {
            name: "Analysis rule",
            statement:
              "Explain why the evidence matters, not just what it says",
          },
        ],
        workedExample: {
          problem:
            "Improve this paragraph: 'The study found X. This is important.'",
          solution:
            "'The study found X [evidence]. This matters because it suggests Y [analysis], which supports the argument that Z [link to RQ]. The finding challenges the assumption that...' — evidence, analysis, link.",
        },
      },
      questions: [
        {
          id: "ee-u3-l31c2q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The analysis in a paragraph should primarily:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Summarise the introduction" },
              { id: "b", text: "Repeat the evidence" },
              { id: "c", text: "Explain the significance of the evidence" },
              { id: "d", text: "List more sources" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analysis function",
                statement:
                  "Analysis explains the significance of evidence for the argument.",
              },
            ],
            steps: [
              {
                reasoning: "Analysis explains why evidence matters.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Explain the significance of the evidence",
            commonErrors: [
              "Presenting evidence without explaining its significance.",
            ],
          },
        },
        {
          id: "ee-u3-l31c2q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the ideal structure of an essay paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph structure",
                statement: "Topic sentence + evidence + analysis + link.",
              },
            ],
            steps: [
              {
                reasoning: "Topic sentence states the paragraph's main point.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence supports the point; analysis explains its significance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Link connects the paragraph to the overall argument.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Topic sentence → evidence → analysis → link to argument.",
            commonErrors: [
              "Paragraphs that are just lists of evidence without analysis.",
            ],
          },
        },
        {
          id: "ee-u3-l31c2q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that longer paragraphs are always better.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph length",
                statement:
                  "Paragraph length should match the complexity of the point being made.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For: complex arguments need space for evidence and analysis.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Against: overly long paragraphs lose focus and readability.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Short paragraphs can be effective for emphasis or transitions.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Judgement: paragraph length should serve clarity, not a fixed rule.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Paragraph length should match content complexity — neither too long nor artificially short.",
            commonErrors: [
              "Writing one giant paragraph or many one-sentence paragraphs.",
            ],
          },
        },
        {
          id: "ee-u3-l31c2q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine how to write effective essay paragraphs.",
          parts: [
            {
              label: "a",
              prompt: "Describe the components of a strong paragraph.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain the balance between evidence and analysis.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate how transitions affect essay quality.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph writing",
                statement:
                  "Paragraphs need topic sentence, evidence, analysis and link.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Topic sentence, evidence, analysis, link.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "All four components listed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Evidence supports claims; analysis explains significance.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Too much evidence without analysis = reporting.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Too much analysis without evidence = unsupported claims.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Transitions create logical flow between paragraphs.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "They help reader follow the argument's progression.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: good transitions are invisible but essential.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Topic+evidence+analysis+link. (b) Balance needed. (c) Transitions guide reader.",
            commonErrors: [
              "Paragraphs that present evidence without analysis.",
            ],
          },
        },
        {
          id: "ee-u3-l31c2q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The first sentence of a well-structured paragraph is usually:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A transition word" },
              { id: "b", text: "A quotation" },
              { id: "c", text: "A topic sentence" },
              { id: "d", text: "A citation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph structure",
                statement:
                  "Paragraphs open with a topic sentence stating the main point.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The topic sentence announces what the paragraph argues.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** A topic sentence",
            commonErrors: [
              "Opening paragraphs with quotations before stating a point.",
            ],
          },
        },
        {
          id: "ee-u3-l31c2q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In paragraph writing, 'analysis' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeating the introduction" },
              {
                id: "b",
                text: "Explaining why the evidence matters for the argument",
              },
              { id: "c", text: "Quoting sources at length" },
              { id: "d", text: "Listing more evidence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analysis rule",
                statement:
                  "Analysis explains the significance of evidence, not just what it says.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Analysis interprets evidence and connects it to the argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** Explaining why the evidence matters for the argument",
            commonErrors: [
              "Confusing analysis with the accumulation of more evidence.",
            ],
          },
        },
        {
          id: "ee-u3-l31c2q7",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Describe the four components of an effective paragraph and the role of each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph formula",
                statement: "Topic sentence + evidence + analysis + link.",
              },
            ],
            steps: [
              {
                reasoning: "Topic sentence states the paragraph's main point.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evidence (quotes, data, examples) supports the point.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Analysis explains the significance of the evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The link connects the paragraph to the overall argument.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Topic sentence announces the point, evidence supports it, analysis explains significance, link connects to the argument.",
            commonErrors: [
              "Omitting the link so paragraphs feel disconnected.",
            ],
          },
        },
        {
          id: "ee-u3-l31c2q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "A paragraph containing three quotations but no explanation is missing:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Transitions" },
              { id: "b", text: "A topic sentence" },
              { id: "c", text: "Analysis" },
              { id: "d", text: "Citations" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analysis rule",
                statement:
                  "Evidence without analysis is reporting, not argument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Quotations are evidence; their significance is never explained.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Analysis",
            commonErrors: ["Assuming quotations speak for themselves."],
          },
        },
        {
          id: "ee-u3-l31c2q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Transition words such as 'however' and 'furthermore' mainly serve to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Increase the word count" },
              { id: "b", text: "Replace the need for topic sentences" },
              { id: "c", text: "Connect ideas and show logical relationships" },
              { id: "d", text: "Cite sources correctly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Transitions and flow",
                statement:
                  "Transitions signal how ideas relate — contrast, addition, consequence.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Transitions make the logical relationships between ideas explicit.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Connect ideas and show logical relationships",
            commonErrors: [
              "Inserting transitions mechanically without real logical links.",
            ],
          },
        },
        {
          id: "ee-u3-l31c2q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence best demonstrates analysis rather than reporting?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The study found X, which suggests Y because the mechanism implies Z.",
              },
              { id: "b", text: "The study found that X occurred." },
              { id: "c", text: "According to Smith, X occurred in 1998." },
              { id: "d", text: "Many studies exist on the topic of X." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analysis rule",
                statement:
                  "Analysis explains significance and implications, not just what was found.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Option (b) interprets the finding and links it to a claim.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** The study found X, which suggests Y because the mechanism implies Z.",
            commonErrors: ["Mistaking detailed reporting for analysis."],
          },
        },
        {
          id: "ee-u3-l31c2q11",
          difficulty: "core",
          totalMarks: 5,
          stem: "Explain why presenting evidence without analysis limits achievement in the EE.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evidence and analysis balance",
                statement:
                  "Evidence alone is reporting; analysis transforms it into argument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evidence presented alone merely reports what sources say.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Analysis explains significance, turning reporting into argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Examiners reward interpretation under the analysis criterion.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Without analysis the essay does not advance the research question.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: balance evidence and analysis — neither alone earns high marks.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Evidence without analysis is only reporting; analysis converts it into argument that examiners reward.",
            commonErrors: [
              "Assuming more quotations compensate for missing interpretation.",
            ],
          },
        },
        {
          id: "ee-u3-l31c2q12",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Examine the balance between evidence and analysis in essay paragraphs.",
          parts: [
            {
              label: "a",
              prompt:
                "Assess how the ideal balance differs between sciences and humanities.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain when very short paragraphs can be effective.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Judge whether every paragraph must contain all four components.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evidence and analysis balance",
                statement: "The balance depends on subject and argument needs.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Sciences may need more data presentation and methods detail.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Humanities may need more interpretive analysis of texts.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The balance should serve the research question, not a fixed ratio.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Short paragraphs work for emphasis, transitions or turning points.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "They can mark a shift in the argument dramatically.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "But they must still carry a clear point.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "The four components are a guide, not a rigid template.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: flexibility is fine; the functions must still be served.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Balance varies by subject. (b) Short paragraphs suit emphasis and transitions. (c) Functions matter more than rigid format.",
            commonErrors: [
              "Applying one evidence-analysis ratio across all subjects.",
            ],
          },
        },
        {
          id: "ee-u3-l31c2q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the claim that longer quotations always strengthen an essay.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Evidence and analysis balance",
                statement:
                  "Selection and analysis of evidence matter more than quantity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "For: primary source material shows direct engagement with evidence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Against: long quotations displace analysis and consume word count.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The choice of quotation matters more than its length.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Unanalysed quotations are decoration, not argument.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Judgement: quote briefly, then analyse — length without analysis weakens the essay.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Longer quotations do not strengthen an essay; brief, well-chosen quotations followed by analysis do.",
            commonErrors: [
              "Using long quotations as a substitute for analysis.",
            ],
          },
        },
        {
          id: "ee-u3-l31c2q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Suggest three practical ways to improve flow between paragraphs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Transitions and flow",
                statement:
                  "Flow comes from logical connectives, repeated key terms and linked topic sentences.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Use transition words and connectives to signal logical relationships.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Repeat key terms and use pronouns to bind ideas across paragraphs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Make each topic sentence link back to the previous point and forward to the RQ.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: the reader should always know how each paragraph relates to the argument.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Transitions, repeated key terms and linked topic sentences create flow.",
            commonErrors: [
              "Inserting transition words mechanically without logical links.",
            ],
          },
        },
        {
          id: "ee-u3-l31c2q15",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Examine how paragraph-level writing affects Criterion C — Analysis and line of argument.",
          parts: [
            {
              label: "a",
              prompt: "Explain what Criterion C rewards at paragraph level.",
              marks: 4,
            },
            {
              label: "b",
              prompt:
                "Distinguish description from analysis with reference to paragraphs.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate whether a perfectly structured paragraph can still be weak.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Criterion C — Analysis",
                statement:
                  "Criterion C rewards analytical depth and a coherent, sustained line of argument.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Topic sentences that advance the line of argument.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Analysis that explains mechanisms, not just findings.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Claims that are justified rather than asserted.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Coherence so paragraphs build cumulatively.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Description reports what happened or what sources say.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Analysis explains why it matters and how it supports the argument.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Criterion C rewards the latter — interpretation over reporting.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Yes — structure enables but does not guarantee depth.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Shallow or generic analysis within a tidy paragraph still scores poorly.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Judgement: paragraph craft serves analysis; it cannot replace it.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Advancing topic sentences, mechanism-level analysis, justified claims, coherence. (b) Description reports, analysis interprets. (c) Structure alone cannot substitute for depth.",
            commonErrors: [
              "Confusing well-organised description with analysis.",
            ],
          },
        },
        {
          id: "ee-u3-l31c2q16",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "A student writes: 'The treaty was signed in 1919. This was important.' Identify what is missing and explain how to improve the second sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analysis rule",
                statement:
                  "Analysis must explain significance, not merely assert it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Missing: any explanation of why the treaty mattered.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Missing: a link connecting the fact to the research question.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Improve by stating the consequence, e.g. it ended the war and reshaped Europe.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Judgement: 'important' asserts; explaining why converts fact into argument.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The paragraph lacks analysis and an RQ link; replace 'important' with an explanation of the treaty's significance.",
            commonErrors: [
              "Using value words like 'important' without explaining the value.",
            ],
          },
        },
      ],
    },
  ],
};
