import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const USAGE: TextExtract = {
  title: "Notes from a Style Committee",
  author: "Written for Akademik Space",
  source: "Excerpt from the minutes of a school newspaper's editorial board meeting",
  text: "The committee reviewed four disputed usages before updating the paper's style sheet.\n\nFirst, whether to allow a split infinitive such as 'to boldly question'. Members noted that the old rule against splitting came from Latin, where an infinitive is a single word, and that most current guides now accept the split when it reads more clearly.\n\nSecond, whether 'data' takes a plural or singular verb. The science editor argued for 'the data are', while the features editor preferred 'the data is' in general prose. The committee agreed to follow the style guide the paper has adopted and to apply it consistently.\n\nThird, singular 'they'. Several members pointed out that writers have used it for centuries, and that major guides now accept it for a person whose gender is unknown or unspecified, and for a person who uses it.\n\nFinally, hyphens. The committee decided that a compound modifier before a noun gets a hyphen ('a well-known author'), but the same words after the noun do not ('the author is well known').",
};

const SYNTAX: TextExtract = {
  title: "Passage from an Essay on Walking Home",
  author: "Written for Akademik Space",
  source: "Original essay passage",
  text: "I walked home that evening, past the shuttered hardware store, past the bakery whose windows glowed like lanterns, past the old men arguing on the bench about a game they had never played. Only when I reached my own street did I understand what I had been avoiding. Silence. Not the peaceful kind. The kind that follows an announcement. Into the kitchen I went, and there, at the table, sat my father, the letter folded in his hands.",
};

