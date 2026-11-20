import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "mla5-u3-lesson-3-2",
  code: "3-2",
  title: "Cohesion, Connectors and Academic Vocabulary",
  goal: "I CAN build cohesive academic texts using precise connectors, reference words and high-frequency academic vocabulary.",
  standards: [
    "MYP Language Acquisition",
    "Criterion D: Writing",
    "Criterion B: Reading",
    "Criterion C: Speaking",
  ],
  vocabulary: [
    { term: "Cohesion", definition: "The way sentences and paragraphs are connected through grammar and vocabulary." },
    { term: "Connector", definition: "A word or phrase that links ideas, such as 'however', 'furthermore' or 'as a result'." },
    { term: "Reference", definition: "Using pronouns or phrases to point back to earlier ideas, e.g. 'this', 'such', 'these findings'." },
    { term: "Collocation", definition: "A natural word combination, e.g. 'conduct research', 'pose a question'." },
    { term: "Register", definition: "The level of formality appropriate to the context." },
  ],
  concepts: [
    {
      id: "mla5-u3-cohesion",
      title: "Cohesion and connectors",
      skill: "Use connectors and reference devices to create logical flow in academic writing and speech.",
      lesson: {
        sections: [
          {
            heading: "Logical connectors",
            body: "Connectors signal relationships: **addition** ('furthermore', 'moreover'), **contrast** ('however', 'nevertheless', 'whereas'), **cause** ('because', 'as a result', 'therefore'), **example** ('for instance', 'such as') and **concession** ('although', 'while'). Choose the connector that matches the logic, not just a transition word.",
          },
          {
            heading: "Reference and cohesion",
            body: "Cohesion also comes from **reference**: pronouns ('it', 'they'), demonstratives ('this finding', 'these results') and lexical repetition with variation ('the policy', 'this measure', 'the reform'). Avoid vague 'this' when the referent is unclear. Repeat key terms enough to maintain clarity.",
          },
          {
            heading: "Paragraph cohesion",
            body: "A cohesive paragraph begins with a topic sentence, develops it with evidence and links back through connectors and reference. The last sentence should prepare the reader for the next idea. Do not change topic abruptly; use a bridging sentence if needed.",
          },
        ],
        keyFormulas: [
          { name: "Connector types", statement: "Addition / contrast / cause / example / concession" },
          { name: "Cohesion chain", statement: "Topic sentence -> evidence -> reference -> connector -> next idea" },
        ],
        workedExample: {
          problem: "Combine: 'The study was small. It showed a trend. More research is needed.'",
          solution: "'Although the study was small, it suggested a trend; therefore, further research is needed.'",
        },
      },
      questions: [
        {
          id: "mla5-u3-cohesion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which connector best signals contrast?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Furthermore'" },
              { id: "b", text: "'However'" },
              { id: "c", text: "'For example'" },
              { id: "d", text: "'As a result'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Contrast connector", statement: "'However' signals opposition or qualification." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'however' marks contrast.", working: "contrast", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** 'However'",
            commonErrors: ["Confusing addition and contrast connectors."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u3-cohesion-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Paragraph Excerpt",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "The policy had several aims. First, it sought to reduce inequality. However, implementation varied across regions. As a result, outcomes were inconsistent. These findings suggest that design alone is insufficient.",
          },
          stem: "Identify three cohesion devices and explain what each links.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cohesion identification", statement: "Connectors and reference link ideas across sentences." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'First' signals sequence/addition of aims.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'However' contrasts aim with implementation variation.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'These findings' refers back to inconsistent outcomes.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'First' adds sequence; 'However' contrasts; 'These findings' references earlier results.",
            commonErrors: ["Listing words without explaining linkage."],
            examinerNote: "Must explain function of each device.",
          },
        },
        {
          id: "mla5-u3-cohesion-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Disjointed Paragraph",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "The experiment failed. The sample was small. The results were surprising. More research is needed. Technology changes fast. Students use phones.",
          },
          stem: "Rewrite the paragraph with improved cohesion and explain two changes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cohesive rewriting", statement: "Connect ideas logically and remove irrelevant jumps." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — adds cause connector: small sample may explain limited results.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — links conclusion: therefore more research needed.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — removes or bridges irrelevant jump to phones.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — explanation identifies cohesion devices.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Rewrite uses 'because', 'therefore' and removes irrelevant topic jump; cohesion improves logical flow.",
            commonErrors: ["Adding connectors mechanically without logical relation."],
            examinerNote: "Connectors must match actual logic.",
          },
        },
        {
          id: "mla5-u3-cohesion-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Essay Revision Task",
            author: "Written for Akademik Space",
            source: "Writing practice",
            text: "Original: 'Social media is popular. It has benefits. It has risks. Schools should teach students how to use it safely. Students need guidance.'\n\nTask: Improve cohesion for an academic essay.",
          },
          stem: "Complete the tasks.",
          parts: [
            { label: "a", prompt: "Rewrite the sentences cohesively.", marks: 3 },
            { label: "b", prompt: "Identify two connectors you added.", marks: 2 },
            { label: "c", prompt: "Explain how reference improves clarity.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Academic cohesion production", statement: "Logical connectors and clear reference." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — rewrite uses connectors and reference appropriately.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — sentences are grammatically accurate.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — logical flow is clear.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — identifies two valid connectors.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — identifies the second connector accurately.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — explains reference to earlier ideas.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — explains how reference prevents repetition and ambiguity.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — explanation links cohesion to clarity.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) cohesive rewrite (b) connectors (c) reference explanation.",
            commonErrors: ["Using connectors without matching meaning."],
            examinerNote: "Rewrite should read as academic prose.",
          },
        },
        {
          id: "mla5-u3-cohesion-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which connector best introduces a contrast between two ideas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "furthermore" },
              { id: "b", text: "however" },
              { id: "c", text: "for instance" },
              { id: "d", text: "as a result" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Contrastive connector", statement: "'However' signals opposition between ideas." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'however' marks contrast.", working: "contrast", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** however",
            commonErrors: ["Choosing additive 'furthermore'."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u3-cohesion-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a reference device that creates cohesion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A long list of synonyms" },
              { id: "b", text: "The demonstrative 'this finding' referring back to earlier evidence" },
              { id: "c", text: "A random topic change" },
              { id: "d", text: "A repeated heading" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Reference device", statement: "Pronouns and demonstratives link back to earlier ideas." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'this finding' refers back, creating cohesion.", working: "reference", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** The demonstrative 'this finding' referring back to earlier evidence",
            commonErrors: ["Confusing repetition with reference."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u3-cohesion-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Paragraph Excerpt",
            author: "Written for Akademik Space",
            source: "Cohesion practice",
            text: "The study found lower attendance. Furthermore, the effect was stronger in urban schools. For instance, City A showed a 20% drop.",
          },
          stem: "Which connector is used incorrectly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Furthermore" },
              { id: "b", text: "For instance" },
              { id: "c", text: "Both are correct" },
              { id: "d", text: "Neither" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Connector logic", statement: "'For instance' introduces an example; the sentence gives data that does not exemplify the previous claim clearly." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'For instance' should introduce a clear example of the preceding claim; '20% drop' is new data, not an instance.", working: "mismatch", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** For instance",
            commonErrors: ["Assuming any connector is fine if a sentence follows."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u3-cohesion-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Paragraph Excerpt",
            author: "Written for Akademik Space",
            source: "Cohesion practice",
            text: "The policy failed to reduce inequality; however, it improved attendance. As a result, schools kept it. For example, attendance rose in three schools.",
          },
          stem: "How many logical connectors appear in the paragraph?",
          response: {
            type: "numeric",
            parts: [{ label: "Connectors", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Connector counting", statement: "Count genuine logical connectors only." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'however', 'as a result', 'for example' = 3.", working: "3", marks: 1, markCode: "D" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting 'the' or 'it' as connectors."],
            examinerNote: "Accept 3.",
          },
        },
        {
          id: "mla5-u3-cohesion-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Choose the correct connector for each gap: 'The study was small, ___ the results were consistent. ___, replication is needed.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Connector selection", statement: "Match connector to logical relationship." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — first gap needs concessive 'although/while' for contrast.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — second gap needs causal 'therefore/as a result' for consequence.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — both connectors fit grammatically and logically.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Although/While; Therefore/As a result",
            commonErrors: ["Using 'furthermore' for contrast."],
            examinerNote: "Must match logic, not just add transitions.",
          },
        },
        {
          id: "mla5-u3-cohesion-q10",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Paragraph Excerpt",
            author: "Written for Akademik Space",
            source: "Cohesion practice",
            text: "The researchers surveyed 200 students. They analysed the responses. This showed a clear pattern.",
          },
          stem: "What is the problem with 'This showed a clear pattern'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing — it is perfectly clear" },
              { id: "b", text: "The referent of 'This' is vague" },
              { id: "c", text: "It uses too many pronouns" },
              { id: "d", text: "It is too long" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reference clarity", statement: "Vague 'this' forces the reader to guess the referent." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'This' could mean the analysis or the responses.", working: "vague reference", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** The referent of 'This' is vague",
            commonErrors: ["Missing the unclear reference."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u3-cohesion-q11",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Weak Paragraph",
            author: "Written for Akademik Space",
            source: "Cohesion practice",
            text: "Sleep matters. Students need it. Tests are hard. I think everyone should sleep more.",
          },
          stem: "Rewrite the paragraph to improve cohesion using connectors and reference.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cohesion improvement", statement: "Connectors and clear reference link ideas logically." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — adds logical connector such as 'because' or 'therefore'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — uses clear reference ('this', 'these findings') instead of vague repetition.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — maintains a single topic thread (sleep and learning).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — result reads as one cohesive paragraph.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Example: 'Because sleep supports memory, students who sleep poorly may struggle; therefore, adequate rest should be prioritised.'",
            commonErrors: ["Just adding connectors without fixing reference."],
            examinerNote: "Must improve logical flow, not just add words.",
          },
        },
        {
          id: "mla5-u3-cohesion-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Paragraph Excerpt",
            author: "Written for Akademik Space",
            source: "Cohesion practice",
            text: "The policy was introduced. It was controversial. This caused debate. The debate continued for months.",
          },
          stem: "How many reference devices and how many lexical repetitions appear?",
          response: {
            type: "numeric",
            parts: [
              { label: "Reference devices", answer: 2 },
              { label: "Lexical repetitions", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cohesion devices", statement: "Pronouns/demonstratives = reference; repeated key terms = lexical cohesion." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'It' and 'This' = 2 reference devices.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'policy', 'controversial', 'debate' repeated/varied = 3 lexical links.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "2 reference; 3 lexical.",
            commonErrors: ["Counting 'the' as reference."],
            examinerNote: "Answers may be entered in any order.",
          },
        },
        {
          id: "mla5-u3-cohesion-q13",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Cohesion Definition",
            author: "Written for Akademik Space",
            source: "Cohesion practice",
            text: "Cohesion is the way ideas are linked so a text flows logically from one point to the next.",
          },
          stem: "How many ways does the definition say ideas are linked?",
          response: {
            type: "numeric",
            parts: [{ label: "Ways", answer: 1 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cohesion", statement: "Logical linking of ideas for flow." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'linked logically' = 1 mechanism.", working: "1", marks: 1, markCode: "D" },
            ],
            finalAnswer: "1",
            commonErrors: ["Counting 'ideas' as a way."],
            examinerNote: "Accept 1.",
          },
        },
        {
          id: "mla5-u3-cohesion-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A paragraph ends discussing homework benefits. Which sentence best bridges to the next paragraph about equity concerns?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "However, these benefits are not equally available to all students." },
              { id: "b", text: "In conclusion, homework is great." },
              { id: "c", text: "Let us now talk about something else entirely." },
              { id: "d", text: "Homework is a topic." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Bridging sentences", statement: "A bridge links the end of one paragraph to the start of the next." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'However...not equally available' signals the equity shift.", working: "bridge", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** However, these benefits are not equally available to all students.",
            commonErrors: ["Choosing abrupt topic change."],
            examinerNote: "D1 for (a).",
          },
        },
        {
          id: "mla5-u3-cohesion-q15",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Weak Paragraph",
            author: "Written for Akademik Space",
            source: "Cohesion practice",
            text: "Sleep is important. Students need sleep. Tests are hard without it. Some students stay up late. They do badly. Teachers should care.",
          },
          stem: "Read the weak paragraph and complete the tasks.",
          parts: [
            { label: "a", prompt: "Identify two cohesion problems.", marks: 2 },
            { label: "b", prompt: "Add one connector that shows cause.", marks: 2 },
            { label: "c", prompt: "Replace one vague reference with a clear one.", marks: 2 },
            { label: "d", prompt: "Write the paragraph as one cohesive version (40-60 words).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cohesion revision", statement: "Connectors, clear reference and logical flow." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — problem 1: choppy sentences without connectors.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — problem 2: 'it'/'they' references are vague.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — causal connector 'because/as a result' used correctly.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — connector fits the logic.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — clear reference replaces vague one.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — new reference is unambiguous.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — paragraph flows logically as one unit.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — within word range and preserves meaning.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) choppy; vague refs (b) causal connector (c) clear reference (d) cohesive paragraph.",
            commonErrors: ["Only adding connectors without fixing reference."],
            examinerNote: "(d) must read as a single cohesive paragraph.",
          },
        },
        {
          id: "mla5-u3-cohesion-q16",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Cohesion Choice",
            author: "Written for Akademik Space",
            source: "Cohesion practice",
            text: "Instead of repeating 'the policy' five times, a writer uses 'the policy', 'this measure', 'the reform' and 'it' to maintain clarity.",
          },
          stem: "Why is lexical variation with reference better than mechanical repetition?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It uses more difficult words" },
              { id: "b", text: "It maintains cohesion while avoiding monotonous repetition" },
              { id: "c", text: "It confuses the reader" },
              { id: "d", text: "It shortens the text artificially" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Lexical cohesion", statement: "Varied reference maintains clarity without repetition." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — variation + clear reference keeps cohesion and readability.", working: "varied reference", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** It maintains cohesion while avoiding monotonous repetition",
            commonErrors: ["Thinking repetition is always clearer."],
            examinerNote: "D1 for (b).",
          },
        },
      ],
    },
    {
      id: "mla5-u3-academic-vocabulary",
      title: "Academic vocabulary and collocations",
      skill: "Use precise academic vocabulary and natural collocations to strengthen academic expression.",
      lesson: {
        sections: [
          {
            heading: "High-value vocabulary",
            body: "Academic English uses precise verbs and nouns: **analyse**, **evaluate**, **demonstrate**, **indicate**, **significant**, **limited**, **consistent**, **implications**. These words carry analytical meaning. Learn them in context, not as isolated lists.",
          },
          {
            heading: "Collocations",
            body: "Collocations are natural pairings: 'conduct research', 'pose a question', 'reach a conclusion', 'play a role', 'have an impact'. Incorrect pairings sound unnatural: 'make research' should be 'conduct research'. Learning collocations improves fluency and accuracy.",
          },
          {
            heading: "Word choice and connotation",
            body: "Choose words for precision and connotation. 'Assert' is stronger than 'say'; 'suggest' is weaker; 'demonstrate' implies strong evidence. Academic writers select verbs that match the strength of the evidence. 'The data suggest' is more cautious than 'The data prove'.",
          },
        ],
        keyFormulas: [
          { name: "Academic verbs", statement: "analyse / evaluate / demonstrate / indicate / suggest" },
          { name: "Collocation examples", statement: "conduct research / pose a question / reach a conclusion / have an impact" },
        ],
        workedExample: {
          problem: "Improve: 'The study made research about phones.'",
          solution: "'The study conducted research on phone use.' (Better: 'The study investigated phone use.')",
        },
      },
      questions: [
        {
          id: "mla5-u3-academic-vocabulary-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which collocation is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'make research'" },
              { id: "b", text: "'conduct research'" },
              { id: "c", text: "'do a question'" },
              { id: "d", text: "'take a conclusion'" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Collocation", statement: "'Conduct research' is the natural academic pairing." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'conduct research' is correct collocation.", working: "collocation", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** 'conduct research'",
            commonErrors: ["Literal translation or wrong verb choice."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u3-academic-vocabulary-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Vocabulary Comparison",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Version A: 'The study says phones are bad.'\nVersion B: 'The study indicates that excessive phone use may be associated with reduced attention.'",
          },
          stem: "Explain why Version B is more academic.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Academic word choice", statement: "Precise verbs and hedging improve academic quality." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'indicates' is more precise and cautious than 'says'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'may be associated' hedges the claim.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'excessive' and 'reduced attention' are more precise than 'bad'.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "B uses precise verbs, hedging and specific vocabulary rather than vague or absolute claims.",
            commonErrors: ["Focusing only on longer words rather than precision."],
            examinerNote: "Must explain word choice function.",
          },
        },
        {
          id: "mla5-u3-academic-vocabulary-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Vocabulary Task",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Improve the following sentence using academic vocabulary and correct collocation.\n\n'The teacher did a big study about phones and found that they are very bad for students.'",
          },
          stem: "Rewrite the sentence and identify two improvements.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Academic rewriting", statement: "Use precise verbs, collocations and hedging." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — replaces 'did a big study' with 'conducted a study' or 'investigated'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — replaces 'very bad' with precise qualified claim.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — uses correct collocation and academic vocabulary.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — identifies improvements accurately.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'The teacher conducted a study on phone use and found that it may be associated with reduced attention.'",
            commonErrors: ["Using impressive words incorrectly or without meaning."],
            examinerNote: "Must improve accuracy and precision, not just vocabulary size.",
          },
        },
        {
          id: "mla5-u3-academic-vocabulary-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Vocabulary Application",
            author: "Written for Akademik Space",
            source: "Language practice",
            text: "Write a 90-110 word academic paragraph about the effects of homework. Use at least four academic vocabulary items and two correct collocations.",
          },
          stem: "Write the paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Academic vocabulary production", statement: "Precise vocabulary, collocations and hedging." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — uses at least four appropriate academic terms.", marks: 2, markCode: "D" },
              { reasoning: "Criterion D: Writing — uses at least two correct collocations.", marks: 2, markCode: "D" },
              { reasoning: "Criterion D: Writing — claims are hedged and precise.", marks: 2, markCode: "D" },
              { reasoning: "Criterion D: Writing — paragraph is coherent and within range.", marks: 2, markCode: "D" },
            ],
            finalAnswer: "Academic paragraph with vocabulary, collocations, hedging and cohesion.",
            commonErrors: ["Forcing rare words without accurate meaning."],
            examinerNote: "Vocabulary should be used naturally and accurately.",
          },
        },
        {
          id: "mla5-u3-academic-vocabulary-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct collocation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "make research" },
              { id: "b", text: "conduct research" },
              { id: "c", text: "do research about" },
              { id: "d", text: "create a question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Collocation", statement: "Natural word pairings such as 'conduct research'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'conduct research' is the standard collocation.", working: "conduct", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** conduct research",
            commonErrors: ["Using literal translations like 'make research'."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u3-academic-vocabulary-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which verb is stronger evidence-wise: 'suggest' or 'prove'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "suggest" },
              { id: "b", text: "prove" },
              { id: "c", text: "both equally strong" },
              { id: "d", text: "neither is a verb" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Verb strength", statement: "'Prove' claims certainty; 'suggest' claims possibility." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'prove' is the stronger claim.", working: "prove", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** prove",
            commonErrors: ["Thinking 'suggest' is weaker than it is."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u3-academic-vocabulary-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Sentence Set",
            author: "Written for Akademik Space",
            source: "Vocabulary practice",
            text: "S1: 'The study conducted research on sleep.' S2: 'The study made research on sleep.' S3: 'The study posed a question about sleep.'",
          },
          stem: "Which sentence contains an unnatural collocation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "S1" },
              { id: "b", text: "S2" },
              { id: "c", text: "S3" },
              { id: "d", text: "All are natural" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Collocation accuracy", statement: "'Conduct research' is natural; 'make research' is not." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'made research' is unnatural; should be 'conducted research'.", working: "unnatural", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** S2",
            commonErrors: ["Missing 'make research'."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u3-academic-vocabulary-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Collocation List",
            author: "Written for Akademik Space",
            source: "Vocabulary practice",
            text: "Correct collocations: 'conduct research', 'pose a question', 'reach a conclusion', 'have an impact', 'play a role'.",
          },
          stem: "How many correct academic collocations are listed?",
          response: {
            type: "numeric",
            parts: [{ label: "Collocations", answer: 5 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Collocation recognition", statement: "Recognise standard academic pairings." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — count the five listed collocations.", working: "5", marks: 1, markCode: "D" },
            ],
            finalAnswer: "5",
            commonErrors: ["Counting 'academic' as a collocation."],
            examinerNote: "Accept 5.",
          },
        },
        {
          id: "mla5-u3-academic-vocabulary-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Replace the weak verb in each sentence: 'The study made research about phones.' 'The data said the effect was real.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Verb precision", statement: "Use precise academic verbs and natural collocations." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'made research' -> 'conducted research' or 'investigated'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'said' -> 'suggested' or 'indicated' (strength-appropriate).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — both revised sentences are natural and precise.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'The study conducted research on phones.' 'The data suggested the effect was real.'",
            commonErrors: ["Using 'proved' where evidence is correlational."],
            examinerNote: "Verb choice must match evidence strength.",
          },
        },
        {
          id: "mla5-u3-academic-vocabulary-q10",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Evidence Sentence",
            author: "Written for Akademik Space",
            source: "Vocabulary practice",
            text: "The correlational data show an association between screen time and sleep quality.",
          },
          stem: "Which verb best matches this correlational evidence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "prove" },
              { id: "b", text: "demonstrate" },
              { id: "c", text: "suggest" },
              { id: "d", text: "guarantee" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Verb strength matching", statement: "Correlational data support 'suggest', not 'prove'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — association without causation = 'suggest'.", working: "suggest", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** suggest",
            commonErrors: ["Using 'prove' for correlational data."],
            examinerNote: "D1 for (c).",
          },
        },
        {
          id: "mla5-u3-academic-vocabulary-q11",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Draft Sentences",
            author: "Written for Akademik Space",
            source: "Vocabulary practice",
            text: "Draft: 'The study made research about phones and found it very important. The results were super significant.'",
          },
          stem: "Analyse the vocabulary problems and revise the sentences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary precision", statement: "Natural collocations and precise, strength-matched verbs." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — problem 1: 'made research' unnatural collocation.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — problem 2: 'very important' is vague; 'super significant' is informal and overclaims.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — revision uses 'conducted research' and precise modifiers.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — revised sentences are natural and appropriately hedged.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'The study conducted research on phone use. The results were statistically significant.'",
            commonErrors: ["Only fixing the collocation, not the overclaim."],
            examinerNote: "Must fix collocation and intensity.",
          },
        },
        {
          id: "mla5-u3-academic-vocabulary-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Academic Verbs",
            author: "Written for Akademik Space",
            source: "Vocabulary practice",
            text: "The researchers analysed the data, evaluated the methods and demonstrated a clear pattern.",
          },
          stem: "How many precise academic verbs appear, and how many are vague verbs like 'say' or 'get'?",
          response: {
            type: "numeric",
            parts: [
              { label: "Academic verbs", answer: 3 },
              { label: "Vague verbs", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Verb precision", statement: "Analysed, evaluated, demonstrated are precise; none are vague." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'analysed', 'evaluated', 'demonstrated' = 3 academic verbs.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — no vague verbs present = 0.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "3 academic; 0 vague.",
            commonErrors: ["Counting 'the' or 'data' as verbs."],
            examinerNote: "Answers may be entered in any order.",
          },
        },
        {
          id: "mla5-u3-academic-vocabulary-q13",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Collocation Definition",
            author: "Written for Akademik Space",
            source: "Vocabulary practice",
            text: "A collocation is a natural pairing of words that native speakers expect to occur together.",
          },
          stem: "How many elements define a collocation in this text?",
          response: {
            type: "numeric",
            parts: [{ label: "Elements", answer: 2 }],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Collocation", statement: "Natural word pairings expected by native speakers." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — elements: natural pairing + expected together = 2.", working: "2", marks: 1, markCode: "D" },
            ],
            finalAnswer: "2",
            commonErrors: ["Counting 'words' as an element."],
            examinerNote: "Accept 2.",
          },
        },
        {
          id: "mla5-u3-academic-vocabulary-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the correct collocation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "make an impact" },
              { id: "b", text: "have an impact" },
              { id: "c", text: "do an impact" },
              { id: "d", text: "create an impact" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Collocation accuracy", statement: "'Have an impact' is the standard collocation." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'have an impact' is the natural pairing.", working: "have", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** have an impact",
            commonErrors: ["Choosing literal 'make an impact'."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla5-u3-academic-vocabulary-q15",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Informal Paragraph",
            author: "Written for Akademik Space",
            source: "Vocabulary practice",
            text: "Draft: 'The study was about phones and it was super interesting. It found that phones are really bad. The results were kinda significant.'",
          },
          stem: "Read the draft and complete the tasks.",
          parts: [
            { label: "a", prompt: "Identify three vocabulary problems.", marks: 3 },
            { label: "b", prompt: "Replace 'was about' with a precise academic verb.", marks: 1 },
            { label: "c", prompt: "Replace 'are really bad' with a precise, hedged claim.", marks: 2 },
            { label: "d", prompt: "Rewrite 'kinda significant' appropriately.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary revision", statement: "Precise verbs, natural collocations and strength-matched claims." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — problem 1: 'was about' is vague.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — problem 2: 'really bad' is informal and absolute.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — problem 3: 'kinda significant' is slang and overclaims.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — 'was about' -> 'investigated' or 'examined'.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — hedged precise claim such as 'may be associated with reduced attention'.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — removes absolutes and slang.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — 'kinda significant' -> 'statistically significant' or 'moderately significant'.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — result is precise and appropriately qualified.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) vague; informal; slang (b) investigated (c) hedged claim (d) precise modifier.",
            commonErrors: ["Only fixing grammar, not vocabulary."],
            examinerNote: "Each revision must preserve meaning.",
          },
        },
        {
          id: "mla5-u3-academic-vocabulary-q16",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Verb Choice",
            author: "Written for Akademik Space",
            source: "Vocabulary practice",
            text: "The study demonstrates a clear pattern, whereas another study only indicates a possible trend.",
          },
          stem: "Why does the writer use 'demonstrates' for one study and 'indicates' for the other?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To use different words for variety" },
              { id: "b", text: "Because 'demonstrates' implies stronger evidence than 'indicates'" },
              { id: "c", text: "Because the second study is longer" },
              { id: "d", text: "Because 'indicates' is more formal" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Verb strength matching", statement: "Verb choice should match evidence strength." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'demonstrates' > 'indicates' in claimed certainty.", working: "strength match", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Because 'demonstrates' implies stronger evidence than 'indicates'",
            commonErrors: ["Thinking verb choice is just style."],
            examinerNote: "D1 for (b).",
          },
        },
      ],
    },
  ],
};
