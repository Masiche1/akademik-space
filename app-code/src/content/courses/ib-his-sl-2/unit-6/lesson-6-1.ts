import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "his-u6-lesson-6-1",
  code: "6-1",
  title: "The End of the Cold War: Gorbachev and the Collapse of the USSR",
  goal: "I CAN explain Gorbachev's reforms, analyse the endgame of the Cold War, and describe the causes and course of the Soviet Union's collapse.",
  standards: ["Paper 1", "Paper 2", "Topic 6"],
  vocabulary: [
    { term: "Glasnost", definition: "Gorbachev's policy of openness — relaxed censorship and allowed public debate." },
    { term: "Perestroika", definition: "Gorbachev's restructuring of the Soviet economy toward market elements." },
    { term: "Brezhnev Doctrine", definition: "Claim that the USSR could intervene to defend communism; abandoned by Gorbachev in 1988–89." },
    { term: "New Thinking", definition: "Gorbachev's foreign policy shift toward cooperation, disarmament and reducing East–West tension." },
    { term: "August Coup", definition: "Failed hardliner attempt to seize power in the USSR (August 1991) that accelerated collapse." },
    { term: "Commonwealth of Independent States (CIS)", definition: "Loose association of post-Soviet states formed in December 1991 after the USSR dissolved." },
  ],
  concepts: [
    {
      id: "his-u6-gorbachev-endgame",
      title: "Gorbachev and the endgame of the Cold War",
      skill: "Explain Gorbachev's domestic and foreign reforms and analyse how the Cold War ended.",
      lesson: {
        sections: [
          {
            heading: "The Second Cold War and its reversal",
            body: "The 1980s saw renewed tension — the Soviet invasion of Afghanistan (1979), the arms race and Reagan's 'evil empire' rhetoric. From 1985 **Mikhail Gorbachev** pursued **New Thinking**: arms reductions (INF Treaty 1987), withdrawal from Afghanistan (1989), and summits with Reagan and Bush. US pressure (SDI, defence spending) bankrupted the Soviet economy while Soviet reform opened the system.",
          },
          {
            heading: "Reform at home",
            body: "Gorbachev's domestic agenda combined **glasnost** (openness) — ending censorship and allowing criticism — with **perestroika** (restructuring) — partial market reforms. These measures released pent-up demands: nationalisms surfaced in the Baltic states, Caucasus and Ukraine; economic problems deepened as old structures broke down faster than new ones emerged.",
          },
          {
            heading: "The end of the Cold War",
            body: "Gorbachev's refusal to intervene in Eastern Europe let the 1989 revolutions succeed. He accepted German reunification (1990) within NATO and signed the START arms-reduction treaty. By refusing to use force, the USSR accepted the end of its empire — historians debate whether he intended reform or accidentally destroyed the system he meant to save.",
          },
        ],
        keyFormulas: [
          { name: "Cold War endgame", statement: "INF 1987 + Afghanistan withdrawal 1989 + 1989 revolutions + German reunification 1990" },
          { name: "Gorbachev's dilemma", statement: "Reform to save communism → releases forces that destroy it" },
        ],
        workedExample: {
          problem: "Why did the Cold War end peacefully rather than through war?",
          solution: "Both superpowers held nuclear arsenals making war suicidal; Gorbachev's New Thinking and arms control, combined with US economic pressure, allowed a negotiated end rather than confrontation.",
        },
      },
      questions: [
        {
          id: "his-u6-geq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Glasnost refers to Gorbachev's policy of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Foreign intervention" },
              { id: "b", text: "Economic centralisation" },
              { id: "c", text: "Military expansion" },
              { id: "d", text: "Openness and relaxed censorship" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Glasnost", statement: "Gorbachev's policy of openness — relaxed censorship and allowed public debate." },
            ],
            steps: [
              { reasoning: "Glasnost means openness — ending censorship and allowing debate.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Openness and relaxed censorship",
            commonErrors: ["Confusing glasnost (openness) with perestroika (economic restructuring)."],
          },
        },
        {
          id: "his-u6-geq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two ways in which Gorbachev changed Soviet foreign policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Gorbachev foreign policy", statement: "New Thinking, arms reductions, Afghanistan withdrawal, renunciation of intervention doctrine." },
            ],
            steps: [
              { reasoning: "New Thinking: shifted from confrontation to cooperation — summits with Reagan and Bush, INF and START treaties.", marks: 1, markCode: "M" },
              { reasoning: "Withdrew Soviet troops from Afghanistan (completed 1989), ending the USSR's longest war.", marks: 1, markCode: "M" },
              { reasoning: "Renounced the Brezhnev Doctrine — refused to intervene when Eastern European regimes fell in 1989.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Arms reductions, Afghanistan withdrawal and non-intervention in Eastern Europe.",
            commonErrors: ["Focusing only on domestic reforms while the question asks about foreign policy."],
          },
        },
        {
          id: "his-u6-geq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Analyse the debate over whether Gorbachev intended to end the Cold War or merely reform communism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Gorbachev intent debate", statement: "Some see deliberate dismantling; others see reform that escaped control." },
            ],
            steps: [
              { reasoning: "Evidence for intent: he chose not to use force in Eastern Europe and accepted German reunification in NATO.", marks: 1, markCode: "M" },
              { reasoning: "Evidence for accident: glasnost/perestroika released forces (nationalism, economic collapse) he could not control.", marks: 1, markCode: "M" },
              { reasoning: "Analysis: his 'New Thinking' aimed to modernise communism, not abolish it — the system's collapse may have exceeded intentions.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: most historians see him as reformer whose reforms destroyed the system he meant to save.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Likely a reformer whose liberalising policies unleashed forces beyond his control rather than a deliberate destroyer.",
            commonErrors: ["Presenting one-sided intent without weighing both interpretations."],
          },
        },
        {
          id: "his-u6-geq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the causes of the end of the Cold War.",
          parts: [
            { label: "a", prompt: "Describe the economic pressures on the USSR in the 1980s.", marks: 3 },
            { label: "b", prompt: "Explain Gorbachev's role in ending the confrontation.", marks: 3 },
            { label: "c", prompt: "Evaluate the relative importance of Soviet decline and US policy.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cold War end causes", statement: "Soviet economic stagnation + arms-race burden + Gorbachev's reforms + US pressure." },
            ],
            steps: [
              { part: "a", reasoning: "Stagnant planned economy, oil price falls and massive military spending drained resources.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "The arms race (SDI, countermeasures) imposed costs the USSR could not match.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Afghanistan war added economic and political strain.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "New Thinking replaced confrontation with negotiation and arms control.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accepted German reunification and non-intervention in Eastern Europe.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "His domestic reforms destabilised the bloc and eventually the USSR itself.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "US pressure (Reagan's military build-up) bankrupted the USSR economically.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: Soviet structural decline made end likely; US policy and Gorbachev determined how and when.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Economic stagnation, arms race, Afghanistan. (b) New Thinking, arms control, non-intervention. (c) Soviet decline decisive; US policy and Gorbachev shaped the outcome.",
            commonErrors: ["Crediting only US pressure or only Gorbachev — both mattered."],
          },
        },
        {
          id: "his-u6-geq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Mikhail Gorbachev became Soviet leader in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1985" },
              { id: "b", text: "1982" },
              { id: "c", text: "1979" },
              { id: "d", text: "1989" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Gorbachev", statement: "Gorbachev took power in 1985 and pursued 'New Thinking'." },
            ],
            steps: [
              { reasoning: "Gorbachev became General Secretary in March 1985.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** 1985",
            commonErrors: ["Confusing Gorbachev's rise with the 1989 revolutions."],
          },
        },
        {
          id: "his-u6-geq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Gorbachev's 'New Thinking' in foreign policy included:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Supporting hardline coups" },
              { id: "b", text: "Invading Eastern Europe" },
              { id: "c", text: "Arms reductions such as the INF Treaty" },
              { id: "d", text: "Expanding the Soviet nuclear arsenal" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "New Thinking", statement: "Gorbachev pursued arms control, withdrawal from Afghanistan and summit diplomacy." },
            ],
            steps: [
              { reasoning: "New Thinking prioritised disarmament — e.g. the 1987 INF Treaty — over confrontation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Arms reductions such as the INF Treaty",
            commonErrors: ["Describing New Thinking as a continuation of Brezhnev-era confrontation."],
          },
        },
        {
          id: "his-u6-geq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The INF Treaty of 1987 required the superpowers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Eliminate an entire class of nuclear missiles" },
              { id: "b", text: "End all nuclear weapons immediately" },
              { id: "c", text: "Create a joint space programme" },
              { id: "d", text: "Share nuclear technology" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "INF Treaty", statement: "The 1987 treaty abolished intermediate-range nuclear forces in Europe." },
            ],
            steps: [
              { reasoning: "INF eliminated a whole category of missiles for the first time.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Eliminate intermediate-range missiles",
            commonErrors: ["Overstating the treaty as total nuclear disarmament."],
          },
        },
        {
          id: "his-u6-geq8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "'Glasnost' under Gorbachev meant:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Openness — an end to censorship and allowance of criticism" },
              { id: "b", text: "Restructuring of the economy" },
              { id: "c", text: "Free elections in all republics" },
              { id: "d", text: "Privatisation of state industries" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Glasnost", statement: "Openness policy ending censorship and permitting public criticism." },
            ],
            steps: [
              { reasoning: "Glasnost released suppressed information and debate.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Openness",
            commonErrors: ["Confusing glasnost with perestroika's economic restructuring."],
          },
        },
        {
          id: "his-u6-geq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Soviet Union withdrew its forces from Afghanistan in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1987" },
              { id: "b", text: "1979" },
              { id: "c", text: "1985" },
              { id: "d", text: "1989" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Afghanistan withdrawal", statement: "The USSR completed its withdrawal from Afghanistan in 1989." },
            ],
            steps: [
              { reasoning: "Soviet forces left Afghanistan in 1989 under Gorbachev.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** 1989",
            commonErrors: ["Confusing the invasion (1979) with the withdrawal (1989)."],
          },
        },
        {
          id: "his-u6-geq10",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Gorbachev accepted German reunification in 1990 on the condition that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A reunited Germany remain within NATO" },
              { id: "b", text: "Germany remain neutral forever" },
              { id: "c", text: "Poland regain territory" },
              { id: "d", text: "The USSR receive reparations" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "German reunification", statement: "Gorbachev accepted reunification within NATO in 1990, a major concession." },
            ],
            steps: [
              { reasoning: "Reunification proceeded with a united Germany inside NATO — a key Cold War concession.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Germany within NATO",
            commonErrors: ["Assuming Gorbachev blocked reunification."],
          },
        },
        {
          id: "his-u6-geq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Soviet invasion of Afghanistan; (b) Gorbachev came to power; (c) German reunification.",
          response: { type: "numeric", parts: [{ label: "Afghanistan invaded", answer: 1979 }, { label: "Gorbachev in power", answer: 1985 }, { label: "German reunification", answer: 1990 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Endgame chronology", statement: "1979 invasion; 1985 Gorbachev; 1990 reunification." },
            ],
            steps: [
              { reasoning: "The invasion occurred in December 1979.", working: "1979", marks: 1, markCode: "M" },
              { reasoning: "Gorbachev took power in 1985.", working: "1985", marks: 1, markCode: "M" },
              { reasoning: "Reunification was completed in 1990.", working: "1990", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1979; 1985; 1990",
            commonErrors: ["Confusing the invasion year with the withdrawal year."],
          },
        },
        {
          id: "his-u6-geq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the INF Treaty signed; (b) the Soviet withdrawal from Afghanistan completed; (c) the Cold War formally ended.",
          response: { type: "numeric", parts: [{ label: "INF Treaty", answer: 1987 }, { label: "Afghanistan withdrawal", answer: 1989 }, { label: "Cold War ended", answer: 1991 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Arms-control chronology", statement: "1987 INF; 1989 withdrawal; 1991 end of Cold War." },
            ],
            steps: [
              { reasoning: "The INF Treaty was signed in 1987.", working: "1987", marks: 1, markCode: "M" },
              { reasoning: "The withdrawal was completed in 1989.", working: "1989", marks: 1, markCode: "M" },
              { reasoning: "The Cold War ended with the USSR's dissolution in 1991.", working: "1991", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1987; 1989; 1991",
            commonErrors: ["Confusing the Cold War's end (1991) with the Wall's fall (1989)."],
          },
        },
        {
          id: "his-u6-geq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between the Afghanistan invasion (1979) and Gorbachev's rise (1985); (b) between Gorbachev's rise (1985) and the 1989 revolutions; (c) between the revolutions (1989) and German reunification (1990).",
          response: { type: "numeric", parts: [{ label: "1979 to 1985", answer: 6 }, { label: "1985 to 1989", answer: 4 }, { label: "1989 to 1990", answer: 1 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1985 - 1979 = 6$ years of Second Cold War.", working: "1985 - 1979 = 6", marks: 1, markCode: "M" },
              { reasoning: "$1989 - 1985 = 4$ years.", working: "1989 - 1985 = 4", marks: 1, markCode: "M" },
              { reasoning: "$1990 - 1989 = 1$ year.", working: "1990 - 1989 = 1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6; 4; 1 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u6-geq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the Soviet invasion of Afghanistan; Gorbachev came to power; the INF Treaty signed; German reunification.",
          response: { type: "numeric", parts: [{ label: "Afghanistan invaded", answer: 1 }, { label: "Gorbachev in power", answer: 2 }, { label: "INF Treaty", answer: 3 }, { label: "German reunification", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Endgame chronology order", statement: "1979 → 1985 → 1987 → 1990." },
            ],
            steps: [
              { reasoning: "The invasion (1979) is earliest.", working: "1979", marks: 1, markCode: "M" },
              { reasoning: "Gorbachev (1985) preceded the INF Treaty (1987).", working: "1985 < 1987", marks: 1, markCode: "M" },
              { reasoning: "Reunification (1990) is latest; all ordered correctly.", working: "1987 < 1990", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Invasion 1, Gorbachev 2, INF 3, reunification 4",
            commonErrors: ["Placing the INF Treaty before Gorbachev's rise."],
          },
        },
        {
          id: "his-u6-geq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between Gorbachev's rise (1985) and the Soviet collapse (1991); (b) between the INF Treaty (1987) and the collapse (1991); (c) between the Afghanistan invasion (1979) and the collapse (1991).",
          response: { type: "numeric", parts: [{ label: "1985 to 1991", answer: 6 }, { label: "1987 to 1991", answer: 4 }, { label: "1979 to 1991", answer: 12 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1991 - 1985 = 6$ years of Gorbachev's rule.", working: "1991 - 1985 = 6", marks: 1, markCode: "M" },
              { reasoning: "$1991 - 1987 = 4$ years.", working: "1991 - 1987 = 4", marks: 1, markCode: "M" },
              { reasoning: "$1991 - 1979 = 12$ years.", working: "1991 - 1979 = 12", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6; 4; 12 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u6-geq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Give the year for each event: (a) Gorbachev introduced glasnost and perestroika; (b) the INF Treaty signed; (c) the START arms-reduction treaty signed.",
          response: { type: "numeric", parts: [{ label: "Reforms begin", answer: 1985 }, { label: "INF Treaty", answer: 1987 }, { label: "START treaty", answer: 1991 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Arms-reduction chronology", statement: "1985 reforms; 1987 INF; 1991 START." },
            ],
            steps: [
              { reasoning: "Gorbachev's reforms began in 1985.", working: "1985", marks: 1, markCode: "M" },
              { reasoning: "The INF Treaty was signed in 1987.", working: "1987", marks: 1, markCode: "M" },
              { reasoning: "START was signed in 1991.", working: "1991", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1985; 1987; 1991",
            commonErrors: ["Confusing INF (1987) with START (1991)."],
          },
        },
      ],
    },
    {
      id: "his-u6-soviet-collapse",
      title: "The collapse of the Soviet Union",
      skill: "Describe the causes and course of the Soviet Union's dissolution in 1991.",
      lesson: {
        sections: [
          {
            heading: "Nationalisms and economic failure",
            body: "Perestroika's partial reforms worsened shortages rather than fixing them. **Glasnost** released suppressed nationalisms: the Baltic states (Estonia, Latvia, Lithuania) declared independence in 1990; the Caucasus and Central Asia stirred; Ukraine's independence referendum (December 1991) sealed the USSR's fate. The economy contracted and legitimacy collapsed.",
          },
          {
            heading: "August 1991 and the end",
            body: "Hardliners attempted a coup in August 1991, imprisoning Gorbachev — it failed within days as Boris Yeltsin rallied resistance from atop a tank. The coup discredited the old guard. On 25 December 1991 Gorbachev resigned; the USSR formally dissolved. Fifteen republics became independent states, most joining the loose **Commonwealth of Independent States (CIS)**.",
          },
          {
            heading: "Consequences",
            body: "The Cold War's bipolar order ended, leaving the US as sole superpower. Post-Soviet states faced economic collapse, ethnic conflicts (Chechnya, Nagorno-Karabakh) and transitions to democracy or authoritarianism (Russia under Yeltsin and later Putin). The nuclear arsenal was inherited by Russia, with loose control over former republics' weapons — a new security concern.",
          },
        ],
        keyFormulas: [
          { name: "Collapse sequence", statement: "Baltic independence 1990 → August coup fails → Ukraine votes Dec 1991 → USSR dissolved 25 Dec 1991" },
          { name: "Post-Soviet legacy", statement: "15 independent states + CIS + Russian nuclear arsenal + economic transition" },
        ],
        workedExample: {
          problem: "Why did the August 1991 coup fail and instead accelerate collapse?",
          solution: "It lacked popular or military support, was bungled, and Yeltsin's resistance made the hardliners look weak — the coup destroyed the USSR's remaining legitimacy and pushed republics toward independence.",
        },
      },
      questions: [
        {
          id: "his-u6-scq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The August 1991 coup attempt in the USSR was carried out by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Boris Yeltsin" },
              { id: "b", text: "Western governments" },
              { id: "c", text: "Communist hardliners opposed to reform" },
              { id: "d", text: "The Baltic independence movements" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "August coup", statement: "Hardline communists attempted to seize power in August 1991, imprisoning Gorbachev; it failed within days." },
            ],
            steps: [
              { reasoning: "The coup was launched by conservative hardliners, not reformers.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Communist hardliners",
            commonErrors: ["Confusing the coup plotters with Yeltsin, who led the resistance."],
          },
        },
        {
          id: "his-u6-scq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two factors that contributed to the collapse of the Soviet Union.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "USSR collapse factors", statement: "Economic failure, rising nationalisms, failed coup, Gorbachev's reforms." },
            ],
            steps: [
              { reasoning: "Economic stagnation and failed perestroika produced shortages and lost legitimacy.", marks: 1, markCode: "M" },
              { reasoning: "Glasnost released suppressed nationalisms — Baltic states and Ukraine declared independence.", marks: 1, markCode: "M" },
              { reasoning: "The failed August 1991 coup destroyed the old guard's authority, accelerating dissolution.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Economic collapse, national independence movements and the failed August coup.",
            commonErrors: ["Attributing collapse to a single event rather than interacting causes."],
          },
        },
        {
          id: "his-u6-scq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Analyse the role of nationalism in the Soviet Union's dissolution.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Nationalism and collapse", statement: "Suppressed national identities resurfaced under glasnost and drove republics to independence." },
            ],
            steps: [
              { reasoning: "The USSR was a multi-ethnic empire held together by force and ideology, not consent.", marks: 1, markCode: "M" },
              { reasoning: "Glasnost allowed national movements to organise — Baltic states first, then Caucasus and Ukraine.", marks: 1, markCode: "M" },
              { reasoning: "Analysis: Ukraine's independence referendum (Dec 1991) was decisive — without Ukraine the USSR could not survive.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: nationalism didn't just accompany collapse — it was a primary driver of it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Resurfaced nationalisms — especially Baltic and Ukrainian independence — were the decisive force dissolving the USSR.",
            commonErrors: ["Treating nationalism as a background factor rather than the main driver."],
          },
        },
        {
          id: "his-u6-scq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the consequences of the Soviet Union's collapse for Russia and the post-Soviet world.",
          parts: [
            { label: "a", prompt: "Describe what happened to the Soviet state and its territory.", marks: 3 },
            { label: "b", prompt: "Explain two challenges faced by post-Soviet states.", marks: 3 },
            { label: "c", prompt: "Evaluate the collapse's significance for the international order.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Post-Soviet consequences", statement: "15 new states, economic transition, ethnic conflicts, end of bipolar order." },
            ],
            steps: [
              { part: "a", reasoning: "USSR dissolved 25 December 1991; Gorbachev resigned.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "15 republics became independent; most joined the loose CIS.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Russia inherited the UN Security Council seat and most of the nuclear arsenal.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Economic transition from planned to market economies caused severe recession and poverty.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Ethnic and territorial conflicts erupted — Chechnya, Nagorno-Karabakh, Georgia.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Weak institutions and corruption produced unstable democracies or authoritarian backsliding.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "End of bipolar order left the US as sole superpower — 'unipolar moment'.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Nuclear weapons spread to new states, raising proliferation and security concerns.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) USSR dissolved, 15 states, CIS, Russia inherited arsenal. (b) Economic collapse, ethnic wars, weak institutions. (c) End of bipolarity, new proliferation risks.",
            commonErrors: ["Focusing only on Russia and ignoring the wider post-Soviet space."],
          },
        },
        {
          id: "his-u6-scq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Baltic states (Estonia, Latvia, Lithuania) declared independence in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1991" },
              { id: "b", text: "1989" },
              { id: "c", text: "1985" },
              { id: "d", text: "1990" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Baltic independence", statement: "The Baltic states declared independence in 1990, the first republics to break away." },
            ],
            steps: [
              { reasoning: "The Baltic declarations came in 1990.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** 1990",
            commonErrors: ["Confusing Baltic independence (1990) with Ukraine's referendum (1991)."],
          },
        },
        {
          id: "his-u6-scq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The August 1991 coup attempt in the USSR was led by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Baltic independence movements" },
              { id: "b", text: "Boris Yeltsin" },
              { id: "c", text: "Reformist generals loyal to Gorbachev" },
              { id: "d", text: "Communist hardliners who imprisoned Gorbachev" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "August coup", statement: "Hardliners staged a coup in August 1991, placing Gorbachev under house arrest." },
            ],
            steps: [
              { reasoning: "The coup was organised by conservative party and military hardliners.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Communist hardliners",
            commonErrors: ["Attributing the coup to reformers or republic leaders."],
          },
        },
        {
          id: "his-u6-scq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Boris Yeltsin's resistance to the August 1991 coup became famous because he:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fled to the United States" },
              { id: "b", text: "Ordered Soviet troops to attack Moscow" },
              { id: "c", text: "Negotiated secretly with the coup leaders" },
              { id: "d", text: "Rallied resistance from atop a tank outside the parliament building" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Yeltsin and the coup", statement: "Yeltsin's defiance on a tank symbolised popular resistance and doomed the coup." },
            ],
            steps: [
              { reasoning: "Yeltsin climbed onto a tank to rally opposition to the coup.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Rallied resistance atop a tank",
            commonErrors: ["Misidentifying Yeltsin's role as a coup supporter."],
          },
        },
        {
          id: "his-u6-scq8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Ukraine's independence referendum, which sealed the USSR's fate, took place in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "January 1992" },
              { id: "b", text: "March 1990" },
              { id: "c", text: "August 1991" },
              { id: "d", text: "December 1991" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Ukraine referendum", statement: "Ukrainians voted for independence in December 1991." },
            ],
            steps: [
              { reasoning: "The referendum occurred in December 1991, weeks before dissolution.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** December 1991",
            commonErrors: ["Confusing the referendum with the August coup."],
          },
        },
        {
          id: "his-u6-scq9",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Gorbachev resigned and the USSR formally dissolved on:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "October 1991" },
              { id: "b", text: "25 December 1991" },
              { id: "c", text: "1 January 1992" },
              { id: "d", text: "August 1991" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "USSR dissolution", statement: "Gorbachev resigned on 25 December 1991, ending the Soviet Union." },
            ],
            steps: [
              { reasoning: "The formal end came on Christmas Day 1991.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 25 December 1991",
            commonErrors: ["Confusing the August coup with the December dissolution."],
          },
        },
        {
          id: "his-u6-scq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "After the USSR dissolved, the newly independent republics mostly joined:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The European Union" },
              { id: "b", text: "The Warsaw Pact" },
              { id: "c", text: "NATO" },
              { id: "d", text: "The Commonwealth of Independent States (CIS)" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "CIS", statement: "Most of the 15 republics joined the loose Commonwealth of Independent States." },
            ],
            steps: [
              { reasoning: "The CIS was a loose association, not a successor superstate.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** The CIS",
            commonErrors: ["Assuming the republics formed a new unified state."],
          },
        },
        {
          id: "his-u6-scq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Baltic states declared independence; (b) the August coup attempt; (c) the USSR dissolved.",
          response: { type: "numeric", parts: [{ label: "Baltic independence", answer: 1990 }, { label: "August coup", answer: 1991 }, { label: "USSR dissolved", answer: 1991 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Collapse chronology", statement: "1990 Baltic; 1991 coup and dissolution." },
            ],
            steps: [
              { reasoning: "The Baltics declared independence in 1990.", working: "1990", marks: 1, markCode: "M" },
              { reasoning: "The coup occurred in August 1991.", working: "1991", marks: 1, markCode: "M" },
              { reasoning: "The USSR dissolved in December 1991.", working: "1991", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1990; 1991; 1991",
            commonErrors: ["Confusing the Baltic declarations (1990) with the 1991 collapse."],
          },
        },
        {
          id: "his-u6-scq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the value for each item: (a) the number of Soviet republics that became independent states; (b) the year Gorbachev resigned; (c) the year the Baltic states declared independence.",
          response: { type: "numeric", parts: [{ label: "Independent republics", answer: 15 }, { label: "Gorbachev resigned", answer: 1991 }, { label: "Baltic independence", answer: 1990 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Post-Soviet states", statement: "15 republics; Gorbachev resigned 1991; Baltics 1990." },
            ],
            steps: [
              { reasoning: "Fifteen republics emerged as independent states.", working: "15", marks: 1, markCode: "M" },
              { reasoning: "Gorbachev resigned in 1991.", working: "1991", marks: 1, markCode: "M" },
              { reasoning: "The Baltics declared independence in 1990.", working: "1990", marks: 1, markCode: "A" },
            ],
            finalAnswer: "15; 1991; 1990",
            commonErrors: ["Miscounting the number of successor states."],
          },
        },
        {
          id: "his-u6-scq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the Baltic states declare independence; the August coup attempt; Ukraine's independence referendum; the USSR dissolves.",
          response: { type: "numeric", parts: [{ label: "Baltic independence", answer: 1 }, { label: "August coup", answer: 2 }, { label: "Ukraine referendum", answer: 3 }, { label: "USSR dissolves", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Collapse order", statement: "1990 Baltics → August 1991 coup → December 1991 referendum and dissolution." },
            ],
            steps: [
              { reasoning: "Baltic independence (1990) is earliest.", working: "1990", marks: 1, markCode: "M" },
              { reasoning: "The August coup (1991) preceded the December referendum.", working: "Aug < Dec 1991", marks: 1, markCode: "M" },
              { reasoning: "The referendum (early Dec 1991) preceded dissolution (25 Dec); all ordered correctly.", working: "Dec 1 < Dec 25", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Baltics 1, coup 2, referendum 3, dissolution 4",
            commonErrors: ["Placing the referendum before the failed coup."],
          },
        },
        {
          id: "his-u6-scq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the value for each item: (a) the number of years the USSR existed (1922–1991); (b) the number of years between Gorbachev's rise (1985) and the dissolution (1991); (c) the number of years between the Cold War's start (1947) and the USSR's end (1991).",
          response: { type: "numeric", parts: [{ label: "USSR lifespan", answer: 69 }, { label: "Gorbachev to dissolution", answer: 6 }, { label: "Cold War span", answer: 44 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1991 - 1922 = 69$ years of Soviet statehood.", working: "1991 - 1922 = 69", marks: 1, markCode: "M" },
              { reasoning: "$1991 - 1985 = 6$ years.", working: "1991 - 1985 = 6", marks: 1, markCode: "M" },
              { reasoning: "$1991 - 1947 = 44$ years of Cold War.", working: "1991 - 1947 = 44", marks: 1, markCode: "A" },
            ],
            finalAnswer: "69; 6; 44",
            commonErrors: ["Miscomputing the long 1922–1991 interval."],
          },
        },
        {
          id: "his-u6-scq15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between the Baltic independence declarations (1990) and the USSR's dissolution (1991); (b) between Gorbachev's rise (1985) and the dissolution (1991); (c) between the start of the Cold War (1947) and the dissolution (1991).",
          response: { type: "numeric", parts: [{ label: "1990 to 1991", answer: 1 }, { label: "1985 to 1991", answer: 6 }, { label: "1947 to 1991", answer: 44 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1991 - 1990 = 1$ year.", working: "1991 - 1990 = 1", marks: 1, markCode: "M" },
              { reasoning: "$1991 - 1985 = 6$ years.", working: "1991 - 1985 = 6", marks: 1, markCode: "M" },
              { reasoning: "$1991 - 1947 = 44$ years.", working: "1991 - 1947 = 44", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1; 6; 44 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u6-scq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): glasnost releases suppressed nationalisms; the Baltic states declare independence; the August coup fails; the USSR dissolves.",
          response: { type: "numeric", parts: [{ label: "Glasnost releases nationalisms", answer: 1 }, { label: "Baltic independence", answer: 2 }, { label: "August coup", answer: 3 }, { label: "USSR dissolves", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Collapse sequence order", statement: "1985 reforms → 1990 Baltics → Aug 1991 coup → Dec 1991 dissolution." },
            ],
            steps: [
              { reasoning: "Gorbachev's reforms (1985) are earliest.", working: "1985", marks: 1, markCode: "M" },
              { reasoning: "Baltic independence (1990) preceded the 1991 coup.", working: "1990 < 1991", marks: 1, markCode: "M" },
              { reasoning: "The failed coup (Aug 1991) preceded dissolution (Dec 1991); all ordered correctly.", working: "Aug < Dec 1991", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Reforms 1, Baltics 2, coup 3, dissolution 4",
            commonErrors: ["Placing the Baltic declarations after the coup."],
          },
        },
      ],
    },
  ],
};
