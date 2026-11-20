import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "his-u4-lesson-4-2",
  code: "4-2",
  title: "Major Cold War Crises: Berlin, Korea, Cuba and Vietnam",
  goal: "I CAN analyse the causes, course and consequences of the Berlin crises, the Korean and Vietnam wars, and the Cuban Missile Crisis.",
  standards: ["Paper 1", "Paper 2", "Topic 4"],
  vocabulary: [
    { term: "Iron Curtain", definition: "Churchill's 1946 metaphor for the division of Europe between Soviet and Western spheres." },
    { term: "Berlin Blockade", definition: "Soviet closure of land routes to West Berlin (June 1948–May 1949), answered by the airlift." },
    { term: "Truman Doctrine", definition: "US policy (1947) of supporting free peoples resisting communist subversion." },
    { term: "Cuban Missile Crisis", definition: "October 1962 confrontation over Soviet missiles in Cuba, the closest the Cold War came to nuclear war." },
    { term: "Vietnam War", definition: "US–South Vietnamese conflict against North Vietnam and the Viet Cong (c. 1955–1975)." },
    { term: "Containment", definition: "Strategy of preventing communist expansion, applied in Europe and Asia." },
  ],
  concepts: [
    {
      id: "his-u4-berlin-korea",
      title: "The Berlin crises and the Korean War",
      skill: "Analyse the causes and consequences of the Berlin Blockade and Wall, and explain the Korean War as a Cold War conflict.",
      lesson: {
        sections: [
          {
            heading: "Germany and the Berlin Blockade",
            body: "After WWII Germany was divided into occupation zones; Berlin, deep inside the Soviet zone, was likewise split four ways. In June 1948 the USSR blockaded all land and water access to West Berlin, aiming to force the Western powers out. The US and Britain responded with the **Berlin Airlift**, flying in food and fuel for eleven months. The blockade failed and was lifted in May 1949; in August 1961 East Germany built the **Berlin Wall** to stop its citizens fleeing west.",
          },
          {
            heading: "Korea: first hot war of the Cold War",
            body: "Korea had been divided at the 38th parallel after 1945. In June 1950 North Korea, backed by the USSR and China, invaded the South. The UN (with US leadership) intervened; China entered when UN forces approached the Yalu River. The war ended in a 1953 armistice near the original border — a stalemate. It established the pattern of proxy war and showed that the Cold War could be fought with conventional weapons in Asia.",
          },
          {
            heading: "Consequences",
            body: "The Berlin crises hardened the division of Europe and legitimised NATO and the Warsaw Pact. The Korean War militarised containment in Asia, tripled the US defence budget, and left Korea permanently divided — a reminder that Cold War conflicts could end in stalemate rather than victory for either side.",
          },
        ],
        keyFormulas: [
          { name: "Berlin timeline", statement: "Blockade 1948–49 → airlift → Wall built 1961" },
          { name: "Korean War", statement: "North invasion June 1950 → UN/US intervention → Chinese entry 1950 → armistice 1953" },
        ],
        workedExample: {
          problem: "Why did the Berlin Airlift succeed where other responses might have failed?",
          solution: "The airlift supplied West Berlin without firing a shot or violating Soviet airspace, avoiding direct confrontation while demonstrating Western resolve. It sustained the city until Stalin lifted the blockade in May 1949.",
        },
      },
      questions: [
        {
          id: "his-u4-bcq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Berlin Wall was built in 1961 primarily to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Defend West Berlin from invasion" },
              { id: "b", text: "Stop East Germans fleeing to the West" },
              { id: "c", text: "Divide Berlin between the superpowers" },
              { id: "d", text: "Protect Soviet supply routes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Berlin Wall purpose", statement: "Built by East Germany in 1961 to halt the mass emigration of its citizens westward." },
            ],
            steps: [
              { reasoning: "The Wall stopped East Germans from defecting to West Berlin.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Stop East Germans fleeing west",
            commonErrors: ["Thinking the Wall divided Berlin — it divided East from West within the city."],
          },
        },
        {
          id: "his-u4-bcq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe the course of the Korean War (1950–1953).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Korean War course", statement: "North invasion 1950 → UN/US intervention → Chinese entry → armistice 1953." },
            ],
            steps: [
              { reasoning: "North Korea invaded the South in June 1950; the UN (led by the US) intervened to defend the South.", marks: 1, markCode: "M" },
              { reasoning: "UN/US forces pushed north, nearly reaching China; China entered the war in late 1950.", marks: 1, markCode: "M" },
              { reasoning: "Stalemate near the 38th parallel ended in a 1953 armistice — no peace treaty, Korea still divided.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "North invasion → UN/US intervention → Chinese entry → 1953 armistice stalemate.",
            commonErrors: ["Omitting the Chinese intervention, which decided the war's course."],
          },
        },
        {
          id: "his-u4-bcq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Analyse the significance of the Berlin Blockade for the development of the Cold War.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Berlin Blockade significance", statement: "First direct superpower confrontation; produced airlift, NATO and hardened division." },
            ],
            steps: [
              { reasoning: "It was the first major direct confrontation between East and West since WWII.", marks: 1, markCode: "M" },
              { reasoning: "The Western airlift demonstrated resolve without war and preserved West Berlin.", marks: 1, markCode: "M" },
              { reasoning: "Analysis: failure pushed the USSR to build the Wall (1961); success led to NATO (1949).", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: entrenched the division of Germany and Europe into rival blocs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "First superpower confrontation; produced NATO, the airlift's demonstration of resolve, and the later Wall.",
            commonErrors: ["Treating the Blockade as the same event as the Wall — they were separate crises thirteen years apart."],
          },
        },
        {
          id: "his-u4-bcq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Examine the Korean War as an example of Cold War conflict.",
          parts: [
            { label: "a", prompt: "Explain why Korea became a Cold War battleground.", marks: 2 },
            { label: "b", prompt: "Describe the roles of the superpowers and the UN.", marks: 3 },
            { label: "c", prompt: "Evaluate the consequences of the war for Korea and for the Cold War.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Korea as proxy war", statement: "Divided nation at 38th parallel became the first major proxy conflict." },
            ],
            steps: [
              { part: "a", reasoning: "Korea was divided at the 38th parallel in 1945 into Soviet-backed North and US-backed South.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Each side claimed the whole country; the North's invasion pulled in the Cold War blocs.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "USSR/China armed and advised North Korea; the US led UN forces defending the South.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "UN resolution authorised intervention — the first UN 'police action'.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "China entered when UN forces approached its border, turning it into a wider war.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Korea remained divided at the 38th parallel; ~3 million dead; families separated for decades.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Cold War: proved containment militarily, raised US defence spending, hardened Asian division.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Divided at 38th parallel, rival claims. (b) Superpowers armed sides; UN/US intervened; China entered. (c) Stalemate, permanent division, militarised containment.",
            commonErrors: ["Describing Korea as a direct US–USSR war rather than a proxy conflict."],
          },
        },
        {
          id: "his-u4-bcq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Soviet blockade of West Berlin began in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1945" },
              { id: "b", text: "1948" },
              { id: "c", text: "1950" },
              { id: "d", text: "1961" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Berlin Blockade", statement: "In June 1948 the USSR blockaded all land and water access to West Berlin." },
            ],
            steps: [
              { reasoning: "The blockade began in June 1948.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 1948",
            commonErrors: ["Confusing the blockade (1948) with the building of the Wall (1961)."],
          },
        },
        {
          id: "his-u4-bcq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Berlin Airlift supplied West Berlin for approximately how long?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "One month" },
              { id: "b", text: "Six months" },
              { id: "c", text: "Eleven months" },
              { id: "d", text: "Three years" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Berlin Airlift", statement: "US and British aircraft flew in supplies for eleven months until the blockade was lifted in May 1949." },
            ],
            steps: [
              { reasoning: "The airlift ran for eleven months without firing a shot.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Eleven months",
            commonErrors: ["Underestimating the duration of the airlift."],
          },
        },
        {
          id: "his-u4-bcq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Berlin Wall was built in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1948" },
              { id: "b", text: "1950" },
              { id: "c", text: "1961" },
              { id: "d", text: "1975" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Berlin Wall", statement: "East Germany built the Wall in August 1961 to stop citizens fleeing west." },
            ],
            steps: [
              { reasoning: "The Wall was erected in August 1961.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 1961",
            commonErrors: ["Confusing the Wall (1961) with the blockade (1948–49)."],
          },
        },
        {
          id: "his-u4-bcq8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "After 1945, Korea was divided along:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The 17th parallel" },
              { id: "b", text: "The 38th parallel" },
              { id: "c", text: "The Yalu River" },
              { id: "d", text: "The DMZ established in 1953" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Korean division", statement: "Korea was divided at the 38th parallel after 1945." },
            ],
            steps: [
              { reasoning: "The dividing line between North and South Korea was the 38th parallel.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The 38th parallel",
            commonErrors: ["Confusing Korea's 38th parallel with Vietnam's 17th parallel."],
          },
        },
        {
          id: "his-u4-bcq9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Korean War began in June 1950 when:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The UN forces invaded North Korea" },
              { id: "b", text: "North Korea invaded South Korea" },
              { id: "c", text: "China attacked South Korea" },
              { id: "d", text: "The Soviet Union declared war on the UN" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Korean War outbreak", statement: "North Korea, backed by the USSR and China, invaded the South in June 1950." },
            ],
            steps: [
              { reasoning: "North Korean forces crossed the 38th parallel in June 1950.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** North Korea invaded South Korea",
            commonErrors: ["Reversing the direction of the invasion."],
          },
        },
        {
          id: "his-u4-bcq10",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "The Korean War ended in 1953 with:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A UN victory and reunification of Korea" },
              { id: "b", text: "An armistice near the original border — a stalemate" },
              { id: "c", text: "A formal peace treaty" },
              { id: "d", text: "North Korea's annexation of the South" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Korean armistice", statement: "The 1953 armistice ended fighting near the original border but produced no peace treaty." },
            ],
            steps: [
              { reasoning: "The armistice froze the conflict near the 38th parallel without a peace settlement.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** A 1953 armistice near the original border",
            commonErrors: ["Describing the outcome as a victory for either side."],
          },
        },
        {
          id: "his-u4-bcq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Soviet blockade of West Berlin began; (b) the blockade was lifted; (c) the Berlin Wall was built.",
          response: { type: "numeric", parts: [{ label: "Blockade began", answer: 1948 }, { label: "Blockade lifted", answer: 1949 }, { label: "Wall built", answer: 1961 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Berlin chronology", statement: "Blockade June 1948; lifted May 1949; Wall built August 1961." },
            ],
            steps: [
              { reasoning: "The blockade began in June 1948.", working: "1948", marks: 1, markCode: "M" },
              { reasoning: "It was lifted in May 1949.", working: "1949", marks: 1, markCode: "M" },
              { reasoning: "The Wall was built in August 1961.", working: "1961", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1948; 1949; 1961",
            commonErrors: ["Confusing the end of the blockade (1949) with the building of the Wall (1961)."],
          },
        },
        {
          id: "his-u4-bcq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) North Korea invaded South Korea; (b) the Korean War armistice was signed; (c) Chinese forces entered the war.",
          response: { type: "numeric", parts: [{ label: "North invasion", answer: 1950 }, { label: "Armistice signed", answer: 1953 }, { label: "Chinese entry", answer: 1950 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Korean War chronology", statement: "Invasion June 1950; Chinese entry late 1950; armistice 1953." },
            ],
            steps: [
              { reasoning: "North Korea invaded in June 1950.", working: "1950", marks: 1, markCode: "M" },
              { reasoning: "The armistice was signed in 1953.", working: "1953", marks: 1, markCode: "M" },
              { reasoning: "China entered the war in 1950 when UN forces neared the Yalu.", working: "1950", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1950; 1953; 1950",
            commonErrors: ["Dating the armistice to 1950 instead of 1953."],
          },
        },
        {
          id: "his-u4-bcq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between the division of Germany and the start of the blockade (1945 to 1948); (b) between the start of the Korean War (1950) and the armistice (1953); (c) between the armistice (1953) and the building of the Berlin Wall (1961).",
          response: { type: "numeric", parts: [{ label: "1945 to 1948", answer: 3 }, { label: "1950 to 1953", answer: 3 }, { label: "1953 to 1961", answer: 8 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1948 - 1945 = 3$ years.", working: "1948 - 1945 = 3", marks: 1, markCode: "M" },
              { reasoning: "$1953 - 1950 = 3$ years of war.", working: "1953 - 1950 = 3", marks: 1, markCode: "M" },
              { reasoning: "$1961 - 1953 = 8$ years.", working: "1961 - 1953 = 8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "3; 3; 8 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u4-bcq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): Germany divided into occupation zones; the Soviet blockade of West Berlin; North Korea's invasion of the South; the Berlin Wall built.",
          response: { type: "numeric", parts: [{ label: "Germany divided", answer: 1 }, { label: "Blockade begins", answer: 2 }, { label: "North invasion", answer: 3 }, { label: "Wall built", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Post-war chronology order", statement: "1945 division → 1948 blockade → 1950 invasion → 1961 Wall." },
            ],
            steps: [
              { reasoning: "Germany's division (1945) is earliest.", working: "1945", marks: 1, markCode: "M" },
              { reasoning: "The blockade (1948) preceded the Korean invasion (1950).", working: "1948 < 1950", marks: 1, markCode: "M" },
              { reasoning: "The Korean invasion (1950) preceded the Wall (1961); all ordered correctly.", working: "1950 < 1961", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Division 1, blockade 2, invasion 3, Wall 4",
            commonErrors: ["Placing the Korean invasion before the Berlin Blockade."],
          },
        },
        {
          id: "his-u4-bcq15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the blockade of West Berlin began; (b) the Berlin Wall was built; (c) the Korean War armistice signed.",
          response: { type: "numeric", parts: [{ label: "Blockade began", answer: 1948 }, { label: "Wall built", answer: 1961 }, { label: "Korean armistice", answer: 1953 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Cold War flashpoints", statement: "1948 blockade; 1953 armistice; 1961 Wall." },
            ],
            steps: [
              { reasoning: "The blockade began in 1948.", working: "1948", marks: 1, markCode: "M" },
              { reasoning: "The Wall was built in 1961.", working: "1961", marks: 1, markCode: "M" },
              { reasoning: "The Korean armistice was signed in 1953.", working: "1953", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1948; 1961; 1953",
            commonErrors: ["Swapping the Wall (1961) and armistice (1953) dates."],
          },
        },
        {
          id: "his-u4-bcq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): Korea divided after 1945; the Soviet blockade of West Berlin lifted; the Korean War armistice; the Berlin Wall built.",
          response: { type: "numeric", parts: [{ label: "Korea divided", answer: 1 }, { label: "Blockade lifted", answer: 2 }, { label: "Korean armistice", answer: 3 }, { label: "Wall built", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Post-war chronology order", statement: "1945 division → 1949 blockade lifted → 1953 armistice → 1961 Wall." },
            ],
            steps: [
              { reasoning: "Korea's division (1945) is earliest.", working: "1945", marks: 1, markCode: "M" },
              { reasoning: "The blockade was lifted in 1949.", working: "1949", marks: 1, markCode: "M" },
              { reasoning: "The armistice (1953) preceded the Wall (1961); all ordered correctly.", working: "1953 < 1961", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Division 1, blockade lifted 2, armistice 3, Wall 4",
            commonErrors: ["Placing the Wall before the Korean armistice."],
          },
        },
      ],
    },
    {
      id: "his-u4-cuba-vietnam",
      title: "The Cuban Missile Crisis and the Vietnam War",
      skill: "Analyse the Cuban Missile Crisis and explain how the Vietnam War exposed the limits of containment.",
      lesson: {
        sections: [
          {
            heading: "Cuban Missile Crisis, October 1962",
            body: "After the failed Bay of Pigs invasion (1961), Cuba's Fidel Castro accepted Soviet missiles. When US reconnaissance revealed them, President Kennedy imposed a naval **quarantine** and demanded removal. Thirteen days of brinkmanship followed; a secret deal — US Jupiter missiles withdrawn from Turkey in exchange for Soviet withdrawal from Cuba — resolved the crisis. The **Moscow–Washington hotline** was created to prevent miscalculation.",
          },
          {
            heading: "Vietnam and the limits of containment",
            body: "Vietnam had been divided at the 17th parallel after 1954. US involvement escalated from advisers to combat troops (1965) under the **domino theory** — the fear that one communist victory would topple Asia. Despite massive firepower, the US could not defeat a guerrilla enemy with local support. The **Tet Offensive** (1968) destroyed US public confidence; **Vietnamisation** and eventual withdrawal followed the 1973 Paris Peace Accords. Saigon fell to North Vietnam in 1975 — a clear US defeat.",
          },
          {
            heading: "Significance",
            body: "The Missile Crisis marked the peak of nuclear danger and led to the Limited Test Ban Treaty (1963) and détente. Vietnam showed containment's limits: overwhelming military power could not win a political war against nationalist insurgency. Together they defined the late Cold War — one a near-apocalypse avoided, the other a superpower overreach exposed.",
          },
        ],
        keyFormulas: [
          { name: "Missile Crisis timeline", statement: "Bay of Pigs 1961 → missiles discovered Oct 1962 → quarantine → secret deal → withdrawal" },
          { name: "Vietnam escalation", statement: "Advisers → combat troops 1965 → Tet 1968 → Vietnamisation → Saigon falls 1975" },
        ],
        workedExample: {
          problem: "Why was the Cuban Missile Crisis resolved without war while Vietnam ended in defeat?",
          solution: "In Cuba, both sides had second-strike capability and strong incentives to bargain — a deal served both. In Vietnam, US aims exceeded what firepower could achieve against a popular insurgency, and domestic opposition forced withdrawal.",
        },
      },
      questions: [
        {
          id: "his-u4-ccq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'domino theory' held that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Communist states would inevitably collapse" },
              { id: "b", text: "One country's fall to communism would trigger neighbouring collapses" },
              { id: "c", text: "Nuclear war would begin in Asia" },
              { id: "d", text: "The US should abandon Asia" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Domino theory", statement: "Belief that communist victory in one nation would spread to neighbours like falling dominoes." },
            ],
            steps: [
              { reasoning: "The domino theory predicted regional spread of communism after one nation's fall.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** One fall would trigger neighbouring collapses",
            commonErrors: ["Confusing the domino theory with containment itself."],
          },
        },
        {
          id: "his-u4-ccq2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Describe the key events of the Cuban Missile Crisis (October 1962).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Missile Crisis events", statement: "Discovery, quarantine, thirteen days, secret Jupiter-for-missiles deal, hotline." },
            ],
            steps: [
              { reasoning: "US U-2 flights revealed Soviet missile sites under construction in Cuba.", marks: 1, markCode: "M" },
              { reasoning: "Kennedy imposed a naval quarantine and demanded the missiles' removal; Khrushchev initially refused.", marks: 1, markCode: "M" },
              { reasoning: "After thirteen days a secret deal — US Jupiter missiles out of Turkey — led to Soviet withdrawal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Discovery → quarantine → brinkmanship → secret reciprocal deal → withdrawal.",
            commonErrors: ["Omitting the secret Turkey dimension of the resolution."],
          },
        },
        {
          id: "his-u4-ccq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why the US failed to win the Vietnam War.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "US failure in Vietnam", statement: "Guerrilla war, lack of political legitimacy, domestic opposition and terrain favoured North Vietnam." },
            ],
            steps: [
              { reasoning: "The Viet Cong and North Vietnamese army fought a guerrilla war the US could not easily identify or defeat.", marks: 1, markCode: "M" },
              { reasoning: "The US-backed South Vietnamese government lacked popular legitimacy and was corrupt.", marks: 1, markCode: "M" },
              { reasoning: "Terrain and the Ho Chi Minh trail made supply and control impossible; Tet shattered US morale.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: military superiority could not achieve political aims — a fundamental overreach.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Guerrilla warfare, weak South Vietnamese legitimacy, terrain and collapsing US domestic support.",
            commonErrors: ["Attributing failure only to poor tactics rather than strategic and political factors."],
          },
        },
        {
          id: "his-u4-ccq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Compare the Cuban Missile Crisis and the Vietnam War as examples of Cold War confrontation.",
          parts: [
            { label: "a", prompt: "Describe the origins of each confrontation.", marks: 3 },
            { label: "b", prompt: "Explain how each confrontation ended.", marks: 3 },
            { label: "c", prompt: "Evaluate their significance for the Cold War.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Crisis comparison", statement: "Cuba = direct superpower brinkmanship resolved by diplomacy; Vietnam = prolonged proxy war ending in US defeat." },
            ],
            steps: [
              { part: "a", reasoning: "Cuba: Soviet missiles placed in Cuba after Bay of Pigs; Vietnam: divided nation, US support for South against communist North.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Cuba: superpower-to-superpower confrontation over nuclear weapons.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Vietnam: proxy war driven by containment and the domino theory.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Cuba: secret deal — US missiles out of Turkey for Soviet withdrawal from Cuba.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cuba ended quickly (13 days) with no shots fired; hotline created.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Vietnam: Paris Peace Accords 1973, US withdrawal, Saigon fell 1975 — US defeat.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cuba showed MAD could prevent war and spurred détente; Vietnam showed containment's limits.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Together they bracket the late Cold War: near-nuclear catastrophe avoided, proxy overreach exposed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Cuba: Soviet missiles; Vietnam: divided nation/proxy war. (b) Cuba: secret deal; Vietnam: withdrawal and defeat. (c) One averted catastrophe, the other exposed limits.",
            commonErrors: ["Treating both as identical — they differed in level, duration and outcome."],
          },
        },
        {
          id: "his-u4-ccq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Bay of Pigs invasion, a failed US attempt to overthrow Castro, occurred in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1958" },
              { id: "b", text: "1961" },
              { id: "c", text: "1962" },
              { id: "d", text: "1965" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Bay of Pigs", statement: "US-backed invasion of Cuba failed in April 1961, pushing Castro toward the USSR." },
            ],
            steps: [
              { reasoning: "The Bay of Pigs invasion took place in 1961.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 1961",
            commonErrors: ["Confusing the Bay of Pigs (1961) with the Missile Crisis (1962)."],
          },
        },
        {
          id: "his-u4-ccq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "When US reconnaissance revealed Soviet missiles in Cuba in October 1962, President Kennedy responded by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Immediately invading Cuba" },
              { id: "b", text: "Imposing a naval quarantine and demanding removal" },
              { id: "c", text: "Withdrawing US missiles from Turkey first" },
              { id: "d", text: "Asking the UN to mediate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Cuban Missile Crisis", statement: "Kennedy imposed a quarantine and demanded the missiles' removal, opening thirteen days of brinkmanship." },
            ],
            steps: [
              { reasoning: "Kennedy chose a naval quarantine — a middle path between doing nothing and war.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Naval quarantine and demand for removal",
            commonErrors: ["Confusing the quarantine with an immediate military invasion."],
          },
        },
        {
          id: "his-u4-ccq7",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "The secret deal that resolved the Cuban Missile Crisis involved:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The USSR paying war reparations to the US" },
              { id: "b", text: "US Jupiter missiles withdrawn from Turkey in exchange for Soviet withdrawal from Cuba" },
              { id: "c", text: "Cuba joining the Warsaw Pact" },
              { id: "d", text: "Castro being removed from power" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Secret deal", statement: "The US quietly agreed to remove Jupiter missiles from Turkey while the USSR withdrew its missiles from Cuba." },
            ],
            steps: [
              { reasoning: "The back-channel bargain swapped Soviet missiles in Cuba for US missiles in Turkey.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Reciprocal missile withdrawals",
            commonErrors: ["Missing the secret, reciprocal nature of the deal."],
          },
        },
        {
          id: "his-u4-ccq8",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "The 'domino theory' that drove US escalation in Vietnam held that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Communist victory in one country would topple its neighbours" },
              { id: "b", text: "China would invade Vietnam within five years" },
              { id: "c", text: "Nuclear war was inevitable" },
              { id: "d", text: "The USSR would attack Europe if Vietnam fell" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Domino theory", statement: "The belief that one communist victory would trigger a chain of collapses across Asia." },
            ],
            steps: [
              { reasoning: "The domino theory feared a cascade of communist takeovers after Vietnam.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** One communist victory would topple neighbours",
            commonErrors: ["Treating the domino theory as a description of actual events rather than a US fear."],
          },
        },
        {
          id: "his-u4-ccq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Tet Offensive of 1968 was significant because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Won the war for North Vietnam immediately" },
              { id: "b", text: "Destroyed US public confidence despite being a military setback for the North" },
              { id: "c", text: "Brought Soviet troops into Vietnam" },
              { id: "d", text: "Forced China's withdrawal from the war" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Tet Offensive", statement: "The 1968 Tet Offensive was a military defeat for the North but shattered US domestic support for the war." },
            ],
            steps: [
              { reasoning: "Although a tactical setback for Hanoi, Tet's scale shocked American opinion and ended the war's credibility.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Destroyed US public confidence",
            commonErrors: ["Describing Tet as an outright North Vietnamese military victory."],
          },
        },
        {
          id: "his-u4-ccq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Saigon fell to North Vietnam in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1968" },
              { id: "b", text: "1973" },
              { id: "c", text: "1975" },
              { id: "d", text: "1979" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Fall of Saigon", statement: "Saigon fell in April 1975, two years after the US withdrawal." },
            ],
            steps: [
              { reasoning: "Saigon fell to North Vietnamese forces in 1975.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** 1975",
            commonErrors: ["Confusing the Paris Peace Accords (1973) with the fall of Saigon (1975)."],
          },
        },
        {
          id: "his-u4-ccq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Bay of Pigs invasion; (b) the Cuban Missile Crisis; (c) the fall of Saigon.",
          response: { type: "numeric", parts: [{ label: "Bay of Pigs", answer: 1961 }, { label: "Missile Crisis", answer: 1962 }, { label: "Saigon falls", answer: 1975 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Cuba–Vietnam chronology", statement: "1961 Bay of Pigs; 1962 crisis; 1975 Saigon." },
            ],
            steps: [
              { reasoning: "The Bay of Pigs took place in 1961.", working: "1961", marks: 1, markCode: "M" },
              { reasoning: "The Missile Crisis occurred in 1962.", working: "1962", marks: 1, markCode: "M" },
              { reasoning: "Saigon fell in 1975.", working: "1975", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1961; 1962; 1975",
            commonErrors: ["Confusing the Bay of Pigs year with the Missile Crisis year."],
          },
        },
        {
          id: "his-u4-ccq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) Vietnam was divided at the 17th parallel; (b) US combat troops entered Vietnam; (c) the Paris Peace Accords were signed.",
          response: { type: "numeric", parts: [{ label: "Vietnam divided", answer: 1954 }, { label: "US combat troops", answer: 1965 }, { label: "Paris Peace Accords", answer: 1973 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Vietnam chronology", statement: "1954 division; 1965 escalation; 1973 accords." },
            ],
            steps: [
              { reasoning: "Vietnam was divided in 1954.", working: "1954", marks: 1, markCode: "M" },
              { reasoning: "US combat troops arrived in 1965.", working: "1965", marks: 1, markCode: "M" },
              { reasoning: "The Paris Peace Accords were signed in 1973.", working: "1973", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1954; 1965; 1973",
            commonErrors: ["Confusing the 1973 accords with the 1975 fall of Saigon."],
          },
        },
        {
          id: "his-u4-ccq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between the Bay of Pigs (1961) and the Missile Crisis (1962); (b) between the US troop escalation (1965) and the Tet Offensive (1968); (c) between the Tet Offensive (1968) and the fall of Saigon (1975).",
          response: { type: "numeric", parts: [{ label: "1961 to 1962", answer: 1 }, { label: "1965 to 1968", answer: 3 }, { label: "1968 to 1975", answer: 7 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1962 - 1961 = 1$ year.", working: "1962 - 1961 = 1", marks: 1, markCode: "M" },
              { reasoning: "$1968 - 1965 = 3$ years.", working: "1968 - 1965 = 3", marks: 1, markCode: "M" },
              { reasoning: "$1975 - 1968 = 7$ years.", working: "1975 - 1968 = 7", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1; 3; 7 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u4-ccq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the Bay of Pigs invasion; the Cuban Missile Crisis; the Tet Offensive; the fall of Saigon.",
          response: { type: "numeric", parts: [{ label: "Bay of Pigs", answer: 1 }, { label: "Missile Crisis", answer: 2 }, { label: "Tet Offensive", answer: 3 }, { label: "Saigon falls", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Cuba–Vietnam chronology order", statement: "1961 → 1962 → 1968 → 1975." },
            ],
            steps: [
              { reasoning: "The Bay of Pigs (1961) is earliest.", working: "1961", marks: 1, markCode: "M" },
              { reasoning: "The Missile Crisis (1962) followed the invasion.", working: "1962", marks: 1, markCode: "M" },
              { reasoning: "Tet (1968) preceded the fall of Saigon (1975); all ordered correctly.", working: "1968 < 1975", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Bay of Pigs 1, Crisis 2, Tet 3, Saigon 4",
            commonErrors: ["Placing Tet before the Missile Crisis."],
          },
        },
        {
          id: "his-u4-ccq15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the value for each item: (a) the number of days of brinkmanship during the Missile Crisis; (b) the parallel along which Vietnam was divided; (c) the year of the Limited Test Ban Treaty.",
          response: { type: "numeric", parts: [{ label: "Days of brinkmanship", answer: 13 }, { label: "Vietnam division parallel", answer: 17 }, { label: "Limited Test Ban Treaty", answer: 1963 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Crisis details", statement: "Thirteen days of brinkmanship; 17th parallel; Test Ban Treaty 1963." },
            ],
            steps: [
              { reasoning: "The crisis lasted thirteen days.", working: "13", marks: 1, markCode: "M" },
              { reasoning: "Vietnam was divided at the 17th parallel.", working: "17", marks: 1, markCode: "M" },
              { reasoning: "The Limited Test Ban Treaty was signed in 1963.", working: "1963", marks: 1, markCode: "A" },
            ],
            finalAnswer: "13; 17; 1963",
            commonErrors: ["Confusing the 17th parallel (Vietnam) with the 38th (Korea)."],
          },
        },
        {
          id: "his-u4-ccq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 5,
          stem: "Rank these events from earliest to latest (1 = earliest): Vietnam divided; US combat troops enter Vietnam; the Tet Offensive; the Paris Peace Accords; Saigon falls.",
          response: { type: "numeric", parts: [{ label: "Vietnam divided", answer: 1 }, { label: "US combat troops enter", answer: 2 }, { label: "Tet Offensive", answer: 3 }, { label: "Paris Peace Accords", answer: 4 }, { label: "Saigon falls", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Vietnam chronology order", statement: "1954 → 1965 → 1968 → 1973 → 1975." },
            ],
            steps: [
              { reasoning: "The division (1954) is earliest.", working: "1954", marks: 1, markCode: "M" },
              { reasoning: "US troops (1965) followed the division.", working: "1965", marks: 1, markCode: "M" },
              { reasoning: "Tet (1968) preceded the accords (1973).", working: "1968 < 1973", marks: 1, markCode: "M" },
              { reasoning: "The accords (1973) preceded Saigon's fall (1975); all ordered correctly.", working: "1973 < 1975", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4, 5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Division 1, troops 2, Tet 3, accords 4, Saigon 5",
            commonErrors: ["Placing the Paris Accords after Saigon's fall."],
          },
        },
      ],
    },
  ],
};
