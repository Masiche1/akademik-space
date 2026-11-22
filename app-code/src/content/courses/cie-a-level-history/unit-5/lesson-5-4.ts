import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "ciealehist-u5-lesson-5-4",
  code: "5-4",
  title: "Post-Cold War World and Human Rights Movements",
  goal: "I CAN analyse post-1991 global order, human rights movements and contemporary conflicts.",
  standards: ["Cambridge A Level History 9489", "Unit 5: 20th century depth"],
  vocabulary: [
    { term: "New World Order", definition: "Post-1991 US-led global order." },
    { term: "Rwandan genocide", definition: "1994 mass killing of Tutsis." },
    { term: "Human Rights Watch", definition: "NGO monitoring rights abuses." },
    { term: "R2P", definition: "Responsibility to Protect doctrine." },
    { term: "War on Terror", definition: "Post-9/11 US military campaign." },
    {
      term: "Failed state",
      definition: "State unable to provide basic governance.",
    },
  ],
  concepts: [
    {
      id: "ciealehist-u5l4-c1-postcw",
      title: "Post-Cold War order and conflicts",
      skill: "Analyse the post-1991 world order and its conflicts.",
      lesson: {
        sections: [
          {
            heading: "New World Order",
            body: "US unipolar moment after Soviet collapse — 'end of history' optimism. US promoted democracy, free markets, humanitarian intervention. But: Yugoslav wars (1990s), Rwanda genocide 1994 (international failure), Somalia state collapse, Gulf War 1991.",
          },
          {
            heading: "9/11 and War on Terror",
            body: "September 11 2001 attacks → US 'War on Terror': Afghanistan invasion 2001, Iraq invasion 2003 (WMD claims — false). Consequences: failed states, refugee crises, surveillance expansion, anti-Western sentiment, erosion of international law norms.",
          },
        ],
        keyFormulas: [
          { name: "1991", statement: "US unipolarity" },
          { name: "Rwanda 1994", statement: "Genocide" },
          { name: "9/11 2001", statement: "War on Terror" },
        ],
        workedExample: {
          problem:
            "Why did the 'New World Order' fail to prevent genocide in Rwanda?",
          solution:
            "UN peacekeepers withdrawn as violence escalated; US refused 'another Somalia'; no political will for intervention — R2P doctrine later created in response.",
        },
      },
      questions: [
        {
          id: "ciealehist-q-u5l4c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'New World Order' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "European order" },
              { id: "b", text: "Cold War order" },
              { id: "c", text: "Post-1991 US-led order" },
              { id: "d", text: "UN order" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "NWO", statement: "US unipolar." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** US-led",
            commonErrors: ["Cold War."],
          },
        },
        {
          id: "ciealehist-q-u5l4c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the Rwandan genocide?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Rwanda", statement: "1994." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Scale.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "1994 mass killing of ~800,000 Tutsis and moderate Hutus by Hutu extremists over 100 days — international community failed to intervene.",
            commonErrors: ["Civil war only."],
          },
        },
        {
          id: "ciealehist-q-u5l4c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why the international community failed to prevent the Rwandan genocide.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Rwanda failure",
                statement: "No intervention.",
              },
            ],
            steps: [
              { reasoning: "UN withdrawal.", marks: 1, markCode: "M" },
              { reasoning: "US refusal.", marks: 1, markCode: "M" },
              { reasoning: "Information failure.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "UN peacekeepers withdrawn as violence escalated; US refused 'another Somalia'; intelligence failure underestimated scale — no political will for intervention.",
            commonErrors: ["Intervened."],
          },
        },
        {
          id: "ciealehist-q-u5l4c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse the consequences of the 9/11 attacks and War on Terror.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "9/11 consequences",
                statement: "Long-term.",
              },
            ],
            steps: [
              { reasoning: "Immediate.", marks: 1, markCode: "M" },
              { reasoning: "Military.", marks: 1, markCode: "M" },
              { reasoning: "Societal.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Afghanistan/Iraq invasions, failed states, refugee crises, surveillance expansion, anti-Western sentiment, erosion of international law — 'forever wars'.",
            commonErrors: ["Short-term only."],
          },
        },
        {
          id: "ciealehist-q-u5l4c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the 'Responsibility to Protect' (R2P) doctrine.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "R2P",
                statement: "Intervention duty.",
              },
            ],
            steps: [
              { reasoning: "Doctrine.", marks: 1, markCode: "M" },
              { reasoning: "Applications.", marks: 1, markCode: "M" },
              { reasoning: "Criticisms.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Sovereignty conditional on protecting populations — created after Rwanda; applied inconsistently (Libya yes, Syria no); selective enforcement undermines legitimacy — noble but problematic.",
            commonErrors: ["Perfect solution."],
          },
        },
        {
          id: "ciealehist-q-u5l4c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the 'Iraq War' justification?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Iraq War", statement: "WMD claims." },
            ],
            steps: [
              { reasoning: "Justification.", marks: 1, markCode: "M" },
              { reasoning: "Outcome.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "US/UK claimed Iraq possessed WMDs — turned out false; invasion 2003 → sectarian conflict, ISIS rise, regional destabilisation — intelligence failure + political motives.",
            commonErrors: ["WMDs found."],
          },
        },
        {
          id: "ciealehist-q-u5l4c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Rwandan genocide occurred in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "2001" },
              { id: "b", text: "1991" },
              { id: "c", text: "1989" },
              { id: "d", text: "1994" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "fact", name: "Rwanda", statement: "1994." }],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** 1994",
            commonErrors: ["Wrong year."],
          },
        },
        {
          id: "ciealehist-q-u5l4c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two consequences of state collapse (failed states).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Failed states",
                statement: "Consequences.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. humanitarian crises (famine, disease) and security threats (terrorist safe havens, refugee flows, regional destabilisation) — e.g. Somalia, Afghanistan.",
            commonErrors: ["No consequences."],
          },
        },
        {
          id: "ciealehist-q-u5l4c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why did the US invade Iraq in 2003 despite no WMDs found?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Iraq motives",
                statement: "Multiple.",
              },
            ],
            steps: [
              { reasoning: "Stated reason.", marks: 1, markCode: "M" },
              { reasoning: "Other motives.", marks: 1, markCode: "M" },
              { reasoning: "Criticism.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Officially WMDs + terrorism links (false); really regime change, democracy promotion, oil interests — critics call it illegal war of choice; consequences disastrous.",
            commonErrors: ["WMDs real."],
          },
        },
        {
          id: "ciealehist-q-u5l4c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse whether humanitarian intervention is justified.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Humanitarian intervention",
                statement: "Debate.",
              },
            ],
            steps: [
              { reasoning: "For.", marks: 1, markCode: "M" },
              { reasoning: "Against.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Justified when mass atrocities occur (Rwanda lesson) but selective application (Libya vs Syria) and regime-change abuse (Iraq) undermine legitimacy — needs UN mandate + clear exit strategy.",
            commonErrors: ["Always/never."],
          },
        },
        {
          id: "ciealehist-q-u5l4c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'New World Order' after 1991 was characterised by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Soviet dominance" },
              { id: "b", text: "A UN world government" },
              { id: "c", text: "US unipolarity and promotion of democracy and free markets" },
              { id: "d", text: "A new Cold War" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "NWO", statement: "US unipolar." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(c)** US unipolar order",
            commonErrors: ["Soviet order."],
          },
        },
        {
          id: "ciealehist-q-u5l4c1-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What was the Gulf War of 1991?",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "fact", name: "Gulf War", statement: "1991." },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "US-led coalition expelled Iraq from Kuwait after Saddam Hussein's invasion — showcased American military supremacy and launched the 'New World Order' era.",
            commonErrors: ["Iraq invasion 2003."],
          },
        },
        {
          id: "ciealehist-q-u5l4c1-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the 'Somalia effect' — how state collapse in Somalia affected later intervention decisions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Somalia effect",
                statement: "Intervention caution.",
              },
            ],
            steps: [
              { reasoning: "US withdrew after Mogadishu casualties (1993).", marks: 1, markCode: "M" },
              { reasoning: "'Never again Somalia' made states wary of intervention.", marks: 1, markCode: "M" },
              { reasoning: "Same logic contributed to Rwanda non-intervention.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Somalia's chaotic collapse and US casualties made Western powers risk-averse — fear of 'another Somalia' paralysed response to Rwanda 1994.",
            commonErrors: ["Increased intervention."],
          },
        },
        {
          id: "ciealehist-q-u5l4c1-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse the consequences of the Iraq War (2003) for regional stability.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Iraq War",
                statement: "Regional fallout.",
              },
            ],
            steps: [
              { reasoning: "Sectarian civil conflict between Sunni and Shia.", marks: 1, markCode: "M" },
              { reasoning: "Power vacuum enabled the rise of ISIS.", marks: 1, markCode: "M" },
              { reasoning: "Intensified Iran-Saudi rivalry across the region.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: Iraq became a failed state and regional destabiliser.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Regime collapse unleashed sectarian war, ISIS and regional proxy rivalry — Iraq's instability spread across the Middle East.",
            commonErrors: ["Stable outcome."],
          },
        },
        {
          id: "ciealehist-q-u5l4c1-15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare the Gulf War (1991) and the Iraq War (2003).",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Gulf vs Iraq",
                statement: "Different wars.",
              },
            ],
            steps: [
              { reasoning: "Gulf 1991: UN-mandated liberation of Kuwait — clear casus belli.", marks: 1, markCode: "M" },
              { reasoning: "Iraq 2003: regime change justified by false WMD claims.", marks: 1, markCode: "M" },
              { reasoning: "Legitimacy: Gulf had broad coalition support; Iraq was controversial 'war of choice'.", marks: 1, markCode: "M" },
              { reasoning: "Outcome: Gulf achieved limited aims; Iraq caused long-term destabilisation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Gulf War was a legitimate, limited UN-backed operation; Iraq War was a contested regime-change invasion with disastrous consequences — superficially similar, fundamentally different.",
            commonErrors: ["Same war."],
          },
        },
        {
          id: "ciealehist-q-u5l4c1-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether the 'end of history' optimism of 1991 was justified.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "End of history",
                statement: "Fukuyama thesis.",
              },
            ],
            steps: [
              { reasoning: "For: liberal democracy and capitalism seemed triumphant after Soviet collapse.", marks: 1, markCode: "M" },
              { reasoning: "Against: Yugoslav wars, Rwanda genocide, 9/11 and Iraq showed conflict persisted.", marks: 1, markCode: "M" },
              { reasoning: "Evidence: 'New World Order' failed to prevent atrocities or stabilise the Middle East.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Partially: democracy spread but authoritarianism returned and new conflicts emerged — liberal triumph was premature; history continued.",
            commonErrors: ["Complete success/failure."],
          },
        },
      ],
    },
    {
      id: "ciealehist-u5l4-c2-rights",
      title: "Human rights movements and global governance",
      skill:
        "Analyse human rights movements and international governance developments.",
      lesson: {
        sections: [
          {
            heading: "Human rights movements",
            body: "Post-WWII: Universal Declaration of Human Rights 1948, Geneva Conventions, NGOs (Amnesty International 1961, Human Rights Watch). Movements: anti-apartheid (Mandela), women's rights, LGBTQ+, indigenous rights — transnational advocacy networks pressure states.",
          },
          {
            heading: "Global governance",
            body: "UN agencies (UNHCR, UNICEF, WHO), International Criminal Court 2002, climate agreements (Kyoto 1997, Paris 2015), WTO — global governance expands but enforcement weak; sovereignty vs international law tension.",
          },
        ],
        keyFormulas: [
          { name: "UDHR 1948", statement: "Universal rights" },
          { name: "ICC 2002", statement: "War crimes court" },
          { name: "Paris 2015", statement: "Climate agreement" },
        ],
        workedExample: {
          problem: "How did NGOs contribute to ending apartheid?",
          solution:
            "Transnational advocacy: boycotts, sports bans, cultural isolation + armed struggle inside South Africa + international pressure → Mandela released 1990, elections 1994.",
        },
      },
      questions: [
        {
          id: "ciealehist-q-u5l4c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Universal Declaration of Human Rights was adopted in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1975" },
              { id: "b", text: "1945" },
              { id: "c", text: "1993" },
              { id: "d", text: "1948" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [{ kind: "fact", name: "UDHR", statement: "1948." }],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(d)** 1948",
            commonErrors: ["Wrong year."],
          },
        },
        {
          id: "ciealehist-q-u5l4c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is the International Criminal Court?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "ICC",
                statement: "War crimes court.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Jurisdiction.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Permanent court (2002) prosecuting genocide, war crimes, crimes against humanity — first permanent international criminal tribunal; limited by non-membership (US, China, Russia).",
            commonErrors: ["UN court."],
          },
        },
        {
          id: "ciealehist-q-u5l4c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how transnational advocacy networks influenced human rights.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Advocacy networks",
                statement: "NGOs + campaigns.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "M" },
              { reasoning: "Effect.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "NGOs (Amnesty, HRW) document abuses, mobilise public opinion, pressure governments — e.g. anti-apartheid boycotts contributed to regime change; 'naming and shaming'.",
            commonErrors: ["No effect."],
          },
        },
        {
          id: "ciealehist-q-u5l4c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse the tension between sovereignty and international human rights law.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Sovereignty vs rights",
                statement: "Internal affairs.",
              },
            ],
            steps: [
              { reasoning: "Sovereignty principle.", marks: 1, markCode: "M" },
              { reasoning: "Human rights claim.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "States claim sovereignty over internal affairs but human rights law asserts universal standards — R2P challenges absolute sovereignty; enforcement inconsistent → tension unresolved.",
            commonErrors: ["No tension."],
          },
        },
        {
          id: "ciealehist-q-u5l4c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the effectiveness of international human rights institutions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Human rights institutions",
                statement: "Mixed record.",
              },
            ],
            steps: [
              { reasoning: "Achievements.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Set norms, document abuses, some prosecutions (ICC) — but weak enforcement, non-membership of major powers, political selectivity limit effectiveness; slow but cumulative impact.",
            commonErrors: ["Perfect/ineffective."],
          },
        },
        {
          id: "ciealehist-q-u5l4c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What was the Paris Agreement (2015)?",
          response: { type: "open" },
          markscheme: {
            principles: [{ kind: "fact", name: "Paris", statement: "2015." }],
            steps: [
              { reasoning: "Definition.", marks: 1, markCode: "M" },
              { reasoning: "Key feature.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Global climate accord — countries pledge nationally determined emissions reductions; first universal climate treaty; success depends on voluntary compliance.",
            commonErrors: ["Kyoto."],
          },
        },
        {
          id: "ciealehist-q-u5l4c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Amnesty International was founded to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Promote trade" },
              { id: "b", text: "Campaign against human rights abuses" },
              { id: "c", text: "Support governments" },
              { id: "d", text: "Fight poverty only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Amnesty", statement: "Rights NGO." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Rights campaigns",
            commonErrors: ["Wrong purpose."],
          },
        },
        {
          id: "ciealehist-q-u5l4c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two examples of human rights movements post-1991.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Rights movements",
                statement: "Examples.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. LGBTQ+ rights movements (marriage equality, anti-discrimination) and indigenous rights movements (land rights, cultural preservation).",
            commonErrors: ["One example."],
          },
        },
        {
          id: "ciealehist-q-u5l4c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why is the ICC limited in effectiveness?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "ICC limits",
                statement: "Membership + enforcement.",
              },
            ],
            steps: [
              { reasoning: "Membership issue.", marks: 1, markCode: "M" },
              { reasoning: "Enforcement issue.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "US, China, Russia don't recognise jurisdiction → can't prosecute their citizens; relies on state cooperation for arrests → weak enforcement despite mandate.",
            commonErrors: ["Universal court."],
          },
        },
        {
          id: "ciealehist-q-u5l4c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Analyse the role of 'norm entrepreneurs' in spreading human rights norms.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Norm entrepreneurs",
                statement: "Idea spreaders.",
              },
            ],
            steps: [
              { reasoning: "Concept.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "A" },
              { reasoning: "Weighs all.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Activists, NGOs, sympathetic states frame issues as moral imperatives → norms cascade internationally (e.g. anti-torture, women's rights); slow but powerful — 'norms matter'.",
            commonErrors: ["No role."],
          },
        },
        {
          id: "ciealehist-q-u5l4c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The Universal Declaration of Human Rights was adopted by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The United Nations in 1948" },
              { id: "b", text: "The International Criminal Court" },
              { id: "c", text: "The League of Nations" },
              { id: "d", text: "NATO" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "UDHR", statement: "UN 1948." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** United Nations 1948",
            commonErrors: ["League of Nations."],
          },
        },
        {
          id: "ciealehist-q-u5l4c2-12",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are the Geneva Conventions?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Geneva Conventions",
                statement: "War law.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "International humanitarian law treaties protecting wounded soldiers, civilians and prisoners of war — foundation for war crimes prosecution.",
            commonErrors: ["Trade treaties."],
          },
        },
        {
          id: "ciealehist-q-u5l4c2-13",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the role of Nelson Mandela and the ANC in ending apartheid.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Mandela/ANC",
                statement: "Anti-apartheid.",
              },
            ],
            steps: [
              { reasoning: "Mandela imprisoned 27 years — symbol of resistance.", marks: 1, markCode: "M" },
              { reasoning: "ANC combined armed struggle with mass mobilisation.", marks: 1, markCode: "M" },
              { reasoning: "International pressure + negotiations → release 1990, elections 1994.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Mandela's imprisonment made him a global icon; ANC resistance inside South Africa plus international sanctions and boycotts forced negotiations and democratic transition.",
            commonErrors: ["Foreign victory only."],
          },
        },
        {
          id: "ciealehist-q-u5l4c2-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse how climate agreements like the Paris Agreement (2015) illustrate the challenges of global governance.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate governance",
                statement: "Voluntary compliance.",
              },
            ],
            steps: [
              { reasoning: "Universal participation achieved — nearly all states signed.", marks: 1, markCode: "M" },
              { reasoning: "Targets are nationally determined — no binding enforcement mechanism.", marks: 1, markCode: "M" },
              { reasoning: "US withdrawal and re-entry showed political fragility.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion: global governance works for norms but weak on enforcement.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Paris showed broad consensus is possible but compliance depends on voluntary pledges — governance without enforcement power.",
            commonErrors: ["Fully effective."],
          },
        },
        {
          id: "ciealehist-q-u5l4c2-15",
          difficulty: "core",
          totalMarks: 4,
          stem: "Compare the UDHR (1948) and the ICC (2002) as pillars of international human rights.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "UDHR vs ICC",
                statement: "Norms vs enforcement.",
              },
            ],
            steps: [
              { reasoning: "UDHR: declares universal rights — moral and legal benchmark.", marks: 1, markCode: "M" },
              { reasoning: "ICC: enforces against genocide, war crimes, crimes against humanity.", marks: 1, markCode: "M" },
              { reasoning: "Different functions: declaration vs prosecution.", marks: 1, markCode: "M" },
              { reasoning: "Together: norms plus (limited) enforcement mechanism.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "UDHR established the rights; ICC provides a (limited) enforcement arm — complementary pillars, though ICC's reach is constrained by non-membership.",
            commonErrors: ["Same institution."],
          },
        },
        {
          id: "ciealehist-q-u5l4c2-16",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether NGOs have more influence on human rights than states.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "NGOs vs states",
                statement: "Influence debate.",
              },
            ],
            steps: [
              { reasoning: "NGOs: document abuses, mobilise public opinion, 'name and shame'.", marks: 1, markCode: "M" },
              { reasoning: "States: hold power, make law, can intervene militarily or impose sanctions.", marks: 1, markCode: "M" },
              { reasoning: "Evidence: anti-apartheid succeeded via NGOs + state pressure combined.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "NGOs shape the agenda and moral pressure but states hold enforcement power — influence is complementary, not competitive.",
            commonErrors: ["One actor only."],
          },
        },
      ],
    },
  ],
};
