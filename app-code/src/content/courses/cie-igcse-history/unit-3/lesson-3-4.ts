import type { Lesson } from "../../../types.ts";

export const lesson354: Lesson = {
  id: "cieihis-u3-lesson-3-4",
  code: "3-4",
  title: "The Holocaust and Genocide",
  goal: "I CAN explain the Holocaust, its causes and consequences.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: Holocaust"],
  
  vocabulary: [
    { term: "Holocaust", definition: "Nazi genocide of Jews 1941-1945." },
    { term: "Final Solution", definition: "Nazi plan to exterminate Jews." },
    { term: "Concentration camp", definition: "Nazi prison/extermination facility." },
    { term: "Auschwitz", definition: "Largest Nazi death camp." },
    { term: "Nuremberg Trials", definition: "Post-WWII trials of Nazi leaders." },
    { term: "Genocide", definition: "Deliberate destruction of a group." },
  ],
  concepts: [
    {
      id: "cieihis-u3-s4-holo",
      title: "The Holocaust",
      skill: "Understand Holocaust causes and consequences.",
      lesson: {
        sections: [
          {
            heading: "Causes",
            body: "Nazi racial ideology — Jews seen as inferior threat. Propaganda dehumanised Jews. 1935 Nuremberg Laws stripped citizenship. Kristallnacht 1938 pogrom. WWII provided cover for genocide.",
          },
          {
            heading: "Implementation",
            body: "1941: Final Solution ordered. Einsatzgruppen mobile killing squads. Concentration/extermination camps: Auschwitz, Treblinka, Sobibor. Gas chambers, forced labour, medical experiments. ~6 million Jews murdered.",
          },
          {
            heading: "Consequences",
            body: "Nuremberg Trials established accountability. 'Never again' principle. Genocide Convention 1948. Holocaust education as warning against hatred.",
          },
        ],
        keyFormulas: [
          { name: "Holocaust", statement: "1941-1945 genocide" },
          { name: "Final Solution", statement: "extermination plan" },
          { name: "6 million", statement: "Jewish victims" },
        ],
        workedExample: {
          problem: "How did Nazi ideology enable the Holocaust?",
          solution: "Racial antisemitism + propaganda + state power → systematic dehumanisation and genocide.",
        },
      },
      questions: [
        {
          id: "cieihis-u3-ho-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Holocaust?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Nazi genocide of Jews 1941-1945"
                    },
                    {
                              "id": "b",
                              "text": "A type of war"
                    },
                    {
                              "id": "c",
                              "text": "A peace treaty"
                    },
                    {
                              "id": "d",
                              "text": "A trade agreement"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Holocaust",
                              "statement": "Jewish genocide."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Holocaust = Nazi genocide of Jews.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Nazi genocide of Jews"
},
        },
        {
          id: "cieihs-u3-ho-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the Final Solution?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Final Solution",
                              "statement": "Extermination plan."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nazi plan to exterminate Jews.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Implemented through camps and killing squads.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Extermination plan"
},
        },
        {
          id: "cieihs-u3-ho-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What caused the Holocaust?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Holocaust causes",
                              "statement": "Antisemitism, ideology."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Nazi racial ideology — Jews seen as inferior.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Propaganda dehumanised Jews.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "State power enabled genocide.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Antisemitism + propaganda + state power"
},
        },
        {
          id: "cieihs-u3-ho-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define Holocaust, Final Solution, concentration camp, Auschwitz, Nuremberg Trials, genocide. (b) What was Holocaust? (c) What was Final Solution? (d) What caused Holocaust? (e) How many Jews were killed? (f) What were concentration camps? (g) What were Nuremberg Trials? (h) Evaluate whether Holocaust could have been prevented.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Holocaust",
                              "statement": "Causes, consequences."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) Jewish genocide.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Extermination plan.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Antisemitism, propaganda, state power.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) ~6 million.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Prison/extermination facilities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Post-WWII Nazi trials.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Holocaust causes and consequences."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u3-ho-notes",
      title: "Holocaust — notes",
      summary: "1941-1945 Nazi genocide of ~6 million Jews. Final Solution, concentration camps, Nuremberg Trials.",
      sections: [
        { heading: "Key idea", body: "State-sponsored genocide enabled by propaganda, ideology, bureaucracy." },
        { heading: "Consequences", body: "Nuremberg Trials, Genocide Convention, 'Never again' principle." },
      ],
    },
  ],
};
