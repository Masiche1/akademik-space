import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "bio9-u2-lesson-2-3",
  code: "2-3",
  title: "Cycling of Matter",
  goal: "I CAN explain how photosynthesis and respiration cycle carbon through Earth's systems, and calculate energy transfer efficiency between trophic levels.",
  standards: [
    "HS-LS2-5",
    "HS-LS2-4",
    "CCC: Energy and Matter",
    "SEP: Using Mathematics and Computational Thinking",
  ],
  vocabulary: [
    {
      term: "Carbon cycle",
      definition:
        "The movement of carbon among the atmosphere, living organisms, oceans, soil and rock.",
    },
    {
      term: "Decomposer",
      definition:
        "An organism, such as a fungus or bacterium, that breaks down dead matter and returns carbon dioxide and nutrients to the environment.",
    },
    {
      term: "Trophic level",
      definition:
        "The position of an organism in a food chain, defined by how many energy transfers it is from the producers.",
    },
    {
      term: "Producer",
      definition:
        "An organism that makes its own organic molecules from inorganic matter, usually by photosynthesis.",
    },
    {
      term: "Biomass",
      definition:
        "The total mass of organic matter in organisms, which stores chemical energy.",
    },
    {
      term: "Energy transfer efficiency",
      definition:
        "The percentage of the energy at one trophic level that is passed on to the next level.",
    },
    {
      term: "Carbon sink",
      definition:
        "A reservoir that takes in more carbon than it releases, such as forests and oceans.",
    },
  ],
  concepts: [
    {
      id: "bio9-u2-carbon-cycle",
      title: "The carbon cycle",
      skill:
        "Explain how photosynthesis, respiration, decomposition and combustion move carbon, and interpret carbon flux data.",
      lesson: {
        sections: [
          {
            heading: "Carbon moves between reservoirs",
            body: "Carbon atoms are never created or destroyed; they are cycled between reservoirs: the **atmosphere** (as $\\text{CO}_2$), **living organisms**, **oceans**, **soil** and **fossil fuels and rock**.\n\n- **Photosynthesis** removes $\\text{CO}_2$ from the atmosphere and builds it into glucose and other organic molecules (biomass).\n- **Cellular respiration** in producers, consumers and decomposers returns carbon to the atmosphere as $\\text{CO}_2$.\n- **Feeding** passes carbon compounds along food chains.\n- **Decomposition** returns carbon from dead organisms and waste to the soil and atmosphere.\n- **Combustion** of fossil fuels and wood releases carbon stored for millions of years.",
          },
          {
            heading: "Balance and imbalance",
            body: "Before the Industrial Revolution, photosynthesis and respiration were almost balanced, so atmospheric $\\text{CO}_2$ changed little. Burning fossil fuels and clearing forests now adds carbon to the atmosphere faster than natural sinks remove it, so $\\text{CO}_2$ levels rise.\n\nCarbon amounts are measured in **gigatons of carbon (GtC)**. Net change in a reservoir $=$ total input $-$ total output.",
          },
          {
            heading: "Photosynthesis and respiration are linked",
            body: "The products of one process are the reactants of the other.\n\n- Photosynthesis: $6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$\n- Respiration: $\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O}$\n\nPhotosynthesis stores light energy in glucose; respiration releases that energy as ATP and heat. Matter is recycled, but energy flows through and is lost as heat.",
          },
        ],
        keyFormulas: [
          {
            name: "Net change",
            statement: "net change in reservoir = inputs $-$ outputs",
          },
          {
            name: "Percent change",
            statement:
              "$\\dfrac{\\text{change}}{\\text{original}}\\times100\\%$",
          },
          {
            name: "Carbon-releasing processes",
            statement:
              "Respiration, decomposition and combustion release $\\text{CO}_2$; photosynthesis removes it",
          },
        ],
        workedExample: {
          problem:
            "Each year the atmosphere gains 100 GtC from respiration and decomposition and 8 GtC from burning fossil fuels, and loses 105 GtC to photosynthesis and the oceans. Find the net change per year.",
          solution:
            "Inputs $=100+8=108$ GtC. Outputs $=105$ GtC. Net change $=108-105=+3$ GtC per year, so atmospheric carbon increases.",
        },
      },
      questions: [
        {
          id: "bio9-u2-carbon-cycle-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which process removes carbon dioxide from the atmosphere and builds it into organic molecules?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Combustion" },
              { id: "b", text: "Photosynthesis" },
              { id: "c", text: "Cellular respiration" },
              { id: "d", text: "Decomposition" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Photosynthesis",
                statement:
                  "Photosynthesis fixes atmospheric $\\text{CO}_2$ into organic molecules.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The other three processes all release carbon dioxide into the atmosphere.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Photosynthesis",
            commonErrors: [
              "Choosing respiration, which releases carbon dioxide.",
              "Thinking decomposition removes carbon dioxide because dead matter disappears.",
            ],
            examinerNote: "B1 for photosynthesis.",
          },
        },
        {
          id: "bio9-u2-carbon-cycle-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Each year the atmosphere gains 118 GtC from respiration and decomposition and 9 GtC from burning fossil fuels. It loses 120 GtC to photosynthesis. Assume no other flows.\n\nCalculate the net change in atmospheric carbon each year, in GtC. Give a positive value for a gain.",
          response: {
            type: "numeric",
            parts: [{ label: "Net change", answer: 7, unit: "GtC per year" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Net change",
                statement: "net change = total input $-$ total output",
              },
            ],
            steps: [
              {
                reasoning: "Add all inputs to the atmosphere.",
                working: "118+9=127",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Subtract the output.",
                working: "127-120",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Evaluate; positive means the atmosphere gains carbon.",
                working: "+7\\text{ GtC per year}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$+7\\text{ GtC per year}$",
            commonErrors: [
              "Leaving out the fossil fuel input and getting $-2$.",
              "Subtracting the wrong way round and giving $-7$.",
            ],
            examinerNote:
              "M1 for 118 + 9 (127). M1 for subtracting 120. A1 for +7. Allow 7.",
          },
        },
        {
          id: "bio9-u2-carbon-cycle-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The atmosphere contains 850 GtC and gains a net 7 GtC each year. Assume this net gain stays constant.\n\nCalculate the percentage increase in atmospheric carbon over 10 years. Give your answer to 2 significant figures.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Percent increase",
                answer: 8.2,
                unit: "%",
                tolerance: 0.05,
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Percent change",
                statement:
                  "$\\text{percent change}=\\dfrac{\\text{change}}{\\text{original}}\\times100\\%$",
              },
            ],
            steps: [
              {
                reasoning: "Find the total gain over 10 years.",
                working: "7\\times10=70\\text{ GtC}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Divide by the original amount.",
                working: "\\frac{70}{850}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Convert to a percentage.",
                working: "\\frac{70}{850}\\times100=8.235\\ldots\\%",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning: "Round to 2 significant figures.",
                working: "8.2\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$8.2\\%$",
            commonErrors: [
              "Dividing by the final amount (920) and getting 7.6%.",
              "Dividing 7 by 850 and giving 0.82%.",
            ],
            examinerNote:
              "M1 70 GtC. M1 70/850. A1 8.2 (allow 8.24). A1 8.2 to 2 s.f. Full marks for 8.2.",
          },
        },
        {
          id: "bio9-u2-carbon-cycle-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A forest ecosystem takes up carbon dioxide by photosynthesis and returns it by respiration and decomposition. A fire then burns part of the forest, and the land is later replanted with young trees.",
          parts: [
            {
              label: "a",
              prompt:
                "Name the process by which carbon in dead leaves is returned to the atmosphere as carbon dioxide, and name the organisms that carry it out.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "A forest takes up 1200 tons of carbon by photosynthesis in a year. Plants and decomposers release 1050 tons by respiration. Calculate the net carbon stored in biomass that year.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain how the fire changes the flow of carbon in the ecosystem.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Explain why a growing young forest acts as a carbon sink.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Suggest why photosynthesis and respiration together recycle matter but not energy.",
              marks: 1,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Carbon cycle",
                statement:
                  "Photosynthesis removes $\\text{CO}_2$; respiration, decomposition and combustion return it.",
              },
              {
                kind: "formula",
                name: "Net storage",
                statement:
                  "net carbon stored = carbon taken up $-$ carbon released",
              },
              {
                kind: "law",
                name: "Energy flow",
                statement:
                  "Energy is transferred as heat to the surroundings and is not recycled.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Decomposition (decay).",
                marks: 1,
                markCode: "B",
              },
              {
                part: "a",
                reasoning:
                  "Carried out by decomposers such as fungi and bacteria, which respire and release $\\text{CO}_2$.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "b",
                reasoning:
                  "Subtract the carbon released from the carbon taken up.",
                working: "1200-1050",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Evaluate.",
                working: "150\\text{ tons}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Combustion rapidly releases the carbon stored in biomass as $\\text{CO}_2$ into the atmosphere.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "c",
                reasoning:
                  "Fewer trees means less photosynthesis, so less $\\text{CO}_2$ is removed.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Young trees grow fast, so photosynthesis takes up more carbon than respiration releases.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "The extra carbon is stored in new biomass (wood, roots), so the forest takes in more carbon than it releases.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "e",
                reasoning:
                  "Carbon and other atoms are reused, but energy is lost as heat at each step and must be resupplied by the Sun.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer:
              "(a) Decomposition by fungi and bacteria (b) $150\\text{ tons}$ (c) Combustion releases $\\text{CO}_2$ and less photosynthesis removes it (d) Photosynthesis exceeds respiration; carbon stored in growing biomass (e) Matter is reused, energy is lost as heat.",
            commonErrors: [
              "In (a) naming photosynthesis.",
              "In (b) adding 1200 and 1050.",
              "In (e) saying energy is destroyed; it is transferred to the surroundings as heat.",
            ],
            examinerNote:
              "(a) Allow decay / rotting; allow 'microorganisms'. (b) Allow 150 without unit. (c) Allow 'burning'. (e) Allow 'energy is not recycled but lost as heat'.",
          },
        },
      ],
    },
    {
      id: "bio9-u2-energy-flow",
      title: "Energy flow and transfer efficiency",
      skill:
        "Explain energy flow through trophic levels and calculate energy transfer efficiency.",
      lesson: {
        sections: [
          {
            heading: "Energy flows one way",
            body: "Producers capture only a small fraction of the sunlight that reaches them. At each trophic level, most energy is lost rather than passed on.\n\nEnergy is lost as:\n\n- **Heat** from cellular respiration (the largest loss).\n- **Waste** (feces and urine) that still contains energy.\n- **Uneaten parts** such as bones, roots and fur, which may go to decomposers.\n\nBecause energy is transferred as heat, it cannot be recycled. Matter, by contrast, cycles.",
          },
          {
            heading: "Transfer efficiency",
            body: "The percentage of energy passed from one trophic level to the next is\n\n$$\\text{efficiency}=\\frac{\\text{energy in the higher level}}{\\text{energy in the lower level}}\\times100\\%$$\n\nA typical value is about **10%** (the 10 percent rule). If producers contain 10 000 kJ, primary consumers receive about 1000 kJ, secondary consumers about 100 kJ and tertiary consumers about 10 kJ.",
          },
          {
            heading: "Pyramids and food chain length",
            body: "A pyramid of energy gets narrower at each higher level. This is why food chains rarely have more than four or five trophic levels: too little energy remains to support more consumers. It also explains why there are fewer top predators than herbivores, and why eating lower on the food chain supports more people per area of land.",
          },
        ],
        keyFormulas: [
          {
            name: "Transfer efficiency",
            statement:
              "$\\dfrac{\\text{energy at higher level}}{\\text{energy at lower level}}\\times100\\%$",
          },
          {
            name: "10 percent rule",
            statement:
              "About 10% of energy passes to the next trophic level; about 90% is lost",
          },
          {
            name: "Energy lost",
            statement: "energy lost = energy in $-$ energy passed on",
          },
        ],
        workedExample: {
          problem:
            "Primary consumers in a field contain 4000 kJ and secondary consumers contain 360 kJ. Calculate the efficiency of energy transfer.",
          solution: "Efficiency $=\\dfrac{360}{4000}\\times100\\%=9\\%$.",
        },
      },
      questions: [
        {
          id: "bio9-u2-energy-flow-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the main way in which energy is lost from a food chain between trophic levels?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It is converted into matter that cycles back to the Sun",
              },
              { id: "b", text: "As heat released during cellular respiration" },
              {
                id: "c",
                text: "It is absorbed by the soil and stored permanently",
              },
              { id: "d", text: "It is destroyed when organisms die" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Conservation of energy",
                statement:
                  "Energy is not destroyed; it is transferred to the surroundings as heat.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Respiration releases energy from glucose; much is transferred as heat and is not available to the next trophic level.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** As heat released during cellular respiration",
            commonErrors: [
              "Thinking energy is destroyed.",
              "Thinking energy recycles like matter.",
            ],
            examinerNote: "B1 for heat / respiration.",
          },
        },
        {
          id: "bio9-u2-energy-flow-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "In a grassland, primary consumers contain 2000 kJ of energy and secondary consumers contain 180 kJ.\n\nCalculate the percentage efficiency of energy transfer from primary to secondary consumers.",
          response: {
            type: "numeric",
            parts: [{ label: "Efficiency", answer: 9, unit: "%" }],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Transfer efficiency",
                statement:
                  "$\\text{efficiency}=\\dfrac{\\text{energy at higher level}}{\\text{energy at lower level}}\\times100\\%$",
              },
            ],
            steps: [
              {
                reasoning:
                  "Divide the energy in the secondary consumers by the energy in the primary consumers.",
                working: "\\frac{180}{2000}\\times100",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Evaluate.",
                working: "9\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$9\\%$",
            commonErrors: [
              "Dividing 2000 by 180 and getting 1111%.",
              "Giving 90% by calculating the energy lost.",
            ],
            examinerNote: "M1 for 180 / 2000 (oe). A1 for 9.",
          },
        },
        {
          id: "bio9-u2-energy-flow-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Grass in a field fixes 50 000 kJ of energy per square meter per year. Assume that 10% of the energy passes to the next trophic level at every stage in the chain: grass $\\rightarrow$ grasshopper $\\rightarrow$ frog $\\rightarrow$ snake $\\rightarrow$ hawk.\n\nCalculate the energy, in kJ per square meter per year, available to the hawk.",
          response: {
            type: "numeric",
            parts: [
              {
                label: "Energy to hawk",
                answer: 5,
                unit: "kJ per square meter per year",
              },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "10 percent rule",
                statement:
                  "Each transfer passes on 10% (a factor of 0.1) of the energy.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The hawk is the fifth trophic level, so there are four transfers.",
                working: "\\text{4 transfers}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Multiply by 0.1 four times.",
                working: "50000\\times0.1^4",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Show the intermediate values: 5000, 500, 50.",
                working:
                  "50000\\rightarrow5000\\rightarrow500\\rightarrow50\\rightarrow5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "State the final value with units.",
                working: "5\\text{ kJ/m}^2\\text{/year}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$5\\text{ kJ/m}^2\\text{/year}$",
            commonErrors: [
              "Using only three transfers and getting 50 kJ.",
              "Using five transfers and getting 0.5 kJ.",
            ],
            examinerNote:
              "Count transfers carefully: five trophic levels need four transfers. Allow full marks for 5 without working. Allow ecf for the wrong number of transfers (2 marks max).",
          },
        },
        {
          id: "bio9-u2-energy-flow-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A study of a lake measured the energy stored in each trophic level in kJ per square meter per year.\n\n| Trophic level | Energy (kJ/m$^2$/year) |\n| --- | --- |\n| Producers (algae) | 8000 |\n| Primary consumers (zooplankton) | 900 |\n| Secondary consumers (small fish) | 90 |\n| Tertiary consumers (large fish) | 6 |",
          parts: [
            {
              label: "a",
              prompt:
                "Calculate the percentage efficiency of energy transfer from producers to primary consumers. Give your answer to 3 significant figures.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Calculate the energy lost between the primary and secondary consumers.",
              marks: 1,
            },
            {
              label: "c",
              prompt:
                "Calculate the percentage efficiency of the transfer from secondary to tertiary consumers. Give your answer to 2 significant figures.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "State **two** ways in which energy is lost between trophic levels.",
              marks: 2,
            },
            {
              label: "e",
              prompt:
                "Use the data to explain why the lake supports few large fish compared with zooplankton.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Transfer efficiency",
                statement:
                  "$\\text{efficiency}=\\dfrac{\\text{energy at higher level}}{\\text{energy at lower level}}\\times100\\%$",
              },
              {
                kind: "law",
                name: "Conservation of energy",
                statement:
                  "Energy not passed on is transferred to the surroundings, mainly as heat from respiration.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Divide the energy in primary consumers by the energy in producers.",
                working: "\\frac{900}{8000}\\times100",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Evaluate and round to 3 s.f.",
                working: "11.25\\%\\approx11.3\\%",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Subtract the energy in the secondary consumers from that in the primary consumers.",
                working: "900-90=810\\text{ kJ/m}^2\\text{/year}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Divide tertiary by secondary consumer energy.",
                working: "\\frac{6}{90}\\times100",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Evaluate and round to 2 s.f.",
                working: "6.67\\%\\approx6.7\\%",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Heat lost through respiration.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Energy in waste (feces, urine) or in uneaten parts such as bones and shells.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "e",
                reasoning:
                  "Energy decreases at each transfer: only 6 kJ reaches the large fish compared with 900 kJ at the zooplankton level.",
                marks: 1,
                markCode: "B",
              },
              {
                part: "e",
                reasoning:
                  "Large fish need a minimum amount of energy to survive, so the small energy supply supports few individuals.",
                marks: 1,
                markCode: "R",
              },
              {
                part: "e",
                reasoning:
                  "Most energy is lost as heat in respiration at lower levels, so very little remains for the highest level.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer:
              "(a) $11.3\\%$ (b) $810\\text{ kJ/m}^2\\text{/year}$ (c) $6.7\\%$ (d) Heat from respiration; waste or uneaten parts (e) Energy falls at each level, so only 6 kJ remains at the top level, which supports few large fish.",
            commonErrors: [
              "In (a) dividing 8000 by 900.",
              "In (b) calculating the percentage instead of the amount.",
              "In (e) saying energy is destroyed or 'used up' without mentioning heat or losses.",
            ],
            examinerNote:
              "(a) Allow 11.25 for M1A0 only if not rounded to 3 s.f.; rounded 11.3 for A1. (c) Allow 6.6 only if truncated is shown with working; 6.7 expected. (d) Reject 'energy is used up'. Allow 'movement' as a use of energy.",
          },
        },
      ],
    },
  ],
};
