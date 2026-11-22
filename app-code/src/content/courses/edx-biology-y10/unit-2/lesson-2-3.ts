import type { Lesson } from "../../../types.ts";

export const lesson23: Lesson = {
  id: "ebi10-u2-lesson-2-3",
  code: "2-3",
  title: "Transport in Animals and Plants",
  goal: "I CAN describe the heart, blood vessels and blood, calculate cardiac output, and explain how water and sugars are transported in plants.",
  standards: ["4BI1 2.56B", "4BI1 2.57B", "4BI1 2.58B", "4BI1 2.59", "4BI1 2.60", "4BI1 2.61", "4BI1 2.65", "4BI1 2.66", "4BI1 2.67", "4BI1 2.68", "4BI1 2.69"],
  vocabulary: [
    { term: "Double circulation", definition: "A circulatory system in which blood passes through the heart twice on each complete circuit of the body: once to the lungs and once to the body." },
    { term: "Cardiac output", definition: "The volume of blood pumped out of the heart per minute: stroke volume multiplied by heart rate." },
    { term: "Haemoglobin", definition: "The red pigment in red blood cells that combines with oxygen in the lungs to form oxyhaemoglobin." },
    { term: "Xylem", definition: "Dead, hollow tubes strengthened with lignin that carry water and mineral ions upwards from the roots." },
    { term: "Phloem", definition: "Living tissue of sieve tubes and companion cells that transports sucrose and amino acids to where they are needed (translocation)." },
    { term: "Transpiration", definition: "The loss of water vapour from the leaves of a plant by evaporation, mainly through the stomata, and the movement of water up the plant that results." },
    { term: "Translocation", definition: "The movement of sucrose and amino acids in the phloem from the leaves to the rest of the plant." },
  ],
  concepts: [
    {
      id: "ebi10-u2-heart-blood-vessels",
      title: "The heart and blood vessels",
      skill: "Describe the structure of the heart and the circulation, relate the structure of arteries, veins and capillaries to their functions, and calculate cardiac output.",
      lesson: {
        sections: [
          {
            heading: "The double circulation",
            body: "Mammals have a **double circulation**. The **right side** of the heart pumps deoxygenated blood to the lungs, and the **left side** pumps oxygenated blood to the rest of the body. The blood passes through the heart twice on each circuit. This keeps the blood at high pressure when it is sent to the body.\n\nThe heart has four chambers. The **atria** (upper chambers) receive blood and the **ventricles** (lower chambers) pump it out. **Valves** prevent backflow.\n\n- **Vena cava**: brings deoxygenated blood from the body to the right atrium.\n- **Right ventricle**: pumps blood to the lungs along the **pulmonary artery**.\n- **Pulmonary vein**: brings oxygenated blood from the lungs to the left atrium.\n- **Left ventricle**: pumps blood to the body along the **aorta**. Its wall is much thicker than the right ventricle because it must generate higher pressure to push blood around the whole body.\n- **Coronary arteries** supply the heart muscle with oxygen and glucose. Blockage can cause a heart attack.",
          },
          {
            heading: "Arteries, veins and capillaries",
            body: "- **Arteries** carry blood away from the heart at high pressure. They have thick, elastic, muscular walls and a narrow lumen.\n- **Veins** carry blood to the heart at low pressure. They have thinner walls, a wide lumen and **valves** that prevent backflow.\n- **Capillaries** are very narrow, with walls one cell thick. They allow exchange of substances between the blood and the cells by diffusion, over a short distance.\n\nThe blood supply to an organ is also affected by the heart rate: the pulse is felt in an artery.",
          },
          {
            heading: "Cardiac output",
            body: "The **stroke volume** is the volume of blood pumped by the ventricle each beat. The **cardiac output** is the volume pumped each minute:\n\n$$\\text{cardiac output} = \\text{stroke volume} \\times \\text{heart rate}$$\n\nDuring exercise both the heart rate and the stroke volume increase, so more oxygen and glucose reach the muscles and more carbon dioxide is carried away. Regular exercise strengthens the heart so it has a larger stroke volume and a lower resting heart rate.",
          },
        ],
        keyFormulas: [
          { name: "Cardiac output", statement: "$\\text{cardiac output (cm}^3\\text{/min)} = \\text{stroke volume (cm}^3\\text{)} \\times \\text{heart rate (beats/min)}$" },
          { name: "Percentage change", statement: "$\\frac{\\text{change}}{\\text{original}} \\times 100\\%$" },
          { name: "Circulation", statement: "Body $\\rightarrow$ vena cava $\\rightarrow$ right side $\\rightarrow$ pulmonary artery $\\rightarrow$ lungs $\\rightarrow$ pulmonary vein $\\rightarrow$ left side $\\rightarrow$ aorta" },
        ],
        workedExample: {
          problem: "A person has a stroke volume of $80\\text{ cm}^3$ and a heart rate of $65$ beats per minute. Calculate the cardiac output.",
          solution: "Cardiac output $= 80 \\times 65 = 5200\\text{ cm}^3\\text{/min}$.",
        },
      },
      questions: [
        {
          id: "ebi10-u2-heart-blood-vessels-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which blood vessel carries oxygenated blood from the lungs to the heart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vena cava" },
              { id: "b", text: "Pulmonary artery" },
              { id: "c", text: "Aorta" },
              { id: "d", text: "Pulmonary vein" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Pulmonary vein", statement: "The pulmonary vein carries oxygenated blood from the lungs to the left atrium." },
            ],
            steps: [
              { reasoning: "Blood returning to the heart travels in veins. The pulmonary vein carries oxygenated blood from the lungs to the left atrium.", working: "\\text{pulmonary vein}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Pulmonary vein",
            commonErrors: ["Choosing the pulmonary artery: it carries blood to the lungs and is deoxygenated.", "Assuming that all veins carry deoxygenated blood and all arteries oxygenated blood."],
            examinerNote: "B1 for pulmonary vein.",
          },
        },
        {
          id: "ebi10-u2-heart-blood-vessels-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain how the structure of an artery is related to its function.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Structure and function", statement: "Arteries carry blood at high pressure away from the heart, so their walls withstand pressure and maintain flow." },
            ],
            steps: [
              { reasoning: "Arteries carry blood at high pressure, so they have thick walls to withstand the pressure.", marks: 1, markCode: "B" },
              { reasoning: "The walls contain elastic fibres that stretch and recoil, which smooths out the pulses and keeps the blood moving.", marks: 1, markCode: "B" },
              { reasoning: "They contain muscle, and have a narrow lumen, which helps to maintain the high pressure.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Thick, elastic, muscular walls and narrow lumen to withstand and maintain high pressure.",
            commonErrors: ["Describing valves in arteries (veins have valves).", "Saying that arteries have thick walls because they carry oxygenated blood."],
            examinerNote: "Each mark needs a structure linked to a function. Reject 'strong walls' alone without a reason.",
          },
        },
        {
          id: "ebi10-u2-heart-blood-vessels-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "At rest a student has a stroke volume of $70\\text{ cm}^3$ and a heart rate of $72$ beats per minute. During exercise her stroke volume is $110\\text{ cm}^3$ and her heart rate is $150$ beats per minute. Calculate the increase in her cardiac output, in $\\text{cm}^3$ per minute.",
          response: { type: "numeric", parts: [{ label: "Increase in cardiac output", answer: 11460, unit: "cm³/min" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cardiac output", statement: "$\\text{cardiac output} = \\text{stroke volume} \\times \\text{heart rate}$" },
            ],
            steps: [
              { reasoning: "Calculate the resting cardiac output.", working: "70 \\times 72 = 5040\\text{ cm}^3\\text{/min}", marks: 1, markCode: "M" },
              { reasoning: "Calculate the cardiac output during exercise.", working: "110 \\times 150 = 16500\\text{ cm}^3\\text{/min}", marks: 1, markCode: "M" },
              { reasoning: "Subtract to find the increase.", working: "16500 - 5040", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with a unit.", working: "11460\\text{ cm}^3\\text{/min}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$11460\\text{ cm}^3\\text{/min}$",
            commonErrors: ["Giving the exercise value (16500) instead of the increase.", "Adding stroke volume and heart rate.", "Subtracting the stroke volumes and heart rates first, then multiplying."],
            examinerNote: "M1 for each correct cardiac output, M1 for subtracting (ecf). A1 cao. Allow 11.46 litres or $11.46\\text{ dm}^3$/min."
          },
        },
        {
          id: "ebi10-u2-heart-blood-vessels-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "The heart is a double pump. A man at rest has a stroke volume of $75\\text{ cm}^3$ and a heart rate of $68$ beats per minute. During vigorous exercise his stroke volume is $100\\text{ cm}^3$ and his heart rate is $136$ beats per minute.",
          parts: [
            { label: "a", prompt: "Name the blood vessel that carries blood from the right ventricle to the lungs, and the blood vessel that carries blood from the left ventricle to the body.", marks: 2 },
            { label: "b", prompt: "Explain why the wall of the left ventricle is thicker than the wall of the right ventricle.", marks: 2 },
            { label: "c", prompt: "Calculate his cardiac output at rest, in $\\text{cm}^3$ per minute.", marks: 2 },
            { label: "d", prompt: "Calculate the percentage increase in his cardiac output during exercise. Give your answer to the nearest whole number.", marks: 2 },
            { label: "e", prompt: "Explain why the cardiac output increases during exercise.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cardiac output", statement: "$\\text{cardiac output} = \\text{stroke volume} \\times \\text{heart rate}$" },
              { kind: "formula", name: "Percentage change", statement: "$\\frac{\\text{change}}{\\text{original}} \\times 100\\%$" },
              { kind: "principle", name: "Double circulation", statement: "The right ventricle pumps to the lungs (short, low pressure circuit); the left ventricle pumps to the body (long, high pressure circuit)." },
            ],
            steps: [
              { part: "a", reasoning: "The right ventricle pumps blood to the lungs along the pulmonary artery.", working: "\\text{pulmonary artery}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "The left ventricle pumps blood to the body along the aorta.", working: "\\text{aorta}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The left ventricle pumps blood to the whole body, a much longer distance than the lungs.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "So its thicker muscular wall contracts with more force and produces a higher pressure.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Multiply stroke volume by heart rate.", working: "75 \\times 68", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Evaluate.", working: "5100\\text{ cm}^3\\text{/min}", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Exercise cardiac output is $100 \\times 136 = 13600$; divide the increase by the resting value.", working: "\\frac{13600 - 5100}{5100} \\times 100", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate and round.", working: "\\frac{8500}{5100} \\times 100 = 166.7\\ldots \\approx 167\\%", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Muscles respire faster, so they need more oxygen and glucose delivered by the blood.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "More carbon dioxide must be removed, so the blood must flow faster (more blood per minute).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) pulmonary artery; aorta (b) pumps blood to whole body at higher pressure (c) $5100\\text{ cm}^3\\text{/min}$ (d) $167\\%$ (e) more oxygen and glucose to muscles, remove more carbon dioxide.",
            commonErrors: ["Dividing by 13600 in (d) to give 62.5%.", "Answering (d) as 8500, the increase in output.", "Saying that blood in the left side is deoxygenated."],
            examinerNote: "In (d) allow 166.7 or 167. In (b) reject 'because the left side is bigger' with no pressure or distance. In (e) allow 'more energy from respiration' for the first mark."
          },
        },
      ],
    },
    {
      id: "ebi10-u2-blood-plant-transport",
      title: "Blood and transport in plants",
      skill: "Describe the components of blood and their functions, and explain how xylem, phloem and transpiration move substances through plants.",
      lesson: {
        sections: [
          {
            heading: "The components of blood",
            body: "- **Plasma**: the liquid part. It transports carbon dioxide (as hydrogencarbonate), digested food molecules, urea, hormones and heat.\n- **Red blood cells**: carry oxygen. They contain the pigment **haemoglobin**, which combines with oxygen in the lungs to form oxyhaemoglobin and releases it in the tissues. They have a **biconcave** shape giving a large surface area, and **no nucleus**, leaving more room for haemoglobin.\n- **White blood cells**: defend against pathogens by **phagocytosis** (engulfing and digesting them) or by making **antibodies** (lymphocytes).\n- **Platelets**: cell fragments that help blood to clot at a wound, sealing it and preventing pathogens entering.",
          },
          {
            heading: "Xylem and phloem",
            body: "**Xylem** vessels are dead, hollow tubes with no end walls, strengthened with **lignin**. They carry water and mineral ions **upwards** from the roots to the leaves, in one direction.\n\n**Phloem** is made of living **sieve tubes** with companion cells. It carries **sucrose** and **amino acids** from the leaves (where they are made) to growing regions and storage organs, and the transport can go **up and down**. This is called **translocation**.\n\nWater enters root hair cells by **osmosis**. The root hairs have a large surface area to absorb water and mineral ions.",
          },
          {
            heading: "Transpiration",
            body: "Water evaporates from the surface of the mesophyll cells into the air spaces of the leaf and diffuses out through the stomata. This **transpiration** creates a **transpiration stream**: water is pulled up the xylem from the roots, because the water molecules stick together (cohesion). Transpiration also supplies water for photosynthesis, keeps the plant cool and keeps cells turgid.\n\nThe rate of transpiration **increases** with:\n\n- higher **temperature** (faster evaporation and diffusion)\n- higher **light intensity** (stomata open wider)\n- **wind** (removes water vapour, keeping a steep concentration gradient)\n- lower **humidity** (steeper concentration gradient)\n\nIt is measured with a **potometer**, which measures the water taken up by a shoot as the movement of an air bubble along a capillary tube. The volume taken up is the volume of a cylinder $\\pi r^2 \\times$ distance.",
          },
        ],
        keyFormulas: [
          { name: "Rate of bubble movement", statement: "$\\text{rate} = \\frac{\\text{distance moved}}{\\text{time}}$" },
          { name: "Volume of water taken up", statement: "$V = \\pi r^2 \\times \\text{distance moved by bubble}$" },
          { name: "Xylem and phloem", statement: "Xylem: water and mineral ions upwards. Phloem: sucrose and amino acids, both directions" },
          { name: "Factors increasing transpiration", statement: "Higher temperature, higher light intensity, wind, lower humidity" },
        ],
        workedExample: {
          problem: "In a potometer the air bubble moves $40\\text{ mm}$ in $8$ minutes along a capillary tube of radius $0.5\\text{ mm}$. Calculate the volume of water taken up per minute, to 2 significant figures.",
          solution: "Rate of movement $= 40 \\div 8 = 5\\text{ mm/min}$. Cross-sectional area $= \\pi \\times 0.5^2 = 0.785\\text{ mm}^2$. Volume per minute $= 0.785 \\times 5 = 3.93 \\approx 3.9\\text{ mm}^3\\text{/min}$.",
        },
      },
      questions: [
        {
          id: "ebi10-u2-blood-plant-transport-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which tissue transports sucrose from the leaves to the rest of the plant?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Palisade mesophyll" },
              { id: "b", text: "Phloem" },
              { id: "c", text: "Root hair cells" },
              { id: "d", text: "Xylem" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Phloem", statement: "Phloem transports sucrose and amino acids around the plant (translocation)." },
            ],
            steps: [
              { reasoning: "Phloem carries sucrose and amino acids to where they are needed.", working: "\\text{phloem}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Phloem",
            commonErrors: ["Choosing xylem, which carries water and mineral ions upwards.", "Thinking the phloem carries water to the leaves."],
            examinerNote: "B1 for phloem.",
          },
        },
        {
          id: "ebi10-u2-blood-plant-transport-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "In a potometer experiment an air bubble moves $45\\text{ mm}$ in $15$ minutes along a capillary tube of radius $0.60\\text{ mm}$. Calculate the volume of water taken up by the shoot per minute. Give your answer to 2 significant figures.",
          response: { type: "numeric", parts: [{ label: "Volume of water taken up per minute", answer: 3.4, tolerance: 0.05, unit: "mm³/min" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of a cylinder", statement: "$V = \\pi r^2 \\times \\text{length}$, where the length is the distance moved by the bubble." },
            ],
            steps: [
              { reasoning: "Find the distance moved per minute.", working: "\\frac{45}{15} = 3\\text{ mm/min}", marks: 1, markCode: "M" },
              { reasoning: "Find the cross-sectional area of the capillary tube.", working: "\\pi \\times 0.60^2 = 1.131\\text{ mm}^2", marks: 1, markCode: "M" },
              { reasoning: "Multiply and round to 2 significant figures.", working: "1.131 \\times 3 = 3.39 \\approx 3.4\\text{ mm}^3\\text{/min}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$3.4\\text{ mm}^3\\text{/min}$",
            commonErrors: ["Using the diameter as the radius.", "Forgetting to divide by the time.", "Squaring after multiplying by pi."],
            examinerNote: "M1 for 3 mm/min (or 45 mm total volume then divided by 15). M1 for $\\pi r^2$. A1 for 3.4 (allow 3.39). Allow ecf."
          },
        },
        {
          id: "ebi10-u2-blood-plant-transport-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A person with iron deficiency anaemia feels tired and breathless during exercise. Explain why.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Haemoglobin and iron", statement: "Iron is needed to make haemoglobin, which carries oxygen in red blood cells." },
            ],
            steps: [
              { reasoning: "Iron is needed to make haemoglobin, so there is less haemoglobin (fewer healthy red blood cells).", marks: 1, markCode: "B" },
              { reasoning: "Haemoglobin combines with oxygen, so less oxygen is carried by the blood.", marks: 1, markCode: "B" },
              { reasoning: "Less oxygen reaches the muscles, so less aerobic respiration and less energy is released, causing tiredness.", marks: 1, markCode: "B" },
              { reasoning: "Anaerobic respiration produces lactic acid, and the person breathes faster to try to take in more oxygen (breathlessness).", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Less iron means less haemoglobin, so less oxygen is carried; less aerobic respiration means less energy; breathing rate rises to compensate.",
            commonErrors: ["Saying that iron is needed to make red blood cells without mentioning haemoglobin.", "Saying that the person has less blood."],
            examinerNote: "Allow 'oxygen debt' or 'anaerobic respiration' for the final mark. Reject 'less oxygen in the air'."
          },
        },
        {
          id: "ebi10-u2-blood-plant-transport-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "A student uses a potometer to compare the water uptake of a leafy shoot in two conditions. The capillary tube has a radius of $0.50\\text{ mm}$. In each condition the student measures how far the air bubble moves in $10$ minutes.\n\n| Condition | Distance moved by bubble in 10 min (mm) |\n| --- | --- |\n| Still air | 24 |\n| Fan blowing on leaves | 60 |",
          parts: [
            { label: "a", prompt: "Calculate the rate of movement of the bubble when the fan is blowing, in $\\text{mm}$ per minute.", marks: 2 },
            { label: "b", prompt: "Calculate the volume of water taken up by the shoot in $10$ minutes with the fan blowing. Give your answer in $\\text{mm}^3$ to 3 significant figures.", marks: 2 },
            { label: "c", prompt: "Explain why the shoot takes up water faster when the fan is blowing.", marks: 2 },
            { label: "d", prompt: "Describe how water moves from the soil into the root and then up to the leaves.", marks: 3 },
            { label: "e", prompt: "Suggest why the volume of water taken up is not exactly equal to the volume of water lost by transpiration.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Rate", statement: "$\\text{rate} = \\frac{\\text{distance}}{\\text{time}}$" },
              { kind: "formula", name: "Volume of a cylinder", statement: "$V = \\pi r^2 \\times \\text{length}$" },
              { kind: "principle", name: "Transpiration stream", statement: "Evaporation from the leaves pulls a continuous column of water up the xylem." },
            ],
            steps: [
              { part: "a", reasoning: "Divide distance by time.", working: "\\frac{60}{10}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "6.0\\text{ mm/min}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Use the volume of a cylinder with the radius of the tube and the distance moved.", working: "V = \\pi \\times 0.50^2 \\times 60", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate to 3 significant figures.", working: "V = 47.1\\text{ mm}^3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The fan blows away water vapour from around the stomata, so the concentration gradient of water vapour between the leaf and the air is steeper.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "So water vapour diffuses out faster, transpiration is faster, and water is pulled up the xylem faster.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Water enters the root hair cells by osmosis, as the soil water has a higher water potential (more dilute) than the cell sap.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "It passes through the root cells into the xylem, and moves up the xylem as a continuous column.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "In the leaf it evaporates from the mesophyll cells and diffuses out through the stomata (transpiration pull draws more water up).", marks: 1, markCode: "B" },
              { part: "e", reasoning: "Some water is used in photosynthesis, or is used to keep cells turgid, so it is not lost by transpiration.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) $6.0\\text{ mm/min}$ (b) $47.1\\text{ mm}^3$ (c) wind keeps concentration gradient of water vapour steep (d) osmosis into root hairs, xylem, evaporation and transpiration pull (e) some water used in photosynthesis or turgor.",
            commonErrors: ["Using diameter 1.0 mm as the radius, giving 188 mm$^3$.", "Saying that wind makes the stomata open.", "Describing water moving up the phloem."],
            examinerNote: "In (b) allow 47 or 47.12. In (d) allow 'down a water potential gradient' for osmosis."
          },
        },
      ],
    },
  ],
};
