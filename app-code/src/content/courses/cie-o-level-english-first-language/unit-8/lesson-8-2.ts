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
              { id: "a", text: "The first paragraph" },
              { id: "b", text: "A quotation" },
              { id: "c", text: "The word count" },
              { id: "d", text: "The central argument or line" },
            ],
            correctChoiceId: "d",
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
        {
          id: "cie-ol-fl-es-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In PEEL paragraph structure, what does 'L' stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Link" },
              { id: "b", text: "List" },
              { id: "c", text: "Level" },
              { id: "d", text: "Length" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PEEL",
                statement:
                  "Point, Evidence, Explanation, Link — paragraph pattern for analysis.",
              },
            ],
            steps: [
              {
                reasoning: "L = Link: connect back to the thesis.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Link",
            commonErrors: ["Confusing PEEL with PEE only."],
          },
        },
        {
          id: "cie-ol-fl-es-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where should a thesis statement usually appear in an essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In the introduction" },
              { id: "b", text: "Only in the conclusion" },
              { id: "c", text: "In every paragraph" },
              { id: "d", text: "In a footnote" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis placement",
                statement:
                  "The thesis frames the essay and is stated in the introduction.",
              },
            ],
            steps: [
              {
                reasoning: "The intro frames the question and states the line.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** In the introduction",
            commonErrors: ["Hiding the argument until the conclusion."],
          },
        },
        {
          id: "cie-ol-fl-es-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is the strongest thesis for 'How does the writer create tension?'",
          response: {
            type: "mcq",
            choices: [
              { id: "a",
                text: "This essay will discuss tension in the text" },
              { id: "b", text: "Tension is important in literature" },
              {
                id: "c",
                text: "The writer builds tension through delayed revelation and sensory detail, making the reader share the character's uncertainty",
              },
              {
                id: "d",
                text: "The writer creates tension in many ways throughout the story",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis quality",
                statement:
                  "A strong thesis is specific, arguable and addresses the question directly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "(a) names techniques and their effect — specific and arguable.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "B–D are vague or generic and cannot guide paragraphs.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(a)** Specific, arguable thesis naming techniques",
            commonErrors: ["Choosing a thesis that merely restates the question."],
          },
        },
        {
          id: "cie-ol-fl-es-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should a literature essay conclusion do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Summarise the plot" },
              {
                id: "b",
                text: "Synthesise the points and restate the thesis in light of the evidence",
              },
              { id: "c", text: "Introduce a brand-new argument" },
              { id: "d", text: "Repeat the introduction word for word" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conclusion",
                statement:
                  "Conclusions synthesise points and restate the thesis — no new arguments or plot summary.",
              },
            ],
            steps: [
              {
                reasoning: "Synthesis shows how the points combine to answer the question.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "New arguments or summary waste the conclusion's function.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(a)** Synthesise and restate the thesis",
            commonErrors: ["Adding new material in the conclusion."],
          },
        },
        {
          id: "cie-ol-fl-es-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An essay plan has an introduction, three body paragraphs and a conclusion. How many paragraphs are planned?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Essay structure",
                statement: "Intro + body paragraphs + conclusion.",
              },
            ],
            steps: [
              {
                reasoning: "1 + 3 + 1 = 5 paragraphs.",
                working: "1 + 3 + 1 = 5",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "5",
            commonErrors: ["Forgetting the introduction and conclusion."],
          },
        },
        {
          id: "cie-ol-fl-es-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "A 20-mark essay allows 25 minutes. If you spend 5 minutes planning, how many minutes remain for writing?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Essay timing",
                statement: "Reserve planning time within the essay budget.",
              },
            ],
            steps: [
              {
                reasoning: "25 - 5 = 20 minutes for writing.",
                working: "25 - 5 = 20",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Planning prevents unfocused writing.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "20",
            commonErrors: ["Ignoring the planning time in the budget."],
          },
        },
        {
          id: "cie-ol-fl-es-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An essay has 4 paragraphs. Each paragraph needs a topic sentence and three supporting sentences. How many sentences are required?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 16 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph structure",
                statement: "Each paragraph = topic sentence + supporting sentences.",
              },
            ],
            steps: [
              {
                reasoning: "Each paragraph needs 1 + 3 = 4 sentences.",
                working: "1 + 3 = 4",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "4 x 4 = 16 sentences.",
                working: "4 x 4 = 16",
                marks: 2,
                markCode: "AO3",
              },
            ],
            finalAnswer: "16",
            commonErrors: ["Forgetting the topic sentences."],
          },
        },
        {
          id: "cie-ol-fl-es-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the function of the 'Link' in PEEL paragraph structure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "PEEL link",
                statement:
                  "The link connects the paragraph back to the thesis, maintaining argument flow.",
              },
            ],
            steps: [
              {
                reasoning: "The link shows how the point supports the thesis.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "It prevents paragraphs from feeling disconnected.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "The link ties the paragraph's point back to the thesis, keeping the argument coherent.",
            commonErrors: ["Omitting the link and ending paragraphs abruptly."],
          },
        },
        {
          id: "cie-ol-fl-es-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "What three things should a literature essay introduction contain?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Introduction",
                statement:
                  "Frame the question, define key terms, state the thesis — no plot summary.",
              },
            ],
            steps: [
              {
                reasoning: "Brief engagement with the question.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Definition of key terms or context.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Clear statement of the thesis.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Frame question + define terms + state thesis.",
            commonErrors: ["Retelling the plot instead of framing the argument."],
          },
        },
        {
          id: "cie-ol-fl-es-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A thesis reads: 'This essay will talk about the character.' Rewrite it as a strong, specific thesis for the question 'How does the character change?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis quality",
                statement:
                  "A strong thesis is specific, arguable and directly answers the question.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rewrite attempts a specific line, e.g. 'The character changes from fearful to resolute, driven by the loss of their home.'",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Directly addresses 'how the character changes'.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Specific enough to guide individual paragraphs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Arguable — open to evidence and analysis.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "E.g. 'The character's change from fearful to resolute is driven by loss and revealed through three key moments.'",
            commonErrors: ["Keeping the thesis vague or merely restating the question."],
          },
        },
        {
          id: "cie-ol-fl-es-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "How does a thesis statement guide the selection of paragraphs?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis as roadmap",
                statement:
                  "Every paragraph should make one point supporting the thesis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The thesis defines what counts as relevant material.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Each paragraph tests one aspect of the line — irrelevant points are excluded.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "The thesis acts as a filter — only points supporting the line earn a paragraph.",
            commonErrors: ["Writing paragraphs that drift from the thesis."],
          },
        },
        {
          id: "cie-ol-fl-es-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how PEE/PEEL paragraph structure prevents plot summary and promotes analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "PEE/PEEL",
                statement:
                  "Point-Evidence-Explanation-Link forces analysis rather than narration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Point must be an analytical claim, not a plot event.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Evidence is a short quotation chosen for analytical weight.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Explanation unpacks technique and effect — the analytical core.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Link returns to the thesis, preventing drift into summary.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "PEE/PEEL forces claims+evidence+explanation+link — analysis, not narration.",
            commonErrors: ["Using the structure but still narrating the plot."],
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
              { id: "a", text: "Paraphrasing without credit" },
              { id: "b", text: "Weaving a quotation into your own sentence" },
              { id: "c", text: "Quoting the whole text" },
              { id: "d", text: "Using very long quotes" },
            ],
            correctChoiceId: "b",
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
        {
          id: "cie-ol-fl-esa-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What makes a quotation 'integrated' in an essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It replaces your own words entirely" },
              { id: "b", text: "It is set on its own line" },
              {
                id: "c",
                text: "It is woven grammatically into your own sentence",
              },
              { id: "d", text: "It is very long" },
            ],
            correctChoiceId: "c",
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
                reasoning: "Integration means the quote sits inside your sentence.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Woven into your own sentence",
            commonErrors: ["Dropping quotations as standalone lines."],
          },
        },
        {
          id: "cie-ol-fl-esa-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the analysis chain 'device → evidence → effect', what comes immediately after naming the technique?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A new paragraph" },
              { id: "b", text: "A plot summary" },
              { id: "c", text: "The conclusion" },
              { id: "d", text: "A supporting quotation" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Analysis chain",
                statement: "Device → evidence → effect → evaluation.",
              },
            ],
            steps: [
              {
                reasoning: "Evidence (quotation) follows the named device.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** A supporting quotation",
            commonErrors: ["Skipping evidence and jumping to effect."],
          },
        },
        {
          id: "cie-ol-fl-esa-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is one well-explained quotation better than three unexplained ones?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Analysis depth matters more than quotation count",
              },
              { id: "b", text: "Examiners only allow one quotation" },
              { id: "c", text: "Quotations are optional" },
              { id: "d", text: "Longer essays always score lower" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Quotation selection",
                statement:
                  "Choose quotations carrying the most analytical weight; explain each fully.",
              },
            ],
            steps: [
              {
                reasoning: "Marks reward explained analysis, not quantity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Unexplained quotations are feature-spotting and earn little.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(a)** Analysis depth beats quotation count",
            commonErrors: ["Collecting quotations without explaining them."],
          },
        },
        {
          id: "cie-ol-fl-esa-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 'evaluation' require in a literature essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Summarising the plot" },
              { id: "b", text: "Listing every technique used" },
              {
                id: "c",
                text: "Judging how effectively the writer achieves their purpose",
              },
              { id: "d", text: "Quoting as much as possible" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation",
                statement:
                  "Evaluation judges effectiveness and engages with complexity.",
              },
            ],
            steps: [
              {
                reasoning: "Evaluation weighs how well techniques achieve effect.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "It goes beyond description to judgement.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "**(a)** Judging how effectively the writer achieves purpose",
            commonErrors: ["Describing techniques without judging them."],
          },
        },
        {
          id: "cie-ol-fl-esa-q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A 900-word essay may quote up to 10% of its length. How many words of quotation are allowed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 90 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Quotation budget",
                statement: "Quotations should be short and selective.",
              },
            ],
            steps: [
              {
                reasoning: "10% of 900 = 90 words.",
                working: "0.10 x 900 = 90",
                marks: 2,
                markCode: "AO3",
              },
            ],
            finalAnswer: "90",
            commonErrors: ["Calculating 10% as 10 words instead of 90."],
          },
        },
        {
          id: "cie-ol-fl-esa-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "An analysis paragraph has 8 sentences; 3 of them are quotations. How many sentences remain for explanation and evaluation?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analysis balance",
                statement: "Analysis needs more explanation than quotation.",
              },
            ],
            steps: [
              {
                reasoning: "8 - 3 = 5 sentences for analysis.",
                working: "8 - 3 = 5",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "The majority of the paragraph should analyse, not quote.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "5",
            commonErrors: ["Letting quotations dominate the paragraph."],
          },
        },
        {
          id: "cie-ol-fl-esa-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "An essay is worth 30 marks and analysis carries two-thirds of the marks. How many marks depend on analytical writing?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analysis weighting",
                statement: "Most marks reward analysis, not description or summary.",
              },
            ],
            steps: [
              {
                reasoning: "Two-thirds of 30 = 20 marks.",
                working: "(2/3) x 30 = 20",
                marks: 2,
                markCode: "AO3",
              },
              {
                reasoning: "Analysis should dominate effort in the essay.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "20",
            commonErrors: ["Confusing two-thirds with two marks out of three."],
          },
        },
        {
          id: "cie-ol-fl-esa-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rewrite 'The writer uses imagery.' as an analytical sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Analysis completeness",
                statement:
                  "Name the device, quote evidence, explain effect on meaning or reader.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Improved version, e.g. 'The recurring imagery of fading light — 'the lamp gutters low' — suggests decline.'",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Effect on meaning or reader explained.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "E.g. 'The imagery of fading light suggests decline, reinforcing the theme of loss.'",
            commonErrors: ["Adding more devices without explaining effect."],
          },
        },
        {
          id: "cie-ol-fl-esa-q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between describing a technique and analysing its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Technique vs analysis",
                statement:
                  "Description identifies what is there; analysis explains how and why it matters.",
              },
            ],
            steps: [
              {
                reasoning: "Description names the device: 'the writer uses a metaphor'.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Analysis explains effect on meaning or reader response.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear distinction between the two.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Description = what is there; analysis = how it shapes meaning and response.",
            commonErrors: ["Feature-spotting presented as analysis."],
          },
        },
        {
          id: "cie-ol-fl-esa-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student writes: 'The metaphor shows the storm was bad.' Improve it into a full device–evidence–effect analysis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Analysis chain",
                statement: "Device → evidence → effect → evaluation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Improved version identifies the metaphor specifically, e.g. 'the storm is 'a beast unchained''.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Evidence/quotation included.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Effect explained: the metaphor conveys violence and loss of control, heightening the reader's fear.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Analytical, not merely descriptive.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "E.g. 'The metaphor of the storm as 'a beast unchained' conveys violence and loss of control, making the reader share the character's fear.'",
            commonErrors: ["Improving wording but still giving no effect."],
          },
        },
        {
          id: "cie-ol-fl-esa-q15",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does evaluation add that description cannot?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation",
                statement:
                  "Evaluation judges effectiveness and engages with complexity — description cannot.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Description states what happens; evaluation judges how well.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Top-band essays weigh interpretations and acknowledge ambiguity.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Evaluation adds judgement — weighing effectiveness and complexity.",
            commonErrors: ["Stopping at description and calling it analysis."],
          },
        },
        {
          id: "cie-ol-fl-esa-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how acknowledging ambiguity or multiple interpretations can raise an essay to the top band.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Evaluation",
                statement:
                  "Sophisticated essays engage critically with complexity and ambiguity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Acknowledging ambiguity shows the text rewards close reading.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "Weighing different interpretations demonstrates critical engagement.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning:
                  "It distinguishes evaluative judgement from one-sided description.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear explanation of the band distinction.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Ambiguity and weighed interpretations signal critical, evaluative engagement — the top-band mark.",
            commonErrors: ["Forcing a single simple reading of a complex text."],
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
