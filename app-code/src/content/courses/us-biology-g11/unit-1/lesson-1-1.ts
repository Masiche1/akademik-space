import type { Lesson } from "../../../types.ts";

export const lesson11: Lesson = {
  id: "bio11-u1-lesson-1-1",
  code: "1-1",
  title: "Cell Structure",
  goal: "I CAN identify cell structures and explain their functions.",
  standards: ["HS-LS1-1", "HS-LS1-2"],
  vocabulary: [
    { term: "Nucleus", definition: "Control center containing DNA." },
    { term: "Mitochondria", definition: "Powerhouse producing ATP." },
    { term: "Ribosome", definition: "Protein synthesis site." },
    { term: "Cell membrane", definition: "Controls what enters/exits." },
    { term: "Organelle", definition: "Specialized cell structure." },
  ],
  concepts: [
    {
      id: "bio11-u1-cell-structure",
      title: "Cell structure",
      skill: "Identify organelles and their functions.",
      lesson: {
        sections: [
          {
            heading: "Eukaryotic cells",
            body: "Plant and animal cells have a nucleus and membrane-bound organelles. The nucleus stores DNA and controls the cell. Mitochondria produce ATP (energy). Ribosomes build proteins. The cell membrane controls what enters and exits.",
          },
          {
            heading: "Plant vs animal",
            body: "Plant cells have a cell wall, chloroplasts (photosynthesis) and a large central vacuole. Animal cells lack these but have centrioles. Both share nucleus, mitochondria, ribosomes and membrane.",
          },
        ],
        keyFormulas: [
          { name: "Nucleus", statement: "DNA + control." },
          { name: "Mitochondria", statement: "ATP energy." },
          { name: "Chloroplast", statement: "Photosynthesis (plants)." },
        ],
        workedExample: {
          problem: "Which organelle produces most of a cell's ATP?",
          solution: "Mitochondria — cellular respiration occurs there, generating ATP.",
        },
      },
      questions: [
        {
          id: "bio11-u1-cell-structure-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "The 'powerhouse' of the cell is the ___.",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "nucleus"
                    },
                    {
                              "id": "b",
                              "text": "ribosome"
                    },
                    {
                              "id": "c",
                              "text": "mitochondria"
                    },
                    {
                              "id": "d",
                              "text": "vacuole"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Mitochondria",
                              "statement": "Produces ATP energy."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Mitochondria produce ATP through cellular respiration.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(c)** mitochondria",
          "commonErrors": [
                    "Choosing the nucleus."
          ]
},
        },
        {
          id: "bio11-u1-cell-structure-q2",
          difficulty: "core",
          totalMarks: 1,
          stem: "Which structure is found ONLY in plant cells?",
          response: {
          "type": "mcq",
          "choices": [
                    {
                              "id": "a",
                              "text": "nucleus"
                    },
                    {
                              "id": "b",
                              "text": "mitochondria"
                    },
                    {
                              "id": "c",
                              "text": "chloroplast"
                    },
                    {
                              "id": "d",
                              "text": "cell membrane"
                    }
          ],
          "correctChoiceId": "c"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Chloroplast",
                              "statement": "Photosynthesis — plants only."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Chloroplasts are unique to plant cells (and algae).",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**(c)** chloroplast",
          "commonErrors": [
                    "Choosing mitochondria which both have."
          ]
},
        },
        {
          id: "bio11-u1-cell-structure-q3",
          difficulty: "core",
          totalMarks: 1,
          stem: "A cell has 4 main organelles: nucleus, mitochondria, ribosomes, membrane. How many listed?",
          response: {
          "type": "numeric",
          "parts": [
                    {
                              "label": "Organelles",
                              "answer": 4
                    }
          ]
},
          markscheme: {
          "principles": [
                    {
                              "kind": "skill",
                              "name": "Count",
                              "statement": "Count organelles."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "4 organelles.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "$4$",
          "commonErrors": [
                    "Counting only membrane-bound ones."
          ]
},
        },
        {
          id: "bio11-u1-cell-structure-q4",
          difficulty: "challenge",
          totalMarks: 2,
          stem: "Compare plant and animal cells: name two structures unique to plants and explain their functions.",
          response: {
          "type": "open"
},
          markscheme: {
          "principles": [
                    {
                              "kind": "definition",
                              "name": "Cell wall",
                              "statement": "Support + protection."
                    },
                    {
                              "kind": "definition",
                              "name": "Chloroplast",
                              "statement": "Photosynthesis."
                    }
          ],
          "steps": [
                    {
                              "reasoning": "Plant cells have a cell wall (support/protection) and chloroplasts (photosynthesis); animal cells lack both.",
                              "marks": 1,
                              "markCode": "M"
                    },
                    {
                              "reasoning": "Both unique structures named with functions.",
                              "marks": 1,
                              "markCode": "A"
                    }
          ],
          "finalAnswer": "**Cell wall + chloroplasts unique to plants.**",
          "commonErrors": [
                    "Naming shared organelles."
          ]
},
        },
      ],
    },
  ],
};
