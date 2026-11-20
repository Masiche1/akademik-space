import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "his-u6-lesson-6-2",
  code: "6-2",
  title: "Globalisation and Its Discontents",
  goal: "I CAN explain the economic and cultural dimensions of globalisation and evaluate the resistance and discontents it generated.",
  standards: ["Paper 1", "Paper 2", "Topic 6"],
  vocabulary: [
    { term: "Globalisation", definition: "The growing interconnectedness of economies, cultures and societies across national borders." },
    { term: "Neoliberalism", definition: "Economic doctrine favouring free trade, deregulation and reduced state intervention, promoted by institutions like the IMF and WTO." },
    { term: "Washington Consensus", definition: "Set of free-market policy prescriptions imposed on developing countries in the 1980s–90s." },
    { term: "Multinational corporation (MNC)", definition: "Company operating in multiple countries, often dominating global supply chains." },
    { term: "Anti-globalisation movement", definition: "Loose network protesting corporate globalisation — WTO summits, occupy movements." },
    { term: "Cultural globalisation", definition: "Spread of global media, brands and ideas alongside, and sometimes against, local cultures." },
  ],
  concepts: [
    {
      id: "his-u6-globalisation-rise",
      title: "The rise of economic and cultural globalisation",
      skill: "Explain the drivers of globalisation and describe its economic and cultural effects.",
      lesson: {
        sections: [
          {
            heading: "Drivers of globalisation",
            body: "Globalisation accelerated after the Cold War: the collapse of communism opened formerly closed economies; trade liberalisation (GATT/WTO), containerisation, the internet and cheap air travel shrank distance. **Neoliberal** policies — privatisation, deregulation, free trade — spread via the IMF and World Bank, especially through the **Washington Consensus** applied to developing countries in debt.",
          },
          {
            heading: "Economic effects",
            body: "Global trade and investment boomed; multinational corporations (MNCs) organised global supply chains. Some countries (China, India, South Korea) industrialised rapidly — the 'Asian Tigers' and China's post-1978 opening transformed the world economy. However, critics argued the gains were uneven: cheap-labour manufacturing exploited workers, and structural adjustment weakened public services in the developing world.",
          },
          {
            heading: "Cultural effects",
            body: "Global media (Hollywood, MTV, the internet) spread American and Western culture worldwide. Critics feared **cultural homogenisation** — erosion of local languages and traditions — while defenders saw hybridisation and access to global ideas. The internet created both global connectivity and new forms of community, laying groundwork for later social movements and, eventually, new political movements.",
          },
        ],
        keyFormulas: [
          { name: "Globalisation drivers", statement: "Free trade + containerisation + internet + post-Cold War opening + neoliberal policies" },
          { name: "Key institutions", statement: "IMF + World Bank + WTO/GATT" },
        ],
        workedExample: {
          problem: "Explain how containerisation transformed global trade.",
          solution: "Standardised shipping containers (1950s–60s) slashed loading costs and times, making intercontinental trade cheap enough to create truly global supply chains — a physical enabler of economic globalisation.",
        },
      },
      questions: [
        {
          id: "his-u6-glq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'Washington Consensus' refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A military alliance" },
              { id: "b", text: "Free-market policy prescriptions for developing economies" },
              { id: "c", text: "A trade agreement between the US and China" },
              { id: "d", text: "A cultural movement" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Washington Consensus", statement: "Free-market policy package (privatisation, deregulation, trade liberalisation) promoted for developing countries." },
            ],
            steps: [
              { reasoning: "The Consensus was a set of neoliberal economic prescriptions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Free-market policy prescriptions",
            commonErrors: ["Treating it as a treaty rather than a policy framework."],
          },
        },
        {
          id: "his-u6-glq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two ways in which the internet accelerated globalisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Internet and globalisation", statement: "Instant communication, e-commerce, information flows and global social networks." },
            ],
            steps: [
              { reasoning: "Instant global communication: email, video calls and collaboration across borders became routine.", marks: 1, markCode: "M" },
              { reasoning: "E-commerce and digital services enabled global markets for goods, finance and labour.", marks: 1, markCode: "M" },
              { reasoning: "Information and cultural flows — media, ideas, social movements — spread instantly worldwide.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Communication, e-commerce and instant cultural/information flows across borders.",
            commonErrors: ["Listing benefits without acknowledging uneven access (the digital divide)."],
          },
        },
        {
          id: "his-u6-glq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Analyse the debate over cultural globalisation — homogenisation versus hybridisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Cultural globalisation debate", statement: "Critics fear Western cultural dominance; defenders see exchange and hybrid cultures." },
            ],
            steps: [
              { reasoning: "Homogenisation view: Hollywood, English and global brands spread Western consumer culture, threatening local languages and traditions.", marks: 1, markCode: "M" },
              { reasoning: "Hybridisation view: local cultures adapt and remix global influences, producing new hybrid forms.", marks: 1, markCode: "M" },
              { reasoning: "Analysis: both processes occur — dominant cultures gain reach, but local actors reinterpret rather than passively receive.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: cultural globalisation is contested and uneven, not simply imposed or welcomed.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Global media spreads Western culture but local societies hybridise rather than simply submit — contested and uneven.",
            commonErrors: ["One-sided claims of either total domination or pure exchange."],
          },
        },
        {
          id: "his-u6-glq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 7,
          stem: "Evaluate the economic effects of globalisation on developing countries.",
          parts: [
            { label: "a", prompt: "Describe two ways globalisation affected developing economies.", marks: 2 },
            { label: "b", prompt: "Explain the 'Asian Tigers' and China's rise as examples.", marks: 3 },
            { label: "c", prompt: "Evaluate whether globalisation reduced or increased global inequality.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Globalisation and development", statement: "Opportunities for growth alongside exploitation and uneven gains." },
            ],
            steps: [
              { part: "a", reasoning: "Export-led growth: access to global markets enabled industrialisation in some states.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Dependency: structural adjustment and debt kept many economies tied to ex-colonial powers.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Asian Tigers (South Korea, Taiwan, Singapore, Hong Kong) industrialised via export manufacturing.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "China's 1978 reforms opened it to global trade; it became the 'world's factory'.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both lifted hundreds of millions from poverty — proof globalisation can develop economies.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Inequality between countries fell (China/India rose) but within-country inequality grew.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: globalisation reduced extreme poverty for some but deepened inequalities for many others.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Market access vs dependency. (b) Tigers/China: export-led growth lifted millions. (c) Mixed — reduced some inequalities, deepened others.",
            commonErrors: ["One-sided judgement ignoring both successes and failures."],
          },
        },
        {
          id: "his-u6-glq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Containerisation transformed global trade by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Making ships faster but more expensive" },
              { id: "b", text: "Slashing loading costs and times, enabling global supply chains" },
              { id: "c", text: "Ending the need for ports" },
              { id: "d", text: "Banning air freight" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Containerisation", statement: "Standardised shipping containers made intercontinental trade cheap enough for global supply chains." },
            ],
            steps: [
              { reasoning: "Containers standardised cargo handling, cutting costs and times dramatically.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Slashed costs, enabling global supply chains",
            commonErrors: ["Describing containerisation as a communications technology."],
          },
        },
        {
          id: "his-u6-glq6",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "The 'Washington Consensus' referred to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A military alliance between the US and Europe" },
              { id: "b", text: "Neoliberal policies — privatisation, deregulation, free trade — promoted to developing countries" },
              { id: "c", text: "An agreement on nuclear arms control" },
              { id: "d", text: "A trade bloc of Asian economies" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Washington Consensus", statement: "The IMF/World Bank-backed package of market reforms applied to indebted developing states." },
            ],
            steps: [
              { reasoning: "The Consensus prescribed privatisation, deregulation and liberalisation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Neoliberal market reforms",
            commonErrors: ["Confusing the Washington Consensus with a military or trade agreement."],
          },
        },
        {
          id: "his-u6-glq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "GATT, which promoted trade liberalisation, was later succeeded by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The IMF" },
              { id: "b", text: "The WTO" },
              { id: "c", text: "The UN Security Council" },
              { id: "d", text: "Comecon" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "GATT and WTO", statement: "GATT was superseded by the World Trade Organization in 1995." },
            ],
            steps: [
              { reasoning: "The WTO replaced GATT as the global trade body.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The WTO",
            commonErrors: ["Confusing trade bodies with financial institutions like the IMF."],
          },
        },
        {
          id: "his-u6-glq8",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'Asian Tigers' and China's post-1978 opening are examples of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Deindustrialisation in the developing world" },
              { id: "b", text: "Rapid industrialisation transforming the world economy" },
              { id: "c", text: "The failure of free trade" },
              { id: "d", text: "Continued colonial economic dependence" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Asian industrialisation", statement: "East Asian economies and China industrialised rapidly after opening to trade." },
            ],
            steps: [
              { reasoning: "Export-led industrialisation in Asia and China reshaped the global economy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Rapid industrialisation",
            commonErrors: ["Describing these economies as deindustrialising."],
          },
        },
        {
          id: "his-u6-glq9",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "Critics of cultural globalisation feared:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The spread of local languages worldwide" },
              { id: "b", text: "Cultural homogenisation — erosion of local languages and traditions" },
              { id: "c", text: "The banning of foreign films" },
              { id: "d", text: "The end of all national identities" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Cultural homogenisation", statement: "The fear that global media would erase local languages and traditions." },
            ],
            steps: [
              { reasoning: "Critics warned American-dominated media would flatten cultural diversity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Cultural homogenisation",
            commonErrors: ["Confusing homogenisation with hybridisation, which defenders emphasised."],
          },
        },
        {
          id: "his-u6-glq10",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "The IMF and World Bank spread globalisation to developing countries mainly through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Direct military intervention" },
              { id: "b", text: "Loans and structural adjustment programmes" },
              { id: "c", text: "Cultural exchange programmes" },
              { id: "d", text: "Trade embargoes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Structural adjustment", statement: "IMF/World Bank lending came with conditions requiring market liberalisation." },
            ],
            steps: [
              { reasoning: "Conditionality forced borrowing states to adopt free-market reforms.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Loans and structural adjustment",
            commonErrors: ["Describing the institutions as military or cultural bodies."],
          },
        },
        {
          id: "his-u6-glq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) GATT was founded; (b) China began opening its economy; (c) the WTO was established.",
          response: { type: "numeric", parts: [{ label: "GATT founded", answer: 1947 }, { label: "China opens", answer: 1978 }, { label: "WTO established", answer: 1995 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Globalisation institutions chronology", statement: "1947 GATT; 1978 China; 1995 WTO." },
            ],
            steps: [
              { reasoning: "GATT dates from 1947.", working: "1947", marks: 1, markCode: "M" },
              { reasoning: "China's opening began around 1978.", working: "1978", marks: 1, markCode: "M" },
              { reasoning: "The WTO was established in 1995.", working: "1995", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1947; 1978; 1995",
            commonErrors: ["Confusing GATT (1947) with the WTO (1995)."],
          },
        },
        {
          id: "his-u6-glq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) containerisation began with the first container ship; (b) China began opening its economy; (c) the WTO was established.",
          response: { type: "numeric", parts: [{ label: "First container ship", answer: 1956 }, { label: "China opens", answer: 1978 }, { label: "WTO established", answer: 1995 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Trade revolution chronology", statement: "1956 containerisation; 1978 China; 1995 WTO." },
            ],
            steps: [
              { reasoning: "The first container ship sailed in 1956.", working: "1956", marks: 1, markCode: "M" },
              { reasoning: "China opened around 1978.", working: "1978", marks: 1, markCode: "M" },
              { reasoning: "The WTO was created in 1995.", working: "1995", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1956; 1978; 1995",
            commonErrors: ["Confusing the container era with the internet era."],
          },
        },
        {
          id: "his-u6-glq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between the first container ship (1956) and China's opening (1978); (b) between China's opening (1978) and the WTO (1995); (c) between GATT's founding (1947) and containerisation (1956).",
          response: { type: "numeric", parts: [{ label: "1956 to 1978", answer: 22 }, { label: "1978 to 1995", answer: 17 }, { label: "1947 to 1956", answer: 9 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1978 - 1956 = 22$ years.", working: "1978 - 1956 = 22", marks: 1, markCode: "M" },
              { reasoning: "$1995 - 1978 = 17$ years.", working: "1995 - 1978 = 17", marks: 1, markCode: "M" },
              { reasoning: "$1956 - 1947 = 9$ years.", working: "1956 - 1947 = 9", marks: 1, markCode: "A" },
            ],
            finalAnswer: "22; 17; 9 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u6-glq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): GATT founded; containerisation began; China opened its economy; the WTO established.",
          response: { type: "numeric", parts: [{ label: "GATT founded", answer: 1 }, { label: "Containerisation begins", answer: 2 }, { label: "China opens", answer: 3 }, { label: "WTO established", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Globalisation chronology", statement: "1947 → 1956 → 1978 → 1995." },
            ],
            steps: [
              { reasoning: "GATT (1947) is earliest.", working: "1947", marks: 1, markCode: "M" },
              { reasoning: "Containerisation (1956) preceded China's opening (1978).", working: "1956 < 1978", marks: 1, markCode: "M" },
              { reasoning: "The WTO (1995) is latest; all ordered correctly.", working: "1978 < 1995", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "GATT 1, containers 2, China 3, WTO 4",
            commonErrors: ["Placing China's opening before containerisation."],
          },
        },
        {
          id: "his-u6-glq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "Calculate the number of years: (a) between GATT's founding (1947) and China's opening (1978); (b) between containerisation (1956) and the WTO (1995); (c) between China's opening (1978) and the end of the Cold War (1991).",
          response: { type: "numeric", parts: [{ label: "1947 to 1978", answer: 31 }, { label: "1956 to 1995", answer: 39 }, { label: "1978 to 1991", answer: 13 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1978 - 1947 = 31$ years.", working: "1978 - 1947 = 31", marks: 1, markCode: "M" },
              { reasoning: "$1995 - 1956 = 39$ years.", working: "1995 - 1956 = 39", marks: 1, markCode: "M" },
              { reasoning: "$1991 - 1978 = 13$ years.", working: "1991 - 1978 = 13", marks: 1, markCode: "A" },
            ],
            finalAnswer: "31; 39; 13 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u6-glq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): GATT founded; China's economy opened; the Cold War ended (USSR dissolved); the WTO established.",
          response: { type: "numeric", parts: [{ label: "GATT founded", answer: 1 }, { label: "China opens", answer: 2 }, { label: "Cold War ends", answer: 3 }, { label: "WTO established", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Globalisation chronology", statement: "1947 → 1978 → 1991 → 1995." },
            ],
            steps: [
              { reasoning: "GATT (1947) is earliest.", working: "1947", marks: 1, markCode: "M" },
              { reasoning: "China's opening (1978) preceded the Cold War's end (1991).", working: "1978 < 1991", marks: 1, markCode: "M" },
              { reasoning: "The WTO (1995) is latest; all ordered correctly.", working: "1991 < 1995", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "GATT 1, China 2, Cold War ends 3, WTO 4",
            commonErrors: ["Placing the WTO before the Cold War's end."],
          },
        },
      ],
    },
    {
      id: "his-u6-discontents-resistance",
      title: "Discontents and resistance to globalisation",
      skill: "Explain the economic, social and political discontents of globalisation and analyse movements of resistance.",
      lesson: {
        sections: [
          {
            heading: "Economic and social discontents",
            body: "Critics argued globalisation produced **job losses** in developed countries as manufacturing moved to low-wage economies, widening inequality. In developing countries, sweatshop labour, environmental degradation and 'race to the bottom' deregulation were charged to MNCs. Financial crises (e.g. 1997 Asian crisis, 2008 global crisis) showed the risks of interconnected markets.",
          },
          {
            heading: "Anti-globalisation and alter-globalisation movements",
            body: "Protests erupted at WTO ministerial meetings — Seattle (1999), Genoa (2001) — where demonstrators clashed with police. Movements ranged from **anti-globalisation** (rejecting the system) to **alter-globalisation** (seeking fairer globalisation, e.g. Via Campesina, debt-relief campaigns). The 2008 crisis and Occupy Wall Street (2011) extended the critique to financial capitalism.",
          },
          {
            heading: "Political backlash and nationalism",
            body: "Globalisation's discontents fed political nationalism and populism: voters in industrialised countries turned to parties promising to protect jobs and borders (Brexit 2016, Trump 2016, European populist parties). Critics linked globalisation to lost sovereignty and cultural change; defenders argued openness remained economically necessary. The debate reshaped politics on both left and right.",
          },
        ],
        keyFormulas: [
          { name: "Discontents", statement: "Job losses + inequality + sweatshops + financial crises" },
          { name: "Resistance landmarks", statement: "Seattle 1999 + Genoa 2001 + Occupy 2011 + Brexit/Trump 2016" },
        ],
        workedExample: {
          problem: "Why did the Seattle WTO protests of 1999 become a turning point?",
          solution: "They brought together labour, environmental, student and developing-world groups against corporate globalisation, showing the breadth of opposition and forcing global institutions to address legitimacy concerns.",
        },
      },
      questions: [
        {
          id: "his-u6-drq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The 'anti-globalisation' movement protested primarily against:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "International tourism" },
              { id: "b", text: "Corporate-led free-trade globalisation" },
              { id: "c", text: "The internet" },
              { id: "d", text: "Cultural exchange" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Anti-globalisation movement", statement: "Loose network protesting corporate free-trade globalisation — WTO summits, sweatshops, inequality." },
            ],
            steps: [
              { reasoning: "Anti-globalisation targeted corporate-led free trade and its consequences.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Corporate-led free-trade globalisation",
            commonErrors: ["Assuming anti-globalisation opposed all international contact rather than a specific economic model."],
          },
        },
        {
          id: "his-u6-drq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two discontents generated by globalisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Globalisation discontents", statement: "Job losses, inequality, sweatshops, financial crises, cultural anxiety." },
            ],
            steps: [
              { reasoning: "Deindustrialisation: manufacturing jobs moved to low-wage countries, hollowing out industrial regions.", marks: 1, markCode: "M" },
              { reasoning: "Inequality and exploitation: sweatshop labour and widening gaps between winners and losers.", marks: 1, markCode: "M" },
              { reasoning: "Instability: financial crises (1997, 2008) showed interconnected markets' systemic risk.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Job losses/deindustrialisation, inequality and exploitation, and financial instability.",
            commonErrors: ["Listing only economic harms while ignoring social and political discontents."],
          },
        },
        {
          id: "his-u6-drq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Analyse the relationship between globalisation and the rise of populism.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Globalisation and populism", statement: "Economic and cultural anxieties from globalisation fuelled nationalist-populist backlash." },
            ],
            steps: [
              { reasoning: "Deindustrialisation and wage stagnation created a 'left-behind' electorate in industrialised countries.", marks: 1, markCode: "M" },
              { reasoning: "Immigration and cultural change associated with globalisation fed nationalist sentiment.", marks: 1, markCode: "M" },
              { reasoning: "Analysis: populist leaders (Trump, Brexit campaigners, European parties) promised to restore sovereignty and protect jobs.", marks: 1, markCode: "R" },
              { reasoning: "Conclusion: globalisation's discontents became a major driver of political realignment in the 2010s.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Globalisation's losers and cultural anxieties powered the populist-nationalist backlash of the 2010s.",
            commonErrors: ["Treating populism as unrelated to economic globalisation."],
          },
        },
        {
          id: "his-u6-drq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate the impact of anti-globalisation movements.",
          parts: [
            { label: "a", prompt: "Describe the main forms and targets of anti-globalisation protest.", marks: 3 },
            { label: "b", prompt: "Explain what the movements achieved.", marks: 3 },
            { label: "c", prompt: "Evaluate whether globalisation was genuinely challenged or merely modified.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Anti-globalisation assessment", statement: "Broad coalition raised awareness and forced concessions, but did not reverse globalisation." },
            ],
            steps: [
              { part: "a", reasoning: "WTO summit protests (Seattle 1999, Genoa 2001) and demonstrations against MNCs and sweatshops.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Coalition of labour, environmentalists, students and developing-world groups.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Targets: free-trade agreements, corporate power, IMF/World Bank policies.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Put globalisation's critics on the agenda; forced some labour and environmental concessions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Shaped later movements — Occupy, climate justice, fair-trade campaigns.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Highlighted legitimacy deficit of institutions like the WTO.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Global trade and investment continued to grow despite protests.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Judgement: challenged the model's legitimacy and edge but did not stop globalisation itself.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) WTO protests, coalition against corporate globalisation. (b) Agenda-setting, some concessions. (c) Modified but did not reverse globalisation.",
            commonErrors: ["Overstating protest impact or dismissing it entirely."],
          },
        },
        {
          id: "his-u6-drq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Seattle WTO protests of 1999 became famous because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Forced the WTO to disband" },
              { id: "b", text: "Brought together labour, environmental, student and developing-world groups against corporate globalisation" },
              { id: "c", text: "Were suppressed without any publicity" },
              { id: "d", text: "Celebrated free trade" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Seattle 1999", statement: "The protests united diverse movements and forced global institutions to address legitimacy concerns." },
            ],
            steps: [
              { reasoning: "Seattle's coalition showed the breadth of anti-globalisation sentiment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** United diverse anti-globalisation groups",
            commonErrors: ["Describing Seattle as a pro-free-trade rally."],
          },
        },
        {
          id: "his-u6-drq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "The Genoa WTO protests of 2001 were marked by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Peaceful celebrations only" },
              { id: "b", text: "Clashes between demonstrators and police, including a fatal shooting" },
              { id: "c", text: "The signing of a new trade treaty" },
              { id: "d", text: "A boycott of all European goods" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Genoa 2001", statement: "Protests at the G8/WTO summit turned violent, with demonstrators killed by police." },
            ],
            steps: [
              { reasoning: "Genoa saw serious violence between protesters and security forces.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Violent clashes with police",
            commonErrors: ["Assuming all anti-globalisation protests were peaceful."],
          },
        },
        {
          id: "his-u6-drq7",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Occupy Wall Street, which extended the critique to financial capitalism, began in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "1999" },
              { id: "b", text: "2001" },
              { id: "c", text: "2008" },
              { id: "d", text: "2011" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Occupy Wall Street", statement: "The occupy movement began in 2011 in New York's financial district." },
            ],
            steps: [
              { reasoning: "Occupy Wall Street started in September 2011.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (d) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** 2011",
            commonErrors: ["Confusing Occupy (2011) with the 2008 financial crisis."],
          },
        },
        {
          id: "his-u6-drq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The Brexit referendum and Trump's election in 2016 were interpreted by many as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Evidence that globalisation had been fully embraced" },
              { id: "b", text: "Political backlash against globalisation, immigration and lost sovereignty" },
              { id: "c", text: "Random events unrelated to economics" },
              { id: "d", text: "Proof that populism had ended" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Populist backlash", statement: "Voters turned to parties promising to protect jobs and borders — Brexit 2016, Trump 2016." },
            ],
            steps: [
              { reasoning: "Both events reflected discontent with globalisation's economic and cultural effects.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Backlash against globalisation",
            commonErrors: ["Treating the events as unrelated to economic discontent."],
          },
        },
        {
          id: "his-u6-drq9",
          difficulty: "core",
          paper: "2",
          totalMarks: 2,
          stem: "'Alter-globalisation' differs from 'anti-globalisation' because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Rejects the global system entirely" },
              { id: "b", text: "Seeks a fairer version of globalisation rather than its abolition" },
              { id: "c", text: "Supports only national economies" },
              { id: "d", text: "Opposes all international trade" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alter-globalisation", statement: "Movements seeking to reform globalisation — e.g. Via Campesina, debt relief — rather than reject it." },
            ],
            steps: [
              { reasoning: "Alter-globalisers wanted fairer rules, not a return to autarky.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Fairer globalisation",
            commonErrors: ["Confusing alter-globalisation with anti-globalisation."],
          },
        },
        {
          id: "his-u6-drq10",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The 1997 Asian financial crisis and the 2008 global crisis demonstrated:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "That global markets were risk-free" },
              { id: "b", text: "The risks of interconnected financial markets" },
              { id: "c", text: "That developing countries were immune" },
              { id: "d", text: "The success of deregulation" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Financial crises", statement: "The 1997 and 2008 crises showed how shocks spread through integrated markets." },
            ],
            steps: [
              { reasoning: "Interconnected markets transmitted crises across borders.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Risks of interconnected markets",
            commonErrors: ["Claiming the crises proved globalisation's safety."],
          },
        },
        {
          id: "his-u6-drq11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Asian financial crisis; (b) the Seattle WTO protests; (c) the Genoa protests.",
          response: { type: "numeric", parts: [{ label: "Asian crisis", answer: 1997 }, { label: "Seattle protests", answer: 1999 }, { label: "Genoa protests", answer: 2001 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Resistance chronology", statement: "1997 crisis; 1999 Seattle; 2001 Genoa." },
            ],
            steps: [
              { reasoning: "The Asian crisis struck in 1997.", working: "1997", marks: 1, markCode: "M" },
              { reasoning: "Seattle occurred in 1999.", working: "1999", marks: 1, markCode: "M" },
              { reasoning: "Genoa occurred in 2001.", working: "2001", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1997; 1999; 2001",
            commonErrors: ["Confusing Seattle (1999) with Genoa (2001)."],
          },
        },
        {
          id: "his-u6-drq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the global financial crisis; (b) Occupy Wall Street began; (c) the Brexit referendum and Trump's election.",
          response: { type: "numeric", parts: [{ label: "Global crisis", answer: 2008 }, { label: "Occupy begins", answer: 2011 }, { label: "Brexit/Trump", answer: 2016 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Backlash chronology", statement: "2008 crisis; 2011 Occupy; 2016 Brexit/Trump." },
            ],
            steps: [
              { reasoning: "The global financial crisis peaked in 2008.", working: "2008", marks: 1, markCode: "M" },
              { reasoning: "Occupy began in 2011.", working: "2011", marks: 1, markCode: "M" },
              { reasoning: "Brexit and Trump's election occurred in 2016.", working: "2016", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2008; 2011; 2016",
            commonErrors: ["Confusing Occupy (2011) with the crisis (2008)."],
          },
        },
        {
          id: "his-u6-drq13",
          difficulty: "core",
          paper: "2",
          totalMarks: 4,
          stem: "Calculate the number of years between: (a) the Asian crisis (1997) and Seattle (1999); (b) Seattle (1999) and Genoa (2001); (c) the global crisis (2008) and Occupy (2011); (d) Occupy (2011) and Brexit/Trump (2016).",
          response: { type: "numeric", parts: [{ label: "1997 to 1999", answer: 2 }, { label: "1999 to 2001", answer: 2 }, { label: "2008 to 2011", answer: 3 }, { label: "2011 to 2016", answer: 5 }] },
          markscheme: {
            principles: [
              { kind: "method", name: "Interval calculation", statement: "Subtract the earlier year from the later year." },
            ],
            steps: [
              { reasoning: "$1999 - 1997 = 2$ years.", working: "1999 - 1997 = 2", marks: 1, markCode: "M" },
              { reasoning: "$2001 - 1999 = 2$ years.", working: "2001 - 1999 = 2", marks: 1, markCode: "M" },
              { reasoning: "$2011 - 2008 = 3$ years.", working: "2011 - 2008 = 3", marks: 1, markCode: "M" },
              { reasoning: "$2016 - 2011 = 5$ years.", working: "2016 - 2011 = 5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2; 2; 3; 5 years",
            commonErrors: ["Subtracting in the wrong order."],
          },
        },
        {
          id: "his-u6-drq14",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the Asian financial crisis; the Seattle WTO protests; the Genoa protests; Occupy Wall Street.",
          response: { type: "numeric", parts: [{ label: "Asian crisis", answer: 1 }, { label: "Seattle protests", answer: 2 }, { label: "Genoa protests", answer: 3 }, { label: "Occupy Wall Street", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Resistance chronology", statement: "1997 → 1999 → 2001 → 2011." },
            ],
            steps: [
              { reasoning: "The Asian crisis (1997) is earliest.", working: "1997", marks: 1, markCode: "M" },
              { reasoning: "Seattle (1999) preceded Genoa (2001).", working: "1999 < 2001", marks: 1, markCode: "M" },
              { reasoning: "Occupy (2011) is latest; all ordered correctly.", working: "2001 < 2011", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Crisis 1, Seattle 2, Genoa 3, Occupy 4",
            commonErrors: ["Placing Occupy before the WTO protests."],
          },
        },
        {
          id: "his-u6-drq15",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Give the year for each event: (a) the Seattle WTO protests; (b) the Genoa protests; (c) Occupy Wall Street began.",
          response: { type: "numeric", parts: [{ label: "Seattle", answer: 1999 }, { label: "Genoa", answer: 2001 }, { label: "Occupy", answer: 2011 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Protest chronology", statement: "1999 Seattle; 2001 Genoa; 2011 Occupy." },
            ],
            steps: [
              { reasoning: "Seattle occurred in 1999.", working: "1999", marks: 1, markCode: "M" },
              { reasoning: "Genoa occurred in 2001.", working: "2001", marks: 1, markCode: "M" },
              { reasoning: "Occupy began in 2011.", working: "2011", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1999; 2001; 2011",
            commonErrors: ["Confusing the protest years."],
          },
        },
        {
          id: "his-u6-drq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Rank these events from earliest to latest (1 = earliest): the Asian financial crisis; the Seattle WTO protests; the global financial crisis; Brexit and Trump's election.",
          response: { type: "numeric", parts: [{ label: "Asian crisis", answer: 1 }, { label: "Seattle", answer: 2 }, { label: "Global crisis", answer: 3 }, { label: "Brexit/Trump", answer: 4 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Discontent chronology", statement: "1997 → 1999 → 2008 → 2016." },
            ],
            steps: [
              { reasoning: "The Asian crisis (1997) is earliest.", working: "1997", marks: 1, markCode: "M" },
              { reasoning: "Seattle (1999) preceded the 2008 global crisis.", working: "1999 < 2008", marks: 1, markCode: "M" },
              { reasoning: "Brexit/Trump (2016) is latest; all ordered correctly.", working: "2008 < 2016", marks: 1, markCode: "M" },
              { reasoning: "Sequence confirmed.", working: "1, 2, 3, 4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Asian crisis 1, Seattle 2, global crisis 3, Brexit/Trump 4",
            commonErrors: ["Placing Brexit before the 2008 crisis."],
          },
        },
      ],
    },
  ],
};
