import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "mla2-u2-lesson-2-1",
  code: "2-1",
  title: "Talking About Hobbies, Weather and Everyday Life",
  goal: "I CAN talk about my hobbies, describe the weather and describe my daily routine in simple spoken English.",
  standards: [
    "MYP Language Acquisition",
    "Criterion C: Speaking",
    "Criterion A: Listening",
    "Language conventions and accuracy",
  ],
  vocabulary: [
    { term: "Hobby", definition: "An activity you enjoy doing in your free time." },
    { term: "Weather", definition: "The conditions outside: sun, rain, wind, snow, cloudy." },
    { term: "Routine", definition: "What you do regularly, like getting up and going to school." },
    { term: "Free time", definition: "Time not spent at school or work." },
    { term: "Forecast", definition: "A prediction of future weather." },
  ],
  concepts: [
    {
      id: "mla2-u2-hobbies-weather",
      title: "Hobbies and weather talk",
      skill: "Speak about hobbies and describe weather using simple present tense.",
      lesson: {
        sections: [
          {
            heading: "Talking about hobbies",
            body: "Hobby questions: 'What do you like doing?', 'Do you have a hobby?', 'What sports do you play?'. Answer with present simple + -ing: 'I like playing football', 'She enjoys reading'. Name hobbies clearly: football, swimming, drawing, music, gaming, cycling.",
          },
          {
            heading: "Describing weather",
            body: "Use 'It is...' for weather: 'It is sunny', 'It is raining', 'It is cold'. For forecasts use 'will': 'It will rain tomorrow'. Weather words: sunny, cloudy, rainy, windy, snowy, hot, cold, warm. Small talk about weather is a friendly way to start a conversation in English.",
          },
          {
            heading: "Adding detail",
            body: "Make answers longer with 'because' and 'and': 'I like swimming because it is fun.' 'On Saturdays I play football and I meet my friends.' Two or three sentences is enough for MYP 2 — focus on accuracy, not length.",
          },
        ],
        keyFormulas: [
          { name: "Hobby pattern", statement: "I like + verb-ing; Do you like + verb-ing?" },
          { name: "Weather", statement: "It is + adjective; It will + verb for forecast" },
        ],
        workedExample: {
          problem: "Answer: 'What's the weather like today?' using 'cold' and 'rain'.",
          solution: "'It is cold and rainy today. It might rain later.' or 'It is cold today and it is raining.'",
        },
      },
      questions: [
        {
          id: "mla2-u2-hobbies-weather-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence correctly describes the weather?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The weather is sunny today." },
              { id: "b", text: "It is sunny today." },
              { id: "c", text: "Today sunny it is." },
              { id: "d", text: "Sunny is it today." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Weather expressions", statement: "English uses 'It is + adjective' for weather." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'It is sunny today' is the correct natural form.", working: "It is sunny today.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** It is sunny today.",
            commonErrors: ["Translating 'the weather is...' literally."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla2-u2-hobbies-weather-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Answer this question in one or two sentences: 'What do you like doing at weekends?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Hobby talk", statement: "like + verb-ing or like + noun; two linked sentences acceptable." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — names real weekend activities.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — correct grammar and punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'At weekends I like playing football with my friends.'",
            commonErrors: ["'I like play football' — missing -ing."],
            examinerNote: "Accept like + -ing or like + noun forms.",
          },
        },
        {
          id: "mla2-u2-hobbies-weather-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe today's weather in three sentences for a partner, then ask them about theirs.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Weather description + question", statement: "'It is...' statements plus a 'What's the weather like...?' question." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — three sentences describing weather with correct 'It is...'.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — correct vocabulary (sunny/rainy/windy/cold/hot).", marks: 1, markCode: "D" },
              { reasoning: "Criterion C: Speaking — asks the partner a correct weather question.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — question has correct word order and question mark.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Three 'It is...' sentences + 'What's the weather like where you are?'",
            commonErrors: ["Question in statement form ('You weather is what?')."],
            examinerNote: "Question must be a real question.",
          },
        },
        {
          id: "mla2-u2-hobbies-weather-q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Record (write) a short spoken-style introduction about your hobbies for a class 'All About Me' project.",
          parts: [
            { label: "a", prompt: "Write 3 sentences about your hobbies using 'like + -ing' or 'enjoy + -ing'.", marks: 3 },
            { label: "b", prompt: "Add one sentence about the weather where you live or your favourite season.", marks: 2 },
            { label: "c", prompt: "Read your work aloud-style: check every sentence has a capital, a full stop, and correct verb forms.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Spoken-style writing", statement: "Natural hobby/weather language with accurate grammar." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — three true hobby sentences.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — like/enjoy + -ing used correctly.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — accurate spelling and punctuation.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — weather/season sentence is accurate.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — correct 'It is...' weather structure.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — self-check completed with corrections.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — final version error-free.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "3 hobby sentences + 1 weather/season sentence + correct check.",
            commonErrors: ["'I like to playing' — wrong form.", "Weather sentence without 'It is'."],
            examinerNote: "Must sound natural when read aloud.",
          },
        },
        {
          id: "mla2-u2-hobbies-weather-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence correctly talks about a hobby?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I like play football." },
              { id: "b", text: "I like playing football." },
              { id: "c", text: "I like to playing football." },
              { id: "d", text: "I liking football." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "like + -ing", statement: "After 'like' for hobbies, use the -ing form: 'I like playing.'" },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'like playing' is the correct pattern.", working: "I like playing football.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** I like playing football.",
            commonErrors: ["'I like play' — missing -ing."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-hobbies-weather-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct question about the weather?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "How the weather is?" },
              { id: "b", text: "What's the weather like today?" },
              { id: "c", text: "What weather today?" },
              { id: "d", text: "The weather how?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Weather questions", statement: "'What's the weather like...?' is the standard weather question." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — correct question form and question mark.", working: "What's the weather like today?", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** What's the weather like today?",
            commonErrors: ["Calquing other languages' question order."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-hobbies-weather-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does 'It will rain tomorrow' express?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The weather right now" },
              { id: "b", text: "A prediction about tomorrow's weather" },
              { id: "c", text: "Something that already happened" },
              { id: "d", text: "A hobby" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Will for predictions", statement: "'Will' + verb expresses predictions or quick decisions about the future." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'will rain' predicts tomorrow's weather.", working: "prediction", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** A prediction about tomorrow's weather",
            commonErrors: ["Thinking 'will' describes the present."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla2-u2-hobbies-weather-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Answer this question in two sentences: 'Do you have a hobby? What is it?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Hobby talk", statement: "Answer yes/no questions fully, then add detail about the hobby." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — answers the yes/no question directly.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — names a real hobby with detail.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — correct grammar and punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Yes, I do. My hobby is drawing — I draw pictures of animals.'",
            commonErrors: ["Only answering 'yes' with no detail."],
            examinerNote: "Both parts of the question must be answered.",
          },
        },
        {
          id: "mla2-u2-hobbies-weather-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "My Weekend",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "At the weekend I usually play football for two hours on Saturday morning. In the afternoon I sometimes ride my bike with my friends. On Sunday I relax at home and read books.",
          },
          stem: "Listen to the text and give two numbers: (a) how many hours of football on Saturday morning (b) on how many days does the writer mention activities?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in spoken texts", statement: "Times and counts are key details in spoken English." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'football for two hours'.", working: "2", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — Saturday and Sunday = two days.", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2 (b) 2",
            commonErrors: ["Counting 'sometimes' as a day."],
            examinerNote: "Accept 2 and 2.",
          },
        },
        {
          id: "mla2-u2-hobbies-weather-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Weather Forecast",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Here is the weather forecast for this week. Today is sunny and warm, with a top temperature of twenty-two degrees. Tomorrow will be cloudy with some rain in the afternoon. On Thursday it will be windy, and Friday should be sunny again.",
          },
          stem: "Listen to the forecast and explain the weather for each day mentioned.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Forecast comprehension", statement: "Forecasts use 'will/should' for future weather; each day has its own prediction." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — today: sunny and warm, 22 degrees.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — tomorrow: cloudy with rain in the afternoon.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — Thursday windy, Friday sunny again.", marks: 1, markCode: "A" },
              { reasoning: "Criterion C: Speaking — all four days explained clearly.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Today sunny/warm; tomorrow cloudy with rain; Thursday windy; Friday sunny.",
            commonErrors: ["Saying it will rain all week — only tomorrow afternoon."],
            examinerNote: "All four days needed.",
          },
        },
        {
          id: "mla2-u2-hobbies-weather-q11",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a short 'About Me' paragraph for a class display about your hobbies and the weather in your country.",
          parts: [
            { label: "a", prompt: "Write two sentences about your hobbies using 'like + -ing' or 'enjoy + -ing'.", marks: 2 },
            { label: "b", prompt: "Write two sentences describing the typical weather where you live, using 'It is...' and 'It usually...'.", marks: 2 },
            { label: "c", prompt: "Check: correct verb forms, capitals, full stops and spelling.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Personal description", statement: "Natural hobby and weather language with accurate grammar." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — two true hobby sentences.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — like/enjoy + -ing correct.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — two accurate weather sentences.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — 'It is/usually' structure correct.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — self-check completed.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — final version error-free.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Two hobby sentences + two weather sentences + correct check.",
            commonErrors: ["'I like to playing' — wrong form.", "Weather sentence without 'It is'."],
            examinerNote: "Must sound natural when read aloud.",
          },
        },
        {
          id: "mla2-u2-hobbies-weather-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence correctly adds a reason for a hobby?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I like swimming because it is fun." },
              { id: "b", text: "I like swimming because fun." },
              { id: "c", text: "I like swimming, because it fun." },
              { id: "d", text: "Because it is fun I like swimming because." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "because + reason", statement: "'Because' introduces a complete reason clause with a subject and verb." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'because it is fun' is a complete clause.", working: "because it is fun", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** I like swimming because it is fun.",
            commonErrors: ["'because fun' — missing subject and verb."],
            examinerNote: "D1 for (a).",
          },
        },
        {
          id: "mla2-u2-hobbies-weather-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Holiday Weather",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Last summer we went to the beach for five days. The weather was perfect — sunny every day with temperatures around thirty degrees. We swam in the sea every morning.",
          },
          stem: "Listen to the text and give two numbers: (a) how many days the holiday lasted (b) the approximate temperature in degrees.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 30 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in spoken texts", statement: "Times and quantities are key details in spoken English." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'five days'.", working: "5", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'around thirty degrees'.", working: "30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 5 (b) 30",
            commonErrors: ["Answering 7 — 'every morning' is not the number of days."],
            examinerNote: "Accept 5 and 30.",
          },
        },
        {
          id: "mla2-u2-hobbies-weather-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word correctly completes: 'I enjoy reading ___ it helps me learn English.'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "but" },
              { id: "b", text: "because" },
              { id: "c", text: "so" },
              { id: "d", text: "or" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Linking words", statement: "'Because' introduces a reason." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'because' gives the reason for enjoying reading.", working: "because", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** because",
            commonErrors: ["'so' would need the clauses reversed."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-hobbies-weather-q15",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Hobby Club",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "The school hobby club meets every Wednesday after school. This term we have chess, art and coding clubs. You can join one or try all three.",
          },
          stem: "How many different clubs are offered this term? Give the number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in spoken texts", statement: "Counts are key details in spoken English." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — chess, art and coding = three clubs.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 1 — 'one or try all three' refers to joining, not the number of clubs."],
            examinerNote: "Accept 3 only.",
          },
        },
        {
          id: "mla2-u2-hobbies-weather-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a short dialogue (4 turns) between two friends talking about their hobbies and today's weather.",
          parts: [
            { label: "a", prompt: "Write two turns where each friend names a hobby with 'like + -ing'.", marks: 2 },
            { label: "b", prompt: "Write one turn describing the weather with 'It is...'.", marks: 2 },
            { label: "c", prompt: "Write one turn asking a weather or hobby question.", marks: 1 },
            { label: "d", prompt: "Check: capitals, full stops, question marks, correct verb forms.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Friend dialogue", statement: "Natural exchanges use hobby -ing forms, 'It is...' weather and correct punctuation." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — two hobby turns with like/enjoy + -ing.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — verb forms correct.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — weather turn uses 'It is...'.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — correct weather vocabulary.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — a real question with question mark.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — self-check completed.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion B: Reading — dialogue reads naturally end to end.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4-turn dialogue: 2 hobby turns + 1 weather turn + 1 question, all correct.",
            commonErrors: ["'I like play' errors.", "Question written as a statement."],
            examinerNote: "Must include both a hobby and weather element.",
          },
        },
      ],
    },
    {
      id: "mla2-u2-daily-routine",
      title: "Talking about your daily routine",
      skill: "Describe what you do every day using the present simple and time expressions.",
      lesson: {
        sections: [
          {
            heading: "A day in order",
            body: "To talk about your routine, learn the sequence: **get up → have breakfast → go to school → have lessons → come home → do homework → go to bed**. Use time words: **in the morning, at school, after school, in the evening, at night**. 'I get up at seven. I have breakfast at half past seven.'",
          },
          {
            heading: "Frequency words",
            body: "Add how often with **always, usually, sometimes, often, never**: 'I always have breakfast', 'I sometimes play football after school'. Place them before the main verb: 'I **usually** walk to school' (not 'I walk usually to school').",
          },
          {
            heading: "Questions about routines",
            body: "Ask: 'What time do you get up?', 'What do you do after school?', 'Do you walk or take the bus to school?'. Answer in full sentences: 'I get up at seven o'clock. After school I do my homework and play with my friends.'",
          },
        ],
        keyFormulas: [
          { name: "Routine sequence", statement: "get up → breakfast → school → lessons → home → homework → bed" },
          { name: "Frequency position", statement: "Subject + frequency word + main verb" },
        ],
        workedExample: {
          problem: "Write two sentences about your morning routine.",
          solution: "'I usually get up at seven o'clock. I have breakfast with my family at half past seven.'",
        },
      },
      questions: [
        {
          id: "mla2-u2-daily-routine-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence correctly uses a frequency word?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I walk usually to school." },
              { id: "b", text: "I usually walk to school." },
              { id: "c", text: "Usually I to school walk." },
              { id: "d", text: "I walk to usually school." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Frequency adverb position", statement: "Frequency words go before the main verb: 'I usually walk.'" },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'usually' before 'walk' is correct.", working: "I usually walk", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** I usually walk to school.",
            commonErrors: ["Putting 'usually' at the end or middle incorrectly."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-daily-routine-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write what you do 'after school' in one sentence using the present simple.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Routine description", statement: "Present simple + time phrase 'after school'." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — a true after-school activity.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — correct grammar and punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'After school I do my homework and play football.'",
            commonErrors: ["Using past tense ('I played') — routine needs present simple."],
            examinerNote: "Must use present simple.",
          },
        },
        {
          id: "mla2-u2-daily-routine-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "A Day with Tom",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Tom's school day starts early. He gets up at six thirty and catches the bus at seven. School finishes at three fifteen. He usually plays football for an hour, then does his homework. He goes to bed at nine thirty.",
          },
          stem: "Answer three questions about Tom's routine: What time does he get up? What does he do after school? What time does he go to bed?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Routine comprehension", statement: "Times and activities are located in specific sentences." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — gets up at six thirty.", working: "six thirty", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — plays football then does homework.", working: "football then homework", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — goes to bed at nine thirty.", working: "nine thirty", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — all three answers given clearly.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "6:30; football then homework; 9:30.",
            commonErrors: ["Confusing 'catches the bus at seven' with getting up time."],
            examinerNote: "Times must be exact.",
          },
        },
        {
          id: "mla2-u2-daily-routine-q4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write about your own daily routine for a class 'A Day in My Life' project.",
          parts: [
            { label: "a", prompt: "Write four sentences in time order (morning to night).", marks: 3 },
            { label: "b", prompt: "Use at least two frequency words (always/usually/sometimes/never).", marks: 2 },
            { label: "c", prompt: "Check: every sentence has a capital, a full stop, correct verb form and correct frequency-word position.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Routine writing", statement: "Present simple + time order + frequency words in correct position." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — four sentences in logical time order.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct present simple throughout.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — accurate spelling and punctuation.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — two frequency words used correctly.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — frequency words in correct position (before main verb).", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — self-check identifies and fixes errors.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — final version is clear and readable.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Four ordered sentences + two frequency words + correct final version.",
            commonErrors: ["Frequency word at end of sentence.", "Past tense used for routine."],
            examinerNote: "Must read as a coherent routine.",
          },
        },
        {
          id: "mla2-u2-daily-routine-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence correctly uses a frequency word?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I never am late." },
              { id: "b", text: "I am never late." },
              { id: "c", text: "Never I am late." },
              { id: "d", text: "I am late never." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Frequency word position", statement: "Frequency words go after 'am/is/are' but before the main verb." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'am never late' has correct position.", working: "I am never late.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** I am never late.",
            commonErrors: ["Putting 'never' before 'am'."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-daily-routine-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What do you call the activities you do every day, like getting up and going to school?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A holiday" },
              { id: "b", text: "A routine" },
              { id: "c", text: "A dream" },
              { id: "d", text: "A party" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Routine", statement: "A routine is what you do regularly, every day or every week." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — daily regular activities = routine.", working: "a routine", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A routine",
            commonErrors: ["Choosing 'holiday' — that is occasional, not daily."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u2-daily-routine-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which time expression fits: 'I do my homework ___ school' (meaning after the school day ends)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "in the morning" },
              { id: "b", text: "after school" },
              { id: "c", text: "at night" },
              { id: "d", text: "last week" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Time expressions", statement: "'After school' means in the time following the school day." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'after school' matches the meaning.", working: "after school", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** after school",
            commonErrors: ["Choosing 'at night' — that is later in the evening."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-daily-routine-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Answer this question in two sentences: 'What do you do in the morning before school?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Routine description", statement: "Present simple + morning activities + time expressions." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — describes real morning activities.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — two linked sentences or clear detail.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — correct present simple and punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'I get up at seven. I have breakfast with my family.'",
            commonErrors: ["Using past tense for a routine."],
            examinerNote: "Must use present simple.",
          },
        },
        {
          id: "mla2-u2-daily-routine-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Anna's School Day",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Anna gets up at half past six. She has breakfast at seven and leaves for school at eight. Her lessons start at nine and finish at three fifteen. She does her homework for one hour every evening.",
          },
          stem: "Listen to the text and give two numbers: (a) the hour Anna gets up (b) how long she does homework each evening.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
              { label: "b", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in spoken texts", statement: "Times and durations are key details in spoken English." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'half past six' → hour 6.", working: "6", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'for one hour'.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 6 (b) 1",
            commonErrors: ["Answering 30 for (a) — 'half past six' means 6:30, hour is 6."],
            examinerNote: "Accept 6 and 1.",
          },
        },
        {
          id: "mla2-u2-daily-routine-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "A Day with Priya",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Priya is a doctor. She usually gets up at five thirty in the morning. She has breakfast quickly, then drives to the hospital. She sees patients all day and finishes work at six in the evening. On Tuesdays she does not work — she spends the day with her family.",
          },
          stem: "Listen to the text and explain Priya's routine: when she gets up, what she does at work, and what is special about Tuesday.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Routine comprehension", statement: "Times, activities and exceptions must all be caught in spoken text." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — gets up at five thirty.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — sees patients all day; finishes at six.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — Tuesday is her day off with family.", marks: 1, markCode: "A" },
              { reasoning: "Criterion C: Speaking — routine described clearly and completely.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Up at 5:30; doctor seeing patients, finishes at 6; Tuesday off with family.",
            commonErrors: ["Missing that Tuesday is different."],
            examinerNote: "All three parts needed.",
          },
        },
        {
          id: "mla2-u2-daily-routine-q11",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a 'typical school day' timetable description for a classmate who has just arrived from another country.",
          parts: [
            { label: "a", prompt: "Write four sentences in time order covering morning to evening.", marks: 2 },
            { label: "b", prompt: "Use at least two frequency words (always/usually/sometimes/never) correctly.", marks: 2 },
            { label: "c", prompt: "Check: present simple throughout, correct frequency-word position, capitals and full stops.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Routine writing", statement: "Present simple + time order + frequency words in correct position." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — four sentences in logical time order.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — activities described clearly.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — two frequency words used.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — frequency words in correct position.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — self-check completed.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — final version reads clearly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Four ordered routine sentences + two frequency words + correct check.",
            commonErrors: ["Frequency word at end of sentence.", "Past tense used."],
            examinerNote: "Must read as a coherent routine.",
          },
        },
        {
          id: "mla2-u2-daily-routine-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which question correctly asks about a routine?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What time you get up?" },
              { id: "b", text: "What time do you get up?" },
              { id: "c", text: "You get up what time?" },
              { id: "d", text: "What time get up you?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Routine questions", statement: "'What time do you + verb?' is the correct question pattern." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — do + subject + base verb order is correct.", working: "What time do you get up?", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** What time do you get up?",
            commonErrors: ["Missing 'do' or wrong word order."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-daily-routine-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Leo's Evenings",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "After school Leo usually plays football for forty minutes. Then he does his homework for about thirty minutes. In the evening he watches TV or plays on his computer until nine o'clock.",
          },
          stem: "Listen to the text and give two numbers: (a) how many minutes of football (b) the hour he stops his evening activities.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 40 },
              { label: "b", answer: 9 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in spoken texts", statement: "Times and durations are key details in spoken English." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — 'forty minutes'.", working: "40", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — 'until nine o'clock'.", working: "9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 40 (b) 9",
            commonErrors: ["Answering 30 — that is homework time, not football."],
            examinerNote: "Accept 40 and 9.",
          },
        },
        {
          id: "mla2-u2-daily-routine-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence puts the frequency word in the correct position?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I walk to school always." },
              { id: "b", text: "I always walk to school." },
              { id: "c", text: "Always I walk to school." },
              { id: "d", text: "I walk always to school." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Frequency word position", statement: "Frequency words go before the main verb." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'always walk' is correct order.", working: "I always walk", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** I always walk to school.",
            commonErrors: ["Putting 'always' at the end."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-daily-routine-q15",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "School Lunch",
            author: "Written for Akademik Space",
            source: "Listening practice",
            text: "Lunch at our school is at twelve thirty. The canteen serves hot food on Monday, Tuesday and Thursday. On Wednesday and Friday we have a cold lunch.",
          },
          stem: "On how many days does the canteen serve hot food? Give the number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in spoken texts", statement: "Counts are key details in spoken English." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — Monday, Tuesday and Thursday = three days.", working: "3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 5 — that is all school days."],
            examinerNote: "Accept 3 only.",
          },
        },
        {
          id: "mla2-u2-daily-routine-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a 'Day in the Life' description of a family member's or friend's routine for a school project.",
          parts: [
            { label: "a", prompt: "Write four sentences about their day in time order.", marks: 2 },
            { label: "b", prompt: "Include at least two frequency words and one time expression (in the morning/after school/evening).", marks: 2 },
            { label: "c", prompt: "Check: third-person -s on verbs (he/she gets up), correct frequency position, capitals and full stops.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Third-person routine", statement: "He/she + verb-s in present simple; frequency words before the main verb." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — four ordered sentences about a real person's day.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — activities clear and logical.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — two frequency words used.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — correct time expression used.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — third-person -s correct throughout.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — self-check completed.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — final version reads clearly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Four ordered sentences + frequency words + time expression + correct -s forms.",
            commonErrors: ["'He get up' — missing -s.", "First-person pronouns used by mistake."],
            examinerNote: "Must use he/she/they consistently.",
          },
        },
      ],
    },
  ],
};
