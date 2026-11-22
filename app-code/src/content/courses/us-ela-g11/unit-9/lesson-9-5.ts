import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const TIMED: TextExtract = {
  title: "Timed Writing: The 40-Minute Essay",
  author: "Written for Akademik Space",
  text: "Timed writing requires balancing quality with speed. The 40-minute essay typically includes: 5 minutes planning, 30 minutes writing, 5 minutes proofreading.\n\nPlanning (5 min): identify prompt type (argument, informative, narrative), brainstorm key points, outline structure. Don't skip — planning prevents rambling.\n\nWriting (30 min): introduction (hook + thesis), body paragraphs (claim → evidence → explanation), conclusion (restatement + significance). Write quickly but clearly — don't obsess over word choice.\n\nProofreading (5 min): check grammar, spelling, punctuation. Fix obvious errors — don't rewrite. Time management is crucial: unfinished essay scores poorly regardless of quality.",
};

const VOICE: TextExtract = {
  title: "Voice Development: Finding Your Style",
  author: "Written for Akademik Space",
  text: "Voice is the distinctive personality in writing — what makes your writing recognizably yours. Developing voice requires: **reading widely** (expose yourself to styles), **writing regularly** (practice develops voice), **experimenting** (try different approaches), **editing for authenticity** (remove what's not you).\n\nVoice elements: **diction** (word choice), **syntax** (sentence structure), **tone** (attitude), **rhythm** (cadence), **perspective** (viewpoint). Your voice emerges from combination — not imitation but authentic expression.\n\nThe danger is voice that's performative — trying too hard to sound 'smart' or 'literary.' Authentic voice is honest, not impressive. It sounds like you, not like someone else's idea of a writer.",
};

