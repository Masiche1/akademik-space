import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "pypl-u3-lesson-3-3",
  code: "3-3",
  title: "Planning, Revising and Publishing",
  goal: "I CAN plan my writing, check it for mistakes, and present it neatly for others to read.",
  standards: [
    "PYP Language: Writing",
    "PYP transdisciplinary theme: How We Express Ourselves",
    "PYP transdisciplinary theme: Who We Are",
  ],
  vocabulary: [
    { term: "Draft", definition: "A first version of writing that you will improve." },
    { term: "Plan", definition: "Notes or a diagram showing what you will write and in what order." },
    { term: "Revise", definition: "To change and improve your writing — better words, clearer sentences." },
    { term: "Edit", definition: "To check writing for mistakes in spelling, punctuation and capitals." },
    { term: "Publish", definition: "To make your finished writing neat and ready for others to read." },
    { term: "Checklist", definition: "A list of things to check, like capitals, full stops and describing words." },
  ],
  concepts: [
    {
      id: "pypl-u3l3-c1-planning-drafting",
      title: "Planning and drafting",
      skill: "Plan what to write and produce a first draft with a clear order.",
      lesson: {
        sections: [
          {
            heading: "Why plan first",
            body: "Good writers **plan** before they write. A plan can be a simple list or a diagram: 'My story: a lost dog → I find it → I return it → happy ending.' Planning stops you from getting stuck halfway and helps you remember the important parts. For a recount, list the events in order first.",
          },
          {
            heading: "Writing the draft",
            body: "The **draft** is your first version — do not worry about mistakes yet. Get your ideas down: the opening, the middle events and the end. Use your plan as a guide but let the writing flow. A draft is allowed to be rough; you will improve it in the next steps.",
          },
        ],
        keyFormulas: [
          { name: "Writing process", statement: "Plan → Draft → Revise → Edit → Publish" },
        ],
        workedExample: {
          problem: "Plan a story about finding a puppy.",
          solution: "Plan: Beginning — I see a puppy in the rain. Middle — I take it home and dry it. End — I find its owner and feel happy. Then draft each part.",
        },
      },
      questions: [
        {
          id: "pypl-q-u3l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do FIRST before writing a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Read it to the class" },
              { id: "b", text: "Publish it on the wall" },
              { id: "c", text: "Plan what will happen" },
              { id: "d", text: "Check every spelling" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Writing process", statement: "Plan first, then draft, revise, edit and publish." },
            ],
            steps: [
              { reasoning: "Planning comes first in the writing process.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Plan what will happen",
            commonErrors: ["Choosing 'check spelling' — editing comes after drafting."],
          },
        },
        {
          id: "pypl-q-u3l3c1-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Which of these is the BEST plan for a recount about a school trip?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "'One big word: fun'" },
              { id: "b", text: "'It was fun. We went somewhere. It ended.'" },
              { id: "c", text: "'Arrived → saw animals → ate lunch → went home'" },
              { id: "d", text: "'Dragons, space, robots'" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Planning", statement: "A good plan lists the key events in order." },
            ],
            steps: [
              { reasoning: "Option (b) lists real events in time order — perfect for a recount.", marks: 1, markCode: "M" },
              { reasoning: "The others are too vague or unrelated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 'Arrived → saw animals → ate lunch → went home'",
            commonErrors: ["Choosing (a) — 'it was fun' is a feeling, not a plan of events."],
          },
        },
        {
          id: "pypl-q-u3l3c1-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student starts writing a story without a plan and gets stuck after two sentences: 'One day a dragon flew over the town. The people were scared.' Explain why planning would have helped and what the student should do now.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Purpose of planning", statement: "A plan gives the writer the next events to write, preventing getting stuck." },
            ],
            steps: [
              { reasoning: "Without a plan the writer does not know what happens next — planning lists the events beforehand.", marks: 1, markCode: "M" },
              { reasoning: "Now: stop, make a quick plan (what happens next, middle, end), then continue drafting.", marks: 1, markCode: "M" },
              { reasoning: "The plan acts as a map so the story can reach an ending.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Planning would have listed the next events; student should make a quick plan and continue.",
            commonErrors: ["Saying 'write faster' — the problem is missing direction, not speed."],
          },
        },
        {
          id: "pypl-q-u3l3c1-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "You are going to write a story called 'The Day It Snowed in Summer'.",
          parts: [
            { label: "a", prompt: "Write a plan with a beginning, two middle events and an end.", marks: 2 },
            { label: "b", prompt: "Write the first two sentences of your draft.", marks: 2 },
            { label: "c", prompt: "Add one describing word to your draft.", marks: 1 },
            { label: "d", prompt: "Explain why writers make a draft before the final version.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Planning and drafting", statement: "A plan maps the story; a draft gets ideas down before improving them." },
            ],
            steps: [
              { part: "a", reasoning: "Plan lists beginning (e.g. strange snow begins), two middle events, end (e.g. it melts or stays magical).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Plan covers all three story parts in order.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Draft sentences follow the plan's opening.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sentences are complete and punctuated.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A describing word added sensibly, e.g. 'soft snow' or 'strange summer snow'.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A draft lets you get ideas down without worrying about mistakes.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "You can then improve it — drafts are meant to be revised.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Ordered plan. (b) Two drafted sentences. (c) A describing word. (d) Drafts capture ideas before refining.",
            commonErrors: ["In (a), a plan that is only a title — it must list events."],
          },
        },
        {
          id: "pypl-q-u3l3c1-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A first rough version of your writing is called a...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Checklist" },
              { id: "b", text: "Title" },
              { id: "c", text: "Plan" },
              { id: "d", text: "Draft" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Draft", statement: "A draft is a first version of writing that you will improve." },
            ],
            steps: [
              { reasoning: "The first rough version is the draft.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Draft",
            commonErrors: ["Choosing 'plan' — a plan comes before the draft."],
          },
        },
        {
          id: "pypl-q-u3l3c1-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The writing process has five steps: plan, draft, revise, edit and publish. How many steps are there?",
          response: { type: "numeric", parts: [
            { label: "Writing steps", answer: 5 },
          ] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Writing process", statement: "Plan → draft → revise → edit → publish." },
            ],
            steps: [
              { reasoning: "Count: plan, draft, revise, edit, publish = 5 steps.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "5",
            commonErrors: ["Answering 4 — forgetting one step such as revise."],
          },
        },
        {
          id: "pypl-q-u3l3c1-7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a plan in writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Notes showing what you will write and in what order" },
              { id: "b", text: "A picture of your desk" },
              { id: "c", text: "The finished story" },
              { id: "d", text: "A list of spellings" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Plan", statement: "A plan is notes or a diagram showing what you will write and in what order." },
            ],
            steps: [
              { reasoning: "A plan maps the writing before you start.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Notes showing what you will write and in what order",
            commonErrors: ["Choosing (b) — the finished story is the published version, not the plan."],
          },
        },
        {
          id: "pypl-q-u3l3c1-8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a three-part plan for a short story about finding a lost kitten.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Story plan", statement: "A plan lists the key events in order: beginning, middle and end." },
            ],
            steps: [
              { reasoning: "A plan covering the parts, e.g. 'See kitten / take it home / find its owner'.", marks: 1, markCode: "M" },
              { reasoning: "The events are in a sensible order for the story.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Any ordered 3-part plan, e.g. 'Find kitten → care for it → return it to owner.'",
            commonErrors: ["A plan that is only a title — it must list events."],
          },
        },
        {
          id: "pypl-q-u3l3c1-9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A story plan should cover three parts: beginning, middle and end. How many parts should the plan cover?",
          response: { type: "numeric", parts: [
            { label: "Story parts in plan", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Story structure", statement: "Stories need a beginning, middle and end — the plan should cover all three." },
            ],
            steps: [
              { reasoning: "Count: beginning, middle, end = 3 parts.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — forgetting one part such as the end."],
          },
        },
        {
          id: "pypl-q-u3l3c1-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student starts a story with no plan and gets stuck after two sentences. Explain why planning would have helped and what the student should do now.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Purpose of planning", statement: "A plan lists the next events, so the writer never runs out of ideas." },
            ],
            steps: [
              { reasoning: "Without a plan, the writer does not know what happens next.", marks: 1, markCode: "M" },
              { reasoning: "Now: stop and make a quick plan — what happens next, the middle, the end.", marks: 1, markCode: "M" },
              { reasoning: "Then continue drafting using the plan as a guide.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A plan would have listed the next events; the student should make a quick plan and continue drafting.",
            commonErrors: ["Saying 'write faster' — the problem is missing direction, not speed."],
          },
        },
        {
          id: "pypl-q-u3l3c1-11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the BEST attitude while writing a first draft?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Get your ideas down without worrying about mistakes yet" },
              { id: "b", text: "Give up if the first sentence is hard" },
              { id: "c", text: "Copy someone else's story exactly" },
              { id: "d", text: "Stop and fix every spelling mistake immediately" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Drafting", statement: "A draft is allowed to be rough — you fix mistakes in the revise and edit steps." },
            ],
            steps: [
              { reasoning: "Drafts capture ideas first; mistakes are fixed later.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Get your ideas down without worrying about mistakes yet",
            commonErrors: ["Choosing (a) — editing comes after drafting, not during."],
          },
        },
        {
          id: "pypl-q-u3l3c1-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why writers make a draft before writing the final version.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Purpose of drafting", statement: "A draft lets you get ideas down without pressure, then improve them." },
            ],
            steps: [
              { reasoning: "A draft captures your ideas without worrying about mistakes.", marks: 1, markCode: "M" },
              { reasoning: "You can then see the whole piece and improve it in revise and edit steps.", marks: 1, markCode: "M" },
              { reasoning: "Drafts are meant to be rough — the final version comes later.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Drafts let ideas flow freely so you can improve them later; the final version comes after revising and editing.",
            commonErrors: ["Saying drafts are 'wasted work' — they are the foundation of the final piece."],
          },
        },
        {
          id: "pypl-q-u3l3c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Four steps come before publishing: plan, draft, revise and edit. How many steps come before publishing?",
          response: { type: "numeric", parts: [
            { label: "Steps before publishing", answer: 4 },
          ] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Writing process", statement: "Publishing is the last step — plan, draft, revise and edit come first." },
            ],
            steps: [
              { reasoning: "Count: plan, draft, revise, edit = 4 steps before publishing.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering 5 — publishing itself is not counted as a step before publishing."],
          },
        },
        {
          id: "pypl-q-u3l3c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "What should a first draft include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Your ideas in order — rough is okay" },
              { id: "b", text: "Only the ending" },
              { id: "c", text: "Someone else's ideas" },
              { id: "d", text: "Perfect spelling and punctuation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Drafting", statement: "A draft gets your ideas down in order; mistakes are fixed later." },
            ],
            steps: [
              { reasoning: "Drafts capture ideas in order — perfection comes in revise/edit.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Your ideas in order — rough is okay",
            commonErrors: ["Choosing (a) — perfect spelling is an editing goal, not a drafting goal."],
          },
        },
        {
          id: "pypl-q-u3l3c1-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which is the BEST use of a writing plan?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Use it as a guide so you remember what happens next" },
              { id: "b", text: "Copy it word for word into the story" },
              { id: "c", text: "Only use it for spelling" },
              { id: "d", text: "Throw it away after one sentence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Using a plan", statement: "The plan is a guide — it reminds you of the events and order as you draft." },
            ],
            steps: [
              { reasoning: "The plan guides the drafting so you do not get stuck.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Use it as a guide so you remember what happens next",
            commonErrors: ["Choosing (c) — the plan is notes, not the story itself."],
          },
        },
        {
          id: "pypl-q-u3l3c1-16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "You are going to write a story called 'The Rainy Day Rescue'.",
          parts: [
            { label: "a", prompt: "Write a plan with a beginning, two middle events and an end.", marks: 2 },
            { label: "b", prompt: "Write the first two sentences of your draft.", marks: 2 },
            { label: "c", prompt: "Add one describing word to your draft.", marks: 1 },
            { label: "d", prompt: "Explain why a plan helps before you write.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Planning and drafting", statement: "A plan maps the story; a draft gets ideas down before improving." },
            ],
            steps: [
              { part: "a", reasoning: "Plan lists beginning (e.g. storm starts), two middle events, end (e.g. someone is rescued).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Plan covers all story parts in order.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Draft sentences follow the plan's opening.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Sentences are complete with capitals and full stops.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A describing word added sensibly, e.g. 'heavy rain' or 'brave rescue'.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "A plan gives the writer the events to write, preventing getting stuck.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "It helps the story reach an ending in a sensible order.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Ordered plan. (b) Two drafted sentences. (c) A describing word. (d) Plan prevents getting stuck.",
            commonErrors: ["In (a), a plan that is only a title — it must list events."],
          },
        },
      ],
    },
    {
      id: "pypl-u3l3-c2-revising-editing",
      title: "Revising, editing and publishing",
      skill: "Improve a draft by revising and editing, then publish it neatly.",
      lesson: {
        sections: [
          {
            heading: "Revising and editing",
            body: "**Revising** improves the content: add describing words, make sentences clearer, check the order makes sense. **Editing** fixes mistakes: capitals, full stops, question marks and spelling. Use a **checklist**: 'Did I start every sentence with a capital? Did I end with the right punctuation? Did I use describing words?' Read your work aloud — your ears catch mistakes your eyes miss.",
          },
          {
            heading: "Publishing",
            body: "**Publishing** is the final step: write or type your best version neatly so others can read it. You might display it on the class wall, read it to the class, or put it in a class book. Published writing should look tidy — good spacing, clear letters, and a title so readers know what it is about.",
          },
        ],
        keyFormulas: [
          { name: "Editing checklist", statement: "Capitals ✓ full stops/question marks ✓ spelling ✓ describing words ✓ order makes sense ✓" },
        ],
        workedExample: {
          problem: "Draft: 'the cat sat on mat it was soft' — revise and edit it.",
          solution: "Revised: 'The soft cat sat on the mat.' — added a describing word. Edited: capital T and full stop added.",
        },
      },
      questions: [
        {
          id: "pypl-q-u3l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Checking your writing for spelling and punctuation mistakes is called...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Planning" },
              { id: "b", text: "Editing" },
              { id: "c", text: "Drafting" },
              { id: "d", text: "Reading aloud only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Editing", statement: "Editing is checking and fixing spelling, punctuation and capital mistakes." },
            ],
            steps: [
              { reasoning: "Fixing mistakes = editing.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Editing",
            commonErrors: ["Choosing 'revising' would also be close — but the question asks about mistakes specifically."],
          },
        },
        {
          id: "pypl-q-u3l3c2-2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Your draft says: 'the dog ran fast it jumped the fence' — what are the two main editing fixes needed?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Editing rules", statement: "Sentences need capitals at the start and full stops at the end; two ideas need two sentences." },
            ],
            steps: [
              { reasoning: "Fix 1: capital letter at the start ('The').", marks: 1, markCode: "M" },
              { reasoning: "Fix 2: full stop after 'fast' to separate the two ideas — 'The dog ran fast. It jumped the fence.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Capital 'The' and a full stop after 'fast' (two sentences).",
            commonErrors: ["Missing the sentence split — 'it jumped' is a new complete idea."],
          },
        },
        {
          id: "pypl-q-u3l3c2-3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A writer's draft reads: 'We went to park. it was fun. we played football.' Explain two ways the writer could improve it when revising (not just editing).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Revising vs editing", statement: "Revising improves content — better words, detail, order; editing fixes mistakes." },
            ],
            steps: [
              { reasoning: "Revising idea 1: add describing words, e.g. 'the big park' or 'funny game of football'.", marks: 1, markCode: "M" },
              { reasoning: "Revising idea 2: add detail or a reason it was fun — what happened, who was there.", marks: 1, markCode: "M" },
              { reasoning: "Both improve the writing's quality, not just correctness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Add describing words and more detail about what made it fun.",
            commonErrors: ["Listing punctuation fixes — that is editing, not revising."],
          },
        },
        {
          id: "pypl-q-u3l3c2-4",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Draft text: 'on sunday we went to the beach it was hot we swam and built castles it was the best day'",
          parts: [
            { label: "a", prompt: "Edit the text: add capitals and full stops to make correct sentences.", marks: 2 },
            { label: "b", prompt: "Add one describing word to improve the writing.", marks: 1 },
            { label: "c", prompt: "Add one time connective (first, then, finally) to improve the order.", marks: 1 },
            { label: "d", prompt: "Explain the difference between revising and editing using this text as an example.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Revising vs editing", statement: "Editing fixes conventions (capitals, stops); revising improves content (words, detail, flow)." },
            ],
            steps: [
              { part: "a", reasoning: "Capitals: 'On', 'Sunday'; sentences split: 'On Sunday we went to the beach. It was hot. We swam and built castles. It was the best day.' (or similar correct splits)", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All capitals and full stops correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A describing word, e.g. 'hot sunny beach' or 'big sandcastles'.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A connective used correctly, e.g. 'First we swam, then we built castles.'", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Editing = fixing mistakes (capitals, full stops) — shown in (a).", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Revising = improving content (describing words, connectives, detail) — shown in (b)-(c).", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear distinction stated with reference to the text.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Capitalised, punctuated sentences. (b) e.g. 'big'. (c) e.g. 'then'. (d) Editing fixes mistakes; revising improves content.",
            commonErrors: ["In (d), saying revising means 'fixing spelling' — that is editing."],
          },
        },
        {
          id: "pypl-q-u3l3c2-5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Improving your writing by adding better words and clearer sentences is called...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Drafting" },
              { id: "b", text: "Planning" },
              { id: "c", text: "Revising" },
              { id: "d", text: "Publishing" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Revising", statement: "Revising improves the content — better words, clearer sentences, better order." },
            ],
            steps: [
              { reasoning: "Improving content and words is revising.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Revising",
            commonErrors: ["Choosing 'editing' would be close — editing fixes mistakes; revising improves content."],
          },
        },
        {
          id: "pypl-q-u3l3c2-6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The editing checklist has five things to check: capitals, punctuation, spelling, describing words and order. How many things are checked?",
          response: { type: "numeric", parts: [
            { label: "Checklist items", answer: 5 },
          ] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Editing checklist", statement: "Check capitals, punctuation, spelling, describing words and order." },
            ],
            steps: [
              { reasoning: "Count: capitals, punctuation, spelling, describing words, order = 5 items.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "5",
            commonErrors: ["Answering 4 — forgetting one item such as order."],
          },
        },
        {
          id: "pypl-q-u3l3c2-7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Fixing a missing capital letter or a missing full stop is called...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Revising" },
              { id: "b", text: "Drafting" },
              { id: "c", text: "Editing" },
              { id: "d", text: "Planning" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Editing", statement: "Editing fixes mistakes in spelling, punctuation and capitals." },
            ],
            steps: [
              { reasoning: "Fixing capitals and punctuation mistakes is editing.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Editing",
            commonErrors: ["Choosing 'revising' — revising improves content; fixing mistakes is editing."],
          },
        },
        {
          id: "pypl-q-u3l3c2-8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Edit this sentence: 'the dog ran fast it jumped the fence' — what are the two main fixes?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Editing rules", statement: "Sentences need capitals and full stops; two ideas need two sentences." },
            ],
            steps: [
              { reasoning: "Fix 1: capital letter at the start — 'The'.", marks: 1, markCode: "M" },
              { reasoning: "Fix 2: full stop after 'fast' to split the two ideas — 'The dog ran fast. It jumped the fence.'", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Capital 'The' and a full stop after 'fast' — two sentences.",
            commonErrors: ["Missing the sentence split — 'it jumped' is a new idea."],
          },
        },
        {
          id: "pypl-q-u3l3c2-9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A piece of writing needs to be split into 4 sentences. How many full stops should it have?",
          response: { type: "numeric", parts: [
            { label: "Full stops", answer: 4 },
          ] },
          markscheme: {
            principles: [
              { kind: "convention", name: "Full stops", statement: "Each telling sentence ends with a full stop." },
            ],
            steps: [
              { reasoning: "4 sentences need 4 full stops.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "4",
            commonErrors: ["Answering 3 — every sentence gets its own full stop."],
          },
        },
        {
          id: "pypl-q-u3l3c2-10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the difference between revising and editing, using an example for each.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Revising vs editing", statement: "Revising improves content (better words, detail); editing fixes mistakes (capitals, punctuation, spelling)." },
            ],
            steps: [
              { reasoning: "Editing example: fixing 'the dog' to 'The dog' or adding a missing full stop.", marks: 1, markCode: "M" },
              { reasoning: "Revising example: changing 'the dog' to 'the fluffy dog' or adding detail about what happened.", marks: 1, markCode: "M" },
              { reasoning: "Clear distinction: editing = correctness; revising = quality.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Editing fixes mistakes (capitals/stops); revising improves content (better words, detail).",
            commonErrors: ["Saying revising means 'fixing spelling' — that is editing."],
          },
        },
        {
          id: "pypl-q-u3l3c2-11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What should published writing look like?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only drawings, no words" },
              { id: "b", text: "Neat, with a title, good spacing and correct punctuation" },
              { id: "c", text: "Messy with crossed-out words" },
              { id: "d", text: "Written in tiny secret code" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Publishing", statement: "Published writing is neat — tidy letters/typing, good spacing, a title and correct punctuation." },
            ],
            steps: [
              { reasoning: "Published work must be neat and readable for others.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Neat, with a title, good spacing and correct punctuation",
            commonErrors: ["Choosing (a) — messy drafts are not ready to publish."],
          },
        },
        {
          id: "pypl-q-u3l3c2-12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Why is it helpful to read your writing aloud when checking it?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Checking work", statement: "Reading aloud uses your ears to catch mistakes your eyes miss." },
            ],
            steps: [
              { reasoning: "Your ears hear when a sentence sounds wrong or unfinished.", marks: 1, markCode: "M" },
              { reasoning: "It helps you spot missing words, repeated words or awkward phrasing.", marks: 1, markCode: "M" },
              { reasoning: "So you catch more mistakes before publishing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reading aloud lets your ears catch mistakes — missing words, repeats, awkward sentences — that your eyes miss.",
            commonErrors: ["Saying it is only for 'practice' — it is a real checking strategy."],
          },
        },
        {
          id: "pypl-q-u3l3c2-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Three things to check when editing were named: capitals, punctuation and spelling. How many things are checked?",
          response: { type: "numeric", parts: [
            { label: "Things to check", answer: 3 },
          ] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Editing", statement: "Editing checks capitals, punctuation and spelling." },
            ],
            steps: [
              { reasoning: "Count: capitals, punctuation, spelling = 3 things.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "3",
            commonErrors: ["Answering 2 — forgetting one check such as spelling."],
          },
        },
        {
          id: "pypl-q-u3l3c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which of these is an example of REVISING (not editing)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Adding a describing word like 'fluffy'" },
              { id: "b", text: "Capitalising 'i' to 'I'" },
              { id: "c", text: "Fixing 'teh' to 'the'" },
              { id: "d", text: "Adding a missing full stop" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Revising vs editing", statement: "Adding describing words improves content (revising); fixing spelling/punctuation/capitals is editing." },
            ],
            steps: [
              { reasoning: "Adding 'fluffy' improves the writing's quality — revising. The others fix mistakes — editing.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Adding a describing word like 'fluffy'",
            commonErrors: ["Choosing (a) — fixing spelling is editing, not revising."],
          },
        },
        {
          id: "pypl-q-u3l3c2-15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A writer's draft says: 'We went to the park. it was fun.' What is the ONE editing fix needed?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Change 'it' to 'It' with a capital letter" },
              { id: "b", text: "Rewrite the whole story" },
              { id: "c", text: "Add a question mark" },
              { id: "d", text: "Add a describing word" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Editing", statement: "Every sentence starts with a capital — 'it' should be 'It'." },
            ],
            steps: [
              { reasoning: "'it was fun' starts a new sentence but has no capital — fix 'it' to 'It'.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Change 'it' to 'It' with a capital letter",
            commonErrors: ["Choosing (a) — adding describing words is revising, not the needed editing fix."],
          },
        },
        {
          id: "pypl-q-u3l3c2-16",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Draft text: 'on saturday we visited grandma she made cakes we ate them all it was lovely'",
          parts: [
            { label: "a", prompt: "Edit the text: add capitals and full stops to make correct sentences.", marks: 2 },
            { label: "b", prompt: "Add one describing word to improve the writing.", marks: 1 },
            { label: "c", prompt: "Add one time connective (first, then, finally) to improve the order.", marks: 1 },
            { label: "d", prompt: "Explain the difference between revising and editing using this text.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Revising vs editing", statement: "Editing fixes conventions (capitals, stops); revising improves content (words, detail, flow)." },
            ],
            steps: [
              { part: "a", reasoning: "Capitals: 'On', 'Saturday', 'Grandma', 'We'; split: 'On Saturday we visited Grandma. She made cakes. We ate them all. It was lovely.'", marks: 1, markCode: "M" },
              { part: "a", reasoning: "All capitals and full stops correct.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A describing word, e.g. 'delicious cakes' or 'lovely grandma'.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "A connective used correctly, e.g. 'First she made cakes, then we ate them.'", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Editing = fixing mistakes (capitals, full stops) — shown in (a).", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Revising = improving content (describing words, connectives, detail) — shown in (b)-(c).", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Clear distinction stated with reference to the text.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Capitalised, punctuated sentences. (b) e.g. 'delicious'. (c) e.g. 'then'. (d) Editing fixes mistakes; revising improves content.",
            commonErrors: ["In (d), saying revising means 'fixing spelling' — that is editing."],
          },
        },
      ],
    },
  ],
};
