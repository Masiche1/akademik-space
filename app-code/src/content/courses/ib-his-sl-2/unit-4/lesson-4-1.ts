import type { Lesson } from "../../../types.ts";

export const lesson41: Lesson = {
  id: "his-u4-lesson-4-1",
  code: "4-1",
  title: "Superpower Rivalry and the Arms Race in Detail",
  goal: "I CAN explain the strategies of nuclear deterrence and containment, analyse proxy competition, and evaluate the policy of détente.",
  standards: ["Paper 1", "Paper 2", "Topic 4"],
  vocabulary: [
    { term: "Mutually Assured Destruction (MAD)", definition: "Doctrine that a full nuclear exchange would annihilate both superpowers, deterring attack." },
    { term: "Deterrence", definition: "Preventing enemy action through the credible threat of overwhelming retaliation." },
    { term: "Containment", definition: "US strategy, articulated by George Kennan, to prevent the spread of communism beyond existing borders." },
    { term: "Proxy war", definition: "Conflict where superpowers support rival local forces without fighting each other directly." },
    { term: "Détente", definition: "Period of eased US–Soviet tensions in the 1970s marked by arms-control agreements and diplomacy." },
    { term: "Strategic Arms Limitation Talks (SALT)", definition: "Negotiations (SALT I 1972, SALT II 1979) capping US and Soviet nuclear arsenals." },
  ],
  concepts: [
    {
      id: "his-u4-nuclear-strategy",
      title: "Nuclear strategy and the arms race",
      skill: "Explain how nuclear weapons shaped superpower strategy and analyse the arms race that followed.",
      lesson: {
        sections: [
          {
            heading: "From monopoly to balance of terror",
            body: "The US held a nuclear monopoly until 1949, when the Soviet Union tested its first bomb. By 1955 both sides could deliver nuclear weapons by bomber; by the early 1960s intercontinental ballistic missiles (ICBMs) and submarine-launched missiles (SLBMs) gave each side a **second-strike** capability. This produced **Mutually Assured Destruction (MAD)**: neither side could attack first without being destroyed, so deterrence stabilised — but only while both maintained massive arsenals.",
          },
          {
            heading: "The arms race",
            body: "Both powers built vast arsenals: by the mid-1980s the US and USSR each possessed tens of thousands of warheads. The race included not only numbers but quality — MIRVs (multiple warheads per missile), stealth bombers and missile defence (SDI, announced 1983). Nuclear brinkmanship peaked during crises, while ordinary diplomacy sought to manage the risk. The arms race also fuelled military-industrial complexes in both societies.",
          },
          {
            heading: "Espionage and covert rivalry",
            body: "Intelligence became a central battlefield. The US U-2 spy plane (shot down over the USSR in 1960) and Soviet spy rings revealed how each side sought to monitor the other's arsenal and intentions. The arms race was thus also an information war, where secrecy, defections (e.g. Kim Philby) and satellite reconnaissance (CORONA, later KH satellites) shaped perceptions of the balance of power.",
          },
        ],
        keyFormulas: [
          { name: "MAD logic", statement: "Second-strike capability → attack suicidal → deterrence" },
          { name: "Arsenal balance", statement: "US monopoly 1945–49 → parity by early 1960s → ~equal arsenals by mid-1980s" },
        ],
        workedExample: {
          problem: "Explain why the Cuban Missile Crisis did not escalate into nuclear war.",
          solution: "Both sides possessed second-strike capability, so a first strike could not destroy the enemy's arsenal. The crisis was resolved through back-channel diplomacy (the Kennedy–Khrushchev letters) and a reciprocal withdrawal, showing MAD's logic in practice.",
        },
      },
      questions: [
        {
          id: "his-u4-nsq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What does MAD stand for in the context of the Cold War?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mutual Aid Doctrine" },
              { id: "b", text: "Mutually Assured Destruction" },
              { id: "c", text: "Military Alliance Defence" },
              { id: "d", text: "Massive Attack Deterrence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "MAD", statement: "Mutually Assured Destruction — doctrine that a nuclear exchange would destroy both sides." },
            ],
            steps: [
              { reasoning: "MAD is the acronym for Mutually Assured Destruction.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Mutually Assured Destruction",
            commonErrors: ["Guessing from initials without recalling the doctrine's meaning."],
          },
        },
        {
          id: "his-u4-nsq2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Describe two ways in which the nuclear arms race affected superpower strategy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Arms race effects", statement: "Massive arsenals, second-strike deterrence, brinkmanship, military-industrial growth." },
            ],
            steps: [
              { reasoning: "Both sides built huge arsenals, making direct war unthinkable and shifting rivalry to proxies and diplomacy.", marks: 1, markCode: "M" },
              { reasoning: "Second-strike capability (ICBMs, SLBMs) created MAD, stabilising the balance but heightening crisis risk.", marks: 1, markCode: "M" },
              { reasoning: "Consequence: strategy emphasised deterrence, espionage and limited wars rather than direct confrontation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Massive deterrent arsenals and a shift to proxy wars, espionage and crisis management.",
            commonErrors: ["Describing the weapons rather than their strategic effects."],
          },
        },
        {
          id: "his-u4-nsq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Analyse the significance of the 'missile gap' in US–Soviet relations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Missile gap", statement: "Perceived Soviet lead in ICBMs fuelled US rearmament and Kennedy's 1960 campaign." },
            ],
            steps: [
              { reasoning: "US intelligence (partly via U-2 flights) suggested the USSR might have more ICBMs than the US.", marks: 1, markCode: "M" },
              { reasoning: "Kennedy used the 'missile gap' in the 1960 election and then expanded US missile production.", marks: 1, markCode: "M" },
              { reasoning: "Analysis: the gap was largely a myth — US had far more bombers and soon more missiles; the fear itself drove policy.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: illustrates how intelligence uncertainty and domestic politics intensified the arms race.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "A largely exaggerated fear that still drove US rearmament and heightened Cold War tensions.",
            commonErrors: ["Accepting the missile gap as factual without evaluation."],
          },
        },
        {
          id: "his-u4-nsq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Evaluate the impact of nuclear weapons on the nature of the Cold War.",
          parts: [
            { label: "a", prompt: "Explain what MAD meant for direct superpower conflict.", marks: 2 },
            { label: "b", prompt: "Describe two ways rivalry continued despite MAD.", marks: 3 },
            { label: "c", prompt: "Evaluate whether nuclear weapons made the world safer or more dangerous.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nuclear impact", statement: "MAD prevented direct war but intensified proxy conflict, espionage and crisis risk." },
            ],
            steps: [
              { part: "a", reasoning: "MAD meant a first strike could not destroy the enemy's second-strike capability, so full war was suicidal.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Direct superpower war was therefore deterred; competition moved to limited arenas.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Proxy wars: Korea, Vietnam, Afghanistan — superpowers armed rivals without direct fighting.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Arms race and espionage: vast arsenals, U-2 reconnaissance, spy networks.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Crisis brinkmanship: Berlin and Cuba showed how close escalation could come.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Dangerous: crises could spiral; more dangerous weapons and delivery systems kept evolving.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Safer in one sense: MAD made total war irrational and arguably prevented US–Soviet war.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Direct war deterred by second-strike logic. (b) Proxies, arms race, espionage, crises. (c) Judgement: deterred total war but raised catastrophic risk.",
            commonErrors: ["One-sided judgement without weighing both safety and danger."],
          },
        },
        {
          id: "his-u4-nsq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In which year did the Soviet Union test its first atomic bomb, ending the US nuclear monopoly?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1945" },
              { id: "b", text: "1949" },
              { id: "c", text: "1955" },
              { id: "d", text: "1962" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Nuclear chronology", statement: "US held the monopoly until the USSR tested its first bomb in 1949." },
            ],
            steps: [
              { reasoning: "The Soviet Union tested its first atomic device in 1949.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) 1949 is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 1949",
            commonErrors: ["Confusing the end of the US monopoly with the start of the Second World War."],
          },
        },
        {
          id: "his-u4-nsq6",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which development gave both superpowers a 'second-strike' capability by the early 1960s?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Long-range bombers alone" },
              { id: "b", text: "Intercontinental ballistic missiles and submarine-launched missiles" },
              { id: "c", text: "Chemical weapons stockpiles" },
              { id: "d", text: "Naval blockades of each other's ports" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Second-strike capability", statement: "The ability to retaliate after a first strike, via survivable ICBMs and SLBMs." },
            ],
            steps: [
              { reasoning: "ICBMs and SLBMs allowed each side to retaliate even after a surprise attack.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** ICBMs and SLBMs",
            commonErrors: ["Naming bombers, which were vulnerable and did not guarantee a second strike."],
          },
        },
        {
          id: "his-u4-nsq7",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "SDI, announced by President Reagan in 1983, referred to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A space exploration programme" },
              { id: "b", text: "A proposed missile defence shield" },
              { id: "c", text: "A submarine missile fleet expansion" },
              { id: "d", text: "A new arms-control treaty" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "SDI", statement: "Strategic Defense Initiative — a proposed US missile-defence system announced in 1983." },
            ],
            steps: [
              { reasoning: "SDI (the 'Star Wars' programme) aimed to intercept incoming missiles.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A proposed missile defence shield",
            commonErrors: ["Treating SDI as an arms-reduction treaty rather than a weapons programme."],
          },
        },
        {
          id: "his-u4-nsq8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'U-2 incident' of 1960 involved:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A Soviet submarine entering US waters" },
              { id: "b", text: "A US spy plane being shot down over the USSR" },
              { id: "c", text: "A failed US invasion of Cuba" },
              { id: "d", text: "A Berlin blockade convoy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Espionage rivalry", statement: "The U-2 was a US high-altitude reconnaissance aircraft shot down over the USSR in 1960." },
            ],
            steps: [
              { reasoning: "The U-2 spy plane was shot down by Soviet forces in May 1960.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A US spy plane shot down over the USSR",
            commonErrors: ["Confusing the U-2 incident with the Bay of Pigs invasion."],
          },
        },
        {
          id: "his-u4-nsq9",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "MIRV technology in the nuclear arms race allowed:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Faster missile delivery" },
              { id: "b", text: "Multiple warheads to be carried on a single missile" },
              { id: "c", text: "Missiles to be launched from submarines" },
              { id: "d", text: "Nuclear weapons to be miniaturised for artillery shells" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "MIRV", statement: "Multiple Independently targetable Reentry Vehicle — several warheads per missile." },
            ],
            steps: [
              { reasoning: "MIRVs multiplied the number of targets one missile could strike.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Multiple warheads per missile",
            commonErrors: ["Confusing MIRVs with SLBMs, which are a launch platform not a warhead multiplier."],
          },
        },
        {
          id: "his-u4-nsq10",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "One major domestic consequence of the nuclear arms race was the growth of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Anti-nuclear political parties in both superpowers" },
              { id: "b", text: "Massive military-industrial complexes in both societies" },
              { id: "c", text: "Abolition of conventional armies" },
              { id: "d", text: "International disarmament agencies" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Military-industrial complex", statement: "Vast defence industries and their political influence grew in both the US and USSR." },
            ],
            steps: [
              { reasoning: "Huge weapons programmes entrenched defence industries and their political influence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Military-industrial complexes",
            commonErrors: ["Assuming the arms race weakened rather than strengthened defence industries."],
          },
        },
        {
          id: "his-u4-nsq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Soviet Union tested its first atomic bomb; (b) both superpowers could deliver nuclear weapons by bomber; (c) President Reagan announced SDI.",
          response: { type: "numeric", parts: [{ label: "Soviet first bomb", answer: 1949 }, { label: "Bomber-delivery era", answer: 1955 }, { label: "SDI announced", answer: 1983 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Arms race chronology", statement: "1949 Soviet bomb; 1955 bomber era; 1983 SDI." },
            ],
            steps: [
              { reasoning: "The USSR tested its first bomb in 1949.", working: "1949", marks: 1, markCode: "M" },
              { reasoning: "By 1955 both sides could deliver weapons by bomber.", working: "1955", marks: 1, markCode: "M" },
              { reasoning: "SDI was announced in 1983.", working: "1983", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1949; 1955; 1983",
            commonErrors: ["Swapping the bomber era and the Soviet first bomb dates."],
          },
        },
        {
          id: "his-u4-nsq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the US nuclear monopoly ended; (b) the U-2 spy plane was shot down over the USSR; (c) the Cuban Missile Crisis occurred.",
          response: { type: "numeric", parts: [{ label: "Monopoly ended / Soviet bomb", answer: 1949 }, { label: "U-2 shot down", answer: 1960 }, { label: "Cuban Missile Crisis", answer: 1962 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Cold War chronology", statement: "1949 Soviet bomb; 1960 U-2; 1962 Cuban Missile Crisis." },
            ],
            steps: [
              { reasoning: "The Soviet bomb in 1949 ended the US monopoly.", working: "1949", marks: 1, markCode: "M" },
              { reasoning: "The U-2 was shot down in 1960.", working: "1960", marks: 1, markCode: "M" },
              { reasoning: "The Cuban Missile Crisis took place in October 1962.", working: "1962", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1949; 1960; 1962",
            commonErrors: ["Dating the Cuban Missile Crisis to 1961 (the Bay of Pigs year)."],
          },
        },
        {
          id: "his-u4-nsq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years between: (a) the start of the US nuclear monopoly (1945) and the Soviet first bomb (1949); (b) the bomber-delivery era (1955) and the SDI announcement (1983); (c) the U-2 incident (1960) and the Cuban Missile Crisis (1962).",
          response: { type: "numeric", parts: [{ label: "1945 to 1949", answer: 4 }, { label: "1955 to 1983", answer: 28 }, { label: "1960 to 1962", answer: 2 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1949 - 1945 = 4$ years of US monopoly.", working: "1949 - 1945 = 4", marks: 1, markCode: "M" },
              { reasoning: "$1983 - 1955 = 28$ years.", working: "1983 - 1955 = 28", marks: 1, markCode: "M" },
              { reasoning: "$1962 - 1960 = 2$ years.", working: "1962 - 1960 = 2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4; 28; 2 years",
            commonErrors: ["Adding years instead of subtracting."],
          },
        },
        {
          id: "his-u4-nsq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the US nuclear monopoly; the Soviet Union's first atomic bomb; the U-2 spy plane shot down over the USSR; SDI announced.",
          response: { type: "numeric", parts: [{ label: "US nuclear monopoly", answer: 1 }, { label: "Soviet first bomb", answer: 2 }, { label: "U-2 shot down", answer: 3 }, { label: "SDI announced", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Arms race chronology order", statement: "1945 monopoly → 1949 Soviet bomb → 1960 U-2 → 1983 SDI." },
            ],
            steps: [
              { reasoning: "The US monopoly dates from 1945 — earliest.", working: "1945", marks: 1, markCode: "M" },
              { reasoning: "The Soviet bomb (1949) followed the monopoly's end.", working: "1949", marks: 1, markCode: "M" },
              { reasoning: "The U-2 incident (1960) preceded SDI (1983).", working: "1960 < 1983", marks: 1, markCode: "M" },
              { reasoning: "All four events correctly ordered.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Monopoly 1, Soviet bomb 2, U-2 3, SDI 4",
            commonErrors: ["Placing the U-2 incident before the Soviet first bomb."],
          },
        },
        {
          id: "his-u4-nsq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between the Soviet first bomb (1949) and the bomber-delivery era (1955); (b) between the U-2 incident (1960) and the SDI announcement (1983); (c) between the start of the US monopoly (1945) and the Cuban Missile Crisis (1962).",
          response: { type: "numeric", parts: [{ label: "1949 to 1955", answer: 6 }, { label: "1960 to 1983", answer: 23 }, { label: "1945 to 1962", answer: 17 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1955 - 1949 = 6$ years.", working: "1955 - 1949 = 6", marks: 1, markCode: "M" },
              { reasoning: "$1983 - 1960 = 23$ years.", working: "1983 - 1960 = 23", marks: 1, markCode: "M" },
              { reasoning: "$1962 - 1945 = 17$ years.", working: "1962 - 1945 = 17", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6; 23; 17 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u4-nsq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Rank these events from earliest to latest (1 = earliest): the Soviet Union's first atomic bomb; the era when both superpowers could deliver nuclear weapons by bomber; the U-2 spy plane shot down over the USSR; the SDI announcement.",
          response: { type: "numeric", parts: [{ label: "Soviet first bomb", answer: 1 }, { label: "Bomber-delivery era", answer: 2 }, { label: "U-2 shot down", answer: 3 }, { label: "SDI announced", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Arms race chronology order", statement: "1949 → 1955 → 1960 → 1983." },
            ],
            steps: [
              { reasoning: "The Soviet bomb (1949) is earliest.", working: "1949", marks: 1, markCode: "M" },
              { reasoning: "The bomber era (1955) preceded the U-2 incident (1960).", working: "1955 < 1960", marks: 1, markCode: "M" },
              { reasoning: "The U-2 incident (1960) preceded SDI (1983); all ordered correctly.", working: "1960 < 1983", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Soviet bomb 1, bomber era 2, U-2 3, SDI 4",
            commonErrors: ["Confusing 1955 (bomber era) with 1960 (U-2)."],
          },
        },
      ],
    },
    {
      id: "his-u4-proxy-detente",
      title: "Proxy competition and détente",
      skill: "Analyse how the superpowers competed through proxies and evaluate the achievements and limits of détente.",
      lesson: {
        sections: [
          {
            heading: "Containment in practice",
            body: "US policy, based on Kennan's **containment**, aimed to block communist expansion. The **Truman Doctrine** (1947) offered aid to Greece and Turkey; the **Marshall Plan** (1948) rebuilt Western Europe economically; **NATO** (1949) provided military alliance. The USSR countered with the **Cominform** and later **Warsaw Pact** (1955). Both alliances extended the Cold War division across Europe and beyond.",
          },
          {
            heading: "Proxy wars",
            body: "Where direct confrontation was too dangerous, the superpowers fought through **proxies**: Korea (1950–53), Vietnam (escalating from 1965), Afghanistan (1979–89), Angola and Central America in the 1980s. Clients received weapons, advisers and funding. Proxy wars were devastating for the countries involved — millions died — yet they allowed the superpowers to compete while avoiding nuclear escalation.",
          },
          {
            heading: "Détente and its limits",
            body: "**Détente** (early 1970s) brought SALT I (1972), the Helsinki Accords (1975), Nixon's visit to China and Ostpolitik. It reduced tensions and produced arms-control treaties. However, détente was undermined by the 1979 Soviet invasion of Afghanistan, the fall of the Shah in Iran, and hardliners on both sides. By the late 1970s the 'Second Cold War' had begun.",
          },
        ],
        keyFormulas: [
          { name: "US containment toolkit", statement: "Truman Doctrine + Marshall Plan + NATO" },
          { name: "Soviet counter-tools", statement: "Cominform + Comecon + Warsaw Pact" },
          { name: "Détente landmarks", statement: "SALT I (1972) + Helsinki Accords (1975) + Nixon in China (1972)" },
        ],
        workedExample: {
          problem: "Explain why the superpowers preferred proxy wars to direct conflict.",
          solution: "Direct war risked nuclear escalation under MAD. Proxy wars let each side support allies, expand influence and test weapons at lower cost — though devastating for the host countries.",
        },
      },
      questions: [
        {
          id: "his-u4-pdq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A 'proxy war' in the Cold War refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A war fought only with spies" },
              { id: "b", text: "Superpowers backing rival local forces without direct fighting" },
              { id: "c", text: "Negotiations through neutral countries" },
              { id: "d", text: "War between two European allies" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Proxy war", statement: "Superpowers support rival local actors while avoiding direct confrontation." },
            ],
            steps: [
              { reasoning: "Proxy wars involve superpower backing of local rivals, not direct fighting.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Backing rival local forces",
            commonErrors: ["Confusing proxy war with diplomacy or espionage alone."],
          },
        },
        {
          id: "his-u4-pdq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two aims of US containment policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Containment aims", statement: "Prevent communist expansion, support free peoples, build alliances, rebuild Western Europe." },
            ],
            steps: [
              { reasoning: "Prevent the spread of communism beyond its existing zones — e.g. Truman Doctrine aid to Greece and Turkey.", marks: 1, markCode: "M" },
              { reasoning: "Build collective security through NATO and economic recovery through the Marshall Plan.", marks: 1, markCode: "M" },
              { reasoning: "Broader aim: demonstrate capitalist prosperity as an alternative to communism.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Block communist expansion and build a prosperous, allied Western bloc.",
            commonErrors: ["Describing containment as a plan to 'roll back' communism — it aimed to contain, not reverse."],
          },
        },
        {
          id: "his-u4-pdq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Evaluate the achievements of détente in the 1970s.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Détente assessment", statement: "Arms control and diplomacy achieved, but détente collapsed by 1979." },
            ],
            steps: [
              { reasoning: "Achievement: SALT I (1972) capped missile numbers; Helsinki Accords (1975) recognised borders and human rights.", marks: 1, markCode: "M" },
              { reasoning: "Achievement: Nixon's China opening and Ostpolitik reduced European tensions.", marks: 1, markCode: "M" },
              { reasoning: "Limitation: SALT II failed ratification; Afghanistan invasion (1979) ended détente and began the Second Cold War.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: real but fragile achievements — détente managed rather than resolved rivalry.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Genuine arms-control and diplomatic gains, but collapsed under renewed superpower confrontation.",
            commonErrors: ["Treating détente as a permanent settlement rather than a phase."],
          },
        },
        {
          id: "his-u4-pdq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the reasons for the growth of proxy competition during the Cold War.",
          parts: [
            { label: "a", prompt: "Explain why direct superpower war was avoided.", marks: 2 },
            { label: "b", prompt: "Describe two arenas of proxy competition.", marks: 3 },
            { label: "c", prompt: "Evaluate the consequences of proxy wars for the countries in which they were fought.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Proxy competition", statement: "MAD deterred direct war; proxies offered lower-risk expansion." },
            ],
            steps: [
              { part: "a", reasoning: "MAD/second-strike made direct nuclear war suicidal.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Conventional war in Europe risked escalation — hence competition moved elsewhere.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Korea and Vietnam: US/UN vs communist-backed forces, China and USSR supplying arms.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Afghanistan: USSR invasion (1979) vs US-backed mujahideen.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Third World arenas: Angola, Nicaragua, Ethiopia — superpower arms and advisers.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Devastating human cost: millions dead, economies ruined, landmines and displacement lasting decades.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Weakened states and created militant movements (e.g. mujahideen) that outlived the Cold War.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: proxies let superpowers compete cheaply but externalised enormous costs onto local populations.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) MAD deterred direct war. (b) Korea/Vietnam, Afghanistan, Third World arenas. (c) Huge human cost for host countries.",
            commonErrors: ["Focusing only on superpower gains and ignoring local consequences."],
          },
        },
        {
          id: "his-u4-pdq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Truman Doctrine (1947) was designed to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Contain communism by offering aid to Greece and Turkey" },
              { id: "b", text: "Create a permanent UN peacekeeping force" },
              { id: "c", text: "Nationalise the Suez Canal" },
              { id: "d", text: "Negotiate SALT arms-control treaties" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Truman Doctrine", statement: "US offer of military and economic aid to Greece and Turkey to resist communism." },
            ],
            steps: [
              { reasoning: "The Truman Doctrine pledged aid to free peoples resisting communist subjugation, beginning with Greece and Turkey.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Contain communism via aid to Greece and Turkey",
            commonErrors: ["Confusing the Truman Doctrine with the Marshall Plan's economic reconstruction focus."],
          },
        },
        {
          id: "his-u4-pdq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Marshall Plan (1948) primarily aimed to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rebuild the economies of Western Europe" },
              { id: "b", text: "Form a military alliance against the USSR" },
              { id: "c", text: "Divide Germany into occupation zones" },
              { id: "d", text: "Support communist parties in France and Italy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Marshall Plan", statement: "US-funded programme to rebuild Western European economies and counter communist appeal." },
            ],
            steps: [
              { reasoning: "The Marshall Plan channelled billions of dollars into Western European economic recovery.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Rebuild Western European economies",
            commonErrors: ["Confusing the Marshall Plan's economic purpose with NATO's military purpose."],
          },
        },
        {
          id: "his-u4-pdq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "NATO, the Western military alliance, was founded in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1947" },
              { id: "b", text: "1949" },
              { id: "c", text: "1955" },
              { id: "d", text: "1961" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "NATO", statement: "North Atlantic Treaty Organisation founded in 1949 as a collective defence alliance." },
            ],
            steps: [
              { reasoning: "NATO was established by the North Atlantic Treaty in 1949.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 1949",
            commonErrors: ["Confusing NATO (1949) with the Warsaw Pact (1955)."],
          },
        },
        {
          id: "his-u4-pdq8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Warsaw Pact (1955) was:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A Soviet-led military alliance of Eastern European states" },
              { id: "b", text: "A Western economic recovery programme" },
              { id: "c", text: "A UN agency for refugee relief" },
              { id: "d", text: "A nuclear test-ban agreement" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Warsaw Pact", statement: "Soviet counter-alliance to NATO, formed in 1955." },
            ],
            steps: [
              { reasoning: "The Warsaw Pact bound the USSR and its satellites into a mutual defence organisation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Soviet-led military alliance",
            commonErrors: ["Confusing the Warsaw Pact with Comecon, the Soviet economic bloc."],
          },
        },
        {
          id: "his-u4-pdq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The first Strategic Arms Limitation Talks agreement (SALT I) was signed in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1962" },
              { id: "b", text: "1972" },
              { id: "c", text: "1975" },
              { id: "d", text: "1979" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "SALT I", statement: "First US–Soviet arms-control treaty, signed during détente in 1972." },
            ],
            steps: [
              { reasoning: "SALT I was signed in 1972 during Nixon's détente policy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 1972",
            commonErrors: ["Confusing SALT I (1972) with SALT II (1979)."],
          },
        },
        {
          id: "his-u4-pdq10",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "The Helsinki Accords (1975) were significant because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Capped the superpowers' nuclear arsenals" },
              { id: "b", text: "Recognised post-war European borders while committing signatories to human rights" },
              { id: "c", text: "Ended the Vietnam War" },
              { id: "d", text: "Created the Warsaw Pact" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Helsinki Accords", statement: "1975 agreement trading Western recognition of Soviet bloc borders for human-rights commitments." },
            ],
            steps: [
              { reasoning: "The Accords confirmed European borders and included human-rights and self-determination clauses.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Borders recognised in exchange for human-rights commitments",
            commonErrors: ["Treating Helsinki as an arms-control treaty like SALT."],
          },
        },
        {
          id: "his-u4-pdq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Truman Doctrine announced; (b) NATO founded; (c) the Warsaw Pact formed.",
          response: { type: "numeric", parts: [{ label: "Truman Doctrine", answer: 1947 }, { label: "NATO founded", answer: 1949 }, { label: "Warsaw Pact formed", answer: 1955 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Alliance chronology", statement: "1947 Truman Doctrine; 1949 NATO; 1955 Warsaw Pact." },
            ],
            steps: [
              { reasoning: "The Truman Doctrine dates from 1947.", working: "1947", marks: 1, markCode: "M" },
              { reasoning: "NATO was founded in 1949.", working: "1949", marks: 1, markCode: "M" },
              { reasoning: "The Warsaw Pact was formed in 1955.", working: "1955", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1947; 1949; 1955",
            commonErrors: ["Swapping the NATO and Warsaw Pact dates."],
          },
        },
        {
          id: "his-u4-pdq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) SALT I signed; (b) the Helsinki Accords signed; (c) the Soviet invasion of Afghanistan began.",
          response: { type: "numeric", parts: [{ label: "SALT I signed", answer: 1972 }, { label: "Helsinki Accords", answer: 1975 }, { label: "Afghanistan invaded", answer: 1979 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Détente chronology", statement: "1972 SALT I; 1975 Helsinki; 1979 Afghanistan invasion ended détente." },
            ],
            steps: [
              { reasoning: "SALT I was signed in 1972.", working: "1972", marks: 1, markCode: "M" },
              { reasoning: "The Helsinki Accords were signed in 1975.", working: "1975", marks: 1, markCode: "M" },
              { reasoning: "The USSR invaded Afghanistan in December 1979.", working: "1979", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1972; 1975; 1979",
            commonErrors: ["Confusing SALT I (1972) with SALT II (1979)."],
          },
        },
        {
          id: "his-u4-pdq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between the Truman Doctrine (1947) and NATO's founding (1949); (b) between SALT I (1972) and the Helsinki Accords (1975); (c) between the Helsinki Accords (1975) and the Soviet invasion of Afghanistan (1979).",
          response: { type: "numeric", parts: [{ label: "1947 to 1949", answer: 2 }, { label: "1972 to 1975", answer: 3 }, { label: "1975 to 1979", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1949 - 1947 = 2$ years.", working: "1949 - 1947 = 2", marks: 1, markCode: "M" },
              { reasoning: "$1975 - 1972 = 3$ years.", working: "1975 - 1972 = 3", marks: 1, markCode: "M" },
              { reasoning: "$1979 - 1975 = 4$ years.", working: "1979 - 1975 = 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2; 3; 4 years",
            commonErrors: ["Adding instead of subtracting the years."],
          },
        },
        {
          id: "his-u4-pdq14",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the Marshall Plan launched; NATO founded; the Warsaw Pact formed; the Helsinki Accords signed.",
          response: { type: "numeric", parts: [{ label: "Marshall Plan launched", answer: 1 }, { label: "NATO founded", answer: 2 }, { label: "Warsaw Pact formed", answer: 3 }, { label: "Helsinki Accords", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Alliance chronology order", statement: "1948 Marshall Plan → 1949 NATO → 1955 Warsaw Pact → 1975 Helsinki." },
            ],
            steps: [
              { reasoning: "The Marshall Plan (1948) is earliest.", working: "1948", marks: 1, markCode: "M" },
              { reasoning: "NATO (1949) followed the Marshall Plan.", working: "1949", marks: 1, markCode: "M" },
              { reasoning: "The Warsaw Pact (1955) preceded Helsinki (1975); all ordered correctly.", working: "1955 < 1975", marks: 1, markCode: "M" },
              { reasoning: "Correct sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Marshall Plan 1, NATO 2, Warsaw Pact 3, Helsinki 4",
            commonErrors: ["Placing Helsinki before the Warsaw Pact."],
          },
        },
        {
          id: "his-u4-pdq15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each proxy-war milestone: (a) the Korean War armistice; (b) US combat troops entered Vietnam; (c) the Soviet invasion of Afghanistan.",
          response: { type: "numeric", parts: [{ label: "Korean armistice", answer: 1953 }, { label: "US troops in Vietnam", answer: 1965 }, { label: "Afghanistan invasion", answer: 1979 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Proxy war chronology", statement: "1953 Korea armistice; 1965 Vietnam escalation; 1979 Afghanistan." },
            ],
            steps: [
              { reasoning: "The Korean armistice was signed in 1953.", working: "1953", marks: 1, markCode: "M" },
              { reasoning: "US combat troops entered Vietnam in 1965.", working: "1965", marks: 1, markCode: "M" },
              { reasoning: "The USSR invaded Afghanistan in 1979.", working: "1979", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1953; 1965; 1979",
            commonErrors: ["Confusing the Korean armistice (1953) with the start of the war (1950)."],
          },
        },
        {
          id: "his-u4-pdq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these détente-era events from earliest to latest (1 = earliest): SALT I signed; the Helsinki Accords signed; SALT II signed; the Soviet invasion of Afghanistan.",
          response: { type: "numeric", parts: [{ label: "SALT I signed", answer: 1 }, { label: "Helsinki Accords", answer: 2 }, { label: "SALT II signed", answer: 3 }, { label: "Afghanistan invaded", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Détente chronology order", statement: "1972 SALT I → 1975 Helsinki → 1979 SALT II → 1979 invasion." },
            ],
            steps: [
              { reasoning: "SALT I (1972) is earliest.", working: "1972", marks: 1, markCode: "M" },
              { reasoning: "Helsinki (1975) followed SALT I.", working: "1975", marks: 1, markCode: "M" },
              { reasoning: "SALT II (1979) preceded the December 1979 invasion; all ordered correctly.", working: "1979 (SALT II) < 1979 (invasion)", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "SALT I 1, Helsinki 2, SALT II 3, Afghanistan 4",
            commonErrors: ["Placing the Afghanistan invasion before SALT II in 1979."],
          },
        },
      ],
    },
  ],
};
