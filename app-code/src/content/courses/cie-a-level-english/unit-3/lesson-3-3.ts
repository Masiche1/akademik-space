import type { Lesson } from "../../../types.ts";

export const lesson233: Lesson = {
  id: "cial-e-u3-lesson-3-3",
  code: "3-3",
  title: "Poetry essay technique",
  goal: "I CAN construct well-structured, evidence-based critical essays on poetry.",
  standards: ["9093: poetry essay technique"],
  vocabulary: [
    {
      term: "Thesis",
      definition: "A clear, arguable claim that guides the essay.",
    },
    {
      term: "PEE",
      definition:
        "Point, Evidence, Explanation — the basic analytical paragraph structure.",
    },
    {
      term: "Integrated quotation",
      definition:
        "Weaving short quotes into your own sentences rather than dropping them in.",
    },
    {
      term: "Evaluative conclusion",
      definition:
        "A final judgement on the poem's achievement, not just a summary.",
    },
    {
      term: "Zoom in",
      definition: "Close analysis of a single word or phrase.",
    },
    {
      term: "Coherence",
      definition: "Logical flow from one paragraph to the next.",
    },
  ],
  concepts: [
    {
      id: "cial-e-u3-poetry-essay",
      title: "Structuring poetry essays",
      skill:
        "Build essays with clear argument, integrated evidence and evaluation.",
      lesson: {
        sections: [
          {
            heading: "The thesis",
            body: "Start with an arguable claim about the poem: 'The poem explores loss through imagery of light and darkness.' This guides every paragraph. Avoid plot summary — argue an interpretation.",
          },
          {
            heading: "PEE paragraphs",
            body: "Point: make a claim about a technique or theme. Evidence: quote briefly and integrate it. Explanation: analyse how the technique creates meaning. Link back to thesis.",
          },
          {
            heading: "Evaluation and conclusion",
            body: "The strongest essays evaluate: is the poem effective? Does the technique succeed? End with a judgement — not a summary. 'Ultimately, the poem's power lies in...' demonstrates critical engagement.",
          },
        ],
        keyFormulas: [
          {
            name: "Essay structure",
            statement: "Thesis+PEE paragraphs+evaluation=effective essay.",
          },
        ],
        workedExample: {
          problem: "Write a thesis for a poem about nature.",
          solution:
            "'The poem uses natural imagery to explore human transience — the speaker's observation of decay becomes a meditation on mortality.'",
        },
      },
      questions: [
        {
          id: "cial-e-u3-pe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a thesis statement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A list of techniques" },
              { id: "b", text: "The poet's biography" },
              { id: "c", text: "A summary of the poem" },
              { id: "d", text: "A clear, arguable claim guiding the essay" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Thesis",
                statement: "Arguable claim guiding the essay.",
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
            commonErrors: ["Confusing with summary."],
          },
        },
        {
          id: "cial-e-u3-pe-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does PEE stand for in essay writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "PEE",
                statement: "Point, Evidence, Explanation.",
              },
            ],
            steps: [
              {
                reasoning: "Point: claim about technique/theme.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Evidence + Explanation follow.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Point, Evidence, Explanation.",
            commonErrors: ["Skipping explanation — just quoting."],
          },
        },
        {
          id: "cial-e-u3-pe-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is integrated quotation better than dropping quotes in?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Integrated quotation",
                statement:
                  "Weaving quotes into sentences shows control and analysis.",
              },
            ],
            steps: [
              {
                reasoning: "Shows control of language.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Avoids disjointed reading.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Forces analysis of word choice.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Integrated quotes show control and force analysis.",
            commonErrors: ["Long block quotes without analysis."],
          },
        },
        {
          id: "cial-e-u3-pe-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Poetry essay technique.",
          parts: [
            { label: "a", prompt: "What is a thesis?", marks: 1 },
            { label: "b", prompt: "What does PEE stand for?", marks: 2 },
            { label: "c", prompt: "Why integrate quotations?", marks: 3 },
            {
              label: "d",
              prompt: "Write a thesis for a poem about war.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Essay",
                statement: "Thesis+PEE+quotation+thesis writing.",
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
                reasoning: "Point, Evidence, Explanation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Structure explained.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Shows control.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Forces analysis.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              {
                part: "d",
                reasoning: "Thesis attempted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Arguable claim made.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Relates to war theme.",
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
              "(a) arguable claim (b) Point/Evidence/Explanation (c) control+analysis (d) war thesis",
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
                descriptor: "PEE explained.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Quotation explained.",
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
            commonErrors: ["Summary instead of argument."],
          },
        },
        {
          id: "cial-e-u3-pe-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a strong thesis do?",
          response: { type: "mcq", choices: [ { id: "a", text: "Retell the poem" }, { id: "b", text: "State the poet's age" }, { id: "c", text: "Present an arguable interpretive claim" }, { id: "d", text: "List every rhyme" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Thesis", statement: "An arguable claim guides the essay." }], steps: [{ reasoning: "A thesis argues an interpretation.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Arguable interpretive claim", commonErrors: ["Writing a summary instead of a claim."] },
        },
        {
          id: "cial-e-u3-pe-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the three parts of a PEE paragraph?",
          response: { type: "mcq", choices: [ { id: "a", text: "Point, evidence, explanation" }, { id: "b", text: "Question, answer, quote" }, { id: "c", text: "Plot, emotion, ending" }, { id: "d", text: "Poem, essay, poet" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "PEE", statement: "Point, evidence and explanation." }], steps: [{ reasoning: "PEE structures analytical paragraphs.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Point, evidence, explanation", commonErrors: ["Quoting without explanation."] },
        },
        {
          id: "cial-e-u3-pe-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why should quotations be brief and integrated?",
          response: { type: "mcq", choices: [ { id: "a", text: "Long quotes prove more" }, { id: "b", text: "They reduce marks" }, { id: "c", text: "They let analysis dominate and show control" }, { id: "d", text: "They remove the need for a thesis" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Integrated quotation", statement: "Short embedded quotes support analysis." }], steps: [{ reasoning: "Integration keeps argument central.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Analysis dominates", commonErrors: ["Using long block quotes without comment."] },
        },
        {
          id: "cial-e-u3-pe-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What should the conclusion of a poetry essay do?",
          response: { type: "mcq", choices: [ { id: "a", text: "Reach an evaluative judgement" }, { id: "b", text: "Summarise every point" }, { id: "c", text: "Introduce a new poem" }, { id: "d", text: "Repeat the thesis exactly" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Evaluative conclusion", statement: "A judgement demonstrates critical engagement." }], steps: [{ reasoning: "The conclusion should evaluate effectiveness.", marks: 1, markCode: "AO3" }], finalAnswer: "**(b)** Evaluative judgement", commonErrors: ["Ending with summary."] },
        },
        {
          id: "cial-e-u3-pe-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why should paragraphs link back to the thesis?",
          response: { type: "mcq", choices: [ { id: "a", text: "It maintains a coherent argument" }, { id: "b", text: "It makes the essay longer" }, { id: "c", text: "It repeats the same words" }, { id: "d", text: "It allows unrelated points" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Paragraph cohesion", statement: "Links keep analysis unified." }], steps: [{ reasoning: "Thesis links prevent fragmented analysis.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Maintains coherent argument", commonErrors: ["Writing paragraphs as isolated comments."] },
        },
        {
          id: "cial-e-u3-pe-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many parts does a PEE paragraph have?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "convention", name: "PEE", statement: "Point, evidence and explanation." }], steps: [{ reasoning: "PEE has three components.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Forgetting explanation."] },
        },
        {
          id: "cial-e-u3-pe-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many main components form the essay formula: thesis, PEE paragraphs and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "skill", name: "Essay formula", statement: "Thesis + PEE paragraphs + evaluation." }], steps: [{ reasoning: "Three components are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Omitting evaluation."] },
        },
        {
          id: "cial-e-u3-pe-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a PEE paragraph, how many stages come after the Point before explanation?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1 }] },
          markscheme: { principles: [{ kind: "convention", name: "PEE order", statement: "Point then evidence then explanation." }], steps: [{ reasoning: "Only evidence sits between point and explanation.", marks: 1, markCode: "AO1" }], finalAnswer: "1", commonErrors: ["Reversing evidence and explanation."] },
        },
        {
          id: "cial-e-u3-pe-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many functions should a conclusion perform ideally: judge effectiveness, refer to argument and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "skill", name: "Conclusion function", statement: "Judgement plus synthesis of the argument." }], steps: [{ reasoning: "Two functions are expected.", marks: 1, markCode: "AO3" }], finalAnswer: "2", commonErrors: ["Writing a conclusion that only repeats points."] },
        },
        {
          id: "cial-e-u3-pe-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a possible thesis for a poem about nature and human transience.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Thesis", statement: "Arguable claim linking technique to theme." }], steps: [{ reasoning: "A strong thesis makes an interpretive claim, e.g. natural imagery explores mortality.", marks: 2, markCode: "AO2" }], finalAnswer: "Example: 'The poem uses decaying natural imagery to meditate on human transience.'", commonErrors: ["Writing 'This poem is about nature'."] },
        },
        {
          id: "cial-e-u3-pe-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the difference between evidence and explanation in PEE.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "convention", name: "PEE distinction", statement: "Evidence is the quote; explanation is its analysed effect." }], steps: [{ reasoning: "A strong answer shows that quotation alone does not analyse meaning.", marks: 2, markCode: "AO2" }], finalAnswer: "Evidence supplies brief integrated quotation; explanation analyses how it creates meaning and links to the thesis.", commonErrors: ["Treating a quote as self-explanatory."] },
        },
        {
          id: "cial-e-u3-pe-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Evaluate why an essay should end with judgement rather than summary.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Evaluative ending", statement: "Judgement demonstrates critical engagement." }], steps: [{ reasoning: "A strong answer explains that evaluation shows the writer can weigh effectiveness, not just report content.", marks: 2, markCode: "AO3" }], finalAnswer: "A judgement-ending demonstrates critical engagement by assessing the poem's effectiveness rather than merely repeating points.", commonErrors: ["Summarising the essay in the final paragraph."] },
        },
      ],
    },
    {
      id: "cial-e-u3-poetry-practice",
      title: "Close reading and annotation",
      skill: "Annotate poems systematically to support analytical writing.",
      lesson: {
        sections: [
          {
            heading: "First reading",
            body: "Read for overall impression: subject, tone, mood. Note anything that strikes you — a powerful image, an unusual word, a structural feature. Don't analyse yet.",
          },
          {
            heading: "Annotation pass",
            body: "Underline key words; circle imagery; mark sound devices (alliteration, assonance); note structural features (volta, stanza breaks); identify shifts in tone or perspective.",
          },
          {
            heading: "Building the argument",
            body: "Group annotations into themes. Look for patterns — repeated images, recurring motifs. Form a thesis from the most significant pattern. This becomes your essay's backbone.",
          },
        ],
        keyFormulas: [
          {
            name: "Close reading",
            statement: "First read+annotate+pattern=thesis.",
          },
        ],
        workedExample: {
          problem: "Annotate a stanza with 'the moon a silver sword'.",
          solution:
            "Metaphor: moon as weapon — suggests danger or aggression. 'Silver' connotes coldness, clarity. Underline 'sword' as key image.",
        },
      },
      questions: [
        {
          id: "cial-e-u3-pr-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the purpose of the first reading of a poem?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "To get overall impression before detailed analysis",
              },
              { id: "b", text: "To count lines" },
              { id: "c", text: "To memorise it" },
              { id: "d", text: "To identify rhyme scheme only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "First reading",
                statement: "Overall impression before analysis.",
              },
            ],
            steps: [
              {
                reasoning: "First read = impression.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Overall impression",
            commonErrors: ["Analysing too early."],
          },
        },
        {
          id: "cial-e-u3-pr-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should you look for during the annotation pass?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Annotation",
                statement:
                  "Key words, imagery, sound devices, structure, tone shifts.",
              },
            ],
            steps: [
              {
                reasoning: "Any two: key words, imagery, sound, structure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Mark features systematically.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Key words, imagery, sound devices, structure, tone shifts.",
            commonErrors: ["Annotating everything without selectivity."],
          },
        },
        {
          id: "cial-e-u3-pr-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do annotations become an essay thesis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Pattern recognition",
                statement:
                  "Group annotations into themes; find patterns; form thesis.",
              },
            ],
            steps: [
              {
                reasoning: "Group annotations by theme.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Identify recurring patterns/motifs.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Thesis emerges from dominant pattern.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Annotations→themes→patterns→thesis.",
            commonErrors: ["Skipping pattern identification."],
          },
        },
        {
          id: "cial-e-u3-pr-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Close reading.",
          parts: [
            { label: "a", prompt: "Purpose of first reading?", marks: 1 },
            { label: "b", prompt: "What to annotate?", marks: 2 },
            {
              label: "c",
              prompt: "How do annotations become thesis?",
              marks: 3,
            },
            {
              label: "d",
              prompt:
                "Annotate 'the moon a silver sword' — identify and explain.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Close reading",
                statement: "Impression+annotation+pattern+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Overall impression.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Key words, imagery, sound, structure.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Systematic marking.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Group by theme.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Find patterns.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Thesis from pattern.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Metaphor identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Weapon imagery noted.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "'Silver' connotation explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Effect on mood clear.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) impression (b) annotate features (c) pattern→thesis (d) metaphor+weapon+silver",
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
                descriptor: "Features listed.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Process explained.",
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
                descriptor: "Effective annotation.",
                part: "d",
              },
              {
                level: "Level 3",
                marks: "2",
                descriptor: "Partial.",
                part: "d",
              },
              { level: "Level 2", marks: "1", descriptor: "Vague.", part: "d" },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "d" },
            ],
            commonErrors: ["Annotation without purpose."],
          },
        },
        {
          id: "cial-e-u3-pr-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should the first reading of a poem focus on?",
          response: { type: "mcq", choices: [ { id: "a", text: "Counting syllables" }, { id: "b", text: "Overall impression: subject, tone and mood" }, { id: "c", text: "Detailed technical analysis" }, { id: "d", text: "Memorising every word" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "skill", name: "First reading", statement: "Initial impression guides later analysis." }], steps: [{ reasoning: "First reading should not rush into analysis.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Overall impression", commonErrors: ["Analysing before forming an impression."] },
        },
        {
          id: "cial-e-u3-pr-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should annotation include?",
          response: { type: "mcq", choices: [ { id: "a", text: "The poet's biography" }, { id: "b", text: "A new thesis" }, { id: "c", text: "Key words, imagery, sound and structure" }, { id: "d", text: "Only difficult vocabulary" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Annotation", statement: "Mark words, images, sounds and structure." }], steps: [{ reasoning: "Annotation records features for later argument.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Key words, imagery, sound, structure", commonErrors: ["Annotating without a purpose."] },
        },
        {
          id: "cial-e-u3-pr-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "How should annotations be used after marking the poem?",
          response: { type: "mcq", choices: [ { id: "a", text: "Grouped into themes and patterns" }, { id: "b", text: "Ignored" }, { id: "c", text: "Used only for quotation" }, { id: "d", text: "Copied into a list" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Annotation to argument", statement: "Patterns become the thesis." }], steps: [{ reasoning: "Grouping reveals significant patterns.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Grouped into themes", commonErrors: ["Leaving annotations unconnected."] },
        },
        {
          id: "cial-e-u3-pr-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a motif in close reading?",
          response: { type: "mcq", choices: [ { id: "a", text: "The title" }, { id: "b", text: "A stanza break" }, { id: "c", text: "A single rhyme sound" }, { id: "d", text: "A recurring image or idea developing theme" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Motif", statement: "Recurring element developing meaning." }], steps: [{ reasoning: "Motifs repeat to build theme.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Recurring image or idea", commonErrors: ["Confusing motif with theme itself."] },
        },
        {
          id: "cial-e-u3-pr-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Where should a thesis come from in close reading?",
          response: { type: "mcq", choices: [ { id: "a", text: "The poet's nationality" }, { id: "b", text: "The first line only" }, { id: "c", text: "A dictionary definition" }, { id: "d", text: "The most significant pattern found in annotations" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "skill", name: "Thesis from pattern", statement: "Significant patterns support an arguable claim." }], steps: [{ reasoning: "The thesis emerges from evidence patterns.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Most significant pattern", commonErrors: ["Imposing a thesis before reading closely."] },
        },
        {
          id: "cial-e-u3-pr-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many stages are in close reading: first read, annotate, pattern and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "skill", name: "Close reading stages", statement: "First read + annotate + pattern + thesis." }], steps: [{ reasoning: "Four stages are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "4", commonErrors: ["Skipping the pattern stage."] },
        },
        {
          id: "cial-e-u3-pr-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many main annotation targets are named: key words, imagery, sound devices and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "technique", name: "Annotation targets", statement: "Key words, imagery, sound and structure." }], steps: [{ reasoning: "Four targets are named.", marks: 1, markCode: "AO1" }], finalAnswer: "4", commonErrors: ["Annotating only difficult words."] },
        },
        {
          id: "cial-e-u3-pr-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "In 'first read + annotate + pattern = thesis', how many preparatory stages precede the thesis?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "skill", name: "Close reading formula", statement: "First read, annotate and pattern lead to thesis." }], steps: [{ reasoning: "Three stages precede the thesis.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Counting the thesis as a stage."] },
        },
        {
          id: "cial-e-u3-pr-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many elements should be noted for shifts during annotation: tone, perspective and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "technique", name: "Shifts", statement: "Tone and perspective shifts." }], steps: [{ reasoning: "Two shift types are specified.", marks: 1, markCode: "AO1" }], finalAnswer: "2", commonErrors: ["Missing tonal or perspective shifts."] },
        },
        {
          id: "cial-e-u3-pr-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how annotation should support later analysis.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Annotation purpose", statement: "Marks become evidence for themes and thesis." }], steps: [{ reasoning: "A strong answer shows annotations grouped into patterns rather than treated as decoration.", marks: 2, markCode: "AO2" }], finalAnswer: "Annotation supports analysis by recording key features that can be grouped into themes and developed into a thesis.", commonErrors: ["Marking features without purpose."] },
        },
        {
          id: "cial-e-u3-pr-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how to turn repeated images into a thesis.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Pattern to thesis", statement: "Recurring imagery suggests a central idea." }], steps: [{ reasoning: "A strong answer identifies the repeated image, asks what it signifies and frames an arguable claim.", marks: 2, markCode: "AO2" }], finalAnswer: "Repeated images reveal a motif; the thesis argues what that motif suggests about the poem's meaning.", commonErrors: ["Listing images without forming a claim."] },
        },
        {
          id: "cial-e-u3-pr-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Evaluate why close reading should begin with impression rather than immediate analysis.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Reading sequence", statement: "Initial impression guides selective attention." }], steps: [{ reasoning: "A strong answer explains that first impressions help choose what to annotate and how to frame the argument.", marks: 2, markCode: "AO3" }], finalAnswer: "Starting with impression prevents premature judgement and helps the reader notice what is most significant before analysing.", commonErrors: ["Analysing every detail equally from the start."] },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u3-poetry-practice-notes",
      title: "Poetry essay technique — revision notes",
      summary: "Thesis, PEE, integrated quotation and close reading.",
      sections: [
        {
          heading: "Essay structure",
          body: "Thesis = arguable claim. PEE = Point, Evidence, Explanation. Integrated quotation = woven into sentences. Conclusion = evaluative judgement.",
        },
        {
          heading: "Close reading",
          body: "First read: impression. Annotation: key words, imagery, sound, structure. Pattern: group into themes → thesis.",
        },
        {
          heading: "Exam checklist",
          body: "Is there a clear thesis? Is evidence integrated? Is there evaluation? Does annotation lead to argument?",
        },
      ],
    },
  ],
};
