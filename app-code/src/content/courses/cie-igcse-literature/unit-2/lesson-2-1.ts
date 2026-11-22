import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "cieilit-u2-lesson-2-1",
  code: "2-1",
  title: "Comparing texts and writing essays",
  goal: "I CAN compare two texts effectively and structure a literature essay.",
  standards: [
    "Cambridge IGCSE Literature in English 0475",
    "Section 2: Writing about literature",
  ],
  vocabulary: [
    {
      term: "Comparative essay",
      definition:
        "An essay analysing similarities and differences between two texts.",
    },
    {
      term: "Thesis",
      definition: "The central argument or claim your essay proves.",
    },
    {
      term: "PEE paragraph",
      definition:
        "Point + Evidence + Explanation — the basic analytical paragraph structure.",
    },
    {
      term: "Integrated comparison",
      definition:
        "Weaving both texts into each paragraph rather than treating them separately.",
    },
    {
      term: "Linking sentence",
      definition:
        "A sentence connecting analysis back to the essay's argument.",
    },
    {
      term: "Evaluation",
      definition: "Weighing interpretations to reach a supported judgement.",
    },
  ],
  concepts: [
    {
      id: "cieilit-u2-compare",
      title: "Comparison and essay structure",
      skill:
        "Write comparative essays using integrated analysis and clear structure.",
      lesson: {
        sections: [
          {
            heading: "Comparing texts",
            body: "Comparison is not 'Text A says X, Text B says Y' — it is integrated analysis: each paragraph should address BOTH texts on a shared theme or technique. Find meaningful points of similarity AND difference — how do both writers treat power, loss, identity? The best comparisons note not just what differs but WHY it differs.",
          },
          {
            heading: "Essay structure",
            body: "A strong essay has: a **thesis** (your argument — e.g. 'Both writers explore isolation but through contrasting methods'), **topic paragraphs** each with a clear point, **embedded evidence** (short quotes integrated into sentences), **analysis** (technique → effect → meaning), and a **conclusion** answering the question. Each paragraph should advance your argument.",
          },
          {
            heading: "The PEE method",
            body: "**Point**: state your analytical claim. **Evidence**: embed a short quote. **Explanation**: analyse how the writer's choices create meaning. Advanced essays add **Evaluation**: weigh alternative interpretations or significance. PEE prevents plot summary — the most common essay weakness.",
          },
        ],
        keyFormulas: [
          {
            name: "Integrated comparison",
            statement: "Each paragraph = both texts + shared point",
          },
          {
            name: "PEE chain",
            statement: "Point → Evidence → Explanation (→ Evaluation)",
          },
        ],
        workedExample: {
          problem:
            "Write a topic sentence comparing how two poems handle nature.",
          solution:
            "'While Poem A presents nature as a nurturing refuge, Poem B depicts it as indifferent and dangerous — both use imagery but to opposite effects.'",
        },
      },
      questions: [
        {
          id: "cieilit-u2-cmp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An 'integrated comparison' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comparing only the plots" },
              {
                id: "b",
                text: "Weaving both texts into each analytical point",
              },
              {
                id: "c",
                text: "Writing about Text A fully, then Text B fully",
              },
              { id: "d", text: "Listing similarities only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Integrated comparison",
                statement: "Both texts addressed within each analytical point.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Integrated comparison weaves both texts into each paragraph on a shared theme — not separate treatment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Weaving both texts into each analytical point.",
            commonErrors: ["Writing two separate essays — one per text."],
          },
        },
        {
          id: "cieilit-u2-cmp-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the PEE paragraph structure and why it prevents plot summary.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "PEE structure",
                statement:
                  "Point + Evidence + Explanation forces analysis over narration.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Point states an analytical claim; Evidence embeds a quote; Explanation analyses technique and effect.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Because each paragraph must explain HOW the quote creates meaning, it cannot just retell events.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Plot summary lacks the Explanation step — PEE makes analysis compulsory.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "PEE forces analysis — Point, Evidence, Explanation — making plot summary impossible without explanation.",
            commonErrors: [
              "Using PEE as Point-Evidence only, skipping Explanation.",
            ],
          },
        },
        {
          id: "cieilit-u2-cmp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What makes a good thesis statement for a comparative essay?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Thesis construction",
                statement:
                  "A debatable argument linking both texts, not a description.",
              },
            ],
            steps: [
              {
                reasoning:
                  "It states an argument — e.g. 'Both writers explore isolation but through contrasting methods' — not a summary.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It must cover BOTH texts — a thesis about only one text fails the comparative task.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It should be specific and debatable — provable through textual evidence, not obvious.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A debatable argument covering both texts — e.g. 'Both explore X but through contrasting methods.'",
            commonErrors: [
              "Writing a thesis that is just a topic or plot description.",
            ],
          },
        },
        {
          id: "cieilit-u2-cmp-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a paragraph plan for comparing how two poems present 'childhood'.",
          parts: [
            {
              label: "a",
              prompt: "Give a thesis for the comparison.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Plan three integrated paragraphs.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Essay planning",
                statement:
                  "Thesis + integrated points = structured comparison.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis example: 'Both poems present childhood as a site of loss — Poem A through nostalgia, Poem B through disillusionment.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Thesis links both texts and takes a position, not just a topic.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Para 1: imagery of childhood in both poems — how each uses sensory detail.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Para 2: tone and voice — nostalgic vs critical attitudes toward childhood.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Para 3: structure/ending — how each resolves (or refuses to resolve) the theme.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Each paragraph integrates both texts on a shared point — not separate treatment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Thesis linking both poems' treatment of childhood. (b) Three integrated paragraphs: imagery, tone, structure.",
            commonErrors: [
              "Planning one paragraph per text instead of thematic comparison.",
            ],
          },
        },
        {
          id: "cieilit-u2-cmp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Embedded evidence' in an essay means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Paraphrasing the text without quoting" },
              {
                id: "b",
                text: "Dropping quotations into a paragraph without comment",
              },
              { id: "c", text: "Placing all quotations in the introduction" },
              {
                id: "d",
                text: "Weaving short quotations into your own analytical sentences",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Embedded evidence",
                statement: "Short quotes integrated into sentences, followed by analysis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Embedded evidence weaves a brief quotation into your own sentence so the analysis flows — it is not dropped in or saved for later.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Weaving short quotations into your own analytical sentences.",
            commonErrors: [
              "Inserting long quotations as separate blocks — the examiner wants integration, not display.",
            ],
          },
        },
        {
          id: "cieilit-u2-cmp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 'linking sentence' in an essay serves to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Introduce an entirely new topic" },
              { id: "b", text: "List all the quotations used" },
              { id: "c", text: "Summarise the plot of the text" },
              {
                id: "d",
                text: "Connect your analysis back to the essay's argument",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Linking sentence",
                statement: "Connects analysis back to the essay's central argument.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Linking sentences show how each paragraph's analysis advances the thesis — they keep the essay coherent.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Connect your analysis back to the essay's argument.",
            commonErrors: [
              "Writing paragraphs that analyse in isolation without linking back to the thesis.",
            ],
          },
        },
        {
          id: "cieilit-u2-cmp-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the PEE structure, 'Evaluation' asks you to:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Weigh interpretations or judge the significance of your point",
              },
              { id: "b", text: "Retell the ending of the text" },
              { id: "c", text: "Define the key terms in the question" },
              { id: "d", text: "Count the techniques used by the writer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "PEE evaluation",
                statement:
                  "PEE can extend to PEEA — Evaluation weighs interpretations or significance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Evaluation adds judgement — weighing alternative readings or assessing how significant the point is to the whole text.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Weigh interpretations or judge the significance of your point.",
            commonErrors: [
              "Thinking evaluation means summarising what happens next in the plot.",
            ],
          },
        },
        {
          id: "cieilit-u2-cmp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The biggest weakness of a comparative essay that treats Text A and Text B separately is that it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is always too long" },
              { id: "b", text: "Uses too many quotations" },
              {
                id: "c",
                text: "Lacks integrated analysis of shared points between the texts",
              },
              { id: "d", text: "Forgets to include a thesis" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated comparison",
                statement: "Each paragraph = both texts + shared point.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Block comparison ('Text A says X, Text B says Y') describes rather than compares — the exam rewards integrated analysis.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(b) Lacks integrated analysis of shared points between the texts.",
            commonErrors: [
              "Believing separate treatment of each text still counts as comparison.",
            ],
          },
        },
        {
          id: "cieilit-u2-cmp-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A strong topic sentence for a comparative paragraph should:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Repeat the thesis statement word for word" },
              { id: "b", text: "Summarise Text A's plot in detail" },
              { id: "c", text: "Pose a rhetorical question to the reader" },
              {
                id: "d",
                text: "Name both texts and state the shared point being compared",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Topic sentence",
                statement:
                  "Signals the paragraph's shared comparative point across both texts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A topic sentence names both texts and states the point of comparison — e.g. 'While Text A..., Text B...' — orienting the whole paragraph.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "(a) Name both texts and state the shared point being compared.",
            commonErrors: [
              "Writing a topic sentence that covers only one text.",
            ],
          },
        },
        {
          id: "cieilit-u2-cmp-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many texts must a comparative essay address? Enter a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comparative essay",
                statement:
                  "Analyses similarities and differences between two texts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A comparative essay by definition addresses two texts — treating only one fails the task.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2",
            commonErrors: [
              "Writing a single-text essay when comparison is required.",
            ],
          },
        },
        {
          id: "cieilit-u2-cmp-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A strong essay plan includes a thesis, topic paragraphs, embedded evidence, analysis and a conclusion — how many components is that? Enter a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Essay structure",
                statement:
                  "Thesis + paragraphs + evidence + analysis + conclusion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Thesis (1), topic paragraphs (2), embedded evidence (3), analysis (4), conclusion (5) — five components.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "5",
            commonErrors: [
              "Forgetting the conclusion or the thesis when listing components.",
            ],
          },
        },
        {
          id: "cieilit-u2-cmp-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Answer both parts with numbers only.",
          parts: [
            {
              label: "a",
              prompt: "How many texts should each comparative paragraph address?",
              marks: 1,
            },
            {
              label: "b",
              prompt: "How many steps does the PEE chain contain?",
              marks: 1,
            },
          ],
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Integrated comparison and PEE",
                statement:
                  "Each paragraph covers both texts; PEE = Point, Evidence, Explanation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Integrated comparison means every paragraph analyses both texts on a shared point — 2 texts.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "PEE has three steps: Point, Evidence, Explanation (extended to PEEA with Evaluation).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 2  (b) 3",
            commonErrors: [
              "Counting PEEA as four steps when only PEE is asked.",
            ],
          },
        },
        {
          id: "cieilit-u2-cmp-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a standard five-paragraph essay, how many body paragraphs sit between the introduction and conclusion? Enter a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Essay structure",
                statement:
                  "Five-paragraph essay = introduction + 3 body paragraphs + conclusion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Five paragraphs minus introduction and conclusion leaves 3 body paragraphs.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "3",
            commonErrors: [
              "Counting the introduction or conclusion as body paragraphs.",
            ],
          },
        },
        {
          id: "cieilit-u2-cmp-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is comparing WHY two texts differ more rewarding than simply noting that they differ?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comparative depth",
                statement:
                  "Explaining causes of difference shows understanding of authorial choice.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Noting a difference ('Text A is hopeful, Text B is bleak') is description — it does not analyse.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Explaining WHY — e.g. 'Text A uses warm imagery while Text B uses harsh diction because their purposes differ' — links method to meaning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Causal comparison earns higher marks because it shows you understand each writer's choices, not just their effects.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Explaining why texts differ links authorial method to meaning — description of difference alone earns little.",
            commonErrors: [
              "Listing similarities and differences without explaining causes.",
            ],
          },
        },
        {
          id: "cieilit-u2-cmp-q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how to embed a quotation effectively in an analytical sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Embedded evidence",
                statement: "Quote briefly inside your own sentence, then analyse.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Keep the quotation short — only the words you will analyse — and weave it grammatically into your sentence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Introduce it with a signal verb ('the writer describes', 'she calls') so the quote belongs to your argument.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Follow the quote immediately with analysis — technique, effect, meaning — never leave the quote to speak for itself.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Embed a short quote grammatically, signal it, then analyse its technique and effect.",
            commonErrors: [
              "Quoting long passages or dropping quotes without analysis.",
            ],
          },
        },
        {
          id: "cieilit-u2-cmp-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Plan a comparative essay on how two novels present 'power'.",
          parts: [
            {
              label: "a",
              prompt: "Give a thesis linking both novels' treatment of power.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Plan three integrated paragraphs.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Essay planning",
                statement: "Thesis + integrated points = structured comparison.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Thesis example: 'Both novels explore power as corrupting — Novel A through political ambition, Novel B through personal relationships.'",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Thesis covers both texts, states a position, and names the shared theme.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Para 1: characterisation of power-holders in both novels — how each writer reveals authority through dialogue and action.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Para 2: imagery and setting — how each novel's description of powerful spaces or objects creates meaning.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Para 3: narrative voice and structure — how each novel's telling (order of events, perspective) shapes the reader's judgement of power.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Each paragraph integrates both texts on one shared point — not separate treatment.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Thesis covering both novels on power. (b) Three integrated paragraphs: characterisation, setting/imagery, narrative voice/structure.",
            commonErrors: [
              "Planning one paragraph per novel instead of thematic comparison.",
            ],
          },
        },
      ],
    },
  ],
};
