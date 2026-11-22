import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "ciege-u1-lesson-1-2",
  code: "1-2",
  title: "Vocabulary in Context",
  goal: "I CAN deduce word meanings from context and explain them.",
  standards: ["Cambridge IGCSE First Language English 0500 Paper 2: vocabulary"],
  vocabulary: [
    { term: "Context", definition: "The words around a word that help reveal its meaning." },
    { term: "Connotation", definition: "The feeling or association a word carries." },
    { term: "Denotation", definition: "The dictionary meaning of a word." },
    { term: "Synonym", definition: "A word with a similar meaning." },
    { term: "Register", definition: "The level of formality in language." },
  ],
  concepts: [
    {
      id: "ciege-u1-s2-context",
      title: "Using context clues",
      skill: "Work out unfamiliar word meanings from surrounding text.",
      lesson: {
        sections: [
          {
            heading: "Context clues",
            body: "You rarely need a dictionary in the exam. Look at the words around the target word: definitions ('X, which is...'), contrasts ('unlike...'), examples, and cause-effect clues.",
          },
          {
            heading: "Explaining meanings",
            body: "When asked what a word means, paraphrase in your own words and show how context supports it. 'The arid landscape' — arid means dry, suggested by 'no rain for months'.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Read: 'The doctor was meticulous, checking every detail twice.' What does meticulous mean?",
          solution: "Very careful and thorough — the second half of the sentence gives the clue.",
        },
      },
      questions: [
        {
          id: "ciege-u1-s2-ct-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Desert Crossing",
            author: "Written for Akademik Space",
            text: "The travellers crossed the arid landscape, where no rain had fallen for months and the ground was cracked and dusty.",
          },
          stem: "What does 'arid' mean?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Very cold" },
            { id: "b", text: "Very green" },
            { id: "c", text: "Very crowded" },
            { id: "d", text: "Very dry" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Context clues", statement: "Surrounding words reveal meaning." }],
            steps: [
              { reasoning: "'No rain', 'cracked and dusty' suggest dry.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Very dry",
          },
        },
        {
          id: "ciege-u1-s2-ct-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "Desert Crossing",
            author: "Written for Akademik Space",
            text: "The travellers crossed the arid landscape, where no rain had fallen for months and the ground was cracked and dusty.",
          },
          stem: "Explain how the context helps you understand 'arid'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Context explanation", statement: "Point to the clue words." }],
            steps: [
              { reasoning: "The clue is 'no rain had fallen for months'.", marks: 1, markCode: "AO2" },
              { reasoning: "This shows the land is dry, so arid means dry.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "No rain → dry",
          },
        },
        {
          id: "ciege-u1-s2-ct-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The New Student",
            author: "Written for Akademik Space",
            text: "Kofi was reticent at first, answering questions in single words. But as the conversation warmed, he began to talk animatedly about his village.",
          },
          stem: "What does 'reticent' mean, and what shows this in the text?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference of meaning", statement: "Meaning + evidence." }],
            steps: [
              { reasoning: "Reticent means shy or reluctant to speak.", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence: 'answering questions in single words'.", marks: 1, markCode: "AO2" },
              { reasoning: "The contrast with 'animatedly' confirms the change.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Shy/reluctant — single-word answers",
          },
        },
        {
          id: "ciege-u1-s2-ct-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Market",
            author: "Written for Akademik Space",
            text: "The market was a cacophony of sounds: vendors shouting prices, knives chopping on wooden boards, and music blaring from a rusty speaker.",
          },
          stem: "What does 'cacophony' suggest about the market? Use the rest of the sentence as evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Word meaning", statement: "Meaning + textual evidence." }],
            steps: [
              { reasoning: "Cacophony means a harsh, confusing mixture of sounds.", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence: 'vendors shouting', 'chopping', 'music blaring'.", marks: 1, markCode: "AO2" },
              { reasoning: "Many different loud sounds at once.", marks: 1, markCode: "AO2" },
              { reasoning: "The colon introduces the examples.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Harsh mixture of loud sounds",
          },
        },
        {
          id: "ciege-u1-s2-ct-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Soup",
            author: "Written for Akademik Space",
            text: "The soup was tepid — neither hot nor cold — so nobody wanted a second bowl.",
          },
          stem: "What does 'tepid' mean?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Very salty" },
            { id: "b", text: "Lukewarm" },
            { id: "c", text: "Freezing cold" },
            { id: "d", text: "Boiling hot" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Context clues", statement: "Definition clues reveal meaning." }],
            steps: [
              { reasoning: "'Neither hot nor cold' defines tepid as lukewarm.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Lukewarm",
          },
        },
        {
          id: "ciege-u1-s2-ct-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Garden",
            author: "Written for Akademik Space",
            text: "Mira planted the seeds. She watered them every day. Soon green shoots appeared.",
          },
          stem: "How many sentences does this extract contain?",
          response: { type: "numeric", parts: [
            { label: "Sentences", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Close reading", statement: "Count sentence boundaries." }],
            steps: [
              { reasoning: "Three full stops mark three sentences.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u1-s2-ct-q7",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Two Brothers",
            author: "Written for Akademik Space",
            text: "Unlike his brother, who acted on impulse, Daniel always checked the map twice before setting off.",
          },
          stem: "What does 'impulse' suggest about the brother?",
          response: { type: "mcq", choices: [
            { id: "a", text: "He travels slowly" },
            { id: "b", text: "He gets angry easily" },
            { id: "c", text: "He plans carefully" },
            { id: "d", text: "He acts without thinking" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "skill", name: "Context clues", statement: "Contrast shows meaning." }],
            steps: [
              { reasoning: "'Impulse' means acting on sudden urges without thinking.", marks: 1, markCode: "AO2" },
              { reasoning: "The contrast with Daniel's careful 'checked the map twice' confirms it.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Acts without thinking",
          },
        },
        {
          id: "ciege-u1-s2-ct-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Moving Day",
            author: "Written for Akademik Space",
            text: "The tall man carried a heavy wooden box upstairs.",
          },
          stem: "How many adjectives are in this sentence?",
          response: { type: "numeric", parts: [
            { label: "Adjectives", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Adjective", statement: "A word describing a noun." }],
            steps: [
              { reasoning: "'Tall', 'heavy' and 'wooden' all describe nouns — 3 adjectives.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u1-s2-ct-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Recipe",
            author: "Written for Akademik Space",
            text: "The instructions were ambiguous — readers could not tell whether to add the ingredient before or after baking.",
          },
          stem: "What does 'ambiguous' mean?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Open to more than one interpretation" },
            { id: "b", text: "Very clear" },
            { id: "c", text: "Very short" },
            { id: "d", text: "Easy to follow" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "skill", name: "Context clues", statement: "Explanation after the dash defines the word." }],
            steps: [
              { reasoning: "The dash explains readers could not tell — ambiguous means unclear.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Open to more than one interpretation",
          },
        },
        {
          id: "ciege-u1-s2-ct-q10",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            text: "She opened the door. A letter lay on the mat.",
          },
          stem: "How many sentences are there in this extract, and how many commas?",
          response: { type: "numeric", parts: [
            { label: "Sentences", answer: 2 },
            { label: "Commas", answer: 0 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Close reading", statement: "Punctuation signals sentence structure." }],
            steps: [
              { reasoning: "Two full stops give two sentences.", marks: 1, markCode: "AO1" },
              { reasoning: "There are no commas in the extract.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2 sentences, 0 commas",
          },
        },
        {
          id: "ciege-u1-s2-ct-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Dev's Habits",
            author: "Written for Akademik Space",
            text: "Dev was frugal — he mended his boots instead of buying new ones and saved every spare coin in a tin.",
          },
          stem: "What does 'frugal' mean, and how does the rest of the sentence support your answer?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference of meaning", statement: "Meaning + evidence." }],
            steps: [
              { reasoning: "Frugal means careful with money, avoiding waste.", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence: 'mended his boots instead of buying new ones'.", marks: 1, markCode: "AO2" },
              { reasoning: "'Saved every spare coin' reinforces the careful, economical meaning.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Careful with money — mends boots, saves coins",
          },
        },
        {
          id: "ciege-u1-s2-ct-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "The Turning Point",
            author: "Written for Akademik Space",
            text: "Her epiphany came suddenly — the moment she realised she had been wrong all along.",
          },
          stem: "What does 'epiphany' mean?",
          response: { type: "mcq", choices: [
            { id: "a", text: "A childhood memory" },
            { id: "b", text: "A serious mistake" },
            { id: "c", text: "A sudden realisation" },
            { id: "d", text: "A celebration" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "skill", name: "Context clues", statement: "Apposition defines the word." }],
            steps: [
              { reasoning: "The dash explains epiphany as the moment of realisation.", marks: 1, markCode: "AO2" },
              { reasoning: "'Suddenly' and 'realised' confirm it is a sudden insight.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "A sudden realisation",
          },
        },
        {
          id: "ciege-u1-s2-ct-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "The Forecast",
            author: "Written for Akademik Space",
            text: "Although it was raining, they went out. They took umbrellas, but forgot their coats.",
          },
          stem: "How many words are in the first sentence, and how many in the second?",
          response: { type: "numeric", parts: [
            { label: "First sentence", answer: 7 },
            { label: "Second sentence", answer: 7 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Close reading", statement: "Count words accurately." }],
            steps: [
              { reasoning: "Although / it / was / raining / they / went / out = 7 words.", marks: 1, markCode: "AO1" },
              { reasoning: "They / took / umbrellas / but / forgot / their / coats = 7 words.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "7 and 7",
          },
        },
        {
          id: "ciege-u1-s2-ct-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Lecture",
            author: "Written for Akademik Space",
            text: "The lecture was soporific; half the audience dozed during it.",
          },
          stem: "What does 'soporific' mean?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Very loud" },
            { id: "b", text: "Causing sleep" },
            { id: "c", text: "Hard to understand" },
            { id: "d", text: "Exciting" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "skill", name: "Context clues", statement: "Semicolon links cause and effect." }],
            steps: [
              { reasoning: "'Half the audience dozed' shows soporific means sleep-inducing.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Causing sleep",
          },
        },
        {
          id: "ciege-u1-s2-ct-q15",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Ben's Room",
            author: "Written for Akademik Space",
            text: "Ben's room was a mess: clothes on the floor, books on the bed, plates by the door.",
          },
          stem: "How many items are listed as being out of place?",
          response: { type: "numeric", parts: [
            { label: "Items", answer: 3 },
          ] },
          markscheme: {
            principles: [{ kind: "skill", name: "Close reading", statement: "List items after the colon." }],
            steps: [
              { reasoning: "Clothes, books and plates are listed — 3 items.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "3",
          },
        },
        {
          id: "ciege-u1-s2-ct-q16",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Ending",
            author: "Written for Akademik Space",
            text: "The novel's ending was ambiguous, leaving readers to decide whether the hero had triumphed or failed.",
          },
          stem: "Explain what 'ambiguous' means in this context, how the sentence supports your answer, and suggest one reason a writer might choose an ambiguous ending.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Inference + effect", statement: "Meaning, evidence, writer's purpose." }],
            steps: [
              { reasoning: "Ambiguous means open to more than one interpretation.", marks: 1, markCode: "AO2" },
              { reasoning: "Evidence: 'leaving readers to decide whether... triumphed or failed'.", marks: 1, markCode: "AO2" },
              { reasoning: "The two opposite outcomes show the ending is unclear.", marks: 1, markCode: "AO2" },
              { reasoning: "A writer might use it to provoke thought or discussion.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Unclear ending — readers must decide",
          },
        },
      ],
    },
    {
      id: "ciege-u1-s2-word-choice",
      title: "Word choice and connotation",
      skill: "Analyse how word choice affects meaning and tone.",
      lesson: {
        sections: [
          {
            heading: "Connotation",
            body: "Words carry feelings beyond their dictionary meaning. 'Slim' is positive; 'skinny' can be negative. 'Thrifty' is positive; 'stingy' is negative.",
          },
          {
            heading: "Analysing choices",
            body: "When asked why a writer chose a word, discuss its connotation and how it shapes the reader's view of a character, place or event.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why might a writer describe a house as 'dilapidated' rather than 'old'?",
          solution: "'Dilapidated' suggests neglect and decay — much more negative than the neutral 'old'.",
        },
      },
      questions: [
        {
          id: "ciege-u1-s2-wc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Two Descriptions",
            author: "Written for Akademik Space",
            text: "The old man walked with a stick. The frail old man shuffled with a stick.",
          },
          stem: "Which word has a more negative connotation: 'old' or 'frail'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "frail" },
            { id: "b", text: "Both the same" },
            { id: "c", text: "Neither" },
            { id: "d", text: "old" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Connotation", statement: "Emotional association of a word." }],
            steps: [
              { reasoning: "'Frail' suggests weakness — more negative than neutral 'old'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "frail",
          },
        },
        {
          id: "ciege-u1-s2-wc-q2",
          difficulty: "foundation",
          totalMarks: 2,
          extract: {
            title: "The Interview",
            author: "Written for Akademik Space",
            text: "The politician's 'frank' answers impressed the journalists, who wrote that he had shown 'remarkable candour'.",
          },
          stem: "What do 'frank' and 'candour' suggest about the politician?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Connotation", statement: "Positive word choice shows positive traits." }],
            steps: [
              { reasoning: "Both words suggest honesty and openness.", marks: 1, markCode: "AO2" },
              { reasoning: "The politician seems truthful and direct.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Honest and open",
          },
        },
        {
          id: "ciege-u1-s2-wc-q3",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Crowd",
            author: "Written for Akademik Space",
            text: "A throng of fans surged towards the stage, banners waving. Security struggled to hold the surging mass back.",
          },
          stem: "How does the writer's word choice make the crowd seem?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Word choice", statement: "Analyse connotation of 'throng', 'surged'." }],
            steps: [
              { reasoning: "'Throng' suggests a large, somewhat uncontrolled gathering.", marks: 1, markCode: "AO2" },
              { reasoning: "'Surged' suggests forceful, energetic movement.", marks: 1, markCode: "AO2" },
              { reasoning: "Together they make the crowd seem overwhelming and excited.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Large, energetic, overwhelming",
          },
        },
        {
          id: "ciege-u1-s2-wc-q4",
          difficulty: "core",
          totalMarks: 4,
          extract: {
            title: "The Garden",
            author: "Written for Akademik Space",
            text: "The garden was a jungle of weeds; roses had vanished beneath a tangle of brambles and bindweed.",
          },
          stem: "Why does the writer compare the garden to a 'jungle'?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Metaphor", statement: "Comparison implies wildness and neglect." }],
            steps: [
              { reasoning: "A jungle is wild and overgrown — so is the garden.", marks: 1, markCode: "AO3" },
              { reasoning: "'Jungle' implies the garden is out of control.", marks: 1, markCode: "AO2" },
              { reasoning: "Supported by 'tangle of brambles and bindweed'.", marks: 1, markCode: "AO2" },
              { reasoning: "Shows neglect and disorder.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Implies wild, neglected garden",
          },
        },
        {
          id: "ciege-u1-s2-wc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Two Descriptions",
            author: "Written for Akademik Space",
            text: "The dancer had a slim figure, while the stray dog had a scrawny frame.",
          },
          stem: "Which word has a more negative connotation: 'slim' or 'scrawny'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "slim" },
            { id: "b", text: "Neither" },
            { id: "c", text: "scrawny" },
            { id: "d", text: "Both equally negative" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "definition", name: "Connotation", statement: "Emotional association of a word." }],
            steps: [
              { reasoning: "'Scrawny' suggests unhealthy thinness — more negative than 'slim'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "scrawny",
          },
        },
        {
          id: "ciege-u1-s2-wc-q6",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Harbour",
            author: "Written for Akademik Space",
            text: "The sleek yacht glided past the old boats.",
          },
          stem: "How many adjectives are in this sentence?",
          response: { type: "numeric", parts: [
            { label: "Adjectives", answer: 2 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Adjective", statement: "A word describing a noun." }],
            steps: [
              { reasoning: "'Sleek' describes the yacht and 'old' describes the boats — 2 adjectives.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "2",
          },
        },
        {
          id: "ciege-u1-s2-wc-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Treasurer",
            author: "Written for Akademik Space",
            text: "The treasurer was praised as 'thrifty' by members but called 'stingy' by outsiders.",
          },
          stem: "What is the difference between 'thrifty' and 'stingy'?",
          response: { type: "mcq", choices: [
            { id: "a", text: "They mean exactly the same thing" },
            { id: "b", text: "Same idea, different connotation" },
            { id: "c", text: "One is a noun, one a verb" },
            { id: "d", text: "One is formal, one informal" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Connotation", statement: "Same meaning, different feeling." }],
            steps: [
              { reasoning: "Both describe careful money habits, but 'thrifty' is positive and 'stingy' negative.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Same idea, different connotation",
          },
        },
        {
          id: "ciege-u1-s2-wc-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Weather",
            author: "Written for Akademik Space",
            text: "The fierce storm lashed the coast; the waves were huge.",
          },
          stem: "How many adjectives describe the storm, and how many describe the waves?",
          response: { type: "numeric", parts: [
            { label: "Storm", answer: 1 },
            { label: "Waves", answer: 1 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Adjective", statement: "A word describing a noun." }],
            steps: [
              { reasoning: "'Fierce' describes the storm — 1 adjective.", marks: 1, markCode: "AO1" },
              { reasoning: "'Huge' describes the waves — 1 adjective.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1 and 1",
          },
        },
        {
          id: "ciege-u1-s2-wc-q9",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Donation",
            author: "Written for Akademik Space",
            text: "The 'generous' donation was, in fact, a tax dodge.",
          },
          stem: "What effect do the quotation marks around 'generous' create?",
          response: { type: "mcq", choices: [
            { id: "a", text: "They create ironic doubt" },
            { id: "b", text: "They emphasise honesty" },
            { id: "c", text: "They have no effect" },
            { id: "d", text: "They show the word is a title" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "technique", name: "Scare quotes", statement: "Quotation marks can signal irony." }],
            steps: [
              { reasoning: "'In fact, a tax dodge' contradicts 'generous' — the quotes signal irony.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Ironic doubt",
          },
        },
        {
          id: "ciege-u1-s2-wc-q10",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Farmer",
            author: "Written for Akademik Space",
            text: "The frugal farmer saved money all year, yet neighbours called him stingy.",
          },
          stem: "How many words in this extract have a positive connotation, and how many a negative connotation?",
          response: { type: "numeric", parts: [
            { label: "Positive", answer: 1 },
            { label: "Negative", answer: 1 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Connotation", statement: "Words carry positive or negative feeling." }],
            steps: [
              { reasoning: "'Frugal' is positive — 1 word.", marks: 1, markCode: "AO2" },
              { reasoning: "'Stingy' is negative — 1 word.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "1 positive, 1 negative",
          },
        },
        {
          id: "ciege-u1-s2-wc-q11",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Café Review",
            author: "Written for Akademik Space",
            text: "The café was 'cozy' — though 'cramped' might have been more honest.",
          },
          stem: "Why might the writer choose 'cozy' instead of 'cramped'? What effect does the choice have?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Word choice", statement: "Connotation shapes the reader's view." }],
            steps: [
              { reasoning: "'Cozy' has positive connotations of warmth and comfort.", marks: 1, markCode: "AO2" },
              { reasoning: "'Cramped' is negative — it would suggest discomfort.", marks: 1, markCode: "AO2" },
              { reasoning: "The writer flatters the café, or hints at polite understatement.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "'Cozy' flatters; 'cramped' would criticise",
          },
        },
        {
          id: "ciege-u1-s2-wc-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "The Performer",
            author: "Written for Akademik Space",
            text: "Her laugh was like sunshine — warm, bright and impossible to ignore.",
          },
          stem: "What effect does the comparison of the laugh to sunshine create?",
          response: { type: "mcq", choices: [
            { id: "a", text: "It suggests she is dangerous" },
            { id: "b", text: "It makes her seem cold" },
            { id: "c", text: "It suggests warmth, happiness and energy" },
            { id: "d", text: "It has no effect" },
          ], correctChoiceId: "c" },
          markscheme: {
            principles: [{ kind: "technique", name: "Simile", statement: "Comparison carries connotation." }],
            steps: [
              { reasoning: "Sunshine connotes warmth and brightness — the laugh seems joyful.", marks: 1, markCode: "AO2" },
              { reasoning: "'Impossible to ignore' adds energy and vitality.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Warmth, happiness and energy",
          },
        },
        {
          id: "ciege-u1-s2-wc-q13",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "The Mansion",
            author: "Written for Akademik Space",
            text: "The old house was described variously as 'grand', 'imposing', 'vast' and 'haunting'.",
          },
          stem: "How many words in quotation marks describe the house, and how many words in total describe the house?",
          response: { type: "numeric", parts: [
            { label: "Quoted descriptors", answer: 4 },
            { label: "All descriptors", answer: 5 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Adjective", statement: "Words describing a noun." }],
            steps: [
              { reasoning: "Grand, imposing, vast and haunting are quoted — 4.", marks: 1, markCode: "AO1" },
              { reasoning: "'Old' also describes the house — 5 in total.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "4 quoted, 5 total",
          },
        },
        {
          id: "ciege-u1-s2-wc-q14",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Two Words",
            author: "Written for Akademik Space",
            text: "Her brother called her 'slender'; the doctor called her 'skinny'.",
          },
          stem: "Which word has the more positive connotation?",
          response: { type: "mcq", choices: [
            { id: "a", text: "skinny" },
            { id: "b", text: "slender" },
            { id: "c", text: "Both the same" },
            { id: "d", text: "Neither" },
          ], correctChoiceId: "b" },
          markscheme: {
            principles: [{ kind: "definition", name: "Connotation", statement: "Slender is positive, skinny can be negative." }],
            steps: [
              { reasoning: "'Slender' suggests attractive thinness — more positive than 'skinny'.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "slender",
          },
        },
        {
          id: "ciege-u1-s2-wc-q15",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "The Athlete",
            author: "Written for Akademik Space",
            text: "Grandpa was still remarkably spry, jogging each morning.",
          },
          stem: "How many adjectives appear in this sentence?",
          response: { type: "numeric", parts: [
            { label: "Adjectives", answer: 1 },
          ] },
          markscheme: {
            principles: [{ kind: "definition", name: "Adjective", statement: "A word describing a noun." }],
            steps: [
              { reasoning: "'Spry' describes Grandpa; 'remarkably' is an adverb and 'each' a determiner — 1 adjective.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "ciege-u1-s2-wc-q16",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Review",
            author: "Written for Akademik Space",
            text: "The critic called the film a 'masterpiece', though most of the audience left before the ending.",
          },
          stem: "Analyse the critic's choice of word. Why might the writer of this extract use 'masterpiece' in quotation marks?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Word choice + irony", statement: "Connotation versus reality." }],
            steps: [
              { reasoning: "'Masterpiece' is highly positive — suggests perfection.", marks: 1, markCode: "AO2" },
              { reasoning: "The audience leaving early contradicts the praise.", marks: 1, markCode: "AO2" },
              { reasoning: "The quotation marks signal the writer doubts the critic.", marks: 1, markCode: "AO3" },
              { reasoning: "Overall effect: ironic — the critic seems out of touch.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Ironic praise — critic out of touch",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciege-u1-s2-vocab-notes",
      title: "Vocabulary in context — revision notes",
      summary: "Context clues, connotation, why writers choose words.",
      sections: [
        { heading: "Context", body: "Use the sentence and paragraph around a word — definitions, contrasts and examples often reveal meaning." },
        { heading: "Connotation", body: "Explain both meaning and feeling. Quote the clue words that support your explanation." },
      ],
    },
  ],
};
