import type { Lesson } from "../../../types.ts";

export const lesson61: Lesson = {
  id: "geo-u6-lesson-6-1",
  code: "6-1",
  title: "Disease Patterns and Epidemiology",
  goal: "I CAN describe disease patterns and explain the epidemiological transition from infectious to non-communicable diseases.",
  standards: ["Paper 1", "Paper 2", "Health"],
  vocabulary: [
    { term: "Epidemiology", definition: "The study of disease distribution and determinants in populations." },
    { term: "Infectious disease", definition: "Disease caused by pathogens (bacteria, viruses, parasites) that spreads between people — e.g. malaria, TB, COVID-19." },
    { term: "Non-communicable disease (NCD)", definition: "Disease not spread person-to-person — heart disease, cancer, diabetes, respiratory illness." },
    { term: "Endemic", definition: "Constant presence of a disease in a population or region." },
    { term: "Epidemic", definition: "A sudden increase in disease cases above normal levels in a population." },
    { term: "Pandemic", definition: "An epidemic spreading across multiple countries or continents — e.g. COVID-19." },
  ],
  concepts: [
    {
      id: "geo-u6-disease-patterns",
      title: "Disease patterns",
      skill: "Describe the global patterns of infectious and non-communicable diseases and their spatial distribution.",
      lesson: {
        sections: [
          {
            heading: "Infectious diseases",
            body: "Infectious diseases remain the leading cause of death in low-income countries: **malaria** (~600,000 deaths/year, sub-Saharan Africa), **TB**, **HIV/AIDS**, diarrhoeal diseases. They concentrate in tropical regions with poor sanitation, weak health systems and limited access to treatment. The 'diseases of poverty' reflect development disparities.",
          },
          {
            heading: "Non-communicable diseases",
            body: "NCDs — cardiovascular disease, cancer, diabetes, chronic respiratory illness — cause ~74% of global deaths, mostly in high-income countries and among older populations. They relate to lifestyle (diet, smoking, inactivity), pollution and ageing populations. NCDs are rising rapidly in emerging economies too.",
          },
          {
            heading: "Spatial patterns",
            body: "Disease distribution reflects **environment** (malaria needs warm, wet conditions for mosquitoes), **development** (sanitation, healthcare access), **behaviour** (smoking, diet) and **demography** (age structure). Mapping disease (GIS) reveals hotspots and guides intervention — 'diseases of place' theory.",
          },
        ],
        keyFormulas: [
          { name: "Disease types", statement: "Infectious (communicable) vs non-communicable (NCDs)" },
          { name: "NCD share", statement: "~74% of global deaths are NCDs" },
          { name: "Disease of poverty", statement: "Infectious diseases concentrate in low-income, tropical regions" },
        ],
        workedExample: {
          problem: "Explain why malaria is concentrated in sub-Saharan Africa.",
          solution: "Malaria needs Anopheles mosquitoes that thrive in warm, humid conditions — abundant in tropical Africa. Poverty limits access to bed nets, insecticides and treatment; weak health infrastructure can't control outbreaks; and the parasite's complexity makes vaccines difficult. Climate, poverty and biology combine to create the world's malaria hotspot.",
        },
      },
      questions: [
        {
          id: "geo-u6-dq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Non-communicable diseases are best defined as:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Diseases spread by pathogens between people" },
              { id: "b", text: "Chronic diseases not spread person-to-person" },
              { id: "c", text: "Diseases caused by poor sanitation" },
              { id: "d", text: "Infectious diseases in tropical regions" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "NCD", statement: "Non-communicable disease — chronic condition not transmitted between people (heart disease, cancer, diabetes)." },
            ],
            steps: [
              { reasoning: "NCDs are not transmitted person-to-person — they are chronic lifestyle/environmental diseases.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Chronic, non-transmitted diseases",
            commonErrors: ["Confusing NCDs with infectious diseases — the key is transmission."],
          },
        },
        {
          id: "geo-u6-dq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two factors influencing the spatial distribution of disease.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Disease distribution", statement: "Environment, development, behaviour, demography determine where diseases occur." },
            ],
            steps: [
              { reasoning: "Environment: malaria needs warm wet conditions for mosquito vectors.", marks: 1, markCode: "M" },
              { reasoning: "Development: sanitation, healthcare access and poverty determine disease burden.", marks: 1, markCode: "M" },
              { reasoning: "Behaviour/demography: smoking, diet, age structure shape NCD patterns.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Environment, development, behaviour, demography.",
            commonErrors: ["Only citing climate — social and economic factors matter equally."],
          },
        },
        {
          id: "geo-u6-dq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain the epidemiological transition and its implications.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Epidemiological transition", statement: "Shift from infectious disease dominance (high mortality) to NCD dominance (longer life, chronic illness)." },
            ],
            steps: [
              { reasoning: "Historically, infectious diseases dominated; development reduced their burden.", marks: 1, markCode: "M" },
              { reasoning: "People live longer, so NCDs (heart disease, cancer) become leading killers.", marks: 1, markCode: "M" },
              { reasoning: "Implication: health systems must shift from acute infectious care to chronic disease management.", marks: 1, markCode: "R" },
              { reasoning: "Many countries face 'double burden' — infectious and NCDs simultaneously.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Shift from infectious to NCD dominance as development and longevity increase.",
            commonErrors: ["Thinking transition eliminates infectious diseases — they persist alongside NCDs."],
          },
        },
        {
          id: "geo-u6-dq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the spatial pattern of a named disease and its causes.",
          parts: [
            { label: "a", prompt: "Identify the named disease and its global/regional pattern.", marks: 2 },
            { label: "b", prompt: "Explain two physical and one human factor controlling its distribution.", marks: 3 },
            { label: "c", prompt: "Evaluate efforts to control the disease.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Disease geography", statement: "Disease patterns reflect environment, vectors, development and behaviour — understanding causes guides control." },
            ],
            steps: [
              { part: "a", reasoning: "Named disease (malaria, HIV, TB) with accurate spatial pattern.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Distribution described (regions, hotspots).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Physical factor: climate, vector habitat, topography.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Physical factor 2: water, sanitation or environmental conditions.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Human factor: poverty, healthcare access, behaviour.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Control measure: vaccination, treatment, vector control, prevention.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: effectiveness, cost, sustainability, equity.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named disease + pattern. (b) Physical + human factors. (c) Control evaluated.",
            commonErrors: ["Describing disease without explaining its spatial pattern causes."],
          },
        },
        {
          id: "geo-u6-dq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Non-communicable diseases (NCDs) include which of the following?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Malaria and tuberculosis" },
              { id: "b", text: "Cardiovascular disease, cancer and diabetes" },
              { id: "c", text: "Cholera and typhoid" },
              { id: "d", text: "Influenza and COVID-19" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "NCDs", statement: "Non-communicable diseases — cardiovascular disease, cancer, diabetes, chronic respiratory illness — ~74% of global deaths." },
            ],
            steps: [
              { reasoning: "NCDs are chronic lifestyle-related diseases, not infectious.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** CVD, cancer, diabetes",
            commonErrors: ["Including infectious diseases in the NCD category."],
          },
        },
        {
          id: "geo-u6-dq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Infectious diseases are the leading cause of death primarily in:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "High-income countries" },
              { id: "b", text: "Low-income countries" },
              { id: "c", text: "Only tropical islands" },
              { id: "d", text: "Equally in all countries" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Disease of poverty", statement: "Infectious diseases dominate mortality in low-income countries with weak health systems and poor sanitation." },
            ],
            steps: [
              { reasoning: "Infectious diseases concentrate where health systems and sanitation are weakest.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Low-income countries",
            commonErrors: ["Assuming disease burden is uniform globally."],
          },
        },
        {
          id: "geo-u6-dq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Malaria is concentrated in sub-Saharan Africa because of the combination of:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cold climate and strong health systems" },
              { id: "b", text: "Warm humid climate for mosquitoes plus poverty and weak health infrastructure" },
              { id: "c", text: "High vaccination rates" },
              { id: "d", text: "Urban density alone" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Malaria geography", statement: "Anopheles mosquitoes need warm wet conditions; poverty and weak health systems prevent control — combined hotspot." },
            ],
            steps: [
              { reasoning: "Climate enables vectors; poverty prevents control — the combination creates the hotspot.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Climate + poverty + weak health systems",
            commonErrors: ["Citing only climate without the development dimension."],
          },
        },
        {
          id: "geo-u6-dq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The 'diseases of place' theory suggests disease distribution reflects:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Random distribution with no pattern" },
              { id: "b", text: "Interactions of environment, development, behaviour and demography" },
              { id: "c", text: "Only genetic factors" },
              { id: "d", text: "Only healthcare funding" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Diseases of place", statement: "Disease patterns emerge from environment, development, behaviour and demography interacting spatially." },
            ],
            steps: [
              { reasoning: "Multiple interacting factors produce spatial disease patterns.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Environment + development + behaviour + demography",
            commonErrors: ["Reducing disease patterns to a single cause."],
          },
        },
        {
          id: "geo-u6-dq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Why are NCDs rising rapidly in emerging economies?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are declining everywhere else" },
              { id: "b", text: "Urbanisation, lifestyle changes (diet, smoking, inactivity) and ageing populations" },
              { id: "c", text: "Infectious diseases have been eliminated" },
              { id: "d", text: "Healthcare systems are perfect" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "NCD epidemiological transition", statement: "Urbanisation, Westernising lifestyles and ageing drive NCD growth in emerging economies." },
            ],
            steps: [
              { reasoning: "Development transitions bring lifestyle-related NCD risk factors.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Urbanisation + lifestyle + ageing",
            commonErrors: ["Assuming NCDs are only a high-income country problem."],
          },
        },
        {
          id: "geo-u6-dq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "NCDs account for approximately what share of global deaths?",
          response: { type: "numeric", parts: [{ label: "Share of global deaths (%)", answer: 74, tolerance: 2, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "context", name: "NCD mortality", statement: "NCDs cause ~74% of global deaths." },
            ],
            steps: [
              { reasoning: "Recall the NCD mortality share.", working: "74\\%", marks: 1, markCode: "M" },
              { reasoning: "Answer $\\approx 74\\%$.", working: "74", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 74\\%$",
            commonErrors: ["Confusing NCD share with infectious disease share."],
          },
        },
        {
          id: "geo-u6-dq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "A country has 50 million people and 400,000 deaths from heart disease per year. What is the heart disease mortality rate per 1,000 population?",
          response: { type: "numeric", parts: [{ label: "Mortality rate per 1,000", answer: 8, tolerance: 0.1 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Mortality rate", statement: "Rate $= \\frac{\\text{deaths}}{\\text{population}} \\times 1{,}000$." },
            ],
            steps: [
              { reasoning: "Set up the rate per 1,000.", working: "\\frac{400{,}000}{50{,}000{,}000} \\times 1{,}000", marks: 1, markCode: "M" },
              { reasoning: "Rate $= 0.008 \\times 1{,}000 = 8$ per 1,000.", working: "8", marks: 1, markCode: "M" },
              { reasoning: "Heart disease mortality rate is $8$ per 1,000.", working: "8", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$8$ per 1,000 population",
            commonErrors: ["Forgetting to scale to per-1,000 or misplacing decimals."],
          },
        },
        {
          id: "geo-u6-dq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Malaria causes approximately how many deaths per year?",
          response: { type: "numeric", parts: [{ label: "Annual deaths (thousands)", answer: 600, tolerance: 50, unit: "thousand" }] },
          markscheme: {
            principles: [
              { kind: "context", name: "Malaria burden", statement: "Malaria causes ~600,000 deaths annually, concentrated in sub-Saharan Africa." },
            ],
            steps: [
              { reasoning: "The cited figure is ~600,000 deaths.", working: "600{,}000", marks: 1, markCode: "M" },
              { reasoning: "Answer $\\approx 600$ thousand.", working: "600", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$\\approx 600{,}000$ deaths per year",
            commonErrors: ["Confusing malaria deaths with total infectious disease deaths."],
          },
        },
        {
          id: "geo-u6-dq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A disease affects 2,000 people in a city of 500,000. What is the prevalence per 1,000 population?",
          response: { type: "numeric", parts: [{ label: "Prevalence per 1,000", answer: 4, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Prevalence", statement: "Prevalence $= \\frac{\\text{cases}}{\\text{population}} \\times 1{,}000$." },
            ],
            steps: [
              { reasoning: "Set up prevalence per 1,000.", working: "\\frac{2{,}000}{500{,}000} \\times 1{,}000", marks: 1, markCode: "M" },
              { reasoning: "Rate $= 0.004 \\times 1{,}000 = 4$ per 1,000.", working: "4", marks: 1, markCode: "M" },
              { reasoning: "Prevalence is $4$ per 1,000.", working: "4", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$4$ per 1,000 population",
            commonErrors: ["Confusing prevalence (total cases) with incidence (new cases)."],
          },
        },
        {
          id: "geo-u6-dq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Which disease is vector-borne?",
          response: { type: "numeric", parts: [{ label: "Disease code (1=dengue, 2=cholera, 3=diabetes, 4=asthma)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vector-borne disease", statement: "Disease transmitted by vectors — mosquitoes (malaria, dengue), ticks." },
            ],
            steps: [
              { reasoning: "Dengue is transmitted by Aedes mosquitoes.", working: "dengue", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Dengue (1)",
            commonErrors: ["Confusing water-borne (cholera) with vector-borne."],
          },
        },
        {
          id: "geo-u6-dq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "If a country's life expectancy rises from 65 to 72 years over 20 years, what is the average annual increase (in years per year)?",
          response: { type: "numeric", parts: [{ label: "Annual increase (years/year)", answer: 0.35, tolerance: 0.01 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Rate of change", statement: "Annual change $= \\frac{\\text{total change}}{\\text{years}}$." },
            ],
            steps: [
              { reasoning: "Total gain $= 72 - 65 = 7$ years.", working: "7", marks: 1, markCode: "M" },
              { reasoning: "Divide by 20 years: $7/20$.", working: "\\frac{7}{20}", marks: 1, markCode: "M" },
              { reasoning: "Annual increase $= 0.35$ years per year.", working: "0.35", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$0.35$ years per year ($\\approx 4.3$ months/year)",
            commonErrors: ["Reporting total gain rather than annual rate."],
          },
        },
        {
          id: "geo-u6-dq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the global patterns of disease in a named region.",
          parts: [
            { label: "a", prompt: "Identify the region and describe its dominant disease types.", marks: 2 },
            { label: "b", prompt: "Explain two factors shaping its disease pattern.", marks: 3 },
            { label: "c", prompt: "Evaluate the region's disease burden and trends.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Disease geography", statement: "Disease patterns reflect environment, development, behaviour and demography — creating regional 'diseases of place'." },
            ],
            steps: [
              { part: "a", reasoning: "Named region identified (e.g. sub-Saharan Africa, South Asia).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Dominant disease types described (infectious vs NCD).", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Factor 1 explained (environment, e.g. malaria climate).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Factor 2 explained (development/health access).", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Factors linked to the named region's pattern.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Current burden assessed with evidence.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Trend or trajectory evaluated (improving/declining).", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Region + disease types. (b) Two pattern factors. (c) Burden evaluated.",
            commonErrors: ["Describing disease without explaining its spatial pattern causes."],
          },
        },
      ],
    },
    {
      id: "geo-u6-epidemiology",
      title: "Epidemiology and disease transmission",
      skill: "Explain disease transmission mechanisms, epidemiological measures and outbreak investigation.",
      lesson: {
        sections: [
          {
            heading: "Transmission mechanisms",
            body: "Diseases spread through different routes: **direct contact** (touching, bodily fluids — HIV, Ebola), **droplet/aerosol** (coughing, sneezing — flu, COVID-19), **vector-borne** (mosquitoes, ticks — malaria, dengue), **water/food-borne** (cholera, typhoid), and **fomite** (contaminated surfaces). Understanding transmission guides control.",
          },
          {
            heading: "Epidemiological measures",
            body: "Key measures: **incidence** (new cases per time period), **prevalence** (total cases at a point), **mortality rate** (deaths per population), **case fatality rate** (deaths/cases). **R0** (basic reproduction number) measures contagiousness — R0>1 means epidemic spread. Contact tracing identifies and isolates cases.",
          },
          {
            heading: "Outbreak investigation",
            body: "Epidemiologists trace outbreaks: identify cases, map locations, find source, implement control. The 1854 London cholera outbreak (John Snow) mapped cases to a contaminated pump — founding epidemiology. Modern genomic epidemiology tracks pathogen evolution in real-time during outbreaks like COVID-19.",
          },
        ],
        keyFormulas: [
          { name: "Transmission routes", statement: "Contact, droplet, vector, water/food, fomite" },
          { name: "R0", statement: "Basic reproduction number — >1 means epidemic growth" },
          { name: "Incidence vs prevalence", statement: "New cases over time vs total cases at a point" },
        ],
        workedExample: {
          problem: "Explain how understanding transmission routes guides disease control.",
          solution: "Different routes need different controls: vector-borne diseases need mosquito control (nets, spraying); water-borne need sanitation; droplet diseases need masks and ventilation; contact diseases need isolation. Malaria control targets Anopheles mosquitoes; cholera control targets water supplies — matching intervention to transmission.",
        },
      },
      questions: [
        {
          id: "geo-u6-tq1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Malaria is transmitted by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Contaminated water" },
              { id: "b", text: "Anopheles mosquitoes" },
              { id: "c", text: "Direct person-to-person contact" },
              { id: "d", text: "Contaminated food" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "Malaria transmission", statement: "Malaria is vector-borne — transmitted by Anopheles mosquitoes." },
            ],
            steps: [
              { reasoning: "Malaria spreads via mosquito vectors, not direct contact or water.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Anopheles mosquitoes",
            commonErrors: ["Confusing vector-borne with water-borne transmission."],
          },
        },
        {
          id: "geo-u6-tq2",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "Describe two disease transmission routes.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "context", name: "Transmission routes", statement: "Contact, droplet/aerosol, vector, water/food, fomite." },
            ],
            steps: [
              { reasoning: "Vector-borne: mosquitoes transmit malaria, ticks transmit Lyme disease.", marks: 1, markCode: "M" },
              { reasoning: "Droplet/aerosol: influenza and COVID-19 spread through respiratory droplets.", marks: 1, markCode: "M" },
              { reasoning: "Water/food-borne: cholera and typhoid spread through contaminated supplies.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vector-borne, droplet/aerosol, water/food-borne, contact, fomite.",
            commonErrors: ["Only listing one route or confusing vector with contact transmission."],
          },
        },
        {
          id: "geo-u6-tq3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Explain what R0 measures and its significance for disease control.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "R0", statement: "Basic reproduction number — average new infections per case; >1 means epidemic growth." },
            ],
            steps: [
              { reasoning: "R0 measures how contagious a disease is — average new cases per infected person.", marks: 1, markCode: "M" },
              { reasoning: "R0>1 means each case infects more than one person — epidemic grows.", marks: 1, markCode: "M" },
              { reasoning: "Control aims to reduce effective R below 1 through vaccination, distancing, treatment.", marks: 1, markCode: "R" },
              { reasoning: "Higher R0 requires more intensive intervention — measles R0~12-18 is very contagious.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "R0 = average new infections per case; >1 means epidemic; control aims to reduce below 1.",
            commonErrors: ["Thinking R0 is fixed — it varies with behaviour, immunity and interventions."],
          },
        },
        {
          id: "geo-u6-tq4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the epidemiological investigation of a named disease outbreak.",
          parts: [
            { label: "a", prompt: "Identify the named outbreak/disease.", marks: 2 },
            { label: "b", prompt: "Explain how the outbreak was investigated.", marks: 3 },
            { label: "c", prompt: "Evaluate the control measures implemented.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Outbreak investigation", statement: "Epidemiologists identify cases, trace sources, map spread and implement targeted control." },
            ],
            steps: [
              { part: "a", reasoning: "Named outbreak (cholera London 1854, COVID-19, Ebola) identified.", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Accurate date, location and pathogen described.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Case identification: counting and mapping cases.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Source tracing: contact tracing, water/food testing, epidemiological mapping.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Investigation methods appropriate to the outbreak.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Control: quarantine, treatment, sanitation, vaccination.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluation: effectiveness, speed, equity of response.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Named outbreak. (b) Investigation methods. (c) Control evaluated.",
            commonErrors: ["Describing the outbreak without the epidemiological investigation process."],
          },
        },
        {
          id: "geo-u6-tq5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Incidence measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Total cases at a point in time" },
              { id: "b", text: "New cases occurring over a time period" },
              { id: "c", text: "Total deaths in a population" },
              { id: "d", text: "The contagiousness of a disease" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Incidence", statement: "Number of NEW cases occurring over a defined time period." },
            ],
            steps: [
              { reasoning: "Incidence counts new cases over time, not total cases.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** New cases over time",
            commonErrors: ["Confusing incidence with prevalence."],
          },
        },
        {
          id: "geo-u6-tq6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "R0 (basic reproduction number) measures:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The number of deaths caused by a disease" },
              { id: "b", text: "How many new infections one case generates on average" },
              { id: "c", text: "The speed of vaccine development" },
              { id: "d", text: "Total population density" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "R0", statement: "Basic reproduction number — average new infections per case; R0 > 1 means epidemic growth." },
            ],
            steps: [
              { reasoning: "R0 quantifies transmission potential per case.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** New infections per case",
            commonErrors: ["Confusing R0 with case fatality rate."],
          },
        },
        {
          id: "geo-u6-tq7",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Cholera and typhoid spread primarily through:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Mosquito bites" },
              { id: "b", text: "Contaminated water and food" },
              { id: "c", text: "Direct skin contact only" },
              { id: "d", text: "Airborne droplets only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Water-borne disease", statement: "Diseases transmitted via contaminated water/food — cholera, typhoid." },
            ],
            steps: [
              { reasoning: "Cholera and typhoid are classic water-borne diseases.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Contaminated water/food",
            commonErrors: ["Classifying them as vector-borne like malaria."],
          },
        },
        {
          id: "geo-u6-tq8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Contact tracing is used in outbreak investigation to:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Identify and isolate people exposed to a case" },
              { id: "b", text: "Develop new vaccines" },
              { id: "c", text: "Measure total population" },
              { id: "d", text: "Map climate patterns" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Contact tracing", statement: "Identifying and monitoring people exposed to an infectious case to break transmission chains." },
            ],
            steps: [
              { reasoning: "Contact tracing finds exposed individuals for isolation/testing.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (a) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(a)** Identify and isolate exposed people",
            commonErrors: ["Confusing contact tracing with vaccination."],
          },
        },
        {
          id: "geo-u6-tq9",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "John Snow's 1854 cholera investigation is significant because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Developed the first vaccine" },
              { id: "b", text: "Mapped cases to a contaminated water pump, founding epidemiology" },
              { id: "c", text: "Eliminated cholera worldwide" },
              { id: "d", text: "Proved all disease is genetic" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "context", name: "John Snow", statement: "1854 London cholera map linked cases to a contaminated pump — founding spatial epidemiology." },
            ],
            steps: [
              { reasoning: "Snow's mapping established the water-borne transmission evidence.", marks: 1, markCode: "M" },
              { reasoning: "Therefore choice (b) is correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "**(b)** Mapped cases to contaminated pump",
            commonErrors: ["Attributing the discovery to a laboratory rather than spatial mapping."],
          },
        },
        {
          id: "geo-u6-tq10",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "If a disease has R0 = 3, what does this mean?",
          response: { type: "numeric", parts: [{ label: "Interpretation code (1=each case infects ~3 others on average, 2=3% fatality rate, 3=3 million cases, 4=vaccine is 3% effective)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "R0 interpretation", statement: "R0 = average secondary infections per case; R0 > 1 → epidemic growth." },
            ],
            steps: [
              { reasoning: "R0 = 3 means each case generates ~3 new cases.", working: "3 \\text{ secondary cases}", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Each case infects ~3 others (1)",
            commonErrors: ["Interpreting R0 as a percentage or case count."],
          },
        },
        {
          id: "geo-u6-tq11",
          difficulty: "core",
          paper: "1",
          totalMarks: 3,
          stem: "In a population of 200,000, there are 1,000 new cases of influenza in one month. What is the monthly incidence per 1,000 population?",
          response: { type: "numeric", parts: [{ label: "Monthly incidence per 1,000", answer: 5, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "Incidence rate", statement: "Incidence $= \\frac{\\text{new cases}}{\\text{population}} \\times 1{,}000$ per period." },
            ],
            steps: [
              { reasoning: "Set up incidence per 1,000.", working: "\\frac{1{,}000}{200{,}000} \\times 1{,}000", marks: 1, markCode: "M" },
              { reasoning: "Rate $= 0.005 \\times 1{,}000 = 5$ per 1,000.", working: "5", marks: 1, markCode: "M" },
              { reasoning: "Monthly incidence is $5$ per 1,000.", working: "5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5$ per 1,000 per month",
            commonErrors: ["Using total prevalence rather than new cases."],
          },
        },
        {
          id: "geo-u6-tq12",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "The case fatality rate (CFR) is calculated as:",
          response: { type: "numeric", parts: [{ label: "CFR formula code (1=deaths/cases ×100, 2=cases/population, 3=deaths/population, 4=incidence/prevalence)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Case fatality rate", statement: "CFR $= \\frac{\\text{deaths from disease}}{\\text{total cases}} \\times 100$ — severity among cases." },
            ],
            steps: [
              { reasoning: "CFR measures deaths among confirmed cases.", working: "deaths/cases", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Deaths/cases ×100 (1)",
            commonErrors: ["Confusing CFR with mortality rate (deaths/population)."],
          },
        },
        {
          id: "geo-u6-tq13",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "An outbreak has 500 cases and 25 deaths. What is the case fatality rate (in %)?",
          response: { type: "numeric", parts: [{ label: "Case fatality rate (%)", answer: 5, tolerance: 0, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "CFR calculation", statement: "CFR $= \\frac{\\text{deaths}}{\\text{cases}} \\times 100$." },
            ],
            steps: [
              { reasoning: "Set up the ratio.", working: "\\frac{25}{500}", marks: 1, markCode: "M" },
              { reasoning: "Ratio $= 0.05$.", working: "0.05", marks: 1, markCode: "M" },
              { reasoning: "CFR $= 5\\%$.", working: "5\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$5\\%$",
            commonErrors: ["Forgetting to multiply by 100 for percentage."],
          },
        },
        {
          id: "geo-u6-tq14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Fomite transmission refers to spread via:",
          response: { type: "numeric", parts: [{ label: "Transmission route code (1=contaminated surfaces/objects, 2=mosquito bites, 3=water supply, 4=sexual contact)", answer: 1, tolerance: 0 }] },
          markscheme: {
            principles: [
              { kind: "definition", name: "Fomite", statement: "Transmission via contaminated surfaces or objects — doorknobs, utensils, etc." },
            ],
            steps: [
              { reasoning: "Fomites are contaminated inanimate objects.", working: "surfaces", marks: 1, markCode: "M" },
              { reasoning: "Code = 1.", working: "1", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Contaminated surfaces (1)",
            commonErrors: ["Confusing fomite with vector or droplet transmission."],
          },
        },
        {
          id: "geo-u6-tq15",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A vaccine reduces susceptibility such that effective R0 drops from 3.0 to 1.5. By what percentage does R0 decrease?",
          response: { type: "numeric", parts: [{ label: "R0 reduction (%)", answer: 50, tolerance: 0, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "technique", name: "R0 reduction", statement: "Reduction $= \\frac{\\text{old} - \\text{new}}{\\text{old}} \\times 100$." },
            ],
            steps: [
              { reasoning: "Reduction $= 3.0 - 1.5 = 1.5$.", working: "1.5", marks: 1, markCode: "M" },
              { reasoning: "Percentage $= 1.5/3.0 = 0.50$.", working: "\\frac{1.5}{3.0} = 0.50", marks: 1, markCode: "M" },
              { reasoning: "R0 decreases by $50\\%$.", working: "50\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$50\\%$",
            commonErrors: ["Dividing by the new value instead of the original."],
          },
        },
        {
          id: "geo-u6-tq16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "Examine the epidemiological investigation of a named disease outbreak.",
          parts: [
            { label: "a", prompt: "Identify the outbreak and its transmission route.", marks: 2 },
            { label: "b", prompt: "Describe the epidemiological measures used to investigate it.", marks: 3 },
            { label: "c", prompt: "Evaluate the control measures implemented.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Outbreak investigation", statement: "Epidemiologists identify cases, map locations, find sources and implement targeted controls matched to transmission." },
            ],
            steps: [
              { part: "a", reasoning: "Named outbreak identified (e.g. COVID-19, cholera, Ebola).", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Transmission route correctly identified.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Measure 1: case identification/mapping/contact tracing.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Measure 2: incidence/prevalence/R0 analysis.", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Measures accurately described for the outbreak.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Control 1 matched to transmission route.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Control 2 or limitation identified.", marks: 1, markCode: "R" },
              { part: "c", reasoning: "Reasoned overall judgement on effectiveness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) Outbreak + route. (b) Investigation measures. (c) Controls evaluated.",
            commonErrors: ["Describing the outbreak without the epidemiological investigation process."],
          },
        },
      ],
    },
  ],
};