export const lesson33: Lesson = {
  id: "ela11-u3-lesson-3-3",
  code: "3-3",
  title: "Advanced Conventions and Style",
  goal: "I CAN resolve contested usage questions with style guides, apply hyphenation conventions and vary syntax deliberately to create emphasis, suspense and rhythm.",
  standards: ["L.11-12.1", "L.11-12.1a", "L.11-12.1b", "L.11-12.2a", "L.11-12.3a"],
  vocabulary: [
    { term: "Usage", definition: "The customary way words and constructions are employed by speakers and writers, which can differ by context and change over time." },
    { term: "Style guide", definition: "A published set of conventions (such as MLA, APA or Chicago) that settles usage and punctuation questions for a field or publication." },
    { term: "Compound modifier", definition: "Two or more words that work together as a single adjective before a noun, often joined with a hyphen." },
    { term: "Periodic sentence", definition: "A sentence that delays its main clause or main idea until the end, building suspense." },
    { term: "Cumulative sentence", definition: "A sentence that begins with the main clause and then adds modifying detail after it." },
    { term: "Inversion", definition: "A change from normal word order, such as placing the object or a phrase before the subject, to create emphasis." },
    { term: "Deliberate fragment", definition: "An incomplete sentence used on purpose, for emphasis, rhythm or voice, in a context where the effect justifies it." },
  ],
  concepts: [
    {
      id: "ela11-u3-usage-conventions",
      title: "Usage, style guides and hyphenation",
      skill: "Treat usage as convention that changes and is contested, resolve questions with a style guide, and apply hyphenation rules.",
      lesson: {
        sections: [
          {
            heading: "Usage is convention, not law",
            body: "Many familiar 'rules' are conventions that have changed or are disputed. The ban on **split infinitives** ('to boldly go') borrowed a Latin pattern that does not fit English, and many modern guides allow the split. Ending a sentence with a preposition, using **singular 'they'** and treating 'data' as singular or plural are likewise contested. A skilled writer does not simply memorize a rule or ignore it: she identifies the context (formal academic writing, journalism, informal prose), consults the **style guide** that governs it and applies it **consistently**. When guides disagree, choose the one your audience or institution uses, and avoid constructions that distract your readers.",
          },
          {
            heading: "Hyphenation conventions",
            body: "Hyphens clarify relationships between words. A **compound modifier before a noun** is usually hyphenated ('a well-known author', 'a state-of-the-art lab'), but the same words after the noun are not ('the author is well known'). Do not hyphenate an adverb ending in -ly with the word it modifies ('a highly regarded novel'). Hyphenate compound numbers from twenty-one to ninety-nine, many words with the prefixes self-, ex- (meaning former) and all- ('self-reliant'), and use a hyphen to prevent confusion ('re-cover' the sofa versus 'recover' from illness). When unsure, check a current dictionary or the style guide.",
          },
        ],
        keyFormulas: [
          { name: "Contested usage", statement: "Identify context, consult the governing style guide, then apply the choice consistently." },
          { name: "Hyphen before, not after", statement: "Hyphenate a compound modifier before a noun ('well-known author') but not after it ('well known')." },
          { name: "Adverb exception", statement: "No hyphen after an -ly adverb: 'a highly regarded novel'." },
        ],
        workedExample: {
          problem: "Edit for hyphens: 'The brilliantly-written essay by the well known critic was a thought provoking read.'",
          solution: "Edit: The brilliantly written essay by the well-known critic was a thought-provoking read. 'Brilliantly written' has no hyphen because the first word is an -ly adverb. 'Well-known' and 'thought-provoking' are compound modifiers before nouns ('critic' and 'read'), so they take hyphens.",
        },
      },
      questions: [
        {
          id: "ela11-u3-usage-conventions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: USAGE,
          stem: "According to the committee's final decision, which phrase is correctly hyphenated?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A well known author visited the school." },
              { id: "b", text: "The author is well-known." },
              { id: "c", text: "A highly-regarded author visited the school." },
              { id: "d", text: "A well-known author visited the school." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Compound modifiers", statement: "Hyphenate a compound modifier before a noun, not after it, and not after an -ly adverb." }],
            steps: [{ reasoning: "'Well-known' comes before the noun 'author', so it takes a hyphen; (a) follows the noun, (c) lacks the hyphen and (d) wrongly hyphenates after an -ly adverb.", evidence: "a well-known author", marks: 1, markCode: "AO5" }],
            finalAnswer: "**(b)**. The modifier precedes the noun. (a) should be 'well known', (c) needs a hyphen, and (d) should be 'highly regarded'.",
            commonErrors: ["Hyphenating the compound after the verb, as in (a)."],
          },
        },
        {
          id: "ela11-u3-usage-conventions-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: USAGE,
          stem: "A student says: 'Splitting an infinitive is always an error, so \"to boldly question\" must be corrected.' Which response best reflects the committee's view of usage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The student is wrong, because any usage is acceptable in any context." },
              { id: "b", text: "The student is right, because Latin rules govern English." },
              { id: "c", text: "The student is right, since grammar rules never change." },
              { id: "d", text: "The student states a traditional rule that many current guides no longer enforce; the writer should follow the style guide for the context and avoid awkward constructions." },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Usage", statement: "Usage is convention that changes over time; style guides resolve disputed cases for a given context." }],
            steps: [
              { reasoning: "The minutes explain that the rule against splitting came from Latin, where an infinitive is one word, and that most current guides accept the split.", evidence: "came from Latin", marks: 1, markCode: "AO1" },
              { reasoning: "The sensible response applies the guide for the context rather than treating the rule as absolute or as meaningless.", evidence: "when it reads more clearly", marks: 1, markCode: "AO5" },
            ],
            finalAnswer: "**(c)**. It recognizes usage as changing and guide-dependent. (a) and (d) treat a convention as permanent law, and (b) swings to the opposite extreme.",
            commonErrors: ["Choosing (b) because rules can change, ignoring the role of context and guides."],
          },
        },
        {
          id: "ela11-u3-usage-conventions-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: USAGE,
          stem: "Edit this paragraph for hyphenation and explain each change in one short phrase: 'The newly-elected editor praised the self reliant reporters. Her twenty one writers produced a thoughtprovoking, well researched series, though the story was well known.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Hyphenation", statement: "Hyphenate pre-noun compound modifiers, compound numbers and self- compounds, but not -ly adverb pairs or predicate compounds." },
            ],
            steps: [
              { reasoning: "'newly elected' loses the hyphen because 'newly' is an -ly adverb.", marks: 2, markCode: "AO5" },
              { reasoning: "'self-reliant', 'twenty-one' and 'thought-provoking' gain hyphens (self- prefix, compound number, pre-noun compound modifier).", evidence: "twenty one writers", marks: 2, markCode: "AO5" },
              { reasoning: "'well-researched' takes a hyphen before 'series', while 'well known' after 'was' stays open; each change is explained.", evidence: "the story was well known", marks: 2, markCode: "AO5" },
            ],
            levels: levels("writing", 6),
            finalAnswer: "Model: The newly elected editor praised the self-reliant reporters. Her twenty-one writers produced a thought-provoking, well-researched series, though the story was well known. Changes: 'newly elected' (no hyphen after an -ly adverb); 'self-reliant' (self- compound); 'twenty-one' (compound number); 'thought-provoking' and 'well-researched' (compound modifiers before a noun); 'well known' stays open (after the verb).",
            commonErrors: ["Hyphenating 'newly-elected'.", "Hyphenating 'well-known' after 'was'.", "Missing the compound number."],
          },
        },
        {
          id: "ela11-u3-usage-conventions-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: USAGE,
          stem: "Answer all parts about the committee's style discussion and the way writers handle contested usage.",
          parts: [
            { label: "a", prompt: "Explain why the committee decided to follow one adopted style guide rather than each member's personal preference.", marks: 2 },
            { label: "b", prompt: "Explain what the minutes suggest about whether usage rules are fixed. Use two details from the extract.", marks: 6 },
            { label: "c", prompt: "Write a short style-sheet entry (six to eight sentences) for the newspaper that sets a policy on one disputed usage and one hyphenation rule, gives an example of each and explains how writers should handle cases the guide does not cover.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Usage", statement: "Usage is customary practice that can change and be contested." },
              { kind: "skill", name: "Style guide consistency", statement: "A style guide gives readers consistent conventions across a publication." },
              { kind: "convention", name: "Hyphenation", statement: "Hyphenate pre-noun compound modifiers, but not -ly adverb pairs or predicate compounds." },
            ],
            steps: [
              { part: "a", reasoning: "Consistency across articles: readers see one set of conventions rather than shifting practice.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "A shared guide settles disagreements objectively, since members hold different views (for example on 'data').", evidence: "follow the style guide", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "The split-infinitive rule originated in Latin and many current guides accept the split, so rules have changed.", evidence: "came from Latin", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "Editors disagree about 'data' (plural versus singular), showing that educated writers differ.", evidence: "the data are", marks: 2, markCode: "AO1" },
              { part: "b", reasoning: "Singular 'they' has been used for centuries yet is only now widely accepted by guides, so acceptance shifts over time and across contexts.", evidence: "used it for centuries", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "A clear policy on one disputed usage (for example allowing the split infinitive when clearer, or accepting singular 'they').", marks: 3, markCode: "AO5" },
              { part: "c", reasoning: "A clear hyphenation rule with an accurate example (before noun versus after noun, or -ly adverb exception).", marks: 3, markCode: "AO5" },
              { part: "c", reasoning: "Explains how to handle cases the guide does not cover: consult the dictionary or the parent guide, choose clarity for the audience and stay consistent.", marks: 3, markCode: "AO4" },
              { part: "c", reasoning: "Formal, concise style-sheet tone with logical organization.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Accurate conventions throughout, including the examples.", marks: 1, markCode: "AO5" },
            ],
            levels: [...levels("analysis", 6, "b"), ...levels("writing", 12, "c")],
            finalAnswer: "(a) A single guide gives readers consistency and settles disputes without relying on personal taste. (b) Rules are not fixed: the ban on split infinitives came from Latin and is now often relaxed; editors differ on 'data'; and singular 'they', in use for centuries, has only recently won wide acceptance. (c) Model: Policy 1: Writers may split an infinitive when doing so avoids awkward phrasing, as in 'to carefully review the budget'. Policy 2: Hyphenate a compound modifier before a noun ('a long-term plan') but not after it ('the plan is long term'), and never after an -ly adverb ('a carefully drafted plan'). When the style guide is silent, check the dictionary the guide names, pick the option that is clearest to readers and apply it consistently throughout the piece.",
            commonErrors: ["Treating a contested usage as a plain error.", "Writing a policy with no example.", "Hyphenating after -ly adverbs in the examples."],
          },
        },
      ],
    },
    {
      id: "ela11-u3-syntax-effect",
      title: "Varying syntax for effect",
      skill: "Use periodic and cumulative sentences, inversion and deliberate fragments to create emphasis, rhythm and meaning.",
      lesson: {
        sections: [
          {
            heading: "Sentence shapes",
            body: "Syntax (the arrangement of words and clauses) is a tool, not a container. A **cumulative sentence** states its main idea first and then adds detail, as in 'I walked home that evening, past the shuttered hardware store, past the bakery whose windows glowed like lanterns.' It feels natural, flowing and observant. A **periodic sentence** holds the main clause until the end, building suspense: 'Only when I reached my own street did I understand what I had been avoiding.' Sentence length also carries meaning: long sentences can imitate wandering or accumulation, short ones deliver impact. Reading complex texts, notice where syntax slows down or speeds up and what that does to the mood.",
          },
          {
            heading: "Inversion and deliberate fragments",
            body: "**Inversion** reorders a sentence so the element you want emphasized comes first or last: 'Into the kitchen I went' puts motion and place before the subject, slowing the reader at a tense moment. A **deliberate fragment** ('Silence.') stands apart for force or rhythm. Fragments and inversions work because they break a pattern the reader has learned, so use them sparingly and with control. Test any experiment: Does the unusual form create a specific effect (suspense, emphasis, voice)? If it merely looks stylish or confuses meaning, revise it.",
          },
        ],
        keyFormulas: [
          { name: "Cumulative", statement: "Main clause first, then added detail: natural, flowing, observant." },
          { name: "Periodic", statement: "Main idea delayed to the end: suspense and emphasis on the final clause." },
          { name: "Effect test", statement: "Name the syntax, the effect on the reader and the way it serves meaning; if you cannot, revise." },
        ],
        workedExample: {
          problem: "Revise 'I realized the truth when I opened the door' into a periodic sentence.",
          solution: "Revision: When I opened the door, saw the empty hooks and heard no footsteps on the stairs, I realized the truth. The main clause 'I realized the truth' now arrives last, after three suspenseful details, so the reader waits with the narrator. The original was cumulative; the revision delays the idea to create tension.",
        },
      },
      questions: [
        {
          id: "ela11-u3-syntax-effect-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SYNTAX,
          stem: "Which best describes the structure of the sentence 'Only when I reached my own street did I understand what I had been avoiding'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A simple sentence with no inversion." },
              { id: "b", text: "A deliberate fragment." },
              { id: "c", text: "A periodic sentence with inversion, delaying the main idea to the end." },
              { id: "d", text: "A cumulative sentence that begins with the main clause." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Periodic sentence", statement: "A periodic sentence withholds its main idea until the end, creating suspense." }],
            steps: [{ reasoning: "The adverbial 'Only when I reached my own street' comes first and the verb order reverses ('did I understand'), so the sentence is inverted and delays the main idea.", evidence: "did I understand what I had been avoiding", marks: 1, markCode: "AO2" }],
            finalAnswer: "**(a)**. The delay and the inversion build suspense. It is not cumulative, not a fragment, and not a normal-order simple sentence.",
            commonErrors: ["Choosing (b) because the sentence is long, confusing length with cumulative structure."],
          },
        },
        {
          id: "ela11-u3-syntax-effect-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: SYNTAX,
          stem: "What is the effect of the fragments 'Silence. Not the peaceful kind. The kind that follows an announcement.'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They make the passage longer and more descriptive." },
              { id: "b", text: "They show the narrator does not know grammar." },
              { id: "c", text: "They slow and isolate each idea, building tension and giving the narration the clipped rhythm of dread." },
              { id: "d", text: "They create a cheerful, relaxed mood." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Deliberate fragment", statement: "Fragments isolate an idea for emphasis and alter rhythm." }],
            steps: [
              { reasoning: "The short fragments isolate the single word 'Silence' and then refine it in turn, giving each idea weight.", evidence: "Silence.", marks: 1, markCode: "AO2" },
              { reasoning: "The contrast with the long flowing opening makes the sudden clipped rhythm feel tense and ominous.", evidence: "The kind that follows an announcement.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "**(b)**. The fragments isolate ideas and build dread through rhythm. (a) treats a deliberate choice as error, (c) is wrong because they are brief, and (d) contradicts the mood.",
            commonErrors: ["Choosing (a), assuming every fragment is a mistake."],
          },
        },
        {
          id: "ela11-u3-syntax-effect-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: SYNTAX,
          stem: "Analyze how the writer uses syntax in the first sentence and in the sentence 'Into the kitchen I went, and there, at the table, sat my father, the letter folded in his hands.' to shape the narrator's experience. Refer to the form of each sentence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Cumulative and inverted syntax", statement: "Added detail creates flow; inversion places emphasis and slows the reader." },
              { kind: "skill", name: "Syntax and effect", statement: "Name the form, then explain the effect on the reader and meaning." },
            ],
            steps: [
              { reasoning: "The first sentence is cumulative: the repeated 'past' phrases accumulate like steps, imitating the slow walk and the narrator's avoidance.", evidence: "past the shuttered hardware store, past the bakery", marks: 2, markCode: "AO2" },
              { reasoning: "The inversions 'Into the kitchen I went' and 'there, at the table, sat my father' reorder normal syntax, putting place first and delaying the subject so that the reader approaches the father as the narrator does.", evidence: "sat my father", marks: 2, markCode: "AO2" },
              { reasoning: "Links the contrast between wandering and tense arrival to the passage's shift toward dread, with precise vocabulary and clear writing.", marks: 2, markCode: "AO4" },
            ],
            levels: levels("analysis", 6),
            finalAnswer: "Model: The first sentence accumulates detail with repeated 'past' phrases, a cumulative structure that mimics the narrator's slow, avoidant walk. In contrast, 'Into the kitchen I went' inverts the normal order, placing the destination first, and the delayed subject in 'there, at the table, sat my father' lets the reader discover him as the narrator does. The shift from drifting accumulation to controlled inversion signals the movement from avoidance to confrontation.",
            commonErrors: ["Describing the content of the sentences without naming the syntax.", "Calling the inversion 'poetic' with no effect.", "Ignoring the contrast between the two sentence shapes."],
          },
        },
        {
          id: "ela11-u3-syntax-effect-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: SYNTAX,
          stem: "Answer all parts about syntax in the passage and in your own writing.",
          parts: [
            { label: "a", prompt: "Identify one cumulative sentence and one deliberate fragment from the passage.", marks: 2 },
            { label: "b", prompt: "Explain how the movement from long sentences to short fragments contributes to the passage's mood.", marks: 6 },
            { label: "c", prompt: "Write a paragraph of your own (six to eight sentences) about waiting for important news. Use at least one periodic sentence, one cumulative sentence, one inversion and one deliberate fragment, and then add a brief note naming where each appears and what it does.", marks: 12 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Syntax and mood", statement: "Sentence length and shape control pace and emotional tone." },
              { kind: "technique", name: "Periodic and cumulative", statement: "Periodic delays the main idea; cumulative adds detail after it." },
              { kind: "skill", name: "Controlled experiment", statement: "Unusual syntax must serve an identifiable effect." },
            ],
            steps: [
              { part: "a", reasoning: "Cumulative: the opening 'I walked home that evening, past the shuttered hardware store...' (or equivalent).", evidence: "I walked home that evening", marks: 1, markCode: "AO2" },
              { part: "a", reasoning: "Fragment: 'Silence.' or 'Not the peaceful kind.'", evidence: "Silence.", marks: 1, markCode: "AO2" },
              { part: "b", reasoning: "Long, flowing sentences capture a leisurely, observing walk and the narrator's avoidance.", evidence: "past the old men arguing on the bench", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The sudden clipped fragments raise tension and focus the mood on dread.", evidence: "Not the peaceful kind.", marks: 2, markCode: "AO2" },
              { part: "b", reasoning: "The contrast mirrors the narrator's psychological shift from avoidance to confrontation, with clear, precise explanation.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Includes all four forms (periodic, cumulative, inversion, fragment), used correctly.", marks: 4, markCode: "AO4" },
              { part: "c", reasoning: "Each form creates a purposeful effect that suits the subject of waiting.", marks: 3, markCode: "AO2" },
              { part: "c", reasoning: "A clear voice, concrete detail and coherent paragraph.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "A brief note accurately names each form and its effect.", marks: 2, markCode: "AO2" },
              { part: "c", reasoning: "Accurate conventions and polish.", marks: 1, markCode: "AO5" },
            ],
            levels: [...levels("analysis", 6, "b"), ...levels("writing", 12, "c")],
            finalAnswer: "(a) Cumulative: 'I walked home that evening, past the shuttered hardware store, past the bakery...'. Fragment: 'Silence.' (b) The long sentences capture an unhurried, avoidant walk; the short fragments tighten the rhythm into dread, matching the narrator's shift from avoidance to facing the truth. (c) Model: The phone sat on the table, black and patient, while the clock ticked past four, past five, past the time they had promised. Only when the screen finally lit did I realize I had stopped breathing. Out of my hands it slid, and there on the floor it buzzed. Waiting. That was the worst of it. Note: periodic = 'Only when the screen finally lit...' (delays the realization); cumulative = the first sentence (adds detail); inversion = 'Out of my hands it slid' (emphasizes the loss of control); fragment = 'Waiting.' (isolates the feeling).",
            commonErrors: ["Writing four unconnected sentences to show the forms.", "Using fragments in every line so that none stands out.", "Naming a form without explaining its effect."],
          },
        },
      ],
    },
  ],
};
