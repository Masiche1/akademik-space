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
              { id: "a", text: "Discovery of Soviet missiles in Cuba" },
              { id: "b", text: "US invasion of Cuba" },
              { id: "c", text: "Cuban independence" },
              { id: "d", text: "Soviet invasion of USA" },
            ],
            correctChoiceId: "a",
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
              { id: "a", text: "1961" },
              { id: "b", text: "1945" },
              { id: "c", text: "1989" },
              { id: "d", text: "1991" },
            ],
            correctChoiceId: "a",
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
