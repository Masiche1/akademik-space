import type { Lesson } from "../../../types.ts";

export const lesson182: Lesson = {
  id: "cie-ol-fl-lesson-8-2",
  code: "8-2",
  title: "Literature essay technique",
  goal: "I CAN write structured literature essays that analyse texts and argue a clear line.",
  standards: ["1119 Literature essay"],
  vocabulary: [
    { term: "Thesis", definition: "The central argument or line of an essay." },
    {
      term: "PEE/PEEL",
      definition:
        "Point, Evidence, Explanation, (Link) — paragraph structure for analysis.",
    },
    {
      term: "Context",
      definition: "The circumstances in which a text was written or set.",
    },
    { term: "Theme", definition: "The underlying idea or message of a text." },
    {
      term: "Evaluation",
      definition:
        "Judging the strengths and limitations of an argument or text.",
    },
    {
      term: "Integrated quotation",
      definition:
        "Weaving short quotations into your own sentences rather than dropping them in.",
    },
  ],
  concepts: [
    {
      id: "cie-ol-fl-essay-structure",
      title: "Structuring a literature essay",
      skill: "Build a coherent essay with thesis, paragraphs and conclusion.",
      lesson: {
        sections: [
          {
            heading: "The thesis",
            body: "Every essay needs a line — your answer to the question. 'How does the writer present loss?' might yield: 'The writer presents loss as gradual and isolating, using imagery of fading light.' This thesis guides every paragraph.",
          },
          {
            heading: "Paragraph structure",
            body: "Each paragraph makes one point supporting the thesis: Point (claim), Evidence (quotation or reference), Explanation (how technique creates effect), Link (back to thesis). This PEE/PEEL pattern ensures analysis, not summary.",
          },
          {
            heading: "Introduction and conclusion",
            body: "Introduction: engage briefly, define key terms, state your thesis — avoid plot summary. Conclusion: synthesise your points, restate the thesis in light of evidence, and end on insight — not a new argument or 'in conclusion'.",
          },
        ],
        keyFormulas: [
          {
            name: "Essay structure",
            statement:
              "Thesis+PEE paragraphs+focused intro/conclusion=coherent essay.",
          },
        ],
        workedExample: {
          problem: "Essay question: 'Explore how a character changes.'",
          solution:
            "Thesis: 'The character's change is driven by guilt, shown through three key moments...' then three PEE paragraphs tracking the arc.",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-es-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'thesis' in an essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The central argument or line" },
              { id: "b", text: "The first paragraph" },
              { id: "c", text: "A quotation" },
              { id: "d", text: "The word count" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Thesis",
                statement: "The central argument that guides the essay.",
              },
            ],
            steps: [
              {
                reasoning: "Thesis = your answer/line.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Central argument or line",
            commonErrors: ["Confusing thesis with topic."],
          },
        },
        {
          id: "cie-ol-fl-es-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 'P' stand for in PEE paragraph structure?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PEE",
                statement:
                  "Point, Evidence, Explanation — paragraph pattern for analysis.",
              },
            ],
            steps: [
              {
                reasoning: "P = Point: the claim this paragraph makes.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Correct identification.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Point — the claim the paragraph develops.",
            commonErrors: ["Confusing with Plot or Proof."],
          },
        },
        {
          id: "cie-ol-fl-es-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why should an essay introduction avoid plot summary?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Introduction purpose",
                statement:
                  "Intros establish the argument, not retell the story.",
              },
            ],
            steps: [
              {
                reasoning: "Summary wastes marks — examiners know the text.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "The intro should frame the question and state the thesis.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Early analysis demonstrates you can engage with the text critically.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear reasoning.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Summary wastes marks; intro should frame the question and thesis.",
            commonErrors: ["Retelling the plot 'to set the scene'."],
          },
        },
        {
          id: "cie-ol-fl-es-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Literature essay technique.",
          parts: [
            { label: "a", prompt: "Define 'thesis'.", marks: 1 },
            { label: "b", prompt: "Explain PEE structure.", marks: 3 },
            {
              label: "c",
              prompt: "What belongs in an introduction?",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Draft a thesis for: 'How does the writer create tension?'",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Essay technique",
                statement: "Thesis+PEE+intro+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Central argument/line of the essay.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "P=Point, E=Evidence (quotation), E=Explanation (effect).",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Each element explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Structure clear.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Frame the question, define terms, state thesis.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Avoid plot summary.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Purpose clear.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning:
                  "A thesis attempted, e.g. 'tension is built through delayed revelation and sensory detail'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Addresses the question directly.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Specific and arguable.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) argument (b) Point+Evidence+Explanation (c) frame+thesis (d) specific thesis",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "PEE explained.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Intro elements clear.",
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
                level: "Level 3",
                marks: "2-3",
                descriptor: "Strong thesis.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Attempted.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Plot summary disguised as introduction."],
          },
        },
      ],
    },
    {
      id: "cie-ol-fl-essay-analysis",
      title: "Analysing texts in essays",
      skill:
        "Integrate quotations, analyse technique and evaluate texts effectively.",
      lesson: {
        sections: [
          {
            heading: "Integrated quotation",
            body: "Weave short quotations into your sentences: 'The 'flickering candle' suggests...' rather than dropping a quote on its own line. Choose quotations that carry the most analytical weight — one well-explained quotation beats three unexplained.",
          },
          {
            heading: "Technique to effect",
            body: "Always move from device to effect: name the technique (metaphor, imagery, structural choice), quote evidence, then explain how it shapes meaning or reader response. 'The writer uses a metaphor' earns nothing; 'the metaphor of X suggests Y, making the reader feel Z' earns marks.",
          },
          {
            heading: "Evaluation",
            body: "Top-band essays evaluate: they judge how effectively the writer achieves their purpose, acknowledge complexity or ambiguity, and weigh different interpretations. 'The writer presents loss as...' can become 'this presentation is powerful because...'.",
          },
        ],
        keyFormulas: [
          {
            name: "Analysis chain",
            statement: "Device+evidence+effect+evaluation=top-band analysis.",
          },
        ],
        workedExample: {
          problem: "Weak: 'The writer uses imagery.' Strong version?",
          solution:
            "'The recurring imagery of fading light — 'the lamp gutters low' — suggests decline, reinforcing the theme of loss.'",
        },
      },
      questions: [
        {
          id: "cie-ol-fl-esa-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'integrated quotation'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Weaving a quotation into your own sentence" },
              { id: "b", text: "Quoting the whole text" },
              { id: "c", text: "Paraphrasing without credit" },
              { id: "d", text: "Using very long quotes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Integrated quotation",
                statement:
                  "Short quotes embedded grammatically in your own sentences.",
              },
            ],
            steps: [
              {
                reasoning: "Integration = quote inside your sentence.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Quote woven into your sentence",
            commonErrors: ["Dropping quotations as standalone lines."],
          },
        },
        {
          id: "cie-ol-fl-esa-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is 'the writer uses a metaphor' an incomplete analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Analysis completeness",
                statement:
                  "Naming a device without explaining effect earns little credit.",
              },
            ],
            steps: [
              {
                reasoning: "Device alone is identification, not analysis.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Must link to effect on meaning or reader.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "It identifies without explaining effect — analysis requires the how and why.",
            commonErrors: ["Feature-spotting instead of analysis."],
          },
        },
        {
          id: "cie-ol-fl-esa-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does evaluation raise an essay to the top band?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation",
                statement:
                  "Judging effectiveness and acknowledging complexity distinguishes top-band work.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evaluation judges how well the writer achieves purpose.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Acknowledging ambiguity or multiple interpretations shows sophistication.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Weighing techniques against each other demonstrates critical engagement.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Evaluation judges effectiveness and engages critically with complexity.",
            commonErrors: ["Describing techniques without judging them."],
          },
        },
        {
          id: "cie-ol-fl-esa-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Analysing texts in essays.",
          parts: [
            { label: "a", prompt: "What is integrated quotation?", marks: 1 },
            {
              label: "b",
              prompt: "Why must analysis move from device to effect?",
              marks: 3,
            },
            {
              label: "c",
              prompt: "How does evaluation differ from description?",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Improve: 'The writer uses a metaphor to describe the storm.'",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Text analysis",
                statement: "Quotation+effect+evaluation+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Quote embedded in your own sentence.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Device naming alone is identification.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Effect explains meaning/reader impact.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Marks reward analysis, not spotting.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning:
                  "Description states what happens; evaluation judges how well.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Evaluation weighs effectiveness and complexity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Clear distinction.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Improved version attempted with specific metaphor.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Explains effect on reader/meaning.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Analytical, not just descriptive.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) embedded quote (b) device→effect required (c) judgement vs description (d) analytical rewrite",
            levels: [
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Correct.",
                part: "a",
              },
              { level: "Level 1", marks: "0", descriptor: "Wrong.", part: "a" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Effect explained.",
                part: "b",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Partial.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Distinction clear.",
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
                level: "Level 3",
                marks: "2-3",
                descriptor: "Analytical rewrite.",
                part: "d",
              },
              {
                level: "Level 2",
                marks: "1",
                descriptor: "Attempted.",
                part: "d",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Feature-spotting without effect or evaluation."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cie-ol-fl-literature-notes",
      title: "Literature essay technique — revision notes",
      summary:
        "Thesis, PEE structure, integrated quotation, technique-to-effect analysis and evaluation.",
      sections: [
        {
          heading: "Structure",
          body: "Thesis-driven: intro frames question + states line; PEE paragraphs (Point, Evidence, Explanation, Link); conclusion synthesises. No plot summary.",
        },
        {
          heading: "Analysis",
          body: "Integrated quotations only. Chain: device → evidence → effect on meaning/reader. Name the technique, quote it, explain the effect.",
        },
        {
          heading: "Top band",
          body: "Evaluation: judge effectiveness, acknowledge complexity, weigh interpretations. 'This is powerful because...' beats 'this shows...'.",
        },
        {
          heading: "Exam checklist",
          body: "Is there a clear thesis? Does every paragraph make one analytical point? Are quotations integrated and explained? Does the conclusion synthesise rather than repeat?",
        },
      ],
    },
  ],
};
