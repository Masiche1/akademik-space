import type { Lesson } from "../../../types.ts";

export const lesson713: Lesson = {
  id: "ciealpsy-u1-lesson-1-3",
  code: "1-3",
  title: "Memory: Eyewitness Testimony and Improvement",
  goal: "I CAN explain factors affecting eyewitness testimony and memory improvement strategies.",
  standards: ["Cambridge A Level Psychology 9699", "Paper 1: Memory"],
  
  vocabulary: [
    { term: "Eyewitness testimony", definition: "Account given by someone who saw an event." },
    { term: "Leading question", definition: "Question suggesting a particular answer." },
    { term: "Cognitive interview", definition: "Interview technique to improve recall." },
    { term: "Context-dependent forgetting", definition: "Forgetting when retrieval context differs." },
    { term: "State-dependent forgetting", definition: "Forgetting when internal state differs." },
    { term: "Mnemonic", definition: "Memory aid technique." },
  ],
  concepts: [
    {
      id: "ciealpsy-u1-s3-ewt",
      title: "Eyewitness testimony",
      skill: "Analyse EWT factors and improvement strategies.",
      lesson: {
        sections: [
          {
            heading: "EWT factors",
            body: "Anxiety affects recall (weapon focus). Misleading info post-event (Loftus). Leading questions distort memory. Race bias, age effects.",
          },
          {
            heading: "Cognitive interview",
            body: "Fisher & Geiselman: report everything, reinstate context, reverse order, change perspective. Improves recall ~35-75%. Based on encoding specificity principle.",
          },
          {
            heading: "Improving memory",
            body: "Mnemonics (acronyms, loci), elaboration, chunking, spaced repetition, retrieval practice, organisation.",
          },
        ],
        keyFormulas: [
          { name: "Cognitive interview", statement: "improves ~35-75%" },
          { name: "Weapon focus", statement: "attention on weapon" },
          { name: "Leading question", statement: "distorts memory" },
        ],
        workedExample: {
          problem: "Why is eyewitness testimony unreliable?",
          solution: "Memory is reconstructive, not photographic. Anxiety, misleading info, leading questions, bias all distort recall.",
        },
      },
      questions: [
        {
          id: "ciealpsy-u1-ewt-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is eyewitness testimony?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A statistical test"
                    },
                    {
                              "id": "b",
                              "text": "A type of memory store"
                    },
                    {
                              "id": "c",
                              "text": "Account by someone who saw an event"
                    },
                    {
                              "id": "d",
                              "text": "A brain scan"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "EWT",
                              "statement": "Witness account."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "EWT = eyewitness account.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Witness account"
},
        },
        {
          id: "ciealpsy-u1-ewt-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a leading question?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Leading question",
                              "statement": "Suggests answer."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Question suggesting particular answer.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Can distort memory (Loftus).",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Suggests answer"
},
        },
        {
          id: "ciealpsy-u1-ewt-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is the cognitive interview and why does it work?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Cognitive interview",
                              "statement": "Recall technique."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fisher & Geiselman: report everything, reinstate context.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Based on encoding specificity principle.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Improves recall ~35-75%.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Context reinstatement improves recall"
},
        },
        {
          id: "ciealpsy-u1-ewt-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define EWT, leading question, cognitive interview, context-dependent forgetting, weapon focus, mnemonic. (b) What is EWT? (c) What is weapon focus? (d) What is cognitive interview? (e) What is context-dependent forgetting? (f) Why is EWT unreliable? (g) What are memory improvement strategies? (h) Evaluate cognitive interview vs standard interview.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "EWT",
                              "statement": "Factors/improvement."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Witness account.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Attention on weapon.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Recall technique.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Context mismatch.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Reconstructive, biases, anxiety.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Mnemonics, elaboration, spaced repetition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) CI better but time-consuming.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "EWT analysis."
},
        },
        {
          id: "ciealpsy-u1-ewt-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'weapon focus' in eyewitness testimony research?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Attention directed at a weapon, reducing recall of other details"
                    },
                    {
                              "id": "b",
                              "text": "A retrieval cue"
                    },
                    {
                              "id": "c",
                              "text": "A type of memory store"
                    },
                    {
                              "id": "d",
                              "text": "A leading question technique"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Weapon focus",
                              "statement": "Attention on weapon."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Weapon focus means attention is captured by the weapon, impairing recall of the perpetrator.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** Attention on weapon reduces detail recall"
},
        },
        {
          id: "ciealpsy-u1-ewt-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many main techniques does the cognitive interview include?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Cognitive interview",
                              "statement": "Four techniques."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CI includes report everything, reinstate context, reverse order and change perspective.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "4"
},
        },
        {
          id: "ciealpsy-u1-ewt-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which is a correct feature of the cognitive interview?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Leading questions are encouraged"
                    },
                    {
                              "id": "b",
                              "text": "Context reinstatement is avoided"
                    },
                    {
                              "id": "c",
                              "text": "Only closed questions are used"
                    },
                    {
                              "id": "d",
                              "text": "Witnesses are asked to report everything, even minor details"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Cognitive interview",
                              "statement": "Report everything."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CI begins with asking the witness to report everything they remember, including apparently trivial details.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** Report everything first"
},
        },
        {
          id: "ciealpsy-u1-ewt-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "The cognitive interview can improve the accuracy of eyewitness recall by approximately what percentage?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 50,
                              "tolerance": 25
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "CI improvement",
                              "statement": "~35-75%."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Research suggests CI improves correct recall by roughly 35-75%.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "50"
},
        },
        {
          id: "ciealpsy-u1-ewt-q9",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which factor is most likely to reduce eyewitness accuracy?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rehearsing the event"
                    },
                    {
                              "id": "b",
                              "text": "Leading questions asked after the event"
                    },
                    {
                              "id": "c",
                              "text": "A distinctive perpetrator"
                    },
                    {
                              "id": "d",
                              "text": "High witness confidence"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Misleading info",
                              "statement": "Distorts memory."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Leading questions and post-event misinformation distort reconstructive memory.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** Leading questions"
},
        },
        {
          id: "ciealpsy-u1-ewt-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many different verbs were used across conditions in Loftus and Palmer's classic study of misleading information?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 5
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Loftus & Palmer",
                              "statement": "Five verbs."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Loftus & Palmer used five verbs (e.g. contacted, hit, bumped, collided, smashed) varying implied speed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "5"
},
        },
        {
          id: "ciealpsy-u1-ewt-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why is eyewitness testimony described as 'reconstructive'?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "It relies only on sensory memory"
                    },
                    {
                              "id": "b",
                              "text": "It cannot be influenced by questions"
                    },
                    {
                              "id": "c",
                              "text": "It is stored as a perfect photographic record"
                    },
                    {
                              "id": "d",
                              "text": "Memory is rebuilt using post-event information and expectations"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Reconstructive memory",
                              "statement": "Memory is rebuilt."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "EWT is reconstructive because recall combines stored fragments with post-event information and schemas.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** Memory rebuilt with post-event info"
},
        },
        {
          id: "ciealpsy-u1-ewt-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many memory improvement strategies are named in this lesson?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "a",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Improvement strategies",
                              "statement": "Six strategies."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mnemonics, elaboration, chunking, spaced repetition, retrieval practice and organisation are named.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "6"
},
        },
        {
          id: "ciealpsy-u1-ewt-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which mnemonic technique involves remembering items by associating them with locations on a familiar route?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Chunking"
                    },
                    {
                              "id": "b",
                              "text": "Spaced repetition"
                    },
                    {
                              "id": "c",
                              "text": "Method of loci"
                    },
                    {
                              "id": "d",
                              "text": "Acronyms"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Method of loci",
                              "statement": "Route-based mnemonic."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The method of loci links items to places on a familiar journey.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(b)** Method of loci"
},
        },
        {
          id: "ciealpsy-u1-ewt-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how misleading post-event information can distort eyewitness testimony.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Misleading info",
                              "statement": "Post-event distortion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Information introduced after the event can be incorporated into the witness's memory.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Because memory is reconstructive, witnesses may genuinely 'remember' details that were suggested to them.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "This can alter estimates (e.g. speed) and even identification of suspects (Loftus).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Post-event info alters reconstructive memory"
},
        },
        {
          id: "ciealpsy-u1-ewt-q15",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "The cognitive interview is primarily based on which principle of memory?",
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
                              "text": "Encoding specificity"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Encoding specificity",
                              "statement": "Context cues retrieval."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "CI is based on the encoding specificity principle — reinstating context improves recall.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "**(a)** Encoding specificity"
},
        },
        {
          id: "ciealpsy-u1-ewt-q16",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the cognitive interview as a way of improving eyewitness testimony.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "CI evaluation",
                              "statement": "Strengths and weaknesses."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Strength: increases the number of correct details recalled, by roughly 35-75%.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Strength: based on a clear theoretical principle (encoding specificity) linking context reinstatement to recall.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Strength: uses open-ended, non-leading questions that reduce suggestion effects.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Weakness: it may also increase the amount of incorrect information reported.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Weakness: it is time-consuming and requires trained interviewers, limiting practical use.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "reasoning": "Overall: more effective than standard interviews for accurate recall, but costly and can increase errors.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "More accurate recall but time-consuming"
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealpsy-u1-ewt-notes",
      title: "EWT — notes",
      summary: "EWT unreliable due to reconstructive memory. Cognitive interview improves recall.",
      sections: [
        { heading: "Key idea", body: "Memory is reconstructive — factors distort eyewitness accounts." },
        { heading: "Improvement", body: "Cognitive interview, context reinstatement, avoid leading questions." },
      ],
    },
  ],
};
