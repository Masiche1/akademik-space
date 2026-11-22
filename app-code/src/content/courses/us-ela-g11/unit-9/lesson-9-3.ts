import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const EXAM: TextExtract = {
  title: "Exam Preparation: Analyzing Complex Texts",
  author: "Written for Akademik Space",
  text: "Grade 11 exams typically include: **reading comprehension** (informational + literary), **rhetorical analysis** (speeches, essays), **argument writing** (research-based), **literary analysis** (theme, character, craft), **language conventions** (grammar, style).\n\nEffective exam strategy: **read actively** (annotate, identify structure), **answer all questions** (partial credit), **cite evidence** (quote + explain), **manage time** (don't spend too long on one question), **proofread** (check grammar, spelling).\n\nThe most challenging questions often require **synthesis** — combining multiple skills. 'Analyze how the author's rhetorical choices create meaning' requires identifying devices (rhetoric), explaining function (analysis), connecting to purpose (interpretation). Practice integrating skills, not just memorizing content.",
};

const COMPLEX: TextExtract = {
  title: "Complex Text Analysis: Multi-Layered Meaning",
  author: "Written for Akademik Space",
  text: "Consider this passage:\n\n'The committee's decision was unanimous — a word that suggests agreement but, in context, reveals the opposite: everyone agreed because no one dared to disagree. The minutes recorded 'full consensus' with the same confidence as 'the sky is blue.' But consensus, like weather, can be an illusion maintained by those who benefit from the appearance of unanimity.'\n\nThis passage operates on multiple levels: **literal** (committee decision recorded as unanimous), **ironic** (unanimity masks fear), **thematic** (consensus as performance). The phrase 'like weather' compares consensus to something natural but unpredictable — suggesting it's not as stable as claimed. The final sentence reveals the author's thesis: consensus can be maintained by those who benefit from its appearance.",
};

