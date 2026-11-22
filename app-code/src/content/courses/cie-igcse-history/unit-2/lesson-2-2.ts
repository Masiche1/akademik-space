import type { Lesson } from "../../../types.ts";

export const lesson342: Lesson = {
  id: "cieihis-u2-lesson-2-2",
  code: "2-2",
  title: "Vietnam War: Escalation and US Strategy",
  goal: "I CAN explain US escalation, military strategy and key battles.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: Vietnam escalation"],

  vocabulary: [
    { term: "Escalation", definition: "Increasing military involvement." },
    {
      term: "Gulf of Tonkin",
      definition: "1964 incident used to justify US escalation.",
    },
    {
      term: "Ho Chi Minh Trail",
      definition: "Supply route through Laos/Cambodia.",
    },
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
          solution:
            "Guerrilla warfare + difficult terrain + lack of local support + political constraints → conventional tactics failed.",
        },
      },
      questions: [
        {
          id: "cieihis-u2-es-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Gulf of Tonkin incident?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A peace treaty",
              },
              {
                id: "b",
                text: "A trade agreement",
              },
              {
                id: "c",
                text: "1964 incident used to justify US escalation",
              },
              {
                id: "d",
                text: "A natural disaster",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gulf of Tonkin",
                statement: "1964 escalation justification.",
              },
            ],
            steps: [
              {
                reasoning: "1964 incident led to US military escalation.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1964 escalation justification",
          },
        },
        {
          id: "cieihis-u2-es-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the Tet Offensive?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Tet Offensive",
                statement: "1968 communist offensive.",
              },
            ],
            steps: [
              {
                reasoning:
                  "1968 massive communist attack on South Vietnamese cities.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Military defeat but psychological victory for communists.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1968 communist offensive",
          },
        },
        {
          id: "cieihis-u2-es-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why did US struggle militarily in Vietnam?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Military challenges",
                statement: "Guerrilla warfare.",
              },
            ],
            steps: [
              {
                reasoning: "Viet Cong guerrilla tactics.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Difficult terrain + lack of local support.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Conventional tactics failed.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Guerrilla tactics + terrain",
          },
        },
        {
          id: "cieihis-u2-es-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define escalation, Gulf of Tonkin, Ho Chi Minh Trail, Tet Offensive, search and destroy, body count. (b) What was Gulf of Tonkin? (c) What was Tet Offensive? (d) What was Ho Chi Minh Trail? (e) Why did US escalate? (f) Why did US struggle militarily? (g) What was Agent Orange? (h) Evaluate whether US could have won Vietnam War.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Vietnam escalation",
                statement: "Strategy, battles.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) 1964 incident.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) 1968 offensive.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) Supply route through Laos/Cambodia.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) Containment + Gulf of Tonkin.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) Guerrilla tactics + terrain.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Chemical defoliant.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(h) Balanced evaluation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Vietnam War escalation.",
          },
        },
        {
          id: "cieihis-u2-es-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the Ho Chi Minh Trail?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A series of underground tunnels in Saigon",
              },
              {
                id: "b",
                text: "A railway built by the US in South Vietnam",
              },
              {
                id: "c",
                text: "A supply route through Laos and Cambodia used by North Vietnam",
              },
              {
                id: "d",
                text: "A mountain range in northern Vietnam",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ho Chi Minh Trail",
                statement: "Supply route.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Ho Chi Minh Trail was the supply route through Laos and Cambodia supplying North Vietnamese forces.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** A supply route through Laos and Cambodia used by North Vietnam",
          },
        },
        {
          id: "cieihis-u2-es-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did the Gulf of Tonkin incident occur?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1964,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Gulf of Tonkin",
                statement: "1964.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Gulf of Tonkin incident occurred in 1964 and led Congress to authorise military escalation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1964",
          },
        },
        {
          id: "cieihis-u2-es-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the US 'search and destroy' strategy in Vietnam?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Search and destroy",
                statement: "US military strategy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "US forces searched areas for Viet Cong and then destroyed them.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Success was measured by 'body count' rather than territory held.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Search for and destroy Viet Cong units",
          },
        },
        {
          id: "cieihis-u2-es-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which chemical defoliant was used extensively by the US military in Vietnam?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Agent Orange",
              },
              {
                id: "b",
                text: "DDT",
              },
              {
                id: "c",
                text: "Mustard gas",
              },
              {
                id: "d",
                text: "Napalm",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Agent Orange",
                statement: "Chemical defoliant.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Agent Orange was the chemical defoliant sprayed to destroy jungle cover used by the Viet Cong.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Agent Orange",
          },
        },
        {
          id: "cieihis-u2-es-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) In which year did the Tet Offensive occur? (b) Approximately how many US troops were fighting in Vietnam at the peak of escalation?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1968,
              },
              {
                label: "b",
                answer: 500000,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Escalation figures",
                statement: "1968, 500,000+.",
              },
            ],
            steps: [
              {
                reasoning: "The Tet Offensive took place in 1968.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "US troop numbers rose to over 500,000 at the height of the war.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1968, b) 500000",
          },
        },
        {
          id: "cieihis-u2-es-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why was the Tet Offensive considered a psychological victory for the communists?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It captured the city of Saigon permanently",
              },
              {
                id: "b",
                text: "It forced immediate US withdrawal from Vietnam",
              },
              {
                id: "c",
                text: "It destroyed the entire US air force",
              },
              {
                id: "d",
                text: "It proved to the American public that the US could not win the war",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Tet Offensive",
                statement: "Psychological turning point.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Although militarily repulsed, Tet showed the communists could strike anywhere and undermined US claims of progress, turning US opinion against the war.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** It proved to the American public that the US could not win the war",
          },
        },
        {
          id: "cieihis-u2-es-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two military challenges the US faced in fighting the Vietnam War.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Military challenges",
                statement: "Guerrilla warfare.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Viet Cong guerrilla tactics — hit-and-run attacks, tunnels and civilian support — defeated conventional US operations.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Difficult jungle terrain and the Ho Chi Minh Trail allowed North Vietnamese supplies to continue despite bombing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Lack of local support and political constraints limited US military options.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Guerrilla tactics + terrain + limited support",
          },
        },
        {
          id: "cieihis-u2-es-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which best explains why US military superiority failed to win the Vietnam War?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "North Vietnam had nuclear weapons",
              },
              {
                id: "b",
                text: "US troops were less well equipped than the Viet Cong",
              },
              {
                id: "c",
                text: "Guerrilla warfare, difficult terrain and political constraints neutralised conventional strength",
              },
              {
                id: "d",
                text: "The US refused to use air power against the communists",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "US failure",
                statement: "Conventional tactics vs guerrilla war.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Despite material superiority, US conventional tactics could not defeat guerrilla warfare in difficult terrain under political constraints.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** Guerrilla warfare, difficult terrain and political constraints neutralised conventional strength",
          },
        },
        {
          id: "cieihis-u2-es-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) In which year did the Gulf of Tonkin Resolution authorise US military action in Vietnam? (b) In which year did the Tet Offensive take place?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1964,
              },
              {
                label: "b",
                answer: 1968,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Escalation dates",
                statement: "1964-68.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Gulf of Tonkin Resolution was passed in 1964, authorising military escalation.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "The Tet Offensive occurred in 1968.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1964, b) 1968",
          },
        },
        {
          id: "cieihis-u2-es-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Assess whether the US could have won the Vietnam War militarily.",
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
                  "Thesis: US military superiority in firepower could not overcome guerrilla tactics, terrain and political constraints.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Supporting evidence: search and destroy failed, Tet showed communist resilience, Ho Chi Minh Trail kept supplies flowing.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Counter-argument: greater commitment — invasion of the North or unrestricted bombing — might have forced victory, though at huge cost.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reasoned judgement weighing military options against political and moral constraints.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Victory was militarily possible in theory but politically and morally unattainable",
          },
        },
        {
          id: "cieihis-u2-es-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was napalm as used in the Vietnam War?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A type of anti-aircraft missile",
              },
              {
                id: "b",
                text: "An incendiary jellied fuel weapon used for bombing",
              },
              {
                id: "c",
                text: "A chemical defoliant",
              },
              {
                id: "d",
                text: "A radio communications system",
              },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Napalm",
                statement: "Incendiary weapon.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Napalm was a jellied incendiary fuel dropped by US bombers, causing devastating fires in Vietnam.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(a)** An incendiary jellied fuel weapon used for bombing",
          },
        },
        {
          id: "cieihis-u2-es-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how media coverage affected the US war effort in Vietnam.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Media influence",
                statement: "War coverage effects.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Television brought images of combat and atrocities such as the Tet Offensive and My Lai into American homes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The gap between official optimism and media reality eroded public and political support for the war.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Declining support forced policy changes such as withdrawal and negotiations.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Media exposure eroded US support and forced withdrawal",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u2-es-notes",
      title: "Vietnam escalation — notes",
      summary:
        "Gulf of Tonkin→escalation→500K troops. Viet Cong guerrilla tactics frustrated US conventional warfare.",
      sections: [
        {
          heading: "Key idea",
          body: "US military superiority couldn't overcome guerrilla tactics and political constraints.",
        },
        {
          heading: "Tet Offensive",
          body: "1968 turning point — proved US couldn't win militarily.",
        },
      ],
    },
  ],
};
