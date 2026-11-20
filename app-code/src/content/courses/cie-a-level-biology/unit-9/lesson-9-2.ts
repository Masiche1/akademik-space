import type { Lesson } from "../../../types.ts";

export const lesson92: Lesson = {
  id: "cial-b-u9-lesson-9-2",
  code: "9-2",
  title: "Cloning and Stem Cells",
  goal: "I CAN describe cloning techniques and stem cell types and uses.",
  standards: ["9700: Biotechnology — cloning and stem cells"],
  vocabulary: [
    {
      term: "Stem cell",
      definition: "Unspecialised cell that can divide and differentiate.",
    },
    {
      term: "Totipotent",
      definition: "Can form any cell type including extraembryonic tissues.",
    },
    {
      term: "Pluripotent",
      definition: "Can form any cell type of the body but not extraembryonic.",
    },
    {
      term: "Multipotent",
      definition: "Can form a limited range of related cell types.",
    },
    {
      term: "Embryonic stem cells",
      definition: "Pluripotent cells from early embryo (blastocyst).",
    },
    {
      term: "iPS cells",
      definition:
        "Induced pluripotent stem cells reprogrammed from body cells.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u9-cloning",
      title: "Cloning techniques",
      skill: "Describe reproductive and therapeutic cloning.",
      lesson: {
        sections: [
          {
            heading: "Reproductive cloning (SCNT)",
            body: "Somatic cell nuclear transfer: remove nucleus from egg cell, insert nucleus from adult donor cell, stimulate division → embryo genetically identical to donor. Dolly the sheep (1996) proved adult nuclei can be reprogrammed. Produces a genetic copy, not identical in environment/experience.",
          },
          {
            heading: "Therapeutic cloning",
            body: "SCNT creates embryo → harvest embryonic stem cells matched to patient → grow replacement tissues/organs. Avoids immune rejection since cells are patient's own. Ethical concerns about embryo destruction.",
          },
          {
            heading: "Plant cloning",
            body: "Tissue culture: explant from parent plant grown on agar with hormones → identical clones. Used for desirable varieties (crop plants, orchids). Much simpler and widely accepted.",
          },
        ],
        keyFormulas: [
          {
            name: "Cloning",
            statement:
              "SCNT=reproductive/therapeutic; Tissue culture=plant cloning.",
          },
        ],
        workedExample: {
          problem:
            "How does therapeutic cloning differ from reproductive cloning?",
          solution:
            "Both use SCNT, but therapeutic harvesting stem cells for tissue repair; reproductive implants embryo to produce offspring.",
        },
      },
      questions: [
        {
          id: "cial-b-u9-cl-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What was Dolly the sheep an example of?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Reproductive cloning via SCNT" },
              { id: "b", text: "Tissue culture" },
              { id: "c", text: "PCR amplification" },
              { id: "d", text: "Gene therapy" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Dolly", statement: "SCNT clone." },
            ],
            steps: [{ reasoning: "Dolly = SCNT.", marks: 1, markCode: "M" }],
            finalAnswer: "**(a)** Reproductive cloning via SCNT",
            commonErrors: ["Confusing with other techniques."],
          },
        },
        {
          id: "cial-b-u9-cl-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish reproductive from therapeutic cloning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cloning types",
                statement: "Offspring vs tissue repair.",
              },
            ],
            steps: [
              {
                reasoning: "Reproductive: produces offspring.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Therapeutic: harvests stem cells.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "Reproductive makes offspring; therapeutic makes matched stem cells for repair.",
            commonErrors: ["Using interchangeably."],
          },
        },
        {
          id: "cial-b-u9-cl-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Outline the SCNT procedure.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "SCNT",
                statement: "Enucleate→insert nucleus→stimulate.",
              },
            ],
            steps: [
              { reasoning: "Remove egg nucleus.", marks: 1, markCode: "M" },
              { reasoning: "Insert donor nucleus.", marks: 1, markCode: "M" },
              {
                reasoning: "Stimulate cell division.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Implant/develop embryo.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Enucleate egg → insert donor nucleus → stimulate → develop.",
            commonErrors: ["Missing enucleation step."],
          },
        },
        {
          id: "cial-b-u9-cl-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Cloning.",
          parts: [
            { label: "a", prompt: "What is SCNT?", marks: 2 },
            { label: "b", prompt: "Reproductive vs therapeutic?", marks: 3 },
            { label: "c", prompt: "How are plants cloned?", marks: 2 },
            { label: "d", prompt: "Limitations of cloning?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Cloning",
                statement: "SCNT+types+plants+limits.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Nuclear transfer.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Adult nucleus → egg.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Offspring vs stem cells.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Clear distinction.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Immune match benefit.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Tissue culture.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Identical clones.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Low success rate/abnormalities.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Ethical concerns.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "(a) SCNT (b) types (c) plants (d) limits",
          },
        },
      ],
    },
    {
      id: "cial-b-u9-stem-cells",
      title: "Stem Cells",
      skill: "Describe stem cell types, potency and therapeutic uses.",
      lesson: {
        sections: [
          {
            heading: "Potency levels",
            body: "Totipotent: forms all cell types incl. placenta (zygote, early blastomeres). Pluripotent: forms any body cell but not placenta (embryonic stem cells). Multipotent: limited range (haematopoietic → blood cells). Unipotent: one cell type.",
          },
          {
            heading: "Sources and uses",
            body: "Embryonic stem cells: from blastocyst inner cell mass — pluripotent, controversial. Adult stem cells: from bone marrow etc. — multipotent, limited. iPS cells: reprogrammed adult cells to pluripotent — avoids embryo use.",
          },
          {
            heading: "Therapeutic applications",
            body: "Treat blood disorders (leukaemia via bone marrow transplant), burns (skin grafts), Parkinson's (dopamine neurons), spinal cord injury, diabetes (insulin cells). Challenges: directing differentiation, tumour risk, immune rejection.",
          },
        ],
        keyFormulas: [
          {
            name: "Stem cells",
            statement:
              "Totipotent>pluripotent>multipotent>unipotent; uses=transplants/regeneration.",
          },
        ],
        workedExample: {
          problem: "Why are iPS cells ethically attractive?",
          solution:
            "They are pluripotent like embryonic stem cells but made from adult cells — no embryo destruction.",
        },
      },
      questions: [
        {
          id: "cial-b-u9-sc-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Which stem cells are pluripotent?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Embryonic stem cells" },
              { id: "b", text: "Haematopoietic stem cells" },
              { id: "c", text: "Skin stem cells" },
              { id: "d", text: "Sperm cells" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Pluripotent",
                statement: "Embryonic stem cells.",
              },
            ],
            steps: [
              { reasoning: "ESCs are pluripotent.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Embryonic stem cells",
            commonErrors: ["Choosing adult stem cells."],
          },
        },
        {
          id: "cial-b-u9-sc-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "What are iPS cells?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "iPS",
                statement: "Reprogrammed adult cells.",
              },
            ],
            steps: [
              {
                reasoning: "Adult cells reprogrammed.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Become pluripotent.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Induced pluripotent stem cells — adult cells reprogrammed to pluripotency.",
            commonErrors: ["Confusing with ESCs."],
          },
        },
        {
          id: "cial-b-u9-sc-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Compare embryonic and adult stem cells.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stem cell types",
                statement: "Pluripotent vs multipotent.",
              },
            ],
            steps: [
              {
                reasoning: "ESC: pluripotent, embryo source.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Adult: multipotent, body tissue.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Different differentiation range.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Clear comparison.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "ESCs pluripotent from embryo; adult stem cells multipotent from body tissues.",
            commonErrors: ["Only describing one."],
          },
        },
        {
          id: "cial-b-u9-sc-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Stem cells.",
          parts: [
            { label: "a", prompt: "Define stem cell.", marks: 1 },
            { label: "b", prompt: "Potency levels?", marks: 3 },
            { label: "c", prompt: "Sources of stem cells?", marks: 2 },
            { label: "d", prompt: "Therapeutic uses?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Stem cells",
                statement: "Definition+potency+sources+uses.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Unspecialised, divides/differentiates.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Totipotent/pluripotent.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Multipotent/unipotent.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Range explained.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Embryo/adult/iPS.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Correct sources.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Any two uses.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Correct examples.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Challenges noted.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "(a) definition (b) potency (c) sources (d) uses",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u9-clone-stem",
      title: "Cloning and stem cells — revision notes",
      summary: "SCNT, therapeutic cloning, stem cell potency, iPS cells.",
      sections: [
        {
          heading: "Cloning",
          body: "SCNT: enucleate egg + donor nucleus. Reproductive=offspring; therapeutic=stem cells; plants=tissue culture.",
        },
        {
          heading: "Stem cells",
          body: "Totipotent>pluripotent>multipotent. ESCs vs adult vs iPS. Uses: transplants, regeneration, disease models.",
        },
      ],
    },
  ],
};
