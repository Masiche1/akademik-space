import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "langab-u2-lesson-2-3",
  code: "2-3",
  title: "Short narratives and descriptions",
  goal: "I CAN understand and write short narratives and descriptions of people, places and events.",
  standards: ["Reading", "Writing", "Speaking"],
  vocabulary: [
    { term: "Narrative", definition: "A story that tells about events in order." },
    { term: "Description", definition: "Words that say what someone or something is like." },
    { term: "Once", definition: "At one time in the past; used to start a story." },
    { term: "Then", definition: "Next in time; used to join events in a story." },
    { term: "Finally", definition: "At the end; used for the last event." },
    { term: "Big / small / tall / short", definition: "Simple adjectives used to describe size." },
  ],
  concepts: [
    {
      id: "langab-u2-narratives",
      title: "Short narratives",
      skill: "Understand and write simple stories with a beginning, middle and end.",
      lesson: {
        sections: [
          {
            heading: "Story structure",
            body: "A simple story has a **beginning** (who, where, when), a **middle** (what happens), and an **end** (how it finishes). Use time words to guide the reader: **once**, **then**, **next**, **finally**. Example: \"Once, a boy went to the park. Then he saw a dog. Finally, he played with it.\"",
          },
          {
            heading: "Common story words",
            body: "Useful words: **once upon a time**, **one day**, **suddenly**, **after that**, **at last**. Past tense is normal in stories: went, saw, played, was. Keep sentences short — one event per sentence.",
          },
          {
            heading: "Reading stories",
            body: "When reading a story, ask: Who is in it? Where does it happen? What happens first, next, last? Look for the time words — they show you the order of events.",
          },
        ],
        keyFormulas: [
          { name: "Story order", statement: "Beginning -> middle -> end, joined by once / then / finally." },
          { name: "Time connectives", statement: "Once, one day, then, next, after that, finally." },
        ],
        workedExample: {
          problem: "Order these events: (a) She went home. (b) She had breakfast. (c) She woke up.",
          solution: "(c) She woke up. (b) She had breakfast. (a) She went home.",
        },
      },
      questions: [
        {
          id: "langab-u2-l23q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which word often starts a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Finally" },
              { id: "b", text: "Once upon a time" },
              { id: "c", text: "However" },
              { id: "d", text: "Because" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Story openers", statement: "Once upon a time and one day are classic story openings." },
            ],
            steps: [
              { reasoning: "Once upon a time is a typical story opening.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Once upon a time",
            commonErrors: ["Using finally at the start instead of the end."],
          },
        },
        {
          id: "langab-u2-l23q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Put these story sentences in order: 1) Finally, she was happy. 2) Once, a girl lost her cat. 3) Then, she found it under the bed.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Story sequence", statement: "Once = start, then = middle, finally = end." },
            ],
            steps: [
              { reasoning: "The story starts with Once: sentence 2.", marks: 1, markCode: "M" },
              { reasoning: "The middle uses Then: sentence 3.", marks: 1, markCode: "M" },
              { reasoning: "Finally ends the story: sentence 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2, 3, 1.",
            commonErrors: ["Putting finally first."],
          },
        },
        {
          id: "langab-u2-l23q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the story and answer the questions.",
          extract: {
            title: "The lost dog",
            author: "Written for Akademik Space",
            text: "Once, a boy called Dan had a dog called Rex. One day, Rex ran away. Dan was very sad. Then, a neighbour found Rex in the park. Dan was happy!",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Story comprehension", statement: "Identify characters, events and how the story ends." },
            ],
            steps: [
              { reasoning: "The boy is Dan; the dog is Rex.", marks: 1, markCode: "M" },
              { reasoning: "Rex ran away one day.", marks: 1, markCode: "M" },
              { reasoning: "A neighbour found Rex in the park.", marks: 1, markCode: "A" },
              { reasoning: "Dan was happy at the end.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Dan and Rex; Rex ran away; a neighbour found him; Dan was happy.",
            commonErrors: ["Missing who found the dog."],
          },
        },
        {
          id: "langab-u2-l23q4",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a short story (4-5 sentences) about a day at the beach.",
          parts: [
            { label: "a", prompt: "Write a beginning: who and where.", marks: 1 },
            { label: "b", prompt: "Write two middle events joined by then or next.", marks: 2 },
            { label: "c", prompt: "Write an ending with finally or at last.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Narrative structure", statement: "Beginning + middle events + ending, joined by time connectives." },
            ],
            steps: [
              { part: "a", reasoning: "Beginning introduces who and where.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two events in order with connectives.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Ending with finally/at last and a result.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Beginning. (b) Two middle events. (c) Ending.",
            commonErrors: ["No time connectives — events feel unordered."],
          },
        },
        {
          id: "langab-u2-l23q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a story, the word 'then' is used to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "end the story" },
              { id: "b", text: "join events in time order" },
              { id: "c", text: "describe a person" },
              { id: "d", text: "ask a question" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Time connectives", statement: "Then joins events in order: what happens next." },
            ],
            steps: [
              { reasoning: "'Then' shows the next event in time.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Join events in time order",
            commonErrors: ["Using 'then' to end a story."],
          },
        },
        {
          id: "langab-u2-l23q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In a story, the past tense of 'go' is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "goed" },
              { id: "b", text: "went" },
              { id: "c", text: "gone" },
              { id: "d", text: "going" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Past tense", statement: "Stories usually use the past tense; 'go' becomes 'went'." },
            ],
            steps: [
              { reasoning: "The past tense of go is went.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** went",
            commonErrors: ["Writing 'goed' instead of 'went'."],
          },
        },
        {
          id: "langab-u2-l23q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "The beginning of a story usually tells you...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "only the ending" },
              { id: "b", text: "who, where and when" },
              { id: "c", text: "nothing important" },
              { id: "d", text: "only the price of things" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Story structure", statement: "The beginning introduces who is in the story, where and when." },
            ],
            steps: [
              { reasoning: "The beginning sets up the characters, place and time.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Who, where and when",
            commonErrors: ["Skipping the introduction of characters."],
          },
        },
        {
          id: "langab-u2-l23q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "The word 'suddenly' in a story shows...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "an expected event" },
              { id: "b", text: "an unexpected event" },
              { id: "c", text: "the end of the story" },
              { id: "d", text: "a description of weather" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Suddenly", statement: "Suddenly introduces something unexpected that happens quickly." },
            ],
            steps: [
              { reasoning: "Suddenly signals an event nobody expected.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** An unexpected event",
            commonErrors: ["Thinking suddenly means slowly."],
          },
        },
        {
          id: "langab-u2-l23q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "The word 'finally' in a story is used for...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "the first event" },
              { id: "b", text: "the last event" },
              { id: "c", text: "a question" },
              { id: "d", text: "a character's name" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Finally", statement: "Finally introduces the last event or result of a story." },
            ],
            steps: [
              { reasoning: "Finally marks the end of the sequence of events.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The last event",
            commonErrors: ["Using finally at the start of a story."],
          },
        },
        {
          id: "langab-u2-l23q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "The phrase 'one day' at the start of a story means...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "tomorrow" },
              { id: "b", text: "at some time in the past" },
              { id: "c", text: "every day" },
              { id: "d", text: "right now" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "One day", statement: "One day means at some unspecified time in the past — a story opener." },
            ],
            steps: [
              { reasoning: "'One day' sets the story in the past without a specific date.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** At some time in the past",
            commonErrors: ["Thinking 'one day' means tomorrow."],
          },
        },
        {
          id: "langab-u2-l23q15",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Why do stories usually use the past tense?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because the events already happened" },
              { id: "b", text: "Because it is easier to spell" },
              { id: "c", text: "Because stories are always about the future" },
              { id: "d", text: "There is no reason" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Tense in stories", statement: "Narratives usually describe events that already happened, so the past tense is used." },
            ],
            steps: [
              { reasoning: "A story recounts events that took place — the past tense fits.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Because the events already happened",
            commonErrors: ["Thinking tense choice is random."],
          },
        },
        {
          id: "langab-u2-l23q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "The phrase 'at last' in a story has a similar meaning to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "once" },
              { id: "b", text: "finally" },
              { id: "c", text: "suddenly" },
              { id: "d", text: "however" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "At last", statement: "At last means after a long time or after difficulty — like finally." },
            ],
            steps: [
              { reasoning: "At last signals the end result, like finally.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** finally",
            commonErrors: ["Confusing at last with suddenly."],
          },
        },
        {
          id: "langab-u2-l23q17",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Put these story sentences in order: 1) At last, he slept. 2) Once, a tired boy went to bed. 3) Then, he read a book.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Story sequence", statement: "Once starts the story, then continues it, at last/finally ends it." },
            ],
            steps: [
              { reasoning: "The story begins with 'Once': sentence 2.", marks: 1, markCode: "M" },
              { reasoning: "'Then' continues the events: sentence 3.", marks: 1, markCode: "M" },
              { reasoning: "'At last' ends it: sentence 1.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2, 3, 1.",
            commonErrors: ["Putting the ending first."],
          },
        },
        {
          id: "langab-u2-l23q18",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Read the mini-story and answer: Who is the story about? Where did she go? What did she buy? How did it end?",
          extract: {
            title: "A trip to the market",
            author: "Written for Akademik Space",
            text: "One day, Maria went to the market with her mother. She bought fruit and bread. Finally, they went home.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Story comprehension", statement: "Find the character, place, events and ending in a story." },
            ],
            steps: [
              { reasoning: "The story is about Maria and her mother.", marks: 1, markCode: "M" },
              { reasoning: "They went to the market.", marks: 1, markCode: "M" },
              { reasoning: "She bought fruit and bread.", marks: 1, markCode: "A" },
              { reasoning: "They went home at the end.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Maria; the market; fruit and bread; they went home.",
            commonErrors: ["Missing what she bought."],
          },
        },
        {
          id: "langab-u2-l23q19",
          difficulty: "core",
          totalMarks: 5,
          stem: "Read the story and answer the questions.",
          extract: {
            title: "Lily and the puppy",
            author: "Written for Akademik Space",
            text: "Once upon a time, there was a little girl called Lily. She lived in a small house near a forest. One day, she found a lost puppy. She took it home and called it Max. They played together every day.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Story comprehension", statement: "Identify characters, setting, events and the ending." },
            ],
            steps: [
              { reasoning: "The girl is Lily.", marks: 1, markCode: "M" },
              { reasoning: "She lived in a small house near a forest.", marks: 1, markCode: "M" },
              { reasoning: "She found a lost puppy.", marks: 1, markCode: "A" },
              { reasoning: "She named it Max and took it home.", marks: 1, markCode: "A" },
              { reasoning: "They played together every day — a happy ending.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Lily; small house near a forest; found a lost puppy; named it Max; played together.",
            commonErrors: ["Confusing Lily with the puppy."],
          },
        },
        {
          id: "langab-u2-l23q20",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a short story about a school trip.",
          parts: [
            { label: "a", prompt: "Write a beginning: who and where.", marks: 1 },
            { label: "b", prompt: "Write two middle events joined by then or next.", marks: 2 },
            { label: "c", prompt: "Write an ending with finally or at last.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Narrative structure", statement: "Beginning + middle events + ending, joined by time connectives." },
            ],
            steps: [
              { part: "a", reasoning: "Beginning introduces who and where, e.g. 'Our class went to the museum.'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two events in order joined by then/next.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Ending with finally/at last and a result.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Beginning. (b) Two events. (c) Ending.",
            commonErrors: ["Events without time connectives."],
          },
        },
        {
          id: "langab-u2-l23q21",
          difficulty: "core",
          totalMarks: 4,
          stem: "Add the correct time word to each gap: once upon a time, then, finally, suddenly.",
          extract: {
            title: "Story with gaps",
            author: "Written for Akademik Space",
            text: "1) ___ upon a time, a rabbit lived in a forest. 2) He woke up early. ___, he ate breakfast. 3) ___, he saw a fox. 4) ___, he ran home and was safe.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Time connectives", statement: "Once upon a time opens, then continues, suddenly surprises, finally ends." },
            ],
            steps: [
              { reasoning: "Gap 1: 'Once upon a time' is the fixed opening.", marks: 1, markCode: "M" },
              { reasoning: "Gap 2: 'Then' continues the routine events.", marks: 1, markCode: "M" },
              { reasoning: "Gap 3: 'Suddenly' introduces the unexpected fox.", marks: 1, markCode: "A" },
              { reasoning: "Gap 4: 'Finally' marks the safe ending.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Once; then; suddenly; finally.",
            commonErrors: ["Using 'finally' before the end."],
          },
        },
        {
          id: "langab-u2-l23q22",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a six-sentence story about finding some money.",
          parts: [
            { label: "a", prompt: "Write a title and a beginning (who, where, when).", marks: 2 },
            { label: "b", prompt: "Write the middle: a problem and what happens.", marks: 2 },
            { label: "c", prompt: "Write the ending: the result.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Narrative structure", statement: "A complete story has a title, a beginning, middle events and an ending." },
            ],
            steps: [
              { part: "a", reasoning: "A title plus who/where/when in the first sentence(s).", marks: 2, markCode: "M" },
              { part: "b", reasoning: "A clear problem and events joined by connectives.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "A result ending, e.g. with finally or at last.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Title + beginning. (b) Problem + events. (c) Ending.",
            commonErrors: ["No problem or no clear ending."],
          },
        },
        {
          id: "langab-u2-l23q23",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read the story, then retell it in your own words in four sentences.",
          extract: {
            title: "The rainy day",
            author: "Written for Akademik Space",
            text: "One day, Tom went to the park with his dog, Max. Suddenly, it started to rain. They ran home quickly. At home, they were warm and dry. Tom gave Max some food.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Retelling", statement: "A retell keeps the main events in order but uses your own words." },
            ],
            steps: [
              { reasoning: "Tom and his dog Max went to the park.", marks: 1, markCode: "M" },
              { reasoning: "It suddenly rained and they ran home.", marks: 1, markCode: "M" },
              { reasoning: "At home they were warm and dry; Tom fed Max.", marks: 1, markCode: "A" },
              { reasoning: "The retell uses the student's own words, not copied sentences.", marks: 1, markCode: "R" },
              { reasoning: "Four sentences in the correct order.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Four-sentence retell in order: park, rain, run home, warm and fed.",
            commonErrors: ["Copying the text word for word."],
          },
        },
        {
          id: "langab-u2-l23q24",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a story that starts 'One day, I missed the bus...'.",
          parts: [
            { label: "a", prompt: "Write what happened next (two sentences).", marks: 2 },
            { label: "b", prompt: "Write a problem that happens.", marks: 2 },
            { label: "c", prompt: "Write a happy ending.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Narrative structure", statement: "Stories move from an opening event through a problem to an ending." },
            ],
            steps: [
              { part: "a", reasoning: "Two logical sentences continuing from missing the bus.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "A clear problem, e.g. late for school or lost.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "A resolved, happy ending.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Continuation. (b) Problem. (c) Happy ending.",
            commonErrors: ["No real problem — events just list what happened."],
          },
        },
      ],
    },
    {
      id: "langab-u2-descriptions",
      title: "Descriptions",
      skill: "Describe people, places and things using simple adjectives.",
      lesson: {
        sections: [
          {
            heading: "Describing with adjectives",
            body: "Adjectives describe nouns: **big**, **small**, **tall**, **short**, **old**, **new**, **nice**, **beautiful**, **hot**, **cold**. In English the adjective usually comes before the noun: \"a big house\", \"a nice day\".",
          },
          {
            heading: "Describing people",
            body: "For people use appearance and character words: **tall**, **short**, **friendly**, **kind**, **funny**. Example: \"My teacher is tall and friendly.\" Use **has** for features: \"She has brown hair.\"",
          },
          {
            heading: "Describing places and things",
            body: "For places say what you see: \"The beach is beautiful and the water is cold.\" For things add simple details: colour, size, how it feels or what it is for. Two or three adjectives are enough for a beginner description.",
          },
        ],
        keyFormulas: [
          { name: "Adjective order", statement: "article + adjective + noun (a big red car)." },
          { name: "People description", statement: "Subject + is/has + adjectives (She is tall and has brown hair)." },
        ],
        workedExample: {
          problem: "Describe your bedroom in two sentences.",
          solution: "My bedroom is small but nice. It has a big window and a blue bed.",
        },
      },
      questions: [
        {
          id: "langab-u2-l23q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which phrase correctly describes a person?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She tall is" },
              { id: "b", text: "She is tall" },
              { id: "c", text: "Tall she is" },
              { id: "d", text: "Is she tall very" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Adjective position", statement: "In English the order is subject + is + adjective." },
            ],
            steps: [
              { reasoning: "\"She is tall\" follows English word order.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** She is tall",
            commonErrors: ["Putting the adjective before the verb, a common mistake for beginners."],
          },
        },
        {
          id: "langab-u2-l23q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three adjectives to describe each: 1) an elephant 2) a kitten 3) a summer day.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Choosing adjectives", statement: "Adjectives should fit the noun and be simple, common words." },
            ],
            steps: [
              { reasoning: "Elephant: e.g. big, grey, strong.", marks: 1, markCode: "M" },
              { reasoning: "Kitten: e.g. small, cute, soft.", marks: 1, markCode: "M" },
              { reasoning: "Summer day: e.g. hot, sunny, long.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Big/grey/strong; small/cute/soft; hot/sunny/long (any sensible adjectives).",
            commonErrors: ["Using adjectives that do not fit the noun."],
          },
        },
        {
          id: "langab-u2-l23q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the description and answer the questions.",
          extract: {
            title: "My best friend",
            author: "Written for Akademik Space",
            text: "My best friend is called Nina. She is twelve years old and she is tall. She has long brown hair and green eyes. She is very kind and funny.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading descriptions", statement: "Find appearance and character details in the text." },
            ],
            steps: [
              { reasoning: "Nina is twelve and tall.", marks: 1, markCode: "M" },
              { reasoning: "She has long brown hair and green eyes.", marks: 1, markCode: "M" },
              { reasoning: "She is kind and funny (character).", marks: 1, markCode: "A" },
              { reasoning: "All details found in the text.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Twelve, tall, long brown hair, green eyes, kind and funny.",
            commonErrors: ["Mixing up Nina's details with someone else's."],
          },
        },
        {
          id: "langab-u2-l23q8",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a description of your favourite place.",
          parts: [
            { label: "a", prompt: "Name the place and say what kind of place it is.", marks: 1 },
            { label: "b", prompt: "Describe it with two adjectives and one detail.", marks: 2 },
            { label: "c", prompt: "Say why you like it in one sentence.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Place description", statement: "Name + adjectives + detail + personal reason." },
            ],
            steps: [
              { part: "a", reasoning: "Place named and type given, e.g. \"the beach\".", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two fitting adjectives plus one detail.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "A clear reason with correct sentence structure.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Name + type. (b) Adjectives + detail. (c) Reason.",
            commonErrors: ["Listing words without making sentences."],
          },
        },
        {
          id: "langab-u2-l23q25",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In English, an adjective usually comes...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "after the noun" },
              { id: "b", text: "before the noun" },
              { id: "c", text: "at the end of the sentence" },
              { id: "d", text: "anywhere in the sentence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Adjective position", statement: "In English the adjective usually comes before the noun: a big house." },
            ],
            steps: [
              { reasoning: "English puts adjectives before nouns.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Before the noun",
            commonErrors: ["Putting the adjective after the noun."],
          },
        },
        {
          id: "langab-u2-l23q26",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "In 'She has brown hair', why do we use 'has' and not 'is'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because hair is a feature you have" },
              { id: "b", text: "Because 'is' is always wrong" },
              { id: "c", text: "Because she is tall" },
              { id: "d", text: "There is no reason" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Has for features", statement: "Use 'has' for features like hair and eyes; use 'is' for qualities like tall or kind." },
            ],
            steps: [
              { reasoning: "Hair is something you have/possess, so 'has' is used.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Because hair is a feature you have",
            commonErrors: ["Using 'is' for body features."],
          },
        },
        {
          id: "langab-u2-l23q27",
          difficulty: "core",
          totalMarks: 2,
          stem: "The adjective 'friendly' describes...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "someone's appearance" },
              { id: "b", text: "someone's character" },
              { id: "c", text: "the weather" },
              { id: "d", text: "a price" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Character adjectives", statement: "Friendly, kind and funny describe a person's character." },
            ],
            steps: [
              { reasoning: "Friendly describes how a person behaves — their character.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Someone's character",
            commonErrors: ["Confusing character adjectives with appearance adjectives."],
          },
        },
        {
          id: "langab-u2-l23q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "The word 'beautiful' can describe...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "only food" },
              { id: "b", text: "a place or thing's appearance" },
              { id: "c", text: "only people" },
              { id: "d", text: "a number" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Beautiful", statement: "Beautiful describes attractive appearance — of places, things or people." },
            ],
            steps: [
              { reasoning: "Beautiful is a general adjective for attractive appearance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A place or thing's appearance",
            commonErrors: ["Thinking beautiful only describes people."],
          },
        },
        {
          id: "langab-u2-l23q29",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "For a beginner description of a place, how many adjectives are enough?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "none" },
              { id: "b", text: "two or three" },
              { id: "c", text: "twenty" },
              { id: "d", text: "only one colour" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Description length", statement: "Two or three well-chosen adjectives plus details make a good beginner description." },
            ],
            steps: [
              { reasoning: "A few good adjectives are better than a long list.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Two or three",
            commonErrors: ["Writing too many adjectives that do not fit."],
          },
        },
        {
          id: "langab-u2-l23q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "In the phrase 'a big red car', where do the adjectives go?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "after the noun" },
              { id: "b", text: "before the noun" },
              { id: "c", text: "at the end only" },
              { id: "d", text: "there are no adjectives" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Adjective order", statement: "Adjectives come before the noun, usually size/feeling before colour." },
            ],
            steps: [
              { reasoning: "'big red' both come before 'car'.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Before the noun",
            commonErrors: ["Writing 'a car big red'."],
          },
        },
        {
          id: "langab-u2-l23q31",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Which sentence correctly describes someone's appearance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She is kind" },
              { id: "b", text: "She has blue eyes" },
              { id: "c", text: "She is funny" },
              { id: "d", text: "She is nice" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Appearance vs character", statement: "Appearance uses 'is + adjective' for looks or 'has + feature' for body parts." },
            ],
            steps: [
              { reasoning: "Blue eyes are a physical feature — appearance, using 'has'.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** She has blue eyes",
            commonErrors: ["Choosing a character adjective as appearance."],
          },
        },
        {
          id: "langab-u2-l23q32",
          difficulty: "core",
          totalMarks: 2,
          stem: "To describe a place well, you should say...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "only its name" },
              { id: "b", text: "what you can see and what it is like" },
              { id: "c", text: "its price" },
              { id: "d", text: "nothing at all" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Describing places", statement: "Describe places with adjectives and details about what you see." },
            ],
            steps: [
              { reasoning: "A good place description says what it looks like and what is there.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** What you can see and what it is like",
            commonErrors: ["Naming the place without describing it."],
          },
        },
        {
          id: "langab-u2-l23q33",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three adjectives to describe your favourite animal.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Choosing adjectives", statement: "Adjectives should fit the noun and be simple, common words." },
            ],
            steps: [
              { reasoning: "Three adjectives that fit the chosen animal.", marks: 2, markCode: "M" },
              { reasoning: "All adjectives are simple English words.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any three fitting adjectives, e.g. big, friendly, fast.",
            commonErrors: ["Adjectives that do not fit the animal."],
          },
        },
        {
          id: "langab-u2-l23q34",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Read the description and answer: What is the house like? Name two features it has. Why does the writer like it?",
          extract: {
            title: "My house",
            author: "Written for Akademik Space",
            text: "My house is old but beautiful. It has a big garden and a red door. I like it because it is near my school.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading descriptions", statement: "Find adjectives, features and the personal reason in a description." },
            ],
            steps: [
              { reasoning: "The house is old but beautiful.", marks: 1, markCode: "M" },
              { reasoning: "It has a big garden and a red door.", marks: 1, markCode: "M" },
              { reasoning: "The writer likes it because it is near school.", marks: 1, markCode: "A" },
              { reasoning: "All details found in the text.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Old but beautiful; big garden + red door; near school.",
            commonErrors: ["Missing the reason for liking it."],
          },
        },
        {
          id: "langab-u2-l23q35",
          difficulty: "core",
          totalMarks: 5,
          stem: "Read the description and answer the questions.",
          extract: {
            title: "The beach",
            author: "Written for Akademik Space",
            text: "The beach near my town is very beautiful. The water is cold but clean. In summer, many people come to swim and play.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading descriptions", statement: "Find adjectives and details about the place and what happens there." },
            ],
            steps: [
              { reasoning: "The beach is very beautiful.", marks: 1, markCode: "M" },
              { reasoning: "The water is cold but clean.", marks: 1, markCode: "M" },
              { reasoning: "In summer many people come to swim and play.", marks: 1, markCode: "A" },
              { reasoning: "The description gives both appearance and activity.", marks: 1, markCode: "R" },
              { reasoning: "All details correct.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Beautiful; cold but clean water; people swim and play in summer.",
            commonErrors: ["Missing what people do there."],
          },
        },
        {
          id: "langab-u2-l23q36",
          difficulty: "core",
          totalMarks: 5,
          stem: "Describe your school in three sentences.",
          parts: [
            { label: "a", prompt: "Name the school and say what kind of place it is.", marks: 1 },
            { label: "b", prompt: "Use two adjectives and one detail.", marks: 2 },
            { label: "c", prompt: "Say why you like it in one sentence.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Place description", statement: "Name + adjectives + detail + personal reason." },
            ],
            steps: [
              { part: "a", reasoning: "School named and type given, e.g. 'My school is big.'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two fitting adjectives plus one detail in sentences.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "A clear reason with correct sentence structure.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Name + type. (b) Adjectives + detail. (c) Reason.",
            commonErrors: ["Listing words without sentences."],
          },
        },
        {
          id: "langab-u2-l23q37",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write three sentences describing your best friend — two about appearance and one about character.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "People description", statement: "Use is/has + adjectives for appearance and character." },
            ],
            steps: [
              { reasoning: "Two sentences on appearance with correct is/has structure.", marks: 2, markCode: "M" },
              { reasoning: "One sentence on character using a character adjective.", marks: 1, markCode: "A" },
              { reasoning: "All sentences complete and correct.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Three correct sentences covering appearance and character.",
            commonErrors: ["Using character words for appearance or missing 'has'."],
          },
        },
        {
          id: "langab-u2-l23q38",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Describe your town or city in four sentences.",
          parts: [
            { label: "a", prompt: "Name the place and say what kind of place it is.", marks: 1 },
            { label: "b", prompt: "Use two adjectives and two details about what is there.", marks: 2 },
            { label: "c", prompt: "Say what people do there and why you like it.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Place description", statement: "A fuller description adds adjectives, details and a personal reason." },
            ],
            steps: [
              { part: "a", reasoning: "Place named with its type, e.g. 'a small town'.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two fitting adjectives and two details in full sentences.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "What people do plus a clear reason for liking it.", marks: 3, markCode: "A" },
            ],
            finalAnswer: "(a) Name + type. (b) Adjectives + details. (c) Activity + reason.",
            commonErrors: ["Too few details — only adjectives with no sentences."],
          },
        },
        {
          id: "langab-u2-l23q39",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Two students describe the same park. Which description is better, and why?",
          extract: {
            title: "Two park descriptions",
            author: "Written for Akademik Space",
            text: "A: The park is nice. It has trees.\nB: The park is big and green. It has old trees, a lake and a playground. In the summer, children play football there.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Evaluating descriptions", statement: "Better descriptions use specific adjectives, details and full sentences." },
            ],
            steps: [
              { reasoning: "Description B is better.", marks: 1, markCode: "M" },
              { reasoning: "B uses more specific adjectives: big, green, old.", marks: 1, markCode: "M" },
              { reasoning: "B gives details: lake, playground, football in summer.", marks: 1, markCode: "A" },
              { reasoning: "A is too general — only 'nice' and 'trees'.", marks: 1, markCode: "R" },
              { reasoning: "The comparison is justified.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "B is better — more specific adjectives, details and full sentences.",
            commonErrors: ["Choosing the shorter description."],
          },
        },
        {
          id: "langab-u2-l23q40",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Describe your favourite season in four sentences.",
          parts: [
            { label: "a", prompt: "Name the season and use two adjectives.", marks: 2 },
            { label: "b", prompt: "Give two details about the weather or what happens.", marks: 2 },
            { label: "c", prompt: "Say why you like it in one sentence.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Season description", statement: "Name + adjectives + weather details + personal reason." },
            ],
            steps: [
              { part: "a", reasoning: "Season named with two fitting adjectives, e.g. 'summer is hot and long'.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Two details about weather or activities.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "A clear personal reason in a full sentence.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Name + adjectives. (b) Two details. (c) Reason.",
            commonErrors: ["Describing a season without any details."],
          },
        },
      ],
    },
  ],
};
