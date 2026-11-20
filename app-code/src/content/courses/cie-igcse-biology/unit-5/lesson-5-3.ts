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
              { id: "b", text: "Maximum air capacity" },
              { id: "c", text: "Air remaining after exhaling" },
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
              { id: "a", text: "Beat mucus upward to be swallowed" },
              { id: "b", text: "Produce mucus" },
              { id: "c", text: "Exchange gases" },
              { id: "d", text: "Digest particles" },
            ],
            correctChoiceId: "a",
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
