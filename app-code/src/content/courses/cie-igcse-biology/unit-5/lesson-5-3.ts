import type { Lesson } from "../../../types.ts";

export const lesson53: Lesson = {
  id: "cieb-u5-lesson-5-3",
  code: "5-3",
  title: "Lung Volumes, Airway Defences and Smoking",
  goal: "I CAN describe lung volumes, airway defence mechanisms, and the effects of smoking on the gas exchange system.",
  standards: ["0653 5.2"],
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
      id: "cieb-u5-lung-volumes",
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
          id: "cieb-u5-lung-volumes-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is tidal volume?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Volume of air in one normal breath" },
              { id: "b", text: "Extra air inhaled forcefully" },
              { id: "c", text: "Air remaining after exhaling" },
              { id: "d", text: "Maximum air capacity" },
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
          id: "cieb-u5-lung-volumes-q2",
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
          id: "cieb-u5-lung-volumes-q3",
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
          id: "cieb-u5-lung-volumes-q4",
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
          id: "cieb-u5-lung-volumes-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Residual volume is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Extra air inhaled forcefully" },
              { id: "b", text: "The volume of a normal breath" },
              { id: "c", text: "Air remaining in the lungs after maximum exhalation" },
              { id: "d", text: "The maximum air that can be inhaled" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Residual volume", statement: "Air remaining in the lungs after maximum exhalation." },
            ],
            steps: [
              { reasoning: "Recall the definition.", working: "\\text{air left after max exhale}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Air remaining in the lungs after maximum exhalation",
            commonErrors: ["Choosing vital capacity — RV is the air that cannot be expelled."],
          },
        },
        {
          id: "cieb-u5-lung-volumes-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Tidal volume is 450 cm³, inspiratory reserve volume is 2400 cm³ and expiratory reserve volume is 1300 cm³. Calculate vital capacity.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 4150, unit: "cm³" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Vital capacity", statement: "VC = TV + IRV + ERV (residual volume excluded)." },
            ],
            steps: [
              { reasoning: "Add the three volumes.", working: "450 + 2400 + 1300", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 4150 \\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "4150 cm³ (4.15 dm³)",
            commonErrors: ["Including residual volume in the sum."],
          },
        },
        {
          id: "cieb-u5-lung-volumes-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Define inspiratory reserve volume.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "definition", name: "Inspiratory reserve volume", statement: "Extra air that can be inhaled beyond the tidal volume." },
            ],
            steps: [
              { reasoning: "Give the definition.", working: "\\text{extra air beyond tidal}", marks: 1, markCode: "M" },
              { reasoning: "Complete.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "The extra volume of air that can be inhaled forcefully after a normal tidal breath.",
            commonErrors: ["Confusing it with tidal volume — IRV is the reserve beyond tidal."],
          },
        },
        {
          id: "cieb-u5-lung-volumes-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which lung volume cannot be measured directly with a simple spirometer?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Inspiratory reserve volume" },
              { id: "b", text: "Expiratory reserve volume" },
              { id: "c", text: "Residual volume" },
              { id: "d", text: "Tidal volume" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Spirometry limits", statement: "Spirometers measure inhaled/exhaled volumes; residual volume stays in the lungs." },
            ],
            steps: [
              { reasoning: "Recall the limitation.", working: "\\text{RV not measurable}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Residual volume",
            commonErrors: ["Choosing tidal volume — that is the easiest volume to measure."],
          },
        },
        {
          id: "cieb-u5-lung-volumes-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Vital capacity is 4000 cm³, tidal volume is 500 cm³ and inspiratory reserve volume is 2500 cm³. Calculate the expiratory reserve volume.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 1000, unit: "cm³" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "ERV rearrangement", statement: "ERV = VC − TV − IRV." },
            ],
            steps: [
              { reasoning: "Rearrange the VC formula.", working: "ERV = VC - TV - IRV = 4000 - 500 - 2500", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 1000 \\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "1000 cm³",
            commonErrors: ["Adding all volumes instead of subtracting."],
          },
        },
        {
          id: "cieb-u5-lung-volumes-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why residual volume is important for gas exchange.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Residual volume function", statement: "Residual air keeps alveoli inflated so gas exchange continues between breaths." },
            ],
            steps: [
              { reasoning: "Alveoli always contain some air.", working: "\\text{air remains}", marks: 1, markCode: "M" },
              { reasoning: "This prevents alveolar collapse.", working: "\\text{no collapse}", marks: 1, markCode: "M" },
              { reasoning: "Gas exchange can continue between breaths.", marks: 1, markCode: "M" },
              { reasoning: "Conclude importance.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Residual volume keeps a layer of air in the alveoli so they do not collapse; this allows gas exchange to continue between breaths and keeps the lungs inflated.",
            commonErrors: ["Saying residual volume 'wastes space' — it has a protective function."],
          },
        },
        {
          id: "cieb-u5-lung-volumes-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A spirometer is used to measure:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Volumes of air inhaled and exhaled" },
              { id: "b", text: "Heart rate" },
              { id: "c", text: "Blood pressure" },
              { id: "d", text: "Oxygen concentration in blood" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "technique", name: "Spirometry", statement: "Spirometer measures volumes of air inhaled/exhaled to assess lung function." },
            ],
            steps: [
              { reasoning: "Recall the function.", working: "\\text{air volumes}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Volumes of air inhaled and exhaled",
            commonErrors: ["Choosing heart rate — that's a different measurement."],
          },
        },
        {
          id: "cieb-u5-lung-volumes-q12",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain how a condition such as asthma affects vital capacity.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Asthma and lung volumes", statement: "Airway narrowing/inflammation reduces the volume of air that can be moved, lowering vital capacity." },
            ],
            steps: [
              { reasoning: "Asthma inflames and narrows the airways.", working: "\\text{narrowed airways}", marks: 1, markCode: "M" },
              { reasoning: "Less air can be inhaled/exhaled forcefully.", working: "\\text{reduced flow}", marks: 1, markCode: "M" },
              { reasoning: "Vital capacity decreases.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "In asthma the airways become inflamed and narrowed, so less air can be moved in and out; this reduces the volumes that make up vital capacity, so VC is lower than in a healthy person.",
            commonErrors: ["Saying asthma 'destroys alveoli' — that describes emphysema."],
          },
        },
        {
          id: "cieb-u5-lung-volumes-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Tidal volume is approximately:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "5 dm³" },
              { id: "b", text: "500 cm³" },
              { id: "c", text: "10 dm³" },
              { id: "d", text: "100 cm³" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Tidal volume", statement: "Tidal volume ≈ 500 cm³ per normal breath." },
            ],
            steps: [
              { reasoning: "Recall the value.", working: "\\sim 500 \\text{ cm}^3", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** 500 cm³",
            commonErrors: ["Choosing 5 dm³ — that's closer to vital capacity."],
          },
        },
        {
          id: "cieb-u5-lung-volumes-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Vital capacity is 5000 cm³ and tidal volume is 500 cm³. What percentage of vital capacity is the tidal volume?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 10, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Percentage calculation", statement: "Percentage = part / whole × 100." },
            ],
            steps: [
              { reasoning: "Apply the percentage formula.", working: "\\frac{500}{5000} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 10\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "10%",
            commonErrors: ["Inverting the ratio — tidal volume is the part."],
          },
        },
        {
          id: "cieb-u5-lung-volumes-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student uses a spirometer to compare the lung volumes of a non-smoker and a long-term smoker.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "Describe how vital capacity is measured with a spirometer.", marks: 3 },
            { label: "c", prompt: "Predict and explain the difference in vital capacity between the two people.", marks: 2 },
            { label: "d", prompt: "Suggest one control variable.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "technique", name: "Spirometry", statement: "VC measured as max inhalation followed by max exhalation." },
              { kind: "property", name: "Smoking and lung volumes", statement: "Smoking damages airways/alveoli → reduced vital capacity." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: smoking status. Dependent: vital capacity.", working: "\\text{smoker vs VC}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Breathe in maximally then exhale maximally.", working: "\\text{max in, max out}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Spirometer records the volume.", working: "\\text{spirometer}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "This equals VC = TV + IRV + ERV.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Smoker's VC lower.", working: "\\text{VC} \\downarrow", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Reason: tar-damaged airways/alveoli reduce airflow.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Control e.g. age, height, sex, breathing technique.", working: "\\text{control variable}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State control.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) smoking status vs vital capacity (b) max inhale then max exhale on spirometer (c) smoker lower — damaged airways/alveoli (d) e.g. same age/height",
            commonErrors: ["In (c) predicting higher VC in smokers — smoking reduces lung function."],
          },
        },
        {
          id: "cieb-u5-lung-volumes-q16",
          difficulty: "core",
          totalMarks: 2,
          stem: "Vital capacity is 4500 cm³ and residual volume is 1200 cm³. Calculate total lung capacity.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 5700, unit: "cm³" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Total lung capacity", statement: "TLC = vital capacity + residual volume." },
            ],
            steps: [
              { reasoning: "Add VC and RV.", working: "4500 + 1200", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 5700 \\text{ cm}^3", marks: 1, markCode: "A" },
            ],
            finalAnswer: "5700 cm³ (5.7 dm³)",
            commonErrors: ["Subtracting instead of adding — TLC includes residual volume."],
          },
        },
      ],
    },
    {
      id: "cieb-u5-airway-smoking",
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
          id: "cieb-u5-airway-smoking-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the role of cilia in the airways?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Produce mucus" },
              { id: "b", text: "Beat mucus upward to be swallowed" },
              { id: "c", text: "Exchange gases" },
              { id: "d", text: "Digest particles" },
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
            finalAnswer: "**(b)** Beat mucus upward to be swallowed",
            commonErrors: ["Choosing 'produce mucus' — that's goblet cells."],
          },
        },
        {
          id: "cieb-u5-airway-smoking-q2",
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
          id: "cieb-u5-airway-smoking-q3",
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
          id: "cieb-u5-airway-smoking-q4",
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
          id: "cieb-u5-airway-smoking-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Goblet cells in the lining of the airways produce:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Oxygen" },
              { id: "b", text: "Antibodies" },
              { id: "c", text: "Cilia" },
              { id: "d", text: "Mucus" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Goblet cells", statement: "Goblet cells secrete mucus that traps dust and pathogens." },
            ],
            steps: [
              { reasoning: "Match cell to product.", working: "\\text{goblet} \\to \\text{mucus}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Mucus",
            commonErrors: ["Choosing cilia — those are produced by different cells."],
          },
        },
        {
          id: "cieb-u5-airway-smoking-q6",
          difficulty: "core",
          totalMarks: 2,
          stem: "Carbon monoxide binds to haemoglobin about 200 times more strongly than oxygen does. How many times more strongly does carbon monoxide bind haemoglobin?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 200, unit: "×" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "CO binding", statement: "CO binds haemoglobin ~200 times more strongly than O₂." },
            ],
            steps: [
              { reasoning: "Recall the comparison.", working: "\\sim 200 \\times", marks: 1, markCode: "M" },
              { reasoning: "State the answer.", working: "= 200", marks: 1, markCode: "A" },
            ],
            finalAnswer: "About 200 times more strongly",
            commonErrors: ["Confusing with the percentage of haemoglobin bound — the figure is a binding-affinity comparison."],
          },
        },
        {
          id: "cieb-u5-airway-smoking-q7",
          difficulty: "core",
          totalMarks: 2,
          stem: "Describe how cilia and mucus protect the lungs from infection.",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Airway defences", statement: "Mucus traps particles; cilia sweep mucus upward to be swallowed." },
            ],
            steps: [
              { reasoning: "Mucus traps dust and pathogens.", working: "\\text{mucus traps}", marks: 1, markCode: "M" },
              { reasoning: "Cilia beat mucus upward for removal.", working: "\\text{cilia sweep up}", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Mucus produced by goblet cells traps dust and pathogens, and cilia beat the mucus upward toward the throat where it is swallowed, preventing infection of the lungs.",
            commonErrors: ["Saying cilia 'produce mucus' — goblet cells produce it."],
          },
        },
        {
          id: "cieb-u5-airway-smoking-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Tar in tobacco smoke damages:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only taste buds" },
              { id: "b", text: "Heart valves" },
              { id: "c", text: "Red blood cells directly" },
              { id: "d", text: "Cilia and alveoli" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Tar effects", statement: "Tar paralyses/destroys cilia and damages alveolar walls." },
            ],
            steps: [
              { reasoning: "Recall the targets.", working: "\\text{cilia + alveoli}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Cilia and alveoli",
            commonErrors: ["Choosing red blood cells — that's carbon monoxide's target."],
          },
        },
        {
          id: "cieb-u5-airway-smoking-q9",
          difficulty: "core",
          totalMarks: 2,
          stem: "Healthy lungs have a surface area for gas exchange of about 70 m², while a patient with emphysema has about 49 m². Calculate the percentage reduction in surface area.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 30, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Emphysema", statement: "Destroyed alveolar walls reduce gas exchange surface area." },
            ],
            steps: [
              { reasoning: "Apply percentage decrease formula.", working: "\\frac{70 - 49}{70} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 30\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "30%",
            commonErrors: ["Dividing 49 by 70 and forgetting to subtract from 100%."],
          },
        },
        {
          id: "cieb-u5-airway-smoking-q10",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain how long-term smoking leads to chronic obstructive pulmonary disease (COPD).",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "COPD", statement: "Emphysema (destroyed alveoli) + chronic bronchitis (inflamed airways) → COPD." },
            ],
            steps: [
              { reasoning: "Tar destroys alveolar walls → emphysema.", working: "\\text{emphysema}", marks: 1, markCode: "M" },
              { reasoning: "Reduced surface area → less gas exchange.", working: "\\text{less surface}", marks: 1, markCode: "M" },
              { reasoning: "Airways inflamed/narrowed with mucus build-up → chronic bronchitis.", working: "\\text{bronchitis}", marks: 1, markCode: "M" },
              { reasoning: "Together they cause severe breathing difficulty.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Long-term smoking destroys alveolar walls (emphysema, reducing gas exchange area) and inflames/narrows the airways with mucus build-up (chronic bronchitis); together these cause COPD and severe breathing difficulty.",
            commonErrors: ["Describing only one condition — COPD includes both emphysema and chronic bronchitis."],
          },
        },
        {
          id: "cieb-u5-airway-smoking-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Carbon monoxide in tobacco smoke causes breathlessness because it:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only increases mucus production" },
              { id: "b", text: "Blocks the airways completely" },
              { id: "c", text: "Binds haemoglobin and reduces oxygen transport" },
              { id: "d", text: "Destroys alveoli directly" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Carbon monoxide", statement: "CO binds haemoglobin, reducing the blood's oxygen-carrying capacity." },
            ],
            steps: [
              { reasoning: "Recall the mechanism.", working: "\\text{CO} + \\text{Hb}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(c)** Binds haemoglobin and reduces oxygen transport",
            commonErrors: ["Saying CO 'blocks the lungs' — it acts in the blood on haemoglobin."],
          },
        },
        {
          id: "cieb-u5-airway-smoking-q12",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why smokers often develop a persistent cough ('smoker's cough').",
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Smoker's cough", statement: "Tar damages cilia → mucus cannot be cleared → accumulates → triggers coughing." },
            ],
            steps: [
              { reasoning: "Tar reaches and damages/paralyses cilia.", working: "\\text{cilia damaged}", marks: 1, markCode: "M" },
              { reasoning: "Mucus is no longer swept upward.", working: "\\text{mucus stays}", marks: 1, markCode: "M" },
              { reasoning: "Mucus accumulates in the airways.", working: "\\text{mucus build-up}", marks: 1, markCode: "M" },
              { reasoning: "Body coughs to try to clear it.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Tar in smoke damages and paralyses the cilia, so mucus produced by goblet cells cannot be swept up and swallowed; it accumulates in the airways, triggering a persistent cough as the body tries to clear it.",
            commonErrors: ["Saying 'tar directly causes coughing' — the cough results from mucus build-up after cilia damage."],
          },
        },
        {
          id: "cieb-u5-airway-smoking-q13",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which is a defence mechanism of the airways?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Peristalsis" },
              { id: "b", text: "Bile" },
              { id: "c", text: "Insulin" },
              { id: "d", text: "Cilia and goblet cells" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Airway defences", statement: "Goblet cells produce mucus; cilia sweep it away." },
            ],
            steps: [
              { reasoning: "Identify the defence.", working: "\\text{cilia + mucus}", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(d)** Cilia and goblet cells",
            commonErrors: ["Choosing bile or peristalsis — those belong to digestion."],
          },
        },
        {
          id: "cieb-u5-airway-smoking-q14",
          difficulty: "core",
          totalMarks: 2,
          stem: "Non-smokers have an average vital capacity of 4500 cm³ and long-term smokers average 3600 cm³. Calculate the percentage decrease in vital capacity for smokers.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20, unit: "%" }],
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Smoking and lung function", statement: "Smoking reduces vital capacity through airway and alveolar damage." },
            ],
            steps: [
              { reasoning: "Apply percentage decrease formula.", working: "\\frac{4500 - 3600}{4500} \\times 100", marks: 1, markCode: "M" },
              { reasoning: "Compute the answer.", working: "= 20\\%", marks: 1, markCode: "A" },
            ],
            finalAnswer: "20%",
            commonErrors: ["Dividing 3600 by 4500 without subtracting from 100%."],
          },
        },
        {
          id: "cieb-u5-airway-smoking-q15",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "A student investigates lung function in smokers and non-smokers using a spirometer.",
          parts: [
            { label: "a", prompt: "State the independent and dependent variables.", marks: 2 },
            { label: "b", prompt: "Describe how vital capacity is measured.", marks: 2 },
            { label: "c", prompt: "Explain two ways smoking reduces lung function.", marks: 3 },
            { label: "d", prompt: "Suggest one ethical or practical improvement to the study.", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              { kind: "property", name: "Smoking and lung function", statement: "Tar damages cilia/alveoli; CO reduces O₂ transport; both reduce lung function." },
            ],
            steps: [
              { part: "a", reasoning: "Independent: smoking status. Dependent: lung volumes/VC.", working: "\\text{smoking vs VC}", marks: 1, markCode: "M" },
              { part: "a", reasoning: "State both.", marks: 1, markCode: "A" },
              { part: "b", reasoning: "Max inhalation followed by max exhalation into spirometer.", working: "\\text{max in/out}", marks: 1, markCode: "M" },
              { part: "b", reasoning: "Records volume = VC.", marks: 1, markCode: "A" },
              { part: "c", reasoning: "Tar damages cilia → mucus build-up → bronchitis.", working: "\\text{cilia damage}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Tar destroys alveoli → emphysema → less surface.", working: "\\text{alveoli damage}", marks: 1, markCode: "M" },
              { part: "c", reasoning: "CO binds haemoglobin → less O₂ carried.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Control age/height or use large sample size.", working: "\\text{control variables}", marks: 1, markCode: "M" },
              { part: "d", reasoning: "State improvement.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "(a) smoking status vs lung volumes (b) max inhale/exhale on spirometer (c) cilia damage→bronchitis; alveoli damage→emphysema; CO→less O₂ (d) control age/height or larger sample",
            commonErrors: ["In (c) only mentioning lung cancer — the question is about lung function."],
          },
        },
        {
          id: "cieb-u5-airway-smoking-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Nicotine in tobacco smoke:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Is addictive and raises heart rate and blood pressure" },
              { id: "b", text: "Dissolves tar in the lungs" },
              { id: "c", text: "Is completely harmless" },
              { id: "d", text: "Produces extra oxygen" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "property", name: "Nicotine", statement: "Nicotine is addictive and raises heart rate and blood pressure." },
            ],
            steps: [
              { reasoning: "Recall the effects.", working: "\\text{addictive, HR/BP} \\uparrow", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(a)** Is addictive and raises heart rate and blood pressure",
            commonErrors: ["Confusing nicotine's effects with tar's — tar damages airways, nicotine affects the heart."],
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cieb-u5-lung-notes",
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