export const lesson93: Lesson = {
  id: "ela11-u9-lesson-9-3",
  code: "9-3",
  title: "Exam Preparation and Integrated Practice",
  goal: "I CAN apply integrated skills across all strands in comprehensive exam preparation.",
  standards: [
    "W.11-12.1",
    "W.11-12.2",
    "W.11-12.3",
    "W.11-12.7",
    "W.11-12.9",
    "W.11-12.10",
    "RL.11-12.1",
    "RL.11-12.2",
    "RI.11-12.1",
    "RI.11-12.2",
  ],
  vocabulary: [
    { term: "Exam strategy", definition: "Approach to test-taking." },
    { term: "Synthesis question", definition: "Requires multiple skills." },
    {
      term: "Multi-layered meaning",
      definition: "Text operates on several levels.",
    },
    { term: "Irony", definition: "Contrast between expectation and reality." },
    { term: "Thematic analysis", definition: "Identifying deeper meanings." },
    { term: "Integrated practice", definition: "Combining all skills." },
  ],
  concepts: [
    {
      id: "ela11-u9-exam",
      title: "Exam strategy and preparation",
      skill: "Apply effective strategies for comprehensive exam success.",
      lesson: {
        sections: [
          {
            heading: "Exam components",
            body: "Grade 11 exams typically include: **reading comprehension** (informational + literary), **rhetorical analysis** (speeches, essays), **argument writing** (research-based), **literary analysis** (theme, character, craft), **language conventions** (grammar, style). Each requires different skills — but all demand integrated thinking.",
          },
          {
            heading: "Effective strategies",
            body: "Exam success requires: **read actively** (annotate, identify structure), **answer all questions** (partial credit), **cite evidence** (quote + explain), **manage time** (don't over-invest), **proofread** (check errors). Most importantly: **practice synthesis** — combining skills for complex questions.",
          },
        ],
        keyFormulas: [
          {
            name: "Exam components",
            statement: "Reading, rhetoric, argument, literature, language.",
          },
          {
            name: "Strategies",
            statement: "Active reading, cite, manage time, proofread.",
          },
          {
            name: "Synthesis",
            statement: "Combine skills for complex questions.",
          },
        ],
        workedExample: {
          problem: "What's the most important exam strategy?",
          solution:
            "Practice synthesis — combining skills for complex questions.",
        },
      },
      questions: [
        {
          id: "ela11-u9-exam-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: EXAM,
          stem: "What are the main components of a Grade 11 ELA exam?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only grammar" },
              { id: "b", text: "Only reading" },
              { id: "c", text: "Only writing" },
              {
                id: "d",
                text: "Reading, rhetoric, argument, literature, language",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Exam components",
                statement: "Multiple strands.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reading + rhetoric + argument + literature + language = comprehensive.",
                evidence: "components",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(d)**. Reading, rhetoric, argument, literature, language.",
            commonErrors: ["Missing components."],
          },
        },
        {
          id: "ela11-u9-exam-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: EXAM,
          stem: "What makes synthesis questions challenging?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Synthesis questions",
                statement: "Multiple skills required.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Require combining skills: rhetoric + analysis + interpretation.",
                evidence: "combine",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Can't use single skill — 'analyze how choices create meaning' needs multiple.",
                evidence: "multiple",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Solution: practice integrated thinking, not just memorization.",
                evidence: "practice",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Synthesis questions require multiple skills — combining rhetoric, analysis, interpretation.",
            commonErrors: ["Trying single-skill approach."],
          },
        },
        {
          id: "ela11-u9-exam-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: EXAM,
          stem: "Analyze why integrated practice is more effective than isolated skill review.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated practice",
                statement: "Why it works.",
              },
              {
                kind: "skill",
                name: "Exam preparation",
                statement: "How to prepare.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Isolated review: memorizes content but can't apply — skills remain separate.",
                evidence: "isolated",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Integrated practice: combines skills — builds synthesis ability for complex questions.",
                evidence: "integrated",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Exam requires synthesis — integrated practice matches exam demands.",
                evidence: "match",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Integrated practice more effective: isolated review memorizes but can't synthesize, integrated builds combination ability, matches exam demands for complex questions.",
            commonErrors: ["Relying on isolated review."],
          },
        },
        {
          id: "ela11-u9-exam-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: EXAM,
          parts: [
            { label: "a", prompt: "What are five exam strategies?", marks: 2 },
            { label: "b", prompt: "Which is most important?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Exam strategies",
                statement: "Five approaches.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Active reading, answer all, cite evidence, manage time, proofread.",
                evidence: "strategies",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Most important: practice synthesis — combining skills.",
                evidence: "most important",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "(a) Five strategies. (b) Practice synthesis.",
            commonErrors: ["Missing strategies."],
          },
        },
      ],
    },
    {
      id: "ela11-u9-complex",
      title: "Complex Text Analysis",
      skill:
        "Analyze texts operating on multiple levels — literal, ironic, thematic.",
      lesson: {
        sections: [
          {
            heading: "Multi-layered meaning",
            body: "Complex texts operate on multiple levels: **literal** (what's said), **ironic** (what's meant opposite), **thematic** (deeper significance). The committee passage: literal (unanimous decision), ironic (unanimity masks fear), thematic (consensus as performance). Analysis requires identifying all layers — not just surface meaning.",
          },
          {
            heading: "Analysis approach",
            body: "To analyze complex text: **identify literal** (what happens), **detect irony** (what's opposite), **find theme** (what it means), **explain craft** (how author creates effect). The passage: 'unanimous' → irony (fear, not agreement) → theme (consensus as illusion) → craft ('like weather' metaphor). Each layer builds understanding.",
          },
        ],
        keyFormulas: [
          { name: "Three levels", statement: "Literal + ironic + thematic." },
          {
            name: "Analysis approach",
            statement: "Literal → irony → theme → craft.",
          },
          { name: "Complex = multi-layered", statement: "Not just surface." },
        ],
        workedExample: {
          problem: "How does the committee passage operate on multiple levels?",
          solution:
            "Literal (unanimous) → ironic (fear masks agreement) → thematic (consensus as performance).",
        },
      },
      questions: [
        {
          id: "ela11-u9-complex-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: COMPLEX,
          stem: "What are the three levels of meaning in complex texts?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only irony" },
              { id: "b", text: "Literal + ironic + thematic" },
              { id: "c", text: "Only literal" },
              { id: "d", text: "Only theme" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Meaning levels",
                statement: "Three layers.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Literal + ironic + thematic = multi-layered meaning.",
                evidence: "levels",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Literal + ironic + thematic.",
            commonErrors: ["Missing layers."],
          },
        },
        {
          id: "ela11-u9-complex-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: COMPLEX,
          stem: "Identify the irony in the committee passage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Irony identification",
                statement: "Opposite meaning.",
              },
            ],
            steps: [
              {
                reasoning: "Literal: 'unanimous' suggests agreement.",
                evidence: "literal",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Ironic: 'no one dared to disagree' — unanimity masks fear, not agreement.",
                evidence: "ironic",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Effect: reveals performative nature of consensus.",
                evidence: "effect",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Unanimous' masks fear — 'no one dared to disagree' reveals performance, not agreement.",
            commonErrors: ["Missing irony."],
          },
        },
        {
          id: "ela11-u9-complex-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: COMPLEX,
          stem: "Analyze how the passage uses metaphor to develop theme.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Metaphor analysis",
                statement: "How comparison works.",
              },
              {
                kind: "skill",
                name: "Theme development",
                statement: "How craft serves meaning.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Metaphor: 'consensus, like weather' — compares to natural but unpredictable.",
                evidence: "metaphor",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Effect: suggests consensus isn't stable/controlled — can change suddenly.",
                evidence: "effect",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Theme: consensus as illusion maintained by beneficiaries — deeper significance.",
                evidence: "theme",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Metaphor 'like weather' suggests consensus is unpredictable/unstable, not fixed. Develops theme: consensus as illusion maintained by those who benefit — deeper than surface agreement.",
            commonErrors: ["Missing metaphor function."],
          },
        },
        {
          id: "ela11-u9-complex-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: COMPLEX,
          parts: [
            { label: "a", prompt: "What's 'multi-layered meaning'?", marks: 2 },
            {
              label: "b",
              prompt: "Give an example from the passage.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Multi-layered meaning",
                statement: "Multiple levels.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Text operating on literal, ironic, and thematic levels simultaneously.",
                evidence: "multi-layered",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'unanimous' — literal (agreement), ironic (fear), thematic (performance).",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Multiple levels. (b) 'Unanimous' — literal/ironic/thematic.",
            commonErrors: ["Missing layers."],
          },
        },
      ],
    },
    {
      id: "ela11-u9-integrated-r3",
      title: "Integrated Course Practice",
      skill: "Integrate all strands in comprehensive final practice.",
      lesson: {
        sections: [
          {
            heading: "Comprehensive integration",
            body: "Grade 11 ELA integrates: **reading** (informational + literary), **writing** (argument, informative, narrative, research), **language** (grammar, style), **speaking/listening** (discussion, presentation). Exam questions often require combining these — 'Analyze how the author's rhetorical choices create meaning' uses reading + rhetoric + analysis.",
          },
          {
            heading: "Final preparation",
            body: "Effective preparation: **review all strands** (not just favorites), **practice synthesis** (combine skills), **time management** (don't over-invest), **proofread** (check errors), **confidence** (you've practiced integrated thinking). The goal isn't perfection — it's demonstrating integrated mastery.",
          },
        ],
        keyFormulas: [
          {
            name: "All strands",
            statement: "Reading + writing + language + speaking.",
          },
          {
            name: "Integration",
            statement: "Combine skills for complex questions.",
          },
          {
            name: "Preparation",
            statement: "Review all, practice synthesis, manage time.",
          },
        ],
        workedExample: {
          problem: "How would you prepare for a comprehensive ELA exam?",
          solution:
            "Review all strands → practice synthesis → manage time → proofread → confidence.",
        },
      },
      questions: [
        {
          id: "ela11-u9-integrated-q1-r3",
          difficulty: "foundation",
          totalMarks: 1,
          extract: EXAM,
          stem: "What strands does Grade 11 ELA integrate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only grammar" },
              { id: "b", text: "Reading + writing + language + speaking" },
              { id: "c", text: "Only writing" },
              { id: "d", text: "Only reading" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ELA strands",
                statement: "Multiple areas.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Reading + writing + language + speaking = comprehensive ELA.",
                evidence: "strands",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Reading + writing + language + speaking.",
            commonErrors: ["Missing strands."],
          },
        },
        {
          id: "ela11-u9-integrated-q2-r3",
          difficulty: "core",
          totalMarks: 3,
          extract: EXAM,
          stem: "How does exam preparation differ from regular studying?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Exam preparation",
                statement: "Strategic approach.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Regular: review content; exam prep: practice synthesis + strategies.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Integrated: combine skills, not just memorize.",
                evidence: "integrated",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Strategic: time management, proofread, confidence.",
                evidence: "strategic",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Exam prep = synthesis practice + strategies; regular = content review.",
            commonErrors: ["Only reviewing content."],
          },
        },
        {
          id: "ela11-u9-integrated-q3-r3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: EXAM,
          stem: "Write an analysis paragraph on how integrated skills prepare students for comprehensive exams.",
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
                  "Isolated skills: can't handle synthesis questions — remain separate.",
                evidence: "isolated",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Integrated skills: combine for complex questions — matches exam demands.",
                evidence: "integrated",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Preparation: review all strands, practice synthesis, confidence — comprehensive readiness.",
                evidence: "preparation",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'Integrated skills prepare for comprehensive exams: isolated skills can't handle synthesis, integrated combine for complex questions, preparation (review all strands, practice synthesis, confidence) ensures readiness.'",
            commonErrors: ["Analyzing skills separately."],
          },
        },
        {
          id: "ela11-u9-integrated-q4-r3",
          difficulty: "core",
          totalMarks: 4,
          extract: EXAM,
          parts: [
            {
              label: "a",
              prompt: "Why is integrated practice essential for exam success?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "What should final preparation include?",
              marks: 2,
            },
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
                  "Exam requires synthesis — integrated practice matches demands.",
                evidence: "essential",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Review all strands, practice synthesis, manage time, proofread, confidence.",
                evidence: "include",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Exam requires synthesis. (b) Review all, practice synthesis, strategies, confidence.",
            commonErrors: ["Relying on isolated review."],
          },
        },
      ],
    },
  ],
};
