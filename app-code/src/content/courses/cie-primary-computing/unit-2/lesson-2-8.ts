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
                              "text": "RAM is temporary; storage is permanent"
                    },
                    {
                              "id": "b",
                              "text": "RAM is bigger"
                    },
                    {
                              "id": "c",
                              "text": "They are the same"
                    },
                    {
                              "id": "d",
                              "text": "Storage is faster for running apps"
                    }
          ],
          "correctChoiceId": "a"
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
