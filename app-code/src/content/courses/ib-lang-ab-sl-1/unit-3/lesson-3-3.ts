import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "langab-u3-lesson-3-3",
  code: "3-3",
  title: "Basic intercultural awareness",
  goal: "I CAN recognise simple cultural differences in greetings, politeness and behaviour and respond with respect.",
  standards: ["Speaking", "Listening", "Culture"],
  vocabulary: [
    { term: "Culture", definition: "The customs, beliefs and ways of life of a group of people." },
    { term: "Greeting", definition: "A way of saying hello that differs between cultures." },
    { term: "Politeness", definition: "Behaviours that show respect for others." },
    { term: "Gesture", definition: "A movement of the hands or body used to communicate." },
    { term: "Respect", definition: "Showing that you value other people's ways." },
    { term: "Different", definition: "Not the same as what you are used to." },
  ],
  concepts: [
    {
      id: "langab-u3-culture-differences",
      title: "Cultural differences in communication",
      skill: "Recognise that greetings, politeness and gestures vary between cultures.",
      lesson: {
        sections: [
          {
            heading: "Greetings differ",
            body: "People greet each other differently around the world. Some shake hands, some bow, some kiss on the cheek, some just say hello. What is polite in one country may be strange in another. When you are unsure, a smile and a simple hello are always safe.",
          },
          {
            heading: "Politeness differs",
            body: "The idea of politeness is universal, but the rules differ. In some places you must be very formal with teachers or older people; in others people are relaxed and friendly quickly. Saying **please** and **thank you** is polite almost everywhere.",
          },
          {
            heading: "Gestures can mislead",
            body: "Gestures mean different things in different cultures. A gesture that is friendly in one country can be rude in another. If you do not understand a gesture, ask politely or simply smile — do not copy it blindly.",
          },
        ],
        keyFormulas: [
          { name: "Safe basics", statement: "Smile + hello + please + thank you work almost everywhere." },
          { name: "When unsure", statement: "Ask politely or observe before copying." },
        ],
        workedExample: {
          problem: "Someone greets you with a bow. What should you do?",
          solution: "Smile and return a small bow or a handshake — observe and follow their lead politely.",
        },
      },
      questions: [
        {
          id: "langab-u3-l33q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Why do greetings differ between cultures?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because some people are rude" },
              { id: "b", text: "Because customs and ways of life differ" },
              { id: "c", text: "Because language is hard" },
              { id: "d", text: "Because weather changes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Cultural variation", statement: "Different customs produce different greetings and politeness rules." },
            ],
            steps: [
              { reasoning: "Greetings reflect each culture's customs.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Because customs and ways of life differ",
            commonErrors: ["Judging other greetings as wrong or rude."],
          },
        },
        {
          id: "langab-u3-l33q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Name three greetings used in different cultures around the world.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Greeting awareness", statement: "Handshake, bow and kiss on the cheek are common greetings." },
            ],
            steps: [
              { reasoning: "Any three correct greetings: handshake, bow, kiss on cheek, namaste, etc.", marks: 2, markCode: "M" },
              { reasoning: "All are real cultural greetings.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Handshake / bow / kiss on the cheek / namaste / hug (any three).",
            commonErrors: ["Listing invented greetings."],
          },
        },
        {
          id: "langab-u3-l33q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the situation and answer the questions.",
          extract: {
            title: "Meeting a new friend",
            author: "Written for Akademik Space",
            text: "You meet a student from Japan for the first time. They bow slightly and say hello. In your country people shake hands.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Respectful response", statement: "Follow the other person's greeting politely and stay open-minded." },
            ],
            steps: [
              { reasoning: "Bowing is a normal greeting in Japan.", marks: 1, markCode: "M" },
              { reasoning: "You can return a small bow or offer a handshake politely.", marks: 1, markCode: "M" },
              { reasoning: "Do not laugh or refuse — respect the difference.", marks: 1, markCode: "A" },
              { reasoning: "A polite, respectful response is given.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Return a small bow or handshake; be respectful.",
            commonErrors: ["Treating the bow as strange or wrong."],
          },
        },
        {
          id: "langab-u3-l33q4",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a short guide: 'How to be polite when you meet someone from another culture.'",
          parts: [
            { label: "a", prompt: "Give two safe greetings that work almost everywhere.", marks: 2 },
            { label: "b", prompt: "Give two polite words to always use.", marks: 1 },
            { label: "c", prompt: "Give one thing to do when you are unsure about a custom.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Intercultural politeness", statement: "Smile, greet simply, use please/thank you, and ask when unsure." },
            ],
            steps: [
              { part: "a", reasoning: "Two safe greetings, e.g. hello and a smile.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Please and thank you.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Ask politely or observe first.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Two safe greetings. (b) please/thank you. (c) Ask or observe.",
            commonErrors: ["Copying gestures without understanding them."],
          },
        },
        {
          id: "langab-u3-l33q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the safest greeting that works almost everywhere?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A complicated gesture" },
              { id: "b", text: "A smile and a simple \"hello\"" },
              { id: "c", text: "A loud whistle" },
              { id: "d", text: "A long handshake" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Safe greetings", statement: "Smile and hello work almost everywhere." },
            ],
            steps: [
              { reasoning: "A smile plus hello is universally safe.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A smile and a simple \"hello\"",
            commonErrors: ["Using a gesture you do not understand."],
          },
        },
        {
          id: "langab-u3-l33q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a gesture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of food" },
              { id: "b", text: "A movement of the hands or body used to communicate" },
              { id: "c", text: "A school subject" },
              { id: "d", text: "A kind of music" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Gesture", statement: "Gestures communicate through body movement." },
            ],
            steps: [
              { reasoning: "A gesture is a body movement that communicates.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A movement of the hands or body used to communicate",
            commonErrors: ["Confusing gestures with words."],
          },
        },
        {
          id: "langab-u3-l33q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In your country people shake hands, but a new friend greets you with a kiss on the cheek. What should you do?",
          extract: {
            title: "A different greeting",
            author: "Written for Akademik Space",
            text: "A new friend from France greets you with a kiss on both cheeks. In your country people only shake hands.",
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Laugh and refuse" },
              { id: "b", text: "Observe and politely follow their greeting" },
              { id: "c", text: "Ignore them completely" },
              { id: "d", text: "Shake hands very hard" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Respectful response", statement: "Follow the other person's greeting politely." },
            ],
            steps: [
              { reasoning: "The kiss is a normal greeting in France; follow their lead politely.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Observe and politely follow their greeting",
            commonErrors: ["Treating the greeting as strange or rude."],
          },
        },
        {
          id: "langab-u3-l33q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "You visit a school where students must stand when a teacher enters the room. Which behaviour is respectful?",
          extract: {
            title: "A formal school",
            author: "Written for Akademik Space",
            text: "In this school, students stand up when a teacher enters the classroom. You are a visitor.",
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stay sitting and keep talking" },
              { id: "b", text: "Stand up quietly like the other students" },
              { id: "c", text: "Leave the classroom" },
              { id: "d", text: "Make a joke about it" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Following customs", statement: "Respect the local custom even if it is new to you." },
            ],
            steps: [
              { reasoning: "Standing quietly follows the school custom respectfully.", marks: 1, markCode: "M" },
              { reasoning: "It shows respect for the teacher and the culture.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Stand up quietly like the other students",
            commonErrors: ["Ignoring the custom because it is different."],
          },
        },
        {
          id: "langab-u3-l33q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A hand gesture means \"OK\" in your country, but you learn it is rude in another culture. What should you do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Use it everywhere anyway" },
              { id: "b", text: "Learn what gestures mean before using them abroad" },
              { id: "c", text: "Use it only with friends" },
              { id: "d", text: "Never learn about gestures" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Gesture awareness", statement: "Gestures can mislead — learn meanings before using them." },
            ],
            steps: [
              { reasoning: "Checking gesture meanings avoids accidentally offending people.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Learn what gestures mean before using them abroad",
            commonErrors: ["Assuming gestures mean the same everywhere."],
          },
        },
        {
          id: "langab-u3-l33q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which of these is NOT a cultural difference?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How people greet each other" },
              { id: "b", text: "Rules of politeness" },
              { id: "c", text: "The spelling of your own name" },
              { id: "d", text: "The meaning of gestures" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cultural difference", statement: "Greetings, politeness and gestures vary between cultures." },
            ],
            steps: [
              { reasoning: "Your name's spelling is personal, not a cultural custom.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** The spelling of your own name",
            commonErrors: ["Thinking every difference is cultural."],
          },
        },
        {
          id: "langab-u3-l33q15",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three polite words that work in almost every culture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Universal politeness", statement: "Please, thank you and sorry are polite almost everywhere." },
            ],
            steps: [
              { reasoning: "Any three correct words, e.g. please, thank you, sorry, hello.", marks: 2, markCode: "M" },
              { reasoning: "All are genuinely universal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Please / thank you / sorry / hello (any three).",
            commonErrors: ["Listing culture-specific customs as universal."],
          },
        },
        {
          id: "langab-u3-l33q16",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the situation and write a respectful response.",
          extract: {
            title: "At a market",
            author: "Written for Akademik Space",
            text: "You are visiting a market in another country. A seller puts their hand on your shoulder and talks closely to you. This feels uncomfortable to you.",
          },
          parts: [
            { label: "a", prompt: "Explain why the seller might behave this way.", marks: 1 },
            { label: "b", prompt: "Write what you should NOT do.", marks: 1 },
            { label: "c", prompt: "Write a polite thing you can say or do instead.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Intercultural tolerance", statement: "Different is not wrong — stay calm and respectful." },
            ],
            steps: [
              { part: "a", reasoning: "In their culture close contact may be normal and friendly.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Do not push away roughly or insult the seller.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Polite response, e.g. smile, say thank you, step back gently.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) It may be normal there. (b) No rudeness. (c) Smile / thank you / step back politely.",
            commonErrors: ["Reacting with anger or mockery."],
          },
        },
        {
          id: "langab-u3-l33q17",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare greetings in two different cultures.",
          parts: [
            { label: "a", prompt: "Name a greeting used in Culture 1.", marks: 1 },
            { label: "b", prompt: "Name a greeting used in Culture 2.", marks: 1 },
            { label: "c", prompt: "Give one similarity between them.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparing cultures", statement: "Both greetings serve the same purpose: saying hello." },
            ],
            steps: [
              { part: "a", reasoning: "Correct greeting for culture 1, e.g. handshake.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct greeting for culture 2, e.g. bow.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Similarity: both are polite ways to greet.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) e.g. handshake. (b) e.g. bow. (c) Both show respect / say hello.",
            commonErrors: ["Saying one culture has no greeting."],
          },
        },
        {
          id: "langab-u3-l33q18",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write about a custom in a culture different from your own.",
          parts: [
            { label: "a", prompt: "Name the culture or country.", marks: 1 },
            { label: "b", prompt: "Describe one custom or fact.", marks: 2 },
            { label: "c", prompt: "Explain how a visitor can show respect for it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cultural description", statement: "Name + custom + respectful behaviour." },
            ],
            steps: [
              { part: "a", reasoning: "Culture or country named.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "One clear, accurate custom described.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Respectful action explained with correct sentences.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Country. (b) Custom. (c) How to show respect.",
            commonErrors: ["Describing the custom mockingly."],
          },
        },
        {
          id: "langab-u3-l33q19",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "What are two things you can do when you do not understand a custom?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "When unsure", statement: "Ask politely or observe before copying." },
            ],
            steps: [
              { reasoning: "Any two correct actions, e.g. ask politely, observe others first.", marks: 2, markCode: "M" },
              { reasoning: "Both are respectful strategies.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ask politely (\"What does this mean?\") / observe what others do / smile (any two).",
            commonErrors: ["Copying the custom blindly."],
          },
        },
        {
          id: "langab-u3-l33q20",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a short advice list for a new student who will meet people from many cultures.",
          parts: [
            { label: "a", prompt: "Give two safe behaviours that work everywhere.", marks: 2 },
            { label: "b", prompt: "Give one thing to avoid.", marks: 1 },
            { label: "c", prompt: "Give one thing to try.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Intercultural advice", statement: "Safe behaviours + one avoidance + one attempt." },
            ],
            steps: [
              { part: "a", reasoning: "Two correct safe behaviours, e.g. smile and say please.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "One correct thing to avoid, e.g. mocking customs.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "One correct thing to try, e.g. learn a greeting, with clear sentences.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Two safe behaviours. (b) One avoidance. (c) One thing to try.",
            commonErrors: ["Giving advice that is itself culturally specific."],
          },
        },
      ],
    },
    {
      id: "langab-u3-intercultural-skills",
      title: "Intercultural communication skills",
      skill: "Use simple strategies to communicate respectfully across cultures.",
      lesson: {
        sections: [
          {
            heading: "Be open-minded",
            body: "Different is not wrong. When someone does something unfamiliar, stay curious, not judgemental. Ask yourself: \"What does this mean in their culture?\" instead of \"Why are they so strange?\"",
          },
          {
            heading: "Simple strategies",
            body: "Use simple strategies that work everywhere: speak clearly, use short sentences, smile, and say please and thank you. If you do not understand, ask \"What does ... mean?\" — most people are happy to explain.",
          },
          {
            heading: "Learning from others",
            body: "Every culture has something to teach. Try new foods, learn a greeting, ask about traditions. Intercultural awareness is a skill you build over time — the IB Language ab initio course is a great place to start.",
          },
        ],
        keyFormulas: [
          { name: "Universal strategies", statement: "Clear speech + short sentences + smile + please + thank you." },
          { name: "Mindset", statement: "Different = interesting, not wrong." },
        ],
        workedExample: {
          problem: "A classmate eats food you have never tried and finds it delicious. What do you say?",
          solution: "That sounds interesting — can I try some? It looks delicious!",
        },
      },
      questions: [
        {
          id: "langab-u3-l33q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the best attitude when you meet a different custom?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Laugh at it" },
              { id: "b", text: "Stay curious and respectful" },
              { id: "c", text: "Ignore it completely" },
              { id: "d", text: "Copy it without thinking" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Open-mindedness", statement: "Curiosity and respect are the best responses to difference." },
            ],
            steps: [
              { reasoning: "Curiosity and respect are the right attitude.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Stay curious and respectful",
            commonErrors: ["Judging or mocking differences."],
          },
        },
        {
          id: "langab-u3-l33q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three universal politeness strategies that work in any culture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Universal politeness", statement: "Smile, please, thank you and clear speech work everywhere." },
            ],
            steps: [
              { reasoning: "Any three correct strategies.", marks: 2, markCode: "M" },
              { reasoning: "All are genuinely universal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Smile / say please / say thank you / speak clearly / use short sentences (any three).",
            commonErrors: ["Listing culture-specific customs as universal."],
          },
        },
        {
          id: "langab-u3-l33q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the situation and write a respectful response.",
          extract: {
            title: "At a family dinner",
            author: "Written for Akademik Space",
            text: "You are a guest at a friend's house. Before eating, everyone says a short prayer together. You did not expect this.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Respecting customs", statement: "Join in respectfully or wait quietly; do not mock or refuse rudely." },
            ],
            steps: [
              { reasoning: "Recognise the prayer is a family custom.", marks: 1, markCode: "M" },
              { reasoning: "Stand quietly and respectfully during the prayer.", marks: 1, markCode: "M" },
              { reasoning: "Afterwards, you may ask politely about the custom.", marks: 1, markCode: "A" },
              { reasoning: "Response shows respect throughout.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Stand quietly, respect the custom, maybe ask about it later.",
            commonErrors: ["Laughing or making jokes during the prayer."],
          },
        },
        {
          id: "langab-u3-l33q8",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a short reflection: 'One thing I learned about another culture this year.'",
          parts: [
            { label: "a", prompt: "Name the culture or country.", marks: 1 },
            { label: "b", prompt: "Describe one custom or fact you learned.", marks: 2 },
            { label: "c", prompt: "Say why it was interesting or useful.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cultural reflection", statement: "Name + fact + personal response." },
            ],
            steps: [
              { part: "a", reasoning: "Culture or country named.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "One clear custom or fact described.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Personal reason given with correct sentences.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Country. (b) Custom/fact. (c) Why interesting.",
            commonErrors: ["Writing only a name with no detail."],
          },
        },
        {
          id: "langab-u3-l33q21",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does \"open-minded\" mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quick to judge" },
              { id: "b", text: "Willing to accept and learn about different ways" },
              { id: "c", text: "Always agreeing" },
              { id: "d", text: "Knowing every culture" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Open-minded", statement: "Open-minded means accepting difference without judgement." },
            ],
            steps: [
              { reasoning: "Open-minded means accepting and learning about differences.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Willing to accept and learn about different ways",
            commonErrors: ["Confusing open-minded with agreeing with everything."],
          },
        },
        {
          id: "langab-u3-l33q22",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which is a universal strategy for communicating across cultures?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speak very fast" },
              { id: "b", text: "Use short, clear sentences" },
              { id: "c", text: "Use complicated words" },
              { id: "d", text: "Avoid eye contact" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Universal strategies", statement: "Clear speech and short sentences work everywhere." },
            ],
            steps: [
              { reasoning: "Short, clear sentences help everyone understand.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Use short, clear sentences",
            commonErrors: ["Choosing a strategy that only works in one culture."],
          },
        },
        {
          id: "langab-u3-l33q23",
          difficulty: "core",
          totalMarks: 2,
          stem: "A classmate wears traditional clothes from their country to school. What is the best comment?",
          extract: {
            title: "Traditional dress",
            author: "Written for Akademik Space",
            text: "A classmate wears beautiful traditional clothes from their home country to school today.",
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "\"That looks strange.\"" },
              { id: "b", text: "\"That looks interesting — tell me about it!\"" },
              { id: "c", text: "\"You can't wear that here.\"" },
              { id: "d", text: "Say nothing and stare" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Curious respect", statement: "Show interest and ask politely about differences." },
            ],
            steps: [
              { reasoning: "A curious, respectful comment shows interest in their culture.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** \"That looks interesting — tell me about it!\"",
            commonErrors: ["Judging or ignoring the difference."],
          },
        },
        {
          id: "langab-u3-l33q24",
          difficulty: "core",
          totalMarks: 3,
          stem: "You hear a word in another language that you do not understand. What is the best action?",
          extract: {
            title: "Not understanding",
            author: "Written for Akademik Space",
            text: "A friend says a word in their language that you do not know. They look at you and wait.",
          },
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Pretend you understand" },
              { id: "b", text: "Ask \"What does ... mean?\"" },
              { id: "c", text: "Change the subject" },
              { id: "d", text: "Say the word is wrong" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Asking for meaning", statement: "Most people are happy to explain — asking is respectful." },
            ],
            steps: [
              { reasoning: "Asking politely shows interest and honesty.", marks: 1, markCode: "M" },
              { reasoning: "Pretending or changing the subject avoids learning.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Ask \"What does ... mean?\"",
            commonErrors: ["Pretending to understand."],
          },
        },
        {
          id: "langab-u3-l33q25",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Your friend calls another culture's custom \"weird.\" What is the best response?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Agree with them" },
              { id: "b", text: "\"Maybe it just seems different — different isn't wrong.\"" },
              { id: "c", text: "Laugh loudly" },
              { id: "d", text: "Ignore it" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mindset", statement: "Different = interesting, not wrong." },
            ],
            steps: [
              { reasoning: "Challenging the judgement gently promotes intercultural respect.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** \"Maybe it just seems different — different isn't wrong.\"",
            commonErrors: ["Agreeing that difference is bad."],
          },
        },
        {
          id: "langab-u3-l33q26",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Complete the sentence: \"Different is not ___.\"",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "interesting" },
              { id: "b", text: "wrong" },
              { id: "c", text: "beautiful" },
              { id: "d", text: "possible" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Mindset", statement: "Difference is not a fault." },
            ],
            steps: [
              { reasoning: "The phrase is \"different is not wrong.\"", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** wrong",
            commonErrors: ["Thinking difference means something is bad."],
          },
        },
        {
          id: "langab-u3-l33q27",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "List three things you can do to show respect across cultures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Respectful behaviour", statement: "Smile, listen, use polite words, ask questions." },
            ],
            steps: [
              { reasoning: "Any three correct actions, e.g. smile, listen, say please, ask questions.", marks: 2, markCode: "M" },
              { reasoning: "All show genuine respect.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Smile / listen carefully / say please and thank you / ask polite questions (any three).",
            commonErrors: ["Listing actions that are actually rude."],
          },
        },
        {
          id: "langab-u3-l33q28",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the situation and write a respectful response.",
          extract: {
            title: "A new neighbour",
            author: "Written for Akademik Space",
            text: "Your new neighbour from another country invites you to dinner. Their home is very different from yours and they serve food you have never tried.",
          },
          parts: [
            { label: "a", prompt: "Write how you should feel about the invitation.", marks: 1 },
            { label: "b", prompt: "Write two polite things to do at the dinner.", marks: 2 },
            { label: "c", prompt: "Write one thing to avoid.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Respecting hospitality", statement: "Accept kindly, try new things, avoid refusing rudely." },
            ],
            steps: [
              { part: "a", reasoning: "Grateful / curious / happy to accept.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two correct actions, e.g. say thank you, try the food politely.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "One correct avoidance, e.g. do not refuse the food rudely.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Grateful/curious. (b) Thank them, try food. (c) Don't refuse rudely.",
            commonErrors: ["Refusing the food or the invitation rudely."],
          },
        },
        {
          id: "langab-u3-l33q29",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write three questions you can ask to learn about another culture.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Asking about culture", statement: "Polite questions show interest and build understanding." },
            ],
            steps: [
              { reasoning: "Any three correct questions, e.g. \"What do people do at festivals?\"", marks: 2, markCode: "M" },
              { reasoning: "All are polite and culturally appropriate.", marks: 1, markCode: "M" },
              { reasoning: "Questions are grammatically correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "E.g. \"What is a typical greeting?\" / \"What food do you eat?\" / \"What festivals do you have?\" (any three).",
            commonErrors: ["Asking rude or stereotyped questions."],
          },
        },
        {
          id: "langab-u3-l33q30",
          difficulty: "core",
          totalMarks: 5,
          stem: "Plan how you will learn about a culture you do not know.",
          parts: [
            { label: "a", prompt: "Choose a culture or country.", marks: 1 },
            { label: "b", prompt: "Write two facts or customs you want to find out.", marks: 2 },
            { label: "c", prompt: "Write one way you will practise or learn.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Learning about culture", statement: "Choose + research + practise." },
            ],
            steps: [
              { part: "a", reasoning: "A specific culture or country named.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two relevant customs or facts listed.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "One practical learning method, e.g. ask a friend, watch videos, try a greeting.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Culture. (b) Two facts. (c) Learning method.",
            commonErrors: ["Vague plan with no concrete steps."],
          },
        },
        {
          id: "langab-u3-l33q31",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write two polite phrases to use when you do not understand something.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Asking for clarification", statement: "\"Sorry, could you explain?\" and \"What does X mean?\" are polite." },
            ],
            steps: [
              { reasoning: "Two correct polite phrases.", marks: 2, markCode: "M" },
              { reasoning: "Both are suitable for conversation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Sorry, could you explain that? / What does ... mean? / Sorry, I don't understand. (any two).",
            commonErrors: ["Using demanding or rude phrasing."],
          },
        },
        {
          id: "langab-u3-l33q32",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a short reflection comparing your culture with one other culture.",
          parts: [
            { label: "a", prompt: "Name one custom in your culture.", marks: 1 },
            { label: "b", prompt: "Name a similar or different custom in another culture.", marks: 2 },
            { label: "c", prompt: "Say what you learned or how you will act differently.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Cultural comparison", statement: "Own custom + other custom + reflection." },
            ],
            steps: [
              { part: "a", reasoning: "One correct custom from the student's culture.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "A correct custom from another culture, similar or different.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Personal reflection with correct sentences.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) My custom. (b) Other custom. (c) Reflection.",
            commonErrors: ["Only listing customs with no comparison."],
          },
        },
      ],
    },
  ],
};
