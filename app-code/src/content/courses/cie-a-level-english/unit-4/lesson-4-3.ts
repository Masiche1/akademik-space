import type { Lesson } from "../../../types.ts";

export const lesson243: Lesson = {
  id: "cial-e-u4-lesson-4-3",
  code: "4-3",
  title: "Prose essay technique and context",
  goal: "I CAN construct analytical essays on prose and use context effectively.",
  standards: ["9093: prose essay technique"],
  vocabulary: [
    {
      term: "Context",
      definition:
        "Historical, social, cultural circumstances shaping the text.",
    },
    {
      term: "Authorial intent",
      definition: "What the author aims to achieve or communicate.",
    },
    {
      term: "Close reading",
      definition: "Detailed analysis of specific passages.",
    },
    {
      term: "Evaluative judgement",
      definition: "Assessment of the text's effectiveness or achievement.",
    },
    {
      term: "Comparative prose",
      definition: "Analysis linking two prose texts.",
    },
    {
      term: "Intertextuality",
      definition: "References to other texts or traditions.",
    },
  ],
  concepts: [
    {
      id: "cial-e-u4-prose-essay",
      title: "Prose essay technique",
      skill: "Structure analytical prose essays with evidence and evaluation.",
      lesson: {
        sections: [
          {
            heading: "Essay structure",
            body: "Thesis: arguable claim about the prose. Paragraphs: PEE (Point, Evidence, Explanation) with integrated quotations. Conclusion: evaluative judgement. Weave analysis throughout — don't separate description from evaluation.",
          },
          {
            heading: "Using context",
            body: "Context illuminates: historical events, social attitudes, cultural references. But the text is primary evidence — context should explain, not replace analysis. 'In the context of...' introduces relevant background.",
          },
          {
            heading: "Close reading passages",
            body: "Select key passages for detailed analysis: a turning point, a revealing dialogue, a symbolic moment. Zoom in on word choice, imagery, structure. Short, integrated quotes are more effective than long extracts.",
          },
        ],
        keyFormulas: [
          {
            name: "Prose essay",
            statement:
              "Thesis+PEE+context+close reading+evaluation=effective essay.",
          },
        ],
        workedExample: {
          problem: "Write a thesis for a novel about class.",
          solution:
            "'The novel exposes the brutal economics of class through the protagonist's gradual disillusionment — money corrupts relationships and self-worth.'",
        },
      },
      questions: [
        {
          id: "cial-e-u4-pe-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a prose essay thesis do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Make an arguable claim guiding the essay" },
              { id: "b", text: "List characters" },
              { id: "c", text: "Describe the setting" },
              { id: "d", text: "Summarise the plot" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Arguable claim",
            commonErrors: ["Confusing with plot summary."],
          },
        },
        {
          id: "cial-e-u4-pe-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How should context be used in a prose essay?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Context",
                statement: "Illuminates but doesn't replace textual analysis.",
              },
            ],
            steps: [
              {
                reasoning: "Explains historical/social background.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Text remains primary evidence.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Context illuminates; text is primary evidence.",
            commonErrors: ["Context bolted on without analysis."],
          },
        },
        {
          id: "cial-e-u4-pe-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why are short integrated quotations more effective than long extracts?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Quotation",
                statement: "Integrated quotes show control and force analysis.",
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
                reasoning: "Forces word-level analysis.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Integrated quotes show control and force analysis.",
            commonErrors: ["Long block quotes without analysis."],
          },
        },
        {
          id: "cial-e-u4-pe-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Prose essay technique.",
          parts: [
            { label: "a", prompt: "Thesis purpose?", marks: 1 },
            { label: "b", prompt: "How to use context?", marks: 2 },
            { label: "c", prompt: "Why integrated quotations?", marks: 3 },
            {
              label: "d",
              prompt: "Write a thesis for a novel about war.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Essay",
                statement: "Thesis+context+quotation+thesis writing.",
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
                reasoning: "Illuminates background.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Text primary.",
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
                reasoning: "Arguable claim.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "War theme addressed.",
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
              "(a) arguable claim (b) illuminates (c) control+analysis (d) war thesis",
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
                descriptor: "Context explained.",
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
          id: "cial-e-u4-pe-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the role of the thesis in a prose essay?",
          response: { type: "mcq", choices: [ { id: "a", text: "To present an arguable claim guiding analysis" }, { id: "b", text: "To list characters" }, { id: "c", text: "To summarise the plot" }, { id: "d", text: "To describe the setting" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Thesis", statement: "An arguable claim organises interpretation." }], steps: [{ reasoning: "The thesis directs analytical argument.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Arguable guiding claim", commonErrors: ["Writing plot summary instead of argument."] },
        },
        {
          id: "cial-e-u4-pe-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the three parts of a PEE paragraph?",
          response: { type: "mcq", choices: [ { id: "a", text: "Plot, emotion, ending" }, { id: "b", text: "Character, setting, theme" }, { id: "c", text: "Introduction, body, conclusion" }, { id: "d", text: "Point, evidence, explanation" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "convention", name: "PEE", statement: "Point, evidence and explanation." }], steps: [{ reasoning: "PEE structures analytical paragraphs.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Point, evidence, explanation", commonErrors: ["Quoting without explanation."] },
        },
        {
          id: "cial-e-u4-pe-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "How should quotations be used in a prose essay?",
          response: { type: "mcq", choices: [ { id: "a", text: "Only at the end" }, { id: "b", text: "Without comment" }, { id: "c", text: "As long extracts" }, { id: "d", text: "Short and integrated into analysis" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Integrated quotation", statement: "Brief quotes support analysis rather than replace it." }], steps: [{ reasoning: "Short integration keeps argument central.", marks: 1, markCode: "AO2" }], finalAnswer: "**(d)** Short and integrated", commonErrors: ["Using long block quotes."] },
        },
        {
          id: "cial-e-u4-pe-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the correct role of context?",
          response: { type: "mcq", choices: [ { id: "a", text: "It is optional decoration" }, { id: "b", text: "It illuminates while the text remains primary evidence" }, { id: "c", text: "It proves the thesis automatically" }, { id: "d", text: "It replaces textual analysis" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "skill", name: "Context use", statement: "Context explains; text is primary." }], steps: [{ reasoning: "Context should support, not substitute for, analysis.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Illuminates text", commonErrors: ["Bolting on context without analysis."] },
        },
        {
          id: "cial-e-u4-pe-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which passage is best for close reading?",
          response: { type: "mcq", choices: [ { id: "a", text: "The title page" }, { id: "b", text: "A random middle paragraph" }, { id: "c", text: "A turning point, revealing dialogue or symbolic moment" }, { id: "d", text: "A routine description" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "skill", name: "Close reading passage", statement: "Significant moments repay detailed analysis." }], steps: [{ reasoning: "Key passages carry interpretive weight.", marks: 1, markCode: "AO2" }], finalAnswer: "**(c)** Turning point or symbolic moment", commonErrors: ["Analysing unimportant passages in detail."] },
        },
        {
          id: "cial-e-u4-pe-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many components form the prose essay formula: thesis, PEE, context, close reading and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "skill", name: "Prose essay formula", statement: "Thesis + PEE + context + close reading + evaluation." }], steps: [{ reasoning: "Five components are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "5", commonErrors: ["Omitting evaluation."] },
        },
        {
          id: "cial-e-u4-pe-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many parts does a PEE paragraph have?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "convention", name: "PEE", statement: "Point, evidence and explanation." }], steps: [{ reasoning: "PEE has three parts.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Skipping explanation."] },
        },
        {
          id: "cial-e-u4-pe-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many types of context are named: historical, social, cultural and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "definition", name: "Context types", statement: "Historical, social, cultural and biographical." }], steps: [{ reasoning: "Four context types are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "4", commonErrors: ["Forgetting biographical context."] },
        },
        {
          id: "cial-e-u4-pe-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In close reading a passage, how many features are zoomed in on: word choice, imagery and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "technique", name: "Close reading focus", statement: "Word choice, imagery and structure." }], steps: [{ reasoning: "Three features are named.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Staying at plot level."] },
        },
        {
          id: "cial-e-u4-pe-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a possible thesis for a novel exposing class through disillusionment.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Thesis", statement: "Arguable claim linking technique to theme." }], steps: [{ reasoning: "A strong thesis makes an interpretive claim, e.g. the novel exposes the economics of class.", marks: 2, markCode: "AO2" }], finalAnswer: "Example: 'The novel exposes the brutal economics of class through the protagonist's disillusionment.'", commonErrors: ["Writing 'This novel is about class'."] },
        },
        {
          id: "cial-e-u4-pe-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how context can illuminate without replacing analysis.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Context use", statement: "Context explains attitudes; text remains evidence." }], steps: [{ reasoning: "A strong answer links historical or social background to a specific textual detail.", marks: 2, markCode: "AO2" }], finalAnswer: "Context illuminates when background explains a detail or attitude, while interpretation remains anchored in the text.", commonErrors: ["Adding context with no textual link."] },
        },
        {
          id: "cial-e-u4-pe-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Evaluate why short integrated quotations are more effective.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Quotation control", statement: "Embedded quotes keep analysis dominant." }], steps: [{ reasoning: "A strong answer explains that long extracts shift focus from argument to quotation.", marks: 2, markCode: "AO3" }], finalAnswer: "Short integrated quotations keep the writer's analysis dominant and demonstrate control over evidence.", commonErrors: ["Assuming longer quotes equal stronger evidence."] },
        },
      ],
    },
    {
      id: "cial-e-u4-prose-context",
      title: "Context and comparative prose",
      skill: "Use context and construct comparative analyses of prose texts.",
      lesson: {
        sections: [
          {
            heading: "Contextual analysis",
            body: "Historical context: wars, movements, events shaping attitudes. Social context: class, gender, race, power. Cultural context: traditions, values, references. Biographical: author's life experiences.",
          },
          {
            heading: "Comparative prose",
            body: "Weave comparison throughout — don't write two separate essays. Compare: themes, characterisation, narrative voice, structure, context. Reach a judgement on which is more effective.",
          },
          {
            heading: "Critical perspectives",
            body: "Feminist, Marxist, postcolonial readings offer lenses. Apply consistently but acknowledge the text's primary evidence. Different perspectives reveal different aspects.",
          },
        ],
        keyFormulas: [
          {
            name: "Prose context",
            statement: "Context+comparison+perspective=depth of analysis.",
          },
        ],
        workedExample: {
          problem: "Compare two novels about colonialism.",
          solution:
            "Both explore power dynamics; one through indigenous voice, other through coloniser's guilt. Compare narrative perspective and historical context.",
        },
      },
      questions: [
        {
          id: "cial-e-u4-pc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'context' in prose analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The plot" },
              { id: "b", text: "The characters" },
              {
                id: "c",
                text: "Historical, social and cultural circumstances",
              },
              { id: "d", text: "The genre" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Context",
                statement: "Historical, social, cultural circumstances.",
              },
            ],
            steps: [
              {
                reasoning: "Context = circumstances.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Historical/social/cultural circumstances",
            commonErrors: ["Confusing with plot."],
          },
        },
        {
          id: "cial-e-u4-pc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the main danger in comparative prose essays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Comparison",
                statement: "Weave throughout; don't write two separate essays.",
              },
            ],
            steps: [
              {
                reasoning: "Separate analyses = main pitfall.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Comparison should be integrated.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Writing two separate analyses instead of comparing.",
            commonErrors: ["Treating comparison as two essays."],
          },
        },
        {
          id: "cial-e-u4-pc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How do critical perspectives enhance prose analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Critical perspectives",
                statement: "Lenses reveal different aspects of text.",
              },
            ],
            steps: [
              {
                reasoning: "Feminist/Marxist etc. offer lenses.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Reveal different aspects.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Text remains primary evidence.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Perspectives offer lenses revealing different aspects.",
            commonErrors: ["Applying theory without textual evidence."],
          },
        },
        {
          id: "cial-e-u4-pc-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Context and comparison.",
          parts: [
            { label: "a", prompt: "Define context.", marks: 1 },
            { label: "b", prompt: "Main danger in comparison?", marks: 2 },
            {
              label: "c",
              prompt: "How do perspectives enhance analysis?",
              marks: 3,
            },
            {
              label: "d",
              prompt: "Compare two prose texts on a theme.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Context/comparison",
                statement: "Context+comparison+perspective+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Historical/social/cultural.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Separate analyses.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Should be integrated.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Lenses reveal aspects.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Text primary.",
                marks: 1,
                markCode: "AO2",
              },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "AO3" },
              {
                part: "d",
                reasoning: "Theme identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Both texts addressed.",
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
              "(a) circumstances (b) separate analyses (c) lenses (d) comparative prose",
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
                descriptor: "Danger identified.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Perspectives explained.",
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
                descriptor: "Effective comparison.",
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
            commonErrors: ["Two separate analyses."],
          },
        },
        {
          id: "cial-e-u4-pc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which set best defines context in prose analysis?",
          response: { type: "mcq", choices: [ { id: "a", text: "Historical, social, cultural and biographical circumstances" }, { id: "b", text: "The chapter headings" }, { id: "c", text: "Only the plot" }, { id: "d", text: "Only character names" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "definition", name: "Context", statement: "Historical, social, cultural and biographical circumstances." }], steps: [{ reasoning: "Context includes multiple surrounding factors.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Historical, social, cultural, biographical", commonErrors: ["Reducing context to plot."] },
        },
        {
          id: "cial-e-u4-pc-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main structural rule for comparative prose?",
          response: { type: "mcq", choices: [ { id: "a", text: "Avoid judgement" }, { id: "b", text: "Write two separate essays" }, { id: "c", text: "Compare only titles" }, { id: "d", text: "Weave comparison throughout" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "skill", name: "Comparative prose", statement: "Comparison should be integrated point by point." }], steps: [{ reasoning: "Weaving creates genuine comparison.", marks: 1, markCode: "AO1" }], finalAnswer: "**(d)** Weave comparison throughout", commonErrors: ["Writing two disconnected analyses."] },
        },
        {
          id: "cial-e-u4-pc-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which perspectives are offered as critical lenses?",
          response: { type: "mcq", choices: [ { id: "a", text: "Only punctuation" }, { id: "b", text: "Feminist, Marxist and postcolonial readings" }, { id: "c", text: "Only plot summary" }, { id: "d", text: "Only spelling" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Critical perspectives", statement: "Theoretical lenses direct interpretation." }], steps: [{ reasoning: "Lenses offer focused interpretive angles.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Feminist, Marxist, postcolonial", commonErrors: ["Treating theory as proof."] },
        },
        {
          id: "cial-e-u4-pc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a valid point of comparison for prose?",
          response: { type: "mcq", choices: [ { id: "a", text: "Only word count" }, { id: "b", text: "Only cover colour" }, { id: "c", text: "Only publication date" }, { id: "d", text: "Narrative voice or structure" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "technique", name: "Prose comparison", statement: "Compare themes, characterisation, voice, structure and context." }], steps: [{ reasoning: "Voice and structure are meaningful comparative points.", marks: 1, markCode: "AO2" }], finalAnswer: "**(d)** Narrative voice or structure", commonErrors: ["Comparing irrelevant surface details."] },
        },
        {
          id: "cial-e-u4-pc-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What should a comparative prose essay reach in conclusion?",
          response: { type: "mcq", choices: [ { id: "a", text: "A new context" }, { id: "b", text: "No judgement" }, { id: "c", text: "A summary of both plots" }, { id: "d", text: "A judgement on which text is more effective" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "skill", name: "Comparative judgement", statement: "Evaluation should weigh effectiveness." }], steps: [{ reasoning: "A judgement demonstrates critical engagement.", marks: 1, markCode: "AO3" }], finalAnswer: "**(d)** Judgement on effectiveness", commonErrors: ["Stopping at comparison without evaluation."] },
        },
        {
          id: "cial-e-u4-pc-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many types of context are named: historical, social, cultural and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "definition", name: "Context types", statement: "Historical, social, cultural and biographical." }], steps: [{ reasoning: "Four context types are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "4", commonErrors: ["Omitting biographical context."] },
        },
        {
          id: "cial-e-u4-pc-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many aspects are recommended for comparative prose: themes, characterisation, narrative voice, structure and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 5 }] },
          markscheme: { principles: [{ kind: "technique", name: "Comparison aspects", statement: "Theme, characterisation, voice, structure and context." }], steps: [{ reasoning: "Five aspects are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "5", commonErrors: ["Comparing only theme."] },
        },
        {
          id: "cial-e-u4-pc-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many critical perspectives are named: feminist, Marxist and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "definition", name: "Critical perspectives", statement: "Feminist, Marxist and postcolonial." }], steps: [{ reasoning: "Three perspectives are named.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Forgetting postcolonial reading."] },
        },
        {
          id: "cial-e-u4-pc-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many components form the context formula: context, comparison and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "skill", name: "Prose context formula", statement: "Context + comparison + perspective." }], steps: [{ reasoning: "Three components are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Omitting perspective."] },
        },
        {
          id: "cial-e-u4-pc-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how context should be used in prose analysis.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Context use", statement: "Context illuminates but text is primary." }], steps: [{ reasoning: "A strong answer links historical, social or cultural background to specific textual evidence.", marks: 2, markCode: "AO2" }], finalAnswer: "Context should explain attitudes and references while every interpretive claim remains grounded in the text.", commonErrors: ["Writing context without textual support."] },
        },
        {
          id: "cial-e-u4-pc-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain how to weave comparison in a prose essay.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Weaving comparison", statement: "Compare both texts under each point." }], steps: [{ reasoning: "A strong answer uses connectives and integrated discussion rather than separate blocks.", marks: 2, markCode: "AO2" }], finalAnswer: "Weave comparison by discussing both texts under shared points such as theme, voice or structure, using connectives.", commonErrors: ["Writing two separate analyses."] },
        },
        {
          id: "cial-e-u4-pc-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Evaluate the value of a critical perspective in prose analysis.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Critical perspective", statement: "Lenses reveal aspects while text remains evidence." }], steps: [{ reasoning: "A strong answer shows how a lens directs attention but should not override textual evidence.", marks: 2, markCode: "AO3" }], finalAnswer: "A critical perspective reveals particular aspects of power, class or gender, but it should be applied consistently without ignoring the text.", commonErrors: ["Forcing all details into one theory."] },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u4-prose-context-notes",
      title: "Prose context and comparison — revision notes",
      summary:
        "Contextual analysis, comparative prose and critical perspectives.",
      sections: [
        {
          heading: "Context",
          body: "Historical, social, cultural, biographical. Illuminates but text is primary evidence. Use 'in the context of...' carefully.",
        },
        {
          heading: "Comparison",
          body: "Weave throughout — compare theme, characterisation, voice, structure, context. Reach evaluative judgement.",
        },
        {
          heading: "Exam checklist",
          body: "Is context textually grounded? Is comparison integrated? Is there a clear judgement?",
        },
      ],
    },
  ],
};
