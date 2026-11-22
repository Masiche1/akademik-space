import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "pypl-u2-lesson-2-2",
  code: "2-2",
  title: "Genres and Text Features",
  goal: "I CAN recognise different kinds of texts — stories, poems, recounts, reports and instructions — and their features.",
  standards: [
    "PYP Language: Reading",
    "PYP transdisciplinary theme: How We Express Ourselves",
    "PYP transdisciplinary theme: Where We Are in Place and Time",
  ],
  vocabulary: [
    { term: "Genre", definition: "A type of text, like a story, poem, recount, report or set of instructions." },
    { term: "Fiction", definition: "Stories that are made up or imagined, like fairy tales and adventures." },
    { term: "Non-fiction", definition: "Texts that give true information, like recounts, reports and instructions." },
    { term: "Recount", definition: "A text that retells real events that happened, usually in time order." },
    { term: "Report", definition: "A text that gives facts about a topic, often with headings and pictures." },
    { term: "Instruction", definition: "A text that tells you how to do something, step by step." },
  ],
  concepts: [
    {
      id: "pypl-u2l2-c1-fiction-poetry",
      title: "Stories and poems",
      skill: "Recognise features of fiction and poetry such as characters, stanzas, rhyme and rhythm.",
      lesson: {
        sections: [
          {
            heading: "Stories (fiction)",
            body: "A **story** or **fiction** text is made up — it has **characters**, a setting and a sequence of events with a beginning, middle and end. Look for speech marks where characters talk, and notice how the writer builds suspense or surprise.",
          },
          {
            heading: "Poems",
            body: "A **poem** is written in **lines** grouped into **stanzas**. Poems often use **rhythm** (a beat you can clap) and **rhyme** (words that sound the same at the end, like cat and hat). Some poems tell a story; others just describe a feeling or a picture. The shape of a poem is part of its meaning.",
          },
        ],
        keyFormulas: [
          { name: "Story features", statement: "Characters, setting, events in order, beginning-middle-end, speech marks" },
          { name: "Poem features", statement: "Lines, stanzas, rhythm, rhyme, imagery" },
        ],
        workedExample: {
          problem: "A text has groups of short lines, a steady beat, and rhyming words at the ends. Is it a story or a poem?",
          solution: "It is a poem — lines, stanzas, rhythm and rhyme are poem features. Stories are written in paragraphs, not lines.",
        },
      },
      questions: [
        {
          id: "pypl-q-u2l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A group of lines in a poem is called a...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Stanza" },
              { id: "b", text: "Paragraph" },
              { id: "c", text: "Heading" },
              { id: "d", text: "Chapter" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stanza", statement: "A stanza is a grouped set of lines in a poem." },
            ],
            steps: [
              { reasoning: "Poems are made of lines grouped into stanzas.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Stanza",
            commonErrors: ["Choosing 'paragraph' — paragraphs belong to prose, not poems."],
          },
        },
        {
          id: "pypl-q-u2l2c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which pair of words rhyme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fish and bird" },
              { id: "b", text: "Tree and book" },
              { id: "c", text: "Cat and dog" },
              { id: "d", text: "Sun and run" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rhyme", statement: "Rhyming words sound the same at the end, e.g. sun and run." },
            ],
            steps: [
              { reasoning: "Sun and run end with the same sound '-un'.", marks: 1, markCode: "M" },
              { reasoning: "The other pairs do not share an ending sound.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Sun and run",
            commonErrors: ["Choosing words that start with the same letter — rhyme is about ending sounds."],
          },
        },
        {
          id: "pypl-q-u2l2c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Brave Little Boat",
            author: "Written for Akademik Space",
            source: "Original poem",
            lineNumbers: true,
            text: "The little boat set sail one day\nTo chase the clouds that floated by.\nThe wind was strong, the waves were high,\nBut still it sailed — oh, what a sight!\n\nIt rocked and rolled through storm and sun,\nThrough silver rain and golden light,\nAnd when at last its journey's done,\nIt docked again, snug and tight.",
          },
          stem: "Read the poem, then answer.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Poetic features", statement: "Rhyme scheme, rhythm and imagery are the features that identify a poem." },
            ],
            steps: [
              { reasoning: "Rhyme: 'day/by', 'high/sight' — the lines rhyme in pairs.", marks: 1, markCode: "M" },
              { reasoning: "Rhythm: each line has a steady beat you could clap.", marks: 1, markCode: "M" },
              { reasoning: "Imagery: 'storm and sun', 'silver rain and golden light' paint pictures with words.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Rhyming line endings, steady rhythm, and word pictures (imagery) such as 'storm and sun'.",
            commonErrors: ["Listing 'it is short' as a feature — short length alone does not make a poem."],
          },
        },
        {
          id: "pypl-q-u2l2c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "A writer wants to tell a made-up adventure about a dragon who befriends a lost child.",
          parts: [
            { label: "a", prompt: "Is this text fiction or non-fiction? Explain your answer.", marks: 1 },
            { label: "b", prompt: "Name two features the story should have.", marks: 2 },
            { label: "c", prompt: "Name two features of a poem that the writer could borrow for part of the story.", marks: 2 },
            { label: "d", prompt: "Explain why stories need a beginning, middle and end.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Genre conventions", statement: "Fiction has characters and imagined events; poems use lines, rhythm and rhyme." },
            ],
            steps: [
              { part: "a", reasoning: "Fiction — dragons and a talking friendship are imagined.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Characters (dragon, child), setting, events in order.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "A beginning-middle-end structure, maybe speech marks.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Rhythm or rhyme in a chant the dragon sings, or lines describing the cave.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Poetic imagery, e.g. 'the moon a silver coin'.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The structure gives the story shape and order.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Readers know where they are in the story; problems are set up and resolved.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Fiction — imagined. (b) Characters, ordered events, structure. (c) Rhyme/rhythm or imagery. (d) Structure gives shape and resolution.",
            commonErrors: ["In (a), saying fiction means 'not true' only — it means made up or imagined."],
          },
        },
        {
          id: "pypl-q-u2l2c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Words that sound the same at the end, like 'cat' and 'hat', are called...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rhyme" },
              { id: "b", text: "Stanzas" },
              { id: "c", text: "Rhythm" },
              { id: "d", text: "Paragraphs" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rhyme", statement: "Rhyming words sound the same at the end." },
            ],
            steps: [
              { reasoning: "Cat and hat share the ending sound — that is rhyme.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Rhyme",
            commonErrors: ["Choosing 'rhythm' — rhythm is the beat, rhyme is the matching sounds."],
          },
        },
        {
          id: "pypl-q-u2l2c1-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Four poem features were named: lines, stanzas, rhythm and rhyme. How many features are there?",
          response: { type: "numeric", parts: [
            { label: "Poem features", answer: 4 },
          ] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Poem features", statement: "Poems use lines, stanzas, rhythm and rhyme." },
            ],
            steps: [
              { reasoning: "Count: lines, stanzas, rhythm, rhyme = 4 features.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering 3 — forgetting one feature such as rhythm."],
          },
        },
        {
          id: "pypl-q-u2l2c1-7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A story about a made-up dragon and a talking tree is which genre?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Report" },
              { id: "b", text: "Non-fiction" },
              { id: "c", text: "Fiction" },
              { id: "d", text: "Recount" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fiction", statement: "Fiction is made up or imagined — dragons and talking trees cannot be real." },
            ],
            steps: [
              { reasoning: "Imagined characters and events make it fiction.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Fiction",
            commonErrors: ["Choosing 'report' — reports give true facts, not imagined stories."],
          },
        },
        {
          id: "pypl-q-u2l2c1-8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two features that a story (fiction text) should have.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Story features", statement: "Stories have characters, a setting, ordered events and a beginning-middle-end structure." },
            ],
            steps: [
              { reasoning: "One feature, e.g. characters or a setting.", marks: 1, markCode: "M" },
              { reasoning: "Second feature, e.g. events in order, beginning-middle-end, or speech marks.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any two of: characters; setting; events in order; beginning-middle-end; speech marks.",
            commonErrors: ["Naming poem features like rhyme — those belong to poems, not stories."],
          },
        },
        {
          id: "pypl-q-u2l2c1-9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A poem has 2 stanzas and each stanza has 4 lines. How many lines does the poem have?",
          response: { type: "numeric", parts: [
            { label: "Lines in the poem", answer: 8 },
          ] },
          markscheme: {
            principles: [
              { kind: "context", name: "Counting poem lines", statement: "Total lines = stanzas multiplied by lines per stanza." },
            ],
            steps: [
              { reasoning: "2 stanzas x 4 lines = 8 lines.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "8",
            commonErrors: ["Answering 6 — adding instead of multiplying the stanzas and lines."],
          },
        },
        {
          id: "pypl-q-u2l2c1-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how you can tell whether a text is a story or a poem.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Genre recognition", statement: "Poems use lines, stanzas, rhythm and rhyme; stories use paragraphs, characters and ordered events." },
            ],
            steps: [
              { reasoning: "Look for lines and stanzas — poems are written in lines grouped into stanzas.", marks: 1, markCode: "M" },
              { reasoning: "Check for rhythm and rhyme — poems often have a beat and rhyming endings.", marks: 1, markCode: "M" },
              { reasoning: "Stories are written in paragraphs with characters and events in order instead.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Poems have lines, stanzas, rhythm and rhyme; stories have paragraphs, characters and ordered events.",
            commonErrors: ["Saying 'poems are short' — length does not decide the genre."],
          },
        },
        {
          id: "pypl-q-u2l2c1-11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which pair of words rhymes?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cloud and rain" },
              { id: "b", text: "Moon and spoon" },
              { id: "c", text: "Star and moon" },
              { id: "d", text: "Wind and tree" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rhyme", statement: "Rhyming words share the same ending sound." },
            ],
            steps: [
              { reasoning: "Moon and spoon both end with the '-oon' sound; the others do not rhyme.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Moon and spoon",
            commonErrors: ["Choosing words that share a letter — rhyme is about sounds, not spelling."],
          },
        },
        {
          id: "pypl-q-u2l2c1-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is the shape of a poem — its lines, stanzas and rhythm — part of its meaning?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Poetic form", statement: "The way a poem looks and sounds helps create its mood and meaning." },
            ],
            steps: [
              { reasoning: "Rhythm gives the poem a beat that matches its mood — a fast beat feels exciting.", marks: 1, markCode: "M" },
              { reasoning: "Stanzas group ideas, so each stanza can hold one picture or feeling.", marks: 1, markCode: "M" },
              { reasoning: "Rhyme makes lines memorable and pleasing to hear.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shape and sound create mood: rhythm sets the beat, stanzas group ideas, rhyme makes it memorable.",
            commonErrors: ["Saying the shape is 'just decoration' — it carries meaning and feeling."],
          },
        },
        {
          id: "pypl-q-u2l2c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many parts does a story have: beginning, middle and end?",
          response: { type: "numeric", parts: [
            { label: "Story parts", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Story structure", statement: "Stories are built from a beginning, middle and end." },
            ],
            steps: [
              { reasoning: "Count: beginning, middle, end = 3 parts.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — forgetting one of the three parts."],
          },
        },
        {
          id: "pypl-q-u2l2c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a poem, a stanza is like which part of a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "An ending" },
              { id: "b", text: "A title" },
              { id: "c", text: "A paragraph" },
              { id: "d", text: "A character" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Stanza", statement: "A stanza groups poem lines the way a paragraph groups sentences in a story." },
            ],
            steps: [
              { reasoning: "Both stanzas and paragraphs group related lines or sentences together.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** A paragraph",
            commonErrors: ["Choosing 'a character' — a stanza is about layout, not people."],
          },
        },
        {
          id: "pypl-q-u2l2c1-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which feature helps you clap along to a poem's beat?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Headings" },
              { id: "b", text: "Rhyme" },
              { id: "c", text: "Stanzas" },
              { id: "d", text: "Rhythm" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rhythm", statement: "Rhythm is the beat of a poem — the pattern you can clap or tap." },
            ],
            steps: [
              { reasoning: "The beat you clap along to is rhythm.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Rhythm",
            commonErrors: ["Choosing 'rhyme' — rhyme is matching sounds, not the beat."],
          },
        },
        {
          id: "pypl-q-u2l2c1-16",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "Rain, Rain, Go Away",
            author: "Written for Akademik Space",
            source: "Original poem",
            lineNumbers: true,
            text: "Rain, rain, go away,\nCome again another day.\nLittle children want to play,\nSo rain, rain, run away.",
          },
          stem: "Read the poem, then answer.",
          parts: [
            { label: "a", prompt: "How many lines does the poem have?", marks: 1 },
            { label: "b", prompt: "Name two poem features you can see or hear in this poem.", marks: 2 },
            { label: "c", prompt: "What feeling does the poem create? Explain how the words do this.", marks: 2 },
            { label: "d", prompt: "Suggest one way a writer could change this poem so it sounds different.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Poetic features", statement: "Lines, rhythm, rhyme and word choice create a poem's mood." },
            ],
            steps: [
              { part: "a", reasoning: "Four lines.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Rhyme: 'away/day', 'play/away' — lines rhyme.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Rhythm: the lines have a steady beat; also repetition of 'rain, rain'.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The poem feels playful and a little fed-up — children want to play.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Words like 'go away' and 'run away' show wanting the rain to stop.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Any sensible change, e.g. change the rhythm, add a new rhyme, or use different words.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "The suggestion is linked to a poem feature.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) 4 lines. (b) Rhyme + rhythm/repetition. (c) Playful, wanting rain to stop. (d) Any feature-linked change.",
            commonErrors: ["In (b), naming 'it is short' — length alone is not a poem feature."],
          },
        },
      ],
    },
    {
      id: "pypl-u2l2-c2-nonfiction-texts",
      title: "Non-fiction texts",
      skill: "Recognise recounts, reports and instructions and their purposes.",
      lesson: {
        sections: [
          {
            heading: "Texts that give true information",
            body: "**Non-fiction** texts tell true things. A **recount** retells real events in time order — 'On Saturday I went to the beach...' A **report** gives facts about a topic — about sharks, volcanoes or our school — usually with a title, headings and pictures. An **instruction** tells you how to do something step by step, like a recipe or a game rule.",
          },
          {
            heading: "Why the genre matters",
            body: "Each genre has a **purpose**. A recount shares an experience; a report teaches facts; an instruction tells you what to do. Recognising the genre helps you know what to expect and how to read it: instructions must be followed in order, while a report can be read in any order using its headings.",
          },
        ],
        keyFormulas: [
          { name: "Non-fiction genres", statement: "Recount = real events in order; Report = facts with headings; Instruction = steps to follow" },
        ],
        workedExample: {
          problem: "A text reads: 'Step 1: Fill the kettle. Step 2: Boil the water. Step 3: Add a tea bag.' What genre is it?",
          solution: "An instruction — it tells you steps to follow in order to make tea.",
        },
      },
      questions: [
        {
          id: "pypl-q-u2l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A text that gives facts about dolphins, with a title and pictures, is a...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Report" },
              { id: "b", text: "Letter to a friend" },
              { id: "c", text: "Story" },
              { id: "d", text: "Poem" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Report", statement: "A report gives true facts about a topic, usually with headings and pictures." },
            ],
            steps: [
              { reasoning: "Facts about dolphins with title and pictures = a report.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Report",
            commonErrors: ["Choosing 'story' — stories are made up; reports give true facts."],
          },
        },
        {
          id: "pypl-q-u2l2c2-2",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "How to Plant a Bean",
            author: "Written for Akademik Space",
            source: "Original instructions",
            text: "You will need: a small pot, soil, a bean seed and water.\nStep 1: Fill the pot with soil.\nStep 2: Push the bean seed one centimetre down.\nStep 3: Cover it with soil and water gently.\nStep 4: Place the pot in a sunny place.",
          },
          stem: "What genre is this text, and what is its purpose?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Instruction genre", statement: "Instructions list numbered steps to follow in order." },
            ],
            steps: [
              { reasoning: "The text gives numbered steps to follow — it is an instruction.", marks: 1, markCode: "M" },
              { reasoning: "Its purpose is to tell you how to plant a bean seed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "An instruction — it tells you how to plant a bean.",
            commonErrors: ["Calling it a report — reports give facts, not steps to do."],
          },
        },
        {
          id: "pypl-q-u2l2c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two texts are mixed up. Text A: 'Dear Diary, today we visited Grandma. She made apple pie...' Text B: 'Bats are the only mammals that can truly fly...' Which is the recount and which is the report, and how can you tell?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Recount vs report", statement: "A recount tells real personal events in time order; a report gives facts about a topic." },
            ],
            steps: [
              { reasoning: "Text A is a recount — it tells real events ('we visited Grandma') in time order, like a diary.", marks: 1, markCode: "M" },
              { reasoning: "Text B is a report — it gives facts about bats.", marks: 1, markCode: "M" },
              { reasoning: "The clues: personal events and time order = recount; general facts about a topic = report.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A is the recount (personal events in order); B is the report (facts about bats).",
            commonErrors: ["Saying both are 'true' so they are the same genre — genre is about form and purpose."],
          },
        },
        {
          id: "pypl-q-u2l2c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          extract: {
            title: "Our Class Pet",
            author: "Written for Akademik Space",
            source: "Original recount",
            text: "Last Monday our class got a new pet — a hamster called Pip. We named him together and voted on his colour: brown won. Every morning, two pupils feed him and change his water. On Friday we made a 'Pip's Diary' poster with drawings of his day. Pip has already learned to run on his wheel at night!",
          },
          stem: "Read the recount, then answer.",
          parts: [
            { label: "a", prompt: "What is the text about, in one sentence?", marks: 1 },
            { label: "b", prompt: "List two things the class did to look after Pip.", marks: 2 },
            { label: "c", prompt: "Why is this text called a recount and not a report?", marks: 2 },
            { label: "d", prompt: "Write the title and one heading you would use for a report about hamsters, based on what you read.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Recount features", statement: "Recounts tell real events in time order, often with 'last Monday', 'every morning', 'on Friday'." },
            ],
            steps: [
              { part: "a", reasoning: "The class got a hamster called Pip and looks after it.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Feeding him and changing his water.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Making a 'Pip's Diary' poster (or voting on his name/colour).", marks: 1, markCode: "A" },
              { part: "c", reasoning: "It tells real events in time order ('last Monday', 'every morning', 'on Friday').", marks: 1, markCode: "M" },
              { part: "c", reasoning: "A report would give general facts about hamsters, not this class's experience.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A title like 'All About Hamsters' and a heading like 'What Hamsters Eat'.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Report titles and headings signal factual content.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Class hamster Pip. (b) Feeding/watering; poster (or naming/voting). (c) Real events in time order. (d) Any report-style title and heading.",
            commonErrors: ["In (c), saying a recount is 'a story' — it is non-fiction, real events."],
          },
        },
        {
          id: "pypl-q-u2l2c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A recount is a text that...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Retells real events in time order" },
              { id: "b", text: "Tells you steps to follow" },
              { id: "c", text: "Tells made-up adventures" },
              { id: "d", text: "Gives facts under headings" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Recount", statement: "A recount retells real events that happened, usually in time order." },
            ],
            steps: [
              { reasoning: "Recounts are real events in order — not made up, not just facts, not steps.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Retells real events in time order",
            commonErrors: ["Choosing (d) — steps to follow are instructions, not a recount."],
          },
        },
        {
          id: "pypl-q-u2l2c2-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Three non-fiction genres were named: recount, report and instruction. How many genres are there?",
          response: { type: "numeric", parts: [
            { label: "Non-fiction genres", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Non-fiction genres", statement: "Recount, report and instruction are the main non-fiction genres." },
            ],
            steps: [
              { reasoning: "Count: recount, report, instruction = 3 genres.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 4 — only three non-fiction genres were named."],
          },
        },
        {
          id: "pypl-q-u2l2c2-7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A text reads: 'Step 1: Wash your hands. Step 2: Get the paint. Step 3: Start painting.' Which genre is it?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Report" },
              { id: "b", text: "Story" },
              { id: "c", text: "Instruction" },
              { id: "d", text: "Recount" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Instruction genre", statement: "Instructions give numbered steps to follow in order." },
            ],
            steps: [
              { reasoning: "Numbered steps to follow = an instruction.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Instruction",
            commonErrors: ["Choosing 'report' — reports give facts, not steps to do."],
          },
        },
        {
          id: "pypl-q-u2l2c2-8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name the purpose of a recount and the purpose of a report.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Genre purposes", statement: "Each genre has a purpose: a recount shares an experience; a report teaches facts." },
            ],
            steps: [
              { reasoning: "Recount purpose: to tell about real events that happened to you.", marks: 1, markCode: "M" },
              { reasoning: "Report purpose: to give true facts about a topic.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Recount = share real events; report = teach facts about a topic.",
            commonErrors: ["Swapping the purposes — a recount is personal events, a report is general facts."],
          },
        },
        {
          id: "pypl-q-u2l2c2-9",
          difficulty: "core",
          totalMarks: 1,
          stem: "An instruction for making a sandwich has 4 steps. How many steps must be followed in order?",
          response: { type: "numeric", parts: [
            { label: "Steps to follow", answer: 4 },
          ] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Instructions", statement: "Every step in an instruction must be followed in order." },
            ],
            steps: [
              { reasoning: "All 4 steps must be followed in order.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering fewer — skipping steps can ruin the result."],
          },
        },
        {
          id: "pypl-q-u2l2c2-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why can a report be read in any order, but an instruction must be followed in order?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Genre purposes", statement: "A report's headings let you find facts in any order; an instruction's steps depend on each other." },
            ],
            steps: [
              { reasoning: "A report gives separate facts under headings, so each section can be read alone.", marks: 1, markCode: "M" },
              { reasoning: "An instruction's steps build on each other — step 2 needs step 1 done first.", marks: 1, markCode: "M" },
              { reasoning: "Following steps out of order can give a wrong or broken result.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Report facts are independent; instruction steps depend on each other, so order matters.",
            commonErrors: ["Saying reports 'have no order' — they have headings that organise the facts."],
          },
        },
        {
          id: "pypl-q-u2l2c2-11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these is a non-fiction text?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A fairy tale" },
              { id: "b", text: "A poem about the rain" },
              { id: "c", text: "A report about sharks with facts" },
              { id: "d", text: "A made-up story about a dragon" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Non-fiction", statement: "Non-fiction gives true information; fiction is made up." },
            ],
            steps: [
              { reasoning: "A report about sharks gives true facts — non-fiction. The others are made up or poems.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** A report about sharks with facts",
            commonErrors: ["Choosing (c) — poems are not non-fiction texts in this sense."],
          },
        },
        {
          id: "pypl-q-u2l2c2-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two mini-texts are mixed up. Text A: 'Dear Diary, today we visited the zoo and saw the lions.' Text B: 'Lions are big cats that live in groups called prides.' Sort them into recount and report and explain your clues.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Recount vs report", statement: "Recounts tell personal real events; reports give general facts about a topic." },
            ],
            steps: [
              { reasoning: "Text A is a recount — 'we visited the zoo' is a personal real event, like a diary.", marks: 1, markCode: "M" },
              { reasoning: "Text B is a report — it gives general facts about lions.", marks: 1, markCode: "M" },
              { reasoning: "Clues: personal events/time order = recount; facts about a topic = report.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A = recount (personal zoo visit); B = report (facts about lions).",
            commonErrors: ["Calling both 'true' so the same genre — genre is about purpose and form."],
          },
        },
        {
          id: "pypl-q-u2l2c2-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Three report features were named: a title, headings and pictures. How many features are there?",
          response: { type: "numeric", parts: [
            { label: "Report features", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Report features", statement: "Reports usually have a title, headings and pictures." },
            ],
            steps: [
              { reasoning: "Count: title, headings, pictures = 3 features.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — forgetting one feature such as pictures."],
          },
        },
        {
          id: "pypl-q-u2l2c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A recount about a class trip usually starts with words like...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Once upon a time'" },
              { id: "b", text: "'Dear Diary,' only" },
              { id: "c", text: "'Last Monday we went to...'" },
              { id: "d", text: "'Step 1:'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Recount openings", statement: "Recounts often start with who, where and when — time words like 'last Monday'." },
            ],
            steps: [
              { reasoning: "'Last Monday we went to...' gives when and what happened — a recount opening.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 'Last Monday we went to...'",
            commonErrors: ["Choosing (a) — 'once upon a time' is for made-up stories, not recounts."],
          },
        },
        {
          id: "pypl-q-u2l2c2-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which sentence would you MOST likely find in a report about dogs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Once, my dog Rex ran away and everyone was sad.'" },
              { id: "b", text: "'The dog said meow.'" },
              { id: "c", text: "'Dogs are popular pets that need food, water and exercise.'" },
              { id: "d", text: "'Step 1: Give the dog a bath.'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Report content", statement: "Reports give general facts about the topic, not one pet's story." },
            ],
            steps: [
              { reasoning: "(b) states general facts about dogs; the others are a story, steps or nonsense.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 'Dogs are popular pets that need food, water and exercise.'",
            commonErrors: ["Choosing (a) — that is a personal story, a recount or narrative, not a report."],
          },
        },
        {
          id: "pypl-q-u2l2c2-16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write the opening of a recount about a real event you remember — a birthday, a trip or a sports day.",
          parts: [
            { label: "a", prompt: "Write the opening sentence with who, where and when.", marks: 2 },
            { label: "b", prompt: "Write two events in time order using connectives.", marks: 2 },
            { label: "c", prompt: "Write the ending sentence.", marks: 1 },
            { label: "d", prompt: "Explain why your writing is a recount and not a report.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Recount conventions", statement: "Recounts tell real personal events in time order with an opening, events and ending." },
            ],
            steps: [
              { part: "a", reasoning: "Opening gives who, where, when, e.g. 'On my last birthday, my family took me to the beach.'", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The opening is a complete, punctuated sentence.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two events in order with connectives, e.g. 'First we swam. Then we built a sandcastle.'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Connectives used correctly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A clear ending, e.g. 'It was the best day ever.'", marks: 1, markCode: "A" },
              { part: "d", reasoning: "It tells real events in time order.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "A report would give general facts, not personal events.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Opening with who/where/when. (b) Ordered events with connectives. (c) Ending. (d) Recount = real events in order.",
            commonErrors: ["In (d), calling it a report — personal events make it a recount."],
          },
        },
      ],
    },
  ],
};
