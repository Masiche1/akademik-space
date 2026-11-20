module.exports = [
  {
    file: "lesson-1-1.ts", exportName: "lesson331",
    lesson: {
      id: "cieihis-u1-lesson-1-1", code: "1-1",
      title: "The Cold War: Origins and Superpower Rivalry",
      goal: "I CAN explain the causes and nature of the Cold War.",
      standards: ["Cambridge IGCSE History 0470", "Paper 1: The Cold War"],
      vocabulary: [
        { term: "Cold War", definition: "Ideological/political rivalry between USA and USSR without direct war." },
        { term: "Capitalism", definition: "Economic system based on private ownership and free markets." },
        { term: "Communism", definition: "Economic system based on state ownership and classless society." },
        { term: "Containment", definition: "US policy to prevent spread of communism." },
        { term: "Iron Curtain", definition: "Divide between Western and Eastern Europe." },
        { term: "Truman Doctrine", definition: "US policy to support free peoples against communism." },
      ],
      concept: {
        id: "cieihis-u1-s1-cold", title: "Cold War origins",
        skill: "Understand Cold War causes and ideology.",
        sections: [
          { heading: "Ideological divide", body: "USA: capitalism, democracy, individual freedom. USSR: communism, one-party state, collective ownership. Fundamental incompatibility created tension." },
          { heading: "Post-WWII settlement", body: "Germany divided into East/West. Eastern Europe under Soviet influence. Iron Curtain separated ideologically opposed blocs. US Marshall Plan vs Soviet Comecon." },
        ],
        keyFormulas: [
          { name: "Cold War", statement: "USA vs USSR rivalry" },
          { name: "Containment", statement: "prevent communism spread" },
          { name: "Iron Curtain", statement: "Europe divide" },
        ],
        workedExample: {
          problem: "Why did the Cold War start after WWII?",
          solution: "Ideological differences + post-war power vacuum + competing visions for Europe → mistrust and rivalry.",
        },
        questions: [
          {
            id: "cieihis-u1-cw-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What was the Cold War?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Ideological rivalry between USA and USSR without direct war" }, { id: "b", text: "A nuclear war" }, { id: "c", text: "A trade agreement" }, { id: "d", text: "A peace treaty" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Cold War", statement: "USA-USSR rivalry." }],
              steps: [{ reasoning: "Cold War = ideological rivalry without direct war.", marks: 1, markCode: "M" }],
              finalAnswer: "USA-USSR rivalry",
            },
          },
          {
            id: "cieihis-u1-cw-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is containment?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Containment", statement: "Prevent communism spread." }],
              steps: [
                { reasoning: "US policy to prevent spread of communism.", marks: 1, markCode: "M" },
                { reasoning: "Truman Doctrine and Marshall Plan implemented this.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Prevent communism spread",
            },
          },
          {
            id: "cieihis-u1-cw-q3", difficulty: "core", totalMarks: 3,
            stem: "What were the ideological differences between USA and USSR?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Ideological divide", statement: "Capitalism vs communism." }],
              steps: [
                { reasoning: "USA: capitalism, democracy, individual freedom.", marks: 1, markCode: "M" },
                { reasoning: "USSR: communism, one-party state, collective ownership.", marks: 1, markCode: "M" },
                { reasoning: "Fundamental incompatibility.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Capitalism vs communism",
            },
          },
          {
            id: "cieihis-u1-cw-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define Cold War, capitalism, communism, containment, Iron Curtain, Truman Doctrine. (b) What was the Cold War? (c) What is containment? (d) What were ideological differences? (e) What was the Iron Curtain? (f) What was the Truman Doctrine? (g) What was the Marshall Plan? (h) Explain why the Cold War began after WWII.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Cold War", statement: "Origins, ideology." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) USA-USSR rivalry.", marks: 1, markCode: "M" },
                { reasoning: "(c) Prevent communism spread.", marks: 1, markCode: "M" },
                { reasoning: "(d) Capitalism vs communism.", marks: 1, markCode: "M" },
                { reasoning: "(e) Europe divide.", marks: 1, markCode: "M" },
                { reasoning: "(f) Support free peoples policy.", marks: 1, markCode: "M" },
                { reasoning: "(g) US economic aid to Europe.", marks: 1, markCode: "M" },
                { reasoning: "(h) Ideological differences + power vacuum.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Cold War origins and ideology.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieihis-u1-cw-notes", title: "Cold War origins — notes",
      summary: "Cold War=USA vs USSR ideological rivalry. Capitalism vs communism. Containment policy.",
      sections: [
        { heading: "Key idea", body: "Fundamental ideological differences created decades of rivalry." },
        { heading: "Iron Curtain", body: "Divided Europe into Western (US influence) and Eastern (Soviet) blocs." },
      ],
    },
  },
  {
    file: "lesson-1-2.ts", exportName: "lesson332",
    lesson: {
      id: "cieihis-u1-lesson-1-2", code: "1-2",
      title: "The Cold War: Crises and Confrontations",
      goal: "I CAN analyse key Cold War crises and their outcomes.",
      standards: ["Cambridge IGCSE History 0470", "Paper 1: Cold War crises"],
      vocabulary: [
        { term: "Berlin Blockade", definition: "Soviet blockade of West Berlin 1948-49." },
        { term: "Berlin Airlift", definition: "US/UK air supply to West Berlin." },
        { term: "Cuban Missile Crisis", definition: "1962 confrontation over Soviet missiles in Cuba." },
        { term: "Nuclear weapons", definition: "Weapons of mass destruction." },
        { term: "Proxy war", definition: "Conflict between superpowers fought through allies." },
        { term: "Detente", definition: "Period of reduced Cold War tension." },
      ],
      concept: {
        id: "cieihis-u1-s2-crisis", title: "Cold War crises",
        skill: "Analyse key Cold War confrontations.",
        sections: [
          { heading: "Berlin crises", body: "1948-49 Blockade: Soviets cut land access to West Berlin; Western powers airlifted supplies. 1961 Wall: divided Berlin, prevented East→West flight." },
          { heading: "Cuban Missile Crisis", body: "1962: Soviets placed nuclear missiles in Cuba. US naval blockade demanded removal. 13 days of crisis — closest to nuclear war. Resolved by secret deal: missiles removed, US missiles removed from Turkey." },
          { heading: "Proxy conflicts", body: "Korean War (1950-53), Vietnam War (1955-75), Afghanistan (1979-89) — superpowers supported opposing sides without direct conflict." },
        ],
        keyFormulas: [
          { name: "Berlin Blockade", statement: "1948-49 airlift" },
          { name: "Cuban Crisis", statement: "1962 missile confrontation" },
          { name: "Proxy war", statement: "allied conflict" },
        ],
        workedExample: {
          problem: "Why was the Cuban Missile Crisis so dangerous?",
          solution: "Both sides had nuclear weapons — miscalculation could trigger nuclear war. 13 days brought world closest to apocalypse.",
        },
        questions: [
          {
            id: "cieihis-u1-cr-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What was the Berlin Blockade?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Soviet blockade of West Berlin 1948-49" }, { id: "b", text: "A nuclear attack" }, { id: "c", text: "A peace treaty" }, { id: "d", text: "A trade agreement" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Berlin Blockade", statement: "Soviet blockade." }],
              steps: [{ reasoning: "Soviets cut land access to West Berlin.", marks: 1, markCode: "M" }],
              finalAnswer: "Soviet blockade of West Berlin",
            },
          },
          {
            id: "cieihis-u1-cr-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What was the Cuban Missile Crisis?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Cuban Crisis", statement: "1962 missile confrontation." }],
              steps: [
                { reasoning: "Soviets placed nuclear missiles in Cuba.", marks: 1, markCode: "M" },
                { reasoning: "US demanded removal — 13 days crisis.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "1962 missile confrontation",
            },
          },
          {
            id: "cieihis-u1-cr-q3", difficulty: "core", totalMarks: 3,
            stem: "What was a proxy war? Give an example.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Proxy war", statement: "Allied conflict." }],
              steps: [
                { reasoning: "Conflict between superpowers through allies.", marks: 1, markCode: "M" },
                { reasoning: "Example: Vietnam War, Korean War.", marks: 1, markCode: "M" },
                { reasoning: "Avoided direct superpower conflict.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Allied conflict example",
            },
          },
          {
            id: "cieihis-u1-cr-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define Berlin Blockade, Berlin Airlift, Cuban Missile Crisis, nuclear weapons, proxy war, detente. (b) What was the Berlin Blockade? (c) What was the Cuban Missile Crisis? (d) Why was it dangerous? (e) What was a proxy war? Give example. (f) What was detente? (g) How was Cuban Crisis resolved? (h) Evaluate whether the Cold War was truly 'cold'.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Cold War crises", statement: "Analysis, outcomes." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Soviet blockade 1948-49.", marks: 1, markCode: "M" },
                { reasoning: "(c) 1962 missile confrontation.", marks: 1, markCode: "M" },
                { reasoning: "(d) Nuclear war risk.", marks: 1, markCode: "M" },
                { reasoning: "(e) Allied conflict; Vietnam/Korea.", marks: 1, markCode: "M" },
                { reasoning: "(f) Reduced tension period.", marks: 1, markCode: "M" },
                { reasoning: "(g) Missiles removed, secret deal.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation — proxy wars were hot.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Cold War crises and confrontations.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieihis-u1-cr-notes", title: "Cold War crises — notes",
      summary: "Berlin Blockade/Airlift, Cuban Missile Crisis, proxy wars (Korea, Vietnam, Afghanistan).",
      sections: [
        { heading: "Key idea", body: "Crises brought superpowers close to direct/nuclear conflict." },
        { heading: "Proxy wars", body: "Superpowers fought indirectly through allies — Korea, Vietnam, Afghanistan." },
      ],
    },
  },
  {
    file: "lesson-1-3.ts", exportName: "lesson333",
    lesson: {
      id: "cieihis-u1-lesson-1-3", code: "1-3",
      title: "The Cold War: Arms Race and Detente",
      goal: "I CAN explain the nuclear arms race and periods of detente.",
      standards: ["Cambridge IGCSE History 0470", "Paper 1: arms race"],
      vocabulary: [
        { term: "Arms race", definition: "Competition between superpowers to build weapons." },
        { term: "Nuclear arsenal", definition: "Stockpile of nuclear weapons." },
        { term: "Mutually Assured Destruction (MAD)", definition: "Doctrine that nuclear war would destroy both sides." },
        { term: "SALT", definition: "Strategic Arms Limitation Talks." },
        { term: "START", definition: "Strategic Arms Reduction Treaty." },
        { term: "Détente", definition: "Period of improved relations." },
      ],
      concept: {
        id: "cieihis-u1-s3-arms", title: "Arms race and detente",
        skill: "Understand nuclear competition and diplomacy.",
        sections: [
          { heading: "Arms race", body: "Both superpowers built massive nuclear arsenals. US: hydrogen bomb 1952, ICBMs. USSR: first satellite 1957, ICBMs. MAD doctrine deterred direct war." },
          { heading: "Detente", body: "1960s-70s: reduced tension through diplomacy. SALT I (1972), SALT II (1979) limited weapons. Helsinki Accords (1975) recognised European borders. But Afghanistan invasion (1979) ended detente." },
        ],
        keyFormulas: [
          { name: "Arms race", statement: "nuclear competition" },
          { name: "MAD", statement: "mutual destruction" },
          { name: "Detente", statement: "improved relations" },
        ],
        workedExample: {
          problem: "Why did MAD prevent direct nuclear war?",
          solution: "Both sides knew nuclear war would destroy both — deterrence through mutual vulnerability.",
        },
        questions: [
          {
            id: "cieihis-u1-ar-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What was the arms race?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Competition between superpowers to build weapons" }, { id: "b", text: "A peace treaty" }, { id: "c", text: "A trade agreement" }, { id: "d", text: "A type of war" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Arms race", statement: "Weapons competition." }],
              steps: [{ reasoning: "Arms race = superpower weapons competition.", marks: 1, markCode: "M" }],
              finalAnswer: "Weapons competition",
            },
          },
          {
            id: "cieihis-u1-ar-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is Mutually Assured Destruction?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "MAD", statement: "Mutual destruction doctrine." }],
              steps: [
                { reasoning: "Nuclear war would destroy both sides.", marks: 1, markCode: "M" },
                { reasoning: "Deterred direct conflict.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Mutual destruction doctrine",
            },
          },
          {
            id: "cieihis-u1-ar-q3", difficulty: "core", totalMarks: 3,
            stem: "What was detente?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Detente", statement: "Reduced tension." }],
              steps: [
                { reasoning: "Period of improved US-Soviet relations.", marks: 1, markCode: "M" },
                { reasoning: "1960s-70s: SALT treaties, Helsinki Accords.", marks: 1, markCode: "M" },
                { reasoning: "Ended by Afghanistan invasion 1979.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Improved relations period",
            },
          },
          {
            id: "cieihis-u1-ar-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define arms race, nuclear arsenal, MAD, SALT, START, detente. (b) What was the arms race? (c) What is MAD? (d) What was SALT? (e) What was detente? (f) What ended detente? (g) How did nuclear weapons affect Cold War? (h) Evaluate whether nuclear weapons prevented or prolonged the Cold War.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Arms race", statement: "Nuclear competition." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Weapons competition.", marks: 1, markCode: "M" },
                { reasoning: "(c) Mutual destruction doctrine.", marks: 1, markCode: "M" },
                { reasoning: "(d) Strategic Arms Limitation Talks.", marks: 1, markCode: "M" },
                { reasoning: "(e) Improved relations.", marks: 1, markCode: "M" },
                { reasoning: "(f) Afghanistan invasion 1979.", marks: 1, markCode: "M" },
                { reasoning: "(g) Deterred direct war, fuelled proxy wars.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Arms race and detente.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieihis-u1-ar-notes", title: "Arms race — notes",
      summary: "Arms race=nuclear competition. MAD=deterred direct war. Detente=1960s-70s improved relations.",
      sections: [
        { heading: "Key idea", body: "Nuclear weapons created stalemate — no direct war but proxy conflicts continued." },
        { heading: "Detente", body: "Diplomatic efforts reduced tension but didn't end rivalry." },
      ],
    },
  },
  {
    file: "lesson-1-4.ts", exportName: "lesson334",
    lesson: {
      id: "cieihis-u1-lesson-1-4", code: "1-4",
      title: "The Cold War: End of the Cold War",
      goal: "I CAN explain the causes and consequences of the Cold War's end.",
      standards: ["Cambridge IGCSE History 0470", "Paper 1: end of Cold War"],
      vocabulary: [
        { term: "Glasnost", definition: "Soviet policy of openness/transparency." },
        { term: "Perestroika", definition: "Soviet policy of restructuring." },
        { term: "Reunification", definition: "East and West Germany joining again." },
        { term: "Soviet collapse", definition: "Dissolution of USSR 1991." },
        { term: "Fall of Berlin Wall", definition: "1989 event symbolising Cold War end." },
        { term: "Eastern bloc", definition: "Soviet-aligned countries." },
      ],
      concept: {
        id: "cieihis-u1-s4-end", title: "End of Cold War",
        skill: "Understand Cold War collapse causes.",
        sections: [
          { heading: "Gorbachev reforms", body: "1985: Gorbachev became Soviet leader. Glasnost (openness) and perestroika (restructuring) aimed to reform system but unleashed forces he couldn't control." },
          { heading: "Collapse", body: "1989: Berlin Wall fell, Eastern European revolutions. 1991: Soviet Union dissolved. Causes: economic stagnation, military burden, nationalism, reform failures." },
        ],
        keyFormulas: [
          { name: "Glasnost", statement: "openness" },
          { name: "Perestroika", statement: "restructuring" },
          { name: "1991", statement: "USSR dissolved" },
        ],
        workedExample: {
          problem: "Why did the Soviet Union collapse in 1991?",
          solution: "Economic stagnation + military spending + nationalism + failed reforms → system collapse.",
        },
        questions: [
          {
            id: "cieihis-u1-end-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What was glasnost?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Soviet policy of openness" }, { id: "b", text: "A military strategy" }, { id: "c", text: "An economic plan" }, { id: "d", text: "A peace treaty" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Glasnost", statement: "Openness policy." }],
              steps: [{ reasoning: "Glasnost = Soviet openness/transparency.", marks: 1, markCode: "M" }],
              finalAnswer: "Openness policy",
            },
          },
          {
            id: "cieihis-u1-end-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What was perestroika?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Perestroika", statement: "Restructuring policy." }],
              steps: [
                { reasoning: "Soviet policy of restructuring.", marks: 1, markCode: "M" },
                { reasoning: "Aimed to reform economic/political system.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Restructuring policy",
            },
          },
          {
            id: "cieihis-u1-end-q3", difficulty: "core", totalMarks: 3,
            stem: "Why did the Cold War end?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Cold War end", statement: "Collapse causes." }],
              steps: [
                { reasoning: "Soviet economic stagnation.", marks: 1, markCode: "M" },
                { reasoning: "Military spending burden.", marks: 1, markCode: "M" },
                { reasoning: "Nationalism + reform failures.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Economic + military + nationalism",
            },
          },
          {
            id: "cieihis-u1-end-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define glasnost, perestroika, reunification, Soviet collapse, Berlin Wall, Eastern bloc. (b) What was glasnost? (c) What was perestroika? (d) When did Berlin Wall fall? (e) When did USSR dissolve? (f) What caused Soviet collapse? (g) What was the significance of 1989? (h) Evaluate whether Gorbachev intended to end the Cold War.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Cold War end", statement: "Causes, consequences." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Openness policy.", marks: 1, markCode: "M" },
                { reasoning: "(c) Restructuring policy.", marks: 1, markCode: "M" },
                { reasoning: "(d) 1989.", marks: 1, markCode: "M" },
                { reasoning: "(e) 1991.", marks: 1, markCode: "M" },
                { reasoning: "(f) Economic stagnation, military burden, nationalism.", marks: 1, markCode: "M" },
                { reasoning: "(g) Symbolised Cold War end.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "End of Cold War.",
            },
          },
        ],
      },
    },
    notes: {
      id: "cieihis-u1-end-notes", title: "Cold War end — notes",
      summary: "Gorbachev reforms→uncontrolled change→1989 wall falls→1991 USSR dissolves. Causes: economy, military, nationalism.",
      sections: [
        { heading: "Key idea", body: "Reform attempts unleashed forces that destroyed the Soviet system." },
        { heading: "Consequences", body: "End of bipolar world, rise of US unipolarity, new conflicts." },
      ],
    },
  },
];
