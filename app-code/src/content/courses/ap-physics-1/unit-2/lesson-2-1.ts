import type { Lesson } from "../../../types.ts";

export const lesson21: Lesson = {
  id: "app1-u2-lesson-2-1",
  code: "2-1",
  title: "Work and Energy",
  goal: "I CAN apply work-energy theorem and conservation of mechanical energy.",
  standards: ["ENG-1"],
  vocabulary: [
    { term: "Work", definition: "$W = Fd\\cos\\theta$ — energy transferred by force over displacement." },
    { term: "Kinetic energy", definition: "$KE = \\frac{1}{2}mv^2$ — energy of motion." },
    { term: "Potential energy", definition: "Stored energy: gravitational $mgh$, elastic $\\frac{1}{2}kx^2$." },
    { term: "Mechanical energy", definition: "$E = KE + PE$ — conserved without friction." },
    { term: "Work-energy theorem", definition: "$W_{net} = \\Delta KE$." },
  ],
  concepts: [
    {
      id: "app1-u2-work-energy",
      title: "Work and energy",
      skill: "Compute work, energy changes, and apply conservation.",
      lesson: {
        sections: [
          {
            heading: "Work and energy forms",
            body: "Work transfers energy: $W = Fd\\cos\\theta$ (only the force component along displacement counts). Kinetic energy $KE = \\frac{1}{2}mv^2$; gravitational PE $= mgh$; spring PE $= \\frac{1}{2}kx^2$. With no friction, $KE + PE$ is conserved — it converts between forms.",
          },
          {
            heading: "Work-energy theorem",
            body: "$W_{net} = \\Delta KE$ — net work equals kinetic energy change. Useful when forces are non-conservative. With friction, mechanical energy isn't conserved: $E_{mech,f} = E_{mech,i} - W_{friction}$. Power $= \\frac{W}{t} = Fv$.",
          },
        ],
        keyFormulas: [
          { name: "Work", statement: "$W = Fd\\cos\\theta$" },
          { name: "Kinetic energy", statement: "$KE = \\frac{1}{2}mv^2$" },
          { name: "Conservation", statement: "$KE_i + PE_i = KE_f + PE_f$ (no friction)" },
        ],
        workedExample: {
          problem: "2 kg object falls from $10$ m. Speed at bottom? ($g = 9.8$)",
          solution: "Conservation: $mgh = \\frac{1}{2}mv^2 \\Rightarrow v = \\sqrt{2gh} = \\sqrt{2 \\times 9.8 \\times 10} = \\sqrt{196} = 14$ m/s.",
        },
      },
      questions: [
        {
          id: "app1-u2-work-energy-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Work is done by a force only when ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "the force exists"
                    },
                    {
                              "id": "b",
                              "text": "there is displacement in the force's direction"
                    },
                    {
                              "id": "c",
                              "text": "the object is heavy"
                    },
                    {
                              "id": "d",
                              "text": "time passes"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Work",
                              "statement": "$W = Fd\\cos\\theta$ — needs displacement component along force."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "No displacement means no work — holding a weight stationary does zero work.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "(b)",
          "commonErrors": [
                    "Thinking any force does work regardless of motion."
          ]
},
        },
        {
          id: "app1-u2-work-energy-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A $4$ kg object moves at $3$ m/s. Its kinetic energy is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$12$ J"
                    },
                    {
                              "id": "b",
                              "text": "$18$ J"
                    },
                    {
                              "id": "c",
                              "text": "$36$ J"
                    },
                    {
                              "id": "d",
                              "text": "$6$ J"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "$KE = \\frac{1}{2}mv^2$",
                              "statement": "$"
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$KE = \\frac{1}{2}(4)(9) = 18$ J.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$18$ J",
          "commonErrors": [
                    "Using $mv^2$ without the $\\frac{1}{2}$ or squaring wrong."
          ]
},
        },
        {
          id: "app1-u2-work-energy-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A $0.5$ kg ball is dropped from $20$ m. Find speed just before impact. Enter m/s.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$v$",
                              "answer": 19.8,
                              "tolerance": 0.1
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Conservation",
                              "statement": "$v = \\sqrt{2gh} = \\sqrt{2 \\times 9.8 \\times 20}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$v = \\sqrt{392} \\approx 19.8$ m/s.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$\\approx 19.8$ m/s.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$19.8$ m/s",
          "commonErrors": [
                    "Including mass or using $gh$ without the factor of 2."
          ]
},
        },
        {
          id: "app1-u2-work-energy-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain the work-energy theorem and use it to find the stopping distance of a $1000$ kg car moving at $20$ m/s with friction force $5000$ N.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Work-energy",
                              "statement": "$W_{net} = \\Delta KE = -KE_i$ for stopping."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Work-energy theorem: net work equals change in kinetic energy — friction does negative work removing KE.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$W = -F_f d = -\\Delta KE = -\\frac{1}{2}mv^2 = -\\frac{1}{2}(1000)(400) = -200{,}000$ J.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$d = \\frac{200{,}000}{5000} = 40$ m stopping distance.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$40$ m",
          "commonErrors": [
                    "Using final KE instead of initial or dropping the negative sign."
          ]
},
        },
      ],
    },
  ],
};
