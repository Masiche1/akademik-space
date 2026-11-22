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
              { id: "a", text: "Forgetting" },
              { id: "b", text: "Sleep" },
              { id: "c", text: "Rehearsal" },
              { id: "d", text: "Chunking" },
            ],
            correctChoiceId: "c",
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
        {
          id: "cieipsych-u2-mem-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In the multi-store model, which memory store has the briefest duration?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Retrieval buffer" },
              { id: "b", text: "Sensory memory" },
              { id: "c", text: "Long-term memory" },
              { id: "d", text: "Short-term memory" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sensory memory",
                statement: "Brief storage of sensory information before attention selects it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sensory memory lasts only a fraction of a second to a few seconds; STM lasts about 20 seconds and LTM can last years.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Sensory memory.",
            commonErrors: [
              "Choosing short-term memory — it lasts longer than sensory memory.",
            ],
          },
        },
        {
          id: "cieipsych-u2-mem-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "According to the multi-store model, about how many unrelated items can short-term memory hold without rehearsal?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 7, unit: "items" }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "STM capacity",
                statement: "STM holds about 7 items for about 20 seconds without rehearsal.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "The model gives STM a capacity of approximately seven items.",
                working: "about 7 items",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "7 items",
            commonErrors: ["Giving unlimited capacity — that describes LTM, not STM."],
          },
        },
        {
          id: "cieipsych-u2-mem-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "If information in short-term memory is not rehearsed, what most likely happens?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is stored forever in sensory memory" },
              { id: "b", text: "It becomes permanent immediately" },
              {
                id: "c",
                text: "It decays within about 20 seconds or is displaced by new information",
              },
              { id: "d", text: "It moves automatically into long-term memory" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "STM maintenance",
                statement: "Rehearsal maintains STM and transfers information to LTM.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Without rehearsal, STM items decay or are pushed out by newer information; rehearsal is needed for transfer to LTM.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) It decays or is displaced.",
            commonErrors: [
              "Assuming information reaches LTM automatically — rehearsal is required.",
            ],
          },
        },
        {
          id: "cieipsych-u2-mem-q8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how attention allows information to move from sensory memory into short-term memory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Attention and transfer",
                statement: "Attention selects relevant sensory input for further processing in STM.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Sensory memory briefly holds all incoming information from the senses, but most of it is not attended to.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Attention selects relevant information and transfers it into STM, where it can be rehearsed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Unattended sensory information fades quickly, so only selected information reaches STM.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Attention selects relevant sensory information and transfers it into STM; unattended input fades.",
            commonErrors: [
              "Saying all sensory information enters STM — attention filters it first.",
            ],
          },
        },
        {
          id: "cieipsych-u2-mem-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "A learner groups a 10-digit number into 3 chunks instead of 10 separate digits. How many fewer STM items must be maintained?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 7, unit: "items" }],
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Chunking",
                statement: "Grouping items reduces the number of units STM must hold.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Ten separate digits become three chunks, reducing the load by seven items.",
                working: "10 - 3 = 7",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "7 items",
            commonErrors: [
              "Counting chunks rather than finding the reduction from 10 items to 3 chunks.",
            ],
          },
        },
        {
          id: "cieipsych-u2-mem-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how reconstruction can make a memory inaccurate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reconstruction",
                statement: "Memories are rebuilt using schemas and expectations rather than replayed exactly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "When recalling, people reconstruct the event using what they know about similar events and what seems plausible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Missing details may be filled in using expectations, stereotypes or later information.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The result can include details that were never experienced, making the memory inaccurate.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Memories are rebuilt using schemas and expectations, so gaps can be filled with plausible but false details.",
            commonErrors: [
              "Confusing reconstruction with decay — reconstruction actively changes content.",
            ],
          },
        },
        {
          id: "cieipsych-u2-mem-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which revision strategy is most likely to encode information deeply enough for transfer into long-term memory?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Copying notes without thinking about meaning" },
              {
                id: "b",
                text: "Elaborative rehearsal linking new facts to existing knowledge"
              },
              { id: "c", text: "Reading the notes once" },
              { id: "d", text: "Cramming all material the night before" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Elaborative rehearsal",
                statement: "Linking new information to existing knowledge creates deeper encoding.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Elaborative rehearsal connects new material with prior knowledge, making meaningful LTM traces; shallow rereading or cramming is weaker.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Elaborative rehearsal.",
            commonErrors: [
              "Choosing repetition alone — elaboration gives deeper encoding than simple rehearsal.",
            ],
          },
        },
        {
          id: "cieipsych-u2-mem-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a recall test, 45 of 60 participants remembered a word after spaced rehearsal. (a) What percentage remembered the word? (b) How many participants did not remember it?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 75, unit: "%" },
              { label: "b", answer: 15, unit: "participants" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Percentage and remainder",
                statement: "Percentage = part / whole × 100; remainder = whole − part.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "45 / 60 = 0.75, so 75% remembered the word.",
                working: "45 / 60 \\times 100 = 75",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "60 − 45 = 15 participants did not remember the word.",
                working: "60 - 45 = 15",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) 75%  (b) 15 participants",
            commonErrors: ["Using 60 as the part instead of 45 when calculating the percentage."],
          },
        },
        {
          id: "cieipsych-u2-mem-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Proactive interference occurs when:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Older memories disrupt recall of newer information"
              },
              { id: "b", text: "Memory traces fade with time" },
              { id: "c", text: "Information never enters short-term memory" },
              {
                id: "d",
                text: "Newer learning disrupts recall of older information"
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Proactive interference",
                statement: "Previously learned material interferes with recall of newer material.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Proactive interference moves forward in time: old memories block new recall; retroactive interference is the reverse.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Older memories disrupt recall of newer information.",
            commonErrors: [
              "Confusing proactive with retroactive interference.",
            ],
          },
        },
        {
          id: "cieipsych-u2-mem-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "In a memory test, 35 of 50 participants correctly recalled a list after rehearsal. What percentage recalled correctly?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 70, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Percentage calculation",
                statement: "Percentage = part / whole × 100.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "35 / 50 = 0.70, which is 70%.",
                working: "35 / 50 \\times 100 = 70",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "70%",
            commonErrors: ["Answering 0.70 instead of 70%."],
          },
        },
        {
          id: "cieipsych-u2-mem-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A witness says a weapon was present during a robbery because it 'must have been there' to fit the event, although they did not clearly see one. Which process best explains this error?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reconstruction" },
              { id: "b", text: "Sensory decay" },
              { id: "c", text: "Chunking" },
              { id: "d", text: "Retroactive interference" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Reconstruction",
                statement: "Memory is rebuilt using expectations and schemas, which can insert plausible false details.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The witness fills a gap with a plausible detail based on what seems likely, which is reconstruction rather than simple forgetting.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) Reconstruction.",
            commonErrors: [
              "Calling it interference — interference blocks competing memories, while reconstruction alters content.",
            ],
          },
        },
        {
          id: "cieipsych-u2-mem-q16",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A student hears a new phone number once and cannot recall it a minute later. Which explanation best fits the multi-store model?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Retroactive interference alone must have occurred"
              },
              {
                id: "b",
                text: "The number moved automatically into long-term memory"
              },
              { id: "c", text: "Long-term memory capacity was exceeded" },
              {
                id: "d",
                text: "It entered STM but was not rehearsed, so it decayed or was displaced"
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Memory transfer",
                statement: "Information reaches LTM mainly through rehearsal; unrehearsed STM information is lost quickly.",
              },
            ],
            steps: [
              {
                reasoning:
                  "A single exposure may reach STM briefly, but without rehearsal it decays within about 20 seconds or is displaced; LTM transfer is not automatic.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(b) It entered STM but was not rehearsed, so it decayed or was displaced.",
            commonErrors: [
              "Assuming one exposure is enough for permanent LTM storage.",
            ],
          },
        },
      ],
    },
  ],
};
