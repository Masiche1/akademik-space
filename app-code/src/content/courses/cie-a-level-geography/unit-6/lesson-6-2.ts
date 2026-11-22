import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "ciealegeo-u6-lesson-6-2",
  code: "6-2",
  title: "Migration, Globalisation and Cultural Change",
  goal: "I CAN analyse migration patterns and impacts, and evaluate globalisation's effects on places.",
  standards: [
    "Cambridge A Level Geography 9696",
    "Unit 6: human geography in depth",
  ],
  vocabulary: [
    {
      term: "Push-pull factors",
      definition: "Forces driving emigration and immigration.",
    },
    { term: "Brain drain", definition: "Loss of skilled workers to abroad." },
    { term: "Remittances", definition: "Money sent home by migrants." },
    {
      term: "Globalisation",
      definition: "Increasing interconnectedness of world.",
    },
    {
      term: "Time-space compression",
      definition: "Reduced time/cost of interaction.",
    },
    {
      term: "Cultural homogenisation",
      definition: "Global culture replacing local.",
    },
  ],
  concepts: [
    {
      id: "ciealegeo-u6l2-c1-migration",
      title: "Migration patterns and impacts",
      skill: "Analyse migration flows and their economic and social impacts.",
      lesson: {
        sections: [
          {
            heading: "Migration patterns",
            body: "**Internal** (rural-urban, region-region) vs **international** (economic, forced, family). **Ravenstein's laws**: migration increases with distance, stepwise (rural→town→city), urban migrants dominate. Contemporary flows: South-North labour, South-South, refugee crises, student/skills migration.",
          },
          {
            heading: "Impacts of migration",
            body: "**Sending countries**: remittances (huge, stable), brain drain, dependency, skills return. **Receiving countries**: labour supply, cultural diversity, fiscal contributions — but strain on services, potential wage effects. **Migrants themselves**: opportunity vs exploitation, family separation.",
          },
        ],
        keyFormulas: [
          {
            name: "Remittances",
            statement: "Stable income for sending countries",
          },
          { name: "Brain drain", statement: "Skilled worker loss" },
          { name: "Ravenstein", statement: "Distance-decay migration" },
        ],
        workedExample: {
          problem:
            "Why do remittances matter more than aid for many countries?",
          solution:
            "Remittances are private transfers directly to households — stable, counter-cyclical (increase in crises), bypass government — often exceed FDI and aid.",
        },
      },
      questions: [
        {
          id: "ciealegeo-q-u6l2c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Brain drain' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Internal migration" },
              { id: "b", text: "Return migration" },
              { id: "c", text: "Emigration of unskilled workers" },
              { id: "d", text: "Loss of skilled workers to other countries" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Brain drain",
                statement: "Skilled loss.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Skilled loss",
            commonErrors: ["Unskilled."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What are 'remittances'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Remittances",
                statement: "Money sent home.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Money sent by migrants to families in home country — major source of foreign exchange and household income for many developing countries.",
            commonErrors: ["Aid confused."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain Ravenstein's 'step migration' pattern.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Step migration",
                statement: "Rural→town→city.",
              },
            ],
            steps: [
              { reasoning: "Pattern.", marks: 1, markCode: "M" },
              { reasoning: "Reason.", marks: 1, markCode: "M" },
              { reasoning: "Example.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Migrants move in stages: rural→small town→large city→capital — each step builds resources/network for next move; common in developing countries.",
            commonErrors: ["Direct only."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c1-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse the economic impacts of migration on sending and receiving countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Migration impacts",
                statement: "Both sides.",
              },
            ],
            steps: [
              { reasoning: "Sending effects.", marks: 1, markCode: "M" },
              { reasoning: "Receiving effects.", marks: 1, markCode: "M" },
              { reasoning: "Net assessment.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Sending: remittances↑ but brain drain, dependency risk. Receiving: labour supply↑, diversity — but service strain, possible wage pressure. Net positive if managed well.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c1-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate 'brain drain' vs 'brain gain' for developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Skills migration",
                statement: "Loss vs return.",
              },
            ],
            steps: [
              { reasoning: "Brain drain costs.", marks: 1, markCode: "M" },
              { reasoning: "Return benefits.", marks: 1, markCode: "M" },
              { reasoning: "Diaspora networks.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Short-term loss of professionals, but returning migrants bring skills, networks, investment ('brain gain'); diaspora can transfer knowledge — circular migration increasingly important.",
            commonErrors: ["Permanent loss."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c1-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'circular migration'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Circular migration",
                statement: "Repeat movement.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Benefit.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Migrants move repeatedly between home and host countries — maintains ties, transfers skills/knowledge, reduces brain drain; increasingly recognised pattern.",
            commonErrors: ["One-way only."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ravenstein's laws suggest migration:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is random" },
              { id: "b", text: "Decreases with distance" },
              { id: "c", text: "Increases with distance" },
              { id: "d", text: "Only rural" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "fact", name: "Distance-decay", statement: "Less far." },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Decreases",
            commonErrors: ["Increases."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c1-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two social impacts of migration on receiving countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Social impacts",
                statement: "Diversity, integration.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. cultural diversity/enrichment (food, arts) and integration challenges (language, discrimination, service demands).",
            commonErrors: ["Economic only."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c1-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might 'forced migration' differ from economic migration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Forced migration",
                statement: "No choice.",
              },
            ],
            steps: [
              { reasoning: "Difference.", marks: 1, markCode: "M" },
              { reasoning: "Causes.", marks: 1, markCode: "M" },
              { reasoning: "Consequences.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Forced (refugees, IDPs) lacks choice — driven by conflict, persecution, disaster; more vulnerable, less planning, different integration challenges vs voluntary economic migrants.",
            commonErrors: ["Same as economic."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c1-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate migration's net effect on global inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Migration & inequality",
                statement: "Redistribution.",
              },
            ],
            steps: [
              { reasoning: "Inequality reduction.", marks: 1, markCode: "M" },
              { reasoning: "Inequality risks.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Migration redistributes income (remittances to poor) reducing inequality, but 'selective' migration (skilled) can widen gaps; managed migration can be poverty-reducing.",
            commonErrors: ["One effect."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Remittances are best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Export earnings" },
              { id: "b", text: "Government foreign aid" },
              { id: "c", text: "Foreign direct investment" },
              { id: "d", text: "Money sent by migrants to their home country" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Remittances",
                statement: "Private transfers home.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Money sent home",
            commonErrors: ["Aid confused."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an 'IDP' (internally displaced person)?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "IDP",
                statement: "Fled within country.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Contrast refugee.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Person forced to flee within their own country due to conflict/disaster — unlike refugees, they haven't crossed an international border so lack refugee legal protections.",
            commonErrors: ["Refugee confused."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c1-13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'family reunion' migration?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Family migration",
                statement: "Joining relatives.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Context.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Migration to join family members already settled abroad — a major driver of continued migration flows, especially chain migration within established diaspora communities.",
            commonErrors: ["Economic only."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c1-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how remittances affect sending-country economies.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Remittance effects",
                statement: "Household income + macro effects.",
              },
            ],
            steps: [
              { reasoning: "Household level.", marks: 1, markCode: "M" },
              { reasoning: "National level.", marks: 1, markCode: "M" },
              { reasoning: "Risks/dependency.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Boost household income for food, education, health; provide stable foreign exchange exceeding aid/FDI in many countries; but can create dependency, inflation in receiving areas, and labour shortages.",
            commonErrors: ["Only positive."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c1-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate policies designed to reduce 'brain drain' from developing countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Brain drain policies",
                statement: "Retention vs circulation.",
              },
            ],
            steps: [
              { reasoning: "Retention policies.", marks: 1, markCode: "M" },
              { reasoning: "Diaspora engagement.", marks: 1, markCode: "M" },
              { reasoning: "Limitations.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Bonded service, better salaries, research funding retain some skilled workers; diaspora networks, return incentives, circular migration capture benefits without preventing mobility — emigration may be inevitable.",
            commonErrors: ["Stop all emigration."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c1-16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might 'return migration' benefit sending countries?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Return migration",
                statement: "Skills + capital return.",
              },
            ],
            steps: [
              { reasoning: "Skills.", marks: 1, markCode: "M" },
              { reasoning: "Capital/networks.", marks: 1, markCode: "M" },
              { reasoning: "Conditions.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Returnees bring skills, savings, international networks, new ideas ('brain gain'); benefits greatest when home country offers opportunities — otherwise returnees re-emigrate.",
            commonErrors: ["No benefit."],
          },
        },
      ],
    },
    {
      id: "ciealegeo-u6l2-c2-globalisation",
      title: "Globalisation and place",
      skill:
        "Explain globalisation processes and analyse their effects on different places.",
      lesson: {
        sections: [
          {
            heading: "Globalisation processes",
            body: "**Time-space compression**: transport/communication shrink distances. **Flows**: goods, capital, people, information, culture. **Actors**: TNCs, international organisations, governments. **Unevenness**: 'core' regions benefit, 'periphery' marginalised — globalisation is geographically uneven.",
          },
          {
            heading: "Effects on places",
            body: "**Positive**: investment, jobs, technology transfer, market access. **Negative**: job losses to cheaper locations, environmental damage, cultural erosion, dependency. **Place-specific**: cities thrive as nodes; rural areas decline; 'losers' from deindustrialisation.",
          },
        ],
        keyFormulas: [
          { name: "Time-space compression", statement: "Distances shrink" },
          { name: "Core-periphery", statement: "Uneven development" },
          { name: "Flows", statement: "Goods, capital, people, info" },
        ],
        workedExample: {
          problem:
            "Why do some places 'win' and others 'lose' from globalisation?",
          solution:
            "Places with skilled labour, infrastructure, institutions attract investment → 'win'; places lacking these lose jobs/industry → 'lose' — globalisation amplifies existing advantages.",
        },
      },
      questions: [
        {
          id: "ciealegeo-q-u6l2c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Time-space compression' means:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Time travel" },
              { id: "b", text: "Space expanding" },
              { id: "c", text: "Time slowing down" },
              { id: "d", text: "Reduced time/cost of interaction" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "TSC",
                statement: "Distances shrink.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Distances shrink",
            commonErrors: ["Opposite."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Name two 'flows' of globalisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Global flows",
                statement: "Goods, capital, people, info.",
              },
            ],
            steps: [
              { reasoning: "Two named.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "e.g. capital flows (FDI) and information flows (internet) — also goods, people, culture.",
            commonErrors: ["Only one."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'core-periphery' patterns in globalisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Core-periphery",
                statement: "Uneven development.",
              },
            ],
            steps: [
              { reasoning: "Core defined.", marks: 1, markCode: "M" },
              { reasoning: "Periphery defined.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Core regions (developed countries, global cities) control flows and capture benefits; periphery (developing, rural) supplies resources/labour at disadvantage — uneven integration.",
            commonErrors: ["Equal benefits."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c2-4",
          difficulty: "core",
          totalMarks: 4,
          stem: "Analyse how globalisation affects different types of places.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Place effects",
                statement: "Varies by place.",
              },
            ],
            steps: [
              { reasoning: "Cities.", marks: 1, markCode: "M" },
              { reasoning: "Rural areas.", marks: 1, markCode: "M" },
              { reasoning: "Developing countries.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Global cities thrive as command centres; rural areas lose jobs to cities/global competition; developing countries gain investment but risk dependency — uneven effects.",
            commonErrors: ["Uniform effect."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c2-5",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate 'glocalisation' as a response to globalisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Glocalisation",
                statement: "Local adaptation of global.",
              },
            ],
            steps: [
              { reasoning: "Concept.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "M" },
              { reasoning: "Benefits.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Global firms adapt products/practices to local cultures — hybridisation rather than homogenisation; preserves local identity while gaining global benefits — evidence of cultural resilience.",
            commonErrors: ["Homogenisation only."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c2-6",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are 'TNCs' and why do they matter for globalisation?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "TNC",
                statement: "Multinational firms.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Role.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Transnational corporations operate across borders — major drivers of investment, trade, technology flows; their location decisions shape regional development.",
            commonErrors: ["Small firms."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Globalisation is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only trade" },
              { id: "b", text: "Only technology" },
              { id: "c", text: "Isolation of countries" },
              { id: "d", text: "Increasing worldwide interconnectedness" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Globalisation",
                statement: "Interconnectedness.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Interconnectedness",
            commonErrors: ["Partial."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c2-8",
          difficulty: "core",
          totalMarks: 3,
          stem: "Give two ways globalisation can harm local cultures.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Cultural impacts",
                statement: "Homogenisation.",
              },
            ],
            steps: [
              { reasoning: "Two valid.", marks: 1, markCode: "M" },
              { reasoning: "Each explained.", marks: 2, markCode: "A" },
            ],
            finalAnswer:
              "e.g. global brands/media replace local traditions; consumer culture promotes individualism over community values — 'cultural imperialism'.",
            commonErrors: ["Only benefits."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c2-9",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why are 'global cities' important in the global economy?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Global cities",
                statement: "Command centres.",
              },
            ],
            steps: [
              { reasoning: "Functions.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "M" },
              { reasoning: "Significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Concentrate finance, headquarters, services — control global flows; London, NY, Tokyo dominate; their networks shape global economic geography.",
            commonErrors: ["Ordinary cities."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c2-10",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate whether globalisation reduces or increases global inequality.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Globalisation & inequality",
                statement: "Mixed evidence.",
              },
            ],
            steps: [
              { reasoning: "Convergence argument.", marks: 1, markCode: "M" },
              { reasoning: "Divergence argument.", marks: 1, markCode: "M" },
              { reasoning: "Evidence.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Some convergence (China, India growth) but within-country inequality rises; 'losers' in developed countries too — globalisation creates winners and losers, net effect contested.",
            commonErrors: ["One effect."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "'Cultural homogenisation' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Global culture replacing local traditions" },
              { id: "b", text: "Preservation of folk culture" },
              { id: "c", text: "Mixing of local and global cultures" },
              { id: "d", text: "Religious revival" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homogenisation",
                statement: "Global replaces local.",
              },
            ],
            steps: [{ reasoning: "Correct.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Global replaces local",
            commonErrors: ["Hybridisation confused."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'FDI' (foreign direct investment)?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "FDI",
                statement: "Cross-border investment.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Role.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Investment by a firm/individual in another country — factories, subsidiaries — major driver of globalisation flows; brings capital, jobs, technology but can create dependency.",
            commonErrors: ["Portfolio investment."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c2-13",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'deindustrialisation'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Deindustrialisation",
                statement: "Manufacturing decline.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Link to globalisation.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Decline of manufacturing employment/output in a region — driven by globalisation as production shifts to lower-cost locations; creates 'loser' regions with unemployment and decline.",
            commonErrors: ["Industrial growth."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c2-14",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain how globalisation creates 'winners' and 'losers' within countries.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Winners & losers",
                statement: "Skills, location, sector.",
              },
            ],
            steps: [
              { reasoning: "Winners.", marks: 1, markCode: "M" },
              { reasoning: "Losers.", marks: 1, markCode: "M" },
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Skilled workers in global cities/finance/services gain; unskilled manufacturing workers in deindustrialising regions lose — same country, different exposure to global flows → rising inequality.",
            commonErrors: ["Uniform effect."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c2-15",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Evaluate the role of international organisations in managing globalisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Global governance",
                statement: "Rules vs sovereignty.",
              },
            ],
            steps: [
              { reasoning: "Roles (WTO, IMF, WB).", marks: 1, markCode: "M" },
              { reasoning: "Benefits.", marks: 1, markCode: "M" },
              { reasoning: "Criticisms.", marks: 1, markCode: "A" },
              { reasoning: "Weighs both.", marks: 1, markCode: "R" },
              { reasoning: "Defensible conclusion.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Set trade/finance rules, provide development finance — stabilise flows but criticised for free-market bias, SAP conditions harming poor countries, democratic deficit — power asymmetries limit effectiveness.",
            commonErrors: ["No governance needed."],
          },
        },
        {
          id: "ciealegeo-q-u6l2c2-16",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'cultural hybridisation' as a response to globalisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hybridisation",
                statement: "Blend of global + local.",
              },
            ],
            steps: [
              { reasoning: "Mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Examples.", marks: 1, markCode: "M" },
              { reasoning: "Significance.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Local cultures adapt global influences — fusion cuisine, music genres, fashion — neither pure homogenisation nor isolation; evidence of cultural resilience and agency.",
            commonErrors: ["Homogenisation."],
          },
        },
      ],
    },
  ],
};
