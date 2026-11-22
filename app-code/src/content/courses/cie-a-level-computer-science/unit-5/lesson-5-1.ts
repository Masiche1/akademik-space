import type { Lesson } from "../../../types.ts";

export const lesson501: Lesson = {
  id: "ciealc-u5-lesson-5-1",
  code: "5-1",
  title: "Data Structures and Algorithmic Complexity",
  goal: "I CAN analyse linear and non-linear data structures and evaluate algorithm efficiency.",
  standards: [
    "Cambridge A Level Computer Science 9618",
    "Paper 1: algorithms and data structures",
  ],
  vocabulary: [
    { term: "Stack", definition: "LIFO structure — last in, first out." },
    { term: "Queue", definition: "FIFO structure — first in, first out." },
    { term: "Linked list", definition: "Nodes connected by pointers." },
    {
      term: "Binary tree",
      definition: "Hierarchical structure with parent-child nodes.",
    },
    { term: "Graph", definition: "Nodes connected by edges." },
    {
      term: "Big O notation",
      definition: "Describes algorithm growth rate as input grows.",
    },
  ],
  concepts: [
    {
      id: "ciealc-u5-s1-ds",
      title: "Data structures and complexity",
      skill: "Analyse structure choice and algorithm efficiency.",
      lesson: {
        sections: [
          {
            heading: "Linear structures",
            body: "Arrays store fixed-size contiguous elements — fast indexed access O(1) but fixed size. Stacks are LIFO — push/pop at one end, used for call stacks and undo. Queues are FIFO — enqueue at rear, dequeue at front, used for scheduling and buffers. Linked lists connect nodes by pointers — flexible size, O(n) access but efficient insertion.",
          },
          {
            heading: "Non-linear structures",
            body: "Trees have hierarchical parent-child relationships — binary trees enable O(log n) search when balanced. Graphs model networks — nodes and edges, used for maps and social networks. Hash tables give near-O(1) average lookup using key-value mapping.",
          },
          {
            heading: "Complexity analysis",
            body: "Big O describes how runtime grows with input size n. O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n) linearithmic, O(n²) quadratic. Best, average and worst cases differ — binary search is O(log n) average/worst but O(1) best. Space complexity matters too — recursion uses call stack space.",
          },
        ],
      },
      questions: [
    {
      id: "ciealc-u5-ds-q1",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What does LIFO stand for in data structures?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Last in, first out" },
          { id: "b", text: "List insertion, fast order" },
          {
            id: "c",
            text: "Last in, first out is wrong — it's first in, first out",
          },
          { id: "d", text: "Linear input, fast output" },
        ],
        correctChoiceId: "a",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "LIFO",
            statement: "Last in, first out — stack.",
          },
        ],
        steps: [
          {
            reasoning:
              "LIFO means the last item added is the first removed — the defining property of a stack.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(a)** Last in, first out",
      },
    },
    {
      id: "ciealc-u5-ds-q2",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What does FIFO stand for?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Fast input, fast output" },
          { id: "b", text: "File input, file output" },
          { id: "c", text: "First in, first out — queue" },
          { id: "d", text: "First inserted, first ordered" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "FIFO",
            statement: "First in, first out — queue.",
          },
        ],
        steps: [
          {
            reasoning:
              "FIFO means the first item added is the first removed — the defining property of a queue.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(a)** First in, first out — queue",
      },
    },
    {
      id: "ciealc-u5-ds-q3",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "What is Big O notation used to describe?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "The number of lines of code" },
          { id: "b", text: "The exact runtime in seconds" },
          { id: "c", text: "How algorithm runtime grows as input size grows" },
          { id: "d", text: "The memory address of variables" },
        ],
        correctChoiceId: "c",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Big O",
            statement: "Growth rate notation.",
          },
        ],
        steps: [
          {
            reasoning:
              "Big O describes how an algorithm's runtime (or space) grows as the input size increases.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(b)** How algorithm runtime grows as input size grows",
      },
    },
    {
      id: "ciealc-u5-ds-q4",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "Which data structure uses a last-in-first-out principle?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Array" },
          { id: "b", text: "Stack" },
          { id: "c", text: "Queue" },
          { id: "d", text: "Hash table" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          { kind: "definition", name: "Stack", statement: "LIFO structure." },
        ],
        steps: [
          {
            reasoning:
              "A stack uses LIFO — the last item pushed is the first popped.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(b)** Stack",
      },
    },
    {
      id: "ciealc-u5-ds-q5",
      difficulty: "foundation",
      totalMarks: 2,
      stem: "Define 'linked list' and 'graph'.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Linked list",
            statement: "Nodes with pointers.",
          },
          { kind: "definition", name: "Graph", statement: "Nodes and edges." },
        ],
        steps: [
          {
            reasoning:
              "A linked list stores elements in nodes connected by pointers to the next node.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "A graph consists of nodes (vertices) connected by edges, modelling networks and relationships.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "Linked list: pointer-connected nodes; graph: nodes + edges.",
      },
    },
    {
      id: "ciealc-u5-ds-q6",
      difficulty: "core",
      totalMarks: 3,
      stem: "Compare arrays and linked lists in terms of access and insertion.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Array",
            statement: "Contiguous fixed storage.",
          },
          {
            kind: "definition",
            name: "Linked list",
            statement: "Pointer-connected nodes.",
          },
        ],
        steps: [
          {
            reasoning:
              "Arrays allow O(1) indexed access but fixed size; inserting in the middle requires shifting elements O(n).",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Linked lists require O(n) traversal to reach an element but insertion/deletion at a known position is O(1) pointer changes.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Choose arrays for fast random access; linked lists for frequent insertions/deletions.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Array = fast access, costly insert; linked list = slow access, cheap insert.",
        commonErrors: ["Claiming linked lists have O(1) random access."],
      },
    },
    {
      id: "ciealc-u5-ds-q7",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain why binary search on a sorted array is O(log n) while linear search is O(n).",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Binary search",
            statement: "Halves search space.",
          },
          {
            kind: "definition",
            name: "Linear search",
            statement: "Checks each element.",
          },
        ],
        steps: [
          {
            reasoning:
              "Binary search compares the middle element and eliminates half the remaining elements each step — log n steps for n elements.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Linear search checks elements one by one — worst case n comparisons.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Binary search requires sorted data; linear search works on unsorted data.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Binary search halves the search space each step — log n vs n.",
      },
    },
    {
      id: "ciealc-u5-ds-q8",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe how a stack is used in function calls (call stack).",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Call stack",
            statement: "LIFO function management.",
          },
        ],
        steps: [
          {
            reasoning:
              "When a function is called, its return address and local variables are pushed onto the call stack.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "When the function returns, its frame is popped — LIFO order ensures the most recent call finishes first.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Deep recursion can overflow the call stack — stack space is limited.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Call stack manages function calls LIFO; overflow risks exist.",
      },
    },
    {
      id: "ciealc-u5-ds-q9",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain when a queue is more appropriate than a stack.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Queue use cases",
            statement: "FIFO fairness.",
          },
        ],
        steps: [
          {
            reasoning:
              "Queues process items in arrival order — fair for task scheduling, print queues, message buffers.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Stacks reverse order — suitable for undo operations, parsing nested structures, depth-first traversal.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Choose queue when first-come-first-served is required; stack when most-recent-first is needed.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Queue for fair FIFO processing; stack for LIFO reversal.",
      },
    },
    {
      id: "ciealc-u5-ds-q10",
      difficulty: "core",
      totalMarks: 1,
      stem: "What is the average-case complexity of a well-implemented hash table lookup?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "O(1)" },
          { id: "b", text: "O(n)" },
          { id: "c", text: "O(n²)" },
          { id: "d", text: "O(log n)" },
        ],
        aorrectChoiceId: "c",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Hash table",
            statement: "Near-constant lookup.",
          },
        ],
        steps: [
          {
            reasoning:
              "A well-implemented hash table gives O(1) average-case lookup by hashing keys to indices.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(c)** O(1)",
      },
    },
    {
      id: "ciealc-u5-ds-q11",
      difficulty: "core",
      totalMarks: 2,
      stem: "(a) What is a binary tree? (b) What is its advantage for searching?",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Binary tree",
            statement: "Max two children per node.",
          },
          {
            kind: "principle",
            name: "Balanced tree search",
            statement: "O(log n).",
          },
        ],
        steps: [
          {
            reasoning:
              "A binary tree has nodes with at most two children — left and right.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "A balanced binary search tree allows O(log n) search by eliminating half the remaining nodes each comparison.",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer:
          "Binary tree: max 2 children; balanced BST search = O(log n).",
      },
    },
    {
      id: "ciealc-u5-ds-q12",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain the difference between best, average and worst-case complexity.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Complexity cases",
            statement: "Best/average/worst.",
          },
        ],
        steps: [
          {
            reasoning:
              "Best case: minimum possible comparisons — e.g., binary search finds target at first midpoint O(1).",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Average case: expected comparisons across all inputs — often the most useful measure.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Worst case: maximum comparisons — e.g., binary search O(log n), linear search O(n).",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Three measures; worst case often quoted for guarantees.",
      },
    },
    {
      id: "ciealc-u5-ds-q13",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Analyse why merge sort is O(n log n) while bubble sort is O(n²).",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Complexity analysis",
            statement: "Divide-and-conquer advantage.",
          },
        ],
        steps: [
          {
            reasoning:
              "Merge sort divides the array in half recursively (log n levels) and merges sorted halves (n work per level) — total O(n log n).",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Bubble sort compares adjacent pairs and may need n passes of n comparisons — O(n²) worst case.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Merge sort's divide-and-conquer reduces work exponentially; bubble sort's repeated passes grow quadratically.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "For large n, merge sort is dramatically faster despite higher constant factors and extra memory.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Merge sort divides work (n log n); bubble sort compares all pairs (n²).",
      },
    },
    {
      id: "ciealc-u5-ds-q14",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess whether a linked list is better than an array for a text editor's undo feature.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Assessment",
            statement: "Structure suitability.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: undo needs frequent insertion/deletion at the most recent state — LIFO behaviour.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "A stack or linked list suits this: push each state, pop for undo — O(1) operations.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Arrays would require shifting elements for insertions and have fixed-size constraints.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: linked list/stack is clearly better for undo's push/pop pattern.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Linked list/stack suits undo's LIFO pattern.",
      },
    },
    {
      id: "ciealc-u5-ds-q15",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Evaluate the claim that 'Big O describes the exact running time of an algorithm'.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Evaluation",
            statement: "Big O limitations.",
          },
        ],
        steps: [
          {
            reasoning: "Thesis: Big O describes growth rate, not exact time.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It ignores constants and lower-order terms — O(n) algorithms can differ 100x in actual speed.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "It depends on hardware, implementation and input distribution — same O(n) can run differently.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: Big O is essential for comparing scalability but insufficient for predicting actual runtime.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Big O shows growth rate, not exact time.",
        commonErrors: ["Treating Big O as a time measurement."],
      },
    },
    {
      id: "ciealc-u5-ds-q16",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Assess whether recursion is always better than iteration.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Evaluation",
            statement: "Recursion trade-offs.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: recursion is elegant for some problems but not universally better.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Advantages: clearer for tree/graph traversal, divide-and-conquer; mirrors problem structure.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Disadvantages: stack space usage, overhead, harder to debug, stack overflow risk on deep recursion.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: recursion suits naturally recursive problems; iteration is better for simple loops and memory efficiency.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Recursion for recursive problems; iteration for simple cases.",
      },
    },
    {
      id: "ciealc-u5-ds-q17",
      difficulty: "foundation",
      totalMarks: 1,
      stem: "Which structure gives O(log n) search in a balanced tree?",
      response: {
        type: "mcq",
        choices: [
          { id: "a", text: "Bubble sort" },
          { id: "b", text: "Binary search in balanced binary tree" },
          { id: "c", text: "Linear search" },
          { id: "d", text: "Sequential scan" },
        ],
        correctChoiceId: "b",
      },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Balanced BST",
            statement: "O(log n) search.",
          },
        ],
        steps: [
          {
            reasoning:
              "Binary search in a balanced binary tree halves the search space each step — O(log n).",
            marks: 1,
            markCode: "M",
          },
        ],
        finalAnswer: "**(b)** Binary search in balanced binary tree",
      },
    },
    {
      id: "ciealc-u5-ds-q18",
      difficulty: "core",
      totalMarks: 3,
      stem: "Explain why sorting is often a prerequisite for efficient searching.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "principle",
            name: "Sorted data advantage",
            statement: "Enables binary search.",
          },
        ],
        steps: [
          {
            reasoning:
              "Sorted data enables binary search — O(log n) vs O(n) for unsorted.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Sorted data also enables range queries and merge operations efficiently.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "The cost of sorting is often worth it if many searches will be performed on the data.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Sorting enables faster search and range operations.",
      },
    },
    {
      id: "ciealc-u5-ds-q19",
      difficulty: "core",
      totalMarks: 3,
      stem: "Describe how a graph represents a social network.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "definition",
            name: "Social network graph",
            statement: "Users as nodes, connections as edges.",
          },
        ],
        steps: [
          {
            reasoning:
              "Each user is a node; friendships or connections are edges between nodes.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Graph algorithms find friends-of-friends, shortest connection paths, communities and influence.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Weighted graphs can represent strength of connection; directed graphs represent one-way relationships.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer:
          "Users = nodes, connections = edges; algorithms find paths and communities.",
      },
    },
    {
      id: "ciealc-u5-ds-q20",
      difficulty: "challenge",
      totalMarks: 4,
      stem: "Evaluate whether algorithm efficiency matters more than code readability.",
      response: { type: "open" },
      markscheme: {
        principles: [
          {
            kind: "technique",
            name: "Evaluation",
            statement: "Efficiency vs readability.",
          },
        ],
        steps: [
          {
            reasoning:
              "Thesis: both matter — efficiency for performance, readability for maintenance.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Efficiency matters most for large-scale systems — O(n²) vs O(n log n) determines feasibility at scale.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Readability matters for maintenance — unclear code costs more to debug and modify over the program's life.",
            marks: 1,
            markCode: "M",
          },
          {
            reasoning:
              "Reasoned judgement: choose efficient algorithms where performance is critical, readable code where maintainability dominates — balance both.",
            marks: 1,
            markCode: "A",
          },
        ],
        finalAnswer: "Both matter; balance efficiency and readability.",
      },
    },
      ],
    },
  ],
};
