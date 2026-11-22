import type { Lesson } from "../../../types.ts";

export const lesson43: Lesson = {
  id: "langab-u4-lesson-4-3",
  code: "4-3",
  title: "Describing people, places and things",
  goal: "I CAN describe people, places and things using simple adjectives and there is/there are.",
  standards: ["Writing", "Speaking", "Reading", "Vocabulary"],
  vocabulary: [
    { term: "Adjective", definition: "A word that describes a noun: big, small, beautiful." },
    { term: "There is / there are", definition: "Used to say that something exists in a place." },
    { term: "Beautiful", definition: "Very nice to look at or experience." },
    { term: "Modern", definition: "New and of the present time." },
    { term: "Quiet", definition: "Making little noise; calm." },
    { term: "Crowded", definition: "Full of many people." },
  ],
  concepts: [
    {
      id: "langab-u4-describing-things",
      title: "Describing things and places",
      skill: "Describe objects and places with adjectives and there is/there are.",
      lesson: {
        sections: [
          {
            heading: "Adjectives for things",
            body: "Describe objects with simple adjectives: **big**, **small**, **new**, **old**, **beautiful**, **modern**, **interesting**, **expensive**, **cheap**, **colour** words (red, blue, green). Example: \"The car is new and red.\"",
          },
          {
            heading: "There is / there are",
            body: "Use **there is** for one thing and **there are** for more than one: \"There is a park near my house.\" / \"There are two banks in the city.\" This is the easiest way to describe what a place has.",
          },
          {
            heading: "Describing a place",
            body: "A place description: what it is, what it has, what it is like. Example: \"My town is small. There is a beautiful park and a modern library. The streets are quiet. I like my town because it is friendly.\"",
          },
        ],
        keyFormulas: [
          { name: "There is/are", statement: "There is + singular / There are + plural (There is a park / There are two banks)." },
          { name: "Place description", statement: "Place + is + adjectives + There is/are + things." },
        ],
        workedExample: {
          problem: "Describe your town in three sentences using there is/there are.",
          solution: "My town is small. There is a park and a library. There are three schools and one hospital.",
        },
      },
      questions: [
        {
          id: "langab-u4-l43q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Choose the correct form: ___ a big park in my town.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There is" },
              { id: "b", text: "There are" },
              { id: "c", text: "There have" },
              { id: "d", text: "There be" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "There is/are", statement: "There is for singular, there are for plural." },
            ],
            steps: [
              { reasoning: "A big park is singular, so there is.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** There is",
            commonErrors: ["Using there are with a singular noun."],
          },
        },
        {
          id: "langab-u4-l43q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three sentences describing your bedroom using there is/there are.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Room description", statement: "There is/are + noun phrases, with correct singular/plural." },
            ],
            steps: [
              { reasoning: "Correct use of there is for single items.", marks: 1, markCode: "M" },
              { reasoning: "Correct use of there are for multiple items.", marks: 1, markCode: "M" },
              { reasoning: "Three sentences in correct English.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "There is a bed... There are two chairs... etc.",
            commonErrors: ["Wrong is/are agreement."],
          },
        },
        {
          id: "langab-u4-l43q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the description and answer the questions.",
          extract: {
            title: "My city",
            author: "Written for Akademik Space",
            text: "I live in a big modern city. There is a beautiful park near my house and there are many restaurants. The city is very busy and crowded, but I like it because there is always something to do.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading descriptions", statement: "Find adjectives and there is/are details in the text." },
            ],
            steps: [
              { reasoning: "The city is big and modern.", marks: 1, markCode: "M" },
              { reasoning: "There is a beautiful park and many restaurants.", marks: 1, markCode: "M" },
              { reasoning: "The writer likes it because there is always something to do.", marks: 1, markCode: "A" },
              { reasoning: "All details from the text.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Big modern city; beautiful park + many restaurants; likes the activity.",
            commonErrors: ["Missing the reason the writer likes the city."],
          },
        },
        {
          id: "langab-u4-l43q4",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a description of your ideal room or house.",
          parts: [
            { label: "a", prompt: "Say what kind of place it is and two adjectives.", marks: 1 },
            { label: "b", prompt: "Describe three things in it with there is/there are.", marks: 2 },
            { label: "c", prompt: "Say why you like it in one sentence.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Ideal place description", statement: "Type + adjectives + there is/are details + reason." },
            ],
            steps: [
              { part: "a", reasoning: "Type and two correct adjectives.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Three correct there is/are sentences.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Clear reason in a full sentence.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Type + adjectives. (b) 3 there is/are sentences. (c) Reason.",
            commonErrors: ["Using there is with plurals."],
          },
        },
        {
          id: "langab-u4-l43q9",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Choose the correct form: ___ two banks in the city.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There are" },
              { id: "b", text: "It is" },
              { id: "c", text: "There is" },
              { id: "d", text: "There has" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "There is/are", statement: "There are for plural nouns." },
            ],
            steps: [
              { reasoning: "Two banks is plural, so there are.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** There are",
            commonErrors: ["Using there is with a plural noun."],
          },
        },
        {
          id: "langab-u4-l43q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which adjective describes a place as making little noise?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Crowded" },
              { id: "b", text: "Modern" },
              { id: "c", text: "Expensive" },
              { id: "d", text: "Quiet" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Quiet", statement: "Quiet = making little noise; calm." },
            ],
            steps: [
              { reasoning: "Quiet means little noise.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Quiet",
            commonErrors: ["Confusing quiet with crowded."],
          },
        },
        {
          id: "langab-u4-l43q11",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three sentences describing your classroom using there is/there are.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Room description", statement: "There is/are + noun, correct agreement." },
            ],
            steps: [
              { reasoning: "Correct there is for single items.", marks: 1, markCode: "M" },
              { reasoning: "Correct there are for plural items.", marks: 1, markCode: "M" },
              { reasoning: "Three sentences in correct English.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "There is a teacher's desk... There are twenty chairs... etc.",
            commonErrors: ["Wrong is/are agreement."],
          },
        },
        {
          id: "langab-u4-l43q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Choose the correct sentence.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There are three students in the class." },
              { id: "b", text: "There has three students in the class." },
              { id: "c", text: "There is three students in the class." },
              { id: "d", text: "There be three students in the class." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "There is/are", statement: "There are + plural noun." },
            ],
            steps: [
              { reasoning: "Three students is plural, so there are.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** There are three students in the class.",
            commonErrors: ["Using there is with plurals."],
          },
        },
        {
          id: "langab-u4-l43q13",
          difficulty: "core",
          totalMarks: 4,
          stem: "Correct the mistakes in these sentences.",
          extract: {
            title: "Description errors",
            author: "Written for Akademik Space",
            text: "1) There is many people in the park.\n2) The city is very crowdeded.\n3) There are a museum near my house.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Error correction", statement: "Fix there is/are agreement and adjective forms." },
            ],
            steps: [
              { reasoning: "many people is plural -> There are many people.", marks: 1, markCode: "M" },
              { reasoning: "crowdeded -> crowded.", marks: 1, markCode: "M" },
              { reasoning: "a museum is singular -> There is a museum.", marks: 1, markCode: "A" },
              { reasoning: "All three corrected correctly.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "There are many people in the park. / The city is very crowded. / There is a museum near my house.",
            commonErrors: ["Keeping wrong is/are or double -ed adjectives."],
          },
        },
        {
          id: "langab-u4-l43q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which adjective means 'full of many people'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quiet" },
              { id: "b", text: "Cheap" },
              { id: "c", text: "Crowded" },
              { id: "d", text: "Old" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Crowded", statement: "Crowded = full of many people." },
            ],
            steps: [
              { reasoning: "Crowded describes places full of people.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Crowded",
            commonErrors: ["Confusing crowded with quiet."],
          },
        },
        {
          id: "langab-u4-l43q15",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a description of your favourite place using there is/there are and adjectives.",
          parts: [
            { label: "a", prompt: "Say what the place is and two adjectives.", marks: 1 },
            { label: "b", prompt: "Write three there is/there are sentences about it.", marks: 2 },
            { label: "c", prompt: "Write two sentences about why you like it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Place description", statement: "Type + adjectives + there is/are + reason." },
            ],
            steps: [
              { part: "a", reasoning: "Place type and two correct adjectives.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Three correct there is/are sentences.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Two correct reason sentences.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Type + adjectives. (b) 3 there is/are sentences. (c) 2 reason sentences.",
            commonErrors: ["There is with plural nouns."],
          },
        },
        {
          id: "langab-u4-l43q16",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write the missing words: 1) There ___ a park near my house. 2) There ___ two banks in the city. 3) There ___ many students in my class.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "There is/are agreement", statement: "is for singular, are for plural." },
            ],
            steps: [
              { reasoning: "a park singular -> is.", marks: 1, markCode: "M" },
              { reasoning: "two banks plural -> are.", marks: 1, markCode: "M" },
              { reasoning: "many students plural -> are.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "is; are; are.",
            commonErrors: ["Using is with plural nouns."],
          },
        },
        {
          id: "langab-u4-l43q17",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence describes a place correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Beautiful is a beach there." },
              { id: "b", text: "There is a beautiful beach and a modern hotel." },
              { id: "c", text: "There are a beautiful beach." },
              { id: "d", text: "A beautiful beach there is two." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "There is/are", statement: "There is + singular noun phrase." },
            ],
            steps: [
              { reasoning: "A beautiful beach and a modern hotel are singular items joined by and -> there is is acceptable for the first; the sentence is natural.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** There is a beautiful beach and a modern hotel.",
            commonErrors: ["Using there are with singular nouns."],
          },
        },
        {
          id: "langab-u4-l43q18",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the text and answer the questions.",
          extract: {
            title: "My village",
            author: "Written for Akademik Space",
            text: "I live in a small quiet village. There is a church and a small shop. There are not many cars, so the streets are clean. I like my village because it is peaceful.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading descriptions", statement: "Find adjectives and there is/are details." },
            ],
            steps: [
              { reasoning: "The village is small and quiet.", marks: 1, markCode: "M" },
              { reasoning: "There is a church and a small shop; few cars.", marks: 1, markCode: "M" },
              { reasoning: "The writer likes it because it is peaceful.", marks: 1, markCode: "A" },
              { reasoning: "All details from the text.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Small quiet village; church + small shop, few cars; likes it because peaceful.",
            commonErrors: ["Missing the reason for liking the village."],
          },
        },
        {
          id: "langab-u4-l43q19",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which adjective describes something new and of the present time?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Quiet" },
              { id: "b", text: "Cheap" },
              { id: "c", text: "Modern" },
              { id: "d", text: "Old" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Modern", statement: "Modern = new, of the present time." },
            ],
            steps: [
              { reasoning: "Modern means new and current.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Modern",
            commonErrors: ["Confusing modern with old."],
          },
        },
        {
          id: "langab-u4-l43q20",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a description of your town or city in five sentences.",
          parts: [
            { label: "a", prompt: "Two sentences saying what it is like.", marks: 2 },
            { label: "b", prompt: "Two there is/there are sentences about places in it.", marks: 2 },
            { label: "c", prompt: "One sentence about whether you like it and why.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Town description", statement: "Adjectives + there is/are + opinion." },
            ],
            steps: [
              { part: "a", reasoning: "Two correct description sentences.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Two correct there is/are sentences.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "One correct opinion sentence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 2 description sentences. (b) 2 there is/are sentences. (c) 1 opinion sentence.",
            commonErrors: ["Wrong there is/are agreement."],
          },
        },
        {
          id: "langab-u4-l43q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence uses there is correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There is a big modern hospital in my city." },
              { id: "b", text: "There are a hospital in my city." },
              { id: "c", text: "There are a big modern hospital in my city." },
              { id: "d", text: "There is two hospitals in my city." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "There is/are", statement: "There is + singular, there are + plural." },
            ],
            steps: [
              { reasoning: "A hospital is singular, so there is.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** There is a big modern hospital in my city.",
            commonErrors: ["Ignoring singular/plural agreement."],
          },
        },
        {
          id: "langab-u4-l43q22",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Write three sentences about your house using there is/there are and adjectives.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "House description", statement: "There is/are + adjective + noun." },
            ],
            steps: [
              { reasoning: "First sentence with correct there is/are.", marks: 1, markCode: "M" },
              { reasoning: "Second sentence with correct there is/are.", marks: 1, markCode: "M" },
              { reasoning: "Third sentence with correct there is/are.", marks: 1, markCode: "A" },
              { reasoning: "Adjectives placed before nouns.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "There is a small garden... There are three bedrooms... etc.",
            commonErrors: ["Wrong is/are agreement or adjectives after nouns."],
          },
        },
        {
          id: "langab-u4-l43q23",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a description comparing two places you know (e.g. your town and another city).",
          parts: [
            { label: "a", prompt: "Describe place 1 with two adjectives and one there is/are sentence.", marks: 2 },
            { label: "b", prompt: "Describe place 2 the same way.", marks: 2 },
            { label: "c", prompt: "Write one sentence saying which you prefer and why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparative description", statement: "Parallel descriptions + preference reason." },
            ],
            steps: [
              { part: "a", reasoning: "Place 1 described correctly.", marks: 2, markCode: "M" },
              { part: "b", reasoning: "Place 2 described correctly.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Clear preference with a reason.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Place 1. (b) Place 2. (c) Preference + why.",
            commonErrors: ["Describing only one place or no reason."],
          },
        },
        {
          id: "langab-u4-l43q24",
          difficulty: "core",
          totalMarks: 2,
          stem: "What does 'There are many restaurants' tell you?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There are no restaurants." },
              { id: "b", text: "The restaurants are expensive." },
              { id: "c", text: "There is more than one restaurant." },
              { id: "d", text: "There is one restaurant." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "There are + plural", statement: "Indicates multiple things exist." },
            ],
            steps: [
              { reasoning: "Many restaurants = more than one.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** There is more than one restaurant.",
            commonErrors: ["Reading there are as singular."],
          },
        },
      ],
    },
    {
      id: "langab-u4-describing-people",
      title: "Describing people",
      skill: "Describe people's appearance and personality with simple adjectives and have/has.",
      lesson: {
        sections: [
          {
            heading: "Appearance words",
            body: "Appearance adjectives: **tall**, **short**, **thin**, **fat**, **young**, **old**, **beautiful**, **handsome**. Hair and eyes: **long/short hair**, **brown/black/blonde hair**, **blue/green/brown eyes**. Use **has/have**: \"She has long hair.\"",
          },
          {
            heading: "Personality words",
            body: "Personality describes character: **kind**, **friendly**, **funny**, **serious**, **shy**, **generous**, **hard-working**, **lazy**. Example: \"My best friend is kind and funny.\"",
          },
          {
            heading: "Combining descriptions",
            body: "Combine appearance and personality: \"My teacher is tall and has glasses. She is kind and patient.\" Keep it simple — two or three adjectives are enough for a good beginner description.",
          },
        ],
        keyFormulas: [
          { name: "Appearance", statement: "Subject + is + adjective; has + hair/eyes (She is tall; She has brown hair)." },
          { name: "Personality", statement: "Subject + is + personality adjective (He is kind and friendly)." },
        ],
        workedExample: {
          problem: "Describe a family member in three sentences.",
          solution: "My mother is tall and has brown hair. She is kind and friendly. She is a doctor.",
        },
      },
      questions: [
        {
          id: "langab-u4-l43q5",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which words describe personality, not appearance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tall and thin" },
              { id: "b", text: "Young and old" },
              { id: "c", text: "Kind and funny" },
              { id: "d", text: "Brown hair and blue eyes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Personality vs appearance", statement: "Personality = character (kind, funny); appearance = looks (tall, hair)." },
            ],
            steps: [
              { reasoning: "Kind and funny describe character.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Kind and funny",
            commonErrors: ["Mixing appearance words with personality words."],
          },
        },
        {
          id: "langab-u4-l43q6",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three sentences describing a family member (appearance and personality).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Family description", statement: "Use is/has + adjectives correctly." },
            ],
            steps: [
              { reasoning: "At least one appearance sentence with is/has.", marks: 1, markCode: "M" },
              { reasoning: "At least one personality sentence.", marks: 1, markCode: "M" },
              { reasoning: "Three sentences in correct English.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "My father is tall and has black hair. He is kind. etc.",
            commonErrors: ["Wrong verb form, e.g. 'She have'."],
          },
        },
        {
          id: "langab-u4-l43q7",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the description and answer the questions.",
          extract: {
            title: "My best friend",
            author: "Written for Akademik Space",
            text: "My best friend is called Ana. She is thirteen and she is short and thin. She has long black hair and brown eyes. She is very kind and funny. We like the same music.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading people descriptions", statement: "Find appearance and personality details." },
            ],
            steps: [
              { reasoning: "Ana is thirteen, short and thin.", marks: 1, markCode: "M" },
              { reasoning: "She has long black hair and brown eyes.", marks: 1, markCode: "M" },
              { reasoning: "She is kind and funny; they like the same music.", marks: 1, markCode: "A" },
              { reasoning: "All details correct.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "13, short, thin, long black hair, brown eyes, kind and funny.",
            commonErrors: ["Mixing up appearance and personality."],
          },
        },
        {
          id: "langab-u4-l43q8",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a description of a famous person or a family member.",
          parts: [
            { label: "a", prompt: "Give name and age or role.", marks: 1 },
            { label: "b", prompt: "Describe appearance with two details.", marks: 2 },
            { label: "c", prompt: "Describe personality with two adjectives and why.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Person description", statement: "Name/role + appearance + personality + reason." },
            ],
            steps: [
              { part: "a", reasoning: "Name and age/role given.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two correct appearance details.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Two personality adjectives with a reason.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Name/role. (b) Appearance. (c) Personality + why.",
            commonErrors: ["Only appearance, no personality."],
          },
        },
        {
          id: "langab-u4-l43q25",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which verb completes the sentence? 'She ___ long black hair.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "has" },
              { id: "b", text: "is" },
              { id: "c", text: "are" },
              { id: "d", text: "have" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "have/has", statement: "He/she/it + has; I/you/we/they + have." },
            ],
            steps: [
              { reasoning: "She takes has for hair.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** has",
            commonErrors: ["Using have with she."],
          },
        },
        {
          id: "langab-u4-l43q26",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which words describe appearance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hard-working and lazy" },
              { id: "b", text: "Kind and generous" },
              { id: "c", text: "Tall and thin" },
              { id: "d", text: "Funny and shy" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Appearance", statement: "Appearance = physical looks (tall, thin, hair, eyes)." },
            ],
            steps: [
              { reasoning: "Tall and thin describe looks; the others describe character.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Tall and thin",
            commonErrors: ["Mixing personality with appearance."],
          },
        },
        {
          id: "langab-u4-l43q27",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write three sentences describing a friend (appearance and personality).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Friend description", statement: "is/has + adjectives correctly used." },
            ],
            steps: [
              { reasoning: "At least one appearance sentence with is/has.", marks: 1, markCode: "M" },
              { reasoning: "At least one personality sentence.", marks: 1, markCode: "M" },
              { reasoning: "Three sentences in correct English.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "My friend is tall and has short hair. She is kind and funny. etc.",
            commonErrors: ["Wrong verb forms like 'She have'."],
          },
        },
        {
          id: "langab-u4-l43q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence correctly describes hair and eyes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She has long black hair and brown eyes." },
              { id: "b", text: "She is long black hair and brown eyes." },
              { id: "c", text: "She are long black hair." },
              { id: "d", text: "She has long black hairs and brown eyes." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "have for features", statement: "Use has/have for hair and eyes; hair is uncountable." },
            ],
            steps: [
              { reasoning: "She has + long black hair (no -s on hair) + brown eyes.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** She has long black hair and brown eyes.",
            commonErrors: ["Using is or pluralising hair."],
          },
        },
        {
          id: "langab-u4-l43q29",
          difficulty: "core",
          totalMarks: 4,
          stem: "Read the text and answer the questions.",
          extract: {
            title: "My teacher",
            author: "Written for Akademik Space",
            text: "My English teacher is called Mr Brown. He is tall and has grey hair and glasses. He is very kind and patient, but sometimes he is strict. We like his lessons because he explains things well.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Reading people descriptions", statement: "Find appearance, personality and reason details." },
            ],
            steps: [
              { reasoning: "Mr Brown is tall with grey hair and glasses.", marks: 1, markCode: "M" },
              { reasoning: "He is kind and patient but sometimes strict.", marks: 1, markCode: "M" },
              { reasoning: "Students like his lessons because he explains well.", marks: 1, markCode: "A" },
              { reasoning: "All details from the text.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Tall, grey hair, glasses; kind, patient, sometimes strict; liked for explaining well.",
            commonErrors: ["Missing the mixed personality detail (strict)."],
          },
        },
        {
          id: "langab-u4-l43q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which word describes personality?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Shy" },
              { id: "b", text: "Thin" },
              { id: "c", text: "Tall" },
              { id: "d", text: "Blonde" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Personality", statement: "Personality = character traits like shy, kind, funny." },
            ],
            steps: [
              { reasoning: "Shy describes character; the others describe looks.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Shy",
            commonErrors: ["Choosing an appearance word."],
          },
        },
        {
          id: "langab-u4-l43q31",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a description of a family member combining appearance and personality.",
          parts: [
            { label: "a", prompt: "Give name/relationship and age.", marks: 1 },
            { label: "b", prompt: "Two appearance sentences with is/has.", marks: 2 },
            { label: "c", prompt: "Two personality sentences with a reason.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Family description", statement: "is/has + adjectives + personality + reason." },
            ],
            steps: [
              { part: "a", reasoning: "Name/relationship and age given.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two correct appearance sentences.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Two correct personality sentences with reason.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Name/age. (b) 2 appearance sentences. (c) 2 personality sentences + why.",
            commonErrors: ["Only appearance or only personality."],
          },
        },
        {
          id: "langab-u4-l43q32",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Write the missing words: 1) He ___ brown eyes. 2) They ___ friendly. 3) I ___ tall.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "have/is agreement", statement: "has for he/she, have for they/I; is for adjectives." },
            ],
            steps: [
              { reasoning: "He has brown eyes.", marks: 1, markCode: "M" },
              { reasoning: "They are friendly.", marks: 1, markCode: "M" },
              { reasoning: "I am tall.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "has; are; am.",
            commonErrors: ["Wrong verb for the subject."],
          },
        },
        {
          id: "langab-u4-l43q33",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "My brother is very funnys." },
              { id: "b", text: "My brother very funny is." },
              { id: "c", text: "My brother has very funny." },
              { id: "d", text: "My brother is very funny." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Adjective use", statement: "is + adjective; funny has no -s form." },
            ],
            steps: [
              { reasoning: "Is + very + funny is correct.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** My brother is very funny.",
            commonErrors: ["Adding -s to adjectives."],
          },
        },
        {
          id: "langab-u4-l43q34",
          difficulty: "core",
          totalMarks: 4,
          stem: "Correct these sentences.",
          extract: {
            title: "People description errors",
            author: "Written for Akademik Space",
            text: "1) She have blue eyes.\n2) He is a tall and thin.\n3) They is very kind.",
          },
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Error correction", statement: "Fix have/has, article use and is/are." },
            ],
            steps: [
              { reasoning: "She has blue eyes.", marks: 1, markCode: "M" },
              { reasoning: "He is tall and thin (no article before adjectives).", marks: 1, markCode: "M" },
              { reasoning: "They are very kind.", marks: 1, markCode: "A" },
              { reasoning: "All three corrected correctly.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "She has blue eyes. / He is tall and thin. / They are very kind.",
            commonErrors: ["Keeping wrong verb forms or articles."],
          },
        },
        {
          id: "langab-u4-l43q35",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which pair describes personality?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Generous and hard-working" },
              { id: "b", text: "Short hair and blue eyes" },
              { id: "c", text: "Blonde and brown" },
              { id: "d", text: "Young and old" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Personality", statement: "Generous and hard-working describe character." },
            ],
            steps: [
              { reasoning: "Generous and hard-working are personality traits.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Generous and hard-working",
            commonErrors: ["Choosing appearance words."],
          },
        },
        {
          id: "langab-u4-l43q36",
          difficulty: "core",
          totalMarks: 5,
          stem: "Write a description of a celebrity or famous person you admire.",
          parts: [
            { label: "a", prompt: "Name and what they do.", marks: 1 },
            { label: "b", prompt: "Two appearance details (if known).", marks: 2 },
            { label: "c", prompt: "Three personality adjectives and why you admire them.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Celebrity description", statement: "Name/role + appearance + personality + reason." },
            ],
            steps: [
              { part: "a", reasoning: "Name and role given.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two correct appearance details.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Three personality adjectives with reason.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "(a) Name/role. (b) Appearance. (c) 3 personality adjectives + why.",
            commonErrors: ["No personality description or reason."],
          },
        },
        {
          id: "langab-u4-l43q37",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which sentence combines appearance and personality correctly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She has kind and funny." },
              { id: "b", text: "She is hair brown and eyes long." },
              { id: "c", text: "She is tall kind and has funny hair." },
              { id: "d", text: "She is tall and has brown hair. She is kind and funny." },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Combining descriptions", statement: "Appearance (is/has) and personality (is) in separate clear sentences." },
            ],
            steps: [
              { reasoning: "Option a correctly separates appearance and personality.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** She is tall and has brown hair. She is kind and funny.",
            commonErrors: ["Mixing appearance and personality words in one phrase."],
          },
        },
        {
          id: "langab-u4-l43q38",
          difficulty: "foundation",
          totalMarks: 4,
          stem: "Write three sentences describing yourself: one appearance, one personality, one hobby.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Self-description", statement: "is/has + adjectives; hobby sentence." },
            ],
            steps: [
              { reasoning: "One correct appearance sentence.", marks: 1, markCode: "M" },
              { reasoning: "One correct personality sentence.", marks: 1, markCode: "M" },
              { reasoning: "One correct hobby sentence, all in correct English.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "I am tall and have short hair. I am friendly and hard-working. I like playing football.",
            commonErrors: ["Missing one category or wrong verb forms."],
          },
        },
        {
          id: "langab-u4-l43q39",
          difficulty: "challenge",
           totalMarks: 6,
          stem: "Write a short character sketch of a person from a book or film.",
          parts: [
            { label: "a", prompt: "Say who the character is and their role.", marks: 1 },
            { label: "b", prompt: "Two appearance sentences.", marks: 2 },
            { label: "c", prompt: "Three personality adjectives with examples of what they do.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Character sketch", statement: "Role + appearance + personality with evidence." },
            ],
            steps: [
              { part: "a", reasoning: "Character and role identified.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two correct appearance sentences.", marks: 2, markCode: "M" },
              { part: "c", reasoning: "Three personality adjectives supported by examples.", marks: 3, markCode: "A" },
            ],
            finalAnswer: "(a) Character/role. (b) 2 appearance sentences. (c) 3 adjectives + examples.",
            commonErrors: ["Personality adjectives without supporting detail."],
          },
        },
        {
          id: "langab-u4-l43q40",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the correct question about appearance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "What is she look like?" },
              { id: "b", text: "What does she look like?" },
              { id: "c", text: "What she looks like?" },
              { id: "d", text: "How she looks?" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Appearance questions", statement: "What does + subject + look like?" },
            ],
            steps: [
              { reasoning: "What does she look like? is the correct form.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** What does she look like?",
            commonErrors: ["Missing does or wrong word order."],
          },
        },
      ],
    },
  ],
};
