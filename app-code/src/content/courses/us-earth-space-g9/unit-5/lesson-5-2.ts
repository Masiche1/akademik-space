import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ess9-u5-lesson-5-2",
  code: "5-2",
  title: "Atmosphere Composition and Structure",
  goal: "I CAN describe Earth's atmosphere composition and vertical structure.",
  standards: [
    "HS-ESS2-4",
    "HS-ESS2-5",
    "SEP: Developing and Using Models",
    "CCC: Systems and System Models",
  ],
  vocabulary: [
    { term: "Troposphere", definition: "Lowest layer, weather occurs here." },
    { term: "Stratosphere", definition: "Ozone layer, stable temperature." },
    { term: "Mesosphere", definition: "Meteors burn up here." },
    { term: "Thermosphere", definition: "Auroras, high temperature." },
    { term: "Exosphere", definition: "Outer layer, transitions to space." },
    { term: "Ozone", definition: "O₃ molecule, absorbs UV radiation." },
    {
      term: "Greenhouse gases",
      definition: "Gases that trap heat: CO₂, CH₄, H₂O.",
    },
  ],
  concepts: [
    {
      id: "ess9-u5-atmosphere",
      title: "Atmosphere composition",
      skill: "Describe atmospheric composition and layers.",
      lesson: {
        sections: [
          {
            heading: "Atmospheric composition",
            body: "- **Nitrogen (N₂)**: 78%\n- **Oxygen (O₂)**: 21%\n- **Argon (Ar)**: 0.93%\n- **CO₂**: 0.04%\n- **Water vapor**: variable 0-4%",
          },
          {
            heading: "Atmospheric layers",
            body: "- **Troposphere**: 0-12 km, weather, temperature decreases.\n- **Stratosphere**: 12-50 km, ozone layer, temperature increases.\n- **Mesosphere**: 50-85 km, meteors burn, temperature decreases.\n- **Thermosphere**: 85-500+ km, auroras, high temp.\n- **Exosphere**: outermost, transitions to space.",
          },
        ],
        keyFormulas: [
          { name: "N₂", statement: "78%" },
          { name: "O₂", statement: "21%" },
          { name: "Layers", statement: "Troposphere → exosphere" },
        ],
        workedExample: {
          problem: "Where does weather occur?",
          solution: "Troposphere — lowest layer.",
        },
      },
      questions: [
        {
          id: "ess9-u5-atmo-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the most abundant gas in Earth's atmosphere?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen" },
              { id: "b", text: "Nitrogen" },
              { id: "c", text: "CO₂" },
              { id: "d", text: "Hydrogen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [{ kind: "fact", name: "Nitrogen", statement: "78%." }],
            steps: [{ reasoning: "N₂ = 78%.", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** Nitrogen",
            commonErrors: ["Oxygen."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u5-atmo-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In which layer does weather occur?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Troposphere",
                statement: "Weather layer.",
              },
            ],
            steps: [
              { reasoning: "Troposphere = weather.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Troposphere.",
            commonErrors: ["Stratosphere."],
            examinerNote: "A1 for troposphere.",
          },
        },
        {
          id: "ess9-u5-atmo-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What is the ozone layer and why is it important?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Ozone",
                statement: "Absorbs UV radiation.",
              },
            ],
            steps: [
              {
                reasoning: "Ozone (O₃) in stratosphere.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Absorbs harmful UV radiation.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Protects life from UV damage.",
                marks: 1,
                markCode: "B",
              },
              { reasoning: "Answer: UV protection.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Ozone absorbs UV → protects life.",
            commonErrors: ["Pollution."],
            examinerNote: "B1 for each + A1.",
          },
        },
        {
          id: "ess9-u5-atmo-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "List Earth's atmospheric layers from surface upward.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Layers", statement: "Five layers." },
            ],
            steps: [
              { reasoning: "Troposphere.", marks: 1, markCode: "B" },
              { reasoning: "Stratosphere.", marks: 1, markCode: "B" },
              { reasoning: "Mesosphere.", marks: 1, markCode: "B" },
              { reasoning: "Thermosphere.", marks: 1, markCode: "B" },
              { reasoning: "Exosphere.", marks: 1, markCode: "B" },
              {
                reasoning: "Order correct + brief description each.",
                marks: 3,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Troposphere → stratosphere → mesosphere → thermosphere → exosphere.",
            commonErrors: ["Wrong order."],
            examinerNote: "B1 for each + A3 for order/descriptions.",
          },
        },
      ],
    },
    {
      id: "ess9-u5-weather",
      title: "Weather and climate",
      skill:
        "Distinguish weather from climate and describe atmospheric processes.",
      lesson: {
        sections: [
          {
            heading: "Weather vs climate",
            body: "- **Weather**: short-term atmospheric conditions (days).\n- **Climate**: long-term average patterns (30+ years).",
          },
          {
            heading: "Atmospheric processes",
            body: "- **Convection**: warm air rises, cool air sinks.\n- **Pressure systems**: high = sinking, low = rising.\n- **Fronts**: boundaries between air masses.\n- **Jet streams**: high-altitude winds.",
          },
        ],
        keyFormulas: [
          { name: "Weather", statement: "Short-term" },
          { name: "Climate", statement: "Long-term average" },
          { name: "Convection", statement: "Warm rises, cool sinks" },
        ],
        workedExample: {
          problem: "What's the difference between weather and climate?",
          solution: "Weather = today; climate = average over decades.",
        },
      },
      questions: [
        {
          id: "ess9-u5-weather-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What's the difference between weather and climate?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same thing" },
              { id: "b", text: "Weather = short-term; climate = long-term" },
              { id: "c", text: "Weather = long-term; climate = short-term" },
              { id: "d", text: "Climate is weather" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Weather vs climate",
                statement: "Short vs long term.",
              },
            ],
            steps: [
              {
                reasoning: "Weather short, climate long.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Short-term vs long-term",
            commonErrors: ["Same thing."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u5-weather-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is convection in the atmosphere?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Convection",
                statement: "Warm rises, cool sinks.",
              },
            ],
            steps: [
              {
                reasoning: "Warm air rises, cool air sinks.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Warm air rises, cool air sinks.",
            commonErrors: ["Horizontal only."],
            examinerNote: "A1 for correct description.",
          },
        },
        {
          id: "ess9-u5-weather-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "What causes high and low pressure systems?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Pressure",
                statement: "High = sinking; low = rising.",
              },
            ],
            steps: [
              {
                reasoning: "High pressure: air sinks, clear weather.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Low pressure: air rises, clouds/precipitation.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Temperature differences drive pressure.",
                marks: 1,
                markCode: "B",
              },
              {
                reasoning: "Answer: temperature-driven pressure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "High = sinking/clear; low = rising/cloudy.",
            commonErrors: ["Random."],
            examinerNote: "B1 for each + A1.",
          },
        },
        {
          id: "ess9-u5-weather-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Explain how Earth's tilt affects seasons and climate.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Seasons",
                statement: "Axial tilt → uneven heating.",
              },
            ],
            steps: [
              {
                reasoning: "Earth tilted 23.5° on axis.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Different hemispheres get more direct sunlight.",
                marks: 2,
                markCode: "B",
              },
              {
                reasoning: "Causes seasons + climate zones.",
                marks: 2,
                markCode: "B",
              },
              { reasoning: "Answer: tilt → seasons.", marks: 2, markCode: "A" },
            ],
            finalAnswer: "Axial tilt → uneven heating → seasons.",
            commonErrors: ["Distance from sun."],
            examinerNote:
              "B2 for tilt + B2 for mechanism + B2 for effect + A1.",
          },
        },
      ],
    },
    {
      id: "ess9-u5-greenhouse",
      title: "Greenhouse effect",
      skill: "Explain the natural greenhouse effect and its role in climate.",
      lesson: {
        sections: [
          {
            heading: "Greenhouse effect",
            body: "Greenhouse gases (CO₂, CH₄, H₂O) trap heat:\n- Sunlight passes through atmosphere.\n- Earth radiates heat (infrared).\n- Greenhouse gases absorb and re-emit → warming.",
          },
          {
            heading: "Natural vs enhanced",
            body: "- **Natural**: keeps Earth ~33°C warmer (habitable).\n- **Enhanced**: human activities increase greenhouse gases → extra warming.",
          },
        ],
        keyFormulas: [
          { name: "Greenhouse", statement: "Traps infrared" },
          { name: "Natural", statement: "~33°C warming" },
          { name: "Enhanced", statement: "Human-caused" },
        ],
        workedExample: {
          problem: "Why is Earth habitable?",
          solution: "Natural greenhouse effect keeps it ~33°C warmer.",
        },
      },
      questions: [
        {
          id: "ess9-u5-greenhouse-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the greenhouse effect?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cooling effect" },
              { id: "b", text: "Trapping of heat by gases" },
              { id: "c", text: "Ozone formation" },
              { id: "d", text: "Pollution" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Greenhouse",
                statement: "Heat trapping.",
              },
            ],
            steps: [
              {
                reasoning: "Greenhouse = heat trapping.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Trapping of heat by gases",
            commonErrors: ["Cooling."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "ess9-u5-greenhouse-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Is the greenhouse effect natural or human-caused?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Greenhouse",
                statement: "Natural, enhanced by humans.",
              },
            ],
            steps: [
              { reasoning: "Natural effect exists.", marks: 1, markCode: "R" },
              { reasoning: "Humans enhance it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Natural, enhanced by humans.",
            commonErrors: ["All human."],
            examinerNote: "R1, A1.",
          },
        },
        {
          id: "ess9-u5-greenhouse-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does the greenhouse effect work?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Greenhouse",
                statement: "Traps infrared radiation.",
              },
            ],
            steps: [
              {
                reasoning: "Sunlight passes through.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Earth radiates infrared.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Greenhouse gases absorb/re-emit → warming.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: heat trapping mechanism.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Traps infrared → warming.",
            commonErrors: ["Wrong mechanism."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "ess9-u5-greenhouse-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "Distinguish natural vs enhanced greenhouse effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Natural",
                statement: "Keeps Earth habitable.",
              },
              {
                kind: "property",
                name: "Enhanced",
                statement: "Human-caused extra warming.",
              },
            ],
            steps: [
              {
                reasoning: "Natural: ~33°C warming, essential for life.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Enhanced: human CO₂/CH₄ → extra warming.",
                marks: 3,
                markCode: "B",
              },
              {
                reasoning: "Answer: natural essential; enhanced concerning.",
                marks: 2,
                markCode: "A",
              },
            ],
            finalAnswer: "Natural essential; enhanced human-caused.",
            commonErrors: ["All bad."],
            examinerNote: "B3 for each + A1.",
          },
        },
      ],
    },
  ],
};
