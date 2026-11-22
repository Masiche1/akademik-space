import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "olbio-u5-lesson-5-3",
  code: "5-3",
  title: "Lung Volumes, Airway Defences and Smoking",
  goal: "I CAN describe lung volumes, airway defence mechanisms, and the effects of smoking on the gas exchange system.",
  standards: ["5090 5.2"],
  vocabulary: [
    { term: "Vital capacity", definition: "Maximum volume of air that can be breathed out after a maximum inhalation." },
    { term: "Tidal volume", definition: "Volume of air moved in and out in one normal breath." },
    { term: "Inspiratory reserve", definition: "Extra air that can be inhaled beyond tidal volume." },
    { term: "Goblet cell", definition: "Cell in airway lining producing mucus to trap particles." },
    { term: "Cilia", definition: "Hair-like structures beating mucus and trapped particles up the airway." },
    { term: "Tar", definition: "Sticky residue in tobacco smoke that damages cilia and alveoli." },
    { term: "Carbon monoxide", definition: "Colourless gas in smoke binding haemoglobin, reducing O₂ transport." },
  ],
  concepts: [
    {
      id: "olbio-u5-lung-volumes",
      title: "Lung volumes",
      skill: "Describe tidal volume, vital capacity and lung volumes measured by spirometry.",
      lesson: {
        sections: [
          {
            heading: "Lung volumes",
            body: "- **Tidal volume**: ~500 cm³ — normal breath.\n- **Inspiratory reserve**: extra air inhaled forcefully.\n- **Expiratory reserve**: extra air exhaled forcefully.\n- **Vital capacity**: tidal + inspiratory reserve + expiratory reserve (~4–5 dm³).\n- **Residual volume**: air remaining after maximum exhalation (cannot be expelled).",
          },
          {
            heading: "Spirometry",
            body: "Spirometer measures volumes of air inhaled/exhaled. Used to diagnose asthma/COPD and monitor lung function after exercise.",
          },
          {
            heading: "Why residual volume matters",
            body: "Alveoli always contain some air — prevents them collapsing and allows gas exchange to continue between breaths.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "If tidal volume is 500 cm³, inspiratory reserve 2500 cm³ and expiratory reserve 1500 cm³, what is vital capacity?",
          solution: "VC = 500 + 2500 + 1500 = 4500 cm³ (4.5 dm³).",
        },
      },
      questions: [
        {
          id: "olbio-u5-lung-volumes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is tidal volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Volume of air in one normal breath" },
              { id: "b", text: "Air remaining after exhaling" },
              { id: "c", text: "Maximum air capacity" },
              { id: "d", text: "Extra air inhaled forcefully" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Tidal volume", statement: "Air moved in/out in one normal breath (~500 cm³)." },
            ],
            steps: [
              { reasoning: "Recall definition.", working: "\\text{normal breath}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Volume of air in one normal breath",
            commonErrors: ["Choosing vital capacity — that's the maximum."],
          },
        },
        {
          id: "olbio-u5-lung-volumes-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define vital capacity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Vital capacity", statement: "Max air exhaled after max inhalation." },
            ],
            steps: [
              { reasoning: "Give definition.", working: "\\text{max exhale after max inhale}", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The maximum volume of air that can be breathed out after a maximum inhalation.",
            commonErrors: ["Saying 'total lung capacity' — VC excludes residual volume."],
          },
        },
        {
          id: "olbio-u5-lung-volumes-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "A patient's spirometer readings: tidal volume 400 cm³, inspiratory reserve 2000 cm³, expiratory reserve 1200 cm³. Calculate vital capacity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Vital capacity", statement: "VC = TV + IRV + ERV." },
            ],
            steps: [
              { reasoning: "Identify formula.", working: "VC = TV + IRV + ERV", marks: 1, markCode: "M" },
              { reasoning: "Substitute values.", working: "400 + 2000 + 1200", marks: 1, markCode: "M" },
              { reasoning: "Compute.", working: "3600 \\text{ cm}^3", marks: 1, markCode: "M" },
              { reasoning: "State answer.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Vital capacity = 3600 cm³ (3.6 dm³).",
            commonErrors: ["Forgetting to add all three volumes."],
          },
        },
        {
          id: "olbio-u5-lung-volumes-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe how lung volumes are measured and what they tell us.",
          parts: [
            { label: "a", prompt: "Name the instrument used.", marks: 1 },
            { label: "b", prompt: "List the main lung volumes.", marks: 4 },
            { label: "c", prompt: "Explain how vital capacity is calculated.", marks: 2 },
            { label: "d", prompt: "State one clinical use of spirometry.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Spirometry", statement: "Measures inhaled/exhaled volumes; diagnoses lung disease." },
            ],
            steps: [
              { part: "a", reasoning: "Spirometer.", working: "\\text{spirometer}", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Tidal volume.", working: "\\text{tidal}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Inspiratory/expiratory reserve.", working: "\\text{reserves}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Vital capacity + residual volume.", working: "\\text{VC + RV}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Complete list.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "VC = TV + IRV + ERV.", working: "\\text{sum}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Max breath in then out.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Diagnose asthma/COPD.", working: "\\text{asthma/COPD}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State use.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) spirometer (b) TV, IRV, ERV, VC, RV (c) VC=TV+IRV+ERV (d) diagnose lung disease",
            commonErrors: ["In (b) including residual volume in vital capacity — it's separate."],
          },
        },
        {
          id: "olbio-u5-lung-volumes-q5", difficulty: "foundation", totalMarks: 1,
          stem: "What is tidal volume?",
          response: { type: "mcq", choices: [ { id: "a", text: "Maximum air exhaled after maximum inhalation" }, { id: "b", text: "Air moved in and out in one normal breath" }, { id: "c", text: "Air remaining after maximum exhalation" }, { id: "d", text: "Extra air inhaled forcefully" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "definition", name: "Tidal volume", statement: "Tidal volume is about 500 cm3 moved during one normal breath." }], steps: [{ reasoning: "Recall definition.", working: "\\text{normal breath}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Air moved in and out in one normal breath", commonErrors: ["Vital capacity is the maximum volume, not tidal volume."] },
        },
        {
          id: "olbio-u5-lung-volumes-q6", difficulty: "foundation", totalMarks: 1,
          stem: "Which volume remains in the lungs after a maximum exhalation?",
          response: { type: "mcq", choices: [ { id: "a", text: "Residual volume" }, { id: "b", text: "Inspiratory reserve" }, { id: "c", text: "Tidal volume" }, { id: "d", text: "Vital capacity" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Residual volume", statement: "Residual volume is air remaining after maximum exhalation and prevents alveolar collapse." }], steps: [{ reasoning: "Recall remaining volume.", working: "\\text{residual volume}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Residual volume", commonErrors: ["Vital capacity excludes residual volume."] },
        },
        {
          id: "olbio-u5-lung-volumes-q7", difficulty: "core", totalMarks: 1,
          stem: "Which instrument measures lung volumes?",
          response: { type: "mcq", choices: [ { id: "a", text: "Thermometer" }, { id: "b", text: "Spirometer" }, { id: "c", text: "Barometer" }, { id: "d", text: "Glucometer" } ], correctChoiceId: "b" },
          markscheme: { principles: [{ kind: "technique", name: "Spirometry", statement: "Spirometry measures lung volumes such as tidal volume and vital capacity." }], steps: [{ reasoning: "Match instrument to function.", working: "\\text{spirometer}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Spirometer", commonErrors: ["A barometer measures atmospheric pressure."] },
        },
        {
          id: "olbio-u5-lung-volumes-q8", difficulty: "core", totalMarks: 1,
          stem: "Vital capacity is calculated from which volumes?",
          response: { type: "mcq", choices: [ { id: "a", text: "Tidal volume + inspiratory reserve + expiratory reserve" }, { id: "b", text: "All lung volumes including residual volume" }, { id: "c", text: "Inspiratory reserve + residual volume" }, { id: "d", text: "Tidal volume + residual volume" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Vital capacity", statement: "Vital capacity equals tidal volume plus inspiratory reserve plus expiratory reserve." }], steps: [{ reasoning: "Recall VC formula.", working: "VC=TV+IRV+ERV", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Tidal volume + inspiratory reserve + expiratory reserve", commonErrors: ["Residual volume is not part of vital capacity."] },
        },
        {
          id: "olbio-u5-lung-volumes-q9", difficulty: "challenge", totalMarks: 1,
          stem: "What is the main clinical use of spirometry?",
          response: { type: "mcq", choices: [ { id: "a", text: "Measuring blood pressure" }, { id: "b", text: "Testing blood glucose" }, { id: "c", text: "Diagnosing and monitoring lung diseases such as asthma or COPD" }, { id: "d", text: "Counting heartbeats" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "technique", name: "Spirometry uses", statement: "Spirometry helps diagnose asthma, COPD and other lung disorders." }], steps: [{ reasoning: "Link spirometry to lung function.", working: "\\text{lung function}", marks: 1, markCode: "M" }], finalAnswer: "**(a)** Diagnosing and monitoring lung diseases such as asthma or COPD", commonErrors: ["Spirometry does not measure blood pressure or glucose."] },
        },
        {
          id: "olbio-u5-lung-volumes-q10", difficulty: "foundation", totalMarks: 1,
          stem: "Tidal volume is 500 cm3, inspiratory reserve is 2500 cm3 and expiratory reserve is 1500 cm3. Calculate vital capacity.",
          response: { type: "numeric", parts: [{ label: "a", answer: 4500, unit: "cm^3" }] },
          markscheme: { principles: [{ kind: "property", name: "Vital capacity calculation", statement: "VC = TV + IRV + ERV." }], steps: [{ reasoning: "Add the three ventilated volumes.", working: "500 + 2500 + 1500 = 4500 \\text{ cm}^3", marks: 1, markCode: "M" }], finalAnswer: "4500 cm3" },
        },
        {
          id: "olbio-u5-lung-volumes-q11", difficulty: "core", totalMarks: 1,
          stem: "A patient's tidal volume is 400 cm3, inspiratory reserve 2000 cm3 and expiratory reserve 1200 cm3. Calculate vital capacity in dm3.",
          response: { type: "numeric", parts: [{ label: "a", answer: 3.6, unit: "dm^3" }] },
          markscheme: { principles: [{ kind: "property", name: "Vital capacity calculation", statement: "VC = TV + IRV + ERV, then convert cm3 to dm3." }], steps: [{ reasoning: "Sum volumes then convert to dm3.", working: "400 + 2000 + 1200 = 3600 \\text{ cm}^3 = 3.6 \\text{ dm}^3", marks: 1, markCode: "M" }], finalAnswer: "3.6 dm3" },
        },
        {
          id: "olbio-u5-lung-volumes-q12", difficulty: "challenge", totalMarks: 1,
          stem: "If vital capacity is 4000 cm3 and tidal volume is 500 cm3, what percentage of vital capacity is moved in one normal breath?",
          response: { type: "numeric", parts: [{ label: "a", answer: 12.5, unit: "%" }] },
          markscheme: { principles: [{ kind: "property", name: "Lung volume percentage", statement: "Percentage = part / whole x 100." }], steps: [{ reasoning: "Divide tidal volume by vital capacity and multiply by 100.", working: "500 \\div 4000 \\times 100 = 12.5\\%", marks: 1, markCode: "M" }], finalAnswer: "12.5%" },
        },
        {
          id: "olbio-u5-lung-volumes-q13", difficulty: "core", totalMarks: 1,
          stem: "A spirometer records expiratory reserve 1500 cm3, inspiratory reserve 2500 cm3 and tidal volume 500 cm3. If residual volume is 1200 cm3, how much air remains after maximum exhalation?",
          response: { type: "numeric", parts: [{ label: "a", answer: 1200, unit: "cm^3" }] },
          markscheme: { principles: [{ kind: "property", name: "Residual volume", statement: "Residual volume cannot be measured directly by simple spirometry and remains after maximum exhalation." }], steps: [{ reasoning: "Residual volume is the air remaining after maximum exhalation.", working: "1200 \\text{ cm}^3", marks: 1, markCode: "B" }], finalAnswer: "1200 cm3" },
        },
        {
          id: "olbio-u5-lung-volumes-q14", difficulty: "challenge", totalMarks: 1,
          stem: "Vital capacity is 4500 cm3 and residual volume is 1500 cm3. Calculate the total air contained in the lungs after a maximum inhalation.",
          response: { type: "numeric", parts: [{ label: "a", answer: 6000, unit: "cm^3" }] },
          markscheme: { principles: [{ kind: "property", name: "Total lung capacity", statement: "Total lung capacity includes residual volume in addition to vital capacity." }], steps: [{ reasoning: "Add vital capacity and residual volume.", working: "4500 + 1500 = 6000 \\text{ cm}^3", marks: 1, markCode: "M" }], finalAnswer: "6000 cm3" },
        },
        {
          id: "olbio-u5-lung-volumes-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why residual volume is important for gas exchange.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Role of residual volume", statement: "Residual volume prevents alveolar collapse and maintains a surface for gas exchange." }], steps: [{ reasoning: "Residual volume is the air left in the lungs after maximum exhalation.", working: "\\text{RV remains}", marks: 1, markCode: "M" }, { reasoning: "It prevents the alveoli from collapsing completely.", working: "\\text{prevents collapse}", marks: 1, markCode: "M" }, { reasoning: "Because some air remains, gas exchange can continue between breaths.", working: "\\text{continuous exchange}", marks: 1, markCode: "M" }, { reasoning: "Conclude that residual volume maintains alveolar inflation.", working: "\\text{inflation maintained}", marks: 1, markCode: "A" }], finalAnswer: "Residual volume keeps alveoli inflated so gas exchange can continue between breaths.", commonErrors: ["Saying residual volume is part of vital capacity."] },
        },
        {
          id: "olbio-u5-lung-volumes-q16", difficulty: "challenge", totalMarks: 9,
          stem: "A student uses a spirometer to investigate lung volumes.",
          parts: [
            { label: "a", prompt: "Name the instrument and state what it measures.", marks: 2 },
            { label: "b", prompt: "List tidal volume, inspiratory reserve, expiratory reserve, vital capacity and residual volume.", marks: 5 },
            { label: "c", prompt: "Calculate vital capacity when TV=500, IRV=2500 and ERV=1500 cm3.", marks: 1 },
            { label: "d", prompt: "State one clinical use of spirometry.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "technique", name: "Lung volumes and spirometry", statement: "Spirometry measures ventilated lung volumes; residual volume remains after maximum exhalation." }], steps: [
            { part: "a", reasoning: "Spirometer; measures volumes of air inhaled and exhaled.", working: "\\text{spirometer}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Used to assess lung function.", working: "\\text{lung function}", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Tidal volume: normal breath.", working: "\\text{TV}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Inspiratory reserve: extra inhaled air.", working: "\\text{IRV}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Expiratory reserve: extra exhaled air.", working: "\\text{ERV}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Vital capacity: maximum exhaled after maximum inhaled.", working: "\\text{VC}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Residual volume: air remaining after maximum exhalation.", working: "\\text{RV}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "500 + 2500 + 1500 = 4500 cm3.", working: "4500 \\text{ cm}^3", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Diagnosing asthma/COPD or monitoring lung function.", working: "\\text{asthma/COPD}", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) spirometer measures inhaled/exhaled volumes (b) TV, IRV, ERV, VC, RV (c) 4500 cm3 (d) diagnose lung disease", commonErrors: ["Including residual volume in vital capacity."] },
        },
      ],
    },
    {
      id: "olbio-u5-airway-smoking",
      title: "Airway defences and smoking",
      skill: "Describe airway defence mechanisms and explain the effects of smoking.",
      lesson: {
        sections: [
          {
            heading: "Airway defences",
            body: "- **Goblet cells** produce mucus trapping dust/pathogens.\n- **Cilia** beat upward, moving mucus to throat for swallowing.\n- **Macrophages** in alveoli engulf pathogens.",
          },
          {
            heading: "Smoking effects",
            body: "- **Tar**: damages cilia → mucus builds up → 'smoker's cough'; damages alveoli → emphysema (reduced surface area).\n- **Carbon monoxide**: binds haemoglobin → less O₂ transport → breathlessness.\n- **Nicotine**: addictive; raises heart rate/BP.\n- **Carcinogens**: cause lung cancer.",
          },
          {
            heading: "Emphysema and chronic bronchitis",
            body: "Long-term smoking → alveoli walls destroyed (emphysema) and airways inflamed/narrowed (chronic bronchitis) → COPD → severe breathing difficulty.",
          },
        ],
        keyFormulas: [],
        workedExample: {
          problem: "Why do smokers develop a persistent cough?",
          solution: "Tar paralyses/destroys cilia, so mucus can't be cleared and accumulates, triggering coughing.",
        },
      },
      questions: [
        {
          id: "olbio-u5-airway-smoking-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the role of cilia in the airways?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Exchange gases" },
              { id: "b", text: "Beat mucus upward to be swallowed" },
              { id: "c", text: "Digest particles" },
              { id: "d", text: "Produce mucus" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Cilia", statement: "Beat mucus + trapped particles up airway." },
            ],
            steps: [
              { reasoning: "Recall function.", working: "\\text{move mucus up}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Beat mucus upward to be swallowed",
            commonErrors: ["Choosing 'produce mucus' — that's goblet cells."],
          },
        },
        {
          id: "olbio-u5-airway-smoking-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two harmful substances in tobacco smoke.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Smoke components", statement: "Tar, carbon monoxide, nicotine, carcinogens." },
            ],
            steps: [
              { reasoning: "Give two substances.", working: "\\text{tar, CO, nicotine}", marks: 1, markCode: "M" },
              { reasoning: "State them clearly.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tar, carbon monoxide, nicotine (and carcinogens).",
            commonErrors: ["Choosing 'oxygen' or 'water vapour' — those aren't harmful."],
          },
        },
        {
          id: "olbio-u5-airway-smoking-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how smoking causes emphysema.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Emphysema", statement: "Tar damages alveoli walls → reduced surface area → less gas exchange." },
            ],
            steps: [
              { reasoning: "Tar reaches alveoli.", working: "\\text{tar in alveoli}", marks: 1, markCode: "M" },
              { reasoning: "Destroys alveolar walls.", working: "\\text{walls destroyed}", marks: 1, markCode: "M" },
              { reasoning: "Fewer/larger air sacs → less surface area.", working: "\\text{less surface}", marks: 1, markCode: "M" },
              { reasoning: "Reduced gas exchange → breathlessness.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tar damages and destroys alveolar walls, reducing the surface area for gas exchange; the lungs can't supply enough oxygen, causing breathlessness.",
            commonErrors: ["Saying 'lungs fill with tar' — the damage is structural (walls destroyed)."],
          },
        },
        {
          id: "olbio-u5-airway-smoking-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Describe the effects of smoking on the gas exchange system.",
          parts: [
            { label: "a", prompt: "Explain how tar affects the airways.", marks: 3 },
            { label: "b", prompt: "Explain how carbon monoxide affects oxygen transport.", marks: 3 },
            { label: "c", prompt: "State two long-term diseases caused by smoking.", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Smoking effects", statement: "Tar → cilia/alveoli damage; CO → less O₂ transport; diseases: emphysema, cancer, bronchitis." },
            ],
            steps: [
              { part: "a", reasoning: "Tar paralyses cilia.", working: "\\text{cilia damaged}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Mucus accumulates → cough.", working: "\\text{mucus build-up}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "Reaches alveoli → emphysema.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "CO binds haemoglobin.", working: "\\text{CO + Hb}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Less O₂ carried.", working: "\\text{less O}_2", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Contributes to breathlessness.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Chronic bronchitis.", working: "\\text{bronchitis}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Lung cancer.", working: "\\text{lung cancer}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "State diseases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) tar→cilia damage→mucus→emphysema (b) CO→Hb binding→less O₂ (c) bronchitis, lung cancer, emphysema",
            commonErrors: ["In (b) saying CO 'replaces oxygen in lungs' — it binds haemoglobin in blood."],
          },
        },
        {
          id: "olbio-u5-airway-smoking-q5", difficulty: "foundation", totalMarks: 1,
          stem: "Which cells produce mucus in the airways?",
          response: { type: "mcq", choices: [ { id: "a", text: "Neurones" }, { id: "b", text: "Ciliated cells" }, { id: "c", text: "Goblet cells" }, { id: "d", text: "Red blood cells" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Airway defences", statement: "Goblet cells produce mucus; cilia move it upward for swallowing." }], steps: [{ reasoning: "Match cell to mucus production.", working: "\\text{goblet cells}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Goblet cells", commonErrors: ["Cilia move mucus but do not produce it."] },
        },
        {
          id: "olbio-u5-airway-smoking-q6", difficulty: "foundation", totalMarks: 1,
          stem: "What is the main role of cilia in the trachea and bronchi?",
          response: { type: "mcq", choices: [ { id: "a", text: "Produce surfactant" }, { id: "b", text: "Exchange oxygen" }, { id: "c", text: "Store carbon dioxide" }, { id: "d", text: "Move mucus and trapped particles upward" } ], correctChoiceId: "d" },
          markscheme: { principles: [{ kind: "property", name: "Cilia function", statement: "Cilia sweep mucus containing trapped dust and pathogens upward to be swallowed." }], steps: [{ reasoning: "Recall ciliary action.", working: "\\text{cilia beat upward}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Move mucus and trapped particles upward", commonErrors: ["Surfactant is produced in alveoli, not by cilia."] },
        },
        {
          id: "olbio-u5-airway-smoking-q7", difficulty: "core", totalMarks: 1,
          stem: "How does tar in tobacco smoke affect the airways?",
          response: { type: "mcq", choices: [ { id: "a", text: "It dissolves mucus completely" }, { id: "b", text: "It increases oxygen transport" }, { id: "c", text: "It damages cilia and alveoli" }, { id: "d", text: "It strengthens cilia" } ], correctChoiceId: "c" },
          markscheme: { principles: [{ kind: "property", name: "Tar effects", statement: "Tar damages cilia, causing mucus build-up, and destroys alveolar walls causing emphysema." }], steps: [{ reasoning: "Identify tar damage.", working: "\\text{tar damage}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** It damages cilia and alveoli", commonErrors: ["Tar does not strengthen cilia."] },
        },
        {
          id: "olbio-u5-airway-smoking-q8", difficulty: "core", totalMarks: 1,
          stem: "Why does carbon monoxide in smoke reduce oxygen transport?",
          response: { type: "mcq", choices: [ { id: "a", text: "It binds haemoglobin more strongly than oxygen" }, { id: "b", text: "It destroys red blood cells immediately" }, { id: "c", text: "It blocks the trachea" }, { id: "d", text: "It dissolves in plasma only" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Carbon monoxide", statement: "Carbon monoxide binds haemoglobin, reducing oxygen carriage and causing breathlessness." }], steps: [{ reasoning: "Link CO to haemoglobin.", working: "\\text{CO binds Hb}", marks: 1, markCode: "M" }], finalAnswer: "**(a)** It binds haemoglobin more strongly than oxygen", commonErrors: ["It acts on haemoglobin in blood, not the airway."] },
        },
        {
          id: "olbio-u5-airway-smoking-q9", difficulty: "challenge", totalMarks: 1,
          stem: "Which disease is strongly linked to smoking and involves destruction of alveolar walls?",
          response: { type: "mcq", choices: [ { id: "a", text: "Emphysema" }, { id: "b", text: "Scurvy" }, { id: "c", text: "Anaemia" }, { id: "d", text: "Rickets" } ], correctChoiceId: "a" },
          markscheme: { principles: [{ kind: "property", name: "Smoking diseases", statement: "Smoking causes emphysema, chronic bronchitis, lung cancer and cardiovascular disease." }], steps: [{ reasoning: "Match disease to alveolar damage.", working: "\\text{emphysema}", marks: 1, markCode: "B" }], finalAnswer: "**(a)** Emphysema", commonErrors: ["Anaemia is not caused by tar damaging alveoli."] },
        },
        {
          id: "olbio-u5-airway-smoking-q10", difficulty: "foundation", totalMarks: 1,
          stem: "Airway defence includes goblet cells, cilia and macrophages. How many named defence components are listed?",
          response: { type: "numeric", parts: [{ label: "a", answer: 3, unit: "components" }] },
          markscheme: { principles: [{ kind: "property", name: "Airway defences", statement: "Mucus production, ciliary movement and macrophage engulfment defend the airways." }], steps: [{ reasoning: "Count the named components.", working: "1+1+1=3", marks: 1, markCode: "B" }], finalAnswer: "3 components" },
        },
        {
          id: "olbio-u5-airway-smoking-q11", difficulty: "foundation", totalMarks: 1,
          stem: "Tobacco smoke contains tar, carbon monoxide, nicotine and carcinogens. How many harmful components are named?",
          response: { type: "numeric", parts: [{ label: "a", answer: 4, unit: "components" }] },
          markscheme: { principles: [{ kind: "property", name: "Smoke components", statement: "Tar, carbon monoxide, nicotine and carcinogens are harmful smoke components." }], steps: [{ reasoning: "Count the harmful components.", working: "4", marks: 1, markCode: "B" }], finalAnswer: "4 components" },
        },
        {
          id: "olbio-u5-airway-smoking-q12", difficulty: "core", totalMarks: 1,
          stem: "A smoker's vital capacity falls from 4500 cm3 to 3600 cm3. Calculate the decrease in vital capacity.",
          response: { type: "numeric", parts: [{ label: "a", answer: 900, unit: "cm^3" }] },
          markscheme: { principles: [{ kind: "property", name: "Lung function change", statement: "Decrease = original value - new value." }], steps: [{ reasoning: "Subtract new value from original.", working: "4500 - 3600 = 900 \\text{ cm}^3", marks: 1, markCode: "M" }], finalAnswer: "900 cm3 decrease" },
        },
        {
          id: "olbio-u5-airway-smoking-q13", difficulty: "challenge", totalMarks: 1,
          stem: "Vital capacity falls from 4500 cm3 to 3600 cm3. Calculate the percentage decrease.",
          response: { type: "numeric", parts: [{ label: "a", answer: 20, unit: "%" }] },
          markscheme: { principles: [{ kind: "property", name: "Percentage decrease", statement: "Percentage decrease = decrease / original x 100." }], steps: [{ reasoning: "Divide decrease by original and multiply by 100.", working: "900 \\div 4500 \\times 100 = 20\\%", marks: 1, markCode: "M" }], finalAnswer: "20% decrease" },
        },
        {
          id: "olbio-u5-airway-smoking-q14", difficulty: "core", totalMarks: 1,
          stem: "If cilia normally clear mucus upward and tar reduces their effectiveness by half, what fraction of normal clearing activity remains?",
          response: { type: "numeric", parts: [{ label: "a", answer: 0.5 }] },
          markscheme: { principles: [{ kind: "property", name: "Ciliary function", statement: "Reduced ciliary activity allows mucus to accumulate in the airways." }], steps: [{ reasoning: "Half effectiveness means one half remains.", working: "\\frac{1}{2}=0.5", marks: 1, markCode: "M" }], finalAnswer: "0.5 (half)" },
        },
        {
          id: "olbio-u5-airway-smoking-q15", difficulty: "challenge", totalMarks: 4,
          stem: "Explain why smokers often develop a persistent cough.",
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Smoker's cough", statement: "Ciliary damage prevents mucus clearance and causes coughing." }], steps: [{ reasoning: "Tar in smoke damages and paralyses cilia in the airways.", working: "\\text{cilia damaged}", marks: 1, markCode: "M" }, { reasoning: "Mucus produced by goblet cells cannot be swept upward effectively.", working: "\\text{mucus accumulates}", marks: 1, markCode: "M" }, { reasoning: "Mucus builds up and irritates the airway lining.", working: "\\text{irritation}", marks: 1, markCode: "M" }, { reasoning: "The body responds with coughing to try to clear the mucus.", working: "\\text{smoker's cough}", marks: 1, markCode: "A" }], finalAnswer: "Tar damages cilia, mucus accumulates, irritation triggers a persistent cough.", commonErrors: ["Attributing the cough only to nicotine addiction."] },
        },
        {
          id: "olbio-u5-airway-smoking-q16", difficulty: "challenge", totalMarks: 9,
          stem: "A student is asked to compare the effects of tar and carbon monoxide in tobacco smoke.",
          parts: [
            { label: "a", prompt: "Explain how tar affects cilia and alveoli.", marks: 3 },
            { label: "b", prompt: "Explain how carbon monoxide affects oxygen transport.", marks: 3 },
            { label: "c", prompt: "State two long-term diseases linked to smoking.", marks: 2 },
            { label: "d", prompt: "Name two airway defence mechanisms before smoking damage.", marks: 1 },
          ],
          response: { type: "open" },
          markscheme: { principles: [{ kind: "property", name: "Effects of smoking", statement: "Tar damages airways and alveoli; carbon monoxide reduces oxygen transport; smoking causes chronic lung disease." }], steps: [
            { part: "a", reasoning: "Tar damages/paralyses cilia.", working: "\\text{cilia damaged}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Mucus accumulates because it is not cleared.", working: "\\text{mucus build-up}", marks: 1, markCode: "M" },
            { part: "a", reasoning: "Tar also destroys alveolar walls, reducing gas exchange area.", working: "\\text{emphysema}", marks: 1, markCode: "A" },
            { part: "b", reasoning: "Carbon monoxide binds haemoglobin in red blood cells.", working: "\\text{CO-Hb}", marks: 1, markCode: "M" },
            { part: "b", reasoning: "Less oxygen can be carried by the blood.", working: "\\text{less O}_2", marks: 1, markCode: "M" },
            { part: "b", reasoning: "This contributes to breathlessness and reduced exercise capacity.", working: "\\text{breathlessness}", marks: 1, markCode: "A" },
            { part: "c", reasoning: "Chronic bronchitis and lung cancer (or emphysema).", working: "\\text{bronchitis/cancer}", marks: 1, markCode: "M" },
            { part: "c", reasoning: "State two valid diseases.", working: "\\text{two diseases}", marks: 1, markCode: "A" },
            { part: "d", reasoning: "Goblet cells producing mucus and cilia moving it upward (or macrophages).", working: "\\text{mucus/cilia}", marks: 1, markCode: "A" },
          ], finalAnswer: "(a) tar damages cilia/alveoli (b) CO binds haemoglobin reducing O2 transport (c) bronchitis, cancer or emphysema (d) mucus/cilia/macrophages", commonErrors: ["Confusing carbon monoxide with tar's effects."] },
        },
      ],
    },
  ],
  notes: [
    {
      id: "olbio-u5-lung-notes",
      title: "Lung volumes and smoking — revision notes",
      summary: "Spirometry volumes, airway defences, smoking effects.",
      sections: [
        {
          heading: "Lung volumes",
          body: "Tidal ~500 cm³; VC = TV + IRV + ERV (~4–5 dm³); residual volume remains (prevents alveolar collapse). Spirometer measures these.",
        },
        {
          heading: "Airways and smoking",
          body: "Goblet cells → mucus; cilia → sweep mucus up. Smoking: tar damages cilia/alveoli (emphysema, bronchitis, cancer); CO binds haemoglobin (less O₂); nicotine addictive.",
        },
        {
          heading: "Exam technique",
          body: "- VC excludes residual volume — don't include it in the sum.\n- Emphysema = destroyed alveolar walls → less surface area.",
        },
      ],
    },
  ],
};
