import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "cieipsych-u2-lesson-2-2",
  code: "2-2",
  title: "Memory and learning",
  goal: "I CAN describe the multi-store model of memory and explain how learning occurs.",
  standards: [
    "Cambridge IGCSE Psychology 0266",
    "Section 2: Cognitive processes",
  ],
  vocabulary: [
    {
      term: "Sensory memory",
      definition:
        "Brief storage of sensory information — iconic (visual) and echoic (auditory).",
    },
    {
      term: "Short-term memory (STM)",
      definition:
        "Temporary storage holding ~7 items for ~20 seconds without rehearsal.",
    },
    {
      term: "Long-term memory (LTM)",
      definition:
        "Permanent store of unlimited capacity holding memories for years.",
    },
    {
      term: "Rehearsal",
      definition: "Repeating information to transfer it from STM to LTM.",
    },
    {
      term: "Chunking",
      definition:
        "Grouping information into meaningful units to increase STM capacity.",
    },
    {
      term: "Interference",
      definition:
        "Forgetting caused by similar memories competing — proactive (old disrupts new) or retroactive (new disrupts old).",
    },
  ],
  concepts: [
    {
      id: "cieipsych-u2-memory",
      title: "The multi-store model and forgetting",
      skill: "Explain how memory works and why forgetting occurs.",
      lesson: {
        sections: [
          {
            heading: "The multi-store model",
            body: "Atkinson and Shiffrin proposed memory as stores: **sensory memory** (very brief, large capacity) → **short-term memory** (~7 items, ~20 seconds, maintained by rehearsal) → **long-term memory** (unlimited, lasting years). Information moves between stores via **attention** (into STM) and **rehearsal** (STM → LTM).",
          },
          {
            heading: "Forgetting",
            body: "Information is lost at each stage: sensory memory fades in seconds; STM items decay or are displaced (~7 item limit); LTM traces can fade over time (**decay**), be blocked by **interference** from similar memories, or be distorted through **reconstruction** — we remember what makes sense, not always what happened.",
          },
          {
            heading: "Improving memory",
            body: "Strategies include **rehearsal** (repetition), **chunking** (grouping digits like phone numbers), **mnemonics** (acronyms, visualisation) and **elaborative rehearsal** (linking new info to existing knowledge). Sleep also consolidates memories — LTM strengthening occurs during rest.",
          },
        ],
        keyFormulas: [
          {
            name: "Memory flow",
            statement: "sensory → attention → STM → rehearsal → LTM",
          },
          {
            name: "STM limits",
            statement: "~7 items, ~20 seconds without rehearsal",
          },
          {
            name: "Chunking gain",
            statement: "7 digits → 2 chunks of phone number",
          },
        ],
        workedExample: {
          problem: "Why do we forget a phone number we just heard?",
          solution:
            "It enters sensory memory then STM, but without rehearsal it decays within ~20 seconds or is displaced by newer information.",
        },
      },
      questions: [
        {
          id: "cieipsych-u2-mem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Information moves from short-term to long-term memory mainly through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sleep" },
              { id: "b", text: "Rehearsal" },
              { id: "c", text: "Chunking" },
              { id: "d", text: "Forgetting" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rehearsal",
                statement: "Repetition transfers information from STM to LTM.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rehearsal is the transfer mechanism; chunking aids capacity, sleep consolidates but is not the transfer itself.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Rehearsal.",
            commonErrors: [
              "Saying attention moves info to LTM — attention brings it into STM first.",
            ],
          },
        },
        {
          id: "cieipsych-u2-mem-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain what is meant by 'chunking' and why it helps memory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Chunking",
                statement:
                  "Grouping items into meaningful units to fit STM's limited capacity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Chunking groups separate items into meaningful units — e.g. a phone number as 3 chunks instead of 10 digits.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "STM holds ~7 items, so fewer chunks = more information retained.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Meaningful chunks are easier to rehearse and transfer to LTM.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Grouping items into units lets more information fit STM's ~7-item limit.",
            commonErrors: [
              "Saying chunking increases STM capacity — it works within the limit by grouping.",
            ],
          },
        },
        {
          id: "cieipsych-u2-mem-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Describe two types of interference that cause forgetting in long-term memory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Interference",
                statement: "Similar memories compete, blocking recall.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Proactive interference: older memories disrupt recall of newer ones — e.g. old phone number blocks the new one.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Retroactive interference: newer learning disrupts recall of older material — e.g. learning French vocabulary interferes with Spanish.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both occur because similar traces compete during retrieval.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Proactive (old disrupts new) and retroactive (new disrupts old) interference.",
            commonErrors: [
              "Confusing interference with decay — decay is fading, interference is competition.",
            ],
          },
        },
        {
          id: "cieipsych-u2-mem-q4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A student revises for exams but forgets much of the material within weeks. Using the multi-store model, explain why this happens and suggest improvements.",
          parts: [
            {
              label: "a",
              prompt: "Explain why information is lost using the memory model.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Suggest three revision strategies based on memory research.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Memory and revision",
                statement:
                  "Transfer to LTM requires rehearsal and elaboration; decay and interference cause loss.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "If material stays in STM, it decays in ~20 seconds — no rehearsal means no transfer to LTM.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Even in LTM, unused traces fade (decay) or compete with similar subjects (interference).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Cramming without spacing gives shallow LTM traces vulnerable to decay.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Spaced repetition: revisit material at intervals to strengthen LTM traces.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Elaborative rehearsal: link new facts to existing knowledge — deeper encoding.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Active recall and chunking: test yourself and group material into meaningful units.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) No rehearsal → STM decay; LTM traces fade/interfere. (b) Spaced repetition, elaboration, active recall, chunking.",
            commonErrors: [
              "Suggesting strategies not grounded in the memory model (e.g. 'read it louder').",
            ],
          },
        },
      ],
    },
  ],
};
