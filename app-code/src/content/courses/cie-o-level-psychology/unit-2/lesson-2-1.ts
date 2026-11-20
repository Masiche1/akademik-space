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
              { id: "a", text: "Sensory, short-term, long-term" },
              { id: "b", text: "Input, process, output" },
              { id: "c", text: "Visual, auditory, tactile" },
              { id: "d", text: "Encoding, storage, retrieval" },
            ],
            correctChoiceId: "a",
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
              { id: "b", text: "Episodic memory" },
              { id: "c", text: "Procedural memory" },
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
