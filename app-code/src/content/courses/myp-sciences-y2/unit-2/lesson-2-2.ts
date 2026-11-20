import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "myps2-u2-lesson-2-2",
  code: "2-2",
  title: "Breathing and Circulation",
  goal: "I CAN explain how gas exchange happens in the alveoli, evaluate the effects of smoking, describe the heart, blood vessels and blood, write the equation for aerobic respiration and analyse how exercise affects heart rate.",
  standards: [
    "Criterion A: Knowing and understanding",
    "Criterion C: Processing and evaluating",
    "Criterion D: Reflecting on the impacts of science",
    "Key concept: Systems",
    "Related concept: Function",
  ],
  vocabulary: [
    { term: "Alveoli", definition: "Tiny air sacs at the ends of the bronchioles in the lungs where gas exchange takes place." },
    { term: "Diffusion", definition: "The net movement of particles from a region of higher concentration to a region of lower concentration." },
    { term: "Haemoglobin", definition: "The red protein in red blood cells that carries oxygen." },
    { term: "Artery", definition: "A blood vessel with thick, elastic walls that carries blood away from the heart at high pressure." },
    { term: "Aerobic respiration", definition: "The release of energy from glucose in cells using oxygen." },
    { term: "Heart rate", definition: "The number of times the heart beats in one minute, measured in beats per minute (bpm)." },
  ],
  concepts: [
    {
      id: "myps2-u2-gas-exchange-smoking",
      title: "Gas exchange and smoking",
      skill: "Describe the respiratory system and the adaptations of the alveoli, and evaluate the effects of smoking on the lungs and blood.",
      lesson: {
        sections: [
          {
            heading: "The respiratory system",
            body: "Air enters through the nose or mouth and passes down the **trachea** (windpipe), which divides into two **bronchi**, one to each lung. The bronchi divide into smaller **bronchioles** that end in clusters of tiny air sacs called **alveoli**. Breathing in uses the **diaphragm** and the **intercostal muscles** between the ribs to make the chest bigger, so air is drawn in. Breathing out reverses this.",
          },
          {
            heading: "Gas exchange in the alveoli",
            body: "Oxygen moves from the air in the alveoli into the blood, and carbon dioxide moves from the blood into the alveoli, by **diffusion**. The alveoli are adapted for this.\n\n- There are millions of them, giving a **large surface area**.\n- The wall is **one cell thick**, so the diffusion distance is short.\n- They are surrounded by **capillaries**, giving a good blood supply that keeps a steep concentration gradient.\n- They are moist, so gases can dissolve.",
          },
          {
            heading: "The effects of smoking",
            body: "Cigarette smoke contains harmful substances.\n\n- **Nicotine** is addictive.\n- **Tar** coats the lining of the airways, damages the cilia that sweep mucus out, and contains chemicals that cause cancer. Mucus builds up and causes a smoker's cough and infections.\n- **Carbon monoxide** joins to haemoglobin in place of oxygen, so the blood carries less oxygen and the heart must work harder.\n\nSmoking increases the risk of lung cancer, bronchitis, emphysema and heart disease. Evaluating a public health measure, such as banning smoking in public places or health warnings, means weighing the benefits against the limits.",
          },
        ],
        keyFormulas: [
          { name: "Gas exchange", statement: "Oxygen diffuses into the blood and carbon dioxide diffuses out, across the alveolar wall" },
          { name: "Volume of air breathed", statement: "volume per minute = volume per breath $\\times$ breaths per minute" },
          { name: "Smoke", statement: "Nicotine: addictive. Tar: damages cilia, causes cancer. Carbon monoxide: reduces oxygen carried" },
        ],
        workedExample: {
          problem: "A person breathes in 450 cm3 of air with each breath and takes 16 breaths per minute. Calculate the volume of air breathed in each minute.",
          solution: "Volume per minute $=450\\times16=7200\\text{ cm}^3$.",
        },
      },
      questions: [
        {
          id: "myps2-u2-gas-exchange-smoking-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "In which part of the lungs does gas exchange take place?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Trachea" },
              { id: "b", text: "Bronchi" },
              { id: "c", text: "Alveoli" },
              { id: "d", text: "Diaphragm" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Alveoli", statement: "The alveoli are tiny air sacs where oxygen diffuses into the blood and carbon dioxide diffuses out." },
            ],
            steps: [
              { reasoning: "Gas exchange happens across the thin walls of the alveoli.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Alveoli",
            commonErrors: ["Choosing the bronchi because they carry air into the lungs; the walls of the airways are too thick for gas exchange.", "Choosing the diaphragm, which is the muscle used in breathing."],
            examinerNote: "B1 for alveoli.",
          },
        },
        {
          id: "myps2-u2-gas-exchange-smoking-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "At rest, a student breathes in $500\\text{ cm}^3$ of air with each breath and takes 14 breaths in one minute.\n\nCalculate the volume of air the student breathes in each minute, in $\\text{cm}^3$.",
          response: { type: "numeric", parts: [{ label: "Volume per minute", answer: 7000, unit: "cm3" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Volume of air per minute", statement: "volume per minute = volume per breath $\\times$ breaths per minute" },
            ],
            steps: [
              { reasoning: "Multiply the volume per breath by the number of breaths per minute.", working: "500\\times14", marks: 1, markCode: "M" },
              { reasoning: "Evaluate with the unit.", working: "=7000\\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$7000\\text{ cm}^3$",
            commonErrors: ["Adding 500 and 14.", "Dividing 500 by 14."],
            examinerNote: "M1 for 500 x 14. A1 for 7000 cm3. Allow 7 dm3 or 7 litres.",
          },
        },
        {
          id: "myps2-u2-gas-exchange-smoking-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "The alveoli in the lungs are adapted for efficient gas exchange.\n\nExplain **two** ways in which the structure of the alveoli makes gas exchange efficient.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Diffusion", statement: "Gases diffuse faster across a large surface area, a short distance and a steep concentration gradient." },
              { kind: "principle", name: "Structure and function", statement: "The alveoli have structures adapted to the function of gas exchange." },
            ],
            steps: [
              { reasoning: "Feature 1: there are millions of alveoli, which gives a very large surface area.", marks: 1, markCode: "B" },
              { reasoning: "Explanation 1: more oxygen and carbon dioxide can diffuse at the same time.", marks: 1, markCode: "R" },
              { reasoning: "Feature 2: the wall is only one cell thick (or surrounded by many capillaries).", marks: 1, markCode: "B" },
              { reasoning: "Explanation 2: a short diffusion distance (or a steep concentration gradient kept by the blood flow) means faster diffusion.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Large surface area, so more gas diffuses at once. Wall one cell thick, so a short diffusion distance (or many capillaries keep a steep concentration gradient).",
            commonErrors: ["Giving a feature without an explanation of why it helps.", "Saying the alveoli are 'thin' without saying the wall is one cell thick."],
            examinerNote: "Each feature must be paired with its explanation. Allow 'moist surface lets gases dissolve' as a feature with a suitable explanation.",
          },
        },
        {
          id: "myps2-u2-gas-exchange-smoking-q4",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A health department records the percentage of adults who smoke in a country.\n\n- Year 2000: 30%\n- Year 2010: 24%\n- Year 2020: 15%\n\nDuring this period the government introduced health warnings on packets and banned smoking in public places.",
          parts: [
            { label: "a", prompt: "Name the substance in cigarette smoke that makes smokers addicted.", marks: 1 },
            { label: "b", prompt: "Describe how tar in cigarette smoke damages the airways.", marks: 2 },
            { label: "c", prompt: "Explain how carbon monoxide affects the transport of oxygen in the blood.", marks: 2 },
            { label: "d", prompt: "Calculate the percentage decrease in the percentage of adults who smoke between 2000 and 2020.", marks: 2 },
            { label: "e", prompt: "Suggest **one** reason why a smoking ban in public places may help non-smokers.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Substances in smoke", statement: "Nicotine is addictive, tar damages cilia and causes cancer, carbon monoxide reduces the oxygen carried by the blood." },
              { kind: "formula", name: "Percentage change", statement: "$\\text{percentage decrease}=\\dfrac{\\text{decrease}}{\\text{original value}}\\times100$" },
            ],
            steps: [
              { part: "a", reasoning: "Nicotine is the addictive substance.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Tar coats the lining of the airways and damages (destroys) the cilia, so mucus is not swept out.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Mucus builds up, causing a cough and infections; tar also contains chemicals that cause cancer.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "Carbon monoxide combines with haemoglobin in red blood cells in place of oxygen.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "So the blood carries less oxygen to the body, and the heart has to beat faster to supply the tissues.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Find the decrease and divide by the original value.", working: "\\frac{30-15}{30}\\times100", marks: 1, markCode: "M" },
              { part: "d", reasoning: "Evaluate.", working: "=50\\%", marks: 1, markCode: "A" },
              { part: "e", reasoning: "Non-smokers breathe in less smoke (passive smoking), so they have a lower risk of lung disease and cancer.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) Nicotine (b) Tar damages cilia so mucus builds up; causes cough, infections and cancer (c) Carbon monoxide joins haemoglobin instead of oxygen, so less oxygen is carried (d) $50\\%$ (e) Less passive smoking, lower risk of disease",
            commonErrors: ["Giving tar or carbon monoxide as the addictive substance.", "Saying carbon monoxide 'blocks the lungs' rather than binding to haemoglobin.", "In (d) giving 15% (the percentage point change) instead of 50%."],
            examinerNote: "(b) Allow 'kills / paralyses the cilia'. (d) M1 for (30 - 15) / 30; A1 for 50. Reject 15. (e) Allow 'less passive smoke inhaled'.",
          },
        },
        {
          id: "myps2-u2-gas-exchange-smoking-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The trachea (windpipe) divides into two tubes. What are they called?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alveoli" },
              { id: "b", text: "Bronchi" },
              { id: "c", text: "Bronchioles" },
              { id: "d", text: "Capillaries" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Bronchi", statement: "The trachea divides into two bronchi, one to each lung; the bronchi divide further into bronchioles ending in alveoli." },
            ],
            steps: [
              { reasoning: "The trachea splits into the two bronchi leading to each lung.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Bronchi",
            commonErrors: ["Choosing bronchioles, which are the smaller tubes inside the lungs."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u2-gas-exchange-smoking-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which gas diffuses from the air in the alveoli into the blood during gas exchange?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon dioxide" },
              { id: "b", text: "Oxygen" },
              { id: "c", text: "Nitrogen" },
              { id: "d", text: "Carbon monoxide" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Gas exchange", statement: "Oxygen diffuses into the blood and carbon dioxide diffuses out of the blood into the alveoli." },
            ],
            steps: [
              { reasoning: "Oxygen moves from the air into the blood; carbon dioxide moves the other way.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Oxygen",
            commonErrors: ["Reversing the direction and choosing carbon dioxide."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u2-gas-exchange-smoking-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "Why is the wall of an alveolus only one cell thick?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To make the alveolus stronger" },
              { id: "b", text: "To give a short diffusion distance for gases" },
              { id: "c", text: "To trap dust particles" },
              { id: "d", text: "To store oxygen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Alveoli adaptation", statement: "The alveolar wall is one cell thick so gases only diffuse a very short distance." },
            ],
            steps: [
              { reasoning: "A thin wall shortens the diffusion path, so oxygen and carbon dioxide cross quickly.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To give a short diffusion distance for gases",
            commonErrors: ["Thinking thickness helps strength rather than speed of exchange."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u2-gas-exchange-smoking-q8",
          difficulty: "foundation",
          totalMarks: 2,
          stem: "A person breathes in 400 cm$^3$ of air with each breath and takes 14 breaths per minute.\n\nCalculate the volume of air breathed in each minute.",
          response: {
            type: "numeric",
            parts: [{ label: "Volume per minute", answer: 5600, tolerance: 0, unit: "cm³" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Minute ventilation", statement: "volume per minute = volume per breath x breaths per minute" },
            ],
            steps: [
              { reasoning: "Multiply the volume per breath by the breathing rate.", working: "400 \\times 14", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 5600\\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5600 cm$^3$",
            commonErrors: ["Dividing instead of multiplying.", "Forgetting the unit."],
            examinerNote: "M1 for 400 x 14 oe. A1 for 5600 cm3.",
          },
        },
        {
          id: "myps2-u2-gas-exchange-smoking-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "A cyclist breathes in 500 cm$^3$ of air per breath at 12 breaths per minute while resting.\n\nCalculate the volume of air breathed in each minute.",
          response: {
            type: "numeric",
            parts: [{ label: "Volume per minute", answer: 6000, tolerance: 0, unit: "cm³" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Minute ventilation", statement: "volume per minute = volume per breath x breaths per minute" },
            ],
            steps: [
              { reasoning: "Multiply volume per breath by breaths per minute.", working: "500 \\times 12", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 6000\\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6000 cm$^3$",
            commonErrors: ["Adding 500 and 12."],
            examinerNote: "M1 for 500 x 12 oe. A1 for 6000 cm3.",
          },
        },
        {
          id: "myps2-u2-gas-exchange-smoking-q10",
          difficulty: "core",
          totalMarks: 2,
          stem: "During exercise a person breathes in 350 cm$^3$ per breath at 20 breaths per minute.\n\nCalculate the volume of air breathed in each minute.",
          response: {
            type: "numeric",
            parts: [{ label: "Volume per minute", answer: 7000, tolerance: 0, unit: "cm³" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Minute ventilation", statement: "volume per minute = volume per breath x breaths per minute" },
            ],
            steps: [
              { reasoning: "Multiply volume per breath by breaths per minute.", working: "350 \\times 20", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 7000\\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "7000 cm$^3$",
            commonErrors: ["Multiplying by the wrong factor."],
            examinerNote: "M1 for 350 x 20 oe. A1 for 7000 cm3.",
          },
        },
        {
          id: "myps2-u2-gas-exchange-smoking-q11",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "A person normally breathes in 400 cm$^3$ per breath at 15 breaths per minute. During exercise the breathing rate doubles to 30 breaths per minute but the volume per breath stays the same.\n\nCalculate the volume of air breathed per minute at rest and during exercise.",
          response: {
            type: "numeric",
            parts: [
              { label: "Volume per minute at rest", answer: 6000, tolerance: 0, unit: "cm³" },
              { label: "Volume per minute during exercise", answer: 12000, tolerance: 0, unit: "cm³" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Minute ventilation", statement: "volume per minute = volume per breath x breaths per minute" },
            ],
            steps: [
              { reasoning: "Rest: multiply 400 by 15.", working: "400 \\times 15 = 6000\\text{ cm}^3", marks: 1, markCode: "B" },
              { reasoning: "Exercise: multiply 400 by 30.", working: "400 \\times 30 = 12000\\text{ cm}^3", marks: 1, markCode: "B" },
              { reasoning: "Both use the same formula volume per breath x breaths per minute.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "Rest: 6000 cm$^3$; exercise: 12000 cm$^3$",
            commonErrors: ["Keeping the rate at 15 for exercise.", "Doubling the volume per breath instead of the rate."],
            examinerNote: "B1 for each correct value. M1 for method.",
          },
        },
        {
          id: "myps2-u2-gas-exchange-smoking-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Describe **two** adaptations of the alveoli that make them efficient for gas exchange.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Alveoli adaptations", statement: "Alveoli have a large surface area, a one-cell-thick wall, a rich capillary supply and are moist." },
            ],
            steps: [
              { reasoning: "There are millions of alveoli, giving a large surface area for gas exchange.", marks: 1, markCode: "B" },
              { reasoning: "The wall is one cell thick, so the diffusion distance is very short.", marks: 1, markCode: "B" },
              { reasoning: "Each alveolus is surrounded by capillaries, giving a good blood supply that maintains a steep concentration gradient.", marks: 1, markCode: "B" },
              { reasoning: "The alveoli are moist, allowing gases to dissolve before diffusing.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "Large surface area (many alveoli), one-cell-thick wall for a short diffusion distance, capillary supply for a steep gradient, and moisture for dissolving gases.",
            commonErrors: ["Listing features without explaining their effect on gas exchange."],
            examinerNote: "B1 for each correct adaptation; require two of the four listed.",
          },
        },
        {
          id: "myps2-u2-gas-exchange-smoking-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Carbon monoxide in cigarette smoke is described as dangerous even though it is not directly poisonous like a toxin. Explain how it reduces the oxygen supply to body cells and why this makes the heart work harder.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Carbon monoxide", statement: "Carbon monoxide binds to haemoglobin in red blood cells in place of oxygen, so less oxygen is carried." },
            ],
            steps: [
              { reasoning: "Carbon monoxide joins to haemoglobin in red blood cells, taking the place that oxygen would occupy.", marks: 1, markCode: "B" },
              { reasoning: "Each haemoglobin molecule carries less oxygen, so the blood delivers less oxygen to the body cells.", marks: 1, markCode: "R" },
              { reasoning: "The body responds by making the heart beat faster (and breathing faster) to try to deliver more oxygen.", marks: 1, markCode: "B" },
              { reasoning: "Over time this extra strain on the heart increases the risk of heart disease.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Carbon monoxide binds haemoglobin instead of oxygen, so less oxygen reaches the cells. The heart beats faster to compensate, which strains it.",
            commonErrors: ["Saying carbon monoxide blocks the lungs or airways."],
            examinerNote: "B1 binds haemoglobin. R1 less oxygen carried. B1 heart beats faster. R1 strain / heart disease. Allow oe.",
          },
        },
        {
          id: "myps2-u2-gas-exchange-smoking-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which substance in cigarette smoke is responsible for causing cancer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nicotine" },
              { id: "b", text: "Tar" },
              { id: "c", text: "Carbon monoxide" },
              { id: "d", text: "Oxygen" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Substances in smoke", statement: "Tar contains chemicals that cause cancer and damages cilia; nicotine is addictive; carbon monoxide reduces oxygen transport." },
            ],
            steps: [
              { reasoning: "Tar contains carcinogenic chemicals and damages the cilia; nicotine is addictive and carbon monoxide affects oxygen transport.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Tar",
            commonErrors: ["Choosing nicotine, which is addictive but not the carcinogen."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u2-gas-exchange-smoking-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A country bans smoking in all public places. Which statement BEST evaluates this public health measure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It is useless because smokers can still smoke at home" },
              { id: "b", text: "It protects non-smokers from passive smoking and may encourage smokers to quit, though it limits personal freedom" },
              { id: "c", text: "It cures lung cancer immediately" },
              { id: "d", text: "It only helps children, not adults" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "principle", name: "Evaluating public health", statement: "Weigh the benefits of a measure against its limits, such as personal freedom or enforcement cost." },
            ],
            steps: [
              { reasoning: "The ban reduces passive smoking for non-smokers and can discourage smoking, but it restricts personal choice; a balanced evaluation weighs both sides.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** It protects non-smokers from passive smoking and may encourage smokers to quit, though it limits personal freedom",
            commonErrors: ["Giving only one side of the evaluation."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u2-gas-exchange-smoking-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student measures breathing using a spirometer. At rest the student inhales 400 cm$^3$ per breath at 15 breaths per minute. After 2 minutes of exercise the values rise to 600 cm$^3$ per breath at 25 breaths per minute.",
          parts: [
            { label: "a", prompt: "Calculate the volume of air breathed per minute at rest.", marks: 2 },
            { label: "b", prompt: "Calculate the volume of air breathed per minute during exercise.", marks: 2 },
            { label: "c", prompt: "Explain why the breathing rate and volume both increase during exercise.", marks: 2 },
            { label: "d", prompt: "Explain how the structure of the alveoli allows this extra oxygen to reach the blood quickly.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Minute ventilation", statement: "volume per minute = volume per breath x breaths per minute" },
              { kind: "property", name: "Alveoli", statement: "Millions of alveoli, one-cell-thick walls, capillary supply and moisture make gas exchange fast." },
            ],
            steps: [
              { part: "a", reasoning: "Multiply volume per breath by breaths per minute.", working: "400 \\times 15 = 6000\\text{ cm}^3", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Evaluate.", working: "6000\\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Multiply the new values.", working: "600 \\times 25 = 15000\\text{ cm}^3", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "15000\\text{ cm}^3", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Exercising muscles respire faster and need more oxygen and glucose.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "More air is taken in to supply the extra oxygen and to remove the extra carbon dioxide produced.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "The huge surface area of millions of alveoli and the one-cell-thick walls give a short diffusion distance.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "The rich capillary blood supply keeps a steep concentration gradient so oxygen diffuses rapidly into the blood.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) 6000 cm3 (b) 15000 cm3 (c) More oxygen needed and more CO2 to remove (d) Large surface area, thin walls, good blood supply for fast diffusion.",
            commonErrors: ["In (a)/(b) adding instead of multiplying.", "In (d) only mentioning surface area without the blood supply."],
            examinerNote: "(a) M1 for 400x15. A1 for 6000. (b) M1 for 600x25. A1 for 15000. (c)/(d) Allow oe.",
          },
        },
      ],
    },
    {
      id: "myps2-u2-heart-circulation-exercise",
      title: "The heart, blood and exercise",
      skill: "Describe the heart, blood vessels and blood, write the equation for aerobic respiration and analyse data on the effect of exercise on heart rate.",
      lesson: {
        sections: [
          {
            heading: "The heart and blood vessels",
            body: "The heart is a muscular pump with a double circulation: the **right side** pumps blood to the lungs to pick up oxygen, and the **left side** pumps oxygenated blood around the rest of the body. It has four chambers: two thin-walled **atria** that receive blood and two thick-walled **ventricles** that pump it out. Valves stop blood flowing backwards.\n\n- **Arteries** carry blood away from the heart at high pressure. They have thick, elastic, muscular walls.\n- **Veins** carry blood back to the heart at low pressure. They have thinner walls and valves.\n- **Capillaries** are very narrow, with walls one cell thick, so substances can pass between the blood and cells.",
          },
          {
            heading: "Blood",
            body: "- **Red blood cells** carry oxygen using haemoglobin. They have no nucleus and are biconcave, which gives a large surface area.\n- **White blood cells** fight pathogens.\n- **Platelets** are fragments of cells that help blood to clot.\n- **Plasma** is the liquid that carries dissolved glucose, carbon dioxide, hormones and waste.",
          },
          {
            heading: "Aerobic respiration and exercise",
            body: "Cells release energy from glucose using oxygen in **aerobic respiration**.\n\n$$\\text{glucose}+\\text{oxygen}\\rightarrow\\text{carbon dioxide}+\\text{water}\\ (+\\text{energy})$$\n\nDuring exercise the muscles respire faster. They need more glucose and oxygen and produce more carbon dioxide. The **heart rate** and breathing rate increase to deliver these and remove the waste. After exercise, the heart rate falls slowly back to the resting rate. A fitter person has a lower resting heart rate and recovers faster.",
          },
        ],
        keyFormulas: [
          { name: "Aerobic respiration", statement: "glucose + oxygen $\\rightarrow$ carbon dioxide + water (+ energy)" },
          { name: "Percentage increase", statement: "$\\dfrac{\\text{new}-\\text{original}}{\\text{original}}\\times100$" },
          { name: "Vessels", statement: "Arteries: away from heart. Veins: towards heart. Capillaries: exchange" },
        ],
        workedExample: {
          problem: "A student's heart rate is 75 bpm at rest and 120 bpm after running. Calculate the percentage increase.",
          solution: "Increase $=120-75=45$ bpm. Percentage increase $=\\dfrac{45}{75}\\times100=60\\%$.",
        },
      },
      questions: [
        {
          id: "myps2-u2-heart-circulation-exercise-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of blood vessel carries blood away from the heart at high pressure?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Vein" },
              { id: "b", text: "Capillary" },
              { id: "c", text: "Artery" },
              { id: "d", text: "Atrium" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Artery", statement: "An artery carries blood away from the heart at high pressure and has thick, elastic, muscular walls." },
            ],
            steps: [
              { reasoning: "Arteries carry blood away from the heart at high pressure.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Artery",
            commonErrors: ["Choosing vein because veins are linked with blood returning to the heart; the direction is the opposite.", "Choosing atrium, which is a heart chamber, not a vessel."],
            examinerNote: "B1 for artery.",
          },
        },
        {
          id: "myps2-u2-heart-circulation-exercise-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "A student's resting heart rate is 70 beats per minute (bpm). After exercise it is 126 bpm.\n\nCalculate the percentage increase in heart rate.",
          response: { type: "numeric", parts: [{ label: "Percentage increase", answer: 80, unit: "%" }] },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage increase", statement: "$\\text{percentage increase}=\\dfrac{\\text{increase}}{\\text{original}}\\times100$" },
            ],
            steps: [
              { reasoning: "Find the increase and divide by the original (resting) value.", working: "\\frac{126-70}{70}\\times100=\\frac{56}{70}\\times100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "=80\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "$80\\%$",
            commonErrors: ["Dividing by the final value (56 / 126 = 44%).", "Giving the increase in bpm (56) instead of a percentage."],
            examinerNote: "M1 for 56 / 70 x 100 (oe). A1 for 80. Reject 56.",
          },
        },
        {
          id: "myps2-u2-heart-circulation-exercise-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Heart rate increases during exercise.\n\nExplain why the heart rate of a person increases during exercise.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Aerobic respiration", statement: "glucose + oxygen $\\rightarrow$ carbon dioxide + water (+ energy)" },
              { kind: "principle", name: "Supply and demand", statement: "Cells that respire faster need a faster supply of glucose and oxygen and faster removal of carbon dioxide." },
            ],
            steps: [
              { reasoning: "During exercise the muscles contract more and need more energy.", marks: 1, markCode: "B" },
              { reasoning: "So they carry out aerobic respiration faster, which uses more glucose and oxygen.", marks: 1, markCode: "B" },
              { reasoning: "More carbon dioxide is also produced and must be removed.", marks: 1, markCode: "B" },
              { reasoning: "A faster heart rate pumps blood around the body faster, so oxygen and glucose are delivered, and carbon dioxide removed, more quickly.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Muscles respire faster and need more oxygen and glucose and make more carbon dioxide; a faster heart rate delivers these and removes the waste faster.",
            commonErrors: ["Saying the heart 'needs more energy' as the only reason.", "Saying the body 'makes more oxygen' during exercise."],
            examinerNote: "Allow 'more energy needed by muscles' for the first mark. The final mark must link faster blood flow to delivery / removal.",
          },
        },
        {
          id: "myps2-u2-heart-circulation-exercise-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student runs on the spot for 3 minutes and then rests. Her heart rate is measured with a heart rate monitor.\n\n- At rest, before exercise: 80 bpm\n- After 1 minute of exercise: 110 bpm\n- After 2 minutes: 140 bpm\n- After 3 minutes (end of exercise): 160 bpm\n- 5 minutes after stopping: 90 bpm",
          parts: [
            { label: "a", prompt: "Write the word equation for aerobic respiration.", marks: 2 },
            { label: "b", prompt: "Calculate the percentage increase in heart rate from rest to the end of the exercise.", marks: 2 },
            { label: "c", prompt: "Explain why the heart rate stays above the resting rate for some time after exercise stops.", marks: 2 },
            { label: "d", prompt: "Suggest **two** ways in which the investigation could be improved to give more reliable data.", marks: 2 },
            { label: "e", prompt: "Predict how the results would differ for a trained athlete, and give a reason.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Aerobic respiration", statement: "glucose + oxygen $\\rightarrow$ carbon dioxide + water (+ energy)" },
              { kind: "formula", name: "Percentage increase", statement: "$\\dfrac{\\text{increase}}{\\text{original}}\\times100$" },
              { kind: "principle", name: "Recovery", statement: "After exercise, the body still needs extra oxygen and to remove waste products, so the heart rate falls gradually." },
            ],
            steps: [
              { part: "a", reasoning: "Reactants: glucose and oxygen.", working: "\\text{glucose}+\\text{oxygen}", marks: 1, markCode: "B" },
              { part: "a", reasoning: "Products: carbon dioxide and water.", working: "\\rightarrow\\text{carbon dioxide}+\\text{water}", marks: 1, markCode: "B" },
              { part: "b", reasoning: "Divide the increase by the resting rate.", working: "\\frac{160-80}{80}\\times100", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Evaluate.", working: "=100\\%", marks: 1, markCode: "A" },
              { part: "c", reasoning: "The muscles still need extra oxygen to finish respiring and to remove the carbon dioxide and other wastes made during exercise.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The heart keeps beating faster to deliver this oxygen and remove the waste, then falls gradually.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "Any one improvement, for example repeat with several students and calculate a mean.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "A second different improvement, for example measure every 30 s, keep the exercise the same each time, or use students of similar age and fitness.", marks: 1, markCode: "B" },
              { part: "e", reasoning: "A trained athlete's heart rate would rise less and return to resting faster, because the heart is stronger and pumps more blood per beat.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) glucose + oxygen $\\rightarrow$ carbon dioxide + water (b) $100\\%$ (c) Muscles still need extra oxygen and to remove waste, so the heart rate falls gradually (d) Repeat and take a mean; measure more often or control the exercise (e) Smaller rise and faster recovery, because the heart is stronger",
            commonErrors: ["Putting energy as a reactant in (a).", "In (b) giving 80 bpm or 50%.", "In (d) saying 'do it again' without calculating a mean."],
            examinerNote: "(a) Allow energy as an extra product. Reject 'carbon' for carbon dioxide. (b) Allow ecf for a misread value. (e) Allow 'fitter heart pumps more blood each beat'.",
          },
        },
        {
          id: "myps2-u2-heart-circulation-exercise-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which blood component carries oxygen around the body?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "White blood cells" },
              { id: "b", text: "Platelets" },
              { id: "c", text: "Plasma" },
              { id: "d", text: "Red blood cells" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Red blood cells", statement: "Red blood cells carry oxygen using haemoglobin; white cells fight pathogens, platelets clot blood and plasma carries dissolved substances." },
            ],
            steps: [
              { reasoning: "Red blood cells contain haemoglobin, which binds and carries oxygen.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Red blood cells",
            commonErrors: ["Choosing plasma; it carries dissolved substances but not oxygen."],
            examinerNote: "B1 for choice (d).",
          },
        },
        {
          id: "myps2-u2-heart-circulation-exercise-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which type of blood vessel has thin walls and valves, and carries blood back towards the heart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Artery" },
              { id: "b", text: "Vein" },
              { id: "c", text: "Capillary" },
              { id: "d", text: "Ventricle" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Veins", statement: "Veins carry blood back to the heart at low pressure and have thinner walls and valves." },
            ],
            steps: [
              { reasoning: "Veins return blood to the heart; they have valves to stop backflow at low pressure.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Vein",
            commonErrors: ["Choosing artery, which has thick walls and no valves."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u2-heart-circulation-exercise-q7",
          difficulty: "core",
          totalMarks: 1,
          stem: "In the double circulation of the heart, where does blood go when it leaves the RIGHT side of the heart?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "To the rest of the body" },
              { id: "b", text: "To the lungs" },
              { id: "c", text: "To the brain only" },
              { id: "d", text: "Back to the heart" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Double circulation", statement: "The right side of the heart pumps blood to the lungs to pick up oxygen; the left side pumps oxygenated blood to the body." },
            ],
            steps: [
              { reasoning: "The right side sends deoxygenated blood to the lungs; the left side sends oxygenated blood around the body.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** To the lungs",
            commonErrors: ["Reversing the roles of the two sides."],
            examinerNote: "B1 for choice (b).",
          },
        },
        {
          id: "myps2-u2-heart-circulation-exercise-q8",
          difficulty: "foundation",
          totalMarks: 3,
          stem: "A student's heart rate is 60 bpm at rest and 150 bpm straight after running.\n\nCalculate the increase in heart rate and the percentage increase.",
          response: {
            type: "numeric",
            parts: [
              { label: "Increase in heart rate", answer: 90, tolerance: 0, unit: "bpm" },
              { label: "Percentage increase", answer: 150, tolerance: 0.01, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage increase", statement: "$\\dfrac{\\text{increase}}{\\text{original}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Find the increase in bpm.", working: "150 - 60 = 90\\text{ bpm}", marks: 1, markCode: "M" },
              { reasoning: "Divide by the resting rate and multiply by 100.", working: "\\frac{90}{60} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 150\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "90 bpm increase; 150% increase",
            commonErrors: ["Dividing by the final rate (150) instead of the original (60).", "Giving 90% instead of 150%."],
            examinerNote: "M1 for increase 90. M1 for /60 x100. A1 for 150%.",
          },
        },
        {
          id: "myps2-u2-heart-circulation-exercise-q9",
          difficulty: "core",
          totalMarks: 3,
          stem: "A person's heart rate rises from 80 bpm at rest to 100 bpm during gentle exercise.\n\nCalculate the percentage increase in heart rate.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage increase", answer: 25, tolerance: 0.01, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage increase", statement: "$\\dfrac{\\text{increase}}{\\text{original}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Find the increase.", working: "100 - 80 = 20\\text{ bpm}", marks: 1, markCode: "M" },
              { reasoning: "Divide by the original and multiply by 100.", working: "\\frac{20}{80} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 25\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "25%",
            commonErrors: ["Dividing 20 by 100 instead of 80."],
            examinerNote: "M1 for increase 20. M1 for method. A1 for 25%.",
          },
        },
        {
          id: "myps2-u2-heart-circulation-exercise-q10",
          difficulty: "core",
          totalMarks: 3,
          stem: "After exercise a person's heart rate falls from 140 bpm to 70 bpm once they are resting again.\n\nCalculate the percentage decrease in heart rate.",
          response: {
            type: "numeric",
            parts: [{ label: "Percentage decrease", answer: 50, tolerance: 0.01, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage decrease", statement: "$\\dfrac{\\text{decrease}}{\\text{original}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Find the decrease.", working: "140 - 70 = 70\\text{ bpm}", marks: 1, markCode: "M" },
              { reasoning: "Divide by the starting (exercise) rate and multiply by 100.", working: "\\frac{70}{140} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Evaluate.", working: "= 50\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "50%",
            commonErrors: ["Dividing by 70 (the final value) instead of 140."],
            examinerNote: "M1 for decrease 70. M1 for /140 x100. A1 for 50%.",
          },
        },
        {
          id: "myps2-u2-heart-circulation-exercise-q11",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two students measure their heart rates. Student A: 60 bpm at rest, 180 bpm after exercise. Student B: 80 bpm at rest, 160 bpm after exercise.\n\nCalculate the percentage increase for each student and state which student had the larger percentage increase.",
          response: {
            type: "numeric",
            parts: [
              { label: "Student A percentage increase", answer: 200, tolerance: 0.01, unit: "%" },
              { label: "Student B percentage increase", answer: 100, tolerance: 0.01, unit: "%" },
            ],
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage increase", statement: "$\\dfrac{\\text{increase}}{\\text{original}} \\times 100$" },
            ],
            steps: [
              { reasoning: "Student A: increase = $180 - 60 = 120$; percentage = $\\frac{120}{60} \\times 100 = 200\\%$.", working: "\\frac{120}{60} \\times 100", marks: 2, markCode: "M" },
              { reasoning: "Student B: increase = $160 - 80 = 80$; percentage = $\\frac{80}{80} \\times 100 = 100\\%$.", working: "\\frac{80}{80} \\times 100", marks: 2, markCode: "M" },
            ],
            finalAnswer: "A: 200%; B: 100%. Student A had the larger percentage increase.",
            commonErrors: ["Dividing by the exercise rate instead of the resting rate.", "Comparing bpm increases (120 vs 80) without percentages."],
            examinerNote: "M2 for each correct calculation (allow A1 each). A has the larger percentage increase even though... note B's absolute increase is smaller too.",
          },
        },
        {
          id: "myps2-u2-heart-circulation-exercise-q12",
          difficulty: "core",
          totalMarks: 4,
          stem: "Write the word equation for aerobic respiration and explain why the breathing rate increases during exercise.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Aerobic respiration", statement: "glucose + oxygen -> carbon dioxide + water (+ energy), using oxygen in cells." },
            ],
            steps: [
              { reasoning: "Reactants: glucose and oxygen.", working: "\\text{glucose} + \\text{oxygen}", marks: 1, markCode: "B" },
              { reasoning: "Products: carbon dioxide and water (energy released).", working: "\\rightarrow \\text{carbon dioxide} + \\text{water}", marks: 1, markCode: "B" },
              { reasoning: "Exercising muscles respire faster to release more energy.", marks: 1, markCode: "B" },
              { reasoning: "They need more oxygen and produce more carbon dioxide, so breathing rate rises to supply oxygen and remove the waste.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "glucose + oxygen -> carbon dioxide + water (+ energy). Breathing rate rises to supply the extra oxygen needed and remove extra carbon dioxide.",
            commonErrors: ["Putting energy on the reactant side.", "Saying breathing rate rises 'to cool the body'."],
            examinerNote: "B1 reactants. B1 products. B1 muscles respire faster. R1 oxygen in / CO2 out. Allow energy as product.",
          },
        },
        {
          id: "myps2-u2-heart-circulation-exercise-q13",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "During exercise the heart rate increases. Explain the full chain of events: why muscles need more oxygen, how the heart and lungs respond, and what happens to the heart rate after exercise stops.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "principle", name: "Exercise response", statement: "Muscles respire faster during exercise, needing more glucose and oxygen and producing more carbon dioxide; heart and breathing rates rise, then recover gradually." },
            ],
            steps: [
              { reasoning: "Muscles contract more during exercise and respire faster to release energy.", marks: 1, markCode: "B" },
              { reasoning: "They need more oxygen and glucose and produce more carbon dioxide.", marks: 1, markCode: "B" },
              { reasoning: "Heart rate and breathing rate increase to deliver oxygen/glucose faster and remove carbon dioxide.", marks: 1, markCode: "B" },
              { reasoning: "After exercise the body still needs extra oxygen and must remove accumulated waste, so the heart rate falls gradually back to resting.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "Muscles respire faster needing more O2 and producing more CO2; heart and breathing rates rise to match; after exercise the heart rate falls gradually as the body recovers.",
            commonErrors: ["Saying the heart rate drops instantly when exercise stops."],
            examinerNote: "B1 faster respiration. B1 more O2 / CO2. B1 rates increase. R1 gradual recovery / oxygen debt. Allow oe.",
          },
        },
        {
          id: "myps2-u2-heart-circulation-exercise-q14",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the role of platelets in the blood?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carry oxygen" },
              { id: "b", text: "Fight pathogens" },
              { id: "c", text: "Help blood to clot" },
              { id: "d", text: "Carry hormones" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Platelets", statement: "Platelets are cell fragments that help blood clot at wounds." },
            ],
            steps: [
              { reasoning: "Platelets clot blood; red cells carry oxygen, white cells fight pathogens and plasma carries hormones.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Help blood to clot",
            commonErrors: ["Confusing platelets with white blood cells."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u2-heart-circulation-exercise-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "What does plasma mainly carry?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only oxygen" },
              { id: "b", text: "Only red blood cells" },
              { id: "c", text: "Dissolved glucose, carbon dioxide, hormones and waste" },
              { id: "d", text: "Only platelets" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Plasma", statement: "Plasma is the liquid part of blood that carries dissolved substances such as glucose, carbon dioxide, hormones and waste." },
            ],
            steps: [
              { reasoning: "Plasma carries dissolved substances; cells are carried suspended in it.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Dissolved glucose, carbon dioxide, hormones and waste",
            commonErrors: ["Thinking plasma carries oxygen; that is haemoglobin in red cells."],
            examinerNote: "B1 for choice (c).",
          },
        },
        {
          id: "myps2-u2-heart-circulation-exercise-q16",
          difficulty: "challenge",
          totalMarks: 8,
          stem: "A student records heart rate every minute after 3 minutes of running: 150 bpm at 0 min, 120 bpm at 1 min, 100 bpm at 2 min, 85 bpm at 3 min and 75 bpm at 4 min. Resting heart rate is 70 bpm.",
          parts: [
            { label: "a", prompt: "Calculate the percentage increase in heart rate from rest to immediately after exercise.", marks: 2 },
            { label: "b", prompt: "Describe the trend in heart rate during the 4 minutes of recovery.", marks: 2 },
            { label: "c", prompt: "Explain why the heart rate does not return to 70 bpm immediately.", marks: 2 },
            { label: "d", prompt: "A trained athlete has a resting heart rate of 50 bpm. Suggest why an athlete might have a lower resting heart rate than an untrained person.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "formula", name: "Percentage increase", statement: "$\\dfrac{\\text{increase}}{\\text{original}} \\times 100$" },
              { kind: "principle", name: "Recovery", statement: "After exercise the heart rate falls gradually as the body removes waste and restores oxygen." },
            ],
            steps: [
              { part: "a", reasoning: "Increase = $150 - 70 = 80$ bpm.", working: "150 - 70", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Percentage = $\\frac{80}{70} \\times 100 \\approx 114\\%$ (accept 114%).", working: "\\frac{80}{70} \\times 100", marks: 1, markCode: "A" },
              { part: "b", reasoning: "The heart rate falls steadily from 150 bpm towards the resting rate.", marks: 1, markCode: "B" },
              { part: "b", reasoning: "It decreases by smaller amounts as it approaches 70 bpm (120, 100, 85, 75).", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The muscles have produced extra carbon dioxide and used extra oxygen during exercise.", marks: 1, markCode: "B" },
              { part: "c", reasoning: "The heart keeps beating faster to deliver oxygen and remove waste until the body has recovered; the fall is gradual.", marks: 1, markCode: "R" },
              { part: "d", reasoning: "A trained heart is stronger and pumps more blood with each beat.", marks: 1, markCode: "B" },
              { part: "d", reasoning: "So it needs fewer beats per minute to deliver the same amount of blood/oxygen at rest.", marks: 1, markCode: "R" },
            ],
            finalAnswer: "(a) about 114% (b) Heart rate falls steadily towards resting (c) Body still needs oxygen and must remove waste (d) Stronger heart pumps more per beat, so fewer beats needed.",
            commonErrors: ["In (a) dividing by 150 instead of 70.", "In (b) saying the rate stays high."],
            examinerNote: "(a) M1 for 80. A1 for 114% (accept 114.3%). (c)/(d) Allow oe.",
          },
        },
      ],
    },
  ],
};
