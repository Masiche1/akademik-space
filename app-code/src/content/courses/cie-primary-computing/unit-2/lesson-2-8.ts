import type { Lesson } from "../../../types.ts";

export const lesson28: Lesson = {
  id: "cipc-u2-lesson-2-8",
  code: "2-8",
  title: "Stage 5 — Computer Systems: Components and Memory",
  goal: "I CAN describe computer components, storage types and how memory affects performance.",
  standards: ["Cambridge Primary Computing 0059 Stage 5: computer systems", "Cambridge Primary Computing 0059 framework strands: Computer systems"],
  stage: 5,
  vocabulary: [
    { term: "RAM", definition: "Temporary memory for running programs — cleared on shutdown." },
    { term: "Storage", definition: "Permanent memory for files — hard drive/SSD/cloud." },
    { term: "CPU", definition: "Processor executing instructions — speed measured in GHz." },
    { term: "GPU", definition: "Graphics processor for images and video." },
    { term: "Motherboard", definition: "Main circuit board connecting all components." },
    { term: "Cache", definition: "Very fast small memory near the CPU." },
  ],
  concepts: [
    {
      id: "cipc-u2-s5-sys",
      title: "Components and memory",
      skill: "Describe system components, RAM vs storage and performance factors at Stage 5 level.",
      lesson: {
        sections: [
          {
            heading: "Components",
            body: "The motherboard connects everything. CPU processes instructions; GPU handles graphics. RAM is fast temporary memory holding active programs — more RAM = more apps at once. Storage (SSD/hard drive) keeps files permanently.",
          },
          {
            heading: "Performance",
            body: "Speed depends on CPU power, RAM amount, storage speed and GPU for graphics. A fast CPU with little RAM still struggles with many apps. Cloud storage stores files online, freeing device space.",
          },
        ],
        keyFormulas: [
          { name: "RAM vs storage", statement: "temporary running memory vs permanent files" },
          { name: "Performance", statement: "CPU + RAM + storage + GPU determine speed" },
        ],
        workedExample: {
          problem: "A laptop has a fast CPU but only 4GB RAM and freezes with many tabs open. Why?",
          solution: "RAM holds all open programs; 4GB is too small → swapping to slow storage → lag. More RAM fixes it.",
        },
      },
      questions: [
        {
          id: "cipc-u2-sp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between RAM and storage?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "They are the same"
                    },
                    {
                              "id": "b",
                              "text": "RAM is temporary; storage is permanent"
                    },
                    {
                              "id": "c",
                              "text": "RAM is bigger"
                    },
                    {
                              "id": "d",
                              "text": "Storage is faster for running apps"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "RAM vs storage",
                              "statement": "Temporary vs permanent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "RAM clears on shutdown; storage keeps files.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "RAM=temp; storage=permanent"
},
        },
        {
          id: "cipc-u2-sp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two components inside a computer and their jobs.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Components",
                              "statement": "CPU, GPU, motherboard, RAM."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "e.g. CPU processes; GPU graphics.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "e.g. motherboard connects; RAM holds active data.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "e.g. CPU + GPU or motherboard"
},
        },
        {
          id: "cipc-u2-sp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does a computer slow down when too many apps are open? What two upgrades help most?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Performance",
                              "statement": "RAM limits and upgrades."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each app uses RAM; full RAM → swap to slow storage.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Upgrade RAM for more simultaneous apps.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Faster storage (SSD) or more RAM helps.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "RAM exhausted; add RAM/SSD"
},
        },
        {
          id: "cipc-u2-sp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define RAM, storage, CPU, GPU, motherboard. (b) Why is RAM 'temporary'? (c) What does the CPU do? (d) What makes a gaming PC different from an office PC? (e) What is cloud storage and its benefit? (f) A file disappears on shutdown — where was it? (g) Why does SSD feel faster than hard drive? (h) Design a spec for a video-editing computer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Systems",
                              "statement": "Components, memory, performance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All five definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Holds active programs; cleared on shutdown.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Executes/processes instructions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Stronger GPU, more RAM, faster CPU.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Online storage; access anywhere, frees space.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) RAM — not saved to storage.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) No moving parts; faster read/write.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid spec: fast CPU, 16GB+ RAM, SSD, good GPU.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Components, RAM/storage, performance factors, specs."
},
        },
        {
          id: "cipc-u2-sp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is RAM short for and what does it do?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Read And Modify — permanent storage" },
            { id: "b", text: "Random Access Media — a file type" },
            { id: "c", text: "Rapid Access Memory — the screen" },
            { id: "d", text: "Random Access Memory — holds data and programs currently in use" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "RAM", statement: "Temporary working memory." }],
            steps: [
              { reasoning: "RAM holds programs and data currently being used; it is temporary.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Random Access Memory — working memory",
          },
        },
        {
          id: "cipc-u2-sp-q6",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two components inside a computer and one job of each.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Components", statement: "CPU, RAM, storage, motherboard, GPU." }],
            steps: [
              { reasoning: "Two valid components: CPU, RAM, storage, GPU, motherboard.", marks: 1, markCode: "M" },
              { reasoning: "Matching jobs: CPU processes; RAM holds data; storage keeps files.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. CPU processes; RAM holds active data.",
          },
        },
        {
          id: "cipc-u2-sp-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "A computer has 8 GB RAM and 500 GB storage. How many GB of storage does it have?",
          response: { type: "numeric", parts: [{ label: "a", answer: 500 }] },
          markscheme: {
            principles: [{ kind: "definition", name: "Storage", statement: "Permanent capacity." }],
            steps: [
              { reasoning: "Storage is the 500 GB part; RAM is the 8 GB part.", marks: 1, markCode: "M" },
              { reasoning: "500 GB of storage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "500",
          },
        },
        {
          id: "cipc-u2-sp-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does the CPU do?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Stores files permanently" },
            { id: "b", text: "Displays images" },
            { id: "c", text: "Connects to the internet" },
            { id: "d", text: "Executes program instructions — the processor" },
          ], correctChoiceId: "d" },
          markscheme: {
            principles: [{ kind: "definition", name: "CPU", statement: "Central processor." }],
            steps: [
              { reasoning: "The CPU executes instructions and processes data.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Executes program instructions",
          },
        },
        {
          id: "cipc-u2-sp-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why does a computer slow down when too many apps are open? What two upgrades help most?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Performance", statement: "RAM limits running apps." }],
            steps: [
              { reasoning: "RAM fills up — the computer swaps data to slow storage.", marks: 1, markCode: "M" },
              { reasoning: "Upgrade 1: more RAM.", marks: 1, markCode: "M" },
              { reasoning: "Upgrade 2: faster storage (SSD) or faster CPU.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "RAM fills up; add RAM and/or SSD.",
          },
        },
        {
          id: "cipc-u2-sp-q10",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "What is cloud storage and what is one benefit over a local hard drive?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Files stored on internet servers — accessible anywhere" },
            { id: "b", text: "A type of printer" },
            { id: "c", text: "A faster RAM type" },
            { id: "d", text: "Files stored inside the CPU" },
          ], correctChoiceId: "a" },
          markscheme: {
            principles: [{ kind: "definition", name: "Cloud storage", statement: "Remote file storage." }],
            steps: [
              { reasoning: "Cloud storage keeps files on remote servers.", marks: 1, markCode: "M" },
              { reasoning: "Benefit: access from any device with internet; backup safety.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Remote servers — access anywhere",
          },
        },
        {
          id: "cipc-u2-sp-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A file you were editing disappears after the computer shuts down. Where was it stored and why did it vanish?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "RAM vs storage", statement: "RAM is temporary." }],
            steps: [
              { reasoning: "It was in RAM (memory), not saved to storage.", marks: 1, markCode: "M" },
              { reasoning: "RAM is temporary — its contents are lost on shutdown.", marks: 1, markCode: "M" },
              { reasoning: "Saving writes the file to permanent storage.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "It was in RAM; unsaved work is lost on shutdown.",
          },
        },
        {
          id: "cipc-u2-sp-q12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the motherboard? What is its job?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "definition", name: "Motherboard", statement: "Main circuit board." }],
            steps: [
              { reasoning: "Motherboard = the main circuit board inside the computer.", marks: 1, markCode: "M" },
              { reasoning: "It connects all components (CPU, RAM, storage) together.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Main board connecting all components.",
          },
        },
        {
          id: "cipc-u2-sp-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does an SSD feel faster than a traditional hard disk drive (HDD)?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "SSD vs HDD", statement: "No moving parts = faster access." }],
            steps: [
              { reasoning: "SSD has no moving parts — data access is near-instant.", marks: 1, markCode: "M" },
              { reasoning: "HDD uses a spinning disk and moving arm — slower seek times.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "SSD has no moving parts — faster access.",
          },
        },
        {
          id: "cipc-u2-sp-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "What makes a gaming PC different from an office PC? Name two hardware differences.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Gaming vs office specs", statement: "GPU and cooling matter for games." }],
            steps: [
              { reasoning: "Gaming PC has a dedicated GPU for graphics.", marks: 1, markCode: "M" },
              { reasoning: "More/faster RAM and better cooling for sustained performance.", marks: 1, markCode: "M" },
              { reasoning: "Two valid hardware differences given.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "e.g. dedicated GPU; more RAM/faster CPU.",
          },
        },
        {
          id: "cipc-u2-sp-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "You have £200 to upgrade a slow laptop. RAM upgrade costs £40, SSD upgrade costs £80, new CPU costs £120. Which TWO upgrades give the best improvement for the money? Justify.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "skill", name: "Upgrade decisions", statement: "RAM + SSD biggest impact." }],
            steps: [
              { reasoning: "Choose RAM (£40) and SSD (£80) = £120, within budget.", marks: 1, markCode: "M" },
              { reasoning: "RAM reduces swapping; SSD speeds boot/load times — biggest perceived gain.", marks: 1, markCode: "M" },
              { reasoning: "CPU alone costs most and gives less benefit for general slowness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "RAM + SSD — best value (£120 total).",
          },
        },
        {
          id: "cipc-u2-sp-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define RAM, storage, CPU, GPU, motherboard. (b) Why is RAM 'temporary'? (c) What does the CPU do? (d) What makes a gaming PC different from an office PC? (e) What is cloud storage and its benefit? (f) A file disappears on shutdown — where was it? (g) Why does SSD feel faster than hard drive? (h) Design a spec for a video-editing computer.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "technique", name: "Systems", statement: "Components, memory, performance, cloud." }],
            steps: [
              { reasoning: "(a) RAM=working memory; storage=permanent; CPU=processor; GPU=graphics; motherboard=main board.", marks: 1, markCode: "M" },
              { reasoning: "(b) Contents lost on power off.", marks: 1, markCode: "M" },
              { reasoning: "(c) Executes instructions/processes data.", marks: 1, markCode: "M" },
              { reasoning: "(d) Dedicated GPU, more RAM, better cooling.", marks: 1, markCode: "M" },
              { reasoning: "(e) Remote file storage; access anywhere + backup.", marks: 1, markCode: "M" },
              { reasoning: "(f) In RAM — unsaved, lost on shutdown.", marks: 1, markCode: "M" },
              { reasoning: "(g) No moving parts — faster access.", marks: 1, markCode: "M" },
              { reasoning: "(h) Fast CPU, lots of RAM, SSD, strong GPU.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Components, RAM temporary, CPU, gaming specs, cloud, lost file, SSD speed, video-editing spec.",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cipc-u2-sp-notes",
      title: "Systems — notes",
      summary: "RAM=temp running memory; storage=permanent files. CPU+GPU+RAM+storage determine performance.",
      sections: [
        { heading: "Key idea", body: "More RAM = more apps at once; SSD > hard drive for speed." },
        { heading: "Cloud", body: "Online storage frees device space and enables access anywhere." },
      ],
    },
  ],
};
