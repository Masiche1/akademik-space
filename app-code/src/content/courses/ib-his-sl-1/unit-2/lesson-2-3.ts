import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "his-u2-lesson-2-3",
  code: "2-3",
  title: "The Cold War Begins",
  goal: "I CAN explain the origins of the Cold War, describe the formation of rival blocs, and analyse early confrontations like the Berlin Blockade.",
  standards: ["Paper 1", "Paper 2", "Topic 6"],
  vocabulary: [
    { term: "Cold War", definition: "Geopolitical rivalry between the USA and USSR (c. 1947–1991) fought through proxies, alliances and nuclear deterrence, not direct war." },
    { term: "Iron Curtain", definition: "Churchill's 1946 term for the ideological and physical divide between Soviet Eastern Europe and the West." },
    { term: "Truman Doctrine", definition: "US policy (1947) of supporting free peoples against communist subversion — first applied to Greece and Turkey." },
    { term: "Marshall Plan", definition: "US aid programme (1948–52) rebuilding Western Europe; both economic recovery and anti-communist containment." },
    { term: "NATO", definition: "North Atlantic Treaty Organization (1949) — Western military alliance for collective defence against the USSR." },
    { term: "Warsaw Pact", definition: "Soviet-led military alliance (1955) countering NATO in Eastern Europe." },
  ],
  concepts: [
    {
      id: "his-u2-cold-war-origins",
      title: "Origins of the Cold War",
      skill: "Explain the ideological, political and economic causes of US–Soviet rivalry after WWII.",
      lesson: {
        sections: [
          {
            heading: "Ideological and political divisions",
            body: "The USA championed liberal democracy and free markets; the USSR promoted communism and one-party rule. At Yalta (1945) and Potsdam (1945) they agreed on Germany's division but disagreed on Eastern Europe's future. Stalin established Soviet-dominated governments in Poland, Hungary, Czechoslovakia, Romania, Bulgaria and East Germany — breaking promises of free elections.",
          },
          {
            heading: "Containment and alliances",
            body: "US diplomat George Kennan's 'long telegram' (1946) argued for containing Soviet expansion. The Truman Doctrine (1947) committed the US to supporting anti-communist forces; the Marshall Plan (1948) rebuilt Western Europe economically. NATO (1949) formalised Western military alliance; the USSR countered with COMECON and the Warsaw Pact (1955).",
          },
          {
            heading: "Early confrontations",
            body: "The Berlin Blockade (1948–49): USSR cut road/rail access to West Berlin; the Western Allies responded with the Berlin Airlift — flying in supplies for 11 months until Stalin lifted the blockade. The crisis ended with Germany permanently divided (FRG and GDR) and NATO created.",
          },
        ],
        keyFormulas: [
          { name: "Containment", statement: "US strategy to prevent spread of communism" },
          { name: "Berlin Blockade", statement: "1948–49: airlift broke Soviet blockade" },
          { name: "Blocs", statement: "NATO (West) vs Warsaw Pact (East)" },
        ],
        workedExample: {
          problem: "Why did the Berlin Blockade accelerate the Cold War's hardening?",
          solution: "The blockade confirmed Soviet willingness to use force; the successful airlift demonstrated Western resolve; and the crisis led directly to NATO's creation — turning an ideological rivalry into a military alliance system.",
        },
      },
      questions: [
        {
          id: "his-u2-cq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'Iron Curtain' referred to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A physical barrier in Germany" },
              { id: "b", text: "The ideological divide between East and West" },
              { id: "c", text: "A Soviet weapons programme" },
              { id: "d", text: "A NATO military strategy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Iron Curtain", statement: "Churchill's metaphor for the ideological divide in Europe." },
            ],
            steps: [
              { reasoning: "Iron Curtain described the ideological/political divide, not a physical structure.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Ideological divide",
            commonErrors: ["Confusing with the later Berlin Wall (1961)."],
          },
        },
        {
          id: "his-u2-cq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "State two aims of the Marshall Plan.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Marshall Plan aims", statement: "Economic recovery and anti-communist containment." },
            ],
            steps: [
              { reasoning: "Rebuild Western European economies devastated by WWII.", marks: 1, markCode: "M" },
              { reasoning: "Counter Soviet influence by making Western Europe prosperous and loyal to the US.", marks: 1, markCode: "M" },
              { reasoning: "Both aims clearly stated.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Economic recovery + anti-communist containment.",
            commonErrors: ["Describing it as purely altruistic aid."],
          },
        },
        {
          id: "his-u2-cq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the Berlin Blockade and Airlift changed the Cold War.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Berlin Crisis", statement: "First major superpower confrontation; hardened blocs." },
            ],
            steps: [
              { reasoning: "Soviet blockade showed willingness to use force to expand influence.", marks: 1, markCode: "M" },
              { reasoning: "Airlift demonstrated Western resolve and logistical superiority — supplies flown in for 11 months.", marks: 1, markCode: "M" },
              { reasoning: "Germany permanently divided; NATO formed (1949) as direct response.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: first true Cold War crisis, establishing military alliance system.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Showed Soviet aggression; Western resolve; led to NATO and divided Germany.",
            commonErrors: ["Treating it as an isolated event without alliance consequences."],
          },
        },
        {
          id: "his-u2-cq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the causes of the Cold War.",
          parts: [
            { label: "a", prompt: "Identify two ideological differences between the USA and USSR.", marks: 2 },
            { label: "b", prompt: "Explain the role of Eastern Europe in the conflict.", marks: 3 },
            { label: "c", prompt: "Evaluate whether the Cold War was inevitable after WWII.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cold War causes", statement: "Ideology + power + security + misperception." },
            ],
            steps: [
              { part: "a", reasoning: "USA: liberal democracy, free markets, individual rights; USSR: communism, one-party state, planned economy.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both clearly contrasted.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Eastern Europe became the buffer zone: USSR installed satellite governments, breaking Yalta promises.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "US saw Soviet expansion as threat; USSR saw Western containment as encirclement.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both sides' security fears reinforced hostility.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Inevitable? Ideological opposition and power vacuum suggested conflict likely.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "But specific events and choices (Berlin, containment policies) escalated it.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Evaluate: structural factors made tension certain; direct confrontation was not inevitable.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Democracy vs communism. (b) Eastern Europe buffer/satellite zone. (c) Tension inevitable; direct confrontation not.",
            commonErrors: ["One-sided blame — both sides contributed."],
          },
        },
        {
          id: "his-u2-cq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Truman Doctrine (1947) committed the US to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sharing nuclear secrets with the USSR" },
              { id: "b", text: "Supporting free peoples against communist subversion or coercion" },
              { id: "c", text: "Rebuilding Germany after WWII" },
              { id: "d", text: "Creating the United Nations" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Truman Doctrine", statement: "US policy (1947) pledging support to anti-communist forces — first applied to Greece and Turkey." },
            ],
            steps: [
              { reasoning: "The doctrine pledged American support for countries resisting communist takeover.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Support free peoples against communism",
            commonErrors: ["Confusing it with the Marshall Plan or UN creation."],
          },
        },
        {
          id: "his-u2-cq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "COMECON was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Soviet-led military alliance" },
              { id: "b", text: "The Soviet-led economic organisation for Eastern European states" },
              { id: "c", text: "A Western trade agreement" },
              { id: "d", text: "A disarmament treaty" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "COMECON", statement: "Council for Mutual Economic Assistance — Soviet economic bloc for Eastern Europe." },
            ],
            steps: [
              { reasoning: "COMECON coordinated the economies of Soviet-aligned states.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Soviet-led economic organisation",
            commonErrors: ["Confusing COMECON (economic) with the Warsaw Pact (military)."],
          },
        },
        {
          id: "his-u2-cq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "NATO was founded in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1945" },
              { id: "b", text: "1947" },
              { id: "c", text: "1949" },
              { id: "d", text: "1955" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "NATO founding", statement: "North Atlantic Treaty Organization established 1949." },
            ],
            steps: [
              { reasoning: "NATO was founded in April 1949.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 1949",
            commonErrors: ["Confusing it with the Warsaw Pact (1955) or Truman Doctrine (1947)."],
          },
        },
        {
          id: "his-u2-cq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Berlin Blockade (1948–49) ended when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Western Allies bombed Berlin" },
              { id: "b", text: "The USSR lifted the blockade after the Berlin Airlift made it ineffective" },
              { id: "c", text: "Germany was reunified" },
              { id: "d", text: "NATO invaded East Germany" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Berlin Blockade end", statement: "After 11 months, the airlift supplied the city; Stalin lifted the blockade in May 1949." },
            ],
            steps: [
              { reasoning: "The successful airlift made the blockade pointless and Stalin lifted it.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** USSR lifted it after the airlift succeeded",
            commonErrors: ["Thinking the blockade ended by military victory."],
          },
        },
        {
          id: "his-u2-cq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which best explains why the Cold War began?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A single treaty dispute between the superpowers" },
              { id: "b", text: "Ideological opposition, the power vacuum after WWII, and mutual suspicion over Eastern Europe" },
              { id: "c", text: "The Berlin Wall's construction" },
              { id: "d", text: "A nuclear accident" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cold War origins", statement: "Ideology + power vacuum + security fears + misperception produced rivalry." },
            ],
            steps: [
              { reasoning: "The Cold War grew from ideological conflict, postwar power distribution and mutual suspicion.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Ideology + power vacuum + mutual suspicion",
            commonErrors: ["Attributing it to a single event or the Wall (a later symbol)."],
          },
        },
        {
          id: "his-u2-cq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Give the year for each event: (a) Churchill's 'Iron Curtain' speech; (b) the Truman Doctrine; (c) NATO founded; (d) the Warsaw Pact founded.",
          response: { type: "numeric", parts: [{ label: "Iron Curtain speech", answer: 1946 }, { label: "Truman Doctrine", answer: 1947 }, { label: "NATO founded", answer: 1949 }, { label: "Warsaw Pact", answer: 1955 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Cold War chronology", statement: "1946 → 1947 → 1949 → 1955." },
            ],
            steps: [
              { reasoning: "Churchill's speech was March 1946.", working: "1946", marks: 1, markCode: "M" },
              { reasoning: "Truman Doctrine was 1947.", working: "1947", marks: 1, markCode: "M" },
              { reasoning: "NATO was founded 1949.", working: "1949", marks: 1, markCode: "M" },
              { reasoning: "Warsaw Pact was founded 1955.", working: "1955", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1946; 1947; 1949; 1955",
            commonErrors: ["Confusing NATO (1949) with Warsaw Pact (1955)."],
          },
        },
        {
          id: "his-u2-cq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) Kennan's 'long telegram'; (b) the Truman Doctrine; (c) the Marshall Plan began.",
          response: { type: "numeric", parts: [{ label: "Long telegram", answer: 1946 }, { label: "Truman Doctrine", answer: 1947 }, { label: "Marshall Plan begins", answer: 1948 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Containment chronology", statement: "1946 → 1947 → 1948." },
            ],
            steps: [
              { reasoning: "The long telegram was 1946.", working: "1946", marks: 1, markCode: "M" },
              { reasoning: "Truman Doctrine was 1947.", working: "1947", marks: 1, markCode: "M" },
              { reasoning: "Marshall Plan began 1948.", working: "1948", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1946; 1947; 1948",
            commonErrors: ["Confusing the Marshall Plan (1948) with the Berlin Blockade (also 1948)."],
          },
        },
        {
          id: "his-u2-cq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Rank these events from earliest to latest (1 = earliest): the Yalta and Potsdam conferences, the Truman Doctrine, the Berlin Blockade and Airlift, NATO's founding, the Warsaw Pact.",
          response: { type: "numeric", parts: [{ label: "Yalta and Potsdam", answer: 1 }, { label: "Truman Doctrine", answer: 2 }, { label: "Berlin Blockade", answer: 3 }, { label: "NATO founded", answer: 4 }, { label: "Warsaw Pact", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Cold War chronology", statement: "1945 → 1947 → 1948 → 1949 → 1955." },
            ],
            steps: [
              { reasoning: "Yalta/Potsdam 1945 — earliest.", working: "1945", marks: 1, markCode: "M" },
              { reasoning: "Truman Doctrine 1947 — second.", working: "1947", marks: 1, markCode: "M" },
              { reasoning: "Berlin Blockade 1948 — third.", working: "1948", marks: 1, markCode: "M" },
              { reasoning: "NATO 1949 — fourth.", working: "1949", marks: 1, markCode: "M" },
              { reasoning: "Warsaw Pact 1955 — latest.", working: "1955", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Yalta/Potsdam 1, Truman 2, Blockade 3, NATO 4, Warsaw Pact 5",
            commonErrors: ["Placing NATO before the Berlin Blockade."],
          },
        },
        {
          id: "his-u2-cq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Give the year for each event of the Berlin crisis: (a) the blockade began; (b) the blockade ended; (c) the duration of the airlift in months.",
          response: { type: "numeric", parts: [{ label: "Blockade begins", answer: 1948 }, { label: "Blockade ends", answer: 1949 }, { label: "Airlift duration (months)", answer: 11 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Berlin crisis", statement: "Blockade June 1948 – May 1949; airlift lasted ~11 months." },
            ],
            steps: [
              { reasoning: "The blockade began in June 1948.", working: "1948", marks: 1, markCode: "M" },
              { reasoning: "It ended in May 1949.", working: "1949", marks: 1, markCode: "M" },
              { reasoning: "The airlift ran for about 11 months.", working: "11", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1948; 1949; 11 months",
            commonErrors: ["Confusing the blockade dates with NATO's founding."],
          },
        },
        {
          id: "his-u2-cq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate: (a) the number of years between Potsdam (1945) and the Truman Doctrine (1947); (b) between the Truman Doctrine and NATO (1949); (c) the duration of the Berlin Blockade crisis in years (1948–49).",
          response: { type: "numeric", parts: [{ label: "Potsdam to Truman", answer: 2 }, { label: "Truman to NATO", answer: 2 }, { label: "Berlin crisis duration", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract earlier year from later year." },
            ],
            steps: [
              { reasoning: "$1947 - 1945$.", working: "1947 - 1945 = 2", marks: 1, markCode: "M" },
              { reasoning: "$1949 - 1947$.", working: "1949 - 1947 = 2", marks: 1, markCode: "M" },
              { reasoning: "$1949 - 1948$.", working: "1949 - 1948 = 1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2; 2; 1 year",
            commonErrors: ["Off-by-one errors in interval calculation."],
          },
        },
        {
          id: "his-u2-cq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how the Berlin Blockade and Airlift changed the Cold War.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Berlin Crisis", statement: "First major superpower confrontation; hardened blocs into military alliances." },
            ],
            steps: [
              { reasoning: "The Soviet blockade showed willingness to use force to expand influence.", marks: 1, markCode: "M" },
              { reasoning: "The airlift demonstrated Western resolve and logistical superiority over 11 months.", marks: 1, markCode: "M" },
              { reasoning: "Germany was permanently divided; NATO was formed (1949) in direct response.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: first true Cold War crisis establishing the military alliance system.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Showed Soviet aggression, Western resolve; led to NATO and divided Germany.",
            commonErrors: ["Treating it as an isolated event without alliance consequences."],
          },
        },
        {
          id: "his-u2-cq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the causes of the Cold War.",
          parts: [
            { label: "a", prompt: "Identify two ideological differences between the USA and USSR.", marks: 2 },
            { label: "b", prompt: "Explain the role of Eastern Europe in the conflict.", marks: 3 },
            { label: "c", prompt: "Evaluate whether the Cold War was inevitable after WWII.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cold War causes", statement: "Ideology + power + security + misperception." },
            ],
            steps: [
              { part: "a", reasoning: "USA: liberal democracy, free markets; USSR: communism, one-party state, planned economy.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both contrasts clearly stated.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Eastern Europe became the buffer/satellite zone — USSR installed compliant governments, breaking Yalta promises.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "US saw Soviet expansion as threat; USSR saw Western containment as encirclement.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mutual security fears reinforced hostility.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Inevitable? Ideological opposition and power vacuum made tension certain.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "But specific choices (Berlin, containment policies) escalated it into confrontation.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Evaluate: structural tension inevitable; direct confrontation not.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Democracy vs communism. (b) Eastern Europe buffer zone. (c) Tension inevitable; confrontation not.",
            commonErrors: ["One-sided blame — both sides contributed."],
          },
        },
      ],
    },
    {
      id: "his-u2-early-confrontations",
      title: "Early Cold War Confrontations",
      skill: "Describe the Korean War, the Hungarian uprising and other early Cold War crises, and analyse their significance.",
      lesson: {
        sections: [
          {
            heading: "Korean War (1950–1953)",
            body: "After Japan's defeat, Korea was divided at the 38th parallel. North Korea (communist) invaded the South (1950); UN forces led by the USA intervened, nearly reaching the Yalu River — prompting Chinese intervention. Stalemate ended in armistice (1953) at roughly the original border. ~3 million dead; Korea remains divided.",
          },
          {
            heading: "Hungarian uprising (1956)",
            body: "Hungarians rose against Soviet domination and the puppet government; Imre Nagy announced withdrawal from Warsaw Pact. Soviet tanks crushed the uprising (~2,500 dead). Western powers condemned but did not intervene militarily — exposing the limits of US commitment and the USSR's determination to keep Eastern Europe.",
          },
          {
            heading: "Other crises",
            body: "The Suez Crisis (1956): Britain and France invaded Egypt after Nasser nationalised the canal; US pressure forced withdrawal — showing declining European power. The U-2 incident (1960): US spy plane shot down over USSR, wrecking a summit. The Berlin Wall (1961) became the Cold War's most visible symbol.",
          },
        ],
        keyFormulas: [
          { name: "Korea", statement: "1950–53: stalemate at 38th parallel" },
          { name: "Hungary 1956", statement: "Soviet intervention crushed uprising" },
          { name: "Suez 1956", statement: "US forced Anglo-French withdrawal" },
        ],
        workedExample: {
          problem: "What did the Hungarian uprising reveal about Cold War power dynamics?",
          solution: "It showed the USSR would use force to maintain its sphere; the West condemned but would not risk nuclear war for Eastern Europe — establishing the limits of 'rollback' rhetoric.",
        },
      },
      questions: [
        {
          id: "his-u2-eq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Korean War ended with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A unified Korea" },
              { id: "b", text: "An armistice near the original border" },
              { id: "c", text: "North Korean victory" },
              { id: "d", text: "US occupation of the North" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Korean War outcome", statement: "1953 armistice at roughly the 38th parallel; Korea divided." },
            ],
            steps: [
              { reasoning: "The war ended in stalemate/armistice, not victory for either side.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Armistice near original border",
            commonErrors: ["Thinking the war produced a clear winner."],
          },
        },
        {
          id: "his-u2-eq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two consequences of the Hungarian uprising of 1956.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Hungary consequences", statement: "Uprising crushed, ~2,500 dead; Western non-intervention." },
            ],
            steps: [
              { reasoning: "Soviet tanks crushed the uprising; Nagy's government executed or exiled.", marks: 1, markCode: "M" },
              { reasoning: "Western powers condemned but refused military intervention — revealing limits of US commitment.", marks: 1, markCode: "M" },
              { reasoning: "Showed USSR would maintain control of Eastern Europe by force.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Crushed by Soviets; exposed limits of Western support.",
            commonErrors: ["Thinking the West intervened militarily."],
          },
        },
        {
          id: "his-u2-eq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the Suez Crisis (1956) was significant for the changing world order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Suez significance", statement: "Declining European power, rising US/Soviet dominance." },
            ],
            steps: [
              { reasoning: "Britain and France invaded Egypt without US approval; US financial pressure forced withdrawal.", marks: 1, markCode: "M" },
              { reasoning: "Showed the superpowers now dictated events — old colonial powers could no longer act alone.", marks: 1, markCode: "M" },
              { reasoning: "Damaged Anglo-American relations and British prestige.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: marked the end of European great-power independence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "US dominance over allies; end of independent European power.",
            commonErrors: ["Treating it as only an Anglo-Egyptian dispute."],
          },
        },
        {
          id: "his-u2-eq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the significance of the Korean War in Cold War history.",
          parts: [
            { label: "a", prompt: "Describe the course of the war (1950–1953).", marks: 3 },
            { label: "b", prompt: "Explain why it is called a 'limited war'.", marks: 2 },
            { label: "c", prompt: "Evaluate its consequences for the Cold War and for Korea.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Korean War", statement: "First major Cold War military conflict; stalemate." },
            ],
            steps: [
              { part: "a", reasoning: "North Korea invaded South (June 1950); UN/US forces intervened; Chinese entered (Oct 1950).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "War stalemated around the 38th parallel after 1951.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Armistice signed July 1953 — no peace treaty, Korea still divided.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Limited: fought to containment, not conquest; neither side sought total victory or used nuclear weapons.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Superpowers avoided direct confrontation.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Consequences: militarised US containment policy; China-US hostility; Korea permanently divided.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Showed Cold War could produce real wars — raised stakes of confrontation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Korean people bore the cost: ~3 million dead, enduring division.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Invasion → intervention → stalemate → armistice. (b) Containment, not conquest. (c) Militarised Cold War; divided Korea.",
            commonErrors: ["Describing it as a WWII-style total war."],
          },
        },
        {
          id: "his-u2-eq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Korean War began in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1945" },
              { id: "b", text: "1950" },
              { id: "c", text: "1953" },
              { id: "d", text: "1956" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Korean War start", statement: "North Korea invaded the South in June 1950." },
            ],
            steps: [
              { reasoning: "The war began with North Korea's invasion in June 1950.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 1950",
            commonErrors: ["Confusing the start (1950) with the armistice (1953)."],
          },
        },
        {
          id: "his-u2-eq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Imre Nagy was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Soviet leader who crushed Hungary" },
              { id: "b", text: "The Hungarian leader during the 1956 uprising" },
              { id: "c", text: "The Egyptian president at Suez" },
              { id: "d", text: "The North Korean dictator" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Imre Nagy", statement: "Hungarian leader who announced withdrawal from the Warsaw Pact during the 1956 uprising." },
            ],
            steps: [
              { reasoning: "Nagy led Hungary during the 1956 uprising before being removed by the Soviets.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Hungarian leader in 1956",
            commonErrors: ["Confusing him with Khrushchev or Nasser."],
          },
        },
        {
          id: "his-u2-eq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Suez Crisis (1956) involved:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A Soviet invasion of Hungary" },
              { id: "b", text: "Britain, France and Israel invading Egypt after canal nationalisation" },
              { id: "c", text: "The Korean War armistice" },
              { id: "d", text: "The Berlin Blockade" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Suez Crisis", statement: "Anglo-French-Israeli invasion of Egypt over the Suez Canal; forced withdrawal by US pressure." },
            ],
            steps: [
              { reasoning: "The crisis was the invasion of Egypt over control of the Suez Canal.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Invasion of Egypt over the canal",
            commonErrors: ["Confusing it with the Hungarian or Berlin crises."],
          },
        },
        {
          id: "his-u2-eq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The U-2 incident (1960) was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A US spy plane shot down over the USSR, wrecking a summit" },
              { id: "b", text: "A Soviet missile test" },
              { id: "c", text: "A Berlin escape tunnel" },
              { id: "d", text: "A Korean War ceasefire violation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "U-2 incident", statement: "US spy plane shot down over the USSR in 1960; summit collapsed." },
            ],
            steps: [
              { reasoning: "The U-2 was a US reconnaissance plane shot down over Soviet territory.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** US spy plane shot down over USSR",
            commonErrors: ["Confusing it with other 1960s crises."],
          },
        },
        {
          id: "his-u2-eq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which best explains why the West did not intervene militarily in Hungary (1956)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The West lacked the military capacity entirely" },
              { id: "b", text: "The US and allies would not risk nuclear war for Eastern Europe — revealing the limits of 'rollback' rhetoric" },
              { id: "c", text: "Hungary asked the West not to intervene" },
              { id: "d", text: "The UN authorised Soviet intervention" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limits of Western commitment", statement: "The West condemned but would not risk war for Soviet satellites." },
            ],
            steps: [
              { reasoning: "Intervention risked direct superpower war; the West limited itself to condemnation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Would not risk nuclear war for Eastern Europe",
            commonErrors: ["Thinking the West simply lacked capacity — it chose not to risk war."],
          },
        },
        {
          id: "his-u2-eq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 4,
          stem: "Give the year for each event: (a) the Korean War began; (b) the Korean armistice was signed; (c) the Hungarian uprising; (d) the Berlin Wall was built.",
          response: { type: "numeric", parts: [{ label: "Korean War begins", answer: 1950 }, { label: "Korean armistice", answer: 1953 }, { label: "Hungarian uprising", answer: 1956 }, { label: "Berlin Wall built", answer: 1961 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Cold War crises chronology", statement: "1950 → 1953 → 1956 → 1961." },
            ],
            steps: [
              { reasoning: "Korea began June 1950.", working: "1950", marks: 1, markCode: "M" },
              { reasoning: "Armistice July 1953.", working: "1953", marks: 1, markCode: "M" },
              { reasoning: "Hungary 1956.", working: "1956", marks: 1, markCode: "M" },
              { reasoning: "Berlin Wall August 1961.", working: "1961", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1950; 1953; 1956; 1961",
            commonErrors: ["Confusing the Korean War dates with later crises."],
          },
        },
        {
          id: "his-u2-eq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Korean War began; (b) the Korean armistice; (c) the Suez Crisis.",
          response: { type: "numeric", parts: [{ label: "Korean War begins", answer: 1950 }, { label: "Korean armistice", answer: 1953 }, { label: "Suez Crisis", answer: 1956 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Cold War chronology", statement: "1950 → 1953 → 1956." },
            ],
            steps: [
              { reasoning: "Korea began 1950.", working: "1950", marks: 1, markCode: "M" },
              { reasoning: "Armistice 1953.", working: "1953", marks: 1, markCode: "M" },
              { reasoning: "Suez Crisis 1956.", working: "1956", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1950; 1953; 1956",
            commonErrors: ["Confusing the two 1956 crises (Suez and Hungary)."],
          },
        },
        {
          id: "his-u2-eq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Rank these events from earliest to latest (1 = earliest): the Korean War begins, the Korean armistice, the Hungarian uprising and Suez Crisis, the U-2 incident, the Berlin Wall built.",
          response: { type: "numeric", parts: [{ label: "Korean War begins", answer: 1 }, { label: "Korean armistice", answer: 2 }, { label: "Hungary and Suez", answer: 3 }, { label: "U-2 incident", answer: 4 }, { label: "Berlin Wall", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Cold War crises chronology", statement: "1950 → 1953 → 1956 → 1960 → 1961." },
            ],
            steps: [
              { reasoning: "Korea began 1950 — earliest.", working: "1950", marks: 1, markCode: "M" },
              { reasoning: "Armistice 1953 — second.", working: "1953", marks: 1, markCode: "M" },
              { reasoning: "Hungary and Suez both 1956 — third.", working: "1956", marks: 1, markCode: "M" },
              { reasoning: "U-2 incident 1960 — fourth.", working: "1960", marks: 1, markCode: "M" },
              { reasoning: "Berlin Wall 1961 — latest.", working: "1961", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Korea 1, armistice 2, 1956 crises 3, U-2 4, Wall 5",
            commonErrors: ["Placing the U-2 after the Wall."],
          },
        },
        {
          id: "his-u2-eq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Give the year for each event: (a) Chinese forces entered the Korean War; (b) the Hungarian uprising was crushed; (c) the Berlin Wall was built.",
          response: { type: "numeric", parts: [{ label: "Chinese intervention", answer: 1950 }, { label: "Hungary crushed", answer: 1956 }, { label: "Berlin Wall built", answer: 1961 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Cold War chronology", statement: "1950 → 1956 → 1961." },
            ],
            steps: [
              { reasoning: "China entered the Korean War in October 1950.", working: "1950", marks: 1, markCode: "M" },
              { reasoning: "The Hungarian uprising was crushed in November 1956.", working: "1956", marks: 1, markCode: "M" },
              { reasoning: "The Berlin Wall was built August 1961.", working: "1961", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1950; 1956; 1961",
            commonErrors: ["Confusing the Wall's date with earlier Berlin crises."],
          },
        },
        {
          id: "his-u2-eq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate: (a) the duration of the Korean War in years (1950–1953); (b) the number of years between the Korean armistice (1953) and the Berlin Wall (1961); (c) between the Hungarian uprising (1956) and the Wall (1961).",
          response: { type: "numeric", parts: [{ label: "Korean War duration", answer: 3 }, { label: "Armistice to Wall", answer: 8 }, { label: "Hungary to Wall", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract earlier year from later year." },
            ],
            steps: [
              { reasoning: "$1953 - 1950$.", working: "1953 - 1950 = 3", marks: 1, markCode: "M" },
              { reasoning: "$1961 - 1953$.", working: "1961 - 1953 = 8", marks: 1, markCode: "M" },
              { reasoning: "$1961 - 1956$.", working: "1961 - 1956 = 5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3; 8; 5 years",
            commonErrors: ["Arithmetic slips in subtraction."],
          },
        },
        {
          id: "his-u2-eq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the Suez Crisis (1956) was significant for the changing world order.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Suez significance", statement: "US dominance over allies; end of independent European great-power status." },
            ],
            steps: [
              { reasoning: "Britain and France invaded without US approval; US financial pressure forced withdrawal.", marks: 1, markCode: "M" },
              { reasoning: "Showed superpowers now dictated events — old colonial powers could no longer act alone.", marks: 1, markCode: "M" },
              { reasoning: "Damaged Anglo-American relations and British prestige.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: marked the end of European great-power independence.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "US dominance over allies; end of independent European power.",
            commonErrors: ["Treating it as only an Anglo-Egyptian dispute."],
          },
        },
        {
          id: "his-u2-eq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the significance of the Korean War in Cold War history.",
          parts: [
            { label: "a", prompt: "Describe the course of the war (1950–1953).", marks: 3 },
            { label: "b", prompt: "Explain why it is called a 'limited war'.", marks: 2 },
            { label: "c", prompt: "Evaluate its consequences for the Cold War and for Korea.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Korean War", statement: "First major Cold War military conflict; stalemate at 38th parallel." },
            ],
            steps: [
              { part: "a", reasoning: "North Korea invaded South (June 1950); UN/US forces intervened; Chinese entered (Oct 1950).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "War stalemated around the 38th parallel after 1951.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Armistice signed July 1953 — no peace treaty; Korea still divided.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Limited: fought to containment, not conquest; no nuclear weapons used; superpowers avoided direct war.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Neither side sought total victory.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Consequences: militarised US containment; China-US hostility; Korea permanently divided.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Showed Cold War could produce real wars — raised stakes of confrontation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Korean people bore the cost: ~3 million dead, enduring division.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Invasion → intervention → stalemate → armistice. (b) Containment, not conquest. (c) Militarised Cold War; divided Korea.",
            commonErrors: ["Describing it as a WWII-style total war."],
          },
        },
      ],
    },
  ],
};
