import type { Lesson } from "../../../types.ts";

export const lesson24: Lesson = {
  id: "cils-c-u2-lesson-2-4",
  code: "2-4",
  title: "Stage 8 — Computer Systems: Components and Performance",
  goal: "I CAN describe system components and analyse factors affecting performance.",
  standards: ["Cambridge Lower Secondary Computing 0860 Stage 8: computer systems", "Cambridge Lower Secondary Computing 0860 strand: Computer systems"],
  stage: 8,
  vocabulary: [
    { term: "CPU", definition: "Central processing unit — executes instructions." },
    { term: "Clock speed", definition: "CPU cycles per second — GHz." },
    { term: "RAM", definition: "Temporary memory for active programs." },
    { term: "Storage", definition: "Permanent memory — SSD/HDD/cloud." },
    { term: "GPU", definition: "Graphics processing unit for images/video." },
    { term: "Bottleneck", definition: "The slowest component limiting performance." },
  ],
  concepts: [
    {
      id: "cils-c-u2-s4-sys",
      title: "Components and performance",
      skill: "Analyse hardware factors affecting speed at Stage 8 level.",
      lesson: {
        sections: [
          {
            heading: "System components",
            body: "CPU executes instructions (clock speed in GHz). RAM holds active programs — more RAM = more apps. Storage keeps files permanently (SSD faster than HDD). GPU handles graphics. Motherboard connects all.",
          },
          {
            heading: "Bottlenecks",
            body: "Performance limited by the slowest part: fast CPU + little RAM still lags with many apps. Match components to workload — gaming needs GPU+RAM; office work needs CPU+SSD.",
          },
        ],
        keyFormulas: [
          { name: "CPU", statement: "executes instructions; GHz = speed" },
          { name: "RAM", statement: "active programs memory" },
          { name: "Bottleneck", statement: "slowest component limits all" },
        ],
        workedExample: {
          problem: "Gaming PC: fast CPU but 8GB RAM, integrated GPU. Why does it stutter in games?",
          solution: "GPU too weak for graphics + RAM too small for game assets. CPU isn't the bottleneck — GPU and RAM are.",
        },
      },
      questions: [
        {
          id: "cils-c-u2-sp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does the CPU do?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Connects networks"
                    },
                    {
                              "id": "b",
                              "text": "Displays images"
                    },
                    {
                              "id": "c",
                              "text": "Executes instructions"
                    },
                    {
                              "id": "d",
                              "text": "Stores files permanently"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "CPU",
                              "statement": "Instruction executor."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CPU processes/executes program instructions.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Executes instructions"
},
        },
        {
          id: "cils-c-u2-sp-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between RAM and storage?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "RAM vs storage",
                              "statement": "Temp vs permanent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "RAM = temporary active memory.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Storage = permanent file storage.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Temp vs permanent"
},
        },
        {
          id: "cils-c-u2-sp-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A computer has fast CPU but only 4GB RAM. It freezes with many browser tabs. Explain the bottleneck.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Bottlenecks",
                              "statement": "Slowest part limits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each tab needs RAM; 4GB exhausted.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "System swaps to slow storage → lag.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "RAM is bottleneck; CPU fine.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "RAM bottleneck"
},
        },
        {
          id: "cils-c-u2-sp-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define CPU, clock speed, RAM, storage, GPU, bottleneck. (b) Why is clock speed not the only speed factor? (c) What is GHz? (d) Why SSD faster than HDD? (e) What workload needs most GPU? (f) What workload needs most RAM? (g) Diagnose: video editing is slow — likely causes? (h) Design specs for a school computer lab.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Systems",
                              "statement": "Components, bottlenecks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) RAM/storage/GPU also matter.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) CPU cycles per second.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) No moving parts; faster access.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Gaming/video rendering.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Gaming/video — many simultaneous processes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Valid bottleneck diagnosis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid lab spec design.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "System components and performance analysis."
},
        },
        {
          id: "cils-c-u2-sp-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main role of RAM?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Connects to the internet"
                    },
                    {
                              "id": "b",
                              "text": "Stores files permanently"
                    },
                    {
                              "id": "c",
                              "text": "Holds programs and data currently in use"
                    },
                    {
                              "id": "d",
                              "text": "Renders graphics"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "RAM",
                              "statement": "Temporary working memory."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "RAM holds active programs; cleared on shutdown.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Active program memory"
},
        },
        {
          id: "cils-c-u2-sp-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A PC has 8 GB of RAM. Three apps each need 2 GB. How many GB of RAM remain?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "RAM capacity",
                              "statement": "Total minus used."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "8 - (2+2+2) = 2 GB.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "cils-c-u2-sp-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "A file loads in 10 seconds on an HDD. An SSD is 4 times faster. How many seconds does the SSD take?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2.5 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Storage speed",
                              "statement": "SSD faster than HDD."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "10 / 4 = 2.5 seconds.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "2.5"
},
        },
        {
          id: "cils-c-u2-sp-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "A computer has a very fast CPU but only 4 GB RAM. It freezes when many browser tabs are open. Explain the bottleneck.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Bottlenecks",
                              "statement": "Slowest part limits performance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Each tab needs RAM; 4 GB is exhausted.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "System swaps to slow storage → lag.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "RAM is the bottleneck; CPU is fine.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "RAM bottleneck"
},
        },
        {
          id: "cils-c-u2-sp-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which component does most of the work when rendering a video game?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Monitor"
                    },
                    {
                              "id": "b",
                              "text": "GPU"
                    },
                    {
                              "id": "c",
                              "text": "SSD"
                    },
                    {
                              "id": "d",
                              "text": "Keyboard"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "GPU",
                              "statement": "Graphics processing unit."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "GPU handles images and video — critical for games.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "GPU"
},
        },
        {
          id: "cils-c-u2-sp-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Each of 4 apps needs 2 GB of RAM. The PC has 8 GB. How many apps can run without the system swapping to storage?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 4 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "RAM capacity",
                              "statement": "8 / 2 = 4 apps."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "4 × 2 = 8 GB exactly — all 4 fit.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "4"
},
        },
        {
          id: "cils-c-u2-sp-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "What is the motherboard's role in a computer system?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Connects all components together"
                    },
                    {
                              "id": "b",
                              "text": "Displays images"
                    },
                    {
                              "id": "c",
                              "text": "Processes instructions"
                    },
                    {
                              "id": "d",
                              "text": "Stores the operating system"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Motherboard",
                              "statement": "Connects all components."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Motherboard links CPU, RAM, storage and GPU.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Connects components"
},
        },
        {
          id: "cils-c-u2-sp-q12",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "(a) Define CPU, clock speed, RAM, storage, GPU, bottleneck. (b) Why is clock speed not the only factor in performance? (c) What does GHz measure? (d) Why is an SSD faster than an HDD? (e) Video editing is very slow on a PC — list two likely hardware causes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Systems",
                              "statement": "Components, bottlenecks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) RAM, storage and GPU also limit performance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) CPU cycles per second.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) No moving parts; faster access times.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) e.g. too little RAM for video files; weak GPU; slow HDD.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Components and bottlenecks."
},
        },
        {
          id: "cils-c-u2-sp-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which component stores files permanently even when the computer is off?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "GPU cache"
                    },
                    {
                              "id": "b",
                              "text": "Storage (SSD/HDD)"
                    },
                    {
                              "id": "c",
                              "text": "RAM"
                    },
                    {
                              "id": "d",
                              "text": "CPU"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Storage",
                              "statement": "Permanent memory."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Storage keeps data when power is off.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Storage"
},
        },
        {
          id: "cils-c-u2-sp-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 4 GHz CPU is compared to a 2 GHz CPU of the same model. How many times faster is the clock speed?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Clock speed",
                              "statement": "GHz = cycles per second."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "4 / 2 = 2 times.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "cils-c-u2-sp-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a 'bottleneck' in a computer system?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A type of cable"
                    },
                    {
                              "id": "b",
                              "text": "The slowest component, which limits overall performance"
                    },
                    {
                              "id": "c",
                              "text": "A software update"
                    },
                    {
                              "id": "d",
                              "text": "The fastest component"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Bottleneck",
                              "statement": "Slowest part limits all."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Performance is limited by the weakest component.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Slowest component"
},
        },
        {
          id: "cils-c-u2-sp-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "(a) Define CPU, RAM, storage, GPU, clock speed, bottleneck. (b) Match these to the component that matters most: office work, gaming, video editing. (c) Why does adding RAM help a lagging computer? (d) Why might a fast CPU still feel slow? (e) Compare SSD and HDD for a school laptop. (f) Recommend minimum specs for a computer lab used for programming.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Systems",
                              "statement": "Components, bottlenecks, matching."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions correct.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Office→CPU+SSD; gaming→GPU+RAM; video→RAM+GPU+SSD.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) More room for active programs → less swapping.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Other components (RAM/storage/GPU) may bottleneck.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) SSD faster, no moving parts, more durable; HDD cheaper, slower.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Valid spec recommendation for programming lab.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Components, matching, recommendations."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cils-c-u2-sp-notes",
      title: "Systems — notes",
      summary: "CPU=brain, RAM=active memory, storage=files, GPU=graphics. Bottleneck=slowest part.",
      sections: [
        { heading: "Key idea", body: "Performance = weakest component, not strongest." },
        { heading: "Match", body: "Gaming→GPU+RAM; office→CPU+SSD." },
      ],
    },
  ],
};
