import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const DECLARATION: TextExtract = {
  title: "The Declaration of Independence",
  author: "Thomas Jefferson et al.",
  source: "1776",
  text: "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.",
};

const LINCOLN: TextExtract = {
  title: "The Gettysburg Address",
  author: "Abraham Lincoln",
  source: "November 19, 1863",
  text: "Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.\n\nNow we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure.",
};

export const MLK: TextExtract = {
  title: "I Have a Dream",
  author: "Martin Luther King Jr.",
  source: "August 28, 1963",
  text: "I have a dream that one day this nation will rise up and live out the true meaning of its creed: 'We hold these truths to be self-evident, that all men are created equal.'",
};

export const lesson131: Lesson = {
  id: "ela12-u2-lesson-3-1",
  code: "3-1",
  title: "The Declaration of Independence",
  goal: "I CAN analyze how the Declaration builds its argument through self-evident truths, enumeration of grievances, and the performative act of declaring.",
  standards: ["RL.11-12.2", "RL.11-12.4", "RL.11-12.6"],
  vocabulary: [
    { term: "Self-evident", definition: "A truth so obvious it needs no proof; the Declaration's foundational claim." },
    { term: "Unalienable rights", definition: "Rights that cannot be surrendered or taken away — Life, Liberty, Happiness." },
    { term: "Grievance", definition: "A specific complaint against the ruler used to justify revolution." },
    { term: "Consent of the governed", definition: "The idea that government legitimacy derives from the people's agreement." },
    { term: "Performative utterance", definition: "Language that does something by being said — declaring independence actually declares it." },
    { term: "Appeal to reason", definition: "Rhetorical strategy of arguing from shared principles rather than emotion." },
  ],
  concepts: [
    {
      id: "ela12-u2-declaration-structure",
      title: "Structure of a founding argument",
      skill: "Analyze how the Declaration moves from principle to evidence to action.",
      lesson: {
        sections: [
          {
            heading: "Principle before proof",
            body: "The Declaration opens not with evidence but with axioms: 'self-evident' truths about equality and rights. This is a rhetorical choice — it makes the argument seem to arise from reason itself, not from the colonists' interests. The phrase 'We hold' is deliberately inclusive, claiming to speak for 'one people.'",
          },
          {
            heading: "Grievances as evidence",
            body: "The longest section lists the King's abuses — taxation without consent, standing armies, trial without jury. Each grievance is a concrete fact supporting the abstract claim that government has failed its contract. The list is exhaustive by design: it must prove the case, not just assert it.",
          },
          {
            heading: "Declaration as action",
            body: "'We mutually pledge to each other our Lives, our Fortunes and our sacred Honor' — the signing is itself the act of independence. The document doesn't describe revolution; it performs it. Language becomes the event.",
          },
        ],
        keyFormulas: [
          { name: "Structure", statement: "Principle (self-evident truths) → evidence (grievances) → action (declaring)." },
          { name: "Performative", statement: "The document's existence enacts the independence it announces." },
        ],
        workedExample: {
          problem: "Why does Jefferson call the truths 'self-evident' instead of proving them?",
          solution: "Calling them self-evident makes them seem universally rational rather than culturally specific — it preempts the objection that these rights are merely English or colonial inventions.",
        },
      },
      questions: [
        {
          id: "ela12-u2-declaration-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: DECLARATION,
          stem: "What does 'self-evident' mean in this context?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proven by experiment" },
              { id: "b", text: "So obvious it requires no proof" },
              { id: "c", text: "Secretly agreed upon" },
              { id: "d", text: "Written in plain language" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Founding rhetoric", statement: "The Declaration claims its principles are universally obvious, not debatable." }],
            steps: [{ reasoning: "'Self-evident' asserts the truths are obvious to any reasonable person, needing no demonstration.", evidence: "self-evident", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** So obvious it requires no proof.",
            commonErrors: ["Reading it as 'easily seen' rather than 'axiomatic.'"],
          },
        },
        {
          id: "ela12-u2-declaration-structure-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: DECLARATION,
          stem: "Analyze how Jefferson uses the phrase 'We hold' to construct the colonists' authority.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Pronoun choice", statement: "'We' creates a unified people speaking collectively." },
              { kind: "skill", name: "Authority construction", statement: "The document manufactures consent by claiming to represent it." },
            ],
            steps: [
              { reasoning: "'We hold' uses first-person plural, making thirteen colonies sound like one people with shared beliefs.", evidence: "We hold these truths", marks: 1, markCode: "AO2" },
              { reasoning: "The verb 'hold' suggests settled conviction, not argument — the truths are possessed, not proven.", marks: 1, markCode: "AO2" },
              { reasoning: "The collective 'we' contrasts with 'He' (the King) later in the document, setting people against ruler.", marks: 1, markCode: "AO3" },
              { reasoning: "This constructs authority: the document claims to speak for a nation that doesn't yet exist as an independent state.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "'We hold' invents a unified people and presents their beliefs as self-evident, manufacturing the authority to declare independence.",
            commonErrors: ["Treating 'we' as a simple pronoun choice rather than a political construction."],
          },
        },
        {
          id: "ela12-u2-declaration-structure-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: DECLARATION,
          stem: "Explain why the Declaration's structure — principles, grievances, action — is necessary for its argument to succeed. What would be lost if it began with the grievances?",
          response: { type: "open" },
          markscheme: {
            levels: levels(6),
            principles: [
              { kind: "skill", name: "Rhetorical structure", statement: "Order of argument determines whether the reader sees cause or excuse." },
              { kind: "technique", name: "Principle-first", statement: "Starting with self-evident truths makes grievances look like applications of law, not complaints." },
            ],
            steps: [
              { reasoning: "Principles first establish the standard by which the King will be judged — without them, grievances are just a list of complaints.", marks: 1, markCode: "AO3" },
              { reasoning: "Grievances then function as evidence within a logical framework: each abuse violates a stated right.", marks: 1, markCode: "AO2" },
              { reasoning: "The closing pledge converts argument into action — the structure moves from idea to evidence to deed.", marks: 1, markCode: "AO2" },
              { reasoning: "Starting with grievances would make the document look like a petition or protest, not a founding statement — it would beg rather than declare.", marks: 1, markCode: "AO3" },
              { reasoning: "Principle-first also protects against the charge of ingratitude: the colonists claim they tried to reason before rebelling.", marks: 1, markCode: "AO4" },
              { reasoning: "Concludes the structure is the argument: it makes revolution seem rational, inevitable, and legitimate.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "The structure makes grievances evidence of violated principle and the pledge an inevitable conclusion; reversing it would reduce declaration to complaint.",
            commonErrors: ["Summarizing sections without analyzing why the order matters."],
          },
        },
      ],
    },
    {
      id: "ela12-u2-lincoln",
      title: "Lincoln's rhetoric",
      skill: "Analyze how Lincoln uses parallelism, biblical cadence, and antithesis in the Gettysburg Address.",
      lesson: {
        sections: [
          {
            heading: "The power of 'conceived' and 'dedicated'",
            body: "Lincoln repeats the pattern 'conceived in Liberty, and dedicated to the proposition' — a balanced, almost liturgical structure borrowed from the King James Bible. The repetition makes the nation's founding sound sacred, and the civil war a test of whether sacred ideas can survive.",
          },
          {
            heading: "Antithesis and reversal",
            body: "Lincoln constantly reverses phrases: 'the world will little note, nor long remember what we say here, but it can never forget what they did here.' The chiasmus (reversed word order) enacts the reversal of attention — from speaker to soldier, from words to deeds.",
          },
          {
            heading: "The last sentence",
            body: "'that government of the people, by the people, for the people, shall not perish from the earth' — three 'of/by/for the people' clauses build to a climax. The repetition of 'people' makes democracy itself the subject, not any individual.",
          },
        ],
        keyFormulas: [
          { name: "Parallelism", statement: "Repeated grammatical structures create rhythm and emphasis." },
          { name: "Antithesis", statement: "Contrasting phrases heighten meaning through opposition." },
        ],
        workedExample: {
          problem: "Why does Lincoln repeat 'the people' three times in the final sentence?",
          solution: "The triple repetition makes 'the people' the grammatical and emotional center — democracy is defined by collective ownership, not by any leader or document.",
        },
      },
      questions: [
        {
          id: "ela12-u2-lincoln-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LINCOLN,
          stem: "What is Lincoln testing in the civil war, according to the passage?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Whether the Union can militarily defeat the South." },
              { id: "b", text: "Whether a nation founded on equality can survive." },
              { id: "c", text: "Whether Lincoln's speech will be remembered." },
              { id: "d", text: "Whether slavery can be ended." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Gettysburg stakes", statement: "Lincoln frames the war as an experiment in whether democratic ideals can endure." }],
            steps: [{ reasoning: "'Testing whether that nation... can long endure' makes survival of the idea, not victory, the war's purpose.", evidence: "testing whether that nation", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** Whether a nation founded on equality can survive.",
            commonErrors: ["Focusing on military victory rather than the ideological stakes."],
          },
        },
        {
          id: "ela12-u2-lincoln-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: LINCOLN,
          stem: "Analyze how Lincoln's parallel structure ('conceived in Liberty, and dedicated to the proposition') creates rhetorical power.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Parallelism", statement: "Matched grammatical structures create rhythm and memorable phrasing." },
              { kind: "skill", name: "Cadence", statement: "The pattern echoes liturgical language, giving the speech sacred weight." },
            ],
            steps: [
              { reasoning: "The parallel 'conceived... dedicated' balances two founding acts — creation and purpose — in matched syntax.", evidence: "conceived in Liberty, and dedicated to the proposition", marks: 1, markCode: "AO2" },
              { reasoning: "The repetition of 'that nation, or any nation so conceived and so dedicated' extends the pattern, making the principle universal.", marks: 1, markCode: "AO2" },
              { reasoning: "The cadence echoes biblical and funeral oratory, fitting a speech at a cemetery dedication — form matches occasion.", marks: 1, markCode: "AO3" },
              { reasoning: "Parallel structure makes the sentence memorable; listeners can hold and repeat it, which is the point of a speech.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "Parallelism creates a liturgical cadence that makes the founding principle sound sacred and universal — appropriate for a dedication.",
            commonErrors: ["Noting the repetition without explaining its ceremonial function."],
          },
        },
        {
          id: "ela12-u2-lincoln-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: LINCOLN,
          stem: "Explain how Lincoln's final sentence enacts the democracy it describes. Consider grammar, repetition, and the relationship between speaker and audience.",
          response: { type: "open" },
          markscheme: {
            levels: levels(6),
            principles: [
              { kind: "technique", name: "Repetition and climax", statement: "The triple 'of/by/for the people' builds to a climax that makes the people the subject." },
              { kind: "skill", name: "Form enacting meaning", statement: "The sentence's structure performs the collective ownership it describes." },
            ],
            steps: [
              { reasoning: "'Government of the people, by the people, for the people' uses three parallel prepositional phrases — possession, agency, purpose.", evidence: "of the people, by the people, for the people", marks: 1, markCode: "AO2" },
              { reasoning: "The triple repetition builds to a climax, giving 'the people' the sentence's emotional and grammatical weight.", marks: 1, markCode: "AO2" },
              { reasoning: "By making 'the people' the object of all three prepositions, Lincoln defines democracy as something belonging to, acting through, and serving the collective.", marks: 1, markCode: "AO3" },
              { reasoning: "The sentence is spoken to 'the people' at a cemetery — the audience hears itself named as the agent of government.", marks: 1, markCode: "AO3" },
              { reasoning: "'Shall not perish from the earth' makes survival a moral imperative, not just a political hope.", marks: 1, markCode: "AO4" },
              { reasoning: "Concludes the sentence performs democracy: a leader speaks, but the grammar makes the people the subject.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "The final sentence makes 'the people' the grammatical and emotional center, enacting the collective self-government it describes.",
            commonErrors: ["Quoting the line without analyzing its grammatical structure."],
          },
        },
      ],
    },
    {
      id: "ela12-u2-mlk",
      title: "King's 'I Have a Dream'",
      skill: "Analyze how King uses biblical allusion, repetition, and extended metaphor to link the civil rights movement to American founding ideals.",
      lesson: {
        sections: [
          {
            heading: "Allusion as argument",
            body: "King quotes the Declaration directly: 'We hold these truths to be self-evident.' By invoking Jefferson, he argues that segregation betrays America's own founding document — the movement isn't asking for new rights but for the old ones to be honored. This is allusion as legal argument.",
          },
          {
            heading: "The dream as extended metaphor",
            body: "'I have a dream' repeats eight times, each time attaching a new image: children holding hands, 'the table of brotherhood,' 'the content of their character.' The repetition turns a personal hope into a prophetic vision — the dream becomes the speech's engine.",
          },
          {
            heading: "Music and cadence",
            body: "King's sentences have the rhythm of gospel and blues — 'I have a dream that one day...' rises and falls like a sermon. The speech was delivered to a crowd, so its music is functional: it builds emotional momentum toward the 'Free at last' climax.",
          },
        ],
        keyFormulas: [
          { name: "Allusion", statement: "Quoting a foundational text to argue the present betrays its principles." },
          { name: "Extended metaphor", statement: "A single image ('dream') sustained and developed across the whole speech." },
        ],
        workedExample: {
          problem: "Why does King quote the Declaration rather than the Bible alone?",
          solution: "The Declaration makes the argument legal and national: segregation isn't just immoral, it's un-American — a violation of the country's own stated principles.",
        },
      },
      questions: [
        {
          id: "ela12-u2-mlk-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: MLK,
          stem: "What does King mean by 'the true meaning of its creed'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "America's religious beliefs" },
              { id: "b", text: "The Declaration's promise that all men are created equal" },
              { id: "c", text: "The Constitution's amendments" },
              { id: "d", text: "American exceptionalism" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "context", name: "Founding document", statement: "King treats the Declaration's equality principle as America's 'creed.'" }],
            steps: [{ reasoning: "The quoted phrase 'all men are created equal' identifies the creed as the Declaration's founding principle.", evidence: "all men are created equal", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(b)** The Declaration's equality principle.",
            commonErrors: ["Reading 'creed' as religious rather than civic."],
          },
        },
        {
          id: "ela12-u2-mlk-q2",
          difficulty: "core",
          totalMarks: 4,
          extract: MLK,
          stem: "Analyze how King uses allusion to the Declaration to strengthen his argument for civil rights.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Allusion", statement: "Quoting a founding text invokes its authority for the present argument." },
              { kind: "skill", name: "Intertextuality", statement: "Show how the quoted words change meaning in their new context." },
            ],
            steps: [
              { reasoning: "King quotes 'We hold these truths to be self-evident' — Jefferson's words become King's evidence that America promised equality.", evidence: "We hold these truths to be self-evident", marks: 1, markCode: "AO2" },
              { reasoning: "By framing segregation as a failure to 'live out' the creed, King shifts the burden: America must fulfill its own promise, not grant new rights.", marks: 1, markCode: "AO3" },
              { reasoning: "The allusion makes the audience's own founding document the judge of segregation — opposition becomes self-condemnation.", marks: 1, markCode: "AO3" },
              { reasoning: "The quoted phrase gains new meaning in context: 'all men' now explicitly includes Black Americans, expanding Jefferson's intent.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "King weaponizes the Declaration — its own words become the standard by which segregation is judged and condemned.",
            commonErrors: ["Noting the quotation without explaining its argumentative function."],
          },
        },
        {
          id: "ela12-u2-mlk-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: MLK,
          stem: "Explain how King's repetition of 'I have a dream' functions differently from simple repetition. Consider the speech's oral delivery and emotional arc.",
          response: { type: "open" },
          markscheme: {
            levels: levels(6),
            principles: [
              { kind: "technique", name: "Refrain", statement: "Each repetition adds a new image, building the dream cumulatively." },
              { kind: "skill", name: "Oral rhetoric", statement: "The refrain is designed for a listening audience — it gives them a phrase to carry home." },
            ],
            steps: [
              { reasoning: "'I have a dream' is not mere repetition: each instance develops a new vision (children, table of brotherhood, content of character).", evidence: "I have a dream", marks: 1, markCode: "AO2" },
              { reasoning: "The refrain gives the audience a portable phrase — listeners can repeat it, remember it, make it theirs.", marks: 1, markCode: "AO3" },
              { reasoning: "The accumulation builds emotional momentum: each dream-image raises the stakes toward the 'Free at last' climax.", marks: 1, markCode: "AO2" },
              { reasoning: "Spoken aloud, the refrain's rhythm (da-DUM-da-DUM) mimics gospel cadence, making the speech feel like communal prayer.", marks: 1, markCode: "AO3" },
              { reasoning: "The first-person 'I' personalizes a collective struggle — King speaks for himself and for everyone simultaneously.", marks: 1, markCode: "AO4" },
              { reasoning: "Concludes the refrain is an engine: it structures the speech's emotional rise and makes the abstract ('freedom') concrete and singable.", marks: 1, markCode: "AO4" },
            ],
            finalAnswer: "The refrain accumulates meaning, gives listeners a portable phrase, and builds emotional momentum — it is the speech's engine, not decoration.",
            commonErrors: ["Calling it 'repetition' without noting each instance develops the vision."],
          },
        },
      ],
    },
  ],
};
