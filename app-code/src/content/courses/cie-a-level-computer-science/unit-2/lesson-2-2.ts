import type { Lesson } from "../../../types.ts";

export const lesson132: Lesson = {
  id: "ciealc-u2-lesson-2-2",
  code: "2-2",
  title: "Memory Hierarchy and Storage",
  goal: "I CAN describe the memory hierarchy and compare storage technologies.",
  standards: [
    "Cambridge A Level Computer Science 9618: hardware",
    "9618: memory/storage",
  ],

  vocabulary: [
    {
      term: "Memory hierarchy",
      definition: "Levels of memory from fastest/smallest to slowest/largest.",
    },
    {
      term: "Cache",
      definition: "Small fast memory inside CPU for frequent data.",
    },
    {
      term: "RAM",
      definition: "Random access memory — temporary working memory.",
    },
    {
      term: "Virtual memory",
      definition: "Using disk as extra RAM when physical RAM full.",
    },
    {
      term: "HDD",
      definition: "Hard disk drive — magnetic storage with moving parts.",
    },
    {
      term: "SSD",
      definition: "Solid-state drive — flash memory, no moving parts.",
    },
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
          {
            name: "Speed/size trade-off",
            statement: "faster = smaller = costlier",
          },
        ],
        workedExample: {
          problem:
            "Why does adding RAM help a computer that freezes with many apps?",
          solution:
            "More apps need more active memory. With little RAM, system swaps to slow storage → lag. More RAM = more apps run smoothly.",
        },
      },
      questions: [
        {
          id: "ciealc-u2-mem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the memory hierarchy?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of software",
              },
              {
                id: "b",
                text: "A programming language",
              },
              {
                id: "c",
                text: "Levels from fastest/smallest to slowest/largest",
              },
              {
                id: "d",
                text: "A network protocol",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Memory hierarchy",
                statement: "Speed/size levels.",
              },
            ],
            steps: [
              {
                reasoning: "Hierarchy orders memory by speed and size.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Fastest/smallest to slowest/largest",
          },
        },
        {
          id: "ciealc-u2-mem-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is virtual memory and when is it used?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Virtual memory",
                statement: "Disk as extra RAM.",
              },
            ],
            steps: [
              {
                reasoning: "Virtual memory = using disk space as extra RAM.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Used when physical RAM is full.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Disk as extra RAM",
          },
        },
        {
          id: "ciealc-u2-mem-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare HDD and SSD in terms of speed, cost and durability.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Storage types",
                statement: "HDD vs SSD.",
              },
            ],
            steps: [
              {
                reasoning:
                  "HDD: slower, cheaper, larger capacity, moving parts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "SSD: faster, costlier, smaller capacity, no moving parts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "SSD more durable (no mechanical failure).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Speed/cost/durability comparison",
          },
        },
        {
          id: "ciealc-u2-mem-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define memory hierarchy, cache, RAM, virtual memory, HDD, SSD. (b) What is the hierarchy order? (c) Why is cache faster than RAM? (d) What is virtual memory? (e) When is virtual memory used? (f) Compare HDD vs SSD speed. (g) Compare HDD vs SSD cost. (h) Design a storage strategy for a school server.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Memory/storage",
                statement: "Hierarchy, types, comparison.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) Registers→cache→RAM→storage.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Smaller, closer to CPU, faster access.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Disk as extra RAM.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) When physical RAM full.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) SSD faster (no moving parts).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) HDD cheaper per GB.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Valid storage strategy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Memory hierarchy and storage types.",
          },
        },
        {
          id: "ciealc-u2-mem-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which level of the memory hierarchy is the fastest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cloud storage" },
              { id: "b", text: "RAM" },
              { id: "c", text: "Registers" },
              { id: "d", text: "Hard disk drive" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Memory hierarchy",
                statement:
                  "Registers are fastest, smallest and most expensive.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Registers sit at the top of the hierarchy and are the fastest.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Registers",
          },
        },
        {
          id: "ciealc-u2-mem-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A computer has 8 GB of RAM and applications are currently using 6 GB. How many GB of RAM remain available? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 2 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "RAM usage",
                statement: "Free RAM = total − used.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "8 − 6 = 2 GB.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "2 GB",
          },
        },
        {
          id: "ciealc-u2-mem-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "When physical RAM is full, what does virtual memory use as extra working memory?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unused cache memory" },
              { id: "b", text: "Additional registers in the CPU" },
              { id: "c", text: "Space on the hard disk drive or SSD" },
              { id: "d", text: "The graphics card memory only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Virtual memory",
                statement: "Disk space used as overflow RAM.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Virtual memory swaps inactive data to disk storage.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Disk storage",
          },
        },
        {
          id: "ciealc-u2-mem-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "A 1 TB hard disk drive costs $50 and a 1 TB solid-state drive costs $100. Calculate the percentage by which the SSD is more expensive. Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Percentage difference",
                statement: "(Difference ÷ original) × 100.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "(100 − 50) ÷ 50 × 100 = 100%.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "100%",
          },
        },
        {
          id: "ciealc-u2-mem-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain what virtual memory is and why heavy use of it can slow a computer down.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Virtual memory",
                statement: "Disk used as extra RAM.",
              },
            ],
            steps: [
              {
                reasoning:
                  "When RAM is full, inactive data is swapped to disk space acting as extra memory.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Disk access is far slower than RAM, so frequent swapping causes delays (thrashing).",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Disk overflow memory; slower than RAM",
          },
        },
        {
          id: "ciealc-u2-mem-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which statement about a hard disk drive (HDD) is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is always faster than an SSD" },
              { id: "b", text: "It has no moving parts" },
              {
                id: "c",
                text: "It stores data magnetically on spinning platters with moving read/write heads",
              },
              { id: "d", text: "It loses all data when power is removed" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "HDD",
                statement: "Magnetic platters with moving heads.",
              },
            ],
            steps: [
              {
                reasoning:
                  "HDDs use magnetic storage and mechanical read/write heads.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Magnetic platters, moving heads",
          },
        },
        {
          id: "ciealc-u2-mem-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A computer has 4 GB of RAM. Three programs need 2 GB, 1.5 GB and 1 GB of memory respectively. How many GB of memory must be accommodated using virtual memory? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 0.5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Virtual memory need",
                statement: "Overflow = total required − physical RAM.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Total needed = 4.5 GB; overflow = 4.5 − 4 = 0.5 GB.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "0.5 GB",
          },
        },
        {
          id: "ciealc-u2-mem-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "Compare an HDD and an SSD in terms of speed and durability.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "HDD vs SSD",
                statement: "SSD faster and more durable; HDD cheaper.",
              },
            ],
            steps: [
              {
                reasoning:
                  "SSD has no moving parts so it is much faster for reads and writes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "SSD is more durable against shock; HDD's moving parts make it more fragile.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "SSD faster and more durable than HDD",
          },
        },
        {
          id: "ciealc-u2-mem-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is cache memory faster than RAM?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It is smaller, physically closer to the CPU and built from faster technology",
              },
              { id: "b", text: "It uses magnetic platters" },
              { id: "c", text: "It is non-volatile storage" },
              { id: "d", text: "It has a much larger capacity than RAM" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cache speed",
                statement: "Smaller and closer to CPU means faster access.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Cache is small, fast and located inside/near the CPU.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Smaller, closer, faster technology",
          },
        },
        {
          id: "ciealc-u2-mem-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A 500 MB file is read from an HDD at 100 MB/s. How many seconds does the read take? Give your answer as a number.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Transfer time",
                statement: "Time = size ÷ speed.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "500 ÷ 100 = 5 seconds.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "5 s",
          },
        },
        {
          id: "ciealc-u2-mem-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A photographer needs to back up 2 TB of photos and wants fast access to recent files while keeping older archives safe. Evaluate whether an SSD or HDD (or a combination) is the better choice, justifying your answer.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Storage choice",
                statement: "Match storage to speed, capacity and cost needs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "SSD suits frequently accessed recent files because of its speed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "HDD offers cheaper large capacity for older archives.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "A hybrid approach balances cost and performance.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "SSD for active files; HDD for archives",
          },
        },
        {
          id: "ciealc-u2-mem-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which type of memory retains its contents when the power is switched off?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Registers" },
              { id: "b", text: "RAM" },
              { id: "c", text: "Cache memory" },
              { id: "d", text: "Solid-state drive (SSD)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Volatile vs non-volatile",
                statement: "Storage retains data without power.",
              },
            ],
            steps: [
              {
                reasoning:
                  "SSD (and HDD) are non-volatile; RAM, cache and registers are volatile.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** SSD",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealc-u2-mem-notes",
      title: "Memory — notes",
      summary:
        "Hierarchy: registers→cache→RAM→storage. Faster=smaller=costlier. SSD faster than HDD.",
      sections: [
        {
          heading: "Key idea",
          body: "CPU accesses fastest memory first — hierarchy optimises speed.",
        },
        {
          heading: "Virtual memory",
          body: "Disk as overflow RAM — slower but prevents crashes.",
        },
      ],
    },
  ],
};
