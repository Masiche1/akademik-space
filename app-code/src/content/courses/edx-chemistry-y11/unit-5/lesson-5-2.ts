import type { Lesson } from "../../../types.ts";

export const lesson52: Lesson = {
  id: "ech11-u5-lesson-5-2",
  code: "5-2",
  title: "The Greenhouse Effect and Climate Change",
  goal: "I CAN explain the natural and enhanced greenhouse effects, describe evidence for climate change and define a carbon footprint.",
  standards: ["4CH1 2.19", "4CH1 2.20", "4CH1 2.21", "4CH1 3.20"],
  
  vocabulary: [
    { term: "Greenhouse gas", definition: "A gas that absorbs infrared radiation emitted by the Earth and re-radiates some of it back towards the surface." },
    { term: "Greenhouse effect", definition: "The natural warming of the Earth's surface caused by greenhouse gases trapping infrared radiation." },
    { term: "Enhanced greenhouse effect", definition: "The increased warming caused by human activities raising the concentration of greenhouse gases." },
    { term: "Global warming", definition: "The observed increase in the Earth's average surface temperature over recent decades." },
    { term: "Carbon footprint", definition: "The total amount of carbon dioxide (or equivalent greenhouse gases) released by an activity, person or organisation." },
    { term: "Albedo", definition: "The proportion of incoming sunlight that a surface reflects; ice has high albedo, oceans low." },
    { term: "Feedback effect", definition: "A change that triggers further changes which amplify or reduce the original change." },
  ],
  concepts: [
    {
      id: "ech11-u5-greenhouse-effect",
      title: "Greenhouse gases and the enhanced greenhouse effect",
      skill: "Explain how greenhouse gases trap infrared radiation and distinguish the natural from the enhanced greenhouse effect.",
      lesson: {
        sections: [
          {
            heading: "How the greenhouse effect works",
            body: "The Sun emits mostly **short-wave** radiation, which passes through the atmosphere and warms the Earth's surface. The warmed surface emits **infrared (long-wave)** radiation. **Greenhouse gases** — mainly water vapour, carbon dioxide and methane — absorb this infrared radiation and re-emit it in all directions, including back towards the surface. This keeps the surface warmer than it would otherwise be: the **natural greenhouse effect**.",
          },
          {
            heading: "Greenhouse gases",
            body: "- **Water vapour:** the most abundant greenhouse gas, but its concentration is controlled by temperature.\n- **Carbon dioxide:** from respiration, combustion and deforestation; the main gas humans can control.\n- **Methane:** from flooded rice fields, livestock digestion and landfill; much more powerful per molecule than CO$_2$ but present in smaller amounts.\n- Others include nitrous oxide and fluorinated gases.",
          },
          {
            heading: "Natural versus enhanced effect",
            body: "The **natural greenhouse effect** keeps Earth at a temperature that supports life (about $15^\\circ\\text{C}$ on average instead of about $-18^\\circ\\text{C}$). Human activities — burning fossil fuels, deforestation, intensive agriculture — raise greenhouse gas concentrations, so more infrared radiation is trapped. This is the **enhanced greenhouse effect**, the accepted explanation for recent **global warming**.",
          },
        ],
        keyFormulas: [
          { name: "Greenhouse mechanism", statement: "short-wave radiation in → surface warms → infrared radiation absorbed by greenhouse gases → re-radiated to surface" },
          { name: "Enhanced effect", statement: "more greenhouse gas → more infrared absorbed → higher average temperature" },
          { name: "Key gases", statement: "water vapour, carbon dioxide, methane" },
        ],
        workedExample: {
          problem: "Explain why an increase in atmospheric carbon dioxide leads to a rise in the Earth's average temperature.",
          solution: "More CO$_2$ means more infrared radiation emitted by the Earth's surface is absorbed. Some of this energy is re-radiated back towards the surface, so less heat escapes to space. The surface and lower atmosphere warm until a new balance is reached — the enhanced greenhouse effect.",
        },
      },
      questions: [
        {
          id: "ech11-u5-greenhouse-effect-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is NOT a greenhouse gas?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Carbon dioxide"
                    },
                    {
                              "id": "b",
                              "text": "Methane"
                    },
                    {
                              "id": "c",
                              "text": "Oxygen"
                    },
                    {
                              "id": "d",
                              "text": "Water vapour"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Greenhouse gas",
                              "statement": "A gas that absorbs and re-radiates infrared radiation, e.g. CO$_2$, CH$_4$, water vapour."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Oxygen is not a greenhouse gas; it makes up about 21% of air but does not absorb infrared strongly.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(c) Oxygen",
          "commonErrors": [
                    "Choosing nitrogen (also not a greenhouse gas) — but it is not offered; oxygen is the odd one out here."
          ]
},
        },
        {
          id: "ech11-u5-greenhouse-effect-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define the term 'greenhouse effect'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Greenhouse effect",
                              "statement": "Warming of the Earth's surface caused by greenhouse gases absorbing and re-radiating infrared radiation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Greenhouse gases in the atmosphere absorb infrared radiation emitted by the warmed Earth.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "They re-emit some of this radiation back towards the surface, keeping it warmer.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Warming caused by greenhouse gases trapping/re-radiating infrared radiation.",
          "commonErrors": [
                    "Describing it as 'heat from the Sun being trapped' — the trapped radiation is infrared emitted by the Earth, not sunlight."
          ]
},
        },
        {
          id: "ech11-u5-greenhouse-effect-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain, step by step, how carbon dioxide in the atmosphere causes warming of the Earth's surface.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Infrared absorption",
                              "statement": "Greenhouse gases absorb infrared (long-wave) radiation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sunlight (short-wave radiation) reaches and warms the Earth's surface.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "The warm surface emits infrared radiation; CO$_2$ absorbs much of it.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "CO$_2$ re-radiates energy in all directions, including back to the surface, reducing heat loss to space.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Sun warms surface → surface emits IR → CO$_2$ absorbs and re-radiates back → warming.",
          "commonErrors": [
                    "Saying CO$_2$ absorbs sunlight directly — it absorbs the Earth's infrared radiation."
          ]
},
        },
        {
          id: "ech11-u5-greenhouse-effect-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A class discusses the greenhouse effect.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Name three greenhouse gases.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the difference between the natural and the enhanced greenhouse effect.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Enhanced greenhouse effect",
                              "statement": "Extra warming from human-caused increases in greenhouse gases."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Any three of water vapour, carbon dioxide, methane, nitrous oxide.",
                              "marks": 2,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "The natural effect occurs at natural greenhouse gas levels and keeps Earth warm enough for life.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Human activities (burning fossil fuels, deforestation, agriculture) increase gas concentrations.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "More gases absorb more infrared, so more heat is returned to the surface — extra warming.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) water vapour, CO$_2$, CH$_4$ (b) natural = essential warming; enhanced = extra warming from human emissions.",
          "commonErrors": [
                    "Claiming the natural greenhouse effect is harmful — without it Earth would be far colder."
          ]
},
        },
        {
          id: "ech11-u5-greenhouse-effect-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "Atmospheric methane and carbon dioxide concentrations have risen over the last 150 years.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State two human activities that have increased these concentrations.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain how these increases produce global warming.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Greenhouse mechanism",
                              "statement": "Higher greenhouse gas concentration → more infrared radiation trapped."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Burning fossil fuels for energy and transport releases CO$_2$.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Deforestation removes trees that absorb CO$_2$ and releases stored carbon when wood is burned or rots.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Agriculture (livestock, rice paddies, fertilisers) releases methane and nitrous oxide.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "More greenhouse gas means more infrared radiation from the surface is absorbed.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Re-radiation back to the surface increases, so the planet warms.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "This is the enhanced greenhouse effect and is linked to observed global warming.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) fossil fuel burning, deforestation, agriculture (b) more IR trapped → enhanced greenhouse effect → warming.",
          "commonErrors": [
                    "Saying the gases 'create heat' — they trap existing infrared radiation."
          ]
},
        },
        {
          id: "ech11-u5-greenhouse-effect-q6",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student claims: 'The greenhouse effect is just like the glass of a greenhouse, so greenhouse gases trap heat from the Sun.'",
          parts: [
          {
                    "label": "a",
                    "prompt": "Correct the student's explanation of what radiation is trapped and by which gases.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain why water vapour is called a feedback gas rather than the main driver of climate change.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Discuss whether all recent warming can be blamed on carbon dioxide alone.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Greenhouse mechanism",
                              "statement": "Infrared radiation from the Earth's surface is absorbed and re-radiated by greenhouse gases."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The analogy is misleading: a greenhouse mainly works by reducing convection, not trapping radiation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The trapped radiation is infrared emitted by the Earth's surface, not sunlight.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The main gases are water vapour, carbon dioxide and methane.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "They absorb IR and re-emit it in all directions, warming the surface.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Water vapour concentration is controlled by temperature — warmer air holds more vapour.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "It amplifies warming caused by other gases, so it acts as a feedback rather than the initial driver.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "CO$_2$ is the main human-controlled driver, but methane, nitrous oxide and land-use change also contribute.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "Natural factors (solar output, volcanoes) cause small variations but cannot explain the recent rapid rise.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "c",
                              "reasoning": "The evidence points to human greenhouse gas emissions as the dominant cause.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) IR from surface, not sunlight; gases: water vapour, CO$_2$, CH$_4$ (b) vapour follows temperature (c) CO$_2$ dominant but not only factor.",
          "commonErrors": [
                    "Accepting the 'greenhouse glass' analogy literally — it is only a rough analogy."
          ]
},
        },
      ],
    },
    {
      id: "ech11-u5-climate-change-impact",
      title: "Evidence for climate change, impacts and carbon footprints",
      skill: "Describe evidence for climate change, explain likely impacts and define and use the idea of a carbon footprint.",
      lesson: {
        sections: [
          {
            heading: "Evidence for climate change",
            body: "Multiple independent lines of evidence support global warming:\n\n- **Temperature records:** global mean surface temperature has risen by about $1^\\circ\\text{C}$ since pre-industrial times, with the warmest years on record in recent decades.\n- **Sea level rise:** thermal expansion of warming water plus melting glaciers and ice sheets.\n- **Shrinking ice:** Arctic sea ice and glaciers are retreating.\n- **Ocean acidification:** absorbed CO$_2$ forms carbonic acid, lowering ocean pH.\n- **Shifting patterns:** earlier flowering, changing bird migration and more extreme weather events.",
          },
          {
            heading: "Likely impacts",
            body: "- **Coastal flooding** from sea-level rise threatens low-lying land and cities.\n- **Extreme weather:** heatwaves, droughts, floods and stronger storms may become more frequent.\n- **Ecosystem change:** species must move, adapt or decline as habitats shift; coral reefs are damaged by warming and acidification.\n- **Food and water security:** changing rainfall patterns affect crops and freshwater supplies.\n- **Health effects:** heat stress, spread of disease vectors and air pollution.",
          },
          {
            heading: "Responding: mitigation, adaptation and footprints",
            body: "**Mitigation** means reducing the cause — cutting greenhouse gas emissions (renewable energy, efficiency, reforestation, carbon capture). **Adaptation** means coping with the effects — sea walls, drought-resistant crops, early-warning systems.\n\nA **carbon footprint** measures the total greenhouse gases (usually expressed as CO$_2$ equivalent) produced by an activity. Reducing it means using less energy, choosing lower-carbon transport and diet, and offsetting remaining emissions.",
          },
        ],
        keyFormulas: [
          { name: "Carbon footprint", statement: "total greenhouse gas emissions expressed as CO$_2$ equivalent" },
          { name: "Mitigation", statement: "reducing emissions at source" },
          { name: "Adaptation", statement: "coping with the impacts of climate change" },
          { name: "Albedo feedback", statement: "less ice → less reflection → more absorption → more warming" },
        ],
        workedExample: {
          problem: "A family wants to reduce its carbon footprint. Suggest two changes and explain how each lowers emissions.",
          solution: "Switching from petrol cars to public transport or electric vehicles reduces fossil fuel combustion and hence CO$_2$ emissions. Insulating the home reduces the energy needed for heating, so less fuel is burned at the power station. Both reduce the total greenhouse gas emissions — the family's carbon footprint.",
        },
      },
      questions: [
        {
          id: "ech11-u5-climate-change-impact-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a direct piece of evidence for recent climate change?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Rising global mean surface temperature"
                    },
                    {
                              "id": "b",
                              "text": "The colour of the sky"
                    },
                    {
                              "id": "c",
                              "text": "The number of trees in a forest"
                    },
                    {
                              "id": "d",
                              "text": "The speed of sound in air"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Climate change evidence",
                              "statement": "Temperature records, sea-level rise, ice retreat and ocean acidification all indicate warming."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Global mean temperature has measurably risen — the most direct evidence.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) Rising global mean surface temperature",
          "commonErrors": [
                    "Choosing local weather events as 'evidence' — climate change is shown by long-term global records."
          ]
},
        },
        {
          id: "ech11-u5-climate-change-impact-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Define the term 'carbon footprint'.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Carbon footprint",
                              "statement": "Total greenhouse gas emissions produced by an activity, expressed as CO$_2$ equivalent."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "A carbon footprint is the total amount of greenhouse gases released by an activity or organisation.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "It is usually expressed as a mass of CO$_2$ equivalent.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Total greenhouse gas emissions of an activity, as CO$_2$ equivalent.",
          "commonErrors": [
                    "Defining it as only the CO$_2$ from cars — it includes all sources: energy, food, travel, goods."
          ]
},
        },
        {
          id: "ech11-u5-climate-change-impact-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "State two ways in which rising sea levels caused by climate change could affect people.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Sea-level rise",
                              "statement": "Warming expands seawater and melts land ice, raising sea level."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Coastal flooding and erosion damage homes, farmland and infrastructure.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Salt water contaminates freshwater supplies and farmland.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "People may be displaced, creating climate refugees and economic costs.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "Coastal flooding/erosion; salt contamination; displacement of people.",
          "commonErrors": [
                    "Listing impacts on animals only — the question asks about effects on people."
          ]
},
        },
        {
          id: "ech11-u5-climate-change-impact-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Arctic sea ice is melting.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Give two pieces of measured evidence that sea ice is retreating.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain the albedo feedback caused by melting ice.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "property",
                              "name": "Albedo",
                              "statement": "Ice reflects most sunlight (high albedo); dark ocean absorbs more."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Satellite records show a steady decrease in summer sea-ice extent.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Ice thickness and volume measurements also show decline.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "White ice reflects a large fraction of incoming sunlight back to space.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "When ice melts, dark ocean is exposed which absorbs more sunlight.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "More absorption warms the region further, melting more ice — a positive feedback.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) satellite extent + thickness data (b) less reflection → more absorption → more warming.",
          "commonErrors": [
                    "Describing albedo feedback as negative — melting ice amplifies warming."
          ]
},
        },
        {
          id: "ech11-u5-climate-change-impact-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A government announces measures to respond to climate change.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Distinguish between mitigation and adaptation, giving one example of each.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain why a country may need both strategies.",
                    "marks": 3
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mitigation and adaptation",
                              "statement": "Mitigation reduces emissions; adaptation reduces vulnerability to impacts."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Mitigation reduces the cause: e.g. switching to renewable energy or planting forests.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Adaptation reduces the effects: e.g. sea walls, drought-resistant crops, early-warning systems.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "The two are correctly distinguished as cause- versus effect-focused.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Some warming is already locked in, so impacts will occur even if emissions stop.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Adaptation protects people and infrastructure from those unavoidable impacts.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Mitigation limits how severe future impacts become, so both are needed together.",
                              "marks": 1,
                              "markCode": "R"
                    }
          ],
          "finalAnswer": "(a) mitigation = cut emissions e.g. renewables; adaptation = cope e.g. sea walls (b) committed warming needs both.",
          "commonErrors": [
                    "Using the terms interchangeably — they address different parts of the problem."
          ]
},
        },
        {
          id: "ech11-u5-climate-change-impact-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A town experiences more frequent heatwaves and flooding. Its council asks students to advise on responses.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe two pieces of global evidence that support a link between these events and climate change.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Explain two ways the flooding could damage the town's environment or economy.",
                    "marks": 4
          },
          {
                    "label": "c",
                    "prompt": "Suggest two actions the council could take and classify each as mitigation or adaptation.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Climate evidence",
                              "statement": "Long-term records of temperature, sea level and extreme events link local events to global change."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Rising global mean temperature over recent decades.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Increased frequency/intensity of heatwaves and heavy rainfall events in climate records.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Rising sea level contributes to coastal and river flooding.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Warmer atmosphere holds more moisture, making extreme rainfall more likely.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "b",
                              "reasoning": "Flooding damages homes, roads and businesses — economic cost and disruption.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Floodwater spreads pollutants and sewage, harming ecosystems and water quality.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Soil erosion and crop loss reduce agricultural productivity and food supply.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Insurance costs and repair spending strain the local economy.",
                              "marks": 1,
                              "markCode": "R"
                    },
                    {
                              "part": "c",
                              "reasoning": "Any two valid actions each correctly labelled mitigation or adaptation, e.g. tree planting (mitigation), flood barriers (adaptation).",
                              "marks": 2,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) temp records, extreme events, sea level (b) economic damage, pollution, soil loss (c) e.g. renewables=mitigation, barriers=adaptation.",
          "commonErrors": [
                    "Citing one local flood as 'proof' of climate change — evidence must be long-term and global."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ech11-u5-climate-notes",
      title: "Greenhouse effect and climate change — notes",
      summary: "Greenhouse gases trap infrared radiation. Human emissions enhance the effect → global warming → sea-level rise, extreme weather; respond by mitigation and adaptation.",
      sections: [
        { heading: "Mechanism", body: "Sunlight warms surface → surface emits infrared → greenhouse gases absorb and re-emit → surface stays warmer." },
        { heading: "Evidence", body: "Temperature records, sea-level rise, ice retreat, ocean acidification, shifting seasons." },
        { heading: "Responses", body: "Mitigation = reduce emissions (renewables, efficiency). Adaptation = cope with impacts (flood defences, resilient crops). Carbon footprint = total CO$_2$ equivalent emissions." },
      ],
    },
  ],
};
