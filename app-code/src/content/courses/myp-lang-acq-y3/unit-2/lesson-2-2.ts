import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "mla3-u2-lesson-2-2",
  code: "2-2",
  title: "Writing Recounts and Instructions",
  goal: "I CAN write a recount of a past event and a set of clear instructions using correct past tense and imperative forms.",
  standards: [
    "MYP Language Acquisition",
    "Criterion D: Writing",
    "Criterion B: Reading",
    "Criterion C: Speaking",
  ],
  vocabulary: [
    {
      term: "Recount",
      definition:
        "A text that tells what happened — a personal account of an event.",
    },
    {
      term: "Instruction text",
      definition:
        "A text that tells the reader how to do something, step by step.",
    },
    {
      term: "Sequence",
      definition: "The order in which events or steps happen.",
    },
    {
      term: "Imperative",
      definition: "A command or instruction form: 'Open the door.'",
    },
    {
      term: "Chronological order",
      definition: "Time order — first, then, next, finally.",
    },
  ],
  concepts: [
    {
      id: "mla3-u2-recounts",
      title: "Writing recounts",
      skill:
        "Write a recount of an event using past tense, sequence words and personal detail.",
      lesson: {
        sections: [
          {
            heading: "What is a recount?",
            body: "A **recount** retells something that happened to you or that you witnessed. It answers: **who, what, when, where**. Examples: 'What I did last weekend', 'My holiday', 'A day I will never forget'. Recounts use **past tense** and tell events in **time order**.",
          },
          {
            heading: "Structure of a recount",
            body: "A recount typically has: an **orientation** (who, where, when — 'Last Saturday, I went...'), a **series of events** (what happened, in order), and sometimes a **personal comment** at the end ('It was the best day ever!'). Use sequence words: first, then, after that, finally.",
          },
          {
            heading: "Adding detail",
            body: "Make your recount interesting with **describing words** ('the beautiful beach', 'my best friend'), **direct speech** ('Mum said, Don't be late!') and **feelings** ('I was so excited'). But keep sentences simple and accurate — detail should help, not confuse.",
          },
        ],
        keyFormulas: [
          {
            name: "Recount structure",
            statement:
              "Orientation (who/where/when) + events in order + optional comment",
          },
        ],
        workedExample: {
          problem: "Write the orientation of a recount about a school trip.",
          solution:
            "'Last month, my class went on a trip to the science museum. It was a sunny day and everyone was excited.'",
        },
      },
      questions: [
        {
          id: "mla3-u2-recounts-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'recount'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A text that tells what happened" },
              { id: "b", text: "A list of instructions" },
              { id: "c", text: "An opinion article" },
              { id: "d", text: "A story with a made-up character" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Recount",
                statement: "A text recounting events that happened.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Criterion D: Writing — recount = telling what happened.",
                working: "tells what happened",
                marks: 1,
                markCode: "D",
              },
            ],
            finalAnswer: "**(b)** A text that tells what happened",
            commonErrors: ["Confusing recount with fiction."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-recounts-q2",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "My School Trip",
            author: "Written for Akademik Space",
            source: "Recount practice",
            text: "Last Friday our class went to the zoo. We arrived at nine o'clock. First, we saw the lions. Then we watched the monkeys. After lunch, we visited the aquarium. It was a fantastic day.",
          },
          stem: "What are the three main parts of a recount? Match them to this text: orientation, events, comment.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Recount structure",
                statement:
                  "Orientation sets scene; events in order; comment evaluates.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Criterion B: Reading — orientation: 'Last Friday our class went to the zoo.'",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Criterion B: Reading — events: lions, monkeys, aquarium in order.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning:
                  "Criterion B: Reading — comment: 'It was a fantastic day.'",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Orientation: Friday/zoo; events: lions→monkeys→aquarium; comment: fantastic day.",
            commonErrors: ["Putting the comment in the middle."],
            examinerNote: "All three parts identified.",
          },
        },
        {
          id: "mla3-u2-recounts-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Write the orientation and first two events of a recount about your last birthday or a special day.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Recount opening",
                statement:
                  "Orientation answers who/when/where; events follow in past tense.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Criterion C: Speaking — orientation names who/when/where.",
                marks: 1,
                markCode: "C",
              },
              {
                reasoning: "Criterion D: Writing — past simple used correctly.",
                marks: 1,
                markCode: "D",
              },
              {
                reasoning:
                  "Criterion D: Writing — two events in logical order.",
                marks: 1,
                markCode: "D",
              },
              {
                reasoning:
                  "Criterion D: Writing — sequence words used (first/then).",
                marks: 1,
                markCode: "D",
              },
            ],
            finalAnswer:
              "Orientation + two ordered past-tense events with sequence words.",
            commonErrors: [
              "Starting events without orientation.",
              "Present tense used.",
            ],
            examinerNote: "Must be a real personal event.",
          },
        },
        {
          id: "mla3-u2-recounts-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write a recount of a memorable day (a trip, celebration or adventure).",
          parts: [
            {
              label: "a",
              prompt: "Write an orientation sentence (who/when/where).",
              marks: 1,
            },
            {
              label: "b",
              prompt: "Write three events in time order with sequence words.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Add one describing detail and one feeling.",
              marks: 2,
            },
            {
              label: "d",
              prompt: "Write a closing comment about the day.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Recount conventions",
                statement:
                  "Orientation + ordered events + detail/feeling + comment, all in past tense.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Criterion D: Writing — orientation with who/when/where.",
                marks: 1,
                markCode: "D",
              },
              {
                part: "b",
                reasoning:
                  "Criterion C: Speaking — three real events in order.",
                marks: 1,
                markCode: "C",
              },
              {
                part: "b",
                reasoning:
                  "Criterion D: Writing — sequence words (first/then/finally) used.",
                marks: 1,
                markCode: "D",
              },
              {
                part: "b",
                reasoning:
                  "Criterion D: Writing — past simple correct throughout.",
                marks: 1,
                markCode: "D",
              },
              {
                part: "c",
                reasoning:
                  "Criterion D: Writing — describing word used correctly.",
                marks: 1,
                markCode: "D",
              },
              {
                part: "c",
                reasoning:
                  "Criterion C: Speaking — feeling expressed naturally.",
                marks: 1,
                markCode: "C",
              },
              {
                part: "d",
                reasoning:
                  "Criterion D: Writing — closing comment evaluates the day.",
                marks: 1,
                markCode: "D",
              },
              {
                part: "d",
                reasoning:
                  "Criterion B: Reading — recount is coherent and readable.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "Full recount: orientation + 3 events + detail/feeling + comment.",
            commonErrors: ["Events out of order.", "No sequence words."],
            examinerNote: "All recount elements must be present.",
          },
        },
        {
          id: "mla3-u2-recounts-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tense does a recount mainly use?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Present tense" },
              { id: "b", text: "Past tense" },
              { id: "c", text: "Present perfect continuous" },
              { id: "d", text: "Future tense" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Recount tense", statement: "Recounts tell what happened — past tense." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — recounts use past tense throughout.", working: "past tense", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Past tense",
            commonErrors: ["Using present tense."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-recounts-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the 'orientation' of a recount tell the reader?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Who, where and when the events happened" },
              { id: "b", text: "The ending" },
              { id: "c", text: "The moral of the story" },
              { id: "d", text: "The characters' dialogue" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Orientation", statement: "Sets the scene: who, where, when." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — orientation answers who/where/when.", working: "who/where/when", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** Who, where and when the events happened",
            commonErrors: ["Thinking orientation is the conclusion."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-recounts-q7",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Weekend Recount",
            author: "Written for Akademik Space",
            source: "Recount practice",
            text: "Last Sunday, my family went to the beach. First, we built a sandcastle. Then we swam in the sea. Finally, we had a picnic for lunch. It was a wonderful day.",
          },
          stem: "Which sequence word shows the events are in time order?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "finally" },
              { id: "b", text: "together" },
              { id: "c", text: "quickly" },
              { id: "d", text: "beautiful" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sequence words", statement: "First, then, after that, finally mark time order." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'finally' marks the last event.", working: "finally", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** finally",
            commonErrors: ["Choosing a describing word instead of sequence word."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "mla3-u2-recounts-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Holiday Recount",
            author: "Written for Akademik Space",
            source: "Recount practice",
            text: "In July, we travelled to Italy. We visited Rome and Florence. The food was amazing and the weather was perfect. I would love to go back one day.",
          },
          stem: "What is the closing comment in this recount?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "I would love to go back one day." },
              { id: "b", text: "In July, we travelled to Italy." },
              { id: "c", text: "We visited Rome and Florence." },
              { id: "d", text: "The food was amazing." },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Recount comment", statement: "The closing comment evaluates or reflects on the event." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'I would love to go back' is the personal comment.", working: "I would love to go back", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** I would love to go back one day.",
            commonErrors: ["Choosing an event detail instead of the comment."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mla3-u2-recounts-q9",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Bad Recount",
            author: "Written for Akademik Space",
            source: "Editing practice",
            text: "I go to the park yesterday. I play football with my friends. It is fun. I go home at five.",
          },
          stem: "What is the main problem with this recount?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It uses too many sequence words" },
              { id: "b", text: "It uses the wrong tense — should be past tense" },
              { id: "c", text: "It has too many details" },
              { id: "d", text: "It is too short" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Recount tense", statement: "Events that happened need past tense: went, played." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'yesterday' + present tense 'go/play' = tense error.", working: "past tense", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(a)** It uses the wrong tense — should be past tense",
            commonErrors: ["Missing the tense error entirely."],
            examinerNote: "D1 for (a).",
          },
        },
        {
          id: "mla3-u2-recounts-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which sentence correctly uses the past tense for a recount?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "We goed to the museumed." },
              { id: "b", text: "We go to the museum yesterday." },
              { id: "c", text: "We went to the museum." },
              { id: "d", text: "We goed to the museum." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Past tense forms", statement: "go → went (irregular); regular verbs add -ed." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'went' is the correct past of go.", working: "went", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** We went to the museum.",
            commonErrors: ["Using 'goed' — go is irregular."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-recounts-q11",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Birthday Recount",
            author: "Written for Akademik Space",
            source: "Recount practice",
            text: "Last Saturday was my birthday. In the morning, my mum made me pancakes. Then we opened presents. After lunch, we played games in the garden. It was the best day ever!",
          },
          stem: "How many sequence/time markers appear in this recount?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3 }],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sequence words", statement: "In the morning, then, after lunch mark time order." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — 'In the morning', 'Then', 'After lunch' = 3 time markers.", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Counting 'Last Saturday' as a sequence word."],
            examinerNote: "Count ordering words only.",
          },
        },
        {
          id: "mla3-u2-recounts-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "School Trip Recount",
            author: "Written for Akademik Space",
            source: "Recount practice",
            text: "Our class went to the science museum last month. We saw a robot show and an electricity exhibit. I really enjoyed it because we could touch the experiments.",
          },
          stem: "How many sentences does the recount have? How many of them are in the past tense?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3 },
              { label: "b", answer: 3 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Recount features", statement: "Count sentences and check tense consistency." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — three sentences total.", working: "3", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — all three use past tense (went, saw, enjoyed).", working: "3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3 sentences; all 3 in past tense.",
            commonErrors: ["Miscounting sentences with 'and'."],
            examinerNote: "'and' does not split sentences.",
          },
        },
        {
          id: "mla3-u2-recounts-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write an orientation sentence for a recount about a day you remember well.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Orientation", statement: "Who + when + where in one sentence." },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — orientation includes who/when/where.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — correct past tense and punctuation.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Last summer, my family and I went to the seaside.'",
            commonErrors: ["Missing when or where."],
            examinerNote: "All three elements needed.",
          },
        },
        {
          id: "mla3-u2-recounts-q14",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Match Day",
            author: "Written for Akademik Space",
            source: "Recount practice",
            text: "On Saturday, our school played the biggest match of the year. We scored in the last minute and won 2-1! Everyone celebrated in the playground afterwards.",
          },
          stem: "Answer: When did the match happen? What was the result? How did people feel afterwards?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Recount comprehension", statement: "Extract time, result and feeling from a recount." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — when: Saturday.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — result: won 2-1.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — feeling: celebrated / happy.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Saturday; won 2-1; everyone celebrated.",
            commonErrors: ["Missing the score or the celebration."],
            examinerNote: "All three answers needed.",
          },
        },
        {
          id: "mla3-u2-recounts-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Two Weekend Recounts",
            author: "Written for Akademik Space",
            source: "Recount practice",
            text: "Recount A: 'I stayed home all weekend. I watched films and played video games. It was relaxing but a bit boring.'\n\nRecount B: 'We went camping in the mountains. We hiked all day and saw amazing views. It was the best weekend ever!'",
          },
          stem: "Compare the two recounts. What did each person do, and how did each feel about it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "skill", name: "Comparing recounts", statement: "Each recount has events + feeling; compare both." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — A: stayed home, films/games; felt relaxing but boring.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — B: camping/hiking; felt it was the best weekend.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — comparison shows contrast clearly.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C: Speaking — explanation is clear.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "A: quiet weekend, mixed feelings; B: active weekend, very positive.",
            commonErrors: ["Only describing one recount."],
            examinerNote: "Both recounts needed.",
          },
        },
        {
          id: "mla3-u2-recounts-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write a recount of a memorable day.",
          parts: [
            { label: "a", prompt: "Write an orientation (who/when/where).", marks: 1 },
            { label: "b", prompt: "Write three events in time order with sequence words.", marks: 2 },
            { label: "c", prompt: "Add one describing detail and one feeling.", marks: 1 },
            { label: "d", prompt: "Write a closing comment.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Recount structure", statement: "Orientation + ordered events + detail/feeling + comment, all past tense." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — orientation with who/when/where.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — three events in logical order.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — sequence words + past tense used.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion D: Writing — describing word + feeling included.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion D: Writing — closing comment evaluates the day.", marks: 1, markCode: "D" },
              { part: "d", reasoning: "Criterion B: Reading — recount is coherent and readable.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Orientation + 3 ordered events + detail/feeling + comment.",
            commonErrors: ["Events out of order.", "No sequence words."],
            examinerNote: "All recount elements required.",
          },
        },
      ],
    },
    {
      id: "mla3-u2-instructions-writing",
      title: "Writing clear instructions",
      skill:
        "Write instructions for a process using imperatives, sequence words and clear steps.",
      lesson: {
        sections: [
          {
            heading: "The imperative form",
            body: "Instructions use the **imperative** — the verb alone, no subject: 'Open the box', 'Mix the flour', 'Press the button'. This is the command form. Never write 'You open the box' in instructions — it sounds like a description, not a direction.",
          },
          {
            heading: "Sequence and clarity",
            body: "Number your steps or use sequence words: **first, then, next, after that, finally**. Each step should be **one action** — not 'Open the box and take out the instructions and read them' (three actions!). Split complex actions: '1. Open the box. 2. Take out the instructions. 3. Read them carefully.'",
          },
          {
            heading: "Warnings and tips",
            body: "Good instructions include safety notes: 'Be careful — the water is hot', 'Do not touch the electric socket'. Add tips for success: 'Tip: stir slowly', 'Note: leave for five minutes'. These extras make instructions genuinely useful, not just a list of steps.",
          },
        ],
        keyFormulas: [
          {
            name: "Instruction rules",
            statement:
              "Imperative verb + one action per step + sequence words + warnings/tips",
          },
        ],
        workedExample: {
          problem: "Write the first two steps for making a sandwich.",
          solution:
            "'1. Take two slices of bread. 2. Spread butter on one slice.'",
        },
      },
      questions: [
        {
          id: "mla3-u2-instructions-writing-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is the correct imperative form for an instruction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "You open the door." },
              { id: "b", text: "Open the door." },
              { id: "c", text: "Opening the door." },
              { id: "d", text: "Opens the door." },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Imperative",
                statement:
                  "Instructions use base verb with no subject: 'Open...'",
              },
            ],
            steps: [
              {
                reasoning:
                  "Criterion D: Writing — 'Open the door' is the imperative.",
                working: "Open the door.",
                marks: 1,
                markCode: "D",
              },
            ],
            finalAnswer: "**(c)** Open the door.",
            commonErrors: ["Adding 'you' or changing the verb form."],
            examinerNote: "D1 for (c).",
          },
        },
        {
          id: "mla3-u2-instructions-writing-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rewrite as an instruction: 'First, you should boil the water. Then, you add the pasta.'",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Imperative conversion",
                statement:
                  "Remove 'you should' and use base verb: 'Boil the water.'",
              },
            ],
            steps: [
              {
                reasoning: "Criterion D: Writing — 'Boil the water.'",
                marks: 1,
                markCode: "D",
              },
              {
                reasoning: "Criterion D: Writing — 'Add the pasta.'",
                marks: 1,
                markCode: "D",
              },
            ],
            finalAnswer: "'Boil the water. Add the pasta.'",
            commonErrors: ["Keeping 'you' — instructions have no subject."],
            examinerNote: "Both steps must be imperatives.",
          },
        },
        {
          id: "mla3-u2-instructions-writing-q3",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Bad Instructions",
            author: "Written for Akademik Space",
            source: "Editing practice",
            text: "To make a cup of tea you should first get a cup and then you boil the water and after that you put a tea bag in and you wait and finally you drink it.",
          },
          stem: "Rewrite these instructions properly: imperatives, numbered steps, one action per step.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Instruction rewriting",
                statement: "Imperatives + numbered steps + one action each.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Criterion D: Writing — steps converted to imperatives: 'Get a cup', 'Boil the water', etc.",
                marks: 1,
                markCode: "D",
              },
              {
                reasoning: "Criterion D: Writing — numbered list format used.",
                marks: 1,
                markCode: "D",
              },
              {
                reasoning:
                  "Criterion D: Writing — each step is one action (boil ≠ add ≠ wait).",
                marks: 1,
                markCode: "D",
              },
              {
                reasoning:
                  "Criterion B: Reading — meaning preserved accurately.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "1. Get a cup. 2. Boil the water. 3. Put in a tea bag. 4. Wait. 5. Drink.",
            commonErrors: [
              "Keeping 'you should' or combining multiple actions per step.",
            ],
            examinerNote: "Numbering and single actions are essential.",
          },
        },
        {
          id: "mla3-u2-instructions-writing-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Write instructions for something you know well: making a drink, a simple dish, or a craft.",
          parts: [
            {
              label: "a",
              prompt: "Write a title and list the ingredients/tools needed.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Write four steps using imperatives and sequence words.",
              marks: 4,
            },
            { label: "c", prompt: "Add one warning or tip.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "convention",
                name: "Instruction writing",
                statement:
                  "Title + materials + numbered imperatives + sequence + warning/tip.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Criterion D: Writing — clear title + complete materials list.",
                marks: 1,
                markCode: "D",
              },
              {
                part: "a",
                reasoning:
                  "Criterion D: Writing — materials spelled correctly.",
                marks: 1,
                markCode: "D",
              },
              {
                part: "b",
                reasoning:
                  "Criterion C: Speaking — four logical, followable steps.",
                marks: 1,
                markCode: "C",
              },
              {
                part: "b",
                reasoning:
                  "Criterion D: Writing — all imperatives (verb first, no subject).",
                marks: 1,
                markCode: "D",
              },
              {
                part: "b",
                reasoning:
                  "Criterion D: Writing — sequence words used correctly.",
                marks: 1,
                markCode: "D",
              },
              {
                part: "b",
                reasoning: "Criterion D: Writing — one action per step.",
                marks: 1,
                markCode: "D",
              },
              {
                part: "c",
                reasoning:
                  "Criterion C: Speaking — useful, relevant warning or tip.",
                marks: 1,
                markCode: "C",
              },
              {
                part: "c",
                reasoning:
                  "Criterion D: Writing — warning/tip grammatically correct.",
                marks: 1,
                markCode: "D",
              },
            ],
            finalAnswer:
              "Title + materials + 4 imperative steps + warning/tip.",
            commonErrors: [
              "Multiple actions per step.",
              "Missing materials list.",
            ],
            examinerNote: "Instructions must be genuinely followable.",
          },
        },
        {
          id: "mla3-u2-instructions-writing-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a correct instruction (imperative)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Opening the box." },
              { id: "b", text: "Open the box." },
              { id: "c", text: "You should open the box." },
              { id: "d", text: "Opens the box." },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Imperative", statement: "Base verb, no subject: 'Open the box.'" },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'Open the box' is the imperative.", working: "Open the box.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(c)** Open the box.",
            commonErrors: ["Keeping 'you should'."],
            examinerNote: "D1 for (c).",
          },
        },
        {
          id: "mla3-u2-instructions-writing-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why should each instruction step contain only ONE action?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It makes the text longer" },
              { id: "b", text: "It uses more words" },
              { id: "c", text: "It is easier for the reader to follow" },
              { id: "d", text: "It is required by grammar rules" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Instruction clarity", statement: "One action per step prevents confusion." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — single actions are easier to follow.", working: "one action per step", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** It is easier for the reader to follow",
            commonErrors: ["Thinking length matters more than clarity."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-instructions-writing-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which word is best for the FIRST step of instructions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Finally" },
              { id: "b", text: "However" },
              { id: "c", text: "Because" },
              { id: "d", text: "First" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sequence words", statement: "'First' begins a sequence; 'finally' ends it." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'First' opens the sequence.", working: "First", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** First",
            commonErrors: ["Choosing 'Finally' for the first step."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-instructions-writing-q8",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "Recipe Steps",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "1. Preheat the oven to 180 degrees.\n2. Mix the flour and sugar in a bowl.\n3. Be careful — the oven is hot.\n4. Bake for 20 minutes.",
          },
          stem: "Which step is a WARNING rather than an instruction?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Step 4" },
              { id: "b", text: "Step 1" },
              { id: "c", text: "Step 2" },
              { id: "d", text: "Step 3" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Warnings in instructions", statement: "'Be careful' warns about danger; other steps tell actions." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — Step 3 'Be careful — the oven is hot' is a warning.", working: "Step 3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Step 3",
            commonErrors: ["Choosing a normal action step."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "mla3-u2-instructions-writing-q9",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Instructions with a Problem",
            author: "Written for Akademik Space",
            source: "Editing practice",
            text: "1. You should boil the water.\n2. Add the pasta and stir it.\n3. You wait five minutes and then you drain it.",
          },
          stem: "What is wrong with these instructions?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are too short" },
              { id: "b", text: "They use 'you' instead of imperatives, and combine actions" },
              { id: "c", text: "They use the wrong tense" },
              { id: "d", text: "They have too many steps" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Instruction rules", statement: "Imperatives, no 'you', one action per step." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — 'You should', 'You wait' break imperative rule; step 3 has two actions.", working: "you + combined actions", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** They use 'you' instead of imperatives, and combine actions",
            commonErrors: ["Missing the 'you' problem."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-instructions-writing-q10",
          difficulty: "challenge",
          totalMarks: 1,
          extract: {
            title: "Instructions Missing Something",
            author: "Written for Akademik Space",
            source: "Editing practice",
            text: "To make a sandwich: 1. Take two slices of bread. 2. Spread butter. 3. Add cheese. 4. Put the slices together.",
          },
          stem: "What is missing from these instructions for a complete sandwich?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A list of ingredients" },
              { id: "b", text: "A warning" },
              { id: "c", text: "A title" },
              { id: "d", text: "Too many steps" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Instruction completeness", statement: "Good instructions list materials/ingredients first." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — no ingredients/tools list given.", working: "ingredients list", marks: 1, markCode: "D" },
            ],
            finalAnswer: "**(b)** A list of ingredients",
            commonErrors: ["Not noticing the missing materials."],
            examinerNote: "D1 for (b).",
          },
        },
        {
          id: "mla3-u2-instructions-writing-q11",
          difficulty: "core",
          totalMarks: 1,
          extract: {
            title: "How to Make Tea",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "1. Boil some water.\n2. Put a tea bag in a cup.\n3. Pour the hot water into the cup.\n4. Wait three minutes.\n5. Remove the tea bag and enjoy.",
          },
          stem: "How many steps are in these instructions?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Counting steps", statement: "Each numbered line is one step." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — numbered steps 1-5 = 5.", working: "5", marks: 1, markCode: "B" },
            ],
            finalAnswer: "5",
            commonErrors: ["Miscounting the last line."],
            examinerNote: "Count numbered items.",
          },
        },
        {
          id: "mla3-u2-instructions-writing-q12",
          difficulty: "challenge",
          totalMarks: 2,
          extract: {
            title: "Morning Routine",
            author: "Written for Akademik Space",
            source: "Reading practice",
            text: "First, wake up at seven. Next, brush your teeth and have breakfast. Then, pack your bag. Finally, leave the house at eight.",
          },
          stem: "How many imperative verbs appear? How many sequence words appear?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 5 },
              { label: "b", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Imperatives and sequence", statement: "Base-verb commands + ordering words." },
            ],
            steps: [
              { reasoning: "Criterion B: Reading — imperatives: wake, brush, have, pack, leave = 5.", working: "5", marks: 1, markCode: "B" },
              { reasoning: "Criterion B: Reading — sequence words: First, Next, Then, Finally = 4.", working: "4", marks: 1, markCode: "B" },
            ],
            finalAnswer: "5 imperatives; 4 sequence words.",
            commonErrors: ["Counting 'your' or 'the' as verbs."],
            examinerNote: "Count only base-form commands.",
          },
        },
        {
          id: "mla3-u2-instructions-writing-q13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Write the first step (as an imperative) for instructions on making a cup of coffee.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Imperative steps", statement: "Base verb + object: 'Boil some water.'" },
            ],
            steps: [
              { reasoning: "Criterion C: Speaking — logical first step for coffee.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D: Writing — imperative form correct.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'Boil some water.' / 'Put a coffee bag in a cup.'",
            commonErrors: ["Using 'you' or present tense."],
            examinerNote: "Must be imperative.",
          },
        },
        {
          id: "mla3-u2-instructions-writing-q14",
          difficulty: "core",
          totalMarks: 3,
          extract: {
            title: "Messy Instructions",
            author: "Written for Akademik Space",
            source: "Editing practice",
            text: "To charge your phone you should first find the charger and then you plug it in and after that you wait for the battery.",
          },
          stem: "Rewrite these instructions properly: imperatives, numbered steps, one action per step.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Instruction rewriting", statement: "Imperatives + numbering + single actions." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — steps converted to imperatives.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — numbered format used.", marks: 1, markCode: "D" },
              { reasoning: "Criterion B: Reading — meaning preserved (find charger, plug in, wait).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "1. Find the charger. 2. Plug it in. 3. Wait for the battery to charge.",
            commonErrors: ["Keeping 'you should'."],
            examinerNote: "All three rules must be applied.",
          },
        },
        {
          id: "mla3-u2-instructions-writing-q15",
          difficulty: "challenge",
          totalMarks: 4,
          extract: {
            title: "Instructions to Improve",
            author: "Written for Akademik Space",
            source: "Editing practice",
            text: "How to make a fruit smoothie: Get a blender. Put fruit in it. Add milk. Blend it. Drink it.",
          },
          stem: "Improve these instructions by adding: a title, an ingredients list, sequence words and one tip.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Complete instructions", statement: "Title + ingredients + sequence + tip = complete." },
            ],
            steps: [
              { reasoning: "Criterion D: Writing — title + ingredients list added.", marks: 1, markCode: "D" },
              { reasoning: "Criterion D: Writing — sequence words added (first, then, finally).", marks: 1, markCode: "D" },
              { reasoning: "Criterion C: Speaking — useful tip included.", marks: 1, markCode: "C" },
              { reasoning: "Criterion B: Reading — meaning preserved and clearer.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Title + ingredients + sequenced steps + tip.",
            commonErrors: ["Adding extras but losing the original steps."],
            examinerNote: "All four improvements needed.",
          },
        },
        {
          id: "mla3-u2-instructions-writing-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Write instructions for something you know well (a recipe, game rules or a craft).",
          parts: [
            { label: "a", prompt: "Write a title and list what is needed.", marks: 2 },
            { label: "b", prompt: "Write four steps as imperatives with sequence words.", marks: 3 },
            { label: "c", prompt: "Add one warning or tip.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Instruction writing", statement: "Title + materials + numbered imperatives + sequence + warning/tip." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion D: Writing — clear title + complete materials list.", marks: 1, markCode: "D" },
              { part: "a", reasoning: "Criterion D: Writing — materials spelled correctly.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C: Speaking — four logical followable steps.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion D: Writing — all imperatives, one action each.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion D: Writing — sequence words used correctly.", marks: 1, markCode: "D" },
              { part: "c", reasoning: "Criterion C: Speaking — useful warning or tip.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Title + materials + 4 imperative steps + warning/tip.",
            commonErrors: ["Multiple actions per step.", "Missing materials."],
            examinerNote: "Must be genuinely followable.",
          },
        },
      ],
    },
  ],
};
