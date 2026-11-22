import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "ciealehist-u5-lesson-5-3",
  code: "5-3",
  title: "Middle East Conflicts: Israel-Palestine and the Oil Crisis",
  goal: "I CAN analyse the origins and consequences of Middle East conflicts.",
  standards: ["Cambridge A Level History 9489", "Unit 5: 20th century depth"],
  vocabulary: [
    { term: "Zionism", definition: "Jewish national movement for homeland." },
    {
      term: "Balfour Declaration",
      definition: "1917 British support for Jewish homeland.",
    },
    {
      term: "Nakba",
      definition: "'Catastrophe' — Palestinian displacement 1948.",
    },
    {
      term: "Six-Day War",
      definition: "1967 Israel-Arab war, Israel victory.",
    },
    {
      term: "Camp David Accords",
      definition: "1978 Israel-Egypt peace framework.",
    },
    { term: "OPEC", definition: "Oil-producing countries' cartel." },
  ],
  concepts: [
    {
      id: "ciealehist-u5l3-c1-israel",
      title: "Israel-Palestine conflict origins",
      skill: "Analyse the origins and key wars of the Israel-Arab conflict.",
      lesson: {
        sections: [
          {
            heading: "Origins",
            body: "Zionism emerged 19th century; Balfour Declaration 1917 promised Jewish homeland in Palestine (Arab-majority). Holocaust → international sympathy → UN Partition Plan 1947 (Jewish + Arab states). Israel declared independence May 1948 → first Arab-Israeli war → Nakba (Palestinian displacement ~700k).",
          },
          {
            heading: "Major wars and peace attempts",
            body: "**1948-49**: Israel victory, territory beyond partition. **1967 Six-Day War**: Israel captured Sinai, West Bank, Golan, East Jerusalem. **1973 Yom Kippur**: surprise Arab attack, oil embargo. **1978 Camp David**: Egypt-Israel peace. **Oslo Accords 1993**: PLO recognition, Palestinian Authority — process stalled.",
          },
        ],
        keyFormulas: [
          { name: "1948", statement: "Israel founded + Nakba" },
          { name: "1967", statement: "Six-Day War" },
          { name: "1978", statement: "Camp David" },
        ],
        workedExample: {
          problem: "Why is the 1967 war considered a turning point?",
          solution:
            "Israel captured territories 3x its size — became occupying power, settlement issue began, Arab humiliation deepened, conflict became territorial not just existential.",
        },
      },
      questions: [
        {
          id: "ciealehist-q-u5l3c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Israel was founded in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1917" },
              { id: "b", text: "1945" },
              { id: "c", text: "1948" },
              { id: "d", text: "1967" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [{ kind: "fact", name: "Israel", statement: "1948." }],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** 1948",
            commonErrors: ["Wrong year."],
          },
        },
        {
          id: "ciealehist-q-u5l3c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the 'Nakba'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nakba", statement: "Catastrophe." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Scale.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Palestinian 'catastrophe' — ~700,000 Palestinians displaced/fled during 1948 war, became refugees; central to Palestinian identity and conflict.",
            commonErrors: ["Victory term."],
          },
        },
        {
          id: "ciealehist-q-u5l3c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the role of the Balfour Declaration in the conflict.",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "fact", name: "Balfour", statement: "1917." }],
            steps: [
              { reasoning: "Content.", marks: 1, markCode: "M" },
              { reasoning: "Contradiction.", marks: 1, markCode: "M" },
              { reasoning: "Legacy.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Britain promised Jewish homeland in Palestine while also promising Arab independence — contradictory commitments → foundation of conflicting national claims.",
            commonErrors: ["Consistent policy."],
          },
        },
        {
          id: "ciealehist-q-u5l3c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse why the 1967 Six-Day War was decisive.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "1967 war",
                statement: "Territorial transformation.",
              },
            ],
            steps: [
              { reasoning: "Military outcome.", marks: 1, markCode: "M" },
              { reasoning: "Territorial gains.", marks: 1, markCode: "M" },
              { reasoning: "Consequences.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Israel captured Sinai, West Bank, Golan, East Jerusalem in 6 days — transformed from besieged state to occupying power; settlements began; conflict shifted to land-for-peace framework.",
            commonErrors: ["Minor war."],
          },
        },
        {
          id: "ciealehist-q-u5l3c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the Oslo Accords' failure to resolve the conflict.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Oslo", statement: "1993." },
            ],
            steps: [
              { reasoning: "Accords content.", marks: 1, markCode: "M" },
              { reasoning: "Achievements.", marks: 1, markCode: "M" },
              { reasoning: "Failures.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Created Palestinian Authority + mutual recognition — real progress but 'final status' issues (Jerusalem, borders, refugees, settlements) unresolved; violence (intifada, assassinations) derailed process.",
            commonErrors: ["Complete success/failure."],
          },
        },
        {
          id: "ciealehist-q-u5l3c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the 'Camp David Accords'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Camp David", statement: "1978." },
            ],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "1978 US-brokered Israel-Egypt peace framework — led to 1979 treaty; first Arab-Israeli peace agreement; proved negotiations possible but limited scope.",
            commonErrors: ["All-Arab peace."],
          },
        },
        {
          id: "ciealehist-q-u5l3c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Six-Day War occurred in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1948" },
              { id: "b", text: "1956" },
              { id: "c", text: "1973" },
              { id: "d", text: "1967" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "1967", statement: "Six days." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** 1967",
            commonErrors: ["Wrong year."],
          },
        },
        {
          id: "ciealehist-q-u5l3c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two reasons the Israel-Arab conflict remains unresolved.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unresolved issues",
                statement: "Core disputes.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. Jerusalem status (holy to three religions) and Palestinian refugee right of return — plus borders, settlements, security — 'final status' issues intractable.",
            commonErrors: ["Resolved."],
          },
        },
        {
          id: "ciealehist-q-u5l3c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "How did the Holocaust affect the Israel-Palestine conflict?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Holocaust impact",
                statement: "International sympathy.",
              },
            ],
            steps: [
              { reasoning: "Sympathy effect.", marks: 1, markCode: "M" },
              { reasoning: "UN partition.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Holocaust generated international sympathy for Jewish statehood → UN Partition Plan 1947 → Israel founded 1948 — without Holocaust, partition/recognition unlikely.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "ciealehist-q-u5l3c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the role of external powers in the Israel-Arab conflict.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "External role",
                statement: "US + USSR.",
              },
            ],
            steps: [
              { reasoning: "US role.", marks: 1, markCode: "M" },
              { reasoning: "Soviet/Russian role.", marks: 1, markCode: "M" },
              { reasoning: "Arab states.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "US: Israel's patron, brokered peace (Camp David, Oslo). USSR/Russia: supported Arab states, weapons. Arab oil states: funding, diplomacy. External powers both enable and constrain resolution.",
            commonErrors: ["Internal only."],
          },
        },
        {
          id: "ciealehist-q-u5l3c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Balfour Declaration of 1917 promised:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Immediate Arab independence" },
              { id: "b", text: "A Palestinian state" },
              { id: "c", text: "Jewish control of Jerusalem" },
              { id: "d", text: "British support for a Jewish homeland in Palestine" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Balfour", statement: "1917 promise." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** Jewish homeland in Palestine",
            commonErrors: ["Palestinian state."],
          },
        },
        {
          id: "ciealehist-q-u5l3c1-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is meant by the 'two-state solution' in the Israel-Palestine conflict?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Two-state",
                statement: "Israel + Palestine.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Core issues.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Proposed framework for an independent Israel and an independent Palestinian state side by side — unresolved issues include borders, Jerusalem, refugees and settlements.",
            commonErrors: ["One state."],
          },
        },
        {
          id: "ciealehist-q-u5l3c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the 1973 Yom Kippur War caught Israel by surprise.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Yom Kippur",
                statement: "1973.",
              },
            ],
            steps: [
              { reasoning: "Attacked on Yom Kippur, Judaism's holiest day.", marks: 1, markCode: "M" },
              { reasoning: "Egypt and Syria coordinated a simultaneous attack.", marks: 1, markCode: "M" },
              { reasoning: "Initial Arab gains before Israel recovered.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Egypt and Syria launched a coordinated attack on the holiest Jewish day, exploiting Israeli overconfidence after 1967 — initial Arab successes forced a US airlift to Israel.",
            commonErrors: ["Unprovoked."],
          },
        },
        {
          id: "ciealehist-q-u5l3c1-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse the role of the PLO in the Israel-Palestine peace process.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "PLO role",
                statement: "Negotiator + spoiler.",
              },
            ],
            steps: [
              { reasoning: "Historically rejected Israel's right to exist — armed struggle.", marks: 1, markCode: "M" },
              { reasoning: "Shifted to diplomacy: recognised Israel in Oslo Accords 1993.", marks: 1, markCode: "M" },
              { reasoning: "Created Palestinian Authority but 'final status' issues stalled.", marks: 1, markCode: "M" },
              { reasoning: "Assessment: essential partner yet constrained by internal factions.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "PLO moved from armed struggle to recognition and negotiation — indispensable to peace but weakened by factionalism and stalled 'final status' issues.",
            commonErrors: ["Marginal role."],
          },
        },
        {
          id: "ciealehist-q-u5l3c1-15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare the 1948 and 1967 wars in terms of their impact on the conflict.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "1948 vs 1967",
                statement: "Different impacts.",
              },
            ],
            steps: [
              { reasoning: "1948: Israeli victory, Nakba displacement, armistice borders.", marks: 1, markCode: "M" },
              { reasoning: "1967: Israel captured Sinai, West Bank, Golan, East Jerusalem.", marks: 1, markCode: "M" },
              { reasoning: "1948 created the conflict; 1967 created the occupation issue.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: 1967 is the deeper turning point — settlements and land-for-peace began.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "1948 founded Israel amid Palestinian catastrophe; 1967 made it an occupying power — the war that defined today's territorial dispute.",
            commonErrors: ["Same impact."],
          },
        },
        {
          id: "ciealehist-q-u5l3c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether the Israel-Arab conflict is 'unresolvable'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Unresolvable?",
                statement: "Debated.",
              },
            ],
            steps: [
              { reasoning: "Case for: core issues (Jerusalem, refugees, settlements) appear irreconcilable.", marks: 1, markCode: "M" },
              { reasoning: "Case against: Camp David and Oslo prove agreements are possible.", marks: 1, markCode: "M" },
              { reasoning: "External factors: US patronage, regional rivalries, Iranian influence complicate.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Not unresolvable but extremely difficult — precedent exists for compromise; the obstacle is political will, not impossibility.",
            commonErrors: ["One-sided."],
          },
        },
      ],
    },
    {
      id: "ciealehist-u5l3-c2-oil",
      title: "Oil crisis and global economic impact",
      skill: "Analyse the 1973 oil crisis and its global consequences.",
      lesson: {
        sections: [
          {
            heading: "1973 oil crisis",
            body: "October 1973: Egypt/Syria attacked Israel (Yom Kippur War). OPEC (led by Saudi Arabia) embargoed oil to US/allies + cut production → oil price quadrupled ($3→$12/barrel). Western economies hit by inflation + recession ('stagflation').",
          },
          {
            heading: "Consequences",
            body: "**Economic**: stagflation decade, energy insecurity, shift to nuclear/renewables, energy efficiency. **Political**: OPEC power demonstrated, North-South tensions, developing countries hit hardest. **Strategic**: US-Saudi special relationship, Gulf states' wealth, petrodollar system.",
          },
        ],
        keyFormulas: [
          { name: "1973", statement: "Oil embargo" },
          { name: "Price", statement: "$3 → $12/barrel" },
          { name: "OPEC", statement: "Producer cartel" },
        ],
        workedExample: {
          problem: "Why did the oil crisis cause 'stagflation'?",
          solution:
            "Oil price spike → costs up (inflation) + demand destruction (recession) simultaneously — supply shock broke Keynesian demand-management model.",
        },
      },
      questions: [
        {
          id: "ciealehist-q-u5l3c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 1973 oil crisis was triggered by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "OPEC embargo after Yom Kippur War" },
              { id: "b", text: "Iranian revolution" },
              { id: "c", text: "Iraqi invasion" },
              { id: "d", text: "Suez Crisis" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Trigger",
                statement: "Yom Kippur + embargo.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Yom Kippur",
            commonErrors: ["Wrong trigger."],
          },
        },
        {
          id: "ciealehist-q-u5l3c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is OPEC?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "OPEC", statement: "Oil cartel." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Power.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Organization of Petroleum Exporting Countries — cartel controlling ~40% of oil production; demonstrated power to embargo and quadruple prices in 1973.",
            commonErrors: ["Consumer org."],
          },
        },
        {
          id: "ciealehist-q-u5l3c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the oil crisis caused 'stagflation'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stagflation",
                statement: "Inflation + recession.",
              },
            ],
            steps: [
              { reasoning: "Cost push.", marks: 1, markCode: "M" },
              { reasoning: "Demand destruction.", marks: 1, markCode: "M" },
              { reasoning: "Policy dilemma.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Oil price spike raised production costs (inflation) while reducing demand (recession) — supply shock broke demand-management model; governments couldn't fix both simultaneously.",
            commonErrors: ["Demand-pull."],
          },
        },
        {
          id: "ciealehist-q-u5l3c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse the global economic consequences of the 1973 oil crisis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Consequences",
                statement: "Stagflation + shift.",
              },
            ],
            steps: [
              { reasoning: "Immediate.", marks: 1, markCode: "M" },
              { reasoning: "Long-term.", marks: 1, markCode: "M" },
              { reasoning: "Developing countries.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Stagflation decade, energy insecurity → nuclear/renewables shift, energy efficiency gains; developing countries hit hardest (oil importers); OPEC power demonstrated.",
            commonErrors: ["Minor impact."],
          },
        },
        {
          id: "ciealehist-q-u5l3c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether the 1973 oil crisis was a turning point in global economics.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Turning point",
                statement: "Debated.",
              },
            ],
            steps: [
              { reasoning: "For argument.", marks: 1, markCode: "M" },
              { reasoning: "Against.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "End of post-war boom, start of stagflation era, energy transition accelerated, OPEC power established — but oil dependence continued; 'turning point' in economic thinking (supply shocks matter).",
            commonErrors: ["No impact."],
          },
        },
        {
          id: "ciealehist-q-u5l3c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was 'stagflation'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Stagflation",
                statement: "Inflation + stagnation.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Cause.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Simultaneous high inflation + economic stagnation — supply shock phenomenon challenging Keynesian economics; persisted through 1970s.",
            commonErrors: ["Only inflation."],
          },
        },
        {
          id: "ciealehist-q-u5l3c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 1973 oil embargo targeted:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "US and its allies" },
              { id: "b", text: "China" },
              { id: "c", text: "All countries" },
              { id: "d", text: "Soviet Union" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Target", statement: "US+allies." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** US+allies",
            commonErrors: ["All."],
          },
        },
        {
          id: "ciealehist-q-u5l3c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two long-term effects of the oil crisis on energy policy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Energy effects",
                statement: "Diversification.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. investment in nuclear power and renewable energy; improved energy efficiency standards — plus strategic petroleum reserves.",
            commonErrors: ["More oil only."],
          },
        },
        {
          id: "ciealehist-q-u5l3c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why were developing countries hardest hit by the oil crisis?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Developing impact",
                statement: "Import dependence.",
              },
            ],
            steps: [
              { reasoning: "Oil imports.", marks: 1, markCode: "M" },
              { reasoning: "Debt impact.", marks: 1, markCode: "M" },
              { reasoning: "Consequence.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Oil-importing developing countries faced massive import bills → debt crisis (Latin America 1980s); no ability to switch or absorb costs — deepened North-South divide.",
            commonErrors: ["Same impact."],
          },
        },
        {
          id: "ciealehist-q-u5l3c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the 'petrodollar' system's significance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Petrodollar",
                statement: "Oil-dollar link.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "US advantage.", marks: 1, markCode: "M" },
              { reasoning: "Gulf states.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Oil priced in dollars → US demand for currency → global dollar hegemony; Gulf states recycle petrodollars into US assets — entrenched US financial dominance.",
            commonErrors: ["Minor role."],
          },
        },
        {
          id: "ciealehist-q-u5l3c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "OPEC is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A cartel of oil-producing countries" },
              { id: "b", text: "An oil company" },
              { id: "c", text: "A consumer organisation" },
              { id: "d", text: "A United Nations agency" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "OPEC", statement: "Producer cartel." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Oil-producing cartel",
            commonErrors: ["Consumer body."],
          },
        },
        {
          id: "ciealehist-q-u5l3c2-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the 'petrodollar'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Petrodollar",
                statement: "Oil-dollar link.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "System where oil is priced in US dollars — oil revenues flow back to US financial markets, reinforcing dollar dominance and the US-Saudi relationship.",
            commonErrors: ["Euro pricing."],
          },
        },
        {
          id: "ciealehist-q-u5l3c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the 1973 embargo physically affected Western economies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Embargo effects",
                statement: "Supply shock.",
              },
            ],
            steps: [
              { reasoning: "Oil supply cut → shortages and queues at petrol stations.", marks: 1, markCode: "M" },
              { reasoning: "Price quadrupled ($3 to $12 per barrel).", marks: 1, markCode: "M" },
              { reasoning: "Rationing, speed limits and heating crises followed.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Embargoed oil meant shortages, quadrupled prices, petrol queues and rationing — a visible supply shock across Western daily life.",
            commonErrors: ["No physical effect."],
          },
        },
        {
          id: "ciealehist-q-u5l3c2-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse the 'North-South' dimension of the 1973 oil crisis.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "North-South",
                statement: "Importers vs exporters.",
              },
            ],
            steps: [
              { reasoning: "Oil importers (mostly North + developing) suffered cost shocks.", marks: 1, markCode: "M" },
              { reasoning: "Oil exporters (OPEC, Gulf states) gained massive wealth.", marks: 1, markCode: "M" },
              { reasoning: "Oil-importing developing countries faced debt crises (e.g. Latin America).", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: crisis deepened the North-South divide.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "The crisis transferred wealth from oil importers to exporters — developing importers were hit hardest, deepening global inequality.",
            commonErrors: ["Equal impact."],
          },
        },
        {
          id: "ciealehist-q-u5l3c2-15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare the 1973 oil crisis with the 1979 oil shock.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "1973 vs 1979",
                statement: "Two shocks.",
              },
            ],
            steps: [
              { reasoning: "1973: deliberate OPEC embargo over Yom Kippur War.", marks: 1, markCode: "M" },
              { reasoning: "1979: Iranian revolution cut production — supply disruption, not embargo.", marks: 1, markCode: "M" },
              { reasoning: "Similar mechanism: sudden supply loss → price spike → stagflation.", marks: 1, markCode: "M" },
              { reasoning: "Difference: 1979 was geopolitical accident, not political weapon.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Both caused supply shocks and stagflation; 1973 was a deliberate embargo, 1979 a revolution-driven production collapse — showing systemic oil vulnerability.",
            commonErrors: ["Identical causes."],
          },
        },
        {
          id: "ciealehist-q-u5l3c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether the oil crisis increased or decreased global economic interdependence.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Interdependence",
                statement: "Debated.",
              },
            ],
            steps: [
              { reasoning: "Increased: petrodollar system and OPEC power tied economies closer.", marks: 1, markCode: "M" },
              { reasoning: "Decreased: energy security pushed diversification, efficiency and national self-reliance.", marks: 1, markCode: "M" },
              { reasoning: "Evidence: oil dependence continued but strategic reserves and alternatives grew.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Both: interdependence deepened financially (petrodollars) while vulnerability prompted diversification — net effect was more complex, not simply more or less interdependent.",
            commonErrors: ["One direction only."],
          },
        },
      ],
    },
  ],
};
