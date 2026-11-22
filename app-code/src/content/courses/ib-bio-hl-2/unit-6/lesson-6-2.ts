import type { Lesson } from "../../../types.ts";

export const lesson62: Lesson = {
  id: "biohl-u6-lesson-6-2",
  code: "6-2",
  title: "Gas Exchange Transport and Reproduction",
  goal: "I CAN apply Fick's law to gas exchange, explain the oxygen dissociation curve and Bohr effect, trace carbon dioxide transport, and evaluate contraceptive methods and the menstrual cycle.",
  standards: ["Paper 1", "Paper 2", "Paper 3", "AHL F.2", "AHL F.6"],
  vocabulary: [
    {
      term: "Fick's law of diffusion",
      definition:
        "Rate of diffusion is proportional to surface area $\\times$ concentration gradient $\\div$ diffusion distance (thickness).",
    },
    {
      term: "Bohr effect",
      definition:
        "The shift of the oxygen dissociation curve to the right in acidic, high-$\\text{CO}_2$ conditions, promoting oxygen unloading in active tissues.",
    },
    {
      term: "Oxygen dissociation curve",
      definition:
        "The sigmoid relationship between oxygen partial pressure and haemoglobin saturation; steep at low $\\text{pO}_2$ and flattening at high $\\text{pO}_2$.",
    },
    {
      term: "Chloride shift",
      definition:
        "Exchange of $\\text{HCO}_3^-$ for $\\text{Cl}^-$ across the red blood cell membrane during carbon dioxide transport.",
    },
    {
      term: "Menstrual cycle",
      definition:
        "The approximately 28-day hormonal cycle of the female reproductive system involving FSH, LH, oestrogen and progesterone.",
    },
    {
      term: "Contraception",
      definition:
        "Methods of preventing pregnancy, classified as barrier, hormonal, intrauterine, surgical or behavioural.",
    },
  ],
  concepts: [
    {
      id: "biohl-u6-gas-exchange",
      title: "Gas exchange and transport in depth",
      skill:
        "Apply Fick's law to alveolar and tissue exchange, interpret the oxygen dissociation curve and Bohr effect, and trace carbon dioxide carriage.",
      lesson: {
        sections: [
          {
            heading: "Fick's law and alveolar adaptations",
            body: "Gas exchange rate follows **Fick's law**: rate $\\propto$ (surface area $\\times$ partial pressure gradient) $\\div$ diffusion distance. The lungs maximise this: alveoli provide a huge surface area (about 70 m$^2$), the alveolar-capillary membrane is about 0.5 $\\mu$m thick (short distance), ventilation maintains steep $\\text{O}_2$ and $\\text{CO}_2$ gradients, and pulmonary blood flow matches ventilation (**ventilation-perfusion matching**).",
          },
          {
            heading: "The oxygen dissociation curve and Bohr effect",
            body: "Haemoglobin's sigmoid **oxygen dissociation curve** shows cooperative binding: steep at low $\\text{pO}_2$ (haemoglobin loads oxygen efficiently in the lungs) and plateauing at high $\\text{pO}_2$. The **Bohr effect** shifts the curve right in tissues — high $\\text{CO}_2$, low pH and high temperature lower haemoglobin's oxygen affinity, promoting unloading where it is needed most. Fetal haemoglobin has a left-shifted curve, giving it higher oxygen affinity than maternal haemoglobin.",
          },
          {
            heading: "Carbon dioxide transport",
            body: "Most $\\text{CO}_2$ ($\\sim 70\\%$) travels as **bicarbonate**: inside red cells, carbonic anhydrase converts $\\text{CO}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_2\\text{CO}_3 \\rightleftharpoons \\text{H}^+ + \\text{HCO}_3^-$. Bicarbonate diffuses out in exchange for chloride (**chloride shift**), and H$^+$ binds haemoglobin (haemoglobin buffering). About $20-25\\%$ travels bound to haemoglobin as **carbaminohaemoglobin**, and $\\sim 10\\%$ dissolved in plasma.",
          },
        ],
        keyFormulas: [
          {
            name: "Fick's law",
            statement:
              "Rate $\\propto \\frac{\\text{area} \\times \\text{gradient}}{\\text{thickness}}$",
          },
          {
            name: "Bohr effect",
            statement:
              "High $\\text{CO}_2$/low pH shifts ODC right — easier $\\text{O}_2$ unloading in tissues",
          },
          {
            name: "Bicarbonate pathway",
            statement:
              "$\\text{CO}_2 + \\text{H}_2\\text{O} \\xrightarrow{\\text{carbonic anhydrase}} \\text{HCO}_3^- + \\text{H}^+$",
          },
        ],
        workedExample: {
          problem:
            "During exercise, muscle $\\text{pCO}_2$ rises and pH falls. Explain using the Bohr effect how this affects oxygen delivery to the muscle.",
          solution:
            "Rising $\\text{CO}_2$ and falling pH shift the oxygen dissociation curve to the right (Bohr effect). At the same $\\text{pO}_2$, haemoglobin's oxygen affinity is lower, so more oxygen dissociates and diffuses into the muscle — matching supply to metabolic demand.",
        },
      },
      questions: [
        {
          id: "biohl-u6-gas-exchange-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "According to Fick's law, which change would MOST increase the rate of oxygen diffusion across the alveolar membrane?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Increasing the surface area and steepening the concentration gradient",
              },
              {
                id: "b",
                text: "Decreasing the oxygen partial pressure gradient",
              },
              { id: "c", text: "Reducing pulmonary blood flow" },
              {
                id: "d",
                text: "Increasing the thickness of the alveolar membrane",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Fick's law",
                statement:
                  "Diffusion rate $\\propto$ area $\\times$ gradient $\\div$ thickness.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fick's law puts surface area and gradient in the numerator — increasing either raises the rate.",
                working: "\\text{area} \\times \\text{gradient}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Thicker membrane, smaller gradient or reduced flow would all DECREASE the rate.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Increasing the surface area and steepening the concentration gradient",
            commonErrors: [
              "Thinking thicker membranes help — thickness is in the denominator.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u6-gas-exchange-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Why does the oxygen dissociation curve have a sigmoid (S) shape rather than a straight line?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Cooperative binding — binding of one O$_2$ molecule makes it easier for subsequent molecules to bind",
              },
              { id: "b", text: "Haemoglobin binds one oxygen molecule only" },
              { id: "c", text: "The curve is an artefact of measurement" },
              { id: "d", text: "Oxygen dissolves directly in plasma" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cooperative binding",
                statement:
                  "Haemoglobin's four subunits bind O$_2$ cooperatively — each bound molecule increases affinity for the next, producing the sigmoid curve.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The S-shape arises because haemoglobin subunits interact — binding is cooperative.",
                working: "\\text{cooperativity}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This gives efficient loading at high $\\text{pO}_2$ (lungs) and efficient unloading at low $\\text{pO}_2$ (tissues).",
                working: "\\text{load + unload}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (b) correctly identifies cooperative binding as the cause.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Cooperative binding — binding of one O$_2$ molecule makes it easier for subsequent molecules to bind",
            commonErrors: [
              "Attributing the shape to myoglobin or simple diffusion — cooperative haemoglobin binding is the cause.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-gas-exchange-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "Fetal haemoglobin (HbF) has a higher oxygen affinity than adult haemoglobin (HbA), shifting its dissociation curve to the LEFT. What is the physiological advantage of this difference?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It prevents the fetus from producing its own red cells",
              },
              {
                id: "b",
                text: "It lets fetal Hb bind oxygen more strongly from maternal blood in the placenta, outcompeting maternal Hb",
              },
              {
                id: "c",
                text: "It lets the fetus unload more oxygen to maternal tissues",
              },
              { id: "d", text: "It speeds up fetal heart rate" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Oxygen dissociation curve shift",
                statement:
                  "Left shift = higher O$_2$ affinity; right shift = lower affinity. HbF's left shift favours oxygen uptake.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Higher affinity means HbF binds oxygen more tightly at the $\\text{pO}_2$ found in placental blood.",
                working: "\\text{higher affinity}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This allows oxygen to transfer from maternal to fetal blood across the placenta — the fetus 'pulls' oxygen from the mother.",
                working: "\\text{placental transfer}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "After birth, HbF is replaced by HbA whose right-shifted curve permits easier unloading to fetal tissues.",
                working: "\\text{postnatal switch}",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning:
                  "Option (b) correctly describes the competitive advantage in oxygen uptake.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** It lets fetal Hb bind oxygen more strongly from maternal blood in the placenta, outcompeting maternal Hb",
            commonErrors: [
              "Thinking left shift helps unloading — left shift INCREASES affinity (loading), right shift decreases it (unloading).",
            ],
            examinerNote: "M1 M1 R1 A1.",
          },
        },
        {
          id: "biohl-u6-gas-exchange-q4",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A patient with chronic obstructive pulmonary disease (COPD) has damaged alveoli, thickened alveolar membranes and reduced surface area. Arterial blood gas analysis shows low $\\text{pO}_2$ and high $\\text{pCO}_2$.",
          parts: [
            {
              label: "a",
              prompt:
                "Apply Fick's law to explain why oxygen diffusion is impaired in this patient.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Explain how the Bohr effect partially compensates for low oxygen delivery during exercise in such patients.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Trace the path of a $\\text{CO}_2$ molecule from muscle tissue to exhalation, naming each transport form and enzyme involved.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate why simply increasing inspired oxygen concentration may be insufficient or risky in advanced COPD, mentioning the Haldane effect or V/Q mismatch.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Fick's law",
                statement:
                  "Diffusion rate $\\propto$ area $\\times$ gradient $\\div$ thickness — COPD reduces area and increases thickness.",
              },
              {
                kind: "principle",
                name: "Bohr effect",
                statement:
                  "High $\\text{CO}_2$/acidosis shifts the ODC right, aiding oxygen unloading where needed.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Fick's law: rate $\\propto$ area $\\times$ gradient $\\div$ thickness.",
                working: "\\text{Fick's law}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "COPD reduces alveolar surface area AND thickens the membrane — both reduce the diffusion rate, lowering arterial $\\text{pO}_2$.",
                working: "\\text{less area, more thickness}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Exercising muscles produce $\\text{CO}_2$ and acid, shifting the ODC right (Bohr effect).",
                working: "\\text{right shift}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Lower haemoglobin affinity releases more O$_2$ to the muscle — partial compensation despite the diffusion defect.",
                working: "\\text{compensation}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "CO$_2$ diffuses into RBCs → carbonic anhydrase makes H$_2$CO$_3$ → dissociates to H$^+$ + HCO$_3^-$ → HCO$_3^-$ diffuses to plasma (chloride shift) → CO$_2$ carried to lungs → diffuses into alveoli → exhaled.",
                working: "\\text{CO}_2 \\to \\text{HCO}_3^- \\to \\text{lungs}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "About 70% travels as bicarbonate via carbonic anhydrase; about 25% as carbaminohaemoglobin; about 10% dissolved.",
                working: "\\text{70/25/10\\%}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "In severe COPD, destroyed alveoli create ventilation-perfusion mismatch — some lung regions get blood flow but no ventilation; extra O$_2$ cannot fix unventilated units.",
                working: "\\text{V/Q mismatch}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Chronic high O$_2$ can worsen hypercapnia in CO$_2$ retainers (reduced hypoxic drive) — controlled oxygen therapy is required.",
                working: "\\text{CO2 retention risk}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) COPD reduces area and increases thickness — both reduce Fick's-law diffusion, lowering $\\text{pO}_2$; (b) exercise acidosis shifts the ODC right (Bohr effect), releasing more O$_2$ to muscles; (c) CO$_2$ → carbonic anhydrase → HCO$_3^-$ + H$^+$ inside RBC → chloride shift → plasma → lungs → exhaled (70% bicarbonate route); (d) V/Q mismatch means unventilated alveoli cannot oxygenate blood, and uncontrolled O$_2$ can worsen CO$_2$ retention — controlled therapy needed",
            commonErrors: [
              "Saying extra oxygen always helps — in V/Q mismatch and CO$_2$ retainers it can be harmful.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), R1 A1 (d).",
          },
        },
        {
          id: "biohl-u6-gas-exchange-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "According to Fick's law of diffusion, the rate of gas exchange is inversely proportional to which variable?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The thickness (diffusion distance) of the exchange surface",
              },
              { id: "b", text: "Surface area" },
              { id: "c", text: "The partial pressure gradient" },
              { id: "d", text: "The temperature of the blood" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Fick's law",
                statement:
                  "Rate $\\propto \\frac{\\text{area} \\times \\text{gradient}}{\\text{thickness}}$ — thickness is in the denominator.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Fick's law places surface area and gradient in the numerator and diffusion distance in the denominator.",
                working: "\\frac{A \\times G}{T}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "A thicker barrier slows diffusion — the alveolar-capillary membrane is only about $0.5\\ \\mu\\text{m}$ thick for this reason.",
                working: "\\text{option c}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** The thickness (diffusion distance) of the exchange surface",
            commonErrors: [
              "Choosing surface area — area is in the numerator; a LARGER area increases the rate.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u6-gas-exchange-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 3,
          stem: "Using Fick's law, calculate the relative diffusion rate for a membrane with surface area $80$ units, partial pressure gradient $6$ units and thickness $4$ units.",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 120, unit: "arbitrary units" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Fick's law",
                statement:
                  "Rate $\\propto \\frac{\\text{area} \\times \\text{gradient}}{\\text{thickness}}$.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Substitute the values into Fick's law: area $\\times$ gradient divided by thickness.",
                working: "\\frac{80 \\times 6}{4}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Compute the numerator: $80 \\times 6 = 480$.",
                working: "80 \\times 6 = 480",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Divide by thickness: $480 \\div 4 = 120$ arbitrary units.",
                working: "\\frac{480}{4} = 120",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$120$ arbitrary units",
            commonErrors: [
              "Multiplying by thickness instead of dividing — thickness is in the denominator.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-gas-exchange-q7",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "During vigorous exercise, muscle $\\text{pCO}_2$ rises and pH falls. What is the combined effect on the oxygen dissociation curve and why is it beneficial?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "The curve shifts right (Bohr effect), lowering haemoglobin's oxygen affinity so more oxygen is unloaded to the active muscle",
              },
              {
                id: "b",
                text: "The curve shifts left, increasing oxygen affinity so muscles can store more oxygen",
              },
              {
                id: "c",
                text: "The curve does not shift; only ventilation changes",
              },
              {
                id: "d",
                text: "The curve shifts right, increasing oxygen affinity",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bohr effect",
                statement:
                  "High $\\text{CO}_2$, low pH and high temperature shift the ODC right — lower affinity, easier $\\text{O}_2$ unloading.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Rising $\\text{CO}_2$ and falling pH in exercising muscle are the classic Bohr-effect stimuli.",
                working: "\\text{high CO}_2, \\text{low pH}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Right shift = lower haemoglobin-oxygen affinity, so at the same $\\text{pO}_2$ more oxygen dissociates into the muscle.",
                working: "\\text{right shift} \\to \\text{unloading}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This matches oxygen delivery to metabolic demand — supply follows need.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** The curve shifts right (Bohr effect), lowering haemoglobin's oxygen affinity so more oxygen is unloaded to the active muscle",
            commonErrors: [
              "Thinking a right shift increases affinity — right = lower affinity = easier unloading; left = higher affinity = easier loading.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-gas-exchange-q8",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "Haemoglobin binds about $1.34\\ \\text{mL}$ of oxygen per gram. If blood contains $15\\ \\text{g}$ of haemoglobin per $100\\ \\text{mL}$, what is the oxygen-carrying capacity of $100\\ \\text{mL}$ of blood?",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 20.1, unit: "mL O$_2$ per 100 mL blood" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Oxygen-carrying capacity",
                statement:
                  "Capacity $= \\text{Hb concentration} \\times 1.34\\ \\text{mL O}_2/\\text{g}$ (approximately; ignoring dissolved $\\text{O}_2$).",
              },
            ],
            steps: [
              {
                reasoning:
                  "Multiply haemoglobin mass per 100 mL by the oxygen bound per gram.",
                working: "15 \\times 1.34",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Capacity $= 20.1\\ \\text{mL O}_2$ per $100\\ \\text{mL}$ blood.",
                working: "= 20.1\\ \\text{mL}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$20.1\\ \\text{mL O}_2$ per $100\\ \\text{mL}$ blood",
            commonErrors: [
              "Using 1.39 mL/g (theoretical maximum) — the standard value used is about 1.34 mL/g.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u6-gas-exchange-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Describe the pathway by which most carbon dioxide is transported from metabolising tissues to the lungs, including the enzyme involved and the 'chloride shift'.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bicarbonate pathway",
                statement:
                  "Most CO$_2$ travels as HCO$_3^-$ formed by carbonic anhydrase inside red blood cells.",
              },
            ],
            steps: [
              {
                reasoning:
                  "CO$_2$ produced by tissues diffuses into the blood and into red blood cells down its gradient.",
                working: "\\text{CO}_2 \\text{ diffuses into RBC}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Inside RBCs, carbonic anhydrase converts CO$_2 + \\text{H}_2\\text{O}$ to carbonic acid, which dissociates to H$^+$ + HCO$_3^-$.",
                working:
                  "\\text{CA}: \\text{CO}_2 + \\text{H}_2\\text{O} \\to \\text{HCO}_3^- + \\text{H}^+",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "HCO$_3^-$ diffuses out into plasma in exchange for Cl$^-$ moving in — the chloride shift — while H$^+$ is buffered by haemoglobin.",
                working: "\\text{chloride shift}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "In the lungs the reactions reverse: HCO$_3^-$ re-enters RBCs, carbonic anhydrase regenerates CO$_2$, which diffuses into alveoli and is exhaled.",
                working: "\\text{reverse in lungs}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "About 70% travels as bicarbonate; ~25% as carbaminohaemoglobin; ~10% dissolved in plasma.",
                working: "70/25/10\\%",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "CO$_2$ diffuses into red blood cells → carbonic anhydrase converts it to H$_2$CO$_3$, which dissociates to H$^+$ + HCO$_3^-$ → HCO$_3^-$ diffuses into plasma in exchange for chloride (chloride shift) while H$^+$ binds haemoglobin → in the lungs the reactions reverse, CO$_2$ is regenerated and diffuses into alveoli for exhalation. About 70% of CO$_2$ travels as bicarbonate.",
            commonErrors: [
              "Placing carbonic anhydrase in plasma — it is inside red blood cells.",
            ],
            examinerNote: "M1 M1 M1 A1 A1.",
          },
        },
        {
          id: "biohl-u6-gas-exchange-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A mountaineer ascends to high altitude where inspired $\\text{pO}_2$ falls. Over days to weeks, their blood shows an increased red blood cell count and elevated erythropoietin (EPO). Which combination best explains this acclimatisation?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Low $\\text{pO}_2$ stimulates EPO release, which increases red blood cell production, raising the blood's oxygen-carrying capacity",
              },
              {
                id: "b",
                text: "Haemoglobin switches to a left-shifted curve, increasing affinity until tissues starve",
              },
              {
                id: "c",
                text: "Low oxygen directly stimulates the lungs to absorb more oxygen without any blood change",
              },
              {
                id: "d",
                text: "Plasma volume increases, diluting the blood and improving diffusion",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Erythropoiesis",
                statement:
                  "Hypoxia stimulates renal EPO release → increased erythropoiesis → more red cells → greater O$_2$-carrying capacity.",
              },
            ],
            steps: [
              {
                reasoning:
                  "At altitude the low inspired $\\text{pO}_2$ means arterial blood is less saturated despite maximal ventilation.",
                working: "\\text{hypoxaemia}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Kidneys sense hypoxia and release erythropoietin (EPO).",
                working: "\\text{EPO release}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "EPO stimulates bone marrow to produce more red blood cells, raising haemoglobin concentration and oxygen capacity.",
                working: "\\text{more RBCs}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (b) correctly links hypoxia → EPO → erythropoiesis → increased capacity.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** Low $\\text{pO}_2$ stimulates EPO release, which increases red blood cell production, raising the blood's oxygen-carrying capacity",
            commonErrors: [
              "Confusing the Bohr effect with acclimatisation — the right shift aids unloading but does not increase oxygen CAPACITY; more RBCs do.",
            ],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-gas-exchange-q11",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A tissue produces $500\\ \\text{mL}$ of CO$_2$ that is carried to the lungs in venous blood. Given that about 70% travels as bicarbonate and about 10% is dissolved in plasma, calculate (a) the volume transported as bicarbonate and (b) the volume dissolved in plasma.",
          response: {
            type: "numeric",
            parts: [
              { label: "a", answer: 350, unit: "mL" },
              { label: "b", answer: 50, unit: "mL" },
            ],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "CO$_2$ transport fractions",
                statement:
                  "~70% as HCO$_3^-$, ~25% as carbaminohaemoglobin, ~10% dissolved.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Bicarbonate fraction: $70\\%$ of $500\\ \\text{mL}$.",
                working: "0.70 \\times 500",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Bicarbonate volume $= 350\\ \\text{mL}$.",
                working: "= 350\\ \\text{mL}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Dissolved fraction: $10\\%$ of $500 = 50\\ \\text{mL}$ (the remaining ~20% travels as carbaminohaemoglobin).",
                working: "0.10 \\times 500 = 50\\ \\text{mL}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) $350\\ \\text{mL}$ as bicarbonate; (b) $50\\ \\text{mL}$ dissolved in plasma",
            commonErrors: [
              "Using 25% for the dissolved fraction — 25% is carbaminohaemoglobin; dissolved is ~10%.",
            ],
            examinerNote: "M1 A1 A1.",
          },
        },
        {
          id: "biohl-u6-gas-exchange-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "What is meant by 'ventilation-perfusion matching' in the lungs?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Every alveolus receives exactly the same amount of air and blood at all times",
              },
              {
                id: "b",
                text: "The heart pumps blood only when the diaphragm contracts",
              },
              {
                id: "c",
                text: "Airflow (ventilation) to each lung region is matched to the blood flow (perfusion) through that region",
              },
              {
                id: "d",
                text: "Oxygen and carbon dioxide diffuse at identical rates",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ventilation-perfusion matching",
                statement:
                  "Local blood flow is matched to local ventilation so well-ventilated alveoli receive more blood flow.",
              },
            ],
            steps: [
              {
                reasoning:
                  "V/Q matching means ventilation and perfusion are coupled region by region — well-ventilated units get more blood.",
                working: "\\dot{V} \\approx \\dot{Q}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This maximises gas exchange efficiency; mismatch (e.g. in COPD) wastes perfusion on unventilated alveoli.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** Airflow (ventilation) to each lung region is matched to the blood flow (perfusion) through that region",
            commonErrors: [
              "Describing it as identical ventilation everywhere — matching is regional, not uniform.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u6-gas-exchange-q13",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "Students investigate haemoglobin's oxygen affinity. They measure the partial pressure of oxygen at which haemoglobin is 50% saturated (p50) in blood samples taken at rest and immediately after intense exercise. The p50 rises from $26.6\\ \\text{mmHg}$ at rest to $30.0\\ \\text{mmHg}$ after exercise.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain what the increase in p50 indicates about haemoglobin's oxygen affinity.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Identify the physiological mechanism responsible for the p50 change and name the effect.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Explain the advantage of this change for exercising muscle.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate one limitation of using p50 as the sole measure of oxygen transport in this experiment.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bohr effect / p50",
                statement:
                  "Higher p50 = lower affinity; exercise acidosis shifts the ODC right, raising p50 and aiding unloading.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "p50 is the $\\text{pO}_2$ needed for 50% saturation — a higher p50 means haemoglobin needs more oxygen to half-saturate, i.e. LOWER affinity.",
                working: "\\text{higher p50} = \\text{lower affinity}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "The curve has effectively shifted right — at any given $\\text{pO}_2$ less oxygen is bound.",
                working: "\\text{right shift}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Exercising muscle produces CO$_2$ and H$^+$, lowering blood pH — the Bohr effect.",
                working: "\\text{Bohr effect}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Low pH/high CO$_2$/high temperature all decrease haemoglobin-oxygen affinity, raising p50.",
                working: "\\text{acidosis}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Lower affinity means haemoglobin releases more O$_2$ at the tissue $\\text{pO}_2$ — matching delivery to the muscle's metabolic demand.",
                working: "\\text{more unloading}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Without the shift, haemoglobin would hold onto oxygen too tightly and tissues would be oxygen-starved despite high blood flow.",
                working: "\\text{demand matching}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "p50 captures only affinity at 50% saturation — it ignores the cooperative shape of the curve and the lungs' loading region.",
                working: "\\text{single-point measure}",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Also, exercise changes temperature, 2,3-BPG and CO$_2$ simultaneously, so p50 alone cannot separate the Bohr effect from other modifiers.",
                working: "\\text{confounded variables}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) higher p50 = lower oxygen affinity = right shift; (b) the Bohr effect — exercise acidosis (high CO$_2$, low pH, heat) decreases affinity; (c) lower affinity releases more O$_2$ to active muscle, matching supply to demand; (d) p50 is a single-point measure that misses curve shape and confounds Bohr effect with temperature/2,3-BPG changes",
            commonErrors: [
              "Saying higher p50 means higher affinity — it is the inverse relationship.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), B1 A1 (d).",
          },
        },
        {
          id: "biohl-u6-gas-exchange-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "By Fick's law, gas diffusion rate is proportional to $1/\\text{thickness}$. If the alveolar membrane thickness decreases from $1.0\\ \\mu\\text{m}$ to $0.5\\ \\mu\\text{m}$ with all other factors constant, and the original rate was $10$ arbitrary units, what is the new rate?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 20, unit: "arbitrary units" }],
          },
          markscheme: {
            principles: [
              {
                kind: "law",
                name: "Fick's law",
                statement:
                  "Rate $\\propto 1/\\text{thickness}$ — halving thickness doubles the rate.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Halving the diffusion distance doubles the rate: $10 \\times (1.0/0.5) = 10 \\times 2$.",
                working: "10 \\times 2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "New rate $= 20$ arbitrary units.",
                working: "= 20",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$20$ arbitrary units",
            commonErrors: [
              "Halving the rate instead — thickness is inverse, so a thinner membrane gives a FASTER rate.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u6-gas-exchange-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "What is the Haldane effect, and how does it complement the Bohr effect during gas transport?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Oxygenated haemoglobin binds CO$_2$ more readily, trapping CO$_2$ in arterial blood",
              },
              {
                id: "b",
                text: "Haemoglobin's oxygen affinity increases as CO$_2$ falls",
              },
              {
                id: "c",
                text: "The Bohr effect describes CO$_2$ transport, not oxygen",
              },
              {
                id: "d",
                text: "Deoxygenated haemoglobin binds CO$_2$ more readily than oxygenated haemoglobin, so CO$_2$ is loaded in tissues and released in the lungs",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Haldane effect",
                statement:
                  "Deoxygenated Hb has higher CO$_2$-carrying capacity (as carbaminohaemoglobin and buffer) than oxygenated Hb.",
              },
            ],
            steps: [
              {
                reasoning:
                  "In tissues, haemoglobin releases O$_2$ (becomes deoxygenated) and its CO$_2$-binding capacity rises — CO$_2$ is picked up.",
                working: "\\text{deoxy-Hb binds CO}_2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "In the lungs, haemoglobin oxygenates and its CO$_2$ affinity falls — CO$_2$ is released for exhalation.",
                working: "\\text{oxy-Hb releases CO}_2",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "This reciprocal relationship complements the Bohr effect: Bohr governs O$_2$ unloading, Haldane governs CO$_2$ loading.",
                working: "\\text{option a}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** Deoxygenated haemoglobin binds CO$_2$ more readily than oxygenated haemoglobin, so CO$_2$ is loaded in tissues and released in the lungs",
            commonErrors: [
              "Reversing the effect — it is DEoxygenated Hb that binds CO$_2$ more strongly.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-gas-exchange-q16",
          difficulty: "challenge",
          paper: "1",
          totalMarks: 2,
          stem: "A blood sample has a p50 of $26.6\\ \\text{mmHg}$ at rest, rising to $30.0\\ \\text{mmHg}$ during exercise. By how much does p50 increase, and what does this indicate about haemoglobin's oxygen affinity?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 3.4, unit: "mmHg" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "p50 and affinity",
                statement:
                  "p50 is the $\\text{pO}_2$ at 50% saturation; a higher p50 means LOWER oxygen affinity (right shift).",
              },
            ],
            steps: [
              {
                reasoning:
                  "The increase is $30.0 - 26.6 = 3.4\\ \\text{mmHg}$.",
                working: "30.0 - 26.6",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "p50 rises by $3.4\\ \\text{mmHg}$ — haemoglobin's oxygen affinity DECREASES (right shift, Bohr effect), aiding unloading to active muscle.",
                working: "= 3.4\\ \\text{mmHg}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "$3.4\\ \\text{mmHg}$ — p50 increases, indicating lower oxygen affinity (right shift)",
            commonErrors: [
              "Interpreting higher p50 as higher affinity — it is inverse: higher p50 = lower affinity.",
            ],
            examinerNote: "M1 A1.",
          },
        },
      ],
    },
    {
      id: "biohl-u6-reproduction-contraception",
      title: "Reproduction and contraception",
      skill:
        "Explain hormonal control of the menstrual cycle and ovulation, and evaluate contraceptive methods by mechanism and effectiveness.",
      lesson: {
        sections: [
          {
            heading: "The menstrual cycle",
            body: "The approximately 28-day cycle is driven by the hypothalamic-pituitary-gonadal axis. **FSH** stimulates follicle development; rising **oestrogen** thickens the endometrium and triggers an **LH surge** around day 14 causing **ovulation**. The ruptured follicle becomes the **corpus luteum**, secreting **progesterone** to maintain the endometrium. If no pregnancy occurs, progesterone falls, the endometrium sheds (menstruation) and the cycle restarts.",
          },
          {
            heading: "Contraceptive methods",
            body: "**Barrier methods** (condoms, diaphragm) block sperm — condoms also prevent STIs but have typical-use failure rates of about 13%. **Hormonal methods** (combined pill, progestogen-only pill, implant, injection) suppress ovulation or thicken cervical mucus — typical-use failure about 7-9% for pills, <1% for implants/IUDs. **Intrauterine devices** (copper IUD, hormonal IUS) prevent implantation/fertilisation — >99% effective. **Surgical** methods (vasectomy, tubal ligation) are permanent. **Behavioural** methods (fertility awareness) have the highest failure rates.",
          },
          {
            heading: "Effectiveness and evaluation",
            body: "Effectiveness is quoted as **perfect use** (method used exactly as directed) versus **typical use** (real-world, including user error) — the gap measures compliance. Long-acting reversible contraceptives (LARCs: IUDs, implants) have the smallest gap because user error is minimal. Choosing a method involves weighing efficacy, STI protection, side effects, reversibility, cost and cultural acceptability — there is no universally 'best' method.",
          },
        ],
        keyFormulas: [
          {
            name: "Menstrual cycle hormones",
            statement:
              "FSH → follicle growth; oestrogen → LH surge; LH → ovulation; progesterone → endometrium",
          },
          {
            name: "Ovulation timing",
            statement:
              "LH surge around day 14 of a 28-day cycle; fertile window about 5 days before to 1 day after",
          },
          {
            name: "Perfect vs typical use",
            statement:
              "Perfect use = method followed exactly; typical use includes human error — LARCs minimise the gap",
          },
        ],
        workedExample: {
          problem:
            "A couple wants reliable contraception for 5 years and is not concerned about STIs. Compare a combined pill versus an IUD in terms of mechanism and real-world effectiveness.",
          solution:
            "The combined pill suppresses ovulation via negative feedback on FSH/LH but has typical-use failure about 7-9% because pills must be taken daily. A hormonal IUS thickens cervical mucus and thins the endometrium with typical-use failure <1% and lasts 3-8 years — better suited to their 5-year, low-maintenance need.",
        },
      },
      questions: [
        {
          id: "biohl-u6-reproduction-contraception-q1",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which hormonal event directly triggers ovulation in the menstrual cycle?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A surge in FSH" },
              { id: "b", text: "A fall in oestrogen" },
              { id: "c", text: "A rise in progesterone" },
              { id: "d", text: "A surge in LH" },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "LH surge",
                statement:
                  "The mid-cycle LH surge (around day 14) triggers ovulation — release of the mature egg from the follicle.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The LH surge is the direct trigger for ovulation; FSH drives earlier follicle development.",
                working: "\\text{LH surge}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Progesterone rises AFTER ovulation from the corpus luteum; oestrogen peaks before the surge.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(d)** A surge in LH",
            commonErrors: [
              "Choosing FSH — FSH stimulates follicle growth earlier; the LH surge is the ovulation trigger.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u6-reproduction-contraception-q2",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "Why do long-acting reversible contraceptives (IUDs, implants) have much smaller gaps between perfect-use and typical-use failure rates than daily pills?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "They are cheaper" },
              {
                id: "b",
                text: "They require no ongoing user action once fitted, eliminating user error",
              },
              { id: "c", text: "They are more effective biologically" },
              { id: "d", text: "They prevent ovulation more completely" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Perfect vs typical use",
                statement:
                  "The gap between perfect and typical use reflects user error; methods needing no daily action minimise it.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Daily pills fail typically when doses are missed — user error drives the perfect/typical gap.",
                working: "\\text{missed doses}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "IUDs and implants work continuously once fitted — there is no daily action to forget, so typical use ≈ perfect use.",
                working: "\\text{no user action}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (b) correctly identifies elimination of user error as the reason.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(b)** They require no ongoing user action once fitted, eliminating user error",
            commonErrors: [
              "Saying the methods are 'more effective' — the biological efficacy is similar; the difference is compliance.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-reproduction-contraception-q3",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "The combined oral contraceptive pill contains oestrogen and progestogen. Its primary contraceptive mechanism is suppression of ovulation via negative feedback on the hypothalamic-pituitary axis. Why does this work?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The hormones kill sperm in the uterus" },
              {
                id: "b",
                text: "The pill prevents fertilisation by blocking the fallopian tubes",
              },
              {
                id: "c",
                text: "Exogenous oestrogen and progestogen maintain high steroid levels, so negative feedback suppresses FSH and LH — no LH surge means no ovulation",
              },
              { id: "d", text: "The pill thickens cervical mucus only" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Negative feedback contraception",
                statement:
                  "Exogenous steroids mimic the post-ovulatory hormone profile, suppressing GnRH/FSH/LH so no LH surge and no ovulation occurs.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The pill maintains high oestrogen/progestogen, which the hypothalamus-pituitary reads as 'already in luteal phase'.",
                working: "\\text{false luteal signal}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Negative feedback suppresses FSH and LH — without the LH surge, ovulation cannot occur.",
                working: "\\text{no LH surge}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Secondary effects (thickened mucus, thinner endometrium) add backup, but ovulation suppression is primary.",
                working: "\\text{backup effects}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (b) correctly describes the negative-feedback mechanism.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** Exogenous oestrogen and progestogen maintain high steroid levels, so negative feedback suppresses FSH and LH — no LH surge means no ovulation",
            commonErrors: [
              "Thinking the pill only blocks sperm — its main effect is hormonal suppression of ovulation.",
            ],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-reproduction-contraception-q4",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 8,
          stem: "A clinic advises a 19-year-old requesting contraception. She wants a method she can forget about, is not in a mutually monogamous relationship, and has no contraindications to hormones. Options discussed: combined pill, progestogen-only pill, copper IUD, implant, condoms.",
          parts: [
            {
              label: "a",
              prompt:
                "Explain which two methods best meet her 'forget about it' requirement and why.",
              marks: 2,
            },
            {
              label: "b",
              prompt:
                "Given her relationship status, which additional method should be recommended alongside the primary choice and why.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Compare the mechanisms of the copper IUD and the hormonal implant.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate the overall recommendation, discussing reversibility, effectiveness and one ethical or practical consideration.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "LARC selection",
                statement:
                  "Long-acting reversible contraceptives (IUD, implant) need no daily action, have <1% typical-use failure and are fully reversible.",
              },
              {
                kind: "definition",
                name: "Dual protection",
                statement:
                  "STI risk requires barrier protection (condoms) alongside hormonal/IUD contraception.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Copper IUD and implant are LARCs — fitted once, effective for years, no daily action needed.",
                working: "\\text{IUD + implant}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "Pills require daily adherence (typical-use failure about 7-9%); condoms must be used every act — neither is 'forgettable'.",
                working: "\\text{pills/condoms daily}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "Because she is not monogamous, STI protection matters — condoms should be added regardless of the primary method.",
                working: "\\text{condoms for STI}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "Only barrier methods prevent STIs; hormonal methods and IUDs do not.",
                working: "\\text{barrier only}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "Copper IUD: copper ions are spermicidal and prevent fertilisation/implantation — non-hormonal.",
                working: "\\text{Cu IUD mechanism}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Implant: progestogen thickens cervical mucus, thins endometrium and suppresses ovulation — hormonal.",
                working: "\\text{implant mechanism}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "Both LARCs are >99% effective and reversible on removal — excellent fit for her 'forget about it' need.",
                working: "\\text{>99\\%, reversible}",
                marks: 1,
                markCode: "R",
              },
              {
                part: "d",
                reasoning:
                  "Considerations: insertion is a clinical procedure (cost, discomfort); implant may cause irregular bleeding initially — counsel on side effects and follow-up.",
                working: "\\text{counselling}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) copper IUD and implant — LARCs need no daily action; (b) add condoms for STI protection since she is not monogamous; (c) copper IUD is non-hormonal spermicidal/anti-implantation while the implant uses progestogen to suppress ovulation and alter cervical mucus; (d) both are >99% effective and reversible — recommend either LARC plus condoms, with counselling on insertion, cost and possible irregular bleeding",
            commonErrors: [
              "Recommending the pill for a 'forgettable' method — daily adherence is exactly what she wants to avoid.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), R1 A1 (d).",
          },
        },
        {
          id: "biohl-u6-reproduction-contraception-q5",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "After ovulation, what structure forms from the ruptured follicle and what hormone does it secrete?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The zona pellucida secretes FSH" },
              { id: "b", text: "The corpus luteum secretes progesterone" },
              { id: "c", text: "The endometrium secretes LH" },
              { id: "d", text: "The corpus luteum secretes oestrogen only" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Corpus luteum",
                statement:
                  "The ruptured follicle becomes the corpus luteum, secreting progesterone (and some oestrogen) to maintain the endometrium.",
              },
            ],
            steps: [
              {
                reasoning:
                  "After ovulation the empty follicle reorganises into the corpus luteum.",
                working: "\\text{follicle} \\to \\text{corpus luteum}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Its key hormone is progesterone, which prepares and maintains the uterine lining for implantation.",
                working: "\\text{progesterone}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(b)** The corpus luteum secretes progesterone",
            commonErrors: [
              "Attributing progesterone to oestrogen-only secretion — the corpus luteum's dominant product is progesterone.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u6-reproduction-contraception-q6",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "In a 28-day menstrual cycle, ovulation occurs on day 14 and the fertile window begins 5 days before ovulation. On which day of the cycle does the fertile window begin?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 9, unit: "day of cycle" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Fertile window",
                statement:
                  "Sperm survive ~5 days, so the fertile window starts about 5 days before ovulation.",
              },
            ],
            steps: [
              {
                reasoning: "Subtract 5 days from the ovulation day.",
                working: "14 - 5",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The fertile window begins on day $9$ of the cycle.",
                working: "= 9",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Day $9$",
            commonErrors: [
              "Adding instead of subtracting — the window opens BEFORE ovulation because sperm persist.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u6-reproduction-contraception-q7",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "What is the role of progesterone during the luteal phase of the menstrual cycle?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It maintains and prepares the endometrium for implantation and, via negative feedback, suppresses further ovulation",
              },
              {
                id: "b",
                text: "It thickens the cervical mucus to block sperm entry",
              },
              { id: "c", text: "It stimulates FSH to develop new follicles" },
              {
                id: "d",
                text: "It triggers the LH surge that causes ovulation",
              },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Progesterone",
                statement:
                  "Secreted by the corpus luteum after ovulation; maintains the secretory endometrium and provides negative feedback on FSH/LH.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Progesterone transforms the endometrium into a secretory lining suitable for embryo implantation.",
                working: "\\text{secretory endometrium}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Its sustained high level inhibits FSH and LH via negative feedback — no new LH surge, so no second ovulation.",
                working: "\\text{negative feedback}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Option (c) captures both roles; the LH surge is driven by oestrogen before ovulation.",
                working: "\\text{option c}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** It maintains and prepares the endometrium for implantation and, via negative feedback, suppresses further ovulation",
            commonErrors: [
              "Attributing the LH surge to progesterone — the surge is triggered by high oestrogen before ovulation.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-reproduction-contraception-q8",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 3,
          stem: "A clinical comparison reports typical-use failure rates of $9$ pregnancies per 100 woman-years for the combined oral contraceptive pill and $0.1$ per 100 woman-years for the contraceptive implant. How many times lower is the implant's typical-use failure rate?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 90, unit: "times" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Typical-use effectiveness",
                statement:
                  "Comparing failure rates quantifies real-world reliability; LARCs have far lower typical-use failure than daily methods.",
              },
            ],
            steps: [
              {
                reasoning: "The ratio of failure rates is $9 \\div 0.1$.",
                working: "9 \\div 0.1",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The implant's failure rate is $90$ times lower.",
                working: "= 90\\ \\text{times}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Answer: $90$ times — reflecting the near-elimination of user error with a LARC.",
                working: "90",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$90$ times lower",
            commonErrors: [
              "Subtracting rates ($8.9$) instead of taking the ratio — 'how many times lower' requires division.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-reproduction-contraception-q9",
          difficulty: "core",
          paper: "2",
          totalMarks: 5,
          stem: "Trace the hormonal control of the menstrual cycle from the start of menstruation to the next menstruation, naming each hormone and its effect.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Menstrual cycle axis",
                statement:
                  "Hypothalamic GnRH → pituitary FSH/LH → ovarian oestrogen/progesterone → endometrial changes; feedback loops coordinate the cycle.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Menstruation begins as progesterone falls and the endometrium sheds; low steroids release the hypothalamic-pituitary brake.",
                working: "\\text{progesterone falls}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "FSH rises and stimulates follicle growth in the ovary; follicles produce oestrogen.",
                working: "\\text{FSH} \\to \\text{follicles}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Rising oestrogen thickens the endometrium (proliferative phase) and, at a critical level, triggers the LH surge.",
                working: "\\text{oestrogen} \\to \\text{LH surge}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "The LH surge causes ovulation around day 14; the corpus luteum then secretes progesterone, converting the endometrium to secretory phase.",
                working: "\\text{LH} \\to \\text{ovulation}",
                marks: 1,
                markCode: "A",
              },
              {
                reasoning:
                  "Without pregnancy, progesterone falls, the endometrium breaks down and menstruation restarts the cycle.",
                working: "\\text{progesterone fall} \\to \\text{menstruation}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Menstruation starts as progesterone falls → FSH rises, stimulating follicle growth → follicles secrete oestrogen, thickening the endometrium → high oestrogen triggers an LH surge → LH causes ovulation around day 14 → the corpus luteum secretes progesterone, preparing the endometrium for implantation → without pregnancy progesterone falls, the lining sheds and the cycle restarts.",
            commonErrors: [
              "Saying FSH triggers ovulation — the LH surge does; FSH acts earlier on follicle development.",
            ],
            examinerNote: "M1 M1 M1 A1 A1.",
          },
        },
        {
          id: "biohl-u6-reproduction-contraception-q10",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 4,
          stem: "A sexually active person with multiple partners wants the most effective pregnancy prevention possible AND protection against sexually transmitted infections. Which recommendation best meets both goals?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "A long-acting reversible contraceptive (implant or IUD) PLUS condoms",
              },
              { id: "b", text: "Fertility awareness methods" },
              { id: "c", text: "A copper IUD alone" },
              { id: "d", text: "The combined oral contraceptive pill alone" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Dual protection",
                statement:
                  "No hormonal or intrauterine method blocks STIs — only barrier methods do; pairing a LARC with condoms covers both risks.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Pregnancy prevention is maximised by a LARC (implant/IUD) with >99% typical-use effectiveness and no daily adherence.",
                working: "\\text{LARC}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "STI protection requires a physical barrier — condoms are the only listed method that blocks STIs.",
                working: "\\text{condoms for STI}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pills and IUDs alone give excellent pregnancy prevention but zero STI protection; fertility awareness has high failure rates for both.",
                working: "\\text{dual protection}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Option (c) correctly combines a LARC with condoms.",
                working: "\\text{option c}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(a)** A long-acting reversible contraceptive (implant or IUD) PLUS condoms",
            commonErrors: [
              "Recommending a hormonal method alone — it prevents pregnancy but not STIs.",
            ],
            examinerNote: "M1 M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-reproduction-contraception-q11",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Emergency contraception with a copper IUD can be inserted up to 5 days (120 hours) after unprotected intercourse. How many hours is the 5-day window?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 120, unit: "hours" }],
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Emergency contraception window",
                statement:
                  "The copper IUD prevents implantation if inserted within about 5 days of unprotected sex.",
              },
            ],
            steps: [
              {
                reasoning: "Convert days to hours: $5 \\times 24$.",
                working: "5 \\times 24",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "The window is $120\\ \\text{hours}$.",
                working: "= 120\\ \\text{h}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "$120\\ \\text{hours}$",
            commonErrors: [
              "Answering 5 — the question asks for hours; multiply by 24.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u6-reproduction-contraception-q12",
          difficulty: "foundation",
          paper: "1",
          totalMarks: 2,
          stem: "Which contraceptive method also protects against sexually transmitted infections?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "The combined oral contraceptive pill" },
              { id: "b", text: "A contraceptive implant" },
              { id: "c", text: "Male or female condoms" },
              { id: "d", text: "A copper IUD" },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Barrier contraception",
                statement:
                  "Only physical barrier methods (condoms, diaphragm) block STI transmission; hormonal and IUD methods act on the reproductive tract only.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Condoms provide a physical barrier to both sperm and pathogens.",
                working: "\\text{physical barrier}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Pills, IUDs and implants prevent pregnancy hormonally or mechanically inside the tract but give no STI protection.",
                working: "\\text{option c}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "**(c)** Male or female condoms",
            commonErrors: [
              "Assuming all contraception prevents STIs — only barrier methods do.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u6-reproduction-contraception-q13",
          difficulty: "challenge",
          paper: "3",
          totalMarks: 8,
          stem: "A fertility clinic tracks hormone levels across a patient's 28-day cycle. Daily urine tests show: LH is low through days 1-12, rises sharply to a peak on day 14, then falls; oestrogen rises gradually to a peak just before day 14 then dips; progesterone stays low until about day 15, then rises to a plateau.",
          parts: [
            {
              label: "a",
              prompt:
                "Identify the day of ovulation and the hormone whose surge triggered it.",
              marks: 2,
            },
            {
              label: "b",
              prompt: "Explain the dip in oestrogen around day 14-15.",
              marks: 2,
            },
            {
              label: "c",
              prompt:
                "Predict what happens to progesterone and oestrogen levels if the patient becomes pregnant, and why.",
              marks: 2,
            },
            {
              label: "d",
              prompt:
                "Evaluate why tracking LH in urine is a practical method for predicting ovulation.",
              marks: 2,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Ovulation and corpus luteum",
                statement:
                  "LH surge triggers ovulation; the corpus luteum then raises progesterone; in pregnancy hCG rescues the corpus luteum.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning:
                  "Ovulation occurs on day 14, triggered by the LH surge — LH is the direct trigger.",
                working: "\\text{day 14, LH surge}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning:
                  "FSH drove earlier follicle growth; the LH peak is what ruptures the follicle.",
                working: "\\text{LH} \\to \\text{ovulation}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning:
                  "The dominant follicle that produced oestrogen has ruptured at ovulation, so oestrogen dips temporarily.",
                working: "\\text{follicle ruptured}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning:
                  "The corpus luteum then takes over, producing progesterone (and some oestrogen) — hence the progesterone rise from day 15.",
                working: "\\text{corpus luteum}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning:
                  "If pregnant, hCG from the embryo rescues the corpus luteum, so progesterone stays HIGH instead of falling.",
                working: "\\text{hCG rescues CL}",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning:
                  "Progesterone maintains the endometrium; oestrogen also stays elevated — no menstruation occurs.",
                working: "\\text{no menstruation}",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning:
                  "LH appears in urine days before ovulation, so home tests predict the fertile window — cheap, non-invasive, real-time.",
                working: "\\text{urine LH test}",
                marks: 1,
                markCode: "B",
              },
              {
                part: "d",
                reasoning:
                  "Limitations: surge timing varies between cycles and individuals, and the test shows the surge not ovulation itself — timing is approximate.",
                working: "\\text{cycle variability}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) day 14, triggered by the LH surge; (b) the oestrogen-producing follicle ruptured, causing a temporary dip while the corpus luteum takes over progesterone production; (c) hCG rescues the corpus luteum so progesterone (and oestrogen) stay high, maintaining the endometrium and preventing menstruation; (d) urine LH tests are cheap, non-invasive and predictive, but the surge-to-ovulation interval varies so timing is approximate",
            commonErrors: [
              "Saying progesterone rises before ovulation — it rises AFTER, from the corpus luteum.",
            ],
            examinerNote: "M1 A1 (a), M1 A1 (b), M1 A1 (c), B1 A1 (d).",
          },
        },
        {
          id: "biohl-u6-reproduction-contraception-q14",
          difficulty: "core",
          paper: "1",
          totalMarks: 2,
          stem: "A woman's average menstrual cycle is 30 days long, and ovulation occurs about 14 days before the start of the next period. On which day of her cycle does ovulation typically occur?",
          response: {
            type: "numeric",
            parts: [{ label: "a", answer: 16, unit: "day of cycle" }],
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Luteal phase constancy",
                statement:
                  "The luteal phase (ovulation to next period) is about 14 days regardless of cycle length.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Ovulation day = cycle length minus the ~14-day luteal phase: $30 - 14$.",
                working: "30 - 14",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Ovulation occurs on day $16$ of a 30-day cycle.",
                working: "= 16",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Day $16$",
            commonErrors: [
              "Assuming ovulation is always day 14 — in longer cycles it shifts later because the luteal phase is fixed.",
            ],
            examinerNote: "M1 A1.",
          },
        },
        {
          id: "biohl-u6-reproduction-contraception-q15",
          difficulty: "core",
          paper: "2",
          totalMarks: 3,
          stem: "How does a vasectomy prevent pregnancy, and why is it described as permanent even though surgical reversal is sometimes possible?",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "It blocks the urethra so semen cannot be ejaculated",
              },
              {
                id: "b",
                text: "It removes the testes, making reversal impossible",
              },
              {
                id: "c",
                text: "It blocks the vas deferens so sperm cannot enter the semen; reversal is unreliable because the cut ends scar and may not rejoin successfully",
              },
              {
                id: "d",
                text: "It suppresses testosterone so no sperm are produced",
              },
            ],
            correctChoiceId: "c",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Vasectomy",
                statement:
                  "Surgical cutting/sealing of the vas deferens prevents sperm entering semen; recanalisation is possible but success rates are low.",
              },
            ],
            steps: [
              {
                reasoning:
                  "The vas deferens carries sperm from testes to urethra — cutting it blocks sperm transport while leaving hormones and ejaculation intact.",
                working: "\\text{vas deferens cut}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Semen is still ejaculated but contains no sperm — contraception without hormonal effects.",
                working: "\\text{sperm-free semen}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Reversal (vasovasostomy) is technically possible but success is not guaranteed — hence classified as permanent.",
                working: "\\text{option a}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(c)** It blocks the vas deferens so sperm cannot enter the semen; reversal is unreliable because the cut ends scar and may not rejoin successfully",
            commonErrors: [
              "Saying it stops ejaculation — ejaculation continues; only sperm are absent.",
            ],
            examinerNote: "M1 M1 A1.",
          },
        },
        {
          id: "biohl-u6-reproduction-contraception-q16",
          difficulty: "challenge",
          paper: "2",
          totalMarks: 2,
          stem: "Which is a recognised health consideration when prescribing combined hormonal contraception (pill, patch or ring)?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "It eliminates all risk of blood clots" },
              {
                id: "b",
                text: "It prevents ovulation only in the first month of use",
              },
              {
                id: "c",
                text: "It permanently suppresses fertility after stopping",
              },
              {
                id: "d",
                text: "It slightly increases the risk of venous thromboembolism (blood clots), so contraindications such as smoking over age 35 or history of clots must be screened for",
              },
            ],
            correctChoiceId: "d",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Combined hormonal contraception risks",
                statement:
                  "Estrogen-containing methods slightly raise VTE risk; screening for contraindications (smoking, migraine with aura, clot history) is required.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Combined methods contain oestrogen, which increases clotting risk modestly — a recognised adverse effect.",
                working: "\\text{VTE risk}",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Fertility returns after stopping; ovulation is suppressed throughout use, not just the first month.",
                working: "\\text{option b}",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "**(d)** It slightly increases the risk of venous thromboembolism (blood clots), so contraindications such as smoking over age 35 or history of clots must be screened for",
            commonErrors: [
              "Claiming fertility is permanently affected — suppression is reversible after stopping the method.",
            ],
            examinerNote: "M1 A1.",
          },
        },
      ],
    },
  ],
};
