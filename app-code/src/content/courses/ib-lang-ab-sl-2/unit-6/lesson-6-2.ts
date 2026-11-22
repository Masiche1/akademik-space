import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "langab-u6-lesson-6-2",
  code: "6-2",
  title: "Reviewing and consolidating skills",
  goal: "I CAN review and consolidate the language skills learned in Year 1 and Year 2.",
  standards: ["Review", "Speaking", "Writing", "Reading"],
  vocabulary: [
    { term: "Review", definition: "Looking back at what you have learned." },
    {
      term: "Consolidate",
      definition: "Make knowledge stronger and more automatic.",
    },
    {
      term: "Skill",
      definition: "An ability you have practised, such as speaking or writing.",
    },
    { term: "Progress", definition: "Improvement over time." },
    { term: "Strength", definition: "Something you do well." },
    { term: "Weakness", definition: "Something you need to practise more." },
  ],
  concepts: [
    {
      id: "langab-u6-review-skills",
      title: "Reviewing your skills",
      skill: "Identify strengths and weaknesses and plan how to improve.",
      lesson: {
        sections: [
          {
            heading: "What you have learned",
            body: "Over two years you have built: **greetings and introductions**, **numbers and time**, **questions and answers**, **reading signs and texts**, **writing messages and paragraphs**, and **intercultural awareness**. Each skill connects to the others.",
          },
          {
            heading: "Finding your strengths",
            body: "Ask yourself: Which skills feel easy? Maybe reading signs or writing messages. Which feel hard? Maybe listening quickly or speaking fluently. Write down your **strengths** and **weaknesses** — this helps you focus your practice.",
          },
          {
            heading: "Consolidation strategies",
            body: "To consolidate means to make skills automatic. Strategies: **review vocabulary** regularly, **practise speaking** with friends, **write short texts** every week, and **listen** to simple recordings. Ten minutes a day is better than one hour once a month.",
          },
        ],
        keyFormulas: [
          {
            name: "Skill review",
            statement: "Strengths + weaknesses = focus for practice.",
          },
          {
            name: "Consolidation",
            statement: "Regular short practice > occasional long practice.",
          },
        ],
        workedExample: {
          problem: "Your weakness is remembering vocabulary. What can you do?",
          solution:
            "Review 5 words daily, use them in sentences, and test yourself weekly.",
        },
      },
      questions: [
        {
          id: "langab-u6-l62q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'consolidate' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To write a test" },
              { id: "b", text: "To learn a new language" },
              { id: "c", text: "To make knowledge stronger and automatic" },
              { id: "d", text: "To forget what you learned" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Consolidate",
                statement:
                  "Consolidate = make skills stronger through practice.",
              },
            ],
            steps: [
              {
                reasoning: "Consolidate means strengthening knowledge.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** To make knowledge stronger and automatic",
            commonErrors: ["Confusing consolidate with learn."],
          },
        },
        {
          id: "langab-u6-l62q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three skills you have learned in Language ab initio.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Skill identification",
                statement: "Any three real skills from the course.",
              },
            ],
            steps: [
              {
                reasoning: "Any three correct skills.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "All are course-relevant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Greetings / questions / reading texts / writing messages / numbers / descriptions (any three).",
            commonErrors: ["Listing topics, not skills."],
          },
        },
        {
          id: "langab-u6-l62q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the student's self-assessment and answer the questions.",
          extract: {
            title: "My language skills",
            author: "Written for Akademik Space",
            text: "I am good at reading signs and writing messages. My speaking is OK but I am slow. My listening is my biggest problem — I miss words. I need to practise listening every day.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Self-assessment",
                statement: "Identify strengths and weaknesses from the text.",
              },
            ],
            steps: [
              {
                reasoning: "Strengths: reading signs and writing messages.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Speaking is OK but slow; listening is the biggest problem.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Plan: practise listening every day.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "All details correct.", marks: 1, markCode: "B" },
            ],
            finalAnswer:
              "Strengths: reading + writing. Weakness: listening; practise daily.",
            commonErrors: ["Missing the listening weakness."],
          },
        },
        {
          id: "langab-u6-l62q4",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write your own language skills self-assessment.",
          parts: [
            { label: "a", prompt: "Two skills you are good at.", marks: 2 },
            { label: "b", prompt: "One skill you want to improve.", marks: 1 },
            { label: "c", prompt: "Two ways you will practise it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Self-assessment",
                statement: "Strengths + weakness + practice plan.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Two real strengths.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "One clear weakness.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Two practical practice methods.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 2 strengths. (b) 1 weakness. (c) 2 practice methods.",
            commonErrors: ["No practice plan."],
          },
        },
        {
          id: "langab-u6-l62q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'weakness' in language learning?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Something you need to practise more" },
              { id: "b", text: "A test score" },
              { id: "c", text: "Something you do well" },
              { id: "d", text: "A grammar rule" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Weakness",
                statement: "A weakness is something you need to practise more.",
              },
            ],
            steps: [
              {
                reasoning: "Weakness = area needing practice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Something you need to practise more",
            commonErrors: ["Confusing weakness with strength."],
          },
        },
        {
          id: "langab-u6-l62q10",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three skills you want to maintain over the summer so you do not lose them.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Skill maintenance",
                statement:
                  "Skills fade without practice — choose skills to keep active.",
              },
            ],
            steps: [
              {
                reasoning: "Any three real skills named.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "All are course skills worth maintaining.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reading signs / writing messages / greetings / questions / descriptions (any three).",
            commonErrors: ["Naming topics, not skills."],
          },
        },
        {
          id: "langab-u6-l62q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student writes: 'I am good at writing but my listening is weak.' What should be their biggest focus?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reading" },
              { id: "b", text: "Speaking" },
              { id: "c", text: "Writing" },
              { id: "d", text: "Listening" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Focus on weakness",
                statement: "Weaknesses need more practice than strengths.",
              },
            ],
            steps: [
              {
                reasoning: "Listening is stated as the weakness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Biggest focus should be the weakness.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Listening",
            commonErrors: ["Focusing on the strength instead."],
          },
        },
        {
          id: "langab-u6-l62q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the self-assessment and answer the questions.",
          extract: {
            title: "My skills",
            author: "Written for Akademik Space",
            text: "Reading is easy for me. I can write short emails. Speaking is difficult — I forget words. I will practise speaking with my sister every day.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Self-assessment reading",
                statement:
                  "Identify strengths, weaknesses and plans from a text.",
              },
            ],
            steps: [
              {
                reasoning: "Strengths: reading and writing emails.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weakness: speaking, forgetting words.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Plan: practise speaking daily with sister.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "All details correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Strengths: reading/writing; weakness: speaking; plan: daily practice with sister.",
            commonErrors: ["Missing the weakness or the plan."],
          },
        },
        {
          id: "langab-u6-l62q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'progress' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Improvement over time" },
              { id: "b", text: "Finishing a book" },
              { id: "c", text: "A test result" },
              { id: "d", text: "Going backwards" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Progress",
                statement: "Progress means improvement over time.",
              },
            ],
            steps: [
              {
                reasoning: "Progress = improvement over time.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Improvement over time",
            commonErrors: ["Confusing progress with perfection."],
          },
        },
        {
          id: "langab-u6-l62q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a self-assessment: one strength, one weakness, and one practice idea for each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Balanced self-assessment",
                statement: "Strength + weakness + practice for each.",
              },
            ],
            steps: [
              {
                reasoning: "One real strength and one real weakness.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Two practical practice ideas given.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Strength + practice idea; weakness + practice idea.",
            commonErrors: ["No practice idea for the weakness."],
          },
        },
        {
          id: "langab-u6-l62q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which study habit is BEST for consolidating language skills?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only study before tests" },
              { id: "b", text: "10 minutes every day" },
              { id: "c", text: "Copy texts without thinking" },
              { id: "d", text: "Study 5 hours once a month" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Regular practice",
                statement:
                  "Regular short practice beats occasional long practice.",
              },
            ],
            steps: [
              {
                reasoning: "Daily practice consolidates skills best.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Other options are too rare or passive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** 10 minutes every day",
            commonErrors: ["Choosing rare or passive study."],
          },
        },
        {
          id: "langab-u6-l62q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Create a review week plan for yourself.",
          parts: [
            { label: "a", prompt: "Two vocabulary activities.", marks: 2 },
            { label: "b", prompt: "Two grammar activities.", marks: 2 },
            {
              label: "c",
              prompt: "One integrated task combining skills.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Review planning",
                statement: "Vocabulary + grammar + integrated practice.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Two practical vocabulary activities.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Two practical grammar activities.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "One task combining two or more skills.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 2 vocab activities. (b) 2 grammar activities. (c) 1 integrated task.",
            commonErrors: ["Tasks are not integrated."],
          },
        },
        {
          id: "langab-u6-l62q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do language skills connect to each other?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Reading helps writing, listening helps speaking, and so on",
              },
              { id: "b", text: "Tests are separate" },
              { id: "c", text: "Only grammar matters" },
              { id: "d", text: "They do not connect" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Skill connection",
                statement: "Skills support each other in real language use.",
              },
            ],
            steps: [
              {
                reasoning: "Skills support each other.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Reading helps writing, listening helps speaking, and so on",
            commonErrors: ["Thinking skills are isolated."],
          },
        },
        {
          id: "langab-u6-l62q18",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name two ways to find out your strengths and weaknesses.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Self-assessment methods",
                statement: "Reflection, tests, teacher feedback, self-checks.",
              },
            ],
            steps: [
              {
                reasoning: "Any two correct methods.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Both methods really reveal strengths/weaknesses.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reflection / tests / teacher feedback / comparing old and new work (any two).",
            commonErrors: ["Methods that do not reveal skill level."],
          },
        },
        {
          id: "langab-u6-l62q19",
          difficulty: "core",
          totalMarks: 3,
          stem: "A student says: 'My speaking is my weakness so I will ignore it.' Is this good advice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yes, weaknesses should be ignored" },
              { id: "b", text: "Only for writing skills" },
              { id: "c", text: "No — weaknesses need more practice" },
              { id: "d", text: "Only if you are fluent" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Weakness strategy",
                statement: "Weaknesses need targeted practice, not ignoring.",
              },
            ],
            steps: [
              {
                reasoning: "Ignoring a weakness does not improve it.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weaknesses need more practice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** No — weaknesses need more practice",
            commonErrors: ["Agreeing with ignoring weaknesses."],
          },
        },
        {
          id: "langab-u6-l62q20",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write three sentences comparing your Year 1 and Year 2 language skills.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Progress comparison",
                statement: "Compare skills across the two years honestly.",
              },
            ],
            steps: [
              {
                reasoning: "Three sentences written.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Sentences compare Year 1 and Year 2.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Language is accurate and clear.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Three sentences comparing Year 1 vs Year 2 skills.",
            commonErrors: ["No real comparison between years."],
          },
        },
      ],
    },
    {
      id: "langab-u6-review-practice",
      title: "Practice and consolidation tasks",
      skill:
        "Use varied practice tasks to consolidate vocabulary, grammar and skills.",
      lesson: {
        sections: [
          {
            heading: "Vocabulary review",
            body: "Review vocabulary by theme: food, travel, family, school, hobbies. Use flashcards, word webs and gap-fill exercises. Try to use 5 new words in sentences every day.",
          },
          {
            heading: "Grammar review",
            body: "Key grammar to review: **SVO word order**, **do/does questions**, **don't/doesn't negatives**, **there is/there are**, **is/has for descriptions**, **linking words** (first, then, finally). Practise by transforming sentences.",
          },
          {
            heading: "Integrated practice",
            body: "The best practice combines skills: read a text then answer questions, listen then write what you heard, write a paragraph then check it. Real language use is always integrated, not isolated.",
          },
        ],
        keyFormulas: [
          {
            name: "Review checklist",
            statement: "Vocabulary + grammar + integrated tasks.",
          },
          {
            name: "Sentence transforms",
            statement:
              "Statement -> negative -> question (She likes tea -> She doesn't like tea -> Does she like tea?).",
          },
        ],
        workedExample: {
          problem:
            "Review task: transform 'They play football' into negative and question.",
          solution: "They don't play football. / Do they play football?",
        },
      },
      questions: [
        {
          id: "langab-u6-l62q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is the best way to review vocabulary?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Write the words 100 times" },
              { id: "b", text: "Only listen to songs" },
              { id: "c", text: "Use the words in sentences regularly" },
              { id: "d", text: "Read the list once and forget it" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Vocabulary practice",
                statement: "Using words in context is the best review method.",
              },
            ],
            steps: [
              {
                reasoning: "Using words in sentences builds memory.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Use the words in sentences regularly",
            commonErrors: ["Passive review without using words."],
          },
        },
        {
          id: "langab-u6-l62q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Transform these sentences: make each negative, then a question.",
          extract: {
            title: "Grammar review",
            author: "Written for Akademik Space",
            text: "1) She likes coffee.\n2) We go to school by bus.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence transforms",
                statement:
                  "don't/doesn't + base verb; Do/Does + subject + base verb.",
              },
            ],
            steps: [
              {
                reasoning: "She doesn't like coffee. / Does she like coffee?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "We don't go to school by bus. / Do we go to school by bus?",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both transforms correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "1) doesn't like / Does she like? 2) don't go / Do we go?",
            commonErrors: ["Keeping -s after doesn't."],
          },
        },
        {
          id: "langab-u6-l62q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the text and answer the review questions.",
          extract: {
            title: "End of year review",
            author: "Written for Akademik Space",
            text: "This year I learned many things. I can now write messages and emails, read signs and forms, and describe my family and hobbies. My speaking is better but I still need to practise listening. Next year I want to learn more words and speak more fluently.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Review comprehension",
                statement: "Find achievements, remaining weakness and goals.",
              },
            ],
            steps: [
              {
                reasoning: "Achievements: writing, reading, describing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Speaking improved but listening still needs work.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Goal: more words and more fluent speaking.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "All details correct.", marks: 1, markCode: "B" },
            ],
            finalAnswer:
              "Achievements: writing/reading/describing; weakness: listening; goal: vocabulary + fluency.",
            commonErrors: ["Missing the goal for next year."],
          },
        },
        {
          id: "langab-u6-l62q8",
          difficulty: "core",
          totalMarks: 5,
          stem: "Create a personal review plan for the summer.",
          parts: [
            {
              label: "a",
              prompt: "Two skills to maintain over summer.",
              marks: 2,
            },
            { label: "b", prompt: "Two skills to improve.", marks: 2 },
            { label: "c", prompt: "How often you will practise.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Study planning",
                statement: "Maintain + improve + frequency.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Two skills to keep practising.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Two skills to improve.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Realistic frequency given.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 2 to maintain. (b) 2 to improve. (c) Frequency.",
            commonErrors: ["No realistic schedule."],
          },
        },
        {
          id: "langab-u6-l62q21",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which sentence is a correct question with do/does?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She doesn't like tea." },
              { id: "b", text: "Do you like tea?" },
              { id: "c", text: "There is tea." },
              { id: "d", text: "I like tea." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Do/Does questions",
                statement: "Questions use Do/Does + subject + base verb.",
              },
            ],
            steps: [
              {
                reasoning: "Do you like tea? is a correct question.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Do you like tea?",
            commonErrors: ["Choosing a statement, not a question."],
          },
        },
        {
          id: "langab-u6-l62q22",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Transform the sentence 'He plays tennis': write the negative, then the question.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sentence transforms",
                statement: "don't + base verb; Do/Does + subject + base verb.",
              },
            ],
            steps: [
              { reasoning: "He doesn't play tennis.", marks: 1, markCode: "M" },
              { reasoning: "Does he play tennis?", marks: 1, markCode: "M" },
              {
                reasoning: "Both transforms correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "He doesn't play tennis. / Does he play tennis?",
            commonErrors: ["Keeping -s after doesn't or Does."],
          },
        },
        {
          id: "langab-u6-l62q23",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence is grammatically correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She doesn't likes coffee." },
              { id: "b", text: "She doesn't like coffee." },
              { id: "c", text: "She don't like coffee." },
              { id: "d", text: "She not like coffee." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Negatives",
                statement: "doesn't + base verb (no -s).",
              },
            ],
            steps: [
              {
                reasoning: "doesn't like is correct — no -s on the verb.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** She doesn't like coffee.",
            commonErrors: ["Adding -s after doesn't."],
          },
        },
        {
          id: "langab-u6-l62q24",
          difficulty: "core",
          totalMarks: 4,
          stem: "Complete the sentences and write one more of your own.",
          extract: {
            title: "There is / there are",
            author: "Written for Akademik Space",
            text: "1) There ___ a book on the table.\n2) There ___ two pens in my bag.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "There is/are",
                statement: "there is + singular; there are + plural.",
              },
            ],
            steps: [
              {
                reasoning: "There is a book (singular).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "There are two pens (plural).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "One correct extra sentence given.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "All forms correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1) is 2) are + one correct extra sentence.",
            commonErrors: ["Using 'there is' with plurals."],
          },
        },
        {
          id: "langab-u6-l62q25",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is an 'integrated task' in language practice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only listening drills" },
              { id: "b", text: "Only grammar exercises" },
              { id: "c", text: "Combining skills like read-then-answer" },
              { id: "d", text: "Only writing practice" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Integrated practice",
                statement: "Integrated tasks combine two or more skills.",
              },
            ],
            steps: [
              {
                reasoning: "Integrated = combining skills.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Combining skills like read-then-answer",
            commonErrors: ["Thinking integrated means one skill only."],
          },
        },
        {
          id: "langab-u6-l62q26",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the text and answer the review questions.",
          extract: {
            title: "My review routine",
            author: "Written for Akademik Space",
            text: "I review vocabulary every morning. I write one paragraph every week. My teacher says my reading is much better now.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Comprehension review",
                statement: "Find daily activities and improvements in a text.",
              },
            ],
            steps: [
              {
                reasoning: "Daily activity: vocabulary review every morning.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weekly activity: one paragraph.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Improvement: reading is much better.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "All details correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Daily vocab review; weekly paragraph; reading improved.",
            commonErrors: ["Missing the weekly paragraph."],
          },
        },
        {
          id: "langab-u6-l62q27",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "What is the BEST way to review linking words like first, then, finally?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ignore them completely" },
              { id: "b", text: "Only read them once" },
              { id: "c", text: "Memorise the list only" },
              { id: "d", text: "Write a paragraph using them in order" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Linking word practice",
                statement: "Use linking words in real writing to review them.",
              },
            ],
            steps: [
              {
                reasoning: "Writing with linking words builds automatic use.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Other options are passive or incomplete.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Write a paragraph using them in order",
            commonErrors: ["Choosing passive memorisation only."],
          },
        },
        {
          id: "langab-u6-l62q28",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Design a mixed review worksheet for yourself.",
          parts: [
            {
              label: "a",
              prompt: "Two gap-fill sentences with vocabulary.",
              marks: 2,
            },
            { label: "b", prompt: "One sentence transform task.", marks: 2 },
            {
              label: "c",
              prompt: "One short text with one comprehension question.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Worksheet design",
                statement: "Varied task types consolidate skills best.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Two correct gap-fill sentences.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "One correct transform task.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Short text with one valid question.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 2 gap-fills. (b) 1 transform. (c) 1 text + question.",
            commonErrors: ["All tasks are the same type."],
          },
        },
        {
          id: "langab-u6-l62q29",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which review frequency is most effective?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Once a year" },
              { id: "b", text: "Only before exams" },
              { id: "c", text: "Regularly, such as daily or weekly" },
              { id: "d", text: "Never" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Review frequency",
                statement: "Regular review consolidates skills.",
              },
            ],
            steps: [
              {
                reasoning: "Regular review works best.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Regularly, such as daily or weekly",
            commonErrors: ["Choosing rare review."],
          },
        },
        {
          id: "langab-u6-l62q30",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three 'there is / there are' sentences about your classroom.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "There is/are use",
                statement: "Correct singular/plural agreement.",
              },
            ],
            steps: [
              {
                reasoning: "Three sentences written.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "All use correct is/are forms.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. There is a teacher. / There are twenty desks. / There is a window.",
            commonErrors: ["Wrong is/are agreement."],
          },
        },
        {
          id: "langab-u6-l62q31",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence describes a person correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She is has tall." },
              { id: "b", text: "She is tall and has blue eyes." },
              { id: "c", text: "She has tall." },
              { id: "d", text: "She tall has." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Descriptions",
                statement: "is + adjective; has + noun.",
              },
            ],
            steps: [
              {
                reasoning:
                  "is tall (adjective) and has blue eyes (noun) are correct.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** She is tall and has blue eyes.",
            commonErrors: ["Using has with adjectives."],
          },
        },
        {
          id: "langab-u6-l62q32",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a paragraph (5-6 sentences) summarising what you learned this year.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Year summary",
                statement: "Summarise real learning with linking words.",
              },
            ],
            steps: [
              {
                reasoning: "Paragraph has 5-6 sentences.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Content covers real skills learned.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Uses linking words appropriately.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Language is accurate.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5-6 sentence summary using linking words.",
            commonErrors: ["Too short or no real content."],
          },
        },
      ],
    },
  ],
};
