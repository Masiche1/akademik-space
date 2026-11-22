import type { Lesson } from "../../../types.ts";

export const lesson63: Lesson = {
  id: "langab-u6-lesson-6-3",
  code: "6-3",
  title: "Planning continued language learning",
  goal: "I CAN plan how to continue learning the language after the course and set realistic goals.",
  standards: ["Review", "Writing", "Culture", "Speaking"],
  vocabulary: [
    { term: "Goal", definition: "Something you want to achieve." },
    { term: "Plan", definition: "A way of organising what you will do." },
    { term: "Practice", definition: "Doing something regularly to improve." },
    {
      term: "Immersion",
      definition: "Surrounding yourself with the language every day.",
    },
    {
      term: "Resource",
      definition: "Something that helps you learn, such as an app or book.",
    },
    {
      term: "Motivation",
      definition: "The reason or desire that makes you want to learn.",
    },
  ],
  concepts: [
    {
      id: "langab-u6-learning-plan",
      title: "Setting language learning goals",
      skill:
        "Set realistic goals and plan regular practice for continued learning.",
      lesson: {
        sections: [
          {
            heading: "Why keep learning",
            body: "Language skills fade without practice. The best time to keep learning is now, while the basics are fresh. Even 10-15 minutes a day keeps your vocabulary and grammar active.",
          },
          {
            heading: "Setting SMART goals",
            body: 'Good goals are **Specific**, **Measurable**, **Achievable**, **Relevant**, **Time-bound**. Bad goal: "I want to be fluent." Good goal: "I will learn 20 new words every week and use them in sentences." Small goals add up.',
          },
          {
            heading: "Finding resources",
            body: "Use resources you enjoy: **apps** for vocabulary, **videos** for listening, **books** for reading, **language exchange** partners for speaking. Choose what you like — you will use it more.",
          },
        ],
        keyFormulas: [
          {
            name: "SMART goals",
            statement:
              "Specific + Measurable + Achievable + Relevant + Time-bound.",
          },
          {
            name: "Daily practice",
            statement: "10-15 minutes daily > 2 hours once a week.",
          },
        ],
        workedExample: {
          problem: "Write a SMART goal for improving listening.",
          solution:
            "I will listen to one short recording in the language every day for one month and write down three new words.",
        },
      },
      questions: [
        {
          id: "langab-u6-l63q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does SMART stand for in goal setting?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Specific, Measurable, Achievable, Relevant, Time-bound",
              },
              { id: "b", text: "Study, Memorise, Answer, Read, Test" },
              { id: "c", text: "Speak, Listen, Read, Write, Think" },
              { id: "d", text: "Simple, Many, Active, Regular, Time" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SMART goals",
                statement:
                  "Specific, Measurable, Achievable, Relevant, Time-bound.",
              },
            ],
            steps: [
              {
                reasoning: "SMART = the five goal criteria.",
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
              "**(a)** Specific, Measurable, Achievable, Relevant, Time-bound",
            commonErrors: ["Vague goals without a time limit."],
          },
        },
        {
          id: "langab-u6-l63q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write one good language learning goal and one bad goal. Explain the difference.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Goal quality",
                statement: "Good goals are specific and measurable.",
              },
            ],
            steps: [
              {
                reasoning: "Good goal example: learn 10 words per week.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Bad goal example: be fluent (vague).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explanation of why one is better.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Good: specific + measurable. Bad: vague.",
            commonErrors: ["Both goals are vague."],
          },
        },
        {
          id: "langab-u6-l63q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the student's plan and answer the questions.",
          extract: {
            title: "My learning plan",
            author: "Written for Akademik Space",
            text: "My goal is to improve my vocabulary. Every morning I will learn five new words on an app. On weekends I will write a short paragraph using those words. I will also watch one video in the language every week.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Plan comprehension",
                statement: "Find the goal and the daily/weekly activities.",
              },
            ],
            steps: [
              {
                reasoning: "Goal: improve vocabulary.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Daily: five new words on an app.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weekly: short paragraph + one video.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "All details correct.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Vocabulary; 5 words daily; paragraph + video weekly.",
            commonErrors: ["Missing the weekly activities."],
          },
        },
        {
          id: "langab-u6-l63q4",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write your own continued learning plan for next year.",
          parts: [
            { label: "a", prompt: "Your main goal.", marks: 1 },
            { label: "b", prompt: "Two daily activities.", marks: 2 },
            {
              label: "c",
              prompt: "One weekly activity and one resource you will use.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Learning plan",
                statement:
                  "Goal + daily practice + weekly practice + resource.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Clear, achievable goal.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Two realistic daily activities.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Weekly activity plus named resource.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Goal. (b) 2 daily activities. (c) Weekly activity + resource.",
            commonErrors: ["No realistic schedule."],
          },
        },
        {
          id: "langab-u6-l63q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'goal' in language learning?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Something you want to achieve" },
              { id: "b", text: "A grammar book" },
              { id: "c", text: "A test score" },
              { id: "d", text: "A problem you have" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Goal",
                statement: "A goal is something you want to achieve.",
              },
            ],
            steps: [
              {
                reasoning: "Goal = something you want to achieve.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Something you want to achieve",
            commonErrors: ["Confusing goal with problem."],
          },
        },
        {
          id: "langab-u6-l63q10",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write one SMART goal for improving your speaking.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "SMART goal writing",
                statement:
                  "Specific, Measurable, Achievable, Relevant, Time-bound.",
              },
            ],
            steps: [
              {
                reasoning: "Goal is specific about speaking.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Goal is measurable (a number or clear target).",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Goal has a time limit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. I will speak for two minutes every day for one month.",
            commonErrors: ["Goal is vague with no measure or time."],
          },
        },
        {
          id: "langab-u6-l63q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which goal is SMART?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I want to be better." },
              { id: "b", text: "I will become fluent soon." },
              { id: "c", text: "I will study sometimes." },
              {
                id: "d",
                text: "I will learn 15 words every week and test myself every Sunday.",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "SMART recognition",
                statement:
                  "SMART goals are specific, measurable and time-bound.",
              },
            ],
            steps: [
              {
                reasoning: "Option (b) has a number, action and schedule.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Other options are vague.",
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
              "**(d)** I will learn 15 words every week and test myself every Sunday.",
            commonErrors: ["Choosing a vague goal."],
          },
        },
        {
          id: "langab-u6-l63q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why small daily goals are better than big occasional goals.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Goal size",
                statement:
                  "Small regular goals build habits and are achievable.",
              },
            ],
            steps: [
              {
                reasoning: "Daily practice builds habits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Small goals feel achievable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Occasional big goals are easy to skip.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Explanation is clear and complete.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Daily goals build habits, feel achievable and are easier to keep than occasional big goals.",
            commonErrors: ["No clear reason given."],
          },
        },
        {
          id: "langab-u6-l63q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'resource' in language learning?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Something that helps you learn, like an app or book",
              },
              { id: "b", text: "Only a teacher" },
              { id: "c", text: "A classroom" },
              { id: "d", text: "A grade on a test" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Resource",
                statement: "A resource is anything that helps you learn.",
              },
            ],
            steps: [
              {
                reasoning: "Resource = anything that helps you learn.",
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
              "**(a)** Something that helps you learn, like an app or book",
            commonErrors: ["Thinking resource means only teachers."],
          },
        },
        {
          id: "langab-u6-l63q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Choose two resources (app, video, book, partner) and say what you will do with each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Resource use",
                statement: "Choose resources you enjoy and use them regularly.",
              },
            ],
            steps: [
              { reasoning: "Two resources named.", marks: 2, markCode: "M" },
              {
                reasoning: "Clear activity given for each resource.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. app for daily words; videos for weekly listening.",
            commonErrors: ["Resources named but no activity given."],
          },
        },
        {
          id: "langab-u6-l63q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student sets the goal 'Learn the whole language in one week.' What is wrong with this goal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing is wrong" },
              { id: "b", text: "Goals must be about writing" },
              { id: "c", text: "It is too short a goal" },
              { id: "d", text: "It is not achievable or realistic" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Goal realism",
                statement: "SMART goals must be achievable and realistic.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Learning a whole language in a week is unrealistic.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The goal is not achievable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** It is not achievable or realistic",
            commonErrors: ["Thinking any goal is fine."],
          },
        },
        {
          id: "langab-u6-l63q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a SMART goal for next month.",
          parts: [
            { label: "a", prompt: "State your goal clearly.", marks: 2 },
            { label: "b", prompt: "Explain how it is measurable.", marks: 2 },
            {
              label: "c",
              prompt: "Say how you will check your progress.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "SMART goal construction",
                statement: "Specific + measurable + checkable progress.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Clear, specific goal stated.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Measurable target explained.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Progress check method given.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) Goal. (b) Measure. (c) Progress check.",
            commonErrors: ["Goal has no measure or check."],
          },
        },
        {
          id: "langab-u6-l63q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 'time-bound' mean in SMART goals?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Very fast" },
              { id: "b", text: "No limit at all" },
              { id: "c", text: "Has a deadline or time limit" },
              { id: "d", text: "Always on time" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Time-bound",
                statement: "Time-bound means the goal has a deadline.",
              },
            ],
            steps: [
              {
                reasoning: "Time-bound = has a deadline.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Has a deadline or time limit",
            commonErrors: ["Confusing time-bound with speed."],
          },
        },
        {
          id: "langab-u6-l63q18",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three reasons to keep learning the language after the course ends.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reasons to continue",
                statement:
                  "Skills fade; practice keeps them alive; language is useful.",
              },
            ],
            steps: [
              {
                reasoning: "Any three correct reasons.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "All reasons are logical and relevant.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Skills fade without practice / keep improving / useful for travel, work, friends (any three).",
            commonErrors: ["Reasons unrelated to language learning."],
          },
        },
        {
          id: "langab-u6-l63q19",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do language skills fade without practice?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because teachers forget" },
              { id: "b", text: "Because books expire" },
              { id: "c", text: "Because memory needs regular use" },
              { id: "d", text: "They do not fade" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Skill fading",
                statement: "Skills fade because memory needs regular use.",
              },
            ],
            steps: [
              {
                reasoning: "Memory fades without regular use.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Because memory needs regular use",
            commonErrors: ["Thinking skills never fade."],
          },
        },
        {
          id: "langab-u6-l63q20",
          difficulty: "core",
          totalMarks: 4,
          stem: "Rewrite this bad goal as a SMART goal: 'I want to improve my English.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Goal improvement",
                statement:
                  "Make vague goals specific, measurable and time-bound.",
              },
            ],
            steps: [
              {
                reasoning: "Goal becomes specific about which skill.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Goal becomes measurable.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Goal has a time limit.", marks: 1, markCode: "A" },
              {
                reasoning: "Rewritten goal is achievable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. I will learn 20 new words every week for three months and write one email a week.",
            commonErrors: ["Rewritten goal is still vague."],
          },
        },
      ],
    },
    {
      id: "langab-u6-continued-learning",
      title: "Continuing beyond the course",
      skill: "Identify ways to keep using the language after the course ends.",
      lesson: {
        sections: [
          {
            heading: "Everyday immersion",
            body: "Immerse yourself in the language daily: change your phone language, listen to music, watch videos with subtitles, read simple books or articles. Small daily exposure keeps the language alive.",
          },
          {
            heading: "Social learning",
            body: "Find language exchange partners online or in your community. Speak with classmates who study the same language. Join a club or group that uses the language. Real communication is the best practice.",
          },
          {
            heading: "Motivation and habits",
            body: "Motivation fades — build habits instead. Attach language practice to something you already do: listen during your commute, learn words while eating breakfast. Habits are easier to keep than motivation.",
          },
        ],
        keyFormulas: [
          {
            name: "Immersion ideas",
            statement:
              "Phone language + music + videos + books + speaking partners.",
          },
          {
            name: "Habit building",
            statement: "Attach practice to an existing daily routine.",
          },
        ],
        workedExample: {
          problem: "Give two ways to keep practising after the course.",
          solution:
            "Change phone language to the target language and find a language exchange partner online.",
        },
      },
      questions: [
        {
          id: "langab-u6-l63q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'immersion' in language learning?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Surrounding yourself with the language every day",
              },
              { id: "b", text: "Studying grammar rules only" },
              { id: "c", text: "Reading a dictionary" },
              { id: "d", text: "Writing tests" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Immersion",
                statement:
                  "Immersion = being surrounded by the language daily.",
              },
            ],
            steps: [
              {
                reasoning: "Immersion means daily exposure.",
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
              "**(a)** Surrounding yourself with the language every day",
            commonErrors: ["Thinking immersion means living abroad only."],
          },
        },
        {
          id: "langab-u6-l63q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three ways to keep practising a language after a course ends.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Continued practice",
                statement: "Apps, videos, partners, media.",
              },
            ],
            steps: [
              {
                reasoning: "Any three correct methods.",
                marks: 2,
                markCode: "M",
              },
              { reasoning: "All are practical.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Apps / videos / music / books / language partners / clubs (any three).",
            commonErrors: ["Vague answers like 'study more'."],
          },
        },
        {
          id: "langab-u6-l63q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the student's situation and advise them.",
          extract: {
            title: "After the course",
            author: "Written for Akademik Space",
            text: "I finished Language ab initio and I want to keep learning. I have no time during the week but I have two hours every Saturday. I like watching films and using apps.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Personalised advice",
                statement: "Match advice to the student's time and interests.",
              },
            ],
            steps: [
              {
                reasoning: "Limited time: Saturdays only.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Interests: films and apps.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Advice: use apps daily briefly + films on Saturday + maybe one exchange session.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Advice is realistic.", marks: 1, markCode: "B" },
            ],
            finalAnswer:
              "Daily app use + Saturday films + optional speaking practice.",
            commonErrors: ["Suggesting unrealistic daily two-hour study."],
          },
        },
        {
          id: "langab-u6-l63q8",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a final reflection: 'How Language ab initio changed me.'",
          parts: [
            { label: "a", prompt: "Two skills you gained.", marks: 2 },
            {
              label: "b",
              prompt: "One thing you found challenging.",
              marks: 1,
            },
            {
              label: "c",
              prompt: "Your plan for continued learning.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Final reflection",
                statement: "Gains + challenge + future plan.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Two real skills gained.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "One honest challenge.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Realistic continued learning plan.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) 2 skills. (b) 1 challenge. (c) Plan.",
            commonErrors: ["No concrete plan."],
          },
        },
        {
          id: "langab-u6-l63q21",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is an example of immersion?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reading one dictionary" },
              {
                id: "b",
                text: "Changing your phone language and listening to music daily",
              },
              { id: "c", text: "Only grammar worksheets" },
              { id: "d", text: "Taking a single test" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Immersion examples",
                statement: "Immersion = daily exposure to the language.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Daily exposure like phone language and music is immersion.",
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
              "**(b)** Changing your phone language and listening to music daily",
            commonErrors: ["Choosing a one-time activity."],
          },
        },
        {
          id: "langab-u6-l63q22",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three everyday ways to expose yourself to the language.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Daily exposure",
                statement: "Music, videos, books, apps, phone language.",
              },
            ],
            steps: [
              {
                reasoning: "Any three correct methods.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "All are practical daily exposure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Music / videos / books / apps / phone language / podcasts (any three).",
            commonErrors: ["Methods that are not daily or realistic."],
          },
        },
        {
          id: "langab-u6-l63q23",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is it better to build habits than rely on motivation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Habits are stronger and easier to keep" },
              { id: "b", text: "Habits need no time" },
              { id: "c", text: "Motivation never works" },
              { id: "d", text: "Motivation is illegal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Habit vs motivation",
                statement: "Habits are easier to maintain than motivation.",
              },
            ],
            steps: [
              {
                reasoning: "Habits are automatic and easier to keep.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Motivation fades.", marks: 1, markCode: "M" },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Habits are stronger and easier to keep",
            commonErrors: ["Thinking motivation is reliable."],
          },
        },
        {
          id: "langab-u6-l63q24",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the situation and give advice.",
          extract: {
            title: "Shy speaker",
            author: "Written for Akademik Space",
            text: "I want to practise speaking but I have no partner and I feel shy. I only have my phone and ten minutes a day.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Personalised advice",
                statement: "Match advice to time, resources and feelings.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Suggests phone-based speaking practice (record yourself).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Suggests online exchange partners or clubs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Advice fits ten minutes a day and shyness.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Advice is realistic and encouraging.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Record yourself daily; join online exchange or club; start small.",
            commonErrors: ["Advice ignores the time limit or shyness."],
          },
        },
        {
          id: "langab-u6-l63q25",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'language exchange partner'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An app only" },
              {
                id: "b",
                text: "Someone you practise speaking with who learns your language",
              },
              { id: "c", text: "A dictionary" },
              { id: "d", text: "A teacher at school" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Language exchange",
                statement: "A partner who trades language practice with you.",
              },
            ],
            steps: [
              {
                reasoning: "Exchange partner = mutual language practice.",
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
              "**(b)** Someone you practise speaking with who learns your language",
            commonErrors: ["Confusing partner with teacher or app."],
          },
        },
        {
          id: "langab-u6-l63q26",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a short paragraph: My immersion plan for next month. Include two daily habits and one weekly activity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Immersion plan",
                statement:
                  "Daily habits + weekly activity = realistic immersion.",
              },
            ],
            steps: [
              { reasoning: "Two daily habits given.", marks: 2, markCode: "M" },
              {
                reasoning: "One weekly activity given.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Plan is realistic and specific.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "2 daily habits + 1 weekly activity, realistic and specific.",
            commonErrors: ["No weekly activity or unrealistic plan."],
          },
        },
        {
          id: "langab-u6-l63q27",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which language habit is easiest to keep long-term?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "10 minutes attached to breakfast every day" },
              { id: "b", text: "Study all night once a month" },
              { id: "c", text: "2 hours every Sunday only" },
              { id: "d", text: "Only when motivated" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Habit attachment",
                statement:
                  "Short practice attached to a routine is easiest to keep.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Daily short habit attached to routine is sustainable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Other options are rare, extreme or unreliable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** 10 minutes attached to breakfast every day",
            commonErrors: ["Choosing an unrealistic habit."],
          },
        },
        {
          id: "langab-u6-l63q28",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write advice for a friend who finished the course.",
          parts: [
            { label: "a", prompt: "Two immersion ideas.", marks: 2 },
            { label: "b", prompt: "Two social learning ideas.", marks: 2 },
            { label: "c", prompt: "One habit suggestion.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Continued learning advice",
                statement: "Immersion + social practice + habits.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Two real immersion ideas.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Two real social learning ideas.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "One practical habit suggestion.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 2 immersion ideas. (b) 2 social ideas. (c) 1 habit.",
            commonErrors: ["Advice is vague or unrealistic."],
          },
        },
        {
          id: "langab-u6-l63q29",
          difficulty: "core",
          totalMarks: 2,
          stem: "Attaching language practice to an existing daily routine is called...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Habit building" },
              { id: "b", text: "Testing" },
              { id: "c", text: "Immersion" },
              { id: "d", text: "Goal setting" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Habit building",
                statement: "Habit building = attaching practice to a routine.",
              },
            ],
            steps: [
              {
                reasoning: "Routine-attached practice = habit building.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Habit building",
            commonErrors: ["Confusing habit building with immersion."],
          },
        },
        {
          id: "langab-u6-l63q30",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name two benefits of finding a speaking partner.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Speaking partners",
                statement: "Real speaking practice + confidence + feedback.",
              },
            ],
            steps: [
              {
                reasoning: "Any two correct benefits.",
                marks: 2,
                markCode: "M",
              },
              { reasoning: "Both benefits are real.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Real speaking practice / more confidence / corrections / cultural exchange (any two).",
            commonErrors: ["Benefits unrelated to speaking practice."],
          },
        },
        {
          id: "langab-u6-l63q31",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is NOT a good way to keep learning after the course?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using an app every day" },
              { id: "b", text: "Memorising word lists once a year" },
              { id: "c", text: "Watching videos with subtitles" },
              { id: "d", text: "Reading simple books" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Effective continued learning",
                statement: "Regular varied practice beats rare memorising.",
              },
            ],
            steps: [
              {
                reasoning: "Once-a-year memorising is too rare.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Other options are regular and varied.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Memorising word lists once a year",
            commonErrors: ["Choosing a good method instead of the bad one."],
          },
        },
        {
          id: "langab-u6-l63q32",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write a final message to yourself about continued learning: one goal, one habit, and one encouragement.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Self-motivation",
                statement: "Goal + habit + encouragement keeps learning going.",
              },
            ],
            steps: [
              { reasoning: "One clear goal given.", marks: 1, markCode: "M" },
              {
                reasoning: "One practical habit given.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Encouragement is positive and personal.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "All three parts present.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1 goal + 1 habit + 1 encouragement, all personal.",
            commonErrors: ["Missing one of the three parts."],
          },
        },
      ],
    },
  ],
};
