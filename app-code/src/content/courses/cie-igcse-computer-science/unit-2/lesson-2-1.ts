import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "ciecs-u2-lesson-2-1",
  code: "2-1",
  title: "Hardware: CPU, Memory and Storage",
  goal: "I CAN describe computer components and their roles in processing and storage.",
  standards: ["Cambridge IGCSE Computer Science 0478: hardware", "0478 section 3: hardware"],
  
  vocabulary: [
    { term: "CPU", definition: "Central processing unit — executes instructions." },
    { term: "Clock speed", definition: "CPU cycles per second measured in GHz." },
    { term: "RAM", definition: "Random access memory — temporary working memory." },
    { term: "Storage", definition: "Permanent memory — HDD, SSD, optical." },
    { term: "Cache", definition: "Small fast memory inside CPU for frequently used data." },
    { term: "Bottleneck", definition: "Slowest component limiting overall performance." },
  ],
  concepts: [
    {
      id: "ciecs-u2-s1-hw",
      title: "Hardware components",
      skill: "Describe CPU, memory and storage roles at IGCSE level.",
      lesson: {
        sections: [
          {
            heading: "Processing and memory",
            body: "CPU executes instructions at clock speed (GHz). Cache stores frequently accessed data for speed. RAM holds active programs — volatile (lost on power off). More RAM = more programs can run simultaneously.",
          },
          {
            heading: "Storage and bottlenecks",
            body: "Storage (HDD/SSD) keeps files permanently. SSDs faster than HDDs (no moving parts). Performance limited by bottleneck — fast CPU + little RAM still lags with many apps.",
          },
        ],
        keyFormulas: [
          { name: "CPU", statement: "executes instructions; GHz=speed" },
          { name: "RAM", statement: "temporary active memory" },
          { name: "Storage", statement: "permanent file storage" },
        ],
        workedExample: {
          problem: "Why does adding RAM help a computer that freezes with many apps?",
          solution: "More apps need more active memory. With little RAM, system swaps to slow storage → lag. More RAM = more apps run smoothly.",
        },
      },
      questions: [
        {
          id: "ciecs-u2-hw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the CPU's main function?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Execute instructions"
                    },
                    {
                              "id": "b",
                              "text": "Store files permanently"
                    },
                    {
                              "id": "c",
                              "text": "Display images"
                    },
                    {
                              "id": "d",
                              "text": "Connect networks"
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
                              "reasoning": "CPU processes program instructions.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Executes instructions"
},
        },
        {
          id: "ciecs-u2-hw-q2",
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
          "finalAnswer": "Temporary vs permanent"
},
        },
        {
          id: "ciecs-u2-hw-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is clock speed not the only factor in computer performance?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Performance factors",
                              "statement": "Multiple components matter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "RAM, storage, GPU also affect speed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Bottleneck limits regardless of CPU speed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Workload determines which matters most.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Other components and workload matter"
},
        },
        {
          id: "ciecs-u2-hw-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define CPU, clock speed, RAM, storage, cache, bottleneck. (b) What is GHz? (c) Why is RAM volatile? (d) What is cache for? (e) Why SSD faster than HDD? (f) What limits performance most? (g) Diagnose: video editing is slow — likely causes? (h) Design specs for a gaming computer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Hardware",
                              "statement": "Components and performance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) CPU cycles per second.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Needs power; loses data on shutdown.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Fast access to frequent data.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) No moving parts; faster access.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Slowest component (bottleneck).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Valid bottleneck diagnosis.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid gaming specs.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Hardware components and performance analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciecs-u2-hw-notes",
      title: "Hardware — notes",
      summary: "CPU=brain, RAM=temp memory, storage=files, cache=fast access. Bottleneck=slowest part.",
      sections: [
        { heading: "Key idea", body: "Performance = weakest component, not strongest." },
        { heading: "RAM vs storage", body: "RAM is fast but temporary; storage is permanent but slower." },
      ],
    },
  ],
};
