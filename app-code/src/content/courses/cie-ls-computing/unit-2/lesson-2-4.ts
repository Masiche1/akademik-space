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
                              "text": "Executes instructions"
                    },
                    {
                              "id": "b",
                              "text": "Stores files permanently"
                    },
                    {
                              "id": "c",
                              "text": "Displays images"
                    },
                    {
                              "id": "d",
                              "text": "Connects networks"
                    }
          ],
          "correctChoiceId": "a"
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
