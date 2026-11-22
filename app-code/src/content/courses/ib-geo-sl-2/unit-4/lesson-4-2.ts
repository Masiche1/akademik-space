import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "geo-u4-lesson-4-2",
  code: "4-2",
  title: "Ecosystem Services and Their Value",
  goal: "I CAN classify ecosystem services and evaluate their economic, social and environmental value.",
  standards: ["Paper 1", "Paper 2", "Ecosystems"],
  vocabulary: [
    { term: "Ecosystem services", definition: "The benefits humans derive from ecosystems — food, water, climate regulation, recreation." },
    { term: "Provisioning services", definition: "Products obtained from ecosystems: food, fresh water, timber, fuel, medicine." },
    { term: "Regulating services", definition: "Ecosystem processes that moderate conditions: climate regulation, flood control, water purification." },
    { term: "Cultural services", definition: "Non-material benefits: recreation, spiritual value, education, aesthetic appreciation." },
    { term: "Supporting services", definition: "Services that enable others: soil formation, nutrient cycling, photosynthesis, habitat provision." },
    { term: "Valuation", definition: "Assigning economic or social value to ecosystem services to inform decisions." },
  ],
  concepts: [
    {
      id: "geo-u4-service-types",
      title: "Types of ecosystem services",
      skill: "Classify ecosystem services into provisioning, regulating, cultural and supporting categories with examples.",
      lesson: {
        sections: [
          {
            heading: "Provisioning and regulating services",
            body: "**Provisioning services** supply material goods: crops, fish, timber, fresh water, medicinal compounds. **Regulating services** control environmental conditions: forests regulate climate by storing carbon, wetlands filter water and buffer floods, mangroves protect coasts from storms. These are often invisible until lost.",
          },
          {
            heading: "Cultural and supporting services",
            body: "**Cultural services** include recreation (parks, diving reefs), spiritual significance (sacred groves), education and aesthetic value. **Supporting services** underpin all others: soil formation, nutrient cycling, primary production and habitat provision. They are usually taken for granted but are essential foundations.",
          },
          {
            heading: "Interdependence",
            body: "Services interconnect: supporting services enable provisioning; regulating services maintain conditions for both. A wetland provides water purification (regulating), fish habitat (supporting), food (provisioning) and recreation (cultural). Losing supporting services cascades to collapse all others.",
          },
        ],
        keyFormulas: [
          { name: "Four service types", statement: "Provisioning, regulating, cultural, supporting" },
          { name: "Supporting role", statement: "Soil formation, nutrient cycling, photosynthesis, habitat — foundation for all services" },
          { name: "Example wetland", statement: "Water purification + flood buffer + fish nursery + recreation" },
        ],
        workedExample: {
          problem: "Classify the following as provisioning, regulating, cultural or supporting: timber, flood control by wetlands, spiritual value of a forest, soil formation.",
          solution: "Timber = provisioning (material product). Flood control by wetlands = regulating (moderates conditions). Spiritual value of a forest = cultural (non-material benefit). Soil formation = supporting (enables other services).",
        },
      },
      questions: [
        {
          id: "geo-u4-svq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which is a regulating ecosystem service?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Timber production" },
              { id: "b", text: "Spiritual value of a forest" },
              { id: "c", text: "Flood control by wetlands" },
              { id: "d", text: "Soil formation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Regulating services", statement: "Ecosystem processes that moderate environmental conditions — climate, water, flood control." },
            ],
            steps: [
              { reasoning: "Flood control regulates conditions; timber is provisioning, spiritual value is cultural, soil formation is supporting.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Flood control by wetlands",
            commonErrors: ["Confusing regulating with provisioning — regulation moderates, provisioning supplies."],
          },
        },
        {
          id: "geo-u4-svq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two supporting ecosystem services.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Supporting services", statement: "Soil formation, nutrient cycling, photosynthesis/primary production, habitat provision." },
            ],
            steps: [
              { reasoning: "Soil formation: weathering and decomposition create the medium for plant growth.", marks: 1, markCode: "M" },
              { reasoning: "Nutrient cycling: decomposers return essential elements for reuse.", marks: 1, markCode: "M" },
              { reasoning: "Photosynthesis/primary production captures energy forming the base of all food webs.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Soil formation, nutrient cycling, primary production, habitat provision.",
            commonErrors: ["Listing provisioning services like food as supporting."],
          },
        },
        {
          id: "geo-u4-svq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why supporting services are considered the foundation of all other ecosystem services.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Supporting foundation", statement: "Without soil formation, nutrient cycling and primary production, no other services can operate." },
            ],
            steps: [
              { reasoning: "Supporting services create the conditions for all life — soil, nutrients, energy capture.", marks: 1, markCode: "M" },
              { reasoning: "Provisioning needs producers (photosynthesis); regulating needs functioning ecosystems.", marks: 1, markCode: "M" },
              { reasoning: "If supporting services fail, the entire service cascade collapses.", marks: 1, markCode: "R" },
              { reasoning: "This is why soil degradation threatens food security globally.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Supporting services enable all others — their failure collapses the whole system.",
            commonErrors: ["Treating supporting services as less important — they are prerequisites."],
          },
        },
        {
          id: "geo-u4-svq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the ecosystem services provided by a named ecosystem.",
          parts: [
            { label: "a", prompt: "Identify the named ecosystem.", marks: 2 },
            { label: "b", prompt: "Explain one service from each of the four categories.", marks: 4 },
            { label: "c", prompt: "Evaluate the value of these services to people.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Service valuation", statement: "Ecosystems provide multiple service types; their value includes economic, social and environmental dimensions." },
            ],
            steps: [
              { part: "a", reasoning: "Named ecosystem (e.g. coral reef, rainforest, wetland, mangrove).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate identification with brief context.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Provisioning: food, timber, medicine — specific to ecosystem.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Regulating: climate, flood control, water purification.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Cultural: recreation, spiritual, aesthetic.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Supporting: nutrient cycling, habitat, primary production.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Economic value: tourism, fisheries, avoided flood damage.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Social/environmental value + reasoned judgement on overall worth.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named ecosystem. (b) Four service types. (c) Value evaluated.",
            commonErrors: ["Listing services without explaining how the ecosystem provides them."],
          },
        },
        {
          id: "geo-u4-svq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Wild salmon harvested from a river for food is an example of which ecosystem service?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Provisioning service" },
              { id: "b", text: "Supporting service" },
              { id: "c", text: "Regulating service" },
              { id: "d", text: "Cultural service" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Provisioning service", statement: "Ecosystem service supplying material goods — food, water, timber, medicine." },
            ],
            steps: [
              { reasoning: "Food harvested from an ecosystem is a material product.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Provisioning",
            commonErrors: ["Classifying food production as regulating or cultural."],
          },
        },
        {
          id: "geo-u4-svq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A wetland that naturally filters pollutants from water provides a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Regulating service" },
              { id: "b", text: "Cultural service" },
              { id: "c", text: "Provisioning service" },
              { id: "d", text: "Non-service" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Regulating service", statement: "Service that moderates environmental conditions — water purification, flood control, climate regulation." },
            ],
            steps: [
              { reasoning: "Water purification controls environmental quality — a regulating function.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Regulating",
            commonErrors: ["Confusing water purification (regulating) with water supply (provisioning)."],
          },
        },
        {
          id: "geo-u4-svq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Soil formation and nutrient cycling are classified as supporting services because they:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Underpin all other services by maintaining ecosystem function" },
              { id: "b", text: "Provide direct material benefits to humans" },
              { id: "c", text: "Generate tourism revenue" },
              { id: "d", text: "Only occur in tropical ecosystems" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Supporting service", statement: "Process that enables all other services — soil formation, nutrient cycling, primary production, habitat." },
            ],
            steps: [
              { reasoning: "Supporting services are the foundation enabling provisioning, regulating and cultural services.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Underpin all other services",
            commonErrors: ["Treating supporting services as a separate benefit rather than the foundation."],
          },
        },
        {
          id: "geo-u4-svq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A mangrove forest that reduces wave energy and protects coastal settlements provides which service?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Regulating service via coastal protection" },
              { id: "b", text: "Provisioning service via timber" },
              { id: "c", text: "Supporting service via photosynthesis only" },
              { id: "d", text: "Cultural service via recreation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Regulating service", statement: "Moderation of environmental hazards — storm buffering, flood control, coastal protection." },
            ],
            steps: [
              { reasoning: "Reducing wave/storm impact moderates environmental conditions.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Regulating (coastal protection)",
            commonErrors: ["Selecting provisioning because mangroves also supply timber — the question specifies wave protection."],
          },
        },
        {
          id: "geo-u4-svq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Why might losing a supporting service cause collapse of all other service types?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Other services depend on supporting processes like nutrient cycling" },
              { id: "b", text: "Only cultural services depend on supporting services" },
              { id: "c", text: "Supporting services are independent of other services" },
              { id: "d", text: "Supporting services can be replaced by technology instantly" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Service interdependence", statement: "Supporting services (nutrient cycling, soil formation) enable provisioning, regulating and cultural services." },
            ],
            steps: [
              { reasoning: "If nutrient cycling or habitat provision fails, all dependent services decline.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Other services depend on supporting processes",
            commonErrors: ["Not recognising the dependency chain between service categories."],
          },
        },
        {
          id: "geo-u4-svq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "A coral reef provides nursery habitat for fish, which later support fisheries. The nursery function is best classified as:",
          response: { type: "numeric", parts: [{ label: "Service category (1=provisioning, 2=regulating, 3=cultural, 4=supporting)", answer: 4, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Supporting service", statement: "Habitat provision underpins provisioning services like fisheries." },
            ],
            steps: [
              { reasoning: "Habitat provision is a supporting service that enables fish provisioning.", working: "habitat \\to supporting", marks: 1, markCode: "M" },
              { reasoning: "Category = supporting (4).", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Supporting service (4)",
            commonErrors: ["Classifying habitat as provisioning because it relates to fish."],
          },
        },
        {
          id: "geo-u4-svq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "How many of the four ecosystem service categories involve non-material benefits to humans?",
          response: { type: "numeric", parts: [{ label: "Number of categories", answer: 2, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "comparison", name: "Service categories", statement: "Cultural services are non-material; provisioning and regulating provide material/physical benefits; supporting underpins." },
            ],
            steps: [
              { reasoning: "Cultural (and arguably aesthetic/spiritual) benefits are non-material.", working: "cultural", marks: 1, markCode: "M" },
              { reasoning: "Counting clearly non-material categories gives $2$ (cultural; supporting is foundational rather than a direct benefit).", working: "2", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$2$ categories (cultural, and supporting as non-direct)",
            commonErrors: ["Counting all four categories as providing material goods."],
          },
        },
        {
          id: "geo-u4-svq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A named ecosystem provides 4 service types. If each of provisioning, regulating, cultural and supporting is scored 0–10 and the ecosystem scores 8, 6, 9 and 5 respectively, what is its total service score out of 40?",
          response: { type: "numeric", parts: [{ label: "Total score out of 40", answer: 28, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Service scoring", statement: "Sum scores across all service categories." },
            ],
            steps: [
              { reasoning: "Add the four category scores.", working: "8 + 6 + 9 + 5", marks: 1, markCode: "M" },
              { reasoning: "Sum $= 28$ out of a maximum of $40$.", working: "28", marks: 1, markCode: "M" },
              { reasoning: "Total service score is $28/40$.", working: "28", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$28$ out of $40$",
            commonErrors: ["Averaging instead of summing the scores."],
          },
        },
        {
          id: "geo-u4-svq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A study values a forest's services: timber $\\$40$ million, carbon storage $\\$25$ million, recreation $\\$15$ million. Provisioning accounts for what percentage of total value?",
          response: { type: "numeric", parts: [{ label: "Provisioning share (%)", answer: 50, tolerance: 0, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Value share", statement: "Category share $= \\frac{\\text{category value}}{\\text{total value}} \\times 100$." },
            ],
            steps: [
              { reasoning: "Total value $= 40 + 25 + 15 = 80$ million.", working: "40 + 25 + 15 = 80", marks: 1, markCode: "M" },
              { reasoning: "Provisioning (timber) share $= 40/80$.", working: "\\frac{40}{80} = 0.5", marks: 1, markCode: "M" },
              { reasoning: "Share $= 50\\%$.", working: "50\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50\\%$",
            commonErrors: ["Comparing timber only to carbon storage instead of total value."],
          },
        },
        {
          id: "geo-u4-svq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which ecosystem provides an example of all four service types simultaneously?",
          response: { type: "numeric", parts: [{ label: "Number of service categories typically co-provided by a wetland (out of 4)", answer: 4, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Wetland multifunctionality", statement: "A wetland provides water purification (regulating), fish (provisioning), recreation (cultural) and nutrient cycling/habitat (supporting)." },
            ],
            steps: [
              { reasoning: "Wetlands exemplify interdependence across all four categories.", working: "4 categories", marks: 1, markCode: "M" },
              { reasoning: "All $4$ categories are typically present.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ categories",
            commonErrors: ["Listing only provisioning and regulating for wetlands."],
          },
        },
        {
          id: "geo-u4-svq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "If a development removes a wetland providing flood protection valued at avoiding $\\$2$ million in damages per year, and the development earns $\\$1.5$ million per year, what is the annual net benefit of keeping the wetland (in $\\$$ millions)?",
          response: { type: "numeric", parts: [{ label: "Annual net benefit of keeping wetland ($ million)", answer: 0.5, tolerance: 0, unit: "$ million" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Net benefit", statement: "Net benefit $= $ avoided cost $-$ forgone development income." },
            ],
            steps: [
              { reasoning: "Compare avoided damages with forgone income.", working: "2.0 - 1.5", marks: 1, markCode: "M" },
              { reasoning: "Net benefit $= \\$0.5$ million per year in favour of the wetland.", working: "0.5", marks: 1, markCode: "M" },
              { reasoning: "Keeping the wetland is economically preferable by $\\$0.5$M/yr.", working: "0.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$0.5$ million per year",
            commonErrors: ["Ignoring the forgone development income in the calculation."],
          },
        },
        {
          id: "geo-u4-svq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the ecosystem services of a named ecosystem and their interdependence.",
          parts: [
            { label: "a", prompt: "Identify the ecosystem and name one service in each category.", marks: 2 },
            { label: "b", prompt: "Explain how the supporting services underpin the others.", marks: 3 },
            { label: "c", prompt: "Evaluate the consequences of losing one supporting service.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Service interdependence", statement: "Supporting services (nutrient cycling, soil formation, habitat) enable all other service categories." },
            ],
            steps: [
              { part: "a", reasoning: "Named ecosystem identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "One correct service per category given.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Supporting processes (nutrient cycling, soil formation) maintain ecosystem function.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Without supporting services, provisioning/regulating/cultural services decline.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Mechanism explained for the named ecosystem.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Loss of e.g. habitat provision or nutrient cycling cascades to other services.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Specific consequences identified (fisheries collapse, flood risk, etc.).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned judgement on severity and reversibility.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Ecosystem + 4 services. (b) Supporting underpinning. (c) Loss consequences.",
            commonErrors: ["Treating service categories as independent rather than interdependent."],
          },
        },
      ],
    },
    {
      id: "geo-u4-service-value",
      title: "Valuing ecosystem services",
      skill: "Evaluate methods of valuing ecosystem services and the implications for conservation decisions.",
      lesson: {
        sections: [
          {
            heading: "Why value services?",
            body: "Ecosystem services are often treated as free, leading to overexploitation. **Valuation** makes their worth explicit, informing decisions about development vs conservation. Without valuation, a wetland's flood protection and water purification go uncounted, so draining it appears 'profitable' until the costs emerge.",
          },
          {
            heading: "Valuation methods",
            body: "**Market pricing** values traded goods (timber, fish). **Revealed preference** infers value from behaviour (property prices near parks). **Stated preference** asks people directly (willingness to pay surveys). **Replacement cost** estimates what it would cost to provide the service artificially (water filtration). Each has limitations.",
          },
          {
            heading: "Implications and critiques",
            body: "Valuation can justify conservation — Costa Rica pays landowners to protect forests for watershed services. But critics argue monetising nature is ethically problematic and difficult: cultural and spiritual values resist pricing. Effective policy combines economic valuation with ecological and social assessment.",
          },
        ],
        keyFormulas: [
          { name: "Valuation methods", statement: "Market, revealed preference, stated preference, replacement cost" },
          { name: "Payments for services", statement: "PES — compensate landowners for conservation (Costa Rica forests)" },
          { name: "Critique", statement: "Some values (spiritual, biodiversity existence) resist monetary pricing" },
        ],
        workedExample: {
          problem: "Explain how ecosystem service valuation can support conservation.",
          solution: "Valuation reveals hidden benefits — a forest's carbon storage, flood regulation and water purification may exceed the timber's market value. Payments for Ecosystem Services (PES) then compensate landowners for protecting rather than clearing land, aligning economic incentives with conservation — as in Costa Rica's forest protection programme.",
        },
      },
      questions: [
        {
          id: "geo-u4-vq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Payments for Ecosystem Services (PES) involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Compensating landowners for conserving ecosystems" },
              { id: "b", text: "Paying people to exploit natural resources" },
              { id: "c", text: "Taxing tourists visiting national parks" },
              { id: "d", text: "Selling ecosystem services to corporations" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "PES", statement: "Payments to landowners/stewards for maintaining ecosystem services like watershed protection." },
            ],
            steps: [
              { reasoning: "PES compensates conservation, aligning incentives with ecosystem protection.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Compensating landowners for conservation",
            commonErrors: ["Confusing PES with ecotourism fees or resource extraction payments."],
          },
        },
        {
          id: "geo-u4-vq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two methods of valuing ecosystem services.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Valuation methods", statement: "Market pricing, revealed preference, stated preference, replacement cost." },
            ],
            steps: [
              { reasoning: "Market pricing: values traded goods like timber, fish, crops at market prices.", marks: 1, markCode: "M" },
              { reasoning: "Revealed preference: infers value from behaviour — e.g. higher property prices near parks.", marks: 1, markCode: "M" },
              { reasoning: "Replacement cost: estimates cost of artificially providing the service (water filtration).", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Market pricing, revealed/stated preference, or replacement cost.",
            commonErrors: ["Listing only one method or confusing valuation with pricing alone."],
          },
        },
        {
          id: "geo-u4-vq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain why ecosystem service valuation is controversial.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Valuation controversy", statement: "Monetising nature is ethically contested; many values resist pricing and methods have limitations." },
            ],
            steps: [
              { reasoning: "Ethical objection: nature has intrinsic value beyond economic worth — monetising commodifies it.", marks: 1, markCode: "M" },
              { reasoning: "Methodological limits: cultural, spiritual and existence values cannot be easily priced.", marks: 1, markCode: "M" },
              { reasoning: "Valuation can be manipulated to justify development if values are underestimated.", marks: 1, markCode: "R" },
              { reasoning: "Critics argue pricing ecosystems may legitimise their destruction ('pay to pollute').", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ethical objections, unpriceable values and manipulation risks make valuation controversial.",
            commonErrors: ["Presenting valuation as unproblematic — acknowledge the critiques."],
          },
        },
        {
          id: "geo-u4-vq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine how ecosystem service valuation influences conservation policy in a named place.",
          parts: [
            { label: "a", prompt: "Identify the named place and ecosystem.", marks: 2 },
            { label: "b", prompt: "Explain how services were valued and used in decisions.", marks: 3 },
            { label: "c", prompt: "Evaluate the effectiveness of this approach.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Valuation policy", statement: "Valuation can redirect incentives toward conservation, but effectiveness depends on method, enforcement and local context." },
            ],
            steps: [
              { part: "a", reasoning: "Named place (e.g. Costa Rica, New York watershed, Amazon) identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Ecosystem and its key services described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Valuation method used (market, replacement, PES) explained.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "How valuation influenced a specific policy decision.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clear link between valuation and conservation outcome.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: aligned incentives, funded conservation, measurable outcomes.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: valuation gaps, enforcement, equity issues.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named place + ecosystem. (b) Valuation → policy link. (c) Effectiveness evaluated.",
            commonErrors: ["Describing valuation without linking it to a policy outcome."],
          },
        },
        {
          id: "geo-u4-vq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Market pricing values ecosystem services by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Surveying spiritual significance" },
              { id: "b", text: "Asking people what they would hypothetically pay" },
              { id: "c", text: "Using prices of traded goods like timber or fish" },
              { id: "d", text: "Estimating replacement cost of artificial equivalents" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Market pricing", statement: "Valuation using actual market prices of traded ecosystem goods (timber, fish, water)." },
            ],
            steps: [
              { reasoning: "Market pricing relies on observable prices for traded products.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Traded goods prices",
            commonErrors: ["Confusing market pricing with stated-preference surveys."],
          },
        },
        {
          id: "geo-u4-vq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Replacement cost valuation estimates the value of an ecosystem service by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Property prices near green space" },
              { id: "b", text: "The cost of building an artificial system that provides the same service" },
              { id: "c", text: "The number of species present" },
              { id: "d", text: "The price people say they would pay in surveys" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Replacement cost", statement: "Valuation estimating what it would cost to replace a service artificially (e.g. water filtration plants)." },
            ],
            steps: [
              { reasoning: "Replacement cost values the service by the cost of a technological substitute.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (c) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Cost of artificial substitute",
            commonErrors: ["Confusing replacement cost with revealed or stated preference."],
          },
        },
        {
          id: "geo-u4-vq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Payments for Ecosystem Services (PES) work by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Selling ecosystem services to the highest bidder" },
              { id: "b", text: "Taxing all agricultural production equally" },
              { id: "c", text: "Compensating landowners for conserving land that provides services" },
              { id: "d", text: "Fining landowners who clear forests" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "PES", statement: "Payments for Ecosystem Services — financial incentives compensating stewards for conservation (e.g. Costa Rica)." },
            ],
            steps: [
              { reasoning: "PES aligns economic incentives by paying for conservation rather than punishment.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Compensating conservation",
            commonErrors: ["Describing PES as a tax or fine rather than a payment for service provision."],
          },
        },
        {
          id: "geo-u4-vq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The main critique of monetary valuation of ecosystem services is that:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is always too expensive to implement" },
              { id: "b", text: "It only works for provisioning services" },
              { id: "c", text: "Some values — spiritual, existence, cultural — resist pricing" },
              { id: "d", text: "It eliminates the need for conservation" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Valuation critique", statement: "Cultural, spiritual and existence values cannot be meaningfully monetised; valuation may legitimise exploitation." },
            ],
            steps: [
              { reasoning: "Monetary methods fail to capture non-market values like spiritual significance.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(c)** Some values resist pricing",
            commonErrors: ["Claiming valuation is useless rather than acknowledging partial coverage."],
          },
        },
        {
          id: "geo-u4-vq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Why can revealed-preference valuation (e.g. property prices near parks) underestimate total ecosystem value?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It ignores all non-market services entirely" },
              { id: "b", text: "It overestimates cultural values" },
              { id: "c", text: "Property prices are always accurate measures" },
              { id: "d", text: "It only captures values that affect market behaviour" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Revealed preference limits", statement: "Infers value only from observable behaviour; misses values not expressed in markets." },
            ],
            steps: [
              { reasoning: "Only services influencing market choices (like nearby green space premiums) are captured.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(d)** Only market-expressed values captured",
            commonErrors: ["Confusing revealed preference with stated preference methods."],
          },
        },
        {
          id: "geo-u4-vq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which valuation method would estimate the worth of a wetland's water filtration by the cost of building a treatment plant?",
          response: { type: "numeric", parts: [{ label: "Method number (1=market, 2=revealed, 3=stated, 4=replacement)", answer: 4, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Replacement cost", statement: "Value = cost of artificial substitute providing the same service." },
            ],
            steps: [
              { reasoning: "Building a treatment plant is the artificial replacement for natural filtration.", working: "replacement", marks: 1, markCode: "M" },
              { reasoning: "Method = replacement cost (4).", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Replacement cost (4)",
            commonErrors: ["Choosing market pricing when no traded good exists."],
          },
        },
        {
          id: "geo-u4-vq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A forest provides timber worth $\\$50$M, watershed protection worth $\\$30$M and recreation worth $\\$20$M per year. What is the total annual value of its services (in $\\$$ millions)?",
          response: { type: "numeric", parts: [{ label: "Total annual value ($ million)", answer: 100, tolerance: 0, unit: "$ million" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Total value", statement: "Sum values across all service categories." },
            ],
            steps: [
              { reasoning: "Add timber, watershed and recreation values.", working: "50 + 30 + 20", marks: 1, markCode: "M" },
              { reasoning: "Total $= \\$100$ million per year.", working: "100", marks: 1, markCode: "M" },
              { reasoning: "Total annual service value is $\\$100$M.", working: "100", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$100$ million per year",
            commonErrors: ["Including only provisioning (timber) and omitting regulating and cultural values."],
          },
        },
        {
          id: "geo-u4-vq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "If a PES programme pays landowners $\\$120$ per hectare per year to conserve forest, how much would a 250-hectare farm receive annually?",
          response: { type: "numeric", parts: [{ label: "Annual payment ($)", answer: 30000, tolerance: 0, unit: "$" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "PES payment", statement: "Payment $=$ rate per hectare $\\times$ hectares conserved." },
            ],
            steps: [
              { reasoning: "Multiply the per-hectare rate by area.", working: "120 \\times 250", marks: 1, markCode: "M" },
              { reasoning: "Payment $= \\$30{,}000$ per year.", working: "30{,}000", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$30{,}000$ per year",
            commonErrors: ["Forgetting to multiply by the number of hectares."],
          },
        },
        {
          id: "geo-u4-vq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A stated-preference survey finds people would pay $\\$15$ per household per year for cleaner air from a forest. If 10,000 households are surveyed and all would pay, what is the total willingness to pay (in $\\$$ thousands)?",
          response: { type: "numeric", parts: [{ label: "Total willingness to pay ($ thousand)", answer: 150, tolerance: 0, unit: "$ thousand" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Willingness to pay aggregation", statement: "Total WTP $=$ per-household WTP $\\times$ number of households." },
            ],
            steps: [
              { reasoning: "Multiply per-household WTP by number of households.", working: "15 \\times 10{,}000", marks: 1, markCode: "M" },
              { reasoning: "Total $= \\$150{,}000 = \\$150$ thousand.", working: "150{,}000 \\text{ dollars}", marks: 1, markCode: "M" },
              { reasoning: "Total willingness to pay is $\\$150$ thousand per year.", working: "150", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$150$ thousand per year",
            commonErrors: ["Reporting dollars instead of the requested thousands, or forgetting to multiply."],
          },
        },
        {
          id: "geo-u4-vq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "How many distinct valuation methods are typically recognised in ecosystem service assessment?",
          response: { type: "numeric", parts: [{ label: "Number of methods", answer: 4, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Valuation methods", statement: "Market pricing, revealed preference, stated preference and replacement cost." },
            ],
            steps: [
              { reasoning: "The four standard methods are market, revealed, stated and replacement.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Total of $4$ recognised methods.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ methods",
            commonErrors: ["Listing only market-based approaches and missing survey and replacement methods."],
          },
        },
        {
          id: "geo-u4-vq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A wetland provides flood protection saving $\\$5$ million/year and water filtration whose replacement plant would cost $\\$3$ million to build with $\\$0.5$ million annual operating cost. What is the total annual value of these two regulating services (in $\\$$ millions)?",
          response: { type: "numeric", parts: [{ label: "Total annual regulating value ($ million)", answer: 8.5, tolerance: 0, unit: "$ million" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Replacement cost annualisation", statement: "Replacement value per year $=$ capital cost amortised + annual operating cost; here use avoided cost plus operating cost." },
            ],
            steps: [
              { reasoning: "Flood protection value is the avoided damage: $\\$5$M/yr.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "Filtration value approximates avoided replacement cost including operation: $3 + 0.5 = \\$3.5$M/yr.", working: "3 + 0.5 = 3.5", marks: 1, markCode: "M" },
              { reasoning: "Total $= 5 + 3.5 = \\$8.5$ million per year.", working: "8.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\$8.5$ million per year",
            commonErrors: ["Using only capital cost without annual operating cost, or omitting flood protection."],
          },
        },
        {
          id: "geo-u4-vq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine how ecosystem service valuation can influence conservation decisions in a named place.",
          parts: [
            { label: "a", prompt: "Identify the place and the ecosystem services valued.", marks: 2 },
            { label: "b", prompt: "Explain the valuation method used and how it informed a decision.", marks: 3 },
            { label: "c", prompt: "Evaluate the strengths and limitations of relying on valuation.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Valuation in policy", statement: "Valuation makes hidden services visible to decision-makers; effectiveness depends on method coverage and enforcement." },
            ],
            steps: [
              { part: "a", reasoning: "Named place (e.g. Costa Rica, New York, Amazon) identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Ecosystem and its valued services described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Valuation method (market/revealed/stated/replacement/PES) explained.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Clear link to a specific conservation decision or policy.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Accurate application to the named case.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Strength: revealed hidden value, aligned incentives, funded conservation.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Limitation: unpriced values, equity, enforcement challenges.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement on reliance on valuation.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Place + services. (b) Method → decision link. (c) Strengths/limits evaluated.",
            commonErrors: ["Describing valuation in general terms without a named place or decision."],
          },
        },
      ],
    },
  ],
};
