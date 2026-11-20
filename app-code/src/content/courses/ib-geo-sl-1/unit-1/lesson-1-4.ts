import type { Lesson } from "../../../types.ts";

export const lesson14: Lesson = {
  id: "geo-u1-lesson-1-4",
  code: "1-4",
  title: "Oceans and Ocean Management",
  goal: "I CAN explain ocean systems, ocean–atmosphere interactions and evaluate strategies for managing oceans and coastal margins.",
  standards: ["Paper 1", "Paper 2", "Option B"],
  vocabulary: [
    { term: "Ocean current", definition: "Large-scale movement of seawater driven by wind, density differences and the Coriolis effect." },
    { term: "Upwelling", definition: "Rise of cold, nutrient-rich deep water to the surface, often where winds drive surface water offshore." },
    { term: "El Niño", definition: "Periodic warming of equatorial Pacific surface waters that disrupts global weather patterns." },
    { term: "Ocean acidification", definition: "Decrease in seawater pH caused by absorption of atmospheric CO2, threatening calcifying organisms." },
    { term: "Marine protected area (MPA)", definition: "A defined region of sea where human activity is restricted to conserve ecosystems and fisheries." },
    { term: "UNCLOS", definition: "UN Convention on the Law of the Sea — the treaty framework defining national maritime zones and ocean governance." },
  ],
  concepts: [
    {
      id: "geo-u1-ocean-systems",
      title: "Ocean–atmosphere interactions and ocean systems",
      skill: "Describe ocean currents, upwelling, El Niño and ocean acidification and explain their effects on marine ecosystems and climate.",
      lesson: {
        sections: [
          {
            heading: "Ocean currents and upwelling",
            body: "Wind-driven surface currents (the Gulf Stream, the Humboldt Current) redistribute heat from equator to poles, moderating coastal climates. Where winds push surface water offshore, **upwelling** brings cold, nutrient-rich deep water to the surface — fuelling productive fisheries such as those off Peru and Namibia. Downwelling has the opposite effect.",
          },
          {
            heading: "El Niño–Southern Oscillation",
            body: "Every few years **El Niño** weakens the trade winds, allowing warm water to pool in the eastern Pacific. This disrupts rainfall worldwide: drought and bushfires in Australia, heavy rain and floods in Peru and the southern USA, and reduced upwelling that collapses fisheries. **La Niña** is the cooler, opposite phase.",
          },
          {
            heading: "Ocean acidification and marine ecosystems",
            body: "The oceans absorb about a quarter of anthropogenic CO2, lowering pH — **ocean acidification**. This reduces carbonate availability, dissolving the shells of plankton, corals and shellfish and threatening marine food webs. Combined with warming, overfishing and plastic pollution, these pressures degrade **marine ecosystems** from coral reefs to deep-sea habitats.",
          },
        ],
        keyFormulas: [
          { name: "Upwelling", statement: "Wind-driven offshore surface flow → deep nutrient-rich water rises" },
          { name: "El Niño", statement: "Weakened trade winds → warm water pools east → global weather disruption" },
          { name: "Acidification", statement: "CO2 + H2O → carbonic acid → lower pH → carbonate loss" },
        ],
        workedExample: {
          problem: "Explain how El Niño can affect fisheries on opposite sides of the Pacific Ocean.",
          solution: "El Niño weakens trade winds, so warm surface water spreads east and upwelling off South America weakens. Cold nutrient-rich water no longer reaches the surface, plankton productivity falls and fish stocks (anchovy) collapse — devastating Peruvian fisheries. In the western Pacific, warmer waters and reduced rainfall bring drought to Indonesia and Australia.",
        },
      },
      questions: [
        {
          id: "geo-u1-osq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Upwelling is best described as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Warm surface water sinking to the deep ocean" },
              { id: "b", text: "Cold nutrient-rich deep water rising to the surface" },
              { id: "c", text: "Horizontal movement of surface currents" },
              { id: "d", text: "Storm waves breaking on a coastline" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Upwelling", statement: "Rise of cold, nutrient-rich deep water to the surface where winds drive surface water offshore." },
            ],
            steps: [
              { reasoning: "Upwelling brings deep nutrients to sunlit surface waters.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Cold nutrient-rich deep water rising to the surface",
            commonErrors: ["Confusing upwelling with downwelling — upwelling brings nutrients up, downwelling pushes surface water down."],
          },
        },
        {
          id: "geo-u1-osq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two ways in which ocean currents influence coastal environments.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Current effects", statement: "Heat transport moderates climate; upwelling fertilises fisheries; currents redistribute larvae and pollution." },
            ],
            steps: [
              { reasoning: "Warm currents (Gulf Stream) raise coastal temperatures and extend growing seasons.", marks: 1, markCode: "M" },
              { reasoning: "Upwelling currents bring nutrients that support productive fisheries and marine ecosystems.", marks: 1, markCode: "M" },
              { reasoning: "Currents also transport larvae, pollutants and debris around ocean basins.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Warm currents moderate climate; upwelling supports fisheries; currents redistribute materials.",
            commonErrors: ["Describing currents as wind-independent — surface currents are wind-driven."],
          },
        },
        {
          id: "geo-u1-osq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain how ocean acidification threatens marine ecosystems.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Acidification", statement: "Absorbed CO2 forms carbonic acid, lowering pH and reducing carbonate availability for shell-building organisms." },
            ],
            steps: [
              { reasoning: "Oceans absorb ~25% of anthropogenic CO2, forming carbonic acid and lowering pH.", marks: 1, markCode: "M" },
              { reasoning: "Lower pH reduces carbonate ions, making it harder for corals, shellfish and plankton to build shells.", marks: 1, markCode: "M" },
              { reasoning: "Shell dissolution and reduced calcification weaken coral reefs and food-web foundations.", marks: 1, markCode: "M" },
              { reasoning: "Cascading effects threaten fisheries, biodiversity and coastal livelihoods.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "CO2 absorption lowers pH, dissolving shells and corroding marine food webs.",
            commonErrors: ["Confusing acidification with warming — both stress oceans but via different mechanisms."],
          },
        },
        {
          id: "geo-u1-osq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the global impacts of the El Niño–Southern Oscillation.",
          parts: [
            { label: "a", prompt: "Describe the mechanism of El Niño.", marks: 2 },
            { label: "b", prompt: "Explain two impacts of El Niño on different regions.", marks: 3 },
            { label: "c", prompt: "Evaluate the challenges El Niño poses for predicting and managing its effects.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "ENSO", statement: "El Niño is a coupled ocean–atmosphere oscillation that redistributes heat and moisture across the Pacific, with worldwide weather consequences." },
            ],
            steps: [
              { part: "a", reasoning: "Weakened trade winds allow warm western Pacific water to spread east.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Reduced upwelling off South America and shifted rainfall patterns follow.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Impact 1: drought, fire and crop failure in Australia/Indonesia.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Impact 2: floods in Peru/southern USA and fishery collapse from weak upwelling.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Both impacts correctly linked to the ocean–atmosphere mechanism.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "ENSO is predictable months ahead via monitoring, enabling some preparedness.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "But magnitude/timing vary and impacts are uneven — poor regions suffer most.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on predictability versus management capacity.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Weakened trades → eastward warm water → shifted rainfall. (b) Drought east, floods west, fishery collapse. (c) Predictable but unevenly managed.",
            commonErrors: ["Treating El Niño as a single weather event rather than an ocean–atmosphere cycle."],
          },
        },
        {
          id: "geo-u1-osq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "During El Niño, unusually warm surface water pools in which part of the Pacific Ocean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The western Pacific near Indonesia" },
              { id: "b", text: "The eastern Pacific near South America" },
              { id: "c", text: "The central North Pacific gyre" },
              { id: "d", text: "The Southern Ocean" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "El Niño", statement: "Weakened trade winds allow warm western Pacific water to spread eastward, pooling off South America." },
            ],
            steps: [
              { reasoning: "El Niño shifts the warm pool to the eastern Pacific.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The eastern Pacific near South America",
            commonErrors: ["Reversing El Niño with La Niña — in El Niño the east warms, in La Niña the west stays warm."],
          },
        },
        {
          id: "geo-u1-osq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Surface seawater pH fell from $8.21$ to $8.09$ as oceans absorbed atmospheric $CO_2$. Calculate (a) the pH decrease and (b) the new pH value's distance below the pre-industrial value of $8.2$, in pH units.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.12, tolerance: 0.01 },
              { label: "b", answer: 0.11, tolerance: 0.01 },
            ],
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ocean acidification", statement: "Absorbed $CO_2$ forms carbonic acid, lowering seawater pH; a decrease of about $0.1$ pH units doubles acidity." },
            ],
            steps: [
              { part: "a", reasoning: "$8.21 - 8.09 = 0.12$ pH units decrease.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$8.20 - 8.09 = 0.11$ pH units below pre-industrial.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.12$ pH units; (b) $0.11$ pH units below pre-industrial.",
            commonErrors: ["Reporting a negative decrease or confusing pH (log scale) with concentration."],
          },
        },
        {
          id: "geo-u1-osq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of these is a warm western boundary current that moderates the climate of north-west Europe?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The Humboldt Current" },
              { id: "b", text: "The Gulf Stream" },
              { id: "c", text: "The Antarctic Circumpolar Current" },
              { id: "d", text: "The Canary Current" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Ocean currents", statement: "Warm currents such as the Gulf Stream transport tropical heat poleward, warming adjacent coasts." },
            ],
            steps: [
              { reasoning: "The Gulf Stream carries warm tropical water north-east past north-west Europe.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** The Gulf Stream",
            commonErrors: ["Confusing the warm Gulf Stream with the cold Canary Current, which flows south along north-west Africa."],
          },
        },
        {
          id: "geo-u1-osq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "The Pacific Ocean covers about $165$ million $km^2$ and the Atlantic about $106$ million $km^2$. Calculate (a) the difference in area between them and (b) the Pacific's share of the combined area of the two oceans, as a percentage.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 59, tolerance: 0.5, unit: "million km²" },
              { label: "b", answer: 60.9, tolerance: 0.2, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "skill", name: "Percentage calculation", statement: "Share = part / total × 100; difference = larger value − smaller value." },
            ],
            steps: [
              { part: "a", reasoning: "$165 - 106 = 59$ million $km^2$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$165 / (165 + 106) = 165/271 = 0.6089 \\to 60.9\\%$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct percentage to 1 decimal place.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $59$ million $km^2$; (b) $60.9\\%$.",
            commonErrors: ["Dividing by only the Pacific area instead of the combined total."],
          },
        },
        {
          id: "geo-u1-osq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which statement best describes La Niña?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Strengthened trade winds with cool water pooling in the eastern Pacific" },
              { id: "b", text: "Weakened trade winds with warm water pooling in the eastern Pacific" },
              { id: "c", text: "A permanent feature of the equatorial Pacific" },
              { id: "d", text: "A type of tropical cyclone in the western Pacific" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "La Niña", statement: "The cool phase of ENSO: strong trade winds push warm water west, enhancing upwelling off South America." },
            ],
            steps: [
              { reasoning: "La Niña is the cool, opposite phase to El Niño, with stronger trades and east-Pacific cooling.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Strengthened trade winds with cool water in the east",
            commonErrors: ["Describing La Niña as warm — it is the cooler phase with enhanced eastern upwelling."],
          },
        },
        {
          id: "geo-u1-osq10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "During an El Niño event, sea-surface temperature off Peru rose from $24.0^\\circ\\mathrm{C}$ to $27.5^\\circ\\mathrm{C}$. Calculate (a) the temperature increase in degrees Celsius and (b) the warming as a percentage of the original temperature.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 3.5, tolerance: 0.05, unit: "°C" },
              { label: "b", answer: 14.6, tolerance: 0.2, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "El Niño and fisheries", statement: "Warm surface water suppresses upwelling of cold nutrient-rich water, collapsing plankton and fish stocks off Peru." },
            ],
            steps: [
              { part: "a", reasoning: "$27.5 - 24.0 = 3.5^\\circ\\mathrm{C}$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$3.5 / 24.0 \\times 100 = 14.6\\%$.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $3.5^\\circ\\mathrm{C}$; (b) $14.6\\%$. Warm water also blocks nutrient upwelling, collapsing fisheries.",
            commonErrors: ["Forgetting the final explanatory sentence about fisheries."],
          },
        },
        {
          id: "geo-u1-osq11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Ocean acidification most directly threatens which group of marine organisms?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Open-ocean tuna" },
              { id: "b", text: "Calcifying organisms such as corals, shellfish and plankton" },
              { id: "c", text: "Deep-sea hydrothermal vent bacteria" },
              { id: "d", text: "Marine mammals" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Acidification", statement: "Lower pH reduces carbonate availability, hindering shell and skeleton formation in calcifying organisms." },
            ],
            steps: [
              { reasoning: "Corals, shellfish and calcareous plankton need carbonate ions to build shells.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Calcifying organisms such as corals, shellfish and plankton",
            commonErrors: ["Choosing organisms affected only indirectly — the direct victims are shell-builders."],
          },
        },
        {
          id: "geo-u1-osq12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Phytoplankton biomass (an index) was measured as $8.0$ in an upwelling zone and $2.0$ in an adjacent non-upwelling zone. Calculate (a) the absolute difference and (b) how many times greater the upwelling biomass is.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 6, tolerance: 0.05, unit: "index units" },
              { label: "b", answer: 4, tolerance: 0.05, unit: "times" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Upwelling productivity", statement: "Upwelled nutrients fertilise surface waters, producing far higher phytoplankton biomass and supporting fisheries." },
            ],
            steps: [
              { part: "a", reasoning: "$8.0 - 2.0 = 6.0$ index units.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$8.0 / 2.0 = 4$ times greater.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $6.0$ index units; (b) $4$ times greater.",
            commonErrors: ["Reporting the ratio as a percentage instead of a multiplier."],
          },
        },
        {
          id: "geo-u1-osq13",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Surface ocean pH is falling at an average rate of about $0.002$ pH units per year. Calculate the total pH decrease over (a) $30$ years and (b) $50$ years.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 0.06, tolerance: 0.001, unit: "pH units" },
              { label: "b", answer: 0.1, tolerance: 0.001, unit: "pH units" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rate calculation", statement: "Total change = rate × time; apply the same rate over different durations." },
            ],
            steps: [
              { part: "a", reasoning: "$0.002 \\times 30 = 0.06$ pH units.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$0.002 \\times 50 = 0.10$ pH units.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $0.06$; (b) $0.10$ pH units.",
            commonErrors: ["Multiplying by the wrong time interval or forgetting units."],
          },
        },
        {
          id: "geo-u1-osq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "If ocean acidification continues, surface pH is projected to fall by $0.3$ units by $2100$. Given that each $0.1$ pH unit roughly doubles acidity, by about how many times will acidity increase?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 8, tolerance: 0.1, unit: "times" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "pH and acidity", statement: "pH is logarithmic: each decrease of $0.1$ unit approximately doubles hydrogen-ion concentration (acidity)." },
            ],
            steps: [
              { reasoning: "$0.3$ units contains three $0.1$ steps; $2^3 = 8$ times greater acidity.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $8$ times.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "About $8$ times more acidic ($2^3$).",
            commonErrors: ["Answering '3 times' — must use the logarithmic doubling, not linear multiplication."],
          },
        },
        {
          id: "geo-u1-osq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which statement about El Niño's global impacts is most accurate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It only affects weather in the Pacific region" },
              { id: "b", text: "It redistributes heat and rainfall worldwide, causing droughts in some regions and floods in others" },
              { id: "c", text: "It permanently raises global sea levels" },
              { id: "d", text: "It strengthens upwelling off South America" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "ENSO impacts", statement: "El Niño teleconnections shift rainfall belts globally — drought in Australia/Indonesia, floods in Peru and the southern USA." },
            ],
            steps: [
              { reasoning: "ENSO teleconnections alter weather far beyond the Pacific.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Global redistribution of heat and rainfall",
            commonErrors: ["Thinking El Niño strengthens upwelling — it weakens eastern Pacific upwelling."],
          },
        },
        {
          id: "geo-u1-osq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the combined effects of ocean warming and acidification on marine ecosystems.",
          parts: [
            { label: "a", prompt: "Explain how ocean warming and acidification each stress marine organisms.", marks: 3 },
            { label: "b", prompt: "Describe two ways these pressures interact to harm ecosystems.", marks: 3 },
            { label: "c", prompt: "Evaluate the challenges of managing these ocean threats.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ocean stressors", statement: "Warming and acidification are CO2-driven pressures that interact: warmer, more acidic water reduces oxygen, disrupts metabolism and corroding calcifiers." },
            ],
            steps: [
              { part: "a", reasoning: "Warming: higher temperatures raise metabolic demands, cause bleaching of corals and shift species ranges poleward.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Acidification: lower pH cuts carbonate availability, dissolving shells of corals, shellfish and plankton.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Both stress organisms' ability to build skeletons, reproduce and survive.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Interaction 1: bleached corals are more vulnerable to acidification — weakened skeletons dissolve faster.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Interaction 2: warmer water holds less oxygen while acidification adds stress — compounding food-web collapse.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Together they reduce biodiversity and fisheries productivity more than either alone.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Emissions are global and cumulative — local action cannot stop the drivers alone.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Mitigation requires international CO2 cuts plus local measures (MPAs, emission control), judged as necessary but difficult.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Warming bleaches and shifts species; acidification dissolves shells. (b) Interactions compound harm. (c) Hard to manage — global drivers, need international action.",
            commonErrors: ["Treating warming and acidification as unrelated rather than interacting stressors."],
          },
        },
      ],
    },
    {
      id: "geo-u1-ocean-management",
      title: "Managing oceans and coastal margins",
      skill: "Evaluate marine protection, fisheries management, coastal zone management, ocean governance and responses to marine pollution.",
      lesson: {
        sections: [
          {
            heading: "Marine protection and fisheries",
            body: "**Marine protected areas** (MPAs) restrict fishing and development to conserve biodiversity — e.g. the Great Barrier Reef Marine Park and Papahānaumokuākea. **Fisheries management** uses quotas, marine reserves, closed seasons and gear restrictions to combat overfishing; certification schemes (MSC) reward sustainable practice. Illegal, unreported and unregulated (IUU) fishing undermines all of these.",
          },
          {
            heading: "Coastal zone management and governance",
            body: "**Integrated coastal zone management (ICZM)** balances development and conservation through setback zones, dune stabilisation and managed retreat. **UNCLOS** (1982) divides the ocean into territorial seas, exclusive economic zones (EEZs, 200 nautical miles) and the high seas, assigning rights and duties to states. Enforcement on the high seas remains weak.",
          },
          {
            heading: "Plastic pollution and emerging threats",
            body: "Plastic debris — bags, bottles, microplastics — accumulates in gyres such as the Great Pacific Garbage Patch and enters food webs. Responses include plastic bag bans (Kenya, Rwanda), deposit-return schemes, and treaties like the UN Global Plastics Treaty. Deep-sea mining and climate-driven sea-level rise are newer governance challenges.",
          },
        ],
        keyFormulas: [
          { name: "EEZ", statement: "Exclusive economic zone extends 200 nautical miles — state controls resources" },
          { name: "MPA types", statement: "No-take reserves, partial protection, sustainable-use zones" },
          { name: "Overfishing response", statement: "Quotas + marine reserves + gear rules + enforcement" },
        ],
        workedExample: {
          problem: "Suggest two strategies for managing plastic pollution in the ocean and one limitation of each.",
          solution: "Strategy 1: legislation banning single-use plastics — reduces input at source but requires enforcement and alternatives. Strategy 2: marine protected areas and clean-up — protects ecosystems but clean-up is costly and cannot match the scale of the problem; prevention is more effective than remediation.",
        },
      },
      questions: [
        {
          id: "geo-u1-omq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Under UNCLOS, an exclusive economic zone (EEZ) extends how far from a state's coast?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "12 nautical miles" },
              { id: "b", text: "200 nautical miles" },
              { id: "c", text: "500 nautical miles" },
              { id: "d", text: "The entire ocean basin" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "EEZ", statement: "Exclusive economic zone: a state's rights over resources extend 200 nautical miles from its baseline." },
            ],
            steps: [
              { reasoning: "UNCLOS defines the EEZ as 200 nautical miles.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** 200 nautical miles",
            commonErrors: ["Confusing the 12-nautical-mile territorial sea with the 200-nautical-mile EEZ."],
          },
        },
        {
          id: "geo-u1-omq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two strategies for managing overfishing.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Fisheries management", statement: "Catch quotas, marine reserves, closed seasons, gear restrictions, monitoring and certification." },
            ],
            steps: [
              { reasoning: "Catch quotas (TACs) cap total allowable catch per species or fleet.", marks: 1, markCode: "M" },
              { reasoning: "Marine reserves / no-take zones allow stocks to recover.", marks: 1, markCode: "M" },
              { reasoning: "Closed seasons, mesh-size rules and enforcement reduce juvenile capture and IUU fishing.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Quotas, marine reserves, closed seasons and gear/enforcement rules.",
            commonErrors: ["Listing strategies without explaining how they reduce fishing pressure."],
          },
        },
        {
          id: "geo-u1-omq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why ocean governance is more difficult than managing land-based resources.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Ocean governance", statement: "The ocean is a shared global commons: jurisdiction is divided by UNCLOS but the high seas lack effective enforcement." },
            ],
            steps: [
              { reasoning: "Most ocean space is beyond national jurisdiction (high seas), where no single state is responsible.", marks: 1, markCode: "M" },
              { reasoning: "Resources are mobile — fish stocks and pollution cross EEZ and territorial boundaries.", marks: 1, markCode: "M" },
              { reasoning: "Monitoring and enforcement at sea are expensive and technologically difficult.", marks: 1, markCode: "M" },
              { reasoning: "Result: free-rider problems, IUU fishing and unregulated deep-sea mining persist.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shared jurisdiction, mobile resources and weak enforcement make ocean governance hard.",
            commonErrors: ["Ignoring that EEZs give states control only within 200 nautical miles."],
          },
        },
        {
          id: "geo-u1-omq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the management of marine pollution in a named ocean or coastal region.",
          parts: [
            { label: "a", prompt: "Identify the named region and the main pollutant affecting it.", marks: 2 },
            { label: "b", prompt: "Explain two management strategies used or proposed there.", marks: 3 },
            { label: "c", prompt: "Evaluate the effectiveness of these strategies.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Marine pollution management", statement: "Prevention (source control, legislation) outperforms remediation; effectiveness depends on enforcement and international cooperation." },
            ],
            steps: [
              { part: "a", reasoning: "Named region (e.g. Great Pacific Garbage Patch, Mediterranean, South China Sea).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Main pollutant identified (plastic, oil, agricultural runoff, industrial waste).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Strategy 1: source control — plastic bans, waste treatment, fishing gear rules.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategy 2: MPAs, clean-up technology or international agreements (e.g. MARPOL, plastics treaty).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Strategies correctly linked to the pollutant and region.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: prevention reduces input; MPAs protect habitats from further damage.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: enforcement gaps, transboundary nature, clean-up cost and scale.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement on effectiveness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named region + pollutant. (b) Two strategies. (c) Effectiveness evaluated.",
            commonErrors: ["Describing clean-up alone without addressing the source of pollution."],
          },
        },
        {
          id: "geo-u1-omq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "MPA stands for:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Marine protected area" },
              { id: "b", text: "Marine pollution authority" },
              { id: "c", text: "Multilateral fisheries agreement" },
              { id: "d", text: "Managed port access" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "MPA", statement: "Marine protected area: a defined sea region where human activity is restricted to conserve ecosystems and fisheries." },
            ],
            steps: [
              { reasoning: "MPA is the standard abbreviation for marine protected area.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Marine protected area",
            commonErrors: ["Confusing MPA with other maritime abbreviations such as EEZ or TAC."],
          },
        },
        {
          id: "geo-u1-omq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "An EEZ extends $200$ nautical miles from the baseline. Given $1$ nautical mile $\\approx 1.852$ km, calculate (a) the EEZ width in kilometres and (b) the width of the $12$-nautical-mile territorial sea in kilometres.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 370.4, tolerance: 0.2, unit: "km" },
              { label: "b", answer: 22.2, tolerance: 0.1, unit: "km" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Unit conversion", statement: "Multiply nautical miles by $1.852$ to obtain kilometres." },
            ],
            steps: [
              { part: "a", reasoning: "$200 \\times 1.852 = 370.4$ km.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$12 \\times 1.852 = 22.22 \\approx 22.2$ km.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $370.4$ km; (b) $22.2$ km.",
            commonErrors: ["Confusing territorial sea ($12$ nmi) with EEZ ($200$ nmi)."],
          },
        },
        {
          id: "geo-u1-omq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which of the following is an example of IUU fishing?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Fishing within a quota allocated by a fisheries management organisation" },
              { id: "b", text: "Fishing without a licence or reporting the true catch" },
              { id: "c", text: "Selling fish under an MSC sustainability certificate" },
              { id: "d", text: "Observing a closed season to protect spawning stocks" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "IUU fishing", statement: "Illegal, unreported and unregulated fishing — it undermines quotas, reserves and certification schemes." },
            ],
            steps: [
              { reasoning: "IUU means fishing illegally, unreported or unregulated, e.g. without licences or hiding catches.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Fishing without a licence or misreporting catch",
            commonErrors: ["Thinking any unlicensed activity is fine if the catch is small — IUU is defined by legality and reporting, not scale."],
          },
        },
        {
          id: "geo-u1-omq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Under the '30x30' target, $30\\%$ of the ocean should be protected by $2030$. If the total ocean area is about $361$ million $km^2$, calculate (a) the area to be protected and (b) the area currently left unprotected if $8\\%$ is already protected.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 108.3, tolerance: 0.2, unit: "million km²" },
              { label: "b", answer: 296.02, tolerance: 0.1, unit: "million km²" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "30x30 target", statement: "Protecting 30% of ocean area by 2030 is a global conservation goal to safeguard marine biodiversity." },
            ],
            steps: [
              { part: "a", reasoning: "$0.30 \\times 361 = 108.3$ million $km^2$.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Unprotected now: $(1 - 0.08) \\times 361 = 0.92 \\times 361 = 296.02$ million $km^2$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Correct application of percentage to total area.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $108.3$ million $km^2$; (b) $296.02$ million $km^2$.",
            commonErrors: ["Using $108.3$ as the 'still unprotected' figure — the question asks for all currently unprotected area."],
          },
        },
        {
          id: "geo-u1-omq9",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "What is the main aim of integrated coastal zone management (ICZM)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To maximise port throughput and shipping" },
              { id: "b", text: "To balance development and conservation of coastal resources" },
              { id: "c", text: "To transfer all coastal land to private owners" },
              { id: "d", text: "To ban all human activity on coasts" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "ICZM", statement: "Integrated coastal zone management balances economic development with conservation through planning tools such as setback zones and managed retreat." },
            ],
            steps: [
              { reasoning: "ICZM seeks sustainable balance between development and environmental protection.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** To balance development and conservation",
            commonErrors: ["Thinking ICZM means excluding development entirely — it integrates, not prohibits."],
          },
        },
        {
          id: "geo-u1-omq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Under UNCLOS, which zone gives a coastal state sovereign rights over living and non-living resources out to $200$ nautical miles?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Territorial sea" },
              { id: "b", text: "Exclusive economic zone (EEZ)" },
              { id: "c", text: "High seas" },
              { id: "d", text: "Contiguous zone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "UNCLOS zones", statement: "Territorial sea $12$ nmi (sovereignty), contiguous zone $24$ nmi (limited control), EEZ $200$ nmi (resource rights), high seas (open to all)." },
            ],
            steps: [
              { reasoning: "The EEZ extends resource rights to $200$ nautical miles.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Exclusive economic zone",
            commonErrors: ["Confusing EEZ with the narrower territorial sea — sovereignty vs resource rights differ."],
          },
        },
        {
          id: "geo-u1-omq11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A fishery's total allowable catch (TAC) is set at $40\\,000$ tonnes, but actual catch is reported as $55\\,000$ tonnes. Calculate (a) the amount by which the catch exceeded the quota and (b) the over-quota percentage. Suggest one reason this happens.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 15000, tolerance: 1, unit: "tonnes" },
              { label: "b", answer: 37.5, tolerance: 0.2, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Catch quotas", statement: "TACs cap catches, but enforcement gaps, misreporting and IUU fishing cause quota overruns." },
            ],
            steps: [
              { part: "a", reasoning: "$55\\,000 - 40\\,000 = 15\\,000$ tonnes over.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$15\\,000 / 40\\,000 \\times 100 = 37.5\\%$.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Reason: weak enforcement, IUU fishing, or misreported catch.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $15\\,000$ t; (b) $37.5\\%$; e.g. IUU fishing or weak enforcement.",
            commonErrors: ["Dividing by $55\\,000$ instead of the quota $40\\,000$ when finding the percentage."],
          },
        },
        {
          id: "geo-u1-omq12",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which is a significant limitation of marine protected areas as a conservation tool?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They can displace fishing effort to unprotected areas and require costly enforcement" },
              { id: "b", text: "They eliminate all marine biodiversity" },
              { id: "c", text: "They can only be established in freshwater lakes" },
              { id: "d", text: "They guarantee instant recovery of all fish stocks" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "MPA limitations", statement: "MPAs displace fishing pressure ('leakage'), need patrol/enforcement, and may conflict with local livelihoods." },
            ],
            steps: [
              { reasoning: "MPAs can push fishing into adjacent waters and depend on expensive monitoring.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Displacement of effort and enforcement costs",
            commonErrors: ["Assuming MPAs are costless or instantly effective — effectiveness depends on design and enforcement."],
          },
        },
        {
          id: "geo-u1-omq13",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "How many nautical miles offshore does a state's territorial sea extend under UNCLOS?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 12, tolerance: 0.01, unit: "nautical miles" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Territorial sea", statement: "Under UNCLOS, territorial seas extend $12$ nautical miles where the state exercises full sovereignty." },
            ],
            steps: [
              { reasoning: "Territorial sea = $12$ nautical miles; EEZ = $200$ nautical miles.", marks: 1, markCode: "M" },
              { reasoning: "Answer: $12$ nautical miles.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$12$ nautical miles.",
            commonErrors: ["Confusing the $12$ nmi territorial sea with the $200$ nmi EEZ."],
          },
        },
        {
          id: "geo-u1-omq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Ocean plastic entering the Great Pacific Garbage Patch is estimated at $1.15$ million tonnes per year. If $75\\%$ of it comes from land-based sources and the rest from sea-based sources, calculate (a) the land-based contribution and (b) the sea-based contribution in tonnes per year.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 862500, tolerance: 100, unit: "tonnes/year" },
              { label: "b", answer: 287500, tolerance: 100, unit: "tonnes/year" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Plastic pollution", statement: "Most ocean plastic comes from land-based sources (waste, runoff), so source control targets rivers and land waste." },
            ],
            steps: [
              { part: "a", reasoning: "$0.75 \\times 1{,}150{,}000 = 862{,}500$ tonnes/year.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "$0.25 \\times 1{,}150{,}000 = 287{,}500$ tonnes/year (or $1{,}150{,}000 - 862{,}500$).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Percentages sum to $100\\%$ of the total input.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) $862{,}500$ t/yr; (b) $287{,}500$ t/yr.",
            commonErrors: ["Swapping the percentages — land-based is the $75\\%$ share, not the remainder."],
          },
        },
        {
          id: "geo-u1-omq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Why is deep-sea mining a difficult problem for ocean governance?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It occurs mainly in national EEZs where rules are clear" },
              { id: "b", text: "It lies largely on the high seas where enforcement is weak and environmental impacts are uncertain" },
              { id: "c", text: "It produces no minerals of economic value" },
              { id: "d", text: "It has already been banned worldwide" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Deep-sea mining", statement: "Seabed minerals lie on the high seas or in poorly governed areas; impacts on fragile ecosystems are uncertain and enforcement is weak." },
            ],
            steps: [
              { reasoning: "Deep-sea mining targets high-seas areas beyond national jurisdiction with uncertain ecological effects.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Weak enforcement and uncertain impacts on the high seas",
            commonErrors: ["Assuming existing treaties fully regulate it — a dedicated seabed mining regime is still evolving."],
          },
        },
        {
          id: "geo-u1-omq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the role of international agreements in managing the world's oceans.",
          parts: [
            { label: "a", prompt: "Outline the main provisions of UNCLOS for dividing the ocean.", marks: 3 },
            { label: "b", prompt: "Explain two other international agreements or instruments used for ocean management.", marks: 3 },
            { label: "c", prompt: "Evaluate the effectiveness of international ocean governance.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "UNCLOS", statement: "The UN Convention on the Law of the Sea divides the ocean into territorial sea, contiguous zone, EEZ, continental shelf and high seas, assigning rights and duties." },
            ],
            steps: [
              { part: "a", reasoning: "Territorial sea ($12$ nmi) and contiguous zone ($24$ nmi) give coastal states sovereignty and limited control.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "EEZ ($200$ nmi) grants resource rights; high seas remain open to all states.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Continental shelf rights and duties (exploration, conservation) complete the framework.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Agreement 1: MARPOL or fishing agreements (e.g. RFMO catch limits) regulating pollution or stocks.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Agreement 2: UN Global Plastics Treaty or CBD targets (e.g. 30x30) addressing plastic and conservation.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Agreements correctly identified with their management purpose.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Effective where states comply — EEZs give clear national control and MPAs/quota systems work.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "But weak on the high seas, enforcement gaps and free-rider problems limit overall effectiveness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) UNCLOS zones described. (b) Two agreements identified. (c) Mixed effectiveness — strong in EEZs, weak on high seas.",
            commonErrors: ["Listing agreements without stating what each regulates."],
          },
        },
      ],
    },
  ],
};
