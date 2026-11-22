import type { Lesson } from "../../../types.ts";

export const lesson232: Lesson = {
  id: "cial-e-u3-lesson-3-2",
  code: "3-2",
  title: "Poetry: context, criticism and comparison",
  goal: "I CAN place poems in context and construct comparative critical arguments.",
  standards: ["9093: poetry analysis"],
  vocabulary: [
    {
      term: "Context",
      definition:
        "The historical, social, cultural and biographical circumstances surrounding a poem.",
    },
    {
      term: "Critical perspective",
      definition:
        "A lens for interpretation: feminist, Marxist, psychoanalytic, postcolonial.",
    },
    {
      term: "Comparative analysis",
      definition: "Examining similarities and differences between two poems.",
    },
    {
      term: "Intertextuality",
      definition: "References to other texts or traditions within a poem.",
    },
    {
      term: "Ambiguity",
      definition: "Multiple valid interpretations of a text.",
    },
    {
      term: "Paradox",
      definition: "A statement that seems contradictory but reveals truth.",
    },
  ],
  concepts: [
    {
      id: "cial-e-u3-poetry-context",
      title: "Context and critical perspectives",
      skill: "Use context and critical theory to deepen poetry analysis.",
      lesson: {
        sections: [
          {
            heading: "Historical and social context",
            body: "Poems respond to their times: war, industrialisation, colonialism, gender roles. Context illuminates allusions and explains attitudes. But the poem is the primary evidence — context should illuminate, not replace analysis.",
          },
          {
            heading: "Critical perspectives",
            body: "Feminist criticism examines gender and power. Marxist criticism examines class and economics. Psychoanalytic criticism explores unconscious desires. Postcolonial criticism examines imperialism and identity. Each offers a lens, not a definitive reading.",
          },
          {
            heading: "Ambiguity and paradox",
            body: "Great poetry resists single interpretations. Paradox — 'less is more' — reveals complexity. Ambiguity invites multiple readings; acknowledging this demonstrates sophisticated critical engagement.",
          },
        ],
        keyFormulas: [
          {
            name: "Poetry context",
            statement:
              "Context+critical lens+ambiguity=depth of interpretation.",
          },
        ],
        workedExample: {
          problem:
            "How might a feminist reading differ from a Marxist reading of the same poem?",
          solution:
            "Feminist focuses on gender dynamics and patriarchy; Marxist on class struggle and economic conditions. Same text, different emphasis.",
        },
      },
      questions: [
        {
          id: "cial-e-u3-pc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'context' in poetry analysis?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The historical and social circumstances surrounding the poem",
              },
              { id: "b", text: "The poet's name" },
              { id: "c", text: "The poem's length" },
              { id: "d", text: "The poem's rhyme scheme" },
            ],
            correctChoiceId: "a",
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
                reasoning: "Context = circumstances, not form.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Historical/social circumstances",
            commonErrors: ["Confusing with form or structure."],
          },
        },
        {
          id: "cial-e-u3-pc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a 'critical perspective' in poetry analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Critical perspective",
                statement:
                  "A lens (feminist, Marxist, etc.) for interpretation.",
              },
            ],
            steps: [
              {
                reasoning: "A critical perspective is a lens/theory.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "It shapes which aspects are emphasised.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "A lens for interpretation — e.g. feminist, Marxist.",
            commonErrors: ["Thinking it's just personal opinion."],
          },
        },
        {
          id: "cial-e-u3-pc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does acknowledging ambiguity strengthen a poetry analysis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Ambiguity",
                statement:
                  "Multiple valid readings demonstrate sophistication.",
              },
            ],
            steps: [
              {
                reasoning: "Shows awareness of complexity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Avoids reductive single reading.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Invites deeper engagement.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Acknowledging ambiguity shows sophistication and avoids oversimplification.",
            commonErrors: ["Forcing a single 'correct' interpretation."],
          },
        },
        {
          id: "cial-e-u3-pc-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Context and criticism.",
          parts: [
            { label: "a", prompt: "Define context in poetry.", marks: 1 },
            { label: "b", prompt: "What is a critical perspective?", marks: 2 },
            { label: "c", prompt: "Why acknowledge ambiguity?", marks: 3 },
            {
              label: "d",
              prompt: "Explain how context illuminates a poem.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Poetry criticism",
                statement: "Context+perspective+ambiguity+application.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Historical/social circumstances.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "A lens for interpretation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Shapes emphasis.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Shows complexity.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Avoids oversimplification.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Deeper engagement.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Context identified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Allusion explained.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Attitude clarified.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Link to text clear.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) circumstances (b) lens (c) sophistication (d) context application",
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
                descriptor: "Perspective explained.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Ambiguity explained.",
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
                descriptor: "Context applied.",
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
            commonErrors: ["Context bolted on without textual evidence."],
          },
        },
        {
          id: "cial-e-u3-pc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the primary evidence in poetry analysis?",
          response: { type: "mcq", choices: [ { id: "a", text: "Historical dates" }, { id: "b", text: "The poet's biography" }, { id: "c", text: "A critical theory" }, { id: "d", text: "The poem itself" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "skill", name: "Primary evidence", statement: "The text is primary; context illuminates." }], steps: [{ reasoning: "Analysis must remain anchored in the poem.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** The poem itself", commonErrors: ["Letting context replace textual analysis."] },
        },
        {
          id: "cial-e-u3-pc-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a critical perspective or lens?",
          response: { type: "mcq", choices: [ { id: "a", text: "A type of rhyme" }, { id: "b", text: "A fixed correct reading" }, { id: "c", text: "A framework such as feminist or Marxist criticism" }, { id: "d", text: "A summary of the plot" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Critical lens", statement: "A viewpoint that directs attention to specific concerns." }], steps: [{ reasoning: "Lenses focus interpretation without determining it.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** A critical framework", commonErrors: ["Treating a lens as the only valid reading."] },
        },
        {
          id: "cial-e-u3-pc-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does paradox do in poetry?",
          response: { type: "mcq", choices: [ { id: "a", text: "Reveals complexity through apparently contradictory ideas" }, { id: "b", text: "Proves the poem is logical" }, { id: "c", text: "Changes the rhyme scheme" }, { id: "d", text: "Removes all ambiguity" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Paradox", statement: "Contradictory statements can expose deeper truth." }], steps: [{ reasoning: "Paradox holds tension between opposing ideas.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Reveals complexity", commonErrors: ["Treating paradox as a mistake."] },
        },
        {
          id: "cial-e-u3-pc-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How would a feminist reading differ from a Marxist reading?",
          response: { type: "mcq", choices: [ { id: "a", text: "Feminist focuses on gender/power; Marxist on class/economics" }, { id: "b", text: "They would be identical" }, { id: "c", text: "Marxist ignores the text" }, { id: "d", text: "Feminist only counts lines" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "comparison", name: "Critical lenses", statement: "Different theories emphasise different concerns." }], steps: [{ reasoning: "Each lens prioritises different social questions.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Gender/power vs class/economics", commonErrors: ["Applying one lens mechanically to all questions."] },
        },
        {
          id: "cial-e-u3-pc-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why should ambiguity be acknowledged in critical analysis?",
          response: { type: "mcq", choices: [ { id: "a", text: "It makes poems shorter" }, { id: "b", text: "It removes the need for evidence" }, { id: "c", text: "It proves the text is bad" }, { id: "d", text: "It demonstrates sophisticated engagement with multiple meanings" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "skill", name: "Ambiguity", statement: "Multiple defensible readings show critical depth." }], steps: [{ reasoning: "Acknowledging ambiguity reflects careful interpretation.", marks: 1, markCode: "AO3" }], finalAnswer: "**(b)** Sophisticated critical engagement", commonErrors: ["Forcing a single simplistic reading."] },
        },
        {
          id: "cial-e-u3-pc-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many critical perspectives are named: feminist, Marxist, psychoanalytic and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "definition", name: "Critical perspectives", statement: "Feminist, Marxist, psychoanalytic and postcolonial." }], steps: [{ reasoning: "Four perspectives are named.", marks: 1, markCode: "AO1" }], finalAnswer: "4", commonErrors: ["Omitting postcolonial criticism."] },
        },
        {
          id: "cial-e-u3-pc-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many broad types of evidence should balance in analysis: the poem and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "skill", name: "Evidence balance", statement: "Textual evidence and contextual information." }], steps: [{ reasoning: "Two evidence types are balanced.", marks: 1, markCode: "AO1" }], finalAnswer: "2", commonErrors: ["Using context without text."] },
        },
        {
          id: "cial-e-u3-pc-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many components are in 'context + critical lens + ambiguity'?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "skill", name: "Depth formula", statement: "Context + critical lens + ambiguity = depth." }], steps: [{ reasoning: "Three components form the formula.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Ignoring ambiguity as a concept."] },
        },
        {
          id: "cial-e-u3-pc-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many major social forces are named as poetic contexts: war, industrialisation, colonialism and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4 }] },
          markscheme: { principles: [{ kind: "context", name: "Historical pressures", statement: "War, industrialisation, colonialism and gender roles." }], steps: [{ reasoning: "Four contextual pressures are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "4", commonErrors: ["Treating context as only dates."] },
        },
        {
          id: "cial-e-u3-pc-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how context should illuminate rather than replace analysis.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Context use", statement: "Context explains allusions and attitudes but the poem remains evidence." }], steps: [{ reasoning: "A strong answer shows contextual detail supporting a textual claim, not substituting for it.", marks: 2, markCode: "AO2" }], finalAnswer: "Context should clarify meanings in the poem while every interpretive claim remains anchored in textual evidence.", commonErrors: ["Bolting on historical facts without analysis."] },
        },
        {
          id: "cial-e-u3-pc-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain why a critical lens is a perspective, not a definitive answer.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Critical lens", statement: "Lenses direct attention but do not exhaust meaning." }], steps: [{ reasoning: "A strong answer shows that theory highlights certain concerns while other readings remain possible.", marks: 2, markCode: "AO3" }], finalAnswer: "A critical lens focuses attention on issues such as gender or class, but it offers one interpretive angle rather than the only truth.", commonErrors: ["Forcing every detail into one theory."] },
        },
        {
          id: "cial-e-u3-pc-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Evaluate the value of ambiguity in sophisticated poetry.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Ambiguity value", statement: "Open meanings reward rereading and critical engagement." }], steps: [{ reasoning: "A strong answer balances richness against the need for evidence-based interpretation.", marks: 2, markCode: "AO3" }], finalAnswer: "Ambiguity adds depth and multiple readings, but it should be supported by textual evidence rather than treated as licence for any claim.", commonErrors: ["Either dismissing ambiguity or accepting all readings equally."] },
        },
      ],
    },
    {
      id: "cial-e-u3-comparison",
      title: "Comparative poetry analysis",
      skill: "Construct comparative arguments linking two poems.",
      lesson: {
        sections: [
          {
            heading: "The comparative method",
            body: "Identify shared themes, then compare how each poet treats them. Use connective phrases: 'similarly', 'by contrast', 'whereas'. Avoid writing two separate analyses — weave comparison throughout.",
          },
          {
            heading: "Points of comparison",
            body: "Compare: subject/theme, tone, form, imagery, voice, attitude to subject. For each point, discuss both poems before evaluating which is more effective or how they differ.",
          },
          {
            heading: "Critical judgement",
            body: "The strongest comparative essays reach a judgement: which poem is more powerful and why? Support with textual evidence. Acknowledging both strengths shows balanced critical thinking.",
          },
        ],
        keyFormulas: [
          {
            name: "Comparison",
            statement:
              "Shared theme+point-by-point+judgement=comparative essay.",
          },
        ],
        workedExample: {
          problem: "Compare how two war poems treat loss.",
          solution:
            "Poem A uses graphic imagery; Poem B uses irony. Both convey loss but through different means — evaluate which is more effective.",
        },
      },
      questions: [
        {
          id: "cial-e-u3-cp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main danger in comparative poetry essays?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Comparing too many poems" },
              { id: "b", text: "Including context" },
              {
                id: "c",
                text: "Writing two separate analyses without linking them",
              },
              { id: "d", text: "Using too much evidence" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Comparison",
                statement:
                  "Weave comparison throughout, not separate analyses.",
              },
            ],
            steps: [
              {
                reasoning: "Main pitfall = disjointed separate analyses.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Two separate analyses",
            commonErrors: ["Treating comparison as two essays."],
          },
        },
        {
          id: "cial-e-u3-cp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should you compare in a comparative poetry essay?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Comparison points",
                statement: "Theme, tone, form, imagery, voice, attitude.",
              },
            ],
            steps: [
              {
                reasoning: "Any two of theme/tone/form/imagery/voice.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Discuss both poems for each point.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Theme, tone, form, imagery, voice — discussed for both poems.",
            commonErrors: ["Comparing only one aspect."],
          },
        },
        {
          id: "cial-e-u3-cp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why is reaching a critical judgement important in comparative essays?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Judgement",
                statement:
                  "Evaluating which is more effective demonstrates critical engagement.",
              },
            ],
            steps: [
              {
                reasoning: "Shows evaluation, not just description.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Demonstrates critical thinking.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Supported by evidence.",
                marks: 1,
                markCode: "AO3",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Judgement shows evaluation and critical engagement.",
            commonErrors: ["Avoiding any evaluative conclusion."],
          },
        },
        {
          id: "cial-e-u3-cp-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Comparative poetry.",
          parts: [
            { label: "a", prompt: "Main danger in comparison?", marks: 1 },
            { label: "b", prompt: "What to compare?", marks: 2 },
            { label: "c", prompt: "Why reach a judgement?", marks: 3 },
            {
              label: "d",
              prompt: "Outline a comparative paragraph on two poems.",
              marks: 4,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Comparison",
                statement: "Pitfall+points+judgement+paragraph.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Separate analyses.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Theme/tone/form/imagery/voice.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Discuss both poems.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "c",
                reasoning: "Evaluation not description.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Critical thinking.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Evidence-supported.",
                marks: 1,
                markCode: "AO3",
              },
              {
                part: "d",
                reasoning: "Point identified for both poems.",
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
                reasoning: "Evidence used.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Link to meaning clear.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) separate analyses (b) theme/tone/form/imagery (c) evaluation (d) comparative paragraph",
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
                descriptor: "Points listed.",
                part: "b",
              },
              { level: "Level 1", marks: "0", descriptor: "None.", part: "b" },
              {
                level: "Level 3",
                marks: "2-3",
                descriptor: "Judgement explained.",
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
                descriptor: "Effective paragraph.",
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
          id: "cial-e-u3-cp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should a comparative essay do first?",
          response: { type: "mcq", choices: [ { id: "a", text: "Identify shared themes before comparing treatment" }, { id: "b", text: "Count the lines" }, { id: "c", text: "Analyse Poem A completely" }, { id: "d", text: "Choose a winner immediately" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "skill", name: "Comparative method", statement: "Shared theme anchors point-by-point comparison." }], steps: [{ reasoning: "Common ground makes comparison meaningful.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** Identify shared themes", commonErrors: ["Starting with two unrelated analyses."] },
        },
        {
          id: "cial-e-u3-cp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which connective best signals contrast in comparison?",
          response: { type: "mcq", choices: [ { id: "a", text: "By contrast" }, { id: "b", text: "Also" }, { id: "c", text: "Similarly" }, { id: "d", text: "Therefore" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "convention", name: "Comparative connectives", statement: "Contrast phrases link differing treatments." }], steps: [{ reasoning: "By contrast signals difference.", marks: 1, markCode: "AO1" }], finalAnswer: "**(b)** By contrast", commonErrors: ["Using only similarity connectives."] },
        },
        {
          id: "cial-e-u3-cp-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main structural risk in comparative writing?",
          response: { type: "mcq", choices: [ { id: "a", text: "Using too many quotations" }, { id: "b", text: "Writing two separate analyses without weaving comparison" }, { id: "c", text: "Having a clear theme" }, { id: "d", text: "Comparing too few poems" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "skill", name: "Weaving comparison", statement: "Points should discuss both poems together." }], steps: [{ reasoning: "Separate analyses fail the comparative task.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Two separate analyses", commonErrors: ["Analysing each poem in isolation."] },
        },
        {
          id: "cial-e-u3-cp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which point is a valid basis for comparing two poems?",
          response: { type: "mcq", choices: [ { id: "a", text: "Shared theme treated through form, imagery or voice" }, { id: "b", text: "The number of commas" }, { id: "c", text: "Only the title" }, { id: "d", text: "The poet's birthplace" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "technique", name: "Points of comparison", statement: "Compare aspects such as theme, form, imagery, voice and attitude." }], steps: [{ reasoning: "Comparison needs shared ground and differing treatment.", marks: 1, markCode: "AO2" }], finalAnswer: "**(b)** Theme through form, imagery or voice", commonErrors: ["Comparing unrelated surface details."] },
        },
        {
          id: "cial-e-u3-cp-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What strengthens the strongest comparative essays?",
          response: { type: "mcq", choices: [ { id: "a", text: "Using no evidence" }, { id: "b", text: "Avoiding judgement entirely" }, { id: "c", text: "Listing techniques only" }, { id: "d", text: "A supported critical judgement on effectiveness" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "skill", name: "Critical judgement", statement: "Balanced evaluation reaches a supported conclusion." }], steps: [{ reasoning: "Judgement should be earned through textual evidence.", marks: 1, markCode: "AO3" }], finalAnswer: "**(b)** Supported judgement", commonErrors: ["Refusing to evaluate which treatment is stronger."] },
        },
        {
          id: "cial-e-u3-cp-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many poems are typically compared in a comparative essay?",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "convention", name: "Comparison scope", statement: "Two poems are compared." }], steps: [{ reasoning: "The task compares two texts.", marks: 1, markCode: "AO1" }], finalAnswer: "2", commonErrors: ["Treating it as a single-poem essay."] },
        },
        {
          id: "cial-e-u3-cp-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many points of comparison are listed: subject/theme, tone, form, imagery, voice and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 6 }] },
          markscheme: { principles: [{ kind: "technique", name: "Comparison points", statement: "Subject, tone, form, imagery, voice and attitude." }], steps: [{ reasoning: "Six points are listed.", marks: 1, markCode: "AO1" }], finalAnswer: "6", commonErrors: ["Comparing only one aspect throughout."] },
        },
        {
          id: "cial-e-u3-cp-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many connective phrases are exemplified: similarly, by contrast and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "convention", name: "Comparative connectives", statement: "Similarly, by contrast and whereas." }], steps: [{ reasoning: "Three connectives are given.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Using no linking language."] },
        },
        {
          id: "cial-e-u3-cp-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many components form the comparison formula: shared theme, point-by-point and what else?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3 }] },
          markscheme: { principles: [{ kind: "skill", name: "Comparison formula", statement: "Shared theme + point-by-point + judgement." }], steps: [{ reasoning: "Three components form the formula.", marks: 1, markCode: "AO1" }], finalAnswer: "3", commonErrors: ["Omitting judgement."] },
        },
        {
          id: "cial-e-u3-cp-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain how to weave comparison rather than write two analyses.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Weaving comparison", statement: "Each point should treat both poems before judging." }], steps: [{ reasoning: "A strong answer uses connectives and integrated discussion of both texts.", marks: 2, markCode: "AO2" }], finalAnswer: "Weave comparison by discussing both poems under each shared point and using connectives such as similarly and by contrast.", commonErrors: ["Separating Poem A and Poem B into blocks."] },
        },
        {
          id: "cial-e-u3-cp-q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "How should a comparative essay treat a shared theme?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Shared theme", statement: "Common subject allows comparison of treatment, not just topic." }], steps: [{ reasoning: "A strong answer compares methods, tone and effect rather than retelling both poems.", marks: 2, markCode: "AO2" }], finalAnswer: "A shared theme should be used to compare how each poet treats it through language, form, voice or attitude.", commonErrors: ["Summarising the theme separately for each poem."] },
        },
        {
          id: "cial-e-u3-cp-q16",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Evaluate why a supported judgement improves a comparative essay.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "skill", name: "Critical judgement", statement: "A conclusion tests comparative understanding." }], steps: [{ reasoning: "A strong answer explains that judgement should weigh both poems' strengths with evidence.", marks: 2, markCode: "AO3" }], finalAnswer: "A supported judgement demonstrates critical engagement by weighing effectiveness rather than merely listing similarities and differences.", commonErrors: ["Avoiding evaluation or choosing a winner without evidence."] },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-e-u3-poetry-criticism-notes",
      title: "Poetry context and comparison — revision notes",
      summary:
        "Context, critical perspectives, ambiguity and comparative analysis.",
      sections: [
        {
          heading: "Context and criticism",
          body: "Context illuminates allusions and attitudes. Critical lenses: feminist, Marxist, psychoanalytic, postcolonial. Acknowledge ambiguity — avoid single readings.",
        },
        {
          heading: "Comparison",
          body: "Weave comparison throughout — don't write two separate analyses. Compare theme, tone, form, imagery, voice. Reach a judgement supported by evidence.",
        },
        {
          heading: "Exam checklist",
          body: "Is context textually grounded? Is comparison integrated? Is there a clear evaluative conclusion?",
        },
      ],
    },
  ],
};
