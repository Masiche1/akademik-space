import type { Lesson } from "../../../types.ts";

export const lesson44: Lesson = {
  id: "ciegp-u4-lesson-4-4",
  code: "4-4",
  title: "Evidence, Data and Further Global Issues",
  goal: "I CAN interpret data and analyse food security, water scarcity and technology issues for IGCSE GP.",
  standards: [
    "Cambridge IGCSE Global Perspectives 0457",
    "Unit 4: evidence and issues",
  ],
  vocabulary: [
    {
      term: "Food security",
      definition: "Reliable access to sufficient, safe, nutritious food.",
    },
    {
      term: "Water stress",
      definition: "Demand for water exceeds sustainable supply.",
    },
    { term: "Virtual water", definition: "Water embedded in traded goods." },
    {
      term: "Digital divide",
      definition:
        "Gap in access to and use of digital technology between groups.",
    },
    {
      term: "Externality",
      definition:
        "Cost or benefit borne by third parties outside a transaction.",
    },
    {
      term: "Sustainability",
      definition:
        "Meeting present needs without compromising future generations.",
    },
  ],
  concepts: [
    {
      id: "ciegp-u4l4-c1-data",
      title: "Interpreting data and evidence on global issues",
      skill:
        "Read charts, tables and statistics critically in global issue contexts.",
      lesson: {
        sections: [
          {
            heading: "Reading data critically",
            body: "Always check **what the data measures** (GDP vs wellbeing), **units and scale** (per capita vs total), **time period**, and **source/methodology**. A rising line can hide distributional effects; a correlation is not causation. Look for cherry-picked timeframes and missing context (e.g. percentage vs absolute numbers).",
          },
          {
            heading: "Common data traps",
            body: "Watch for: base-rate neglect (impressive percentage of tiny number), survivorship bias (only counting successes), ecological fallacy (applying group stats to individuals), and misleading axes (truncated graphs exaggerating change). Good analysis uses multiple measures and explains what data cannot show.",
          },
        ],
        keyFormulas: [
          {
            name: "Per capita vs total",
            statement: "Per capita shows living standards; total shows scale",
          },
          {
            name: "Truncated axis",
            statement: "Graph starting above zero exaggerates change",
          },
          {
            name: "Base rate",
            statement:
              "The underlying frequency before conditioning on a subgroup",
          },
        ],
        workedExample: {
          problem:
            "A graph shows aid doubled from $1bn to $2bn with a y-axis starting at $0.9bn. Is the visual honest?",
          solution:
            "No — the truncated axis makes doubling look dramatic; a zero-based axis would show the true proportional change more fairly.",
        },
      },
      questions: [
        {
          id: "ciegp-q-u4l4c1-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Why might GDP per capita be a misleading measure of development?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It ignores distribution, health, education and wellbeing",
              },
              { id: "b", text: "It cannot be calculated" },
              { id: "c", text: "It only measures exports" },
              { id: "d", text: "It is always wrong" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "GDP limits",
                statement: "Output measure, not welfare or distribution.",
              },
            ],
            steps: [
              {
                reasoning: "Correct limitation identified.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Ignores distribution, health, education",
            commonErrors: [
              "Dismissing GDP entirely rather than noting limits.",
            ],
          },
        },
        {
          id: "ciegp-q-u4l4c1-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is a 'truncated axis' in a graph?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Truncated axis",
                statement: "Axis not starting at zero, exaggerating change.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              {
                reasoning: "Effect noted: exaggerates differences.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A graph axis that starts above zero, making small changes look much larger than they are.",
            commonErrors: ["Thinking it means missing data."],
          },
        },
        {
          id: "ciegp-q-u4l4c1-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "A charity claims 'our programme lifted 10,000 people out of poverty'. What questions should you ask about this statistic?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Statistic scrutiny",
                statement:
                  "Definition of poverty, timeframe, comparison group, method.",
              },
            ],
            steps: [
              {
                reasoning: "Asks about measurement/definition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Asks about comparison/control.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Asks about independence of the claim.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Which poverty line? Over what period? Compared to what (control group)? Who measured it — the charity itself or independent evaluators?",
            commonErrors: ["Accepting the number at face value."],
          },
        },
        {
          id: "ciegp-q-u4l4c1-4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A report says 'electric car sales rose 200% in a year'. Analyse what this statistic might hide.",
          parts: [
            {
              label: "a",
              prompt: "What could the percentage hide about the base number?",
              marks: 2,
            },
            { label: "b", prompt: "What other context is needed?", marks: 2 },
            {
              label: "c",
              prompt: "How should this be reported fairly?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Statistical context",
                statement: "Base rates, absolute vs relative, market share.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "200% of a tiny base is still small.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "e.g. 100→300 vs 1m→3m differ hugely.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Total market share, absolute numbers, timeframe.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Subsidies/policy context.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Report absolute numbers alongside percentages.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Give market context.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) tiny base can make % huge (b) absolute sales, market share, policy support (c) give absolute numbers + market context, not % alone",
            commonErrors: ["Treating % growth as meaningful without base."],
          },
        },
        {
          id: "ciegp-q-u4l4c1-5",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'ecological fallacy'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ecological fallacy",
                statement: "Applying group-level patterns to individuals.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Assuming individuals behave like their group average — e.g. 'country X has high religiosity so this individual must be religious.'",
            commonErrors: ["Confusing with correlation-causation."],
          },
        },
        {
          id: "ciegp-q-u4l4c1-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Why might two reputable sources report very different statistics on the same issue?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Data divergence",
                statement:
                  "Different methods, definitions, timeframes, agendas.",
              },
            ],
            steps: [
              {
                reasoning: "Methodological differences.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Different definitions/timeframes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Possible agenda/funding bias.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Different definitions of the measured thing, different time periods, different methods, or different funding agendas can all produce divergent figures.",
            commonErrors: ["Assuming one source is simply lying."],
          },
        },
        {
          id: "ciegp-q-u4l4c1-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does 'per capita' mean?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Per person, dividing a total by population" },
              { id: "b", text: "By percentage" },
              { id: "c", text: "Per year" },
              { id: "d", text: "For each country" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Per capita",
                statement: "Divided by population.",
              },
            ],
            steps: [
              { reasoning: "Correct definition.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Per person",
            commonErrors: ["Confusing with per country."],
          },
        },
        {
          id: "ciegp-q-u4l4c1-8",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A government reports 'poverty fell from 40% to 25%'. Analyse what this single statistic cannot tell you.",
          parts: [
            {
              label: "a",
              prompt: "What does the percentage hide about who remains poor?",
              marks: 2,
            },
            { label: "b", prompt: "What about depth of poverty?", marks: 2 },
            {
              label: "c",
              prompt: "What methodological concerns apply?",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Poverty measurement",
                statement: "Headcount vs depth vs distribution.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "25% may be concentrated in specific groups/regions.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Distribution matters, not just total.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Headcount ignores how far below the line people are.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Poverty gap/FGT measures needed.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Poverty line definition, survey method, urban/rural coverage.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Question data quality.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) who remains poor — groups/regions (b) depth — how poor the poor are (c) poverty line definition, survey reliability",
            commonErrors: ["Accepting the headline number."],
          },
        },
        {
          id: "ciegp-q-u4l4c1-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'survivorship bias'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Survivorship bias",
                statement: "Analysing only those who 'survived' a process.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              { reasoning: "Example given.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Drawing conclusions only from successes — e.g. studying only surviving startups to explain success ignores the many that failed with the same strategy.",
            commonErrors: ["Confusing with selection bias generally."],
          },
        },
        {
          id: "ciegp-q-u4l4c1-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why should you check the timeframe of a statistic on a global issue?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Timeframe matters",
                statement: "Short vs long-term trends can differ.",
              },
            ],
            steps: [
              {
                reasoning: "Short-term vs long-term can diverge.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Cherry-picking timeframe possible.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "A statistic may show a favourable short-term blip while the long-term trend worsens (or vice versa); checking timeframe prevents cherry-picked claims.",
            commonErrors: ["Assuming current data always best."],
          },
        },
        {
          id: "ciegp-q-u4l4c1-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What does a per-capita measure show that a total measure does not?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Government spending" },
              {
                id: "b",
                text: "Average living standards per person, independent of population size",
              },
              { id: "c", text: "Total national output" },
              { id: "d", text: "Trade volumes" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Per capita vs total",
                statement: "Per capita shows living standards; total shows scale.",
              },
            ],
            steps: [
              { reasoning: "Per capita normalises for population.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Average living standards per person",
            commonErrors: ["Confusing total GDP with GDP per capita."],
          },
        },
        {
          id: "ciegp-q-u4l4c1-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is 'base-rate neglect' when interpreting statistics?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Base-rate neglect",
                statement: "Impressive percentage of a tiny number misleads.",
              },
            ],
            steps: [
              {
                reasoning: "Defines the fallacy.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. '200% rise' from 2 cases to 6 is still tiny.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Focusing on a large percentage while ignoring the small absolute base — e.g. 200% growth from a tiny number.",
            commonErrors: ["Treating percentage change as absolute change."],
          },
        },
        {
          id: "ciegp-q-u4l4c1-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A country has GDP of $500 billion and population of 50 million. What is GDP per capita?",
          response: {
            type: "numeric",
            parts: [{ label: "GDP per capita ($)", answer: 10000 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Per-capita calculation",
                statement: "Total/population.",
              },
            ],
            steps: [
              {
                reasoning: "500,000,000,000 / 50,000,000 = $10,000.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$10,000",
            commonErrors: ["Unit errors — keep consistent magnitudes."],
          },
        },
        {
          id: "ciegp-q-u4l4c1-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A statistic rises from 100 to 110. What is the percentage increase?",
          response: {
            type: "numeric",
            parts: [{ label: "Increase (%)", answer: 10 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Percentage change",
                statement: "(New - old)/old x 100.",
              },
            ],
            steps: [
              { reasoning: "(110-100)/100 x 100 = 10%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10%",
            commonErrors: ["Reporting the absolute rise (10) as the percentage."],
          },
        },
        {
          id: "ciegp-q-u4l4c1-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain 'survivorship bias' and give a global-issue example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Survivorship bias",
                statement: "Analysing only those that survived/are visible.",
              },
            ],
            steps: [
              {
                reasoning: "Defines the bias: ignoring failures/invisible cases.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. studying only successful aid projects, ignoring failures.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Skews conclusions toward over-optimism.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Only counting visible/successful cases — e.g. evaluating aid via surviving projects overstates effectiveness.",
            commonErrors: ["Confusing with random sampling error."],
          },
        },
        {
          id: "ciegp-q-u4l4c1-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A line graph with a y-axis starting at 98 (not 0) makes a change from 100 to 102 look dramatic. Explain why this misleads and how to present the data honestly.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Truncated axis",
                statement: "Breaking the scale exaggerates change.",
              },
            ],
            steps: [
              {
                reasoning: "Truncated axis visually amplifies a 2% change.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Misleads viewers about the true magnitude.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Fix: start axis at zero or annotate the real scale.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the actual percentage change alongside.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Truncated axis exaggerates small changes; use a zero baseline or annotate the real scale and state actual percentages.",
            commonErrors: ["Accepting dramatic-looking graphs at face value."],
          },
        },
      ],
    },
    {
      id: "ciegp-u4l4-c2-issues",
      title: "Food security, water scarcity and technology",
      skill:
        "Analyse three more major global issues with evidence and perspectives.",
      lesson: {
        sections: [
          {
            heading: "Food security and water",
            body: "**Food security** depends on availability, access, utilisation and stability — affected by climate, conflict, trade and waste. **Water stress** affects ~2 billion people; agriculture uses ~70% of freshwater. **Virtual water** in trade means water-scarce countries effectively import water via food. Solutions: sustainable agriculture, reduced waste, desalination, water pricing — all contested economically and politically.",
          },
          {
            heading: "Technology and the digital divide",
            body: "Technology offers solutions (precision agriculture, remote learning, telemedicine) but creates the **digital divide** — unequal access by income, geography, gender. Issues: surveillance and privacy, AI bias, automation displacing jobs, e-waste, and whether tech widens or narrows global inequality. Data ownership and platform power are emerging governance challenges.",
          },
        ],
        keyFormulas: [
          {
            name: "Food security pillars",
            statement: "Availability, access, utilisation, stability",
          },
          {
            name: "Virtual water",
            statement: "Water used to produce traded goods",
          },
          {
            name: "Digital divide",
            statement: "Unequal access to digital technology and skills",
          },
        ],
        workedExample: {
          problem: "How does virtual water link water scarcity to trade?",
          solution:
            "A water-scarce country importing grain saves its own water; exporting water-intensive crops effectively exports scarce water — trade can relieve or worsen water stress.",
        },
      },
      questions: [
        {
          id: "ciegp-q-u4l4c2-1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What are the four pillars of food security?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Availability, access, utilisation, stability" },
              { id: "b", text: "Land, water, seeds, markets" },
              { id: "c", text: "Supply, demand, price, subsidy" },
              { id: "d", text: "Production, distribution, consumption, waste" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Food security pillars",
                statement: "FAO framework.",
              },
            ],
            steps: [{ reasoning: "Correct pillars.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** Availability, access, utilisation, stability",
            commonErrors: ["Confusing with production chain."],
          },
        },
        {
          id: "ciegp-q-u4l4c2-2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is 'virtual water'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Virtual water",
                statement: "Water embedded in producing traded goods.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              {
                reasoning: "Trade implication noted.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The water used to produce a good — importing food effectively imports the water needed to grow it.",
            commonErrors: ["Thinking it's water transported physically."],
          },
        },
        {
          id: "ciegp-q-u4l4c2-3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain two ways climate change threatens food security.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate-food link",
                statement: "Shifting rainfall, extreme events, crop failure.",
              },
            ],
            steps: [
              { reasoning: "First mechanism.", marks: 1, markCode: "M" },
              { reasoning: "Second mechanism.", marks: 1, markCode: "M" },
              {
                reasoning: "Link to access/stability.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Altered rainfall patterns reduce yields; extreme events (drought, flood) cause sudden crop failures and price spikes, hitting stability and access.",
            commonErrors: ["Only mentioning one mechanism."],
          },
        },
        {
          id: "ciegp-q-u4l4c2-4",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate the claim: 'Technology will solve global inequality.'",
          parts: [
            {
              label: "a",
              prompt: "How technology could reduce inequality",
              marks: 2,
            },
            { label: "b", prompt: "How it could worsen inequality", marks: 2 },
            { label: "c", prompt: "Balanced judgement", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Technology and inequality",
                statement: "Access-dependent; can democratise or concentrate.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "e.g. mobile money, remote education, telemedicine extend services.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Lower costs of information/connection.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Digital divide: access requires infrastructure/skills/income.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Automation may displace low-skill workers.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Technology amplifies existing advantages unless access is addressed.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Qualified conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Technology can extend services cheaply, but only where access exists — it tends to widen inequality unless digital access is deliberately expanded.",
            commonErrors: [
              "Techno-optimism or techno-pessimism without analysis.",
            ],
          },
        },
        {
          id: "ciegp-q-u4l4c2-5",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'digital divide'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digital divide",
                statement: "Unequal access to digital tech and skills.",
              },
            ],
            steps: [
              { reasoning: "Definition correct.", marks: 1, markCode: "M" },
              {
                reasoning: "Dimensions noted (income, geography, gender).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The gap in access to and ability to use digital technology — shaped by income, geography, gender and education.",
            commonErrors: ["Reducing it to internet access only."],
          },
        },
        {
          id: "ciegp-q-u4l4c2-6",
          difficulty: "core",
          totalMarks: 3,
          stem: "Name two causes of water scarcity and one consequence for food production.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Water scarcity",
                statement: "Overuse, pollution, climate change reduce supply.",
              },
            ],
            steps: [
              { reasoning: "Two valid causes.", marks: 1, markCode: "M" },
              {
                reasoning: "One valid food consequence.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. over-extraction and pollution; consequence: irrigation failure reduces crop yields, raising food prices and insecurity.",
            commonErrors: ["Listing causes only, no consequence."],
          },
        },
        {
          id: "ciegp-q-u4l4c2-7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Approximately what share of global freshwater use goes to agriculture?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "About 70%" },
              { id: "b", text: "About 95%" },
              { id: "c", text: "About 30%" },
              { id: "d", text: "About 10%" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "fact",
                name: "Water use",
                statement: "Agriculture ~70% of withdrawals.",
              },
            ],
            steps: [{ reasoning: "Correct figure.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** About 70%",
            commonErrors: ["Underestimating agriculture's share."],
          },
        },
        {
          id: "ciegp-q-u4l4c2-8",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Evaluate: 'The digital divide is a bigger barrier to development than lack of resources.'",
          parts: [
            {
              label: "a",
              prompt: "How the digital divide harms development",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Why 'bigger than resources' is questionable",
              marks: 2,
            },
            { label: "c", prompt: "Balanced judgement", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Digital divide vs resources",
                statement:
                  "Access matters but basic needs precede digital access.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "e.g. excluded from e-services, remote learning, markets.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Reinforces existing inequalities.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Food, water, health, infrastructure are more fundamental.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Digital access itself requires resources.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Digital divide is serious but secondary to basic needs.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Weighed conclusion.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "The digital divide is a real and growing barrier, but 'bigger than resources' overstates it — basic needs like food, water and health remain more fundamental constraints.",
            commonErrors: ["Accepting the superlative claim uncritically."],
          },
        },
        {
          id: "ciegp-q-u4l4c2-9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two ways food waste contributes to food insecurity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Food waste",
                statement:
                  "Wasted food wastes resources; redistribution could feed hungry.",
              },
            ],
            steps: [
              {
                reasoning: "Resource waste mechanism.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Distribution/access mechanism.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Wasted food means wasted water, land and energy; redistributing surplus could feed food-insecure populations without new production.",
            commonErrors: ["Only mentioning environmental harm."],
          },
        },
        {
          id: "ciegp-q-u4l4c2-10",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why might automation increase unemployment in some countries while creating jobs in others?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Automation effects",
                statement: "Displaces low-skill jobs; creates high-skill jobs.",
              },
            ],
            steps: [
              { reasoning: "Displacement mechanism.", marks: 1, markCode: "M" },
              { reasoning: "New jobs + skills gap.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Robots replace routine tasks (low-skill displacement) while creating demand for technical roles — the net effect depends on whether workers can reskill.",
            commonErrors: ["Claiming automation only destroys jobs."],
          },
        },
        {
          id: "ciegp-q-u4l4c2-11",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is 'virtual water'?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Water wasted by industry" },
              { id: "b", text: "Water that evaporates" },
              {
                id: "c",
                text: "The water used to produce traded goods, effectively 'embedded' in them",
              },
              { id: "d", text: "Water in clouds" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Virtual water",
                statement: "Water embedded in traded goods.",
              },
            ],
            steps: [
              { reasoning: "Virtual water travels with traded products.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Water embedded in traded goods",
            commonErrors: ["Confusing with physical water trade."],
          },
        },
        {
          id: "ciegp-q-u4l4c2-12",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the 'digital divide'?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Digital divide",
                statement: "Unequal access to digital technology and skills.",
              },
            ],
            steps: [
              {
                reasoning: "Defines unequal access by income, geography, gender.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "e.g. rural vs urban access to remote learning.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Unequal access to digital technology and digital skills across groups and regions.",
            commonErrors: ["Confusing with internet speed only."],
          },
        },
        {
          id: "ciegp-q-u4l4c2-13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Agriculture uses about 70% of a country's 4,000 km3 of freshwater withdrawals. How much does agriculture use?",
          response: {
            type: "numeric",
            parts: [{ label: "Agricultural use (km3)", answer: 2800 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Water data",
                statement: "Percentage of total withdrawals.",
              },
            ],
            steps: [
              { reasoning: "0.70 x 4000 = 2800 km3.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "2,800 km3",
            commonErrors: ["Using 70% of a different base."],
          },
        },
        {
          id: "ciegp-q-u4l4c2-14",
          difficulty: "core",
          totalMarks: 1,
          stem: "Of 2.5 billion tonnes of food produced globally each year, about 1.3 billion tonnes is wasted. What percentage is wasted?",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage wasted", answer: 52 }],
          },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Food waste data",
                statement: "Wasted/produced x 100.",
              },
            ],
            steps: [
              { reasoning: "1.3/2.5 x 100 = 52%.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "52%",
            commonErrors: ["Rounding errors — 52% is correct."],
          },
        },
        {
          id: "ciegp-q-u4l4c2-15",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how virtual water trade can relieve water stress in a water-scarce country.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Virtual water",
                statement: "Importing food saves domestic water.",
              },
            ],
            steps: [
              {
                reasoning: "Growing food uses large amounts of water.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Importing food avoids using scarce domestic water.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Dependency and food-price risks are trade-offs.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Importing food 'imports' the water used to grow it, saving scarce domestic water — though it creates dependency.",
            commonErrors: ["Ignoring the dependency trade-off."],
          },
        },
        {
          id: "ciegp-q-u4l4c2-16",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the claim that 'technology will inevitably close the digital divide'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Technology and inequality",
                statement: "Tech can narrow or widen divides.",
              },
            ],
            steps: [
              {
                reasoning: "For: cheaper devices, mobile leapfrogging, remote services.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Against: cost, infrastructure, skills gaps persist.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Complicating: automation may displace the unskilled further.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Judgement: tech helps only with complementary investment in access and skills.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Technology can narrow the divide but is not self-correcting; access costs, infrastructure and skills gaps mean it may widen inequality without support.",
            commonErrors: ["Techno-optimism without examining access barriers."],
          },
        },
      ],
    },
  ],
};
