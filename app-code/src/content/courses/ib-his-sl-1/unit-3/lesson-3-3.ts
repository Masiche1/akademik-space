import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "his-u3-lesson-3-3",
  code: "3-3",
  title: "The Berlin Wall and the Division of Europe",
  goal: "I CAN describe the construction and significance of the Berlin Wall, analyse the divided city and its escapes, and explain how Europe was split into rival blocs.",
  standards: ["Paper 1", "Paper 2", "Topic 9"],
  vocabulary: [
    {
      term: "Berlin Wall",
      definition:
        "Barrier erected by East Germany in August 1961 to stop emigration to the West; symbol of the Cold War divide.",
    },
    {
      term: "Checkpoint Charlie",
      definition:
        "Famous crossing point between East and West Berlin where US and Soviet tanks confronted in 1961.",
    },
    {
      term: "Brain drain",
      definition:
        "Mass emigration of skilled workers from East to West Germany before the Wall.",
    },
    {
      term: "Iron Curtain states",
      definition:
        "Soviet-aligned countries of Eastern Europe behind the ideological divide.",
    },
    {
      term: "Hallstein Doctrine",
      definition:
        "West German policy (1955) refusing diplomatic relations with states recognising East Germany.",
    },
    {
      term: "Basic Treaty",
      definition:
        "1972 agreement normalising West German–East German relations without recognising each other's legitimacy.",
    },
  ],
  concepts: [
    {
      id: "his-u3-berlin-wall",
      title: "Construction and consequences of the Wall",
      skill:
        "Explain why East Germany built the Wall in 1961 and describe its human and political consequences.",
      lesson: {
        sections: [
          {
            heading: "Why the Wall was built",
            body: "Between 1949 and 1961, ~2.5 million East Germans fled to the West — including skilled workers, doctors and engineers. The GDR's economy was failing and its legitimacy collapsing. Khrushchev demanded the Western powers leave Berlin; when they refused, East Germany built the Wall overnight (13 August 1961).",
          },
          {
            heading: "Life at the Wall",
            body: "The Wall became a fortified death strip: barbed wire, watchtowers, mines, guard dogs and 'shoot-to-kill' orders. ~140 people died attempting escape; famous escapes included tunnels, hot-air balloons, hidden compartments and Checkpoint Charlie confrontations. Families were separated for 28 years.",
          },
          {
            heading: "Symbol and turning point",
            body: "The Wall became the ultimate symbol of the Iron Curtain — 'two worlds in one city'. It demonstrated that communism could not retain its population without coercion, and it forced the West to accept the division as a lasting reality.",
          },
        ],
        keyFormulas: [
          {
            name: "Wall built",
            statement: "August 1961 — stopped mass emigration ('brain drain')",
          },
          { name: "Death toll", statement: "~140 killed attempting escape" },
          {
            name: "Symbol",
            statement: "Concrete embodiment of the Iron Curtain",
          },
        ],
        workedExample: {
          problem:
            "Why did the Berlin Wall ultimately fail as a solution to East Germany's problems?",
          solution:
            "It stopped emigration physically but not economically or ideologically — the GDR remained a failing state until the Wall's fall in 1989 proved coercion could not sustain a system people wanted to leave.",
        },
      },
      questions: [
        {
          id: "his-u3-bq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Berlin Wall was built primarily to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Defend against NATO invasion" },
              { id: "b", text: "Stop East Germans fleeing to the West" },
              { id: "c", text: "Separate the two German states economically" },
              { id: "d", text: "Control trade between sectors" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Wall purpose",
                statement:
                  "Built to stop mass emigration from East to West Berlin.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Wall's primary purpose was preventing emigration.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Stop emigration",
            commonErrors: ["Thinking it was a defensive military structure."],
          },
        },
        {
          id: "his-u3-bq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two consequences of the Berlin Wall for East Germany.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Wall consequences",
                statement:
                  "Stopped emigration but deepened isolation and illegitimacy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "End of mass emigration — 'brain drain' stopped, but population trapped.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Deepened international isolation and dependence on Soviet subsidies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Proved the regime could not retain support voluntarily — undermined legitimacy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Stopped emigration but revealed regime illegitimacy and isolation.",
            commonErrors: ["Only citing the positive (stopped emigration)."],
          },
        },
        {
          id: "his-u3-bq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the Berlin Wall symbolised the Cold War division.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wall symbolism",
                statement: "Physical embodiment of ideological divide.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Concrete barrier made abstract 'Iron Curtain' visible and tangible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divided families and cities — daily reminder of the cost of the divide.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Showed communism required physical coercion to retain population.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: became the most potent symbol of Cold War division.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Physical manifestation of ideological divide; symbol of coercion.",
            commonErrors: [
              "Treating it as just a border — it was a system of control.",
            ],
          },
        },
        {
          id: "his-u3-bq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the divided city of Berlin (1945–1989).",
          parts: [
            {
              label: "a",
              prompt: "Describe how Berlin was divided after WWII.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain the significance of the Wall's construction (1961).",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate Berlin's role as a Cold War flashpoint.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Divided Berlin",
                statement: "Island of West inside East; repeated crises.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Post-1945: Berlin split into four sectors; USSR blockaded West (1948) — airlift followed.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Two German states formed (FRG, GDR 1949) but Berlin remained divided.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "1961: mass emigration threatened GDR; Wall built overnight to stop it.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Showed USSR would use force; US accepted the reality — status quo accepted.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Checkpoint Charlie confrontation (1961) showed superpower tension.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Berlin was the Cold War's front line — every crisis played out there.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Wall's fall (1989) symbolised Cold War's end — reunification followed.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Evaluate: Berlin concentrated the divide; its reunification marked peace.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Four sectors → blockade → two states. (b) 1961 Wall stopped emigration, froze status quo. (c) Front line of Cold War; fall marked end.",
            commonErrors: [
              "Treating Berlin as background rather than central flashpoint.",
            ],
          },
        },
        {
          id: "his-u3-bq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Berlin Wall was built in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1945" },
              { id: "b", text: "1950" },
              { id: "c", text: "1961" },
              { id: "d", text: "1968" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Berlin Wall",
                statement:
                  "The Wall was built in August 1961 to stop East German emigration.",
              },
            ],
            steps: [
              {
                reasoning: "East Germany sealed the border in August 1961.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** 1961",
            commonErrors: [
              "Confusing it with the Blockade (1948) or later crises.",
            ],
          },
        },
        {
          id: "his-u3-bq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Berlin Wall primarily aimed to stop:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Western military invasion" },
              { id: "b", text: "East Germans fleeing to the West" },
              { id: "c", text: "Soviet troop movements" },
              { id: "d", text: "NATO expansion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Wall purpose",
                statement:
                  "The Wall stopped mass emigration from East to West Germany.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Between 1949 and 1961 millions of East Germans fled west; the Wall halted this.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** East Germans fleeing west",
            commonErrors: ["Treating it as a defensive military structure."],
          },
        },
        {
          id: "his-u3-bq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Checkpoints Charlie was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The main Soviet headquarters" },
              {
                id: "b",
                text: "The most famous crossing point between East and West Berlin",
              },
              { id: "c", text: "A NATO air base" },
              { id: "d", text: "A prison in East Berlin" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Checkpoint Charlie",
                statement:
                  "The most famous crossing point between East and West Berlin.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Checkpoint Charlie was the main crossing for diplomats and limited traffic.",
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
              "**(b)** Famous crossing point between East and West Berlin",
            commonErrors: ["Confusing it with other Berlin checkpoints."],
          },
        },
        {
          id: "his-u3-bq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Berlin Blockade (1948–49) was:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A Soviet attempt to force the Allies out of West Berlin by cutting supplies",
              },
              { id: "b", text: "An Allied invasion of East Germany" },
              { id: "c", text: "A German civil war" },
              { id: "d", text: "A UN peacekeeping operation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Berlin Blockade",
                statement:
                  "Soviet blockade of West Berlin supplies (1948–49), defeated by the airlift.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The USSR cut road and rail access to West Berlin; the Allies supplied it by air.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (a) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(a)** Soviet attempt to cut West Berlin supplies",
            commonErrors: ["Confusing it with the later Wall crisis."],
          },
        },
        {
          id: "his-u3-bq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which best explains why the Wall was a 'symbol of the Cold War'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It was the world's longest border" },
              {
                id: "b",
                text: "It physically embodied the division between communist East and capitalist West Europe",
              },
              { id: "c", text: "It separated two NATO countries" },
              { id: "d", text: "It was built by the United Nations" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wall symbolism",
                statement:
                  "The Wall made the Iron Curtain division physically visible in a divided city.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Berlin sat inside East Germany; the Wall made the bloc division concrete.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Physically embodied the East–West division",
            commonErrors: [
              "Treating it as just a border — it was a system of control.",
            ],
          },
        },
        {
          id: "his-u3-bq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Give the year for each event: (a) the Berlin Blockade began; (b) the Berlin Blockade ended; (c) the Wall was built; (d) the Wall fell.",
          response: {
            type: "numeric",
            parts: [
              { label: "Blockade began", answer: 1948 },
              { label: "Blockade ended", answer: 1949 },
              { label: "Wall built", answer: 1961 },
              { label: "Wall fell", answer: 1989 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Berlin chronology",
                statement: "1948 → 1949 → 1961 → 1989.",
              },
            ],
            steps: [
              {
                reasoning: "Blockade began June 1948.",
                working: "1948",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Blockade ended May 1949.",
                working: "1949",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Wall built August 1961.",
                working: "1961",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Wall fell November 1989.",
                working: "1989",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1948; 1949; 1961; 1989",
            commonErrors: ["Confusing the Blockade dates with the Wall."],
          },
        },
        {
          id: "his-u3-bq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Berlin Blockade; (b) the Wall was built; (c) the Wall fell.",
          response: {
            type: "numeric",
            parts: [
              { label: "Berlin Blockade", answer: 1948 },
              { label: "Wall built", answer: 1961 },
              { label: "Wall fell", answer: 1989 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Berlin chronology",
                statement: "1948 → 1961 → 1989.",
              },
            ],
            steps: [
              {
                reasoning: "Blockade 1948–49.",
                working: "1948",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Wall built 1961.",
                working: "1961",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Wall fell 1989.",
                working: "1989",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1948; 1961; 1989",
            commonErrors: ["Confusing the Blockade and Wall dates."],
          },
        },
        {
          id: "his-u3-bq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the Berlin Blockade, Germany's division into two states, the Wall was built, the Wall fell.",
          response: {
            type: "numeric",
            parts: [
              { label: "Berlin Blockade", answer: 1 },
              { label: "Germany divided", answer: 2 },
              { label: "Wall built", answer: 3 },
              { label: "Wall fell", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Berlin chronology",
                statement: "1948 → 1949 → 1961 → 1989.",
              },
            ],
            steps: [
              {
                reasoning: "Blockade 1948 — earliest.",
                working: "1948",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Two German states 1949 — second.",
                working: "1949",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Wall built 1961 — third.",
                working: "1961",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Wall fell 1989 — latest.",
                working: "1989",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Blockade 1, division 2, Wall built 3, Wall fell 4",
            commonErrors: [
              "Placing the Wall's construction before the Blockade.",
            ],
          },
        },
        {
          id: "his-u3-bq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Give the figure for each item about the Wall: (a) the approximate length in kilometres; (b) the number of years it stood; (c) the number of people who died trying to cross it.",
          response: {
            type: "numeric",
            parts: [
              { label: "Wall length (km)", answer: 155 },
              { label: "Years it stood", answer: 28 },
              { label: "Deaths crossing", answer: 140 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Wall figures",
                statement:
                  "~155 km long; stood 1961–1989 (28 years); over 140 killed crossing.",
              },
            ],
            steps: [
              {
                reasoning: "The Wall ran about 155 km around West Berlin.",
                working: "155",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$1989 - 1961 = 28$ years.",
                working: "1989 - 1961 = 28",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Over 140 people died attempting to cross.",
                working: "140",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "~155 km; 28 years; ~140 deaths",
            commonErrors: [
              "Misremembering the scale of deaths or the Wall's length.",
            ],
          },
        },
        {
          id: "his-u3-bq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate: (a) the number of years between the Berlin Blockade (1948) and the Wall's construction (1961); (b) between the Wall's construction (1961) and its fall (1989); (c) between the Blockade (1948) and the Wall's fall (1989).",
          response: {
            type: "numeric",
            parts: [
              { label: "Blockade to Wall built", answer: 13 },
              { label: "Wall built to fell", answer: 28 },
              { label: "Blockade to fall", answer: 41 },
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
                reasoning: "$1961 - 1948$.",
                working: "1961 - 1948 = 13",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$1989 - 1961$.",
                working: "1989 - 1961 = 28",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$1989 - 1948$.",
                working: "1989 - 1948 = 41",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "13; 28; 41 years",
            commonErrors: ["Arithmetic slips in subtraction."],
          },
        },
        {
          id: "his-u3-bq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the Berlin Wall divided the city for nearly three decades.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wall division",
                statement:
                  "The Wall physically separated East and West Berlin until 1989, symbolising the Cold War split.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Berlin remained divided because Germany was split between two blocs after 1949.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The Wall prevented East German citizens from fleeing west — preserving the GDR.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It served as a frontier between NATO and the Warsaw Pact in the heart of Europe.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: it symbolised and enforced the Cold War division until 1989.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The Wall enforced the East–West division by stopping emigration and symbolising the bloc split.",
            commonErrors: [
              "Treating the Wall as merely a physical barrier rather than a system of control.",
            ],
          },
        },
        {
          id: "his-u3-bq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the role of Berlin in the Cold War.",
          parts: [
            {
              label: "a",
              prompt: "Describe the Berlin Blockade and airlift (1948–49).",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain the construction and purpose of the Berlin Wall.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate why the Wall's fall became a symbol of the Cold War's end.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Berlin in Cold War",
                statement:
                  "Berlin was the Cold War's frontline — Blockade, Wall, and ultimate symbol of division.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "USSR cut supplies to West Berlin in 1948 to force Allies out.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Allies airlifted supplies for 11 months — USSR lifted blockade May 1949.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Wall built August 1961 to stop mass East German emigration.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "It became a fortified frontier — 'death strip', towers, guards.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Physical embodiment of the Iron Curtain in a divided city.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Fell November 1989 amid Eastern European revolutions.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Symbolised the collapse of communist control and German reunification.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Weighs its role as Cold War symbol against its practical function.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) Blockade → airlift. (b) Wall stopped emigration, embodied division. (c) Fall symbolised Cold War's end.",
            commonErrors: [
              "Treating Berlin as background rather than central flashpoint.",
            ],
          },
        },
      ],
    },
    {
      id: "his-u3-europe-blocs",
      title: "Europe Divided into Rival Blocs",
      skill:
        "Describe the formation of NATO and the Warsaw Pact, analyse the division of Europe, and explain how the blocs functioned.",
      lesson: {
        sections: [
          {
            heading: "NATO and the Warsaw Pact",
            body: "NATO (1949): US-led alliance of Western democracies for collective defence — 'an attack on one is an attack on all'. The Warsaw Pact (1955): Soviet-led counter-alliance of Eastern European states. Europe was militarily divided into two armed camps facing each other across the Iron Curtain.",
          },
          {
            heading: "Two Europes",
            body: "Western Europe: market economies, multi-party democracy, US security umbrella, Marshall Plan prosperity. Eastern Europe: Soviet-dominated one-party states, planned economies, censorship, dependence on USSR. The divide was not just military — it was economic, political and social.",
          },
          {
            heading: "Integration in the West",
            body: "Western Europe integrated economically: the European Coal and Steel Community (1951), EEC (1957), and eventually the EU. This integration made war between members economically irrational — a deliberate design to prevent another European war.",
          },
        ],
        keyFormulas: [
          { name: "NATO", statement: "1949 Western military alliance" },
          { name: "Warsaw Pact", statement: "1955 Soviet counter-alliance" },
          {
            name: "European integration",
            statement: "ECSC 1951 → EEC 1957 → EU",
          },
        ],
        workedExample: {
          problem:
            "Why did European integration begin in the West rather than across all Europe?",
          solution:
            "Western states shared democratic values and market economies; Soviet-dominated Eastern Europe was excluded — the Iron Curtain made pan-European integration impossible.",
        },
      },
      questions: [
        {
          id: "his-u3-ebq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "NATO was founded in 1949 primarily to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Defeat the USSR militarily" },
              {
                id: "b",
                text: "Provide collective defence for Western democracies",
              },
              { id: "c", text: "Promote European economic integration" },
              { id: "d", text: "End the Korean War" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "NATO purpose",
                statement:
                  "Collective defence alliance against Soviet expansion.",
              },
            ],
            steps: [
              {
                reasoning:
                  "NATO = mutual defence pact for Western Europe and North America.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Collective defence",
            commonErrors: [
              "Confusing military alliance with economic community.",
            ],
          },
        },
        {
          id: "his-u3-ebq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two differences between Western and Eastern Europe during the Cold War.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Two Europes",
                statement: "Political, economic, social differences.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Political: multi-party democracy and free elections vs one-party communist states.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Economic: market economies vs Soviet-style planned economies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Both dimensions clearly contrasted.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Democracy vs one-party rule; market vs planned economies.",
            commonErrors: ["Describing only military differences."],
          },
        },
        {
          id: "his-u3-ebq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the Warsaw Pact functioned as a counterweight to NATO.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Warsaw Pact",
                statement: "Soviet-led alliance mirroring NATO in the East.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Founded 1955 in response to West Germany joining NATO.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Provided mutual defence among Soviet satellites — but USSR dominated decisions.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Used to justify interventions (Hungary 1956, Czechoslovakia 1968).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Conclusion: alliance in name, Soviet control in practice.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Soviet-led counter-alliance; justified interventions; USSR dominated.",
            commonErrors: [
              "Treating it as an equal partnership — USSR controlled it.",
            ],
          },
        },
        {
          id: "his-u3-ebq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the division of Europe during the Cold War.",
          parts: [
            {
              label: "a",
              prompt: "Describe the two European blocs and their institutions.",
              marks: 3,
            },
            {
              label: "b",
              prompt: "Explain how the division affected ordinary Europeans.",
              marks: 3,
            },
            {
              label: "c",
              prompt: "Evaluate whether European integration was a success.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Divided Europe",
                statement: "Military, economic, social division for 40+ years.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "West: NATO, EEC, market economies, democracy; East: Warsaw Pact, COMECON, planned economies, one-party states.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Both blocs' institutions clearly described.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Iron Curtain divided the continent physically and ideologically.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Families divided; travel restricted; different living standards and freedoms.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Western prosperity vs Eastern shortages; emigration attempts risked death.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Generational divide — those born after 1945 knew only their bloc.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Success: prevented war, prosperity in West, laid groundwork for EU.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Limitations: excluded East; Cold War division persisted until 1989.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) NATO/EEC vs Warsaw Pact/COMECON. (b) Divided families, living standards, freedoms. (c) West integration successful but division persisted.",
            commonErrors: ["Ignoring the human dimension of the division."],
          },
        },
        {
          id: "his-u3-ebq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "NATO was founded in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1945" },
              { id: "b", text: "1949" },
              { id: "c", text: "1955" },
              { id: "d", text: "1961" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "NATO founding",
                statement:
                  "NATO was founded in 1949 as a Western military alliance.",
              },
            ],
            steps: [
              {
                reasoning: "NATO was established in April 1949.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** 1949",
            commonErrors: ["Confusing it with the Warsaw Pact (1955)."],
          },
        },
        {
          id: "his-u3-ebq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Warsaw Pact was founded in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1945" },
              { id: "b", text: "1949" },
              { id: "c", text: "1955" },
              { id: "d", text: "1961" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Warsaw Pact",
                statement:
                  "The Warsaw Pact was founded in 1955 as the Soviet-led military alliance.",
              },
            ],
            steps: [
              {
                reasoning: "The Warsaw Pact was established in May 1955.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (c) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** 1955",
            commonErrors: ["Confusing it with NATO (1949)."],
          },
        },
        {
          id: "his-u3-ebq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Marshall Plan (1948) provided:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Military aid to Western Europe" },
              {
                id: "b",
                text: "Economic aid to rebuild Western European economies",
              },
              { id: "c", text: "A military alliance against the USSR" },
              { id: "d", text: "Aid to communist Eastern Europe" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Marshall Plan",
                statement:
                  "US economic aid programme (1948) to rebuild Western Europe.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Marshall Plan offered economic assistance to European economies.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Economic aid to rebuild Western Europe",
            commonErrors: ["Confusing economic aid with military alliance."],
          },
        },
        {
          id: "his-u3-ebq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The 'Iron Curtain' described:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A physical wall between East and West Germany",
              },
              {
                id: "b",
                text: "The ideological and political division between communist Eastern and capitalist Western Europe",
              },
              { id: "c", text: "A Soviet naval blockade" },
              { id: "d", text: "A trade embargo" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Iron Curtain",
                statement:
                  "Metaphorical division between communist East and capitalist West Europe.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Coined by Churchill in 1946, it described the ideological divide across Europe.",
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
              "**(b)** Ideological division between East and West Europe",
            commonErrors: ["Confusing it with the literal Berlin Wall."],
          },
        },
        {
          id: "his-u3-ebq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which best explains the division of Europe into two blocs?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "European countries voluntarily chose their alliances",
              },
              {
                id: "b",
                text: "The post-war settlement and superpower competition created two rival spheres",
              },
              { id: "c", text: "The UN forced the division" },
              { id: "d", text: "Germany remained unified" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "European division",
                statement:
                  "Post-war settlement + superpower rivalry → two opposing blocs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The occupation zones hardened into rival spheres as the USA and USSR competed for influence.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therefore choice (b) is correct.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** Post-war settlement + superpower competition",
            commonErrors: ["Treating the division as voluntary."],
          },
        },
        {
          id: "his-u3-ebq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Give the year for each event: (a) the Marshall Plan was announced; (b) NATO was founded; (c) the Warsaw Pact was founded; (d) Germany was divided into two states.",
          response: {
            type: "numeric",
            parts: [
              { label: "Marshall Plan", answer: 1948 },
              { label: "NATO founded", answer: 1949 },
              { label: "Warsaw Pact", answer: 1955 },
              { label: "Germany divided", answer: 1949 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "European blocs chronology",
                statement: "1948 → 1949 → 1949 → 1955.",
              },
            ],
            steps: [
              {
                reasoning: "Marshall Plan announced 1947/implemented 1948.",
                working: "1948",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "NATO founded April 1949.",
                working: "1949",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Warsaw Pact May 1955.",
                working: "1955",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Two German states formed 1949.",
                working: "1949",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1948; 1949; 1955; 1949",
            commonErrors: ["Confusing NATO and Warsaw Pact dates."],
          },
        },
        {
          id: "his-u3-ebq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Marshall Plan was announced; (b) NATO was founded; (c) the Warsaw Pact was founded.",
          response: {
            type: "numeric",
            parts: [
              { label: "Marshall Plan", answer: 1948 },
              { label: "NATO", answer: 1949 },
              { label: "Warsaw Pact", answer: 1955 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "European blocs chronology",
                statement: "1948 → 1949 → 1955.",
              },
            ],
            steps: [
              {
                reasoning: "Marshall Plan 1948.",
                working: "1948",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "NATO 1949.",
                working: "1949",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Warsaw Pact 1955.",
                working: "1955",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1948; 1949; 1955",
            commonErrors: ["Confusing NATO and Warsaw Pact dates."],
          },
        },
        {
          id: "his-u3-ebq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the Marshall Plan, NATO founded, two German states formed, the Warsaw Pact founded.",
          response: {
            type: "numeric",
            parts: [
              { label: "Marshall Plan", answer: 1 },
              { label: "NATO founded", answer: 2 },
              { label: "Germany divided", answer: 3 },
              { label: "Warsaw Pact", answer: 4 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "European blocs chronology",
                statement: "1948 → 1949 → 1949 → 1955.",
              },
            ],
            steps: [
              {
                reasoning: "Marshall Plan 1948 — earliest.",
                working: "1948",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "NATO April 1949 — second.",
                working: "1949",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Two German states May 1949 — third.",
                working: "1949",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Warsaw Pact 1955 — latest.",
                working: "1955",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Marshall Plan 1, NATO 2, Germany divided 3, Warsaw Pact 4",
            commonErrors: ["Placing the Warsaw Pact before NATO."],
          },
        },
        {
          id: "his-u3-ebq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Give the year for each event: (a) Churchill coined 'Iron Curtain'; (b) the Marshall Plan was announced; (c) the Warsaw Pact was founded.",
          response: {
            type: "numeric",
            parts: [
              { label: "Iron Curtain speech", answer: 1946 },
              { label: "Marshall Plan", answer: 1948 },
              { label: "Warsaw Pact", answer: 1955 },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "European blocs chronology",
                statement: "1946 → 1948 → 1955.",
              },
            ],
            steps: [
              {
                reasoning: "Churchill's Fulton speech was March 1946.",
                working: "1946",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Marshall Plan 1948.",
                working: "1948",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Warsaw Pact 1955.",
                working: "1955",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "1946; 1948; 1955",
            commonErrors: ["Confusing the speech date with the Marshall Plan."],
          },
        },
        {
          id: "his-u3-ebq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate: (a) the number of years between NATO's founding (1949) and the Warsaw Pact's (1955); (b) between the Marshall Plan (1948) and the Warsaw Pact (1955); (c) between Churchill's speech (1946) and NATO's founding (1949).",
          response: {
            type: "numeric",
            parts: [
              { label: "NATO to Warsaw Pact", answer: 6 },
              { label: "Marshall Plan to Warsaw Pact", answer: 7 },
              { label: "Speech to NATO", answer: 3 },
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
                reasoning: "$1955 - 1949$.",
                working: "1955 - 1949 = 6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$1955 - 1948$.",
                working: "1955 - 1948 = 7",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "$1949 - 1946$.",
                working: "1949 - 1946 = 3",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "6; 7; 3 years",
            commonErrors: ["Arithmetic slips in subtraction."],
          },
        },
        {
          id: "his-u3-ebq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the Marshall Plan deepened the division of Europe.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Marshall Plan",
                statement:
                  "US economic aid to Western Europe drew it into the American sphere and prompted Soviet countermeasures.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The Plan offered aid to European economies, creating economic ties with the USA.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The USSR saw it as a tool of American influence and forbade Eastern Bloc participation.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "It accelerated the formation of two economic and political blocs.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Conclusion: economic aid became a tool of bloc-building.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The Plan bound Western Europe to the USA economically, prompting Soviet counter-organisation.",
            commonErrors: [
              "Treating it as purely humanitarian rather than strategic.",
            ],
          },
        },
        {
          id: "his-u3-ebq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the division of Europe into two blocs after WWII.",
          parts: [
            {
              label: "a",
              prompt: "Describe the formation of NATO and the Warsaw Pact.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain the role of the Marshall Plan and the Iron Curtain.",
              marks: 3,
            },
            {
              label: "c",
              prompt:
                "Evaluate the consequences of Europe's division for the Cold War.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "European division",
                statement:
                  "Two rival blocs formed: NATO (1949) and Warsaw Pact (1955), divided by the Iron Curtain.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "NATO founded 1949 as Western military alliance; Warsaw Pact 1955 as Soviet counterpart.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Both institutionalised the military division of Europe.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Marshall Plan (1948) gave US economic aid to Western Europe.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "USSR forbade Eastern Bloc participation — creating Comecon instead.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "'Iron Curtain' (1946) named the ideological division.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "c",
                reasoning:
                  "Consequence: Europe became the Cold War's main theatre — Berlin crises, nuclear deployments.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Division persisted until 1989–91 — a frozen conflict with flashpoints.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Evaluate: division stabilised the blocs but created permanent tension.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) NATO 1949, Warsaw Pact 1955. (b) Marshall Plan + Iron Curtain deepened division. (c) Europe became Cold War frontier.",
            commonErrors: ["Ignoring the human dimension of the division."],
          },
        },
      ],
    },
  ],
};
