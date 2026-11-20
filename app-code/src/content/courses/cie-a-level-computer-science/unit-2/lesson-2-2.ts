import type { Lesson } from "../../../types.ts";

export const lesson132: Lesson = {
  id: "ciealc-u2-lesson-2-2",
  code: "2-2",
  title: "Memory Hierarchy and Storage",
  goal: "I CAN describe the memory hierarchy and compare storage technologies.",
  standards: ["Cambridge A Level Computer Science 9618: hardware", "9618: memory/storage"],
  
  vocabulary: [
    { term: "Memory hierarchy", definition: "Levels of memory from fastest/smallest to slowest/largest." },
    { term: "Cache", definition: "Small fast memory inside CPU for frequent data." },
    { term: "RAM", definition: "Random access memory — temporary working memory." },
    { term: "Virtual memory", definition: "Using disk as extra RAM when physical RAM full." },
    { term: "HDD", definition: "Hard disk drive — magnetic storage with moving parts." },
    { term: "SSD", definition: "Solid-state drive — flash memory, no moving parts." },
  ],
  concepts: [
    {
      id: "ciealc-u2-s2-mem",
      title: "Memory hierarchy",
      skill: "Describe memory levels and storage types at A Level.",
      lesson: {
        sections: [
          {
            heading: "Memory hierarchy",
            body: "Registers (fastest, smallest) → cache (fast, small) → RAM (medium speed, larger) → storage (slowest, largest). CPU accesses registers first, then cache, then RAM, then storage. Faster = smaller = more expensive.",
          },
          {
            heading: "Storage types",
            body: "HDD: magnetic platters, moving read/write heads, slower, cheaper, larger capacity. SSD: flash memory, no moving parts, faster, more expensive, less durable. Cloud storage: remote servers, accessible anywhere.",
          },
        ],
        keyFormulas: [
          { name: "Hierarchy", statement: "registers→cache→RAM→storage" },
          { name: "Speed/size trade-off", statement: "faster = smaller = costlier" },
        ],
        workedExample: {
          problem: "Why does adding RAM help a computer that freezes with many apps?",
          solution: "More apps need more active memory. With little RAM, system swaps to slow storage → lag. More RAM = more apps run smoothly.",
        },
      },
      questions: [
        {
          id: "ciealc-u2-mem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the memory hierarchy?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Levels from fastest/smallest to slowest/largest"
                    },
                    {
                              "id": "b",
                              "text": "A type of software"
                    },
                    {
                              "id": "c",
                              "text": "A network protocol"
                    },
                    {
                              "id": "d",
                              "text": "A programming language"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Memory hierarchy",
                              "statement": "Speed/size levels."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hierarchy orders memory by speed and size.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Fastest/smallest to slowest/largest"
},
        },
        {
          id: "ciealc-u2-mem-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is virtual memory and when is it used?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Virtual memory",
                              "statement": "Disk as extra RAM."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Virtual memory = using disk space as extra RAM.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Used when physical RAM is full.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Disk as extra RAM"
},
        },
        {
          id: "ciealc-u2-mem-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare HDD and SSD in terms of speed, cost and durability.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Storage types",
                              "statement": "HDD vs SSD."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "HDD: slower, cheaper, larger capacity, moving parts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "SSD: faster, costlier, smaller capacity, no moving parts.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "SSD more durable (no mechanical failure).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Speed/cost/durability comparison"
},
        },
        {
          id: "ciealc-u2-mem-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define memory hierarchy, cache, RAM, virtual memory, HDD, SSD. (b) What is the hierarchy order? (c) Why is cache faster than RAM? (d) What is virtual memory? (e) When is virtual memory used? (f) Compare HDD vs SSD speed. (g) Compare HDD vs SSD cost. (h) Design a storage strategy for a school server.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Memory/storage",
                              "statement": "Hierarchy, types, comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Registers→cache→RAM→storage.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Smaller, closer to CPU, faster access.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Disk as extra RAM.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) When physical RAM full.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) SSD faster (no moving parts).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) HDD cheaper per GB.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Valid storage strategy.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Memory hierarchy and storage types."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u2-mem-notes",
      title: "Memory — notes",
      summary: "Hierarchy: registers→cache→RAM→storage. Faster=smaller=costlier. SSD faster than HDD.",
      sections: [
        { heading: "Key idea", body: "CPU accesses fastest memory first — hierarchy optimises speed." },
        { heading: "Virtual memory", body: "Disk as overflow RAM — slower but prevents crashes." },
      ],
    },
  ],
};
