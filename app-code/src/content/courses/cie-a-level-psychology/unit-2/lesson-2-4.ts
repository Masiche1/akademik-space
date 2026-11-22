import type { Lesson } from "../../../types.ts";

export const lesson724: Lesson = {
  id: "ciealpsy-u2-lesson-2-4",
  code: "2-4",
  title: "Psychopathology: OCD and Depression",
  goal: "I CAN explain OCD and depression, their explanations and features.",
  standards: ["Cambridge A Level Psychology 9699", "Paper 2: psychopathology"],
  
  vocabulary: [
    { term: "OCD", definition: "Obsessive-compulsive disorder." },
    { term: "Obsessions", definition: "Persistent unwanted thoughts." },
    { term: "Compulsions", definition: "Repetitive behaviours to reduce anxiety." },
    { term: "Depression", definition: "Persistent low mood disorder." },
    { term: "Learned helplessness", definition: "Giving up after uncontrollable negative events." },
    { term: "Attributional style", definition: "How we explain events (internal/external, stable/unstable)." },
  ],
  concepts: [
    {
      id: "ciealpsy-u2-s4-ocd",
      title: "OCD and depression",
      skill: "Explain OCD and depression.",
      lesson: {
        sections: [
          {
            heading: "OCD",
            body: "Obsessions (intrusive thoughts) + compulsions (rituals to neutralise). Biological: serotonin dysfunction, basal ganglia. Behavioural: conditioning. Cognitive: inflated responsibility.",
          },
          {
            heading: "Depression",
            body: "Persistent low mood, anhedonia, fatigue, sleep/appetite changes. Biological: serotonin/noradrenaline imbalance. Cognitive: Beck's negative triad (self/world/future), learned helplessness (Seligman), attributional style.",
          },
        ],
        keyFormulas: [
          { name: "OCD", statement: "obsessions + compulsions" },
          { name: "Depression", statement: "persistent low mood" },
          { name: "Negative triad", statement: "self/world/future" },
        ],
        workedExample: {
          problem: "Compare biological vs cognitive explanations of depression.",
          solution: "Biological: neurotransmitter imbalance. Cognitive: negative thinking patterns, learned helplessness.",
        },
      },
      questions: [
        {
          id: "ciealpsy-u2-ocd-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is OCD?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "An attachment style"
                    },
                    {
                              "id": "b",
                              "text": "A memory disorder"
                    },
                    {
                              "id": "c",
                              "text": "A type of phobia"
                    },
                    {
                              "id": "d",
                              "text": "Obsessive-compulsive disorder"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "OCD",
                              "statement": "Obsessions + compulsions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "OCD = obsessions + compulsions.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Obsessions + compulsions"
},
        },
        {
          id: "ciealpsy-u2-ocd-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is learned helplessness?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Learned helplessness",
                              "statement": "Giving up."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Giving up after uncontrollable negative events.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Seligman's explanation of depression.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Giving up after uncontrollable events"
},
        },
        {
          id: "ciealpsy-u2-ocd-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is Beck's negative triad?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Negative triad",
                              "statement": "Cognitive distortion."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Negative views of self, world, future.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Beck's cognitive explanation of depression.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Causes distorted thinking patterns.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Self/world/future negative"
},
        },
        {
          id: "ciealpsy-u2-ocd-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define OCD, obsessions, compulsions, depression, learned helplessness, attributional style. (b) What is OCD? (c) What is depression? (d) What is learned helplessness? (e) What is negative triad? (f) What is attributional style? (g) How is OCD explained biologically? (h) Compare biological vs cognitive explanations of depression.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "OCD/depression",
                              "statement": "Explanations."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Obsessions + compulsions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Persistent low mood.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Giving up.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Self/world/future.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Event explanation style.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Serotonin, basal ganglia.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Chemical vs cognitive patterns.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "OCD/depression analysis."
},
        },
        {
          id: "ciealpsy-u2-ocd-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "OCD is characterised by which combination of features?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Only low mood"
                    },
                    {
                              "id": "b",
                              "text": "Only hallucinations"
                    },
                    {
                              "id": "c",
                              "text": "Obsessions and compulsions"
                    },
                    {
                              "id": "d",
                              "text": "Anxiety with no repetitive behaviours"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "OCD",
                              "statement": "Obsessions + compulsions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "OCD involves persistent intrusive obsessions and compulsive rituals performed to reduce the resulting anxiety.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Obsessions and compulsions"
},
        },
        {
          id: "ciealpsy-u2-ocd-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many components make up Beck's negative triad?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 3 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Negative triad",
                              "statement": "Self, world, future."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Beck's negative triad consists of negative views of the self, the world and the future.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "3"
},
        },
        {
          id: "ciealpsy-u2-ocd-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Learned helplessness, proposed by Seligman, explains depression as:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A chemical imbalance in the brain"
                    },
                    {
                              "id": "b",
                              "text": "Repressed childhood anger"
                    },
                    {
                              "id": "c",
                              "text": "Giving up after repeated uncontrollable negative events"
                    },
                    {
                              "id": "d",
                              "text": "An attention deficit"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Learned helplessness",
                              "statement": "Giving up after uncontrollable events."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Learned helplessness proposes that people stop trying to control their circumstances after repeated failures to do so.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Giving up after uncontrollable events"
},
        },
        {
          id: "ciealpsy-u2-ocd-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many core features define OCD according to the lesson?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "OCD",
                              "statement": "Obsessions + compulsions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "OCD is defined by two core features: obsessions and compulsions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "ciealpsy-u2-ocd-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "Beck's negative triad refers to negative views of:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Positive and negative symptoms"
                    },
                    {
                              "id": "b",
                              "text": "The id, the ego and the superego"
                    },
                    {
                              "id": "c",
                              "text": "Nature and nurture"
                    },
                    {
                              "id": "d",
                              "text": "The self, the world and the future"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Negative triad",
                              "statement": "Self/world/future."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Beck proposed that depressed individuals hold negative views of themselves, the world around them and their future.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Self, world and future"
},
        },
        {
          id: "ciealpsy-u2-ocd-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "How many neurotransmitters are named in the biological explanation of depression?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Depression biology",
                              "statement": "Serotonin and noradrenaline."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The biological explanation names serotonin and noradrenaline imbalances.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "ciealpsy-u2-ocd-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "A person feels personally responsible for preventing harm to others and performs rituals to 'neutralise' this responsibility. The cognitive explanation of OCD attributes this to:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Classical conditioning alone"
                    },
                    {
                              "id": "b",
                              "text": "Low self-esteem"
                    },
                    {
                              "id": "c",
                              "text": "Poor memory"
                    },
                    {
                              "id": "d",
                              "text": "Inflated responsibility"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Cognitive explanation",
                              "statement": "Inflated responsibility."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The cognitive explanation proposes that people with OCD overestimate their responsibility for preventing harm, driving compulsive rituals.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Inflated responsibility"
},
        },
        {
          id: "ciealpsy-u2-ocd-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "How many dimensions of attributional style are mentioned in the lesson (e.g., internal/external and stable/unstable)?",
          response: {
          "type": "numeric",
          "parts": [
                    { "label": "a", "answer": 2 }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Attributional style",
                              "statement": "Internal/external; stable/unstable."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "The lesson describes attributional style along two dimensions: internal/external and stable/unstable.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "2"
},
        },
        {
          id: "ciealpsy-u2-ocd-q13",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which symptom is NOT typically associated with depression as described in the lesson?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sleep and appetite changes"
                    },
                    {
                              "id": "b",
                              "text": "Persistent low mood"
                    },
                    {
                              "id": "c",
                              "text": "Anhedonia"
                    },
                    {
                              "id": "d",
                              "text": "Elevated mood and grandiosity"
                    }
          ],
          "correctChoiceId": "d"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Depression",
                              "statement": "Low mood symptoms."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Depression involves persistent low mood, anhedonia, fatigue and sleep/appetite changes — not elevated mood or grandiosity.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Elevated mood and grandiosity"
},
        },
        {
          id: "ciealpsy-u2-ocd-q14",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between obsessions and compulsions in OCD.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Obsessions/compulsions",
                              "statement": "Thoughts vs rituals."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Obsessions are persistent, intrusive and unwanted thoughts or images.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compulsions are repetitive behaviours or mental rituals performed in response to the obsessions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Compulsions temporarily reduce the anxiety caused by obsessions, which maintains the OCD cycle.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Obsessions are thoughts; compulsions are rituals reducing anxiety"
},
        },
        {
          id: "ciealpsy-u2-ocd-q15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe the main symptoms of depression.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Depression",
                              "statement": "Persistent low mood."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Persistent low mood is the central feature.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Anhedonia — loss of pleasure or interest in activities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fatigue, and changes in sleep and appetite.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Symptoms are persistent over time rather than transient.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Low mood, anhedonia, fatigue, sleep/appetite changes"
},
        },
        {
          id: "ciealpsy-u2-ocd-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "(a) Define OCD, obsessions, compulsions, depression, learned helplessness and attributional style. (b) What is OCD? (c) What is depression? (d) What are obsessions and compulsions? (e) What is learned helplessness? (f) What is Beck's negative triad? (g) Explain the biological and cognitive explanations of OCD and depression. (h) Evaluate the explanations of depression.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "OCD/depression",
                              "statement": "Explanations and evaluation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Obsessive-compulsive disorder — obsessions plus compulsions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Persistent low mood disorder with emotional and physical symptoms.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Intrusive unwanted thoughts and ritual behaviours to neutralise them.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Giving up control after repeated uncontrollable negative events.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Negative views of self, world and future.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Biological: serotonin dysfunction, basal ganglia, neurotransmitter imbalance; cognitive: negative triad, learned helplessness, attributional style, inflated responsibility.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Biological explanations are reductionist but supported by drug evidence; cognitive explanations account for thought patterns but rely on self-report.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "OCD and depression analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealpsy-u2-ocd-notes",
      title: "OCD & depression — notes",
      summary: "OCD=obsessions+compulsions; depression=low mood. Multiple explanations.",
      sections: [
        { heading: "Key idea", body: "Both disorders explained biologically and cognitively." },
        { heading: "Depression", body: "Learned helplessness, negative triad, attributional style." },
      ],
    },
  ],
};
