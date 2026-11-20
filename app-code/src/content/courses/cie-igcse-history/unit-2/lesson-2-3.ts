import type { Lesson } from "../../../types.ts";

export const lesson343: Lesson = {
  id: "cieihis-u2-lesson-2-3",
  code: "2-3",
  title: "Vietnam War: Opposition and Withdrawal",
  goal: "I CAN explain domestic opposition, media influence and US withdrawal.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: Vietnam opposition"],
  
  vocabulary: [
    { term: "Anti-war movement", definition: "Protests against Vietnam War." },
    { term: "My Lai massacre", definition: "1968 US massacre of Vietnamese civilians." },
    { term: "Vietnam syndrome", definition: "US reluctance to intervene militarily." },
    { term: "Paris Peace Accords", definition: "1973 agreement ending US involvement." },
    { term: "Fall of Saigon", definition: "1975 communist victory in South Vietnam." },
    { term: "Draft", definition: "Compulsory military service." },
  ],
  concepts: [
    {
      id: "cieihis-u2-s3-opp",
      title: "Vietnam opposition",
      skill: "Understand anti-war movement and withdrawal.",
      lesson: {
        sections: [
          {
            heading: "Domestic opposition",
            body: "Growing protests, draft resistance, media coverage of atrocities (My Lai). Public support collapsed. Student movements, celebrities, civil rights leaders opposed war.",
          },
          {
            heading: "Withdrawal",
            body: "1973 Paris Peace Accords — US withdrew. 1975 Saigon fell to North Vietnamese. Vietnam unified under communism. US suffered 'Vietnam syndrome' — reluctance for future interventions.",
          },
        ],
        keyFormulas: [
          { name: "Anti-war", statement: "protests against war" },
          { name: "Paris Accords", statement: "1973 withdrawal" },
          { name: "Fall of Saigon", statement: "1975 communist victory" },
        ],
        workedExample: {
          problem: "Why did public opinion turn against Vietnam War?",
          solution: "Media coverage of atrocities + high casualties + draft inequity + moral concerns → growing opposition.",
        },
      },
      questions: [
        {
          id: "cieihis-u2-op-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the anti-war movement?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Protests against Vietnam War"
                    },
                    {
                              "id": "b",
                              "text": "A military strategy"
                    },
                    {
                              "id": "c",
                              "text": "A peace treaty"
                    },
                    {
                              "id": "d",
                              "text": "A type of weapon"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Anti-war movement",
                              "statement": "War protests."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Anti-war = protests against Vietnam War.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "War protests"
},
        },
        {
          id: "cieihis-u2-op-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the My Lai massacre?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "My Lai",
                              "statement": "1968 civilian massacre."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1968 US massacre of Vietnamese civilians.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fuelled anti-war sentiment.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1968 civilian massacre"
},
        },
        {
          id: "cieihis-u2-op-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What was the Paris Peace Accords?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Paris Accords",
                              "statement": "1973 withdrawal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1973 agreement ending US involvement.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "US troops withdrew; South Vietnam left to fight.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "North Vietnam continued fighting.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1973 US withdrawal"
},
        },
        {
          id: "cieihis-u2-op-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define anti-war movement, My Lai massacre, Vietnam syndrome, Paris Peace Accords, fall of Saigon, draft. (b) What was anti-war movement? (c) What was My Lai? (d) What was Paris Peace Accords? (e) When did Saigon fall? (f) What was Vietnam syndrome? (g) Why did public opinion turn against war? (h) Evaluate whether Vietnam War was a US defeat.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Vietnam opposition",
                              "statement": "Protests, withdrawal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) War protests.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 1968 civilian massacre.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) 1973 US withdrawal.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) 1975.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) US military reluctance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Media, casualties, draft, morality.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation — military/political defeat.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Vietnam opposition and withdrawal."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u2-op-notes",
      title: "Vietnam opposition — notes",
      summary: "Anti-war protests + media coverage + My Lai → public opinion collapse → withdrawal → Saigon falls.",
      sections: [
        { heading: "Key idea", body: "Domestic opposition forced US withdrawal despite military superiority." },
        { heading: "Vietnam syndrome", body: "US reluctance to intervene militarily after Vietnam failure." },
      ],
    },
  ],
};
