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
                              "text": "A brain structure"
                    },
                    {
                              "id": "d",
                              "text": "A forgetting theory"
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
        {
          id: "ciealpsy-u1-mem-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which store in the multi-store model has essentially unlimited capacity and duration?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sensory memory"
                    },
                    {
                              "id": "b",
                              "text": "Long-term memory"
                    },
                    {
                              "id": "c",
                              "text": "Iconic memory"
                    },
                    {
                              "id": "d",
                              "text": "Short-term memory"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "LTM",
                              "statement": "Unlimited store."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "LTM has essentially unlimited capacity and duration.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** Long-term memory"
},
        },
        {
          id: "ciealpsy-u1-mem-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Approximately how many items can short-term memory hold at once?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 7,
                              "tolerance": 2
                    }
          ]
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
                              "reasoning": "Miller's estimate: STM holds about 7±2 items.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "7"
},
        },
        {
          id: "ciealpsy-u1-mem-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which component of Baddeley's working memory model acts as the 'central controller'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Visuospatial sketchpad"
                    },
                    {
                              "id": "b",
                              "text": "Episodic buffer"
                    },
                    {
                              "id": "c",
                              "text": "Central executive"
                    },
                    {
                              "id": "d",
                              "text": "Phonological loop"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "WMM",
                              "statement": "Central executive controls."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The central executive is the controlling component of WMM.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(c)** Central executive"
},
        },
        {
          id: "ciealpsy-u1-mem-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Approximately how long does sensory (iconic) memory typically last, in seconds?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 0.5,
                              "tolerance": 0.25
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Sensory memory",
                              "statement": "~0.5 seconds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sensory memory (iconic/echoic) lasts about half a second.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "0.5"
},
        },
        {
          id: "ciealpsy-u1-mem-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which explanation of forgetting occurs when new information pushes out old information from a limited-capacity store?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Displacement"
                    },
                    {
                              "id": "b",
                              "text": "Trace decay"
                    },
                    {
                              "id": "c",
                              "text": "Interference"
                    },
                    {
                              "id": "d",
                              "text": "Retrieval failure"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Displacement",
                              "statement": "New items push out old."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Displacement occurs when capacity is exceeded and older items are lost.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** Displacement"
},
        },
        {
          id: "ciealpsy-u1-mem-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many separate stores does the Atkinson-Shiffrin multi-store model describe?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 3
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "MSM",
                              "statement": "Three stores."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "MSM has three stores: sensory, STM and LTM.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "ciealpsy-u1-mem-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which type of encoding is generally most effective for long-term memory?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Visual encoding"
                    },
                    {
                              "id": "b",
                              "text": "Acoustic encoding"
                    },
                    {
                              "id": "c",
                              "text": "Iconic encoding"
                    },
                    {
                              "id": "d",
                              "text": "Semantic encoding"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Encoding",
                              "statement": "Semantic best for LTM."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Semantic (meaning-based) encoding produces the best LTM retention.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(d)** Semantic encoding"
},
        },
        {
          id: "ciealpsy-u1-mem-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Roughly how many seconds does unrehearsed information typically remain in short-term memory?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 20,
                              "tolerance": 10
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "STM duration",
                              "statement": "~20 seconds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Without rehearsal, STM holds information for roughly 20 seconds.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "20"
},
        },
        {
          id: "ciealpsy-u1-mem-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'chunking' in memory research?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A retrieval cue"
                    },
                    {
                              "id": "b",
                              "text": "A type of forgetting"
                    },
                    {
                              "id": "c",
                              "text": "Grouping items into meaningful units"
                    },
                    {
                              "id": "d",
                              "text": "A brain structure"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Chunking",
                              "statement": "Grouping items."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chunking groups information into meaningful units, increasing effective capacity.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(c)** Grouping items into meaningful units"
},
        },
        {
          id: "ciealpsy-u1-mem-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two ways in which the working memory model improves on the multi-store model.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "MSM vs WMM",
                              "statement": "Active processing."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "WMM sees STM as an active workspace, not just a rehearsal store.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "WMM has multiple components (phonological loop, sketchpad, buffer) explaining dual-task performance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "WMM explains processing and manipulation of information, which MSM cannot.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "WMM explains active processing better"
},
        },
        {
          id: "ciealpsy-u1-mem-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A student remembers a phone number more easily after grouping the digits into chunks. This illustrates:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Interference"
                    },
                    {
                              "id": "b",
                              "text": "Chunking"
                    },
                    {
                              "id": "c",
                              "text": "Trace decay"
                    },
                    {
                              "id": "d",
                              "text": "Displacement"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Chunking",
                              "statement": "Grouping aids memory."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Grouping digits into chunks is an example of chunking increasing STM capacity.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** Chunking"
},
        },
        {
          id: "ciealpsy-u1-mem-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the multi-store model of memory.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "MSM evaluation",
                              "statement": "Strengths and weaknesses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Strength: provides a clear, simple structure of sensory, STM and LTM stores.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Strength: explains how information is transferred via rehearsal to LTM.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Weakness: STM is oversimplified — it cannot explain parallel processing or manipulation of information.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Weakness: treats rehearsal as the only route to LTM, ignoring elaborative processing.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Evidence: case studies (e.g. HM) support distinct stores with different functions.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Overall: influential and supported by evidence, but the working memory model explains STM processing more fully.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Clear structure but STM oversimplified"
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
