import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "mll5-u2-lesson-2-1",
  code: "2-1",
  title: "Language and Power",
  goal: "I CAN analyse how language is used to establish, maintain or challenge power relationships in texts.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
  ],
  vocabulary: [
    { term: "Power", definition: "The ability to influence or control others — through language, institutions, or force." },
    { term: "Authority", definition: "Legitimate power — the right to command or influence." },
    { term: "Imperative", definition: "Commanding language — 'Do this', 'You must'." },
    { term: "Passive voice", definition: "When the subject receives the action — 'Mistakes were made' (hides who)." },
    { term: "Nominalization", definition: "Turning verbs into nouns — 'decide' → 'decision' — can hide agency." },
    { term: "Hegemony", definition: "Dominance maintained through consent — when the powerful seem natural." },
  ],
  concepts: [
    {
      id: "mll5-u2-language-power",
      title: "Language as power",
      skill: "Identify how language establishes or challenges power dynamics.",
      lesson: {
        sections: [
          {
            heading: "Power through language",
            body: "Language **creates** power: who gets to speak? Who is listened to? Commands ('You will') assert dominance; questions ('May I?') show deference. Passive voice hides responsibility — 'mistakes were made' vs 'I made mistakes'. Nominalization ('the decision was made') obscures who decided.",
          },
          {
            heading: "Hegemony and common sense",
            body: "Power often works through **consent** — we accept certain language as 'natural'. 'Sir' and 'madam' seem polite, but they reinforce hierarchy. When we stop questioning these conventions, power becomes invisible. Critical reading asks: who benefits from this language?",
          },
          {
            heading: "Challenging power through language",
            body: "Language can also **resist** power: humor, irony, subversion, counter-narratives. 'Yes, Minister' satire exposes bureaucratic absurdity. Calling someone 'comrade' vs 'citizen' shifts political meaning. Language is never neutral — it always serves someone's interest.",
          },
        ],
        keyFormulas: [
          { name: "Power analysis", statement: "Who speaks + Who listens + How = power dynamic." },
        ],
        workedExample: {
          problem: "'The decision was made to restructure the department.' vs 'The CEO decided to restructure the department.' — What changes?",
          solution: "First hides agency (passive + nominalization) — no one responsible; second names the CEO — clear power and accountability.",
        },
      },
      questions: [
        {
          id: "mll5-u2-language-power-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does passive voice do to power relations?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It sounds more formal" },
              { id: "b", text: "It makes the subject more powerful" },
              { id: "c", text: "It makes sentences longer" },
              { id: "d", text: "It can hide who is responsible for an action" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Passive voice and agency", statement: "Passive voice can obscure responsibility." }],
            steps: [{ reasoning: "Criterion A (Analysing): passive hides agency — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** It can hide who is responsible",
          },
        },
        {
          id: "mll5-u2-language-power-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Announcements",
            author: "Written for Akademik Space",
            text: "Announcement A: 'Staff are reminded that attendance is mandatory. Failure to comply will result in disciplinary action.'\n\nAnnouncement B: 'We'd like everyone to try to be on time — it really helps the team!'",
          },
          stem: "Compare the power dynamics in these two announcements.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Power through language", statement: "Commands and threats assert power; requests and appeals build consent." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A uses commands ('mandatory', 'will result') and threats — asserts authority, fear-based compliance.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B uses requests ('we'd like', 'try to') and team appeal — softer power, seeks consent not fear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A = authoritarian (commands, threats); B = consultative (requests, team appeal) — different power strategies.",
          },
        },
        {
          id: "mll5-u2-language-power-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Speech",
            author: "Written for Akademik Space",
            text: "'We the people, in order to form a more perfect union... We hold these truths to be self-evident: that all men are created equal.'",
          },
          stem: "Analyse how this language establishes authority and legitimacy.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Language of legitimacy", statement: "Formal, inclusive, declarative language creates authority." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'We the people' — inclusive pronoun creates collective identity, positions speaker as representative of all.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'self-evident' — presents claims as obvious truth, not opinion; 'created equal' is declarative, not argumentative.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): formal, constitutional language creates authority — this sounds like founding document, not personal opinion.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'We the people' = collective authority; 'self-evident' = truth claims; formal declarative = legitimacy.",
          },
        },
        {
          id: "mll5-u2-language-power-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Rewrite 'Mistakes were made' in active voice with clear agency.", marks: 1 },
            { label: "b", prompt: "Explain what the passive version hides.", marks: 2 },
            { label: "c", prompt: "Why might a leader prefer the passive version?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Agency and accountability", statement: "Passive voice protects power by hiding responsibility." }],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): active — 'We made mistakes' or 'The committee made mistakes.'", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion A (Analysing): passive hides who made the mistakes — no one is accountable.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'were made' is also vague — sounds like mistakes happened by themselves.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): leader avoids blame — passive protects reputation and power; accountability would weaken authority.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): language as power tool — obscuring responsibility maintains control.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 'We made mistakes.' (b) Hides who is responsible. (c) Avoids blame — maintains power by obscuring accountability.",
          },
        },
        {
          id: "mll5-u2-language-power-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does passive voice do to power relations?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has no effect on meaning" },
              { id: "b", text: "It always strengthens the speaker" },
              { id: "c", text: "It makes sentences more exciting" },
              { id: "d", text: "It can hide who is responsible for an action" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Passive voice and agency", statement: "Passive voice can obscure responsibility." }],
            steps: [{ reasoning: "Criterion A (Analysing): passive hides the agent — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** It can hide who is responsible for an action",
          },
        },
        {
          id: "mll5-u2-language-power-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Notice",
            author: "Written for Akademik Space",
            text: "'Submit your forms. Pay the fee. Report to room 4.'",
          },
          stem: "How many imperative commands appear in this extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Imperative", statement: "Commanding language asserts authority." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'Submit', 'Pay', 'Report' — 3 imperatives.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u2-language-power-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Sentences",
            author: "Written for Akademik Space",
            text: "Sentence A: 'The committee reached a decision.'\n\nSentence B: 'The committee decided.'",
          },
          stem: "What does Sentence A do that Sentence B avoids?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It names a different committee" },
              { id: "b", text: "It is more exciting" },
              { id: "c", text: "It uses nominalization — 'reached a decision' turns the action into a noun, softening agency" },
              { id: "d", text: "It is ungrammatical" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Nominalization", statement: "Turning verbs into nouns can hide agency." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'reached a decision' = nominalization; 'decided' = direct verb — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** It uses nominalization — 'reached a decision' turns the action into a noun",
          },
        },
        {
          id: "mll5-u2-language-power-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Email",
            author: "Written for Akademik Space",
            text: "'Per my last email, kindly be advised that attendance at tomorrow's briefing is not optional.'",
          },
          stem: "What power strategy does this email use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It surrenders all authority" },
              { id: "b", text: "It has no power dynamic" },
              { id: "c", text: "It uses bureaucratic indirectness and euphemism ('kindly be advised', 'not optional') to assert authority while appearing polite" },
              { id: "d", text: "It requests politely and offers choice" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Bureaucratic power", statement: "Euphemism and formality can assert authority indirectly." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'kindly be advised', 'not optional' — polite surface, commanding underneath — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** It uses bureaucratic indirectness and euphemism to assert authority while appearing polite",
          },
        },
        {
          id: "mll5-u2-language-power-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is 'hegemony' in the context of language and power?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dominance maintained through consent — when the powerful seem natural and unquestioned" },
              { id: "b", text: "A type of government" },
              { id: "c", text: "A military strategy" },
              { id: "d", text: "A writing style" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Hegemony", statement: "Dominance maintained through consent — power seems natural." }],
            steps: [{ reasoning: "Criterion A (Analysing): hegemony = consent-based dominance — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** Dominance maintained through consent — when the powerful seem natural and unquestioned",
          },
        },
        {
          id: "mll5-u2-language-power-q10",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Speech",
            author: "Written for Akademik Space",
            text: "'We will not rest until we have secured the future. We owe it to our children.'",
          },
          stem: "How many times does the speaker use 'we' in this extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Inclusive pronouns", statement: "'We' creates collective identity and shared purpose." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'We will', 'we have', 'We owe' — the pronoun 'we' appears 3 times.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u2-language-power-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Statement",
            author: "Written for Akademik Space",
            text: "'The investigation was conducted and findings were released.'",
          },
          stem: "Rewrite this in active voice with clear agency, then explain what the original hides.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Agency and accountability", statement: "Passive voice + nominalization obscures who acts." }],
            steps: [
              { reasoning: "Criterion C (Producing text): active rewrite — e.g. 'The committee investigated and released its findings.'", marks: 1, markCode: "C" },
              { reasoning: "Criterion A (Analysing): 'was conducted' and 'were released' are passive — no one is named as actor.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'investigation' and 'findings' are nominalizations — actions turned into things, further hiding agency.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Active version names the actor; original hides who investigated and who released findings.",
          },
        },
        {
          id: "mll5-u2-language-power-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an imperative?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A question" },
              { id: "b", text: "A type of poem" },
              { id: "c", text: "Commanding language — 'Do this', 'You must'" },
              { id: "d", text: "A polite request" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Imperative", statement: "Commanding language asserts authority." }],
            steps: [{ reasoning: "Criterion A (Analysing): imperative = command — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** Commanding language — 'Do this', 'You must'",
          },
        },
        {
          id: "mll5-u2-language-power-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the power strategy in: 'You will report to my office immediately.'", marks: 1 },
            { label: "b", prompt: "Rewrite it as a request that preserves politeness but reduces authority.", marks: 2 },
            { label: "c", prompt: "Explain what changes in the power dynamic.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Direct commands vs requests", statement: "Imperatives assert authority; requests seek consent." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): direct imperative — 'You will report' — asserts authority, no choice offered.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion C (Producing text): request version — e.g. 'Could you please report to my office when you can?'", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D (Using language): modal 'could', 'please', softer phrasing — polite request rather than command.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion A (Analysing): command = hierarchy enforced; request = negotiation possible — subordinate gains some agency.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'immediately' also removes the subordinate's control over timing — request restores some autonomy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Direct command. (b) e.g. 'Could you please report to my office when you can?' (c) Command enforces hierarchy; request allows negotiation.",
          },
        },
        {
          id: "mll5-u2-language-power-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Warning",
            author: "Written for Akademik Space",
            text: "'You must comply. Failure will result in consequences. This is not a request.'",
          },
          stem: "How many expressions of coercive authority appear in this extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Coercive language", statement: "Commands, threats and denials of choice assert power." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'must comply' (command), 'consequences' (threat), 'not a request' (denial of choice) — 3 coercive expressions.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u2-language-power-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "The Phrase",
            author: "Written for Akademik Space",
            text: "'Mistakes were made during the rollout.'",
          },
          stem: "When analysing power in this sentence, the most important question to ask is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Does it rhyme?" },
              { id: "b", text: "Is the sentence long enough?" },
              { id: "c", text: "Who benefits from hiding who made the mistakes?" },
              { id: "d", text: "Is the grammar correct?" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Critical reading", statement: "Ask who benefits from obscured agency." }],
            steps: [{ reasoning: "Criterion A (Analysing): passive hides agent; critical question = who benefits — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** Who benefits from hiding who made the mistakes?",
          },
        },
        {
          id: "mll5-u2-language-power-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the power move in: 'As your superior, I expect immediate compliance.'", marks: 1 },
            { label: "b", prompt: "Explain how 'your superior' constructs authority.", marks: 2 },
            { label: "c", prompt: "Rewrite to challenge the power dynamic respectfully.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Authority claims", statement: "Explicit rank claims + demands = direct power assertion." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'your superior' + 'I expect immediate compliance' — explicit hierarchy + demand.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'superior' invokes institutional rank — authority presented as natural fact, not earned in the moment.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'I expect' is possessive/authoritative — speaker claims right to obedience.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): challenge — e.g. 'I understand you're busy; could we discuss the timeline?'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): reframes as collaboration, removes rank claim — respectful challenge to power.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Rank claim + demand. (b) 'Superior' naturalizes hierarchy; 'I expect' claims obedience. (c) e.g. 'Could we discuss the timeline?'",
          },
        },
      ],
    },
    {
      id: "mll5-u2-identity-language",
      title: "Language and identity",
      skill: "Analyse how language constructs, expresses and shapes identity.",
      lesson: {
        sections: [
          {
            heading: "Language creates identity",
            body: "We express identity through language: **dialect**, **slang**, **pronouns**, **names**, **code-switching**. 'How are you?' vs 'You alright?' vs 'Wasup?' — each signals different identity (formal, friendly, casual). Language doesn't just express who we are; it **constructs** who we are.",
          },
          {
            heading: "Labels and identity",
            body: "Labels are powerful: 'immigrant' vs 'newcomer' vs 'refugee' — same person, different identity implications. 'Disabled' vs 'person with disability' — person-first language changes focus. Language can **empower** ('survivor') or **disempower** ('victim').",
          },
          {
            heading: "Code-switching",
            body: "Many people **switch** between languages/dialects depending on context — home vs work, formal vs informal. This isn't inconsistency; it's identity negotiation. 'Speaking proper' at work, 'speaking real' with friends — each version is authentic.",
          },
        ],
        keyFormulas: [
          { name: "Identity through language", statement: "Word choice + register + labels = identity construction." },
        ],
        workedExample: {
          problem: "'He speaks like a proper gentleman' vs 'He talks like a street guy' — what identities are constructed?",
          solution: "First = educated, refined, upper-class identity; second = casual, urban, working-class identity — language constructs social position.",
        },
      },
      questions: [
        {
          id: "mll5-u2-identity-language-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is code-switching?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Switching between languages or dialects depending on context" },
              { id: "b", text: "Changing jobs" },
              { id: "c", text: "A computer program" },
              { id: "d", text: "A type of dance" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Code-switching", statement: "Switching between languages/dialects by context." }],
            steps: [{ reasoning: "Criterion A (Analysing): code-switching = language/dialect switching — (a).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** Switching between languages or dialects depending on context",
          },
        },
        {
          id: "mll5-u2-identity-language-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Introductions",
            author: "Written for Akademik Space",
            text: "Introduction A: 'I am a person with a disability who uses a wheelchair.'\n\nIntroduction B: 'I am disabled.'",
          },
          stem: "Compare these two ways of expressing identity — what does each emphasize?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Person-first language", statement: "Language choice shapes whether disability defines or describes identity." }],
            steps: [
              { reasoning: "Criterion A (Analysing): A uses person-first language — 'person with a disability' — person is primary, disability is attribute.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): B uses 'I am disabled' — disability defines identity entirely; different emphasis, possibly more direct or more limiting.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A = person-first (disability as attribute); B = identity-first (disability as defining) — language shapes identity.",
          },
        },
        {
          id: "mll5-u2-identity-language-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Names",
            author: "Written for Akademik Space",
            text: "'They called him 'boy' — not his name, not 'son', just 'boy'. It was how his mother spoke to him, how the white store owners spoke to him, how the world seemed to see him.",
          },
          stem: "Analyse how the label 'boy' constructs identity and power.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Labels and power", statement: "Labels can infantilize, dehumanize or empower." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'not his name' — label replaces identity; 'boy' infantilizes, denies adulthood.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'his mother... white store owners... the world' — label used by multiple authorities, shows systemic power.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'how the world seemed to see him' — label shapes self-perception; language constructs identity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "'Boy' = infantilizing label denying adulthood; used by authorities (mother, store owners) = systemic power shaping identity.",
          },
        },
        {
          id: "mll5-u2-identity-language-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify two language choices that express identity in: 'Yo, what's good fam?'", marks: 1 },
            { label: "b", prompt: "What identity does this language construct?", marks: 2 },
            { label: "c", prompt: "Rewrite it in formal register — what identity would that construct?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Register and identity", statement: "Language register constructs social identity." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'Yo', 'fam' — slang, direct address; informal, casual.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): constructs casual, friendly, possibly younger/urban identity — relaxed social setting.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'fam' signals group belonging — in-group identity.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): formal rewrite — e.g. 'Hello, how are you?' — constructs professional/respectful identity.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): formal register changes identity signal — professional vs casual.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) 'Yo', 'fam' — slang. (b) Casual/in-group identity. (c) 'Hello, how are you?' — professional identity.",
          },
        },
        {
          id: "mll5-u2-identity-language-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is code-switching?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing in two fonts" },
              { id: "b", text: "Changing jobs frequently" },
              { id: "c", text: "Switching between languages or dialects depending on context" },
              { id: "d", text: "A type of computer programming" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Code-switching", statement: "Switching between languages/dialects by context." }],
            steps: [{ reasoning: "Criterion A (Analysing): code-switching = contextual language switching — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** Switching between languages or dialects depending on context",
          },
        },
        {
          id: "mll5-u2-identity-language-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Text",
            author: "Written for Akademik Space",
            text: "'Yo fam, lemme holla back when I'm free.'",
          },
          stem: "How many informal/slang words appear in this text?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 4 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Register markers", statement: "Slang signals casual, in-group identity." }],
            steps: [{ reasoning: "Criterion D (Using language): 'Yo', 'fam', 'lemme', 'holla' — 4 informal words; 'when I'm free' is standard.", marks: 1, markCode: "D" }],
            finalAnswer: "4",
          },
        },
        {
          id: "mll5-u2-identity-language-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "How does 'newcomer' differ from 'immigrant' as a label?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Newcomer' emphasises recent arrival neutrally; 'immigrant' emphasises permanent migration status — different identity implications" },
              { id: "b", text: "'Newcomer' is a legal term" },
              { id: "c", text: "'Immigrant' is always more positive" },
              { id: "d", text: "They mean exactly the same thing" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Labels and identity", statement: "Labels carry different connotations and identity implications." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'newcomer' neutral/temporary vs 'immigrant' status-loaded — different identity signals — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** 'Newcomer' emphasises recent arrival neutrally; 'immigrant' emphasises permanent migration status",
          },
        },
        {
          id: "mll5-u2-identity-language-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Introduction",
            author: "Written for Akademik Space",
            text: "'At work she says 'Certainly, I'll look into that.' With friends she says 'Yeah, gimme a sec.'",
          },
          stem: "What does this extract demonstrate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Formal language is always better" },
              { id: "b", text: "She has two different personalities" },
              { id: "c", text: "She is inconsistent and careless" },
              { id: "d", text: "Code-switching — she adapts her language to context, negotiating different identities at work and with friends" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Code-switching", statement: "Language adapts to context — each version is authentic." }],
            steps: [{ reasoning: "Criterion A (Analysing): work vs friends = register shift = code-switching — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(d)** Code-switching — she adapts her language to context",
          },
        },
        {
          id: "mll5-u2-identity-language-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the difference between 'person-first' and 'identity-first' language?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Person-first puts the person before the attribute ('person with disability'); identity-first centres the identity ('disabled person')" },
              { id: "b", text: "They are identical" },
              { id: "c", text: "Person-first is always wrong" },
              { id: "d", text: "Identity-first is a legal requirement" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Person-first vs identity-first", statement: "Different ordering of person and attribute changes emphasis." }],
            steps: [{ reasoning: "Criterion A (Analysing): person-first = attribute secondary; identity-first = identity central — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** Person-first puts the person before the attribute; identity-first centres the identity",
          },
        },
        {
          id: "mll5-u2-identity-language-q10",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Two Greetings",
            author: "Written for Akademik Space",
            text: "Formal: 'Good morning, how do you do?'\n\nInformal: 'Yo, what's good?'",
          },
          stem: "How many informal/slang words appear in the informal greeting?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Register", statement: "Slang and contractions mark informal identity." }],
            steps: [{ reasoning: "Criterion D (Using language): 'Yo', 'what's' (contraction), 'good' — informal markers = 3 ('Yo', 'what's', casual 'good').", marks: 1, markCode: "D" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u2-identity-language-q11",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Narrator",
            author: "Written for Akademik Space",
            text: "At the interview she said 'I am proficient in English.' At lunch with her cousins she laughed and said 'My English? It's a whole situation.'",
          },
          stem: "Analyse the code-switching here — what does each version of English reveal about identity?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Code-switching and identity", statement: "Language shifts negotiate social identity across contexts." }],
            steps: [
              { reasoning: "Criterion A (Analysing): interview version — 'proficient' — formal, competent, professional identity constructed for evaluation.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): family version — 'a whole situation' — self-deprecating, casual, intimate identity with in-group.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): both are authentic — she performs different selves for different audiences; language constructs, not just expresses, identity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Formal 'proficient' = professional self; casual 'whole situation' = intimate self — code-switching negotiates identity per audience.",
          },
        },
        {
          id: "mll5-u2-identity-language-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these most directly constructs identity through language?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The colour of a book cover" },
              { id: "b", text: "Whether someone says 'How do you do?' or 'Yo, what's good?'" },
              { id: "c", text: "The weather outside" },
              { id: "d", text: "How tall a building is" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "principle", name: "Language and identity", statement: "Register, slang and phrasing construct social identity." }],
            steps: [{ reasoning: "Criterion A (Analysing): greeting choice signals identity/register — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Whether someone says 'How do you do?' or 'Yo, what's good?'",
          },
        },
        {
          id: "mll5-u2-identity-language-q13",
          difficulty: "core",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the identity constructed by: 'We few, we happy few, we band of brothers.'", marks: 1 },
            { label: "b", prompt: "Explain how the pronoun 'we' builds group identity.", marks: 2 },
            { label: "c", prompt: "Rewrite the line to include an outsider — what changes about the identity?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Pronouns and group identity", statement: "'We' constructs in-group belonging." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): in-group identity — elite, bonded, masculine 'band of brothers'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'we' repeated creates collective identity — speaker merges self with group; 'few' and 'band' emphasize exclusivity.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): repetition of 'we' builds rhythm and solidarity — identity as shared bond.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): e.g. 'We few, and you — welcome, if you can keep up.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): adding 'you' shifts from closed in-group to inclusive/conditional membership — identity boundary changes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) In-group/band identity. (b) 'We' builds collective belonging. (c) Adding 'you' opens or conditions membership.",
          },
        },
        {
          id: "mll5-u2-identity-language-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Labels",
            author: "Written for Akademik Space",
            text: "The text calls her 'the doctor', 'the woman', and 'Dr. Alvarez' in different places.",
          },
          stem: "How many different labels are applied to her in this extract?",
          response: {
            type: "numeric",
            parts: [{ label: "Answer", answer: 3 }],
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Labels", statement: "Different labels construct different identities." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'the doctor', 'the woman', 'Dr. Alvarez' — 3 labels.", marks: 1, markCode: "A" }],
            finalAnswer: "3",
          },
        },
        {
          id: "mll5-u2-identity-language-q15",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "The Dialect",
            author: "Written for Akademik Space",
            text: "He dropped the 'g' from every '-ing' word and said 'y'all' instead of 'you all'.",
          },
          stem: "What does this dialect signal about identity?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Regional and social identity — dialect marks belonging to a particular community and can be a source of pride" },
              { id: "b", text: "He is pretending to be someone else" },
              { id: "c", text: "Dialect has no identity meaning" },
              { id: "d", text: "He is uneducated — dialect is always a flaw" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Dialect and identity", statement: "Dialect signals regional/social belonging." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'y'all', dropped 'g' — regional dialect marks community identity — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** Regional and social identity — dialect marks belonging to a particular community",
          },
        },
        {
          id: "mll5-u2-identity-language-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Identify the language choice in: 'I'm not 'disabled', I'm a person who happens to use a wheelchair.'", marks: 1 },
            { label: "b", prompt: "Explain what identity this phrasing constructs.", marks: 2 },
            { label: "c", prompt: "Rewrite it using identity-first language and explain the shift.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Person-first language", statement: "Person-first phrasing separates person from attribute." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): person-first language — 'a person who happens to use a wheelchair' — plus explicit rejection of 'disabled' label.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): constructs identity where personhood is primary and wheelchair is incidental ('happens to') — asserts autonomy.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'I'm not disabled' is defiant — refuses the label others impose.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion C (Producing text): identity-first — e.g. 'I'm a wheelchair user.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion A (Analysing): 'wheelchair user' centres the identity — can be empowering or defining depending on context; different emphasis.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Person-first. (b) Personhood primary, disability incidental. (c) 'I'm a wheelchair user' — identity-first, different emphasis.",
          },
        },
      ],
    },
  ],
};
