import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "mla2-u2-lesson-2-2",
  code: "2-2",
  title: "Writing Descriptions and Simple Emails",
  goal: "I CAN write a short description of a person, place or thing, and write a simple informal email to a friend.",
  standards: [
    "MYP Language Acquisition",
    "Criterion D: Writing",
    "Criterion B: Reading",
    "Language conventions and accuracy",
  ],
  vocabulary: [
    { term: "Description", definition: "Words that say what someone or something is like — appearance, personality, details." },
    { term: "Email", definition: "An electronic message sent over the internet." },
    { term: "Subject line", definition: "The short title line of an email that tells what it is about." },
    { term: "Sign-off", definition: "The ending of an email or letter, like 'Bye' or 'Best wishes'." },
    { term: "Paragraph", definition: "A block of sentences about one idea." },
  ],
  concepts: [
    {
      id: "mla2-u2-descriptions",
      title: "Writing descriptions",
      skill: "Describe a person, place or thing using adjectives and there is/are.",
      lesson: {
        sections: [
          {
            heading: "Describing with adjectives",
            body: "Descriptions use **adjectives** (describing words) placed before nouns: 'a tall boy', 'a beautiful beach', 'an interesting book'. For people you can describe **appearance** (tall, short, dark hair, blue eyes) and **personality** (kind, funny, friendly, shy). For places: big, small, old, new, quiet, busy.",
          },
          {
            heading: "There is / There are",
            body: "Use **there is** for one thing and **there are** for more than one: 'There is a park near my house', 'There are three shops in the street'. This pattern is essential for describing places. Remember the verb agrees with what follows 'there': 'There is a cat' but 'There are two cats'.",
          },
          {
            heading: "Building a description",
            body: "A simple description has: an opening sentence ('My best friend is called Sam'), then appearance details, then personality or what you do together. Keep it to one short paragraph at MYP 2 — clarity beats length.",
          },
        ],
        keyFormulas: [
          { name: "There is/are", statement: "There is + singular; There are + plural" },
          { name: "Adjective position", statement: "Adjective + noun: 'a tall boy', 'an old house'" },
        ],
        workedExample: {
          problem: "Describe your bedroom in two sentences using 'there is/are'.",
          solution: "'There is a big bed and a small desk in my room. There are two windows and a poster of my favourite football team.'",
        },
      },
      questions: [
        {
          id: "mla2-u2-descriptions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct sentence describing a place.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There has three shops near my house." },
              { id: "b", text: "There are three shops near my house." },
              { id: "c", text: "There three shops near my house." },
              { id: "d", text: "There is three shops near my house." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "There is/are", statement: "Plural nouns take 'there are'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'three shops' is plural → 'there are'.", working: "there are", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** There are three shops near my house.",
            commonErrors: ["Using 'there is' with plurals."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-descriptions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write one sentence describing your best friend using two adjectives.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Description with adjectives", statement: "Adjective + noun order; two adjectives enrich the description." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — two adjectives used correctly before nouns.", working: "... is tall and kind / has got ...", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — correct grammar and punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'My best friend is tall and funny.'",
            commonErrors: ["Adjectives after the noun in wrong order ('friend is funny tall')."],
            examinerNote: "Two adjectives required.",
          },
        },
        {
          id: "mla2-u2-descriptions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe your school in three sentences using 'there is/are' at least once.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Place description", statement: "there is/are + plural agreement + adjectives." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — three sentences describing a real place.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'there is/are' used with correct agreement.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — adjectives describe features accurately.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — description is coherent and understandable.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Three correct descriptive sentences with at least one there is/are.",
            commonErrors: ["'There is many students' — agreement error."],
            examinerNote: "Must describe the student's own school.",
          },
        },
        {
          id: "mla2-u2-descriptions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a description of a family member or friend for a 'Meet the Class' display.",
          parts: [
            { label: "a", prompt: "Write an opening sentence naming the person.", marks: 1 },
            { label: "b", prompt: "Write two sentences describing appearance (age, hair, height) and two describing personality or likes.", marks: 4 },
            { label: "c", prompt: "Check: adjectives before nouns, correct 'is/has got', capitals and full stops.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Description conventions", statement: "Adjective order, be/have got agreement, punctuation." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — opening names the person.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — appearance details (age, hair, height).", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — personality/likes details.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — adjectives correctly placed and spelled.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — correct 'is'/'has got' agreement.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — self-check completed with corrections.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — final version error-free.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — a reader could picture the person from the text.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Opening + 4 detail sentences + correct final version.",
            commonErrors: ["Appearance and personality mixed randomly.", "'She have got' agreement error."],
            examinerNote: "Description should let a reader picture the person.",
          },
        },
        {
          id: "mla2-u2-descriptions-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence puts the adjective in the correct position?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I have big a dog." },
              { id: "b", text: "I have dog a big." },
              { id: "c", text: "I have a big dog." },
              { id: "d", text: "I have a dog big." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Adjective position", statement: "Adjectives go before the noun: 'a big dog'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — adjective before noun is correct English order.", working: "a big dog", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** I have a big dog.",
            commonErrors: ["Putting the adjective after the noun."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-descriptions-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Choose the correct sentence about one thing in a place.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There is a park near my house." },
              { id: "b", text: "There are a park near my house." },
              { id: "c", text: "There has a park near my house." },
              { id: "d", text: "There park near my house." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "There is/are", statement: "One thing → 'there is'; more than one → 'there are'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'a park' is singular → 'there is'.", working: "there is", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** There is a park near my house.",
            commonErrors: ["Using 'there are' with a singular noun."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-descriptions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which adjective describes a person's PERSONALITY, not appearance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "tall" },
              { id: "b", text: "kind" },
              { id: "c", text: "short" },
              { id: "d", text: "blonde" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Personality adjectives", statement: "Personality words describe character: kind, funny, shy, friendly." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'kind' describes character, not looks.", working: "kind", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** kind",
            commonErrors: ["Choosing 'tall' or 'blonde' — those describe appearance."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mla2-u2-descriptions-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write one sentence describing your pet or a favourite animal using two adjectives.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Description with adjectives", statement: "Adjective + noun order; two adjectives enrich the description." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — two adjectives used correctly.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — correct grammar and punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'My dog is small and friendly.'",
            commonErrors: ["Adjectives in wrong order."],
            examinerNote: "Two adjectives required.",
          },
        },
        {
          id: "mla2-u2-descriptions-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "My Bedroom",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "My bedroom is small but comfortable. There is a big bed, a desk and a wardrobe. There are two windows and a shelf with twenty books on it.",
          },
          stem: "Read the description and give two numbers: (a) how many windows there are (b) how many books are on the shelf.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 20 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in descriptions", statement: "Quantities in a description are key details to locate accurately." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'two windows'.", working: "2", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'twenty books'.", working: "20", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 2 (b) 20",
            commonErrors: ["Counting the furniture items instead of windows/books."],
            examinerNote: "Accept 2 and 20.",
          },
        },
        {
          id: "mla2-u2-descriptions-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Describe your town or neighbourhood in three sentences, using 'there is' or 'there are' at least once.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Place description", statement: "there is/are + correct agreement + adjectives." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — three sentences describing a real place.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'there is/are' with correct agreement.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — adjectives used accurately.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — description is coherent and clear.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Three correct descriptive sentences with at least one there is/are.",
            commonErrors: ["'There is many shops' — agreement error."],
            examinerNote: "Must describe the student's own area.",
          },
        },
        {
          id: "mla2-u2-descriptions-q11",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a description of your favourite room or place for a 'My Space' project.",
          parts: [
            { label: "a", prompt: "Write an opening sentence naming the place.", marks: 1 },
            { label: "b", prompt: "Write three sentences describing what is there, using 'there is/are' correctly.", marks: 3 },
            { label: "c", prompt: "Check: adjective order, is/are agreement, capitals and full stops.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Description conventions", statement: "Adjective order, there is/are agreement, punctuation." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — opening names the place.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — three accurate detail sentences.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — there is/are agreement correct.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — adjectives placed correctly.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — self-check completed.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — reader could picture the place.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Opening + three there-is/are details + correct check.",
            commonErrors: ["Wrong agreement ('there is two chairs').", "No opening sentence."],
            examinerNote: "Description should let a reader picture the place.",
          },
        },
        {
          id: "mla2-u2-descriptions-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is correct: 'an' or 'a' before 'old house'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "an old house" },
              { id: "b", text: "a old house" },
              { id: "c", text: "old an house" },
              { id: "d", text: "an old a house" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "a/an", statement: "Use 'an' before vowel sounds: an old house, an interesting book." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'old' starts with a vowel sound → 'an'.", working: "an old house", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** an old house",
            commonErrors: ["Using 'a' before a vowel sound."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-descriptions-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Our School Garden",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Our school garden is behind the library. There are ten flower beds and a small pond. Every class takes care of one bed. In spring, the garden is full of colour.",
          },
          stem: "Read the description and give two numbers: (a) how many flower beds there are (b) how many beds each class looks after.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10 },
              { label: "b", answer: 1 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in descriptions", statement: "Quantities in a description are key details to locate accurately." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'ten flower beds'.", working: "10", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'Every class takes care of one bed'.", working: "1", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 10 (b) 1",
            commonErrors: ["Answering 10 for (b) — that is the total beds, not per class."],
            examinerNote: "Accept 10 and 1.",
          },
        },
        {
          id: "mla2-u2-descriptions-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "There is three cats in the garden." },
              { id: "b", text: "There three cats are in garden." },
              { id: "c", text: "There are three cats in the garden." },
              { id: "d", text: "There has three cats in the garden." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "There is/are", statement: "Plural nouns take 'there are'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'three cats' is plural → 'there are'.", working: "there are", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** There are three cats in the garden.",
            commonErrors: ["'There is' with plurals."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-descriptions-q15",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "My Desk",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "On my desk there is one lamp, one pencil case and two books. The lamp is yellow and the pencil case is blue.",
          },
          stem: "How many items are on the desk in total? Give the number.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in descriptions", statement: "Quantities must be added correctly when asked for totals." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — one lamp + one pencil case + two books = 4.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering 3 — forgetting the two books."],
            examinerNote: "Accept 4 only.",
          },
        },
        {
          id: "mla2-u2-descriptions-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a description of a family member for a 'Meet My Family' display.",
          parts: [
            { label: "a", prompt: "Write an opening sentence naming the person and their relationship to you.", marks: 1 },
            { label: "b", prompt: "Write two appearance sentences and two personality/likes sentences.", marks: 3 },
            { label: "c", prompt: "Check: adjectives before nouns, is/has got agreement, capitals and full stops.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Family description", statement: "Appearance + personality details with correct adjective order and verbs." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — opening names person and relationship.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — two appearance details.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — two personality/likes details.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — adjective order and verb forms correct.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — self-check completed.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — final version error-free.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — reader could picture the person.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Opening + 4 detail sentences + correct check.",
            commonErrors: ["'She have got' agreement error.", "Only appearance or only personality."],
            examinerNote: "Both appearance AND personality needed.",
          },
        },
      ],
    },
    {
      id: "mla2-u2-emails",
      title: "Writing simple emails to friends",
      skill: "Write an informal email with greeting, body and sign-off using correct conventions.",
      lesson: {
        sections: [
          {
            heading: "Parts of an email",
            body: "An email to a friend has: **To** (recipient), **Subject** (one-line topic, e.g. 'Party on Saturday'), **Greeting** ('Hi Tom,'), **Body** (your message — a few sentences or paragraphs), and **Sign-off** ('Bye', 'See you soon', then your name). Keep it friendly and informal.",
          },
          {
            heading: "Informal email style",
            body: "Emails to friends use **contractions** (I'm, don't, can't), simple sentences, and everyday words. They can include questions and exclamation marks for friendliness: 'How are you? I miss you!' But still use capital letters and full stops — informal does not mean sloppy.",
          },
          {
            heading: "What to include",
            body: "A good email answers the questions the reader needs: Who is writing? Why? What do they want? For an invitation: when, where, what to bring. For news: what happened. For a request: what you need and when. Three or four clear paragraphs is plenty at this level.",
          },
        ],
        keyFormulas: [
          { name: "Email structure", statement: "To + Subject + Hi..., + body + Bye, + name" },
        ],
        workedExample: {
          problem: "Write the opening and closing of an email inviting a friend to your birthday party.",
          solution: "Subject: My birthday party! / 'Hi Sam, I'm having a birthday party on Saturday at 4. Can you come?' ... 'Please come! See you Saturday. — Ana'",
        },
      },
      questions: [
        {
          id: "mla2-u2-emails-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct order of parts in an email to a friend?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Body → greeting → sign-off" },
              { id: "b", text: "Sign-off → body → greeting" },
              { id: "c", text: "Greeting → body → sign-off" },
              { id: "d", text: "Subject → sign-off → body" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Email structure", statement: "Greeting first, message body middle, sign-off last." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — greeting opens, sign-off closes.", working: "greeting → body → sign-off", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** Greeting → body → sign-off",
            commonErrors: ["Starting with the sign-off."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-emails-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a subject line for an email inviting a friend to your birthday party.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Subject line", statement: "A short line telling what the email is about." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — subject mentions party/birthday.", working: "My birthday party / Party on Saturday", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — short, clear, correctly capitalised.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'My birthday party!' / 'Party invitation'",
            commonErrors: ["Writing the whole email as the subject."],
            examinerNote: "Must be brief.",
          },
        },
        {
          id: "mla2-u2-emails-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "An Email from Sam",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Subject: Football on Saturday\n\nHi Alex,\n\nAre you free on Saturday? My team is playing a match at 10 o'clock. Do you want to come and watch? It should be fun — we're playing the champions!\n\nCan you come? Please let me know by Thursday.\n\nBye,\nSam",
          },
          stem: "Read the email. Answer: What is the email about? When is the match? What does Sam ask Alex to do?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Email comprehension", statement: "Subject + body details + request give the full message." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — about a football match invitation on Saturday.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — match at 10 o'clock Saturday.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — Sam asks Alex to come watch and reply by Thursday.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — all three answers clearly given.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Football match invitation; Saturday at 10; come watch + reply by Thursday.",
            commonErrors: ["Missing the Thursday deadline."],
            examinerNote: "All three parts needed.",
          },
        },
        {
          id: "mla2-u2-emails-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write an informal email to a friend inviting them to a party or event.",
          parts: [
            { label: "a", prompt: "Write a subject line and greeting.", marks: 1 },
            { label: "b", prompt: "Write the body: what the event is, when, where, and what to bring.", marks: 4 },
            { label: "c", prompt: "End with a friendly question and sign-off + name.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Informal email conventions", statement: "Subject + greeting + clear body + friendly close + name; informal but correct." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — subject line and 'Hi [name],' correct.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — all four details (what/when/where/bring) present.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — correct dates, times and prepositions ('on Saturday', 'at 4').", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — friendly informal tone with correct grammar.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — correct punctuation and spelling.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — friendly question inviting a reply.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — sign-off and name written correctly.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — email is easy to understand as an invitation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Subject + greeting + 4-detail body + question + sign-off + name.",
            commonErrors: ["Missing the 'what to bring' or 'when'.", "Sign-off without a name."],
            examinerNote: "All invitation details must be present.",
          },
        },
        {
          id: "mla2-u2-emails-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct greeting for an informal email to a friend?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To whom it may concern," },
              { id: "b", text: "Hello everybody in the world," },
              { id: "c", text: "Hi Tom," },
              { id: "d", text: "Dear Sir or Madam," },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Email greetings", statement: "Informal emails use 'Hi [name],' — formal letters use 'Dear Sir/Madam'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Hi Tom,' is the correct informal greeting.", working: "Hi Tom,", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** Hi Tom,",
            commonErrors: ["Using a formal business greeting for a friend."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-emails-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the job of the 'sign-off' in an email?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To ask a question" },
              { id: "b", text: "To start the email" },
              { id: "c", text: "To give the subject" },
              { id: "d", text: "To end the email politely before your name" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sign-off", statement: "The sign-off ('Bye', 'See you soon') closes the email before the name." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — sign-off ends the message politely.", working: "end the email", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(d)** To end the email politely before your name",
            commonErrors: ["Thinking the sign-off comes first."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-emails-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which feature is typical of an INFORMAL email to a friend?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "No greeting at all" },
              { id: "b", text: "Only numbers, no words" },
              { id: "c", text: "Contractions like I'm and don't" },
              { id: "d", text: "Very formal language and long sentences" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Informal email style", statement: "Informal emails use contractions, simple sentences and friendly tone." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'I'm', 'don't' are typical contractions.", working: "contractions", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** Contractions like I'm and don't",
            commonErrors: ["Thinking informal means no punctuation or structure."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-emails-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the opening (greeting) and closing (sign-off + name) for an email to your friend Sam about a school concert.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Email frame", statement: "Greeting at the start, sign-off and name at the end." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — correct informal greeting ('Hi Sam,').", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — friendly sign-off plus the writer's name.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Hi Sam,' ... 'See you there! — Alex'",
            commonErrors: ["Sign-off without a name."],
            examinerNote: "Name is required after the sign-off.",
          },
        },
        {
          id: "mla2-u2-emails-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "An Email from Mum",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Subject: Dentist appointment\n\nHi Alex,\n\nDon't forget your dentist appointment on Thursday at four o'clock. The dentist's surgery is next to the library. Please be there five minutes early.\n\nLove you,\nMum",
          },
          stem: "Read the email and give two numbers: (a) the day number of the appointment (Thursday=4 if Monday=1) (b) how many minutes early Alex should arrive.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in emails", statement: "Times, dates and durations are key details in emails." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'Thursday' → day 4.", working: "4", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'five minutes early'.", working: "5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 4 (b) 5",
            commonErrors: ["Answering 4 for (b) — that is the day, not minutes."],
            examinerNote: "Accept 4 and 5.",
          },
        },
        {
          id: "mla2-u2-emails-q10",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "An Email from Grandma",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Subject: Your birthday\n\nHi Sam,\n\nI am sending you a small present for your birthday next week — it should arrive on Monday. I hope you like it! Tell me what you are doing at the weekend.\n\nLove and kisses,\nGrandma",
          },
          stem: "Read the email and explain: What is the email about? When should the present arrive? What does Grandma ask Sam to do?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Email comprehension", statement: "Subject + body details + request give the full message." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — about a birthday present.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — should arrive on Monday.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — asks Sam to say what he is doing at the weekend.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — all three parts answered clearly.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Birthday present; Monday; tell her weekend plans.",
            commonErrors: ["Missing the request at the end."],
            examinerNote: "All three parts needed.",
          },
        },
        {
          id: "mla2-u2-emails-q11",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write an informal email to a friend telling them about your last holiday.",
          parts: [
            { label: "a", prompt: "Write a subject line and greeting.", marks: 1 },
            { label: "b", prompt: "Write the body: where you went, when, and two things you did.", marks: 3 },
            { label: "c", prompt: "End with a friendly question and sign-off + name.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Informal email conventions", statement: "Subject + greeting + clear body + friendly close + name." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — subject line and 'Hi [name],' correct.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — where and when given.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — two activities described.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — past simple used for the holiday.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — friendly question inviting reply.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — sign-off and name correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Subject + greeting + where/when + 2 activities + question + sign-off + name.",
            commonErrors: ["Present tense for past events.", "Missing the name after sign-off."],
            examinerNote: "All email parts must be present.",
          },
        },
        {
          id: "mla2-u2-emails-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the purpose of the 'subject' line in an email?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To tell what the email is about in a few words" },
              { id: "b", text: "To give your address" },
              { id: "c", text: "To greet the reader" },
              { id: "d", text: "To say goodbye" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Subject line", statement: "The subject line is a short title telling what the email is about." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — subject = short topic summary.", working: "what the email is about", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** To tell what the email is about in a few words",
            commonErrors: ["Thinking the subject is the greeting."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla2-u2-emails-q13",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "An Email from a Friend",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Subject: Football practice\n\nHi Jo,\n\nFootball practice is on Tuesday and Thursday at four o'clock. We need to bring our boots and a water bottle. Can you come on Tuesday?\n\nSee you soon,\nPat",
          },
          stem: "Read the email and give two numbers: (a) how many days per week practice happens (b) the hour practice starts.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in emails", statement: "Times, dates and durations are key details in emails." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Tuesday and Thursday = two days.", working: "2", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — 'at four o'clock'.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) 2 (b) 4",
            commonErrors: ["Answering 2 for (b) — that is days, not the hour."],
            examinerNote: "Accept 2 and 4.",
          },
        },
        {
          id: "mla2-u2-emails-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In an email to a friend, which is the most natural way to ask them to reply?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reply or else." },
              { id: "b", text: "Please let me know what you think." },
              { id: "c", text: "I demand your answer." },
              { id: "d", text: "You will reply to me immediately." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Polite requests", statement: "Informal emails still use polite request forms like 'please let me know'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'please let me know' is polite and natural.", working: "please let me know", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Please let me know what you think.",
            commonErrors: ["Choosing a rude or demanding phrase."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla2-u2-emails-q15",
          difficulty: "foundation",
          totalMarks: 1,
          extract: {
            title: "Party Email",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "Subject: My birthday party\n\nHi Ben,\n\nI'm having a birthday party on Saturday at three o'clock. Can you come? Please bring a gift if you can.\n\nSee you Saturday!\nAmy",
          },
          stem: "On which day is the party? Give the day number (Monday=1 ... Sunday=7).",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Numbers in emails", statement: "Dates are key details in emails." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'on Saturday' → day 6.", working: "6", marks: 1, markCode: "B" },
            ],
            finalAnswer: "6",
            commonErrors: ["Answering 'Saturday' — a number is needed."],
            examinerNote: "Accept 6 (Saturday).",
          },
        },
        {
          id: "mla2-u2-emails-q16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write an informal email inviting a friend to a school event (play, concert or sports day).",
          parts: [
            { label: "a", prompt: "Write a subject line and greeting.", marks: 1 },
            { label: "b", prompt: "Write the body: what the event is, when and where.", marks: 3 },
            { label: "c", prompt: "End with a friendly question and sign-off + name.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Invitation email", statement: "Subject + greeting + event details + friendly close + name." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — subject line and greeting correct.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — event, when and where all given.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — correct date/time expressions ('on Friday', 'at seven').", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — friendly informal tone with correct grammar.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — friendly question inviting a reply.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — sign-off and name correct.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B: Reading — email clearly works as an invitation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Subject + greeting + event details + question + sign-off + name.",
            commonErrors: ["Missing when or where.", "Sign-off without a name."],
            examinerNote: "All invitation details must be present.",
          },
        },
      ],
    },
  ],
};
