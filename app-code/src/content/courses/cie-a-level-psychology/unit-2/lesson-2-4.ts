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
                              "text": "Obsessive-compulsive disorder"
                    },
                    {
                              "id": "b",
                              "text": "A type of phobia"
                    },
                    {
                              "id": "c",
                              "text": "A memory disorder"
                    },
                    {
                              "id": "d",
                              "text": "An attachment style"
                    }
          ],
          "correctChoiceId": "a"
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
