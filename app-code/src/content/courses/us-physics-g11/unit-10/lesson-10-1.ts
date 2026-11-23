import type { Lesson } from "../../../types.ts";

export const lesson101: Lesson = {
  id: "phys11-u10-lesson-10-1",
  code: "10-1",
  title: "Electric Charge and Coulomb's Law",
  goal: "I CAN analyze electric charges, Coulomb's law, and electrostatic phenomena.",
  standards: [
    "HS-PS2-5",
    "HS-PS3-5",
    "SEP: Developing and Using Models",
    "SEP: Using Mathematics and Computational Thinking",
  ],
  vocabulary: [
    {
      term: "Electric charge",
      definition: "Property causing electrostatic force.",
    },
    { term: "Proton", definition: "Positive charge carrier." },
    { term: "Electron", definition: "Negative charge carrier." },
    {
      term: "Coulomb",
      definition: "Unit of charge: 1 C = 6.24×10¹⁸ electrons.",
    },
    { term: "Coulomb's law", definition: "F = kq₁q₂/r²." },
    { term: "Electrostatic force", definition: "Force between charges." },
    { term: "Conservation of charge", definition: "Total charge constant." },
  ],
  concepts: [
    {
      id: "phys11-u10-charge",
      title: "Electric charge",
      skill: "Understand charge properties and interactions.",
      lesson: {
        sections: [
          {
            heading: "Charge properties",
            body: "- **Like charges repel; opposite attract.**\n- Charge quantized: q = ne (e = 1.6×10⁻¹⁹ C).\n- Charge conserved.\n- Conductors: charges move freely; insulators: fixed.",
          },
          {
            heading: "Charging methods",
            body: "- **Friction**: transfer electrons (rubber + fur).\n- **Conduction**: contact transfer.\n- **Induction**: charge redistribution without contact.",
          },
        ],
        keyFormulas: [
          { name: "Like charges", statement: "Repel" },
          { name: "Opposite charges", statement: "Attract" },
          { name: "Charge quantum", statement: "$e = 1.6×10^{-19}$ C" },
        ],
        workedExample: {
          problem: "Two positive charges brought together. What happens?",
          solution: "They repel each other.",
        },
      },
      questions: [
        {
          id: "phys11-u10-charge-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What happens when two positive charges are brought together?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Attract" },
              { id: "b", text: "Repel" },
              { id: "c", text: "Cancel" },
              { id: "d", text: "Nothing" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Charge",
                statement: "Like charges repel.",
              },
            ],
            steps: [
              { reasoning: "Like charges repel.", marks: 1, markCode: "B" },
            ],
            finalAnswer: "**(b)** Repel",
            commonErrors: ["Attract."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u10-charge-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How many electrons in 1 coulomb of charge?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Charge",
                statement: "$N = 1/(1.6×10^{-19})$",
              },
            ],
            steps: [
              { reasoning: "$N = 1/1.6×10^{-19}$.", marks: 1, markCode: "M" },
              { reasoning: "= 6.25×10¹⁸ electrons.", marks: 1, markCode: "M" },
              { reasoning: "Answer: ~6.25×10¹⁸.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "6.25×10¹⁸ electrons.",
            commonErrors: ["Wrong calculation."],
            examinerNote: "M2, A1.",
          },
        },
        {
          id: "phys11-u10-charge-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain charging by induction.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Induction",
                statement: "Charge redistribution without contact.",
              },
            ],
            steps: [
              {
                reasoning: "Bring charged object near neutral object.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Charges redistribute in neutral object.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Separate → net charge without contact.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: redistribution + separation.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Charge redistribution without contact.",
            commonErrors: ["Contact required."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u10-charge-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Balloon rubbed on hair becomes negatively charged.",
          parts: [
            { label: "a", prompt: "What transferred?", marks: 2 },
            { label: "b", prompt: "Why does it stick to wall?", marks: 3 },
            { label: "c", prompt: "What happens to hair?", marks: 2 },
            { label: "d", prompt: "Charge conservation?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Charging",
                statement: "Electron transfer; induction.",
              },
            ],
            steps: [
              {
                reasoning: "Electrons transferred from hair to balloon.",
                marks: 2,
                markCode: "R",
                part: "a",
              },
              {
                reasoning: "Negative balloon induces positive charge on wall.",
                marks: 2,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Opposite charges attract → sticks.",
                marks: 1,
                markCode: "R",
                part: "b",
              },
              {
                reasoning: "Hair loses electrons → positive.",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning:
                  "Total charge conserved: balloon negative + hair positive = 0.",
                marks: 2,
                markCode: "R",
                part: "d",
              },
              {
                reasoning: "Answer: charge conserved.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) electrons (b) induction+attraction (c) positive (d) conserved.",
            commonErrors: ["Charge created."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u10-coulomb",
      title: "Coulomb's law",
      skill: "Apply Coulomb's law to calculate electrostatic forces.",
      lesson: {
        sections: [
          {
            heading: "Coulomb's law",
            body: "$$F = \\frac{kq_1q_2}{r^2}$$\n\nk = 9×10⁹ N·m²/C². Force decreases with distance squared.",
          },
          {
            heading: "Inverse square law",
            body: "Double distance → quarter force.\nTriple distance → 1/9 force.",
          },
        ],
        keyFormulas: [
          { name: "Coulomb's law", statement: "$F = kq_1q_2/r^2$" },
          { name: "k", statement: "9×10⁹ N·m²/C²" },
          { name: "Inverse square", statement: "F ∝ 1/r²" },
        ],
        workedExample: {
          problem: "Two 1 μC charges 1 m apart. Force?",
          solution: "$F = (9×10^9)(10^{-6})(10^{-6})/(1^2) = 9$ N.",
        },
      },
      questions: [
        {
          id: "phys11-u10-coulomb-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is Coulomb's law?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "F = ma" },
              { id: "b", text: "F = kq₁q₂/r²" },
              { id: "c", text: "F = mv" },
              { id: "d", text: "F = mg" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Coulomb's law",
                statement: "$F = kq_1q_2/r^2$.",
              },
            ],
            steps: [{ reasoning: "F = kq₁q₂/r².", marks: 1, markCode: "B" }],
            finalAnswer: "**(b)** F = kq₁q₂/r²",
            commonErrors: ["F = ma."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u10-coulomb-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "If distance triples, what happens to electrostatic force?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Inverse square",
                statement: "F ∝ 1/r².",
              },
            ],
            steps: [
              { reasoning: "$F \\propto 1/r^2$.", marks: 1, markCode: "R" },
              {
                reasoning: "Triple r → 3² = 9 → F/9.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Answer: force becomes 1/9.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Force becomes 1/9.",
            commonErrors: ["Becomes 1/3."],
            examinerNote: "R1, M1, A1.",
          },
        },
        {
          id: "phys11-u10-coulomb-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Two charges: q₁ = 2 μC, q₂ = 3 μC, r = 0.5 m. Force?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Coulomb's law",
                statement: "$F = kq_1q_2/r^2$",
              },
            ],
            steps: [
              {
                reasoning: "$F = (9×10^9)(2×10^{-6})(3×10^{-6})/(0.5^2)$.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "= (9×10^9)(6×10^{-12})/0.25 = 54×10^{-3}/0.25 = 0.216$ N.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "= 0.216 N.", marks: 1, markCode: "M" },
              { reasoning: "Answer: 0.216 N.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "0.216 N.",
            commonErrors: ["Wrong units."],
            examinerNote: "M3, A1.",
          },
        },
        {
          id: "phys11-u10-coulomb-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Three charges on x-axis: q₁ = +2 μC at x=0, q₂ = −3 μC at x=1m, q₃ = +1 μC at x=3m.",
          parts: [
            { label: "a", prompt: "Force on q₁ from q₂?", marks: 3 },
            { label: "b", prompt: "Force on q₁ from q₃?", marks: 3 },
            { label: "c", prompt: "Net force on q₁?", marks: 2 },
            { label: "d", prompt: "Direction of net force?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Coulomb's law",
                statement: "$F = kq_1q_2/r^2$; vector addition.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$F_{12} = (9×10^9)(2×10^{-6})(3×10^{-6})/(1^2) = 54×10^{-3} = 0.054$ N attractive (right).",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: 0.054 N right.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning:
                  "$F_{13} = (9×10^9)(2×10^{-6})(1×10^{-6})/(3^2) = 18×10^{-3}/9 = 2×10^{-3} = 0.002$ N repulsive (left).",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 0.002 N left.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning: "$F_{net} = 0.054 - 0.002 = 0.052$ N right.",
                marks: 2,
                markCode: "M",
                part: "c",
              },
              {
                reasoning: "Answer: 0.052 N right.",
                marks: 2,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer:
              "(a) 0.054N right (b) 0.002N left (c) 0.052N (d) right.",
            commonErrors: ["Wrong signs."],
            examinerNote: "3+3+2+2 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u10-fields",
      title: "Electric fields",
      skill: "Analyze electric fields and their effects.",
      lesson: {
        sections: [
          {
            heading: "Electric field",
            body: "$$E = \\frac{F}{q} = \\frac{kq}{r^2}$$\n\nField lines point away from positive, toward negative.",
          },
          {
            heading: "Field properties",
            body: "- Point charge: radial field.\n- Dipole: field lines from + to −.\n- Uniform field: parallel lines (capacitor).",
          },
        ],
        keyFormulas: [
          { name: "Electric field", statement: "$E = F/q = kq/r^2$" },
          { name: "Field lines", statement: "+ → −" },
          { name: "Units", statement: "N/C or V/m" },
        ],
        workedExample: {
          problem: "Point charge 1 μC creates field at 1 m. E?",
          solution: "$E = (9×10^9)(10^{-6})/(1^2) = 9000$ N/C.",
        },
      },
      questions: [
        {
          id: "phys11-u10-fields-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is electric field?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "F/q" },
              { id: "b", text: "F×q" },
              { id: "c", text: "q/F" },
              { id: "d", text: "F/q²" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "formula", name: "E field", statement: "$E = F/q$." },
            ],
            steps: [{ reasoning: "E = F/q.", marks: 1, markCode: "B" }],
            finalAnswer: "**(a)** F/q",
            commonErrors: ["F×q."],
            examinerNote: "B1 for (a).",
          },
        },
        {
          id: "phys11-u10-fields-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "Where do electric field lines point?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Field lines",
                statement: "Away from +, toward −.",
              },
            ],
            steps: [
              {
                reasoning: "Positive charge: lines point away.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Negative charge: lines point toward.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Answer: + → −.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Away from positive, toward negative.",
            commonErrors: ["Wrong direction."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u10-fields-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "How does electric field strength vary with distance?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "E = kq/r²",
                statement: "Inverse square law.",
              },
            ],
            steps: [
              { reasoning: "$E = kq/r^2$.", marks: 1, markCode: "M" },
              {
                reasoning: "Double distance → quarter field.",
                marks: 1,
                markCode: "R",
              },
              { reasoning: "Same as Coulomb's law.", marks: 1, markCode: "R" },
              { reasoning: "Answer: E ∝ 1/r².", marks: 1, markCode: "A" },
            ],
            finalAnswer: "E decreases with distance squared.",
            commonErrors: ["Linear decrease."],
            examinerNote: "M1, R2, A1.",
          },
        },
        {
          id: "phys11-u10-fields-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Charge +2 μC at origin. Find E at (3m, 4m) — distance 5m.",
          parts: [
            { label: "a", prompt: "Distance from charge?", marks: 2 },
            { label: "b", prompt: "Field magnitude?", marks: 3 },
            { label: "c", prompt: "Field direction?", marks: 2 },
            { label: "d", prompt: "Force on +1 μC test charge?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "E field",
                statement: "$E = kq/r^2$; $F = qE$.",
              },
            ],
            steps: [
              {
                reasoning: "$r = \\sqrt{3^2 + 4^2} = 5$ m.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning:
                  "$E = (9×10^9)(2×10^{-6})/(5^2) = 18×10^3/25 = 720$ N/C.",
                marks: 2,
                markCode: "M",
                part: "b",
              },
              {
                reasoning: "Answer: 720 N/C.",
                marks: 1,
                markCode: "A",
                part: "b",
              },
              {
                reasoning:
                  "Direction: away from positive charge (toward (3,4)).",
                marks: 2,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "$F = qE = (10^{-6})(720) = 7.2×10^{-4}$ N.",
                marks: 2,
                markCode: "M",
                part: "d",
              },
              {
                reasoning: "Answer: 7.2×10⁻⁴ N.",
                marks: 1,
                markCode: "A",
                part: "d",
              },
            ],
            finalAnswer: "(a) 5m (b) 720N/C (c) away from + (d) 7.2×10⁻⁴N.",
            commonErrors: ["Wrong distance."],
            examinerNote: "2+3+2+3 = 10.",
          },
        },
      ],
    },
    {
      id: "phys11-u10-capstone",
      title: "Electrostatics capstone",
      skill: "Integrate charge, Coulomb's law, and field concepts.",
      lesson: {
        sections: [
          {
            heading: "Electrostatics integration",
            body: "1. Identify charges and configuration.\n2. Apply Coulomb's law for forces.\n3. Calculate field strengths.\n4. Determine net effects.",
          },
          {
            heading: "Real-world applications",
            body: "- Van de Graaff generator.\n- Lightning.\n- Photocopiers.\n- Electrostatic precipitators.",
          },
        ],
        keyFormulas: [
          { name: "Integration", statement: "Forces + fields" },
          { name: "Applications", statement: "Real-world electrostatics" },
        ],
        workedExample: {
          problem: "Two charges +3 μC and −2 μC at 0.5 m. Force and field?",
          solution:
            "$F = (9×10^9)(3×10^{-6})(2×10^{-6})/(0.25) = 0.216$ N attractive.",
        },
      },
      questions: [
        {
          id: "phys11-u10-cap-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What's the first step in electrostatics problems?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Calculate immediately" },
              { id: "b", text: "Identify charges" },
              { id: "c", text: "Guess answer" },
              { id: "d", text: "Check units" },
            ],
            correctChoiceId: "b",
          },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Problem solving",
                statement: "Identify charges first.",
              },
            ],
            steps: [
              {
                reasoning: "Identify charges before calculating.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(b)** Identify charges",
            commonErrors: ["Jumping to calculation."],
            examinerNote: "B1 for (b).",
          },
        },
        {
          id: "phys11-u10-cap-q2",
          difficulty: "core",
          totalMarks: 3,
          stem: "How does a photocopier use electrostatics?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Photocopier",
                statement: "Electrostatic attraction of toner.",
              },
            ],
            steps: [
              {
                reasoning: "Drum charged with light pattern.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Toner attracted to charged areas.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: electrostatic attraction.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Electrostatic attraction of toner.",
            commonErrors: ["Magnetic."],
            examinerNote: "R2, A1.",
          },
        },
        {
          id: "phys11-u10-cap-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Why does lightning occur?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "property",
                name: "Lightning",
                statement: "Charge buildup → discharge.",
              },
            ],
            steps: [
              {
                reasoning: "Clouds accumulate charge (friction).",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Charge difference builds.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Discharge when voltage exceeds threshold.",
                marks: 1,
                markCode: "R",
              },
              {
                reasoning: "Answer: charge buildup → discharge.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Charge buildup → discharge.",
            commonErrors: ["Random occurrence."],
            examinerNote: "R3, A1.",
          },
        },
        {
          id: "phys11-u10-cap-q4",
          difficulty: "challenge",
          totalMarks: 10,
          stem: "Three charges form equilateral triangle: each 1 μC, side 0.1 m.",
          parts: [
            { label: "a", prompt: "Force between any two?", marks: 3 },
            { label: "b", prompt: "Net force on each charge?", marks: 4 },
            { label: "c", prompt: "Direction of net force?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "formula",
                name: "Coulomb's law",
                statement: "$F = kq^2/r^2$; symmetry.",
              },
            ],
            steps: [
              {
                reasoning:
                  "$F = (9×10^9)(10^{-6})^2/(0.1^2) = 9×10^{-3}/0.01 = 0.9$ N.",
                marks: 2,
                markCode: "M",
                part: "a",
              },
              {
                reasoning: "Answer: 0.9 N.",
                marks: 1,
                markCode: "A",
                part: "a",
              },
              {
                reasoning: "By symmetry, net force = 0 (equilateral triangle).",
                marks: 3,
                markCode: "R",
                part: "b",
              },
              { reasoning: "Answer: 0 N.", marks: 1, markCode: "A", part: "b" },
              {
                reasoning: "No direction — forces cancel.",
                marks: 3,
                markCode: "R",
                part: "c",
              },
              {
                reasoning: "Answer: undefined (zero force).",
                marks: 1,
                markCode: "A",
                part: "c",
              },
            ],
            finalAnswer: "(a) 0.9N (b) 0N (c) undefined.",
            commonErrors: ["Ignoring symmetry."],
            examinerNote: "3+4+3 = 10.",
          },
        },
      ],
    },
  ],
};
