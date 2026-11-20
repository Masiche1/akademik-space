import type { Lesson } from "../../../types.ts";

export const lesson93: Lesson = {
  id: "cial-b-u9-lesson-9-3",
  code: "9-3",
  title: "GM Organisms and Bioethics",
  goal: "I CAN evaluate GM organisms, gene therapy and ethical issues in biotechnology.",
  standards: ["9700: Biotechnology — applications and ethics"],
  vocabulary: [
    {
      term: "Transgenic organism",
      definition: "Organism containing foreign DNA.",
    },
    {
      term: "Gene therapy",
      definition: "Treating disease by inserting functional genes.",
    },
    {
      term: "Somatic gene therapy",
      definition: "Gene therapy on body cells — effects not inherited.",
    },
    {
      term: "Germ-line gene therapy",
      definition: "Gene therapy on gametes/embryo — inherited by offspring.",
    },
    {
      term: "Biosafety",
      definition: "Measures preventing harm from GM organisms.",
    },
    {
      term: "Bioethics",
      definition: "Ethical issues raised by biological technology.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u9-gm",
      title: "GM organisms",
      skill: "Describe GM organism production and evaluate risks and benefits.",
      lesson: {
        sections: [
          {
            heading: "Producing transgenic organisms",
            body: "Plants: Agrobacterium tumefaciens transfers T-DNA, or gene gun/biolistics. Animals: microinjection of DNA into fertilised eggs. Microorganisms: plasmid transformation. Desired trait expressed in offspring.",
          },
          {
            heading: "GM applications",
            body: "Crops: Bt cotton (insect toxin), herbicide-resistant soy, golden rice (vitamin A). Animals: pharming (milk with drugs), disease-resistant livestock. Microbes: insulin, enzymes, biofuels.",
          },
          {
            heading: "Risks and evaluation",
            body: "Concerns: gene flow to wild relatives, effects on non-target species, biodiversity loss, corporate control of seeds, allergenicity. Benefits: higher yields feeding growing populations, reduced pesticide use. Regulation and risk assessment needed.",
          },
        ],
        keyFormulas: [
          {
            name: "GM organisms",
            statement:
              "Agrobacterium/microinjection/plasmids; benefits vs gene-flow/allergy risks.",
          },
        ],
        workedExample: {
          problem: "How is Bt cotton made?",
          solution:
            "Bacterial gene for insecticidal toxin inserted into cotton plant — pests die when feeding, reducing pesticide need.",
        },
      },
      questions: [
        {
          id: "cial-b-u9-gm-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is a transgenic organism?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Organism containing foreign DNA" },
              { id: "b", text: "Organism grown in tissue culture" },
              { id: "c", text: "Hybrid offspring" },
              { id: "d", text: "Cloned animal" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Transgenic",
                statement: "Contains foreign DNA.",
              },
            ],
            steps: [
              {
                reasoning: "Transgenic = foreign DNA.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "**(a)** Organism containing foreign DNA",
            commonErrors: ["Confusing with hybrid."],
          },
        },
        {
          id: "cial-b-u9-gm-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "How is foreign DNA introduced into plants?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Plant transformation",
                statement: "Agrobacterium or gene gun.",
              },
            ],
            steps: [
              { reasoning: "Agrobacterium T-DNA.", marks: 1, markCode: "M" },
              { reasoning: "Or biolistics/gene gun.", marks: 1, markCode: "A" },
            ],
            finalAnswer: "Agrobacterium tumefaciens or gene gun/biolistics.",
            commonErrors: ["Saying microinjection."],
          },
        },
        {
          id: "cial-b-u9-gm-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the benefits and risks of GM crops.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GM evaluation",
                statement: "Yield vs gene-flow/allergy risks.",
              },
            ],
            steps: [
              {
                reasoning: "Benefits: yield/pest resistance.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Risk: gene flow.", marks: 1, markCode: "M" },
              {
                reasoning: "Risk: biodiversity/allergy.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Real benefits but ecological and control risks require regulation.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cial-b-u9-gm-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "GM organisms.",
          parts: [
            { label: "a", prompt: "Define transgenic organism.", marks: 1 },
            { label: "b", prompt: "Plant transformation methods?", marks: 2 },
            { label: "c", prompt: "Three GM applications?", marks: 3 },
            { label: "d", prompt: "Main risks?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "GM",
                statement: "Definition+methods+apps+risks.",
              },
            ],
            steps: [
              { part: "a", reasoning: "Foreign DNA.", marks: 1, markCode: "M" },
              {
                part: "b",
                reasoning: "Agrobacterium.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Gene gun.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Any three applications.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Clear.", marks: 1, markCode: "A" },
              { part: "d", reasoning: "Gene flow.", marks: 1, markCode: "M" },
              {
                part: "d",
                reasoning: "Biodiversity/allergy.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Corporate control.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "(a) definition (b) methods (c) apps (d) risks",
          },
        },
      ],
    },
    {
      id: "cial-b-u9-ethics",
      title: "Gene Therapy and Bioethics",
      skill:
        "Describe gene therapy types and evaluate ethical issues in biotechnology.",
      lesson: {
        sections: [
          {
            heading: "Gene therapy",
            body: "Somatic: insert functional gene into body cells — treats disease in patient only, not inherited. Germ-line: modify gametes/embryo — changes inherited by offspring (currently banned in most countries). Vectors: viruses (retrovirus, adenovirus) deliver genes.",
          },
          {
            heading: "Ethical issues",
            body: "Germ-line therapy: designer babies, unknown long-term effects, eugenics concerns. Cloning: identity, dignity, animal welfare. Stem cells: embryo destruction vs medical benefits. GM: 'playing God', environmental release. Patenting genes: corporate ownership of life.",
          },
          {
            heading: "Regulation",
            body: "Most countries regulate biotechnology — risk assessments, containment, bans on germ-line modification and human reproductive cloning. Ethical guidelines balance benefits against risks.",
          },
        ],
        keyFormulas: [
          {
            name: "Bioethics",
            statement:
              "Somatic=safe/not inherited; Germ-line=inherited/controversial; regulation balances.",
          },
        ],
        workedExample: {
          problem: "Why is germ-line gene therapy controversial?",
          solution:
            "Changes are heritable — affects future generations, raises designer baby and eugenics concerns.",
        },
      },
      questions: [
        {
          id: "cial-b-u9-et-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is the difference between somatic and germ-line gene therapy?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Somatic not inherited; germ-line inherited" },
              { id: "b", text: "Somatic uses viruses; germ-line doesn't" },
              { id: "c", text: "No difference" },
              { id: "d", text: "Somatic is banned; germ-line allowed" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Gene therapy types",
                statement: "Inherited vs not.",
              },
            ],
            steps: [
              { reasoning: "Somatic vs germ-line.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "**(a)** Somatic not inherited; germ-line inherited",
            commonErrors: ["Reversed understanding."],
          },
        },
        {
          id: "cial-b-u9-et-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Name two ethical concerns about cloning.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Cloning ethics",
                statement: "Identity/dignity/welfare.",
              },
            ],
            steps: [
              { reasoning: "Any two concerns.", marks: 1, markCode: "M" },
              { reasoning: "Correct.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Identity/dignity issues, animal welfare, low success rates.",
            commonErrors: ["Only one concern."],
          },
        },
        {
          id: "cial-b-u9-et-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Evaluate the ethics of germ-line gene therapy.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Germ-line ethics",
                statement: "Benefits vs heritable risks.",
              },
            ],
            steps: [
              {
                reasoning: "Could eliminate disease heritably.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Designer baby/eugenics concerns.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Unknown long-term effects.",
                marks: 1,
                markCode: "A",
              },
              { reasoning: "Balanced judgement.", marks: 1, markCode: "R" },
            ],
            finalAnswer:
              "Could prevent disease but raises serious ethical concerns — currently banned.",
            commonErrors: ["One-sided."],
          },
        },
        {
          id: "cial-b-u9-et-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Bioethics.",
          parts: [
            { label: "a", prompt: "Somatic vs germ-line?", marks: 2 },
            { label: "b", prompt: "Vectors for gene therapy?", marks: 2 },
            { label: "c", prompt: "Three ethical issues?", marks: 3 },
            { label: "d", prompt: "How is biotechnology regulated?", marks: 2 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bioethics",
                statement: "Types+vectors+issues+regulation.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Inherited vs not.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "a",
                reasoning: "Clear distinction.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "b",
                reasoning: "Viruses as vectors.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Retro/adenovirus.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Any three issues.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Correct.", marks: 1, markCode: "M" },
              { part: "c", reasoning: "Explained.", marks: 1, markCode: "A" },
              {
                part: "d",
                reasoning: "Risk assessments/bans.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Balance benefits/risks.",
                marks: 1,
                markCode: "R",
              },
            ],
            finalAnswer: "(a) types (b) vectors (c) issues (d) regulation",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u9-gm-ethics",
      title: "GM and bioethics — revision notes",
      summary:
        "Transgenic organisms, gene therapy types, ethical issues, regulation.",
      sections: [
        {
          heading: "GM/gene therapy",
          body: "Agrobacterium/microinjection; somatic=safe, germ-line=inherited; viral vectors.",
        },
        {
          heading: "Ethics",
          body: "Designer babies, cloning concerns, embryo destruction, gene patents; regulation bans germ-line/human cloning.",
        },
      ],
    },
  ],
};
