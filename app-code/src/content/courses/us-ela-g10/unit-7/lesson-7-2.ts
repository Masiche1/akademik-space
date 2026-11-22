import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const GRAM: TextExtract = {
  title: "Grammar Conventions: Agreement, Tense, and Voice",
  author: "Written for Akademik Space",
  text: "Subject-verb agreement requires verbs to match subjects in number: 'The storm hits' (singular) vs 'The storms hit' (plural). Collective nouns can be tricky: 'The neighborhood gathers' (singular collective) vs 'The neighbors gather' (plural individual).\n\nTense consistency maintains temporal coherence: 'The storm hit at 9 p.m., and the lights flickered' (past tense throughout). Shifting tenses without reason confuses readers: 'The storm hit and the lights flicker' (inconsistent). Historical present is acceptable for immediacy: 'The storm hits at 9 p.m., and we gather on the porch' — but must be consistent.\n\nVoice affects emphasis: active voice ('We gathered on the porch') emphasizes subject; passive voice ('The porch was gathered on by us') emphasizes object. Active is generally clearer and more direct; passive useful when actor unknown or irrelevant: 'The power was restored' (actor = utility company, not important).",
};

const STYLE: TextExtract = {
  title: "Style and Tone in Writing",
  author: "Written for Akademik Space",
  text: "Style encompasses word choice, sentence structure, and tone working together to create voice. Formal style: 'The district implemented schedule modifications to accommodate circadian rhythms' — precise, impersonal. Informal style: 'The district changed school times because teens' body clocks are different' — conversational, direct. Academic style: 'Research indicates that delayed circadian rhythms necessitate later start times' — objective, evidence-based.\n\nTone conveys attitude: neutral (informative), serious (urgent), playful (lighthearted), skeptical (doubtful). The same content can have different tones: 'The policy failed' (critical) vs 'The policy faced challenges' (measured) vs 'The policy encountered difficulties' (diplomatic). Effective writers choose tone deliberately to match purpose and audience.",
};

