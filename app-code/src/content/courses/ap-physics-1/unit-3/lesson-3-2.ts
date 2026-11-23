import type { Lesson } from "../../../types.ts";

export const lesson32: Lesson = {
  id: "app1-u3-lesson-3-2",
  code: "3-2",
  title: "Electrostatics and Circuits",
  goal: "I CAN apply Coulomb's law and analyze DC circuits.",
  standards: ["ELC-1"],
  vocabulary: [
    { term: "Charge", definition: "Fundamental property; $+/-$; measured in coulombs (C)." },
    { term: "Coulomb's law", definition: "$F = k\\frac{|q_1 q_2|}{r^2}$ — inverse-square electrostatic force." },
    { term: "Electric field", definition: "$\\vec{E} = \\frac{F}{q}$ — force per unit charge; $E = k\\frac{q}{r^2}$ for point charge." },
    { term: "Current", definition: "$I = \\frac{Q}{t} = \\frac{\\Delta q}{\\Delta t}$ — charge flow rate (amperes)." },
    { term: "Ohm's law", definition: "$V = IR$ — voltage = current $\\times$ resistance." },
    { term: "Series circuit", definition: "Same current through all; voltages add." },
    { term: "Parallel circuit", definition: "Same voltage across all; currents add." },
  ],
  concepts: [
    {
      id: "app1-u3-electrostatics-circuits",
      title: "Electrostatics and circuits",
      skill: "Compute electrostatic forces and analyze circuit behavior.",
      lesson: {
        sections: [
          {
            heading: "Electrostatics",
            body: "Coulomb's law $F = k\\frac{|q_1q_2|}{r^2}$ gives force between point charges — like charges repel, opposites attract, force drops with $r^2$. Electric field $E = \\frac{F}{q_{test}}$ describes force per charge at each point — field lines point away from positive charges.",
          },
          {
            heading: "Circuits",
            body: "Current $I = \\frac{Q}{t}$ flows when there's a potential difference. **Ohm's law** $V = IR$ relates voltage, current, resistance. **Series**: same $I$ everywhere, $R_{total} = R_1 + R_2 + \\cdots$, voltages split. **Parallel**: same $V$ across branches, $\\frac{1}{R_{total}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\cdots$, currents split. Power $P = VI = I^2R = \\frac{V^2}{R}$.",
          },
        ],
        keyFormulas: [
          { name: "Coulomb's law", statement: "$F = k\\frac{|q_1 q_2|}{r^2}$" },
          { name: "Ohm's law", statement: "$V = IR$" },
          { name: "Series R", statement: "$R_{tot} = R_1 + R_2 + \\cdots$" },
          { name: "Parallel R", statement: "$\\frac{1}{R_{tot}} = \\sum \\frac{1}{R_i}$" },
        ],
        workedExample: {
          problem: "Two $6$ $\\Omega$ resistors in parallel across $12$ V. Total resistance and current?",
          solution: "$\\frac{1}{R} = \\frac{1}{6} + \\frac{1}{6} = \\frac{1}{3}$, so $R = 3$ $\\Omega$. $I = \\frac{V}{R} = \\frac{12}{3} = 4$ A.",
        },
      },
      questions: [
        {
          id: "app1-u3-electrostatics-circuits-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Like charges ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "attract"
                    },
                    {
                              "id": "b",
                              "text": "repel"
                    },
                    {
                              "id": "c",
                              "text": "neutralize"
                    },
                    {
                              "id": "d",
                              "text": "create current"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Coulomb",
                              "statement": "Like charges repel; opposites attract."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Same-sign charges exert repulsive forces on each other.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Repel",
          "commonErrors": [
                    "Reversing the charge interaction rule."
          ]
},
        },
        {
          id: "app1-u3-electrostatics-circuits-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Two $4$ $\\Omega$ resistors in series have total resistance ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$2$ $\\Omega$"
                    },
                    {
                              "id": "b",
                              "text": "$4$ $\\Omega$"
                    },
                    {
                              "id": "c",
                              "text": "$8$ $\\Omega$"
                    },
                    {
                              "id": "d",
                              "text": "$16$ $\\Omega$"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Series",
                              "statement": "$R_{tot} = R_1 + R_2$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$4 + 4 = 8$ $\\Omega$.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$8$ $\\Omega$",
          "commonErrors": [
                    "Using parallel formula for series resistors."
          ]
},
        },
        {
          id: "app1-u3-electrostatics-circuits-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $12$ V battery connects to a $3$ $\\Omega$ resistor. Find the current. Enter amperes.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$I$",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Ohm's law",
                              "statement": "$I = V/R = 12/3$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$I = 4$ A.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$I = 4$ A.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$4$ A",
          "commonErrors": [
                    "Inverting the formula to $V \\times R$."
          ]
},
        },
        {
          id: "app1-u3-electrostatics-circuits-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Compare series and parallel circuits for total resistance, current distribution, and what happens if one component fails.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Series",
                              "statement": "Same current; resistances add; one break kills all."
                    },
                    {
                              "kind": "concept",
                              "name": "Parallel",
                              "statement": "Same voltage; conductances add; independent branches."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Series: same current through all, $R_{tot} = \\sum R$ (larger than any single), voltages add, one open break stops everything.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Parallel: same voltage across all, $\\frac{1}{R_{tot}} = \\sum \\frac{1}{R}$ (smaller than smallest), currents add by branch, other branches keep working if one fails.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Parallel is why homes use it — independent circuits and lower total resistance.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Series = same I/R adds/break kills; parallel = same V/G adds/independent",
          "commonErrors": [
                    "Swapping series and parallel properties."
          ]
},
        },
      ],
    },
  ],
};
