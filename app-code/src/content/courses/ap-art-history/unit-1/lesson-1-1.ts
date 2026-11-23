import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apah-u1-lesson-1-1",
  code: "1-1",
  title: "Egyptian Art",
  goal: "I CAN analyze Egyptian art's formal characteristics and cultural significance.",
  standards: ["Unit 1"],
  vocabulary: [
    { term: "Hieroglyphics", definition: "Egyptian writing system using pictorial symbols." },
    { term: "Ka", definition: "Egyptian concept of life force/soul — preserved through art and mummification." },
    { term: "Canonical proportions", definition: "Standardized figure proportions — head = 1/6 body height in Egyptian art." },
    { term: "Composite view", definition: "Figures shown with head in profile, torso front, legs profile — clarity over naturalism." },
    { term: "Funerary art", definition: "Art for afterlife — tomb paintings, sarcophagi, canopic jars." },
    { term: "Temple art", definition: "Art for gods — colossal statues, reliefs, obelisks." },
  ],
  concepts: [
    {
      id: "apah-u1-egyptian-art",
      title: "Egyptian art and culture",
      skill: "Analyze Egyptian art's formal conventions and cultural purpose.",
      lesson: {
        sections: [
          {
            heading: "Formal characteristics",
            body: "Composite view (profile head/legs, frontal torso), canonical proportions, hierarchical scale (size = importance), lack of naturalism — clarity over realism.",
          },
          {
            heading: "Cultural context",
            body: "Art served religion and afterlife — pharaohs as gods, mummification preserved bodies, tomb art ensured eternal life; art wasn't 'art for art's sake.'",
          },
        ],
        keyFormulas: [
          { name: "Composite view", statement: "Profile head/legs + frontal torso" },
          { name: "Canonical proportions", statement: "Head = 1/6 body height" },
          { name: "Hierarchical scale", statement: "Size indicates social/religious importance" },
        ],
        workedExample: {
          problem: "Analyze Egyptian art's purpose vs. Greek naturalism",
          solution: "Egyptian art served religious/magical function — ensured afterlife, honored gods; formal conventions (composite view, hierarchical scale) served clarity not naturalism. Greek art pursued idealized naturalism for aesthetic/philosophical purposes.",
        },
      },
      questions: [
        {
          id: "apah-u1-egyptian-art-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Egyptian art's 'composite view' means ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "naturalistic figures"
                    },
                    {
                              "id": "b",
                              "text": "profile head/legs + frontal torso for clarity"
                    },
                    {
                              "id": "c",
                              "text": "abstract shapes"
                    },
                    {
                              "id": "d",
                              "text": "sculptural depth"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Composite view",
                              "statement": "Clear profile + frontal hybrid."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Composite view combines profile head/legs with frontal torso — prioritizing clarity and recognizability over naturalistic perspective.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Profile + frontal hybrid",
          "commonErrors": [
                    "Confusing with naturalism."
          ]
},
        },
        {
          id: "apah-u1-egyptian-art-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Hierarchical scale in Egyptian art indicates ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "artistic skill"
                    },
                    {
                              "id": "b",
                              "text": "social/religious importance through figure size"
                    },
                    {
                              "id": "c",
                              "text": "perspective"
                    },
                    {
                              "id": "d",
                              "text": "random variation"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Hierarchical scale",
                              "statement": "Size = importance."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Hierarchical scale uses figure size to indicate importance — pharaohs/gods drawn largest, servants smallest; size communicated status, not spatial reality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "It's a convention, not naturalistic perspective.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Size = importance",
          "commonErrors": [
                    "Thinking it's perspective — it's status convention."
          ]
},
        },
        {
          id: "apah-u1-egyptian-art-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "If Egyptian canonical proportions set head = 1/6 body height, how many heads tall is a figure? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Heads",
                              "answer": 6
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Reciprocal",
                              "statement": "$1/(1/6) = 6$ heads tall."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "If head = 1/6 body, figure is $6$ heads tall.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $6$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "6",
          "commonErrors": [
                    "Inverting the proportion."
          ]
},
        },
        {
          id: "apah-u1-egyptian-art-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how Egyptian art's formal conventions served cultural/religious purposes rather than artistic naturalism.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Egyptian art",
                              "statement": "Function over form."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Composite view ensured figures recognizable in flat relief — clarity served magical/religious function; canonical proportions maintained consistency across centuries.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Hierarchical scale communicated divine/royal status — size showed importance not perspective; art's purpose was ensuring afterlife and honoring gods, not aesthetic pleasure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Unlike Greek naturalism (art for beauty/philosophy), Egyptian art was functional — conventions served religious-magical purposes.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Conventions served religious-magical function, not naturalism",
          "commonErrors": [
                    "Applying Western aesthetic standards — Egyptian art had different purpose."
          ]
},
        },
        {
          id: "apah-u1-egyptian-art-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze how Egyptian art reflects ancient worldview. What does it reveal about Egyptian beliefs?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Art as cultural evidence",
                              "statement": "Form reveals worldview."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Art reveals beliefs: pharaohs depicted as gods → divine kingship; elaborate tomb art → strong afterlife beliefs; mummification + ka preservation → soul/body continuity importance; animals (cats, falcons, scarabs) → religious symbolism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Form reflects worldview: composite view → truth over appearance; hierarchical scale → social hierarchy divinely ordained; permanence (stone, gold) → desire for eternal existence.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Art wasn't separate from religion — it WAS religion; analyzing Egyptian art reveals worldview where art, religion, and politics were inseparable.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: Egyptian art is primary evidence of worldview — formal conventions encode beliefs about divinity, afterlife, and social order; art served cosmic-religious function.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Egyptian art reveals worldview — art served cosmic-religious function",
          "commonErrors": [
                    "Separating art from culture — they were integrated."
          ]
},
        },
      ],
    },
  ],
};
