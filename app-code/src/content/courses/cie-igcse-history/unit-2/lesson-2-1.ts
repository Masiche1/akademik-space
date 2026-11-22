import type { Lesson } from "../../../types.ts";

export const lesson341: Lesson = {
  id: "cieihis-u2-lesson-2-1",
  code: "2-1",
  title: "Vietnam War: Origins and Early Conflict",
  goal: "I CAN explain the causes and early stages of the Vietnam War.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: Vietnam War"],

  vocabulary: [
    {
      term: "Vietnam War",
      definition: "Conflict in Vietnam 1955-1975 between North and South.",
    },
    {
      term: "Viet Cong",
      definition: "South Vietnamese communist guerrilla forces.",
    },
    {
      term: "Ho Chi Minh",
      definition: "Leader of North Vietnam and Viet Minh.",
    },
    {
      term: "Dien Bien Phu",
      definition: "1954 battle where French defeated by Viet Minh.",
    },
    {
      term: "Geneva Accords",
      definition: "1954 agreement dividing Vietnam at 17th parallel.",
    },
    {
      term: "Domino theory",
      definition: "US belief that communism would spread if one country fell.",
    },
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
          solution:
            "Cold War containment + domino theory fear + support for South Vietnam against communism.",
        },
      },
      questions: [
        {
          id: "cieihis-u2-vn-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Vietnam War?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Conflict in Vietnam 1955-1975",
              },
              {
                id: "b",
                text: "A peace treaty",
              },
              {
                id: "c",
                text: "A trade war",
              },
              {
                id: "d",
                text: "A natural disaster",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vietnam War",
                statement: "1955-1975 conflict.",
              },
            ],
            steps: [
              {
                reasoning: "Vietnam War = North vs South conflict.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1955-1975 conflict",
          },
        },
        {
          id: "cieihis-u2-vn-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the domino theory?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Domino theory",
                statement: "Communism spread fear.",
              },
            ],
            steps: [
              {
                reasoning:
                  "US belief that if one country fell to communism, neighbours would follow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Justified US intervention in Vietnam.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Communism spread fear",
          },
        },
        {
          id: "cieihis-u2-vn-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What were the Geneva Accords?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Geneva Accords",
                statement: "1954 Vietnam division.",
              },
            ],
            steps: [
              {
                reasoning: "1954 agreement dividing Vietnam at 17th parallel.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "North = communist, South = non-communist.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Intended temporary but became permanent.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1954 Vietnam division",
          },
        },
        {
          id: "cieihis-u2-vn-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define Vietnam War, Viet Cong, Ho Chi Minh, Dien Bien Phu, Geneva Accords, domino theory. (b) What was the Vietnam War? (c) What was the domino theory? (d) What were Geneva Accords? (e) Who was Ho Chi Minh? (f) What was Dien Bien Phu? (g) Why did US get involved? (h) Explain how colonial history led to Vietnam War.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Vietnam origins",
                statement: "Causes, background.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) 1955-1975 conflict.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) Communism spread fear.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) 1954 division.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) North Vietnam leader.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) 1954 French defeat.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Containment + domino theory.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Colonial → independence struggle → division → conflict.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Vietnam War origins.",
          },
        },
        {
          id: "cieihis-u2-vn-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Who led the Viet Minh movement that fought for Vietnamese independence from France?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Pol Pot",
              },
              {
                id: "b",
                text: "Ho Chi Minh",
              },
              {
                id: "c",
                text: "Bao Dai",
              },
              {
                id: "d",
                text: "Ngo Dinh Diem",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ho Chi Minh",
                statement: "Viet Minh leader.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ho Chi Minh led the Viet Minh against French colonial rule.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Ho Chi Minh",
          },
        },
        {
          id: "cieihis-u2-vn-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year were the Geneva Accords signed, dividing Vietnam?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1954,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Geneva Accords",
                statement: "1954.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Geneva Accords were signed in 1954 after the French defeat at Dien Bien Phu.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1954",
          },
        },
        {
          id: "cieihis-u2-vn-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Explain two reasons why the United States feared communism spreading in Southeast Asia.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Domino theory",
                statement: "Communism spread fear.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The domino theory predicted that if South Vietnam fell, neighbouring countries would follow.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "US containment policy aimed to prevent the expansion of communist influence during the Cold War.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Domino theory + containment policy",
          },
        },
        {
          id: "cieihis-u2-vn-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Along which parallel was Vietnam divided by the Geneva Accords?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "17th parallel",
              },
              {
                id: "b",
                text: "38th parallel",
              },
              {
                id: "c",
                text: "49th parallel",
              },
              {
                id: "d",
                text: "Equator",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Geneva Accords",
                statement: "17th parallel divide.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Geneva Accords divided Vietnam at the 17th parallel.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** 17th parallel",
          },
        },
        {
          id: "cieihis-u2-vn-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) In which year did the Vietnam War begin? (b) In which year did it end?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1955,
              },
              {
                label: "b",
                answer: 1975,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Vietnam War dates",
                statement: "1955-1975.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Vietnam War began in 1955 with conflict between North and South Vietnam.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "The war ended in 1975 when Saigon fell to the communists.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1955, b) 1975",
          },
        },
        {
          id: "cieihis-u2-vn-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What were the Viet Cong?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "US military advisers in Vietnam",
              },
              {
                id: "b",
                text: "South Vietnamese communist guerrilla forces",
              },
              {
                id: "c",
                text: "The French colonial army",
              },
              {
                id: "d",
                text: "North Vietnamese regular army divisions",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Viet Cong",
                statement: "South Vietnamese guerrillas.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Viet Cong were South Vietnamese communist guerrilla forces fighting against the South Vietnamese government.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** South Vietnamese communist guerrilla forces",
          },
        },
        {
          id: "cieihis-u2-vn-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how French colonial rule contributed to the outbreak of the Vietnam War.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Colonial legacy",
                statement: "France to conflict.",
              },
            ],
            steps: [
              {
                reasoning:
                  "French colonial exploitation created resentment and fuelled the independence movement led by Ho Chi Minh's Viet Minh.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The Viet Minh's victory at Dien Bien Phu in 1954 forced France to withdraw.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The Geneva Accords divided Vietnam, creating rival North and South states that became the basis of the war.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Colonial rule → independence struggle → divided Vietnam",
          },
        },
        {
          id: "cieihis-u2-vn-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which best explains why the Geneva Accords failed to bring lasting peace in Vietnam?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The agreement was never signed by any of the parties",
              },
              {
                id: "b",
                text: "The United States immediately invaded North Vietnam",
              },
              {
                id: "c",
                text: "France refused to leave Vietnam after 1954",
              },
              {
                id: "d",
                text: "The division was intended to be temporary but both sides refused to compromise",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Geneva failure",
                statement: "Temporary division became permanent.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Geneva division was meant to be temporary, but South Vietnam refused nationwide elections and Cold War rivalry hardened the split into war.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** The division was intended to be temporary but both sides refused to compromise",
          },
        },
        {
          id: "cieihis-u2-vn-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) In which year did France lose the battle of Dien Bien Phu? (b) In which year did South Vietnam declare itself the Republic of Vietnam?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1954,
              },
              {
                label: "b",
                answer: 1955,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Vietnam turning points",
                statement: "1954-55.",
              },
            ],
            steps: [
              {
                reasoning:
                  "France was defeated at Dien Bien Phu in 1954, ending its war in Indochina.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "South Vietnam declared itself the Republic of Vietnam in 1955 under Ngo Dinh Diem.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1954, b) 1955",
          },
        },
        {
          id: "cieihis-u2-vn-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Assess the view that the domino theory was the main reason for US involvement in Vietnam.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Assessment",
                statement: "Balanced judgement.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Thesis: the domino theory — fear that communist victory in Vietnam would spread across Southeast Asia — drove US intervention.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Supporting evidence: US backed South Vietnam as part of containment, treating Vietnam as a crucial Cold War front.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Counter-argument: other factors — alliance commitments, credibility after the French defeat, domestic politics — also shaped US involvement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reasoned judgement weighing the domino theory against wider Cold War and geopolitical motives.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Domino theory was a major but not sole motive for US involvement",
          },
        },
        {
          id: "cieihis-u2-vn-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which European power colonised Vietnam before its independence struggle?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Portugal",
              },
              {
                id: "b",
                text: "The Netherlands",
              },
              {
                id: "c",
                text: "Britain",
              },
              {
                id: "d",
                text: "France",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "French Indochina",
                statement: "Colonial Vietnam.",
              },
            ],
            steps: [
              {
                reasoning:
                  "France colonised Vietnam as part of French Indochina until the Viet Minh victory of 1954.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** France",
          },
        },
        {
          id: "cieihis-u2-vn-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain why the division of Vietnam at the 17th parallel proved unstable.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Divided Vietnam",
                statement: "Unstable partition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The division was intended to be temporary, but no mechanism existed to reunify the country peacefully.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "South Vietnam under Diem refused to hold the nationwide elections the Accords called for.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Cold War rivalry turned the temporary partition into two hostile states backed by superpowers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Temporary division hardened into Cold War confrontation",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u2-vn-notes",
      title: "Vietnam origins — notes",
      summary:
        "French colonialism→Viet Minh→Geneva division→US intervention. Domino theory drove US involvement.",
      sections: [
        {
          heading: "Key idea",
          body: "Cold War ideology + colonial legacy created Vietnam conflict.",
        },
        {
          heading: "Geneva",
          body: "1954 division at 17th parallel — temporary became permanent.",
        },
      ],
    },
  ],
};
