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
                              "text": "Account by someone who saw an event"
                    },
                    {
                              "id": "b",
                              "text": "A type of memory store"
                    },
                    {
                              "id": "c",
                              "text": "A brain scan"
                    },
                    {
                              "id": "d",
                              "text": "A statistical test"
                    }
          ],
          "correctChoiceId": "a"
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
