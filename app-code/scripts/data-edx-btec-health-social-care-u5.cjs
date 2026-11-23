module.exports = [
  {
    file: "lesson-5-1.ts", exportName: "lesson51",
    lesson: {
      id: "edxbtechsc-u5-lesson-5-1", code: "5-1",
      title: "Cardiovascular and Respiratory Physiology",
      goal: "I CAN explain how the heart, blood vessels and lungs work together to supply oxygen and remove carbon dioxide.",
      standards: [
        "BTEC L3 National Health and Social Care — Unit 5: Health Conditions and Physiology",
      ],
      vocabulary: [
        { term: "Cardiac output", definition: "Volume of blood pumped by the heart per minute; CO = heart rate x stroke volume." },
        { term: "Stroke volume", definition: "Volume of blood pumped from one ventricle per beat." },
        { term: "Alveoli", definition: "Tiny air sacs in the lungs where gas exchange occurs." },
        { term: "Systole", definition: "Phase of the cardiac cycle when the heart muscle contracts." },
        { term: "Diastole", definition: "Phase of the cardiac cycle when the heart muscle relaxes and fills with blood." },
        { term: "Vital capacity", definition: "Maximum amount of air a person can exhale after a maximum inhalation." },
      ],
      concepts: [
        {
          id: "edxbtechsc-u5-l1-cardiovascular", title: "The cardiovascular system",
          skill: "Describe the structure and function of the heart, blood vessels and circulation at a systems level.",
          sections: [
            { heading: "Heart structure and the cardiac cycle", body: "The heart is a four-chambered muscular pump: right atrium and ventricle pump deoxygenated blood to the lungs; left atrium and ventricle pump oxygenated blood to the body. **Valves** prevent backflow. The **cardiac cycle** alternates between **systole** (contraction, ~0.4 s) and **diastole** (relaxation/filling, ~0.5 s), driven by the sinoatrial (SA) node pacemaker.\n\n**Cardiac output** $CO = HR \\times SV$ (heart rate x stroke volume). A typical resting adult value is about $5\\ \\text{dm}^3\\ \\text{min}^{-1}$; it rises during exercise." },
            { heading: "Blood vessels and circulation", body: "Three vessel types form a closed loop: **arteries** carry blood away from the heart under high pressure (thick muscular walls, no valves except at the heart); **veins** return blood to the heart (thin walls, valves to prevent backflow, rely on skeletal muscle pump); **capillaries** are single-cell-thick exchange vessels linking arteries and veins.\n\nThe **pulmonary circuit** (heart to lungs and back) oxygenates blood; the **systemic circuit** (heart to body and back) delivers oxygen and nutrients and removes waste." },
          ],
          keyFormulas: [
            { name: "Cardiac output", statement: "$CO = HR \\times SV$" },
            { name: "Cardiac cycle", statement: "systole $\\approx 0.4\\ \\text{s}$, diastole $\\approx 0.5\\ \\text{s}$; SA node sets rhythm" },
            { name: "Vessel roles", statement: "arteries = away, veins = return, capillaries = exchange" },
          ],
          workedExample: {
            problem: "A person's heart rate is 70 beats per minute and stroke volume is 70 cm³. Calculate cardiac output and explain what happens to it during exercise.",
            solution: "CO = HR x SV = 70 x 70 = 4,900 cm³/min = 4.9 dm³/min. During exercise, heart rate rises (sympathetic stimulation of the SA node) and stroke volume increases (stronger ventricular contraction), so CO rises to meet the muscles' oxygen demand.",
          },
          questions: [
            {
              id: "edxbtechsc-u5-cv-q1", difficulty: "foundation", totalMarks: 2,
              stem: "State the two circuits of the circulatory system and the role of each.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Circulatory circuits", statement: "Pulmonary = heart-lungs; systemic = heart-body." }],
                steps: [
                  { reasoning: "Pulmonary circuit identified.", marks: 1, markCode: "B" },
                  { reasoning: "Systemic circuit identified with correct roles.", marks: 1, markCode: "B" },
                ],
                finalAnswer: "Pulmonary circuit carries deoxygenated blood to the lungs for oxygenation; systemic circuit carries oxygenated blood to the body.",
              },
            },
            {
              id: "edxbtechsc-u5-cv-q2", difficulty: "foundation", totalMarks: 2,
              stem: "Name the phase of the cardiac cycle when the heart contracts, and state approximately how long one complete cycle takes at rest.",
              response: { type: "mcq", choices: [
                { id: "a", text: "Systole; about 0.9 s" },
                { id: "b", text: "Diastole; about 0.9 s" },
                { id: "c", text: "Systole; about 0.4 s" },
                { id: "d", text: "Diastole; about 0.4 s" },
              ], correctChoiceId: "a" },
              markscheme: {
                principles: [{ kind: "definition", name: "Cardiac cycle", statement: "systole = contraction; full cycle ~0.9 s." }],
                steps: [{ reasoning: "Contraction is systole; systole ~0.4 s + diastole ~0.5 s = ~0.9 s.", marks: 2, markCode: "B" }],
                finalAnswer: "(a) Systole; about 0.9 s",
              },
            },
            {
              id: "edxbtechsc-u5-cv-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain why arteries have thick muscular walls while capillaries are only one cell thick. Refer to the different functions of these vessels.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Structure-function", statement: "Vessel walls are adapted to the pressure and role of the vessel." }],
                steps: [
                  { reasoning: "Arteries carry blood at high pressure directly from the heart.", marks: 1, markCode: "M" },
                  { reasoning: "Thick muscular/elastic walls withstand pressure and help maintain it.", marks: 1, markCode: "M" },
                  { reasoning: "Capillaries are thin to allow rapid diffusion/exchange of substances.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Arteries need thick walls for high-pressure transport; capillaries are thin-walled for efficient exchange.",
              },
            },
            {
              id: "edxbtechsc-u5-cv-q4", difficulty: "core", totalMarks: 4,
              stem: "Describe what happens to cardiac output during exercise and explain the two factors that produce this change.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Cardiac output", statement: "$CO = HR \\times SV$" }],
                steps: [
                  { reasoning: "CO increases during exercise.", marks: 1, markCode: "M" },
                  { reasoning: "Heart rate rises — sympathetic stimulation of the SA node.", marks: 1, markCode: "M" },
                  { reasoning: "Stroke volume rises — stronger/faster ventricular contraction.", marks: 1, markCode: "M" },
                  { reasoning: "Both raise CO to meet increased oxygen demand of muscles.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "CO rises because heart rate and stroke volume both increase, meeting the muscles' oxygen demand.",
              },
            },
            {
              id: "edxbtechsc-u5-cv-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Compare arteries, veins and capillaries in a table covering: direction of blood flow, wall thickness, presence of valves, and blood pressure. Then state one structural feature of veins that helps return blood to the heart.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Vessel comparison", statement: "Arteries/veins/capillaries differ in pressure, wall and valves." }],
                steps: [
                  { reasoning: "Direction of flow compared for all three.", marks: 2, markCode: "M" },
                  { reasoning: "Wall thickness compared for all three.", marks: 1, markCode: "M" },
                  { reasoning: "Valves: veins have them, arteries do not.", marks: 1, markCode: "M" },
                  { reasoning: "Blood pressure: high in arteries, low in veins/capillaries.", marks: 1, markCode: "M" },
                  { reasoning: "Extra feature named: skeletal muscle pump / valves prevent backflow.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Accurate three-way comparison plus a named mechanism of venous return.",
              },
            },
            {
              id: "edxbtechsc-u5-cv-q6", difficulty: "challenge", totalMarks: 8,
              stem: "A patient has a resting heart rate of 80 bpm and stroke volume of 65 cm³.\n(a) Calculate cardiac output in dm³/min.\n(b) Explain the role of the SA node in controlling heart rate.\n(c) Describe how atherosclerosis affects arteries and why this raises blood pressure.\n(d) Explain two ways regular aerobic exercise improves cardiovascular health.",
              response: { type: "open" },
              markscheme: {
                principles: [
                  { kind: "formula", name: "Cardiac output", statement: "$CO = HR \\times SV$" },
                  { kind: "definition", name: "SA node", statement: "Sinoatrial node — pacemaker initiating each heartbeat." },
                ],
                steps: [
                  { reasoning: "(a) CO = 80 x 65 = 5,200 cm³/min = 5.2 dm³/min.", marks: 2, markCode: "M" },
                  { reasoning: "(b) SA node in right atrium generates electrical impulses setting heart rate.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Atherosclerosis = fatty plaque narrowing arteries; heart must pump harder → raised BP.", marks: 2, markCode: "M" },
                  { reasoning: "(d) Two valid benefits, e.g. lowers resting HR, improves vessel elasticity, reduces BP.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "CO = 5.2 dm³/min; SA node pacemaker; atherosclerosis raises BP; exercise benefits.",
              },
            },
          ],
        },
        {
          id: "edxbtechsc-u5-l1-respiratory", title: "The respiratory system",
          skill: "Explain ventilation, gas exchange at the alveoli and factors affecting breathing rate.",
          sections: [
            { heading: "Ventilation and gas exchange", body: "Air travels: trachea → bronchi → bronchioles → **alveoli**. The **diaphragm** and intercostal muscles drive **ventilation**: inhalation (diaphragm contracts/flattens, chest expands, pressure falls) and exhalation (muscles relax, elastic recoil).\n\nGas exchange happens by **diffusion** across the alveolar-capillary membrane — thin walls, huge surface area, moist lining. Oxygen diffuses into blood; carbon dioxide diffuses out. Oxygen binds to haemoglobin in red blood cells." },
            { heading: "Breathing rate and lung volumes", body: "Breathing rate is set by the medulla oblongata responding to blood $CO_2$ levels (and $O_2$ in severe hypoxia). Normal resting rate $\\approx 12-20$ breaths/min, rising with exercise.\n\nKey volumes: **tidal volume** (~500 cm³ per breath), **vital capacity** (max exhaled after max inhaled), **residual volume** (air always left in lungs). Smoking damages cilia and alveolar walls (emphysema), reducing gas exchange." },
          ],
          keyFormulas: [
            { name: "Ventilation", statement: "inhalation: diaphragm contracts, chest volume rises, air flows in" },
            { name: "Diffusion", statement: "gases move down their concentration gradient across thin membranes" },
            { name: "Breathing control", statement: "medulla oblongata responds mainly to blood $CO_2$" },
          ],
          workedExample: {
            problem: "Explain why carbon dioxide, not oxygen, is the main driver of breathing rate.",
            solution: "Rising blood CO₂ (from cellular respiration) lowers blood pH; chemoreceptors in the medulla oblongata detect this and increase ventilation to blow off CO₂. Oxygen levels are normally adequate and only strongly stimulate breathing when severely low.",
          },
          questions: [
            {
              id: "edxbtechsc-u5-resp-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Name the structure where gas exchange occurs and state which two gases are exchanged.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Alveoli", statement: "Air sacs where O₂ enters blood and CO₂ leaves." }],
                steps: [
                  { reasoning: "Alveoli named.", marks: 1, markCode: "B" },
                  { reasoning: "Oxygen and carbon dioxide named.", marks: 1, markCode: "B" },
                ],
                finalAnswer: "Alveoli; oxygen diffuses in, carbon dioxide diffuses out.",
              },
            },
            {
              id: "edxbtechsc-u5-resp-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Describe the role of the diaphragm in inhalation.",
              response: { type: "mcq", choices: [
                { id: "a", text: "It relaxes and rises, increasing chest volume" },
                { id: "b", text: "It contracts and flattens, increasing chest volume so air flows in" },
                { id: "c", text: "It contracts and rises, decreasing chest volume" },
                { id: "d", text: "It relaxes and flattens, decreasing chest volume" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "property", name: "Diaphragm", statement: "Contracts/flattens on inhalation → volume up, pressure down, air in." }],
                steps: [{ reasoning: "Inhalation: diaphragm contracts and flattens; thoracic volume rises, pressure falls, air enters.", marks: 3, markCode: "B" }],
                finalAnswer: "(b) It contracts and flattens, increasing chest volume so air flows in",
              },
            },
            {
              id: "edxbtechsc-u5-resp-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain two features of the alveoli that make them efficient for gas exchange.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "property", name: "Alveolar adaptations", statement: "Thin walls, large surface area, moist lining, rich capillary supply." }],
                steps: [
                  { reasoning: "First valid feature, e.g. thin walls (one cell thick) short diffusion distance.", marks: 1, markCode: "M" },
                  { reasoning: "Second valid feature, e.g. huge surface area / moist lining / dense capillary network.", marks: 1, markCode: "M" },
                  { reasoning: "Linked to diffusion efficiency.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Any two of: thin walls, large surface area, moist lining, capillary supply — all speeding diffusion.",
              },
            },
            {
              id: "edxbtechsc-u5-resp-q4", difficulty: "core", totalMarks: 4,
              stem: "Explain why breathing rate increases during exercise, referring to the role of carbon dioxide and the medulla oblongata.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "law", name: "Breathing control", statement: "Medulla detects blood CO₂ and raises ventilation." }],
                steps: [
                  { reasoning: "Exercise raises cellular respiration → more CO₂ produced.", marks: 1, markCode: "M" },
                  { reasoning: "Blood CO₂ rises, lowering pH; chemoreceptors detect this.", marks: 1, markCode: "M" },
                  { reasoning: "Medulla oblongata sends signals to increase ventilation.", marks: 1, markCode: "M" },
                  { reasoning: "Purpose: blow off excess CO₂ and increase O₂ supply to muscles.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Rising CO₂ detected by medulla → faster, deeper breathing to remove CO₂ and supply O₂.",
              },
            },
            {
              id: "edxbtechsc-u5-resp-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A long-term smoker develops emphysema.\n(a) State what emphysema is.\n(b) Explain how it affects gas exchange.\n(c) Describe two effects on the person's breathing and daily life.\n(d) Explain why stopping smoking can slow further damage.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Emphysema", statement: "Destruction of alveolar walls reducing gas-exchange surface." }],
                steps: [
                  { reasoning: "(a) Emphysema defined as damage/destruction of alveoli walls.", marks: 2, markCode: "M" },
                  { reasoning: "(b) Reduced surface area → less efficient diffusion → breathlessness.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Two effects, e.g. shortness of breath, reduced exercise tolerance, fatigue, chronic cough.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Removes ongoing toxin exposure so remaining alveoli are not further damaged.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Emphysema destroys alveoli, cutting gas-exchange area; quitting stops further damage.",
              },
            },
            {
              id: "edxbtechsc-u5-resp-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Compare inhalation and exhalation during quiet breathing, covering: diaphragm position, chest volume, pressure inside lungs, and direction of air movement. Then explain: (a) the role of elastic recoil in exhalation; (b) how the intercostal muscles assist; (c) what happens to tidal volume during exercise; (d) why residual volume cannot be exhaled.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Inhalation vs exhalation", statement: "Volume/pressure changes drive airflow." }],
                steps: [
                  { reasoning: "Comparison covers diaphragm, volume, pressure and air direction for both phases.", marks: 3, markCode: "M" },
                  { reasoning: "(a) Elastic recoil of lungs/chest wall pushes air out passively.", marks: 2, markCode: "M" },
                  { reasoning: "(b) External intercostals raise ribs on inhalation; internal lower them on exhalation.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Tidal volume increases during exercise to move more air.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Residual volume remains to keep alveoli inflated/prevent collapse.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Complete comparison plus explanations of recoil, intercostals, exercise tidal volume and residual volume.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtechsc-u5-cardioresp-notes", title: "Cardiovascular and respiratory physiology — notes",
      summary: "The heart pumps via double circulation; CO = HR x SV. Lungs oxygenate blood by diffusion at alveoli driven by ventilation.",
      sections: [
        { heading: "Key idea", body: "Heart rate and stroke volume together set cardiac output; breathing rate is controlled mainly by blood CO₂." },
        { heading: "Examiners' favourite", body: "Link structure to function: thick artery walls for pressure, thin alveoli for diffusion, valves in veins for one-way flow." },
      ],
    },
  },
  {
    file: "lesson-5-2.ts", exportName: "lesson52",
    lesson: {
      id: "edxbtechsc-u5-lesson-5-2", code: "5-2",
      title: "Metabolism, Nutrition and Hormonal Control",
      goal: "I CAN explain how the body converts food into energy and how hormones regulate metabolism.",
      standards: [
        "BTEC L3 National Health and Social Care — Unit 5: Health Conditions and Physiology",
      ],
      vocabulary: [
        { term: "Basal metabolic rate", definition: "Minimum energy the body needs at rest to maintain vital functions." },
        { term: "Glycolysis", definition: "Breakdown of glucose into pyruvate, releasing energy, in the cytoplasm." },
        { term: "Aerobic respiration", definition: "Complete breakdown of glucose using oxygen, releasing large amounts of ATP." },
        { term: "Anaerobic respiration", definition: "Partial breakdown of glucose without oxygen, producing lactic acid." },
        { term: "Insulin", definition: "Hormone from the pancreas that lowers blood glucose by promoting uptake into cells." },
        { term: "Glucagon", definition: "Hormone from the pancreas that raises blood glucose by stimulating glycogen breakdown." },
      ],
      concepts: [
        {
          id: "edxbtechsc-u5-l2-metabolism", title: "Metabolism and energy balance",
          skill: "Explain cellular respiration, BMR and the factors affecting energy balance.",
          sections: [
            { heading: "Cellular respiration", body: "Cells release energy from glucose in **cellular respiration**. **Aerobic respiration**: $C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + \\text{energy (ATP)}$ — occurs in mitochondria, yields ~36-38 ATP per glucose. **Anaerobic respiration**: $C_6H_{12}O_6 \\rightarrow 2C_3H_6O_3 + \\text{small energy}$ — occurs in cytoplasm when oxygen is short (e.g. sprinting), producing lactic acid that must be removed.\n\nFood is digested to glucose, amino acids and fatty acids; glucose is used directly or stored as glycogen (liver/muscle) or fat." },
            { heading: "Energy balance and BMR", body: "**Energy balance** = energy in (food/drink) minus energy out (BMR + physical activity + thermic effect of food).\n\n**BMR** is the largest resting component (~60-75% of daily use) and depends on age, sex, body size, muscle mass and thyroid activity. Positive balance → weight gain; negative balance → weight loss. Sustained positive energy balance is the main driver of obesity; obesity raises risk of type 2 diabetes, cardiovascular disease and joint problems." },
          ],
          keyFormulas: [
            { name: "Aerobic respiration", statement: "$C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + \\text{energy}$" },
            { name: "Anaerobic respiration", statement: "$C_6H_{12}O_6 \\rightarrow 2C_3H_6O_3 + \\text{small energy}$" },
            { name: "Energy balance", statement: "energy in − energy out = change in body energy stores" },
          ],
          workedExample: {
            problem: "Explain why a sprinter feels muscle pain and breathes heavily shortly after a 100 m race.",
            solution: "During the sprint, muscles demand energy faster than oxygen can be supplied, so anaerobic respiration dominates, producing lactic acid. Lactic acid build-up contributes to the burning pain; heavy breathing ('oxygen debt') supplies the oxygen needed to break it down and restore aerobic conditions.",
          },
          questions: [
            {
              id: "edxbtechsc-u5-met-q1", difficulty: "foundation", totalMarks: 2,
              stem: "State where aerobic respiration occurs in the cell and name the gas required for it.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Aerobic respiration", statement: "Mitochondria; requires oxygen." }],
                steps: [
                  { reasoning: "Mitochondria named.", marks: 1, markCode: "B" },
                  { reasoning: "Oxygen named.", marks: 1, markCode: "B" },
                ],
                finalAnswer: "Mitochondria; oxygen.",
              },
            },
            {
              id: "edxbtechsc-u5-met-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Write the word equation for aerobic respiration and state how much more energy it releases compared with anaerobic respiration.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "formula", name: "Aerobic respiration", statement: "$C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + \\text{energy}$" }],
                steps: [
                  { reasoning: "Equation stated correctly (glucose + oxygen → CO₂ + water + energy).", marks: 2, markCode: "M" },
                  { reasoning: "Much more energy than anaerobic (~36-38 ATP vs 2 ATP).", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Glucose + oxygen → carbon dioxide + water + energy; far more energy than anaerobic.",
              },
            },
            {
              id: "edxbtechsc-u5-met-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain what is meant by a positive energy balance and give two health consequences of sustained positive balance.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Energy balance", statement: "Energy in minus energy out determines body stores." }],
                steps: [
                  { reasoning: "Positive balance = energy in exceeds energy out.", marks: 1, markCode: "M" },
                  { reasoning: "Consequence 1, e.g. weight gain/obesity.", marks: 1, markCode: "M" },
                  { reasoning: "Consequence 2, e.g. type 2 diabetes risk or cardiovascular disease risk.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Intake exceeds expenditure → fat stores rise → obesity and related disease risk.",
              },
            },
            {
              id: "edxbtechsc-u5-met-q4", difficulty: "core", totalMarks: 4,
              stem: "A person eats a large meal and then goes for a 45-minute brisk walk. Explain, using the idea of energy balance and BMR, why the walk reduces the likelihood of weight gain compared with resting after the meal.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Energy balance", statement: "Activity increases energy out, restoring balance." }],
                steps: [
                  { reasoning: "Meal increases energy in.", marks: 1, markCode: "M" },
                  { reasoning: "BMR unchanged at rest; surplus would be stored as fat.", marks: 1, markCode: "M" },
                  { reasoning: "Exercise raises energy out via increased respiration/muscle work.", marks: 1, markCode: "M" },
                  { reasoning: "Out closer to in → reduced/zero surplus → less fat storage.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "The walk increases energy expenditure, offsetting the meal's energy input and reducing fat storage.",
              },
            },
            {
              id: "edxbtechsc-u5-met-q5", difficulty: "challenge", totalMarks: 6,
              stem: "Compare aerobic and anaerobic respiration in terms of: location in the cell, oxygen requirement, products, and energy yield. Then explain why athletes breathe heavily after sprinting.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "comparison", name: "Aerobic vs anaerobic", statement: "Same glucose, different oxygen use and yields." }],
                steps: [
                  { reasoning: "Location: aerobic = mitochondria; anaerobic = cytoplasm.", marks: 1, markCode: "M" },
                  { reasoning: "Oxygen: aerobic needs O₂; anaerobic does not.", marks: 1, markCode: "M" },
                  { reasoning: "Products: aerobic → CO₂ + water; anaerobic → lactic acid.", marks: 2, markCode: "M" },
                  { reasoning: "Energy yield: aerobic ~36-38 ATP vs anaerobic 2 ATP.", marks: 1, markCode: "M" },
                  { reasoning: "Heavy breathing repays oxygen debt / removes lactic acid after sprint.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Full comparison table plus oxygen-debt explanation for post-sprint breathing.",
              },
            },
            {
              id: "edxbtechsc-u5-met-q6", difficulty: "challenge", totalMarks: 9,
              stem: "Explain the following with reference to metabolism:\n(a) why protein cannot be stored as protein in the body for later energy use;\n(b) how glucose is stored after a meal;\n(c) what happens to excess glucose and fatty acids;\n(d) two factors that raise BMR;\n(e) how BMR changes with age;\n(f) why two people of the same weight can have different daily energy needs.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Metabolic storage", statement: "Glucose→glycogen→fat; amino acids deaminated." }],
                steps: [
                  { reasoning: "(a) Amino acids are deaminated; nitrogen excreted as urea; carbon skeleton can be respired/stored as fat.", marks: 2, markCode: "M" },
                  { reasoning: "(b) Excess glucose converted to glycogen in liver and muscles.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Beyond glycogen capacity, glucose → fatty acids → stored as adipose fat.", marks: 2, markCode: "M" },
                  { reasoning: "(d) Two BMR factors, e.g. muscle mass, age, sex, thyroid activity.", marks: 1, markCode: "M" },
                  { reasoning: "(e) BMR falls with age (less muscle, lower thyroid activity).", marks: 1, markCode: "M" },
                  { reasoning: "(f) Differences in muscle mass, activity level, sex and BMR.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "All six parts answered with correct metabolic detail.",
              },
            },
          ],
        },
        {
          id: "edxbtechsc-u5-l2-hormones", title: "Hormonal control of metabolism",
          skill: "Explain how insulin, glucagon and adrenaline regulate blood glucose and energy use.",
          sections: [
            { heading: "Blood glucose regulation", body: "Blood glucose is maintained around $4-7\\ \\text{mmol/dm}^3$ (fasting ~4-6). The **pancreas** (islets of Langerhans) secretes:\n\n- **Insulin** — released when glucose is HIGH (after meals). Promotes glucose uptake into cells (especially muscle/liver), converts glucose to glycogen, lowers blood glucose.\n- **Glucagon** — released when glucose is LOW (between meals/fasting). Stimulates glycogen breakdown (glycogenolysis) and glucose release from the liver, raising blood glucose.\n\nThis is **negative feedback**: the hormone that corrects the change is released only while the change persists." },
            { heading: "Adrenaline and stress response", body: "The **adrenal glands** (above kidneys) secrete **adrenaline** in the 'fight or flight' response. Adrenaline: raises heart rate and blood pressure, increases breathing rate, and stimulates glycogen→glucose breakdown in liver/muscle — increasing blood glucose and available energy for immediate action.\n\nHormones are chemical messengers travelling in the blood to **target cells** with specific receptors — slower but longer-lasting than nerve impulses." },
          ],
          keyFormulas: [
            { name: "Negative feedback", statement: "high glucose → insulin → glucose falls; low glucose → glucagon → glucose rises" },
            { name: "Adrenaline", statement: "raises HR, BP, breathing rate and blood glucose for fight-or-flight" },
            { name: "Normal fasting glucose", statement: "$\\approx 4-6\\ \\text{mmol/dm}^3$" },
          ],
          workedExample: {
            problem: "Explain, using negative feedback, what happens to insulin and blood glucose in the 2 hours after a carbohydrate-rich meal.",
            solution: "The meal raises blood glucose; the pancreas detects this and secretes insulin. Insulin promotes glucose uptake into cells and conversion to glycogen, so blood glucose falls back towards normal. Once glucose is normal, insulin secretion drops — the correction is self-limiting.",
          },
          questions: [
            {
              id: "edxbtechsc-u5-horm-q1", difficulty: "foundation", totalMarks: 2,
              stem: "Name the organ that produces insulin and state whether insulin raises or lowers blood glucose.",
              response: { type: "mcq", choices: [
                { id: "a", text: "Liver; lowers glucose" },
                { id: "b", text: "Pancreas; lowers glucose" },
                { id: "c", text: "Pancreas; raises glucose" },
                { id: "d", text: "Adrenal gland; raises glucose" },
              ], correctChoiceId: "b" },
              markscheme: {
                principles: [{ kind: "definition", name: "Insulin", statement: "Pancreatic hormone that lowers blood glucose." }],
                steps: [{ reasoning: "Insulin from pancreas; promotes glucose uptake → lowers blood glucose.", marks: 2, markCode: "B" }],
                finalAnswer: "(b) Pancreas; lowers glucose",
              },
            },
            {
              id: "edxbtechsc-u5-horm-q2", difficulty: "foundation", totalMarks: 3,
              stem: "State the main trigger for glucagon release and describe its effect on blood glucose.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Glucagon", statement: "Released when blood glucose is low; raises it." }],
                steps: [
                  { reasoning: "Released when blood glucose falls (low glucose).", marks: 1, markCode: "B" },
                  { reasoning: "Stimulates glycogen breakdown in liver.", marks: 1, markCode: "M" },
                  { reasoning: "Releases glucose into blood → blood glucose rises back to normal.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Low blood glucose triggers glucagon → glycogen breakdown → glucose released → levels rise.",
              },
            },
            {
              id: "edxbtechsc-u5-horm-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain what negative feedback means in the control of blood glucose, using insulin as an example.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Negative feedback", statement: "Response counteracts the stimulus, restoring the set point." }],
                steps: [
                  { reasoning: "Negative feedback = the response reverses the original change.", marks: 1, markCode: "M" },
                  { reasoning: "High glucose stimulates insulin secretion.", marks: 1, markCode: "M" },
                  { reasoning: "Insulin lowers glucose; when normal, insulin stops — system self-corrects.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "The hormone response opposes the stimulus, keeping glucose near a set point.",
              },
            },
            {
              id: "edxbtechsc-u5-horm-q4", difficulty: "core", totalMarks: 4,
              stem: "Describe the effects of adrenaline on the body during a 'fight or flight' response and explain the survival advantage.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Adrenaline", statement: "Prepares body for rapid action." }],
                steps: [
                  { reasoning: "Raises heart rate and blood pressure.", marks: 1, markCode: "M" },
                  { reasoning: "Increases breathing rate and blood glucose via glycogen breakdown.", marks: 1, markCode: "M" },
                  { reasoning: "Diverts blood to muscles, dilates airways.", marks: 1, markCode: "M" },
                  { reasoning: "Advantage: rapid energy and oxygen delivery for escape/fight.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Adrenaline boosts HR/BP/breathing/glucose, preparing muscles for immediate action.",
              },
            },
            {
              id: "edxbtechsc-u5-horm-q5", difficulty: "challenge", totalMarks: 6,
              stem: "In type 1 diabetes the pancreas produces little or no insulin.\n(a) Explain why blood glucose rises after meals in this condition.\n(b) Describe how insulin injections treat it.\n(c) Explain what hypoglycaemia is and one way it can be treated.\n(d) Explain why diabetics must balance carbohydrate intake with insulin and activity.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Type 1 diabetes", statement: "Insulin deficiency → glucose cannot enter cells." }],
                steps: [
                  { reasoning: "(a) Without insulin, glucose stays in blood; cells cannot take it up.", marks: 2, markCode: "M" },
                  { reasoning: "(b) Injected insulin restores uptake/storage of glucose.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Hypoglycaemia = blood glucose below normal; treat with fast-acting carbohydrate.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Matching intake/activity to insulin dose avoids hyper- and hypoglycaemia.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Insulin deficiency → high glucose; injections replace it; balance prevents hypo/hyperglycaemia.",
              },
            },
            {
              id: "edxbtechsc-u5-horm-q6", difficulty: "challenge", totalMarks: 9,
              stem: "Explain, with reference to hormones:\n(a) how the body keeps blood glucose constant overnight while fasting;\n(b) why a meal rich in carbohydrate raises blood glucose;\n(c) the role of glucagon in restoring balance;\n(d) how insulin and glucagon interact as an antagonistic pair;\n(e) one hormonal difference between the fed and fasted state;\n(f) why hormones act more slowly than nerve impulses but longer-lasting.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Hormonal homeostasis", statement: "Insulin/glucagon form an antagonistic pair under negative feedback." }],
                steps: [
                  { reasoning: "(a) Fasting → low glucose → glucagon → glycogen breakdown → glucose maintained.", marks: 2, markCode: "M" },
                  { reasoning: "(b) Carbohydrate digested to glucose → absorbed into blood → glucose rises.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Glucagon raises glucose by releasing stored glycogen as glucose.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Antagonistic: insulin lowers, glucagon raises — together maintain set point.", marks: 2, markCode: "A" },
                  { reasoning: "(e) Fed = high insulin/low glucagon; fasted = low insulin/high glucagon.", marks: 1, markCode: "M" },
                  { reasoning: "(f) Blood-borne to distant targets = slower onset but prolonged effect.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Complete hormonal homeostasis explanation across fed and fasted states.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtechsc-u5-metabolism-notes", title: "Metabolism and hormonal control — notes",
      summary: "Cells respire glucose aerobically (lots of ATP) or anaerobically (lactic acid). Insulin lowers and glucagon raises blood glucose under negative feedback; adrenaline prepares for action.",
      sections: [
        { heading: "Key idea", body: "Energy balance = intake − expenditure; BMR is the largest resting component." },
        { heading: "Hormones", body: "Insulin and glucagon are an antagonistic pair; adrenaline mobilises glucose for fight-or-flight." },
      ],
    },
  },
  {
    file: "lesson-5-3.ts", exportName: "lesson53",
    lesson: {
      id: "edxbtechsc-u5-lesson-5-3", code: "5-3",
      title: "Common Chronic Conditions",
      goal: "I CAN describe the causes, risk factors and care needs of diabetes, hypertension and cardiovascular disease.",
      standards: [
        "BTEC L3 National Health and Social Care — Unit 5: Health Conditions and Physiology",
      ],
      vocabulary: [
        { term: "Type 2 diabetes", definition: "Condition where the body becomes resistant to insulin or produces insufficient insulin; strongly linked to lifestyle." },
        { term: "Hypertension", definition: "Persistently raised blood pressure, typically above 140/90 mmHg." },
        { term: "Atherosclerosis", definition: "Build-up of fatty plaque (atheroma) inside artery walls, narrowing the lumen." },
        { term: "LDL cholesterol", definition: "'Bad' cholesterol that contributes to atheroma formation." },
        { term: "HbA1c", definition: "Blood test measuring average blood glucose over the previous ~3 months." },
        { term: "Comorbidity", definition: "Presence of two or more chronic conditions in the same person." },
      ],
      concepts: [
        {
          id: "edxbtechsc-u5-l3-diabetes", title: "Diabetes mellitus",
          skill: "Explain the types, risk factors, complications and care needs of diabetes.",
          sections: [
            { heading: "Types and risk factors", body: "**Type 1 diabetes**: autoimmune destruction of insulin-producing beta cells in the pancreas — insulin-dependent, usually diagnosed young, not lifestyle-caused.\n\n**Type 2 diabetes**: insulin resistance plus relative insulin deficiency — the pancreas still produces insulin but cells respond poorly. Strongly linked to **obesity, physical inactivity, poor diet, age, family history and ethnicity** (higher risk in South Asian and Black Caribbean/African groups). Gestational diabetes occurs in pregnancy.\n\n**Diagnosis**: fasting glucose, oral glucose tolerance test, and **HbA1c** (average glucose over ~3 months; diagnostic threshold $\\ge 48\\ \\text{mmol/mol}$)." },
            { heading: "Complications and care", body: "Uncontrolled diabetes causes **microvascular** damage (eyes → retinopathy, kidneys → nephropathy, nerves → neuropathy) and **macrovascular** disease (heart attack, stroke, peripheral artery disease).\n\n**Care needs**: regular HbA1c monitoring, blood glucose checks, medication or insulin, dietitian advice on carbohydrate intake, foot care (neuropathy hides injuries), eye and kidney screening, exercise, and education on recognising **hypoglycaemia** (shaking, sweating, confusion → give fast-acting carbohydrate) and **hyperglycaemia** (thirst, frequent urination, tiredness)." },
          ],
          keyFormulas: [
            { name: "HbA1c", statement: "$\\ge 48\\ \\text{mmol/mol}$ indicates diabetes; target usually $< 48$" },
            { name: "Complications", statement: "microvascular = eyes/kidneys/nerves; macrovascular = heart/stroke" },
            { name: "Hypoglycaemia", statement: "low blood glucose — treat with fast-acting carbohydrate" },
          ],
          workedExample: {
            problem: "Explain why a person with long-standing diabetes might develop a foot ulcer that fails to heal, and what care is needed.",
            solution: "Chronic high glucose damages nerves (neuropathy) and blood vessels in the feet, so injuries go unnoticed and heal slowly. Care needs include daily foot inspection, well-fitting footwear, podiatry review, blood glucose control and prompt treatment of any break in the skin to prevent infection and amputation.",
          },
          questions: [
            {
              id: "edxbtechsc-u5-diab-q1", difficulty: "foundation", totalMarks: 2,
              stem: "State two major differences between type 1 and type 2 diabetes.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Diabetes types", statement: "Type 1 = autoimmune insulin-dependent; Type 2 = insulin resistance, lifestyle-linked." }],
                steps: [
                  { reasoning: "Cause: autoimmune vs insulin resistance/deficiency.", marks: 1, markCode: "B" },
                  { reasoning: "Treatment link: lifelong insulin vs lifestyle + oral medication (usually).", marks: 1, markCode: "B" },
                ],
                finalAnswer: "Type 1 = autoimmune, insulin-dependent; type 2 = insulin resistance, lifestyle-related.",
              },
            },
            {
              id: "edxbtechsc-u5-diab-q2", difficulty: "foundation", totalMarks: 3,
              stem: "List three common symptoms of undiagnosed diabetes and name the blood test used to monitor long-term glucose control.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Diabetes symptoms", statement: "Thirst, polyuria, fatigue, blurred vision, slow healing." }],
                steps: [
                  { reasoning: "Three symptoms, e.g. thirst, frequent urination, tiredness.", marks: 2, markCode: "M" },
                  { reasoning: "HbA1c named.", marks: 1, markCode: "B" },
                ],
                finalAnswer: "Any three symptoms plus HbA1c.",
              },
            },
            {
              id: "edxbtechsc-u5-diab-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain how obesity increases the risk of developing type 2 diabetes.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Obesity and insulin resistance", statement: "Excess adipose tissue promotes insulin resistance." }],
                steps: [
                  { reasoning: "Excess fat, especially visceral, is metabolically active.", marks: 1, markCode: "M" },
                  { reasoning: "Fat cells release substances causing cells to respond poorly to insulin.", marks: 1, markCode: "M" },
                  { reasoning: "Insulin resistance → pancreas struggles → type 2 diabetes develops.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Obesity → insulin resistance → relative insulin deficiency → type 2 diabetes.",
              },
            },
            {
              id: "edxbtechsc-u5-diab-q4", difficulty: "core", totalMarks: 4,
              stem: "Distinguish between microvascular and macrovascular complications of diabetes, giving one example of each and how each affects the person.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Diabetes complications", statement: "Micro = small vessels (eyes/kidneys/nerves); macro = large vessels (heart/brain)." }],
                steps: [
                  { reasoning: "Microvascular defined — small blood vessels.", marks: 1, markCode: "M" },
                  { reasoning: "Microvascular example with effect, e.g. retinopathy → sight loss.", marks: 1, markCode: "M" },
                  { reasoning: "Macrovascular defined — large vessels.", marks: 1, markCode: "M" },
                  { reasoning: "Macrovascular example with effect, e.g. atherosclerosis → heart attack/stroke.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Microvascular (e.g. neuropathy/retinopathy) vs macrovascular (e.g. CHD/stroke).",
              },
            },
            {
              id: "edxbtechsc-u5-diab-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A care worker supports a client with type 2 diabetes.\n(a) Identify four elements a good diabetes care plan should include.\n(b) Explain why foot care is especially important.\n(c) Describe how to recognise and respond to hypoglycaemia.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Diabetes care planning", statement: "Holistic plan: monitoring, diet, medication, education, screening." }],
                steps: [
                  { reasoning: "(a) Four elements, e.g. glucose monitoring, diet, medication, foot/eye checks.", marks: 2, markCode: "M" },
                  { reasoning: "(b) Neuropathy hides injuries; poor circulation slows healing → ulcer/amputation risk.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Recognise: shaking, sweating, confusion; respond: fast-acting carbohydrate, recheck.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Comprehensive care plan elements plus hypoglycaemia response.",
              },
            },
            {
              id: "edxbtechsc-u5-diab-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Write an extended answer covering:\n(a) the difference between type 1 and type 2 diabetes;\n(b) four risk factors for type 2 diabetes;\n(c) the role of insulin in the body;\n(d) three long-term complications;\n(e) how HbA1c is used in management;\n(f) two lifestyle measures that reduce risk or help control the condition;\n(g) why people with diabetes need regular foot and eye checks.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Diabetes overview", statement: "Types, risks, insulin role, complications, monitoring." }],
                steps: [
                  { reasoning: "(a) Type 1 autoimmune/insulin-dependent vs type 2 resistance/lifestyle.", marks: 2, markCode: "M" },
                  { reasoning: "(b) Four risk factors, e.g. obesity, inactivity, family history, ethnicity/age.", marks: 1, markCode: "M" },
                  { reasoning: "(c) Insulin lowers blood glucose by promoting cellular uptake.", marks: 1, markCode: "M" },
                  { reasoning: "(d) Three complications, e.g. retinopathy, neuropathy, CHD.", marks: 1, markCode: "M" },
                  { reasoning: "(e) HbA1c reflects ~3-month average glucose for monitoring control.", marks: 1, markCode: "M" },
                  { reasoning: "(f) Two lifestyle measures, e.g. diet, exercise, weight loss, not smoking.", marks: 1, markCode: "M" },
                  { reasoning: "(g) Neuropathy/vascular damage hide and worsen foot/eye problems → screening detects early.", marks: 3, markCode: "A" },
                ],
                finalAnswer: "Complete diabetes overview covering all seven parts.",
              },
            },
          ],
        },
        {
          id: "edxbtechsc-u5-l3-cardiovascular-risk", title: "Hypertension and cardiovascular disease",
          skill: "Explain risk factors, mechanisms and management of hypertension and cardiovascular disease.",
          sections: [
            { heading: "Hypertension and atherosclerosis", body: "**Hypertension** = persistently raised blood pressure (usually $\\ge 140/90\\ \\text{mmHg}$). Causes include high salt intake, obesity, smoking, excessive alcohol, stress, genetics and kidney disease. Chronic hypertension damages artery walls.\n\n**Atherosclerosis** is the build-up of **atheroma** (fatty plaque) inside artery walls — cholesterol, especially **LDL** ('bad'), infiltrates the wall, causing inflammation, narrowing the lumen and reducing blood flow. A clot forming on a ruptured plaque can completely block an artery → heart attack or stroke." },
            { heading: "Cardiovascular disease and management", body: "**Cardiovascular disease (CVD)** includes coronary heart disease (angina, myocardial infarction), stroke and peripheral vascular disease. Risk factors: hypertension, smoking, high LDL cholesterol, diabetes, obesity, inactivity, poor diet, family history, age and male sex.\n\n**Management**: lifestyle change (stop smoking, reduce salt/saturated fat, exercise, weight loss), medication (antihypertensives, statins, antiplatelets), and screening (blood pressure checks, cholesterol tests). Early detection greatly reduces risk of heart attack and stroke." },
          ],
          keyFormulas: [
            { name: "Hypertension", statement: "BP persistently $\\ge 140/90\\ \\text{mmHg}$" },
            { name: "Atheroma", statement: "LDL cholesterol + inflammation → plaque → narrowed arteries" },
            { name: "CVD risk factors", statement: "smoking, hypertension, high LDL, diabetes, obesity, inactivity" },
          ],
          workedExample: {
            problem: "Explain how smoking contributes to both hypertension and atherosclerosis.",
            solution: "Nicotine raises heart rate and constricts blood vessels, increasing blood pressure. Smoking also damages the endothelium (inner artery lining), promotes inflammation and lowers HDL ('good') cholesterol while raising LDL, accelerating atheroma formation — together raising CVD risk.",
          },
          questions: [
            {
              id: "edxbtechsc-u5-cvdis-q1", difficulty: "foundation", totalMarks: 2,
              stem: "State what hypertension means and give the typical blood-pressure threshold used to define it.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Hypertension", statement: "Persistently raised blood pressure, $\\ge 140/90$ mmHg." }],
                steps: [
                  { reasoning: "Hypertension = persistently high blood pressure.", marks: 1, markCode: "B" },
                  { reasoning: "Threshold $\\ge 140/90$ mmHg stated.", marks: 1, markCode: "B" },
                ],
                finalAnswer: "Persistently raised BP, typically $\\ge 140/90$ mmHg.",
              },
            },
            {
              id: "edxbtechsc-u5-cvdis-q2", difficulty: "foundation", totalMarks: 3,
              stem: "Name three modifiable risk factors for cardiovascular disease.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "CVD risk factors", statement: "Smoking, hypertension, cholesterol, diabetes, obesity, inactivity." }],
                steps: [{ reasoning: "Any three modifiable factors, e.g. smoking, high salt/fat diet, inactivity.", marks: 3, markCode: "B" }],
                finalAnswer: "Any three: smoking, hypertension, poor diet, inactivity, obesity, diabetes.",
              },
            },
            {
              id: "edxbtechsc-u5-cvdis-q3", difficulty: "core", totalMarks: 3,
              stem: "Explain how atherosclerosis develops inside an artery and how it reduces blood flow.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "Atherosclerosis", statement: "LDL-driven plaque build-up narrowing arteries." }],
                steps: [
                  { reasoning: "LDL cholesterol and other substances deposit in artery wall.", marks: 1, markCode: "M" },
                  { reasoning: "Inflammation → fibrous plaque (atheroma) forms and grows.", marks: 1, markCode: "M" },
                  { reasoning: "Plaque narrows lumen → less blood flow; can rupture → clot → blockage.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Cholesterol plaque builds up, inflames and narrows the artery; rupture can cause a clot.",
              },
            },
            {
              id: "edxbtechsc-u5-cvdis-q4", difficulty: "core", totalMarks: 4,
              stem: "Explain why hypertension is called a 'silent killer' and describe two long-term effects on the body if it is not controlled.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "principle", name: "Hypertension", statement: "Often asymptomatic yet damages vessels/organs." }],
                steps: [
                  { reasoning: "Usually no symptoms → people unaware → 'silent'.", marks: 1, markCode: "M" },
                  { reasoning: "Damages artery walls/endothelium.", marks: 1, markCode: "M" },
                  { reasoning: "Two effects, e.g. stroke, heart attack, kidney damage, heart failure.", marks: 1, markCode: "M" },
                  { reasoning: "Regular BP checks enable early treatment.", marks: 1, markCode: "A" },
                ],
                finalAnswer: "Asymptomatic yet damages arteries and organs — stroke, heart attack, kidney failure.",
              },
            },
            {
              id: "edxbtechsc-u5-cvdis-q5", difficulty: "challenge", totalMarks: 6,
              stem: "A client has been diagnosed with hypertension.\n(a) Explain three lifestyle changes that can help lower blood pressure.\n(b) Explain why medication may also be prescribed.\n(c) Describe how a care worker could support the client to make these changes.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "method", name: "Hypertension management", statement: "Lifestyle first; medication when needed; support improves adherence." }],
                steps: [
                  { reasoning: "(a) Three lifestyle changes, e.g. reduce salt, lose weight, exercise, stop smoking, limit alcohol.", marks: 2, markCode: "M" },
                  { reasoning: "(b) Medication (e.g. antihypertensives) needed when lifestyle alone insufficient.", marks: 2, markCode: "M" },
                  { reasoning: "(c) Support: education, monitoring, encouragement, help accessing services.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Lifestyle + medication + care-worker support reduce BP and CVD risk.",
              },
            },
            {
              id: "edxbtechsc-u5-cvdis-q6", difficulty: "challenge", totalMarks: 10,
              stem: "Write an extended answer covering:\n(a) what cardiovascular disease includes;\n(b) five risk factors;\n(c) how atheroma forms;\n(d) the difference between angina and a myocardial infarction;\n(e) why diabetes increases CVD risk;\n(f) three ways to reduce CVD risk;\n(g) why early screening matters.",
              response: { type: "open" },
              markscheme: {
                principles: [{ kind: "definition", name: "CVD overview", statement: "CHD, stroke, peripheral disease; driven by atheroma and risk factors." }],
                steps: [
                  { reasoning: "(a) CVD includes CHD, stroke, peripheral vascular disease.", marks: 1, markCode: "M" },
                  { reasoning: "(b) Five risk factors listed.", marks: 1, markCode: "M" },
                  { reasoning: "(c) LDL cholesterol deposits → plaque → narrowing/rupture.", marks: 2, markCode: "M" },
                  { reasoning: "(d) Angina = reversible chest pain from reduced flow; MI = permanent blockage → heart muscle death.", marks: 2, markCode: "A" },
                  { reasoning: "(e) Diabetes damages vessels and worsens atheroma → higher CVD risk.", marks: 1, markCode: "M" },
                  { reasoning: "(f) Three reductions, e.g. stop smoking, healthy diet, exercise, control BP/diabetes.", marks: 1, markCode: "M" },
                  { reasoning: "(g) Early detection allows lifestyle/medication before irreversible damage.", marks: 2, markCode: "A" },
                ],
                finalAnswer: "Complete CVD overview covering all seven parts.",
              },
            },
          ],
        },
      ],
    },
    notes: {
      id: "edxbtechsc-u5-chronic-notes", title: "Common chronic conditions — notes",
      summary: "Type 2 diabetes is driven by insulin resistance and lifestyle; hypertension and atherosclerosis are the main pathways to CVD.",
      sections: [
        { heading: "Key idea", body: "Chronic conditions share lifestyle risk factors — obesity, inactivity, smoking, poor diet." },
        { heading: "Management", body: "Monitoring (HbA1c, BP), medication and lifestyle change together reduce complications." },
      ],
    },
  },
];
