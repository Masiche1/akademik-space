import type { Lesson } from "../../../types.ts";

export const lesson31: Lesson = {
  id: "app2-u3-lesson-3-1",
  code: "3-1",
  title: "Geometric Optics",
  goal: "I CAN apply reflection, refraction, and lens equations.",
  standards: ["OPT-1"],
  vocabulary: [
    { term: "Law of reflection", definition: "Angle of incidence = angle of reflection, measured from normal." },
    { term: "Refraction", definition: "Bending of light crossing media; $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$ (Snell's law)." },
    { term: "Index of refraction", definition: "$n = \\frac{c}{v}$ — measures optical density." },
    { term: "Thin lens equation", definition: "$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$ — focal length, object/image distances." },
    { term: "Magnification", definition: "$m = -\\frac{d_i}{d_o} = \\frac{h_i}{h_o}$ — negative = inverted." },
  ],
  concepts: [
    {
      id: "app2-u3-geometric-optics",
      title: "Geometric optics",
      skill: "Apply reflection, refraction, and lens formulas.",
      lesson: {
        sections: [
          {
            heading: "Reflection and refraction",
            body: "Light reflects at angle $=$ incidence (from normal). Crossing into a denser medium ($n_2 > n_1$), light bends TOWARD the normal — **Snell's law** $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$. Beyond the critical angle, total internal reflection traps light — the basis of fiber optics.",
          },
          {
            heading: "Lenses",
            body: "Convex (converging) lenses focus parallel rays to a real focal point; concave (diverging) spread them. Thin lens equation $\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$ with sign conventions (real images positive). Magnification $m = -d_i/d_o$ — negative means inverted.",
          },
        ],
        keyFormulas: [
          { name: "Snell's law", statement: "$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$" },
          { name: "Thin lens", statement: "$\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}$" },
          { name: "Magnification", statement: "$m = -\\frac{d_i}{d_o}$" },
        ],
        workedExample: {
          problem: "Light goes from air ($n_1 = 1$) into glass ($n_2 = 1.5$) at $30^\\circ$ incidence. Find refraction angle.",
          solution: "$\\sin\\theta_2 = \\frac{1 \\times \\sin 30^\\circ}{1.5} = \\frac{0.5}{1.5} = 0.333$, so $\\theta_2 \\approx 19.5^\\circ$ — bends toward normal.",
        },
      },
      questions: [
        {
          id: "app2-u3-geometric-optics-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Light entering a denser medium bends ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "away from normal"
                    },
                    {
                              "id": "b",
                              "text": "toward normal"
                    },
                    {
                              "id": "c",
                              "text": "not at all"
                    },
                    {
                              "id": "d",
                              "text": "backward"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "theorem",
                              "name": "Snell's law",
                              "statement": "Higher $n$ means smaller angle — toward normal."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Slower speed in denser medium bends light toward the normal.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "Toward normal",
          "commonErrors": [
                    "Reversing the refraction direction rule."
          ]
},
        },
        {
          id: "app2-u3-geometric-optics-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "A convex lens with $f = 10$ cm forms an image of an object at $d_o = 30$ cm. Find $d_i$.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "$5$ cm"
                    },
                    {
                              "id": "b",
                              "text": "$15$ cm"
                    },
                    {
                              "id": "c",
                              "text": "$10$ cm"
                    },
                    {
                              "id": "d",
                              "text": "$-15$ cm"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Thin lens",
                              "statement": "$\\frac{1}{d_i} = \\frac{1}{f} - \\frac{1}{d_o} = \\frac{1}{10} - \\frac{1}{30}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$\\frac{1}{d_i} = \\frac{3-1}{30} = \\frac{2}{30} = \\frac{1}{15}$, so $d_i = 15$ cm — real image beyond focal point.",
                              "marks": 1,
                              "markCode": "M"
                    }
          ],
          "finalAnswer": "$15$ cm",
          "commonErrors": [
                    "Adding instead of subtracting in the lens equation."
          ]
},
        },
        {
          id: "app2-u3-geometric-optics-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "Object at $d_o = 20$ cm, image at $d_i = 60$ cm. Find focal length. Enter cm.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "$f$",
                              "answer": 15
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Thin lens",
                              "statement": "$\\frac{1}{f} = \\frac{1}{20} + \\frac{1}{60} = \\frac{3+1}{60} = \\frac{4}{60} = \\frac{1}{15}$."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "$f = 15$ cm.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "$f = 15$ cm.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "$15$ cm",
          "commonErrors": [
                    "Using $d_o - d_i$ or wrong reciprocal."
          ]
},
        },
        {
          id: "app2-u3-geometric-optics-q4",
          difficulty: "challenge",
          totalMarks: 3,
          stem: "Explain total internal reflection and give one practical application.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Critical angle",
                              "statement": "Beyond $\\theta_c$, all light reflects internally."
                    },
                    {
                              "kind": "theorem",
                              "name": "Snell",
                              "statement": "$\\sin\\theta_c = n_2/n_1$ going to less dense medium."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "When light goes from denser to less dense medium, refraction angle exceeds incidence angle.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "At the critical angle $\\theta_c$ (where refracted ray = $90^\\circ$), and beyond it, all light reflects — total internal reflection.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Applications: fiber optic cables (endoscopes, internet), diamond sparkle (high $n$ gives small critical angle), mirages.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Beyond critical angle, all light reflects internally",
          "commonErrors": [
                    "Thinking TIR requires mirrors — it's purely refractive."
          ]
},
        },
      ],
    },
  ],
};
