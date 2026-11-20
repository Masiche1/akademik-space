import type { Lesson } from "../../../types.ts";

export const lesson732: Lesson = {
  id: "ciealpsy-u3-lesson-3-2",
  code: "3-2",
  title: "Development: Piaget's Theory of Cognitive Development",
  goal: "I CAN explain Piaget's stages of cognitive development.",
  standards: ["Cambridge A Level Psychology 9699", "Paper 3: development"],
  
  vocabulary: [
    { term: "Schema", definition: "Mental framework for organising knowledge." },
    { term: "Assimilation", definition: "Fitting new info into existing schema." },
    { term: "Accommodation", definition: "Changing schema to fit new info." },
    { term: "Conservation", definition: "Understanding quantity stays same despite appearance." },
    { term: "Egocentrism", definition: "Inability to see others' perspectives." },
    { term: "Object permanence", definition: "Understanding objects exist when out of sight." },
  ],
  concepts: [
    {
      id: "ciealpsy-u3-s2-piaget",
      title: "Piaget",
      skill: "Explain Piaget's stages.",
      lesson: {
        sections: [
          {
            heading: "Piaget's theory",
            body: "Children develop through stages. Schemas organise knowledge. Assimilation fits new info; accommodation changes schemas. Stages are universal, sequential.",
          },
          {
            heading: "Stages",
            body: "Sensorimotor (0-2): object permanence develops. Preoperational (2-7): egocentrism, no conservation. Concrete operational (7-11): conservation, logical thinking. Formal operational (11+): abstract, hypothetical thinking.",
          },
          {
            heading: "Evaluation",
            body: "Strengths: revolutionary, stimulated research. Weaknesses: underestimated children, stage overlap, culture bias.",
          },
        ],
        keyFormulas: [
          { name: "Sensorimotor", statement: "0-2 years" },
          { name: "Preoperational", statement: "2-7 years" },
          { name: "Concrete operational", statement: "7-11 years" },
        ],
        workedExample: {
          problem: "Explain why a 5-year-old fails conservation task.",
          solution: "Preoperational stage — can't understand that quantity stays same despite appearance change (centres on one dimension).",
        },
      },
      questions: [
        {
          id: "ciealpsy-u3-piag-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a schema in Piaget's theory?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Mental framework for organising knowledge"
                    },
                    {
                              "id": "b",
                              "text": "A brain structure"
                    },
                    {
                              "id": "c",
                              "text": "A memory store"
                    },
                    {
                              "id": "d",
                              "text": "A learning method"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Schema",
                              "statement": "Mental framework."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Schema = mental framework.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Mental framework"
},
        },
        {
          id: "ciealpsy-u3-piag-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the difference between assimilation and accommodation?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Assimilation/accommodation",
                              "statement": "Fit vs change."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Assimilation: fit new info into existing schema.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Accommodation: change schema for new info.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Fit vs change schema"
},
        },
        {
          id: "ciealpsy-u3-piag-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What are Piaget's stages of cognitive development?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Piaget stages",
                              "statement": "Four stages."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sensorimotor, preoperational, concrete operational, formal operational.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Each has age range and characteristics.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Sequential, universal development.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Four sequential stages"
},
        },
        {
          id: "ciealpsy-u3-piag-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define schema, assimilation, accommodation, conservation, egocentrism, object permanence. (b) What is schema? (c) What is assimilation? (d) What is accommodation? (e) What are Piaget's stages? (f) What is conservation? (g) What is egocentrism? (h) Evaluate Piaget's theory.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Piaget",
                              "statement": "Cognitive development."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Mental framework.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Fit into schema.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Change schema.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Four stages.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Quantity understanding.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Others' perspective.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Revolutionary but underestimated children.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Piaget analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealpsy-u3-piag-notes",
      title: "Piaget — notes",
      summary: "Four stages: sensorimotor→preoperational→concrete→formal operational.",
      sections: [
        { heading: "Key idea", body: "Cognitive development through sequential stages with schemas." },
        { heading: "Evaluation", body: "Revolutionary but underestimated children's abilities." },
      ],
    },
  ],
};
