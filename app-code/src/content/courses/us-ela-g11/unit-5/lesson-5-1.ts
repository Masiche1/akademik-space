import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "../unit-1/levels.ts";

const FOUNDING: TextExtract = {
  title: "Informational Text: The Declaration of Independence (Excerpt)",
  author: "Thomas Jefferson, 1776",
  text: "When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.\n\nWe hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness. That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed. That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government, laying its foundation on such principles and organizing its powers in such form, as to them shall seem most likely to effect their Safety and Happiness.",
  note: "Public domain historical document.",
};

const CONSTITUTION: TextExtract = {
  title: "Informational Text: The Preamble to the U.S. Constitution",
  author: "1787",
  text: "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.",
  note: "Public domain historical document.",
};

export const lesson51: Lesson = {
  id: "ela11-u5-lesson-5-1",
  code: "5-1",
  title: "Founding Documents: Central Ideas and Rhetorical Analysis",
  goal: "I CAN analyze founding documents — identify central ideas, rhetorical strategies, and historical context.",
  standards: [
    "RI.11-12.1",
    "RI.11-12.2",
    "RI.11-12.6",
    "RI.11-12.8",
    "RH.11-12.1",
    "RH.11-12.2",
  ],
  vocabulary: [
    { term: "Self-evident", definition: "Obviously true without proof." },
    {
      term: "Unalienable rights",
      definition: "Rights that cannot be taken away.",
    },
    {
      term: "Consent of the governed",
      definition: "Government derives power from people.",
    },
    { term: "Rhetorical strategy", definition: "Persuasive technique." },
    {
      term: "Enlightenment",
      definition: "18th-century intellectual movement.",
    },
    { term: "Social contract", definition: "Theory of government legitimacy." },
  ],
  concepts: [
    {
      id: "ela11-u5-declaration",
      title: "Declaration of Independence analysis",
      skill:
        "Analyze Jefferson's rhetorical strategies and philosophical foundations.",
      lesson: {
        sections: [
          {
            heading: "Central ideas",
            body: "Declaration's central ideas: **natural rights** ('all men are created equal... unalienable Rights'), **social contract** ('Governments are instituted... deriving their just powers from the consent of the governed'), **right of revolution** ('whenever any Form of Government becomes destructive... Right of the People to alter or abolish'). These aren't just grievances — they're philosophical arguments for independence.",
          },
          {
            heading: "Rhetorical strategies",
            body: "Jefferson uses: **parallel structure** ('Life, Liberty and the pursuit of Happiness'), **appeal to reason** ('self-evident truths'), **appeal to emotion** ('slings and arrows of outrageous fortune' — wait, that's Hamlet; here: 'long train of abuses'), **formal tone** (declaration requires gravity). The document must persuade multiple audiences: colonists, foreign powers, posterity.",
          },
        ],
        keyFormulas: [
          {
            name: "Three central ideas",
            statement:
              "Natural rights + social contract + right of revolution.",
          },
          {
            name: "Rhetorical strategies",
            statement: "Parallel, reason, emotion, formal.",
          },
          {
            name: "Multiple audiences",
            statement: "Colonists + foreigners + posterity.",
          },
        ],
        workedExample: {
          problem: "What's the Declaration's most important idea?",
          solution:
            "Natural rights + consent of governed — government derives legitimacy from protecting rights, not ruling by force.",
        },
      },
      questions: [
        {
          id: "ela11-u5-declaration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: FOUNDING,
          stem: "What are 'unalienable rights' according to the Declaration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rights that cannot be taken away" },
              { id: "b", text: "Rights only for citizens" },
              { id: "c", text: "Rights government grants" },
              { id: "d", text: "Rights that can be sold" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Unalienable rights",
                statement: "Cannot be taken.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Unalienable = cannot be alienated/taken away — inherent rights.",
                evidence: "unalienable",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)**. Rights that cannot be taken away.",
            commonErrors: ["Thinking government grants rights."],
          },
        },
        {
          id: "ela11-u5-declaration-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: FOUNDING,
          stem: "Identify two rhetorical strategies Jefferson uses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rhetorical analysis",
                statement: "Persuasive techniques.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Parallel structure: 'Life, Liberty and the pursuit of Happiness' — rhythmic emphasis.",
                evidence: "parallel",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Appeal to reason: 'self-evident truths' — logical argument.",
                evidence: "reason",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Formal tone: 'When in the Course of human events' — gravity for declaration.",
                evidence: "formal",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Parallel structure ('Life, Liberty...'), appeal to reason ('self-evident'), formal tone.",
            commonErrors: ["Identifying without explaining function."],
          },
        },
        {
          id: "ela11-u5-declaration-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: FOUNDING,
          stem: "Analyze how the Declaration's structure supports its argument for independence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Document structure",
                statement: "How organization supports argument.",
              },
              {
                kind: "skill",
                name: "Philosophical foundation",
                statement: "Enlightenment ideas.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Opening: 'When in the Course of human events' — establishes necessity, not whim.",
                evidence: "opening",
                marks: 2,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Philosophical foundation: natural rights + social contract — Enlightenment ideas.",
                evidence: "philosophy",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Conclusion: right of revolution — justifies independence as legitimate.",
                evidence: "conclusion",
                marks: 3,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Declaration structures argument: opening establishes necessity → philosophical foundation (natural rights, social contract) → conclusion (right of revolution). Each part builds case for independence as justified, not arbitrary.",
            commonErrors: ["Listing content without analyzing structure."],
          },
        },
        {
          id: "ela11-u5-declaration-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: FOUNDING,
          parts: [
            { label: "a", prompt: "What is the 'social contract'?", marks: 2 },
            {
              label: "b",
              prompt: "How does the Declaration use it?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Social contract",
                statement: "Government legitimacy.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Theory that government derives power from people's consent to protect rights.",
                evidence: "social contract",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Declaration: 'deriving their just powers from the consent of the governed' — applies theory.",
                evidence: "application",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Government derives power from consent to protect rights. (b) 'Deriving their just powers from the consent of the governed.'",
            commonErrors: ["Not connecting theory to text."],
          },
        },
      ],
    },
    {
      id: "ela11-u5-preamble",
      title: "Preamble to the Constitution",
      skill: "Analyze the Preamble's purposes and rhetorical conciseness.",
      lesson: {
        sections: [
          {
            heading: "Preamble analysis",
            body: "Preamble is only 52 words but packs six purposes: 'form a more perfect Union,' 'establish Justice,' 'insure domestic Tranquility,' 'provide for the common defence,' 'promote the general Welfare,' 'secure the Blessings of Liberty.' Each phrase is a goal; together they define government's purpose. 'We the People' establishes popular sovereignty — government belongs to citizens, not rulers.",
          },
          {
            heading: "Rhetorical conciseness",
            body: "Preamble's power is in brevity: every word essential, no wasted space. 'More perfect Union' acknowledges existing union while improving it — pragmatic, not utopian. 'Blessings of Liberty' frames liberty as gift to preserve, not entitlement to claim. The Preamble doesn't just describe government — it defines what government is FOR.",
          },
        ],
        keyFormulas: [
          {
            name: "Six purposes",
            statement:
              "Union, justice, tranquility, defense, welfare, liberty.",
          },
          { name: "52 words", statement: "Concise but comprehensive." },
          { name: "We the People", statement: "Popular sovereignty." },
        ],
        workedExample: {
          problem: "What does 'We the People' establish?",
          solution:
            "Popular sovereignty — government belongs to citizens, derives authority from them.",
        },
      },
      questions: [
        {
          id: "ela11-u5-preamble-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: CONSTITUTION,
          stem: "How many words are in the Preamble?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10" },
              { id: "b", text: "200" },
              { id: "c", text: "100" },
              { id: "d", text: "52" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Preamble length",
                statement: "52 words.",
              },
            ],
            steps: [
              {
                reasoning: "Preamble is 52 words — concise but comprehensive.",
                evidence: "52",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(d)**. 52.",
            commonErrors: ["Not recognizing conciseness."],
          },
        },
        {
          id: "ela11-u5-preamble-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: CONSTITUTION,
          stem: "List three purposes stated in the Preamble.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Preamble purposes",
                statement: "Six goals.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Examples: 'form a more perfect Union,' 'establish Justice,' 'insure domestic Tranquility.'",
                evidence: "purposes",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Also: 'provide for the common defence,' 'promote the general Welfare,' 'secure the Blessings of Liberty.'",
                evidence: "more",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Six total — comprehensive definition of government's purpose.",
                evidence: "six",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Examples: form Union, establish Justice, insure Tranquility, provide defence, promote Welfare, secure Liberty.",
            commonErrors: ["Only listing one or two."],
          },
        },
        {
          id: "ela11-u5-preamble-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: CONSTITUTION,
          stem: "Analyze how the Preamble's conciseness enhances its rhetorical power.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rhetorical conciseness",
                statement: "Brevity as strength.",
              },
              {
                kind: "skill",
                name: "Purpose definition",
                statement: "What government is for.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "52 words pack six purposes — every word essential, no waste.",
                evidence: "concise",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'More perfect Union' — acknowledges existing, improves pragmatically.",
                evidence: "pragmatic",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "'Blessings of Liberty' — frames liberty as gift to preserve, not entitlement.",
                evidence: "framing",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Preamble's conciseness enhances power: 52 words pack six purposes (no waste), 'more perfect Union' is pragmatic (improves existing), 'Blessings of Liberty' frames liberty as precious gift. Brevity = memorability + authority.",
            commonErrors: ["Thinking longer = more comprehensive."],
          },
        },
        {
          id: "ela11-u5-preamble-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: CONSTITUTION,
          parts: [
            {
              label: "a",
              prompt: "What does 'We the People' establish?",
              marks: 2,
            },
            { label: "b", prompt: "Why is it significant?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Popular sovereignty",
                statement: "Government legitimacy.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Popular sovereignty — government belongs to citizens.",
                evidence: "sovereignty",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Significant: establishes government derives authority from people, not rulers.",
                evidence: "significant",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Popular sovereignty. (b) Government derives authority from people.",
            commonErrors: ["Missing significance."],
          },
        },
      ],
    },
    {
      id: "ela11-u5-speeches",
      title: "Great American Speeches: Rhetorical Analysis",
      skill: "Analyze rhetorical strategies in famous American speeches.",
      lesson: {
        sections: [
          {
            heading: "Speech analysis framework",
            body: "Analyzing speeches requires: **occasion** (why given?), **audience** (who hears?), **purpose** (what achieves?), **strategies** (how persuades?). Lincoln's Gettysburg Address: occasion (cemetery dedication), audience (nation grieving), purpose (redefine war's meaning), strategies (parallelism, antithesis, biblical allusion). King's 'I Have a Dream': occasion (March on Washington), audience (civil rights supporters + nation), purpose (inspire action), strategies (repetition, imagery, biblical allusion).",
          },
          {
            heading: "Rhetorical devices in speeches",
            body: "Common devices: **repetition** ('government of the people, by the people, for the people'), **antithesis** ('we cannot dedicate... we cannot consecrate'), **allusion** (biblical references), **anaphora** ('I have a dream'), **ethos/pathos/logos** (credibility/emotion/logic). Speeches work because they combine logical argument with emotional resonance and moral authority.",
          },
        ],
        keyFormulas: [
          {
            name: "Four questions",
            statement: "Occasion, audience, purpose, strategies.",
          },
          {
            name: "Common devices",
            statement: "Repetition, antithesis, allusion, anaphora.",
          },
          { name: "Three appeals", statement: "Ethos, pathos, logos." },
        ],
        workedExample: {
          problem: "How does Lincoln's Gettysburg Address use repetition?",
          solution:
            "'Government of the people, by the people, for the people' — repetition creates memorable climax.",
        },
      },
      questions: [
        {
          id: "ela11-u5-speeches-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: FOUNDING,
          stem: "What four questions frame speech analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only length" },
              { id: "b", text: "Occasion, audience, purpose, strategies" },
              { id: "c", text: "Only speaker" },
              { id: "d", text: "Only content" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Speech analysis",
                statement: "Four questions.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Occasion + audience + purpose + strategies = comprehensive analysis.",
                evidence: "four questions",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(b)**. Occasion, audience, purpose, strategies.",
            commonErrors: ["Missing analytical framework."],
          },
        },
        {
          id: "ela11-u5-speeches-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: FOUNDING,
          stem: "Identify two rhetorical devices Lincoln might use in a speech.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Rhetorical devices",
                statement: "Persuasive techniques.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Repetition: 'government of the people, by the people, for the people' — memorable.",
                evidence: "repetition",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Antithesis: 'we cannot dedicate... we cannot consecrate' — contrast.",
                evidence: "antithesis",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Allusion: biblical references — moral authority.",
                evidence: "allusion",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Repetition ('of the people, by the people'), antithesis ('cannot dedicate... cannot consecrate'), allusion (biblical).",
            commonErrors: ["Identifying without explaining function."],
          },
        },
        {
          id: "ela11-u5-speeches-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: FOUNDING,
          stem: "Analyze how the three appeals (ethos, pathos, logos) function in political speeches.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Three appeals",
                statement: "Ethos, pathos, logos.",
              },
              {
                kind: "skill",
                name: "Speech effectiveness",
                statement: "How appeals combine.",
              },
            ],
            levels: levels(8),
            steps: [
              {
                reasoning:
                  "Ethos: speaker's credibility — Lincoln as president, moral authority.",
                evidence: "ethos",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Pathos: emotional appeal — grief for soldiers, hope for future.",
                evidence: "pathos",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Logos: logical argument — 'government of the people' as logical conclusion.",
                evidence: "logos",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Three appeals work together: ethos (Lincoln's credibility as president), pathos (grief/hope emotions), logos (logical conclusion 'government of the people'). Combined create powerful persuasion.",
            commonErrors: ["Analyzing appeals separately."],
          },
        },
        {
          id: "ela11-u5-speeches-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: FOUNDING,
          parts: [
            { label: "a", prompt: "What's 'anaphora'?", marks: 2 },
            { label: "b", prompt: "Give an example.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anaphora",
                statement: "Repeated opening.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Repetition of words/phrases at beginning of clauses — 'I have a dream.'",
                evidence: "anaphora",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: 'I have a dream that...' repeated throughout King's speech.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Repetition at clause beginnings. (b) 'I have a dream...' (King).",
            commonErrors: ["Confusing with other repetition."],
          },
        },
      ],
    },
    {
      id: "ela11-u5-integrated",
      title: "Integrated Founding Document Analysis",
      skill:
        "Integrate central idea, rhetorical strategy, and historical context in comprehensive document analysis.",
      lesson: {
        sections: [
          {
            heading: "Comprehensive analysis",
            body: "Analyzing founding documents requires: **central ideas** (what's argued?), **rhetorical strategies** (how persuaded?), **historical context** (why written?), **audience** (who persuaded?). Declaration: natural rights argument, Enlightenment context, multiple audiences. Preamble: six purposes, conciseness as strategy, founding context. Speeches: occasion/purpose/strategies analysis.",
          },
          {
            heading: "Exam application",
            body: "Exam questions often require: 'Analyze how Jefferson uses rhetorical strategies to argue for independence' or 'Explain the Preamble's significance.' Requires applying multiple skills: identify ideas, analyze strategies, connect to context.",
          },
        ],
        keyFormulas: [
          {
            name: "Four skills",
            statement: "Central ideas + strategies + context + audience.",
          },
          {
            name: "Integrated = comprehensive",
            statement: "How they work together.",
          },
          { name: "Exam synthesis", statement: "Combine analysis types." },
        ],
        workedExample: {
          problem: "How would you comprehensively analyze the Declaration?",
          solution:
            "Central ideas (natural rights) → strategies (parallel, reason, emotion) → context (Enlightenment) → audience (colonists, foreigners, posterity).",
        },
      },
      questions: [
        {
          id: "ela11-u5-integrated-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: FOUNDING,
          stem: "What four skills are needed for comprehensive document analysis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only author" },
              { id: "b", text: "Only content" },
              {
                id: "c",
                text: "Central ideas + strategies + context + audience",
              },
              { id: "d", text: "Only length" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Comprehensive analysis",
                statement: "Four skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Central ideas + strategies + context + audience = comprehensive.",
                evidence: "four skills",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(c)**. Central ideas + strategies + context + audience.",
            commonErrors: ["Missing skills."],
          },
        },
        {
          id: "ela11-u5-integrated-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: FOUNDING,
          stem: "Apply two analysis skills to the Declaration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated analysis",
                statement: "Multiple skills.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Central idea: natural rights — 'all men are created equal.'",
                evidence: "central",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Strategy: parallel structure — 'Life, Liberty and the pursuit of Happiness.'",
                evidence: "strategy",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Context: Enlightenment philosophy — social contract theory.",
                evidence: "context",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Central idea (natural rights), strategy (parallel structure), context (Enlightenment).",
            commonErrors: ["Only applying one skill."],
          },
        },
        {
          id: "ela11-u5-integrated-q3",
          difficulty: "challenge",
          totalMarks: 8,
          extract: FOUNDING,
          stem: "Write an analysis paragraph on how the Declaration balances philosophical argument with practical grievance.",
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
                  "Philosophical: natural rights, social contract — Enlightenment foundation.",
                evidence: "philosophical",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Practical: list of grievances against King George — specific complaints.",
                evidence: "practical",
                marks: 3,
                markCode: "AO1",
              },
              {
                reasoning:
                  "Balance: philosophy justifies independence, grievances provide evidence — together compelling case.",
                evidence: "balance",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "Example: 'The Declaration balances philosophical argument (natural rights, social contract) with practical grievance (list of abuses). Philosophy provides justification — why independence is legitimate; grievances provide evidence — why it's necessary. Together create compelling case.'",
            commonErrors: ["Analyzing philosophy or grievance separately."],
          },
        },
        {
          id: "ela11-u5-integrated-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: FOUNDING,
          parts: [
            {
              label: "a",
              prompt: "Why is integrated analysis stronger than single-skill?",
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
                  "Each skill alone is partial; together reveal how choices serve purpose.",
                evidence: "stronger",
                marks: 2,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning:
                  "Example: philosophy+grievance shows Declaration's dual argument — single skill misses this.",
                evidence: "example",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "(a) Each skill partial; together reveal purpose. (b) Philosophy+grievance shows dual argument.",
            commonErrors: ["Thinking one skill is enough."],
          },
        },
      ],
    },
  ],
};
