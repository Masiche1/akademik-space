import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "mll1-u3-lesson-3-3",
  code: "3-3",
  title: "Writing Messages and Letters",
  goal: "I CAN write a clear message or letter with a greeting, the main information and a friendly ending.",
  standards: [
    "MYP Language and Literature",
    "Criterion B: Organizing",
    "Criterion C: Producing text",
    "Criterion D: Using language",
  ],
  vocabulary: [
    { term: "Message", definition: "Short written information for someone, like a note left on the fridge." },
    { term: "Letter", definition: "A longer written message, often personal, with a greeting and sign-off." },
    { term: "Greeting", definition: "The opening words of a letter or message, like 'Dear Sam' or 'Hi Mum'." },
    { term: "Sign-off", definition: "The friendly ending of a letter, like 'Love,' or 'See you soon,' before your name." },
    { term: "Purpose", definition: "The reason for writing — to inform, invite, thank or persuade." },
  ],
  concepts: [
    {
      id: "mll1-u3-message-letter",
      title: "Messages and letters",
      skill: "Write a clear message or letter with greeting, content and sign-off matched to its purpose.",
      lesson: {
        sections: [
          {
            heading: "Parts of a letter",
            body: "A friendly letter has four parts: the **greeting** ('Dear Grandma'), the **body** (your message), the **sign-off** ('Love,') and your **name**. Keep the tone friendly and the sentences clear.",
          },
          {
            heading: "Messages",
            body: "A **message** is shorter — a note to a family member or friend. It still needs the key information: who it is for, what you want to say, and when or where it matters. 'Mum — can you pick me up at 4? I'll be at the library. Love, Jo' works.",
          },
          {
            heading: "Purpose and audience",
            body: "Think about **who** will read it (**audience**) and **why** you are writing (**purpose**). A note to a friend is casual; a letter to a teacher is more polite. Match your words to the reader.",
          },
        ],
        keyFormulas: [
          { name: "Letter formula", statement: "Greeting + message + sign-off + name." },
        ],
        workedExample: {
          problem: "Write the parts of a message inviting a friend to a birthday party.",
          solution: "Greeting: 'Hi Tom,' — Body: 'My birthday party is on Saturday at 2pm at my house. Can you come?' — Sign-off: 'See you there!' — Name: 'Priya'.",
        },
      },
      questions: [
        {
          id: "mll1-u3-message-letter-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct order of parts in a friendly letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Body, greeting, name, sign-off" },
              { id: "b", text: "Name, body, greeting, sign-off" },
              { id: "c", text: "Sign-off, body, greeting, name" },
              { id: "d", text: "Greeting, body, sign-off, name" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter structure", statement: "Letters open with a greeting, carry the message, close with a sign-off and name." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): greeting → body → sign-off → name — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Greeting, body, sign-off, name",
          },
        },
        {
          id: "mll1-u3-message-letter-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a short message to your friend telling them you cannot come to the park today and why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Message content", statement: "A message needs: who it is for, the news, the reason, and a sign-off." },
            ],
            steps: [
              { reasoning: "Criterion C (Producing text): greeting/name and the news given, e.g. 'Hi Alex — sorry, I can't come to the park today.'", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): a reason and sign-off, e.g. 'I'm stuck at home with flu. See you tomorrow!'", marks: 1, markCode: "C" },
            ],
            finalAnswer: "e.g. 'Hi Alex — sorry, I can't come to the park today. I'm stuck at home with flu. See you tomorrow! Jo'",
          },
        },
        {
          id: "mll1-u3-message-letter-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two students write to their teacher. Amy writes: 'hey teacher lol cant come tmrw my dog ate my homework'. Ben writes: 'Dear Mr Silva, I am sorry but I cannot attend school tomorrow. My dog has chewed my homework. I will hand it in on Friday. Thank you, Ben.' Explain why Ben's letter is more appropriate for a teacher.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Audience and register", statement: "Language should match the reader — teachers get polite, complete letters, not slang." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): Ben uses polite, standard English ('I am sorry', 'I will hand it in') while Amy uses slang ('lol', 'cant', 'tmrw').", marks: 1, markCode: "D" },
              { reasoning: "Criterion B (Organizing): Ben's letter has proper structure — greeting, clear paragraphs, explanation and a plan for the homework.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C (Producing text): it answers the teacher's likely questions (why absent, what happened, when it will be handed in) respectfully.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Ben's letter is polite, correctly structured and gives the teacher the information needed — appropriate register for a teacher.",
          },
        },
        {
          id: "mll1-u3-message-letter-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a message inviting a classmate to your art exhibition, including when and where.", marks: 2 },
            { label: "b", prompt: "Explain how the message's language would change if it were addressed to your best friend instead.", marks: 1 },
            { label: "c", prompt: "Check your message has all four parts and describe what you would fix if any were missing.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Message structure and register", statement: "Greeting, purpose, details and sign-off; tone matches the audience." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): an invitation message with greeting, event details (when/where) and sign-off.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): correct punctuation and clear, complete sentences.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): for a best friend the tone could be casual — 'Hey!', abbreviations, exclamation marks — while a classmate invitation stays friendly but clear.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B (Organizing): identifies greeting, body, sign-off, name — missing parts get added.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C (Producing text): revising for clarity and correct punctuation before sending.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) Invitation message with details. (b) Friend version is more casual. (c) Check all four parts and punctuation.",
          },
        },
        {
          id: "mll1-u3-message-letter-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'greeting' in a letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The opening words like 'Dear Sam' or 'Hi Mum'" },
              { id: "b", text: "The last line with your name" },
              { id: "c", text: "The main message" },
              { id: "d", text: "The stamp on the envelope" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Letter parts", statement: "The greeting opens the letter." }],
            steps: [{ reasoning: "Criterion B (Organizing): the greeting is the opening like 'Dear Sam' — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** The opening words like 'Dear Sam' or 'Hi Mum'",
          },
        },
        {
          id: "mll1-u3-message-letter-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'sign-off' in a letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The envelope address" },
              { id: "b", text: "The friendly ending like 'Love,' or 'See you soon,'" },
              { id: "c", text: "The greeting at the top" },
              { id: "d", text: "The main paragraph" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Letter parts", statement: "The sign-off closes the letter before the name." }],
            steps: [{ reasoning: "Criterion B (Organizing): the sign-off is the friendly ending — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** The friendly ending like 'Love,' or 'See you soon,'",
          },
        },
        {
          id: "mll1-u3-message-letter-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the 'purpose' of a message?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The stamp you use" },
              { id: "b", text: "The reason for writing — to inform, invite, thank or persuade" },
              { id: "c", text: "The number of words" },
              { id: "d", text: "The colour of the paper" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Purpose", statement: "Purpose is why you are writing." }],
            steps: [{ reasoning: "Criterion B (Organizing): purpose = the reason for writing — (a).", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** The reason for writing",
          },
        },
        {
          id: "mll1-u3-message-letter-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a short message to your friend telling them you will be late for the cinema and why.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Message content", statement: "A message needs who, what, why and a sign-off." }],
            steps: [
              { reasoning: "Criterion C (Producing text): greeting and the news, e.g. 'Hi Jess — sorry, I'll be late for the cinema.'", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): a reason and sign-off, e.g. 'The bus is stuck in traffic. Save me a seat! Jo'.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "e.g. 'Hi Jess — sorry, I'll be late for the cinema. The bus is stuck in traffic. Save me a seat! Jo'",
          },
        },
        {
          id: "mll1-u3-message-letter-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Notes on the Fridge",
            author: "Written for Akademik Space",
            text: "Mum — can you pick me up at 4? I'll be at the library. Love, Jo",
          },
          stem: "What are the four parts of this message? Name them.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Letter parts", statement: "Greeting, body, sign-off, name." }],
            steps: [
              { reasoning: "Criterion B (Organizing): greeting — 'Mum'; body — 'can you pick me up at 4? I'll be at the library.'", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): sign-off — 'Love,'; name — 'Jo'.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Greeting 'Mum', body (the request), sign-off 'Love,', name 'Jo'.",
          },
        },
        {
          id: "mll1-u3-message-letter-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two students write to their principal. Kim writes: 'hey can u fix the toilet its broken lol'. Lee writes: 'Dear Principal, the girls' toilet on the second floor has been broken for three days. Could it please be repaired? Thank you, Lee.' Explain why Lee's message is more appropriate.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Audience and register", statement: "Language should match the reader — formal for officials." }],
            steps: [
              { reasoning: "Criterion D (Using language): Lee uses polite, standard English; Kim uses slang ('hey', 'u', 'lol').", marks: 1, markCode: "D" },
              { reasoning: "Criterion B (Organizing): Lee gives useful details — which toilet, how long broken — and a polite request.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C (Producing text): Lee's message shows respect and gives the principal what they need to act.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Lee's message is polite, detailed and properly addressed — appropriate for a principal; Kim's is casual slang.",
          },
        },
        {
          id: "mll1-u3-message-letter-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What should you think about BEFORE writing a message?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The colour of the pen" },
              { id: "b", text: "Nothing — just start writing" },
              { id: "c", text: "How many pages it will be" },
              { id: "d", text: "Who will read it and why you are writing" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Audience and purpose", statement: "Consider the reader and purpose first." }],
            steps: [{ reasoning: "Criterion B (Organizing): audience and purpose shape the message — (a).", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Who will read it and why you are writing",
          },
        },
        {
          id: "mll1-u3-message-letter-q12",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Invitations",
            author: "Written for Akademik Space",
            text: "Invite 1 (to a friend): 'Hey! My party is Sat at mine. Come!! Tom'\n\nInvite 2 (to a teacher): 'Dear Mr Ali, I am having a birthday party on Saturday at 3pm at my house. You are warmly invited. I hope you can come. Thank you, Sara.'",
          },
          stem: "Explain how the two invitations differ in tone and detail, and why that is appropriate.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Audience and register", statement: "Tone and detail match the reader." }],
            steps: [
              { reasoning: "Criterion D (Using language): the friend's invite is casual — 'Hey!', slang, exclamation marks; the teacher's is polite and formal.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B (Organizing): the teacher's invite gives full details — day, time, place, and a proper greeting/sign-off.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C (Producing text): each suits its audience — friends get casual notes; teachers get respectful, complete messages.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Friend = casual and brief; teacher = polite and detailed — each matches its reader.",
          },
        },
        {
          id: "mll1-u3-message-letter-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a message to a family member telling them about a change of plans.", marks: 2 },
            { label: "b", prompt: "Explain how you matched the tone to the reader.", marks: 1 },
            { label: "c", prompt: "Check your message has all four parts and describe any fixes.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Message structure", statement: "Greeting, body, sign-off, name — tone matches the reader." }],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): a message with greeting, news of changed plans and sign-off.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): correct punctuation and clear sentences.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): warm/friendly tone suits a family member — 'Hi Grandma', 'Love'.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B (Organizing): checks greeting, body, sign-off, name; adds missing parts.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C (Producing text): revises for clarity and punctuation.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) Message with change of plans. (b) Friendly tone for family. (c) Check all four parts and punctuation.",
          },
        },
        {
          id: "mll1-u3-message-letter-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'message'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A list of rules" },
              { id: "b", text: "A short written note for someone" },
              { id: "c", text: "A long formal letter" },
              { id: "d", text: "A poem" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Message", statement: "A message is a short written note for someone." }],
            steps: [{ reasoning: "Criterion B (Organizing): a message is short written information, like a fridge note — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** A short written note for someone",
          },
        },
        {
          id: "mll1-u3-message-letter-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a suitable sign-off for a message to your aunt?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To whom it may concern," },
              { id: "b", text: "Love," },
              { id: "c", text: "Yours faithfully," },
              { id: "d", text: "Dear Sir," },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Message parts", statement: "Messages need a warm sign-off matched to the reader." }],
            steps: [{ reasoning: "Criterion C (Producing text): 'Love,' is warm and suits a family member — (b). The others are formal.", marks: 1, markCode: "C" }],
            finalAnswer: "**(b)** Love,",
          },
        },
        {
          id: "mll1-u3-message-letter-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a message inviting a friend to a sleepover, including when and where.", marks: 2 },
            { label: "b", prompt: "Explain how the message would change if sent to your teacher instead.", marks: 1 },
            { label: "c", prompt: "Describe how you would check the message before giving it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Message purpose and audience", statement: "Include details; tone matches the reader." }],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): invitation with greeting, when/where details and sign-off.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): correct punctuation and clear sentences.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): teacher version would be polite and formal — 'Dear', no slang, full sentences.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B (Organizing): check all four parts are present.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C (Producing text): check the details (time, place) are correct and punctuation is right.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) Sleepover invitation with details. (b) Teacher version is polite/formal. (c) Check parts, details and punctuation.",
          },
        },
      ],
    },
    {
      id: "mll1-u3-letter-to-someone",
      title: "Writing a letter to someone",
      skill: "Write a personal letter with a clear purpose, warm tone and all the correct parts.",
      lesson: {
        sections: [
          {
            heading: "Choosing your purpose",
            body: "Before writing, decide **why**: to **thank** someone, **invite** them, **apologize** or just **share news**. Your purpose shapes what you say and how you say it.",
          },
          {
            heading: "The tone of a letter",
            body: "A **warm** letter uses friendly words: 'I was so happy to hear from you', 'It was lovely to see you'. A **formal** letter to a teacher or stranger uses 'Dear Mr…', polite requests and 'Yours sincerely'. Match the tone to the person.",
          },
          {
            heading: "Full letter layout",
            body: "Your address and the date go at the top (for formal letters). Then the **greeting**, **body paragraphs** (one idea per paragraph), **sign-off** and **name**. Keep paragraphs short and readable.",
          },
        ],
        keyFormulas: [
          { name: "Letter purposes", statement: "Thank, invite, apologize, inform — pick one before you write." },
        ],
        workedExample: {
          problem: "Write the opening and closing of a thank-you letter to a neighbour who looked after your cat.",
          solution: "Opening: 'Dear Mrs Okafor, thank you so much for looking after my cat while we were away — she was so well cared for.' Closing: 'With grateful thanks, / Amara.'",
        },
      },
      questions: [
        {
          id: "mll1-u3-letter-to-someone-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you decide before writing a letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The purpose — why you are writing" },
              { id: "b", text: "The font size" },
              { id: "c", text: "How many pages it will be" },
              { id: "d", text: "The color of the envelope" },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Purpose first", statement: "The reason for writing shapes content and tone." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): deciding the purpose comes before writing — (c).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** The purpose — why you are writing",
          },
        },
        {
          id: "mll1-u3-letter-to-someone-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the greeting and sign-off for a formal letter to your headteacher.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Formal letter conventions", statement: "Formal letters use 'Dear' + title and a formal sign-off like 'Yours sincerely'." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): greeting such as 'Dear Headteacher' or 'Dear Mr/Ms [name]'.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D (Using language): sign-off such as 'Yours sincerely,' or 'Yours faithfully,' followed by the writer's name.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Dear Headteacher,' ... 'Yours sincerely,' / Your name",
          },
        },
        {
          id: "mll1-u3-letter-to-someone-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain three differences between a letter to a friend and a letter to a company asking about a job.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Register", statement: "Register is the level of formality chosen to suit the audience and purpose." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): tone — friendly/casual ('Hi Sam', slang ok) vs polite/formal ('Dear Sir/Madam', no slang).", marks: 1, markCode: "D" },
              { reasoning: "Criterion B (Organizing): structure — a friend letter is informal; a job letter needs addresses, date, clear paragraphs and formal sign-off.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C (Producing text): content — personal news vs a clear request with relevant details (qualifications, availability).", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Tone (casual vs formal), structure (simple vs full formal layout), and content (personal chat vs a clear professional request).",
          },
        },
        {
          id: "mll1-u3-letter-to-someone-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write the opening paragraph of a letter thanking a relative for a birthday gift.", marks: 2 },
            { label: "b", prompt: "Explain why one paragraph per idea makes a letter easier to read.", marks: 1 },
            { label: "c", prompt: "Write a closing paragraph and sign-off for the same letter.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Letter paragraphs and tone", statement: "One idea per paragraph; warm, personal tone for family." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): warm opening naming the gift and thanks, e.g. 'Thank you so much for the science kit — I have already built the rocket!'", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): greeting and correct sentence punctuation.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B (Organizing): separate paragraphs let the reader find each idea quickly and give the letter shape.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C (Producing text): a closing that looks forward or repeats thanks, e.g. 'I can't wait to show you my project next visit.'", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): sign-off and name, e.g. 'With love,' / Your name.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Warm thank-you naming the gift. (b) Paragraphs separate ideas for readability. (c) Forward-looking close + 'With love,' + name.",
          },
        },
        {
          id: "mll1-u3-letter-to-someone-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you decide BEFORE writing a letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The colour of the paper" },
              { id: "b", text: "How many stamps to buy" },
              { id: "c", text: "The font size" },
              { id: "d", text: "The purpose — why you are writing" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Purpose first", statement: "The reason for writing shapes the letter." }],
            steps: [{ reasoning: "Criterion B (Organizing): deciding the purpose comes first — (a).", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** The purpose — why you are writing",
          },
        },
        {
          id: "mll1-u3-letter-to-someone-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a 'warm' opening for a letter to a friend?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I am writing to inform you that..." },
              { id: "b", text: "Yours faithfully," },
              { id: "c", text: "To whom it may concern," },
              { id: "d", text: "I was so happy to hear from you!" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Tone", statement: "Warm letters use friendly, personal words." }],
            steps: [{ reasoning: "Criterion D (Using language): 'so happy to hear from you' is warm and friendly — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** I was so happy to hear from you!",
          },
        },
        {
          id: "mll1-u3-letter-to-someone-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sign-off is most FORMAL?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Bye!" },
              { id: "b", text: "Yours sincerely," },
              { id: "c", text: "See you soon!" },
              { id: "d", text: "Love," },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Formal sign-off", statement: "Formal letters use 'Yours sincerely' or 'Yours faithfully'." }],
            steps: [{ reasoning: "Criterion D (Using language): 'Yours sincerely' is the formal sign-off — (c).", marks: 1, markCode: "D" }],
            finalAnswer: "**(c)** Yours sincerely,",
          },
        },
        {
          id: "mll1-u3-letter-to-someone-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the greeting and sign-off for a letter thanking your grandmother for a birthday present.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Letter tone", statement: "Family letters are warm: 'Dear'/'Hi' and 'Love'/'With thanks'." }],
            steps: [
              { reasoning: "Criterion C (Producing text): greeting such as 'Dear Grandma' or 'Hi Grandma'.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): sign-off such as 'Love,' or 'Thank you so much,' plus name.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "e.g. 'Dear Grandma,' ... 'Thank you so much,' / Your name",
          },
        },
        {
          id: "mll1-u3-letter-to-someone-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write the opening sentence of a letter apologizing to a friend for missing their party.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Letter purpose", statement: "An apology letter opens by saying sorry clearly." }],
            steps: [
              { reasoning: "Criterion C (Producing text): an opening that apologizes, e.g. 'I am so sorry I missed your party — I felt terrible.'", marks: 1, markCode: "C" },
              { reasoning: "Criterion D (Using language): correct punctuation and complete sentence.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'I am so sorry I missed your party — I felt terrible.'",
          },
        },
        {
          id: "mll1-u3-letter-to-someone-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Letters",
            author: "Written for Akademik Space",
            text: "Letter 1 (to a friend): 'Hey Sam! Guess what — I won the race!! You won't believe it. Come celebrate at mine Saturday. Cheers, Jo'\n\nLetter 2 (to a teacher): 'Dear Mr Silva, I am writing to inform you that I won the inter-school race on Friday. I would be grateful if you could congratulate me in assembly. Yours sincerely, Jo'",
          },
          stem: "Explain three differences between the two letters and why each suits its reader.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Register", statement: "Register is the formality level matched to the reader." }],
            steps: [
              { reasoning: "Criterion D (Using language): tone — casual ('Hey!', slang) vs formal ('Dear Mr Silva', 'I would be grateful').", marks: 1, markCode: "D" },
              { reasoning: "Criterion B (Organizing): structure — friend letter is informal; teacher letter has proper greeting and formal sign-off.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C (Producing text): purpose — friend gets news and an invitation; teacher gets a polite request for recognition.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Tone (casual vs formal), structure (informal vs proper layout), purpose (share news vs polite request) — each matches its reader.",
          },
        },
        {
          id: "mll1-u3-letter-to-someone-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What are the four main parts of a personal letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Introduction, three chapters, conclusion" },
              { id: "b", text: "Greeting, body, sign-off, name" },
              { id: "c", text: "Title, cover, pages, back" },
              { id: "d", text: "Stamp, envelope, address, postmark" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Letter structure", statement: "Letters have greeting, body, sign-off and name." }],
            steps: [{ reasoning: "Criterion B (Organizing): the four parts are greeting, body, sign-off, name — (a).", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Greeting, body, sign-off, name",
          },
        },
        {
          id: "mll1-u3-letter-to-someone-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why a letter to a company asking about a job should NOT use slang or abbreviations like 'cant' or 'tmrw'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Register", statement: "Professional letters need polite, standard English." }],
            steps: [
              { reasoning: "Criterion D (Using language): slang ('cant', 'tmrw') is informal and could make the writer look careless or unserious.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B (Organizing): a job letter is a formal document — it needs correct spelling, grammar and structure to be taken seriously.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C (Producing text): the first impression matters — formal language shows respect and professionalism.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Slang looks unprofessional and careless; formal letters show respect and get taken seriously.",
          },
        },
        {
          id: "mll1-u3-letter-to-someone-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write the opening paragraph of a letter inviting a relative to visit.", marks: 2 },
            { label: "b", prompt: "Explain why one paragraph per idea helps the reader.", marks: 1 },
            { label: "c", prompt: "Write a closing paragraph and sign-off for the same letter.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Letter paragraphs and tone", statement: "One idea per paragraph; warm tone for family." }],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): a warm opening inviting the relative, naming the occasion.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): greeting and correct punctuation.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion B (Organizing): separate paragraphs let the reader find each idea quickly.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C (Producing text): a friendly closing looking forward to the visit.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): sign-off and name, e.g. 'Love,' / Your name.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Warm invitation opening. (b) Paragraphs separate ideas. (c) Friendly close + sign-off.",
          },
        },
        {
          id: "mll1-u3-letter-to-someone-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'body' of a letter?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The sign-off at the end" },
              { id: "b", text: "The main message of the letter" },
              { id: "c", text: "The greeting at the top" },
              { id: "d", text: "The envelope" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Letter parts", statement: "The body is the main message of the letter." }],
            steps: [{ reasoning: "Criterion B (Organizing): the body carries the main message — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** The main message of the letter",
          },
        },
        {
          id: "mll1-u3-letter-to-someone-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a good opening for a thank-you letter to a neighbour who watered your plants?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I demand payment for your services." },
              { id: "b", text: "Thank you so much for watering my plants while I was away." },
              { id: "c", text: "To whom it may concern," },
              { id: "d", text: "Plants are boring." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Letter purpose", statement: "A thank-you letter opens by thanking clearly and warmly." }],
            steps: [{ reasoning: "Criterion C (Producing text): (b) thanks clearly and names what they did — warm and appropriate.", marks: 1, markCode: "C" }],
            finalAnswer: "**(b)** Thank you so much for watering my plants while I was away.",
          },
        },
        {
          id: "mll1-u3-letter-to-someone-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a three-sentence letter to a friend telling them about your holiday.", marks: 3 },
            { label: "b", prompt: "Explain how the letter's tone suits a friend.", marks: 1 },
            { label: "c", prompt: "Describe how you would check the letter before sending.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Letter writing", statement: "Correct parts, tone and checking make a good letter." }],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): a letter with greeting, body about the holiday and sign-off.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion C (Producing text): clear, friendly sentences telling the news.", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): correct punctuation throughout.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D (Using language): casual, warm tone — 'Hi', slang ok, exclamation marks — suits a friend.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion B (Organizing): check greeting, body, sign-off, name and punctuation.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Original letter about the holiday. (b) Casual warm tone suits a friend. (c) Check parts and punctuation.",
          },
        },
      ],
    },
  ],
};
