import type { Lesson, TextExtract } from "../../../types.ts";
import { levels } from "./levels.ts";

const CLEANUP: TextExtract = {
  title: "Cleanup Day (draft)",
  author: "Written for Akademik Space",
  text: "(1) The committee, which met on Tuesday, were pleased with the turnout. (2) Neither the mayor nor the council members was available, but the volunteer whom organized the event thanked everyone. (3) The rain was heavy, yet it's lasting damage was small, and the crew was more careful then last year.",
};

const LATE: TextExtract = {
  title: "Late Arrival Policy (draft)",
  author: "Written for Akademik Space",
  text: "(1) In the event that students are late, they should basically go to the front office. (2) The school has a ten minute grace period. (3) A student who arrives after the grace period receives a late pass. (4) The late pass is issued by the office. (5) The office is open until noon. (6) The students parents are notified, and it was a real hassle for them, yo.",
};

export const lesson33: Lesson = {
  id: "ela10-u3-lesson-3-3",
  code: "3-3",
  title: "Usage and Style",
  goal: "I CAN avoid common usage errors and revise sentences for concision, variety, correct hyphens and apostrophes, and an appropriate tone and register.",
  standards: ["L.9-10.1", "L.9-10.2", "L.9-10.3"],
  vocabulary: [
    { term: "Antecedent", definition: "The noun that a pronoun refers to and must agree with in number and person." },
    { term: "Subject-verb agreement", definition: "A singular subject takes a singular verb and a plural subject takes a plural verb." },
    { term: "Concision", definition: "Expressing an idea in as few words as clarity allows, with no filler." },
    { term: "Register", definition: "The level of formality of language, chosen to suit the audience and purpose." },
    { term: "Compound modifier", definition: "Two or more words that work together as one adjective before a noun and are usually joined by a hyphen, as in 'ten-minute break'." },
    { term: "Possessive apostrophe", definition: "An apostrophe that shows ownership: singular 'student's', plural 'students''; its (possessive) has none." },
  ],
  concepts: [
    {
      id: "ela10-u3-usage-errors",
      title: "Common usage errors",
      skill: "Correct pronoun-antecedent and subject-verb agreement, who and whom, and commonly confused words.",
      lesson: {
        sections: [
          {
            heading: "Agreement",
            body: "A pronoun must agree with its **antecedent** in number: 'Each of the volunteers brought his or her own gloves' (each is singular). Collective nouns such as committee, jury and team take a singular verb and pronoun when the group acts as one: 'The committee was pleased.' With **neither...nor** and **either...or**, the verb agrees with the **nearer** subject: 'Neither the mayor nor the council members were available.' Phrases between subject and verb do not change the verb: 'One of the books is missing.' Indefinite pronouns such as each, everyone and somebody are singular. Many style guides now accept singular 'they' when no gender is specified, but formal and standardized-test writing usually expects the agreement shown here.",
          },
          {
            heading: "Who and whom, and confused words",
            body: "Use **who** for the subject of a clause and **whom** for the object of a verb or preposition. Test by replacing with he or him: 'The coordinator, whom the volunteers trusted' (the volunteers trusted him), but 'the volunteer who organized the event' (he organized). Watch confused words: **its** (possessive) and **it's** (it is), **than** (comparison) and **then** (time), **affect** (verb: to influence) and **effect** (noun: result), **their/there/they're**, **your/you're**. Proofread for these slowly, because spell-check cannot catch them.",
          },
        ],
        keyFormulas: [
          { name: "Nearer-subject rule", statement: "With neither...nor and either...or, the verb agrees with the subject closest to it." },
          { name: "Who/whom test", statement: "Substitute he/him: he means who, him means whom." },
          { name: "Its/it's", statement: "its = belonging to it; it's = it is or it has." },
          { name: "Affect/effect", statement: "Affect is usually a verb (to influence); effect is usually a noun (a result)." },
        ],
        workedExample: {
          problem: "Correct: 'Neither the coach nor the players was ready, and the team lost it's focus.'",
          solution: "The verb agrees with the nearer subject, 'players', so 'was' becomes 'were'. 'It's' means 'it is', but the sentence needs the possessive, so 'its focus'. Corrected: 'Neither the coach nor the players were ready, and the team lost its focus.' The collective noun 'team' acts as one unit, so the singular possessive 'its' is right.",
        },
      },
      questions: [
        {
          id: "ela10-u3-usage-errors-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence has correct pronoun-antecedent agreement?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Each of the volunteers brought his or her own gloves." },
              { id: "b", text: "Each of the volunteers brought they're own gloves." },
              { id: "c", text: "Each of the volunteers brought our own gloves." },
              { id: "d", text: "Each of the volunteers brought there own gloves." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Pronoun-antecedent agreement", statement: "A pronoun agrees with its antecedent in number and person." }],
            steps: [{ reasoning: "'Each' is singular and third person, so 'his or her' agrees. (b) and (d) are confused words, and (c) shifts to first person.", evidence: "his or her own gloves", marks: 1, markCode: "AO5" }],
            finalAnswer: "**(a)**. 'They're' means 'they are' and 'there' is a place, so neither is a possessive pronoun; 'our' does not match the third-person antecedent.",
            commonErrors: ["Choosing (b) because 'they're' sounds like 'their'."],
          },
        },
        {
          id: "ela10-u3-usage-errors-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: CLEANUP,
          stem: "Choose the correct word for the blank: \"The coordinator, ______ the volunteers trusted, thanked everyone.\"",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "who" },
              { id: "b", text: "whom" },
              { id: "c", text: "whoever" },
              { id: "d", text: "which" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Who and whom", statement: "Whom is the object form; test by substituting him." }],
            steps: [
              { reasoning: "Inside the clause the volunteers is the subject and trusted is the verb, so the blank is the object of 'trusted'.", evidence: "the volunteers trusted", marks: 1, markCode: "AO5" },
              { reasoning: "'The volunteers trusted him' works, so the object form 'whom' is needed.", marks: 1, markCode: "AO5" },
            ],
            finalAnswer: "**(b)** whom. The clause is 'the volunteers trusted him', so the pronoun is an object.",
            commonErrors: ["Choosing 'who' because it sounds more natural in speech."],
          },
        },
        {
          id: "ela10-u3-usage-errors-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: CLEANUP,
          stem: "Find and correct three usage errors in sentences (1) to (3) of the extract. For each, give the corrected words and the rule.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Subject-verb agreement", statement: "Collective nouns acting as a unit take singular verbs, and neither...nor takes the nearer subject." },
              { kind: "convention", name: "Confused words", statement: "Its/it's, than/then and who/whom depend on meaning and function." },
            ],
            steps: [
              { reasoning: "Sentence 1: 'were' should be 'was' because the committee acts as one unit.", evidence: "The committee, which met on Tuesday, were pleased", marks: 2, markCode: "AO5" },
              { reasoning: "Sentence 2: 'was' should be 'were' because the nearer subject, 'council members', is plural (or 'whom' should be 'who' because the pronoun is the subject of 'organized').", evidence: "Neither the mayor nor the council members was available", marks: 2, markCode: "AO5" },
              { reasoning: "Sentence 3: 'it's' should be 'its' (possessive), or 'then' should be 'than' (comparison).", evidence: "it's lasting damage", marks: 2, markCode: "AO5" },
            ],
            levels: levels("writing", 6),
            finalAnswer: "Accept any three of five errors: (1) were should be was (collective noun as a unit). (2) was should be were (nearer subject is plural); whom should be who (subject of 'organized'). (3) it's should be its (possessive); then should be than (comparison).",
            commonErrors: ["Changing 'was' to 'were' in sentence 1 because 'committee' feels like many people.", "Correcting the word but not stating the rule."],
          },
        },
        {
          id: "ela10-u3-usage-errors-q4",
          difficulty: "challenge",
          totalMarks: 16,
          extract: CLEANUP,
          stem: "Answer all parts about usage.",
          parts: [
            { label: "a", prompt: "Choose the correct word: (1) The ______ of the new rule was positive. (affect/effect) (2) The rule will ______ every student. (affect/effect)", marks: 2 },
            { label: "b", prompt: "Correct each sentence and state the rule: (1) \"Either the coach or the players is going to speak.\" (2) \"One of the books are missing.\"", marks: 4 },
            { label: "c", prompt: "Write a paragraph (five to seven sentences) about a community event. Include correct examples of: an indefinite pronoun with a matching pronoun; a collective noun with the right verb; a neither...nor sentence; who and whom; and its or it's; than or then. Then label each feature.", marks: 10 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Agreement", statement: "Pronouns and verbs agree with their antecedents or subjects in number." },
              { kind: "convention", name: "Confused words", statement: "Choose affect/effect, its/it's and than/then by function." },
            ],
            steps: [
              { part: "a", reasoning: "(1) effect: a noun meaning result.", marks: 1, markCode: "AO5" },
              { part: "a", reasoning: "(2) affect: a verb meaning to influence.", marks: 1, markCode: "AO5" },
              { part: "b", reasoning: "(1) 'are' (the nearer subject, 'players', is plural).", evidence: "Either the coach or the players", marks: 2, markCode: "AO5" },
              { part: "b", reasoning: "(2) 'is' (the subject is 'One', not 'books').", evidence: "One of the books", marks: 2, markCode: "AO5" },
              { part: "c", reasoning: "Correct indefinite pronoun and matching pronoun.", marks: 1, markCode: "AO5" },
              { part: "c", reasoning: "Correct collective noun and verb.", marks: 1, markCode: "AO5" },
              { part: "c", reasoning: "Correct neither...nor agreement.", marks: 1, markCode: "AO5" },
              { part: "c", reasoning: "Correct who and whom.", marks: 1, markCode: "AO5" },
              { part: "c", reasoning: "Correct its/it's and than/then.", marks: 2, markCode: "AO5" },
              { part: "c", reasoning: "The paragraph is coherent and about a community event, with features labeled.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Punctuation, spelling and capitalization are accurate elsewhere.", marks: 2, markCode: "AO5" },
            ],
            levels: levels("writing", 10, "c"),
            finalAnswer: "(a) effect; affect. (b) (1) Either the coach or the players are going to speak. (2) One of the books is missing. (c) Model: Everyone at the park brought his or her own bag. The committee was thrilled with the turnout. Neither the mayor nor the volunteers were late, and the organizer, whom we thanked, told us who had donated supplies. The event raised more money than last year, and its success surprised us. Then we cleaned up together.",
            commonErrors: ["Mixing up 'its' and 'it's'.", "Using 'whom' for a subject.", "Matching the verb to the closest noun after 'of' phrases."],
          },
        },
      ],
    },
    {
      id: "ela10-u3-style-register",
      title: "Style, punctuation and register",
      skill: "Write concisely with varied sentences, use hyphens and apostrophes correctly, and match tone and register to audience.",
      lesson: {
        sections: [
          {
            heading: "Concision and variety",
            body: "Cut filler so every word works: 'due to the fact that' becomes 'because', 'in the event that' becomes 'if', and 'basically', 'really' and 'very' often disappear. Avoid repeating the same subject-verb pattern: a run of short sentences that all begin 'The...' sounds choppy. Vary **openings** (a participial phrase, a prepositional phrase, a dependent clause) and **length**, combining related ideas and keeping a short sentence for emphasis. Variety should serve meaning, not decorate it.",
          },
          {
            heading: "Hyphens, apostrophes and register",
            body: "Hyphenate a **compound modifier before a noun**: 'a ten-minute grace period', but 'the grace period is ten minutes'. Apostrophes show possession: singular 'student's', plural 'students'' (the parents of several students: 'the students' parents'). **Its** (possessive) has no apostrophe. Choose **register** to suit the audience and purpose: a school handbook needs a formal, objective tone without slang ('yo'), contractions or vague intensifiers, while a message to a friend can be casual. Consistent register builds credibility.",
          },
        ],
        keyFormulas: [
          { name: "Wordy to concise", statement: "Due to the fact that becomes because; in the event that becomes if." },
          { name: "Compound modifier", statement: "Hyphenate before the noun: ten-minute break, well-known author." },
          { name: "Possessive plural", statement: "Add only the apostrophe after a plural ending in s: students' parents." },
          { name: "Formal register", statement: "Avoid slang, contractions and vague intensifiers; use precise, objective wording." },
        ],
        workedExample: {
          problem: "Revise: 'Due to the fact that the test was a three hour test, the students energy was low, you know.'",
          solution: "Revision: 'Because the test lasted three hours, the students' energy was low.' 'Due to the fact that' is replaced by 'because', the hyphenated 'three-hour test' is made more concise by turning it into a verb phrase, the plural possessive gets its apostrophe and the casual filler 'you know' is cut for a formal tone.",
        },
      },
      questions: [
        {
          id: "ela10-u3-style-register-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: LATE,
          stem: "Which is the most concise and formal revision of sentence (1)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "If students are late, they should go to the front office." },
              { id: "b", text: "In the event of lateness, students should basically go to the front office." },
              { id: "c", text: "Students who are late, in the event that this occurs, should go to the front office." },
              { id: "d", text: "When students are late, they should kind of go to the front office." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Concision", statement: "Replace wordy phrases with short ones and delete filler words." }],
            steps: [{ reasoning: "Only (a) replaces 'in the event that' with 'if' and drops the filler 'basically'; the others keep filler or add new wordiness.", evidence: "In the event that students are late", marks: 1, markCode: "AO4" }],
            finalAnswer: "**(a)**. It is shortest and formal.",
            commonErrors: ["Choosing (b), which keeps 'basically'."],
          },
        },
        {
          id: "ela10-u3-style-register-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: LATE,
          stem: "Which choice correctly punctuates the underlined parts of sentences (2) and (6): \"ten minute grace period\" and \"students parents\" (the parents of several students)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "ten-minute grace period; students' parents" },
              { id: "b", text: "ten minute grace-period; student's parents" },
              { id: "c", text: "ten-minute grace period; students parents" },
              { id: "d", text: "ten minute grace period; students' parents" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Compound modifier", statement: "Hyphenate a compound modifier before a noun." },
              { kind: "convention", name: "Plural possessive", statement: "Add an apostrophe after the s of a plural noun to show possession." },
            ],
            steps: [
              { reasoning: "'Ten-minute' modifies 'grace period' as one adjective, so it is hyphenated.", evidence: "ten minute grace period", marks: 1, markCode: "AO5" },
              { reasoning: "The parents of several students need the plural possessive 'students''.", evidence: "students parents", marks: 1, markCode: "AO5" },
            ],
            finalAnswer: "**(a)**. (b) puts the hyphen in the wrong place and uses a singular possessive, (c) lacks an apostrophe and (d) lacks the hyphen.",
            commonErrors: ["Writing student's for several students.", "Hyphenating the noun phrase 'grace-period'."],
          },
        },
        {
          id: "ela10-u3-style-register-q3",
          difficulty: "challenge",
          totalMarks: 6,
          extract: LATE,
          stem: "Sentences (2) to (5) are choppy and repetitive. Rewrite them as two or three concise sentences with varied openings and lengths, and correct punctuation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Sentence variety", statement: "Combine related ideas and vary openings and lengths." },
              { kind: "skill", name: "Concision", statement: "Delete repeated words and filler." },
            ],
            steps: [
              { reasoning: "Repeated nouns ('the late pass', 'the office', 'grace period') are combined or replaced, making the writing concise.", evidence: "The late pass is issued by the office", marks: 2, markCode: "AO4" },
              { reasoning: "Sentences open differently and differ in length, for example with a clause or phrase.", evidence: "A student who arrives after the grace period", marks: 2, markCode: "AO4" },
              { reasoning: "The compound modifier is hyphenated and the sentences are punctuated correctly.", evidence: "ten minute grace period", marks: 2, markCode: "AO5" },
            ],
            levels: levels("writing", 6),
            finalAnswer: "Model: After a ten-minute grace period, students who arrive late receive a late pass from the office, which is open until noon. Without a pass, they may not enter class.",
            commonErrors: ["Joining sentences with only commas.", "Leaving 'ten minute' unhyphenated."],
          },
        },
        {
          id: "ela10-u3-style-register-q4",
          difficulty: "challenge",
          totalMarks: 20,
          extract: LATE,
          stem: "Answer all parts about revising the draft policy for a school handbook.",
          parts: [
            { label: "a", prompt: "Identify two features of sentence (6) that are wrong for a formal handbook.", marks: 2 },
            { label: "b", prompt: "Rewrite sentences (1) and (6) in a formal register with correct punctuation.", marks: 4 },
            { label: "c", prompt: "Rewrite the whole draft as one polished paragraph of five to seven sentences. Make it concise, vary sentence openings and lengths, correct the hyphens and apostrophes, and keep a formal register.", marks: 14 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Register", statement: "Formal writing avoids slang, vague intensifiers and casual filler." },
              { kind: "skill", name: "Concision and variety", statement: "Concise, varied sentences are clearer and more engaging." },
              { kind: "convention", name: "Hyphens and apostrophes", statement: "Use hyphens in compound modifiers and apostrophes for possession." },
            ],
            steps: [
              { part: "a", reasoning: "The slang 'yo' is inappropriate in a formal document.", evidence: "yo", marks: 1, markCode: "AO4" },
              { part: "a", reasoning: "The casual, vague words 'a real hassle' and the missing apostrophe in 'students parents' lower formality and accuracy.", evidence: "a real hassle", marks: 1, markCode: "AO4" },
              { part: "b", reasoning: "Sentence (1) becomes concise and formal, for example: If students are late, they should report to the front office.", marks: 2, markCode: "AO4" },
              { part: "b", reasoning: "Sentence (6) becomes formal and correctly punctuated: The students' parents are notified.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Wordy and filler phrases are removed.", marks: 3, markCode: "AO4" },
              { part: "c", reasoning: "Sentences vary in opening and length, with related ideas combined.", marks: 3, markCode: "AO4" },
              { part: "c", reasoning: "Hyphens and apostrophes are correct (ten-minute, students' parents).", marks: 3, markCode: "AO5" },
              { part: "c", reasoning: "The register is consistently formal, with no slang or contractions.", marks: 3, markCode: "AO4" },
              { part: "c", reasoning: "The paragraph keeps all the key information and flows logically.", marks: 2, markCode: "AO4" },
            ],
            levels: levels("writing", 14, "c"),
            finalAnswer: "(a) The slang 'yo' and the casual 'a real hassle'; also the missing apostrophe in 'students parents'. (b) (1) If students are late, they should report to the front office. (6) The students' parents are notified. (c) Model: Students who arrive within the ten-minute grace period are counted as on time. Those who arrive later must collect a late pass from the front office, which is open until noon. Parents are notified of every late arrival. Because consistent attendance supports learning, the school asks families to help students arrive promptly.",
            commonErrors: ["Keeping 'basically' and 'really'.", "Writing 'students's' for the plural possessive.", "Starting every sentence with 'The'."],
          },
        },
      ],
    },
  ],
};
