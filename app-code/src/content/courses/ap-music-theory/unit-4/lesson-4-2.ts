import type { Lesson } from "../../../types.ts";

export const lesson42: Lesson = {
  id: "apmt-u4-lesson-4-2",
  code: "4-2",
  title: "Composition Techniques",
  goal: "I CAN apply composition techniques like sequence, imitation, and counterpoint.",
  standards: ["Unit 4"],
  vocabulary: [
    { term: "Sequence", definition: "Melodic/harmonic pattern repeated at different pitch — creates development." },
    { term: "Imitation", definition: "One voice copying another — canon, fugue techniques." },
    { term: "Counterpoint", definition: "Combining independent melodic lines — voices interact but remain distinct." },
    { term: "Canon", definition: "Strict imitation — 'Row, row, row your boat' is canon." },
    { term: "Fugue", definition: "Complex contrapuntal form — subject introduced, imitated, developed." },
    { term: "Pedal point", definition: "Sustained note while harmony changes — creates tension/bass anchor." },
  ],
  concepts: [
    {
      id: "apmt-u4-composition-techniques",
      title: "Composition techniques",
      skill: "Apply compositional devices for development and interest.",
      lesson: {
        sections: [
          {
            heading: "Development techniques",
            body: "Sequence (repeat at different pitch), imitation (voices copying), variation (theme altered), ornamentation (decorating melody) — create interest from simple material.",
          },
          {
            heading: "Contrapuntal techniques",
            body: "Counterpoint (independent voices), canon (strict imitation), fugue (complex subject imitation) — combine melodies maintaining independence.",
          },
        ],
        keyFormulas: [
          { name: "Sequence", statement: "Pattern repeated at different pitch level" },
          { name: "Imitation", statement: "Voice copying another's melody" },
          { name: "Counterpoint", statement: "Independent voices combined" },
          { name: "Canon", statement: "Strict imitation throughout" },
          { name: "Fugue", statement: "Subject + imitation + development" },
        ],
        workedExample: {
          problem: "Identify 'Row, Row, Row Your Boat' as canon",
          solution: "Canon — voices enter at different times singing same melody; 'Row row row' starts, others follow — strict imitation creating overlapping voices.",
        },
      },
      questions: [
        {
          id: "apmt-u4-composition-techniques-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A canon is ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "any song"
                    },
                    {
                              "id": "b",
                              "text": "strict imitation where voices sing same melody at different times"
                    },
                    {
                              "id": "c",
                              "text": "solo piece"
                    },
                    {
                              "id": "d",
                              "text": "harmony without melody"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Canon",
                              "statement": "Strict melodic imitation."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Canon = strict imitation — voices sing same melody entering at different times; 'Row, Row, Row Your Boat' is famous example.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Strict melodic imitation",
          "commonErrors": [
                    "Confusing with other forms."
          ]
},
        },
        {
          id: "apmt-u4-composition-techniques-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Counterpoint differs from harmony because counterpoint ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "is simpler"
                    },
                    {
                              "id": "b",
                              "text": "combines independent melodic lines that remain distinct"
                    },
                    {
                              "id": "c",
                              "text": "is just chords"
                    },
                    {
                              "id": "d",
                              "text": "is monophonic"
                    }
          ],
          "correctChoiceId": "b"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Counterpoint",
                              "statement": "Independent voices combined."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Counterpoint combines independent melodic lines that remain distinct — each voice has own melodic identity; harmony often subordinates melody to chord structure.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Bach's fugues exemplify counterpoint — multiple independent voices interacting.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Independent melodic lines",
          "commonErrors": [
                    "Confusing with homophony — counterpoint maintains independence."
          ]
},
        },
        {
          id: "apmt-u4-composition-techniques-q3",
          difficulty: "core",
          totalMarks: 2,
          stem: "A fugue has subject, answer, and 3 episodes. How many major sections? Enter the number.",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Sections",
                              "answer": 2
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "method",
                              "name": "Structure",
                              "statement": "Subject+answer+episodes = 2 main parts (exposition + development)."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fugue structure: exposition (subject + answer) + development (episodes, modulations) = 2 main sections.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Answer $2$ (exposition + development).",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "2",
          "commonErrors": [
                    "Counting every element as separate section."
          ]
},
        },
        {
          id: "apmt-u4-composition-techniques-q4",
          difficulty: "core",
          totalMarks: 3,
          stem: "Compare sequence and imitation. How do they create development differently?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "context",
                              "name": "Sequence vs. imitation",
                              "statement": "Different repetition."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Sequence: same melodic pattern repeated at different pitch level — 'do-re-mi' becomes 're-mi-fa'; creates development through transposition.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Imitation: one voice copies another's melody — 'Row row row' where voices enter successively; creates development through overlapping voices.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Key difference: sequence = same voice transposed; imitation = different voices copying; sequence develops single line, imitation develops multiple voices.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Sequence=transposition; Imitation=voice copying",
          "commonErrors": [
                    "Conflating — different mechanisms."
          ]
},
        },
        {
          id: "apmt-u4-composition-techniques-q5",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Analyze why fugue is considered the pinnacle of contrapuntal composition. What makes it complex?",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "concept",
                              "name": "Fugue complexity",
                              "statement": "Contrapuntal mastery."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Fugue complexity: subject (main theme) introduced, imitated by 'answer' in different key, then developed through episodes with modulations, inversions, augmentations — rigorous structural logic.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Multiple independent voices maintain melodic integrity while interacting — counterpoint at highest level; requires masterful control of harmony, counterpoint, form simultaneously.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Bach's 'The Art of Fugue' represents contrapuntal mastery — mathematical precision + artistic expression; fugue tests composer's complete command of musical materials.",
                              "marks": 1,
                              "markCode": "B"
                    },
                    {
                              "reasoning": "Verdict: fugue is contrapuntal pinnacle — combines technical rigor (subject development, modulation) with artistic expression; represents compositional mastery.",
                              "marks": 1,
                              "markCode": "B"
                    }
          ],
          "finalAnswer": "Fugue = contrapuntal mastery — technical + artistic",
          "commonErrors": [
                    "Thinking it's just 'complicated music' — it's structural logic."
          ]
},
        },
      ],
    },
  ],
};
