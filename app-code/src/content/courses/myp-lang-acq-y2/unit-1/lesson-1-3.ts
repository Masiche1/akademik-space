import type { Lesson } from "../../../types.ts";

export const lesson13: Lesson = {
  id: "mla2-u1-lesson-1-3",
  code: "1-3",
  title: "Reading for Inference and Understanding Context",
  goal: "I CAN infer meaning that is not stated directly and use context clues to understand unfamiliar words in reading and listening.",
  standards: [
    "MYP Language Acquisition",
    "Criterion B: Reading",
    "Criterion A: Listening",
    "Language conventions and accuracy",
  ],
  vocabulary: [
    { term: "Inference", definition: "Understanding something that is not said directly, using clues." },
    { term: "Context clue", definition: "Words around an unknown word that help you guess its meaning." },
    { term: "Implied", definition: "Suggested but not stated directly." },
    { term: "Cognate", definition: "A word similar to one in your own language, like 'animal' or 'music'." },
    { term: "Guess from context", definition: "To estimate meaning from the situation and surrounding words." },
  ],
  concepts: [
    {
      id: "mla2-u1-inference-reading",
      title: "Inferring meaning when words are missing",
      skill: "Use context clues, cognates and common sense to understand texts with unfamiliar words.",
      lesson: {
        sections: [
          {
            heading: "You do not need every word",
            body: "At MYP 2 you will meet texts with some unknown words — that is normal. **Do not stop and translate.** Instead: read the whole sentence, look at the words around the unknown one, and ask 'What word would make sense here?' Often you can guess correctly without a dictionary.",
          },
          {
            heading: "Types of context clues",
            body: "Look for: **definition clues** ('A telescope is an instrument for looking at stars'), **example clues** ('Sports like football, tennis and swimming'), **contrast clues** ('She was happy, not sad'), and **cognates** — words similar to your language ('music', 'animal', 'hotel'). Also use common sense: if it is raining, someone might be 'carrying an umbrella'.",
          },
          {
            heading: "Inference: reading between the lines",
            body: "Sometimes the meaning is **implied**, not stated. If a text says 'Tom grabbed his coat and ran outside', you can infer it is raining or cold — even if the text never says 'rain'. Look at actions and feelings to work out what the writer means.",
          },
        ],
        keyFormulas: [
          { name: "Clue types", statement: "Definition + example + contrast + cognate + common sense" },
        ],
        workedExample: {
          problem: "Sentence: 'The arid desert had almost no rain for years.' What does 'arid' probably mean?",
          solution: "Very dry — the context clue 'no rain for years' tells you 'arid' means dry.",
        },
      },
      questions: [
        {
          id: "mla2-u1-inference-reading-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an 'inference'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Translating every word into your language" },
              { id: "b", text: "A word copied exactly from the text" },
              { id: "c", text: "The title of the text" },
              { id: "d", text: "Understanding something not stated directly, using clues" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inference", statement: "Working out meaning that is implied rather than stated." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — inference = reading between the lines using clues.", working: "understanding something not stated", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Understanding something not stated directly, using clues",
            commonErrors: ["Confusing inference with direct copying."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u1-inference-reading-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Lost Kitten",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Emma's kitten was nowhere to be found. She looked under the bed, behind the sofa and in the garden, but there was no sign of it. She felt very anxious and could not concentrate on her homework.",
          },
          stem: "The word 'anxious' is new. Use the context to guess its meaning, and explain your clue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Context clues", statement: "Clues like 'could not concentrate' and the search show 'anxious' = worried/nervous." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — guesses 'anxious' means worried/nervous/upset.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — cites clue: she searched everywhere and could not concentrate.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — explanation links clue to meaning clearly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Anxious ≈ worried/nervous — clue: she searched everywhere and could not concentrate.",
            commonErrors: ["Guessing without citing any clue."],
            examinerNote: "Guess + clue both required.",
          },
        },
        {
          id: "mla2-u1-inference-reading-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Dark Cloud",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "A huge black cloud covered the sky. The wind picked up and the trees started to move. People on the beach picked up their towels and bags quickly.",
          },
          stem: "The text never says 'storm' or 'rain'. What do you think is about to happen, and which words tell you?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inference from description", statement: "Actions and descriptions imply events: dark cloud + wind + people leaving = storm coming." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — infers a storm or heavy rain is coming.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — cites 'huge black cloud' as a clue.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — cites 'wind picked up' / 'people picked up towels and bags quickly' as behaviour clues.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — inference stated confidently and clearly.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "A storm/rain is coming — clues: black cloud, rising wind, people leaving the beach.",
            commonErrors: ["Saying only 'bad weather' without specific inference."],
            examinerNote: "Must cite at least two clues.",
          },
        },
        {
          id: "mla2-u1-inference-reading-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "Grandpa's Old Watch",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Grandpa gave me his old watch on my birthday. It is very heavy and the glass is scratched, but it still works perfectly. 'This watch is fifty years old,' he said. 'I wore it when I was your age.' I looked at it carefully. It must have seen many adventures.",
          },
          stem: "Read the text and complete the tasks.",
          parts: [
            { label: "a", prompt: "What does 'scratched' probably mean? Use a context clue.", marks: 2 },
            { label: "b", prompt: "How old is the watch, and how do you know?", marks: 1 },
            { label: "c", prompt: "What does the writer mean by 'It must have seen many adventures'?", marks: 2 },
            { label: "d", prompt: "Write two sentences explaining why the watch is special to the writer, using evidence from the text.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary in context + inference", statement: "Unknown words are guessed from clues; implied meanings come from context." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'scratched' ≈ marked/damaged; clue: 'heavy', 'old', 'glass'.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B: Reading — clue is cited correctly.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — fifty years old; Grandpa says 'This watch is fifty years old.'", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — the watch has been used for a long time / has a long history.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — inference explained with reference to age and use.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion C: Speaking — two sentences give reasons: birthday gift, Grandpa's history, still works.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — evidence from text used accurately.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — correct grammar and punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) scratched ≈ marked/damaged (old, heavy clues) (b) fifty years — Grandpa says so (c) it has a long history (d) two evidence-based sentences.",
            commonErrors: ["Translating 'scratched' incorrectly.", "Writing about watches in general, not this text."],
            examinerNote: "(c) must be an inference, not a literal restatement.",
          },
        },
        {
          id: "mla2-u1-inference-reading-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'context clue'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The title of the text" },
              { id: "b", text: "A hint in the surrounding words that helps you guess meaning" },
              { id: "c", text: "A picture next to a word" },
              { id: "d", text: "A dictionary definition" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Context clue", statement: "Words around an unknown word that help you guess its meaning." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — clues come from the surrounding words.", working: "surrounding words", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A hint in the surrounding words that helps you guess meaning",
            commonErrors: ["Confusing a clue with a dictionary definition."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mla2-u1-inference-reading-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the sentence 'A telescope is an instrument for looking at stars', which kind of context clue helps you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Example clue" },
              { id: "b", text: "Cognate clue" },
              { id: "c", text: "Definition clue" },
              { id: "d", text: "Contrast clue" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Clue types", statement: "Definition clues explain the word directly in the sentence." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'is an instrument for looking at stars' defines 'telescope'.", working: "definition clue", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Definition clue",
            commonErrors: ["Calling it an example — no example is given."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mla2-u1-inference-reading-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these words is probably a cognate for a speaker of Spanish or French?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "music" },
              { id: "b", text: "knight" },
              { id: "c", text: "cough" },
              { id: "d", text: "though" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cognate", statement: "Cognates look and sound similar in related languages, like 'music'." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'music' is similar to música/musique; the others are not.", working: "music", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** music",
            commonErrors: ["Choosing words that are spelled differently in the other language."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u1-inference-reading-q8",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "The Old Bridge",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "The ancient stone bridge was built over two hundred years ago. It still stands across the river, and thousands of people cross it every day.",
          },
          stem: "The word 'ancient' may be new. Guess its meaning using the context, and name the clue you used.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Context clues", statement: "The clue 'two hundred years ago' shows 'ancient' means very old." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — guesses 'ancient' means very old.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — cites the clue 'two hundred years ago'.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — links clue to meaning clearly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Ancient ≈ very old — clue: 'built over two hundred years ago'.",
            commonErrors: ["Guessing without citing the time clue."],
            examinerNote: "Guess + clue both required.",
          },
        },
        {
          id: "mla2-u1-inference-reading-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Long Walk",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "The hikers walked for six hours through the forest. They carried twelve litres of water and stopped three times to rest. At the end of the day, they reached the mountain hut.",
          },
          stem: "Read the text and give two numbers: (a) how many hours they walked (b) how many times they stopped.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "Quantities help you follow a text even when some words are unknown." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'walked for six hours'.", working: "6", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'stopped three times'.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 6 (b) 3",
            commonErrors: ["Answering 12 — that is litres of water, not asked."],
            examinerNote: "Accept 6 and 3.",
          },
        },
        {
          id: "mla2-u1-inference-reading-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "The Empty House",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Every window in the house was dark. The gate was open and the dog was barking next door. A cold wind moved through the garden. Inside, a chair lay on its side and papers were scattered on the floor.",
          },
          stem: "The text never says 'burglary' or 'break-in'. What do you think has happened? Explain using at least two clues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inference from description", statement: "Actions and descriptions imply events: open gate, dark windows and mess suggest a break-in." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — infers someone may have broken in / the house may be empty.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — cites clue: 'gate was open', 'windows dark'.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — cites clue: 'chair on its side', 'papers scattered' = signs of disturbance.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — inference is stated clearly and confidently.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "A break-in or empty house — clues: open gate, dark windows, disturbed furniture and papers.",
            commonErrors: ["Saying only 'something bad' without specific inference."],
            examinerNote: "Must cite at least two clues.",
          },
        },
        {
          id: "mla2-u1-inference-reading-q11",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "The School Play Disaster",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "The school play was supposed to start at seven o'clock. At half past six, the main actor was not there. His costume was in his bag, but he had not arrived. His best friend said he had gone to the wrong hall — the sports hall, not the main hall. Everyone rushed to find him.",
          },
          stem: "Read the text and complete the tasks.",
          parts: [
            { label: "a", prompt: "When was the play supposed to start?", marks: 1 },
            { label: "b", prompt: "Where did the actor actually go? How do you know?", marks: 2 },
            { label: "c", prompt: "What does 'supposed to' mean in this text?", marks: 1 },
            { label: "d", prompt: "Explain what the people did next and why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inference and vocabulary in context", statement: "Phrases like 'supposed to' and events are understood through context." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'seven o'clock'.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — the sports hall, not the main hall.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — 'his best friend said he had gone to the wrong hall'.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — 'supposed to' = planned / expected to.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B: Reading — they rushed to find him.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B: Reading — because the play was about to start.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) seven o'clock (b) sports hall — friend said so (c) planned/expected (d) rushed to find him so the play could start.",
            commonErrors: ["Saying the actor missed the play — he went to the wrong place, not absent."],
            examinerNote: "(b) needs the evidence 'his best friend said'.",
          },
        },
        {
          id: "mla2-u1-inference-reading-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You meet a word you do not know while reading. What is the BEST first step?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stop and look up every word in a dictionary" },
              { id: "b", text: "Translate the whole text word by word" },
              { id: "c", text: "Keep reading and guess the meaning from the context" },
              { id: "d", text: "Skip the whole text" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading strategy", statement: "Keep reading and use context clues before reaching for a dictionary." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — surrounding words usually give enough meaning to continue.", working: "guess from context", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Keep reading and guess the meaning from the context",
            commonErrors: ["Stopping to translate — this slows reading and breaks understanding."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u1-inference-reading-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Birthday Cake",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Mum spent two hours baking a chocolate cake for Tom's birthday. The cake had twelve candles on top — one for each year of Tom's life. The family sang 'Happy Birthday' and Tom made a wish.",
          },
          stem: "Read the text and give two numbers: (a) how many hours Mum spent baking (b) how many candles were on the cake.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 12 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "Quantities help you follow a text even when some words are unknown." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'two hours baking'.", working: "2", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'twelve candles'.", working: "12", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 2 (b) 12",
            commonErrors: ["Missing that twelve candles = Tom's age."],
            examinerNote: "Accept 2 and 12.",
          },
        },
        {
          id: "mla2-u1-inference-reading-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the sentence 'She was excited, not nervous, before the match', what kind of clue does 'not nervous' give?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Example clue" },
              { id: "b", text: "Contrast clue" },
              { id: "c", text: "Cognate clue" },
              { id: "d", text: "Definition clue" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Clue types", statement: "Contrast clues use 'not' or opposites to narrow meaning." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'not nervous' contrasts with 'excited'.", working: "contrast clue", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Contrast clue",
            commonErrors: ["Calling it a definition — no meaning is explained."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u1-inference-reading-q15",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "The Rainy Picnic",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "We planned a picnic for four people, but the rain meant we ate sandwiches inside instead. It was still fun — we played cards for two hours.",
          },
          stem: "How many people were planned for the picnic? Give the number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "Quantities help you follow a text even when some words are unknown." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'for four people'.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering 2 — that is hours of cards, not people."],
            examinerNote: "Accept 4 only.",
          },
        },
        {
          id: "mla2-u1-inference-reading-q16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "The Mysterious Noise",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "It was nearly midnight when Tom heard a strange noise outside his window. He pulled back the curtains slowly. In the garden stood a tall figure wearing a black coat and a wide hat. The figure did not move. Tom's heart beat faster. Then the figure reached up — and turned on the garden light.",
          },
          stem: "Read the text and complete the tasks.",
          parts: [
            { label: "a", prompt: "What is 'strange' probably NOT meaning here? Use a context clue.", marks: 2 },
            { label: "b", prompt: "What do you think the 'tall figure' is? Give your inference.", marks: 2 },
            { label: "c", prompt: "What does 'his heart beat faster' tell you about Tom's feelings?", marks: 2 },
            { label: "d", prompt: "Write two sentences explaining what happens at the end and what it might mean.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inference and vocabulary in context", statement: "Unknown words and implied events are understood through context clues." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — 'strange' ≈ unusual/odd; clue: a noise at midnight.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B: Reading — clue correctly cited.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — a sensible inference (e.g. a neighbour, a stranger, someone checking the garden).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — inference is reasonable and supported.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — Tom feels scared/nervous — action shows it.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — linked to the midnight noise and figure.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion C: Speaking — ending described accurately (figure turns on light).", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — plausible explanation written clearly.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) strange ≈ unusual (noise at midnight) (b) reasonable inference (c) scared/nervous (d) two accurate sentences about the ending.",
            commonErrors: ["Saying 'strange' means 'beautiful'.", "Inference with no link to the text."],
            examinerNote: "Inferences must be reasonable, not wild guesses.",
          },
        },
      ],
    },
    {
      id: "mla2-u1-context-listening",
      title: "Using context in listening and reading",
      skill: "Combine situation, cognates and word families to understand texts even when some words are unknown.",
      lesson: {
        sections: [
          {
            heading: "Context is your best friend",
            body: "Before you read or listen, look at the **title, pictures and situation** — they tell you the topic. If you are reading about a 'football match', words like 'goal', 'team' and 'score' are easy to guess. Your brain already knows a lot before you start.",
          },
          {
            heading: "Cognates and word families",
            body: "**Cognates** are words similar to your language: 'music', 'animal', 'hotel', 'family'. **Word families** help too: if you know 'teach', you can guess 'teacher' and 'teaching'. Look for parts of words you already know — 'unhappy' = not happy, 'replay' = play again.",
          },
          {
            heading: "Predict, then check",
            body: "The best readers **predict** before checking. Read a sentence and guess the missing word: 'The children were ___ because it was their birthday.' Most people guess 'happy' or 'excited' — correct! Prediction makes reading faster and more confident. Then check: was your guess right?",
          },
        ],
        keyFormulas: [
          { name: "Comprehension toolkit", statement: "Title/pictures → predict → cognates/word families → check" },
        ],
        workedExample: {
          problem: "Title: 'My New Puppy'. First sentence: 'Yesterday, I got a small dog.' What words do you predict will appear?",
          solution: "Words like puppy/dog, cute, play, house, walk — the title and topic prepare you for them.",
        },
      },
      questions: [
        {
          id: "mla2-u1-context-listening-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a cognate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A word you cannot pronounce" },
              { id: "b", text: "A word that is the same in every language" },
              { id: "c", text: "A word similar to one in your own language" },
              { id: "d", text: "A very long English word" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cognate", statement: "A word similar in form/meaning to a word in another language." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — cognates help learners recognise words like 'music'/'animal'.", working: "similar word in own language", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** A word similar to one in your own language",
            commonErrors: ["Thinking cognates are identical words."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u1-context-listening-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read this sentence: 'The teacher asked the students to be quiet because the baby was sleeping.' Use context to guess two words a beginner might not know: 'quiet' and 'students'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Prediction from context", statement: "The situation (baby sleeping) suggests 'quiet' = not making noise; 'students' = learners in class." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'quiet' ≈ silent/not making noise; clue: baby sleeping.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'students' ≈ pupils/learners; clue: teacher in a class.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — both guesses use context, not translation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "quiet ≈ not making noise; students ≈ pupils/learners.",
            commonErrors: ["Guessing randomly without using the situation."],
            examinerNote: "Each guess needs a context-based reason.",
          },
        },
        {
          id: "mla2-u1-context-listening-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "A Message from Alex",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Hi! Are you coming to my birthday party on Saturday? It starts at three o'clock at my house. My mum is making a chocolate cake and we're going to play games in the garden. Can you come? Please reply soon! — Alex",
          },
          stem: "Even if you do not know every word, you can understand this message. Explain three context clues that help you.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Context clues in messages", statement: "Greetings, details (time/place) and requests reveal the message's purpose." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'birthday party' + 'chocolate cake' + 'games' show the topic is a party.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'Saturday', 'three o'clock', 'my house' give the when/where details.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'Can you come?' + 'Please reply' show it is an invitation needing an answer.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — explanation is clear and organised.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Topic clues (birthday/cake/games), details (Saturday, 3 o'clock, house), purpose (invitation asking for reply).",
            commonErrors: ["Listing words without explaining how they help."],
            examinerNote: "Three distinct clue types needed.",
          },
        },
        {
          id: "mla2-u1-context-listening-q4",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "School Trip Notice",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Year 6 will visit the Science Museum on Thursday 14 June. The trip costs £8 per student and includes lunch. Students should bring a packed lunch if they prefer, a water bottle and a coat — the weather forecast says rain. Permission slips must be returned by Friday 8 June. Students without slips cannot go on the trip.",
          },
          stem: "Read the notice and complete the tasks.",
          parts: [
            { label: "a", prompt: "What is the purpose of this notice?", marks: 1 },
            { label: "b", prompt: "List three things students should bring.", marks: 2 },
            { label: "c", prompt: "What is the deadline for permission slips, and what happens without one?", marks: 2 },
            { label: "d", prompt: "Write a short note (3 sentences) reminding a classmate about this trip, using the correct details.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Notice comprehension + production", statement: "Notices give purpose, details and rules; a reminder note repeats key facts briefly." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — to inform students about the Science Museum trip and its requirements.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — water bottle, coat, (packed lunch optional).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — at least two correct items listed.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — Friday 8 June; cannot go without a slip.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — both deadline and consequence correct.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion C: Speaking — reminder includes trip, date and deadline.", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — correct details (14 June, 8 June) and grammar.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — brief note style with correct punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) inform about trip + requirements (b) water bottle, coat, packed lunch (c) Friday 8 June; cannot go (d) correct reminder note.",
            commonErrors: ["Confusing the two dates (trip vs slip deadline).", "Note missing key details."],
            examinerNote: "Dates must be accurate in part (d).",
          },
        },
        {
          id: "mla2-u1-context-listening-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Before reading a text, what should you look at first to help you understand it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The title, pictures and situation" },
              { id: "b", text: "The last word only" },
              { id: "c", text: "The page number" },
              { id: "d", text: "Nothing — just start reading" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Pre-reading", statement: "Title, pictures and situation tell you the topic before you read." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — title/pictures activate background knowledge.", working: "title + pictures", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The title, pictures and situation",
            commonErrors: ["Starting to read without checking the title."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u1-context-listening-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "You know the word 'teach'. Which other word can you probably guess from the same word family?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "kitchen" },
              { id: "b", text: "window" },
              { id: "c", text: "teacher" },
              { id: "d", text: "orange" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word families", statement: "Words in the same family share a root: teach → teacher." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'teacher' shares the root 'teach'.", working: "teacher", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** teacher",
            commonErrors: ["Choosing a word with no shared letters/root."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mla2-u1-context-listening-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A text is titled 'My Birthday Surprise' and mentions cake, balloons and friends. What can you predict the text is about?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A school exam" },
              { id: "b", text: "A football match" },
              { id: "c", text: "A cooking recipe" },
              { id: "d", text: "A birthday party" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Prediction", statement: "Title and details let you predict the topic before reading." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — cake, balloons and 'birthday' predict a party.", working: "a birthday party", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** A birthday party",
            commonErrors: ["Ignoring the title and guessing randomly."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u1-context-listening-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read this sentence: 'The children were exhausted after the long walk home, so they went straight to bed.' Use context to guess the meaning of 'exhausted' and explain your clue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Prediction from context", statement: "The result clause ('went straight to bed') reveals 'exhausted' = very tired." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — guesses 'exhausted' means very tired.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — cites clue: 'long walk' and 'went straight to bed'.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — links clue to meaning clearly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Exhausted ≈ very tired — clue: long walk + went straight to bed.",
            commonErrors: ["Guessing 'happy' — the context shows tiredness."],
            examinerNote: "Guess + clue both required.",
          },
        },
        {
          id: "mla2-u1-context-listening-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Football Trip",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Our team travelled two hours by bus to the match. We arrived at three o'clock and the match started at half past three. Our team scored two goals and won three–one.",
          },
          stem: "Read the text and give two numbers: (a) how many hours the bus journey took (b) how many goals our team scored.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "Quantities help you follow a text even when some words are unknown." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'two hours by bus'.", working: "2", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'scored two goals'.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 2 (b) 2",
            commonErrors: ["Answering 3 for (b) — that is the match start time / final score includes opponent's goal."],
            examinerNote: "Accept 2 and 2.",
          },
        },
        {
          id: "mla2-u1-context-listening-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Grandma's Kitchen",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Every Saturday, Grandma opens her kitchen to the whole family. The table is always full — there is bread, cheese, fruit and her famous cake. Uncles, aunts and cousins all squeeze in. Nobody leaves hungry.",
          },
          stem: "Even if you do not know every word, you can understand this text. Explain three context clues that help you.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Context clues", statement: "Topic words (kitchen, food, family) and details reveal the text's meaning." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'kitchen', 'table full', food words show it is about food/family gathering.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'uncles, aunts and cousins' show it is a family event.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'Nobody leaves hungry' tells you everyone eats well.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — explanation is clear and organised.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Topic clues (kitchen/food), family members listed, and 'nobody leaves hungry' showing generosity.",
            commonErrors: ["Listing words without explaining how they help."],
            examinerNote: "Three distinct clue types needed.",
          },
        },
        {
          id: "mla2-u1-context-listening-q11",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Lost in the City",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Tourists often get lost in big cities, but there are ways to find your way. First, look for a map or ask a police officer — they usually speak English. Second, use the names of streets and shops as landmarks. Third, remember which way the sun rises — east — so you always know your direction. With these tips, getting lost is less scary.",
          },
          stem: "Read the text and complete the tasks.",
          parts: [
            { label: "a", prompt: "What is the main topic of this text?", marks: 1 },
            { label: "b", prompt: "List two ways to find your way mentioned in the text.", marks: 2 },
            { label: "c", prompt: "What does the writer say about the sun and direction?", marks: 1 },
            { label: "d", prompt: "Predict two words that might appear in the next paragraph about this topic.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Topic prediction and detail extraction", statement: "Topic words predict content; details support the main idea." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — how to find your way / not getting lost in cities.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — ask police officer / use map; use street and shop names.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — two distinct methods given.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — sun rises in the east, helps you know direction.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B: Reading — predicts relevant words (e.g. directions, north, south, compass, map).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion B: Reading — predictions are contextually appropriate.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) finding your way in cities (b) ask police / use landmarks (c) sun rises in east = direction (d) two plausible topic words.",
            commonErrors: ["Predicting unrelated words.", "Missing that 'landmarks' means helpful signs."],
            examinerNote: "(d) must be plausible predictions, not random words.",
          },
        },
        {
          id: "mla2-u1-context-listening-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A text about 'How to Ride a Bike' mentions 'helmet', 'pedals' and 'wheels'. What is the topic?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Swimming" },
              { id: "b", text: "Cooking" },
              { id: "c", text: "Singing" },
              { id: "d", text: "Cycling" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Topic from vocabulary", statement: "Key nouns in a text reveal its topic." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — helmet, pedals and wheels belong to bikes.", working: "cycling", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Cycling",
            commonErrors: ["Ignoring the vocabulary clues."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u1-context-listening-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Class Pet",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Our class has a new pet — a rabbit called Snowball. We feed him twice a day and clean his cage every Friday. Snowball is very friendly and lets everyone stroke him.",
          },
          stem: "Read the text and give two numbers: (a) how many times a day they feed Snowball (b) on which day they clean his cage.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "Quantities help you follow a text even when some words are unknown." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'twice a day' = 2 times.", working: "2", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'every Friday' → day 5 if Mon=1...Sun=7; Friday = 5.", working: "5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 2 (b) 5",
            commonErrors: ["Answering 'Friday' for (b) — a number is needed.", "Answering 1 for (a) — 'twice' means two."],
            examinerNote: "Accept 2 and 5 (Friday as 5th day of the school week).",
          },
        },
        {
          id: "mla2-u1-context-listening-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "If you know the word 'happy', which word can you probably understand from the same word family?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "pencil" },
              { id: "b", text: "bridge" },
              { id: "c", text: "kitchen" },
              { id: "d", text: "unhappy" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word families", statement: "Prefixes like un- change meaning: happy → unhappy = not happy." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'unhappy' contains 'happy' with prefix un- = not.", working: "unhappy", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** unhappy",
            commonErrors: ["Choosing a word with no shared root."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "mla2-u1-context-listening-q15",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Weekend Plans",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "On Saturday I am going to visit my grandparents. They live in a small village near the sea. We will walk on the beach and have lunch together.",
          },
          stem: "On which day is the writer going to visit their grandparents? Give the day number (Monday=1 ... Sunday=7).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "Quantities help you follow a text even when some words are unknown." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'On Saturday' → Saturday = day 6.", working: "6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "6",
            commonErrors: ["Answering 'Saturday' — a number is needed."],
            examinerNote: "Accept 6 (Saturday).",
          },
        },
        {
          id: "mla2-u1-context-listening-q16",
          difficulty: "challenge",
          totalMarks: 8,
          extract: {
            title: "The Mysterious Package",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "A package arrived at our house on Tuesday with no name on it. Mum opened it carefully — inside was a heavy metal box wrapped in cloth. It had a small key and a note saying 'Open me on your birthday.' It is not my birthday until December.",
          },
          stem: "Read the text and complete the tasks.",
          parts: [
            { label: "a", prompt: "What two clues tell you the package is special?", marks: 2 },
            { label: "b", prompt: "What does 'no name on it' suggest about the package?", marks: 1 },
            { label: "c", prompt: "What will probably happen in December? Use an inference.", marks: 2 },
            { label: "d", prompt: "Write two sentences predicting what might be inside the box.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Inference and prediction", statement: "Details and notes imply events; predictions must be reasonable." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B: Reading — heavy metal box + note 'open me on your birthday'.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B: Reading — two distinct clues given.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B: Reading — it is a secret/surprise gift — sent without a name.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — they will open the box on the birthday.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion B: Reading — linked to the note and December birthday.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Criterion C: Speaking — two plausible contents (e.g. a gift, a letter, jewellery).", marks: 1, markCode: "C" },
              { part: "d", reasoning: "Criterion D: Writing — predictions are reasonable and clearly written.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion B: Reading — predictions connect to the box/key/birthday clues.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) metal box + birthday note (b) a secret/surprise (c) box opened on birthday (d) two plausible predictions.",
            commonErrors: ["Predictions unrelated to the clues.", "Saying 'nothing will happen' — the note clearly implies an event."],
            examinerNote: "Predictions must be reasonable and text-linked.",
          },
        },
      ],
    },
  ],
};
