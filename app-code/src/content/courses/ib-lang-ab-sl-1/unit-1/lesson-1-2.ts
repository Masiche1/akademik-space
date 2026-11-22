import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "langab-u1-lesson-1-2",
  code: "1-2",
  title: "Numbers, dates, time and everyday expressions",
  goal: "I CAN say numbers, tell the time, give dates and use common everyday expressions.",
  standards: ["Speaking", "Listening", "Reading", "Vocabulary"],
  vocabulary: [
    { term: "One to ten", definition: "The first ten counting numbers: one, two, three, four, five, six, seven, eight, nine, ten." },
    { term: "Eleven to twenty", definition: "The next numbers: eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty." },
    { term: "O'clock", definition: "Used after a number for exact hours, e.g. three o'clock." },
    { term: "Today", definition: "The present day." },
    { term: "Tomorrow", definition: "The day after today." },
    { term: "Thank you", definition: "A polite expression of gratitude." },
  ],
  concepts: [
    {
      id: "langab-u1-numbers-time",
      title: "Numbers, dates and time",
      skill: "Count to twenty, tell the time and give simple dates.",
      lesson: {
        sections: [
          {
            heading: "Counting to twenty",
            body: "Learn the numbers **one** to **twenty**. Use them for ages, phone numbers and prices. Saying numbers aloud every day makes them automatic. Remember: thirteen, fourteen, ... nineteen end in -teen; thirty, forty, ... end in -ty.",
          },
          {
            heading: "Telling the time",
            body: "For exact hours say the number plus **o'clock**: \"It is three o'clock.\" For half past, say the hour plus **half past**: \"It is half past four.\" For minutes, say the hour then the minutes: \"It is four twenty.\"",
          },
          {
            heading: "Dates and days",
            body: "Days of the week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. Say dates with the day first: \"Monday, the fifth of May\" or simply \"the fifth of May\". Use **today**, **tomorrow** and **yesterday** for nearby days.",
          },
        ],
        keyFormulas: [
          { name: "Exact time", statement: "It is + number + o'clock (It is five o'clock)." },
          { name: "Half past", statement: "It is + hour + half past (It is half past two)." },
        ],
        workedExample: {
          problem: "Say the time shown on a clock at 7:30.",
          solution: "It is half past seven.",
        },
      },
      questions: [
        {
          id: "langab-u1-l12q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What number comes after seventeen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sixteen" },
              { id: "b", text: "Seventy" },
              { id: "c", text: "Eighteen" },
              { id: "d", text: "Nineteen" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Number order", statement: "The sequence is seventeen, eighteen, nineteen, twenty." },
            ],
            steps: [
              { reasoning: "Eighteen follows seventeen in counting order.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Eighteen",
            commonErrors: ["Confusing eighteen with eighty."],
          },
        },
        {
          id: "langab-u1-l12q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write these times in words: 9:00, 2:30, 6:15.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Telling time", statement: "Exact hours use o'clock; half hours use half past; minutes follow the hour." },
            ],
            steps: [
              { reasoning: "9:00 = nine o'clock.", marks: 1, markCode: "M" },
              { reasoning: "2:30 = half past two.", marks: 1, markCode: "M" },
              { reasoning: "6:15 = six fifteen (or a quarter past six if taught).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Nine o'clock; half past two; six fifteen.",
            commonErrors: ["Saying \"thirty past two\" — the correct form is half past two."],
          },
        },
        {
          id: "langab-u1-l12q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the schedule and answer the questions.",
          extract: {
            title: "School day",
            author: "Written for Akademik Space",
            text: "School starts at eight thirty. Break is at ten fifteen. Lunch is at twelve o'clock. School finishes at three thirty.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading times", statement: "Locate each time in the text and answer in the same form." },
            ],
            steps: [
              { reasoning: "School starts at eight thirty.", marks: 1, markCode: "M" },
              { reasoning: "Lunch is at twelve o'clock.", marks: 1, markCode: "M" },
              { reasoning: "School finishes at three thirty.", marks: 1, markCode: "A" },
              { reasoning: "All answers match the text exactly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Eight thirty; twelve o'clock; three thirty.",
            commonErrors: ["Mixing up morning and afternoon times."],
          },
        },
        {
          id: "langab-u1-l12q4",
          difficulty: "core",
          totalMarks: 5,
          stem: "Plan your school day using times.",
          parts: [
            { label: "a", prompt: "Write the time school starts for you.", marks: 1 },
            { label: "b", prompt: "Write the time of one lesson or break.", marks: 2 },
            { label: "c", prompt: "Write the time school finishes and one thing you do after school.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Personal timetable", statement: "A personal timetable uses correct time expressions and simple activity sentences." },
            ],
            steps: [
              { part: "a", reasoning: "A correct time expression, e.g. \"My school starts at eight o'clock.\"", marks: 1, markCode: "M" },
              { part: "b", reasoning: "A correct time for a lesson or break.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct linking of time and activity.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Finish time plus one simple activity sentence.", marks: 2, markCode: "M" },
            ],
            finalAnswer: "(a) Start time. (b) One lesson/break time. (c) Finish time + activity.",
            commonErrors: ["Writing times as digits only without a sentence."],
          },
        },
        {
          id: "langab-u1-l12q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What number comes after twelve?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thirteen" },
              { id: "b", text: "Two" },
              { id: "c", text: "Eleven" },
              { id: "d", text: "Twenty" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Number order", statement: "The counting sequence is eleven, twelve, thirteen, fourteen, fifteen." },
            ],
            steps: [
              { reasoning: "Thirteen follows twelve in counting order.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Thirteen",
            commonErrors: ["Confusing thirteen with thirty."],
          },
        },
        {
          id: "langab-u1-l12q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "How do you say 8:00 in words?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Eight o'clock" },
              { id: "b", text: "Half past eight" },
              { id: "c", text: "Eight thirty" },
              { id: "d", text: "Eight fifteen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Exact hours", statement: "Exact hours are said as the number plus 'o'clock'." },
            ],
            steps: [
              { reasoning: "8:00 is an exact hour, so 'eight o'clock' is correct.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Eight o'clock",
            commonErrors: ["Adding minutes that are not there, e.g. 'eight thirty'."],
          },
        },
        {
          id: "langab-u1-l12q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write these numbers in words: 5, 13, 20.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Number words", statement: "Numbers one to twenty have fixed English words; 13 and 20 are common errors." },
            ],
            steps: [
              { reasoning: "5 = five.", marks: 1, markCode: "M" },
              { reasoning: "13 = thirteen (not 'threeteen' or 'thirty').", marks: 1, markCode: "M" },
              { reasoning: "20 = twenty.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Five; thirteen; twenty.",
            commonErrors: ["Writing 'threeteen' instead of 'thirteen'."],
          },
        },
        {
          id: "langab-u1-l12q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "How do you say 4:30?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Four o'clock" },
              { id: "b", text: "Half past three" },
              { id: "c", text: "Half past four" },
              { id: "d", text: "Fourteen thirty" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Half past", statement: "30 minutes past the hour is 'half past' plus the hour." },
            ],
            steps: [
              { reasoning: "4:30 is half an hour after four, so 'half past four'.", marks: 1, markCode: "M" },
              { reasoning: "The other options give the wrong hour or the wrong time expression.", marks: 1, markCode: "A" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Half past four",
            commonErrors: ["Saying 'half past three' — the hour is the one before the minutes."],
          },
        },
        {
          id: "langab-u1-l12q13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the schedule and answer the two questions.",
          extract: {
            title: "My morning",
            author: "Written for Akademik Space",
            text: "I get up at seven o'clock. Breakfast is at seven thirty. I go to school at eight fifteen.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading times", statement: "Locate each time in the text and answer using the same time expression." },
            ],
            steps: [
              { reasoning: "Breakfast is at seven thirty — found in the second sentence.", marks: 1, markCode: "M" },
              { reasoning: "School starts at eight fifteen — found in the last sentence.", marks: 1, markCode: "M" },
              { reasoning: "Both answers are correct and complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Seven thirty; eight fifteen.",
            commonErrors: ["Mixing up 'get up' (seven o'clock) with 'breakfast' (seven thirty)."],
          },
        },
        {
          id: "langab-u1-l12q14",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which day comes after Wednesday?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thursday" },
              { id: "b", text: "Tuesday" },
              { id: "c", text: "Monday" },
              { id: "d", text: "Friday" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Days of the week", statement: "The order is Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday." },
            ],
            steps: [
              { reasoning: "Thursday follows Wednesday.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Thursday",
            commonErrors: ["Skipping Thursday and choosing Friday."],
          },
        },
        {
          id: "langab-u1-l12q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write your morning routine with three times.",
          parts: [
            { label: "a", prompt: "Write the time you get up.", marks: 1 },
            { label: "b", prompt: "Write the time you have breakfast.", marks: 1 },
            { label: "c", prompt: "Write the time you go to school or start lessons, plus one activity.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Daily routine times", statement: "A routine uses correct time expressions linked to activities." },
            ],
            steps: [
              { part: "a", reasoning: "A correct time, e.g. 'I get up at seven o'clock.'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "A correct breakfast time, e.g. 'I have breakfast at seven thirty.'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct school time plus one simple activity sentence.", marks: 2, markCode: "M" },
            ],
            finalAnswer: "(a) Wake-up time. (b) Breakfast time. (c) School time + activity.",
            commonErrors: ["Giving times without saying what happens at that time."],
          },
        },
        {
          id: "langab-u1-l12q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which number is written correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Forteen" },
              { id: "b", text: "Forty" },
              { id: "c", text: "Fourteen" },
              { id: "d", text: "Fourty" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "-teen vs -ty", statement: "-teen numbers end in '-teen' (fourteen); -ty numbers end in '-ty' (forty)." },
            ],
            steps: [
              { reasoning: "'Forty' is the correct spelling of the -ty number; 'fourty' is a common error.", marks: 1, markCode: "M" },
              { reasoning: "'Fourteen' and 'forteen' are misspellings of different numbers.", marks: 1, markCode: "A" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Forty",
            commonErrors: ["Writing 'fourty' — the u is dropped in 'forty'."],
          },
        },
        {
          id: "langab-u1-l12q17",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Plan a birthday party schedule for your friend.",
          parts: [
            { label: "a", prompt: "Write the day and date of the party.", marks: 2 },
            { label: "b", prompt: "Write the time the party starts.", marks: 1 },
            { label: "c", prompt: "Write two activities with times (for example, food at five, games at six).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Event planning", statement: "An event plan gives day/date, start time and activities with times." },
            ],
            steps: [
              { part: "a", reasoning: "Correct day and date, e.g. 'on Saturday, the tenth of May.'", marks: 2, markCode: "M" },
              { part: "b", reasoning: "A correct time, e.g. 'at four o'clock.'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Two activities each linked to a correct time.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Day + date. (b) Start time. (c) Two timed activities.",
            commonErrors: ["Writing the month before the day number in a confusing way."],
          },
        },
        {
          id: "langab-u1-l12q18",
          difficulty: "core",
          totalMarks: 3,
          stem: "What does 'half past ten' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "9:30" },
              { id: "b", text: "10:30" },
              { id: "c", text: "10:00" },
              { id: "d", text: "10:15" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Half past", statement: "'Half past' the hour means 30 minutes past that hour." },
            ],
            steps: [
              { reasoning: "Half past ten = ten thirty = 10:30.", marks: 1, markCode: "M" },
              { reasoning: "15 minutes would be 'quarter past', not 'half past'.", marks: 1, markCode: "A" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 10:30",
            commonErrors: ["Thinking 'half past' means 15 minutes."],
          },
        },
        {
          id: "langab-u1-l12q19",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a short message to a friend telling them your weekend plan.",
          parts: [
            { label: "a", prompt: "Say what you are doing on Saturday and the time.", marks: 2 },
            { label: "b", prompt: "Say what you are doing on Sunday and the time.", marks: 2 },
            { label: "c", prompt: "End the message politely.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Weekend plans", statement: "Plans name the day, the activity and the time in simple sentences." },
            ],
            steps: [
              { part: "a", reasoning: "Saturday activity with a correct time, e.g. 'On Saturday I play football at ten o'clock.'", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Sunday activity with a correct time.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Polite ending such as 'See you!' or 'Write back soon.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Saturday + time. (b) Sunday + time. (c) Polite close.",
            commonErrors: ["Giving an activity without a time."],
          },
        },
        {
          id: "langab-u1-l12q20",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Make a mini timetable for Saturday with three activities and their times.",
          parts: [
            { label: "a", prompt: "Morning activity with a time.", marks: 1 },
            { label: "b", prompt: "Afternoon activity with a time.", marks: 1 },
            { label: "c", prompt: "Evening activity with a time, in full sentences.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Timetable writing", statement: "A timetable lists activities in order with correct time expressions." },
            ],
            steps: [
              { part: "a", reasoning: "A morning activity with a correct time, e.g. 'I have breakfast at nine o'clock.'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "An afternoon activity with a correct time.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "An evening activity with a correct time in a full sentence.", marks: 2, markCode: "M" },
            ],
            finalAnswer: "(a) Morning + time. (b) Afternoon + time. (c) Evening + time.",
            commonErrors: ["Writing times as digits only, e.g. '9:00', without words or a sentence."],
          },
        },
      ],
    },
    {
      id: "langab-u1-everyday-expressions",
      title: "Everyday expressions and dates",
      skill: "Use polite expressions and give dates and days in simple sentences.",
      lesson: {
        sections: [
          {
            heading: "Polite expressions",
            body: "Everyday politeness: **Please**, **Thank you**, **You're welcome**, **Excuse me**, **Sorry**. Use **Please** when asking for something, **Thank you** when receiving, and **You're welcome** as the reply. These small phrases make communication friendly.",
          },
          {
            heading: "Days and months",
            body: "Days: Monday to Sunday. Months: January, February, March, April, May, June, July, August, September, October, November, December. Give a date like \"the third of June\" — say the day number first, then the month.",
          },
          {
            heading: "Near and far time words",
            body: "Use **today**, **tomorrow**, **yesterday**, **this week**, **next week** and **last week** to place events in time. Example: \"My birthday is next week.\" / \"We had a test yesterday.\"",
          },
        ],
        keyFormulas: [
          { name: "Dates", statement: "the + number + of + month (the fifth of May)." },
          { name: "Polite requests", statement: "Please + request -> Thank you -> You're welcome." },
        ],
        workedExample: {
          problem: "Say the date 14 February politely.",
          solution: "The fourteenth of February. (Or simply: February the fourteenth.)",
        },
      },
      questions: [
        {
          id: "langab-u1-l12q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What do you say when someone gives you something?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Please" },
              { id: "b", text: "Goodbye" },
              { id: "c", text: "Thank you" },
              { id: "d", text: "Sorry" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polite responses", statement: "Thank you expresses gratitude; you're welcome replies to thanks." },
            ],
            steps: [
              { reasoning: "\"Thank you\" is the standard expression of thanks.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Thank you",
            commonErrors: ["Saying please after receiving — please is used when asking."],
          },
        },
        {
          id: "langab-u1-l12q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write the days of the week in order, starting with Monday.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Days of the week", statement: "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday." },
            ],
            steps: [
              { reasoning: "First four days in order: Monday, Tuesday, Wednesday, Thursday.", marks: 1, markCode: "M" },
              { reasoning: "Last three days: Friday, Saturday, Sunday.", marks: 1, markCode: "M" },
              { reasoning: "All seven days correct and in order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.",
            commonErrors: ["Swapping Saturday and Sunday."],
          },
        },
        {
          id: "langab-u1-l12q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the invitation and answer the questions.",
          extract: {
            title: "Party invitation",
            author: "Written for Akademik Space",
            text: "You are invited to a party on Saturday, the twenty-first of June, at half past five. Please come! Thank you.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading an invitation", statement: "Identify the day, date and time given in the text." },
            ],
            steps: [
              { reasoning: "The day is Saturday.", marks: 1, markCode: "M" },
              { reasoning: "The date is the twenty-first of June.", marks: 1, markCode: "M" },
              { reasoning: "The time is half past five.", marks: 1, markCode: "A" },
              { reasoning: "All three details correctly located.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Saturday, the twenty-first of June, half past five.",
            commonErrors: ["Reading twenty-first as twenty-one."],
          },
        },
        {
          id: "langab-u1-l12q8",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a short message inviting a friend to your birthday.",
          parts: [
            { label: "a", prompt: "Say when your birthday is (day and date).", marks: 2 },
            { label: "b", prompt: "Say the time of the party.", marks: 1 },
            { label: "c", prompt: "Add a polite ending.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Invitations", statement: "An invitation gives the event, day/date, time and a polite closing." },
            ],
            steps: [
              { part: "a", reasoning: "Correct day and date expression, e.g. \"on Saturday, the tenth of May.\"", marks: 2, markCode: "M" },
              { part: "b", reasoning: "A correct time expression, e.g. \"at four o'clock.\"", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Polite ending such as \"Please come!\" or \"I hope you can come.\"", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Friendly, appropriate tone.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Day + date. (b) Time. (c) Polite invitation ending.",
            commonErrors: ["Writing the date with the month first, e.g. \"May tenth\" in a confusing order."],
          },
        },
        {
          id: "langab-u1-l12q21",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What do you say when you want to ask for something politely?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Please" },
              { id: "b", text: "Sorry" },
              { id: "c", text: "Goodbye" },
              { id: "d", text: "Thank you" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polite requests", statement: "'Please' is used when asking for something; 'thank you' when receiving." },
            ],
            steps: [
              { reasoning: "'Please' softens a request.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Please",
            commonErrors: ["Using 'thank you' when asking instead of when receiving."],
          },
        },
        {
          id: "langab-u1-l12q22",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the usual reply to 'Thank you'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Please" },
              { id: "b", text: "Sorry" },
              { id: "c", text: "Excuse me" },
              { id: "d", text: "You're welcome" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Replies to thanks", statement: "'You're welcome' is the standard reply to 'thank you'." },
            ],
            steps: [
              { reasoning: "'You're welcome' answers thanks.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** You're welcome",
            commonErrors: ["Replying 'please', which is used when asking."],
          },
        },
        {
          id: "langab-u1-l12q23",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Complete the polite exchange: '___ you! (when asking) / Thank ___. / You're ___.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polite formula", statement: "The sequence is Please ... Thank you ... You're welcome." },
            ],
            steps: [
              { reasoning: "First gap: 'Please'.", marks: 1, markCode: "M" },
              { reasoning: "Second gap: 'you' — 'Thank you'.", marks: 1, markCode: "M" },
              { reasoning: "Third gap: 'welcome' — 'You're welcome'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Please; you; welcome.",
            commonErrors: ["Writing 'your welcome' — the correct form is 'you're welcome'."],
          },
        },
        {
          id: "langab-u1-l12q24",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "When do you say 'Excuse me'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "When you are angry" },
              { id: "b", text: "To get someone's attention politely" },
              { id: "c", text: "When you receive a gift" },
              { id: "d", text: "When you say goodbye" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Excuse me", statement: "'Excuse me' politely gets attention or apologises for a small interruption." },
            ],
            steps: [
              { reasoning: "'Excuse me' is used to get attention politely.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** To get someone's attention politely",
            commonErrors: ["Confusing 'excuse me' with 'sorry', which apologises for a mistake."],
          },
        },
        {
          id: "langab-u1-l12q25",
          difficulty: "core",
          totalMarks: 3,
          stem: "Read the message and answer the questions: what day, what date and what time is the party?",
          extract: {
            title: "Party message",
            author: "Written for Akademik Space",
            text: "Hi! Come to my party on Friday, the eighteenth of April, at half past six. Please come! Thanks, Mia.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading invitations", statement: "Find the day, date and time in the message before answering." },
            ],
            steps: [
              { reasoning: "The day is Friday.", marks: 1, markCode: "M" },
              { reasoning: "The date is the eighteenth of April.", marks: 1, markCode: "M" },
              { reasoning: "The time is half past six.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Friday; the eighteenth of April; half past six.",
            commonErrors: ["Reading 'eighteenth' as 'eighty'."],
          },
        },
        {
          id: "langab-u1-l12q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Which way of writing a date is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The fifth of May" },
              { id: "b", text: "Fifth May the" },
              { id: "c", text: "The May fifth" },
              { id: "d", text: "May the fifth" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Date formula", statement: "Dates are said 'the + number + of + month'." },
            ],
            steps: [
              { reasoning: "'The fifth of May' follows the correct formula.", marks: 1, markCode: "M" },
              { reasoning: "The other options put the month in the wrong place or miss 'of'.", marks: 1, markCode: "A" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** The fifth of May",
            commonErrors: ["Putting the month before 'of', e.g. 'the May fifth'."],
          },
        },
        {
          id: "langab-u1-l12q27",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a short invitation to a friend for a film night at your home.",
          parts: [
            { label: "a", prompt: "Say what the event is and on which day.", marks: 2 },
            { label: "b", prompt: "Give the date.", marks: 1 },
            { label: "c", prompt: "Give the time and a polite ending.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Invitations", statement: "An invitation gives the event, day/date, time and a polite closing." },
            ],
            steps: [
              { part: "a", reasoning: "Event and day in a correct sentence, e.g. 'I am having a film night on Saturday.'", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Correct date, e.g. 'on the twelfth of June.'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct time plus polite ending such as 'Please come!'", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Event + day. (b) Date. (c) Time + please come.",
            commonErrors: ["Forgetting the polite ending."],
          },
        },
        {
          id: "langab-u1-l12q28",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "It is Monday today. Which sentence uses a time word correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I am going to the cinema next week." },
              { id: "b", text: "I am going to the cinema tomorrows." },
              { id: "c", text: "I am going to the cinema last week." },
              { id: "d", text: "I am going to the cinema yesterday." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Time words", statement: "'Last week' is the past week, 'this week' is now, 'next week' is the coming week." },
            ],
            steps: [
              { reasoning: "A future plan needs 'next week'; 'last week' and 'yesterday' are past.", marks: 1, markCode: "M" },
              { reasoning: "'tomorrows' is not an English word.", marks: 1, markCode: "A" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** I am going to the cinema next week.",
            commonErrors: ["Using 'last week' for a future plan."],
          },
        },
        {
          id: "langab-u1-l12q29",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Write a message to a friend about a party at your house.",
          parts: [
            { label: "a", prompt: "Give the day and date.", marks: 2 },
            { label: "b", prompt: "Give the time.", marks: 1 },
            { label: "c", prompt: "Add 'Please come!' and end with thanks.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Party message", statement: "A party message gives day/date, time and a polite invitation." },
            ],
            steps: [
              { part: "a", reasoning: "Correct day and date, e.g. 'on Saturday, the second of August.'", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Correct time, e.g. 'at five o'clock.'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "'Please come!' plus a thanks closing such as 'I hope you can come!'", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Day + date. (b) Time. (c) Please come + thanks.",
            commonErrors: ["Writing the date as 'August second' without 'of'."],
          },
        },
        {
          id: "langab-u1-l12q30",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a short note that uses three different polite expressions and gives one date.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Polite note", statement: "A note combines please, thank you / you're welcome and a correct date." },
            ],
            steps: [
              { reasoning: "At least three different polite expressions used correctly (please, thank you, you're welcome, excuse me, sorry).", marks: 2, markCode: "M" },
              { reasoning: "One correct date is given, e.g. 'on Monday, the ninth of March.'", marks: 1, markCode: "M" },
              { reasoning: "The note reads naturally and politely.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A short polite note with three expressions and one date.",
            commonErrors: ["Using 'your welcome' instead of 'you're welcome'."],
          },
        },
        {
          id: "langab-u1-l12q31",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Which phrase would you NOT use politely?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Thank you" },
              { id: "b", text: "Shut up" },
              { id: "c", text: "You're welcome" },
              { id: "d", text: "Please" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Politeness", statement: "Polite expressions are thank you, please, you're welcome, excuse me and sorry." },
            ],
            steps: [
              { reasoning: "'Shut up' is rude; the other three are polite.", marks: 1, markCode: "M" },
              { reasoning: "The other three are standard polite expressions used every day.", marks: 1, markCode: "A" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Shut up",
            commonErrors: ["Thinking any short phrase is polite."],
          },
        },
        {
          id: "langab-u1-l12q32",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write a four-line note to your teacher about a school event.",
          parts: [
            { label: "a", prompt: "Line 1: greet your teacher.", marks: 1 },
            { label: "b", prompt: "Line 2: say the event and the day.", marks: 1 },
            { label: "c", prompt: "Line 3: give the date and time.", marks: 1 },
            { label: "d", prompt: "Line 4: end politely.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Notes to teachers", statement: "A note to a teacher has a greeting, the information, and a polite closing." },
            ],
            steps: [
              { part: "a", reasoning: "A greeting such as 'Dear teacher' or 'Hello,'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Event and day in a correct sentence.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Correct date and time together.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Polite closing such as 'Thank you' or 'See you then.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Greeting. (b) Event + day. (c) Date + time. (d) Polite close.",
            commonErrors: ["Writing the note without a greeting or a closing."],
          },
        },
      ],
    },
  ],
};
