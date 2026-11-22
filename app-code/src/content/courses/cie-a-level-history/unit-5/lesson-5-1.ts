import type { Lesson } from "../../../types.ts";

export const lesson51: Lesson = {
  id: "ciealehist-u5-lesson-5-1",
  code: "5-1",
  title: "Cold War Crises in Depth: Berlin, Cuba and the Arms Race",
  goal: "I CAN analyse the causes, course and consequences of major Cold War crises.",
  standards: ["Cambridge A Level History 9489", "Unit 5: 20th century depth"],
  vocabulary: [
    {
      term: "Berlin Blockade",
      definition: "Soviet closure of land routes to West Berlin 1948-49.",
    },
    { term: "Airlift", definition: "Western supply of West Berlin by air." },
    {
      term: "Cuban Missile Crisis",
      definition: "1962 confrontation over Soviet missiles in Cuba.",
    },
    {
      term: "Mutually Assured Destruction (MAD)",
      definition: "Nuclear deterrence doctrine.",
    },
    { term: "ICBM", definition: "Intercontinental ballistic missile." },
    {
      term: "Hotline",
      definition: "Direct US-Soviet communication line post-1962.",
    },
  ],
  concepts: [
    {
      id: "ciealehist-u5l1-c1-berlin",
      title: "Berlin Blockade and Airlift",
      skill:
        "Analyse causes and consequences of the first major Cold War crisis.",
      lesson: {
        sections: [
          {
            heading: "Causes",
            body: "Post-WWII division of Germany; West Berlin deep inside Soviet zone became showcase of Western prosperity. Soviet aims: force Western powers out, reunify Germany under Soviet control, test Western resolve. Western response: airlift supplied West Berlin without provoking war.",
          },
          {
            heading: "Consequences",
            body: "Airlift succeeded — Soviet blockade lifted May 1949. Consequences: Berlin remained divided (Wall built 1961); NATO formed 1949; Germany permanently divided (FRG/GDR 1949); first clear Cold War victory for West; established airlift as non-military resistance.",
          },
        ],
        keyFormulas: [
          { name: "Berlin Blockade", statement: "1948-49 land closure" },
          { name: "Airlift", statement: "Non-military supply" },
          { name: "NATO", statement: "Formed 1949" },
        ],
        workedExample: {
          problem: "Why did the USSR lift the Berlin Blockade?",
          solution:
            "Airlift made blockade ineffective — supplies continued at scale; blockade risked war with nuclear-armed West; lifting preserved image without conceding formally.",
        },
      },
      questions: [
        {
          id: "ciealehist-q-u5l1c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Berlin Blockade began in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1945" },
              { id: "b", text: "1956" },
              { id: "c", text: "1961" },
              { id: "d", text: "1948" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Blockade date", statement: "1948." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 1948",
            commonErrors: ["Wrong year."],
          },
        },
        {
          id: "ciealehist-q-u5l1c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the 'Berlin Airlift'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Airlift", statement: "Air supply." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Western powers supplied West Berlin entirely by air after Soviet land blockade — proved blockade could be beaten without war; ran ~15 months, ~278,000 flights.",
            commonErrors: ["Military invasion."],
          },
        },
        {
          id: "ciealehist-q-u5l1c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain Soviet motives for the Berlin Blockade.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Soviet motives",
                statement: "Consolidate zone.",
              },
            ],
            steps: [
              { reasoning: "Germany issue.", marks: 1, markCode: "M" },
              { reasoning: "West Berlin anomaly.", marks: 1, markCode: "M" },
              { reasoning: "Test resolve.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Force Western withdrawal from West Berlin → reunify Germany under Soviet control → test Western commitment; also propaganda victory over capitalist 'decadence'.",
            commonErrors: ["Single motive."],
          },
        },
        {
          id: "ciealehist-q-u5l1c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse the consequences of the Berlin Airlift for the Cold War.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Consequences",
                statement: "Division deepened.",
              },
            ],
            steps: [
              { reasoning: "Immediate.", marks: 1, markCode: "M" },
              { reasoning: "Long-term.", marks: 1, markCode: "M" },
              { reasoning: "Strategic.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Blockade lifted but Germany permanently divided; NATO formed; Berlin Wall 1961; established pattern of confrontation short of war — both sides learned limits.",
            commonErrors: ["Resolved tension."],
          },
        },
        {
          id: "ciealehist-q-u5l1c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether the Berlin Airlift was a Western victory or Soviet strategic gain.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interpretation",
                statement: "Both perspectives.",
              },
            ],
            steps: [
              { reasoning: "Western view.", marks: 1, markCode: "M" },
              { reasoning: "Soviet view.", marks: 1, markCode: "M" },
              { reasoning: "Historiographical.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Western: proved resolve, kept Berlin free, gained propaganda. Soviet: kept East Germany consolidated, forced Western military presence deep in zone — both claimed victory; division persisted 40 years.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciealehist-q-u5l1c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why was West Berlin strategically important?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Strategic value",
                statement: "Showcase + symbol.",
              },
            ],
            steps: [
              { reasoning: "Practical.", marks: 1, markCode: "M" },
              { reasoning: "Symbolic.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Economic showcase of Western prosperity inside Soviet zone + symbolic outpost of freedom — its survival demonstrated Western commitment to containment.",
            commonErrors: ["No importance."],
          },
        },
        {
          id: "ciealehist-q-u5l1c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "NATO was formed in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1961" },
              { id: "b", text: "1955" },
              { id: "c", text: "1949" },
              { id: "d", text: "1945" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "fact", name: "NATO", statement: "1949." }],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 1949",
            commonErrors: ["Wrong year."],
          },
        },
        {
          id: "ciealehist-q-u5l1c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why did the USSR build the Berlin Wall in 1961?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Berlin Wall",
                statement: "Stop exodus.",
              },
            ],
            steps: [
              { reasoning: "Problem.", marks: 1, markCode: "M" },
              { reasoning: "Solution.", marks: 1, markCode: "M" },
              { reasoning: "Effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "East Germans fled to West via Berlin — 'brain drain' threatened GDR economy; Wall stopped emigration, stabilised East Germany, but became symbol of repression.",
            commonErrors: ["Trade barrier."],
          },
        },
        {
          id: "ciealehist-q-u5l1c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "How did the Berlin crises show the limits of superpower confrontation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limits", statement: "Short of war." },
            ],
            steps: [
              { reasoning: "Pattern.", marks: 1, markCode: "M" },
              { reasoning: "Both crises.", marks: 1, markCode: "M" },
              { reasoning: "Learning.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Both sides avoided direct military clash — used blockade, airlift, wall — 'cold' war meant competition below war threshold; established rules of engagement.",
            commonErrors: ["War occurred."],
          },
        },
        {
          id: "ciealehist-q-u5l1c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the role of Berlin in the origins of the Cold War.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Berlin & origins",
                statement: "Flashpoint.",
              },
            ],
            steps: [
              { reasoning: "Postwar division.", marks: 1, markCode: "M" },
              { reasoning: "Berlin anomaly.", marks: 1, markCode: "M" },
              { reasoning: "Crisis sequence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs factors.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Berlin's unique status (deep in Soviet zone, Western-held) made it inevitable flashpoint — every confrontation (blockade, wall, check-point) tested and defined Cold War boundaries.",
            commonErrors: ["Peripheral role."],
          },
        },
        {
          id: "ciealehist-q-u5l1c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Berlin Airlift supplied West Berlin:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "By rail through the Soviet zone" },
              { id: "b", text: "Entirely by air" },
              { id: "c", text: "By sea convoy" },
              { id: "d", text: "By land convoy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Airlift", statement: "Air supply only." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Entirely by air",
            commonErrors: ["Land routes."],
          },
        },
        {
          id: "ciealehist-q-u5l1c1-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the 'Berlin Wall' built in 1961?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Berlin Wall", statement: "1961 barrier." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Purpose/effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Barbed-wire and concrete barrier sealing East Berlin — stopped mass emigration to the West ('brain drain'), stabilised GDR but became symbol of division and repression.",
            commonErrors: ["Trade barrier only."],
          },
        },
        {
          id: "ciealehist-q-u5l1c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the USSR chose a blockade rather than direct military action in 1948.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Blockade choice",
                statement: "Avoid direct war.",
              },
            ],
            steps: [
              { reasoning: "Direct attack risked war with Western powers.", marks: 1, markCode: "M" },
              { reasoning: "Blockade was reversible and deniable.", marks: 1, markCode: "M" },
              { reasoning: "Tested Western commitment without firing shots.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Military action risked open war; a blockade applied pressure while remaining below the war threshold and could be lifted without formal concession.",
            commonErrors: ["Military invasion."],
          },
        },
        {
          id: "ciealehist-q-u5l1c1-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse the role of the airlift in establishing the pattern of Cold War confrontation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Airlift pattern",
                statement: "Non-war competition.",
              },
            ],
            steps: [
              { reasoning: "Immediate: proved Western resolve without military clash.", marks: 1, markCode: "M" },
              { reasoning: "Soviet response: lifted blockade, kept East Germany consolidated.", marks: 1, markCode: "M" },
              { reasoning: "Long-term: established template — pressure short of war (blockade, wall, spies).", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: defined rules of engagement for 40 years.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Airlift showed both sides could compete intensely while avoiding direct war — set the 'cold' pattern of the whole conflict.",
            commonErrors: ["Escalated to war."],
          },
        },
        {
          id: "ciealehist-q-u5l1c1-15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare the Berlin Blockade (1948-49) and the Berlin Wall (1961) as methods of Soviet pressure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Soviet methods",
                statement: "Blockade vs wall.",
              },
            ],
            steps: [
              { reasoning: "Blockade: temporary closure of land routes, lifted after airlift.", marks: 1, markCode: "M" },
              { reasoning: "Wall: permanent physical barrier sealing the city.", marks: 1, markCode: "M" },
              { reasoning: "Common aim: force Western retreat / stop emigration.", marks: 1, markCode: "M" },
              { reasoning: "Different outcomes: blockade failed, wall succeeded for 28 years.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Both aimed to isolate West Berlin; blockade was temporary and reversible, wall was permanent and effective — same goal, different methods and results.",
            commonErrors: ["Identical methods."],
          },
        },
        {
          id: "ciealehist-q-u5l1c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether Berlin was the most important Cold War flashpoint.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Berlin flashpoint",
                statement: "Debated.",
              },
            ],
            steps: [
              { reasoning: "For: unique status made it site of every major confrontation (blockade, wall).", marks: 1, markCode: "M" },
              { reasoning: "Against: Cuba 1962 was far closer to nuclear war.", marks: 1, markCode: "M" },
              { reasoning: "Evidence: Berlin crises tested and defined boundaries repeatedly.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Berlin was the most frequent flashpoint and shaped the conflict's rules; Cuba was the most dangerous single moment — 'most important' depends on criterion chosen.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
    {
      id: "ciealehist-u5l1-c2-cuba",
      title: "Cuban Missile Crisis and nuclear deterrence",
      skill: "Analyse the Cuban Missile Crisis and MAD doctrine.",
      lesson: {
        sections: [
          {
            heading: "Cuban Missile Crisis 1962",
            body: "US discovered Soviet missile sites in Cuba — 90 miles from US. Kennedy imposed naval 'quarantine', demanded removal. 13 days of brinkmanship: US invasion planned, Soviet subs authorised nuclear launch. Resolution: Khrushchev removed missiles publicly; US secretly removed Jupiter missiles from Turkey + pledged not to invade Cuba.",
          },
          {
            heading: "MAD and consequences",
            body: "**MAD**: neither side could attack without suicidal retaliation — paradoxically stabilised (deterrence). Consequences: hotline established; Limited Test Ban Treaty 1963; arms control talks; both recognised need for rules; 'close shave' accelerated détente.",
          },
        ],
        keyFormulas: [
          { name: "Cuban crisis", statement: "13 days brinkmanship" },
          { name: "MAD", statement: "Mutual deterrence" },
          { name: "Resolution", statement: "Missiles out, secret deal" },
        ],
        workedExample: {
          problem:
            "Why was the Cuban Missile Crisis the closest the Cold War came to nuclear war?",
          solution:
            "Soviet missiles in Cuba could strike US in minutes; US had no warning time; both leaders under pressure to act — miscalculation risk highest ever.",
        },
      },
      questions: [
        {
          id: "ciealehist-q-u5l1c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Cuban Missile Crisis occurred in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1962" },
              { id: "b", text: "1948" },
              { id: "c", text: "1979" },
              { id: "d", text: "1956" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Crisis year", statement: "1962." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** 1962",
            commonErrors: ["Wrong year."],
          },
        },
        {
          id: "ciealehist-q-u5l1c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was 'MAD' in nuclear strategy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "MAD",
                statement: "Mutual deterrence.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Mutually Assured Destruction — neither side could attack first without being destroyed in retaliation → paradoxical stability through fear.",
            commonErrors: ["Aggressive strategy."],
          },
        },
        {
          id: "ciealehist-q-u5l1c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the US imposed a 'quarantine' rather than invade Cuba.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Quarantine choice",
                statement: "Avoid escalation.",
              },
            ],
            steps: [
              { reasoning: "Invasion risk.", marks: 1, markCode: "M" },
              { reasoning: "Quarantine benefit.", marks: 1, markCode: "M" },
              { reasoning: "Soviet response.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Invasion risked nuclear war + loss of moral high ground; quarantine (blockade) gave USSR chance to withdraw without losing face — pressure without immediate war.",
            commonErrors: ["Invaded directly."],
          },
        },
        {
          id: "ciealehist-q-u5l1c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse the secret element of the Cuban Missile Crisis resolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Secret deal",
                statement: "Jupiter missiles.",
              },
            ],
            steps: [
              { reasoning: "Public outcome.", marks: 1, markCode: "M" },
              { reasoning: "Secret element.", marks: 1, markCode: "M" },
              { reasoning: "Why secret.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Public: USSR removed Cuban missiles. Secret: US removed Jupiter missiles from Turkey + pledged no invasion — saved face both sides, avoided appearing to concede publicly.",
            commonErrors: ["No secret deal."],
          },
        },
        {
          id: "ciealehist-q-u5l1c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether MAD stabilised or destabilised the Cold War.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "MAD debate",
                statement: "Deterrence vs risk.",
              },
            ],
            steps: [
              { reasoning: "Stability argument.", marks: 1, markCode: "M" },
              { reasoning: "Risk argument.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Stability: prevented direct war for 40 years. Risk: accidents, miscalculation (Cuba), arms race escalation — 'peace through terror'; historians divided.",
            commonErrors: ["One effect."],
          },
        },
        {
          id: "ciealehist-q-u5l1c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the 'hotline' established after the crisis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Hotline",
                statement: "Direct communication.",
              },
            ],
            steps: [
              { reasoning: "Purpose.", marks: 1, markCode: "M" },
              { reasoning: "Significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Direct teletype line between Washington and Moscow — enabled instant communication during crises, reducing miscalculation risk after near-miss of Cuba.",
            commonErrors: ["Military line."],
          },
        },
        {
          id: "ciealehist-q-u5l1c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Cuban Missile Crisis ended with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Soviet missiles removed from Cuba" },
              { id: "b", text: "Nuclear exchange" },
              { id: "c", text: "US invasion of Cuba" },
              { id: "d", text: "Cuban independence" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Outcome", statement: "Missiles out." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Missiles removed",
            commonErrors: ["War."],
          },
        },
        {
          id: "ciealehist-q-u5l1c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two consequences of the Cuban Missile Crisis for superpower relations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Consequences",
                statement: "Arms control + rules.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. Limited Test Ban Treaty 1963 and hotline establishment — both recognised need for crisis management rules after near-war.",
            commonErrors: ["War outcome."],
          },
        },
        {
          id: "ciealehist-q-u5l1c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why did Khrushchev place missiles in Cuba?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Soviet motives",
                statement: "Strategic parity.",
              },
            ],
            steps: [
              { reasoning: "US missiles in Turkey.", marks: 1, markCode: "M" },
              { reasoning: "Cuba security.", marks: 1, markCode: "M" },
              { reasoning: "Parity goal.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Counter US Jupiter missiles in Turkey (already targeted USSR); protect Cuba from US invasion; achieve nuclear parity — missiles 90 miles from US changed strategic balance.",
            commonErrors: ["Single motive."],
          },
        },
        {
          id: "ciealehist-q-u5l1c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the role of leadership in the Cuban Missile Crisis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Leadership",
                statement: "Kennedy + Khrushchev.",
              },
            ],
            steps: [
              { reasoning: "Kennedy's approach.", marks: 1, markCode: "M" },
              { reasoning: "Khrushchev's approach.", marks: 1, markCode: "M" },
              { reasoning: "Constraints.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Kennedy: measured, blockade over invasion, accepted compromise. Khrushchev: escalated then backed down — both constrained by military/hardliners; personal diplomacy crucial to resolution.",
            commonErrors: ["One leader."],
          },
        },
        {
          id: "ciealehist-q-u5l1c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'quarantine' imposed during the Cuban Missile Crisis was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A trade embargo on the USSR" },
              { id: "b", text: "An air strike on missile sites" },
              { id: "c", text: "A naval blockade of Cuba" },
              { id: "d", text: "A ground invasion of Cuba" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Quarantine", statement: "Naval blockade." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Naval blockade of Cuba",
            commonErrors: ["Invasion."],
          },
        },
        {
          id: "ciealehist-q-u5l1c2-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the Limited Test Ban Treaty (1963)?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Test Ban",
                statement: "1963 treaty.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "First arms control treaty — banned nuclear tests in the atmosphere, outer space and underwater; first major post-Cuba step toward arms limitation.",
            commonErrors: ["Total disarmament."],
          },
        },
        {
          id: "ciealehist-q-u5l1c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the Cuban Missile Crisis was resolved in only 13 days despite the stakes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Resolution speed",
                statement: "Diplomacy + constraints.",
              },
            ],
            steps: [
              { reasoning: "Back-channel diplomacy allowed compromise without public loss of face.", marks: 1, markCode: "M" },
              { reasoning: "Both leaders feared nuclear war and faced hardliner pressure.", marks: 1, markCode: "M" },
              { reasoning: "Secret deal (Jupiter missiles) gave both sides an exit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Quiet diplomacy, mutual fear of escalation and a face-saving secret deal allowed both leaders to withdraw without appearing to concede.",
            commonErrors: ["Military victory."],
          },
        },
        {
          id: "ciealehist-q-u5l1c2-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse the role of 'brinkmanship' in the Cuban Missile Crisis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Brinkmanship",
                statement: "Risky pressure.",
              },
            ],
            steps: [
              { reasoning: "Definition: pushing confrontation to the edge to force concessions.", marks: 1, markCode: "M" },
              { reasoning: "US example: quarantine + invasion planning signalled resolve.", marks: 1, markCode: "M" },
              { reasoning: "Soviet example: missile deployment + submarine authorisation.", marks: 1, markCode: "M" },
              { reasoning: "Assessment: brinkmanship produced resolution but nearly caused catastrophe.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Both sides used brinkmanship — blockade, invasion plans, submarine launch authority — which forced compromise but brought the world closest ever to nuclear war.",
            commonErrors: ["Peaceful negotiation only."],
          },
        },
        {
          id: "ciealehist-q-u5l1c2-15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare the Berlin crises and the Cuban Missile Crisis as examples of Cold War confrontation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Confrontation comparison",
                statement: "Berlin vs Cuba.",
              },
            ],
            steps: [
              { reasoning: "Berlin: indirect pressure via blockade and wall — conventional means.", marks: 1, markCode: "M" },
              { reasoning: "Cuba: direct nuclear brinkmanship — existential stakes.", marks: 1, markCode: "M" },
              { reasoning: "Similarity: both avoided direct war through calculated risk.", marks: 1, markCode: "M" },
              { reasoning: "Difference: Cuba showed how close confrontation could get to annihilation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Berlin tested resolve through indirect pressure; Cuba risked nuclear exchange directly — same logic of controlled escalation, vastly different stakes.",
            commonErrors: ["Identical crises."],
          },
        },
        {
          id: "ciealehist-q-u5l1c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether the Cuban Missile Crisis made nuclear war more or less likely in the long term.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Long-term effect",
                statement: "Risk vs learning.",
              },
            ],
            steps: [
              { reasoning: "Less likely: MAD deterrence clarified; hotline and test ban reduced miscalculation risk.", marks: 1, markCode: "M" },
              { reasoning: "More likely: crisis proved leaders might gamble; arms race continued and expanded.", marks: 1, markCode: "M" },
              { reasoning: "Evidence: no direct superpower war followed for 40 years, but proxy wars continued.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Probably less likely: the 'close shave' taught both sides the need for rules — but only because leaders chose restraint; the underlying nuclear danger remained.",
            commonErrors: ["One effect only."],
          },
        },
      ],
    },
  ],
};