export const lesson95: Lesson = {
  id: "ela11-u9-lesson-9-5",
  code: "9-5",
  title: "Timed Writing and Voice Development",
  goal: "I CAN manage timed writing effectively and develop authentic voice.",
  standards: ["W.11-12.4", "W.11-12.5", "W.11-12.10", "L.11-12.3"],
  vocabulary: [
    {
      term: "Timed writing",
      definition: "Essay written under time constraint.",
    },
    { term: "Voice", definition: "Distinctive personal style." },
    { term: "Planning", definition: "Pre-writing organization." },
    { term: "Authenticity", definition: "Genuine, not performed." },
    { term: "Time management", definition: "Allocating time effectively." },
    { term: "Style development", definition: "Finding your voice." },
  ],
  concepts: [
    {
      id: "ela11-u9-timed",
      title: "Timed writing strategy",
      skill: "Manage time effectively for timed essay writing.",
      lesson: {
        sections: [
          {
            heading: "Time allocation",
            body: "40-minute essay: **5 min planning** (identify prompt type, brainstorm, outline), **30 min writing** (intro → body → conclusion), **5 min proofreading** (grammar, spelling, punctuation). Planning prevents rambling; writing requires speed over perfection; proofreading catches errors. Time management is crucial — unfinished essay scores poorly.",
          },
          {
            heading: "Writing under pressure",
            body: "Timed writing requires: **write quickly but clearly** (don't obsess over word choice), **prioritize structure** (clear intro/body/conclusion), **use evidence efficiently** (brief quotes, not lengthy), **save time for proofreading** (5 min minimum). The goal isn't perfection — it's demonstrating skill within constraints.",
          },
        ],
        keyFormulas: [
          {
            name: "Time allocation",
            statement: "5 plan + 30 write + 5 proofread.",
          },
          {
            name: "Priorities",
            statement: "Structure > word choice > perfection.",
          },
          { name: "Unfinished = poor", statement: "Time management critical." },
        ],
        workedExample: {
          problem: "How should you allocate time for a 40-minute essay?",
          solution: "5 min planning, 30 min writing, 5 min proofreading.",
        },
      },
      questions: [
        {
          id: "ela11-u9-timed-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: TIMED,
          stem: "What's the recommended time allocation for a 40-minute essay?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5 plan + 30 write + 5 proofread" },
              { id: "b", text: "10 plan + 20 write + 10 proofread" },
              { id: "c", text: "No planning" },
              { id: "d", text: "40 min writing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Time allocation",
                statement: "Planning + writing + proofreading.",
              },
            ],
            steps: [
              {
                reasoning:
                  "5 min planning, 30 min writing, 5 min proofreading.",
                evidence: "allocation",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. 5 plan + 30 write + 5 proofread.",
            commonErrors: ["Skipping planning."],
          },
        },
        {
          id: "ela11-u9-timed-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: TIMED,
          stem: "Why is planning important in timed writing?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Planning importance",
                statement: "Prevents rambling.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Planning identifies prompt type, brainstorms, outlines — prevents rambling.",
                evidence: "prevents",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "5 minutes investment saves time later — efficient writing.",
                evidence: "efficient",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Structure from planning ensures complete essay — not just introduction.",
                evidence: "complete",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Planning prevents rambling, saves time, ensures complete structure.",
            commonErrors: ["Skipping planning."],
          },
        },
        {
          id: "ela11-u9-timed-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: TIMED,
          stem: "Analyze why time management is crucial in timed writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Time management",
                statement: "Why it matters.",
              },
              {
                kind: "skill",
                name: "Exam strategy",
                statement: "How to succeed.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Unfinished essay scores poorly — regardless of quality.",
                evidence: "unfinished",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Time allocation balances quality/speed — planning prevents waste.",
                evidence: "balance",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Proofreading time catches errors — final polish matters.",
                evidence: "proofread",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Time management crucial: unfinished essay scores poorly, allocation balances quality/speed, proofreading catches errors. Success requires completing essay, not perfection.",
            commonErrors: ["Over-investing in one section."],
          },
        },
        {
          id: "ela11-u9-timed-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: TIMED,
          parts: [
            {
              label: "a",
              prompt: "What are the three phases of timed writing?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What should you prioritize during writing?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Timed writing phases",
                statement: "Three stages.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Planning, writing, proofreading.",
                evidence: "phases",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Structure > word choice > perfection — write quickly but clearly.",
                evidence: "prioritize",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Planning, writing, proofreading. (b) Structure > word choice > perfection.",
            commonErrors: ["Missing phases."],
          },
        },
      ],
    },
    {
      id: "ela11-u9-voice",
      title: "Voice development",
      skill: "Develop authentic voice through reading, writing, and editing.",
      lesson: {
        sections: [
          {
            heading: "Voice elements",
            body: "Voice = distinctive personality in writing. Elements: **diction** (word choice), **syntax** (sentence structure), **tone** (attitude), **rhythm** (cadence), **perspective** (viewpoint). Your voice emerges from combination — not imitation but authentic expression. Reading widely exposes you to styles; writing regularly develops voice; experimenting finds what works.",
          },
          {
            heading: "Authenticity vs performance",
            body: "Authentic voice is honest, not impressive. Danger: performative voice — trying too hard to sound 'smart' or 'literary.' Authentic voice sounds like you, not like someone else's idea of a writer. Edit for authenticity: remove what's not you. Your voice is already there — it just needs development, not construction.",
          },
        ],
        keyFormulas: [
          {
            name: "Voice elements",
            statement: "Diction + syntax + tone + rhythm + perspective.",
          },
          {
            name: "Development",
            statement: "Read + write + experiment + edit.",
          },
          { name: "Authenticity", statement: "Honest, not performed." },
        ],
        workedExample: {
          problem: "How do you develop authentic voice?",
          solution:
            "Read widely, write regularly, experiment, edit for authenticity.",
        },
      },
      questions: [
        {
          id: "ela11-u9-voice-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: VOICE,
          stem: "What is 'voice' in writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Distinctive personal style" },
              { id: "b", text: "Grammar rules" },
              { id: "c", text: "Spelling" },
              { id: "d", text: "Punctuation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Voice",
                statement: "Personal style.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Voice = distinctive personality in writing — what makes it yours.",
                evidence: "voice",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. Distinctive personal style.",
            commonErrors: ["Confusing with grammar."],
          },
        },
        {
          id: "ela11-u9-voice-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: VOICE,
          stem: "How do you develop authentic voice?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Voice development",
                statement: "Reading + writing + editing.",
              },
            ],
            steps: [
              {
                reasoning: "Read widely: expose yourself to different styles.",
                evidence: "read",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Write regularly: practice develops voice.",
                evidence: "write",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Edit for authenticity: remove what's not you.",
                evidence: "edit",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Read widely, write regularly, experiment, edit for authenticity.",
            commonErrors: ["Imitating others."],
          },
        },
        {
          id: "ela11-u9-voice-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: VOICE,
          stem: "Analyze the difference between authentic and performative voice.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Voice analysis",
                statement: "Authentic vs performative.",
              },
              {
                kind: "skill",
                name: "Authenticity study",
                statement: "Honest vs impressive.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Authentic: honest, sounds like you — not trying to impress.",
                evidence: "authentic",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Performative: trying too hard to sound 'smart'/'literary' — artificial.",
                evidence: "performative",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: authentic connects; performative distances — reader senses falseness.",
                evidence: "effect",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Authentic voice: honest, sounds like you, connects with reader. Performative: artificial, tries to impress, distances reader. Authenticity is key.",
            commonErrors: ["Confusing with performance."],
          },
        },
        {
          id: "ela11-u9-voice-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: VOICE,
          parts: [
            {
              label: "a",
              prompt: "What are the five elements of voice?",
              marks: 2,
            },
            { label: "b", prompt: "How does voice develop?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Voice elements",
                statement: "Five components.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Diction, syntax, tone, rhythm, perspective.",
                evidence: "elements",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Read widely, write regularly, experiment, edit for authenticity.",
                evidence: "develop",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Five elements. (b) Read + write + experiment + edit.",
            commonErrors: ["Missing elements."],
          },
        },
      ],
    },
    {
      id: "ela11-u9-integrated-r5",
      title: "Integrated Final Practice",
      skill:
        "Integrate timed writing, voice, and all course skills in final comprehensive practice.",
      lesson: {
        sections: [
          {
            heading: "Comprehensive integration",
            body: "Grade 11 ELA culminates in: **timed writing** (time management), **voice development** (authentic style), **all strands** (reading, writing, language, speaking). Final preparation: practice timed essays, develop voice, review all skills, manage time, proofread. The goal is demonstrating integrated mastery across all strands.",
          },
          {
            heading: "Final checklist",
            body: "Before exam: **practice timed writing** (build speed), **develop voice** (authentic style), **review all strands** (not just favorites), **practice synthesis** (combine skills), **manage time** (don't over-invest), **proofread** (check errors). Confidence comes from preparation, not hope.",
          },
        ],
        keyFormulas: [
          {
            name: "Final skills",
            statement: "Timed writing + voice + all strands.",
          },
          {
            name: "Checklist",
            statement:
              "Practice, develop, review, synthesize, manage, proofread.",
          },
          { name: "Confidence", statement: "From preparation." },
        ],
        workedExample: {
          problem: "How should you prepare for final ELA exam?",
          solution:
            "Practice timed writing, develop voice, review all strands, synthesize, manage time, proofread.",
        },
      },
      questions: [
        {
          id: "ela11-u9-integrated-q1-r5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: TIMED,
          stem: "What does final Grade 11 ELA preparation include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only reading" },
              { id: "b", text: "Timed writing + voice + all strands" },
              { id: "c", text: "Only spelling" },
              { id: "d", text: "Only grammar" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Final preparation",
                statement: "Comprehensive.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Timed writing + voice + all strands = comprehensive preparation.",
                evidence: "preparation",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Timed writing + voice + all strands.",
            commonErrors: ["Missing components."],
          },
        },
        {
          id: "ela11-u9-integrated-q2-r5",
          difficulty: "core",
          totalMarks: 3,
          extract: TIMED,
          stem: "Apply two final preparation strategies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Preparation strategies",
                statement: "Multiple approaches.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Practice timed writing: build speed and time management.",
                evidence: "timed",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Develop voice: authentic style through reading/writing/editing.",
                evidence: "voice",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Review all strands: not just favorites — comprehensive coverage.",
                evidence: "review",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Practice timed writing, develop voice, review all strands.",
            commonErrors: ["Only preparing favorites."],
          },
        },
        {
          id: "ela11-u9-integrated-q3-r5",
          difficulty: "challenge",
          totalMarks: 8,
          extract: TIMED,
          stem: "Write an analysis paragraph on how integrated preparation leads to exam success.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated analysis",
                statement: "Multiple skills.",
              },
              {
                kind: "skill",
                name: "Comprehensive interpretation",
                statement: "How choices serve purpose.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Timed writing: practice builds speed — time management critical.",
                evidence: "timed",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Voice development: authentic style — writing quality.",
                evidence: "voice",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "All strands: comprehensive coverage — integrated mastery.",
                evidence: "strands",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Integrated preparation leads to success: timed writing builds speed, voice development improves quality, all-strand review ensures comprehensive coverage. Preparation creates confidence.'",
            commonErrors: ["Analyzing separately."],
          },
        },
        {
          id: "ela11-u9-integrated-q4-r5",
          difficulty: "core",
          totalMarks: 4,
          extract: TIMED,
          parts: [
            {
              label: "a",
              prompt: "Why is comprehensive preparation better than partial?",
              marks: 2,
            },
            { label: "b", prompt: "What's the final checklist?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Preparation value",
                statement: "Why comprehensive.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Exam covers all strands — partial prep leaves gaps.",
                evidence: "better",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Practice timed, develop voice, review all, synthesize, manage, proofread.",
                evidence: "checklist",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "(a) Exam covers all strands. (b) Six-item checklist.",
            commonErrors: ["Preparing only favorites."],
          },
        },
      ],
    },
  ],
};
