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
              { id: "a", text: "Carbon dioxide" },
              { id: "b", text: "Oxygen" },
              { id: "c", text: "Nitrogen" },
              { id: "d", text: "Helium" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Carbon dioxide",
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
              { id: "a", text: "Rising sea levels" },
              { id: "b", text: "Lower temperatures" },
              { id: "c", text: "More ice caps" },
              { id: "d", text: "Stable weather" },
            ],
            correctChoiceId: "a",
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
            finalAnswer: "**(a)** Rising sea levels",
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
