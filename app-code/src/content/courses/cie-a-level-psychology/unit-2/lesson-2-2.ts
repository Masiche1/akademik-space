import type { Lesson } from "../../../types.ts";

export const lesson722: Lesson = {
  id: "ciealpsy-u2-lesson-2-2",
  code: "2-2",
  title: "Approaches: Cognitive and Psychodynamic",
  goal: "I CAN explain cognitive and psychodynamic approaches.",
  standards: ["Cambridge A Level Psychology 9699", "Paper 3: approaches"],
  
  vocabulary: [
    { term: "Cognitive approach", definition: "Psychology as mental processes — thinking, memory, perception." },
    { term: "Schema", definition: "Mental framework for organising knowledge." },
    { term: "Attribution", definition: "How we explain causes of behaviour." },
    { term: "Psychodynamic approach", definition: "Freud's theory — unconscious drives." },
    { term: "Id, ego, superego", definition: "Freud's personality structure." },
    { term: "Defence mechanism", definition: "Unconscious way of coping with anxiety." },
  ],
  concepts: [
    {
      id: "ciealpsy-u2-s2-cogpsy",
      title: "Cognitive & psychodynamic",
      skill: "Explain cognitive and psychodynamic approaches.",
      lesson: {
        sections: [
          {
            heading: "Cognitive approach",
            body: "Focus on mental processes: thinking, memory, perception, language. Uses computer analogy — input, processing, output. Schemas organise knowledge. Attributions explain behaviour. Cognitivism links to behaviourism (learning through experience).",
          },
          {
            heading: "Psychodynamic approach",
            body: "Freud: personality = id (pleasure), ego (reality), superego (morality). Unconscious drives behaviour. Defence mechanisms: repression, projection, displacement, rationalisation. Childhood experiences shape adult personality.",
          },
          {
            heading: "Comparison",
            body: "Cognitive: scientific, testable, but ignores emotions. Psychodynamic: holistic, explains unconscious, but unscientific, unfalsifiable.",
          },
        ],
        keyFormulas: [
          { name: "Cognitive", statement: "mental processes" },
          { name: "Psychodynamic", statement: "unconscious drives" },
          { name: "Defence", statement: "repression, projection" },
        ],
        workedExample: {
          problem: "Explain phobia from psychodynamic vs cognitive view.",
          solution: "Psychodynamic: repressed childhood fear → anxiety → defence. Cognitive: learned association + negative schema about feared object.",
        },
      },
      questions: [
        {
          id: "ciealpsy-u2-cog-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the cognitive approach?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Psychology as mental processes"
                    },
                    {
                              "id": "b",
                              "text": "Unconscious drives"
                    },
                    {
                              "id": "c",
                              "text": "Learned conditioning"
                    },
                    {
                              "id": "d",
                              "text": "Brain chemistry"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cognitive",
                              "statement": "Mental processes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Cognitive = mental processes.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Mental processes"
},
        },
        {
          id: "ciealpsy-u2-cog-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are id, ego and superego?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Id/ego/superego",
                              "statement": "Freud structure."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Id=pleasure, ego=reality, superego=morality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Conflict between them creates anxiety.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Pleasure/reality/morality"
},
        },
        {
          id: "ciealpsy-u2-cog-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What is a defence mechanism? Give examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Defence",
                              "statement": "Anxiety coping."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Unconscious way of coping with anxiety.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Repression, projection, displacement, rationalisation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Protects ego from uncomfortable feelings.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Unconscious anxiety coping"
},
        },
        {
          id: "ciealpsy-u2-cog-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define cognitive approach, schema, attribution, psychodynamic, id/ego/superego, defence mechanism. (b) What is cognitive? (c) What is psychodynamic? (d) What is schema? (e) What is attribution? (f) What are defence mechanisms? (g) How does psychodynamic explain behaviour? (h) Evaluate cognitive vs psychodynamic approaches.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Cognitive/psycho",
                              "statement": "Comparison."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Mental processes.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Unconscious drives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Mental framework.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Behaviour explanation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Repression, projection etc.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Unconscious childhood drives.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Cognitive testable; psycho holistic but unscientific.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Cognitive/psychodynamic comparison."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealpsy-u2-cog-notes",
      title: "Cognitive & psychodynamic — notes",
      summary: "Cognitive=mental processes (testable); psychodynamic=unconscious (unfalsifiable).",
      sections: [
        { heading: "Key idea", body: "Cognitive is scientific; psychodynamic explains deeper but lacks testability." },
        { heading: "Freud", body: "Id/ego/superego conflict → anxiety → defence mechanisms." },
      ],
    },
  ],
};
