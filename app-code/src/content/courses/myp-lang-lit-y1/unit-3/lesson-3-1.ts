import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "mll1-u3-lesson-3-1",
  code: "3-1",
  title: "Writing a Story",
  goal: "I CAN plan and write a short story with characters, a setting, a problem and an ending.",
  standards: [
    "MYP Language and Literature",
    "Criterion B: Organizing",
    "Criterion C: Producing text",
    "Criterion D: Using language",
  ],
  vocabulary: [
    { term: "Story plan", definition: "A simple outline of what will happen: beginning, middle and end." },
    { term: "Problem", definition: "Something difficult the main character must deal with in the story." },
    { term: "Ending", definition: "How the story finishes — the problem is solved or the character learns something." },
    { term: "Narrator", definition: "The voice telling the story — 'I' (first person) or 'he/she/they' (third person)." },
    { term: "Draft", definition: "A first version of writing that you can improve." },
  ],
  concepts: [
    {
      id: "mll1-u3-story-plan",
      title: "Planning a story",
      skill: "Plan a story's characters, setting, problem and ending before writing.",
      lesson: {
        sections: [
          {
            heading: "The story plan",
            body: "Before you write, plan four things: **who** is in the story (characters), **where and when** it happens (setting), **what problem** they face, and **how it ends**. A plan keeps your story on track.",
          },
          {
            heading: "Beginning, middle, end",
            body: "**Beginning**: introduce the characters and setting. **Middle**: the problem happens and the character tries to solve it. **End**: the problem is solved — the character succeeds, fails, or learns something.",
          },
          {
            heading: "First person or third?",
            body: "Decide your **narrator**. **First person** uses 'I' and 'me' — it feels close and personal. **Third person** uses 'he', 'she', 'they' or a name — it can show more of the world. Pick one and stay with it.",
          },
        ],
        keyFormulas: [
          { name: "Story plan", statement: "Characters + Setting + Problem + Ending." },
        ],
        workedExample: {
          problem: "Plan a story in four lines.",
          solution: "Characters: Maya and her little brother. Setting: grandma's garden, summer. Problem: the vegetables are being eaten. Ending: they build a scarecrow and catch the culprit — a rabbit.",
        },
      },
      questions: [
        {
          id: "mll1-u3-story-plan-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should come first when planning a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Choosing the ending" },
              { id: "b", text: "Writing the title" },
              { id: "c", text: "Counting the words" },
              { id: "d", text: "Deciding who the characters are and where it happens" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Story planning", statement: "Characters and setting come first; problem and ending build on them." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): you need to know who and where before you can plan what happens — (c).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Deciding who the characters are and where it happens",
          },
        },
        {
          id: "mll1-u3-story-plan-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a four-part story plan for a story about a lost dog found at the beach.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Story plan elements", statement: "A plan names characters, setting, problem and ending." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): characters and setting given, e.g. 'Lena and her dog Rex; the beach town in summer'.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): problem and ending given, e.g. 'Rex runs off during a storm' and 'Lena finds him sheltering under a rock'.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "e.g. Characters: Lena and her dog Rex. Setting: a beach town in summer. Problem: Rex runs off in a storm. Ending: Lena finds him safe under a rock.",
          },
        },
        {
          id: "mll1-u3-story-plan-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Two students plan the same idea differently. Ana writes: 'A girl finds a key. It opens a door in an old library.' Ben writes: 'Every night at midnight, a clock in the tower strikes thirteen times.' Explain which plan gives a clearer story and why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Clarity in planning", statement: "A plan that names characters, problem and ending is easier to write than one that only hints at an idea." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): Ana's plan has characters (a girl), a problem/action (finds a key) and direction (opens a door) — it can grow into a story.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): Ben's plan is only a mysterious image — no character we care about, no problem, no ending.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C (Producing text): a writer needs to know what the character wants and what goes wrong; Ana's plan provides this shape.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Ana's plan is clearer — it has a character, an action and a direction, while Ben's is only an atmospheric image.",
          },
        },
        {
          id: "mll1-u3-story-plan-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a story plan (characters, setting, problem, ending) for a story about a class pet that escapes.", marks: 3 },
            { label: "b", prompt: "Explain why the 'problem' is the most important part of the plan.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Story structure", statement: "Beginning introduces, middle presents the problem, end resolves it." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): characters and setting named, e.g. 'the class and their hamster Pip; the school'.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B (Organizing): problem stated — Pip escapes from his cage.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B (Organizing): ending stated — the class finds Pip and builds a safer home for him.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion C (Producing text): the problem creates the story's tension — without something to solve, events have no direction.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion B (Organizing): the ending answers the problem, so the reader feels the story is complete.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) e.g. Class + hamster Pip; school; Pip escapes; they find him and make a safer cage. (b) The problem drives the plot and the ending must solve it.",
          },
        },
        {
          id: "mll1-u3-story-plan-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is NOT one of the four parts of a story plan?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Problem" },
              { id: "b", text: "Characters" },
              { id: "c", text: "Setting" },
              { id: "d", text: "Cover design" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Story plan", statement: "A plan needs characters, setting, problem and ending." }],
            steps: [{ reasoning: "Criterion B (Organizing): 'cover design' is not part of a story plan — (d).", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Cover design",
          },
        },
        {
          id: "mll1-u3-story-plan-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the 'problem' in a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The title of the story" },
              { id: "b", text: "Something difficult the character must deal with" },
              { id: "c", text: "The ending of the story" },
              { id: "d", text: "The character's name" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Problem", statement: "The problem is what makes the story happen." }],
            steps: [{ reasoning: "Criterion B (Organizing): the problem is the difficulty the character faces — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Something difficult the character must deal with",
          },
        },
        {
          id: "mll1-u3-story-plan-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In first-person narration, the story is told using...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only dialogue" },
              { id: "b", text: "'he', 'she', 'they'" },
              { id: "c", text: "The title" },
              { id: "d", text: "'I' and 'me'" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Narrator", statement: "First person uses 'I' and 'me'." }],
            steps: [{ reasoning: "Criterion B (Organizing): first person = 'I'/'me' — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** 'I' and 'me'",
          },
        },
        {
          id: "mll1-u3-story-plan-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Write a four-part plan for a story about a boy who finds a stray cat.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Story plan elements", statement: "Plan characters, setting, problem and ending." }],
            steps: [
              { reasoning: "Criterion B (Organizing): characters and setting given, e.g. 'a boy named Sam; his street in summer'.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): problem and ending given, e.g. 'the cat is scared and hungry' and 'Sam takes it home and names it'.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "e.g. Characters: Sam and a stray cat. Setting: Sam's street in summer. Problem: the cat is scared and hungry. Ending: Sam takes it home.",
          },
        },
        {
          id: "mll1-u3-story-plan-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student plans: 'A dragon lives on a mountain. One day it sneezes fire.' Explain what is missing from this plan to make a full story.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Story plan elements", statement: "A complete plan needs characters, setting, problem and ending." }],
            steps: [
              { reasoning: "Criterion B (Organizing): it has a character (dragon) and setting (mountain) but no clear problem or ending.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C (Producing text): a story needs something to happen — e.g. 'the fire destroys the village, so the dragon must learn control' and an ending.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Missing a problem and ending — the plan has character and setting but no conflict or resolution.",
          },
        },
        {
          id: "mll1-u3-story-plan-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Two Plans",
            author: "Written for Akademik Space",
            text: "Plan A: 'Mina loses her grandmother's ring at the beach. She searches all morning but can't find it. That evening she finds it shining in the sand near a rock.'\n\nPlan B: 'A ring is lost at the beach and later found.'",
          },
          stem: "Explain why Plan A is a better story plan than Plan B.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Effective planning", statement: "A good plan names the character, the problem and the resolution." }],
            steps: [
              { reasoning: "Criterion B (Organizing): Plan A has a character (Mina), a problem (lost ring) and an ending (found it).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): Plan B is just a summary with no character we care about and no story shape.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C (Producing text): Plan A gives the writer everything needed — who, what goes wrong, and how it ends.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Plan A has character, problem and ending; Plan B is only a flat summary.",
          },
        },
        {
          id: "mll1-u3-story-plan-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why should you decide first person or third person BEFORE writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Because it changes the punctuation" },
              { id: "b", text: "It doesn't matter at all" },
              { id: "c", text: "Because mixing narrators confuses the reader" },
              { id: "d", text: "Because first person uses speech marks" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Narrator consistency", statement: "Stay with one narrator throughout the story." }],
            steps: [{ reasoning: "Criterion B (Organizing): switching between 'I' and 'he/she' mid-story confuses readers — (a).", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Because mixing narrators confuses the reader",
          },
        },
        {
          id: "mll1-u3-story-plan-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student's plan says: 'Ali is a baker. He makes bread.' Explain two things missing that would turn this into a story.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Story planning", statement: "A story needs a problem and an ending, not just a description." }],
            steps: [
              { reasoning: "Criterion B (Organizing): there is a character and setting but no problem — nothing goes wrong or needs solving.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): there is no ending — we do not know how the story finishes.", marks: 1, markCode: "B" },
              { reasoning: "Criterion C (Producing text): e.g. 'the oven breaks on the biggest order day' and 'he fixes it in time to deliver the bread'.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Missing a problem and an ending — the plan only describes a character.",
          },
        },
        {
          id: "mll1-u3-story-plan-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a story plan (characters, setting, problem, ending) about a student who breaks a school window.", marks: 3 },
            { label: "b", prompt: "Explain why a plan with a problem makes a better story than one without.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Story structure", statement: "Problem drives the plot; ending resolves it." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): characters and setting given, e.g. 'a student named Dev; the school'.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B (Organizing): problem — Dev breaks a window during football.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B (Organizing): ending — Dev tells the truth and helps pay for the repair.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion C (Producing text): a problem creates tension and gives events direction — readers want to know what happens.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion B (Organizing): without a problem, events are flat and there is nothing to resolve.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) e.g. Dev + school; breaks window in football; tells truth and pays. (b) The problem drives the story forward.",
          },
        },
        {
          id: "mll1-u3-story-plan-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a 'story plan' help you do?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Organize your ideas before writing" },
              { id: "b", text: "Publish the story" },
              { id: "c", text: "Choose the cover colour" },
              { id: "d", text: "Count the words in your story" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Story planning", statement: "A plan keeps the story organized before writing." }],
            steps: [{ reasoning: "Criterion B (Organizing): a plan organizes ideas — characters, setting, problem, ending — before writing, (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Organize your ideas before writing",
          },
        },
        {
          id: "mll1-u3-story-plan-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A story plan says: characters are two friends, setting is camping, problem is they lose the map. Which ending solves the problem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They buy a new tent." },
              { id: "b", text: "They find their way home using the stars." },
              { id: "c", text: "They decide camping is boring." },
              { id: "d", text: "They eat dinner and go to sleep." },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Story ending", statement: "The ending solves the problem." }],
            steps: [{ reasoning: "Criterion B (Organizing): finding their way home solves the lost-map problem — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** They find their way home using the stars.",
          },
        },
        {
          id: "mll1-u3-story-plan-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a story plan for a story about a new student at school.", marks: 3 },
            { label: "b", prompt: "Explain why planning the ending first can help a writer.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Story planning", statement: "Planning all four parts keeps the story focused." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): characters and setting given, e.g. 'a new student named Kofi; a big school'.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B (Organizing): problem — Kofi feels lonely and cannot make friends.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B (Organizing): ending — Kofi joins the football team and makes friends.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion C (Producing text): knowing the ending helps shape the middle — events lead toward it.", marks: 1, markCode: "C" },
              { part: "b", reasoning: "Criterion B (Organizing): it prevents the story wandering with no direction.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) e.g. Kofi + school; lonely new student; joins football team. (b) The ending guides the plot so the story stays focused.",
          },
        },
      ],
    },
    {
      id: "mll1-u3-writing-story",
      title: "Writing the story",
      skill: "Write a short story using the plan, with clear paragraphs and a satisfying ending.",
      lesson: {
        sections: [
          {
            heading: "From plan to draft",
            body: "Take your plan and write a **first draft** — don't worry about perfect words yet. Write the beginning first, then the middle where the problem happens, then the end. Use **paragraphs** to separate different moments.",
          },
          {
            heading: "Showing, not just telling",
            body: "Instead of 'Sam was scared', **show** it: 'Sam's hands shook and he hid behind the door.' Actions and senses make readers feel the story. Add a little **dialogue** to bring characters to life.",
          },
          {
            heading: "Revising",
            body: "Read your draft again and **revise**: fix run-on sentences, check capitals and punctuation, and make sure the ending matches your plan. A good story is a **draft improved**.",
          },
        ],
        keyFormulas: [
          { name: "Draft checklist", statement: "Beginning → problem → ending. Paragraphs, capitals, punctuation, and a final read-through." },
        ],
        workedExample: {
          problem: "Improve this sentence: 'The dog was happy.'",
          solution: "Show the feeling: 'The dog wagged its tail so hard it knocked over the bowl.'",
        },
      },
      questions: [
        {
          id: "mll1-u3-writing-story-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'draft' in writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A list of ideas" },
              { id: "b", text: "A published book" },
              { id: "c", text: "The final perfect version" },
              { id: "d", text: "A first version you can improve" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Drafting", statement: "A draft is an early version that will be revised." },
            ],
            steps: [
              { reasoning: "Criterion C (Producing text): a draft is the first version you improve later — (b).", marks: 1, markCode: "C" },
            ],
            finalAnswer: "**(b)** A first version you can improve",
          },
        },
        {
          id: "mll1-u3-writing-story-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rewrite 'The girl was excited' to show her excitement through action or senses instead of just telling.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Show don't tell", statement: "Actions and senses show feelings more powerfully than naming them." },
            ],
            steps: [
              { reasoning: "Criterion C (Producing text): an example such as 'She bounced on her toes and clapped her hands' — action shows excitement.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D (Using language): the sentence is grammatically correct with correct punctuation and no 'excited' telling-word needed.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'She bounced on her toes and clapped her hands.' — the action shows the excitement.",
          },
        },
        {
          id: "mll1-u3-writing-story-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student writes: 'First Tom lost his kite. Then he found it. Finally he went home.' Explain two ways this retelling could be made into a more interesting story.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Story elements", statement: "Interesting stories add detail, feelings, obstacles and description." },
            ],
            steps: [
              { reasoning: "Criterion C (Producing text): add a real problem and feelings — e.g. the kite is stuck on a roof, Tom is worried, he has to ask for help.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): add sensory detail and dialogue — describe the wind, the tangle of string, Tom talking to a neighbour.", marks: 1, markCode: "C" },
              { reasoning: "Criterion B (Organizing): give the events a cause-and-effect order — kite flies off, search fails, new plan succeeds — instead of three flat statements.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Add a genuine problem with feelings, sensory detail and dialogue, and order events by cause and effect.",
          },
        },
        {
          id: "mll1-u3-writing-story-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write the first two sentences of a story about a character who discovers something unexpected.", marks: 2 },
            { label: "b", prompt: "Explain how you will show (not tell) the character's feeling in the rest of the story.", marks: 1 },
            { label: "c", prompt: "Describe how you will check your story before finishing it.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Story writing process", statement: "Draft → show feelings through action → revise for punctuation, paragraphs and clarity." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): an engaging opening, e.g. 'Mia opened the attic door and found a map where no map should be.'", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): correct capitalization, punctuation and complete sentences.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C (Producing text): use actions and senses — 'her eyes went wide', 'she held her breath' — instead of 'she was surprised'.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion B (Organizing): read through checking capitals, full stops, commas and paragraph breaks.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C (Producing text): check the ending solves the problem and the story matches the plan.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) e.g. 'Mia opened the attic door and found a map where no map should be.' (b) Show feelings through actions and senses. (c) Proofread for punctuation, paragraphs and a matching ending.",
          },
        },
        {
          id: "mll1-u3-writing-story-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What should you do FIRST when writing a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Make a plan of characters, setting, problem and ending" },
              { id: "b", text: "Count the words" },
              { id: "c", text: "Write the ending" },
              { id: "d", text: "Choose the font" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "skill", name: "Writing process", statement: "Plan before you write." }],
            steps: [{ reasoning: "Criterion B (Organizing): planning comes first — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Make a plan of characters, setting, problem and ending",
          },
        },
        {
          id: "mll1-u3-writing-story-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'show, don't tell' mean in story writing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only write dialogue" },
              { id: "b", text: "Use actions and senses instead of just naming feelings" },
              { id: "c", text: "Hide the ending" },
              { id: "d", text: "Write the story on a board" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Show don't tell", statement: "Actions and senses show feelings more powerfully than naming them." }],
            steps: [{ reasoning: "Criterion C (Producing text): showing means using actions/senses rather than saying 'she was scared' — (b).", marks: 1, markCode: "C" }],
            finalAnswer: "**(b)** Use actions and senses instead of just naming feelings",
          },
        },
        {
          id: "mll1-u3-writing-story-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which sentence SHOWS that a character is nervous?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Tom was nervous." },
              { id: "b", text: "Tom felt worried." },
              { id: "c", text: "Tom's hands shook and he kept checking the door." },
              { id: "d", text: "Tom was scared." },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Show don't tell", statement: "Actions show feelings; naming them only tells." }],
            steps: [{ reasoning: "Criterion C (Producing text): 'hands shook' and 'checking the door' show nervousness through action — (b).", marks: 1, markCode: "C" }],
            finalAnswer: "**(b)** Tom's hands shook and he kept checking the door.",
          },
        },
        {
          id: "mll1-u3-writing-story-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Rewrite 'The boy was excited about the trip' to show his excitement through action.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Show don't tell", statement: "Actions show feelings." }],
            steps: [
              { reasoning: "Criterion C (Producing text): an example such as 'The boy bounced on his toes and packed his bag three times.'", marks: 1, markCode: "C" },
              { reasoning: "Criterion D (Using language): correct grammar and punctuation; no 'excited' telling word.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "e.g. 'The boy bounced on his toes and packed his bag three times.'",
          },
        },
        {
          id: "mll1-u3-writing-story-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Draft Story",
            author: "Written for Akademik Space",
            text: "First Sam lost his kite. Then he searched the beach. Finally he found it in a tree and flew it again.",
          },
          stem: "This is a flat retelling. Suggest two ways to make it a more interesting story.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Story craft", statement: "Add feelings, obstacles and detail to make a story interesting." }],
            steps: [
              { reasoning: "Criterion C (Producing text): add a real problem — the kite is stuck high in the tree and Sam cannot reach it.", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): add feelings and dialogue — Sam worries, asks a neighbour for help, feels relief.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Add a genuine obstacle (kite stuck high) and feelings/dialogue (worry, asking for help, relief).",
          },
        },
        {
          id: "mll1-u3-writing-story-q10",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A student's draft reads: 'The dog ran. It was fast. It caught the ball.' Explain two ways to improve this paragraph.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Revision", statement: "Specific words and varied sentences make writing stronger." }],
            steps: [
              { reasoning: "Criterion C (Producing text): combine short sentences into flowing ones — 'The dog dashed across the grass and caught the ball.'", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): replace 'fast' with a stronger word like 'dashed' or 'sprinted' and add a sensory detail.", marks: 1, markCode: "C" },
              { reasoning: "Criterion D (Using language): vary sentence length so the paragraph does not sound choppy.", marks: 1, markCode: "D" },
            ],
            finalAnswer: "Combine choppy sentences, use stronger verbs, and vary sentence length.",
          },
        },
        {
          id: "mll1-u3-writing-story-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the 'middle' of a story called?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The ending" },
              { id: "b", text: "The beginning" },
              { id: "c", text: "The problem or development" },
              { id: "d", text: "The title" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Story structure", statement: "The middle contains the problem and attempts to solve it." }],
            steps: [{ reasoning: "Criterion B (Organizing): the middle is where the problem develops — (c).", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** The problem or development",
          },
        },
        {
          id: "mll1-u3-writing-story-q12",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Lost Library Book",
            author: "Written for Akademik Space",
            text: "Omar opened his bag to find his library book was missing. 'It was here last night,' he said, turning his pockets inside out. His friend Ben found it under the desk — and smiled.",
          },
          stem: "Explain how this mini-story uses dialogue and a satisfying ending.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Story elements", statement: "Dialogue reveals character; a clear resolution satisfies the reader." }],
            steps: [
              { reasoning: "Criterion C (Producing text): dialogue ('It was here last night') shows Omar's worry and makes the scene feel real.", evidence: "It was here last night", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): the problem (missing book) is resolved — Ben finds it under the desk.", evidence: "found it under the desk", marks: 1, markCode: "C" },
              { reasoning: "Criterion C (Producing text): the ending is satisfying because the mystery is solved quickly and Ben's smile adds warmth.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "Dialogue shows Omar's worry; the book is found, giving a clear, satisfying resolution.",
          },
        },
        {
          id: "mll1-u3-writing-story-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write the first two sentences of a story about a character who finds a hidden door.", marks: 2 },
            { label: "b", prompt: "Explain how you will show (not tell) the character's curiosity.", marks: 1 },
            { label: "c", prompt: "Describe what you will check when revising your draft.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Story writing process", statement: "Engaging opening → show feelings → revise." }],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): an engaging opening, e.g. 'Aiko found the door behind the bookshelf, where no door should be.'", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): correct capitals, punctuation, complete sentences.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C (Producing text): show curiosity through actions — 'she pressed her ear to the wood', 'her fingers hovered over the handle'.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion B (Organizing): check capitals, punctuation, paragraph breaks and that the ending solves the problem.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C (Producing text): read aloud for clumsy sentences and swap weak words.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) Original opening sentences. (b) Show curiosity through actions. (c) Check punctuation, paragraphs, ending and weak words.",
          },
        },
        {
          id: "mll1-u3-writing-story-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a 'paragraph' in a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A group of sentences about one moment or idea" },
              { id: "b", text: "A list of characters" },
              { id: "c", text: "A single word" },
              { id: "d", text: "The story's title" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Paragraphs", statement: "Paragraphs separate different moments or ideas in a story." }],
            steps: [{ reasoning: "Criterion B (Organizing): a paragraph groups related sentences — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** A group of sentences about one moment or idea",
          },
        },
        {
          id: "mll1-u3-writing-story-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which opening line is most likely to hook a reader?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It was a rainy day and I went outside." },
              { id: "b", text: "The door opened before she touched it — and inside was a room that was not on any map." },
              { id: "c", text: "I saw a bird in the tree." },
              { id: "d", text: "My name is Tom and I am ten years old." },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Story opening", statement: "An engaging opening creates curiosity or tension." }],
            steps: [{ reasoning: "Criterion C (Producing text): (c) creates mystery and suspense — the door opens by itself and the room is impossible.", marks: 1, markCode: "C" }],
            finalAnswer: "**(c)** The door opened before she touched it — and inside was a room that was not on any map.",
          },
        },
        {
          id: "mll1-u3-writing-story-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Answer all parts.",
          parts: [
            { label: "a", prompt: "Write a three-sentence story about a character who helps someone.", marks: 2 },
            { label: "b", prompt: "Explain how your story shows the character's kindness.", marks: 1 },
            { label: "c", prompt: "Describe two checks you would do before calling the story finished.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Story writing", statement: "Complete story = beginning, problem, ending + revision." }],
            steps: [
              { part: "a", reasoning: "Criterion C (Producing text): a complete mini-story, e.g. 'Maya saw an old man struggling with his bags. She carried them to his door. He smiled and thanked her.'", marks: 1, markCode: "C" },
              { part: "a", reasoning: "Criterion D (Using language): correct punctuation and complete sentences.", marks: 1, markCode: "D" },
              { part: "b", reasoning: "Criterion C (Producing text): kindness is shown through action — 'carried them' shows care better than 'she was kind'.", marks: 1, markCode: "C" },
              { part: "c", reasoning: "Criterion B (Organizing): check capitals, full stops, commas and paragraph breaks.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Criterion C (Producing text): check the ending resolves the problem and the story matches the plan.", marks: 1, markCode: "C" },
            ],
            finalAnswer: "(a) Original 3-sentence story. (b) Kindness shown through actions. (c) Punctuation/paragraphs + ending check.",
          },
        },
      ],
    },
  ],
};
