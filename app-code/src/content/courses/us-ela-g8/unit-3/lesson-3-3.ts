import type { Lesson, TextExtract } from "../../../types.ts";
import { levels6, levels8 } from "./levels.ts";

const SWIM: TextExtract = {
  title: "Morning Practice",
  author: "Written for Akademik Space",
  text: "Swimming is my favorite way to exercise. To win the regional meet, our team trained every morning before school. The coach, exhausted by the long season, announced the final schedule. The relay was won by the freshmen. Practicing hard, they had shaved two seconds from their time. Our coach insists that every swimmer be on the deck by six.",
};

const GARDEN: TextExtract = {
  title: "Science Fair Notes (draft)",
  author: "Written for Akademik Space",
  text: "To prepare for the science fair, first gather your materials. Then you should measure the soil carefully. The seeds were planted by us, and we water them daily. If I was a better planner, I would have started sooner. It is important that every plant gets the same amount of light.",
};

const RIVER: TextExtract = {
  title: "After the Storm (draft)",
  author: "Written for Akademik Space",
  text: "When the storm finally ended we walked down to the river. The water had covered the path the bridge and the old dock. Mr. Lopez our neighbor was already there. \"I have never seen it this high,\" he said \"not in forty years.\" We stood in silence and watch the current carry branches past.",
};

