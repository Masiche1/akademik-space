import type { Lesson } from "../../../types.ts";

export const lesson343: Lesson = {
  id: "cieihis-u2-lesson-2-3",
  code: "2-3",
  title: "Vietnam War: Opposition and Withdrawal",
  goal: "I CAN explain domestic opposition, media influence and US withdrawal.",
  standards: ["Cambridge IGCSE History 0470", "Paper 1: Vietnam opposition"],

  vocabulary: [
    { term: "Anti-war movement", definition: "Protests against Vietnam War." },
    {
      term: "My Lai massacre",
      definition: "1968 US massacre of Vietnamese civilians.",
    },
    {
      term: "Vietnam syndrome",
      definition: "US reluctance to intervene militarily.",
    },
    {
      term: "Paris Peace Accords",
      definition: "1973 agreement ending US involvement.",
    },
    {
      term: "Fall of Saigon",
      definition: "1975 communist victory in South Vietnam.",
    },
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
          solution:
            "Media coverage of atrocities + high casualties + draft inequity + moral concerns → growing opposition.",
        },
      },
      questions: [
        {
          id: "cieihis-u2-op-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was the anti-war movement?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A peace treaty",
              },
              {
                id: "b",
                text: "A type of weapon",
              },
              {
                id: "c",
                text: "A military strategy",
              },
              {
                id: "d",
                text: "Protests against Vietnam War",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Anti-war movement",
                statement: "War protests.",
              },
            ],
            steps: [
              {
                reasoning: "Anti-war = protests against Vietnam War.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "War protests",
          },
        },
        {
          id: "cieihis-u2-op-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the My Lai massacre?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "My Lai",
                statement: "1968 civilian massacre.",
              },
            ],
            steps: [
              {
                reasoning: "1968 US massacre of Vietnamese civilians.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fuelled anti-war sentiment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "1968 civilian massacre",
          },
        },
        {
          id: "cieihis-u2-op-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "What was the Paris Peace Accords?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Paris Accords",
                statement: "1973 withdrawal.",
              },
            ],
            steps: [
              {
                reasoning: "1973 agreement ending US involvement.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "US troops withdrew; South Vietnam left to fight.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "North Vietnam continued fighting.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1973 US withdrawal",
          },
        },
        {
          id: "cieihis-u2-op-q4",
          difficulty: "core",
          totalMarks: 8,
          stem: "(a) Define anti-war movement, My Lai massacre, Vietnam syndrome, Paris Peace Accords, fall of Saigon, draft. (b) What was anti-war movement? (c) What was My Lai? (d) What was Paris Peace Accords? (e) When did Saigon fall? (f) What was Vietnam syndrome? (g) Why did public opinion turn against war? (h) Evaluate whether Vietnam War was a US defeat.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "technique",
                name: "Vietnam opposition",
                statement: "Protests, withdrawal.",
              },
            ],
            steps: [
              {
                reasoning: "(a) All six definitions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(b) War protests.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(c) 1968 civilian massacre.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(d) 1973 US withdrawal.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(e) 1975.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(f) US military reluctance.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "(g) Media, casualties, draft, morality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "(h) Balanced evaluation — military/political defeat.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Vietnam opposition and withdrawal.",
          },
        },
        {
          id: "cieihis-u2-op-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year were the Paris Peace Accords signed, ending direct US involvement in Vietnam?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "1954",
              },
              {
                id: "b",
                text: "1975",
              },
              {
                id: "c",
                text: "1968",
              },
              {
                id: "d",
                text: "1973",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Paris Peace Accords",
                statement: "1973 withdrawal.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Paris Peace Accords were signed in 1973, ending direct US military involvement in Vietnam.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** 1973",
          },
        },
        {
          id: "cieihis-u2-op-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did Saigon fall to North Vietnamese forces?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1975,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Fall of Saigon",
                statement: "1975.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Saigon fell in 1975, ending the Vietnam War with a communist victory.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1975",
          },
        },
        {
          id: "cieihis-u2-op-q7",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the draft in the context of the Vietnam War, and why did it fuel opposition?",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Draft",
                statement: "Compulsory military service.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The draft was compulsory military service that conscripted American men to fight in Vietnam.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It seemed unfair — poorer men were drafted while wealthy students received deferments — generating widespread resentment.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "Compulsory service + perceived inequity",
          },
        },
        {
          id: "cieihis-u2-op-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which 1968 event shocked the American public and fuelled the anti-war movement?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The fall of Saigon",
              },
              {
                id: "b",
                text: "The signing of the Paris Peace Accords",
              },
              {
                id: "c",
                text: "The My Lai massacre",
              },
              {
                id: "d",
                text: "The Gulf of Tonkin incident",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "My Lai",
                statement: "1968 civilian massacre.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The My Lai massacre of 1968, when US soldiers killed Vietnamese civilians, horrified the American public.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(b)** The My Lai massacre",
          },
        },
        {
          id: "cieihis-u2-op-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "(a) In which year was the My Lai massacre committed? (b) In which year were the Paris Peace Accords signed?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1968,
              },
              {
                label: "b",
                answer: 1973,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Opposition dates",
                statement: "1968-73.",
              },
            ],
            steps: [
              {
                reasoning: "The My Lai massacre occurred in 1968.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "The Paris Peace Accords were signed in 1973.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1968, b) 1973",
          },
        },
        {
          id: "cieihis-u2-op-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was the 'Vietnam syndrome'?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "US reluctance to intervene militarily abroad after Vietnam",
              },
              {
                id: "b",
                text: "A psychological condition suffered by Vietnam veterans",
              },
              {
                id: "c",
                text: "A North Vietnamese propaganda campaign",
              },
              {
                id: "d",
                text: "The policy of bombing Vietnam into submission",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vietnam syndrome",
                statement: "US military reluctance.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Vietnam syndrome describes the post-war US reluctance to intervene militarily abroad.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** US reluctance to intervene militarily abroad after Vietnam",
          },
        },
        {
          id: "cieihis-u2-op-q11",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two reasons why public opinion in the United States turned against the Vietnam War.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Anti-war sentiment",
                statement: "Public opinion collapse.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Media coverage of atrocities such as My Lai and high casualties contradicted official optimism.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The draft seemed unfair and moral concerns about the war grew, especially among students and civil rights leaders.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Growing protests and organised opposition made continued war politically unsustainable.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Media, casualties, draft inequity, morality",
          },
        },
        {
          id: "cieihis-u2-op-q12",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Which best explains why the US withdrew from Vietnam?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The Soviet Union ordered the US to withdraw",
              },
              {
                id: "b",
                text: "The US achieved all its military objectives",
              },
              {
                id: "c",
                text: "North Vietnam surrendered after the Tet Offensive",
              },
              {
                id: "d",
                text: "Domestic opposition and the cost of the war made continued involvement untenable",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "US withdrawal",
                statement: "Opposition forced exit.",
              },
            ],
            steps: [
              {
                reasoning:
                  "US withdrawal resulted from collapsing public support, rising casualties and the political cost of continuing an unwinnable war.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** Domestic opposition and the cost of the war made continued involvement untenable",
          },
        },
        {
          id: "cieihis-u2-op-q13",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "(a) In which year did the Paris Peace Accords end direct US military involvement? (b) In which year did Vietnam reunify under communist rule?",
          response: {
            type: "numeric",
            parts: [
              {
                label: "a",
                answer: 1973,
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
                name: "Withdrawal dates",
                statement: "1973-75.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Paris Peace Accords ended direct US involvement in 1973.",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Vietnam reunified under communist rule in 1975 after Saigon fell.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "a) 1973, b) 1975",
          },
        },
        {
          id: "cieihis-u2-op-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Assess whether the anti-war movement was the main reason for US withdrawal from Vietnam.",
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
                  "Thesis: domestic opposition — protests, media coverage, draft resistance — destroyed political support for the war.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Supporting evidence: opinion polls collapsed, Congress cut funding, withdrawal followed the Paris Accords.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Counter-argument: military stalemate, the Tet Offensive and the failure to defeat the communists were equally decisive; withdrawal was also a military reality.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reasoned judgement weighing domestic pressure against military impossibility.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Opposition was decisive but military stalemate made withdrawal inevitable",
          },
        },
        {
          id: "cieihis-u2-op-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What did the fall of Saigon in 1975 mark?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "US military intervention in Cambodia",
              },
              {
                id: "b",
                text: "A negotiated peace between North and South Vietnam",
              },
              {
                id: "c",
                text: "Communist victory and the reunification of Vietnam",
              },
              {
                id: "d",
                text: "The return of French rule to Vietnam",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fall of Saigon",
                statement: "1975 communist victory.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The fall of Saigon in 1975 marked communist victory and Vietnam's reunification under North Vietnamese rule.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer:
              "**(b)** Communist victory and the reunification of Vietnam",
          },
        },
        {
          id: "cieihis-u2-op-q16",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the long-term impact of the Vietnam War on US foreign policy.",
          response: {
            type: "open",
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Vietnam syndrome",
                statement: "Post-war US policy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The 'Vietnam syndrome' made the US reluctant to intervene militarily in foreign conflicts for years afterwards.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It prompted greater scrutiny of military intervention, 'body count' style metrics and credibility concerns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The war damaged US prestige and trust in government, shaping later debates over foreign policy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Vietnam syndrome constrained future US interventions",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieihis-u2-op-notes",
      title: "Vietnam opposition — notes",
      summary:
        "Anti-war protests + media coverage + My Lai → public opinion collapse → withdrawal → Saigon falls.",
      sections: [
        {
          heading: "Key idea",
          body: "Domestic opposition forced US withdrawal despite military superiority.",
        },
        {
          heading: "Vietnam syndrome",
          body: "US reluctance to intervene militarily after Vietnam failure.",
        },
      ],
    },
  ],
};