export const lesson72: Lesson = {
  id: "ela10-u7-lesson-7-2",
  code: "7-2",
  title: "Grammar Conventions, Tense, Voice, and Style",
  goal: "I CAN apply grammar conventions correctly and choose appropriate style and tone for different purposes.",
  standards: [
    "L.9-10.1",
    "L.9-10.1a",
    "L.9-10.1b",
    "L.9-10.2",
    "L.9-10.2a",
    "L.9-10.2b",
    "L.9-10.3",
    "L.9-10.3a",
  ],
  vocabulary: [
    {
      term: "Subject-verb agreement",
      definition: "Verb matches subject in number.",
    },
    {
      term: "Tense consistency",
      definition: "Maintaining same tense throughout.",
    },
    { term: "Active voice", definition: "Subject performs action." },
    { term: "Passive voice", definition: "Subject receives action." },
    { term: "Style", definition: "Word choice + structure + tone." },
    { term: "Tone", definition: "Attitude conveyed in writing." },
  ],
  concepts: [
    {
      id: "ela10-u7-agreement",
      title: "Subject-verb agreement and tense consistency",
      skill: "Apply agreement and tense rules correctly in writing.",
      lesson: {
        sections: [
          {
            heading: "Agreement rules",
            body: "Subject-verb agreement: singular subjects take singular verbs ('The storm hits'), plural take plural ('The storms hit'). Collective nouns: 'The neighborhood gathers' (singular collective) vs 'The neighbors gather' (plural individual). Compound subjects: 'The storm and the outage hit' (plural). Watch for intervening phrases: 'The storm, along with the winds, hits' (singular subject 'storm').",
          },
          {
            heading: "Tense consistency",
            body: "Maintain consistent tense: past ('hit,' 'flickered'), present ('hits,' 'flickers'), future ('will hit,' 'will flicker'). Shifting without reason confuses: 'The storm hit and the lights flicker' (inconsistent). Historical present acceptable for immediacy: 'The storm hits at 9 p.m., and we gather' — but must be consistent throughout. Narrative can shift for flashbacks with clear transitions.",
          },
        ],
        keyFormulas: [
          {
            name: "Agreement = number match",
            statement: "Singular/plural alignment.",
          },
          { name: "Tense = consistency", statement: "Maintain throughout." },
          {
            name: "Collective nouns",
            statement: "Singular collective vs plural individual.",
          },
        ],
        workedExample: {
          problem:
            "Which is correct: 'The neighborhood gather' or 'The neighborhood gathers'?",
          solution: "'Gathers' — collective noun treated as singular unit.",
        },
      },
      questions: [
        {
          id: "ela10-u7-agreement-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: GRAM,
          stem: "What's subject-verb agreement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Verb tense" },
              { id: "b", text: "Verb matches subject in number" },
              { id: "c", text: "Subject placement" },
              { id: "d", text: "Verb choice" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Subject-verb agreement",
                statement: "Number match.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Agreement = verb matches subject in number — singular/plural.",
                evidence: "agreement",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Verb matches subject in number.",
            commonErrors: ["Confusing with tense."],
          },
        },
        {
          id: "ela10-u7-agreement-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: GRAM,
          stem: "Why is 'The neighborhood gathers' correct but 'The neighbors gather' also correct?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Collective nouns",
                statement: "Singular vs plural.",
              },
            ],
            steps: [
              {
                reasoning:
                  "'Neighborhood' = collective singular — 'gathers' (unit acting together).",
                evidence: "collective",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Neighbors' = plural individual — 'gather' (multiple people).",
                evidence: "individual",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Both correct — different subjects, different meanings.",
                evidence: "both",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Neighborhood gathers' = collective singular (unit); 'neighbors gather' = plural individual. Both correct, different meanings.",
            commonErrors: ["Thinking only one is correct."],
          },
        },
        {
          id: "ela10-u7-agreement-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: GRAM,
          stem: "Analyze why tense consistency matters in narrative writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tense consistency",
                statement: "Temporal coherence.",
              },
              {
                kind: "skill",
                name: "Reader clarity",
                statement: "How inconsistency confuses.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Consistency maintains temporal coherence — reader knows when events happen.",
                evidence: "coherence",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Inconsistency confuses: 'The storm hit and the lights flicker' — unclear timeline.",
                evidence: "confuse",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Historical present acceptable for immediacy but must be consistent — 'hits' throughout.",
                evidence: "historical",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Tense consistency maintains temporal coherence — reader knows when events occur. Inconsistency ('hit... flicker') confuses timeline. Historical present acceptable for immediacy but must be consistent throughout.",
            commonErrors: ["Shifting tenses without reason."],
          },
        },
        {
          id: "ela10-u7-agreement-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: GRAM,
          parts: [
            { label: "a", prompt: "What's tense consistency?", marks: 2 },
            { label: "b", prompt: "When is shifting acceptable?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tense consistency",
                statement: "Temporal coherence.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Maintaining same tense throughout — past, present, or future.",
                evidence: "consistency",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Flashbacks, historical present — with clear transitions/reason.",
                evidence: "acceptable",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Maintaining same tense throughout. (b) Flashbacks/historical present with clear transitions.",
            commonErrors: ["Thinking all shifts are wrong."],
          },
        },
      ],
    },
    {
      id: "ela10-u7-voice",
      title: "Active and Passive Voice",
      skill: "Choose appropriate voice for clarity and emphasis in writing.",
      lesson: {
        sections: [
          {
            heading: "Voice comparison",
            body: "Active voice: subject performs action ('We gathered on the porch') — clear, direct, emphasizes actor. Passive voice: subject receives action ('The porch was gathered on by us') — emphasizes object, actor may be unknown/irrelevant. Active generally clearer; passive useful when actor unknown ('The power was restored') or when object is focus ('Mistakes were made').",
          },
          {
            heading: "Voice for effect",
            body: "Choose voice deliberately: active for clarity and directness ('We gathered'), passive for emphasis on result ('The power was restored') or when actor irrelevant ('The decision was made'). Overusing passive creates distance and vagueness; overusing active can seem aggressive. Balance for appropriate tone.",
          },
        ],
        keyFormulas: [
          { name: "Active = subject acts", statement: "Direct, clear." },
          {
            name: "Passive = subject receives",
            statement: "Emphasizes object.",
          },
          { name: "Choose deliberately", statement: "Match purpose." },
        ],
        workedExample: {
          problem: "When is passive voice appropriate?",
          solution:
            "When actor unknown ('The power was restored') or object is focus ('Mistakes were made').",
        },
      },
      questions: [
        {
          id: "ela10-u7-voice-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: GRAM,
          stem: "What's active voice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Subject receives action" },
              { id: "b", text: "Subject performs action" },
              { id: "c", text: "No subject" },
              { id: "d", text: "Passive construction" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Active voice",
                statement: "Subject acts.",
              },
            ],
            steps: [
              {
                reasoning: "Active = subject performs action — 'We gathered.'",
                evidence: "active",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Subject performs action.",
            commonErrors: ["Confusing with passive."],
          },
        },
        {
          id: "ela10-u7-voice-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: GRAM,
          stem: "When is passive voice appropriate?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Passive voice use",
                statement: "Appropriate contexts.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Actor unknown: 'The power was restored' (utility company irrelevant).",
                evidence: "unknown",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Object is focus: 'Mistakes were made' (emphasizes mistakes, not who made them).",
                evidence: "focus",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Avoid overuse: passive creates distance/vagueness if overused.",
                evidence: "avoid",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Actor unknown ('power was restored') or object is focus ('mistakes were made'). Avoid overuse — creates distance.",
            commonErrors: ["Overusing passive voice."],
          },
        },
        {
          id: "ela10-u7-voice-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: GRAM,
          stem: "Analyze how voice choice affects clarity and emphasis in writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Voice analysis",
                statement: "Clarity + emphasis.",
              },
              {
                kind: "skill",
                name: "Appropriate use",
                statement: "When to choose which.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Active voice: clear, direct, emphasizes actor — 'We gathered.'",
                evidence: "active",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Passive voice: emphasizes object, useful when actor irrelevant — 'The power was restored.'",
                evidence: "passive",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Choice matters: overuse of either creates problems — passive = distance, active = aggressive.",
                evidence: "balance",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Voice choice affects clarity/emphasis: active = direct ('We gathered'), passive = object focus ('The power was restored'). Choose deliberately — overuse creates problems (passive = distance, active = aggressive).",
            commonErrors: ["Thinking passive is always wrong."],
          },
        },
        {
          id: "ela10-u7-voice-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: GRAM,
          parts: [
            {
              label: "a",
              prompt: "What's the difference between active and passive voice?",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Which is generally preferred? Why?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Voice comparison",
                statement: "Active vs passive.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Active: subject acts; passive: subject receives action.",
                evidence: "difference",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Active generally preferred — clearer, more direct.",
                evidence: "preferred",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Active: subject acts; passive: subject receives. (b) Active — clearer, more direct.",
            commonErrors: ["Thinking passive is always wrong."],
          },
        },
      ],
    },
    {
      id: "ela10-u7-style",
      title: "Style and Tone Selection",
      skill:
        "Choose appropriate style and tone for different purposes and audiences.",
      lesson: {
        sections: [
          {
            heading: "Style variation",
            body: "Formal: 'The district implemented schedule modifications' — precise, impersonal. Informal: 'The district changed school times' — conversational, direct. Academic: 'Research indicates that delayed circadian rhythms necessitate later start times' — objective, evidence-based. Style = word choice + structure + tone working together. Match to purpose: academic essay = formal; narrative = conversational; social media = informal.",
          },
          {
            heading: "Tone selection",
            body: "Tone conveys attitude: neutral (informative), serious (urgent), playful (lighthearted), skeptical (doubtful). Same content, different tones: 'The policy failed' (critical), 'The policy faced challenges' (measured), 'The policy encountered difficulties' (diplomatic). Choose tone deliberately — critical tone for critique, measured for balanced analysis, urgent for warnings.",
          },
        ],
        keyFormulas: [
          {
            name: "Style = word + structure + tone",
            statement: "Combined effect.",
          },
          { name: "Tone = attitude", statement: "Conveys perspective." },
          { name: "Match to purpose", statement: "Audience + context." },
        ],
        workedExample: {
          problem:
            "How does tone change meaning in 'The policy failed' vs 'The policy faced challenges'?",
          solution:
            "'Failed' = critical/blaming; 'faced challenges' = measured/balanced. Same event, different attitude.",
        },
      },
      questions: [
        {
          id: "ela10-u7-style-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: STYLE,
          stem: "What's the difference between style and tone?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No difference" },
              { id: "b", text: "Style = word+structure+tone; tone = attitude" },
              { id: "c", text: "Tone is more important" },
              { id: "d", text: "Style is only formal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Style vs tone",
                statement: "Combined vs attitude.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Style = word choice + structure + tone; tone = attitude conveyed.",
                evidence: "difference",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(b)**. Style = word+structure+tone; tone = attitude.",
            commonErrors: ["Confusing the two."],
          },
        },
        {
          id: "ela10-u7-style-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: STYLE,
          stem: "How does tone change meaning in 'The policy failed' vs 'The policy faced challenges'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tone analysis",
                statement: "Attitude effect.",
              },
            ],
            steps: [
              {
                reasoning: "'Failed' = critical/blaming — negative judgment.",
                evidence: "failed",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Faced challenges' = measured/balanced — acknowledges difficulty without blame.",
                evidence: "challenges",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Same event, different attitude — tone determines interpretation.",
                evidence: "tone",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'Failed' = critical/blaming; 'faced challenges' = measured/balanced. Same event, different attitude — tone determines interpretation.",
            commonErrors: ["Thinking tone is just word choice."],
          },
        },
        {
          id: "ela10-u7-style-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: STYLE,
          stem: "Analyze how style and tone work together to create voice in writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Style-tone integration",
                statement: "How they combine.",
              },
              {
                kind: "skill",
                name: "Voice creation",
                statement: "Distinctive writing.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Style = word choice + structure + tone — combined creates voice.",
                evidence: "style",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Tone conveys attitude: formal = objective, informal = personal, critical = negative.",
                evidence: "tone",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Together: distinctive voice — academic formal vs conversational informal.",
                evidence: "voice",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Style and tone work together: style (word choice + structure + tone) creates voice; tone conveys attitude (formal = objective, informal = personal). Together produce distinctive writing style.",
            commonErrors: ["Analyzing them separately."],
          },
        },
        {
          id: "ela10-u7-style-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: STYLE,
          parts: [
            {
              label: "a",
              prompt:
                "What's the difference between formal and informal style?",
              marks: 2,
            },
            { label: "b", prompt: "When should each be used?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Style variation",
                statement: "Formal vs informal.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Formal = precise, impersonal; informal = conversational, direct.",
                evidence: "difference",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Formal for academic/professional; informal for narrative/social.",
                evidence: "when",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Formal = precise/impersonal; informal = conversational/direct. (b) Formal for academic; informal for narrative/social.",
            commonErrors: ["Using wrong register."],
          },
        },
      ],
    },
    {
      id: "ela10-u7-integrated-r2",
      title: "Integrated Grammar and Style Practice",
      skill:
        "Apply agreement, tense, voice, and style skills in comprehensive language practice.",
      lesson: {
        sections: [
          {
            heading: "Integrated language application",
            body: "Effective writing requires: **agreement** (subject-verb match), **tense** (consistency), **voice** (appropriate active/passive), **style** (word choice + tone). These work together: agreement ensures correctness, tense maintains coherence, voice clarifies emphasis, style creates appropriate voice. Practice applying all simultaneously.",
          },
          {
            heading: "Exam application",
            body: "Exam questions often require: 'Correct the agreement error' or 'Identify tense inconsistency' or 'Choose appropriate voice.' Requires applying multiple skills: recognize issues, apply corrections, explain reasoning.",
          },
        ],
        keyFormulas: [
          {
            name: "Four skills",
            statement: "Agreement + tense + voice + style.",
          },
          {
            name: "Integrated = comprehensive",
            statement: "How they work together.",
          },
          { name: "Exam synthesis", statement: "Combine language skills." },
        ],
        workedExample: {
          problem:
            "How would you correct 'The neighbors gathers on the porch and we talks about everything'?",
          solution:
            "'The neighbors gather on the porch and we talk about everything.' — plural subjects need plural verbs.",
        },
      },
      questions: [
        {
          id: "ela10-u7-integrated-q1-r2",
          difficulty: "foundation",
          totalMarks: 1,
          extract: GRAM,
          stem: "What four skills make grammatically correct, stylistically appropriate writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only grammar" },
              { id: "b", text: "Agreement + tense + voice + style" },
              { id: "c", text: "Only spelling" },
              { id: "d", text: "Only punctuation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Correct writing",
                statement: "Four skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Agreement + tense + voice + style = comprehensive language skills.",
                evidence: "four skills",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Agreement + tense + voice + style.",
            commonErrors: ["Missing skills."],
          },
        },
        {
          id: "ela10-u7-integrated-q2-r2",
          difficulty: "core",
          totalMarks: 3,
          extract: GRAM,
          stem: "Correct 'The neighbors gathers on the porch and we talks about everything.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Agreement correction",
                statement: "Subject-verb match.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Identify errors: 'neighbors gathers' (plural subject, singular verb); 'we talks' (plural, singular).",
                evidence: "errors",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Correct: 'The neighbors gather on the porch and we talk about everything.'",
                evidence: "correct",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Explain: plural subjects need plural verbs.",
                evidence: "explain",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "'The neighbors gather on the porch and we talk about everything.' — plural subjects need plural verbs.",
            commonErrors: ["Only fixing one error."],
          },
        },
        {
          id: "ela10-u7-integrated-q3-r2",
          difficulty: "challenge",
          totalMarks: 8,
          extract: GRAM,
          stem: "Analyze how agreement, tense, voice, and style work together in effective writing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated language analysis",
                statement: "How skills combine.",
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
                  "Agreement ensures correctness: 'neighbors gather' — grammatical foundation.",
                evidence: "agreement",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Tense maintains coherence: consistent past/present — temporal clarity.",
                evidence: "tense",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Voice + style create effect: active voice for clarity, appropriate tone for purpose.",
                evidence: "voice+style",
                marks: 4,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The neighbors gathered on the porch; we talked about everything, sharing stories and feeling the darkness reveal what mattered.' Agreement (correct verbs), tense (consistent past), voice (active for clarity), style (reflective tone) work together for comprehensive effect.",
            commonErrors: ["Analyzing skills separately."],
          },
        },
        {
          id: "ela10-u7-integrated-q4-r2",
          difficulty: "core",
          totalMarks: 4,
          extract: GRAM,
          parts: [
            { label: "a", prompt: "Why is agreement important?", marks: 2 },
            { label: "b", prompt: "What happens if it's wrong?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Agreement importance",
                statement: "Grammatical foundation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Ensures grammatical correctness — readers expect proper agreement.",
                evidence: "important",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Errors undermine credibility — reader notices mistakes, loses trust.",
                evidence: "wrong",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Ensures correctness. (b) Errors undermine credibility.",
            commonErrors: ["Thinking agreement is minor."],
          },
        },
      ],
    },
  ],
};
