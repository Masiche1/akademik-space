import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "ebi10-u9-lesson-9-2",
  code: "9-2",
  title: "Food Production and Farming",
  goal: "I CAN explain how overfishing, fertilisers, pesticides and intensive farming affect food supply and the environment.",
  standards: ["4BI1 4.17", "4BI1 4.18", "4BI1 4.19", "4BI1 4.20"],
  
  vocabulary: [
    { term: "Overfishing", definition: "Catching fish faster than they can reproduce, so stocks decline." },
    { term: "Sustainable yield", definition: "The amount of fish that can be caught each year while maintaining the population." },
    { term: "Quota", definition: "A legal limit on the amount of a fish species that may be caught." },
    { term: "Fertiliser", definition: "A substance added to soil to supply nutrients such as nitrates, phosphates and potassium." },
    { term: "Pesticide", definition: "A chemical used to kill or control pests such as insects, weeds or fungi." },
    { term: "Intensive farming", definition: "High-input farming using fertilisers, pesticides, irrigation and machinery to maximise yield." },
    { term: "Aquaculture", definition: "Fish farming in controlled conditions such as ponds or marine cages." },
  ],
  concepts: [
    {
      id: "ebi10-u9-overfishing-food-supply",
      title: "Overfishing and sustainable fisheries",
      skill: "Explain the causes and consequences of overfishing and describe sustainable management of fish stocks.",
      lesson: {
        sections: [
          {
            heading: "Why fish stocks decline",
            body: "Fish are a major food source, but demand has led to **overfishing** — catching fish faster than they can reproduce. Causes include:\n\n- **Larger, more efficient fishing fleets** with sonar and bigger nets\n- **Bycatch** — unwanted species caught and discarded\n- **Destruction of habitats** such as coral reefs and seabed by trawling\n- **Pollution** reducing breeding success\n\nWhen too many adult fish are removed, breeding numbers fall, so fewer young fish are produced — a downward spiral that can collapse the stock.",
          },
          {
            heading: "Consequences and sustainable management",
            body: "Declining fish stocks mean reduced food supply, lost income for fishing communities, and damage to marine food webs as predators lose their prey.\n\n**Sustainable management** methods include:\n\n- **Quotas** — legal limits on catches per species\n- **Minimum landing sizes** — only mature fish may be kept\n- **Closed seasons** during breeding times\n- **Marine protected areas** where fishing is banned\n- **Aquaculture** — farming fish in controlled ponds or cages to reduce pressure on wild stocks\n- **Selective fishing gear** to reduce bycatch",
          },
          {
            heading: "Aquaculture: benefits and drawbacks",
            body: "**Aquaculture** (fish farming) can produce large amounts of fish without depleting wild stocks. However, it has drawbacks: it requires feed (often made from wild fish), produces waste that can pollute water, and farmed fish may escape and spread disease to wild populations. If poorly managed, fish farms can themselves damage local ecosystems.",
          },
        ],
        keyFormulas: [
          { name: "Sustainable yield", statement: "$\\text{catch per year} \\leq \\text{reproduction rate}$ to maintain the stock" },
          { name: "Overfishing spiral", statement: "More adults caught $\\rightarrow$ fewer offspring $\\rightarrow$ smaller stock $\\rightarrow$ even fewer fish" },
        ],
        workedExample: {
          problem: "A fishery catches 100 000 tonnes of cod per year, but cod reproduce enough to replace only 80 000 tonnes. Explain what happens to the stock.",
          solution: "Each year 20 000 tonnes more are removed than can be replaced, so the breeding population shrinks. With fewer adults, reproduction falls further and the stock declines towards collapse — this is overfishing.",
        },
      },
      questions: [
        {
          id: "ebi10-u9-overfishing-food-supply-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is meant by overfishing?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Catching fish faster than they can reproduce"
                    },
                    {
                              "id": "b",
                              "text": "Growing fish in ponds for food"
                    },
                    {
                              "id": "c",
                              "text": "Eating only one type of fish"
                    },
                    {
                              "id": "d",
                              "text": "Fishing in protected marine areas"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Overfishing",
                              "statement": "Catching fish faster than stocks can replenish."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Overfishing means removal exceeds reproduction, causing stocks to decline.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** Catching fish faster than they can reproduce",
          "commonErrors": [
                    "Confusing overfishing with aquaculture, which is farming."
          ]
},
        },
        {
          id: "ebi10-u9-overfishing-food-supply-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two consequences of overfishing for marine ecosystems.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Overfishing effects",
                              "statement": "Stocks collapse; food webs disrupted; habitats damaged."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fish stocks decline/collapse, reducing food supply.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Marine food webs disrupted (predators lose prey); seabed habitats destroyed by trawling.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Stock collapse; disrupted food webs; habitat destruction.",
          "commonErrors": [
                    "Repeating 'fish numbers fall' twice without distinct consequences."
          ]
},
        },
        {
          id: "ebi10-u9-overfishing-food-supply-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how overfishing can cause a fish stock to collapse.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Overfishing spiral",
                              "statement": "Removing adults reduces breeding, so fewer young are produced."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Too many adult fish are caught, leaving too few to breed.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Fewer eggs/young fish are produced, so the population cannot replace losses.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "The stock declines further in a downward spiral until it collapses.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Adults removed $\\rightarrow$ fewer offspring $\\rightarrow$ stock declines $\\rightarrow$ collapse.",
          "commonErrors": [
                    "Saying the sea 'runs out' of fish instantly; it is a gradual reproductive decline."
          ]
},
        },
        {
          id: "ebi10-u9-overfishing-food-supply-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A fishing community wants to manage its fish stocks sustainably.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Define sustainable yield.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain how quotas help sustain fish stocks.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Suggest one other management method.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Sustainable yield",
                              "statement": "Catch that does not exceed reproduction."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "The amount of fish that can be caught each year while maintaining the population.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "a",
                              "reasoning": "Catch must not exceed the rate at which the stock reproduces.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "part": "b",
                              "reasoning": "Quotas set legal limits on how much of each species may be caught.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "This prevents removal exceeding reproduction, keeping stocks stable.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Any valid: marine protected areas, minimum landing size, closed seasons, selective gear.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) catch $\\leq$ reproduction rate (b) limits catch to sustainable level (c) e.g. protected areas",
          "commonErrors": [
                    "Confusing quota with a total ban; quotas allow limited sustainable catch."
          ]
},
        },
        {
          id: "ebi10-u9-overfishing-food-supply-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A government is deciding how to manage a declining fish stock.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain three factors that have caused fish stocks to decline.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Describe two sustainable management methods.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "State one benefit and one drawback of using aquaculture to supplement wild stocks.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Fish stock management",
                              "statement": "Overfishing from fleets, bycatch, habitat damage; managed by quotas/protected areas."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Efficient large fleets with sonar/netting catch too many adults.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Bycatch discards waste young/unwanted fish; trawling destroys seabed habitats.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Pollution reduces breeding success; demand for fish increases pressure.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Two valid: quotas, protected areas, minimum sizes, closed seasons, selective gear.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Second distinct sustainable method described.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Benefit: produces fish without depleting wild stocks; drawback: needs feed/waste pollution.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) fleets, bycatch, habitat damage/pollution (b) quotas/protected areas (c) benefit + drawback of aquaculture",
          "commonErrors": [
                    "Listing only one factor type; need three distinct causes."
          ]
},
        },
        {
          id: "ebi10-u9-overfishing-food-supply-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts on fisheries and food supply.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain why fish are an important food source and why overfishing is a problem.",
                    "marks": 4
          },
          {
                    "label": "b",
                    "prompt": "Describe three methods used to manage fish stocks sustainably.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Evaluate the use of aquaculture as a solution to declining wild fish stocks.",
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
                              "name": "Fisheries",
                              "statement": "Fish supply protein; overfishing removes adults faster than reproduction."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Fish provide protein and income for millions; demand is high.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Efficient fleets catch more than reproduction can replace.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Adult removal reduces breeding, causing stock collapse.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Food webs disrupted and fishing communities lose livelihoods.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Three methods named: quotas; marine protected areas; minimum landing size; closed seasons; selective gear.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each method explained: quotas limit catch; protected areas allow stocks to recover; minimum sizes protect breeding adults.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Third method correctly described (closed seasons/closed areas or selective gear).",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Aquaculture produces fish in controlled conditions, reducing pressure on wild stocks.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Drawbacks: needs feed (often wild fish), waste pollution, disease/escape risks — balanced judgement.",
                              "marks": 2,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) important food; overfishing $\\rightarrow$ collapse (b) quotas/protected areas/minimum size (c) reduces wild pressure but has feed/waste issues",
          "commonErrors": [
                    "Listing aquaculture only as a benefit without drawbacks in an evaluation."
          ]
},
        },
      ],
    },
    {
      id: "ebi10-u9-farming-pesticides",
      title: "Fertilisers, pesticides and intensive farming",
      skill: "Explain how fertilisers and pesticides increase crop yield and describe their environmental impacts.",
      lesson: {
        sections: [
          {
            heading: "Increasing crop yield",
            body: "To feed a growing population, farmers use **intensive farming**: high inputs of fertiliser, pesticides, irrigation and machinery to maximise yield per hectare.\n\n**Fertilisers** supply mineral ions plants need:\n- **Nitrates** — for amino acids, proteins and growth (leafy growth)\n- **Phosphates** — for root growth, flowering and fruiting\n- **Potassium** — for overall health, enzyme action and disease resistance\n\nWithout enough of these, plants are stunted or discoloured. Fertilisers replace the nutrients removed at harvest, maintaining soil fertility.",
          },
          {
            heading: "Pesticides",
            body: "**Pesticides** protect crops from organisms that reduce yield:\n- **Herbicides** kill weeds that compete with crops\n- **Insecticides** kill insects that eat crops\n- **Fungicides** kill fungi that cause plant diseases\n\nThey can be sprayed or used as seed treatments. However, they do not distinguish between pests and beneficial organisms.",
          },
          {
            heading: "Environmental impacts",
            body: "Problems caused by intensive farming include:\n\n- **Fertiliser runoff** $\\rightarrow$ eutrophication of rivers and lakes\n- **Pesticide residues** — harm beneficial insects (bees), birds and other wildlife; can enter food chains and be biomagnified\n- **Soil degradation** — loss of organic matter and soil structure\n- **Water use** — irrigation can deplete water supplies\n- **Greenhouse gases** — livestock and fertiliser production contribute to emissions\n\n**Sustainable alternatives**: organic farming, integrated pest management (using natural predators and targeted spraying), crop rotation, and precision application of fertiliser.",
          },
        ],
        keyFormulas: [
          { name: "NPK fertiliser", statement: "Nitrates (growth), Phosphates (roots/fruit), Potassium (general health)" },
          { name: "Pesticide types", statement: "Herbicides = weeds; insecticides = insects; fungicides = fungi" },
        ],
        workedExample: {
          problem: "A farmer notices his wheat crop has yellowing leaves and poor growth. A soil test shows low nitrate levels. Explain the problem and the solution.",
          solution: "Nitrates are needed for amino acid and protein synthesis and leaf growth. Low nitrate causes yellowing (chlorosis) and stunted growth. Applying a nitrate-containing fertiliser should restore growth and yield.",
        },
      },
      questions: [
        {
          id: "ebi10-u9-farming-pesticides-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main purpose of spraying crops with herbicide?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "To kill weeds that compete with the crop"
                    },
                    {
                              "id": "b",
                              "text": "To fertilise the soil"
                    },
                    {
                              "id": "c",
                              "text": "To kill insects eating the crop"
                    },
                    {
                              "id": "d",
                              "text": "To water the plants"
                    }
          ],
          "correctChoiceId": "a"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Herbicide",
                              "statement": "A pesticide that kills weeds."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Herbicides specifically target weeds; insecticides target insects, fertilisers supply nutrients.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "**(a)** To kill weeds competing with the crop",
          "commonErrors": [
                    "Confusing herbicide (weeds) with insecticide (insects)."
          ]
},
        },
        {
          id: "ebi10-u9-farming-pesticides-q2",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "State two mineral ions that fertilisers supply to plants and their main functions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Fertiliser nutrients",
                              "statement": "Nitrates for growth, phosphates for roots/fruit, potassium for health."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Two correct ions with functions, e.g. nitrate for protein/leaf growth; phosphate for roots/flowering; potassium for general health.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Second correct ion-function pair.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "E.g. nitrate (growth/protein), phosphate (roots/fruiting), potassium (health).",
          "commonErrors": [
                    "Naming elements without stating their function."
          ]
},
        },
        {
          id: "ebi10-u9-farming-pesticides-q3",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how fertilisers increase crop yield.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Fertiliser action",
                              "statement": "Supplies mineral ions limiting plant growth."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fertilisers supply nitrates, phosphates and potassium that may be in short supply in soil.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "These ions are needed for protein synthesis, root growth, flowering and general health.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Removing the nutrient limitation allows faster growth and higher yield.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "Supply limiting mineral ions $\\rightarrow$ faster growth $\\rightarrow$ higher yield.",
          "commonErrors": [
                    "Saying fertiliser 'feeds' the plant directly like food; it supplies mineral ions."
          ]
},
        },
        {
          id: "ebi10-u9-farming-pesticides-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A farmer applies nitrogen fertiliser to his fields.",
          parts: [
          {
                    "label": "a",
                    "prompt": "State two roles of nitrate ions in plants.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two environmental problems caused by excess fertiliser use.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Suggest one way to reduce fertiliser pollution.",
                    "marks": 1
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Fertiliser effects",
                              "statement": "Nitrates for growth; excess causes eutrophication."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Nitrate needed for amino acids/proteins and leaf/vegetative growth.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Second role: DNA/RNA synthesis, chlorophyll production.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Runoff causes eutrophication of rivers/lakes; or soil acidification; or greenhouse gas emissions from production.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Second distinct problem.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Any valid: buffer strips, controlled-release fertiliser, soil testing, precision application.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "(a) protein/DNA synthesis, growth (b) eutrophication, acidification (c) buffer strips",
          "commonErrors": [
                    "Only stating the benefit without the environmental problem."
          ]
},
        },
        {
          id: "ebi10-u9-farming-pesticides-q5",
          difficulty: "challenge",
          totalMarks: 6,
          stem: "A farmer uses insecticides to protect his vegetable crop.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Explain two benefits of using insecticides.",
                    "marks": 2
          },
          {
                    "label": "b",
                    "prompt": "Explain two harms caused by insecticides to the environment.",
                    "marks": 2
          },
          {
                    "label": "c",
                    "prompt": "Describe what is meant by integrated pest management.",
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
                              "name": "Pesticides",
                              "statement": "Kill pests to protect yield; but harm non-target organisms."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Kills insect pests that eat crops, increasing yield.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Second benefit: reduces crop losses so farmers get better returns / protects food supply.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Two valid harms: kills beneficial insects (bees/pollinators); harms birds/wildlife; pesticide resistance; residues in food.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Second distinct harm.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Combining methods: natural predators, biological control, targeted spraying only when needed, resistant crop varieties.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Aim is to minimise chemical use while controlling pests — reduces resistance and environmental damage.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) kills pests, raises yield (b) harms wildlife/resistance (c) combine natural + chemical control",
          "commonErrors": [
                    "Listing benefits twice or harms twice without distinct points."
          ]
},
        },
        {
          id: "ebi10-u9-farming-pesticides-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Answer all parts on intensive farming.",
          parts: [
          {
                    "label": "a",
                    "prompt": "Describe three inputs used in intensive farming and their purposes.",
                    "marks": 3
          },
          {
                    "label": "b",
                    "prompt": "Explain two problems caused by fertiliser and pesticide use.",
                    "marks": 3
          },
          {
                    "label": "c",
                    "prompt": "Discuss two sustainable alternatives to intensive farming.",
                    "marks": 2
          },
          {
                    "label": "d",
                    "prompt": "Explain why sustainable methods may produce lower yields than intensive methods.",
                    "marks": 2
          }
],
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Intensive farming",
                              "statement": "High inputs (fertiliser, pesticide, irrigation) for maximum yield."
                    }
          ],
          "steps": [
                    {
                              "part": "a",
                              "reasoning": "Three inputs: fertilisers (nutrients), pesticides (pest control), irrigation/machinery (water/mechanisation).",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Each input correctly linked to its purpose.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "a",
                              "reasoning": "Third input with purpose, e.g. high-yielding varieties or mechanisation for efficiency.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "b",
                              "reasoning": "Two problems: eutrophication from fertiliser runoff; pesticide harm to wildlife/resistance; soil degradation.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Each problem explained with mechanism.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "b",
                              "reasoning": "Second distinct problem explained.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "c",
                              "reasoning": "Two sustainable methods named: organic farming; integrated pest management; crop rotation; precision fertiliser use.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "c",
                              "reasoning": "Second distinct sustainable method explained.",
                              "marks": 1,
                              "markCode": "A"
                    },
                    {
                              "part": "d",
                              "reasoning": "Without heavy inputs, growth is limited by natural nutrient/pest levels, so yields are lower per hectare.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "part": "d",
                              "reasoning": "Trade-off: lower yield but less environmental damage and often better long-term sustainability.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "(a) fertiliser/pesticide/irrigation (b) eutrophication + wildlife harm (c) organic/IPM (d) lower inputs $\\rightarrow$ lower yield",
          "commonErrors": [
                    "Assuming sustainable always means higher yield; it usually means lower but more sustainable output."
          ]
},
        },
      ],
    },
  ],

};
