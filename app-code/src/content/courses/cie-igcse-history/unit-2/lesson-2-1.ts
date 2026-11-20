import type { Lesson } from "../../../types.ts";

export const lesson341: Lesson = {
  id: "cieihis-u2-lesson-2-1",
  code: "2-1",
  title: "Vietnam War: Origins and Early Conflict",
  goal: "I CAN explain the causes and early stages of the Vietnam War.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: Vietnam War"],
  
  vocabulary: [
    { term: "Vietnam War", definition: "Conflict in Vietnam 1955-1975 between North and South." },
    { term: "Viet Cong", definition: "South Vietnamese communist guerrilla forces." },
    { term: "Ho Chi Minh", definition: "Leader of North Vietnam and Viet Minh." },
    { term: "Dien Bien Phu", definition: "1954 battle where French defeated by Viet Minh." },
    { term: "Geneva Accords", definition: "1954 agreement dividing Vietnam at 17th parallel." },
    { term: "Domino theory", definition: "US belief that communism would spread if one country fell." },
  ],
  concepts: [
    {
      id: "cieihis-u2-s1-vn",
      title: "Vietnam War origins",
      skill: "Understand Vietnam conflict causes.",
      lesson: {
        sections: [
          {
            heading: "Colonial background",
            body: "France colonised Vietnam. Viet Minh led by Ho Chi Minh fought for independence. 1954 Dien Bien Phu victory → Geneva Accords divided Vietnam at 17th parallel.",
          },
          {
            heading: "US involvement",
            body: "US feared domino effect — if South Vietnam fell to communism, neighbouring countries would follow. Supported South Vietnam against North Vietnamese/Viet Cong.",
          },
        ],
        keyFormulas: [
          { name: "Vietnam War", statement: "1955-1975" },
          { name: "Geneva Accords", statement: "17th parallel divide" },
          { name: "Domino theory", statement: "communism spread fear" },
        ],
        workedExample: {
          problem: "Why did the US get involved in Vietnam?",
          solution: "Cold War containment + domino theory fear + support for South Vietnam against communism.",
        },
      },
      questions: [
        {
          id: "cieihis-u2-vn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Vietnam War?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Conflict in Vietnam 1955-1975"
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
                              "name": "Vietnam War",
                              "statement": "1955-1975 conflict."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Vietnam War = North vs South conflict.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "1955-1975 conflict"
},
        },
        {
          id: "cieihis-u2-vn-q2",
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
                              "reasoning": "US belief that if one country fell to communism, neighbours would follow.",
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
          id: "cieihis-u2-vn-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What were the Geneva Accords?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Geneva Accords",
                              "statement": "1954 Vietnam division."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "1954 agreement dividing Vietnam at 17th parallel.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "North = communist, South = non-communist.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Intended temporary but became permanent.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "1954 Vietnam division"
},
        },
        {
          id: "cieihis-u2-vn-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define Vietnam War, Viet Cong, Ho Chi Minh, Dien Bien Phu, Geneva Accords, domino theory. (b) What was the Vietnam War? (c) What was the domino theory? (d) What were Geneva Accords? (e) Who was Ho Chi Minh? (f) What was Dien Bien Phu? (g) Why did US get involved? (h) Explain how colonial history led to Vietnam War.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Vietnam origins",
                              "statement": "Causes, background."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "(a) All six definitions.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(b) 1955-1975 conflict.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(c) Communism spread fear.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(d) 1954 division.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(e) North Vietnam leader.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(f) 1954 French defeat.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(g) Containment + domino theory.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "(h) Colonial → independence struggle → division → conflict.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Vietnam War origins."
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u2-vn-notes",
      title: "Vietnam origins — notes",
      summary: "French colonialism→Viet Minh→Geneva division→US intervention. Domino theory drove US involvement.",
      sections: [
        { heading: "Key idea", body: "Cold War ideology + colonial legacy created Vietnam conflict." },
        { heading: "Geneva", body: "1954 division at 17th parallel — temporary became permanent." },
      ],
    },
  ],
};
