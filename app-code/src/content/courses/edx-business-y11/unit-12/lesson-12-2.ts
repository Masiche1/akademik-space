import type { Lesson } from "../../../types.ts";

export const lesson122: Lesson = {
  id: "ebz11-u12-lesson-12-2",
  code: "12-2",
  title: "Capital, Labour and Specialisation",
  goal: "I CAN compare capital-intensive and labour-intensive production and evaluate specialisation.",
  standards: ["Edexcel IGCSE Business 4BS0 — Business Operations", "4BS0 5.2 Production", "4BS0 5.3 Factors of production"],
  
  vocabulary: [
    { term: "Capital-intensive", definition: "Production using relatively more capital than labour." },
    { term: "Labour-intensive", definition: "Production using relatively more labour than capital." },
    { term: "Specialisation", definition: "Workers or businesses focusing on narrow tasks or products." },
    { term: "Job rotation", definition: "Workers moving between different tasks to reduce boredom." },
  ],
  concepts: [
    {
      id: "ebz11-u12-intensity",
      title: "Capital-Intensive and Labour-Intensive Production",
      skill: "Compare production methods based on the balance of capital and labour.",
      lesson: {
        sections: [
          {
            heading: "Capital-intensive production",
            body: "Capital-intensive businesses rely heavily on machinery, equipment and technology. Examples include car plants, breweries, bottling lines and automated warehouses.\n\n**Advantages**: consistent output, high speed, lower unit costs at high volume, less dependence on scarce labour. **Disadvantages**: high initial investment, maintenance costs, less flexible for small batches, possible job losses and vulnerability to breakdowns.",
          },
          {
            heading: "Labour-intensive production",
            body: "Labour-intensive businesses rely mainly on workers. Examples include restaurants, hair salons, care services, tailoring and craft production.\n\n**Advantages**: flexible, lower capital cost, easier to adapt products, workers can handle varied tasks. **Disadvantages**: higher labour costs, slower output, quality may vary, harder to scale quickly.",
          },
        ],
        keyFormulas: [
          { name: "Capital per worker", statement: "Capital equipment used / number of workers" },
          { name: "Production choice", statement: "Match capital and labour to product, volume and demand" },
        ],
        workedExample: {
          problem: "A bakery can buy a dough machine or hire two extra bakers. Which is more capital-intensive?",
          solution: "Buying the dough machine increases capital relative to labour, so the bakery becomes more capital-intensive.",
        },
      },
      questions: [
        {
          id: "ebz11-u12-intensity-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "Which business is most likely to be capital-intensive?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "A hairdressing salon"
                    },
                    {
                              "id": "b",
                              "text": "A car assembly plant"
                    },
                    {
                              "id": "c",
                              "text": "A gardening service"
                    },
                    {
                              "id": "d",
                              "text": "A tutoring agency"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Capital-intensive",
                              "statement": "Relatively high capital use."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Car assembly uses heavy machinery and robots.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Car assembly plant",
          "commonErrors": [
                    "Confusing labour-intensive services with factories."
          ]
},
        },
        {
          id: "ebz11-u12-intensity-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give one example of a capital-intensive business and one of a labour-intensive business.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Intensity examples",
                              "statement": "Machines versus workers."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Capital-intensive example: car factory or bottling plant.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Labour-intensive example: restaurant, salon or care service.",
                              "marks": 1,
                              "markCode": "AO1"
                    },
                    {
                              "reasoning": "Examples should match the capital/labour balance.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Factory = capital-intensive; service/craft = labour-intensive.",
          "commonErrors": [
                    "Using businesses with both capital and labour without judging balance."
          ]
},
        },
        {
          id: "ebz11-u12-intensity-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two advantages of capital-intensive production for a large manufacturer.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Capital intensity",
                              "statement": "Machines can raise speed and consistency at scale."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Machines produce output quickly and consistently.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "High volume can reduce unit costs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Less dependence on skilled labour shortages.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Quality may be more standardised.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Speed, consistency, lower unit costs and less labour dependence.",
          "commonErrors": [
                    "Only saying machines are efficient without explaining why."
          ]
},
        },
        {
          id: "ebz11-u12-intensity-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Compare the suitability of capital-intensive and labour-intensive production for a business making custom wooden furniture.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Production intensity",
                              "statement": "Custom low-volume work favours flexibility."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Custom furniture has varied designs and small batches.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Labour-intensive craft workers can adapt to customer requests.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Capital-intensive machines suit repeat production better.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Skilled labour may command higher prices for craftsmanship.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A mixed approach may balance efficiency and customisation.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Labour-intensive or mixed production is more suitable for custom, varied furniture.",
          "commonErrors": [
                    "Choosing automation without considering customisation."
          ]
},
        },
        {
          id: "ebz11-u12-intensity-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Evaluate whether a small bakery should become more capital-intensive as it grows.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Growth and intensity",
                              "statement": "Higher volume may justify machines, but costs and flexibility matter."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Growth may create enough demand for machines to pay off.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Machines can raise consistency and output.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Initial capital cost may be too high for a small bakery.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Maintenance and breakdowns create new risks.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Less flexibility may be a problem if demand varies.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Staff may need retraining or fewer workers may be needed.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Decision should depend on volume, cash flow and product type.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Capital intensity can help only if demand is stable enough to justify the investment.",
          "commonErrors": [
                    "Ignoring financing and demand risk."
          ]
},
        },
        {
          id: "ebz11-u12-intensity-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A clothing company currently employs 100 machinists. It can invest in automated cutting and sewing lines, keep labour-intensive production, or use a mixed system. Evaluate the three options.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Production systems",
                              "statement": "Compare cost, output, flexibility and employment."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Reach a justified recommendation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Automation raises speed and consistency.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Automation requires large capital investment.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Labour-intensive production is flexible for designs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Labour-intensive production has higher unit labour costs.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A mixed system can automate standard items and use workers for custom work.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Automation may reduce jobs and affect morale.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Machines may struggle with frequent design changes.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Mixed systems balance cost and flexibility.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "The best option depends on order volume and product range.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "A justified recommendation should weigh all three options.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Choose automation for standard high-volume output, labour for flexibility, or a mixed system for balance.",
          "commonErrors": [
                    "No recommendation.",
                    "Ignoring employment effects."
          ]
},
        },
      ],
    },
    {
      id: "ebz11-u12-specialisation",
      title: "Division of Labour and Specialisation",
      skill: "Explain the benefits and drawbacks of dividing work into specialised tasks.",
      lesson: {
        sections: [
          {
            heading: "Division of labour",
            body: "**Division of labour** splits production into narrow tasks so workers or businesses become specialists. In a car plant, one worker fits doors, another installs engines and another checks quality.\n\n**Benefits**: faster output, higher skill in each task, simpler training, easier to introduce machinery and potential cost savings. **Drawbacks**: boredom and monotony, reduced flexibility, dependence on other workers, coordination problems and vulnerability if one task fails.",
          },
          {
            heading: "Managing specialisation",
            body: "Businesses can reduce drawbacks through **job rotation** (workers move between tasks), **job enlargement** (more tasks per worker), teamworking, incentives and good communication.\n\nSpecialisation can also occur between businesses — one firm makes components, another assembles the final product. This can improve efficiency but creates supply-chain dependence.",
          },
        ],
        keyFormulas: [
          { name: "Division of labour", statement: "Splitting work into specialised tasks" },
          { name: "Job rotation", statement: "Moving workers between tasks to reduce monotony" },
        ],
        workedExample: {
          problem: "A bakery divides cake production into mixing, baking, icing and packing. Explain two benefits.",
          solution: "Workers become faster at repeated tasks and training is simpler, raising productivity.",
        },
      },
      questions: [
        {
          id: "ebz11-u12-specialisation-q1",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "What is division of labour?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "Sharing profits equally"
                    },
                    {
                              "id": "b",
                              "text": "Splitting production into specialised tasks"
                    },
                    {
                              "id": "c",
                              "text": "Hiring more managers"
                    },
                    {
                              "id": "d",
                              "text": "Working longer hours"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Division of labour",
                              "statement": "Production split into specialised tasks."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Division of labour = specialised repeated tasks.",
                              "marks": 2,
                              "markCode": "AO1"
                    }
          ],
          "finalAnswer": "**(b)** Specialised tasks",
          "commonErrors": [
                    "Confusing with teamwork."
          ]
},
        },
        {
          id: "ebz11-u12-specialisation-q2",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "Give one benefit and one drawback of specialisation for workers.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Specialisation",
                              "statement": "Efficiency versus boredom and dependence."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Benefit: workers become skilled and faster at one task.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Drawback: repetitive work can cause boredom.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Workers may depend on others to complete the product.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Benefit = skill/speed; drawback = boredom/dependence.",
          "commonErrors": [
                    "Only one side."
          ]
},
        },
        {
          id: "ebz11-u12-specialisation-q3",
          difficulty: "core",
          totalMarks: 4,
          stem: "Explain two ways a business can reduce the drawbacks of specialisation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "technique",
                              "name": "Managing specialisation",
                              "statement": "Job rotation, enlargement, teamwork and incentives."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Job rotation lets workers move between tasks.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "This reduces boredom and builds flexibility.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Job enlargement gives workers more varied tasks.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Teamwork and incentives can improve motivation and coordination.",
                              "marks": 1,
                              "markCode": "AO2"
                    }
          ],
          "finalAnswer": "Rotate jobs, enlarge roles and use teamwork/incentives.",
          "commonErrors": [
                    "Repeating benefits of specialisation instead of solutions."
          ]
},
        },
        {
          id: "ebz11-u12-specialisation-q4",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "Explain why specialisation may be less suitable for a small business making personalised gifts.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Specialisation limits",
                              "statement": "Narrow tasks suit repeat production, not varied work."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Personalised gifts require varied designs and tasks.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Specialisation is best where tasks repeat many times.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "A small business may not have enough workers to split tasks.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Workers may need broad skills to handle whole orders.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Flexibility is more valuable than narrow speed gains.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Varied, low-volume work needs flexible workers rather than narrow specialisation.",
          "commonErrors": [
                    "Assuming specialisation always increases efficiency."
          ]
},
        },
        {
          id: "ebz11-u12-specialisation-q5",
          difficulty: "challenge",
          totalMarks: 7,
          stem: "Discuss the impact of division of labour on productivity and employee motivation.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "principle",
                              "name": "Specialisation effects",
                              "statement": "Can raise output but may reduce satisfaction."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Repeated tasks can make workers faster.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Skill in one task can reduce errors.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Training is quicker for narrow tasks.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Monotony can lower motivation and increase absenteeism.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Dependence on other workers can cause coordination delays.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "One bottleneck can stop the whole production line.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Businesses should balance efficiency with job design.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Specialisation raises productivity but can harm motivation if jobs are poorly designed.",
          "commonErrors": [
                    "One-sided answer."
          ]
},
        },
        {
          id: "ebz11-u12-specialisation-q6",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A furniture factory wants to increase output. It could introduce an assembly line with narrow tasks, keep craftspeople making whole pieces, or use teams where each team completes entire products. Evaluate the three approaches.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "comparison",
                              "name": "Work organisation",
                              "statement": "Compare efficiency, flexibility, motivation and coordination."
                    },
                    {
                              "kind": "skill",
                              "name": "Evaluation",
                              "statement": "Recommend a justified approach."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Assembly line maximises repetition and speed.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Assembly line suits standardised high-volume products.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Craft production allows high quality and customisation.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Craft production is slower and harder to scale.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Teams can combine variety with responsibility.",
                              "marks": 1,
                              "markCode": "AO2"
                    },
                    {
                              "reasoning": "Teams need good coordination and leadership.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Assembly line may cause boredom and dependency.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "Craft production may be too costly for mass market.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "The best approach depends on product standardisation and volume.",
                              "marks": 1,
                              "markCode": "AO3"
                    },
                    {
                              "reasoning": "A justified recommendation should balance efficiency and worker needs.",
                              "marks": 1,
                              "markCode": "AO3"
                    }
          ],
          "finalAnswer": "Use assembly lines for standard volume, crafts for premium custom work, or teams for balanced flexibility.",
          "commonErrors": [
                    "No evaluation.",
                    "Ignoring motivation."
          ]
},
        },
      ],
    },
  ],
  notes: [
    {
      id: "ebz11-u12-intensity-specialisation-notes",
      title: "Capital, labour and specialisation — notes",
      summary: "Choose the capital/labour balance and level of specialisation that fit product, volume and demand.",
      sections: [
        { heading: "Intensity", body: "Capital-intensive uses machines; labour-intensive uses workers. High volume favours capital; variation favours labour." },
        { heading: "Specialisation", body: "Narrow tasks can raise speed and skill but may cause boredom, dependence and coordination problems." },
        { heading: "Management", body: "Job rotation, job enlargement, teamwork and incentives can reduce specialisation drawbacks." },
      ],
    },
  ],
};
