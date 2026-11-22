import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const INTEGRATED: TextExtract = {
  title: "Integrated Practice: Full Analysis",
  author: "Written for Akademik Space",
  text: "Analyze 'The Algorithm's Dream' focusing on how the poem's form, voice, and imagery work together to critique algorithmic control of attention.",
};

const WRITING: TextExtract = {
  title: "Writing Practice: Argument Essay",
  author: "Written for Akademik Space",
  text: "Write an argument about whether social media companies should face regulatory oversight of their engagement-optimizing algorithms. Use evidence from research, address counterarguments, and write with precision and nuance.",
};

const EXAM: TextExtract = {
  title: "Exam Preparation Guide",
  author: "Written for Akademik Space",
  text: "Effective exam preparation balances content review with strategy practice. For timed essays, experts recommend allocating time for outlining, writing, and revision rather than drafting without a plan. Self-monitoring during the exam — checking that each paragraph advances the thesis and that evidence is properly cited — separates top responses from adequate ones.",
};

export const lesson102: Lesson = {
  id: "ela9-u10-lesson-10-2",
  code: "10-2",
  title: "Integrated Practice and Exam Preparation",
  goal: "I CAN integrate all ELA skills — reading analysis, argument writing, language conventions — in comprehensive exam preparation.",
  standards: ["RL.9-10.9", "W.9-10.1", "W.9-10.9", "L.9-10.1", "L.9-10.2"],
  vocabulary: [
    {
      term: "Integrated analysis",
      definition: "Combining multiple analytical approaches.",
    },
    {
      term: "Exam strategy",
      definition: "Time management and response planning.",
    },
    {
      term: "Rubric alignment",
      definition: "Matching response to assessment criteria.",
    },
    {
      term: "Comprehensive writing",
      definition: "All elements: thesis, evidence, analysis, conventions.",
    },
    { term: "Practice synthesis", definition: "Combining skills in one task." },
    {
      term: "Self-monitoring",
      definition: "Checking work against criteria during writing.",
    },
  ],
  concepts: [
    {
      id: "ela9-u10-integrated-analysis",
      title: "Integrated literary analysis",
      skill:
        "Combine theme, character, structure, POV, and craft in comprehensive literary analysis.",
      lesson: {
        sections: [
          {
            heading: "Multi-dimensional analysis",
            body: "'The Algorithm's Dream' rewards integrated analysis: **theme** (algorithmic control of attention), **voice** (first-person system perspective), **imagery** (clicks, swipes, patterns), **structure** (mechanical stanzas mirroring code), **craft** (personification, metaphor, repetition). Each lens alone is partial; together they reveal how form enacts theme — poem is structured like the algorithm it describes.",
          },
          {
            heading: "Integration strategy",
            body: "Start with theme (what does poem say?), then examine how (form, voice, imagery), then evaluate why it matters (significance). 'The poem critiques algorithmic control through first-person system voice — personifying algorithm as dreaming entity makes invisible control tangible. Mechanical stanza structure mirrors algorithmic systematicity. Integration shows form serves theme.'",
          },
        ],
        keyFormulas: [
          {
            name: "Multiple lenses",
            statement: "Theme + voice + imagery + structure + craft.",
          },
          {
            name: "Integration = comprehensive",
            statement: "How choices serve meaning.",
          },
          {
            name: "Form enacts theme",
            statement: "Structure mirrors content.",
          },
        ],
        workedExample: {
          problem: "Integrate analysis of 'The Algorithm's Dream.'",
          solution:
            "Theme (algorithmic control) + voice (first-person system) + imagery (clicks/patterns) + structure (mechanical stanzas) + craft (personification) = poem structured like algorithm it describes.",
        },
      },
      questions: [
        {
          id: "ela9-u10-integrated-analysis-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: INTEGRATED,
          stem: "What does 'integrated analysis' require?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only theme analysis" },
              {
                id: "b",
                text: "Multiple lenses — theme, voice, imagery, structure, craft",
              },
              { id: "c", text: "Summary of poem" },
              { id: "d", text: "Only character analysis" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Integrated analysis",
                statement: "Multiple lenses.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Integrated = theme + voice + imagery + structure + craft together.",
                evidence: "integrated",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Multiple lenses — theme, voice, imagery, structure, craft.",
            commonErrors: ["Analyzing only one aspect."],
          },
        },
        {
          id: "ela9-u10-integrated-analysis-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: INTEGRATED,
          stem: "Identify three analytical lenses for 'The Algorithm's Dream.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Analytical lenses",
                statement: "Different perspectives.",
              },
            ],
            steps: [
              {
                reasoning: "Theme: algorithmic control of attention.",
                evidence: "theme",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Voice: first-person system perspective — 'I dream in clicks.'",
                evidence: "voice",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Structure: mechanical stanzas mirroring algorithmic systematicity.",
                evidence: "structure",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Theme (algorithmic control), voice (first-person system), structure (mechanical stanzas).",
            commonErrors: ["Listing aspects without identifying as lenses."],
          },
        },
        {
          id: "ela9-u10-integrated-analysis-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: INTEGRATED,
          stem: "Write an integrated analysis paragraph on 'The Algorithm's Dream' using at least three lenses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated analysis",
                statement: "Multiple lenses.",
              },
              {
                kind: "skill",
                name: "Comprehensive interpretation",
                statement: "How choices serve meaning.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Theme: algorithmic control of attention — 'you are the product.'",
                evidence: "theme",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Voice: first-person system — 'I dream in clicks' personifies algorithm.",
                evidence: "voice",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Structure: five stanzas × four lines — mechanical, mirrors code.",
                evidence: "structure",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Synthesis: form enacts theme — poem structured like algorithm it describes.",
                evidence: "synthesis",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The Algorithm's Dream integrates theme, voice, and structure to critique algorithmic control: theme emerges through 'you are the product' metaphor; voice uses first-person system perspective ('I dream in clicks') personifying algorithm as dreaming entity; structure employs five mechanical stanzas mirroring algorithmic systematicity. Together, form enacts theme — poem is structured like the system it describes.'",
            commonErrors: [
              "Analyzing aspects separately instead of integrating.",
            ],
          },
        },
        {
          id: "ela9-u10-integrated-analysis-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: INTEGRATED,
          parts: [
            {
              label: "a",
              prompt: "Why is integrated analysis stronger than single-lens?",
              marks: 2,
            },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integration value",
                statement: "Why it matters.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Each lens alone is partial; together reveal how form, content, meaning intertwine.",
                evidence: "stronger",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: theme + voice + structure shows poem structured like algorithm — single lens misses this.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Each lens partial; together reveal form/content/meaning intertwining. (b) Theme+voice+structure shows poem structured like algorithm — single lens misses.",
            commonErrors: ["Thinking one lens is enough."],
          },
        },
      ],
    },
    {
      id: "ela9-u10-exam-strategy",
      title: "Exam Strategy and Time Management",
      skill:
        "Apply exam strategies — planning, time allocation, self-monitoring — to maximize performance.",
      lesson: {
        sections: [
          {
            heading: "Exam planning",
            body: "For analytical essay: **5 min** outline (thesis + 3 points + evidence), **20 min** write, **5 min** review. Outline prevents rambling — know your argument before writing. Check rubric: what does 'analysis' require? Not summary — interpretation. What does 'synthesis' require? Connections between texts. Plan to hit all criteria.",
          },
          {
            heading: "Self-monitoring",
            body: "During writing: Am I addressing both texts? Is thesis clear? Am I analyzing or summarizing? Have I included counterargument? Are sentences varied? Self-monitor catches drift — essays that start strong but lose focus. Stop at intervals: read first paragraph — does it match my outline? Read last paragraph — does it conclude my thesis? Adjust if needed.",
          },
        ],
        keyFormulas: [
          { name: "5-20-5 timing", statement: "Outline → write → review." },
          { name: "Rubric alignment", statement: "Hit all criteria." },
          { name: "Self-monitor", statement: "Check against outline." },
        ],
        workedExample: {
          problem:
            "How would you allocate time for comparative literary analysis?",
          solution:
            "5 min outline (thesis + 3 points), 20 min write (thesis → evidence → analysis → synthesis), 5 min review (check rubric, edit errors).",
        },
      },
      questions: [
        {
          id: "ela9-u10-exam-strategy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: EXAM,
          stem: "What's the recommended time allocation for a 30-minute essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "15 min thinking, 15 min writing" },
              { id: "b", text: "30 min writing, 0 min planning" },
              { id: "c", text: "5 min outline, 20 min write, 5 min review" },
              { id: "d", text: "10 min writing, 20 min editing" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Time management",
                statement: "Balanced allocation.",
              },
            ],
            steps: [
              {
                reasoning:
                  "5-20-5: outline prevents rambling, review catches errors.",
                evidence: "timing",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)**. 5 min outline, 20 min write, 5 min review.",
            commonErrors: ["Skipping planning — leads to rambling."],
          },
        },
        {
          id: "ela9-u10-exam-strategy-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: EXAM,
          stem: "List three self-monitoring questions during writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Self-monitoring",
                statement: "Check progress.",
              },
            ],
            steps: [
              {
                reasoning: "Am I addressing both texts? Is thesis clear?",
                evidence: "thesis",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Am I analyzing or summarizing? Have I included counterargument?",
                evidence: "analysis",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Are sentences varied? Does conclusion match thesis?",
                evidence: "style",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Am I addressing both texts? Is thesis clear? Am I analyzing or summarizing? Have I included counterargument? Are sentences varied? Does conclusion match thesis?'",
            commonErrors: ["Only checking grammar — need content too."],
          },
        },
        {
          id: "ela9-u10-exam-strategy-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: EXAM,
          stem: "Write an exam strategy plan for a literary analysis essay including outline, timing, and self-checks.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Exam strategy",
                statement: "Comprehensive plan.",
              },
              {
                kind: "skill",
                name: "Time management",
                statement: "Efficient allocation.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Outline: thesis + 3 points + evidence for each (5 min).",
                evidence: "outline",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Write: thesis → evidence → analysis → synthesis → counterargument (20 min).",
                evidence: "write",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Review: check rubric criteria, edit errors, verify both texts addressed (5 min).",
                evidence: "review",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example plan: 5 min — outline thesis ('both texts explore X differently') + 3 points with evidence. 20 min — write thesis paragraph, evidence paragraphs (one per text), analysis paragraph (techniques), synthesis/conclusion. 5 min — check rubric (both texts? analysis not summary? synthesis?), edit grammar/spelling.",
            commonErrors: ["No plan — leads to rambling or missing criteria."],
          },
        },
        {
          id: "ela9-u10-exam-strategy-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: EXAM,
          parts: [
            {
              label: "a",
              prompt: "Why is outlining important before writing?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What should you check in review?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Planning + review",
                statement: "Why they matter.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Prevents rambling — know argument before writing.",
                evidence: "outline",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Check rubric: both texts? analysis not summary? synthesis? conventions?",
                evidence: "review",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Prevents rambling — know argument first. (b) Check rubric: both texts? analysis not summary? synthesis? conventions?",
            commonErrors: ["Skipping outline or review."],
          },
        },
      ],
    },
    {
      id: "ela9-u10-writing",
      title: "Comprehensive Writing Practice",
      skill:
        "Produce complete argument essay integrating all elements — thesis, evidence, counterargument, style, conventions.",
      lesson: {
        sections: [
          {
            heading: "Complete essay structure",
            body: "**Introduction**: hook + context + thesis. **Body 1**: reason 1 + evidence + analysis. **Body 2**: reason 2 + evidence + analysis. **Body 3**: counterargument + rebuttal. **Conclusion**: restate thesis + significance. Each paragraph: topic sentence, evidence, explanation, transition. Total: ~500 words for grade 9.",
          },
          {
            heading: "Quality checklist",
            body: "Before submission: thesis precise? Evidence credible and integrated? Counterargument addressed? Organization logical? Sentences varied? Vocabulary precise? Conventions correct? Sources cited? Read aloud — errors sound wrong. This isn't optional — it's what separates good from excellent.",
          },
        ],
        keyFormulas: [
          {
            name: "Complete structure",
            statement: "Intro → body → counter → conclusion.",
          },
          {
            name: "All elements required",
            statement: "Thesis + evidence + counter + style + conventions.",
          },
          { name: "Checklist before submit", statement: "Quality assurance." },
        ],
        workedExample: {
          problem: "Structure an argument essay on social media regulation.",
          solution:
            "Intro (hook + thesis: targeted regulation needed) → P1 (mental health evidence) → P2 (misinformation evidence) → P3 (counterargument + rebuttal) → Conclusion (significance). ~500 words.",
        },
      },
      questions: [
        {
          id: "ela9-u10-writing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: WRITING,
          stem: "What's the correct essay structure for an argument?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Introduction → body (reasons + counterargument) → conclusion",
              },
              { id: "b", text: "Introduction → conclusion → body" },
              { id: "c", text: "Conclusion → body → introduction" },
              { id: "d", text: "Body → introduction → conclusion" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Essay structure",
                statement: "Logical order.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Intro → body (reasons + counter) → conclusion is standard argument structure.",
                evidence: "structure",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)**. Introduction → body (reasons + counterargument) → conclusion.",
            commonErrors: ["Putting conclusion before body."],
          },
        },
        {
          id: "ela9-u10-writing-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: WRITING,
          stem: "List three elements every body paragraph should have.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Paragraph structure",
                statement: "Complete development.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Topic sentence (reason/claim), evidence (support), explanation (why it matters).",
                evidence: "structure",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Transition to next paragraph.",
                evidence: "transition",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Connection to thesis.",
                evidence: "thesis",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Topic sentence (reason), evidence (support), explanation (why it matters), transition, connection to thesis.'",
            commonErrors: ["Only listing evidence — need full structure."],
          },
        },
        {
          id: "ela9-u10-writing-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: WRITING,
          stem: "Write an outline for a complete argument essay on social media regulation including all structural elements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Essay outlining",
                statement: "Complete structure.",
              },
              {
                kind: "skill",
                name: "Argument planning",
                statement: "All elements.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Intro: hook (attention economy scale) + thesis (targeted regulation needed).",
                evidence: "intro",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Body: P1 mental health (Stanford), P2 misinformation (MIT), P3 counterargument (First Amendment) + rebuttal.",
                evidence: "body",
                marks: 4,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Conclusion: restate thesis + significance (democratic health).",
                evidence: "conclusion",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example outline: Intro (hook: 7hrs daily screen time; thesis: targeted regulation of algorithms needed) → P1 mental health (Stanford 2x depression) → P2 misinformation (MIT 6x spread) → P3 counterargument (First Amendment) + rebuttal (broadcast precedents) → Conclusion (democratic health significance). ~500 words.",
            commonErrors: ["Outline without counterargument or evidence."],
          },
        },
        {
          id: "ela9-u10-writing-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: WRITING,
          parts: [
            { label: "a", prompt: "What should the conclusion do?", marks: 2 },
            { label: "b", prompt: "What should it NOT do?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Conclusion writing",
                statement: "Proper function.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Restate thesis + explain significance — why argument matters.",
                evidence: "should",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "NOT introduce new evidence or arguments — that's for body.",
                evidence: "not",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Restate thesis + significance. (b) NOT introduce new evidence/arguments.",
            commonErrors: ["Adding new points in conclusion."],
          },
        },
      ],
    },
    {
      id: "ela9-u10-synthesis2",
      title: "Final Synthesis and Review",
      skill:
        "Synthesize all Grade 9 ELA skills for comprehensive review and preparation.",
      lesson: {
        sections: [
          {
            heading: "Skill integration review",
            body: "Grade 9 ELA integrates: **reading literature** (RL — theme, character, structure, craft), **reading informational** (RI — central ideas, evidence, rhetoric), **writing** (W — argument, informative, narrative, research), **language** (L — conventions, vocabulary, style), **speaking/listening** (SL — discussion, presentation). Exams test integration — analyze text + write response + use precise language + cite sources.",
          },
          {
            heading: "Preparation strategy",
            body: "Review each strand: can you identify theme? analyze character? evaluate evidence? write argument? use precise vocabulary? cite sources? Practice integrated tasks — read critically → analyze → write → edit → discuss. Self-assess honestly — weak areas need more practice. Quality over speed — thorough responses beat rushed ones.",
          },
        ],
        keyFormulas: [
          {
            name: "All strands integrated",
            statement: "RL + RI + W + L + SL.",
          },
          {
            name: "Practice integration",
            statement: "Read → analyze → write → edit.",
          },
          {
            name: "Honest self-assessment",
            statement: "Weak areas need work.",
          },
        ],
        workedExample: {
          problem: "How would you prepare for comprehensive ELA exam?",
          solution:
            "Review each strand, practice integrated tasks (read → analyze → write → edit → discuss), self-assess weak areas, focus on quality over speed.",
        },
      },
      questions: [
        {
          id: "ela9-u10-synthesis2-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: EXAM,
          stem: "What does Grade 9 ELA integrate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only literature" },
              {
                id: "b",
                text: "Reading literature + informational, writing, language, speaking/listening",
              },
              { id: "c", text: "Only grammar" },
              { id: "d", text: "Only writing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ELA strands",
                statement: "All integrated.",
              },
            ],
            steps: [
              {
                reasoning:
                  "ELA integrates RL, RI, W, L, SL — all strands work together.",
                evidence: "strands",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Reading literature + informational, writing, language, speaking/listening.",
            commonErrors: ["Thinking strands are separate."],
          },
        },
        {
          id: "ela9-u10-synthesis2-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: EXAM,
          stem: "List three integrated skills for exam preparation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Skill integration",
                statement: "Combined practice.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Read critically → analyze text → write response with evidence.",
                evidence: "reading→writing",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Edit for conventions → discuss interpretations → synthesize learning.",
                evidence: "editing→discussion",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Self-assess → identify weak areas → targeted practice.",
                evidence: "assessment",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Read critically → analyze → write with evidence → edit for conventions → discuss → self-assess → targeted practice.'",
            commonErrors: ["Practicing skills in isolation."],
          },
        },
        {
          id: "ela9-u10-synthesis2-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: EXAM,
          stem: "Create a comprehensive review plan for Grade 9 ELA exam covering all strands.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comprehensive review",
                statement: "All strands.",
              },
              {
                kind: "skill",
                name: "Strategic preparation",
                statement: "Efficient coverage.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "RL: theme, character, structure, craft — literary analysis.",
                evidence: "RL",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "RI: central ideas, evidence, rhetoric — informational analysis.",
                evidence: "RI",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "W: argument, informative, narrative, research — writing skills.",
                evidence: "W",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "L + SL: conventions, vocabulary, discussion — language and communication.",
                evidence: "L+SL",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example plan: Week 1 — RL review (theme, character, craft) + RI review (evidence, rhetoric). Week 2 — W practice (argument, informative, narrative) + L review (conventions, vocabulary). Week 3 — SL practice (discussion, presentation) + integrated tasks. Final — timed practice + self-assessment.",
            commonErrors: ["Reviewing only weak areas — need all strands."],
          },
        },
        {
          id: "ela9-u10-synthesis2-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: EXAM,
          parts: [
            {
              label: "a",
              prompt: "Why is honest self-assessment important?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What should you do with weak areas?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Self-assessment",
                statement: "Honest evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Identifies gaps — you can't improve what you don't recognize.",
                evidence: "assessment",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Targeted practice — focus more time on weak areas than strengths.",
                evidence: "practice",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Identifies gaps — can't improve unrecognized weaknesses. (b) Targeted practice — focus on weak areas.",
            commonErrors: ["Only practicing strengths — weak areas remain."],
          },
        },
      ],
    },
  ],
};
