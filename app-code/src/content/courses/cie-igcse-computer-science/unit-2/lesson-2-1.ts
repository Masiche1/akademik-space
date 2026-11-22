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
                              "text": "Store files permanently"
                    },
                    {
                              "id": "b",
                              "text": "Display images"
                    },
                    {
                              "id": "c",
                              "text": "Execute instructions"
                    },
                    {
                              "id": "d",
                              "text": "Connect networks"
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
        {
          id: "ciecs-u2-hw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens to the contents of RAM when the computer is switched off?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are lost because RAM is volatile" },
              { id: "b", text: "They are automatically backed up" },
              { id: "c", text: "They are moved to the CPU cache" },
              { id: "d", text: "They are kept permanently" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Volatile memory", statement: "RAM loses its contents without power." },
            ],
            steps: [
              { reasoning: "RAM is temporary working memory and does not retain data when powered off.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Contents are lost",
          },
        },
        {
          id: "ciecs-u2-hw-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is an SSD usually faster than an HDD for loading programs?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It uses more power" },
              { id: "b", text: "It has moving mechanical parts" },
              { id: "c", text: "It has no moving parts and faster access times" },
              { id: "d", text: "It stores less data overall" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "comparison", name: "SSD vs HDD", statement: "SSD has no moving parts and faster access." },
            ],
            steps: [
              { reasoning: "SSDs access data electronically without mechanical delays.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(c)** No moving parts and faster access",
          },
        },
        {
          id: "ciecs-u2-hw-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is the main purpose of CPU cache?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To display images on screen" },
              { id: "b", text: "To store files permanently" },
              { id: "c", text: "To provide fast access to frequently used data" },
              { id: "d", text: "To connect the computer to a network" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cache", statement: "Small fast memory for frequently used data." },
            ],
            steps: [
              { reasoning: "Cache reduces waiting time by keeping frequently accessed data close to the CPU.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Fast access to frequently used data",
          },
        },
        {
          id: "ciecs-u2-hw-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What is a bottleneck in computer performance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A type of network cable" },
              { id: "b", text: "A backup storage device" },
              { id: "c", text: "The slowest component limiting overall performance" },
              { id: "d", text: "The fastest component in the system" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bottleneck", statement: "Slowest part limiting system speed." },
            ],
            steps: [
              { reasoning: "A bottleneck restricts performance even if other components are fast.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Slowest component limiting performance",
          },
        },
        {
          id: "ciecs-u2-hw-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why might a computer with a high clock speed still perform slowly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Other components such as RAM, storage or the task itself can limit performance" },
              { id: "b", text: "Clock speed is the only factor that matters" },
              { id: "c", text: "A faster CPU always removes all bottlenecks" },
              { id: "d", text: "RAM cannot affect program speed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Performance factors", statement: "CPU speed is only one part of system performance." },
            ],
            steps: [
              { reasoning: "Bottlenecks in memory, storage or workload can limit performance despite a fast CPU.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(b)** Other components can limit performance",
          },
        },
        {
          id: "ciecs-u2-hw-q10",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A computer becomes slow when many applications are open. Which upgrade would most directly help?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Using a longer keyboard cable" },
              { id: "b", text: "Increasing RAM capacity" },
              { id: "c", text: "Increasing monitor brightness" },
              { id: "d", text: "Changing the desktop wallpaper" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Multitasking", statement: "More active programs need more RAM." },
            ],
            steps: [
              { reasoning: "More RAM lets more programs stay in active memory without swapping to storage.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Increasing RAM capacity",
          },
        },
        {
          id: "ciecs-u2-hw-q11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A $2.4$ GHz CPU runs for $0.5$ seconds. How many cycles does it complete?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1200000000 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clock cycles", statement: "Cycles = clock speed × time." },
            ],
            steps: [
              { reasoning: "2.4 billion cycles per second * 0.5 seconds = 1,200,000,000 cycles.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "1200000000",
          },
        },
        {
          id: "ciecs-u2-hw-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A computer has $8$ GB of RAM. The operating system uses $1.5$ GB and three apps use $2$ GB, $2.5$ GB and $1$ GB. How many GB of RAM remain unused?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1 }],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "RAM allocation", statement: "Remaining RAM = total - used." },
            ],
            steps: [
              { reasoning: "Used = 1.5 + 2 + 2.5 + 1 = 7 GB, so 8 - 7 = 1 GB remains.", marks: 1, markCode: "A", part: "a" },
            ],
            finalAnswer: "1",
          },
        },
        {
          id: "ciecs-u2-hw-q13",
          difficulty: "core",
          totalMarks: 2,
          stem: "Using $1$ GB = $1,000$ MB: (a) How many MB are in a $500$ GB SSD? (b) If $120$ GB is used, how many MB remain free?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 500000 },
              { label: "b", answer: 380000 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Storage units", statement: "Convert GB to MB before comparing usage." },
            ],
            steps: [
              { reasoning: "500 GB = 500000 MB.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Remaining = (500 - 120) * 1000 = 380000 MB.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 500000; (b) 380000",
          },
        },
        {
          id: "ciecs-u2-hw-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Two CPUs have clock speeds of $3.2$ GHz and $2.8$ GHz. (a) What is the difference in clock speed in GHz? (b) How many more cycles per second does the faster CPU complete?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.4 },
              { label: "b", answer: 400000000 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Clock speed", statement: "1 GHz = 1 billion cycles per second." },
            ],
            steps: [
              { reasoning: "3.2 - 2.8 = 0.4 GHz.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "0.4 GHz = 400,000,000 cycles per second.", marks: 1, markCode: "A", part: "b" },
            ],
            finalAnswer: "(a) 0.4; (b) 400000000",
          },
        },
        {
          id: "ciecs-u2-hw-q15",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A computer has $8$ GB RAM. The OS uses $1$ GB, a browser uses $2$ GB, a game uses $4$ GB and a video editor needs $3$ GB. (a) What is the total memory demand including the OS? (b) How much RAM is available for applications after the OS? (c) If all four programs run together, how many GB short are the applications?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 10 },
              { label: "b", answer: 7 },
              { label: "c", answer: 2 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Memory demand", statement: "Compare total demand with available RAM." },
            ],
            steps: [
              { reasoning: "Total demand = 1 + 2 + 4 + 3 = 10 GB.", marks: 1, markCode: "A", part: "a" },
              { reasoning: "Available for apps = 8 - 1 = 7 GB.", marks: 1, markCode: "A", part: "b" },
              { reasoning: "App demand = 2 + 4 + 3 = 9 GB, so shortfall = 9 - 7 = 2 GB.", marks: 1, markCode: "A", part: "c" },
            ],
            finalAnswer: "(a) 10; (b) 7; (c) 2",
          },
        },
        {
          id: "ciecs-u2-hw-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student's computer is slow when editing videos and running several apps. Diagnose likely hardware bottlenecks and recommend upgrades or changes. Justify each recommendation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Performance diagnosis", statement: "Identify the limiting component before upgrading." },
            ],
            steps: [
              { reasoning: "Video editing is often limited by CPU, GPU, RAM and storage speed.", marks: 1, markCode: "M" },
              { reasoning: "Running several apps suggests checking whether RAM is insufficient or being swapped to storage.", marks: 1, markCode: "M" },
              { reasoning: "An SSD can reduce loading and swapping delays; more RAM helps multitasking.", marks: 1, markCode: "M" },
              { reasoning: "Recommendations are justified by matching the bottleneck to the workload.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Upgrade the component that limits the workload",
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
