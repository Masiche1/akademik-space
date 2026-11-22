import type { Lesson } from "../../../types.ts";

export const lesson33: Lesson = {
  id: "ebi11-u3-lesson-3-3",
  code: "3-3",
  title: "Food Production and Biotechnology",
  goal: "I CAN explain how crops, fish farming and fermenters increase food production, and describe genetic modification and cloning.",
  standards: ["4BI1 4.15", "4BI1 4.16", "4BI1 4.17", "4BI1 4.18", "4BI1 4.19", "4BI1 4.20", "4BI1 4.21"],
  vocabulary: [
    { term: "Fermenter", definition: "A large vessel in which microorganisms are grown under controlled conditions to make a useful product." },
    { term: "Mycoprotein", definition: "Protein-rich food made from the fungus Fusarium grown in a fermenter, used as a meat substitute." },
    { term: "Genetic modification", definition: "Changing the genome of an organism by transferring a gene from another organism to give a desired characteristic." },
    { term: "Restriction enzyme", definition: "An enzyme that cuts DNA at a specific base sequence, often leaving sticky ends." },
    { term: "Plasmid", definition: "A small ring of DNA in bacteria that can be used as a vector to carry a gene into a bacterial cell." },
    { term: "Clone", definition: "An organism that is genetically identical to its parent." },
    { term: "Tissue culture", definition: "Growing new plants from small pieces of plant tissue on a sterile nutrient medium." },
  ],
  concepts: [
    {
      id: "ebi11-u3-food-production",
      title: "Food production: crops, fish farming and fermentation",
      skill: "Explain how greenhouses, fertilisers, pest control, fish farming and fermenters increase food production, and calculate efficiency and yield.",
      lesson: {
        sections: [
          {
            heading: "Increasing crop yields",
            body: "Crop yield can be raised by controlling the factors that limit photosynthesis and growth. In a **greenhouse**, temperature, carbon dioxide concentration, light and water can all be controlled, and pests are kept out. **Fertilisers** supply nitrates, phosphates and potassium. **Pesticides** kill pests, but can harm other species and build up in food chains. **Biological control** uses a predator or parasite of the pest, for example ladybirds to eat aphids. It avoids chemicals, but is slower and the control organism may become a pest itself. **Hydroponics** grows plants in a solution of mineral ions with no soil, so the supply of minerals can be controlled exactly.",
          },
          {
            heading: "Fish farming and sustainable fishing",
            body: "**Overfishing** reduces fish stocks below the number needed to breed. Stocks can be conserved by fishing **quotas** (limits on the catch), a larger **net mesh size** so young fish escape and can breed, and banning fishing in breeding areas. **Fish farming** raises fish in enclosures, which increases the mass of fish produced. Yields rise when predators are removed, disease is treated, food is controlled and water quality is monitored. Problems include the spread of disease and parasites at high stocking density, pollution of water from waste and uneaten food, and the need to feed fish with fish meal.",
          },
          {
            heading: "Fermenters and microorganisms",
            body: "Microorganisms are grown in fermenters to make food. **Yoghurt** is made by adding *Lactobacillus* bacteria to milk, which turn lactose into lactic acid, lowering the pH and thickening the milk. **Mycoprotein** is made by growing the fungus *Fusarium* in a fermenter. To get the maximum growth the following are controlled: temperature (a water jacket removes the heat produced), pH, oxygen supply (air is bubbled in and the contents stirred), and nutrient supply (glucose and a nitrogen source). The equipment is **sterilised** (aseptic conditions) so that other microorganisms do not compete for nutrients or contaminate the product. Yeast fermentation (glucose $\\rightarrow$ ethanol + carbon dioxide) is used to make bread and alcoholic drinks.",
          },
        ],
        keyFormulas: [
          { name: "Efficiency of food conversion", statement: "$\\frac{\\text{mass gained by animal}}{\\text{mass of food eaten}} \\times 100\\%$" },
          { name: "Yoghurt production", statement: "Lactose $\\xrightarrow{\\text{Lactobacillus}}$ lactic acid" },
          { name: "Fermenter conditions controlled", statement: "Temperature, pH, oxygen, nutrients and sterility" },
        ],
        workedExample: {
          problem: "Fish in a farm gain $540\\text{ kg}$ in mass after eating $1800\\text{ kg}$ of fish food. Calculate the percentage efficiency of conversion of food into fish mass.",
          solution: "Efficiency $= \\frac{540}{1800} \\times 100 = 30\\%$. The rest of the food is lost as waste, or used in respiration.",
        },
      },
      questions: [
        {
          id: "ebi11-u3-food-production-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which microorganism is grown in fermenters to make mycoprotein?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Yeast" },
              { id: "b", text: "Lactobacillus" },
              { id: "c", text: "Fusarium" },
              { id: "d", text: "Rhizobium" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Mycoprotein", statement: "Mycoprotein is a protein-rich food made from the fungus Fusarium grown in a fermenter." },
            ],
            steps: [
              { reasoning: "Fusarium is the fungus used. Lactobacillus makes yoghurt, yeast makes bread and alcohol, and Rhizobium fixes nitrogen.", working: "\\text{Fusarium}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Fusarium",
            commonErrors: ["Choosing Lactobacillus, which is used to make yoghurt.", "Choosing yeast, which is used for bread and ethanol."],
            examinerNote: "B1 for Fusarium.",
          },
        },
        {
          id: "ebi11-u3-food-production-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "A fish farm feeds its fish $1800\\text{ kg}$ of fish food. The fish gain $450\\text{ kg}$ in mass.\n\nCalculate the percentage efficiency of conversion of food into fish mass, and the mass of food needed for each $1\\text{ kg}$ of fish mass gained.",
          response: {
            type: "numeric",
            parts: [
              { label: "Efficiency", answer: 25, tolerance: 0.1, unit: "%" },
              { label: "Mass of food per 1 kg of fish gained", answer: 4, tolerance: 0.01, unit: "kg" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Efficiency", statement: "$\\text{efficiency} = \\frac{\\text{mass gained}}{\\text{mass of food}} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Divide the mass gained by the mass of food and multiply by 100.", working: "\\frac{450}{1800} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "25\\%", marks: 1, markCode: "A" },
              { reasoning: "Divide the food mass by the mass gained.", working: "\\frac{1800}{450} = 4\\text{ kg}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$25\\%$; $4\\text{ kg}$ of food per kg of fish",
            commonErrors: ["Dividing 1800 by 450 and then multiplying by 100 (400%).", "Giving 0.25 kg for the second part by inverting the ratio."],
            examinerNote: "M1 for $450/1800$ with $\\times100$. A1 for 25. A1 for 4. Allow ecf for the second part from an incorrect first part only if the ratio is used correctly.",
          },
        },
        {
          id: "ebi11-u3-food-production-q3",
          difficulty: "challenge",
          totalMarks: 5,
          stem: "A company grows Fusarium in a large fermenter to make mycoprotein. Explain how the conditions in the fermenter are controlled to give the maximum yield of mycoprotein.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Optimum conditions", statement: "Microbial growth and respiration are enzyme-controlled, so temperature, pH, oxygen and nutrients must be kept at their optimum values, and contaminants excluded." },
            ],
            steps: [
              { reasoning: "The temperature is kept at the optimum for the enzymes, using a water jacket to remove the heat produced by respiration.", marks: 1, markCode: "B" },
              { reasoning: "Sterile air is bubbled in and the contents are stirred, to supply oxygen for aerobic respiration and mix the nutrients evenly.", marks: 1, markCode: "B" },
              { reasoning: "A supply of glucose (an energy source) and nitrogen compounds (to make protein) is provided.", marks: 1, markCode: "B" },
              { reasoning: "The pH is monitored and kept at the optimum, using a buffer or by adding acid or alkali.", marks: 1, markCode: "B" },
              { reasoning: "The equipment is sterilised before use, so that other microorganisms do not compete for nutrients or contaminate the product.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Optimum temperature (water jacket), oxygen and stirring, nutrients, optimum pH, and sterile (aseptic) conditions.",
            commonErrors: ["Writing 'keeping it warm' without linking to enzymes.", "Saying that oxygen is needed 'to keep the fungus alive' without linking to respiration.", "Forgetting that heat is produced and must be removed."],
            examinerNote: "Allow 'monitored by probes' with a named condition. Reject 'sterilise the fungus'. Award each mark for the condition together with its purpose.",
          },
        },
        {
          id: "ebi11-u3-food-production-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A scientist investigates the effect of stocking density on the growth of trout in tanks. Each tank has a volume of $1\\text{ m}^3$. The mean mass gain per fish over six months is shown.\n\n| Fish per tank | Mean mass gain per fish (g) |\n| --- | --- |\n| 10 | 420 |\n| 20 | 400 |\n| 40 | 310 |\n| 80 | 190 |",
          parts: [
            { label: "a", prompt: "State the independent variable in this investigation.", marks: 1 },
            { label: "b", prompt: "Calculate the percentage decrease in the mean mass gain per fish between 10 fish per tank and 80 fish per tank. Give your answer to the nearest whole number.", marks: 2 },
            { label: "c", prompt: "Suggest two reasons why the mean mass gain per fish falls as the number of fish per tank increases.", marks: 2 },
            { label: "d", prompt: "Calculate the total mass gained by all the fish in the tank at 40 fish per tank. Give your answer in kg.", marks: 2 },
            { label: "e", prompt: "The total mass gain is $4.2\\text{ kg}$ at 10 fish, $8.0\\text{ kg}$ at 20 fish, $12.4\\text{ kg}$ at 40 fish and $15.2\\text{ kg}$ at 80 fish. Evaluate which stocking density the fish farmer should choose.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage change", statement: "$\\frac{\\text{change}}{\\text{original}} \\times 100\\%$" },
              { kind: "principle", name: "Variables", statement: "The independent variable is the one deliberately changed; the dependent variable is the one measured." },
            ],
            steps: [
              { part: "a", reasoning: "The number of fish per tank (stocking density) is the factor that is changed.", working: "\\text{number of fish per tank}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Find the decrease and divide by the original value (10 fish).", working: "\\frac{420 - 190}{420} \\times 100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate and round.", working: "\\frac{230}{420} \\times 100 = 54.76\\ldots \\approx 55\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Greater competition for food (and space), so each fish eats less.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Less dissolved oxygen per fish, more waste such as ammonia, or more disease and stress at high density.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Multiply the mean gain per fish by the number of fish.", working: "40 \\times 310 = 12400\\text{ g}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Convert grams to kilograms.", working: "12400 \\div 1000 = 12.4\\text{ kg}", marks: 1, markCode: "A" },
              { part: "e", reasoning: "The highest total mass is at 80 fish (15.2 kg), but each fish is small (190 g) and the extra gain compared with 40 fish is only 2.8 kg for double the fish and feed.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "At 80 fish the risk of disease and oxygen shortage is higher, and the cost of food and fish is greater.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Conclusion: 40 fish per tank gives a large total gain with reasonable growth per fish, so is the best compromise.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Number of fish per tank (b) $55\\%$ (c) competition for food; less oxygen/more waste/disease (d) $12.4\\text{ kg}$ (e) 40 fish per tank is the best compromise.",
            commonErrors: ["Dividing by 190 in (b), giving 121%.", "Forgetting to convert to kg in (d).", "Choosing the highest total mass without considering cost, health and growth per fish."],
            examinerNote: "In (e) allow 20 fish if supported by a sensible argument about fish welfare and cost. Do not accept a choice with no justification.",
          },
        },
      ],
    },
    {
      id: "ebi11-u3-genetic-modification-cloning",
      title: "Genetic modification and cloning",
      skill: "Describe how genes are transferred to produce GM organisms, how clones are made, and evaluate the benefits and risks.",
      lesson: {
        sections: [
          {
            heading: "Genetic modification",
            body: "In genetic modification a gene from one organism is transferred into another, giving it a new characteristic. To make human **insulin** in bacteria:\n\n1. The human insulin gene is cut out of human DNA using a **restriction enzyme**, leaving sticky ends.\n2. A bacterial **plasmid** is cut with the same restriction enzyme, so it has matching sticky ends.\n3. The insulin gene is joined into the plasmid using the enzyme **DNA ligase**.\n4. The plasmid (the vector) is inserted into a bacterium, which is grown in a fermenter, where it copies the gene and makes human insulin.\n\nExamples in crops include **Bt maize**, which makes a toxin killing some insect pests, herbicide-resistant soya, and **golden rice**, which contains a gene that makes beta-carotene (a source of vitamin A).",
          },
          {
            heading: "Evaluating GM crops",
            body: "**Benefits**: higher yield, less need for pesticides, crops that tolerate drought or poor soils, improved nutritional content. **Concerns**: possible harm to non-target insects, genes spreading to wild plants (for example herbicide resistance), cost of seed, reduced biodiversity, and worries about food safety. When evaluating, give a balanced view and use data, for example the percentage increase in yield, to support a conclusion.",
          },
          {
            heading: "Cloning",
            body: "A **clone** is a genetically identical copy. Plants can be cloned by **cuttings** or by **tissue culture**: small pieces of tissue from a parent plant are grown on a sterile nutrient agar containing plant hormones, producing many identical plantlets. Animals can be cloned by **nuclear transfer**, as in Dolly the sheep: the nucleus is removed from an egg cell, a nucleus from a body cell of the donor is put in its place, the egg is stimulated to divide to form an embryo, and the embryo is implanted into a surrogate mother. Cloning keeps desirable characteristics and produces many offspring quickly, but all the clones have the same alleles, so a single disease could affect them all, and genetic variation is reduced.",
          },
        ],
        keyFormulas: [
          { name: "Cut and join DNA", statement: "Restriction enzyme cuts; DNA ligase joins" },
          { name: "Percentage increase", statement: "$\\frac{\\text{new} - \\text{original}}{\\text{original}} \\times 100\\%$" },
          { name: "Clone", statement: "Genetically identical, so no genetic variation" },
        ],
        workedExample: {
          problem: "A non-GM wheat variety yields $5.0\\text{ tonnes per hectare}$. A GM variety yields $6.2\\text{ tonnes per hectare}$. Calculate the percentage increase in yield.",
          solution: "Increase $= 6.2 - 5.0 = 1.2$ tonnes per hectare. Percentage increase $= \\frac{1.2}{5.0} \\times 100 = 24\\%$.",
        },
      },
      questions: [
        {
          id: "ebi11-u3-genetic-modification-cloning-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which enzyme is used to cut a gene out of DNA during genetic modification?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "DNA ligase" },
              { id: "b", text: "Amylase" },
              { id: "c", text: "Protease" },
              { id: "d", text: "Restriction enzyme" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Restriction enzyme", statement: "A restriction enzyme cuts DNA at a specific base sequence; DNA ligase joins DNA pieces together." },
            ],
            steps: [
              { reasoning: "Restriction enzymes cut DNA. Ligase does the opposite job, joining the gene into the plasmid.", working: "\\text{restriction enzyme}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Restriction enzyme",
            commonErrors: ["Choosing DNA ligase, which joins DNA rather than cutting it."],
            examinerNote: "B1 for restriction enzyme.",
          },
        },
        {
          id: "ebi11-u3-genetic-modification-cloning-q2",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe how bacteria can be genetically modified to produce human insulin.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Genetic engineering", statement: "A gene is cut out with a restriction enzyme, joined into a vector (plasmid) with ligase, and inserted into a host cell that then expresses it." },
            ],
            steps: [
              { reasoning: "The human insulin gene is cut from human DNA using a restriction enzyme.", marks: 1, markCode: "B" },
              { reasoning: "The same restriction enzyme cuts a bacterial plasmid, giving matching sticky ends.", marks: 1, markCode: "B" },
              { reasoning: "DNA ligase joins the insulin gene into the plasmid.", marks: 1, markCode: "B" },
              { reasoning: "The plasmid is inserted into a bacterium, which is grown in a fermenter and makes insulin.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Cut gene with restriction enzyme; cut plasmid; join with ligase; insert into bacteria and culture them.",
            commonErrors: ["Swapping the roles of restriction enzyme and ligase.", "Saying the whole human chromosome is put into the bacterium.", "Forgetting that the bacteria are then grown to make the insulin."],
            examinerNote: "Allow 'vector' for plasmid. Allow 'cut at the same place' for matching sticky ends. Reject 'cut by DNA ligase'.",
          },
        },
        {
          id: "ebi11-u3-genetic-modification-cloning-q3",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A farmer grows 150 hectares of a GM crop. The yield of a non-GM variety is $4.2\\text{ tonnes per hectare}$ and the yield of the GM variety is $5.46\\text{ tonnes per hectare}$.\n\nCalculate the percentage increase in yield, and the extra mass of crop, in tonnes, produced on the 150 hectares compared with the non-GM variety.",
          response: {
            type: "numeric",
            parts: [
              { label: "Percentage increase in yield", answer: 30, tolerance: 0.1, unit: "%" },
              { label: "Extra mass of crop on 150 hectares", answer: 189, tolerance: 0.5, unit: "tonnes" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage increase", statement: "$\\text{percentage increase} = \\frac{\\text{increase}}{\\text{original}} \\times 100\\%$" },
            ],
            steps: [
              { reasoning: "Find the increase in yield per hectare and divide by the original yield.", working: "5.46 - 4.2 = 1.26;\\quad \\frac{1.26}{4.2} \\times 100 = 30\\%", marks: 1, markCode: "M" },
              { reasoning: "Multiply the extra yield per hectare by the area.", working: "1.26 \\times 150", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "189\\text{ tonnes}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$30\\%$; $189$ tonnes",
            commonErrors: ["Dividing by the GM yield (5.46), giving 23%.", "Multiplying the GM yield, not the increase, by 150 (819 tonnes)."],
            examinerNote: "M1 for correct percentage working (answer 30 may be seen), M1 for $1.26\\times150$, A1 for 189. Allow ecf for the second part if the increase is miscalculated.",
          },
        },
        {
          id: "ebi11-u3-genetic-modification-cloning-q4",
          difficulty: "challenge",
          totalMarks: 12,
          stem: "A plant breeder uses tissue culture to produce many copies of a rare orchid. Small pieces of tissue are taken from one parent plant and grown on sterile nutrient agar. In each culture cycle, every piece of tissue grows into 6 plantlets, and each plantlet can be divided into pieces to start the next cycle. In a separate project, scientists produced a cloned sheep using nuclear transfer.",
          parts: [
            { label: "a", prompt: "Describe the main steps of nuclear transfer used to clone a sheep.", marks: 3 },
            { label: "b", prompt: "Explain why the agar and the equipment used in tissue culture must be sterile.", marks: 2 },
            { label: "c", prompt: "Starting from one piece of tissue, calculate the number of plantlets produced after three culture cycles, assuming that every plantlet is used to start the next cycle.", marks: 2 },
            { label: "d", prompt: "Give two reasons why the plants produced by tissue culture are all identical to the parent.", marks: 2 },
            { label: "e", prompt: "Evaluate the use of cloning to produce a large number of plants for farming, considering both benefits and risks.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Clone", statement: "A clone is an organism genetically identical to its parent, produced by asexual methods without fertilisation." },
              { kind: "principle", name: "Genetic variation", statement: "Sexual reproduction mixes alleles from two parents; cloned individuals have identical alleles, so there is no genetic variation." },
            ],
            steps: [
              { part: "a", reasoning: "The nucleus is removed from an unfertilised egg cell, and a nucleus from a body cell of the donor animal is inserted.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The egg is stimulated (by a small electric shock) to divide and form an embryo.", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The embryo is implanted into the uterus of a surrogate mother, where it develops.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Agar contains sugars and nutrients, which bacteria and fungi would also use to grow rapidly.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "These microorganisms would compete with the plantlets or infect and kill them, and so must be excluded.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Each cycle multiplies the number by 6, so after three cycles there are $6^3$ plantlets.", working: "6 \\times 6 \\times 6", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "216\\text{ plantlets}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "They are produced by mitosis (asexual reproduction), so there is no mixing of genes from two parents.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "All cells come from the same parent tissue and have the same genetic information (alleles).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Benefit: many identical plants with the desired characteristics can be produced quickly, all year round, from a small amount of tissue.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "Risk: no genetic variation, so a single disease or change in conditions could kill the whole crop. Tissue culture is also costly and needs skill.", marks: 1, markCode: "R" },
              { part: "e", reasoning: "A reasoned conclusion, for example that cloning suits valuable, rare or high-yield plants if disease is controlled and some genetic diversity is kept elsewhere.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) remove egg nucleus, insert donor nucleus, stimulate division, implant in surrogate (b) prevent competition and infection (c) 216 (d) mitosis; same genetic information (e) quick and identical but no variation, vulnerable to disease.",
            commonErrors: ["Calculating $6 \\times 3 = 18$ in (c).", "Saying the egg cell is fertilised in nuclear transfer.", "Saying clones are identical because they 'look the same' rather than having identical genes."],
            examinerNote: "In (c) allow 6 + 36 + 216 only if the final answer for cycle three (216) is clearly identified. In (a) accept the order of steps if clear. In (e) a conclusion must follow from the points made.",
          },
        },
      ],
    },
  ],
};
