import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "langab-u4-lesson-4-1",
  code: "4-1",
  title: "Everyday vocabulary themes",
  goal: "I CAN use and recognise everyday vocabulary about food, travel, family and school.",
  standards: ["Vocabulary", "Reading", "Speaking", "Listening"],
  vocabulary: [
    { term: "Food", definition: "Things people eat and drink, such as bread, fruit and water." },
    { term: "Travel", definition: "Going from one place to another, by bus, train, car or plane." },
    { term: "Family", definition: "The people related to you, such as mother, father, brother and sister." },
    { term: "School", definition: "The place where students learn, with teachers, lessons and classmates." },
    { term: "Hobby", definition: "Something you enjoy doing in your free time, such as sport or music." },
    { term: "Weather", definition: "The conditions outside, such as sun, rain and wind." },
  ],
  concepts: [
    {
      id: "langab-u4-vocab-themes",
      title: "Vocabulary themes: food, travel, family, school",
      skill: "Learn and use common words in everyday themes.",
      lesson: {
        sections: [
          {
            heading: "Food and drink",
            body: "Food words: **bread**, **cheese**, **rice**, **meat**, **fish**, **fruit**, **vegetables**, **egg**, **cake**. Drinks: **water**, **milk**, **juice**, **tea**, **coffee**. Say what you like: \"I like bread and cheese.\"",
          },
          {
            heading: "Travel and places",
            body: "Travel words: **bus**, **train**, **car**, **plane**, **bike**, **ticket**, **station**, **airport**. Places: **city**, **village**, **beach**, **park**, **museum**, **hotel**, **restaurant**. Example: \"I go to school by bus.\"",
          },
          {
            heading: "Family, school and free time",
            body: "Family: **mother**, **father**, **brother**, **sister**, **grandmother**, **grandfather**, **cousin**. School: **teacher**, **student**, **lesson**, **homework**, **exam**, **classroom**. Free time: **sport**, **music**, **reading**, **games**, **friends**.",
          },
        ],
        keyFormulas: [
          { name: "Theme words", statement: "food + travel + family + school = core everyday vocabulary." },
          { name: "Using words", statement: "I like / I go to / My ... is (I like bread; My teacher is kind)." },
        ],
        workedExample: {
          problem: "Write three sentences using food words.",
          solution: "I like bread and cheese. My favourite drink is water. I don't eat meat.",
        },
      },
      questions: [
        {
          id: "langab-u4-l41q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which word belongs to the food theme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Homework" },
              { id: "b", text: "Ticket" },
              { id: "c", text: "Cheese" },
              { id: "d", text: "Airport" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Theme recognition", statement: "Cheese is food; airport, homework and ticket belong to other themes." },
            ],
            steps: [
              { reasoning: "Cheese is a food word.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Cheese",
            commonErrors: ["Mixing themes — airport is travel, not food."],
          },
        },
        {
          id: "langab-u4-l41q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write the missing words: 1) I go to school by ___. 2) My ___ is a teacher. 3) I like to eat ___.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cloze vocabulary", statement: "Choose theme words that fit each sentence." },
            ],
            steps: [
              { reasoning: "By + transport word, e.g. bus/train/car.", marks: 1, markCode: "M" },
              { reasoning: "Family member who can be a teacher, e.g. mother/father.", marks: 1, markCode: "M" },
              { reasoning: "A food word, e.g. bread/rice/fruit.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bus/train/car; mother/father; bread/rice/fruit (any sensible word).",
            commonErrors: ["Words that do not fit grammatically."],
          },
        },
        {
          id: "langab-u4-l41q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the text and answer the questions.",
          extract: {
            title: "My daily routine",
            author: "Written for Akademik Space",
            text: "I am a student. I go to school by bus. My favourite subject is music. At the weekend I play football with my friends. In the evening I read books.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Theme vocabulary in context", statement: "Find school, travel and free-time words in the text." },
            ],
            steps: [
              { reasoning: "The writer is a student and goes by bus.", marks: 1, markCode: "M" },
              { reasoning: "Favourite subject is music.", marks: 1, markCode: "M" },
              { reasoning: "At the weekend: football with friends; evenings: reading.", marks: 1, markCode: "A" },
              { reasoning: "All answers from the text, using theme words.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Student; by bus; music; football and reading.",
            commonErrors: ["Answering with words not in the text."],
          },
        },
        {
          id: "langab-u4-l41q4",
          difficulty: "core",
          totalMarks: 5,
          stem: "Create a vocabulary mind map for one theme.",
          parts: [
            { label: "a", prompt: "Choose one theme (food, travel, family, school or hobbies).", marks: 1 },
            { label: "b", prompt: "Write six theme words.", marks: 2 },
            { label: "c", prompt: "Write two sentences using three of your words.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary building", statement: "Theme words + correct sentences." },
            ],
            steps: [
              { part: "a", reasoning: "One clear theme chosen.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Six words that all fit the theme.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Two correct sentences using theme words.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Theme. (b) Six words. (c) Two sentences.",
            commonErrors: ["Words from mixed themes."],
          },
        },
        {
          id: "langab-u4-l41q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which word belongs to the drinks theme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Museum" },
              { id: "b", text: "Bread" },
              { id: "c", text: "Sister" },
              { id: "d", text: "Tea" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Theme recognition", statement: "Tea is a drink; bread is food, museum a place, sister family." },
            ],
            steps: [
              { reasoning: "Tea is a drink word.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Tea",
            commonErrors: ["Mixing food and drink words."],
          },
        },
        {
          id: "langab-u4-l41q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Choose the correct sentence about travel.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "My ticket is cheese." },
              { id: "b", text: "The airport is my mother." },
              { id: "c", text: "I go to school by bus." },
              { id: "d", text: "I eat a station." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Words in context", statement: "Theme words must fit the sentence meaning." },
            ],
            steps: [
              { reasoning: "Bus and school fit the travel theme; the other sentences are nonsense.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** I go to school by bus.",
            commonErrors: ["Choosing a sentence with theme words used wrongly."],
          },
        },
        {
          id: "langab-u4-l41q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three sentences about food and drink you like.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Theme sentences", statement: "Food/drink words used in complete sentences." },
            ],
            steps: [
              { reasoning: "Sentence 1 uses a food or drink word correctly.", marks: 1, markCode: "M" },
              { reasoning: "Sentence 2 uses a food or drink word correctly.", marks: 1, markCode: "M" },
              { reasoning: "Sentence 3 is correct English with a theme word.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Three correct sentences with food/drink words, e.g. I like bread. My favourite drink is juice. I don't eat meat.",
            commonErrors: ["Sentences without a verb or with wrong word order."],
          },
        },
        {
          id: "langab-u4-l41q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which word is a family member?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Airport" },
              { id: "b", text: "Homework" },
              { id: "c", text: "Cousin" },
              { id: "d", text: "Juice" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Theme recognition", statement: "Cousin is family; the others belong to travel, school and drink themes." },
            ],
            steps: [
              { reasoning: "Cousin names a family member.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Cousin",
            commonErrors: ["Confusing family words with other themes."],
          },
        },
        {
          id: "langab-u4-l41q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Complete the text with theme words: food, bus, family, school.",
          extract: {
            title: "My day",
            author: "Written for Akademik Space",
            text: "I am a student at a big ___. I go there by ___ every morning. At lunch I eat ___ with my ___.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cloze completion", statement: "Each gap needs the given theme word used correctly." },
            ],
            steps: [
              { reasoning: "school fits 'a big ___' for a student.", marks: 1, markCode: "M" },
              { reasoning: "bus fits 'go there by ___'.", marks: 1, markCode: "M" },
              { reasoning: "food fits 'eat ___' and family fits 'with my ___'.", marks: 1, markCode: "M" },
              { reasoning: "All four words used in the right gaps.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "school; bus; food; family.",
            commonErrors: ["Putting a word in a gap where it does not fit grammatically."],
          },
        },
        {
          id: "langab-u4-l41q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence uses a travel word correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I drink a ticket." },
              { id: "b", text: "The ticket is my sister." },
              { id: "c", text: "I buy a ticket at the airport." },
              { id: "d", text: "My airport likes cheese." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Collocation", statement: "Tickets are bought at airports or stations." },
            ],
            steps: [
              { reasoning: "Buying a ticket at the airport is logical travel vocabulary use.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** I buy a ticket at the airport.",
            commonErrors: ["Ignoring whether the word combination makes sense."],
          },
        },
        {
          id: "langab-u4-l41q15",
          difficulty: "core",
          totalMarks: 5,
          stem: "Describe your school day using at least six theme words.",
          parts: [
            { label: "a", prompt: "Write two sentences about getting to school.", marks: 2 },
            { label: "b", prompt: "Write two sentences about lessons or homework.", marks: 2 },
            { label: "c", prompt: "Write one sentence about what you like at school.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Theme vocabulary in context", statement: "Correct sentences using theme words." },
            ],
            steps: [
              { part: "a", reasoning: "Two correct sentences with travel/school words.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Two correct sentences with lesson/homework words.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "One correct sentence about likes.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) e.g. I go to school by bus. I meet my friends at the station. (b) e.g. I have three lessons. I do my homework in the evening. (c) e.g. I like my music teacher.",
            commonErrors: ["Theme words in wrong sentences or wrong word order."],
          },
        },
        {
          id: "langab-u4-l41q16",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which word describes the weather?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cousin" },
              { id: "b", text: "Rain" },
              { id: "c", text: "Exam" },
              { id: "d", text: "Classroom" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Theme recognition", statement: "Rain is weather; exam, classroom and cousin are school/family words." },
            ],
            steps: [
              { reasoning: "Rain describes weather.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Rain",
            commonErrors: ["Confusing weather with school vocabulary."],
          },
        },
        {
          id: "langab-u4-l41q17",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Write the missing words: 1) My ___ is a doctor. 2) I play ___ with my friends. 3) The ___ is very beautiful. 4) I have ___ at eight o'clock.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cloze vocabulary", statement: "Choose theme words that fit each sentence." },
            ],
            steps: [
              { reasoning: "A family member, e.g. father/mother/brother.", marks: 1, markCode: "M" },
              { reasoning: "A hobby/sport word, e.g. football/music.", marks: 1, markCode: "M" },
              { reasoning: "A place word, e.g. park/beach/museum.", marks: 1, markCode: "M" },
              { reasoning: "A school word, e.g. lesson/class.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "father/mother; football/music; park/beach; lesson/class (any sensible theme word).",
            commonErrors: ["Words that do not fit grammatically or semantically."],
          },
        },
        {
          id: "langab-u4-l41q18",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which word is a place?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Museum" },
              { id: "b", text: "Sister" },
              { id: "c", text: "Teacher" },
              { id: "d", text: "Rice" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Theme recognition", statement: "Museum is a place; the others are food, family and school words." },
            ],
            steps: [
              { reasoning: "Museum names a place you can visit.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Museum",
            commonErrors: ["Confusing places with people or things."],
          },
        },
        {
          id: "langab-u4-l41q19",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the text and answer the questions.",
          extract: {
            title: "A weekend",
            author: "Written for Akademik Space",
            text: "On Saturday I visit my grandmother. In the afternoon we go to the beach. On Sunday I do my homework and play games with my brother.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Theme vocabulary in context", statement: "Find family, place and free-time words in the text." },
            ],
            steps: [
              { reasoning: "The writer visits grandmother on Saturday.", marks: 1, markCode: "M" },
              { reasoning: "They go to the beach in the afternoon.", marks: 1, markCode: "M" },
              { reasoning: "On Sunday: homework and games with brother.", marks: 1, markCode: "A" },
              { reasoning: "All answers come from the text.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Grandmother; the beach; homework and games with his/her brother.",
            commonErrors: ["Answering with details not in the text."],
          },
        },
        {
          id: "langab-u4-l41q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which word completes the sentence correctly? 'My favourite subject is ___.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "station" },
              { id: "b", text: "beach" },
              { id: "c", text: "music" },
              { id: "d", text: "ticket" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Collocation", statement: "Subjects at school include music; the other words do not fit." },
            ],
            steps: [
              { reasoning: "Music is a school subject.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** music",
            commonErrors: ["Choosing a travel word for a school context."],
          },
        },
        {
          id: "langab-u4-l41q21",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write about your weekend using theme words.",
          parts: [
            { label: "a", prompt: "Write two sentences about Saturday.", marks: 2 },
            { label: "b", prompt: "Write two sentences about Sunday.", marks: 2 },
            { label: "c", prompt: "Write one sentence about a hobby you do.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Weekend description", statement: "Correct sentences using theme words." },
            ],
            steps: [
              { part: "a", reasoning: "Two correct Saturday sentences.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Two correct Sunday sentences.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "One correct hobby sentence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2 Saturday sentences. (b) 2 Sunday sentences. (c) 1 hobby sentence.",
            commonErrors: ["Sentences without verbs or with wrong order."],
          },
        },
        {
          id: "langab-u4-l41q22",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which sentence is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I like eat bread." },
              { id: "b", text: "I bread like." },
              { id: "c", text: "I like bread." },
              { id: "d", text: "Bread I like eat." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Verb patterns", statement: "Like + noun; like + to-infinitive, not both." },
            ],
            steps: [
              { reasoning: "Like + noun (bread) is correct SVO.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** I like bread.",
            commonErrors: ["Adding eat after like without to."],
          },
        },
        {
          id: "langab-u4-l41q23",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which group of words all belong to the same theme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bus, train, plane" },
              { id: "b", text: "Bread, mother, exam" },
              { id: "c", text: "Teacher, beach, rice" },
              { id: "d", text: "Park, homework, juice" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Theme grouping", statement: "Group words by shared theme." },
            ],
            steps: [
              { reasoning: "Bus, train and plane are all transport/travel words.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Bus, train, plane",
            commonErrors: ["Grouping words that only sound similar."],
          },
        },
        {
          id: "langab-u4-l41q24",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a short profile of yourself or a family member using at least eight theme words.",
          parts: [
            { label: "a", prompt: "Write two sentences about family.", marks: 2 },
            { label: "b", prompt: "Write two sentences about school or work.", marks: 2 },
            { label: "c", prompt: "Write two sentences about free time and hobbies.", marks: 2 },
            { label: "d", prompt: "Write two sentences about places you like.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Profile writing", statement: "Theme words used correctly across four themes." },
            ],
            steps: [
              { part: "a", reasoning: "Two correct family sentences with theme words.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Two correct school/work sentences.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Two correct free-time sentences.", marks: 2, markCode: "M" },
              { part: "d", reasoning: "Two correct place sentences, all in correct English.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a)-(d) Two correct sentences each using theme words.",
            commonErrors: ["Repetition of the same word or missing themes."],
          },
        },
      ],
    },
    {
      id: "langab-u4-word-families",
      title: "Word families and word webs",
      skill: "Group words into families and use synonyms and simple word webs.",
      lesson: {
        sections: [
          {
            heading: "Word families",
            body: "Words often come in families: **happy**, **happily**, **happiness**. For beginners, learning a few family groups helps you recognise words in reading. Example family: big — bigger — biggest; small — smaller — smallest.",
          },
          {
            heading: "Synonyms",
            body: "Synonyms are words with similar meaning: **big/large**, **small/little**, **happy/glad**, **fast/quick**, **begin/start**, **end/finish**. Knowing synonyms helps you understand texts and avoids repeating the same word.",
          },
          {
            heading: "Word webs",
            body: "A word web puts a word in the centre and related words around it. Example: SPORT -> football, swimming, tennis, running. Webs help you remember vocabulary because you see how words connect.",
          },
        ],
        keyFormulas: [
          { name: "Synonyms", statement: "big = large, small = little, fast = quick, begin = start." },
          { name: "Word web", statement: "Centre word + related words around it." },
        ],
        workedExample: {
          problem: "Find the synonym of 'begin'.",
          solution: "Start (or 'commence' at higher level — begin/start is the beginner pair).",
        },
      },
      questions: [
        {
          id: "langab-u4-l41q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a synonym?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A very long word" },
              { id: "b", text: "A word in another language" },
              { id: "c", text: "A word with a similar meaning" },
              { id: "d", text: "A word with the opposite meaning" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Synonym", statement: "A synonym is a word with a similar meaning." },
            ],
            steps: [
              { reasoning: "Synonyms have similar meanings.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A word with a similar meaning",
            commonErrors: ["Confusing synonyms with antonyms."],
          },
        },
        {
          id: "langab-u4-l41q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write the synonym for each word: 1) big 2) fast 3) end.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synonym recall", statement: "Common beginner synonyms: large, quick, finish." },
            ],
            steps: [
              { reasoning: "big = large.", marks: 1, markCode: "M" },
              { reasoning: "fast = quick.", marks: 1, markCode: "M" },
              { reasoning: "end = finish.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Large; quick; finish.",
            commonErrors: ["Giving antonyms instead of synonyms."],
          },
        },
        {
          id: "langab-u4-l41q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the text and replace the underlined words with synonyms.",
          extract: {
            title: "A big day",
            author: "Written for Akademik Space",
            text: "Today is a big day for our class. We begin the new project and it is very fast work. I like this school.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synonym substitution", statement: "Replace words without changing the meaning." },
            ],
            steps: [
              { reasoning: "big -> large (or great).", marks: 1, markCode: "M" },
              { reasoning: "begin -> start.", marks: 1, markCode: "M" },
              { reasoning: "fast -> quick.", marks: 1, markCode: "A" },
              { reasoning: "All substitutions keep the meaning.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "large; start; quick.",
            commonErrors: ["Choosing words that change the meaning."],
          },
        },
        {
          id: "langab-u4-l41q8",
          difficulty: "core",
          totalMarks: 5,
          stem: "Build a word web for the word SCHOOL.",
          parts: [
            { label: "a", prompt: "Write the centre word.", marks: 1 },
            { label: "b", prompt: "Write six connected words around it.", marks: 2 },
            { label: "c", prompt: "Write one sentence using three of the connected words.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word webs", statement: "Connected words + a sentence showing the links." },
            ],
            steps: [
              { part: "a", reasoning: "Centre word SCHOOL in the middle.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Six words related to school: teacher, lesson, homework, classroom, student, exam.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "One correct sentence using three words.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) SCHOOL. (b) Six related words. (c) Sentence.",
            commonErrors: ["Unrelated words that do not connect to school."],
          },
        },
        {
          id: "langab-u4-l41q25",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a word family?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Words in alphabetical order" },
              { id: "b", text: "Words built from the same root, like happy, happily, happiness" },
              { id: "c", text: "Very long words" },
              { id: "d", text: "Words that rhyme" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Word family", statement: "Words sharing the same root or base." },
            ],
            steps: [
              { reasoning: "Happy, happily and happiness share the root happy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Words built from the same root",
            commonErrors: ["Confusing word families with rhyming words."],
          },
        },
        {
          id: "langab-u4-l41q26",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which pair are synonyms?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fast and slow" },
              { id: "b", text: "Happy and glad" },
              { id: "c", text: "Begin and end" },
              { id: "d", text: "Big and small" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Synonyms", statement: "Synonyms have similar meaning; the other pairs are opposites." },
            ],
            steps: [
              { reasoning: "Happy and glad mean almost the same; the others are antonyms.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Happy and glad",
            commonErrors: ["Choosing antonyms instead of synonyms."],
          },
        },
        {
          id: "langab-u4-l41q27",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write the synonym for each word: 1) small 2) begin 3) happy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synonym recall", statement: "Common beginner synonyms: little, start, glad." },
            ],
            steps: [
              { reasoning: "small = little.", marks: 1, markCode: "M" },
              { reasoning: "begin = start.", marks: 1, markCode: "M" },
              { reasoning: "happy = glad.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Little; start; glad.",
            commonErrors: ["Giving opposites instead of synonyms."],
          },
        },
        {
          id: "langab-u4-l41q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which words belong to the same word family as 'big'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "small, little" },
              { id: "b", text: "bigger, biggest" },
              { id: "c", text: "fast, quick" },
              { id: "d", text: "begin, start" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word families", statement: "Bigger and biggest are forms of big." },
            ],
            steps: [
              { reasoning: "Bigger and biggest are built from big; the others are synonyms or opposites.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** bigger, biggest",
            commonErrors: ["Choosing synonyms rather than family forms."],
          },
        },
        {
          id: "langab-u4-l41q29",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the text and replace the underlined words with synonyms.",
          extract: {
            title: "A quick morning",
            author: "Written for Akademik Space",
            text: "I begin my day early. I am fast at getting ready. My room is small but nice. I like my school very much.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synonym substitution", statement: "Replace words without changing meaning." },
            ],
            steps: [
              { reasoning: "begin -> start.", marks: 1, markCode: "M" },
              { reasoning: "fast -> quick.", marks: 1, markCode: "M" },
              { reasoning: "small -> little.", marks: 1, markCode: "A" },
              { reasoning: "All substitutions keep the meaning.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "start; quick; little.",
            commonErrors: ["Choosing words that change the meaning."],
          },
        },
        {
          id: "langab-u4-l41q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the centre word in this web? SPORT -> football, swimming, tennis.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Football" },
              { id: "b", text: "Sport" },
              { id: "c", text: "Tennis" },
              { id: "d", text: "Swimming" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Word web", statement: "The centre word is the main word; related words surround it." },
            ],
            steps: [
              { reasoning: "Sport is the main word; the others are connected words.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Sport",
            commonErrors: ["Confusing connected words with the centre word."],
          },
        },
        {
          id: "langab-u4-l41q31",
          difficulty: "core",
          totalMarks: 5,
          stem: "Build a word web for the word FAMILY.",
          parts: [
            { label: "a", prompt: "Write the centre word.", marks: 1 },
            { label: "b", prompt: "Write six connected words around it.", marks: 2 },
            { label: "c", prompt: "Write one sentence using three connected words.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word webs", statement: "Connected words + a sentence showing the links." },
            ],
            steps: [
              { part: "a", reasoning: "Centre word FAMILY in the middle.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Six words related to family: mother, father, brother, sister, cousin, grandmother.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "One correct sentence using three words.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) FAMILY. (b) Six related words. (c) Sentence.",
            commonErrors: ["Unrelated words that do not connect to family."],
          },
        },
        {
          id: "langab-u4-l41q32",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write the missing family word: happy, happily, ___.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word families", statement: "Happiness completes the happy family." },
            ],
            steps: [
              { reasoning: "The family is happy, happily, happiness.", marks: 2, markCode: "M" },
              { reasoning: "Correct spelling given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "happiness",
            commonErrors: ["Writing 'happyness' or another form."],
          },
        },
        {
          id: "langab-u4-l41q33",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which pair shows a word family, not synonyms?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "big and large" },
              { id: "b", text: "end and finish" },
              { id: "c", text: "small and little" },
              { id: "d", text: "big, bigger, biggest" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Word family vs synonyms", statement: "Family = same root forms; synonyms = different words, similar meaning." },
            ],
            steps: [
              { reasoning: "Big, bigger, biggest are forms of one word; the others are different-word synonyms.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** big, bigger, biggest",
            commonErrors: ["Calling synonyms a word family."],
          },
        },
        {
          id: "langab-u4-l41q34",
          difficulty: "core",
          totalMarks: 4,
          stem: "Rewrite these sentences replacing the underlined words with synonyms: 1) The big dog is fast. 2) We begin school at eight. 3) She is happy today.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Synonym substitution", statement: "Replace words without changing meaning." },
            ],
            steps: [
              { reasoning: "big -> large; fast -> quick.", marks: 1, markCode: "M" },
              { reasoning: "begin -> start.", marks: 1, markCode: "M" },
              { reasoning: "happy -> glad.", marks: 1, markCode: "A" },
              { reasoning: "Sentences still correct and meaningful.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The large dog is quick. / We start school at eight. / She is glad today.",
            commonErrors: ["Choosing words that break the sentence meaning."],
          },
        },
        {
          id: "langab-u4-l41q35",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does a word web help you do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Count syllables" },
              { id: "b", text: "Remember how words connect" },
              { id: "c", text: "Spell words correctly" },
              { id: "d", text: "Find opposite meanings" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Purpose of word webs", statement: "Webs show how words relate to a centre word." },
            ],
            steps: [
              { reasoning: "Webs help you see connections between words.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Remember how words connect",
            commonErrors: ["Thinking webs are only for spelling."],
          },
        },
        {
          id: "langab-u4-l41q36",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three words in the 'food' word family/web.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Themed word groups", statement: "Food words: bread, rice, fruit, etc." },
            ],
            steps: [
              { reasoning: "First food word given.", marks: 1, markCode: "M" },
              { reasoning: "Second food word given.", marks: 1, markCode: "M" },
              { reasoning: "Third food word given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any three food words, e.g. bread, rice, fruit.",
            commonErrors: ["Words from other themes like travel or family."],
          },
        },
        {
          id: "langab-u4-l41q37",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which is the correct synonym pair?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "fast and slow" },
              { id: "b", text: "big and small" },
              { id: "c", text: "fast and quick" },
              { id: "d", text: "begin and finish" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Synonyms", statement: "Fast and quick have similar meaning." },
            ],
            steps: [
              { reasoning: "Fast and quick are synonyms; the other pairs are opposites.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** fast and quick",
            commonErrors: ["Choosing antonym pairs."],
          },
        },
        {
          id: "langab-u4-l41q38",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a word web and a paragraph using it.",
          parts: [
            { label: "a", prompt: "Choose a centre word and write it.", marks: 1 },
            { label: "b", prompt: "Write five connected words around it.", marks: 2 },
            { label: "c", prompt: "Write three sentences using at least four connected words.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Word web application", statement: "Connected words used correctly in sentences." },
            ],
            steps: [
              { part: "a", reasoning: "Clear centre word chosen.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Five words genuinely related to the centre.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Three correct sentences using the connected words.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Centre word. (b) 5 connected words. (c) 3 sentences.",
            commonErrors: ["Connected words not actually used in the sentences."],
          },
        },
        {
          id: "langab-u4-l41q39",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which word is the odd one out in this family group: begin, start, finish, commence?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "finish" },
              { id: "b", text: "start" },
              { id: "c", text: "commence" },
              { id: "d", text: "begin" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Semantic grouping", statement: "Begin, start and commence mean the same; finish is the opposite." },
            ],
            steps: [
              { reasoning: "Finish means the opposite of begin/start.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** finish",
            commonErrors: ["Choosing a word that shares spelling rather than meaning."],
          },
        },
        {
          id: "langab-u4-l41q40",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Create a vocabulary study page for one theme using word families and a word web.",
          parts: [
            { label: "a", prompt: "Choose a theme and write three word families or synonym pairs.", marks: 2 },
            { label: "b", prompt: "Draw or describe a word web with a centre word and six connected words.", marks: 3 },
            { label: "c", prompt: "Write four sentences using words from your web.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Vocabulary study", statement: "Families + web + correct sentences." },
            ],
            steps: [
              { part: "a", reasoning: "Three correct family/synonym groups for the theme.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Centre word with six genuinely connected words.", marks: 3, markCode: "M" },
              { part: "c", reasoning: "Four correct sentences using web words.", marks: 3, markCode: "A" },
            ],
            finalAnswer: "(a) 3 families/synonyms. (b) Web with 6 words. (c) 4 sentences.",
            commonErrors: ["Web words unrelated to the theme."],
          },
        },
      ],
    },
  ],
};
