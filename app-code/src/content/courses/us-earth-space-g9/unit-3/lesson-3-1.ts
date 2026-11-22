import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "ess9-u3-lesson-3-1",
  code: "3-1",
  title: "Natural Resources",
  goal: "I CAN explain how the uneven distribution of natural resources shapes human activity, and evaluate energy and mineral solutions using benefit-cost ratios.",
  standards: ["HS-ESS3-1", "HS-ESS3-2", "SEP: Constructing Explanations and Designing Solutions", "CCC: Cause and Effect"],
  vocabulary: [
    { term: "Natural resource", definition: "A material or energy source from Earth that people use, such as water, soil, fossil fuels, minerals and sunlight." },
    { term: "Renewable resource", definition: "A resource that is replaced by natural processes on a human time scale, such as solar, wind or sustainably managed forests." },
    { term: "Nonrenewable resource", definition: "A resource that forms so slowly that it is used up faster than it is replaced, such as coal, oil and metal ores." },
    { term: "Reserve", definition: "The part of a resource that has been located and can be extracted at a profit with current technology." },
    { term: "Ore", definition: "A rock that contains a high enough concentration of a valuable mineral or metal to be mined for profit." },
    { term: "Benefit-cost ratio", definition: "Total benefits divided by total costs, using the same units. A ratio above 1 means the benefits are greater than the costs." },
  ],
  concepts: [
    {
      id: "ess9-u3-resource-distribution",
      title: "Distribution of natural resources",
      skill: "Explain how geologic processes cause uneven resource distribution and how this shapes human activity.",
      lesson: {
        sections: [
          {
            heading: "Why resources are unevenly distributed",
            body: "Natural resources are not spread evenly because they form through geologic and biologic processes that happen only in certain places.\n\n- **Fossil fuels** formed from buried organisms in ancient basins, so coal, oil and gas are found in specific sedimentary basins.\n- **Metal ores** often form where magma and hot fluids concentrate metals, which is common near plate boundaries. Large copper deposits lie along the convergent boundary of the Andes.\n- **Fresh water and fertile soil** depend on climate, rock type and landforms. Rivers, aquifers and glaciers are found only where precipitation and geology allow.\n- **Wind and solar energy** depend on latitude, cloud cover and local geography.",
          },
          {
            heading: "How distribution shapes human activity",
            body: "Where resources are located influences where people settle, what industries grow and how nations trade. Early cities grew on river floodplains with water and fertile soil. Mining towns developed next to ore deposits. Countries without a resource must import it, which creates trade routes and sometimes conflict.\n\nA **reserve** is different from a total resource. Only the part that can be extracted profitably with current technology counts as a reserve, so reserves change with prices and technology.",
          },
          {
            heading: "Estimating how long a reserve lasts",
            body: "A simple estimate divides the reserve by the yearly use. Real supplies last a different length of time because use changes, new deposits are found and recycling reduces demand.\n\n$$\\text{years of supply}=\\frac{\\text{reserve}}{\\text{annual use}}$$",
          },
        ],
        keyFormulas: [
          { name: "Years of supply", statement: "$\\text{years of supply}=\\dfrac{\\text{reserve}}{\\text{annual use}}$" },
          { name: "Percent share", statement: "$\\text{share}=\\dfrac{\\text{part}}{\\text{total}}\\times100\\%$" },
          { name: "Key idea", statement: "Resource location is controlled by geologic processes, so it is uneven." },
        ],
        workedExample: {
          problem: "A nation has a natural gas reserve of 90 trillion cubic feet and uses 3 trillion cubic feet each year. Estimate how many years the reserve will last at a constant rate of use, and give one reason the estimate may be wrong.",
          solution: "Years of supply $=\\dfrac{90}{3}=30$ years. The estimate assumes constant use and no new discoveries. If demand grows, the reserve will run out sooner. If new deposits are found or recycling or efficiency improve, it will last longer.",
        },
      },
      questions: [
        {
          id: "ess9-u3-resource-distribution-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which of these is a nonrenewable natural resource?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Sustainably managed forest" },
              { id: "b", text: "Coal" },
              { id: "c", text: "Sunlight" },
              { id: "d", text: "Wind energy" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Nonrenewable resource", statement: "A nonrenewable resource forms far more slowly than it is used, so it cannot be replaced on a human time scale." },
            ],
            steps: [
              { reasoning: "Coal formed over millions of years from buried plant material. It is used much faster than it forms, so it is nonrenewable.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Coal",
            commonErrors: ["Choosing the forest: a forest that is harvested no faster than it regrows is renewable.", "Thinking that any resource taken from the ground is renewable."],
            examinerNote: "B1 for coal.",
          },
        },
        {
          id: "ess9-u3-resource-distribution-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A country has a proven oil reserve of 120 billion barrels. The country uses 3 billion barrels of oil each year.\n\nCalculate how many years the reserve would last if use stays constant.",
          response: { type: "numeric", parts: [{ label: "Years of supply", answer: 40, unit: "years" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Years of supply", statement: "$\\text{years of supply}=\\dfrac{\\text{reserve}}{\\text{annual use}}$" },
            ],
            steps: [
              { reasoning: "Divide the reserve by the amount used each year.", working: "\\text{years}=\\frac{120}{3}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with units.", working: "\\text{years}=40\\text{ years}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$40\\text{ years}$",
            commonErrors: ["Multiplying 120 by 3 to get 360.", "Dividing 3 by 120 to get 0.025."],
            examinerNote: "M1 for 120 / 3 (oe). A1 for 40 years.",
          },
        },
        {
          id: "ess9-u3-resource-distribution-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Large copper deposits are found along the Andes mountains, where an oceanic plate sinks beneath South America. Many countries with no copper deposits depend on imports of copper.\n\nExplain why copper is unevenly distributed and describe **one** effect this has on human activity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Resources form in specific settings", statement: "Ore deposits form where geologic processes, such as magma and hot fluids near plate boundaries, concentrate metals." },
              { kind: "principle", name: "Distribution shapes activity", statement: "Uneven resources lead to mining industries, trade and dependence on imports." },
            ],
            steps: [
              { reasoning: "Copper ore forms only where particular geologic processes occur, not everywhere.", marks: 1, markCode: "B" },
              { reasoning: "At convergent boundaries, magma rises as the plate sinks and hot fluids carry dissolved metals into the crust, where they are concentrated.", marks: 1, markCode: "B" },
              { reasoning: "Therefore deposits are clustered along such belts, and countries elsewhere have none.", marks: 1, markCode: "R" },
              { reasoning: "An effect on human activity: mining industries develop near the deposits, or other countries import copper and trade develops, or dependence causes economic or political tension.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Geologic processes such as magma and hot fluids at plate boundaries concentrate copper in certain regions only; countries with deposits build mining economies and others must import the metal, creating trade and dependence.",
            commonErrors: ["Saying copper is 'used up' in some countries rather than never having formed there.", "Describing the effect without linking it to the location of the deposits."],
            examinerNote: "B1 geologic processes are local. B1 for magma / hot fluids / plate boundary mechanism. R1 for linking mechanism to the uneven distribution. B1 for a valid human effect (mining jobs, imports, trade, dependence, conflict).",
          },
        },
        {
          id: "ess9-u3-resource-distribution-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A mineral used in batteries has the following known reserves.\n\nCountry P: 11 million tonnes\nCountry Q: 7 million tonnes\nCountry R: 4 million tonnes\nAll other countries combined: 18 million tonnes\n\nTotal world use of the mineral is 0.8 million tonnes per year.",
          parts: [
            { label: "a", prompt: "Calculate the percentage of the world's reserves that is found in Country P.", marks: 2 },
            { label: "b", prompt: "Explain the difference between a mineral reserve and the total amount of the mineral in Earth's crust.", marks: 2 },
            { label: "c", prompt: "Calculate how many years the world's reserves would last at the current rate of use.", marks: 2 },
            { label: "d", prompt: "Give **two** reasons why the actual length of time the supply lasts could differ from your answer to (c).", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percent share", statement: "$\\text{share}=\\dfrac{\\text{part}}{\\text{total}}\\times100\\%$" },
              { kind: "formula", name: "Years of supply", statement: "$\\text{years}=\\dfrac{\\text{reserve}}{\\text{annual use}}$" },
              { kind: "definition", name: "Reserve", statement: "A reserve is the part of a resource that can be extracted at a profit with current technology." },
            ],
            steps: [
              { part: "a", reasoning: "Total reserves are $11+7+4+18=40$ million tonnes. Divide Country P's share by the total.", working: "\\frac{11}{40}\\times100", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "27.5\\%", marks: 1, markCode: "A" },
              { part: "b", reasoning: "A reserve is the part that has been located and can be extracted at a profit with current technology.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The total amount in the crust is much larger, because it includes deposits that are too deep, too dilute or too costly to extract now.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Divide the total reserve by yearly use.", working: "\\frac{40}{0.8}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "50\\text{ years}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Demand may increase (for example, more batteries), shortening the supply.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "New deposits may be found, prices or technology may make more of the resource a reserve, or recycling may reduce the need to mine, lengthening the supply.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $27.5\\%$ (b) A reserve is only the part that can be extracted profitably now; the crust holds more (c) $50\\text{ years}$ (d) Demand may rise; new discoveries, technology or recycling may extend supply.",
            commonErrors: ["In (a) using only the three named countries as the total (22 million tonnes).", "In (b) saying a reserve is the amount already mined."],
            examinerNote: "(a) Award M1 for 11/40 (oe). Allow 28% for A1 only if 27.5 is seen. (c) Allow ecf for an incorrect total from (a). (d) Accept any two valid, different reasons, one may be an increase and one a decrease in the supply time.",
          },
        },
      ],
    },
    {
      id: "ess9-u3-cost-benefit",
      title: "Evaluating resource solutions with cost-benefit ratios",
      skill: "Compare energy and mineral resource options using benefit-cost ratios, net benefit and other criteria.",
      lesson: {
        sections: [
          {
            heading: "Costs and benefits",
            body: "Every energy or mineral project has **costs** and **benefits**. Costs can include construction, operation, pollution cleanup and harm to health or habitats. Benefits can include energy produced, jobs, tax income and avoided costs.\n\nTo compare projects fairly, put all costs and benefits in the same units, usually dollars over the same time period.",
          },
          {
            heading: "Benefit-cost ratio and net benefit",
            body: "$$\\text{benefit-cost ratio}=\\frac{\\text{total benefits}}{\\text{total costs}}$$\n\nA ratio above 1 means benefits exceed costs. A ratio of 1 means they are equal and a ratio below 1 means costs are larger. The **net benefit** is total benefits minus total costs.\n\nA ratio measures efficiency, and the net benefit measures size. A small project can have a high ratio but a small net benefit, so decision makers often look at both.",
          },
          {
            heading: "Limits of the numbers",
            body: "Some costs and benefits, such as habitat loss, cultural value or climate effects, are hard to measure in dollars. A good evaluation also considers **criteria** and **constraints** such as safety, reliability, environmental impact, timescale and fairness to affected communities.",
          },
        ],
        keyFormulas: [
          { name: "Benefit-cost ratio", statement: "$\\dfrac{\\text{total benefits}}{\\text{total costs}}$" },
          { name: "Net benefit", statement: "total benefits $-$ total costs" },
          { name: "Decision rule", statement: "Ratio $>1$: benefits exceed costs. Ratio $<1$: costs exceed benefits." },
        ],
        workedExample: {
          problem: "A wind farm has total costs of $\\$50$ million and total benefits of $\\$65$ million. Calculate the benefit-cost ratio and the net benefit.",
          solution: "Ratio $=\\dfrac{65}{50}=1.3$. Net benefit $=65-50=\\$15$ million. Because the ratio is above 1, the benefits are greater than the costs.",
        },
      },
      questions: [
        {
          id: "ess9-u3-cost-benefit-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A mining project has a benefit-cost ratio of 0.8.\n\nWhat does this tell you about the project?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The benefits are 0.8 times as large as the costs, so costs are greater than benefits." },
              { id: "b", text: "The benefits are greater than the costs by 80%." },
              { id: "c", text: "The benefits and costs are equal." },
              { id: "d", text: "The project will make a profit of 80%." },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Benefit-cost ratio", statement: "$\\text{ratio}=\\dfrac{\\text{benefits}}{\\text{costs}}$; a ratio below 1 means costs exceed benefits." },
            ],
            steps: [
              { reasoning: "A ratio of 0.8 means benefits are 0.8 of the costs, so benefits are smaller than costs.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** The benefits are 0.8 times as large as the costs, so costs are greater than benefits.",
            commonErrors: ["Treating any positive ratio as a good result.", "Reading 0.8 as an 80% profit."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "ess9-u3-cost-benefit-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A solar farm project has total costs of $\\$30$ million and total benefits of $\\$45$ million.\n\nCalculate the benefit-cost ratio.",
          response: { type: "numeric", parts: [{ label: "Benefit-cost ratio", answer: 1.5 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Benefit-cost ratio", statement: "$\\text{ratio}=\\dfrac{\\text{total benefits}}{\\text{total costs}}$" },
            ],
            steps: [
              { reasoning: "Divide total benefits by total costs, using the same units.", working: "\\frac{45}{30}", marks: 1, markCode: "M" },
              { reasoning: "Evaluate. The ratio has no unit.", working: "1.5", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$1.5$",
            commonErrors: ["Dividing costs by benefits to get 0.67.", "Subtracting to get 15 (that is the net benefit, in millions of dollars)."],
            examinerNote: "M1 for 45 / 30 (oe). A1 for 1.5.",
          },
        },
        {
          id: "ess9-u3-cost-benefit-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A town can fund only **one** of two projects.\n\nProject X: costs $\\$10$ million, benefits $\\$20$ million.\nProject Y: costs $\\$100$ million, benefits $\\$150$ million.\n\nThe town has a budget of $\\$100$ million. Compare the projects using benefit-cost ratios and net benefits, and recommend one with a reason.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Benefit-cost ratio", statement: "$\\text{ratio}=\\dfrac{\\text{benefits}}{\\text{costs}}$" },
              { kind: "formula", name: "Net benefit", statement: "net benefit = benefits $-$ costs" },
            ],
            steps: [
              { reasoning: "Ratios: X is $20/10=2.0$ and Y is $150/100=1.5$. X is more efficient per dollar.", marks: 1, markCode: "M" },
              { reasoning: "Net benefits: X is $\\$10$ million and Y is $\\$50$ million. Y gives the larger total gain.", marks: 1, markCode: "A" },
              { reasoning: "Because the town can fund only one project, the total gain matters more than efficiency, so Y is better (the budget of $\\$100$ million covers Y).", marks: 1, markCode: "R" },
              { reasoning: "Acknowledge a limitation: the numbers leave out hard-to-measure effects, or X would be better if the leftover money could be used for other projects.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "X has the higher ratio (2.0 against 1.5), but Y has the larger net benefit ($\\$50$ million against $\\$10$ million). With one project to fund, recommend Y, noting that unmeasured effects and alternative uses of the spare money should also be considered.",
            commonErrors: ["Choosing X only because its ratio is higher without considering size of the benefit.", "Calculating the ratio upside down."],
            examinerNote: "M1 both ratios. A1 both net benefits. R1 for a recommendation with a reason. R1 for a valid limitation. Allow a well-justified recommendation of X if the response explains that the remaining $\\$90$ million could be spent on other projects (oe)."
          },
        },
        {
          id: "ess9-u3-cost-benefit-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A company proposes a new mine for a mineral used in electric vehicles. The estimated costs and benefits over the life of the mine are:\n\nCosts: construction $\\$40$ million; environmental cleanup $\\$25$ million; health care for nearby residents $\\$15$ million.\nBenefits: wages $\\$70$ million; tax revenue $\\$30$ million; mineral sales $\\$40$ million.",
          parts: [
            { label: "a", prompt: "Calculate the total costs and the total benefits.", marks: 2 },
            { label: "b", prompt: "Calculate the benefit-cost ratio.", marks: 2 },
            { label: "c", prompt: "A review finds that the cleanup will cost twice as much as estimated. Calculate the new benefit-cost ratio, to 2 decimal places.", marks: 2 },
            { label: "d", prompt: "Evaluate whether the mine should go ahead, using your results and **two** factors that are not included in the dollar figures.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Benefit-cost ratio", statement: "$\\text{ratio}=\\dfrac{\\text{total benefits}}{\\text{total costs}}$" },
              { kind: "principle", name: "Criteria and constraints", statement: "Evaluations consider impacts that are hard to measure in dollars, such as habitat loss and fairness." },
            ],
            steps: [
              { part: "a", reasoning: "Add the costs.", working: "40+25+15=80", marks: 1, markCode: "A" },
              { part: "a", reasoning: "Add the benefits.", working: "70+30+40=140", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Divide benefits by costs.", working: "\\frac{140}{80}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "1.75", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Cleanup doubles to $\\$50$ million, so total costs are $40+50+15=105$. Divide benefits by the new costs.", working: "\\frac{140}{105}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate to 2 decimal places.", working: "1.33", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Use the results: the ratio stays above 1 even after the cleanup increase, so the monetary benefits exceed costs.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Name a factor not in the figures, such as habitat loss, water quality, climate effects of the mine or the long-term fate of the community when the mine closes.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Name a second factor and reach a justified judgment, for example proceeding only with strong cleanup guarantees.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Costs $\\$80$ million; benefits $\\$140$ million (b) $1.75$ (c) $1.33$ (d) The ratio stays above 1, but habitat, water, health and long-term community effects also matter; a justified judgment such as 'proceed with conditions' is acceptable.",
            commonErrors: ["In (c) doubling all the costs rather than only the cleanup.", "In (d) judging only by the ratio without considering non-monetary factors."],
            examinerNote: "(a) A1 each. (c) Allow ecf from (a) only if the new total is shown. Do not accept 'doubling all costs'. (d) Any justified conclusion is acceptable provided it uses the data and two valid factors across the three marks."
          },
        },
      ],
    },
  ],
};
