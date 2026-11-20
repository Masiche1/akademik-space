import type { Lesson } from "../../../types.ts";

export const lesson613: Lesson = {
  id: "ciealhis-u1-lesson-1-3",
  code: "1-3",
  title: "Cold War: Proxy Conflicts",
  goal: "I CAN explain superpower involvement in Korean, Vietnam and Afghan wars.",
  standards: ["Cambridge A Level History 9489", "Paper 1: proxy wars"],
  
  vocabulary: [
    { term: "Korean War", definition: "1950-53 conflict in Korea." },
    { term: "Vietnam War", definition: "1955-75 conflict in Vietnam." },
    { term: "Soviet-Afghan War", definition: "1979-89 conflict in Afghanistan." },
    { term: "Domino theory", definition: "US fear of communism spread." },
    { term: "Viet Cong", definition: "South Vietnamese communist guerrillas." },
    { term: "Mujahedeen", definition: "Afghan resistance fighters." },
  ],
  concepts: [
    {
      id: "ciealhis-u1-s3-proxy",
      title: "Proxy conflicts",
      skill: "Analyse superpower involvement in regional wars.",
      lesson: {
        sections: [
          {
            heading: "Korean War",
            body: "1950-53: North (Soviet/Chinese backed) vs South (US backed). Stalemate at 38th parallel. Demonstrated Cold War proxy conflict.",
          },
          {
            heading: "Vietnam War",
            body: "1955-75: US supported South against North/Viet Cong. Domino theory drove intervention. US defeat led to Vietnam syndrome.",
          },
          {
            heading: "Soviet-Afghan War",
            body: "1979-89: USSR invaded to support communist government. US/China/Pakistan backed mujahedeen. Soviet withdrawal contributed to collapse.",
          },
        ],
        keyFormulas: [
          { name: "Korean War", statement: "1950-53" },
          { name: "Vietnam", statement: "1955-75" },
          { name: "Afghanistan", statement: "1979-89" },
        ],
        workedExample: {
          problem: "Why did the US struggle in Vietnam despite military superiority?",
          solution: "Guerrilla tactics + difficult terrain + lack of local support + political constraints → conventional tactics failed.",
        },
      },
      questions: [
        {
          id: "ciealhis-u1-px-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Korean War?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "1950-53 conflict in Korea"
                    },
                    {
                              "id": "b",
                              "text": "A trade war"
                    },
                    {
                              "id": "c",
                              "text": "A peace treaty"
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
                              "name": "Korean War",
                              "statement": "1950-53 conflict."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Korean War = North vs South conflict.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1950-53 conflict"
},
        },
        {
          id: "ciealhis-u1-px-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the domino theory?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Domino theory",
                              "statement": "Communism spread fear."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "US belief that if one country fell, neighbours would follow.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Justified US intervention in Vietnam.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Communism spread fear"
},
        },
        {
          id: "ciealhis-u1-px-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why did the US lose the Vietnam War?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Vietnam defeat",
                              "statement": "Causes."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Guerrilla tactics + terrain.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Lack of local support.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Domestic opposition, political constraints.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Guerrilla + terrain + opposition"
},
        },
        {
          id: "ciealhis-u1-px-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define Korean War, Vietnam War, Soviet-Afghan War, domino theory, Viet Cong, mujahedeen. (b) What was Korean War? (c) What was Vietnam War? (d) What was Soviet-Afghan War? (e) What was domino theory? (f) Why did US lose Vietnam? (g) What was Vietnam syndrome? (h) Evaluate whether proxy wars achieved superpower objectives.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Proxy wars",
                              "statement": "Analysis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) 1950-53 Korea.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) 1955-75 Vietnam.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) 1979-89 Afghanistan.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) Communism spread fear.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) Guerrilla + terrain + opposition.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) US military reluctance.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Mixed results — costly and inconclusive.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Proxy conflict analysis."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ciealhis-u1-px-notes",
      title: "Proxy wars — notes",
      summary: "Korea, Vietnam, Afghanistan — superpowers fought through allies.",
      sections: [
        { heading: "Key idea", body: "Proxy wars avoided direct conflict but were costly and often inconclusive." },
        { heading: "Vietnam", body: "US defeat led to Vietnam syndrome — reluctance for future interventions." },
      ],
    },
  ],
};
