import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "oleh-u1-lesson-1-2",
  code: "1-2",
  title: "Cold War Crises: Cuba and Berlin Wall",
  goal: "I CAN describe the Cuban Missile Crisis and the construction of the Berlin Wall.",
  standards: ["2130: Cold War crises"],
  vocabulary: [
    {
      term: "Cuban Missile Crisis",
      definition: "1962 confrontation over Soviet missiles in Cuba.",
    },
    {
      term: "Berlin Wall",
      definition: "Barrier built 1961 dividing East and West Berlin.",
    },
    {
      term: "Bay of Pigs",
      definition: "Failed 1961 US-backed invasion of Cuba.",
    },
    {
      term: "Nuclear deterrence",
      definition: "Preventing war through threat of nuclear destruction.",
    },
    {
      term: "Hotline",
      definition: "Direct communication line between US and USSR leaders.",
    },
    {
      term: "Detente",
      definition: "Period of reduced tension between superpowers.",
    },
  ],
  concepts: [
    {
      id: "oleh-u1-cuban-crisis",
      title: "Cuban Missile Crisis",
      skill: "Explain causes, course and resolution of the 1962 crisis.",
      lesson: {
        sections: [
          {
            heading: "Background",
            body: "Cuba's Fidel Castro allied with USSR after 1959 revolution. Bay of Pigs invasion (1961) failed — pushed Cuba closer to USSR. USSR secretly installed nuclear missiles in Cuba.",
          },
          {
            heading: "The crisis",
            body: "October 1962: US spy planes discovered missiles. JFK imposed naval quarantine (blockade) — demanded removal. 13 days of extreme tension — closest to nuclear war. Kennedy and Khrushchev negotiated.",
          },
          {
            heading: "Resolution",
            body: "USSR removed missiles publicly; USA secretly agreed to remove missiles from Turkey and not invade Cuba. Hotline established (1963). Test Ban Treaty (1963). Crisis led to detente — reduced tensions.",
          },
        ],
        keyFormulas: [
          {
            name: "Cuban Crisis",
            statement:
              "Missiles→quarantine→13 days→negotiation→hotline+test ban.",
          },
        ],
        workedExample: {
          problem:
            "Why was the Cuban Missile Crisis the closest to nuclear war?",
          solution:
            "Soviet missiles in Cuba could reach US in minutes — both sides had nuclear weapons and limited time to respond.",
        },
      },
      questions: [
        {
          id: "oleh-u1-cc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What triggered the Cuban Missile Crisis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "US invasion of Cuba" },
              { id: "b", text: "Discovery of Soviet missiles in Cuba" },
              { id: "c", text: "Cuban independence" },
              { id: "d", text: "Soviet invasion of USA" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Trigger",
                statement: "Soviet missiles discovered.",
              },
            ],
            steps: [
              {
                reasoning: "Missiles discovered = trigger.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Soviet missiles discovered",
            commonErrors: ["Saying invasion."],
          },
        },
        {
          id: "oleh-u1-cc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the US response to the missiles?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "US response",
                statement: "Naval quarantine/demanded removal.",
              },
            ],
            steps: [
              { reasoning: "Blockade/quarantine.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Demanded missile removal.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Naval quarantine + demanded removal.",
            commonErrors: ["Saying immediate war."],
          },
        },
        {
          id: "oleh-u1-cc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the Cuban Missile Crisis was resolved.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resolution",
                statement: "Missiles removed+secret deal+hotline.",
              },
            ],
            steps: [
              {
                reasoning: "USSR removed missiles publicly.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "USA secretly removed Turkey missiles.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "No invasion of Cuba promised.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Hotline established.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Public removal+secret deal+hotline+test ban.",
            commonErrors: ["One-sided resolution."],
          },
        },
        {
          id: "oleh-u1-cc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Cuban Missile Crisis.",
          parts: [
            { label: "a", prompt: "Trigger?", marks: 1 },
            { label: "b", prompt: "US response?", marks: 2 },
            { label: "c", prompt: "Resolution terms?", marks: 3 },
            { label: "d", prompt: "Why closest to nuclear war?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cuban Crisis",
                statement: "Trigger+response+resolution+significance.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Missiles discovered.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Quarantine.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Demanded removal.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Missiles removed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Secret Turkey deal.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "No invasion.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Missiles could reach US.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Limited time to respond.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Both nuclear powers.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "(a) trigger (b) quarantine (c) resolution (d) closest to war",
          },
        },
        {
          id: "oleh-u1-cc-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did the Cuban Missile Crisis occur?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1962" },
              { id: "b", text: "1959" },
              { id: "c", text: "1961" },
              { id: "d", text: "1963" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cuban Missile Crisis",
                statement: "October 1962.",
              },
            ],
            steps: [
              { reasoning: "Crisis in 1962.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** 1962",
            commonErrors: ["Confusing with Bay of Pigs."],
          },
        },
        {
          id: "oleh-u1-cc-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "Who were the two superpower leaders during the Cuban Missile Crisis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Roosevelt and Stalin" },
              { id: "b", text: "Truman and Khrushchev" },
              { id: "c", text: "Kennedy (USA) and Khrushchev (USSR)" },
              { id: "d", text: "Eisenhower and Brezhnev" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Leaders",
                statement: "JFK and Khrushchev negotiated.",
              },
            ],
            steps: [
              { reasoning: "Kennedy and Khrushchev.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Kennedy (USA) and Khrushchev (USSR)",
            commonErrors: ["Wrong leaders chosen."],
          },
        },
        {
          id: "oleh-u1-cc-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "How many days did the Cuban Missile Crisis last?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 13 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "13 days",
                statement: "Crisis lasted 13 days.",
              },
            ],
            steps: [
              { reasoning: "13 days of tension.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "13",
          },
        },
        {
          id: "oleh-u1-cc-q8",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the Bay of Pigs?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Bay of Pigs",
                statement: "Failed 1961 US-backed invasion of Cuba.",
              },
            ],
            steps: [
              {
                reasoning: "US-backed invasion attempt.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Failed in 1961.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "Failed 1961 US-backed invasion of Cuba.",
            commonErrors: ["Confusing with missile crisis."],
          },
        },
        {
          id: "oleh-u1-cc-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What did the USA call its naval response to the missiles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A naval battle" },
              { id: "b", text: "A quarantine (blockade)" },
              { id: "c", text: "An airlift" },
              { id: "d", text: "A full invasion" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Quarantine",
                statement: "US naval blockade of Cuba.",
              },
            ],
            steps: [
              { reasoning: "Quarantine = blockade.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** A quarantine (blockade)",
            commonErrors: ["Saying immediate invasion."],
          },
        },
        {
          id: "oleh-u1-cc-q10",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year was the US-USSR hotline established?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1963 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hotline",
                statement: "Established 1963.",
              },
            ],
            steps: [
              { reasoning: "Hotline 1963.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1963",
          },
        },
        {
          id: "oleh-u1-cc-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the Bay of Pigs pushed Cuba closer to the USSR.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bay of Pigs effect",
                statement: "Failed invasion → Castro sought Soviet protection.",
              },
            ],
            steps: [
              {
                reasoning: "US-backed invasion failed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Castro feared further US attacks.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Castro allied with USSR.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Led to Soviet missiles in Cuba.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Failure of the invasion made Castro fear US attack — he turned to the USSR for protection, leading to missiles in Cuba.",
            commonErrors: ["Not linking to missile crisis."],
          },
        },
        {
          id: "oleh-u1-cc-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Where did the USSR secretly install nuclear missiles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cuba" },
              { id: "b", text: "Turkey" },
              { id: "c", text: "Venezuela" },
              { id: "d", text: "East Germany" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Missiles location",
                statement: "Soviet missiles in Cuba.",
              },
            ],
            steps: [
              { reasoning: "Missiles in Cuba.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Cuba",
            commonErrors: ["Choosing Turkey (US missiles)."],
          },
        },
        {
          id: "oleh-u1-cc-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year was the Nuclear Test Ban Treaty signed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1963 }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Test Ban Treaty",
                statement: "Signed 1963.",
              },
            ],
            steps: [
              { reasoning: "Treaty signed 1963.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1963",
          },
        },
        {
          id: "oleh-u1-cc-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the secret part of the crisis resolution?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secret deal",
                statement: "US secretly removed missiles from Turkey.",
              },
            ],
            steps: [
              {
                reasoning: "US removed missiles from Turkey.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Kept secret from public.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "USA secretly agreed to remove its missiles from Turkey.",
            commonErrors: ["Missing the secrecy."],
          },
        },
        {
          id: "oleh-u1-cc-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What did the Cuban Missile Crisis lead to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "US invasion of Cuba" },
              { id: "b", text: "Breakup of NATO" },
              { id: "c", text: "Detente — reduced tension" },
              { id: "d", text: "Immediate nuclear war" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Crisis outcome",
                statement: "Led to detente.",
              },
            ],
            steps: [
              {
                reasoning: "Crisis led to detente.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Detente — reduced tension",
            commonErrors: ["Saying war broke out."],
          },
        },
        {
          id: "oleh-u1-cc-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the Cuban Missile Crisis changed superpower relations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Changed relations",
                statement: "Hotline+test ban+detente+nuclear danger recognised.",
              },
            ],
            steps: [
              {
                reasoning: "Hotline established for direct talks.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Test Ban Treaty signed.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Both sides recognised nuclear danger.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Period of detente followed.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "Hotline, test ban treaty and detente followed — both sides recognised the danger of nuclear war.",
            commonErrors: ["Only describing the crisis itself."],
          },
        },
      ],
    },
    {
      id: "oleh-u1-berlin-wall",
      title: "Berlin Wall and detente",
      skill: "Describe the Berlin Wall, its fall and the detente period.",
      lesson: {
        sections: [
          {
            heading: "Berlin Wall (1961)",
            body: "East Germany built wall to stop East Berliners fleeing to West. Divided city for 28 years — symbol of Cold War division. ~100+ killed trying to cross. Families separated.",
          },
          {
            heading: "Fall of the Wall (1989)",
            body: "Gorbachev's reforms (glasnost, perestroika) weakened Soviet control. Mass protests in East Germany. Nov 9 1989: wall opened — crowds celebrated. Symbolic end of Cold War division.",
          },
          {
            heading: "Detente",
            body: "1970s period of reduced tension: SALT treaties (arms limitation), Helsinki Accords (1975 — human rights), Ostpolitik (Willy Brandt). Detente collapsed with Soviet invasion of Afghanistan (1979) but laid groundwork for end of Cold War.",
          },
        ],
        keyFormulas: [
          {
            name: "Berlin Wall",
            statement: "1961 built→1989 fell; Detente=1970s reduced tension.",
          },
        ],
        workedExample: {
          problem: "Why did the Berlin Wall fall in 1989?",
          solution:
            "Gorbachev's reforms weakened control; mass protests forced opening; symbol of Soviet decline.",
        },
      },
      questions: [
        {
          id: "oleh-u1-bw-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "When was the Berlin Wall built?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1945" },
              { id: "b", text: "1961" },
              { id: "c", text: "1989" },
              { id: "d", text: "1991" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Berlin Wall",
                statement: "Built 1961.",
              },
            ],
            steps: [
              { reasoning: "Wall built 1961.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** 1961",
            commonErrors: ["Confusing build/fall dates."],
          },
        },
        {
          id: "oleh-u1-bw-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why was the Berlin Wall built?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Wall purpose",
                statement: "Stop East Berliners fleeing west.",
              },
            ],
            steps: [
              { reasoning: "Stop defections.", marks: 1, markCode: "AO1" },
              {
                reasoning: "Keep population/resources.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "To stop East Berliners fleeing to West.",
            commonErrors: ["Saying it was for trade."],
          },
        },
        {
          id: "oleh-u1-bw-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the Berlin Wall fell in 1989.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wall fall",
                statement: "Gorbachev reforms+protests+Soviet decline.",
              },
            ],
            steps: [
              {
                reasoning: "Gorbachev's glasnost/perestroika.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Mass protests in East Germany.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Soviet control weakened.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer: "Reforms+protests+Soviet decline → wall fell.",
            commonErrors: ["Only one cause."],
          },
        },
        {
          id: "oleh-u1-bw-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Berlin Wall and detente.",
          parts: [
            { label: "a", prompt: "Wall built when?", marks: 1 },
            { label: "b", prompt: "Why built?", marks: 2 },
            { label: "c", prompt: "Why fell 1989?", marks: 3 },
            { label: "d", prompt: "What is detente?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wall/detente",
                statement: "Dates+causes+detente.",
              },
            ],
            steps: [
              { part: "a", reasoning: "1961.", marks: 1, markCode: "AO1" },
              {
                part: "b",
                reasoning: "Stop defections.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "Keep resources.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Gorbachev reforms.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Protests.", marks: 1, markCode: "AO1" },
              {
                part: "c",
                reasoning: "Soviet decline.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Reduced tension period.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "SALT/Helsinki.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "d", reasoning: "1970s.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer:
              "(a) 1961 (b) defections (c) reforms+protests (d) detente",
          },
        },
        {
          id: "oleh-u1-bw-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did the Berlin Wall fall?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1975" },
              { id: "b", text: "1991" },
              { id: "c", text: "1989" },
              { id: "d", text: "1961" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fall of the Wall",
                statement: "Wall opened 9 November 1989.",
              },
            ],
            steps: [
              { reasoning: "Wall fell in 1989.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** 1989",
            commonErrors: ["Confusing fall with construction date."],
          },
        },
        {
          id: "oleh-u1-bw-q6",
          difficulty: "core",
          totalMarks: 1,
          stem: "What did 'glasnost' and 'perestroika' refer to?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "NATO military exercises" },
              { id: "b", text: "East German border guards" },
              { id: "c", text: "The SALT treaty clauses" },
              { id: "d", text: "Gorbachev's policies of openness and reform" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Gorbachev's reforms",
                statement: "Glasnost = openness; perestroika = reform.",
              },
            ],
            steps: [
              {
                reasoning: "Gorbachev's reform policies.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "**(a)** Gorbachev's policies of openness and reform",
            commonErrors: ["Thinking they were military terms."],
          },
        },
        {
          id: "oleh-u1-bw-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "For approximately how many years did the Berlin Wall stand?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 28, tolerance: 1 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Wall duration",
                statement: "1961 to 1989 — 28 years.",
              },
            ],
            steps: [
              {
                reasoning: "1961 to 1989 = 28 years.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "28",
          },
        },
        {
          id: "oleh-u1-bw-q8",
          difficulty: "core",
          totalMarks: 1,
          stem: "What was 'detente'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The fall of communism" },
              { id: "b", text: "A type of nuclear missile" },
              {
                id: "c",
                text: "A period of reduced tension between the superpowers",
              },
              { id: "d", text: "A German political party" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Detente",
                statement: "1970s period of reduced tension.",
              },
            ],
            steps: [
              {
                reasoning: "Detente = reduced tension.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** A period of reduced tension between the superpowers",
            commonErrors: ["Confusing with the cold war itself."],
          },
        },
        {
          id: "oleh-u1-bw-q9",
          difficulty: "core",
          totalMarks: 1,
          stem: "In which year was the first SALT treaty signed?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1972 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "SALT treaty",
                statement: "SALT I signed 1972.",
              },
            ],
            steps: [
              { reasoning: "SALT I signed 1972.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1972",
          },
        },
        {
          id: "oleh-u1-bw-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was Ostpolitik?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ostpolitik",
                statement: "West German policy of improving relations with Eastern bloc.",
              },
            ],
            steps: [
              {
                reasoning: "Willy Brandt's policy for West Germany.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Improved relations/trade with Eastern bloc.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "West Germany's policy (under Willy Brandt) of improving relations and trade with the Eastern bloc.",
            commonErrors: ["Thinking it was a Soviet policy."],
          },
        },
        {
          id: "oleh-u1-bw-q11",
          difficulty: "challenge",
          totalMarks: 1,
          stem: "Why was the Berlin Wall seen as a symbol of the Cold War?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It protected a nuclear reactor" },
              {
                id: "b",
                text: "It physically divided a city and Europe between communism and capitalism",
              },
              { id: "c", text: "It marked the border with Poland" },
              { id: "d", text: "It was the longest wall ever built" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Wall as symbol",
                statement: "Divided Berlin/Europe between East and West.",
              },
            ],
            steps: [
              {
                reasoning: "Wall embodied Cold War division.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer:
              "**(a)** It physically divided a city and Europe between communism and capitalism",
            commonErrors: ["Giving only a practical reason."],
          },
        },
        {
          id: "oleh-u1-bw-q12",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which year did the Soviet invasion of Afghanistan help end detente?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1979 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "End of detente",
                statement: "Soviet invasion of Afghanistan 1979 collapsed detente.",
              },
            ],
            steps: [
              { reasoning: "Invasion in 1979.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "1979",
          },
        },
        {
          id: "oleh-u1-bw-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "What did the Helsinki Accords (1975) include?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Recognition of European borders and human rights" },
              { id: "b", text: "Soviet withdrawal from Cuba" },
              { id: "c", text: "German reunification" },
              { id: "d", text: "NATO expansion into Eastern Europe" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Helsinki Accords",
                statement: "1975 — borders/security and human rights.",
              },
            ],
            steps: [
              { reasoning: "Helsinki recognised borders and rights.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(a)** Recognition of European borders and human rights",
            commonErrors: ["Thinking it ended the Cold War."],
          },
        },
        {
          id: "oleh-u1-bw-q14",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why the fall of the Berlin Wall was seen as the symbolic end of the Cold War.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Symbolic end",
                statement: "Wall fell=division ended+Soviet decline visible.",
              },
            ],
            steps: [
              {
                reasoning: "Wall embodied East-West division.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Its fall ended the division of Europe.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Showed weakening Soviet control.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear explanation of symbolism.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "The wall embodied the division of Europe; its fall showed Soviet control collapsing and was followed by the end of communist rule in Eastern Europe.",
            commonErrors: ["Only describing the events of 1989."],
          },
        },
        {
          id: "oleh-u1-bw-q15",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Approximately how many people were killed trying to cross the Berlin Wall?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 100, tolerance: 50 }],
          },
          markscheme: {
            principles: [
              {
                kind: "context",
                name: "Wall deaths",
                statement: "Over 100 people killed trying to cross.",
              },
            ],
            steps: [
              {
                reasoning: "About 100 killed crossing.",
                marks: 1,
                markCode: "AO1",
              },
            ],
            finalAnswer: "100",
          },
        },
        {
          id: "oleh-u1-bw-q16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how the detente period helped pave the way for the end of the Cold War.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Detente legacy",
                statement: "SALT+Helsinki+Ostpolitik built trust and pressure.",
              },
            ],
            steps: [
              {
                reasoning: "SALT treaties limited the arms race.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Helsinki pressed USSR on human rights.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Ostpolitik improved East-West relations.",
                marks: 1,
                markCode: "AO2",
              },
              {
                reasoning: "Clear explanation of long-term impact.",
                marks: 1,
                markCode: "AO3",
              },
            ],
            finalAnswer:
              "SALT, Helsinki and Ostpolitik built trust and exposed Soviet weaknesses, laying groundwork for Gorbachev's reforms and the end of the Cold War.",
            commonErrors: ["Treating detente as the direct cause of 1989."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "oleh-u1-1-2-notes",
      title: "Cold War crises — notes",
      summary: "Cuban Missile Crisis, Berlin Wall, detente.",
      sections: [
        {
          heading: "Cuban Crisis",
          body: "Missiles→quarantine→13 days→resolution+hotline. Closest to nuclear war.",
        },
        {
          heading: "Berlin Wall",
          body: "1961 built to stop defections; 1989 fell after Gorbachev reforms+protests. Detente=1970s reduced tension.",
        },
      ],
    },
  ],
};
