import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "mla3-u2-lesson-2-1",
  code: "2-1",
  title: "Discussing Experiences and Opinions",
  goal: "I CAN talk about my experiences using the present perfect and express opinions with reasons in a conversation.",
  standards: [
    "MYP Language Acquisition",
    "Criterion C: Speaking",
    "Criterion A: Listening",
    "Criterion D: Writing",
  ],
  vocabulary: [
    { term: "Experience", definition: "Something you have done or been part of in your life." },
    { term: "Present perfect", definition: "A tense for experiences up to now: 'I have visited Spain.'" },
    { term: "Ever / never", definition: "Words used with present perfect: 'Have you ever...?', 'I have never...'" },
    { term: "Opinion", definition: "What you think or believe about something." },
    { term: "Reason", definition: "Why you think something — the explanation for an opinion." },
  ],
  concepts: [
    {
      id: "mla3-u2-experiences-opinions",
      title: "Talking about experiences and giving opinions",
      skill: "Use present perfect for experiences and structure opinions with reasons in speaking.",
      lesson: {
        sections: [
          {
            heading: "Experiences with present perfect",
            body: "Use **have/has + past participle** for life experiences: 'I have visited Paris', 'She has never eaten sushi', 'Have you ever been to London?'. Signal words: **ever, never, already, yet, before, in my life**. Regular past participles end in -ed (visited, played); irregulars: gone, eaten, seen, done, been, written.",
          },
          {
            heading: "Structuring an opinion",
            body: "A good spoken opinion has three parts: **opinion + reason + example**. 'I think online learning is good **because** it is flexible, **for example** I can study at home.' Or use 'In my opinion...' / 'I believe...' / 'For me...'. This structure sounds clear and confident.",
          },
          {
            heading: "Agreeing and disagreeing politely",
            body: "In conversation, respond to opinions: **Agree**: 'I agree', 'That's true', 'Me too'. **Disagree politely**: 'I see your point, but...', 'I'm not sure I agree', 'Yes, but...'. Never just say 'You're wrong' — polite disagreement keeps conversation friendly.",
          },
        ],
        keyFormulas: [
          { name: "Present perfect", statement: "have/has + past participle; ever/never/already/yet" },
          { name: "Opinion structure", statement: "Opinion + because + reason + example" },
        ],
        workedExample: {
          problem: "Answer: 'Have you ever tried sushi?' — say yes or no with a detail.",
          solution: "'Yes, I have tried sushi. I ate it in Japan last year — it was delicious.' / 'No, I have never tried sushi, but I would like to.'",
        },
      },
      questions: [
        {
          id: "mla3-u2-experiences-opinions-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence correctly uses the present perfect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I have visit Paris." },
              { id: "b", text: "I have visited Paris." },
              { id: "c", text: "I visited have Paris." },
              { id: "d", text: "I have visiting Paris." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Present perfect form", statement: "have/has + past participle (visited)." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'have visited' is correct.", working: "have visited", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** I have visited Paris.",
            commonErrors: ["Using base form or -ing after have."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-experiences-opinions-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write an opinion about school uniforms: state your opinion and give one reason.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Opinion + reason", statement: "Opinion must be followed by a reason (because/so)." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — clear opinion stated.", working: "I think ...", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — reason given with 'because' and correct grammar.", working: "because ...", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'I think school uniforms are good because they are fair for everyone.'",
            commonErrors: ["Opinion without any reason."],
            examinerNote: "Both opinion and reason required.",
          },
        },
        {
          id: "mla3-u2-experiences-opinions-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Complete the sentences with the correct form: (1) 'I ___ (never/try) surfing.' (2) '___ you ever ___ (be) to Australia?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Present perfect with ever/never", statement: "have/has + past participle; questions invert have/has." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'I have never tried surfing.'", working: "have never tried", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — 'Have you ever been to Australia?'", working: "Have you ever been", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — correct meaning preserved (experience, not specific time).", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — correct spelling of participles (tried, been).", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(1) I have never tried surfing. (2) Have you ever been to Australia?",
            commonErrors: ["'I never tried' — missing have.", "'Have you ever went' — wrong participle."],
            examinerNote: "Both sentences must be fully correct.",
          },
        },
        {
          id: "mla3-u2-experiences-opinions-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Prepare a short talk about an experience you have had and your opinion about it.",
          parts: [
            { label: "a", prompt: "Write two sentences about an experience using present perfect.", marks: 3 },
            { label: "b", prompt: "Write your opinion about the experience with a reason.", marks: 3 },
            { label: "c", prompt: "Add one polite response a listener might give (agree/disagree).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Experience talk", statement: "Present perfect + opinion + reason + response." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — two sentences about a real experience.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — present perfect forms correct (have/has + participle).", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — correct spelling and punctuation.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — clear opinion stated.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — reason with 'because' correctly formed.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — opinion sentence accurate.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — natural response ('I agree' / 'I see your point, but...').", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — response correctly punctuated.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "2 present-perfect sentences + opinion + reason + response.",
            commonErrors: ["Past simple instead of present perfect for experience.", "Opinion with no reason."],
            examinerNote: "Present perfect is essential for the experience part.",
          },
        },
        {
          id: "mla3-u2-experiences-opinions-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which sentence correctly uses the present perfect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I have eat sushi." },
              { id: "b", text: "I have eaten sushi." },
              { id: "c", text: "I have ate sushi." },
              { id: "d", text: "I have eating sushi." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Past participles", statement: "Irregular participle of eat = eaten." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'have eaten' is correct.", working: "have eaten", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** I have eaten sushi.",
            commonErrors: ["Using past simple 'ate' after have."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-experiences-opinions-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word completes the question about experience? 'Have you ___ been to Japan?'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "yet" },
              { id: "b", text: "ever" },
              { id: "c", text: "already" },
              { id: "d", text: "since" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "ever/never/already/yet", statement: "'Ever' asks about any experience; 'yet' and 'already' refer to finished actions." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Have you ever been' asks about life experience.", working: "ever", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** ever",
            commonErrors: ["Choosing 'yet' — that goes at the end of negative/question sentences about completion."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-experiences-opinions-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Choose the correct sentence.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I have already finished my homework." },
              { id: "b", text: "I already have finished my homework." },
              { id: "c", text: "I have finish already my homework." },
              { id: "d", text: "I am have finished my homework." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "already placement", statement: "'Already' goes between have/has and the participle." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'have already finished' is correct order.", working: "have already finished", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** I have already finished my homework.",
            commonErrors: ["Putting 'already' in the wrong position."],
            examinerNote: "D1 for (a).",
          },
        },
        {
          id: "mla3-u2-experiences-opinions-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence gives an opinion WITH a reason?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I think pizza is nice." },
              { id: "b", text: "I think pizza is nice because it is cheap and tasty." },
              { id: "c", text: "Pizza is on the table." },
              { id: "d", text: "I ate pizza yesterday." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Opinion + reason", statement: "A complete spoken opinion needs a 'because' reason." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — only B has opinion + because-reason.", working: "because it is cheap and tasty", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** I think pizza is nice because it is cheap and tasty.",
            commonErrors: ["Choosing opinion without reason."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla3-u2-experiences-opinions-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which sentence contains a grammar error?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "She has never tried skiing." },
              { id: "b", text: "He has wrote three books." },
              { id: "c", text: "They have seen the film." },
              { id: "d", text: "I have been to Spain." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "have + participle", statement: "After have/has use the past participle: written, not wrote." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'has wrote' should be 'has written'.", working: "has written", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** He has wrote three books.",
            commonErrors: ["Missing the wrote/written distinction."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-experiences-opinions-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the past participle of 'take'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "took" },
              { id: "b", text: "taken" },
              { id: "c", text: "taking" },
              { id: "d", text: "takes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Irregular participles", statement: "take → took → taken; the participle is 'taken'." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — have + taken.", working: "taken", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** taken",
            commonErrors: ["Confusing past simple 'took' with participle 'taken'."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-experiences-opinions-q11",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Class Chat",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "A: Have you ever tried rock climbing?\nB: Yes, I have tried it twice. I have also been skiing. Have you ever been to the mountains?\nA: No, I have never been there, but I have seen photos.",
          },
          stem: "How many present perfect verbs appear in this dialogue?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 6 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Present perfect forms", statement: "have/has + past participle." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — count: Have...tried, have tried, have been, Have...been, have never been, have seen = 6.", working: "6", marks: 1, markCode: "D" },
            ],
            finalAnswer: "6",
            commonErrors: ["Counting 'ever' or 'never' as verbs."],
            examinerNote: "Count have/has + participle combinations.",
          },
        },
        {
          id: "mla3-u2-experiences-opinions-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Interview Answers",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "I have already finished my project. I haven't submitted it yet. I have never been to Canada, but I have always wanted to go.",
          },
          stem: "How many signal words (already, yet, never, always) appear? How many present perfect verbs appear?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 4 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Signal words + participles", statement: "already/yet/never/always signal present perfect." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — signal words: already, yet, never, always = 4.", working: "4", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — present perfect: have finished, haven't submitted, have never been, have always wanted = 4.", working: "4", marks: 1, markCode: "D" },
            ],
            finalAnswer: "4 signal words; 4 present perfect verbs.",
            commonErrors: ["Counting 'have' alone without participle."],
            examinerNote: "Each have/has + participle counts once.",
          },
        },
        {
          id: "mla3-u2-experiences-opinions-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write an opinion about your favourite season with one reason.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Opinion + reason", statement: "Opinion + because + reason." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — clear opinion about a season.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — reason with 'because' + correct grammar.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'I think summer is the best season because I can go swimming.'",
            commonErrors: ["Opinion with no reason."],
            examinerNote: "Both opinion and reason required.",
          },
        },
        {
          id: "mla3-u2-experiences-opinions-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Answer this question in two sentences: 'Have you ever ridden a horse? What was it like?'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Experience answer", statement: "Present perfect + detail about the experience." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — answers yes or no about riding.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — present perfect form correct (have/has + participle).", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — second sentence adds a detail, correct English.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Yes, I have ridden a horse. It was scary at first but fun.'",
            commonErrors: ["Using past simple 'I rode' without present perfect."],
            examinerNote: "Present perfect essential.",
          },
        },
        {
          id: "mla3-u2-experiences-opinions-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Pair Discussion",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "A: I think video games are a waste of time.\nB: I see your point, but I think they can be educational. For example, some games teach history.",
          },
          stem: "What is each speaker's opinion? How does Speaker B respond to Speaker A?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Opinion + polite response", statement: "Track both opinions and the response strategy." },
            ],
            steps: [
              { reasoning: "Criterion A: Listening — A: games are a waste of time.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A: Listening — B: games can be educational (history example).", marks: 1, markCode: "A" },
              { reasoning: "Criterion C: Speaking — B disagrees politely: 'I see your point, but...'.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — both explained clearly.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "A: waste of time; B: educational. B disagrees politely with example.",
            commonErrors: ["Missing the polite disagreement strategy."],
            examinerNote: "Must identify the response type.",
          },
        },
        {
          id: "mla3-u2-experiences-opinions-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Prepare to discuss an experience you have had and give your opinion about it.",
          parts: [
            { label: "a", prompt: "Write two sentences about an experience using present perfect.", marks: 3 },
            { label: "b", prompt: "Write your opinion about it with a reason.", marks: 2 },
            { label: "c", prompt: "Write a question you could ask a partner about their experience.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Experience discussion", statement: "Present perfect + opinion + reason + question." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — two real experience sentences.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D: Writing — correct present perfect forms.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — correct spelling and punctuation.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — clear opinion stated.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — reason with 'because' correct.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — appropriate partner question (Have you ever...?).", marks: 1, markCode: "C" },
            ],
            finalAnswer: "2 present-perfect sentences + opinion + reason + question.",
            commonErrors: ["Past simple instead of present perfect."],
            examinerNote: "Present perfect is essential.",
          },
        },
      ],
    },
    {
      id: "mla3-u2-short-presentations",
      title: "Giving short presentations",
      skill: "Structure and deliver a short spoken presentation on a familiar topic.",
      lesson: {
        sections: [
          {
            heading: "The shape of a presentation",
            body: "A short presentation has: **opening** ('Hello everyone, today I will talk about...'), **main points** (2-3 ideas, each with an example), and **closing** ('Thank you for listening. Do you have any questions?'). At MYP 3, aim for 1-2 minutes — clear and organised beats long and rambling.",
          },
          {
            heading: "Signposting language",
            body: "Help your audience follow you with phrases: **'First...'**, **'Another point is...'**, **'For example...'**, **'In conclusion...'**, **'To sum up...'**. These are called signposts — they make your structure visible. Don't read from notes the whole time; look up and speak to your audience.",
          },
          {
            heading: "Delivery tips",
            body: "Speak **clearly and at a steady pace** — not too fast. Pause between points. Use your voice: emphasise key words. Stand or sit confidently, make eye contact, and smile. If you forget a word, pause and continue — the audience won't notice small pauses.",
          },
        ],
        keyFormulas: [
          { name: "Presentation structure", statement: "Opening + 2-3 points + closing" },
          { name: "Signposts", statement: "First / Another point / For example / In conclusion" },
        ],
        workedExample: {
          problem: "Write the opening and closing of a presentation about your favourite hobby.",
          solution: "Opening: 'Hello everyone. Today I will talk about my favourite hobby — photography.' Closing: 'Thank you for listening. Would you like to see my photos?'",
        },
      },
      questions: [
        {
          id: "mla3-u2-short-presentations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'signpost' in a presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A visual aid" },
              { id: "b", text: "A phrase that shows the structure, like 'First' or 'In conclusion'" },
              { id: "c", text: "A type of microphone" },
              { id: "d", text: "The end of the presentation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Signposting", statement: "Phrases that mark the structure of a talk." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — signposts guide the audience through the talk.", working: "structure phrases", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** A phrase that shows the structure",
            commonErrors: ["Confusing signposts with visual aids."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla3-u2-short-presentations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the opening sentence of a presentation about a topic you choose.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Presentation opening", statement: "Greeting + announce topic + preview structure." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — greeting + topic announced.", working: "Hello everyone, today I will talk about...", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — correct grammar and punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Hello everyone, today I will talk about my favourite sport.'",
            commonErrors: ["Starting with content, no greeting or topic."],
            examinerNote: "Must announce the topic clearly.",
          },
        },
        {
          id: "mla3-u2-short-presentations-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Which three phrases would best structure a presentation? Choose and explain: 'First', 'Because', 'In conclusion', 'Wow', 'For example'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Signpost selection", statement: "Structural phrases (First/In conclusion/For example) organise; emotional words don't." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — picks 'First', 'In conclusion', 'For example'.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — explains each marks a structural moment.", marks: 1, markCode: "C" },
              { reasoning: "Criterion B: Reading — explains why 'Wow'/'Because' don't signpost structure.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D: Writing — clear, accurate explanation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "First, In conclusion, For example — they mark structure; Wow/Because do not.",
            commonErrors: ["Choosing 'Because' — it gives reasons, not structure."],
            examinerNote: "Must justify choices.",
          },
        },
        {
          id: "mla3-u2-short-presentations-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write the script for a 1-minute presentation about a hobby, sport or interest.",
          parts: [
            { label: "a", prompt: "Write an opening (greeting + topic).", marks: 1 },
            { label: "b", prompt: "Write two main points, each with an example.", marks: 4 },
            { label: "c", prompt: "Write a closing and include at least three signpost phrases.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Presentation script", statement: "Opening + points with examples + closing + signposts." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — clear opening with topic.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — two distinct main points.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — each point has a concrete example.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — correct grammar and vocabulary.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — accurate spelling and punctuation.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — appropriate closing.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — at least three signpost phrases used.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — script sounds natural when spoken.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Opening + 2 points with examples + closing + 3 signposts.",
            commonErrors: ["Points without examples.", "No signposts."],
            examinerNote: "Must sound speakable, not just readable.",
          },
        },
        {
          id: "mla3-u2-short-presentations-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which phrase is a good CLOSING for a presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hello everyone, today I will talk about..." },
              { id: "b", text: "Thank you for listening. Do you have any questions?" },
              { id: "c", text: "First, let me tell you..." },
              { id: "d", text: "For example, yesterday..." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Presentation structure", statement: "Closing thanks the audience and invites questions." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'Thank you for listening' closes the talk.", working: "Thank you for listening", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Thank you for listening. Do you have any questions?",
            commonErrors: ["Choosing an opening or middle signpost."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla3-u2-short-presentations-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should the opening of a presentation include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A long list of facts" },
              { id: "b", text: "A greeting and the topic you will talk about" },
              { id: "c", text: "Only a question" },
              { id: "d", text: "The conclusion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Presentation opening", statement: "Greeting + announce topic." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — openings greet and announce the topic.", working: "greeting + topic", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** A greeting and the topic you will talk about",
            commonErrors: ["Starting straight with content."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla3-u2-short-presentations-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is the correct order for a short presentation?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Closing → points → opening" },
              { id: "b", text: "Opening → main points → closing" },
              { id: "c", text: "Main points → closing → opening" },
              { id: "d", text: "Any order is fine" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Presentation structure", statement: "Opening, then 2-3 points, then closing." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — logical order: open, develop, close.", working: "opening → points → closing", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Opening → main points → closing",
            commonErrors: ["Putting the conclusion first."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla3-u2-short-presentations-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which delivery tip is BEST for a nervous speaker?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Speak as fast as possible" },
              { id: "b", text: "Speak clearly at a steady pace and pause between points" },
              { id: "c", text: "Read every word from notes without looking up" },
              { id: "d", text: "Avoid eye contact" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Delivery", statement: "Clear, steady pace + pauses = confident delivery." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — steady pace and pauses help control nerves.", working: "steady pace", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** Speak clearly at a steady pace and pause between points",
            commonErrors: ["Choosing to read monotonously."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla3-u2-short-presentations-q9",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Presentation Plan",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Plan: 'My hobby is football. I play every weekend. I like it a lot. The end.'",
          },
          stem: "What is the weakest feature of this presentation plan?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It has too many points" },
              { id: "b", text: "It has no structure — no greeting, examples, signposts or proper closing" },
              { id: "c", text: "It is too long" },
              { id: "d", text: "It uses too many signposts" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation evaluation", statement: "Good presentations need structure: opening, points with examples, closing, signposts." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — plan lacks all structural features.", working: "no structure", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** It has no structure — no greeting, examples, signposts or proper closing",
            commonErrors: ["Saying it is 'too short' — the issue is structure."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla3-u2-short-presentations-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "You want to introduce an example in your presentation. Which signpost fits best?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "In conclusion" },
              { id: "b", text: "For example" },
              { id: "c", text: "However" },
              { id: "d", text: "Good morning" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Signpost meanings", statement: "'For example' introduces an illustration." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'For example' introduces an example.", working: "For example", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** For example",
            commonErrors: ["Choosing 'In conclusion' — that ends the talk."],
            examinerNote: "C1 for (b).",
          },
        },
        {
          id: "mla3-u2-short-presentations-q11",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Mini Script",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Hello everyone, today I will talk about my hobby — photography. First, I will explain why I started. For example, I took a photo of a sunset last summer. In conclusion, photography helps me see the world differently. Thank you for listening.",
          },
          stem: "How many signpost phrases appear in this script?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Signposts", statement: "First / For example / In conclusion are signposts." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — 'First', 'For example', 'In conclusion' = 3 signposts.", working: "3", marks: 1, markCode: "C" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting 'Hello everyone' as a signpost."],
            examinerNote: "Signposts mark structure, not greetings.",
          },
        },
        {
          id: "mla3-u2-short-presentations-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Presentation to Improve",
            author: "Written for Akademik Space",
            source: "Speaking practice",
            text: "Today I will talk about music. Music is good. I like pop music. Pop music is loud. Classical music is quiet. Thank you.",
          },
          stem: "How many main points does this presentation have? How many examples does it include?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 2 },
              { label: "b", answer: 0 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation evaluation", statement: "Points should be distinct ideas; examples should illustrate them." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — two points: likes music / types of music (pop vs classical).", working: "2", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — no 'for example' details given = 0 examples.", working: "0", marks: 1, markCode: "C" },
            ],
            finalAnswer: "2 points; 0 examples.",
            commonErrors: ["Counting each sentence as a point."],
            examinerNote: "Examples must illustrate a point.",
          },
        },
        {
          id: "mla3-u2-short-presentations-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write a closing sentence for a presentation about your favourite sport.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Presentation closing", statement: "Thank the audience + invite questions." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — appropriate closing to a sport talk.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — correct grammar and punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Thank you for listening. Would you like to hear about my best match?'",
            commonErrors: ["Ending abruptly without thanks."],
            examinerNote: "Must close, not introduce new content.",
          },
        },
        {
          id: "mla3-u2-short-presentations-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Add three signpost phrases to improve this script: 'I started photography last year. I take photos of animals. I like it because it is relaxing.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Signposting", statement: "First / For example / In conclusion guide the audience." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — signpost added appropriately.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — second and third signposts added appropriately.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — improved script flows better.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "e.g. 'First, I started photography last year. For example, I take photos of animals. In conclusion, I like it because it is relaxing.'",
            commonErrors: ["Signposts that don't fit the logic."],
            examinerNote: "Three appropriate signposts needed.",
          },
        },
        {
          id: "mla3-u2-short-presentations-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student plans a presentation about 'My Favourite Food' but only writes: 'I like pizza. It is tasty.' Improve the plan: suggest an opening, two points with examples, a closing, and three signposts.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Presentation planning", statement: "Structure: opening + points with examples + closing + signposts." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — opening with greeting and topic suggested.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — two points each with an example.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C: Speaking — closing suggested.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — three signposts included correctly.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Structured plan: opening + 2 points with examples + closing + 3 signposts.",
            commonErrors: ["Points without examples or signposts."],
            examinerNote: "All structural elements needed.",
          },
        },
        {
          id: "mla3-u2-short-presentations-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write the script for a 90-second presentation about something you enjoy doing.",
          parts: [
            { label: "a", prompt: "Write an opening (greeting + topic preview).", marks: 1 },
            { label: "b", prompt: "Write two main points, each with an example.", marks: 3 },
            { label: "c", prompt: "Write a closing with at least three signpost phrases in the script.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Presentation script", statement: "Opening + points with examples + closing + signposts." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C: Speaking — clear opening announcing topic.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion C: Speaking — two distinct main points.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — each point has a concrete example.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — correct grammar and vocabulary.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — appropriate closing.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D: Writing — at least three signposts used correctly.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Opening + 2 points with examples + closing + 3 signposts.",
            commonErrors: ["Points without examples.", "Missing signposts."],
            examinerNote: "Must sound natural when spoken.",
          },
        },
      ],
    },
  ],
};
