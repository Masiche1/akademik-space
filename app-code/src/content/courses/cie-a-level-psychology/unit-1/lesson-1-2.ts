import type { Lesson } from "../../../types.ts";

export const lesson712: Lesson = {
  id: "ciealpsy-u1-lesson-1-2",
  code: "1-2",
  title: "Memory: Models and Processes",
  goal: "I CAN explain memory models and the stages of memory.",
  standards: ["Cambridge A Level Psychology 9699", "Paper 1: Memory"],
  
  vocabulary: [
    { term: "Sensory memory", definition: "Brief store of sensory info (~seconds)." },
    { term: "Short-term memory", definition: "Limited capacity store (~seconds-minutes)." },
    { term: "Long-term memory", definition: "Essentially unlimited duration store." },
    { term: "Encoding", definition: "Converting info into storable form." },
    { term: "Storage", definition: "Maintaining info over time." },
    { term: "Retrieval", definition: "Accessing stored info." },
  ],
  concepts: [
    {
      id: "ciealpsy-u1-s2-mem",
      title: "Memory processes",
      skill: "Explain memory models and processes.",
      lesson: {
        sections: [
          {
            heading: "Multi-store model",
            body: "Atkinson-Shiffrin: sensory → STM → LTM via rehearsal. Sensory ~iconic/echoic (~0.5s), STM ~7±2 items (~20s), LTM unlimited. Forgetting: trace decay, displacement, interference.",
          },
          {
            heading: "Working memory model",
            body: "Baddeley & Hitch: central executive, phonological loop, visuospatial sketchpad, episodic buffer. STM is active workspace, not just rehearsal store.",
          },
          {
            heading: "Encoding",
            body: "Acoustic (sound-based), visual, semantic. Semantic encoding best for LTM. Context-dependent and state-dependent retrieval.",
          },
        ],
        keyFormulas: [
          { name: "STM capacity", statement: "7±2 items" },
          { name: "Miller", statement: "7±2 chunks" },
          { name: "Encoding", statement: "acoustic→semantic" },
        ],
        workedExample: {
          problem: "Why do we forget information?",
          solution: "Trace decay (STM), displacement (capacity exceeded), interference (similar memories compete), retrieval failure (poor cues).",
        },
      },
      questions: [
        {
          id: "ciealpsy-u1-mem-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the multi-store model of memory?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sensory → STM → LTM via rehearsal"
                    },
                    {
                              "id": "b",
                              "text": "A type of encoding"
                    },
                    {
                              "id": "c",
                              "text": "A forgetting theory"
                    },
                    {
                              "id": "d",
                              "text": "A brain structure"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "MSM",
                              "statement": "Three stores."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "MSM: sensory→STM→LTM via rehearsal.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Sensory→STM→LTM"
},
        },
        {
          id: "ciealpsy-u1-mem-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the capacity of short-term memory?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "STM capacity",
                              "statement": "7±2 items."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "~7±2 items (Miller).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Can be increased by chunking.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "7±2 items"
},
        },
        {
          id: "ciealpsy-u1-mem-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the difference between the multi-store model and working memory model?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "MSM vs WMM",
                              "statement": "Passive vs active."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "MSM: passive rehearsal, single STM store.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "WMM: active processing, multiple components.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "WMM explains dual-task performance better.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Passive vs active processing"
},
        },
        {
          id: "ciealpsy-u1-mem-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define sensory memory, STM, LTM, encoding, storage, retrieval. (b) What is MSM? (c) What is STM capacity? (d) What is encoding? (e) What are forgetting explanations? (f) What is WMM? (g) What is chunking? (h) Evaluate MSM vs WMM.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Memory",
                              "statement": "Models/processes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Three stores.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 7±2 items.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Converting info.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Decay, displacement, interference.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Multiple components.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Grouping items.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) WMM explains more phenomena.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Memory models comparison."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealpsy-u1-mem-notes",
      title: "Memory models — notes",
      summary: "MSM=three stores; WMM=active workspace. STM capacity 7±2.",
      sections: [
        { heading: "Key idea", body: "Memory involves encoding→storage→retrieval across different stores." },
        { heading: "Forgetting", body: "Decay, displacement, interference, retrieval failure." },
      ],
    },
  ],
};
