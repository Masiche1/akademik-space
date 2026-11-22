import type { Lesson } from "../../../types.ts";

export const lesson12: Lesson = {
  id: "s7-u1-lesson-1-2",
  code: "1-2",
  title: "Body Systems and Energy",
  goal: "I CAN describe how cells, tissues, organs and organ systems work together, and explain how photosynthesis and cellular respiration transfer matter and energy in organisms.",
  standards: ["MS-LS1-3", "MS-LS1-6", "MS-LS1-7", "SEP: Developing and Using Models", "SEP: Constructing Explanations"],
  vocabulary: [
    { term: "Tissue", definition: "A group of similar cells that work together to do a job." },
    { term: "Organ", definition: "A structure made of different tissues that work together to do a specific job." },
    { term: "Organ system", definition: "A group of organs that work together to carry out a major body function." },
    { term: "Photosynthesis", definition: "The process in which plants and other producers use light energy to change carbon dioxide and water into glucose and oxygen." },
    { term: "Cellular respiration", definition: "The process in which cells release usable energy from glucose, using oxygen and producing carbon dioxide and water." },
    { term: "Glucose", definition: "A sugar, $\\text{C}_6\\text{H}_{12}\\text{O}_6$, that stores chemical energy." },
    { term: "Chlorophyll", definition: "The green pigment in chloroplasts that absorbs light for photosynthesis." },
  ],
  concepts: [
    {
      id: "s7-u1-body-systems",
      title: "Levels of organization and interacting body systems",
      skill: "Describe levels of organization and explain how body systems interact to meet the needs of the body.",
      lesson: {
        sections: [
          {
            heading: "Levels of organization",
            body: "In a multicellular organism, structures are organized from small to large:\n\n**cell $\\rightarrow$ tissue $\\rightarrow$ organ $\\rightarrow$ organ system $\\rightarrow$ organism**\n\nFor example, muscle cells form muscle tissue; the heart is an organ made of muscle, nerve and connective tissue; the heart, blood and blood vessels form the circulatory system.",
          },
          {
            heading: "Systems work together",
            body: "No system works alone.\n\n- The **digestive system** breaks food into small molecules such as glucose.\n- The **respiratory system** takes in oxygen and removes carbon dioxide.\n- The **circulatory system** carries glucose and oxygen to every cell and carries wastes away.\n- The **nervous system** senses changes and sends signals to the muscles and other organs.\n- The **excretory system** removes wastes from the blood.\n\nDuring exercise, the nervous system senses the need for more energy, the heart beats faster and breathing speeds up so cells receive more oxygen and glucose.",
          },
        ],
        keyFormulas: [
          { name: "Levels of organization", statement: "Cell, tissue, organ, organ system, organism" },
          { name: "Interacting systems", statement: "Digestive and respiratory systems supply glucose and oxygen; the circulatory system delivers them to cells" },
        ],
        workedExample: {
          problem: "Explain how the digestive, circulatory and respiratory systems work together to supply a muscle cell.",
          solution: "The digestive system breaks food down into glucose, which passes into the blood. The respiratory system takes oxygen into the blood in the lungs. The circulatory system carries both glucose and oxygen to the muscle cell, which uses them in cellular respiration.",
        },
      },
      questions: [
        {
          id: "s7-u1-body-systems-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which list shows the levels of organization from smallest to largest?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Cell, organ, tissue, organ system" },
              { id: "b", text: "Organ, tissue, cell, organ system" },
              { id: "c", text: "Cell, tissue, organ, organ system" },
              { id: "d", text: "Tissue, cell, organ system, organ" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Levels of organization", statement: "Cells form tissues, tissues form organs, and organs form organ systems." },
            ],
            steps: [
              { reasoning: "Similar cells make a tissue, different tissues make an organ, and organs make an organ system.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Cell, tissue, organ, organ system",
            commonErrors: ["Putting organ before tissue."],
            examinerNote: "B1 for (c).",
          },
        },
        {
          id: "s7-u1-body-systems-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "The stomach is an organ. It contains muscle tissue, glandular tissue that makes digestive juices, and nerve tissue.\n\nExplain why the stomach is an organ and not a tissue.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Organ", statement: "An organ is made of different tissues that work together to do a specific job." },
            ],
            steps: [
              { reasoning: "The stomach contains more than one type of tissue.", marks: 1, markCode: "B" },
              { reasoning: "These tissues work together to do one job, digesting food.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "It is made of several different tissues that work together to digest food.",
            commonErrors: ["Describing a tissue as simply 'smaller' without mentioning different types.", "Saying an organ is made of only one cell type."],
            examinerNote: "B1 different / several tissues. B1 working together for a job (digestion).",
          },
        },
        {
          id: "s7-u1-body-systems-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A runner's muscles need more energy during a race.\n\nExplain how the respiratory, circulatory and nervous systems respond so that the muscle cells receive what they need.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interacting systems", statement: "Body systems work together: the nervous system detects and signals, the respiratory system supplies oxygen, and the circulatory system transports materials to cells." },
            ],
            steps: [
              { reasoning: "The nervous system senses the change and signals the heart and breathing muscles to speed up.", marks: 1, markCode: "B" },
              { reasoning: "The respiratory system takes in more oxygen and removes more carbon dioxide because breathing is faster and deeper.", marks: 1, markCode: "B" },
              { reasoning: "The circulatory system pumps blood faster, carrying oxygen and glucose to the muscles.", marks: 1, markCode: "B" },
              { reasoning: "Muscle cells use oxygen and glucose in cellular respiration to release more energy; blood also carries away carbon dioxide.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Nervous system signals faster heart rate and breathing; respiratory system supplies more oxygen; circulatory system delivers oxygen and glucose to muscle cells for respiration and removes carbon dioxide.",
            commonErrors: ["Describing each system separately without linking them.", "Saying the lungs deliver oxygen straight to muscles."],
            examinerNote: "B1 for each system correctly described. R1 for linking to respiration in muscle cells.",
          },
        },
        {
          id: "s7-u1-body-systems-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student records the heart rate of a teenager at rest and during exercise.\n\n- At rest: 70 beats per minute, breathing rate 14 breaths per minute.\n- During exercise: 140 beats per minute, breathing rate 28 breaths per minute.",
          parts: [
            { label: "a", prompt: "Calculate how many times greater the heart rate is during exercise than at rest.", marks: 1 },
            { label: "b", prompt: "Identify two organ systems whose activity increased, using the data.", marks: 2 },
            { label: "c", prompt: "Explain why both rates increased during exercise.", marks: 3 },
            { label: "d", prompt: "Predict what would happen to the muscle cells if the circulatory system stopped delivering blood, and explain your prediction.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Interacting systems", statement: "The respiratory and circulatory systems supply oxygen and glucose that cells need for cellular respiration." },
              { kind: "definition", name: "Cellular respiration", statement: "Cells release usable energy from glucose using oxygen." },
            ],
            steps: [
              { part: "a", reasoning: "Divide the exercise rate by the resting rate: 140 / 70 = 2.", working: "\\frac{140}{70}=2", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Circulatory system (heart rate increased).", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Respiratory system (breathing rate increased).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Exercising muscle cells carry out more cellular respiration to release more energy.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "They need more oxygen and glucose delivered, and more carbon dioxide removed.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Faster breathing takes in oxygen faster and a faster heart rate delivers it to the muscles more quickly.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Prediction: the muscle cells would run out of oxygen and glucose and stop working or die.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Reasoning: without blood they cannot carry out cellular respiration to release energy, and wastes build up.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 2 times (b) Circulatory and respiratory (c) More respiration needs more oxygen and glucose delivered and carbon dioxide removed (d) Cells would lose their supply of oxygen and glucose and could not release energy, so they would stop working or die.",
            commonErrors: ["In (a) giving 70 (the difference) instead of the ratio.", "In (c) saying faster breathing 'makes' energy."],
            examinerNote: "(a) Allow 'doubled'. (b) Allow 'heart' and 'lungs' for the systems.",
          },
        },
      ],
    },
    {
      id: "s7-u1-photosynthesis-respiration",
      title: "Photosynthesis and cellular respiration",
      skill: "Use the equations for photosynthesis and cellular respiration to describe how matter and energy flow through organisms.",
      lesson: {
        sections: [
          {
            heading: "Photosynthesis",
            body: "Plants, algae and some bacteria use light energy to build glucose. This takes place in chloroplasts, where chlorophyll absorbs light.\n\n$$6\\text{CO}_2+6\\text{H}_2\\text{O}\\xrightarrow{\\text{light}}\\text{C}_6\\text{H}_{12}\\text{O}_6+6\\text{O}_2$$\n\nLight energy is stored as chemical energy in glucose. The atoms in the reactants are rearranged to form the products, so matter is conserved: there are 6 C, 12 H and 18 O atoms on each side.",
          },
          {
            heading: "Cellular respiration",
            body: "Cells of nearly all organisms, including plants, release energy from glucose.\n\n$$\\text{C}_6\\text{H}_{12}\\text{O}_6+6\\text{O}_2\\rightarrow6\\text{CO}_2+6\\text{H}_2\\text{O}+\\text{energy}$$\n\nSome of the energy is used by the cell and some is released as heat. Respiration happens mainly in the mitochondria.",
          },
          {
            heading: "Two linked processes",
            body: "The products of photosynthesis (glucose and oxygen) are the reactants of respiration, and the products of respiration (carbon dioxide and water) are the reactants of photosynthesis. Matter cycles between them, but energy does not cycle: light energy enters, and some leaves as heat.",
          },
        ],
        keyFormulas: [
          { name: "Photosynthesis", statement: "$6\\text{CO}_2+6\\text{H}_2\\text{O}\\xrightarrow{\\text{light}}\\text{C}_6\\text{H}_{12}\\text{O}_6+6\\text{O}_2$" },
          { name: "Cellular respiration", statement: "$\\text{C}_6\\text{H}_{12}\\text{O}_6+6\\text{O}_2\\rightarrow6\\text{CO}_2+6\\text{H}_2\\text{O}+\\text{energy}$" },
        ],
        workedExample: {
          problem: "How many molecules of carbon dioxide are needed to make 4 molecules of glucose by photosynthesis?",
          solution: "The equation shows 6 molecules of $\\text{CO}_2$ are used for each glucose molecule. For 4 glucose molecules: $4\\times6=24$ molecules of carbon dioxide.",
        },
      },
      questions: [
        {
          id: "s7-u1-photosynthesis-respiration-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which are the reactants of photosynthesis?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon dioxide and water" },
              { id: "b", text: "Glucose and carbon dioxide" },
              { id: "c", text: "Glucose and oxygen" },
              { id: "d", text: "Oxygen and water" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photosynthesis", statement: "$6\\text{CO}_2+6\\text{H}_2\\text{O}\\xrightarrow{\\text{light}}\\text{C}_6\\text{H}_{12}\\text{O}_6+6\\text{O}_2$" },
            ],
            steps: [
              { reasoning: "Carbon dioxide and water are on the left of the equation. Glucose and oxygen are the products.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Carbon dioxide and water",
            commonErrors: ["Choosing (a), which are the reactants of respiration."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "s7-u1-photosynthesis-respiration-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A plant makes 5 molecules of glucose by photosynthesis.\n\nCalculate the number of oxygen molecules ($\\text{O}_2$) released.",
          response: { type: "numeric", parts: [{ label: "Oxygen molecules", answer: 30 }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Photosynthesis", statement: "$6\\text{CO}_2+6\\text{H}_2\\text{O}\\rightarrow\\text{C}_6\\text{H}_{12}\\text{O}_6+6\\text{O}_2$" },
            ],
            steps: [
              { reasoning: "Each glucose molecule made releases 6 oxygen molecules.", working: "5\\times6", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "30", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30 molecules",
            commonErrors: ["Giving 5 or 6."],
            examinerNote: "M1 for 5 x 6. A1 for 30.",
          },
        },
        {
          id: "s7-u1-photosynthesis-respiration-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A student claims, \"Plants do photosynthesis, so they do not need to do cellular respiration.\"\n\nEvaluate the student's claim using the equations.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Cellular respiration", statement: "$\\text{C}_6\\text{H}_{12}\\text{O}_6+6\\text{O}_2\\rightarrow6\\text{CO}_2+6\\text{H}_2\\text{O}+\\text{energy}$" },
              { kind: "principle", name: "Energy storage", statement: "Photosynthesis stores energy in glucose; respiration releases it for the cell to use." },
            ],
            steps: [
              { reasoning: "Claim: the student is incorrect.", marks: 1, markCode: "R" },
              { reasoning: "Photosynthesis makes glucose, storing light energy as chemical energy, but does not release usable energy for cell processes.", marks: 1, markCode: "B" },
              { reasoning: "Cellular respiration releases energy from glucose, and plant cells need it to grow and move materials.", marks: 1, markCode: "B" },
              { reasoning: "Plant cells, such as root cells or any cell in the dark, must respire; photosynthesis only happens in cells with chloroplasts and light.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "The claim is incorrect: photosynthesis stores energy in glucose, but plants release usable energy from glucose through cellular respiration, including in the dark and in cells without chloroplasts.",
            commonErrors: ["Saying plants respire only at night.", "Saying photosynthesis is the plant's version of respiration."],
            examinerNote: "R1 correct claim. B1 photosynthesis stores. B1 respiration releases. R1 justification such as roots or darkness.",
          },
        },
        {
          id: "s7-u1-photosynthesis-respiration-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student places a sprig of pondweed in water in a clear tube under a lamp and counts the bubbles of oxygen released in one minute. The student moves the lamp closer each time.\n\n- 40 cm from the lamp: 6 bubbles per minute\n- 30 cm: 12 bubbles per minute\n- 20 cm: 24 bubbles per minute\n- 10 cm: 24 bubbles per minute",
          parts: [
            { label: "a", prompt: "Identify the independent variable and the dependent variable.", marks: 2 },
            { label: "b", prompt: "Describe the pattern in the data.", marks: 2 },
            { label: "c", prompt: "Suggest why the rate did not change between 20 cm and 10 cm.", marks: 2 },
            { label: "d", prompt: "Write the word equation for the process that produces the bubbles and state where in the cell it happens.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Limiting factor", statement: "Once one factor (such as carbon dioxide or temperature) limits the rate, increasing light further does not increase it." },
              { kind: "formula", name: "Photosynthesis", statement: "carbon dioxide + water $\\xrightarrow{\\text{light}}$ glucose + oxygen" },
            ],
            steps: [
              { part: "a", reasoning: "Independent variable: distance from the lamp (light intensity).", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Dependent variable: number of bubbles per minute.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "As the lamp gets closer (more light), the bubble rate increases.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "The rate doubles each time the distance changes from 40 to 30 to 20 cm, then levels off at 24 bubbles per minute.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Another factor became limiting, such as carbon dioxide concentration or temperature.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "So more light could not increase the rate of photosynthesis further.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Carbon dioxide + water produces glucose + oxygen.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "Light energy is required (shown over the arrow or stated).", marks: 1, markCode: "B" },
              { part: "d", reasoning: "It happens in the chloroplasts.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "(a) Distance from lamp; bubbles per minute (b) More light gives more bubbles until it levels at 24 (c) Another factor, such as carbon dioxide, became limiting (d) Carbon dioxide + water, with light, gives glucose + oxygen; in the chloroplasts.",
            commonErrors: ["In (a) swapping the variables.", "In (c) saying the plant stopped photosynthesizing."],
            examinerNote: "(b) Allow 'direct relationship' only if the plateau is also mentioned for the second mark. (d) Reject 'sunlight is made'.",
          },
        },
      ],
    },
  ],
};
