import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "aphg-u3-lesson-3-1",
  code: "3-1",
  title: "States and Borders",
  goal: "I CAN explain state concepts, boundary types, and territorial disputes.",
  standards: ["Unit 4"],
  vocabulary: [
    { term: "State", definition: "Political entity with defined territory, permanent population, government, and sovereignty." },
    { term: "Nation", definition: "Cultural group sharing language, religion, history, identity." },
    { term: "Nation-state", definition: "State where nation and state coincide — rare (Japan, Iceland); most states are multinational." },
    { term: "Sovereignty", definition: "Supreme authority over territory — core concept of political geography." },
    { term: "Boundary types", definition: "Geometric (latitude/longitude), physical (rivers/mountains), cultural (language/ethnicity), superimposed (drawn without regard to settlement)." },
    { term: "Territoriality", definition: "Claim to control space — basis of state power and border enforcement." },
  ],
  concepts: [
    {
      id: "aphg-u3-states-borders",
      title: "States, nations, and boundaries",
      skill: "Analyze state formation and boundary types.",
      lesson: {
        sections: [
          {
            heading: "State vs. nation",
            body: "State = political entity (territory, government, sovereignty); nation = cultural identity group. Most states contain multiple nations (multinational states) or nations span multiple states (stateless nations like Kurds).",
          },
          {
            heading: "Boundary types",
            body: "Geometric (survey lines — US-Canada 49th parallel), physical (rivers — US-Canada parts), cultural (language — Quebec), superimposed (colonial imposition — Africa's straight lines).",
          },
        ],
        keyFormulas: [
          { name: "State elements", statement: "Territory + population + government + sovereignty" },
          { name: "Boundary types", statement: "Geometric / Physical / Cultural / Superimposed" },
        ],
        workedExample: {
          problem: "Why do Africa's borders cause conflict?",
          solution: "Colonial powers drew 'superimposed' boundaries ignoring ethnic/linguistic settlement patterns — creating states with artificial borders splitting ethnic groups and lumping rivals together → post-independence conflicts.",
        },
      },
      questions: [
        {
          id: "aphg-u3-states-borders-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A nation-state is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "any sovereign state"
                    },
                    {
                              "id": "b",
                              "text": "a state where nation (cultural group) coincides with state (territory)"
                    },
                    {
                              "id": "c",
                              "text": "a multinational state"
                    },
                    {
                              "id": "d",
                              "text": "a stateless nation"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Nation-state",
                              "statement": "Nation = state coincidence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A nation-state is where the cultural nation and political state coincide — rare (Japan, Iceland); most states are multinational or nations are stateless.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Nation = state coincidence",
          "commonErrors": [
                    "Thinking all states are nation-states — most aren't."
          ]
},
        },
        {
          id: "aphg-u3-states-borders-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Superimposed boundaries are ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "natural boundaries like rivers"
                    },
                    {
                              "id": "b",
                              "text": "boundaries drawn without regard to existing settlement/ethnic patterns"
                    },
                    {
                              "id": "c",
                              "text": "cultural boundaries"
                    },
                    {
                              "id": "d",
                              "text": "international borders only"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Superimposed boundaries",
                              "statement": "Artificial colonial boundaries."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Superimposed boundaries are drawn without regard to existing settlement, ethnic, or linguistic patterns — common in Africa where colonial powers imposed straight lines.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "They often create ethnic conflicts by splitting groups or lumping rivals.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Artificial boundaries ignoring settlement",
          "commonErrors": [
                    "Confusing with physical boundaries (rivers/mountains)."
          ]
},
        },
        {
          id: "aphg-u3-states-borders-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Approximately how many sovereign states exist? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "States",
                              "answer": 195
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Count",
                              "statement": "~195 UN member states."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Approximately 195 sovereign states are recognized (UN members + observers).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $195$.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "195",
          "commonErrors": [
                    "Confusing with nations (thousands of ethnic groups)."
          ]
},
        },
        {
          id: "aphg-u3-states-borders-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare physical and cultural boundaries, with examples of each.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Boundary types",
                              "statement": "Natural vs. cultural divisions."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Physical boundaries follow natural features — rivers (US-Canada parts), mountains (Himalayas India-China), deserts; perceived as 'natural' and thus legitimate.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Cultural boundaries follow ethnic, linguistic, or religious lines — Quebec's French-speaking boundary, Catalonia's Spanish/Catalan divide; reflect cultural identity but can be contested.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Geometric boundaries (straight lines) are least 'natural' — often colonial impositions creating conflict (Africa).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Physical = natural features; Cultural = ethnic/language; Geometric = artificial lines",
          "commonErrors": [
                    "Treating all boundaries as equal — types have different legitimacy."
          ]
},
        },
        {
          id: "aphg-u3-states-borders-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze why the concept of 'nation-state' is problematic in a globalized world. Provide examples.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Nation-state limits",
                              "statement": "Mismatch between nation and state."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Most states are multinational — contain multiple ethnic groups (Belgium: Flemish + Walloon; Spain: Catalans + Basques); 'nation-state' model doesn't fit.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Many nations are stateless — Kurds (~30M people, no state), Palestinians, Tibetans; they seek self-determination but lack territory.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Globalization creates transnational identities — EU citizens, global professionals, diaspora communities — transcending nation-state boundaries.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: nation-state is a useful model but increasingly anachronistic — most political reality is multinational states and transnational identities.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Nation-state model is increasingly inadequate for multinational reality",
          "commonErrors": [
                    "Assuming all states are homogeneous nations — they're not."
          ]
},
        },
      ],
    },
  ],
};
