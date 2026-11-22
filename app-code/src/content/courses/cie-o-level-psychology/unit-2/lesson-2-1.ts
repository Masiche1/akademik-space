import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "olep-u2-lesson-2-1",
  code: "2-1",
  title: "Memory",
  goal: "I CAN describe the multi-store model of memory and types of memory.",
  standards: ["2219: Cognitive processes — memory"],
  vocabulary: [
    {
      term: "Memory",
      definition: "Process of encoding, storing and retrieving information.",
    },
    {
      term: "Multi-store model",
      definition: "Atkinson-Shiffrin model: sensory → short-term → long-term.",
    },
    {
      term: "Sensory memory",
      definition: "Brief storage of sensory information (~seconds).",
    },
    {
      term: "Short-term memory",
      definition: "Temporary storage (~20-30 seconds, 7±2 items).",
    },
    {
      term: "Long-term memory",
      definition: "Permanent storage, unlimited capacity.",
    },
    {
      term: "Rehearsal",
      definition: "Repeating information to maintain/transfer memory.",
    },
  ],
  concepts: [
    {
      id: "olep-u2-memory-model",
      title: "Multi-store model of memory",
      skill: "Describe the Atkinson-Shiffrin model of memory.",
      lesson: {
        sections: [
          {
            heading: "Model overview",
            body: "Information flows: sensory memory → attention → short-term memory → rehearsal → long-term memory. Retrieval brings info back to STM for use.",
          },
          {
            heading: "Sensory memory",
            body: "Holds sensory info briefly (~seconds). Iconic (visual) ~0.5s; echoic (auditory) ~3-4s. Attention transfers to STM — most info lost.",
          },
          {
            heading: "Short-term and long-term",
            body: "STM: ~20-30 seconds, 7±2 items, limited capacity. LTM: unlimited capacity, potentially permanent. Rehearsal transfers STM→LTM. Retrieval: LTM→STM.",
          },
        ],
        keyFormulas: [
          {
            name: "Memory model",
            statement: "Sensory→STM→(rehearsal)→LTM; STM→retrieval.",
          },
        ],
        workedExample: {
          problem: "Why do we forget phone numbers quickly?",
          solution:
            "Without rehearsal, info stays in STM ~20-30 seconds then decays.",
        },
      },
      questions: [
        {
          id: "olep-u2-mm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the three stores in the multi-store model?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Input, process, output" },
              { id: "b", text: "Visual, auditory, tactile" },
              { id: "c", text: "Encoding, storage, retrieval" },
              { id: "d", text: "Sensory, short-term, long-term" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Memory stores",
                statement: "Sensory→STM→LTM.",
              },
            ],
            steps: [
              { reasoning: "Three stores correct.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Sensory, STM, LTM",
            commonErrors: ["Confusing with processes."],
          },
        },
        {
          id: "olep-u2-mm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the capacity of short-term memory?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "STM capacity",
                statement: "7±2 items, ~20-30 seconds.",
              },
            ],
            steps: [
              { reasoning: "7±2 items.", marks: 1, markCode: "AO1" },
              {
                reasoning: "~20-30 seconds duration.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "7±2 items for ~20-30 seconds.",
            commonErrors: ["Saying unlimited."],
          },
        },
        {
          id: "olep-u2-mm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how information moves through the memory stores.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Memory flow",
                statement: "Sensory→attention→STM→rehearsal→LTM.",
              },
            ],
            steps: [
              {
                reasoning: "Sensory → attention → STM.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Rehearsal transfers to LTM.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Retrieval back to STM.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear flow.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Sensory→STM→rehearsal→LTM; retrieval→STM.",
            commonErrors: ["Wrong direction."],
          },
        },
        {
          id: "olep-u2-mm-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Memory model.",
          parts: [
            { label: "a", prompt: "Three stores?", marks: 1 },
            { label: "b", prompt: "STM capacity/duration?", marks: 2 },
            { label: "c", prompt: "Sensory memory duration?", marks: 2 },
            { label: "d", prompt: "Role of rehearsal?", marks: 2 },
            { label: "e", prompt: "LTM characteristics?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Memory model",
                statement: "Stores+capacities+rehearsal+LTM.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Three stores.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "7±2 items.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "~20-30s.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "~seconds (iconic/echoic).",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Brief duration.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Transfers to LTM.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Maintains STM.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Unlimited capacity.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "e",
                reasoning: "Potentially permanent.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) stores (b) STM (c) sensory (d) rehearsal (e) LTM",
          },
        },
        {
          id: "olep-u2-mm-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Approximately how long does iconic (visual) sensory memory last?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "About 20-30 seconds" },
              { id: "b", text: "About 3-4 seconds" },
              { id: "c", text: "About 0.5 seconds" },
              { id: "d", text: "Permanently" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Iconic memory",
                statement: "Visual sensory memory ~0.5 s.",
              },
            ],
            steps: [
              {
                reasoning: "Iconic memory is very brief.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** About 0.5 seconds",
            commonErrors: ["Confusing with echoic memory."],
          },
        },
        {
          id: "olep-u2-mm-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Echoic memory stores which type of information?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Auditory (sound) information" },
              { id: "b", text: "Skills and procedures" },
              { id: "c", text: "Visual information" },
              { id: "d", text: "Facts and knowledge" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Echoic memory",
                statement: "Auditory sensory memory ~3-4 s.",
              },
            ],
            steps: [
              {
                reasoning: "Echoic = auditory.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Auditory (sound) information",
            commonErrors: ["Confusing with iconic memory."],
          },
        },
        {
          id: "olep-u2-mm-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the multi-store model, rehearsal is needed to...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "erase information from short-term memory" },
              { id: "b", text: "move information into sensory memory" },
              { id: "c", text: "transfer information from short-term to long-term memory" },
              { id: "d", text: "encode information permanently without practice" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Rehearsal",
                statement: "Transfers STM to LTM.",
              },
            ],
            steps: [
              {
                reasoning: "Rehearsal moves info STM→LTM.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Transfer STM to long-term memory",
            commonErrors: ["Saying it builds sensory memory."],
          },
        },
        {
          id: "olep-u2-mm-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which statement about short-term memory capacity is correct?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unlimited capacity" },
              { id: "b", text: "Only 2 items" },
              { id: "c", text: "7 plus or minus 2 items" },
              { id: "d", text: "100 items" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "STM capacity",
                statement: "7±2 items (Miller).",
              },
            ],
            steps: [
              {
                reasoning: "Miller's 7±2.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** 7 plus or minus 2 items",
            commonErrors: ["Confusing with LTM capacity."],
          },
        },
        {
          id: "olep-u2-mm-q9",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "When information is retrieved from long-term memory so it can be used, where does it return to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nowhere — it is used directly from LTM" },
              { id: "b", text: "Short-term memory" },
              { id: "c", text: "Permanent storage only" },
              { id: "d", text: "Sensory memory" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Retrieval",
                statement: "LTM → STM for use.",
              },
            ],
            steps: [
              {
                reasoning: "Retrieval returns info to STM.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Needed so conscious use is possible.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "**(a)** Short-term memory",
            commonErrors: ["Saying it stays in LTM."],
          },
        },
        {
          id: "olep-u2-mm-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Echoic memory lasts about $4$ seconds and iconic memory about $0.5$ seconds. How many times longer does echoic memory last than iconic memory?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 8 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Ratio",
                statement: "echoic duration / iconic duration.",
              },
            ],
            steps: [
              {
                reasoning: "4 / 0.5 = 8.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Answer = 8 times longer.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "8",
          },
        },
        {
          id: "olep-u2-mm-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a memory experiment, a participant correctly recalled $34$ out of $40$ words. Calculate the percentage recalled.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 85, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(recalled / total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "Fraction = 34 / 40 = 0.85.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Percentage = 85%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "85%",
          },
        },
        {
          id: "olep-u2-mm-q12",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student must remember an $11$-digit number by chunking it into groups of at most $3$ digits. What is the minimum number of chunks needed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4 }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Chunking",
                statement: "ceil(digits / chunk size).",
              },
            ],
            steps: [
              {
                reasoning: "11 / 3 = 3 remainder 2, so 4 chunks.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Answer = 4 chunks.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "4",
          },
        },
        {
          id: "olep-u2-mm-q13",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "In a decay study, recall accuracy was $90\\%$ after $10$ seconds and $60\\%$ after $30$ seconds without rehearsal. Calculate the percentage-point drop in accuracy.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30, unit: "percentage points" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Decay",
                statement: "initial accuracy - later accuracy.",
              },
            ],
            steps: [
              {
                reasoning: "Drop = 90 - 60 = 30 percentage points.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Shows decay of unrehearsed STM.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Answer = 30 percentage points.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "30 percentage points",
          },
        },
        {
          id: "olep-u2-mm-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define sensory memory and give its approximate duration.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Sensory memory",
                statement: "Brief store for sensory input.",
              },
            ],
            steps: [
              {
                reasoning: "Holds sensory information briefly.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Duration ~seconds (iconic 0.5 s, echoic 3-4 s).",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Brief storage of sensory information lasting only seconds.",
            commonErrors: ["Saying it lasts minutes."],
          },
        },
        {
          id: "olep-u2-mm-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how rehearsal transfers information from short-term to long-term memory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rehearsal",
                statement: "Maintenance of STM → LTM transfer.",
              },
            ],
            steps: [
              {
                reasoning: "Info held in STM for ~20-30 s.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Repeating keeps it active in STM.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Prolonged rehearsal moves it to LTM.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Without rehearsal it decays.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Rehearsal keeps information active in STM until it is transferred to LTM; without it information decays.",
            commonErrors: ["Saying rehearsal is only for maintenance."],
          },
        },
        {
          id: "olep-u2-mm-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Multi-store model of memory.",
          parts: [
            { label: "a", prompt: "Name the three memory stores.", marks: 1 },
            { label: "b", prompt: "Give STM capacity and duration.", marks: 2 },
            { label: "c", prompt: "Define echoic memory.", marks: 2 },
            { label: "d", prompt: "Explain retrieval.", marks: 2 },
            { label: "e", prompt: "Evaluate the multi-store model.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Memory model",
                statement: "Stores+features+retrieval+evaluation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Sensory, STM, LTM.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "7±2 items.", marks: 1, markCode: "AO1" },
              { part: "b", reasoning: "~20-30 seconds.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Auditory sensory memory ~3-4 s.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Part of sensory store.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "LTM info returns to STM for use.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Requires rehearsal/encoding originally.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Strength: clear store distinction.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "e",
                reasoning: "Limitation: STM/LTM not unitary.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "(a) stores (b) STM (c) echoic (d) retrieval (e) evaluation",
          },
        },
      ],
    },
    {
      id: "olep-u2-memory-types",
      title: "Types of memory and forgetting",
      skill:
        "Describe episodic, semantic, procedural memory and causes of forgetting.",
      lesson: {
        sections: [
          {
            heading: "Types of long-term memory",
            body: "Episodic: personal experiences/events. Semantic: facts and knowledge. Procedural: skills/how to do things (riding bike). Each stored differently.",
          },
          {
            heading: "Forgetting",
            body: "Decay: memory fades over time. Interference: new learning disrupts old (retroactive/proactive). Retrieval failure: info stored but can't access. Motivated forgetting: repression.",
          },
          {
            heading: "Improving memory",
            body: "Rehearsal, elaboration (meaningful processing), mnemonics (acronyms, visualisation), spaced practice, testing effect.",
          },
        ],
        keyFormulas: [
          {
            name: "Memory types",
            statement: "Episodic=events; Semantic=facts; Procedural=skills.",
          },
        ],
        workedExample: {
          problem: "Why do we forget old phone numbers?",
          solution:
            "Decay + interference from newer numbers — old info fades and gets overwritten.",
        },
      },
      questions: [
        {
          id: "olep-u2-mt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of memory stores facts and knowledge?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Semantic memory" },
              { id: "b", text: "Procedural memory" },
              { id: "c", text: "Episodic memory" },
              { id: "d", text: "Sensory memory" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Semantic memory",
                statement: "Facts and knowledge.",
              },
            ],
            steps: [
              { reasoning: "Semantic = facts.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Semantic memory",
            commonErrors: ["Confusing with episodic."],
          },
        },
        {
          id: "olep-u2-mt-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two causes of forgetting.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Forgetting",
                statement: "Decay, interference, retrieval failure.",
              },
            ],
            steps: [
              { reasoning: "Any two causes.", marks: 1, markCode: "AO1" },
              { reasoning: "Correctly named.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "Decay, interference, retrieval failure, motivated forgetting.",
            commonErrors: ["Only one cause."],
          },
        },
        {
          id: "olep-u2-mt-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare episodic and procedural memory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Episodic vs procedural",
                statement: "Events vs skills.",
              },
            ],
            steps: [
              {
                reasoning: "Episodic: personal events.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Procedural: skills/how-to.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Different content.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear comparison.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Episodic=events; procedural=skills.",
            commonErrors: ["Only describing one."],
          },
        },
        {
          id: "olep-u2-mt-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Memory types and forgetting.",
          parts: [
            { label: "a", prompt: "Define semantic memory.", marks: 1 },
            { label: "b", prompt: "Two causes of forgetting?", marks: 2 },
            { label: "c", prompt: "Episodic vs procedural?", marks: 3 },
            { label: "d", prompt: "Two ways to improve memory?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Memory",
                statement: "Types+forgetting+improvement.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Facts/knowledge.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two causes.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Events vs skills.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Distinction clear.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Examples.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Any two methods.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Rehearsal/mnemonics/etc.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) semantic (b) causes (c) types (d) improvement",
          },
        },
        {
          id: "olep-u2-mt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Episodic memory stores...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "general facts and knowledge" },
              { id: "b", text: "skills and how to do things" },
              { id: "c", text: "sensory impressions" },
              { id: "d", text: "personal experiences and events" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Episodic memory",
                statement: "Personal events/experiences.",
              },
            ],
            steps: [
              {
                reasoning: "Episodic = events.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Personal experiences and events",
            commonErrors: ["Confusing with semantic memory."],
          },
        },
        {
          id: "olep-u2-mt-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which type of memory stores skills such as riding a bicycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Semantic memory" },
              { id: "b", text: "Episodic memory" },
              { id: "c", text: "Sensory memory" },
              { id: "d", text: "Procedural memory" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Procedural memory",
                statement: "Skills/how-to knowledge.",
              },
            ],
            steps: [
              {
                reasoning: "Procedural = skills.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Procedural memory",
            commonErrors: ["Confusing with semantic memory."],
          },
        },
        {
          id: "olep-u2-mt-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Retroactive interference occurs when...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "memories fade with time" },
              { id: "b", text: "new learning disrupts recall of older material" },
              { id: "c", text: "old learning disrupts recall of new material" },
              { id: "d", text: "information is repressed" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Retroactive interference",
                statement: "New disrupts old.",
              },
            ],
            steps: [
              {
                reasoning: "Retro = backwards onto old.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** New learning disrupts older material",
            commonErrors: ["Reversing with proactive interference."],
          },
        },
        {
          id: "olep-u2-mt-q8",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A student learns Spanish, then learns French, and now finds Spanish vocabulary harder to recall. Which type of interference is this and why?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Proactive — the older Spanish disrupts new French" },
              { id: "b", text: "Retrieval failure — information cannot be accessed" },
              { id: "c", text: "Decay — memories simply faded" },
              { id: "d", text: "Retroactive — the newer French learning disrupts older Spanish recall" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interference",
                statement: "New learning disrupts old recall.",
              },
            ],
            steps: [
              {
                reasoning: "Spanish was learned first, French second.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "New (French) disrupts old (Spanish) = retroactive.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "**(a)** Retroactive — French disrupts Spanish recall",
            commonErrors: ["Mixing up proactive and retroactive."],
          },
        },
        {
          id: "olep-u2-mt-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Tip-of-the-tongue phenomenon is best explained by...",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "sensory overload" },
              { id: "b", text: "decay — the memory has been lost forever" },
              { id: "c", text: "retrieval failure — information is stored but temporarily inaccessible" },
              { id: "d", text: "proactive interference" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Retrieval failure",
                statement: "Stored but cannot be accessed.",
              },
            ],
            steps: [
              {
                reasoning: "TOT = temporary access problem, not loss.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** Retrieval failure — stored but inaccessible",
            commonErrors: ["Saying the memory is lost."],
          },
        },
        {
          id: "olep-u2-mt-q10",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Using a structured mnemonic, a student recalled $6$ out of $8$ items. Without the mnemonic, recall was $4$ out of $8$. Calculate the difference in recall rate in percentage points.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "percentage points" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Recall difference",
                statement: "(6/8 - 4/8) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "75% - 50% = 25 percentage points.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Answer = 25 percentage points.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "25 percentage points",
          },
        },
        {
          id: "olep-u2-mt-q11",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a testing-effect study, one group recalled $45$ out of $60$ words after repeated testing and another recalled $30$ out of $60$ after rereading. Calculate the difference in recall percentage.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 25, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage difference",
                statement: "(45/60 - 30/60) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "75% - 50% = 25%.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Answer = 25%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "25%",
          },
        },
        {
          id: "olep-u2-mt-q12",
          difficulty: "core",
          totalMarks: 3,
          stem: "Recall accuracy on an unrehearsed list was $100\\%$ immediately, $70\\%$ after $10$ seconds and $40\\%$ after $30$ seconds. Calculate the average rate of decline per $10$ seconds.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20, unit: "% per 10 s" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Rate of decay",
                statement: "total drop / number of intervals.",
              },
            ],
            steps: [
              {
                reasoning: "Total drop = 100 - 40 = 60%.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Intervals = 3 (0-10, 10-20, 20-30 s).",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Rate = 60 / 3 = 20% per 10 s.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "20% per 10 seconds",
          },
        },
        {
          id: "olep-u2-mt-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "A student scores $27$ out of $36$ on a delayed-recall test of semantic memory items. What percentage was recalled?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 75, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percentage",
                statement: "(score / total) x 100.",
              },
            ],
            steps: [
              {
                reasoning: "27 / 36 = 0.75.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Percentage = 75%.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "75%",
          },
        },
        {
          id: "olep-u2-mt-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two types of long-term memory.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "LTM types",
                statement: "Episodic, semantic, procedural.",
              },
            ],
            steps: [
              {
                reasoning: "Any two of episodic/semantic/procedural.",
                marks: 1,
                markCode: "AO1",
              },
              { reasoning: "Correctly named.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "Episodic, semantic, procedural.",
            commonErrors: ["Listing sensory or STM."],
          },
        },
        {
          id: "olep-u2-mt-q15",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the difference between proactive and retroactive interference.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interference",
                statement: "Proactive=old→new; retroactive=new→old.",
              },
            ],
            steps: [
              {
                reasoning: "Proactive: old learning disrupts new recall.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Retroactive: new learning disrupts old recall.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Direction of disruption stated for each.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear contrast.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Proactive=old disrupts new; retroactive=new disrupts old.",
            commonErrors: ["Reversing the definitions."],
          },
        },
        {
          id: "olep-u2-mt-q16",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Memory types and forgetting.",
          parts: [
            { label: "a", prompt: "Define semantic memory.", marks: 1 },
            { label: "b", prompt: "Two causes of forgetting?", marks: 2 },
            { label: "c", prompt: "Episodic vs procedural?", marks: 3 },
            { label: "d", prompt: "Two ways to improve memory?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Memory",
                statement: "Types+forgetting+improvement.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Facts and knowledge.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Any two causes.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Correct.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Episodic=events.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Procedural=skills.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Clear contrast.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Any two methods.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Rehearsal/mnemonics/etc.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "d", reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "(a) semantic (b) causes (c) types (d) improvement",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olep-u2-2-1-notes",
      title: "Memory — notes",
      summary: "Multi-store model, memory types, forgetting, improvement.",
      sections: [
        {
          heading: "Model",
          body: "Sensory→STM(7±2,20-30s)→rehearsal→LTM(unlimited). Retrieval→STM.",
        },
        {
          heading: "Types/forgetting",
          body: "Episodic=events; semantic=facts; procedural=skills. Forgetting=decay+interference+retrieval failure.",
        },
      ],
    },
  ],
};
