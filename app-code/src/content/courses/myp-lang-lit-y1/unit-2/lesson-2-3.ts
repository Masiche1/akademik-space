import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "mll1-u2-lesson-2-3",
  code: "2-3",
  title: "Dialogue and Direct Speech",
  goal: "I CAN write and read direct speech using speech marks and new paragraphs for each speaker, and retell what a character said.",
  standards: [
    "MYP Language and Literature",
    "Criterion B: Organizing",
    "Criterion C: Producing text",
    "Criterion D: Using language",
  ],
  vocabulary: [
    { term: "Dialogue", definition: "The words characters say to each other in a story or play." },
    { term: "Direct speech", definition: "Writing down exactly what a character says, in speech marks." },
    { term: "Speech marks", definition: "The punctuation marks that show spoken words, written as ' ' or \" \"." },
    { term: "Speaker", definition: "The character who says a line of dialogue." },
    { term: "Indirect speech", definition: "Reporting what someone said without using their exact words." },
  ],
  concepts: [
    {
      id: "mll1-u2-writing-dialogue",
      title: "Writing dialogue",
      skill: "Write direct speech with speech marks and a new paragraph for each speaker.",
      lesson: {
        sections: [
          {
            heading: "Speech marks",
            body: "**Direct speech** is when you write down the exact words a character says. Put the words inside **speech marks** (' ' or \" \"). The speaker's words go inside the marks; everything else stays outside.",
          },
          {
            heading: "New paragraph for each speaker",
            body: "Start a **new paragraph** every time the **speaker changes**. This makes dialogue easy to read. You do not need 'said' every time if the reader can tell who is talking.",
          },
          {
            heading: "Punctuation with speech",
            body: "The comma or full stop goes **inside** the closing speech mark: 'Let's go,' said Ana. For a question inside speech: 'Are you ready?' she asked.",
          },
        ],
        keyFormulas: [
          { name: "Dialogue rules", statement: "Speech marks around exact words + new paragraph per speaker + punctuation inside the marks." },
        ],
        workedExample: {
          problem: "Write dialogue: Tom says 'I found a shell' and Priya asks 'Where?'",
          solution: "'I found a shell,' said Tom.\n\n'Where?' asked Priya.",
        },
      },
      questions: [
        {
          id: "mll1-u2-writing-dialogue-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where do speech marks go?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "At the end of the story only" },
              { id: "b", text: "Around the speaker's name" },
              { id: "c", text: "Around the whole paragraph" },
              { id: "d", text: "Around the exact words the character says" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Speech marks", statement: "Speech marks enclose the exact spoken words." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): speech marks go around the exact words spoken, so (b) is correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(d)** Around the exact words the character says",
          },
        },
        {
          id: "mll1-u2-writing-dialogue-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Punctuate this dialogue: ben said lets play football sam replied ok",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Dialogue punctuation", statement: "Speech marks around words, new paragraph per speaker, comma inside the marks." },
            ],
            steps: [
              { reasoning: "Criterion D (Using language): correct output — \"'Let's play football,' said Ben.\\n\\n'OK,' replied Sam.\" (accept double or single speech marks).", marks: 1, markCode: "D" },
              { reasoning: "Criterion B (Organizing): two separate paragraphs, one for Ben and one for Sam, each with speech marks and punctuation inside.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "'Let's play football,' said Ben.\n\n'OK,' replied Sam.",
          },
        },
        {
          id: "mll1-u2-writing-dialogue-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Write a two-line dialogue between a child and a parent about homework. Use speech marks and a new paragraph for each speaker.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Dialogue conventions", statement: "Each speaker gets a new paragraph; spoken words sit inside speech marks." },
            ],
            steps: [
              { reasoning: "Criterion C (Producing text): two speakers with speech marks, e.g. \"'Have you done your homework?' asked Mum.\\n\\n'Not yet,' said Jo.\"", marks: 1, markCode: "C" },
              { reasoning: "Criterion D (Using language): punctuation inside the marks — comma or full stop before the closing mark.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B (Organizing): a new paragraph begins for each speaker change.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "e.g. 'Have you done your homework?' asked Mum.\n\n'Not yet,' said Jo. 'Can I play first?'",
          },
        },
        {
          id: "mll1-u2-writing-dialogue-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Rewrite this as direct speech with correct punctuation: maya said i am hungry ben said lets eat", marks: 2 },
            { label: "b", prompt: "Explain why each speaker needs a new paragraph.", marks: 1 },
            { label: "c", prompt: "Write one line of dialogue that is a question, using a question mark inside the speech marks.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Direct speech conventions", statement: "Speech marks, punctuation inside, new paragraph per speaker." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): correct direct speech — \"'I am hungry,' said Maya.\\n\\n'Let's eat,' said Ben.\"", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion B (Organizing): separate paragraphs for Maya and Ben.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion B (Organizing): a new paragraph per speaker shows the reader who is talking without confusion.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C (Producing text): an original question such as 'Are you coming to the park?' with '?' inside the marks.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): capital letter and question mark are placed correctly relative to the speech marks.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) 'I am hungry,' said Maya.\n\n'Let's eat,' said Ben. (b) New paragraphs show who is speaking. (c) e.g. 'Are you coming to the park?'",
          },
        },
        {
          id: "mll1-u2-writing-dialogue-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What goes inside speech marks?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The whole story" },
              { id: "b", text: "The narrator's description" },
              { id: "c", text: "The exact words a character says" },
              { id: "d", text: "The character's name only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Speech marks", statement: "Speech marks enclose exact spoken words." }],
            steps: [{ reasoning: "Criterion D (Using language): the exact words spoken go inside the marks — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(c)** The exact words a character says",
          },
        },
        {
          id: "mll1-u2-writing-dialogue-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When a different character starts speaking, what should you do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nothing different" },
              { id: "b", text: "Start a new paragraph" },
              { id: "c", text: "Use bigger letters" },
              { id: "d", text: "Add a full stop only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Paragraph per speaker", statement: "A new paragraph begins each time the speaker changes." }],
            steps: [{ reasoning: "Criterion B (Organizing): new speaker = new paragraph — (a).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Start a new paragraph",
          },
        },
        {
          id: "mll1-u2-writing-dialogue-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Punctuate: leila said i love ice cream",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Leila said, 'I love ice cream'." },
              { id: "b", text: "Leila, said 'I love ice cream.'" },
              { id: "c", text: "'Leila said I love ice cream.'" },
              { id: "d", text: "Leila said 'I love ice cream.'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Dialogue punctuation", statement: "Speech marks around words; punctuation inside the marks." }],
            steps: [{ reasoning: "Criterion D (Using language): 'Leila said 'I love ice cream.'' — marks around exact words, full stop inside — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(d)** Leila said 'I love ice cream.'",
          },
        },
        {
          id: "mll1-u2-writing-dialogue-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Punctuate this dialogue: tom asked are you coming sam said yes",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Dialogue punctuation", statement: "Speech marks, punctuation inside, new paragraph per speaker." }],
            steps: [
              { reasoning: "Criterion D (Using language): correct output — \"'Are you coming?' asked Tom.\\n\\n'Yes,' said Sam.\"", marks: 1, markCode: "D" },
              { reasoning: "Criterion B (Organizing): separate paragraphs for Tom and Sam; '?' inside the marks for the question.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "'Are you coming?' asked Tom.\n\n'Yes,' said Sam.",
          },
        },
        {
          id: "mll1-u2-writing-dialogue-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a short dialogue (two speakers) between two friends planning a picnic.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Dialogue conventions", statement: "Speech marks around words; new paragraph per speaker." }],
            steps: [
              { reasoning: "Criterion C (Producing text): two speakers with speech marks, e.g. \"'Let's have a picnic on Saturday,' said Ana.\\n\\n'Great idea — I'll bring sandwiches,' said Ben.\"", marks: 1, markCode: "C" },
              { reasoning: "Criterion D (Using language): punctuation inside the marks — comma or question mark before the closing mark.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Let's have a picnic on Saturday,' said Ana.\n\n'Great idea — I'll bring sandwiches,' said Ben.",
          },
        },
        {
          id: "mll1-u2-writing-dialogue-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "This dialogue is wrong: 'Mum said have you finished your homework' — rewrite it correctly and explain the three rules you used.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Dialogue conventions", statement: "Speech marks, punctuation inside, capital letters." }],
            steps: [
              { reasoning: "Criterion D (Using language): correct rewrite — \"'Have you finished your homework?' asked Mum.\"", marks: 1, markCode: "D" },
              { reasoning: "Criterion B (Organizing): speech marks enclose only the spoken words; 'asked Mum' stays outside.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D (Using language): '?' inside the marks and capitals on 'Have' and 'Mum'.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "'Have you finished your homework?' asked Mum.",
          },
        },
        {
          id: "mll1-u2-writing-dialogue-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Where does the comma go in dialogue? 'Let's go' said Ana.",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Let's go,' said Ana." },
              { id: "b", text: "Let's go, said Ana." },
              { id: "c", text: "'Let's go said,' Ana." },
              { id: "d", text: "'Let's go', said Ana." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Punctuation inside marks", statement: "The comma or full stop goes inside the closing speech mark." }],
            steps: [{ reasoning: "Criterion D (Using language): the comma belongs inside the marks — (a).", marks: 1, markCode: "D" }],
            finalAnswer: "**(a)** 'Let's go,' said Ana.",
          },
        },
        {
          id: "mll1-u2-writing-dialogue-q12",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "At the Bus Stop",
            author: "Written for Akademik Space",
            text: "'Is this bus going to the museum?' asked Priya.\n\n'Yes,' said the driver, 'but it leaves in five minutes.'\n\n'Shoot,' said Priya, checking her watch. 'We'd better run.'",
          },
          stem: "Explain how the writer uses paragraphs and speech marks to make this dialogue easy to follow.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Dialogue layout", statement: "New paragraphs show speaker changes; speech marks show exact words." }],
            steps: [
              { reasoning: "Criterion B (Organizing): each new paragraph signals a different speaker — Priya, the driver, Priya again.", marks: 1, markCode: "B" },
              { reasoning: "Criterion D (Using language): speech marks enclose exactly what each person says, while 'said the driver' stays outside.", evidence: "said the driver, 'but it leaves in five minutes.'", marks: 1, markCode: "D" },
              { reasoning: "Criterion A (Analysing): the layout lets the reader follow the conversation's turn-taking clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "New paragraphs mark speaker changes and speech marks show exact words — the reader always knows who is talking.",
          },
        },
        {
          id: "mll1-u2-writing-dialogue-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a two-line dialogue where one character asks a question and the other answers.", marks: 2 },
            { label: "b", prompt: "Explain where the question mark goes and why.", marks: 1 },
            { label: "c", prompt: "Write a line where a character speaks for two sentences inside the same speech marks.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Dialogue punctuation", statement: "Punctuation goes inside the marks; multiple sentences can share one pair of marks." }],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): dialogue with speech marks, e.g. \"'Where is my hat?' asked Jo.\\n\\n'On the chair,' said Mum.\"", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion B (Organizing): new paragraph for each speaker.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion D (Using language): the '?' goes inside the closing mark because it belongs to the spoken question.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C (Producing text): e.g. \"'Come on. We are late,' she shouted.\" — two sentences in one pair of marks.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): punctuation correct inside the marks.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) e.g. 'Where is my hat?' asked Jo. / 'On the chair,' said Mum. (b) '?' inside the marks — it ends the spoken question. (c) e.g. 'Come on. We are late,' she shouted.",
          },
        },
        {
          id: "mll1-u2-writing-dialogue-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is correct direct speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sam 'said' I am happy." },
              { id: "b", text: "Sam said 'I am happy.'" },
              { id: "c", text: "'Sam said I am happy'" },
              { id: "d", text: "Sam said I am happy." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Direct speech", statement: "Direct speech puts exact words in speech marks with punctuation inside." }],
            steps: [{ reasoning: "Criterion D (Using language): exact words in marks, full stop inside — (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** Sam said 'I am happy.'",
          },
        },
        {
          id: "mll1-u2-writing-dialogue-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which line is a question written in direct speech?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Are you coming to the park.'" },
              { id: "b", text: "'Are you coming to the park?'" },
              { id: "c", text: "Are you 'coming to the park?'" },
              { id: "d", text: "Are you coming to the park." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Dialogue punctuation", statement: "Questions inside speech take '?' inside the marks." }],
            steps: [{ reasoning: "Criterion D (Using language): speech marks around the words and '?' inside — (a).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** 'Are you coming to the park?'",
          },
        },
        {
          id: "mll1-u2-writing-dialogue-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Turn this into direct speech: Ana said she was excited about the match.", marks: 2 },
            { label: "b", prompt: "Explain the difference between direct and indirect speech.", marks: 1 },
            { label: "c", prompt: "Write a two-speaker dialogue about a lost dog, using speech marks and paragraphs.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Direct vs indirect speech", statement: "Direct quotes exact words in marks; indirect reports them." }],
            steps: [
              { part: "a", reasoning: "Criterion D (Using language): direct speech — \"'I am so excited about the match,' said Ana.\"", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion B (Organizing): speech marks around the exact words.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion D (Using language): direct speech quotes exact words ('...'); indirect reports them ('Ana said she was excited').", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C (Producing text): dialogue with two speakers, speech marks and separate paragraphs about a lost dog.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion D (Using language): punctuation inside the marks.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) 'I am so excited about the match,' said Ana. (b) Direct quotes exact words; indirect reports. (c) Original dialogue.",
          },
        },
      ],
    },
    {
      id: "mll1-u2-reading-dialogue",
      title: "Reading dialogue",
      skill: "Read a conversation and understand who says what and how they feel.",
      lesson: {
        sections: [
          {
            heading: "Who is speaking?",
            body: "In dialogue, look at **who says each line**. The words 'said Ana' or 'asked Ben' tell you the speaker. When the speaker changes, a **new paragraph** begins — that is your signal.",
          },
          {
            heading: "How they feel",
            body: "Dialogue shows **feelings** through the words and through **how** they are said. 'I'm fine,' she said quietly is very different from 'I'm FINE!' he shouted. The way a character speaks tells you their mood.",
          },
          {
            heading: "Indirect speech",
            body: "Sometimes stories **report** speech instead of quoting it: 'Ana said she was hungry' reports the words without speech marks. This is called **indirect speech** — it is shorter and further away from the exact words.",
          },
        ],
        keyFormulas: [
          { name: "Dialogue reading steps", statement: "1. Find the speaker. 2. Read their exact words. 3. Notice how they say it." },
        ],
        workedExample: {
          problem: "Read: 'I lost my ticket,' whispered Dev. 'It's OK,' said Mum. 'We can buy another one.' Who is worried?",
          solution: "Dev is worried — 'whispered' and 'I lost my ticket' show concern. Mum is calm and reassuring.",
        },
      },
      questions: [
        {
          id: "mll1-u2-reading-dialogue-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a story, what does a new paragraph in dialogue usually show?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The story has ended" },
              { id: "b", text: "A different character is speaking" },
              { id: "c", text: "The setting has changed" },
              { id: "d", text: "A new day has started" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Paragraph per speaker", statement: "A new paragraph signals a change of speaker in dialogue." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): a new paragraph means a different character is speaking — (b).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** A different character is speaking",
          },
        },
        {
          id: "mll1-u2-reading-dialogue-q2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Lost Dog",
            author: "Written for Akademik Space",
            text: "'Have you seen my dog?' cried Leo. 'Biscuit ran off this morning.'\n\n'Don't worry,' said Mrs Chen. 'Dogs usually come back when they're hungry.'",
          },
          stem: "Who is worried in this dialogue? Give two pieces of evidence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dialogue and feeling", statement: "Words like 'cried' and the content of speech show a character's emotion." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Leo is worried — he lost his dog.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): evidence — he 'cried' the question and says 'Biscuit ran off this morning' (the dog is missing).", evidence: "cried Leo ... Biscuit ran off this morning", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Leo is worried — he 'cried' asking and his dog 'ran off this morning'.",
          },
        },
        {
          id: "mll1-u2-reading-dialogue-q3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Secret",
            author: "Written for Akademik Space",
            text: "'I can't tell you,' whispered Ana. 'Not yet.'\n\n'You always keep secrets,' said Ben, kicking the stones. 'Is it about the move?'",
          },
          stem: "Explain what each character is feeling and how the dialogue shows it. Refer to at least three details.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dialogue reveals feeling", statement: "Whispering, speech verbs and body actions reveal emotion." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): Ana is nervous or secretive — she 'whispered' and said 'Not yet' (reluctant to share).", evidence: "whispered Ana. 'Not yet.'", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): Ben feels shut out or suspicious — 'You always keep secrets' shows frustration.", evidence: "You always keep secrets", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'kicking the stones' is a body action showing Ben's restlessness or sulking.", evidence: "kicking the stones", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ana is nervous and secretive ('whispered', 'Not yet'); Ben feels frustrated and suspicious ('always keep secrets', 'kicking the stones').",
          },
        },
        {
          id: "mll1-u2-reading-dialogue-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this dialogue.",
          extract: {
            title: "Before the Match",
            author: "Written for Akademik Space",
            text: "Coach Rao tapped the team list. 'Remember,' she said, 'we've trained for this all season.'\n\nLeo nodded, but his hands wouldn't stop shaking. 'I'm ready,' he said, though his voice was thin.\n\n'Then play,' said Coach Rao. 'Play like it's just another training session.'",
          },
          parts: [
            { label: "a", prompt: "How does Leo really feel? Give two pieces of evidence.", marks: 2 },
            { label: "b", prompt: "What does Coach Rao want the team to do, and how does she say it?", marks: 2 },
            { label: "c", prompt: "Why is 'I'm ready' in speech marks an example of direct speech while 'his voice was thin' is not?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Speech vs narration", statement: "Direct speech is quoted exactly; narration describes actions and feelings outside speech marks." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): Leo feels nervous despite saying he's ready — 'his hands wouldn't stop shaking' and 'his voice was thin'.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): the contrast between his words ('I'm ready') and his body shows hidden nerves.", evidence: "his hands wouldn't stop shaking", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): she wants them to stay calm and treat the match like training — 'play like it's just another training session'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): she says it as a command, 'Then play,' directly and firmly.", evidence: "Then play ... play like it's just another training session", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion D (Using language): 'I'm ready' is the character's exact words in speech marks; 'his voice was thin' is the narrator describing, not quoting.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "(a) Nervous — shaking hands, thin voice. (b) Stay calm, treat it like training — she commands firmly. (c) Speech marks quote exact words; narration describes.",
          },
        },
        {
          id: "mll1-u2-reading-dialogue-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In dialogue, what tells you who is speaking?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Words like 'said Ana' or a new paragraph" },
              { id: "b", text: "The colour of the text" },
              { id: "c", text: "The length of the line" },
              { id: "d", text: "The page number" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Speaker signals", statement: "Speech verbs and new paragraphs identify the speaker." }],
            steps: [{ reasoning: "Criterion B (Organizing): 'said Ana' and new paragraphs tell you who is speaking — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Words like 'said Ana' or a new paragraph",
          },
        },
        {
          id: "mll1-u2-reading-dialogue-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A character says 'I'm fine,' but she 'looked away and hugged her arms'. How does she really feel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sleepy" },
              { id: "b", text: "Upset or worried" },
              { id: "c", text: "Bored" },
              { id: "d", text: "Happy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Actions vs words", statement: "Body actions often show true feelings when words disagree." }],
            steps: [{ reasoning: "Criterion A (Analysing): looking away and hugging arms suggest she is upset — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Upset or worried",
          },
        },
        {
          id: "mll1-u2-reading-dialogue-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is 'indirect speech'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Writing speech inside speech marks" },
              { id: "b", text: "Reporting what someone said without their exact words" },
              { id: "c", text: "Whispering words quietly" },
              { id: "d", text: "Dialogue in a play script" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Indirect speech", statement: "Indirect speech reports words without quoting them exactly." }],
            steps: [{ reasoning: "Criterion D (Using language): indirect speech reports rather than quotes — (a).", marks: 1, markCode: "D" }],
            finalAnswer: "**(b)** Reporting what someone said without their exact words",
          },
        },
        {
          id: "mll1-u2-reading-dialogue-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Surprise",
            author: "Written for Akademik Space",
            text: "'Shh!' whispered Dad. 'She's asleep.'\n\n'But I want to show her,' said Lila, bouncing on her toes. 'It's a surprise!'",
          },
          stem: "How does each character feel? Give one piece of evidence for each.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Dialogue and feeling", statement: "How words are said (whispered vs bouncing) shows emotion." }],
            steps: [
              { reasoning: "Criterion A (Analysing): Dad feels cautious — he 'whispered' and said 'Shh! She's asleep.'", evidence: "whispered Dad. 'Shh! She's asleep.'", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): Lila feels excited — she 'bounced on her toes' and wants to show the surprise.", evidence: "bouncing on her toes ... It's a surprise!", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Dad is cautious ('whispered', 'Shh!'); Lila is excited ('bouncing', wants to surprise her).",
          },
        },
        {
          id: "mll1-u2-reading-dialogue-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Broken Cup",
            author: "Written for Akademik Space",
            text: "'Who broke the cup?' asked Mum.\n\nThe room went quiet. Tom stared at the floor and said nothing.",
          },
          stem: "Who probably broke the cup? Give two clues.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Inference from behaviour", statement: "Silence and avoiding eyes suggest guilt." }],
            steps: [
              { reasoning: "Criterion A (Analysing): Tom probably broke it — he stays silent when asked.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): clues — 'the room went quiet' and 'stared at the floor and said nothing' show he is hiding something.", evidence: "stared at the floor and said nothing", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tom — his silence and staring at the floor suggest guilt.",
          },
        },
        {
          id: "mll1-u2-reading-dialogue-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Letter",
            author: "Written for Akademik Space",
            text: "'Did you write that letter?' asked Sam, folding his arms.\n\n'What letter?' said Ana, but her eyes flickered toward the desk.",
          },
          stem: "What is really happening between Sam and Ana? Explain using two clues.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Dialogue reveals truth", statement: "Denials plus small actions show what characters really feel." }],
            steps: [
              { reasoning: "Criterion A (Analysing): Ana probably did write the letter — she denies it but her 'eyes flickered toward the desk' where it likely is.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): clue 1 — 'What letter?' is a suspicious denial, not a real question.", evidence: "What letter?", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): clue 2 — Sam 'folding his arms' shows he is suspicious or annoyed.", evidence: "folding his arms", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ana is hiding that she wrote the letter — her denial and glance at the desk give her away; Sam is suspicious.",
          },
        },
        {
          id: "mll1-u2-reading-dialogue-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "In 'Ana said she was tired', what type of speech is this?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Dialogue" },
              { id: "b", text: "Direct speech" },
              { id: "c", text: "Indirect speech" },
              { id: "d", text: "A question" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Indirect speech", statement: "Indirect speech reports words without speech marks." }],
            steps: [{ reasoning: "Criterion D (Using language): 'she was tired' reports without exact words — indirect speech, (b).", marks: 1, markCode: "D" }],
            finalAnswer: "**(c)** Indirect speech",
          },
        },
        {
          id: "mll1-u2-reading-dialogue-q12",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Goodbye at the Station",
            author: "Written for Akademik Space",
            text: "'I'll write every week,' promised Ben, but his eyes stayed on the floor.\n\n'Sure you will,' said Gran, squeezing his hand. 'I'll be waiting by the window.'",
          },
          stem: "Explain what each character is really feeling, using the words and actions.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Hidden feelings in dialogue", statement: "Actions and tone can contradict spoken words." }],
            steps: [
              { reasoning: "Criterion A (Analysing): Ben says he'll write but 'his eyes stayed on the floor' — he is probably sad about leaving.", evidence: "his eyes stayed on the floor", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): Gran 'squeezing his hand' and saying 'I'll be waiting' shows she is loving but also worried or sad about the goodbye.", evidence: "squeezing his hand ... I'll be waiting by the window", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): both hide sadness behind kind words — the dialogue is about missing each other.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ben is sad but pretending to be brave; Gran is loving and a little sad — both hide feelings behind kind words.",
          },
        },
        {
          id: "mll1-u2-reading-dialogue-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this dialogue.",
          extract: {
            title: "The School Trip",
            author: "Written for Akademik Space",
            text: "'I can't believe we're finally going,' whispered Kai, clutching his permission slip.\n\n'Stop looking so nervous,' laughed Suki. 'The museum is boring anyway.'\n\n'It isn't,' said Kai, though his hands were shaking. 'I really want to see the dinosaur hall.'",
          },
          parts: [
            { label: "a", prompt: "How does Kai really feel? Give two pieces of evidence.", marks: 2 },
            { label: "b", prompt: "Why does Suki say the museum is boring? What does this show about her?", marks: 2 },
            { label: "c", prompt: "Explain how the writer shows Kai's mixed feelings.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Dialogue and character", statement: "Speech, actions and contradictions reveal true feelings." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): Kai is nervous but excited — 'whispered', 'clutching his permission slip', 'hands were shaking' show nerves.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): 'I really want to see the dinosaur hall' shows genuine excitement underneath the nerves.", evidence: "I really want to see the dinosaur hall", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): Suki probably wants to hide her own nerves — saying it's 'boring anyway' is a defence, not her real view.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): she 'laughed' — laughing at Kai's nerves suggests she is trying to cover her own fear.", evidence: "laughed Suki", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the writer contrasts his worried actions ('hands shaking') with his excited words ('really want to see') to show mixed feelings.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Nervous and excited — shaking hands but wants to see the dinosaurs. (b) She hides her own nerves by pretending it's boring. (c) Actions contradict words to show mixed feelings.",
          },
        },
        {
          id: "mll1-u2-reading-dialogue-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who is the 'speaker' in a dialogue?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The person reading the story" },
              { id: "b", text: "The narrator only" },
              { id: "c", text: "The character who says a line" },
              { id: "d", text: "The author" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Speaker", statement: "The speaker is the character who says a line." }],
            steps: [{ reasoning: "Criterion B (Organizing): the speaker says the words — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** The character who says a line",
          },
        },
        {
          id: "mll1-u2-reading-dialogue-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "In 'I'm going to fail,' moaned Omar, how does Omar feel?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Worried or hopeless" },
              { id: "b", text: "Angry" },
              { id: "c", text: "Confident" },
              { id: "d", text: "Bored" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Dialogue and feeling", statement: "Words like 'moaned' and the content show emotion." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'going to fail' and 'moaned' show worry/hopelessness — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** Worried or hopeless",
          },
        },
        {
          id: "mll1-u2-reading-dialogue-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this dialogue.",
          extract: {
            title: "The Secret Garden",
            author: "Written for Akademik Space",
            text: "'I found something in the garden,' said Tess, stopping by the gate. 'Something blue, under the old shed.'\n\n'Really?' asked Jo, leaning closer. 'Show me.'\n\n'Only if you promise not to tell,' said Tess, her voice dropping to a whisper.",
          },
          parts: [
            { label: "a", prompt: "What has Tess found? What do you infer?", marks: 2 },
            { label: "b", prompt: "How does each character feel? Give evidence.", marks: 2 },
            { label: "c", prompt: "Why does Tess whisper her condition?", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Dialogue and suspense", statement: "Secretive speech and promises create mystery and show trust." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): Tess found something 'blue' and hidden 'under the old shed' — maybe a box, a bird's nest or a lost object.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): she wants to keep it secret ('only if you promise not to tell').", evidence: "under the old shed ... promise not to tell", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): Tess feels excited but cautious — she stops, lowers her voice, sets a condition.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): Jo feels curious and eager — 'leaning closer', 'Show me' shows interest.", evidence: "leaning closer ... Show me", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): whispering makes the secret feel important and shared — it is a private promise between the two.", evidence: "her voice dropping to a whisper", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) A hidden blue object under the shed — she wants to keep it secret. (b) Tess excited but cautious; Jo curious. (c) Whispering marks the promise as private and special.",
          },
        },
      ],
    },
  ],
};
