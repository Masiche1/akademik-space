import type { Lesson } from "../../../types.ts";

export const lesson34: Lesson = {
  id: "cipuc-u3-lesson-3-4",
  code: "3-4",
  title: "Organic chemistry",
  goal: "I CAN explain organic compounds, functional groups, and reaction types.",
  standards: ["Cambridge Pre-U Chemistry 9791", "Paper 1: Organic chemistry"],
  vocabulary: [
    {
      term: "Organic compound",
      definition: "Compound containing carbon-hydrogen bonds.",
    },
    {
      term: "Hydrocarbon",
      definition: "Compound of only carbon and hydrogen.",
    },
    {
      term: "Alkane",
      definition: "Saturated hydrocarbon — single bonds only.",
    },
    {
      term: "Alkene",
      definition: "Unsaturated hydrocarbon — at least one C=C.",
    },
    {
      term: "Alkyne",
      definition: "Unsaturated hydrocarbon — at least one C≡C.",
    },
    {
      term: "Functional group",
      definition: "Atom/group determining chemical properties.",
    },
    {
      term: "Isomer",
      definition: "Same formula, different structure.",
    },
    {
      term: "Homologous series",
      definition: "Compounds with same general formula and properties.",
    },
    {
      term: "Substitution reaction",
      definition: "Atom/group replaced by another.",
    },
    {
      term: "Addition reaction",
      definition: "Two molecules combine — unsaturated → saturated.",
    },
    {
      term: "Polymerisation",
      definition: "Many monomers join to form polymer.",
    },
    {
      term: "Stereoisomerism",
      definition: "Same connectivity, different spatial arrangement.",
    },
  ],
  concepts: [
    {
      id: "cipuc-u3-organic",
      title: "Organic compounds and functional groups",
      skill:
        "Identify organic compounds, functional groups, isomers, and homologous series.",
      lesson: {
        sections: [
          {
            heading: "Hydrocarbons",
            body: "**Alkanes**: CnH₂n+₂ — saturated, single bonds. Examples: methane CH₄, ethane C₂H₆, propane C₃H₈. **Alkenes**: CnH₂n — unsaturated, C=C. Examples: ethene C₂H₄, propene C₃H₆. **Alkynes**: CnH₂n-₂ — C≡C. **Aromatic**: benzene ring.",
          },
          {
            heading: "Functional groups",
            body: "**Alcohol**: -OH (ethanol C₂H₅OH). **Carboxylic acid**: -COOH (ethanoic acid CH₃COOH). **Aldehyde**: -CHO. **Ketone**: C=O in middle. **Ester**: -COO-. **Amine**: -NH₂. **Haloalkane**: -X (Cl, Br, I). Functional group determines chemical properties.",
          },
          {
            heading: "Isomers and homologous series",
            body: "**Structural isomers**: same formula, different connectivity — e.g., butane vs 2-methylpropane. **Stereoisomers**: same connectivity, different arrangement — cis/trans, enantiomers. **Homologous series**: same general formula, similar properties, differ by CH₂ — e.g., methane, ethane, propane.",
          },
        ],
        keyFormulas: [
          {
            name: "Alkane formula",
            statement: "CnH₂n+₂ — saturated",
          },
          {
            name: "Alkene formula",
            statement: "CnH₂n — unsaturated",
          },
          {
            name: "Functional groups",
            statement: "-OH, -COOH, -CHO, -COO-",
          },
          {
            name: "Homologous series",
            statement: "Same general formula, differ by CH₂",
          },
        ],
        workedExample: {
          problem: "What is molecular formula of butane?",
          solution: "C₄H₁₀ — alkane, n=4 → CnH₂n+₂ = C₄H₁₀.",
        },
      },
      questions: [
        {
          id: "cipuc-u3-org-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An organic compound contains:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Carbon-hydrogen bonds" },
              { id: "b", text: "Only carbon" },
              { id: "c", text: "Only hydrogen" },
              { id: "d", text: "No carbon" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Organic", statement: "C-H bonds." },
            ],
            steps: [{ reasoning: "Organic = C-H.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Carbon-hydrogen bonds.",
          },
        },
        {
          id: "cipuc-u3-org-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A hydrocarbon contains:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Only carbon and hydrogen" },
              { id: "b", text: "Only carbon" },
              { id: "c", text: "Only hydrogen" },
              { id: "d", text: "Oxygen too" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydrocarbon",
                statement: "C + H only.",
              },
            ],
            steps: [
              { reasoning: "Hydrocarbon = C + H.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Only C and H.",
          },
        },
        {
          id: "cipuc-u3-org-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An alkane is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Saturated hydrocarbon — single bonds" },
              { id: "b", text: "Unsaturated" },
              { id: "c", text: "Aromatic" },
              { id: "d", text: "Alcohol" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alkane",
                statement: "Saturated, single bonds.",
              },
            ],
            steps: [
              { reasoning: "Alkane = saturated.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Saturated.",
          },
        },
        {
          id: "cipuc-u3-org-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An alkene is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Unsaturated — at least one C=C" },
              { id: "b", text: "Saturated" },
              { id: "c", text: "Aromatic" },
              { id: "d", text: "Alcohol" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Alkene",
                statement: "Unsaturated, C=C.",
              },
            ],
            steps: [
              { reasoning: "Alkene = unsaturated.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Unsaturated — C=C.",
          },
        },
        {
          id: "cipuc-u3-org-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "General formula of alkanes is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CnH₂n+₂" },
              { id: "b", text: "CnH₂n" },
              { id: "c", text: "CnH₂n-₂" },
              { id: "d", text: "CnHn" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Alkane formula",
                statement: "CnH₂n+₂.",
              },
            ],
            steps: [
              { reasoning: "Alkane = CnH₂n+₂.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) CnH₂n+₂.",
          },
        },
        {
          id: "cipuc-u3-org-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "General formula of alkenes is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CnH₂n" },
              { id: "b", text: "CnH₂n+₂" },
              { id: "c", text: "CnH₂n-₂" },
              { id: "d", text: "CnHn" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Alkene formula",
                statement: "CnH₂n.",
              },
            ],
            steps: [{ reasoning: "Alkene = CnH₂n.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) CnH₂n.",
          },
        },
        {
          id: "cipuc-u3-org-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Methane has formula:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CH₄" },
              { id: "b", text: "C₂H₆" },
              { id: "c", text: "C₃H₈" },
              { id: "d", text: "CO₂" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Methane", statement: "CH₄." },
            ],
            steps: [{ reasoning: "Methane = CH₄.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) CH₄.",
          },
        },
        {
          id: "cipuc-u3-org-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ethanol has functional group:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "-OH (alcohol)" },
              { id: "b", text: "-COOH" },
              { id: "c", text: "-CHO" },
              { id: "d", text: "-COO-" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ethanol", statement: "-OH group." },
            ],
            steps: [{ reasoning: "Ethanol = -OH.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) -OH.",
          },
        },
        {
          id: "cipuc-u3-org-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Ethanoic acid has functional group:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "-COOH (carboxylic acid)" },
              { id: "b", text: "-OH" },
              { id: "c", text: "-CHO" },
              { id: "d", text: "-COO-" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ethanoic acid",
                statement: "-COOH.",
              },
            ],
            steps: [
              { reasoning: "Ethanoic = -COOH.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) -COOH.",
          },
        },
        {
          id: "cipuc-u3-org-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An isomer is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same formula, different structure" },
              { id: "b", text: "Same structure" },
              { id: "c", text: "Different formula" },
              { id: "d", text: "No relation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Isomer",
                statement: "Same formula, different structure.",
              },
            ],
            steps: [
              {
                reasoning: "Isomer = same formula, different structure.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Same formula, different structure.",
          },
        },
        {
          id: "cipuc-u3-org-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "A homologous series has:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same general formula and similar properties" },
              { id: "b", text: "Different formulas" },
              { id: "c", text: "No relation" },
              { id: "d", text: "Different properties" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homologous series",
                statement: "Same general formula.",
              },
            ],
            steps: [
              {
                reasoning: "Homologous = same formula.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Same general formula.",
          },
        },
        {
          id: "cipuc-u3-org-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Members of homologous series differ by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "CH₂ group" },
              { id: "b", text: "C group" },
              { id: "c", text: "H group" },
              { id: "d", text: "O group" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Homologous difference",
                statement: "CH₂.",
              },
            ],
            steps: [
              {
                reasoning: "Homologous = CH₂ difference.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) CH₂.",
          },
        },
        {
          id: "cipuc-u3-org-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "A functional group is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Atom/group determining chemical properties" },
              { id: "b", text: "Any atom" },
              { id: "c", text: "Any group" },
              { id: "d", text: "No group" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Functional group",
                statement: "Determines properties.",
              },
            ],
            steps: [
              {
                reasoning: "Functional = determines properties.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Determines properties.",
          },
        },
        {
          id: "cipuc-u3-org-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "An aldehyde has functional group:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "-CHO" },
              { id: "b", text: "-OH" },
              { id: "c", text: "-COOH" },
              { id: "d", text: "-COO-" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Aldehyde", statement: "-CHO." },
            ],
            steps: [{ reasoning: "Aldehyde = -CHO.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) -CHO.",
          },
        },
        {
          id: "cipuc-u3-org-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A ketone has functional group:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "C=O in middle of chain" },
              { id: "b", text: "-CHO" },
              { id: "c", text: "-OH" },
              { id: "d", text: "-COOH" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ketone", statement: "C=O middle." },
            ],
            steps: [
              { reasoning: "Ketone = C=O middle.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) C=O middle.",
          },
        },
        {
          id: "cipuc-u3-org-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "An ester has functional group:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "-COO-" },
              { id: "b", text: "-OH" },
              { id: "c", text: "-CHO" },
              { id: "d", text: "-COOH" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ester", statement: "-COO-." },
            ],
            steps: [{ reasoning: "Ester = -COO-.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) -COO-.",
          },
        },
        {
          id: "cipuc-u3-org-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "An amine has functional group:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "-NH₂" },
              { id: "b", text: "-OH" },
              { id: "c", text: "-COOH" },
              { id: "d", text: "-CHO" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Amine", statement: "-NH₂." },
            ],
            steps: [{ reasoning: "Amine = -NH₂.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) -NH₂.",
          },
        },
        {
          id: "cipuc-u3-org-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "A haloalkane has functional group:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "-X (Cl, Br, I)" },
              { id: "b", text: "-OH" },
              { id: "c", text: "-COOH" },
              { id: "d", text: "-CHO" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Haloalkane", statement: "-X." },
            ],
            steps: [{ reasoning: "Haloalkane = -X.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) -X.",
          },
        },
        {
          id: "cipuc-u3-org-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "Structural isomers have:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Same formula, different connectivity" },
              { id: "b", text: "Same connectivity" },
              { id: "c", text: "Different formula" },
              { id: "d", text: "No relation" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Structural isomer",
                statement: "Different connectivity.",
              },
            ],
            steps: [
              {
                reasoning: "Structural = different connectivity.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Different connectivity.",
          },
        },
        {
          id: "cipuc-u3-org-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between structural and stereoisomers.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Isomer types",
                statement: "Connectivity vs arrangement.",
              },
            ],
            steps: [
              {
                reasoning: "Structural: different connectivity.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Stereoisomers: same connectivity, different arrangement.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Structural = connectivity; stereo = arrangement.",
          },
        },
        {
          id: "cipuc-u3-org-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two examples of functional groups.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functional groups",
                statement: "-OH, -COOH.",
              },
            ],
            steps: [
              {
                reasoning: "Hydroxyl (-OH).",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Carboxyl (-COOH).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "-OH, -COOH.",
          },
        },
        {
          id: "cipuc-u3-org-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why functional groups determine chemical properties.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functional groups",
                statement: "Reactive sites.",
              },
            ],
            steps: [
              {
                reasoning: "Functional groups are reactive sites.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Determine how molecule reacts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Same functional group = similar properties.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Reactive sites → determine properties.",
          },
        },
        {
          id: "cipuc-u3-org-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Draw structural isomers of C₄H₁₀.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Isomer drawing",
                statement: "Different carbon arrangements.",
              },
            ],
            steps: [
              {
                reasoning: "Butane: CH₃-CH₂-CH₂-CH₃.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "2-methylpropane: (CH₃)₃CH.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Two isomers exist.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Same formula C₄H₁₀, different structure.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Butane + 2-methylpropane.",
          },
        },
        {
          id: "cipuc-u3-org-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Ethene has formula:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "C₂H₄" },
              { id: "b", text: "C₂H₆" },
              { id: "c", text: "C₃H₆" },
              { id: "d", text: "CH₄" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Ethene", statement: "C₂H₄." },
            ],
            steps: [{ reasoning: "Ethene = C₂H₄.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) C₂H₄.",
          },
        },
        {
          id: "cipuc-u3-org-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a homologous series? Give example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Homologous series",
                statement: "Same general formula.",
              },
            ],
            steps: [
              {
                reasoning: "Group of compounds with same general formula.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "E.g., alkanes: methane, ethane, propane.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Same formula, differ by CH₂ — alkanes.",
          },
        },
        {
          id: "cipuc-u3-org-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between saturated and unsaturated hydrocarbons.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Saturated vs unsaturated",
                statement: "Single vs multiple bonds.",
              },
            ],
            steps: [
              {
                reasoning: "Saturated: only single bonds — alkanes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Unsaturated: C=C or C≡C — alkenes/alkynes.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Unsaturated can undergo addition reactions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Saturated = single; unsaturated = multiple bonds.",
          },
        },
        {
          id: "cipuc-u3-org-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Propane has formula:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "C₃H₈" },
              { id: "b", text: "C₂H₆" },
              { id: "c", text: "C₄H₁₀" },
              { id: "d", text: "CH₄" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              { kind: "definition", name: "Propane", statement: "C₃H₈." },
            ],
            steps: [{ reasoning: "Propane = C₃H₈.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) C₃H₈.",
          },
        },
        {
          id: "cipuc-u3-org-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a functional group? Why is it important?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Functional group importance",
                statement: "Determines reactivity.",
              },
            ],
            steps: [
              {
                reasoning: "Group of atoms determining properties.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Predicts chemical reactions.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Determines properties and reactivity.",
          },
        },
        {
          id: "cipuc-u3-org-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Name the functional group in CH₃CH₂COOH and predict its properties.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Functional group identification",
                statement: "-COOH = carboxylic acid.",
              },
            ],
            steps: [
              {
                reasoning: "-COOH = carboxylic acid.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Weak acid — donates H⁺.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Reacts with bases to form salts.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Name: propanoic acid.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Carboxylic acid — propanoic acid.",
          },
        },
        {
          id: "cipuc-u3-org-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the difference between an alcohol and a phenol?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Alcohol vs phenol",
                statement: "Aliphatic vs aromatic -OH.",
              },
            ],
            steps: [
              {
                reasoning: "Alcohol: -OH on aliphatic carbon.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Phenol: -OH on benzene ring.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Alcohol = aliphatic -OH; phenol = aromatic -OH.",
          },
        },
      ],
    },
    {
      id: "cipuc-u3-reactions",
      title: "Organic reactions",
      skill:
        "Explain substitution, addition, elimination, and polymerisation reactions.",
      lesson: {
        sections: [
          {
            heading: "Substitution reactions",
            body: "**Substitution**: atom/group replaced. **Halogenation**: alkane + Cl₂/Br₂ → haloalkane + HX (UV light). **Nucleophilic substitution**: haloalkane + OH⁻ → alcohol + halide. **Electrophilic substitution**: benzene + HNO₃ → nitrobenzene.",
          },
          {
            heading: "Addition reactions",
            body: "**Addition**: unsaturated → saturated. **Hydrogenation**: C=C + H₂ → C-C (Ni catalyst). **Halogenation**: C=C + Br₂ → dibromoalkane (decolourises bromine water). **Hydration**: C=C + H₂O → alcohol (H₃PO₄ catalyst). **Hydrohalogenation**: C=C + HX → haloalkane.",
          },
          {
            heading: "Polymerisation and other reactions",
            body: "**Addition polymerisation**: monomers with C=C join — e.g., ethene → polyethene. **Condensation polymerisation**: monomers join with loss of small molecule — e.g., nylon, polyester. **Oxidation**: alcohol → aldehyde → carboxylic acid. **Esterification**: alcohol + carboxylic acid → ester + water.",
          },
        ],
        keyFormulas: [
          {
            name: "Substitution",
            statement: "Atom/group replaced",
          },
          {
            name: "Addition",
            statement: "Unsaturated → saturated",
          },
          {
            name: "Addition polymerisation",
            statement: "C=C monomers join",
          },
          {
            name: "Condensation",
            statement: "Loss of small molecule",
          },
        ],
        workedExample: {
          problem: "What happens when ethene reacts with bromine?",
          solution:
            "Addition reaction: C₂H₄ + Br₂ → C₂H₄Br₂ — decolourises bromine water.",
        },
      },
      questions: [
        {
          id: "cipuc-u3-react-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A substitution reaction is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Atom/group replaced by another" },
              { id: "b", text: "Two molecules combine" },
              { id: "c", text: "Molecule splits" },
              { id: "d", text: "No change" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Substitution",
                statement: "Replaced.",
              },
            ],
            steps: [
              {
                reasoning: "Substitution = replaced.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Replaced.",
          },
        },
        {
          id: "cipuc-u3-react-q2",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An addition reaction is:",
          response: {
            type: "mcq",
            choices: [
              {
                id: "a",
                text: "Two molecules combine — unsaturated → saturated",
              },
              { id: "b", text: "Replacement" },
              { id: "c", text: "Splitting" },
              { id: "d", text: "No change" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Addition",
                statement: "Combine — unsaturated → saturated.",
              },
            ],
            steps: [
              { reasoning: "Addition = combine.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Combine — unsaturated → saturated.",
          },
        },
        {
          id: "cipuc-u3-react-q3",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "An elimination reaction is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Molecule splits — saturated → unsaturated" },
              { id: "b", text: "Replacement" },
              { id: "c", text: "Addition" },
              { id: "d", text: "No change" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Elimination",
                statement: "Splits — saturated → unsaturated.",
              },
            ],
            steps: [
              { reasoning: "Elimination = splits.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Splits — saturated → unsaturated.",
          },
        },
        {
          id: "cipuc-u3-react-q4",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Hydrogenation adds:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "H₂ across C=C" },
              { id: "b", text: "O₂" },
              { id: "c", text: "Br₂" },
              { id: "d", text: "HCl only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydrogenation",
                statement: "Adds H₂.",
              },
            ],
            steps: [
              { reasoning: "Hydrogenation = H₂.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) H₂ across C=C.",
          },
        },
        {
          id: "cipuc-u3-react-q5",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Bromine water is decolourised by:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alkenes" },
              { id: "b", text: "Alkanes" },
              { id: "c", text: "Alcohols" },
              { id: "d", text: "All organics" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bromine test",
                statement: "Alkenes decolourise.",
              },
            ],
            steps: [
              {
                reasoning: "Alkenes decolourise bromine.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Alkenes.",
          },
        },
        {
          id: "cipuc-u3-react-q6",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Addition polymerisation produces:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Polymer from monomers" },
              { id: "b", text: "Monomer" },
              { id: "c", text: "Gas" },
              { id: "d", text: "Liquid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Addition polymerisation",
                statement: "Monomers → polymer.",
              },
            ],
            steps: [
              { reasoning: "Addition = polymer.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Polymer from monomers.",
          },
        },
        {
          id: "cipuc-u3-react-q7",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Condensation polymerisation produces:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Polymer + small molecule" },
              { id: "b", text: "Only polymer" },
              { id: "c", text: "Only monomer" },
              { id: "d", text: "Gas" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Condensation",
                statement: "Polymer + small molecule.",
              },
            ],
            steps: [
              {
                reasoning: "Condensation = polymer + byproduct.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Polymer + small molecule.",
          },
        },
        {
          id: "cipuc-u3-react-q8",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Esterification is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Alcohol + carboxylic acid → ester + water" },
              { id: "b", text: "Alcohol only" },
              { id: "c", text: "Acid only" },
              { id: "d", text: "No reaction" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Esterification",
                statement: "Alcohol + acid → ester.",
              },
            ],
            steps: [
              {
                reasoning: "Esterification = alcohol + acid.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Alcohol + acid → ester.",
          },
        },
        {
          id: "cipuc-u3-react-q9",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Oxidation of alcohol produces:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Aldehyde then carboxylic acid" },
              { id: "b", text: "Only aldehyde" },
              { id: "c", text: "Only acid" },
              { id: "d", text: "No change" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Alcohol oxidation",
                statement: "Aldehyde → acid.",
              },
            ],
            steps: [
              {
                reasoning: "Alcohol → aldehyde → acid.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Aldehyde then acid.",
          },
        },
        {
          id: "cipuc-u3-react-q10",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "Nucleophilic substitution involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Nucleophile replaces leaving group" },
              { id: "b", text: "Electrophile replaces" },
              { id: "c", text: "No replacement" },
              { id: "d", text: "Addition only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nucleophilic substitution",
                statement: "Nucleophile replaces.",
              },
            ],
            steps: [
              {
                reasoning: "Nucleophilic = nucleophile replaces.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Nucleophile replaces.",
          },
        },
        {
          id: "cipuc-u3-react-q11",
          difficulty: "core",
          totalMarks: 1,
          stem: "Electrophilic substitution involves:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Electrophile replaces H on benzene" },
              { id: "b", text: "Nucleophile replaces" },
              { id: "c", text: "No replacement" },
              { id: "d", text: "Addition only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Electrophilic substitution",
                statement: "Electrophile replaces H.",
              },
            ],
            steps: [
              {
                reasoning: "Electrophilic = electrophile replaces.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Electrophile replaces H.",
          },
        },
        {
          id: "cipuc-u3-react-q12",
          difficulty: "core",
          totalMarks: 1,
          stem: "Hydration of ethene produces:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethanol" },
              { id: "b", text: "Ethanoic acid" },
              { id: "c", text: "Ethane" },
              { id: "d", text: "Ethane" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Hydration",
                statement: "Ethene → ethanol.",
              },
            ],
            steps: [
              { reasoning: "Ethene + H₂O → ethanol.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Ethanol.",
          },
        },
        {
          id: "cipuc-u3-react-q13",
          difficulty: "core",
          totalMarks: 1,
          stem: "Hydrohalogenation adds:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "HX across C=C" },
              { id: "b", text: "H₂" },
              { id: "c", text: "Br₂" },
              { id: "d", text: "H₂O" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydrohalogenation",
                statement: "Adds HX.",
              },
            ],
            steps: [
              { reasoning: "Hydrohalogenation = HX.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) HX across C=C.",
          },
        },
        {
          id: "cipuc-u3-react-q14",
          difficulty: "core",
          totalMarks: 1,
          stem: "A monomer is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Small molecule that joins to form polymer" },
              { id: "b", text: "Large molecule" },
              { id: "c", text: "Polymer" },
              { id: "d", text: "No molecule" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Monomer",
                statement: "Polymer building block.",
              },
            ],
            steps: [
              {
                reasoning: "Monomer = building block.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Polymer building block.",
          },
        },
        {
          id: "cipuc-u3-react-q15",
          difficulty: "core",
          totalMarks: 1,
          stem: "A polymer is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Large molecule made of many monomers" },
              { id: "b", text: "Small molecule" },
              { id: "c", text: "Monomer" },
              { id: "d", text: "No molecule" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polymer",
                statement: "Many monomers.",
              },
            ],
            steps: [
              {
                reasoning: "Polymer = many monomers.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Many monomers.",
          },
        },
        {
          id: "cipuc-u3-react-q16",
          difficulty: "core",
          totalMarks: 1,
          stem: "Polyethene is made from:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethene monomers" },
              { id: "b", text: "Ethane" },
              { id: "c", text: "Ethanol" },
              { id: "d", text: "Ethanoic acid" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Polyethene",
                statement: "Ethene monomers.",
              },
            ],
            steps: [
              { reasoning: "Polyethene = ethene.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Ethene monomers.",
          },
        },
        {
          id: "cipuc-u3-react-q17",
          difficulty: "core",
          totalMarks: 1,
          stem: "Nylon is a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Condensation polymer" },
              { id: "b", text: "Addition polymer" },
              { id: "c", text: "Monomer" },
              { id: "d", text: "No polymer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nylon",
                statement: "Condensation polymer.",
              },
            ],
            steps: [
              { reasoning: "Nylon = condensation.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Condensation polymer.",
          },
        },
        {
          id: "cipuc-u3-react-q18",
          difficulty: "core",
          totalMarks: 1,
          stem: "PVC is a:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Addition polymer" },
              { id: "b", text: "Condensation polymer" },
              { id: "c", text: "Monomer" },
              { id: "d", text: "No polymer" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "PVC",
                statement: "Addition polymer.",
              },
            ],
            steps: [{ reasoning: "PVC = addition.", marks: 1, markCode: "M" }],
            finalAnswer: "(a) Addition polymer.",
          },
        },
        {
          id: "cipuc-u3-react-q19",
          difficulty: "core",
          totalMarks: 1,
          stem: "A leaving group is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Group displaced in substitution" },
              { id: "b", text: "Incoming group" },
              { id: "c", text: "Catalyst" },
              { id: "d", text: "Product only" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Leaving group",
                statement: "Displaced group.",
              },
            ],
            steps: [
              { reasoning: "Leaving = displaced.", marks: 1, markCode: "M" },
            ],
            finalAnswer: "(a) Displaced group.",
          },
        },
        {
          id: "cipuc-u3-react-q20",
          difficulty: "core",
          totalMarks: 2,
          stem: "Distinguish between substitution and addition reactions.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Substitution vs addition",
                statement: "Replace vs combine.",
              },
            ],
            steps: [
              {
                reasoning: "Substitution: atom/group replaced.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Addition: two molecules combine — unsaturated → saturated.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Substitution = replace; addition = combine.",
          },
        },
        {
          id: "cipuc-u3-react-q21",
          difficulty: "core",
          totalMarks: 2,
          stem: "State two differences between addition and condensation polymerisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Polymer types",
                statement: "No byproduct vs byproduct.",
              },
            ],
            steps: [
              {
                reasoning: "Addition: no byproduct — C=C monomers.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Condensation: small molecule released — e.g., water.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Addition = no byproduct; condensation = byproduct.",
          },
        },
        {
          id: "cipuc-u3-react-q22",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain why alkenes decolourise bromine water but alkanes don't.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Bromine test",
                statement: "C=C reacts.",
              },
            ],
            steps: [
              {
                reasoning: "Alkenes have C=C — undergo addition.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Br₂ adds across C=C — bromine consumed.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Alkanes saturated — no reaction — bromine stays orange.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Alkenes react with Br₂; alkanes don't.",
          },
        },
        {
          id: "cipuc-u3-react-q23",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain the mechanism of addition reaction between ethene and bromine.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Addition mechanism",
                statement: "π bond breaks, Br adds.",
              },
            ],
            steps: [
              {
                reasoning: "C=C π bond breaks.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Br₂ approaches — polarises.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Br⁺ adds to one carbon — carbocation intermediate.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Br⁻ adds to other carbon — 1,2-dibromoethane.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "π breaks → Br⁺ adds → Br⁻ adds → dibromoethane.",
          },
        },
        {
          id: "cipuc-u3-react-q24",
          difficulty: "core",
          totalMarks: 1,
          stem: "Fermentation produces:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Ethanol + CO₂" },
              { id: "b", text: "Methanol" },
              { id: "c", text: "Propane" },
              { id: "d", text: "No product" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Fermentation",
                statement: "Ethanol + CO₂.",
              },
            ],
            steps: [
              {
                reasoning: "Fermentation = ethanol + CO₂.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Ethanol + CO₂.",
          },
        },
        {
          id: "cipuc-u3-react-q25",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is a monomer? Give example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Monomer",
                statement: "Polymer building block.",
              },
            ],
            steps: [
              {
                reasoning: "Small molecule that joins to form polymer.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "E.g., ethene for polyethene.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Building block — ethene.",
          },
        },
        {
          id: "cipuc-u3-react-q26",
          difficulty: "core",
          totalMarks: 3,
          stem: "Explain the difference between addition and condensation polymerisation.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Polymer types",
                statement: "No byproduct vs byproduct.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Addition: monomers join without byproduct — C=C opens.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Condensation: monomers join with loss of small molecule.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Examples: PE/PVC (addition); nylon/polyester (condensation).",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Addition = no byproduct; condensation = byproduct.",
          },
        },
        {
          id: "cipuc-u3-react-q27",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "A nucleophile is:",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Electron-rich species that donates electrons" },
              { id: "b", text: "Electron-poor" },
              { id: "c", text: "Neutral" },
              { id: "d", text: "No charge" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Nucleophile",
                statement: "Electron-rich.",
              },
            ],
            steps: [
              {
                reasoning: "Nucleophile = electron-rich.",
                marks: 1,
                markCode: "M",
              },
            ],
            finalAnswer: "(a) Electron-rich.",
          },
        },
        {
          id: "cipuc-u3-react-q28",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is an electrophile? Give example.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Electrophile",
                statement: "Electron-poor.",
              },
            ],
            steps: [
              {
                reasoning: "Electron-poor species that accepts electrons.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "E.g., H⁺, Br⁺, NO₂⁺.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Electron-poor — accepts electrons.",
          },
        },
        {
          id: "cipuc-u3-react-q29",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why alkanes undergo substitution while alkenes undergo addition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "skill",
                name: "Reaction types",
                statement: "Saturated vs unsaturated.",
              },
            ],
            steps: [
              {
                reasoning: "Alkanes saturated — only substitution possible.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Alkenes unsaturated — C=C can add across.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "C=C π bond breaks easily — addition favourable.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Alkanes have strong σ bonds — substitution needs UV.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Saturated = substitution; unsaturated = addition.",
          },
        },
        {
          id: "cipuc-u3-react-q30",
          difficulty: "core",
          totalMarks: 2,
          stem: "What is the general equation for combustion of alkanes?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "principle",
                name: "Combustion equation",
                statement: "Alkane + O₂ → CO₂ + H₂O.",
              },
            ],
            steps: [
              {
                reasoning: "Alkane + oxygen → carbon dioxide + water.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Exothermic — releases energy.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Alkane + O₂ → CO₂ + H₂O.",
          },
        },
      ],
    },
  ],
};
