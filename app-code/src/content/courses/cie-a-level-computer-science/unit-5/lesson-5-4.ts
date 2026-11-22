import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "ciealc-u5-lesson-5-4",
  code: "5-4",
  title: "Operating Systems in Depth: Processes, Memory and Scheduling",
  goal: "I CAN explain process management, memory management and CPU scheduling.",
  standards: ["Cambridge A Level Computer Science 9618", "Paper 1: systems"],
  vocabulary: [
    {
      term: "Process",
      definition: "A program in execution with its own memory space.",
    },
    {
      term: "Multitasking",
      definition: "Running multiple processes concurrently.",
    },
    {
      term: "Virtual memory",
      definition: "Using disk space as extension of RAM.",
    },
    { term: "Page", definition: "Fixed-size block of virtual memory." },
    { term: "Scheduling", definition: "Deciding which process gets CPU time." },
    {
      term: "Deadlock",
      definition: "Processes blocked waiting for each other's resources.",
    },
  ],
  concepts: [
    {
      id: "ciealc-u5-s4-os",
      title: "Operating system internals",
      skill: "Explain process management, memory management and scheduling.",
      lesson: {
        sections: [
          {
            heading: "Process management",
            body: "A process is a running program with its own address space and state (running, ready, blocked). The OS scheduler allocates CPU time using algorithms: first-come-first-served, shortest-job-first, round-robin (time slicing). Context switching saves/restores process state when switching. Multitasking gives the illusion of concurrent execution through rapid switching.",
          },
          {
            heading: "Memory management",
            body: "RAM is limited — OS manages it through paging (fixed-size pages) and segmentation. Virtual memory maps process address spaces to physical memory, using disk as overflow — pages are swapped in/out. This allows programs larger than RAM to run but causes thrashing if overused. Memory protection prevents processes accessing each other's memory.",
          },
          {
            heading: "Deadlocks and file systems",
            body: "Deadlocks occur when processes circularly wait for resources — prevented by resource ordering, timeouts, or deadlock detection. File systems organise storage hierarchically — directories, files, permissions. The OS manages file access, allocation and deletion.",
          },
        ],
      },
      questions: [
    {
      id: "ciealc-u5-os-q1",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is a 'process'?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "A hardware component" },
          { id: "b", text: "A program stored on disk" },
          { id: "c", text: "A program in execution with its own memory space" },
          { id: "d", text: "A type of file" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Process",
            statement: "Program in execution.",
          },
        ],
        steps: [
          {
            reasoning:
              "A process is a program in execution — it has its own memory space, state and resources allocated by the OS.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(b)** A program in execution with its own memory space",
      },
    },
    {
      id: "ciealc-u5-os-q2",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is 'virtual memory'?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Using disk space as an extension of RAM" },
          { id: "b", text: "Memory that is always faster" },
          { id: "c", text: "A type of cache" },
          { id: "d", text: "RAM that doesn't exist" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Virtual memory",
            statement: "Disk as RAM extension.",
          },
        ],
        steps: [
          {
            reasoning:
              "Virtual memory uses disk space to extend available RAM — pages are swapped between disk and RAM as needed.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(b)** Using disk space as an extension of RAM",
      },
    },
    {
      id: "ciealc-u5-os-q3",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is 'multitasking'?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Using multiple monitors" },
          {
            id: "b",
            text: "Running multiple processes concurrently through rapid switching",
          },
          { id: "c", text: "Having multiple users" },
          { id: "d", text: "Running one program at a time" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Multitasking",
            statement: "Concurrent processes.",
          },
        ],
        steps: [
          {
            reasoning:
              "Multitasking runs multiple processes by rapidly switching CPU time between them, creating the illusion of concurrency.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "**(b)** Running multiple processes concurrently through rapid switching",
      },
    },
    {
      id: "ciealc-u5-os-q4",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is a 'deadlock'?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "When the CPU overheats" },
          { id: "b", text: "When a program crashes" },
          { id: "c", text: "When memory runs out" },
          {
            id: "d",
            text: "When processes circularly wait for each other's resources",
          },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Deadlock",
            statement: "Circular resource wait.",
          },
        ],
        steps: [
          {
            reasoning:
              "A deadlock occurs when processes block each other by circularly waiting for resources — none can proceed.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "**(b)** When processes circularly wait for each other's resources",
      },
    },
    {
      id: "ciealc-u5-os-q5",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "Define 'context switch' and 'paging'.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Context switch",
            statement: "Save/restore process state.",
          },
          {
            kind: "definition",
            name: "Paging",
            statement: "Fixed-size memory blocks.",
          },
        ],
        steps: [
          {
            reasoning:
              "A context switch saves the current process's state and loads another's when switching CPU.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Paging divides memory into fixed-size pages, allowing non-contiguous allocation and virtual memory.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "Context switch: save/restore state; paging: fixed-size blocks.",
      },
    },
    {
      id: "ciealc-u5-os-q6",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain how round-robin scheduling works.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Round-robin",
            statement: "Time-sliced fair scheduling.",
          },
        ],
        steps: [
          {
            reasoning:
              "Each process gets a fixed time slice (quantum) of CPU time.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "When the time slice expires, the scheduler switches to the next process in the queue.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "This ensures fair CPU sharing — no process monopolises the CPU, good for interactive systems.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Fixed time slices rotate among processes — fair and responsive.",
      },
    },
    {
      id: "ciealc-u5-os-q7",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain the difference between paging and segmentation.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Paging",
            statement: "Fixed-size blocks.",
          },
          {
            kind: "definition",
            name: "Segmentation",
            statement: "Variable-size logical units.",
          },
        ],
        steps: [
          {
            reasoning:
              "Paging divides memory into fixed-size pages — simple, eliminates external fragmentation.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Segmentation divides memory into variable-size segments matching logical units (code, data, stack) — more natural but can fragment.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Modern systems often combine both — paged segmentation or segmented paging.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Paging = fixed blocks; segmentation = logical variable units.",
      },
    },
    {
      id: "ciealc-u5-os-q8",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain how virtual memory allows programs larger than RAM to run.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Virtual memory",
            statement: "Swap pages to disk.",
          },
        ],
        steps: [
          {
            reasoning:
              "The OS maps each process's virtual address space to physical memory pages.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Only actively used pages are in RAM; inactive pages are stored on disk (swap space).",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "When a needed page isn't in RAM, it's swapped in from disk — the process can exceed physical RAM.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Swap inactive pages to disk, load on demand.",
      },
    },
    {
      id: "ciealc-u5-os-q9",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain what happens during thrashing.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Thrashing",
            statement: "Excessive page swapping.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thrashing occurs when the system spends more time swapping pages than executing processes.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It happens when too many processes compete for limited RAM — pages are constantly swapped in and out.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Solutions: reduce number of processes, increase RAM, or use better page replacement algorithms.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Excessive page swapping wastes CPU time — system slows dramatically.",
      },
    },
    {
      id: "ciealc-u5-os-q10",
      difficulty: "core",
      totalMarks: 1,
      stem: "Which scheduling algorithm gives each process a fixed time slice?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Round-robin" },
          { id: "b", text: "First-come-first-served" },
          { id: "c", text: "Priority scheduling" },
          { id: "d", text: "Shortest-job-first" },
        ],
        aorrectChoiceId: "c",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Round-robin",
            statement: "Time slicing.",
          },
        ],
        steps: [
          {
            reasoning:
              "Round-robin gives each process a fixed time slice before moving to the next.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(c)** Round-robin",
      },
    },
    {
      id: "ciealc-u5-os-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "(a) Name the three process states. (b) Which state means the process is waiting for an event?",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Process states",
            statement: "Running, ready, blocked.",
          },
        ],
        steps: [
          {
            reasoning:
              "The three states are running, ready and blocked (waiting).",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Blocked means the process is waiting for an event (I/O, resource) before it can continue.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "a) Running, ready, blocked; b) Blocked",
      },
    },
    {
      id: "ciealc-u5-os-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain how memory protection prevents processes interfering with each other.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Memory protection",
            statement: "Isolated address spaces.",
          },
        ],
        steps: [
          {
            reasoning:
              "Each process gets its own virtual address space — it cannot access other processes' memory.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "The MMU (memory management unit) translates virtual to physical addresses, enforcing boundaries.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "This prevents one process from corrupting another's data or code — critical for system stability.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Separate address spaces prevent cross-process access.",
      },
    },
    {
      id: "ciealc-u5-os-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Evaluate whether round-robin or shortest-job-first is better for general-purpose systems.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Evaluation",
            statement: "Scheduling trade-offs.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: it depends on system type — interactive vs batch.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Round-robin is fair and responsive — good for interactive systems where users need quick responses; but can be inefficient for batch processing.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Shortest-job-first minimises average waiting time — good for batch systems; but can starve long jobs and is unfair.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: round-robin suits interactive systems; SJF suits batch — hybrid approaches often used in practice.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Round-robin for interactive; SJF for batch — context-dependent.",
      },
    },
    {
      id: "ciealc-u5-os-q14",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess whether virtual memory is always beneficial.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Virtual memory trade-offs.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: virtual memory is essential for modern systems but has costs.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Benefits: allows programs larger than RAM, memory isolation between processes, efficient memory utilisation.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Costs: disk access is much slower than RAM — excessive swapping causes thrashing; adds complexity to OS.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: essential for multitasking and large programs; must be managed to avoid thrashing.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Essential but requires careful management.",
      },
    },
    {
      id: "ciealc-u5-os-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Evaluate the claim that 'more RAM always solves performance problems'.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Evaluation",
            statement: "RAM vs other bottlenecks.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: more RAM helps memory-bound systems but doesn't fix all bottlenecks.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "RAM helps when thrashing or memory limits are the issue — reduces swapping, allows more processes.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "But CPU-bound tasks, slow storage, inefficient algorithms or network latency are unaffected by more RAM.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: diagnose the bottleneck first — RAM helps only if memory is the constraint.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "RAM helps only when memory is the bottleneck.",
      },
    },
    {
      id: "ciealc-u5-os-q16",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Design a strategy to prevent deadlocks in a multi-process system.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Deadlock prevention",
            statement: "Design strategies.",
          },
        ],
        steps: [
          {
            reasoning:
              "Resource ordering: require processes to request resources in a fixed global order — prevents circular wait.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Timeouts: if a process can't get a resource within a time limit, it releases all resources and retries — prevents hold-and-wait.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Deadlock detection: periodically check for circular waits and break them by killing a process or forcing resource release.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Prevention is better than detection — design resource allocation to avoid deadlock conditions entirely.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Order resources, use timeouts, detect and break cycles.",
      },
    },
    {
      id: "ciealc-u5-os-q17",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What does 'thrashing' mean in virtual memory?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "When the CPU runs too fast" },
          { id: "b", text: "When files are deleted" },
          { id: "c", text: "When programs crash" },
          { id: "d", text: "Excessive page swapping between RAM and disk" },
        ],
        correctChoiceId: "d",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Thrashing",
            statement: "Excessive swapping.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thrashing is when the system spends more time swapping pages than executing processes.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(b)** Excessive page swapping between RAM and disk",
      },
    },
    {
      id: "ciealc-u5-os-q18",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain how the OS manages file storage.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "File system management",
            statement: "Hierarchical organisation.",
          },
        ],
        steps: [
          {
            reasoning:
              "The OS organises storage hierarchically — directories containing files and subdirectories.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It tracks file locations, sizes, permissions and metadata in a file system table.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It manages allocation (where to store data), access control (who can read/write) and deletion.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Hierarchical organisation with allocation and access control.",
      },
    },
    {
      id: "ciealc-u5-os-q19",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe the life cycle of a process from creation to termination.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "skill",
            name: "Process lifecycle",
            statement: "Create → run → terminate.",
          },
        ],
        steps: [
          {
            reasoning:
              "Creation: OS allocates memory and resources, initialises process state — process enters ready queue.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Execution: scheduler allocates CPU time — process runs, may be preempted and return to ready.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Termination: process completes or is killed — OS reclaims memory and resources.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Create → ready → running → terminate.",
      },
    },
    {
      id: "ciealc-u5-os-q20",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Evaluate whether an operating system should prioritise responsiveness or throughput.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Evaluation",
            statement: "OS design trade-off.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: it depends on the system's purpose — interactive vs batch.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Responsiveness matters for interactive systems — users need quick feedback; prioritise interactive processes.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Throughput matters for batch systems — maximise total work done; scheduling should optimise utilisation.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: modern OSes balance both — responsive for interactive tasks, efficient for background work.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Balance both; depends on system purpose.",
      },
    },
      ],
    },
  ],
};
