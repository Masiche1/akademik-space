import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "pypl-u3-lesson-3-2",
  code: "3-2",
  title: "Writing for Different Purposes",
  goal: "I CAN write a narrative, a recount and a simple report for different purposes.",
  standards: [
    "PYP Language: Writing",
    "PYP transdisciplinary theme: How We Express Ourselves",
    "PYP transdisciplinary theme: Where We Are in Place and Time",
  ],
  vocabulary: [
    { term: "Narrative", definition: "A story — real or made up — with characters, events and usually a beginning, middle and end." },
    { term: "Recount", definition: "Writing that retells real events in the order they happened." },
    { term: "Report", definition: "Writing that gives facts about a topic, often grouped under headings." },
    { term: "Purpose", definition: "The reason for writing — to tell a story, share what happened, or teach facts." },
    { term: "Heading", definition: "A title that tells the reader what a section of writing is about." },
    { term: "Time connectives", definition: "Words like 'first', 'then', 'next', 'finally' that show the order of events." },
  ],
  concepts: [
    {
      id: "pypl-u3l2-c1-narrative-recount",
      title: "Narratives and recounts",
      skill: "Write a story with a clear structure and a recount of real events in time order.",
      lesson: {
        sections: [
          {
            heading: "Writing a narrative",
            body: "A **narrative** tells a story. Plan it first: **who** is in it, **where** it happens, and **what** goes wrong or changes. Write a **beginning** that hooks the reader, a **middle** with the main events, and an **end** that finishes the story. Use describing words and speech marks ('I am lost!') to bring it to life.",
          },
          {
            heading: "Writing a recount",
            body: "A **recount** tells about something real that happened to you — a trip, a birthday, a sports day. Keep events in **time order** using connectives: 'First we arrived...', 'Then we played...', 'Finally we went home.' Start with who, where and when. A recount is like telling a friend what happened — simple, clear and true.",
          },
        ],
        keyFormulas: [
          { name: "Narrative plan", statement: "Characters + setting + problem + beginning/middle/end" },
          { name: "Recount connectives", statement: "First, then, next, after that, finally" },
        ],
        workedExample: {
          problem: "Write the opening of a recount about a class trip to the museum.",
          solution: "'Last Friday our class went to the science museum. First we looked at the dinosaur skeletons. Then we watched a volcano experiment. Finally we bought postcards in the shop.'",
        },
      },
      questions: [
        {
          id: "pypl-q-u3l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A recount should tell events in...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reverse order" },
              { id: "b", text: "Random order" },
              { id: "c", text: "Alphabetical order" },
              { id: "d", text: "The order they happened" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Recount structure", statement: "A recount tells real events in the order they happened." },
            ],
            steps: [
              { reasoning: "Recounts keep time order.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** The order they happened",
            commonErrors: ["Choosing 'reverse order' — recounts go forwards in time."],
          },
        },
        {
          id: "pypl-q-u3l2c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which connective best starts the second event in a recount: 'We arrived at the beach. ___ we built a sandcastle.'",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because" },
              { id: "b", text: "However" },
              { id: "c", text: "Then" },
              { id: "d", text: "Finally" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Time connectives", statement: "'Then' links the next event in time order; 'finally' is for the last event." },
            ],
            steps: [
              { reasoning: "Building the sandcastle is the next event, not the last — 'then' fits.", marks: 1, markCode: "M" },
              { reasoning: "'Finally' would wrongly suggest it is the last event.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Then",
            commonErrors: ["Choosing 'finally' — that is only for the last event."],
          },
        },
        {
          id: "pypl-q-u3l2c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "This recount is jumbled: 'We ate our lunch. We arrived at the park. We played on the swings. We packed our bags.' Rewrite the four sentences in the correct time order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sequencing a recount", statement: "Events must be ordered logically: arrive, play, eat, leave/pack." },
            ],
            steps: [
              { reasoning: "Arriving must come first — you cannot play before you arrive.", marks: 1, markCode: "M" },
              { reasoning: "Playing and eating follow; packing bags is leaving, so it is last.", marks: 1, markCode: "M" },
              { reasoning: "Correct order: arrived → played on swings → ate lunch → packed bags.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "We arrived at the park. We played on the swings. We ate our lunch. We packed our bags.",
            commonErrors: ["Putting 'packed our bags' in the middle — leaving always comes last."],
          },
        },
        {
          id: "pypl-q-u3l2c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write a short recount (4-5 sentences) about a real event: your last birthday, a sports day, or a day out.",
          parts: [
            { label: "a", prompt: "Write the opening sentence telling who, where and when.", marks: 1 },
            { label: "b", prompt: "Write two events in time order using connectives.", marks: 2 },
            { label: "c", prompt: "Write the ending sentence.", marks: 1 },
            { label: "d", prompt: "Check your recount: does it use time order and complete sentences?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Recount conventions", statement: "Opening (who/where/when) + events in order + ending; complete punctuated sentences." },
            ],
            steps: [
              { part: "a", reasoning: "Opening gives who, where, when, e.g. 'On my last birthday, my family took me to the zoo.'", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two events in order with connectives, e.g. 'First we saw the lions. Then we had lunch.'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Connectives used correctly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A clear ending, e.g. 'It was the best birthday ever.'", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Events are in logical time order.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Sentences are complete with capitals and full stops.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "The recount reads as a true, ordered account.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "A 4-5 sentence recount with opening, ordered events with connectives, ending, and correct punctuation.",
            commonErrors: ["In (d), events out of order or missing punctuation."],
          },
        },
        {
          id: "pypl-q-u3l2c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A narrative is...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A list of facts" },
              { id: "b", text: "A report about a topic" },
              { id: "c", text: "A set of instructions" },
              { id: "d", text: "A story — real or made up — with characters and events" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Narrative", statement: "A narrative tells a story with characters, events and usually a beginning, middle and end." },
            ],
            steps: [
              { reasoning: "A narrative is a story with characters and events.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** A story — real or made up — with characters and events",
            commonErrors: ["Choosing (a) — a list of facts is a report, not a narrative."],
          },
        },
        {
          id: "pypl-q-u3l2c1-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A recount has three parts: an opening with who/where/when, the events and an ending. How many parts are there?",
          response: { type: "numeric", parts: [
            { label: "Recount parts", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Recount structure", statement: "A recount has an opening, ordered events and an ending." },
            ],
            steps: [
              { reasoning: "Count: opening, events, ending = 3 parts.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — forgetting the ending."],
          },
        },
        {
          id: "pypl-q-u3l2c1-7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which connective best starts the LAST event in a recount?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Then" },
              { id: "b", text: "Because" },
              { id: "c", text: "First" },
              { id: "d", text: "Finally" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Time connectives", statement: "'Finally' marks the last event; 'first', 'then' and 'next' mark earlier events." },
            ],
            steps: [
              { reasoning: "'Finally' is used for the last event in a recount.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Finally",
            commonErrors: ["Choosing 'then' — 'then' is for the next event, not the last."],
          },
        },
        {
          id: "pypl-q-u3l2c1-8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write an opening sentence for a recount about a class trip to the museum (include who, where and when).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Recount opening", statement: "A recount opens with who, where and when." },
            ],
            steps: [
              { reasoning: "The sentence gives who (our class), where (the museum) and when (e.g. last Friday).", marks: 1, markCode: "M" },
              { reasoning: "It is a complete, punctuated sentence, e.g. 'Last Friday our class went to the science museum.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any complete opening with who, where, when, e.g. 'Last Friday our class went to the science museum.'",
            commonErrors: ["Missing the when — e.g. 'Our class went to the museum' has no time."],
          },
        },
        {
          id: "pypl-q-u3l2c1-9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A recount describes 4 events: arrive, play, eat lunch, go home. How many events should you write about?",
          response: { type: "numeric", parts: [
            { label: "Events to write", answer: 4 },
          ] },
          markscheme: {
            principles: [
              { kind: "skill", name: "Recount completeness", statement: "A good recount covers all the events in order." },
            ],
            steps: [
              { reasoning: "All 4 events should be included in the recount.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering fewer — leaving out events makes the recount incomplete."],
          },
        },
        {
          id: "pypl-q-u3l2c1-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the difference between a narrative and a recount.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Narrative vs recount", statement: "A narrative tells a story (can be made up); a recount tells real events in time order." },
            ],
            steps: [
              { reasoning: "A narrative tells a story with characters and a problem — it can be real or made up.", marks: 1, markCode: "M" },
              { reasoning: "A recount retells real events that actually happened to you.", marks: 1, markCode: "M" },
              { reasoning: "Both keep events in order, but a recount must be true while a narrative can be imagined.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Narrative = story (real or made up); recount = real events in time order.",
            commonErrors: ["Saying a recount can be made up — recounts are always real."],
          },
        },
        {
          id: "pypl-q-u3l2c1-11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the BEST opening for a recount about a sports day?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Once upon a time, a dragon ran a race.'" },
              { id: "b", text: "'Step 1: Put on your running shoes.'" },
              { id: "c", text: "'Last Tuesday our school held sports day.'" },
              { id: "d", text: "'Sports are fun.'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Recount opening", statement: "A recount opens with who, where and when — 'Last Tuesday our school held sports day.'" },
            ],
            steps: [
              { reasoning: "(b) gives when and what really happened; (a) is made up, (c) is instructions, (d) is just an opinion.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 'Last Tuesday our school held sports day.'",
            commonErrors: ["Choosing (a) — 'once upon a time' signals a made-up story, not a recount."],
          },
        },
        {
          id: "pypl-q-u3l2c1-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A recount reads: 'We ate our lunch. We arrived at the beach. We swam in the sea. We packed up and went home.' The events are out of order. Rewrite them in the correct time order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Sequencing a recount", statement: "Events must follow logical time order: arrive, swim, eat, leave." },
            ],
            steps: [
              { reasoning: "Arriving must come first — you cannot swim before you arrive.", marks: 1, markCode: "M" },
              { reasoning: "Swimming and eating follow; packing up and going home is last.", marks: 1, markCode: "M" },
              { reasoning: "Correct order: arrived → swam → ate lunch → packed up and went home.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "We arrived at the beach. We swam in the sea. We ate our lunch. We packed up and went home.",
            commonErrors: ["Putting 'went home' in the middle — leaving always comes last."],
          },
        },
        {
          id: "pypl-q-u3l2c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Four time connectives were named: first, then, next and finally. How many connectives are there?",
          response: { type: "numeric", parts: [
            { label: "Time connectives", answer: 4 },
          ] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Time connectives", statement: "First, then, next and finally show the order of events." },
            ],
            steps: [
              { reasoning: "Count: first, then, next, finally = 4 connectives.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering 3 — forgetting one connective such as 'next'."],
          },
        },
        {
          id: "pypl-q-u3l2c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "What should a plan for a narrative include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ending only" },
              { id: "b", text: "A list of spellings" },
              { id: "c", text: "Characters, setting, a problem and beginning-middle-end" },
              { id: "d", text: "Only the title" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Narrative plan", statement: "A narrative plan covers characters, setting, problem and the story structure." },
            ],
            steps: [
              { reasoning: "A good plan maps the whole story, not just one part.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Characters, setting, a problem and beginning-middle-end",
            commonErrors: ["Choosing (d) — planning only the ending leaves the middle unknown."],
          },
        },
        {
          id: "pypl-q-u3l2c1-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the BEST opening for a narrative about a lost puppy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Last Friday we went to the zoo.'" },
              { id: "b", text: "'Step 1: Find the puppy.'" },
              { id: "c", text: "'One rainy afternoon, Mia heard a small whimper outside her door.'" },
              { id: "d", text: "'Puppies are animals.'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Narrative opening", statement: "A narrative opening hooks the reader with setting and a hint of the problem." },
            ],
            steps: [
              { reasoning: "(b) sets the scene and hints at the puppy problem — a strong narrative opening.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** 'One rainy afternoon, Mia heard a small whimper outside her door.'",
            commonErrors: ["Choosing (a) — that is a recount opening, not a story hook."],
          },
        },
        {
          id: "pypl-q-u3l2c1-16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "You are going to write a recount about your last birthday party.",
          parts: [
            { label: "a", prompt: "Write the opening sentence with who, where and when.", marks: 2 },
            { label: "b", prompt: "Write two events in time order using connectives.", marks: 2 },
            { label: "c", prompt: "Write the ending sentence.", marks: 1 },
            { label: "d", prompt: "Explain how your recount differs from a made-up story.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Recount conventions", statement: "Recounts tell real events in time order: opening, events with connectives, ending." },
            ],
            steps: [
              { part: "a", reasoning: "Opening with who, where, when, e.g. 'On my last birthday, my family had a party at home.'", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Complete, punctuated sentence.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two events in order with connectives, e.g. 'First we played games. Then we ate cake.'", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Connectives used correctly.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A clear ending, e.g. 'It was the best birthday ever.'", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A recount tells real events that happened.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "A made-up story (narrative) can invent events; a recount must be true.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Opening with who/where/when. (b) Ordered events with connectives. (c) Ending. (d) Recount = real events.",
            commonErrors: ["In (d), saying recounts can be made up — they cannot."],
          },
        },
      ],
    },
    {
      id: "pypl-u3l2-c2-report-writing",
      title: "Writing a report",
      skill: "Write a simple report with a title, headings and facts about a topic.",
      lesson: {
        sections: [
          {
            heading: "What a report does",
            body: "A **report** teaches the reader true facts about a topic — an animal, a country, a sport or your school. It has a **title**, **headings** for each part (like 'Food', 'Where it lives', 'Interesting facts') and short paragraphs of facts. Reports are not stories — they do not need characters or a problem.",
          },
          {
            heading: "Finding and organising facts",
            body: "Before writing, find out the facts — from books, the internet (with an adult) or your own knowledge. Sort facts under **headings** so the reader can find information quickly. Use simple, clear sentences. A good report might have a picture or diagram with a caption to help explain.",
          },
        ],
        keyFormulas: [
          { name: "Report structure", statement: "Title + headings + facts in short paragraphs + optional picture/caption" },
        ],
        workedExample: {
          problem: "Plan a report about 'My School'. What headings would you use?",
          solution: "Headings like 'Our Teachers', 'The Playground', 'Special Days' — each heading groups facts about one part of the school.",
        },
      },
      questions: [
        {
          id: "pypl-q-u3l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is the main purpose of a report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To tell a made-up story" },
              { id: "b", text: "To describe a personal feeling" },
              { id: "c", text: "To write a letter to a friend" },
              { id: "d", text: "To give true facts about a topic" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Report purpose", statement: "A report gives true facts about a topic." },
            ],
            steps: [
              { reasoning: "Reports teach facts.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** To give true facts about a topic",
            commonErrors: ["Choosing (a) — made-up stories are narratives, not reports."],
          },
        },
        {
          id: "pypl-q-u3l2c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A report about penguins has these facts: 'Penguins are birds', 'They cannot fly', 'They live in cold places', 'They swim well'. Which heading would 'They swim well' go under?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Penguin history" },
              { id: "b", text: "What penguins eat" },
              { id: "c", text: "How penguins move" },
              { id: "d", text: "Penguin babies" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Grouping facts under headings", statement: "Each fact belongs under the heading that matches its topic." },
            ],
            steps: [
              { reasoning: "Swimming is a way penguins move, so it goes under 'How penguins move'.", marks: 1, markCode: "M" },
              { reasoning: "The other headings do not match a movement fact.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** How penguins move",
            commonErrors: ["Choosing 'What penguins eat' — swimming is not about food."],
          },
        },
        {
          id: "pypl-q-u3l2c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student writes a 'report' about their pet dog that says: 'Once upon a time, Rex the dog ran away and everyone was sad until he came home.' What is wrong with this as a report?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report vs narrative", statement: "Reports give general facts; this is a personal story — a narrative or recount." },
            ],
            steps: [
              { reasoning: "It tells one pet's story with characters and events — that is a narrative/recount, not a report.", marks: 1, markCode: "M" },
              { reasoning: "A report should give facts about dogs in general (breeds, food, behaviour), not one dog's adventure.", marks: 1, markCode: "M" },
              { reasoning: "Fix: rewrite as facts about dogs with headings, or keep it as a story and label it correctly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It is a story, not a report — reports give general facts about the topic.",
            commonErrors: ["Saying the writing is 'bad' — it is good writing, just the wrong genre for a report."],
          },
        },
        {
          id: "pypl-q-u3l2c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write the opening of a report about 'Our School' — a title and the first section with a heading and two facts.",
          parts: [
            { label: "a", prompt: "Write a good title for the report.", marks: 1 },
            { label: "b", prompt: "Write the first heading.", marks: 1 },
            { label: "c", prompt: "Write two true facts about your school under that heading.", marks: 2 },
            { label: "d", prompt: "Explain why reports use headings and facts instead of a story.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report conventions", statement: "Title + headings + factual sentences; reports inform rather than entertain." },
            ],
            steps: [
              { part: "a", reasoning: "A clear title, e.g. 'Our School' or 'All About Our School'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A heading naming the section, e.g. 'Our Teachers' or 'The Playground'.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Two true facts, e.g. 'We have three teachers.' and 'Our playground has a climbing frame.'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both facts are true and relevant to the heading.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Headings help readers find information quickly.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Facts teach the reader about the topic.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "A report's purpose is to inform, so it uses facts not an invented story.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Title e.g. 'Our School'. (b) Heading e.g. 'Our Teachers'. (c) Two true facts. (d) Headings organise; facts inform.",
            commonErrors: ["In (c), writing opinions or made-up facts — reports need true information."],
          },
        },
        {
          id: "pypl-q-u3l2c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The main purpose of a report is to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Give true facts about a topic" },
              { id: "b", text: "List steps to follow" },
              { id: "c", text: "Describe a personal feeling" },
              { id: "d", text: "Tell a made-up story" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Report purpose", statement: "A report gives true facts about a topic." },
            ],
            steps: [
              { reasoning: "Reports teach facts — they do not tell stories or give steps.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Give true facts about a topic",
            commonErrors: ["Choosing (d) — steps belong to instructions, not reports."],
          },
        },
        {
          id: "pypl-q-u3l2c2-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Three parts of a report were named: a title, headings and facts. How many parts are there?",
          response: { type: "numeric", parts: [
            { label: "Report parts", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report structure", statement: "A report has a title, headings and facts in short paragraphs." },
            ],
            steps: [
              { reasoning: "Count: title, headings, facts = 3 parts.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — forgetting one part such as headings."],
          },
        },
        {
          id: "pypl-q-u3l2c2-7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a report about penguins, the fact 'They live in cold places' would go under which heading?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Where penguins live" },
              { id: "b", text: "Penguin babies" },
              { id: "c", text: "What penguins eat" },
              { id: "d", text: "Penguin history" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Grouping facts", statement: "Each fact goes under the heading that matches its topic." },
            ],
            steps: [
              { reasoning: "Where penguins live matches 'cold places' — a place fact.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Where penguins live",
            commonErrors: ["Choosing 'what penguins eat' — living place is not about food."],
          },
        },
        {
          id: "pypl-q-u3l2c2-8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a title and one heading you could use for a report about dolphins.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report structure", statement: "A report has a title naming the topic and headings naming each section." },
            ],
            steps: [
              { reasoning: "A clear title, e.g. 'All About Dolphins' or 'Dolphins'.", marks: 1, markCode: "M" },
              { reasoning: "A heading naming a section, e.g. 'What Dolphins Eat' or 'Where Dolphins Live'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any sensible title and heading, e.g. 'All About Dolphins' / 'Where Dolphins Live'.",
            commonErrors: ["Writing a story title like 'The Dolphin Adventure' — reports use factual titles."],
          },
        },
        {
          id: "pypl-q-u3l2c2-9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A report about elephants has 3 headings: 'What They Eat', 'Where They Live' and 'Interesting Facts'. How many sections does the report have?",
          response: { type: "numeric", parts: [
            { label: "Report sections", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report structure", statement: "Each heading marks one section of the report." },
            ],
            steps: [
              { reasoning: "3 headings = 3 sections.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 4 — there are only three headings/sections."],
          },
        },
        {
          id: "pypl-q-u3l2c2-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why reports use headings and facts instead of telling a story.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Report purpose", statement: "Reports inform — headings organise facts so readers can find information quickly." },
            ],
            steps: [
              { reasoning: "Headings let readers jump to the part they need, e.g. 'Where They Live'.", marks: 1, markCode: "M" },
              { reasoning: "Facts teach true information about the topic.", marks: 1, markCode: "M" },
              { reasoning: "A story would entertain, but a report's job is to inform — so facts and headings are used.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Headings organise facts so readers find information fast; facts inform, unlike a story.",
            commonErrors: ["Saying reports 'cannot have stories' — the point is purpose: inform vs entertain."],
          },
        },
        {
          id: "pypl-q-u3l2c2-11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which of these is NOT part of a good report?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "True facts" },
              { id: "b", text: "Headings" },
              { id: "c", text: "A title" },
              { id: "d", text: "An invented story problem" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report conventions", statement: "Reports use titles, headings and facts — not invented story problems." },
            ],
            steps: [
              { reasoning: "An invented problem belongs to a story; reports give facts.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** An invented story problem",
            commonErrors: ["Choosing (b) — headings ARE part of a report."],
          },
        },
        {
          id: "pypl-q-u3l2c2-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A report about frogs has these facts: 'Frogs are amphibians', 'They start life as tadpoles', 'They live near water', 'They eat insects'. Sort each fact under a fitting heading.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Grouping facts", statement: "Each fact belongs under the heading matching its topic." },
            ],
            steps: [
              { reasoning: "'Frogs are amphibians' → a heading like 'What Frogs Are'.", marks: 1, markCode: "M" },
              { reasoning: "'They start life as tadpoles' → 'How Frogs Grow'; 'they eat insects' → 'What Frogs Eat'.", marks: 1, markCode: "M" },
              { reasoning: "'They live near water' → 'Where Frogs Live'.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any sensible grouping: amphibians→What Frogs Are; tadpoles→How Frogs Grow; insects→What Frogs Eat; near water→Where Frogs Live.",
            commonErrors: ["Grouping 'eat insects' under 'Where Frogs Live' — food and place are different topics."],
          },
        },
        {
          id: "pypl-q-u3l2c2-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Four report features were named: title, headings, facts and a picture with caption. How many features are there?",
          response: { type: "numeric", parts: [
            { label: "Report features", answer: 4 },
          ] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report features", statement: "Reports use a title, headings, facts and often a picture with a caption." },
            ],
            steps: [
              { reasoning: "Count: title, headings, facts, picture/caption = 4 features.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering 3 — forgetting the picture/caption feature."],
          },
        },
        {
          id: "pypl-q-u3l2c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Before writing a report, what should you do first?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Find out the facts about the topic" },
              { id: "b", text: "Draw a picture and stop" },
              { id: "c", text: "Invent a story about the topic" },
              { id: "d", text: "Write the ending first" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Research for reports", statement: "Find out true facts first — from books, the internet with an adult, or your own knowledge." },
            ],
            steps: [
              { reasoning: "Reports need true facts, so finding them out comes first.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Find out the facts about the topic",
            commonErrors: ["Choosing (a) — inventing a story is the opposite of a report."],
          },
        },
        {
          id: "pypl-q-u3l2c2-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which sentence would you MOST likely find in a report about rainforests?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'Rainforests are warm, wet forests full of plants and animals.'" },
              { id: "b", text: "'Step 1: Plant a tree.'" },
              { id: "c", text: "'Dear Diary, I visited a rainforest.'" },
              { id: "d", text: "'Once, a monkey king ruled the forest.'" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Report content", statement: "Reports state general facts about the topic." },
            ],
            steps: [
              { reasoning: "(b) gives a true general fact about rainforests; the others are fiction, a diary or instructions.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** 'Rainforests are warm, wet forests full of plants and animals.'",
            commonErrors: ["Choosing (a) — an invented monkey king is fiction, not a report fact."],
          },
        },
        {
          id: "pypl-q-u3l2c2-16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Write the opening of a report about 'Our School' — a title and the first section with a heading and two facts.",
          parts: [
            { label: "a", prompt: "Write a good title for the report.", marks: 1 },
            { label: "b", prompt: "Write the first heading.", marks: 1 },
            { label: "c", prompt: "Write two true facts about your school under that heading.", marks: 2 },
            { label: "d", prompt: "Explain why reports use headings and facts instead of a story.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Report conventions", statement: "Title + headings + factual sentences; reports inform rather than entertain." },
            ],
            steps: [
              { part: "a", reasoning: "A clear title, e.g. 'Our School' or 'All About Our School'.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A heading naming the section, e.g. 'Our Playground' or 'Special Days'.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Two true facts, e.g. 'Our playground has a climbing frame.' and 'We have a library.'", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Both facts are true and match the heading.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Headings help readers find information quickly.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Facts teach the reader about the topic.", marks: 1, markCode: "M" },
              { part: "d", reasoning: "A report's purpose is to inform, so facts not stories are used.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Title e.g. 'Our School'. (b) Heading e.g. 'Our Playground'. (c) Two true facts. (d) Headings organise; facts inform.",
            commonErrors: ["In (c), writing opinions or made-up facts."],
          },
        },
      ],
    },
  ],
};
