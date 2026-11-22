import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "oleg-u3-lesson-3-3",
  code: "3-3",
  title: "Climate Change",
  goal: "I CAN explain the causes and consequences of climate change and evaluate responses.",
  standards: ["2217: Climate change"],
  vocabulary: [
    {
      term: "Greenhouse effect",
      definition: "Gases trapping heat in the atmosphere.",
    },
    {
      term: "Greenhouse gases",
      definition: "CO₂, methane, nitrous oxide trapping heat.",
    },
    {
      term: "Global warming",
      definition: "Rising average global temperatures.",
    },
    {
      term: "Carbon footprint",
      definition: "Total greenhouse gas emissions caused by an activity.",
    },
    { term: "Mitigation", definition: "Reducing greenhouse gas emissions." },
    {
      term: "Adaptation",
      definition: "Adjusting to live with climate change effects.",
    },
  ],
  concepts: [
    {
      id: "oleg-u3-climate-causes",
      title: "Causes of climate change",
      skill: "Explain natural and human causes of climate change.",
      lesson: {
        sections: [
          {
            heading: "Greenhouse effect",
            body: "Sun's energy enters atmosphere; Earth radiates heat back. Greenhouse gases (CO₂, methane, water vapour) trap some heat — natural effect keeps Earth habitable. Enhanced greenhouse effect = extra gases from human activity trap more heat → warming.",
          },
          {
            heading: "Human causes",
            body: "Fossil fuel burning (coal, oil, gas) → CO₂. Deforestation removes carbon sinks. Agriculture → methane (livestock, rice) and nitrous oxide (fertilisers). Industry and transport. Population growth and consumerism increase emissions.",
          },
          {
            heading: "Natural factors",
            body: "Solar activity, volcanic eruptions (aerosols cool temporarily), orbital variations (Milankovitch cycles) cause natural climate variation — but current rapid warming is mainly human-driven.",
          },
        ],
        keyFormulas: [
          {
            name: "Climate change causes",
            statement:
              "Enhanced greenhouse effect; fossil fuels+deforestation+agriculture.",
          },
        ],
        workedExample: {
          problem: "How does deforestation cause warming?",
          solution:
            "Trees absorb CO₂; cutting them releases stored carbon AND removes future absorption — double effect.",
        },
      },
      questions: [
        {
          id: "oleg-u3-cc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas is the main human-caused greenhouse gas?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nitrogen" },
              { id: "b", text: "Oxygen" },
              { id: "c", text: "Helium" },
              { id: "d", text: "Carbon dioxide" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Greenhouse gases",
                statement: "CO₂ main from human activity.",
              },
            ],
            steps: [{ reasoning: "CO₂ dominant.", marks: 1, markCode: "AO1" }],
            finalAnswer: "**(d)** Carbon dioxide",
            commonErrors: ["Choosing abundant but non-GHG gas."],
          },
        },
        {
          id: "oleg-u3-cc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Explain the enhanced greenhouse effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enhanced GHE",
                statement: "Extra gases trap more heat.",
              },
            ],
            steps: [
              {
                reasoning: "Human activities add GHGs.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "More heat trapped → warming.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Extra greenhouse gases from human activity trap more heat, causing warming.",
            commonErrors: ["Confusing with natural GHE."],
          },
        },
        {
          id: "oleg-u3-cc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Name three human activities increasing greenhouse gases.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Emission sources",
                statement: "Fossil fuels, deforestation, agriculture.",
              },
            ],
            steps: [
              { reasoning: "Any three sources.", marks: 1, markCode: "AO1" },
              { reasoning: "Correct gases linked.", marks: 1, markCode: "AO1" },
              { reasoning: "Mechanism explained.", marks: 1, markCode: "AO2" },
              { reasoning: "Clear.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Fossil fuel burning (CO₂), deforestation (CO₂), agriculture (methane/nitrous oxide).",
            commonErrors: ["Vague answers."],
          },
        },
        {
          id: "oleg-u3-cc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Causes of climate change.",
          parts: [
            { label: "a", prompt: "Greenhouse effect?", marks: 2 },
            { label: "b", prompt: "Enhanced effect?", marks: 2 },
            { label: "c", prompt: "Three human causes?", marks: 3 },
            { label: "d", prompt: "Natural factors?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Causes",
                statement: "GHE+enhanced+human+natural.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Gases trap heat.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "a",
                reasoning: "Natural process.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "b",
                reasoning: "Extra gases added.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "b",
                reasoning: "More warming.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "c",
                reasoning: "Any three causes.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "AO1" },
              { part: "c", reasoning: "Mechanism.", marks: 1, markCode: "AO2" },
              {
                part: "d",
                reasoning: "Solar/volcanic/orbital.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "d",
                reasoning: "Minor vs human role.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer: "(a) GHE (b) enhanced (c) human causes (d) natural",
          },
        },
        { id: "oleg-u3-cc-q5", difficulty: "foundation", totalMarks: 1,
          stem: "The natural greenhouse effect is important because it...",
          response: { type: "mcq", choices: [ { id: "a", text: "keeps Earth warm enough to be habitable" }, { id: "b", text: "has no effect" }, { id: "c", text: "removes all CO2" }, { id: "d", text: "causes all warming" } ], correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "definition", name: "Greenhouse effect", statement: "Natural trapping of heat keeps Earth habitable." } ], steps: [ { reasoning: "Natural GHE keeps temperatures habitable.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** keeps Earth warm enough to be habitable", commonErrors: ["Confusing natural with enhanced effect."] } },
        { id: "oleg-u3-cc-q6", difficulty: "core", totalMarks: 2,
          stem: "A country emits 50 million tonnes of CO2 and reduces this by 20%. Calculate the new emissions.",
          response: { type: "numeric", parts: [ { label: "Emissions", answer: 40, unit: "million tonnes" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Percentage reduction", statement: "New = original - percentage reduction." } ], steps: [ { reasoning: "50 - 0.20 x 50 = 40 million tonnes.", marks: 2, markCode: "AO1" } ], finalAnswer: "40 million tonnes", commonErrors: ["Adding instead of subtracting reduction."] } },
        { id: "oleg-u3-cc-q7", difficulty: "core", totalMarks: 1,
          stem: "Methane emissions are particularly associated with...",
          response: { type: "mcq", choices: [ { id: "a", text: "wind turbines" }, { id: "b", text: "solar panels" }, { id: "c", text: "reforestation" }, { id: "d", text: "livestock and rice cultivation" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "property", name: "Methane sources", statement: "Agriculture emits methane." } ], steps: [ { reasoning: "Livestock and rice fields emit methane.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(d)** livestock and rice cultivation", commonErrors: ["Choosing clean energy."] } },
        { id: "oleg-u3-cc-q8", difficulty: "foundation", totalMarks: 2,
          stem: "Fossil fuels produce 70% of a country's emissions. If total emissions are 200 million tonnes, calculate fossil fuel emissions.",
          response: { type: "numeric", parts: [ { label: "Emissions", answer: 140, unit: "million tonnes" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Percentage of total", statement: "Part = percentage x total." } ], steps: [ { reasoning: "0.70 x 200 = 140 million tonnes.", marks: 2, markCode: "AO1" } ], finalAnswer: "140 million tonnes", commonErrors: ["Using 70 as tonnes."] } },
        { id: "oleg-u3-cc-q9", difficulty: "core", totalMarks: 4,
          stem: "Explain the difference between the natural greenhouse effect and the enhanced greenhouse effect.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "comparison", name: "Greenhouse effects", statement: "Natural vs enhanced by human activity." } ], steps: [ { reasoning: "Define natural GHE as keeping Earth habitable.", marks: 1, markCode: "AO1" }, { reasoning: "Define enhanced as extra human-added gases trapping more heat.", marks: 1, markCode: "AO1" }, { reasoning: "Link enhanced effect to global warming.", marks: 1, markCode: "AO2" }, { reasoning: "Conclude clearly.", marks: 1, markCode: "AO3" } ], finalAnswer: "Natural GHE keeps Earth habitable; enhanced GHE adds human gases and traps extra heat.", commonErrors: ["Treating them as identical."] } },
        { id: "oleg-u3-cc-q10", difficulty: "core", totalMarks: 1,
          stem: "Which human activity is a major source of nitrous oxide?",
          response: { type: "mcq", choices: [ { id: "a", text: "Use of fertilisers" }, { id: "b", text: "Solar power" }, { id: "c", text: "Walking" }, { id: "d", text: "Planting trees" } ], correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "property", name: "Nitrous oxide", statement: "Fertilisers release nitrous oxide." } ], steps: [ { reasoning: "Fertilisers emit nitrous oxide.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** Use of fertilisers", commonErrors: ["Choosing a low-emission activity."] } },
        { id: "oleg-u3-cc-q11", difficulty: "core", totalMarks: 2,
          stem: "A factory emits 8 tonnes of CO2 per day. Calculate emissions over 30 days.",
          response: { type: "numeric", parts: [ { label: "Emissions", answer: 240, unit: "tonnes" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Total = rate x time", statement: "Emissions = daily rate x days." } ], steps: [ { reasoning: "8 x 30 = 240 tonnes.", marks: 2, markCode: "AO1" } ], finalAnswer: "240 tonnes", commonErrors: ["Dividing instead of multiplying."] } },
        { id: "oleg-u3-cc-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Why is current rapid warming considered mainly human-caused rather than natural?",
          response: { type: "mcq", choices: [ { id: "a", text: "Natural cycles cannot warm Earth" }, { id: "b", text: "Emission rates and warming exceed natural cycles" }, { id: "c", text: "Solar activity has stopped" }, { id: "d", text: "Volcanoes emit only CO2" } ], correctChoiceId: "b" },
          markscheme: { principles: [ { kind: "principle", name: "Human vs natural", statement: "Observed warming matches human emission trends." } ], steps: [ { reasoning: "Human emissions have risen sharply with warming.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(b)** Emission rates and warming exceed natural cycles", commonErrors: ["Ignoring evidence."] } },
        { id: "oleg-u3-cc-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Explain how deforestation contributes to climate change.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "principle", name: "Deforestation", statement: "Removes sink and releases carbon." } ], steps: [ { reasoning: "State trees absorb CO2 as carbon sinks.", marks: 1, markCode: "AO1" }, { reasoning: "Explain cutting trees releases stored carbon.", marks: 1, markCode: "AO1" }, { reasoning: "Explain loss of future absorption.", marks: 1, markCode: "AO2" }, { reasoning: "Conclude the double effect.", marks: 1, markCode: "AO3" } ], finalAnswer: "Deforestation releases stored carbon and removes trees that would absorb future CO2.", commonErrors: ["Mentioning only one effect."] } },
        { id: "oleg-u3-cc-q14", difficulty: "core", totalMarks: 1,
          stem: "Which is a natural factor that can cause short-term cooling?",
          response: { type: "mcq", choices: [ { id: "a", text: "Transport emissions" }, { id: "b", text: "Burning coal" }, { id: "c", text: "Volcanic eruptions releasing aerosols" }, { id: "d", text: "Deforestation" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "property", name: "Natural factors", statement: "Volcanic aerosols can cool temporarily." } ], steps: [ { reasoning: "Volcanic aerosols reflect sunlight and cool temporarily.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(c)** Volcanic eruptions releasing aerosols", commonErrors: ["Choosing human emission source."] } },
        { id: "oleg-u3-cc-q15", difficulty: "core", totalMarks: 2,
          stem: "A country's emissions target is 100 million tonnes, down from 125 million. Calculate the percentage reduction required.",
          response: { type: "numeric", parts: [ { label: "Reduction", answer: 20, unit: "%" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Percentage reduction", statement: "Decrease/original x 100." } ], steps: [ { reasoning: "(125 - 100) / 125 x 100 = 20%.", marks: 2, markCode: "AO1" } ], finalAnswer: "20 %", commonErrors: ["Using target as base."] } },
        { id: "oleg-u3-cc-q16", difficulty: "foundation", totalMarks: 1,
          stem: "The enhanced greenhouse effect is caused mainly by...",
          response: { type: "mcq", choices: [ { id: "a", text: "extra greenhouse gases from human activities" }, { id: "b", text: "the Earth's core" }, { id: "c", text: "the Moon" }, { id: "d", text: "clouds only" } ], correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "definition", name: "Enhanced GHE", statement: "Human-added gases increase heat trapping." } ], steps: [ { reasoning: "Human activities add extra greenhouse gases.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** extra greenhouse gases from human activities", commonErrors: ["Confusing with natural effect."] } },
      ],
    },
    {
      id: "oleg-u3-climate-effects",
      title: "Consequences and Responses",
      skill:
        "Describe climate change impacts and evaluate mitigation and adaptation.",
      lesson: {
        sections: [
          {
            heading: "Physical impacts",
            body: "Rising sea levels (thermal expansion + melting ice) threaten coastal cities/islands. More extreme weather — droughts, floods, hurricanes, heatwaves. Ocean acidification harms marine life. Glacial retreat affects water supplies.",
          },
          {
            heading: "Human and ecosystem impacts",
            body: "Food security threatened by changed rainfall/growing seasons. Water scarcity in dry regions. Health impacts — heat stress, disease spread. Ecosystems shift or species go extinct. Climate refugees migrate.",
          },
          {
            heading: "Responses",
            body: "Mitigation: reduce emissions — renewables, energy efficiency, reforestation, carbon capture, international agreements (Paris Agreement). Adaptation: sea walls, drought-resistant crops, early warning systems, managed retreat. LEDCs need support — least responsible but most vulnerable.",
          },
        ],
        keyFormulas: [
          {
            name: "Climate responses",
            statement:
              "Impacts=sea level+extreme weather+food; Mitigation=cut emissions; Adaptation=live with it.",
          },
        ],
        workedExample: {
          problem: "Mitigation vs adaptation?",
          solution:
            "Mitigation reduces emissions (renewables); adaptation adjusts to unavoidable impacts (sea walls, new crops).",
        },
      },
      questions: [
        {
          id: "oleg-u3-ce-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a consequence of climate change?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "More ice caps" },
              { id: "b", text: "Stable weather" },
              { id: "c", text: "Rising sea levels" },
              { id: "d", text: "Lower temperatures" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Climate impacts",
                statement: "Sea level rise.",
              },
            ],
            steps: [
              { reasoning: "Sea levels rise.", marks: 1, markCode: "AO1" },
            ],
            finalAnswer: "**(c)** Rising sea levels",
            commonErrors: ["Wrong direction."],
          },
        },
        {
          id: "oleg-u3-ce-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish mitigation from adaptation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Mitigation/adaptation",
                statement: "Cut emissions vs adjust.",
              },
            ],
            steps: [
              {
                reasoning: "Mitigation reduces emissions.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Adaptation adjusts to impacts.",
                marks: 1,
                markCode: "AO2",
              },
            ],
            finalAnswer:
              "Mitigation reduces emissions; adaptation adjusts to unavoidable impacts.",
            commonErrors: ["Swapping them."],
          },
        },
        {
          id: "oleg-u3-ce-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why are LEDCs more vulnerable to climate change?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Climate vulnerability",
                statement: "Less resources, agriculture-dependent.",
              },
            ],
            steps: [
              {
                reasoning: "Agriculture-dependent economies.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Less money for adaptation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                reasoning: "Least responsible historically.",
                marks: 1,
                markCode: "AO2",
              },
              { reasoning: "Clear explanation.", marks: 1, markCode: "AO3" },
            ],
            finalAnswer:
              "Depend on agriculture, lack adaptation resources, emitted least historically.",
            commonErrors: ["Only blaming location."],
          },
        },
        {
          id: "oleg-u3-ce-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Climate change impacts and responses.",
          parts: [
            { label: "a", prompt: "Three physical impacts?", marks: 3 },
            { label: "b", prompt: "Human impacts?", marks: 2 },
            { label: "c", prompt: "Mitigation examples?", marks: 2 },
            { label: "d", prompt: "Adaptation examples?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Impacts/responses",
                statement: "Impacts+mitigation+adaptation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Any three impacts.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "a", reasoning: "Correct.", marks: 1, markCode: "AO1" },
              { part: "a", reasoning: "Clear.", marks: 1, markCode: "AO2" },
              {
                part: "b",
                reasoning: "Food/water/health/refugees.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "b", reasoning: "Example.", marks: 1, markCode: "AO2" },
              {
                part: "c",
                reasoning: "Renewables/efficiency/reforestation.",
                marks: 1,
                markCode: "AO1",
              },
              {
                part: "c",
                reasoning: "Paris Agreement.",
                marks: 1,
                markCode: "AO2",
              },
              {
                part: "d",
                reasoning: "Sea walls/new crops/warnings.",
                marks: 1,
                markCode: "AO1",
              },
              { part: "d", reasoning: "Example.", marks: 1, markCode: "AO2" },
            ],
            finalAnswer: "(a) impacts (b) human (c) mitigation (d) adaptation",
          },
        },
        { id: "oleg-u3-ce-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Sea level rise threatens coastal areas mainly through...",
          response: { type: "mcq", choices: [ { id: "a", text: "increased snowfall" }, { id: "b", text: "more rainfall only" }, { id: "c", text: "lower temperatures" }, { id: "d", text: "thermal expansion and melting ice" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "property", name: "Sea level rise", statement: "Warming expands water and melts ice." } ], steps: [ { reasoning: "Warming expands seawater and melts land ice.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(d)** thermal expansion and melting ice", commonErrors: ["Only naming one cause."] } },
        { id: "oleg-u3-ce-q6", difficulty: "core", totalMarks: 2,
          stem: "Sea level rises by 3 mm per year. Calculate the rise over 50 years.",
          response: { type: "numeric", parts: [ { label: "Rise", answer: 150, unit: "mm" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Total = rate x time", statement: "Rise = rate x years." } ], steps: [ { reasoning: "3 x 50 = 150 mm.", marks: 2, markCode: "AO1" } ], finalAnswer: "150 mm", commonErrors: ["Adding instead of multiplying."] } },
        { id: "oleg-u3-ce-q7", difficulty: "core", totalMarks: 1,
          stem: "Mitigation of climate change means...",
          response: { type: "mcq", choices: [ { id: "a", text: "moving all people inland" }, { id: "b", text: "building sea walls only" }, { id: "c", text: "reducing greenhouse gas emissions" }, { id: "d", text: "increasing fossil fuels" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "definition", name: "Mitigation", statement: "Cutting emissions to reduce future warming." } ], steps: [ { reasoning: "Mitigation reduces emissions.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(c)** reducing greenhouse gas emissions", commonErrors: ["Confusing with adaptation."] } },
        { id: "oleg-u3-ce-q8", difficulty: "core", totalMarks: 2,
          stem: "Average global temperature anomaly rises from +0.8 °C to +1.1 °C. Calculate the increase.",
          response: { type: "numeric", parts: [ { label: "Increase", answer: 0.3, unit: "°C" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Difference", statement: "New anomaly - old anomaly." } ], steps: [ { reasoning: "1.1 - 0.8 = 0.3 °C.", marks: 2, markCode: "AO1" } ], finalAnswer: "0.3 °C", commonErrors: ["Treating as percentage."] } },
        { id: "oleg-u3-ce-q9", difficulty: "core", totalMarks: 4,
          stem: "Explain two physical impacts of climate change.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "principle", name: "Physical impacts", statement: "Warming changes oceans, ice and weather." } ], steps: [ { reasoning: "Name two impacts such as sea level rise or extreme weather.", marks: 1, markCode: "AO1" }, { reasoning: "Explain the mechanism for each.", marks: 1, markCode: "AO1" }, { reasoning: "Link to human/environmental risk.", marks: 1, markCode: "AO2" }, { reasoning: "Conclude clearly.", marks: 1, markCode: "AO3" } ], finalAnswer: "Sea level rise and more extreme weather threaten coasts, ecosystems and food production.", commonErrors: ["Listing impacts without mechanisms."] } },
        { id: "oleg-u3-ce-q10", difficulty: "core", totalMarks: 1,
          stem: "Adaptation to climate change includes...",
          response: { type: "mcq", choices: [ { id: "a", text: "stopping all emissions instantly" }, { id: "b", text: "ignoring weather" }, { id: "c", text: "sea walls and drought-resistant crops" }, { id: "d", text: "only planting trees" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "definition", name: "Adaptation", statement: "Adjusting to unavoidable impacts." } ], steps: [ { reasoning: "Adaptation adjusts to existing and future impacts.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(c)** sea walls and drought-resistant crops", commonErrors: ["Confusing with mitigation."] } },
        { id: "oleg-u3-ce-q11", difficulty: "foundation", totalMarks: 2,
          stem: "A coastal city has 2 million people and 40% live below 5 m elevation. Calculate how many are at risk from sea level rise.",
          response: { type: "numeric", parts: [ { label: "People", answer: 800000, unit: "people" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Percentage of total", statement: "Part = percentage x total." } ], steps: [ { reasoning: "0.40 x 2 000 000 = 800 000 people.", marks: 2, markCode: "AO1" } ], finalAnswer: "800 000 people", commonErrors: ["Using 40 as count."] } },
        { id: "oleg-u3-ce-q12", difficulty: "challenge", totalMarks: 1,
          stem: "Why are LEDCs often more vulnerable to climate change?",
          response: { type: "mcq", choices: [ { id: "a", text: "They have no coastlines" }, { id: "b", text: "They emit the most CO2" }, { id: "c", text: "They depend on agriculture and have fewer adaptation resources" }, { id: "d", text: "They are unaffected" } ], correctChoiceId: "c" },
          markscheme: { principles: [ { kind: "principle", name: "Climate vulnerability", statement: "Low resources and agriculture dependence increase risk." } ], steps: [ { reasoning: "Agriculture dependence and low resources raise vulnerability.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(c)** They depend on agriculture and have fewer adaptation resources", commonErrors: ["Assuming highest emitters are most vulnerable."] } },
        { id: "oleg-u3-ce-q13", difficulty: "challenge", totalMarks: 4,
          stem: "Evaluate mitigation and adaptation as responses to climate change.",
          response: { type: "open" },
          markscheme: { principles: [ { kind: "comparison", name: "Mitigation vs adaptation", statement: "Both are needed: cut emissions and adjust." } ], steps: [ { reasoning: "Define mitigation as reducing emissions.", marks: 1, markCode: "AO1" }, { reasoning: "Define adaptation as adjusting to impacts.", marks: 1, markCode: "AO1" }, { reasoning: "Give one example of each.", marks: 1, markCode: "AO2" }, { reasoning: "Reach a balanced judgement.", marks: 1, markCode: "AO3" } ], finalAnswer: "Mitigation reduces future warming while adaptation manages unavoidable impacts; both are needed.", commonErrors: ["Treating them as the same."] } },
        { id: "oleg-u3-ce-q14", difficulty: "core", totalMarks: 1,
          stem: "The Paris Agreement is mainly concerned with...",
          response: { type: "mcq", choices: [ { id: "a", text: "trade tariffs" }, { id: "b", text: "population control" }, { id: "c", text: "tourism rules" }, { id: "d", text: "international action to limit climate change" } ], correctChoiceId: "d" },
          markscheme: { principles: [ { kind: "context", name: "Paris Agreement", statement: "Global climate agreement." } ], steps: [ { reasoning: "Paris Agreement coordinates climate action.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(d)** international action to limit climate change", commonErrors: ["Confusing with trade agreement."] } },
        { id: "oleg-u3-ce-q15", difficulty: "core", totalMarks: 2,
          stem: "A country plans to cut emissions from 90 to 72 million tonnes. Calculate the percentage reduction.",
          response: { type: "numeric", parts: [ { label: "Reduction", answer: 20, unit: "%" } ] },
          markscheme: { principles: [ { kind: "formula", name: "Percentage reduction", statement: "Decrease/original x 100." } ], steps: [ { reasoning: "(90 - 72) / 90 x 100 = 20%.", marks: 2, markCode: "AO1" } ], finalAnswer: "20 %", commonErrors: ["Using new value as base."] } },
        { id: "oleg-u3-ce-q16", difficulty: "foundation", totalMarks: 1,
          stem: "Ocean acidification is caused by...",
          response: { type: "mcq", choices: [ { id: "a", text: "CO2 dissolving in seawater" }, { id: "b", text: "warmer air only" }, { id: "c", text: "less fish" }, { id: "d", text: "more salt" } ], correctChoiceId: "a" },
          markscheme: { principles: [ { kind: "property", name: "Ocean acidification", statement: "CO2 lowers ocean pH." } ], steps: [ { reasoning: "CO2 dissolves in seawater and lowers pH.", marks: 1, markCode: "AO1" } ], finalAnswer: "**(a)** CO2 dissolving in seawater", commonErrors: ["Confusing with warming."] } },
      ],
    },
  ],
  notes: [
    {
      id: "oleg-u3-3-3-notes",
      title: "Climate change — notes",
      summary: "Causes (enhanced GHE), impacts, mitigation vs adaptation.",
      sections: [
        {
          heading: "Causes",
          body: "Enhanced greenhouse effect; fossil fuels, deforestation, agriculture; natural factors minor.",
        },
        {
          heading: "Impacts/responses",
          body: "Sea level, extreme weather, food insecurity; mitigation=emit less, adaptation=adjust; LEDCs most vulnerable.",
        },
      ],
    },
  ],
};
