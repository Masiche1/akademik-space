import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "mll1-u1-lesson-1-1",
  code: "1-1",
  title: "Stories: Who, What, Where and How It Ends",
  goal: "I CAN identify the characters, setting and plot of a short story and retell its events in order.",
  standards: [
    "MYP Language and Literature",
    "Criterion A: Analysing",
    "Criterion B: Organizing",
  ],
  vocabulary: [
    { term: "Character", definition: "A person or animal in a story who does things and feels things." },
    { term: "Setting", definition: "The place and time where a story happens." },
    { term: "Plot", definition: "The sequence of events in a story, from beginning to end." },
    { term: "Retell", definition: "To tell the events of a story again in your own words." },
    { term: "Title", definition: "The name of a story, which often gives a clue about what it is about." },
  ],
  concepts: [
    {
      id: "mll1-u1-characters-setting",
      title: "Characters and setting",
      skill: "Identify who is in a story and where it happens.",
      lesson: {
        sections: [
          {
            heading: "Characters",
            body: "A **character** is a person, animal or creature in a story. Ask yourself: **who** is in this story? Some stories name the characters, like **Amara**, but others just say **the boy** or **the old dog**. Watch what characters **do** and **say** — that shows what they are like.",
          },
          {
            heading: "Setting",
            body: "The **setting** is the **place** and **time** where a story happens. Look for words that tell you where — like a **forest**, a **kitchen**, a **city** — and when — like **morning**, **winter** or **long ago**. The setting helps you picture the story in your mind.",
          },
          {
            heading: "Reading the clues",
            body: "Good readers look for clues about characters and setting in every sentence. A story about a **lost puppy in a stormy night** tells you the setting (outside, at night, in bad weather) and hints at the character (a small, scared animal).",
          },
        ],
        keyFormulas: [
          { name: "Story questions", statement: "Who is in the story? Where does it happen? When does it happen?" },
        ],
        workedExample: {
          problem: "Look at this sentence: \"On a cold December evening, Nadia sat alone in the attic, listening to the wind.\" Who is the character? What is the setting?",
          solution: "The character is Nadia. The setting is an attic, on a cold December evening — so it is a cold night in winter.",
        },
      },
      questions: [
        {
          id: "mll1-u1-characters-setting-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In a story, what is the 'setting'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The lesson the story teaches" },
              { id: "b", text: "The main character of the story" },
              { id: "c", text: "The place and time where the story happens" },
              { id: "d", text: "The name of the story" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Setting", statement: "The place and time where a story happens." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the setting describes where and when events take place, so (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The place and time where the story happens",
          },
        },
        {
          id: "mll1-u1-characters-setting-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read this opening: \"On a rainy Monday morning, Ben raced to the bus stop with his red backpack bouncing.\" Write down the character's name and two details about the setting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Clues in a text", statement: "Words naming places, times and weather give the setting; names and actions give characters." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the character is Ben, named in the first sentence.", evidence: "Ben raced to the bus stop", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the setting details are a rainy Monday morning and the bus stop — accept any two of: rainy weather, Monday morning, bus stop.", evidence: "On a rainy Monday morning ... the bus stop", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Character: Ben. Setting: rainy Monday morning at the bus stop.",
          },
        },
        {
          id: "mll1-u1-characters-setting-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Read this opening: \"The lighthouse keeper had lived alone on the cliff for thirty years. Every evening at six o'clock he climbed the spiral stairs to light the lamp.\" Explain two things this tells you about the character and one thing it tells you about the setting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Character through detail", statement: "What a character does regularly and where they live reveals their life and personality." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): the keeper has lived alone for thirty years — he is lonely, settled and probably old or very dedicated.", evidence: "lived alone on the cliff for thirty years", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): he lights the lamp every evening at six — he is routine, responsible and relies on habit.", evidence: "Every evening at six o'clock he climbed the spiral stairs", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the setting is a lighthouse on a cliff — isolated, near the sea, probably far from town.", evidence: "the cliff", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The keeper is alone, routine-bound and long-serving; the setting is an isolated cliff-top lighthouse.",
            commonErrors: ["Repeating the words without explaining what they suggest about the character."],
          },
        },
        {
          id: "mll1-u1-characters-setting-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this story opening.",
          extract: {
            title: "The Seed",
            author: "Written for Akademik Space",
            text: "Maya found the seed in her grandmother's kitchen drawer, wrapped in a paper bag. It was the last thing her grandmother had left behind.\n\n'Plant it where the sun can find it,' the note said in shaky handwriting. Maya pressed the seed into the soil of the school garden and waited.",
          },
          parts: [
            { label: "a", prompt: "Name the main character and say where most of this opening happens.", marks: 1 },
            { label: "b", prompt: "Write down two objects or details the author uses to show the grandmother is no longer with Maya.", marks: 2 },
            { label: "c", prompt: "Explain how the setting of the school garden might help Maya.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Detail as meaning", statement: "Objects and places in a story carry meaning beyond their literal use." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): the character is Maya, and the opening happens in her grandmother's kitchen and the school garden.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): 'the last thing her grandmother had left behind' shows she has died or gone away.", evidence: "the last thing her grandmother had left behind", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the 'shaky handwriting' on the note suggests the grandmother was old or ill.", evidence: "shaky handwriting", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the garden is a shared, public place where Maya can be with others and watch things grow — a hopeful, connected setting.", evidence: "the school garden", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'where the sun can find it' suggests light and growth, so the garden may help the seed (and Maya's feelings) thrive.", evidence: "Plant it where the sun can find it", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Maya; grandmother's kitchen and school garden. (b) 'last thing she left behind' and 'shaky handwriting'. (c) The garden is sunny, shared and growing — a hopeful place for Maya.",
          },
        },
        {
          id: "mll1-u1-characters-setting-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the sentence 'The old lighthouse stood on the cliff above the sea', what is the setting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A beach full of people" },
              { id: "b", text: "A lighthouse on a cliff by the sea" },
              { id: "c", text: "A city harbour in winter" },
              { id: "d", text: "Inside a ship at night" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Setting clues", statement: "Setting is the place and time named in the text." }],
            steps: [{ reasoning: "Criterion A (Analysing): the place is a lighthouse on a cliff above the sea — (a).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** A lighthouse on a cliff by the sea",
          },
        },
        {
          id: "mll1-u1-characters-setting-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 'Amara packed her bag for the school trip', who is the character?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Amara" },
              { id: "b", text: "The bag" },
              { id: "c", text: "The trip" },
              { id: "d", text: "The school" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Characters", statement: "A character is the person, animal or creature who acts in a story." }],
            steps: [{ reasoning: "Criterion A (Analysing): Amara is the person doing the action (packing), so she is the character — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** Amara",
          },
        },
        {
          id: "mll1-u1-characters-setting-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A story opens: 'Every winter morning, Tane built a snowman in the front garden.' Where and when does this story happen?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inside a warm house at night" },
              { id: "b", text: "At the beach in summer" },
              { id: "c", text: "In the front garden on winter mornings" },
              { id: "d", text: "At school on Friday" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Place and time words", statement: "Words like 'winter morning' and 'front garden' give the setting." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'every winter morning' gives the time and 'front garden' the place — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** In the front garden on winter mornings",
          },
        },
        {
          id: "mll1-u1-characters-setting-q8",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "Market Day",
            author: "Written for Akademik Space",
            text: "On Saturday morning, two sisters, Priya and Meera, pushed their grandmother's wheelchair through the busy market, past stalls of fruit and flowers.",
          },
          stem: "Name the characters and write down two details that tell you where the story happens.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Clues in a text", statement: "Names show characters; place and activity words show the setting." }],
            steps: [
              { reasoning: "Criterion A (Analysing): the characters are Priya, Meera and their grandmother.", evidence: "Priya and Meera ... grandmother's wheelchair", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): setting details — a busy market on Saturday morning with stalls of fruit and flowers.", evidence: "the busy market, past stalls of fruit and flowers", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Characters: Priya, Meera and grandmother. Setting: a busy market on Saturday morning.",
          },
        },
        {
          id: "mll1-u1-characters-setting-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Read this sentence: 'Grandma told stories by the fire while the wind rattled the windows.' What two things does it tell you about the setting?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Setting detail", statement: "Objects and weather in a sentence reveal the place and mood of a story." }],
            steps: [
              { reasoning: "Criterion A (Analysing): the setting is indoors, probably a house or hut, because there is a fire and windows.", evidence: "by the fire ... the windows", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'the wind rattled the windows' suggests it is windy or stormy outside — likely a cold night indoors.", evidence: "the wind rattled the windows", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Indoors by a fire, on a windy (probably cold) night.",
          },
        },
        {
          id: "mll1-u1-characters-setting-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Ferry",
            author: "Written for Akademik Space",
            text: "Old Salvo had rowed the same crossing for forty years. He knew every rock beneath the grey water and every current that pulled at his oars.",
          },
          stem: "Explain what this tells you about Salvo as a character and about the setting of his work.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Character through detail", statement: "Long service and special knowledge reveal a character's experience and dedication." }],
            steps: [
              { reasoning: "Criterion A (Analysing): Salvo has worked the same job for forty years — he is experienced, reliable and probably elderly ('old').", evidence: "rowed the same crossing for forty years", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): he 'knew every rock' and 'every current' — he is skilled and careful, trusting his experience.", evidence: "knew every rock beneath the grey water and every current", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the setting is a river or sea crossing with oars, rocks and currents — a working waterfront, not a tourist place.", evidence: "beneath the grey water ... his oars", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Salvo is an experienced, skilled, long-serving boatman; the setting is a working river/sea crossing.",
          },
        },
        {
          id: "mll1-u1-characters-setting-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A story opens: 'The expedition reached the summit just as the sun rose over the ice.' What is the setting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A mountain summit at sunrise" },
              { id: "b", text: "A forest in winter" },
              { id: "c", text: "A valley at sunset" },
              { id: "d", text: "A desert at noon" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Place and time words", statement: "'Summit' and 'sun rose' fix the place and time." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'summit', 'ice' and 'sun rose' mean a mountain top at sunrise — (a).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** A mountain summit at sunrise",
          },
        },
        {
          id: "mll1-u1-characters-setting-q12",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "Room Six",
            author: "Written for Akademik Space",
            text: "The hospital corridor was quiet except for the beep of machines. In room six, a girl named Aiko slept with her favourite bear tucked under one arm.",
          },
          stem: "Explain how the writer uses the setting of the hospital corridor to make the story feel calm but slightly worrying.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Setting and mood", statement: "Quiet places and small sounds can create a mixed feeling of calm and worry." }],
            steps: [
              { reasoning: "Criterion A (Analysing): 'was quiet' creates calm — the ward is peaceful, not chaotic.", evidence: "The hospital corridor was quiet", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): 'except for the beep of machines' adds a worrying note — beeping machines suggest illness and monitoring.", evidence: "the beep of machines", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the contrast between quiet and the machine beep makes the hospital feel both restful and uneasy.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The quiet gives calm while 'the beep of machines' hints at illness — calm but slightly worrying.",
          },
        },
        {
          id: "mll1-u1-characters-setting-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this story opening.",
          extract: {
            title: "The Night Bus",
            author: "Written for Akademik Space",
            text: "Every Friday, old Mr Diallo took the last night bus home from the city. He always sat by the window, watching the lights of the suburbs slide past, and he never spoke to anyone.",
          },
          parts: [
            { label: "a", prompt: "Name the main character and say two things about him.", marks: 2 },
            { label: "b", prompt: "Describe the setting — where and when does the story happen?", marks: 1 },
            { label: "c", prompt: "Explain what 'he never spoke to anyone' suggests about Mr Diallo's character.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Character and setting clues", statement: "Repeated habits and place words reveal both character and setting." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): the character is Mr Diallo, an older man who takes the last night bus home from the city on Fridays.", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Criterion A (Analysing): he sits by the window watching lights and never speaks — he is quiet, solitary and observant.", evidence: "watching the lights of the suburbs slide past, and he never spoke to anyone", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the setting is the last night bus travelling from the city to the suburbs, on a Friday night.", evidence: "the last night bus home from the city", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): never speaking suggests he is lonely, shy, tired or prefers his own company.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): it contrasts with the busy bus setting — everyone else may be chatting while he stays silent.", evidence: "he never spoke to anyone", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Mr Diallo — older, quiet, solitary, observant. (b) The last night bus from city to suburbs, Friday night. (c) He is lonely, shy or prefers silence.",
          },
        },
        {
          id: "mll1-u1-characters-setting-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In 'The puppy slept under the porch during the storm', what is the setting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Under the porch during a storm" },
              { id: "b", text: "At the beach" },
              { id: "c", text: "In a busy city" },
              { id: "d", text: "Inside a warm house" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Setting", statement: "Setting is where and when the story happens." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'under the porch' and 'during the storm' give place and time — (a).", marks: 1, markCode: "A" }],
            finalAnswer: "**(a)** Under the porch during a storm",
          },
        },
        {
          id: "mll1-u1-characters-setting-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which detail from 'the dusty workshop behind his house ... tools hung in perfect rows ... smelled of sawdust and oil' best tells you the setting?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The story is about cooking" },
              { id: "b", text: "It is a workshop behind his house" },
              { id: "c", text: "Mr Osei is tall" },
              { id: "d", text: "It happens at night" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "technique", name: "Setting detail", statement: "Objects and smells reveal where a story happens." }],
            steps: [{ reasoning: "Criterion A (Analysing): 'dusty workshop behind his house' names the place — (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** It is a workshop behind his house",
          },
        },
        {
          id: "mll1-u1-characters-setting-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this story opening.",
          extract: {
            title: "The Orchard",
            author: "Written for Akademik Space",
            text: "June had picked apples on her uncle's farm every autumn since she was six. This year the trees looked thinner, and the baskets came back lighter.",
          },
          parts: [
            { label: "a", prompt: "Who is the character and what does she do?", marks: 1 },
            { label: "b", prompt: "Describe the setting using two details.", marks: 2 },
            { label: "c", prompt: "Explain what 'the trees looked thinner, and the baskets came back lighter' suggests about the farm.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Character and setting clues", statement: "Habits show characters; changes in detail show what is happening in the setting." }],
            steps: [
              { part: "a", reasoning: "Criterion A (Analysing): June is the character — she has picked apples on her uncle's farm every autumn since she was six.", evidence: "June had picked apples on her uncle's farm", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): the setting is an apple orchard/farm in autumn.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Criterion A (Analysing): details — 'the trees looked thinner' and 'the baskets came back lighter' than before.", evidence: "the trees looked thinner, and the baskets came back lighter", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): thinner trees and lighter baskets suggest the harvest is poor — maybe disease, drought or fewer apples this year.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): 'this year' compared with past years shows something has changed for the worse on the farm.", evidence: "This year the trees looked thinner", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) June, an apple picker. (b) An autumn orchard/farm. (c) The harvest is worse this year — thinner trees, lighter baskets.",
          },
        },
      ],
    },
    {
      id: "mll1-u1-plot-retell",
      title: "Plot and retelling",
      skill: "Order the events of a story and retell them in sequence.",
      lesson: {
        sections: [
          {
            heading: "What is the plot?",
            body: "The **plot** is what happens in a story, in order. Most stories have a **beginning** (where we meet the characters), a **middle** (where the problem or adventure happens) and an **end** (where the problem is solved).",
          },
          {
            heading: "Words for story order",
            body: "Use joining words to retell events in order: **first**, **then**, **next**, **after that**, **finally**. You can also say **at the beginning**, **in the middle** and **at the end**.",
          },
          {
            heading: "Retelling",
            body: "To **retell** a story, say the main events in your own words, keeping the same order. Leave out small details and keep the important ones — who did what, and how it ended.",
          },
        ],
        keyFormulas: [
          { name: "Story shape", statement: "Beginning: meet the characters. Middle: the problem happens. End: the problem is solved." },
        ],
        workedExample: {
          problem: "Retell in order: 'Lena lost her kite. She searched the beach. She found it in a tree. She flew it again at sunset.'",
          solution: "First Lena lost her kite. Then she searched the beach. Next she found it in a tree. Finally she flew it again at sunset.",
        },
      },
      questions: [
        {
          id: "mll1-u1-plot-retell-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word tells you an event happens at the very end of a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Then" },
              { id: "b", text: "First" },
              { id: "c", text: "Suddenly" },
              { id: "d", text: "Finally" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "convention", name: "Sequencing words", statement: "'Finally' marks the last event in a sequence." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): 'finally' is the standard word for the last event, so (c) is correct.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Finally",
          },
        },
        {
          id: "mll1-u1-plot-retell-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Put these events in the correct order and write them as one retelling using 'first', 'then' and 'finally'.\n\n- Sam found a map in the attic\n- Sam followed the map to the old oak\n- Sam dug under the oak and found a box\n- Sam opened the box and found a key",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Retelling in order", statement: "Events must be retold in the order they happen in the story." },
            ],
            steps: [
              { reasoning: "Criterion B (Organizing): the logical order is: finding the map (beginning), following it (middle), digging (middle-end), opening the box (end).", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): correct retelling uses sequence words in order, e.g. 'First Sam found a map in the attic. Then he followed it to the old oak. Next he dug under the oak and found a box. Finally he opened the box and found a key.'", marks: 1, markCode: "B" },
            ],
            finalAnswer: "First Sam found a map in the attic. Then he followed the map to the old oak. Next he dug under the oak and found a box. Finally he opened the box and found a key.",
            commonErrors: ["Opening the box before digging it up — order must match the story's logic."],
          },
        },
        {
          id: "mll1-u1-plot-retell-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Read this story: \"Amina woke to find her cat missing. She called and searched the garden, but there was no sign of her. Then she heard a meow from the neighbour's shed. Amina found the cat asleep on a pile of old blankets.\" Identify the beginning, middle and end of the plot.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Story structure", statement: "Stories have a beginning (setup), a middle (problem) and an end (resolution)." },
            ],
            steps: [
              { reasoning: "Criterion A (Analysing): beginning — Amina wakes to find her cat missing (the situation is set up).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): middle — she searches and hears a meow from the shed (the problem and search).", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): end — she finds the cat asleep on the blankets (the problem is solved).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Beginning: cat missing. Middle: searching, hearing meow. End: cat found asleep in the shed.",
          },
        },
        {
          id: "mll1-u1-plot-retell-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this story.",
          extract: {
            title: "The Rain Gauge",
            author: "Written for Akademik Space",
            text: "Every morning, before school, Tom checked the rain gauge behind the school. One Friday, he noticed the water level was higher than he had ever seen it.\n\nAt break time he told his teacher, who asked the class to predict how much rain would fall by Monday. Most children guessed wrong — by Monday the gauge showed a new record, and the garden was underwater.",
          },
          parts: [
            { label: "a", prompt: "Retell the story in three sentences, in order.", marks: 2 },
            { label: "b", prompt: "Name the problem (or exciting event) in the middle of the story.", marks: 1 },
            { label: "c", prompt: "Explain why 'most children guessed wrong' is part of the end of the story rather than the beginning.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "convention", name: "Story structure", statement: "Beginning sets up characters; middle contains the problem; end resolves it." },
            ],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): correct ordered retelling includes the rain gauge check, telling the teacher, and the record rainfall by Monday.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B (Organizing): retelling is in the story's own order with sequence words or clear time order.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion A (Analysing): the middle problem is the unusually high water level / record rain that floods the garden.", evidence: "a new record, and the garden was underwater", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the guessing happens after the rain has already begun, so it belongs to the middle-end where events unfold.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): it cannot be the beginning because the story starts earlier, with Tom checking the gauge each morning.", evidence: "Every morning, before school, Tom checked the rain gauge", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Tom checks the rain gauge; he tells his teacher and the class predicts the rain; by Monday the record is broken and the garden floods. (b) The record rainfall / flooded garden. (c) It happens after the story has begun and as the events resolve.",
          },
        },
        {
          id: "mll1-u1-plot-retell-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which word would you use to start retelling the last event in a story?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Meanwhile" },
              { id: "b", text: "First" },
              { id: "c", text: "Finally" },
              { id: "d", text: "Next" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Sequencing words", statement: "'Finally' signals the last event in order." }],
            steps: [{ reasoning: "Criterion B (Organizing): 'finally' marks the end of a sequence — (c).", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** Finally",
          },
        },
        {
          id: "mll1-u1-plot-retell-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A story goes: Leo wakes up, eats breakfast, then catches the bus to school. What happened FIRST?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He ate breakfast" },
              { id: "b", text: "He woke up" },
              { id: "c", text: "He caught the bus" },
              { id: "d", text: "He went to school" },
            ],
            borrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Story order", statement: "Events are retold in the order they happen in the story." }],
            steps: [{ reasoning: "Criterion B (Organizing): waking up is the first listed event — (c).", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** He woke up",
          },
        },
        {
          id: "mll1-u1-plot-retell-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the story 'The Tortoise and the Hare', which part is the BEGINNING?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The tortoise wins the race" },
              { id: "b", text: "The hare falls asleep under a tree" },
              { id: "c", text: "The hare wakes up and runs to the finish line" },
              { id: "d", text: "The tortoise and the hare decide to race" },
            ],
            dorrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Story structure", statement: "The beginning introduces characters and sets up the problem." }],
            steps: [{ reasoning: "Criterion A (Analysing): deciding to race sets up the story — that is the beginning, (c).", marks: 1, markCode: "A" }],
            finalAnswer: "**(c)** The tortoise and the hare decide to race",
          },
        },
        {
          id: "mll1-u1-plot-retell-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "Put these events in order using 'first', 'then' and 'finally': (a) the cake burned, (b) Maya mixed the ingredients, (c) she took the cake out of the oven.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Sequencing", statement: "Retell events in the order they happen using time words." }],
            steps: [
              { reasoning: "Criterion B (Organizing): logical order — mixing ingredients first, baking/taking out next, burning last.", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): retelling with sequence words, e.g. 'First Maya mixed the ingredients. Then she took the cake out of the oven. Finally the cake burned.'", marks: 1, markCode: "B" },
            ],
            finalAnswer: "First Maya mixed the ingredients. Then she took the cake out of the oven. Finally the cake burned.",
            commonErrors: ["Putting 'the cake burned' before taking it out — the burn must come last."],
          },
        },
        {
          id: "mll1-u1-plot-retell-q9",
          difficulty: "core",
          totalMarks: 2,
          extract: {
            title: "The Empty Nest",
            author: "Written for Akademik Space",
            text: "Every spring the swallows returned to the barn. This year, only one came back, and it circled the empty nest for a long time before landing.",
          },
          stem: "Retell this in two sentences, in order, using a time word like 'first' or 'then'.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Retelling", statement: "Keep the story's order and main events; drop small details." }],
            steps: [
              { reasoning: "Criterion B (Organizing): first event — the swallows return to the barn every spring.", evidence: "the swallows returned to the barn", marks: 1, markCode: "B" },
              { reasoning: "Criterion B (Organizing): second event — this year only one returns and circles the empty nest before landing.", evidence: "only one came back, and it circled the empty nest", marks: 1, markCode: "B" },
            ],
            finalAnswer: "First, the swallows return to the barn every spring. Then, this year only one comes back and circles the empty nest before landing.",
          },
        },
        {
          id: "mll1-u1-plot-retell-q10",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Swap",
            author: "Written for Akademik Space",
            text: "Nadia traded her marble for a comic book, thinking it was a fair swap. At lunch she discovered the comic was missing its last page. By evening she had traded the marble back — but the other boy had already spent it.",
          },
          stem: "Identify the beginning, middle and end of this plot.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Story structure", statement: "Beginning sets up, middle brings the problem, end resolves or complicates it." }],
            steps: [
              { reasoning: "Criterion A (Analysing): beginning — Nadia trades her marble for the comic book.", evidence: "Nadia traded her marble for a comic book", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): middle — she discovers the comic is missing its last page; the swap turns out badly.", evidence: "the comic was missing its last page", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): end — she tries to trade back but the other boy has already spent the marble; the problem cannot be undone.", evidence: "the other boy had already spent it", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Beginning: the trade. Middle: the comic is incomplete. End: she cannot undo the swap.",
          },
        },
        {
          id: "mll1-u1-plot-retell-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A story starts with a family moving to a new town and ends with the girl making a new friend. What is the MIDDLE most likely about?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The family arriving at the airport" },
              { id: "b", text: "The girl's first day at school" },
              { id: "c", text: "The problem of settling in and being lonely" },
              { id: "d", text: "The girl packing boxes" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Story structure", statement: "The middle contains the problem that the ending resolves." }],
            steps: [{ reasoning: "Criterion A (Analysing): the new friend at the end resolves the loneliness problem — the middle is the struggle, (b).", marks: 1, markCode: "A" }],
            finalAnswer: "**(b)** The problem of settling in and being lonely",
          },
        },
        {
          id: "mll1-u1-plot-retell-q12",
          difficulty: "challenge",
          totalMarks: 3,
          extract: {
            title: "The Leak",
            author: "Written for Akademik Space",
            text: "It started as a drip. By midnight the kitchen ceiling was dark and wet, and bags of rice lined the floor. Old Mr Ferreira climbed onto a chair with a bucket while his wife called the plumber.",
          },
          stem: "Explain how this story's events build in order and why the ending is satisfying.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "convention", name: "Story structure", statement: "Events should build in a clear order; the end should answer the problem." }],
            steps: [
              { reasoning: "Criterion A (Analysing): the events escalate — a drip becomes a wet ceiling and bags of rice; the problem grows.", evidence: "It started as a drip ... dark and wet", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): the order is clear: drip → ceiling wet → protecting belongings → calling for help.", marks: 1, markCode: "A" },
              { reasoning: "Criterion A (Analysing): calling the plumber points toward a solution, so the reader expects the leak to be fixed — a satisfying direction.", evidence: "his wife called the plumber", marks: 1, markCode: "A" },
          ],
            finalAnswer: "The leak grows from drip to flood; calling the plumber sets up a solution, giving the story direction and a satisfying end.",
          },
        },
        {
          id: "mll1-u1-plot-retell-q13",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this story.",
          extract: {
            title: "The Paper Plane Contest",
            author: "Written for Akademik Space",
            text: "For the school fair, two friends decided to build the longest paper plane. Kofi folded his carefully and it looped gracefully before gliding across the hall. Aisha's plane was rougher but flew faster, straight out the door.",
          },
          parts: [
            { label: "a", prompt: "Retell the story in two sentences, in order.", marks: 2 },
            { label: "b", prompt: "What is the problem or exciting event in the middle?", marks: 1 },
            { label: "c", prompt: "Explain why the different plane styles (careful vs rough) matter to the story's meaning.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Story detail and meaning", statement: "Small details can carry a theme — here, different styles of trying." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): correct ordered retelling — Kofi's careful plane loops and glides; Aisha's rough plane flies faster and out the door.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B (Organizing): events keep the story's order.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion A (Analysing): the exciting event is Aisha's rough plane flying faster and escaping through the door.", evidence: "flew faster, straight out the door", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the two styles show different approaches — careful craft vs bold risk.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): the story hints that speed and daring can win over careful beauty — or that both have value.", evidence: "folded his carefully ... Aisha's plane was rougher but flew faster", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Two friends enter a plane contest; Kofi's careful plane glides, Aisha's rough one flies faster out the door. (b) The plane escaping through the door. (c) Careful craft vs bold risk — different ways of trying.",
          },
        },
        {
          id: "mll1-u1-plot-retell-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the three parts of a story, in order?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Beginning, middle, end" },
              { id: "b", text: "Characters, plot, setting" },
              { id: "c", text: "Ending, middle, beginning" },
              { id: "d", text: "Problem, solution, title" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Story structure", statement: "Stories have a beginning, a middle and an end." }],
            steps: [{ reasoning: "Criterion B (Organizing): beginning → middle → end — (b).", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Beginning, middle, end",
          },
        },
        {
          id: "mll1-u1-plot-retell-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which retelling of 'the boy plants a seed, waters it daily, a flower grows' is in the correct order?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "He planted a seed, then watered it daily, then a flower grew." },
              { id: "b", text: "He watered the seed, then it grew, then he planted it." },
              { id: "c", text: "A flower grew first, then everything else happened." },
              { id: "d", text: "The flower grew, then he planted a seed, then he watered it." },
            ],
            aorrectChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "convention", name: "Retelling order", statement: "Events must be retold in the order they happen." }],
            steps: [{ reasoning: "Criterion B (Organizing): plant → water → grow is the correct sequence — (c).", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** He planted a seed, then watered it daily, then a flower grew.",
          },
        },
        {
          id: "mll1-u1-plot-retell-q16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Read this story.",
          extract: {
            title: "The Long Drive",
            author: "Written for Akademik Space",
            text: "The family drove for six hours to reach the coast. The children fought over the last biscuit, argued about music, and fell asleep against the windows. When they finally arrived, the sea was shining under a huge blue sky — and nobody wanted to leave the car.",
          },
          parts: [
            { label: "a", prompt: "Retell the story in two sentences, in order.", marks: 2 },
            { label: "b", prompt: "What is the main event of the middle?", marks: 1 },
            { label: "c", prompt: "Explain what 'nobody wanted to leave the car' tells you about the family's feelings at the end.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Plot and mood", statement: "The end of a story can show how characters feel about what happened." }],
            steps: [
              { part: "a", reasoning: "Criterion B (Organizing): retelling in order — the long drive with squabbling and sleeping children; arrival at the shining sea.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Criterion B (Organizing): order matches the story.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Criterion A (Analysing): the middle event is the children's boredom and squabbling during the long drive.", evidence: "fought over the last biscuit, argued about music, and fell asleep", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): not wanting to leave the car shows they are tired, warm and content — the drive itself became the enjoyable part.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Criterion A (Analysing): it is a gentle ending — the destination matters less than the shared journey.", evidence: "the sea was shining ... nobody wanted to leave the car", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) The family drives six hours with squabbling kids; they arrive at a shining sea. (b) The children's boredom and arguments. (c) They are tired and content — the journey itself was the pleasure.",
          },
        },
      ],
    },
  ],
};
