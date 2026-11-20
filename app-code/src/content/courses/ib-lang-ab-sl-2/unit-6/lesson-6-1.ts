import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "langab-u6-lesson-6-1",
  code: "6-1",
  title: "Cultural awareness in communication",
  goal: "I CAN communicate respectfully across cultures and recognise simple cultural differences.",
  standards: ["Speaking", "Listening", "Culture", "Writing"],
  vocabulary: [
    {
      term: "Culture",
      definition: "The customs, beliefs and ways of life of a group.",
    },
    {
      term: "Custom",
      definition: "A traditional way of doing something in a culture.",
    },
    { term: "Respect", definition: "Showing you value other people's ways." },
    {
      term: "Tradition",
      definition: "Something people have done for a long time.",
    },
    {
      term: "Diversity",
      definition: "Many different kinds of people and cultures.",
    },
    {
      term: "Open-minded",
      definition: "Willing to accept and learn about differences.",
    },
  ],
  concepts: [
    {
      id: "langab-u6-culture-basics",
      title: "Understanding cultural differences",
      skill:
        "Recognise that customs, greetings and values differ between cultures.",
      lesson: {
        sections: [
          {
            heading: "Why cultures differ",
            body: "Cultures grow from history, geography, religion and family life. What is normal in one country — eating with hands, removing shoes, bowing — can be unusual in another. Difference is not wrong; it is just different.",
          },
          {
            heading: "Customs in daily life",
            body: "Customs appear everywhere: how people greet, what they eat, how they dress, what they give as gifts. When you travel or meet people from other cultures, observe first and ask politely. **What do people usually do here?** is a great question.",
          },
          {
            heading: "Values differ too",
            body: "Some cultures value directness; others value indirectness. Some value personal space; others are comfortable standing close. Being **open-minded** means accepting these differences without judging.",
          },
        ],
        keyFormulas: [
          {
            name: "Cultural awareness",
            statement:
              "Observe + ask + respect = good intercultural communication.",
          },
          {
            name: "Universal basics",
            statement: "Smile + please + thank you + respect work everywhere.",
          },
        ],
        workedExample: {
          problem:
            "At a friend's house you are asked to remove your shoes. What do you do?",
          solution:
            "Remove your shoes politely — it is their custom. You can ask: Is this a custom here?",
        },
      },
      questions: [
        {
          id: "langab-u6-l61q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'custom'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A law of the country" },
              { id: "b", text: "A traditional way of doing something" },
              { id: "c", text: "A type of food" },
              { id: "d", text: "A building" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Custom",
                statement:
                  "A custom is a traditional way of doing something in a culture.",
              },
            ],
            steps: [
              {
                reasoning: "Custom = traditional practice.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** A traditional way of doing something",
            commonErrors: ["Confusing custom with law."],
          },
        },
        {
          id: "langab-u6-l61q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name three examples of cultural differences in daily life.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cultural examples",
                statement: "Greetings, food, dress, gifts, personal space.",
              },
            ],
            steps: [
              {
                reasoning: "Any three correct examples.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "All are real cultural differences.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Greetings / food / dress / gifts / personal space / table manners (any three).",
            commonErrors: ["Listing stereotypes instead of real customs."],
          },
        },
        {
          id: "langab-u6-l61q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the situation and answer the questions.",
          extract: {
            title: "A new custom",
            author: "Written for Akademik Space",
            text: "You are visiting a family in another country. When you arrive, everyone greets you with a hug and a kiss on both cheeks. You are not used to this.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Respectful response",
                statement: "Follow the custom politely and stay open-minded.",
              },
            ],
            steps: [
              {
                reasoning: "The hug and kiss is their greeting custom.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "You can return it politely or offer a handshake.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Do not look shocked or refuse rudely.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Response is respectful.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Return the greeting politely; stay respectful.",
            commonErrors: ["Refusing or making faces."],
          },
        },
        {
          id: "langab-u6-l61q4",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a short guide: 'How to be respectful in another culture.'",
          parts: [
            {
              label: "a",
              prompt: "Give two things to observe before acting.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Give two polite questions to ask.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Give one universal rule that always works.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Intercultural respect",
                statement: "Observe + ask + respect.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Two things to observe: greetings, table manners, dress.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Two polite questions.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "One universal rule: respect / please / thank you.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 2 observations. (b) 2 questions. (c) 1 universal rule.",
            commonErrors: ["Judging instead of observing."],
          },
        },
        {
          id: "langab-u6-l61q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'diversity'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One single culture" },
              { id: "b", text: "Many different kinds of people and cultures" },
              { id: "c", text: "A type of music" },
              { id: "d", text: "A law of the country" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Diversity",
                statement:
                  "Diversity means many different kinds of people and cultures.",
              },
            ],
            steps: [
              {
                reasoning: "Diversity = many different kinds.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Many different kinds of people and cultures",
            commonErrors: ["Confusing diversity with one culture."],
          },
        },
        {
          id: "langab-u6-l61q10",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name two things that can shape a culture (for example history, geography, religion or family life).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Culture factors",
                statement:
                  "History, geography, religion and family life shape cultures.",
              },
            ],
            steps: [
              {
                reasoning: "Any two correct factors named.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "Both are real influences on culture.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "History / geography / religion / family life (any two).",
            commonErrors: ["Listing personal habits, not cultural factors."],
          },
        },
        {
          id: "langab-u6-l61q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "You are a guest at dinner and everyone eats with their hands. What is the best thing to do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Refuse to eat" },
              { id: "b", text: "Eat with a fork only" },
              { id: "c", text: "Watch others, try politely and ask questions" },
              { id: "d", text: "Leave the table" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Respectful guest",
                statement: "Observe, try politely and ask — do not judge.",
              },
            ],
            steps: [
              {
                reasoning: "Eating with hands is a custom here, not wrong.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Best action: observe and try politely.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Watch others, try politely and ask questions",
            commonErrors: ["Refusing or criticising the custom."],
          },
        },
        {
          id: "langab-u6-l61q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain why the lesson says difference is not wrong, it is just different. Give one example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cultural relativity",
                statement: "Customs are different, not inferior.",
              },
            ],
            steps: [
              {
                reasoning: "Explains that customs vary between cultures.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gives one clear example.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Shows understanding that different is not wrong.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Answer is clear and correct.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "Customs differ by culture (e.g. greetings, food); different does not mean wrong.",
            commonErrors: ["Judging the other custom as bad."],
          },
        },
        {
          id: "langab-u6-l61q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does 'open-minded' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Closed to new ideas" },
              {
                id: "b",
                text: "Willing to accept and learn about differences",
              },
              { id: "c", text: "Very fast at learning" },
              { id: "d", text: "Good at exams" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Open-minded",
                statement:
                  "Open-minded means willing to accept and learn about differences.",
              },
            ],
            steps: [
              {
                reasoning: "Open-minded = accepting differences.",
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
              "**(b)** Willing to accept and learn about differences",
            commonErrors: ["Confusing open-minded with clever."],
          },
        },
        {
          id: "langab-u6-l61q14",
          difficulty: "core",
          totalMarks: 4,
          stem: "You meet someone from another culture. Write two polite questions you could ask to learn about their customs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Polite questions",
                statement: "Asking politely shows respect and curiosity.",
              },
            ],
            steps: [
              { reasoning: "Two questions written.", marks: 2, markCode: "M" },
              {
                reasoning: "Both are polite in form.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Both relate to customs or culture.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. Is this a custom here? / What do people usually do at ...?",
            commonErrors: ["Questions that sound rude or demanding."],
          },
        },
        {
          id: "langab-u6-l61q15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which is the MOST polite way to ask about a custom?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Why do you do that?" },
              { id: "b", text: "Is this a custom here?" },
              { id: "c", text: "That is weird." },
              { id: "d", text: "Stop doing that!" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Polite phrasing",
                statement: "Polite questions respect the other person.",
              },
            ],
            steps: [
              {
                reasoning: "Is this a custom here? is polite and curious.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Other options are blunt or rude.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Is this a custom here?",
            commonErrors: ["Choosing a blunt or negative option."],
          },
        },
        {
          id: "langab-u6-l61q16",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List three universal basics that work in every culture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Universal basics",
                statement:
                  "Smile, please, thank you and respect work everywhere.",
              },
            ],
            steps: [
              {
                reasoning: "Any three correct basics.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "All are truly universal.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Smile / please / thank you / respect / listening (any three).",
            commonErrors: ["Listing culture-specific customs as universal."],
          },
        },
        {
          id: "langab-u6-l61q17",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "At a friend's house you are allergic to a dish they cooked for you. What should you do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Eat it anyway" },
              { id: "b", text: "Throw it away" },
              { id: "c", text: "Politely explain your allergy and thank them" },
              { id: "d", text: "Leave without eating" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Sensitive situations",
                statement: "Explain politely and thank the host.",
              },
            ],
            steps: [
              {
                reasoning: "Recognise the allergy makes eating unsafe.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Correct action: explain politely.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Thanking the host shows respect.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Politely explain your allergy and thank them",
            commonErrors: [
              "Being rude about the food or refusing to communicate.",
            ],
          },
        },
        {
          id: "langab-u6-l61q18",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a short guide for a new student arriving in your country.",
          parts: [
            {
              label: "a",
              prompt: "Two customs the student should know.",
              marks: 2,
            },
            { label: "b", prompt: "Two polite things to say or do.", marks: 2 },
            {
              label: "c",
              prompt: "One thing NOT to do, with a reason.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Cultural guide",
                statement: "Customs + polite behaviour + what to avoid.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Two real customs given.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Two polite behaviours given.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "One avoided behaviour with a reason.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 2 customs. (b) 2 polite behaviours. (c) 1 thing to avoid + reason.",
            commonErrors: ["No reason for what not to do."],
          },
        },
        {
          id: "langab-u6-l61q19",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why do cultures differ?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because of random accidents" },
              { id: "b", text: "History, geography, religion and family life" },
              { id: "c", text: "Only because of the weather" },
              { id: "d", text: "Because of school exams" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Culture origins",
                statement:
                  "Cultures grow from history, geography, religion and family life.",
              },
            ],
            steps: [
              {
                reasoning: "Cultures grow from shared history and environment.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** History, geography, religion and family life",
            commonErrors: ["Thinking cultures differ randomly."],
          },
        },
        {
          id: "langab-u6-l61q20",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A tradition is something people have done for a long time. Give one example of a tradition you know.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tradition example",
                statement: "A tradition is a long-standing custom.",
              },
            ],
            steps: [
              {
                reasoning: "Correct use of the word tradition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "One real tradition given.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Example is relevant and clear.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. family meals together / a national holiday / greeting elders respectfully.",
            commonErrors: ["Example is a one-time event, not a tradition."],
          },
        },
      ],
    },
    {
      id: "langab-u6-communication-culture",
      title: "Communicating across cultures",
      skill:
        "Use simple strategies to communicate respectfully with people from different cultures.",
      lesson: {
        sections: [
          {
            heading: "Simple strategies",
            body: 'Strategies that work everywhere: **speak clearly**, use **short sentences**, **smile**, say **please** and **thank you**, and **listen carefully**. If you do not understand, ask politely: "What does ... mean?" or "Could you repeat that, please?"',
          },
          {
            heading: "Body language and gestures",
            body: "Gestures differ between cultures. A gesture that is friendly in one place can be rude in another. Before copying a gesture, watch what others do or ask. When in doubt, keep your hands relaxed and smile.",
          },
          {
            heading: "Learning from each other",
            body: "Intercultural communication is a two-way street. Share your own culture too — explain your customs politely. The goal is mutual understanding, not just fitting in.",
          },
        ],
        keyFormulas: [
          {
            name: "Universal strategies",
            statement:
              "Clear speech + short sentences + smile + please + thank you.",
          },
          {
            name: "When unsure",
            statement: "Observe + ask politely before copying gestures.",
          },
        ],
        workedExample: {
          problem:
            "A classmate uses a gesture you do not understand. What do you do?",
          solution:
            "Watch others or ask politely: 'What does that gesture mean?' Do not copy it blindly.",
        },
      },
      questions: [
        {
          id: "langab-u6-l61q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which strategy works in ALL cultures?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copying every gesture" },
              { id: "b", text: "Speaking clearly and smiling" },
              { id: "c", text: "Refusing to try new foods" },
              { id: "d", text: "Speaking very fast" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Universal communication",
                statement: "Clear speech and a smile work everywhere.",
              },
            ],
            steps: [
              {
                reasoning: "Clear speech and smiling are universal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Speaking clearly and smiling",
            commonErrors: ["Copying gestures blindly."],
          },
        },
        {
          id: "langab-u6-l61q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three things you can do when you do not understand someone from another culture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Clarification strategies",
                statement: "Ask politely, observe, use simple words.",
              },
            ],
            steps: [
              {
                reasoning: "Any three correct strategies.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "All are polite and effective.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Ask 'What does X mean?' / ask them to repeat / use simple words / watch others (any three).",
            commonErrors: ["Pretending to understand."],
          },
        },
        {
          id: "langab-u6-l61q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the situation and write a respectful response.",
          extract: {
            title: "At a cultural festival",
            author: "Written for Akademik Space",
            text: "You visit a cultural festival. People are eating unusual food with their hands and dancing in a way you have never seen. Some foods look strange to you.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Festival respect",
                statement: "Observe, try politely, ask questions, enjoy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Recognise the food and dance are part of the culture.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Watch how others eat and try politely if you want.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ask polite questions about the food or dance.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Response is respectful and open-minded.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Observe, try politely, ask questions, enjoy the festival.",
            commonErrors: ["Making faces or refusing rudely."],
          },
        },
        {
          id: "langab-u6-l61q8",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a short essay: 'What I learned about communicating across cultures.'",
          parts: [
            {
              label: "a",
              prompt: "One cultural difference you noticed.",
              marks: 2,
            },
            { label: "b", prompt: "Two strategies you will use.", marks: 2 },
            {
              label: "c",
              prompt: "Why intercultural communication matters.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Intercultural reflection",
                statement: "Difference + strategies + importance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "One clear cultural difference.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Two correct strategies.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Reason for importance.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Difference. (b) 2 strategies. (c) Why it matters.",
            commonErrors: ["No personal example."],
          },
        },
        {
          id: "langab-u6-l61q21",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a good strategy when you do not understand someone from another culture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pretend you understand" },
              { id: "b", text: "Ask politely and use simple words" },
              { id: "c", text: "Speak louder and faster" },
              { id: "d", text: "Stop listening" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Clarification strategy",
                statement: "Ask politely and simplify — never pretend.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Polite questions and simple words help understanding.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Ask politely and use simple words",
            commonErrors: ["Pretending to understand."],
          },
        },
        {
          id: "langab-u6-l61q22",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three strategies for communicating clearly with someone from another culture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Clear communication",
                statement:
                  "Clear speech, short sentences, smile, please and thank you.",
              },
            ],
            steps: [
              {
                reasoning: "Any three correct strategies.",
                marks: 2,
                markCode: "M",
              },
              {
                reasoning: "All strategies are effective and polite.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Speak clearly / short sentences / smile / please / thank you / listen carefully (any three).",
            commonErrors: ["Strategies that are rude or confusing."],
          },
        },
        {
          id: "langab-u6-l61q23",
          difficulty: "core",
          totalMarks: 3,
          stem: "A gesture means OK in your culture but is rude in another. What should you do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Use it everywhere" },
              { id: "b", text: "Watch what locals do and ask before copying" },
              { id: "c", text: "Teach everyone it means OK" },
              { id: "d", text: "Never learn any gestures" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Gesture awareness",
                statement: "Observe or ask before copying a gesture.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The gesture means different things in different cultures.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Best action: observe locals and ask politely.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Watch what locals do and ask before copying",
            commonErrors: ["Copying the gesture blindly."],
          },
        },
        {
          id: "langab-u6-l61q24",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the situation and write what you would say or do.",
          extract: {
            title: "At the market",
            author: "Written for Akademik Space",
            text: "You are at a market. A seller speaks very fast and you cannot understand the price. You want to buy some fruit.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Market communication",
                statement:
                  "Ask to repeat or slow down; use numbers; be polite.",
              },
            ],
            steps: [
              {
                reasoning: "Asks the seller to repeat or speak more slowly.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Uses simple words or numbers for the price.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Response is polite and appropriate.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Communication solves the problem.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Ask to repeat/slower, clarify the price politely, thank the seller.",
            commonErrors: ["Giving up or getting angry."],
          },
        },
        {
          id: "langab-u6-l61q25",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which body language signal is safe and universal?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pointing at people" },
              { id: "b", text: "Making rude gestures" },
              { id: "c", text: "Smiling and keeping hands relaxed" },
              { id: "d", text: "Staring without blinking" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Safe body language",
                statement: "A relaxed smile is safe everywhere.",
              },
            ],
            steps: [
              {
                reasoning: "Smiling and relaxed hands are safe signals.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Smiling and keeping hands relaxed",
            commonErrors: ["Choosing a gesture that may be rude."],
          },
        },
        {
          id: "langab-u6-l61q26",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write two sentences you could say to show respect when someone explains their custom to you.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Respectful responses",
                statement:
                  "Thank and show interest when someone shares their culture.",
              },
            ],
            steps: [
              { reasoning: "Two sentences written.", marks: 2, markCode: "M" },
              {
                reasoning: "Both show respect or interest.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Sentences are appropriate and polite.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. Thank you for explaining. / That is interesting — is it a tradition here?",
            commonErrors: ["Sentences that sound bored or dismissive."],
          },
        },
        {
          id: "langab-u6-l61q27",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why is intercultural communication a two-way street?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "You must only adapt" },
              { id: "b", text: "Both sides share and learn from each other" },
              { id: "c", text: "You must travel abroad" },
              { id: "d", text: "Only one person talks" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Mutual learning",
                statement: "Intercultural communication works both ways.",
              },
            ],
            steps: [
              {
                reasoning: "Both sides share and learn.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Both sides share and learn from each other",
            commonErrors: ["Thinking only one side must adapt."],
          },
        },
        {
          id: "langab-u6-l61q28",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three polite phrases you can use when you do not understand.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Clarification phrases",
                statement: "Polite phrases help you ask for clarification.",
              },
            ],
            steps: [
              {
                reasoning: "Any three correct phrases.",
                marks: 2,
                markCode: "M",
              },
              { reasoning: "All phrases are polite.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "What does X mean? / Could you repeat that, please? / Sorry, I don't understand. (any three).",
            commonErrors: ["Phrases that sound rude or demanding."],
          },
        },
        {
          id: "langab-u6-l61q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "You accidentally use a gesture that offends someone. What is the best response?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Say it again louder" },
              { id: "b", text: "Apologise politely and learn what it means" },
              { id: "c", text: "Blame the other person" },
              { id: "d", text: "Ignore it and walk away" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Repairing mistakes",
                statement: "Apologise and learn from the mistake.",
              },
            ],
            steps: [
              {
                reasoning: "Recognise the gesture offended someone.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Best action: apologise politely.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Learning what it means prevents repeats.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Apologise politely and learn what it means",
            commonErrors: ["Denying the mistake or blaming others."],
          },
        },
        {
          id: "langab-u6-l61q30",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a short essay plan: How I communicate with people from other cultures.",
          parts: [
            {
              label: "a",
              prompt: "Two cultural differences you noticed.",
              marks: 2,
            },
            { label: "b", prompt: "Two strategies you use.", marks: 2 },
            { label: "c", prompt: "One thing you will improve.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Intercultural plan",
                statement: "Differences + strategies + improvement.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Two real differences given.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Two correct strategies given.",
                marks: 2,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "One realistic improvement given.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) 2 differences. (b) 2 strategies. (c) 1 improvement.",
            commonErrors: ["No concrete improvement idea."],
          },
        },
        {
          id: "langab-u6-l61q31",
          difficulty: "core",
          totalMarks: 2,
          stem: "What should you do BEFORE copying a gesture you see?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copy it immediately" },
              { id: "b", text: "Observe others or ask politely" },
              { id: "c", text: "Show it to everyone first" },
              { id: "d", text: "Forget about it" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Before copying",
                statement: "Observe or ask before copying gestures.",
              },
            ],
            steps: [
              {
                reasoning: "Observing or asking prevents rude mistakes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Observe others or ask politely",
            commonErrors: ["Copying without checking."],
          },
        },
        {
          id: "langab-u6-l61q32",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how listening carefully helps intercultural communication. Give one example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Listening skill",
                statement: "Listening shows respect and helps understanding.",
              },
            ],
            steps: [
              {
                reasoning: "Explains that listening shows respect.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Explains it improves understanding.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Gives one clear example.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Answer is accurate and clear.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Listening shows respect and helps you understand; e.g. you catch the meaning of a custom.",
            commonErrors: ["No example given."],
          },
        },
      ],
    },
  ],
};
