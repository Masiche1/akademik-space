import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "olbus-u6-lesson-6-1",
  code: "6-1",
  title: "Economic Influences",
  goal: "I CAN explain how economic factors affect business activity.",
  standards: ["7100 6.1"],
  vocabulary: [
    { term: "Inflation", definition: "General rise in prices over time." },
    { term: "Interest rate", definition: "Cost of borrowing money, set by central bank." },
    { term: "Exchange rate", definition: "Value of one currency relative to another." },
    { term: "Recession", definition: "Period of economic decline with falling output and jobs." },
    { term: "Economic growth", definition: "Increase in a country's output and income." },
    { term: "Business cycle", definition: "Fluctuations between growth and recession." },
  ],
  concepts: [
    {
      id: "olbus-u6-economic",
      title: "Economic factors",
      skill: "Explain how inflation, interest rates and exchange rates affect business.",
      lesson: {
        sections: [
          { heading: "Inflation", body: "Rising prices erode purchasing power. Businesses face higher costs (wages, materials) and may need to raise prices — can reduce demand." },
          { heading: "Interest rates", body: "Higher rates increase borrowing costs and reduce consumer spending — hurts businesses with loans and those selling big-ticket items. Lower rates stimulate spending." },
          { heading: "Exchange rates", body: "Strong currency makes imports cheaper but exports more expensive. Weak currency does the opposite. Affects businesses trading internationally." },
          { heading: "Business cycle", body: "Growth phase: rising demand, hiring, investment. Recession: falling demand, layoffs, closures. Businesses must adapt." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Interest rates rise sharply. How does this affect a car dealership?",
          solution: "Car loans become more expensive, reducing demand for cars; the dealership may see fewer sales.",
        },
      },
      questions: [
        {
          id: "olbus-u6-ec-q1", difficulty: "foundation", totalMarks: 1,
          stem: "Inflation is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Falling prices" },
            { id: "b", text: "Economic growth" },
            { id: "c", text: "General rise in prices" },
            { id: "d", text: "Higher wages" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "definition", name: "Inflation", statement: "Rising prices." }], steps: [{ reasoning: "Correct definition.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u6-ec-q2", difficulty: "core", totalMarks: 2,
          stem: "How do higher interest rates affect a business with a bank loan?",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Interest rates", statement: "Borrowing cost." }], steps: [
            { reasoning: "Higher interest payments increase costs.", marks: 1, markCode: "AO2" },
            { reasoning: "Reduces profit.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Higher interest payments increase costs and reduce profit." },
        },
        {
          id: "olbus-u6-ec-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a strong currency affects an exporting business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Exchange rates", statement: "Export impact." }], steps: [
            { reasoning: "Exports become more expensive for foreign buyers.", marks: 1, markCode: "AO2" },
            { reasoning: "Demand for exports may fall.", marks: 1, markCode: "AO2" },
            { reasoning: "May lose competitiveness to rivals.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Strong currency makes exports expensive, reducing demand and competitiveness." },
        },
        {
          id: "olbus-u6-ec-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Economic influences review.",
          parts: [
            { label: "a", prompt: "Define inflation.", marks: 1 },
            { label: "b", prompt: "Define recession.", marks: 1 },
            { label: "c", prompt: "How do interest rates affect borrowing?", marks: 2 },
            { label: "d", prompt: "Strong vs weak currency for exporters?", marks: 2 },
            { label: "e", prompt: "How should businesses respond to recession?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Economic factors", statement: "Definitions and impacts." },
          ], steps: [
            { part: "a", reasoning: "Rising prices.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Economic decline.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Higher rates = higher borrowing costs.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Clear link.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Strong = expensive exports; weak = cheaper exports.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Both stated.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Cut costs, focus on essentials, protect cash.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Second strategy.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Clear response.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) inflation (b) recession (c) higher cost (d) strong/weak (e) cut costs+cash" },
        },
        {
          id: "olbus-u6-ec-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which of the following is an effect of high inflation on a business?",
          response: { type: "mcq", choices: [
            { id: "a", text: "Guaranteed higher profits" },
            { id: "b", text: "Lower demand for loans only" },
            { id: "c", text: "Falling interest rates" },
            { id: "d", text: "Rising wages and material costs" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Inflation impact", statement: "Cost pressure." }], steps: [{ reasoning: "Inflation raises input costs.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u6-ec-q6", difficulty: "core", totalMarks: 1,
          stem: "When interest rates rise, the typical effect on business is…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Falling wages" },
            { id: "b", text: "Higher borrowing costs and reduced consumer spending" },
            { id: "c", text: "Cheaper loans and higher demand" },
            { id: "d", text: "No effect on businesses" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Interest rates", statement: "Cost and demand." }], steps: [{ reasoning: "Higher rates raise costs, cut spending.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u6-ec-q7", difficulty: "core", totalMarks: 1,
          stem: "A weak domestic currency makes a country's exports…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Cheaper for foreign buyers" },
            { id: "b", text: "Illegal" },
            { id: "c", text: "Unchanged in price" },
            { id: "d", text: "More expensive for foreign buyers" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Exchange rates", statement: "Weak currency effect." }], steps: [{ reasoning: "Weak currency = cheaper exports.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u6-ec-q8", difficulty: "core", totalMarks: 1,
          stem: "During a recession, consumer demand typically…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Stays perfectly constant" },
            { id: "b", text: "Falls" },
            { id: "c", text: "Rises sharply" },
            { id: "d", text: "Only affects luxury goods" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Recession", statement: "Falling demand." }], steps: [{ reasoning: "Recession = declining demand/output.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u6-ec-q9", difficulty: "core", totalMarks: 1,
          stem: "The business cycle refers to…",
          response: { type: "mcq", choices: [
            { id: "a", text: "A company's yearly calendar" },
            { id: "b", text: "The lifecycle of a product" },
            { id: "c", text: "Daily cash flow movements" },
            { id: "d", text: "Fluctuations between economic growth and recession" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "definition", name: "Business cycle", statement: "Economic fluctuations." }], steps: [{ reasoning: "Cycle = growth/recession phases.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u6-ec-q10", difficulty: "core", totalMarks: 2,
          stem: "Inflation was 3% last year and 5% this year. Calculate the increase in the inflation rate in percentage points.",
          response: { type: "numeric", parts: [{ label: "a", answer: 2 }] },
          markscheme: { principles: [{ kind: "principle", name: "Inflation change", statement: "Difference in rates." }], steps: [
            { part: "a", reasoning: "Increase = 5 - 3 = 2 percentage points.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Answer = 2.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 2" },
        },
        {
          id: "olbus-u6-ec-q11", difficulty: "core", totalMarks: 2,
          stem: "A product currently costs $200 and inflation is 10%. Calculate the new price after inflation.",
          response: { type: "numeric", parts: [{ label: "a", answer: 220 }] },
          markscheme: { principles: [{ kind: "principle", name: "Inflation effect", statement: "Price rises with inflation." }], steps: [
            { part: "a", reasoning: "Increase = 10% of 200 = $20; new price = 220.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "New price = 220.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 220" },
        },
        {
          id: "olbus-u6-ec-q12", difficulty: "challenge", totalMarks: 2,
          stem: "The exchange rate is 1 unit of currency A = 2 units of currency B. A product priced at 500 units of A sells for how many units of B?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Exchange rate", statement: "Currency conversion." }], steps: [
            { part: "a", reasoning: "500 x 2 = 1000 units of B.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Price in B = 1000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 1000" },
        },
        {
          id: "olbus-u6-ec-q13", difficulty: "challenge", totalMarks: 2,
          stem: "Interest rates rise from 4% to 6% on a $10,000 bank loan. Calculate the extra annual interest the business must pay.",
          response: { type: "numeric", parts: [{ label: "a", answer: 200 }] },
          markscheme: { principles: [{ kind: "principle", name: "Interest cost", statement: "Rate x principal." }], steps: [
            { part: "a", reasoning: "Extra interest = 2% of 10000 = $200.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Extra cost = 200.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 200" },
        },
        {
          id: "olbus-u6-ec-q14", difficulty: "core", totalMarks: 2,
          stem: "Explain two ways inflation can affect a business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Inflation impact", statement: "Costs and demand." }], steps: [
            { reasoning: "Raises input costs (wages, materials); may force price rises.", marks: 1, markCode: "AO2" },
            { reasoning: "Can reduce consumer purchasing power and demand.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Higher costs and weaker demand." },
        },
        {
          id: "olbus-u6-ec-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how a recession can affect different types of businesses differently.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Recession impact", statement: "Sector differences." }], steps: [
            { reasoning: "Luxury/discretionary businesses suffer most as spending falls.", marks: 1, markCode: "AO2" },
            { reasoning: "Essential goods businesses (food, basics) are more resilient.", marks: 1, markCode: "AO2" },
            { reasoning: "All businesses face pressure on cash flow and demand.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Impact varies by sector; essentials fare better." },
        },
        {
          id: "olbus-u6-ec-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Economic influences review.",
          parts: [
            { label: "a", prompt: "Define exchange rate.", marks: 1 },
            { label: "b", prompt: "Define economic growth.", marks: 1 },
            { label: "c", prompt: "How does a strong currency affect imports?", marks: 2 },
            { label: "d", prompt: "How do falling interest rates affect consumer spending?", marks: 2 },
            { label: "e", prompt: "Describe one opportunity and one threat businesses face during the growth phase of the business cycle.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "definition", name: "Economic factors", statement: "Definitions and impacts." },
          ], steps: [
            { part: "a", reasoning: "Value of one currency relative to another.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Increase in output and income.", marks: 1, markCode: "AO1" },
            { part: "c", reasoning: "Imports become cheaper for domestic buyers.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Clear link.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Cheaper borrowing stimulates spending/demand.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            { part: "e", reasoning: "Opportunity: rising demand, hiring, investment.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Threat: e.g. overheating, cost pressures, competition.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Both points explained.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) FX def (b) growth def (c) cheaper imports (d) more spending (e) opp+threat" },
        },
      ],
    },
    {
      id: "olbus-u6-social",
      title: "Social Influences",
      skill: "Explain how social and demographic changes affect business.",
      lesson: {
        sections: [
          { heading: "Demographics", body: "Aging population → demand for healthcare, retirement products. Younger population → education, entertainment, tech." },
          { heading: "Lifestyle changes", body: "Health consciousness → organic food, gyms. Remote work → home office products, video conferencing. Environmental awareness → sustainable products." },
          { heading: "Consumer expectations", body: "Customers expect convenience, quality, ethical practices, digital access. Businesses must adapt or lose customers." },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "An aging population creates opportunity for which businesses?",
          solution: "Healthcare, mobility aids, retirement communities, home care services.",
        },
      },
      questions: [
        {
          id: "olbus-u6-so-q1", difficulty: "foundation", totalMarks: 1,
          stem: "An aging population creates demand for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Baby products" },
            { id: "b", text: "Healthcare and retirement products" },
            { id: "c", text: "Video games" },
            { id: "d", text: "School supplies" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Social influences", statement: "Demographic impact." }], steps: [{ reasoning: "Health/retirement needs.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u6-so-q2", difficulty: "core", totalMarks: 2,
          stem: "Name two social trends affecting business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Social trends", statement: "Consumer changes." }], steps: [
            { reasoning: "Health consciousness, environmental awareness, remote work, aging — any two.", marks: 1, markCode: "AO1" },
            { reasoning: "Two named.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Any two: health, environment, remote work, demographics." },
        },
        {
          id: "olbus-u6-so-q3", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how environmental awareness affects businesses.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Environmental awareness", statement: "Consumer pressure." }], steps: [
            { reasoning: "Customers demand sustainable products.", marks: 1, markCode: "AO2" },
            { reasoning: "Businesses must reduce waste and emissions.", marks: 1, markCode: "AO2" },
            { reasoning: "Creates opportunities for green products.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Consumer demand for sustainability forces green practices and creates opportunities." },
        },
        {
          id: "olbus-u6-so-q4", difficulty: "challenge", totalMarks: 9,
          stem: "Social influences review.",
          parts: [
            { label: "a", prompt: "How does aging affect business?", marks: 2 },
            { label: "b", prompt: "Name two lifestyle trends.", marks: 2 },
            { label: "c", prompt: "How has remote work changed demand?", marks: 2 },
            { label: "d", prompt: "Why must businesses adapt to social change?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Social influences", statement: "Demographics and trends." },
          ], steps: [
            { part: "a", reasoning: "Demand for healthcare/retirement products.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Clear link.", marks: 1, markCode: "AO3" },
            { part: "b", reasoning: "Health, environment, remote work — any two.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Home office products, video conferencing, remote services.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Clear examples.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Customer needs change; must stay relevant.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Competitive survival.", marks: 1, markCode: "AO2" },
            { part: "d", reasoning: "Clear reason.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) aging→healthcare (b) 2 trends (c) remote demand (d) stay relevant" },
        },
        {
          id: "olbus-u6-so-q5", difficulty: "foundation", totalMarks: 1,
          stem: "An aging population most directly increases demand for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Healthcare services" },
            { id: "b", text: "Children's toys" },
            { id: "c", text: "Gaming consoles" },
            { id: "d", text: "School uniforms" },
          ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "principle", name: "Demographics", statement: "Aging impact." }], steps: [{ reasoning: "Older people need healthcare.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u6-so-q6", difficulty: "foundation", totalMarks: 1,
          stem: "The health-conscious consumer trend increases demand for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Paper packaging" },
            { id: "b", text: "Organic food and fitness products" },
            { id: "c", text: "Fast food only" },
            { id: "d", text: "Tobacco products" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Lifestyle trends", statement: "Health impact." }], steps: [{ reasoning: "Health trend boosts healthy products.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u6-so-q7", difficulty: "core", totalMarks: 1,
          stem: "The rise of remote working has created new demand for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Business suits" },
            { id: "b", text: "Commuter transport" },
            { id: "c", text: "Office buildings only" },
            { id: "d", text: "Home office equipment and video conferencing" },
          ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "principle", name: "Remote work", statement: "New demand." }], steps: [{ reasoning: "Remote work needs home office products.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u6-so-q8", difficulty: "core", totalMarks: 1,
          stem: "Modern consumer expectations increasingly include…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Lower prices only" },
            { id: "b", text: "Convenience, quality and ethical practices" },
            { id: "c", text: "Slower delivery" },
            { id: "d", text: "Limited choice" },
          ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "principle", name: "Consumer expectations", statement: "Rising standards." }], steps: [{ reasoning: "Convenience/quality/ethics expected.", marks: 1, markCode: "AO1" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u6-so-q9", difficulty: "core", totalMarks: 1,
          stem: "A growing younger population is likely to increase demand for…",
          response: { type: "mcq", choices: [
            { id: "a", text: "Retirement homes" },
            { id: "b", text: "Mobility aids" },
            { id: "c", text: "Education, entertainment and technology" },
            { id: "d", text: "Funeral services" },
          ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "principle", name: "Demographics", statement: "Youth impact." }], steps: [{ reasoning: "Younger population drives youth-oriented demand.", marks: 1, markCode: "AO2" }], finalAnswer: "**(a)** Correct" },
        },
        {
          id: "olbus-u6-so-q10", difficulty: "core", totalMarks: 2,
          stem: "In a town of 50,000 people, 20% are aged over 65. Calculate how many people are over 65.",
          response: { type: "numeric", parts: [{ label: "a", answer: 10000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Demographics", statement: "Percentage calculation." }], steps: [
            { part: "a", reasoning: "20% of 50000 = 10000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Over-65 population = 10000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 10000" },
        },
        {
          id: "olbus-u6-so-q11", difficulty: "core", totalMarks: 2,
          stem: "A survey shows 60% of consumers prefer sustainable products. Out of 2,000 customers, how many prefer sustainable products?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1200 }] },
          markscheme: { principles: [{ kind: "principle", name: "Consumer survey", statement: "Percentage of sample." }], steps: [
            { part: "a", reasoning: "60% of 2000 = 1200.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Customers = 1200.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 1200" },
        },
        {
          id: "olbus-u6-so-q12", difficulty: "challenge", totalMarks: 2,
          stem: "A business's sales grew by 15% last year to reach $115,000. Calculate last year's sales.",
          response: { type: "numeric", parts: [{ label: "a", answer: 100000 }] },
          markscheme: { principles: [{ kind: "principle", name: "Growth calc", statement: "Reverse percentage." }], steps: [
            { part: "a", reasoning: "115000 = 1.15 x previous; previous = 100000.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Previous sales = 100000.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 100000" },
        },
        {
          id: "olbus-u6-so-q13", difficulty: "challenge", totalMarks: 2,
          stem: "Market research finds that 45% of 4,000 respondents buy groceries online every week. How many respondents is this?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1800 }] },
          markscheme: { principles: [{ kind: "principle", name: "Survey data", statement: "Percentage calculation." }], steps: [
            { part: "a", reasoning: "45% of 4000 = 1800.", marks: 1, markCode: "AO2" },
            { part: "a", reasoning: "Respondents = 1800.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "**(a)** 1800" },
        },
        {
          id: "olbus-u6-so-q14", difficulty: "core", totalMarks: 2,
          stem: "Explain how an aging population can create business opportunities.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Aging population", statement: "New demand." }], steps: [
            { reasoning: "Demand for healthcare, mobility aids, home care.", marks: 1, markCode: "AO2" },
            { reasoning: "Retirement products and services.", marks: 1, markCode: "AO2" },
          ], finalAnswer: "Healthcare, care services and retirement products." },
        },
        {
          id: "olbus-u6-so-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how rising consumer expectations can affect a business.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "principle", name: "Consumer expectations", statement: "Adaptation pressure." }], steps: [
            { reasoning: "Customers demand better quality, convenience and service.", marks: 1, markCode: "AO2" },
            { reasoning: "Businesses must invest to meet expectations or lose customers.", marks: 1, markCode: "AO2" },
            { reasoning: "Ethical/environmental expectations add costs but build loyalty.", marks: 1, markCode: "AO2" },
            { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "Forces investment in quality/service; failure loses customers." },
        },
        {
          id: "olbus-u6-so-q16", difficulty: "challenge", totalMarks: 9,
          stem: "Social influences review.",
          parts: [
            { label: "a", prompt: "Define demographics.", marks: 1 },
            { label: "b", prompt: "Name two demographic trends affecting business.", marks: 2 },
            { label: "c", prompt: "How does health consciousness affect food businesses?", marks: 2 },
            { label: "d", prompt: "Give two examples of lifestyle changes creating new markets.", marks: 2 },
            { label: "e", prompt: "Why is it important for businesses to monitor social trends?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: { principles: [
            { kind: "principle", name: "Social influences", statement: "Trends and adaptation." },
          ], steps: [
            { part: "a", reasoning: "Statistical characteristics of a population.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Aging population, youth growth — any two.", marks: 1, markCode: "AO1" },
            { part: "b", reasoning: "Two named.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Demand shifts to organic/healthy products.", marks: 1, markCode: "AO2" },
            { part: "c", reasoning: "Clear link.", marks: 1, markCode: "AO3" },
            { part: "d", reasoning: "Remote work, environmental awareness, health — any two.", marks: 1, markCode: "AO1" },
            { part: "d", reasoning: "Two named with market examples.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Trends create opportunities and threats.", marks: 1, markCode: "AO2" },
            { part: "e", reasoning: "Staying relevant protects competitiveness.", marks: 1, markCode: "AO3" },
          ], finalAnswer: "(a) def (b) 2 trends (c) healthy demand (d) 2 markets (e) stay relevant" },
        },
      ],
    },
  ],
  notes: [
    { id: "olbus-u6-6-1-notes", title: "Economic and social influences — notes", summary: "How economic and social factors affect business.",
      sections: [
        { heading: "Economic", body: "Inflation, interest rates, exchange rates, business cycle — affect costs, demand and competitiveness." },
        { heading: "Social", body: "Demographics and lifestyle trends (aging, health, environment, remote work) create new opportunities and demands." },
      ] },
  ],
};
