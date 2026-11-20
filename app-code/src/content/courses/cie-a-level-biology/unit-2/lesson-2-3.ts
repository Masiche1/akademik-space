import type { Lesson } from "../../../types.ts";

export const lesson223b: Lesson = {
  id: "cial-b-u2-lesson-2-3",
  code: "2-3",
  title: "Water and enzymes",
  goal: "I CAN explain water's properties and enzyme action including specificity and factors affecting rate.",
  standards: ["9700 Unit 2: biological molecules; enzymes"],
  vocabulary: [
    {
      term: "Hydrogen bond",
      definition:
        "Weak bond between δ+ hydrogen and δ− oxygen of adjacent water molecules.",
    },
    {
      term: "Enzyme",
      definition:
        "Biological catalyst — usually a protein that speeds reactions without being consumed.",
    },
    {
      term: "Active site",
      definition: "Region of enzyme where substrate binds.",
    },
    { term: "Substrate", definition: "Molecule acted upon by an enzyme." },
    {
      term: "Lock and key",
      definition: "Model: active site shape exactly fits substrate.",
    },
    {
      term: "Denaturation",
      definition:
        "Loss of 3D shape → loss of function; caused by heat/extreme pH.",
    },
  ],
  concepts: [
    {
      id: "cial-b-u2-water",
      title: "Properties of water",
      skill: "Explain hydrogen bonding and its biological consequences.",
      lesson: {
        sections: [
          {
            heading: "Hydrogen bonding",
            body: "Water is polar: O is δ−, H is δ+. Hydrogen bonds form between molecules — weak individually but numerous collectively. This gives water unusual properties.",
          },
          {
            heading: "Biological properties",
            body: "High specific heat capacity: buffers temperature (metabolism, climate). High latent heat of vaporisation: cooling by evaporation (sweating). Cohesion: water rises in xylem; surface tension. Ice floats: insulates water below. Universal solvent: dissolves ions/polar molecules.",
          },
          {
            heading: "Metabolic role",
            body: "Water is a reactant in hydrolysis and photosynthesis; a product of condensation and respiration. It also lubricates, transports substances and provides a medium for reactions.",
          },
        ],
        keyFormulas: [
          {
            name: "Water",
            statement:
              "Polarity+H-bonds→high cp/latent heat, cohesion, solvent properties.",
          },
        ],
        workedExample: {
          problem: "Why does sweating cool the body?",
          solution:
            "Water evaporates — needs latent heat of vaporisation drawn from skin → cooling.",
        },
      },
      questions: [
        {
          id: "cial-b-u2-wp-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What bond forms between water molecules?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "Hydrogen bond" },
              { id: "b", text: "Covalent bond" },
              { id: "c", text: "Ionic bond" },
              { id: "d", text: "Peptide bond" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Hydrogen bond",
                statement:
                  "Weak bond between δ+ H and δ− O of adjacent water molecules.",
              },
            ],
            steps: [
              {
                reasoning: "H-bonds between water molecules.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Hydrogen bond",
            commonErrors: ["Confusing with covalent bonds within a molecule."],
          },
        },
        {
          id: "cial-b-u2-wp-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Give two biological properties of water and explain one.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Water properties",
                statement:
                  "High specific heat, latent heat, cohesion, solvent — from H-bonds.",
              },
            ],
            steps: [
              {
                reasoning: "Any two properties named.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "One explained via H-bonds.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "e.g. high specific heat (buffers temp); high latent heat (cooling evaporation).",
            commonErrors: ["Listing without explaining mechanism."],
          },
        },
        {
          id: "cial-b-u2-wp-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Explain why ice floats and why this matters biologically.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Ice floats",
                statement:
                  "H-bonds hold molecules apart in lattice → less dense → floats; insulates water below.",
              },
            ],
            steps: [
              {
                reasoning: "H-bond lattice is less dense than liquid.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Less dense → floats.", marks: 1, markCode: "M" },
              {
                reasoning: "Insulates water beneath in winter.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Ice is less dense (H-bond lattice) → floats → insulates below.",
            commonErrors: ["Saying ice is denser."],
          },
        },
        {
          id: "cial-b-u2-wp-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Water.",
          parts: [
            { label: "a", prompt: "Bond between water molecules?", marks: 1 },
            { label: "b", prompt: "Two biological properties?", marks: 2 },
            { label: "c", prompt: "Why does ice float?", marks: 3 },
            { label: "d", prompt: "Water's metabolic roles?", marks: 3 },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Water",
                statement: "H-bonds+properties+ice+metabolism.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Hydrogen bond.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Any two of specific heat/latent/cohesion/solvent.",
                marks: 1,
                markCode: "M",
              },
              { part: "b", reasoning: "Two named.", marks: 1, markCode: "A" },
              {
                part: "c",
                reasoning: "Lattice less dense.",
                marks: 1,
                markCode: "M",
              },
              { part: "c", reasoning: "Floats.", marks: 1, markCode: "M" },
              {
                part: "c",
                reasoning: "Insulates below.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "Reactant in hydrolysis/photosynthesis.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Product of condensation/respiration.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Also solvent/transport.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) H-bond (b) two properties (c) less dense lattice (d) reactant+product+solvent",
          },
        },
      ],
    },
    {
      id: "cial-b-u2-enzymes",
      title: "Enzyme action",
      skill: "Explain enzyme specificity, rate factors and inhibition.",
      lesson: {
        sections: [
          {
            heading: "Lock and key",
            body: "Enzymes are specific: active site shape complements substrate (lock and key model). Enzyme-substrate complex forms → reaction → products released; enzyme unchanged. Lower activation energy → faster reaction.",
          },
          {
            heading: "Rate factors",
            body: "Temperature: rate rises to optimum (~40°C human enzymes) then falls — denaturation. pH: optimum varies (pepsin ~2, trypsin ~8). Substrate concentration: rises then plateaus (saturation). Enzyme concentration: linear until substrate limits.",
          },
          {
            heading: "Inhibition",
            body: "Competitive inhibitor: resembles substrate, blocks active site — overcome by more substrate. Non-competitive: binds elsewhere, changes active site shape — cannot overcome. Control of metabolism.",
          },
        ],
        keyFormulas: [
          {
            name: "Enzymes",
            statement:
              "Specific active site+lower Ea; temp/pH optimum then denaturation.",
          },
        ],
        workedExample: {
          problem:
            "Why does enzyme rate plateau at high substrate concentration?",
          solution:
            "All active sites occupied — enzyme saturated; rate limited by enzyme concentration.",
        },
      },
      questions: [
        {
          id: "cial-b-u2-ez-q1",
          difficulty: "foundation",
          totalMarks: 1,
          stem: "What is an enzyme?",
          response: {
            type: "mcq",
            choices: [
              { id: "a", text: "A biological catalyst, usually a protein" },
              { id: "b", text: "A type of substrate" },
              { id: "c", text: "A reactant" },
              { id: "d", text: "A product" },
            ],
            correctChoiceId: "a",
          },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enzyme",
                statement:
                  "Biological catalyst — protein that speeds reactions without being consumed.",
              },
            ],
            steps: [
              {
                reasoning: "Enzyme = catalyst, unchanged after reaction.",
                marks: 1,
                markCode: "B",
              },
            ],
            finalAnswer: "**(a)** Biological catalyst",
            commonErrors: ["Thinking enzymes are used up."],
          },
        },
        {
          id: "cial-b-u2-ez-q2",
          difficulty: "core",
          totalMarks: 2,
          stem: "Why does enzyme activity fall after the temperature optimum?",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Denaturation",
                statement:
                  "Above optimum, bonds break → 3D shape lost → active site deforms.",
              },
            ],
            steps: [
              {
                reasoning: "Heat breaks bonds maintaining tertiary structure.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Active site deforms → substrate can't bind.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer: "Denaturation — shape lost, active site deforms.",
            commonErrors: ["Saying enzyme is 'killed'."],
          },
        },
        {
          id: "cial-b-u2-ez-q3",
          difficulty: "challenge",
          totalMarks: 4,
          stem: "Distinguish competitive and non-competitive inhibition.",
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Inhibition",
                statement:
                  "Competitive=blocks active site, overcome by substrate; non-competitive=binds elsewhere, changes shape.",
              },
            ],
            steps: [
              {
                reasoning:
                  "Competitive: resembles substrate, competes for active site.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning: "Non-competitive: binds elsewhere, alters shape.",
                marks: 1,
                markCode: "M",
              },
              {
                reasoning:
                  "Competitive overcome by more substrate; non-competitive not.",
                marks: 1,
                markCode: "M",
              },
              { reasoning: "Clear distinction.", marks: 1, markCode: "A" },
            ],
            finalAnswer:
              "Competitive blocks site (overcome by substrate); non-competitive alters shape elsewhere.",
            commonErrors: ["Treating both as identical."],
          },
        },
        {
          id: "cial-b-u2-ez-q4",
          difficulty: "challenge",
          totalMarks: 9,
          stem: "Enzymes.",
          parts: [
            { label: "a", prompt: "Define enzyme.", marks: 1 },
            { label: "b", prompt: "Why rate falls above optimum?", marks: 2 },
            { label: "c", prompt: "Competitive vs non-competitive?", marks: 3 },
            {
              label: "d",
              prompt: "Explain rate plateau at high substrate.",
              marks: 3,
            },
          ],
          response: { type: "open" },
          markscheme: {
            principles: [
              {
                kind: "definition",
                name: "Enzymes",
                statement: "Catalyst+denaturation+inhibition+plateau.",
              },
            ],
            steps: [
              {
                part: "a",
                reasoning: "Biological catalyst, unchanged.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Denaturation occurs.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "b",
                reasoning: "Shape lost → no binding.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "c",
                reasoning: "Competitive: blocks active site.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Non-competitive: binds elsewhere.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "c",
                reasoning: "Overcome vs not.",
                marks: 1,
                markCode: "A",
              },
              {
                part: "d",
                reasoning: "All active sites occupied.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Saturation reached.",
                marks: 1,
                markCode: "M",
              },
              {
                part: "d",
                reasoning: "Rate limited by enzyme.",
                marks: 1,
                markCode: "A",
              },
            ],
            finalAnswer:
              "(a) catalyst (b) denaturation (c) comp vs non-comp (d) saturation",
          },
        },
      ],
    },
  ],
  notes: [
    {
      id: "cial-b-u2-water-enzymes-notes",
      title: "Water and enzymes — revision notes",
      summary: "Water's properties and enzyme action, specificity and factors.",
      sections: [
        {
          heading: "Water",
          body: "Polar → H-bonds → high specific heat, latent heat, cohesion, solvent, ice floats. Reactant in hydrolysis/photosynthesis; product of condensation/respiration.",
        },
        {
          heading: "Enzymes",
          body: "Specific active site (lock and key). Lower activation energy. Rate affected by temperature (optimum then denaturation), pH, substrate/enzyme concentration. Competitive vs non-competitive inhibition.",
        },
        {
          heading: "Exam checklist",
          body: "Can you explain H-bond properties? Describe enzyme action? Distinguish inhibition types? Explain rate plateau?",
        },
      ],
    },
  ],
};
