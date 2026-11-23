import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "apsp-u1-lesson-1-1",
  code: "1-1",
  title: "Spanish Grammar Foundations",
  goal: "I CAN apply core Spanish grammar: ser/estar, por/para, subjunctive triggers.",
  standards: ["Unit 1"],
  vocabulary: [
    { term: "Ser vs. estar", definition: "Ser = permanent traits/origin; estar = temporary states/location." },
    { term: "Por vs. para", definition: "Por = cause/duration/exchange; para = purpose/destination/deadline." },
    { term: "Subjunctive", definition: "Mood for doubt, desire, emotion — triggers: espero que, quiero que, es importante que." },
    { term: "Preterite vs. imperfect", definition: "Preterite = completed actions; imperfect = ongoing/habitual past." },
    { term: "Reflexive verbs", definition: "Actions on oneself — me llamo, te levantas, se sienta." },
    { term: "Accents", definition: "Written stress marks — changes meaning: sí (yes) vs. si (if)." },
  ],
  concepts: [
    {
      id: "apsp-u1-spanish-grammar-foundations",
      title: "Core Spanish grammar",
      skill: "Apply essential Spanish grammar structures accurately.",
      lesson: {
        sections: [
          {
            heading: "Ser vs. estar",
            body: "Ser for permanent characteristics (soy estudiante, es médico); estar for temporary states and locations (estoy cansado, está en Madrid) — the eternal dilemma.",
          },
          {
            heading: "Subjunctive basics",
            body: "Used for doubt, desire, emotion, impersonal expressions — 'espero que vengas' (I hope you come); indicative for facts, subjunctive for uncertainty/wishes.",
          },
        ],
        keyFormulas: [
          { name: "Ser vs. estar", statement: "Ser = permanent; Estar = temporary/location" },
          { name: "Por vs. para", statement: "Por = cause/duration; Para = purpose/deadline" },
          { name: "Subjunctive triggers", statement: "Espero que / Quiero que / Es importante que" },
        ],
        workedExample: {
          problem: "Choose ser/estar: 'Yo ___ cansado'",
          solution: "Estar — temporary state; 'Yo estoy cansado' (I am tired now); 'Yo soy estudiante' uses ser for permanent identity.",
        },
      },
      questions: [
        {
          id: "apsp-u1-spanish-grammar-foundations-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which verb means 'I am tired' (temporary state)?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "soy"
                    },
                    {
                              "id": "b",
                              "text": "estoy"
                    },
                    {
                              "id": "c",
                              "text": "tengo"
                    },
                    {
                              "id": "d",
                              "text": "hago"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Ser vs. estar",
                              "statement": "Temporary states use estar."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Estoy cansado' uses estar for temporary state; 'soy' would imply permanent trait — incorrect for tiredness.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "estoy",
          "commonErrors": [
                    "Using ser for temporary state."
          ]
},
        },
        {
          id: "apsp-u1-spanish-grammar-foundations-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "'Espero que ___ (venir)' requires subjunctive:",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "vienes"
                    },
                    {
                              "id": "b",
                              "text": "vengas"
                    },
                    {
                              "id": "c",
                              "text": "vendrás"
                    },
                    {
                              "id": "d",
                              "text": "venías"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Subjunctive triggers",
                              "statement": "Espero que triggers subjunctive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "'Espero que' expresses hope/desire → subjunctive; 'vengas' is present subjunctive of venir; indicative 'vienes' incorrect after trigger.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Subjunctive expresses uncertainty/wish vs. indicative facts.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "vengas",
          "commonErrors": [
                    "Using indicative after subjunctive trigger."
          ]
},
        },
        {
          id: "apsp-u1-spanish-grammar-foundations-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between por and para with examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Por vs. para",
                              "statement": "Cause vs. purpose."
                    },
                    {
                              "kind": "skill",
                              "name": "Application",
                              "statement": "Distinguish usage."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Por: cause/reason ('por la lluvia' — because of rain), duration ('por dos horas'), exchange ('por dinero'), through ('por el parque').",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Para: purpose ('para estudiar' — to study), destination ('para Madrid'), deadline ('para mañana'), intended recipient ('para ti').",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Key distinction: por looks backward (cause), para looks forward (purpose/destination).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Por=cause/duration; Para=purpose/destination",
          "commonErrors": [
                    "Mixing the two — different directional logic."
          ]
},
        },
        {
          id: "apsp-u1-spanish-grammar-foundations-q4",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze why Spanish subjunctive is challenging for English speakers and how to master it.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Subjunctive difficulty",
                              "statement": "English lacks equivalent mood."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "English doesn't have subjunctive mood — we use same verb forms for facts and wishes; Spanish requires different conjugation creating cognitive load.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Mastery strategies: learn trigger phrases (espero que, quiero que, es importante que), practice with high-frequency subjunctive verbs (ser, estar, tener, ir), recognize patterns.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Subjunctive expresses attitude (doubt, desire, emotion) not just time — deeper grammatical concept than English equivalent.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: subjunctive requires mindset shift — thinking in terms of speaker's attitude toward action, not just action itself.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Subjunctive = attitude toward action; learn triggers + patterns",
          "commonErrors": [
                    "Memorizing without understanding — it's mood not just conjugation."
          ]
},
        },
      ],
    },
  ],
};
