import type { Lesson } from "../../../types.ts";

export const lesson342: Lesson = {
  id: "cieihis-u2-lesson-2-2",
  code: "2-2",
  title: "Vietnam War: Escalation and US Strategy",
  goal: "I CAN explain US escalation, military strategy and key battles.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: Vietnam escalation"],
  
  vocabulary: [
    { term: "Escalation", definition: "Increasing military involvement." },
    { term: "Gulf of Tonkin", definition: "1964 incident used to justify US escalation." },
    { term: "Ho Chi Minh Trail", definition: "Supply route through Laos/Cambodia." },
    { term: "Tet Offensive", definition: "1968 communist offensive." },
    { term: "Search and destroy", definition: "US military strategy." },
    { term: "Body count", definition: "US measure of success." },
  ],
  concepts: [
    {
      id: "cieihis-u2-s2-esc",
      title: "Vietnam escalation",
      skill: "Understand US military strategy and escalation.",
      lesson: {
        sections: [
          {
            heading: "Escalation",
            body: "1964 Gulf of Tonkin incident → US Congress authorised military action. Troops increased from advisors to 500,000+. B-52 bombings, Agent Orange, napalm.",
          },
          {
            heading: "Military challenges",
            body: "Viet Cong guerrilla tactics — hit-and-run, tunnels, civilian support. US conventional warfare struggled. Ho Chi Minh Trail supplied North Vietnamese.",
          },
          {
            heading: "Tet Offensive",
            body: "1968: massive communist offensive on South Vietnamese cities. Military defeat for communists but psychological victory — proved US couldn't win.",
          },
        ],
        keyFormulas: [
          { name: "Escalation", statement: "increasing involvement" },
          { name: "Gulf of Tonkin", statement: "1964 justification" },
          { name: "Tet Offensive", statement: "1968 turning point" },
        ],
        workedExample: {
          problem: "Why did the US struggle militarily in Vietnam?",
          solution: "Guerrilla warfare + difficult terrain + lack of local support + political constraints → conventional tactics failed.",
        },
      },
      questions: [
        {
          id: "cieihis-u2-es-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Gulf of Tonkin incident?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1964 incident used to justify US escalation"
                    },
                    {
                              "id": "b",
                              "text": "A peace treaty"
                    },
                    {
                              "id": "c",
                              "text": "A trade agreement"
                    },
                    {
                              "id": "d",
                              "text": "A natural disaster"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Gulf of Tonkin",
                              "statement": "1964 escalation justification."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1964 incident led to US military escalation.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1964 escalation justification"
},
        },
        {
          id: "cieihis-u2-es-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the Tet Offensive?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Tet Offensive",
                              "statement": "1968 communist offensive."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1968 massive communist attack on South Vietnamese cities.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Military defeat but psychological victory for communists.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1968 communist offensive"
},
        },
        {
          id: "cieihis-u2-es-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why did US struggle militarily in Vietnam?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Military challenges",
                              "statement": "Guerrilla warfare."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Viet Cong guerrilla tactics.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Difficult terrain + lack of local support.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Conventional tactics failed.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Guerrilla tactics + terrain"
},
        },
        {
          id: "cieihis-u2-es-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define escalation, Gulf of Tonkin, Ho Chi Minh Trail, Tet Offensive, search and destroy, body count. (b) What was Gulf of Tonkin? (c) What was Tet Offensive? (d) What was Ho Chi Minh Trail? (e) Why did US escalate? (f) Why did US struggle militarily? (g) What was Agent Orange? (h) Evaluate whether US could have won Vietnam War.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Vietnam escalation",
                              "statement": "Strategy, battles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) 1964 incident.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 1968 offensive.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) Supply route through Laos/Cambodia.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Containment + Gulf of Tonkin.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Guerrilla tactics + terrain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Chemical defoliant.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Balanced evaluation.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Vietnam War escalation."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u2-es-notes",
      title: "Vietnam escalation — notes",
      summary: "Gulf of Tonkin→escalation→500K troops. Viet Cong guerrilla tactics frustrated US conventional warfare.",
      sections: [
        { heading: "Key idea", body: "US military superiority couldn't overcome guerrilla tactics and political constraints." },
        { heading: "Tet Offensive", body: "1968 turning point — proved US couldn't win militarily." },
      ],
    },
  ],
};
