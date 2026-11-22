import type { Lesson } from "../../../types.ts";

export const lesson301: Lesson = {
  id: "ecs11-u4-lesson-4-1",
  code: "4-1",
  title: "Memory Types and Virtual Memory",
  goal: "I CAN compare memory types and explain virtual memory.",
  standards: ["Pearson Edexcel IGCSE Computer Science 4CP1 — Memory"],
  vocabulary: [
    { term: "RAM", definition: "Volatile working memory — fast, temporary." },
    {
      term: "ROM",
      definition: "Non-volatile permanent memory — BIOS/firmware.",
    },
    { term: "Cache", definition: "Small fast memory between CPU and RAM." },
    {
      term: "Virtual memory",
      definition: "Using storage as extension of RAM.",
    },
    { term: "Paging", definition: "Moving pages between RAM and disk." },
  ],
  concepts: [
    {
      id: "ecs11-u4-memorytypes",
      title: "Memory Hierarchy",
      skill: "Compare RAM, ROM, cache and their roles.",
      lesson: {
        sections: [
          {
            heading: "Memory types",
            body: "**Cache**: fastest, smallest — holds frequently used data/instructions. **RAM**: fast, larger — currently running programs. **ROM**: non-volatile — BIOS, firmware, boot instructions. **Storage**: HDD/SSD — large, slow, permanent.\n\n**Hierarchy**: cache → RAM → storage — speed decreases, capacity increases, cost per GB decreases.",
          },
          {
            heading: "Volatile vs non-volatile",
            body: "**Volatile**: loses data on power off — RAM, cache. **Non-volatile**: keeps data — ROM, storage. **Why volatile?**: faster, cheaper to manufacture; data only needed temporarily.\n\n**ROM types**: PROM (programmable once), EPROM (erasable), EEPROM (electrically erasable).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Which memory keeps BIOS after shutdown?",
          solution: "ROM — non-volatile.",
        },
      },
      questions: [
        {
          id: "ecs11-u4-memorytypes-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which memory is fastest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "RAM" },
              { id: "b", text: "HDD" },
              { id: "c", text: "Cache" },
              { id: "d", text: "SSD" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cache",
                statement: "Fastest memory.",
              },
            ],
            steps: [
              { reasoning: "Cache = fastest.", marks: 2, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Cache",
            commonErrors: ["RAM confused."],
          },
        },
        {
          id: "ecs11-u4-memorytypes-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two differences between RAM and ROM.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "RAM vs ROM",
                statement: "Volatile vs permanent.",
              },
            ],
            steps: [
              {
                reasoning: "RAM volatile; ROM non-volatile.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "RAM holds working data; ROM holds BIOS/firmware.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "RAM faster, more expensive per GB.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Volatility, purpose, speed.",
            commonErrors: ["Same thing.", "Only one."],
          },
        },
        {
          id: "ecs11-u4-memorytypes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the memory hierarchy and why it's designed this way.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Memory hierarchy",
                statement: "Speed vs capacity trade-off.",
              },
            ],
            steps: [
              {
                reasoning: "Small fast memory (cache) for frequent data.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Larger slower memory (RAM) for working data.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Largest slowest (storage) for permanent data.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Balances speed, capacity, cost.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Cache→RAM→storage: speed↓ capacity↑ cost↓.",
            commonErrors: ["No hierarchy.", "No trade-off."],
          },
        },
        {
          id: "ecs11-u4-memorytypes-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain what virtual memory is and why it's used.",
          parts: [
            { label: "a", prompt: "Define virtual memory.", marks: 3 },
            {
              label: "b",
              prompt: "Explain its purpose and drawback.",
              marks: 5,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Virtual memory",
                statement: "Storage extends RAM.",
              },
            ],
            steps: [
              {
                reasoning: "(a) Uses disk storage as extension of RAM.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Inactive data moved to disk (paging).",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(b) Purpose: run more/larger programs than RAM allows.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Drawback: much slower than RAM — thrashing.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Excessive paging degrades performance.",
                marks: 1,
                markCode: "AO3",
                part: "b",
              },
            ],
            finalAnswer:
              "(a) disk as RAM extension (b) more capacity but slower",
            commonErrors: ["No mechanism.", "No drawback."],
          },
        },
      ],
    },
    {
      id: "ecs11-u4-storage",
      title: "Storage Technologies",
      skill: "Compare HDD, SSD, optical and cloud storage.",
      lesson: {
        sections: [
          {
            heading: "Storage types",
            body: "**HDD**: magnetic platters — cheap, large capacity, slow, fragile. **SSD**: flash memory — fast, durable, expensive, limited writes. **Optical**: CD/DVD/Blu-ray — cheap distribution, read-only mostly. **Cloud**: remote servers — accessible anywhere, needs internet, subscription.\n\n**Comparison**: HDD best capacity/price; SSD best speed; cloud best accessibility.",
          },
          {
            heading: "Choosing storage",
            body: "**OS**: SSD — needs speed. **Media/files**: HDD — needs capacity. **Backups**: external HDD or cloud. **Distribution**: optical — cheap copies. **Portability**: USB flash drive — small, convenient.\n\n**RAID**: combining drives for performance/redundancy — RAID 0 (speed), RAID 1 (mirror), RAID 5 (parity).",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Best storage for operating system?",
          solution: "SSD — fast boot and program loading.",
        },
      },
      questions: [
        {
          id: "ecs11-u4-storage-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which storage is fastest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "HDD" },
              { id: "b", text: "Optical disc" },
              { id: "c", text: "Tape" },
              { id: "d", text: "SSD" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "SSD",
                statement: "Fastest storage.",
              },
            ],
            steps: [{ reasoning: "SSD = fastest.", marks: 2, markCode: "AO1" }],
            finalAnswer: "**(d)** SSD",
            commonErrors: ["HDD confused."],
          },
        },
        {
          id: "ecs11-u4-storage-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two advantages of SSD over HDD.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "comparison",
                name: "SSD vs HDD",
                statement: "Speed, durability.",
              },
            ],
            steps: [
              {
                reasoning: "Much faster read/write speeds.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "No moving parts — more durable, silent.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Lower power consumption.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Speed, durability, power efficiency.",
            commonErrors: ["HDD better.", "Only one."],
          },
        },
        {
          id: "ecs11-u4-storage-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain two disadvantages of cloud storage.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cloud storage",
                statement: "Dependency, privacy.",
              },
            ],
            steps: [
              {
                reasoning: "Requires internet — unavailable offline.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Subscription costs ongoing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Privacy/security — data on third-party servers.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Vendor lock-in — hard to switch providers.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Internet dependency, cost, privacy, lock-in.",
            commonErrors: ["Only benefits.", "Only one."],
          },
        },
        {
          id: "ecs11-u4-storage-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A company needs to store 10TB of data with backups.",
          parts: [
            { label: "a", prompt: "Recommend a storage solution.", marks: 4 },
            { label: "b", prompt: "Explain your choice.", marks: 4 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Storage strategy",
                statement: "Capacity + redundancy.",
              },
            ],
            steps: [
              {
                reasoning: "(a) RAID array of HDDs — capacity + redundancy.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning:
                  "(a) Plus cloud/offsite backup for disaster recovery.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) HDD best capacity per cost for bulk data.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(b) RAID protects against drive failure; backup against disaster.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
            ],
            finalAnswer: "(a) RAID HDDs + cloud backup (b) capacity+redundancy",
            commonErrors: ["SSD only (cost).", "No backup."],
          },
        },
      ],
    },
    {
      id: "ecs11-u4-cpu",
      title: "CPU Architecture and Performance",
      skill: "Explain CPU components and performance factors.",
      lesson: {
        sections: [
          {
            heading: "CPU components",
            body: "**ALU**: arithmetic/logic operations. **CU**: control unit — coordinates fetch-decode-execute. **Registers**: tiny fast storage inside CPU. **Clock**: synchronises operations — GHz = billions of cycles/sec.\n\n**Cache**: L1 (fastest, smallest), L2, L3 — holds frequently used data. **Pipeline**: overlapping instruction stages for speed.",
          },
          {
            heading: "Performance factors",
            body: "**Clock speed**: GHz — more cycles/sec = faster (but heat limits). **Cores**: parallel processing — multicore handles multiple tasks. **Cache size**: more = fewer slow RAM accesses. **Architecture**: 32-bit vs 64-bit — address space and register size.\n\n**Moore's Law**: transistor count doubles ~every 2 years — driving performance.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why do multicore CPUs help?",
          solution: "Parallel processing — multiple tasks simultaneously.",
        },
      },
      questions: [
        {
          id: "ecs11-u4-cpu-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What does ALU stand for?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Array Logic Unit" },
              { id: "b", text: "Algorithm Logic Unit" },
              { id: "c", text: "Arithmetic Logic Unit" },
              { id: "d", text: "Advanced Logic Unit" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ALU",
                statement: "Arithmetic Logic Unit.",
              },
            ],
            steps: [
              {
                reasoning: "ALU = Arithmetic Logic Unit.",
                marks: 2,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(c)** Arithmetic Logic Unit",
            commonErrors: ["CU confused."],
          },
        },
        {
          id: "ecs11-u4-cpu-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two factors affecting CPU performance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CPU performance",
                statement: "Clock, cores, cache.",
              },
            ],
            steps: [
              {
                reasoning: "Clock speed — GHz cycles/sec.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Number of cores — parallel processing.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cache size — faster data access.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Clock, cores, cache.",
            commonErrors: ["Only one.", "RAM confused."],
          },
        },
        {
          id: "ecs11-u4-cpu-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why higher clock speed doesn't always mean faster CPU.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CPU performance",
                statement: "Multiple factors.",
              },
            ],
            steps: [
              {
                reasoning: "Architecture differences — instruction efficiency.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Cache size affects real-world speed.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Number of cores matters for multitasking.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Thermal throttling — high clock generates heat.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer: "Architecture, cache, cores, heat all matter.",
            commonErrors: ["Clock only.", "No factors."],
          },
        },
        {
          id: "ecs11-u4-cpu-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Choose between two CPUs: 3GHz quad-core vs 4GHz dual-core.",
          parts: [
            { label: "a", prompt: "For gaming, which is better?", marks: 3 },
            {
              label: "b",
              prompt: "For video editing, which is better?",
              marks: 3,
            },
            { label: "c", prompt: "Explain the general principle.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CPU choice",
                statement: "Task-dependent.",
              },
            ],
            steps: [
              {
                reasoning: "(a) 4GHz dual — single-thread performance matters.",
                marks: 2,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(a) Games mostly single-threaded.",
                marks: 1,
                markCode: "AO2",
                part: "a",
              },
              {
                reasoning: "(b) 3GHz quad — parallel tasks benefit from cores.",
                marks: 2,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning: "(b) Video editing uses multiple cores.",
                marks: 1,
                markCode: "AO2",
                part: "b",
              },
              {
                reasoning:
                  "(c) Match CPU to workload — cores for parallel, clock for single.",
                marks: 2,
                markCode: "AO3",
                part: "c",
              },
            ],
            finalAnswer: "(a) 4GHz dual (b) 3GHz quad (c) task-dependent",
            commonErrors: ["Same choice.", "No reasoning."],
          },
        },
      ],
    },
  ],
};
