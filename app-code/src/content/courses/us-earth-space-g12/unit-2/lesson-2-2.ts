import type { Lesson } from "../../../types.ts";

export const lesson22: Lesson = {
  id: "ess12-u2-lesson-2-2",
  code: "2-2",
  title: "Celestial Motion and Gravity",
  goal: "I CAN describe orbital motion and gravitational effects.",
  standards: ["HS-ESS1-2", "HS-ESS1-3", "HS-ESS1-4"],
  vocabulary: [
    { term: "Orbit", definition: "Curved path around a body." },
    { term: "Gravity", definition: "Mass attraction force." },
    { term: "Rotation", definition: "Spin on axis." },
    { term: "Revolution", definition: "Orbit around another body." },
    { term: "Tides", definition: "Gravitational pull differences." },
  ],
  concepts: [
    {
      id: "ess12-u2-celestial-motion",
      title: "Celestial motion",
      skill: "Describe orbital mechanics and gravitational effects.",
      lesson: {
        sections: [
          {
            heading: "Orbits and gravity",
            body: "Gravity — the attraction between masses — keeps planets in orbit. A planet's orbital speed balances gravitational pull: too slow → falls inward; too fast → escapes. Orbits are elliptical, not circular.",
          },
          {
            heading: "Earth's motions",
            body: "Earth rotates (spins) once per 24h = day/night. Revolves (orbits) once per 365.25 days = year. The Moon's orbit and Earth's rotation cause tides; Earth's axial tilt causes seasons.",
          },
        ],
        keyFormulas: [
          { name: "Orbit", statement: "Gravity-balance path." },
          { name: "Rotation", statement: "Spin = day." },
          { name: "Revolution", statement: "Orbit = year." },
          { name: "Tides", statement: "Gravitational differences." },
        ],
        workedExample: {
          problem: "What keeps the Moon in orbit around Earth?",
          solution: "Gravity — Earth's gravitational pull provides the centripetal force keeping the Moon in orbit.",
        },
      },
      questions: [
        {
          id: "ess12-u2-celestial-motion-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What force keeps planets in orbit?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "magnetism"
                    },
                    {
                              "id": "b",
                              "text": "gravity"
                    },
                    {
                              "id": "c",
                              "text": "friction"
                    },
                    {
                              "id": "d",
                              "text": "inertia alone"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Gravity",
                              "statement": "Attraction keeps orbits."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Gravity provides the centripetal force keeping planets in orbit.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** gravity",
          "commonErrors": [
                    "Thinking inertia alone suffices."
          ]
},
        },
        {
          id: "ess12-u2-celestial-motion-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Earth's revolution around the Sun causes ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "day and night"
                    },
                    {
                              "id": "b",
                              "text": "the seasons"
                    },
                    {
                              "id": "c",
                              "text": "tides only"
                    },
                    {
                              "id": "d",
                              "text": "eclipses daily"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Revolution",
                              "statement": "Orbit + axial tilt → seasons."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Earth's revolution combined with axial tilt causes seasons as different hemispheres get more direct sunlight.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(b)** the seasons",
          "commonErrors": [
                    "Confusing with rotation."
          ]
},
        },
        {
          id: "ess12-u2-celestial-motion-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "Earth takes 365.25 days to orbit the Sun. How many days approximately?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Days",
                              "answer": 365
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Revolution",
                              "statement": "365.25 days = year."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "365 days (365.25 exact).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$365$",
          "commonErrors": [
                    "Saying 24 or 30."
          ]
},
        },
        {
          id: "ess12-u2-celestial-motion-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Explain the difference between Earth's rotation and revolution, and what each causes.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Rotation",
                              "statement": "Spin on axis."
                    },
                    {
                              "kind": "definition",
                              "name": "Revolution",
                              "statement": "Orbit around Sun."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Rotation: Earth spins on its axis once per 24 hours → day/night cycle. Revolution: Earth orbits the Sun once per 365.25 days → the year; combined with axial tilt → seasons.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both motions and their effects correctly stated.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Rotation = day/night; revolution = year + seasons.**",
          "commonErrors": [
                    "Swapping the causes."
          ]
},
        },
      ],
    },
  ],
};
