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
              { id: "a", text: "A clear, arguable claim guiding the essay" },
              { id: "b", text: "A summary of the poem" },
              { id: "c", text: "A list of techniques" },
              { id: "d", text: "The poet's biography" },
            ],
            correctChoiceId: "a",
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
              { id: "b", text: "To memorise it" },
              { id: "c", text: "To count lines" },
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
