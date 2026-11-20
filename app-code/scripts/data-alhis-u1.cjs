module.exports = [
  {
    file: "lesson-1-1.ts", exportName: "lesson611",
    lesson: {
      id: "ciealhis-u1-lesson-1-1", code: "1-1",
      title: "Cold War: Origins and Early Confrontation",
      goal: "I CAN explain the causes and early developments of the Cold War.",
      standards: ["Cambridge A Level History 9489", "Paper 1: Cold War"],
      vocabulary: [
        { term: "Cold War", definition: "Ideological rivalry between USA and USSR without direct war." },
        { term: "Containment", definition: "US policy to prevent communism spread." },
        { term: "Truman Doctrine", definition: "US policy to support free peoples against communism." },
        { term: "Marshall Plan", definition: "US economic aid to rebuild Europe." },
        { term: "Iron Curtain", definition: "Divide between Western and Eastern Europe." },
        { term: "Berlin Blockade", definition: "Soviet blockade of West Berlin 1948-49." },
      ],
      concept: {
        id: "ciealhis-u1-s1-origin", title: "Cold War origins",
        skill: "Analyse Cold War causes and early crises.",
        sections: [
          { heading: "Post-WWII settlement", body: "Potsdam Conference divided Germany. Eastern Europe under Soviet influence. Iron Curtain separated blocs. US Marshall Plan vs Soviet Comecon." },
          { heading: "Early confrontations", body: "Berlin Blockade 1948-49: Soviets cut land access; Western airlift. 1949: NATO formed, USSR tested atomic bomb. Chinese revolution 1949 extended communist bloc." },
        ],
        keyFormulas: [
          { name: "Cold War", statement: "USA vs USSR" },
          { name: "Containment", statement: "prevent communism" },
          { name: "Berlin Blockade", statement: "1948-49" },
        ],
        workedExample: {
          problem: "Why did the Cold War begin after WWII?",
          solution: "Ideological incompatibility + post-war power vacuum + competing visions for Europe → mistrust and rivalry.",
        },
        questions: [
          {
            id: "ciealhis-u1-cw-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What was the Cold War?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Ideological rivalry between USA and USSR" }, { id: "b", text: "A nuclear war" }, { id: "c", text: "A trade agreement" }, { id: "d", text: "A peace treaty" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Cold War", statement: "USA-USSR rivalry." }],
              steps: [{ reasoning: "Cold War = ideological rivalry without direct war.", marks: 1, markCode: "M" }],
              finalAnswer: "USA-USSR rivalry",
            },
          },
          {
            id: "ciealhis-u1-cw-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What was containment?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Containment", statement: "Prevent communism." }],
              steps: [
                { reasoning: "US policy to prevent spread of communism.", marks: 1, markCode: "M" },
                { reasoning: "Truman Doctrine implemented this.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Prevent communism spread",
            },
          },
          {
            id: "ciealhis-u1-cw-q3", difficulty: "core", totalMarks: 3,
            stem: "What were the ideological differences between USA and USSR?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Ideology", statement: "Capitalism vs communism." }],
              steps: [
                { reasoning: "USA: capitalism, democracy, individual freedom.", marks: 1, markCode: "M" },
                { reasoning: "USSR: communism, one-party state, collective ownership.", marks: 1, markCode: "M" },
                { reasoning: "Fundamental incompatibility.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Capitalism vs communism",
            },
          },
          {
            id: "ciealhis-u1-cw-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define Cold War, containment, Truman Doctrine, Marshall Plan, Iron Curtain, Berlin Blockade. (b) What was Cold War? (c) What was containment? (d) What were ideological differences? (e) What was Berlin Blockade? (f) What was Marshall Plan? (g) What was Iron Curtain? (h) Explain why Cold War began after WWII.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Cold War origins", statement: "Causes, early crises." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) USA-USSR rivalry.", marks: 1, markCode: "M" },
                { reasoning: "(c) Prevent communism.", marks: 1, markCode: "M" },
                { reasoning: "(d) Capitalism vs communism.", marks: 1, markCode: "M" },
                { reasoning: "(e) 1948-49 blockade.", marks: 1, markCode: "M" },
                { reasoning: "(f) US economic aid.", marks: 1, markCode: "M" },
                { reasoning: "(g) Europe divide.", marks: 1, markCode: "M" },
                { reasoning: "(h) Ideology + power vacuum.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Cold War origins.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealhis-u1-cw-notes", title: "Cold War origins — notes",
      summary: "Ideological divide + power vacuum → rivalry. Berlin Blockade first crisis.",
      sections: [
        { heading: "Key idea", body: "Post-WWII settlement created conditions for Cold War." },
        { heading: "Early crises", body: "Berlin Blockade 1948-49 showed superpower confrontation." },
      ],
    },
  },
  {
    file: "lesson-1-2.ts", exportName: "lesson612",
    lesson: {
      id: "ciealhis-u1-lesson-1-2", code: "1-2",
      title: "Cold War: Arms Race and Detente",
      goal: "I CAN explain the nuclear arms race, crises and detente.",
      standards: ["Cambridge A Level History 9489", "Paper 1: Cold War"],
      vocabulary: [
        { term: "Arms race", definition: "Competition to build nuclear weapons." },
        { term: "MAD", definition: "Mutually Assured Destruction." },
        { term: "Cuban Missile Crisis", definition: "1962 confrontation over Soviet missiles." },
        { term: "SALT", definition: "Strategic Arms Limitation Talks." },
        { term: "Detente", definition: "Period of reduced tension." },
        { term: "Proxy war", definition: "Conflict through allies." },
      ],
      concept: {
        id: "ciealhis-u1-s2-arms", title: "Arms race and detente",
        skill: "Analyse nuclear competition and diplomacy.",
        sections: [
          { heading: "Arms race", body: "Both superpowers built massive nuclear arsenals. US: hydrogen bomb, ICBMs. USSR: first satellite, ICBMs. MAD doctrine deterred direct war." },
          { heading: "Cuban Missile Crisis", body: "1962: Soviets placed nuclear missiles in Cuba. US naval blockade. 13 days — closest to nuclear war. Resolved by secret deal." },
          { heading: "Detente", body: "1960s-70s: reduced tension. SALT I/II limited weapons. Helsinki Accords 1975. Ended by Afghanistan invasion 1979." },
        ],
        keyFormulas: [
          { name: "Arms race", statement: "nuclear competition" },
          { name: "MAD", statement: "mutual destruction" },
          { name: "Detente", statement: "reduced tension" },
        ],
        workedExample: {
          problem: "Why was Cuban Missile Crisis the closest to nuclear war?",
          solution: "Both sides had nuclear weapons, missiles in Cuba threatened US directly, 13 days of brinkmanship.",
        },
        questions: [
          {
            id: "ciealhis-u1-ar-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What was the arms race?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Competition to build nuclear weapons" }, { id: "b", text: "A peace treaty" }, { id: "c", text: "A trade agreement" }, { id: "d", text: "A type of war" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Arms race", statement: "Weapons competition." }],
              steps: [{ reasoning: "Arms race = superpower weapons competition.", marks: 1, markCode: "M" }],
              finalAnswer: "Weapons competition",
            },
          },
          {
            id: "ciealhis-u1-ar-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What is MAD?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "MAD", statement: "Mutual destruction." }],
              steps: [
                { reasoning: "Nuclear war would destroy both sides.", marks: 1, markCode: "M" },
                { reasoning: "Deterred direct conflict.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Mutual destruction doctrine",
            },
          },
          {
            id: "ciealhis-u1-ar-q3", difficulty: "core", totalMarks: 3,
            stem: "What was detente?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Detente", statement: "Reduced tension." }],
              steps: [
                { reasoning: "Period of improved US-Soviet relations.", marks: 1, markCode: "M" },
                { reasoning: "1960s-70s: SALT treaties, Helsinki.", marks: 1, markCode: "M" },
                { reasoning: "Ended by Afghanistan 1979.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Improved relations period",
            },
          },
          {
            id: "ciealhis-u1-ar-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define arms race, MAD, Cuban Missile Crisis, SALT, detente, proxy war. (b) What was arms race? (c) What is MAD? (d) What was Cuban Crisis? (e) What was detente? (f) What ended detente? (g) How did nuclear weapons affect Cold War? (h) Evaluate whether nuclear weapons prevented or prolonged Cold War.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Arms race", statement: "Nuclear competition." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Weapons competition.", marks: 1, markCode: "M" },
                { reasoning: "(c) Mutual destruction.", marks: 1, markCode: "M" },
                { reasoning: "(d) 1962 confrontation.", marks: 1, markCode: "M" },
                { reasoning: "(e) Improved relations.", marks: 1, markCode: "M" },
                { reasoning: "(f) Afghanistan 1979.", marks: 1, markCode: "M" },
                { reasoning: "(g) Deterred direct war, fuelled proxy.", marks: 1, markCode: "M" },
                { reasoning: "(h) Balanced evaluation.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Arms race and detente.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealhis-u1-ar-notes", title: "Arms race — notes",
      summary: "Nuclear competition, MAD deterrence, Cuban Crisis, detente period.",
      sections: [
        { heading: "Key idea", body: "Nuclear weapons created stalemate — no direct war but proxy conflicts." },
        { heading: "Detente", body: "Diplomatic efforts reduced tension but didn't end rivalry." },
      ],
    },
  },
  {
    file: "lesson-1-3.ts", exportName: "lesson613",
    lesson: {
      id: "ciealhis-u1-lesson-1-3", code: "1-3",
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
      concept: {
        id: "ciealhis-u1-s3-proxy", title: "Proxy conflicts",
        skill: "Analyse superpower involvement in regional wars.",
        sections: [
          { heading: "Korean War", body: "1950-53: North (Soviet/Chinese backed) vs South (US backed). Stalemate at 38th parallel. Demonstrated Cold War proxy conflict." },
          { heading: "Vietnam War", body: "1955-75: US supported South against North/Viet Cong. Domino theory drove intervention. US defeat led to Vietnam syndrome." },
          { heading: "Soviet-Afghan War", body: "1979-89: USSR invaded to support communist government. US/China/Pakistan backed mujahedeen. Soviet withdrawal contributed to collapse." },
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
        questions: [
          {
            id: "ciealhis-u1-px-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What was the Korean War?",
            response: { type: "mcq", choices: [
              { id: "a", text: "1950-53 conflict in Korea" }, { id: "b", text: "A trade war" }, { id: "c", text: "A peace treaty" }, { id: "d", text: "A natural disaster" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Korean War", statement: "1950-53 conflict." }],
              steps: [{ reasoning: "Korean War = North vs South conflict.", marks: 1, markCode: "M" }],
              finalAnswer: "1950-53 conflict",
            },
          },
          {
            id: "ciealhis-u1-px-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What was the domino theory?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Domino theory", statement: "Communism spread fear." }],
              steps: [
                { reasoning: "US belief that if one country fell, neighbours would follow.", marks: 1, markCode: "M" },
                { reasoning: "Justified US intervention in Vietnam.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Communism spread fear",
            },
          },
          {
            id: "ciealhis-u1-px-q3", difficulty: "core", totalMarks: 3,
            stem: "Why did the US lose the Vietnam War?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "skill", name: "Vietnam defeat", statement: "Causes." }],
              steps: [
                { reasoning: "Guerrilla tactics + terrain.", marks: 1, markCode: "M" },
                { reasoning: "Lack of local support.", marks: 1, markCode: "M" },
                { reasoning: "Domestic opposition, political constraints.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Guerrilla + terrain + opposition",
            },
          },
          {
            id: "ciealhis-u1-px-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define Korean War, Vietnam War, Soviet-Afghan War, domino theory, Viet Cong, mujahedeen. (b) What was Korean War? (c) What was Vietnam War? (d) What was Soviet-Afghan War? (e) What was domino theory? (f) Why did US lose Vietnam? (g) What was Vietnam syndrome? (h) Evaluate whether proxy wars achieved superpower objectives.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Proxy wars", statement: "Analysis." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) 1950-53 Korea.", marks: 1, markCode: "M" },
                { reasoning: "(c) 1955-75 Vietnam.", marks: 1, markCode: "M" },
                { reasoning: "(d) 1979-89 Afghanistan.", marks: 1, markCode: "M" },
                { reasoning: "(e) Communism spread fear.", marks: 1, markCode: "M" },
                { reasoning: "(f) Guerrilla + terrain + opposition.", marks: 1, markCode: "M" },
                { reasoning: "(g) US military reluctance.", marks: 1, markCode: "M" },
                { reasoning: "(h) Mixed results — costly and inconclusive.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "Proxy conflict analysis.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealhis-u1-px-notes", title: "Proxy wars — notes",
      summary: "Korea, Vietnam, Afghanistan — superpowers fought through allies.",
      sections: [
        { heading: "Key idea", body: "Proxy wars avoided direct conflict but were costly and often inconclusive." },
        { heading: "Vietnam", body: "US defeat led to Vietnam syndrome — reluctance for future interventions." },
      ],
    },
  },
  {
    file: "lesson-1-4.ts", exportName: "lesson614",
    lesson: {
      id: "ciealhis-u1-lesson-1-4", code: "1-4",
      title: "Cold War: End of the Cold War",
      goal: "I CAN explain causes and consequences of Cold War's end.",
      standards: ["Cambridge A Level History 9489", "Paper 1: Cold War end"],
      vocabulary: [
        { term: "Glasnost", definition: "Soviet policy of openness." },
        { term: "Perestroika", definition: "Soviet policy of restructuring." },
        { term: "Reunification", definition: "East/West Germany joining." },
        { term: "Soviet collapse", definition: "USSR dissolution 1991." },
        { term: "Berlin Wall", definition: "Symbol of Cold War division." },
        { term: "Eastern bloc", definition: "Soviet-aligned countries." },
      ],
      concept: {
        id: "ciealhis-u1-s4-end", title: "End of Cold War",
        skill: "Analyse Cold War collapse causes.",
        sections: [
          { heading: "Gorbachev reforms", body: "1985: Gorbachev leader. Glasnost (openness) and perestroika (restructuring) aimed to reform but unleashed uncontrollable forces." },
          { heading: "Collapse", body: "1989: Berlin Wall fell, Eastern European revolutions. 1991: USSR dissolved. Causes: economic stagnation, military burden, nationalism, reform failures." },
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
            id: "ciealhis-u1-end-q1", difficulty: "foundation", totalMarks: 1,
            stem: "What was glasnost?",
            response: { type: "mcq", choices: [
              { id: "a", text: "Soviet policy of openness" }, { id: "b", text: "A military strategy" }, { id: "c", text: "An economic plan" }, { id: "d", text: "A peace treaty" },
            ], correctChoiceId: "a" },
            markscheme: {
              principles: [{ kind: "definition", name: "Glasnost", statement: "Openness policy." }],
              steps: [{ reasoning: "Glasnost = Soviet openness.", marks: 1, markCode: "M" }],
              finalAnswer: "Openness policy",
            },
          },
          {
            id: "ciealhis-u1-end-q2", difficulty: "foundation", totalMarks: 2,
            stem: "What was perestroika?",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "definition", name: "Perestroika", statement: "Restructuring." }],
              steps: [
                { reasoning: "Soviet policy of restructuring.", marks: 1, markCode: "M" },
                { reasoning: "Aimed to reform economic/political system.", marks: 1, markCode: "M" },
              ],
              finalAnswer: "Restructuring policy",
            },
          },
          {
            id: "ciealhis-u1-end-q3", difficulty: "core", totalMarks: 3,
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
            id: "ciealhis-u1-end-q4", difficulty: "core", totalMarks: 8,
            stem: "(a) Define glasnost, perestroika, reunification, Soviet collapse, Berlin Wall, Eastern bloc. (b) What was glasnost? (c) What was perestroika? (d) When did Berlin Wall fall? (e) When did USSR dissolve? (f) What caused Soviet collapse? (g) What was significance of 1989? (h) Evaluate whether Gorbachev intended to end Cold War.",
            response: { type: "open" },
            markscheme: {
              principles: [{ kind: "technique", name: "Cold War end", statement: "Causes, consequences." }],
              steps: [
                { reasoning: "(a) All six definitions.", marks: 1, markCode: "M" },
                { reasoning: "(b) Openness.", marks: 1, markCode: "M" },
                { reasoning: "(c) Restructuring.", marks: 1, markCode: "M" },
                { reasoning: "(d) 1989.", marks: 1, markCode: "M" },
                { reasoning: "(e) 1991.", marks: 1, markCode: "M" },
                { reasoning: "(f) Economic, military, nationalism.", marks: 1, markCode: "M" },
                { reasoning: "(g) Symbolised Cold War end.", marks: 1, markCode: "M" },
                { reasoning: "(h) Reforms unintended consequences.", marks: 1, markCode: "A" },
              ],
              finalAnswer: "End of Cold War.",
            },
          },
        ],
      },
    },
    notes: {
      id: "ciealhis-u1-end-notes", title: "Cold War end — notes",
      summary: "Gorbachev reforms→uncontrolled change→1989 wall falls→1991 USSR dissolves.",
      sections: [
        { heading: "Key idea", body: "Reform attempts unleashed forces that destroyed Soviet system." },
        { heading: "Consequences", body: "End of bipolar world, US unipolarity, new conflicts." },
      ],
    },
  },
];
