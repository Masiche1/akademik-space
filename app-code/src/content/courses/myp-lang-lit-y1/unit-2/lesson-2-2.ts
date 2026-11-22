import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "mll1-u2-lesson-2-2",
  code: "2-2",
  title: "Words and Meanings",
  goal: "I CAN use synonyms and antonyms, and work out the meaning of an unfamiliar word from the words around it.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
    "Criterion D: Using language",
  ],
  vocabulary: [
    { term: "Synonym", definition: "A word that means the same or almost the same as another word, like 'happy' and 'glad'." },
    { term: "Antonym", definition: "A word that means the opposite of another word, like 'hot' and 'cold'." },
    { term: "Context clues", definition: "The words around an unfamiliar word that help you guess its meaning." },
    { term: "Vocabulary", definition: "The words a person knows and uses." },
    { term: "Prefix", definition: "A letter group added to the start of a word that changes its meaning, like 'un-' in 'unhappy'." },
  ],
  concepts: [
    {
      id: "mll1-u2-synonyms-antonyms",
      title: "Synonyms and antonyms",
      skill: "Find words that mean the same or opposite and choose the best word for a situation.",
      lesson: {
        sections: [
          {
            heading: "Synonyms",
            body: "**Synonyms** are words that mean the same or nearly the same. 'Big', 'large' and 'huge' are synonyms — but they are not identical. 'Huge' means **very** big. Choosing a synonym can change how strong your writing feels.",
          },
          {
            heading: "Antonyms",
            body: "**Antonyms** are opposites: 'hot/cold', 'fast/slow', 'happy/sad'. Antonyms are useful when you want to show contrast — 'The room was hot outside but cold inside.'",
          },
          {
            heading: "Choosing the right word",
            body: "Good writers do not repeat the same word again and again. Instead they swap in synonyms: 'The dog ran. The puppy scampered. The animal raced.' Each word adds a slightly different picture.",
          },
        ],
        keyFormulas: [
          { name: "Synonym vs antonym", statement: "Synonyms mean the same; antonyms mean the opposite." },
        ],
        workedExample: {
          problem: "Give a synonym and an antonym for 'brave'.",
          solution: "Synonym: 'courageous' or 'bold'. Antonym: 'cowardly' or 'afraid'.",
        },
      },
      questions: [
        {
          id: "mll1-u2-synonyms-antonyms-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is a synonym for 'happy'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tired" },
              { id: "b", text: "Glad" },
              { id: "c", text: "Angry" },
              { id: "d", text: "Sad" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Synonym", statement: "A synonym means the same or nearly the same as another word." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'glad' means the same as 'happy' — it is a synonym. 'Sad' is the antonym.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Glad",
          },
        },
        {
          id: "mll1-u2-synonyms-antonyms-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write one synonym and one antonym for 'fast'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Synonym and antonym", statement: "Synonyms share meaning; antonyms are opposites." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): a synonym such as 'quick', 'rapid' or 'swift'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): an antonym such as 'slow' or 'sluggish'.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Synonym: quick/rapid/swift. Antonym: slow.",
          },
        },
        {
          id: "mll1-u2-synonyms-antonyms-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "The sentence 'The enormous elephant moved slowly' is improved by swapping words: 'The gigantic elephant lumbered along.' Explain why 'gigantic' and 'lumbered' might be better choices than 'enormous' and 'slowly'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Precise word choice", statement: "Choosing synonyms with the right shade of meaning makes writing more vivid." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'gigantic' is a stronger synonym than 'enormous', matching an elephant's huge size.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'lumbered' is more specific than 'slowly' — it suggests heavy, clumsy movement, which suits an elephant.", marks: 1, markCode: "A" },
              { reasoning: "Criterion C (Producing text): precise synonyms create a clearer, more interesting picture than general words.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "'Gigantic' stresses the elephant's size more strongly; 'lumbered' paints heavy movement instead of just saying 'slowly'.",
            commonErrors: ["Saying the new words are 'better' without explaining the difference in meaning."],
          },
        },
        {
          id: "mll1-u2-synonyms-antonyms-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a synonym and an antonym for 'generous'.", marks: 2 },
            { label: "b", prompt: "Rewrite this sentence using a synonym for 'walked' and an antonym idea for 'quiet': 'She walked home quietly.'", marks: 2 },
            { label: "c", prompt: "Explain why using different words (instead of repeating 'walked') makes writing more interesting.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Word choice variety", statement: "Synonyms and antonyms add variety and precision to writing." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): synonym — 'kind', 'giving', 'selfless'; antonym — 'stingy', 'selfish'.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D (Using language): both synonym and antonym given and correct.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C (Producing text): an example such as 'She hurried/strolled home noisily' — synonym for walked plus opposite of quiet.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D (Using language): the sentence keeps correct grammar and meaning with the new words.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C (Producing text): repeating one word gets boring; synonyms give the reader different shades of meaning and keep interest.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) generous → kind/selfless; antonym stingy/selfish. (b) e.g. 'She hurried home noisily.' (c) Variety keeps the reader interested.",
          },
        },
        {
          id: "mll1-u2-synonyms-antonyms-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is a synonym for 'big'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "large" },
              { id: "b", text: "small" },
              { id: "c", text: "slow" },
              { id: "d", text: "quiet" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Synonym", statement: "A synonym means the same or nearly the same." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'large' means the same as 'big' — (b). 'small' is the antonym.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** large",
          },
        },
        {
          id: "mll1-u2-synonyms-antonyms-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word is an ANTONYM for 'hot'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "cold" },
              { id: "b", text: "big" },
              { id: "c", text: "sunny" },
              { id: "d", text: "warm" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Antonym", statement: "An antonym means the opposite." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'cold' is the opposite of 'hot' — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** cold",
          },
        },
        {
          id: "mll1-u2-synonyms-antonyms-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which pair are synonyms?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "clever — smart" },
              { id: "b", text: "loud — quiet" },
              { id: "c", text: "ancient — modern" },
              { id: "d", text: "begin — end" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Synonym", statement: "Synonyms share meaning; the others in (a),(b),(d) are antonyms." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'clever' and 'smart' mean the same — (c). The other pairs are opposites.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** clever — smart",
          },
        },
        {
          id: "mll1-u2-synonyms-antonyms-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write one synonym and one antonym for 'strong'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Synonym and antonym", statement: "Synonyms mean the same; antonyms are opposites." }],
            steps: [
              { reasoning: "Criterion D (Using language): synonym — 'powerful', 'sturdy', 'tough'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): antonym — 'weak' or 'fragile'.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Synonym: powerful/sturdy. Antonym: weak.",
          },
        },
        {
          id: "mll1-u2-synonyms-antonyms-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rewrite 'The very big dog ran very fast' using stronger, more interesting synonyms.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Word choice", statement: "Stronger synonyms make writing more vivid than repeated 'very' + adjective." }],
            steps: [
              { reasoning: "Criterion C (Producing text): an example such as 'The enormous dog sprinted' — 'enormous' and 'sprinted' replace 'very big' and 'ran very fast'.", marks: 1, markCode: "C" },
              { reasoning: "Criterion A (Analysing): the new words carry the 'very' inside them, making the sentence tighter and more vivid.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. 'The enormous dog sprinted.'",
          },
        },
        {
          id: "mll1-u2-synonyms-antonyms-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A writer uses 'The path was narrow and steep' then changes it to 'The trail was a tightrope of rock.' Explain how the second version shows the path more clearly.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Precise word choice", statement: "Specific synonyms create sharper pictures than general adjectives." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'narrow and steep' is plain description — it tells but does not paint a strong picture.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'tightrope of rock' suggests danger and balance — it makes the reader feel how narrow and steep it really is.", evidence: "a tightrope of rock", marks: 1, markCode: "A" },
              { reasoning: "Criterion C (Producing text): the vivid phrase is more memorable and exciting than the flat adjectives.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "'Tightrope of rock' shows the danger and narrowness vividly, while 'narrow and steep' only states facts.",
          },
        },
        {
          id: "mll1-u2-synonyms-antonyms-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which word is the OPPOSITE of 'ancient'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "modern" },
              { id: "b", text: "old" },
              { id: "c", text: "historic" },
              { id: "d", text: "antique" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Antonym", statement: "Antonyms are opposites; 'modern' opposes 'ancient'." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'modern' means new/recent — the opposite of ancient, (b). 'Old', 'historic' and 'antique' are synonyms.", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** modern",
          },
        },
        {
          id: "mll1-u2-synonyms-antonyms-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student writes: 'The quick brown fox jumps over the lazy dog. The fast canine leapt over the sleepy hound.' Explain why mixing synonyms like this makes writing more interesting.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Synonym variety", statement: "Using synonyms adds variety and shades of meaning." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'quick/fast', 'fox/canine', 'jumps/leapt', 'lazy/sleepy' — each pair means almost the same but feels different.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the reader gets a richer picture — 'canine' sounds more formal, 'leapt' sounds more dramatic than 'jumps'.", marks: 1, markCode: "A" },
              { reasoning: "Criterion C (Producing text): repeating the same word gets boring; synonyms keep interest and add nuance.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Synonyms add variety and different shades of meaning, keeping the reader interested.",
          },
        },
        {
          id: "mll1-u2-synonyms-antonyms-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a synonym and an antonym for 'difficult'.", marks: 2 },
            { label: "b", prompt: "Rewrite 'The hard test was very hard' using a synonym for one 'hard'.", marks: 2 },
            { label: "c", prompt: "Explain why repeating 'hard' twice weakens the sentence.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Word choice", statement: "Synonyms avoid repetition and sharpen meaning." }],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): synonym — 'challenging', 'tough'; antonym — 'easy'.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D (Using language): both synonym and antonym correct.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C (Producing text): e.g. 'The challenging test was very hard' or 'The difficult test was tough.'", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D (Using language): grammar and meaning stay correct.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion A (Analysing): repeating 'hard' sounds flat and lazy; a synonym adds variety and precision.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) difficult → challenging/tough; antonym easy. (b) e.g. 'The challenging test was very hard.' (c) Repetition sounds flat.",
          },
        },
        {
          id: "mll1-u2-synonyms-antonyms-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an antonym?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A very long word" },
              { id: "b", text: "A word in a poem" },
              { id: "c", text: "A word that means the same as another" },
              { id: "d", text: "A word that means the opposite" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Antonym", statement: "An antonym is a word meaning the opposite." }],
            steps: [{ reasoning: "Criterion D (Using language): an antonym means the opposite, e.g. hot/cold — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(d)** A word that means the opposite",
          },
        },
        {
          id: "mll1-u2-synonyms-antonyms-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word is a SYNONYM for 'begin'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "start" },
              { id: "b", text: "finish" },
              { id: "c", text: "end" },
              { id: "d", text: "stop" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Synonym", statement: "'Start' means the same as 'begin'." }],
            steps: [{ reasoning: "Criterion D (Using language): 'start' is a synonym of 'begin' — (b). 'End' and 'finish' are antonyms.", marks: 1, markCode: "D" }],
            finalAnswer: "**(a)** start",
          },
        },
        {
          id: "mll1-u2-synonyms-antonyms-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a synonym and antonym for 'brave'.", marks: 2 },
            { label: "b", prompt: "Rewrite 'The brave knight fought the evil dragon bravely' using a synonym and an adverb change.", marks: 2 },
            { label: "c", prompt: "Explain why your rewrite is stronger.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Synonyms in writing", statement: "Synonyms add variety and strength to description." }],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): synonym — 'courageous', 'bold'; antonym — 'cowardly', 'afraid'.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D (Using language): both given correctly.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C (Producing text): e.g. 'The courageous knight battled the evil dragon with valour.'", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D (Using language): grammar stays correct; repetition of 'brave/bravely' is reduced.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion A (Analysing): varied, precise words sound stronger than repeating 'brave/bravely'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) brave → courageous/bold; cowardly. (b) e.g. 'The courageous knight battled the dragon with valour.' (c) Variety makes it stronger.",
          },
        },
      ],
    },
    {
      id: "mll1-u2-context-clues",
      title: "Context clues",
      skill: "Work out the meaning of an unfamiliar word from the words around it.",
      lesson: {
        sections: [
          {
            heading: "Guessing from context",
            body: "You do not need a dictionary for every new word. The words **around** a word — its **context** — often tell you what it means. 'The arid desert had no water for miles' — 'arid' must mean **very dry**, because deserts have no water.",
          },
          {
            heading: "Types of clues",
            body: "Look for: **definitions** ('a vehicle — a machine for travel'), **examples** ('such as lions and tigers'), **opposites** ('unlike the noisy market, the library was silent') and **cause/effect** ('he was famished after skipping lunch').",
          },
          {
            heading: "Prefixes help too",
            body: "Many English words start with a **prefix** that changes meaning: **un-** (not: unhappy), **re-** (again: rewrite), **dis-** (not/opposite: disagree). Knowing prefixes helps you guess long words.",
          },
        ],
        keyFormulas: [
          { name: "Context clue steps", statement: "1. Read the whole sentence. 2. Look at the words around the new word. 3. Guess the meaning that fits." },
        ],
        workedExample: {
          problem: "What does 'enormous' mean in: 'The enormous whale was bigger than our boat'?",
          solution: "The whale was 'bigger than our boat' — so 'enormous' means very big.",
        },
      },
      questions: [
        {
          id: "mll1-u2-context-clues-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 'The library was silent, unlike the noisy market', what does 'silent' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Very noisy" },
              { id: "b", text: "Completely quiet" },
              { id: "c", text: "Very crowded" },
              { id: "d", text: "Full of books" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Context clue: contrast", statement: "'Unlike' signals an opposite, so 'silent' contrasts with 'noisy'." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'unlike the noisy market' shows silent = the opposite of noisy, i.e. quiet — (b).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Completely quiet",
          },
        },
        {
          id: "mll1-u2-context-clues-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out the meaning of 'fragile' in this sentence and give the clue: 'Be careful with the fragile vase — it could break if you drop it.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Context clues", statement: "The words around a new word reveal its meaning." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'fragile' means easily broken or delicate.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the clue is 'it could break if you drop it' — breakable things are fragile.", evidence: "it could break if you drop it", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fragile = easily broken/delicate. Clue: 'it could break if you drop it.'",
          },
        },
        {
          id: "mll1-u2-context-clues-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Market",
            author: "Written for Akademik Space",
            text: "The market was cacophonous — a wall of shouting, clattering and music that made conversation impossible.",
          },
          stem: "Work out what 'cacophonous' means from the context, and explain your reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Context clue: apposition", statement: "A dash + explanation gives the meaning of the word before it." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): 'cacophonous' means very noisy or full of loud, unpleasant sounds.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the clue is the explanation after the dash — 'a wall of shouting, clattering and music' describes noise.", evidence: "a wall of shouting, clattering and music", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'made conversation impossible' confirms the noise was overwhelming.", evidence: "made conversation impossible", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cacophonous = extremely noisy. The explanation after the dash ('shouting, clattering and music') defines it.",
          },
        },
        {
          id: "mll1-u2-context-clues-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Work out the meaning of 'reluctant' in: 'Sam was reluctant to jump into the cold lake.'", marks: 2 },
            { label: "b", prompt: "Work out the meaning of 'drowsy' in: 'The warm room and soft music made everyone drowsy.'", marks: 2 },
            { label: "c", prompt: "Explain which clue helped you most in each case.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Context clues", statement: "Cause/effect and descriptive clues reveal word meanings." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'reluctant' means unwilling or not wanting to do something.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): clue — 'the cold lake' suggests he does not want to get in the icy water.", evidence: "the cold lake", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'drowsy' means sleepy or half-asleep.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion A (Analysing): clue — 'warm room and soft music' are things that make people sleepy.", evidence: "warm room and soft music", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): in both cases the cause/effect or descriptive details around the word revealed the meaning.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) reluctant = unwilling; the cold lake is the clue. (b) drowsy = sleepy; warm room and soft music are the clues. (c) Surrounding details gave the meanings.",
          },
        },
        {
          id: "mll1-u2-context-clues-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 'The arid desert had no water for miles', what does 'arid' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Very dry" },
              { id: "b", text: "Very wet" },
              { id: "c", text: "Very hot" },
              { id: "d", text: "Very sandy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Context clues", statement: "'No water for miles' in a desert shows 'arid' means dry." }],
            steps: [{ reasoning: "Criterion A (Analysing): a desert with no water must be dry — 'arid' means very dry, (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** Very dry",
          },
        },
        {
          id: "mll1-u2-context-clues-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 'The tiny kitten could fit inside my shoe', what does 'tiny' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Very small" },
              { id: "b", text: "Very large" },
              { id: "c", text: "Very loud" },
              { id: "d", text: "Very fast" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Context clues", statement: "'Could fit inside my shoe' shows the kitten is very small." }],
            steps: [{ reasoning: "Criterion A (Analysing): fitting inside a shoe means very small — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** Very small",
          },
        },
        {
          id: "mll1-u2-context-clues-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In 'After skipping lunch, Jamal was famished by dinner time', what does 'famished' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Extremely hungry" },
              { id: "b", text: "Very tired" },
              { id: "c", text: "Very thirsty" },
              { id: "d", text: "Very full" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Context clue: cause/effect", statement: "Skipping lunch causes hunger — 'famished' means extremely hungry." }],
            steps: [{ reasoning: "Criterion A (Analysing): not eating all day leads to extreme hunger — (c).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** Extremely hungry",
          },
        },
        {
          id: "mll1-u2-context-clues-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out the meaning of 'ancient' in this sentence and give the clue: 'The ancient castle walls were crumbling after a thousand years.'",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Context clues", statement: "The words around a new word reveal its meaning." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'ancient' means very old.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the clue is 'after a thousand years' — that much time makes things old.", evidence: "after a thousand years", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ancient = very old. Clue: 'after a thousand years'.",
          },
        },
        {
          id: "mll1-u2-context-clues-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Work out the meaning of 'drowsy' in: 'The warm bath and soft music made me drowsy.' Give the clue.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Context clues", statement: "Cause/effect clues show what a word means." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'drowsy' means sleepy.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the clue is 'warm bath and soft music' — these cause sleepiness.", evidence: "warm bath and soft music", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Drowsy = sleepy. Clue: 'warm bath and soft music' cause it.",
          },
        },
        {
          id: "mll1-u2-context-clues-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Work out the meaning of 'reluctant' in: 'The reluctant swimmer stood at the edge of the cold pool, arms crossed.' Explain your reasoning.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Context clues", statement: "Actions and adjectives around a word reveal its meaning." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'reluctant' means unwilling or hesitant.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): clue 1 — 'cold pool' suggests he does not want to get in.", evidence: "the cold pool", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): clue 2 — 'stood at the edge ... arms crossed' shows hesitation and resistance.", evidence: "stood at the edge of the cold pool, arms crossed", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reluctant = unwilling/hesitant. The cold pool and crossed arms show he does not want to swim.",
          },
        },
        {
          id: "mll1-u2-context-clues-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In 'Unlike his quiet sister, Marco was very talkative', what does 'talkative' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Very shy" },
              { id: "b", text: "Very angry" },
              { id: "c", text: "Talks a lot" },
              { id: "d", text: "Very quiet" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Context clue: contrast", statement: "'Unlike' signals an opposite — talkative contrasts with quiet." }],
            steps: [{ reasoning: "Criterion A (Analysing): unlike 'quiet' means the opposite — talks a lot, (c).", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** Talks a lot",
          },
        },
        {
          id: "mll1-u2-context-clues-q12",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Old Bridge",
            author: "Written for Akademik Space",
            text: "The bridge was decrepit — its wooden planks rotten, its ropes frayed to threads.",
          },
          stem: "Work out what 'decrepit' means and explain which clue helped most.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Context clue: explanation", statement: "The dash + description defines the word before it." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'decrepit' means old and falling apart.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): clue — 'rotten' planks and 'frayed' ropes show decay and damage.", evidence: "wooden planks rotten ... ropes frayed to threads", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the explanation after the dash acts like a built-in definition.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Decrepit = old and falling apart. Clue: rotten planks and frayed ropes after the dash.",
          },
        },
        {
          id: "mll1-u2-context-clues-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Work out the meaning of 'enormous' in: 'The enormous whale was bigger than our boat.'", marks: 2 },
            { label: "b", prompt: "Work out the meaning of 'cautious' in: 'Be cautious on the icy path — it is easy to slip.'", marks: 2 },
            { label: "c", prompt: "Explain which type of clue helped you in each case.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Context clues", statement: "Comparison and cause/effect clues reveal word meanings." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'enormous' means very big.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): clue — 'bigger than our boat' compares its size.", evidence: "bigger than our boat", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'cautious' means careful.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): clue — 'icy path ... easy to slip' warns of danger, so be careful.", evidence: "icy path ... easy to slip", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): (a) uses comparison; (b) uses cause/effect (danger → carefulness).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) enormous = very big (comparison clue). (b) cautious = careful (cause/effect clue).",
          },
        },
        {
          id: "mll1-u2-context-clues-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 'The puppy was tiny — no bigger than my hand', what does 'tiny' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Very small" },
              { id: "b", text: "Very loud" },
              { id: "c", text: "Very large" },
              { id: "d", text: "Very fast" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Context clues", statement: "Comparisons reveal word meanings." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'no bigger than my hand' means very small — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** Very small",
          },
        },
        {
          id: "mll1-u2-context-clues-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "In 'Our neighbour is so generous — she shares her vegetables with everyone', what does 'generous' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Very strict" },
              { id: "b", text: "Kind and giving" },
              { id: "c", text: "Very old" },
              { id: "d", text: "Very quiet" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Context clues", statement: "Examples after a word show what it means." }],
            steps: [{ reasoning: "Criterion A (Analysing): sharing vegetables with everyone shows she is kind and giving — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Kind and giving",
          },
        },
        {
          id: "mll1-u2-context-clues-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Work out the meaning of 'fragile' in: 'The vase was fragile, so we wrapped it in three layers of newspaper.'", marks: 2 },
            { label: "b", prompt: "Work out the meaning of 'noisy' in: 'The library was silent, unlike the noisy cafeteria.'", marks: 2 },
            { label: "c", prompt: "Name the type of clue that helped in each part.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Context clues", statement: "Cause/effect and contrast clues reveal meanings." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): 'fragile' means easily broken.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): clue — wrapping in newspaper 'so' it doesn't break shows it is delicate.", evidence: "wrapped it in three layers of newspaper", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'noisy' means loud / full of noise.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): clue — 'unlike the silent library' shows the cafeteria is loud.", evidence: "unlike the noisy cafeteria", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): (a) cause/effect (care taken → delicate); (b) contrast ('unlike').", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) fragile = easily broken (cause/effect). (b) noisy = loud (contrast).",
          },
        },
      ],
    },
  ],
};
