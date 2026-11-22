import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "his-u3-lesson-3-1",
  code: "3-1",
  title: "Nuclear Arms Race and Deterrence",
  goal: "I CAN explain the nuclear arms race, describe the doctrine of mutually assured destruction, and analyse crises like the Cuban Missile Crisis.",
  standards: ["Paper 1", "Paper 2", "Topic 7"],
  vocabulary: [
    {
      term: "Nuclear arms race",
      definition:
        "Competition between USA and USSR to build larger nuclear arsenals after 1945.",
    },
    {
      term: "Mutually Assured Destruction (MAD)",
      definition:
        "Doctrine that full-scale nuclear war would destroy both sides, deterring attack.",
    },
    {
      term: "ICBM",
      definition:
        "Intercontinental ballistic missile — could deliver nuclear warheads across continents in minutes.",
    },
    {
      term: "Cuban Missile Crisis",
      definition:
        "October 1962 confrontation when USSR placed missiles in Cuba; 13 days brought the world closest to nuclear war.",
    },
    {
      term: "Hotline",
      definition:
        "Direct US–Soviet communications line established after 1962 to prevent miscalculation.",
    },
    {
      term: "Deterrence",
      definition: "Preventing attack by threatening unacceptable retaliation.",
    },
  ],
  concepts: [
    {
      id: "his-u3-nuclear-arms",
      title: "The nuclear arms race",
      skill:
        "Explain the development of nuclear weapons and the logic of deterrence.",
      lesson: {
        sections: [
          {
            heading: "From monopoly to race",
            body: "The USA alone possessed atomic weapons in 1945; the USSR tested its first bomb in 1949. Both then raced to build hydrogen bombs (thermonuclear, 1950s), missile delivery systems and submarines. By the 1960s each side had thousands of warheads — enough to destroy civilisation.",
          },
          {
            heading: "MAD and deterrence",
            body: "Mutually Assured Destruction made full-scale nuclear war suicidal: no first strike could succeed without retaliation. This paradoxically stabilised the superpower rivalry — 'peace through terror'. Arms control followed: Partial Test Ban Treaty (1963) banned atmospheric tests; later SALT treaties limited missiles.",
          },
          {
            heading: "The arms race's costs",
            body: "Massive military spending diverted resources from social needs; nuclear proliferation spread fears globally; the doctrine of massive retaliation risked automatic escalation; and arsenals remained vulnerable to accidents or miscalculation.",
          },
        ],
        keyFormulas: [
          {
            name: "Arms race",
            statement:
              "USA monopoly 1945 → USSR bomb 1949 → H-bomb 1950s → ICBMs",
          },
          {
            name: "MAD",
            statement:
              "Mutual vulnerability = deterrence = stability (theoretically)",
          },
        ],
        workedExample: {
          problem:
            "Why did the nuclear arms race not produce direct war between the superpowers?",
          solution:
            "MAD made any attack suicidal — both sides could retaliate decisively. Deterrence replaced open conflict, though it created risks of accidents and proxy wars.",
        },
      },
      questions: [
        {
          id: "his-u3-nq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Mutually Assured Destruction (MAD) refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A disarmament conference" },
              { id: "b", text: "A missile defence system" },
              {
                id: "c",
                text: "The doctrine that nuclear war would destroy both sides",
              },
              { id: "d", text: "A treaty banning nuclear weapons" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MAD",
                statement: "Mutual vulnerability deterring nuclear attack.",
              },
            ],
            steps: [
              {
                reasoning:
                  "MAD = both sides could retaliate → no rational first strike.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Mutual destruction deters war",
            commonErrors: [
              "Confusing with actual destruction vs the deterrent doctrine.",
            ],
          },
        },
        {
          id: "his-u3-nq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "State two consequences of the nuclear arms race.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Arms race consequences",
                statement:
                  "Military spending, proliferation fears, deterrence stability.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Massive military budgets diverted resources from social programmes in both blocs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Nuclear weapons spread beyond superpowers (UK, France, China, later others).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Deterrence paradoxically prevented direct superpower war.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Resource drain + proliferation; but deterrence prevented direct war.",
            commonErrors: ["Only citing negative consequences."],
          },
        },
        {
          id: "his-u3-nq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the Partial Test Ban Treaty (1963) reflected changing nuclear policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Test Ban Treaty",
                statement:
                  "First arms control agreement; limited testing environment.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Banned nuclear tests in atmosphere, space and underwater — reducing radiation and detection ease.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Followed public fear after atmospheric tests (e.g. strontium-90 in milk).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Showed both sides could cooperate on limited arms control.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: first step in managing the nuclear danger.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Banned atmospheric tests; showed limited cooperation possible.",
            commonErrors: [
              "Describing it as full disarmament — it was partial.",
            ],
          },
        },
        {
          id: "his-u3-nq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the Cuban Missile Crisis (October 1962).",
          parts: [
            {
              label: "a",
              prompt: "Describe the events of the crisis.",
              marks: 3,
            },
            {
              label: "b",
              prompt:
                "Explain why it brought the world closest to nuclear war.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate its consequences for Cold War relations.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cuban Missile Crisis",
                statement:
                  "13 days of confrontation; brinkmanship resolved by negotiation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "US discovered Soviet missiles in Cuba (Oct 1962); Kennedy announced quarantine.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "13 days of brinkmanship — ships approaching Cuba, war preparations on both sides.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Resolved: USSR withdrew missiles; US secretly promised not to invade Cuba and to remove Turkish missiles.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Missiles could reach US cities; both leaders under pressure; risk of miscalculation or local commander action.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "U-2 shootdown killed a US pilot — nearly triggered escalation.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Consequences: hotline established (1963); Limited Test Ban Treaty; both sides sought 'peaceful coexistence'.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Demonstrated need for direct communication and arms control.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Also intensified nuclear race — both sides expanded arsenals after near-miss.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) Missile discovery → quarantine → negotiated withdrawal. (b) Missiles near US + miscalculation risk. (c) Hotline + test ban; also arms expansion.",
            commonErrors: [
              "Treating it as resolved by force rather than back-channel negotiation.",
            ],
          },
        },
        {
          id: "his-u3-nq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The USA tested its first atomic bomb in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1953" },
              { id: "b", text: "1941" },
              { id: "c", text: "1949" },
              { id: "d", text: "1945" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "First atomic test",
                statement: "The USA tested its first atomic bomb in 1945.",
              },
            ],
            steps: [
              {
                reasoning: "The Trinity test occurred in 1945.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** 1945",
            commonErrors: ["Confusing it with the USSR's first test (1949)."],
          },
        },
        {
          id: "his-u3-nq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Partial Test Ban Treaty (1963) banned nuclear tests in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only the Pacific Ocean" },
              { id: "b", text: "The atmosphere, outer space and underwater" },
              { id: "c", text: "All environments including underground" },
              { id: "d", text: "Only underground facilities" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Partial Test Ban Treaty",
                statement:
                  "Banned tests in atmosphere, space and underwater — not underground.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The treaty banned atmospheric, space and underwater tests but allowed underground ones.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Atmosphere, space and underwater",
            commonErrors: ["Thinking it banned all nuclear testing."],
          },
        },
        {
          id: "his-u3-nq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "ICBM stands for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Intermediate coastal bombardment missile" },
              { id: "b", text: "Immediate crisis management bureau" },
              { id: "c", text: "International Committee for Missile Ban" },
              { id: "d", text: "Intercontinental ballistic missile" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ICBM",
                statement:
                  "Intercontinental ballistic missile capable of delivering warheads across continents.",
              },
            ],
            steps: [
              {
                reasoning: "ICBM = intercontinental ballistic missile.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Intercontinental ballistic missile",
            commonErrors: ["Misreading the acronym."],
          },
        },
        {
          id: "his-u3-nq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The direct hotline between the USA and USSR was established after:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Prague Spring" },
              { id: "b", text: "The Cuban Missile Crisis" },
              { id: "c", text: "The Berlin Blockade" },
              { id: "d", text: "The Korean War" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Hotline",
                statement:
                  "Direct US–Soviet communications line set up in 1963 after the Cuban Missile Crisis.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The crisis showed the need for instant communication to prevent miscalculation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The Cuban Missile Crisis",
            commonErrors: ["Confusing it with earlier or later crises."],
          },
        },
        {
          id: "his-u3-nq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which best explains why MAD produced a form of stability between the superpowers?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Mutual vulnerability made any first strike suicidal, deterring direct nuclear war",
              },
              {
                id: "b",
                text: "It encouraged both sides to fight proxy wars instead",
              },
              {
                id: "c",
                text: "It eliminated the need for conventional armies",
              },
              { id: "d", text: "It forced immediate disarmament" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MAD logic",
                statement:
                  "Mutual vulnerability deters nuclear attack — no rational first strike.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Because both sides could retaliate decisively, no rational leader would launch a first strike.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Mutual vulnerability made first strike suicidal",
            commonErrors: [
              "Thinking MAD meant disarmament rather than deterrence.",
            ],
          },
        },
        {
          id: "his-u3-nq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Give the year for each event: (a) the USA tested its first atomic bomb; (b) the USSR tested its first bomb; (c) the Partial Test Ban Treaty; (d) the Cuban Missile Crisis.",
          response: {
            type: "numeric",
            parts: [
              { label: "US first atomic test", answer: 1945 },
              { label: "USSR first bomb", answer: 1949 },
              { label: "Partial Test Ban Treaty", answer: 1963 },
              { label: "Cuban Missile Crisis", answer: 1962 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Nuclear chronology",
                statement: "1945 → 1949 → 1962 → 1963.",
              },
            ],
            steps: [
              {
                reasoning: "US tested 1945.",
                working: "1945",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "USSR tested 1949.",
                working: "1949",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Partial Test Ban Treaty 1963.",
                working: "1963",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cuban Missile Crisis October 1962.",
                working: "1962",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1945; 1949; 1963; 1962",
            commonErrors: [
              "Confusing the crisis (1962) with the treaty (1963).",
            ],
          },
        },
        {
          id: "his-u3-nq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the USA's first atomic test; (b) the USSR's first atomic test; (c) the Partial Test Ban Treaty.",
          response: {
            type: "numeric",
            parts: [
              { label: "US first test", answer: 1945 },
              { label: "USSR first test", answer: 1949 },
              { label: "Partial Test Ban Treaty", answer: 1963 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Nuclear chronology",
                statement: "1945 → 1949 → 1963.",
              },
            ],
            steps: [
              {
                reasoning: "US tested 1945.",
                working: "1945",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "USSR tested 1949.",
                working: "1949",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Test Ban Treaty 1963.",
                working: "1963",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1945; 1949; 1963",
            commonErrors: ["Confusing US and USSR test dates."],
          },
        },
        {
          id: "his-u3-nq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Rank these events from earliest to latest (1 = earliest): the USA's atomic monopoly, the USSR's first bomb, the development of H-bombs and ICBMs, the Cuban Missile Crisis, the Partial Test Ban Treaty and hotline.",
          response: {
            type: "numeric",
            parts: [
              { label: "US atomic monopoly", answer: 1 },
              { label: "USSR first bomb", answer: 2 },
              { label: "H-bombs and ICBMs", answer: 3 },
              { label: "Cuban Missile Crisis", answer: 4 },
              { label: "Test Ban and hotline", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Nuclear chronology",
                statement: "1945 → 1949 → 1950s → 1962 → 1963.",
              },
            ],
            steps: [
              {
                reasoning: "US monopoly 1945 — earliest.",
                working: "1945",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "USSR bomb 1949 — second.",
                working: "1949",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "H-bombs/ICBMs in 1950s — third.",
                working: "1950s",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cuban crisis 1962 — fourth.",
                working: "1962",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Test ban and hotline 1963 — latest.",
                working: "1963",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Monopoly 1, USSR bomb 2, H-bombs/ICBMs 3, Cuban crisis 4, test ban 5",
            commonErrors: ["Placing the crisis after the treaty."],
          },
        },
        {
          id: "his-u3-nq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Cuban Missile Crisis; (b) the direct hotline was established; (c) the Partial Test Ban Treaty.",
          response: {
            type: "numeric",
            parts: [
              { label: "Cuban Missile Crisis", answer: 1962 },
              { label: "Hotline established", answer: 1963 },
              { label: "Partial Test Ban Treaty", answer: 1963 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Nuclear chronology",
                statement: "Crisis 1962; hotline and treaty 1963.",
              },
            ],
            steps: [
              {
                reasoning: "Cuban crisis October 1962.",
                working: "1962",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Hotline established 1963.",
                working: "1963",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Partial Test Ban Treaty 1963.",
                working: "1963",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1962; 1963; 1963",
            commonErrors: ["Confusing the crisis and treaty years."],
          },
        },
        {
          id: "his-u3-nq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate: (a) the number of years between the USA's atomic monopoly (1945) and the USSR's first bomb (1949); (b) between the Cuban Missile Crisis (1962) and the Partial Test Ban Treaty (1963); (c) between the USSR's first bomb (1949) and the crisis (1962).",
          response: {
            type: "numeric",
            parts: [
              { label: "Monopoly to USSR bomb", answer: 4 },
              { label: "Crisis to treaty", answer: 1 },
              { label: "USSR bomb to crisis", answer: 13 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Interval calculation",
                statement: "Subtract earlier year from later year.",
              },
            ],
            steps: [
              {
                reasoning: "$1949 - 1945$.",
                working: "1949 - 1945 = 4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$1963 - 1962$.",
                working: "1963 - 1962 = 1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$1962 - 1949$.",
                working: "1962 - 1949 = 13",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "4; 1; 13 years",
            commonErrors: ["Arithmetic slips in subtraction."],
          },
        },
        {
          id: "his-u3-nq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the logic of mutually assured destruction (MAD).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MAD",
                statement:
                  "Mutual vulnerability deters nuclear attack — no rational first strike.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Both sides possessed enough nuclear weapons to destroy the other completely.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Any first strike would be met with devastating retaliation — making attack irrational.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This paradoxically stabilised the rivalry — 'peace through terror'.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: deterrence replaced open conflict, though with risks of accident or miscalculation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Mutual vulnerability made nuclear war suicidal, deterring attack while creating risks.",
            commonErrors: [
              "Treating MAD as disarmament rather than deterrence.",
            ],
          },
        },
        {
          id: "his-u3-nq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the nuclear arms race and its consequences.",
          parts: [
            {
              label: "a",
              prompt:
                "Describe the development of nuclear arsenals after 1945.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain the doctrine of mutually assured destruction.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate the costs and risks of the arms race.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Arms race",
                statement:
                  "USA monopoly → USSR bomb → H-bombs → ICBMs → deterrence and arms control.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "USA monopoly 1945; USSR bomb 1949; H-bombs and ICBMs in the 1950s.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "By the 1960s each side had thousands of warheads.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "MAD: mutual vulnerability made any first strike suicidal.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Deterrence paradoxically stabilised superpower rivalry — 'peace through terror'.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Arms control followed: Partial Test Ban Treaty 1963, later SALT.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Costs: massive military spending diverted resources from social needs.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Risks: accidents, miscalculation (Cuban crisis), proliferation to other states.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Weighs deterrence stability against costs and dangers.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Monopoly → arms race → arsenals. (b) MAD deters war. (c) Stability but at huge cost and risk.",
            commonErrors: [
              "Ignoring the risks of accident and miscalculation.",
            ],
          },
        },
      ],
    },
    {
      id: "his-u3-crises",
      title: "Proxy Conflicts and Crises",
      skill:
        "Describe proxy wars and superpower confrontations, including Vietnam and the Prague Spring, and analyse the doctrine of peaceful coexistence.",
      lesson: {
        sections: [
          {
            heading: "Vietnam War",
            body: "After French defeat (1954), Vietnam divided at the 17th parallel. North (communist) vs South (US-backed). The US escalated from advisers (1961) to combat troops (1965), fighting a guerrilla war against Viet Cong and North Vietnamese forces. Despite massive bombing, the US withdrew (1973) and Saigon fell (1975). ~58,000 US dead, millions of Vietnamese.",
          },
          {
            heading: "Prague Spring (1968)",
            body: "Czechoslovakia's Alexander Dubček introduced 'socialism with a human face' — liberalisation and press freedom. Soviet-led Warsaw Pact forces invaded (August 1968), crushing the reform movement. Brezhnev declared the 'Brezhnev Doctrine': USSR would intervene to preserve communism in its sphere — chilling reform hopes across Eastern Europe.",
          },
          {
            heading: "Peaceful coexistence and détente",
            body: "Despite rivalry, both sides sought limited cooperation: Khrushchev's 'peaceful coexistence', the 1975 Helsinki Accords (recognising post-war borders + human rights), SALT treaties limiting missiles, and Ostpolitik (West German engagement). Détente reduced direct confrontation but rivalry continued in proxies and arms.",
          },
        ],
        keyFormulas: [
          {
            name: "Vietnam",
            statement:
              "US escalation 1965 → withdrawal 1973 → Saigon falls 1975",
          },
          {
            name: "Prague Spring",
            statement: "1968 liberalisation crushed by Soviet invasion",
          },
          { name: "Détente", statement: "Helsinki 1975 + SALT + Ostpolitik" },
        ],
        workedExample: {
          problem:
            "Why did the US fail in Vietnam despite overwhelming military power?",
          solution:
            "The Viet Cong's guerrilla tactics, terrain and popular support neutralised US firepower; the war lacked clear objectives and domestic support collapsed — a lesson in asymmetric warfare.",
        },
      },
      questions: [
        {
          id: "his-u3-vq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Prague Spring (1968) refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The fall of the Berlin Wall" },
              {
                id: "b",
                text: "Czechoslovakia's liberalisation crushed by Soviet invasion",
              },
              { id: "c", text: "The start of the Vietnam War" },
              { id: "d", text: "A US invasion of Cuba" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Prague Spring",
                statement:
                  "1968 reform movement crushed by Warsaw Pact invasion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Prague Spring = Czechoslovak liberalisation crushed by Soviets.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Czechoslovak liberalisation crushed",
            commonErrors: ["Confusing with other 1968 events."],
          },
        },
        {
          id: "his-u3-vq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "State two reasons for US failure in Vietnam.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Vietnam failure",
                statement: "Guerrilla tactics, terrain, domestic opposition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Viet Cong guerrilla tactics and terrain neutralised US conventional superiority.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Growing domestic opposition (anti-war movement) undermined political will.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both factors identified.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Guerrilla warfare + domestic opposition.",
            commonErrors: ["Blaming only military tactics, ignoring politics."],
          },
        },
        {
          id: "his-u3-vq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the significance of the Helsinki Accords (1975).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Helsinki Accords",
                statement:
                  "Recognised borders + human rights; détente milestone.",
              },
            ],
            steps: [
              {
                reasoning:
                  "West recognised Soviet post-war borders in exchange for Soviet commitment to human rights.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Human rights clauses gave dissidents a legal framework — later used against communism.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Embodied détente — reduced East-West tension temporarily.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: diplomatic milestone with long-term consequences.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Border recognition + human rights commitments; détente milestone.",
            commonErrors: [
              "Ignoring the human rights dimension's later significance.",
            ],
          },
        },
        {
          id: "his-u3-vq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the Vietnam War's impact on the Cold War and on the USA.",
          parts: [
            {
              label: "a",
              prompt: "Describe the course of US involvement (1961–1975).",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain why the war became so divisive domestically.",
              marks: 2,
            },
            {
              label: "c",
              prompt: "Evaluate its consequences for Cold War strategy.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vietnam impact",
                statement:
                  "Military defeat, domestic division, strategic reassessment.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Advisers (1961) → combat troops (1965) → escalation (bombing North, troop surge to 500,000+).",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Guerrilla war against Viet Cong + North Vietnamese regulars; Tet Offensive (1968) turned public opinion.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Vietnamisation + withdrawal (1973); Saigon fell 1975.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Anti-war protests, draft resistance, media coverage (e.g. CBS) shattered consensus.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "'Credibility gap' between government claims and reality.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Consequence: US shifted to 'Vietnam syndrome' — reluctance to intervene; containment continued elsewhere.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Communist victory emboldened USSR and affected later decisions (e.g. Afghanistan caution).",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Showed limits of US power — redefined Cold War strategy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Escalation → Tet → withdrawal → fall. (b) Protests + credibility gap. (c) Vietnam syndrome; reassessed intervention.",
            commonErrors: [
              "Treating it as only a military defeat — domestic impact was profound.",
            ],
          },
        },
        {
          id: "his-u3-vq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "After 1954, Vietnam was divided at:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The DMZ at the Yalu" },
              { id: "b", text: "The Mekong River" },
              { id: "c", text: "The 38th parallel" },
              { id: "d", text: "The 17th parallel" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Vietnam division",
                statement:
                  "Vietnam divided at the 17th parallel after the 1954 French defeat.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The 17th parallel separated communist North from US-backed South.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** The 17th parallel",
            commonErrors: ["Confusing with Korea's 38th parallel."],
          },
        },
        {
          id: "his-u3-vq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Tet Offensive (1968) was significant because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Won the war for North Vietnam" },
              { id: "b", text: "Ended French involvement" },
              {
                id: "c",
                text: "Turned US public opinion decisively against the war",
              },
              { id: "d", text: "Destroyed the US air force" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Tet Offensive",
                statement:
                  "Massive 1968 attack shattered the 'victory' narrative and turned US opinion against the war.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Tet was a military setback for the communists but a political victory — it destroyed US confidence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Turned US public opinion against the war",
            commonErrors: [
              "Thinking Tet was a military victory for North Vietnam.",
            ],
          },
        },
        {
          id: "his-u3-vq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Alexander Dubček led:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Hungarian uprising of 1956" },
              { id: "b", text: "The Vietnamese resistance" },
              { id: "c", text: "The Polish Solidarity movement" },
              {
                id: "d",
                text: "Czechoslovakia's 'socialism with a human face' reform movement",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Prague Spring",
                statement:
                  "Dubček led Czechoslovak liberalisation in 1968 before Soviet invasion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Dubček headed the reform movement known as the Prague Spring.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** Czechoslovakia's liberalisation",
            commonErrors: [
              "Confusing him with leaders of other 1968 movements.",
            ],
          },
        },
        {
          id: "his-u3-vq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The 'Brezhnev Doctrine' stated that:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The USSR would intervene to preserve communism in its sphere of influence",
              },
              {
                id: "b",
                text: "Eastern Europe could leave the Warsaw Pact freely",
              },
              { id: "c", text: "The USSR would reunite Germany" },
              {
                id: "d",
                text: "The USSR would never intervene in Eastern Europe",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Brezhnev Doctrine",
                statement:
                  "USSR reserved the right to intervene in satellite states to preserve communism.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The doctrine justified Soviet intervention to maintain communist control in Eastern Europe.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** USSR would intervene to preserve communism",
            commonErrors: [
              "Thinking it promoted reform rather than crushing it.",
            ],
          },
        },
        {
          id: "his-u3-vq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which best explains the US failure in Vietnam?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Guerrilla tactics and terrain neutralised US firepower, while domestic opposition eroded political will",
              },
              { id: "b", text: "The US had insufficient troops" },
              { id: "c", text: "Vietnam had nuclear weapons" },
              { id: "d", text: "The USSR directly fought US forces" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Vietnam failure",
                statement:
                  "Asymmetric guerrilla warfare + terrain + collapsing domestic support defeated US strategy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Viet Cong's guerrilla tactics and terrain negated US conventional superiority; anti-war sentiment grew.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Guerrilla tactics + domestic opposition",
            commonErrors: ["Blaming only military tactics, ignoring politics."],
          },
        },
        {
          id: "his-u3-vq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Give the year for each event: (a) Vietnam was divided at the 17th parallel; (b) US combat troops entered Vietnam; (c) Saigon fell; (d) the Helsinki Accords were signed.",
          response: {
            type: "numeric",
            parts: [
              { label: "Vietnam divided", answer: 1954 },
              { label: "US combat troops", answer: 1965 },
              { label: "Saigon falls", answer: 1975 },
              { label: "Helsinki Accords", answer: 1975 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Vietnam and détente chronology",
                statement: "1954 → 1965 → 1975 → 1975.",
              },
            ],
            steps: [
              {
                reasoning: "Division 1954.",
                working: "1954",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "US combat troops 1965.",
                working: "1965",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Saigon fell April 1975.",
                working: "1975",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Helsinki signed August 1975.",
                working: "1975",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1954; 1965; 1975; 1975",
            commonErrors: [
              "Confusing Saigon's fall with the US withdrawal (1973).",
            ],
          },
        },
        {
          id: "his-u3-vq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) Vietnam was divided; (b) the US introduced combat troops; (c) Saigon fell to the communists.",
          response: {
            type: "numeric",
            parts: [
              { label: "Vietnam divided", answer: 1954 },
              { label: "US combat troops", answer: 1965 },
              { label: "Saigon falls", answer: 1975 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Vietnam chronology",
                statement: "1954 → 1965 → 1975.",
              },
            ],
            steps: [
              {
                reasoning: "Division 1954.",
                working: "1954",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Combat troops 1965.",
                working: "1965",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Saigon fell 1975.",
                working: "1975",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1954; 1965; 1975",
            commonErrors: [
              "Confusing withdrawal (1973) with the fall of Saigon (1975).",
            ],
          },
        },
        {
          id: "his-u3-vq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Rank these events from earliest to latest (1 = earliest): Vietnam divided at the 17th parallel, US combat troops enter Vietnam, the Tet Offensive and Prague Spring, US withdrawal, Saigon falls.",
          response: {
            type: "numeric",
            parts: [
              { label: "Vietnam divided", answer: 1 },
              { label: "US combat troops", answer: 2 },
              { label: "Tet and Prague Spring", answer: 3 },
              { label: "US withdrawal", answer: 4 },
              { label: "Saigon falls", answer: 5 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Cold War crises chronology",
                statement: "1954 → 1965 → 1968 → 1973 → 1975.",
              },
            ],
            steps: [
              {
                reasoning: "Division 1954 — earliest.",
                working: "1954",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "US troops 1965 — second.",
                working: "1965",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Tet and Prague Spring 1968 — third.",
                working: "1968",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "US withdrawal 1973 — fourth.",
                working: "1973",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Saigon falls 1975 — latest.",
                working: "1975",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Division 1, troops 2, 1968 crises 3, withdrawal 4, Saigon 5",
            commonErrors: ["Placing Saigon's fall before the US withdrawal."],
          },
        },
        {
          id: "his-u3-vq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Prague Spring was crushed by Soviet invasion; (b) the US withdrew from Vietnam; (c) the Helsinki Accords were signed.",
          response: {
            type: "numeric",
            parts: [
              { label: "Prague Spring crushed", answer: 1968 },
              { label: "US withdrawal", answer: 1973 },
              { label: "Helsinki Accords", answer: 1975 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Détente chronology",
                statement: "1968 → 1973 → 1975.",
              },
            ],
            steps: [
              {
                reasoning: "Soviet invasion August 1968.",
                working: "1968",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "US withdrawal 1973.",
                working: "1973",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Helsinki signed 1975.",
                working: "1975",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1968; 1973; 1975",
            commonErrors: [
              "Confusing the Prague Spring with the Hungarian uprising (1956).",
            ],
          },
        },
        {
          id: "his-u3-vq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate: (a) the number of years between Vietnam's division (1954) and the fall of Saigon (1975); (b) between US combat troops (1965) and US withdrawal (1973); (c) between the Tet Offensive (1968) and Saigon's fall (1975).",
          response: {
            type: "numeric",
            parts: [
              { label: "Division to Saigon", answer: 21 },
              { label: "Troops to withdrawal", answer: 8 },
              { label: "Tet to Saigon", answer: 7 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "method",
                name: "Interval calculation",
                statement: "Subtract earlier year from later year.",
              },
            ],
            steps: [
              {
                reasoning: "$1975 - 1954$.",
                working: "1975 - 1954 = 21",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$1973 - 1965$.",
                working: "1973 - 1965 = 8",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$1975 - 1968$.",
                working: "1975 - 1968 = 7",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "21; 8; 7 years",
            commonErrors: ["Arithmetic slips in subtraction."],
          },
        },
        {
          id: "his-u3-vq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why détente emerged between the superpowers despite continued rivalry.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Détente",
                statement:
                  "Both sides sought limited cooperation — peaceful coexistence, Helsinki, SALT, Ostpolitik.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Mutual nuclear vulnerability made direct confrontation suicidal — incentive to reduce tension.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Both sides sought arms control (SALT) and diplomatic engagement (Helsinki, Ostpolitik).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Détente reduced direct confrontation but rivalry continued in proxies and arms.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: limited cooperation coexisted with strategic competition.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Nuclear risk + mutual interest in stability produced limited cooperation despite rivalry.",
            commonErrors: [
              "Treating détente as an end to the Cold War rather than a phase of it.",
            ],
          },
        },
        {
          id: "his-u3-vq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the significance of the Prague Spring and the Brezhnev Doctrine.",
          parts: [
            {
              label: "a",
              prompt: "Describe the events of the Prague Spring (1968).",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain the Soviet response and the Brezhnev Doctrine.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate the consequences for reform movements in Eastern Europe.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Prague Spring",
                statement:
                  "1968 liberalisation crushed by invasion; Brezhnev Doctrine justified intervention.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Dubček introduced 'socialism with a human face' — press freedom and liberalisation.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Soviet-led Warsaw Pact forces invaded in August 1968, crushing the reforms.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "USSR saw reform as a threat to communist control in its sphere.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The Brezhnev Doctrine declared USSR would intervene to preserve communism.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The invasion demonstrated the limits of 'socialism with a human face'.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Chilled reform hopes across Eastern Europe for two decades.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Showed the USSR would use force to maintain its sphere — 'rollback' was impossible.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Weighs the reform's ideals against the reality of Soviet control.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Liberalisation → invasion. (b) Brezhnev Doctrine justified intervention. (c) Reform hopes crushed; Soviet control reaffirmed.",
            commonErrors: [
              "Treating the Prague Spring as a successful reform.",
            ],
          },
        },
      ],
    },
  ],
};
