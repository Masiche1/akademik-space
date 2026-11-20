import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "mla2-u3-lesson-3-2",
  code: "3-2",
  title: "Spelling, Punctuation and Proofreading",
  goal: "I CAN spell common English words correctly, punctuate sentences properly and proofread my own writing for errors.",
  standards: [
    "MYP Language Acquisition",
    "Criterion D: Writing",
    "Criterion C: Speaking",
    "Language conventions and accuracy",
  ],
  vocabulary: [
    { term: "Proofread", definition: "To check your writing carefully for mistakes after you finish." },
    { term: "Spelling", definition: "The correct arrangement of letters in a word." },
    { term: "Punctuation", definition: "Marks like full stops, commas and question marks that organise sentences." },
    { term: "Homophone", definition: "Words that sound the same but have different meanings: their/there/they're." },
    { term: "Capital letter", definition: "The large form of a letter, used at sentence starts and for names." },
  ],
  concepts: [
    {
      id: "mla2-u3-spelling-punctuation",
      title: "Spelling rules and punctuation basics",
      skill: "Apply common spelling rules and punctuation marks correctly in writing.",
      lesson: {
        sections: [
          {
            heading: "Spelling patterns that help",
            body: "English spelling has patterns: **-i before e** (believe, receive), **double consonant** before -ed/-ing (stop → stopped, run → running), **y → i** before -ed/-es (study → studied, baby → babies). Learn these patterns — they fix many spelling errors. Also learn the most common irregular spellings by heart: 'because', 'friend', 'people', 'beautiful'.",
          },
          {
            heading: "Punctuation essentials",
            body: "Every sentence needs a **capital letter** at the start and a **full stop** (.) at the end. **Question marks** (?) end questions, **exclamation marks** (!) show strong feeling. Use **commas** (,) to separate items in a list or after an opening phrase: 'On Saturday, I played football.' Apostrophes show possession or contractions: 'Tom's bag', 'don't'.",
          },
          {
            heading: "Common homophone traps",
            body: "These words sound the same but are different: **their** (belonging to them), **there** (place), **they're** (they are); **your** (belonging to you), **you're** (you are); **its** (belonging to it), **it's** (it is). Check these words carefully — they are the most common writing errors.",
          },
        ],
        keyFormulas: [
          { name: "Spelling rules", statement: "i before e; double consonant; y→i before -ed/-es" },
          { name: "Punctuation", statement: "Capital start; . ? ! endings; commas in lists; ' for possession/contractions" },
        ],
        workedExample: {
          problem: "Correct this sentence: 'on saturday i playd footbal with my freinds.'",
          solution: "'On Saturday I played football with my friends.' — capital O, 'played' (double l), 'football' spelling, 'friends'.",
        },
      },
      questions: [
        {
          id: "mla2-u3-spelling-punctuation-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence is punctuated correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "where are you going." },
              { id: "b", text: "Where are you going?" },
              { id: "c", text: "Where are you going!" },
              { id: "d", text: "where Are you going?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Question punctuation", statement: "Questions start with a capital and end with a question mark." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — capital W + question mark is correct.", working: "Where are you going?", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Where are you going?",
            commonErrors: ["Missing the question mark or capital."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u3-spelling-punctuation-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Write the correct spelling of the past tense of: study, stop, plan.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Spelling rules for -ed", statement: "y→i before -ed; double consonant after short vowel; otherwise +ed." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'studied' (y→i).", working: "studied", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'stopped' (double p).", working: "stopped", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'planned' (double n).", working: "planned", marks: 1, markCode: "D" },
            ],
            finalAnswer: "studied; stopped; planned",
            commonErrors: ["'studyed', 'stoped', 'planed' — missing spelling rules."],
            examinerNote: "Each correct spelling earns 1 mark.",
          },
        },
        {
          id: "mla2-u3-spelling-punctuation-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Choose the correct word in each sentence and explain the difference: (1) '___ going to the park.' (their/there/they're) (2) 'Is this ___ bag?' (your/you're)",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Homophones", statement: "their = possession; there = place; they're = they are; your = possession; you're = you are." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'They're going to the park' (they are).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'Is this your bag?' (possession).", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — explains 'they're = they are' contraction.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — explains 'your' shows belonging.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "They're (they are); your (belonging).",
            commonErrors: ["Choosing 'their' for 'they are' or 'you're' for possession."],
            examinerNote: "Both choices plus explanations needed.",
          },
        },
        {
          id: "mla2-u3-spelling-punctuation-q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Proofread this paragraph and rewrite it correctly: 'on sunday me and my freind went to the park. we playd football and had a great time. it was funner then last week'",
          parts: [
            { label: "a", prompt: "Rewrite the paragraph with correct spelling and punctuation.", marks: 3 },
            { label: "b", prompt: "List three errors you found and fixed.", marks: 2 },
            { label: "c", prompt: "Explain why 'funner' and 'then' were wrong.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Proofreading", statement: "Spelling rules, punctuation, and correct adjective forms (more fun, than)." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — 'On Sunday my friend and I went to the park.' capitals + 'friend' + word order.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — 'We played football and had a great time. It was more fun than last week.' — 'played', 'more fun', 'than'.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — full stops and capitals throughout.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — three real errors identified (spelling, punctuation, word choice).", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B: Reading — errors correctly diagnosed.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion D: Writing — 'fun' is a long adjective → 'more fun' not 'funner'.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — 'than' for comparison, 'then' for time sequence.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Corrected paragraph: 'On Sunday my friend and I went to the park. We played football and had a great time. It was more fun than last week.' + 3 errors listed + explanations.",
            commonErrors: ["Changing meaning while correcting.", "Missing 'my friend and I' word order."],
            examinerNote: "Corrections must preserve the original meaning.",
          },
        },
        {
          id: "mla2-u3-spelling-punctuation-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct spelling?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "beleive" },
              { id: "b", text: "believe" },
              { id: "c", text: "beleve" },
              { id: "d", text: "beleeve" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Spelling patterns", statement: "Common irregular spellings like 'believe' must be learned." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'believe' is the correct spelling.", working: "believe", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** believe",
            commonErrors: ["'beleive' — the classic i/e swap."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u3-spelling-punctuation-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses the correct end mark?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What a fantastic goal!" },
              { id: "b", text: "What a fantastic goal." },
              { id: "c", text: "What a fantastic goal?" },
              { id: "d", text: "What a fantastic goal," },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "End marks", statement: "Exclamation marks show strong feeling; full stops end statements." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — '!' shows excitement correctly.", working: "What a fantastic goal!", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** What a fantastic goal!",
            commonErrors: ["Using a full stop for an exclamation."],
            examinerNote: "D1 for (a).",
          },
        },
        {
          id: "mla2-u3-spelling-punctuation-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence shows possession correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That is Toms bag." },
              { id: "b", text: "That is Tom's bag." },
              { id: "c", text: "That is Toms' bag." },
              { id: "d", text: "That is the bag of Tom's of." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Apostrophes", statement: "Apostrophe + s shows possession: Tom's bag." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Tom's' is the correct possessive form.", working: "Tom's bag", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** That is Tom's bag.",
            commonErrors: ["Missing the apostrophe."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u3-spelling-punctuation-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Correct the spelling of these two words and use each in a correct sentence: 'freind', 'wensday'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Common misspellings", statement: "'Friend' (i before e) and 'Wednesday' are common spelling traps." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — correct spellings: 'friend' and 'Wednesday'.", working: "friend; Wednesday", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — both used in correct sentences with capitals.", working: "My friend ... on Wednesday.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "friend — e.g. 'My friend is kind.'; Wednesday — e.g. 'We have PE on Wednesday.'",
            commonErrors: ["'freind' keeps the letters swapped."],
            examinerNote: "Both spellings and sentences needed.",
          },
        },
        {
          id: "mla2-u3-spelling-punctuation-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Here are five words: receive, beleive, people, definately, friend. How many are spelled CORRECTLY? Give the number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Common spellings", statement: "receive, people, friend are correct; beleive and definately are wrong." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — correct: receive, people, friend (beleive and definately are wrong) = 3.", working: "3", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — recount confirms the answer.", working: "3", marks: 1, markCode: "D" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting 'beleive' or 'definately' as correct."],
            examinerNote: "Accept 3 (receive, people, friend).",
          },
        },
        {
          id: "mla2-u3-spelling-punctuation-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Choose the correct homophone and explain the difference: (1) '___ dog is very cute.' (their/there/they're) (2) '___ going to love this.' (your/you're)",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Homophones", statement: "their = possession; there = place; they're = they are; your = possession; you're = you are." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Their dog' (belonging to them).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'You're going to love this' (you are).", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — explains 'their' shows belonging.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — explains 'you're' = you are.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Their (possession); You're (you are).",
            commonErrors: ["Choosing 'there' for possession or 'your' for 'you are'."],
            examinerNote: "Both choices plus explanations needed.",
          },
        },
        {
          id: "mla2-u3-spelling-punctuation-q11",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Proofread this paragraph and rewrite it correctly: 'on my birthday i got a presant from my aunt. she is gratefull and kind. we had cake and played games all afternoon.'",
          parts: [
            { label: "a", prompt: "Rewrite the paragraph with correct spelling and punctuation.", marks: 3 },
            { label: "b", prompt: "List three errors you found and fixed.", marks: 2 },
            { label: "c", prompt: "Explain why 'presant' and 'gratefull' were wrong.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Proofreading", statement: "Spelling rules and punctuation must be corrected while preserving meaning." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — 'On my birthday I got a present from my aunt.' — capitals + 'present'.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — 'She is grateful and kind.' — 'grateful' one t.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — full stops and capitals throughout.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — three real errors identified.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B: Reading — errors correctly diagnosed.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion D: Writing — 'present' (gift) and 'grateful' (thankful) are common traps.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Corrected paragraph + three errors listed + explanation of the spelling traps.",
            commonErrors: ["'gratefull' keeps double l — it is 'grateful'.", "Changing the meaning while correcting."],
            examinerNote: "Corrections must preserve the original meaning.",
          },
        },
        {
          id: "mla2-u3-spelling-punctuation-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence uses 'its' or 'it's' correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The dog wagged it's tail." },
              { id: "b", text: "The dog wagged its tail." },
              { id: "c", text: "Its raining today." },
              { id: "d", text: "The cat is happy. Its' very cute." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "its vs it's", statement: "'Its' = belonging to it; 'it's' = it is." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'its tail' shows possession, no apostrophe.", working: "its tail", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** The dog wagged its tail.",
            commonErrors: ["Using 'it's' (it is) for possession."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u3-spelling-punctuation-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Sports Day Rules",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Sports Day is on Friday 20 May. Students must wear PE kit. Races start at nine o'clock. There are six races in total. Parents can watch from the stands.",
          },
          stem: "Read the notice and give two numbers: (a) the date number of the month (b) how many races there are.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20 },
              { label: "b", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in notices", statement: "Dates and counts are key details to locate accurately." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — '20 May'.", working: "20", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'six races'.", working: "6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 20 (b) 6",
            commonErrors: ["Answering 9 — that is start time, not races."],
            examinerNote: "Accept 20 and 6.",
          },
        },
        {
          id: "mla2-u3-spelling-punctuation-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence uses commas correctly in a list?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I bought apples oranges and bananas." },
              { id: "b", text: "I bought apples, oranges and bananas." },
              { id: "c", text: "I bought, apples oranges and bananas." },
              { id: "d", text: "I bought apples oranges, and bananas." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Commas in lists", statement: "Commas separate items in a list." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — commas between list items are correct.", working: "apples, oranges and bananas", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** I bought apples, oranges and bananas.",
            commonErrors: ["Missing commas or comma in wrong place."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u3-spelling-punctuation-q15",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "A Note",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Meet me at the library at three o'clock. Bring your English book and a pen. Do not be late!",
          },
          stem: "How many sentences are in this note? Give the number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sentence counting", statement: "Each full stop or end mark signals a new sentence." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — three sentences end with . . !", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting clauses as sentences."],
            examinerNote: "Accept 3 only.",
          },
        },
        {
          id: "mla2-u3-spelling-punctuation-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a short note to a classmate about a change to today's lesson, then check it carefully.",
          parts: [
            { label: "a", prompt: "Write three sentences with the change, the time and what to bring.", marks: 2 },
            { label: "b", prompt: "Use a capital at each start and the correct end mark (including one exclamation if needed).", marks: 2 },
            { label: "c", prompt: "Check spelling of three common trap words (because, friend, Wednesday, etc.).", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Note writing", statement: "Clear sentences + capitals + end marks + correct spelling." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — three clear sentences covering all details.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct grammar.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — capitals at sentence starts.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — correct end marks including !.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — three trap words spelled correctly.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — note is clear and readable.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion D: Writing — final version error-free.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Three-sentence note + capitals/end marks + correct trap-word spelling.",
            commonErrors: ["'becuase'/'freind' spelling errors.", "Missing capitals."],
            examinerNote: "Note must be genuinely useful and error-free.",
          },
        },
      ],
    },
    {
      id: "mla2-u3-proofreading",
      title: "Proofreading strategies",
      skill: "Use systematic strategies to find and fix errors in your own writing.",
      lesson: {
        sections: [
          {
            heading: "Why proofreading matters",
            body: "Even good ideas lose marks when spelling, punctuation and grammar have errors. **Proofreading** means checking your work carefully after writing — it is a skill, not just a chore. At MYP level, accurate language is one of the assessment criteria, so 5 minutes of checking can make a big difference.",
          },
          {
            heading: "A four-step proofreading routine",
            body: "Use this routine: (1) **Read aloud** — your ear catches errors your eye misses ('I goes' sounds wrong). (2) **Check sentences** — capital at start, full stop at end. (3) **Check verbs** — tense, -s for he/she/it, did + base form. (4) **Check spelling** — especially homophones (their/there) and -ed forms.",
          },
          {
            heading: "Reading backwards trick",
            body: "To find spelling errors, try reading your text **backwards** — last word to first. This stops your brain from auto-correcting and makes wrong spellings stand out. It feels strange but works well for catching 'recieve' or 'seperate'.",
          },
        ],
        keyFormulas: [
          { name: "Proofreading routine", statement: "Read aloud → check sentences → check verbs → check spelling" },
        ],
        workedExample: {
          problem: "You wrote: 'She don't like apples.' What is the error and fix?",
          solution: "Error: 'don't' with 'she' — third person needs 'doesn't'. Fix: 'She doesn't like apples.'",
        },
      },
      questions: [
        {
          id: "mla2-u3-proofreading-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of proofreading?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To make the text longer" },
              { id: "b", text: "To find and fix mistakes" },
              { id: "c", text: "To change the topic" },
              { id: "d", text: "To add pictures" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Proofreading", statement: "Checking writing for errors after finishing." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — proofreading = finding and fixing mistakes.", working: "find and fix mistakes", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** To find and fix mistakes",
            commonErrors: ["Thinking proofreading means rewriting the whole text."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u3-proofreading-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "List two steps of the proofreading routine from the lesson.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Proofreading routine", statement: "Read aloud; check sentences; check verbs; check spelling." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — first correct step (e.g. read aloud).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — second correct step (check sentences/verbs/spelling).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. read aloud + check verbs",
            commonErrors: ["Listing content ideas instead of checking steps."],
            examinerNote: "Any two of the four steps accepted.",
          },
        },
        {
          id: "mla2-u3-proofreading-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does reading your writing aloud help you find errors? Explain in two or three sentences.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Auditory proofreading", statement: "Spoken English sounds wrong when grammar/word order is wrong." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — your ear detects unnatural phrasing that eyes skip.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — reading aloud slows you down and reveals missing words/punctuation.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — explanation is clear and accurate.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — relates to real spoken English accuracy.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Reading aloud makes errors 'sound' wrong; your ear catches what your eyes miss.",
            commonErrors: ["Saying only 'it helps' without explaining how."],
            examinerNote: "Must explain the mechanism (sound vs sight).",
          },
        },
        {
          id: "mla2-u3-proofreading-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a short paragraph, then proofread it using the four-step routine.",
          parts: [
            { label: "a", prompt: "Write a 4-sentence paragraph about your weekend (past simple).", marks: 3 },
            { label: "b", prompt: "Apply the routine: read aloud (note 2 issues), check sentences (note 1), check verbs (note 1), check spelling (note 1).", marks: 3 },
            { label: "c", prompt: "Write the final corrected paragraph.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Proofreading process", statement: "Systematic checking produces a cleaner final text." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — four sentences about a real weekend.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — attempt in past simple with some errors for proofreading.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — coherent paragraph structure.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — routine applied systematically with notes at each step.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B: Reading — identified issues are real errors or improvements.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion D: Writing — notes show understanding of each check.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — final version has noticeably fewer errors.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — final paragraph is clean and readable.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Paragraph + completed 4-step check + improved final version.",
            commonErrors: ["Proofreading notes that don't match real errors.", "Final version identical to draft."],
            examinerNote: "The final version should show improvement.",
          },
        },
        {
          id: "mla2-u3-proofreading-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the FIRST step of the proofreading routine from the lesson?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Check spelling only" },
              { id: "b", text: "Read your writing aloud" },
              { id: "c", text: "Add more sentences" },
              { id: "d", text: "Change the topic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Proofreading routine", statement: "Step 1: read aloud — your ear catches errors your eye misses." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — the routine starts with reading aloud.", working: "read aloud", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Read your writing aloud",
            commonErrors: ["Starting with spelling — the routine has an order."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u3-proofreading-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why does reading your writing BACKWARDS help find spelling errors?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes the text shorter" },
              { id: "b", text: "It stops your brain from auto-correcting, so wrong spellings stand out" },
              { id: "c", text: "It changes the meaning" },
              { id: "d", text: "It is faster than reading normally" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Backwards reading", statement: "Reading backwards prevents automatic correction and exposes misspellings." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — backwards reading breaks the 'auto-correct' habit.", working: "auto-correcting", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It stops your brain from auto-correcting, so wrong spellings stand out",
            commonErrors: ["Thinking it is just a fun trick with no purpose."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u3-proofreading-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A student writes: 'She go to school every day.' What type of error is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A spelling error" },
              { id: "b", text: "A punctuation error" },
              { id: "c", text: "A verb agreement error (missing -s)" },
              { id: "d", text: "No error" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Third-person -s", statement: "He/she/it + verb-s in present simple: 'She goes'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'she go' should be 'she goes' — agreement error.", working: "missing -s", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** A verb agreement error (missing -s)",
            commonErrors: ["Calling it a spelling error — the letters are fine, the form is wrong."],
            examinerNote: "D1 for (c).",
          },
        },
        {
          id: "mla2-u3-proofreading-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Fix these two sentences and name the error type: (1) 'we was late for school.' (2) 'I didn't went home.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Agreement and did + base", statement: "'We were' (be agreement); didn't + base verb 'go'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'We were late for school.' (capital + were).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'I didn't go home.' (base form after didn't).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'We were late for school.' 'I didn't go home.'",
            commonErrors: ["Keeping 'went' after 'didn't'."],
            examinerNote: "Both corrections needed.",
          },
        },
        {
          id: "mla2-u3-proofreading-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Draft Paragraph",
            author: "Written for Akademik Space",
            source: "Proofreading practice",
            text: "last weekend i go to the park with my freind. we play football for two hours. it was fun but we was very tired after.",
          },
          stem: "How many errors can you find in this draft? Give the number of errors you identify (spelling, tense, agreement, punctuation).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Error spotting", statement: "Check spelling (freind), tense (go→went, play→played), agreement (we was→were), capitals and punctuation." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — errors: 'last' capital, 'i' capital, 'go'→'went', 'freind'→'friend', 'play'→'played', 'it' capital, 'we was'→'we were' = 7.", working: "7", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — recount confirms seven distinct errors.", working: "7", marks: 1, markCode: "D" },
            ],
            finalAnswer: "7",
            commonErrors: ["Missing the tense errors or the lowercase 'i'."],
            examinerNote: "Accept 7 (capitals x3, tense x2, spelling x1, agreement x1).",
          },
        },
        {
          id: "mla2-u3-proofreading-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the four-step proofreading routine and why each step matters.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Proofreading routine", statement: "Read aloud → check sentences → check verbs → check spelling." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — names the four steps correctly.", marks: 1, markCode: "D" },
              { reasoning: "Criterion C: Speaking — explains why reading aloud helps (ear catches what eyes miss).", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — explains checking sentences (capitals, end marks) and verbs (tense, agreement).", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — explanation is clear and complete.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Read aloud (catch unnatural phrasing), check sentences (capitals/end marks), check verbs (tense/agreement), check spelling (homophones, -ed forms).",
            commonErrors: ["Listing steps without explaining why."],
            examinerNote: "All four steps plus purpose needed.",
          },
        },
        {
          id: "mla2-u3-proofreading-q11",
          difficulty: "challenge",
          totalMarks: 6,
          extract: {
            title: "Draft Email",
            author: "Written for Akademik Space",
            source: "Proofreading practice",
            text: "Subject: party\n\nhi tom\n\ni am having a party on saturday at my house. you should come! bring your freind too if you want.\n\nsee you soon\nanna",
          },
          stem: "Proofread this draft email and rewrite it correctly.",
          parts: [
            { label: "a", prompt: "Rewrite the email with correct capitals, spelling and punctuation.", marks: 3 },
            { label: "b", prompt: "List three errors you fixed.", marks: 2 },
            { label: "c", prompt: "Explain which proofreading step would catch each error type.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Email proofreading", statement: "Systematic checking fixes capitals, spelling and punctuation." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — 'Subject: Party' / 'Hi Tom,' — capitals.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — 'Saturday', 'friend' — spelling.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — end marks and paragraph breaks correct.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — three real errors listed.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B: Reading — errors correctly identified.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion D: Writing — matches errors to steps (sentences → spelling).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Corrected email + three errors + step mapping.",
            commonErrors: ["Missing the name capitalization or 'freind'.", "Changing the friendly tone."],
            examinerNote: "Informal tone must be preserved.",
          },
        },
        {
          id: "mla2-u3-proofreading-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which should you check FIRST when proofreading a paragraph?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Whether the ideas are interesting" },
              { id: "b", text: "Capitals at sentence starts and end marks" },
              { id: "c", text: "The title colour" },
              { id: "d", text: "Whether it is long enough" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Proofreading routine", statement: "Step 2: check sentences — capitals and end marks." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — sentence-level punctuation is checked early in the routine.", working: "capitals + end marks", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Capitals at sentence starts and end marks",
            commonErrors: ["Checking content ideas first — proofreading is about errors, not ideas."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u3-proofreading-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Sports Results",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Our school won the inter-house football final on Thursday. We beat St Mary's three–one in front of two hundred spectators. The winning goal was scored in the last minute by Year 6 student Dan.",
          },
          stem: "Read the text and give two numbers: (a) the score our school won by (b) how many spectators came.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 200 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "Figures in a text are key details to locate accurately." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'three–one' → our team scored 3.", working: "3", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'two hundred spectators'.", working: "200", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 3 (b) 200",
            commonErrors: ["Answering 1 — that is the losing score."],
            examinerNote: "Accept 3 and 200.",
          },
        },
        {
          id: "mla2-u3-proofreading-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She don't like homework." },
              { id: "b", text: "She doesn't like homework." },
              { id: "c", text: "She not like homework." },
              { id: "d", text: "She doesn't likes homework." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "doesn't + base form", statement: "Third person negative: doesn't + base verb." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'doesn't like' is correct.", working: "doesn't like", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** She doesn't like homework.",
            commonErrors: ["'don't' with 'she' — needs 'doesn't'."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u3-proofreading-q15",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Library Rules",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "The library opens at eight o'clock and closes at four thirty. Students may borrow two books at a time. Books must be returned within two weeks.",
          },
          stem: "How many books may students borrow at one time? Give the number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in context", statement: "Quantities in a text are key details to locate accurately." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'borrow two books'.", working: "2", marks: 1, markCode: "B" },
            ],
            finalAnswer: "2",
            commonErrors: ["Answering 8 or 4 — those are opening/closing hours."],
            examinerNote: "Accept 2 only.",
          },
        },
        {
          id: "mla2-u3-proofreading-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a short paragraph, then proofread it using the full four-step routine.",
          parts: [
            { label: "a", prompt: "Write a four-sentence paragraph about your favourite food.", marks: 2 },
            { label: "b", prompt: "Apply the routine: note one issue at each step (read aloud, sentences, verbs, spelling).", marks: 3 },
            { label: "c", prompt: "Write the final corrected paragraph.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Proofreading process", statement: "Systematic checking produces a cleaner final text." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — four sentences about a real topic.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — coherent paragraph.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — routine applied at all four steps.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B: Reading — identified issues are real.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion D: Writing — notes show understanding.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — final version noticeably cleaner.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — final paragraph reads well.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Paragraph + four-step check + improved final version.",
            commonErrors: ["Notes that don't match real errors.", "Final identical to draft."],
            examinerNote: "The final version should show improvement.",
          },
        },
      ],
    },
  ],
};
