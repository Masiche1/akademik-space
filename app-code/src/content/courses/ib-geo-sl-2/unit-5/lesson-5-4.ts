import type { Lesson } from "../../../types.ts";

export const lesson54: Lesson = {
  id: "geo-u5-lesson-5-4",
  code: "5-4",
  title: "Leisure, Tourism and Sport",
  goal: "I CAN describe changing leisure and tourism patterns and evaluate the management of tourism, sport and mega-events for sustainability.",
  standards: ["Paper 1", "Paper 2", "Option E"],
  vocabulary: [
    { term: "Mass tourism", definition: "Large-scale, standardised tourism to popular destinations, often package-based." },
    { term: "Ecotourism", definition: "Responsible travel to natural areas that conserves the environment and benefits local people." },
    { term: "Cultural tourism", definition: "Tourism motivated by experiencing the culture, heritage and traditions of a place." },
    { term: "Seasonality", definition: "Concentration of tourist visits in peak seasons, creating uneven demand and employment." },
    { term: "Tourism multiplier", definition: "Ripple effect where tourist spending circulates through the local economy, generating additional income and jobs." },
    { term: "Carrying capacity", definition: "Maximum number of visitors a destination can sustain without unacceptable environmental or social damage." },
  ],
  concepts: [
    {
      id: "geo-u5-tourism-patterns",
      title: "Changing leisure patterns and tourism",
      skill: "Describe the growth and changing patterns of tourism — mass, eco and cultural tourism, seasonality and economic impacts.",
      lesson: {
        sections: [
          {
            heading: "Growth and types of tourism",
            body: "International arrivals exceed 1.4 billion annually. **Mass tourism** concentrates visitors in resorts and iconic sites (Mediterranean, Caribbean). **Ecotourism** targets natural environments with conservation aims (Costa Rica, Kenya). **Cultural tourism** draws visitors to heritage and living cultures (Rome, Kyoto, Machu Picchu). **Sport tourism** (events, adventure travel) is the fastest-growing segment.",
          },
          {
            heading: "Seasonality and the tourism multiplier",
            body: "Tourism is highly **seasonal** — Mediterranean summers and alpine winters concentrate demand, causing congestion and price spikes while leaving workers idle off-season. The **tourism multiplier** measures how initial spending recirculates: a hotel guest's meal, taxi ride and souvenir each generate further income for suppliers. Leakages (imported goods, foreign-owned hotels) reduce the multiplier in many destinations.",
          },
          {
            heading: "Impacts and spatial patterns",
            body: "Tourism creates jobs but can cause **overtourism** — Venice, Barcelona and Bali face resident displacement, rising rents and environmental strain. Spatial patterns show core–periphery effects: popular destinations benefit while peripheral regions lag. COVID-19 exposed tourism's vulnerability to global shocks, accelerating shifts to domestic and nature-based travel.",
          },
        ],
        keyFormulas: [
          { name: "Tourism types", statement: "Mass / eco / cultural / sport — different motivations and impacts" },
          { name: "Multiplier", statement: "Initial spend × recirculation = total local income (reduced by leakages)" },
          { name: "Seasonality", statement: "Peak/off-peak demand swing → congestion, idle capacity, unstable jobs" },
        ],
        workedExample: {
          problem: "Explain why the tourism multiplier may be low in a small island developing state.",
          solution: "Much tourist spending leaks abroad: imported food and fuel, foreign-owned hotels repatriating profits, and expatriate workers remitting wages home. With few local suppliers and linkages, initial spending leaves the economy quickly, so the recirculation — and multiplier — stays small.",
        },
      },
      questions: [
        {
          id: "geo-u5-tq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Ecotourism is best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mass travel to beach resorts" },
              { id: "b", text: "Visiting cultural heritage sites" },
              { id: "c", text: "Travel to natural areas that conserves the environment and benefits locals" },
              { id: "d", text: "Any holiday involving physical activity" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ecotourism", statement: "Responsible travel to natural areas that conserves the environment, sustains local people and involves education." },
            ],
            steps: [
              { reasoning: "Ecotourism = conservation-focused nature travel with local benefits.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Conservation-focused travel to natural areas",
            commonErrors: ["Confusing ecotourism with adventure tourism — ecotourism prioritises conservation."],
          },
        },
        {
          id: "geo-u5-tq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two economic impacts of tourism on a destination.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Tourism economics", statement: "Job creation, foreign exchange, multiplier effects vs inflation, seasonality and leakage." },
            ],
            steps: [
              { reasoning: "Positive: tourism creates jobs (hotels, guiding, transport) and earns foreign exchange.", marks: 1, markCode: "M" },
              { reasoning: "Positive: multiplier recirculates spending through local suppliers.", marks: 1, markCode: "M" },
              { reasoning: "Negative: inflation of local prices, seasonal unemployment and leakage reduce net benefit.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Jobs + foreign exchange vs inflation, seasonality and leakage.",
            commonErrors: ["Describing only benefits — evaluate positive and negative impacts."],
          },
        },
        {
          id: "geo-u5-tq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how seasonality affects tourism destinations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Seasonality", statement: "Climate and holidays concentrate demand in peaks, creating congestion and idle capacity in off-seasons." },
            ],
            steps: [
              { reasoning: "Peak season overloads infrastructure, housing and services — overtourism effects concentrate.", marks: 1, markCode: "M" },
              { reasoning: "Off-season leaves businesses idle, workers unemployed and assets underused.", marks: 1, markCode: "M" },
              { reasoning: "Price spikes in peak and discounting in off-peak distort local economies and resident costs.", marks: 1, markCode: "M" },
              { reasoning: "Management responses: event diversification, shoulder-season marketing, year-round attractions.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Congestion + idle capacity + price swings; managed via diversification and year-round products.",
            commonErrors: ["Treating seasonality as purely a demand problem — it creates supply-side inefficiency too."],
          },
        },
        {
          id: "geo-u5-tq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the impacts of tourism in a named destination.",
          parts: [
            { label: "a", prompt: "Identify the named destination and its tourism type.", marks: 2 },
            { label: "b", prompt: "Explain two positive and two negative impacts there.", marks: 3 },
            { label: "c", prompt: "Evaluate how these impacts are managed.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tourism impact balance", statement: "Destinations gain income and jobs but face environmental degradation, cultural change and resident displacement." },
            ],
            steps: [
              { part: "a", reasoning: "Named destination (e.g. Venice, Bali, Barcelona) identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Tourism type specified (mass/eco/cultural/sport).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Two positive impacts: jobs, income, conservation funding, infrastructure.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Two negative impacts: overtourism, environmental strain, cultural commodification, displacement.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Impacts linked to the specific destination's conditions.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Management: visitor caps, entry fees, dispersal strategies, local benefit schemes.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: enforcement, economic dependence on tourism, political difficulty.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement on management effectiveness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named destination + type. (b) Positive and negative impacts. (c) Management evaluated.",
            commonErrors: ["One-sided impact lists — examine both benefits and costs."],
          },
        },
        {
          id: "geo-u5-tq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Mass tourism is best characterised by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Large numbers of visitors concentrated in resorts and iconic sites" },
              { id: "b", text: "Only cultural heritage travel" },
              { id: "c", text: "Small groups visiting remote wilderness" },
              { id: "d", text: "Business travel exclusively" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mass tourism", statement: "High-volume tourism concentrated in popular resorts and iconic destinations (Mediterranean, Caribbean)." },
            ],
            steps: [
              { reasoning: "Mass tourism = large-scale, concentrated visitation.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Large concentrated visitor numbers",
            commonErrors: ["Confusing mass tourism with niche or eco tourism."],
          },
        },
        {
          id: "geo-u5-tq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Ecotourism differs from mass tourism primarily because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Targets natural environments with conservation and sustainability aims" },
              { id: "b", text: "Focuses only on urban attractions" },
              { id: "c", text: "Has no environmental aims" },
              { id: "d", text: "Attracts larger crowds to resorts" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ecotourism", statement: "Nature-based tourism with explicit conservation and sustainability objectives (Costa Rica, Kenya)." },
            ],
            steps: [
              { reasoning: "Ecotourism combines nature visitation with conservation aims.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Conservation-focused nature travel",
            commonErrors: ["Assuming any nature tourism is automatically ecotourism."],
          },
        },
        {
          id: "geo-u5-tq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Tourism seasonality causes which problem?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reduced infrastructure costs" },
              { id: "b", text: "Even year-round employment" },
              { id: "c", text: "Peak congestion and idle capacity/off-season unemployment" },
              { id: "d", text: "Constant visitor numbers" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Seasonality", statement: "Concentrated peak demand causes congestion; off-peak leaves workers idle and capacity unused." },
            ],
            steps: [
              { reasoning: "Seasonality swings demand, straining peak and idling off-peak capacity.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Peak congestion + off-season idleness",
            commonErrors: ["Viewing seasonality as purely an economic benefit."],
          },
        },
        {
          id: "geo-u5-tq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The tourism multiplier measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The distance tourists travel" },
              { id: "b", text: "The total number of tourists arriving" },
              { id: "c", text: "How initial tourist spending recirculates through the local economy" },
              { id: "d", text: "The price of tourist accommodation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tourism multiplier", statement: "Measure of how initial tourist spending generates further local income through recirculation." },
            ],
            steps: [
              { reasoning: "The multiplier captures recirculation of tourist spending.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Recirculation of spending",
            commonErrors: ["Confusing the multiplier with tourist arrivals or spending totals."],
          },
        },
        {
          id: "geo-u5-tq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Leakages reduce the tourism multiplier because:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They encourage more tourists to visit" },
              { id: "b", text: "They improve local infrastructure" },
              { id: "c", text: "They increase local spending" },
              { id: "d", text: "Tourist money leaves the local economy via imports and foreign-owned businesses" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Leakages", statement: "Imported goods, foreign-owned hotels repatriating profits and expatriate wages reduce local recirculation." },
            ],
            steps: [
              { reasoning: "Leakages divert tourist spending out of the local economy.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Money leaves via imports/foreign profits",
            commonErrors: ["Treating leakages as a benefit rather than a drain."],
          },
        },
        {
          id: "geo-u5-tq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "International tourist arrivals currently exceed approximately how many per year?",
          response: { type: "numeric", parts: [{ label: "Annual arrivals (billions)", answer: 1.4, tolerance: 0.2, unit: "billion" }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Tourism volume", statement: "International arrivals exceed ~1.4 billion annually." },
            ],
            steps: [
              { reasoning: "Recall the arrivals figure.", working: "1.4 \\text{ billion}", marks: 1, markCode: "M" },
              { reasoning: "Answer $>1.4$ billion.", working: "1.4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$>1.4$ billion per year",
            commonErrors: ["Quoting domestic tourism figures instead of international arrivals."],
          },
        },
        {
          id: "geo-u5-tq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A destination receives $\\$500$ million in initial tourist spending with a multiplier of 1.8. What is the total income generated (in $\\$$ millions)?",
          response: { type: "numeric", parts: [{ label: "Total income generated ($ million)", answer: 900, tolerance: 0, unit: "$ million" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Tourism multiplier", statement: "Total impact $= \\text{initial spending} \\times \\text{multiplier}$." },
            ],
            steps: [
              { reasoning: "Apply the multiplier.", working: "500 \\times 1.8", marks: 1, markCode: "M" },
              { reasoning: "Total $= \\$900$ million.", working: "900", marks: 1, markCode: "M" },
              { reasoning: "Total income generated is $\\$900$ million.", working: "900", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$900$ million",
            commonErrors: ["Adding the multiplier rather than multiplying."],
          },
        },
        {
          id: "geo-u5-tq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Venice receives about 30 million visitors per year against roughly 50,000 residents. This illustrates:",
          response: { type: "numeric", parts: [{ label: "Concept code (1=overtourism, 2=seasonality, 3=mass tourism growth, 4=ecotourism)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Overtourism", statement: "Visitor numbers exceeding what a destination can absorb — Venice: ~30M visitors vs ~50k residents." },
            ],
            steps: [
              { reasoning: "Extreme visitor-resident imbalance exemplifies overtourism.", working: "overtourism", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Overtourism (1)",
            commonErrors: ["Calling it mass tourism — overtourism is about exceeding capacity."],
          },
        },
        {
          id: "geo-u5-tq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A resort town has 120,000 hotel beds but only 60,000 residents. What is the ratio of tourist beds to residents?",
          response: { type: "numeric", parts: [{ label: "Beds : residents ratio", answer: 2, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Visitor-resident ratio", statement: "Ratio $= \\frac{\\text{capacity}}{\\text{residents}}$." },
            ],
            steps: [
              { reasoning: "Set up the ratio.", working: "120{,}000 : 60{,}000", marks: 1, markCode: "M" },
              { reasoning: "Simplify: $120/60 = 2$.", working: "2", marks: 1, markCode: "M" },
              { reasoning: "Ratio $= 2 : 1$ beds to residents.", working: "2 : 1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2 : 1$",
            commonErrors: ["Inverting the ratio."],
          },
        },
        {
          id: "geo-u5-tq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Core–periphery effects in tourism mean:",
          response: { type: "numeric", parts: [{ label: "Pattern code (1=popular destinations benefit while peripheral regions lag, 2=all regions benefit equally, 3=peripheral regions gain most, 4=tourism only occurs in capitals)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tourism core-periphery", statement: "Tourism concentrates benefits in popular 'core' destinations while peripheral regions receive fewer gains." },
            ],
            steps: [
              { reasoning: "Tourism benefits concentrate in popular core destinations.", working: "core benefit", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Cores benefit, periphery lags (1)",
            commonErrors: ["Assuming tourism benefits spread evenly."],
          },
        },
        {
          id: "geo-u5-tq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "If a destination's tourism revenue is $\\$2$ billion and leakages account for 60%, how much stays in the local economy (in $\\$$ billions)?",
          response: { type: "numeric", parts: [{ label: "Local retained revenue ($ billion)", answer: 0.8, tolerance: 0, unit: "$ billion" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Leakage retention", statement: "Retained $= \\text{revenue} \\times (1 - \\text{leakage rate})$." },
            ],
            steps: [
              { reasoning: "Retained share $= 1 - 0.60 = 0.40$.", working: "0.40", marks: 1, markCode: "M" },
              { reasoning: "Retained $= 2 \\times 0.40$.", working: "2 \\times 0.40", marks: 1, markCode: "M" },
              { reasoning: "Local retention $= \\$0.8$ billion.", working: "0.8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$0.8$ billion",
            commonErrors: ["Reporting the leaked amount ($1.2B) instead of retained."],
          },
        },
        {
          id: "geo-u5-tq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the patterns and impacts of tourism in a named destination.",
          parts: [
            { label: "a", prompt: "Identify the destination and the type of tourism dominant there.", marks: 2 },
            { label: "b", prompt: "Explain two economic impacts of tourism there.", marks: 3 },
            { label: "c", prompt: "Evaluate one environmental or social cost of tourism.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Tourism impacts", statement: "Tourism generates jobs and income but also causes overtourism, seasonality instability and environmental strain." },
            ],
            steps: [
              { part: "a", reasoning: "Named destination identified with tourism type.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate description of tourism pattern.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Economic impact 1: jobs/income/multiplier with mechanism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Economic impact 2: leakage or seasonal employment.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Impacts linked to the named destination.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cost identified (overtourism, congestion, environmental damage).", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Mechanism explaining the cost.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement on net impact.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Destination + type. (b) Two economic impacts. (c) Cost evaluated.",
            commonErrors: ["One-sided impact lists — examine both benefits and costs."],
          },
        },
      ],
    },
    {
      id: "geo-u5-tourism-management",
      title: "Sport and managing tourism for the future",
      skill: "Describe sport tourism and mega-events and evaluate sustainable tourism management including carrying capacity.",
      lesson: {
        sections: [
          {
            heading: "Sport tourism and mega-events",
            body: "**Sport tourism** combines travel and sport — events (Olympics, FIFA World Cup), adventure tourism and active holidays. **Mega-events** promise global exposure, infrastructure investment and tourism revenue, but often deliver **white elephants** — venues unused after the event (e.g. Sochi 2014, Rio 2016). Debt burdens and displacement of residents are common costs.",
          },
          {
            heading: "Overtourism and carrying capacity",
            body: "**Overtourism** occurs when visitor numbers exceed what a destination can absorb — Venice receives ~30 million visitors/year against ~50,000 residents. **Carrying capacity** can be physical (space), ecological (ecosystem health) or perceptual (resident tolerance). Management tools include visitor caps (Machu Picchu), timed ticketing, dispersal to secondary sites and tourism taxes (Barcelona, Amsterdam).",
          },
          {
            heading: "Sustainable tourism management",
            body: "Sustainable management balances economic benefit with environmental protection and resident wellbeing. Strategies: **certification schemes**, community-based tourism giving locals control, carbon-offset requirements for flights, plastic bans at destinations, and planning that spreads visitors beyond honeypot sites. The UN's sustainable tourism goals emphasise that tourism should support — not undermine — destination futures.",
          },
        ],
        keyFormulas: [
          { name: "Mega-event trade-off", statement: "Global exposure + infrastructure vs debt + white elephants + displacement" },
          { name: "Carrying capacity types", statement: "Physical / ecological / perceptual limits" },
          { name: "Overtourism tools", statement: "Caps + timed entry + dispersal + taxes + certification" },
        ],
        workedExample: {
          problem: "Suggest two strategies to reduce overtourism in a historic city centre.",
          solution: "Introduce timed-entry ticketing and daily visitor caps for key sites to limit peak pressure. Develop and promote alternative attractions in peripheral districts to disperse visitors, funded by a tourist tax used for local services and conservation.",
        },
      },
      questions: [
        {
          id: "geo-u5-tmq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Sport tourism is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Any holiday that includes exercise" },
              { id: "b", text: "Watching professional sport on television while travelling" },
              { id: "c", text: "Visiting sports stadiums as museums" },
              { id: "d", text: "Travel motivated by participation in or attendance at sporting activities" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Sport tourism", statement: "Travel undertaken to participate in sport or attend sporting events." },
            ],
            steps: [
              { reasoning: "Sport tourism = travel + sport participation or spectating.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Travel for sport participation or events",
            commonErrors: ["Confusing sport tourism with sports science — it is a tourism segment."],
          },
        },
        {
          id: "geo-u5-tmq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two problems associated with mega-events.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Mega-event problems", statement: "Debt, white elephants, displacement, cost overruns vs promised legacy." },
            ],
            steps: [
              { reasoning: "Cost overruns and public debt — budgets routinely exceed estimates (e.g. Olympics).", marks: 1, markCode: "M" },
              { reasoning: "White elephants — venues built for the event lie unused afterwards (Sochi, Rio).", marks: 1, markCode: "M" },
              { reasoning: "Resident displacement and gentrification as land is cleared for venues.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Debt/overruns, white elephants, displacement.",
            commonErrors: ["Listing only economic costs — social displacement matters too."],
          },
        },
        {
          id: "geo-u5-tmq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the concept of carrying capacity in tourism management.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Carrying capacity", statement: "The maximum visitor use a destination can sustain before unacceptable environmental or social damage occurs." },
            ],
            steps: [
              { reasoning: "Physical capacity: space, infrastructure and service limits.", marks: 1, markCode: "M" },
              { reasoning: "Ecological capacity: ecosystems degrade when use exceeds recovery rates.", marks: 1, markCode: "M" },
              { reasoning: "Perceptual capacity: residents' tolerance declines as crowds and change grow.", marks: 1, markCode: "M" },
              { reasoning: "Management uses the lowest relevant threshold to set caps, prices and dispersal.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Max sustainable visitor use — physical, ecological and perceptual limits guide management.",
            commonErrors: ["Treating capacity as a single fixed number — it varies by type and season."],
          },
        },
        {
          id: "geo-u5-tmq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine strategies for managing overtourism in a named destination.",
          parts: [
            { label: "a", prompt: "Identify the named destination and its overtourism problem.", marks: 2 },
            { label: "b", prompt: "Explain two management strategies used there.", marks: 3 },
            { label: "c", prompt: "Evaluate the effectiveness of these strategies.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Overtourism management", statement: "Caps, pricing, dispersal and regulation aim to keep visitation within carrying capacity while preserving benefits." },
            ],
            steps: [
              { part: "a", reasoning: "Named destination (e.g. Venice, Barcelona, Machu Picchu, Bali).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Specific overtourism problem stated (crowding, displacement, environmental damage).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strategy 1: visitor caps / timed entry / entry fees.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategy 2: dispersal to secondary sites / tourism taxes / regulation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategies linked to the specific problem.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: reduces pressure, raises revenue for conservation and residents.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: enforcement difficulty, economic dependence on tourism, displacement of demand.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement on effectiveness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named destination + problem. (b) Two strategies. (c) Effectiveness evaluated.",
            commonErrors: ["Recommending only marketing — overtourism needs regulatory limits."],
          },
        },
        {
          id: "geo-u5-tmq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Carrying capacity in tourism refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The speed of tourist arrivals" },
              { id: "b", text: "The total revenue a destination can earn" },
              { id: "c", text: "The maximum number of tourists a destination can physically hold" },
              { id: "d", text: "The number of hotel rooms available" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Carrying capacity", statement: "Maximum visitors a destination can absorb — measured physically, ecologically or perceptually." },
            ],
            steps: [
              { reasoning: "Carrying capacity is the absorptive limit, not revenue or rooms.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Maximum absorbable visitors",
            commonErrors: ["Confusing carrying capacity with accommodation capacity."],
          },
        },
        {
          id: "geo-u5-tmq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Timed-entry ticketing is a management tool used to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ban foreign tourists entirely" },
              { id: "b", text: "Increase peak visitor numbers" },
              { id: "c", text: "Eliminate all tourism revenue" },
              { id: "d", text: "Spread and limit visitors to reduce congestion at key sites" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Timed entry", statement: "Scheduled ticketing spreads visitors across the day, reducing peak pressure and congestion." },
            ],
            steps: [
              { reasoning: "Timed entry smooths demand and caps peak numbers.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Spread and limit visitors",
            commonErrors: ["Thinking timed entry is a revenue-maximisation tool only."],
          },
        },
        {
          id: "geo-u5-tmq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "'White elephants' in mega-event tourism refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Venues that remain unused or underused after the event" },
              { id: "b", text: "Record-breaking performances" },
              { id: "c", text: "Cheap souvenirs" },
              { id: "d", text: "Winning athletes" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "White elephants", statement: "Mega-event venues left unused after the event — e.g. Sochi 2014, Rio 2016 — representing wasted investment." },
            ],
            steps: [
              { reasoning: "White elephants are underused post-event venues.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Unused post-event venues",
            commonErrors: ["Associating white elephants with cost overruns rather than disuse."],
          },
        },
        {
          id: "geo-u5-tmq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Perceptual carrying capacity refers to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The tolerance of residents and visitors to crowding" },
              { id: "b", text: "The number of transport links" },
              { id: "c", text: "The ecological health of the destination" },
              { id: "d", text: "The physical space available" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Perceptual capacity", statement: "The visitor/resident tolerance limit — when crowding makes the destination feel unacceptable." },
            ],
            steps: [
              { reasoning: "Perceptual capacity is about tolerance, not physical or ecological limits.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Tolerance to crowding",
            commonErrors: ["Confusing perceptual with physical or ecological capacity."],
          },
        },
        {
          id: "geo-u5-tmq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Why might community-based tourism be more sustainable than mass tourism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It requires no management" },
              { id: "b", text: "It eliminates all environmental impact" },
              { id: "c", text: "It gives locals control, keeps benefits local and limits scale" },
              { id: "d", text: "It always attracts more visitors" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Community tourism", statement: "Local control retains benefits locally and typically limits visitor numbers, reducing strain." },
            ],
            steps: [
              { reasoning: "Local ownership aligns incentives and moderates scale.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Local control + limited scale",
            commonErrors: ["Claiming community tourism has zero impact."],
          },
        },
        {
          id: "geo-u5-tmq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Machu Picchu introduced daily visitor caps primarily to:",
          response: { type: "numeric", parts: [{ label: "Purpose code (1=protect the site from overtourism, 2=increase ticket revenue only, 3=reduce transport costs, 4=ban local residents)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Machu Picchu caps", statement: "Daily visitor limits protect the archaeological site from overtourism damage." },
            ],
            steps: [
              { reasoning: "Caps are a conservation measure against overcrowding.", working: "protect site", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Protect from overtourism (1)",
            commonErrors: ["Interpreting caps as purely revenue tools."],
          },
        },
        {
          id: "geo-u5-tmq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A city introduces a tourist tax of $\\$10$ per night. With 2 million tourist nights per year, how much revenue is raised annually (in $\\$$ millions)?",
          response: { type: "numeric", parts: [{ label: "Annual tax revenue ($ million)", answer: 20, tolerance: 0, unit: "$ million" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Tourist tax", statement: "Revenue $= \\text{tax rate} \\times \\text{taxable nights}$." },
            ],
            steps: [
              { reasoning: "Multiply tax by nights.", working: "10 \\times 2{,}000{,}000", marks: 1, markCode: "M" },
              { reasoning: "Revenue $= \\$20{,}000{,}000$.", working: "20{,}000{,}000", marks: 1, markCode: "M" },
              { reasoning: "Annual revenue $= \\$20$ million.", working: "20", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$20$ million per year",
            commonErrors: ["Reporting dollars rather than millions."],
          },
        },
        {
          id: "geo-u5-tmq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Dispersal strategies aim to reduce overtourism by:",
          response: { type: "numeric", parts: [{ label: "Strategy code (1=promoting secondary sites to spread visitors, 2=concentrating all tourists in one site, 3=banning tourism, 4=increasing prices only)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Dispersal", statement: "Redirecting visitors to secondary attractions reduces pressure on honeypot sites." },
            ],
            steps: [
              { reasoning: "Dispersal spreads visitors across multiple sites.", working: "spread visitors", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Promote secondary sites (1)",
            commonErrors: ["Confusing dispersal with concentration."],
          },
        },
        {
          id: "geo-u5-tmq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A destination caps daily visitors at 8,000 but currently receives 12,000 per day. By what percentage must arrivals be reduced to meet the cap?",
          response: { type: "numeric", parts: [{ label: "Required reduction (%)", answer: 33.3, tolerance: 0.2, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Capacity reduction", statement: "Reduction $= \\frac{\\text{current} - \\text{cap}}{\\text{current}} \\times 100$." },
            ],
            steps: [
              { reasoning: "Excess $= 12{,}000 - 8{,}000 = 4{,}000$.", working: "4{,}000", marks: 1, markCode: "M" },
              { reasoning: "Share $= 4{,}000 / 12{,}000 = 0.333$.", working: "\\frac{4{,}000}{12{,}000} = 0.333", marks: 1, markCode: "M" },
              { reasoning: "Reduction needed $\\approx 33.3\\%$.", working: "33.3\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 33.3\\%$",
            commonErrors: ["Dividing by the cap instead of current arrivals."],
          },
        },
        {
          id: "geo-u5-tmq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Barcelona and Amsterdam have introduced tourist taxes mainly to:",
          response: { type: "numeric", parts: [{ label: "Purpose code (1=fund conservation/local services + manage demand, 2=ban tourism, 3=reduce airport capacity, 4=encourage more visitors)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Tourist taxes", statement: "Taxes fund local services and deter excess demand — used in Barcelona, Amsterdam and elsewhere." },
            ],
            steps: [
              { reasoning: "Tourist taxes raise revenue and moderate demand.", working: "revenue + demand", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Fund services + manage demand (1)",
            commonErrors: ["Thinking the tax aims to eliminate tourism."],
          },
        },
        {
          id: "geo-u5-tmq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A tourism certification scheme requires $\\$500$ per operator per year. If 300 operators are certified, what is the total annual certification revenue (in $\\$$ thousands)?",
          response: { type: "numeric", parts: [{ label: "Total certification revenue ($ thousand)", answer: 150, tolerance: 0, unit: "$ thousand" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Certification revenue", statement: "Revenue $= \\text{fee} \\times \\text{operators}$." },
            ],
            steps: [
              { reasoning: "Multiply fee by operators.", working: "500 \\times 300", marks: 1, markCode: "M" },
              { reasoning: "Total $= \\$150{,}000 = \\$150$ thousand.", working: "150{,}000", marks: 1, markCode: "M" },
              { reasoning: "Annual certification revenue is $\\$150$ thousand.", working: "150", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$150$ thousand per year",
            commonErrors: ["Reporting dollars rather than thousands."],
          },
        },
        {
          id: "geo-u5-tmq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Evaluate strategies to manage overtourism in a named destination.",
          parts: [
            { label: "a", prompt: "Identify the destination and evidence of overtourism.", marks: 2 },
            { label: "b", prompt: "Describe two management strategies being used.", marks: 3 },
            { label: "c", prompt: "Evaluate their effectiveness and any limitations.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Overtourism management", statement: "Effective tools combine caps, timed entry, dispersal, taxation and certification — balancing conservation with economic needs." },
            ],
            steps: [
              { part: "a", reasoning: "Named destination identified with overtourism evidence.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Relevant statistic or symptom given.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strategy 1 described (caps, timed entry, dispersal, tax).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategy 2 described with mechanism.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategies linked to the named destination.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Effectiveness: measurable reduction in pressure or improved liveability.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: enforcement, equity, economic cost or displacement.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Destination + evidence. (b) Two strategies. (c) Effectiveness + limits.",
            commonErrors: ["Recommending only marketing — overtourism needs regulatory limits."],
          },
        },
      ],
    },
  ],
};