export const lesson33: Lesson = {
  id: "ela8-u3-lesson-3-3",
  code: "3-3",
  title: "Conventions",
  goal: "I CAN use verbals, active and passive voice and verb moods correctly, punctuate with commas, ellipses and dashes, and fix shifts in voice and mood.",
  standards: ["L.8.1", "L.8.1a", "L.8.1b", "L.8.1c", "L.8.1d", "L.8.2"],
  vocabulary: [
    { term: "Gerund", definition: "A verb form ending in -ing that functions as a noun, such as 'Swimming' in 'Swimming is fun'." },
    { term: "Participle", definition: "A verb form (-ing or -ed/-en) that functions as an adjective, such as 'a running stream' or 'a broken window'." },
    { term: "Infinitive", definition: "The word 'to' plus a base verb, used as a noun, adjective or adverb, such as 'to exercise'." },
    { term: "Passive voice", definition: "A sentence in which the subject receives the action, as in 'The relay was won by the freshmen'." },
    { term: "Mood", definition: "The form of a verb that shows the writer's attitude: indicative (fact), imperative (command), interrogative (question), conditional (if...would) or subjunctive (wish, demand, contrary to fact)." },
    { term: "Ellipsis", definition: "Three dots (...) that show an omission from a quotation or a trailing-off pause." },
    { term: "Dash", definition: "A mark (—) that shows a sudden break in thought or sets off an added idea." },
  ],
  concepts: [
    {
      id: "ela8-u3-verbals-voice-mood",
      title: "Verbals, active and passive voice, and verb moods",
      skill: "Identify gerunds, participles and infinitives, choose active or passive voice purposefully, and use the indicative, imperative, interrogative, conditional and subjunctive moods.",
      lesson: {
        sections: [
          {
            heading: "Verbals: gerunds, participles and infinitives",
            body: "A **verbal** looks like a verb but works as another part of speech. A **gerund** ends in -ing and acts as a noun: '**Swimming** is my favorite way to exercise.' A **participle** acts as an adjective: 'The coach, **exhausted by the long season**, left.' An **infinitive** is 'to' plus a base verb: 'To win the meet, we trained.' It can act as a noun, adjective or adverb. A verbal phrase includes the verbal and its objects or modifiers. Place a participial phrase next to the word it modifies.",
          },
          {
            heading: "Voice and mood",
            body: "In **active voice** the subject does the action ('The freshmen won the relay'); in **passive voice** the subject receives it ('The relay was won by the freshmen'). Prefer active voice for clarity, but choose passive on purpose when the actor is unknown or unimportant ('The window was broken overnight'). Mood shows attitude. **Indicative** states a fact; **imperative** gives a command; **interrogative** asks a question; **conditional** states a result that depends on a condition ('I would go if I had time'). The **subjunctive** expresses a wish, a demand or something contrary to fact: 'If I were taller...' and 'He insists that every swimmer be on time.'",
          },
        ],
        keyFormulas: [
          { name: "Gerund", statement: "Verb + -ing used as a noun: 'Swimming builds strength.'" },
          { name: "Participle", statement: "A verb form used as an adjective: 'the exhausted coach', 'a swimmer practicing hard'." },
          { name: "Infinitive", statement: "to + base verb used as a noun, adjective or adverb: 'She wants to win.'" },
          { name: "Subjunctive", statement: "Use 'were' for contrary-to-fact wishes ('If I were...') and the base verb after demands ('insists that he be')." },
        ],
        workedExample: {
          problem: "Name the verbal and its function: 'Running every morning improved her stamina.'",
          solution: "'Running every morning' is a gerund phrase. The gerund 'Running' acts as a noun and is the subject of the verb 'improved'. If the sentence were 'Running every morning, she improved her stamina', 'Running' would instead be a participle modifying 'she'. The function in the sentence decides the label.",
        },
      },
      questions: [
        {
          id: "ela8-u3-verbals-voice-mood-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: SWIM,
          stem: "In the sentence \"Swimming is my favorite way to exercise,\" what is the word \"Swimming\"?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A gerund used as the subject" },
              { id: "b", text: "A participle modifying a noun" },
              { id: "c", text: "An infinitive" },
              { id: "d", text: "A past-tense verb" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "definition", name: "Gerund", statement: "An -ing verb form that functions as a noun." }],
            steps: [{ reasoning: "'Swimming' names the activity and is the subject of 'is', so it works as a noun.", evidence: "Swimming is my favorite way", marks: 1, markCode: "AO5" }],
            finalAnswer: "**(a)**. It is a noun-like -ing form, so it is a gerund, and it is the subject of the sentence.",
            commonErrors: ["Calling every -ing word a participle without checking whether it works as a noun or an adjective."],
          },
        },
        {
          id: "ela8-u3-verbals-voice-mood-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: SWIM,
          stem: "Which sentence is the best active-voice revision of \"The relay was won by the freshmen\"?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The freshmen won the relay." },
              { id: "b", text: "The freshmen were winning the relay." },
              { id: "c", text: "The relay had been won by the freshmen." },
              { id: "d", text: "The winners of the relay were the freshmen." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Active voice", statement: "The subject performs the action, and the verb keeps the original tense." }],
            steps: [
              { reasoning: "The freshmen are the actor, so they become the subject.", evidence: "won by the freshmen", marks: 1, markCode: "AO5" },
              { reasoning: "The verb stays in the simple past, so the meaning is unchanged; (b) changes the tense and (c) and (d) are still passive or indirect.", evidence: "The relay was won", marks: 1, markCode: "AO5" },
            ],
            finalAnswer: "**(a)**. 'The freshmen won the relay' is active and has the same meaning and tense as the original.",
            commonErrors: ["Choosing (b), which changes the tense and meaning.", "Choosing (c), which is still passive."],
          },
        },
        {
          id: "ela8-u3-verbals-voice-mood-q3",
          difficulty: "core",
          totalMarks: 6,
          extract: SWIM,
          stem: "Name the type of verbal in each underlined phrase, and explain what job it does in its sentence:\n\n(1) \"Swimming\" (sentence 1)\n(2) \"To win the regional meet\" (sentence 2)\n(3) \"exhausted by the long season\" (sentence 3)",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Verbals", statement: "A verbal is a verb form that functions as a noun, adjective or adverb." },
              { kind: "skill", name: "Function over form", statement: "A verbal is named by its job in the sentence." },
            ],
            steps: [
              { reasoning: "(1) is a gerund. It acts as a noun, the subject of 'is'.", evidence: "Swimming is my favorite way", marks: 1, markCode: "AO5" },
              { reasoning: "(1) The function explanation names it as the subject.", marks: 1, markCode: "AO5" },
              { reasoning: "(2) is an infinitive phrase (to + win).", evidence: "To win the regional meet", marks: 1, markCode: "AO5" },
              { reasoning: "(2) It acts as an adverb explaining why the team trained.", marks: 1, markCode: "AO5" },
              { reasoning: "(3) is a past participial phrase.", evidence: "exhausted by the long season", marks: 1, markCode: "AO5" },
              { reasoning: "(3) It acts as an adjective modifying 'coach'.", marks: 1, markCode: "AO5" },
            ],
            levels: levels6("writing"),
            finalAnswer: "(1) Gerund: a noun, the subject of the sentence. (2) Infinitive phrase: an adverb showing the purpose of training. (3) Participial phrase: an adjective describing the coach.",
            commonErrors: ["Calling (2) a gerund because it has a verb.", "Naming the verbal but not saying what job it does."],
          },
        },
        {
          id: "ela8-u3-verbals-voice-mood-q4",
          difficulty: "challenge",
          totalMarks: 12,
          extract: SWIM,
          stem: "Answer all parts about 'Morning Practice'.",
          parts: [
            { label: "a", prompt: "Identify the mood of \"be\" in the last sentence and explain why that form is used.", marks: 2 },
            { label: "b", prompt: "Rewrite \"The relay was won by the freshmen\" in active voice. Explain why the active version is usually stronger, and describe one situation where passive voice is the better choice.", marks: 4 },
            { label: "c", prompt: "Write a paragraph (four to six sentences) about a team or club. Include a gerund, a participial phrase and an infinitive, and use the subjunctive mood correctly once.", marks: 6 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Subjunctive mood", statement: "After verbs of demand or wish, use the base form; for contrary-to-fact conditions, use 'were'." },
              { kind: "convention", name: "Active and passive voice", statement: "Use active voice for clarity and passive when the actor is unknown or unimportant." },
            ],
            steps: [
              { part: "a", reasoning: "The mood is subjunctive.", evidence: "every swimmer be on the deck", marks: 1, markCode: "AO5" },
              { part: "a", reasoning: "It follows 'insists that', which expresses a demand, so the base verb 'be' is used instead of 'is'.", evidence: "Our coach insists that", marks: 1, markCode: "AO5" },
              { part: "b", reasoning: "Correct active rewrite: 'The freshmen won the relay.'", marks: 1, markCode: "AO5" },
              { part: "b", reasoning: "Explains that active voice names the actor and is more direct and concise.", marks: 1, markCode: "AO5" },
              { part: "b", reasoning: "Describes a situation where passive suits, such as when the actor is unknown or the receiver of the action matters more.", marks: 1, markCode: "AO5" },
              { part: "b", reasoning: "Gives a sensible example, such as 'The trophy was stolen overnight'.", marks: 1, markCode: "AO5" },
              { part: "c", reasoning: "Uses a correct gerund as a noun.", marks: 1, markCode: "AO5" },
              { part: "c", reasoning: "Uses a participial phrase placed next to the word it modifies.", marks: 1, markCode: "AO5" },
              { part: "c", reasoning: "Uses an infinitive correctly.", marks: 1, markCode: "AO5" },
              { part: "c", reasoning: "Uses the subjunctive mood correctly (for example 'If I were captain' or 'requires that each member attend').", marks: 1, markCode: "AO5" },
              { part: "c", reasoning: "Paragraph is focused on a team or club and written in clear sentences.", marks: 1, markCode: "AO4" },
              { part: "c", reasoning: "Correct spelling and punctuation throughout.", marks: 1, markCode: "AO5" },
            ],
            levels: levels6("writing", "c"),
            finalAnswer: "(a) Subjunctive: it follows 'insists that', a demand. (b) 'The freshmen won the relay.' Active voice is direct and names the actor; passive is better when the actor is unknown or unimportant, for example 'The trophy was stolen overnight.' (c) Model: 'Debating is the activity I love most. Our coach, devoted to the team, requires that every member attend practice. Preparing carefully, we have won three tournaments. If I were captain, I would plan more team dinners to build friendships.'",
            commonErrors: ["In (a), writing 'indicative' because 'be' looks like an ordinary verb.", "In (c), using an -ing word as a main verb and calling it a gerund.", "Writing 'If I was' instead of 'If I were'."],
          },
        },
      ],
    },
    {
      id: "ela8-u3-punctuation-shifts",
      title: "Commas, ellipses, dashes and shifts in voice and mood",
      skill: "Use commas, ellipses and dashes to show pauses, omissions and breaks, and recognize and correct inappropriate shifts in verb voice and mood.",
      lesson: {
        sections: [
          {
            heading: "Commas, ellipses and dashes",
            body: "Use a **comma** to mark a pause or set off an introductory clause, an appositive or items in a series: 'When the storm ended, we walked to the river.' 'Mr. Lopez, our neighbor, was there.' Use an **ellipsis** (...) to show that words were left out of a quotation or that a speaker trails off. Use a **dash** (—) for an abrupt break in thought: 'I was going to say—never mind.' Choose the mark that fits the pause: a comma for a light pause, an ellipsis for hesitation or omission, a dash for a sudden break.",
          },
          {
            heading: "Shifts in voice and mood",
            body: "Keep **voice** and **mood** consistent within a sentence or a set of connected sentences unless you have a reason to change. Mixing 'The seeds were planted by us, and we water them' (passive then active) is a needless shift. So is 'First gather your materials. Then you should measure' (imperative then indicative). Make parallel ideas parallel: 'We planted the seeds and water them daily' should also match tense: 'We planted the seeds and watered them daily.' When you revise, ask: who is the actor, and am I giving commands or stating facts throughout?",
          },
        ],
        keyFormulas: [
          { name: "Comma", statement: "Use after introductory clauses, in a series, and around appositives; it marks a light pause." },
          { name: "Ellipsis", statement: "Three dots showing an omission from a quotation, or a trailing-off pause or hesitation." },
          { name: "Dash", statement: "A mark showing an abrupt break in thought or an emphatic added idea." },
          { name: "Consistent voice and mood", statement: "Keep the same voice and mood through connected sentences unless the meaning requires a change." },
        ],
        workedExample: {
          problem: "Correct the shift: 'Please wash your hands. You should also dry them thoroughly.'",
          solution: "The first sentence is imperative (a command) and the second shifts to the indicative with 'You should'. Keep the mood consistent: 'Please wash your hands. Also dry them thoroughly.' Both sentences are now commands, and the second is also shorter.",
        },
      },
      questions: [
        {
          id: "ela8-u3-punctuation-shifts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A student wants to quote only part of a long sentence from a book and show that some words were left out. Which punctuation should the student use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A dash" },
              { id: "b", text: "An ellipsis" },
              { id: "c", text: "A semicolon" },
              { id: "d", text: "A colon" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Ellipsis", statement: "An ellipsis shows that words have been omitted from a quotation." }],
            steps: [{ reasoning: "Omitted words in a quotation are marked with an ellipsis.", marks: 1, markCode: "AO5" }],
            finalAnswer: "**(b)**. A dash shows a break in thought, and semicolons and colons join or introduce ideas.",
            commonErrors: ["Choosing a dash because it also looks like a pause."],
          },
        },
        {
          id: "ela8-u3-punctuation-shifts-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence uses a dash correctly to show an abrupt break in thought?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I think the river is—wait, is that Mr. Lopez on the bridge?" },
              { id: "b", text: "The—river rose over the path." },
              { id: "c", text: "We—walked to the river and—saw the dock." },
              { id: "d", text: "After the storm—we walked to the river." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Dash", statement: "Use a dash to show a sudden interruption or break in thought." }],
            steps: [
              { reasoning: "In (a) the speaker breaks off one thought and starts another.", evidence: "I think the river is—wait", marks: 1, markCode: "AO5" },
              { reasoning: "The dashes in (b), (c) and (d) split a sentence for no reason; (d) needs a comma after an introductory phrase.", marks: 1, markCode: "AO5" },
            ],
            finalAnswer: "**(a)**. The dash marks the speaker's sudden change of thought.",
            commonErrors: ["Choosing (d), where a comma is the correct mark after an introductory phrase."],
          },
        },
        {
          id: "ela8-u3-punctuation-shifts-q3",
          difficulty: "core",
          totalMarks: 6,
          extract: RIVER,
          stem: "The paragraph contains five errors in comma use, quotation punctuation and verb tense. Rewrite the paragraph with all five corrected.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Commas", statement: "Use commas after introductory clauses, between items in a series and around appositives." },
              { kind: "skill", name: "Proofreading", statement: "Read for punctuation, then for verb tense and consistency." },
            ],
            steps: [
              { reasoning: "Comma after the introductory clause: 'When the storm finally ended, we walked...'", evidence: "When the storm finally ended we walked", marks: 1, markCode: "AO5" },
              { reasoning: "Commas in a series: 'the path, the bridge, and the old dock'.", evidence: "the path the bridge and the old dock", marks: 1, markCode: "AO5" },
              { reasoning: "Commas around the appositive: 'Mr. Lopez, our neighbor, was already there'.", evidence: "Mr. Lopez our neighbor was", marks: 1, markCode: "AO5" },
              { reasoning: "Quotation punctuation: a comma after 'said' and a lowercase continuation: he said, \"not in forty years.\"", evidence: "he said \"not in forty years.\"", marks: 1, markCode: "AO5" },
              { reasoning: "Tense shift corrected: 'stood ... and watched'.", evidence: "stood in silence and watch", marks: 1, markCode: "AO5" },
              { reasoning: "The full paragraph is rewritten clearly and the original meaning is unchanged.", marks: 1, markCode: "AO5" },
            ],
            levels: levels6("writing"),
            finalAnswer: "When the storm finally ended, we walked down to the river. The water had covered the path, the bridge, and the old dock. Mr. Lopez, our neighbor, was already there. \"I have never seen it this high,\" he said, \"not in forty years.\" We stood in silence and watched the current carry branches past.",
            commonErrors: ["Adding a comma before 'and' in 'stood in silence and watch' but leaving the tense error.", "Missing the second comma around the appositive."],
          },
        },
        {
          id: "ela8-u3-punctuation-shifts-q4",
          difficulty: "challenge",
          totalMarks: 16,
          extract: GARDEN,
          stem: "Answer all parts about the draft 'Science Fair Notes'.\n\nFor part (a): the original sentence in a source is \"The experiment, which lasted three weeks and used forty seeds, showed that light matters.\"",
          parts: [
            { label: "a", prompt: "Quote the source sentence but leave out the words 'which lasted three weeks and used forty seeds', using correct punctuation.", marks: 2 },
            { label: "b", prompt: "Identify and correct the shift in voice in sentence 3, the shift in mood between sentences 1 and 2, and the errors in sentences 4 and 5 (hint: both involve the subjunctive mood). Name each error.", marks: 6 },
            { label: "c", prompt: "Write a clear set of instructions (five to seven sentences) for caring for a plant. Keep the mood consistent, use active voice, and include one comma-set-off appositive and one dash for an abrupt break.", marks: 8 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Ellipsis", statement: "An ellipsis in a quotation shows omitted words while the rest is quoted exactly." },
              { kind: "convention", name: "Consistency of voice and mood", statement: "Keep the same voice and mood within connected sentences." },
            ],
            steps: [
              { part: "a", reasoning: "Ellipsis placed where the clause was omitted: 'The experiment ... showed that light matters.'", marks: 1, markCode: "AO5" },
              { part: "a", reasoning: "Quotation marks and the rest of the words are exact.", marks: 1, markCode: "AO5" },
              { part: "b", reasoning: "Voice shift identified: passive 'were planted by us' then active 'we water'.", evidence: "The seeds were planted by us, and we water them daily", marks: 1, markCode: "AO5" },
              { part: "b", reasoning: "Voice shift corrected: 'We planted the seeds and water them daily' (or 'We plant the seeds and water them daily').", marks: 1, markCode: "AO5" },
              { part: "b", reasoning: "Mood shift identified: the imperative 'gather' shifts to indicative 'you should measure'.", evidence: "Then you should measure the soil carefully", marks: 1, markCode: "AO5" },
              { part: "b", reasoning: "Mood shift corrected: 'Then measure the soil carefully.'", marks: 1, markCode: "AO5" },
              { part: "b", reasoning: "Subjunctive error identified: 'If I was' should be 'If I were' because it is contrary to fact.", evidence: "If I was a better planner", marks: 1, markCode: "AO5" },
              { part: "b", reasoning: "Sentence 5 corrected: 'every plant get' (subjunctive after 'important that').", evidence: "every plant gets the same amount of light", marks: 1, markCode: "AO5" },
              { part: "c", reasoning: "Instructions are imperative throughout, with no shift to indicative.", marks: 2, markCode: "AO5" },
              { part: "c", reasoning: "Sentences use active voice.", marks: 1, markCode: "AO5" },
              { part: "c", reasoning: "Appositive is set off correctly with commas.", marks: 1, markCode: "AO5" },
              { part: "c", reasoning: "A dash is used correctly for an abrupt break.", marks: 1, markCode: "AO5" },
              { part: "c", reasoning: "Steps are in a logical order with clear, complete sentences.", marks: 2, markCode: "AO4" },
              { part: "c", reasoning: "Correct spelling and capitalization.", marks: 1, markCode: "AO5" },
            ],
            levels: [...levels6("writing", "b"), ...levels8("writing", "c")],
            finalAnswer: "(a) \"The experiment ... showed that light matters.\" (b) Voice shift: change to 'We planted the seeds and water them daily.' Mood shift: change to 'Then measure the soil carefully.' Subjunctive: 'If I were a better planner'; 'It is important that every plant get the same amount of light.' (c) Model: 'Place your plant, a fern, near a window. Water it once a week. Check the soil first—if it feels damp, wait another day. Turn the pot a quarter turn each week. Remove any yellow leaves.'",
            commonErrors: ["Leaving 'gets' in sentence 5 because it sounds natural.", "Fixing the voice shift but changing the meaning.", "Using a dash where a comma would do."],
          },
        },
      ],
    },
  ],
};
